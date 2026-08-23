const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");

const BATCH_SIZE = 50;
const STUDY_BATCH_SIZE = 12;
const TEMP_DIR = path.join(ROOT, "reports", "temp", "et-c1c2-full-audit-luna");
const LUNA_JSON = path.join(ROOT, "reports", "temp", "et-c1c2-linguistic-audit.json");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".et-c1c2-luna-progress.json");

const LEVELS = {
  c1: {
    level: "c1",
    label: "C1",
    globalKey: "C1_WORDS",
    lvFile: path.join(ROOT, "data", "c1.js"),
    etFile: path.join(ROOT, "data", "et", "c1.js"),
    wwwFile: path.join(ROOT, "www", "data", "et", "c1.js"),
    expected: 572,
    expectedStudy: 16,
  },
  c2: {
    level: "c2",
    label: "C2",
    globalKey: "C2_WORDS",
    lvFile: path.join(ROOT, "data", "c2.js"),
    etFile: path.join(ROOT, "data", "et", "c2.js"),
    wwwFile: path.join(ROOT, "www", "data", "et", "c2.js"),
    expected: 219,
    expectedStudy: 3,
  },
};

const NATIVE_KEYS = new Set(["lv", "translation", "text", "meaning", "title", "lead"]);

function loadArray(filePath, globalKey) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
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

function buildSimpleCard(lvEntry, etEntry, index, level) {
  return {
    cardId: entryId(etEntry, index, level),
    index,
    level,
    de: etEntry.de,
    de_article: etEntry.de_article || null,
    de_plural: etEntry.de_plural || null,
    lvSource: lvEntry.lv,
    etText: etEntry.lv,
    hasStudy: Boolean(etEntry.study),
  };
}

function buildStudyCard(lvEntry, etEntry, index, level) {
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
    cardId: entryId(etEntry, index, level),
    index,
    level,
    de: etEntry.de,
    layout: study.layout || "standardStudy",
    etMain: etEntry.lv,
    studyTranslation: study.translation || null,
    lvSourceMain: lvEntry.lv,
    fields,
  };
}

function buildCardsForLevel(levelKey) {
  const cfg = LEVELS[levelKey];
  const lv = loadArray(cfg.lvFile, cfg.globalKey);
  const et = loadArray(cfg.etFile, cfg.globalKey);
  const simple = [];
  const study = [];
  for (let i = 0; i < lv.length; i++) {
    if (et[i].study) study.push(buildStudyCard(lv[i], et[i], i, levelKey));
    else simple.push(buildSimpleCard(lv[i], et[i], i, levelKey));
  }
  return { lv, et, simple, study, cfg };
}

function buildCards() {
  const c1 = buildCardsForLevel("c1");
  const c2 = buildCardsForLevel("c2");
  return {
    c1,
    c2,
    lv: [...c1.lv, ...c2.lv],
    et: [...c1.et, ...c2.et],
    simple: [...c1.simple, ...c2.simple],
    study: [...c1.study, ...c2.study],
    levels: LEVELS,
  };
}

function deterministicStructuralFindings(cards) {
  const findings = [];
  let seq = 1;

  function add(partial) {
    findings.push({
      findingId: `ET-C1C2-${String(seq++).padStart(4, "0")}`,
      source: "deterministic",
      ...partial,
    });
  }

  for (const levelKey of ["c1", "c2"]) {
    const { lv, et, cfg } = buildCardsForLevel(levelKey);
    if (lv.length !== et.length) {
      add({
        cardId: `STRUCT-${levelKey}`,
        field: "count",
        severity: "CRITICAL",
        category: "STRUCTURE",
        de: "",
        currentEt: String(et.length),
        proposedEt: String(lv.length),
        reason: `${cfg.label}: record count mismatch LV=${lv.length} ET=${et.length}`,
        level: levelKey,
      });
    }

    const lvStudy = lv.filter((e) => e.study).length;
    const etStudy = et.filter((e) => e.study).length;
    if (lvStudy !== etStudy) {
      add({
        cardId: `STRUCT-${levelKey}`,
        field: "study.count",
        severity: "CRITICAL",
        category: "STRUCTURE",
        de: "",
        currentEt: String(etStudy),
        proposedEt: String(lvStudy),
        reason: `${cfg.label}: Study count mismatch LV=${lvStudy} ET=${etStudy}`,
        level: levelKey,
      });
    }

    for (let i = 0; i < Math.min(lv.length, et.length); i++) {
      const lvE = lv[i];
      const etE = et[i];
      const id = entryId(etE, i, levelKey);

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
          level: levelKey,
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
          level: levelKey,
        });
      }
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
  LEVELS,
  TEMP_DIR,
  LUNA_JSON,
  PROGRESS_FILE,
  loadArray,
  entryId,
  chunk,
  ensureDir,
  buildSimpleCard,
  buildStudyCard,
  buildCardsForLevel,
  buildCards,
  deterministicStructuralFindings,
  loadProgress,
  saveProgress,
};
