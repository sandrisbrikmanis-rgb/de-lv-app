#!/usr/bin/env node
"use strict";
/**
 * Build apply map from regression OWNER signed decisions (RR/RL).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  parseAllRegressionDecisions,
  dedupeRegressionLabot,
} = require("./lib/da-verbs-regression-decisions");

const OUT = path.join(ROOT, "reports/temp/da-verbs-regression-owner-apply-map.json");

function main() {
  const { files, rows } = parseAllRegressionDecisions();
  if (!files.length) {
    console.error(
      "No signed regression files found. Expected reports/da-verbs-owner-decisions-regression-reapply-signed-group*.md and da-verbs-owner-decisions-regression-linguistic-signed.md"
    );
    process.exit(1);
  }

  const statusCounts = {};
  for (const r of rows) statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;

  const { labot, conflicts } = dedupeRegressionLabot(rows);
  if (conflicts.length) {
    console.error("Conflicting regression LABOT mappings:", conflicts);
    process.exit(1);
  }

  const apply = labot.map((row) => ({
    regId: row.regId,
    auditId: row.auditId,
    cardId: row.cardId,
    field: row.field,
    currentDa: row.currentDa,
    ownerNew: row.ownerNew,
    deContext: row.deContext,
    severity: row.severity,
    track: row.regId.includes("-RL-") ? "linguistic" : "reapply",
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
        reapply: apply.filter((r) => r.track === "reapply").length,
        linguistic: apply.filter((r) => r.track === "linguistic").length,
        statusCounts,
        out: OUT,
      },
      null,
      2
    )
  );
}

main();
