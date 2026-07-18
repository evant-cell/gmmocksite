---
name: gm-content
description: Production pipeline for Genius Monkey website copy (home page, service pages, sub pages). Loads gm-content-standards.md, runs the page production sequence, applies the anti-AI humanizer pass, and updates the living voice section after each draft gets a reaction. Use for any GM page draft or edit. Voice is discovered through the work, never invented. Hands off to gm-content-finisher before publish.
---

# Genius Monkey Content Pipeline

Produces GM website pages at A+ quality before the brand voice is fully set. The engine (anti-AI, page structure, gate) works on day one. The voice fills in through the capture loop as pages get approved or killed.

Read `gm-content-standards.md` (ships in this skill folder) at the start of every run. It is the canonical source. This skill is the operator for it.

## Scope

This skill produces pages. Structure, draft, and the capture loop that grows the voice. It does not define the rules, those live in gm-content-standards.md, and it does not clean or gate text. It calls gm-content-humanizer to clean and gm-content-finisher to verify. No overlap.

## When to use

Any home page, service page, or sub page for Genius Monkey. Drafting new copy or editing existing copy. Not for blog posts.

## How to run

1. **Load the standard.** Read `gm-content-standards.md` in full first. Reread Part 3 every run, the voice changes as it gets discovered.

2. **Define the page job (Part 2).** One sentence. What the page is for and the single action it drives. Confirm with the reviewer if unclear.

3. **Map the message.** Order the points by what the visitor must believe, in order, to take that action.

4. **Draft** against the structure for the page type (home, service, or sub) in Part 2. Use whatever voice Part 3 has so far. If Part 3 is still empty, draft on the current best read and say so plainly, the draft is a probe to discover the voice, not a final. For a page meant to surface in AI search (glossary, guides, FAQ, comparisons, most service pages), apply the `/ai-seo` skill's AEO patterns while drafting, see On-page essentials in Part 2.

5. **Humanize, mandatory.** Run the gm-content-humanizer skill on the draft. That skill owns the anti-AI pass and the banned-word and rule enforcement. Do not repeat its work here. Do not skip it because the voice is unset, the engine applies regardless.

6. **Self-audit.** Ask "what still reads like AI or like a brochure," then fix it.

7. **Hand to the gate.** Run gm-content-finisher before anything ships.

8. **Run the capture loop (Part 0).** This is the part most pipelines skip and it is the whole point here. After the reviewer reacts to the draft:
   - Approved, pull the one or two moves that made it land, write them into the matching Part 3 slot with the page as evidence.
   - Edited, diff the change, the reason is the rule, log it in the decisions table.
   - Killed, name what made it wrong, add it to anti-patterns or the banned-brand-words slot.
   A page is not finished until its lesson is recorded in Part 3.

## Hard rules

- Never invent a voice entry. Part 3 entries need evidence, an approved page or a stated decision from the reviewer.
- Never write design or scaffolding. This system is content only. No HTML head block, schema, CSS, or layout.
- Preserve any verbatim facts or stats listed in Part 3 exactly, once they exist.
- Zero em dashes, in copy and anywhere else.

## Output per run

1. The page draft
2. A short note on which voice cues you used and which were guesses
3. The proposed Part 3 update once the reviewer reacts (the captured rule, with evidence)
