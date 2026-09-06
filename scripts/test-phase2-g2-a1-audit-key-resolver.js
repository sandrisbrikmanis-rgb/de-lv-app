#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  exportG2LevelFlat,
  loadG2Level,
  flattenG2Flashcards,
  buildG2A1AuditKeyRegistry,
  resolveG2A1AuditFinding,
  aggregateFindingsByCrowdinKey,
  classifyValidatedFindings,
  keysUnderRelative,
  crowdinLocaleToRepo,
  CROWDIN_TARGET_LOCALE_IDS,
} = require("./lib/content-crowdin-bridge");

const FIXTURE_PATH = path.join(ROOT, "scripts/fixtures/g2-a1-audit-key-resolver-fixture.json");

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
    current: "",
    proposed: null,
    ...overrides,
  };
}

function buildProductionRegistry() {
  const cards = loadG2Level("lv", "a1");
  const lvFlat = exportG2LevelFlat("lv", "a1");
  return buildG2A1AuditKeyRegistry({ level: "a1", cards, lvFlat });
}

function buildFixtureRegistry() {
  const fixture = JSON.parse(fs.readFileSync(FIXTURE_PATH, "utf8"));
  const lvFlat = flattenG2Flashcards(fixture.level, fixture.cards);
  return buildG2A1AuditKeyRegistry({ level: fixture.level, cards: fixture.cards, lvFlat });
}

function crowdinLocaleForRepoLang(lang) {
  const hit = CROWDIN_TARGET_LOCALE_IDS.find((id) => crowdinLocaleToRepo(id) === lang);
  if (!hit) throw new Error(`no crowdin locale for ${lang}`);
  return hit;
}

function assertNotAutoApply(mapping, label) {
  assert(mapping.status !== "MAPPED_UNIQUE" && mapping.status !== "MAPPED_EXPLICIT_SET", `${label}: ${mapping.status}`);
  assert(!mapping.autoApplyEligible, `${label} autoApplyEligible`);
}

function testFixtureCases() {
  const fixture = JSON.parse(fs.readFileSync(FIXTURE_PATH, "utf8"));
  const reg = buildFixtureRegistry();
  for (const [name, spec] of Object.entries(fixture.findings)) {
    const finding = baseFinding({
      cardId: spec.cardId,
      objectIndex: spec.objectIndex,
      fieldPath: spec.fieldPath,
      auditId: `FIXTURE-${name}`,
    });
    const m = resolveG2A1AuditFinding(finding, reg);
    assert(m.status === spec.expectedStatus, `${name}: expected ${spec.expectedStatus}, got ${m.status}`);
    if (spec.expectedReason) assert(m.reason === spec.expectedReason || m.proofs?.some((p) => p.reason === spec.expectedReason), `${name} reason`);
    if (spec.expectedIdentityProof) assert(m.identityProof === spec.expectedIdentityProof, `${name} identity`);
    if (["GROUP_REVIEW_REQUIRED", "PARTIAL_MAPPING_REVIEW_REQUIRED", "AMBIGUOUS", "UNMATCHED"].includes(spec.expectedStatus)) {
      assertNotAutoApply(m, name);
    }
  }
}

function testDeFieldProtection() {
  const reg = buildProductionRegistry();
  for (const fieldPath of ["study.examples[].de", "study.comparison[].de", "study.title.de", "study.unknown.de"]) {
    const m = resolveG2A1AuditFinding(baseFinding({ fieldPath, objectIndex: 17, cardId: "ab" }), reg);
    assert(m.status === "GROUP_REVIEW_REQUIRED", `${fieldPath}: ${m.status}`);
    const reason = m.proofs?.find((p) => p.reason === "DE_SOURCE_FIELD_NOT_EXPORTABLE");
    assert(reason, `${fieldPath} missing DE reason`);
    assertNotAutoApply(m, fieldPath);
  }
}

function testPrefixBoundaryTip() {
  const cardKeys = [
    "a1.card.a1-demo.study.tip[0]",
    "a1.card.a1-demo.study.tipExtra[0]",
  ];
  const keys = keysUnderRelative(cardKeys, "a1", "a1-demo", "study.tip");
  assert(keys.length === 1, `tip prefix boundary: ${keys.join(",")}`);
  assert(keys[0].endsWith("study.tip[0]"), keys[0]);
}

function testWildcardUnknownLeaf() {
  const reg = buildFixtureRegistry();
  const m = resolveG2A1AuditFinding(
    baseFinding({ cardId: "ab", objectIndex: 0, fieldPath: "study.examples[].unknown" }),
    reg,
  );
  assert(m.status === "GROUP_REVIEW_REQUIRED", m.status);
  assertNotAutoApply(m, "wildcard unknown");
}

function testPartialMappingStatus() {
  const reg = buildFixtureRegistry();
  const m = resolveG2A1AuditFinding(
    baseFinding({ cardId: "ab", objectIndex: 0, fieldPath: "lv; study.sectionAccents" }),
    reg,
  );
  assert(m.status === "PARTIAL_MAPPING_REVIEW_REQUIRED", m.status);
  assert(m.keys.length > 0, "partial should retain resolved keys");
  assertNotAutoApply(m, "partial");
}

function testExplicitSetNotAggregated() {
  const reg = buildProductionRegistry();
  const finding = baseFinding({ fieldPath: "study.comparison" });
  const mapping = resolveG2A1AuditFinding(finding, reg);
  assert(mapping.status === "MAPPED_EXPLICIT_SET", mapping.status);
  const units = aggregateFindingsByCrowdinKey([{ finding, mapping }], crowdinLocaleForRepoLang);
  assert(units.length === 0, "explicit set must not create per-key apply units");
}

function testAggregateConflictCategory() {
  const reg = buildProductionRegistry();
  const rows = [
    {
      finding: baseFinding({ auditId: "A1", severity: "HIGH", category: "MISTRANSLATION", fieldPath: "lv", current: "a" }),
      mapping: resolveG2A1AuditFinding(baseFinding({ auditId: "A1", severity: "HIGH", category: "MISTRANSLATION", fieldPath: "lv", current: "a" }), reg),
    },
    {
      finding: baseFinding({ auditId: "A2", severity: "HIGH", category: "GRAMMAR", fieldPath: "lv", current: "b" }),
      mapping: resolveG2A1AuditFinding(baseFinding({ auditId: "A2", severity: "HIGH", category: "GRAMMAR", fieldPath: "lv", current: "b" }), reg),
    },
  ];
  const units = aggregateFindingsByCrowdinKey(rows, crowdinLocaleForRepoLang);
  assert(units.length === 1, "one key");
  assert(units[0].ownerStatus === "OWNER_CONFLICT_REVIEW_REQUIRED", units[0].ownerStatus);
}

function testUnknownCardIdAmbiguous() {
  const reg = buildProductionRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ cardId: "definitely-wrong-card", fieldPath: "lv" }), reg);
  assert(m.status === "AMBIGUOUS", m.status);
}

function testUnknownCardIdObjectIndexOnly() {
  const reg = buildProductionRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ cardId: "unknown", fieldPath: "lv", objectIndex: 17 }), reg);
  assert(m.status === "MAPPED_UNIQUE", m.status);
  assert(m.identityProof === "OBJECT_INDEX_ONLY", m.identityProof);
}

function runIntegrationClassification() {
  const matrixPath = process.env.PHASE1_MATRIX_PATH;
  if (!matrixPath) {
    throw new Error("PHASE1_MATRIX_PATH is required for integration classification test");
  }
  if (!fs.existsSync(matrixPath)) {
    throw new Error(`PHASE1_MATRIX_PATH not found: ${matrixPath}`);
  }
  const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
  const validated = matrix.findings.filter(
    (f) =>
      f.group === "g2" &&
      f.dataset === "a1" &&
      ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );
  const reg = buildProductionRegistry();
  const { stats, autoApplyEligible, total } = classifyValidatedFindings(validated, reg);
  assert(total === 13535, `total ${total}`);
  const sum = Object.values(stats).reduce((a, b) => a + b, 0);
  assert(sum === 13535, `sum ${sum} stats=${JSON.stringify(stats)}`);

  let deFindings = 0;
  for (const f of validated) {
    const segments = String(f.fieldPath || "").split(/[;,/]/);
    if (segments.some((s) => /\.de$|\[\d*\]\.de$|\[\d+\]\.de$|^de$/i.test(s.trim()))) deFindings += 1;
    const m = resolveG2A1AuditFinding(f, reg);
    assert(
      m.status !== "MAPPED_UNIQUE" && m.status !== "MAPPED_EXPLICIT_SET" || !String(f.fieldPath).toLowerCase().includes(".de"),
      `DE mapped as apply-eligible: ${f.auditId}`,
    );
  }

  const expected = {
    total: 13535,
    stats,
    autoApplyEligible,
    deFieldFindingsDetected: deFindings,
  };
  console.log("OK integration classification", JSON.stringify(expected));
  return expected;
}

const unitTests = [
  testFixtureCases,
  testDeFieldProtection,
  testPrefixBoundaryTip,
  testWildcardUnknownLeaf,
  testPartialMappingStatus,
  testExplicitSetNotAggregated,
  testAggregateConflictCategory,
  testUnknownCardIdAmbiguous,
  testUnknownCardIdObjectIndexOnly,
];

function main() {
  const integration = process.argv.includes("--integration");
  for (const t of unitTests) {
    t();
    console.log(`OK ${t.name}`);
  }
  if (integration) {
    runIntegrationClassification();
    console.log("OK runIntegrationClassification");
  }
  console.log(`PASS ${unitTests.length + (integration ? 1 : 0)} g2-a1 audit key resolver tests`);
}

main();
