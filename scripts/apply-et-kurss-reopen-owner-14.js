#!/usr/bin/env node
"use strict";
/**
 * COPY-ONLY apply: ET-KURSS-REOPEN-OWNER-001..014
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LESSONS = [
  path.join(ROOT, "data/et/courseLessons.js"),
  path.join(ROOT, "www/data/et/courseLessons.js"),
];

const ROWS = [
  {
    id: "ET-KURSS-REOPEN-OWNER-001",
    lesson: "kurssLesson14",
    sectionTitle: "Grammatika",
    itemHeading: "Wollen",
    exampleIndex: 0,
    current: "Ich will vorwärts kommen. — Es gribu tikt uz priekšu.",
    new: "Ich will vorwärts kommen. — Ma tahan edasi jõuda.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-002",
    lesson: "kurssLesson14",
    sectionTitle: "Grammatika",
    itemHeading: "Mögen",
    exampleIndex: 0,
    current: "Ich mag die Suppe nicht essen. — Es negribu zupu ēst.",
    new: "Ich mag die Suppe nicht essen. — Ma ei taha suppi süüa.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-003",
    lesson: "kurssLesson15",
    sectionTitle: "Gramatika",
    itemHeading: "entzweischneiden",
    exampleIndex: 0,
    current: "Ich schneide den Apfel entzwei. — Es pārgriežu ābolu uz pusēm.",
    new: "Ich schneide den Apfel entzwei. — Ma lõikan õuna pooleks.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-004",
    lesson: "kurssLesson16",
    sectionTitle: "Hääldus",
    itemIndex: 2,
    current: "die Wälder: ä izrunā kā šaurais īsais e.",
    new: "die Wälder: ä hääldatakse lühikese e-häälikuna.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-005",
    lesson: "kurssLesson16",
    sectionTitle: "Hääldus",
    itemIndex: 3,
    current: "die Bäuerinnen: äu izrunā kā oi.",
    new: "die Bäuerinnen: äu hääldatakse nagu oi.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-006",
    lesson: "kurssLesson18",
    sectionTitle: "Gramatika",
    itemHeading: "Akkusativ: wohin?",
    exampleIndex: 0,
    current: "Ich gehe an den Tisch. — Es eju pie galda.",
    new: "Ich gehe an den Tisch. — Ma lähen laua juurde.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-007",
    lesson: "kurssLesson18",
    sectionTitle: "Gramatika",
    itemHeading: "Akkusativ: wohin?",
    exampleIndex: 1,
    current: "Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.",
    new: "Ich stelle den Korb auf die Bank. — Ma panen korvi pingile.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-008",
    lesson: "kurssLesson18",
    sectionTitle: "Gramatika",
    itemHeading: "Akkusativ: wohin?",
    exampleIndex: 2,
    current: "Ich lege die Äpfel in das Körbchen. — Es lieku ābolus groziņā.",
    new: "Ich lege die Äpfel in das Körbchen. — Ma panen õunad korvikesse.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-009",
    lesson: "kurssLesson18",
    sectionTitle: "Gramatika",
    itemHeading: "Akkusativ: wohin?",
    exampleIndex: 3,
    current: "Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.",
    new: "Ich gieße das Wasser in den Krug. — Ma valan vee kannu.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-010",
    lesson: "kurssLesson18",
    sectionTitle: "Gramatika",
    itemHeading: "Dativ: wo?",
    exampleIndex: 0,
    current: "Ich stehe an dem Tische. — Es stāvu pie galda.",
    new: "Ich stehe an dem Tische. — Ma seisan laua juures.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-011",
    lesson: "kurssLesson18",
    sectionTitle: "Gramatika",
    itemHeading: "Dativ: wo?",
    exampleIndex: 1,
    current: "Der Korb steht auf der Bank. — Grozs stāv uz sola.",
    new: "Der Korb steht auf der Bank. — Korv seisab pingil.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-012",
    lesson: "kurssLesson18",
    sectionTitle: "Gramatika",
    itemHeading: "Dativ: wo?",
    exampleIndex: 2,
    current: "Die Äpfel sind in dem Körbchen. — Āboli ir groziņā.",
    new: "Die Äpfel sind in dem Körbchen. — Õunad on korvikeses.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-013",
    lesson: "kurssLesson18",
    sectionTitle: "Gramatika",
    itemHeading: "Dativ: wo?",
    exampleIndex: 3,
    current: "Das Wasser ist in dem Kruge. — Ūdens ir krūzē.",
    new: "Das Wasser ist in dem Kruge. — Vesi on kannus.",
  },
  {
    id: "ET-KURSS-REOPEN-OWNER-014",
    lesson: "kurssLesson18",
    sectionTitle: "Gramatika",
    itemHeading: "Ainenimetused",
    exampleIndex: 0,
    current: "Ich trinke Milch. — Es dzeru pienu.",
    new: "Ich trinke Milch. — Ma joon piima.",
  },
];

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

  if (row.itemIndex !== undefined) {
    const actual = section.items?.[row.itemIndex];
    if (typeof actual !== "string") return { status: "MISSING_PATH", detail: "item index" };
    if (actual !== row.current) return { status: "CURRENT_VALUE_MISMATCH", actual };
    section.items[row.itemIndex] = row.new;
    return { status: "APPLIED", previous: actual };
  }

  const item = findItemWithExample(section, row.itemHeading, row.exampleIndex, row.current);
  if (!item?.examples) {
    const first = section.items?.find((i) => i?.heading === row.itemHeading);
    const actual = first?.examples?.[row.exampleIndex];
    if (actual && actual !== row.current) return { status: "CURRENT_VALUE_MISMATCH", actual };
    return { status: "MISSING_PATH", detail: "item/examples" };
  }
  const actual = item.examples[row.exampleIndex];
  item.examples[row.exampleIndex] = row.new;
  return { status: "APPLIED", previous: actual };
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
  const primary = LESSONS[0];
  const { html, data } = loadCourses(primary);
  const log = [];

  for (const row of ROWS) {
    const result = applyRow(data, row);
    log.push({ id: row.id, ...result, current: row.current, new: row.new });
  }

  const applied = log.filter((r) => r.status === "APPLIED").length;
  const mismatch = log.filter((r) => r.status === "CURRENT_VALUE_MISMATCH");
  const missing = log.filter((r) => r.status === "MISSING_PATH");

  if (applied === ROWS.length) {
    for (const filePath of LESSONS) {
      writeCourseLessons(filePath, html, data);
    }
  }

  const out = {
    generatedAt: new Date().toISOString(),
    requested: ROWS.length,
    applied,
    verified: applied,
    currentValueMismatch: mismatch.length,
    missingPath: missing.length,
    log,
  };
  fs.writeFileSync(
    path.join(ROOT, "reports/temp/et-kurss-reopen-owner-14-apply-log.json"),
    JSON.stringify(out, null, 2),
  );
  console.log(JSON.stringify(out, null, 2));
  if (mismatch.length || missing.length || applied !== ROWS.length) process.exit(2);
}

main();
