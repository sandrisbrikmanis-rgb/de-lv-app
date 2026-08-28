#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const vm = require("vm");
const path = require("path");
const { ROOT, fileExists, loadArrayDataset } = require("../../audit-common");
const { G2_LEVELS } = require("../../content-crowdin-bridge/constants");

function collectDeFields(entry, prefix = "") {
  const fields = [];
  if (!entry || typeof entry !== "object") return fields;
  if (entry.de !== undefined) fields.push({ path: `${prefix}de`, value: String(entry.de) });
  if (entry.de_article !== undefined) fields.push({ path: `${prefix}de_article`, value: String(entry.de_article) });
  if (entry.de_plural !== undefined) fields.push({ path: `${prefix}de_plural`, value: String(entry.de_plural) });
  if (entry.study) {
    const s = entry.study;
    if (Array.isArray(s.examples)) {
      s.examples.forEach((ex, i) => {
        if (ex?.de) fields.push({ path: `${prefix}study.examples[${i}].de`, value: String(ex.de) });
      });
    }
    if (Array.isArray(s.comparison)) {
      s.comparison.forEach((row, i) => {
        if (row?.word) fields.push({ path: `${prefix}study.comparison[${i}].word`, value: String(row.word) });
      });
    }
  }
  return fields;
}

function dataRel(lang, file) {
  return lang === "lv" ? `data/${file}` : `data/${lang}/${file}`;
}

function collectG2DeCompliance({ lang, level, idPrefix }) {
  const findings = [];
  const lvPath = dataRel("lv", `${level}.js`);
  const langPath = dataRel(lang, `${level}.js`);
  if (lang === "lv" || !fileExists(langPath)) return { findings, stats: { mismatches: 0 } };

  const lvCards = loadArrayDataset(lvPath) || [];
  const langCards = loadArrayDataset(langPath) || [];
  let mismatches = 0;
  let seq = 0;

  const n = Math.min(lvCards.length, langCards.length);
  for (let i = 0; i < n; i++) {
    if (lvCards[i].de !== langCards[i].de) continue;
    const lvFields = collectDeFields(lvCards[i]);
    const langFields = collectDeFields(langCards[i]);
    const langMap = new Map(langFields.map((f) => [f.path, f.value]));
    for (const lf of lvFields) {
      const actual = langMap.get(lf.path);
      if (actual !== undefined && actual !== lf.value) {
        mismatches++;
        if (mismatches <= 10) {
          findings.push({
            auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-DE`,
            group: "g2",
            dataset: level,
            lang,
            cardId: lvCards[i].de,
            fieldPath: lf.path,
            severity: "CRITICAL",
            category: "DE_FIELD_MISMATCH",
            productionFile: langPath,
            current: actual,
            de: lf.value,
            proposed: null,
            message: `DE field must match LV master exactly`,
            source: "deterministic/de-compliance",
          });
        }
      }
    }
  }

  return { findings, stats: { mismatches } };
}

module.exports = { collectG2DeCompliance };
