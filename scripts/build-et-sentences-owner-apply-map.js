#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE Teikumi OWNER apply map from accepted decisions.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeField } = require("./lib/et-sentences-owner-path");
const { loadSentences, resolveSentenceCurrent } = require("./lib/et-owner-production-resolve");

const ACCEPTED = path.join(ROOT, "reports/et-sentences-owner-decisions-accepted.md");
const OUT = path.join(ROOT, "reports/temp/et-sentences-owner-apply-map.json");
const EXPECTED_LABOT = 103;

function parseAccepted(md) {
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| ET-SENT-")) continue;
    const parts = line
      .split("|")
      .slice(1, -1)
      .map((p) => p.trim());
    if (parts.length < 7) continue;
    rows.push({
      auditId: parts[0],
      cardId: parts[1],
      field: parts[2],
      current: parts[3],
      status: parts[4],
      ownerNew: parts[5],
      note: parts[6],
    });
  }
  return rows;
}

function main() {
  if (!fs.existsSync(ACCEPTED)) {
    require("child_process").execSync("node scripts/build-et-sentences-owner-decisions-accepted.js", {
      cwd: ROOT,
      stdio: "pipe",
    });
  }
  const rows = parseAccepted(fs.readFileSync(ACCEPTED, "utf8"));
  const sentences = loadSentences();
  const apply = [];
  const skipped = [];

  for (const row of rows) {
    if (row.status !== "LABOT") {
      skipped.push({ ...row, reason: row.status });
      continue;
    }
    const ownerNew = String(row.ownerNew || "").trim();
    if (!ownerNew) {
      skipped.push({ ...row, reason: "empty_new" });
      continue;
    }
    const productionCurrent = resolveSentenceCurrent(row.cardId, "lv", sentences);
    apply.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field: normalizeField(row.field),
      current: productionCurrent || row.current,
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
        source: ACCEPTED,
        apply,
        skippedCount: skipped.length,
      },
      null,
      2,
    ),
  );
  console.log(JSON.stringify({ apply: apply.length, skipped: skipped.length, out: OUT }, null, 2));
}

main();
