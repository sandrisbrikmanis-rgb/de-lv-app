#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");
const { MASTER_VERSION } = require("../content-crowdin-bridge/constants");

const SCOPE_LABEL = "G2/A1 × 31 languages";
const CROWDIN_PROJECT_ID = 923473;
const CROWDIN_FILE_ID = 16;
const CROWDIN_SOURCE_PATH = "/main/crowdin/content/g2/lv-a1.json";
const EXPECTED_LV_SHA256 = "854f174e67cb0965fb24c884c43aa2b557a0d581f88bf0761cd846cac4eaf5e8";
const EXPECTED_KEY_COUNT = 2971;
const EXPECTED_OBJECT_COUNT = 702;
const EXPECTED_LANG_COUNT = 31;
const EXPECTED_VALUE_COUNT = EXPECTED_KEY_COUNT * EXPECTED_LANG_COUNT;

const STAGING_ROOT = path.join(ROOT, "reports", "staging", "g2-a1-phase3-crowdin");
const LUNA_RUNS_ROOT = path.join(ROOT, "reports", "temp", "g2-a1-phase3-luna-runs");
const REPORT_PREFIX = "g2-a1-phase3";

const OWNER_FILES = {
  view: "g2-a1-phase3-owner-view.md",
  decisions: "g2-a1-phase3-owner-decisions.md",
  github: "g2-a1-phase3-owner-review-GITHUB.md",
  proof: "g2-a1-phase3-owner-proof.json",
  csv: "g2-a1-phase3-owner-decisions.csv",
};

const PRIOR_RISK_ARTIFACT =
  "/tmp/cursor/artifacts/phase2-g2-a1-crowdin-ai-post-validation/staging-validation.json";

module.exports = {
  SCOPE_LABEL,
  MASTER_STANDARD_VERSION: MASTER_VERSION,
  CROWDIN_PROJECT_ID,
  CROWDIN_FILE_ID,
  CROWDIN_SOURCE_PATH,
  EXPECTED_LV_SHA256,
  EXPECTED_KEY_COUNT,
  EXPECTED_OBJECT_COUNT,
  EXPECTED_LANG_COUNT,
  EXPECTED_VALUE_COUNT,
  STAGING_ROOT,
  LUNA_RUNS_ROOT,
  REPORT_PREFIX,
  OWNER_FILES,
  PRIOR_RISK_ARTIFACT,
};
