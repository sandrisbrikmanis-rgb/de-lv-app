#!/usr/bin/env node
"use strict";
/**
 * Build ES Kurss Lessons 1–21 OWNER decision JSON files (READ-ONLY extraction).
 * Usage: node scripts/build-es-kurss-lessons-owner-decisions.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { collectAllLessons, LESSON_COUNT } = require("./lib/es-kurss-lessons-owner-extract");

function getHeadSha() {
  try {
    return execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

function main() {
  const head = getHeadSha();
  const { byLesson } = collectAllLessons();
  const written = [];

  for (let n = 1; n <= LESSON_COUNT; n++) {
    const targets = byLesson[n];
    const pad = String(n).padStart(2, "0");
    const outPath = path.join(ROOT, `reports/es-kurss-lesson-${pad}-owner-decisions.json`);
    const payload = {
      schemaVersion: 1,
      title: `ES Kurss — Lección ${n} OWNER decisions (full user-visible extraction)`,
      authority: "OWNER",
      scope: `ES Kurss → Lección ${n}`,
      sourceMain: head,
      extractionMode: "READ_ONLY_FULL_COVERAGE",
      rules: {
        linguisticAudit: false,
        translation: false,
        newPrefill: false,
        productionChanges: false,
        currentExactMatchRequired: true,
      },
      lessonNumber: n,
      targetCount: targets.length,
      status: "READY FOR OWNER DECISIONS",
      targets,
    };
    fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + "\n");
    written.push({ lesson: n, path: `reports/es-kurss-lesson-${pad}-owner-decisions.json`, targets: targets.length });
  }

  const summaryPath = path.join(ROOT, "reports/es-kurss-lessons-01-21-owner-extraction-summary.json");
  fs.writeFileSync(
    summaryPath,
    JSON.stringify(
      {
        sourceMain: head,
        lessonCount: LESSON_COUNT,
        totalTargets: written.reduce((a, w) => a + w.targets, 0),
        files: written,
        status: "READY FOR OWNER DECISIONS",
      },
      null,
      2,
    ) + "\n",
  );

  console.log(JSON.stringify({ sourceMain: head, written, summaryPath: "reports/es-kurss-lessons-01-21-owner-extraction-summary.json" }, null, 2));
}

main();
