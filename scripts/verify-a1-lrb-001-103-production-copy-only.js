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
  `${PREFIX}-PRODUCTION-POST-WRITE-CORRECTION-3-PROOF.json`,
  `${PREFIX}-PRODUCTION-POST-WRITE-CORRECTION-3-TEST-RESULT.json`,
  `${PREFIX}-PRODUCTION-POST-WRITE-CORRECTION-3-SUMMARY.md`,
];

const TARGET_CLASSIFICATION =
  "A1_LRB_001_103_PRODUCTION_COPY_ONLY_POST_WRITE_CORRECTION_3_READY_AWAITING_OWNER_REVERIFICATION";

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

  const postWriteTestPath = path.join(
    PREP_DIR,
    `${PREFIX}-PRODUCTION-POST-WRITE-CORRECTION-3-TEST-RESULT.json`
  );
  let postWriteTest = null;
  if (fs.existsSync(postWriteTestPath)) {
    postWriteTest = JSON.parse(fs.readFileSync(postWriteTestPath, "utf8"));
    if (!postWriteTest.pass) blockers.push("post_write_transaction_tests_failed");
    if ((postWriteTest.rollback_test_failures || 0) !== 0) blockers.push("rollback_test_failures");
    if ((postWriteTest.post_write_test_failures || 0) !== 0) blockers.push("post_write_test_failures");
  } else {
    blockers.push("missing:POST-WRITE-TEST-RESULT");
  }

  const postWriteProofPath = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-POST-WRITE-CORRECTION-3-PROOF.json`);
  let postWriteProof = null;
  if (fs.existsSync(postWriteProofPath)) {
    postWriteProof = JSON.parse(fs.readFileSync(postWriteProofPath, "utf8"));
    if (!postWriteProof.pass && dryRun.mode === "DRY_RUN") blockers.push("post_write_proof_not_pass");
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
    ["post_write_file_sha_mismatches", dryRun.post_write_file_sha_mismatches ?? 0, 0],
    ["post_write_card_sha_mismatches", dryRun.post_write_card_sha_mismatches ?? 0, 0],
    ["post_write_data_www_drift", dryRun.post_write_data_www_drift ?? 0, 0],
    ["post_write_syntax_failures", dryRun.post_write_syntax_failures ?? 0, 0],
    ["post_write_de_changes", dryRun.post_write_de_changes ?? 0, 0],
    ["unauthorized_changed_files", dryRun.unauthorized_changed_files ?? 0, 0],
    ["rollback_test_failures", dryRun.rollback_test_failures ?? 0, 0],
    ["post_write_test_failures", dryRun.post_write_test_failures ?? 0, 0],
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

  const txnClassification = dryRun.classification || TARGET_CLASSIFICATION;
  if (txnClassification !== TARGET_CLASSIFICATION) blockers.push(`classification_mismatch:${txnClassification}`);

  const packagePass =
    blockers.length === 0 &&
    prepProof.pass === true &&
    resolutionProof.pass === true &&
    dryRun.pass === true &&
    txnClassification === TARGET_CLASSIFICATION &&
    (postWriteTest?.pass ?? false);

  const out = {
    pass: packagePass,
    blockers,
    classification: txnClassification,
    next_action: "OWNER_REVERIFY_POST_WRITE_TRANSACTION",
    transaction_tests_pass: postWriteTest?.pass ?? false,
    post_write_test_failures: postWriteTest?.post_write_test_failures ?? null,
    rollback_test_failures: postWriteTest?.rollback_test_failures ?? null,
    mapping_sha256: manifest.mapping_sha256,
    prep_proof_sha256: manifest.prep_proof_sha256,
    dry_run: {
      total_owner_cards: dryRun.total_owner_cards,
      atomic_ready_cards: dryRun.atomic_ready_cards,
      blocked_cards: dryRun.blocked_cards,
      production_files_changed: dryRun.production_files_changed,
      post_write_verification_pass: dryRun.post_write_verification_pass,
    },
  };
  console.log(JSON.stringify(out, null, 2));
  process.exit(packagePass ? 0 : 1);
}

main();
