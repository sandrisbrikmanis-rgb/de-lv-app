#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH_PREFIX = "LRB-R350";
const BATCH_COUNT = 7;
const BATCH_SIZE = 50;
const EXPECTED_ROWS = 350;

const OUT_DIR = path.join(ROOT, "reports/g2-a1-owner");
const REVIEWED_DIR = path.join(OUT_DIR, "batches-reviewed");
const PENDING_DIR = path.join(OUT_DIR, "batches-pending");
const MANIFEST_DIR = path.join(OUT_DIR, "manifests");
const CONSOLIDATED_DIR = path.join(OUT_DIR, "consolidated");

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(absPath) {
  return sha256Hex(fs.readFileSync(absPath));
}

function batchIds() {
  return Array.from({ length: BATCH_COUNT }, (_, i) => {
    const num = String(i + 1).padStart(3, "0");
    return `${BATCH_PREFIX}-${num}`;
  });
}

function main() {
  const errors = [];
  const batchSummaries = [];
  const mergedRows = [];
  const baselineRows = [];
  let header = null;

  for (const batchId of batchIds()) {
    const decisionsPath = path.join(REVIEWED_DIR, `${batchId}-decisions.csv`);
    const inputPath = path.join(PENDING_DIR, `${batchId}-input.csv`);
    const proofPath = path.join(REVIEWED_DIR, `${batchId}-proof.json`);
    const antiBulkPath = path.join(REVIEWED_DIR, `${batchId}-anti-bulk-proof.json`);
    const manifestPath = path.join(MANIFEST_DIR, `${batchId}-start.json`);

    for (const required of [decisionsPath, inputPath, proofPath, antiBulkPath, manifestPath]) {
      if (!fs.existsSync(required)) errors.push(`missing ${path.relative(ROOT, required)}`);
    }
    if (errors.length) continue;

    const proof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
    const antiBulk = JSON.parse(fs.readFileSync(antiBulkPath, "utf8"));
    if (proof.row_count !== BATCH_SIZE) errors.push(`${batchId} proof row_count ${proof.row_count}`);
    if (proof.pending !== 0) errors.push(`${batchId} has pending ${proof.pending}`);
    if (!antiBulk.pass) errors.push(`${batchId} anti-bulk FAIL`);

    const { header: decisionHeader, rows: decisionRows } = loadCsv(decisionsPath);
    const { rows: inputRows } = loadCsv(inputPath);
    if (!header) header = decisionHeader;
    if (decisionRows.length !== BATCH_SIZE) errors.push(`${batchId} decisions ${decisionRows.length}`);
    if (inputRows.length !== BATCH_SIZE) errors.push(`${batchId} input ${inputRows.length}`);

    mergedRows.push(...decisionRows);
    baselineRows.push(...inputRows);
    batchSummaries.push({
      batch_id: batchId,
      row_count: decisionRows.length,
      labot: proof.labot,
      nelabot: proof.nelabot,
      anti_bulk_pass: antiBulk.pass,
      decisions_sha256: sha256File(decisionsPath),
      input_sha256: sha256File(inputPath),
    });
  }

  if (errors.length) {
    console.error(JSON.stringify({ pass: false, classification: "BLOCKED_G2_A1_RECHECK_350_MERGE", errors }, null, 2));
    process.exit(1);
  }

  const ids = mergedRows.map((row) => row.finding_stable_ids);
  const uniqueIds = new Set(ids);
  if (mergedRows.length !== EXPECTED_ROWS) errors.push(`merged rows ${mergedRows.length}`);
  if (uniqueIds.size !== EXPECTED_ROWS) errors.push(`unique ids ${uniqueIds.size}`);
  if (ids.length !== uniqueIds.size) errors.push("duplicate stable ids in merge");

  const baselineIds = new Set(baselineRows.map((row) => row.finding_stable_ids));
  for (const id of uniqueIds) {
    if (!baselineIds.has(id)) errors.push(`baseline missing ${id}`);
  }
  for (const id of baselineIds) {
    if (!uniqueIds.has(id)) errors.push(`decisions missing ${id}`);
  }

  if (errors.length) {
    console.error(JSON.stringify({ pass: false, classification: "BLOCKED_G2_A1_RECHECK_350_MERGE", errors }, null, 2));
    process.exit(1);
  }

  mergedRows.sort((a, b) => a.finding_stable_ids.localeCompare(b.finding_stable_ids));
  baselineRows.sort((a, b) => a.finding_stable_ids.localeCompare(b.finding_stable_ids));

  fs.mkdirSync(CONSOLIDATED_DIR, { recursive: true });
  fs.mkdirSync(MANIFEST_DIR, { recursive: true });

  const combinedInputPath = path.join(CONSOLIDATED_DIR, "recheck-350-combined-input.csv");
  const baselineHeader = [...Object.keys(baselineRows[0])];
  if (!baselineHeader.includes("provenance_type")) baselineHeader.push("provenance_type");
  fs.writeFileSync(combinedInputPath, buildCsv(baselineHeader, baselineRows));

  const mergeManifest = {
    batch_id: "LRB-R350-MERGE",
    phase: "RECHECK_350_MERGE",
    input_csv_sha256: sha256File(combinedInputPath),
    input_row_count: baselineRows.length,
    finding_stable_ids: baselineRows.map((row) => row.finding_stable_ids),
    source_batches: batchIds(),
    created_at: new Date().toISOString(),
    reviewer: "CURSOR_AGENT",
    provenance_policy: "INDIVIDUAL_LINGUISTIC_ONLY",
    owner_authorization_status: "BATCH_REVIEW_COMPLETE",
  };
  const mergeManifestPath = path.join(MANIFEST_DIR, "LRB-R350-merge-start.json");
  fs.writeFileSync(mergeManifestPath, `${JSON.stringify(mergeManifest, null, 2)}\n`);

  const decisionsOut = path.join(CONSOLIDATED_DIR, "recheck-350-decisions-final.csv");
  const remainingOut = path.join(CONSOLIDATED_DIR, "recheck-350-remaining-final.csv");
  const mergeProofOut = path.join(CONSOLIDATED_DIR, "recheck-350-merge-proof.json");

  fs.writeFileSync(decisionsOut, buildCsv(header, mergedRows));
  fs.writeFileSync(remainingOut, buildCsv(header, []));

  const labot = mergedRows.filter((row) => row.owner_decision === "LABOT").length;
  const nelabot = mergedRows.filter((row) => row.owner_decision === "NELABOT").length;
  const pending = mergedRows.filter((row) => !row.owner_decision || row.owner_status === "PENDING").length;
  const unproven = mergedRows.filter((row) => row.provenance_type !== "INDIVIDUAL_LINGUISTIC").length;

  const mergeProof = {
    pass: true,
    classification: "G2_A1_RECHECK_350_MERGE_COMPLETE",
    row_count: mergedRows.length,
    unique_stable_ids: uniqueIds.size,
    labot,
    nelabot,
    pending,
    provenance_individual_count: mergedRows.length - unproven,
    batch_count: BATCH_COUNT,
    batch_summaries: batchSummaries,
    combined_input_sha256: sha256File(combinedInputPath),
    decisions_final_sha256: sha256File(decisionsOut),
    remaining_final_sha256: sha256File(remainingOut),
    merge_manifest_path: path.relative(ROOT, mergeManifestPath),
    merge_manifest_sha256: sha256Hex(fs.readFileSync(mergeManifestPath)),
    decisions_final_path: path.relative(ROOT, decisionsOut),
    remaining_final_path: path.relative(ROOT, remainingOut),
  };

  fs.writeFileSync(mergeProofOut, `${JSON.stringify(mergeProof, null, 2)}\n`);
  console.log(JSON.stringify(mergeProof, null, 2));
}

if (require.main === module) main();

module.exports = { main };
