#!/usr/bin/env node
/**
 * Generate Portuguese UI strings from Spanish UI template.
 * Uses Google gtx endpoint for ES → PT translation.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, cacheKey, sleep } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".es-pt-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "pt"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function main() {
  const esPath = path.join(ROOT, "languages/es/ui.js");
  const ptDir = path.join(ROOT, "languages/pt");
  const ptPath = path.join(ptDir, "ui.js");

  const code = fs.readFileSync(esPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const esUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(esUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateAllGtx(unique, "es", "pt", {
    cachePath: CACHE_PATH,
    delayMs: 150,
    concurrency: 5,
    onProgress: (n, remaining) => {
      if (n % 50 === 0) process.stdout.write(`  UI translated ${n} (~${remaining} remaining)\n`);
    },
  });

  const ptUi = applyTranslations(esUi, translationMap);
  ptUi.__langCode = "pt";
  if (ptUi.app) {
    ptUi.app.title = "Alemão • PT-DE";
    ptUi.app.subtitle = "O seu guia inteligente para aprender alemão por nível";
    ptUi.app.shellLabel = "Cartões Alemão–Português";
  }
  if (ptUi.splash) {
    ptUi.splash.title = "Alemão";
    ptUi.splash.subtitle = "Aprender alemão";
  }
  if (ptUi.languageSelect) {
    ptUi.languageSelect.title = "Escolher idioma";
    ptUi.languageSelect.footer = "Aprender alemão";
  }
  if (ptUi.study?.table) {
    ptUi.study.table.native = "PT";
  }
  if (ptUi.spelling) {
    ptUi.spelling.writeNative = "Escrever em português";
    ptUi.spelling.writeGerman = "Escrever em alemão";
  }

  fs.mkdirSync(ptDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(ptUi, null, 2)};\n`;
  fs.writeFileSync(ptPath, output, "utf8");
  console.log(`Written ${ptPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
