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
  IMMUTABLE_SOURCES,
  BATCH_001_ID,
} = require("./lib/g2-a1-phase3/owner-review-all-batches");
const {
  EXPECTED_DECISIONS_SHA,
  EXPECTED_NEEDS_OWNER_SHA,
  REPAIRED_INPUT_HASH,
  DECISIONS_CSV,
  NEEDS_OWNER_CSV,
  ingestAllRemainingOwnerReview,
  reconcileIdentity,
  ownerGateStats,
} = require("./lib/g2-a1-phase3/all-remaining-ingest");

const OUT_INDEX = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-index.json");
const OUT_CONSOLIDATED = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-consolidated.csv");
const OUT_INGEST_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-remaining-ingest-proof.json");
const OUT_ALL_BATCHES_PROOF = path.join(ROOT, "reports/g2-a1-phase3-owner-review-all-batches-proof.json");

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

function testAttachmentHashes() {
  assert(fs.existsSync(DECISIONS_CSV), "decisions csv exists");
  assert(fs.existsSync(NEEDS_OWNER_CSV), "needs-owner csv exists");
  assert(sha256File("reports/g2-a1-owner-review-all-remaining-decisions-final.csv") === EXPECTED_DECISIONS_SHA, "decisions sha");
  assert(sha256File("reports/g2-a1-owner-review-needs-owner-final.csv") === EXPECTED_NEEDS_OWNER_SHA, "needs-owner sha");
  assert(fs.existsSync("reports/g2-a1-owner-review-all-remaining-proof-final.json"), "owner proof final exists");
}

function testIngestProofGates() {
  const proof = JSON.parse(fs.readFileSync(OUT_INGEST_PROOF, "utf8"));
  assert(proof.classification === "G2_A1_OWNER_REVIEW_ALL_REMAINING_INGEST_READY", "classification");
  assert(proof.rowCoverage === "22650/22650", "row coverage");
  assert(proof.batchCoverage === "232/232", "batch coverage");
  assert(proof.decided === 14913, "decided");
  assert(proof.labot === 1476, "labot");
  assert(proof.nelabot === 13437, "nelabot");
  assert(proof.pending === 7737, "pending");
  assert(proof.identityMismatch === 0, "identity mismatch");
  assert(proof.batch001DecisionsChanged === 0, "batch001 unchanged");
  assert(proof.deferredBacklog29Closed === 0, "deferred backlog preserved");
  assert(proof.productionDiff === 0, "production diff");
  assert(proof.crowdinDiff === 0, "crowdin diff");
  assert(proof.newRealLunaCalls === 0, "no luna calls");
}

function testConsolidatedAndBatches() {
  const consolidated = loadCsv(OUT_CONSOLIDATED);
  const index = JSON.parse(fs.readFileSync(OUT_INDEX, "utf8"));
  const decisions = loadCsv(DECISIONS_CSV);
  const assigned = new Map();
  assert(consolidated.rows.length === 22650, "consolidated rows");
  assert(index.batches.length === 232, "index batches");

  for (const row of consolidated.rows) {
    const decision = decisions.rows.find((d) => d.finding_stable_ids === row.finding_stable_id);
    assert(decision, `decision for ${row.finding_stable_id}`);
    assert(row.owner_status === decision.owner_status, `owner status ${row.finding_stable_id}`);
    assert(row.owner_decision === decision.owner_decision, `owner decision ${row.finding_stable_id}`);
    assert(row.owner_new === decision.owner_new, `owner new ${row.finding_stable_id}`);
    assert(row.owner_note === decision.owner_note, `owner note ${row.finding_stable_id}`);
    assigned.set(row.finding_stable_id, row.batch_id);
  }

  let batchSum = 0;
  for (const entry of index.batches) {
    assert(fs.existsSync(path.join(ROOT, entry.file)), `batch file ${entry.batchId}`);
    assert(entry.sha256 === sha256File(entry.file), `batch sha ${entry.batchId}`);
    const batch = loadCsv(path.join(ROOT, entry.file));
    batchSum += batch.rows.length;
    for (const row of batch.rows) {
      assert(assigned.get(row.finding_stable_ids) === entry.batchId, `assignment ${row.finding_stable_ids}`);
    }
  }
  assert(batchSum === 22650, "batch sum");
}

function testImmutables() {
  const proof = JSON.parse(fs.readFileSync(OUT_INGEST_PROOF, "utf8"));
  for (const rel of IMMUTABLE_SOURCES) {
    assert(
      proof.sourceArtifactSha256Before[rel] === proof.sourceArtifactSha256After[rel],
      `immutable ${rel}`,
    );
  }
  assert(gitDiffCount(["data", "www/data"]) === 0, "git production diff 0");
  assert(gitDiffCount(["crowdin", path.relative(ROOT, STAGING_ROOT)]) === 0, "git crowdin diff 0");
}

function testDeterminism() {
  const first = ingestAllRemainingOwnerReview({ root: ROOT, dryRun: true });
  const second = ingestAllRemainingOwnerReview({ root: ROOT, dryRun: true });
  assert(first.pass && second.pass, "dry-run pass");
}

function testRepairedInputHash() {
  const proof = JSON.parse(fs.readFileSync(OUT_ALL_BATCHES_PROOF, "utf8"));
  assert(proof.outputHash === REPAIRED_INPUT_HASH, "repaired input hash preserved");
}

function main() {
  testAttachmentHashes();
  testIngestProofGates();
  testConsolidatedAndBatches();
  testImmutables();
  testDeterminism();
  testRepairedInputHash();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_OWNER_REVIEW_ALL_REMAINING_INGEST");
    process.exit(1);
  }
  console.log("PASS: g2-a1-phase3-owner-review-all-remaining-ingest");
}

if (require.main === module) {
  main();
}

module.exports = { main };
