#!/usr/bin/env node
"use strict";
/**
 * ET–DE Kurss — OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-et-kurss-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  getAt,
  setAt,
  fieldLabel,
  classifyTarget,
  uiRelativePath,
  resolveLessonsRoot,
  getLegacyHtml,
  setLegacyHtml,
  legacyHtmlContainsFragment,
  replaceLegacyHtmlFragment,
  normalizeCompare,
  isLegacyHtmlGranularPath,
  legacyHtmlGranularLessonKey,
  legacyHtmlLessonKey,
} = require("./lib/et-kurss-owner-path");

const RESOLVED = path.join(ROOT, "reports/temp/et-kurss-owner-resolved.json");
const APPLY_MAP = path.join(ROOT, "reports/temp/et-kurss-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-kurss-owner-apply-log.json");
const APPLY_REPORT = path.join(ROOT, "reports/et-kurss-owner-repair-apply.md");
const MATERIALIZED = path.join(ROOT, "reports/et-kurss-owner-decisions-accepted-materialized.md");

const LESSONS_PRIMARY = path.join(ROOT, "data/et/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/et/courseLessons.js");
const UI_PRIMARY = path.join(ROOT, "languages/et/ui.js");
const UI_WWW = path.join(ROOT, "www/languages/et/ui.js");
const ROOT_UI_PRIMARY = path.join(ROOT, "ui.js");
const ROOT_UI_WWW = path.join(ROOT, "www/ui.js");
const LV_PRIMARY = path.join(ROOT, "data/courseLessons.js");

const DRY_RUN = process.argv.includes("--dry-run");

const EXTRA_HTML_KEYS = [
  "kurssArticlesLesson",
  "kurssPronounsLesson",
  "kurssPronunciationLesson",
  "kurssConsonantsLesson",
  "kurssVerbBasicsLesson",
  "kurssSentenceStructureLesson",
];

const TRAINING_DECK_KEYS = [
  ...Array.from({ length: 6 }, (_, i) => `lesson${i + 1}TrainingCardsEt`),
  "lesson7ExerciseCardsEt",
];

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function repairEtCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function loadCourses(filePath) {
  let code = fs.readFileSync(filePath, "utf8");
  code = repairEtCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    code,
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
}

function loadRootTraining(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const decks = {};
  const re = /const (lesson\d+TrainingCardsEt) = (\[[\s\S]*?\n\];)/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    try {
      decks[m[1]] = eval(m[2]);
    } catch {
      /* skip */
    }
  }
  const exMatch = code.match(/const lesson7ExerciseCardsEt = (\[[\s\S]*?\n\];)/);
  if (exMatch) {
    try {
      decks.lesson7ExerciseCardsEt = eval(exMatch[1]);
    } catch {
      /* skip */
    }
  }
  return decks;
}

function loadUi(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return JSON.parse(JSON.stringify(ctx.window.LANGUAGE_UI_STRINGS || {}));
}

function writeCourseLessons(filePath, html, data) {
  let dataJson = JSON.stringify(data, null, 2);
  for (let i = 1; i <= 21; i++) {
    const key = `kurssLesson${i}`;
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`,
    );
  }
  for (const key of EXTRA_HTML_KEYS) {
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`,
    );
  }
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function writeRootUiTraining(filePath, decks) {
  let code = fs.readFileSync(filePath, "utf8");
  for (const key of TRAINING_DECK_KEYS) {
    if (!decks[key]) continue;
    const re = new RegExp(`const ${key} = \\[[\\s\\S]*?\\n\\];`);
    const replacement = `const ${key} = ${JSON.stringify(decks[key], null, 2)};`;
    if (!re.test(code)) {
      throw new Error(`Training deck ${key} not found in ${filePath}`);
    }
    code = code.replace(re, replacement);
  }
  fs.writeFileSync(filePath, code, "utf8");
}

function writeUi(filePath, ui) {
  fs.writeFileSync(filePath, `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(ui, null, 2)};\n`, "utf8");
}

function readProductionPostApply(entry, data, html, rootTraining, ui) {
  if (isLegacyHtmlGranularPath(entry.path)) {
    const lessonKey = legacyHtmlGranularLessonKey(entry.path);
    const full = getLegacyHtml(data, html, lessonKey);
    if (typeof full !== "string") return undefined;
    return legacyHtmlContainsFragment(full, entry.appliedNew) ? entry.appliedNew : getAt({ x: full }, "x");
  }
  const wholeLegacy = legacyHtmlLessonKey(entry.path);
  if (wholeLegacy) {
    const full = getLegacyHtml(data, html, wholeLegacy);
    if (typeof full !== "string") return undefined;
    return legacyHtmlContainsFragment(full, entry.appliedNew) ? entry.appliedNew : full;
  }
  const target = classifyTarget(entry.path);
  if (target === "ui") return getAt(ui, uiRelativePath(entry.path));
  if (target === "rootTraining") return getAt(rootTraining, entry.normalizedPath);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(entry.path, data, html);
    return getAt(root, relPath);
  }
  return undefined;
}

function currentMatches(actual, expected) {
  const a = normalizeCompare(actual);
  const e = normalizeCompare(expected);
  if (a === e) return true;
  if (!e || e === "missing") return false;
  return false;
}

function readActual(entry, data, html, rootTraining, ui) {
  if (isLegacyHtmlGranularPath(entry.path)) {
    const lessonKey = legacyHtmlGranularLessonKey(entry.path);
    const full = getLegacyHtml(data, html, lessonKey);
    if (typeof full !== "string") return undefined;
    return legacyHtmlContainsFragment(full, entry.etCurrent) ? entry.etCurrent : undefined;
  }
  const wholeLegacy = legacyHtmlLessonKey(entry.path);
  if (wholeLegacy) {
    const full = getLegacyHtml(data, html, wholeLegacy);
    if (typeof full !== "string") return undefined;
    return legacyHtmlContainsFragment(full, entry.etCurrent) ? entry.etCurrent : undefined;
  }
  const target = classifyTarget(entry.path);
  if (target === "ui") return getAt(ui, uiRelativePath(entry.path));
  if (target === "rootTraining") return getAt(rootTraining, entry.normalizedPath);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(entry.path, data, html);
    return getAt(root, relPath);
  }
  return undefined;
}

function applyOne(entry, data, html, rootTraining, ui) {
  if (isLegacyHtmlGranularPath(entry.path)) {
    const lessonKey = legacyHtmlGranularLessonKey(entry.path);
    const full = getLegacyHtml(data, html, lessonKey);
    if (typeof full !== "string") return false;
    const updated = replaceLegacyHtmlFragment(full, entry.etCurrent, entry.ownerNew);
    if (updated == null) return false;
    return setLegacyHtml(data, html, lessonKey, updated);
  }
  const wholeLegacy = legacyHtmlLessonKey(entry.path);
  if (wholeLegacy) {
    const full = getLegacyHtml(data, html, wholeLegacy);
    if (typeof full !== "string") return false;
    const updated = replaceLegacyHtmlFragment(full, entry.etCurrent, entry.ownerNew);
    if (updated == null) return false;
    return setLegacyHtml(data, html, wholeLegacy, updated);
  }
  const target = classifyTarget(entry.path);
  if (target === "ui") return setAt(ui, uiRelativePath(entry.path), entry.ownerNew);
  if (target === "rootTraining") return setAt(rootTraining, entry.normalizedPath, entry.ownerNew);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(entry.path, data, html);
    return setAt(root, relPath, entry.ownerNew);
  }
  return false;
}

function isDeOnlyString(text) {
  const t = String(text || "").trim();
  if (!t || /\s[—–-]\s/.test(t)) return false;
  if (/[āēīūģķļņĀĒĪŪĢĶĻŅäöüõÄÖÜ]/.test(t)) return false;
  return /^[\s"„"'«»A-Za-zÄÖÜäöüß.,!?;:()0-9]+$/.test(t.replace(/<[^>]+>/g, " "));
}

function extractDeSnapshots(data, html, rootTraining) {
  const fields = [];
  const add = (loc, value) => {
    if (typeof value === "string" && value.trim() && isDeOnlyString(value)) {
      fields.push({ loc, value });
    }
  };

  for (const [lessonKey, lesson] of Object.entries(data)) {
    if (!lesson?.sections) continue;
    lesson.sections.forEach((section, si) => {
      if (Array.isArray(section.items)) {
        section.items.forEach((item, ii) => {
          if (typeof item === "string") add(`${lessonKey}.sections[${si}].items[${ii}]`, item);
        });
      }
      if (Array.isArray(section.cards)) {
        section.cards.forEach((card, ci) => {
          for (const key of ["prompt", "answer", "back", "de", "base"]) {
            if (card[key] !== undefined) add(`${lessonKey}.sections[${si}].cards[${ci}].${key}`, card[key]);
          }
        });
      }
    });
  }

  for (const [key, htmlStr] of Object.entries(html)) {
    if (typeof htmlStr !== "string") continue;
    [...htmlStr.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].forEach((m, i) => {
      add(`html.${key}.example[${i}]`, m[1].trim());
    });
  }

  for (const deckKey of TRAINING_DECK_KEYS) {
    const deck = rootTraining[deckKey] || [];
    deck.forEach((card, i) => {
      if (card?.back) add(`${deckKey}[${i}].back`, card.back);
      if (card?.infinitive) add(`${deckKey}[${i}].infinitive`, card.infinitive);
    });
  }

  return fields;
}

function compareDeSnapshots(before, after) {
  const beforeMap = new Map(before.map((e) => [e.loc, e.value]));
  const changes = [];
  for (const [loc, value] of beforeMap) {
    const afterVal = after.find((e) => e.loc === loc)?.value;
    if (afterVal !== value) changes.push({ loc, before: value, after: afterVal });
  }
  return changes;
}

function syncCheck(primary, www) {
  return (
    fs.existsSync(primary) &&
    fs.existsSync(www) &&
    fs.readFileSync(primary, "utf8") === fs.readFileSync(www, "utf8")
      ? "PASS"
      : "FAIL"
  );
}

function runPrecheck() {
  const resolved = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));
  const meta = resolved.meta || {};
  const expected = { LABOT: 310, NELABOT: 3, FALSE_POSITIVE: 8, NEEDS_SOURCE_REVIEW: 2, PENDING: 0 };
  for (const [k, v] of Object.entries(expected)) {
    if (meta[k] !== v) {
      console.error(`PRECHECK FAIL: meta.${k} = ${meta[k]}, expected ${v}`);
      process.exit(2);
    }
  }
  if (!fs.existsSync(MATERIALIZED)) {
    console.error("PRECHECK FAIL: missing materialized file");
    process.exit(2);
  }
  const mat = fs.readFileSync(MATERIALIZED, "utf8");
  const directiveInRows = mat
    .split("\n")
    .filter((l) => l.startsWith("| ET-KURSS-"))
    .some((l) => l.includes("OWNER_ACCEPT_EXACT_PROPOSED_ET_FROM_AUDIT_JSON"));
  if (directiveInRows) {
    console.error("PRECHECK FAIL: materialized rows still have OWNER_ACCEPT directives");
    process.exit(2);
  }
  if (/CURRENT_ET.*…|OWNER NEW.*…/.test(mat)) {
    console.error("PRECHECK FAIL: truncated values in materialized");
    process.exit(2);
  }
}

function writeApplyReport(log) {
  const lines = [
    "# ET–DE Kurss — OWNER repair apply",
    "",
    `**Generated:** ${log.generatedAt}`,
    `**Dry run:** ${log.dryRun ? "yes" : "no"}`,
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| REQUESTED_LABOT | **${log.requestedLabot}** |`,
    `| APPLIED | **${log.appliedCount}** |`,
    `| APPLIED_VERIFIED | **${log.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${log.currentValueMismatch.length}** |`,
    `| OWNER_NEW_MISMATCH | **${log.ownerNewMismatch.length}** |`,
    `| MISSING_PATH | **${log.missingPath.length}** |`,
    `| SKIPPED | **${log.skipped.length}** |`,
    `| DE_CHANGES | **${log.deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${log.unexpectedChanges}** |`,
    `| MIRROR | **${log.mirror}** |`,
    `| SYNTAX | **${log.syntax}** |`,
    "",
    log.pass ? "## Verdict\n\n**PASS** — COPY-ONLY apply complete." : "## Verdict\n\n**FAIL** — see log JSON.",
    "",
  ];
  fs.writeFileSync(APPLY_REPORT, lines.join("\n"));
}

function main() {
  runPrecheck();

  if (!fs.existsSync(APPLY_MAP)) {
    execSync("node scripts/build-et-kurss-owner-apply-map.js", { cwd: ROOT, stdio: "inherit" });
  }

  const map = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const initial = loadCourses(LESSONS_PRIMARY);
  const data = JSON.parse(JSON.stringify(initial.data));
  const html = JSON.parse(JSON.stringify(initial.html));
  const rootTraining = loadRootTraining(ROOT_UI_PRIMARY);
  const ui = loadUi(UI_PRIMARY);

  const deBefore = extractDeSnapshots(initial.data, initial.html, rootTraining);
  const lvHashBefore = md5(LV_PRIMARY);

  const log = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    requestedLabot: map.requestedLabot,
    applied: [],
    appliedVerified: 0,
    currentValueMismatch: [],
    ownerNewMismatch: [],
    missingPath: [],
    skipped: [],
    deChanges: 0,
    lvMasterChanges: 0,
    unexpectedChanges: 0,
    mirror: "PENDING",
    syntax: "PENDING",
    pass: false,
  };

  for (const entry of map.apply) {
    const record = {
      findingId: entry.findingId,
      path: entry.path,
      normalizedPath: entry.normalizedPath,
      field: entry.field,
      expectedCurrent: entry.etCurrent,
      ownerNew: entry.ownerNew,
      target: classifyTarget(entry.path),
    };

    const pseudoApplied = { ...entry, appliedNew: entry.ownerNew };
    const atOwnerNew = readProductionPostApply(pseudoApplied, data, html, rootTraining, ui);
    if (currentMatches(atOwnerNew, entry.ownerNew)) {
      log.applied.push({
        ...record,
        status: "ALREADY_CORRECT",
        previous: atOwnerNew,
        appliedNew: entry.ownerNew,
        verified: true,
      });
      log.appliedVerified += 1;
      continue;
    }

    const actual = readActual(entry, data, html, rootTraining, ui);
    if (actual === undefined) {
      log.missingPath.push({ ...record, status: "MISSING_PATH" });
      continue;
    }
    if (typeof actual !== "string") {
      log.missingPath.push({ ...record, status: "NOT_STRING", actualType: typeof actual });
      continue;
    }
    if (!currentMatches(actual, entry.etCurrent)) {
      if (currentMatches(actual, entry.ownerNew)) {
        log.applied.push({
          ...record,
          status: "ALREADY_CORRECT",
          previous: actual,
          appliedNew: entry.ownerNew,
          verified: true,
        });
        log.appliedVerified += 1;
        continue;
      }
      log.currentValueMismatch.push({
        ...record,
        status: "CURRENT_VALUE_MISMATCH",
        actualCurrent: actual,
      });
      continue;
    }
    if (entry.ownerNew === entry.etCurrent) {
      log.skipped.push({ ...record, status: "SKIPPED", reason: "NEW_EQUALS_CURRENT" });
      log.applied.push({
        ...record,
        status: "ALREADY_CORRECT",
        previous: entry.etCurrent,
        appliedNew: entry.ownerNew,
      });
      log.appliedVerified += 1;
      continue;
    }

    if (!DRY_RUN) {
      const ok = applyOne(entry, data, html, rootTraining, ui);
      if (!ok) {
        log.missingPath.push({ ...record, status: "SET_FAILED" });
        continue;
      }
    }

    log.applied.push({
      ...record,
      status: DRY_RUN ? "DRY_RUN_OK" : "APPLIED",
      previous: entry.etCurrent,
      appliedNew: entry.ownerNew,
    });
  }

  if (!DRY_RUN && log.applied.length > 0) {
    writeCourseLessons(LESSONS_PRIMARY, html, data);
    writeCourseLessons(LESSONS_WWW, html, data);
    writeRootUiTraining(ROOT_UI_PRIMARY, rootTraining);
    writeRootUiTraining(ROOT_UI_WWW, rootTraining);
    writeUi(UI_PRIMARY, ui);
    writeUi(UI_WWW, ui);

    execSync(`node --check "${LESSONS_PRIMARY}"`, { encoding: "utf8" });
    execSync(`node --check "${LESSONS_WWW}"`, { encoding: "utf8" });
    execSync(`node --check "${UI_PRIMARY}"`, { encoding: "utf8" });
    execSync(`node --check "${ROOT_UI_PRIMARY}"`, { encoding: "utf8" });
  }

  const finalCourses = DRY_RUN ? initial : loadCourses(LESSONS_PRIMARY);
  const finalTraining = DRY_RUN ? rootTraining : loadRootTraining(ROOT_UI_PRIMARY);
  const finalUi = DRY_RUN ? ui : loadUi(UI_PRIMARY);

  for (const entry of log.applied) {
    if (entry.status === "ALREADY_CORRECT") continue;
    const actualNew = readProductionPostApply(entry, finalCourses.data, finalCourses.html, finalTraining, finalUi);
    let verified = false;
    if (isLegacyHtmlGranularPath(entry.path)) {
      const lessonKey = legacyHtmlGranularLessonKey(entry.path);
      const full = getLegacyHtml(finalCourses.data, finalCourses.html, lessonKey);
      verified = typeof full === "string" && legacyHtmlContainsFragment(full, entry.appliedNew);
    } else if (actualNew === entry.appliedNew || currentMatches(actualNew, entry.appliedNew)) {
      verified = true;
    }
    if (verified) {
      log.appliedVerified += 1;
      entry.verified = true;
    } else {
      log.ownerNewMismatch.push({
        findingId: entry.findingId,
        path: entry.path,
        expectedNew: entry.appliedNew,
        actualAfter: actualNew,
      });
    }
  }

  const deAfter = extractDeSnapshots(finalCourses.data, finalCourses.html, finalTraining);
  log.deChanges = compareDeSnapshots(deBefore, deAfter).length;
  log.lvMasterChanges = md5(LV_PRIMARY) === lvHashBefore ? 0 : 1;

  log.mirror =
    syncCheck(LESSONS_PRIMARY, LESSONS_WWW) === "PASS" &&
    syncCheck(UI_PRIMARY, UI_WWW) === "PASS" &&
    syncCheck(ROOT_UI_PRIMARY, ROOT_UI_WWW) === "PASS"
      ? "PASS"
      : "FAIL";

  try {
    execSync("node scripts/validate-kurss.js --lang=et", { cwd: ROOT, stdio: "pipe" });
    log.syntax = "PASS";
  } catch {
    log.syntax = "FAIL";
  }

  const allowedProduction = [
    "data/et/courseLessons.js",
    "www/data/et/courseLessons.js",
    "languages/et/ui.js",
    "www/languages/et/ui.js",
    "ui.js",
    "www/ui.js",
  ];
  const unexpectedFiles = [];
  for (const f of allowedProduction) {
    try {
      const out = execSync(`git diff --name-only HEAD -- "${f}"`, { cwd: ROOT, encoding: "utf8" }).trim();
      if (out) unexpectedFiles.push(out);
    } catch {
      /* no diff */
    }
  }
  // Only count unexpected changes outside allowed ET Kurss production paths.
  const allDiffFiles = execSync("git diff --name-only HEAD", { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .filter(Boolean);
  log.unexpectedFiles = allDiffFiles.filter((f) => !allowedProduction.includes(f));
  log.unexpectedChanges = log.unexpectedFiles.length;

  log.appliedCount = log.applied.length;
  log.pass =
    log.requestedLabot === 310 &&
    log.appliedCount === 310 &&
    log.appliedVerified === 310 &&
    log.currentValueMismatch.length === 0 &&
    log.ownerNewMismatch.length === 0 &&
    log.missingPath.length === 0 &&
    log.deChanges === 0 &&
    log.lvMasterChanges === 0 &&
    log.unexpectedChanges === 0 &&
    log.mirror === "PASS" &&
    log.syntax === "PASS";

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
  writeApplyReport(log);

  console.log(JSON.stringify({
    requestedLabot: log.requestedLabot,
    applied: log.appliedCount,
    appliedVerified: log.appliedVerified,
    currentValueMismatch: log.currentValueMismatch.length,
    ownerNewMismatch: log.ownerNewMismatch.length,
    missingPath: log.missingPath.length,
    pass: log.pass,
    dryRun: DRY_RUN,
  }, null, 2));

  if (!log.pass && !DRY_RUN) process.exit(1);
}

main();
