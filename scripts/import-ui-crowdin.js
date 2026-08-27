#!/usr/bin/env node
"use strict";

/**
 * Import crowdin/ui/{lang}.json → languages/{lang}/ui.js
 *
 * Surgical write: only string values that differ in Crowdin JSON are patched in
 * place. No key reorder, no full-file reformat, no quote style changes.
 *
 * Crowdin JSON keys must be a subset of the LV source key set (305 keys).
 * Locale-only target keys (e.g. EN/ES +7) are preserved untouched.
 *
 * Default is --dry-run (no writes). Pass --write to persist after all guards pass.
 * Any validation failure aborts with no files written.
 */

const fs = require("fs");
const path = require("path");
const {
  ROOT,
  UI_LANGUAGES,
  prepareUiCrowdinImport,
  ensureDir,
} = require("./lib/ui-crowdin-bridge");

function parseArgs(argv) {
  const langs = [];
  let root = ROOT;
  let inDir = null;
  let write = false;
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--root" && argv[i + 1]) {
      root = path.resolve(argv[++i]);
    } else if (argv[i] === "--in" && argv[i + 1]) {
      inDir = path.resolve(argv[++i]);
    } else if (argv[i] === "--lang" && argv[i + 1]) {
      langs.push(argv[++i]);
    } else if (argv[i] === "--write") {
      write = true;
    } else if (argv[i] === "--help" || argv[i] === "-h") {
      console.log(`Usage: node scripts/import-ui-crowdin.js [--lang CODE] [--in DIR] [--root DIR] [--write]

Imports flat Crowdin JSON back to languages/{lang}/ui.js using surgical in-place patches.
Dry-run by default; pass --write to persist after guard validation passes for all locales.
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${argv[i]}`);
      process.exit(1);
    }
  }
  return {
    langs: langs.length ? langs : UI_LANGUAGES,
    root,
    inDir: inDir || path.join(root, "crowdin", "ui"),
    write,
  };
}

function main() {
  const { langs, root, inDir, write } = parseArgs(process.argv);
  if (!fs.existsSync(inDir)) {
    console.error(`Input directory not found: ${inDir}`);
    process.exit(1);
  }

  for (const lang of langs) {
    if (!UI_LANGUAGES.includes(lang)) {
      console.error(`Unknown UI language: ${lang}`);
      process.exit(1);
    }
  }

  const prepared = [];
  const failures = [];

  for (const lang of langs) {
    try {
      const result = prepareUiCrowdinImport(lang, { root, inDir });
      if (!result.ok) {
        failures.push(result);
      } else {
        prepared.push(result);
      }
    } catch (err) {
      failures.push({ lang, ok: false, errors: [err.message] });
    }
  }

  if (failures.length) {
    console.error(`UI Crowdin import validation FAILED (${failures.length} locale(s)); nothing written:`);
    for (const fail of failures) {
      console.error(`  ${fail.lang}:`);
      for (const msg of fail.errors) {
        console.error(`    - ${msg}`);
      }
    }
    process.exit(1);
  }

  if (write) {
    for (const row of prepared) {
      if (row.patch.changed) {
        ensureDir(path.dirname(row.outPath));
        fs.writeFileSync(row.outPath, row.patch.content, "utf8");
      }
    }
  }

  console.log(`${write ? "Imported" : "Validated import for"} ${prepared.length} UI locale(s) from ${inDir}`);
  for (const row of prepared) {
    console.log(
      `  ${row.lang}: crowdin ${row.crowdinKeys} keys, ${row.changedKeys} changed, ${row.mergedKeys} total → ${row.outPath} (${write ? "written" : "dry-run"})`
    );
  }
  if (!write) {
    console.log("Dry-run only — pass --write to patch changed string values in languages/{lang}/ui.js");
  }
}

main();
