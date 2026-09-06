#!/usr/bin/env node
"use strict";

const { buildDedupKey, normalizeFinding } = require("./lib/content-discovery/phase1-findings-validation");
const { deduplicateFindings } = require("./lib/content-discovery/phase1-findings-dedup");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function baseFinding(overrides = {}) {
  return normalizeFinding(
    {
      scopeId: "g2/b1/lv",
      group: "g2",
      dataset: "b1",
      lang: "lv",
      cardId: "Gehalt",
      fieldPath: "lv",
      category: "TRANSLATION",
      severity: "MEDIUM",
      classificationStatus: "VALIDATED_REAL_FINDING",
      current: "algo",
      source: "gpt-5.6-luna",
      ...overrides,
    },
    0,
  );
}

function testGehaltCollisionSameScope() {
  const a = baseFinding({ objectIndex: 1027, cardId: "Gehalt" });
  const b = baseFinding({ objectIndex: 1028, cardId: "Gehalt" });
  assert(buildDedupKey(a) !== buildDedupKey(b), "Gehalt idx 1027 vs 1028 remain distinct");
  const dedup = deduplicateFindings([a, b]);
  assert(dedup.findings.length === 2, "two Gehalt findings in same scope");
}

function testSameCardDifferentLangs() {
  const findings = ["lv", "et", "de"].map((lang, i) =>
    baseFinding({ lang, scopeId: `g2/b1/${lang}`, cardId: "test-card", objectIndex: 1, auditId: `PH1-${i}` }),
  );
  const keys = new Set(findings.map((f) => buildDedupKey(f)));
  assert(keys.size === 3, "same card across langs stays separate");
  const dedup = deduplicateFindings(findings);
  assert(dedup.findings.length === 3, "three lang findings preserved");
}

function testDeterministicPlusLunaSameObject() {
  const det = baseFinding({
    source: "deterministic/g2-b1",
    objectIndex: 5,
    cardId: "wort",
    classificationStatus: "VALIDATED_REAL_FINDING",
  });
  const luna = baseFinding({
    source: "gpt-5.6-luna",
    objectIndex: 5,
    cardId: "wort",
    classificationStatus: "VALIDATED_REAL_FINDING",
  });
  const dedup = deduplicateFindings([det, luna]);
  assert(dedup.findings.length === 1, "deterministic+luna same object => one canonical");
  assert(luna.classificationStatus === "FALSE_POSITIVE" || det.classificationStatus === "VALIDATED_REAL_FINDING", "luna folded to deterministic");
}

function testDeterministicPlusLunaDifferentLangs() {
  const det = baseFinding({ lang: "lv", scopeId: "g2/b1/lv", source: "deterministic/g2-b1", objectIndex: 1 });
  const luna = baseFinding({ lang: "et", scopeId: "g2/b1/et", source: "gpt-5.6-luna", objectIndex: 1 });
  const dedup = deduplicateFindings([det, luna]);
  assert(dedup.findings.length === 2, "different langs remain separate");
}

function testDeterminism() {
  const input = [
    baseFinding({ objectIndex: 1, auditId: "PH1-000001" }),
    baseFinding({ objectIndex: 2, auditId: "PH1-000002", cardId: "Gehalt" }),
  ];
  const a = deduplicateFindings(input);
  const b = deduplicateFindings(input);
  assert(JSON.stringify(a.findings) === JSON.stringify(b.findings), "dedup deterministic diff 0");
}

function main() {
  testGehaltCollisionSameScope();
  testSameCardDifferentLangs();
  testDeterministicPlusLunaSameObject();
  testDeterministicPlusLunaDifferentLangs();
  testDeterminism();
  console.log(`R-DEDUP-001: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
