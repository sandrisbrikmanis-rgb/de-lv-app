#!/usr/bin/env node
/**
 * OpenAI batch translation for remaining LV/Cyrillic remnants in BS data.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const OpenAI = require("openai");
const { ROOT } = require("./lib/audit-common");

const BS_DIR = path.join(ROOT, "data", "bs");
const CACHE_PATH = path.join(ROOT, "scripts", ".bs-openai-translation-cache.json");
const LV_DIAC = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const CYR = /[а-яА-ЯёЁ]/;
const BATCH = 30;

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember",
]);

let cache = fs.existsSync(CACHE_PATH) ? JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")) : {};

function needsFix(t) {
  return t && typeof t === "string" && (LV_DIAC.test(t) || CYR.test(t));
}

function saveCache() {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function collectRemnants(value, out, pk = "") {
  if (value == null) return;
  if (typeof value === "string") {
    if ((NATIVE_KEYS.has(pk) || pk === "example") && needsFix(value)) out.add(value);
    return;
  }
  if (Array.isArray(value)) value.forEach((v) => collectRemnants(v, out, NATIVE_KEYS.has(pk) ? pk : pk));
  else if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (["de", "de_article", "de_plural", "sectionAccents", "id", "layout", "level"].includes(k)) continue;
      collectRemnants(v, out, k);
    }
  }
}

async function translateBatch(client, strings) {
  const pending = strings.filter((s) => !cache[s]);
  if (!pending.length) return;
  for (let i = 0; i < pending.length; i += BATCH) {
    const chunk = pending.slice(i, i + BATCH);
    const prompt = `Translate each numbered line from Latvian to Bosnian (Latin script, natural Bosnian).
Keep German words, placeholders like {word}, HTML tags, bullet • separators unchanged.
Return ONLY translations, one per line, same numbering.

${chunk.map((s, idx) => `${idx + 1}. ${s}`).join("\n")}`;

    try {
      const res = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
      });
      const text = res.choices[0]?.message?.content || "";
      const lines = text.split("\n").filter(Boolean);
      chunk.forEach((src, idx) => {
        const line = lines[idx] || "";
        const cleaned = line.replace(/^\d+\.\s*/, "").trim();
        cache[src] = cleaned || src;
      });
      saveCache();
      process.stdout.write(`  ${Math.min(i + BATCH, pending.length)}/${pending.length}\n`);
    } catch (err) {
      console.error("Batch error:", err.message);
      for (const src of chunk) {
        try {
          const res = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: `Translate from Latvian to Bosnian (Latin script). Keep German words unchanged. Return only the translation:\n\n${src}` }],
            temperature: 0.2,
          });
          cache[src] = (res.choices[0]?.message?.content || src).trim();
        } catch {
          cache[src] = src;
        }
        saveCache();
      }
    }
  }
}

function applyMap(value, map, pk = "") {
  if (value == null) return value;
  if (typeof value === "string") {
    if ((NATIVE_KEYS.has(pk) || pk === "example") && map[value]) return map[value];
    if (pk === "example" && value.includes("=")) {
      const idx = value.indexOf("=");
      const left = value.slice(0, idx + 1);
      const right = value.slice(idx + 1).trim();
      return right && map[right] ? `${left} ${map[right]}` : value;
    }
    if (pk === "example") {
      const dash = value.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
      if (dash) {
        const right = dash[3].trim();
        return right && map[right] ? `${dash[1]}${dash[2]}${map[right]}` : value;
      }
    }
    return value;
  }
  if (Array.isArray(value)) return value.map((v) => applyMap(v, map, pk));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = k === "sectionAccents" ? v : applyMap(v, map, k);
    }
    return out;
  }
  return value;
}

function writeArray(fp, varName, data) {
  fs.writeFileSync(fp, `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

async function main() {
  const client = new OpenAI();
  const remnants = new Set();
  const pairs = [
    ["data/a1.js", "A1_WORDS"], ["data/a2.js", "A2_WORDS"], ["data/b1.js", "B1_WORDS"],
    ["data/b2.js", "B2_WORDS"], ["data/c1.js", "C1_WORDS"], ["data/c2.js", "C2_WORDS"],
    ["data/sentences.js", "SENTENCE_ENTRIES"], ["data/verbs.js", "VERB_ENTRIES"],
  ];

  for (const [rel, key] of pairs) {
    const data = load(`data/bs/${path.basename(rel)}`)[key];
    if (Array.isArray(data)) data.forEach((e) => collectRemnants(e, remnants));
  }
  const dlg = load("data/bs/dialogueIdMap.js").DIALOGUE_ID_MAP;
  Object.values(dlg).forEach((e) => collectRemnants(e, remnants));
  const course = load("data/bs/courseLessons.js");
  Object.values(course.COURSE_LESSON_DATA || {}).forEach((e) => collectRemnants(e, remnants));
  const htmlStr = JSON.stringify(course.COURSE_LESSON_HTML || {});
  [...htmlStr.matchAll(/>([^<]{4,250})</g)].forEach((m) => { if (needsFix(m[1])) remnants.add(m[1].trim()); });
  const train = load("data/bs/courseTrainingCards.js");
  Object.values(train).forEach((deck) => {
    if (Array.isArray(deck)) deck.forEach((c) => { if (needsFix(c.front)) remnants.add(c.front); });
  });

  const unique = [...remnants].filter(Boolean);
  console.log(`Translating ${unique.length} remnants via OpenAI (${Object.keys(cache).length} cached)`);
  await translateBatch(client, unique);

  const map = {};
  unique.forEach((s) => { map[s] = cache[s] || s; });

  for (const [rel, key] of pairs) {
    const data = load(`data/bs/${path.basename(rel)}`)[key];
    writeArray(path.join(BS_DIR, path.basename(rel)), key, data.map((e) => applyMap(e, map)));
  }

  const outDlg = {};
  for (const [id, e] of Object.entries(dlg)) outDlg[id] = applyMap(e, map);
  fs.writeFileSync(path.join(BS_DIR, "dialogueIdMap.js"), `const DIALOGUE_ID_MAP = ${JSON.stringify(outDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`);

  const bsHtml = {};
  for (const [k, html] of Object.entries(course.COURSE_LESSON_HTML || {})) {
    let h = html;
    const sorted = Object.entries(map).sort((a, b) => b[0].length - a[0].length);
    for (const [src, tr] of sorted) { if (src.length > 2 && h.includes(src)) h = h.split(src).join(tr); }
    bsHtml[k] = h;
  }
  fs.writeFileSync(path.join(BS_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(bsHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(applyMap(course.COURSE_LESSON_DATA, map), null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`);

  const lines = ["// Bosnian course training cards for BS-DE Kurss lessons 1-7.\n"];
  for (const [key, deck] of Object.entries(train)) {
    if (!Array.isArray(deck)) continue;
    lines.push(`window.${key} = ${JSON.stringify(deck.map((c) => ({ front: map[c.front] || c.front, back: c.back || "" })), null, 2)};\n`);
  }
  fs.writeFileSync(path.join(BS_DIR, "courseTrainingCards.js"), lines.join("\n"));
  console.log("OpenAI translation pass complete.");
}

main().catch((e) => { console.error(e); saveCache(); process.exit(1); });
