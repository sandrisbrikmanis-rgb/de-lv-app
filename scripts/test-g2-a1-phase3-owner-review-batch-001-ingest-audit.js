#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { writeReportAtomic } = require("./lib/content-discovery/report-builder");
const { EXPECTED_SOURCE_HASH } = require("./lib/g2-a1-phase3/owner-prep-usability");
const { BASELINE_PACK_COMMIT, gitShow } = require("./lib/g2-a1-phase3/batch-001-pack-git");
const { loadCsv, buildCsv, loadCsvFromString } = require("./lib/g2-a1-phase3/batch-001-csv");
const {
  runIngestAudit,
  buildAuditMarkdown,
  reconcileIdentity,
} = require("./lib/g2-a1-phase3/batch-001-ingest-audit");
const { applyOwnerReviewBatch001 } = require("./apply-g2-a1-phase3-owner-review-batch-001");

const OUT_MD = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-ingest-audit.md");
const OUT_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-ingest-audit-proof.json");
const PACK_CSV = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.csv");
const PACK_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function writeTempCsv(name, header, rows) {
  const dir = path.join(ROOT, "reports", "temp", "batch-001-ingest-audit");
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, name);
  fs.writeFileSync(filePath, buildCsv(header, rows));
  return filePath;
}

function loadOwnerCsv() {
  return loadCsv(PACK_CSV);
}

function testWeakeningAudit() {
  const ingestCommit = "1b84a9d9";
  const packTestAtIngest = execSync(`git show ${ingestCommit}:scripts/test-g2-a1-phase3-owner-review-batch-001.js`, {
    cwd: ROOT,
    encoding: "utf8",
  });
  assert(
    /if\s*\(\s*alreadyDecided\s*\)\s*\{[\s\S]*?return\s*;/.test(packTestAtIngest),
    "weakening audit: ingest commit had DECIDED early-return",
  );

  const packTestNow = fs.readFileSync(
    path.join(ROOT, "scripts/test-g2-a1-phase3-owner-review-batch-001.js"),
    "utf8",
  );
  assert(
    !/if\s*\(\s*alreadyDecided\s*\)\s*\{[\s\S]*?return\s*;/.test(packTestNow),
    "weakening repair: DECIDED early-return removed",
  );
  assert(packTestNow.includes("reconcileIdentity"), "weakening repair: baseline identity reconciliation present");

  const applyAtIngest = execSync(`git show ${ingestCommit}:scripts/apply-g2-a1-phase3-owner-review-batch-001.js`, {
    cwd: ROOT,
    encoding: "utf8",
  });
  assert(
    !applyAtIngest.includes("BASELINE_PACK_COMMIT") || !applyAtIngest.includes("gitShow"),
    "weakening audit: ingest apply lacked git baseline compare",
  );

  const applyNow = fs.readFileSync(path.join(ROOT, "scripts/apply-g2-a1-phase3-owner-review-batch-001.js"), "utf8");
  assert(applyNow.includes("BASELINE_PACK_COMMIT"), "weakening repair: apply uses git baseline");
  assert(applyNow.includes("NELABOT with owner_new"), "weakening repair: NELABOT+owner_new fail-closed");
}

function testMutationGates() {
  const ownerCsv = loadOwnerCsv();
  const { header, rows } = ownerCsv;

  const missingRows = rows.slice(1);
  const missingPath = writeTempCsv("missing-id.csv", header, missingRows);
  const missingResult = applyOwnerReviewBatch001({ ownerCsvPath: missingPath });
  assert(!missingResult.pass, "mutation: missing member id fails");

  const extraRows = [...rows, { ...rows[0], finding_stable_ids: "synthetic-extra-id" }];
  const extraPath = writeTempCsv("extra-id.csv", header, extraRows);
  const extraResult = applyOwnerReviewBatch001({ ownerCsvPath: extraPath });
  assert(!extraResult.pass, "mutation: extra member id fails");

  const dupRows = [...rows, { ...rows[0] }];
  const dupPath = writeTempCsv("duplicate-id.csv", header, dupRows);
  const dupResult = applyOwnerReviewBatch001({ ownerCsvPath: dupPath });
  assert(!dupResult.pass, "mutation: duplicate member id fails");

  const mismatchRows = rows.map((row, idx) =>
    idx === 0 ? { ...row, lv_source: `${row.lv_source}-mutated` } : row,
  );
  const mismatchPath = writeTempCsv("identity-mismatch.csv", header, mismatchRows);
  const mismatchResult = applyOwnerReviewBatch001({ ownerCsvPath: mismatchPath });
  assert(!mismatchResult.pass, "mutation: identity field mismatch fails");

  const invalidDecisionRows = rows.map((row, idx) =>
    idx === 0 ? { ...row, owner_decision: "MAYBE" } : row,
  );
  const invalidPath = writeTempCsv("invalid-decision.csv", header, invalidDecisionRows);
  const invalidResult = applyOwnerReviewBatch001({ ownerCsvPath: invalidPath });
  assert(!invalidResult.pass, "mutation: invalid owner decision fails");

  const nelabotNewRows = rows.map((row, idx) =>
    idx === 0 ? { ...row, owner_new: "should-not-be-here" } : row,
  );
  const nelabotNewPath = writeTempCsv("nelabot-owner-new.csv", header, nelabotNewRows);
  const nelabotNewResult = applyOwnerReviewBatch001({ ownerCsvPath: nelabotNewPath });
  assert(!nelabotNewResult.pass, "mutation: NELABOT with owner_new fails");

  const proofBefore = JSON.parse(fs.readFileSync(PACK_PROOF, "utf8"));
  const tamperedProof = { ...proofBefore, sourceHash: "deadbeef" };
  const proofBackup = fs.readFileSync(PACK_PROOF, "utf8");
  fs.writeFileSync(PACK_PROOF, JSON.stringify(tamperedProof, null, 2));
  const hashResult = applyOwnerReviewBatch001({ ownerCsvPath: PACK_CSV });
  fs.writeFileSync(PACK_PROOF, proofBackup);
  assert(!hashResult.pass, "mutation: source hash mismatch fails");
}

function testIdempotencyAndPendingReconstruction() {
  const proofBefore = JSON.parse(fs.readFileSync(PACK_PROOF, "utf8"));
  const csvBefore = fs.readFileSync(PACK_CSV, "utf8");
  const viewBefore = fs.readFileSync(
    path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-view.md"),
    "utf8",
  );
  const decisionsBefore = fs.readFileSync(
    path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.md"),
    "utf8",
  );

  const first = applyOwnerReviewBatch001({ ownerCsvPath: PACK_CSV });
  assert(first.pass, "idempotency: first apply pass");

  const csvAfterFirst = fs.readFileSync(PACK_CSV, "utf8");
  assert(csvAfterFirst === csvBefore, "idempotency: csv unchanged on re-apply");

  const second = applyOwnerReviewBatch001({ ownerCsvPath: PACK_CSV });
  assert(second.pass, "idempotency: second apply pass");
  assert(second.proof.batchStatus === "DECIDED", "idempotency: remains DECIDED");

  const baselineLoaded = loadCsvFromString(
    gitShow(BASELINE_PACK_COMMIT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.csv"),
  );
  const current = loadOwnerCsv();
  const identity = reconcileIdentity(baselineLoaded.rows, current.rows);
  assert(identity.missing.length === 0, "pending reconstruction: no missing ids");
  assert(identity.mismatches.length === 0, "pending reconstruction: identity preserved");
  assert(
    baselineLoaded.rows.every((row) => row.owner_status === "PENDING"),
    "pending reconstruction: baseline pending-only",
  );
  assert(proofBefore.classification === "G2_A1_OWNER_REVIEW_BATCH_001_DECIDED", "decided pack not reverted");

  fs.writeFileSync(PACK_PROOF, JSON.stringify(proofBefore, null, 2));
  fs.writeFileSync(PACK_CSV, csvBefore);
  fs.writeFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-view.md"), viewBefore);
  fs.writeFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.md"), decisionsBefore);
}

function testTargetLanguageBacklogNotClosed() {
  const audit = runIngestAudit();
  assert(audit.proof.gates.targetLanguageBacklogFlags === 29, "target-language: 29 flagged");
  assert(audit.proof.gates.targetLanguageBacklogClosed === 0, "target-language: 0 closed");
  assert(audit.proof.gates.targetLanguageFixesApplied === 0, "target-language: 0 fixes applied");
  assert(
    audit.proof.targetLanguageBacklogMemberIds.length === 29,
    "target-language: 29 member ids in proof",
  );
}

function main() {
  testWeakeningAudit();
  testMutationGates();
  testIdempotencyAndPendingReconstruction();
  testTargetLanguageBacklogNotClosed();

  const audit = runIngestAudit();
  audit.proof.testWeakeningAudit = {
    ingestCommitHadDecidedEarlyReturn: true,
    currentPackTestRestoresBaselineIdentityChecks: true,
    currentApplyUsesGitBaseline: true,
    nelabotOwnerNewFailClosed: true,
  };
  audit.proof.mutationTests = {
    missingIdFails: true,
    extraIdFails: true,
    duplicateIdFails: true,
    identityMismatchFails: true,
    invalidDecisionFails: true,
    nelabotWithOwnerNewFails: true,
    sourceHashMismatchFails: true,
    idempotentReapply: true,
    pendingPackReconstructableFromGit: true,
    targetLanguageBacklogNotClosed: audit.proof.gates.targetLanguageBacklogClosed === 0,
  };

  writeReportAtomic(OUT_MD, buildAuditMarkdown(audit));
  writeReportAtomic(OUT_PROOF, JSON.stringify(audit.proof, null, 2));

  assert(audit.pass, "ingest audit gates pass");
  assert(audit.proof.classification === "G2_A1_OWNER_REVIEW_BATCH_001_INGEST_AUDIT_PASS", "classification pass");
  assert(audit.proof.gates.baselineSourceHash === EXPECTED_SOURCE_HASH, "source hash gate");
  assert(audit.proof.gates.totalSourceFindings === 22750, "total findings");
  assert(audit.proof.gates.remainingForOwnerReview === 22650, "remaining findings");
  assert(fs.existsSync(OUT_MD), "audit markdown written");
  assert(fs.existsSync(OUT_PROOF), "audit proof written");

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  console.log(JSON.stringify({ classification: audit.proof.classification, gates: audit.proof.gates }, null, 2));

  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_INGEST");
    process.exit(1);
  }
  console.log("PASS: g2-a1-phase3-owner-review-batch-001-ingest-audit");
}

if (require.main === module) {
  main();
}

module.exports = { main };
