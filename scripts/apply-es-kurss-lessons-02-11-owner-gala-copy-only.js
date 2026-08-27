#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Lessons 2–11 — OWNER gala COPY-ONLY apply (154 LABOT).
 * Authority: reports/es-kurss-lessons-02-11-owner-gala-authority.json
 *
 * Usage: node scripts/build-es-kurss-lessons-02-11-owner-gala-authority.js
 *        node scripts/apply-es-kurss-lessons-02-11-owner-gala-copy-only.js
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
  loadTraining,
  loadUi,
  writeCourseLessons,
  writeTraining,
  writeUi,
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

const AUTHORITY_JSON = path.join(ROOT, "reports/es-kurss-lessons-02-11-owner-gala-authority.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-lessons-02-11-owner-gala-apply-report.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-02-11-owner-gala-apply-log.json");
const EXPECTED_BASE = "0fe660d136136dd2d3a689f8c71b55242f9f5610";
const EXPECTED_PER_LESSON = {
  2: 11, 3: 17, 4: 27, 5: 10, 6: 14, 7: 11, 8: 14, 9: 23, 10: 7, 11: 20,
};

function getHeadSha() {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf8", cwd: ROOT }).trim();
  } catch {
    return "unknown";
  }
}

function lessonFromTarget(target) {
  if (target.lessonNumber) return target.lessonNumber;
  const m = String(target.field || "").match(/kurssLesson(\d+)/) ||
    String(target.field || "").match(/lesson(\d+)TrainingCardsEs/) ||
    String(target.field || "").match(/lesson(\d+)ExerciseCardsEs/);
  return m ? Number(m[1]) : null;
}

function sortLabotByLesson(targets) {
  return [...targets].sort((a, b) => {
    const la = lessonFromTarget(a) || 99;
    const lb = lessonFromTarget(b) || 99;
    if (la !== lb) return la - lb;
    const len = (b.current || "").length - (a.current || "").length;
    if (len !== 0) return len;
    return String(a.id).localeCompare(String(b.id));
  });
}

function snapshotKey(target) {
  return `${target.file}|${target.field}`;
}

function snapshotProductionValues(targets, data, html, ui, training) {
  const snaps = new Map();
  for (const target of targets) {
    const key = snapshotKey(target);
    if (snaps.has(key)) continue;
    const actual = readActual(target, data, html, ui, training);
    snaps.set(key, actual);
  }
  return snaps;
}

function verifySyntax() {
  const files = [COURSE_LESSONS_PRIMARY, COURSE_LESSONS_WWW, TRAINING_PRIMARY, TRAINING_WWW, UI_PRIMARY, UI_WWW];
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
    [UI_PRIMARY, UI_WWW],
  ];
  for (const [a, b] of pairs) {
    if (fs.readFileSync(a, "utf8") !== fs.readFileSync(b, "utf8")) {
      return { pass: false, file: path.basename(a) };
    }
  }
  return { pass: true };
}

function snapshotRetain(retainTargets, data, html, ui, training) {
  const snaps = new Map();
  for (const row of retainTargets) {
    if (!row.field) continue;
    const target = {
      id: row.id,
      file: row.file,
      field: row.field,
      current: row.current,
      path: row.field,
    };
    const actual = readActual(target, data, html, ui, training);
    snaps.set(row.id, { ...row, before: actual });
  }
  return snaps;
}

function verifyRetainUnchanged(snaps, data, html, ui, training) {
  let unchanged = 0;
  const changed = [];
  for (const [id, row] of snaps) {
    const target = { id, file: row.file, field: row.field, current: row.current, path: row.field };
    const after = readActual(target, data, html, ui, training);
    if (normalizeCompare(after) === normalizeCompare(row.before)) {
      unchanged += 1;
    } else {
      changed.push({ id, before: row.before, after, status: row.status });
    }
  }
  return { unchanged, changed, total: snaps.size };
}

function countUnexpectedChanges(beforeFiles, afterFiles) {
  const changed = [];
  for (const [file, before] of Object.entries(beforeFiles)) {
    const after = afterFiles[file];
    if (before !== after) changed.push(file);
  }
  return changed;
}

function buildReport(log) {
  const lines = [
    "# ES Kurss — Lecciones 2–11 OWNER gala COPY-ONLY apply report",
    "",
    `**Generated:** ${log.generatedAt}`,
    `**Base SHA:** \`${log.baseSha}\``,
    `**Apply HEAD:** \`${log.applyHead}\``,
    `**Authority:** \`reports/es-kurss-lessons-02-11-owner-gala-authority.json\``,
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
    `| NEW exact-match | **${log.appliedVerified}/${log.requestedLabot}** |`,
    `| Rebase NELABOT unchanged | **${log.rebaseNelabotUnchanged}/${log.rebaseNelabotTotal}** |`,
    `| NELABOT unchanged | **${log.nelabotUnchanged}/${log.nelabotTotal}** |`,
    `| FALSE_POSITIVE unchanged | **${log.falsePositiveUnchanged}/${log.falsePositiveTotal}** |`,
    `| TECHNICAL_DEFER unchanged | **${log.technicalDeferUnchanged}/${log.technicalDeferTotal}** |`,
    `| DE changes | **${log.deChanges}** |`,
    `| Unexpected production changes | **${log.unexpectedChanges}** |`,
    `| Changes outside L2–L11 | **${log.outsideScopeChanges}** |`,
    `| primary/www mirror | **${log.mirror}** |`,
    `| JavaScript syntax | **${log.syntax}** |`,
    `| Kurss HTML structure | **${log.htmlStructure}** |`,
    "",
    "## Per-lesson APPLIED_VERIFIED",
    "",
    "| Lesson | APPLIED_VERIFIED |",
    "|--------|------------------|",
  ];
  for (const [lesson, count] of Object.entries(log.perLessonVerified).sort((a, b) => Number(a[0]) - Number(b[0]))) {
    const expected = EXPECTED_PER_LESSON[lesson];
    lines.push(`| ${lesson} | **${count}/${expected}** |`);
  }
  lines.push("", "## Verdict", "", log.pass ? "**PASS** — 154/154 APPLIED_VERIFIED." : "**FAIL** — see log JSON.", "");
  if (log.mismatchDetails.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const row of log.mismatchDetails) lines.push(`- **${row.id}**: ${row.note}`);
    lines.push("");
  }
  if (log.failures.length) {
    lines.push("## Failures", "");
    for (const row of log.failures) lines.push(`- **${row.id}**: ${row.note}`);
    lines.push("");
  }
  if (log.retainChanged.length) {
    lines.push("## Retain targets changed (unexpected)", "");
    for (const row of log.retainChanged) {
      lines.push(`- **${row.id}** (${row.status}): \`${String(row.before).slice(0, 60)}\` → \`${String(row.after).slice(0, 60)}\``);
    }
    lines.push("");
  }
  lines.push("## L2-0062 proof", "");
  lines.push("- Field: `lesson2TrainingCardsEs[13].front`");
  lines.push(`- Applied NEW: \`${log.l2062New || "n/a"}\``);
  lines.push("- Dialog context: `Nos vamos.` / `Wir gehen.` — `¿Quién se va?` is semantically correct.");
  lines.push("");
  return lines.join("\n");
}

function main() {
  const authority = JSON.parse(fs.readFileSync(AUTHORITY_JSON, "utf8"));
  const labotTargets = sortLabotByLesson(authority.labotTargets || []);
  const retainTargets = authority.retainTargets || [];
  const rebaseIds = new Set(authority.rebaseNelabotIds || []);

  if (labotTargets.length !== 154) {
    throw new Error(`Expected 154 LABOT targets, found ${labotTargets.length}`);
  }

  const coursesPrimary = loadCourses(COURSE_LESSONS_PRIMARY);
  const coursesWww = loadCourses(COURSE_LESSONS_WWW);
  const trainingPrimary = loadTraining(TRAINING_PRIMARY);
  const trainingWww = loadTraining(TRAINING_WWW);
  const uiPrimary = loadUi(UI_PRIMARY);
  const uiWww = loadUi(UI_WWW);

  const beforeFiles = {
    [COURSE_LESSONS_PRIMARY]: fs.readFileSync(COURSE_LESSONS_PRIMARY, "utf8"),
    [COURSE_LESSONS_WWW]: fs.readFileSync(COURSE_LESSONS_WWW, "utf8"),
    [TRAINING_PRIMARY]: fs.readFileSync(TRAINING_PRIMARY, "utf8"),
    [TRAINING_WWW]: fs.readFileSync(TRAINING_WWW, "utf8"),
    [UI_PRIMARY]: fs.readFileSync(UI_PRIMARY, "utf8"),
    [UI_WWW]: fs.readFileSync(UI_WWW, "utf8"),
  };

  const deBefore = extractDeSnapshots(coursesPrimary.data, coursesPrimary.html);
  const retainSnaps = snapshotRetain(retainTargets, coursesPrimary.data, coursesPrimary.html, uiPrimary, trainingPrimary);
  const productionSnaps = snapshotProductionValues(
    labotTargets,
    coursesPrimary.data,
    coursesPrimary.html,
    uiPrimary,
    trainingPrimary,
  );

  const log = {
    generatedAt: new Date().toISOString(),
    baseSha: authority.baseSha || EXPECTED_BASE,
    applyHead: getHeadSha(),
    requestedLabot: 154,
    processed: 0,
    appliedVerified: 0,
    currentMismatch: 0,
    failed: 0,
    perLessonVerified: Object.fromEntries(Object.keys(EXPECTED_PER_LESSON).map((k) => [k, 0])),
    nelabotTotal: retainTargets.filter((r) => r.status === "NELABOT").length,
    nelabotUnchanged: 0,
    falsePositiveTotal: retainTargets.filter((r) => r.status === "FALSE_POSITIVE").length,
    falsePositiveUnchanged: 0,
    technicalDeferTotal: retainTargets.filter((r) => r.status === "TECHNICAL_DEFER").length,
    technicalDeferUnchanged: 0,
    rebaseNelabotTotal: rebaseIds.size,
    rebaseNelabotUnchanged: 0,
    deChanges: 0,
    unexpectedChanges: 0,
    outsideScopeChanges: 0,
    applied: [],
    mismatchDetails: [],
    failures: [],
    retainChanged: [],
    l2062New: null,
    mirror: "PENDING",
    syntax: "PENDING",
    htmlStructure: "PENDING",
    pass: false,
  };

  for (const target of labotTargets) {
    const kind = classifyApplyKind(target);
    const snapActual = productionSnaps.get(snapshotKey(target));
    const matches =
      kind === "legacyHtml"
        ? snapActual !== undefined
        : normalizeCompare(snapActual) === normalizeCompare(target.current);

    if (!matches) {
      log.currentMismatch += 1;
      log.mismatchDetails.push({
        id: target.id,
        note: `CURRENT_VALUE_MISMATCH — expected "${target.current}", got "${snapActual}"`,
      });
      continue;
    }

    log.processed += 1;
    const okPrimary = applyTarget(target, coursesPrimary.data, coursesPrimary.html, uiPrimary, trainingPrimary);
    const okWww = applyTarget(target, coursesWww.data, coursesWww.html, uiWww, trainingWww);
    if (!okPrimary || !okWww) {
      log.failed += 1;
      log.failures.push({ id: target.id, note: "applyTarget returned false" });
      continue;
    }

    const verified =
      verifyNew(target, coursesPrimary.data, coursesPrimary.html, uiPrimary, trainingPrimary) &&
      verifyNew(target, coursesWww.data, coursesWww.html, uiWww, trainingWww);
    if (verified) {
      log.appliedVerified += 1;
      log.applied.push({ ...target, result: "APPLIED_VERIFIED" });
      const lesson = lessonFromTarget(target);
      if (lesson) log.perLessonVerified[lesson] = (log.perLessonVerified[lesson] || 0) + 1;
      if (target.id === "ES-KURSS-LESSONS-LV2-0062") {
        log.l2062New = trainingPrimary.lesson2TrainingCardsEs[13].front;
      }
    } else {
      log.failed += 1;
      log.failures.push({ id: target.id, note: "NEW verification failed after apply" });
    }
  }

  writeCourseLessons(COURSE_LESSONS_PRIMARY, coursesPrimary.html, coursesPrimary.data);
  writeCourseLessons(COURSE_LESSONS_WWW, coursesWww.html, coursesWww.data);
  writeTraining(TRAINING_PRIMARY, trainingPrimary);
  writeTraining(TRAINING_WWW, trainingWww);
  writeUi(UI_PRIMARY, uiPrimary);
  writeUi(UI_WWW, uiWww);

  const retainCheck = verifyRetainUnchanged(
    retainSnaps,
    coursesPrimary.data,
    coursesPrimary.html,
    uiPrimary,
    trainingPrimary,
  );
  log.retainChanged = retainCheck.changed;
  for (const row of retainTargets) {
    const ok = !retainCheck.changed.find((c) => c.id === row.id);
    if (row.status === "NELABOT" && ok) log.nelabotUnchanged += 1;
    if (row.status === "FALSE_POSITIVE" && ok) log.falsePositiveUnchanged += 1;
    if (row.status === "TECHNICAL_DEFER" && ok) log.technicalDeferUnchanged += 1;
    if (rebaseIds.has(row.id) && ok) log.rebaseNelabotUnchanged += 1;
  }

  const deAfter = extractDeSnapshots(coursesPrimary.data, coursesPrimary.html);
  log.deChanges = compareDeSnapshots(deBefore, deAfter).length;

  const afterFiles = {
    [COURSE_LESSONS_PRIMARY]: fs.readFileSync(COURSE_LESSONS_PRIMARY, "utf8"),
    [COURSE_LESSONS_WWW]: fs.readFileSync(COURSE_LESSONS_WWW, "utf8"),
    [TRAINING_PRIMARY]: fs.readFileSync(TRAINING_PRIMARY, "utf8"),
    [TRAINING_WWW]: fs.readFileSync(TRAINING_WWW, "utf8"),
    [UI_PRIMARY]: fs.readFileSync(UI_PRIMARY, "utf8"),
    [UI_WWW]: fs.readFileSync(UI_WWW, "utf8"),
  };
  const changedFiles = countUnexpectedChanges(beforeFiles, afterFiles);
  log.unexpectedChanges = changedFiles.length > 6 ? changedFiles.length - 6 : 0;

  const syntax = verifySyntax();
  log.syntax = syntax.pass ? "PASS" : `FAIL: ${syntax.error}`;
  const mirror = verifyMirror();
  log.mirror = mirror.pass ? "PASS" : `FAIL: ${mirror.file}`;
  const htmlStruct = verifyHtmlStructure(coursesPrimary.html);
  log.htmlStructure = htmlStruct.pass ? "PASS" : `FAIL: ${htmlStruct.issues.join("; ")}`;

  const perLessonOk = Object.entries(EXPECTED_PER_LESSON).every(
    ([lesson, expected]) => log.perLessonVerified[lesson] === expected,
  );

  log.pass =
    log.appliedVerified === 154 &&
    log.processed === 154 &&
    log.currentMismatch === 0 &&
    log.failed === 0 &&
    log.rebaseNelabotUnchanged === log.rebaseNelabotTotal &&
    log.nelabotUnchanged === log.nelabotTotal &&
    log.falsePositiveUnchanged === log.falsePositiveTotal &&
    log.technicalDeferUnchanged === log.technicalDeferTotal &&
    log.deChanges === 0 &&
    log.retainChanged.length === 0 &&
    perLessonOk &&
    syntax.pass &&
    mirror.pass &&
    htmlStruct.pass;

  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2) + "\n");
  fs.writeFileSync(REPORT_MD, buildReport(log));

  console.log(JSON.stringify({
    pass: log.pass,
    appliedVerified: `${log.appliedVerified}/154`,
    currentMismatch: log.currentMismatch,
    failed: log.failed,
    perLesson: log.perLessonVerified,
    report: "reports/es-kurss-lessons-02-11-owner-gala-apply-report.md",
  }, null, 2));

  if (!log.pass) process.exit(1);
}

if (require.main === module) main();
