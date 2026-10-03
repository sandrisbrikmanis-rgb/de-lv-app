#!/usr/bin/env node
"use strict";

const { parseArgs } = require("./lib/card-translation-linguistic-audit/parse-args");
const { pickPrimaryEvidence, buildEvidenceForField } = require("./lib/card-translation-linguistic-audit/evidence-chain");
const { loadBilingualAuditRegistry } = require("./lib/card-translation-linguistic-audit/bilingual-catalog");
const { loadCombinedSourceRegistry } = require("./lib/card-translation-linguistic-audit/registry-load");
const { EVIDENCE_STATUS, SOURCE_TYPES } = require("./lib/card-translation-linguistic-audit/constants");
const { buildAdapterMatrix } = require("./lib/card-translation-linguistic-audit/adapter-matrix");

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

const RECORD_KEYS = [
  "level",
  "language",
  "cardId",
  "fieldPath",
  "currentValue",
  "deValue",
  "sourceType",
  "sourceName",
  "sourceUrl",
  "sourceDirection",
  "evidenceStatus",
  "evidenceNote",
];

function testParseArgs() {
  const a = parseArgs(["node", "run", "--level", "a1,a2", "--lang", "sl,ro", "--limit", "3"]);
  assert(a.levels.join(",") === "a1,a2", "levels");
  assert(a.langs.includes("sl") && a.langs.includes("ro"), "langs");
  assert(a.limit === 3, "limit");
  assert(a.dryRun === true && a.executeSources === false, "default dry-run");
  console.log("OK parseArgs multi level/lang");
}

function testPickPrimaryEvidence() {
  const steps = [
    { evidenceStatus: EVIDENCE_STATUS.ADAPTER_NOT_IMPLEMENTED },
    { evidenceStatus: EVIDENCE_STATUS.BILINGUAL_CATALOG_BOUND },
  ];
  const picked = pickPrimaryEvidence(steps);
  assert(picked.evidenceStatus === EVIDENCE_STATUS.BILINGUAL_CATALOG_BOUND, "prefer catalog bound");
  console.log("OK pickPrimaryEvidence");
}

async function testDryRunEvidenceShape() {
  const field = {
    level: "a1",
    language: "sl",
    cardId: "test-card",
    fieldPath: "a1.card.test-card.native",
    currentValue: "hiša",
    deValue: "Haus",
  };
  const rec = await buildEvidenceForField(field, { executeSources: false });
  for (const k of RECORD_KEYS) {
    assert(Object.prototype.hasOwnProperty.call(rec, k), `missing key ${k}`);
  }
  assert(rec.chainSteps.length >= 2, "chain must include target + de steps");
  assert(rec.dryRun === true, "dryRun flag");
  assert(rec.sourceType === SOURCE_TYPES.BILINGUAL_DICTIONARY, "primary bilingual in dry-run for sl");
  assert(rec.evidenceStatus === EVIDENCE_STATUS.BILINGUAL_CATALOG_BOUND, "sl catalog bound");
  console.log("OK dry-run evidence record shape (sl)");
}

function testRegistries() {
  const combined = loadCombinedSourceRegistry();
  assert(combined.pass, `combined registry: ${combined.errors.join(";")}`);
  const bi = loadBilingualAuditRegistry();
  assert(bi.pass, `bilingual catalogs: ${bi.errors.join(";")}`);
  for (const lang of ["nn", "pt", "ro", "sl", "sq", "sr", "sv"]) {
    assert(bi.byLang[lang], `bilingual binding for ${lang}`);
  }
  console.log("OK combined + bilingual registries");
}

function testAdapterMatrix() {
  const matrix = buildAdapterMatrix();
  assert(Array.isArray(matrix.rows), "matrix rows");
  assert(matrix.rows.length > 0, "matrix non-empty");
  console.log("OK adapter matrix");
}

async function main() {
  testParseArgs();
  testPickPrimaryEvidence();
  testRegistries();
  testAdapterMatrix();
  await testDryRunEvidenceShape();
  console.log(JSON.stringify({ gate: "test-card-translation-linguistic-audit", pass: true }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
