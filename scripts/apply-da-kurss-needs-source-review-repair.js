#!/usr/bin/env node
"use strict";
/**
 * Apply DA Kurss NEEDS_SOURCE_REVIEW OWNER decisions (LABOT only).
 * Usage: node scripts/apply-da-kurss-needs-source-review-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { replaceLegacyHtmlFragment } = require("./lib/da-kurss-owner-path");
const { parseDecisionFile } = require("./lib/da-kurss-monolithic-owner-pack");

const DECISIONS = path.join(ROOT, "reports/da-kurss-needs-source-review-decisions.md");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-kurss-needs-source-review-apply-log.json");
const LESSONS_PRIMARY = path.join(ROOT, "data/da/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/da/courseLessons.js");
const LV_PRIMARY = path.join(ROOT, "data/courseLessons.js");
const DRY_RUN = process.argv.includes("--dry-run");

const FINDING_62_REPLACEMENTS = [
  { from: "Sie singen nicht. — Spiller du?", to: "Sie singen nicht. — De synger ikke." },
  { from: "Wen arbejder?", to: "Hvem arbejder?" },
  { from: "Vi zählt og tegner.", to: "Vi regner og tegner." },
];

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    "$1,$2",
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
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
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
  const extra = [
    "kurssArticlesLesson",
    "kurssPronounsLesson",
    "kurssPronunciationLesson",
    "kurssConsonantsLesson",
    "kurssVerbBasicsLesson",
    "kurssSentenceStructureLesson",
  ];
  for (const key of extra) {
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

function applyFinding62(html) {
  const key = "kurssSentenceStructureLesson";
  let full = html[key];
  if (typeof full !== "string") return { ok: false, reason: "HTML_MISSING" };
  const applied = [];
  for (const pair of FINDING_62_REPLACEMENTS) {
    const updated = replaceLegacyHtmlFragment(full, pair.from, pair.to);
    if (updated == null) return { ok: false, reason: "FRAGMENT_NOT_FOUND", from: pair.from };
    full = updated;
    applied.push(pair);
  }
  html[key] = full;
  return { ok: true, applied };
}

function main() {
  if (!fs.existsSync(DECISIONS)) {
    console.error(`Missing ${DECISIONS}`);
    process.exit(1);
  }

  const rows = parseDecisionFile(DECISIONS);
  const labot = rows.filter((r) => r.status === "LABOT");
  const initial = loadCourses(LESSONS_PRIMARY);
  const html = JSON.parse(JSON.stringify(initial.html));
  const data = JSON.parse(JSON.stringify(initial.data));
  const lvBefore = md5(LV_PRIMARY);

  const log = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    labotRequested: labot.length,
    applied: [],
    skipped: [],
    notFound: [],
    lvMasterChanges: 0,
    sync: { lessons: "PENDING" },
  };

  for (const row of labot) {
    if (row.findingNum !== 62) {
      log.skipped.push({ findingNum: row.findingNum, reason: "NO_APPLY_HANDLER" });
      continue;
    }
    const result = applyFinding62(html);
    if (!result.ok) {
      log.notFound.push({ findingNum: 62, ...result });
      continue;
    }
    if (!DRY_RUN) {
      writeCourseLessons(LESSONS_PRIMARY, html, data);
      writeCourseLessons(LESSONS_WWW, html, data);
      execSync(`node --check "${LESSONS_PRIMARY}"`, { encoding: "utf8" });
      execSync(`node --check "${LESSONS_WWW}"`, { encoding: "utf8" });
    }
    log.applied.push({
      findingNum: 62,
      htmlKey: "kurssSentenceStructureLesson",
      replacements: FINDING_62_REPLACEMENTS,
      status: DRY_RUN ? "DRY_RUN_OK" : "APPLIED",
    });
  }

  log.lvMasterChanges = md5(LV_PRIMARY) === lvBefore ? 0 : 1;
  log.sync.lessons =
    fs.readFileSync(LESSONS_PRIMARY, "utf8") === fs.readFileSync(LESSONS_WWW, "utf8") ? "PASS" : "FAIL";

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2), "utf8");
  console.log(JSON.stringify(log, null, 2));

  if (log.notFound.length > 0 || log.lvMasterChanges > 0) process.exit(1);
}

main();
