// TI4 Tracker — Local Storage (IndexedDB)
// Handles settings, draft game state, and local history cache

const DB_NAME = 'ti4tracker';
const DB_VER  = 1;
let db = null;

async function openDB() {
  if (db) return db;
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VER);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('settings'))
        d.createObjectStore('settings', { keyPath: 'key' });
      if (!d.objectStoreNames.contains('draft'))
        d.createObjectStore('draft', { keyPath: 'key' });
      if (!d.objectStoreNames.contains('history'))
        d.createObjectStore('history', { keyPath: 'id', autoIncrement: true });
    };
    req.onsuccess = e => { db = e.target.result; resolve(db); };
    req.onerror   = () => reject(req.error);
  });
}

function tx(store, mode = 'readonly') {
  return db.transaction(store, mode).objectStore(store);
}

// ── Settings ──────────────────────────────────────────────────────────────
export async function getSetting(key) {
  await openDB();
  return new Promise(resolve => {
    const req = tx('settings').get(key);
    req.onsuccess = () => resolve(req.result?.value ?? null);
    req.onerror   = () => resolve(null);
  });
}

export async function setSetting(key, value) {
  await openDB();
  return new Promise(resolve => {
    const req = tx('settings', 'readwrite').put({ key, value });
    req.onsuccess = () => resolve(true);
    req.onerror   = () => resolve(false);
  });
}

export async function getSettings() {
  await openDB();
  return new Promise(resolve => {
    const req = tx('settings').getAll();
    req.onsuccess = () => {
      const obj = {};
      (req.result || []).forEach(r => { obj[r.key] = r.value; });
      resolve(obj);
    };
    req.onerror = () => resolve({});
  });
}

// ── Draft (current game state backup) ────────────────────────────────────
export async function saveDraft(state) {
  await openDB();
  return new Promise(resolve => {
    const req = tx('draft', 'readwrite').put({ key: 'current', state, savedAt: Date.now() });
    req.onsuccess = () => resolve(true);
    req.onerror   = () => resolve(false);
  });
}

export async function loadDraft() {
  await openDB();
  return new Promise(resolve => {
    const req = tx('draft').get('current');
    req.onsuccess = () => resolve(req.result?.state ?? null);
    req.onerror   = () => resolve(null);
  });
}

export async function clearDraft() {
  await openDB();
  return new Promise(resolve => {
    const req = tx('draft', 'readwrite').delete('current');
    req.onsuccess = () => resolve(true);
    req.onerror   = () => resolve(false);
  });
}

// ── Local history cache ───────────────────────────────────────────────────
export async function saveGameToHistory(gameState) {
  await openDB();
  const entry = {
    roomCode: gameState.roomCode || '—',
    playedAt: new Date().toISOString(),
    players: (gameState.players || []).map(p => ({ name: p.name, faction: p.faction, vp: p.vp, color: p.color })),
    winner: gameState.winner || null,
    rounds: gameState.round || 1,
    vpGoal: gameState.vpGoal || 10,
    duration: gameState.duration || null,
    state: gameState
  };
  return new Promise(resolve => {
    const req = tx('history', 'readwrite').add(entry);
    req.onsuccess = () => resolve(req.result);
    req.onerror   = () => resolve(null);
  });
}

export async function getHistory() {
  await openDB();
  return new Promise(resolve => {
    const req = tx('history').getAll();
    req.onsuccess = () => {
      const results = (req.result || []).reverse(); // newest first
      resolve(results);
    };
    req.onerror = () => resolve([]);
  });
}

export async function getHistoryEntry(id) {
  await openDB();
  return new Promise(resolve => {
    const req = tx('history').get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror   = () => resolve(null);
  });
}

export async function deleteHistoryEntry(id) {
  await openDB();
  return new Promise(resolve => {
    const req = tx('history', 'readwrite').delete(id);
    req.onsuccess = () => resolve(true);
    req.onerror   = () => resolve(false);
  });
}

export async function clearHistory() {
  await openDB();
  return new Promise(resolve => {
    const req = tx('history', 'readwrite').clear();
    req.onsuccess = () => resolve(true);
    req.onerror   = () => resolve(false);
  });
}
