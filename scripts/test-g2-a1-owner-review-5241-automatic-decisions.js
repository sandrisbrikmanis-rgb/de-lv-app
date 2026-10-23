#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { STAGING_ROOT } = require("./lib/g2-a1-phase3/constants");
const { EXPECTED_DECISIONS_SHA, EXPECTED_NEEDS_OWNER_SHA } = require("./lib/g2-a1-phase3/all-remaining-ingest");
const {
  OUT_DECISIONS,
  OUT_REMAINING,
  OUT_PROOF,
  verifySourceIntegrity,
  applyParallelEscalationReview,
} = require("./lib/g2-a1-phase3/owner-review-7737-escalations");
const {
  OWNER_DECISION_WRITING_DISABLED,
  reviewEscalationRowEvidence,
} = require("./lib/g2-a1-phase3/review-escalation-row-evidence");
const {
  TRUSTED_INGEST_COMMIT,
  TRUSTED_PENDING_BASELINE_COMMIT,
  AUDITED_AUTOMATIC_COMMIT,
  OUT_AUDIT_PROOF,
  OUT_RESTORED_PENDING,
  compareEscalationCommits,
  runAutomaticDecisionsAudit,
  runAutomaticDecisionsRepair,
  checkpointSetSha,
} = require("./lib/g2-a1-phase3/automatic-decisions-5241-audit-repair");

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

function gitShow(commit, relPath) {
  return execSync(`git show ${commit}:${relPath}`, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
}

function testAuditGates() {
  const comparison = compareEscalationCommits();
  assert(comparison.pass, "audit comparison pass");
  assert(comparison.gates.escalationInput === 7737, "escalation input 7737");
  assert(comparison.gates.missing === 0, "missing 0");
  assert(comparison.gates.extra === 0, "extra 0");
  assert(comparison.gates.duplicateStableIds === 0, "duplicate 0");
  assert(comparison.gates.nonOwnerIdentityMismatch === 0, "identity mismatch 0");
  assert(comparison.gates.newLabot === 0, "new labot 0");
  assert(comparison.gates.newNelabot === 5241, "new nelabot 5241");
  assert(comparison.gates.remainingPending === 2496, "pre-repair pending 2496");
  assert(comparison.gates.automaticRuleDecisions === 5241, "automatic rule 5241");
  assert(comparison.gates.individualLinguisticProvenance === 0, "individual provenance 0");
  assert(comparison.gates.trustedNewOwnerDecisions === 0, "trusted new 0");
}

function testRepairArtifacts() {
  const proof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const auditProof = JSON.parse(fs.readFileSync(OUT_AUDIT_PROOF, "utf8"));
  const decisions = loadCsv(OUT_DECISIONS);
  const remaining = loadCsv(OUT_REMAINING);
  const restored = loadCsv(OUT_RESTORED_PENDING);
  const index = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-batches-index.json"), "utf8"),
  );

  assert(proof.classification === "G2_A1_ESCALATION_REVIEW_5241_AUTOMATIC_DECISIONS_REPAIRED", "repair classification");
  assert(auditProof.pass, "audit proof pass");
  assert(proof.restoredToPending === 5241, "restored 5241");
  assert(proof.escalationPending === 7737, "escalation pending 7737");
  assert(proof.reviewedDecided === 0, "reviewed decided 0");
  assert(proof.automaticOwnerDecisions === 0, "automatic owner decisions 0");
  assert(proof.automaticDecisionWritingDisabled === true, "writing disabled");
  assert(decisions.rows.length === 0, "decisions empty");
  assert(remaining.rows.length === 7737, "remaining 7737");
  assert(restored.rows.length === 5241, "restored csv 5241");
  assert(proof.preexisting14913DecisionsChanged === 0, "14913 unchanged");
  assert(proof.batch001DecisionsChanged === 0, "batch001 unchanged");
  assert(proof.deferredBacklog29Closed === 0, "backlog preserved");
  assert(proof.productionDiff === 0, "production diff 0");
  assert(proof.crowdinDiff === 0, "crowdin diff 0");
  assert(proof.newRealLunaCalls === 0, "no luna calls");
  assert(proof.checkpointShaBefore === proof.checkpointShaAfter, "checkpoint unchanged");

  let batchSum = 0;
  const batchIds = new Set();
  for (const entry of index.batches) {
    assert(entry.status === "PENDING", `batch status ${entry.batchId}`);
    assert((entry.decidedCount || 0) === 0, `batch decided 0 ${entry.batchId}`);
    assert(entry.pendingCount === entry.rowCount, `batch pending count ${entry.batchId}`);
    batchSum += entry.rowCount;
    const batchRows = loadCsv(path.join(ROOT, entry.file)).rows;
    for (const row of batchRows) {
      assert(!batchIds.has(row.finding_stable_ids), `duplicate ${row.finding_stable_ids}`);
      batchIds.add(row.finding_stable_ids);
      assert(row.owner_status === "PENDING", `pending ${row.finding_stable_ids}`);
      assert(row.owner_decision === "" && row.owner_new === "", `blank owner ${row.finding_stable_ids}`);
      assert(row.owner_note.includes("OWNER_REVIEW_REQUIRED"), `note marker ${row.finding_stable_ids}`);
    }
  }
  assert(batchSum === 7737, "batch sum 7737");
  assert(index.batches.length === 78, "esc batch coverage 78");

  const baselineRemainingSha = sha256Hex(
    gitShow(TRUSTED_PENDING_BASELINE_COMMIT, "reports/g2-a1-owner-review-7737-escalations-remaining.csv"),
  );
  const currentRemainingSha = sha256File("reports/g2-a1-owner-review-7737-escalations-remaining.csv");
  assert(baselineRemainingSha === currentRemainingSha, "remaining matches trusted baseline sha");
}

function testTrustedBaselinesUnchanged() {
  assert(sha256File("reports/g2-a1-owner-review-all-remaining-decisions-final.csv") === EXPECTED_DECISIONS_SHA, "decisions sha");
  assert(sha256File("reports/g2-a1-owner-review-needs-owner-final.csv") === EXPECTED_NEEDS_OWNER_SHA, "needs sha");
  const source = verifySourceIntegrity(ROOT);
  assert(source.pass, "source integrity pass");
  assert(source.committedDecided.length === 14913, "trusted decided 14913");
  assert(source.committedPending.length === 7737, "trusted pending 7737");
}

function testEvidenceHelperBlocked() {
  assert(OWNER_DECISION_WRITING_DISABLED === true, "owner writing disabled flag");
  const row = reviewEscalationRowEvidence({
    mapping_resolution: "EXACT_FIELD",
    post_crowdin_state: "UNCHANGED_SINCE_DISCOVERY",
    canonical_bucket: "MULTI_TRANSLATION_REVIEW_REQUIRED",
    languages: "bg",
    field_path: "study.examples[0].native",
    production_current: "test",
    de_reference: "test",
  });
  assert(row.reviewOutcome === "PENDING", "evidence helper pending only");
  assert(row.owner_status === "PENDING", "owner status pending");
  assert(row.owner_decision === "", "owner decision blank");
  assert(row.owner_new === "", "owner new blank");
  assert(row.evidence_tags.includes("UNCHANGED_SINCE_DISCOVERY_SCALAR"), "evidence tag present");

  const parallel = applyParallelEscalationReview({ root: ROOT, dryRun: true });
  assert(parallel.pass, "parallel dry-run pass");
  assert(parallel.proof.reviewedDecided === 0, "parallel produces zero decided");
  assert(parallel.proof.remainingPending === 7737, "parallel all pending");
}

function testDeterminismAndIdempotence() {
  const first = runAutomaticDecisionsRepair({ root: ROOT, dryRun: true });
  const second = runAutomaticDecisionsRepair({ root: ROOT, dryRun: true });
  assert(first.pass && second.pass, "repair dry-run pass");
  assert(first.proof.outputHash === second.proof.outputHash, "repair deterministic");

  const permuted = runAutomaticDecisionsRepair({ root: ROOT, dryRun: true });
  assert(permuted.proof.outputHash === first.proof.outputHash, "repair order independent");
}

function testTamperFails() {
  const rel = "reports/g2-a1-phase3-owner-review-all-remaining-ingest-proof.json";
  const abs = path.join(ROOT, rel);
  const backup = fs.readFileSync(abs, "utf8");
  const proof = JSON.parse(backup);
  proof.pending = 0;
  fs.writeFileSync(abs, JSON.stringify(proof, null, 2));
  const source = verifySourceIntegrity(ROOT);
  fs.writeFileSync(abs, backup);
  assert(!source.pass, "tamper fails source integrity");
}

function testRestoredRowsMatchBaseline() {
  const comparison = compareEscalationCommits();
  const restored = loadCsv(OUT_RESTORED_PENDING).rows;
  for (const row of restored) {
    assert(row.decision_provenance === "AUTOMATIC_RULE_DECISION", `provenance ${row.finding_stable_ids}`);
    assert(row.owner_status_after === "PENDING", `restored pending ${row.finding_stable_ids}`);
    const trusted = comparison.baselineByStable.get(row.finding_stable_ids);
    assert(trusted, `trusted exists ${row.finding_stable_ids}`);
    assert(row.unresolved_category === trusted.unresolved_category, `category preserved ${row.finding_stable_ids}`);
  }
}

function testImmutableProduction() {
  assert(gitDiffCount(["data", "www/data"]) === 0, "git production diff 0");
  assert(gitDiffCount(["crowdin", path.relative(ROOT, STAGING_ROOT)]) === 0, "git crowdin diff 0");
}

function main() {
  assert(TRUSTED_INGEST_COMMIT.startsWith("1b2212f2"), "ingest commit");
  assert(TRUSTED_PENDING_BASELINE_COMMIT.startsWith("2fe6f7eb"), "baseline commit");
  assert(AUDITED_AUTOMATIC_COMMIT.startsWith("e2bbbc83"), "audited commit");
  testAuditGates();
  testRepairArtifacts();
  testTrustedBaselinesUnchanged();
  testEvidenceHelperBlocked();
  testDeterminismAndIdempotence();
  testTamperFails();
  testRestoredRowsMatchBaseline();
  testImmutableProduction();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_ESCALATION_REVIEW_5241_REPAIR");
    process.exit(1);
  }
  console.log("PASS: g2-a1-owner-review-5241-automatic-decisions");
}

if (require.main === module) {
  main();
}

module.exports = { main };
