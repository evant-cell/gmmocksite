# GSC Layer: GM Search Console Reality Check

Real first-party data from Google Search Console (domain property `sc-domain:geniusmonkey.com`), 90 days (2026-03-27 to 2026-06-25), dataState final. This layers on top of the Ahrefs plan. Where GSC and Ahrefs disagree, GSC wins for "what GM actually ranks for today."

## The honest headline: most current impressions have no commercial value

90-day impressions break down as:

| Bucket | Impressions | Share |
|---|---|---|
| Branded (genius monkey and variants) | 2,946 | 28% |
| AppNexus / Xandr (a deprecated platform GM blogged about) | 2,611 | 25% |
| Ashley Furniture / demographics (case-study collateral) | 956 | 9% |
| Everything else (the actual opportunity) | 3,830 | 38% |

A quarter of GM's organic visibility is for "appnexus", a platform Microsoft retired. People searching it want Xandr or Microsoft, not a programmatic partner. GM ranks pos 8 to 11 for ~14 appnexus variants with near-zero CTR. This is vanity volume. The greenfield-commercial thesis from the Ahrefs plan is confirmed with first-party data: GM's money pages rank on brand only, and the non-brand footprint is mostly off-target blog and case-study collateral.

## Striking-distance quick wins (on-architecture, already pos 4 to 20)

These are the real, fast opportunities: GM already appears near page 1 for terms that map to the new architecture. Push them with the rewritten page plus internal links.

| Query | Impr (90d) | Avg pos | Target page in the plan | Action |
|---|---|---|---|---|
| impression tracking | 269 | 8.0 | /platform/measurement-validation | Already KD0 in Ahrefs and pos 8 here. Make it a named section, push to page 1. |
| ad impression tracking | 160 | 10.0 | /platform/measurement-validation | Same cluster, secondary heading. |
| mer vs roas | 326 | 10.4 | /platform/measurement-validation + /glossary | GM owns this conceptually. Refresh the post, link to the measurement hub. |
| 2025 programmatic advertising trends | 175 | 9.7 | blog: Industry Trends | Annual refresh, update to current year, link up to /platform. |
| programmatic cpm trends | 156 | 6.0 | /glossary/cpm + Measurement | Pos 6 already. One internal link push likely lands page 1. |
| advertising multimedia / and multimedia | 172 | 8.6 | blog (existing multimedia post) | Existing asset at pos 2 to 9; interlink to channels. |
| agnostic device | 38 | 13.3 | /platform/device-agnostic-targeting | Confirms the page concept has live demand. |
| "digital ad optimization" | 32 | 13.2 | /platform/real-time-optimization | Supports the optimization feature page. |
| programmatic attribution platform / service | ~20 | 15 to 28 | /platform + /platform/measurement-validation | New nuance: GM shows for "attribution platform" intent. Add as a secondary commercial target. |

Total useful striking-distance impressions: ~1,300/mo. Small, but these are the terms where one rewrite plus interlink converts an existing pos-8 listing into a page-1 click, faster than net-new pages rank.

## Money pages already rank (mostly on brand)

| Existing page | Impr | Avg pos | Note |
|---|---|---|---|
| /how-it-works/ | 3,634 | 2.9 | Ranks page 1, almost entirely brand. Strong URL to preserve. |
| /the-dashboard/ | 2,507 | 2.3 | Page 1, brand. Preserve. |
| /pricing/ | 3,012 | 2.85 | Page 1. Preserve. |
| /our-platform/ | 1,133 | 4.8 | Brand-only. Commercial terms ("programmatic attribution platform") sit at pos 15 to 40. This is the rewrite opportunity. |
| /faqs/ | 4,195 | 7.9 | An FAQ page already pulls impressions. Validates the FAQ Hub plan directly. |
| /programmatic-digital-advertising-behavior-targeting/ | 729 | 10.2 | Existing behavioral-targeting page at striking distance. Maps to /platform/behavioral-targeting. |

First-party confirmation: when filtered to /our-platform/, 95%+ of impressions are "genius monkey" brand queries. Commercial programmatic terms appear only at pos 15 to 42. The commercial pages have to be built, not recovered.

## This is a replatform, not a new site. Map URLs and redirect.

GM already has a live, partly-ranking site. The rebrand architecture must 301-map the old URLs to the new ones or it will drop existing positions. Proposed mapping:

| Existing URL | New architecture URL | Why it matters |
|---|---|---|
| /our-platform/ | /platform | pos 4.8, brand equity |
| /how-it-works/ | /platform/how-it-works | pos 2.9, preserve |
| /the-dashboard/ | /platform/the-dashboard | pos 2.3, preserve |
| /pricing/ | /pricing | pos 2.85 |
| /faqs/ | /resources/faq | pos 7.9, 4,195 impr |
| /programmatic-digital-advertising-behavior-targeting/ | /platform/behavioral-targeting | pos 10.2 striking distance |
| /verticals/ and /verticals/* (e.g. sports-ticket-event-sales, luxury) | /industries and /industries/* | GM already has a verticals tree; map to Industries |
| /programmatic-case-studies/ and /* | keep as is (Results / Case Studies) | already good URLs and ranking |
| /specsheet/ and /specsheet/* | /resources/spec-sheets | spec sheets pull impressions |
| /about/, /careers/, /contact/ | keep (Company) | already pos 3 to 6 |
| /blog/* | keep /blog/* | refresh key posts (below), do not move |

Rule: any existing URL with impressions gets a 301 to its new home. Do not silently drop /how-it-works/, /the-dashboard/, /pricing/, or /faqs/.

## Technical flags (the architecture's "Crawl and AI Access" panel)

1. **Sitemap reports 590 submitted, 0 indexed.** Pages clearly are indexed (they get impressions), so this is most likely the known GSC sitemaps-report quirk on a domain property, but with a replatform coming it is worth a real index-coverage check before and after launch. The architecture's new sitemap index should replace the flat 590-URL sitemap.
2. **Two sitemaps submitted**, non-www (2026) and www (last submitted 2020, 2 warnings). Consolidate to one canonical sitemap at the canonical host post-rebrand.
3. **AppNexus authority is a stranded asset.** GM holds pos 8 to 11 and ~2,600 impr/mo on appnexus and xandr terms. Repurpose that blog post's internal links to point at the new DSP and SSP glossary entries and the Platform page, funneling the topical authority somewhere commercial instead of letting it sit on a dead-platform query.

## What this changes in the plan

- **Move the Measurement hub up.** impression tracking, ad impression tracking, mer vs roas, and programmatic cpm trends are all live at pos 6 to 10. That is the single fastest page-1 win on the site. Build /platform/measurement-validation and the glossary CPM and ROAS entries in Wave 1.
- **Keep the FAQ Hub in Wave 1.** The existing /faqs/ already earns 4,195 impr; the new FAQPage build inherits a proven slot.
- **Add a redirect map task** to the rebrand launch checklist (above). This is not optional for a replatform.
- The rest of the Ahrefs plan stands: the commercial and definitional pages are net-new builds, confirmed by GSC showing GM ranks nowhere commercial today.
