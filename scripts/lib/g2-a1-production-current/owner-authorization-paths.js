#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");

const TEMPLATE_REL = "reports/g2-a1-production-current/OWNER_AUTHORIZATION_PACKAGE.template.json";
const RUNTIME_REL = "reports/temp/g2-a1-production-current/OWNER_AUTHORIZATION_PACKAGE.runtime.json";
/** @deprecated tracked stale artifact — must not exist in repo */
const STALE_TRACKED_REL = "reports/g2-a1-production-current/OWNER_AUTHORIZATION_PACKAGE.json";

const TEMPLATE_ABS = path.join(ROOT, TEMPLATE_REL);
const RUNTIME_ABS = path.join(ROOT, RUNTIME_REL);
const STALE_TRACKED_ABS = path.join(ROOT, STALE_TRACKED_REL);

module.exports = {
  TEMPLATE_REL,
  RUNTIME_REL,
  STALE_TRACKED_REL,
  TEMPLATE_ABS,
  RUNTIME_ABS,
  STALE_TRACKED_ABS,
};
