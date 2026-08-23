"use strict";

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach(push);
      return;
    }
    if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) =>
        push(v[k]),
      );
    }
  };
  if (sectionKey === "explanation") {
    push(study.explanation);
    (study.explanationLines || []).forEach(push);
    return texts;
  }
  if (sectionKey === "examples") {
    const rows = index !== null ? (study.examples?.[index] ? [study.examples[index]] : []) : study.examples || [];
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "comparison") {
    const rows = index !== null ? (study.comparison?.[index] ? [study.comparison[index]] : []) : study.comparison || [];
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    if (field === "left") {
      push(study.tip?.left || study.tip?.text);
      return texts;
    }
    if (field === "right") {
      push(study.tip?.right || study.tip?.example);
      return texts;
    }
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows = index !== null ? (Array.isArray(source) ? [source[index]] : [source]) : source;
    if (Array.isArray(rows)) rows.forEach(push);
    else push(rows);
    return texts;
  }
  return texts;
}

function fold(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
}

function accentTargetInText(text, term, isDeField = false) {
  if (!term || !text) return false;
  const hay = fold(text);
  const needle = fold(term);
  if (hay.includes(needle)) return true;
  if (!isDeField && needle.length >= 3) {
    const words = String(text).split(/[\s.,!?;:„""()«»\-–—]+/).filter(Boolean);
    for (const w of words) {
      if (fold(w).includes(needle) || needle.includes(fold(w))) return true;
    }
  }
  return false;
}

function validateSectionAccents(study, sectionAccents, cardDe = "") {
  const mismatches = [];
  if (!sectionAccents || typeof sectionAccents !== "object") return mismatches;
  const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      const raw = accentMap[color];
      const terms = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
      for (const term of terms) {
        const rawTerm = String(term || "").trim();
        if (!rawTerm) continue;
        const texts = collectSectionTexts(study, sectionKey, index, field);
        const isDeField = field === "de";
        if (!accentTargetInText(texts.join("\n"), rawTerm, isDeField)) {
          mismatches.push({
            path: pathPrefix,
            target: rawTerm,
            section: sectionKey,
            field: field || null,
            cardDe,
          });
        }
      }
    }
    for (const [key, val] of Object.entries(accentMap)) {
      if (ACCENT_COLORS.includes(key)) continue;
      if (typeof val === "string" && val.trim()) {
        const texts = collectSectionTexts(study, sectionKey, index, field);
        if (!accentTargetInText(texts.join("\n"), val, field === "de")) {
          mismatches.push({ path: `${pathPrefix}.${key}`, target: val, section: sectionKey, field, cardDe });
        }
      }
    }
  };
  for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry, index) => {
        if (!entry || typeof entry !== "object") return;
        const hasColors = ACCENT_COLORS.some((c) => entry[c] !== undefined && entry[c] !== null);
        if (hasColors) checkMap(sectionKey, index, null, entry, `sectionAccents.${sectionKey}[${index}]`);
        else for (const f of Object.keys(entry)) {
          checkMap(sectionKey, index, f, entry[f], `sectionAccents.${sectionKey}[${index}].${f}`);
        }
      });
    } else if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => rules[c] !== undefined && rules[c] !== null);
      if (hasColors) checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
      else for (const [f, map] of Object.entries(rules)) {
        checkMap(sectionKey, null, f, map, `sectionAccents.${sectionKey}.${f}`);
      }
    }
  }
  return mismatches;
}

function countSectionAccentIssues(words) {
  let raw = 0;
  const deduped = new Set();
  for (const entry of words) {
    if (!entry.study?.sectionAccents) continue;
    const cardId = entry.study.id || entry.de;
    const mismatches = validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de);
    raw += mismatches.length;
    for (const m of mismatches) {
      deduped.add(`${cardId}|${m.path}`);
    }
  }
  return { raw, deduped: deduped.size, mismatches: raw };
}

function listDedupedTargets(words) {
  const targets = new Map();
  for (const entry of words) {
    if (!entry.study?.sectionAccents) continue;
    const cardId = entry.study.id || entry.de;
    const mismatches = validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de);
    for (const m of mismatches) {
      const key = `${cardId}|${m.path}`;
      if (!targets.has(key)) targets.set(key, { cardId, path: m.path, section: m.section, count: 0 });
      targets.get(key).count++;
    }
  }
  return [...targets.values()];
}

module.exports = {
  ACCENT_COLORS,
  validateSectionAccents,
  countSectionAccentIssues,
  listDedupedTargets,
  collectSectionTexts,
};
