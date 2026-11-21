#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const CONFIRMED_BAD_STABLE_IDS = new Set([
  "g2/a1/hr|Student|idx:581|lv|LANGUAGE_MISMATCH|gpt-5.6-luna",
  "g2/a1/hr|zurück|idx:674|lv|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna",
  "g2/a1/nn|Herr|idx:281|lv|LANGUAGE_MISMATCH|gpt-5.6-luna",
  "g2/a1/nn|herr|idx:282|lv|LANGUAGE_MISMATCH|gpt-5.6-luna",
]);

function cardLemma(row) {
  const id = String(row.card_object_id || "");
  const pipe = id.indexOf("|");
  return pipe >= 0 ? id.slice(0, pipe) : id;
}

function classifyLinguisticRisk(row) {
  if (row.owner_status !== "DECIDED") return "NOT_APPLICABLE";
  const note = String(row.owner_note || "");
  if (CONFIRMED_BAD_STABLE_IDS.has(row.finding_stable_ids)) {
    if (row.languages === "hr" && row.owner_decision === "NELABOT") return "CONFIRMED_BAD_HR_CYRILLIC_NELABOT";
    if (row.languages === "nn" && row.owner_decision === "LABOT") return "CONFIRMED_BAD_NN_HERR_LABOT";
  }
  if (row.languages === "hr" && row.owner_decision === "NELABOT" && /[А-Яа-яЁё]/.test(String(row.production_current || ""))) {
    return "CONFIRMED_BAD_HR_CYRILLIC_NELABOT";
  }
  if (row.languages === "nn" && row.owner_decision === "LABOT" && String(row.owner_new || "") === cardLemma(row)) {
    return "SUSPECT_NN_DE_LEMMA_LABOT";
  }
  if (row.languages === "hr" && row.owner_decision === "NELABOT" && note.includes("dabisks un semantiski precīzs horvātu")) {
    return "SUSPECT_HR_NELABOT_TEMPLATE";
  }
  if (row.owner_decision === "NELABOT") return "NELABOT_REVIEW_REQUIRED";
  return "OK";
}

const INPUT = path.join(ROOT, "reports/g2-a1-owner-review-individual-7737-decisions-ingest.csv");
const OUT_DIR = path.join(ROOT, "reports/g2-a1-owner");
const PENDING_DIR = path.join(OUT_DIR, "batches-pending");
const MANIFEST_DIR = path.join(OUT_DIR, "manifests");
const QUARANTINE_DIR = path.join(OUT_DIR, "quarantine");
const BATCH_SIZE = 50;
const BATCH_PREFIX = "LRB-R350";
const RECHECK_CLASSES = new Set(["NELABOT_REVIEW_REQUIRED", "SUSPECT_HR_NELABOT_TEMPLATE"]);

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sha256File(absPath) {
  return sha256Hex(fs.readFileSync(absPath));
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
  const onlyBatch = process.argv.find((arg) => arg.startsWith("--batch="))?.split("=")[1];
  const { header, rows } = loadCsv(INPUT);
  const pool = rows
    .filter((row) => row.owner_status === "DECIDED")
    .map((row) => ({
      ...row,
      _linguistic_classification: classifyLinguisticRisk(row),
    }))
    .filter((row) => RECHECK_CLASSES.has(row._linguistic_classification))
    .sort((a, b) => a.finding_stable_ids.localeCompare(b.finding_stable_ids));

  if (pool.length !== 350) {
    console.error(
      JSON.stringify(
        {
          pass: false,
          classification: "BLOCKED_G2_A1_RECHECK_350_SOURCE_INTEGRITY",
          expected: 350,
          actual: pool.length,
        },
        null,
        2,
      ),
    );
    process.exit(1);
  }

  fs.mkdirSync(PENDING_DIR, { recursive: true });
  fs.mkdirSync(MANIFEST_DIR, { recursive: true });
  fs.mkdirSync(QUARANTINE_DIR, { recursive: true });

  const quarantineHeader = [...header, "linguistic_classification", "recheck_reason"];
  const quarantineRows = pool.map((row) => ({
    ...resetForReview(row),
    linguistic_classification: row._linguistic_classification,
    recheck_reason: "INVALID_BULK_RECHECK_REVIEW_REQUIRED",
  }));
  const quarantinePath = path.join(QUARANTINE_DIR, "recheck-350-invalid.csv");
  fs.writeFileSync(quarantinePath, buildCsv(quarantineHeader, quarantineRows));

  const batches = [];
  for (let i = 0; i < pool.length; i += BATCH_SIZE) {
    const batchRows = pool.slice(i, i + BATCH_SIZE).map(resetForReview);
    const batchNum = String(Math.floor(i / BATCH_SIZE) + 1).padStart(3, "0");
    const batchId = `${BATCH_PREFIX}-${batchNum}`;
    if (onlyBatch && onlyBatch !== batchId) continue;

    const outHeader = [...header, "provenance_type"];
    const inputPath = path.join(PENDING_DIR, `${batchId}-input.csv`);
    fs.writeFileSync(inputPath, buildCsv(outHeader, batchRows));

    const manifest = {
      batch_id: batchId,
      phase: "RECHECK_350_REPAIR",
      input_csv_sha256: sha256File(inputPath),
      input_row_count: batchRows.length,
      finding_stable_ids: batchRows.map((row) => row.finding_stable_ids),
      created_at: new Date().toISOString(),
      reviewer: "CURSOR_AGENT",
      provenance_policy: "INDIVIDUAL_LINGUISTIC_ONLY",
      owner_authorization_status: "APPROVED",
      source_pool_sha256: sha256Hex(
        pool.map((row) => row.finding_stable_ids).join("\n"),
      ),
      linguistic_classification_counts: {
        NELABOT_REVIEW_REQUIRED: pool.filter((r) => r._linguistic_classification === "NELABOT_REVIEW_REQUIRED").length,
        SUSPECT_HR_NELABOT_TEMPLATE: pool.filter((r) => r._linguistic_classification === "SUSPECT_HR_NELABOT_TEMPLATE").length,
      },
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
    classification: "G2_A1_RECHECK_350_SPLIT_READY",
    totalRows: 350,
    batchSize: BATCH_SIZE,
    batchCount: 7,
    sourceFile: path.relative(ROOT, INPUT),
    quarantineFile: path.relative(ROOT, quarantinePath),
    batches,
  };
  fs.writeFileSync(path.join(OUT_DIR, "recheck-350-batches-index.json"), `${JSON.stringify(index, null, 2)}\n`);
  console.log(JSON.stringify(index, null, 2));
}

if (require.main === module) main();

module.exports = { main };
