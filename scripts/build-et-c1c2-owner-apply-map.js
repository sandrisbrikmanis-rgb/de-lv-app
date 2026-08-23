#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE C1/C2 OWNER apply map from authoritative accepted decisions.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeField, levelForCard } = require("./lib/et-c1c2-owner-path");
const { loadC1, loadC2, resolveC1C2Current } = require("./lib/et-owner-production-resolve");

const ACCEPTED_MD = path.join(ROOT, "reports/et-c1c2-owner-decisions-accepted.md");
const OUT = path.join(ROOT, "reports/temp/et-c1c2-owner-apply-map.json");
const EXPECTED_LABOT = 76;
const EXPECTED_TOTAL = 131;

const { parsePipeRows } = require("./lib/et-c1c2-owner-accepted-parse");

function precheck(rows) {
  const statusCounts = {
    LABOT: 0,
    NELABOT: 0,
    FALSE_POSITIVE: 0,
    NEEDS_SOURCE_REVIEW: 0,
    PENDING: 0,
  };
  for (const row of rows) statusCounts[row.status] = (statusCounts[row.status] || 0) + 1;
  const pass =
    rows.length === EXPECTED_TOTAL &&
    statusCounts.PENDING === 0 &&
    statusCounts.LABOT === EXPECTED_LABOT &&
    statusCounts.NEEDS_SOURCE_REVIEW === 45;
  return { pass, statusCounts, total: rows.length };
}

function main() {
  if (!fs.existsSync(ACCEPTED_MD)) {
    console.error("Missing", ACCEPTED_MD);
    process.exit(1);
  }
  const md = fs.readFileSync(ACCEPTED_MD, "utf8");
  const rows = parsePipeRows(md);
  const pre = precheck(rows);
  console.log(JSON.stringify({ precheck: pre }, null, 2));
  if (!pre.pass) {
    console.error("BLOCKED_OWNER_ACCEPTED_PRECHECK");
    process.exit(1);
  }

  const c1 = loadC1();
  const c2 = loadC2();
  const apply = [];
  const skipped = [];

  for (const row of rows) {
    if (row.status !== "LABOT") {
      skipped.push({ ...row, reason: row.status });
      continue;
    }
    if (row.cardId.startsWith("STRUCT") || /sectionAccents/i.test(row.field) || row.field === "study.count") {
      skipped.push({ ...row, reason: "nsr_or_structure" });
      continue;
    }
    const field = normalizeField(row.field);
    if (!field) {
      skipped.push({ ...row, reason: "sectionaccents_skip" });
      continue;
    }
    const ownerNew = String(row.ownerNew || "").trim();
    if (!ownerNew) {
      skipped.push({ ...row, reason: "empty_new" });
      continue;
    }
    const level = levelForCard(row.cardId);
    if (!level) {
      skipped.push({ ...row, reason: "unknown_level" });
      continue;
    }
    const productionCurrent = resolveC1C2Current(row.cardId, row.field, c1, c2);
    apply.push({
      auditId: row.auditId,
      cardId: row.cardId,
      level,
      field,
      rawField: row.field,
      current: String(row.current || ""),
      productionCurrent,
      ownerNew,
    });
  }

  if (apply.length !== EXPECTED_LABOT) {
    console.error(`BLOCKED: LABOT apply rows = ${apply.length}, expected ${EXPECTED_LABOT}`);
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        source: ACCEPTED_MD,
        precheck: pre,
        apply,
        skippedCount: skipped.length,
      },
      null,
      2,
    ),
  );

  console.log(
    JSON.stringify(
      {
        apply: apply.length,
        c1: apply.filter((r) => r.level === "c1").length,
        c2: apply.filter((r) => r.level === "c2").length,
        skipped: skipped.length,
        out: OUT,
      },
      null,
      2,
    ),
  );
}

main();
