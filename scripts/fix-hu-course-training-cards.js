#!/usr/bin/env node
/**
 * Regenerate NL courseTrainingCards.js from LT source using translation cache.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".hu-lv-translation-cache.json");
const cache = loadCache(CACHE_PATH);

function translate(text) {
  if (!text) return text;
  return cache[cacheKey("lv", "hu", text)] || text;
}

const ltPath = path.join(ROOT, "data/lt/courseTrainingCards.js");
const code = fs.readFileSync(ltPath, "utf8");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(code, ctx);

const outLines = ["// British Magyar course training cards for HU-DE Kurss lessons 1-7.\n"];
const arrayPattern = /window\.(lesson\d+(?:Training|Exercise)CardsLt)\s*=\s*(\[[\s\S]*?\n\]);/g;
let match;
while ((match = arrayPattern.exec(code)) !== null) {
  const huKey = match[1].replace(/Lt$/, "Hu");
  const innerCtx = {};
  vm.createContext(innerCtx);
  vm.runInContext(`result = ${match[2]}`, innerCtx);
  const deck = innerCtx.result.map((card) => ({
    front: translate(card.front) || card.front,
    back: card.back || "",
  }));
  outLines.push(`window.${huKey} = ${JSON.stringify(deck, null, 2)};\n`);
}

fs.writeFileSync(path.join(ROOT, "data/hu/courseTrainingCards.js"), outLines.join("\n"), "utf8");
console.log(`Written ${outLines.length - 1} decks to data/hu/courseTrainingCards.js`);
