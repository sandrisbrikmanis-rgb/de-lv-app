#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Lessons 1–21 — OWNER COPY-ONLY apply (single batch).
 * Authority: reports/es-kurss-lesson-01-owner-decisions.json … lesson-21
 *
 * Usage: node scripts/apply-es-kurss-lessons-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  ROOT,
  COURSE_LESSONS_PRIMARY,
  COURSE_LESSONS_WWW,
  TRAINING_PRIMARY,
  TRAINING_WWW,
  UI_PRIMARY,
  UI_WWW,
  loadCourses,
  loadUi,
  loadTraining,
  writeCourseLessons,
  writeUi,
  writeTraining,
  loadAllDecisions,
  classifyApplyKind,
  readActual,
  applyTarget,
  verifyNew,
  extractDeSnapshots,
  compareDeSnapshots,
  verifyHtmlStructure,
  sortLabotTargets,
  dedupeLabotTargets,
  normalizeCompare,
} = require("./lib/es-kurss-lessons-owner-apply-lib");

const REPORT_MD = path.join(ROOT, "reports/es-kurss-lessons-owner-apply-report.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-owner-apply-log.json");

function labotKey(target) {
  return `${target.file}|${target.field}|${target.current}|${target.new}`;
}

function isSupersededLabot(target, canonicalLabot) {
  if (target.file !== canonicalLabot.file || target.field !== canonicalLabot.field) return false;
  if (target.id === canonicalLabot.id) return false;
  const current = String(target.current || "");
  const parentCurrent = String(canonicalLabot.current || "");
  const parentNew = String(canonicalLabot.new || "");
  if (!current || !parentCurrent.includes(current)) return false;
  return parentNew.includes(String(target.new || ""));
}

function isSupersededNelabot(target, appliedCanonical) {
  return appliedCanonical.some((labot) => {
    if (labot.file !== target.file || labot.field !== target.field) return false;
    const current = String(target.current || "");
    const parentCurrent = String(labot.current || "");
    const parentNew = String(labot.new || "");
    if (!current || parentCurrent.length <= current.length) return false;
    const parentLines = parentCurrent.split("\n").map(normalizeCompare);
    if (!parentLines.includes(normalizeCompare(current))) return false;
    if (normalizeCompare(parentNew) === normalizeCompare(parentCurrent)) return false;
    return !normalizeCompare(parentNew).includes(normalizeCompare(current));
  });
}

function isSupersededLabotByAny(target, appliedCanonical) {
  return appliedCanonical.some((parent) => isSupersededLabot(target, parent));
}

function buildReport(log) {
  const lines = [
    "# ES Kurss Lessons 1–21 — OWNER COPY-ONLY apply report",
    "",
    `**Generated:** ${log.generatedAt}`,
    "",
    "## Gates",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| APPLIED_VERIFIED | **${log.appliedVerified}/${log.requestedLabot}** |`,
    `| UNIQUE_APPLIES | **${log.uniqueApplies}** |`,
    `| NELABOT_UNCHANGED | **${log.nelabotUnchanged}/${log.requestedNelabot}** |`,
    `| CURRENT_VALUE_MISMATCH | **${log.currentMismatch}** |`,
    `| FAILED | **${log.failed}** |`,
    `| DE_CHANGES | **${log.deChanges}** |`,
    `| MIRROR | **${log.mirror}** |`,
    `| SYNTAX | **${log.syntax}** |`,
    `| HTML_STRUCTURE | **${log.htmlStructure}** |`,
    "",
    "## Verdict",
    "",
    log.pass ? "**PASS** — COPY-ONLY apply complete." : "**FAIL** — see log JSON for details.",
    "",
  ];
  if (log.mismatchDetails.length) {
    lines.push("## Mismatches", "");
    for (const row of log.mismatchDetails.slice(0, 40)) {
      lines.push(`- **${row.id}**: ${row.note}`);
    }
    if (log.mismatchDetails.length > 40) {
      lines.push(`- … and ${log.mismatchDetails.length - 40} more`);
    }
    lines.push("");
  }
  if (log.failures.length) {
    lines.push("## Failures", "");
    for (const row of log.failures.slice(0, 40)) {
      lines.push(`- **${row.id}**: ${row.note}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function verifySyntax() {
  const files = [
    "data/es/courseLessons.js",
    "www/data/es/courseLessons.js",
    "data/es/courseTrainingCards.js",
    "www/data/es/courseTrainingCards.js",
    "languages/es/ui.js",
    "www/languages/es/ui.js",
  ];
  for (const rel of files) {
    execSync(`node --check "${path.join(ROOT, rel)}"`, { encoding: "utf8" });
  }
  return "PASS";
}

function verifyMirror() {
  const pairs = [
    ["data/es/courseLessons.js", "www/data/es/courseLessons.js"],
    ["data/es/courseTrainingCards.js", "www/data/es/courseTrainingCards.js"],
    ["languages/es/ui.js", "www/languages/es/ui.js"],
  ];
  for (const [a, b] of pairs) {
    const aText = fs.readFileSync(path.join(ROOT, a), "utf8");
    const bText = fs.readFileSync(path.join(ROOT, b), "utf8");
    if (aText !== bText) throw new Error(`Mirror mismatch: ${a} <> ${b}`);
  }
  return "PASS";
}

function main() {
  const allTargets = loadAllDecisions();
  const labotAll = allTargets.filter((t) => t.status === "LABOT");
  const labotUnique = dedupeLabotTargets(sortLabotTargets(labotAll));
  const nelabot = allTargets.filter((t) => t.status === "NELABOT");

  if (labotAll.length !== 421) {
    console.error(`Expected 421 LABOT targets, found ${labotAll.length}`);
    process.exit(2);
  }
  if (nelabot.length !== 2530) {
    console.error(`Expected 2530 NELABOT targets, found ${nelabot.length}`);
    process.exit(2);
  }

  const initial = loadCourses(COURSE_LESSONS_PRIMARY);
  const data = JSON.parse(JSON.stringify(initial.data));
  const html = JSON.parse(JSON.stringify(initial.html));
  const ui = loadUi(UI_PRIMARY);
  const training = loadTraining(TRAINING_PRIMARY);
  const deBefore = extractDeSnapshots(initial.data, initial.html);

  const log = {
    generatedAt: new Date().toISOString(),
    requestedLabot: labotAll.length,
    uniqueApplies: 0,
    requestedNelabot: nelabot.length,
    appliedVerified: 0,
    nelabotUnchanged: 0,
    currentMismatch: 0,
    failed: 0,
    deChanges: 0,
    mirror: "PENDING",
    syntax: "PENDING",
    htmlStructure: "PENDING",
    mismatchDetails: [],
    failures: [],
    pass: false,
  };

  const applyStatus = new Map();
  const appliedCanonical = [];

  for (const target of labotUnique) {
    const key = labotKey(target);
    if (isSupersededLabotByAny(target, appliedCanonical)) {
      applyStatus.set(key, { status: "APPLIED_VERIFIED", note: "superseded by parent LABOT block" });
      continue;
    }
    const actual = readActual(target, data, html, ui, training);
    if (normalizeCompare(actual) === normalizeCompare(target.new)) {
      if (!verifyNew(target, data, html, ui, training)) {
        applyStatus.set(key, { status: "FAILED", note: "already at NEW but verification failed" });
        continue;
      }
      applyStatus.set(key, { status: "APPLIED_VERIFIED", note: "already at NEW" });
      appliedCanonical.push(target);
      log.uniqueApplies++;
      continue;
    }
    if (normalizeCompare(actual) !== normalizeCompare(target.current)) {
      applyStatus.set(key, { status: "CURRENT_VALUE_MISMATCH", note: `before apply (${classifyApplyKind(target)})` });
      continue;
    }
    const ok = applyTarget(target, data, html, ui, training);
    if (!ok) {
      applyStatus.set(key, { status: "FAILED", note: `apply failed for ${target.field}` });
      continue;
    }
    if (!verifyNew(target, data, html, ui, training)) {
      applyStatus.set(key, { status: "FAILED", note: "NEW verification failed after apply" });
      continue;
    }
    applyStatus.set(key, { status: "APPLIED_VERIFIED" });
    appliedCanonical.push(target);
    log.uniqueApplies++;
  }

  for (const target of labotAll) {
    const key = labotKey(target);
    const status = applyStatus.get(key);
    if (status?.status === "APPLIED_VERIFIED") {
      log.appliedVerified++;
      continue;
    }
    if (isSupersededLabotByAny(target, appliedCanonical)) {
      log.appliedVerified++;
      continue;
    }
    log.currentMismatch += status?.status === "CURRENT_VALUE_MISMATCH" ? 1 : 0;
    log.failed += status?.status === "FAILED" ? 1 : 0;
    if (!status) {
      log.currentMismatch++;
      log.mismatchDetails.push({ id: target.id, note: "missing canonical apply status" });
    } else {
      log.mismatchDetails.push({ id: target.id, note: status.note || status.status });
    }
  }

  for (const target of nelabot) {
    const actual = readActual(target, data, html, ui, training);
    if (normalizeCompare(actual) === normalizeCompare(target.current)) {
      log.nelabotUnchanged++;
      continue;
    }
    if (isSupersededNelabot(target, appliedCanonical)) {
      log.nelabotUnchanged++;
      continue;
    }
    log.currentMismatch++;
    log.mismatchDetails.push({
      id: target.id,
      note: `NELABOT changed or missing after LABOT (${target.field})`,
    });
  }

  const deAfterPreWrite = extractDeSnapshots(data, html);
  log.deChanges = compareDeSnapshots(deBefore, deAfterPreWrite).length;

  const gatesOk =
    log.appliedVerified === 421 &&
    log.nelabotUnchanged === 2530 &&
    log.currentMismatch === 0 &&
    log.failed === 0 &&
    log.deChanges === 0;

  if (!gatesOk) {
    fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
    fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2) + "\n");
    fs.writeFileSync(REPORT_MD, buildReport(log), "utf8");
    console.error(JSON.stringify(log, null, 2));
    process.exit(1);
  }

  writeCourseLessons(COURSE_LESSONS_PRIMARY, html, data);
  writeCourseLessons(COURSE_LESSONS_WWW, html, data);
  writeUi(UI_PRIMARY, ui);
  writeUi(UI_WWW, ui);
  writeTraining(TRAINING_PRIMARY, training);
  writeTraining(TRAINING_WWW, training);

  const reloaded = loadCourses(COURSE_LESSONS_PRIMARY);
  const reloadedUi = loadUi(UI_PRIMARY);
  const reloadedTraining = loadTraining(TRAINING_PRIMARY);
  let reloadVerified = 0;
  for (const target of labotUnique) {
    const actual = readActual({ ...target, current: target.new }, reloaded.data, reloaded.html, reloadedUi, reloadedTraining);
    if (normalizeCompare(actual) === normalizeCompare(target.new)) reloadVerified++;
    else {
      log.failed++;
      log.failures.push({ id: target.id, note: "post-write reload NEW mismatch" });
    }
  }
  if (reloadVerified !== labotUnique.length) {
    fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
    fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2) + "\n");
    fs.writeFileSync(REPORT_MD, buildReport(log), "utf8");
    console.error("Post-write reload verification failed");
    process.exit(1);
  }

  const deAfter = extractDeSnapshots(reloaded.data, reloaded.html);
  log.deChanges = compareDeSnapshots(deBefore, deAfter).length;

  const htmlCheck = verifyHtmlStructure(reloaded.html);
  log.htmlStructure = htmlCheck.pass ? "PASS" : "FAIL";
  if (!htmlCheck.pass) {
    log.failures.push(...htmlCheck.issues.map((issue) => ({ id: "HTML", note: issue })));
  }

  try {
    log.syntax = verifySyntax();
    log.mirror = verifyMirror();
  } catch (err) {
    log.syntax = log.syntax === "PASS" ? log.syntax : "FAIL";
    log.mirror = log.mirror === "PASS" ? log.mirror : "FAIL";
    log.failures.push({ id: "GATE", note: err.message });
  }

  log.pass =
    log.appliedVerified === 421 &&
    log.nelabotUnchanged === 2530 &&
    log.currentMismatch === 0 &&
    log.failed === 0 &&
    log.deChanges === 0 &&
    log.mirror === "PASS" &&
    log.syntax === "PASS" &&
    log.htmlStructure === "PASS";

  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2) + "\n");
  fs.writeFileSync(REPORT_MD, buildReport(log), "utf8");
  console.log(JSON.stringify(log, null, 2));
  if (!log.pass) process.exit(1);
}

main();
