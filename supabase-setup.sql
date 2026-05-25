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

-- ── In-game messages between players ──────────────────────────────────────
CREATE TABLE ti4_messages (
  id          BIGSERIAL PRIMARY KEY,
  room_code   TEXT NOT NULL,
  sender      TEXT NOT NULL,
  recipient   TEXT NOT NULL,
  body        TEXT NOT NULL,
  sent_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX ti4_messages_room_recipient ON ti4_messages(room_code, recipient);

-- ── Row Level Security ────────────────────────────────────────────────────
ALTER TABLE ti4_rooms    ENABLE ROW LEVEL SECURITY;
ALTER TABLE ti4_history  ENABLE ROW LEVEL SECURITY;
ALTER TABLE ti4_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "rooms_select" ON ti4_rooms  FOR SELECT USING (true);
CREATE POLICY "rooms_insert" ON ti4_rooms  FOR INSERT WITH CHECK (true);
CREATE POLICY "rooms_update" ON ti4_rooms  FOR UPDATE USING (true);
CREATE POLICY "rooms_delete" ON ti4_rooms  FOR DELETE USING (true);

CREATE POLICY "history_select" ON ti4_history FOR SELECT USING (true);
CREATE POLICY "history_insert" ON ti4_history FOR INSERT WITH CHECK (true);

CREATE POLICY "messages_select" ON ti4_messages FOR SELECT USING (true);
CREATE POLICY "messages_insert" ON ti4_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "messages_delete" ON ti4_messages FOR DELETE USING (true);

-- ── Enable Realtime ───────────────────────────────────────────────────────
ALTER PUBLICATION supabase_realtime ADD TABLE ti4_rooms;
ALTER PUBLICATION supabase_realtime ADD TABLE ti4_messages;

-- ── MIGRATION (only run if you already ran the original setup) ────────────
-- If you already have ti4_rooms and ti4_history but not ti4_messages, run just this block:
-- CREATE TABLE IF NOT EXISTS ti4_messages (id BIGSERIAL PRIMARY KEY, room_code TEXT NOT NULL, sender TEXT NOT NULL, recipient TEXT NOT NULL, body TEXT NOT NULL, sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW());
-- CREATE INDEX IF NOT EXISTS ti4_messages_room_recipient ON ti4_messages(room_code, recipient);
-- ALTER TABLE ti4_messages ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "messages_select" ON ti4_messages FOR SELECT USING (true);
-- CREATE POLICY "messages_insert" ON ti4_messages FOR INSERT WITH CHECK (true);
-- CREATE POLICY "messages_delete" ON ti4_messages FOR DELETE USING (true);
-- ALTER PUBLICATION supabase_realtime ADD TABLE ti4_messages;
