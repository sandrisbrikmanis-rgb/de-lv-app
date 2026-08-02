#!/usr/bin/env node
/**
 * Generate Spanish UI strings from Italian UI template.
 * Uses Google gtx endpoint for IT → ES translation.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, cacheKey, sleep } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".es-it-ui-translation-cache.json");

async function translateGtx(text, from, to) {
  const trimmed = text.trim();
  if (!trimmed || from === to) return text;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(trimmed)}`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`gtx HTTP ${res.status}`);
  const data = await res.json();
  return data?.[0]?.map((seg) => seg[0]).join("") || trimmed;
}

async function translateAllGtx(strings, from, to, options = {}) {
  const { cachePath, delayMs = 150, concurrency = 5, onProgress } = options;
  const cache = loadCache(cachePath);
  const unique = [...new Set(strings.filter((s) => s && s.trim()))];
  const pending = unique.filter((s) => !cache[cacheKey(from, to, s)]);
  let done = 0;

  async function worker(queue) {
    while (queue.length) {
      const src = queue.shift();
      if (!src) break;
      const key = cacheKey(from, to, src);
      if (!cache[key]) {
        try {
          cache[key] = await translateGtx(src, from, to);
          if (cachePath) saveCache(cachePath, cache);
        } catch {
          cache[key] = src;
        }
      }
      done++;
      if (onProgress && done % 25 === 0) onProgress(done, pending.length - done);
      await sleep(delayMs);
    }
  }

  const queue = [...pending];
  const workers = Array.from({ length: Math.min(concurrency, queue.length || 1) }, () => worker(queue));
  await Promise.all(workers);

  const map = {};
  unique.forEach((s) => { map[s] = cache[cacheKey(from, to, s)] || s; });
  return map;
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
      if (k === "__langCode") { out[k] = "es"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function main() {
  const itPath = path.join(ROOT, "languages/it/ui.js");
  const esDir = path.join(ROOT, "languages/es");
  const esPath = path.join(esDir, "ui.js");

  const code = fs.readFileSync(itPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const itUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(itUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateAllGtx(unique, "it", "es", {
    cachePath: CACHE_PATH,
    delayMs: 150,
    concurrency: 5,
    onProgress: (n, remaining) => {
      if (n % 50 === 0) process.stdout.write(`  UI translated ${n} (~${remaining} remaining)\n`);
    },
  });

  const esUi = applyTranslations(itUi, translationMap);
  esUi.__langCode = "es";
  if (esUi.app) {
    esUi.app.title = "Alemán • ES-DE";
    esUi.app.subtitle = "Tu guía inteligente para aprender alemán por nivel";
    esUi.app.shellLabel = "Tarjetas Alemán–Español";
  }
  if (esUi.splash) {
    esUi.splash.title = "Alemán";
    esUi.splash.subtitle = "Aprender alemán";
  }
  if (esUi.languageSelect) {
    esUi.languageSelect.title = "Elegir idioma";
    esUi.languageSelect.footer = "Aprender alemán";
  }
  if (esUi.study?.table) {
    esUi.study.table.native = "ES";
  }
  if (esUi.spelling) {
    esUi.spelling.writeNative = "Escribir en español";
    esUi.spelling.writeGerman = "Escribir en alemán";
  }

  fs.mkdirSync(esDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(esUi, null, 2)};\n`;
  fs.writeFileSync(esPath, output, "utf8");
  console.log(`Written ${esPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
