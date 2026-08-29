const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");

const POST_REPAIR = process.env.FR_A1_POST_REPAIR === "1";
const BATCH_SIZE = 50;
const STUDY_BATCH_SIZE = 12;
const LV_FILE = path.join(ROOT, "data", "a1.js");
const FR_FILE = path.join(ROOT, "data", "fr", "a1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "fr", "a1.js");
const TEMP_DIR = path.join(
  ROOT,
  "reports",
  "temp",
  POST_REPAIR ? "fr-a1-post-repair-luna" : "fr-a1-full-audit-luna",
);
const LUNA_JSON = path.join(
  ROOT,
  "reports",
  "temp",
  POST_REPAIR ? "fr-a1-post-repair-linguistic-audit.json" : "fr-a1-linguistic-audit.json",
);
const PROGRESS_FILE = path.join(
  ROOT,
  "scripts",
  POST_REPAIR ? ".fr-a1-post-repair-luna-progress.json" : ".fr-a1-luna-progress.json",
);

const NATIVE_KEYS = new Set(["lv", "translation", "text", "meaning", "title", "lead"]);

function loadArray(filePath, globalKey = "A1_WORDS") {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function entryId(entry, index) {
  return entry.study?.id || `a1-${entry.de}-${index}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function buildSimpleCard(lvEntry, frEntry, index) {
  return {
    cardId: entryId(frEntry, index),
    index,
    de: frEntry.de,
    de_article: frEntry.de_article || null,
    de_plural: frEntry.de_plural || null,
    lvSource: lvEntry.lv,
    frText: frEntry.lv,
    level: frEntry.level || "A1",
    hasStudy: Boolean(frEntry.study),
  };
}

function buildStudyCard(lvEntry, frEntry, index) {
  const study = frEntry.study || {};
  const lvStudy = lvEntry.study || {};
  const fields = [];

  function walk(lvObj, frObj, p) {
    if (!lvObj && !frObj) return;
    if (typeof lvObj === "string" && typeof frObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv") || p.includes(".meaning")) {
        fields.push({ field: p, lvSource: lvObj, frText: frObj, de: frEntry.de });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(frObj)) {
      const len = Math.max(lvObj.length, frObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], frObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && frObj && typeof frObj === "object") {
      for (const k of new Set([...Object.keys(lvObj), ...Object.keys(frObj)])) {
        if (k === "sectionAccents" || k === "de") continue;
        walk(lvObj[k], frObj[k], p ? `${p}.${k}` : k);
      }
    }
  }

  walk(lvStudy, study, "study");

  return {
    cardId: entryId(frEntry, index),
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
  const lv = loadArray(LV_FILE);
  const fr = loadArray(FR_FILE);
  const simple = [];
  const study = [];
  for (let i = 0; i < lv.length; i++) {
    if (fr[i].study) study.push(buildStudyCard(lv[i], fr[i], i));
    else simple.push(buildSimpleCard(lv[i], fr[i], i));
  }
  return { lv, fr, simple, study };
}

function deterministicStructuralFindings(lv, fr) {
  const findings = [];
  let seq = 1;

  function add(partial) {
    findings.push({
      findingId: `FR-A1-${String(seq++).padStart(4, "0")}`,
      source: "deterministic",
      ...partial,
    });
  }

  if (lv.length !== fr.length) {
    add({
      cardId: "STRUCT",
      field: "count",
      severity: "CRITICAL",
      category: "STRUCTURE",
      de: "",
      currentFr: String(fr.length),
      proposedFr: String(lv.length),
      reason: `Record count mismatch LV=${lv.length} FR=${fr.length}`,
    });
  }

  const lvStudy = lv.filter((e) => e.study).length;
  const frStudy = fr.filter((e) => e.study).length;
  if (lvStudy !== frStudy) {
    add({
      cardId: "STRUCT",
      field: "study.count",
      severity: "CRITICAL",
      category: "STRUCTURE",
      de: "",
      currentFr: String(frStudy),
      proposedFr: String(lvStudy),
      reason: `Study count mismatch LV=${lvStudy} FR=${frStudy}`,
    });
  }

  for (let i = 0; i < Math.min(lv.length, fr.length); i++) {
    const lvE = lv[i];
    const frE = fr[i];
    const id = entryId(frE, i);

    if (lvE.study && !frE.study) {
      add({
        cardId: id,
        field: "study",
        severity: "HIGH",
        category: "STRUCTURE",
        de: frE.de,
        currentFr: "(nav Study objekta)",
        proposedFr: "Pievienot pilnu Study objektu pēc LV etalona",
        reason: `Trūkst Study objekta vārdam ${frE.de}`,
      });
    }

    if (lvE.study?.layout && frE.study && !frE.study.tip?.text && lvE.study.tip?.text) {
      add({
        cardId: id,
        field: "study.tip.text",
        severity: "HIGH",
        category: "STRUCTURE",
        de: frE.de,
        currentFr: "(tukšs)",
        proposedFr: "(FR tulkojums pēc LV/DE)",
        reason: "Trūkst study.tip.text salīdzinājumā ar LV etalonu",
      });
    }
  }

  return findings;
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
  BATCH_SIZE,
  STUDY_BATCH_SIZE,
  LV_FILE,
  FR_FILE,
  WWW_FILE,
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
  deterministicStructuralFindings,
  loadProgress,
  saveProgress,
};
