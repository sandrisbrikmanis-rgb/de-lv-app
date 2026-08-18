#!/usr/bin/env node
"use strict";
/**
 * Residual OWNER LABOT fixes where audit daCurrent blocks were non-contiguous.
 * COPY-ONLY from live file fragments; DE untouched.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { replaceLegacyHtmlFragment, getLegacyHtml, setLegacyHtml } = require("./lib/da-kurss-owner-path");

const LESSONS_PRIMARY = path.join(ROOT, "data/da/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/da/courseLessons.js");

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

function replaceInHtml(html, key, pairs) {
  let full = html[key];
  let count = 0;
  for (const [from, to] of pairs) {
    const updated = replaceLegacyHtmlFragment(full, from, to);
    if (updated == null) throw new Error(`Missing fragment in ${key}: ${from.slice(0, 60)}…`);
    full = updated;
    count++;
  }
  html[key] = full;
  return count;
}

function replaceInLesson(data, html, lessonKey, pairs) {
  const full = getLegacyHtml(data, html, lessonKey);
  if (typeof full !== "string") throw new Error(`Missing legacyHtml for ${lessonKey}`);
  let cur = full;
  let count = 0;
  for (const [from, to] of pairs) {
    const updated = replaceLegacyHtmlFragment(cur, from, to);
    if (updated == null) throw new Error(`Missing fragment in ${lessonKey}: ${from.slice(0, 60)}…`);
    cur = updated;
    count++;
  }
  setLegacyHtml(data, html, lessonKey, cur);
  return count;
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

function main() {
  const { html, data } = loadCourses(LESSONS_PRIMARY);
  let replacements = 0;

  replacements += replaceInHtml(html, "kurssPronunciationLesson", [
    ["Tarm (få) - godt", "Gut (gūt) - god"],
    ["Hytte (hūt) - hat", "Hut (hūt) - hat"],
    ["Schlaf — sov", "Schlaf — søvn"],
    ["Ihn (īn) - hans", "Ihn (īn) - ham"],
    ["Ihm (īm) - for skinke", "Ihm (īm) - ham"],
    ["Langt i = dvs", "Langt i = ie"],
    ["Dø (dī) - artiklen \"dø\"", "Die (dī) - artiklen \"die\""],
    ["Hier (hīr) - hende", "Hier (hīr) - her"],
    ["Saal (græs) - græs", "Saal (zāl) - sal"],
    ["Se (se) - sø / hav", "See (zē) - sø / hav"],
    ["Roer (bēt) - seng", "Beet (bēt) - bed"],
    ["Støvle (bōt) - båd", "Boot (bōt) - båd"],
  ]);

  replacements += replaceInHtml(html, "kurssConsonantsLesson", [
    ["Vater (fäter) - langt", "Vater (fäter) - far"],
    ["Von (fon) - no", "Von (fon) - fra"],
    ["Vier (fīr) - ild", "Vier (fīr) - fire"],
  ]);

  replacements += replaceInHtml(html, "kurssSentenceStructureLesson", [
    ["Wer arbeitet? — Vi arbejder.", "Wer arbeitet? — Hvem arbejder?"],
    [
      "Wir rechnen und zeichnen. — De kommer, spørger, svarer, arbejder, leger, synger og går.",
      "Wir rechnen und zeichnen. — Vi regner og tegner.",
    ],
  ]);

  replacements += replaceInLesson(data, html, "kurssLesson4", [
    [
      '<div class="kurss-example">h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.</div>',
      "",
    ],
  ]);

  writeCourseLessons(LESSONS_PRIMARY, html, data);
  writeCourseLessons(LESSONS_WWW, html, data);

  console.log(JSON.stringify({ replacements, skipped: ["L0005: audit fragment absent from lesson3"] }, null, 2));
}

main();
