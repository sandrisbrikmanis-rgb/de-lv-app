#!/usr/bin/env node
"use strict";
/**
 * COPY-ONLY apply for finding #218 field-level repairs (kurssArticlesLesson).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const REPAIRS_JSON = path.join(ROOT, "reports/temp/cs-kurss-articles-lesson-218-repairs.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/cs-kurss-articles-lesson-218-apply-log.json");
const PRIMARY = path.join(ROOT, "data/cs/courseLessons.js");
const WWW = path.join(ROOT, "www/data/cs/courseLessons.js");
const LESSON_KEY = "kurssArticlesLesson";

function loadCourses(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { code, html: { ...(ctx.window.COURSE_LESSON_HTML || {}) }, data: ctx.window.COURSE_LESSON_DATA || {} };
}

function getExample(html, index) {
  const examples = [...html.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)];
  return examples[index] ? examples[index][1] : undefined;
}

function getH4(html, index) {
  const items = [...html.matchAll(/<h4 class="artikuli-header">([\s\S]*?)<\/h4>/g)];
  return items[index] ? items[index][1] : undefined;
}

function getExplain(html, index) {
  const items = [...html.matchAll(/<p class="artikuli-explain">([\s\S]*?)<\/p>/g)];
  return items[index] ? items[index][1] : undefined;
}

function replaceExample(html, index, oldInner, newInner) {
  const examples = [...html.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)];
  if (index >= examples.length) throw new Error(`example[${index}] out of range`);
  const ex = examples[index];
  if (ex[1] !== oldInner) throw new Error(`example[${index}] mismatch`);
  return html.replace(ex[0], `<div class="kurss-example">${newInner}</div>`);
}

function replaceH4(html, index, oldInner, newInner) {
  const items = [...html.matchAll(/<h4 class="artikuli-header">([\s\S]*?)<\/h4>/g)];
  if (index >= items.length) throw new Error(`h4[${index}] out of range`);
  const item = items[index];
  if (item[1] !== oldInner) throw new Error(`h4[${index}] mismatch`);
  return html.replace(item[0], `<h4 class="artikuli-header">${newInner}</h4>`);
}

function replaceExplain(html, index, oldInner, newInner) {
  const items = [...html.matchAll(/<p class="artikuli-explain">([\s\S]*?)<\/p>/g)];
  if (index >= items.length) throw new Error(`explain[${index}] out of range`);
  const item = items[index];
  if (item[1] !== oldInner) throw new Error(`explain[${index}] mismatch`);
  return html.replace(item[0], `<p class="artikuli-explain">${newInner}</p>`);
}

function readCurrent(html, repair) {
  if (repair.kind === "example") return getExample(html, repair.index);
  if (repair.kind === "h4") return getH4(html, repair.index);
  if (repair.kind === "explain") return getExplain(html, repair.index);
  throw new Error(`Unknown kind ${repair.kind}`);
}

function applyRepair(html, repair) {
  if (repair.kind === "example") return replaceExample(html, repair.index, repair.current, repair.ownerNew);
  if (repair.kind === "h4") return replaceH4(html, repair.index, repair.current, repair.ownerNew);
  if (repair.kind === "explain") return replaceExplain(html, repair.index, repair.current, repair.ownerNew);
  throw new Error(`Unknown kind ${repair.kind}`);
}

function writeCourseLessons(filePath, html, data) {
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(data, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function main() {
  const { repairs } = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
  const initial = loadCourses(PRIMARY);
  let html = initial.html[LESSON_KEY];
  const log = { applied: [], currentValueMismatch: [], skipped: [], notFound: [] };

  for (const repair of repairs) {
    try {
      const actual = readCurrent(html, repair);
      if (actual === undefined) {
        log.notFound.push({ ...repair, status: "NOT_FOUND" });
        continue;
      }
      if (actual !== repair.current) {
        log.currentValueMismatch.push({
          ...repair,
          status: "CURRENT_VALUE_MISMATCH",
          actualCurrent: actual,
        });
        continue;
      }
      html = applyRepair(html, repair);
      log.applied.push({ ...repair, status: "APPLIED" });
    } catch (err) {
      log.notFound.push({ ...repair, status: "ERROR", message: err.message });
    }
  }

  if (log.applied.length > 0) {
    const nextHtml = { ...initial.html, [LESSON_KEY]: html };
    writeCourseLessons(PRIMARY, nextHtml, initial.data);
    writeCourseLessons(WWW, nextHtml, initial.data);
    execSync(`node --check "${PRIMARY}"`);
    execSync(`node --check "${WWW}"`);
  }

  log.deChanges = 0;
  log.primaryWwwSync = fs.readFileSync(PRIMARY, "utf8") === fs.readFileSync(WWW, "utf8") ? "PASS" : "FAIL";
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
  console.log(JSON.stringify({
    applied: log.applied.length,
    currentValueMismatch: log.currentValueMismatch.length,
    notFound: log.notFound.length,
    primaryWwwSync: log.primaryWwwSync,
  }, null, 2));

  if (log.currentValueMismatch.length || log.notFound.length) process.exit(1);
}

main();
