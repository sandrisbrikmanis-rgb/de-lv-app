#!/usr/bin/env node
"use strict";

/**
 * Import crowdin/ui/{lang}.json → languages/{lang}/ui.js
 *
 * Default is --dry-run (no writes). Pass --write to update ui.js files.
 * Regenerates canonical JS (JSON.stringify); use only after Crowdin edits.
 */

const fs = require("fs");
const path = require("path");
const {
  UI_LANGUAGES,
  UI_JS_REL,
  abs,
  parseCrowdinJson,
  importCrowdinJsonToUi,
  serializeUiJs,
  ensureDir,
} = require("./lib/ui-crowdin-bridge");

function parseArgs(argv) {
  const langs = [];
  let inDir = abs(path.join("crowdin", "ui"));
  let write = false;
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--in" && argv[i + 1]) {
      inDir = path.resolve(argv[++i]);
    } else if (argv[i] === "--lang" && argv[i + 1]) {
      langs.push(argv[++i]);
    } else if (argv[i] === "--write") {
      write = true;
    } else if (argv[i] === "--help" || argv[i] === "-h") {
      console.log(`Usage: node scripts/import-ui-crowdin.js [--lang CODE] [--in DIR] [--write]

Imports flat Crowdin JSON back to languages/{lang}/ui.js.
Dry-run by default; pass --write to persist changes.
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${argv[i]}`);
      process.exit(1);
    }
  }
  return {
    langs: langs.length ? langs : UI_LANGUAGES,
    inDir,
    write,
  };
}

function main() {
  const { langs, inDir, write } = parseArgs(process.argv);
  if (!fs.existsSync(inDir)) {
    console.error(`Input directory not found: ${inDir}`);
    process.exit(1);
  }

  const summary = [];
  for (const lang of langs) {
    if (!UI_LANGUAGES.includes(lang)) {
      console.error(`Unknown UI language: ${lang}`);
      process.exit(1);
    }
    const jsonPath = path.join(inDir, `${lang}.json`);
    if (!fs.existsSync(jsonPath)) {
      console.error(`Missing JSON for ${lang}: ${jsonPath}`);
      process.exit(1);
    }
    const flat = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
    const uiObj = importCrowdinJsonToUi(flat, lang);
    const jsText = serializeUiJs(uiObj);
    const outRel = UI_JS_REL(lang);
    const outPath = abs(outRel);

    if (write) {
      ensureDir(path.dirname(outPath));
      fs.writeFileSync(outPath, jsText, "utf8");
    }

    summary.push({
      lang,
      keys: Object.keys(flat).length,
      outPath,
      mode: write ? "written" : "dry-run",
    });
  }

  console.log(`${write ? "Imported" : "Validated import for"} ${summary.length} UI locale(s) from ${inDir}`);
  for (const row of summary) {
    console.log(`  ${row.lang}: ${row.keys} keys → ${row.outPath} (${row.mode})`);
  }
  if (!write) {
    console.log("Dry-run only — pass --write to update languages/*/ui.js");
  }
}

main();
