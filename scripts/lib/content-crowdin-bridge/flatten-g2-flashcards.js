#!/usr/bin/env node
"use strict";

const { resolveCardSlug } = require("./slug");

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function pushString(flat, key, value) {
  if (!isNonEmptyString(value)) return;
  flat[key] = String(value);
}

function pushStringArray(flat, prefix, values) {
  if (!Array.isArray(values)) return;
  values.forEach((item, i) => {
    if (typeof item === "string") {
      pushString(flat, `${prefix}[${i}]`, item);
    } else if (item && typeof item === "object" && !Array.isArray(item)) {
      const text = item.text || item.lv || item.native;
      if (isNonEmptyString(text)) {
        pushString(flat, `${prefix}[${i}]`, text);
      }
    }
  });
}

/**
 * Flatten G2 flashcard dataset to Crowdin keys for one CEFR level.
 * @param {string} level - a1..c2
 * @param {object[]} cards
 * @returns {Record<string,string>}
 */
function flattenG2Flashcards(level, cards) {
  const flat = {};
  if (!Array.isArray(cards)) return flat;

  for (const entry of cards) {
    const slug = resolveCardSlug(entry);
    const base = `${level}.card.${slug}`;

    pushString(flat, `${base}.native`, entry.lv);

    const study = entry.study;
    if (!study || typeof study !== "object") continue;

    pushString(flat, `${base}.study.translation`, study.translation);
    pushString(flat, `${base}.study.title`, study.title);
    pushString(flat, `${base}.study.note`, study.note);
    pushString(flat, `${base}.study.subtitle`, study.subtitle);
    pushString(flat, `${base}.study.lead`, study.lead);
    pushString(flat, `${base}.study.question`, study.question);

    pushStringArray(flat, `${base}.study.explanation`, study.explanation);
    pushStringArray(flat, `${base}.study.tip`, study.tip);
    pushStringArray(flat, `${base}.study.important`, study.important);

    if (Array.isArray(study.examples)) {
      study.examples.forEach((ex, i) => {
        if (ex && isNonEmptyString(ex.lv)) {
          pushString(flat, `${base}.study.examples[${i}].native`, ex.lv);
        }
      });
    }

    if (Array.isArray(study.comparison)) {
      study.comparison.forEach((row, i) => {
        if (!row || typeof row !== "object") return;
        pushString(flat, `${base}.study.comparison[${i}].meaning`, row.meaning);
        pushString(flat, `${base}.study.comparison[${i}].example`, row.example);
      });
    }
  }

  return flat;
}

/**
 * Build card slug → entry map (first wins on collision; report via collisions set).
 */
function buildCardIndex(level, cards) {
  const bySlug = new Map();
  const collisions = [];
  if (!Array.isArray(cards)) return { bySlug, collisions };

  cards.forEach((entry, index) => {
    const slug = resolveCardSlug(entry);
    if (bySlug.has(slug)) {
      collisions.push({ level, slug, de: entry.de, index });
      return;
    }
    bySlug.set(slug, { entry, index });
  });

  return { bySlug, collisions };
}

function applyNativeToEntry(entry, suffix, value) {
  if (suffix === "native") {
    entry.lv = value;
    return true;
  }
  if (!suffix.startsWith("study.")) return false;

  const rest = suffix.slice("study.".length);
  const study = entry.study || (entry.study = {});

  if (rest === "translation") {
    study.translation = value;
    return true;
  }
  if (rest === "title") {
    study.title = value;
    return true;
  }
  if (rest === "note") {
    study.note = value;
    return true;
  }
  if (rest === "subtitle") {
    study.subtitle = value;
    return true;
  }
  if (rest === "lead") {
    study.lead = value;
    return true;
  }
  if (rest === "question") {
    study.question = value;
    return true;
  }

  const explMatch = rest.match(/^explanation\[(\d+)\]$/);
  if (explMatch) {
    const i = Number(explMatch[1]);
    if (!Array.isArray(study.explanation)) study.explanation = [];
    study.explanation[i] = value;
    return true;
  }

  const tipMatch = rest.match(/^tip\[(\d+)\]$/);
  if (tipMatch) {
    const i = Number(tipMatch[1]);
    if (!Array.isArray(study.tip)) study.tip = [];
    study.tip[i] = value;
    return true;
  }

  const impMatch = rest.match(/^important\[(\d+)\]$/);
  if (impMatch) {
    const i = Number(impMatch[1]);
    if (!Array.isArray(study.important)) study.important = [];
    study.important[i] = value;
    return true;
  }

  const exMatch = rest.match(/^examples\[(\d+)\]\.native$/);
  if (exMatch) {
    const i = Number(exMatch[1]);
    if (!Array.isArray(study.examples)) study.examples = [];
    if (!study.examples[i]) study.examples[i] = { de: study.examples[i]?.de || "" };
    study.examples[i].lv = value;
    return true;
  }

  const cmpMeaning = rest.match(/^comparison\[(\d+)\]\.meaning$/);
  if (cmpMeaning) {
    const i = Number(cmpMeaning[1]);
    if (!Array.isArray(study.comparison)) study.comparison = [];
    if (!study.comparison[i]) study.comparison[i] = { word: "" };
    study.comparison[i].meaning = value;
    return true;
  }

  const cmpExample = rest.match(/^comparison\[(\d+)\]\.example$/);
  if (cmpExample) {
    const i = Number(cmpExample[1]);
    if (!Array.isArray(study.comparison)) study.comparison = [];
    if (!study.comparison[i]) study.comparison[i] = { word: "" };
    study.comparison[i].example = value;
    return true;
  }

  return false;
}

/**
 * Apply flat Crowdin keys onto a deep-cloned card array (in-memory only).
 */
function applyG2FlashcardsFlat(level, cards, flat) {
  const cloned = JSON.parse(JSON.stringify(cards));
  const { bySlug } = buildCardIndex(level, cloned);
  const prefix = `${level}.card.`;

  for (const [key, value] of Object.entries(flat)) {
    if (!key.startsWith(prefix)) continue;
    const remainder = key.slice(prefix.length);
    const dot = remainder.indexOf(".");
    if (dot === -1) continue;
    const slug = remainder.slice(0, dot);
    const suffix = remainder.slice(dot + 1);
    const hit = bySlug.get(slug);
    if (!hit) continue;
    applyNativeToEntry(hit.entry, suffix, value);
  }

  return cloned;
}

module.exports = {
  flattenG2Flashcards,
  applyG2FlashcardsFlat,
  buildCardIndex,
};
