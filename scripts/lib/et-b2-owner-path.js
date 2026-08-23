"use strict";

const {
  parseFieldParts,
  getAt,
  setAt,
  findEntry,
  entryIndex,
  normalizeField: normalizeDaField,
} = require("./da-b2-owner-path");

function normalizeField(field) {
  let f = String(field || "").replace(/^`|`$/g, "").trim();
  f = f.replace(/^entry\[\d+\]\./, "");
  if (f === "etText" || f === "etMain") return "lv";
  if (/sectionAccents/i.test(f)) return null;
  return normalizeDaField(f);
}

module.exports = {
  normalizeField,
  parseFieldParts,
  getAt,
  setAt,
  findEntry,
  entryIndex,
};
