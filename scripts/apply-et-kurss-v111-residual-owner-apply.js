#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER-accepted v1.11 L1-L7 residual LABOT (37 rows) — COPY-ONLY.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const ACCEPTED = path.join(
  ROOT,
  "reports/et-kurss-v111-residual-owner-decisions-accepted-37.md",
);
const LESSONS_PRIMARY = path.join(ROOT, "data/et/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/et/courseLessons.js");
const LOG = path.join(ROOT, "reports/temp/et-kurss-v111-residual-owner-apply-log.json");

/** legacyHtml kurss-example nodes often use <br> instead of spaces after labels. */
function toLegacyHtmlBr(text) {
  if (!text || text.includes("<br>")) return text;
  const parts = text.split(/:\s+/);
  if (parts.length < 2) return text;
  const label = parts[0];
  const rest = parts.slice(1).join(": ");
  return `${label}:<br>${rest.replace(/\.\s+/g, ".<br>")}`;
}

function parseRows() {
  const src = fs.existsSync(ACCEPTED)
    ? fs.readFileSync(ACCEPTED, "utf8")
    : fs.readFileSync(
        path.join(ROOT, "uploads/et-kurss-v111-residual-owner-decisions-accepted-37.md"),
        "utf8",
      );
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-KURSS-L1L7-V111-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 8) continue;
    const [, id, lesson, fieldPath, status, current, ownerNew] = parts;
    if (status !== "LABOT" || !current || !ownerNew) continue;
    rows.push({ id, lesson, fieldPath, current, ownerNew });
  }
  return rows;
}

function applyRow(code, row) {
  const candidates = [row.current];
  const brCurrent = toLegacyHtmlBr(row.current);
  if (brCurrent && brCurrent !== row.current) candidates.push(brCurrent);

  const newCandidates = [row.ownerNew];
  const brNew = toLegacyHtmlBr(row.ownerNew);
  if (brNew && brNew !== row.ownerNew) newCandidates.push(brNew);

  for (const ownerNew of newCandidates) {
    if (code.includes(ownerNew)) {
      return { status: "ALREADY_APPLIED", count: 0, matchedNew: ownerNew };
    }
  }

  for (let i = 0; i < candidates.length; i++) {
    const current = candidates[i];
    const ownerNew = newCandidates[i] || row.ownerNew;
    if (!code.includes(current)) continue;
    const count = code.split(current).length - 1;
    const newCode = code.split(current).join(ownerNew);
    if (!newCode.includes(ownerNew)) {
      return { status: "OWNER_NEW_MISMATCH", count: 0, matchedCurrent: current, matchedNew: ownerNew };
    }
    return {
      status: "APPLIED",
      count,
      matchedCurrent: current,
      matchedNew: ownerNew,
      code: newCode,
    };
  }

  return { status: "CURRENT_VALUE_MISMATCH", count: 0 };
}

function applyFile(filePath, rows) {
  let code = fs.readFileSync(filePath, "utf8");
  const results = [];
  for (const row of rows) {
    const r = applyRow(code, row);
    if (r.code) code = r.code;
    const { code: _drop, ...summary } = r;
    results.push({ ...row, ...summary });
  }
  fs.writeFileSync(filePath, code, "utf8");
  return results;
}

function main() {
  const rows = parseRows();
  if (rows.length !== 37) {
    console.error(`Expected 37 rows, got ${rows.length}`);
    process.exit(1);
  }

  const uploadPath = path.join(ROOT, "uploads/et-kurss-v111-residual-owner-decisions-accepted-37.md");
  if (!fs.existsSync(ACCEPTED) && fs.existsSync(uploadPath)) {
    fs.copyFileSync(uploadPath, ACCEPTED);
  }

  const primary = applyFile(LESSONS_PRIMARY, rows);
  const www = applyFile(LESSONS_WWW, rows);

  const applied = primary.filter((r) => r.status === "APPLIED").length;
  const already = primary.filter((r) => r.status === "ALREADY_APPLIED").length;
  const mismatch = primary.filter((r) => r.status === "CURRENT_VALUE_MISMATCH").length;
  const newMismatch = primary.filter((r) => r.status === "OWNER_NEW_MISMATCH").length;

  const log = {
    generatedAt: new Date().toISOString(),
    requestedLabot: 37,
    appliedVerified: applied + already,
    applied,
    alreadyApplied: already,
    currentValueMismatch: mismatch,
    ownerNewMismatch: newMismatch,
    results: primary,
    wwwMatchesPrimary: www.every((w, i) => w.status === primary[i].status),
  };
  fs.writeFileSync(LOG, JSON.stringify(log, null, 2));
  console.log(
    JSON.stringify({
      appliedVerified: log.appliedVerified,
      applied,
      alreadyApplied: already,
      currentValueMismatch: mismatch,
      ownerNewMismatch: newMismatch,
    }),
  );
  if (mismatch > 0 || newMismatch > 0 || applied + already !== 37) process.exit(1);
}

main();
