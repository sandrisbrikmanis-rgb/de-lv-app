"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");

function loadJsArray(filePath, globalKey) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function loadSentences() {
  return loadJsArray(path.join(ROOT, "data/et/sentences.js"), "SENTENCE_ENTRIES");
}

function loadC1() {
  return loadJsArray(path.join(ROOT, "data/et/c1.js"), "C1_WORDS");
}

function loadC2() {
  return loadJsArray(path.join(ROOT, "data/et/c2.js"), "C2_WORDS");
}

function loadB2() {
  return loadJsArray(path.join(ROOT, "data/et/b2.js"), "B2_WORDS");
}

function normalizeFieldPath(field) {
  let f = String(field || "").trim();
  f = f.replace(/^entry\[\d+\]\./, "");
  if (f.startsWith("study.sectionAccents")) {
    const m = f.match(/study\.sectionAccents(?:\.(\w+))?/);
    return m ? `study.sectionAccents${m[1] ? `.${m[1]}` : ""}` : "study.sectionAccents";
  }
  return f;
}

function getAt(obj, fieldPath) {
  if (!obj || !fieldPath) return undefined;
  const parts = fieldPath.split(/\.|\[|\]/).filter(Boolean);
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function findC1C2Entry(cardId, c1Words, c2Words) {
  const id = String(cardId || "");
  if (id.startsWith("STRUCT")) return null;
  const all = [
    ...c1Words.map((e, i) => ({ e, i, level: "c1" })),
    ...c2Words.map((e, i) => ({ e, i, level: "c2" })),
  ];
  for (const row of all) {
    const e = row.e;
    const studyId = e.study?.id;
    if (studyId === id || `${row.level}-${e.de}` === id) return { entry: e, index: row.i, level: row.level };
  }
  return null;
}

function productionFileForLevel(level) {
  return level === "c2" ? "data/et/c2.js" : "data/et/c1.js";
}

function resolveC1C2Current(cardId, field, c1Words, c2Words) {
  const norm = normalizeFieldPath(field);
  const hit = findC1C2Entry(cardId, c1Words, c2Words);
  if (!hit) {
    if (cardId === "STRUCT-c1") return String(c1Words.filter((e) => e.study).length);
    if (cardId === "STRUCT-c2") return String(c2Words.filter((e) => e.study).length);
    return "";
  }
  const { entry, level } = hit;
  if (norm === "lv" || norm === "entry.lv") return entry.lv ?? "";
  if (norm === "study" || norm === "study.count") return entry.study ? JSON.stringify(entry.study).slice(0, 200) : "";
  if (norm.startsWith("study.")) {
    const sub = norm.replace(/^study\./, "");
    const val = getAt(entry.study, sub);
    if (typeof val === "string") return val;
    if (val != null) return JSON.stringify(val);
  }
  const val = getAt(entry, norm);
  if (typeof val === "string") return val;
  if (val != null) return JSON.stringify(val);
  return entry.lv ?? "";
}

function resolveSentenceCurrent(cardId, field, sentences) {
  const m = String(cardId || "").match(/^sentence-(\d+)$/);
  if (!m) return "";
  const idx = Number(m[1]);
  const entry = sentences[idx];
  if (!entry) return "";
  if (field === "lv" || !field) return entry.lv ?? "";
  return entry[field] ?? entry.lv ?? "";
}

function resolveB2Current(cardId, field, b2Words) {
  const norm = normalizeFieldPath(field);
  let entry = null;
  let index = -1;
  for (let i = 0; i < b2Words.length; i++) {
    const e = b2Words[i];
    if (e.study?.id === cardId || `b2-${e.de}` === cardId) {
      entry = e;
      index = i;
      break;
    }
  }
  if (!entry) {
    if (cardId === "STRUCT") return "";
    return "";
  }
  if (norm === "lv") return entry.lv ?? "";
  if (norm.startsWith("study.")) {
    const sub = norm.replace(/^study\./, "");
    const val = getAt(entry.study, sub);
    if (typeof val === "string") return val;
    if (val != null) return JSON.stringify(val);
  }
  const val = getAt(entry, norm);
  if (typeof val === "string") return val;
  if (val != null) return JSON.stringify(val);
  return entry.lv ?? "";
}

function fixDaTemplateText(text) {
  let s = String(text || "");
  s = s.replace(/DA–DE/g, "ET–DE");
  s = s.replace(/\bDA sentence\b/gi, "ET sentence");
  s = s.replace(/\bDA translation\b/gi, "ET translation");
  s = s.replace(/\bDA lacks\b/gi, "ET lacks");
  s = s.replace(/\bDuplicate DA\b/gi, "Duplicate ET");
  s = s.replace(/\bDA fragment\b/gi, "ET fragment");
  s = s.replace(/\bDA text\b/gi, "ET text");
  s = s.replace(/\bDA field\b/gi, "ET field");
  s = s.replace(/Possible negation mismatch: DE contains negation, DA lacks/gi,
    "Possible negation mismatch: DE contains negation, ET lacks");
  s = s.replace(/\bDA\b(?=\s+(?:sentence|translation|text|field|fragment|lacks))/gi, "ET");
  return s;
}

function isSectionAccentsCharArtifact(finding) {
  const field = String(finding.field || "");
  const cur = String(finding.currentEt || finding.current || "");
  return (
    /sectionAccents/i.test(field) &&
    cur.length > 0 &&
    cur.length <= 2 &&
    !/\s/.test(cur)
  );
}

function dedupSectionAccentsFindings(findings, idPrefix) {
  const kept = [];
  const groups = new Map();
  const other = [];

  for (const f of findings) {
    if (isSectionAccentsCharArtifact(f)) {
      const key = `${f.cardId}|${normalizeFieldPath(f.field)}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(f);
    } else {
      other.push(f);
    }
  }

  for (const [key, group] of groups) {
    const first = group[0];
    const terms = group.map((g) => String(g.currentEt || "").trim()).filter(Boolean);
    const merged = {
      ...first,
      field: normalizeFieldPath(first.field),
      currentEt: first.productionValue || `sectionAccents scalar split (${terms.length} char artifacts: ${terms.slice(0, 12).join("")}…)`,
      reason:
        `sectionAccents stored as scalar string; collect split into ${terms.length} single-character pseudo-findings. ` +
        `OWNER target: one card-level sectionAccents repair for \`${first.cardId}\` at \`${normalizeFieldPath(first.field)}\`. ` +
        (first.reason || ""),
      dedupedFrom: group.map((g) => g.findingId),
      sectionAccentsCharCount: terms.length,
    };
    kept.push(merged);
  }

  const merged = [...other, ...kept];
  merged.sort((a, b) => {
    const ai = Number(String(a.findingId || "").replace(/\D/g, "")) || 0;
    const bi = Number(String(b.findingId || "").replace(/\D/g, "")) || 0;
    return ai - bi;
  });

  return merged.map((f, i) => ({
    ...f,
    findingId: `${idPrefix}-${String(i + 1).padStart(4, "0")}`,
  }));
}

module.exports = {
  loadSentences,
  loadC1,
  loadC2,
  loadB2,
  normalizeFieldPath,
  resolveC1C2Current,
  resolveSentenceCurrent,
  resolveB2Current,
  productionFileForLevel,
  findC1C2Entry,
  fixDaTemplateText,
  isSectionAccentsCharArtifact,
  dedupSectionAccentsFindings,
};
