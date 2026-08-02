#!/usr/bin/env node
/**
 * Regenerate PT courseTrainingCards.js from ES source (ES → PT via gtx).
 * German (back) fields are preserved unchanged.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, cacheKey, sleep } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".es-pt-training-cache.json");

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
  const esPath = path.join(ROOT, "data/es/courseTrainingCards.js");
  const code = fs.readFileSync(esPath, "utf8");
  const cache = loadCache(CACHE_PATH);

  const strings = new Set();
  const arrayPattern = /window\.(lesson\d+(?:Training|Exercise)CardsEs)\s*=\s*(\[[\s\S]*?\n\]);/g;
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
  const pending = unique.filter((s) => !cache[cacheKey("es", "pt", s)]);
  console.log(`Translating ${pending.length} training card strings ES→PT...`);
  for (const src of pending) {
    try {
      cache[cacheKey("es", "pt", src)] = await translateGtx(src, "es", "pt");
      saveCache(CACHE_PATH, cache);
    } catch {
      cache[cacheKey("es", "pt", src)] = src;
    }
    await sleep(80);
  }

  const outLines = ["// Portuguese course training cards for PT-DE Kurss lessons 1-7.\n"];
  for (const deck of decks) {
    const ptKey = deck.key.replace(/Es$/, "Pt");
    const translated = deck.cards.map((card) => ({
      front: cache[cacheKey("es", "pt", card.front)] || card.front,
      back: card.back || "",
    }));
    outLines.push(`window.${ptKey} = ${JSON.stringify(translated, null, 2)};\n`);
  }

  fs.writeFileSync(path.join(ROOT, "data/pt/courseTrainingCards.js"), outLines.join("\n"), "utf8");
  console.log(`Written ${decks.length} decks to data/pt/courseTrainingCards.js`);
}

main().catch((err) => { console.error(err); process.exit(1); });
