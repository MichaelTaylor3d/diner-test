import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const root = join(here, "..");
const OUT = join(root, "public/images/lux");
mkdirSync(OUT, { recursive: true });

// Duplicated from src/data/unsplash.ts to keep this script TS-free.
const luxImages = [
  ["kitchen.jpg", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"],
  ["room.jpg", "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"],
  ["neighborhood.jpg", "https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&w=1200&q=80"],
  ["signature.jpg", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=80"],
  ["hai-noon.jpg", "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80"],
  ["hidden-gem.jpg", "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80"],
  ["story-space.jpg", "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80"],
  ["story-plates.jpg", "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1400&q=80"],
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
