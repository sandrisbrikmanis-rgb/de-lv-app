#!/usr/bin/env node
"use strict";

const { CONTENT_LANGUAGES, G2_LEVELS } = require("../content-crowdin-bridge/constants");
const { buildExpectedDiscoveryScopes } = require("./discovery-scope");

const G1_DATASETS = ["sentences", "verbs", "training"];
const G3_DATASETS = ["courseLessons"];

const NOT_APPLICABLE_SCOPE_IDS = new Set(["g1/training/lv", "g1/training/et"]);

const PHASE1_DATASETS_BY_GROUP = {
  g2: [...G2_LEVELS],
  g1: [...G1_DATASETS],
  g3: [...G3_DATASETS],
};

function scopeId(group, dataset, lang) {
  return `${group}/${dataset}/${lang}`;
}

function classifyScope(group, dataset, lang) {
  const id = scopeId(group, dataset, lang);
  if (NOT_APPLICABLE_SCOPE_IDS.has(id)) {
    return {
      scopeId: id,
      group,
      dataset,
      lang,
      applicability: "EXPECTED_NOT_APPLICABLE",
      inventoryApplicable: false,
      multiScanApplicable: false,
      lunaApplicable: false,
      verdict: "NOT_APPLICABLE",
    };
  }
  if (lang === "lv") {
    return {
      scopeId: id,
      group,
      dataset,
      lang,
      applicability: "LV_MASTER",
      inventoryApplicable: false,
      multiScanApplicable: false,
      lunaApplicable: true,
      verdict: "LV_MASTER",
    };
  }
  return {
    scopeId: id,
    group,
    dataset,
    lang,
    applicability: "APPLICABLE",
    inventoryApplicable: true,
    multiScanApplicable: true,
    lunaApplicable: true,
    verdict: "APPLICABLE",
  };
}

function buildPhase1Scopes(langs = CONTENT_LANGUAGES) {
  const raw = buildExpectedDiscoveryScopes(langs, PHASE1_DATASETS_BY_GROUP);
  return raw.map((s) => classifyScope(s.group, s.dataset, s.lang));
}

function getDeterministicScopeOrder(scopes = buildPhase1Scopes()) {
  const groupOrder = { g2: 0, g1: 1, g3: 2 };
  return [...scopes].sort((a, b) => {
    const ga = groupOrder[a.group] ?? 9;
    const gb = groupOrder[b.group] ?? 9;
    if (ga !== gb) return ga - gb;
    if (a.dataset !== b.dataset) return a.dataset.localeCompare(b.dataset);
    return a.lang.localeCompare(b.lang);
  });
}

function summarizeApplicability(scopes = buildPhase1Scopes()) {
  const notApplicable = scopes.filter((s) => s.applicability === "EXPECTED_NOT_APPLICABLE");
  const inventoryApplicable = scopes.filter((s) => s.inventoryApplicable).length;
  const multiScanApplicable = scopes.filter((s) => s.multiScanApplicable).length;
  const lunaApplicable = scopes.filter((s) => s.lunaApplicable).length;
  const byGroup = { g1: 0, g2: 0, g3: 0 };
  for (const s of scopes) byGroup[s.group] = (byGroup[s.group] || 0) + 1;

  return {
    expectedScope: scopes.length,
    uniqueScopeIds: new Set(scopes.map((s) => s.scopeId)).size,
    notApplicable: notApplicable.map((s) => s.scopeId),
    notApplicableCount: notApplicable.length,
    inventoryApplicable,
    multiScanApplicable,
    lunaApplicable,
    byGroup,
  };
}

module.exports = {
  G1_DATASETS,
  G3_DATASETS,
  PHASE1_DATASETS_BY_GROUP,
  NOT_APPLICABLE_SCOPE_IDS,
  scopeId,
  classifyScope,
  buildPhase1Scopes,
  getDeterministicScopeOrder,
  summarizeApplicability,
};
