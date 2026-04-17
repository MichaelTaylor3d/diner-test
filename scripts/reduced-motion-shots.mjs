import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = ".playwright/reduced";
mkdirSync(OUT, { recursive: true });

const routes = ["/", "/menu", "/our-story", "/opportunity", "/sister-spots"];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  reducedMotion: "reduce",
});
const page = await ctx.newPage();

for (const path of routes) {
  await page.goto("http://localhost:3000" + path, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  const slug = path === "/" ? "home" : path.slice(1).replace(/\//g, "-");
  await page.screenshot({ path: `${OUT}/${slug}.png`, fullPage: true });
  console.log(`ok ${path}`);
}

await browser.close();
