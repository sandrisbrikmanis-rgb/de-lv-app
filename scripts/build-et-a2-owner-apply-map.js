#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  defaultAcceptedPaths,
  mergeAcceptedWithPending,
  normalizeApplyField,
} = require("./lib/et-a2-owner-accepted-parse");

const OUT = path.join(ROOT, "reports/temp/et-a2-owner-apply-map.json");
const ACCEPTED_OUT = path.join(ROOT, "reports/et-a2-owner-decisions-accepted.md");

function main() {
  const paths = process.env.OWNER_ACCEPTED_PATHS
    ? process.env.OWNER_ACCEPTED_PATHS.split(",").map((p) => path.resolve(ROOT, p.trim()))
    : defaultAcceptedPaths();

  const { merged, skipped, pendingCount, acceptedCount } = mergeAcceptedWithPending(paths);
  const apply = [];

  for (const row of merged) {
    const field = normalizeApplyField(row.field);
    if (!field) {
      skipped.push({ ...row, reason: "sectionaccents_nsr" });
      continue;
    }
    apply.push({ ...row, field });
  }

  const byKey = new Map();
  for (const item of apply) {
    byKey.set(`${item.cardId}|${item.field}|${item.ownerNew}`, item);
  }
  const deduped = [...byKey.values()].sort((a, b) => a.auditId.localeCompare(b.auditId));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        sources: paths,
        pendingCount,
        acceptedCount,
        apply: deduped,
        skippedCount: skipped.length,
        skipped,
      },
      null,
      2,
    ),
  );

  const lines = [
    "# ET–DE A2 — OWNER DECISIONS ACCEPTED (apply map source)",
    "",
    `**Generated:** ${new Date().toISOString().slice(0, 10)}`,
    `**LABOT apply targets:** **${deduped.length}**`,
    `**Skipped:** **${skipped.length}**`,
    "",
    "| Audit ID | Card ID | Field | CURRENT | OWNER_DECISION |",
    "|----------|---------|-------|---------|----------------|",
    ...deduped.map(
      (r) =>
        `| ${r.auditId} | ${r.cardId} | ${r.field.replace(/\|/g, "\\|")} | ${String(r.current).replace(/\|/g, "\\|").slice(0, 80)} | ${String(r.ownerNew).replace(/\|/g, "\\|").slice(0, 80)} |`,
    ),
    "",
  ];
  fs.writeFileSync(ACCEPTED_OUT, lines.join("\n"));

  console.log(
    JSON.stringify(
      {
        pending: pendingCount,
        acceptedRows: acceptedCount,
        apply: deduped.length,
        skipped: skipped.length,
        out: OUT,
        accepted: ACCEPTED_OUT,
      },
      null,
      2,
    ),
  );
}

main();
