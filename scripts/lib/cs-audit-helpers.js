#!/usr/bin/env node
/**
 * Shared helpers for CS-DE read-only audit (deterministic + linguistic).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");

const BULLET = "•";
const BATCH_SIZE = 50;
const STUDY_BATCH_SIZE = 10;

const DATASET_CONFIG = {
  a1: { globalKey: "A1_WORDS", lvFile: "data/a1.js", csFile: "data/cs/a1.js", label: "A1" },
  a2: { globalKey: "A2_WORDS", lvFile: "data/a2.js", csFile: "data/cs/a2.js", label: "A2" },
  b1: { globalKey: "B1_WORDS", lvFile: "data/b1.js", csFile: "data/cs/b1.js", label: "B1" },
  b2: { globalKey: "B2_WORDS", lvFile: "data/b2.js", csFile: "data/cs/b2.js", label: "B2" },
  c1: { globalKey: "C1_WORDS", lvFile: "data/c1.js", csFile: "data/cs/c1.js", label: "C1" },
  c2: { globalKey: "C2_WORDS", lvFile: "data/c2.js", csFile: "data/cs/c2.js", label: "C2" },
  vety: { globalKey: "SENTENCE_ENTRIES", lvFile: "data/sentences.js", csFile: "data/cs/sentences.js", label: "Věty", type: "sentences" },
  slovesa: { globalKey: "VERB_ENTRIES", lvFile: "data/verbs.js", csFile: "data/cs/verbs.js", label: "Slovesa", type: "verbs" },
  kurs: { type: "kurs", label: "Kurs" },
};

const LV_DIACRITICS = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|jūs|jums|jūsu|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|rīsi|mācēt|prast|braukt|vest|aizvest|lotyš|łotew)\b/i;
const PL_CHARS = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/;
const SK_CHARS = /[äôľĺŕťĺŕ]/; // Slovak-specific where not Czech
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember",
  "formsLabel", "rektion", "forms", "mainIdea",
]);

function loadArray(filePath, globalKey) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  if (globalKey) return ctx.window[globalKey];
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : null;
}

function loadWindow(filePath) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function entryId(entry, index, dataset) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `${dataset}-${entry.de}-${index}`;
  return `${dataset}-${index}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function hasContent(val) {
  if (val === null || val === undefined) return false;
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === "string") return val.trim().length > 0;
  if (typeof val === "object") return Object.keys(val).length > 0;
  return Boolean(val);
}

function hasTechnicalArtifact(text) {
  return text.includes("```")
    || /^(Translation|Tulkojums):/im.test(text)
    || /\bTODO\b|\bTBD\b/.test(text)
    || text.trim() === "...";
}

function walkStrings(value, visitor, ctx = { path: "", parentKey: "", inDe: false }) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    visitor(value, ctx);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkStrings(item, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const inDe = ctx.inDe || key === "de" || key === "de_article" || key === "de_plural";
      walkStrings(child, visitor, {
        path: ctx.path ? `${ctx.path}.${key}` : key,
        parentKey: key,
        inDe,
      });
    }
  }
}

function collectDeStrings(obj, out, keyPath = "") {
  if (typeof obj === "string") return;
  if (Array.isArray(obj)) return obj.forEach((v, i) => collectDeStrings(v, out, `${keyPath}[${i}]`));
  if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "de") out.push({ path: keyPath, value: v });
      else collectDeStrings(v, out, keyPath ? `${keyPath}.${k}` : k);
    }
  }
}

function schemaKeys(obj, prefix = "", exclude = new Set(["sectionAccents", "accents"])) {
  const keys = [];
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return keys;
  for (const k of Object.keys(obj)) {
    if (exclude.has(k)) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    keys.push(p);
    const v = obj[k];
    if (v && typeof v === "object" && !Array.isArray(v)) keys.push(...schemaKeys(v, p, exclude));
  }
  return keys;
}

function accentTermMatches(text, term) {
  if (!text || !term) return false;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "iu").test(text);
  } catch {
    return text.includes(term);
  }
}

function getSectionText(study, section, index = 0) {
  if (section === "explanation") {
    const e = study.explanation;
    if (Array.isArray(e)) return e.join(" ");
    return String(e || "");
  }
  if (section === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.map((t) => (typeof t === "object" ? [t.text, t.example].filter(Boolean).join(" ") : t)).join(" ");
    if (tip && typeof tip === "object") return [tip.text, tip.example].filter(Boolean).join(" ");
    return String(tip || "");
  }
  if (section === "important") {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.map((t) => (typeof t === "object" ? [t.text, t.example].filter(Boolean).join(" ") : t)).join(" ");
    if (imp && typeof imp === "object") return [imp.text, imp.example].filter(Boolean).join(" ");
    return String(imp || "");
  }
  if (section === "examples" && Array.isArray(study.examples)) {
    const ex = study.examples[index];
    return ex ? [ex.de, ex.lv].filter(Boolean).join(" ") : "";
  }
  if (section === "comparison" && Array.isArray(study.comparison)) {
    const c = study.comparison[index];
    return c ? [c.word, c.meaning, c.example].filter(Boolean).join(" ") : "";
  }
  return "";
}

function collectSectionAccentTerms(sectionAccents, out, inDe = false) {
  if (!sectionAccents) return;
  if (typeof sectionAccents === "string") {
    if (!inDe) out.push(sectionAccents);
    return;
  }
  if (Array.isArray(sectionAccents)) {
    sectionAccents.forEach((item) => collectSectionAccentTerms(item, out, inDe));
    return;
  }
  if (typeof sectionAccents === "object") {
    for (const [key, val] of Object.entries(sectionAccents)) {
      collectSectionAccentTerms(val, out, inDe || key === "de");
    }
  }
}

function detectForeignRemnant(text) {
  const issues = [];
  if (LV_DIACRITICS.test(text)) issues.push("LV_DIACRITIC");
  if (LV_WORDS.test(text)) issues.push("LV_WORD");
  if (PL_CHARS.test(text)) issues.push("PL_CHAR");
  if (/lotyš|łotew|latviešu|Główna idea|Podzielne|Niepoprawnie/i.test(text)) issues.push("FOREIGN_REF");
  return issues;
}

function isFinalPostRepairA1(dataset) {
  return dataset === "a1"
    && (process.argv.includes("--final-post-repair") || process.env.CS_A1_FINAL_POST_REPAIR === "1");
}

function isPostRepairA1(dataset) {
  return dataset === "a1"
    && (isFinalPostRepairA1(dataset)
      || process.argv.includes("--post-repair")
      || process.env.CS_A1_POST_REPAIR === "1");
}

function tempDir(dataset) {
  if (isFinalPostRepairA1(dataset)) {
    return path.join(ROOT, "reports", "temp", "cs-a1-final-post-repair-audit");
  }
  if (isPostRepairA1(dataset)) {
    return path.join(ROOT, "reports", "temp", "cs-a1-post-repair-audit");
  }
  return path.join(ROOT, "reports", "temp", `cs-${dataset}-audit`);
}

function postRepairPaths(dataset) {
  if (dataset !== "a1") return null;
  return {
    tempDir: path.join(ROOT, "reports", "temp", "cs-a1-post-repair-audit"),
    progressFile: path.join(ROOT, "scripts", ".cs-a1-post-repair-luna-progress.json"),
    consolidatedJson: path.join(ROOT, "reports", "temp", "cs-a1-post-repair-audit.json"),
    reportMd: path.join(ROOT, "reports", "cs-a1-post-repair-audit.md"),
  };
}

function finalPostRepairPaths(dataset) {
  if (dataset !== "a1") return null;
  return {
    tempDir: path.join(ROOT, "reports", "temp", "cs-a1-final-post-repair-audit"),
    progressFile: path.join(ROOT, "scripts", ".cs-a1-final-post-repair-luna-progress.json"),
    validationProgressFile: path.join(ROOT, "scripts", ".cs-a1-final-post-repair-validate-progress.json"),
    consolidatedJson: path.join(ROOT, "reports", "temp", "cs-a1-final-post-repair-audit.json"),
    validatedJson: path.join(ROOT, "reports", "temp", "cs-a1-final-post-repair-audit-validated.json"),
    coverageManifest: path.join(ROOT, "reports", "temp", "cs-a1-final-post-repair-audit", "coverage-manifest.json"),
    reportMd: path.join(ROOT, "reports", "cs-a1-final-post-repair-audit.md"),
  };
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function batchLabel(dataset, start, end) {
  return `${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
}

function buildSimpleCard(lvEntry, csEntry, index, dataset) {
  return {
    cardId: entryId(csEntry, index, dataset),
    index,
    de: csEntry.de,
    de_article: csEntry.de_article || null,
    de_plural: csEntry.de_plural || null,
    lvSource: lvEntry.lv,
    csText: csEntry.lv,
    level: csEntry.level || dataset.toUpperCase(),
    hasStudy: Boolean(csEntry.study),
  };
}

function buildStudyCard(lvEntry, csEntry, index, dataset) {
  const study = csEntry.study || {};
  const lvStudy = lvEntry.study || {};
  const fields = [];
  function walk(lvObj, csObj, p) {
    if (!lvObj && !csObj) return;
    if (typeof lvObj === "string" && typeof csObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv") || p.includes(".meaning")) {
        fields.push({ field: p, lvSource: lvObj, csText: csObj, de: csEntry.de });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(csObj)) {
      const len = Math.max(lvObj.length, csObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], csObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && csObj && typeof csObj === "object") {
      for (const k of new Set([...Object.keys(lvObj), ...Object.keys(csObj)])) {
        if (k === "sectionAccents" || k === "de") continue;
        walk(lvObj[k], csObj[k], p ? `${p}.${k}` : k);
      }
    }
  }
  walk(lvStudy, study, "study");
  return {
    cardId: entryId(csEntry, index, dataset),
    index,
    de: csEntry.de,
    layout: study.layout || "standardStudy",
    csMain: csEntry.lv,
    studyTranslation: study.translation || study.title || null,
    lvSourceMain: lvEntry.lv,
    fields,
    study,
    lvStudy,
  };
}

function buildSentenceCard(lvEntry, csEntry, index) {
  return {
    cardId: `sentence-${index}`,
    index,
    de: lvEntry.de,
    csText: csEntry.lv || csEntry.cs || "",
    lvSource: lvEntry.lv,
  };
}

function buildVerbCard(lvEntry, csEntry, index) {
  const forms = {};
  for (const key of Object.keys(lvEntry)) {
    if (key === "id" || key === "level") continue;
    forms[key] = {
      de: lvEntry[key]?.de || lvEntry[key],
      csText: csEntry[key]?.lv || csEntry[key]?.cs || "",
      lvSource: lvEntry[key]?.lv || "",
    };
  }
  return {
    cardId: csEntry.id || `verb-${index}`,
    index,
    de: lvEntry.infinitiv?.de || lvEntry.infinitiv || Object.values(lvEntry)[0]?.de,
    forms,
    csMain: csEntry.lv || csEntry.translation || "",
  };
}

function loadKursData() {
  const lvWin = loadWindow("data/courseLessons.js");
  const csWin = loadWindow("data/cs/courseLessons.js");
  let lvTraining = {};
  let csTraining = {};
  try { lvTraining = loadWindow("data/lv/courseTrainingCards.js"); } catch { /* no LV root training file */ }
  try { csTraining = loadWindow("data/cs/courseTrainingCards.js"); } catch { /* optional */ }
  return { lvWin, csWin, lvTraining, csTraining };
}

module.exports = {
  ROOT,
  BULLET,
  BATCH_SIZE,
  STUDY_BATCH_SIZE,
  DATASET_CONFIG,
  LV_DIACRITICS,
  LV_WORDS,
  PL_CHARS,
  SK_CHARS,
  MOJIBAKE,
  ACCENT_COLORS,
  NATIVE_KEYS,
  loadArray,
  loadWindow,
  entryId,
  chunk,
  hasContent,
  hasTechnicalArtifact,
  walkStrings,
  collectDeStrings,
  schemaKeys,
  accentTermMatches,
  getSectionText,
  collectSectionAccentTerms,
  detectForeignRemnant,
  isPostRepairA1,
  isFinalPostRepairA1,
  tempDir,
  postRepairPaths,
  finalPostRepairPaths,
  ensureDir,
  batchLabel,
  buildSimpleCard,
  buildStudyCard,
  buildSentenceCard,
  buildVerbCard,
  loadKursData,
};
