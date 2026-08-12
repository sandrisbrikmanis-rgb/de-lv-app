const { loadArray, entryId } = require("./cs-audit-helpers");

function findCardIndex(cardId, dataset = "a1") {
  const cfg = { a1: "A1_WORDS" };
  const cs = loadArray("data/cs/a1.js", cfg[dataset]);
  for (let i = 0; i < cs.length; i++) {
    if (entryId(cs[i], i, dataset) === cardId) return i;
  }
  return -1;
}

function getByPath(obj, fieldPath) {
  if (!fieldPath || fieldPath === "csText" || fieldPath === "lv") {
    return obj?.lv ?? null;
  }
  let path = fieldPath;
  const entryMatch = path.match(/^entry\[(\d+)\]\.(.+)$/);
  if (entryMatch) path = entryMatch[2];
  if (path.startsWith("structure")) return null;

  const parts = [];
  path.replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });

  let cur = obj;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur == null ? null : (typeof cur === "object" ? JSON.stringify(cur) : String(cur));
}

function buildProductionSnapshot(cardId, field, indexHint) {
  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  let index = indexHint;
  if (index == null || index < 0) index = findCardIndex(cardId);
  if (index < 0 || index >= cs.length) {
    return { cardId, index: -1, error: "card not found" };
  }
  const csEntry = cs[index];
  const lvEntry = lv[index];
  const resolvedField = field === "csText" ? "lv" : field;
  return {
    cardId,
    index,
    field: resolvedField,
    de: csEntry.de,
    de_article: csEntry.de_article,
    de_plural: csEntry.de_plural,
    currentCs: getByPath(csEntry, field),
    lvSource: getByPath(lvEntry, field?.replace(/^entry\[\d+\]\./, "") || "lv"),
    csEntry: {
      lv: csEntry.lv,
      study: csEntry.study ? {
        translation: csEntry.study.translation,
        explanation: csEntry.study.explanation,
        examples: csEntry.study.examples,
        comparison: csEntry.study.comparison,
        important: csEntry.study.important,
        info: csEntry.study.info,
        tip: csEntry.study.tip,
      } : null,
    },
    lvEntry: {
      lv: lvEntry.lv,
      study: lvEntry.study ? {
        translation: lvEntry.study.translation,
        explanation: lvEntry.study.explanation,
        examples: lvEntry.study.examples,
      } : null,
    },
  };
}

module.exports = { findCardIndex, getByPath, buildProductionSnapshot };
