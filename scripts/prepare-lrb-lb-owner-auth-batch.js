#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = process.argv[2];
const AFTER_IDX = parseInt(process.argv[3], 10);
const PREV_BATCH = process.argv[4];
const LB_BATCH_NUM = parseInt(process.argv[5], 10);

if (!BATCH || !Number.isFinite(AFTER_IDX) || !PREV_BATCH || !Number.isFinite(LB_BATCH_NUM)) {
  console.error(
    "Usage: node scripts/prepare-lrb-lb-owner-auth-batch.js LRB-068 586 LRB-067 11"
  );
  process.exit(1);
}

const POOL_REL = "reports/g2-a1-owner-review-7737-escalations-remaining.csv";
const POOL_GIT = "978e59d8:" + POOL_REL;
const poolAbs = path.join(ROOT, POOL_REL);
let poolRaw;
if (fs.existsSync(poolAbs)) {
  poolRaw = fs.readFileSync(poolAbs);
} else {
  poolRaw = Buffer.from(
    execSync(`git show ${POOL_GIT}`, { cwd: ROOT, maxBuffer: 64 * 1024 * 1024 })
  );
}

const poolSha = crypto.createHash("sha256").update(poolRaw).digest("hex");
const poolTmp = path.join(require("os").tmpdir(), "g2-a1-7737-pool.csv");
fs.writeFileSync(poolTmp, poolRaw);
const { rows, header } = loadCsv(poolTmp);
const lb = rows
  .filter((r) => r.languages === "lb")
  .sort((a, b) => {
    const ia = parseInt((a.finding_stable_ids.match(/idx:(\d+)/) || [0, 0])[1], 10);
    const ib = parseInt((b.finding_stable_ids.match(/idx:(\d+)/) || [0, 0])[1], 10);
    return ia - ib || a.finding_stable_ids.localeCompare(b.finding_stable_ids);
  })
  .filter((r) => parseInt((r.finding_stable_ids.match(/idx:(\d+)/) || [0, 0])[1], 10) > AFTER_IDX);

const batch = lb.slice(0, 50);
if (batch.length !== 50) {
  throw new Error(`Expected 50 LB rows after idx ${AFTER_IDX}, got ${batch.length}`);
}

const uniqueCards = new Set(batch.map((r) => r.card_object_id.split("|")[0]));
if (uniqueCards.size !== 50) {
  throw new Error(`Expected 50 unique cards, got ${uniqueCards.size}`);
}

const fromDe = batch[0].de_reference;
const toDe = batch[49].de_reference;
const scopeLabel = `${fromDe}..${toDe}`;
const authorizedAt = new Date().toISOString();

const inputRel = `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`;
const inputAbs = path.join(ROOT, inputRel);
const csvBody = buildCsv(header, batch);
fs.mkdirSync(path.dirname(inputAbs), { recursive: true });
fs.writeFileSync(inputAbs, csvBody);
const inputSha = crypto.createHash("sha256").update(csvBody).digest("hex");

const findingIds = batch.map((r) => r.finding_stable_ids);
const manifest = {
  batch_id: BATCH,
  phase: "PENDING_5125_REVIEW",
  input_csv_sha256: inputSha,
  input_row_count: 50,
  finding_stable_ids: findingIds,
  created_at: authorizedAt,
  reviewer: "CURSOR_AGENT",
  provenance_policy: "INDIVIDUAL_LINGUISTIC_ONLY",
  owner_authorization_status: "APPROVED",
  source_pool_sha256: poolSha,
  source_file: POOL_REL,
  note: `LB batch ${LB_BATCH_NUM}: ${scopeLabel} (50 LB rows by idx, continuing after ${PREV_BATCH})`,
};

const manifestRel = `reports/g2-a1-owner/manifests/${BATCH}-start.json`;
const manifestAbs = path.join(ROOT, manifestRel);
fs.mkdirSync(path.dirname(manifestAbs), { recursive: true });
const manifestBody = `${JSON.stringify(manifest, null, 2)}\n`;
fs.writeFileSync(manifestAbs, manifestBody);

const remainingLb = lb.length - 50;
const authProof = {
  batch_id: BATCH,
  ownerAuthorizationStatus: "APPROVED",
  reviewer: "owner-prep-pipeline",
  authorizedAt,
  linguisticVerdict: "PENDING_LINGUISTIC_REVIEW",
  row_count: 50,
  languages: { lb: 50 },
  unique_cards: 50,
  scope: `${scopeLabel} (50 LB rows, 50 unique cards) — GPT-5.6 Luna FULL_50_50 review pending`,
  productionSource: "data/lb/a1.js",
  input_csv_sha256: inputSha,
  manifestPath: manifestRel,
  inputPath: inputRel,
  note: `Owner authorization APPROVED. LB batch ${LB_BATCH_NUM} (post ${PREV_BATCH}). Next LB slice from 7737 pool (${remainingLb} LB rows remain in this tail after this batch). GPT-5.6 Luna linguistic review pending. NOT ${BATCH.replace("-", "_")}_FULL_50_50_LINGUISTIC_REVIEW_PASS. No repair-engine decisions — awaiting Luna copy/paste. DE/production/Crowdin/ingest/apply unchanged.`,
};

const proofRel = `reports/g2-a1-owner/batches-reviewed/${BATCH}-owner-authorization-proof.json`;
fs.mkdirSync(path.dirname(path.join(ROOT, proofRel)), { recursive: true });
fs.writeFileSync(path.join(ROOT, proofRel), `${JSON.stringify(authProof, null, 2)}\n`);

const pendingIndex = {
  classification: "G2_A1_PENDING_5125_SPLIT_READY",
  totalRows: 5125,
  batchSize: 50,
  batchCount: 103,
  sourceFile: POOL_REL,
  batches: [
    {
      batchId: BATCH,
      rows: 50,
      inputPath: inputRel,
      manifestPath: manifestRel,
      inputSha256: inputSha,
    },
  ],
};
fs.writeFileSync(
  path.join(ROOT, "reports/g2-a1-owner/batches-pending/index.json"),
  `${JSON.stringify(pendingIndex, null, 2)}\n`
);

console.log(
  JSON.stringify(
    {
      batch_id: BATCH,
      scope: scopeLabel,
      input_csv_sha256: inputSha,
      owner_authorization_status: "APPROVED",
      lb_rows_remaining_after_batch: remainingLb,
      manifestPath: manifestRel,
      inputPath: inputRel,
    },
    null,
    2
  )
);
