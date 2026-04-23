# SEO — Welcome Diner

Summary of every SEO-related feature the codebase ships today, with file paths so the next pass can verify or extend.

## 1. Canonical site identity

**File:** `src/data/site.ts`

Single source of truth for everything a crawler reads. Anything that can drift between pages (name, tagline, description, URL, address, hours, phone, geo, price range, cuisines, social profiles) lives here and is imported — never copy-pasted.

Changing the site's public name or domain is one commit to one file.

## 2. Root-level metadata

**File:** `src/app/layout.tsx`

`metadata` export (Next.js Metadata API) ships the following on every page:

- `metadataBase` — canonical origin. All relative URLs resolve against it.
- `title` with `template: "%s — Welcome Diner"` — per-page titles auto-suffix the brand.
- `description` — the 160-char sell for SERP snippets.
- `keywords` — modest list of Phoenix-local and cuisine terms.
- `authors`, `creator`, `publisher` — attribution.
- `openGraph` — `og:type`, `og:locale`, `og:url`, `og:site_name`, `og:title`, `og:description`, and a 1200×800 `og:image` (`/images/home.jpg`) for Facebook, LinkedIn, Slack, iMessage unfurls.
- `twitter` — `summary_large_image` card with matching title/description/image.
- `robots` — explicit `index: true, follow: true` plus Googlebot extended hints (`max-image-preview: large`, `max-snippet: -1`).
- `alternates.canonical` — `/` on the root; per-page overrides below.
- `icons.icon` — favicon.

`viewport` export ships theme-color (`#F7F1E6` ivory) and responsive viewport meta.

## 3. Per-page metadata

Every route file exports its own `metadata` object with a page-specific title (merged into the template), a unique description, and a canonical:

- `src/app/menu/page.tsx` — "Menus"
- `src/app/menu/{all-day,brunch,lunch,dinner,drinks,kids,happy-hour}/page.tsx` — menu title + chef-note as description (pulled from `menuMeta`)
- `src/app/locations/page.tsx` — "Locations"
- `src/app/mentions/page.tsx` — "Mentions"
- `src/app/opportunity/page.tsx` — "Opportunity"
- `src/app/our-story/page.tsx` — "Our Story"
- `src/app/purveyors/page.tsx` — "Purveyors"
- `src/app/sister-spots/page.tsx` — "Sister Spots"

Home page inherits the root default (`Welcome Diner — <tagline>`). Each page emits its own `<link rel="canonical">` preventing duplicate-content penalties if query strings appear.

## 4. Structured data (JSON-LD)

**File:** `src/components/seo/RestaurantSchema.tsx`

Injected into `<body>` on every page via `RootLayout`. Renders a `Restaurant` schema.org entity with:

- `name`, `url`, `description`, `image`, `logo`
- `telephone`, `priceRange`, `servesCuisine`
- `PostalAddress` (street/city/state/ZIP/country)
- `GeoCoordinates` (lat/long of 929 E Pierce St)
- `openingHours` in schema.org short format ("Su 09:00-21:00" etc.) for all 7 days
- `sameAs` (Facebook, Instagram)
- `hasMenu` pointing to `/menu`
- `acceptsReservations: false`

Eligible for Google's Local Pack, Knowledge Graph, hours/phone call-outs in SERP.

**File:** `src/components/seo/BreadcrumbSchema.tsx`

Available for any deep page that wants `BreadcrumbList` structured data. Not yet wired into each subpage — drop in with a 1-line `<BreadcrumbSchema crumbs={[...]} />` if breadcrumb rich-results become a priority.

## 5. Crawl & indexing

**File:** `src/app/sitemap.ts` → `out/sitemap.xml`

Lists every one of the 16 static routes with:
- Home `priority: 1.0`, `weekly` change frequency
- Menu pages `priority: 0.8`, `monthly`
- Other routes `priority: 0.6`, `monthly`

`lastModified` set at build time so bots re-crawl after each deploy.

**File:** `src/app/robots.ts` → `out/robots.txt`

Allows all user agents and points to the sitemap URL. Generated in the same build step; no hand-written text file to drift.

Both files require `export const dynamic = "force-static"` since the project ships with `output: "export"` — Next refuses to handle these routes otherwise.

## 6. Semantic HTML & accessibility

- `<html lang="en">` in root layout
- Semantic landmarks: `<header>`, `<main>`, `<footer>` (see `src/app/layout.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`)
- One `<h1>` per page, subsequent `<h2>`/`<h3>` hierarchy in sections
- Descriptive `alt` text on every `<Image>`; decorative motifs use `aria-hidden`
- `aria-label` on icon-only buttons (hamburger, nav toggle)
- Focus-visible rings (`focus-visible:ring-brass`) on interactive elements

Accessibility serves SEO directly — `alt` text is indexed as image context, landmarks help search engines understand page structure.

## 7. Performance levers

`output: "export"` → 16 pre-rendered HTML files uploaded to S3, delivered via CloudFront at the edge. No cold starts, no server latency.

- HTTP/2 + HTTP/3 on CloudFront (`HttpVersion: "http2and3"` in `.aws/distribution.json`)
- `Compress: true` — gzip/brotli at the edge
- `next/image` w/ `fill` + `sizes` per component; lazy by default below the fold, `priority` on hero
- Font loading via `next/font/google` (self-hosted, `display: swap`, subsets trimmed to Latin)
- Tailwind JIT keeps CSS bundle under 40 KB
- Framer Motion / Lenis are client-only, tree-shaken, lazy-evaluated

Lighthouse budget target: perf ≥ 90, accessibility ≥ 95 on home + menu/brunch. Re-measure after any hero-image swap.

## 8. Social unfurls

The OG image is currently `/images/home.jpg` (1200×800). Any link pasted into Slack, iMessage, WhatsApp, Facebook, or LinkedIn renders the hero with the site name + description. Per-page OG images can be added by extending each page's `metadata.openGraph.images` array — currently they inherit the home hero.

## 9. What's intentionally NOT shipped (yet)

| Item | Why it's deferred |
|---|---|
| Google Search Console verification | Needs owner's Google account; drop the `verification.google` string into root metadata when ready. |
| Bing Webmaster verification | Same as above; `metadata.verification.other` or meta tag. |
| Google Analytics / GA4 / Plausible | Out of original scope; add a `<Script>` in `RootLayout` when requested. |
| Custom domain + SSL | Site lives on `*.cloudfront.net`. Production deploys should map to `welcomediner.com` (ACM cert in `us-east-1`, alternate domain on the CloudFront distribution, Route53 alias). Ranking signals weaken on third-party domains. |
| Per-page OG images | All pages use the home hero. Menu/locations/etc. could have their own 1200×630 social cards. |
| `BreadcrumbList` injection per page | Component exists (`BreadcrumbSchema`), not yet wired into each subpage. |
| `Menu` / `MenuItem` JSON-LD | Menus are rasterized JPG images; without structured text no item-level schema is possible. Would require re-typing every menu into code. |
| Review schema | We quote press but don't own the reviews. `aggregateRating` would need a real review source. |
| hreflang / i18n | Single language. |
| Image sitemap / video sitemap | No video; Unsplash imagery is stock, not uniquely ours. |
| AMP | Not worth the effort for this site profile. |

## 10. How to verify after a deploy

```bash
# Meta tags in raw HTML
curl -s https://do7edupb3refa.cloudfront.net/ | grep -E 'og:|twitter:|canonical|description' | head

# Structured data present
curl -s https://do7edupb3refa.cloudfront.net/ | grep -c '"@type":"Restaurant"'   # expect 1

# Sitemap + robots reachable
curl -sI https://do7edupb3refa.cloudfront.net/sitemap.xml   # 200 OK
curl -sI https://do7edupb3refa.cloudfront.net/robots.txt    # 200 OK

# Validate JSON-LD: https://validator.schema.org/
# Test rich results:      https://search.google.com/test/rich-results
# Preview social cards:   https://opengraph.dev, https://cards-dev.twitter.com
```

## 11. First-deploy checklist (for the domain-launch day)

1. Point `welcomediner.com` at CloudFront via Route53 (alias A record).
2. Request ACM cert in `us-east-1` for `welcomediner.com` + `www.welcomediner.com`.
3. Attach cert to distribution, add both names to `Aliases`.
4. Update `siteMeta.url` in `src/data/site.ts` to the real domain.
5. Rebuild + redeploy (`bash scripts/deploy.sh`).
6. Register the property in Google Search Console, submit `sitemap.xml`.
7. Submit to Bing Webmaster Tools.
8. Add the business to Google Business Profile; hours + address will already match the schema.org `Restaurant` on the site.
9. 301 any legacy Wix URLs to the new paths (handled at DNS/gateway layer, not Next).
