#!/usr/bin/env node
"use strict";
/**
 * ET–DE Verbs field path helpers for OWNER COPY-ONLY apply.
 */
const FORM_KEYS = new Set([
  "infinitiv",
  "praesens",
  "imperfektIndikativ",
  "imperfektKonjunktiv",
  "partizipVergangenheit",
]);

function normalizeField(field) {
  const raw = String(field || "").trim();
  if (!raw) return "";
  if (raw.endsWith(".lv")) return raw.slice(0, -3);
  if (FORM_KEYS.has(raw)) return raw;
  const dot = raw.indexOf(".");
  if (dot > 0) return raw.slice(0, dot);
  return raw;
}

function verbIndex(cardId) {
  const m = String(cardId).match(/^verb-(\d+)$/);
  return m ? Number(m[1]) : -1;
}

function findEntry(verbs, cardId) {
  const index = verbIndex(cardId);
  if (index < 0 || index >= verbs.length) return null;
  return verbs[index];
}

function getEtValue(entry, field) {
  const formKey = normalizeField(field);
  if (!entry?.[formKey] || typeof entry[formKey].lv !== "string") return undefined;
  return entry[formKey].lv;
}

function setEtValue(entry, field, value) {
  const formKey = normalizeField(field);
  if (!entry?.[formKey]) return { ok: false, reason: "FORM_NOT_FOUND", field: formKey };
  entry[formKey].lv = value;
  return { ok: true, field: formKey };
}

function applyKey(cardId, field) {
  return `${cardId}|${normalizeField(field)}`;
}

module.exports = {
  FORM_KEYS,
  normalizeField,
  verbIndex,
  findEntry,
  getEtValue,
  setEtValue,
  applyKey,
};
