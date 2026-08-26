#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("./audit-common");

const MASTER_VERSION = "1.9";
const MASTER_FILE = "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md";

/** @type {Record<string, object>} */
const MODULES = {
  b2: {
    moduleKey: "B2",
    type: "vocab",
    dataset: "fr-de-b2",
    productionPath: "data/fr/b2.js",
    wwwPath: "www/data/fr/b2.js",
    deReferencePath: "data/b2.js",
    globalKey: "B2_WORDS",
    idPrefix: "b2",
    level: "B2",
    totalCards: 2118,
    studyCount: 60,
    batchSize: 50,
    studyBatchSize: 10,
    reportPrefix: "fr-de-b2-full-audit",
    ownerIdPrefix: "FR-DE-B2-OWNER",
    findingIdPrefix: "FR-B2",
    lunaFindingPrefix: "FR-B2-LUNA",
  },
  c1: {
    moduleKey: "C1",
    type: "vocab",
    dataset: "fr-de-c1",
    productionPath: "data/fr/c1.js",
    wwwPath: "www/data/fr/c1.js",
    deReferencePath: "data/c1.js",
    globalKey: "C1_WORDS",
    idPrefix: "c1",
    level: "C1",
    totalCards: 572,
    studyCount: 15,
    batchSize: 50,
    studyBatchSize: 10,
    reportPrefix: "fr-de-c1-full-audit",
    ownerIdPrefix: "FR-DE-C1-OWNER",
    findingIdPrefix: "FR-C1",
    lunaFindingPrefix: "FR-C1-LUNA",
  },
  c2: {
    moduleKey: "C2",
    type: "vocab",
    dataset: "fr-de-c2",
    productionPath: "data/fr/c2.js",
    wwwPath: "www/data/fr/c2.js",
    deReferencePath: "data/c2.js",
    globalKey: "C2_WORDS",
    idPrefix: "c2",
    level: "C2",
    totalCards: 219,
    studyCount: 1,
    batchSize: 50,
    studyBatchSize: 10,
    reportPrefix: "fr-de-c2-full-audit",
    ownerIdPrefix: "FR-DE-C2-OWNER",
    findingIdPrefix: "FR-C2",
    lunaFindingPrefix: "FR-C2-LUNA",
  },
  sentences: {
    moduleKey: "SENTENCES",
    type: "sentences",
    dataset: "fr-de-sentences",
    productionPath: "data/fr/sentences.js",
    wwwPath: "www/data/fr/sentences.js",
    deReferencePath: "data/sentences.js",
    globalKey: "SENTENCE_ENTRIES",
    idPrefix: "sentence",
    level: "Sätze",
    totalCards: 796,
    studyCount: 0,
    batchSize: 50,
    reportPrefix: "fr-de-sentences-full-audit",
    ownerIdPrefix: "FR-DE-SENTENCES-OWNER",
    findingIdPrefix: "FR-SENTENCES",
    lunaFindingPrefix: "FR-SENTENCES-LUNA",
  },
  verbs: {
    moduleKey: "VERBS",
    type: "verbs",
    dataset: "fr-de-verbs",
    productionPath: "data/fr/verbs.js",
    wwwPath: "www/data/fr/verbs.js",
    deReferencePath: "data/verbs.js",
    globalKey: "VERB_ENTRIES",
    idPrefix: "verb",
    level: "Verben",
    totalCards: 189,
    formKeys: ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"],
    totalForms: 189 * 5,
    batchSize: 50,
    reportPrefix: "fr-de-verbs-full-audit",
    ownerIdPrefix: "FR-DE-VERBS-OWNER",
    findingIdPrefix: "FR-VERBS",
    lunaFindingPrefix: "FR-VERBS-LUNA",
  },
};

const ALL_MODULE_KEYS = ["b2", "c1", "c2", "sentences", "verbs"];

function getModuleConfig(moduleKey) {
  const key = String(moduleKey || "").toLowerCase();
  const cfg = MODULES[key];
  if (!cfg) throw new Error(`Unknown module: ${moduleKey}. Valid: ${ALL_MODULE_KEYS.join(", ")}`);
  return {
    ...cfg,
    collectJson: path.join(ROOT, `reports/temp/${cfg.dataset}-audit-data.json`),
    lunaJson: path.join(ROOT, `reports/temp/${cfg.dataset}-luna-raw.json`),
    lunaTempDir: path.join(ROOT, `reports/temp/${cfg.dataset}-luna`),
    progressFile: path.join(ROOT, `scripts/.${cfg.dataset}-luna-progress.json`),
    auditJson: path.join(ROOT, `reports/${cfg.reportPrefix}.json`),
    auditMd: path.join(ROOT, `reports/${cfg.reportPrefix}.md`),
    auditSummary: path.join(ROOT, `reports/${cfg.reportPrefix}-summary.md`),
    ownerView: path.join(ROOT, `reports/${cfg.reportPrefix}-owner-view.md`),
    ownerSource: path.join(ROOT, `reports/${cfg.reportPrefix}-owner-source.json`),
    productionAbs: path.join(ROOT, cfg.productionPath),
    wwwAbs: path.join(ROOT, cfg.wwwPath),
    deReferenceAbs: path.join(ROOT, cfg.deReferencePath),
  };
}

function parseModuleArg(argv = process.argv) {
  const arg = argv.find((a) => a.startsWith("--module="));
  if (!arg) throw new Error("Missing --module=<b2|c1|c2|sentences|verbs>");
  return getModuleConfig(arg.split("=")[1]);
}

module.exports = {
  ROOT,
  MASTER_VERSION,
  MASTER_FILE,
  MODULES,
  ALL_MODULE_KEYS,
  getModuleConfig,
  parseModuleArg,
};
