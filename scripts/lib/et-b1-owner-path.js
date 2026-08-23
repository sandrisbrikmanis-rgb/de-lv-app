"use strict";
const {
  normalizeField: normalizeDaField,
  getAt,
  setAt,
  findEntry: findEntryDa,
  entryIndex,
  parseFieldParts,
} = require("./da-b1-owner-path");

function normalizeEtB1Field(field) {
  let f = String(field || "").replace(/^`|`$/g, "").trim();
  const entryMatch = f.match(/^entry\[\d+\]\.(.+)$/);
  if (entryMatch) f = entryMatch[1];
  if (f === "etText" || f === "etMain") return "lv";
  if (f.startsWith("study.sectionAccents")) return null;
  return normalizeDaField(f);
}

function findEntry(words, cardId) {
  let entry = words.find((e) => e.study?.id === cardId);
  if (entry) return entry;

  const indexMatch = cardId.match(/^b1-(.*)-(\d+)$/);
  if (indexMatch) {
    const idx = parseInt(indexMatch[2], 10);
    if (Number.isFinite(idx) && idx >= 0 && idx < words.length) {
      const atIdx = words[idx];
      const dePart = indexMatch[1];
      if (
        atIdx &&
        (atIdx.de === dePart ||
          atIdx.de?.toLowerCase() === dePart.toLowerCase())
      ) {
        return atIdx;
      }
      if (atIdx) return atIdx;
    }
  }

  return findEntryDa(words, cardId);
}

module.exports = {
  normalizeField: normalizeEtB1Field,
  getAt,
  setAt,
  findEntry,
  entryIndex,
  parseFieldParts,
};
