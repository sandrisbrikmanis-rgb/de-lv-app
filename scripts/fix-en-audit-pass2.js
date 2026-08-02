#!/usr/bin/env node
/** Second pass: recursively translate any remaining LV/LT strings in EN data. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, translateAll, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".en-lv-translation-cache.json");
const LV = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const LT = /[ąčęėįšųūžĄČĘĖĮŠŲŪŽ]/;
const DE_KEEP = /^[A-Za-zäöüÄÖÜß][A-Za-zäöüÄÖÜß\s\-–—.,!?'"()/=]*$/;

function hasForeign(text) {
  return typeof text === "string" && (LV.test(text) || LT.test(text));
}

function toBritish(text) {
  return text
    .replace(/\bcolorful\b/gi, "colourful")
    .replace(/\bcolored\b/gi, "coloured")
    .replace(/\bcolor\b/gi, "colour")
    .replace(/\btheater\b/gi, "theatre")
    .replace(/\bjewelry\b/gi, "jewellery")
    .replace(/\banalyze\b/gi, "analyse")
    .replace(/\bbehavior\b/gi, "behaviour")
    .replace(/\bhonor\b/gi, "honour")
    .replace(/\bprogram\b/gi, "programme")
    .replace(/\btraveling\b/gi, "travelling")
    .replace(/\bgray\b/gi, "grey")
    .replace(/\bdialog\b/gi, "dialogue");
}

function collect(obj, out) {
  if (obj == null) return;
  if (typeof obj === "string") {
    if (hasForeign(obj)) out.add(obj);
    return;
  }
  if (Array.isArray(obj)) return obj.forEach((v) => collect(v, out));
  if (typeof obj === "object") Object.values(obj).forEach((v) => collect(v, out));
}

function apply(obj, map) {
  if (obj == null) return obj;
  if (typeof obj === "string") {
    if (map[obj]) return toBritish(map[obj]);
    if (hasForeign(obj)) {
      let out = obj;
      for (const [src, tr] of Object.entries(map)) {
        if (src && out.includes(src)) out = out.split(src).join(tr);
      }
      return toBritish(out);
    }
    return obj;
  }
  if (Array.isArray(obj)) return obj.map((v) => apply(v, map));
  if (typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = apply(v, map);
    return out;
  }
  return obj;
}

function loadParts(rel) {
  const raw = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const s = raw.indexOf("["), e = raw.lastIndexOf("]");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  const key = Object.keys(ctx.window).find((k) => k.endsWith("_WORDS") || k.endsWith("_ENTRIES"));
  return { arr: ctx.window[key], prefix: raw.slice(0, s), suffix: raw.slice(e + 1) };
}

function writeParts(rel, parts) {
  fs.writeFileSync(path.join(ROOT, rel), parts.prefix + JSON.stringify(parts.arr, null, 2) + parts.suffix);
  const www = rel.replace(/^data\//, "www/data/");
  fs.mkdirSync(path.dirname(path.join(ROOT, www)), { recursive: true });
  fs.copyFileSync(path.join(ROOT, rel), path.join(ROOT, www));
}

async function main() {
  const all = new Set();
  const files = [];

  for (const lvl of ["a1", "a2", "b1", "b2", "c1", "c2"]) {
    const p = `data/en/${lvl}.js`;
    const parts = loadParts(p);
    parts.arr.forEach((w) => {
      collect(w.lv, all);
      if (w.study) collect(w.study, all);
    });
    files.push({ rel: p, parts });
  }

  const verbs = loadParts("data/en/verbs.js");
  verbs.arr.forEach((v) => Object.values(v).forEach((pair) => collect(pair.lv, all)));
  files.push({ rel: "data/en/verbs.js", parts: verbs });

  const cl = fs.readFileSync(path.join(ROOT, "data/en/courseLessons.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(cl, ctx);
  collect(ctx.window.COURSE_LESSON_HTML, all);
  collect(ctx.window.COURSE_LESSON_DATA, all);

  const unique = [...all].filter(Boolean);
  console.log(`Pass 2: translating ${unique.length} remaining strings...`);
  const map = await translateAll(unique, "lv", "en-GB", {
    cachePath: CACHE_PATH,
    delayMs: 40,
    concurrency: 10,
    onProgress: (n, rem) => { if (n % 50 === 0) console.log(`  ${n} done (~${rem} left)`); },
  });
  saveCache(CACHE_PATH, loadCache(CACHE_PATH));

  for (const { rel, parts } of files) {
    if (rel.includes("verbs")) {
      parts.arr = parts.arr.map((entry) => {
        const out = {};
        for (const [form, pair] of Object.entries(entry)) {
          out[form] = { de: pair.de, lv: apply(pair.lv, map) };
        }
        return out;
      });
    } else {
      parts.arr = parts.arr.map((entry) => {
        if (entry.lv) entry.lv = apply(entry.lv, map);
        if (entry.study) entry.study = apply(entry.study, map);
        return entry;
      });
    }
    writeParts(rel, parts);
  }

  const html = apply(ctx.window.COURSE_LESSON_HTML, map);
  const data = apply(ctx.window.COURSE_LESSON_DATA, map);
  for (let n = 1; n <= 7; n++) {
    const key = `kurssLesson${n}`;
    if (data[key]) data[key].legacyHtml = `__REF__${key}`;
  }
  let dataJson = JSON.stringify(data, null, 2);
  for (let n = 1; n <= 7; n++) {
    dataJson = dataJson.replace(`"legacyHtml": "__REF__kurssLesson${n}"`, `"legacyHtml": COURSE_LESSON_HTML.kurssLesson${n}`);
  }
  const out = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(path.join(ROOT, "data/en/courseLessons.js"), out);
  fs.copyFileSync(path.join(ROOT, "data/en/courseLessons.js"), path.join(ROOT, "www/data/en/courseLessons.js"));

  console.log("Pass 2 complete.");
}

main().catch((e) => { console.error(e); process.exit(1); });
