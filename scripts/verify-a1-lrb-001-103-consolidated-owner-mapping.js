#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  isCanonicalLeafFieldPath,
  validatePostOwnerCard,
} = require("./lib/g2-a1-lrb-consolidation-normalize");

const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const PREFIX = "A1-LRB-001-103";
const MAX_PART_BYTES = 4_000_000;

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
  } catch {
    return null;
  }
}

function loadDecisionsFromManifest(manifest) {
  if (!manifest.consolidated_decisions?.multipart) {
    const p = path.join(ROOT, manifest.consolidated_decisions.path);
    const doc = JSON.parse(fs.readFileSync(p, "utf8"));
    return { decisions: doc.leaf_decisions || doc.decisions || [], parts: [manifest.consolidated_decisions] };
  }
  const all = [];
  const parts = manifest.consolidated_decisions.parts || [];
  for (const part of parts) {
    const abs = path.join(ROOT, part.path);
    const raw = fs.readFileSync(abs);
    if (sha256(raw) !== part.sha256) {
      throw new Error(`multipart_sha_mismatch:${part.path}`);
    }
    if (part.byte_length != null && Buffer.byteLength(raw) !== part.byte_length) {
      throw new Error(`multipart_size_mismatch:${part.path}`);
    }
    if (Buffer.byteLength(raw) > MAX_PART_BYTES) {
      throw new Error(`multipart_oversize:${part.path}`);
    }
    const doc = JSON.parse(raw.toString("utf8"));
    const rows = doc.leaf_decisions || doc.decisions || [];
    if (part.row_count != null && part.row_count !== rows.length) {
      throw new Error(`multipart_row_count_mismatch:${part.path}`);
    }
    all.push(...rows);
  }
  return { decisions: all, parts };
}

function main() {
  const blockers = [];
  const verifiedCommitSha = git("git rev-parse HEAD");
  const originMain = git("git rev-parse origin/main");
  const diffNames = git("git diff --name-only origin/main...HEAD")?.split("\n").filter(Boolean) || [];
  const allowedRe =
    /^(reports\/g2-a1-owner\/consolidation\/|scripts\/(?:.*a1-lrb.*consolidat|verify-a1-lrb-001-103|apply-a1-lrb-owner-45|build-a1-lrb-|lib\/g2-a1-lrb-))/;
  for (const f of diffNames) {
    if (!allowedRe.test(f)) blockers.push(`unexpected_diff:${f}`);
  }
  for (const forbidden of ["data/", "www/", "languages/"]) {
    if (diffNames.some((f) => f.startsWith(forbidden))) blockers.push(`forbidden_path:${forbidden}`);
  }

  const proofPath = path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-PROOF.json`);
  const manifestPath = path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`);
  for (const req of [
    `${PREFIX}-CONSOLIDATION-PROOF.json`,
    `${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`,
    `${PREFIX}-CONSOLIDATION-SUMMARY.md`,
    `${PREFIX}-PRODUCTION-APPLY-PLAN.json`,
    `${PREFIX}-FINDING-ROW-RECONCILIATION.json`,
  ]) {
    if (!fs.existsSync(path.join(FINAL_DIR, req))) blockers.push(`missing:${req}`);
  }

  const proof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const gates = proof.gates || {};

  const expectedGates = {
    lrb_coverage: "103/103",
    linguistically_closed: "103/103",
    pending: 0,
    unresolved_owner_conflicts: 0,
    owner_45_applied: "45/45",
    duplicate_final_keys: 0,
    missing_final_values: 0,
    unauthorized_empty_values: 0,
    synthetic_empty_values: 0,
    implicit_deletion_authorizations: 0,
    malformed_leaf_paths: 0,
    invalid_card_schema_count: 0,
    source_verify_failures: 0,
    incomplete_full_cards: 0,
    full_card_baseline_missing: 0,
    full_card_overlay_failures: 0,
    full_card_source_sha_failures: 0,
    de_change_targets: 0,
    production_changes: 0,
    crowdin_changes: 0,
    ingest_apply_changes: 0,
  };
  for (const [k, v] of Object.entries(expectedGates)) {
    if (gates[k] !== v) blockers.push(`gate:${k}=${gates[k]} expected=${v}`);
  }

  if (
    proof.classification !==
    "A1_LRB_001_103_CONSOLIDATION_CORRECTION_2_COMPLETE_AWAITING_OWNER_VERIFICATION"
  ) {
    blockers.push(`classification:${proof.classification}`);
  }

  if (!manifest.generation_base_sha) blockers.push("missing:generation_base_sha");

  let decisions;
  try {
    decisions = loadDecisionsFromManifest(manifest).decisions;
  } catch (e) {
    blockers.push(String(e.message || e));
    decisions = [];
  }

  if (manifest.leaf_decisions_count !== decisions.length) {
    blockers.push(
      `multipart_row_sum_mismatch:manifest=${manifest.leaf_decisions_count} actual=${decisions.length}`
    );
  }

  if (manifest.consolidated_decisions?.multipart) {
    const listed = manifest.consolidated_decisions.parts || [];
    for (let i = 0; i < listed.length; i += 1) {
      const expectedPart = i + 1;
      if (!String(listed[i].path).includes(`.part-${String(expectedPart).padStart(3, "0")}.json`)) {
        blockers.push(`multipart_order:${listed[i].path}`);
      }
    }
  }

  const keySet = new Set();
  let malformed = 0;
  let unauthorizedApplyEmpty = 0;
  for (const d of decisions) {
    const k = `${d.target_language}|${d.canonical_card_object_id}|${d.exact_leaf_field_path}`;
    if (keySet.has(k)) blockers.push(`duplicate_key:${k}`);
    keySet.add(k);
    if (!isCanonicalLeafFieldPath(d.exact_leaf_field_path)) malformed += 1;
    if (d.apply_eligible && String(d.owner_final_value) === "" && !d.explicit_intentional_deletion) {
      unauthorizedApplyEmpty += 1;
    }
  }
  if (malformed) blockers.push(`malformed_leaf_paths_recheck:${malformed}`);
  if (unauthorizedApplyEmpty) blockers.push(`unauthorized_apply_empty:${unauthorizedApplyEmpty}`);

  const applyPlan = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-PRODUCTION-APPLY-PLAN.json`), "utf8")
  );
  const applyEmpty = (applyPlan.targets || []).filter(
    (t) => String(t.owner_final_value) === ""
  ).length;
  if (applyEmpty) blockers.push(`apply_plan_empty_targets:${applyEmpty}`);

  const cardErrors = [];
  for (const c of applyPlan.full_cards || []) {
    validatePostOwnerCard(
      c.post_owner_card,
      `${c.target_language}|${c.canonical_card_object_id}`,
      cardErrors
    );
    if (!c.post_owner_card_sha256 || !c.full_card_source_sha256) {
      blockers.push(`missing_card_sha:${c.target_language}|${c.canonical_card_object_id}`);
    }
  }
  if (cardErrors.length) blockers.push(`invalid_card_schema_recheck:${cardErrors.length}`);

  let supersededRecalc = 0;
  for (const d of decisions) {
    for (const s of d.superseded_sources || []) {
      if (s.leaf_value_sha256 && s.leaf_value_sha256 !== d.leaf_value_sha256) supersededRecalc += 1;
    }
  }
  if (gates.superseded_values_selected !== supersededRecalc) {
    blockers.push(
      `superseded_values_selected_mismatch:proof=${gates.superseded_values_selected} recalc=${supersededRecalc}`
    );
  }

  const verificationProof = {
    schema_version: 2,
    generated_at: new Date().toISOString(),
    verified_commit_sha: verifiedCommitSha,
    generation_base_sha: manifest.generation_base_sha,
    origin_main_sha: originMain,
    classification: proof.classification,
    pass: blockers.length === 0,
    blockers,
    leaf_decisions_count: decisions.length,
    apply_eligible_leaf_decisions: gates.apply_eligible_leaf_decisions,
    manifest_sha256: sha256(fs.readFileSync(manifestPath)),
    proof_sha256: sha256(fs.readFileSync(proofPath)),
    gates_rechecked: {
      malformed_leaf_paths: malformed,
      unauthorized_apply_empty: unauthorizedApplyEmpty,
      invalid_card_schema_count: cardErrors.length,
      superseded_values_selected: supersededRecalc,
    },
  };

  if (process.env.A1_WRITE_VERIFICATION_PROOF === "1") {
    fs.writeFileSync(
      path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-VERIFICATION-PROOF.json`),
      JSON.stringify(verificationProof, null, 2) + "\n"
    );
  }

  console.log(JSON.stringify(verificationProof, null, 2));
  if (blockers.length) process.exit(1);
}

if (require.main === module) main();
