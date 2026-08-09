#!/usr/bin/env node
/**
 * EN-DE B2 data loader for owner review (read-only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

function loadB2(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function buildIndex(words) {
  const byId = new Map();
  const byDe = new Map();
  for (let i = 0; i < words.length; i++) {
    const id = entryId(words[i], i);
    byId.set(id, { index: i, entry: words[i] });
    const deKey = words[i].de;
    if (!byDe.has(deKey)) byDe.set(deKey, []);
    byDe.get(deKey).push({ index: i, entry: words[i], id });
  }
  return { byId, byDe };
}

function resolveCard(byId, byDe, cardId, deHint) {
  if (byId.has(cardId)) return byId.get(cardId);
  if (deHint && byDe.has(deHint)) {
    const list = byDe.get(deHint);
    const match = list.find((x) => x.id === cardId) || list[0];
    return match;
  }
  for (const [id, val] of byId) {
    if (id === cardId) return val;
  }
  return null;
}

function getAtPath(obj, fieldPath) {
  if (!fieldPath) return null;
  let p = fieldPath.replace(/^enText$/, "lv");
  if (p === "lv") return obj.lv;
  if (!p.startsWith("study")) p = p.startsWith(".") ? `study${p}` : `study.${p}`;
  const parts = p.replace(/^study\.?/, "").split(/\.|\[|\]/).filter(Boolean);
  let cur = obj.study;
  if (!parts.length) return obj.lv;
  for (const part of parts) {
    if (cur == null) return null;
    if (/^\d+$/.test(part)) cur = cur[parseInt(part, 10)];
    else cur = cur[part];
  }
  return typeof cur === "string" ? cur : null;
}

function loadProductionContext() {
  const lvWords = loadB2(path.join(ROOT, "data", "b2.js"));
  const enWords = loadB2(path.join(ROOT, "data", "en", "b2.js"));
  const lvIdx = buildIndex(lvWords);
  const enIdx = buildIndex(enWords);
  return { lvWords, enWords, lvIdx, enIdx };
}

function getProductionEn(enIdx, cardId, fieldPath, deHint) {
  const resolved = resolveCard(enIdx.byId, enIdx.byDe, cardId, deHint);
  if (!resolved) return null;
  return getAtPath(resolved.entry, fieldPath);
}

function getLvSource(lvIdx, cardId, fieldPath, deHint) {
  const resolved = resolveCard(lvIdx.byId, lvIdx.byDe, cardId, deHint);
  if (!resolved) return null;
  return getAtPath(resolved.entry, fieldPath);
}

function getDeLemma(enIdx, cardId, deHint) {
  const resolved = resolveCard(enIdx.byId, enIdx.byDe, cardId, deHint);
  return resolved?.entry?.de || deHint || "";
}

module.exports = {
  ROOT,
  loadB2,
  entryId,
  buildIndex,
  loadProductionContext,
  getProductionEn,
  getLvSource,
  getDeLemma,
  getAtPath,
};
