#!/usr/bin/env node
"use strict";

const { ROOT } = require("./lib/audit-common");
const {
  exportG2LevelFlat,
  loadG2Level,
  buildG2A1AuditKeyRegistry,
  resolveG2A1AuditFinding,
  aggregateFindingsByCrowdinKey,
  crowdinLocaleToRepo,
  CROWDIN_TARGET_LOCALE_IDS,
} = require("./lib/content-crowdin-bridge");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function baseFinding(overrides = {}) {
  return {
    group: "g2",
    dataset: "a1",
    lang: "bg",
    cardId: "ab",
    objectIndex: 17,
    fieldPath: "lv",
    productionFile: "a1.js",
    classificationStatus: "VALIDATED_REAL_FINDING",
    auditId: "TEST-0001",
    severity: "HIGH",
    category: "MISTRANSLATION",
    ...overrides,
  };
}

function buildRegistry() {
  const cards = loadG2Level("lv", "a1");
  const lvFlat = exportG2LevelFlat("lv", "a1");
  return buildG2A1AuditKeyRegistry({ level: "a1", cards, lvFlat });
}

function crowdinLocaleForRepoLang(lang) {
  const hit = CROWDIN_TARGET_LOCALE_IDS.find((id) => crowdinLocaleToRepo(id) === lang);
  if (!hit) throw new Error(`no crowdin locale for ${lang}`);
  return hit;
}

function testLeafNative() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ fieldPath: "lv" }), reg);
  assert(m.status === "MAPPED_UNIQUE", `lv: ${m.status}`);
  assert(m.keys[0] === "a1.card.a1-ab.native", m.keys[0]);
}

function testContainerComparison() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ fieldPath: "study.comparison" }), reg);
  assert(m.status === "MAPPED_EXPLICIT_SET", `comparison: ${m.status}`);
  assert(m.keys.length >= 2, "comparison expansion");
  assert(m.keys.every((k) => k.includes("study.comparison")), m.keys.join(","));
}

function testContainerStudy() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ fieldPath: "study" }), reg);
  assert(m.status === "MAPPED_EXPLICIT_SET", `study: ${m.status}`);
  assert(m.keys.length > 1, "study container");
}

function testCompoundLvStudy() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ fieldPath: "lv; study" }), reg);
  assert(m.status === "MAPPED_EXPLICIT_SET", `lv;study: ${m.status}`);
  assert(m.keys.includes("a1.card.a1-ab.native"), "includes native");
}

function testWildcardComparisonExample() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(
    baseFinding({ cardId: "Eis", objectIndex: 157, fieldPath: "study.comparison[].example" }),
    reg,
  );
  assert(
    m.status === "MAPPED_EXPLICIT_SET" || m.status === "GROUP_REVIEW_REQUIRED",
    `wildcard: ${m.status}`,
  );
  if (m.status === "MAPPED_EXPLICIT_SET") {
    assert(m.keys.every((k) => k.endsWith(".example")), m.keys.join(","));
  }
}

function testWildcardExamplesLv() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(
    baseFinding({ cardId: "klein", objectIndex: 6, fieldPath: "study.examples[].lv" }),
    reg,
  );
  assert(m.status === "MAPPED_EXPLICIT_SET", `examples[]: ${m.status}`);
  assert(m.keys.every((k) => k.includes("study.examples") && k.endsWith(".native")), m.keys.join(","));
}

function testIndexedComparisonMeaning() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(
    baseFinding({ fieldPath: "study.comparison[1].meaning" }),
    reg,
  );
  assert(m.status === "MAPPED_UNIQUE", `indexed meaning: ${m.status}`);
}

function testSectionAccentsGroupReview() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(
    baseFinding({ cardId: "klein", objectIndex: 6, fieldPath: "study.sectionAccents.examples" }),
    reg,
  );
  assert(m.status === "GROUP_REVIEW_REQUIRED", `sectionAccents: ${m.status}`);
  assert(m.status !== "MAPPED_UNIQUE", "must not auto-map sectionAccents");
}

function testStringExplanationGroupReview() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(
    baseFinding({ cardId: "Liter", objectIndex: 382, fieldPath: "study.explanation" }),
    reg,
  );
  assert(m.status === "GROUP_REVIEW_REQUIRED", `string explanation: ${m.status}`);
  assert(m.status !== "MAPPED_UNIQUE", "must not auto-map string explanation");
}

function testNegativeWrongScope() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ group: "g2", dataset: "b1" }), reg);
  assert(m.status === "UNMATCHED", `scope: ${m.status}`);
  assert(m.status !== "MAPPED_UNIQUE", "wrong scope");
}

function testNegativeWrongObjectIndex() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ objectIndex: 99999, fieldPath: "lv" }), reg);
  assert(m.status === "SOURCE_KEY_MISSING", `index: ${m.status}`);
  assert(m.status !== "MAPPED_UNIQUE", "bad index");
}

function testNegativeWrongCardId() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ cardId: "definitely-wrong-card", fieldPath: "lv" }), reg);
  assert(m.status === "AMBIGUOUS", `card: ${m.status}`);
  assert(m.status !== "MAPPED_UNIQUE", "card mismatch");
}

function testNegativeWrongSourceFile() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ productionFile: "b2.js", fieldPath: "lv" }), reg);
  assert(m.status === "UNMATCHED", `source file: ${m.status}`);
}

function testNegativeNonexistentField() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ fieldPath: "study.nonexistent.field" }), reg);
  assert(m.status === "GROUP_REVIEW_REQUIRED" || m.status === "UNMATCHED", `missing: ${m.status}`);
  assert(m.status !== "MAPPED_UNIQUE", "nonexistent");
}

function testNegativeArrayRangePartial() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(
    baseFinding({ cardId: "klein", objectIndex: 6, fieldPath: "study.examples[99-101].lv" }),
    reg,
  );
  assert(m.status !== "MAPPED_UNIQUE", "range must not be unique");
}

function testNegativeUnknownLegacyPath() {
  const reg = buildRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ fieldPath: "study.info" }), reg);
  assert(m.status === "GROUP_REVIEW_REQUIRED", `info: ${m.status}`);
  assert(m.status !== "MAPPED_UNIQUE", "study.info");
}

function testAggregateConflict() {
  const reg = buildRegistry();
  const rows = [
    { finding: baseFinding({ auditId: "A1", severity: "CRITICAL", fieldPath: "lv" }), mapping: resolveG2A1AuditFinding(baseFinding({ auditId: "A1", severity: "CRITICAL", fieldPath: "lv" }), reg) },
    { finding: baseFinding({ auditId: "A2", severity: "LOW", fieldPath: "lv" }), mapping: resolveG2A1AuditFinding(baseFinding({ auditId: "A2", severity: "LOW", fieldPath: "lv" }), reg) },
  ];
  const units = aggregateFindingsByCrowdinKey(rows, crowdinLocaleForRepoLang);
  assert(units.length === 1, "one key");
  assert(units[0].ownerStatus === "OWNER_CONFLICT_REVIEW_REQUIRED", units[0].ownerStatus);
  assert(units[0].findingCount === 2, "two findings");
}

function testFullValidatedSetClassification() {
  const fs = require("fs");
  const matrixPath =
    process.env.PHASE1_MATRIX_PATH ||
    "/tmp/cursor/artifacts/phase1-compact-pub/phase1-full-bundle/phase1-discovery-matrix.json";
  if (!fs.existsSync(matrixPath)) {
    console.log("SKIP full validated set — matrix not present");
    return;
  }
  const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
  const validated = matrix.findings.filter(
    (f) =>
      f.group === "g2" &&
      f.dataset === "a1" &&
      ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );
  const reg = buildRegistry();
  const stats = {};
  for (const f of validated) {
    const m = resolveG2A1AuditFinding(f, reg);
    stats[m.status] = (stats[m.status] || 0) + 1;
    assert(m.status !== "AMBIGUOUS" || m.reason === "CARD_ID_OBJECT_INDEX_MISMATCH", "unexpected ambiguous");
  }
  assert(validated.length === 13535, `count ${validated.length}`);
  assert(
    (stats.UNMATCHED || 0) + (stats.AMBIGUOUS || 0) === 0 ||
      (stats.GROUP_REVIEW_REQUIRED || 0) > 0,
    JSON.stringify(stats),
  );
  console.log("OK full validated classification", stats);
}

const tests = [
  testLeafNative,
  testContainerComparison,
  testContainerStudy,
  testCompoundLvStudy,
  testWildcardComparisonExample,
  testWildcardExamplesLv,
  testIndexedComparisonMeaning,
  testSectionAccentsGroupReview,
  testStringExplanationGroupReview,
  testNegativeWrongScope,
  testNegativeWrongObjectIndex,
  testNegativeWrongCardId,
  testNegativeWrongSourceFile,
  testNegativeNonexistentField,
  testNegativeArrayRangePartial,
  testNegativeUnknownLegacyPath,
  testAggregateConflict,
  testFullValidatedSetClassification,
];

function main() {
  for (const t of tests) {
    t();
    console.log(`OK ${t.name}`);
  }
  console.log(`PASS ${tests.length} g2-a1 audit key resolver tests`);
}

main();
