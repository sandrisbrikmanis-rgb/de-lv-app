#!/usr/bin/env node
"use strict";
/**
 * Build apply map from final closure (FCA) signed OWNER decisions.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeOwnerPath } = require("./lib/da-kurss-owner-path");
const { parseSignedDecisions, buildApplyRows, DEFAULT_SIGNED } = require("./lib/da-kurss-final-closure-decisions");

const OUT_JSON = path.join(ROOT, "reports/temp/da-kurss-final-closure-owner-apply-map.json");

function main() {
  const signedPath = process.argv[2] || DEFAULT_SIGNED;
  const rows = parseSignedDecisions(signedPath);
  const statusCounts = {};
  for (const r of rows) statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;

  const { labot, conflicts, skipped } = buildApplyRows(rows, normalizeOwnerPath);

  const apply = labot.map((row) => ({
    findingNum: row.num,
    findingId: row.auditId,
    path: row.path,
    normalizedPath: row.normalizedPath,
    daCurrent: row.currentDa || row.daCurrent,
    ownerNew: row.ownerNew,
    deCurrent: row.deCurrent,
    fieldType: row.fieldType,
    lessonId: row.lessonId,
    source: row.source,
    track: "FCA",
  }));

  const out = {
    generatedAt: new Date().toISOString(),
    signedFile: path.basename(signedPath),
    totalRows: rows.length,
    statusCounts,
    skipped,
    conflicts: conflicts.length,
    applyCount: apply.length,
    apply,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2));
  console.log(
    JSON.stringify(
      {
        signedFile: path.basename(signedPath),
        totalRows: rows.length,
        applyCount: apply.length,
        skipped: skipped.length,
        statusCounts,
        out: OUT_JSON,
      },
      null,
      2,
    ),
  );
}

main();
