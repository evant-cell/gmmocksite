# Session Handoff — 2026-07-18

Home page design + build for the new Genius Monkey site (GM Site Design workspace).
Written so any model or person with zero prior context can pick up at any stage.

## Objective

Design and build the real home page at `/` for the new Genius Monkey Astro site, using the approved
V2 copy in `/Users/evan.t/Documents/GM SIte Design/Rebrand Content/drafts/pages/json/home-v2.md`,
with a "seriously impressive" hero. Evan explicitly required three design skills be applied:
`/design-taste-frontend`, `/emil-design-eng`, `/ui-ux-pro-max`.

## Current Status

**Done and committed.** All session work (including three post-review fixes) is in commit
`bba4b76 "new"` on `main` (committed by Evan, 2026-07-18 00:11). Working tree is clean.
Build passes (`npm run build`, 10 routes). No git remote exists yet; nothing is deployed.
Preview was last served at `http://localhost:4322/` via `npm run preview -- --port 4322`
(process may or may not still be running; just re-run it).

## Agents and Skills Used (the actual process, in order)

**Subagents used: zero.** Every step was done inline by the main Claude Code agent
(model: Claude Fable 5) in a single session. No Agent-tool fan-out, no Workflow orchestration.
Verification was done directly with Bash (build/grep/curl) and the `claude-in-chrome` MCP
browser tools (navigate / screenshot / scroll / hover).

**Skills loaded (4 total), and what each contributed:**

| Order | Skill | What it was used for |
|---|---|---|
| 1 | `anthropic-skills:design-taste-frontend` | Baseline dials (variance 8 / motion 6 / density 4), anti-slop rules: no centered hero, no 3-equal-card rows, transform/opacity-only animation, `min-h-[100dvh]`-style viewport safety, banned AI tells |
| 2 | `anthropic-skills:emil-design-eng` | Motion craft: custom ease-out curves (`cubic-bezier(0.16,1,0.3,1)`, `(0.23,1,0.32,1)`), stagger timing 30-80ms, never animate from scale(0), prefers-reduced-motion discipline, interruptible CSS transitions |
| 3 | `anthropic-skills:ui-ux-pro-max` | UX checklist: contrast, touch targets, heading hierarchy, `focus-visible`, no emoji icons, reveal patterns, accessibility pass |
| 4 | `handoff` | This document |

The repo's own content skills (`gm-content`, `gm-content-humanizer`, `gm-content-finisher`) were
NOT run this session — the copy was already approved V2 draft and was used **verbatim** (see rules
below). If you edit copy, those skills own that process (see `Rebrand Content/CLAUDE.md`).

**Step-by-step timeline (resume points):**

1. Read content source `Rebrand Content/drafts/pages/json/home-v2.md`; loaded the 3 design skills.
2. Studied existing system: `src/pages/platform.astro` (the pattern to match), `src/content.config.ts`,
   `src/content/pages/platform.json`, `src/styles/global.css` (tokens), `src/components/ui/Button.astro`,
   `Icon.astro`, `TextLink.astro`, `src/components/blocks/{Navbar,Footer,FAQAccordion}.astro`,
   `src/layouts/BaseLayout.astro`, `astro.config.mjs`.
3. Created `src/content/pages/home.json` — home-v2.md copy converted to the same JSON section schema
   platform.json uses (meta / hero / section / faq / draftNotes). Copy verbatim, links preserved.
4. Moved the design-system hub off `/`: `git mv src/pages/index.astro src/pages/styleguide/index.astro`,
   fixed imports (`../` → `../../`), added `noindex`, pointed `src/components/styleguide/SpecShell.astro`
   logo link at `/styleguide/`.
5. Built new `src/pages/index.astro` (home page, ~700 lines): hero + 7 sections + JSON-LD + scripts.
6. Verified: `npm run build`, punctuation grep, `npm run preview`, Chrome screenshots of every section.
7. Updated `/Users/evan.t/Documents/GM SIte Design/CLAUDE.md` (project doc) to reflect new routes.
8. **Review round 1 (Evan): "hero is boring, tired, uninspiring."** Rebuilt the hero (see Decisions).
9. **Review round 2 (Evan), three fixes:** (a) hollow outline H1 line 2 hard to read → solid white/45;
   (b) receipts stats must be one color → all raspberry (was raspberry/mint/cobalt);
   (c) "Done guessing" → "Done guessing?" in `home.json` AND synced to source draft `home-v2.md`.
10. Rebuilt, re-verified in browser. Evan committed everything as `bba4b76`.

## Work Completed (files, all verified by build + browser)

- `src/content/pages/home.json` — NEW. Full home-v2 copy as content JSON. Heading now "Done guessing?".
- `src/pages/index.astro` — REWRITTEN (was the design-system hub). The home page:
  - **Hero**: `bg-hole` (#020112) full-viewport; canvas "bidstream" network (`#bidnet`) — ~120 drifting
    nodes, proximity lines, raspberry pulse ring every 1.5-3.3s ("a bid won"), cursor attraction,
    denser on the right (`x = w * Math.pow(random, 0.62)`); masked line-reveal H1 (`.mask`/`.line-up`);
    "advertising" ends in a raspberry period; line 2 solid `text-white/45` with perpetual scramble on
    "guessing." (`[data-scramble]` — decode on load, then one random letter misfires every 3.4s);
    magnetic CTA (`#hero-cta`, pulls toward cursor within 150px); published-facts ticker marquee
    (`.ticker`, two duplicate `<ul>`s, translateX(-50%) loop, 44s).
  - **Sections**: 01 answer block (white, AEO definition, raspberry border-l) → 02 receipts
    (`#receipts`, dark ink, 3-up stats all-raspberry, count-ups via `[data-countup]`) → 03 solutions
    grid (5 tiles, dark anchor tile pattern copied from platform.astro) → 04 why (dark-raspberry
    gradient, rates board $2-$4 / $10-$22 / $25-$40) → 05 process (Cenvar panel, +44% / +30%) →
    06 FAQ (`FAQAccordion`, 4 items) → "Done guessing?" CTA (GM. watermark, radial glow).
  - **SEO/AEO**: JSON-LD graph (Organization + WebSite + WebPage + FAQPage), canonical `/`,
    meta title "Genius Monkey | Programmatic Advertising That Shows Its Work".
  - **Motion safety**: all animation transform/opacity/canvas; DPR capped at 2; canvas pauses on
    `visibilitychange`; everything off under `prefers-reduced-motion` (canvas `display:none`);
    scroll reveals (`[data-reveal]`) only activate when JS adds `.js` to `<html>`, so no-JS users
    see full content.
- `src/pages/styleguide/index.astro` — MOVED here from `src/pages/index.astro` (hub intact, +noindex).
- `src/components/styleguide/SpecShell.astro` — logo link `/` → `/styleguide/`.
- `Rebrand Content/drafts/pages/json/home-v2.md` — closing H2 updated to "## Done guessing?" (reviewer edit).
- `CLAUDE.md` (repo root) — Structure/route docs updated to current reality.
- `HANDOFF.md` — this file.

## Key Decisions & Rationale

- **Copy is verbatim, always.** Repo rule: never invent GM voice/stats/claims. Every visible string
  on the page traces to `home-v2.md` (via `home.json`). Even the hero ticker items and rates board
  numbers are facts stated in the page copy. UI micro-labels (link text like "See the receipts",
  section eyebrows like "02 / Proof") are the only authored chrome. Don't add copy — pull it from
  the content machine (`Rebrand Content/`) instead.
- **Hub moved to `/styleguide/`** so the real home page owns `/`. Sitemap already filters
  `/styleguide/*`; hub + spec sheets are noindex.
- **Content JSON pipeline over hardcoding**: page reads `getEntry("pages", "home")` and slices
  paragraphs positionally (e.g. receipts paragraph split at "onsemi"/"Country Thunder"/"Canales"
  indexOf). If copy is re-drafted, check those split anchors still match.
- **Hero concept ("the bidstream")**: the product is a live auction machine, so the hero shows one.
  Chosen over a static type lockup after Evan rejected v1 as boring. "We solve advertising." solid
  vs "guessing." perpetually scrambling = the H1's argument, animated.
- **Vanilla canvas/JS, no framer-motion/React** — the site is pure Astro static; keep it that way.
- **Reviewer edits captured (round 2)**: solid gray beats hollow outline for readability; one accent
  color (raspberry) beats three in the receipts band; "Done guessing?" now carries the question mark
  in BOTH `home.json` and the source draft so content machine and site can't drift.
- **`class="bg-hole!"` on the Navbar** (important modifier) — Navbar hardcodes `bg-ink`; utility
  order isn't guaranteed, so the `!` makes the hero seam invisible. Same trick needed on any other
  `bg-hole` page.
- **Section label system**: numbered eyebrows `01 / What we do` … `06 / FAQ`, mirroring platform.astro
  ("01 / Definition" etc.). Keep the pattern on future pages.

## Dead Ends & Gotchas

- **Hero v1 (rejected)**: static type + hollow-outline second line + SVG "attribution thread"
  (impression→click→visit→conversion path with comet dash) + ticker. Evan: "boring, tired,
  uninspiring." The thread and its CSS were fully removed; don't resurrect it on this page.
- **Hollow text (`-webkit-text-stroke`) rejected for readability** — round 2 feedback. It's gone;
  don't reintroduce outline type for body-adjacent headlines.
- **Mint/cobalt accents in one band rejected** — Evan wants uniform color per section. Raspberry is
  the accent; secondary brand colors need a deliberate reason.
- **Chrome MCP window won't resize** — `resize_window` reports success but screenshots stay
  1512-1516px wide (window is macOS fullscreen). True mobile-width screenshots were impossible;
  mobile was verified at code level only (all grids collapse below `md:`, clamp() type, canvas is
  decorative-only). A real phone-width visual check is still outstanding.
- **Marquee seamless loop**: two identical `<ul>`s inside a `w-max` flex, items carry `mx-10`
  separators inside the `<li>`, container animates translateX(-50%). If you add/remove ticker items,
  the loop stays seamless automatically; don't switch to a gap on the container (breaks the -50% math).
- **Scramble + SEO**: the real word "guessing." is in the DOM (no sr-only duplication); JS only
  mutates textContent visually. No aria-live, so screen readers aren't spammed.
- **Screenshots catch animations mid-flight** — sections use 0.7s reveals; wait ~1.5s after scroll
  before judging a screenshot as "broken/blank."
- **Zero em dashes / en dashes / ellipsis in src/** — hard repo rule (curly quotes fine). Check with:
  `grep -rnP '\x{2014}|\x{2013}|\x{2026}' src/`. Ranges use hyphens ("$2-$4").

## Environment & Access Notes

- Repo: `/Users/evan.t/Documents/GM SIte Design` — branch `main`, no remote, clean tree at `bba4b76`.
- Stack: Astro 7 (static), Tailwind v4 via `@tailwindcss/vite`, Node >= 22.12. Tokens in
  `src/styles/global.css` under `@theme` (colors: `raspberry`, `hole`, `ink`, `slate`, `cloud`,
  `cobalt`, `violet`, `mint`; fonts: `font-display` Bricolage Grotesque, `font-label` Unbounded
  via `.gm-label`, `font-sans` Outfit; gradients: `bg-gradient-dark-raspberry` etc.).
- Commands: `npm run build` (must pass before "done"), `npm run dev` (port 4321),
  `npm run preview -- --port 4322`.
- Content source of truth: `Rebrand Content/` (own CLAUDE.md + gm-content skills). Site copy JSON
  drafts for OTHER pages already exist at `Rebrand Content/drafts/pages/json/`:
  `solutions-v2.json`, `pricing-v2.json`, `case-studies-v2.json`, `industries.json`,
  `company-about.json`, `request-a-demo-v2.json`, `resources-v2.json`.
- Browser verification: `claude-in-chrome` MCP tools (tab IDs go stale between turns — re-run
  `tabs_context_mcp` if a tab error appears).
- Deploy target (future): Render MCP connected; static site, build `npm run build`, publish dir
  `dist` (NOT Render's `public` default). Blocked on creating a git remote first.

## Next Steps

1. **Phone-width visual QA** of `/` (real device or non-fullscreen browser window): hero type wrap,
   receipts stack, ticker, canvas performance on mobile GPU.
2. **Build the remaining pages** from the v2 JSON drafts listed above, reusing the platform/home
   pattern (copy JSON into `src/content/pages/`, build route in `src/pages/`, match section-label
   system, JSON-LD, verbatim copy). Highest-value next: `/pricing` (hero + FAQ + why-section all
   link to it) and `/solutions` (3 of the 5 solutions tiles point into it).
3. **Wire real nav links** in `navLinks` (in both `src/pages/index.astro` and
   `src/pages/platform.astro`) as pages land — Solutions/Pricing/Resources are `#` placeholders.
   Footer (`src/components/blocks/Footer.astro`) still has placeholder design-system columns.
4. **`/request-a-demo` page** — every CTA on home/platform points there; it 404s today.
5. **Capture-loop logging**: record Evan's round-1/round-2 reactions (hero rebuild, readability over
   hollow type, single-accent rule, "Done guessing?" edit) in Part 3 of
   `gm-content-system/skills/gm-content/gm-content-standards.md` per `Rebrand Content/CLAUDE.md`,
   then re-copy the skill folder to `~/.claude/skills/` as that doc instructs.
6. When ready to deploy: create GitHub remote, push, then Render static site (`dist`).

## Open Questions

- The V2 H1 trades keyword-in-H1 for the brand line (flagged in home-v2.md meta notes). Evan hasn't
  said whether he wants the V1 "insurance" H1 instead — assume V2 stands unless he flags it.
- Cenvar case-study link currently points at `/programmatic-case-studies` (draft says
  "links: Cenvar case study" with no path). Confirm final URL when case-study pages exist.
- Ticker/scramble/canvas are tuned by feel (44s loop, 3.4s misfire, ~120 nodes). Evan hasn't
  reviewed the rebuilt hero motion in detail beyond approving the direction — expect tuning notes.
