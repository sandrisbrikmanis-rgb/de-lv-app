"use strict";

const path = require("path");
const { ROOT } = require("./audit-common");

const DATASET = "fr-a1";
const PRODUCTION_PATH = "data/fr/a1.js";
const WWW_PATH = "www/data/fr/a1.js";
const REGISTRY_DIR = path.join(ROOT, "reports/discovery-registry/fr-a1");

/** PR #682 pre-repair full discovery (registry seeded on audit branch). */
const AUDIT_RUNS = [
  {
    id: "pr682-full",
    label: "PR #682 full discovery (pre-repair)",
    commit: "77b654d2",
    pr: 682,
    master: "1.12",
  },
];

const OWNER_SOURCES = [
  "reports/owner-authority/fr-a1-owner-decisions-001-100-filled.md",
  "reports/owner-authority/fr-a1-owner-decisions-101-200-filled.md",
  "reports/owner-authority/fr-a1-owner-decisions-201-300-filled.md",
  "reports/owner-authority/fr-a1-owner-decisions-301-400-filled.md",
  "reports/owner-authority/fr-a1-owner-decisions-401-500-filled.md",
  "reports/owner-authority/fr-a1-owner-decisions-501-600-filled.md",
  "reports/owner-authority/fr-a1-owner-decisions-601-702-filled.md",
];

/** Post-repair closure target after PR #683 OWNER apply. */
const REGRESSION_EXPECTED = {
  CURRENT_FINDINGS: 0,
  PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE: 0,
  PRE_EXISTING_BUT_PREVIOUSLY_MISSED: 0,
  OWNER_DECISION_CONFIRMED: 0,
  OWNER_DECISION_REOPEN_REQUIRED: 0,
  REPAIR_REGRESSION: 0,
  FALSE_POSITIVE_OR_STYLE_ONLY: 0,
  GENUINELY_NEW_VALIDATED_REAL_FINDING: 0,
  AUDIT_DISCOVERY_NON_REPRODUCIBILITY: "YES",
};

const SEMANTIC_DEDUP_CARDS = ["a1-im", "a1-ins", "a1-nehmen", "a1-über"];

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
