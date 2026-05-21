// TI4 Tracker — Supabase Sync Engine
// Uses Realtime WebSocket with REST polling fallback

let supabase = null;
let channel = null;
let roomCode = null;
let isAdmin = false;
let onStateCallback = null;
let onConnectCallback = null;
let onDisconnectCallback = null;
let onPresenceCallback = null;
let connected = false;
let pollInterval = null;
let lastStateHash = null;

export async function initSync(config) {
  const { url, anonKey } = config;
  if (!window._supabaseLoaded) {
    await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js');
    window._supabaseLoaded = true;
  }
  const factory = window.supabase?.createClient || window.Supabase?.createClient;
  if (!factory) throw new Error('Supabase client not loaded');
  supabase = factory(url, anonKey);
  return supabase;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = resolve;
    s.onerror = () => reject(new Error('Failed to load ' + src));
    document.head.appendChild(s);
  });
}

// ── REST polling fallback ─────────────────────────────────────────────────
function startPolling(code, intervalMs = 3000) {
  stopPolling();
  console.log('[sync] starting REST poll every', intervalMs, 'ms');
  pollInterval = setInterval(async () => {
    const state = await fetchLatestState(code);
    if (!state) return;
    const hash = JSON.stringify(state).length + '_' + (state.round || 0) + '_' + (state.players?.length || 0);
    if (hash !== lastStateHash) {
      lastStateHash = hash;
      console.log('[sync] poll: state changed, notifying');
      if (onStateCallback) onStateCallback(state);
    }
  }, intervalMs);
}

function stopPolling() {
  if (pollInterval) { clearInterval(pollInterval); pollInterval = null; }
}

// ── Join room ─────────────────────────────────────────────────────────────
export async function joinRoom(code, admin, callbacks = {}) {
  stopPolling();
  if (channel) { try { await channel.unsubscribe(); } catch(e) {} channel = null; }

  roomCode = code.toUpperCase();
  isAdmin = admin;
  onStateCallback      = callbacks.onState;
  onConnectCallback    = callbacks.onConnect;
  onDisconnectCallback = callbacks.onDisconnect;
  onPresenceCallback   = callbacks.onPresence;
  connected = false;
  lastStateHash = null;

  if (!supabase) throw new Error('Call initSync() before joinRoom()');

  // For guests: try WebSocket first, fall back to polling if it fails
  if (!isAdmin) {
    return joinAsGuestWithFallback(roomCode);
  }

  // Admin: use WebSocket + REST persist
  return new Promise((resolve) => {
    const presenceKey = 'admin';
    channel = supabase.channel('ti4-' + roomCode, {
      config: { presence: { key: presenceKey } }
    });
    channel
      .on('presence', { event: 'sync' }, () => {
        const ps = channel.presenceState();
        if (onPresenceCallback) onPresenceCallback(Object.keys(ps).length);
      })
      .subscribe(async (status) => {
        console.log('[sync] admin channel:', status);
        if (status === 'SUBSCRIBED') {
          connected = true;
          try { await channel.track({ role: 'admin', at: Date.now() }); } catch(e) {}
          if (onConnectCallback) onConnectCallback();
          resolve(roomCode);
        } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          // Admin WebSocket failed — still mark connected for REST-only mode
          connected = true;
          console.warn('[sync] admin WebSocket failed, using REST-only mode');
          if (onConnectCallback) onConnectCallback();
          resolve(roomCode);
        } else if (status === 'CLOSED') {
          connected = false;
          if (onDisconnectCallback) onDisconnectCallback();
        }
      });
  });
}

async function joinAsGuestWithFallback(code) {
  // First do an immediate REST fetch — fastest path
  console.log('[sync] guest: trying immediate REST fetch');
  const immediate = await fetchLatestState(code);
  if (immediate) {
    console.log('[sync] guest: got state via REST immediately');
    connected = true;
    if (onConnectCallback) onConnectCallback();
    if (onStateCallback) onStateCallback(immediate);
    // Start polling for updates
    startPolling(code, 3000);
    return code;
  }

  // No state yet — try WebSocket for realtime, poll as backup
  console.log('[sync] guest: no immediate state, trying WebSocket + polling');

  // Start polling immediately as backup
  connected = true;
  if (onConnectCallback) onConnectCallback();
  startPolling(code, 3000);

  // Also try WebSocket for faster updates
  try {
    const presenceKey = 'guest-' + Date.now();
    channel = supabase.channel('ti4-' + code, {
      config: { presence: { key: presenceKey } }
    });
    channel
      .on('broadcast', { event: 'state' }, ({ payload }) => {
        if (payload && onStateCallback) {
          console.log('[sync] guest: got realtime broadcast');
          onStateCallback(payload);
        }
      })
      .on('broadcast', { event: 'victory' }, ({ payload }) => {
        if (payload && onStateCallback) onStateCallback(payload, true);
      })
      .subscribe(async (status) => {
        console.log('[sync] guest WebSocket:', status);
        if (status === 'SUBSCRIBED') {
          // WebSocket works! Stop polling (less efficient) and rely on broadcast
          // But keep polling as safety net every 10s
          stopPolling();
          startPolling(code, 10000);
          try { await channel.track({ role: 'guest', at: Date.now() }); } catch(e) {}
        }
        // Don't resolve here — already resolved above
      });
  } catch(e) {
    console.warn('[sync] WebSocket setup failed:', e.message);
  }

  return code;
}

// ── Broadcast + persist (admin) ───────────────────────────────────────────
export async function broadcastState(gameState) {
  if (!gameState) return;
  await persistState(gameState);
  if (channel && connected && isAdmin) {
    try { await channel.send({ type: 'broadcast', event: 'state', payload: gameState }); }
    catch(e) { console.warn('[sync] broadcast failed (REST-only mode ok):', e.message); }
  }
}

export async function broadcastVictory(gameState) {
  if (!gameState) return;
  await persistState(gameState);
  if (channel && connected && isAdmin) {
    try { await channel.send({ type: 'broadcast', event: 'victory', payload: gameState }); }
    catch(e) { console.warn('[sync] victory broadcast failed:', e.message); }
  }
}

async function persistState(state) {
  if (!supabase || !roomCode) return;
  try {
    const { error } = await supabase.from('ti4_rooms').upsert(
      { room_code: roomCode, state: state, updated_at: new Date().toISOString() },
      { onConflict: 'room_code' }
    );
    if (error) console.warn('[sync] persist error:', error.message);
    else console.log('[sync] persisted OK');
  } catch(e) { console.warn('[sync] persist failed:', e); }
}

export async function fetchLatestState(code) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('ti4_rooms').select('state')
      .eq('room_code', code.toUpperCase()).maybeSingle();
    if (error) { console.warn('[sync] fetch error:', error.message); return null; }
    return data?.state || null;
  } catch(e) { console.warn('[sync] fetch exception:', e.message); return null; }
}

export async function saveCompletedGame(gameState) {
  if (!supabase) return;
  try {
    await supabase.from('ti4_history').insert({
      room_code: roomCode, state: gameState,
      played_at: new Date().toISOString(),
      players: (gameState.players || []).map(p => p.name),
      winner: gameState.winner || null,
      rounds: gameState.round, vp_goal: gameState.vpGoal
    });
  } catch(e) { console.warn('[sync] saveCompleted failed:', e); }
}

export async function fetchHistory() {
  if (!supabase) return [];
  try {
    const { data } = await supabase.from('ti4_history').select('*')
      .order('played_at', { ascending: false }).limit(50);
    return data || [];
  } catch(e) { return []; }
}

export async function fetchGameDetail(id) {
  if (!supabase) return null;
  try {
    const { data } = await supabase.from('ti4_history').select('*').eq('id', id).maybeSingle();
    return data || null;
  } catch(e) { return null; }
}

export function isConnected() { return connected; }
export function getRoomCode()  { return roomCode; }
export function getIsAdmin()   { return isAdmin; }

export function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export async function leaveRoom() {
  stopPolling();
  if (channel) { try { await channel.unsubscribe(); } catch(e) {} channel = null; }
  connected = false; roomCode = null;
}
