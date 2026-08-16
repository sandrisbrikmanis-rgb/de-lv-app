#!/usr/bin/env node
"use strict";
/**
 * Build apply map from final post-repair + NSR carry-forward signed OWNER decisions.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeOwnerPath } = require("./lib/da-kurss-owner-path");
const { parseAllSignedDecisions, dedupeLabot } = require("./lib/da-kurss-final-post-repair-decisions");

const FPR_AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-audit.json");
const FULL_AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");
const OUT_JSON = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-owner-apply-map.json");

function loadAuditIndex() {
  const byId = new Map();
  for (const file of [FPR_AUDIT_JSON, FULL_AUDIT_JSON]) {
    if (!fs.existsSync(file)) continue;
    const audit = JSON.parse(fs.readFileSync(file, "utf8"));
    for (const f of audit.findings || []) {
      byId.set(f.id, f);
    }
  }
  return byId;
}

function main() {
  const { files, rows } = parseAllSignedDecisions();
  if (!files.length) {
    console.error("Missing signed files: reports/da-kurss-owner-decisions-final-post-repair-group*-signed.md");
    process.exit(1);
  }

  const statusCounts = {};
  for (const r of rows) statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;

  const auditById = loadAuditIndex();
  const { labot, conflicts, skipped } = dedupeLabot(rows, auditById, normalizeOwnerPath);

  const apply = labot.map((row, i) => ({
    findingNum: i + 1,
    findingId: row.auditId,
    path: row.path,
    normalizedPath: row.normalizedPath,
    daCurrent: row.daCurrent,
    ownerNew: row.ownerNew,
    deCurrent: row.deCurrent,
    fieldType: row.fieldType,
    lessonId: row.lessonId,
    source: row.source,
    track: /^DA-KURSS-FPR-/.test(row.auditId) ? "FPR" : "NSR",
  }));

  const out = {
    generatedAt: new Date().toISOString(),
    signedFiles: files.map((f) => path.basename(f)),
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
        signedFiles: files.length,
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
