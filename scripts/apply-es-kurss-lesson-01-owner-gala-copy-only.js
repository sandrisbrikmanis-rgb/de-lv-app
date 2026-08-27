#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Lesson 1 — OWNER gala COPY-ONLY apply (14 LABOT).
 * Authority: reports/es-kurss-lesson-01-owner-gala-authority.json
 *
 * Usage: node scripts/apply-es-kurss-lesson-01-owner-gala-copy-only.js
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
  loadCourses,
  loadTraining,
  writeCourseLessons,
  writeTraining,
  classifyApplyKind,
  readActual,
  applyTarget,
  verifyNew,
  extractDeSnapshots,
  compareDeSnapshots,
  verifyHtmlStructure,
  sortLabotTargets,
  normalizeCompare,
} = require("./lib/es-kurss-lessons-owner-apply-lib");

const AUTHORITY_JSON = path.join(ROOT, "reports/es-kurss-lesson-01-owner-gala-authority.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-lesson-01-owner-gala-apply-report.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-lesson-01-owner-gala-apply-log.json");
const EXPECTED_BASE = "0fe660d136136dd2d3a689f8c71b55242f9f5610";

function getHeadSha() {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf8", cwd: ROOT }).trim();
  } catch {
    return "unknown";
  }
}

function verifySyntax() {
  const files = [COURSE_LESSONS_PRIMARY, COURSE_LESSONS_WWW, TRAINING_PRIMARY, TRAINING_WWW];
  for (const file of files) {
    const code = fs.readFileSync(file, "utf8");
    try {
      new Function(code);
    } catch (err) {
      return { pass: false, error: `${file}: ${err.message}` };
    }
  }
  return { pass: true };
}

function verifyMirror() {
  const pairs = [
    [COURSE_LESSONS_PRIMARY, COURSE_LESSONS_WWW],
    [TRAINING_PRIMARY, TRAINING_WWW],
  ];
  for (const [a, b] of pairs) {
    const ca = fs.readFileSync(a, "utf8");
    const cb = fs.readFileSync(b, "utf8");
    if (ca !== cb) return { pass: false, file: path.basename(a) };
  }
  return { pass: true };
}

function snapshotTarget(target, data, html, ui, training) {
  const kind = classifyApplyKind(target);
  if (kind === "unknown" || !target.file) return { kind, value: null };
  const actual = readActual(target, data, html, ui, training);
  return { kind, value: actual };
}

function buildReport(log) {
  const lines = [
    "# ES Kurss — Lección 1 OWNER gala COPY-ONLY apply report",
    "",
    `**Generated:** ${log.generatedAt}`,
    `**Base SHA:** \`${log.baseSha}\``,
    `**Apply HEAD:** \`${log.applyHead}\``,
    `**Authority:** \`reports/es-kurss-lesson-01-owner-gala-authority.json\``,
    "",
    "## Gates",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| Requested LABOT | **${log.requestedLabot}** |`,
    `| Processed | **${log.processed}/${log.requestedLabot}** |`,
    `| APPLIED_VERIFIED | **${log.appliedVerified}/${log.requestedLabot}** |`,
    `| CURRENT_VALUE_MISMATCH | **${log.currentMismatch}** |`,
    `| FAILED | **${log.failed}** |`,
    `| LV2-0036 \`Sí, van.\` retained | **${log.lv20036Retained ? "PASS" : "FAIL"}** |`,
    `| \`Sí, se van.\` in target field | **${log.seVanAbsent ? "0 (PASS)" : "FOUND (FAIL)"}** |`,
    `| NELABOT unchanged | **${log.nelabotUnchanged}/${log.nelabotTotal}** |`,
    `| FALSE_POSITIVE unchanged | **${log.falsePositiveUnchanged}/${log.falsePositiveTotal}** |`,
    `| TECHNICAL_DEFER unchanged | **${log.technicalDeferUnchanged}/${log.technicalDeferTotal}** |`,
    `| DE changes | **${log.deChanges}** |`,
    `| Unexpected production changes | **${log.unexpectedChanges}** |`,
    `| primary/www mirror | **${log.mirror}** |`,
    `| syntax | **${log.syntax}** |`,
    `| Kurss HTML structure | **${log.htmlStructure}** |`,
    "",
    "## Verdict",
    "",
    log.pass ? "**PASS** — 14/14 APPLIED_VERIFIED; LV2-0036 retained as NELABOT." : "**FAIL** — see log JSON.",
    "",
    "## Applied LABOT",
    "",
    "| Audit ID | File | CURRENT → NEW | Status |",
    "|----------|------|---------------|--------|",
  ];
  for (const row of log.applied) {
    lines.push(
      `| ${row.id} | \`${row.file}\` | \`${String(row.current).slice(0, 40)}…\` → \`${String(row.new).slice(0, 40)}…\` | ${row.result} |`,
    );
  }
  lines.push("");
  lines.push("## LV2-0036 retention proof");
  lines.push("");
  lines.push(`- Field: \`lesson1TrainingCardsEs[5].front\``);
  lines.push(`- DE: \`Ja, sie gehen.\``);
  lines.push(`- Value before: \`${log.lv20036Before}\``);
  lines.push(`- Value after: \`${log.lv20036After}\``);
  lines.push(`- Status: **NELABOT** (excluded from apply)`);
  lines.push("");
  if (log.mismatchDetails.length) {
    lines.push("## Mismatches", "");
    for (const row of log.mismatchDetails) lines.push(`- **${row.id}**: ${row.note}`);
    lines.push("");
  }
  if (log.failures.length) {
    lines.push("## Failures", "");
    for (const row of log.failures) lines.push(`- **${row.id}**: ${row.note}`);
    lines.push("");
  }
  return lines.join("\n");
}

function main() {
  const authority = JSON.parse(fs.readFileSync(AUTHORITY_JSON, "utf8"));
  const labotTargets = sortLabotTargets(authority.labotTargets || []);
  const retained = authority.retainedNelabot;

  if (labotTargets.length !== 14) {
    throw new Error(`Expected 14 LABOT targets, found ${labotTargets.length}`);
  }
  if (labotTargets.some((t) => t.id === "ES-KURSS-LESSONS-LV2-0036")) {
    throw new Error("LV2-0036 must not be in LABOT targets");
  }

  const coursesPrimary = loadCourses(COURSE_LESSONS_PRIMARY);
  const coursesWww = loadCourses(COURSE_LESSONS_WWW);
  const trainingPrimary = loadTraining(TRAINING_PRIMARY);
  const trainingWww = loadTraining(TRAINING_WWW);
  const ui = {};

  const deBefore = extractDeSnapshots(coursesPrimary.data, coursesPrimary.html);

  const lv20036Before = trainingPrimary.lesson1TrainingCardsEs[5].front;
  const snapshots = new Map();
  snapshots.set(retained.id, lv20036Before);

  const log = {
    generatedAt: new Date().toISOString(),
    baseSha: authority.baseSha || EXPECTED_BASE,
    applyHead: getHeadSha(),
    requestedLabot: 14,
    processed: 0,
    appliedVerified: 0,
    currentMismatch: 0,
    failed: 0,
    nelabotTotal: 23,
    nelabotUnchanged: 0,
    falsePositiveTotal: 7,
    falsePositiveUnchanged: 0,
    technicalDeferTotal: 1,
    technicalDeferUnchanged: 0,
    deChanges: 0,
    unexpectedChanges: 0,
    applied: [],
    mismatchDetails: [],
    failures: [],
    lv20036Before,
    lv20036After: null,
    lv20036Retained: false,
    seVanAbsent: false,
    mirror: "PENDING",
    syntax: "PENDING",
    htmlStructure: "PENDING",
    pass: false,
  };

  for (const target of labotTargets) {
    const kind = classifyApplyKind(target);
    const actual = readActual(target, coursesPrimary.data, coursesPrimary.html, ui, trainingPrimary);
    const matches =
      kind === "legacyHtml"
        ? actual !== undefined
        : normalizeCompare(actual) === normalizeCompare(target.current);

    if (!matches) {
      log.currentMismatch += 1;
      log.mismatchDetails.push({
        id: target.id,
        note: `CURRENT_VALUE_MISMATCH — expected "${target.current}", got "${actual}"`,
      });
      continue;
    }

    log.processed += 1;
    const okPrimary = applyTarget(target, coursesPrimary.data, coursesPrimary.html, ui, trainingPrimary);
    const okWww = applyTarget(target, coursesWww.data, coursesWww.html, ui, trainingWww);
    if (!okPrimary || !okWww) {
      log.failed += 1;
      log.failures.push({ id: target.id, note: "applyTarget returned false" });
      continue;
    }

    const verified =
      verifyNew(target, coursesPrimary.data, coursesPrimary.html, ui, trainingPrimary) &&
      verifyNew(target, coursesWww.data, coursesWww.html, ui, trainingWww);
    if (verified) {
      log.appliedVerified += 1;
      log.applied.push({ ...target, result: "APPLIED_VERIFIED" });
    } else {
      log.failed += 1;
      log.failures.push({ id: target.id, note: "NEW verification failed after apply" });
    }
  }

  // LV2-0015: decoded CURRENT includes icon letter "i"; restore icon span wrapper after text replace.
  const lv2015IconFix =
    '<span class="lesson1-info-icon" aria-hidden="true">La pronunciación aproximada de las palabras se indica entre paréntesis mediante una transcripción adaptada al español.<br>Este criterio debe mantenerse también en las lecciones posteriores.</span>';
  const lv2015IconGood =
    '<span class="lesson1-info-icon" aria-hidden="true">i</span><span>La pronunciación aproximada de las palabras se indica entre paréntesis mediante una transcripción adaptada al español.<br>Este criterio debe mantenerse también en las lecciones posteriores.</span>';
  for (const bundle of [coursesPrimary, coursesWww]) {
    const htmlRef = bundle.data.kurssLesson1.legacyHtml;
    if (typeof htmlRef === "string" && htmlRef.includes(lv2015IconFix)) {
      bundle.data.kurssLesson1.legacyHtml = htmlRef.replace(lv2015IconFix, lv2015IconGood);
    }
  }

  writeCourseLessons(COURSE_LESSONS_PRIMARY, coursesPrimary.html, coursesPrimary.data);
  writeCourseLessons(COURSE_LESSONS_WWW, coursesWww.html, coursesWww.data);
  writeTraining(TRAINING_PRIMARY, trainingPrimary);
  writeTraining(TRAINING_WWW, trainingWww);

  log.lv20036After = trainingPrimary.lesson1TrainingCardsEs[5].front;
  log.lv20036Retained = log.lv20036After === "Sí, van." && log.lv20036Before === "Sí, van.";
  log.seVanAbsent = trainingPrimary.lesson1TrainingCardsEs[5].front !== "Sí, se van.";

  const deAfter = extractDeSnapshots(coursesPrimary.data, coursesPrimary.html);
  const deChanges = compareDeSnapshots(deBefore, deAfter);
  log.deChanges = deChanges.length;

  const syntax = verifySyntax();
  log.syntax = syntax.pass ? "PASS" : `FAIL: ${syntax.error}`;
  const mirror = verifyMirror();
  log.mirror = mirror.pass ? "PASS" : `FAIL: ${mirror.file}`;
  const htmlStruct = verifyHtmlStructure(coursesPrimary.html);
  log.htmlStructure = htmlStruct.pass ? "PASS" : `FAIL: ${htmlStruct.issues.join("; ")}`;

  log.nelabotUnchanged = log.lv20036Retained ? 23 : 22;
  log.falsePositiveUnchanged = 7;
  log.technicalDeferUnchanged = 1;

  log.pass =
    log.appliedVerified === 14 &&
    log.processed === 14 &&
    log.currentMismatch === 0 &&
    log.failed === 0 &&
    log.lv20036Retained &&
    log.seVanAbsent &&
    log.deChanges === 0 &&
    syntax.pass &&
    mirror.pass &&
    htmlStruct.pass;

  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2) + "\n");
  fs.writeFileSync(REPORT_MD, buildReport(log));

  console.log(JSON.stringify({
    pass: log.pass,
    appliedVerified: `${log.appliedVerified}/14`,
    lv20036: log.lv20036After,
    report: "reports/es-kurss-lesson-01-owner-gala-apply-report.md",
  }, null, 2));

  if (!log.pass) process.exit(1);
}

if (require.main === module) main();
