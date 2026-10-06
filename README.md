# Mission Possible Pro

Mission Possible as an all-in-one: the to-do board, the **Ezycal** calendar,
**The Hood** (the GTA-style map of your homies from
[asciikat/homies](https://github.com/asciikat/homies)) and **Notes**, each one
tab away. Built on Mission Possible Plus.

Single page: `index.html`. The Ezycal tab shows the separate calendar at
`../calendar/`, and the Hood tab shows The Hood at `../homies/` (both in a frame,
loaded the first time you open the tab).

## Apps, each in its own window

The home screen shows four big buttons: **Missions**, **Ezycal**, **Hood** and
**Notes**. Tapping one opens that app in its own full-page window (and, where the
browser allows it, full screen), so you only see that app, never the others. **✕
Close**, Esc, or the phone's back gesture takes you back to the home screen. The
Hood's own button in its top bar closes its window too.

**Missions** is the to-do board. Its lists only show once you open it:

- **Now**: today's jobs (was "Today")
- **Not now**: jobs lined up for later; they land on Now at 7 AM (was "Tomorrow")
- **Lock up**: jobs 7 days or older (was "Jail")

Missions always opens on Now. The count on the Missions button is how many jobs
are on Now. Inside the window you can switch lists, add jobs and finish them;
toasts, Undo and the heist celebration show on top. Pressing **/** or **n** on a
keyboard opens Missions and jumps to the job box.

## Mission Possible Pro vs Plus vs Mission Possible

All three live on `asciikat.github.io`, so on the same device they share the
same board (jobs, cash, notes) and, once you sign in, the same synced board.
They install as separate apps, and Pro keeps its offline copy under its own name
(`mppro-*`) so none of them clear each other's. The
**gear** at the top right switches any tab on or off; hiding a tab never deletes
what's in it. The **raccoon icon** next to it opens raccoon mode (see below). **The Big
Score** is the slim gold bar under the banner; tap it to plan it, add prep steps or
cash it in.

**Notes tools:** each note has a **copy** button, and the bar above the notes has **Copy all**
(every note, newest first, a blank line between each) and **Nuke notes**, which asks first,
wipes every note (on synced devices too) and gives you a few seconds to Undo. Jobs, cash and
everything else are untouched.

Notes and jobs trade places: each note has **Now** and **Not now** buttons that turn it
into a job (jobs are one line, 140 letters max), and a job's menu (tap its text) has
**Move to notes**. Every move has Undo.

Notes sync between devices and are included in Save/Merge backup (newest edit wins; a
deleted note stays deleted). Tab choices and the running timer stay on each device.

## Raccoon mode

The raccoon icon opens the timers, laid out like the board. The first time, it asks you
to name your raccoon (**Rackem** unless you pick something else); **Rename** changes it
any time. Three tabs:

- **5 min**: one tap starts a 5-minute quick raid and goes full screen. The
  **+1 min** box adds a minute at a time, but the raccoon gets wilder with every
  minute, and every 5 extra minutes a message pops up: it's into your stash, then the
  stash is gone, then it's raiding your fridge, and so on. The messages are the
  `COON_CHAOS` list in `index.html` (`{name}` is the raccoon's name); edit them freely.
  The raccoon's face changes with the trouble too: calm at first, sneaky once it's into
  your stash (+5 and +10), feral from the fridge on (+15). The three faces are
  `icons/raccoon/calm.webp`, `sneaky.webp` and `feral.webp` (square, transparent, 512px);
  swap in new art with the same names.
- **You choose**: any length from 1 minute to 4 hours, with −5 / +5 buttons.
- **Plan**: line up 5-minute raids like jobs (or pull them in with **From Now**).
  Six raids make half an hour, then a 5-minute break; up to 12 raids, an hour. Tap a
  raid to move it earlier, later or remove it. **Start the run** plays them in order:
  the raid you're on shows as a job card, and tapping its circle moves on early.

Timers fill the whole app while they run (Shrink tucks one into a corner chip; tap it
or the icon to bring it back). The raccoon's name, your plan and a running timer stay on
each device.


## Host free on GitHub Pages
1. Merge to `main`.
2. Repo **Settings → Pages → Deploy from a branch → `main` / root → Save**.
3. Open `https://asciikat.github.io/mission-possible-pro/`.

Without sync, your jobs and cash are saved only in each browser. **Save backup**
/ **Merge backup** at the bottom of the page combine two devices by hand: jobs
from both are kept, jobs finished or dropped on either device stay gone, and
cash, wins and heists keep the higher number.

## Install as an app
Open the site and tap **Install app** (bottom of the page, or the pink ⤓ icon at
the top when your browser offers it). Android Chrome and desktop Chrome/Edge
install it directly; on iPhone the button shows the Safari *Share → Add to Home
Screen* steps. Once installed it opens full-screen with its own icon and works
offline; sync catches up when you're back online.

## Turn on sync (phone ↔ desktop, free)
Sync uses Firebase's free plan: you sign in with Google on each device and
changes show up on the other one within a few seconds. About 10 minutes, once.

1. Go to <https://console.firebase.google.com>, click **Create a project**,
   name it (e.g. `mission-board`). Google Analytics can be switched off.
   The free "Spark" plan is all you need; no card required.
2. **Build → Authentication → Get started → Sign-in method → Google → Enable**,
   pick your email as support email, **Save**.
3. Still in Authentication: **Settings → Authorized domains → Add domain** →
   `asciikat.github.io` (your GitHub Pages address, without `/todo`).
4. **Build → Firestore Database → Create database**. Pick a location near you,
   choose **production mode**, **Create**.
5. In Firestore open the **Rules** tab, replace everything with this, then **Publish**:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /boards/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
       match /homies/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
       match /calendar/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```
   This makes each board, Hood and calendar readable and writable only by the Google account that owns it.
   The same rules are in `firestore.rules`. The `homies` and `calendar` lines are what turn on sync for
   The Hood and Ezycal.
6. Click the **gear → Project settings → Your apps → Web (`</>`)**, register an
   app called `Mission Board` (no Firebase Hosting needed), and copy the
   `firebaseConfig = { ... }` values it shows.
7. On GitHub open `firebase-config.js` → **Edit** (pencil) → replace `null`
   with those values (see the example in the file) → **Commit changes** to `main`.
8. After a minute, reload the site on each device, scroll to the bottom and tap
   **Sign in to sync**. Sign in with the same Google account everywhere.

The values in `firebase-config.js` are meant to be public; the rules in step 5
are what keep your board private. Your to-dos are stored in your Firebase
project.

How sync combines changes: new jobs from either device are added; finished,
dropped or moved jobs disappear everywhere; the newest star change wins; cash,
wins and heists keep the higher number. Undoable actions (drop, reset stars,
call off a big score) wait about 6 seconds before syncing so Undo still works.

### Hood and Ezycal sync too
The Hood (`homies/{uid}`) and Ezycal (`calendar/{uid}`) sync through the same Firebase project and the same
Google sign-in. Sign in once with **Sign in to sync** on the board and both tabs pick it up; each also has
its own sign-in when opened on its own. Nothing to configure beyond the two rules above.

Optional: drop your own jingle next to `index.html` as
`Mission_passed_jingl_#2-1783759697834.mp3`; otherwise a built-in fanfare plays.
