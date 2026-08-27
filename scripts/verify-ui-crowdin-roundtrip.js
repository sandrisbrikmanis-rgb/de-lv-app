#!/usr/bin/env node
"use strict";

/**
 * Verify JS → JSON → JS round-trip preserves 100% semantic content
 * for every UI locale (all 32 languages/{lang}/ui.js files).
 *
 * Uses in-memory round-trip only; never writes production ui.js files.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const {
  ROOT,
  UI_LANGUAGES,
  UI_JS_REL,
  loadUiObject,
  roundTripUiObject,
  deepEqualSemantic,
  serializeUiJs,
} = require("./lib/ui-crowdin-bridge");

function parseArgs(argv) {
  const langs = [];
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--lang" && argv[i + 1]) {
      langs.push(argv[++i]);
    } else if (argv[i] === "--help" || argv[i] === "-h") {
      console.log(`Usage: node scripts/verify-ui-crowdin-roundtrip.js [--lang CODE]

Verifies semantic round-trip for all ${UI_LANGUAGES.length} UI locales by default.
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${argv[i]}`);
      process.exit(1);
    }
  }
  return langs.length ? langs : UI_LANGUAGES;
}

function loadFromJsText(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS;
}

function main() {
  const langs = parseArgs(process.argv);
  const failures = [];
  let passed = 0;

  for (const lang of langs) {
    if (!UI_LANGUAGES.includes(lang)) {
      console.error(`Unknown UI language: ${lang}`);
      process.exit(1);
    }

    const rel = UI_JS_REL(lang);
    const fullPath = path.join(ROOT, rel);
    if (!fs.existsSync(fullPath)) {
      failures.push(`${lang}: missing ${rel}`);
      continue;
    }

    const { obj: original } = loadUiObject(rel);
    const { reimported, json } = roundTripUiObject(original);

    const objectDiff = deepEqualSemantic(original, reimported);
    if (objectDiff) {
      failures.push(`${lang}: object round-trip mismatch at ${objectDiff}`);
      continue;
    }

    const reserialized = loadFromJsText(serializeUiJs(reimported));
    const reserializeDiff = deepEqualSemantic(original, reserialized);
    if (reserializeDiff) {
      failures.push(`${lang}: serialize round-trip mismatch at ${reserializeDiff}`);
      continue;
    }

    const keyCount = Object.keys(JSON.parse(json)).length;
    passed++;
    console.log(`OK ${lang}: ${keyCount} string keys, semantic round-trip identical`);
  }

  console.log("");
  if (failures.length) {
    console.error(`UI Crowdin round-trip FAILED (${passed}/${langs.length} passed):`);
    for (const msg of failures) {
      console.error(`  - ${msg}`);
    }
    process.exit(1);
  }

  console.log(`UI Crowdin round-trip passed: ${passed}/${langs.length} languages, 100% semantic identity.`);
}

main();
