#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const {
  mergeInventoryWithLunaResults,
  buildAuditedRecordFromInventoryAndLuna,
} = require("./lib/g2-a1-production-current/luna-apvienots-mapper");
const { validateTargetedFieldResponse, validateBatchFieldCoverage, rejectCardLevelOnlyResponse, TECHNICAL_EXECUTION_STATUS } = require("./lib/g2-a1-production-current/targeted-field-validation");
const { buildTargetedBatchPlan } = require("./lib/g2-a1-production-current/targeted-field-batch-plan");
const { saveRawCheckpoint, loadRawCheckpoint, buildCheckpointEnvelope, checkpointPath } = require("./lib/g2-a1-production-current/targeted-field-checkpoints");
const { splitJsonRowsMultipart, mergeJsonParts, verifyJsonMultipartManifest } = require("./lib/g2-a1-production-current/json-multipart");
const { fieldIdentityKey, normalizeMissingFieldRow } = require("./lib/g2-a1-production-current/targeted-field-identity");
const { planResume, reprocessBatchFromRawCheckpoint } = require("./lib/g2-a1-production-current/targeted-field-level-executor");
const { RECORD_KIND, AUDIT_SOURCE, G2_A1_BATCH_LIMITS } = require("./lib/g2-a1-production-current/constants");
const { ROOT } = require("./lib/audit-common");
const { execSync } = require("child_process");

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
    language: "et",
    productionFile: "data/et/a1.js",
    cardId: "x",
    fieldPath: "a1.card.x.study",
    DE_AUTHORITY: "DE",
    DE_SOURCE_URL: "https://de/",
    DE_SOURCE_ENTRY_OR_RULE: "e",
    DE_SOURCE_EVIDENCE: "de ev",
    TARGET_AUTHORITY: "T",
    TARGET_SOURCE_URL: "https://t/",
    TARGET_SOURCE_ENTRY_OR_RULE: "te",
    TARGET_SOURCE_EVIDENCE: "t ev",
    CONTEXT_REASONING: "ctx",
    ...overrides,
  };
}

function testTwoFieldsTwoResults() {
  const rows = [
    inv({ fieldPath: "a1.card.c.a", rowId: "et|a", cardId: "c" }),
    inv({ fieldPath: "a1.card.c.b", rowId: "et|b", cardId: "c" }),
  ];
  const merged = mergeInventoryWithLunaResults(
    rows,
    [fullLuna({ fieldPath: "a1.card.c.a", cardId: "c" }), fullLuna({ fieldPath: "a1.card.c.b", cardId: "c" })],
    "et",
  );
  assert(merged.records.filter((r) => r.AUDIT_VERDICT === "PASS").length === 2, "two pass");
  console.log("OK two fields two results");
}

function testCardVerdictRejected() {
  const r = rejectCardLevelOnlyResponse([{ status: "PASS", cardId: "c" }], 3);
  assert(!r.pass, "card level rejected");
  console.log("OK card-level verdict rejected");
}

function testIncompletePassRejected() {
  const v = validateTargetedFieldResponse(fullLuna({ DE_SOURCE_EVIDENCE: "" }), {
    identityKey: "et|data/et/a1.js|x|a1.card.x.study",
  });
  assert(!v.pass, "incomplete pass");
  console.log("OK incomplete PASS rejected");
}

function testFindingMissingNewEvidence() {
  const v = validateTargetedFieldResponse(
    fullLuna({ status: "FINDING", CURRENT_PROBLEM: "p", PROPOSED_NEW: "n", NEW_SOURCE_EVIDENCE: "" }),
    { identityKey: fieldIdentityKey({ language: "et", productionFile: "data/et/a1.js", cardId: "x", fieldPath: "a1.card.x.study" }) },
  );
  assert(!v.pass, "finding incomplete");
  console.log("OK FINDING without NEW_SOURCE_EVIDENCE rejected");
}

function testMissingStaysTechnical() {
  const merged = mergeInventoryWithLunaResults([inv()], [], "et");
  assert(merged.records[0].AUDIT_VERDICT == null, "null verdict");
  assert(merged.records[0].technicalMappingStatus === "MAPPING_GAP", "gap");
  console.log("OK missing stays technical");
}

function testDuplicateRejected() {
  const merged = mergeInventoryWithLunaResults(
    [inv()],
    [fullLuna(), fullLuna()],
    "et",
  );
  assert(merged.errors.some((e) => e.code === "DUPLICATE_LUNA_FIELD_PATH"), "dup");
  console.log("OK duplicate rejected");
}

function testWrongFieldPathRejected() {
  const v = validateTargetedFieldResponse(fullLuna({ fieldPath: "a1.card.wrong.study" }), {
    identityKey: fieldIdentityKey({ language: "et", productionFile: "data/et/a1.js", cardId: "x", fieldPath: "a1.card.x.study" }),
  });
  assert(v.technicalStatus === TECHNICAL_EXECUTION_STATUS.RESULT_IDENTITY_MISMATCH, "mismatch");
  console.log("OK wrong fieldPath rejected");
}

function testRawSavedBeforeMapping() {
  const env = buildCheckpointEnvelope(
    {
      language: "et",
      batchId: "et|ordinary|0",
      auditBaselineSha: "abc",
      promptVersion: "test",
    },
    { items: [fullLuna()] },
  );
  const tmp = path.join(ROOT, "reports/temp/g2-a1-targeted-test-checkpoint");
  fs.mkdirSync(tmp, { recursive: true });
  const p = path.join(tmp, "et_test.luna-raw.json");
  fs.writeFileSync(p, JSON.stringify(env));
  assert(env.rawResponseSha256, "sha");
  fs.unlinkSync(p);
  console.log("OK raw checkpoint envelope");
}

function testResumeSkipsLuna() {
  const batches = [{ language: "et", batchId: "et|ordinary|0" }];
  const resume = planResume(batches, "missing-baseline");
  assert(resume[0].skipLuna === false, "no cp");
  console.log("OK resume plan without checkpoint");
}

function testReprocessNoLuna() {
  const rows = [inv()];
  const raw = [fullLuna()];
  const out = reprocessBatchFromRawCheckpoint("et", "b0", "b", rows, raw);
  assert(out.pass, JSON.stringify(out));
  console.log("OK reprocess from raw without Luna");
}

function testMultipartNoGaps() {
  const rows = Array.from({ length: 500 }, (_, i) => ({ id: i, identityKey: `k${i}`, payload: "x".repeat(200) }));
  const { parts, manifest } = splitJsonRowsMultipart(rows, { maxBytes: 50_000 });
  const verify = verifyJsonMultipartManifest(
    manifest,
    parts.map((p) => p.content),
  );
  assert(verify.pass, JSON.stringify(verify));
  const merged = mergeJsonParts(parts);
  assert(merged.length === 500, "merged count");
  console.log("OK multipart merge no gaps");
}

function testProductionDiffZero() {
  const diff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  assert(!diff, diff);
  console.log("OK production diff zero");
}

function testBatchLimitsUnchanged() {
  assert(G2_A1_BATCH_LIMITS.ordinary === 25, "25");
  assert(G2_A1_BATCH_LIMITS.minimalStudy === 10, "10");
  assert(G2_A1_BATCH_LIMITS.standardStudy === 5, "5");
  console.log("OK batch limits unchanged");
}

function main() {
  testTwoFieldsTwoResults();
  testCardVerdictRejected();
  testIncompletePassRejected();
  testFindingMissingNewEvidence();
  testMissingStaysTechnical();
  testDuplicateRejected();
  testWrongFieldPathRejected();
  testRawSavedBeforeMapping();
  testResumeSkipsLuna();
  testReprocessNoLuna();
  testMultipartNoGaps();
  testBatchLimitsUnchanged();
  testProductionDiffZero();
  console.log("ALL targeted field-level executor unit tests passed");
}

main();
