const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");

const BATCH_SIZE = 50;
const STUDY_BATCH_SIZE = 12;
const LV_FILE = path.join(ROOT, "data", "a2.js");
const ET_FILE = path.join(ROOT, "data", "et", "a2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "et", "a2.js");
const TEMP_DIR = path.join(ROOT, "reports", "temp", "et-a2-full-audit-luna");
const LUNA_JSON = path.join(ROOT, "reports", "temp", "et-a2-linguistic-audit.json");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".et-a2-luna-progress.json");

const NATIVE_KEYS = new Set(["lv", "translation", "text", "meaning", "title", "lead"]);

function loadArray(filePath, globalKey = "A2_WORDS") {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function entryId(entry, index) {
  return entry.study?.id || `a2-${entry.de}-${index}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function buildSimpleCard(lvEntry, etEntry, index) {
  return {
    cardId: entryId(etEntry, index),
    index,
    de: etEntry.de,
    de_article: etEntry.de_article || null,
    de_plural: etEntry.de_plural || null,
    lvSource: lvEntry.lv,
    etText: etEntry.lv,
    level: etEntry.level || "A2",
    hasStudy: Boolean(etEntry.study),
  };
}

function buildStudyCard(lvEntry, etEntry, index) {
  const study = etEntry.study || {};
  const lvStudy = lvEntry.study || {};
  const fields = [];

  function walk(lvObj, etObj, p) {
    if (!lvObj && !etObj) return;
    if (typeof lvObj === "string" && typeof etObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv") || p.includes(".meaning")) {
        fields.push({ field: p, lvSource: lvObj, etText: etObj, de: etEntry.de });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(etObj)) {
      const len = Math.max(lvObj.length, etObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], etObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && etObj && typeof etObj === "object") {
      for (const k of new Set([...Object.keys(lvObj), ...Object.keys(etObj)])) {
        if (k === "sectionAccents" || k === "de") continue;
        walk(lvObj[k], etObj[k], p ? `${p}.${k}` : k);
      }
    }
  }

  walk(lvStudy, study, "study");

  return {
    cardId: entryId(etEntry, index),
    index,
    de: etEntry.de,
    layout: study.layout || "standardStudy",
    etMain: etEntry.lv,
    studyTranslation: study.translation || null,
    lvSourceMain: lvEntry.lv,
    fields,
  };
}

function buildCards() {
  const lv = loadArray(LV_FILE);
  const et = loadArray(ET_FILE);
  const simple = [];
  const study = [];
  for (let i = 0; i < lv.length; i++) {
    if (et[i].study) study.push(buildStudyCard(lv[i], et[i], i));
    else simple.push(buildSimpleCard(lv[i], et[i], i));
  }
  return { lv, et, simple, study };
}

function deterministicStructuralFindings(lv, et) {
  const findings = [];
  let seq = 1;

  function add(partial) {
    findings.push({
      findingId: `ET-A2-${String(seq++).padStart(4, "0")}`,
      source: "deterministic",
      ...partial,
    });
  }

  if (lv.length !== et.length) {
    add({
      cardId: "STRUCT",
      field: "count",
      severity: "CRITICAL",
      category: "STRUCTURE",
      de: "",
      currentEt: String(et.length),
      proposedEt: String(lv.length),
      reason: `Record count mismatch LV=${lv.length} ET=${et.length}`,
    });
  }

  const lvStudy = lv.filter((e) => e.study).length;
  const etStudy = et.filter((e) => e.study).length;
  if (lvStudy !== etStudy) {
    add({
      cardId: "STRUCT",
      field: "study.count",
      severity: "CRITICAL",
      category: "STRUCTURE",
      de: "",
      currentEt: String(etStudy),
      proposedEt: String(lvStudy),
      reason: `Study count mismatch LV=${lvStudy} ET=${etStudy}`,
    });
  }

  for (let i = 0; i < Math.min(lv.length, et.length); i++) {
    const lvE = lv[i];
    const etE = et[i];
    const id = entryId(etE, i);

    if (lvE.study && !etE.study) {
      add({
        cardId: id,
        field: "study",
        severity: "HIGH",
        category: "STRUCTURE",
        de: etE.de,
        currentEt: "(nav Study objekta)",
        proposedEt: "Pievienot pilnu Study objektu pēc LV etalona",
        reason: `Trūkst Study objekta vārdam ${etE.de}`,
      });
    }

    if (lvE.study?.layout && etE.study && !etE.study.tip?.text && lvE.study.tip?.text) {
      add({
        cardId: id,
        field: "study.tip.text",
        severity: "HIGH",
        category: "STRUCTURE",
        de: etE.de,
        currentEt: "(tukšs)",
        proposedEt: "(ET tulkojums pēc LV/DE)",
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
  ET_FILE,
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
