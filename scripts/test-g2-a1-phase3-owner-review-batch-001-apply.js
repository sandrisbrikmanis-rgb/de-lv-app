#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { EXPECTED_SOURCE_HASH, validateSourceIntegrity } = require("./lib/g2-a1-phase3/owner-prep-usability");
const { STAGING_ROOT } = require("./lib/g2-a1-phase3/constants");
const { applyOwnerReviewBatch001, loadCsv } = require("./apply-g2-a1-phase3-owner-review-batch-001");

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

function main() {
  const proof = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-proof.json"), "utf8"),
  );
  assert(proof.classification === "G2_A1_OWNER_REVIEW_BATCH_001_DECIDED", "proof classified decided");
  assert(proof.batchStatus === "DECIDED", "batch status decided");
  assert(proof.sourceHash === EXPECTED_SOURCE_HASH, "source hash unchanged");
  assert(proof.ownerDecisionCounts.NELABOT === 100, "100 NELABOT");
  assert(proof.ownerDecisionCounts.LABOT === 0, "0 LABOT");
  assert(proof.ownerDecisionCounts.NEW === 0, "0 NEW");
  assert(proof.targetLanguageBacklogCount === 29, "29 target-language backlog flags");
  assert(proof.productionChanged === false, "no production apply for NELABOT-only batch");
  assert(proof.productionFilesChanged === 0, "0 production files changed");
  assert(proof.newLunaCalls === 0, "no luna calls");

  const { rows } = loadCsv(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-decisions.csv"));
  assert(rows.length === 100, "100 decided rows");
  assert(rows.every((row) => row.owner_status === "DECIDED"), "all decided");
  assert(rows.every((row) => row.owner_decision === "NELABOT"), "all NELABOT");

  const view = fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-review-batch-001-view.md"), "utf8");
  assert((view.match(/\*\*OWNER DECISION:\*\* NELABOT/g) || []).length === 100, "view decisions");

  const integrity = validateSourceIntegrity(ROOT);
  assert(integrity.pass, "global source integrity still pass");

  const productionDiff = execSync("git diff --name-only -- data www/data", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  assert(productionDiff === "", "production unchanged");

  const lvSha = sha256File("data/a1.js");
  const stagingSha = sha256File(path.relative(ROOT, path.join(STAGING_ROOT, "en-a1.json")));
  assert(lvSha, "lv sha readable");
  assert(stagingSha, "staging sha readable");

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) {
    console.error("BLOCKED_G2_A1_OWNER_REVIEW_BATCH_001_APPLY");
    process.exit(1);
  }
  console.log("PASS: g2-a1-phase3-owner-review-batch-001-apply");
}

if (require.main === module) {
  main();
}

module.exports = { main };
