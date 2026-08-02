#!/usr/bin/env node
/**
 * Retry failed LV→SL translations (strings where SL still equals LV source).
 * Uses slower rate + retries on Google rate-limit errors.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, cacheKey, sleep } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".sl-translation-cache.json");
const BULLET = "•";
const FROM = "lv";
const TO = "sl";
const DELAY_MS = 1500;
const MAX_RETRIES = 5;

function postProcess(text) {
  if (!text || typeof text !== "string") return text;
  let out = text.replace(/;\s*/g, ` ${BULLET} `);
  out = out.replace(/\s+/g, " ").replace(/\s+•\s+/g, ` ${BULLET} `).trim();
  if (out.includes(BULLET)) {
    out = out.split(BULLET).map((p) => {
      const t = p.trim();
      return t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
    }).join(` ${BULLET} `);
  } else if (out.length) {
    out = out.charAt(0).toUpperCase() + out.slice(1);
  }
  return out;
}

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember",
]);

function loadData(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function loadArray(relPath) {
  const w = loadData(relPath);
  const key = Object.keys(w).find((k) => Array.isArray(w[k]));
  return key ? w[key] : [];
}

function writeArrayFile(filePath, varName, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

async function translateWithRetry(text, cache) {
  const trimmed = text.trim();
  if (!trimmed) return text;
  const key = cacheKey(FROM, TO, trimmed);
  if (cache[key] && cache[key] !== trimmed) return cache[key];

  const { translate } = require("google-translate-api-x");
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const res = await translate(trimmed, { from: FROM, to: TO });
      const result = postProcess(res.text);
      if (result && result.trim() !== trimmed) {
        cache[key] = result;
        saveCache(CACHE_PATH, cache);
        return result;
      }
      return trimmed;
    } catch (e) {
      const msg = e.message || "";
      if (msg.includes("Too Many") || msg.includes("429")) {
        const wait = DELAY_MS * (attempt + 2);
        console.log(`  rate limited, waiting ${wait}ms...`);
        await sleep(wait);
      } else {
        console.log(`  error: ${msg}`);
        await sleep(DELAY_MS);
      }
    }
  }
  return trimmed;
}

function collectFailed(lvEntry, slEntry, failed) {
  if (lvEntry.lv && slEntry.lv && lvEntry.lv === slEntry.lv) failed.add(lvEntry.lv);
  if (!lvEntry.study || !slEntry.study) return;
  const ls = lvEntry.study;
  const ss = slEntry.study;
  if (ls.translation && ss.translation === ls.translation) failed.add(ls.translation);
  ["explanation", "tip", "important", "mistakes", "remember"].forEach((field) => {
    const lvArr = ls[field];
    const slArr = ss[field];
    if (!Array.isArray(lvArr) || !Array.isArray(slArr)) return;
    lvArr.forEach((t, i) => {
      if (slArr[i] === t) failed.add(t);
    });
  });
  if (Array.isArray(ls.examples) && Array.isArray(ss.examples)) {
    ls.examples.forEach((ex, i) => {
      if (ss.examples[i] && ex.lv === ss.examples[i].lv) failed.add(ex.lv);
    });
  }
  if (Array.isArray(ls.comparison) && Array.isArray(ss.comparison)) {
    ls.comparison.forEach((row, i) => {
      const sr = ss.comparison[i];
      if (!sr) return;
      if (row.meaning === sr.meaning) failed.add(row.meaning);
      if (row.example) {
        const lvPart = row.example.split(/[–—-]/).pop()?.trim();
        const slPart = sr.example.split(/[–—-]/).pop()?.trim();
        if (lvPart && slPart === lvPart) failed.add(lvPart);
      }
    });
  }
}

function applyMap(value, map, parentKey = "") {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey)) return map[value] ?? value;
    if (parentKey === "example") {
      if (value.includes("=")) {
        const idx = value.indexOf("=");
        const left = value.slice(0, idx + 1);
        const right = value.slice(idx + 1).trim();
        return right && map[right] ? `${left} ${map[right]}` : value;
      }
      const dash = value.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
      if (dash) {
        const right = dash[3].trim();
        return right && map[right] ? `${dash[1]}${dash[2]}${map[right]}` : value;
      }
    }
    return value;
  }
  if (Array.isArray(value)) return value.map((v) => applyMap(v, map, parentKey));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === "sectionAccents") { out[k] = v; continue; }
      out[k] = applyMap(v, map, k);
    }
    return out;
  }
  return value;
}

async function main() {
  const cache = loadCache(CACHE_PATH);
  const failed = new Set();

  const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
  const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };
  const levelData = {};

  for (const level of LEVELS) {
    const lv = loadArray(`data/${level}.js`);
    const sl = loadArray(`data/sl/${level}.js`);
    levelData[level] = { lv, sl };
    for (let i = 0; i < Math.min(lv.length, sl.length); i++) {
      collectFailed(lv[i], sl[i], failed);
    }
  }

  const lvSent = loadArray("data/sentences.js");
  const slSent = loadArray("data/sl/sentences.js");
  lvSent.forEach((s, i) => { if (slSent[i] && s.lv === slSent[i].lv) failed.add(s.lv); });

  const lvVerbs = loadArray("data/verbs.js");
  const slVerbs = loadArray("data/sl/verbs.js");
  lvVerbs.forEach((e, i) => {
    if (!slVerbs[i]) return;
    for (const form of Object.keys(e)) {
      if (e[form].lv === slVerbs[i][form]?.lv) failed.add(e[form].lv);
    }
  });

  // Course training cards from LT source
  const ltTrainPath = path.join(ROOT, "data/lt/courseTrainingCards.js");
  if (fs.existsSync(ltTrainPath)) {
    const ltCode = fs.readFileSync(ltTrainPath, "utf8");
    const ltCtx = { window: {} };
    vm.createContext(ltCtx);
    vm.runInContext(ltCode, ltCtx);
    Object.values(ltCtx.window).forEach((deck) => {
      if (Array.isArray(deck)) deck.forEach((c) => { if (c.front) failed.add(c.front); });
    });
  }

  const toTranslate = [...failed].filter((s) => s && s.trim());
  console.log(`Retrying ${toTranslate.length} failed translations...`);

  const map = {};
  let done = 0;
  for (const src of toTranslate) {
    const result = await translateWithRetry(src, cache);
    map[src] = result;
    done++;
    if (done % 25 === 0) {
      const ok = Object.values(map).filter((v, i) => v !== toTranslate[i]).length;
      console.log(`  ${done}/${toTranslate.length} (${ok} translated)`);
    }
    await sleep(DELAY_MS);
  }

  console.log("\nApplying translations...");
  for (const level of LEVELS) {
    const { lv, sl } = levelData[level];
    for (let i = 0; i < Math.min(lv.length, sl.length); i++) {
      sl[i] = applyMap(sl[i], map);
      // Re-apply from LV structure with map for any still-matching fields
      const translated = applyMap(lv[i], map);
      sl[i].lv = translated.lv;
      if (lv[i].study && sl[i].study) {
        sl[i].study = applyMap(lv[i].study, map);
        sl[i].study.sectionAccents = sl[i].study.sectionAccents || lv[i].study.sectionAccents;
      }
    }
    writeArrayFile(path.join(ROOT, "data/sl", `${level}.js`), VAR_NAMES[level], sl);
    console.log(`Updated ${level}`);
  }

  const newSlSent = lvSent.map((e) => applyMap(e, map));
  writeArrayFile(path.join(ROOT, "data/sl/sentences.js"), "SENTENCE_ENTRIES", newSlSent);

  const newSlVerbs = lvVerbs.map((entry) => {
    const te = {};
    for (const [form, pair] of Object.entries(entry)) {
      te[form] = { de: pair.de, lv: map[pair.lv] || pair.lv };
    }
    return te;
  });
  writeArrayFile(path.join(ROOT, "data/sl/verbs.js"), "VERB_ENTRIES", newSlVerbs);

  // Regenerate course training cards from LT
  if (fs.existsSync(ltTrainPath)) {
    const ltCode = fs.readFileSync(ltTrainPath, "utf8");
    const ltCtx = { window: {} };
    vm.createContext(ltCtx);
    vm.runInContext(ltCode, ltCtx);
    const outLines = ["// Slovenian course training cards for SL-DE Kurss lessons 1-7.\n"];
    for (const [key, deck] of Object.entries(ltCtx.window)) {
      if (!Array.isArray(deck)) continue;
      const slKey = key.replace(/Lt$/, "Sl");
      const translated = deck.map((card) => ({
        front: map[card.front] || card.front,
        back: card.back || "",
      }));
      outLines.push(`window.${slKey} = ${JSON.stringify(translated, null, 2)};\n`);
    }
    fs.writeFileSync(path.join(ROOT, "data/sl/courseTrainingCards.js"), outLines.join("\n"), "utf8");
    console.log("Updated courseTrainingCards");
  }

  const ok = Object.entries(map).filter(([k, v]) => v !== k).length;
  console.log(`\nDone: ${ok}/${toTranslate.length} successfully translated`);
}

main().catch((e) => { console.error(e); process.exit(1); });
