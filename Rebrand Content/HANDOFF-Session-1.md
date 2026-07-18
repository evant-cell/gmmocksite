# Session Handoff — 2026-07-07

> Context note: this session was compacted twice. Everything below is reconstructed from the compaction summary plus files re-read afterward. Exact wording of some early user messages and intermediate tool output is lost; the full transcript is at
> `/Users/evan.t/.claude/projects/-Users-evan-t-Desktop-Rebrand-Content/e288a47f-54d8-4c46-a245-f90ef54b56ab.jsonl`
> The cwd (`/Users/evan.t/Desktop/Rebrand Content`) is **not** a git repo — no branch/commit state to report.

## Objective

Evan Taylor (Genius Monkey, mid visual rebrand) asked for net-new copy for the rebranded site: outlines for 7 hub pages (Platform, Solutions, Industries, Results/Case Studies, Resources, Company, Convert — Convert split into Request a Demo + Pricing = 8 outlines), then full drafts of Platform and Case Studies. Original instruction: "You MUST use the skills inside of the task for the writing and SEO as these pages need to rank well."

## Current Status

- 8 outlines: **done**, all reviewer decisions folded in.
- Platform + Case Studies full drafts, V1 and V2 each: **done**, all four passed the gate (audit.py + Phase B read). Copy approved broadly by Evan ("the copy is fine").
- Remaining 6 pages (Solutions, Industries, Resources, Company/About, Request a Demo, Pricing): **not started** — planned for later sessions from the approved outlines.

## Work Completed

- `drafts/outlines/` — 8 outline files + `00-README.md` (README lists resolved decisions + 6 flagged voice-probe lines). Created, then updated after Evan answered open questions.
- `drafts/pages/platform.md` — V1 full draft, 1,289 words, gate PASS. H1 "The programmatic advertising platform with real experts behind it".
- `drafts/pages/case-studies.md` — V1 full draft, 960 words, gate PASS. H1 "Programmatic advertising case studies".
- `drafts/pages/platform-v2.md` — V2, 1,432 words, gate PASS. H1 "We built the machine. We also answer the phone." Keyword moved to first body sentence (deliberate SEO trade, noted in the file).
- `drafts/pages/case-studies-v2.md` — V2, 961 words, gate PASS with a URL-only flag. H1 "Results, not decks."
- `gm-content-system/brand/facts.md` — populated Company facts table (Founded 2009; coined "programmatic advertising" 2010; HQ 80 East Rio Salado Parkway Suite 814 Tempe AZ; $2M investment 2015; Pixel Monkey 2016; OTT/CTV 2019; Experian/Tapad + Stat Social; team size NOT CONFIRMED — do not state). Added "Published pricing benchmarks" section from live pricing page (Display $0.60–$1.09 CPC / $2–$4 eCPM; Video $0.70–$1.60 / $10–$22; OTT $25–$40 eCPM / $0.04–$0.08 CPCV; Audio $21–$37 eCPM; all-inclusive, no long-term contracts). Updated Cenvar row (+34% traffic / +44% website leads in 45 days; +12% leads / +30% gross billing in 1 year).
- `gm-content-system/skills/gm-content/gm-content-standards.md` (repo master) — added two decisions-log rows dated 2026-07-06 (Solutions nav label stays; company facts + pricing benchmarks cleared from live site), then synced to installed copy via `cp -R "gm-content-system/skills/." ~/.claude/skills/`.
- Mined `/Users/evan.t/Desktop/Rebrand Content/content_case_studies (1).json` via python: 27 studies across 13 industries (Agency, Automotive, B2B, E-Commerce, Education, Event Ticket Sales, Furniture, Home Builder, Home Services, Law, Medical, Nonprofit, Political). No finance or travel studies exist.
- Verified all four page drafts with `python3 ~/.claude/skills/gm-content-finisher/scripts/audit.py <absolute-path>` (exit 0) plus recorded Phase B section reads.

## Key Decisions & Rationale

- **Keep V1s, add V2s** — Evan explicitly: "Make a V2... Keep what we currently have. I don't want to keep you in a cage." V2s take braver H1s; identical fact sets.
- **"Solutions" nav label stays** — Evan: it "Segway's into everything else."
- **Pricing page shows benchmark ranges, not a rate card** — GM doesn't list pricing per se, but the live https://geniusmonkey.com/pricing/ publishes the CPM/CPC ranges now recorded in facts.md. Those are cleared for use.
- **Demo-process details: skipped for now** (Evan's call).
- **Case-study count is 27, not the diagram's "60+"** — copy says twenty-seven because only 27 are in the cleared source. If more exist, update the count.
- **Anonymized clients stay unnamed** (telemedicine co, health/wellness brand, southwestern dealership, personal injury firm, OTT university, national furniture retailer, nonprofit video, political composite) per facts.md.
- **Copy is approved as-is** ("the copy is fine") — don't rewrite the four drafts without a new reviewer reaction.

## Dead Ends & Gotchas

- **audit.py A6 counts scaffolding H1s.** A markdown header like `# Platform page, full draft` above the real H1 hard-fails A6 (exactly one H1). Fix: bold text (`**Platform page, full draft**`), already applied to all four page files.
- **Editing the installed skills copy directly fails the dual-copy rule.** Edit the repo master at `gm-content-system/skills/gm-content/gm-content-standards.md`, then `cp -R "gm-content-system/skills/." ~/.claude/skills/`.
- **onsemi timeline** — the correct sequence is $2,000 → $8, then under $1 **two years later** (not $2,000 → under $1 in two years). Already fixed in copy; don't re-compress it.
- **Cenvar numbers are empty in the JSON scrape** — the real numbers came from the live case-study page and are now in facts.md.
- **Not every case-study group has an industry page** — B2B, Events, Home builders have no `/industries/` page; the copy uses conditional link wording. Don't add links that don't exist.
- **The `Icon` files in these folders are macOS folder-icon artifacts**, not content.

## Environment & Access Notes

- **Content system:** skills `gm-content` / `gm-content-humanizer` / `gm-content-finisher` installed at `~/.claude/skills/`; deterministic gate: `python3 ~/.claude/skills/gm-content-finisher/scripts/audit.py <absolute-path>` (exit 0 = pass). Hard rules: zero em dashes anywhere, no invented voice, content-only for page copy.
- **Facts/proof ledgers:** `gm-content-system/brand/facts.md` (only cleared proof source), `gm-content-system/brand/case-study-proof.md`, `gm-content-system/brand/voice-and-tone.md` (verbatim key-term definitions + approved copy gallery).
- **Keyword plan:** `keyword-plan/page-plan.md` (per-page primary/secondary keywords; /platform primary = "programmatic advertising platform", 600/mo KD9).
- **Case-study raw data:** `/Users/evan.t/Desktop/Rebrand Content/content_case_studies (1).json`.

## Next Steps

1. **Capture loop (required by the system):** once Evan reacts to specific lines, log lessons into Part 3 of `gm-content-system/skills/gm-content/gm-content-standards.md` (then re-copy to `~/.claude/skills/`). Flagged probes awaiting reaction are listed in each draft's "Draft notes" and `drafts/outlines/00-README.md`.
2. Draft the remaining 6 pages from the approved outlines (Solutions, Industries, Resources, Company/About, Request a Demo, Pricing) via `/gm-content`, one or two per session, each through the humanizer and the `/gm-content-finisher` gate.

## Open Questions

- **DOOH:** does GM actually offer digital out-of-home buying? Keyword plan recommends `/solutions/by-channel/dooh` (1,100/mo, KD7) but DOOH is absent from the live site and rebrand sitemap. Needs Evan's yes/no.
- **Minimum budget** fact for the Pricing page — still unconfirmed.
- **Finance and travel industries** have zero case studies — those industry pages must run stat-free unless Evan supplies proof.
- **V2 H1 SEO trade** — V2 moves the primary keyword out of the H1; Evan hasn't explicitly chosen V1 vs V2 H1 for publish.
- Line-level voice reactions (approve/edit/kill on the flagged probe lines) — needed to start filling Part 3 of the standard.
