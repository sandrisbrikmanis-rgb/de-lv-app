#!/usr/bin/env node
"use strict";

const {
  mergeInventoryWithLunaResults,
  buildAuditedRecordFromInventoryAndLuna,
} = require("./lib/g2-a1-production-current/luna-apvienots-mapper");
const {
  MAPPING_PROVENANCE,
  isLegacySyntheticMappedRecord,
  flattenLunaItemsToFieldCandidates,
} = require("./lib/g2-a1-production-current/field-mapping-provenance");
const { validatePassRecord, validateFindingRecord } = require("./lib/g2-a1-production-current/verdict-validation");
const { validateAuditedEvidenceRecord } = require("./lib/g2-a1-production-current/evidence-schema");
const { tallyAuditedRecords, validateCoverageEquation } = require("./lib/g2-a1-production-current/coverage");
const { AUDIT_SOURCE, RECORD_KIND } = require("./lib/g2-a1-production-current/constants");

function assert(c, msg) {
  if (!c) throw new Error(msg);
}

function inv(overrides = {}) {
  return {
    recordKind: RECORD_KIND.TECHNICAL_INVENTORY,
    auditSource: AUDIT_SOURCE,
    productionFile: "data/et/a1.js",
    language: "et",
    fieldPath: "a1.card.x.study",
    currentValue: "x",
    cardId: "x",
    rowId: "et|a1.card.x.study",
    datasetProductionSha: "a",
    auditBaselineSha: "b",
    ...overrides,
  };
}

function fullLuna(overrides = {}) {
  return {
    status: "PASS",
    fieldPath: "a1.card.x.study",
    DE_AUTHORITY: "DE auth",
    DE_SOURCE_URL: "https://example.de/",
    DE_SOURCE_ENTRY_OR_RULE: "Lemma x",
    DE_SOURCE_EVIDENCE: "DE evidence for x field only.",
    TARGET_AUTHORITY: "TARGET auth",
    TARGET_SOURCE_URL: "https://example.target/",
    TARGET_SOURCE_ENTRY_OR_RULE: "Entry x",
    TARGET_SOURCE_EVIDENCE: "TARGET evidence for x field only.",
    CONTEXT_REASONING: "Aligned in A1 context for this field.",
    ...overrides,
  };
}

function testCardVerdictNotCopiedToAllFields() {
  const rows = [
    inv({ fieldPath: "a1.card.c.native", rowId: "et|a1.card.c.native", cardId: "c" }),
    inv({ fieldPath: "a1.card.c.study", rowId: "et|a1.card.c.study", cardId: "c" }),
  ];
  const luna = [{ status: "PASS", cardId: "c", DE_SOURCE_EVIDENCE: "shared", CONTEXT_REASONING: "card only" }];
  const merged = mergeInventoryWithLunaResults(rows, luna, "et");
  assert(merged.records.every((r) => r.AUDIT_VERDICT == null), "no verdict without field path");
  assert(merged.records.every((r) => r.mappingProvenance !== MAPPING_PROVENANCE.SYNTHETIC_FALLBACK_NSR), "no synthetic NSR");
  console.log("OK card verdict not copied to all fields");
}

function testExactFieldMapping() {
  const merged = mergeInventoryWithLunaResults([inv()], [fullLuna()], "et");
  assert(merged.records.length === 1, "one row");
  assert(merged.records[0].AUDIT_VERDICT === "PASS", "pass");
  assert(merged.records[0].mappingProvenance === MAPPING_PROVENANCE.RAW_LUNA_FIELD_RESULT, "raw field");
  assert(validatePassRecord(merged.records[0]).pass, "pass validates");
  console.log("OK exact field/path mapping");
}

function testMissingFieldNotLinguisticNsr() {
  const merged = mergeInventoryWithLunaResults([inv()], [], "et");
  assert(merged.records[0].AUDIT_VERDICT == null, "no NSR verdict");
  assert(merged.records[0].technicalMappingStatus === "MAPPING_GAP", "mapping gap");
  console.log("OK missing field not linguistic NSR");
}

function testSyntheticLegacyDetection() {
  const legacy = {
    AUDIT_VERDICT: "NEEDS_SOURCE_REVIEW",
    CONTEXT_REASONING: "No per-field Luna result; cannot close without authoritative source evidence (APVIENOTS §8).",
    DE_SOURCE_EVIDENCE: "",
    DE_SOURCE_ENTRY_OR_RULE: "",
  };
  assert(isLegacySyntheticMappedRecord(legacy), "detect synthetic");
  console.log("OK synthetic legacy detection");
}

function testDuplicateFieldRejected() {
  const merged = mergeInventoryWithLunaResults(
    [inv(), inv({ fieldPath: "a1.card.y.study", rowId: "et|y" })],
    [fullLuna(), fullLuna({ fieldPath: "a1.card.x.study" })],
    "et",
  );
  assert(merged.errors.some((e) => e.code === "DUPLICATE_LUNA_FIELD_PATH"), "dup error");
  console.log("OK duplicate Luna field paths rejected");
}

function testPassWithoutEvidenceRejected() {
  const built = buildAuditedRecordFromInventoryAndLuna(inv(), fullLuna({ DE_SOURCE_EVIDENCE: "" }));
  assert(!built.pass || built.record?.AUDIT_VERDICT == null, "incomplete luna not closed as pass");
  console.log("OK PASS without full evidence rejected");
}

function testFindingWithoutNewEvidenceRejected() {
  const merged = mergeInventoryWithLunaResults(
    [inv()],
    [
      fullLuna({
        status: "FINDING",
        CURRENT_PROBLEM: "p",
        PROPOSED_NEW: "n",
        NEW_SOURCE_EVIDENCE: "",
      }),
    ],
    "et",
  );
  assert(merged.records[0].AUDIT_VERDICT == null, "finding not closed");
  console.log("OK FINDING without NEW_SOURCE_EVIDENCE rejected");
}

function testNestedFieldResults() {
  const { fieldItems } = flattenLunaItemsToFieldCandidates(
    [{ cardId: "z", fields: [fullLuna({ fieldPath: "a1.card.z.study" })] }],
    "et",
    "data/et/a1.js",
  );
  assert(fieldItems.length === 1, "nested field");
  const merged = mergeInventoryWithLunaResults(
    [inv({ fieldPath: "a1.card.z.study", rowId: "et|z", cardId: "z" })],
    [{ cardId: "z", fields: [fullLuna({ fieldPath: "a1.card.z.study" })] }],
    "et",
  );
  assert(merged.records[0].AUDIT_VERDICT === "PASS", "nested pass");
  console.log("OK nested fieldResults mapped");
}

function testCoverageIncludesMappingGaps() {
  const merged = mergeInventoryWithLunaResults([inv(), inv({ fieldPath: "a1.card.y.study", rowId: "et|y" })], [], "et");
  const cov = validateCoverageEquation(tallyAuditedRecords(merged.records));
  assert(cov.pass, JSON.stringify(cov.errors));
  assert(cov.counts.missingVerdict === 2, "gaps counted");
  console.log("OK coverage includes mapping gaps");
}

function testSchemaSkipsMappingGap() {
  const merged = mergeInventoryWithLunaResults([inv()], [], "et");
  const schema = validateAuditedEvidenceRecord(merged.records[0]);
  assert(schema.pass && schema.skipped === "MAPPING_GAP", "schema skip gap");
  console.log("OK schema skips mapping gap rows");
}

function main() {
  testCardVerdictNotCopiedToAllFields();
  testExactFieldMapping();
  testMissingFieldNotLinguisticNsr();
  testSyntheticLegacyDetection();
  testDuplicateFieldRejected();
  testPassWithoutEvidenceRejected();
  testFindingWithoutNewEvidenceRejected();
  testNestedFieldResults();
  testCoverageIncludesMappingGaps();
  testSchemaSkipsMappingGap();
  console.log("ALL g2-a1 field-level mapping tests passed");
}

main();
