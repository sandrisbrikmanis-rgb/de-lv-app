#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

function main() {
  const batchId = process.argv[2];
  if (!batchId) throw new Error("Usage: node build-g2-a1-owner-pending-batch-decisions.js LRB-001");

  const inputPath = path.join(ROOT, "reports/g2-a1-owner/batches-pending", `${batchId}-input.csv`);
  const outPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${batchId}-decisions.csv`);
  const proofPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${batchId}-proof.json`);
  const dataPath = path.join(ROOT, "scripts/data/g2-a1-owner-pending", `${batchId}-decisions.json`);

  const { header, rows } = loadCsv(inputPath);
  const decisions = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  const outHeader = [...header.filter((h) => h !== "provenance_type"), "provenance_type"];
  const reviewed = [];
  let labot = 0;
  let nelabot = 0;
  let pending = 0;

  for (const row of rows) {
    const decision = decisions[row.finding_stable_ids];
    if (!decision) throw new Error(`Missing individual decision for ${row.finding_stable_ids}`);
    const out = { ...row, ...decision, provenance_type: decision.owner_status === "DECIDED" ? "INDIVIDUAL_LINGUISTIC" : "" };
    reviewed.push(out);
    if (out.owner_decision === "LABOT") labot += 1;
    else if (out.owner_decision === "NELABOT") nelabot += 1;
    else pending += 1;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buildCsv(outHeader, reviewed));

  const proof = {
    batch_id: batchId,
    row_count: reviewed.length,
    labot,
    nelabot,
    pending,
    provenance_individual_count: reviewed.filter((r) => r.provenance_type === "INDIVIDUAL_LINGUISTIC").length,
    classification: "G2_A1_PENDING_BATCH_REVIEW_COMPLETE",
  };
  fs.writeFileSync(proofPath, `${JSON.stringify(proof, null, 2)}\n`);
  console.log(JSON.stringify(proof, null, 2));
}

if (require.main === module) main();
