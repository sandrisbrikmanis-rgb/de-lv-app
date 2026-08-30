#!/usr/bin/env node
/**
 * Read-only HU-DE content readiness audit.
 * Reports translation coverage markers, LV/EN remnants, duplicate titles,
 * Study/Course incomplete content, sectionAccents status, and root ↔ www sync.
 * Does NOT modify any data files.
 *
 * Run: node scripts/audit-hu-content-readiness.js
 *      node scripts/audit-hu-content-readiness.js --json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const {
  ROOT,
  dataDir,
  loadArrayDataset,
  loadWindowGlobals
} = require("./lib/audit-common");

const LANG = "hu";
const DIR = dataDir(LANG);
const JSON_OUT = process.argv.includes("--json");

const LEVEL_FILES = ["a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js"];
const DATA_FILES = [
  ...LEVEL_FILES,
  "sentences.js", "verbs.js", "courseLessons.js",
  "courseTrainingCards.js", "dialogueIdMap.js", "nounArticles.js"
];

const ALLOWED_UI_PLACEHOLDERS = new Set([
  "code", "label", "current", "total", "tap", "lesson",
  "word", "words", "count", "title", "char"
]);

const LV_DIACRITIC = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const HU_DIACRITIC = /[áéíóöőúüűÁÉÍÓÖŐÚÜŰ]/;

const MARKERS = {
  lvDiacritics: { label: "LV diacritics", regex: /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/g },
  lvTerms: {
    label: "common LV words/phrases",
    regex: /\b(Latviešu|latviski|Izmanto|Atceries|Svarīgi|runāt|pateikt|pareizi|nepareizi|nākt|nāku|viņš|bērns|labrīt|sveicināt|lekcija|Lekcija|akuzatīvs|nominatīvs|datīvs|locījum|darbības vārds|lietvārds|Norādāmie|Vienskaitlis|Daudzskaitlis)\b/gi
  },
  enTerms: {
    label: "English fragments",
    regex: /\b(At|To|For|In|With|From|The|and|or|but|Hack|Party|Premier|bart|WHO)\b/g
  },
  huLikely: {
    label: "likely Hungarian",
    regex: /\b(és|hogy|nem|van|egy|mint|vagy|igen|nincs|lesz|volt|kell|tud|akar|mond|beszél|menni|jönni|látni|csinálni|dolgozni|iskola|ház|víz|kenyér|alma|könyv|asztal|ajtó|éjszaka|nap|év|ember|nő|gyerek|barát|munka|város|ország|utca|idő|élet|világ|kéz|szem|fej|szív|hang|szó|mondat|nyelv|történet|zene|film|mozi|étterem|szálloda|kórház|autó|vonat|repülő|bicikli|telefon|számítógép|internet|email|üzenet|kérdés|válasz|probléma|megoldás|ötlet|gondolat|érzés|szerelem|félelem|remény|boldogság|szomorúság|harag|nyugalom|béke|háború|szabadság|igazság|igaz|hamis|hiba|siker|kezdet|vég|előtt|után|ma|tegnap|holnap|reggel|este|hét|hónap|tavasz|nyár|ősz|tél|tanulni|viselni|beszélni|lenni|csak|még|már|itt|ott|jól|rosszul|nagy|kicsi|új|régi|jó|rossz|szép)\b/gi
  }
};

const SUSPICIOUS_UI = [
  { key: "buttons.close", bad: "Közeli", good: "Bezárás" },
  { key: "buttons.knownWords", bad: "Természetesen", good: "Ismert szavak" },
  { key: "card.pluralLabel", bad: "Sokan látják", good: "Többes szám" },
  { key: "kurss.back", bad: "‹ Természetesen", good: "‹ Vissza" },
  { key: "verb.present", bad: "A jelen", good: "Jelen idő" },
  { key: "verb.imperfectIndicative", bad: "Tökéletlen – tájékoztató jellegű", good: "Múlt idő – kijelentő mód" },
  { key: "verb.infinitive", bad: "Főnévi igenév", good: "Infinitív" }
];

function sha256(relPath) {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) return null;
  return crypto.createHash("sha256").update(fs.readFileSync(full)).digest("hex");
}

function countMatches(text, regex) {
  const flags = regex.flags.includes("g") ? regex.flags : `${regex.flags}g`;
  const re = new RegExp(regex.source, flags);
  return (text.match(re) || []).length;
}

function walkStrings(value, out) {
  if (value == null) return;
  if (typeof value === "string") {
    out.push(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => walkStrings(item, out));
    return;
  }
  if (typeof value === "object") {
    Object.values(value).forEach((item) => walkStrings(item, out));
  }
}

function loadFileContent(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), "utf8");
}

function hasLvText(text) {
  return LV_DIACRITIC.test(text) || MARKERS.lvTerms.regex.test(text);
}

function dedupeExactTitle(value) {
  const parts = value.split(/\s*•\s*/).map((s) => s.trim()).filter(Boolean);
  if (parts.length < 2) return { type: "none" };
  if (parts.every((p) => p === parts[0])) return { type: "exactDuplicate", value: parts[0] };
  const hasDup = new Set(parts).size < parts.length;
  if (hasDup) return { type: "mixedDuplicate", value };
  return { type: "none" };
}

function inventoryFlashcardDuplicates(relPath) {
  const text = loadFileContent(relPath);
  const exact = [];
  const mixed = [];
  const lines = text.split(/\n/);
  for (const line of lines) {
    const m = line.match(/^    "lv": "(.*)",?$/);
    if (!m) continue;
    const result = dedupeExactTitle(m[1]);
    if (result.type === "exactDuplicate") exact.push(m[1]);
    else if (result.type === "mixedDuplicate") mixed.push(m[1]);
  }
  return { exactDuplicates: exact.length, mixedDuplicates: mixed.length, mixedExamples: mixed.slice(0, 10) };
}

function inventoryStudyCardsByLevel(fileName) {
  const relPath = `${DIR}/${fileName}`;
  const level = fileName.replace(".js", "").toUpperCase();
  const stats = {
    level,
    totalStudy: 0,
    lvExplanation: 0,
    lvExamples: 0,
    lvComparison: 0,
    lvTip: 0,
    lvImportant: 0,
    lvSectionAccents: 0,
    fullyHu: 0,
    emptySectionAccents: 0,
    lvSectionAccentCards: 0
  };

  const words = loadArrayDataset(relPath) || [];
  for (const card of words) {
    if (!card.study) continue;
    stats.totalStudy++;
    const study = card.study;
    let hasLv = false;
    let hasHu = false;

    const checkField = (field) => {
      if (study[field] == null) return false;
      const s = JSON.stringify(study[field]);
      return hasLvText(s);
    };

    if (checkField("explanation")) { stats.lvExplanation++; hasLv = true; }
    if (checkField("examples")) { stats.lvExamples++; hasLv = true; }
    if (checkField("comparison")) { stats.lvComparison++; hasLv = true; }
    if (checkField("tip")) { stats.lvTip++; hasLv = true; }
    if (checkField("important")) { stats.lvImportant++; hasLv = true; }

    const accents = study.sectionAccents;
    if (accents && typeof accents === "object" && Object.keys(accents).length === 0) {
      stats.emptySectionAccents++;
    }
    if (accents && JSON.stringify(accents).match(LV_DIACRITIC)) {
      stats.lvSectionAccents++;
      stats.lvSectionAccentCards++;
      hasLv = true;
    }

    const allStudy = JSON.stringify(study);
    if (HU_DIACRITIC.test(allStudy)) hasHu = true;
    if (hasHu && !hasLv) stats.fullyHu++;
  }

  return stats;
}

function inventorySectionAccents(fileName) {
  const relPath = `${DIR}/${fileName}`;
  const words = loadArrayDataset(relPath) || [];
  let empty = 0;
  let lvTerms = 0;
  const cardIds = [];
  for (const card of words) {
    if (!card.study) continue;
    const accents = card.study.sectionAccents;
    if (!accents || (typeof accents === "object" && Object.keys(accents).length === 0)) {
      empty++;
      if (card.study.id) cardIds.push({ id: card.study.id, de: card.de, issue: "empty" });
    } else if (JSON.stringify(accents).match(LV_DIACRITIC)) {
      lvTerms++;
      if (card.study.id) cardIds.push({ id: card.study.id, de: card.de, issue: "lvTerms" });
    }
  }
  return { empty, lvTerms, examples: cardIds.slice(0, 20) };
}

function inventoryCourseLessons() {
  const relPath = `${DIR}/courseLessons.js`;
  const globals = loadWindowGlobals(relPath);
  const data = globals.COURSE_LESSON_DATA || {};
  const result = {
    lessons1to7: { titlesHu: 0, legacyHtmlLvStrings: 0, htmlStructuralIssues: 0 },
    lessons8to21: { titlesHu: 0, lvItems: 0, lvHeadingText: 0, lvTables: 0, fullyHu: 0, mixedFragments: 0 },
    totals: { legacyHtmlLvStrings: 0, lvItems: 0, lvGrammarHeadings: 0, mixedFragments: 0, htmlStructuralIssues: 0 }
  };

  const lvHeadingRe = /\b(Norādāmie|vietniekvārd|Vienskaitlis|Daudzskaitlis|Artikulu|nominatīvs|akuzatīvs|datīvs|locījum)\b/i;

  for (let i = 1; i <= 21; i++) {
    const lesson = data[`kurssLesson${i}`];
    if (!lesson) continue;
    const bucket = i <= 7 ? result.lessons1to7 : result.lessons8to21;

    if (lesson.title && HU_DIACRITIC.test(lesson.title)) bucket.titlesHu++;

    if (lesson.legacyHtml) {
      const strings = [];
      walkStrings(lesson.legacyHtml, strings);
      for (const s of strings) {
        if (hasLvText(s)) {
          bucket.legacyHtmlLvStrings++;
          result.totals.legacyHtmlLvStrings++;
        }
      }
    }

    if (lesson.sections) {
      for (const sec of lesson.sections) {
        if (sec.title && HU_DIACRITIC.test(sec.title)) bucket.titlesHu++;
        if (sec.heading && lvHeadingRe.test(sec.heading)) {
          bucket.lvHeadingText++;
          result.totals.lvGrammarHeadings++;
        }
        if (sec.text && hasLvText(sec.text)) {
          bucket.lvHeadingText++;
        }
        if (sec.table) {
          const tableText = JSON.stringify(sec.table);
          if (hasLvText(tableText)) bucket.lvTables++;
        }
        for (const item of sec.items || []) {
          const itemText = typeof item === "string" ? item : JSON.stringify(item);
          const itemHasLv = hasLvText(itemText);
          const itemHasHu = HU_DIACRITIC.test(itemText);
          if (itemHasLv) {
            bucket.lvItems++;
            result.totals.lvItems++;
          }
          if (itemHasLv && itemHasHu) {
            bucket.mixedFragments++;
            result.totals.mixedFragments++;
          }
          if (itemHasHu && !itemHasLv) bucket.fullyHu++;
        }
      }
    }
  }

  const htmlCheck = checkCourseLessonsHtml();
  result.totals.htmlStructuralIssues = htmlCheck.htmlTagBalanceIssues.length;
  result.lessons1to7.htmlStructuralIssues = htmlCheck.htmlTagBalanceIssues.length;

  return result;
}

function checkCourseLessonsHtml() {
  const relPath = `${DIR}/courseLessons.js`;
  const result = {
    parseOk: true,
    parseError: null,
    htmlTagBalanceIssues: []
  };
  try {
    const globals = loadWindowGlobals(relPath);
    const htmlStrings = [];
    if (globals.COURSE_LESSON_HTML) walkStrings(globals.COURSE_LESSON_HTML, htmlStrings);
    if (globals.COURSE_LESSON_DATA) walkStrings(globals.COURSE_LESSON_DATA, htmlStrings);
    const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g;
    for (const html of htmlStrings) {
      if (typeof html !== "string" || !html.includes("<")) continue;
      const stack = [];
      let match;
      while ((match = tagRegex.exec(html)) !== null) {
        const full = match[0];
        const tag = match[1].toLowerCase();
        if (full.startsWith("</")) {
          const open = stack.pop();
          if (!open || open !== tag) {
            result.htmlTagBalanceIssues.push({ tag, issue: "unexpected closing or mismatch" });
          }
        } else if (!full.endsWith("/>") && !["br", "hr", "img", "input", "meta", "link"].includes(tag)) {
          stack.push(tag);
        }
      }
      if (stack.length) result.htmlTagBalanceIssues.push({ unclosed: stack.slice(0, 5) });
    }
  } catch (err) {
    result.parseOk = false;
    result.parseError = err.message;
  }
  return result;
}

function analyzeDataFile(relPath) {
  const fileName = path.basename(relPath);
  const text = loadFileContent(relPath);
  const markerCounts = {};
  for (const [key, marker] of Object.entries(MARKERS)) {
    markerCounts[key] = countMatches(text, marker.regex);
  }
  let recordCount = null;
  let studyCount = null;
  let parseOk = true;
  let parseError = null;
  try {
    if (LEVEL_FILES.includes(fileName)) {
      const words = loadArrayDataset(relPath);
      recordCount = words ? words.length : 0;
      studyCount = (words || []).filter((w) => w && w.study).length;
    } else if (fileName === "sentences.js" || fileName === "verbs.js") {
      recordCount = (loadArrayDataset(relPath) || []).length;
    } else if (fileName === "courseLessons.js") {
      recordCount = Object.keys(loadWindowGlobals(relPath)).length;
    }
  } catch (err) {
    parseOk = false;
    parseError = err.message;
  }
  const dupes = LEVEL_FILES.includes(fileName) ? inventoryFlashcardDuplicates(relPath) : null;
  return {
    file: relPath,
    recordCount,
    studyCount,
    markerCounts,
    flashcardDuplicates: dupes,
    rootWwwIdentical: sha256(relPath) === sha256(`www/${relPath}`),
    parseOk,
    parseError
  };
}

function extractUiStringValues(relPath) {
  const text = loadFileContent(relPath);
  const values = [];
  const re = /"([^"\\]|\\.)*"/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    const value = match[0].slice(1, -1);
    if (value.length > 0 && !value.startsWith("__")) values.push(value);
  }
  return values;
}

function flattenUiKeys(obj, prefix = "") {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) Object.assign(out, flattenUiKeys(v, key));
    else out[key] = v;
  }
  return out;
}

function analyzeUiFile(relPath) {
  const code = loadFileContent(relPath);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code.replace("window.LANGUAGE_UI_STRINGS", "LANGUAGE_UI_STRINGS = window.LANGUAGE_UI_STRINGS"), ctx);
  const ui = ctx.window.LANGUAGE_UI_STRINGS || {};
  const flat = flattenUiKeys(ui);
  const uiValues = extractUiStringValues(relPath);
  const placeholderIssues = [];
  for (const value of uiValues) {
    const placeholderRegex = /\{([^}]+)\}/g;
    let phMatch;
    while ((phMatch = placeholderRegex.exec(value)) !== null) {
      const name = phMatch[1];
      if (!ALLOWED_UI_PLACEHOLDERS.has(name)) {
        placeholderIssues.push({ value, placeholder: name });
      }
    }
  }
  const suspiciousStrings = [];
  for (const item of SUSPICIOUS_UI) {
    const val = flat[item.key];
    if (val === item.bad) suspiciousStrings.push({ key: item.key, value: val, expected: item.good });
  }
  return {
    file: relPath,
    uiKeyCount: Object.keys(flat).length,
    placeholderIssues,
    suspiciousStrings,
    rootWwwIdentical: sha256(relPath) === sha256(`www/${relPath}`)
  };
}

function readRegistryHu() {
  const text = loadFileContent("languages/registry.js");
  const mStatus = text.match(/code:\s*"hu"[\s\S]*?dataStatus:\s*"([^"]+)"/);
  const mStudy = text.match(/code:\s*"hu"[\s\S]*?hasStudyData:\s*(true|false)/);
  return {
    dataStatus: mStatus ? mStatus[1] : null,
    hasStudyData: mStudy ? mStudy[2] === "true" : null
  };
}

const fileReports = DATA_FILES.map((name) => analyzeDataFile(`${DIR}/${name}`));
const studyByLevel = LEVEL_FILES.map((name) => inventoryStudyCardsByLevel(name));
const sectionAccentsByLevel = LEVEL_FILES.map((name) => ({
  level: name.replace(".js", "").toUpperCase(),
  ...inventorySectionAccents(name)
}));
const courseInventory = inventoryCourseLessons();
const uiReport = analyzeUiFile("languages/hu/ui.js");
const registry = readRegistryHu();

const studyTotals = studyByLevel.reduce(
  (acc, row) => {
    acc.totalStudy += row.totalStudy;
    acc.lvExplanation += row.lvExplanation;
    acc.lvExamples += row.lvExamples;
    acc.lvComparison += row.lvComparison;
    acc.lvTip += row.lvTip;
    acc.lvImportant += row.lvImportant;
    acc.lvSectionAccents += row.lvSectionAccents;
    acc.fullyHu += row.fullyHu;
    acc.emptySectionAccents += row.emptySectionAccents;
    return acc;
  },
  {
    totalStudy: 0,
    lvExplanation: 0,
    lvExamples: 0,
    lvComparison: 0,
    lvTip: 0,
    lvImportant: 0,
    lvSectionAccents: 0,
    fullyHu: 0,
    emptySectionAccents: 0
  }
);

const duplicateTotals = fileReports
  .filter((f) => f.flashcardDuplicates)
  .reduce(
    (acc, f) => {
      acc.exact += f.flashcardDuplicates.exactDuplicates;
      acc.mixed += f.flashcardDuplicates.mixedDuplicates;
      return acc;
    },
    { exact: 0, mixed: 0 }
  );

const totals = {
  translationStrings: fileReports.reduce((sum, f) => sum + countMatches(loadFileContent(f.file), /"lv":\s*"/g), 0),
  lvDiacritics: fileReports.reduce((sum, f) => sum + (f.markerCounts.lvDiacritics || 0), 0),
  lvTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.lvTerms || 0), 0),
  enTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.enTerms || 0), 0),
  huLikely: fileReports.reduce((sum, f) => sum + (f.markerCounts.huLikely || 0), 0),
  rootWwwMismatches: fileReports.filter((f) => !f.rootWwwIdentical).map((f) => f.file)
};
if (!uiReport.rootWwwIdentical) totals.rootWwwMismatches.push(uiReport.file);

const sonnetReviewCards = [
  { de: "an", issue: "flashcard: At • To • Bemutatni — not valid HU" },
  { de: "bei", issue: "flashcard: At" },
  { de: "für", issue: "flashcard: For (English)" },
  { de: "in", issue: "flashcard: In • To" },
  { de: "zu", issue: "flashcard: Hogy • At" },
  { de: "zum", issue: "flashcard: Hogy • At" },
  { de: "schelten", issue: "flashcard: To bart (English, deduped)" },
  { de: "Partei", issue: "flashcard: Party (English, deduped)" },
  { de: "Bank", issue: "Bank • Pad • Bank — mixed duplicate, semantic review" },
  { de: "Leiter", issue: "flash vs study meaning expansion — semantic review" },
  { de: "sich bedienen", issue: "flash vs study — semantic review" },
  { de: "Nachdruck", issue: "flash vs study — semantic review" }
];

const report = {
  lang: LANG,
  generatedAt: new Date().toISOString(),
  registry,
  registryExpected: { dataStatus: "fallback", hasStudyData: false },
  productionReady: false,
  totals,
  studyByLevel,
  studyTotals,
  sectionAccentsByLevel,
  sectionAccentsTotals: {
    empty: sectionAccentsByLevel.reduce((s, r) => s + r.empty, 0),
    lvTerms: sectionAccentsByLevel.reduce((s, r) => s + r.lvTerms, 0)
  },
  flashcardDuplicateTotals: duplicateTotals,
  courseInventory,
  ui: uiReport,
  files: fileReports,
  sonnetReviewCards,
  readiness: {
    productionReady: false,
    reason: "HU content layer is structurally present but linguistically incomplete; registry should remain fallback until full Sonnet translation cycle."
  }
};

if (JSON_OUT) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log("HU-DE content readiness audit (read-only)");
  console.log("==========================================");
  console.log(`Registry: dataStatus=${registry.dataStatus}, hasStudyData=${registry.hasStudyData}`);
  console.log(`Translation strings (lv fields): ${totals.translationStrings}`);
  console.log(`LV diacritics: ${totals.lvDiacritics}`);
  console.log(`LV terms: ${totals.lvTerms}`);
  console.log(`EN markers: ${totals.enTerms}`);
  console.log(`Likely HU markers: ${totals.huLikely}`);
  console.log(`Flashcard exact duplicates remaining: ${duplicateTotals.exact}`);
  console.log(`Flashcard mixed duplicates remaining: ${duplicateTotals.mixed}`);
  console.log(`Study cards fully HU: ${studyTotals.fullyHu}/${studyTotals.totalStudy}`);
  console.log(`Study LV tip: ${studyTotals.lvTip}, important: ${studyTotals.lvImportant}, sectionAccents: ${studyTotals.lvSectionAccents}`);
  console.log(`Empty sectionAccents: ${studyTotals.emptySectionAccents}`);
  console.log(`Course legacyHtml LV strings (1-7): ${courseInventory.totals.legacyHtmlLvStrings}`);
  console.log(`Course LV items (8-21): ${courseInventory.totals.lvItems}`);
  console.log(`Course LV grammar headings: ${courseInventory.totals.lvGrammarHeadings}`);
  console.log(`UI placeholder issues: ${uiReport.placeholderIssues.length}`);
  console.log(`UI suspicious strings: ${uiReport.suspiciousStrings.length}`);
  console.log(`Root↔WWW mismatches: ${totals.rootWwwMismatches.length}`);
  if (totals.rootWwwMismatches.length) {
    totals.rootWwwMismatches.forEach((f) => console.log(`  - ${f}`));
  }
  console.log("\nStudy by level:");
  studyByLevel.forEach((row) => {
    console.log(
      `  ${row.level}: total=${row.totalStudy}, fullyHu=${row.fullyHu}, lvTip=${row.lvTip}, lvImportant=${row.lvImportant}, lvAccents=${row.lvSectionAccents}`
    );
  });
}
