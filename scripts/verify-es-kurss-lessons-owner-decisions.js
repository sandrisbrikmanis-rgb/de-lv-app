#!/usr/bin/env node
"use strict";
/**
 * Verify ES Kurss Lessons 1–21 OWNER decision JSON files:
 * - every CURRENT exists exactly in production source
 * - mirror parity data/es vs www/data/es
 * - re-extraction coverage matches file target counts
 *
 * Usage: node scripts/verify-es-kurss-lessons-owner-decisions.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const {
  collectAllLessons,
  LESSON_COUNT,
  COURSE_LESSONS_FILE,
  TRAINING_FILE,
  UI_FILE,
  decodeHtmlText,
} = require("./lib/es-kurss-lessons-owner-extract");
const { getLegacyHtml, legacyHtmlContainsFragment } = require("./lib/da-kurss-owner-path");

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function loadCourseWindow(relPath) {
  const code = read(relPath);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function getTrainingValue(training, field) {
  const m = field.match(/^(lesson\d+TrainingCardsEs)\[(\d+)\]\.(\w+)$/);
  if (m) {
    const deck = training[m[1]];
    return deck?.[Number(m[2])]?.[m[3]];
  }
  const ex = field.match(/^lesson7ExerciseCardsEs\[(\d+)\]\.(\w+)$/);
  if (ex) {
    return training.lesson7ExerciseCardsEs?.[Number(ex[1])]?.[ex[2]];
  }
  return undefined;
}

function getLessonDataValue(data, html, field) {
  const m = field.match(/^COURSE_LESSON_DATA\.(kurssLesson\d+)\.(.+)$/);
  if (!m) return undefined;
  const lessonKey = m[1];
  const rest = m[2];
  if (rest === "intro") return data[lessonKey]?.intro;
  if (rest.startsWith("sections[")) {
    const parts = rest.replace(/]/g, "").split(/\.|\[/).filter(Boolean);
    let cur = data[lessonKey];
    for (const part of parts) {
      if (cur == null) return undefined;
      cur = cur[/^\d+$/.test(part) ? Number(part) : part];
    }
    return cur;
  }
  if (rest === "legacyHtml") {
    return getLegacyHtml(data, html, lessonKey);
  }
  return undefined;
}

function getUiValue(ui, field) {
  const rel = field.replace(/^LANGUAGE_UI_STRINGS\./, "");
  return rel.split(".").reduce((acc, part) => (acc == null ? undefined : acc[part]), ui);
}

function verifyCurrentInProduction(target, sources, fileCache) {
  const { file, field, current } = target;
  if (current == null || current === "") {
    return { ok: true, reason: "empty-current-skip" };
  }

  if (file === UI_FILE) {
    const val = getUiValue(sources.ui, field);
    if (val === current) return { ok: true };
    return { ok: false, reason: `UI mismatch for ${field}` };
  }

  if (file === TRAINING_FILE) {
    const val = getTrainingValue(sources.training, field);
    if (val === current) return { ok: true };
    return { ok: false, reason: `Training mismatch for ${field}` };
  }

  if (file === COURSE_LESSONS_FILE) {
    if (field.includes("legacyHtml") && field === `COURSE_LESSON_DATA.${field.match(/kurssLesson\d+/)?.[0] || ""}.legacyHtml`) {
      // handled below
    }
    const lessonMatch = field.match(/COURSE_LESSON_DATA\.(kurssLesson\d+)/);
    if (lessonMatch && field.endsWith(".legacyHtml")) {
      const html = getLegacyHtml(sources.data, sources.html, lessonMatch[1]);
      if (legacyHtmlContainsFragment(html, current)) return { ok: true };
      if (html && html.includes(current)) return { ok: true };
      const normHtml = decodeHtmlText(html);
      if (normHtml.includes(current)) return { ok: true };
      return { ok: false, reason: `legacyHtml fragment not found: ${target.path}` };
    }

    if (field.startsWith("COURSE_LESSON_DATA.")) {
      const val = getLessonDataValue(sources.data, sources.html, field);
      if (val === current) return { ok: true };
      if (typeof val === "string" && val.includes(current)) return { ok: true };
      const lessonKey = field.match(/kurssLesson\d+/)?.[0];
      if (lessonKey && field === `COURSE_LESSON_DATA.${lessonKey}.legacyHtml`) {
        const html = getLegacyHtml(sources.data, sources.html, lessonKey);
        if (legacyHtmlContainsFragment(html, current)) return { ok: true };
      }
      if (lessonKey && target.path.includes("legacyHtml")) {
        const html = getLegacyHtml(sources.data, sources.html, lessonKey);
        if (legacyHtmlContainsFragment(html, current)) return { ok: true };
        if (decodeHtmlText(html).includes(current)) return { ok: true };
      }
      return { ok: false, reason: `courseLessons mismatch for ${field}` };
    }
  }

  if (!fileCache[file]) fileCache[file] = read(file);
  if (fileCache[file].includes(current)) return { ok: true };
  return { ok: false, reason: `substring not found in ${file}` };
}

function verifyMirror() {
  const pairs = [
    [COURSE_LESSONS_FILE, `www/${COURSE_LESSONS_FILE}`],
    [TRAINING_FILE, `www/${TRAINING_FILE}`],
    [UI_FILE, `www/${UI_FILE}`],
  ];
  const issues = [];
  for (const [a, b] of pairs) {
    const aPath = path.join(ROOT, a);
    const bPath = path.join(ROOT, b);
    if (!fs.existsSync(aPath) || !fs.existsSync(bPath)) {
      issues.push(`Missing mirror file: ${a} or ${b}`);
      continue;
    }
    const aHash = fs.readFileSync(aPath, "utf8");
    const bHash = fs.readFileSync(bPath, "utf8");
    if (aHash !== bHash) issues.push(`Mirror mismatch: ${a} vs ${b}`);
  }
  return issues;
}

function main() {
  const failures = [];
  const { sources, byLesson } = collectAllLessons();
  const fileCache = {};
  const lessonReports = [];

  for (let n = 1; n <= LESSON_COUNT; n++) {
    const pad = String(n).padStart(2, "0");
    const jsonPath = path.join(ROOT, `reports/es-kurss-lesson-${pad}-owner-decisions.json`);
    if (!fs.existsSync(jsonPath)) {
      failures.push(`Missing report file: reports/es-kurss-lesson-${pad}-owner-decisions.json`);
      continue;
    }
    const report = JSON.parse(read(`reports/es-kurss-lesson-${pad}-owner-decisions.json`));
    const fresh = byLesson[n];
    if (report.targetCount !== report.targets.length) {
      failures.push(`Lesson ${n}: targetCount metadata mismatch`);
    }
    if (fresh.length !== report.targets.length) {
      failures.push(`Lesson ${n}: coverage drift (file=${report.targets.length}, fresh=${fresh.length})`);
    }
    if (report.status !== "READY FOR OWNER DECISIONS") {
      failures.push(`Lesson ${n}: status is not READY FOR OWNER DECISIONS`);
    }
    let lessonFails = 0;
    for (const target of report.targets) {
      if (target.new !== null) failures.push(`${target.id}: new must be null`);
      if (target.status !== "PĀRSKATĪT") failures.push(`${target.id}: status must be PĀRSKATĪT`);
      const check = verifyCurrentInProduction(target, sources, fileCache);
      if (!check.ok) {
        lessonFails++;
        failures.push(`${target.id}: ${check.reason} — "${String(target.current).slice(0, 80)}…"`);
      }
    }
    lessonReports.push({ lesson: n, targets: report.targets.length, verifyFails: lessonFails });
  }

  const mirrorIssues = verifyMirror();
  failures.push(...mirrorIssues);

  const result = {
    pass: failures.length === 0,
    failureCount: failures.length,
    lessonReports,
    totalTargets: lessonReports.reduce((a, r) => a + r.targets, 0),
    verdict: failures.length === 0 ? "READY FOR OWNER DECISIONS" : "VERIFY_FAIL",
    failures: failures.slice(0, 50),
  };

  const outPath = path.join(ROOT, "reports/es-kurss-lessons-01-21-owner-extraction-verify.json");
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2) + "\n");

  if (failures.length) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(result, null, 2));
}

main();
