#!/usr/bin/env node
/**
 * Re-translate SK UI strings that still contain Polish diacritics.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".sk-ui-polish-fix-cache.json");
const PL_CHARS = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/;

function collectPolishStrings(obj, out) {
  if (obj === null || obj === undefined) return;
  if (typeof obj === "string") {
    if (obj.trim() && PL_CHARS.test(obj)) out.add(obj);
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v) => collectPolishStrings(v, out));
    return;
  }
  if (typeof obj === "object") {
    for (const v of Object.values(obj)) collectPolishStrings(v, out);
  }
}

function applyMap(obj, map) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "string") return map[obj] ?? obj;
  if (Array.isArray(obj)) return obj.map((v) => applyMap(v, map));
  if (typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = applyMap(v, map);
    return out;
  }
  return obj;
}

async function main() {
  const skPath = path.join(ROOT, "languages/sk/ui.js");
  const code = fs.readFileSync(skPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const skUi = ctx.window.LANGUAGE_UI_STRINGS;

  const polish = new Set();
  collectPolishStrings(skUi, polish);
  const unique = [...polish];
  console.log(`Found ${unique.length} strings with Polish diacritics`);

  if (!unique.length) return;

  const map = await translateAll(unique, "pl", "sk", {
    cachePath: CACHE_PATH,
    delayMs: 10,
    concurrency: 30,
  });

  const fixed = applyMap(skUi, map);
  fixed.__langCode = "sk";
  if (fixed.app) {
    fixed.app.title = "Nemčina • SK-DE";
    fixed.app.subtitle = "Váš inteligentný sprievodca nemčinou podľa úrovní";
    fixed.app.shellLabel = "Nemecko-slovenské kartičky";
  }
  if (fixed.study?.table) fixed.study.table.native = "SK";
  if (fixed.spelling) {
    fixed.spelling.writeNative = "Píšte po slovensky";
    fixed.spelling.writeGerman = "Píšte po nemecky";
  }

  fs.writeFileSync(skPath, `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(fixed, null, 2)};\n`, "utf8");
  console.log("Fixed SK UI Polish remnants");
}

main().catch((err) => { console.error(err); process.exit(1); });
