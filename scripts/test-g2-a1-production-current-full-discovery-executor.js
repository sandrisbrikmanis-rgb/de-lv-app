#!/usr/bin/env node
"use strict";

const { validatePassRecord, validateFindingRecord, validateAuditVerdict } = require("./lib/g2-a1-production-current/verdict-validation");
const {
  mapLunaStatusToAuditVerdict,
  buildAuditedRecordFromInventoryAndLuna,
  mergeInventoryWithLunaResults,
} = require("./lib/g2-a1-production-current/luna-apvienots-mapper");
const { verifyG2BatchLimitsOnly, runFullDiscoveryAudit } = require("./lib/g2-a1-production-current/full-discovery-executor");
const { buildFullDiscoveryMetadata } = require("./lib/g2-a1-production-current/full-discovery-metadata");
const { filterOwnerReviewRows } = require("./lib/g2-a1-production-current/owner-scope");
const { validateCoverageEquation, tallyAuditedRecords } = require("./lib/g2-a1-production-current/coverage");
const { splitObjectsIntoBatches } = require("./lib/phase1-luna-checkpoint/batch-split");
const { G2_A1_BATCH_LIMITS, AUDIT_SOURCE } = require("./lib/g2-a1-production-current/constants");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

function assert(c, msg) {
  if (!c) throw new Error(msg);
}

function invRow(overrides) {
  return {
    recordKind: "TECHNICAL_INVENTORY",
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

function lunaPass(overrides) {
  return {
    status: "PASS",
    fieldPath: "a1.card.x.study",
    DE_SOURCE_ENTRY_OR_RULE: "Lemma x",
    DE_SOURCE_EVIDENCE: "DE evidence for x field only.",
    TARGET_SOURCE_ENTRY_OR_RULE: "Entry x",
    TARGET_SOURCE_EVIDENCE: "TARGET evidence for x field only.",
    CONTEXT_REASONING: "Aligned in A1 context for this field.",
    ...overrides,
  };
}

function testPassRejections() {
  const base = buildAuditedRecordFromInventoryAndLuna(invRow({}), lunaPass()).record;
  assert(!validatePassRecord({ ...base, DE_SOURCE_EVIDENCE: "" }).pass, "pass no DE");
  assert(!validatePassRecord({ ...base, TARGET_SOURCE_EVIDENCE: "" }).pass, "pass no TARGET");
  assert(!validatePassRecord({ ...base, CONTEXT_REASONING: "" }).pass, "pass no context");
  console.log("OK PASS rejection without evidence");
}

function testFindingRequired() {
  const built = buildAuditedRecordFromInventoryAndLuna(
    invRow({ fieldPath: "a1.card.f.study", rowId: "et|a1.card.f.study" }),
    lunaPass({
      status: "FINDING",
      fieldPath: "a1.card.f.study",
      CURRENT_PROBLEM: "bad",
      PROPOSED_NEW: "good",
      NEW_SOURCE_EVIDENCE: "rule 1",
    }),
  ).record;
  assert(validateFindingRecord(built).pass, "finding ok");
  assert(!validateFindingRecord({ ...built, PROPOSED_NEW: "" }).pass, "finding incomplete");
  console.log("OK FINDING required fields");
}

function testForbiddenVerdicts() {
  assert(!mapLunaStatusToAuditVerdict("PENDING_HUMAN_REVIEW").pass, "pending human");
  assert(!validateAuditVerdict({ AUDIT_VERDICT: "PENDING_HUMAN_REVIEW" }).pass, "pending in record");
  console.log("OK forbidden verdicts rejected");
}

function testBatchLimits255105() {
  const gate = verifyG2BatchLimitsOnly();
  assert(gate.pass, JSON.stringify(gate));
  assert(G2_A1_BATCH_LIMITS.ordinary === 25, "25");
  assert(G2_A1_BATCH_LIMITS.minimalStudy === 10, "10");
  assert(G2_A1_BATCH_LIMITS.standardStudy === 5, "5");
  const dummy = Array.from({ length: 30 }, (_, i) => ({ id: i }));
  const batches = splitObjectsIntoBatches(dummy, 25);
  assert(batches.every((b) => b.length <= 25), "chunk 25");
  assert(batches.reduce((s, b) => s + b.length, 0) === 30, "count");
  console.log("OK G2 batch limits 25/10/5");
}

function testOneVerdictPerRow() {
  const merged = mergeInventoryWithLunaResults(
    [invRow({ fieldPath: "a1.card.a.study", rowId: "et|a" }), invRow({ fieldPath: "a1.card.b.study", rowId: "et|b" })],
    [lunaPass({ fieldPath: "a1.card.a.study", status: "PASS" }), lunaPass({ fieldPath: "a1.card.b.study", status: "FINDING", CURRENT_PROBLEM: "p", PROPOSED_NEW: "n", NEW_SOURCE_EVIDENCE: "e" })],
    "et",
  );
  assert(merged.records.length === 2, "two rows");
  assert(new Set(merged.records.map((r) => r.AUDIT_VERDICT)).size >= 1, "verdicts");
  const cov = validateCoverageEquation(tallyAuditedRecords(merged.records));
  assert(cov.pass, JSON.stringify(cov.errors));
  console.log("OK one verdict per row + coverage");
}

function testOwnerScopeExcludesPass() {
  const merged = mergeInventoryWithLunaResults(
    [invRow({ fieldPath: "a1.card.p.study", rowId: "et|p" }), invRow({ fieldPath: "a1.card.f.study", rowId: "et|f" })],
    [
      lunaPass({ fieldPath: "a1.card.p.study", status: "PASS" }),
      lunaPass({
        fieldPath: "a1.card.f.study",
        status: "FINDING",
        CURRENT_PROBLEM: "p",
        PROPOSED_NEW: "n",
        NEW_SOURCE_EVIDENCE: "e",
      }),
    ],
    "et",
  );
  const owner = filterOwnerReviewRows(merged.records);
  assert(owner.length === 1, "owner rows");
  assert(owner[0].AUDIT_VERDICT === "FINDING", "finding only");
  console.log("OK OWNER scope excludes PASS");
}

function testMetadataWithoutModelWhenNoLuna() {
  const meta = buildFullDiscoveryMetadata({ executeLuna: false, auditBaselineSha: "abc" });
  assert(meta.MODEL_IF_USED === null, "no model");
  assert(meta.AUDIT_MODE === "FULL_DISCOVERY", "mode");
  assert(meta.AUDIT_EXECUTOR.includes("AUDIT EXECUTOR"), "role");
  console.log("OK metadata without model when Luna not executed");
}

async function testExecutorReadyWithoutLuna() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const originMain = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const inv = require("./lib/g2-a1-production-current/inventory").buildProductionFileSetInventory();
  const result = await runFullDiscoveryAudit({
    ownerAuthorizeFullAudit: true,
    expectedMainSha: originMain,
    expectedProductionFileSetSha: inv.gate.productionFileSetSha256,
    executeLuna: false,
  });
  if (head === originMain) {
    assert(result.pass && result.phase === "full-discovery-ready", JSON.stringify(result));
    assert(result.linguisticAuditsExecuted === 0, "no audit run");
  } else {
    assert(!result.pass, "branch must fail auth");
  }
  console.log("OK executor ready path without Luna");
}

async function main() {
  testPassRejections();
  testFindingRequired();
  testForbiddenVerdicts();
  testBatchLimits255105();
  testOneVerdictPerRow();
  testOwnerScopeExcludesPass();
  testMetadataWithoutModelWhenNoLuna();
  await testExecutorReadyWithoutLuna();
  console.log("ALL full discovery executor tests passed");
}

main();
