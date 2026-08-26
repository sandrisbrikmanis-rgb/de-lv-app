#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { getAt } = require("./da-a1-owner-path");
const { resolveEntry, readCurrent, loadWords } = require("./es-a1-a2-final-regression-retention");

const MICRO_OWNER_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression-owner-decisions.json");

const NELABOT_GUARD = [
  {
    id: "ES-A1A2-MICRO-0226",
    cardId: "a1-morgen",
    field: "study.examples[4].lv",
    pairedDe: "Guten Morgen!",
    current: "¡Buen día!",
    forbiddenNew: ["¡Hasta mañana!"],
  },
  {
    id: "ES-A1A2-MICRO-0227",
    cardId: "a1-morgen-study",
    field: "study.examples[4].lv",
    pairedDe: "Guten Morgen!",
    current: "¡Buen día!",
    forbiddenNew: ["Es por la mañana."],
  },
  {
    id: "ES-A1A2-MICRO-0240",
    cardId: "a2-wert",
    field: "study.examples[4].lv",
    pairedDe: "Das Auto ist teuer.",
    current: "El auto es caro.",
    forbiddenNew: ["El auto vale mucho."],
  },
];

function normalizeField(field) {
  if (field === "esText" || field === "esMain") return "lv";
  return field;
}

function buildTargetContext(entry, field) {
  const ctx = {};
  const exMatch = field.match(/^study\.examples\[(\d+)\]\.lv$/);
  if (exMatch) {
    const idx = parseInt(exMatch[1], 10);
    const ex = entry.study?.examples?.[idx];
    ctx.pairedDe = ex?.de || null;
    ctx.exampleIndex = idx;
  }

  const cmpMatch = field.match(/^study\.comparison\[(\d+)\]\.(meaning|example)$/);
  if (cmpMatch) {
    const idx = parseInt(cmpMatch[1], 10);
    const cmp = entry.study?.comparison?.[idx];
    ctx.comparison = cmp
      ? { word: cmp.word, meaning: cmp.meaning, example: cmp.example }
      : null;
    ctx.comparisonIndex = idx;
  }

  if (field.includes("sectionAccents")) {
    ctx.sectionAccents = entry.study?.sectionAccents || null;
  }

  if (field === "study.tip.text" || field.startsWith("study.tip")) {
    ctx.studyTip = entry.study?.tip || null;
  }

  if (field.startsWith("study.important")) {
    ctx.studyImportant = entry.study?.important || null;
  }

  if (entry.study?.translation) ctx.studyTranslation = entry.study.translation;
  if (entry.study?.explanation) ctx.studyExplanation = entry.study.explanation?.slice?.(0, 2) || null;

  return ctx;
}

function buildNarrowScope(ownerJsonPath = MICRO_OWNER_JSON) {
  const decisions = JSON.parse(fs.readFileSync(ownerJsonPath, "utf8"));
  const wordsByLevel = {
    a1: loadWords("data/es/a1.js", "A1_WORDS"),
    a2: loadWords("data/es/a2.js", "A2_WORDS"),
  };

  const targets = [];
  const scopeFields = new Set();
  let missing = 0;
  let mismatch = 0;

  for (const item of decisions.items.filter((i) => i.status === "LABOT")) {
    const field = normalizeField(item.field);
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) {
      missing += 1;
      continue;
    }
    const actual = readCurrent(entry, field);
    if (String(actual) !== String(item.new)) mismatch += 1;

    const scopeKey = `${item.level}|${item.cardId}|${field}`;
    scopeFields.add(scopeKey);

    targets.push({
      targetId: item.id,
      sourceFindingIds: item.sourceFindingIds || [],
      level: item.level,
      cardId: item.cardId,
      de: item.de || entry.de || "",
      field,
      ownerNew: item.new,
      ownerCurrent: item.current,
      productionValue: actual,
      productionMatchesOwnerNew: String(actual) === String(item.new),
      category: item.category,
      context: buildTargetContext(entry, field),
      auditQuestion:
        "Is ownerNew correct, complete Spanish for the paired German source, with no direct regression introduced by this OWNER repair?",
    });
  }

  return {
    requestedTargets: 237,
    builtTargets: targets.length,
    scopeFields: [...scopeFields],
    missing,
    mismatch,
    targets,
    nelabotGuard: NELABOT_GUARD,
    decisions,
    wordsByLevel,
  };
}

function isFieldInScope(cardId, field, scopeFields) {
  const normalized = normalizeField(field);
  for (const key of scopeFields) {
    const [, cid, f] = key.split("|");
    if (cid === cardId && f === normalized) return true;
  }
  if (normalized.includes("sectionAccents")) {
    for (const key of scopeFields) {
      const [, cid, f] = key.split("|");
      if (cid === cardId && f.includes("sectionAccents")) return true;
    }
  }
  return false;
}

module.exports = {
  MICRO_OWNER_JSON,
  NELABOT_GUARD,
  buildNarrowScope,
  isFieldInScope,
  normalizeField,
};
