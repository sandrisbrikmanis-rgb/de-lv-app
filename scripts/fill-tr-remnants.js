#!/usr/bin/env node
/**
 * Translate remaining Polish/Latvian remnant strings in TR data files.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll, loadCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".tr-translation-cache.json");
const PL_CHARS = /[ąćęłńóśźż]/;
const LV_CHARS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;

const TR_FILES = [
  ["data/tr/a1.js", "A1_WORDS"],
  ["data/tr/a2.js", "A2_WORDS"],
  ["data/tr/b1.js", "B1_WORDS"],
  ["data/tr/b2.js", "B2_WORDS"],
  ["data/tr/c1.js", "C1_WORDS"],
  ["data/tr/c2.js", "C2_WORDS"],
  ["data/tr/sentences.js", "SENTENCE_ENTRIES"],
  ["data/tr/verbs.js", "VERB_ENTRIES"],
  ["data/tr/dialogueIdMap.js", "DIALOGUE_ID_MAP"],
  ["data/tr/courseLessons.js", null],
];

function isRemnant(text) {
  return typeof text === "string" && (PL_CHARS.test(text) || LV_CHARS.test(text));
}

function detectLang(text) {
  if (LV_CHARS.test(text)) return "lv";
  if (PL_CHARS.test(text)) return "pl";
  return "pl";
}

function collectRemnants(value, out) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    if (isRemnant(value)) out.add(value);
    return;
  }
  if (Array.isArray(value)) value.forEach((v) => collectRemnants(v, out));
  else if (typeof value === "object") Object.values(value).forEach((v) => collectRemnants(v, out));
}

function applyMap(value, map) {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") return map[value] ?? value;
  if (Array.isArray(value)) return value.map((v) => applyMap(v, map));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = applyMap(v, map);
    return out;
  }
  return value;
}

function loadFile(file, varName) {
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  if (file.endsWith("courseLessons.js")) {
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(code, ctx);
    return { type: "course", data: ctx.window };
  }
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { type: "array", varName, data: ctx.window[varName] };
}

function writeFile(file, varName, loaded) {
  if (loaded.type === "course") {
    const { COURSE_LESSON_HTML, COURSE_LESSON_DATA } = loaded.data;
    const content = `const COURSE_LESSON_HTML = ${JSON.stringify(COURSE_LESSON_HTML, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(COURSE_LESSON_DATA, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
    fs.writeFileSync(path.join(ROOT, file), content, "utf8");
    return;
  }
  const json = JSON.stringify(loaded.data, null, 2);
  const content = `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`;
  fs.writeFileSync(path.join(ROOT, file), content, "utf8");
}

async function main() {
  const remnants = new Set();
  const payloads = [];

  for (const [file, varName] of TR_FILES) {
    if (!fs.existsSync(path.join(ROOT, file))) continue;
    const loaded = loadFile(file, varName);
    payloads.push({ file, varName, loaded });
    collectRemnants(loaded.data, remnants);
  }

  const unique = [...remnants];
  console.log(`Found ${unique.length} unique remnant strings`);

  const byLang = { pl: [], lv: [] };
  unique.forEach((s) => byLang[detectLang(s)].push(s));

  const map = {};
  const cache = loadCache(CACHE_PATH);

  for (const lang of ["pl", "lv"]) {
    const strings = byLang[lang];
    const pending = strings.filter((s) => !cache[cacheKey(lang, "tr", s)]);
    console.log(`${lang}->tr: ${strings.length} total, ${pending.length} pending`);
    if (!pending.length) {
      strings.forEach((s) => { map[s] = cache[cacheKey(lang, "tr", s)] || s; });
      continue;
    }
    const part = await translateAll(strings, lang, "tr", {
      cachePath: CACHE_PATH,
      delayMs: 450,
      concurrency: 5,
      onProgress: (n, left) => {
        if (n % 40 === 0) process.stdout.write(`  ${lang} ${n} new (~${left} left)\n`);
      },
    });
    Object.assign(map, part);
  }

  for (const { file, varName, loaded } of payloads) {
    if (loaded.type === "course") {
      loaded.data.COURSE_LESSON_HTML = applyMap(loaded.data.COURSE_LESSON_HTML, map);
      loaded.data.COURSE_LESSON_DATA = applyMap(loaded.data.COURSE_LESSON_DATA, map);
    } else {
      loaded.data = applyMap(loaded.data, map);
    }
    writeFile(file, varName, loaded);
    const www = file.replace(/^data\//, "www/data/");
    if (fs.existsSync(path.join(ROOT, path.dirname(www)))) {
      writeFile(www, varName, loaded);
    }
  }

  console.log("Remnant fill complete.");
}

main().catch((err) => { console.error(err); process.exit(1); });
