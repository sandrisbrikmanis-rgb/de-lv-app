#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("./audit-common");

const DATASET = "es-b1";
const PRODUCTION_PATH = "data/es/b1.js";
const WWW_PATH = "www/data/es/b1.js";
const LV_REFERENCE_PATH = "data/b1.js";
const REGISTRY_DIR = path.join(ROOT, "reports/discovery-registry/es-b1");
const MASTER_VERSION = "1.9";
const MASTER_FILE = "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md";
const TOTAL_CARDS = 3367;
const STUDY_COUNT = 324;

/** First FULL_DISCOVERY for ES-DE B1 — no prior audit runs in registry. */
const AUDIT_RUNS = [];
const OWNER_SOURCES = [];

module.exports = {
  DATASET,
  PRODUCTION_PATH,
  WWW_PATH,
  LV_REFERENCE_PATH,
  REGISTRY_DIR,
  MASTER_VERSION,
  MASTER_FILE,
  TOTAL_CARDS,
  STUDY_COUNT,
  AUDIT_RUNS,
  OWNER_SOURCES,
};
