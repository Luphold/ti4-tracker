# TI4 Tracker — Android PWA
Work in progress
A fully self-contained Twilight Imperium IV game tracker for Android.
No app store. Works on any Android phone or tablet via Chrome.
Live sync powered by Supabase (free cloud backend).

---

## One-time setup (~10 minutes total)

### Step 1 — Create a free Supabase account

1. Go to **https://supabase.com** and sign up (free, no credit card)
2. Click **New Project**, give it a name like "TI4 Tracker"
3. Wait ~2 minutes for it to spin up

### Step 2 — Set up the database

1. In your Supabase project click **SQL Editor** → **New Query**
2. Paste the contents of `supabase-setup.sql` and click **Run**
3. Go to **Database → Replication** and enable replication for `ti4_rooms`

### Step 3 — Get your API credentials

1. Go to **Settings → API Keys**
2. Copy the **Project URL** (e.g. `https://xxxx.supabase.co`)
3. Copy the **anon / public** key (starts with `eyJ`)

### Step 4 — Host on GitHub Pages

1. Create a free account at **https://github.com**
2. Click **+** → **New repository**
3. Name it `ti4-tracker`, set it to **Public**, click **Create repository**
4. Click **uploading an existing file**
5. Upload ALL files from this folder:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `supabase-setup.sql`
   - The `src/` folder (drag the whole folder)
   - The `icons/` folder
6. Click **Commit changes**
7. Go to **Settings → Pages**
8. Under **Source** select **Deploy from a branch**
9. Choose **main** branch, **/ (root)** folder, click **Save**
10. Wait ~1 minute — your URL will be:
    `https://YOUR-USERNAME.github.io/ti4-tracker`

---

## For each player — first launch (30 seconds)

1. Open **Chrome** on Android and go to your GitHub Pages URL
2. Tap **⋮ menu → Add to Home Screen** to install it
3. Open the app, tap **⚙ Change settings**
4. Enter your Supabase **Project URL** and **Anon Key**
5. Tap **Save & Connect** — done, credentials are saved locally

---

## Playing a game

**Admin (host):**
- Open app → **Enter as Admin**
- Share the room code (tap **QR** button) with guests
- Set up players in **Setup** tab → **Start Game**

**Guests:**
- Open app → **Enter as Guest** → enter the room code
- Game state updates automatically every few seconds

---

## Troubleshooting

**App stuck on loading screen:**
- Wait 6 seconds — it will unhide automatically
- Tap **↺ Hard Refresh** on the login screen

**Guests can't see game state:**
- On admin device tap **📡 Sync** button on the score screen
- This forces a fresh write to the database

**"Connection failed" on Supabase setup:**
- Make sure URL is just `https://xxxx.supabase.co` (no `/rest/v1/` at the end)

---

## File structure

```
ti4-tracker/
  index.html          ← Entire app (self-contained, ~170KB)
  manifest.json       ← PWA manifest for Android install
  sw.js               ← Service worker (offline support)
  supabase-setup.sql  ← Run once in Supabase SQL Editor
  README.md           ← This file
  src/
    data.js           ← Source data (not needed for deployment)
    sync.js           ← Source sync engine
    storage.js        ← Source storage
    game.js           ← Source game logic
    combined.js       ← Compiled bundle (inlined into index.html)
  icons/
    icon-192.png      ← PWA icon
    icon-512.png      ← PWA icon
```

Note: The entire app runs from `index.html` alone.
The `src/` files are source code for reference/editing.
