#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const mappingFixture = require("./fixtures/phase1-owner-severity-mapping-5of5.json");
const {
  OWNER_SEVERITY_MAPPINGS,
  applyOwnerSeverityMappings,
} = require("./lib/content-discovery/phase1-owner-severity-mapping");
const { validateFindings, validateFindingSchema } = require("./lib/content-discovery/phase1-findings-validation");

const baseline = require("./fixtures/phase1-run-id-compatibility-baseline.json");
const RUN_ID = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";
const MATRIX_PATH =
  process.env.PHASE1_MATRIX_PATH || "/workspace/reports/phase1-discovery-matrix.json";
const RUN_ARTIFACT_ROOT = process.env.PHASE1_RUN_ARTIFACT_ROOT || baseline.runArtifactRoot;

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
  return {
    auditId: "DISC-TEST-0001",
    findingStableId: "g2/b2/fr|unknown|idx:926|lv|STYLE_ONLY|gpt-5.6-luna",
    dedupKey: "g2/b2/fr|fr|g2|b2|unknown|idx:926|lv|STYLE_ONLY",
    scopeId: "g2/b2/fr",
    group: "g2",
    dataset: "b2",
    lang: "fr",
    cardId: "unknown",
    objectIndex: 926,
    fieldPath: "lv",
    severity: "STYLE_ONLY",
    category: "STYLE_ONLY",
    classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    current: "Récupération • Récupération",
    source: "gpt-5.6-luna",
    message: "duplicate",
    ...overrides,
  };
}

function buildOwnerFixtureFindings() {
  return OWNER_SEVERITY_MAPPINGS.map((entry) =>
    baseFinding({
      findingStableId: entry.findingId,
      severity: entry.current.severity,
      category: entry.current.category,
      classificationStatus: entry.current.classificationStatus,
      scopeId: entry.findingId.split("|")[0],
      cardId: entry.findingId.split("|")[1],
      fieldPath: entry.findingId.split("|")[3],
      category: entry.current.category,
    }),
  );
}

function testFiveMappingsPass() {
  const findings = buildOwnerFixtureFindings();
  const before = JSON.stringify(findings);
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.ownerMappingApplied === 5, "1: OWNER_MAPPING_APPLIED = 5");
  assert(mapped.mappingErrors.length === 0, "1: no mapping errors");
  for (const entry of OWNER_SEVERITY_MAPPINGS) {
    const row = mapped.findings.find((f) => f.findingStableId === entry.findingId);
    assert(row.severity === entry.next.severity, `1: severity mapped ${entry.findingId}`);
    assert(
      row.classificationStatus === entry.next.classificationStatus,
      `1: classification mapped ${entry.findingId}`,
    );
    assert(row.ownerSeverityNormalizationProof, `1: proof present ${entry.findingId}`);
  }
  const unchanged = ["findingStableId", "category", "current", "message"];
  for (const field of unchanged) {
    const beforeRows = JSON.parse(before);
    for (let i = 0; i < findings.length; i += 1) {
      if (field === "category") continue;
      assert(mapped.findings[i][field] === beforeRows[i][field], `1: ${field} unchanged`);
    }
  }
}

function testOtherStyleOnlyUntouched() {
  const findings = [
    ...buildOwnerFixtureFindings(),
    baseFinding({
      findingStableId: "g2/b2/fr|OtherCard|idx:1|lv|STYLE_ONLY|gpt-5.6-luna",
      severity: "STYLE_ONLY",
      category: "STYLE_ONLY",
      classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    }),
  ];
  const mapped = applyOwnerSeverityMappings(findings);
  const other = mapped.findings.find((f) => f.findingStableId.includes("OtherCard"));
  assert(other.severity === "STYLE_ONLY", "3: other STYLE_ONLY untouched");
  assert(mapped.ownerMappingApplied === 5, "3: only 5 mapped");
}

function testOtherNeedsReviewUntouched() {
  const findings = [
    ...buildOwnerFixtureFindings(),
    baseFinding({
      findingStableId: "g2/b2/de|Other|idx:2|lv|AMBIGUITY|gpt-5.6-luna",
      severity: "NEEDS_REVIEW",
      category: "AMBIGUITY",
      classificationStatus: "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    }),
  ];
  const mapped = applyOwnerSeverityMappings(findings);
  const other = mapped.findings.find((f) => f.findingStableId.includes("g2/b2/de"));
  assert(other.severity === "NEEDS_REVIEW", "4: other NEEDS_REVIEW untouched");
}

function testWrongCurrentSeverityFails() {
  const findings = buildOwnerFixtureFindings();
  findings[0].severity = "HIGH";
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.mappingErrors.length === 1, "5: wrong severity fails");
  let threw = false;
  try {
    validateFindings(findings);
  } catch (error) {
    threw = error.code === "OWNER_MAPPING_MISMATCH";
  }
  assert(threw, "5: validateFindings fail-closed");
}

function testWrongCategoryFails() {
  const findings = buildOwnerFixtureFindings();
  findings[1].category = "DUPLICATION";
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.mappingErrors.length === 1, "6: wrong category fails");
}

function testWrongClassificationStatusFails() {
  const findings = buildOwnerFixtureFindings();
  findings[2].classificationStatus = "VALIDATED_REAL_FINDING";
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.mappingErrors.length === 1, "7: wrong classificationStatus fails");
}

function testCountIdMessageEvidenceUnchanged() {
  const findings = buildOwnerFixtureFindings();
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.findings.length === findings.length, "8: count unchanged");
  for (let i = 0; i < findings.length; i += 1) {
    assert(mapped.findings[i].findingStableId === findings[i].findingStableId, "8: id unchanged");
    assert(mapped.findings[i].message === findings[i].message, "8: message unchanged");
    assert(mapped.findings[i].current === findings[i].current, "8: current unchanged");
  }
}

function sha256File(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function testMatrixSchemaErrorsZeroAfterMapping() {
  if (!fs.existsSync(MATRIX_PATH)) {
    throw new Error(`PHASE1_MATRIX_PATH missing: ${MATRIX_PATH}`);
  }
  const matrix = JSON.parse(fs.readFileSync(MATRIX_PATH, "utf8"));
  const invalid = (matrix.findings || []).filter(
    (f) => f.severity === "STYLE_ONLY" || f.severity === "NEEDS_REVIEW",
  );
  let preSchemaErrors = 0;
  (matrix.findings || []).forEach((finding, index) => {
    preSchemaErrors += validateFindingSchema(finding, index).errors.length;
  });
  const validation = validateFindings(matrix.findings || []);
  assert(invalid.length === 5, `9: matrix has 5 invalid severity rows (got ${invalid.length})`);
  assert(preSchemaErrors >= 5, `9: pre-mapping schema errors >= 5 (got ${preSchemaErrors})`);
  assert(validation.schemaErrorCount === 0, "9: schema errors 0 after mapping");
  assert(validation.ownerMappingApplied === 5, "9: owner mapping applied 5");
}

function testCheckpointFilesByteIdentical() {
  if (!fs.existsSync(RUN_ARTIFACT_ROOT)) {
    throw new Error(`PHASE1_RUN_ARTIFACT_ROOT missing: ${RUN_ARTIFACT_ROOT}`);
  }
  for (const [rel, frozenSha] of Object.entries(baseline.frozenCheckpointSha256)) {
    const filePath = path.join(RUN_ARTIFACT_ROOT, rel);
    assert(fs.existsSync(filePath), `10: checkpoint present ${rel}`);
    assert(sha256File(filePath) === frozenSha, `10: checkpoint byte-identical to frozen baseline ${rel}`);
  }
}

function testFixtureArtifactMatchesCode() {
  assert(mappingFixture.ownerMappingApplied === 5, "fixture: 5 mappings");
  assert(mappingFixture.mappings.length === OWNER_SEVERITY_MAPPINGS.length, "fixture matches code");
}

function main() {
  testFiveMappingsPass();
  testOtherStyleOnlyUntouched();
  testOtherNeedsReviewUntouched();
  testWrongCurrentSeverityFails();
  testWrongCategoryFails();
  testWrongClassificationStatusFails();
  testCountIdMessageEvidenceUnchanged();
  testMatrixSchemaErrorsZeroAfterMapping();
  testCheckpointFilesByteIdentical();
  testFixtureArtifactMatchesCode();

  console.log(`\nPhase 1 OWNER severity mapping tests: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed > 0) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = {
  buildOwnerFixtureFindings,
  testFiveMappingsPass,
};
