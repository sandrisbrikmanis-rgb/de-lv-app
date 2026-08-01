#!/usr/bin/env node
/**
 * Generate Romanian UI strings from Polish UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");

const CACHE_PATH = path.join(ROOT, "scripts", ".ro-ui-translation-cache.json");
const BATCH_SIZE = 30;

let cache = {};
if (fs.existsSync(CACHE_PATH)) {
  try { cache = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")); } catch { cache = {}; }
}

function saveCache() {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

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
      if (k === "__langCode") { out[k] = "ro"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const pending = strings.filter((s) => !cache[s]);
  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const chunk = pending.slice(i, i + BATCH_SIZE);
    try {
      const res = await translate(chunk, { from: "pl", to: "ro", forceBatch: true });
      const results = Array.isArray(res) ? res : [res];
      chunk.forEach((src, idx) => {
        cache[src] = results[idx]?.text || src;
      });
      saveCache();
      process.stdout.write(`  UI batch ${Math.min(i + BATCH_SIZE, pending.length)}/${pending.length}\n`);
      await sleep(100);
    } catch (err) {
      console.error(`Batch failed: ${err.message}`);
      for (const src of chunk) {
        try {
          const res = await translate(src, { from: "pl", to: "ro" });
          cache[src] = res.text;
        } catch {
          cache[src] = src;
        }
        await sleep(80);
      }
      saveCache();
    }
  }
}

async function main() {
  const plPath = path.join(ROOT, "languages/pl/ui.js");
  const roDir = path.join(ROOT, "languages/ro");
  const roPath = path.join(roDir, "ui.js");

  const code = fs.readFileSync(plPath, "utf8");
  const ctx = { LANGUAGE_UI_STRINGS: null };
  vm.createContext(ctx);
  vm.runInContext(code.replace("window.LANGUAGE_UI_STRINGS", "LANGUAGE_UI_STRINGS"), ctx);
  const plUi = ctx.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(plUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings (${Object.keys(cache).length} cached)`);

  await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = cache[s] || s; });

  // Manual overrides for RO-DE branding
  const roUi = applyTranslations(plUi, map);
  roUi.__langCode = "ro";
  if (roUi.app) {
    roUi.app.title = roUi.app.title.replace(/PL-DE/g, "RO-DE").replace(/polskim/gi, "română");
    roUi.app.subtitle = "Ghidul tău inteligent pentru limba germană pe niveluri";
    roUi.app.shellLabel = "Fișe germano-române";
  }
  if (roUi.splash) {
    roUi.splash.title = "Limba germană";
    roUi.splash.subtitle = "Învață germană";
  }
  if (roUi.languageSelect) {
    roUi.languageSelect.title = "Alege limba";
    roUi.languageSelect.footer = "Învață germană";
  }
  if (roUi.study?.table) {
    roUi.study.table.native = "RO";
  }
  if (roUi.spelling) {
    roUi.spelling.writeNative = "Scrie în română";
    roUi.spelling.writeGerman = "Scrie în germană";
  }

  fs.mkdirSync(roDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(roUi, null, 2)};\n`;
  fs.writeFileSync(roPath, output, "utf8");
  saveCache();
  console.log(`Written ${roPath}`);
}

main().catch((err) => { console.error(err); saveCache(); process.exit(1); });
