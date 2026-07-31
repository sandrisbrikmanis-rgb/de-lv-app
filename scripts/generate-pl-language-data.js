#!/usr/bin/env node
/**
 * Generate PL-DE data files from LV baseline.
 * Translates only native-language (lv) text fields to Polish.
 * German (de) fields are preserved verbatim.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(ROOT, "data", "pl");
const CACHE_PATH = path.join(ROOT, "scripts", ".pl-translation-cache.json");
const BULLET = "•";

const NAME_REPLACEMENTS = [
  [/\bPēteris\b/g, "Piotr"], [/\bPētera\b/g, "Piotra"],
  [/\bJānis\b/g, "Jan"], [/\bJāņa\b/g, "Jana"],
  [/\bRūdolfs\b/g, "Rudolf"], [/\bRoberts\b/g, "Robert"],
  [/\bMarija\b/g, "Maria"], [/\bMarie\b/g, "Maria"],
  [/\bAlbert\b/g, "Albert"], [/\bAlberta\b/g, "Alberta"],
  [/\bMarta\b/g, "Marta"], [/\bPauls\b/g, "Paweł"], [/\bPaul\b/g, "Paul"],
  [/\bHanna\b/g, "Hanna"], [/\bGertrud\b/g, "Gertruda"], [/\bAnna\b/g, "Anna"],
  [/\bEdgar\b/g, "Edgar"], [/\bBen\b/g, "Ben"], [/\bEmma\b/g, "Emma"],
  [/\bJonas\b/g, "Jonas"], [/\bFinn\b/g, "Finn"],
];

let cache = {};
if (fs.existsSync(CACHE_PATH)) {
  try { cache = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")); } catch { cache = {}; }
}

let translateCount = 0;
let cacheHits = 0;

function saveCache() {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function postProcess(text) {
  if (!text || typeof text !== "string") return text;
  let out = text.replace(/;\s*/g, ` ${BULLET} `);
  for (const [from, to] of NAME_REPLACEMENTS) out = out.replace(from, to);
  out = out.replace(/\s+/g, " ").replace(/\s+•\s+/g, ` ${BULLET} `).trim();
  // Capitalize first meaning in multi-meaning titles
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

async function translateText(text) {
  if (!text || typeof text !== "string") return text;
  const trimmed = text.trim();
  if (!trimmed) return text;
  if (cache[trimmed]) { cacheHits++; return cache[trimmed]; }
  try {
    const res = await translate(trimmed, { from: "lv", to: "pl", forceBatch: false });
    const result = postProcess(res.text);
    cache[trimmed] = result;
    translateCount++;
    if (translateCount % 100 === 0) {
      saveCache();
      process.stdout.write(`  translated ${translateCount} (cache hits: ${cacheHits})\n`);
    }
    await sleep(80);
    return result;
  } catch (err) {
    console.error(`Translation failed: ${trimmed.slice(0, 50)}...`, err.message);
    await sleep(2000);
    return text;
  }
}

async function translateExamplePair(example) {
  if (!example || typeof example !== "string") return example;
  const m = example.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
  if (!m) return translateText(example);
  const plPart = await translateText(m[3]);
  return `${m[1]}${m[2]}${plPart}`;
}

async function translateStringArray(arr) {
  if (!Array.isArray(arr)) return arr;
  const out = [];
  for (const item of arr) {
    out.push(typeof item === "string" ? await translateText(item) : item);
  }
  return out;
}

async function translateStudy(study) {
  if (!study) return study;
  const s = JSON.parse(JSON.stringify(study));
  if (s.translation) s.translation = await translateText(s.translation);
  if (s.title) s.title = await translateText(s.title);
  if (s.subtitle) s.subtitle = await translateText(s.subtitle);
  if (s.lead) s.lead = await translateText(s.lead);
  if (s.explanation) s.explanation = await translateStringArray(s.explanation);
  if (s.tip) s.tip = await translateStringArray(s.tip);
  if (s.important) s.important = await translateStringArray(s.important);
  if (s.mistakes) s.mistakes = await translateStringArray(s.mistakes);
  if (s.remember) s.remember = await translateStringArray(s.remember);
  if (Array.isArray(s.examples)) {
    for (const ex of s.examples) {
      if (ex.lv) ex.lv = await translateText(ex.lv);
    }
  }
  if (Array.isArray(s.comparison)) {
    for (const row of s.comparison) {
      if (row.meaning) row.meaning = await translateText(row.meaning);
      if (row.example) row.example = await translateExamplePair(row.example);
    }
  }
  if (Array.isArray(s.words)) {
    for (const w of s.words) {
      if (w.label) w.label = await translateText(w.label);
      if (w.description) w.description = await translateText(w.description);
      if (w.example) w.example = await translateExamplePair(w.example);
      if (w.lv) w.lv = await translateText(w.lv);
    }
  }
  if (Array.isArray(s.comparisonTable)) {
    for (const row of s.comparisonTable) {
      for (const k of ["lv", "meaning", "describes", "translation"]) {
        if (row[k]) row[k] = await translateText(row[k]);
      }
      if (row.example) row.example = await translateExamplePair(row.example);
    }
  }
  if (Array.isArray(s.importantComparison)) {
    for (const row of s.importantComparison) {
      for (const k of ["lv", "meaning", "describes"]) {
        if (row[k]) row[k] = await translateText(row[k]);
      }
      if (row.example) row.example = await translateExamplePair(row.example);
    }
  }
  // sectionAccents kept from LV — fixed later by fix-pl-section-accents.js
  return s;
}

async function translateEntry(entry) {
  const copy = JSON.parse(JSON.stringify(entry));
  if (copy.lv) copy.lv = await translateText(copy.lv);
  if (copy.study) copy.study = await translateStudy(copy.study);
  return copy;
}

function loadData(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx;
}

function writeArrayFile(filePath, varName, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

function writeObjectFile(filePath, exports) {
  const lines = exports.map(({ name, value }) => `const ${name} = ${JSON.stringify(value, null, 2)};`);
  const windowLines = exports.map(({ name }) => `window.${name} = ${name};`);
  fs.writeFileSync(filePath, lines.join("\n\n") + "\n\n" + windowLines.join("\n") + "\n", "utf8");
}

async function processWordFile(srcRel, destName, varName) {
  console.log(`\nProcessing ${srcRel} -> data/pl/${destName}`);
  const data = loadData(srcRel);
  const entries = data.window[varName] || Object.values(data.window).find(Array.isArray);
  const translated = [];
  for (let i = 0; i < entries.length; i++) {
    if (i % 100 === 0) process.stdout.write(`  entry ${i + 1}/${entries.length}\n`);
    translated.push(await translateEntry(entries[i]));
  }
  writeArrayFile(path.join(OUT_DIR, destName), varName, translated);
  saveCache();
}

async function processVerbs() {
  console.log("\nProcessing verbs.js");
  const data = loadData("data/verbs.js");
  const translated = [];
  for (const entry of data.window.VERB_ENTRIES) {
    const te = {};
    for (const [form, pair] of Object.entries(entry)) {
      te[form] = { de: pair.de, lv: await translateText(pair.lv) };
    }
    translated.push(te);
  }
  writeArrayFile(path.join(OUT_DIR, "verbs.js"), "VERB_ENTRIES", translated);
  saveCache();
}

async function processDialogueIdMap() {
  console.log("\nProcessing dialogueIdMap.js");
  const data = loadData("data/dialogueIdMap.js");
  const map = data.window.DIALOGUE_ID_MAP;
  const out = {};
  for (const [id, entry] of Object.entries(map)) {
    out[id] = { de: entry.de, lv: await translateText(entry.lv) };
  }
  writeObjectFile(path.join(OUT_DIR, "dialogueIdMap.js"), [{ name: "DIALOGUE_ID_MAP", value: out }]);
  saveCache();
}

function processNounArticles() {
  console.log("\nCopying nounArticles.js");
  fs.copyFileSync(path.join(ROOT, "data/nounArticles.js"), path.join(OUT_DIR, "nounArticles.js"));
}

async function translateHtmlLesson(html) {
  if (!html) return html;
  let result = html;
  const seen = new Set();
  const matches = [...html.matchAll(/>([^<]{3,300})</g)];
  for (const match of matches) {
    const text = match[1].trim();
    if (!text || seen.has(text)) continue;
    if (!/[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/.test(text)) continue;
    seen.add(text);
    if (text.includes("—") || text.includes("–")) {
      const parts = text.split(/\s*[—–]\s*/);
      const translated = [];
      for (let i = 0; i < parts.length; i++) {
        translated.push(/[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/.test(parts[i]) ? await translateText(parts[i]) : parts[i]);
      }
      const pl = translated.join(" — ");
      result = result.split(`>${text}<`).join(`>${pl}<`);
    } else {
      const pl = await translateText(text);
      result = result.split(`>${text}<`).join(`>${pl}<`);
    }
  }
  return result;
}

async function processCourseLessons() {
  console.log("\nProcessing courseLessons.js");
  const data = loadData("data/courseLessons.js");
  const translatedHtml = {};
  for (const [key, value] of Object.entries(data.window.COURSE_LESSON_HTML)) {
    console.log(`  HTML: ${key}`);
    translatedHtml[key] = await translateHtmlLesson(value);
  }
  const translatedData = JSON.parse(JSON.stringify(data.window.COURSE_LESSON_DATA));
  for (const [key, lesson] of Object.entries(translatedData)) {
    if (!lesson || typeof lesson !== "object") continue;
    console.log(`  Data: ${key}`);
    if (lesson.title) lesson.title = await translateText(lesson.title);
    if (lesson.intro) lesson.intro = await translateText(lesson.intro);
    if (Array.isArray(lesson.sections)) {
      for (const section of lesson.sections) {
        if (section.title) section.title = await translateText(section.title);
        if (section.content) section.content = await translateHtmlLesson(section.content);
        if (Array.isArray(section.cards)) {
          for (const card of section.cards) {
            if (card.lv) card.lv = await translateText(card.lv);
            if (card.front) card.front = await translateText(card.front);
          }
        }
      }
    }
  }
  fs.writeFileSync(
    path.join(OUT_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(translatedHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(translatedData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
    "utf8"
  );
  saveCache();
}

async function processCourseTrainingCards() {
  console.log("\nProcessing courseTrainingCards.js");
  const ltPath = path.join(ROOT, "data/lt/courseTrainingCards.js");
  if (!fs.existsSync(ltPath)) return;
  const data = loadData("data/lt/courseTrainingCards.js");
  const outLines = ["// Polish course training cards for PL-DE Kurss lessons 1-7.\n"];
  for (const [key, deck] of Object.entries(data.window)) {
    if (!Array.isArray(deck)) continue;
    const translated = [];
    for (const card of deck) {
      translated.push({ front: await translateText(card.front || ""), back: card.back || "" });
    }
    outLines.push(`window.${key.replace(/Lt$/, "Pl")} = ${JSON.stringify(translated, null, 2)};\n`);
  }
  fs.writeFileSync(path.join(OUT_DIR, "courseTrainingCards.js"), outLines.join("\n"), "utf8");
  saveCache();
}

async function main() {
  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.slice("--only=".length).split(",") : null;
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const tasks = [
    ["nounArticles", processNounArticles],
    ["dialogueIdMap", processDialogueIdMap],
    ["verbs", processVerbs],
    ["sentences", () => processWordFile("data/sentences.js", "sentences.js", "SENTENCE_ENTRIES")],
    ["c2", () => processWordFile("data/c2.js", "c2.js", "C2_WORDS")],
    ["c1", () => processWordFile("data/c1.js", "c1.js", "C1_WORDS")],
    ["b2", () => processWordFile("data/b2.js", "b2.js", "B2_WORDS")],
    ["a1", () => processWordFile("data/a1.js", "a1.js", "A1_WORDS")],
    ["a2", () => processWordFile("data/a2.js", "a2.js", "A2_WORDS")],
    ["b1", () => processWordFile("data/b1.js", "b1.js", "B1_WORDS")],
    ["courseLessons", processCourseLessons],
    ["courseTrainingCards", processCourseTrainingCards],
  ];

  const selected = only ? tasks.filter(([name]) => only.includes(name)) : tasks;
  console.log(`Generating PL-DE data in ${OUT_DIR}`);
  for (const [name, fn] of selected) {
    await fn();
    console.log(`Done: ${name}`);
  }
  saveCache();
  console.log(`\nComplete. Translated: ${translateCount}, cache hits: ${cacheHits}`);
}

main().catch((err) => { console.error(err); saveCache(); process.exit(1); });
