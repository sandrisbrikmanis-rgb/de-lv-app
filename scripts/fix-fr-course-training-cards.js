#!/usr/bin/env node
/**
 * Regenerate LB courseTrainingCards.js from LT source using translation cache.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".fr-nl-translation-cache.json");
const cache = loadCache(CACHE_PATH);

function translate(text) {
  if (!text) return text;
  return cache[cacheKey("nl", "fr", text)] || text;
}

const nlPath = path.join(ROOT, "data/nl/courseTrainingCards.js");
const code = fs.readFileSync(nlPath, "utf8");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(code, ctx);

const outLines = ["// French course training cards for FR-DE Kurss lessons 1-7.\n"];
const arrayPattern = /window\.(lesson\d+(?:Training|Exercise)CardsNl)\s*=\s*(\[[\s\S]*?\n\]);/g;
let match;
while ((match = arrayPattern.exec(code)) !== null) {
  const lbKey = match[1].replace(/Nl$/, "Fr");
  const innerCtx = {};
  vm.createContext(innerCtx);
  vm.runInContext(`result = ${match[2]}`, innerCtx);
  const deck = innerCtx.result.map((card) => ({
    front: translate(card.front) || card.front,
    back: card.back || "",
  }));
  outLines.push(`window.${lbKey} = ${JSON.stringify(deck, null, 2)};\n`);
}

fs.writeFileSync(path.join(ROOT, "data/fr/courseTrainingCards.js"), outLines.join("\n"), "utf8");
console.log(`Written ${outLines.length - 1} decks to data/fr/courseTrainingCards.js`);
