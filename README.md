# TI4 Tracker — Twilight Imperium IV Companion App

A free, web-based companion app for Twilight Imperium IV. Tracks scores, objectives, technologies, and game history across multiple devices in real time.

Runs on Android, iOS, and any modern browser. Install as a PWA for a native-app feel on your phone or tablet.

---

## ✨ Features

- **Real-time multi-device sync** — admin controls the game, guests follow along
- **Public objectives** (Stage 1 & 2) with the official deal-out flow
- **Secret objective scoring** (max 3 per player)
- **Other scoring sources** (Imperial, Support for the Throne, relics, etc.) with custom entries
- **Per-player technology tracking** with starting techs
- **Faction sheets** — full abilities, units, flagship, mech, leaders for each faction
- **Game timer** with pause/resume
- **Round photos** — take a board photo at the end of each round
- **History** with full event log, score timeline, and round photos
- **Export game history** as a PNG image to share

---

## 🚀 Setup Guide

This app needs a **Supabase** database (free tier is more than enough) to enable real-time sync between devices. Setup takes about 10 minutes.

### Step 1 — Create a free Supabase account

1. Go to [https://supabase.com](https://supabase.com) and click **Start your project** (or **Sign in**)
2. Sign up with GitHub, Google, or email
3. Once signed in, click **New Project**
4. Fill in:
   - **Project name** — anything you want (e.g., "TI4-Tracker")
   - **Database password** — generate a strong one (you won't need to remember it for normal use)
   - **Region** — pick the one closest to where you'll play
   - **Pricing plan** — **Free** is fine
5. Click **Create new project** and wait ~1 minute for it to provision

### Step 2 — Run the database setup script

1. In your Supabase project dashboard, click **SQL Editor** in the left sidebar
2. Click **+ New query** (top right)
3. Open `supabase-setup.sql` from this repo, copy its entire contents
4. Paste into the SQL Editor and click **Run** (or `Ctrl+Enter` / `Cmd+Enter`)
5. You should see "Success. No rows returned." — that's correct

This creates two tables: `ti4_rooms` (current game state) and `ti4_history` (optional cloud history).

### Step 3 — Get your API credentials

1. In Supabase, click the **Settings** ⚙ icon (bottom left)
2. Click **API Keys**
3. You'll need two things:
   - **Project URL** — looks like `https://abcdefghij.supabase.co`
   - **Project API Key** → the **anon / public** key (a long string starting with `eyJ…`)
4. Keep this tab open — you'll paste these into the app in a moment.

### Step 4 — Open the app

Open the app at **[https://luphold.github.io/ti4-tracker/](https://luphold.github.io/ti4-tracker/)** in your browser.

1. Paste the **Project URL** into the URL field
2. Paste the **Anon Key** into the key field
3. Tap **Save & Connect**
4. If successful, you'll see "Connected!" and the Admin/Guest screen will appear

You're done with setup! Your credentials are saved locally on this device — you won't need to enter them again unless you clear browser data.

> ⚠️ **Don't share your Supabase password.** Only share the **URL** and the **anon key**. The anon key is public-safe and is meant to be embedded in client apps.

---

## 🎮 How to Use

### Starting a game (Admin)

1. Tap **Enter as Admin**
2. A room code appears at the top — share this with your players
3. In the **Setup** tab:
   - Tap **+ Add Player** for each player (2–8 supported)
   - Edit names, pick a faction, tap the circle to pick a color
   - Use **🎲 Randomize Colors** to auto-assign colors to anyone who hasn't picked one
   - All players must have a color before you can start
   - View any faction sheet by tapping **📜 Sheet** next to the faction selector
   - **Feature toggles**: turn off **⚔ Strategy cards** or **🔬 Tech tracking** if you don't want to use them. The corresponding tab is hidden and rules around them are skipped.
4. When ready, tap **⚔ Start Game**
   - With 4 or fewer players and strategy cards enabled, you'll be asked whether each player picks **1 or 2** strategy cards per round

### Joining a game (Guest)

1. Tap **Enter as Guest**
2. Enter the room code the admin shared
3. Tap **Join Room** — you'll see the score board update live

Guests can view all screens (Setup, Score, Tech, History) but can't make changes.

### Scoring (Admin only)

- **Public objectives** are at the top of the Score screen. Round 1 reveals two cards. Every Next Round reveals one more, alternating Stage 1 first then Stage 2.
- Tap any face-up objective card to open it enlarged. From there:
  - **Score** → pick a player who completed it (+1 or +2 VP)
  - **♻** (recycle) → replace this card with a new random one from the same stage (refunds any VP), usefull for custom games
  - Tap **✕** next to a scored player to undo a miss-click
- **Secret Objectives** panel: tap **+ Score Secret** → choose objective (grouped by Status/Action/Agenda) → choose player. Each player may only score 3 secret objectives.
- **Other Objectives** panel: covers things like Custodians (Mecatol Rex), Support for the Throne, Mutiny, Shard of the Throne, etc. Also has a free-text "Other" option for anything else.

### Strategy cards

If strategy cards are enabled, every player must pick their card(s) on the **Strategy** tab before you can advance to the next round or end the game. Cards are unique per round — the same card can't be picked by two players in the same round. The 8 standard TI4 strategy cards (Leadership, Diplomacy, Politics, Construction, Trade, Warfare, Technology, Imperial) are all available. With ≤4 players and "2 cards each" chosen at game start, each player picks two cards per round.

### Round flow

- Tap **Next Round ▶** to advance. You'll be asked if you want to take a board photo (optional, saved with that round in history).
- Tap **⏸** (top right) to pause — locks all input on both admin and guest screens, stops the round timer
- Tap **⏹ End Game** when the game is over

### After the game

- The Score screen shows the final standing.
- Setup, Tech, and Scoring tabs are locked.
- **History** is now your focus — every event of every round is preserved.
- Tap **📤** on a history entry to export it as a PNG image you can share.

---

## ⚠️ Things to keep in mind

- **Games of 2 rounds or less are not saved to history** — these are assumed to be test/debug games.
- **The admin must keep the app open** (or running in the background) for sync to work. If the admin closes the app, guests will stop receiving updates until the admin reopens it. You can use the **↺ Resume Previous Game** button on the login screen to pick back up.
- **Round photos stay local on the admin device** during the game and only get attached to history when the game ends. If the admin clears storage before ending the game, photos are lost.
- **Sync polls every 3 seconds** — there may be a small delay between admin actions and what guests see.
- **Free Supabase tier is plenty.** A typical game stores well under 100 KB of data.

---

## 🌐 Hosting

You can host this app anywhere static files can be served:

**GitHub Pages (free, recommended):**
1. Fork or upload this repo to your own GitHub account
2. In the repo settings, enable Pages → deploy from `main` branch, root
3. Visit `https://<your-username>.github.io/<repo-name>/`

**Other free options:** Netlify, Vercel, Cloudflare Pages — drag-and-drop the folder onto their dashboard.

**Locally:** since this is just static HTML, you can also just open `index.html` directly in a browser, but PWA features (offline, install) require it to be served from a real URL.

---

## 🛠️ Troubleshooting

**"Failed to connect" on Save & Connect**
- Double-check that you pasted the URL (not the key) into the URL field
- The URL should look like `https://abcdefghij.supabase.co` — no `/rest/v1/` at the end (the app strips that automatically anyway)
- The anon key should start with `eyJ…` and be very long

**Guest can't see admin's game**
- Make sure both are using the same Supabase URL and anon key
- Make sure the guest entered the exact room code (uppercase, 6 characters)
- Tap the **🐞** button (bottom right) to see the connection log

**Buttons aren't responding / weird behavior after an update**
- On the Supabase setup screen, tap **↺ Clear Cache & Reload** — this forces a fresh load

---

## 📋 Tech notes

- Single-file HTML PWA — no build step, no npm, no framework
- Vanilla JS (ES5-friendly for broad mobile compatibility)
- IndexedDB for local settings + history + photo cache
- Supabase REST API (polling every 3s — no WebSocket needed)
- Service worker is intentionally **no-cache** so updates roll out instantly

Enjoy your games of TI4! 🚀⚔
