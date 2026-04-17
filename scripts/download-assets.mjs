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
