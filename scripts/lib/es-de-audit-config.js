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
    dataset: "es-de-b2",
    productionPath: "data/es/b2.js",
    wwwPath: "www/data/es/b2.js",
    deReferencePath: "data/b2.js",
    globalKey: "B2_WORDS",
    idPrefix: "b2",
    level: "B2",
    totalCards: 2118,
    studyCount: 60,
    batchSize: 50,
    studyBatchSize: 10,
    reportPrefix: "es-de-b2-full-audit",
    ownerIdPrefix: "ES-DE-B2-OWNER",
    findingIdPrefix: "ES-B2",
    lunaFindingPrefix: "ES-B2-LUNA",
  },
  c1: {
    moduleKey: "C1",
    type: "vocab",
    dataset: "es-de-c1",
    productionPath: "data/es/c1.js",
    wwwPath: "www/data/es/c1.js",
    deReferencePath: "data/c1.js",
    globalKey: "C1_WORDS",
    idPrefix: "c1",
    level: "C1",
    totalCards: 572,
    studyCount: 15,
    batchSize: 50,
    studyBatchSize: 10,
    reportPrefix: "es-de-c1-full-audit",
    ownerIdPrefix: "ES-DE-C1-OWNER",
    findingIdPrefix: "ES-C1",
    lunaFindingPrefix: "ES-C1-LUNA",
  },
  c2: {
    moduleKey: "C2",
    type: "vocab",
    dataset: "es-de-c2",
    productionPath: "data/es/c2.js",
    wwwPath: "www/data/es/c2.js",
    deReferencePath: "data/c2.js",
    globalKey: "C2_WORDS",
    idPrefix: "c2",
    level: "C2",
    totalCards: 219,
    studyCount: 1,
    batchSize: 50,
    studyBatchSize: 10,
    reportPrefix: "es-de-c2-full-audit",
    ownerIdPrefix: "ES-DE-C2-OWNER",
    findingIdPrefix: "ES-C2",
    lunaFindingPrefix: "ES-C2-LUNA",
  },
  sentences: {
    moduleKey: "SENTENCES",
    type: "sentences",
    dataset: "es-de-sentences",
    productionPath: "data/es/sentences.js",
    wwwPath: "www/data/es/sentences.js",
    deReferencePath: "data/sentences.js",
    globalKey: "SENTENCE_ENTRIES",
    idPrefix: "sentence",
    level: "Sätze",
    totalCards: 796,
    studyCount: 0,
    batchSize: 50,
    reportPrefix: "es-de-sentences-full-audit",
    ownerIdPrefix: "ES-DE-SENTENCES-OWNER",
    findingIdPrefix: "ES-SENTENCES",
    lunaFindingPrefix: "ES-SENTENCES-LUNA",
  },
  verbs: {
    moduleKey: "VERBS",
    type: "verbs",
    dataset: "es-de-verbs",
    productionPath: "data/es/verbs.js",
    wwwPath: "www/data/es/verbs.js",
    deReferencePath: "data/verbs.js",
    globalKey: "VERB_ENTRIES",
    idPrefix: "verb",
    level: "Verben",
    totalCards: 189,
    formKeys: ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"],
    totalForms: 189 * 5,
    batchSize: 50,
    reportPrefix: "es-de-verbs-full-audit",
    ownerIdPrefix: "ES-DE-VERBS-OWNER",
    findingIdPrefix: "ES-VERBS",
    lunaFindingPrefix: "ES-VERBS-LUNA",
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
