/**
 * Shared translation helper with persistent cache and MyMemory API
 * (Google Translate free tier is often rate-limited in CI/cloud).
 */
const fs = require("fs");
const path = require("path");

const DEFAULT_DELAY_MS = 400;
const MAX_CHUNK_LEN = 450;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function loadCache(cachePath) {
  if (!fs.existsSync(cachePath)) return {};
  try {
    return JSON.parse(fs.readFileSync(cachePath, "utf8"));
  } catch {
    return {};
  }
}

function saveCache(cachePath, cache) {
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
}

function cacheKey(from, to, text) {
  return `${from}|${to}|${text.trim()}`;
}

async function translateMyMemory(text, from, to) {
  const trimmed = text.trim();
  if (!trimmed) return text;
  if (trimmed.length <= MAX_CHUNK_LEN) {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(trimmed)}&langpair=${from}|${to}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.responseStatus !== 200) {
      throw new Error(data.responseDetails || `MyMemory status ${data.responseStatus}`);
    }
    return data.responseData.translatedText;
  }
  const parts = trimmed.match(new RegExp(`.{1,${MAX_CHUNK_LEN}}(\\s|$)|.{1,${MAX_CHUNK_LEN}}`, "g")) || [trimmed];
  const out = [];
  for (const part of parts) {
    const p = part.trim();
    if (!p) continue;
    out.push(await translateMyMemory(p, from, to));
    await sleep(DEFAULT_DELAY_MS);
  }
  return out.join(" ");
}

async function translateGoogle(text, from, to) {
  const { translate } = require("google-translate-api-x");
  const res = await translate(text.trim(), { from, to, forceBatch: false, rejectOnPartialFail: false });
  return res.text;
}

async function translateOne(text, from, to, options = {}) {
  const { cachePath, cache, preferGoogle = false } = options;
  const trimmed = text.trim();
  if (!trimmed) return text;
  const key = cacheKey(from, to, trimmed);
  if (cache[key]) return cache[key];

  let result = trimmed;
  const attempts = preferGoogle
    ? [() => translateGoogle(trimmed, from, to), () => translateMyMemory(trimmed, from, to)]
    : [() => translateGoogle(trimmed, from, to), () => translateMyMemory(trimmed, from, to)];

  for (const attempt of attempts) {
    try {
      result = await attempt();
      if (result && result.trim() !== trimmed) break;
    } catch {
      // try next provider or keep source
    }
  }

  if (result.trim() === trimmed && from !== to) {
    // Do not cache failed translations (keeps source text)
    return result;
  }

  cache[key] = result;
  if (cachePath) saveCache(cachePath, cache);
  return result;
}

async function translateAll(strings, from, to, options = {}) {
  const {
    cachePath,
    delayMs = DEFAULT_DELAY_MS,
    concurrency = 4,
    onProgress,
  } = options;
  const cache = loadCache(cachePath);
  const unique = [...new Set(strings.filter((s) => s && s.trim()))];
  const pending = unique.filter((s) => !cache[cacheKey(from, to, s)]);
  let done = 0;

  async function worker(queue) {
    while (queue.length) {
      const src = queue.shift();
      if (!src) break;
      await translateOne(src, from, to, { cachePath, cache });
      done++;
      if (onProgress && done % 25 === 0) onProgress(done, pending.length - done);
      await sleep(delayMs);
    }
  }

  const queue = [...pending];
  const workers = Array.from({ length: Math.min(concurrency, queue.length || 1) }, () => worker(queue));
  await Promise.all(workers);

  const map = {};
  unique.forEach((s) => {
    const key = cacheKey(from, to, s);
    map[s] = cache[key] || s;
  });
  return map;
}

module.exports = {
  cacheKey,
  loadCache,
  saveCache,
  translateOne,
  translateAll,
  sleep,
};
