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
  assertPhase1MatrixIdentity,
  hashMatrixForIdentity,
  EXPECTED_PHASE1_MATRIX_IDENTITY_SHA256,
  KNOWN_MAPPING_STATUSES,
  normalizeSegment,
  findingHasDeFieldPath,
} = require("./lib/content-crowdin-bridge");

const FIXTURE_PATH = path.join(ROOT, "scripts/fixtures/g2-a1-audit-key-resolver-fixture.json");

const FROZEN_INTEGRATION = Object.freeze({
  total: 13535,
  MAPPED_UNIQUE: 10287,
  MAPPED_EXPLICIT_SET: 2708,
  PARTIAL_MAPPING_REVIEW_REQUIRED: 82,
  GROUP_REVIEW_REQUIRED: 99,
  AMBIGUOUS: 359,
  UNMATCHED: 0,
  SOURCE_KEY_MISSING: 0,
  autoApplyEligible: 10287,
  deFieldFindings: 8,
  deAutoApply: 0,
  identityStats: {
    CANONICAL_CARD_ID: 13117,
    OBJECT_INDEX_ONLY: 0,
    CARD_ID_ALIAS_COLLISION: 359,
    CARD_ID_OBJECT_INDEX_MISMATCH: 0,
  },
});

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
  assert(!mapping.autoApplyEligible, `${label} autoApplyEligible`);
}

function testMatrixGateRequiresPath() {
  const prev = process.env.PHASE1_MATRIX_PATH;
  delete process.env.PHASE1_MATRIX_PATH;
  try {
    let threw = false;
    try {
      runIntegrationClassification();
    } catch (err) {
      threw = true;
      assert(/PHASE1_MATRIX_PATH/.test(err.message), err.message);
    }
    assert(threw, "integration must fail without PHASE1_MATRIX_PATH");
  } finally {
    if (prev) process.env.PHASE1_MATRIX_PATH = prev;
  }
}

function testMatrixGateRejectsBadSha() {
  const tmp = path.join(ROOT, ".tmp-phase1-matrix-bad.json");
  fs.writeFileSync(tmp, JSON.stringify({ findings: [], bogus: true }));
  const prev = process.env.PHASE1_MATRIX_PATH;
  process.env.PHASE1_MATRIX_PATH = tmp;
  try {
    let threw = false;
    try {
      runIntegrationClassification();
    } catch (err) {
      threw = true;
      assert(err.code === "PHASE1_MATRIX_IDENTITY_MISMATCH", err.message);
    }
    assert(threw, "integration must fail on matrix identity mismatch");
  } finally {
    if (prev) process.env.PHASE1_MATRIX_PATH = prev;
    else delete process.env.PHASE1_MATRIX_PATH;
    fs.unlinkSync(tmp);
  }
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
    if (spec.expectedReason) {
      assert(
        m.reason === spec.expectedReason || m.proofs?.some((p) => p.reason === spec.expectedReason),
        `${name} reason: ${m.reason}`,
      );
    }
    if (spec.expectedIdentityProof) assert(m.identityProof === spec.expectedIdentityProof, `${name} identity`);
    if (["GROUP_REVIEW_REQUIRED", "PARTIAL_MAPPING_REVIEW_REQUIRED", "AMBIGUOUS", "UNMATCHED"].includes(spec.expectedStatus)) {
      assertNotAutoApply(m, name);
    }
    if (m.status === "MAPPED_UNIQUE") {
      assert(m.keys.length === 1, `${name}: MAPPED_UNIQUE must have exactly one key`);
      assert(m.keys.every((k) => reg.lvKeySet.has(k)), `${name}: mapped key missing from LV registry`);
    }
    if (m.status === "MAPPED_EXPLICIT_SET") {
      assert(m.keys.length >= 2, `${name}: MAPPED_EXPLICIT_SET needs >=2 keys`);
      assertNotAutoApply(m, name);
      assert(m.keys.every((k) => reg.lvKeySet.has(k)), `${name}: explicit set key missing from LV registry`);
    }
  }
}

function testDocumentedTextAliases() {
  assert(normalizeSegment("study.tip.text") === "study.tip", "study.tip.text alias");
  assert(normalizeSegment("study.tip.example") === "study.tip", "study.tip.example alias");
}

function testUndocumentedTextPathsRejected() {
  const reg = buildFixtureRegistry();
  for (const fieldPath of ["study.question.text", "study.unknown.text", "study.comparison[].text"]) {
    const m = resolveG2A1AuditFinding(baseFinding({ cardId: "ab", objectIndex: 0, fieldPath }), reg);
    assert(
      m.status === "GROUP_REVIEW_REQUIRED" || m.status === "UNMATCHED",
      `${fieldPath}: expected GROUP_REVIEW_REQUIRED or UNMATCHED, got ${m.status}`,
    );
    assertNotAutoApply(m, fieldPath);
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
  const cardKeys = ["a1.card.a1-demo.study.tip[0]", "a1.card.a1-demo.study.tipExtra[0]"];
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
  assert(mapping.keys.length >= 2, "explicit set keys");
  assertNotAutoApply(mapping, "explicit set");
  const units = aggregateFindingsByCrowdinKey([{ finding, mapping }], crowdinLocaleForRepoLang);
  assert(units.length === 0, "explicit set must not create per-key apply units");
}

function testAggregateConflictCategory() {
  const reg = buildProductionRegistry();
  const rows = [
    {
      finding: baseFinding({ auditId: "A1", severity: "HIGH", category: "MISTRANSLATION", fieldPath: "lv", current: "a" }),
      mapping: resolveG2A1AuditFinding(
        baseFinding({ auditId: "A1", severity: "HIGH", category: "MISTRANSLATION", fieldPath: "lv", current: "a" }),
        reg,
      ),
    },
    {
      finding: baseFinding({ auditId: "A2", severity: "HIGH", category: "GRAMMAR", fieldPath: "lv", current: "b" }),
      mapping: resolveG2A1AuditFinding(
        baseFinding({ auditId: "A2", severity: "HIGH", category: "GRAMMAR", fieldPath: "lv", current: "b" }),
        reg,
      ),
    },
  ];
  const units = aggregateFindingsByCrowdinKey(rows, crowdinLocaleForRepoLang);
  assert(units.length === 1, "one key");
  assert(units[0].ownerStatus === "OWNER_CONFLICT_REVIEW_REQUIRED", units[0].ownerStatus);
}

function testAggregateOnlyMappedUnique() {
  const reg = buildProductionRegistry();
  const uniqueFinding = baseFinding({ auditId: "U1", fieldPath: "lv" });
  const uniqueMapping = resolveG2A1AuditFinding(uniqueFinding, reg);
  const explicitFinding = baseFinding({ auditId: "E1", fieldPath: "study.comparison" });
  const explicitMapping = resolveG2A1AuditFinding(explicitFinding, reg);
  const units = aggregateFindingsByCrowdinKey(
    [
      { finding: uniqueFinding, mapping: uniqueMapping },
      { finding: explicitFinding, mapping: explicitMapping },
    ],
    crowdinLocaleForRepoLang,
  );
  assert(units.length === 1, "only MAPPED_UNIQUE aggregated");
  assert(units[0].auditIds.includes("U1"), "unique finding aggregated");
  assert(!units[0].auditIds.includes("E1"), "explicit set excluded");
}

function testUnknownCardIdAmbiguous() {
  const reg = buildProductionRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ cardId: "definitely-wrong-card", fieldPath: "lv" }), reg);
  assert(m.status === "AMBIGUOUS", m.status);
  assert(m.reason === "CARD_ID_OBJECT_INDEX_MISMATCH", m.reason);
}

function testUnknownCardIdObjectIndexOnly() {
  const reg = buildProductionRegistry();
  const m = resolveG2A1AuditFinding(baseFinding({ cardId: "unknown", fieldPath: "lv", objectIndex: 17 }), reg);
  assert(m.status === "MAPPED_UNIQUE", m.status);
  assert(m.identityProof === "OBJECT_INDEX_ONLY", m.identityProof);
}

function loadValidatedG2A1Findings(matrix) {
  return matrix.findings.filter(
    (f) =>
      f.group === "g2" &&
      f.dataset === "a1" &&
      ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );
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
  const identity = assertPhase1MatrixIdentity(matrix);
  assert(identity.expected === EXPECTED_PHASE1_MATRIX_IDENTITY_SHA256, "expected matrix identity constant");
  assert(identity.actual === hashMatrixForIdentity(matrix), "identity hash recomputation");

  const validated = loadValidatedG2A1Findings(matrix);
  const reg = buildProductionRegistry();
  const { stats, autoApplyEligible, total, identityStats, deFieldFindings, deAutoApply, rows } =
    classifyValidatedFindings(validated, reg);

  assert(total === FROZEN_INTEGRATION.total, `total ${total}`);
  assert(stats.MAPPED_UNIQUE === FROZEN_INTEGRATION.MAPPED_UNIQUE, `MAPPED_UNIQUE ${stats.MAPPED_UNIQUE}`);
  assert(stats.MAPPED_EXPLICIT_SET === FROZEN_INTEGRATION.MAPPED_EXPLICIT_SET, `MAPPED_EXPLICIT_SET ${stats.MAPPED_EXPLICIT_SET}`);
  assert(
    stats.PARTIAL_MAPPING_REVIEW_REQUIRED === FROZEN_INTEGRATION.PARTIAL_MAPPING_REVIEW_REQUIRED,
    `PARTIAL ${stats.PARTIAL_MAPPING_REVIEW_REQUIRED}`,
  );
  assert(stats.GROUP_REVIEW_REQUIRED === FROZEN_INTEGRATION.GROUP_REVIEW_REQUIRED, `GROUP ${stats.GROUP_REVIEW_REQUIRED}`);
  assert((stats.AMBIGUOUS || 0) === FROZEN_INTEGRATION.AMBIGUOUS, `AMBIGUOUS ${stats.AMBIGUOUS || 0}`);
  assert((stats.UNMATCHED || 0) === FROZEN_INTEGRATION.UNMATCHED, `UNMATCHED ${stats.UNMATCHED || 0}`);
  assert(
    (stats.SOURCE_KEY_MISSING || 0) === FROZEN_INTEGRATION.SOURCE_KEY_MISSING,
    `SOURCE_KEY_MISSING ${stats.SOURCE_KEY_MISSING || 0}`,
  );
  assert(autoApplyEligible === FROZEN_INTEGRATION.autoApplyEligible, `autoApplyEligible ${autoApplyEligible}`);
  assert(deFieldFindings === FROZEN_INTEGRATION.deFieldFindings, `deFieldFindings ${deFieldFindings}`);
  assert(deAutoApply === FROZEN_INTEGRATION.deAutoApply, `deAutoApply ${deAutoApply}`);

  const sum = Object.values(stats).reduce((a, b) => a + b, 0);
  assert(sum === FROZEN_INTEGRATION.total, `status sum ${sum}`);

  let unknownStatusCount = 0;
  for (const [status, count] of Object.entries(stats)) {
    if (!KNOWN_MAPPING_STATUSES.has(status)) unknownStatusCount += count;
  }
  assert(unknownStatusCount === 0, `unknown statuses: ${unknownStatusCount}`);

  for (const [key, expected] of Object.entries(FROZEN_INTEGRATION.identityStats)) {
    assert(identityStats[key] === expected, `identityStats.${key} ${identityStats[key]} !== ${expected}`);
  }

  for (const row of rows) {
    const { finding, mapping } = row;
    if (mapping.status === "MAPPED_UNIQUE") {
      assert(mapping.keys.length === 1, `${finding.auditId}: MAPPED_UNIQUE key count`);
      assert(mapping.keys.every((k) => reg.lvKeySet.has(k)), `${finding.auditId}: key not in LV registry`);
      assert(mapping.autoApplyEligible, `${finding.auditId}: unique must be auto-apply eligible`);
    }
    if (mapping.status === "MAPPED_EXPLICIT_SET") {
      assert(mapping.keys.length >= 2, `${finding.auditId}: explicit set key count`);
      assertNotAutoApply(mapping, finding.auditId);
      assert(mapping.keys.every((k) => reg.lvKeySet.has(k)), `${finding.auditId}: explicit key not in LV registry`);
    }
    if (["PARTIAL_MAPPING_REVIEW_REQUIRED", "GROUP_REVIEW_REQUIRED", "AMBIGUOUS", "UNMATCHED"].includes(mapping.status)) {
      assertNotAutoApply(mapping, finding.auditId);
    }
    if (findingHasDeFieldPath(finding.fieldPath)) {
      assert(!mapping.autoApplyEligible, `${finding.auditId}: DE field must not auto-apply`);
    }
  }

  const units = aggregateFindingsByCrowdinKey(rows, crowdinLocaleForRepoLang);
  for (const unit of units) {
    const sourceRows = rows.filter((r) => unit.auditIds.includes(r.finding.auditId));
    assert(sourceRows.every((r) => r.mapping.status === "MAPPED_UNIQUE"), "aggregate includes non-unique mapping");
  }

  const result = {
    matrixIdentity: identity,
    total,
    stats,
    autoApplyEligible,
    deFieldFindings,
    deAutoApply,
    identityStats,
    aggregateUnits: units.length,
    classification:
      stats.AMBIGUOUS === 0 && stats.UNMATCHED === 0
        ? "G2_A1_AUDIT_KEY_RESOLVER_FINAL_OWNER_REVIEW_READY"
        : "G2_A1_AUDIT_KEY_RESOLVER_REPAIR_PARTIAL",
  };
  console.log("OK integration classification", JSON.stringify(result));
  return result;
}

const unitTests = [
  testMatrixGateRequiresPath,
  testMatrixGateRejectsBadSha,
  testFixtureCases,
  testDocumentedTextAliases,
  testUndocumentedTextPathsRejected,
  testDeFieldProtection,
  testPrefixBoundaryTip,
  testWildcardUnknownLeaf,
  testPartialMappingStatus,
  testExplicitSetNotAggregated,
  testAggregateConflictCategory,
  testAggregateOnlyMappedUnique,
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
