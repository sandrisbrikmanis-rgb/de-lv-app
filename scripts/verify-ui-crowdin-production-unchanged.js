#!/usr/bin/env node
"use strict";

/**
 * Proves production ui.js files are unchanged by the bridge workflow:
 * 1. Merge-import each locale's own crowdin/ui/{lang}.json → semantic identity.
 * 2. Guard validation passes for every locale.
 * 3. git working tree for languages/{lang}/ui.js is clean (no production diffs in PR).
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  ROOT,
  UI_LANGUAGES,
  UI_JS_REL,
  abs,
  loadUiObject,
  flattenUiStrings,
  parseCrowdinJson,
  mergeCrowdinImport,
  validateImportGuards,
  deepEqualSemantic,
} = require("./lib/ui-crowdin-bridge");

function loadCrowdinFlat(lang) {
  const jsonPath = abs(path.join("crowdin", "ui", `${lang}.json`));
  return parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
}

function main() {
  const failures = [];
  let passed = 0;

  for (const lang of UI_LANGUAGES) {
    const { obj: original } = loadUiObject(UI_JS_REL(lang));
    const existingFlat = flattenUiStrings(original);
    const crowdinFlat = loadCrowdinFlat(lang);
    const guardErrors = validateImportGuards(existingFlat, crowdinFlat);
    if (guardErrors.length) {
      failures.push(`${lang}: guard validation failed: ${guardErrors[0]}`);
      continue;
    }
    const merged = mergeCrowdinImport(original, crowdinFlat, lang);
    const diff = deepEqualSemantic(original, merged);
    if (diff) {
      failures.push(`${lang}: merge import changed semantic content at ${diff}`);
      continue;
    }
    passed++;
    console.log(`OK ${lang}: merge import semantically identical (${Object.keys(existingFlat).length} keys)`);
  }

  let gitDiff = "";
  try {
    gitDiff = execSync("git diff --stat -- languages/", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch (err) {
    failures.push(`git diff failed: ${err.message}`);
  }

  if (gitDiff) {
    failures.push(`production ui.js files have uncommitted diffs:\n${gitDiff}`);
  } else {
    console.log("OK git: languages/*/ui.js production changes = 0");
  }

  console.log("");
  if (failures.length) {
    console.error(`UI Crowdin production unchanged check FAILED (${passed}/${UI_LANGUAGES.length} locales ok):`);
    for (const msg of failures) {
      console.error(`  - ${msg}`);
    }
    process.exit(1);
  }

  console.log(
    `UI Crowdin production unchanged check passed: ${passed}/${UI_LANGUAGES.length} locales, production UI changes = 0.`
  );
}

main();
