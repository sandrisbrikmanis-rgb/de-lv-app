#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const {
  exportG2LevelFlat,
  validateImportGuardsAgainstSource,
  parseCrowdinJson,
} = require("../content-crowdin-bridge");
const { CROWDIN_TARGET_LOCALE_IDS, crowdinLocaleToRepo } = require("../content-crowdin-bridge/locale-map");
const { MULTI_TRANSLATION_SEP } = require("../content-crowdin-bridge/import-staging");
const { STAGING_ROOT, PRIOR_RISK_ARTIFACT } = require("./constants");
const { loadCrowdinFlat } = require("./staging-objects");

const MOJIBAKE_PATTERNS = [
  { name: "mangled-symbol", regex: /Ô[^\x00-\x7F]{1,3}/gu },
  { name: "mangled-diacritic", regex: /[─┼][^\x00-\x7F]/gu },
  { name: "mangled-dash-quote", regex: /â€[^\x00-\x7F]/gu },
  { name: "mangled-umlaut", regex: /Ã[^\x00-\x7F]/gu },
];

function scanMojibake(value) {
  const hits = [];
  for (const { name, regex } of MOJIBAKE_PATTERNS) {
    if (regex.test(value)) {
      hits.push(name);
      regex.lastIndex = 0;
    }
  }
  return hits;
}

function loadPriorRiskCandidates() {
  if (!fs.existsSync(PRIOR_RISK_ARTIFACT)) {
    return { loaded: false, risks: [], lvIdenticalTotal: 0, riskCount: 0 };
  }
  const data = JSON.parse(fs.readFileSync(PRIOR_RISK_ARTIFACT, "utf8"));
  const risks = [];
  let lvIdenticalTotal = 0;
  for (const [crowdinLocaleId, row] of Object.entries(data.perLang || {})) {
    const repoLang = row.repoLang || crowdinLocaleToRepo(crowdinLocaleId);
    lvIdenticalTotal += row.lvIdenticalCount || 0;
    for (const risk of row.risks || []) {
      risks.push({
        ...risk,
        crowdinLocaleId,
        repoLang,
        candidateType: "PRIOR_RISK_HEURISTIC",
        autoError: false,
      });
    }
  }
  return {
    loaded: true,
    risks,
    lvIdenticalTotal,
    riskCount: data.riskCount || risks.length,
    structuralIssueCount: data.structuralIssueCount || 0,
  };
}

function collectDeterministicForLang(lang, stagingRoot = STAGING_ROOT) {
  const findings = [];
  const candidates = [];
  const idPrefix = `G2A1P3-${lang.toUpperCase()}`;
  let seq = 0;

  const lvFlat = exportG2LevelFlat("lv", "a1");
  const flat = loadCrowdinFlat(lang, stagingRoot);

  const guardErrors = validateImportGuardsAgainstSource(lvFlat, flat);
  for (const err of guardErrors) {
    const keyMatch = err.match(/key=([^:]+)/);
    const key = keyMatch ? keyMatch[1] : "unknown";
    findings.push({
      auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}`,
      scopeId: `g2/a1/${lang}`,
      group: "g2",
      dataset: "a1",
      lang,
      cardId: key.split(".")[2] || key,
      fieldPath: key,
      severity: err.includes("HTML") ? "HIGH" : "CRITICAL",
      category: err.includes("HTML") ? "HTML_STRUCTURE" : "PLACEHOLDER_MISMATCH",
      current: flat[key] || "",
      source: "deterministic/staging-guards",
      classificationStatus: "VALIDATED_REAL_FINDING",
      message: err,
    });
  }

  for (const [key, value] of Object.entries(flat)) {
    if (typeof value !== "string") continue;
    if (value.includes(MULTI_TRANSLATION_SEP)) {
      findings.push({
        auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}`,
        scopeId: `g2/a1/${lang}`,
        group: "g2",
        dataset: "a1",
        lang,
        cardId: key.split(".")[2] || key,
        fieldPath: key,
        severity: "MEDIUM",
        category: "MULTI_TRANSLATION",
        current: value,
        source: "deterministic/multi-translation",
        classificationStatus: "OWNER_DECISION_REQUIRED",
        message: "Multiple translation candidates separated by •",
      });
    }
    const moji = scanMojibake(value);
    if (moji.length) {
      findings.push({
        auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}`,
        scopeId: `g2/a1/${lang}`,
        group: "g2",
        dataset: "a1",
        lang,
        cardId: key.split(".")[2] || key,
        fieldPath: key,
        severity: "HIGH",
        category: "MOJIBAKE",
        current: value,
        source: "deterministic/mojibake",
        classificationStatus: "VALIDATED_REAL_FINDING",
        message: `Mojibake patterns: ${moji.join(", ")}`,
      });
    }
    if (value === lvFlat[key]) {
      candidates.push({
        lang,
        key,
        value,
        candidateType: "LV_IDENTICAL",
        autoError: false,
      });
    }
  }

  return { findings, candidates, stats: { findings: findings.length, lvIdentical: candidates.length } };
}

function collectAllDeterministic(stagingRoot = STAGING_ROOT, langs = null) {
  const allFindings = [];
  const allCandidates = [];
  const perLang = {};
  const targetLocales = langs
    ? CROWDIN_TARGET_LOCALE_IDS.filter((id) => langs.includes(crowdinLocaleToRepo(id)))
    : CROWDIN_TARGET_LOCALE_IDS;
  for (const crowdinLocaleId of targetLocales) {
    const lang = crowdinLocaleToRepo(crowdinLocaleId);
    const result = collectDeterministicForLang(lang, stagingRoot);
    allFindings.push(...result.findings);
    allCandidates.push(...result.candidates);
    perLang[lang] = result.stats;
  }
  const prior = loadPriorRiskCandidates();
  return {
    findings: allFindings,
    candidates: allCandidates,
    priorRiskCandidates: prior,
    perLang,
    stats: {
      deterministicFindings: allFindings.length,
      lvIdenticalCandidates: allCandidates.length,
      priorRiskCount: prior.riskCount,
      priorLvIdenticalTotal: prior.lvIdenticalTotal,
    },
  };
}

module.exports = {
  collectDeterministicForLang,
  collectAllDeterministic,
  loadPriorRiskCandidates,
};
