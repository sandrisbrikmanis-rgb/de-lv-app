#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { getAt, setAt } = require("./lib/cs-kurss-owner-path");

const roundArg = process.argv.find((a) => a.startsWith("--round="));
const round = roundArg ? roundArg.split("=")[1] : "1";
const REPAIRS_JSON = round === "2"
  ? path.join(ROOT, "reports/temp/cs-kurss-luna-micro-repair-2-repairs.json")
  : path.join(ROOT, "reports/temp/cs-kurss-luna-micro-repair-repairs.json");
const APPLY_LOG = round === "2"
  ? path.join(ROOT, "reports/temp/cs-kurss-luna-micro-repair-2-apply-log.json")
  : path.join(ROOT, "reports/temp/cs-kurss-luna-micro-repair-apply-log.json");
const PRIMARY = path.join(ROOT, "data/cs/courseLessons.js");
const WWW = path.join(ROOT, "www/data/cs/courseLessons.js");
const EXTRA_HTML_KEYS = ["kurssVerbBasicsLesson", "kurssSentenceStructureLesson"];

function loadCourses(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
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

function main() {
  const { repairs } = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
  const initial = loadCourses(PRIMARY);
  const data = initial.data;
  const log = { applied: [], currentValueMismatch: [], skipped: [], notFound: [] };

  for (const repair of repairs) {
    const actual = getAt(data, repair.normalizedPath);
    const record = { ...repair };
    if (actual === undefined) {
      log.notFound.push({ ...record, status: "NOT_FOUND" });
      continue;
    }
    if (typeof actual !== "string") {
      log.notFound.push({ ...record, status: "NOT_STRING" });
      continue;
    }
    if (actual !== repair.current) {
      log.currentValueMismatch.push({ ...record, status: "CURRENT_VALUE_MISMATCH", actualCurrent: actual });
      continue;
    }
    if (!setAt(data, repair.normalizedPath, repair.ownerNew)) {
      log.notFound.push({ ...record, status: "SET_FAILED" });
      continue;
    }
    log.applied.push({ ...record, status: "APPLIED" });
  }

  if (log.applied.length > 0) {
    writeCourseLessons(PRIMARY, initial.html, data);
    writeCourseLessons(WWW, initial.html, data);
    execSync(`node --check "${PRIMARY}"`);
    execSync(`node --check "${WWW}"`);
  }

  log.primaryWwwSync = fs.readFileSync(PRIMARY, "utf8") === fs.readFileSync(WWW, "utf8") ? "PASS" : "FAIL";
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
  console.log(JSON.stringify({
    applied: log.applied.length,
    currentValueMismatch: log.currentValueMismatch.length,
    notFound: log.notFound.length,
    primaryWwwSync: log.primaryWwwSync,
  }, null, 2));

  if (log.applied.length !== repairs.length) process.exit(1);
}

main();
