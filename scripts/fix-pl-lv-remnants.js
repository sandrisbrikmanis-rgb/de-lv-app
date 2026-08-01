#!/usr/bin/env node
/**
 * Re-translate PL data strings that still contain Latvian text (failed translations).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");

const LV_RE = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const LV_PHRASES = /Galvenā doma|nozīmē|Bieži raksturo|Latviski|Vadība:|nepieciešams noteikts prievārds|piederības forma/;
const CACHE_PATH = path.join(ROOT, "scripts", ".pl-translation-cache.json");
let cache = fs.existsSync(CACHE_PATH) ? JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")) : {};
let fixed = 0;

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function needsFix(s) {
  if (!s || typeof s !== "string") return false;
  return LV_RE.test(s) || LV_PHRASES.test(s);
}

async function fixText(s) {
  if (!needsFix(s)) return s;
  if (cache[s]) { fixed++; return cache[s]; }
  try {
    const res = await translate(s, { from: "lv", to: "pl", forceBatch: false });
    const out = res.text.replace(/;\s*/g, " • ").trim();
    cache[s] = out;
    fixed++;
    if (fixed % 50 === 0) {
      fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
      process.stdout.write(`  fixed ${fixed}\n`);
    }
    await sleep(100);
    return out;
  } catch {
    return s;
  }
}

async function walk(obj) {
  if (typeof obj === "string") return fixText(obj);
  if (Array.isArray(obj)) {
    const out = [];
    for (const item of obj) out.push(await walk(item));
    return out;
  }
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k === "de" || k === "de_article" || k === "de_plural" || k === "id" || k === "layout" || k === "level" || k === "word") {
        out[k] = v;
      } else {
        out[k] = await walk(v);
      }
    }
    return out;
  }
  return obj;
}

function loadFile(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { ctx, code };
}

function saveArray(rel, varName, data) {
  fs.writeFileSync(path.join(ROOT, rel), `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nwindow.${varName} = ${varName};\n`);
}

const FILES = [
  ["data/pl/a1.js", "A1_WORDS"],
  ["data/pl/a2.js", "A2_WORDS"],
  ["data/pl/b1.js", "B1_WORDS"],
  ["data/pl/b2.js", "B2_WORDS"],
  ["data/pl/c1.js", "C1_WORDS"],
  ["data/pl/c2.js", "C2_WORDS"],
  ["data/pl/sentences.js", "SENTENCE_ENTRIES"],
  ["data/pl/verbs.js", "VERB_ENTRIES"],
];

async function main() {
  const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7);
  for (const [rel, varName] of FILES) {
    if (only && !rel.includes(only)) continue;
    console.log(`Fixing ${rel}...`);
    const { ctx } = loadFile(rel);
    const data = ctx.window[varName];
    const fixed_data = await walk(data);
    saveArray(rel, varName, fixed_data);
    fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
    console.log(`  saved ${rel}`);
  }

  // courseLessons
  if (!only || only === "courseLessons") {
    console.log("Fixing courseLessons.js...");
    const { ctx } = loadFile("data/pl/courseLessons.js");
    const html = await walk(ctx.window.COURSE_LESSON_HTML);
    const lessonData = await walk(ctx.window.COURSE_LESSON_DATA);
    fs.writeFileSync(
      path.join(ROOT, "data/pl/courseLessons.js"),
      `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(lessonData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`
    );
  }

  if (!only || only === "courseTrainingCards") {
    console.log("Fixing courseTrainingCards.js...");
    const { ctx } = loadFile("data/pl/courseTrainingCards.js");
    const out = {};
    for (const [k, v] of Object.entries(ctx.window)) {
      out[k] = await walk(v);
    }
    const lines = ["// Polish course training cards for PL-DE Kurss lessons 1-7.\n"];
    for (const [k, v] of Object.entries(out)) {
      lines.push(`window.${k} = ${JSON.stringify(v, null, 2)};\n`);
    }
    fs.writeFileSync(path.join(ROOT, "data/pl/courseTrainingCards.js"), lines.join("\n"));
  }

  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
  console.log(`Done. Fixed ${fixed} strings.`);
}

main().catch(console.error);
