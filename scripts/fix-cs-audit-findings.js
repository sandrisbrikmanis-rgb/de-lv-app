#!/usr/bin/env node
/**
 * Fix CS-DE audit findings: rebuild native (lv-keyed) content from LV etalon via lv→cs
 * translation. Replaces Polish/Slovak contamination from SK baseline pipeline.
 * Per PROJECT_LANGUAGE_MASTER_STANDARD.md §7 audit remediation spec.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll, loadCache, cacheKey } = require("./lib/translate-helper");

const CS_DIR = path.join(ROOT, "data", "cs");
const CACHE_PATH = path.join(ROOT, "scripts", ".cs-lv-translation-cache.json");
const UI_CACHE_PATH = path.join(ROOT, "scripts", ".cs-ui-lv-translation-cache.json");
const FROM = "lv";
const TO = "cs";
const BULLET = "•";

const PL_CHARS = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/;
const LV_CHARS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;

const NAME_REPLACEMENTS = [
  [/\bPēteris\b/g, "Petr"], [/\bJānis\b/g, "Jan"], [/\bRūdolfs\b/g, "Rudolf"],
  [/\bRoberts\b/g, "Robert"], [/\bMarija\b/g, "Marie"], [/\bPauls\b/g, "Paul"],
  [/\bMarta\b/g, "Martha"], [/\bAlbert\b/g, "Albert"], [/\bAnna\b/g, "Anna"],
  [/\bEdgars\b/g, "Edgar"], [/\bHanna\b/g, "Hana"], [/\bOlga\b/g, "Olga"],
  [/\bHans\b/g, "Hans"], [/\bMarie\b/g, "Marie"],
];

const LV_REF_REPLACEMENTS = [
  [/\blotyštin[aeěy]?\b/gi, "češtině"],
  [/\blotyšsk[áéýě]?\b/gi, "český"],
  [/\bLotyšsk[áéýě]?\b/g, "Český"],
  [/\błotewsk\w*\b/gi, "český"],
  [/\bŁotewsk\w*\b/g, "Český"],
  [/\blatviešu\b/gi, "český"],
  [/\bLatvian\b/gi, "Czech"],
  [/\blatviešu ģimenes\b/gi, "český rod"],
  [/\bLatvian family\b/gi, "Czech gender system"],
  [/\bV lotyštine\b/gi, "V češtině"],
  [/\bv lotyštine\b/gi, "v češtině"],
];

const MANUAL_STUDY = {
  an: { lv: "Na • K • Přítomný čas", translation: "Na • Na povrchu • Na okraji" },
  Bank: { lv: "Banka", translation: "Banka • Lavice" },
  Leiter: { lv: "Vedoucí", translation: "Vedoucí • Žebřík" },
  "sich bedienen": { lv: "Obsloužit se", translation: "Obsloužit se" },
  Nachdruck: { lv: "Důraz", translation: "Důraz • Dotisk" },
};

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember",
]);

function postProcess(text) {
  if (!text || typeof text !== "string") return text;
  let out = text.replace(/;\s*/g, ` ${BULLET} `);
  for (const [from, to] of NAME_REPLACEMENTS) out = out.replace(from, to);
  for (const [from, to] of LV_REF_REPLACEMENTS) out = out.replace(from, to);
  out = out.replace(/\s+/g, " ").replace(/\s+•\s+/g, ` ${BULLET} `).trim();
  if (out.includes(BULLET)) {
    out = out.split(BULLET).map((p) => {
      const t = p.trim();
      return t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
    }).join(` ${BULLET} `);
  } else if (out.length) {
    out = out.charAt(0).toUpperCase() + out.slice(1);
  }
  return out;
}

function needsTranslation(text) {
  if (!text || typeof text !== "string" || !text.trim()) return false;
  return LV_CHARS.test(text) || PL_CHARS.test(text) || /lotyš|łotew|latviešu|Główna idea|Podzielne|Niepoprawnie/i.test(text);
}

function collectStrings(value, out, parentKey = "") {
  if (value == null) return;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey) && value.trim()) out.add(value);
    if (parentKey === "example") {
      if (value.includes("=")) {
        const right = value.split("=").pop().trim();
        if (right) out.add(right);
      }
      const dash = value.match(/\s*[–—-]\s*(.+)$/);
      if (dash) out.add(dash[1].trim());
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((v) => collectStrings(v, out, NATIVE_KEYS.has(parentKey) ? parentKey : ""));
    return;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (k === "de" || k === "de_article" || k === "de_plural" || k === "id" || k === "layout" || k === "level") continue;
      if (k === "sectionAccents") continue;
      collectStrings(v, out, k);
    }
  }
}

function applyTranslation(value, map, parentKey = "") {
  if (value == null) return value;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey)) return postProcess(map[value] ?? value);
    if (parentKey === "example") {
      if (value.includes("=")) {
        const idx = value.indexOf("=");
        const left = value.slice(0, idx + 1);
        const right = value.slice(idx + 1).trim();
        return right && map[right] ? `${left} ${postProcess(map[right])}` : postProcess(value);
      }
      const dash = value.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
      if (dash) {
        const right = dash[3].trim();
        return right && map[right] ? `${dash[1]}${dash[2]}${postProcess(map[right])}` : postProcess(value);
      }
    }
    return postProcess(value);
  }
  if (Array.isArray(value)) return value.map((v) => applyTranslation(v, map, parentKey));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === "sectionAccents") { out[k] = v; continue; }
      out[k] = applyTranslation(v, map, k);
    }
    return out;
  }
  return value;
}

function preserveGermanFields(lvEntry, trEntry) {
  const out = JSON.parse(JSON.stringify(trEntry));
  out.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) out.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) out.de_plural = lvEntry.de_plural;
  if (lvEntry.level !== undefined) out.level = lvEntry.level;
  if (lvEntry.study && trEntry.study) {
    out.study = JSON.parse(JSON.stringify(trEntry.study));
    out.study.id = lvEntry.study.id;
    out.study.layout = lvEntry.study.layout;
    if (lvEntry.study.sectionAccents) out.study.sectionAccents = trEntry.study?.sectionAccents || lvEntry.study.sectionAccents;
    if (lvEntry.study.accent !== undefined) out.study.accent = lvEntry.study.accent;
    if (lvEntry.study.variants) out.study.variants = lvEntry.study.variants;
    if (Array.isArray(lvEntry.study.examples) && Array.isArray(out.study.examples)) {
      lvEntry.study.examples.forEach((ex, i) => {
        if (out.study.examples[i]) out.study.examples[i].de = ex.de;
      });
    }
    if (Array.isArray(lvEntry.study.comparison) && Array.isArray(out.study.comparison)) {
      lvEntry.study.comparison.forEach((row, i) => {
        if (out.study.comparison[i]) {
          out.study.comparison[i].word = row.word;
          const tex = row.example || "";
          const hex = out.study.comparison[i].example || "";
          if (tex.includes("–") || tex.includes("—") || tex.includes("-")) {
            const sep = tex.match(/\s*[–—-]\s*/);
            if (sep) {
              const dePart = tex.split(sep[0])[0];
              const csNative = hex.split(/\s*[–—-]\s*/).pop() || hex;
              out.study.comparison[i].example = `${dePart}${sep[0]}${csNative.trim()}`;
            }
          }
        }
      });
    }
    if (Array.isArray(out.study.words) && Array.isArray(lvEntry.study.words)) {
      lvEntry.study.words.forEach((w, i) => {
        if (out.study.words[i]) out.study.words[i].de = w.de;
      });
    }
    if (Array.isArray(out.study.comparisonTable) && Array.isArray(lvEntry.study.comparisonTable)) {
      lvEntry.study.comparisonTable.forEach((row, i) => {
        if (out.study.comparisonTable[i]) out.study.comparisonTable[i].de = row.de;
      });
    }
  }
  return out;
}

function loadData(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function writeArrayFile(filePath, varName, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

function mirror(relPath) {
  const www = relPath.replace(/^data\//, "www/data/");
  const src = path.join(ROOT, relPath);
  const dst = path.join(ROOT, www);
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(src, dst);
  }
}

function mirrorLang(relPath) {
  const www = relPath.replace(/^languages\//, "www/languages/");
  const src = path.join(ROOT, relPath);
  const dst = path.join(ROOT, www);
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(src, dst);
  }
}

function extractUiTrainingCards() {
  const ui = fs.readFileSync(path.join(ROOT, "www/ui.js"), "utf8");
  const cards = {};
  for (let n = 1; n <= 6; n++) {
    const re = new RegExp(`const lesson${n}TrainingCards = (\\[[\\s\\S]*?\\n\\]);`);
    const m = ui.match(re);
    if (!m) throw new Error(`lesson${n}TrainingCards not found`);
    const ctx = {};
    vm.createContext(ctx);
    vm.runInContext(`result = ${m[1]}`, ctx);
    cards[`lesson${n}TrainingCards`] = ctx.result;
  }
  const m7 = ui.match(/const lesson7ExerciseCards = (\[[\s\S]*?\n\]);/);
  if (!m7) throw new Error("lesson7ExerciseCards not found");
  const ctx7 = {};
  vm.createContext(ctx7);
  vm.runInContext(`result = ${m7[1]}`, ctx7);
  cards.lesson7ExerciseCards = ctx7.result;
  return cards;
}

function collectUiStrings(obj, out) {
  if (obj == null) return;
  if (typeof obj === "string") {
    if (obj.trim() && !obj.startsWith("__")) out.add(obj);
    return;
  }
  if (Array.isArray(obj)) obj.forEach((v) => collectUiStrings(v, out));
  else if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "__langCode") continue;
      collectUiStrings(v, out);
    }
  }
}

function applyUiMap(obj, map) {
  if (obj == null) return obj;
  if (typeof obj === "string") return postProcess(map[obj] ?? obj);
  if (Array.isArray(obj)) return obj.map((v) => applyUiMap(v, map));
  if (typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k === "__langCode") { out[k] = "cs"; continue; }
      out[k] = applyUiMap(v, map);
    }
    return out;
  }
  return obj;
}

async function translateHtmlLesson(html, map) {
  if (!html) return html;
  let result = html;
  const matches = [...String(html).matchAll(/>([^<]{2,400})</g)];
  const seen = new Set();
  for (const match of matches) {
    const text = match[1].trim();
    if (!text || seen.has(text)) continue;
    seen.add(text);
    const tr = map[text] ? postProcess(map[text]) : text;
    if (tr !== text) result = result.split(`>${text}<`).join(`>${tr}<`);
  }
  return result;
}

async function main() {
  const writeOnly = process.argv.includes("--write-only");
  const uiOnly = process.argv.includes("--ui-only");
  const dataOnly = process.argv.includes("--data-only");

  console.log("=== CS-DE audit fix: collecting LV strings ===");
  const allStrings = new Set();

  const lvA1 = loadData("data/a1.js").A1_WORDS;
  const lvA2 = loadData("data/a2.js").A2_WORDS;
  const lvB1 = loadData("data/b1.js").B1_WORDS;
  const lvB2 = loadData("data/b2.js").B2_WORDS;
  const lvC1 = loadData("data/c1.js").C1_WORDS;
  const lvC2 = loadData("data/c2.js").C2_WORDS;
  const lvSentences = loadData("data/sentences.js").SENTENCE_ENTRIES;
  const lvVerbs = loadData("data/verbs.js").VERB_ENTRIES;
  const lvDialogue = loadData("data/dialogueIdMap.js").DIALOGUE_ID_MAP;
  const lvCourse = loadData("data/courseLessons.js");

  [lvA1, lvA2, lvB1, lvB2, lvC1, lvC2, lvSentences].forEach((arr) => arr.forEach((e) => collectStrings(e, allStrings)));
  lvVerbs.forEach((e) => collectStrings(e, allStrings));
  Object.values(lvDialogue).forEach((e) => collectStrings(e, allStrings));
  Object.values(lvCourse.COURSE_LESSON_DATA || {}).forEach((e) => collectStrings(e, allStrings));
  Object.values(lvCourse.COURSE_LESSON_HTML || {}).forEach((html) => {
    [...String(html).matchAll(/>([^<]{2,400})</g)].forEach((m) => {
      const t = m[1].trim();
      if (t) allStrings.add(t);
    });
  });

  const training = extractUiTrainingCards();
  Object.values(training).forEach((deck) => {
    deck.forEach((c) => {
      if (c.front) allStrings.add(c.front);
      if (c.lv) allStrings.add(c.lv);
    });
  });

  const unique = [...allStrings].filter((s) => s && s.trim());
  console.log(`Found ${unique.length} unique LV strings to translate`);

  let map;
  if (writeOnly) {
    const cache = loadCache(CACHE_PATH);
    map = {};
    unique.forEach((s) => { map[s] = postProcess(cache[cacheKey(FROM, TO, s)] || s); });
  } else if (!uiOnly) {
    map = await translateAll(unique, FROM, TO, {
      cachePath: CACHE_PATH,
      delayMs: 30,
      concurrency: 15,
      onProgress: (n, rem) => { if (n % 200 === 0) console.log(`  data: ${n} translated (~${rem} left)`); },
    });
    for (const [k, v] of Object.entries(map)) map[k] = postProcess(v);
  }

  if (!uiOnly && map) {
    function mergeLevel(lvArr) {
      return lvArr.map((lvEntry) => {
        const trEntry = applyTranslation(lvEntry, map);
        const out = preserveGermanFields(lvEntry, trEntry);
        const manual = MANUAL_STUDY[out.de];
        if (manual) {
          out.lv = manual.lv;
          if (out.study) out.study.translation = manual.translation;
        }
        if (out.de === "Apfel" && out.lv === "Apple") out.lv = "Jablko";
        return out;
      });
    }

    console.log("Writing level files...");
    fs.mkdirSync(CS_DIR, { recursive: true });
    writeArrayFile(path.join(CS_DIR, "a1.js"), "A1_WORDS", mergeLevel(lvA1));
    writeArrayFile(path.join(CS_DIR, "a2.js"), "A2_WORDS", mergeLevel(lvA2));
    writeArrayFile(path.join(CS_DIR, "b1.js"), "B1_WORDS", mergeLevel(lvB1));
    writeArrayFile(path.join(CS_DIR, "b2.js"), "B2_WORDS", mergeLevel(lvB2));
    writeArrayFile(path.join(CS_DIR, "c1.js"), "C1_WORDS", mergeLevel(lvC1));
    writeArrayFile(path.join(CS_DIR, "c2.js"), "C2_WORDS", mergeLevel(lvC2));
    writeArrayFile(path.join(CS_DIR, "sentences.js"), "SENTENCE_ENTRIES", mergeLevel(lvSentences));

    console.log("Writing verbs...");
    const csVerbs = lvVerbs.map((lvEntry) => {
      const te = {};
      for (const form of Object.keys(lvEntry)) {
        te[form] = { de: lvEntry[form].de, lv: postProcess(map[lvEntry[form].lv] || lvEntry[form].lv) };
      }
      return te;
    });
    writeArrayFile(path.join(CS_DIR, "verbs.js"), "VERB_ENTRIES", csVerbs);

    console.log("Writing dialogueIdMap...");
    const csDialogue = {};
    for (const [id, lvEntry] of Object.entries(lvDialogue)) {
      csDialogue[id] = { de: lvEntry.de, lv: postProcess(map[lvEntry.lv] || lvEntry.lv) };
    }
    fs.writeFileSync(
      path.join(CS_DIR, "dialogueIdMap.js"),
      `const DIALOGUE_ID_MAP = ${JSON.stringify(csDialogue, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
      "utf8"
    );

    fs.copyFileSync(path.join(ROOT, "data/nounArticles.js"), path.join(CS_DIR, "nounArticles.js"));

    console.log("Writing courseLessons...");
    const csHtml = {};
    for (const [key, html] of Object.entries(lvCourse.COURSE_LESSON_HTML || {})) {
      csHtml[key] = await translateHtmlLesson(html, map);
    }
    const csData = applyTranslation(lvCourse.COURSE_LESSON_DATA, map);
    for (let n = 1; n <= 7; n++) {
      const key = `kurssLesson${n}`;
      if (csData[key]) csData[key].legacyHtml = `__REF__${key}`;
    }
    let dataJson = JSON.stringify(csData, null, 2);
    for (let n = 1; n <= 7; n++) {
      const key = `kurssLesson${n}`;
      dataJson = dataJson.replace(`"legacyHtml": "__REF__${key}"`, `"legacyHtml": COURSE_LESSON_HTML.${key}`);
    }
    fs.writeFileSync(
      path.join(CS_DIR, "courseLessons.js"),
      `const COURSE_LESSON_HTML = ${JSON.stringify(csHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
      "utf8"
    );

    console.log("Writing courseTrainingCards...");
    const outLines = ["// Czech course training cards for CS-DE Kurss lessons 1-7.\n"];
    for (let n = 1; n <= 6; n++) {
      const key = `lesson${n}TrainingCards`;
      const deck = training[key].map((c) => ({
        front: postProcess(map[c.front] || c.front),
        back: c.back,
      }));
      outLines.push(`window.lesson${n}TrainingCardsCs = ${JSON.stringify(deck, null, 2)};\n`);
    }
    const ex = training.lesson7ExerciseCards.map((c) => ({
      infinitive: c.infinitive,
      lv: postProcess(map[c.lv] || c.lv),
      du: c.du,
      ihr: c.ihr,
      sie: c.sie,
    }));
    outLines.push(`window.lesson7ExerciseCardsCs = ${JSON.stringify(ex, null, 2)};\n`);
    fs.writeFileSync(path.join(CS_DIR, "courseTrainingCards.js"), outLines.join("\n"), "utf8");

    for (const f of ["a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js", "sentences.js", "verbs.js", "dialogueIdMap.js", "nounArticles.js", "courseLessons.js", "courseTrainingCards.js"]) {
      mirror(`data/cs/${f}`);
    }
  }

  if (!dataOnly) {
    console.log("Fixing UI from LV template...");
    const lvUiCode = fs.readFileSync(path.join(ROOT, "languages/lv/ui.js"), "utf8");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(lvUiCode, ctx);
    const lvUi = ctx.window.LANGUAGE_UI_STRINGS;
    const uiStrings = new Set();
    collectUiStrings(lvUi, uiStrings);
    const uiUnique = [...uiStrings].filter((s) => s && s.trim());

    let uiMap;
    if (writeOnly) {
      const cache = loadCache(UI_CACHE_PATH);
      uiMap = {};
      uiUnique.forEach((s) => { uiMap[s] = postProcess(cache[cacheKey(FROM, TO, s)] || s); });
    } else {
      uiMap = await translateAll(uiUnique, FROM, TO, {
        cachePath: UI_CACHE_PATH,
        delayMs: 30,
        concurrency: 15,
        onProgress: (n, rem) => { if (n % 50 === 0) console.log(`  UI: ${n} translated (~${rem} left)`); },
      });
      for (const [k, v] of Object.entries(uiMap)) uiMap[k] = postProcess(v);
    }

    const csUi = applyUiMap(lvUi, uiMap);
    csUi.__langCode = "cs";
    if (csUi.app) {
      csUi.app.title = "Němčina • CS-DE";
      csUi.app.subtitle = "Váš inteligentní průvodce němčinou podle úrovní";
      csUi.app.shellLabel = "Německo-české kartičky";
    }
    if (csUi.splash) {
      csUi.splash.title = "Němčina";
      csUi.splash.subtitle = "Učte se němčinu";
    }
    if (csUi.languageSelect) {
      csUi.languageSelect.title = "Vyberte jazyk";
      csUi.languageSelect.footer = "Učte se němčinu";
    }
    if (csUi.study?.table) csUi.study.table.native = "CS";
    if (csUi.spelling) {
      csUi.spelling.writeNative = "Pište česky";
      csUi.spelling.writeGerman = "Pište německy";
    }

    const csUiDir = path.join(ROOT, "languages/cs");
    fs.mkdirSync(csUiDir, { recursive: true });
    fs.writeFileSync(path.join(csUiDir, "ui.js"), `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(csUi, null, 2)};\n`, "utf8");
    mirrorLang("languages/cs/ui.js");
    console.log("UI written.");
  }

  console.log("\nDone. Run fix-cs-de-fields.js and fix-cs-highlight-mismatches.js next.");
}

main().catch((err) => { console.error(err); process.exit(1); });
