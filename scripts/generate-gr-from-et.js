#!/usr/bin/env node
/**
 * Generate GR-DE data from ET baseline (complete reference language) with batched translation.
 * German (de) fields are preserved verbatim from ET (identical to LV source).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");

const SRC_DIR = path.join(ROOT, "data", "et");
const OUT_DIR = path.join(ROOT, "data", "gr");
const CACHE_PATH = path.join(ROOT, "scripts", ".gr-translation-cache.json");
const BULLET = "•";
const BATCH_SIZE = 50;
const BATCH_SLEEP_MS = 300;
const RETRY_SLEEP_MS = 3000;
const MAX_RETRIES = 5;

let cache = {};
if (fs.existsSync(CACHE_PATH)) {
  try { cache = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")); } catch { cache = {}; }
}

function saveCache() {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function postProcess(text) {
  if (!text || typeof text !== "string") return text;
  let out = text.replace(/;\s*/g, ` ${BULLET} `);
  out = out.replace(/\s+/g, " ").replace(/\s+•\s+/g, ` ${BULLET} `).trim();
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

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember",
]);

function collectStrings(value, out, parentKey = "") {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey) && value.trim()) out.add(value);
    return;
  }
  if (Array.isArray(value)) {
    const key = NATIVE_KEYS.has(parentKey) ? parentKey : "";
    value.forEach((v) => collectStrings(v, out, key || parentKey));
    return;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (k === "de" || k === "de_article" || k === "de_plural" || k === "id" || k === "layout" || k === "level") continue;
      if (k === "sectionAccents") continue;
      if (typeof v === "string") {
        if (NATIVE_KEYS.has(k) && v.trim()) out.add(v);
        else if (k === "example") {
          if (v.includes("=")) {
            const right = v.split("=").pop().trim();
            if (right) out.add(right);
          }
          const dash = v.match(/\s*[–—-]\s*(.+)$/);
          if (dash && dash[1].trim()) out.add(dash[1].trim());
        }
      } else {
        collectStrings(v, out, k);
      }
    }
  }
}

function applyTranslation(value, map, parentKey = "") {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey)) return map[value] ?? value;
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
  if (Array.isArray(value)) {
    return value.map((v) => applyTranslation(v, map, parentKey));
  }
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === "sectionAccents") { out[k] = v; continue; }
      out[k] = applyTranslation(v, map, k);
    }
    return out;
  }
  return value;
}

async function translateOne(src) {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const res = await translate(src.trim(), { from: "et", to: "el" });
      return postProcess(res.text);
    } catch (err) {
      if (attempt === MAX_RETRIES - 1) throw err;
      await sleep(RETRY_SLEEP_MS * (attempt + 1));
    }
  }
  return src;
}

async function translateBatch(strings) {
  const pending = strings.filter((s) => !cache[s.trim()]);
  if (!pending.length) return;
  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const chunk = pending.slice(i, i + BATCH_SIZE);
    try {
      const res = await translate(chunk, { from: "et", to: "el", forceBatch: true });
      const results = Array.isArray(res) ? res : [res];
      chunk.forEach((src, idx) => {
        cache[src.trim()] = postProcess(results[idx]?.text || src);
      });
      saveCache();
      process.stdout.write(`  batch ${Math.min(i + BATCH_SIZE, pending.length)}/${pending.length}\n`);
      await sleep(BATCH_SLEEP_MS);
    } catch (err) {
      console.error(`Batch failed, falling back to single: ${err.message}`);
      for (const src of chunk) {
        if (cache[src.trim()]) continue;
        try {
          cache[src.trim()] = await translateOne(src);
        } catch {
          cache[src.trim()] = src;
        }
        saveCache();
        await sleep(200);
      }
    }
  }
}

function loadData(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function writeArrayFile(filePath, varName, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

async function translateHtmlLesson(html, map) {
  if (!html) return html;
  let result = html;
  const matches = [...html.matchAll(/>([^<]{3,300})</g)];
  const seen = new Set();
  for (const match of matches) {
    const text = match[1].trim();
    if (!text || seen.has(text) || text.startsWith("http")) continue;
    seen.add(text);
    if (!map[text] && !/[äöüõšžÄÖÜÕŠŽ]/.test(text) && !/[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/.test(text)) continue;
    const gr = map[text] || text;
    result = result.split(`>${text}<`).join(`>${gr}<`);
  }
  return result;
}

async function main() {
  const writeOnly = process.argv.includes("--write-only");
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const allStrings = new Set();

  console.log("Collecting unique Estonian strings from ET reference...");
  const a1 = loadData(path.join(SRC_DIR, "a1.js")).A1_WORDS;
  const a2 = loadData(path.join(SRC_DIR, "a2.js")).A2_WORDS;
  const b1 = loadData(path.join(SRC_DIR, "b1.js")).B1_WORDS;
  const b2 = loadData(path.join(SRC_DIR, "b2.js")).B2_WORDS;
  const c1 = loadData(path.join(SRC_DIR, "c1.js")).C1_WORDS;
  const c2 = loadData(path.join(SRC_DIR, "c2.js")).C2_WORDS;
  const sentences = loadData(path.join(SRC_DIR, "sentences.js")).SENTENCE_ENTRIES;
  const verbs = loadData(path.join(SRC_DIR, "verbs.js")).VERB_ENTRIES;
  const dialogue = loadData(path.join(SRC_DIR, "dialogueIdMap.js")).DIALOGUE_ID_MAP;
  const course = loadData(path.join(SRC_DIR, "courseLessons.js"));
  const training = fs.existsSync(path.join(ROOT, "data/lt/courseTrainingCards.js"))
    ? loadData(path.join(ROOT, "data/lt/courseTrainingCards.js")) : {};

  [a1, a2, b1, b2, c1, c2, sentences, verbs].forEach((arr) => arr.forEach((e) => collectStrings(e, allStrings)));
  Object.values(dialogue).forEach((e) => collectStrings(e, allStrings));
  Object.values(course.COURSE_LESSON_DATA || {}).forEach((e) => collectStrings(e, allStrings));
  Object.values(course.COURSE_LESSON_HTML || {}).forEach((html) => {
    [...String(html).matchAll(/>([^<]{3,300})</g)].forEach((m) => {
      const t = m[1].trim();
      if (t) allStrings.add(t);
    });
  });
  Object.values(training).forEach((deck) => {
    if (Array.isArray(deck)) deck.forEach((c) => { if (c.front) allStrings.add(c.front); });
  });

  const unique = [...allStrings].filter((s) => s && s.trim());
  console.log(`Found ${unique.length} unique strings (${Object.keys(cache).length} cached)`);

  if (!writeOnly) {
    await translateBatch(unique);
  } else {
    console.log("Skipping translation (--write-only)");
  }
  const map = {};
  unique.forEach((s) => { map[s] = cache[s.trim()] || s; });

  console.log("\nWriting GR files...");
  writeArrayFile(path.join(OUT_DIR, "a1.js"), "A1_WORDS", a1.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "a2.js"), "A2_WORDS", a2.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "b1.js"), "B1_WORDS", b1.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "b2.js"), "B2_WORDS", b2.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "c1.js"), "C1_WORDS", c1.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "c2.js"), "C2_WORDS", c2.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "sentences.js"), "SENTENCE_ENTRIES", sentences.map((e) => applyTranslation(e, map)));

  const grVerbs = verbs.map((entry) => {
    const te = {};
    for (const [form, pair] of Object.entries(entry)) {
      te[form] = { de: pair.de, lv: map[pair.lv] || pair.lv };
    }
    return te;
  });
  writeArrayFile(path.join(OUT_DIR, "verbs.js"), "VERB_ENTRIES", grVerbs);

  const grDialogue = {};
  for (const [id, entry] of Object.entries(dialogue)) {
    grDialogue[id] = { de: entry.de, lv: map[entry.lv] || entry.lv };
  }
  fs.writeFileSync(
    path.join(OUT_DIR, "dialogueIdMap.js"),
    `const DIALOGUE_ID_MAP = ${JSON.stringify(grDialogue, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
    "utf8"
  );

  fs.copyFileSync(path.join(ROOT, "data/nounArticles.js"), path.join(OUT_DIR, "nounArticles.js"));

  const grHtml = {};
  for (const [key, html] of Object.entries(course.COURSE_LESSON_HTML || {})) {
    grHtml[key] = await translateHtmlLesson(html, map);
  }
  const grData = applyTranslation(course.COURSE_LESSON_DATA, map);
  fs.writeFileSync(
    path.join(OUT_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(grHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(grData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
    "utf8"
  );

  const outLines = ["// Greek course training cards for GR-DE Kurss lessons 1-7.\n"];
  for (const [key, deck] of Object.entries(training)) {
    if (!Array.isArray(deck)) continue;
    const translated = deck.map((card) => ({
      front: map[card.front] || card.front,
      back: card.back || "",
    }));
    outLines.push(`window.${key.replace(/Lt$/, "Gr")} = ${JSON.stringify(translated, null, 2)};\n`);
  }
  if (outLines.length > 1) {
    fs.writeFileSync(path.join(OUT_DIR, "courseTrainingCards.js"), outLines.join("\n"), "utf8");
  }

  saveCache();
  console.log("\nGR-DE data generation complete (from ET reference).");
}

main().catch((err) => { console.error(err); saveCache(); process.exit(1); });
