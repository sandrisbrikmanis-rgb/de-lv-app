#!/usr/bin/env node
"use strict";

/**
 * Export languages/{lang}/ui.js → crowdin/ui/{lang}.json (deterministic flat JSON).
 * Does not modify source ui.js files.
 */

const fs = require("fs");
const path = require("path");
const {
  UI_LANGUAGES,
  UI_JS_REL,
  UI_JSON_REL,
  abs,
  getLvSourceKeySet,
  loadUiObject,
  exportUiToCrowdinJson,
  parseCrowdinJson,
  ensureDir,
} = require("./lib/ui-crowdin-bridge");

function parseArgs(argv) {
  const langs = [];
  let outDir = abs(path.join("crowdin", "ui"));
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--out" && argv[i + 1]) {
      outDir = path.resolve(argv[++i]);
    } else if (argv[i] === "--lang" && argv[i + 1]) {
      langs.push(argv[++i]);
    } else if (argv[i] === "--help" || argv[i] === "-h") {
      console.log(`Usage: node scripts/export-ui-crowdin.js [--lang CODE] [--out DIR]

Exports all ${UI_LANGUAGES.length} UI locales by default to crowdin/ui/{lang}.json.
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${argv[i]}`);
      process.exit(1);
    }
  }
  return {
    langs: langs.length ? langs : UI_LANGUAGES,
    outDir,
  };
}

function main() {
  const { langs, outDir } = parseArgs(process.argv);
  ensureDir(outDir);

  const lvSourceKeys = getLvSourceKeySet();
  const summary = [];
  for (const lang of langs) {
    if (!UI_LANGUAGES.includes(lang)) {
      console.error(`Unknown UI language: ${lang}`);
      process.exit(1);
    }
    const { obj } = loadUiObject(UI_JS_REL(lang));
    const json = exportUiToCrowdinJson(obj, { lvSourceKeys });
    const outPath = path.join(outDir, `${lang}.json`);
    fs.writeFileSync(outPath, json, "utf8");
    const exportedKeys = Object.keys(parseCrowdinJson(json)).length;
    summary.push({ lang, keys: exportedKeys, outPath });
  }

  console.log(`Exported ${summary.length} UI locale(s) to ${outDir}`);
  for (const row of summary) {
    console.log(`  ${row.lang}: ${row.keys} keys → ${row.outPath}`);
  }
}

main();
