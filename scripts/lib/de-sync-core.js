/**
 * Core DE-field sync from LV-DE master into {LANG}-DE datasets.
 * LV master is read-only; only native-language layers are preserved.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, dataPath, langSuffix, readFile, loadWindowGlobals } = require("./audit-common");

const DASH_RE = /\s*[–—-]\s*/;
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = {
  a1: "A1_WORDS",
  a2: "A2_WORDS",
  b1: "B1_WORDS",
  b2: "B2_WORDS",
  c1: "C1_WORDS",
  c2: "C2_WORDS",
};
const SENTENCES_VAR = "SENTENCE_ENTRIES";
const VERBS_VAR = "VERB_ENTRIES";
const DE_CARD_FIELDS = ["de", "back", "prompt", "answer"];
const LESSON_KEYS = Array.from({ length: 21 }, (_, i) => `kurssLesson${i + 1}`);
const EXTRA_HTML_KEYS = ["kurssVerbBasicsLesson", "kurssSentenceStructureLesson"];
const HTML_SYNC_KEYS = [...EXTRA_HTML_KEYS, ...LESSON_KEYS];
const LESSON7_DE_FIELDS = ["infinitive", "du", "ihr", "sie"];
const NATIVE_ACCENT_BRANCH_KEYS = new Set(["lv", "meaning"]);
const DE_ACCENT_BRANCH_KEYS = new Set(["de", "word"]);
const ACCENT_COLORS = new Set(["blue", "green", "yellow", "orange", "purple", "red"]);

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function isAccentColorMap(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const keys = Object.keys(value);
  return keys.length > 0 && keys.every((key) => ACCENT_COLORS.has(key));
}

function isFlatAccentEntry(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const keys = Object.keys(value);
  if (!keys.length) return false;
  if (keys.some((key) => DE_ACCENT_BRANCH_KEYS.has(key))) return false;
  return keys.every((key) => NATIVE_ACCENT_BRANCH_KEYS.has(key) || ACCENT_COLORS.has(key));
}

function syncSectionAccentsDeNode(lvNode, langNode) {
  if (lvNode === undefined || lvNode === null) return langNode;

  if (Array.isArray(lvNode)) {
    if (lvNode.every((item) => item === null || typeof item !== "object")) {
      return Array.isArray(langNode) ? langNode : langNode;
    }
    const out = Array.isArray(langNode) ? langNode.map((item) => (item && typeof item === "object" ? { ...item } : item)) : [];
    return lvNode.map((lvItem, index) => {
      if (index >= out.length && isFlatAccentEntry(lvItem)) return null;
      return syncSectionAccentsDeNode(lvItem, out[index]);
    }).filter((item, index) => item !== null || index < (Array.isArray(langNode) ? langNode.length : 0));
  }

  if (typeof lvNode !== "object") return langNode;

  if (isFlatAccentEntry(lvNode)) {
    return langNode !== undefined && langNode !== null ? langNode : lvNode;
  }

  const out = langNode && typeof langNode === "object" && !Array.isArray(langNode) ? { ...langNode } : {};

  for (const key of Object.keys(lvNode)) {
    if (NATIVE_ACCENT_BRANCH_KEYS.has(key)) continue;

    if (DE_ACCENT_BRANCH_KEYS.has(key)) {
      out[key] = cloneJson(lvNode[key]);
      continue;
    }

    if (Array.isArray(lvNode[key]) && lvNode[key].every((item) => typeof item !== "object")) {
      continue;
    }

    if (isAccentColorMap(lvNode[key])) continue;

    out[key] = syncSectionAccentsDeNode(lvNode[key], out[key]);
  }

  return out;
}

function syncSectionAccentsDe(lvStudy, langStudy) {
  if (!lvStudy?.sectionAccents || !langStudy) return false;
  const merged = syncSectionAccentsDeNode(lvStudy.sectionAccents, langStudy.sectionAccents || {});
  const changed = JSON.stringify(merged) !== JSON.stringify(langStudy.sectionAccents);
  langStudy.sectionAccents = merged;
  return changed;
}

function loadArray(relPath) {
  const code = readFile(relPath);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? { key, data: ctx.window[key] } : { key: null, data: [] };
}

function writeArrayFile(filePath, varName, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

function findDash(text) {
  const m = String(text).match(DASH_RE);
  if (!m) return null;
  const idx = String(text).search(DASH_RE);
  return {
    sep: m[0],
    de: String(text).slice(0, idx).trim(),
    native: String(text).slice(idx + m[0].length).trim(),
  };
}

function syncDeNativeString(lvText, langText) {
  const lvDash = findDash(lvText);
  if (!lvDash) return lvText;
  const langDash = findDash(langText);
  const native = langDash ? langDash.native : String(langText).trim();
  return `${lvDash.de}${lvDash.sep}${native}`;
}

function syncExampleHtml(lvContent, langContent) {
  if (/<br\s*\/?>/i.test(lvContent) || /<br\s*\/?>/i.test(langContent)) {
    const lvLines = lvContent.split(/<br\s*\/?>/i);
    const langLines = langContent.split(/<br\s*\/?>/i);
    const max = Math.max(lvLines.length, langLines.length);
    const out = [];
    for (let i = 0; i < max; i++) {
      out.push(syncExampleHtml(lvLines[i] || "", langLines[i] || lvLines[i] || ""));
    }
    return out.join("<br>");
  }
  return syncDeNativeString(lvContent, langContent);
}

function replaceByIndex(html, regex, replacements) {
  let idx = 0;
  return html.replace(regex, (match, inner) => {
    if (idx >= replacements.length) return match;
    const next = replacements[idx];
    idx += 1;
    return match.replace(inner, next);
  });
}

function syncConjugationBlock(lvBlock, langBlock) {
  const lvStrongs = [...lvBlock.matchAll(/<strong>([\s\S]*?)<\/strong>/g)].map((m) => m[1]);
  const lvSpans = [...lvBlock.matchAll(/<span>([\s\S]*?)<\/span>/g)].map((m) => m[1]);

  let out = langBlock;
  out = replaceByIndex(out, /<strong>([\s\S]*?)<\/strong>/g, lvStrongs);

  let spanIdx = 0;
  out = out.replace(/<span>([\s\S]*?)<\/span>/g, (match, content) => {
    const lvVal = lvSpans[spanIdx];
    const isPronoun = spanIdx % 2 === 0;
    spanIdx += 1;
    if (!isPronoun || lvVal === undefined) return match;
    return `<span>${lvVal}</span>`;
  });

  return out;
}

function syncVerbHeading(lvH4Inner, langH4Inner) {
  const iconMatch = langH4Inner.match(/^<span class="lesson1-verb-icon">[\s\S]*?<\/span>/);
  const icon = iconMatch ? iconMatch[0] : "";
  const lvBody = lvH4Inner.replace(/^<span class="lesson1-verb-icon">[\s\S]*?<\/span>/, "").trim();
  const langBody = langH4Inner.replace(/^<span class="lesson1-verb-icon">[\s\S]*?<\/span>/, "").trim();
  const lvDash = findDash(lvBody);
  const langDash = findDash(langBody);
  if (!lvDash) return `${icon}${lvBody}`;
  const native = langDash ? langDash.native : langBody;
  return `${icon}${lvDash.de}${lvDash.sep}${native}`;
}

function syncLegacyHtml(lvHtml, langHtml) {
  let out = langHtml;

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
  out = replaceByIndex(out, /<h5 class="lesson2-subtitle">([\s\S]*?)<\/h5>/g, lvSubtitles);

  const lvExamples = [...lvHtml.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((m) => m[1]);
  let exIdx = 0;
  out = out.replace(/<div class="kurss-example">([\s\S]*?)<\/div>/g, (match, inner) => {
    const lv = lvExamples[exIdx];
    exIdx += 1;
    if (!lv) return match;
    const synced = syncExampleHtml(lv, inner);
    return `<div class="kurss-example">${synced}</div>`;
  });

  return out;
}

function syncGrammarItem(lvItem, langItem) {
  if (typeof lvItem === "string") {
    return syncDeNativeString(lvItem, typeof langItem === "string" ? langItem : "");
  }
  if (!lvItem || typeof lvItem !== "object") return langItem;
  const out = { ...langItem };
  if (lvItem.heading !== undefined) out.heading = lvItem.heading;
  if (Array.isArray(lvItem.table)) out.table = lvItem.table;
  if (Array.isArray(lvItem.examples)) out.examples = lvItem.examples;
  return out;
}

function syncSectionItem(lvItem, langItem) {
  if (typeof lvItem === "string") {
    const langStr = typeof langItem === "string" ? langItem : "";
    if (!findDash(lvItem)) return lvItem;
    return syncDeNativeString(lvItem, langStr);
  }
  return syncGrammarItem(lvItem, langItem);
}

function syncCard(lvCard, langCard) {
  const out = { ...langCard };
  for (const field of DE_CARD_FIELDS) {
    if (lvCard[field] !== undefined) out[field] = lvCard[field];
  }
  if (Array.isArray(lvCard.forms) && Array.isArray(langCard.forms)) {
    out.forms = langCard.forms.map((langForm, i) => {
      const lvForm = lvCard.forms[i];
      if (!lvForm) return langForm;
      if (lvForm.text !== undefined) return { ...langForm, text: lvForm.text };
      return langForm;
    });
  }
  return out;
}

function syncSections(lvSections, langSections) {
  if (!Array.isArray(lvSections) || !Array.isArray(langSections)) return langSections;
  return langSections.map((langSection, sIdx) => {
    const lvSection = lvSections[sIdx];
    if (!lvSection) return langSection;
    const out = { ...langSection };
    if (Array.isArray(lvSection.items) && Array.isArray(langSection.items)) {
      out.items = langSection.items.map((langItem, i) => syncSectionItem(lvSection.items[i], langItem));
    }
    if (Array.isArray(lvSection.cards) && Array.isArray(langSection.cards)) {
      out.cards = langSection.cards.map((langCard, i) => syncCard(lvSection.cards[i] || {}, langCard));
    }
    return out;
  });
}

function restoreDeFields(lvEntry, langEntry) {
  langEntry.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) langEntry.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) langEntry.de_plural = lvEntry.de_plural;

  if (!lvEntry.study || !langEntry.study) return;

  if (Array.isArray(lvEntry.study.examples)) {
    if (!Array.isArray(langEntry.study.examples)) langEntry.study.examples = [];
    lvEntry.study.examples.forEach((tex, i) => {
      if (!langEntry.study.examples[i]) {
        langEntry.study.examples[i] = { de: tex.de, lv: tex.lv };
      } else if (tex.de !== undefined) {
        langEntry.study.examples[i].de = tex.de;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparison)) {
    if (!Array.isArray(langEntry.study.comparison)) langEntry.study.comparison = [];
    lvEntry.study.comparison.forEach((trow, i) => {
      if (!langEntry.study.comparison[i]) {
        langEntry.study.comparison[i] = {
          word: trow.word,
          meaning: trow.meaning,
          example: trow.example,
        };
        return;
      }
      langEntry.study.comparison[i].word = trow.word;
      const tex = trow.example || "";
      const hex = langEntry.study.comparison[i].example || "";
      if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
        const sep = tex.match(/\s*[–—-]\s*/);
        if (sep) {
          const dePart = tex.split(sep[0])[0];
          const langNative = hex.split(/\s*[–—-]\s*/).pop() || tex.split(/\s*[–—-]\s*/).pop() || "";
          langEntry.study.comparison[i].example = `${dePart}${sep[0]}${langNative.trim()}`;
        }
      } else if (tex) {
        langEntry.study.comparison[i].example = tex;
      }
    });
  }

  if (Array.isArray(lvEntry.study.words) && Array.isArray(langEntry.study.words)) {
    lvEntry.study.words.forEach((tw, i) => {
      if (langEntry.study.words[i] && tw.de !== undefined) {
        langEntry.study.words[i].de = tw.de;
      }
    });
  }

  if (Array.isArray(lvEntry.study.comparisonTable) && Array.isArray(langEntry.study.comparisonTable)) {
    lvEntry.study.comparisonTable.forEach((trow, i) => {
      if (langEntry.study.comparisonTable[i] && trow.de !== undefined) {
        langEntry.study.comparisonTable[i].de = trow.de;
      }
    });
  }

  syncSectionAccentsDe(lvEntry.study, langEntry.study);
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

function syncTrainingCards(lvCards, langCardsWin, lang) {
  const suffix = langSuffix(lang);
  const out = { ...langCardsWin };

  for (let i = 1; i <= 6; i++) {
    const lvKey = `lesson${i}TrainingCards`;
    const langKey = `lesson${i}TrainingCards${suffix}`;
    const lvDeck = lvCards[lvKey];
    const langDeck = out[langKey];
    if (!Array.isArray(lvDeck) || !Array.isArray(langDeck)) continue;
    out[langKey] = langDeck.map((langCard, j) => {
      const lvCard = lvDeck[j];
      if (!lvCard) return langCard;
      const lvBack = lvCard.back || lvCard.de || "";
      return lvBack ? { ...langCard, back: lvBack } : langCard;
    });
  }

  const lv7 = lvCards.lesson7ExerciseCards;
  const lang7Key = `lesson7ExerciseCards${suffix}`;
  const lang7 = out[lang7Key];
  if (Array.isArray(lv7) && Array.isArray(lang7)) {
    out[lang7Key] = lang7.map((langCard, j) => {
      const lvCard = lv7[j];
      if (!lvCard) return langCard;
      const synced = { ...langCard };
      for (const field of LESSON7_DE_FIELDS) {
        if (lvCard[field] !== undefined) synced[field] = lvCard[field];
      }
      return synced;
    });
  }

  return out;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function writeCourseLessons(filePath, html, data) {
  let dataJson = JSON.stringify(data, null, 2);
  for (let i = 1; i <= 21; i++) {
    const key = `kurssLesson${i}`;
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`
    );
  }
  for (const key of EXTRA_HTML_KEYS) {
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`
    );
  }
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function writeTrainingCardsFile(filePath, langCardsWin) {
  let header = "";
  if (fs.existsSync(filePath)) {
    const orig = fs.readFileSync(filePath, "utf8");
    const commentMatch = orig.match(/^(?:\/\/[^\n]*\n)+/);
    if (commentMatch) header = commentMatch[0].trimEnd() + "\n\n";
  }

  const keys = Object.keys(langCardsWin).filter((k) => k.startsWith("lesson"));
  const blocks = keys.map((key) => `window.${key} = ${JSON.stringify(langCardsWin[key], null, 2)};`);
  fs.writeFileSync(filePath, `${header}${blocks.join("\n\n")}\n`, "utf8");
}

function syncWordLevels(langCode) {
  let count = 0;
  for (const level of LEVELS) {
    const lvPath = dataPath("lv", `${level}.js`);
    const langPath = dataPath(langCode, `${level}.js`);
    if (!fs.existsSync(path.join(ROOT, langPath))) continue;

    const lv = loadArray(lvPath);
    const langData = loadArray(langPath);
    const n = Math.min(lv.data.length, langData.data.length);
    for (let i = 0; i < n; i++) {
      restoreDeFields(lv.data[i], langData.data[i]);
    }
    writeArrayFile(path.join(ROOT, langPath), VAR_NAMES[level], langData.data);
    count += n;
  }
  return count;
}

function syncSentences(langCode) {
  const lvPath = dataPath("lv", "sentences.js");
  const langPath = dataPath(langCode, "sentences.js");
  if (!fs.existsSync(path.join(ROOT, langPath))) return 0;

  const lv = loadArray(lvPath);
  const langData = loadArray(langPath);
  lv.data.forEach((entry, i) => {
    if (langData.data[i] && entry.de !== undefined) langData.data[i].de = entry.de;
  });
  writeArrayFile(path.join(ROOT, langPath), SENTENCES_VAR, langData.data);
  return langData.data.length;
}

function syncVerbs(langCode) {
  const lvPath = dataPath("lv", "verbs.js");
  const langPath = dataPath(langCode, "verbs.js");
  if (!fs.existsSync(path.join(ROOT, langPath))) return 0;

  const lv = loadArray(lvPath);
  const langData = loadArray(langPath);
  lv.data.forEach((lvEntry, i) => {
    const langEntry = langData.data[i];
    if (!langEntry) return;
    for (const form of Object.keys(lvEntry)) {
      if (lvEntry[form].de !== undefined && langEntry[form]) {
        langEntry[form].de = lvEntry[form].de;
      }
    }
  });
  writeArrayFile(path.join(ROOT, langPath), VERBS_VAR, langData.data);
  return langData.data.length;
}

function syncDialogueIdMap(lang) {
  const lvPath = dataPath("lv", "dialogueIdMap.js");
  const langPath = dataPath(lang, "dialogueIdMap.js");
  if (!fs.existsSync(path.join(ROOT, langPath))) return 0;

  const lvWin = loadWindowGlobals(lvPath);
  const langWin = loadWindowGlobals(langPath);
  const lvMap = lvWin.DIALOGUE_ID_MAP;
  const langMap = langWin.DIALOGUE_ID_MAP;
  if (!lvMap || !langMap) return 0;

  for (const [id, entry] of Object.entries(lvMap)) {
    if (langMap[id] && entry.de !== undefined) langMap[id].de = entry.de;
  }
  fs.writeFileSync(
    path.join(ROOT, langPath),
    `const DIALOGUE_ID_MAP = ${JSON.stringify(langMap, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
    "utf8"
  );
  return Object.keys(langMap).length;
}

function syncNounArticles(lang) {
  const lvPath = dataPath("lv", "nounArticles.js");
  const langPath = dataPath(lang, "nounArticles.js");
  if (!fs.existsSync(path.join(ROOT, langPath))) return 0;
  fs.copyFileSync(path.join(ROOT, lvPath), path.join(ROOT, langPath));
  return 1;
}

function syncCourseLessons(lang) {
  const lvPath = dataPath("lv", "courseLessons.js");
  const langPath = dataPath(lang, "courseLessons.js");
  if (!fs.existsSync(path.join(ROOT, langPath))) return false;

  const lvWin = loadWindowGlobals(lvPath);
  const langWin = loadWindowGlobals(langPath);
  const lvHtml = { ...lvWin.COURSE_LESSON_HTML };
  const langHtml = { ...langWin.COURSE_LESSON_HTML };
  const langData = JSON.parse(JSON.stringify(langWin.COURSE_LESSON_DATA));
  const lvData = lvWin.COURSE_LESSON_DATA;

  for (const key of HTML_SYNC_KEYS) {
    if (key in lvHtml && key in langHtml) {
      langHtml[key] = syncLegacyHtml(lvHtml[key], langHtml[key]);
    }
    if (lvData[key] && langData[key]) {
      if (langData[key].sections) {
        langData[key].sections = syncSections(lvData[key].sections, langData[key].sections);
      }
      if (key in langHtml) {
        langData[key].legacyHtml = langHtml[key];
      }
    }
  }

  writeCourseLessons(path.join(ROOT, langPath), langHtml, langData);
  return true;
}

function syncCourseTrainingCards(lang, lvTrainingCards) {
  const langPath = dataPath(lang, "courseTrainingCards.js");
  if (!fs.existsSync(path.join(ROOT, langPath))) return false;

  const langWin = loadWindowGlobals(langPath);
  const synced = syncTrainingCards(lvTrainingCards, langWin, lang);
  writeTrainingCardsFile(path.join(ROOT, langPath), synced);
  return true;
}

function listTargetLanguages() {
  const dataRoot = path.join(ROOT, "data");
  return fs
    .readdirSync(dataRoot)
    .filter((name) => {
      const full = path.join(dataRoot, name);
      return fs.statSync(full).isDirectory() && name !== "lv";
    })
    .sort();
}

function syncSectionAccentsLevels(langCode) {
  let cardsTouched = 0;
  for (const level of LEVELS) {
    const lvPath = dataPath("lv", `${level}.js`);
    const langPath = dataPath(langCode, `${level}.js`);
    if (!fs.existsSync(path.join(ROOT, langPath))) continue;

    const lv = loadArray(lvPath);
    const langData = loadArray(langPath);
    const n = Math.min(lv.data.length, langData.data.length);
    for (let i = 0; i < n; i++) {
      if (syncSectionAccentsDe(lv.data[i].study, langData.data[i].study)) cardsTouched += 1;
    }
    writeArrayFile(path.join(ROOT, langPath), VAR_NAMES[level], langData.data);
  }
  return cardsTouched;
}

function syncLanguageDeFromLv(lang, lvTrainingCards) {
  const summary = {
    lang,
    wordEntries: syncWordLevels(lang),
    sentences: syncSentences(lang),
    verbs: syncVerbs(lang),
    dialogueIds: syncDialogueIdMap(lang),
    nounArticles: syncNounArticles(lang),
    courseLessons: syncCourseLessons(lang),
    courseTrainingCards: syncCourseTrainingCards(lang, lvTrainingCards),
  };
  return summary;
}

function syncLanguageSectionAccentsDeFromLv(langCode) {
  const cardsTouched = syncSectionAccentsLevels(langCode);
  return { lang: langCode, sectionAccentCards: cardsTouched };
}

module.exports = {
  listTargetLanguages,
  loadLvTrainingCards,
  syncLanguageDeFromLv,
  syncLanguageSectionAccentsDeFromLv,
  syncSectionAccentsDe,
  restoreDeFields,
  loadArray,
  writeArrayFile,
  findDash,
  VAR_NAMES,
  LEVELS,
};
