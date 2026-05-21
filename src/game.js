// TI4 Tracker — Game State & Logic
import { STARTING_TECH, TECHNOLOGIES, FACTIONS } from './data.js';
import { broadcastState, broadcastVictory, saveCompletedGame } from './sync.js';
import { saveDraft, saveGameToHistory } from './storage.js';

// ── Default state factory ─────────────────────────────────────────────────
export function defaultState() {
  return {
    players: [],
    round: 1,
    vpGoal: 10,
    started: false,
    ended: false,
    winner: null,
    roomCode: null,
    timer: {
      startTime: null,
      endTime: null,
      paused: false,
      pausedAt: null,
      totalPaused: 0,
      roundMarks: []
    }
  };
}

export function defaultPlayer(name = '', faction = FACTIONS[0], color = '#c39bd3') {
  return {
    name,
    faction,
    color,
    vp: 0,
    techs: [],
    secretScored: [],
    supportThrone: false
  };
}

// ── State reference (module-level singleton) ──────────────────────────────
let _state = defaultState();
let _isAdmin = false;
let _onUpdate = null; // callback when state changes

export function initGame(isAdmin, onUpdate) {
  _isAdmin = isAdmin;
  _onUpdate = onUpdate;
}

export function getState() { return _state; }
export function getIsAdmin() { return _isAdmin; }

export function setState(newState) {
  _state = newState;
  if (_onUpdate) _onUpdate(_state);
}

// ── Mutations (admin only) ────────────────────────────────────────────────
async function commit(partial) {
  if (!_isAdmin) return;
  Object.assign(_state, partial);
  if (_onUpdate) _onUpdate(_state);
  await saveDraft(_state);
  await broadcastState(_state);
}

export async function startGame() {
  const now = new Date();
  await commit({
    started: true,
    timer: {
      startTime: now.toISOString(),
      endTime: null,
      paused: false,
      pausedAt: null,
      totalPaused: 0,
      roundMarks: []
    },
    players: _state.players.map(p => ({
      ...p,
      vp: 0,
      techs: (STARTING_TECH[p.faction] || []).filter(t => TECHNOLOGIES.find(x => x.name === t)),
      secretScored: [],
      supportThrone: false
    }))
  });
}

export async function setVP(playerIdx, delta) {
  const players = _state.players.map((p, i) => i === playerIdx ? { ...p, vp: Math.max(0, p.vp + delta) } : p);
  await commit({ players });
  // Check win condition
  const winner = players.find(p => p.vp >= _state.vpGoal);
  if (winner) await endGame(winner.name);
}

export async function setVPDirect(playerIdx, value) {
  const players = _state.players.map((p, i) => i === playerIdx ? { ...p, vp: Math.max(0, value) } : p);
  await commit({ players });
  const winner = players.find(p => p.vp >= _state.vpGoal);
  if (winner) await endGame(winner.name);
}

export async function nextRound() {
  const elapsed = elapsedMs();
  const roundMarks = [...(_state.timer.roundMarks || []), {
    round: _state.round,
    wallTime: new Date().toISOString(),
    elapsed
  }];
  await commit({ round: _state.round + 1, timer: { ..._state.timer, roundMarks } });
}

export async function togglePause() {
  const t = { ..._state.timer };
  if (!t.paused) {
    t.paused = true;
    t.pausedAt = new Date().toISOString();
  } else {
    t.totalPaused = (t.totalPaused || 0) + (Date.now() - new Date(t.pausedAt).getTime());
    t.paused = false;
    t.pausedAt = null;
  }
  await commit({ timer: t });
}

export async function addTech(playerIdx, techName) {
  const players = _state.players.map((p, i) =>
    i === playerIdx ? { ...p, techs: [...new Set([...p.techs, techName])] } : p);
  await commit({ players });
}

export async function removeTech(playerIdx, techName) {
  const players = _state.players.map((p, i) =>
    i === playerIdx ? { ...p, techs: p.techs.filter(t => t !== techName) } : p);
  await commit({ players });
}

export async function updatePlayer(playerIdx, fields) {
  const players = _state.players.map((p, i) => i === playerIdx ? { ...p, ...fields } : p);
  await commit({ players });
}

export async function addPlayer(player) {
  await commit({ players: [..._state.players, player] });
}

export async function removePlayer(playerIdx) {
  await commit({ players: _state.players.filter((_, i) => i !== playerIdx) });
}

export async function setVpGoal(goal) {
  await commit({ vpGoal: goal });
}

export async function endGame(winnerName = null) {
  const t = { ..._state.timer };
  if (!t.paused) {
    t.endTime = new Date().toISOString();
  } else {
    t.endTime = t.pausedAt;
  }
  const duration = elapsedMs();
  const final = { ..._state, ended: true, winner: winnerName, timer: t, duration };
  _state = final;
  if (_onUpdate) _onUpdate(_state);
  await saveDraft(_state);
  await broadcastVictory(_state);
  await saveCompletedGame(_state);
  await saveGameToHistory(_state);
}

// ── Timer helpers ─────────────────────────────────────────────────────────
export function elapsedMs() {
  const t = _state.timer;
  if (!t.startTime) return 0;
  const base = Date.now() - new Date(t.startTime).getTime();
  let paused = t.totalPaused || 0;
  if (t.paused && t.pausedAt) paused += Date.now() - new Date(t.pausedAt).getTime();
  return Math.max(0, base - paused);
}

export function formatMs(ms) {
  if (ms < 0) ms = 0;
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${s}s`;
}
