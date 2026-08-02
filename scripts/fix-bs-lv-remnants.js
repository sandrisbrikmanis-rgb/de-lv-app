#!/usr/bin/env node
/**
 * Second-pass fix: translate remaining Latvian/Cyrillic remnants in BS data files.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll, loadCache, cacheKey, saveCache } = require("./lib/translate-helper");

const DIR = path.join(ROOT, "data", "bs");
const CACHE_PATH = path.join(ROOT, "scripts", ".bs-lv-translation-cache.json");
const FROM = "lv";
const TO = "bs";
const BULLET = "•";

const NAME_REPLACEMENTS = [
  [/\bPēteris\b/g, "Petar"], [/\bJānis\b/g, "Ivan"], [/\bRūdolfs\b/g, "Rudolf"],
  [/\bRoberts\b/g, "Robert"], [/\blatviešu\b/gi, "bosanski"],
];

function postProcess(text) {
  if (!text || typeof text !== "string") return text;
  let out = text.replace(/;\s*/g, ` ${BULLET} `);
  for (const [from, to] of NAME_REPLACEMENTS) out = out.replace(from, to);
  out = out.replace(/\s+/g, " ").trim();
  if (out.length) out = out.charAt(0).toUpperCase() + out.slice(1);
  return out;
}

function needsTranslation(text) {
  if (!text || typeof text !== "string" || !text.trim()) return false;
  return /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽа-яА-ЯёЁ]/.test(text);
}

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember",
]);

function collectRemnants(value, out, parentKey = "") {
  if (value == null) return;
  if (typeof value === "string") {
    if ((NATIVE_KEYS.has(parentKey) || parentKey === "example") && needsTranslation(value)) out.add(value);
    return;
  }
  if (Array.isArray(value)) value.forEach((v) => collectRemnants(v, out, NATIVE_KEYS.has(parentKey) ? parentKey : parentKey));
  else if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (["de", "de_article", "de_plural", "id", "layout", "level", "sectionAccents"].includes(k)) continue;
      collectRemnants(v, out, k);
    }
  }
}

function applyMap(value, map, parentKey = "") {
  if (value == null) return value;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey) && map[value]) return map[value];
    if (parentKey === "example") {
      if (value.includes("=")) {
        const idx = value.indexOf("=");
        const left = value.slice(0, idx + 1);
        const right = value.slice(idx + 1).trim();
        return right && map[right] ? `${left} ${map[right]}` : value;
      }
      const dash = value.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
      if (dash) {
        const right = dash[3].trim();
        return right && map[right] ? `${dash[1]}${dash[2]}${map[right]}` : value;
      }
    }
    return value;
  }
  if (Array.isArray(value)) return value.map((v) => applyMap(v, map, parentKey));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = k === "sectionAccents" ? v : applyMap(v, map, k);
    }
    return out;
  }
  return value;
}

function loadWindow(file) {
  const code = fs.readFileSync(file, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { code, ctx: ctx.window };
}

function writeArrayFile(filePath, varName, data) {
  fs.writeFileSync(filePath, `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

async function main() {
  const files = [
    ["a1.js", "A1_WORDS"], ["a2.js", "A2_WORDS"], ["b1.js", "B1_WORDS"],
    ["b2.js", "B2_WORDS"], ["c1.js", "C1_WORDS"], ["c2.js", "C2_WORDS"],
    ["sentences.js", "SENTENCE_ENTRIES"], ["verbs.js", "VERB_ENTRIES"],
    ["dialogueIdMap.js", "DIALOGUE_ID_MAP"],
  ];

  const remnants = new Set();
  const loaded = {};
  for (const [file, key] of files) {
    const full = path.join(DIR, file);
    const { ctx } = loadWindow(full);
    const data = key === "DIALOGUE_ID_MAP" ? ctx[key] : ctx[key];
    loaded[file] = { key, data };
    if (key === "DIALOGUE_ID_MAP") Object.values(data).forEach((e) => collectRemnants(e, remnants));
    else if (Array.isArray(data)) data.forEach((e) => collectRemnants(e, remnants));
  }

  const coursePath = path.join(DIR, "courseLessons.js");
  const courseCode = fs.readFileSync(coursePath, "utf8");
  const courseCtx = { window: {} };
  vm.createContext(courseCtx);
  vm.runInContext(courseCode, courseCtx);
  loaded["courseLessons.js"] = { html: courseCtx.window.COURSE_LESSON_HTML, data: courseCtx.window.COURSE_LESSON_DATA };
  Object.values(courseCtx.window.COURSE_LESSON_DATA || {}).forEach((e) => collectRemnants(e, remnants));
  [...String(JSON.stringify(courseCtx.window.COURSE_LESSON_HTML)).matchAll(/>([^<]{3,200})</g)].forEach((m) => {
    const t = m[1].trim();
    if (needsTranslation(t)) remnants.add(t);
  });

  const trainingPath = path.join(DIR, "courseTrainingCards.js");
  if (fs.existsSync(trainingPath)) {
    const tctx = { window: {} };
    vm.createContext(tctx);
    vm.runInContext(fs.readFileSync(trainingPath, "utf8"), tctx);
    loaded["courseTrainingCards.js"] = tctx.window;
    Object.values(tctx.window).forEach((deck) => {
      if (Array.isArray(deck)) deck.forEach((c) => { if (c.front && needsTranslation(c.front)) remnants.add(c.front); });
    });
  }

  const unique = [...remnants].filter(Boolean);
  console.log(`Found ${unique.length} remnant strings to translate`);

  const map = await translateAll(unique, FROM, TO, {
    cachePath: CACHE_PATH,
    delayMs: 15,
    concurrency: 40,
    onProgress: (n, rem) => { if (n % 200 === 0) process.stdout.write(`  ${n} (~${rem})\n`); },
  });
  unique.forEach((s) => { map[s] = postProcess(map[s] || s); });

  for (const [file, key] of files) {
    const { data } = loaded[file];
    if (key === "DIALOGUE_ID_MAP") {
      const out = {};
      for (const [id, entry] of Object.entries(data)) out[id] = applyMap(entry, map);
      fs.writeFileSync(path.join(DIR, file), `const DIALOGUE_ID_MAP = ${JSON.stringify(out, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`);
    } else {
      writeArrayFile(path.join(DIR, file), key, data.map((e) => applyMap(e, map)));
    }
  }

  const bsHtml = {};
  for (const [k, html] of Object.entries(loaded["courseLessons.js"].html || {})) {
    let result = html;
    for (const [src, tr] of Object.entries(map)) {
      if (src && tr && result.includes(src)) result = result.split(src).join(tr);
    }
    bsHtml[k] = result;
  }
  const bsData = applyMap(loaded["courseLessons.js"].data, map);
  fs.writeFileSync(coursePath, `const COURSE_LESSON_HTML = ${JSON.stringify(bsHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(bsData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`);

  if (loaded["courseTrainingCards.js"]) {
    const lines = ["// Bosnian course training cards for BS-DE Kurss lessons 1-7.\n"];
    for (const [key, deck] of Object.entries(loaded["courseTrainingCards.js"])) {
      if (!Array.isArray(deck)) continue;
      lines.push(`window.${key} = ${JSON.stringify(deck.map((c) => ({ front: map[c.front] || c.front, back: c.back || "" })), null, 2)};\n`);
    }
    fs.writeFileSync(trainingPath, lines.join("\n"));
  }

  console.log("Remnant translation pass complete.");
}

main().catch((e) => { console.error(e); process.exit(1); });
