#!/usr/bin/env node
"use strict";

const { loadArrayDataset } = require("../../audit-common");

const LV_REMNANT_PATTERNS = [
  /\b(un|uz|ar|no|ka|kas|kur|bet|vai|jā|nav|es|tu|viņš|viņa|mēs|jūs|viņi)\b/gi,
  /[āčēģīķļņšūž]/i,
];

const EN_REMNANT_PATTERNS = [/\b(the|and|with|from|this|that|what|how)\b/gi];

function countPatternHits(text, patterns) {
  if (!text || typeof text !== "string") return 0;
  let hits = 0;
  for (const re of patterns) {
    const m = text.match(re);
    if (m) hits += m.length;
  }
  return hits;
}

function collectG2ForeignRemnants({ lang, level, idPrefix }) {
  const findings = [];
  if (lang === "lv") return { findings, stats: { hits: 0 } };

  const langPath = `data/${lang}/${level}.js`;
  const cards = loadArrayDataset(langPath) || [];
  let seq = 0;

  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    const text = [c.lv, c.study?.translation].filter(Boolean).join(" ");
    const lvHits = countPatternHits(text, LV_REMNANT_PATTERNS);
    const enHits = countPatternHits(text, EN_REMNANT_PATTERNS);
    if (lvHits >= 3) {
      findings.push({
        auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-LVREM`,
        group: "g2",
        dataset: level,
        lang,
        cardId: c.de || `index-${i}`,
        fieldPath: "lv",
        severity: "MEDIUM",
        category: "LV_REMNANT_CANDIDATE",
        productionFile: langPath,
        current: c.lv,
        de: c.de,
        proposed: null,
        message: `Possible LV remnant patterns (${lvHits} hits) — candidate only`,
        source: "deterministic/remnants",
      });
    }
    if (enHits >= 2 && findings.length < 200) {
      findings.push({
        auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-ENREM`,
        group: "g2",
        dataset: level,
        lang,
        cardId: c.de || `index-${i}`,
        fieldPath: "lv",
        severity: "MEDIUM",
        category: "EN_REMNANT_CANDIDATE",
        productionFile: langPath,
        current: c.lv,
        de: c.de,
        proposed: null,
        message: `Possible EN remnant patterns (${enHits} hits) — candidate only`,
        source: "deterministic/remnants",
      });
    }
  }

  return { findings, stats: { hits: findings.length } };
}

module.exports = { collectG2ForeignRemnants };
