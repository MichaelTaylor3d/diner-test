# Welcome Diner Visual Clone — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild welcomediner.net as a static Next.js site that visually matches the original, with clean routes, self-hosted assets, and no backend.

**Architecture:** Next.js 16 App Router, all-static server components, hardcoded inline content per page, shared chrome in root layout. Tailwind CSS v4 with CSS-first theming in `globals.css`. External "Order" and "Catering" actions remain as outbound links.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`), `lucide-react` icons, `next/font`, Firecrawl CLI (scraping only).

**Spec:** `docs/superpowers/specs/2026-04-17-welcome-diner-clone-design.md`

---

## File Structure

**Created in this plan:**
- `src/components/Header.tsx`, `MobileNav.tsx`, `Footer.tsx`
- `src/components/SocialLinks.tsx`, `ExternalButton.tsx`
- `src/components/Hero.tsx`, `MenuSection.tsx`, `MenuItem.tsx`, `LocationCard.tsx`, `PressCard.tsx`
- `src/data/nav.ts`, `src/data/images.ts`, `src/data/externalLinks.ts`
- `src/app/menu/page.tsx` and children: `all-day`, `brunch`, `lunch`, `dinner`, `drinks`, `kids`, `happy-hour`
- `src/app/locations/page.tsx`, `our-story/page.tsx`, `mentions/page.tsx`, `opportunity/page.tsx`, `purveyors/page.tsx`, `sister-spots/page.tsx`
- `public/images/*`, `public/fonts/*` (populated by scrape)
- `scripts/scrape.mjs`, `scripts/download-assets.mjs` (dev-only helpers)

**Modified:**
- `src/app/layout.tsx` — wire Header + Footer + fonts + metadata
- `src/app/page.tsx` — replace scaffold with Home
- `src/app/globals.css` — replace defaults with brand theme
- `.gitignore` — add `.firecrawl/`

**Deleted after scaffold:**
- Default favicon/logo SVGs from `public/` that ship with `create-next-app`
- Default content in `src/app/page.tsx` and `globals.css`

---

## Task 1: Clean up scaffold + gitignore working dirs

**Files:**
- Modify: `.gitignore`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Delete: `public/next.svg`, `public/vercel.svg`, `public/file.svg`, `public/globe.svg`, `public/window.svg`

- [ ] **Step 1: Add `.firecrawl/` to `.gitignore`**

Append to `.gitignore`:

```
# Firecrawl working output
.firecrawl/
```

- [ ] **Step 2: Reset `src/app/page.tsx` to a placeholder**

Overwrite with:

```tsx
export default function Home() {
  return <main className="p-8">Welcome Diner — coming soon.</main>;
}
```

- [ ] **Step 3: Reset `src/app/globals.css` to minimum**

Overwrite with:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #111111;
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

- [ ] **Step 4: Remove default scaffold SVGs**

Run:

```bash
rm public/next.svg public/vercel.svg public/file.svg public/globe.svg public/window.svg
```

- [ ] **Step 5: Verify dev server boots**

Run:

```bash
npm run dev
```

Expected: Next starts on port 3000 with no errors. Ctrl-C to stop.

- [ ] **Step 6: Commit**

```bash
git add .gitignore src/app/page.tsx src/app/globals.css public/
git commit -m "chore: strip create-next-app defaults, add .firecrawl to ignore"
```

---

## Task 2: Add content-scrape script

Scrapes every source page to `.firecrawl/pages/<slug>.{md,html}` for engineers to reference while building page JSX.

**Files:**
- Create: `scripts/scrape.mjs`

- [ ] **Step 1: Write `scripts/scrape.mjs`**

```js
// Scrapes all source pages via Firecrawl CLI.
// Requires: FIRECRAWL_API_KEY env var (see .env.local) and `firecrawl` CLI on PATH.
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = ".firecrawl/pages";
mkdirSync(OUT, { recursive: true });

const pages = [
  ["home", "https://welcomediner.net/"],
  ["menus", "https://welcomediner.net/menus"],
  ["all-day", "https://welcomediner.net/all-day-menu"],
  ["brunch", "https://welcomediner.net/brunch-1"],
  ["lunch", "https://welcomediner.net/lunch"],
  ["dinner", "https://welcomediner.net/dinner"],
  ["drinks", "https://welcomediner.net/drinks"],
  ["kids", "https://welcomediner.net/kids"],
  ["happy-hour", "https://welcomediner.net/happy-hour-1"],
  ["locations", "https://welcomediner.net/locations"],
  ["our-story", "https://welcomediner.net/our-story"],
  ["mentions", "https://welcomediner.net/mentions"],
  ["opportunity", "https://welcomediner.net/opportunity"],
  ["purveyors", "https://welcomediner.net/purveyors"],
  ["sister-spots", "https://welcomediner.net/sister-spots"],
];

for (const [slug, url] of pages) {
  for (const fmt of ["markdown", "html"]) {
    const ext = fmt === "markdown" ? "md" : "html";
    const out = join(OUT, `${slug}.${ext}`);
    console.log(`scrape ${slug} (${fmt})`);
    execFileSync("firecrawl", ["scrape", url, "--format", fmt, "-o", out], {
      stdio: "inherit",
    });
  }
}
```

- [ ] **Step 2: Run scrape**

Load API key and run:

```bash
set -a; source .env.local; set +a
node scripts/scrape.mjs
```

Expected: 30 files created in `.firecrawl/pages/` (15 slugs × 2 formats). `.firecrawl/` is gitignored — files stay local.

- [ ] **Step 3: Smoke-check output**

```bash
ls .firecrawl/pages/ | wc -l
```

Expected: `30`.

- [ ] **Step 4: Commit**

```bash
git add scripts/scrape.mjs
git commit -m "chore: add scrape script for source page recon"
```

---

## Task 3: Asset download script + populate `public/images/`

Parses scraped HTML, pulls all image URLs, downloads unique assets to `public/images/` with stable slug-based names.

**Files:**
- Create: `scripts/download-assets.mjs`
- Populates: `public/images/*`

- [ ] **Step 1: Write `scripts/download-assets.mjs`**

```js
// Parses .firecrawl/pages/*.html, collects <img src> and background-image URLs,
// downloads unique asset URLs to public/images/<slug>-<n>.<ext>.
import { readdirSync, readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const SRC = ".firecrawl/pages";
const DST = "public/images";
mkdirSync(DST, { recursive: true });

const files = readdirSync(SRC).filter((f) => f.endsWith(".html"));

for (const file of files) {
  const slug = file.replace(/\.html$/, "");
  const html = readFileSync(join(SRC, file), "utf8");
  const urls = new Set();

  for (const m of html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)) urls.add(m[1]);
  for (const m of html.matchAll(/url\((["']?)(https?:[^)"']+)\1\)/g)) urls.add(m[2]);

  let i = 0;
  for (const url of urls) {
    try {
      const u = new URL(url);
      const ext = (extname(u.pathname) || ".jpg").split("?")[0].toLowerCase();
      const name = `${slug}-${String(i).padStart(2, "0")}${ext}`;
      const out = join(DST, name);
      if (existsSync(out)) { i++; continue; }
      const res = await fetch(url);
      if (!res.ok) { console.warn(`skip ${url} (${res.status})`); i++; continue; }
      const buf = Buffer.from(await res.arrayBuffer());
      writeFileSync(out, buf);
      console.log(`saved ${out}`);
      i++;
    } catch (err) {
      console.warn(`fail ${url}: ${err.message}`);
      i++;
    }
  }
}
```

- [ ] **Step 2: Run downloader**

```bash
node scripts/download-assets.mjs
```

Expected: many `saved public/images/<slug>-NN.<ext>` log lines, zero crashes. Engineer reviews `public/images/` and deletes obvious junk (analytics pixels, 1x1 trackers, icons from the Wix chrome) before committing.

- [ ] **Step 3: Manually curate**

Open `public/images/` in a file browser. Delete any 1×1 tracking pixels, Wix-branded icons (hamburger, social glyphs), and duplicates. Keep only photos + logo.

- [ ] **Step 4: Commit**

```bash
git add scripts/download-assets.mjs public/images/
git commit -m "chore: add asset downloader; vendor site imagery to public/images"
```

---

## Task 4: Image logical-name map + external links data

**Files:**
- Create: `src/data/images.ts`
- Create: `src/data/externalLinks.ts`

- [ ] **Step 1: Write `src/data/images.ts`**

After Task 3, engineer has a curated `public/images/`. Fill in logical names based on what was kept. Example shape:

```ts
// Logical name → public path. Extend as new images are introduced.
// Rename here, not across components.
export const images = {
  logo: "/images/home-00.png",
  heroHome: "/images/home-01.jpg",
  heroMenu: "/images/menus-01.jpg",
  heroLocations: "/images/locations-01.jpg",
  heroOurStory: "/images/our-story-01.jpg",
  heroOpportunity: "/images/opportunity-01.jpg",
} as const;

export type ImageKey = keyof typeof images;
```

Rule: once the file exists, only reference imagery through `images.<key>`. No raw `/images/...` strings in components.

- [ ] **Step 2: Write `src/data/externalLinks.ts`**

```ts
// Third-party URLs referenced from multiple components. Single source of truth.
export const externalLinks = {
  order: "https://food.google.com/chooseprovider?restaurantId=/g/1tg165wh",
  catering: "https://www.ezcater.com/catering/pvt/welcome-diner-3",
  facebook: "https://www.facebook.com/WelcomeDiner/",
  instagram: "https://www.instagram.com/welcomediner/",
  inquireEmail: "desk@marthaandmary.net",
  inquireSubject: "Welcome Tucson",
} as const;
```

- [ ] **Step 3: Typecheck**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/
git commit -m "feat(data): add image map and external-link constants"
```

---

## Task 5: Theme tokens — Tailwind v4 `@theme` in `globals.css`

Tailwind v4 is CSS-first: no `tailwind.config.ts`. Theme tokens are declared inside `@theme` inside `globals.css`.

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Inspect source palette**

Open `.firecrawl/pages/home.html`. Search for `color:` and `background:` declarations in inline style or `<style>` blocks. Also check a couple of menu pages. Pick 3–4 brand tones (dark background, cream text, one accent). Note them for the next step.

- [ ] **Step 2: Overwrite `src/app/globals.css`**

Replace file contents with the following, filling in exact hex values from Step 1 in place of the placeholders for `--color-brand-bg`, `--color-brand-fg`, `--color-brand-accent`, `--color-brand-muted`:

```css
@import "tailwindcss";

@theme {
  --color-brand-bg: #0f0d0b;       /* replace with source dark tone */
  --color-brand-fg: #f3ead8;       /* replace with source cream tone */
  --color-brand-accent: #d64a2b;   /* replace with source red/orange */
  --color-brand-muted: #8a7f6c;    /* replace with source muted tone */

  --font-display: var(--font-display), "Playfair Display", Georgia, serif;
  --font-body: var(--font-body), ui-sans-serif, system-ui, sans-serif;
}

body {
  background: var(--color-brand-bg);
  color: var(--color-brand-fg);
  font-family: var(--font-body);
}

h1, h2, h3 {
  font-family: var(--font-display);
  letter-spacing: 0.01em;
}
```

(`--font-display` and `--font-body` CSS vars are set in the root layout via `next/font` — see Task 6.)

- [ ] **Step 3: Smoke-check in dev**

```bash
npm run dev
```

Visit `http://localhost:3000/`. Page should now show cream text on dark background. Ctrl-C.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(theme): add brand tokens to tailwind @theme block"
```

---

## Task 6: Root layout — fonts, metadata, Header/Footer slots

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Decide font pairing**

From `.firecrawl/pages/home.html`, find `font-family` declarations. If they match a Google Font, note names for Step 2. If custom, download `.woff2` into `public/fonts/` and use `next/font/local` (adjust Step 2 accordingly).

- [ ] **Step 2: Overwrite `src/app/layout.tsx`**

Default example below uses Google Fonts `Playfair Display` + `Inter`. Swap as needed.

```tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome Diner",
  description: "All-day diner. Chef-driven. Community-focused.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

`Header` and `Footer` don't exist yet — Next will error until Task 7–9. Skip the smoke-check; next task adds the components.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(layout): wire fonts, metadata, header/footer slots"
```

---

## Task 7: Nav data + `Header` + `MobileNav`

**Files:**
- Create: `src/data/nav.ts`
- Create: `src/components/Header.tsx`
- Create: `src/components/MobileNav.tsx`

- [ ] **Step 1: Write `src/data/nav.ts`**

```ts
import { externalLinks } from "./externalLinks";

export type NavItem = { label: string; href: string; external?: boolean };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menus", href: "/menu" },
  { label: "Order", href: externalLinks.order, external: true },
  { label: "Locations", href: "/locations" },
  { label: "Catering", href: externalLinks.catering, external: true },
  { label: "Purveyors", href: "/purveyors" },
  { label: "Our Story", href: "/our-story" },
  { label: "Mentions", href: "/mentions" },
  { label: "Opportunity", href: "/opportunity" },
  { label: "Sister Spots", href: "/sister-spots" },
];
```

- [ ] **Step 2: Write `src/components/Header.tsx`**

```tsx
import Link from "next/link";
import Image from "next/image";
import { primaryNav } from "@/data/nav";
import { images } from "@/data/images";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-muted/30 bg-brand-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src={images.logo} alt="Welcome Diner" width={48} height={48} priority />
          <span className="font-display text-xl tracking-wide">Welcome Diner</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm uppercase tracking-wider">
          {primaryNav.map((item) =>
            item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="hover:text-brand-accent">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Write `src/components/MobileNav.tsx`**

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="p-2"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 z-50 bg-brand-bg">
          <nav className="flex flex-col gap-4 p-6 text-lg uppercase tracking-widest">
            {primaryNav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 4: Install `lucide-react`**

```bash
npm install lucide-react
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/MobileNav.tsx src/data/nav.ts package.json package-lock.json
git commit -m "feat(nav): add header with desktop + mobile navigation"
```

---

## Task 8: `SocialLinks`, `ExternalButton`, `Footer`

**Files:**
- Create: `src/components/SocialLinks.tsx`
- Create: `src/components/ExternalButton.tsx`
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Write `src/components/SocialLinks.tsx`**

```tsx
import { Facebook, Instagram } from "lucide-react";
import { externalLinks } from "@/data/externalLinks";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href={externalLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Facebook size={22} />
      </a>
      <a href={externalLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram size={22} />
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Write `src/components/ExternalButton.tsx`**

```tsx
import Link from "next/link";

type Props = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function ExternalButton({ href, external, children, className = "" }: Props) {
  const base =
    "inline-block rounded border border-brand-accent px-5 py-2 text-sm uppercase tracking-widest hover:bg-brand-accent hover:text-brand-bg transition-colors";
  const cls = `${base} ${className}`;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 3: Write `src/components/Footer.tsx`**

```tsx
import { externalLinks } from "@/data/externalLinks";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  const mailto = `mailto:${externalLinks.inquireEmail}?subject=${encodeURIComponent(externalLinks.inquireSubject)}`;
  return (
    <footer className="border-t border-brand-muted/30 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-6 items-center text-center">
        <h2 className="font-display text-2xl tracking-widest uppercase">Follow Us</h2>
        <SocialLinks />
        <a href={mailto} className="text-sm uppercase tracking-widest hover:text-brand-accent">
          Inquire
        </a>
        <p className="text-xs text-brand-muted">© {year} Welcome Diner</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Smoke-check**

```bash
npm run dev
```

Home page renders with header + footer. No TS errors in terminal. Ctrl-C.

- [ ] **Step 5: Commit**

```bash
git add src/components/SocialLinks.tsx src/components/ExternalButton.tsx src/components/Footer.tsx
git commit -m "feat(chrome): add social links, external button, footer"
```

---

## Task 9: `Hero` component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Write component**

```tsx
import Image, { StaticImageData } from "next/image";

type Props = {
  image: string | StaticImageData;
  alt: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function Hero({ image, alt, title, subtitle, children }: Props) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <Image src={image} alt={alt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-widest uppercase">{title}</h1>
        {subtitle && <p className="mt-3 max-w-xl text-base md:text-lg">{subtitle}</p>}
        {children && <div className="mt-6 flex gap-3">{children}</div>}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat(hero): add reusable hero section"
```

---

## Task 10: `MenuItem` + `MenuSection`

**Files:**
- Create: `src/components/MenuItem.tsx`
- Create: `src/components/MenuSection.tsx`

- [ ] **Step 1: Write `src/components/MenuItem.tsx`**

```tsx
export type MenuItemData = {
  name: string;
  description?: string;
  price?: string;
  note?: string;
};

export function MenuItem({ item }: { item: MenuItemData }) {
  return (
    <li className="py-3 border-b border-brand-muted/20 last:border-0">
      <div className="flex justify-between gap-4">
        <span className="font-display text-lg uppercase tracking-wider">{item.name}</span>
        {item.price && <span className="whitespace-nowrap">{item.price}</span>}
      </div>
      {item.description && <p className="mt-1 text-sm text-brand-muted">{item.description}</p>}
      {item.note && <p className="mt-1 text-xs italic text-brand-accent">{item.note}</p>}
    </li>
  );
}
```

- [ ] **Step 2: Write `src/components/MenuSection.tsx`**

```tsx
import { MenuItem, type MenuItemData } from "./MenuItem";

export type MenuSectionData = {
  heading: string;
  blurb?: string;
  items: MenuItemData[];
};

export function MenuSection({ section }: { section: MenuSectionData }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl md:text-3xl uppercase tracking-widest mb-2">
        {section.heading}
      </h2>
      {section.blurb && <p className="text-sm text-brand-muted mb-4">{section.blurb}</p>}
      <ul>
        {section.items.map((it) => (
          <MenuItem key={it.name} item={it} />
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/MenuItem.tsx src/components/MenuSection.tsx
git commit -m "feat(menu): add MenuItem + MenuSection primitives"
```

---

## Task 11: `LocationCard` + `PressCard`

**Files:**
- Create: `src/components/LocationCard.tsx`
- Create: `src/components/PressCard.tsx`

- [ ] **Step 1: Write `src/components/LocationCard.tsx`**

```tsx
export type LocationData = {
  name: string;
  addressLines: string[];
  phone?: string;
  hours: { label: string; value: string }[];
  mapsUrl?: string;
};

export function LocationCard({ location }: { location: LocationData }) {
  return (
    <article className="p-6 border border-brand-muted/30 rounded">
      <h3 className="font-display text-2xl uppercase tracking-widest">{location.name}</h3>
      <address className="not-italic mt-2 text-sm">
        {location.addressLines.map((line) => <div key={line}>{line}</div>)}
        {location.phone && <div className="mt-1">{location.phone}</div>}
      </address>

      {location.hours.length > 0 && (
        <dl className="mt-4 grid grid-cols-[max-content_1fr] gap-x-4 text-sm">
          {location.hours.map((h) => (
            <div key={h.label} className="contents">
              <dt className="uppercase tracking-wider text-brand-muted">{h.label}</dt>
              <dd>{h.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {location.mapsUrl && (
        <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer"
           className="mt-4 inline-block text-xs uppercase tracking-widest hover:text-brand-accent">
          Get directions →
        </a>
      )}
    </article>
  );
}
```

- [ ] **Step 2: Write `src/components/PressCard.tsx`**

```tsx
export type PressData = {
  publication: string;
  quote?: string;
  url?: string;
};

export function PressCard({ press }: { press: PressData }) {
  const Inner = () => (
    <article className="p-6 border border-brand-muted/30 rounded h-full">
      <h3 className="font-display text-xl uppercase tracking-widest">{press.publication}</h3>
      {press.quote && <p className="mt-2 text-sm italic">&ldquo;{press.quote}&rdquo;</p>}
    </article>
  );
  return press.url ? (
    <a href={press.url} target="_blank" rel="noopener noreferrer" className="block hover:border-brand-accent">
      <Inner />
    </a>
  ) : <Inner />;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/LocationCard.tsx src/components/PressCard.tsx
git commit -m "feat(cards): add LocationCard and PressCard"
```

---

## Task 12: Home page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Read `.firecrawl/pages/home.md`**

Engineer opens that file and notes: hero tagline, section blurbs, featured copy. Paraphrase for the JSX below — don't bulk-paste the source.

- [ ] **Step 2: Overwrite `src/app/page.tsx`**

```tsx
import { Hero } from "@/components/Hero";
import { ExternalButton } from "@/components/ExternalButton";
import { externalLinks } from "@/data/externalLinks";
import { images } from "@/data/images";

export default function Home() {
  return (
    <>
      <Hero
        image={images.heroHome}
        alt="Welcome Diner interior"
        title="Welcome Diner"
        subtitle="All-day diner. Chef-driven. Community-focused."
      >
        <ExternalButton href="/menu">See Menus</ExternalButton>
        <ExternalButton href={externalLinks.order} external>Order</ExternalButton>
      </Hero>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-widest">About</h2>
        <p className="mt-4 text-base md:text-lg">
          {/* Paraphrase the About blurb from .firecrawl/pages/home.md */}
          Paraphrased description of the restaurant pulled from home.md.
        </p>
      </section>
    </>
  );
}
```

Replace the paraphrased blurb with a concise original-wording version derived from the scraped source.

- [ ] **Step 3: Smoke-check**

```bash
npm run dev
```

Visit `/`. Hero + about block render; header + footer visible. Ctrl-C.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): implement home page"
```

---

## Task 13: Menu index page

**Files:**
- Create: `src/app/menu/page.tsx`

- [ ] **Step 1: Write page**

```tsx
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { images } from "@/data/images";

const menus = [
  { label: "All Day", href: "/menu/all-day" },
  { label: "Brunch", href: "/menu/brunch" },
  { label: "Lunch", href: "/menu/lunch" },
  { label: "Dinner", href: "/menu/dinner" },
  { label: "Drinks", href: "/menu/drinks" },
  { label: "Kids", href: "/menu/kids" },
  { label: "Happy Hour", href: "/menu/happy-hour" },
];

export default function MenuIndex() {
  return (
    <>
      <Hero image={images.heroMenu} alt="Dish" title="Menus" />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {menus.map((m) => (
            <li key={m.href}>
              <Link
                href={m.href}
                className="block border border-brand-muted/30 rounded px-6 py-5 font-display text-xl uppercase tracking-widest text-center hover:border-brand-accent hover:text-brand-accent"
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Smoke-check**

```bash
npm run dev
```

Visit `/menu`. 7 tiles render. Ctrl-C.

- [ ] **Step 3: Commit**

```bash
git add src/app/menu/page.tsx
git commit -m "feat(menu): add menu index with submenu tiles"
```

---

## Task 14: Menu subpages (7 pages)

Each subpage follows an identical shape: `Hero` + one or more `MenuSection`s driven by a page-local `sections` array. Engineer reads the corresponding `.firecrawl/pages/<slug>.md` for each page, transcribes item names + prices + short descriptions into the array (prices as strings to preserve original formatting), then hardcodes sections per page.

**Files (create each):**
- `src/app/menu/all-day/page.tsx`
- `src/app/menu/brunch/page.tsx`
- `src/app/menu/lunch/page.tsx`
- `src/app/menu/dinner/page.tsx`
- `src/app/menu/drinks/page.tsx`
- `src/app/menu/kids/page.tsx`
- `src/app/menu/happy-hour/page.tsx`

- [ ] **Step 1: Implement one page as the template, e.g. `src/app/menu/brunch/page.tsx`**

```tsx
import { Hero } from "@/components/Hero";
import { MenuSection, type MenuSectionData } from "@/components/MenuSection";
import { images } from "@/data/images";

const sections: MenuSectionData[] = [
  {
    heading: "Starters",
    items: [
      { name: "Example Item", description: "Short paraphrase of the source description.", price: "12" },
      // ...transcribe remaining items from .firecrawl/pages/brunch.md
    ],
  },
  // ...additional sections as they appear on the source page
];

export default function BrunchMenu() {
  return (
    <>
      <Hero image={images.heroMenu} alt="Brunch" title="Brunch" />
      <div className="mx-auto max-w-3xl px-4 py-10">
        {sections.map((s) => <MenuSection key={s.heading} section={s} />)}
      </div>
    </>
  );
}
```

- [ ] **Step 2: Repeat for the other 6 pages**

For each of `all-day`, `lunch`, `dinner`, `drinks`, `kids`, `happy-hour`:
1. Copy the brunch file into `src/app/menu/<slug>/page.tsx`.
2. Rename component (`AllDayMenu`, `LunchMenu`, etc.).
3. Update `Hero` `title` to the display label.
4. Replace `sections` contents by transcribing items from `.firecrawl/pages/<slug>.md`.
5. Keep item descriptions paraphrased and concise.

- [ ] **Step 3: Smoke-check all 7 routes**

```bash
npm run dev
```

Visit each URL manually:
- /menu/all-day
- /menu/brunch
- /menu/lunch
- /menu/dinner
- /menu/drinks
- /menu/kids
- /menu/happy-hour

All render; no console errors. Ctrl-C.

- [ ] **Step 4: Commit**

```bash
git add src/app/menu/
git commit -m "feat(menu): add all 7 menu subpages"
```

---

## Task 15: Locations page

**Files:**
- Create: `src/app/locations/page.tsx`

- [ ] **Step 1: Transcribe locations from `.firecrawl/pages/locations.md`**

Open `.firecrawl/pages/locations.md`. Note each location: name (Phoenix, Tucson), street address, phone, weekly hours, Google Maps URL if visible.

- [ ] **Step 2: Write page**

```tsx
import { Hero } from "@/components/Hero";
import { LocationCard, type LocationData } from "@/components/LocationCard";
import { images } from "@/data/images";

const locations: LocationData[] = [
  {
    name: "Welcome Diner — Phoenix",
    addressLines: ["929 E Pierce St", "Phoenix, AZ 85006"],
    phone: "(602) 495-1111",
    hours: [
      { label: "Mon–Thu", value: "9am–9pm" },
      { label: "Fri–Sat", value: "9am–10pm" },
      { label: "Sun", value: "9am–8pm" },
    ],
    mapsUrl: "https://maps.google.com/?q=929+E+Pierce+St+Phoenix+AZ",
  },
  // Add Tucson location from locations.md with real values
];

export default function Locations() {
  return (
    <>
      <Hero image={images.heroLocations} alt="Storefront" title="Locations" />
      <section className="mx-auto max-w-5xl px-4 py-12 grid gap-6 md:grid-cols-2">
        {locations.map((l) => <LocationCard key={l.name} location={l} />)}
      </section>
    </>
  );
}
```

Correct all placeholder address/phone/hours values with the real values from the scraped source before committing.

- [ ] **Step 3: Smoke-check**

Visit `/locations`. Cards render. Ctrl-C.

- [ ] **Step 4: Commit**

```bash
git add src/app/locations/page.tsx
git commit -m "feat(locations): add locations page"
```

---

## Task 16: Our Story page

**Files:**
- Create: `src/app/our-story/page.tsx`

- [ ] **Step 1: Read `.firecrawl/pages/our-story.md`**

Paraphrase the narrative into 2–4 short paragraphs. Keep factual details (founding year, neighborhoods, milestones) accurate; rewrite prose in fresh wording.

- [ ] **Step 2: Write page**

```tsx
import { Hero } from "@/components/Hero";
import { images } from "@/data/images";

export default function OurStory() {
  return (
    <>
      <Hero image={images.heroOurStory} alt="Kitchen" title="Our Story" />
      <article className="mx-auto max-w-2xl px-4 py-12 space-y-6 text-base leading-relaxed">
        <p>{/* Paragraph 1 — paraphrased from our-story.md */}</p>
        <p>{/* Paragraph 2 */}</p>
        <p>{/* Paragraph 3 */}</p>
      </article>
    </>
  );
}
```

- [ ] **Step 3: Smoke-check + commit**

```bash
npm run dev
# visit /our-story
```

```bash
git add src/app/our-story/page.tsx
git commit -m "feat(story): add our-story page"
```

---

## Task 17: Mentions page

**Files:**
- Create: `src/app/mentions/page.tsx`

- [ ] **Step 1: Read `.firecrawl/pages/mentions.md`**

List every publication mention with its URL if present.

- [ ] **Step 2: Write page**

```tsx
import { Hero } from "@/components/Hero";
import { PressCard, type PressData } from "@/components/PressCard";
import { images } from "@/data/images";

const press: PressData[] = [
  { publication: "Food & Wine", quote: "Where to eat in Phoenix", url: "https://www.foodandwine.com/..." },
  { publication: "Best Things Arizona", quote: "The 10 Best Diners in Arizona", url: "https://..." },
  // Fill with each entry from mentions.md
];

export default function Mentions() {
  return (
    <>
      <Hero image={images.heroHome} alt="Press" title="Mentions" />
      <section className="mx-auto max-w-5xl px-4 py-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {press.map((p) => <PressCard key={p.publication} press={p} />)}
      </section>
    </>
  );
}
```

Replace placeholder URLs with values from `mentions.md`. Paraphrase quote snippets to one short phrase.

- [ ] **Step 3: Smoke-check + commit**

```bash
git add src/app/mentions/page.tsx
git commit -m "feat(mentions): add press mentions page"
```

---

## Task 18: Opportunity page

**Files:**
- Create: `src/app/opportunity/page.tsx`

- [ ] **Step 1: Write page**

```tsx
import { Hero } from "@/components/Hero";
import { ExternalButton } from "@/components/ExternalButton";
import { externalLinks } from "@/data/externalLinks";
import { images } from "@/data/images";

export default function Opportunity() {
  const mailto = `mailto:${externalLinks.inquireEmail}?subject=${encodeURIComponent("Opportunity")}`;
  return (
    <>
      <Hero image={images.heroOpportunity} alt="Team" title="Opportunity" />
      <section className="mx-auto max-w-2xl px-4 py-12 text-center space-y-6">
        <p className="text-base leading-relaxed">
          {/* Paraphrase hiring blurb from .firecrawl/pages/opportunity.md */}
          We're always looking for strong teammates. Tell us about yourself.
        </p>
        <ExternalButton href={mailto} external>Become a Welcome Homie</ExternalButton>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Smoke-check + commit**

```bash
git add src/app/opportunity/page.tsx
git commit -m "feat(opportunity): add hiring page"
```

---

## Task 19: Purveyors page

**Files:**
- Create: `src/app/purveyors/page.tsx`

- [ ] **Step 1: Read `.firecrawl/pages/purveyors.md`**

Note each named purveyor + optional short descriptor.

- [ ] **Step 2: Write page**

```tsx
import { Hero } from "@/components/Hero";
import { images } from "@/data/images";

const purveyors: { name: string; note?: string; url?: string }[] = [
  // Transcribe from purveyors.md
];

export default function Purveyors() {
  return (
    <>
      <Hero image={images.heroHome} alt="Purveyors" title="Purveyors" />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <ul className="grid gap-4 sm:grid-cols-2">
          {purveyors.map((p) => (
            <li key={p.name} className="border border-brand-muted/30 rounded p-4">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-display text-lg uppercase tracking-widest hover:text-brand-accent">
                  {p.name}
                </a>
              ) : (
                <span className="font-display text-lg uppercase tracking-widest">{p.name}</span>
              )}
              {p.note && <p className="mt-1 text-sm text-brand-muted">{p.note}</p>}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Smoke-check + commit**

```bash
git add src/app/purveyors/page.tsx
git commit -m "feat(purveyors): add purveyors page"
```

---

## Task 20: Sister Spots page

**Files:**
- Create: `src/app/sister-spots/page.tsx`

- [ ] **Step 1: Read `.firecrawl/pages/sister-spots.md`**

Note sister businesses: Hai Noon, Hidden Gem (and any others). Capture URL + short tagline each.

- [ ] **Step 2: Write page**

```tsx
import { Hero } from "@/components/Hero";
import { images } from "@/data/images";

const sisters: { name: string; tagline?: string; url?: string }[] = [
  { name: "Hai Noon", tagline: "Sister spot.", url: "https://..." },
  { name: "Hidden Gem", tagline: "Sister spot.", url: "https://..." },
];

export default function SisterSpots() {
  return (
    <>
      <Hero image={images.heroHome} alt="Sister spots" title="Sister Spots" />
      <section className="mx-auto max-w-4xl px-4 py-12 grid gap-6 sm:grid-cols-2">
        {sisters.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
             className="block border border-brand-muted/30 rounded p-6 hover:border-brand-accent">
            <h2 className="font-display text-2xl uppercase tracking-widest">{s.name}</h2>
            {s.tagline && <p className="mt-2 text-sm text-brand-muted">{s.tagline}</p>}
          </a>
        ))}
      </section>
    </>
  );
}
```

Replace placeholder URLs + taglines with real values from `sister-spots.md`.

- [ ] **Step 3: Smoke-check + commit**

```bash
git add src/app/sister-spots/page.tsx
git commit -m "feat(sister-spots): add sister spots page"
```

---

## Task 21: Final verification pass

**Files:** none created; verification only.

- [ ] **Step 1: Full-route walk-through**

```bash
npm run dev
```

Visit every route. Check desktop nav, mobile nav (resize to ~375px width), hero imagery, footer, external links open in new tab:

- `/`, `/menu`, `/menu/all-day`, `/menu/brunch`, `/menu/lunch`, `/menu/dinner`, `/menu/drinks`, `/menu/kids`, `/menu/happy-hour`
- `/locations`, `/our-story`, `/mentions`, `/opportunity`, `/purveyors`, `/sister-spots`

Expected: all routes render, no 404s, no console errors.

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: zero errors. Fix any reported issues inline.

- [ ] **Step 3: Type check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 4: Production build**

```bash
npm run build
```

Expected: all 16 routes compiled, zero errors. Look at the route table in the output — each page should show as `○ (Static)`.

- [ ] **Step 5: Lighthouse spot-check**

```bash
npm run start &
sleep 2
```

Open `http://localhost:3000/` in Chrome; run Lighthouse (desktop). Repeat on `/menu/brunch`.

Expected: Accessibility ≥ 90, Performance ≥ 85. Investigate any failures (usually alt-text or image dimensions).

Kill the server when done.

- [ ] **Step 6: Commit any verification-driven fixes**

If lint/tsc/lighthouse revealed fixes, commit them separately:

```bash
git add -A
git commit -m "fix: address lint/a11y issues found in verification"
```

---

## Done

Site is a static visual clone of welcomediner.net, ready to deploy to Vercel or any static host via `npm run build` + `npm run start`.
