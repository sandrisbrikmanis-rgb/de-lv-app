"use strict";

const path = require("path");
const { ROOT } = require("./audit-common");

const DATASET = "et-a1";
const PRODUCTION_PATH = "data/et/a1.js";
const WWW_PATH = "www/data/et/a1.js";
const REGISTRY_DIR = path.join(ROOT, "reports/discovery-registry/et-a1");

const AUDIT_RUNS = [
  { id: "pr604-post603", label: "PR #604 post-#603", commit: "5637d944", pr: 604, master: "1.7" },
  { id: "pr603-post602", label: "PR #603 post-#602", commit: "820a9f15", pr: 603, master: "1.7" },
  { id: "v17-repair-audit", label: "v1.7 repair+audit", commit: "56ef4448", pr: null, master: "1.7" },
  { id: "v16-post599", label: "v1.6 post-#599", commit: "d7e1262f", pr: 599, master: "1.6" },
  { id: "v16-main", label: "v1.6 on main", commit: "44ed6804", pr: null, master: "1.6" },
  { id: "v15-post-closure", label: "v1.5 post-closure", commit: "388b72bf", pr: null, master: "1.5" },
  { id: "v15-full", label: "v1.5 full", commit: "cb13a81e", pr: null, master: "1.5" },
];

const OWNER_SOURCES = [
  "reports/et-a1-owner-decisions-accepted.md",
  "reports/et-a1-owner-decisions-accepted-v17.md",
  "reports/et-a1-owner-decisions-accepted-v17-full.md",
  "reports/et-a1-owner-decisions-accepted-v17-apply.md",
  "reports/et-a1-owner-decisions-accepted-pr603-full.md",
  "reports/et-a1-owner-decisions-accepted-pr603-apply.md",
  "reports/et-a1-owner-decisions-accepted-pr603.md",
  "reports/et-a1-owner-source-resolution-bitte-tip.md",
];

const REGRESSION_EXPECTED = {
  CURRENT_FINDINGS: 23,
  PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE: 10,
  PRE_EXISTING_BUT_PREVIOUSLY_MISSED: 13,
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
