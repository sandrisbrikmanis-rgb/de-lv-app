#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");
const { G2_LEVELS, TARGET_LANGUAGES, CONTENT_LANGUAGES } = require("../content-crowdin-bridge/constants");

const SCHEMA_VERSION = "card-translation-linguistic-audit-v1";
const REPORTS_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-linguistic-audit");

const BILINGUAL_AUDIT_CATALOGS = Object.freeze([
  {
    id: "nn-pt-ro",
    path: "scripts/lib/data/g2-a1-card-translation-bilingual-audit-nn-pt-ro.json",
    languages: ["nn", "pt", "ro"],
  },
  {
    id: "sl-sq-sr-sv",
    path: "scripts/lib/data/g2-a1-card-translation-bilingual-audit-sl-sq-sr-sv.json",
    languages: ["sl", "sq", "sr", "sv"],
  },
]);

/** Flat field suffixes aligned with learner-facing main translation paths. */
const TRANSLATION_FIELD_SUFFIXES = Object.freeze([
  ".native",
  ".study.translation",
  ".study.title",
]);

const SOURCE_TYPES = Object.freeze({
  BILINGUAL_DICTIONARY: "bilingual_dictionary",
  OFFICIAL_TARGET: "official_target",
  OFFICIAL_DE: "official_de",
  AUDIT_PLAN: "audit_plan",
});

/**
 * Must reflect real source access — never AI-invented translation values.
 * Phase 1 dry-run uses inventory/registry/plan statuses only.
 */
const EVIDENCE_STATUS = Object.freeze({
  FIELD_INVENTORIED: "FIELD_INVENTORIED",
  BILINGUAL_CATALOG_BOUND: "BILINGUAL_CATALOG_BOUND",
  SOURCE_REGISTRY_BOUND: "SOURCE_REGISTRY_BOUND",
  ADAPTER_NOT_IMPLEMENTED: "ADAPTER_NOT_IMPLEMENTED",
  SOURCE_NOT_FETCHED: "SOURCE_NOT_FETCHED",
  SOURCE_FETCH_FAILED: "SOURCE_FETCH_FAILED",
  SOURCE_ENTRY_NOT_FOUND: "SOURCE_ENTRY_NOT_FOUND",
  SOURCE_FOUND_AND_READ: "SOURCE_FOUND_AND_READ",
});

const AI_POLICY = Object.freeze({
  role: "AUDIT EXECUTOR / ANALYSIS TOOL",
  mayAnalyzeSources: true,
  mayInventTranslation: false,
  note: "AI must not propose PROPOSED_NEW or substitute target values; evidenceStatus requires adapter/read outcomes.",
});

module.exports = {
  SCHEMA_VERSION,
  REPORTS_DIR,
  G2_LEVELS,
  TARGET_LANGUAGES,
  CONTENT_LANGUAGES,
  BILINGUAL_AUDIT_CATALOGS,
  TRANSLATION_FIELD_SUFFIXES,
  SOURCE_TYPES,
  EVIDENCE_STATUS,
  AI_POLICY,
};
