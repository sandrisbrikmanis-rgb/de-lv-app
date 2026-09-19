#!/usr/bin/env node
"use strict";

const assert = require("assert");
const { verifyEmbeddedLanguageRegistry, parseRegistryTable } = require("./lib/official-language-sources-registry");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APVIENOTS = path.join(ROOT, "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md");

function main() {
  const result = verifyEmbeddedLanguageRegistry(ROOT);
  assert.strictEqual(result.pass, true, JSON.stringify(result, null, 2));
  assert.strictEqual(result.EMBEDDED_LANGUAGE_REGISTRY_COUNT, 33);
  assert.strictEqual(result.LANGUAGE_CODE_DUPLICATES, 0);
  assert.strictEqual(result.MISSING_LANGUAGE_CODES, 0);
  assert.strictEqual(result.UNKNOWN_LANGUAGE_CODES, 0);
  assert.strictEqual(result.elGrMappingPass, true);
  assert.strictEqual(result.dePresentPass, true);
  assert.strictEqual(result.bgPresentPass, true);
  assert.strictEqual(result.emptyMandatoryFieldCount, 0);
  assert.strictEqual(result.invalidUrlFieldCount, 0);

  const parsed = parseRegistryTable(fs.readFileSync(APVIENOTS, "utf8"));
  assert.strictEqual(parsed.rows.length, 33);
  console.log(JSON.stringify({ pass: true, rows: parsed.rows.length }, null, 2));
}

main();
