#!/usr/bin/env node
"use strict";

const { slugify } = require("./slug");

const VERB_FORMS = [
  "infinitiv",
  "praesens",
  "imperfektIndikativ",
  "imperfektKonjunktiv",
  "partizipVergangenheit",
];

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function pushString(flat, key, value) {
  if (!isNonEmptyString(value)) return;
  flat[key] = String(value);
}

function flattenG1Verbs(entries) {
  const flat = {};
  if (!Array.isArray(entries)) return flat;

  for (const entry of entries) {
    const inf = entry?.infinitiv?.de;
    if (!isNonEmptyString(inf)) continue;
    const slug = slugify(inf);
    for (const form of VERB_FORMS) {
      const slot = entry[form];
      if (slot?.lv) {
        pushString(flat, `verbs.${slug}.${form}.native`, slot.lv);
      }
    }
  }
  return flat;
}

function applyG1VerbsFlat(entries, flat) {
  const cloned = JSON.parse(JSON.stringify(entries || []));
  const bySlug = new Map();
  for (const entry of cloned) {
    const inf = entry?.infinitiv?.de;
    if (!inf) continue;
    bySlug.set(slugify(inf), entry);
  }

  for (const [key, value] of Object.entries(flat)) {
    const m = key.match(/^verbs\.([^.]+)\.([^.]+)\.native$/);
    if (!m) continue;
    const entry = bySlug.get(m[1]);
    const form = m[2];
    if (entry && entry[form]) entry[form].lv = value;
  }
  return cloned;
}

module.exports = {
  VERB_FORMS,
  flattenG1Verbs,
  applyG1VerbsFlat,
};
