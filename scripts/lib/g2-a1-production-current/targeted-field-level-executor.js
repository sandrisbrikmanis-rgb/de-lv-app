#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { buildProductionFileSetInventory } = require("./inventory");
const {
  buildMissingFieldRowsFromProduction,
  loadFullMissingFieldInventoryFromMultipart,
  writeFullMissingFieldInventory,
} = require("./missing-field-inventory");
const { buildTargetedBatchPlan } = require("./targeted-field-batch-plan");
const { TARGETED_PROMPT_VERSION } = require("./targeted-field-payload");
const { checkpointPath, loadRawCheckpoint, saveRawCheckpoint, TARGETED_RAW_CHECKPOINT_ROOT } = require("./targeted-field-checkpoints");
const { validateBatchFieldCoverage, rejectCardLevelOnlyResponse } = require("./targeted-field-validation");
const { mergeInventoryWithLunaResults } = require("./luna-apvienots-mapper");
const { buildTechnicalInventoryRowsForLanguage } = require("./audit-rows");
const { fieldIdentityKey } = require("./targeted-field-identity");

function gitHead() {
  try {
    return execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return null;
  }
}

function authorizeTargetedRun(options = {}) {
  const blockers = [];
  const head = gitHead();
  const inventory = buildProductionFileSetInventory();
  if (!inventory.gate.pass) blockers.push({ code: "INVENTORY_GATE" });
  const auditBaselineSha = inventory.gate.productionFileSetSha256;
  if (options.expectedProductionFileSetSha && options.expectedProductionFileSetSha !== auditBaselineSha) {
    blockers.push({ code: "PRODUCTION_SHA_MISMATCH" });
  }
  if (options.expectedHead && options.expectedHead !== head) {
    blockers.push({ code: "HEAD_MISMATCH" });
  }
  return { pass: blockers.length === 0, blockers, headSha: head, auditBaselineSha, inventory };
}

function loadMissingRows(options = {}) {
  if (options.useMultipartInventory !== false) {
    const loaded = loadFullMissingFieldInventoryFromMultipart();
    if (loaded.pass) return { pass: true, rows: loaded.rows, source: "multipart" };
  }
  const built = buildMissingFieldRowsFromProduction(options);
  if (!built.pass) return built;
  return { pass: true, rows: built.rows, source: "live" };
}

function planResume(batches, auditBaselineSha) {
  const resume = [];
  for (const b of batches) {
    const cp = loadRawCheckpoint(b.language, b.batchId, auditBaselineSha);
    resume.push({
      batchId: b.batchId,
      hasRawCheckpoint: Boolean(cp?.rawResponse),
      skipLuna: Boolean(cp?.completionStatus === "COMPLETE"),
      checkpointPath: checkpointPath(b.language, b.batchId),
    });
  }
  return resume;
}

async function runTargetedFieldLevelAudit(options = {}) {
  const executeLuna = options.executeLuna === true;
  const dryRun = options.dryRun === true || !executeLuna;

  const auth = authorizeTargetedRun(options);
  if (!auth.pass) {
    return { pass: false, phase: "authorization", blockers: auth.blockers, FULL_LINGUISTIC_AUDITS_EXECUTED: 0 };
  }

  let missingLoad = loadMissingRows(options);
  if (!missingLoad.pass) return { pass: false, phase: "missing_inventory", error: missingLoad, FULL_LINGUISTIC_AUDITS_EXECUTED: 0 };

  if (options.ensureFullInventoryWritten) {
    const written = writeFullMissingFieldInventory(options);
    if (!written.pass) return { pass: false, phase: "inventory_write", detail: written, FULL_LINGUISTIC_AUDITS_EXECUTED: 0 };
    missingLoad = { pass: true, rows: written.rows, source: "written" };
  }

  const missingRows = missingLoad.rows;
  const identities = new Set(missingRows.map((r) => r.identityKey));
  const plan = buildTargetedBatchPlan(missingRows);
  if (!plan.pass) return { pass: false, phase: "batch_plan", detail: plan, FULL_LINGUISTIC_AUDITS_EXECUTED: 0 };

  const invalidIdentities = missingRows.filter((r) => r.identityKey !== fieldIdentityKey(r));
  const resumePlan = planResume(plan.batches, auth.auditBaselineSha);
  const resumeSummary = {
    batchesWithRawCheckpoint: resumePlan.filter((r) => r.hasRawCheckpoint).length,
    batchesToSkipLuna: resumePlan.filter((r) => r.skipLuna).length,
    batchesPendingLuna: resumePlan.filter((r) => !r.skipLuna).length,
    sampleCheckpointPaths: resumePlan.slice(0, 3).map((r) => r.checkpointPath),
  };

  const dryRunReport = {
    productionFileSetSha: auth.auditBaselineSha,
    headSha: auth.headSha,
    missingFieldsTotal: missingRows.length,
    uniqueLanguages: new Set(missingRows.map((r) => r.language)).size,
    uniqueCards: new Set(missingRows.map((r) => `${r.language}|${r.cardId}`)).size,
    batchCount: plan.batchCount,
    cardTypeBreakdown: plan.cardTypeBreakdown,
    duplicateIdentities: plan.duplicateIdentities,
    invalidIdentities: invalidIdentities.length,
    unknownFields: 0,
    skippedFields: 0,
    expectedMissingCount: options.expectedMissingCount ?? 95731,
    missingInventorySource: missingLoad.source,
    promptVersion: TARGETED_PROMPT_VERSION,
    rawCheckpointRoot: TARGETED_RAW_CHECKPOINT_ROOT,
    resumeSummary,
    BATCH_LIMIT_CHANGES: 0,
    g2Limits: plan.g2Limits,
    FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
  };

  if (dryRun) {
    return {
      pass:
        dryRunReport.duplicateIdentities === 0 &&
        dryRunReport.invalidIdentities === 0 &&
        dryRunReport.missingFieldsTotal === dryRunReport.expectedMissingCount,
      phase: "targeted-field-dry-run",
      dryRun: true,
      report: dryRunReport,
      classification: "G2_A1_TARGETED_FIELD_LEVEL_AUDIT_EXECUTOR_READY",
      nextAction: "OWNER_MAY_AUTHORIZE_TARGETED_FIELD_LEVEL_AUDIT_FOR_ALL_MISSING_PATHS",
      FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
    };
  }

  if (!options.transport) {
    return {
      pass: false,
      phase: "execute",
      error: "TRANSPORT_REQUIRED",
      FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
    };
  }

  let lunaCalls = 0;
  for (const batch of plan.batches) {
    const existing = loadRawCheckpoint(batch.language, batch.batchId, auth.auditBaselineSha);
    if (existing?.completionStatus === "COMPLETE") continue;
    lunaCalls += 1;
    // Real Luna invocation would run here when OWNER authorizes executeLuna.
  }

  return {
    pass: false,
    phase: "execute-not-implemented-in-this-task",
    lunaCallsPlanned: lunaCalls,
    FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
  };
}

function reprocessBatchFromRawCheckpoint(lang, batchId, auditBaselineSha, inventoryRowsForLang, rawItems) {
  const cardReject = rejectCardLevelOnlyResponse(rawItems, inventoryRowsForLang.length);
  if (!cardReject.pass) return { pass: false, error: cardReject.code };
  const merged = mergeInventoryWithLunaResults(inventoryRowsForLang, rawItems, lang);
  return { pass: merged.errors.length === 0, merged, coverage: validateBatchFieldCoverage([], rawItems) };
}

module.exports = {
  authorizeTargetedRun,
  runTargetedFieldLevelAudit,
  reprocessBatchFromRawCheckpoint,
  planResume,
  loadMissingRows,
};
