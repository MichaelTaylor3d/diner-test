// Side-by-side full-page screenshots of local vs live.
// Assumes `npm run dev` running on http://localhost:3000.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = ".playwright/compare";
mkdirSync(OUT, { recursive: true });

const routes = [
  { slug: "home", local: "/", live: "https://welcomediner.net/" },
  { slug: "menu-index", local: "/menu", live: "https://welcomediner.net/menus" },
  { slug: "all-day", local: "/menu/all-day", live: "https://welcomediner.net/all-day-menu" },
  { slug: "brunch", local: "/menu/brunch", live: "https://welcomediner.net/brunch-1" },
  { slug: "lunch", local: "/menu/lunch", live: "https://welcomediner.net/lunch" },
  { slug: "dinner", local: "/menu/dinner", live: "https://welcomediner.net/dinner" },
  { slug: "drinks", local: "/menu/drinks", live: "https://welcomediner.net/drinks" },
  { slug: "kids", local: "/menu/kids", live: "https://welcomediner.net/kids" },
  { slug: "happy-hour", local: "/menu/happy-hour", live: "https://welcomediner.net/happy-hour-1" },
  { slug: "locations", local: "/locations", live: "https://welcomediner.net/locations" },
  { slug: "our-story", local: "/our-story", live: "https://welcomediner.net/our-story" },
  { slug: "mentions", local: "/mentions", live: "https://welcomediner.net/mentions" },
  { slug: "opportunity", local: "/opportunity", live: "https://welcomediner.net/opportunity" },
  { slug: "purveyors", local: "/purveyors", live: "https://welcomediner.net/purveyors" },
  { slug: "sister-spots", local: "/sister-spots", live: "https://welcomediner.net/sister-spots" },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

for (const r of routes) {
  for (const side of ["local", "live"]) {
    const url = side === "local" ? `http://localhost:3000${r.local}` : r.live;
    const out = `${OUT}/${r.slug}-${side}.png`;
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForTimeout(4000);
      await page.screenshot({ path: out, fullPage: true });
      console.log(`ok  ${side.padEnd(5)} ${r.slug}`);
    } catch (err) {
      console.warn(`fail ${side.padEnd(5)} ${r.slug}: ${err.message.split("\n")[0]}`);
    }
  }
}

await browser.close();
