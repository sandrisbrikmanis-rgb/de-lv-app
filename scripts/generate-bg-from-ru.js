#!/usr/bin/env node
/**
 * Generate BG-DE data from RU baseline (Cyrillic Slavic) with batched translation.
 * German (de) fields are copied verbatim from LV source of truth.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");

const OUT_DIR = path.join(ROOT, "data", "bg");
const RU_DIR = path.join(ROOT, "data", "ru");
const CACHE_PATH = path.join(ROOT, "scripts", ".bg-ru-translation-cache.json");
const BULLET = "•";
const BATCH_SIZE = 50;
const BATCH_DELAY_MS = 300;
const SINGLE_DELAY_MS = 200;

const NAME_REPLACEMENTS = [
  [/\bПётр\b/g, "Петър"], [/\bПетра\b/g, "Петър"],
  [/\bИван\b/g, "Иван"],
  [/\bРудольф\b/g, "Рудолф"], [/\bРоберт\b/g, "Робърт"],
  [/\bМария\b/g, "Мария"],
  [/\bАльберт\b/g, "Алберт"], [/\bАльберта\b/g, "Алберта"],
  [/\bМарта\b/g, "Марта"], [/\bПавел\b/g, "Павел"],
  [/\bХанна\b/g, "Хана"], [/\bГертруда\b/g, "Гертруд"], [/\bАнна\b/g, "Анна"],
  [/\bЭдгар\b/g, "Едгар"], [/\bБен\b/g, "Бен"], [/\bЭмма\b/g, "Ема"],
  [/\bЙонас\b/g, "Йонас"], [/\bФинн\b/g, "Фин"],
];

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

function isCyrillicText(text) {
  return typeof text === "string" && /[\u0400-\u04FF]/.test(text);
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
            if (right && isCyrillicText(right)) out.add(right);
          }
          const dash = v.match(/\s*[–—-]\s*(.+)$/);
          if (dash && isCyrillicText(dash[1])) out.add(dash[1].trim());
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

function preserveGermanFields(lvEntry, bgEntry) {
  const out = JSON.parse(JSON.stringify(bgEntry));
  out.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) out.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) out.de_plural = lvEntry.de_plural;
  if (lvEntry.level !== undefined) out.level = lvEntry.level;
  if (lvEntry.study && bgEntry.study) {
    out.study = JSON.parse(JSON.stringify(bgEntry.study));
    out.study.id = lvEntry.study.id;
    out.study.layout = lvEntry.study.layout;
    if (lvEntry.study.sectionAccents) out.study.sectionAccents = bgEntry.study?.sectionAccents || lvEntry.study.sectionAccents;
    if (Array.isArray(lvEntry.study.examples) && Array.isArray(out.study.examples)) {
      lvEntry.study.examples.forEach((ex, i) => {
        if (out.study.examples[i]) out.study.examples[i].de = ex.de;
      });
    }
    if (Array.isArray(lvEntry.study.comparison) && Array.isArray(out.study.comparison)) {
      lvEntry.study.comparison.forEach((row, i) => {
        if (out.study.comparison[i]) out.study.comparison[i].word = row.word;
      });
    }
    if (Array.isArray(out.study.words) && Array.isArray(lvEntry.study.words)) {
      lvEntry.study.words.forEach((w, i) => {
        if (out.study.words[i]) {
          out.study.words[i].de = w.de;
          if (w.example && out.study.words[i].example) {
            const dash = String(out.study.words[i].example).match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
            if (dash) out.study.words[i].example = `${w.de} ${dash[2]}${dash[3]}`;
          }
        }
      });
    }
    if (Array.isArray(out.study.comparisonTable) && Array.isArray(lvEntry.study.comparisonTable)) {
      lvEntry.study.comparisonTable.forEach((row, i) => {
        if (out.study.comparisonTable[i]) {
          out.study.comparisonTable[i].de = row.de;
          if (row.example) {
            const bgEx = out.study.comparisonTable[i].example || "";
            const dash = bgEx.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
            const eq = bgEx.match(/^(.+=\s*)(.+)$/);
            if (eq) out.study.comparisonTable[i].example = `${row.example.split("=")[0].trim()} = ${eq[2]}`;
            else if (dash) out.study.comparisonTable[i].example = `${row.de} ${dash[2]}${dash[3]}`;
          }
        }
      });
    }
  }
  return out;
}

async function translateBatch(strings) {
  const pending = strings.filter((s) => !cache[s.trim()]);
  if (!pending.length) return;
  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const chunk = pending.slice(i, i + BATCH_SIZE);
    try {
      const res = await translate(chunk, { from: "ru", to: "bg", forceBatch: true });
      const results = Array.isArray(res) ? res : [res];
      chunk.forEach((src, idx) => {
        cache[src.trim()] = postProcess(results[idx]?.text || src);
      });
      saveCache();
      process.stdout.write(`  batch ${Math.min(i + BATCH_SIZE, pending.length)}/${pending.length}\n`);
      await sleep(BATCH_DELAY_MS);
    } catch (err) {
      console.error(`Batch failed, falling back to single: ${err.message}`);
      for (const src of chunk) {
        try {
          const res = await translate(src.trim(), { from: "ru", to: "bg" });
          cache[src.trim()] = postProcess(res.text);
        } catch {
          cache[src.trim()] = src;
        }
        await sleep(SINGLE_DELAY_MS);
      }
      saveCache();
    }
  }
}

function loadData(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
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
    if (!text || seen.has(text) || !isCyrillicText(text)) continue;
    seen.add(text);
    const bg = map[text] || text;
    result = result.split(`>${text}<`).join(`>${bg}<`);
  }
  return result;
}

async function main() {
  const writeOnly = process.argv.includes("--write-only");
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const allStrings = new Set();

  console.log("Loading RU baseline and LV German source...");
  const lvA1 = loadData("data/a1.js").A1_WORDS;
  const lvA2 = loadData("data/a2.js").A2_WORDS;
  const lvB1 = loadData("data/b1.js").B1_WORDS;
  const lvB2 = loadData("data/b2.js").B2_WORDS;
  const lvC1 = loadData("data/c1.js").C1_WORDS;
  const lvC2 = loadData("data/c2.js").C2_WORDS;
  const lvSentences = loadData("data/sentences.js").SENTENCE_ENTRIES;
  const lvVerbs = loadData("data/verbs.js").VERB_ENTRIES;
  const lvDialogue = loadData("data/dialogueIdMap.js").DIALOGUE_ID_MAP;
  const lvCourse = loadData("data/courseLessons.js");

  const ruA1 = loadData("data/ru/a1.js").A1_WORDS;
  const ruA2 = loadData("data/ru/a2.js").A2_WORDS;
  const ruB1 = loadData("data/ru/b1.js").B1_WORDS;
  const ruB2 = loadData("data/ru/b2.js").B2_WORDS;
  const ruC1 = loadData("data/ru/c1.js").C1_WORDS;
  const ruC2 = loadData("data/ru/c2.js").C2_WORDS;
  const ruSentences = loadData("data/ru/sentences.js").SENTENCE_ENTRIES;
  const ruVerbs = loadData("data/ru/verbs.js").VERB_ENTRIES;
  const ruDialogue = loadData("data/ru/dialogueIdMap.js").DIALOGUE_ID_MAP;
  const ruCourse = loadData("data/ru/courseLessons.js");
  const ruTraining = fs.existsSync(path.join(RU_DIR, "courseTrainingCards.js"))
    ? loadData("data/ru/courseTrainingCards.js") : {};

  [ruA1, ruA2, ruB1, ruB2, ruC1, ruC2, ruSentences, ruVerbs].forEach((arr) => arr.forEach((e) => collectStrings(e, allStrings)));
  Object.values(ruDialogue).forEach((e) => collectStrings(e, allStrings));
  Object.values(ruCourse.COURSE_LESSON_DATA || {}).forEach((e) => collectStrings(e, allStrings));
  Object.values(ruCourse.COURSE_LESSON_HTML || {}).forEach((html) => {
    [...String(html).matchAll(/>([^<]{3,300})</g)].forEach((m) => {
      const t = m[1].trim();
      if (isCyrillicText(t)) allStrings.add(t);
    });
  });
  Object.values(ruTraining).forEach((deck) => {
    if (Array.isArray(deck)) deck.forEach((c) => { if (c.front) allStrings.add(c.front); });
  });

  const unique = [...allStrings].filter((s) => s && s.trim());
  console.log(`Found ${unique.length} unique RU strings (${Object.keys(cache).length} cached)`);

  if (!writeOnly) {
    await translateBatch(unique);
  }
  const map = {};
  unique.forEach((s) => { map[s] = cache[s.trim()] || s; });

  function mergeLevel(lvArr, ruArr) {
    return lvArr.map((lvEntry, i) => {
      const ruEntry = ruArr[i];
      if (!ruEntry || lvEntry.de !== ruEntry.de) {
        console.warn(`Order mismatch at ${lvEntry.de}`);
        return lvEntry;
      }
      const bgEntry = applyTranslation(ruEntry, map);
      return preserveGermanFields(lvEntry, bgEntry);
    });
  }

  console.log("\nWriting BG files...");
  writeArrayFile(path.join(OUT_DIR, "a1.js"), "A1_WORDS", mergeLevel(lvA1, ruA1));
  writeArrayFile(path.join(OUT_DIR, "a2.js"), "A2_WORDS", mergeLevel(lvA2, ruA2));
  writeArrayFile(path.join(OUT_DIR, "b1.js"), "B1_WORDS", mergeLevel(lvB1, ruB1));
  writeArrayFile(path.join(OUT_DIR, "b2.js"), "B2_WORDS", mergeLevel(lvB2, ruB2));
  writeArrayFile(path.join(OUT_DIR, "c1.js"), "C1_WORDS", mergeLevel(lvC1, ruC1));
  writeArrayFile(path.join(OUT_DIR, "c2.js"), "C2_WORDS", mergeLevel(lvC2, ruC2));
  writeArrayFile(path.join(OUT_DIR, "sentences.js"), "SENTENCE_ENTRIES", mergeLevel(lvSentences, ruSentences));

  const bgVerbs = lvVerbs.map((lvEntry, i) => {
    const ruEntry = ruVerbs[i];
    const te = {};
    for (const form of Object.keys(lvEntry)) {
      te[form] = {
        de: lvEntry[form].de,
        lv: map[ruEntry[form].lv] || ruEntry[form].lv,
      };
    }
    return te;
  });
  writeArrayFile(path.join(OUT_DIR, "verbs.js"), "VERB_ENTRIES", bgVerbs);

  const bgDialogue = {};
  for (const [id, lvEntry] of Object.entries(lvDialogue)) {
    const ruEntry = ruDialogue[id];
    bgDialogue[id] = { de: lvEntry.de, lv: map[ruEntry.lv] || ruEntry.lv };
  }
  fs.writeFileSync(
    path.join(OUT_DIR, "dialogueIdMap.js"),
    `const DIALOGUE_ID_MAP = ${JSON.stringify(bgDialogue, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
    "utf8"
  );

  fs.copyFileSync(path.join(ROOT, "data/nounArticles.js"), path.join(OUT_DIR, "nounArticles.js"));

  const bgHtml = {};
  for (const [key, html] of Object.entries(ruCourse.COURSE_LESSON_HTML || {})) {
    bgHtml[key] = await translateHtmlLesson(html, map);
  }
  const bgData = applyTranslation(ruCourse.COURSE_LESSON_DATA, map);
  fs.writeFileSync(
    path.join(OUT_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(bgHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(bgData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
    "utf8"
  );

  const outLines = ["// Bulgarian course training cards for BG-DE Kurss lessons 1-7.\n"];
  for (const [key, deck] of Object.entries(ruTraining)) {
    if (!Array.isArray(deck)) continue;
    const translated = deck.map((card) => ({
      front: map[card.front] || card.front,
      back: card.back || "",
    }));
    outLines.push(`window.${key.replace(/Ru$/, "Bg")} = ${JSON.stringify(translated, null, 2)};\n`);
  }
  if (outLines.length > 1) {
    fs.writeFileSync(path.join(OUT_DIR, "courseTrainingCards.js"), outLines.join("\n"), "utf8");
  }

  saveCache();
  console.log("\nBG-DE data generation complete (RU→BG with LV DE preservation).");
}

main().catch((err) => { console.error(err); saveCache(); process.exit(1); });
