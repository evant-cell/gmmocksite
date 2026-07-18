# Genius Monkey Content System, Build Plan

Staged on the personal machine for transfer to the work machine. No GM brand voice, stats, or client content is invented here. Bracketed `[NEEDS GM INPUT]` slots get filled from materials the reviewer provides, then the deliverables get built tuned to GM.

Source of the port, an existing personal content stack read on 2026-06-23, a blog production skill (production sequence, SEO/GEO, voice), a finisher gate, and a 24-pattern humanizer.

Current GM state, GM content presently runs through a generic humanizer only. No brand layer, no gate, no pipeline. This system fills that gap.

---

## What ports and what gets dropped

Decision on file, full pipeline minus design.

**Kept (the quality engine, the part people love)**
- Production sequence, draft to humanize to finish
- The 24-pattern AI-writing catalog (Wikipedia "Signs of AI writing"), brand-neutral, with worked before/after examples
- The brand-voice rule framework (voice definition, read-aloud test, soul check)
- Banned-word, punctuation, and contraction enforcement
- The finisher gate, deterministic checks plus a mandatory section-by-section read that refuses to report PASS until the read is recorded

**Dropped (design and scaffolding, per the scope call)**
- HTML head block, tag-manager container, canonical/OG/JSON-LD schema
- CSS tokens, accordion JS, intro-block markup, grid cards
- sitemap.xml, redirects, image attribute audit, scroll/resize listener audit
- Affiliate link tracking parameters

---

## The deliverables (the "all of the above" format call)

All are surfaces of one rule set. The reference doc is canonical. The skills and the script derive from it.

1. **Reference doc**, `gm-content-standards.md`. Source of truth. Voice, rules, page structures, the 24-pattern catalog with examples.
2. **Skills**, `gm-content` (production pipeline), `gm-content-humanizer` (on-demand humanizer for any copy), and `gm-content-finisher` (quality gate).
3. **Audit script**, `audit.py`. Deterministic checks (punctuation, banned words, contraction count, AI-pattern grep baseline). Run before publish.

---

## Architecture, five layers

| Layer | Content | Port status |
|---|---|---|
| L1 Production sequence | draft to humanize to finish | Portable, web-page tuned |
| L2 24-pattern AI catalog | the universal AI tells, with examples | Portable as-is, brand-neutral examples |
| L3 Brand voice rules | voice, person, soul check | Framework ports, content discovered over time |
| L4 Enforcement lists | banned words, punctuation, contractions, verbatim facts | AI-slop subset ports, rest needs GM input |
| L5 Quality gate | deterministic checks + mandatory qualitative read | Philosophy and structure port, lists and thresholds GM-tuned |

---

## GM input slots

Each slot shows the source equivalent so the shape is clear. Replace it with GM's version.

| Slot | Source equivalent (the shape, not the answer) | Feeds |
|---|---|---|
| S1 A+ examples | 2-3 pieces the team loved, plus 1 average/rejected for contrast | Everything. Reverse-engineers the real standard |
| S2 Voice definition | point of view, opinionated, specific over impressive, varied rhythm | Reference doc, all skills |
| S3 Point of view | "we/our," "you," or first-person | Reference doc |
| S4 Verbatim facts and stats | the headline numbers and exact client roster, spelled one correct way | Reference doc, finisher, audit.py |
| S5 Banned words, brand additions | brochure words GM never uses, beyond the universal AI-slop list | Reference doc, audit.py |
| S6 Punctuation + contraction policy | zero em dashes, contraction rule | All skills, audit.py |
| S7 Content types in scope | home, service, and sub pages (settled) | Pipeline skill, finisher |
| S8 Audience + intended action | who reads it, what it should drive them to do | Reference doc, pipeline skill |
| S9 Hard constraints | compliance lines, claims you cannot make, competitor names you avoid | Reference doc, audit.py |
| S10 SEO / distribution targets | domain, canonical pattern, whether GEO / AI-search matters | Pipeline skill |

---

## What actually happened

S1 turned out not to exist yet. GM is mid-rebrand (visual, with the core brand unchanged) and the voice is being discovered going forward, not pulled from past content. So Part 3 ships empty and fills through the capture loop, one approved or killed page at a time. The engine (Parts 1, 2, 4) still works on day one. Content scope settled on home, service, and sub pages, not blog. A standalone humanizer (gm-content-humanizer) was added so non-page copy (email, ad, social, meta) gets the same anti-AI pass without running the full page pipeline.
