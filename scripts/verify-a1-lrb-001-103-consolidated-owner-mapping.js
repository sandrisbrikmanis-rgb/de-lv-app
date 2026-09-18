#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const PREFIX = "A1-LRB-001-103";

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

function loadDecisions(manifest) {
  if (!manifest.consolidated_decisions?.multipart) {
    const p = path.join(ROOT, manifest.consolidated_decisions.path);
    const doc = JSON.parse(fs.readFileSync(p, "utf8"));
    return doc.leaf_decisions || doc.decisions || [];
  }
  const all = [];
  for (const part of manifest.consolidated_decisions.parts) {
    const doc = JSON.parse(fs.readFileSync(path.join(ROOT, part.path), "utf8"));
    all.push(...(doc.leaf_decisions || doc.decisions || []));
  }
  return all;
}

function main() {
  const blockers = [];
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
  ]) {
    if (!fs.existsSync(path.join(FINAL_DIR, req))) blockers.push(`missing:${req}`);
  }

  const proof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const gates = proof.gates || {};
  const expected = {
    lrb_coverage: "103/103",
    linguistically_closed: "103/103",
    pending: 0,
    unresolved_owner_conflicts: 0,
    owner_45_applied: "45/45",
    duplicate_final_keys: 0,
    missing_final_values: 0,
    superseded_values_selected: 0,
    de_change_targets: 0,
    production_changes: 0,
    crowdin_changes: 0,
    ingest_apply_changes: 0,
  };
  for (const [k, v] of Object.entries(expected)) {
    if (gates[k] !== v) blockers.push(`gate:${k}=${gates[k]} expected=${v}`);
  }

  const decisions = loadDecisions(manifest);
  const keySet = new Set();
  for (const d of decisions) {
    const k = `${d.target_language}|${d.canonical_card_object_id}|${d.exact_leaf_field_path}`;
    if (keySet.has(k)) blockers.push(`duplicate_key:${k}`);
    keySet.add(k);
    for (const shaField of ["source_gala_pass_commit", "source_artifact_sha256"]) {
      if (!d[shaField]) blockers.push(`missing_sha_field:${k}:${shaField}`);
    }
    if (d.source_gala_pass_commit && !git(`git cat-file -e ${d.source_gala_pass_commit}^{commit} 2>/dev/null && echo yes`)) {
      blockers.push(`unreachable_commit:${d.source_gala_pass_commit}`);
    }
  }

  const out = {
    pass: blockers.length === 0,
    blockers,
    origin_main_sha: originMain,
    consolidation_head_sha: git("git rev-parse HEAD"),
    leaf_decisions: decisions.length,
    manifest_sha256: sha256(fs.readFileSync(manifestPath)),
    proof_sha256: sha256(fs.readFileSync(proofPath)),
    classification: proof.classification,
  };
  console.log(JSON.stringify(out, null, 2));
  if (blockers.length) process.exit(1);
}

if (require.main === module) main();
