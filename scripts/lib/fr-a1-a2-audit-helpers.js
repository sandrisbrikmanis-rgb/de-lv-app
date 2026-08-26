const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");
const {
  TEMP_DIR,
  LUNA_JSON,
  PROGRESS_FILE,
} = require("./fr-a1-a2-audit-paths");

const LEVELS = ["a1", "a2"];
const GLOBAL_KEYS = { a1: "A1_WORDS", a2: "A2_WORDS" };
const BATCH_SIZE = 50;
const STUDY_BATCH_SIZE = 12;

const NATIVE_KEYS = new Set(["lv", "translation", "text", "meaning", "title", "lead"]);

function loadArray(level) {
  const filePath = path.join(ROOT, "data", "es", `${level}.js`);
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[GLOBAL_KEYS[level]];
}

function entryId(entry, index, level) {
  return entry.study?.id || `${level}-${entry.de}-${index}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function buildSimpleCard(lvEntry, frEntry, index, level) {
  return {
    cardId: entryId(frEntry, index, level),
    level: level.toUpperCase(),
    index,
    de: frEntry.de,
    de_article: frEntry.de_article || null,
    de_plural: frEntry.de_plural || null,
    lvSource: lvEntry.lv,
    frText: frEntry.lv,
    hasStudy: Boolean(frEntry.study),
  };
}

function buildStudyCard(lvEntry, frEntry, index, level) {
  const study = frEntry.study || {};
  const lvStudy = lvEntry.study || {};
  const fields = [];

  function walk(lvObj, esObj, p) {
    if (!lvObj && !esObj) return;
    if (typeof lvObj === "string" && typeof esObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv") || p.includes(".meaning")) {
        fields.push({ field: p, lvSource: lvObj, frText: esObj, de: frEntry.de });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(esObj)) {
      const len = Math.max(lvObj.length, esObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], esObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && esObj && typeof esObj === "object") {
      for (const k of new Set([...Object.keys(lvObj), ...Object.keys(esObj)])) {
        if (k === "sectionAccents" || k === "de") continue;
        walk(lvObj[k], esObj[k], p ? `${p}.${k}` : k);
      }
    }
  }

  walk(lvStudy, study, "study");

  return {
    cardId: entryId(frEntry, index, level),
    level: level.toUpperCase(),
    index,
    de: frEntry.de,
    layout: study.layout || "standardStudy",
    frMain: frEntry.lv,
    studyTranslation: study.translation || null,
    lvSourceMain: lvEntry.lv,
    fields,
  };
}

function buildCards() {
  const simple = [];
  const study = [];
  const byLevel = {};

  for (const level of LEVELS) {
    const lv = loadArray(level);
    const es = loadArray(level);
    byLevel[level] = { lv, es };
    for (let i = 0; i < lv.length; i++) {
      if (es[i].study) study.push(buildStudyCard(lv[i], es[i], i, level));
      else simple.push(buildSimpleCard(lv[i], es[i], i, level));
    }
  }

  return { byLevel, simple, study };
}

function dataFileHashes() {
  const hashes = {};
  for (const level of LEVELS) {
    const p = path.join(ROOT, "data", "es", `${level}.js`);
    hashes[level] = require("crypto").createHash("md5").update(fs.readFileSync(p)).digest("hex");
  }
  return hashes;
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { completedBatches: [], auditedCardIds: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  } catch {
    return { completedBatches: [], auditedCardIds: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

module.exports = {
  ROOT,
  LEVELS,
  BATCH_SIZE,
  STUDY_BATCH_SIZE,
  TEMP_DIR,
  LUNA_JSON,
  PROGRESS_FILE,
  loadArray,
  entryId,
  chunk,
  ensureDir,
  buildSimpleCard,
  buildStudyCard,
  buildCards,
  dataFileHashes,
  loadProgress,
  saveProgress,
};
