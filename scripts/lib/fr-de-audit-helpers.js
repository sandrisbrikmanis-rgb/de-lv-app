#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { getModuleConfig } = require("./fr-de-audit-config");

const NATIVE_KEYS = new Set(["lv", "translation", "text", "meaning", "title", "lead", "important"]);

function loadArray(filePath, globalKey) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function vocabEntryId(entry, index, idPrefix) {
  return entry.study?.id || `${idPrefix}-${entry.de}-${index}`;
}

function sentenceId(index) {
  return `sentence-${index}`;
}

function verbId(index) {
  return `verb-${index}`;
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

function buildVocabSimpleCard(lvEntry, frEntry, index, cfg) {
  return {
    cardId: vocabEntryId(frEntry, index, cfg.idPrefix),
    level: cfg.level,
    index,
    de: frEntry.de,
    de_article: frEntry.de_article || null,
    de_plural: frEntry.de_plural || null,
    lvReference: lvEntry.lv,
    frText: frEntry.lv,
    hasStudy: Boolean(frEntry.study),
  };
}

function buildVocabStudyCard(lvEntry, frEntry, index, cfg) {
  const fields = [];
  walkFrFields(frEntry.study, "study", fields, frEntry.de);
  return {
    cardId: vocabEntryId(frEntry, index, cfg.idPrefix),
    level: cfg.level,
    index,
    de: frEntry.de,
    layout: frEntry.study?.layout || "standardStudy",
    frMain: frEntry.lv,
    studyTranslation: frEntry.study?.translation || null,
    lvReferenceMain: lvEntry.lv,
    fields,
  };
}

function buildVocabCards(cfg) {
  const lv = loadArray(cfg.deReferenceAbs, cfg.globalKey);
  const es = loadArray(cfg.productionAbs, cfg.globalKey);
  const simple = [];
  const study = [];
  for (let i = 0; i < es.length; i++) {
    if (es[i].study) study.push(buildVocabStudyCard(lv[i], es[i], i, cfg));
    else simple.push(buildVocabSimpleCard(lv[i], es[i], i, cfg));
  }
  return { lv, es, simple, study };
}

function buildSentenceCards(cfg) {
  const deRef = loadArray(cfg.deReferenceAbs, cfg.globalKey);
  const es = loadArray(cfg.productionAbs, cfg.globalKey);
  const cards = es.map((entry, index) => ({
    cardId: sentenceId(index),
    index,
    de: entry.de,
    lvReference: deRef[index]?.lv || "",
    frText: entry.lv,
    level: entry.level || "Sätze",
  }));
  return { deRef, es, cards };
}

function buildVerbCards(cfg) {
  const deRef = loadArray(cfg.deReferenceAbs, cfg.globalKey);
  const es = loadArray(cfg.productionAbs, cfg.globalKey);
  const formKeys = cfg.formKeys;
  const verbs = es.map((entry, index) => ({
    cardId: verbId(index),
    index,
    infinitivDe: entry.infinitiv?.de || "",
    infinitivFr: entry.infinitiv?.lv || "",
    forms: formKeys.map((formKey) => ({
      field: formKey,
      de: entry[formKey]?.de || "",
      currentFr: entry[formKey]?.lv || "",
    })),
  }));
  return { deRef, es, verbs };
}

function buildCards(cfg) {
  if (cfg.type === "vocab") return buildVocabCards(cfg);
  if (cfg.type === "sentences") return buildSentenceCards(cfg);
  if (cfg.type === "verbs") return buildVerbCards(cfg);
  throw new Error(`Unknown module type: ${cfg.type}`);
}

function dataFileHash(cfg) {
  return crypto.createHash("md5").update(fs.readFileSync(cfg.productionAbs)).digest("hex");
}

function loadProgress(cfg) {
  if (!fs.existsSync(cfg.progressFile)) {
    return { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  }
  try {
    return JSON.parse(fs.readFileSync(cfg.progressFile, "utf8"));
  } catch {
    return { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  }
}

function saveProgress(cfg, progress) {
  fs.writeFileSync(cfg.progressFile, JSON.stringify(progress, null, 2));
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
    PARADIGM: "GRAMMAR",
    FORMAT: "ORTHOGRAPHY",
  };
  return map[c] || c;
}

function resolveCard(words, cardId, cfg) {
  if (cfg.type === "sentences") {
    const idx = Number(String(cardId).replace(/^sentence-/, ""));
    if (!Number.isNaN(idx) && words[idx]) return { entry: words[idx], cardId: sentenceId(idx) };
    return { entry: null, cardId };
  }
  if (cfg.type === "verbs") {
    const idx = Number(String(cardId).replace(/^verb-/, ""));
    if (!Number.isNaN(idx) && words[idx]) return { entry: words[idx], cardId: verbId(idx) };
    return { entry: null, cardId };
  }
  let idx = words.findIndex((e, i) => vocabEntryId(e, i, cfg.idPrefix) === cardId || e.study?.id === cardId);
  if (idx >= 0) {
    return { entry: words[idx], cardId: words[idx].study?.id || vocabEntryId(words[idx], idx, cfg.idPrefix) };
  }
  const deGuess = String(cardId)
    .replace(new RegExp(`^${cfg.idPrefix}-`), "")
    .replace(/-study.*$/i, "")
    .replace(/-\d+$/, "");
  idx = words.findIndex((e) => e.de === deGuess || e.de?.toLowerCase() === deGuess.toLowerCase());
  if (idx >= 0) {
    return { entry: words[idx], cardId: words[idx].study?.id || vocabEntryId(words[idx], idx, cfg.idPrefix) };
  }
  return { entry: null, cardId };
}

function normalizeFieldPath(field) {
  if (!field) return "lv";
  return String(field).replace(/^entry\[\d+\]\./, "");
}

module.exports = {
  NATIVE_KEYS,
  loadArray,
  chunk,
  ensureDir,
  vocabEntryId,
  sentenceId,
  verbId,
  buildCards,
  dataFileHash,
  loadProgress,
  saveProgress,
  mapSeverity,
  mapCategory,
  resolveCard,
  normalizeFieldPath,
};
