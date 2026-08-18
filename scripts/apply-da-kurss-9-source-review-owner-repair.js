#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss — 9-object SOURCE REVIEW COPY-ONLY apply.
 * Usage: node scripts/apply-da-kurss-9-source-review-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  getLegacyHtml,
  setLegacyHtml,
  legacyHtmlContainsFragment,
  replaceLegacyHtmlFragment,
} = require("./lib/da-kurss-owner-path");

const APPLY_MAP = path.join(ROOT, "reports/temp/da-kurss-9-source-review-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-kurss-9-source-review-apply-log.json");
const REPORT = path.join(ROOT, "reports/da-kurss-9-source-review-owner-repair-apply.md");

const LESSONS_PRIMARY = path.join(ROOT, "data/da/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/da/courseLessons.js");
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

function loadCourses(filePath) {
  let code = fs.readFileSync(filePath, "utf8");
  code = repairDaCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

function resolveTarget(pathStr, data, html) {
  if (pathStr.startsWith("COURSE_LESSON_HTML.")) {
    const key = pathStr.replace(/^COURSE_LESSON_HTML\./, "");
    return { kind: "html", key, get: () => html[key], set: (v) => { html[key] = v; } };
  }
  const m = pathStr.match(/^COURSE_LESSON_DATA\.(\w+)\.legacyHtml$/);
  if (m) {
    const lessonKey = m[1];
    return {
      kind: "legacyHtml",
      key: lessonKey,
      get: () => getLegacyHtml(data, html, lessonKey),
      set: (v) => setLegacyHtml(data, html, lessonKey, v),
    };
  }
  return null;
}

function syncCheck(primary, www) {
  return fs.existsSync(primary) && fs.existsSync(www) &&
    fs.readFileSync(primary, "utf8") === fs.readFileSync(www, "utf8")
    ? "PASS"
    : "FAIL";
}

function main() {
  if (!fs.existsSync(APPLY_MAP)) {
    execSync("node scripts/build-da-kurss-9-source-review-apply-map.js", { cwd: ROOT, stdio: "inherit" });
  }

  const map = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const { data, html } = loadCourses(LESSONS_PRIMARY);
  const lvHashBefore = md5(LV_PRIMARY);

  const log = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    requested: map.apply.length,
    applied: [],
    currentValueMismatch: [],
    notFound: [],
    skipped: [],
    deChanges: 0,
    lvMasterChanges: 0,
    sync: { lessons: "PENDING" },
  };

  for (const entry of map.apply) {
    const target = resolveTarget(entry.path, data, html);
    const record = { num: entry.num, path: entry.path, object: entry.object };

    if (!target) {
      log.notFound.push({ ...record, reason: "UNKNOWN_PATH" });
      continue;
    }

    const full = target.get();
    if (typeof full !== "string") {
      log.notFound.push({ ...record, reason: "NOT_STRING" });
      continue;
    }

    if (!legacyHtmlContainsFragment(full, entry.daCurrent)) {
      log.currentValueMismatch.push({
        ...record,
        expectedCurrent: entry.daCurrent,
        ownerNew: entry.ownerNew,
      });
      continue;
    }

    if (entry.ownerNew === entry.daCurrent) {
      log.skipped.push({ ...record, reason: "NEW_EQUALS_CURRENT" });
      continue;
    }

    const updated = replaceLegacyHtmlFragment(full, entry.daCurrent, entry.ownerNew);
    if (updated == null) {
      log.notFound.push({ ...record, reason: "REPLACE_FAILED" });
      continue;
    }

    if (!DRY_RUN) {
      target.set(updated);
    }

    log.applied.push({
      ...record,
      status: DRY_RUN ? "DRY_RUN_OK" : "APPLIED",
      ownerNew: entry.ownerNew,
    });
  }

  if (!DRY_RUN && log.applied.length > 0) {
    writeCourseLessons(LESSONS_PRIMARY, html, data);
    writeCourseLessons(LESSONS_WWW, html, data);
    execSync(`node --check "${LESSONS_PRIMARY}"`, { encoding: "utf8" });
    execSync(`node --check "${LESSONS_WWW}"`, { encoding: "utf8" });
    execSync("node scripts/validate-kurss.js --lang=da", { cwd: ROOT, stdio: "pipe" });
  }

  log.lvMasterChanges = md5(LV_PRIMARY) === lvHashBefore ? 0 : 1;
  log.sync.lessons = syncCheck(LESSONS_PRIMARY, LESSONS_WWW);

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2), "utf8");

  const md = [
    "# DA–DE Kurss — 9-object SOURCE REVIEW apply report",
    "",
    `**Generated:** ${log.generatedAt}`,
    `**Dry run:** ${DRY_RUN}`,
    `**Source:** \`reports/da-kurss-9-source-review-owner-mapping-signed.md\``,
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Requested LABOT | **${log.requested}** |`,
    `| Applied | **${log.applied.length}** |`,
    `| CURRENT mismatch | **${log.currentValueMismatch.length}** |`,
    `| Not found / failed | **${log.notFound.length}** |`,
    `| Skipped | **${log.skipped.length}** |`,
    `| LV MASTER changes | **${log.lvMasterChanges}** |`,
    `| Mirror sync | **${log.sync.lessons}** |`,
    "",
    log.currentValueMismatch.length
      ? "## CURRENT_VALUE_MISMATCH\n\n" +
        log.currentValueMismatch
          .map((r) => `- #${r.num} \`${r.path}\` — expected fragment not found`)
          .join("\n")
      : "",
    "",
  ].join("\n");
  fs.writeFileSync(REPORT, md, "utf8");

  console.log(
    JSON.stringify(
      {
        requested: log.requested,
        applied: log.applied.length,
        currentValueMismatch: log.currentValueMismatch.length,
        notFound: log.notFound.length,
        skipped: log.skipped.length,
        lvMasterChanges: log.lvMasterChanges,
        sync: log.sync,
        dryRun: DRY_RUN,
      },
      null,
      2,
    ),
  );

  if (log.lvMasterChanges > 0) process.exit(1);
}

main();
