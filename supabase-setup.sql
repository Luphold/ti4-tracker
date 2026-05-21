-- TI4 Tracker — Supabase Database Setup
-- Run this in your Supabase project → SQL Editor → New Query
-- If you get a read-only error, run each block separately

-- ── Active rooms (live game state) ───────────────────────────────────────
CREATE TABLE ti4_rooms (
  room_code   TEXT PRIMARY KEY,
  state       JSONB NOT NULL DEFAULT '{}',
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Completed game history ────────────────────────────────────────────────
CREATE TABLE ti4_history (
  id          BIGSERIAL PRIMARY KEY,
  room_code   TEXT,
  state       JSONB NOT NULL DEFAULT '{}',
  played_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  players     JSONB,
  winner      TEXT,
  rounds      INT,
  vp_goal     INT
);

-- ── Row Level Security ────────────────────────────────────────────────────
ALTER TABLE ti4_rooms   ENABLE ROW LEVEL SECURITY;
ALTER TABLE ti4_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "rooms_select" ON ti4_rooms  FOR SELECT USING (true);
CREATE POLICY "rooms_insert" ON ti4_rooms  FOR INSERT WITH CHECK (true);
CREATE POLICY "rooms_update" ON ti4_rooms  FOR UPDATE USING (true);
CREATE POLICY "rooms_delete" ON ti4_rooms  FOR DELETE USING (true);

CREATE POLICY "history_select" ON ti4_history FOR SELECT USING (true);
CREATE POLICY "history_insert" ON ti4_history FOR INSERT WITH CHECK (true);

-- ── Enable Realtime ───────────────────────────────────────────────────────
ALTER PUBLICATION supabase_realtime ADD TABLE ti4_rooms;
