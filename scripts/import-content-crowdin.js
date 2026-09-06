#!/usr/bin/env node
"use strict";

/**
 * Staging-only import for Crowdin content translations (Phase 2 G2/A1).
 *
 * Reads flat Crowdin JSON from an explicit staging directory and writes PROPOSED
 * payloads under the same staging tree. Never writes data/**, www/data/**, or
 * languages/** production paths. No --write-to-production or --force options.
 */

const fs = require("fs");
const path = require("path");
const {
  TARGET_LANGUAGES,
  DEFAULT_STAGING_ROOT,
  prepareG2A1StagingImport,
  writeG2A1StagingImport,
} = require("./lib/content-crowdin-bridge");

function parseArgs(argv) {
  let group = "g2";
  let level = "a1";
  let lang = null;
  let stagingDir = DEFAULT_STAGING_ROOT;
  let write = false;

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--group" && argv[i + 1]) group = argv[++i];
    else if (arg === "--level" && argv[i + 1]) level = argv[++i];
    else if (arg === "--lang" && argv[i + 1]) lang = argv[++i];
    else if (arg === "--staging-dir" && argv[i + 1]) stagingDir = path.resolve(argv[++i]);
    else if (arg === "--write") write = true;
    else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: node scripts/import-content-crowdin.js --lang CODE --staging-dir DIR [--group g2] [--level a1] [--write]

Staging-only import. Writes PROPOSED payloads under staging-dir/g2/a1/{lang}/proposed.json.
Default is validation dry-run (no files written).
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
    }
  }

  if (!lang) {
    console.error("--lang is required");
    process.exit(1);
  }
  if (group !== "g2" || level !== "a1") {
    console.error("Only --group g2 --level a1 is supported in Phase 2 G2/A1 infra");
    process.exit(1);
  }
  if (!TARGET_LANGUAGES.includes(lang)) {
    console.error(`Unknown target language: ${lang}`);
    process.exit(1);
  }

  return { group, level, lang, stagingDir, write };
}

function main() {
  const { lang, stagingDir, write } = parseArgs(process.argv);

  if (!fs.existsSync(stagingDir)) {
    console.error(`Staging directory not found: ${stagingDir}`);
    process.exit(1);
  }

  const prepared = prepareG2A1StagingImport({ lang, stagingDir });
  if (!prepared.ok) {
    console.error(`Content Crowdin staging import validation FAILED for ${lang}:`);
    for (const msg of prepared.errors) console.error(`  - ${msg}`);
    process.exit(1);
  }

  if (write) {
    writeG2A1StagingImport(prepared);
  }

  console.log(
    `${write ? "Wrote" : "Validated"} G2/A1 staging import for ${lang}: ${prepared.keyCount} keys, ${prepared.ownerDecisionRequired} OWNER_DECISION_REQUIRED`,
  );
  console.log(`  input:  ${prepared.inputPath}`);
  console.log(`  output: ${prepared.outPath} (${write ? "written" : "dry-run"})`);
  if (!write) {
    console.log("Dry-run only — pass --write to persist PROPOSED staging payload");
  }
}

main();
