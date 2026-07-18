# CLAUDE.md, GM Content System (Rebrand Content)

Content-quality system for **Genius Monkey** website copy. Scope: home page, service pages, sub pages. **Not** blog posts. GM is mid-rebrand (visual; core brand unchanged). The voice is discovered through the work, never invented.

## Canonical source

`gm-content-system/skills/gm-content/gm-content-standards.md` is the source of truth (voice, rules, page structures, 24-pattern AI catalog, the gate spec). The installed copy at `~/.claude/skills/gm-content/gm-content-standards.md` is what the skills read. **Edit both, or treat the repo copy as master and re-copy after changes** (see "Editing the standard" below).

## The three skills (installed and live)

| Skill | Use for |
|-------|---------|
| `/gm-content` | Draft or edit a GM **page**. Loads the standard, runs the production sequence, calls the humanizer, hands to the gate, runs the capture loop. |
| `/gm-content-humanizer` | Clean **any** GM copy on demand (email, ad, social, meta, snippet, page). The only skill that rewrites text. |
| `/gm-content-finisher` | Pre-publish **gate** for a page. Runs `audit.py` (Phase A) then a mandatory section-by-section read (Phase B). One file per run. Flags only, never auto-fixes. |

Roles do not overlap: `gm-content` structures and drafts, `gm-content-humanizer` rewrites, `gm-content-finisher` verifies.

## Supporting skill, AI search (AEO)

`/ai-seo`, filed at `gm-content-system/skills/ai-seo/`, installed to `~/.claude/skills/ai-seo/`. The AEO layer: how to structure a page so AI answer engines (AI Overviews, ChatGPT, Perplexity) cite it, definition blocks, 40 to 60 word answers, comparison tables, stats with sources, and schema. Apply it while drafting any page meant to surface in AI search (glossary, guides, FAQ, comparisons, most service pages). It informs structure only; the GM pipeline still owns voice, the humanizer pass, the gate, and zero em dashes. References: `references/content-patterns.md` (block templates) and `references/platform-ranking-factors.md` (per-platform signals and robots.txt for AI crawlers). Source: `ai-seo.zip`, delinted to zero em dashes on filing.

## Standard workflow

1. `/gm-content` to draft a page → it calls the humanizer and the gate for you. For a page that targets AI search, also apply `/ai-seo` while drafting (see Supporting skill).
2. For non-page copy, `/gm-content-humanizer` on its own.
3. `/gm-content-finisher <absolute-path>` before anything ships.
4. **Capture loop (the whole point):** after the reviewer reacts (approve / edit / kill), record the lesson in Part 3 of the standard. A page is not finished until its lesson is logged. Every page makes the voice doc smarter.

## Deterministic gate (no skill needed)

```
python3 ~/.claude/skills/gm-content-finisher/scripts/audit.py <absolute-path>
```
Exit 0 = no hard fails, exit 1 = at least one hard fail. Python 3, no deps. This is Phase A only, it does not replace the finisher's Phase B read.

## Hard rules

- **Zero em dashes.** Anywhere, copy, attributes, structured data. (Curly quotes are fine.) En dashes only flagged; ranges use a hyphen.
- **Never invent a voice.** Part 3 entries need evidence: an approved page or a stated reviewer decision. If a voice slot is empty, enforce Part 1 only and flag the guess.
- **Content only.** No HTML head, schema, CSS, layout, or scaffolding. This system writes copy, not design.
- **Preserve verbatim facts/stats** exactly once Part 3 lists them.
- The finisher **flags, the writer decides.** It never rewrites and never reports PASS on Phase A alone.

## Editing the standard

Repo copy: `gm-content-system/skills/gm-content/gm-content-standards.md`
Installed copy (what skills read): `~/.claude/skills/gm-content/gm-content-standards.md`
After editing the repo copy, re-copy the whole skill folder:
```
cp -R "gm-content-system/skills/." ~/.claude/skills/
```

## Workspace

- `drafts/`, page copy in progress.
- `gm-content-system/`, the system itself (README, BUILD-PLAN, skills source). Don't draft content in here.

## Current state

Part 3 (voice) ships **empty by design** and fills via the capture loop. The engine (Parts 1, 2, 4, anti-AI catalog, page structures, the gate) works on day one. Decisions log and voice slots in the standard are TBD until pages get reviewed.
