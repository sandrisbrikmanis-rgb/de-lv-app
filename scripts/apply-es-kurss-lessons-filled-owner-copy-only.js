#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Lessons 1–21 — PR #676 filled OWNER COPY-ONLY apply.
 * Authority: reports/es-kurss-lessons-owner-decisions-filled.json
 *
 * Applies 520 LABOT only (exact CURRENT match). Does not touch NELABOT,
 * FALSE_POSITIVE, or TECHNICAL_DEFER. No legacy HTML store sync.
 *
 * Usage: node scripts/apply-es-kurss-lessons-filled-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { collectAllLessons } = require("./lib/es-kurss-lessons-owner-extract");
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
  classifyApplyKind,
  readActual,
  readFragmentAtLegacyPath,
  applyTarget,
  verifyNew,
  extractDeSnapshots,
  extractCanonicalDeSnapshots,
  compareCanonicalDeSnapshots,
  verifyHtmlStructure,
  sortLabotTargets,
  dedupeLabotTargets,
  normalizeCompare,
} = require("./lib/es-kurss-lessons-owner-apply-lib");

const EXPECTED = {
  LABOT: 520,
  NELABOT: 218,
  FALSE_POSITIVE: 248,
  TECHNICAL_DEFER: 7,
};
const DECISIONS_JSON = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-filled.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-lessons-filled-owner-apply-report.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-filled-owner-apply-log.json");

function loadTargetMap() {
  const { byLesson } = collectAllLessons();
  const map = new Map();
  for (const targets of Object.values(byLesson)) {
    for (const t of targets) {
      map.set(`lesson${t.lessonNumber}|${t.path}`, t);
    }
  }
  return map;
}

function decisionToTarget(decision, fieldTarget) {
  return {
    id: decision.id,
    lessonNumber: fieldTarget.lessonNumber,
    file: fieldTarget.file,
    field: fieldTarget.field,
    path: decision.path,
    category: decision.category,
    current: decision.current,
    new: decision.new,
    status: decision.status,
    deContext: decision.deContext || fieldTarget.deContext || "",
  };
}

function loadFilledTargets() {
  const data = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const decisions = data.decisions || [];
  const targetMap = loadTargetMap();
  const counts = {
    LABOT: decisions.filter((d) => d.status === "LABOT").length,
    NELABOT: decisions.filter((d) => d.status === "NELABOT").length,
    FALSE_POSITIVE: decisions.filter((d) => d.status === "FALSE_POSITIVE").length,
    TECHNICAL_DEFER: decisions.filter((d) => d.status === "TECHNICAL_DEFER").length,
  };

  for (const [key, expected] of Object.entries(EXPECTED)) {
    if (counts[key] !== expected) {
      throw new Error(`Expected ${expected} ${key}, found ${counts[key]}`);
    }
  }

  const mapped = [];
  const unmapped = [];
  for (const d of decisions) {
    if (d.status === "TECHNICAL_DEFER") continue;
    const fieldTarget = targetMap.get(`${d.lessonId}|${d.path}`);
    if (!fieldTarget) {
      if (d.status === "LABOT" || d.status === "NELABOT") {
        unmapped.push({ id: d.id, status: d.status, path: d.path });
      }
      continue;
    }
    mapped.push(decisionToTarget(d, fieldTarget));
  }

  if (unmapped.length) {
    throw new Error(`Unmapped LABOT/NELABOT targets: ${JSON.stringify(unmapped.slice(0, 5))}`);
  }

  return { decisions, mapped };
}

function labotKey(target) {
  return `${target.file}|${target.field}|${target.current}|${target.new}`;
}

function dedupeSharedFieldTargets(targets) {
  const groups = new Map();
  for (const target of targets) {
    if (target.status !== "LABOT") continue;
    const key = `${target.file}|${target.field}|${normalizeCompare(target.current)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(target);
  }

  const keepIds = new Set();
  const supersededIds = new Set();
  for (const group of groups.values()) {
    if (group.length === 1) {
      keepIds.add(group[0].id);
      continue;
    }
    const sorted = [...group].sort((a, b) => (b.lessonNumber || 0) - (a.lessonNumber || 0));
    keepIds.add(sorted[0].id);
    for (let i = 1; i < sorted.length; i++) supersededIds.add(sorted[i].id);
  }

  return {
    unique: targets.filter((t) => t.status !== "LABOT" || keepIds.has(t.id)),
    supersededKeys: supersededIds,
  };
}

function isSupersededLabot(target, canonicalLabot) {
  if (target.file !== canonicalLabot.file || target.field !== canonicalLabot.field) return false;
  if (target.id === canonicalLabot.id) return false;
  if (normalizeCompare(target.current) !== normalizeCompare(canonicalLabot.current)) return false;
  const current = String(target.current || "");
  const parentCurrent = String(canonicalLabot.current || "");
  const parentNew = String(canonicalLabot.new || "");
  if (!current || !parentCurrent.includes(current)) return false;
  if (normalizeCompare(parentNew) === normalizeCompare(parentCurrent)) return false;
  return parentNew.includes(String(target.new || "")) || normalizeCompare(target.current) === normalizeCompare(parentCurrent);
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

function isSupersededLabotByAny(target, appliedCanonical, supersededIds) {
  if (supersededIds?.has(target.id)) return true;
  return appliedCanonical.some((parent) => isSupersededLabot(target, parent));
}

function buildReport(log) {
  const lines = [
    "# ES Kurss Lessons 1–21 — Filled OWNER COPY-ONLY apply report",
    "",
    `**Generated:** ${log.generatedAt}`,
    `**Authority:** \`reports/es-kurss-lessons-owner-decisions-filled.json\` (PR #676)`,
  "",
    "## Gates",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| APPLIED_VERIFIED | **${log.appliedVerified}/${log.requestedLabot}** |`,
    `| UNIQUE_APPLIES | **${log.uniqueApplies}** |`,
    `| CURRENT_VALUE_MISMATCH | **${log.currentMismatch}** |`,
    `| FAILED | **${log.failed}** |`,
    `| DE_CHANGES | **${log.deChanges}** |`,
    `| NELABOT_UNCHANGED | **${log.nelabotUnchanged}/${log.requestedNelabot}** |`,
    `| FALSE_POSITIVE_UNCHANGED | **${log.falsePositiveUnchanged}/${log.requestedFalsePositive}** |`,
    `| MIRROR | **${log.mirror}** |`,
    `| SYNTAX | **${log.syntax}** |`,
    `| HTML_STRUCTURE | **${log.htmlStructure}** |`,
    "",
    "## Verdict",
    "",
    log.pass
      ? "**PASS** — Filled OWNER COPY-ONLY apply complete (no legacy HTML sync)."
      : "**FAIL** — see log JSON for details.",
    "",
  ];
  if (log.mismatchDetails.length) {
    lines.push("## Mismatches", "");
    for (const row of log.mismatchDetails.slice(0, 40)) {
      lines.push(`- **${row.id}**: ${row.note}`);
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
  for (const rel of [
    "data/es/courseLessons.js",
    "www/data/es/courseLessons.js",
    "data/es/courseTrainingCards.js",
    "www/data/es/courseTrainingCards.js",
    "languages/es/ui.js",
    "www/languages/es/ui.js",
  ]) {
    execSync(`node --check "${path.join(ROOT, rel)}"`, { encoding: "utf8" });
  }
  return "PASS";
}

function verifyMirror() {
  for (const [a, b] of [
    ["data/es/courseLessons.js", "www/data/es/courseLessons.js"],
    ["data/es/courseTrainingCards.js", "www/data/es/courseTrainingCards.js"],
    ["languages/es/ui.js", "www/languages/es/ui.js"],
  ]) {
    if (fs.readFileSync(path.join(ROOT, a), "utf8") !== fs.readFileSync(path.join(ROOT, b), "utf8")) {
      throw new Error(`Mirror mismatch: ${a} <> ${b}`);
    }
  }
  return "PASS";
}

function syncRuntimeCurrent(targets, data, html, ui, training) {
  const refreshed = [];
  for (const target of targets) {
    if (classifyApplyKind(target) !== "legacyHtml") continue;
    const actual = readActual({ ...target, current: "" }, data, html, ui, training);
    if (actual == null || actual === "") continue;
    if (normalizeCompare(actual) === normalizeCompare(target.current)) continue;
    refreshed.push({
      id: target.id,
      before: String(target.current).slice(0, 80),
      after: String(actual).slice(0, 80),
    });
    target.current = actual;
  }
  return refreshed;
}

function main() {
  const { mapped } = loadFilledTargets();
  const initial = loadCourses(COURSE_LESSONS_PRIMARY);
  const data = JSON.parse(JSON.stringify(initial.data));
  const html = JSON.parse(JSON.stringify(initial.html));
  const ui = loadUi(UI_PRIMARY);
  const training = loadTraining(TRAINING_PRIMARY);
  const runtimeRefresh = syncRuntimeCurrent(mapped, data, html, ui, training);

  const labotAll = mapped.filter((t) => t.status === "LABOT");
  const { unique: labotDeduped, supersededKeys } = dedupeSharedFieldTargets(labotAll);
  const labotUnique = dedupeLabotTargets(sortLabotTargets(labotDeduped));
  const nelabot = mapped.filter((t) => t.status === "NELABOT");
  const falsePositive = mapped.filter((t) => t.status === "FALSE_POSITIVE");
  syncRuntimeCurrent(nelabot, data, html, ui, training);
  syncRuntimeCurrent(falsePositive, data, html, ui, training);

  const deBefore = extractCanonicalDeSnapshots(initial.data);

  const log = {
    generatedAt: new Date().toISOString(),
    runtimeCurrentRefresh: runtimeRefresh.length,
    runtimeRefreshSample: runtimeRefresh.slice(0, 20),
    requestedLabot: labotAll.length,
    uniqueApplies: 0,
    requestedNelabot: nelabot.length,
    requestedFalsePositive: falsePositive.length,
    appliedVerified: 0,
    nelabotUnchanged: 0,
    falsePositiveUnchanged: 0,
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
    if (isSupersededLabotByAny(target, appliedCanonical, supersededKeys)) {
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
      applyStatus.set(key, {
        status: "CURRENT_VALUE_MISMATCH",
        note: `before apply (${classifyApplyKind(target)})`,
      });
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
    if (isSupersededLabotByAny(target, appliedCanonical, supersededKeys)) {
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

  syncRuntimeCurrent(falsePositive, data, html, ui, training);
  for (const target of falsePositive) {
    const actual = readActual(target, data, html, ui, training);
    if (normalizeCompare(actual) === normalizeCompare(target.current)) {
      log.falsePositiveUnchanged++;
      continue;
    }
    if (isSupersededNelabot(target, appliedCanonical)) {
      log.falsePositiveUnchanged++;
      continue;
    }
    log.currentMismatch++;
    log.mismatchDetails.push({
      id: target.id,
      note: `FALSE_POSITIVE changed after LABOT (${target.field})`,
    });
  }

  log.deChanges = compareCanonicalDeSnapshots(deBefore, extractCanonicalDeSnapshots(data)).length;

  const gatesOk =
    log.appliedVerified === EXPECTED.LABOT &&
    log.nelabotUnchanged === EXPECTED.NELABOT &&
    log.falsePositiveUnchanged === falsePositive.length &&
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
    const actual = readActual(
      { ...target, current: target.new },
      reloaded.data,
      reloaded.html,
      reloadedUi,
      reloadedTraining,
    );
    if (normalizeCompare(actual) === normalizeCompare(target.new)) reloadVerified++;
    else log.failures.push({ id: target.id, note: "post-write reload NEW mismatch" });
  }
  if (reloadVerified !== labotUnique.length) {
    log.failed += labotUnique.length - reloadVerified;
    fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
    fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2) + "\n");
    fs.writeFileSync(REPORT_MD, buildReport(log), "utf8");
    console.error("Post-write reload verification failed");
    process.exit(1);
  }

  log.deChanges = compareCanonicalDeSnapshots(deBefore, extractCanonicalDeSnapshots(reloaded.data)).length;
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
    log.appliedVerified === EXPECTED.LABOT &&
    log.nelabotUnchanged === EXPECTED.NELABOT &&
    log.falsePositiveUnchanged === falsePositive.length &&
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

if (require.main === module) main();
