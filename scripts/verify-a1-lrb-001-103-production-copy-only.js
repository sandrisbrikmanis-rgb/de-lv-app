#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  PREFIX,
  PREP_DIR,
  EXPECTED_MAIN_SHA,
  EXPECTED_PRODUCTION_FILE_SET_SHA,
} = require("./lib/g2-a1-lrb-production-copy-only-prep");
const { sha256 } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");

const REQUIRED = [
  `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`,
  `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`,
  `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1.json`,
  `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1-PROOF.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-BLOCKERS.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-MANIFEST.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-SUMMARY.md`,
];

function main() {
  const blockers = [];
  const originMain = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  if (originMain !== EXPECTED_MAIN_SHA) blockers.push(`origin_main_mismatch:${originMain}`);

  for (const name of REQUIRED) {
    if (!fs.existsSync(path.join(PREP_DIR, name))) blockers.push(`missing:${name}`);
  }

  const manifest = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-MANIFEST.json`), "utf8")
  );
  for (const art of manifest.artifacts || []) {
    const raw = fs.readFileSync(path.join(ROOT, art.path));
    if (sha256(raw) !== art.sha256) blockers.push(`manifest_sha_mismatch:${art.path}`);
  }

  const prepProof = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`), "utf8")
  );
  const dryRun = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`), "utf8")
  );
  const atomic = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`), "utf8")
  );
  const resolutionProof = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1-PROOF.json`), "utf8")
  );

  const txnTestPath = path.join(
    PREP_DIR,
    `${PREFIX}-PRODUCTION-TRANSACTION-CORRECTION-2-TEST-RESULT.json`
  );
  let txnTest = null;
  if (fs.existsSync(txnTestPath)) {
    txnTest = JSON.parse(fs.readFileSync(txnTestPath, "utf8"));
    if (!txnTest.pass) blockers.push("transaction_tests_failed");
    if ((txnTest.rollback_test_failures || 0) !== 0) blockers.push("rollback_test_failures");
  } else {
    blockers.push("missing:TRANSACTION-TEST-RESULT");
  }

  const gates = [
    ["total_owner_cards", dryRun.total_owner_cards, 234],
    ["atomic_ready_cards", dryRun.atomic_ready_cards, 234],
    ["blocked_cards", dryRun.blocked_cards, 0],
    ["leaf_trace_rows", dryRun.leaf_trace_rows, 4787],
    ["unique_planned_files", dryRun.unique_planned_files, 46],
    ["duplicate_pending_write_paths", dryRun.duplicate_pending_write_paths, 0],
    ["backup_file_count", dryRun.backup_file_count, 46],
    ["production_files_changed", dryRun.production_files_changed, 0],
    ["de_files_changed", dryRun.de_files_changed, 0],
    ["crowdin_files_changed", dryRun.crowdin_files_changed, 0],
    ["ingest_apply_changes", dryRun.ingest_apply_changes, 0],
  ];
  for (const [name, actual, expected] of gates) {
    if (actual !== expected) blockers.push(`dry_run_gate:${name}:${actual}`);
  }

  if (dryRun.production_file_set_sha256_before !== EXPECTED_PRODUCTION_FILE_SET_SHA) {
    blockers.push("production_file_set_sha_before_mismatch");
  }
  if (dryRun.production_file_set_sha256_after !== EXPECTED_PRODUCTION_FILE_SET_SHA) {
    blockers.push("production_file_set_sha_after_mismatch");
  }

  if (atomic.total_owner_cards !== 234) blockers.push("atomic_total_cards");
  if (atomic.blocked_cards !== 0) blockers.push("atomic_blocked_cards");
  if (atomic.atomic_ready_cards !== 234) blockers.push("atomic_ready_cards");

  const txnClassification =
    dryRun.classification ||
    "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_TRANSACTION_CORRECTION_2_READY_AWAITING_OWNER_REVERIFICATION";
  const packagePass =
    blockers.length === 0 &&
    prepProof.pass === true &&
    resolutionProof.pass === true &&
    dryRun.pass === true &&
    txnClassification ===
      "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_TRANSACTION_CORRECTION_2_READY_AWAITING_OWNER_REVERIFICATION";

  const out = {
    pass: packagePass,
    blockers,
    classification: txnClassification,
    next_action: "OWNER_REVERIFY_PRODUCTION_COPY_ONLY_TRANSACTION",
    transaction_tests_pass: txnTest?.pass ?? false,
    mapping_sha256: manifest.mapping_sha256,
    prep_proof_sha256: manifest.prep_proof_sha256,
    dry_run: {
      total_owner_cards: dryRun.total_owner_cards,
      atomic_ready_cards: dryRun.atomic_ready_cards,
      blocked_cards: dryRun.blocked_cards,
      production_files_changed: dryRun.production_files_changed,
    },
  };
  console.log(JSON.stringify(out, null, 2));
  process.exit(packagePass ? 0 : 1);
}

main();
