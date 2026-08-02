#!/usr/bin/env node
/**
 * Generate Danish UI strings from English UI template.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".da-ui-en-translation-cache.json");
const BATCH_SIZE = 50;

function collectStrings(obj, out) {
  if (obj === null || obj === undefined) return;
  if (typeof obj === "string") {
    if (obj.trim() && !obj.startsWith("__")) out.add(obj);
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v) => collectStrings(v, out));
    return;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "__langCode") continue;
      collectStrings(v, out);
    }
  }
}

function applyTranslations(obj, map) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "string") return map[obj] ?? obj;
  if (Array.isArray(obj)) return obj.map((v) => applyTranslations(v, map));
  if (typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k === "__langCode") {
        out[k] = "da";
        continue;
      }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings, cache) {
  const map = {};
  const pending = strings.filter((s) => !cache[cacheKey("en", "da", s)]);
  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const batch = pending.slice(i, i + BATCH_SIZE);
    try {
      const results = await translate(batch, { from: "en", to: "da", forceBatch: true });
      const arr = Array.isArray(results) ? results : [results];
      batch.forEach((src, j) => {
        const tr = arr[j]?.text || src;
        cache[cacheKey("en", "da", src)] = tr;
        map[src] = tr;
      });
    } catch (err) {
      console.warn(`UI batch ${i} failed: ${err.message}`);
      for (const src of batch) {
        try {
          const r = await translate(src, { from: "en", to: "da" });
          const tr = r.text || src;
          cache[cacheKey("en", "da", src)] = tr;
          map[src] = tr;
        } catch {
          map[src] = src;
        }
      }
    }
    if (i % 100 === 0) {
      saveCache(CACHE_PATH, cache);
      process.stdout.write(`  UI translated ${Math.min(i + BATCH_SIZE, pending.length)}/${pending.length}\n`);
    }
    await new Promise((r) => setTimeout(r, 80));
  }
  strings.forEach((s) => {
    if (!map[s]) map[s] = cache[cacheKey("en", "da", s)] || s;
  });
  saveCache(CACHE_PATH, cache);
  return map;
}

async function main() {
  const enPath = path.join(ROOT, "languages/en/ui.js");
  const daDir = path.join(ROOT, "languages/da");
  const daPath = path.join(daDir, "ui.js");

  const code = fs.readFileSync(enPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const enUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(enUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings EN→DA`);

  const cache = loadCache(CACHE_PATH);
  const translationMap = await translateBatch(unique, cache);
  const map = {};
  unique.forEach((s) => {
    map[s] = translationMap[s] || s;
  });

  const daUi = applyTranslations(enUi, map);
  daUi.__langCode = "da";
  if (daUi.app) {
    daUi.app.title = "Tysk • DA-DE";
    daUi.app.subtitle = "Din smarte tysklæringsguide efter niveauer";
    daUi.app.shellLabel = "Tysk–dansk kort";
  }
  if (daUi.splash) {
    daUi.splash.title = "Tysk";
    daUi.splash.subtitle = "Lær tysk";
  }
  if (daUi.languageSelect) {
    daUi.languageSelect.title = "Vælg sprog";
    daUi.languageSelect.footer = "Lær tysk";
  }
  if (daUi.study?.table) {
    daUi.study.table.native = "DA";
  }
  if (daUi.spelling) {
    daUi.spelling.writeNative = "Skriv på dansk";
    daUi.spelling.writeGerman = "Skriv på tysk";
  }

  fs.mkdirSync(daDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(daUi, null, 2)};\n`;
  fs.writeFileSync(daPath, output, "utf8");
  console.log(`Written ${daPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
