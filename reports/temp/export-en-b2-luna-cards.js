#!/usr/bin/env node
/** Export compact EN–DE B2 card payloads for linguistic batch review (read-only). */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");
const BATCH_SIZE = 192;
const OUT_DIR = path.join(ROOT, "reports/temp/en-b2-luna-batches");

const NATIVE_KEYS = new Set([
  "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "text", "left", "right", "word", "content",
  "explanation", "tip", "important", "mistakes", "remember", "info",
  "formsLabel", "rektion", "forms", "mainIdea", "lv",
]);

function load(p) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
  return ctx.window.B2_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function collectEnFields(lvStudy, enStudy, prefix = "study") {
  const fields = [];
  function walk(lvObj, enObj, p) {
    if (!lvObj && !enObj) return;
    if (typeof lvObj === "string" && typeof enObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || p.includes(".lv") || p.includes(".meaning")) {
        fields.push({ field: p, lvSource: lvObj, enText: enObj });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(enObj)) {
      const len = Math.max(lvObj.length, enObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], enObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && enObj && typeof enObj === "object") {
      for (const key of new Set([...Object.keys(lvObj), ...Object.keys(enObj)])) {
        if (key === "de" || key === "sectionAccents" || key === "id" || key === "layout") continue;
        walk(lvObj[key], enObj[key], p ? `${p}.${key}` : key);
      }
    }
  }
  walk(lvStudy, enStudy, prefix);
  return fields;
}

function collectDeExamples(study) {
  if (!study?.examples) return [];
  return study.examples.map((ex, i) => ({ index: i, de: ex.de || "", lvSource: ex.lv || "" }));
}

function collectDeComparison(study) {
  if (!study?.comparison) return [];
  return study.comparison.map((row, i) => ({
    index: i,
    deWord: row.word || "",
    lvSource: row.meaning || "",
    deExample: row.example || "",
  }));
}

const lv = load(path.join(ROOT, "data/b2.js"));
const en = load(path.join(ROOT, "data/en/b2.js"));

const cards = [];
for (let i = 0; i < lv.length; i++) {
  const lvE = lv[i];
  const enE = en[i];
  const card = {
    index: i,
    cardId: entryId(enE, i),
    de: enE.de,
    de_article: enE.de_article || null,
    de_plural: enE.de_plural || null,
    enMain: enE.lv,
    lvMainSource: lvE.lv,
    hasStudy: !!enE.study,
    studyLayout: enE.study?.layout || null,
    studyTranslation: enE.study?.translation || null,
    enFields: enE.study ? collectEnFields(lvE.study, enE.study) : [],
    deExamples: enE.study ? collectDeExamples(enE.study) : [],
    deComparison: enE.study ? collectDeComparison(enE.study) : [],
  };
  cards.push(card);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const batches = [];
for (let b = 0; b * BATCH_SIZE < cards.length; b++) {
  const slice = cards.slice(b * BATCH_SIZE, (b + 1) * BATCH_SIZE);
  const name = `en-b2-luna-batch-${String(b).padStart(2, "0")}.json`;
  const filePath = path.join(OUT_DIR, name);
  fs.writeFileSync(
    filePath,
    JSON.stringify({ batch: b, startIndex: b * BATCH_SIZE, count: slice.length, cards: slice }, null, 2)
  );
  batches.push({ batch: b, file: `reports/temp/en-b2-luna-batches/${name}`, count: slice.length });
}

fs.writeFileSync(
  path.join(ROOT, "reports/temp/en-b2-luna-batches-index.json"),
  JSON.stringify({ total: cards.length, batchSize: BATCH_SIZE, batches }, null, 2)
);
console.log(JSON.stringify({ total: cards.length, batches: batches.length }, null, 2));
