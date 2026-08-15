#!/usr/bin/env node
/**
 * Extract CS-DE Kurss Členy (articles) auditable units vs LV MASTER.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");
const { loadUiStrings } = require("./cs-kurs-ui-audit-extract");

const CS_UI = path.join(ROOT, "languages/cs/ui.js");
const WWW_CS_UI = path.join(ROOT, "www/languages/cs/ui.js");
const CS_LESSONS = path.join(ROOT, "data/cs/courseLessons.js");
const LV_LESSONS = path.join(ROOT, "data/courseLessons.js");
const WWW_CS_LESSONS = path.join(ROOT, "www/data/cs/courseLessons.js");

const UI_KEYS = ["kurss.articles", "kurss.articlesDesc", "kurss.articlesSubtitle"];

const ARTICLE_PEDAGOGY_RE =
  /artikul|článk|člen|určitý|neurčitý|nenoteiktais|noteiktais|bez členu|bez artikula|prievārds\s*\+\s*artikul|prepozic.*člen|dzimte|mužský rod|ženský rod|střední rod|dieser|jener|der\s*\/\s*die|ein\s*\/\s*eine|nominativ.*akuzativ|akuzativ.*člen|dativ.*člen|datív|dem |den |einem|einer|einen |eine |→.*\b(dem|den|der|des)\b/i;

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
  return parts ? parts.filter((p) => p.trim().length > 1).slice(0, 6).join(" | ") : "";
}

function isArticlePedagogy(text) {
  const t = String(text || "");
  if (!t.trim()) return false;
  if (ARTICLE_PEDAGOGY_RE.test(t)) return true;
  if (/\bd\.\.\./i.test(t) && /Fill|prompt/i.test(t)) return true;
  if (/Ieliec pareizo artikul/i.test(t)) return true;
  return false;
}

function isArticleFillCard(card) {
  if (!card) return false;
  const p = String(card.prompt || "");
  return /\bd\.\.\./i.test(p) || /artikul|člen/i.test(String(card.task || ""));
}

function makeCounters() {
  return { ui: 0, html: 0, l01: 0, l03: 0, l04: 0, l05: 0, l06: 0, l16: 0, xsec: 0 };
}

function nextAuditId(counters, prefix) {
  const keys = {
    "UI-ART": "ui",
    "ART-HTML": "html",
    "ART-L01": "l01",
    "ART-L03": "l03",
    "ART-L04": "l04",
    "ART-L05": "l05",
    "ART-L06": "l06",
    "ART-L16": "l16",
    "ART-XSEC": "xsec",
  };
  const k = keys[prefix] || "other";
  counters[k] = (counters[k] || 0) + 1;
  return `${prefix}-${String(counters[k]).padStart(3, "0")}`;
}

function parseArticlesStandaloneHtml(csHtml, lvHtml, counters, push) {
  const html = csHtml || "";
  const lv = lvHtml || "";

  const h3 = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  if (h3) {
    push({
      auditId: nextAuditId(counters, "ART-HTML"),
      unitId: "kurssArticlesLesson/h3",
      type: "heading",
      file: "data/cs/courseLessons.js",
      objectId: "kurssArticlesLesson",
      field: "COURSE_LESSON_HTML.h3",
      currentCs: stripTags(h3[1]),
      lvReference: stripTags(lv.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] || ""),
      deContext: "",
    });
  }

  const introMatch = html.match(
    /<div class="artikuli-info artikuli-intro-info">[\s\S]*?<div>([\s\S]*?)<\/div>/i,
  );
  if (introMatch) {
    push({
      auditId: nextAuditId(counters, "ART-HTML"),
      unitId: "kurssArticlesLesson/intro",
      type: "intro",
      file: "data/cs/courseLessons.js",
      objectId: "kurssArticlesLesson",
      field: "COURSE_LESSON_HTML.intro",
      currentCs: stripTags(introMatch[1]),
      lvReference: stripTags(
        lv.match(/<div class="artikuli-info artikuli-intro-info">[\s\S]*?<div>([\s\S]*?)<\/div>/i)?.[1] ||
          "",
      ),
      deContext: "",
    });
  }

  const blocks = [...html.matchAll(/<section class="artikuli-block">([\s\S]*?)<\/section>/gi)];
  const lvBlocks = [...lv.matchAll(/<section class="artikuli-block">([\s\S]*?)<\/section>/gi)];

  blocks.forEach((bm, bi) => {
    const block = bm[1];
    const lvBlock = lvBlocks[bi]?.[1] || "";
    const h4 = block.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
    const blockTitle = h4 ? stripTags(h4[1]) : `block[${bi}]`;

    if (h4) {
      push({
        auditId: nextAuditId(counters, "ART-HTML"),
        unitId: `kurssArticlesLesson/block[${bi}]/h4`,
        type: "block_heading",
        file: "data/cs/courseLessons.js",
        objectId: "kurssArticlesLesson",
        field: `block[${bi}].h4`,
        sectionTitle: blockTitle,
        currentCs: stripTags(h4[1]),
        lvReference: stripTags(lvBlock.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i)?.[1] || ""),
        deContext: "",
      });
    }

    const explain = block.match(/<p class="artikuli-explain">([\s\S]*?)<\/p>/i);
    if (explain) {
      push({
        auditId: nextAuditId(counters, "ART-HTML"),
        unitId: `kurssArticlesLesson/block[${bi}]/explain`,
        type: "explanation",
        file: "data/cs/courseLessons.js",
        objectId: "kurssArticlesLesson",
        field: `block[${bi}].explain`,
        sectionTitle: blockTitle,
        currentCs: stripTags(explain[1]),
        lvReference: stripTags(
          lvBlock.match(/<p class="artikuli-explain">([\s\S]*?)<\/p>/i)?.[1] || "",
        ),
        deContext: extractDeContext(explain[1]),
      });
    }

    const subtitles = [...block.matchAll(/<h5 class="artikuli-subtitle">([\s\S]*?)<\/h5>/gi)];
    const lvSubtitles = [...lvBlock.matchAll(/<h5 class="artikuli-subtitle">([\s\S]*?)<\/h5>/gi)];
    subtitles.forEach((sm, si) => {
      push({
        auditId: nextAuditId(counters, "ART-HTML"),
        unitId: `kurssArticlesLesson/block[${bi}]/subtitle[${si}]`,
        type: "subtitle",
        file: "data/cs/courseLessons.js",
        objectId: "kurssArticlesLesson",
        field: `block[${bi}].subtitle[${si}]`,
        sectionTitle: blockTitle,
        currentCs: stripTags(sm[1]),
        lvReference: stripTags(lvSubtitles[si]?.[1] || ""),
        deContext: "",
      });
    });

    const examples = [...block.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
    const lvExamples = [...lvBlock.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
    examples.forEach((em, ei) => {
      const text = stripTags(em[1]);
      push({
        auditId: nextAuditId(counters, "ART-HTML"),
        unitId: `kurssArticlesLesson/block[${bi}]/example[${ei}]`,
        type: "example",
        file: "data/cs/courseLessons.js",
        objectId: "kurssArticlesLesson",
        field: `block[${bi}].example[${ei}]`,
        sectionTitle: blockTitle,
        currentCs: text,
        lvReference: stripTags(lvExamples[ei]?.[1] || ""),
        deContext: extractDeContext(text),
      });
    });
  });

  const bottom = html.match(
    /<div class="artikuli-info artikuli-bottom-info">[\s\S]*?<div>([\s\S]*?)<\/div>/i,
  );
  if (bottom) {
    push({
      auditId: nextAuditId(counters, "ART-HTML"),
      unitId: "kurssArticlesLesson/bottom_info",
      type: "tip",
      file: "data/cs/courseLessons.js",
      objectId: "kurssArticlesLesson",
      field: "COURSE_LESSON_HTML.bottom_info",
      currentCs: stripTags(bottom[1]),
      lvReference: stripTags(
        lv.match(/<div class="artikuli-info artikuli-bottom-info">[\s\S]*?<div>([\s\S]*?)<\/div>/i)?.[1] ||
          "",
      ),
      deContext: "",
    });
  }
}

function parseLegacyGrammarAccordion(legacyHtml, lvLegacyHtml, lessonKey, prefix, counters, push) {
  const details = [...legacyHtml.matchAll(/<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi)];
  const lvDetails = [...(lvLegacyHtml || "").matchAll(/<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi)];
  const gram = details.find((d) => /<span>\s*Gramatika\s*<\/span>/i.test(d[1]));
  if (!gram) return;
  const lvGram = lvDetails.find((d) => /<span>\s*Gramatika\s*<\/span>/i.test(d[1]));
  const block = gram[1];
  const lvBlock = lvGram?.[1] || "";

  const sections = [...block.matchAll(/<section class="lesson1-block">([\s\S]*?)<\/section>/gi)];
  const lvSections = [...lvBlock.matchAll(/<section class="lesson1-block">([\s\S]*?)<\/section>/gi)];

  sections.forEach((sec, si) => {
    const secHtml = sec[1];
    const lvSecHtml = lvSections[si]?.[1] || "";
    const header = secHtml.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
    const secTitle = header ? stripTags(header[1]) : `section[${si}]`;

    if (!isArticlePedagogy(secTitle + " " + stripTags(secHtml))) return;

    if (header) {
      push({
        auditId: nextAuditId(counters, prefix),
        unitId: `${lessonKey}/legacyGramatika/section[${si}]/h4`,
        type: "legacy_grammar_heading",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `legacyGramatika.section[${si}].h4`,
        sectionTitle: secTitle,
        currentCs: stripTags(header[1]),
        lvReference: stripTags(lvSecHtml.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i)?.[1] || ""),
        deContext: "",
      });
    }

    const note = secHtml.match(/<div class="lesson1-grammar-note">([\s\S]*?)<\/div>/i);
    if (note) {
      push({
        auditId: nextAuditId(counters, prefix),
        unitId: `${lessonKey}/legacyGramatika/section[${si}]/note`,
        type: "legacy_grammar_note",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `legacyGramatika.section[${si}].note`,
        sectionTitle: secTitle,
        currentCs: stripTags(note[1]),
        lvReference: stripTags(
          lvSecHtml.match(/<div class="lesson1-grammar-note">([\s\S]*?)<\/div>/i)?.[1] || "",
        ),
        deContext: extractDeContext(note[1]),
      });
    }

    const subtitles = [...secHtml.matchAll(/<h5 class="lesson2-subtitle">([\s\S]*?)<\/h5>/gi)];
    const lvSubs = [...lvSecHtml.matchAll(/<h5 class="lesson2-subtitle">([\s\S]*?)<\/h5>/gi)];
    subtitles.forEach((st, sti) => {
      push({
        auditId: nextAuditId(counters, prefix),
        unitId: `${lessonKey}/legacyGramatika/section[${si}]/subtitle[${sti}]`,
        type: "legacy_grammar_subtitle",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `legacyGramatika.section[${si}].subtitle[${sti}]`,
        sectionTitle: secTitle,
        currentCs: stripTags(st[1]),
        lvReference: stripTags(lvSubs[sti]?.[1] || ""),
        deContext: "",
      });
    });

    const examples = [...secHtml.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
    const lvExamples = [...lvSecHtml.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/gi)];
    examples.forEach((em, ei) => {
      const text = stripTags(em[1]);
      push({
        auditId: nextAuditId(counters, prefix),
        unitId: `${lessonKey}/legacyGramatika/section[${si}]/example[${ei}]`,
        type: "legacy_grammar_example",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `legacyGramatika.section[${si}].example[${ei}]`,
        sectionTitle: secTitle,
        currentCs: text,
        lvReference: stripTags(lvExamples[ei]?.[1] || ""),
        deContext: extractDeContext(text),
      });
    });
  });
}

function pushGrammarObjectItem(
  item,
  lvItem,
  lessonKey,
  secIdx,
  itemIdx,
  prefix,
  counters,
  push,
  forceInclude,
) {
  const baseField = `sections[${secIdx}].items[${itemIdx}]`;
  if (item.heading) {
    push({
      auditId: nextAuditId(counters, prefix),
      unitId: `${lessonKey}/section[${secIdx}]/item[${itemIdx}]/heading`,
      type: "grammar_heading",
      file: "data/cs/courseLessons.js",
      objectId: lessonKey,
      field: `${baseField}.heading`,
      currentCs: item.heading,
      lvReference: lvItem?.heading || "",
      deContext: extractDeContext(item.text || ""),
    });
  }
  if (item.text) {
    push({
      auditId: nextAuditId(counters, prefix),
      unitId: `${lessonKey}/section[${secIdx}]/item[${itemIdx}]/text`,
      type: "grammar_text",
      file: "data/cs/courseLessons.js",
      objectId: lessonKey,
      field: `${baseField}.text`,
      currentCs: item.text,
      lvReference: lvItem?.text || "",
      deContext: extractDeContext(item.text),
    });
  }
  if (item.task) {
    push({
      auditId: nextAuditId(counters, prefix),
      unitId: `${lessonKey}/section[${secIdx}]/item[${itemIdx}]/task`,
      type: "exercise_task",
      file: "data/cs/courseLessons.js",
      objectId: lessonKey,
      field: `${baseField}.task`,
      currentCs: item.task,
      lvReference: lvItem?.task || "",
      deContext: extractDeContext(item.examples?.join(" ") || ""),
    });
  }
  if (Array.isArray(item.examples)) {
    item.examples.forEach((ex, ei) => {
      push({
        auditId: nextAuditId(counters, prefix),
        unitId: `${lessonKey}/section[${secIdx}]/item[${itemIdx}]/example[${ei}]`,
        type: "grammar_example",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `${baseField}.examples[${ei}]`,
        currentCs: ex,
        lvReference: lvItem?.examples?.[ei] || "",
        deContext: extractDeContext(ex),
      });
    });
  }
  if (Array.isArray(item.table)) {
    item.table.forEach((row, ri) => {
      const lvRow = lvItem?.table?.[ri];
      row.forEach((cell, ci) => {
        if (!String(cell || "").trim()) return;
        push({
          auditId: nextAuditId(counters, prefix),
          unitId: `${lessonKey}/section[${secIdx}]/item[${itemIdx}]/table[${ri}][${ci}]`,
          type: "grammar_table_cell",
          file: "data/cs/courseLessons.js",
          objectId: lessonKey,
          field: `${baseField}.table[${ri}][${ci}]`,
          currentCs: String(cell),
          lvReference: lvRow?.[ci] ? String(lvRow[ci]) : "",
          deContext: extractDeContext(String(cell)),
        });
      });
    });
  }
}

function extractStructuredLesson(
  lessonKey,
  csLesson,
  lvLesson,
  prefix,
  counters,
  push,
  { fullLesson = false, crossSection = false } = {},
) {
  if (csLesson?.title) {
    push({
      auditId: nextAuditId(counters, prefix),
      unitId: `${lessonKey}/title`,
      type: "metadata",
      file: "data/cs/courseLessons.js",
      objectId: lessonKey,
      field: "title",
      currentCs: csLesson.title,
      lvReference: lvLesson?.title || "",
      deContext: csLesson.id || lessonKey,
    });
  }
  if (csLesson?.subtitle) {
    push({
      auditId: nextAuditId(counters, prefix),
      unitId: `${lessonKey}/subtitle`,
      type: "metadata",
      file: "data/cs/courseLessons.js",
      objectId: lessonKey,
      field: "subtitle",
      currentCs: csLesson.subtitle,
      lvReference: lvLesson?.subtitle || "",
      deContext: csLesson.id || lessonKey,
    });
  }
  if (csLesson?.intro) {
    push({
      auditId: nextAuditId(counters, prefix),
      unitId: `${lessonKey}/intro`,
      type: "metadata",
      file: "data/cs/courseLessons.js",
      objectId: lessonKey,
      field: "intro",
      currentCs: csLesson.intro,
      lvReference: lvLesson?.intro || "",
      deContext: csLesson.id || lessonKey,
    });
  }

  const csSections = csLesson?.sections || [];
  const lvSections = lvLesson?.sections || [];

  csSections.forEach((csS, si) => {
    const lvS = lvSections[si];
    const secTitle = csS.title || "";

    if (csS.title) {
      const includeTitle = fullLesson || (crossSection && isArticlePedagogy(csS.title));
      if (includeTitle) {
        push({
          auditId: nextAuditId(counters, prefix),
          unitId: `${lessonKey}/section[${si}]/title`,
          type: "section_title",
          file: "data/cs/courseLessons.js",
          objectId: lessonKey,
          field: `sections[${si}].title`,
          sectionTitle: csS.title,
          currentCs: csS.title,
          lvReference: lvS?.title || "",
          deContext: lessonKey,
        });
      }
    }

    if (csS.description && (fullLesson || isArticlePedagogy(csS.description))) {
      push({
        auditId: nextAuditId(counters, prefix),
        unitId: `${lessonKey}/section[${si}]/description`,
        type: "section_description",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: `sections[${si}].description`,
        sectionTitle: secTitle,
        currentCs: csS.description,
        lvReference: lvS?.description || "",
        deContext: lessonKey,
      });
    }

    (csS.items || []).forEach((item, ii) => {
      const lvItem = lvS?.items?.[ii];
      if (typeof item === "string") {
        if (!fullLesson && crossSection && !isArticlePedagogy(item)) return;
        if (fullLesson || crossSection) {
          push({
            auditId: nextAuditId(counters, prefix),
            unitId: `${lessonKey}/section[${si}]/item[${ii}]`,
            type: "section_item",
            file: "data/cs/courseLessons.js",
            objectId: lessonKey,
            field: `sections[${si}].items[${ii}]`,
            sectionTitle: secTitle,
            currentCs: item,
            lvReference: lvItem || "",
            deContext: extractDeContext(item),
          });
        }
        return;
      }
      if (typeof item === "object" && item !== null) {
        const blob = JSON.stringify(item);
        if (fullLesson || isArticlePedagogy(blob)) {
          pushGrammarObjectItem(item, lvItem, lessonKey, si, ii, prefix, counters, push, fullLesson);
        }
      }
    });

    (csS.cards || []).forEach((card, ci) => {
      const lvCard = lvS?.cards?.[ci];
      if (!fullLesson && crossSection && !isArticleFillCard(card) && !isArticlePedagogy(JSON.stringify(card))) {
        return;
      }
      if (card.prompt) {
        push({
          auditId: nextAuditId(counters, prefix),
          unitId: `${lessonKey}/section[${si}]/card[${ci}]/prompt`,
          type: "exercise_prompt",
          file: "data/cs/courseLessons.js",
          objectId: lessonKey,
          field: `sections[${si}].cards[${ci}].prompt`,
          sectionTitle: secTitle,
          currentCs: card.prompt,
          lvReference: lvCard?.prompt || "",
          deContext: card.answer || "",
        });
      }
      if (card.task) {
        push({
          auditId: nextAuditId(counters, prefix),
          unitId: `${lessonKey}/section[${si}]/card[${ci}]/task`,
          type: "exercise_task",
          file: "data/cs/courseLessons.js",
          objectId: lessonKey,
          field: `sections[${si}].cards[${ci}].task`,
          sectionTitle: secTitle,
          currentCs: card.task,
          lvReference: lvCard?.task || "",
          deContext: card.answer || "",
        });
      }
      if (card.task2) {
        push({
          auditId: nextAuditId(counters, prefix),
          unitId: `${lessonKey}/section[${si}]/card[${ci}]/task2`,
          type: "exercise_task",
          file: "data/cs/courseLessons.js",
          objectId: lessonKey,
          field: `sections[${si}].cards[${ci}].task2`,
          sectionTitle: secTitle,
          currentCs: card.task2,
          lvReference: lvCard?.task2 || "",
          deContext: card.answer2 || card.answer || "",
        });
      }
      if (card.answer && crossSection && isArticleFillCard(card)) {
        push({
          auditId: nextAuditId(counters, prefix),
          unitId: `${lessonKey}/section[${si}]/card[${ci}]/answer`,
          type: "exercise_answer_de",
          file: "data/cs/courseLessons.js",
          objectId: lessonKey,
          field: `sections[${si}].cards[${ci}].answer`,
          sectionTitle: secTitle,
          currentCs: "(DE answer — READ-ONLY context)",
          lvReference: lvCard?.answer || "",
          deContext: card.answer,
        });
      }
      if (card.type === "Fill" || (card.prompt && card.answer)) {
        if (card.answer && fullLesson) {
          push({
            auditId: nextAuditId(counters, prefix),
            unitId: `${lessonKey}/section[${si}]/fill[${ci}]/answer`,
            type: "exercise_answer_de",
            file: "data/cs/courseLessons.js",
            objectId: lessonKey,
            field: `sections[${si}].cards[${ci}].answer`,
            sectionTitle: secTitle,
            currentCs: "(DE answer — READ-ONLY context)",
            lvReference: lvCard?.answer || "",
            deContext: card.answer,
          });
        }
      }
    });
  });
}

function extractArticleUnits() {
  const csWin = loadWindow(CS_LESSONS);
  const lvWin = loadWindow(LV_LESSONS);
  const csUi = loadUiStrings(CS_UI);
  const lvUi = loadUiStrings(path.join(ROOT, "languages/lv/ui.js"));

  const csHtml = csWin.COURSE_LESSON_HTML || {};
  const lvHtml = lvWin.COURSE_LESSON_HTML || {};
  const csData = csWin.COURSE_LESSON_DATA || {};
  const lvData = lvWin.COURSE_LESSON_DATA || {};

  const units = [];
  const counters = makeCounters();
  let index = 0;

  function push(unit) {
    unit.index = index++;
    units.push(unit);
  }

  for (const key of UI_KEYS) {
    push({
      auditId: nextAuditId(counters, "UI-ART"),
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

  parseArticlesStandaloneHtml(
    csHtml.kurssArticlesLesson,
    lvHtml.kurssArticlesLesson,
    counters,
    push,
  );

  const l1 = csData.kurssLesson1;
  const lv1 = lvData.kurssLesson1 || {};
  if (l1?.title) {
    push({
      auditId: nextAuditId(counters, "ART-L01"),
      unitId: "kurssLesson1/title",
      type: "metadata",
      file: "data/cs/courseLessons.js",
      objectId: "kurssLesson1",
      field: "title",
      currentCs: l1.title,
      lvReference: lv1.title || "",
      deContext: "Lesson1",
    });
  }
  if (l1?.subtitle) {
    push({
      auditId: nextAuditId(counters, "ART-L01"),
      unitId: "kurssLesson1/subtitle",
      type: "metadata",
      file: "data/cs/courseLessons.js",
      objectId: "kurssLesson1",
      field: "subtitle",
      currentCs: l1.subtitle,
      lvReference: lv1.subtitle || "",
      deContext: "Lesson1",
    });
  }

  const legacyMap = [
    ["kurssLesson3", "ART-L03"],
    ["kurssLesson4", "ART-L04"],
    ["kurssLesson5", "ART-L05"],
    ["kurssLesson6", "ART-L06"],
  ];
  for (const [lessonKey, prefix] of legacyMap) {
    const csLesson = csData[lessonKey];
    const lvLesson = lvData[lessonKey] || {};
    if (csLesson?.subtitle) {
      push({
        auditId: nextAuditId(counters, prefix),
        unitId: `${lessonKey}/subtitle`,
        type: "metadata",
        file: "data/cs/courseLessons.js",
        objectId: lessonKey,
        field: "subtitle",
        currentCs: csLesson.subtitle,
        lvReference: lvLesson.subtitle || "",
        deContext: lessonKey,
      });
    }
    if (csLesson?.legacyHtml) {
      parseLegacyGrammarAccordion(
        csLesson.legacyHtml,
        lvLesson.legacyHtml || csHtml[lessonKey] || "",
        lessonKey,
        prefix,
        counters,
        push,
      );
    }
  }

  extractStructuredLesson(
    "kurssLesson16",
    csData.kurssLesson16,
    lvData.kurssLesson16 || {},
    "ART-L16",
    counters,
    push,
    { fullLesson: true },
  );

  for (let n = 8; n <= 21; n++) {
    if (n === 16) continue;
    const lessonKey = `kurssLesson${n}`;
    const csLesson = csData[lessonKey];
    const lvLesson = lvData[lessonKey];
    if (!csLesson?.sections) continue;
    extractStructuredLesson(
      lessonKey,
      csLesson,
      lvLesson || {},
      "ART-XSEC",
      counters,
      push,
      { crossSection: true },
    );
  }

  const primaryWwwUi = fs.readFileSync(CS_UI, "utf8") === fs.readFileSync(WWW_CS_UI, "utf8");
  const primaryWwwLessons =
    fs.readFileSync(CS_LESSONS, "utf8") === fs.readFileSync(WWW_CS_LESSONS, "utf8");

  const byType = {};
  const byPrefix = {};
  for (const u of units) {
    byType[u.type] = (byType[u.type] || 0) + 1;
    const p = (u.auditId || "").split("-").slice(0, 2).join("-");
    byPrefix[p] = (byPrefix[p] || 0) + 1;
  }

  return {
    units,
    meta: {
      totalUnits: units.length,
      byType,
      byPrefix,
      uiKeys: UI_KEYS.length,
      standaloneHtml: units.filter((u) => u.objectId === "kurssArticlesLesson").length,
      lesson16Units: units.filter((u) => u.objectId === "kurssLesson16").length,
      crossSectionUnits: units.filter((u) => (u.auditId || "").startsWith("ART-XSEC")).length,
      primaryWwwUi,
      primaryWwwLessons,
      idCounters: counters,
    },
    csHtml,
    lvHtml,
    csData,
    lvData,
  };
}

module.exports = {
  extractArticleUnits,
  CS_UI,
  WWW_CS_UI,
  CS_LESSONS,
  WWW_CS_LESSONS,
  UI_KEYS,
  isArticlePedagogy,
};

if (require.main === module) {
  const { units, meta } = extractArticleUnits();
  console.log(JSON.stringify(meta, null, 2));
  console.log("units:", units.length);
}
