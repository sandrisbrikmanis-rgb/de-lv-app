"use strict";

const path = require("path");
const { ROOT } = require("./audit-common");

const DATASET = "et-a2";
const PRODUCTION_PATH = "data/et/a2.js";
const WWW_PATH = "www/data/et/a2.js";
const REGISTRY_DIR = path.join(ROOT, "reports/discovery-registry/et-a2");

/** First FULL_DISCOVERY for ET-DE A2 — no prior audit runs in registry. */
const AUDIT_RUNS = [];

const OWNER_SOURCES = [];

const REGRESSION_EXPECTED = {
  CURRENT_FINDINGS: 0,
  PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE: 0,
  PRE_EXISTING_BUT_PREVIOUSLY_MISSED: 0,
  OWNER_DECISION_CONFIRMED: 0,
  OWNER_DECISION_REOPEN_REQUIRED: 0,
  REPAIR_REGRESSION: 0,
  FALSE_POSITIVE_OR_STYLE_ONLY: 0,
  GENUINELY_NEW_VALIDATED_REAL_FINDING: 0,
  AUDIT_DISCOVERY_NON_REPRODUCIBILITY: "N/A",
};

const SEMANTIC_DEDUP_CARDS = [];

module.exports = {
  DATASET,
  PRODUCTION_PATH,
  WWW_PATH,
  REGISTRY_DIR,
  AUDIT_RUNS,
  OWNER_SOURCES,
  REGRESSION_EXPECTED,
  SEMANTIC_DEDUP_CARDS,
};
