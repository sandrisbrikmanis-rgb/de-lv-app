#!/usr/bin/env node
/** Rebuild ES courseLessons from EN source (intact HTML) with EN→ES translation. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, translateOne, cacheKey, sleep } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".es-en-course-cache.json");

const NAME_FIX = [
  [/\bPeter\b/g, "Pedro"], [/\bJohn\b/g, "Juan"], [/\bRudolf\b/g, "Rodolfo"],
  [/\bRobert\b/g, "Roberto"], [/\bJānis\b/g, "Juan"], [/\bRoberts\b/g, "Roberto"],
  [/\bPēteris\b/g, "Pedro"], [/\bRūdolfs\b/g, "Rodolfo"],
];

function fixNames(text) {
  let out = text;
  for (const [re, rep] of NAME_FIX) out = out.replace(re, rep);
  return out;
}

async function main() {
  const enCode = fs.readFileSync(path.join(ROOT, "data/en/courseLessons.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(enCode, ctx);
  const enHtml = ctx.window.COURSE_LESSON_HTML;
  const enData = ctx.window.COURSE_LESSON_DATA;
  const cache = loadCache(CACHE_PATH);

  const esHtml = {};
  const keys = Object.keys(enHtml);
  console.log(`Translating ${keys.length} HTML blocks EN→ES...`);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const src = enHtml[key];
    const ck = cacheKey("en", "es", src);
    if (cache[ck]) {
      esHtml[key] = fixNames(cache[ck]);
    } else {
      const result = fixNames(await translateOne(src, "en", "es", { cachePath: CACHE_PATH, cache }));
      esHtml[key] = result;
      await sleep(100);
    }
    if ((i + 1) % 3 === 0) console.log(`  ${i + 1}/${keys.length}`);
  }
  saveCache(CACHE_PATH, cache);

  const esData = JSON.parse(JSON.stringify(enData));
  for (let n = 1; n <= 7; n++) {
    const key = `kurssLesson${n}`;
    if (esData[key]) {
      esData[key].legacyHtml = `__REF__${key}`;
      const m = esHtml[key]?.match(/<h3>([^<]+)/);
      if (m) esData[key].title = m[1].trim();
    }
  }

  // Translate short data strings EN→ES
  const strings = new Set();
  function collect(obj) {
    if (typeof obj === "string" && !obj.includes("<") && obj.length < 300) strings.add(obj);
    else if (Array.isArray(obj)) obj.forEach(collect);
    else if (obj && typeof obj === "object") Object.values(obj).forEach(collect);
  }
  collect(enData);
  const map = {};
  for (const s of strings) {
    const ck = cacheKey("en", "es", s);
    if (cache[ck]) map[s] = fixNames(cache[ck]);
    else {
      map[s] = fixNames(await translateOne(s, "en", "es", { cachePath: CACHE_PATH, cache }));
      await sleep(50);
    }
  }
  saveCache(CACHE_PATH, cache);

  function applyMap(val) {
    if (typeof val === "string") return map[val] || val;
    if (Array.isArray(val)) return val.map(applyMap);
    if (val && typeof val === "object") {
      const out = {};
      for (const [k, v] of Object.entries(val)) {
        if (k === "legacyHtml") continue;
        out[k] = applyMap(v);
      }
      return out;
    }
    return val;
  }
  const fixedData = applyMap(esData);
  for (let n = 1; n <= 7; n++) {
    const key = `kurssLesson${n}`;
    if (fixedData[key]) fixedData[key].legacyHtml = `__REF__${key}`;
  }

  let dataJson = JSON.stringify(fixedData, null, 2);
  for (let n = 1; n <= 7; n++) {
    const key = `kurssLesson${n}`;
    dataJson = dataJson.replace(`"legacyHtml": "__REF__${key}"`, `"legacyHtml": COURSE_LESSON_HTML.${key}`);
  }

  const out = `const COURSE_LESSON_HTML = ${JSON.stringify(esHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(path.join(ROOT, "data/es/courseLessons.js"), out);
  fs.copyFileSync(path.join(ROOT, "data/es/courseLessons.js"), path.join(ROOT, "www/data/es/courseLessons.js"));
  console.log("courseLessons rebuilt from EN→ES.");
}

main().catch((e) => { console.error(e); process.exit(1); });
