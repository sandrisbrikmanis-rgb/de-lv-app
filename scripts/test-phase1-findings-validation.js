#!/usr/bin/env node
"use strict";

const {
  validateFindings,
  normalizeFinding,
} = require("./lib/content-discovery/phase1-findings-validation");
const { deduplicateFindings } = require("./lib/content-discovery/phase1-findings-dedup");
const { applySemanticRegistryDedup } = require("./lib/content-discovery/phase1-semantic-dedup");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

const validFinding = {
  auditId: "TEST-0001",
  scopeId: "g2/a1/et",
  group: "g2",
  dataset: "a1",
  lang: "et",
  cardId: "sprechen",
  fieldPath: "lv",
  severity: "HIGH",
  category: "MULTIPLE_TRANSLATIONS_DETECTED",
  classificationStatus: "NEEDS_REVIEW",
  current: "a • b",
  source: "deterministic/multi-translation-scan",
};

const unclassified = { ...validFinding, auditId: "TEST-0002", classificationStatus: "UNCLASSIFIED" };

const resultValid = validateFindings([validFinding]);
assert(resultValid.pass, "valid finding should pass");
assert(resultValid.schemaErrorCount === 0, "no schema errors");

const resultBad = validateFindings([unclassified]);
assert(!resultBad.pass, "UNCLASSIFIED should fail");
assert(resultBad.unclassifiedCount === 1, "unclassified count");

const dedup = deduplicateFindings([
  validFinding,
  { ...validFinding, auditId: "TEST-0003", source: "gpt-5.6-luna", classificationStatus: "VALIDATED_REAL_FINDING" },
]);
assert(dedup.pass, "deterministic+luna dedup should pass");
assert(dedup.dedupedCount === 1, "one canonical finding");

const conflict = deduplicateFindings([
  { ...validFinding, classificationStatus: "VALIDATED_REAL_FINDING" },
  { ...validFinding, auditId: "TEST-0004", classificationStatus: "VALIDATED_REAL_FINDING", source: "deterministic/other" },
]);
assert(!conflict.pass, "duplicate validated findings should conflict");

const lunaFinding = {
  ...validFinding,
  auditId: "TEST-0005",
  source: "gpt-5.6-luna",
  classificationStatus: "VALIDATED_REAL_FINDING",
  reason: "same semantic issue",
};
const semanticPass = applySemanticRegistryDedup([lunaFinding], new Map());
assert(semanticPass.pass, "semantic registry pass fixture");
const semanticSeen = applySemanticRegistryDedup(
  [{ ...lunaFinding, auditId: "TEST-0006", findingStableId: "f2", dedupKey: "k2" }],
  semanticPass.registry,
);
assert(
  semanticSeen.findings[0].classificationStatus === "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
  "semantic non-match marks previously seen",
);

console.log("PASS: phase1 findings validation + dedup tests");
