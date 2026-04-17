# Welcome Diner — Lux Pass 2 Design Spec

**Date:** 2026-04-17
**Branch:** `glow-up`
**Goal:** Second-wave polish on top of lux base. Fix redundant CTAs, elevate weak pages (Purveyors, Menu subpages, Opportunity), deepen home, unify typography, add motion polish. "100x more impressive" threshold via editorial depth, not just surface gloss.

## 1. Scope

### 1.1 Kill/contextualize pre-footer CTA
Currently every page ends with the identical `Save a seat for Sunday brunch.` block before the footer. It reads as repetition.

- Remove from: Menu subpages, Locations, Our Story, Mentions, Opportunity, Purveyors, Sister Spots.
- Keep on Home (variant: `Come eat with us` already exists — consolidate to single CTA).
- Keep on Menu index (existing "Save a seat" variant — merge into footer pre-band).
- Footer itself still carries hours + address; CTA lives in page content where contextually right.

### 1.2 Home hero overhaul
- Swap hero image to wider crop (candidate: Garfield exterior or warm kitchen plate) if current booth image crop is fighting the title.
- Cormorant title bumped to `clamp(4rem, 12vw, 12rem)` with looser `tracking-[0.18em]`, letter-reveal intact.
- Add subtle radial vignette overlay under title for contrast (already have 0.55 black overlay — layer a second radial 0→0.35 behind text).
- Scroll-indicator chevron bottom-center with 2s pulse loop, gated on reduced-motion.

### 1.3 Home body expansion
Insert between `EditorialTriptych` and `SignatureDish`:
- **Press logos strip** — 5–6 grayscale publication wordmarks (`AZCentral`, `Phoenix New Times`, `Thrillist`, `Food Network`, `Chowhound`, `Phoenix Magazine`). Centered row, desaturated; link to `/mentions`. Eyebrow `AS SEEN IN`. Hover: color.
  - Wordmarks as SVG or Cormorant-set text (typeset, not fetched).

After `SignatureDish` (inside deep band):
- **Neighborhood teaser** — split: left editorial image (Garfield streetscape), right pull-text "Fifteen years on the corner of 10th + Pierce. Come say hello." with link to `/locations`. Full-width inside the deep band.

### 1.4 Menu index elevation
- Lead with **editorial hero row**: eyebrow + `A kitchen for every hour.` display H1 (keep), **plus** a short serif subhead paragraph ("From first pour at 9am to the last late-night biscuit.") and a brass hairline below.
- Card title typography: `DisplayText size="lg"` → Cormorant 4xl/5xl.
- Card `EXPLORE →` → brass button variant on hover.
- Remove pre-footer CTA — menu cards themselves are the CTAs.

### 1.5 Menu subpage framing
Each `/menu/[slug]` gains:
- **Chef note** sidebar/block: one short paragraph per menu (static data), italic Cormorant, terracotta left border.
- **Prev/next nav** at bottom: brass hairline + `← Brunch` / `Lunch →` links wrapping menu order.
- Remove pre-footer CTA.

Sample chef notes (brief, written for this spec):
- `all-day`: "Served from open to close. Built for regulars."
- `brunch`: "Weekends only — eggs, biscuits, and a long second coffee."
- `lunch`: "Fast but never rushed. Served until three."
- `dinner`: "The full kitchen, after the sun drops."
- `drinks`: "A short list, done right."
- `kids`: "For smaller guests, same care."
- `happy-hour`: "Weekdays 3–6. Bring a coworker."

### 1.6 Opportunity fill
Between `Email Us` button and footer, add:
- **Staff image** (Unsplash editorial, chef/team shot).
- **Staffer quote** — short italic Cormorant pullquote, attribution "— Marley, line cook, 3 years".
- Trim pre-footer CTA.

### 1.7 Locations expansion
Below existing editorial split, add:
- **Ambient strip** — 3 square tiles (coffee pour / banquette / exterior sign), no captions, parallax drift.
- **Transit note**: small `Street parking on Pierce. Light rail at 12th + Washington, 8 min walk.`
- Kill pre-footer CTA.

### 1.8 Mentions polish
- **Publication wordmarks row** at top, same 5–6 as home press strip (DRY via shared `PressStrip` component).
- **Featured quote** below row: largest headline pullquote `"Arizona's retro gem in the heart of downtown Phoenix." — Islands.com`.
- Keep existing 3-section list below.
- Kill pre-footer CTA.

### 1.9 Purveyors rebuild
Current: nearly empty. New:
- Editorial intro (existing eyebrow + `Sourced with integrity.`).
- **Purveyor grid** — 6 cards, 3 cols at `lg`, 2 at `md`, 1 at `sm`:
  - Hayden Flour Mills — `Heritage grains from Queen Creek.`
  - Schreiner's Fine Sausage — `Phoenix sausage since 1955.`
  - Noble Bread — `Artisan sourdough, baked daily.`
  - McClendon's Select — `Family-run organic produce.`
  - Hickman's Family Farms — `Arizona eggs since 1944.`
  - Crooked Sky Farms — `Regenerative farming in the valley.`
- Each card: portrait image + eyebrow + bold name + 1-line blurb. Hover: image scale 1.03.
- Use Unsplash food/farm editorial images (add 6 entries to `data/images.ts` + `data/unsplash.ts`).
- Retain existing purveyor medallion at bottom as "and more".
- Kill pre-footer CTA.

### 1.10 Sister Spots tightening
- Expand card copy to 2 sentences each.
- Add "Visit →" brass button at card bottom.
- Add **third stub card** for "Follow the family →" linking to a future sibling concept, or keep at 2 with wider grid.
- Kill pre-footer CTA.

### 1.11 Typography + motion polish
- `PullQuote` attribution: `text-brass text-xs tracking-[0.3em]` with extra top margin.
- Eyebrow: `Inter weight 500 tracking-[0.4em]` consistent across pages.
- `HomeHero` title: add `text-shadow` CSS for legibility.
- `EditorialTriptych` images: wrap in `ParallaxImage` (already exists).
- `SignatureDish` image: wrap in `ParallaxImage` strength 20.
- Scroll-indicator chevron on Home hero, pulses 2s loop.

## 2. Components

### New
- `PressStrip` — molecule, row of 5–6 wordmarks, eyebrow above, shared by Home + Mentions.
- `NeighborhoodTeaser` — section, split image+text inside deep band.
- `ChefNote` — atom, italic pullquote-lite, for Menu subpages.
- `MenuPagination` — molecule, prev/next nav for menu subpages.
- `AmbientStrip` — molecule, 3-square photo row with parallax.
- `PurveyorCard` — molecule, portrait image + eyebrow + name + blurb.
- `PurveyorGrid` — section, 6-card grid.
- `StaffQuote` — molecule, photo + pullquote + attribution (Opportunity).
- `ScrollIndicator` — atom, chevron with pulse, gated on reduced-motion.

### Modified
- `JoinBand` — consolidate `Come eat with us` + `Save a seat`, render only on Home + Menu index.
- `HomeHero` — bigger Cormorant title, add scroll indicator, vignette overlay.
- `PullQuote` — attribution typography fix.
- `EditorialTriptych` — wrap images in ParallaxImage.
- `SignatureDish` — wrap image in ParallaxImage.
- `Footer` — remove pre-footer `Save a seat` block (now per-page opt-in via `JoinBand`).
- All pages except Home/Menu index — drop `JoinBand` import.

## 3. Data

### Images (add to `data/images.ts` + `data/unsplash.ts`)
- `neighborhoodStreet` — Garfield streetscape / desert light
- `ambientCoffee` — pour / steam detail
- `ambientBanquette` — booth closeup
- `ambientSign` — vintage diner sign / exterior
- `staffPortrait` — chef or line-cook portrait
- `purveyorGrain`, `purveyorSausage`, `purveyorBread`, `purveyorProduce`, `purveyorEggs`, `purveyorFarm` — 6 purveyor editorial shots

Downloader: extend `scripts/download-lux-images.mjs` or new `scripts/download-lux-2.mjs`.

## 4. Verification

- `scripts/lux-audit.mjs` rerun after each batch.
- Per-page Read of desktop + mobile screenshot after changes.
- `next build` clean.
- `eslint` + `tsc --noEmit` green.
- `scripts/lux-smoke.mjs` still green.
- `scripts/reduced-motion-shots.mjs` still green.

## 5. Out of Scope
- Real publication logo assets (use Cormorant-set wordmarks).
- Chef portraits as real hires (Unsplash stand-in).
- Real purveyor photos (Unsplash stand-in, credited).
- Reservation form, newsletter form, map embed.
- SEO/analytics.

## 6. Open Questions
None.
