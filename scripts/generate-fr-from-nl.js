#!/usr/bin/env node
/**
 * Generate FR-DE data from NL baseline with batched translation (NL → FR).
 * German (de) fields are copied verbatim from LV source of truth (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll, loadCache, cacheKey } = require("./lib/translate-helper");

const OUT_DIR = path.join(ROOT, "data", "fr");
const CACHE_PATH = path.join(ROOT, "scripts", ".fr-nl-translation-cache.json");
const BULLET = "•";
const FROM_LANG = "nl";
const TO_LANG = "fr";

const NAME_REPLACEMENTS = [
  [/\bPiotr\b/g, "Peter"], [/\bPiotra\b/g, "Peter"],
  [/\bJan\b/g, "Jan"], [/\bJana\b/g, "Jan"],
  [/\bRudolf\b/g, "Rudolf"], [/\bRobert\b/g, "Robert"],
  [/\bMaria\b/g, "Maria"], [/\bMarie\b/g, "Maria"],
  [/\bAlbert\b/g, "Albert"], [/\bAlberta\b/g, "Alberta"],
  [/\bMarta\b/g, "Marta"], [/\bPaweł\b/g, "Paul"], [/\bPaul\b/g, "Paul"],
  [/\bHanna\b/g, "Hanna"], [/\bGertruda\b/g, "Gertrud"], [/\bAnna\b/g, "Anna"],
  [/\bEdgar\b/g, "Edgar"], [/\bBen\b/g, "Ben"], [/\bEmma\b/g, "Emma"],
  [/\bJonas\b/g, "Jonas"], [/\bFinn\b/g, "Finn"],
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
          if (dash) out.add(dash[1].trim());
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

function preserveGermanFields(lvEntry, trEntry) {
  const out = JSON.parse(JSON.stringify(trEntry));
  out.de = lvEntry.de;
  if (lvEntry.de_article !== undefined) out.de_article = lvEntry.de_article;
  if (lvEntry.de_plural !== undefined) out.de_plural = lvEntry.de_plural;
  if (lvEntry.level !== undefined) out.level = lvEntry.level;
  if (lvEntry.study && trEntry.study) {
    out.study = JSON.parse(JSON.stringify(trEntry.study));
    out.study.id = lvEntry.study.id;
    out.study.layout = lvEntry.study.layout;
    if (lvEntry.study.sectionAccents) out.study.sectionAccents = trEntry.study?.sectionAccents || lvEntry.study.sectionAccents;
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
            const trEx = out.study.comparisonTable[i].example || "";
            const dash = trEx.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
            const eq = trEx.match(/^(.+=\s*)(.+)$/);
            if (eq) out.study.comparisonTable[i].example = `${row.example.split("=")[0].trim()} = ${eq[2]}`;
            else if (dash) out.study.comparisonTable[i].example = `${row.de} ${dash[2]}${dash[3]}`;
          }
        }
      });
    }
  }
  return out;
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
    if (!text || seen.has(text)) continue;
    seen.add(text);
    const tr = map[text] || text;
    result = result.split(`>${text}<`).join(`>${tr}<`);
  }
  return result;
}

function loadNlTrainingCardsFromData() {
  const cardsPath = path.join(ROOT, "data/nl/courseTrainingCards.js");
  if (!fs.existsSync(cardsPath)) return {};
  const code = fs.readFileSync(cardsPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const cards = {};
  const arrayPattern = /window\.(lesson\d+(?:Training|Exercise)CardsNl)\s*=\s*(\[[\s\S]*?\n\]);/g;
  let match;
  while ((match = arrayPattern.exec(code)) !== null) {
    const key = match[1];
    const arrCode = match[2];
    const innerCtx = {};
    vm.createContext(innerCtx);
    vm.runInContext(`result = ${arrCode}`, innerCtx);
    if (Array.isArray(innerCtx.result)) cards[key] = innerCtx.result;
  }
  return cards;
}

async function main() {
  const writeOnly = process.argv.includes("--write-only");
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const allStrings = new Set();

  console.log("Loading NL baseline and LV German source...");
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

  const nlA1 = loadData("data/nl/a1.js").A1_WORDS;
  const nlA2 = loadData("data/nl/a2.js").A2_WORDS;
  const nlB1 = loadData("data/nl/b1.js").B1_WORDS;
  const nlB2 = loadData("data/nl/b2.js").B2_WORDS;
  const nlC1 = loadData("data/nl/c1.js").C1_WORDS;
  const nlC2 = loadData("data/nl/c2.js").C2_WORDS;
  const nlSentences = loadData("data/nl/sentences.js").SENTENCE_ENTRIES;
  const nlVerbs = loadData("data/nl/verbs.js").VERB_ENTRIES;
  const nlDialogue = loadData("data/nl/dialogueIdMap.js").DIALOGUE_ID_MAP;
  const nlCourse = loadData("data/nl/courseLessons.js");
  const nlTraining = loadNlTrainingCardsFromData();

  [nlA1, nlA2, nlB1, nlB2, nlC1, nlC2, nlSentences, nlVerbs].forEach((arr) => arr.forEach((e) => collectStrings(e, allStrings)));
  Object.values(nlDialogue).forEach((e) => collectStrings(e, allStrings));
  Object.values(nlCourse.COURSE_LESSON_DATA || {}).forEach((e) => collectStrings(e, allStrings));
  Object.values(nlCourse.COURSE_LESSON_HTML || {}).forEach((html) => {
    [...String(html).matchAll(/>([^<]{3,300})</g)].forEach((m) => {
      const t = m[1].trim();
      if (t) allStrings.add(t);
    });
  });
  Object.values(nlTraining).forEach((deck) => {
    if (Array.isArray(deck)) deck.forEach((c) => { if (c.front) allStrings.add(c.front); });
  });

  const unique = [...allStrings].filter((s) => s && s.trim());
  const existingCache = loadCache(CACHE_PATH);
  const alreadyCached = unique.filter((s) => existingCache[cacheKey(FROM_LANG, TO_LANG, s)]).length;
  console.log(`Found ${unique.length} unique NL strings (${alreadyCached} cached)`);

  let map;
  if (!writeOnly) {
    map = await translateAll(unique, FROM_LANG, TO_LANG, {
      cachePath: CACHE_PATH,
      delayMs: 10,
      concurrency: 50,
      onProgress: (n, remaining) => {
        if (n % 100 === 0) process.stdout.write(`  translated ${n} new (~${remaining} left)\n`);
      },
    });
    for (const [k, v] of Object.entries(map)) {
      map[k] = postProcess(v);
    }
  } else {
    map = {};
    unique.forEach((s) => {
      map[s] = postProcess(existingCache[cacheKey(FROM_LANG, TO_LANG, s)] || s);
    });
  }

  function mergeLevel(lvArr, nlArr) {
    return lvArr.map((lvEntry, i) => {
      const nlEntry = nlArr[i];
      if (!nlEntry || lvEntry.de !== nlEntry.de) {
        console.warn(`Order mismatch at ${lvEntry.de}`);
        return lvEntry;
      }
      const trEntry = applyTranslation(nlEntry, map);
      return preserveGermanFields(lvEntry, trEntry);
    });
  }

  console.log("\nWriting FR files...");
  writeArrayFile(path.join(OUT_DIR, "a1.js"), "A1_WORDS", mergeLevel(lvA1, nlA1));
  writeArrayFile(path.join(OUT_DIR, "a2.js"), "A2_WORDS", mergeLevel(lvA2, nlA2));
  writeArrayFile(path.join(OUT_DIR, "b1.js"), "B1_WORDS", mergeLevel(lvB1, nlB1));
  writeArrayFile(path.join(OUT_DIR, "b2.js"), "B2_WORDS", mergeLevel(lvB2, nlB2));
  writeArrayFile(path.join(OUT_DIR, "c1.js"), "C1_WORDS", mergeLevel(lvC1, nlC1));
  writeArrayFile(path.join(OUT_DIR, "c2.js"), "C2_WORDS", mergeLevel(lvC2, nlC2));
  writeArrayFile(path.join(OUT_DIR, "sentences.js"), "SENTENCE_ENTRIES", mergeLevel(lvSentences, nlSentences));

  const lbVerbs = lvVerbs.map((lvEntry, i) => {
    const nlEntry = nlVerbs[i];
    const te = {};
    for (const form of Object.keys(lvEntry)) {
      te[form] = {
        de: lvEntry[form].de,
        lv: map[nlEntry[form].lv] || nlEntry[form].lv,
      };
    }
    return te;
  });
  writeArrayFile(path.join(OUT_DIR, "verbs.js"), "VERB_ENTRIES", lbVerbs);

  const lbDialogue = {};
  for (const [id, lvEntry] of Object.entries(lvDialogue)) {
    const nlEntry = nlDialogue[id];
    lbDialogue[id] = { de: lvEntry.de, lv: map[nlEntry.lv] || nlEntry.lv };
  }
  fs.writeFileSync(
    path.join(OUT_DIR, "dialogueIdMap.js"),
    `const DIALOGUE_ID_MAP = ${JSON.stringify(lbDialogue, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`,
    "utf8"
  );

  fs.copyFileSync(path.join(ROOT, "data/nounArticles.js"), path.join(OUT_DIR, "nounArticles.js"));

  const lbHtml = {};
  for (const [key, html] of Object.entries(nlCourse.COURSE_LESSON_HTML || {})) {
    lbHtml[key] = await translateHtmlLesson(html, map);
  }
  const lbData = applyTranslation(nlCourse.COURSE_LESSON_DATA, map);
  fs.writeFileSync(
    path.join(OUT_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(lbHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(lbData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
    "utf8"
  );

  const outLines = ["// French course training cards for FR-DE Kurss lessons 1-7.\n"];
  for (const [key, deck] of Object.entries(nlTraining)) {
    if (!Array.isArray(deck)) continue;
    const lbKey = key.replace(/Nl$/, "Fr");
    const translated = deck.map((card) => ({
      front: map[card.front] || card.front,
      back: card.back || "",
    }));
    outLines.push(`window.${lbKey} = ${JSON.stringify(translated, null, 2)};\n`);
  }
  if (outLines.length > 1) {
    fs.writeFileSync(path.join(OUT_DIR, "courseTrainingCards.js"), outLines.join("\n"), "utf8");
  }

  console.log("\nFR-DE data generation complete (NL→FR with LV DE preservation).");
}

main().catch((err) => { console.error(err); process.exit(1); });
