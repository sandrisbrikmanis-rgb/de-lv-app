#!/usr/bin/env node
"use strict";
/**
 * Extract ES Kurss Pronunciación / Consonantes auditable units (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");

const ES_UI = path.join(ROOT, "languages", "es", "ui.js");
const WWW_ES_UI = path.join(ROOT, "www", "languages", "es", "ui.js");
const ES_LESSONS = path.join(ROOT, "data", "es", "courseLessons.js");
const LV_LESSONS = path.join(ROOT, "data", "courseLessons.js");
const WWW_ES_LESSONS = path.join(ROOT, "www", "data", "es", "courseLessons.js");

const UI_KEYS = [
  "kurss.pronunciation",
  "kurss.pronunciationDesc",
  "kurss.pronunciationSubtitle",
  "kurss.vowelsTitle",
  "kurss.vowelsDesc",
  "kurss.vowelsSubtitle",
  "kurss.consonantsTitle",
  "kurss.consonantsDesc",
  "kurss.consonantsSubtitle",
];

function loadWindow(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function loadUiStrings(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function getByPath(obj, dotPath) {
  return dotPath.split(".").reduce((acc, part) => acc?.[part], obj);
}

function decodeHtmlEntities(s) {
  return String(s || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");
}

function stripTags(html) {
  return decodeHtmlEntities(
    String(html || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function extractDeContext(text) {
  const parts = String(text).match(/[A-Za-zÄÖÜß][A-Za-zÄÖÜßäöüß\s,!.?\"'„"–\-()\/«»]*/g);
  return parts ? parts.filter((p) => p.trim().length > 1).slice(0, 5).join(" | ") : "";
}

function parseStaticLessonHtml(html, lessonKey, lvHtml, file) {
  const units = [];
  const h3 = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  if (h3) {
    units.push({
      unitId: `${lessonKey}/h3`,
      type: "heading",
      file,
      objectId: lessonKey,
      field: "COURSE_LESSON_HTML.h3",
      section: "heading",
      currentEs: stripTags(h3[1]),
      lvReference: stripTags((lvHtml || "").match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] || ""),
      deContext: "",
    });
  }
  const intro = html.match(/<p class="kurss-lesson-intro"[^>]*>([\s\S]*?)<\/p>/i);
  if (intro) {
    units.push({
      unitId: `${lessonKey}/intro`,
      type: "intro",
      file,
      objectId: lessonKey,
      field: "COURSE_LESSON_HTML.intro",
      section: "intro",
      currentEs: stripTags(intro[1]),
      lvReference: stripTags(
        (lvHtml || "").match(/<p class="kurss-lesson-intro"[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "",
      ),
      deContext: "",
    });
  }

  const sectionRe = /<section class="kurss-lesson-section">([\s\S]*?)<\/section>/gi;
  let si = 0;
  let sm;
  const lvSections = lvHtml
    ? [...lvHtml.matchAll(/<section class="kurss-lesson-section">([\s\S]*?)<\/section>/gi)]
    : [];
  while ((sm = sectionRe.exec(html)) !== null) {
    const block = sm[1];
    const lvBlock = lvSections[si]?.[1] || "";
    const h4 = block.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
    const sectionTitle = h4 ? stripTags(h4[1]) : `section[${si}]`;
    if (h4) {
      units.push({
        unitId: `${lessonKey}/section[${si}]/h4`,
        type: "section_heading",
        file,
        objectId: lessonKey,
        field: `COURSE_LESSON_HTML.${lessonKey}/section[${si}]/h4`,
        section: sectionTitle,
        currentEs: stripTags(h4[1]),
        lvReference: stripTags(lvBlock.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i)?.[1] || ""),
        deContext: "",
      });
    }
    const ps = [...block.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
    ps.forEach((pm, pi) => {
      const text = stripTags(pm[1]);
      if (!text || pm[0].includes("kurss-lesson-intro")) return;
      const lvPs = [...lvBlock.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
      units.push({
        unitId: `${lessonKey}/section[${si}]/p[${pi}]`,
        type: "explanation",
        file,
        objectId: lessonKey,
        field: `COURSE_LESSON_HTML.${lessonKey}/section[${si}]/p[${pi}]`,
        section: sectionTitle,
        currentEs: text,
        lvReference: stripTags(lvPs[pi]?.[1] || ""),
        deContext: extractDeContext(text),
      });
    });
    const lis = [...block.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
    lis.forEach((lm, li) => {
      const text = stripTags(lm[1]);
      const lvLis = [...lvBlock.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
      units.push({
        unitId: `${lessonKey}/section[${si}]/li[${li}]`,
        type: "summary_item",
        file,
        objectId: lessonKey,
        field: `COURSE_LESSON_HTML.${lessonKey}/section[${si}]/li[${li}]`,
        section: sectionTitle,
        currentEs: text,
        lvReference: stripTags(lvLis[li]?.[1] || ""),
        deContext: extractDeContext(text),
      });
    });
    const examples = [...block.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
    examples.forEach((em, ei) => {
      const text = stripTags(em[1]);
      const lvExamples = [...lvBlock.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
      units.push({
        unitId: `${lessonKey}/section[${si}]/example[${ei}]`,
        type: "example_card",
        file,
        objectId: lessonKey,
        field: `COURSE_LESSON_HTML.${lessonKey}/section[${si}]/example[${ei}]`,
        section: sectionTitle,
        currentEs: text,
        lvReference: stripTags(lvExamples[ei]?.[1] || ""),
        deContext: extractDeContext(text),
      });
    });
    si += 1;
  }
  return units;
}

function extractPronunciationUnits() {
  const esWin = loadWindow(ES_LESSONS);
  const lvWin = loadWindow(LV_LESSONS);
  const esUi = loadUiStrings(ES_UI);
  const lvUi = loadUiStrings(path.join(ROOT, "languages", "lv", "ui.js"));

  const esHtml = esWin.COURSE_LESSON_HTML || {};
  const lvHtml = lvWin.COURSE_LESSON_HTML || {};

  const units = [];
  let index = 0;

  function push(unitOrUnits) {
    if (!unitOrUnits) return;
    if (Array.isArray(unitOrUnits)) {
      for (const unit of unitOrUnits) push(unit);
      return;
    }
    unitOrUnits.index = index++;
    units.push(unitOrUnits);
  }

  for (const key of UI_KEYS) {
    push({
      unitId: `ui/${key}`,
      type: "ui",
      file: "languages/es/ui.js",
      objectId: key,
      field: key,
      section: "ui",
      currentEs: getByPath(esUi, key) || "",
      lvReference: getByPath(lvUi, key) || "",
      deContext: "",
    });
  }

  push(
    parseStaticLessonHtml(
      esHtml.kurssPronunciationLesson || "",
      "kurssPronunciationLesson",
      lvHtml.kurssPronunciationLesson || "",
      "data/es/courseLessons.js",
    ),
  );
  push(
    parseStaticLessonHtml(
      esHtml.kurssConsonantsLesson || "",
      "kurssConsonantsLesson",
      lvHtml.kurssConsonantsLesson || "",
      "data/es/courseLessons.js",
    ),
  );

  const primaryWwwUi = fs.readFileSync(ES_UI, "utf8") === fs.readFileSync(WWW_ES_UI, "utf8");
  const primaryWwwLessons =
    fs.readFileSync(ES_LESSONS, "utf8") === fs.readFileSync(WWW_ES_LESSONS, "utf8");

  const byType = {};
  for (const u of units) {
    byType[u.type] = (byType[u.type] || 0) + 1;
  }

  return {
    units,
    meta: {
      totalUnits: units.length,
      byType,
      uiKeys: UI_KEYS.length,
      vowelsLesson: units.filter((u) => u.objectId === "kurssPronunciationLesson").length,
      consonantsLesson: units.filter((u) => u.objectId === "kurssConsonantsLesson").length,
      exampleCards: units.filter((u) => u.type === "example_card").length,
      primaryWwwUi,
      primaryWwwLessons,
    },
    esHtml,
    lvHtml,
  };
}

module.exports = {
  extractPronunciationUnits,
  ES_UI,
  WWW_ES_UI,
  ES_LESSONS,
  WWW_ES_LESSONS,
  UI_KEYS,
};

if (require.main === module) {
  const { units, meta } = extractPronunciationUnits();
  console.log(JSON.stringify(meta, null, 2));
  console.log("units:", units.length);
}
