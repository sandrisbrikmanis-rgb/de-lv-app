#!/usr/bin/env node
/**
 * Regenerate IT courseTrainingCards.js from FR source using translation cache.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".it-fr-translation-cache.json");
const cache = loadCache(CACHE_PATH);

function translate(text) {
  if (!text) return text;
  return cache[cacheKey("fr", "it", text)] || text;
}

const frPath = path.join(ROOT, "data/fr/courseTrainingCards.js");
const code = fs.readFileSync(frPath, "utf8");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(code, ctx);

const outLines = ["// Italian course training cards for IT-DE Kurss lessons 1-7.\n"];
const arrayPattern = /window\.(lesson\d+(?:Training|Exercise)CardsFr)\s*=\s*(\[[\s\S]*?\n\]);/g;
let match;
while ((match = arrayPattern.exec(code)) !== null) {
  const itKey = match[1].replace(/Fr$/, "It");
  const innerCtx = {};
  vm.createContext(innerCtx);
  vm.runInContext(`result = ${match[2]}`, innerCtx);
  const deck = innerCtx.result.map((card) => ({
    front: translate(card.front) || card.front,
    back: card.back || "",
  }));
  outLines.push(`window.${itKey} = ${JSON.stringify(deck, null, 2)};\n`);
}

fs.writeFileSync(path.join(ROOT, "data/it/courseTrainingCards.js"), outLines.join("\n"), "utf8");
console.log(`Written ${outLines.length - 1} decks to data/it/courseTrainingCards.js`);
