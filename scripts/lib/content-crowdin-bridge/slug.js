#!/usr/bin/env node
"use strict";

const UMLAUT_MAP = {
  ä: "ae",
  ö: "oe",
  ü: "ue",
  Ä: "Ae",
  Ö: "Oe",
  Ü: "Ue",
  ß: "ss",
};

/**
 * Stable ASCII slug for Crowdin keys (DE headword or study.id).
 */
function slugify(value) {
  let s = String(value || "").trim();
  if (!s) return "empty";
  for (const [from, to] of Object.entries(UMLAUT_MAP)) {
    s = s.split(from).join(to);
  }
  s = s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
  return s || "empty";
}

/**
 * Card identity for G2 keys: study.id preferred, else slugify(de).
 */
function resolveCardSlug(entry) {
  if (!entry || typeof entry !== "object") return "empty";
  const studyId = entry.study && entry.study.id;
  if (studyId && String(studyId).trim()) {
    return slugify(String(studyId).trim());
  }
  return slugify(entry.de);
}

function entryId(entry, index) {
  return entry.de || entry.study?.id || `index-${index}`;
}

module.exports = {
  slugify,
  resolveCardSlug,
  entryId,
};
