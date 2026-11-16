# Mission Possible Max: game plan

**Status: proposal only. Nothing in this document has been built.** Mission Possible Pro stays
exactly as it is until you say go.

Max is Pro with the noise taken out. Every module stays. The street-crime theme goes, the six
different scoring systems become one, and the app starts keeping a record of everything you
finish so you can actually look back at it.

## The plan in six lines

1. **One calm look** instead of four styles, with celebrations you can turn up or down.
2. **A home screen that answers one question:** what's next? Everything else is one tap below it.
3. **Two task lists instead of four.** Old jobs get a kind question, not a jail.
4. **One points system** that pays the same every time and can be spent on rewards you choose.
5. **A Progress screen** that shows what you did today, this week and all time.
6. **Every module kept**, sharing your existing data, so you can switch back to Pro any time.

---

## 1. What I found in Pro

I went through every screen and the code behind it. These are the things that make it feel busy,
with the numbers.

| What | In Pro today | Why it's a problem |
| --- | --- | --- |
| Home screen | 21 buttons before you open anything, plus a banner, the Big Score bar, the heist panel, a pay table and an 8-step rank ladder | No obvious place to start |
| Scoring | Six systems: cash, rank, wanted stars, heist slots, aura, fitness points | Six things to track, none of them add up to one picture |
| Real vs game money | Hours pay and receipts are real dollars, shown in the same green `$` as game cash | Easy to misread what you're really owed |
| Pay rule | Same day $50, days 1 to 4 $40, days 5 to 6 **$100**, day 7+ $50 | Waiting five days pays double. It rewards putting things off |
| Your record | Finishing a job deletes it. The app keeps a count and the last five names | You can't see what you achieved, because it isn't saved |
| Where a task can live | Now, Now now, Not now, Lock up, Sahara To-do (plus six more Sahara lists), Big Score steps, the raccoon plan, Notes, Quick notes | "Where did I put that?" has ten answers |
| Clocks | 7 AM (Not now lands, stars cool, quick notes wipe), midnight (Now now empties), day 7 (Lock up), day 14 (Five-0) | Four rules to remember about when things move |
| Looks | Street neon, Sahara pixel purple, Now now sunset, plus Ezycal's and the Hood's own styles. Four font families, 44 animations, 13 sounds | Every app feels like a different place |
| Tone | "Lock up", wanted levels, a flashing "Five-0 inbound. Finish this now, homie!", a raccoon that eats your stash when a timer runs over | Old tasks turn into threats |
| Wins | Each win gets a random section and a random score from 100 to 100,000, shown with a slot machine | The reward has nothing to do with what you did |

### What already works well, and should lead in Max

- **Now now mode.** One list, full screen, a "done today" count that only goes up and never shows
  what's left, **Pick my next job**, and **Let it go**. This is the best part of the app, and
  it's switched off by default and hidden behind a button.
- **Undo on everything.**
- **Quick wins** like "Got out of bed" and "Took my meds". Credit for effort nobody else sees.
- **Fitness.** Effort earns points at a fixed rate, and points pay out as something real.
- **Hours.** Plain facts, no theme.

Max is mostly a matter of making the whole app behave like those five things.

---

## 2. The Max rules

Seven rules that every screen has to pass.

1. **One main action per screen.** Everything else is smaller and quieter.
2. **Nothing punishes.** No jail, no sirens, no losing points for a bad day.
3. **Same action, same reward.** Predictable, every time. Surprises are optional.
4. **Everything you finish is kept** and you can look at it.
5. **One look, one clock, one points system.**
6. **Calm by default.** You choose how loud the celebrations are.
7. **Nothing is more than two taps from home**, and hiding something never deletes it.

---

## 3. The home screen

Pro's home is a banner, a bar, seven tiles, and three information panels. Max's home is this:

```
┌────────────────────────────────────┐
│  Sunday 15 Nov                  ⚙  │
│                                    │
│  NEXT                              │
│  ◯  Call the dentist               │
│     [ Start 5 minutes ]  [ Skip ]  │
│     2 more for today ▾             │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ + Add anything…              │  │
│  └──────────────────────────────┘  │
│                                    │
│  DONE TODAY   3 things · 45 points │
│  See what I've done ›              │
│                                    │
│  2:30 pm  Physio        (calendar) │
├────────────────────────────────────┤
│  DO      Tasks    Focus   Calendar │
│  KEEP    Notes    Lists   People   │
│          Shelf                     │
│  TRACK   Hours    Move    Progress │
└────────────────────────────────────┘
```

- **Next** shows one job. **Skip** moves to another one without any penalty. The rest of today is
  folded away until you want it.
- **Add anything** is one box for the whole app. It makes a task unless you tap **Note** or **Win**
  under it.
- **Done today** only ever counts up. It never shows what's left.
- **Ten tiles in three named groups**, always in the same place. That's every module in Pro.
- If you're clocked in, the Hours tile shows it. If a timer is running, the Focus tile shows it.

What leaves the home screen: the banner, the rank badge, the cash counter, the Big Score bar, the
heist panel, the pay table, the rank ladder, dev tools, and the backup buttons (they move to
Settings).

---

## 4. Every module, kept

| Pro | Max | What stays | What changes |
| --- | --- | --- | --- |
| **Missions** | **Tasks** | Add, finish, Pick for me, Move to notes, Undo | Four lists become two (see section 5) |
| **Now now** | **Just one** view | The whole mode | It's how Today works, not a hidden extra |
| **The Big Score** | **Big goal** | One hard thing with steps | A card inside Tasks, off the home screen |
| **Raccoon mode** | **Focus** | 5 min, You choose, Plan, the raccoon | The raccoon stays calm unless you pick Party mode |
| **Ezycal** | **Calendar** | The same calendar, same events | Today's events show on home. Needs a calm theme |
| **Hood** | **People** | The same Hood, same data | Needs a calm theme |
| **Notes** + **Quick notes** | **Notes** | Pin, search, share, copy, turn into a task | One list. A note can be marked "today only" |
| **Sahara** | **Lists** | Plans, Fun, Friends, To-do, Lessons, Dreams, Self care | One look. Any item gets a **Do today** button |
| **Sahara → Fitness** | **Move** | Activities, rates, history, pay out | Its own tile. Points join the one points system |
| **Wins** | inside **Progress** | Typing a win, quick wins | Fixed points. No random section, no slot machine |
| **Shelf** | **Shelf** | Lookups, the three piles, ratings, who told you | Restyled. Finishing one shows in Progress |
| **Hours** | **Hours** | Everything | Real dollars get their own look so they never read as points |
| Gear, sync, backup, install | **Settings** | Everything | One page instead of four places |

One idea ties this together: **Today is the only place you do things. Everywhere else is where
things wait.** A list item, a note or a calendar event can be sent to Today with one tap, and it
goes back if you don't get to it.

Sahara's **Calendar** section is dropped because Calendar has its own tile; it was the same
calendar shown twice.

---

## 5. Tasks: four lists become two

| Pro | Max |
| --- | --- |
| Now | **Today** |
| Now now | **Just one**: a switch on Today that shows one job at a time, full screen |
| Not now | **Later** |
| Lock up | Gone. Replaced by a check-in |

**The check-in.** When a job has sat for a week, it gets a small "Still want this?" card with four
answers, all of them fine:

- **Do a 5-minute version** (starts a Focus timer on it)
- **Later** (resets its age)
- **Move to notes** (keep the thought, drop the task)
- **Let it go**

No red, no siren, no countdown. These four moves already exist in Now now mode; Max just offers
them at the right moment.

**Other task changes**

- **Wanted stars** (0 to 5 per job) become two simple tags: **Important** (pins it to the top) and
  **Hard** (earns more points).
- **One clock.** The day turns over at one time that you set. Everything that moves, moves then.
- **A soft limit on Today.** Past about five jobs, Max asks "Is all of this really today?" and
  offers to move some to Later. It never blocks you.

---

## 6. Smart rewards

### One currency: points

Points replace cash, ranks, heists, aura and fitness points.

| You do this | Points | Why |
| --- | --- | --- |
| Finish a task | 10 | The base |
| Finish a task tagged **Hard** | 20 | You decide what's hard, not the app |
| First thing done today | +10 | Getting started is the hardest part |
| Finish a Focus session | 5 per 5 minutes | Rewards the effort, even if the task isn't done |
| Log a win | 5 | Credit for things no list would show |
| Finish a Big goal step | 15 | |
| Finish the Big goal | 100 | |
| Bike, scooter, hike, walk | As now (30 to 60 an hour) | Already works |
| Finish something on the Shelf | 0 | It's for fun. It's recorded in Progress, but it isn't a chore to be paid for |
| Hours worked | 0 | Already paid in real money |

These numbers are a starting point and would be adjustable in Settings, the way Fitness rates are
now.

### The rules that make it "smart"

- **No reward for waiting.** A task is worth the same on day one and day six. This removes Pro's
  double pay for leaving things until day five.
- **Points only go down when you spend them.** Missing a day costs nothing.
- **No streaks that can break.** Max counts "days you showed up this month", which can only grow.
- **Same every time.** You always know what a thing is worth before you do it.
- **Old jobs get recognition, not a bonus.** Clearing something that waited a week is called out
  in your weekly recap.

### Spending points

A **Rewards** shelf where you write your own rewards and set the price:

- Coffee out · 100
- An hour of gaming, guilt free · 150
- New game · 2,000

Tap one to cash it in. It's recorded in Progress. This is Fitness's **Pay out** button, made to
work for the whole app. Paying points out as dollars (10 points = $1) can stay as one of the
options.

### Celebration level

One setting, three choices:

| Level | What happens when you finish something |
| --- | --- |
| **Quiet** (proposed default) | A tick, a soft sound, the count goes up |
| **Normal** | Plus a small animation and a short message |
| **Party** | Confetti, fanfare, and the raccoon causing trouble |

Sound and motion each keep their own off switch.

---

## 7. Progress: seeing what you've achieved

This is the biggest new piece, because Pro doesn't save what you finish.

**Today.** Everything you did, in order, with the time: tasks, focus sessions, wins, activity,
hours.

**This week.**

```
This week
  14 tasks done        (3 of them had waited a week or more)
  2 h 10 m focused
  11 h 15 m worked
  3 rides, 1 walk
  6 wins
  285 points earned · 100 spent on Coffee out
  M ▂  T ▅  W ▇  T ▃  F ▅  S ▁  S ▂
```

**All time.** Totals, and **milestones** you keep for good: 100 tasks, 10 hours focused, your
first Big goal. Milestones replace the rank ladder. They mark what you did, not what you're
called.

**Done log.** Every finished task, searchable. Finished something by mistake? Put it back.

**Weekly recap.** One card at the start of each week with last week's numbers. It can be copied
or shared, the same way Hours has **Copy**, if you want to show a partner, a coach or a support
worker.

**What this needs:** a new saved record of each finished thing (what, when, how many points).
History before Max can't be rebuilt, because Pro only kept counts. Wins, Fitness and Hours already
have dates, so those show up from day one. Your lifetime task count carries over as a starting
total.

---

## 8. What goes, and what replaces it

| Goes | Replaced by |
| --- | --- |
| Cash, "$190 on the table" | Points |
| Ranks: Street Rookie to City Legend | Milestones |
| Heist, Gangsta Credit, five slots | Done today count |
| Wanted stars | Important and Hard tags |
| Lock up, Five-0, sirens | The "Still want this?" check-in |
| Pay rates table | The points table in Settings |
| The Big Score | Big goal |
| Hood | People |
| Aura, random sections, slot machine | Fixed points, wins shown in Progress |
| "Homie", "hit list", "clean getaway" | Plain, warm wording |
| Skyline banner, police lights, sunset | One calm background |
| Four font families, all-caps condensed headings | One readable font, normal capitals |
| 44 animations, 13 sounds | A handful of each, more only in Party mode |

**The look.** One font. Three colours that always mean the same thing: green for done, blue for
time, gold for points. Real money is plain text with a clear label. More space between things,
fewer boxes and borders. Nothing moves unless you just did something.

---

## 9. Build order

Each stage is usable on its own, so it can stop after any of them.

| Stage | What gets built | What you get |
| --- | --- | --- |
| **1. Shell** | Max as a new edition next to Pro, the calm look, the new home screen, Settings. All modules open as they are | A quieter front door on your existing data |
| **2. Tasks** | Today and Later, Just one, the check-in, Important and Hard, one clock | The simpler task flow |
| **3. Record and Progress** | The done log, Today / Week / All time, milestones, weekly recap | You can see what you've achieved |
| **4. Points and rewards** | One points system, the Rewards shelf, celebration levels | Smart rewards |
| **5. Module tidy** | Notes merged, Lists restyled with Do today, Move and Focus as tiles, Wins inside Progress, Shelf and Hours restyled | Everything in one look |
| **6. Calendar and People** | Calm themes for Ezycal and the Hood | The last two screens match |

Stage 3 comes before stage 4 on purpose: points are only worth having once you can see where they
came from.

---

## 10. Decisions I need from you

My recommendation is first in each row.

| # | Question | Options |
| --- | --- | --- |
| 1 | What do points buy? | **Rewards you write yourself, with dollars as one option** · Dollars only · Nothing, just a score |
| 2 | If points pay out as dollars, who pays? | This changes how careful the earning rates need to be |
| 3 | Default celebration level | **Quiet** · Normal |
| 4 | The raccoon | **Keep, as the one friendly character** · Drop it |
| 5 | Sahara's pixel look | **One look everywhere, Sahara as an optional skin later** · Keep Sahara styled as it is |
| 6 | The Hood's map | **Keep it and re-theme it** · Start with a plain list of people |
| 7 | Light theme as well as dark? | **Both** · Dark only |
| 8 | Existing cash | **Convert to points, $1 = 1 point** · Start at zero |
| 9 | Does anyone else need to see your progress? | Decides how much goes into the weekly recap |

---

## 11. Technical notes

- **A separate edition, not a rewrite of Pro.** Max would sit beside Pro, Plus and the original on
  `asciikat.github.io`. They already share one set of saved data and one synced board, so Max
  reads your current jobs, notes, lists, wins, fitness, shelf and hours on day one, and Pro keeps working.
- **New saved data:** the done log, points, rewards, and settings. Pro ignores keys it doesn't
  know, so it is unaffected.
- **Sync size.** The free sync holds about 1 MB per board. The done log would keep full detail for
  the last year and weekly totals before that.
- **Ezycal and the Hood live in other repos** (`asciikat/calendar`, `asciikat/homies`). Each needs
  a `theme=max` option, the way Ezycal already has `theme=sahara`. That's why they're last.
- **File layout.** Pro is one 9,400-line `index.html`. Max is a good moment to split it into a
  file per module, still with no build step, so one module can be changed without touching the
  rest.
- **Lock up is not stored**, it's worked out from a job's age, so replacing it with the check-in
  changes nothing in your data.

## A note on the ADHD side

The rules in section 2 follow widely used guidance for ADHD-friendly design: one clear next step,
immediate and predictable feedback, visible progress, low-effort capture, and no shame for what
didn't happen. I'm not a clinician, and ADHD varies a lot from person to person. The real test is
you using stage 1 for a week and saying what still feels like too much.
