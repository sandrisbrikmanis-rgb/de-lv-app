#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss section-pack — OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-da-kurss-section-owner-repair.js [--dry-run] [--decisions-dir /path]
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
  replaceLegacyHtmlFragment,
  normalizeCompare,
} = require("./lib/da-kurss-owner-path");
const { normalizeDashVariants } = require("./lib/da-kurss-section-pack");

const APPLY_MAP = path.join(ROOT, "reports/temp/da-kurss-section-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-kurss-section-owner-apply-log.json");

const LESSONS_PRIMARY = path.join(ROOT, "data/da/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/da/courseLessons.js");
const TRAINING_PRIMARY = path.join(ROOT, "data/da/courseTrainingCards.js");
const TRAINING_WWW = path.join(ROOT, "www/data/da/courseTrainingCards.js");
const UI_PRIMARY = path.join(ROOT, "languages/da/ui.js");
const UI_WWW = path.join(ROOT, "www/languages/da/ui.js");
const LV_PRIMARY = path.join(ROOT, "data/courseLessons.js");

const DRY_RUN = process.argv.includes("--dry-run");

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
  return {};
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
  for (const key of [
    "kurssArticlesLesson",
    "kurssPronounsLesson",
    "kurssPronunciationLesson",
    "kurssConsonantsLesson",
    "kurssVerbBasicsLesson",
    "kurssSentenceStructureLesson",
  ]) {
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

function writeUi(filePath, ui) {
  fs.writeFileSync(filePath, `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(ui, null, 2)};\n`, "utf8");
}

function readActual(entry, data, html, training, ui) {
  if (entry.applyMode === "htmlSubstring") {
    const full = html[entry.htmlKey];
    if (typeof full !== "string") return undefined;
    const from = entry.fragmentFrom;
    const to = entry.fragmentTo;
    if (full.includes(from)) return from;
    const normFrom = normalizeDashVariants(from);
    if (full.includes(normFrom)) return normFrom;
    if (normalizeCompare(full).includes(normalizeCompare(from))) return from;
    const normTo = normalizeDashVariants(to);
    if (full.includes(to) || full.includes(normTo)) return to;
    return undefined;
  }

  const target = classifyTarget(entry.path);
  if (target === "ui") return getAt(ui, uiRelativePath(entry.path));
  if (target === "training") return getAt(training, entry.normalizedPath);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(entry.path, data, html);
    return getAt(root, relPath);
  }
  return undefined;
}

function applyHtmlSubstring(html, entry) {
  const key = entry.htmlKey;
  const full = html[key];
  if (typeof full !== "string") return { ok: false, reason: "HTML_KEY_MISSING" };

  let from = entry.fragmentFrom;
  let updated = replaceLegacyHtmlFragment(full, from, entry.fragmentTo);
  if (updated == null) {
    from = normalizeDashVariants(from);
    updated = replaceLegacyHtmlFragment(full, from, normalizeDashVariants(entry.fragmentTo));
  }
  if (updated == null) return { ok: false, reason: "FRAGMENT_NOT_FOUND", from };

  html[key] = updated;
  return { ok: true, previous: from, appliedNew: entry.fragmentTo };
}

function applyField(entry, data, html, training, ui) {
  const target = classifyTarget(entry.path);
  if (target === "ui") return setAt(ui, uiRelativePath(entry.path), entry.ownerNew);
  if (target === "training") return setAt(training, entry.normalizedPath, entry.ownerNew);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(entry.path, data, html);
    return setAt(root, relPath, entry.ownerNew);
  }
  return false;
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

function main() {
  if (!fs.existsSync(APPLY_MAP)) {
    execSync("node scripts/build-da-kurss-section-owner-apply-map.js", { cwd: ROOT, stdio: "inherit" });
  }

  const map = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const initial = loadCourses(LESSONS_PRIMARY);
  const data = JSON.parse(JSON.stringify(initial.data));
  const html = JSON.parse(JSON.stringify(initial.html));
  const training = loadTraining(TRAINING_PRIMARY);
  const ui = loadUi(UI_PRIMARY);
  const lvHashBefore = md5(LV_PRIMARY);

  const log = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    ownerMappingsTotal: map.ownerMappingsTotal,
    requested: map.apply.length,
    applied: [],
    currentValueMismatch: [],
    skipped: [],
    notFound: [],
    lvMasterChanges: 0,
    sync: { lessons: "PENDING", training: "PENDING", ui: "PENDING" },
  };

  for (const entry of map.apply) {
    const actual = readActual(entry, data, html, training, ui);
    const record = {
      sectionSlug: entry.sectionSlug,
      findingNum: entry.findingNum,
      path: entry.path,
      normalizedPath: entry.normalizedPath,
      field: fieldLabel(entry.normalizedPath),
      expectedCurrent: entry.daCurrent,
      ownerNew: entry.ownerNew,
      applyMode: entry.applyMode,
      target: classifyTarget(entry.path),
    };

    if (actual === undefined) {
      log.notFound.push({ ...record, status: "NOT_FOUND" });
      continue;
    }

    if (entry.applyMode === "field") {
      if (typeof actual !== "string") {
        log.notFound.push({ ...record, status: "NOT_STRING", actualType: typeof actual });
        continue;
      }
      if (actual !== entry.daCurrent) {
        if (actual === entry.ownerNew) {
          log.skipped.push({ ...record, status: "SKIPPED", reason: "ALREADY_APPLIED" });
          continue;
        }
        log.currentValueMismatch.push({
          ...record,
          status: "CURRENT_VALUE_MISMATCH",
          actualCurrent: actual,
        });
        continue;
      }
      if (entry.ownerNew === entry.daCurrent) {
        log.skipped.push({ ...record, status: "SKIPPED", reason: "NEW_EQUALS_CURRENT" });
        continue;
      }
      if (!DRY_RUN) {
        const ok = applyField(entry, data, html, training, ui);
        if (!ok) {
          log.notFound.push({ ...record, status: "SET_FAILED" });
          continue;
        }
      }
      log.applied.push({ ...record, status: DRY_RUN ? "DRY_RUN_OK" : "APPLIED", previous: actual, appliedNew: entry.ownerNew });
      continue;
    }

    if (entry.applyMode === "htmlSubstring") {
      if (actual === entry.fragmentTo || actual === normalizeDashVariants(entry.fragmentTo)) {
        log.skipped.push({ ...record, status: "SKIPPED", reason: "ALREADY_APPLIED" });
        continue;
      }
      if (!DRY_RUN) {
        const result = applyHtmlSubstring(html, entry);
        if (!result.ok) {
          log.notFound.push({ ...record, status: result.reason, fragmentFrom: entry.fragmentFrom });
          continue;
        }
        log.applied.push({
          ...record,
          status: "APPLIED",
          previous: result.previous,
          appliedNew: result.appliedNew,
        });
      } else {
        log.applied.push({ ...record, status: "DRY_RUN_OK", previous: actual, appliedNew: entry.fragmentTo });
      }
    }
  }

  if (!DRY_RUN && log.applied.length > 0) {
    writeCourseLessons(LESSONS_PRIMARY, html, data);
    writeCourseLessons(LESSONS_WWW, html, data);
    writeUi(UI_PRIMARY, ui);
    writeUi(UI_WWW, ui);

    execSync(`node --check "${LESSONS_PRIMARY}"`, { encoding: "utf8" });
    execSync(`node --check "${LESSONS_WWW}"`, { encoding: "utf8" });
    execSync(`node --check "${UI_PRIMARY}"`, { encoding: "utf8" });
  }

  log.lvMasterChanges = md5(LV_PRIMARY) === lvHashBefore ? 0 : 1;
  log.sync.lessons = syncCheck(LESSONS_PRIMARY, LESSONS_WWW);
  log.sync.ui = syncCheck(UI_PRIMARY, UI_WWW);

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2), "utf8");

  console.log(
    JSON.stringify(
      {
        requested: log.requested,
        applied: log.applied.length,
        currentValueMismatch: log.currentValueMismatch.length,
        skipped: log.skipped.length,
        notFound: log.notFound.length,
        lvMasterChanges: log.lvMasterChanges,
        sync: log.sync,
        dryRun: DRY_RUN,
      },
      null,
      2,
    ),
  );

  if (log.notFound.length > 0) {
    process.exit(1);
  }
  if (log.currentValueMismatch.length > 0 && log.applied.length === 0) {
    process.exit(1);
  }
}

main();
