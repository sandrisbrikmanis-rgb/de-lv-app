#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss final post-repair OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-da-kurss-final-post-repair-owner-repair.js [--dry-run]
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
} = require("./lib/da-kurss-owner-path");

const APPLY_MAP = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-owner-apply-log.json");
const REPORT = path.join(ROOT, "reports/da-kurss-final-post-repair-owner-repair-apply.md");

const LESSONS_PRIMARY = path.join(ROOT, "data/da/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/da/courseLessons.js");
const TRAINING_PRIMARY = path.join(ROOT, "data/da/courseTrainingCards.js");
const TRAINING_WWW = path.join(ROOT, "www/data/da/courseTrainingCards.js");
const UI_PRIMARY = path.join(ROOT, "languages/da/ui.js");
const UI_WWW = path.join(ROOT, "www/languages/da/ui.js");
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
  ...Array.from({ length: 6 }, (_, i) => `lesson${i + 1}TrainingCardsDa`),
  "lesson7ExerciseCardsDa",
];

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeCompare(val) {
  return String(val ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function currentMatches(actual, expected) {
  const a = normalizeCompare(actual);
  const e = normalizeCompare(expected);
  if (a === e) return true;
  if (!e || e === "missing") return false;
  for (const suffix of ["...", "…"]) {
    if (e.endsWith(suffix)) {
      const prefix = e.slice(0, -suffix.length).trim();
      if (prefix && a.startsWith(prefix)) return true;
    }
  }
  return false;
}

function loadCourses(filePath) {
  let code = fs.readFileSync(filePath, "utf8");
  code = repairDaCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    code,
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
}

function loadTraining(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const decks = {};
  for (const key of TRAINING_DECK_KEYS) {
    decks[key] = JSON.parse(JSON.stringify(ctx.window[key] || []));
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

function writeTraining(filePath, decks) {
  const parts = ["// Danish course training cards for DA-DE Kurss lessons 1-7.\n"];
  for (const key of TRAINING_DECK_KEYS) {
    parts.push(`window.${key} = ${JSON.stringify(decks[key] || [], null, 2)};\n`);
  }
  fs.writeFileSync(filePath, parts.join("\n"), "utf8");
}

function writeUi(filePath, ui) {
  fs.writeFileSync(filePath, `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(ui, null, 2)};\n`, "utf8");
}

function readActual(entry, data, html, training, ui) {
  const target = classifyTarget(entry.path);
  if (target === "ui") return getAt(ui, uiRelativePath(entry.path));
  if (target === "training") return getAt(training, entry.normalizedPath);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(entry.path, data, html);
    return getAt(root, relPath);
  }
  return undefined;
}

function applyOne(entry, data, html, training, ui) {
  const target = classifyTarget(entry.path);
  if (target === "ui") return setAt(ui, uiRelativePath(entry.path), entry.ownerNew);
  if (target === "training") return setAt(training, entry.normalizedPath, entry.ownerNew);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(entry.path, data, html);
    return setAt(root, relPath, entry.ownerNew);
  }
  return false;
}

function isDeField(key, value) {
  if (typeof value !== "string" || !value.trim()) return false;
  if (key === "front" || key === "lv" || key === "title" || key === "subtitle" || key === "intro") return false;
  if (key === "back" || key === "de" || key === "infinitive" || key === "du" || key === "ihr" || key === "sie") return true;
  if (key === "prompt" || key === "answer" || key === "base") return true;
  return false;
}

function collectDeFields(data, training) {
  const out = [];
  for (const [lessonKey, lesson] of Object.entries(data)) {
    if (!lesson?.sections) continue;
    lesson.sections.forEach((section, si) => {
      section.cards?.forEach((card, ci) => {
        for (const [k, v] of Object.entries(card || {})) {
          if (isDeField(k, v)) out.push({ loc: `${lessonKey}.sections[${si}].cards[${ci}].${k}`, value: v });
        }
        card.forms?.forEach((form, fi) => {
          if (form.text) out.push({ loc: `${lessonKey}.sections[${si}].cards[${ci}].forms[${fi}].text`, value: form.text });
        });
      });
    });
  }
  for (const deckKey of TRAINING_DECK_KEYS) {
    (training[deckKey] || []).forEach((card, i) => {
      for (const k of ["back", "infinitive", "du", "ihr", "sie"]) {
        if (card?.[k]) out.push({ loc: `${deckKey}[${i}].${k}`, value: card[k] });
      }
    });
  }
  return out;
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
  return fs.existsSync(primary) &&
    fs.existsSync(www) &&
    fs.readFileSync(primary, "utf8") === fs.readFileSync(www, "utf8")
    ? "PASS"
    : "FAIL";
}

function renderReport(log, map) {
  return [
    "# DA–DE Kurss — final post-repair OWNER repair apply",
    "",
    `**Generated:** ${log.generatedAt}`,
    `**Dry run:** ${log.dryRun}`,
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Signed decision rows | **${map.totalRows}** |`,
    `| LABOT in apply map | **${map.applyCount}** |`,
    `| Requested apply | **${log.requested}** |`,
    `| Applied | **${log.applied.length}** |`,
    `| CURRENT mismatch (SKIP) | **${log.currentValueMismatch.length}** |`,
    `| Not found | **${log.notFound.length}** |`,
    `| DE changes | **${log.deChanges}** |`,
    `| LV MASTER changes | **${log.lvMasterChanges}** |`,
    "",
    "**DE = STRICT READ-ONLY.**",
    "",
  ].join("\n");
}

function main() {
  execSync("node scripts/build-da-kurss-final-post-repair-owner-apply-map.js", {
    cwd: ROOT,
    stdio: "pipe",
  });

  const map = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const initial = loadCourses(LESSONS_PRIMARY);
  const data = JSON.parse(JSON.stringify(initial.data));
  const html = JSON.parse(JSON.stringify(initial.html));
  const training = loadTraining(TRAINING_PRIMARY);
  const ui = loadUi(UI_PRIMARY);

  const deBefore = collectDeFields(initial.data, training);
  const lvHashBefore = md5(LV_PRIMARY);

  const log = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    requested: map.apply.length,
    applied: [],
    currentValueMismatch: [],
    skipped: [],
    notFound: [],
    deChanges: 0,
    lvMasterChanges: 0,
    sync: { lessons: "PENDING", training: "PENDING", ui: "PENDING" },
  };

  for (const entry of map.apply) {
    const actual = readActual(entry, data, html, training, ui);
    const record = {
      findingNum: entry.findingNum,
      findingId: entry.findingId,
      path: entry.path,
      normalizedPath: entry.normalizedPath,
      field: fieldLabel(entry.normalizedPath),
      expectedCurrent: entry.daCurrent,
      ownerNew: entry.ownerNew,
      target: classifyTarget(entry.path),
      track: entry.track,
    };

    if (actual === undefined) {
      log.notFound.push({ ...record, status: "NOT_FOUND" });
      continue;
    }
    if (typeof actual !== "string") {
      log.notFound.push({ ...record, status: "NOT_STRING", actualType: typeof actual });
      continue;
    }
    if (!currentMatches(actual, entry.daCurrent)) {
      log.currentValueMismatch.push({
        ...record,
        status: "CURRENT_VALUE_MISMATCH",
        actualCurrent: actual,
      });
      continue;
    }
    if (normalizeCompare(entry.ownerNew) === normalizeCompare(actual)) {
      log.skipped.push({ ...record, status: "SKIPPED", reason: "NEW_EQUALS_CURRENT" });
      continue;
    }

    if (!DRY_RUN) {
      const ok = applyOne(entry, data, html, training, ui);
      if (!ok) {
        log.notFound.push({ ...record, status: "SET_FAILED" });
        continue;
      }
    }

    log.applied.push({
      ...record,
      status: DRY_RUN ? "DRY_RUN_OK" : "APPLIED",
      previous: actual,
      appliedNew: entry.ownerNew,
    });
  }

  if (!DRY_RUN && log.applied.length > 0) {
    writeCourseLessons(LESSONS_PRIMARY, html, data);
    writeCourseLessons(LESSONS_WWW, html, data);
    writeTraining(TRAINING_PRIMARY, training);
    writeTraining(TRAINING_WWW, training);
    writeUi(UI_PRIMARY, ui);
    writeUi(UI_WWW, ui);

    execSync(`node --check "${LESSONS_PRIMARY}"`, { encoding: "utf8" });
    execSync(`node --check "${LESSONS_WWW}"`, { encoding: "utf8" });
    execSync(`node --check "${TRAINING_PRIMARY}"`, { encoding: "utf8" });
    execSync(`node --check "${UI_PRIMARY}"`, { encoding: "utf8" });
  }

  const finalLessons = DRY_RUN ? initial : loadCourses(LESSONS_PRIMARY);
  const finalTraining = DRY_RUN ? training : loadTraining(TRAINING_PRIMARY);
  const deAfter = collectDeFields(finalLessons.data, finalTraining);
  const deDiff = compareDeSnapshots(deBefore, deAfter);
  log.deChanges = deDiff.length;
  log.deDiffSample = deDiff.slice(0, 20);
  log.lvMasterChanges = md5(LV_PRIMARY) === lvHashBefore ? 0 : 1;
  log.sync.lessons = syncCheck(LESSONS_PRIMARY, LESSONS_WWW);
  log.sync.training = syncCheck(TRAINING_PRIMARY, TRAINING_WWW);
  log.sync.ui = syncCheck(UI_PRIMARY, UI_WWW);

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
  fs.writeFileSync(REPORT, renderReport(log, map));

  console.log(
    JSON.stringify(
      {
        requested: log.requested,
        applied: log.applied.length,
        currentValueMismatch: log.currentValueMismatch.length,
        skipped: log.skipped.length,
        notFound: log.notFound.length,
        deChanges: log.deChanges,
        lvMasterChanges: log.lvMasterChanges,
        sync: log.sync,
        dryRun: DRY_RUN,
      },
      null,
      2,
    ),
  );

  if (log.deChanges > 0 || log.lvMasterChanges > 0) {
    process.exit(1);
  }
}

main();
