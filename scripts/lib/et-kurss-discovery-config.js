"use strict";

const path = require("path");
const { ROOT } = require("./audit-common");

const DATASET = "et-kurss";
const PRODUCTION_PATH = "data/et/courseLessons.js";
const WWW_PATH = "www/data/et/courseLessons.js";
const REGISTRY_DIR = path.join(ROOT, "reports/discovery-registry/et-kurss");

/** First ET–DE Kurss FULL_DISCOVERY — no prior ET Kurss audit runs on origin/main. */
const AUDIT_RUNS = [];

const OWNER_SOURCES = [];

const PRODUCTION_FILES = [
  PRODUCTION_PATH,
  WWW_PATH,
  "languages/et/ui.js",
  "www/languages/et/ui.js",
];

module.exports = {
  DATASET,
  PRODUCTION_PATH,
  WWW_PATH,
  REGISTRY_DIR,
  AUDIT_RUNS,
  OWNER_SOURCES,
  PRODUCTION_FILES,
};
