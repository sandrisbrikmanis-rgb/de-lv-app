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
} = require("./lib/g2-a1-lrb-production-copy-only-prep");
const { sha256 } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");

const REQUIRED = [
  `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-BLOCKERS.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-MANIFEST.json`,
  `${PREFIX}-PRODUCTION-COPY-ONLY-SUMMARY.md`,
];

function main() {
  const blockers = [];
  const originMain = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  if (originMain !== EXPECTED_MAIN_SHA) {
    blockers.push(`origin_main_mismatch:${originMain}`);
  }

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
  const manifestRel = `reports/g2-a1-owner/consolidation/production-apply-prep/${PREFIX}-PRODUCTION-COPY-ONLY-MANIFEST.json`;
  if (!fs.existsSync(path.join(ROOT, manifestRel))) blockers.push("missing:MANIFEST");

  const prepProof = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`), "utf8")
  );
  const dryRun = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`), "utf8")
  );

  if (dryRun.production_files_changed !== 0) blockers.push("production_disk_changed");
  if ((dryRun.de_files_changed || 0) !== 0) blockers.push("de_changed");
  if ((dryRun.crowdin_files_changed || 0) !== 0) blockers.push("crowdin_changed");
  if ((dryRun.ingest_apply_changes || 0) !== 0) blockers.push("ingest_changed");

  const mapping = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`), "utf8")
  );
  if (mapping.leaf_decisions_count !== 4787) blockers.push("leaf_count");
  const blockedFromRows = Object.entries(mapping.classification_counts || {})
    .filter(([k]) => k.startsWith("BLOCKED"))
    .reduce((s, [, v]) => s + v, 0);
  if ((prepProof.blocked_count || 0) !== blockedFromRows) {
    blockers.push("blocked_count_mismatch");
  }

  const packageIntegrityOk = blockers.filter((b) => !b.startsWith("blocked_count")).length === 0;
  const pass = packageIntegrityOk && prepProof.pass === true;
  const out = {
    pass,
    blockers,
    classification: prepProof.classification,
    next_action: prepProof.next_action,
    mapping_sha256: manifest.mapping_sha256,
    prep_proof_sha256: manifest.prep_proof_sha256,
    dry_run: {
      production_files_changed: dryRun.production_files_changed,
      simulated_full_cards_applied: dryRun.simulated_full_cards_applied,
    },
  };
  console.log(JSON.stringify(out, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
