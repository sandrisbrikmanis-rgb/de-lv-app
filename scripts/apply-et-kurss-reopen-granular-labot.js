#!/usr/bin/env node
"use strict";
/**
 * Apply OWNER-approved granular LABOT strings from materialized decisions to ET courseLessons mirrors.
 * Skips whole-legacyHtml rows (current > 300 chars). No autonomous linguistic edits.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const MATERIALIZED = path.join(ROOT, "reports/et-kurss-owner-decisions-accepted-materialized.md");
const LESSONS_PRIMARY = path.join(ROOT, "data/et/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/et/courseLessons.js");
const ROOT_UI_PRIMARY = path.join(ROOT, "ui.js");
const ROOT_UI_WWW = path.join(ROOT, "www/ui.js");
const UI_ET_PRIMARY = path.join(ROOT, "languages/et/ui.js");
const UI_ET_WWW = path.join(ROOT, "www/languages/et/ui.js");
const LOG = path.join(ROOT, "reports/temp/et-kurss-reopen-granular-labot-log.json");

const MAX_FRAGMENT = 400;

function parseLabotRows() {
  const mat = fs.readFileSync(MATERIALIZED, "utf8");
  const rows = [];
  for (const m of mat.matchAll(/\| (ET-KURSS-\d+) \|[^\|]*\|[^\|]*\| ([^|]+) \| LABOT \| ([^|]+) \|/g)) {
    const id = m[1];
    const current = m[2].trim();
    const approved = m[3].trim();
    if (!current || !approved || current.length > MAX_FRAGMENT) continue;
    rows.push({ id, current, approved });
  }
  return rows;
}

function applyToFile(filePath, rows) {
  let code = fs.readFileSync(filePath, "utf8");
  const applied = [];
  const skipped = [];
  for (const row of rows) {
    if (!code.includes(row.current)) {
      if (code.includes(row.approved)) {
        skipped.push({ ...row, status: "ALREADY_APPLIED" });
      } else {
        skipped.push({ ...row, status: "NOT_FOUND" });
      }
      continue;
    }
    code = code.replace(row.current, row.approved);
    applied.push({ ...row, status: "APPLIED" });
  }
  fs.writeFileSync(filePath, code, "utf8");
  return { applied, skipped };
}

function main() {
  const rows = parseLabotRows();
  const lessonsPrimary = applyToFile(LESSONS_PRIMARY, rows);
  const lessonsWww = applyToFile(LESSONS_WWW, rows);

  let uiApplied = [];
  const uiRows = rows.filter((r) => r.id >= "ET-KURSS-0309");
  if (fs.existsSync(UI_ET_PRIMARY)) {
    const r = applyToFile(UI_ET_PRIMARY, uiRows);
    uiApplied = r.applied;
    applyToFile(UI_ET_WWW, uiRows);
  }

  const trainingRows = rows.filter((r) => /lesson\d+TrainingCardsEt|lesson7ExerciseCardsEt/.test(r.id));
  let trainingApplied = [];
  if (trainingRows.length) {
    const r = applyToFile(ROOT_UI_PRIMARY, trainingRows);
    trainingApplied = r.applied;
    applyToFile(ROOT_UI_WWW, trainingRows);
  }

  const log = {
    generatedAt: new Date().toISOString(),
    totalRows: rows.length,
    lessonsApplied: lessonsPrimary.applied.length,
    lessonsSkipped: lessonsPrimary.skipped.length,
    applied: lessonsPrimary.applied,
    skipped: lessonsPrimary.skipped.filter((s) => s.status === "NOT_FOUND"),
    uiApplied,
    trainingApplied,
  };
  fs.writeFileSync(LOG, JSON.stringify(log, null, 2));
  console.log(
    `Granular LABOT: ${log.lessonsApplied} applied, ${log.lessonsSkipped.length - log.skipped.length} already correct, ${log.skipped.length} not found`,
  );
}

main();
