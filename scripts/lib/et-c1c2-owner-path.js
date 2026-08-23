"use strict";

const {
  normalizeField: normalizeDaField,
  getAt,
  setAt,
  findEntry,
  entryIndex,
  parseFieldParts,
} = require("./da-c1c2-owner-path");

function normalizeField(field) {
  let f = String(field || "").replace(/^`|`$/g, "").trim();
  f = f.replace(/^entry\[\d+\]\./, "");
  if (f === "etText" || f === "etMain") return "lv";
  if (/sectionAccents/i.test(f)) return null;
  return normalizeDaField(f);
}

function levelForCard(cardId) {
  const id = String(cardId || "");
  if (id.startsWith("c2-") || id === "STRUCT-c2") return "c2";
  if (id.startsWith("c1-") || id === "STRUCT-c1") return "c1";
  return null;
}

module.exports = {
  normalizeField,
  getAt,
  setAt,
  findEntry,
  entryIndex,
  parseFieldParts,
  levelForCard,
};
