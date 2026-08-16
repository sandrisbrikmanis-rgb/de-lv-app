#!/usr/bin/env node
/**
 * Sync German (DE) content from LV-DE master into all {LANG}-DE datasets.
 * LV-DE (data/*.js) is read-only — never modified.
 *
 * Usage:
 *   node scripts/sync-de-from-lv.js              # all languages
 *   node scripts/sync-de-from-lv.js --lang=en    # single language
 */
const fs = require("fs");
const path = require("path");
const { ROOT, parseLangArg } = require("./lib/audit-common");
const { listTargetLanguages, loadLvTrainingCards, syncLanguageDeFromLv } = require("./lib/de-sync-core");

function parseAllArg() {
  return process.argv.slice(2).includes("--all");
}

function resolveLanguages() {
  const langArg = parseLangArg("");
  if (langArg && langArg !== "lt") return [langArg];
  if (parseAllArg() || !langArg) return listTargetLanguages();
  return [langArg];
}

function mirrorDataToWww() {
  const src = path.join(ROOT, "data");
  const dst = path.join(ROOT, "www", "data");
  if (fs.existsSync(dst)) fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(src, dst, { recursive: true });
}

function main() {
  const langs = resolveLanguages();
  const lvTrainingCards = loadLvTrainingCards();

  console.log(`Syncing DE from LV-DE master for ${langs.length} language(s)...`);
  console.log("LV-DE master is read-only — no changes to data/a1.js … data/courseLessons.js\n");

  const results = [];
  for (const lang of langs) {
    try {
      const summary = syncLanguageDeFromLv(lang, lvTrainingCards);
      results.push(summary);
      console.log(
        `[${lang}] words=${summary.wordEntries} sentences=${summary.sentences} verbs=${summary.verbs} ` +
          `dialogue=${summary.dialogueIds} kurss=${summary.courseLessons ? "yes" : "skip"} ` +
          `training=${summary.courseTrainingCards ? "yes" : "skip"}`
      );
    } catch (err) {
      console.error(`[${lang}] FAILED: ${err.message}`);
      results.push({ lang, error: err.message });
    }
  }

  console.log("\nMirroring data/ → www/data/ ...");
  mirrorDataToWww();
  console.log("Done.\n");

  const failed = results.filter((r) => r.error);
  if (failed.length) {
    console.error(`${failed.length} language(s) failed.`);
    process.exit(1);
  }

  console.log(`Successfully synced ${results.length} language(s).`);
}

main();
