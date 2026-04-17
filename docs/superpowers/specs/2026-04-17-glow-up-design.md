# Welcome Diner — Glow-Up Design Spec

**Date:** 2026-04-17
**Branch:** `glow-up`
**Goal:** Lift the visual clone into a warm-desert-lux experience — editorial, professional, and welcoming — with smooth motion throughout. Same charm, dramatically elevated execution.

## 1. Visual Language

### Palette tokens

| Token | Hex | Role |
|---|---|---|
| `--bg-ivory` | `#F7F1E6` | Primary page background |
| `--bg-deep` | `#1F1A17` | Alt sections, hero overlays, footer |
| `--ink` | `#231A14` | Body text |
| `--terracotta` | `#B5532E` | Primary accent (buttons, underlines, pull-quotes) |
| `--brass` | `#B99568` | Secondary metallic (hairlines, focus rings) |
| `--cream` | `#EFE4CF` | Soft surfaces, card backgrounds |
| `--desert-shadow` | `#8A6B5C` | Muted support text |

All tokens live in `globals.css` under `@theme`; referenced via Tailwind utility (`bg-bg-ivory`, `text-ink`, etc.).

### Typography

- **Display:** Cormorant Garamond (weights 400, 500, 600). Used for hero titles, page headings, pull-quotes.
- **Body:** Inter (weights 400, 500). Used for paragraphs, nav, captions.
- **Eyebrow:** Inter all-caps, tracking 0.35em, weight 500.
- Both loaded via `next/font/google`. Cormorant 600 preloaded on home.

### Motion principles

- Framer Motion for orchestrated sequences (`motion/react` v12+).
- Lenis smooth scroll globally via `<SmoothScroll>` client wrapper.
- Default ease: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Enter durations 600–900ms, stagger 60–80ms.
- No bouncy/jumpy motion — always slow and smooth.
- All motion gated by `useReducedMotion()`; reduces to plain opacity transitions when user prefers.

## 2. Page Redesigns

### Home
- Full-bleed hero image with Ken Burns zoom-out (30s loop).
- "Welcome Diner" title as Cormorant split-letter reveal, 80ms stagger.
- Below hero: horizontal scrolling strip with address, hours, `est. 2004` — parallax.
- Editorial triptych: Kitchen / Room / Neighborhood tall portrait cards.
- Signature dish section: large food image + pull-quote.
- "Join us" CTA band with brass button.

### Menus index
- Two-column magazine grid at `lg`, each menu = tall card with photo + serif title + accent underline.
- Hover: image scale 1.04, underline slides in.
- Click: crossfade + shared-element title transition into subpage.

### Menu subpages
- Eyebrow fade, then menu JPG slides up with soft drop-shadow.
- Click image → modal with pinch-zoom.
- "Back to menus" text link with arrow-slide hover.

### Locations
- Editorial split: left = tall hero photo, right = ruled heading + address + hours + map CTA.
- Ruled dividers draw in on scroll.
- Brass "Get Directions" button.

### Our Story
- Drop-cap first paragraph.
- Inline pull-quotes with terracotta left border.
- Parallax photos between paragraphs.
- Signature script italic at bottom.

### Mentions
- Three columns at `lg`, stacked at `sm`: Articles / Awards / Reviews.
- Ruled headings draw on scroll.
- Row hover: terracotta underline + small arrow reveal.

### Opportunity
- "Become a Homie" display hero.
- Role list as brass-outlined chips.
- Gold-button Email Us with ripple + copy-to-clipboard fallback + "Copied" toast.

### Purveyors
- Eyebrow + short paragraph + menu image.

### Sister Spots
- Two large cards side-by-side (Hai Noon, Hidden Gem) with photo + serif title + brass hairline + "Visit →" hover.

## 3. Component Library

### Atoms
- `BrassButton` — border + hover fill, `sm` / `lg`
- `Eyebrow` — tracked caps label
- `RuledHeading` — headline flanked by animated hairlines (upgrade existing with draw-in)
- `DisplayText` — Cormorant wrapper
- `DropCap` — wraps first character
- `Divider` — brass hairline, optional label
- `IconArrow` — SVG arrow with slide-on-hover

### Molecules
- `EditorialCard` — portrait image + eyebrow + title + body + CTA, hover lift
- `PullQuote` — italic serif, terracotta left border, optional attribution
- `SiteHeader` — sticky, condenses on scroll, underline slides under active link
- `SiteFooter` — richer: hours, address, social, newsletter eyebrow
- `HeroStage` — full-bleed media + overlay + content slot
- `ParallaxImage` — scroll-linked transform
- `RevealOnView` — generic entry fade/slide wrapper

### Page sections
- `HomeHero`, `EditorialTriptych`, `SignatureDish`, `JoinBand`
- `MenuCardGrid` (consumes menu meta array)

### Motion primitives
- `fadeUp` variant (opacity 0→1, y 24→0, 700ms)
- `kenBurns` (slow scale + translate loop)
- `letterReveal` (per-char/word stagger)
- `hairlineDraw` (scaleX 0→1 with origin configurable)
- `sharedLayout` for image crossfades between pages

## 4. Interaction Catalog

### Global
- Lenis smooth scroll duration ~1.2.
- Route transitions via App Router `template.tsx` + `AnimatePresence` crossfade + y-offset.
- Header condenses on scroll > 80px.

### Home hero
- Ken Burns zoom-out (30s) on loop.
- Title letter reveal, 900ms total.
- Address + hours fade in 300ms after title.
- Scroll-hint chevron pulses.

### Scroll-linked
- Sections fade/lift on entry via IntersectionObserver, threshold 0.2.
- Editorial images: ±40px parallax.
- Ruled headings: hairlines draw from center.
- Pull-quotes: text blurs in + left border extends down.

### Hover
- BrassButton: left→right fill, text flips ivory.
- Editorial cards: image scale 1.04, title lifts 4px, underline reveals.
- Nav links: brass underline scales from 0.

### Click
- Menu tile → shared-element title transition into subpage.
- External CTAs → brief brass flash before new tab.

### Forms / CTAs
- Email Us: ripple + clipboard fallback + toast.

### Reduced motion
- Replace all motion with plain opacity-only fades.

## 5. Assets

### Keep
- Menu JPGs (all menus + purveyors)
- Locations image
- Home hero image

### Curate (Unsplash editorial hotlinks)
- Kitchen (chef hands/plating)
- Room (booth/banquette detail, morning light)
- Neighborhood (Garfield street or desert light)
- Signature dish (plated, shallow DOF)
- Sister spots (stand-in: cocktail bar + intimate interior)
- Story (2–3 behind-scenes shots)

Pulled by `scripts/download-lux-images.mjs` to `public/images/lux/`. Each logged in `src/data/images.ts` with attribution metadata. Credits component in footer.

### Fonts
- Cormorant Garamond (replace Playfair)
- Inter (keep)
- Preload Cormorant 600

### Icons
- Lucide for functional (arrow, menu, x)
- Inline Facebook + Instagram SVGs stay
- Custom SVG for hairline motifs, `est. 2004` starburst

## 6. Performance + Accessibility

### Performance
- Server components default; motion wrappers client-only.
- Import Framer from `motion/react` for tree-shaking.
- Single Lenis instance in root layout.
- `next/image` with explicit `sizes`; `priority` only above-fold hero.
- Preload Cormorant 600.
- Target Lighthouse: perf ≥ 90, accessibility ≥ 95 on home + menu/brunch.

### Accessibility
- All motion respects `prefers-reduced-motion`; major sequences gated by `useReducedMotion()`.
- Focus ring = brass outline, visible on all interactive elements.
- Nav dropdown keyboard-accessible (open on focus, Escape closes).
- Contrast: body ink on ivory ≥ 7:1; accent colors restricted to text ≥ 14px.
- `alt` on every image; decorative motifs `aria-hidden`.
- Semantic landmarks (`<header>`, `<main>`, `<footer>`).

## 7. Verification Loop

- `scripts/compare.mjs` — existing live-vs-local screenshot diff, run after each section.
- `scripts/lux-smoke.mjs` — new Playwright smoke: visits every route, asserts key motion elements animate, dumps console errors.
- Manual pass at 3 viewports (375, 768, 1440).
- Reduced-motion pass: `await page.emulateMedia({reducedMotion: 'reduce'})` + screenshot comparison.
- Lint + `tsc --noEmit` + `next build` green required before each commit.

## 8. Out of Scope

- Real reservation system (keep existing external Order/Catering links)
- Real photography shoot (curated Unsplash is placeholder)
- Any backend, DB, CMS, or user auth
- Analytics, SEO beyond defaults
- Newsletter signup form (visual eyebrow only, no submission handler)
- i18n

## 9. Open Questions

None at time of writing.
