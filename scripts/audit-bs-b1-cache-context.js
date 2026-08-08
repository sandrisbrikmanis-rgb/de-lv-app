#!/usr/bin/env node
/**
 * BS-DE B1 cache context collision detector (read-only).
 * Finds identical LV strings with different DE contexts and checks BS translation consistency.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LV_FILE = path.join(ROOT, "data", "b1.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const CACHE_PATH = path.join(ROOT, "scripts", ".bs-b1-openai-translation-cache.json");
const OUT = path.join(ROOT, "reports", "temp", "bs-b1-cache-context.json");

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember", "info",
]);

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b1-${entry.de}-${index}`;
}

function collectLvStrings(entry, index, visitor, ctx = { path: "", parentKey: "" }) {
  if (entry === null || entry === undefined) return;
  if (typeof entry === "string") {
    if (NATIVE_KEYS.has(ctx.parentKey) || ctx.parentKey === "lv" || ctx.path.endsWith(".lv")) {
      visitor(entry, ctx.path);
    }
    return;
  }
  if (Array.isArray(entry)) {
    entry.forEach((item, i) => collectLvStrings(item, index, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
    return;
  }
  if (typeof entry === "object") {
    for (const [key, val] of Object.entries(entry)) {
      if (key === "de" || key === "de_article" || key === "de_plural" || key === "sectionAccents") continue;
      collectLvStrings(val, index, visitor, {
        path: ctx.path ? `${ctx.path}.${key}` : key,
        parentKey: key,
      });
    }
  }
}

function main() {
  const lv = load(LV_FILE);
  const bs = load(BS_FILE);
  const cache = fs.existsSync(CACHE_PATH)
    ? JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"))
    : {};

  const index = new Map();

  for (let i = 0; i < lv.length; i++) {
    const lvE = lv[i];
    const bsE = bs[i];
    const cardId = entryId(bsE, i);

    collectLvStrings(lvE, i, (lvText, fieldPath) => {
      if (!lvText || !lvText.trim()) return;
      const key = lvText.trim();
      if (!index.has(key)) index.set(key, []);
      index.get(key).push({
        cardId,
        field: fieldPath || "lv",
        de: bsE.de,
        deArticle: bsE.de_article || null,
        bsText: getBsAtPath(bsE, fieldPath) || bsE.lv,
      });
    });
  }

  const collisions = [];
  const suspiciousSame = [];

  for (const [lvText, occurrences] of index.entries()) {
    if (occurrences.length < 2) continue;

    const uniqueDe = new Set(occurrences.map((o) => o.de));
    const uniqueBs = new Set(occurrences.map((o) => (o.bsText || "").trim()));

    if (uniqueDe.size > 1 && uniqueBs.size === 1) {
      collisions.push({
        lvText,
        occurrenceCount: occurrences.length,
        uniqueDeCount: uniqueDe.size,
        sharedBsTranslation: [...uniqueBs][0],
        occurrences: occurrences.slice(0, 10),
        severity: "WARNING",
        reason: "Same LV string with different DE contexts but identical BS translation — possible cache collision",
      });
    }

    if (uniqueDe.size > 1 && uniqueBs.size > 1) {
      suspiciousSame.push({
        lvText,
        occurrenceCount: occurrences.length,
        uniqueDeCount: uniqueDe.size,
        uniqueBsCount: uniqueBs.size,
        occurrences: occurrences.slice(0, 8),
        note: "Different BS translations for same LV in different DE contexts — may be correct if context-dependent",
      });
    }
  }

  const cacheHits = Object.keys(cache).length;

  const out = {
    generatedAt: new Date().toISOString(),
    stats: {
      uniqueLvStrings: index.size,
      multiOccurrenceStrings: [...index.values()].filter((v) => v.length > 1).length,
      cacheEntries: cacheHits,
      potentialCollisions: collisions.length,
      contextDependentTranslations: suspiciousSame.length,
    },
    cacheContextCollisions: collisions,
    contextDependentCases: suspiciousSame.slice(0, 50),
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out.stats, null, 2));
  console.log(`Wrote ${OUT}`);
}

function getBsAtPath(entry, fieldPath) {
  if (!fieldPath || fieldPath === "lv") return entry.lv;
  try {
    const parts = fieldPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    let cur = entry;
    for (const p of parts) {
      if (cur === undefined || cur === null) return null;
      cur = cur[p];
    }
    return typeof cur === "string" ? cur : null;
  } catch {
    return null;
  }
}

main();
