#!/usr/bin/env node
/**
 * Fast HU-DE data generation: EN → HU via google-translate-api-x batch mode.
 * DE fields preserved from EN source (READ-ONLY, identical to LV).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, cacheKey } = require("./lib/translate-helper");

const OUT_DIR = path.join(ROOT, "data", "hu");
const CACHE_PATH = path.join(ROOT, "scripts", ".hu-en-translation-cache.json");
const BULLET = "•";
const BATCH_SIZE = 50;

const NAME_REPLACEMENTS = [
  [/\bPeter\b/g, "Péter"], [/\bJohn\b/g, "János"], [/\bRobert\b/g, "Róbert"],
  [/\bMaria\b/g, "Mária"], [/\bMartha\b/g, "Márta"], [/\bPaul\b/g, "Pál"],
  [/\bEdgar\b/g, "Edgár"], [/\bJonas\b/g, "Jónás"],
];

function postProcess(text) {
  if (!text || typeof text !== "string") return text;
  let out = text.replace(/;\s*/g, ` ${BULLET} `);
  for (const [from, to] of NAME_REPLACEMENTS) out = out.replace(from, to);
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
    value.forEach((v) => collectStrings(v, out, parentKey));
    return;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (k === "de" || k === "de_article" || k === "de_plural" || k === "id" || k === "layout" || k === "level") continue;
      if (k === "sectionAccents") continue;
      if (typeof v === "string") {
        if (NATIVE_KEYS.has(k) && v.trim()) out.add(v);
        else if (k === "example") {
          if (v.includes("=")) { const right = v.split("=").pop().trim(); if (right) out.add(right); }
          const dash = v.match(/\s*[–—-]\s*(.+)$/);
          if (dash && dash[1].trim()) out.add(dash[1].trim());
        }
      } else collectStrings(v, out, k);
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
  if (Array.isArray(value)) return value.map((v) => applyTranslation(v, map, parentKey));
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

function loadData(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function writeArrayFile(filePath, varName, data) {
  fs.writeFileSync(filePath, `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

async function translateBatch(strings, cache) {
  const map = {};
  const pending = strings.filter((s) => !cache[cacheKey("en", "hu", s)]);
  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const batch = pending.slice(i, i + BATCH_SIZE);
    try {
      const results = await translate(batch, { from: "en", to: "hu", forceBatch: true });
      const arr = Array.isArray(results) ? results : [results];
      batch.forEach((src, j) => {
        const tr = postProcess(arr[j]?.text || src);
        cache[cacheKey("en", "hu", src)] = tr;
        map[src] = tr;
      });
    } catch (err) {
      console.warn(`Batch ${i} failed: ${err.message}, falling back to individual`);
      for (const src of batch) {
        try {
          const r = await translate(src, { from: "en", to: "hu" });
          const tr = postProcess(r.text || src);
          cache[cacheKey("en", "hu", src)] = tr;
          map[src] = tr;
        } catch { map[src] = src; }
      }
    }
    if (i % 500 === 0) {
      saveCache(CACHE_PATH, cache);
      process.stdout.write(`  translated ${Math.min(i + BATCH_SIZE, pending.length)}/${pending.length}\n`);
    }
    await new Promise((r) => setTimeout(r, 100));
  }
  strings.forEach((s) => { if (!map[s]) map[s] = postProcess(cache[cacheKey("en", "hu", s)] || s); });
  saveCache(CACHE_PATH, cache);
  return map;
}

async function translateHtmlLesson(html, map) {
  if (!html) return html;
  let result = html;
  const matches = [...html.matchAll(/>([^<]{3,300})</g)];
  const seen = new Set();
  for (const match of matches) {
    const text = match[1].trim();
    if (!text || seen.has(text)) continue;
    seen.add(text);
    result = result.split(`>${text}<`).join(`>${map[text] || text}<`);
  }
  return result;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const cache = loadCache(CACHE_PATH);
  const allStrings = new Set();

  console.log("Collecting English strings from EN-DE...");
  const a1 = loadData("data/en/a1.js").A1_WORDS;
  const a2 = loadData("data/en/a2.js").A2_WORDS;
  const b1 = loadData("data/en/b1.js").B1_WORDS;
  const b2 = loadData("data/en/b2.js").B2_WORDS;
  const c1 = loadData("data/en/c1.js").C1_WORDS;
  const c2 = loadData("data/en/c2.js").C2_WORDS;
  const sentences = loadData("data/en/sentences.js").SENTENCE_ENTRIES;
  const verbs = loadData("data/en/verbs.js").VERB_ENTRIES;
  const dialogue = loadData("data/en/dialogueIdMap.js").DIALOGUE_ID_MAP;
  const course = loadData("data/en/courseLessons.js");
  const training = fs.existsSync(path.join(ROOT, "data/en/courseTrainingCards.js"))
    ? loadData("data/en/courseTrainingCards.js") : {};

  [a1, a2, b1, b2, c1, c2, sentences, verbs].forEach((arr) => arr.forEach((e) => collectStrings(e, allStrings)));
  Object.values(dialogue).forEach((e) => collectStrings(e, allStrings));
  Object.values(course.COURSE_LESSON_DATA || {}).forEach((e) => collectStrings(e, allStrings));
  Object.values(course.COURSE_LESSON_HTML || {}).forEach((html) => {
    [...String(html).matchAll(/>([^<]{3,300})</g)].forEach((m) => { if (m[1].trim()) allStrings.add(m[1].trim()); });
  });
  Object.values(training).forEach((deck) => {
    if (Array.isArray(deck)) deck.forEach((c) => { if (c.front) allStrings.add(c.front); });
  });

  const unique = [...allStrings].filter((s) => s && s.trim());
  const cached = unique.filter((s) => cache[cacheKey("en", "hu", s)]).length;
  console.log(`Found ${unique.length} unique strings (${cached} cached)`);

  const map = await translateBatch(unique, cache);

  console.log("\nWriting HU files...");
  writeArrayFile(path.join(OUT_DIR, "a1.js"), "A1_WORDS", a1.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "a2.js"), "A2_WORDS", a2.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "b1.js"), "B1_WORDS", b1.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "b2.js"), "B2_WORDS", b2.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "c1.js"), "C1_WORDS", c1.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "c2.js"), "C2_WORDS", c2.map((e) => applyTranslation(e, map)));
  writeArrayFile(path.join(OUT_DIR, "sentences.js"), "SENTENCE_ENTRIES", sentences.map((e) => applyTranslation(e, map)));

  const huVerbs = verbs.map((entry) => {
    const te = {};
    for (const [form, pair] of Object.entries(entry)) te[form] = { de: pair.de, lv: map[pair.lv] || pair.lv };
    return te;
  });
  writeArrayFile(path.join(OUT_DIR, "verbs.js"), "VERB_ENTRIES", huVerbs);

  const huDialogue = {};
  for (const [id, entry] of Object.entries(dialogue)) huDialogue[id] = { de: entry.de, lv: map[entry.lv] || entry.lv };
  fs.writeFileSync(path.join(OUT_DIR, "dialogueIdMap.js"),
    `const DIALOGUE_ID_MAP = ${JSON.stringify(huDialogue, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`, "utf8");

  fs.copyFileSync(path.join(ROOT, "data/nounArticles.js"), path.join(OUT_DIR, "nounArticles.js"));

  const huHtml = {};
  for (const [key, html] of Object.entries(course.COURSE_LESSON_HTML || {})) huHtml[key] = await translateHtmlLesson(html, map);
  const huData = applyTranslation(course.COURSE_LESSON_DATA, map);
  fs.writeFileSync(path.join(OUT_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(huHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(huData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`, "utf8");

  const outLines = ["// British Magyar course training cards for HU-DE Kurss lessons 1-7.\n"];
  for (const [key, deck] of Object.entries(training)) {
    if (!Array.isArray(deck)) continue;
    outLines.push(`window.${key.replace(/En$/, "Hu")} = ${JSON.stringify(deck.map((c) => ({ front: map[c.front] || c.front, back: c.back || "" })), null, 2)};\n`);
  }
  if (outLines.length > 1) fs.writeFileSync(path.join(OUT_DIR, "courseTrainingCards.js"), outLines.join("\n"), "utf8");

  console.log("\nHU-DE (British Magyar) data generation complete (EN → HU batch).");
}

main().catch((err) => { console.error(err); process.exit(1); });
