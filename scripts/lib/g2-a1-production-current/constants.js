#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");
const { TARGET_LANGUAGES } = require("../content-crowdin-bridge/constants");

const AUDIT_LANGUAGES = ["lv", ...TARGET_LANGUAGES];

const MASTER_AUTHORIZED_MIN = "1.18";
const MASTER_SEMANTIC_FLOOR = "1.12";

const EXPECTED_APP_LANGUAGES = 32;
const EXPECTED_CARD_COUNT = 702;
const LEVEL = "a1";

const AUDIT_VERDICTS = Object.freeze([
  "PASS",
  "FINDING",
  "NEEDS_SOURCE_REVIEW",
  "SOURCE_DE_ISSUE",
]);

const FORBIDDEN_AUDIT_VERDICTS = Object.freeze([
  "VALIDATED_REAL_FINDING",
  "OWNER_DECISION_REQUIRED",
  "LABOT",
  "NELABOT",
  "PENDING",
  "FALSE_POSITIVE",
]);

const REPORTS_DIR = path.join(ROOT, "reports", "g2-a1-production-current");
const AUDIT_SOURCE = "production-current";

module.exports = {
  AUDIT_LANGUAGES,
  MASTER_AUTHORIZED_MIN,
  MASTER_SEMANTIC_FLOOR,
  EXPECTED_APP_LANGUAGES,
  EXPECTED_CARD_COUNT,
  LEVEL,
  AUDIT_VERDICTS,
  FORBIDDEN_AUDIT_VERDICTS,
  REPORTS_DIR,
  AUDIT_SOURCE,
};
