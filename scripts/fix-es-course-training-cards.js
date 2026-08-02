#!/usr/bin/env node
/**
 * Regenerate ES courseTrainingCards.js from PL source (PL → ES via gtx).
 * German (back) fields are preserved unchanged.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, cacheKey, sleep } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".es-pl-training-cache.json");

async function translateGtx(text, from, to) {
  const trimmed = text.trim();
  if (!trimmed || from === to) return text;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(trimmed)}`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`gtx HTTP ${res.status}`);
  const data = await res.json();
  return data?.[0]?.map((seg) => seg[0]).join("") || trimmed;
}

async function main() {
  const plPath = path.join(ROOT, "data/pl/courseTrainingCards.js");
  const code = fs.readFileSync(plPath, "utf8");
  const cache = loadCache(CACHE_PATH);

  const strings = new Set();
  const arrayPattern = /window\.(lesson\d+(?:Training|Exercise)CardsPl)\s*=\s*(\[[\s\S]*?\n\]);/g;
  const decks = [];
  let match;
  while ((match = arrayPattern.exec(code)) !== null) {
    const innerCtx = {};
    vm.createContext(innerCtx);
    vm.runInContext(`result = ${match[2]}`, innerCtx);
    innerCtx.result.forEach((card) => { if (card.front) strings.add(card.front); });
    decks.push({ key: match[1], cards: innerCtx.result });
  }

  const unique = [...strings].filter(Boolean);
  const pending = unique.filter((s) => !cache[cacheKey("pl", "es", s)]);
  console.log(`Translating ${pending.length} training card strings PL→ES...`);
  for (const src of pending) {
    try {
      cache[cacheKey("pl", "es", src)] = await translateGtx(src, "pl", "es");
      saveCache(CACHE_PATH, cache);
    } catch {
      cache[cacheKey("pl", "es", src)] = src;
    }
    await sleep(80);
  }

  const outLines = ["// Spanish course training cards for ES-DE Kurss lessons 1-7.\n"];
  for (const deck of decks) {
    const esKey = deck.key.replace(/Pl$/, "Es");
    const translated = deck.cards.map((card) => ({
      front: cache[cacheKey("pl", "es", card.front)] || card.front,
      back: card.back || "",
    }));
    outLines.push(`window.${esKey} = ${JSON.stringify(translated, null, 2)};\n`);
  }

  fs.writeFileSync(path.join(ROOT, "data/es/courseTrainingCards.js"), outLines.join("\n"), "utf8");
  console.log(`Written ${decks.length} decks to data/es/courseTrainingCards.js`);
}

main().catch((err) => { console.error(err); process.exit(1); });
