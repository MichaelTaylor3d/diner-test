// Scrapes all source pages via Firecrawl CLI.
// Requires: FIRECRAWL_API_KEY env var (see .env.local) and `firecrawl` CLI on PATH.
import { execFileSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";
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
    if (existsSync(out)) {
      console.log(`skip ${slug} (${fmt}) — exists`);
      continue;
    }
    console.log(`scrape ${slug} (${fmt})`);
    execFileSync("firecrawl", ["scrape", url, "--format", fmt, "-o", out], {
      stdio: "inherit",
      shell: true,
    });
  }
}
