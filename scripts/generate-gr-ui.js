#!/usr/bin/env node
/**
 * Generate Greek UI strings from Latvian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");

const CACHE_PATH = path.join(ROOT, "scripts", ".gr-ui-translation-cache.json");
const BATCH_SIZE = 15;
const BATCH_SLEEP_MS = 400;
const RETRY_SLEEP_MS = 2000;
const MAX_RETRIES = 5;

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
      if (k === "__langCode") { out[k] = "gr"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateOne(src) {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const res = await translate(src, { from: "lv", to: "el" });
      return res.text;
    } catch (err) {
      if (attempt === MAX_RETRIES - 1) throw err;
      await sleep(RETRY_SLEEP_MS * (attempt + 1));
    }
  }
  return src;
}

async function translateBatch(strings) {
  const pending = strings.filter((s) => !cache[s]);
  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const chunk = pending.slice(i, i + BATCH_SIZE);
    try {
      const res = await translate(chunk, { from: "lv", to: "el", forceBatch: true });
      const results = Array.isArray(res) ? res : [res];
      for (let idx = 0; idx < chunk.length; idx++) {
        cache[chunk[idx]] = results[idx]?.text || chunk[idx];
      }
      saveCache();
      process.stdout.write(`  UI batch ${Math.min(i + BATCH_SIZE, pending.length)}/${pending.length}\n`);
      await sleep(BATCH_SLEEP_MS);
    } catch (err) {
      console.error(`Batch failed (${err.message}), falling back to single...`);
      for (const src of chunk) {
        if (cache[src]) continue;
        try {
          cache[src] = await translateOne(src);
        } catch {
          cache[src] = src;
        }
        saveCache();
        await sleep(250);
      }
    }
  }
}

async function main() {
  const lvPath = path.join(ROOT, "languages/lv/ui.js");
  const grDir = path.join(ROOT, "languages/gr");
  const grPath = path.join(grDir, "ui.js");

  const code = fs.readFileSync(lvPath, "utf8");
  const ctx = { LANGUAGE_UI_STRINGS: null };
  vm.createContext(ctx);
  vm.runInContext(code.replace("window.LANGUAGE_UI_STRINGS", "LANGUAGE_UI_STRINGS"), ctx);
  const lvUi = ctx.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(lvUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings (${Object.keys(cache).length} cached)`);

  await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = cache[s] || s; });

  const grUi = applyTranslations(lvUi, map);
  grUi.__langCode = "gr";
  if (grUi.app) {
    grUi.app.title = "Γερμανικά • GR-DE";
    grUi.app.subtitle = "Ο έξυπνος οδηγός σας για τη γερμανική γλώσσα ανά επίπεδο";
    grUi.app.shellLabel = "Γερμανοελληνικές κάρτες";
  }
  if (grUi.splash) {
    grUi.splash.title = "Γερμανικά";
    grUi.splash.subtitle = "Μάθετε γερμανικά";
  }
  if (grUi.languageSelect) {
    grUi.languageSelect.title = "Επιλέξτε γλώσσα";
    grUi.languageSelect.footer = "Μάθετε γερμανικά";
  }
  if (grUi.study?.table) {
    grUi.study.table.native = "GR";
  }
  if (grUi.spelling) {
    grUi.spelling.writeNative = "Γράψτε στα ελληνικά";
    grUi.spelling.writeGerman = "Γράψτε στα γερμανικά";
  }
  if (grUi.direction) {
    grUi.direction.deToNative = "🔄 DE ➔ GR";
    grUi.direction.nativeToDe = "🔄 GR ➔ DE";
  }

  fs.mkdirSync(grDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(grUi, null, 2)};\n`;
  fs.writeFileSync(grPath, output, "utf8");
  saveCache();
  console.log(`Written ${grPath}`);
}

main().catch((err) => { console.error(err); saveCache(); process.exit(1); });
