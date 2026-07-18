#!/usr/bin/env python3
"""
GM page gate, Phase A deterministic checks.

Mirrors Part 4 Phase A of gm-content-standards.md. Brand-neutral. Runs before
the voice exists. Phase B (the qualitative read) is done by the gm-content-finisher
skill, not this script. This script only handles what a machine can decide.

Usage:
    python3 audit.py path/to/page.html
    python3 audit.py path/to/page.md

Exit code 0 if no hard fails, 1 if any hard fail, 2 on bad input.
"""

import re
import sys
from pathlib import Path

# Part 1 banned words (universal AI-slop). Body-copy hits are hard fails.
# Hits in URLs or proper nouns can be excused by the human in Phase B.
BANNED_WORDS = [
    "delve", "tapestry", "leverage", "comprehensive", "holistic", "robust",
    "dynamic", "transformative", "impactful", "cutting-edge", "pivotal",
    "underscore", "testament", "vibrant", "landscape", "realm", "additionally",
    "furthermore", "moreover", "crucial", "enduring", "enhance", "garner",
    "interplay", "intricate", "intricacies", "fostering", "highlighting",
    "align with", "valuable", "seamless", "game-changing", "boasts", "nestled",
    "renowned", "breathtaking", "stunning", "meticulous", "showcase",
    "the intersection of",
]

CONTRACTIONS = re.compile(
    r"\b(it's|that's|don't|doesn't|won't|can't|we're|we've|you're|you'll|"
    r"i'm|i've|i'll|they're|they've|isn't|aren't|wasn't|weren't|haven't|"
    r"hasn't|hadn't|wouldn't|couldn't|shouldn't|didn't)\b",
    re.I,
)

EMOJI = re.compile(
    "["
    "\U0001F300-\U0001FAFF"
    "\U00002600-\U000027BF"
    "\U0001F1E6-\U0001F1FF"
    "]"
)

# Defined via chr() so the banned characters never appear literally in this file.
EM_DASH = chr(0x2014)
EN_DASH = chr(0x2013)


def find_char(ch, lines):
    hits = []
    for i, line in enumerate(lines, 1):
        if ch in line:
            hits.append((i, line.strip()[:120]))
    return hits


def find_regex(pattern, lines, flags=re.I):
    rx = re.compile(pattern, flags)
    hits = []
    for i, line in enumerate(lines, 1):
        for m in rx.finditer(line):
            hits.append((i, m.group(0), line.strip()[:120]))
    return hits


def find_words(words, lines):
    parts = [r"(?<![\w-])" + re.escape(w) + r"(?![\w-])" for w in words]
    rx = re.compile("|".join(parts), re.I)
    hits = []
    for i, line in enumerate(lines, 1):
        for m in rx.finditer(line):
            hits.append((i, m.group(0), line.strip()[:120]))
    return hits


def headings(text, lines):
    """Collect (lineno, level) for HTML and markdown headings in document order."""
    found = []
    html_rx = re.compile(r"<h([1-6])\b", re.I)
    md_rx = re.compile(r"^\s{0,3}(#{1,6})\s+\S")
    in_fence = False
    for i, line in enumerate(lines, 1):
        if line.strip().startswith("```"):
            in_fence = not in_fence
            continue
        for m in html_rx.finditer(line):
            found.append((i, int(m.group(1))))
        if not in_fence:
            mm = md_rx.match(line)
            if mm:
                found.append((i, len(mm.group(1))))
    return found


def section(out, title, status, detail=""):
    line = f"  {title}: {status}"
    if detail:
        line += f"  ({detail})"
    out.append(line)


def main():
    if len(sys.argv) != 2:
        print("usage: python3 audit.py path/to/page")
        sys.exit(2)
    path = Path(sys.argv[1])
    if not path.is_file():
        print(f"not a file: {path}")
        sys.exit(2)

    text = path.read_text(encoding="utf-8", errors="replace")
    lines = text.split("\n")
    words = len(re.findall(r"\b\w+\b", text))
    hard = 0
    flags = 0
    out = [f"GM PAGE GATE, Phase A (deterministic): {path}", f"word count: {words}", ""]

    # A1 em dashes (hard fail)
    em = find_char(EM_DASH, lines)
    if em:
        hard += 1
        section(out, "A1 em dashes", "HARD FAIL", f"{len(em)} lines")
        for ln, ctx in em[:20]:
            out.append(f"      line {ln}: {ctx}")
    else:
        section(out, "A1 em dashes", "PASS", "0")

    # A2 en dashes (flag, ranges should use a hyphen)
    en = find_char(EN_DASH, lines)
    if en:
        flags += 1
        section(out, "A2 en dashes", "FLAG", f"{len(en)} lines, ranges use a hyphen")
        for ln, ctx in en[:10]:
            out.append(f"      line {ln}: {ctx}")
    else:
        section(out, "A2 en dashes", "PASS", "0")

    # A3 banned words (hard fail on body hits)
    bw = find_words(BANNED_WORDS, lines)
    if bw:
        hard += 1
        section(out, "A3 banned words", "HARD FAIL", f"{len(bw)} hits, excuse URL or proper-noun hits in Phase B")
        for ln, hit, ctx in bw[:30]:
            out.append(f"      line {ln}: '{hit}'  in: {ctx}")
    else:
        section(out, "A3 banned words", "PASS", "0")

    # A4 contractions (info only, policy not set in Part 3)
    c = len(CONTRACTIONS.findall(text))
    section(out, "A4 contractions", "INFO", f"{c} found, allowed per Part 3 (GM uses them freely), no action")

    # A5 AI-pattern baseline
    negpar = find_regex(r"\bnot (just|only|merely|simply)\b", lines)
    if negpar:
        flags += 1
        section(out, "A5a negative parallelism", "FLAG", f"{len(negpar)} hits, OK as specific antithesis with a concrete second half, kill the hollow 'not just X, it's Y'")
        for ln, hit, ctx in negpar[:15]:
            out.append(f"      line {ln}: '{hit}'  in: {ctx}")
    else:
        section(out, "A5a negative parallelism", "PASS", "0")

    cutoff = find_regex(r"(as of my last|knowledge cutoff|at the time of writing|as of \w+ 20\d\d)", lines)
    if cutoff:
        hard += 1
        section(out, "A5b knowledge-cutoff hedge", "HARD FAIL", f"{len(cutoff)} hits")
        for ln, hit, ctx in cutoff[:10]:
            out.append(f"      line {ln}: '{hit}'  in: {ctx}")
    else:
        section(out, "A5b knowledge-cutoff hedge", "PASS", "0")

    emo = find_regex(EMOJI.pattern, lines, flags=0)
    if emo:
        hard += 1
        section(out, "A5c emojis", "HARD FAIL", f"{len(emo)} hits, none in published copy")
        for ln, hit, ctx in emo[:10]:
            out.append(f"      line {ln}: in: {ctx}")
    else:
        section(out, "A5c emojis", "PASS", "0")

    puffery = find_regex(r"\b(essential|vital|paramount)\b", lines)
    section(out, "A5d significance puffery", "FLAG" if puffery else "PASS", f"{len(puffery)} hits" if puffery else "0")
    for ln, hit, ctx in puffery[:10]:
        out.append(f"      line {ln}: '{hit}'  in: {ctx}")
    if puffery:
        flags += 1

    vague = find_regex(r"\b(experts say|studies show|research suggests|it is widely|many believe|some argue)\b", lines)
    section(out, "A5e vague attribution", "FLAG" if vague else "PASS", f"{len(vague)} hits" if vague else "0")
    for ln, hit, ctx in vague[:10]:
        out.append(f"      line {ln}: '{hit}'  in: {ctx}")
    if vague:
        flags += 1

    concl = find_regex(r"\b(in conclusion|to sum up|in summary|in the end)\b", lines)
    section(out, "A5f generic conclusion", "FLAG" if concl else "PASS", f"{len(concl)} hits" if concl else "0")
    for ln, hit, ctx in concl[:10]:
        out.append(f"      line {ln}: '{hit}'  in: {ctx}")
    if concl:
        flags += 1

    boldcolon = find_regex(r"(<strong>[^<]+:</strong>|\*\*[^*]+:\*\*)", lines, flags=0)
    section(out, "A5g bold-colon headers", "FLAG" if boldcolon else "PASS", f"{len(boldcolon)} hits" if boldcolon else "0")
    for ln, hit, ctx in boldcolon[:10]:
        out.append(f"      line {ln}: {ctx}")
    if boldcolon:
        flags += 1

    # A5h GM corporate slop (flag, GM word-choice ban from Part 3)
    gmslop = find_words(["solutions", "omnichannel", "integrated solutions", "scalable frameworks"], lines)
    section(out, "A5h GM corporate slop", "FLAG" if gmslop else "PASS", f"{len(gmslop)} hits, GM word-choice ban" if gmslop else "0")
    for ln, hit, ctx in gmslop[:15]:
        out.append(f"      line {ln}: '{hit}'  in: {ctx}")
    if gmslop:
        flags += 1

    # A6 heading hierarchy
    hs = headings(text, lines)
    if not hs:
        flags += 1
        section(out, "A6 heading hierarchy", "FLAG", "no headings found")
    else:
        h1 = [ln for ln, lvl in hs if lvl == 1]
        problems = []
        if len(h1) == 0:
            problems.append("no H1")
        if len(h1) > 1:
            problems.append(f"{len(h1)} H1s")
        prev = None
        for ln, lvl in hs:
            if prev is not None and lvl > prev + 1:
                problems.append(f"skipped level at line {ln} (H{prev} to H{lvl})")
            prev = lvl
        if problems:
            hard += 1
            section(out, "A6 heading hierarchy", "HARD FAIL", "; ".join(problems))
        else:
            section(out, "A6 heading hierarchy", "PASS", f"{len(hs)} headings, one H1, no skips")

    out.append("")
    overall = "FAIL" if hard else ("PASS WITH FLAGS" if flags else "PASS")
    out.append(f"PHASE A OVERALL: {overall}  (hard fails: {hard}, flags: {flags})")
    if hard or flags:
        out.append("Flags need a human call in Phase B. Hard fails block publish.")
    out.append("Phase A is not the whole gate. Run the gm-content-finisher Phase B read before shipping.")

    print("\n".join(out))
    sys.exit(1 if hard else 0)


if __name__ == "__main__":
    main()
