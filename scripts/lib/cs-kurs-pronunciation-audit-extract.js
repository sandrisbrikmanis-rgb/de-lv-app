#!/usr/bin/env node
/**
 * Extract all CS-DE Kurss Výslovnost (pronunciation) auditable units vs LV MASTER.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");
const { loadUiStrings } = require("./cs-kurs-ui-audit-extract");

const CS_UI = path.join(ROOT, "languages", "cs", "ui.js");
const WWW_CS_UI = path.join(ROOT, "www", "languages", "cs", "ui.js");
const CS_LESSONS = path.join(ROOT, "data", "cs", "courseLessons.js");
const LV_LESSONS = path.join(ROOT, "data", "courseLessons.js");
const WWW_CS_LESSONS = path.join(ROOT, "www", "data", "cs", "courseLessons.js");

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
  const parts = String(text).match(/[A-Za-zÄÖÜß][A-Za-zÄÖÜßäöüß\s,!.?\"'„“–\-()\/]*/g);
  return parts ? parts.filter((p) => p.trim().length > 1).slice(0, 5).join(" | ") : "";
}

function parseStaticLessonHtml(html, lessonKey, lvHtml) {
  const units = [];
  const h3 = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  if (h3) {
    units.push({
      unitId: `${lessonKey}/h3`,
      type: "heading",
      file: "data/cs/courseLessons.js",
      objectId: lessonKey,
      field: "COURSE_LESSON_HTML.h3",
      currentCs: stripTags(h3[1]),
      lvReference: stripTags((lvHtml || "").match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] || ""),
      deContext: "",
    });
  }
  const intro = html.match(/<p class="kurss-lesson-intro"[^>]*>([\s\S]*?)<\/p>/i);
  if (intro) {
    units.push({
      unitId: `${lessonKey}/intro`,
      type: "intro",
      file: "data/cs/courseLessons.js",
      objectId: lessonKey,
      field: "COURSE_LESSON_HTML.intro",
      currentCs: stripTags(intro[1]),
      lvReference: stripTags(
        (lvHtml || "").match(/<p class="kurss-lesson-intro"[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "",
      ),
      deContext: "",
    });
  }

  const sectionRe = /<section class="kurss-lesson-section">([\s\S]*?)<\/section>/gi;
  let si = 0;
  let sm;
  const lvSections = lvHtml ? [...lvHtml.matchAll(/<section class="kurss-lesson-section">([\s\S]*?)<\/section>/gi)] : [];
  while ((sm = sectionRe.exec(html)) !== null) {
    const block = sm[1];
    const lvBlock = lvSections[si]?.[1] || "";
    const h4 = block.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
    const sectionTitle = h4 ? stripTags(h4[1]) : `section[${si}]`;
    if (h4) {
      units.push({
        unitId: `${lessonKey}/section[${si}]/h4`,
        type: "section_heading",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `section[${si}].h4`,
        sectionTitle,
        currentCs: stripTags(h4[1]),
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
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `section[${si}].p[${pi}]`,
        sectionTitle,
        currentCs: text,
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
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `section[${si}].li[${li}]`,
        sectionTitle,
        currentCs: text,
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
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `section[${si}].example[${ei}]`,
        sectionTitle,
        currentCs: text,
        lvReference: stripTags(lvExamples[ei]?.[1] || ""),
        deContext: extractDeContext(text),
      });
    });
    si += 1;
  }
  return units;
}

function parseLegacyPronunciationAccordion(legacyHtml, lessonKey, lvLegacyHtml) {
  const units = [];
  const detailsRe = /<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi;
  let dm;
  let lvBlock = "";
  const lvDetails = [...(lvLegacyHtml || "").matchAll(/<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi)];
  while ((dm = detailsRe.exec(legacyHtml)) !== null) {
    const block = dm[1];
    if (!/<span>\s*Výslovnost\s*<\/span>/i.test(block)) continue;
    const lvMatch = lvDetails.find((ld) => /<span>\s*Izruna\s*<\/span>/i.test(ld[1]));
    lvBlock = lvMatch?.[1] || "";
    const examples = [...block.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
    const lvExamples = [...lvBlock.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
    examples.forEach((em, ei) => {
      const text = stripTags(em[1]);
      units.push({
        unitId: `${lessonKey}/legacyVyslovnost/example[${ei}]`,
        type: "lesson_legacy_card",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `legacyHtml.Výslovnost.example[${ei}]`,
        sectionTitle: "Výslovnost",
        currentCs: text,
        lvReference: stripTags(lvExamples[ei]?.[1] || ""),
        deContext: extractDeContext(text),
      });
    });
  }
  return units;
}

function extractPronunciationUnits() {
  const csWin = loadWindow(CS_LESSONS);
  const lvWin = loadWindow(LV_LESSONS);
  const csUi = loadUiStrings(CS_UI);
  const lvUi = loadUiStrings(path.join(ROOT, "languages", "lv", "ui.js"));

  const csHtml = csWin.COURSE_LESSON_HTML || {};
  const lvHtml = lvWin.COURSE_LESSON_HTML || {};
  const csData = csWin.COURSE_LESSON_DATA || {};
  const lvData = lvWin.COURSE_LESSON_DATA || {};

  const units = [];
  let index = 0;

  function push(unitOrUnits) {
    if (unitOrUnits === undefined) return;
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
      file: "languages/cs/ui.js",
      objectId: key,
      field: key,
      currentCs: getByPath(csUi, key) || "",
      lvReference: getByPath(lvUi, key) || "",
      deContext: "",
    });
  }

  push(parseStaticLessonHtml(
    csHtml.kurssPronunciationLesson || "",
    "kurssPronunciationLesson",
    lvHtml.kurssPronunciationLesson || "",
  ));
  push(parseStaticLessonHtml(
    csHtml.kurssConsonantsLesson || "",
    "kurssConsonantsLesson",
    lvHtml.kurssConsonantsLesson || "",
  ));

  for (const [lessonKey, csLesson] of Object.entries(csData)) {
    const lvLesson = lvData[lessonKey] || {};
    if (csLesson.legacyHtml) {
      push(parseLegacyPronunciationAccordion(
        csLesson.legacyHtml,
        lessonKey,
        lvLesson.legacyHtml || "",
      ));
    }
    const csSections = csLesson.sections || [];
    const lvSections = lvLesson.sections || [];
    csSections.forEach((csS, si) => {
      if (csS.title !== "Výslovnost") return;
      const lvS = lvSections[si];
      push({
        unitId: `${lessonKey}/section[${si}]/title`,
        type: "section_title",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `sections[${si}].title`,
        sectionTitle: csS.title,
        currentCs: csS.title,
        lvReference: lvS?.title || "Izruna",
        deContext: lessonKey,
      });
      (csS.items || []).forEach((item, ii) => {
        const lvItem = lvS?.items?.[ii];
        push({
          unitId: `${lessonKey}/section[${si}]/item[${ii}]`,
          type: "lesson_section_item",
          file: "data/cs/courseLessons.js",
          objectId: lessonKey,
          field: `sections[${si}].items[${ii}]`,
          sectionTitle: "Výslovnost",
          currentCs: item,
          lvReference: lvItem || "",
          deContext: extractDeContext(item),
        });
      });
    });
  }

  const primaryWwwUi = fs.readFileSync(CS_UI, "utf8") === fs.readFileSync(WWW_CS_UI, "utf8");
  const primaryWwwLessons =
    fs.readFileSync(CS_LESSONS, "utf8") === fs.readFileSync(WWW_CS_LESSONS, "utf8");

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
      lessonLegacyCards: units.filter((u) => u.type === "lesson_legacy_card").length,
      lessonSectionItems: units.filter((u) => u.type === "lesson_section_item").length,
      exampleCards: units.filter((u) => u.type === "example_card").length,
      primaryWwwUi,
      primaryWwwLessons,
    },
    csHtml,
    lvHtml,
    csData,
    lvData,
  };
}

module.exports = {
  extractPronunciationUnits,
  CS_UI,
  WWW_CS_UI,
  CS_LESSONS,
  WWW_CS_LESSONS,
  UI_KEYS,
};

if (require.main === module) {
  const { units, meta } = extractPronunciationUnits();
  console.log(JSON.stringify(meta, null, 2));
  console.log("units:", units.length);
}
