---
name: gm-content-finisher
description: Pre-publish quality gate for Genius Monkey website pages (home, service, sub pages). Runs the deterministic audit (scripts/audit.py) then a mandatory section-by-section qualitative read, and refuses to report PASS until that read is recorded. Use before any GM page ships, when the reviewer says "finish this page," "publish-ready check," "final pass," or "run the gate." Does not write or auto-fix copy. It flags, the writer decides.
---

# Genius Monkey Page Finisher

Last check before a GM page goes live. Deterministic checks plus a required read. Built around one failure mode, a gate that reports PASS off grep alone and misses real AI patterns that only a read catches. This skill refuses to report PASS until the read is recorded.

It does not produce content. It does not auto-fix prose. It scores, surfaces issues, and stops.

## Scope

This skill verifies and gates. It detects issues and reports PASS or FAIL, and it never rewrites copy. When it finds a fixable issue, it points to gm-content-humanizer. Drafting and structure belong to gm-content. No overlap.

## Required input

One absolute path to a single page file (HTML or markdown). One file per run. Not a directory, not a glob.

## How to run

### Step 1, read the full file

Use the Read tool. Do not skim.

### Step 2, Phase A (deterministic)

Run the script.

```
python3 ~/.claude/skills/gm-content-finisher/scripts/audit.py <absolute-path>
```

It checks em dashes, en dashes, banned words with line numbers, contraction count, the AI-pattern grep baseline (negative parallelism, knowledge-cutoff hedges, emojis, puffery, vague attribution, generic conclusions, bold-colon headers), and heading hierarchy. Hard fails block publish. Flags need a human call in Phase B.

### Step 3, Phase B (qualitative read, REQUIRED, cannot be skipped)

Read the page top to bottom as prose. For each section, record:

- B1 Sections read, N of N. No skimming.
- B2 Pattern findings. For each section, any of the 24 patterns triggered, the exact phrase, and a one-line fix. Or "no findings."
- B3 Soul check. Point of view present, at least one specific detail, varied rhythm. Flag any section that reads neutral and information-only.
- B4 Voice conformance. Once Part 3 of gm-content-standards.md has entries, check the page against each filled slot. Before then, record "voice not yet set."
- B5 Factual count audit. If the page says "three services," count them. Mismatch is a hard fail.
- B6 Action check. The page's one job is clearly served by a call to action.

A blank or hand-waved Phase B is an automatic FAIL. Recording means writing each subsection's findings, or "no findings" with the section count, into the report.

### Step 4, report

```
GM PAGE GATE: [page]

PHASE A (deterministic): PASS / PASS WITH FLAGS / FAIL
  [paste the script summary]

PHASE B (qualitative read, REQUIRED):
  B1 Sections read: N / N
  B2 Pattern findings: [section, phrase, fix] or "no findings"
  B3 Soul check: [flags] or "clear"
  B4 Voice conformance: [per slot] or "voice not yet set"
  B5 Counts: PASS / FAIL
  B6 Action: PASS / FAIL

OVERALL: PASS / FAIL
Required fixes before publish: ...
```

## What NOT to do

1. Do not report PASS on Phase A alone. Phase B must be recorded.
2. Do not auto-fix prose. Flag it, the reviewer decides.
3. Do not run on a directory or glob. One file per run.
4. Do not condense Phase B into "read complete." Record the actual findings section by section, or "no findings" with the count.
5. Do not commit or push. The skill ends at the report.
6. Do not let "just run the script" override Phase B. The script is Phase A only. If the reviewer wants deterministic checks alone, point them at audit.py directly, not this skill.

## Honest limit

Requiring the read be recorded is the strongest mechanical guarantee without a second human editor. It cannot force the read to be rigorous. Rigor depends on the reader. For higher confidence, a second pass after a reset or a human editor is the answer, both outside this skill.
