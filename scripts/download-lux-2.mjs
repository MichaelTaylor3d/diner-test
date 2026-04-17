import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const root = join(here, "..");
const OUT = join(root, "public/images/lux");
mkdirSync(OUT, { recursive: true });

// Must stay in sync with new entries in src/data/unsplash.ts.
const luxImages = [
  ["neighborhood-street.jpg", "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1400&q=80"],
  ["ambient-coffee.jpg", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"],
  ["ambient-banquette.jpg", "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80"],
  ["ambient-sign.jpg", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"],
  ["staff-portrait.jpg", "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1400&q=80"],
  ["purveyor-grain.jpg", "https://images.unsplash.com/photo-1565687981296-535f09db714e?auto=format&fit=crop&w=1200&q=80"],
  ["purveyor-sausage.jpg", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"],
  ["purveyor-bread.jpg", "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"],
  ["purveyor-produce.jpg", "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"],
  ["purveyor-eggs.jpg", "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=1200&q=80"],
  ["purveyor-farm.jpg", "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"],
];

for (const [filename, url] of luxImages) {
  const out = join(OUT, filename);
  if (existsSync(out)) {
    console.log(`skip ${filename} — exists`);
    continue;
  }
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`fail ${filename}: ${res.status}`);
    continue;
  }
  writeFileSync(out, Buffer.from(await res.arrayBuffer()));
  console.log(`saved ${out}`);
}
