#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { dataRel, loadG2Level } = require("./lib/content-crowdin-bridge/roundtrip");
const { loadProductionA1Words } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const {
  AUDIT_LANGUAGES,
  EXPECTED_CARD_COUNT,
  EXPECTED_APP_LANGUAGES,
  AUDIT_SOURCE,
} = require("./lib/g2-a1-production-current/constants");
const { productionA1Rel, wwwA1Rel } = require("./lib/g2-a1-production-current/paths");
const { buildProductionFileSetInventory } = require("./lib/g2-a1-production-current/inventory");
const { runPreflight } = require("./lib/g2-a1-production-current/preflight");
const { runDryRun } = require("./lib/g2-a1-production-current/dry-run");
const { buildAuditRowsForLanguage } = require("./lib/g2-a1-production-current/audit-rows");
const { validateAuditRowSchema } = require("./lib/g2-a1-production-current/artifacts");

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function testLvAndEtPaths() {
  assert(productionA1Rel("lv") === "data/a1.js", `lv path ${productionA1Rel("lv")}`);
  assert(productionA1Rel("et") === "data/et/a1.js", `et path ${productionA1Rel("et")}`);
  assert(dataRel("lv", "a1.js") === "data/a1.js", "dataRel lv");
  assert(wwwA1Rel("lv") === "www/data/a1.js", "www lv");
  assert(wwwA1Rel("et") === "www/data/et/a1.js", "www et");
  console.log("OK production paths lv + et");
}

function testAllLanguagesLoadProduction() {
  assert(AUDIT_LANGUAGES.length === EXPECTED_APP_LANGUAGES, `lang count ${AUDIT_LANGUAGES.length}`);
  const set = new Set(AUDIT_LANGUAGES);
  assert(set.size === AUDIT_LANGUAGES.length, "duplicate audit languages");
  for (const lang of AUDIT_LANGUAGES) {
    const rel = productionA1Rel(lang);
    assert(!rel.includes("crowdin-staging"), `staging path for ${lang}`);
    assert(!rel.startsWith("www/"), `www used as loader for ${lang}`);
    const abs = path.join(ROOT, rel);
    assert(fs.existsSync(abs), `missing ${rel}`);
    const cards = loadG2Level(lang, "a1");
    assert(Array.isArray(cards) && cards.length === EXPECTED_CARD_COUNT, `${lang} cards ${cards?.length}`);
    const words = loadProductionA1Words(lang);
    assert(words != null && words.length === EXPECTED_CARD_COUNT, `loadProductionA1Words ${lang}`);
  }
  console.log(`OK all ${EXPECTED_APP_LANGUAGES} languages load ${EXPECTED_CARD_COUNT} production cards`);
}

function testInventory64Gate() {
  const inv = buildProductionFileSetInventory();
  assert(inv.gate.DATA_A1_FILES === 32, "DATA_A1_FILES");
  assert(inv.gate.WWW_A1_FILES === 32, "WWW_A1_FILES");
  assert(inv.gate.TOTAL_A1_FILE_SET === 64, "TOTAL_A1_FILE_SET");
  assert(inv.gate.MISSING_MIRRORS === 0, "MISSING_MIRRORS");
  assert(inv.gate.ORPHAN_MIRRORS === 0, "ORPHAN_MIRRORS");
  assert(inv.gate.MIRROR_MISMATCHES === 0, "MIRROR_MISMATCHES");
  assert(inv.gate.pass, JSON.stringify(inv.gate));
  console.log("OK 64-file inventory gate");
}

function testAuditRowSchema() {
  const inv = buildProductionFileSetInventory();
  const sha = inv.gate.productionFileSetSha256;
  const row = buildAuditRowsForLanguage("lv", inv.rows[0].dataSha256, sha)[0];
  const v = validateAuditRowSchema(row);
  assert(v.pass, JSON.stringify(v));
  assert(row.auditSource === AUDIT_SOURCE, "auditSource");
  assert(row.productionFile === "data/a1.js", "productionFile lv");
  console.log("OK audit row schema (production-current fields)");
}

function testPreflightAndDryRun() {
  const pre = runPreflight();
  assert(pre.pass, JSON.stringify(pre.blockers));
  const dry = runDryRun();
  assert(dry.pass, dry.phase);
  assert(dry.rows.length > 0, "dry-run rows");
  assert(dry.summary.linguisticVerdictsGenerated === 0, "no linguistic verdicts in dry-run");
  console.log(`OK preflight + dry-run (${dry.rows.length} rows)`);
}

function main() {
  testLvAndEtPaths();
  testAllLanguagesLoadProduction();
  testInventory64Gate();
  testAuditRowSchema();
  testPreflightAndDryRun();
  console.log("ALL G2 A1 production-current orchestrator tests passed");
}

main();
