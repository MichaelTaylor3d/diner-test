// Scroll-and-capture audit: emulates real user scroll to trigger whileInView.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = ".playwright/lux-audit";
mkdirSync(OUT, { recursive: true });

const routes = [
  { slug: "home", path: "/" },
  { slug: "menu-index", path: "/menu" },
  { slug: "all-day", path: "/menu/all-day" },
  { slug: "locations", path: "/locations" },
  { slug: "our-story", path: "/our-story" },
  { slug: "mentions", path: "/mentions" },
  { slug: "opportunity", path: "/opportunity" },
  { slug: "purveyors", path: "/purveyors" },
  { slug: "sister-spots", path: "/sister-spots" },
];

const viewports = [
  { label: "mobile", width: 375, height: 812 },
  { label: "tablet", width: 768, height: 1024 },
  { label: "desktop", width: 1440, height: 900 },
];

async function scrollThroughPage(page) {
  // Two full passes: first trigger lazy-load + whileInView, second settle scroll state.
  for (let pass = 0; pass < 2; pass++) {
    const height = await page.evaluate(() => document.body.scrollHeight);
    const step = 300;
    for (let y = 0; y < height; y += step) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(180);
    }
  }
  // Wait for lazy images to decode.
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map((img) => (img.complete ? Promise.resolve() : new Promise((r) => (img.onload = img.onerror = r))))
    );
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
}

const browser = await chromium.launch();

for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(`pageerror ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`console ${m.text()}`);
  });

  for (const r of routes) {
    const url = `http://localhost:3000${r.path}`;
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForTimeout(1500);
      await scrollThroughPage(page);
      await page.waitForTimeout(800);
      await page.screenshot({
        path: `${OUT}/${r.slug}-${vp.label}.png`,
        fullPage: true,
      });
      console.log(`ok  ${vp.label.padEnd(7)} ${r.slug}`);
    } catch (err) {
      console.warn(`fail ${vp.label.padEnd(7)} ${r.slug}: ${err.message.split("\n")[0]}`);
    }
  }

  await ctx.close();

  if (errors.length) {
    console.log(`\n--- ${vp.label} console errors ---`);
    errors.forEach((e) => console.log(`  ${e}`));
  }
}

await browser.close();
console.log("\ndone");
