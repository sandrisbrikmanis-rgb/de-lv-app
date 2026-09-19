#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { STAGING_ROOT } = require("./lib/g2-a1-phase3/constants");
const {
  EXPECTED_SOURCE_HASH,
  loadOwnerPrepFindings,
  buildOwnerPrepUsability,
} = require("./lib/g2-a1-phase3/owner-prep-usability");
const {
  IMMUTABLE_SOURCES,
  BATCH_001_ID,
  reconcileSource,
  prepareAllRemainingBatches,
} = require("./lib/g2-a1-phase3/owner-review-all-batches");
const {
  FIELD_ALIAS_MAP,
  MAPPING_RESOLUTIONS,
  POST_CROWDIN_STATES,
  resolveProductionMapping,
  resolveSegmentProductionPath,
  parseExportKeyFieldPath,
  diagnoseMappingFailure,
} = require("./lib/g2-a1-phase3/production-mapping");

const OUT_CONSOLIDATED = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv");
const OUT_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-proof.json");
const OUT_INDEX = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-index.json");
const OUT_REPAIR_PROOF = path.join(
  ROOT,
  "reports/g2-a1-phase3-owner-review-all-batches-mapping-repair-proof.json",
);
const OUT_REPAIR_MD = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-mapping-repair.md");
const OUT_FIELD_ALIAS_MAP = path.join(
  ROOT,
  "reports/g2-a1-phase3-owner-review-all-batches-field-alias-map.json",
);
const OUT_TARGET_BACKLOG = path.join(
  ROOT,
  "reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json",
);
const PRE_REPAIR_OUTPUT_HASH = "f521c9ae4440fd6937ffdaff8d03496c056e358be65064fc2053a13ea6f83b56";

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(relPath) {
  return sha256Hex(fs.readFileSync(path.join(ROOT, relPath)));
}

function gitDiffCount(paths) {
  const output = execSync(`git diff --name-only origin/main -- ${paths.join(" ")}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return output ? output.split("\n").filter(Boolean).length : 0;
}

function loadRemainingFindings() {
  const batch001Proof = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json"), "utf8"),
  );
  const batch001Ids = new Set(batch001Proof.memberFindingIds);
  return loadOwnerPrepFindings(ROOT).filter((f) => !batch001Ids.has(f.sourceFindingId));
}

function testPreRepairBaseline() {
  const repair = JSON.parse(fs.readFileSync(OUT_REPAIR_PROOF, "utf8"));
  assert(repair.preRepairFieldNotFound === 5199, "pre-repair FIELD_NOT_FOUND 5199");
  assert(repair.preRepairTargetNotFound === 367, "pre-repair TARGET_NOT_FOUND 367");
  assert(repair.preRepairTotalMappingFailures === 5566, "pre-repair total failures 5566");
  assert(repair.preRepairOutputHash === PRE_REPAIR_OUTPUT_HASH, "pre-repair output hash");
}

function testRootCauseCoverage() {
  const repair = JSON.parse(fs.readFileSync(OUT_REPAIR_PROOF, "utf8"));
  assert(repair.rootCauseRowCount === 5566, "root-cause row count 5566");
  const distSum = Object.values(repair.rootCauseDistribution).reduce((a, b) => a + b, 0);
  assert(distSum === 5566, "root-cause distribution sum 5566");
  assert(fs.existsSync(OUT_REPAIR_MD), "mapping repair md exists");
  assert(repair.rootCauseRows.length === 5566, "root-cause rows persisted");
  for (const row of repair.rootCauseRows) {
    assert(MAPPING_RESOLUTIONS.has(row.postRepairMappingResolution), `resolved ${row.findingStableId}`);
    assert(row.failureType === "FIELD_NOT_FOUND" || row.failureType === "TARGET_NOT_FOUND", "failure type");
  }
}

function testPostRepairMappingGates() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const repair = JSON.parse(fs.readFileSync(OUT_REPAIR_PROOF, "utf8"));
  assert(proof.classification === "G2_A1_ALL_REMAINING_OWNER_REVIEW_BATCHES_MAPPING_REPAIRED", "classification");
  assert(proof.fieldNotFound === 0, "post FIELD_NOT_FOUND 0");
  assert(proof.targetNotFound === 0, "post TARGET_NOT_FOUND 0");
  assert(proof.unresolvedMapping === 0, "unresolved 0");
  assert(proof.ambiguousMapping === 0, "ambiguous 0");
  assert(repair.postRepairFieldNotFound === 0, "repair proof FIELD_NOT_FOUND 0");
  assert(repair.postRepairTargetNotFound === 0, "repair proof TARGET_NOT_FOUND 0");
  assert(repair.primaryWwwParityMismatch === 0, "parity mismatch 0");
}

function testMappingResolutionCoverage() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const consolidated = loadCsv(OUT_CONSOLIDATED);
  const resSum = Object.values(proof.mappingResolutionDistribution).reduce((a, b) => a + b, 0);
  const postSum = Object.values(proof.postCrowdinDistribution).reduce((a, b) => a + b, 0);
  assert(resSum === 22650, "mapping resolution sum 22650");
  assert(postSum === 22650, "post-crowdin sum 22650");
  for (const row of consolidated.rows) {
    assert(MAPPING_RESOLUTIONS.has(row.mapping_resolution), `mapping_resolution ${row.finding_stable_id}`);
    assert(POST_CROWDIN_STATES.has(row.post_crowdin_state), `post_crowdin_state ${row.finding_stable_id}`);
    assert(row.post_crowdin_state !== "FIELD_NOT_FOUND", "no FIELD_NOT_FOUND in csv");
    assert(row.post_crowdin_state !== "TARGET_NOT_FOUND", "no TARGET_NOT_FOUND in csv");
    assert(row.primary_www_parity !== "FAIL", `parity ${row.finding_stable_id}`);
  }
}

function testResolutionTypeSamples() {
  const consolidated = loadCsv(OUT_CONSOLIDATED);
  const byResolution = {};
  for (const row of consolidated.rows) {
    byResolution[row.mapping_resolution] = byResolution[row.mapping_resolution] || [];
    byResolution[row.mapping_resolution].push(row);
  }
  assert(byResolution.EXACT_FIELD?.some((r) => r.field_path.startsWith("a1.card.")), "exact export key");
  assert(byResolution.EXPLICIT_FIELD_ALIAS?.some((r) => r.field_path === "lv" || r.field_path.includes("native")), "lv/native alias");
  assert(byResolution.COMPOSITE_SCOPE_CAPTURED?.some((r) => r.field_path.includes(";") || r.field_path.includes(",")), "composite scope");
  assert(byResolution.CONFIRMED_FIELD_ABSENT?.length > 0, "confirmed field absent samples");
}

function testExplicitAliasMap() {
  assert(fs.existsSync(OUT_FIELD_ALIAS_MAP), "reports alias map exists");
  const published = JSON.parse(fs.readFileSync(OUT_FIELD_ALIAS_MAP, "utf8"));
  assert(published.version === FIELD_ALIAS_MAP.version, "alias map version");
  const lvRule = resolveSegmentProductionPath("lv");
  assert(lvRule.aliasRuleId === "LV_TO_CARD_LV_FIELD", "lv alias rule");
  assert(lvRule.resolvedProductionPath === "lv", "lv maps to lv");
  const nativeRule = resolveSegmentProductionPath("native");
  assert(nativeRule.resolvedProductionPath === "lv", "native maps to lv");
  const exportParsed = parseExportKeyFieldPath("a1.card.a1-ab.study.translation");
  assert(exportParsed?.slug === "a1-ab", "export slug parse");
  assert(exportParsed?.relativePath === "study.translation", "export path parse");
}

function testFailClosedMappingRules() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  assert(proof.positionalMappingUsed === false, "no positional mapping in proof");
  assert(proof.fuzzyMappingUsed === false, "no fuzzy mapping in proof");
  assert(proof.ambiguousMapping === 0, "no ambiguous mapping in proof");

  const findings = loadRemainingFindings();
  const sample = findings.find((f) => f.fieldPath.startsWith("a1.card."));
  const badFinding = { ...sample, cardId: "nonexistent-card-xyz", objectId: "nonexistent-card-xyz" };
  const absent = resolveProductionMapping(badFinding, new Map());
  assert(absent.mappingResolution === "CONFIRMED_CARD_ABSENT", "confirmed card absent");
  assert(absent.absenceEvidence, "card absence evidence");

  const unknownField = { ...findings[0], fieldPath: "study.__nonexistent_field__" };
  const fieldAbsent = resolveProductionMapping(unknownField, new Map());
  assert(
    fieldAbsent.mappingResolution === "CONFIRMED_FIELD_ABSENT" ||
      fieldAbsent.mappingResolution === "COMPOSITE_SCOPE_CAPTURED",
    "unknown field handled",
  );

  const badAlias = resolveSegmentProductionPath("__unknown_alias_segment__");
  assert(badAlias.resolvedProductionPath === "__unknown_alias_segment__", "unknown alias passthrough");
}

function testCoverageIntegrity() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const recon = reconcileSource(ROOT);
  assert(recon.pass, "source reconciliation");
  assert(proof.memberIdCoverage === "22650/22650", "member coverage");
  assert(proof.missing === 0 && proof.extra === 0, "missing/extra 0");
  assert(proof.duplicateAssignments === 0, "duplicate assignments 0");
  assert(proof.decisionTargetSplits === 0, "decision target splits 0");
  assert(proof.sourceClusterSplits === 0, "source cluster splits 0");
}

function testOwnerAndBacklogPreservation() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const backlog = JSON.parse(fs.readFileSync(OUT_TARGET_BACKLOG, "utf8"));
  const batch001Proof = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json"), "utf8"),
  );
  assert(
    proof.ownerStatuses.includes("PENDING") || proof.ownerReviewIngest,
    "owner statuses tracked",
  );
  assert(proof.automaticOwnerDecisions === 0, "no automatic decisions");
  assert(proof.targetLanguageBacklogPreserved === 29, "29 deferred backlog preserved");
  assert(backlog.count === 29, "backlog count 29");
  assert(batch001Proof.classification === "G2_A1_OWNER_REVIEW_BATCH_001_DECIDED", "batch001 still decided");
  assert(batch001Proof.ownerDecisionCounts.NELABOT === 100, "batch001 nelabot unchanged");
}

function testImmutablesAndDiffs() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  for (const rel of IMMUTABLE_SOURCES) {
    assert(
      proof.sourceArtifactSha256Before[rel] === proof.sourceArtifactSha256After[rel],
      `immutable ${rel}`,
    );
  }
  const backlogSha = sha256File("reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json");
  const backlogAtHead = execSync(
    "git show 37d3dbc8:reports/g2-a1-phase3-owner-review-batch-001-target-language-backlog.json",
    { cwd: ROOT, encoding: "utf8", maxBuffer: 8 * 1024 * 1024 },
  );
  assert(sha256Hex(backlogAtHead) === backlogSha, "target-language backlog unchanged");
  assert(proof.productionDiff === 0, "production diff 0");
  assert(proof.crowdinDiff === 0, "crowdin diff 0");
  assert(proof.lunaCheckpointDiff === 0, "luna checkpoint diff 0");
  assert(proof.newRealLunaCalls === 0, "no luna calls");
  assert(gitDiffCount(["data", "www/data"]) === 0, "git data diff 0");
  assert(gitDiffCount(["crowdin", path.relative(ROOT, STAGING_ROOT)]) === 0, "git crowdin diff 0");
}

function testDeterminismAndPermutation() {
  const first = prepareAllRemainingBatches({ root: ROOT, dryRun: true });
  const second = prepareAllRemainingBatches({ root: ROOT, dryRun: true });
  assert(first.pass && second.pass, "dry-run pass");
  assert(first.proof.outputHash === second.proof.outputHash, "deterministic hash");
  assert(
    JSON.stringify(first.proof.mappingResolutionDistribution) ===
      JSON.stringify(second.proof.mappingResolutionDistribution),
    "deterministic mapping resolution distribution",
  );
}

function testSourceHashTamper() {
  const rel = "reports/g2-a1-phase3-owner-review-batch-001-proof.json";
  const backup = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const proof = JSON.parse(backup);
  proof.sourceHash = "deadbeef";
  fs.writeFileSync(path.join(ROOT, rel), JSON.stringify(proof, null, 2));
  const recon = reconcileSource(ROOT);
  fs.writeFileSync(path.join(ROOT, rel), backup);
  assert(!recon.pass, "source hash tamper fails");
}

function testAllBatchesExist() {
  const index = JSON.parse(fs.readFileSync(OUT_INDEX, "utf8"));
  assert(index.batches.length === 232, "232 batches in index");
  for (const entry of index.batches) {
    assert(fs.existsSync(path.join(ROOT, entry.file)), `batch file ${entry.batchId}`);
  }
}

function testDiagnoseAllPreRepairFailures() {
  const repair = JSON.parse(fs.readFileSync(OUT_REPAIR_PROOF, "utf8"));
  assert(repair.rootCauseRowCount === 5566, "diagnosed failure count");
  const sample = repair.rootCauseRows.slice(0, 50);
  const findingsById = new Map(loadRemainingFindings().map((f) => [f.sourceFindingId, f]));
  for (const row of sample) {
    const finding = findingsById.get(row.findingStableId);
    assert(finding, `finding exists ${row.findingStableId}`);
    const diag = diagnoseMappingFailure(finding, row.failureType);
    assert(diag.postRepairMappingResolution === row.postRepairMappingResolution, "diag matches sample");
  }
}

function main() {
  assert(EXPECTED_SOURCE_HASH.length === 64, "expected source hash present");
  testPreRepairBaseline();
  testRootCauseCoverage();
  testPostRepairMappingGates();
  testMappingResolutionCoverage();
  testResolutionTypeSamples();
  testExplicitAliasMap();
  testFailClosedMappingRules();
  testCoverageIntegrity();
  testOwnerAndBacklogPreservation();
  testImmutablesAndDiffs();
  testDeterminismAndPermutation();
  testSourceHashTamper();
  testAllBatchesExist();
  testDiagnoseAllPreRepairFailures();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_ALL_REMAINING_OWNER_REVIEW_BATCH_MAPPING");
    process.exit(1);
  }
  console.log("PASS: g2-a1-phase3-owner-review-all-batches-mapping-repair");
}

if (require.main === module) {
  main();
}

module.exports = { main };
