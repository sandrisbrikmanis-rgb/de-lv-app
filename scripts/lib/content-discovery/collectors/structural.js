#!/usr/bin/env node
"use strict";

const { fileExists, loadArrayDataset } = require("../../audit-common");
const { G2_LEVELS } = require("../../content-crowdin-bridge/constants");
const { entryId } = require("../../content-crowdin-bridge/slug");

const SCHEMA_EXCLUDE_KEYS = new Set(["sectionAccents", "accents"]);

function schemaKeys(obj, prefix = "") {
  const keys = [];
  for (const k of Object.keys(obj)) {
    if (SCHEMA_EXCLUDE_KEYS.has(k)) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    keys.push(p);
    const v = obj[k];
    if (v && typeof v === "object" && !Array.isArray(v)) {
      keys.push(...schemaKeys(v, p));
    }
  }
  return keys;
}

function makeFinding({
  auditId,
  group,
  dataset,
  lang,
  cardId,
  fieldPath,
  severity,
  category,
  productionFile,
  current,
  de,
  message,
}) {
  return {
    auditId,
    group,
    dataset,
    lang,
    cardId: cardId || "",
    fieldPath: fieldPath || "",
    severity,
    category,
    productionFile,
    current: current ?? null,
    de: de ?? null,
    proposed: null,
    message,
    source: "deterministic/structural",
  };
}

/**
 * Structural parity vs LV for one G2 level (READ-ONLY).
 */
function collectG2Structural({ lang, level, idPrefix }) {
  const findings = [];
  const lvPath = `data/${level}.js`;
  const langPath = lang === "lv" ? lvPath : `data/${lang}/${level}.js`;
  const productionFile = langPath;

  if (lang !== "lv" && !fileExists(langPath)) {
    findings.push(
      makeFinding({
        auditId: `${idPrefix}-MISSING-FILE`,
        group: "g2",
        dataset: level,
        lang,
        severity: "CRITICAL",
        category: "MISSING_DATASET_FILE",
        productionFile: langPath,
        message: `Dataset file missing: ${langPath}`,
      }),
    );
    return { findings, stats: { cards: 0, structuralIssues: findings.length } };
  }

  const lvWords = loadArrayDataset(lvPath) || [];
  const langWords = lang === "lv" ? lvWords : loadArrayDataset(langPath) || [];

  let seq = 0;
  const nextId = (cat) => `${idPrefix}-${String(++seq).padStart(4, "0")}-${cat}`;

  if (lvWords.length !== langWords.length) {
    findings.push(
      makeFinding({
        auditId: nextId("COUNT"),
        group: "g2",
        dataset: level,
        lang,
        severity: "CRITICAL",
        category: "RECORD_COUNT_MISMATCH",
        productionFile,
        current: `${langWords.length}`,
        de: `${lvWords.length}`,
        message: `Record count LV=${lvWords.length} ${lang.toUpperCase()}=${langWords.length}`,
      }),
    );
  }

  const n = Math.min(lvWords.length, langWords.length);
  let orderMismatches = 0;
  let layoutMismatches = 0;
  let missingFieldRecords = 0;

  for (let i = 0; i < n; i++) {
    const lvC = lvWords[i];
    const langC = langWords[i];
    const cid = entryId(lvC, i);

    if (lvC.de !== langC.de) {
      orderMismatches++;
      if (orderMismatches <= 5) {
        findings.push(
          makeFinding({
            auditId: nextId("ORDER"),
            group: "g2",
            dataset: level,
            lang,
            cardId: cid,
            fieldPath: "de",
            severity: "CRITICAL",
            category: "ORDER_MISMATCH",
            productionFile,
            current: langC.de,
            de: lvC.de,
            message: `Index ${i}: de field order mismatch`,
          }),
        );
      }
      continue;
    }

    const lvKeys = new Set(
      schemaKeys(lvC).filter((k) => k !== "lv" && !k.startsWith("lv.") && !k.endsWith(".lv")),
    );
    const langKeys = new Set(
      schemaKeys(langC).filter((k) => k !== "lv" && !k.startsWith("lv.") && !k.endsWith(".lv")),
    );
    const missing = [...lvKeys].filter((k) => !langKeys.has(k));
    if (missing.length) {
      missingFieldRecords++;
      if (missingFieldRecords <= 5) {
        findings.push(
          makeFinding({
            auditId: nextId("SCHEMA"),
            group: "g2",
            dataset: level,
            lang,
            cardId: cid,
            fieldPath: missing.join(", "),
            severity: "HIGH",
            category: "MISSING_FIELDS",
            productionFile,
            de: lvC.de,
            message: `Missing fields vs LV: ${missing.slice(0, 8).join(", ")}`,
          }),
        );
      }
    }

    const lvLayout = lvC.study?.layout || (lvC.study ? "standardStudy" : null);
    const langLayout = langC.study?.layout || (langC.study ? "standardStudy" : null);
    if (lvLayout !== langLayout) {
      layoutMismatches++;
      if (layoutMismatches <= 5) {
        findings.push(
          makeFinding({
            auditId: nextId("LAYOUT"),
            group: "g2",
            dataset: level,
            lang,
            cardId: cid,
            fieldPath: "study.layout",
            severity: "HIGH",
            category: "STUDY_LAYOUT_MISMATCH",
            productionFile,
            current: String(langLayout),
            de: lvC.de,
            message: `study.layout LV=${lvLayout} ${lang.toUpperCase()}=${langLayout}`,
          }),
        );
      }
    }
  }

  if (orderMismatches > 5) {
    findings.push(
      makeFinding({
        auditId: nextId("ORDER-SUM"),
        group: "g2",
        dataset: level,
        lang,
        severity: "CRITICAL",
        category: "ORDER_MISMATCH",
        productionFile,
        message: `${orderMismatches} total de-order mismatches (first 5 listed)`,
      }),
    );
  }

  return {
    findings,
    stats: {
      cards: langWords.length,
      lvCards: lvWords.length,
      structuralIssues: findings.length,
      orderMismatches,
      layoutMismatches,
      missingFieldRecords,
    },
  };
}

module.exports = {
  collectG2Structural,
};
