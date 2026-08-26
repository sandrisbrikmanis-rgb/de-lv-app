#!/usr/bin/env node
"use strict";

const { getAt } = require("./da-a1-owner-path");
const { loadArray, entryId } = require("./es-b1-audit-helpers");
const { PRODUCTION_PATH, LV_REFERENCE_PATH } = require("./es-b1-discovery-config");
const path = require("path");
const { ROOT } = require("./audit-common");

function resolveCard(words, cardId) {
  let idx = words.findIndex((e, i) => entryId(e, i) === cardId || e.study?.id === cardId);
  if (idx >= 0) return { entry: words[idx], index: idx, cardId: words[idx].study?.id || entryId(words[idx], idx) };
  const deGuess = String(cardId)
    .replace(/^b1-/, "")
    .replace(/-study.*$/i, "")
    .replace(/-\d+$/, "");
  idx = words.findIndex((e) => e.de === deGuess || e.de?.toLowerCase() === deGuess.toLowerCase());
  if (idx >= 0) return { entry: words[idx], index: idx, cardId: words[idx].study?.id || entryId(words[idx], idx) };
  return { entry: null, index: -1, cardId };
}

function normalizeFieldPath(field) {
  if (!field) return "lv";
  return String(field).replace(/^entry\[\d+\]\./, "");
}

function sectionFromField(field) {
  const norm = normalizeFieldPath(field);
  if (norm.startsWith("study.sectionAccents.")) {
    const m = norm.match(/^study\.sectionAccents\.([^.[\]]+)/);
    return m ? m[1] : null;
  }
  if (norm.startsWith("study.")) {
    const m = norm.match(/^study\.([^.[\]]+)/);
    return m ? m[1] : "study";
  }
  return "lv";
}

function visibleTextForSection(entry, section) {
  if (!entry || !section) return entry?.lv || "";
  if (section === "lv") return entry.lv || "";
  const study = entry.study;
  if (!study) return entry.lv || "";
  const val = getAt(study, section);
  if (typeof val === "string") return val;
  if (Array.isArray(val)) {
    return val
      .map((item) => {
        if (typeof item === "string") return item;
        if (item && typeof item === "object") {
          return [item.lv, item.meaning, item.example, item.text, item.translation].filter(Boolean).join(" ");
        }
        return "";
      })
      .join(" ");
  }
  if (val && typeof val === "object") return JSON.stringify(val);
  return "";
}

function buildOwnerContext(owner, esWords, lvWords) {
  const { entry, cardId } = resolveCard(esWords, owner.cardId);
  const lvEntry = lvWords?.[resolveCard(esWords, owner.cardId).index] || null;
  const field = normalizeFieldPath(owner.field);
  const section = sectionFromField(owner.field);
  const visibleEsText = visibleTextForSection(entry, section);
  const accentFragmentStale =
    owner.category === "SECTION_ACCENT" &&
    field.includes("sectionAccents") &&
    typeof owner.current === "string" &&
    visibleEsText &&
    !visibleEsText.includes(owner.current);

  return {
    id: owner.id,
    findingIds: owner.findingIds,
    level: owner.level,
    cardId: owner.cardId || cardId,
    de: entry?.de || owner.pairedGermanText,
    pairedGermanText: owner.pairedGermanText || entry?.de,
    field,
    current: owner.current,
    category: owner.category,
    severity: owner.severity,
    auditReason: owner.reason,
    auditProposedNew: owner.proposedNew,
    auditValidationStatus: owner.validationStatus,
    mainLv: entry?.lv || null,
    studyTranslation: entry?.study?.translation || null,
    lvReferenceMain: lvEntry?.lv || null,
    visibleEsText,
    section,
    accentFragmentStale,
    hasStudy: Boolean(entry?.study),
    studyLayout: entry?.study?.layout || null,
  };
}

function loadProductionCards() {
  const esWords = loadArray(path.join(ROOT, PRODUCTION_PATH));
  let lvWords = [];
  try {
    lvWords = loadArray(path.join(ROOT, LV_REFERENCE_PATH));
  } catch {
    lvWords = [];
  }
  return { esWords, lvWords };
}

module.exports = {
  resolveCard,
  normalizeFieldPath,
  sectionFromField,
  visibleTextForSection,
  buildOwnerContext,
  loadProductionCards,
};
