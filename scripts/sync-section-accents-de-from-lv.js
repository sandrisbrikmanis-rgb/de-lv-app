#!/usr/bin/env node
/**
 * Sync sectionAccents DE branches from LV-DE master into {LANG}-DE datasets.
 * Copies only locked DE highlight paths (de, word, DE-side colors); native
 * branches (lv, meaning, purple) are preserved.
 *
 * Usage:
 *   node scripts/sync-section-accents-de-from-lv.js
 *   node scripts/sync-section-accents-de-from-lv.js --lang=en
 */
const fs = require("fs");
const path = require("path");
const { ROOT, parseLangArg } = require("./lib/audit-common");
const { listTargetLanguages, syncLanguageSectionAccentsDeFromLv } = require("./lib/de-sync-core");

function resolveLanguages() {
  const langArg = parseLangArg("");
  if (langArg) return [langArg];
  return listTargetLanguages();
}

function mirrorDataToWww() {
  const src = path.join(ROOT, "data");
  const dst = path.join(ROOT, "www", "data");
  if (fs.existsSync(dst)) fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(src, dst, { recursive: true });
}

function main() {
  const langs = resolveLanguages();
  console.log(`Syncing sectionAccents DE from LV-DE for ${langs.length} language(s)...\n`);

  let totalCards = 0;
  for (const lang of langs) {
    try {
      const summary = syncLanguageSectionAccentsDeFromLv(lang);
      totalCards += summary.sectionAccentCards;
      console.log(`[${lang}] sectionAccent cards updated: ${summary.sectionAccentCards}`);
    } catch (err) {
      console.error(`[${lang}] FAILED: ${err.message}`);
      process.exitCode = 1;
    }
  }

  console.log("\nMirroring data/ → www/data/ ...");
  mirrorDataToWww();
  console.log(`Done. Total cards with sectionAccents DE sync: ${totalCards}`);
}

main();
