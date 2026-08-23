#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE B2 OWNER apply map from authoritative accepted decisions.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeField, findEntry } = require("./lib/et-b2-owner-path");
const { loadB2, resolveB2Current } = require("./lib/et-owner-production-resolve");
const { parsePipeRows } = require("./lib/et-b2-owner-accepted-parse");

const ACCEPTED_MD = path.join(ROOT, "reports/et-b2-owner-decisions-accepted.md");
const OUT = path.join(ROOT, "reports/temp/et-b2-owner-apply-map.json");
const EXPECTED_TOTAL = 355;

function main() {
  const acceptedExists = fs.existsSync(ACCEPTED_MD);
  const acceptedMd = acceptedExists ? fs.readFileSync(ACCEPTED_MD, "utf8") : "";
  const skipResolvedRebuild =
    acceptedMd.includes("ET_B2_OWNER_REVALIDATION_355_COMPLETE") ||
    process.argv.includes("--from-accepted");

  if (!skipResolvedRebuild) {
    require("child_process").execSync("node scripts/build-et-b2-owner-decisions-accepted.js", {
      cwd: ROOT,
      stdio: "inherit",
    });
  }

  const rows = parsePipeRows(fs.readFileSync(ACCEPTED_MD, "utf8"));
  const statusCounts = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, PENDING: 0 };
  for (const row of rows) statusCounts[row.status] = (statusCounts[row.status] || 0) + 1;

  if (rows.length !== EXPECTED_TOTAL || statusCounts.PENDING > 0 || statusCounts.NEEDS_SOURCE_REVIEW > 0) {
    console.error("BLOCKED_OWNER_ACCEPTED_PRECHECK", { total: rows.length, statusCounts });
    process.exit(1);
  }

  const b2Words = loadB2();
  const apply = [];
  const skipped = [];

  for (const row of rows) {
    if (row.status !== "LABOT") {
      skipped.push({ ...row, reason: row.status });
      continue;
    }
    if (row.cardId === "STRUCT" || /sectionAccents/i.test(row.field) || row.field === "study.count") {
      skipped.push({ ...row, reason: "struct_or_sectionaccents_skip" });
      continue;
    }

    const normField = normalizeField(row.field);
    if (!normField) {
      skipped.push({ ...row, reason: "sectionaccents_skip" });
      continue;
    }

    const entry = findEntry(b2Words, row.cardId);
    if (!entry) {
      skipped.push({ ...row, reason: "card_missing" });
      continue;
    }

    const productionCurrent = resolveB2Current(row.cardId, row.field, b2Words);
    apply.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field: normField,
      rawField: row.field,
      current: productionCurrent || row.current,
      ownerNew: row.ownerNew,
      ownerNote: row.ownerNote,
      de: entry.de,
    });
  }

  const out = {
    meta: {
      expectedLabot: statusCounts.LABOT,
      applyTargets: apply.length,
      skipped: skipped.length,
      statusCounts,
    },
    apply,
    skipped,
  };

  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out.meta, null, 2));
}

if (require.main === module) main();
