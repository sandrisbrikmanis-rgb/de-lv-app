#!/usr/bin/env node
"use strict";

/**
 * Export content datasets to flat Crowdin JSON (Phase 0: dry-run by default).
 * Does not modify production data files.
 *
 * Usage:
 *   node scripts/export-content-crowdin.js --group g2 --level a1 --lang lv
 *   node scripts/export-content-crowdin.js --group g2 --level a1 --lang et --out crowdin/content/g2/et-a1.json
 */

const fs = require("fs");
const path = require("path");
const {
  ROOT,
  G2_LEVELS,
  CROWDIN_SOURCE_LANG,
  CONTENT_LANGUAGES,
  exportContentToCrowdinJson,
  exportG2LevelFlat,
} = require("./lib/content-crowdin-bridge");

function parseArgs(argv) {
  let group = "g2";
  let level = "a1";
  let lang = CROWDIN_SOURCE_LANG;
  let out = null;
  let dryRun = true;

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--group" && argv[i + 1]) group = argv[++i];
    else if (arg === "--level" && argv[i + 1]) level = argv[++i];
    else if (arg === "--lang" && argv[i + 1]) lang = argv[++i];
    else if (arg === "--out" && argv[i + 1]) out = path.resolve(argv[++i]);
    else if (arg === "--write") dryRun = false;
    else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: node scripts/export-content-crowdin.js [--group g2] [--level a1] [--lang lv] [--out PATH] [--write]

Phase 0 default is dry-run (prints summary only). Pass --write to write JSON file.
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
    }
  }

  return { group, level, lang, out, dryRun };
}

function main() {
  const { group, level, lang, out, dryRun } = parseArgs(process.argv);

  if (!CONTENT_LANGUAGES.includes(lang)) {
    console.error(`Unknown language: ${lang}`);
    process.exit(1);
  }
  if (group !== "g2") {
    console.error("Phase 0 supports --group g2 only");
    process.exit(1);
  }
  if (!G2_LEVELS.includes(level)) {
    console.error(`Invalid level: ${level}`);
    process.exit(1);
  }

  const json = exportContentToCrowdinJson({ group, lang, level });
  const keyCount = Object.keys(exportG2LevelFlat(lang, level)).length;

  if (dryRun && !out) {
    console.log(`DRY-RUN export ${group}/${level} lang=${lang}: ${keyCount} keys (no file written)`);
    return;
  }

  const target = out || path.join(ROOT, "crowdin", "content", group, `${lang}-${level}.json`);
  if (!dryRun || out) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, json, "utf8");
    console.log(`Exported ${keyCount} keys → ${target}`);
  }
}

main();
