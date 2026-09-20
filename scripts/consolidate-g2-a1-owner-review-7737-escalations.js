#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const {
  OUT_BATCH_DIR,
  OUT_BATCH_INDEX,
  verifySourceIntegrity,
  consolidateReviewBatchOutputs,
} = require("./lib/g2-a1-phase3/owner-review-7737-escalations");

function main() {
  const source = verifySourceIntegrity(ROOT);
  if (!source.pass) {
    console.error(JSON.stringify({ pass: false, errors: source.errors }, null, 2));
    process.exit(1);
  }
  const indexPath = fs.existsSync(OUT_BATCH_INDEX)
    ? OUT_BATCH_INDEX
    : path.join(OUT_BATCH_DIR, "index.json");
  if (!fs.existsSync(indexPath)) {
    console.error("review batch index missing");
    process.exit(1);
  }
  const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
  const baselineByStable = new Map(
    source.committedPending.map((row) => [row.finding_stable_ids, row]),
  );
  const merged = [];
  const errors = [];
  for (const entry of index.batches) {
    const csv = loadCsv(path.join(ROOT, entry.file));
    const result = consolidateReviewBatchOutputs(csv.rows, baselineByStable);
    if (!result.pass) errors.push(...result.errors);
    merged.push(...result.outputs);
  }
  if (errors.length) {
    console.error(JSON.stringify({ pass: false, errors }, null, 2));
    process.exit(1);
  }
  console.log(
    JSON.stringify(
      {
        pass: true,
        mergedRows: merged.length,
        decided: merged.filter((row) => row.owner_status === "DECIDED").length,
        pending: merged.filter((row) => row.owner_status === "PENDING").length,
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  main();
}

module.exports = { main };
