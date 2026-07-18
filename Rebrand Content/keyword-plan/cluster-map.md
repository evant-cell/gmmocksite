# GM Keyword Clusters and Interlinking Map

Topic clusters for the rebrand architecture, with hub-and-spoke interlinking. Source data: Ahrefs (US), pulled 2026-06-27. Volumes and KD are in `keyword-universe.csv`. This map drives internal linking and is the backbone for the per-page plan in `page-plan.md`.

## How the model works

- **Hub** = the money or pillar page that owns the topic. It targets the head term and links down to every spoke.
- **Spoke** = a supporting page (blog post, guide, glossary entry, comparison) that targets a long-tail or question variant and links back up to its hub.
- **Glossary** entries are spokes that serve AEO (definition extraction) and feed every pillar's on-page FAQ. A glossary entry links to its pillar; the pillar's definition block links to the glossary entry.
- **Every page** carries one contextual link to a Convert page (Request a Demo). Industry and channel pages also cross-link to the Platform pillar.
- **Anchor text**: use the spoke's target keyword as the anchor when linking up, varied naturally. Respect brand voice in anchors (no banned words; see the omnichannel note below).

## The 16 clusters

### 1. Programmatic Fundamentals
- **Hub**: Platform pillar (`/platform`) + Definitive Guide `what is programmatic advertising`
- **Heads**: programmatic advertising (7900/KD30), what is programmatic advertising (1900/KD31)
- **Spokes**: programmatic media buying, real time bidding, programmatic advertising examples (TP 11k), how does programmatic advertising work, automated media buying, cost/why/future questions
- **Links to**: DSP, all Channels, Measurement. This is the top of the site's topical tree; most clusters link back here.

### 2. DSP (Demand-Side Platform)
- **Hub**: Platform `/platform` (GM runs its own DSP) + Glossary `dsp`
- **Heads**: what is a dsp (5400/KD14, TP 5700), demand side platform (1600/KD39), dsp advertising (900/KD28)
- **Spokes**: programmatic dsp, dsp media buying, dsp ads, supply side platform, sell side platform, self service dsp, white label dsp, the many "what is dsp" variants
- **Links to**: Comparisons (best dsp), By Business (white-label/agency), Fundamentals

### 3. CTV / OTT / Video
- **Hub**: Solutions By Channel `/solutions/by-channel/ott-ctv` and `/video` + Glossary `ctv`, `ott`
- **Heads**: what is ctv (3000/KD9, TP 5900), ctv advertising (2100/KD17), ott advertising (1500/KD21), connected tv advertising (900/KD28), programmatic video advertising (400/KD3)
- **Spokes**: addressable tv, what does ctv stand for, ctv advertising cost, ctv strategy, programmatic video buying, video pre roll, ott vs ctv, what is linear content; plus the AEO question bank (how does ctv work, is ctv effective, etc.)
- **Links to**: relevant Industries (retail, automotive, political use CTV heavily), Measurement, Convert

### 4. Native Advertising
- **Hub**: Solutions By Channel `/solutions/by-channel/native`
- **Heads**: native advertising (7900/KD65), native ads (1600/KD46), what is native advertising (1400/KD49)
- **Spokes (winnable)**: native advertising examples (800/KD6), native ad examples, native ads vs display ads (KD7), benefits of native ads, native advertising advantages, native display advertising
- **Links to**: Display (native vs display comparison), Fundamentals

### 5. Display Advertising
- **Hub**: Solutions By Channel `/solutions/by-channel/display`
- **Heads**: programmatic display advertising (900/KD28), display advertising platforms (150/KD10)
- **Spokes**: display ad platforms, programmatic retargeting (KD0), programmatic guaranteed, dsp retargeting
- **Links to**: Native, DSP, Fundamentals

### 6. DOOH (Digital Out-of-Home)  [SITEMAP GAP, recommend adding]
- **Hub**: NEW Solutions By Channel `/solutions/by-channel/dooh`
- **Heads**: dooh (1900/KD15), dooh advertising (1100/KD7), digital out of home (900/KD7), digital out of home advertising (1100/KD16)
- **Spokes**: programmatic dooh, programmatic ooh, digital ooh advertising, digital out of home media, dooh advertising examples
- **Why**: a large, low-difficulty cluster all four competitors rank for and GM's By Channel list omits. Add it.

### 7. Audio Advertising
- **Hub**: Solutions By Channel `/solutions/by-channel/audio`
- **Heads**: programmatic audio advertising (450/KD4)
- **Spokes**: audio advertising, podcast advertising, streaming audio ads (price in a later pull)

### 8. Targeting, Data and Privacy
- **Hub**: Platform `/platform/behavioral-targeting` and `/platform/device-agnostic-targeting` + Blog cluster
- **Heads**: audience targeting (1600/KD64, hard), behavioral targeting (1200/KD9), first party data (1400/KD25), geofencing marketing (1800/KD4)
- **Spokes**: geofencing advertising, contextual advertising, cookieless advertising, addressable advertising/targeting/geofencing, cross device targeting, lookalike audiences, sequential retargeting, hyperlocal ads
- **Links to**: Privacy blog, CTV (addressable), all Industries (local/geofencing for home services, automotive)

### 9. Attribution and Measurement
- **Hub**: Platform `/platform/measurement-validation` + Blog cluster
- **Heads**: roas (12000/KD34), marketing attribution (2100/KD33), multi touch attribution (1000/KD22), cpm meaning (7800/KD48)
- **Spokes**: media mix modeling (KD12), incrementality testing, conversion tracking, ad viewability, impression tracking (GM ranks), mer marketing (GM ranks #1 for mer vs roas)
- **Links to**: Glossary (roas, cpm, mer, viewability), Fundamentals, Convert
- **Leverage**: GM already owns "mer vs roas" #1. Build the measurement hub around that win.

### 10. Ad Fraud and Brand Safety
- **Hub**: Blog cluster + a Platform brand-safety section
- **Heads**: click fraud (1200/KD45), ad fraud (450/KD12), brand safety (600/KD17)
- **Spokes**: brand safety digital advertising, invalid traffic, what is ad fraud
- **Links to**: Platform (Human Oversight, Measurement and Validation), Convert

### 11. Industries (10 micro-clusters)
- **Hub**: each `/industries/[vertical]` page
- **Pattern per page**: primary "[vertical] advertising" or "programmatic advertising for [vertical]"; secondary "[vertical] digital marketing", "[vertical] marketing agency"
- Automotive (800/KD12), Medical/healthcare (1800/KD33; healthcare digital marketing 2200/KD11), Finance (300/KD5), Legal (1200/KD5), Education (200/KD31), Political (400/KD44; strategies 200/KD7), Travel (300/KD2), Nonprofit (250/KD43), Home Services (250/KD4), Retail/Ecommerce (700/KD0; retail media 2300/KD6)
- **Links to**: the Channels each vertical uses (e.g., Automotive to CTV and DOOH; Legal to Display and Search; Retail to CTV, retail media, DOOH), Case Studies for that vertical, Convert

### 12. Solutions By Business
- **Hub**: each `/solutions/by-business/[type]` page
- Agency: programmatic advertising agency (3000/KD1, top commercial win), white label dsp, self service dsp
- Business: programmatic advertising company (400/KD6)
- Enterprise: enterprise advertising platform (100), enterprise programmatic
- Ecommerce: programmatic advertising for ecommerce, retail media
- **Links to**: Platform, DSP, relevant Channels, Case Studies, Convert

### 13. Comparisons / Alternatives  [NEW page type, high commercial intent]
- **Hub**: Resources `/resources/comparisons`
- best dsp (300/KD0), best demand side platform (200/KD4), best programmatic advertising platforms, dsp comparison, the trade desk alternative, [competitor] alternative pages, native ads vs display ads, ott vs ctv
- **Links to**: Platform, DSP, the channel pages being compared, Convert (highest-intent cluster, link hard to demo)

### 14. Glossary / Definitions  [NEW, AEO, DefinedTermSet]
- **Hub**: Resources `/glossary`
- Entries: DSP, SSP, CTV, OTT, RTB, CPM, CPA, ROAS, MER, programmatic, attribution, viewability, brand safety, ad fraud, DOOH, first-party data, lookalike, contextual, addressable, programmatic guaranteed, bid shading
- **Each entry**: 40 to 60 word extractable definition (AEO), links to its pillar; pillar definition blocks link back here.

### 15. AI in Advertising  [emerging]
- **Hub**: Blog Industry Trends + optional guide
- ai in advertising (1700/KD58), ai advertising (3200/KD56), ai ad targeting (200/KD0), generative ai in advertising (200/KD19)
- **Why**: matches GM's positioning ("we set the pace"), but heads are hard; win the long-tail first. Links to Platform (AI optimization), Real-Time Optimization.

### 16. Seasonal and Holiday  [blog]
- holiday marketing (700/KD5), biggest retail holidays (GM ranks), most profitable holidays, holiday marketing tips
- **Links to**: Retail/Ecommerce industry, CTV, Convert. GM already has assets here; refresh and interlink.

## Cross-cluster linking rules (the interlinking layer)

1. **Up and down the tree**: every spoke links to its hub; every hub links to all its spokes. No orphan spokes.
2. **Pillar to pillar**: Platform links to Solutions (channels) and to Measurement and Targeting feature pages. Solutions channel pages link to Platform and to the Industries that use them.
3. **Industry to channel**: each Industry page links to the 2 to 3 channels that vertical leans on, plus its Case Studies and one Convert CTA.
4. **Glossary is the connective tissue**: jargon on any page links to its glossary entry; each glossary entry links to the pillar that sells that capability.
5. **Comparisons and Convert**: comparison pages carry the strongest demo CTAs (highest commercial intent).
6. **Blog to money page**: every blog post links up to the relevant pillar or solution page with keyword-aware anchor text, and to the guide for its cluster.
7. **Case Studies**: each links to its vertical's Industry page and the channels used, closing the loop from proof to offer.

## Two flags that affect interlinking and targeting

- **DOOH is missing from the sitemap.** It is a real, low-difficulty cluster (dooh KD15, dooh advertising KD7) that StackAdapt and Basis both rank for. Recommend adding `/solutions/by-channel/dooh`. Until then, fold DOOH terms into the Display page as a section.
- **"Omnichannel" brand tension.** "omnichannel platform/marketing platform" (450 to 500/KD7 to 25) is a real keyword, but the GM Voice and Tone guide bans "omnichannel" as corporate slop. Recommendation: you may use "omnichannel" once in the title tag, meta description, or an H2 and in schema for capture, but keep body copy on-brand with "every channel" or "cross-channel." Same logic for "solutions." Net: do not let SEO drag the visible voice off-brand; metadata can carry the literal term.
