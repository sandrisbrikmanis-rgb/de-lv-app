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
  INGEST_COMMIT,
} = require("./lib/g2-a1-phase3/owner-review-7737-escalations");
const {
  EXPECTED_DECISIONS_SHA,
  EXPECTED_NEEDS_OWNER_SHA,
} = require("./lib/g2-a1-phase3/all-remaining-ingest");
const {
  OUT_DECISIONS,
  OUT_REMAINING,
  OUT_PROOF,
  verifySourceIntegrity,
  runOwnerReview7737Escalations,
  applyParallelEscalationReview,
  classifyUnresolvedCategory,
  buildPrecisePendingNote,
} = require("./lib/g2-a1-phase3/owner-review-7737-escalations");
const {
  OWNER_DECISION_WRITING_DISABLED,
  reviewEscalationRowEvidence,
} = require("./lib/g2-a1-phase3/review-escalation-row-evidence");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function sha256File(relPath) {
  return crypto.createHash("sha256").update(fs.readFileSync(path.join(ROOT, relPath))).digest("hex");
}

function gitDiffCount(paths) {
  const output = execSync(`git diff --name-only origin/main -- ${paths.join(" ")}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return output ? output.split("\n").filter(Boolean).length : 0;
}

function testSourceIntegrity() {
  const source = verifySourceIntegrity(ROOT);
  assert(source.pass, "source integrity pass");
  assert(source.committedPending.length === 7737, "committed pending 7737");
  assert(source.committedDecided.length === 14913, "committed decided 14913");
  assert(source.identity.missing.length === 0, "missing 0");
  assert(source.identity.extra.length === 0, "extra 0");
  assert(source.identity.mismatches.length === 0, "identity mismatch 0");
}

function testReviewArtifacts() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const decisions = loadCsv(OUT_DECISIONS);
  const remaining = loadCsv(OUT_REMAINING);
  const index = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-batches-index.json"), "utf8"),
  );
  assert(
    proof.classification === "G2_A1_ESCALATION_REVIEW_5241_AUTOMATIC_DECISIONS_REPAIRED" ||
      proof.classification === "G2_A1_OWNER_REVIEW_7737_ESCALATIONS_COMPLETED_WITH_REMAINDER",
    "classification valid",
  );
  assert(proof.inputRows === 7737, "input rows 7737");
  assert(proof.reviewScope === "7737/7737", "review scope");
  assert(decisions.rows.length === 0, "no automatic decisions csv");
  assert(remaining.rows.length === 7737, "remaining 7737");
  assert(proof.reviewedDecided === 0, "reviewed decided 0");
  assert(proof.remainingPending === 7737, "remaining pending 7737");
  assert(proof.preexisting14913DecisionsChanged === 0, "14913 unchanged");
  assert(proof.batch001DecisionsChanged === 0, "batch001 unchanged");
  assert(proof.deferredBacklog29Closed === 0, "backlog preserved");
  assert(proof.productionDiff === 0, "production diff 0");
  assert(proof.crowdinDiff === 0, "crowdin diff 0");
  assert(proof.newRealLunaCalls === 0, "no luna calls");
  assert(proof.automaticOwnerDecisions === 0, "no automatic decisions");

  let batchSum = 0;
  const batchIds = new Set();
  for (const entry of index.batches) {
    assert(fs.existsSync(path.join(ROOT, entry.file)), `batch file ${entry.batchId}`);
    assert(entry.rowCount <= 100, `max 100 ${entry.batchId}`);
    batchSum += entry.rowCount;
    assert(entry.sha256 === sha256File(entry.file), `batch sha ${entry.batchId}`);
    const batchRows = loadCsv(path.join(ROOT, entry.file)).rows;
    for (const row of batchRows) {
      assert(!batchIds.has(row.finding_stable_ids), `batch duplicate ${row.finding_stable_ids}`);
      batchIds.add(row.finding_stable_ids);
      assert(row.owner_status === "PENDING", `pending ${row.finding_stable_ids}`);
      assert(row.owner_decision === "" && row.owner_new === "", `blank decision/new ${row.finding_stable_ids}`);
      assert(row.owner_note.includes("OWNER_REVIEW_REQUIRED"), `note marker ${row.finding_stable_ids}`);
    }
  }
  assert(batchSum === 7737, "batch sum 7737");
  assert(batchIds.size === 7737, "batch unique ids 7737");

  for (const row of remaining.rows) {
    assert(row.owner_status === "PENDING", `remaining pending ${row.finding_stable_ids}`);
    assert(row.owner_decision === "" && row.owner_new === "", `remaining blank ${row.finding_stable_ids}`);
    assert(row.owner_note.includes("OWNER_REVIEW_REQUIRED"), `remaining note ${row.finding_stable_ids}`);
    assert(row.unresolved_category, `remaining category ${row.finding_stable_ids}`);
  }
}

function testDeterminism() {
  const first = runOwnerReview7737Escalations({ root: ROOT, dryRun: true });
  const second = runOwnerReview7737Escalations({ root: ROOT, dryRun: true });
  assert(first.pass && second.pass, "triage dry-run pass");
  assert(first.proof.outputHash === second.proof.outputHash, "triage deterministic output hash");

  const parallelFirst = applyParallelEscalationReview({ root: ROOT, dryRun: true });
  const parallelSecond = applyParallelEscalationReview({ root: ROOT, dryRun: true });
  assert(parallelFirst.pass && parallelSecond.pass, "parallel dry-run pass");
  assert(parallelFirst.proof.reviewedDecided === 0, "parallel zero decided");
  assert(parallelFirst.proof.outputHash === parallelSecond.proof.outputHash, "parallel deterministic output hash");
}

function testEvidenceReviewHelpers() {
  assert(OWNER_DECISION_WRITING_DISABLED === true, "owner writing disabled");
  const unchanged = reviewEscalationRowEvidence({
    mapping_resolution: "EXACT_FIELD",
    post_crowdin_state: "UNCHANGED_SINCE_DISCOVERY",
    canonical_bucket: "MULTI_TRANSLATION_REVIEW_REQUIRED",
    languages: "bg",
    field_path: "study.examples[0].native",
    production_current: "test",
    de_reference: "test",
  });
  assert(unchanged.reviewOutcome === "PENDING", "unchanged stays pending");
  assert(unchanged.owner_decision === "", "unchanged no decision");
  assert(unchanged.evidence_tags.includes("UNCHANGED_SINCE_DISCOVERY_SCALAR"), "evidence tag");

  const composite = reviewEscalationRowEvidence({
    mapping_resolution: "COMPOSITE_SCOPE_CAPTURED",
    canonical_bucket: "WRONG_OR_MIXED_TARGET_LANGUAGE",
    languages: "bg",
    field_path: "lv, study",
    production_current: "{}",
  });
  assert(composite.reviewOutcome === "PENDING", "composite pending");
  assert(composite.owner_note.includes("OWNER_REVIEW_REQUIRED"), "composite note");
}

function testTamperFails() {
  const rel = "reports/g2-a1-phase3-owner-review-all-remaining-ingest-proof.json";
  const abs = path.join(ROOT, rel);
  const backup = fs.readFileSync(abs, "utf8");
  const proof = JSON.parse(backup);
  proof.decided = 0;
  fs.writeFileSync(abs, JSON.stringify(proof, null, 2));
  const source = verifySourceIntegrity(ROOT);
  fs.writeFileSync(abs, backup);
  assert(!source.pass, "tamper fails source integrity");
}

function testCategoryHelpers() {
  const row = {
    mapping_resolution: "COMPOSITE_SCOPE_CAPTURED",
    canonical_bucket: "WRONG_OR_MIXED_TARGET_LANGUAGE",
    languages: "lb",
    field_path: "lv, study",
    production_current: "{}",
  };
  assert(
    classifyUnresolvedCategory(row) === "COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER",
    "composite category",
  );
  assert(buildPrecisePendingNote(row).includes("OWNER_REVIEW_REQUIRED"), "note marker");
}

function testImmutableAttachments() {
  assert(sha256File("reports/g2-a1-owner-review-all-remaining-decisions-final.csv") === EXPECTED_DECISIONS_SHA, "decisions sha");
  assert(sha256File("reports/g2-a1-owner-review-needs-owner-final.csv") === EXPECTED_NEEDS_OWNER_SHA, "needs sha");
  assert(gitDiffCount(["data", "www/data"]) === 0, "git production diff 0");
  assert(gitDiffCount(["crowdin", path.relative(ROOT, STAGING_ROOT)]) === 0, "git crowdin diff 0");
}

function main() {
  assert(INGEST_COMMIT.startsWith("1b2212f2"), "ingest commit prefix");
  testSourceIntegrity();
  testReviewArtifacts();
  testDeterminism();
  testEvidenceReviewHelpers();
  testTamperFails();
  testCategoryHelpers();
  testImmutableAttachments();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_OWNER_REVIEW_7737_ESCALATIONS");
    process.exit(1);
  }
  console.log("PASS: g2-a1-owner-review-7737-escalations");
}

if (require.main === module) {
  main();
}

module.exports = { main };
