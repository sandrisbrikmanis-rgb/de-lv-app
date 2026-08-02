#!/usr/bin/env node
/**
 * Fix ES-DE audit findings: rebuild native (lv) fields from LV source with LV→ES translation,
 * fix Kurss, courseTrainingCards, UI strings, and specific audit items.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, translateAll, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".es-lv-translation-cache.json");
const FROM = "lv";
const TO = "es";
const LV_CHARS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const ET_CHARS = /[äõöüšžÄÕÖÜŠŽ]/;
const SKIP_KEYS = new Set(["de", "de_article", "de_plural", "id", "layout", "level", "infinitive", "du", "ihr", "sie"]);

const NAME_REPLACEMENTS = [
  [/\bPēteris\b/g, "Pedro"], [/\bPētera\b/g, "Pedro"],
  [/\bJānis\b/g, "Juan"], [/\bJāņa\b/g, "Juan"],
  [/\bRūdolfs\b/g, "Rodolfo"], [/\bRoberts\b/g, "Roberto"],
  [/\bPērkons\b/g, "trueno"], [/\bRībēt\b/g, "retumbar"], [/\bDārdēt\b/g, "tronar"],
];

const SPANISH_TEMPLATES = [
  [/^Galvenā doma:\s*/gi, "Idea principal: "],
  [/^Galvenā ideja:\s*/gi, "Idea principal: "],
  [/ galvenokārt nozīmē:\s*/gi, " significa principalmente: "],
  [/Bieži raksturo:\s*/gi, "A menudo describe: "],
  [/ raksturo\s+/gi, " describe "],
  [/^Lieto, kad\s+/i, "Se usa cuando "],
  [/^Lieto, lai\s+/i, "Se usa para "],
  [/^Lieto pie\s+/i, "Se usa con "],
  [/^Lieto\s+/i, "Se usa "],
  [/^Izmanto\s+/i, "Se usa "],
  [/^Norāda uz\s+/i, "Indica "],
  [/^Ievada\s+/i, "Introduce "],
  [/Bieži nozīmē\s+/gi, "A menudo significa "],
  [/nozīmē\s+/gi, "significa "],
  [/latviešu/gi, "español"], [/Latviešu/g, "Español"], [/latviski/gi, "en español"],
  [/Latviski/g, "En español"],
  [/Pirmā lekcija/g, "Primera lección"], [/Otrā lekcija/g, "Segunda lección"],
  [/Trešā lekcija/g, "Tercera lección"], [/Septītā lekcija/g, "Séptima lección"],
  [/darbības vārdi tagadnē/gi, "verbos en presente"],
  [/Dialogi \/ teikumi/g, "Diálogos / frases"],
  [/Pārtulko/g, "Traduce"], [/pārtulkošana/gi, "traducción"],
  [/Nominatīvs/g, "Nominativo"], [/Akkusatīvs/g, "Acusativo"], [/Datīvs/g, "Dativo"],
  [/Piemēri/g, "Ejemplos"], [/Svarīgi/g, "Importante"], [/Padoms/g, "Consejo"],
  [/Atceries/g, "Recuerda"], [/Atceries:/g, "Recuerda:"],
  [/Feliz/g, "Se usa"], [/Laatvārds/g, "sustantivo"], [/Laatvārdiem/g, "sustantivos"],
  [/dzimte/gi, "género"], [/dzimtes/gi, "género"],
  [/Klikšķini/g, "Haz clic"], [/Kopsavilkums/g, "Resumen"],
  [/Pavēles izteiksme/g, "Imperativo"], [/pavēles izteiksme/gi, "imperativo"],
  [/tagadnē/gi, "presente"], [/daudzskaitlis/gi, "plural"],
  [/vienskaitlis/gi, "singular"], [/lietvārdu/gi, "sustantivo"],
  [/darbības vārdu/gi, "verbo"], [/darbības vārds/gi, "verbo"],
  [/darbības vārdi/gi, "verbos"], [/gramatika/gi, "gramática"],
  [/izruna/gi, "pronunciación"], [/teikumu/gi, "frase"],
  [/Lekcija (\d+)/g, "Lección $1"],
  [/artikuls/gi, "artículo"], [/Artikuli/g, "Artículos"],
  [/Līdzskaņi/g, "Consonantes"], [/Patskaņi/g, "Vocales"],
  [/Vietniekvārdi/g, "Pronombres"],
  [/Happy\b/g, "Se usa"], [/happyas\b/g, "como"],
];

const MANUAL_STUDY_TRANSLATION = {
  an: { lv: "Desde • Hasta • En", translation: "Desde • Hasta • En" },
  Bank: { lv: "Banco", translation: "Banco • Banco (asiento) • Banco (río)" },
  Leiter: { lv: "Jefe", translation: "Jefe • Escalera" },
  "sich bedienen": { lv: "Servirse", translation: "Servirse" },
  Nachdruck: { lv: "Énfasis", translation: "Énfasis • Reedición" },
};

function toSpanish(text) {
  if (!text || typeof text !== "string") return text;
  let out = text;
  for (const [from, to] of NAME_REPLACEMENTS) out = out.replace(from, to);
  for (const [re, rep] of SPANISH_TEMPLATES) out = out.replace(re, rep);
  return out;
}

function hasLvText(text) {
  return typeof text === "string" && LV_CHARS.test(text);
}

function hasForeignUiText(text) {
  return typeof text === "string" && (LV_CHARS.test(text) || ET_CHARS.test(text));
}

function loadWindow(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function loadArrayParts(relPath) {
  const raw = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const arrStart = raw.indexOf("[");
  const arrEnd = raw.lastIndexOf("]");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  const key = Object.keys(ctx.window).find((k) => k.endsWith("_WORDS") || k.endsWith("_ENTRIES"));
  return { arr: ctx.window[key], prefix: raw.slice(0, arrStart), suffix: raw.slice(arrEnd + 1), key };
}

function writeArrayParts(relPath, parts) {
  fs.writeFileSync(path.join(ROOT, relPath), parts.prefix + JSON.stringify(parts.arr, null, 2) + parts.suffix);
  mirror(relPath);
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

function collectStrings(value, out, parentKey = "") {
  if (value == null) return;
  if (typeof value === "string") {
    if (hasLvText(value) || (parentKey !== "de" && !SKIP_KEYS.has(parentKey) && hasForeignUiText(value))) {
      out.add(value);
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((v) => collectStrings(v, out, parentKey));
    return;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (SKIP_KEYS.has(k)) continue;
      collectStrings(v, out, k);
    }
  }
}

function applyMap(value, map, parentKey = "") {
  if (value == null) return value;
  if (typeof value === "string") {
    if (SKIP_KEYS.has(parentKey)) return value;
    if (map[value]) return toSpanish(map[value]);
    if (hasLvText(value) || hasForeignUiText(value)) {
      let out = value;
      const sorted = Object.keys(map).sort((a, b) => b.length - a.length);
      for (const src of sorted) {
        if (src && out.includes(src)) out = out.split(src).join(map[src]);
      }
      return toSpanish(out);
    }
    return toSpanish(value);
  }
  if (Array.isArray(value)) return value.map((v) => applyMap(v, map, parentKey));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = SKIP_KEYS.has(k) ? v : applyMap(v, map, k);
    }
    return out;
  }
  return value;
}

function findInText(text, candidates) {
  if (!text) return null;
  const lower = text.toLowerCase();
  let best = null;
  for (const cand of candidates) {
    if (!cand) continue;
    const idx = lower.indexOf(cand.toLowerCase());
    if (idx !== -1 && (!best || cand.length > best.length)) best = cand;
  }
  return best;
}

function asArray(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function extractPurple(accent) {
  if (!accent) return [];
  if (Array.isArray(accent)) return accent.flatMap((x) => (x && x.purple) ? x.purple : []);
  return accent.purple || [];
}

function syncSectionAccents(lvStudy, esStudy, map) {
  if (!lvStudy?.sectionAccents || !esStudy) return;
  const esSA = esStudy.sectionAccents || (esStudy.sectionAccents = {});

  function purpleFromEsText(lvTerms, esText) {
    const terms = asArray(lvTerms);
    const translated = terms.map((t) => toSpanish(map[t] || t));
    const fromText = translated.map((t) => findInText(esText, [t])).filter(Boolean);
    return fromText.length ? fromText : translated;
  }

  if (lvStudy.sectionAccents.tip) {
    const tipText = typeof esStudy.tip === "object" && esStudy.tip?.text
      ? esStudy.tip.text
      : Array.isArray(esStudy.tip) ? esStudy.tip.join(" ") : String(esStudy.tip || "");
    const lvPurple = extractPurple(lvStudy.sectionAccents.tip);
    if (lvPurple.length) {
      const purple = purpleFromEsText(lvPurple, tipText);
      if (Array.isArray(esSA.tip)) esSA.tip = [{ purple }];
      else esSA.tip = { purple };
    }
  }

  if (Array.isArray(lvStudy.sectionAccents.examples) && Array.isArray(esStudy.examples)) {
    if (!Array.isArray(esSA.examples)) esSA.examples = [];
    lvStudy.sectionAccents.examples.forEach((lvRow, i) => {
      if (!esStudy.examples[i]) return;
      if (!esSA.examples[i]) esSA.examples[i] = {};
      if (lvRow.lv && esStudy.examples[i].lv) {
        const lvPurple = extractPurple(lvRow.lv);
        if (lvPurple.length) {
          const purple = purpleFromEsText(lvPurple, esStudy.examples[i].lv);
          esSA.examples[i].lv = { purple };
        }
      }
    });
  }

  ["important", "explanation"].forEach((section) => {
    const lvSec = lvStudy.sectionAccents[section];
    if (!lvSec) return;
    const lvPurple = extractPurple(lvSec);
    if (!lvPurple.length) return;
    const text = JSON.stringify(esStudy[section] || "");
    const purple = purpleFromEsText(lvPurple, text);
    if (Array.isArray(esSA[section])) esSA[section] = [{ purple }];
    else esSA[section] = { purple };
  });
}

function extractUiTrainingCards() {
  const ui = fs.readFileSync(path.join(ROOT, "www/ui.js"), "utf8");
  const cards = {};
  for (let n = 1; n <= 6; n++) {
    const re = new RegExp(`const lesson${n}TrainingCards = (\\[[\\s\\S]*?\\n\\]);`);
    const m = ui.match(re);
    if (!m) throw new Error(`lesson${n}TrainingCards not found in ui.js`);
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

function writeCourseTrainingCards(cards, map) {
  const lines = ["// Spanish course training cards for ES-DE Kurss lessons 1-7.\n"];
  for (let n = 1; n <= 6; n++) {
    const key = `lesson${n}TrainingCards`;
    const deck = cards[key].map((c) => ({
      front: toSpanish(map[c.front] || c.front),
      back: c.back,
    }));
    lines.push(`window.lesson${n}TrainingCardsEs = ${JSON.stringify(deck, null, 2)};\n`);
  }
  const ex = cards.lesson7ExerciseCards.map((c) => ({
    infinitive: c.infinitive,
    lv: toSpanish(map[c.lv] || c.lv),
    du: c.du,
    ihr: c.ihr,
    sie: c.sie,
  }));
  lines.push(`window.lesson7ExerciseCardsEs = ${JSON.stringify(ex, null, 2)};\n`);
  fs.writeFileSync(path.join(ROOT, "data/es/courseTrainingCards.js"), lines.join("\n"));
  mirror("data/es/courseTrainingCards.js");
}

function writeCourseLessons(html, data) {
  for (let n = 1; n <= 7; n++) {
    const key = `kurssLesson${n}`;
    if (data[key]) {
      data[key].legacyHtml = `__REF__${key}`;
      if (hasLvText(data[key].title)) {
        data[key].title = html[key]?.match(/<h3>([^<]+)/)?.[1]?.trim() || data[key].title;
      }
    }
  }

  if (html.kurssArticlesLesson) {
    html.kurssArticlesLesson = html.kurssArticlesLesson
      .replace(/latviešu dzimti/gi, "género en español")
      .replace(/Latvian family/gi, "género en español");
  }

  let dataJson = JSON.stringify(data, null, 2);
  for (let n = 1; n <= 7; n++) {
    const key = `kurssLesson${n}`;
    dataJson = dataJson.replace(`"legacyHtml": "__REF__${key}"`, `"legacyHtml": COURSE_LESSON_HTML.${key}`);
  }

  const out = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(path.join(ROOT, "data/es/courseLessons.js"), out);
  mirror("data/es/courseLessons.js");
}

function translateUiStrings(lvUi, map) {
  const esUi = JSON.parse(JSON.stringify(lvUi));
  esUi.__langCode = "es";
  esUi.splash = {
    title: "Alemán",
    subtitle: "Aprender alemán",
  };
  esUi.languageSelect = {
    title: "Elegir idioma",
    footer: "Aprender alemán",
  };
  esUi.app = {
    title: "Alemán • ES-DE",
    subtitle: map[lvUi.app.subtitle] || "Tu guía inteligente para aprender alemán por nivel",
    shellLabel: map[lvUi.app.shellLabel] || "Tarjetas Alemán–Español",
  };

  function walk(obj) {
    if (obj == null) return obj;
    if (typeof obj === "string") {
      if (obj.includes("{code}") || obj.includes("{count}") || obj.includes("{word}") ||
          obj.includes("{label}") || obj.includes("{title}") || obj.includes("{lesson}") ||
          obj.includes("{current}") || obj.includes("{total}") || obj.includes("{char}") ||
          obj.includes("{words}") || obj.includes("{tap}")) {
        let out = obj;
        const placeholders = obj.match(/\{[^}]+\}/g) || [];
        const temp = {};
        placeholders.forEach((ph, i) => {
          const key = `__PH${i}__`;
          temp[key] = ph;
          out = out.replace(ph, key);
        });
        out = toSpanish(map[out] || out);
        for (const [key, ph] of Object.entries(temp)) out = out.replace(key, ph);
        return out;
      }
      return toSpanish(map[obj] || obj);
    }
    if (Array.isArray(obj)) return obj.map(walk);
    if (typeof obj === "object") {
      const out = {};
      for (const [k, v] of Object.entries(obj)) {
        if (k === "__langCode" || k === "splash" || k === "languageSelect" || k === "app") continue;
        out[k] = walk(v);
      }
      return out;
    }
    return obj;
  }

  const walked = walk(esUi);
  walked.__langCode = "es";
  walked.splash = esUi.splash;
  walked.languageSelect = esUi.languageSelect;
  walked.app = esUi.app;
  walked.spelling = walked.spelling || {};
  walked.spelling.writeNative = "Escribe en español";
  walked.study = walked.study || {};
  if (walked.study.table) walked.study.table.native = "ES";
  return walked;
}

function writeUiFile(esUi) {
  const content = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(esUi, null, 2)};\n`;
  fs.writeFileSync(path.join(ROOT, "languages/es/ui.js"), content);
  fs.writeFileSync(path.join(ROOT, "www/languages/es/ui.js"), content);
}

async function main() {
  const writeOnly = process.argv.includes("--write-only");
  console.log("Collecting strings to translate...");
  const allStrings = new Set();

  const lvLevels = {};
  for (const lvl of ["a1", "a2", "b1", "b2", "c1", "c2"]) {
    lvLevels[lvl] = loadArrayParts(`data/${lvl}.js`);
    for (const w of lvLevels[lvl].arr) {
      if (w.lv) allStrings.add(w.lv);
      if (w.study) collectStrings(w.study, allStrings);
    }
  }

  const lvSentences = loadArrayParts("data/sentences.js");
  lvSentences.arr.forEach((s) => { if (s.lv) allStrings.add(s.lv); });

  const lvVerbs = loadArrayParts("data/verbs.js");
  lvVerbs.arr.forEach((v) => Object.values(v).forEach((pair) => { if (pair?.lv) allStrings.add(pair.lv); }));

  const training = extractUiTrainingCards();
  Object.values(training).forEach((deck) => {
    deck.forEach((c) => {
      if (c.front) allStrings.add(c.front);
      if (c.lv) allStrings.add(c.lv);
    });
  });

  const lvCourse = loadWindow("data/courseLessons.js");
  collectStrings(lvCourse.COURSE_LESSON_HTML, allStrings);
  collectStrings(lvCourse.COURSE_LESSON_DATA, allStrings);

  const lvUiCode = fs.readFileSync(path.join(ROOT, "languages/lv/ui.js"), "utf8")
    .replace("window.LANGUAGE_UI_STRINGS", "LANGUAGE_UI_STRINGS");
  const lvUiCtx = {};
  vm.createContext(lvUiCtx);
  vm.runInContext(lvUiCode, lvUiCtx);
  collectStrings(lvUiCtx.LANGUAGE_UI_STRINGS, allStrings);

  const unique = [...allStrings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} unique strings LV→ES...`);

  let map;
  if (writeOnly) {
    const cache = loadCache(CACHE_PATH);
    map = {};
    unique.forEach((s) => { map[s] = toSpanish(cache[cacheKey(FROM, TO, s)] || s); });
  } else {
    map = await translateAll(unique, FROM, TO, {
      cachePath: CACHE_PATH,
      delayMs: 50,
      concurrency: 8,
      onProgress: (n, rem) => { if (n % 100 === 0) console.log(`  translated ${n} (~${rem} left)`); },
    });
    saveCache(CACHE_PATH, loadCache(CACHE_PATH));
  }

  console.log("Rebuilding level word files from LV source...");
  for (const lvl of ["a1", "a2", "b1", "b2", "c1", "c2"]) {
    const lvArr = lvLevels[lvl].arr;
    const esArr = lvArr.map((lv) => {
      const es = JSON.parse(JSON.stringify(lv));
      if (es.lv) es.lv = toSpanish(map[es.lv] || es.lv);
      const manual = MANUAL_STUDY_TRANSLATION[es.de];
      if (manual) {
        es.lv = manual.lv;
        if (es.study) es.study.translation = manual.translation;
      }
      if (es.study) {
        es.study = applyMap(lv.study, map);
        if (es.study.translation) es.study.translation = toSpanish(map[lv.study?.translation] || es.study.translation);
        syncSectionAccents(lv.study, es.study, map);
      }
      return es;
    });
    const parts = loadArrayParts(`data/es/${lvl}.js`);
    parts.arr = esArr;
    writeArrayParts(`data/es/${lvl}.js`, parts);
  }

  console.log("Rebuilding sentences...");
  const esSentences = {
    ...lvSentences,
    arr: lvSentences.arr.map((s) => ({
      ...s,
      lv: toSpanish(map[s.lv] || s.lv),
    })),
  };
  writeArrayParts("data/es/sentences.js", esSentences);

  console.log("Rebuilding verbs...");
  const esVerbs = {
    ...lvVerbs,
    arr: lvVerbs.arr.map((lvEntry) => {
      const out = {};
      for (const [form, pair] of Object.entries(lvEntry)) {
        out[form] = { de: pair.de, lv: toSpanish(map[pair.lv] || pair.lv) };
      }
      return out;
    }),
  };
  writeArrayParts("data/es/verbs.js", esVerbs);

  console.log("Fixing courseTrainingCards...");
  writeCourseTrainingCards(training, map);

  console.log("Fixing courseLessons...");
  const esHtml = applyMap(lvCourse.COURSE_LESSON_HTML, map);
  const esData = applyMap(lvCourse.COURSE_LESSON_DATA, map);
  writeCourseLessons(esHtml, esData);

  console.log("Fixing UI strings...");
  const esUi = translateUiStrings(lvUiCtx.LANGUAGE_UI_STRINGS, map);
  writeUiFile(esUi);

  console.log("Done.");
}

main().catch((err) => { console.error(err); process.exit(1); });
