# SEO — Welcome Diner

Every SEO-related feature the codebase ships today, with file paths. Updated after the second-pass audit.

## 1. Canonical site identity

**File:** `src/data/site.ts`

Single source of truth — name, tagline, description, URL, address, hours, phone, geo, price range, cuisines, social profiles. Never copy-pasted. Change the domain or any public detail in one commit to one file.

## 2. Root-level metadata

**File:** `src/app/layout.tsx`

The `metadata` export (Next.js Metadata API) ships on every page:

- `metadataBase` — canonical origin. All relative URLs resolve against it.
- `title` + `title.template: "%s — Welcome Diner"` — per-page titles auto-suffix the brand.
- `description` — 160-char SERP snippet.
- `applicationName: "Welcome Diner"`, `category: "restaurant"` — semantic classification.
- `keywords` — twelve Phoenix-local and cuisine terms (Welcome Diner, Pierce Street Phoenix, fried green tomato sandwich, biscuits and gravy, late night food, brunch, Sonoran, Garfield Historic District, etc.).
- `authors`, `creator`, `publisher` — authored-by attribution.
- `formatDetection: { email:false, address:false, telephone:false }` — blocks iOS Safari from auto-wrapping phone/address/email in links, keeping our styled `address` and CTA intact.
- `alternates.canonical: "/"` — default; per-page overrides set the proper route.
- `openGraph` — `og:type`, `og:locale`, `og:url`, `og:site_name`, `og:title`, `og:description`, plus 1200×800 `og:image`.
- `twitter` — `summary_large_image` card with `site: "@welcomediner"`, creator handle, matching title/description/image.
- `robots` — `index: true, follow: true`, `nocache: false`, plus Googlebot extended hints (`max-image-preview: large`, `max-video-preview: -1`, `max-snippet: -1`, `noimageindex: false`).
- `icons` — `favicon.ico` for `icon`, `shortcut`, and `apple` slots.
- `manifest: "/site.webmanifest"` — registers the PWA descriptor.

`viewport` export: `themeColor: "#F7F1E6"`, `colorScheme: "light"`, `width: "device-width"`, `initialScale: 1`, `maximumScale: 5` (respects pinch-zoom for a11y).

## 3. Per-page metadata + OpenGraph

Every route file exports its own `metadata`:

| Route | Title | OG image |
|---|---|---|
| `/` | Welcome Diner — tagline | `/images/home.jpg` |
| `/menu` | Menus | `/images/brunch.jpg` |
| `/menu/{slug}` | slug title | (inherits home) |
| `/locations` | Locations | `/images/lux/room.jpg` |
| `/our-story` | Our Story | `/images/lux/story-space.jpg` |
| `/mentions` | Mentions | (inherits home) |
| `/opportunity` | Opportunity | `/images/lux/staff-portrait.jpg` |
| `/purveyors` | Purveyors | `/images/lux/purveyor-grain.jpg` |
| `/sister-spots` | Sister Spots | `/images/lux/hai-noon.jpg` |

Each page also sets `alternates.canonical` pointing at its own path, preventing duplicate-content penalties if query strings appear.

Menu subpage descriptions pull the chef note from `menuMeta` — no duplication.

## 4. Structured data (JSON-LD)

Three site-wide schemas injected on every page via `RootLayout`:

**File:** `src/components/seo/RestaurantSchema.tsx` — `@type: Restaurant`
- name, url, description, image, logo
- telephone, priceRange, `servesCuisine` (array)
- full `PostalAddress`
- `GeoCoordinates`
- `openingHours` in schema.org short format ("Su 09:00-21:00" for all 7 days)
- `sameAs` (Facebook, Instagram)
- `hasMenu → /menu`
- `acceptsReservations: false`

**File:** `src/components/seo/OrganizationSchema.tsx` — `@type: Organization`
- name, url, logo, sameAs
- `contactPoint` with phone, areaServed, language

**File:** `src/components/seo/WebSiteSchema.tsx` — `@type: WebSite`
- name, url, description, `inLanguage: "en-US"`, publisher
- Eligible for Google sitelinks search box.

**Per-page:** `src/components/seo/BreadcrumbSchema.tsx` — `@type: BreadcrumbList`
- Wired into every subpage (`/menu`, `/menu/*` via MenuImagePage, `/locations`, `/our-story`, `/mentions`, `/opportunity`, `/purveyors`, `/sister-spots`).
- Three-level hierarchy for menu subpages (Home > Menus > All Day).

Combined, these make the site eligible for: Local Pack, Knowledge Graph, rich hour/phone snippets, sitelinks search box, breadcrumb trails in SERP, and brand Knowledge Panel.

## 5. Crawl & indexing files

Everything generated at build time into `out/`:

| File | Source | Purpose |
|---|---|---|
| `out/sitemap.xml` | `src/app/sitemap.ts` | Full site index with priorities, change-frequency, and **image entries** per route |
| `out/robots.txt` | `src/app/robots.ts` | Allow all, point to sitemap |
| `out/site.webmanifest` | `public/site.webmanifest` | PWA descriptor (name, scope, icons, theme_color) |
| `out/browserconfig.xml` | `public/browserconfig.xml` | Windows 8/10 tile config |
| `out/humans.txt` | `public/humans.txt` | Team + purveyor credits, niche but positive signal |
| `out/.well-known/security.txt` | `public/.well-known/security.txt` | RFC 9116 responsible-disclosure contact |
| `out/favicon.ico` | `src/app/favicon.ico` | Icon |

The sitemap includes `<image:image>` entries for every route with a key image — home hero, menu thumbnails, room/street photos — so Google Image Search can discover them directly.

Both `sitemap.ts` and `robots.ts` declare `export const dynamic = "force-static"` (required by `output: "export"`).

## 6. Semantic HTML & accessibility

- `<html lang="en">`
- Semantic landmarks: `<header>`, `<main id="main-content">`, `<footer>`
- **Skip-to-main-content link** as first element of `<body>` (visible on focus).
- Exactly one `<h1>` per page, clear `<h2>`/`<h3>` hierarchy underneath.
- Descriptive `alt` on every `<Image>`. Menu subpage images include the chef note for context ("Welcome Diner brunch menu — Weekends only — eggs, biscuits, and a long second coffee.").
- `aria-label` on icon-only buttons (hamburger, nav toggle, copy-email).
- `aria-expanded` on the mobile nav toggle.
- Decorative motifs marked `aria-hidden`.
- `focus-visible:ring-brass` on all interactive elements.

A11y serves SEO directly — `alt` text is indexed as image context, landmarks and headings help search engines understand structure.

## 7. Performance levers

`output: "export"` → 16 pre-rendered HTML files uploaded to S3, delivered via CloudFront at the edge. No cold starts.

- HTTP/2 + HTTP/3 on CloudFront (`HttpVersion: "http2and3"` in `.aws/distribution.json`)
- `Compress: true` — gzip/brotli at the edge
- `next/image` with `fill` + explicit `sizes`; lazy by default below the fold; `priority` on hero and above-fold menu image
- `next/font/google` → self-hosted Cormorant Garamond + Inter, subsets trimmed to Latin, `display: swap`, `preload: true`. Next auto-injects `<link rel="preload">` into the document head.
- Tailwind JIT keeps CSS under 40 KB
- Framer Motion / Lenis are client-only, tree-shaken

Core Web Vitals target: LCP < 2.5s, CLS < 0.1, INP < 200ms. Lighthouse perf ≥ 90, a11y ≥ 95.

## 8. Social unfurls

- Root OG defaults to `/images/home.jpg` (1200×800).
- Every major subpage overrides with a page-appropriate image (see §3 table).
- Twitter card is `summary_large_image` everywhere, with `@welcomediner` site and creator handles.
- Slack / iMessage / WhatsApp / Facebook / LinkedIn all render the correct hero per URL.

## 9. What's intentionally NOT shipped

| Item | Why deferred |
|---|---|
| Custom domain + SSL | Site lives on `*.cloudfront.net`. Production deploy should map to `welcomediner.com` (ACM cert in `us-east-1`, alternate domain on distribution, Route53 alias). Ranking signals improve significantly on the owned domain. |
| Google Search Console verification | Needs owner Google account. Drop the verification string into `metadata.verification.google` when ready. |
| Bing Webmaster verification | Same. `metadata.verification.other` or meta tag. |
| Google Analytics / GA4 / Plausible | Not in scope; add a `<Script>` in `RootLayout` when requested. |
| Dedicated 1200×630 OG hero | Using existing 1200×800 hero; social platforms accept any size ≥ 600×315. Worth revisiting if we want CTA-overlay graphics. |
| Apple-touch-icon PNG (180×180) | Currently referencing `favicon.ico` as `apple`. Native `.png` touch icon recommended for iOS home-screen add. |
| Android 192/512 icons | Not shipped — `site.webmanifest` references favicon.ico. Needs raster assets. |
| `Menu` / `MenuItem` JSON-LD | Menus are rasterized JPGs; structured text would require retyping every item. |
| Review schema | We quote press but don't own review data; `aggregateRating` would need a real source. |
| hreflang / i18n | Single language. |
| Image sitemap for every route | Currently only key images per route; could enumerate the full triptych/ambient strip. |
| Video sitemap | No video. |
| AMP | Not justified for this site profile. |

## 10. Verify after a deploy

```bash
# Meta tags
curl -s https://do7edupb3refa.cloudfront.net/ | grep -E 'og:|twitter:|canonical|description' | head

# All three site-wide JSON-LD schemas
curl -s https://do7edupb3refa.cloudfront.net/ | grep -c '"@type":"Restaurant"'   # expect 1
curl -s https://do7edupb3refa.cloudfront.net/ | grep -c '"@type":"Organization"' # expect 1
curl -s https://do7edupb3refa.cloudfront.net/ | grep -c '"@type":"WebSite"'      # expect 1

# BreadcrumbList on a subpage
curl -s https://do7edupb3refa.cloudfront.net/menu/brunch/ | grep -c '"@type":"BreadcrumbList"'  # expect 1

# Meta files reachable
curl -sI https://do7edupb3refa.cloudfront.net/sitemap.xml            # 200
curl -sI https://do7edupb3refa.cloudfront.net/robots.txt             # 200
curl -sI https://do7edupb3refa.cloudfront.net/site.webmanifest       # 200
curl -sI https://do7edupb3refa.cloudfront.net/browserconfig.xml      # 200
curl -sI https://do7edupb3refa.cloudfront.net/humans.txt             # 200
curl -sI https://do7edupb3refa.cloudfront.net/.well-known/security.txt  # 200

# Validator tools:
# JSON-LD:  https://validator.schema.org/
# Rich:     https://search.google.com/test/rich-results
# OG:       https://opengraph.dev
# Twitter:  https://cards-dev.twitter.com
# Meta:     https://metatags.io/
```

## 11. First-deploy checklist (domain-launch day)

1. Point `welcomediner.com` at CloudFront via Route53 (alias A record).
2. Request ACM cert in `us-east-1` for `welcomediner.com` + `www.welcomediner.com`.
3. Attach cert to distribution; add both names to `Aliases`.
4. Update `siteMeta.url` in `src/data/site.ts` to the real domain.
5. Rebuild + redeploy (`bash scripts/deploy.sh`).
6. Register property in Google Search Console; submit `sitemap.xml`.
7. Submit to Bing Webmaster Tools.
8. Claim / update Google Business Profile; hours, address, phone already match the `Restaurant` schema on the site.
9. 301 any legacy Wix URLs to the new paths (done at DNS/gateway layer).
10. Test social unfurls on all platforms post-switchover.
