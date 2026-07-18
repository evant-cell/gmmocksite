# GM Content System

A content quality system for Genius Monkey website copy, ported from my personal workflow and skills stack minus design and scaffolding.

## What it is

Three surfaces of one rule set.

1. `skills/gm-content/gm-content-standards.md`, the canonical doc. Voice, rules, page structures, the quality gate spec. Read this first.
2. Three skills, `gm-content` (production pipeline), `gm-content-humanizer` (on-demand humanizer for any copy), and `gm-content-finisher` (quality gate).
3. `skills/gm-content-finisher/scripts/audit.py`, the deterministic checks.

The engine (anti-AI catalog, page structures, the gate) works now. The voice is discovered through the work and fills in over time. Scope is home page, service pages, sub pages. Not blog posts.

## Install on the work machine

1. Copy the skill folders into the Claude skills directory on that machine.

```
cp -R skills/gm-content ~/.claude/skills/gm-content
cp -R skills/gm-content-humanizer ~/.claude/skills/gm-content-humanizer
cp -R skills/gm-content-finisher ~/.claude/skills/gm-content-finisher
```

2. Confirm the layout.

```
~/.claude/skills/gm-content/SKILL.md
~/.claude/skills/gm-content/gm-content-standards.md
~/.claude/skills/gm-content-humanizer/SKILL.md
~/.claude/skills/gm-content-finisher/SKILL.md
~/.claude/skills/gm-content-finisher/scripts/audit.py
```

3. Smoke-test the script on any page file.

```
python3 ~/.claude/skills/gm-content-finisher/scripts/audit.py /path/to/page.html
```

Exit code 0 means no hard fails. Exit code 1 means at least one hard fail. Python 3, no dependencies.

## Daily use

1. Draft a page with the `gm-content` skill. It loads the standard, runs the production sequence, and humanizes.
2. For non-page copy (email, ad, social, meta), run `gm-content-humanizer` on its own.
3. Run `gm-content-finisher` before publish. Phase A is the script, Phase B is the required read.
4. After the reviewer reacts to the draft, the `gm-content` skill writes the lesson into Part 3 of the standards doc. Every page makes the voice doc smarter.

## The one rule that makes this work

The voice is never invented. Part 3 entries need evidence, an approved page or a stated decision. Until then the engine still enforces "does not read like AI, does not read like a brochure" on every page.

## Files

```
gm-content-system/
  README.md                 this file
  BUILD-PLAN.md             how the system was scoped and what got dropped
  skills/
    gm-content/
      SKILL.md
      gm-content-standards.md
    gm-content-humanizer/
      SKILL.md
    gm-content-finisher/
      SKILL.md
      scripts/
        audit.py
```
