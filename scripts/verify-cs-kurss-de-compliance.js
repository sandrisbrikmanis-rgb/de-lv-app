#!/usr/bin/env node
/**
 * Verify CS Kurss lessons 1–21 German content matches LV master.
 */
const vm = require("vm");
const { loadWindowGlobals, readFile } = require("./lib/audit-common");

const DASH_RE = /\s*[–—-]\s*/;
const LESSON_KEYS = Array.from({ length: 21 }, (_, i) => `kurssLesson${i + 1}`);
const EXTRA_HTML_KEYS = ["kurssVerbBasicsLesson", "kurssSentenceStructureLesson"];
const HTML_CHECK_KEYS = [...EXTRA_HTML_KEYS, ...LESSON_KEYS];
const DE_CARD_FIELDS = ["de", "back", "prompt", "answer"];

function findDash(text) {
  const m = String(text).match(DASH_RE);
  if (!m) return null;
  const idx = String(text).search(DASH_RE);
  return {
    sep: m[0],
    de: String(text).slice(0, idx).trim(),
    native: String(text).slice(idx + m[0].length).trim()
  };
}

function expectedDeFromLv(lvText, csText) {
  const lvDash = findDash(lvText);
  if (!lvDash) return lvText;
  const csDash = findDash(csText);
  const native = csDash ? csDash.native : String(csText).trim();
  return `${lvDash.de}${lvDash.sep}${native}`;
}

function checkLegacyHtml(lessonKey, lvHtml, csHtml, mismatches) {
  const lvExamples = [...lvHtml.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((m) => m[1]);
  const csExamples = [...csHtml.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((m) => m[1]);
  const count = Math.min(lvExamples.length, csExamples.length);
  for (let i = 0; i < count; i++) {
    const expected = expectedDeFromLv(lvExamples[i], csExamples[i]);
    if (expected !== csExamples[i]) {
      mismatches.push({
        lesson: lessonKey,
        field: `legacyHtml/kurss-example[${i}]`,
        expected: expected.slice(0, 120),
        actual: csExamples[i].slice(0, 120)
      });
    }
  }

  const lvStrongs = [...lvHtml.matchAll(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g)];
  const csStrongs = [...csHtml.matchAll(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g)];
  for (let b = 0; b < Math.min(lvStrongs.length, csStrongs.length); b++) {
    const lvS = [...lvStrongs[b][1].matchAll(/<strong>([\s\S]*?)<\/strong>/g)].map((m) => m[1]);
    const csS = [...csStrongs[b][1].matchAll(/<strong>([\s\S]*?)<\/strong>/g)].map((m) => m[1]);
    for (let i = 0; i < Math.min(lvS.length, csS.length); i++) {
      if (lvS[i] !== csS[i]) {
        mismatches.push({
          lesson: lessonKey,
          field: `legacyHtml/conjugation[${b}]/strong[${i}]`,
          expected: lvS[i],
          actual: csS[i]
        });
      }
    }
  }
}

function checkSections(lessonKey, lvSections, csSections, mismatches) {
  if (!Array.isArray(lvSections) || !Array.isArray(csSections)) return;
  for (let s = 0; s < Math.min(lvSections.length, csSections.length); s++) {
    const lvSection = lvSections[s];
    const csSection = csSections[s];
    if (Array.isArray(lvSection.items) && Array.isArray(csSection.items)) {
      for (let i = 0; i < Math.min(lvSection.items.length, csSection.items.length); i++) {
        const lvItem = lvSection.items[i];
        const csItem = csSection.items[i];
        if (typeof lvItem === "string") {
          const expected = expectedDeFromLv(lvItem, typeof csItem === "string" ? csItem : "");
          if (expected !== csItem) {
            mismatches.push({
              lesson: lessonKey,
              field: `sections[${s}].items[${i}]`,
              expected: expected.slice(0, 120),
              actual: String(csItem).slice(0, 120)
            });
          }
        } else if (lvItem && typeof lvItem === "object") {
          if (Array.isArray(lvItem.table) && JSON.stringify(lvItem.table) !== JSON.stringify(csItem.table)) {
            mismatches.push({
              lesson: lessonKey,
              field: `sections[${s}].items[${i}].table`,
              expected: "LV table",
              actual: "CS mismatch"
            });
          }
          if (Array.isArray(lvItem.examples) && JSON.stringify(lvItem.examples) !== JSON.stringify(csItem.examples)) {
            mismatches.push({
              lesson: lessonKey,
              field: `sections[${s}].items[${i}].examples`,
              expected: lvItem.examples[0],
              actual: (csItem.examples || [])[0]
            });
          }
        }
      }
    }
    if (Array.isArray(lvSection.cards) && Array.isArray(csSection.cards)) {
      for (let i = 0; i < Math.min(lvSection.cards.length, csSection.cards.length); i++) {
        for (const field of DE_CARD_FIELDS) {
          const lvVal = lvSection.cards[i][field];
          const csVal = csSection.cards[i][field];
          if (lvVal !== undefined && lvVal !== csVal) {
            mismatches.push({
              lesson: lessonKey,
              field: `sections[${s}].cards[${i}].${field}`,
              expected: lvVal,
              actual: csVal
            });
          }
        }
      }
    }
  }
}

function loadLvTrainingCards() {
  const code = readFile("ui.js");
  const cards = {};
  for (let i = 1; i <= 6; i++) {
    const re = new RegExp(`const lesson${i}TrainingCards = (\\[[\\s\\S]*?\\]);`);
    const m = code.match(re);
    if (m) cards[`lesson${i}TrainingCardsCs`] = vm.runInNewContext(m[1]);
  }
  return cards;
}

function main() {
  const lvWin = loadWindowGlobals("data/courseLessons.js");
  const csWin = loadWindowGlobals("data/cs/courseLessons.js");
  const lvData = lvWin.COURSE_LESSON_DATA;
  const csData = csWin.COURSE_LESSON_DATA;
  const lvHtml = lvWin.COURSE_LESSON_HTML;
  const csHtml = csWin.COURSE_LESSON_HTML;
  const mismatches = [];

  for (const key of HTML_CHECK_KEYS) {
    if (lvHtml[key] && csHtml[key]) {
      checkLegacyHtml(key, lvHtml[key], csHtml[key], mismatches);
    }
    if (lvData[key] && csData[key] && csData[key].sections) {
      checkSections(key, lvData[key].sections, csData[key].sections, mismatches);
    }
  }

  const lvTraining = loadLvTrainingCards();
  const csTraining = loadWindowGlobals("data/cs/courseTrainingCards.js");
  for (const [key, lvDeck] of Object.entries(lvTraining)) {
    const csDeck = csTraining[key] || [];
    for (let i = 0; i < Math.min(lvDeck.length, csDeck.length); i++) {
      const expected = lvDeck[i].back || lvDeck[i].de;
      const actual = csDeck[i].back || csDeck[i].de;
      if (expected !== actual) {
        mismatches.push({
          lesson: key,
          field: `training[${i}].back`,
          expected,
          actual
        });
      }
    }
  }

  if (mismatches.length) {
    console.error(`CS Kurss DE compliance FAILED: ${mismatches.length} mismatch(es)`);
    mismatches.slice(0, 30).forEach((m) => {
      console.error(`- ${m.lesson} ${m.field}`);
      console.error(`  expected: ${m.expected}`);
      console.error(`  actual:   ${m.actual}`);
    });
    if (mismatches.length > 30) console.error(`... and ${mismatches.length - 30} more`);
    process.exit(1);
  }

  console.log("CS Kurss DE compliance PASS (verb basics, sentence structure, lessons 1–21, training cards)");
  console.log("DE mismatches: 0");
}

main();
