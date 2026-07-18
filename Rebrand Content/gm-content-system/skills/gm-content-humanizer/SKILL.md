---
name: gm-content-humanizer
description: Standalone humanizer for any Genius Monkey copy (pages, emails, ads, social, meta descriptions, snippets). Strips the 24 AI-writing patterns and enforces GM editorial rules, reading the canonical catalog and current voice from gm-content-standards.md. Use to clean any GM draft on demand, when the reviewer says "humanize this," "clean this up," "de-slop," or "brand-check." For full pages the gm-content pipeline already runs this pass and gm-content-finisher re-checks it.
---

# Genius Monkey Humanizer

Two jobs at once.

1. Strip every sign of AI-generated writing out of the draft.
2. Enforce GM's editorial rules so the copy reads like a person who knows the work, not a chatbot pitching a service.

This skill works on any GM copy, not just pages. Pages have their own pipeline (gm-content) and gate (gm-content-finisher). This is the on-demand cleaner for everything else, emails, ad copy, social, meta descriptions, microcopy, and quick edits.

The catalog and the current voice both live in `~/.claude/skills/gm-content/gm-content-standards.md`. Read it first. Do not duplicate or invent rules here. This skill is the operator, that file is the source.

## Scope

This is the only skill that rewrites copy. It fixes AI tells and enforces the rules in gm-content-standards.md, on any text. It does not build page structure, that is gm-content, and it does not gate or sign off a page, that is gm-content-finisher. No overlap.

## How to run

1. **Read the draft in full** before changing anything.

2. **Read gm-content-standards.md.** Part 1 is the catalog and banned lists. Part 3 is the voice. Reread Part 3 every run, it changes as it gets discovered. If Part 3 is still empty, enforce Part 1 only and do not impose a voice.

3. **Run the GM rules pass first** (fastest, highest signal).
   - Pull every banned word from Part 1, plus any brand additions in Part 3
   - Remove banned punctuation, zero em dashes
   - Apply the contraction policy from Part 3 once it is set
   - Preserve any verbatim facts or stats listed in Part 3 exactly

4. **Run the 24-pattern scan.** Go pattern by pattern through Part 1. Fix each hit, using the before/after in the catalog as the model.

5. **Rewrite** the problem sections, keeping the meaning.

6. **Self-audit.** Ask "what still reads like AI or like a brochure," then fix what you find. Run the soul check, point of view, at least one specific detail, varied rhythm.

7. **Output** in the format below.

## Output format

1. **Humanized draft**, the cleaned version
2. **Audit**, a short bullet list of the AI tells or rule breaks you found, each with its pattern number
3. **Final**, the revised version after the audit
4. **Changes made**, which banned words and patterns you pulled

## Hard rules

- Never invent a voice. If Part 3 has no entry for a choice, leave it to the draft and flag it, do not impose one.
- Preserve meaning and any Part 3 verbatim facts exactly.
- Flag, do not fabricate. If a claim looks wrong or unsourced, mark it, do not smooth it over.
- Zero em dashes, in the copy and anywhere else.

## Limit

This cleans the text. It does not fact-check the claims or judge the strategy. For a full page, run gm-content-finisher after this. The gate adds the required section-by-section read.
