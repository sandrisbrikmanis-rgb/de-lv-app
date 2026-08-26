#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { ROOT } = require("./audit-common");
const { PRODUCTION_PATH, WWW_PATH, LV_REFERENCE_PATH } = require("./fr-b1-discovery-config");

const BATCH_SIZE = 50;
const STUDY_BATCH_SIZE = 10;
const ES_FILE = path.join(ROOT, PRODUCTION_PATH);
const WWW_FILE = path.join(ROOT, WWW_PATH);
const LV_FILE = path.join(ROOT, LV_REFERENCE_PATH);
const TEMP_DIR = path.join(ROOT, "reports/temp/fr-de-b1-full-audit-luna");
const LUNA_JSON = path.join(ROOT, "reports/temp/fr-de-b1-luna-raw.json");
const PROGRESS_FILE = path.join(ROOT, "scripts/.fr-de-b1-luna-progress.json");

const NATIVE_KEYS = new Set(["lv", "translation", "text", "meaning", "title", "lead", "important"]);

function loadArray(filePath, globalKey = "B1_WORDS") {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function entryId(entry, index) {
  return entry.study?.id || `b1-${entry.de}-${index}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function walkFrFields(study, prefix, out, de) {
  if (!study) return;
  if (typeof study === "string") {
    const key = prefix.split(".").pop();
    if (NATIVE_KEYS.has(key) || key === "lv" || prefix.includes(".lv") || prefix.includes(".meaning")) {
      out.push({ field: prefix, frText: study, de });
    }
    return;
  }
  if (Array.isArray(study)) {
    study.forEach((item, i) => walkFrFields(item, `${prefix}[${i}]`, out, de));
    return;
  }
  if (study && typeof study === "object") {
    for (const k of Object.keys(study)) {
      if (k === "sectionAccents" || k === "de") continue;
      walkFrFields(study[k], prefix ? `${prefix}.${k}` : k, out, de);
    }
  }
}

function buildSimpleCard(lvEntry, frEntry, index) {
  return {
    cardId: entryId(frEntry, index),
    level: "B1",
    index,
    de: frEntry.de,
    de_article: frEntry.de_article || null,
    de_plural: frEntry.de_plural || null,
    lvReference: lvEntry.lv,
    frText: frEntry.lv,
    hasStudy: Boolean(frEntry.study),
  };
}

function buildStudyCard(lvEntry, frEntry, index) {
  const fields = [];
  walkFrFields(frEntry.study, "study", fields, frEntry.de);
  return {
    cardId: entryId(frEntry, index),
    level: "B1",
    index,
    de: frEntry.de,
    layout: frEntry.study?.layout || "standardStudy",
    frMain: frEntry.lv,
    studyTranslation: frEntry.study?.translation || null,
    lvReferenceMain: lvEntry.lv,
    fields,
  };
}

function buildCards() {
  const lv = loadArray(LV_FILE);
  const es = loadArray(ES_FILE);
  const simple = [];
  const study = [];
  for (let i = 0; i < es.length; i++) {
    if (es[i].study) study.push(buildStudyCard(lv[i], es[i], i));
    else simple.push(buildSimpleCard(lv[i], es[i], i));
  }
  return { lv, es, simple, study };
}

function dataFileHash() {
  return crypto.createHash("md5").update(fs.readFileSync(ES_FILE)).digest("hex");
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  } catch {
    return { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

function mapSeverity(sev) {
  const s = String(sev || "MEDIUM").toUpperCase();
  if (s === "CRITICAL") return "KRITISKA";
  if (s === "HIGH") return "AUGSTA";
  if (s === "LOW") return "ZEMA";
  return "VIDĒJA";
}

function mapCategory(cat) {
  const c = String(cat || "TRANSLATION").toUpperCase();
  const map = {
    TRANSLATION: "TRANSLATION",
    GRAMMAR: "GRAMMAR",
    SEMANTICS: "SEMANTICS",
    ORTHOGRAPHY: "ORTHOGRAPHY",
    PUNCTUATION: "PUNCTUATION",
    NATURALNESS: "REGISTER",
    REGISTER: "REGISTER",
    STUDY: "STUDY_STRUCTURE",
    STUDY_STRUCTURE: "STUDY_STRUCTURE",
    COMPARISON: "SEMANTICS",
    SECTIONACCENTS_LANGUAGE: "SECTION_ACCENT",
    SECTION_ACCENT: "SECTION_ACCENT",
    FOREIGN_REMNANT: "FOREIGN_REMNANT",
    STRUCTURE: "STUDY_STRUCTURE",
    SOURCE_DE_ISSUE: "SOURCE_DE_ISSUE",
    DE_SOURCE_ISSUE: "SOURCE_DE_ISSUE",
  };
  return map[c] || c;
}

module.exports = {
  ROOT,
  BATCH_SIZE,
  STUDY_BATCH_SIZE,
  ES_FILE,
  WWW_FILE,
  LV_FILE,
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
  dataFileHash,
  loadProgress,
  saveProgress,
  mapSeverity,
  mapCategory,
};
