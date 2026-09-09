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
  OUT_DECISIONS,
  OUT_REMAINING,
  OUT_PROOF,
  verifySourceIntegrity,
} = require("./lib/g2-a1-phase3/owner-review-7737-escalations");
const {
  PRE_INGEST_HEAD,
  TRUSTED_INGEST_COMMIT,
  EXPECTED_REVIEW_7737_SHA,
  EXPECTED_PENDING_5104_SHA,
  EXPECTED_CONSOLIDATED_22650_SHA,
  TRUSTED_PRE_INGEST_DECISIONS_SHA,
  INGEST_REVIEW_CSV,
  INGEST_PENDING_CSV,
  OUT_INGEST_PROOF,
  loadIngestAttachments,
  ingestIndividualOwnerReview7737,
} = require("./lib/g2-a1-phase3/individual-7737-ingest");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function sha256File(filePath) {
  const abs = path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
  return crypto.createHash("sha256").update(fs.readFileSync(abs)).digest("hex");
}

function gitDiffCount(paths) {
  const output = execSync(`git diff --name-only origin/main -- ${paths.join(" ")}`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return output ? output.split("\n").filter(Boolean).length : 0;
}

function testAttachments() {
  const attachments = loadIngestAttachments();
  assert(attachments.pass, "attachments pass");
  assert(attachments.reviewSha === EXPECTED_REVIEW_7737_SHA, "review sha");
  assert(attachments.pendingSha === EXPECTED_PENDING_5104_SHA, "pending sha");
  assert(attachments.consolidatedSha === EXPECTED_CONSOLIDATED_22650_SHA, "consolidated sha");
  assert(attachments.reviewRows.length === 7737, "review rows 7737");
  assert(attachments.pendingRows.length === 5104, "pending rows 5104");
  assert(attachments.consolidatedRows.length === 22650, "consolidated rows 22650");
}

function testIngestArtifacts() {
  const proof = JSON.parse(fs.readFileSync(OUT_INGEST_PROOF, "utf8"));
  const escProof = JSON.parse(fs.readFileSync(OUT_PROOF, "utf8"));
  const decisions = loadCsv("reports/g2-a1-owner-review-all-remaining-decisions-final.csv");
  const needs = loadCsv("reports/g2-a1-owner-review-needs-owner-final.csv");
  const escDecisions = loadCsv(OUT_DECISIONS);
  const escRemaining = loadCsv(OUT_REMAINING);
  const index = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-batches-index.json"), "utf8"),
  );

  assert(proof.classification === "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_INGEST_READY", "ingest classification");
  assert(escProof.classification === "G2_A1_INDIVIDUAL_LINGUISTIC_OWNER_REVIEW_7737_COMPLETED_WITH_REMAINDER", "esc classification");
  assert(proof.newLabot === 2280, "new labot");
  assert(proof.newNelabot === 353, "new nelabot");
  assert(proof.newDecided === 2633, "new decided");
  assert(proof.remainingPending === 5104, "remaining pending");
  assert(proof.decided === 17546, "consolidated decided");
  assert(proof.labot === 3756, "consolidated labot");
  assert(proof.nelabot === 13790, "consolidated nelabot");
  assert(proof.pending === 5104, "consolidated pending");
  assert(proof.preexisting14913DecisionsChanged === 0, "14913 unchanged");
  assert(proof.batch001DecisionsChanged === 0, "batch001 unchanged");
  assert(proof.deferredBacklog29Closed === 0, "backlog preserved");
  assert(proof.automaticOwnerDecisions === 0, "no automatic decisions");
  assert(decisions.rows.length === 22650, "decisions final 22650");
  assert(needs.rows.length === 5104, "needs owner 5104");
  assert(escDecisions.rows.length === 2633, "esc decisions 2633");
  assert(escRemaining.rows.length === 5104, "esc remaining 5104");
  assert(sha256File(INGEST_REVIEW_CSV) === EXPECTED_REVIEW_7737_SHA, "ingest review sha");
  assert(sha256File(INGEST_PENDING_CSV) === EXPECTED_PENDING_5104_SHA, "ingest pending sha");

  let batchSum = 0;
  const ids = new Set();
  for (const entry of index.batches) {
    batchSum += entry.rowCount;
    const rows = loadCsv(path.join(ROOT, entry.file)).rows;
    for (const row of rows) {
      assert(!ids.has(row.finding_stable_ids), `duplicate ${row.finding_stable_ids}`);
      ids.add(row.finding_stable_ids);
    }
  }
  assert(batchSum === 7737, "esc batch sum 7737");
  assert(ids.size === 7737, "esc unique ids");
}

function testDeterminism() {
  const first = ingestIndividualOwnerReview7737({ root: ROOT, dryRun: true });
  const second = ingestIndividualOwnerReview7737({ root: ROOT, dryRun: true });
  assert(first.pass && second.pass, "dry-run pass");
  assert(first.proof.outputHash === second.proof.outputHash, "deterministic output hash");
}

function testImmutableProduction() {
  assert(gitDiffCount(["data", "www/data"]) === 0, "production diff 0");
  assert(gitDiffCount(["crowdin", path.relative(ROOT, STAGING_ROOT)]) === 0, "crowdin diff 0");
}

function testPreIngestBaselineRecorded() {
  assert(TRUSTED_PRE_INGEST_DECISIONS_SHA.length === 64, "trusted pre-ingest sha recorded");
  assert(PRE_INGEST_HEAD.startsWith("71dd4263"), "pre-ingest head");
  assert(TRUSTED_INGEST_COMMIT.startsWith("1b2212f2"), "trusted ingest commit");
}

function main() {
  testPreIngestBaselineRecorded();
  testAttachments();
  testIngestArtifacts();
  testDeterminism();
  testImmutableProduction();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_INDIVIDUAL_OWNER_REVIEW_7737_INGEST");
    process.exit(1);
  }
  console.log("PASS: g2-a1-individual-owner-review-7737-ingest");
}

if (require.main === module) {
  main();
}

module.exports = { main };
