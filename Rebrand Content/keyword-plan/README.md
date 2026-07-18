# GM Rebrand Keyword Plan

Keyword and cluster plan for the rebrand site architecture, built to make first-pass content strong. Read this first, then `cluster-map.md`, then `page-plan.md`. Raw metrics live in `keyword-universe.csv`.

## Verification (analytical output checklist)

1. **Data shape sanity:** Expected the programmatic and adtech keyword space with GM holding almost no organic presence. Got exactly that: GM ranks for ~35 organic keywords (blog and branded only), while competitor and seed data cluster cleanly around DSP, CTV/OTT, native, DOOH, targeting, measurement, and industries. Match confirmed.
2. **Scope check:** All metrics pulled at country = US, mode = subdomains, date 2026-06-20, consistently for GM and every competitor with data. Comparison is at the keyword and page level. MNTN returned no Ahrefs data and is excluded (noted below).
3. **Spot-check:** Verified the top AEO win "what is a dsp" = 5,400 volume / KD 14 directly in Keywords Explorer, and verified GM already ranks #1 for "mer vs roas" in Site Explorer. Both confirmed in-tool before building the plan.

## What this is

Four working files plus the data:

- **`cluster-map.md`**, 16 topic clusters with hub-and-spoke structure and the interlinking rules. This is the clustering and internal-linking layer.
- **`page-plan.md`**, one entry per page (~44 fixed pages, plus the case-study template and the 9 blog clusters): primary keyword, secondaries, AEO questions, internal links, priority, and schema. This is the per-page plan.
- **`gsc-insights.md`**, the Google Search Console reality check: what GM actually ranks for today, striking-distance quick wins, the existing-URL redirect map for the replatform, and technical flags. Read this alongside the page plan.
- **`keyword-universe.csv`**, every researched keyword with volume, KD, intent, target page, and role. The evidence base; import to a sheet if useful.

## Data sources and caveats

- **Ahrefs** (Lite plan) via the connected MCP. US only. Volumes are Ahrefs estimates; KD is the Ahrefs 0 to 100 difficulty score. ~16,400 of 100,000 monthly units used for this plan; resets 2026-07-08.
- **Google Search Console: used** (added 2026-06-28 via the GSC MCP, domain property, 90-day window). Full analysis in `gsc-insights.md`. Headline: 62% of GM's current organic impressions are brand, a deprecated platform (appnexus), or case-study collateral with no commercial value. The useful signal is a short list of striking-distance terms (impression tracking pos 8, mer vs roas pos 10, programmatic cpm trends pos 6) and the fact that this is a replatform of a live site, so existing URLs need a redirect map.
- **Competitors benchmarked:** StackAdapt and Basis Technologies gave rich gap data; Simpli.fi added the addressable and geofencing vein. **MNTN returned zero Ahrefs data** (likely a crawl or domain-mapping issue on Ahrefs' side), so it contributed nothing; CTV is already well covered by the other three.

## Strategic findings that shape the plan

1. **SEO is greenfield.** GM ranks for ~35 organic keywords (~345 visits/mo), all from old blog posts or the brand name. The money pages rank for nothing commercial. The rebrand content is the opportunity, not a recovery.
2. **GM can win low-difficulty terms now.** The existing blog ranks for KD 0 to 7 terms. The plan front-loads winnable mid-tail and definitional terms, then chases the hard heads (programmatic advertising KD30, native advertising KD65, cpm KD48) through cluster support, not head-on.
3. **The biggest, cheapest wins are definitional (AEO).** what is a dsp (5,400/KD14), what is ctv (3,000/KD9), programmatic advertising agency (3,000/KD1), retail media (2,300/KD6), geofencing marketing (1,800/KD4). The new Glossary, Guides, FAQ, and Comparisons pages are where GM should start. They match the architecture's AI-search intent directly.
4. **GM already owns "mer vs roas" (#1).** Build the Measurement hub around that asset. GSC confirms it plus impression tracking and programmatic cpm trends sit at pos 6 to 10, the fastest page-1 wins on the site.
5. **This is a replatform, not a new site.** GM's existing pages (/how-it-works/ pos 2.9, /the-dashboard/ pos 2.3, /pricing/, /faqs/, /verticals/*) already rank. The rebrand must 301-map old URLs to new ones or it drops positions. Redirect map is in `gsc-insights.md`.

## Two flags that need your call

1. **DOOH is missing from the sitemap.** Digital out-of-home is a large, low-difficulty cluster (dooh KD15, dooh advertising KD7) that StackAdapt and Basis both rank for. I added a recommended `/solutions/by-channel/dooh` page to the plan. Confirm whether to add it, or fold DOOH into the Display page as a section.
2. **"Omnichannel" and "solutions" are real keywords your brand guide bans.** omnichannel platform / omnichannel marketing platform (450 to 500/KD7 to 25) have demand, but the Voice and Tone guide treats both words as corporate slop. The plan's recommendation: you may place the literal term once in a title tag, meta description, or schema for capture, but keep visible body copy on-brand ("every channel", "cross-channel"). Tell me if you would rather not use the term at all, even in metadata.

## How to use this when writing

For each page, when you run the `gm-content` skill:
1. Pull the page's row from `page-plan.md`: primary keyword goes in the H1 and first 100 words (naturally), secondaries become H2s and body, AEO questions become the definition block and FAQ. For the AEO build (definition blocks, 40 to 60 word answers, comparison tables, stats with sources, and schema for AI citation), apply the `/ai-seo` skill.
2. Add the internal links listed for that page (up to its hub, across to related pillars, one Convert CTA), using keyword-aware anchor text that stays within brand voice.
3. Apply the page's schema from the plan.
4. Keep proof numbers real. Pull stats and named clients from `../gm-content-system/brand/facts.md` (populated 2026-06-30 from GM's case studies, with `case-study-proof.md` for per-client detail); honor the "Real name public?" column. Do not use the keyword volumes here as stats, and do not invent figures.

## Refresh

Re-pull volumes and KD quarterly, or sooner for the seasonal and political clusters. GSC is now connected; re-run the striking-distance pass monthly and again right after the replatform launch to confirm redirects held position. Next planned refresh: 2026-09.

## Open question for you

The plan assumes US-only and the 4-competitor benchmark set you chose. If you want Canada or UK volumes, or want me to gap-analyze additional competitors (The Trade Desk, Choozle, Viant), say so and I will extend it. Otherwise, pick a Wave 1 page and I will draft it through `gm-content`.
