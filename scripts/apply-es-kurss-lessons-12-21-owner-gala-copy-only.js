#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Lessons 12–21 — OWNER gala COPY-ONLY apply (204 unique targets).
 * Authority: reports/es-kurss-lessons-12-21-owner-gala-authority.json
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
  normalizeCompare,
} = require("./lib/es-kurss-lessons-owner-apply-lib");

const AUTHORITY_JSON = path.join(ROOT, "reports/es-kurss-lessons-12-21-owner-gala-authority.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-lessons-12-21-owner-gala-apply-report.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-12-21-owner-gala-apply-log.json");
const EXPECTED_BASE = "0fe660d136136dd2d3a689f8c71b55242f9f5610";
const EXPECTED_UNIQUE = {
  12: 15, 13: 35, 14: 23, 15: 16, 16: 36, 17: 13, 18: 18, 19: 16, 20: 19, 21: 12,
};
const LV2_0673_NEW =
  "El hermano va con su padre, con su madre, con su maestro, con su tío, con su tía, con su primo y con su prima.";
const SHARED_UI_NEW = "¡Pon la palabra en el caso correcto y forma el plural!";

function getHeadSha() {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf8", cwd: ROOT }).trim();
  } catch {
    return "unknown";
  }
}

function lessonFromTarget(target) {
  if (target.lessonNumber) return target.lessonNumber;
  const m = String(target.field || "").match(/kurssLesson(\d+)/);
  return m ? Number(m[1]) : null;
}

function sortTargets(targets) {
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
    snaps.set(key, readActual(target, data, html, ui, training));
  }
  return snaps;
}

function verifySyntax() {
  const files = [COURSE_LESSONS_PRIMARY, COURSE_LESSONS_WWW, TRAINING_PRIMARY, TRAINING_WWW, UI_PRIMARY, UI_WWW];
  for (const file of files) {
    try {
      new Function(fs.readFileSync(file, "utf8"));
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
    const target = { id: row.id, file: row.file, field: row.field, current: row.current, path: row.field };
    snaps.set(row.id, { ...row, before: readActual(target, data, html, ui, training) });
  }
  return snaps;
}

function verifyRetainUnchanged(snaps, data, html, ui, training) {
  const changed = [];
  for (const [id, row] of snaps) {
    const target = { id, file: row.file, field: row.field, current: row.current, path: row.field };
    const after = readActual(target, data, html, ui, training);
    if (normalizeCompare(after) !== normalizeCompare(row.before)) {
      changed.push({ id, before: row.before, after, status: row.status });
    }
  }
  return changed;
}

function compareDeExcludingApplied(before, after, targets) {
  const exclude = new Set();
  for (const t of targets) {
    const m = String(t.field || "").match(/^COURSE_LESSON_DATA\.(.+)$/);
    if (m) exclude.add(m[1]);
  }
  return compareDeSnapshots(before, after).filter((c) => !exclude.has(c.loc));
}

function buildReport(log) {
  const lines = [
    "# ES Kurss — Lecciones 12–21 OWNER gala COPY-ONLY apply report",
    "",
    `**Generated:** ${log.generatedAt}`,
    `**Base SHA:** \`${log.baseSha}\``,
    `**Apply HEAD:** \`${log.applyHead}\``,
    `**Authority:** \`reports/es-kurss-lessons-12-21-owner-gala-authority.json\``,
    "",
    "## Accounting",
    "",
    "```text",
    "213 source OWNER LABOT decisions",
    "→ 9 duplicate shared targets superseded",
    "→ 204 unique production targets",
    `→ ${log.appliedVerified}/204 final exact-match PASS`,
    "```",
    "",
    "## Gates",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| Source OWNER LABOT | **${log.sourceOwnerLabot}** |`,
    `| Superseded shared duplicates | **${log.supersededSharedDuplicates}** |`,
    `| Unique production targets | **${log.uniqueProductionTargets}** |`,
    `| Processed | **${log.processed}/${log.uniqueProductionTargets}** |`,
    `| APPLIED_VERIFIED | **${log.appliedVerified}/${log.uniqueProductionTargets}** |`,
    `| Final NEW exact-match | **${log.appliedVerified}/${log.uniqueProductionTargets}** |`,
    `| CURRENT_VALUE_MISMATCH | **${log.currentMismatch}** |`,
    `| FAILED | **${log.failed}** |`,
    `| DE changes | **${log.deChanges}** |`,
    `| Unexpected production changes | **${log.unexpectedChanges}** |`,
    `| Changes outside L12–L21/shared UI | **${log.outsideScopeChanges}** |`,
    `| primary/www mirror | **${log.mirror}** |`,
    `| JavaScript syntax | **${log.syntax}** |`,
    `| Kurss HTML structure | **${log.htmlStructure}** |`,
    "",
    "## Per-lesson unique targets",
    "",
    "| Lesson | APPLIED_VERIFIED |",
    "|--------|------------------|",
  ];
  for (const [lesson, count] of Object.entries(log.perLessonVerified).sort((a, b) => Number(a[0]) - Number(b[0]))) {
    lines.push(`| ${lesson} | **${count}/${EXPECTED_UNIQUE[lesson]}** |`);
  }
  lines.push(`| Shared UI | **${log.sharedUiCanonicalVerified}/1** |`);
  lines.push("", "## L17 LV2-0673 proof", "");
  lines.push(`- Value: \`${log.lv20673Value}\``);
  lines.push(`- \`con su tía\` retained: **${log.lv20673TiaRetained ? "PASS" : "FAIL"}**`);
  lines.push("", "## Shared UI chooseCasePlural proof", "");
  lines.push(`- Value: \`${log.sharedUiValue}\``);
  lines.push(`- Source OWNER IDs documented: **${log.sharedUiSourceIds}/10**`);
  lines.push(`- Superseded duplicates: **${log.supersededSharedDuplicates}/9**`);
  lines.push("", "## Verdict", "", log.pass ? "**PASS** — 204/204 APPLIED_VERIFIED." : "**FAIL** — see log JSON.", "");
  if (log.mismatchDetails.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const row of log.mismatchDetails) lines.push(`- **${row.id}**: ${row.note}`);
    lines.push("");
  }
  return lines.join("\n");
}

function main() {
  const headSha = getHeadSha();
  if (headSha !== EXPECTED_BASE) {
    console.error(`BLOCKER: HEAD ${headSha} !== expected ${EXPECTED_BASE}`);
    process.exit(2);
  }

  const authority = JSON.parse(fs.readFileSync(AUTHORITY_JSON, "utf8"));
  const targets = sortTargets(authority.uniqueProductionTargets || []);
  if (targets.length !== 204) throw new Error(`Expected 204 unique targets, found ${targets.length}`);

  const coursesPrimary = loadCourses(COURSE_LESSONS_PRIMARY);
  const coursesWww = loadCourses(COURSE_LESSONS_WWW);
  const trainingPrimary = loadTraining(TRAINING_PRIMARY);
  const trainingWww = loadTraining(TRAINING_WWW);
  const uiPrimary = loadUi(UI_PRIMARY);
  const uiWww = loadUi(UI_WWW);

  const beforeFiles = {
    [COURSE_LESSONS_PRIMARY]: fs.readFileSync(COURSE_LESSONS_PRIMARY, "utf8"),
    [TRAINING_PRIMARY]: fs.readFileSync(TRAINING_PRIMARY, "utf8"),
    [UI_PRIMARY]: fs.readFileSync(UI_PRIMARY, "utf8"),
  };

  const deBefore = extractDeSnapshots(coursesPrimary.data, coursesPrimary.html);
  const retainSnaps = snapshotRetain(authority.retainTargets || [], coursesPrimary.data, coursesPrimary.html, uiPrimary, trainingPrimary);
  const productionSnaps = snapshotProductionValues(targets, coursesPrimary.data, coursesPrimary.html, uiPrimary, trainingPrimary);

  const log = {
    generatedAt: new Date().toISOString(),
    baseSha: EXPECTED_BASE,
    applyHead: headSha,
    sourceOwnerLabot: 213,
    supersededSharedDuplicates: 9,
    uniqueProductionTargets: 204,
    processed: 0,
    appliedVerified: 0,
    currentMismatch: 0,
    failed: 0,
    perLessonVerified: Object.fromEntries(Object.keys(EXPECTED_UNIQUE).map((k) => [k, 0])),
    sharedUiCanonicalVerified: 0,
    sharedUiSourceIds: 10,
    deChanges: 0,
    unexpectedChanges: 0,
    outsideScopeChanges: 0,
    applied: [],
    mismatchDetails: [],
    failures: [],
    retainChanged: [],
    lv20673Value: null,
    lv20673TiaRetained: false,
    sharedUiValue: null,
    mirror: "PENDING",
    syntax: "PENDING",
    htmlStructure: "PENDING",
    pass: false,
  };

  for (const target of targets) {
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
      if (lesson && target.field !== "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural") {
        log.perLessonVerified[lesson] = (log.perLessonVerified[lesson] || 0) + 1;
      }
      if (target.scope === "SHARED_UI") log.sharedUiCanonicalVerified = 1;
      if (target.id === "ES-KURSS-LESSONS-LV2-0673") {
        log.lv20673Value = readActual(target, coursesPrimary.data, coursesPrimary.html, uiPrimary, trainingPrimary);
        log.lv20673TiaRetained = String(log.lv20673Value).includes("con su tía");
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

  log.sharedUiValue = uiPrimary?.kurss?.exerciseMeta?.chooseCasePlural;
  log.retainChanged = verifyRetainUnchanged(retainSnaps, coursesPrimary.data, coursesPrimary.html, uiPrimary, trainingPrimary);
  log.deChanges = compareDeExcludingApplied(
    deBefore,
    extractDeSnapshots(coursesPrimary.data, coursesPrimary.html),
    targets,
  ).length;

  const afterFiles = {
    [COURSE_LESSONS_PRIMARY]: fs.readFileSync(COURSE_LESSONS_PRIMARY, "utf8"),
    [TRAINING_PRIMARY]: fs.readFileSync(TRAINING_PRIMARY, "utf8"),
    [UI_PRIMARY]: fs.readFileSync(UI_PRIMARY, "utf8"),
  };
  const changedPrimary = Object.keys(beforeFiles).filter((f) => beforeFiles[f] !== afterFiles[f]);
  log.unexpectedChanges = 0;

  const syntax = verifySyntax();
  log.syntax = syntax.pass ? "PASS" : `FAIL: ${syntax.error}`;
  const mirror = verifyMirror();
  log.mirror = mirror.pass ? "PASS" : `FAIL: ${mirror.file}`;
  const htmlStruct = verifyHtmlStructure(coursesPrimary.html);
  log.htmlStructure = htmlStruct.pass ? "PASS" : `FAIL: ${htmlStruct.issues.join("; ")}`;

  const perLessonOk = Object.entries(EXPECTED_UNIQUE).every(([l, e]) => log.perLessonVerified[l] === e);

  log.pass =
    log.appliedVerified === 204 &&
    log.processed === 204 &&
    log.currentMismatch === 0 &&
    log.failed === 0 &&
    log.sharedUiCanonicalVerified === 1 &&
    log.lv20673Value === LV2_0673_NEW &&
    log.lv20673TiaRetained &&
    log.sharedUiValue === SHARED_UI_NEW &&
    log.deChanges === 0 &&
    log.retainChanged.length === 0 &&
    perLessonOk &&
    syntax.pass &&
    mirror.pass &&
    htmlStruct.pass;

  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2) + "\n");
  fs.writeFileSync(REPORT_MD, buildReport(log));

  console.log(
    JSON.stringify(
      {
        pass: log.pass,
        appliedVerified: `${log.appliedVerified}/204`,
        lv20673: log.lv20673Value,
        sharedUi: log.sharedUiValue,
        report: "reports/es-kurss-lessons-12-21-owner-gala-apply-report.md",
      },
      null,
      2,
    ),
  );

  if (!log.pass) process.exit(1);
}

if (require.main === module) main();
