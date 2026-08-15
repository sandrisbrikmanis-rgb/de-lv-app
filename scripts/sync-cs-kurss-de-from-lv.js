#!/usr/bin/env node
/**
 * Sync CS Kurss German (DE) content from LV master for lessons 1–21.
 * Czech/native layer is preserved; only DE fields and German fragments are updated.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, loadWindowGlobals, readFile, isSyncedWithWww } = require("./lib/audit-common");

const DASH_RE = /\s*[–—-]\s*/;
const DE_CARD_FIELDS = ["de", "back", "prompt", "answer"];
const LESSON_KEYS = Array.from({ length: 21 }, (_, i) => `kurssLesson${i + 1}`);
const EXTRA_HTML_KEYS = ["kurssVerbBasicsLesson", "kurssSentenceStructureLesson"];
const HTML_SYNC_KEYS = [...EXTRA_HTML_KEYS, ...LESSON_KEYS];

let changeCount = 0;

function bump(label) {
  changeCount += 1;
  return label;
}

function findDash(text) {
  const m = text.match(DASH_RE);
  if (!m) return null;
  const idx = text.search(DASH_RE);
  return {
    sep: m[0],
    de: text.slice(0, idx).trim(),
    native: text.slice(idx + m[0].length).trim()
  };
}

function syncDeNativeString(lvText, csText) {
  const lvDash = findDash(lvText);
  if (!lvDash) {
    if (lvText !== csText) bump("pure-de-string");
    return lvText;
  }
  const csDash = findDash(csText);
  const native = csDash ? csDash.native : csText.trim();
  const merged = `${lvDash.de}${lvDash.sep}${native}`;
  if (merged !== csText) bump("de-native-string");
  return merged;
}

function syncExampleHtml(lvContent, csContent) {
  if (/<br\s*\/?>/i.test(lvContent) || /<br\s*\/?>/i.test(csContent)) {
    const lvLines = lvContent.split(/<br\s*\/?>/i);
    const csLines = csContent.split(/<br\s*\/?>/i);
    const max = Math.max(lvLines.length, csLines.length);
    const out = [];
    for (let i = 0; i < max; i++) {
      out.push(syncExampleHtml(lvLines[i] || "", csLines[i] || lvLines[i] || ""));
    }
    return out.join("<br>");
  }
  return syncDeNativeString(lvContent, csContent);
}

function replaceByIndex(html, regex, replacements, label) {
  let idx = 0;
  return html.replace(regex, (match, inner) => {
    if (idx >= replacements.length) return match;
    const next = replacements[idx];
    idx += 1;
    if (next !== inner) bump(label);
    return match.replace(inner, next);
  });
}

function syncConjugationBlock(lvBlock, csBlock) {
  const lvStrongs = [...lvBlock.matchAll(/<strong>([\s\S]*?)<\/strong>/g)].map((m) => m[1]);
  const lvSpans = [...lvBlock.matchAll(/<span>([\s\S]*?)<\/span>/g)].map((m) => m[1]);

  let csOut = csBlock;
  csOut = replaceByIndex(csOut, /<strong>([\s\S]*?)<\/strong>/g, lvStrongs, "conjugation-strong");

  let spanIdx = 0;
  csOut = csOut.replace(/<span>([\s\S]*?)<\/span>/g, (match, content) => {
    const lvVal = lvSpans[spanIdx];
    const isPronoun = spanIdx % 2 === 0;
    spanIdx += 1;
    if (!isPronoun || lvVal === undefined) return match;
    if (lvVal !== content) bump("conjugation-pronoun");
    return `<span>${lvVal}</span>`;
  });

  return csOut;
}

function syncVerbHeading(lvH4Inner, csH4Inner) {
  const iconMatch = csH4Inner.match(/^<span class="lesson1-verb-icon">[\s\S]*?<\/span>/);
  const icon = iconMatch ? iconMatch[0] : "";
  const lvBody = lvH4Inner.replace(/^<span class="lesson1-verb-icon">[\s\S]*?<\/span>/, "").trim();
  const csBody = csH4Inner.replace(/^<span class="lesson1-verb-icon">[\s\S]*?<\/span>/, "").trim();
  const lvDash = findDash(lvBody);
  const csDash = findDash(csBody);
  if (!lvDash) {
    if (lvBody !== csBody) bump("verb-h4");
    return `${icon}${lvBody}`;
  }
  const native = csDash ? csDash.native : csBody;
  const merged = `${icon}${lvDash.de}${lvDash.sep}${native}`;
  if (merged !== csH4Inner) bump("verb-h4");
  return merged;
}

function syncLegacyHtml(lvHtml, csHtml) {
  let out = csHtml;

  const lvConj = [...lvHtml.matchAll(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g)];
  let conjIdx = 0;
  out = out.replace(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g, (match, inner) => {
    const lv = lvConj[conjIdx];
    conjIdx += 1;
    if (!lv) return match;
    const synced = syncConjugationBlock(lv[1], inner);
    return `<div class="lesson1-conjugation">${synced}</div>`;
  });

  const lvH4 = [...lvHtml.matchAll(/<h4>([\s\S]*?)<\/h4>/g)];
  let h4Idx = 0;
  out = out.replace(/<h4>([\s\S]*?)<\/h4>/g, (match, inner) => {
    const lv = lvH4[h4Idx];
    h4Idx += 1;
    if (!lv || !/<span class="lesson1-verb-icon">/.test(inner)) return match;
    const synced = syncVerbHeading(lv[1], inner);
    return `<h4>${synced}</h4>`;
  });

  const lvSubtitles = [...lvHtml.matchAll(/<h5 class="lesson2-subtitle">([\s\S]*?)<\/h5>/g)].map((m) => m[1]);
  out = replaceByIndex(
    out,
    /<h5 class="lesson2-subtitle">([\s\S]*?)<\/h5>/g,
    lvSubtitles,
    "lesson2-subtitle"
  );

  const lvExamples = [...lvHtml.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((m) => m[1]);
  let exIdx = 0;
  out = out.replace(/<div class="kurss-example">([\s\S]*?)<\/div>/g, (match, inner) => {
    const lv = lvExamples[exIdx];
    exIdx += 1;
    if (!lv) return match;
    const synced = syncExampleHtml(lv, inner);
    if (synced !== inner) bump("kurss-example");
    return `<div class="kurss-example">${synced}</div>`;
  });

  return out;
}

function syncGrammarItem(lvItem, csItem) {
  if (typeof lvItem === "string") {
    return syncDeNativeString(lvItem, typeof csItem === "string" ? csItem : "");
  }
  if (!lvItem || typeof lvItem !== "object") return csItem;
  const out = { ...csItem };
  if (lvItem.heading !== undefined && lvItem.heading !== csItem.heading) {
    bump("grammar-heading");
    out.heading = lvItem.heading;
  }
  if (Array.isArray(lvItem.table)) {
    if (JSON.stringify(lvItem.table) !== JSON.stringify(csItem.table)) bump("grammar-table");
    out.table = lvItem.table;
  }
  if (Array.isArray(lvItem.examples)) {
    if (JSON.stringify(lvItem.examples) !== JSON.stringify(csItem.examples)) bump("grammar-examples");
    out.examples = lvItem.examples;
  }
  return out;
}

function syncSectionItem(lvItem, csItem) {
  if (typeof lvItem === "string") {
    const csStr = typeof csItem === "string" ? csItem : "";
    if (!findDash(lvItem)) {
      if (lvItem !== csStr) bump("section-item-pure-de");
      return lvItem;
    }
    return syncDeNativeString(lvItem, csStr);
  }
  return syncGrammarItem(lvItem, csItem);
}

function syncCard(lvCard, csCard) {
  const out = { ...csCard };
  for (const field of DE_CARD_FIELDS) {
    if (lvCard[field] !== undefined && lvCard[field] !== csCard[field]) {
      bump(`card-${field}`);
      out[field] = lvCard[field];
    }
  }
  if (Array.isArray(lvCard.forms) && Array.isArray(csCard.forms)) {
    out.forms = csCard.forms.map((csForm, i) => {
      const lvForm = lvCard.forms[i];
      if (!lvForm) return csForm;
      if (lvForm.text !== undefined && lvForm.text !== csForm.text) {
        bump("card-form-text");
        return { ...csForm, text: lvForm.text };
      }
      return csForm;
    });
  }
  return out;
}

function syncSections(lvSections, csSections) {
  if (!Array.isArray(lvSections) || !Array.isArray(csSections)) return csSections;
  return csSections.map((csSection, sIdx) => {
    const lvSection = lvSections[sIdx];
    if (!lvSection) return csSection;
    const out = { ...csSection };
    if (Array.isArray(lvSection.items) && Array.isArray(csSection.items)) {
      out.items = csSection.items.map((csItem, i) => syncSectionItem(lvSection.items[i], csItem));
    }
    if (Array.isArray(lvSection.cards) && Array.isArray(csSection.cards)) {
      out.cards = csSection.cards.map((csCard, i) => syncCard(lvSection.cards[i] || {}, csCard));
    }
    return out;
  });
}

function loadLvTrainingCards() {
  const code = readFile("ui.js");
  const cards = {};
  for (let i = 1; i <= 6; i++) {
    const re = new RegExp(`const lesson${i}TrainingCards = (\\[[\\s\\S]*?\\]);`);
    const m = code.match(re);
    if (m) cards[`lesson${i}TrainingCards`] = vm.runInNewContext(m[1]);
  }
  const m7 = code.match(/const lesson7ExerciseCards = (\[[\s\S]*?\]);/);
  if (m7) cards.lesson7ExerciseCards = vm.runInNewContext(m7[1]);
  return cards;
}

function syncTrainingCards(lvCards, csCards) {
  const out = { ...csCards };
  for (const [lvKey, lvDeck] of Object.entries(lvCards)) {
    const csKey = lvKey.endsWith("Cs") ? lvKey : `${lvKey}Cs`;
    const csDeck = out[csKey];
    if (!Array.isArray(lvDeck) || !Array.isArray(csDeck)) continue;
    out[csKey] = csDeck.map((csCard, i) => {
      const lvCard = lvDeck[i];
      if (!lvCard) return csCard;
      const lvBack = lvCard.back || lvCard.de || "";
      const csBack = csCard.back || csCard.de || "";
      if (lvBack && lvBack !== csBack) bump(`training-${csKey}`);
      return { ...csCard, back: lvBack };
    });
  }
  return out;
}

function writeTrainingCards(filePath, cards) {
  const keys = Object.keys(cards).filter((k) => k.endsWith("Cs"));
  const blocks = keys.map((key) => {
    return `window.${key} = ${JSON.stringify(cards[key], null, 2)};`;
  });
  const content = `// Czech course training cards for CS-DE Kurss lessons 1-7.\n\n${blocks.join("\n\n")}\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function writeCourseLessons(filePath, html, data) {
  let dataJson = JSON.stringify(data, null, 2);
  for (let i = 1; i <= 7; i++) {
    const key = `kurssLesson${i}`;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`
    );
  }
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function main() {
  const lvWin = loadWindowGlobals("data/courseLessons.js");
  const csWin = loadWindowGlobals("data/cs/courseLessons.js");
  const lvHtml = { ...lvWin.COURSE_LESSON_HTML };
  const csHtml = { ...csWin.COURSE_LESSON_HTML };
  const csData = JSON.parse(JSON.stringify(csWin.COURSE_LESSON_DATA));
  const lvData = lvWin.COURSE_LESSON_DATA;

  for (const key of HTML_SYNC_KEYS) {
    if (key in lvHtml && key in csHtml) {
      csHtml[key] = syncLegacyHtml(lvHtml[key], csHtml[key]);
    }
    if (lvData[key] && csData[key]) {
      if (csData[key].sections) {
        csData[key].sections = syncSections(lvData[key].sections, csData[key].sections);
      }
      if (key in csHtml) {
        csData[key].legacyHtml = csHtml[key];
      }
    }
  }

  const csLessonsPath = path.join(ROOT, "data/cs/courseLessons.js");
  writeCourseLessons(csLessonsPath, csHtml, csData);

  const wwwCsLessonsPath = path.join(ROOT, "www/data/cs/courseLessons.js");
  writeCourseLessons(wwwCsLessonsPath, csHtml, csData);

  const lvTraining = loadLvTrainingCards();
  const csTrainingWin = loadWindowGlobals("data/cs/courseTrainingCards.js");
  const syncedTraining = syncTrainingCards(lvTraining, csTrainingWin);
  writeTrainingCards(path.join(ROOT, "data/cs/courseTrainingCards.js"), syncedTraining);
  writeTrainingCards(path.join(ROOT, "www/data/cs/courseTrainingCards.js"), syncedTraining);

  const primaryWwwLessons = isSyncedWithWww("data/cs/courseLessons.js");
  const primaryWwwTraining = isSyncedWithWww("data/cs/courseTrainingCards.js");

  console.log(`CS Kurss DE sync complete. Changed fields: ${changeCount}`);
  console.log(`primary ↔ www courseLessons: ${primaryWwwLessons ? "PASS" : "FAIL"}`);
  console.log(`primary ↔ www courseTrainingCards: ${primaryWwwTraining ? "PASS" : "FAIL"}`);
}

main();
