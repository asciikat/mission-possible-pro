# Mission Possible Pro

Mission Possible as an all-in-one: the to-do board, the **Ezycal** calendar,
**The Hood** (the GTA-style map of your homies from
[asciikat/homies](https://github.com/asciikat/homies)), **Notes**, **Sahara**, **Wins**, **Shelf**, **Hours** and **Screenshots**,
each one tab away. Built on Mission Possible Plus.

Single page: `index.html`. The Ezycal tab shows the separate calendar at
`../calendar/`, and the Hood tab shows The Hood at `../homies/` (both in a frame,
loaded the first time you open the tab).

## Apps, each in its own window

The home screen shows nine big buttons: **Missions**, **Ezycal**, **Hood**, **Notes**,
**Sahara**, **Wins**, **Shelf**, **Hours** and **Screenshots**. Tapping one opens that app in its own full-page window (in a browser tab it also
goes full screen; the installed app already fills the screen, so it skips that and
Android's "to exit full screen" message), so you only see that app, never the others. **✕
Close**, Esc, or the phone's back gesture takes you back to the home screen. The
Hood's own button in its top bar closes its window too.

**Missions** is the to-do board. Its lists only show once you open it:

- **Now**: today's jobs (was "Today")
- **Not now**: jobs lined up for later; they land on Now at 7 AM (was "Tomorrow")
- **Lock up**: jobs 7 days or older (was "Jail")
- **Now now** (optional): today only. Tap **+ Now now** next to the lists (or push a job there) to
  add it. It works like Now (stars, pay, finish), and whatever is still on it at midnight goes
  back to Now with its age and stars intact. Every list can move a job to Now now (**Push to Now
  now** / **Do it now now** in a job's tray), and from Now now a job can go back to Now, to Not now
  or to Notes, and a note has a **Now now** button too. Opening Now now goes into **Now now
  mode**: the list on its own, full screen, for a day that's too much. Big round buttons, bright
  colours, a splash and a firework for every job done, a "done today" count that only ever goes
  up (it never shows what's left), and **Pick my next job**. It keeps the board's street look: hard edges, a sunset and police lights, and a "Mission passed" stamp for every job. A job's options there are Back to Now, Tomorrow, Move to notes and Let it go. ✕, Esc or the back gesture goes
  back to the board. Hide the list again with the gear; hiding never deletes what's in it.

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

**Search notes:** type a word in the search box above your notes and only the notes containing it
show (any case; type two words and a note needs both). **Copy these** then copies just those notes,
newest first with a blank line between each, and each note's own copy button copies one. Clear
the search with the × or Esc; it also clears when you add a note or leave Notes. Nuke notes hides
while you're searching, so it can't wipe notes you can't see.

**Notes tools:** tap the **pin** in a note's top-right corner to keep it at the top (pinned
notes get a gold tint; tap again to unpin, and pins sync too). **Share** opens your phone's share
menu (WhatsApp, Messages, email...) with the note's text; where there's no share menu it copies
the note instead. Each note also has a **copy** button, and the bar above the notes has **Copy all**
(every note, newest first, a blank line between each) and **Nuke notes**, which asks first,
wipes every note (on synced devices too) and gives you a few seconds to Undo. Jobs, cash and
everything else are untouched.

Notes and jobs trade places: each note has **Now** and **Not now** buttons that turn it
into a job (jobs are one line, 140 letters max), and a job's menu (tap its text) has
**Move to notes**. Every move has Undo.

**Quick notes** are notes for today only. The small, quiet **Quick notes** link at the top of Notes
opens them in their own full page. They work like regular notes (pin, **Now**, **Not now**, share, copy,
delete, edit in place) plus **Notes**, which moves one into regular Notes to keep it (the **To Notes**
button moves them all). The day turns over at 7 AM, like Now: leftover quick notes are wiped, unless
you open the **gear** and choose, under **Quick notes**, to move leftovers into Notes instead (at the
next day, or after 2 days, 3 days or a week). Every move and delete has Undo. Quick notes stay on the
device they're written on (they aren't synced or in the backup); only what lands in Notes syncs.

Notes sync between devices and are included in Save/Merge backup (newest edit wins; a
deleted note stays deleted). Tab choices and the running timer stay on each device.

## Sahara

**Sahara** is a to-do list split into sections, dressed like the Sahara app (night purple, pixel
font, pixel hearts). The sections are **Plans**, **Fun**, **Friends**, **To-do**, **Fitness**,
**Calendar**, **Lessons**, **Dreams** and **Self care**; tap one to switch, and it opens on the one you used last.

- Type in the box and press Enter to add to the section you're on.
- Tap the heart to tick an item off (it fills in and drops to the bottom); tap again to undo.
- Tap an item's text to edit it, **Move to** another section, or **Delete** it (with Undo).
- **Clear done** removes the ticked items in that section (with Undo).

**Fitness** is the one section that isn't a list: it's a points system for getting active.

- Tap an activity (**Bike ride**, **Scooter**, **Hike**, **Walk**), then tap how long (15 min to
  2 h, or type your own minutes). The session earns points for the time: 1 hour of a 50-an-hour
  bike ride is 50 points, 30 minutes is 25. Every log has Undo.
- Points are worth money: **10 points = $1** by default, so a 1-hour bike ride is $5. The card at
  the top shows the points to cash in and what they're worth.
- **Pay out** when you settle up: it records the payout and starts the balance again (with Undo).
- **History** lists every session and payout; the × deletes one (with Undo).
- **Points & rates** (at the bottom) sets each activity's points per hour and how many points make
  $1, renames activities and adds your own (e.g. Swim). New rates count from the next session;
  sessions already logged keep their points.

The default rates are Bike ride 50, Scooter 40, Hike 60 and Walk 30 points an hour ($5, $4, $6 and
$3 an hour). Fitness syncs and backs up with everything else.

**Calendar** is the real Ezycal, in Sahara's look (it opens `../calendar/?embed=1&theme=sahara`).
It's the same calendar as the Ezycal button and the standalone Ezycal: same events, same sync, so
anything added in one shows in the others. It loads the first time you open the section.

**Coming up**, at the top of every other section, lists the next three events from Ezycal (today's
are highlighted; finished, dismissed and past events are skipped). Tap it to open the Calendar. It
only reads Ezycal's saved events, never changes them, and refreshes when the calendar saves.

The count on the Sahara button is how many items are still to go, across all sections. Sahara is
kept apart from the jobs board: its items have their own storage and never touch jobs, cash or
heists. They sync between devices and are included in Save/Merge backup, like notes. The sections
are the `SAHARA_SECTIONS` list in `index.html` (keep a section's `id` the same when renaming it).

## Wins

**Wins** is where any win goes, big or small. Type it and hit Enter (or tap **Win**), or tap a
quick win (*Got out of bed*, *Drank water*...) to log it in one go. Every win:

- gets a number (#1 is your first),
- lands in a **random section**: Legendary, Certified Banger, Main Character, Galaxy Brain,
  Untouchable or Hall of Fame,
- and scores a **random amount of aura**: usually a few hundred, sometimes thousands, and now
  and then a five-figure **jackpot**.

Logging one plays the show: the sections spin like a slot machine, land on yours, the aura counts
up and fireworks go off (a jackpot gets the big fanfare). Tap anywhere or press Esc to skip it.
Inside, the total wins and aura sit at the top and your wins are grouped by section, newest first.
**Relive one** replays a random past win. The × on a win deletes it (with Undo). The count on the
Wins button is how many wins you've logged.

The sections, hype lines and quick wins are the `WIN_SECTIONS`, `WIN_HYPE` and `QUICK_WINS` lists
in `index.html`; edit them freely (keep a section's `id` the same so old wins stay in it). Wins
sync between devices like notes and are included in Save/Merge backup (a deleted win stays deleted).

## Shelf

**Shelf** remembers the films, TV, books and games you want to get to, so a good recommendation
doesn't get lost. It's the orange button on the home screen; the number on it is how many are
lined up.

- Pick a kind (**Film**, **TV**, **Video**, **Book**, **Game**, **Other**) and start typing the title. Matches
  appear underneath with their cover, year and who made them: tap one to save it. **Add** saves
  exactly what you typed instead, which also works offline. **Other** is for anything else (an
  album, a podcast, a place) and is never looked up.
- **Who told you?** is optional and sticks to the next thing you add, so you remember who to thank.
- Everything sits in one of three piles: **Lined up**, **On now** and **Finished**. **Start** moves
  one to On now; the **circle** finishes it and opens it so you can give it stars and a note.
- **Pick one for me** (shown when a kind has two or more lined up) chooses at random.
- Tap anything to open it: change its pile, rate it, add a note, follow a link out, or delete it
  (with Undo). **Change the title or kind** is tucked at the bottom.

**Where the matches come from.** All three are free and need no account or key:

| Kind | Looked up on | Link out |
| --- | --- | --- |
| Film | Wikipedia (posters and year) | **IMDb**, Wikipedia |
| TV | TVmaze | **IMDb**, TVmaze |
| Video | not looked up | **Watch on YouTube** (the video, or a search for its title) |
| Book | Open Library | Open Library, Goodreads |
| Game | Wikipedia | Wikipedia |

IMDb itself has no free lookup service (it's sold to businesses through Amazon), so Shelf finds
each title's IMDb number another way: TVmaze supplies it for TV, and Wikidata for films. With the
number the **IMDb** button opens the exact page; without it, it opens an IMDb search for the title.
Every item also has **Search the web**.

What you type in the title box is sent to the lookup site for that kind, and nothing else is. Covers
are loaded from those sites, so they need a connection; offline, each item shows its kind's icon.

Shelf syncs between devices and is in Save/Merge backup, like notes (newest change wins; a deleted
item stays deleted). The kinds are the `SF_TYPES` list in `index.html` (keep a kind's `id` the same
when renaming it). Nuke data doesn't touch Shelf.

## Hours

**Hours** is a timesheet: log the hours you work and keep photos of receipts. It's the blue
button at the bottom of the home screen; the number on it is this week's hours (or **ON** while
the clock is running).

- **Clock in** starts timing; the same button turns into **Clock out** and logs the shift (date,
  start and finish) when you tap it again. The clock keeps going if you close the app. **Cancel
  the clock** stops it without logging anything.
- **Add hours by hand**: pick the date (**Today** / **Yesterday** are one tap), a start and a
  finish, an optional break and note, then **Log hours**. The times start on your last shift's. A
  finish earlier than the start counts as running past midnight.
- **Snap receipt** opens the camera; the photo is saved straight away and you can then add the
  amount, date and what it was for. **Use a photo I already have** picks one from the phone.
- **Hourly rate**: type what you're paid an hour and Hours shows what you're owed: this week at
  the top, all time beside it, and next to each week and each entry. One rate covers every hour
  logged, so changing it re-prices them all. Receipts are totalled separately and aren't added in.
- Tap any entry or receipt to change or delete it (with Undo). On a receipt, **Share photo** sends
  the picture to WhatsApp, email, Files and so on; **Retake** replaces it.
- The timesheet is grouped by week (Monday to Sunday) with each week's total. **Copy** copies the
  whole thing as text; **Spreadsheet** downloads it as a `.csv` file for Excel or Google Sheets.

Hours, the hourly rate and receipt details (date, amount, note) sync between devices and are in Save/Merge backup,
like notes. **Receipt photos stay on the device that took them** (they're too big for the free
sync), and aren't in the backup file: share the ones you need to keep. Photos are shrunk to
1600px so they don't fill the phone. Nuke data doesn't touch Hours.

Hours is self-contained: everything is in the `Hours` blocks of `index.html` and the `mp_hours*`,
`mp_rcpts*` and `mp_clock` keys, so it can be switched off with the gear or removed later.

## Screenshots

**Screenshots** goes through your recent screenshots one at a time, so the things you saved "to
deal with later" actually get dealt with. It's the wide cyan button at the bottom of the home
screen; the number on it is how many are left in the sweep you're on.

1. Pick how far back to go (**1 week**, **2 weeks**, **1 month** or **Any**), then tap **Pick
   screenshots**. In your phone's picker, open **Albums → Screenshots** and select the last couple
   of weeks (press and hold one, then drag to select lots).
2. Each screenshot comes up on its own with the text read off it, a **Title** guessed from that
   text, and a **Suggested** choice:
   - **Job**: the title goes on Now.
   - **Note**: the text is saved as a note, with the date of the screenshot.
   - **Shelf**: pick Film, TV, Book, Game or Other and a match, the same lookup as Shelf.
   - **Receipt**: the picture goes into Hours as a receipt, with the amount it found.
   - **Just keep it**: into the library (below), picture and text, nothing else.
   - **Nothing to keep**: done, nothing saved.
   - **Leave it for next time**: skipped for now; it comes back the next time you pick it.
   Under the hint, the screenshot's **links** show as buttons you can tap:
   - Any web address in it (a site's home page, and the exact page if one is visible).
   - **YouTube**: **Watch on YouTube**, straight to the video when its address is in the picture, otherwise
     a YouTube search for its title. The Shelf choice opens on the new **Video** kind, so it lands
     on your watch-later list.
   - **A product** (a plugin, an app, gear: words like plug-in, VST, AAX, free trial, buy now) or **a
     website**: the app looks the brand up and says **What it is** (from Wikipedia) and adds its
     official site (from Wikidata). If it can't find one, **Find its website** searches for it, and
     a sentence from the screenshot says what it's about. A website's title becomes the site's name.
   Products and websites are suggested for **Just keep it**, and file under **Products** and
   **Websites**. Notes made from a screenshot keep its links.
3. Every choice has **Undo**. Tap the picture to see it bigger; edit the title, or open **All the
   text it read**, before choosing.
4. At the end you get a count of what went where, and the dates of the ones you can now delete from
   your gallery. **Go through more** picks again.

**The library.** Every screenshot you keep (Job, Note, Shelf, Receipt or Just keep it) is saved
under the sweep with its picture and the text read off it, so you can delete the original from your
gallery and still find it. It's sorted into categories: **To do**, **Money**, **Watch & read**,
**Food**, **Products**, **Places**, **Websites**, **Info** and **Other**. The category is guessed from the text and
shown as **Files under** while you sweep; change it there or later. **Search the words in them**
finds a screenshot by anything written in it, or by what it is or its links. Tap one to see it
full size with its links and what it is, change its title or
category, **Copy text**, **Share picture** (to save it somewhere else), or **Delete** it (with
Undo). The categories are the `SW_CATS` list in `index.html` (keep a category's `id` the same when
renaming it).

The library keeps a smaller copy (1400 px, around 50 to 250 KB each), shown with the total at the
top, on this phone only: it doesn't sync and isn't in the backup file.

Ones you've gone through are remembered (by file name and size), so you can stop at any time with
**Stop for now** and pick the same screenshots again later: it carries on with the ones you haven't
done. Screenshots older than the range you chose are left out, with a button to go through them
too. A sweep takes up to 100 at a time.

**Good to know**

- A web page can't look through your photos by itself, so you always choose the screenshots in the
  picker. It also can't delete them from the phone: when a sweep is done, it tells you which dates
  to delete in your gallery.
- The text is read on your phone with [Tesseract](https://tesseract.projectnaptha.com/), so your
  screenshots are never uploaded anywhere. The reader (about 7 MB) downloads the first time you use
  it and is kept for next time. Without a connection the first time, you can still type a title
  yourself.
- The date comes from the screenshot's file name where the phone puts it there (Android does; the
  photo picker on some phones doesn't). Ones with no date always count as recent.
- The guesses are simple keyword checks (a total and a card payment means a receipt, Netflix or
  "season" means TV, Goodreads or "novel" means a book). They only highlight a button; every choice
  is always there.
- Looking up what something is sends only the brand (for a website, the part of its address
  before .com; for a product, its title) to Wikipedia and Wikidata, and only for screenshots that
  look like a product or a website. Messages, receipts and the rest are never looked up.
- What's been gone through, and the library, stay on this device; nothing in Screenshots syncs. What you send to
  Missions, Notes, Shelf or Hours syncs as usual.

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
