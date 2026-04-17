import { chromium } from "playwright";

const base = "http://localhost:3000";
const routes = [
  "/",
  "/menu",
  "/menu/brunch",
  "/menu/all-day",
  "/menu/drinks",
  "/menu/happy-hour",
  "/menu/kids",
  "/locations",
  "/our-story",
  "/mentions",
  "/opportunity",
  "/purveyors",
  "/sister-spots",
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const errors = [];
page.on("pageerror", (err) => errors.push(`pageerror ${err.message}`));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`console ${msg.text()}`);
});

for (const path of routes) {
  await page.goto(base + path, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1500);
  const headerCount = await page.locator("header").count();
  if (headerCount === 0) errors.push(`${path}: no <header>`);
  if (path === "/") {
    const letters = await page.locator("h1 span").count();
    if (letters < 5) errors.push(`/: expected letter-reveal spans, got ${letters}`);
  }
  console.log(`ok ${path}`);
}

await browser.close();
if (errors.length) {
  console.error("FAILURES:");
  errors.forEach((e) => console.error("  " + e));
  process.exit(1);
}
console.log("all green");
