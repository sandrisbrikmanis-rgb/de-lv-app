#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const mappingFixture = require("./fixtures/phase1-owner-severity-mapping-5of5.json");
const {
  OWNER_SEVERITY_MAPPINGS,
  normalizeMappingEntry,
  applyOwnerSeverityMappings,
} = require("./lib/content-discovery/phase1-owner-severity-mapping");
const { validateFindings, validateFindingSchema } = require("./lib/content-discovery/phase1-findings-validation");

const baseline = require("./fixtures/phase1-run-id-compatibility-baseline.json");
const RUN_ID = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";
const MATRIX_PATH =
  process.env.PHASE1_MATRIX_PATH || "/workspace/reports/phase1-discovery-matrix.json";
const RUN_ARTIFACT_ROOT = process.env.PHASE1_RUN_ARTIFACT_ROOT || baseline.runArtifactRoot;
const COPIED_RUN_ARTIFACT_ROOT =
  process.env.PHASE1_COPIED_RUN_ARTIFACT_ROOT ||
  path.join(
    "/tmp/cursor/worktrees/phase1-targeted-repair/reports/temp/phase1-luna-runs",
    RUN_ID,
    "checkpoints",
  );

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function firstCurrentVariant(entry) {
  return normalizeMappingEntry(entry).currentVariants[0];
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

function buildOwnerFixtureFindings(classificationStatus = "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE") {
  return OWNER_SEVERITY_MAPPINGS.map((entry) => {
    const variant =
      normalizeMappingEntry(entry).currentVariants.find(
        (row) => row.classificationStatus === classificationStatus,
      ) || firstCurrentVariant(entry);
    const parts = entry.findingId.split("|");
    return baseFinding({
      findingStableId: entry.findingId,
      severity: variant.severity,
      category: variant.category,
      classificationStatus: variant.classificationStatus,
      scopeId: parts[0],
      cardId: parts[1],
      fieldPath: parts[3],
    });
  });
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

function testPreviouslySeenVariantPasses() {
  const findings = buildOwnerFixtureFindings("PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE");
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.ownerMappingApplied === 5, "2: PREVIOUSLY_SEEN variant maps all 5");
  assert(mapped.mappingErrors.length === 0, "2: PREVIOUSLY_SEEN variant has no errors");
  let threw = false;
  try {
    validateFindings(findings);
  } catch {
    threw = true;
  }
  assert(!threw, "2: PREVIOUSLY_SEEN variant validateFindings passes");
}

function testValidatedRealFindingVariantPasses() {
  const findings = buildOwnerFixtureFindings("VALIDATED_REAL_FINDING");
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.ownerMappingApplied === 5, "3: VALIDATED_REAL_FINDING variant maps all 5");
  assert(mapped.mappingErrors.length === 0, "3: VALIDATED_REAL_FINDING variant has no errors");
  for (const entry of OWNER_SEVERITY_MAPPINGS) {
    const row = mapped.findings.find((f) => f.findingStableId === entry.findingId);
    assert(row.severity === entry.next.severity, `3: runtime severity mapped ${entry.findingId}`);
  }
  let threw = false;
  try {
    validateFindings(findings);
  } catch {
    threw = true;
  }
  assert(!threw, "3: VALIDATED_REAL_FINDING variant validateFindings passes");
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
  assert(other.severity === "STYLE_ONLY", "4: other STYLE_ONLY untouched");
  assert(mapped.ownerMappingApplied === 5, "4: only 5 mapped");
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
  assert(other.severity === "NEEDS_REVIEW", "5: other NEEDS_REVIEW untouched");
}

function testWrongCurrentSeverityFails() {
  const findings = buildOwnerFixtureFindings();
  findings[0].severity = "HIGH";
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.mappingErrors.length === 1, "6: wrong severity fails");
  let threw = false;
  try {
    validateFindings(findings);
  } catch (error) {
    threw = error.code === "OWNER_MAPPING_MISMATCH";
  }
  assert(threw, "6: validateFindings fail-closed on wrong severity");
}

function testWrongCategoryFails() {
  const findings = buildOwnerFixtureFindings();
  findings[1].category = "DUPLICATION";
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.mappingErrors.length === 1, "7: wrong category fails");
}

function testUnprovenClassificationStatusFails() {
  const findings = buildOwnerFixtureFindings();
  findings[2].classificationStatus = "RAW_LLM_CANDIDATE";
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.mappingErrors.length === 1, "8: unproven third classificationStatus fails");
  let threw = false;
  try {
    validateFindings(findings);
  } catch (error) {
    threw = error.code === "OWNER_MAPPING_MISMATCH";
  }
  assert(threw, "8: validateFindings fail-closed on unproven status");
}

function testCountIdMessageEvidenceUnchanged() {
  const findings = buildOwnerFixtureFindings();
  const mapped = applyOwnerSeverityMappings(findings);
  assert(mapped.findings.length === findings.length, "9: count unchanged");
  for (let i = 0; i < findings.length; i += 1) {
    assert(mapped.findings[i].findingStableId === findings[i].findingStableId, "9: id unchanged");
    assert(mapped.findings[i].message === findings[i].message, "9: message unchanged");
    assert(mapped.findings[i].current === findings[i].current, "9: current unchanged");
  }
}

function sha256File(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function collectCopiedRunFindings() {
  if (!fs.existsSync(COPIED_RUN_ARTIFACT_ROOT)) {
    throw new Error(`PHASE1_COPIED_RUN_ARTIFACT_ROOT missing: ${COPIED_RUN_ARTIFACT_ROOT}`);
  }
  const findings = [];
  const scopeDirs = fs.readdirSync(COPIED_RUN_ARTIFACT_ROOT, { withFileTypes: true });
  for (const scopeDir of scopeDirs) {
    if (!scopeDir.isDirectory()) continue;
    const scopePath = path.join(COPIED_RUN_ARTIFACT_ROOT, scopeDir.name);
    const files = fs.readdirSync(scopePath).filter((name) => name.endsWith(".json"));
    for (const fileName of files) {
      const checkpoint = JSON.parse(fs.readFileSync(path.join(scopePath, fileName), "utf8"));
      for (const finding of checkpoint.normalizedFindings || []) {
        findings.push(finding);
      }
    }
  }
  return findings;
}

function testCopiedRunFindingsZeroOwnerMismatch() {
  const findings = collectCopiedRunFindings();
  assert(findings.length > 0, `10: copied-run findings collected (${findings.length})`);
  let threw = false;
  let validation = null;
  try {
    validation = validateFindings(findings);
  } catch (error) {
    threw = error.code === "OWNER_MAPPING_MISMATCH";
  }
  assert(!threw, "10: copied-run validateFindings has 0 OWNER_MAPPING_MISMATCH");
  assert(validation && validation.ownerMappingApplied === 5, "10: copied-run applies exactly 5 mappings");
  assert(validation.schemaErrorCount === 0, "10: copied-run schema errors 0 after mapping");
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
  assert(invalid.length === 5, `11: matrix has 5 invalid severity rows (got ${invalid.length})`);
  assert(preSchemaErrors >= 5, `11: pre-mapping schema errors >= 5 (got ${preSchemaErrors})`);
  assert(validation.schemaErrorCount === 0, "11: schema errors 0 after mapping");
  assert(validation.ownerMappingApplied === 5, "11: owner mapping applied 5");
}

function testCheckpointFilesByteIdentical() {
  if (!fs.existsSync(RUN_ARTIFACT_ROOT)) {
    throw new Error(`PHASE1_RUN_ARTIFACT_ROOT missing: ${RUN_ARTIFACT_ROOT}`);
  }
  for (const [rel, frozenSha] of Object.entries(baseline.frozenCheckpointSha256)) {
    const filePath = path.join(RUN_ARTIFACT_ROOT, rel);
    assert(fs.existsSync(filePath), `12: checkpoint present ${rel}`);
    assert(sha256File(filePath) === frozenSha, `12: checkpoint byte-identical to frozen baseline ${rel}`);
  }
}

function testFixtureArtifactMatchesCode() {
  assert(mappingFixture.ownerMappingApplied === 5, "fixture: 5 mappings");
  assert(mappingFixture.mappings.length === OWNER_SEVERITY_MAPPINGS.length, "fixture matches code count");
  for (let i = 0; i < OWNER_SEVERITY_MAPPINGS.length; i += 1) {
    const codeEntry = normalizeMappingEntry(OWNER_SEVERITY_MAPPINGS[i]);
    const fixtureEntry = mappingFixture.mappings[i];
    assert(
      JSON.stringify(codeEntry.currentVariants) === JSON.stringify(fixtureEntry.currentVariants),
      `fixture variants match code ${codeEntry.findingId}`,
    );
    assert(
      JSON.stringify(codeEntry.next) === JSON.stringify(fixtureEntry.next),
      `fixture next match code ${codeEntry.findingId}`,
    );
  }
}

function main() {
  testFiveMappingsPass();
  testPreviouslySeenVariantPasses();
  testValidatedRealFindingVariantPasses();
  testOtherStyleOnlyUntouched();
  testOtherNeedsReviewUntouched();
  testWrongCurrentSeverityFails();
  testWrongCategoryFails();
  testUnprovenClassificationStatusFails();
  testCountIdMessageEvidenceUnchanged();
  testCopiedRunFindingsZeroOwnerMismatch();
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
  collectCopiedRunFindings,
  testFiveMappingsPass,
  testValidatedRealFindingVariantPasses,
};
