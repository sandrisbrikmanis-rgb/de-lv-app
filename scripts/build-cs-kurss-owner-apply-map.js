#!/usr/bin/env node
"use strict";
/**
 * Build merged OWNER apply map from cs-kurss-owner-decisions-group*.md
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeOwnerPath } = require("./lib/cs-kurss-owner-path");

const OUT_JSON = path.join(ROOT, "reports/temp/cs-kurss-owner-apply-map.json");

const PLACEHOLDER_CURRENT_RE =
  /^(LV teksts|jaukts LV\/CS teksts|bojāts LV teksts|legacyHtml|vairāki|\[object Object\]|pilns lesson|Nepietiek)/i;

function extractCell(text) {
  const raw = String(text || "").trim();
  const m = raw.match(/^`([^`]+)`$/);
  if (m) return m[1];
  if (raw.startsWith("`") && raw.endsWith("`")) return raw.slice(1, -1);
  return raw;
}

function parseDecisionFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("|")) continue;
    if (/^\|\s*[-:]+/.test(line)) continue;
    const cells = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length < 4) continue;
    if (!/^\d+$/.test(cells[0])) continue;
    const findingNum = parseInt(cells[0], 10);
    const pathMatch = cells[1].match(/`([^`]+)`/);
    const ownerPath = pathMatch ? pathMatch[1] : cells[1];
    const statusMatch = cells[2].match(/\*\*([A-Z_]+)\*\*/);
    const status = statusMatch ? statusMatch[1] : cells[2].replace(/\*/g, "").trim();
    const current = extractCell(cells[3]);
    const ownerNew = cells[4] ? extractCell(cells[4]) : "";
    rows.push({ findingNum, ownerPath, status, current, ownerNew, sourceFile: path.basename(filePath) });
  }
  return rows;
}

function isPlaceholderCurrent(current) {
  return PLACEHOLDER_CURRENT_RE.test(String(current || "").trim());
}

function main() {
  const groupFiles = [1, 2, 3, 4, 5].map((n) =>
    path.join(ROOT, "reports", `cs-kurss-owner-decisions-group${String(n).padStart(2, "0")}.md`),
  );

  const allRows = [];
  for (const file of groupFiles) {
    allRows.push(...parseDecisionFile(file));
  }

  const byPath = new Map();
  const skipped = [];
  const statuses = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, OTHER: 0 };

  for (const row of allRows) {
    statuses[row.status] = (statuses[row.status] || 0) + 1;
    if (row.status !== "LABOT") continue;
    if (row.findingNum === 218 || row.ownerPath === "kurssArticlesLesson") {
      skipped.push({ ...row, reason: "FINDING_218_NEEDS_FIELD_LEVEL_MAPPING" });
      continue;
    }
    if (!row.ownerNew || /^Nemainīt/i.test(row.ownerNew)) {
      skipped.push({ ...row, reason: "EMPTY_OR_NEMAINĪT_NEW" });
      continue;
    }
    const normPath = normalizeOwnerPath(row.ownerPath);
    const existing = byPath.get(normPath);
    if (!existing) {
      byPath.set(normPath, row);
      continue;
    }
    const existingPlaceholder = isPlaceholderCurrent(existing.current);
    const rowPlaceholder = isPlaceholderCurrent(row.current);
    if (existingPlaceholder && !rowPlaceholder) {
      byPath.set(normPath, row);
    } else if (!existingPlaceholder && rowPlaceholder) {
      // keep existing
    } else if (row.findingNum > existing.findingNum) {
      byPath.set(normPath, row);
    }
  }

  const apply = [];
  for (const row of [...byPath.values()].sort((a, b) => a.findingNum - b.findingNum)) {
    if (isPlaceholderCurrent(row.current)) {
      skipped.push({ ...row, reason: "PLACEHOLDER_CURRENT" });
      continue;
    }
    apply.push({
      findingNum: row.findingNum,
      ownerPath: row.ownerPath,
      normalizedPath: normalizeOwnerPath(row.ownerPath),
      current: row.current,
      ownerNew: row.ownerNew,
      sourceFile: row.sourceFile,
    });
  }

  const out = {
    generatedAt: new Date().toISOString(),
    ownerMappingsTotal: allRows.filter((r) => r.status === "LABOT").length,
    uniqueTargets: apply.length,
    skipped,
    apply,
    statusCounts: statuses,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2), "utf8");
  console.log(JSON.stringify({
    ownerMappingsTotal: out.ownerMappingsTotal,
    uniqueTargets: out.uniqueTargets,
    skipped: out.skipped.length,
    out: OUT_JSON,
  }, null, 2));
}

main();
