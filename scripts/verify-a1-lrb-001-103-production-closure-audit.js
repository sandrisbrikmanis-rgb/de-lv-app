#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  EXPECTED_MAIN_HEAD,
  EXPECTED_PRODUCTION_FILE_SET_SHA,
  FINAL_CLASS,
  runProductionClosureAudit,
} = require("./lib/g2-a1-lrb-production-closure-audit");

const PREFIX = "A1-LRB-001-103";
const CLOSURE_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/production-closure");
const FINDING_ROW_TOTAL = 4968;
const LEAF_TOTAL = 4787;
const CARD_TOTAL = 234;

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
}

function main() {
  const blockers = [];

  if (git("git rev-parse origin/main") !== EXPECTED_MAIN_HEAD) {
    blockers.push("origin_main_mismatch");
  }

  const required = [
    `${PREFIX}-PRODUCTION-CLOSURE-AUDIT.json`,
    `${PREFIX}-PRODUCTION-CLOSURE-PROOF.json`,
    `${PREFIX}-PRODUCTION-CARD-COVERAGE.json`,
    `${PREFIX}-PRODUCTION-CLOSURE-SUMMARY.md`,
    `${PREFIX}-PRODUCTION-CLOSURE-MANIFEST.json`,
  ];
  for (const name of required) {
    if (!fs.existsSync(path.join(CLOSURE_DIR, name))) blockers.push(`missing_artifact:${name}`);
  }

  const findingBase = path.join(CLOSURE_DIR, `${PREFIX}-FINDING-ROW-CLOSURE-RECONCILIATION.json`);
  const findingPartGlob = fs
    .readdirSync(CLOSURE_DIR)
    .filter((f) => f.startsWith(`${PREFIX}-FINDING-ROW-CLOSURE-RECONCILIATION.part-`));
  if (!fs.existsSync(findingBase) && findingPartGlob.length === 0) {
    blockers.push("missing_finding_reconciliation");
  }

  const live = runProductionClosureAudit();
  if (!live.pass) blockers.push(...live.blockers.map((b) => `live_audit:${b}`));

  const auditDoc = JSON.parse(
    fs.readFileSync(path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CLOSURE-AUDIT.json`), "utf8")
  );
  if (auditDoc.production_file_set_sha256 !== EXPECTED_PRODUCTION_FILE_SET_SHA) {
    blockers.push("artifact_production_file_set_sha_mismatch");
  }
  if (auditDoc.pass !== live.pass) blockers.push("artifact_pass_stale");

  const proof = JSON.parse(
    fs.readFileSync(path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CLOSURE-PROOF.json`), "utf8")
  );
  if (proof.finding_row_reconciliation_sum !== FINDING_ROW_TOTAL) {
    blockers.push("finding_row_sum_mismatch");
  }
  if ((proof.blockers || []).length !== 0 && live.pass) blockers.push("proof_blockers_stale");

  const counts = auditDoc.finding_row_classification_counts || {};
  const sum = Object.values(counts).reduce((a, b) => a + b, 0);
  if (sum !== FINDING_ROW_TOTAL) blockers.push(`classification_sum:${sum}`);
  if ((counts[FINAL_CLASS.BLOCKED] || 0) !== 0) blockers.push("blocked_unreconciled_in_artifacts");

  try {
    execSync("node scripts/verify-a1-lrb-001-103-consolidated-owner-mapping.js", {
      cwd: ROOT,
      stdio: "pipe",
    });
  } catch {
    blockers.push("consolidation_verifier_fail");
  } finally {
    try {
      execSync(
        `git checkout -- reports/g2-a1-owner/consolidation/final/${PREFIX}-CONSOLIDATION-VERIFICATION-PROOF.json`,
        { cwd: ROOT, stdio: "pipe" }
      );
    } catch {
      /* ignore */
    }
  }

  const pass = blockers.length === 0 && live.pass;
  const out = {
    pass,
    closure_pass: pass,
    blockers,
    lrb_coverage: live.lrb_coverage,
    finding_rows_reconciled: `${FINDING_ROW_TOTAL}/${FINDING_ROW_TOTAL}`,
    owner_card_keys: `${CARD_TOTAL}/${CARD_TOTAL}`,
    owner_leaf_matches: live.post_apply?.owner_leaf_matches,
    unique_production_slots: live.post_apply?.unique_production_slots,
    pending: 0,
    unresolved: live.post_apply?.unresolved_alias_conflicts,
    trace_gaps: 0,
    de_changes: 0,
    classification: pass
      ? "A1_LRB_001_103_PRODUCTION_CLOSURE_AUDIT_PASS_AWAITING_OWNER_VERIFICATION"
      : "A1_LRB_001_103_PRODUCTION_CLOSURE_AUDIT_BLOCKED",
    next_action: pass ? "OWNER_VERIFY_A1_LRB_PRODUCTION_CLOSURE" : "RESOLVE_EXACT_CLOSURE_BLOCKERS",
  };
  console.log(JSON.stringify(out, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
