#!/usr/bin/env node
/**
 * Second-pass translation for remaining LV remnants in BS courseLessons.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll, loadCache, cacheKey } = require("./lib/translate-helper");

const BS_PATH = path.join(ROOT, "data/bs/courseLessons.js");
const CACHE_PATH = path.join(ROOT, "scripts/.bs-lv-translation-cache.json");
const LV_ONLY = /[āēģīķļņĀĒĢĪĶĻŅ]/;

function loadCourse() {
  const code = fs.readFileSync(BS_PATH, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { html: ctx.COURSE_LESSON_HTML || ctx.window.COURSE_LESSON_HTML, data: ctx.COURSE_LESSON_DATA || ctx.window.COURSE_LESSON_DATA };
}

function collectLvStrings(value, out) {
  if (value == null) return;
  if (typeof value === "string") {
    if (LV_ONLY.test(value)) out.add(value);
    return;
  }
  if (Array.isArray(value)) value.forEach((v) => collectLvStrings(v, out));
  else if (typeof value === "object") Object.values(value).forEach((v) => collectLvStrings(v, out));
}

async function main() {
  const { html, data } = loadCourse();
  const strings = new Set();
  collectLvStrings(html, strings);
  collectLvStrings(data, strings);
  for (const [key, h] of Object.entries(html)) {
    [...String(h).matchAll(/>([^<]{2,400})</g)].forEach((m) => {
      const t = m[1].trim();
      if (t && LV_ONLY.test(t)) strings.add(t);
    });
  }

  const unique = [...strings].filter(Boolean);
  console.log(`Found ${unique.length} remnant strings in courseLessons`);
  const map = await translateAll(unique, "lv", "bs", {
    cachePath: CACHE_PATH,
    delayMs: 100,
    concurrency: 8,
    onProgress: (n, rem) => {
      if (n % 50 === 0) console.log(`  translated ${n} (~${rem} remaining)`);
    },
  });

  let newHtml = {};
  for (const [key, h] of Object.entries(html)) {
    let result = h;
    const sorted = Object.keys(map).sort((a, b) => b.length - a.length);
    for (const src of sorted) {
      const tr = map[src];
      if (tr && tr !== src) result = result.split(src).join(tr);
    }
    newHtml[key] = result;
  }

  function applyMap(value) {
    if (value == null) return value;
    if (typeof value === "string") return map[value] || value;
    if (Array.isArray(value)) return value.map(applyMap);
    if (typeof value === "object") {
      const out = {};
      for (const [k, v] of Object.entries(value)) out[k] = applyMap(v);
      return out;
    }
    return value;
  }

  const newData = applyMap(data);
  fs.writeFileSync(
    BS_PATH,
    `const COURSE_LESSON_HTML = ${JSON.stringify(newHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(newData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
    "utf8"
  );
  console.log("courseLessons remnants fixed.");
}

main().catch((e) => { console.error(e); process.exit(1); });
