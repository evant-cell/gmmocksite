# CLAUDE.md

Project-specific instructions for **GM Site Design**.

## What this is

A workspace for a **brand-new** Genius Monkey design. Not the production geniusmonkey.com deploy. The design system is built (2026-07-17) from the spec-sheet mockups in `design samples/` — component library + styleguide pages. Real pages are now landing: `/platform` and `/` (home) are built from content JSON out of `Rebrand Content/drafts/pages/json/`.

## Stack

- Astro 7 (static output), Node 22+
- **Tailwind CSS v4** via `@tailwindcss/vite`; design tokens live in `src/styles/global.css` under `@theme`
- Fonts (self-hosted via @fontsource-variable): **Bricolage Grotesque** (display/wordmark), **Unbounded** (uppercase labels/buttons — the `.gm-label` utility), **Outfit** (body)
- Palette (official, from `colors.json` in repo root): Primary Vivid Raspberry `#F7004E` / Black Hole `#020112` / White; Neutrals Ink `#10131A` / Slate `#5B6472` / Cloud `#F6F7FB`; Secondary Brand Blue `#3D5AFE` (token `cobalt`) / Brand Violet `#7C4DFF` (`violet`) / Brand Green `#52E0B6` (`mint`) — all Tailwind theme tokens, plus status tints
- Brand gradients as `bg-gradient-brand`, `bg-gradient-dark-purple`, `bg-gradient-dark-green`, `bg-gradient-dark-raspberry` (135deg, per colors.json)
- Type scale tokens `text-display`, `text-h1`..`text-h6`, `text-lead`, `text-body`, `text-caption` (size/line-height/weight baked in, per brand spec); keep body line length 50-75 chars, max two weights per layout
- Color balance guidance: ~60% neutrals, 30% primary, 10% accent per layout
- Content: Astro Content Collections via the `glob()` loader, reading JSON files (not Markdown)

## Design system (built from `design samples/`)

- `src/components/ui/` — atomic components: Button (5 variants x 3 sizes), IconButton, TextLink, Badge, Toggle, Avatar, Divider, Input, Textarea, Select, Checkbox, Radio, Alert, Toast, Tooltip, Modal, Icon (stroke icon pack), Logo (wordmark)
- `src/components/blocks/` — composed blocks: Navbar, Footer, Breadcrumbs, Section, SectionHeader, Hero, HeroMask, HeroTexture, HeroCollision, ContentCard, FeatureCard, TeamCard, Testimonial, FAQAccordion, ImageCaption, LogoCloud, StatBlock
- `src/components/styleguide/` — SpecShell/SpecSection/SpecRow chrome for the styleguide pages
- `src/pages/styleguide/index.astro` — design-system hub (moved off `/` when the real home page landed); `src/pages/styleguide/{brand,actions,forms,content,feedback,navigation,media}.astro` mirror the original spec sheets
- No em/en dashes or ellipsis anywhere in src (per the global bouncer rule); keep it that way

## Structure

| Path | Purpose |
|---|---|
| `src/content.config.ts` | Collection schema for a `pages` collection (`title`, `seoDescription`, `sections[]`), loaded from `src/content/pages/*.json`. Astro 7's Content Layer API config lives at `src/content.config.ts` — **not** `src/content/config.ts` (that's the legacy pre-v5 location). |
| `src/content/pages/` | One JSON file per page. Has `home.json` and `platform.json`, copied verbatim from `Rebrand Content/drafts/pages/json/` v2 drafts. |
| `src/pages/` | Routes. `index.astro` (home), `platform.astro`, `styleguide/` (design-system hub + spec sheets, noindex). |
| `src/components/` | The built design system: `ui/` atoms, `blocks/` composed sections, `styleguide/` chrome. |
| `src/layouts/` | `BaseLayout.astro` (head/meta/canonical/fonts). |
| `_components/` (root) | The **component-cloner** skill's capture library — raw cloned reference snippets from other sites. Not wired into the site. Distinct from `src/components/`, which would hold real, integrated Astro components. |
| `design/` | Moodboards, inspiration, palette/type exploration for the new design. |

## Content machine

The real GM content pipeline (brand voice, brand story, case studies, keyword plan, the anti-AI gate) is colocated in this repo at [`Rebrand Content/`](Rebrand Content/) — Evan copied it in from `~/Desktop/Rebrand Content/` on 2026-07-13, plus new content. It has its own `CLAUDE.md` and is the source of truth for real GM copy; use its `gm-content` / `gm-content-humanizer` / `gm-content-finisher` skills to produce or vet actual copy. The Desktop original still exists too — this is a second, independent copy, not a symlink, so edits don't sync automatically between them.

**Do not invent GM voice, stats, or claims in this project.** If a page needs copy, it comes from the content machine above, not from scratch.

## Prior art (reference only — not used by this project)

- `~/Downloads/Web & Code/geniusmonkey-hugo-schema/` — an earlier Hugo-based schema/scaffold for geniusmonkey.com. Superseded by this Astro build; `content-examples.md` and the best-practices PDF in there are still useful for page-structure ideas.
- `~/Downloads/Web & Code/` — assorted older landing-page HTML concepts and SEO tool exports, unrelated to this build.

## Deploy (when ready)

The Render MCP is connected. This is a static Astro build:
- Build command: `npm run build`
- Publish directory: `dist` (Astro's actual output dir — override Render's `public` default)
- Needs a pushed git remote first. Repo is git-initialized locally only right now — no remote, no commits.

## Skills likely relevant here

| Skill | When |
|---|---|
| `component-cloner` | Grabbing a UI element from a reference site into `_components/` |
| `ui-design:*`, `impeccable:*` | Building the actual new design system: palette, type, layout, critique, polish |
| `gm-content`, `gm-content-humanizer`, `gm-content-finisher` | Producing or vetting real copy |
| `em-dash-bouncer` | Before anything here ships, per the global no-em-dash rule |
| `ai-seo`, `seo-geo` | Once real SEO work starts on this site |
