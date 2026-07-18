# Genius Monkey Content Standards

Canonical source of truth for GM website copy. The skills and the audit script derive from this file.

**Status.** Voice is being discovered going forward, not pulled from past GM content. The engine (Parts 1, 2, 4) is stable and works on day one. The voice (Part 3) was seeded 2026-06-27 from two reviewer brand guides and grows further as we produce and review pages.

**Scope.** Home page, service pages, sub pages. Not blog posts.

---

## Part 0, how this works

Two layers.

1. **Stable engine.** Anti-AI catalog, page structures, production sequence, quality gate. None of this depends on the voice. It works immediately.
2. **Living voice.** Discovered through the work. Starts as empty slots in Part 3 and fills via the capture loop below.

**The capture loop.** This is how the voice discovers itself.
1. I draft a page on the current best read of the voice
2. The reviewer approves it, kills it, or edits it
3. Approved moves become voice rules in Part 3. Killed moves become anti-patterns. Edits get diffed and the reason gets logged
4. Part 3 updates, the next draft is sharper
5. Repeat until Part 3 is dense enough to enforce mechanically

Every page produced makes the voice doc smarter. That is the point.

---

## Part 1, universal engine (stable)

This is the part that makes copy not read like AI and not read like a brochure. It is brand-neutral. It applies before the voice exists.

### Banned punctuation (default, confirm for GM)

- **Zero em dashes.** Replace with a comma, a period, or a rewrite. Carried in as the GM default until told otherwise. Confirm or relax it once the voice is set.
- No colons or semicolons in headers or subheads.
- Colons and semicolons in body copy only when truly unavoidable (ratios, time values, code).

### Universal AI-slop words (kill on sight)

These appear far more in post-2023 machine text. If one shows up, rewrite the sentence. Brand-specific additions get appended in Part 3 as they are discovered.

delve, tapestry, leverage, comprehensive, holistic, robust, dynamic, transformative, impactful, cutting-edge, pivotal, underscore, testament, vibrant, landscape (abstract), realm, additionally, furthermore, moreover, crucial, enduring, enhance, garner, interplay, intricate, intricacies, fostering, highlighting (verb), align with, valuable, seamless, game-changing, boasts, nestled, renowned, breathtaking, stunning, meticulous, showcase, the intersection of

`key` as a filler adjective is banned ("the key thing," "a key factor"). `Key takeaways` as a header is the only exception.

### The 24-pattern AI catalog

Source, Wikipedia "Signs of AI writing" (WikiProject AI Cleanup). Each pattern lists what to watch for, a brand-neutral before and after, and the fix. The examples use generic web copy on purpose, so they teach the pattern without seeding a GM voice.

**Content patterns**

1. **Significance inflation.** Watch, "marks a pivotal moment," "is a testament to," "reflects broader."
   Before, "The launch marks a pivotal moment in the evolution of the category."
   After, "We shipped the tool in March. It ties spend to revenue."
   Fix, cut the importance claim or state the plain fact.

2. **Notability puffery.** Watch, "featured in leading outlets," "trusted by industry leaders," "strong presence."
   Before, "Trusted by industry leaders with a strong presence across channels."
   After, "Used by 200 retail brands, three of them in the top ten by revenue."
   Fix, name the specific proof or cut it.

3. **Superficial -ing tails.** Watch, trailing "emphasizing X, fostering Y, underscoring Z."
   Before, "We run the campaigns, ensuring alignment and fostering growth."
   After, "We run the campaigns and report what moved the number."
   Fix, delete the participial clause.

4. **Promotional language.** Watch, "boasts," "vibrant," "nestled," "renowned," "cutting-edge."
   Before, "Our platform boasts a vibrant suite of cutting-edge tools."
   After, "The platform handles tracking, bidding, and reporting in one place."
   Fix, neutral factual statement.

5. **Vague attribution.** Watch, "experts say," "studies show," "reports suggest."
   Before, "Studies show most teams waste half their budget."
   After, "A 2023 Nielsen study put wasted display spend at 36 percent."
   Fix, name the source with a number or cut the claim.

6. **Formulaic challenges-and-future sections.** Watch, "Despite its success, X faces challenges ahead."
   Before, "Despite strong growth, the company faces challenges typical of its stage."
   After, "The hard part is hiring fast enough without dropping quality."
   Fix, say the real constraint plainly.

**Language and grammar**

7. **AI vocabulary.** Watch, the Part 1 banned list. If one appears, the sentence is wrong twice.
   Before, "We leverage a robust, holistic framework."
   After, "We use one system that ties every dollar to a result."
   Fix, rewrite the sentence in plain words.

8. **Copula avoidance.** Watch, "serves as," "stands as," "functions as," "acts as."
   Before, "The dashboard serves as a single source of truth."
   After, "The dashboard is the single source of truth."
   Fix, use "is" or "are."

9. **Negative parallelism.** Watch, the hollow "It's not just X, it's Y" where Y is a vague upgrade, and "Not A. Not B. C." filler.
   Before, "It's not just software, it's a partnership."
   After, "The software comes with a team that runs it with you."
   Fix, direct statement, or make the second half concrete.
   GM exception, confident antithesis with a concrete second half is on-brand and encouraged ("We don't compete in this space. We outgrow it.", "results, not decks", "you pay for results, not just exposure"). See Part 3. The ban is only the hollow vague-upgrade form.

10. **Rule of three overuse.** Watch, forced trios of adjectives or clauses.
    Before, "Clear, confident, conversion-ready creative."
    After, "Creative built to convert."
    Fix, cut to one or two.
    GM exception, load-bearing or anaphoric triads are allowed in brand, about, and values copy (see Part 3). The exception does not apply to service or conversion pages.

11. **Elegant variation.** Watch, cycling synonyms for one noun (the platform, the solution, the offering).
    Before, "The platform helps. The solution scales. The offering delivers."
    After, "The platform tracks spend, sets bids, and reports weekly."
    Fix, pick one word and repeat it.

12. **False ranges.** Watch, "from X to Y" where X and Y are not on one scale.
    Before, "Everything from keyword research to the art of storytelling."
    After, "Keyword research, ad build, and monthly reporting."
    Fix, just list what you mean.

**Style**

13. **Em dash overuse.** Already zero by Part 1. Fix, comma or period.
14. **Boldface overuse.** Watch, mechanical bolding of phrases. Fix, bold only what genuinely needs weight.
15. **Inline-header colon lists.** Watch, bolded-label bullets like "**Service,** we did it." Fix, write it as prose.
16. **Title case in headings.** Watch, every main word capitalized. Fix, sentence case in body headers.
17. **Emojis.** Watch, decorative icons in headers or bullets. Fix, none in published copy.
18. **Curly quotes.** Allowed. Not flagged.

**Communication**

19. **Chat artifacts.** Watch, "Here is an overview," "I hope this helps," "let me know." Fix, cut.
20. **Knowledge-cutoff hedges.** Watch, "as of my last update," "while details are limited." Fix, find the fact or cut the claim.
21. **Sycophancy.** Watch, "Great question," "you're absolutely right." Fix, cut.

**Filler and hedging**

22. **Filler phrases.** Watch, "in order to," "due to the fact that," "at this point in time." Fix, the short form ("to," "because," "now").
23. **Excessive hedging.** Watch, stacked qualifiers like "could potentially possibly."
    Before, "This could potentially help improve results somewhat."
    After, "This cut cost per lead by 22 percent in the first month."
    Fix, state it, or state the one real uncertainty.
24. **Generic positive conclusions.** Watch, "the future looks bright," "exciting times ahead."
    Before, "The future looks bright for the brand."
    After, "Next quarter we add two service pages and a pricing calculator."
    Fix, end on a specific concrete next thing.

### Anti-slop rules

- **Vary rhythm.** Short punchy sentence. Then a longer one that takes its time. Then short again. Machine text is metronomic. Break the metronome.
- **Specific over impressive.** A real number, name, or time frame beats "strong results" every time.
- **Have a point of view.** A neutral information dump reads like a stub. Even before the GM voice is set, copy should take a position.
- **Acknowledge trade-offs.** Real operators name what is hard. Pretending everything is effortless reads like a template.

### The soul check

Removing AI tells is half the job. Sterile clean copy is just as obvious as slop. After the AI pass, confirm the page has a point of view, at least one specific detail per section, varied sentence length, and a writer who seems to care. If not, it fails even with zero banned words.

---

## Part 2, web-page production sequence (stable)

### The sequence

1. **Define the page job.** One sentence. What this page is for and the one action it should drive.
2. **Map the message.** Order the points by what the visitor needs to believe, in order, to take that action.
3. **Draft** against the structure for the page type below.
4. **Humanize** by running the gm-content-humanizer skill. Mandatory, not optional.
5. **Run the gate** in Part 4 before it ships.

### Page structures

**Home page**
- Hero, one clear value statement and the primary action
- Proof early, who trusts GM and one hard number
- Services overview, scannable, each linking to its service page
- Differentiator, why GM and not the alternative
- Secondary proof or process
- Closing call to action

**Service page**
- Hero tied to the specific service and the outcome it drives
- The problem this service solves, stated in the visitor's words
- What GM actually does, concrete, not abstract
- Proof for this service specifically
- What is included or how it works
- FAQ, the real objections a buyer has
- Call to action

**Sub page** (about, process, industry, and similar)
- Hero matched to the page's single job
- Body ordered by the message map, no fixed template
- One call to action appropriate to where this page sits in the journey

### On-page essentials (web, not blog)

- One H1 per page, then a clean H2 and H3 hierarchy, never skip a level
- Scannable. Short paragraphs, real subheads, no wall of text
- One primary action per page, stated more than once if the page is long
- If SEO matters for the page, the primary term sits in the H1 and the first 100 words, used naturally, never stuffed
- If the page targets AI search (AI Overviews, ChatGPT, Perplexity), apply the `/ai-seo` skill while drafting: lead each section with a direct 40 to 60 word answer, add a definition block for "what is X" queries, a comparison table for "X vs Y", a natural-question FAQ, and real stats with sources. Optimize to be cited, not only ranked. Zero em dashes and the gate still apply

---

## Part 3, voice (discovered, living)

This part fills through the capture loop in Part 0. Each entry needs evidence, an approved page or a stated decision. Do not invent.

**Primary sources.** Two reviewer-provided files, both saved verbatim under `gm-content-system/brand/`, both authoritative.
- `brand/brand-story.md`, the Mission, Vision, Values, Goal, Beliefs, Differentiators, and Positioning. Brand and values register.
- `brand/voice-and-tone.md`, the full Voice & Tone guide (essence, tone pillars, calibration, word choice, principles, do and don't, copy gallery, key-term definitions, audiences). The fullest articulation of the voice. Read it before writing any page.

Brand and values copy can run loud. Service and conversion pages still owe Part 1 discipline, specific over impressive.

### The essence

Genius Monkey sounds like the smartest person in the room, and the most genuine one to talk to. Direct, confident, occasionally irreverent. Never corporate, never vague. Say what we mean, back it with data, let the results do the loud talking. Source, voice-and-tone.md Overview.

**Personality.** Outspoken, Confident, Maverick, Approachable, Playful, Direct.

**Tone, four pillars.** Loud (bold, earned, not bluster). Humble (never talk down, client over ego). Playful (witty, not a stuffed shirt). Outspoken (a point of view, said plainly).

**Calibration, the sweet spot is cool and confident.** Confidence with receipts, not arrogance. Three misses to avoid, too arrogant (dismissive, belittles competitors), too safe (vendor noise), too corporate ("leverages integrated solutions to optimize omnichannel"). Worked four-way comparison in voice-and-tone.md.

### Decisions log

| Date | Decision | Evidence |
|---|---|---|
| 2026-06-27 | Voice seeded from the GM Brand Story. | `brand/brand-story.md` |
| 2026-06-27 | Voice expanded from the full Voice & Tone guide, essence, personality, pillars, calibration, word choice, principles, audiences, key terms. | `brand/voice-and-tone.md` |
| 2026-06-27 | Triads allowed in brand, about, and values copy. Strict on service and conversion pages. Refines Part 1 pattern 10. | Brand Story plus reviewer decision |
| 2026-06-27 | Antithesis RESOLVED. Confident antithesis with a concrete second half is on-brand ("We outgrow it", "not just exposure"). The hollow "it's not just X, it's Y" upgrade stays banned (Part 1 pattern 9). audit.py A5a moved from hard fail to flag. | `brand/voice-and-tone.md` Do and Don't, Copy Gallery, plus reviewer decision |
| 2026-06-27 | GM corporate slop ("solutions", "omnichannel", "integrated solutions", "scalable frameworks") added to audit.py as A5h flags. | Voice & Tone word choice, plus reviewer decision |
| 2026-07-06 | Nav label "Solutions" stays as-is (it segues into everything under it). URL and nav keep the word; body copy, H1s, and headers still avoid it per the AVOID list. | Reviewer decision, hub-outline review |
| 2026-07-06 | Company facts (founded 2009, Tempe AZ, coined "programmatic advertising" 2010, Pixel Monkey 2016, OTT/CTV 2019) and published per-channel pricing benchmarks cleared into brand/facts.md from the live About and Pricing pages, at the reviewer's direction. | Reviewer decision plus geniusmonkey.com/about/ and /pricing/ |
| 2026-07-11 | /resources framing KILLED and reset. The teaching-hub register ("Learn programmatic here", curriculum framing, how-to voice) is wrong for this page. /resources displays what GM has published and is proud of, pride-of-authorship register ("our name is on every page"). It may become the educational hub later, not now. Rule: don't frame a GM hub page as a curriculum unless the reviewer asks for one. resources.md and resources-v2.md both rewritten on the new framing (V2 braver register). | Reviewer (Evan) kill of drafts/pages/resources.md teaching framing, 2026-07-11 |

### Voice slots

- **Point of view.** Genius Monkey as a confident category leader that kept its challenger hunger. Proof-backed, client-first. Evidence, Positioning, Principles ("own your confidence").
- **Person.** First person plural, "we / our," addressing the reader as "you." Evidence, throughout both sources.
- **Tone.** Personality, Outspoken, Confident, Maverick, Approachable, Playful, Direct. Pillars, Loud, Humble, Playful, Outspoken. Evidence, voice-and-tone.md Overview and Tone.
- **Sentence rhythm.** Short declaratives and deliberate fragments for punch, mixed with longer explanatory sentences. Emphatic short closer ("Full stop."). Evidence, Copy Gallery, "That hunger never left."
- **Contraction policy.** Used freely. Conversational, not formal. Resolves the A4 audit note, the gate treats contractions as expected.

### Word choice (operative, enforce on every page)

GM-specific USE and AVOID. The AVOID terms are brand-banned on top of the Part 1 universal list. Most are context bans (how we describe clients, services, team), not absolute, so the humanizer and finisher apply judgment. Rationale per row in voice-and-tone.md.

| Describing | Use | Avoid |
|---|---|---|
| Clients | clients, brands, organizations, growth-focused businesses, partners | customers, accounts, advertisers, enterprises, corporations, conglomerates, institutions |
| Services (to clients) | programmatic platform, advertising technology, cross-device marketing, data-driven advertising, performance media | solutions, tools, software, systems, individual user tracking, surveillance-based targeting |
| Services (to consumers) | relevant advertising, smarter ads, better brand experiences, ads that make sense | tracking individuals, watching user behavior, following people online, targeting algorithms, data harvesting |
| Team and culture | our team, our people, the experts behind the platform, real humans who care | resources, staff, headcount, personnel, human capital |

Corporate slop to kill on sight (joins Part 1), "solutions," "omnichannel," "integrated solutions," "scalable frameworks." ("leverage" and "robust" are already Part 1 hard fails.)

### Numbers convention

Figures for metrics and stats, "40%," "5x," "$1," "1,000 impressions." Spell out in rhetorical prose, "ten times our resources." Evidence, ROAS and CPM key terms vs Positioning.

### Signature moves

- Emphatic short closer, "Full stop."
- Short fragment labels that carry a section, "Trust at scale.", "People first."
- Challenger-leader paradox, a category leader that still moves like a challenger.
- Lead with the outcome, then the how, "Your ROAS improved 40%" before any feature.
- Anaphoric or load-bearing triads, allowed in brand, about, and values copy only (Part 1 pattern 10 still applies on service and conversion pages).
- Confident antithesis with a concrete second half ("We don't compete in this space. We outgrow it.", "results, not decks"). On-brand and encouraged. The hollow "it's not just X, it's Y" vague-upgrade stays banned (Part 1 pattern 9).

### Audiences (who we talk to)

| Audience | How we speak to them |
|---|---|
| Marketing agencies | Peer-to-peer, they are experts. Make them look like heroes to their clients. Efficiency, white-glove service, reporting clarity. Never oversell. |
| Organizations (direct-to-business) | Simplify without dumbing down. Lead with outcomes and ROI, then the how. Trust to execute and explain, never talk down. |
| Press and media | Be a resource, not a pitch machine. Data and real perspective. Avoid promotional language. Direct, specific, quote-worthy. |

Full profiles in voice-and-tone.md.

### Principles (apply to every page)

Own your confidence. Say it plainly. Lead with outcomes. Be human, always. Punch above the noise. Client interest is non-negotiable (every sentence that touches a client's brand passes one test, is this in their best interest). Full text in voice-and-tone.md.

### Verbatim brand statements (preserve exactly)

- Positioning, "Genius Monkey is the programmatic advertising partner for brands and agencies who are done guessing and want results they can actually see and explain."
- Mission, "To make programmatic advertising more intelligent, transparent, and client-first."
- Conviction, "our clients deserve a partner who puts their best interest first."
- Key-term definitions in voice-and-tone.md carry the voice, use them verbatim or close.

### Verbatim facts and stats (hard numbers, client roster)

Canonical ledger, `brand/facts.md`. It is the only cleared source of proof, hard numbers and named clients. If a fact is not in that file, it is not approved, do not use it.

Populated 2026-06-30 from GM's published case studies: 27 clients with results, each sourced by URL, in `brand/facts.md`. Per-client detail is in `brand/case-study-proof.md`; full verbatim data in `brand/case-studies.json`. Some clients are anonymized in their source, so honor the "Real name public?" column and never attach a real brand name to an anonymized one. The "40%," "$1 to $5," "5x," and "ten times" in the brand guides are still illustrative, not GM's real numbers, do not invent any. Before writing any proof or results section, pull from `brand/facts.md`. If the needed fact is not there, request it from the reviewer first.

### Hard constraints

- Every claim is backed by proof, data, or real results. No unsupported superlatives. "Bold claims require proof."
- Confidence with receipts, never arrogance, never talk down.
- Client interest is non-negotiable. If a sentence is not in the client's best interest, rewrite it.

### Engine reconciliation

- **Triads (Part 1 pattern 10).** RESOLVED 2026-06-27. Allowed in brand, about, and values copy. Strict on service and conversion pages, cut empty vague-adjective trios there.
- **Antithesis (Part 1 pattern 9).** RESOLVED 2026-06-27. Confident antithesis with a concrete second half is on-brand and encouraged ("We don't compete in this space. We outgrow it.", "results, not decks", "you pay for results, not just exposure"). The hollow "it's not just X, it's Y" upgrade, where the second half is vague, stays banned. audit.py A5a moved from hard fail to flag, so a human judges each hit in Phase B.
- **GM corporate slop.** RESOLVED 2026-06-27. "solutions", "omnichannel", "integrated solutions", "scalable frameworks" added to audit.py as A5h flags.

The deterministic script now flags (does not hard-fail) both, leaving the call to the Phase B reader.

### Capture protocol

When a draft gets a reaction, convert it to a rule before moving on.
- **Approved as-is.** Pull the one or two moves that made it land. Add to the relevant slot with the page as evidence.
- **Edited.** Diff the change. The reason behind the edit is the rule. Log it.
- **Killed.** Name what made it wrong. Add to anti-patterns or the banned-words slot.

A page is not done until its lesson is in this part.

---

## Part 4, quality gate (stable structure)

Last check before a page ships. Deterministic checks plus a required read. It refuses to report PASS until the read is recorded. This is the mechanism that keeps quality from sliding once volume picks up.

### Phase A, deterministic (the audit script handles these)

- A1 Em dashes, zero. Includes attributes and any structured data.
- A2 En dashes in place of ranges, flagged. Ranges use a hyphen.
- A3 Banned words from Part 1, each hit gets a line number. Body-copy hits are hard fails. URL and proper-noun hits get excused with a note.
- A4 Contraction policy, checked against the Part 3 decision once it is set.
- A5 AI-pattern grep baseline, negative parallelism, "not just / not only," significance puffery, vague attribution, knowledge-cutoff hedges, generic conclusions, bold-colon headers, emojis. Each hit listed.
- A6 Heading hierarchy, one H1, no skipped levels.

### Phase B, qualitative read (required, cannot be skipped)

- B1 Read the page top to bottom as prose, section by section. No skimming.
- B2 Score each section against the 24-pattern catalog. Record the section, any pattern triggered with the exact phrase, and a one-line fix.
- B3 Soul check per section. Point of view present, at least one specific detail, varied rhythm. Flag any section that is neutral and information-only.
- B4 Voice conformance. Once Part 3 has entries, check the page against each filled slot. Before then, record "voice not yet set."
- B5 Factual count audit. If the page says "three services," count them. Mismatches are hard fails.
- B6 Action check. The page's one job from Part 2 is clearly served by a call to action.

### Phase C, report

```
GM PAGE GATE: [page]

PHASE A (deterministic): PASS / FAIL, N issues
  A1 Em dashes: PASS (0)
  ...

PHASE B (qualitative read, REQUIRED):
  B1 Sections read: N / N
  B2 Pattern findings: [section, phrase, fix] or "no findings"
  B3 Soul check: [flags] or "clear"
  B4 Voice conformance: [per slot] or "voice not yet set"
  B5 Counts: PASS / FAIL
  B6 Action: PASS / FAIL

OVERALL: PASS / FAIL
Required fixes: ...
```

A blank Phase B is an automatic FAIL. The gate does not auto-fix copy. It flags. The writer decides.
