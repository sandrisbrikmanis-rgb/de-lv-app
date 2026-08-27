#!/usr/bin/env node
"use strict";

/**
 * Import crowdin/ui/{lang}.json → languages/{lang}/ui.js
 *
 * Merges Crowdin keys onto the existing ui.js object so locale-only keys
 * (e.g. EN/ES +7 not present in LV Crowdin source) are never deleted.
 *
 * Default is --dry-run (no writes). Pass --write to update ui.js files.
 * Before --write, every locale is validated (placeholder multiset + HTML
 * tag structure). Any failure aborts with no files written.
 */

const fs = require("fs");
const path = require("path");
const {
  UI_LANGUAGES,
  UI_JS_REL,
  abs,
  loadUiObject,
  flattenUiStrings,
  parseCrowdinJson,
  mergeCrowdinImport,
  validateImportGuards,
  assertKeysPreserved,
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

Imports flat Crowdin JSON back to languages/{lang}/ui.js (merge, never drops keys).
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
    inDir,
    write,
  };
}

function prepareImport(lang, inDir) {
  const jsonPath = path.join(inDir, `${lang}.json`);
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Missing JSON for ${lang}: ${jsonPath}`);
  }
  const { obj: existing } = loadUiObject(UI_JS_REL(lang));
  const existingFlat = flattenUiStrings(existing);
  const crowdinFlat = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
  const guardErrors = validateImportGuards(existingFlat, crowdinFlat);
  if (guardErrors.length) {
    return { lang, ok: false, errors: guardErrors };
  }
  const merged = mergeCrowdinImport(existing, crowdinFlat, lang);
  const mergedFlat = flattenUiStrings(merged);
  const preserveErrors = assertKeysPreserved(existingFlat, mergedFlat, lang);
  if (preserveErrors.length) {
    return { lang, ok: false, errors: preserveErrors };
  }
  return {
    lang,
    ok: true,
    existingFlat,
    crowdinFlat,
    mergedFlat,
    merged,
    jsText: serializeUiJs(merged),
    outPath: abs(UI_JS_REL(lang)),
    crowdinKeys: Object.keys(crowdinFlat).length,
    preservedKeys: Object.keys(existingFlat).length,
    mergedKeys: Object.keys(mergedFlat).length,
  };
}

function main() {
  const { langs, inDir, write } = parseArgs(process.argv);
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
      const result = prepareImport(lang, inDir);
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
      ensureDir(path.dirname(row.outPath));
      fs.writeFileSync(row.outPath, row.jsText, "utf8");
    }
  }

  console.log(`${write ? "Imported" : "Validated import for"} ${prepared.length} UI locale(s) from ${inDir}`);
  for (const row of prepared) {
    console.log(
      `  ${row.lang}: crowdin ${row.crowdinKeys} keys merged → ${row.mergedKeys} total (${row.preservedKeys} preserved baseline) → ${row.outPath} (${write ? "written" : "dry-run"})`
    );
  }
  if (!write) {
    console.log("Dry-run only — pass --write to update languages/*/ui.js after guards pass");
  }
}

main();
