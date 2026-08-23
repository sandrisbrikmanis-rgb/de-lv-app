#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE B1 OWNER apply map from authoritative accepted resolution (JSON + overlay).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { precheckAcceptedMapping, auditNum } = require("./lib/et-b1-owner-accepted-resolve");
const { normalizeField } = require("./lib/et-b1-owner-path");

const OUT = path.join(ROOT, "reports/temp/et-b1-owner-apply-map.json");
const ACCEPTED_MD = path.join(ROOT, "reports/et-b1-owner-decisions-accepted.md");

function main() {
  const pre = precheckAcceptedMapping();
  console.log(JSON.stringify({ precheck: pre.actual, expected: pre.expected, verdict: pre.verdict }, null, 2));

  if (!pre.pass) {
    console.error("BLOCKED_OWNER_MAPPING_MISMATCH");
    process.exit(1);
  }

  const findingById = new Map(pre.findings.map((f) => [f.findingId, f]));
  const apply = [];
  const skipped = [];

  for (const row of pre.rows) {
    if (row.status !== "LABOT") {
      skipped.push({ ...row, reason: row.status });
      continue;
    }
    if (row.cardId === "STRUCT" || row.field === "study.count") {
      skipped.push({ ...row, reason: "structure_nsr" });
      continue;
    }
    const field = normalizeField(row.field);
    if (!field) {
      skipped.push({ ...row, reason: "sectionaccents_skip" });
      continue;
    }
    const ownerNew = String(row.newValue || "").trim();
    if (!ownerNew) {
      skipped.push({ ...row, reason: "empty_new" });
      continue;
    }

    const finding = findingById.get(row.auditId);
    const current =
      finding && finding.productionValue != null && String(finding.productionValue) !== ""
        ? String(finding.productionValue)
        : row.current;

    const num = auditNum(row.auditId);
    const foreignOverlay =
      row.category === "FOREIGN_REMNANT" && num >= 2 && num <= 715;

    apply.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field,
      rawField: row.field,
      current,
      currentEt: row.current,
      ownerNew,
      category: row.category,
      foreignOverlay,
    });
  }

  if (apply.length !== 1054) {
    console.error(`BLOCKED: LABOT apply rows = ${apply.length}, expected 1054`);
    process.exit(1);
  }

  const foreignOverlay = apply.filter((r) => r.foreignOverlay);
  if (foreignOverlay.length !== 714) {
    console.error(`BLOCKED: FOREIGN overlay LABOT = ${foreignOverlay.length}, expected 714`);
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        source: ACCEPTED_MD,
        authority: "et-b1-owner-accepted-resolve (audit JSON + overlay)",
        precheck: pre.actual,
        apply,
        skippedCount: skipped.length,
        foreignOverlayCount: foreignOverlay.length,
      },
      null,
      2,
    ),
  );

  console.log(
    JSON.stringify(
      {
        apply: apply.length,
        foreignOverlay: foreignOverlay.length,
        skipped: skipped.length,
        out: OUT,
      },
      null,
      2,
    ),
  );
}

main();
