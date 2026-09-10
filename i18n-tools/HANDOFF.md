# Blog Localization — Handoff

**Last updated:** 2026-09-10 (session 2 — resumed, agents available again)

---

## 0. LIVE PROGRESS LOG (session 2, 2026-09-10) — newest first

- ✅ **RENYM COMPLETE — 11/11 languages** (de, fr, es, ja, ko, zh, pt, it, ru, nl, tr; 26
  articles each). All translated by Sonnet agents, combined+validated with `combine.py`,
  merged via `merge.py`, §5 scanner clean, `npx next build` passed. Committing + pushing now.
- 🔄 LAUNCHED: Dayedge × 11 languages (de, fr, es, ja, ko, zh, pt, it, ru, nl, tr — 25 articles
  each), Sonnet agents writing to `translated/dayedge_{locale}_part1-5.json`.
- ✅ Fixed `extract.py`/`merge.py`: they hardcoded a dead scratchpad path for payload/meta
  files (contrary to what §4 claimed). Both now read/write next to the script in `i18n-tools/`.
- ✅ Re-extracted `renym_payload.json` (26) + `dayedge_payload.json` (25) into `i18n-tools/`.
- ✅ Added `combine.py` — combines translated part files, validates slug set / empty fields /
  identical-to-English fallback / English-looking titles, writes `translated/{app}_{locale}.json`.
- 🔄 LAUNCHED (Sonnet agents, per user instruction — not Haiku): Renym DE batch3 (15 remaining
  slugs) + Renym fr/es/ja/ko/zh/pt/it/ru/nl/tr (26 articles each). Agents write JSON parts to
  `i18n-tools/translated/renym_{locale}_part*.json` (DE batch3 → `in-progress/`).
- ⬜ NEXT: as agents finish → `combine.py` → `merge.py` → `verify.py` → build → commit → push.
  Then Dayedge × 11 languages (same flow), then the ~21 remaining locales tier.

---
**Site:** eduard-bruch-website (Next.js SSG), repo root `~/Desktop/vscode/eduard-bruch-website/`
**Deploy:** push to `main` on GitHub → Vercel auto-deploys. No manual deploy step needed.

---

## 1. What this project is

12 macOS utility apps each have a blog with 25–26 SEO articles (problem → app-as-fix → App
Store link), matching the pattern that already works for SoundDial's 96-article blog. Only
**5 of the 12 apps are actually live on the App Store**; the other 7 have English articles
already written but should not be translated until they ship (no point localizing for an app
nobody can download yet). See `[[apps-live-status]]` memory for the live/not-live list, but the
short version:

- **LIVE (translate these):** Bellows, Mediasmith, Lock In!, Tome, Optic
- **NOT LIVE YET (English only, infra ready, do not push translations):** Jetty, Tickpull,
  Canopy, DeskCloak — **except Renym and Dayedge, which the user explicitly asked to localize
  anyway** (2026-09-10 instruction) even though they aren't live.

Every app already has full 33-locale infrastructure (Next.js routes, `_data/index.ts`,
`[locale]/page.tsx`, `[locale]/[slug]/page.tsx`) — that part is **done for all 12 apps**. What's
missing is the actual translated content for most locales.

---

## 2. Current state (exact, verified 2026-09-10)

### ✅ Fully done and live on Vercel — 5 apps × 11 languages = 55/55 clean

Bellows, Mediasmith, Lock In!, Tome, Optic — each has complete, verified translations in:
`de, fr, es, ja, ko, zh, pt, it, ru, nl, tr`

All verified with the scanner in §5 below — no partial-English fallback, no syntax errors, all
files close properly with `};`. Everything is committed and pushed (`git log` — last relevant
commit `bc9761d "Add Tome TR..."`). **Nothing to redo here.**

### 🔄 In progress — Renym German

- 11 of 26 articles translated to German, sitting in `i18n-tools/in-progress/renym_de_batch1.json`
  (5 articles) and `renym_de_batch2.json` (6 articles) — **not yet merged into the actual `.ts`
  file, not yet pushed.**
- 15 articles remaining (full slug list in §6 below).
- These 2 batch files are hand-translated JSON, format: array of
  `{slug, title, description, content}` — same shape `extract.py` produces and `merge.py`
  consumes.

### ⬜ Not started

- Renym: 0/11 remaining languages (fr, es, ja, ko, zh, pt, it, ru, nl, tr) — and German isn't
  merged/pushed yet either.
- Dayedge: 0/25 articles in any language (payload never extracted into translation work,
  though `dayedge_payload.json` extraction has been done — see §6).
- Remaining ~22 Apple-supported locales (ar, he, th, ms, vi, uk, ca, el, hr, sk, cs, ro, hu, id,
  hi, sv, da, no, fi, zh-Hant, pl) for **all 7 apps** in scope (5 live + Renym + Dayedge) — i.e.
  the 11-language tier was just a first pass, not the full 33-locale target.

---

## 3. Why this handoff exists — the blocker

The **Agent tool hit a hard session cap: 200/200 subagents spawned**, and it does not reset
mid-session. Every `Agent(...)` call now fails immediately with:

```
Subagent spawn limit reached (200 of 200 agents spawned). Complete the remaining work directly
with your tools instead of spawning more agents. If more agents are genuinely needed, ask the
user to raise CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION.
```

**To resume the fast parallel-agent pipeline:** set the environment variable
`CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION` to a higher value (e.g. `500` or `1000`) before starting
the new Claude Code session, then continue from this document. This requires a **new session** —
the cap can't be raised inside an already-running one.

Without raising the cap, translation must be done directly (no `Agent` tool calls) — slower,
but that's exactly what produced the Tome TR batch and the Renym DE batches so far, and it
works fine.

---

## 4. The pipeline (how translation actually happens)

Two scripts live in `i18n-tools/`:

### `extract.py <app>`
Reads `src/app/{app}/blog/_data/en.ts`, parses out just the translatable fields
(`slug, title, description, content, date, readMin`), and writes two files to wherever you run
it from:
- `{app}_payload.json` — array of `{slug, title, description, content}` (what needs translating)
- `{app}_meta.json` — `{slug: {date, readMin}}` (untranslated, reinserted by merge.py)

```bash
cd i18n-tools
python3 extract.py renym    # → renym_payload.json, renym_meta.json
python3 extract.py dayedge  # → dayedge_payload.json, dayedge_meta.json
```

### `merge.py <app> <locale> <translated.json>`
Takes a translated JSON array (same shape as the payload — `{slug, title, description, content}`,
translated) plus the meta file, and deterministically writes a clean, syntactically-safe
`src/app/{app}/blog/_data/{locale}.ts` file — proper TS escaping via `json.dumps`, no risk of
the stray-tag/quote bugs that plagued earlier freehand-LLM-writes-TS-directly attempts.

```bash
python3 merge.py renym de translated_renym_de.json
```

**Important:** `merge.py` reads `{app}_meta.json` from the same directory it's run in, so keep
payload/meta files alongside it (or pass absolute paths — check the script, it currently assumes
cwd).

### The actual translation step
Either:
- **Agent-based** (fast, parallel, needs the subagent cap raised): spawn one `Agent` per
  `(app, locale)` pair with `model: "haiku"`, prompt it to read the `_payload.json`, translate
  title/description/content only (not slug), write the full array to a `translated/` output
  path. **Use a strict prompt** — see §7, "Agent prompt template" — because Haiku agents were
  caught silently leaving large chunks of articles in English ("fallback") while still claiming
  100% completion. Always run the verification scanner (§5) before merging, never trust an
  agent's self-report.
- **Direct/manual** (what's happening now): read the payload in batches of ~5 articles, write
  translated JSON directly with the Write tool, combine batches, run through `merge.py`. This is
  what produced Tome TR (all 25 articles) and Renym DE (11/26 so far).

---

## 5. Verification scanner — ALWAYS run before pushing

This exact script caught ~8 files with silent partial-English fallback that agents had
confidently reported as "100% complete." Don't skip this step.

```python
# run from repo root: python3 i18n-tools/verify.py  (create this file if it doesn't exist yet)
import re, os

apps = ["bellows", "mediasmith", "lockin", "tome", "optic", "renym", "dayedge"]
langs = ["de", "fr", "es", "ja", "ko", "zh", "pt", "it", "ru", "nl", "tr"]  # extend as needed

full_english = re.compile(r'^(How to |What Is |Best |Native )')

for app in apps:
    for lang in langs:
        path = f"src/app/{app}/blog/_data/{lang}.ts"
        if not os.path.exists(path):
            continue
        with open(path, encoding="utf-8") as f:
            content = f.read()
        if content.rstrip()[-2:] != "};":
            print(f"BROKEN (not closed): {app}/{lang}")
            continue
        titles = re.findall(r'title: "((?:[^"\\]|\\.)*)"', content)
        eng = [t for t in titles if full_english.match(t) and "Native" not in t]  # "Native" = common false positive (legit loanword)
        if eng:
            print(f"ISSUE {app}/{lang}: {len(eng)} titles look English: {eng}")
```

If it prints nothing, you're clean. If it flags something, read the actual title/description —
some matches are false positives (e.g. "Native SQLite-editor voor Mac" is legitimate Dutch using
"Native" as a loanword). Real issues need the specific broken articles re-translated (pull them
from the payload by slug, translate by hand, patch the JSON, re-run `merge.py`).

Also always run `npx next build` before committing — it'll catch any TS syntax errors
`merge.py` might have missed (shouldn't happen given the escaping, but cheap to check).

---

## 6. Exact remaining work

### Renym — finish German first (11/26 done)

Remaining 15 slugs to translate and add to a `renym_de_batch3.json` (or however you split it),
then combine all batches + merge:

```
rename-files-lowercase-mac
add-date-to-filename-mac
remove-spaces-from-filenames-mac
rename-files-for-web-mac
a-better-rename-alternative-mac
rename-screenshots-mac
bulk-rename-utility-mac
rename-video-files-mac
find-replace-filename-mac
rename-files-with-counter-mac
organize-downloads-folder-mac-rename
rename-files-before-uploading-mac
trim-filename-length-mac
rename-music-files-mac
mac-automator-rename-alternative
```

Get their English content with:
```python
import json
data = json.load(open("renym_payload.json"))
remaining = {"rename-files-lowercase-mac", "add-date-to-filename-mac", ...}  # the 15 above
for item in data:
    if item["slug"] in remaining:
        print(item)  # or format however you're pulling batches
```

Then combine all 3 batches, verify count == 26, run `merge.py renym de <combined.json>`, build,
commit, push. Then repeat for the other 10 languages (fr, es, ja, ko, zh, pt, it, ru, nl, tr) —
full re-extraction not needed, `renym_payload.json` is reusable across all languages.

### Dayedge — nothing translated yet, 25 articles, all 11 languages

`dayedge_payload.json` extraction already exists (or re-run `extract.py dayedge` — it's
idempotent, just re-extracts from `en.ts` which hasn't changed). Full slug list:

```
always-visible-calendar-mac, calendar-sidebar-mac-screen-edge, quick-join-zoom-meetings-mac,
see-schedule-without-opening-calendar-mac, mac-menu-bar-calendar-not-enough,
one-click-meeting-join-mac, fantastical-alternative-free-mac, hot-corner-calendar-mac,
mac-reminders-and-events-one-view, glanceable-schedule-mac, itsycal-alternative-mac,
mac-calendar-widget-not-enough, never-miss-meeting-mac, mac-calendar-app-too-heavy,
see-next-meeting-mac-without-clicking, google-calendar-sidebar-mac, mac-hot-edge-calendar,
calendar-for-remote-workers-mac, mac-calendar-notifications-unreliable, meeter-alternative-mac,
mac-calendar-dark-mode-sidebar, pin-schedule-to-screen-mac, mac-reminders-on-screen-always,
best-calendar-app-mac-minimalist, mac-calendar-sidebar-vs-widget
```

### After Renym + Dayedge reach 11/11 languages

Continue toward the full ~33 Apple-supported locale list for all 7 apps in scope (5 live +
Renym + Dayedge). Remaining locales not yet touched: `ar, he, th, ms, vi, uk, ca, el, hr, sk,
cs, ro, hu, id, hi, sv, da, no, fi, zh-Hant, pl` (locale codes and RTL flags are all defined
already in `src/lib/locales.ts` — infra doesn't need any changes, just content).

**Do NOT touch the other 5 not-live apps** (Jetty, Tickpull, Canopy, DeskCloak — wait, that's 4,
the 5th not-live app needs confirming against `[[apps-live-status]]` memory) unless the user
explicitly says they've shipped or asks for them by name.

---

## 7. Gotchas learned the hard way

1. **Agents lie about completeness under pressure.** Multiple Haiku agents reported "all 26
   items translated, 100% complete" while actually leaving 15-65% of articles in raw English as
   a silent "fallback." Always run the §5 scanner — never trust the self-report.

2. **The stray `</content>` bug.** Several early agent writes appended a literal `</content>`
   tag after the closing `};` of the TS file (probably an artifact of whatever internal format
   the agent was reasoning in). `merge.py` doesn't have this problem since it's a deterministic
   script, not freehand LLM output — but if you ever hand-edit a `.ts` file directly, check the
   last line.

3. **Unescaped quotes inside Chinese/CJK text broke the build twice** — an agent used a plain
   `"` inside a description string instead of a Chinese quotation mark or escaped quote. Again,
   `merge.py`'s `json.dumps`-based escaping avoids this if you route everything through it
   rather than writing `.ts` by hand.

4. **Shell `cwd` randomly resets to `/Users/eduardbruch`** during long sessions (harness quirk,
   not user-caused) — always `cd` explicitly in each Bash call rather than assuming persisted cwd.

5. **Build artifacts got accidentally committed once** (`src/app/.next/trace*`) because a build
   was run from inside `src/app/` after a cwd reset. `.gitignore` only covered root-level
   `/.next/`. Already fixed — `src/app/.next/` is now also gitignored — but worth knowing if it
   happens again.

6. **Concurrent Agent-tool cap is 20** (separate from the 200 total-spawns-per-session cap) —
   batch launches in groups of ≤20, or just let excess calls queue/error and relaunch.

7. **Token-cost lesson (why the JSON pipeline exists at all):** the original approach had each
   agent read the full `en.ts` (with TS boilerplate, imports, all 26 articles' worth of
   `slug`/`date`/`readTime` fields it didn't need to touch) and write back an equally bloated
   full `.ts` file. Switching to extract → translate-JSON-only → deterministic-merge cut
   per-agent token usage roughly 3-4x (observed: ~100k+ tokens/agent under the old approach vs
   ~35-90k under the JSON approach) and eliminated the syntax-bug class entirely, since Python
   handles the TS escaping instead of the LLM.

---

## 8. Quick-start for a fresh session

```bash
cd ~/Desktop/vscode/eduard-bruch-website
git pull                                   # get latest, though you probably just cloned it
git log --oneline -5                       # confirm you're at/after bc9761d
cat i18n-tools/HANDOFF.md                  # this file
ls i18n-tools/in-progress/                 # renym_de_batch1.json, renym_de_batch2.json waiting
```

If you raised `CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION`, verify it worked by spawning one throwaway
test agent before committing to a big parallel batch — cheap insurance against re-discovering the
cap 40 agents into a batch.

Then either continue Renym DE manually (translate the 15 remaining slugs in §6, following the
same JSON batch → combine → `merge.py` → build → commit → push flow already used for batches 1-2),
or if agents are available again, use the Agent prompt template below for speed.

### Agent prompt template (once subagent cap is raised)

```
You are a translator. Do this task directly yourself — do NOT write scripts, do NOT call any API.

1. Read: <absolute path to {app}_payload.json>
   It's an array of {slug, title, description, content}.
2. Translate title, description, content (HTML) to <LANGUAGE> for EVERY item — all <N>, no
   exceptions, no skipping, no leaving any in English as a "fallback". Keep slug unchanged. Keep
   all HTML tags and URLs unchanged inside content — only translate visible text between tags.
   Keep "<AppName>" untranslated.
3. Write the COMPLETE array (all <N> items, same order) as raw JSON to: <absolute output path>

Output ONLY valid JSON. No markdown fences, no explanation, no prose, no partial translations.
```

Launch with `model: "haiku"` for cost, ≤20 concurrent. After each batch completes, run the §5
scanner before merging — do not skip this even though the agent claims success.
