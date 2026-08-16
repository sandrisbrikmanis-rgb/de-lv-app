"use strict";

function normalizeField(field) {
  const f = String(field || "lv")
    .replace(/^`|`$/g, "")
    .trim();
  return f || "lv";
}

function findEntry(sentences, cardId) {
  const m = String(cardId).match(/^sentence-(\d+)$/);
  if (!m) return null;
  const idx = parseInt(m[1], 10);
  return sentences[idx] ?? null;
}

function entryIndex(sentences, cardId) {
  const m = String(cardId).match(/^sentence-(\d+)$/);
  if (!m) return -1;
  return parseInt(m[1], 10);
}

module.exports = { findEntry, entryIndex, normalizeField };
