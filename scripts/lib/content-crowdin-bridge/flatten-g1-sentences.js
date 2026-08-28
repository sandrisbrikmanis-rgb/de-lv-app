#!/usr/bin/env node
"use strict";

const { slugify } = require("./slug");

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function pushString(flat, key, value) {
  if (!isNonEmptyString(value)) return;
  flat[key] = String(value);
}

/** @param {object[]} entries */
function flattenG1Sentences(entries) {
  const flat = {};
  if (!Array.isArray(entries)) return flat;

  for (const entry of entries) {
    if (!entry || !isNonEmptyString(entry.de)) continue;
    const slug = slugify(entry.de);
    pushString(flat, `sentences.de.${slug}.native`, entry.lv);
  }
  return flat;
}

function applyG1SentencesFlat(entries, flat) {
  const cloned = JSON.parse(JSON.stringify(entries || []));
  const byDe = new Map();
  cloned.forEach((entry, index) => {
    if (entry?.de) byDe.set(slugify(entry.de), { entry, index });
  });

  for (const [key, value] of Object.entries(flat)) {
    const m = key.match(/^sentences\.de\.([^.]+)\.native$/);
    if (!m) continue;
    const hit = byDe.get(m[1]);
    if (hit) hit.entry.lv = value;
  }
  return cloned;
}

module.exports = {
  flattenG1Sentences,
  applyG1SentencesFlat,
};
