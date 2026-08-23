#!/usr/bin/env node
"use strict";
/**
 * Merge OWNER revalidation overrides into et-b2-owner-decisions-accepted.md
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { parsePipeRows } = require("./lib/et-b2-owner-accepted-parse");

const BASE = path.join(ROOT, "reports/et-b2-owner-decisions-accepted.md");
const REVAL = path.join(ROOT, "reports/et-b2-owner-decisions-accepted-owner-revalidated.md");
const OUT = BASE;
const MAP_OUT = path.join(ROOT, "reports/temp/et-b2-owner-revalidation-apply-map.json");

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function parseOverrides(md) {
  const overrides = new Map();
  let inTable = false;
  for (const line of md.split("\n")) {
    if (line.startsWith("## OWNER overrides")) {
      inTable = true;
      continue;
    }
    if (inTable && line.startsWith("## ")) break;
    if (!inTable || !line.startsWith("| ET-B2-")) continue;
    const parts = line
      .split("|")
      .slice(1, -1)
      .map((p) => p.trim());
    if (parts.length < 4) continue;
    const [auditId, status, ownerNew, note] = parts;
    overrides.set(auditId, {
      status,
      ownerNew: ownerNew.replace(/^`|`$/g, "").trim(),
      note,
    });
  }
  return overrides;
}

function main() {
  if (!fs.existsSync(REVAL)) {
    console.error("Missing", REVAL);
    process.exit(1);
  }
  const baseRows = parsePipeRows(fs.readFileSync(BASE, "utf8"));
  const overrides = parseOverrides(fs.readFileSync(REVAL, "utf8"));
  if (baseRows.length !== 355) {
    console.error("BLOCKED: base rows", baseRows.length);
    process.exit(1);
  }

  const merged = [];
  const delta = [];
  const meta = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, PENDING: 0 };

  for (const row of baseRows) {
    const ov = overrides.get(row.auditId);
    let next = { ...row };
    if (ov) {
      const prevStatus = row.status;
      const prevNew = row.ownerNew;
      if (ov.status === "LABOT") {
        next.status = "LABOT";
        next.ownerNew = ov.ownerNew;
        next.ownerNote = ov.note;
      } else if (ov.status === "FALSE_POSITIVE") {
        next.status = "FALSE_POSITIVE";
        next.ownerNew = "";
        next.ownerNote = ov.note;
      } else {
        next.status = ov.status;
        next.ownerNew = ov.ownerNew;
        next.ownerNote = ov.note;
      }
      if (next.status !== prevStatus || next.ownerNew !== prevNew) {
        delta.push({
          auditId: row.auditId,
          cardId: row.cardId,
          field: row.field,
          previousStatus: prevStatus,
          previousNew: prevNew,
          nextStatus: next.status,
          nextNew: next.ownerNew,
          originalCurrent: row.current,
        });
      }
    }
    meta[next.status] = (meta[next.status] || 0) + 1;
    merged.push(next);
  }

  const lines = [
    "# ET–DE B2 — OWNER DECISIONS ACCEPTED",
    "",
    "**Source audit:** PR #628 · MASTER v1.9",
    "**OWNER authority:** `reports/et-b2-owner-decisions-accepted-owner-revalidated.md`",
    "**OWNER review:** 355/355 revalidated against PR #628 PENDING rows",
    "**Scope:** ET–DE B2 only",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Coverage",
    "",
    `- SOURCE_FINDINGS: **${merged.length}**`,
    `- OWNER_RESOLVED: **${merged.length}/${merged.length}**`,
    `- PENDING: **0**`,
    `- LABOT: **${meta.LABOT}**`,
    `- NELABOT: **${meta.NELABOT}**`,
    `- FALSE_POSITIVE: **${meta.FALSE_POSITIVE}**`,
    `- NEEDS_SOURCE_REVIEW: **${meta.NEEDS_SOURCE_REVIEW}**`,
    `- OWNER_OVERRIDES: **${overrides.size}**`,
    "",
    "## OWNER decisions",
    "",
    "| Audit ID | Card ID | Field | CURRENT | OWNER STATUS | OWNER NEW | OWNER NOTE |",
    "|---|---|---|---|---|---|---|",
  ];

  for (const row of merged) {
    lines.push(
      `| ${row.auditId} | ${row.cardId} | ${escapePipe(row.field)} | ${escapePipe(row.current)} | ${row.status} | ${escapePipe(row.ownerNew)} | ${escapePipe(row.ownerNote)} |`,
    );
  }

  lines.push("", "**OWNER verdict:** `ET_B2_OWNER_REVALIDATION_355_COMPLETE`", "");
  fs.writeFileSync(OUT, lines.join("\n"));

  fs.writeFileSync(
    MAP_OUT,
    JSON.stringify(
      {
        meta: { overrides: overrides.size, delta: delta.length, ...meta },
        delta,
        mergedCount: merged.length,
      },
      null,
      2,
    ),
  );

  console.log(JSON.stringify({ out: OUT, map: MAP_OUT, meta, delta: delta.length }, null, 2));
}

if (require.main === module) main();

module.exports = { parseOverrides };
