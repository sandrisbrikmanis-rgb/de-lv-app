#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const DEFAULT_INPUT = path.join(ROOT, "reports/g2-a1-owner-review-7737-escalations-remaining.csv");
const OUT_DIR = path.join(ROOT, "reports/g2-a1-owner");
const PENDING_DIR = path.join(OUT_DIR, "batches-pending");
const MANIFEST_DIR = path.join(OUT_DIR, "manifests");
const BATCH_SIZE = 50;
const BATCH_PREFIX = "LRB";

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(absPath) {
  return sha256Hex(fs.readFileSync(absPath));
}

function parseArgs(argv) {
  const args = {
    input: DEFAULT_INPUT,
    outDir: PENDING_DIR,
    batchPrefix: BATCH_PREFIX,
    batchSize: BATCH_SIZE,
  };
  for (let i = 2; i < argv.length; i += 1) {
    const key = argv[i];
    if (key.startsWith("--")) {
      const name = key.slice(2);
      const value = argv[i + 1];
      if (name === "input") args.input = path.resolve(ROOT, value);
      else if (name === "out-dir") args.outDir = path.resolve(ROOT, value);
      else if (name === "batch-prefix") args.batchPrefix = value;
      else if (name === "batch-size") args.batchSize = Number(value);
      else if (name === "batch") args.onlyBatch = value;
      i += 1;
    }
  }
  return args;
}

function resetForReview(row) {
  return {
    ...row,
    owner_status: "PENDING",
    owner_decision: "",
    owner_new: "",
    owner_note: row.owner_note || "",
    provenance_type: "",
  };
}

function main() {
  const args = parseArgs(process.argv);
  const { header, rows } = loadCsv(args.input);
  const pool = rows
    .filter((row) => row.owner_status === "PENDING")
    .sort((a, b) => a.finding_stable_ids.localeCompare(b.finding_stable_ids));

  if (pool.length !== 5125) {
    console.error(
      JSON.stringify(
        {
          pass: false,
          classification: "BLOCKED_G2_A1_PENDING_5125_SOURCE_INTEGRITY",
          expected: 5125,
          actual: pool.length,
        },
        null,
        2,
      ),
    );
    process.exit(1);
  }

  fs.mkdirSync(args.outDir, { recursive: true });
  fs.mkdirSync(MANIFEST_DIR, { recursive: true });

  const batches = [];
  for (let i = 0; i < pool.length; i += args.batchSize) {
    const batchRows = pool.slice(i, i + args.batchSize).map(resetForReview);
    const batchNum = String(Math.floor(i / args.batchSize) + 1).padStart(3, "0");
    const batchId = `${args.batchPrefix}-${batchNum}`;
    if (args.onlyBatch && args.onlyBatch !== batchId) continue;

    const outHeader = [...header.filter((h) => h !== "provenance_type"), "provenance_type"];
    const inputPath = path.join(args.outDir, `${batchId}-input.csv`);
    fs.writeFileSync(inputPath, buildCsv(outHeader, batchRows));

    const manifest = {
      batch_id: batchId,
      phase: "PENDING_5125_REVIEW",
      input_csv_sha256: sha256File(inputPath),
      input_row_count: batchRows.length,
      finding_stable_ids: batchRows.map((row) => row.finding_stable_ids),
      created_at: new Date().toISOString(),
      reviewer: "CURSOR_AGENT",
      provenance_policy: "INDIVIDUAL_LINGUISTIC_ONLY",
      owner_authorization_status: "APPROVED",
      source_pool_sha256: sha256Hex(pool.map((row) => row.finding_stable_ids).join("\n")),
      source_file: path.relative(ROOT, args.input),
    };
    const manifestPath = path.join(MANIFEST_DIR, `${batchId}-start.json`);
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

    batches.push({
      batchId,
      rows: batchRows.length,
      inputPath: path.relative(ROOT, inputPath),
      manifestPath: path.relative(ROOT, manifestPath),
      inputSha256: manifest.input_csv_sha256,
    });
  }

  const index = {
    classification: "G2_A1_PENDING_5125_SPLIT_READY",
    totalRows: pool.length,
    batchSize: args.batchSize,
    batchCount: Math.ceil(pool.length / args.batchSize),
    sourceFile: path.relative(ROOT, args.input),
    batches,
  };
  fs.writeFileSync(path.join(args.outDir, "index.json"), `${JSON.stringify(index, null, 2)}\n`);
  console.log(JSON.stringify(index, null, 2));
}

if (require.main === module) main();

module.exports = { main };
