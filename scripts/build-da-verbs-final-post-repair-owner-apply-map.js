#!/usr/bin/env node
"use strict";
/**
 * Build apply map from final post-repair OWNER signed decisions (FPR).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  parseAllFinalPostRepairDecisions,
  dedupeFinalPostRepairLabot,
} = require("./lib/da-verbs-final-post-repair-decisions");

const OUT = path.join(ROOT, "reports/temp/da-verbs-final-post-repair-owner-apply-map.json");

function main() {
  const { files, rows } = parseAllFinalPostRepairDecisions();
  if (!files.length) {
    console.error(
      "Missing signed file: reports/da-verbs-owner-decisions-final-post-repair-signed.md"
    );
    process.exit(1);
  }

  const statusCounts = {};
  for (const r of rows) statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;

  const { labot, conflicts } = dedupeFinalPostRepairLabot(rows);
  if (conflicts.length) {
    console.error("Conflicting FPR LABOT mappings:", conflicts);
    process.exit(1);
  }

  const apply = labot.map((row) => ({
    auditId: row.auditId,
    cardId: row.cardId,
    field: row.field,
    currentDa: row.currentDa,
    ownerNew: row.ownerNew,
    deContext: row.deContext,
    severity: row.severity,
    action: "SET",
    source: row.source,
  }));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        signedFiles: files.map((f) => path.basename(f)),
        totalRows: rows.length,
        statusCounts,
        conflicts: conflicts.length,
        apply,
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        signedFiles: files.length,
        totalRows: rows.length,
        labotUnique: apply.length,
        statusCounts,
        out: OUT,
      },
      null,
      2
    )
  );
}

main();
