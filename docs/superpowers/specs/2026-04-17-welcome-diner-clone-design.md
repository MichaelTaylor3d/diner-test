# Welcome Diner Visual Clone — Design Spec

**Date:** 2026-04-17
**Target source:** https://welcomediner.net/
**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS

## Goal

Rebuild welcomediner.net as a static Next.js site that visually matches the original: same page tree, same copy intent, same typography and color feel, same imagery. No CMS, no backend, no auth.

## Scope

**In scope**
- Static reproduction of all informational pages.
- Self-hosted images and fonts under `public/`.
- Clean route structure (see Route Map).
- Responsive layout (mobile-first).

**Out of scope**
- Online ordering (keep as external link to Google Food).
- Catering ordering (keep as external link to ezCater).
- Any CMS / admin UI.
- Automated tests.
- Analytics / SEO beyond defaults.

## Route Map

| Source path | New route |
|---|---|
| `/` (home) | `/` |
| `/menus` | `/menu` |
| `/all-day-menu` | `/menu/all-day` |
| `/brunch-1` | `/menu/brunch` |
| `/lunch` | `/menu/lunch` |
| `/dinner` | `/menu/dinner` |
| `/drinks` | `/menu/drinks` |
| `/kids` | `/menu/kids` |
| `/happy-hour-1` | `/menu/happy-hour` |
| `/locations` | `/locations` |
| `/our-story` | `/our-story` |
| `/mentions` | `/mentions` |
| `/opportunity` | `/opportunity` |
| `/purveyors` | `/purveyors` |
| `/sister-spots` | `/sister-spots` |
| `/order` | external link → Google Food |
| `/catering` | external link → ezCater |

## Architecture

- Next.js App Router, server components by default.
- No API routes. No client state beyond mobile nav toggle.
- All content hardcoded inline per page file.
- Shared chrome (`Header`, `Footer`) mounted in `src/app/layout.tsx`.

## File Layout

```
src/
  app/
    layout.tsx            # Header + Footer + fonts + global CSS
    page.tsx              # Home
    menu/
      page.tsx            # Menus index
      all-day/page.tsx
      brunch/page.tsx
      lunch/page.tsx
      dinner/page.tsx
      drinks/page.tsx
      kids/page.tsx
      happy-hour/page.tsx
    locations/page.tsx
    our-story/page.tsx
    mentions/page.tsx
    opportunity/page.tsx
    purveyors/page.tsx
    sister-spots/page.tsx
    globals.css
  components/
    Header.tsx
    MobileNav.tsx
    Footer.tsx
    Hero.tsx
    MenuSection.tsx
    MenuItem.tsx
    LocationCard.tsx
    PressCard.tsx
    SocialLinks.tsx
    ExternalButton.tsx
  data/
    images.ts             # logical name → /images/<file>
    nav.ts                # nav entries
public/
  images/                 # downloaded photos + logo
  fonts/                  # downloaded custom fonts (if not on Google Fonts)
```

## Component Contracts

- `Header` — logo left, desktop nav right; switches to `MobileNav` below `md`.
- `MobileNav` — client component; burger toggles overlay with nav links.
- `Footer` — follow-us heading, social icons, inquiry email link.
- `Hero` — full-bleed background image, overlay headline + optional CTA.
- `MenuSection` — heading + list of `MenuItem`.
- `MenuItem` — name, description, price (all optional except name).
- `LocationCard` — address, phone, hours-by-day, map link.
- `PressCard` — publication, quote snippet, source link.
- `SocialLinks` — Facebook + Instagram (lucide icons).
- `ExternalButton` — labeled anchor that opens in new tab with `rel="noopener"`.

## Asset Pipeline

1. Scrape each source page as HTML + markdown into `.firecrawl/pages/<slug>.{md,html}` (gitignored).
2. Parse HTML: collect `<img src>` + `background-image:url(...)` URLs.
3. Download all unique assets via curl/node to `public/images/<slug>-<n>.<ext>`.
4. Populate `src/data/images.ts` with logical-name → path map.
5. Inspect source CSS for `@font-face` rules; if faces match Google Fonts, wire via `next/font/google`; else download woff2 to `public/fonts/` + use `next/font/local`.
6. Extract palette from source CSS; encode in `tailwind.config.ts` theme + `globals.css` CSS vars.

## Styling

- Tailwind utility-first.
- Extend theme: brand color tokens, font-family tokens (display + body), typography scale.
- `globals.css` — CSS vars, base resets, body font binding.
- Breakpoints: default Tailwind (`sm` 640, `md` 768, `lg` 1024, `xl` 1280).
- Transitions: minimal — hero fade-in only.

## External Integrations

- **Order:** anchor → existing Google Food chooseprovider URL.
- **Catering:** anchor → existing ezCater URL (`/catering/pvt/welcome-diner-3`).
- **Social:** Facebook + Instagram existing URLs.
- **Email CTA:** `mailto:` link to existing inquiry address.

No keys, no API calls. `FIRECRAWL_API_KEY` used only at build-time/dev-time for scraping; never shipped to client.

## Error Handling

- Dead external link → treat as user-visible failure of third party; no fallback UI.
- Missing image asset → broken image acceptable during dev; must not ship with missing files (verify in build step).

## Verification

- Manual: visit every route in `npm run dev`, compare to source screenshots.
- `npm run build` → zero TS/lint errors.
- Lighthouse on `/` + `/menu/brunch`: accessibility ≥ 90, perf ≥ 85.

## Open questions

None at time of writing.
