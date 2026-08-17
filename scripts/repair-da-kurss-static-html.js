#!/usr/bin/env node
"use strict";
/**
 * Restore truncated COURSE_LESSON_HTML static Kurss panels for DA-DE.
 * OWNER apply accidentally replaced full HTML blocks with single-line stubs.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const BASELINE_COMMIT = "5efdb5b2";
const STATIC_KEYS = [
  "kurssArticlesLesson",
  "kurssPronounsLesson",
  "kurssPronunciationLesson",
  "kurssConsonantsLesson",
  "kurssSentenceStructureLesson",
];
const MIN_OK_LENGTH = 200;
const TARGETS = [
  path.join(ROOT, "data/da/courseLessons.js"),
  path.join(ROOT, "www/data/da/courseLessons.js"),
];

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    "$1,$2",
  );
}

function loadCourseLessonsFromSource(source) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(repairDaCourseLessonsSource(source), ctx);
  return {
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
}

function normalizeArticlesClasses(html) {
  return html
    .replace(/articles-intro-info/g, "artikuli-intro-info")
    .replace(/articles-bottom-info/g, "artikuli-bottom-info")
    .replace(/articles-info-icon/g, "artikuli-info-icon")
    .replace(/articles-info/g, "artikuli-info")
    .replace(/articles-block/g, "artikuli-block")
    .replace(/articles-header/g, "artikuli-header")
    .replace(/articles-grid/g, "artikuli-grid")
    .replace(/articles-subtitle/g, "artikuli-subtitle");
}

function writeCourseLessons(filePath, html, data) {
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(data, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function main() {
  const baselineSource = execSync(`git show ${BASELINE_COMMIT}:data/da/courseLessons.js`, {
    encoding: "utf8",
    maxBuffer: 100 * 1024 * 1024,
  });
  const baseline = loadCourseLessonsFromSource(baselineSource);

  const report = [];
  for (const filePath of TARGETS) {
    const currentSource = fs.readFileSync(filePath, "utf8");
    const current = loadCourseLessonsFromSource(currentSource);
    let restored = 0;

    for (const key of STATIC_KEYS) {
      const currentLen = (current.html[key] || "").length;
      const baselineHtml = baseline.html[key] || "";
      if (currentLen >= MIN_OK_LENGTH) continue;
      if (baselineHtml.length < MIN_OK_LENGTH) {
        throw new Error(`Baseline ${key} too short (${baselineHtml.length})`);
      }
      current.html[key] = key === "kurssArticlesLesson"
        ? normalizeArticlesClasses(baselineHtml)
        : baselineHtml;
      restored += 1;
      report.push({ filePath, key, from: currentLen, to: current.html[key].length });
    }

    if (restored) {
      writeCourseLessons(filePath, current.html, current.data);
    }
  }

  if (!report.length) {
    console.log("No truncated static Kurss HTML found; nothing to restore.");
    return;
  }

  console.log(`Restored ${report.length} static HTML block(s) from ${BASELINE_COMMIT}:`);
  for (const row of report) {
    console.log(`  ${row.filePath}: ${row.key} ${row.from} -> ${row.to} chars`);
  }
}

main();
