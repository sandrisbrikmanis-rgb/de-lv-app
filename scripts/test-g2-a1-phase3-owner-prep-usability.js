#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  RAW_TO_CANONICAL,
  CANONICAL_REVIEW_BUCKETS,
  EXPECTED_SOURCE_HASH,
  EXPECTED_FINDING_COUNT,
  EXPECTED_RAW_CATEGORY_COUNT,
  MAX_BATCH_DECISION_TARGETS,
  validateSourceIntegrity,
  buildOwnerPrepUsability,
  computeOutputHash,
  loadOwnerPrepFindings,
  buildExactDuplicateGroups,
  buildDecisionTargets,
  buildSourceLvClusters,
  mapRawToCanonical,
} = require("./lib/g2-a1-phase3/owner-prep-usability");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function checkpointSetSha() {
  const dir = path.join(ROOT, "reports", "temp", ["g2-a1-phase3", "luna-runs"].join("-"));
  if (!fs.existsSync(dir)) return null;
  const files = fs
    .readdirSync(dir)
    .map((name) => path.join(dir, name))
    .filter((p) => fs.statSync(p).isFile())
    .sort((a, b) => path.basename(a).localeCompare(path.basename(b)));
  const payload = files
    .map((filePath) => {
      const hash = crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
      return `${path.basename(filePath)}:${hash}`;
    })
    .join("\n");
  return crypto.createHash("sha256").update(payload).digest("hex");
}

function sourceArtifactSha(relPath) {
  const filePath = path.join(ROOT, relPath);
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function testSourceIntegrity() {
  const integrity = validateSourceIntegrity(ROOT);
  assert(integrity.pass, "source integrity PASS");
  assert(integrity.findings.length === EXPECTED_FINDING_COUNT, "22,750 findings loaded");
  assert(integrity.proof.sourceHash === EXPECTED_SOURCE_HASH, "source hash matches proof");
  assert(integrity.rawCategoryCount === EXPECTED_RAW_CATEGORY_COUNT, "159 raw categories");
}

function testRawCategoryMapping() {
  assert(Object.keys(RAW_TO_CANONICAL).length === EXPECTED_RAW_CATEGORY_COUNT, "159 explicit mappings");
  const values = Object.values(RAW_TO_CANONICAL);
  for (const bucket of values) {
    assert(CANONICAL_REVIEW_BUCKETS.includes(bucket), `canonical bucket valid ${bucket}`);
  }
  assert(RAW_TO_CANONICAL.SOURCE_LV_ISSUE === "SOURCE_LV_REVIEW_REQUIRED", "SOURCE_LV_ISSUE mapping");
  assert(RAW_TO_CANONICAL.MULTI_TRANSLATION === "MULTI_TRANSLATION_REVIEW_REQUIRED", "MULTI_TRANSLATION mapping");
}

function testCanonicalCoverage() {
  const result = buildOwnerPrepUsability({ root: ROOT });
  assert(result.pass, "usability build PASS");
  const sum = Object.values(result.canonicalDistribution).reduce((a, b) => a + b, 0);
  assert(sum === EXPECTED_FINDING_COUNT, "canonical bucket sum = 22750");
}

function testNoFindingLossOrDoubleBatch() {
  const result = buildOwnerPrepUsability({ root: ROOT });
  const assigned = new Set();
  for (const batch of result.batches) {
    for (const id of batch.memberFindingIds) {
      assert(!assigned.has(id), `finding assigned once ${id}`);
      assigned.add(id);
    }
    assert(batch.decisionTargetCount <= MAX_BATCH_DECISION_TARGETS, `${batch.batchId} <= 100 targets`);
  }
  assert(assigned.size === EXPECTED_FINDING_COUNT, "all findings assigned exactly once");
}

function testSourceLvClusters() {
  const findings = loadOwnerPrepFindings(ROOT);
  const clusters = buildSourceLvClusters(findings);
  const sourceCount = findings.filter((f) => f.rawCategory === "SOURCE_LV_ISSUE").length;
  const memberSum = clusters.reduce((sum, c) => sum + c.memberCount, 0);
  assert(sourceCount === 5053, "5053 SOURCE_LV_ISSUE findings");
  assert(memberSum === 5053, "source cluster members reconcile");
  assert(clusters.every((c) => c.ownerStatus === "PENDING"), "source clusters pending");
}

function testExactDuplicateGroupsPreserveMembers() {
  const findings = loadOwnerPrepFindings(ROOT);
  const groups = buildExactDuplicateGroups(findings);
  const memberSum = groups.reduce((sum, g) => sum + g.memberCount, 0);
  assert(memberSum === findings.length, "duplicate groups cover all findings");
  for (const group of groups.filter((g) => g.memberCount > 1)) {
    assert(group.memberFindingIds.length === group.memberCount, "duplicate member ids preserved");
  }
}

function testConflictDetectionDoesNotAutoMerge() {
  const sample = [
    {
      lang: "bg",
      productionFile: "crowdin-staging/g2/bg-a1.json",
      objectKey: "a1-test|idx:1",
      fieldPath: "field.a",
      current: "alpha",
      proposed: "one",
      reason: null,
      rawCategory: "MISTRANSLATION",
      canonicalReviewBucket: "SEMANTIC_OR_MEANING_ERROR",
      sourceFindingId: "id-1",
      auditId: "A-1",
    },
    {
      lang: "bg",
      productionFile: "crowdin-staging/g2/bg-a1.json",
      objectKey: "a1-test|idx:1",
      fieldPath: "field.a",
      current: "alpha",
      proposed: "two",
      reason: null,
      rawCategory: "MISTRANSLATION",
      canonicalReviewBucket: "SEMANTIC_OR_MEANING_ERROR",
      sourceFindingId: "id-2",
      auditId: "A-2",
    },
  ];
  const targets = buildDecisionTargets(sample);
  assert(targets.length === 1, "single decision target");
  assert(targets[0].conflict, "conflict detected");
  assert(targets[0].proposedValues.length === 2, "conflicting proposals preserved");
}

function testDeterminismAndPermutation() {
  const result1 = buildOwnerPrepUsability({ root: ROOT });
  const result2 = buildOwnerPrepUsability({ root: ROOT });
  assert(result1.outputHash === result2.outputHash, "deterministic output hash");
  const findings = loadOwnerPrepFindings(ROOT);
  const shuffled = [...findings].sort(() => 0).reverse();
  const integrity = validateSourceIntegrity(ROOT);
  const targets = buildDecisionTargets(shuffled);
  const batches = require("./lib/g2-a1-phase3/owner-prep-usability").buildBatchManifest(
    shuffled,
    targets,
    buildSourceLvClusters(shuffled),
    integrity.proof.sourceHash,
  );
  const payload = {
    batchIds: batches.map((b) => b.batchId),
    findingCounts: batches.map((b) => b.findingCount),
  };
  const hash = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
  const payload2 = {
    batchIds: result1.batches.map((b) => b.batchId),
    findingCounts: result1.batches.map((b) => b.findingCount),
  };
  const hash2 = crypto.createHash("sha256").update(JSON.stringify(payload2)).digest("hex");
  assert(hash === hash2, "permuted input same batch manifest shape");
}

function testSourceHashFailClosed() {
  const blocked = buildOwnerPrepUsability({
    root: ROOT,
    expectedSourceHash: "deadbeef",
  });
  assert(!blocked.pass, "wrong source hash blocked");
}

function testOwnerStatusesPendingOnly() {
  const result = buildOwnerPrepUsability({ root: ROOT });
  assert(result.ownerStatuses.length === 1 && result.ownerStatuses[0] === "PENDING", "pending only");
  assert(result.automaticOwnerDecisions === 0, "no automatic decisions");
  const findings = loadOwnerPrepFindings(ROOT);
  assert(findings.every((f) => f.ownerStatus === "PENDING"), "all findings pending");
}

function testNoCheckpointAccessInLib() {
  const libSrc = fs.readFileSync(path.join(ROOT, "scripts/lib/g2-a1-phase3/owner-prep-usability.js"), "utf8");
  const auditSrc = fs.readFileSync(path.join(ROOT, "scripts/audit-g2-a1-phase3-owner-prep-usability.js"), "utf8");
  const needle = ["g2-a1-phase3", "luna-runs"].join("-");
  assert(!libSrc.includes(needle), "library does not reference checkpoint path");
  assert(!auditSrc.includes(needle), "audit script does not reference checkpoint path");
}

function testProductionAndDeDiffZero() {
  const { fetchOriginMain, resolveOriginMainSha, gitProductionDiffAgainstBaseline, gitDeDiffAgainstBaseline } =
    require("./lib/content-discovery/git-baseline");
  fetchOriginMain();
  const origin = resolveOriginMainSha();
  const prod = gitProductionDiffAgainstBaseline(origin.sha);
  const de = gitDeDiffAgainstBaseline(origin.sha);
  assert(prod.clean, "production diff 0");
  assert(de.clean, "DE diff 0");
}

function testSourceArtifactsUnchanged(checkpointBefore, sourceBefore) {
  const checkpointAfter = checkpointSetSha();
  const sourceAfter = {
    view: sourceArtifactSha("reports/g2-a1-phase3-owner-view.md"),
    decisions: sourceArtifactSha("reports/g2-a1-phase3-owner-decisions.md"),
    csv: sourceArtifactSha("reports/g2-a1-phase3-owner-decisions.csv"),
    proof: sourceArtifactSha("reports/g2-a1-phase3-owner-proof.json"),
    discovery: sourceArtifactSha("reports/g2-a1-phase3-full-discovery.json"),
  };
  assert(checkpointBefore === checkpointAfter, "checkpoint sha unchanged");
  for (const key of Object.keys(sourceBefore)) {
    assert(sourceBefore[key] === sourceAfter[key], `source artifact unchanged ${key}`);
  }
}

function main() {
  const checkpointBefore = checkpointSetSha();
  const sourceBefore = {
    view: sourceArtifactSha("reports/g2-a1-phase3-owner-view.md"),
    decisions: sourceArtifactSha("reports/g2-a1-phase3-owner-decisions.md"),
    csv: sourceArtifactSha("reports/g2-a1-phase3-owner-decisions.csv"),
    proof: sourceArtifactSha("reports/g2-a1-phase3-owner-proof.json"),
    discovery: sourceArtifactSha("reports/g2-a1-phase3-full-discovery.json"),
  };

  testSourceIntegrity();
  testRawCategoryMapping();
  testCanonicalCoverage();
  testNoFindingLossOrDoubleBatch();
  testSourceLvClusters();
  testExactDuplicateGroupsPreserveMembers();
  testConflictDetectionDoesNotAutoMerge();
  testDeterminismAndPermutation();
  testSourceHashFailClosed();
  testOwnerStatusesPendingOnly();
  testNoCheckpointAccessInLib();
  testProductionAndDeDiffZero();
  testSourceArtifactsUnchanged(checkpointBefore, sourceBefore);

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) process.exit(1);
  console.log("PASS: g2-a1-phase3-owner-prep-usability");
}

if (require.main === module) {
  main();
}
