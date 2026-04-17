// Extracts the first image URL from each .firecrawl/pages/<slug>.md
// and downloads it to public/images/<slug>.jpg.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DST = "public/images";
mkdirSync(DST, { recursive: true });

const slugs = [
  "all-day",
  "brunch",
  "lunch",
  "dinner",
  "drinks",
  "kids",
  "happy-hour",
  "purveyors",
  "locations",
  "home",
];

const IMG_RE = /https:\/\/img1\.wsimg\.com\/isteam\/ip\/[a-f0-9-]+\/[^)"\s]+\.(?:jpg|jpeg|png|webp)/i;

for (const slug of slugs) {
  const md = readFileSync(`.firecrawl/pages/${slug}.md`, "utf8");
  const match = md.match(IMG_RE);
  if (!match) {
    console.warn(`skip ${slug} — no image url`);
    continue;
  }
  const url = match[0];
  const out = join(DST, `${slug}.jpg`);
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`fail ${slug}: ${res.status}`);
    continue;
  }
  writeFileSync(out, Buffer.from(await res.arrayBuffer()));
  console.log(`saved ${out}`);
}
