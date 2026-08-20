"use strict";

const path = require("path");
const { ROOT } = require("./audit-common");

const DATASET = "et-a2";
const PRODUCTION_PATH = "data/et/a2.js";
const WWW_PATH = "www/data/et/a2.js";
const REGISTRY_DIR = path.join(ROOT, "reports/discovery-registry/et-a2");

const PRE_REPAIR_BLOB = "2719cd20af9e34466db0dc8036c8fb39b509d2d7";
const POST_REPAIR_BLOB = "749b19fa362b32cf4afa439b7f6a52fae816b1b9";
const POST_REPAIR_MAIN_SHA = "5820227e85eddbad63f2362fff9d8a6a3be553ae";
const POST_PR613_MAIN_SHA = "52b9733bb1e350705b7450ab04b8f358bf7cc5e1";
const POST_PR613_BLOB = "827127a7c89046c843c9a94d6d2b6e62754f8e9c";
const SECTIONACCENTS_REPAIR_BLOB = "610f520b676b03ebb6a8403b85f12bc27d9f0e00";

const AUDIT_RUNS = [
  {
    id: "pr610-first-discovery",
    label: "PR #610 first FULL_DISCOVERY (deterministic, skip-Luna)",
    commit: "317ba5b8",
    pr: 610,
    master: "1.8",
    productionBlob: PRE_REPAIR_BLOB,
  },
  {
    id: "pr612-post-repair-audit",
    label: "PR #612 post-repair FULL_DISCOVERY (Luna 1640/1640)",
    commit: "52b9733b",
    pr: 612,
    master: "1.8",
    productionBlob: POST_PR613_BLOB,
  },
  {
    id: "sectionaccents-micro-repair",
    label: "sectionAccents micro-repair (184→0 collect mismatches)",
    commit: "56e7bc7d",
    pr: null,
    master: "1.8",
    productionBlob: SECTIONACCENTS_REPAIR_BLOB,
  },
];

const OWNER_SOURCES = [
  "reports/et-a2-owner-decisions-accepted.md",
  "reports/et-a2-owner-repair-apply.md",
  "reports/temp/et-a2-owner-apply-map.json",
  "reports/et-a2-owner-decisions-group01-accepted.md",
  "reports/et-a2-owner-decisions-group02-accepted.md",
  "reports/et-a2-owner-decisions-group03-accepted.md",
  "reports/et-a2-owner-decisions-group04-accepted.md",
  "reports/et-a2-owner-decisions-group05-accepted.md",
  "reports/et-a2-owner-decisions-group06-accepted.md",
  "reports/et-a2-owner-decisions-group07-accepted.md",
  "reports/et-a2-owner-decisions-group08-accepted.md",
  "reports/et-a2-owner-decisions-group09-accepted.md",
  "reports/et-a2-owner-decisions-group10-accepted.md",
  "reports/et-a2-owner-decisions-group11-accepted.md",
  "reports/et-a2-owner-decisions-accepted-pr612.md",
  "reports/et-a2-owner-decisions-group01-accepted-pr612.md",
  "reports/et-a2-owner-decisions-group02-accepted-pr612.md",
  "reports/et-a2-owner-decisions-group03-accepted-pr612.md",
  "reports/et-a2-owner-decisions-group04-accepted-pr612.md",
  "reports/et-a2-owner-decisions-group05-accepted-pr612.md",
  "reports/et-a2-owner-decisions-accepted-pr614.md",
  "reports/et-a2-owner-decisions-group01-accepted-pr614.md",
  "reports/et-a2-owner-decisions-group02-accepted-pr614.md",
  "reports/et-a2-owner-decisions-group03-accepted-pr614.md",
  "reports/et-a2-owner-decisions-group04-accepted-pr614.md",
  "reports/et-a2-owner-decisions-group05-accepted-pr614.md",
];

const REGRESSION_EXPECTED = {
  CURRENT_FINDINGS: 0,
  PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE: 0,
  PRE_EXISTING_BUT_PREVIOUSLY_MISSED: 0,
  OWNER_DECISION_CONFIRMED: 0,
  OWNER_DECISION_REOPEN_REQUIRED: 0,
  REPAIR_REGRESSION: 0,
  FALSE_POSITIVE_OR_STYLE_ONLY: 0,
  GENUINELY_NEW_VALIDATED_REAL_FINDING: 0,
  AUDIT_DISCOVERY_NON_REPRODUCIBILITY: "PARTIAL",
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
  PRE_REPAIR_BLOB,
  POST_REPAIR_BLOB,
  POST_REPAIR_MAIN_SHA,
  POST_PR613_MAIN_SHA,
  POST_PR613_BLOB,
  SECTIONACCENTS_REPAIR_BLOB,
};
