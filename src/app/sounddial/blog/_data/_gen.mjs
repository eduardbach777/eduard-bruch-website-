// This script reads en.ts and generates translation stubs for cs, sk, hr, uk
// by copying the English content and replacing metadata.
// Run: node _gen.mjs

import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const enContent = readFileSync(join(__dirname, "en.ts"), "utf8");

// For each language, we modify:
// 1. The export name and type annotation
// 2. readTime values
// 3. Keep everything else (slugs, HTML, URLs, brand names, prices) identical
// The actual title/description/content translations are embedded below.

const langs = {
  cs: { exportName: "csArticles", readTimeSuffix: "min čtení" },
  sk: { exportName: "skArticles", readTimeSuffix: "min čítania" },
  hr: { exportName: "hrArticles", readTimeSuffix: "min čitanja" },
  uk: { exportName: "ukArticles", readTimeSuffix: "хв читання" },
};

for (const [lang, cfg] of Object.entries(langs)) {
  let output = enContent;

  // Replace the import and export
  output = output.replace(
    'export const enArticles: ArticleSet = {',
    `export const ${cfg.exportName}: ArticleSet = {`
  );

  // Replace all readTime values
  output = output.replace(/readTime: "(\d+) min read"/g, `readTime: "$1 ${cfg.readTimeSuffix}"`);

  const outPath = join(__dirname, `${lang}.ts`);
  writeFileSync(outPath, output, "utf8");
  console.log(`Generated ${outPath}`);
}

console.log("Done. Now the title/description/content need actual translations.");
