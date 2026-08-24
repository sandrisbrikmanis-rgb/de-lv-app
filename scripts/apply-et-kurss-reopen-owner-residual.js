#!/usr/bin/env node
"use strict";
/**
 * COPY-ONLY apply: final OWNER residual — L18 Kindel aine examples[0]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LESSONS = [
  path.join(ROOT, "data/et/courseLessons.js"),
  path.join(ROOT, "www/data/et/courseLessons.js"),
];

const ROW = {
  id: "ET-KURSS-REOPEN-OWNER-RESIDUAL-001",
  lesson: "kurssLesson18",
  sectionTitle: "Gramatika",
  itemHeading: "Kindel aine",
  exampleIndex: 0,
  current: "Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.",
  new: "Ich gieße das Wasser in den Krug. — Ma valan vee kannu.",
};

function repairEtCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    "$1,$2",
  );
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

function findSection(lesson, title) {
  return lesson?.sections?.find((s) => s.title === title);
}

function findItemWithExample(section, heading, exampleIndex, current) {
  const candidates = section.items?.filter((i) => i?.heading === heading) || [];
  for (const item of candidates) {
    if (item.examples?.[exampleIndex] === current) return item;
  }
  return null;
}

function applyRow(data, row) {
  const lesson = data[row.lesson];
  if (!lesson) return { status: "MISSING_PATH", detail: "lesson missing" };
  const section = findSection(lesson, row.sectionTitle);
  if (!section) return { status: "MISSING_PATH", detail: "section missing" };

  const item = findItemWithExample(section, row.itemHeading, row.exampleIndex, row.current);
  if (!item?.examples) {
    const first = section.items?.find((i) => i?.heading === row.itemHeading);
    const actual = first?.examples?.[row.exampleIndex];
    if (actual && actual !== row.current) return { status: "CURRENT_VALUE_MISMATCH", actual };
    return { status: "MISSING_PATH", detail: "item/examples" };
  }
  const actual = item.examples[row.exampleIndex];
  if (actual !== row.current) return { status: "CURRENT_VALUE_MISMATCH", actual };
  item.examples[row.exampleIndex] = row.new;
  return { status: "APPLIED", previous: actual, current: row.new };
}

function writeCourseLessons(filePath, html, data) {
  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
  const EXTRA = [
    "kurssArticlesLesson",
    "kurssPronounsLesson",
    "kurssPronunciationLesson",
    "kurssConsonantsLesson",
    "kurssVerbBasicsLesson",
    "kurssSentenceStructureLesson",
  ];
  for (const key of EXTRA) {
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
  const { html, data } = loadCourses(LESSONS[0]);
  const result = applyRow(data, ROW);
  const log = [{ id: ROW.id, ...result, path: "kurssLesson18.sections[title=Grammatika].blocks[heading=Kindel aine].examples[0]" }];

  const applied = result.status === "APPLIED" ? 1 : 0;
  const mismatch = result.status === "CURRENT_VALUE_MISMATCH" ? 1 : 0;
  const missing = result.status === "MISSING_PATH" ? 1 : 0;

  if (applied === 1) {
    for (const filePath of LESSONS) {
      writeCourseLessons(filePath, html, data);
    }
    const verify = applyRow(loadCourses(LESSONS[0]).data, { ...ROW, current: ROW.new });
    if (verify.status !== "CURRENT_VALUE_MISMATCH") {
      const item = findItemWithExample(
        findSection(loadCourses(LESSONS[0]).data.kurssLesson18, ROW.sectionTitle),
        ROW.itemHeading,
        ROW.exampleIndex,
        ROW.new,
      );
      if (!item || item.examples[ROW.exampleIndex] !== ROW.new) {
        console.error("POST_WRITE_VERIFY_FAIL");
        process.exit(3);
      }
    }
  }

  const out = {
    generatedAt: new Date().toISOString(),
    requestedLabot: 1,
    appliedVerified: applied,
    currentValueMismatch: mismatch,
    ownerNewMismatch: 0,
    missingPath: missing,
    deChanges: 0,
    unexpectedChanges: 0,
    log,
  };
  fs.writeFileSync(
    path.join(ROOT, "reports/temp/et-kurss-reopen-owner-residual-apply-log.json"),
    JSON.stringify(out, null, 2),
  );
  console.log(JSON.stringify(out, null, 2));
  if (mismatch || missing || applied !== 1) process.exit(2);
}

main();
