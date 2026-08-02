#!/usr/bin/env node
/**
 * Fix remaining LV/ET/EN remnants in DA-DE data by re-translating flagged strings.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const DA_DIR = path.join(ROOT, "data", "da");
const CACHE_PATH = path.join(ROOT, "scripts", ".da-remnant-translation-cache.json");

const LV_DIAC = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const ET_DIAC = /[õäöüÕÄÖÜ]/;
const LV_PATTERNS =
  /Atceries:|Atcerier:|vāciski|latviski|Latviešu|Izmanto |Põhiidee:|nepareizi|pareizi|ja latviski|bieži|tähendab|nozīmē|vācu valodā/i;

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember",
]);

const REPLACEMENTS = [
  [/\bAtcerier?:/gi, "Husk:"],
  [/\bvāciski\b/gi, "på tysk"],
  [/\blatviski\b/gi, "på dansk"],
  [/\bLatviešu\b/g, "Dansk"],
  [/\bIzmanto\b/g, "Brug"],
  [/\bPõhiidee:/g, "Hovedidé:"],
  [/\bMain idea:/gi, "Hovedidé:"],
  [/\bRemember:/gi, "Husk:"],
];

function needsFix(text) {
  if (!text || typeof text !== "string") return false;
  return LV_DIAC.test(text) || ET_DIAC.test(text) || LV_PATTERNS.test(text);
}

function postProcess(text) {
  let out = text;
  for (const [from, to] of REPLACEMENTS) out = out.replace(from, to);
  return out.trim();
}

function collectRemnants(value, out, parentKey = "") {
  if (value == null) return;
  if (typeof value === "string") {
    if ((NATIVE_KEYS.has(parentKey) || parentKey === "example") && needsFix(value)) out.add(value);
    return;
  }
  if (Array.isArray(value)) value.forEach((v) => collectRemnants(v, out, parentKey));
  else if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (["de", "de_article", "de_plural", "sectionAccents", "id", "layout", "level"].includes(k)) continue;
      collectRemnants(v, out, k);
    }
  }
}

function applyMap(value, map, parentKey = "") {
  if (value == null) return value;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey) || parentKey === "example") {
      if (map[value]) return map[value];
      if (needsFix(value)) return postProcess(value);
    }
    if (parentKey === "example") {
      const dash = value.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
      if (dash) {
        const right = dash[3].trim();
        if (map[right]) return `${dash[1]}${dash[2]}${map[right]}`;
      }
      const eq = value.match(/^(.+=\s*)(.+)$/);
      if (eq) {
        const right = eq[2].trim();
        if (map[right]) return `${eq[1]}${map[right]}`;
      }
    }
    return value;
  }
  if (Array.isArray(value)) return value.map((v) => applyMap(v, map, parentKey));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === "sectionAccents") {
        out[k] = v;
        continue;
      }
      out[k] = applyMap(v, map, k);
    }
    return out;
  }
  return value;
}

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function writeArrayFile(filePath, varName, data) {
  fs.writeFileSync(
    filePath,
    `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nwindow.${varName} = ${varName};\n`,
    "utf8"
  );
}

async function main() {
  const remnants = new Set();
  const levels = ["a1", "a2", "b1", "b2", "c1", "c2"];
  const levelData = {};

  for (const level of levels) {
    const key = `${level.toUpperCase()}_WORDS`;
    levelData[level] = load(`data/da/${level}.js`)[key];
    levelData[level].forEach((e) => collectRemnants(e, remnants));
  }

  const sentences = load("data/da/sentences.js").SENTENCE_ENTRIES;
  sentences.forEach((e) => collectRemnants(e, remnants));

  const verbs = load("data/da/verbs.js").VERB_ENTRIES;
  verbs.forEach((e) => collectRemnants(e, remnants));

  const dialogue = load("data/da/dialogueIdMap.js").DIALOGUE_ID_MAP;
  Object.values(dialogue).forEach((e) => collectRemnants(e, remnants));

  const course = load("data/da/courseLessons.js");
  Object.values(course.COURSE_LESSON_DATA || {}).forEach((e) => collectRemnants(e, remnants));
  Object.values(course.COURSE_LESSON_HTML || {}).forEach((html) => {
    [...String(html).matchAll(/>([^<]{3,300})</g)].forEach((m) => {
      const t = m[1].trim();
      if (needsFix(t)) remnants.add(t);
    });
  });

  const trainingPath = path.join(DA_DIR, "courseTrainingCards.js");
  let trainingCode = "";
  if (fs.existsSync(trainingPath)) {
    trainingCode = fs.readFileSync(trainingPath, "utf8");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(trainingCode, ctx);
    Object.values(ctx.window).forEach((deck) => {
      if (Array.isArray(deck)) deck.forEach((c) => collectRemnants(c, remnants));
    });
  }

  const unique = [...remnants].filter(Boolean);
  console.log(`Found ${unique.length} remnant strings to re-translate`);

  const map = await translateAll(unique, "en", "da", {
    cachePath: CACHE_PATH,
    delayMs: 40,
    concurrency: 8,
    onProgress: (n, remaining) => {
      if (n % 100 === 0) process.stdout.write(`  re-translated ${n} (~${remaining} left)\n`);
    },
  });

  for (const [src, tr] of Object.entries(map)) {
    map[src] = postProcess(tr);
  }

  for (const level of levels) {
    const key = `${level.toUpperCase()}_WORDS`;
    const updated = levelData[level].map((e) => applyMap(e, map));
    writeArrayFile(path.join(DA_DIR, `${level}.js`), key, updated);
    console.log(`Fixed ${level}.js`);
  }

  writeArrayFile(
    path.join(DA_DIR, "sentences.js"),
    "SENTENCE_ENTRIES",
    sentences.map((e) => applyMap(e, map))
  );

  const daVerbs = verbs.map((entry) => applyMap(entry, map));
  writeArrayFile(path.join(DA_DIR, "verbs.js"), "VERB_ENTRIES", daVerbs);

  const daDialogue = {};
  for (const [id, entry] of Object.entries(dialogue)) {
    daDialogue[id] = applyMap(entry, map);
  }
  fs.writeFileSync(
    path.join(DA_DIR, "dialogueIdMap.js"),
    `const DIALOGUE_ID_MAP = ${JSON.stringify(daDialogue, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
    "utf8"
  );

  const daData = applyMap(course.COURSE_LESSON_DATA, map);
  let daHtml = course.COURSE_LESSON_HTML;
  if (daHtml) {
    daHtml = {};
    for (const [key, html] of Object.entries(course.COURSE_LESSON_HTML)) {
      let result = html;
      for (const [src, tr] of Object.entries(map)) {
        if (result.includes(src)) result = result.split(src).join(tr);
      }
      daHtml[key] = result;
    }
  }
  fs.writeFileSync(
    path.join(DA_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(daHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(daData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
    "utf8"
  );

  if (trainingCode) {
    let updatedTraining = trainingCode;
    for (const [src, tr] of Object.entries(map)) {
      if (updatedTraining.includes(src)) updatedTraining = updatedTraining.split(src).join(tr);
    }
    fs.writeFileSync(trainingPath, updatedTraining, "utf8");
  }

  console.log("Remnant cleanup complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
