#!/usr/bin/env node
/**
 * Fix EN-DE audit findings: translate remaining LV/LT remnants to British English,
 * fix Kurss legacyHtml, courseTrainingCards, UI strings, and specific audit items.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, translateAll, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".en-lv-translation-cache.json");
const FROM = "lv";
const TO = "en-GB";
const LV_CHARS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const LT_CHARS = /[ąčęėįšųūžĄČĘĖĮŠŲŪŽ]/;

const BRITISH_SPELLINGS = [
  [/(\w)ize\b/gi, "$1ise"],
  [/(\w)ization\b/gi, "$1isation"],
  [/(\w)izing\b/gi, "$1ising"],
  [/(\w)ized\b/gi, "$1ised"],
  [/\bcolorful\b/gi, "colourful"],
  [/\bcolored\b/gi, "coloured"],
  [/\bcolor\b/gi, "colour"],
  [/\bcolors\b/gi, "colours"],
  [/\bfavor\b/gi, "favour"],
  [/\bfavorite\b/gi, "favourite"],
  [/\bhonor\b/gi, "honour"],
  [/\bbehavior\b/gi, "behaviour"],
  [/\bcenter\b/gi, "centre"],
  [/\btheater\b/gi, "theatre"],
  [/\banalyze\b/gi, "analyse"],
  [/\bdefense\b/gi, "defence"],
  [/\blicense\b/gi, "licence"],
  [/\bprogram\b/gi, "programme"],
  [/\bprograms\b/gi, "programmes"],
  [/\btraveling\b/gi, "travelling"],
  [/\btraveled\b/gi, "travelled"],
  [/\btraveler\b/gi, "traveller"],
  [/\bgray\b/gi, "grey"],
  [/\bfulfill\b/gi, "fulfil"],
  [/\bjewelry\b/gi, "jewellery"],
  [/\bdialog\b/gi, "dialogue"],
  [/\bliter\b/gi, "litre"],
  [/\bmeter\b/gi, "metre"],
];

const NAME_REPLACEMENTS = [
  [/\bPēteris\b/g, "Peter"], [/\bJānis\b/g, "John"], [/\bRūdolfs\b/g, "Rudolf"],
  [/\bRoberts\b/g, "Robert"], [/\bMarija\b/g, "Maria"], [/\bPauls\b/g, "Paul"],
  [/\bMarta\b/g, "Martha"], [/\bAlbert\b/g, "Albert"],
];

function toBritish(text) {
  if (!text || typeof text !== "string") return text;
  let out = text;
  for (const [from, to] of NAME_REPLACEMENTS) out = out.replace(from, to);
  for (const rule of BRITISH_SPELLINGS) {
    if (typeof rule[1] === "function") out = out.replace(rule[0], rule[1]);
    else out = out.replace(rule[0], rule[1]);
  }
  return out;
}

function hasLvText(text) {
  return typeof text === "string" && (LV_CHARS.test(text) || LT_CHARS.test(text));
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
  return {
    arr: ctx.window[key],
    prefix: raw.slice(0, arrStart),
    suffix: raw.slice(arrEnd + 1),
    key,
  };
}

function writeArrayParts(relPath, parts) {
  const body = JSON.stringify(parts.arr, null, 2);
  fs.writeFileSync(path.join(ROOT, relPath), parts.prefix + body + parts.suffix);
}

function mirror(relPath) {
  const www = relPath.replace(/^data\//, "www/data/");
  if (fs.existsSync(path.join(ROOT, relPath))) {
    fs.mkdirSync(path.dirname(path.join(ROOT, www)), { recursive: true });
    fs.copyFileSync(path.join(ROOT, relPath), path.join(ROOT, www));
  }
}

function collectStrings(value, out, parentKey = "") {
  if (value == null) return;
  if (typeof value === "string") {
    if (hasLvText(value)) out.add(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((v) => collectStrings(v, out, parentKey));
    return;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (k === "de" || k === "de_article" || k === "de_plural" || k === "id" || k === "layout" || k === "level") continue;
      collectStrings(v, out, k);
    }
  }
}

function applyMap(value, map, parentKey = "") {
  if (value == null) return value;
  if (typeof value === "string") {
    if (map[value]) return map[value];
    if (hasLvText(value)) {
      let out = value;
      for (const [src, tr] of Object.entries(map)) {
        if (src && out.includes(src)) out = out.split(src).join(tr);
      }
      return toBritish(out);
    }
    return toBritish(value);
  }
  if (Array.isArray(value)) return value.map((v) => applyMap(v, map, parentKey));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = applyMap(v, map, k);
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
  if (Array.isArray(accent)) {
    return accent.flatMap((x) => (x && x.purple) ? x.purple : []);
  }
  return accent.purple || [];
}

function syncSectionAccents(lvStudy, enStudy, map) {
  if (!lvStudy?.sectionAccents || !enStudy) return;
  const enSA = enStudy.sectionAccents || (enStudy.sectionAccents = {});

  function purpleFromEnText(lvTerms, enText) {
    const terms = asArray(lvTerms);
    const translated = terms.map((t) => map[t] || toBritish(t));
    const fromText = translated.map((t) => findInText(enText, [t])).filter(Boolean);
    return fromText.length ? fromText : translated;
  }

  if (lvStudy.sectionAccents.tip) {
    const tipText = typeof enStudy.tip === "object" && enStudy.tip?.text
      ? enStudy.tip.text
      : Array.isArray(enStudy.tip) ? enStudy.tip.join(" ") : String(enStudy.tip || "");
    const lvPurple = extractPurple(lvStudy.sectionAccents.tip);
    if (lvPurple.length) {
      const purple = purpleFromEnText(lvPurple, tipText);
      if (Array.isArray(enSA.tip)) enSA.tip = [{ purple }];
      else enSA.tip = { purple };
    }
  }

  if (Array.isArray(lvStudy.sectionAccents.examples) && Array.isArray(enStudy.examples)) {
    if (!Array.isArray(enSA.examples)) enSA.examples = [];
    lvStudy.sectionAccents.examples.forEach((lvRow, i) => {
      if (!enStudy.examples[i]) return;
      if (!enSA.examples[i]) enSA.examples[i] = {};
      if (lvRow.lv && enStudy.examples[i].lv) {
        const lvPurple = extractPurple(lvRow.lv);
        if (lvPurple.length) {
          const purple = purpleFromEnText(lvPurple, enStudy.examples[i].lv);
          enSA.examples[i].lv = { purple };
        }
      }
    });
  }

  ["important", "explanation"].forEach((section) => {
    const lvSec = lvStudy.sectionAccents[section];
    if (!lvSec) return;
    const lvPurple = extractPurple(lvSec);
    if (!lvPurple.length) return;
    const text = JSON.stringify(enStudy[section] || "");
    const purple = purpleFromEnText(lvPurple, text);
    if (Array.isArray(enSA[section])) enSA[section] = [{ purple }];
    else enSA[section] = { purple };
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
  const lines = ["// British English course training cards for EN-DE Kurss lessons 1-7.\n"];
  for (let n = 1; n <= 6; n++) {
    const key = `lesson${n}TrainingCards`;
    const deck = cards[key].map((c) => ({
      front: toBritish(map[c.front] || c.front),
      back: c.back,
    }));
    lines.push(`window.lesson${n}TrainingCardsEn = ${JSON.stringify(deck, null, 2)};\n`);
  }
  const ex = cards.lesson7ExerciseCards.map((c) => ({
    infinitive: c.infinitive,
    lv: toBritish(map[c.lv] || c.lv),
    du: c.du,
    ihr: c.ihr,
    sie: c.sie,
  }));
  lines.push(`window.lesson7ExerciseCardsEn = ${JSON.stringify(ex, null, 2)};\n`);
  const out = path.join(ROOT, "data/en/courseTrainingCards.js");
  fs.writeFileSync(out, lines.join("\n"));
  mirror("data/en/courseTrainingCards.js");
}

function writeCourseLessons(html, data) {
  for (let n = 1; n <= 7; n++) {
    const key = `kurssLesson${n}`;
    if (data[key]) {
      data[key].legacyHtml = `__REF__${key}`;
      if (hasLvText(data[key].title)) data[key].title = html[key]?.match(/<h3>([^<]+)/)?.[1]?.trim() || data[key].title;
    }
  }

  if (html.kurssArticlesLesson) {
    html.kurssArticlesLesson = html.kurssArticlesLesson
      .replace(/Latvian family/g, "English gender system")
      .replace(/latviešu ģimenes/g, "English gender system");
  }

  let dataJson = JSON.stringify(data, null, 2);
  for (let n = 1; n <= 7; n++) {
    const key = `kurssLesson${n}`;
    dataJson = dataJson.replace(`"legacyHtml": "__REF__${key}"`, `"legacyHtml": COURSE_LESSON_HTML.${key}`);
  }

  const out = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(path.join(ROOT, "data/en/courseLessons.js"), out);
  mirror("data/en/courseLessons.js");
}

const MANUAL_TOP_LV = {
  "Aizceļot • Aizbraukt": "To depart • To leave",
  "Vienīgais bērns ģimenē": "Only child in the family",
  "Smērēt": "To spread • To smear",
  "Drosme • Drošsirdība": "Courage • Bravery",
  "Telegrāfēt": "To telegraph",
  "Izmēģinājuma persona": "Test subject",
  "Tēze": "Thesis",
  "Dziļdomīgums": "Depth of thought",
  "Trakumsērga": "Rabies",
  "Muļķis • Nelga": "Fool • Trap",
};

const MANUAL_STUDY_TRANSLATION = {
  an: { lv: "At • To • Present", translation: "At • To • Present" },
  Bank: { lv: "Bank", translation: "Bank • Bench" },
  Leiter: { lv: "Manager", translation: "Manager • Ladder" },
  "sich bedienen": { lv: "To serve oneself", translation: "To serve oneself • To help yourself" },
  Nachdruck: { lv: "Emphasis", translation: "Emphasis • Reprint" },
};

const MANUAL_VERB_LV = {
  "He hay": "He hoes",
  "He coded": "He bit",
  Bursting: "To ferment",
  Sieve: "To sift",
  Rye: "Rye",
};

async function main() {
  const writeOnly = process.argv.includes("--write-only");
  console.log("Collecting strings to translate...");
  const allStrings = new Set();

  const lvLevels = {};
  const enLevels = {};
  for (const lvl of ["a1", "a2", "b1", "b2", "c1", "c2"]) {
    lvLevels[lvl] = loadArrayParts(`data/${lvl}.js`);
    enLevels[lvl] = loadArrayParts(`data/en/${lvl}.js`);
    for (let i = 0; i < lvLevels[lvl].arr.length; i++) {
      const lv = lvLevels[lvl].arr[i];
      const en = enLevels[lvl].arr[i];
      if (!lv?.study || !en?.study) continue;
      collectStrings(lv.study.tip, allStrings);
      collectStrings(lv.study.important, allStrings);
      collectStrings(lv.study.sectionAccents, allStrings);
      if (hasLvText(en.lv)) allStrings.add(en.lv);
      if (hasLvText(en.study?.translation)) allStrings.add(en.study.translation);
    }
  }

  const lvVerbs = loadArrayParts("data/verbs.js");
  const enVerbs = loadArrayParts("data/en/verbs.js");
  lvVerbs.arr.forEach((v, i) => {
    const en = enVerbs.arr[i];
    if (!en) return;
    for (const pair of Object.values(v)) {
      if (pair?.lv) allStrings.add(pair.lv);
    }
  });

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

  Object.keys(MANUAL_TOP_LV).forEach((k) => allStrings.delete(k));

  const unique = [...allStrings].filter((s) => s && s.trim() && hasLvText(s));
  console.log(`Translating ${unique.length} unique LV/LT strings...`);
  let map;
  if (writeOnly) {
    const cache = loadCache(CACHE_PATH);
    map = {};
    unique.forEach((s) => { map[s] = toBritish(cache[cacheKey(FROM, TO, s)] || s); });
    Object.assign(map, MANUAL_TOP_LV);
  } else {
    map = await translateAll(unique, FROM, TO, {
      cachePath: CACHE_PATH,
      delayMs: 50,
      concurrency: 8,
      onProgress: (n, rem) => { if (n % 100 === 0) console.log(`  translated ${n} (~${rem} left)`); },
    });
    Object.assign(map, MANUAL_TOP_LV);
    saveCache(CACHE_PATH, loadCache(CACHE_PATH));
  }

  console.log("Fixing level word files...");
  for (const lvl of ["a1", "a2", "b1", "b2", "c1", "c2"]) {
    const lvArr = lvLevels[lvl].arr;
    const enArr = enLevels[lvl].arr;
    for (let i = 0; i < enArr.length; i++) {
      const lv = lvArr[i];
      const en = enArr[i];
      if (hasLvText(en.lv)) en.lv = toBritish(map[en.lv] || en.lv);
      const manual = MANUAL_STUDY_TRANSLATION[en.de];
      if (manual) {
        en.lv = manual.lv;
        if (en.study) en.study.translation = manual.translation;
      }
      if (!lv?.study || !en?.study) continue;
      if (en.study.tip) en.study.tip = applyMap(lv.study.tip, map);
      if (en.study.important) en.study.important = applyMap(lv.study.important, map);
      if (typeof en.study.tip === "object" && en.study.tip?.text) {
        en.study.tip.text = toBritish(applyMap({ t: lv.study.tip?.text || en.study.tip.text }, map).t);
      }
      syncSectionAccents(lv.study, en.study, map);
      if (en.de === "sprechen" && Array.isArray(en.study.examples)) {
        en.study.examples = en.study.examples.map((ex) => ({
          ...ex,
          lv: ex.lv?.replace(/german/i, "German").replace(/On the wall \/ on the wall/i, "On the wall"),
        }));
      }
    }
    writeArrayParts(`data/en/${lvl}.js`, enLevels[lvl]);
    mirror(`data/en/${lvl}.js`);
  }

  console.log("Fixing verbs...");
  enVerbs.arr = lvVerbs.arr.map((lvEntry, i) => {
    const out = {};
    for (const [form, pair] of Object.entries(lvEntry)) {
      let lv = toBritish(map[pair.lv] || pair.lv);
      if (MANUAL_VERB_LV[pair.lv]) lv = MANUAL_VERB_LV[pair.lv];
      out[form] = { de: pair.de, lv };
    }
    return out;
  });
  writeArrayParts("data/en/verbs.js", enVerbs);
  mirror("data/en/verbs.js");

  console.log("Fixing courseTrainingCards...");
  writeCourseTrainingCards(training, map);

  console.log("Fixing courseLessons...");
  const enHtml = applyMap(lvCourse.COURSE_LESSON_HTML, map);
  const enData = applyMap(lvCourse.COURSE_LESSON_DATA, map);
  writeCourseLessons(enHtml, enData);

  console.log("Applying British spelling pass...");
  const enFiles = [];
  function walk(d) {
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (f.endsWith(".js")) enFiles.push(p);
    }
  }
  walk(path.join(ROOT, "data/en"));
  for (const file of enFiles) {
    let content = fs.readFileSync(file, "utf8");
    const updated = toBritish(content);
    if (updated !== content) fs.writeFileSync(file, updated);
  }
  mirror("data/en/courseLessons.js");

  console.log("Done.");
}

main().catch((err) => { console.error(err); process.exit(1); });
