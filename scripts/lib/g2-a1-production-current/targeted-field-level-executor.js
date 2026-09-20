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
const {
  checkpointPath,
  verifiedCheckpointPath,
  loadRawCheckpoint,
  loadVerifiedCheckpoint,
  saveRawCheckpoint,
  saveVerifiedCheckpoint,
  buildCheckpointEnvelope,
  TARGETED_RAW_CHECKPOINT_ROOT,
} = require("./targeted-field-checkpoints");
const {
  validateBatchFieldCoverage,
  rejectCardLevelOnlyResponse,
  validateTargetedFieldResponse,
  TECHNICAL_EXECUTION_STATUS,
} = require("./targeted-field-validation");
const { mergeInventoryWithLunaResults } = require("./luna-apvienots-mapper");
const { fieldIdentityKey } = require("./targeted-field-identity");
const { authorizeTargetedFieldLevelAudit } = require("./authorize-targeted-audit");
const { auditTargetedFieldBatch } = require("./targeted-field-luna-audit");
const { isApiKeyConfigured } = require("../luna-phase1-openai");
const { AUDIT_SOURCE, RECORD_KIND } = require("./constants");
const { OFFICIAL_SOURCE_ACCESS_VERSION, SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { prefetchBatchSourceEvidence } = require("./official-source-access");
const {
  validateLinguisticVerdictAgainstSourceAccess,
  shouldBlockAsTechnical,
  buildTechnicalSourceAccessRecord,
} = require("./targeted-source-access-validation");
const path = require("path");
const fs = require("fs");
const { loadState, saveState, appendLog, buildProgressSnapshot, summarizeRecords } = require("./targeted-field-progress");
const { verifyPostRunClosure } = require("./post-run-verify");
const { buildOwnerArtifactsFromEvidence } = require("./owner-artifacts");
const { writeJsonAtomic } = require("./artifacts");
const { validateCoverageEquation, tallyAuditedRecords } = require("./coverage");

function gitHead() {
  try {
    return execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return null;
  }
}

function authorizeTargetedRun(options = {}) {
  if (options.executeLuna === true) {
    return authorizeTargetedFieldLevelAudit(options);
  }
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
    const rawCp = loadRawCheckpoint(b.language, b.batchId, auditBaselineSha, OFFICIAL_SOURCE_ACCESS_VERSION);
    const verifiedCp = loadVerifiedCheckpoint(b.language, b.batchId, auditBaselineSha, OFFICIAL_SOURCE_ACCESS_VERSION);
    const sourceOk =
      verifiedCp?.sourceAccessVersion === OFFICIAL_SOURCE_ACCESS_VERSION &&
      verifiedCp?.promptVersion === TARGETED_PROMPT_VERSION;
    resume.push({
      batchId: b.batchId,
      hasRawCheckpoint: Boolean(rawCp?.rawResponse),
      skipLuna: Boolean(verifiedCp?.completionStatus === "COMPLETE" && sourceOk),
      checkpointPath: checkpointPath(b.language, b.batchId),
      verifiedCheckpointPath: verifiedCheckpointPath(b.language, b.batchId),
      obsoleteCheckpoint: Boolean(verifiedCp?.completionStatus === "COMPLETE" && !sourceOk),
    });
  }
  return resume;
}

function loadPilotVerification() {
  const p = path.join(ROOT, "reports/g2-a1-production-current/targeted-field-source-access-pilot-verification.json");
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function inventoryRowFromRequest(req, auditBaselineSha) {
  return {
    recordKind: RECORD_KIND.TECHNICAL_INVENTORY,
    auditSource: AUDIT_SOURCE,
    productionFile: req.productionFile,
    language: req.language,
    fieldPath: req.fieldPath,
    currentValue: req.CURRENT,
    cardId: req.cardId,
    rowId: `${req.language}|${req.fieldPath}`,
    datasetProductionSha: auditBaselineSha,
    auditBaselineSha,
  };
}

function itemsFromCheckpoint(cp) {
  if (cp?.validatedItems?.length) return cp.validatedItems;
  if (cp?.rawResponse?.items?.length) return cp.rawResponse.items;
  if (cp?.rawResponse?.rawText) {
    try {
      const parsed = JSON.parse(cp.rawResponse.rawText);
      return parsed.items || [];
    } catch {
      return [];
    }
  }
  return [];
}

async function processBatch(batch, ctx) {
  const { auditBaselineSha, headSha } = ctx;
  const existingRaw = loadRawCheckpoint(batch.language, batch.batchId, auditBaselineSha, OFFICIAL_SOURCE_ACCESS_VERSION);
  const existingVerified = loadVerifiedCheckpoint(batch.language, batch.batchId, auditBaselineSha, OFFICIAL_SOURCE_ACCESS_VERSION);
  let items;
  let validatedItems;
  let lunaCalled = false;

  let sourceEvidenceByKey = null;
  if (existingVerified?.completionStatus === "COMPLETE" && existingVerified?.sourceAccessVersion === OFFICIAL_SOURCE_ACCESS_VERSION) {
    validatedItems = existingVerified.validatedItems || [];
    items = validatedItems;
  } else {
    if (existingRaw?.rawResponse && existingRaw?.sourceAccessVersion === OFFICIAL_SOURCE_ACCESS_VERSION) {
      items = itemsFromCheckpoint(existingRaw);
      sourceEvidenceByKey = new Map(Object.entries(existingRaw.sourceAccessByKey || {}));
    } else {
      lunaCalled = true;
      sourceEvidenceByKey = await prefetchBatchSourceEvidence(batch.fieldRequests);
      const scopeId = `g2/a1/targeted-field/${batch.language}/${batch.batchId}`;
      const result = await auditTargetedFieldBatch({
        scopeId,
        fieldRequests: batch.fieldRequests,
        sourceEvidenceByKey,
      });
      const rawEnvelope = buildCheckpointEnvelope(
        {
          language: batch.language,
          batchId: batch.batchId,
          auditBaselineSha,
          headSha,
          promptVersion: TARGETED_PROMPT_VERSION,
          sourceAccessVersion: OFFICIAL_SOURCE_ACCESS_VERSION,
          expectedFieldIdentities: batch.expectedFieldIdentities,
          completionStatus: "RAW_SAVED",
        },
        result.rawResponse,
      );
      rawEnvelope.rawItems = result.items;
      rawEnvelope.sourceAccessByKey = Object.fromEntries(sourceEvidenceByKey.entries());
      saveRawCheckpoint(rawEnvelope);
      items = result.items;
    }
  }

  const cardReject = rejectCardLevelOnlyResponse(items, batch.expectedFieldIdentities.length);
  if (!cardReject.pass) {
    return { pass: false, code: TECHNICAL_EXECUTION_STATUS.RESPONSE_SCHEMA_INVALID, batchId: batch.batchId };
  }

  const coverage = validateBatchFieldCoverage(batch.expectedFieldIdentities, items);
  if (!coverage.pass) {
    return { pass: false, code: TECHNICAL_EXECUTION_STATUS.MISSING_FIELD_RESULT, batchId: batch.batchId, coverage };
  }

  if (!validatedItems) {
    if (!sourceEvidenceByKey) {
      sourceEvidenceByKey = new Map(Object.entries(existingRaw?.sourceAccessByKey || {}));
    }
    validatedItems = [];
    for (const exp of batch.expectedFieldIdentities) {
      const req = batch.fieldRequests.find((r) => r.identityKey === exp.identityKey);
      const bundle = sourceEvidenceByKey.get(exp.identityKey);
      if (!bundle) {
        return { pass: false, code: TECHNICAL_EXECUTION_STATUS.SOURCE_ACCESS_FAILURE, batchId: batch.batchId, rowId: exp.rowId };
      }
      const entryNotFound =
        bundle.de.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND ||
        bundle.target.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND;
      if (shouldBlockAsTechnical(bundle) || entryNotFound) {
        const rec = buildTechnicalSourceAccessRecord(req, bundle);
        rec.sourceAccessProvenance = { de: bundle.de, target: bundle.target };
        rec.mappingProvenance = "OFFICIAL_SOURCE_ACCESS";
        validatedItems.push(rec);
        continue;
      }
      const item = items.find(
        (it) =>
          fieldIdentityKey({
            language: it.language,
            productionFile: it.productionFile,
            cardId: it.cardId,
            fieldPath: it.fieldPath || it.field,
          }) === exp.identityKey,
      );
      const v = validateTargetedFieldResponse(item, { identityKey: exp.identityKey });
      if (!v.pass) {
        return {
          pass: false,
          code: v.technicalStatus || TECHNICAL_EXECUTION_STATUS.RESPONSE_SCHEMA_INVALID,
          batchId: batch.batchId,
          rowId: exp.rowId,
          errors: v.errors,
        };
      }
      const srcCheck = validateLinguisticVerdictAgainstSourceAccess(v.record, bundle);
      if (!srcCheck.pass) {
        return {
          pass: false,
          code: TECHNICAL_EXECUTION_STATUS.SOURCE_ACCESS_FAILURE,
          batchId: batch.batchId,
          rowId: exp.rowId,
          errors: [srcCheck.error],
        };
      }
      validatedItems.push({
        ...v.record,
        sourceAccessProvenance: { de: bundle.de, target: bundle.target },
        mappingProvenance: "RAW_LUNA_FIELD_RESULT_WITH_OFFICIAL_SOURCE",
      });
    }
  }

  if (
    !existingVerified ||
    existingVerified.completionStatus !== "COMPLETE" ||
    existingVerified.sourceAccessVersion !== OFFICIAL_SOURCE_ACCESS_VERSION
  ) {
    saveVerifiedCheckpoint({
      language: batch.language,
      batchId: batch.batchId,
      auditBaselineSha,
      headSha,
      promptVersion: TARGETED_PROMPT_VERSION,
      sourceAccessVersion: OFFICIAL_SOURCE_ACCESS_VERSION,
      completionStatus: "COMPLETE",
      validatedItems,
      rawCheckpointPath: checkpointPath(batch.language, batch.batchId, OFFICIAL_SOURCE_ACCESS_VERSION),
      rawResponseSha256: existingRaw?.rawResponseSha256 || null,
      savedAt: new Date().toISOString(),
    });
  }

  const invRows = batch.fieldRequests.map((r) => inventoryRowFromRequest(r, auditBaselineSha));
  const merged = mergeInventoryWithLunaResults(invRows, validatedItems, batch.language);
  if (merged.errors.length) {
    return { pass: false, code: "MAP_ERROR", batchId: batch.batchId, errors: merged.errors.slice(0, 3) };
  }

  return { pass: true, batchId: batch.batchId, records: merged.records, lunaCalled };
}

async function runTargetedFieldLevelAudit(options = {}) {
  const executeLuna = options.executeLuna === true;
  const dryRun = options.dryRun === true || !executeLuna;

  const auth = authorizeTargetedRun({ ...options, executeLuna });
  if (!auth.pass) {
    return {
      pass: false,
      phase: "authorization",
      blockers: auth.blockers,
      FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
      classification: "G2_A1_TARGETED_FIELD_LEVEL_AUDIT_BLOCKED",
      nextAction: "RESOLVE_EXACT_BLOCKER_AND_RESUME",
    };
  }

  let missingLoad = loadMissingRows(options);
  if (!missingLoad.pass) {
    return { pass: false, phase: "missing_inventory", error: missingLoad, FULL_LINGUISTIC_AUDITS_EXECUTED: 0 };
  }

  if (options.ensureFullInventoryWritten) {
    const written = writeFullMissingFieldInventory(options);
    if (!written.pass) return { pass: false, phase: "inventory_write", detail: written, FULL_LINGUISTIC_AUDITS_EXECUTED: 0 };
    missingLoad = { pass: true, rows: written.rows, source: "written" };
  }

  const missingRows = missingLoad.rows;
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

  if (!isApiKeyConfigured()) {
    return {
      pass: false,
      phase: "execute",
      error: "OPENAI_API_KEY_MISSING",
      classification: "G2_A1_TARGETED_FIELD_LEVEL_AUDIT_BLOCKED",
      FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
    };
  }

  let state = loadState();
  if (!state || state.auditBaselineSha !== auth.auditBaselineSha || state.headSha !== auth.headSha) {
    state = {
      headSha: auth.headSha,
      auditBaselineSha: auth.auditBaselineSha,
      batchesTotal: plan.batchCount,
      batchesCompleted: 0,
      fieldsTotal: missingRows.length,
      records: [],
      recordByKey: {},
      completedLangs: [],
      lunaCalls: 0,
      technicalFailures: 0,
      processedBatches: {},
    };
  }

  let batchesToRun = plan.batches;
  if (options.pilotOnly) {
    batchesToRun = plan.batches.filter((b) => b.batchId === (options.pilotBatchId || "bg|ordinary|0"));
    if (!batchesToRun.length) {
      return {
        pass: false,
        phase: "pilot",
        error: "PILOT_BATCH_NOT_FOUND",
        FULL_LINGUISTIC_AUDITS_EXECUTED: 0,
      };
    }
  }

  const ctx = { auditBaselineSha: auth.auditBaselineSha, headSha: auth.headSha, state };

  for (const batch of batchesToRun) {
    if (state.processedBatches[batch.batchId]) continue;

    appendLog(`batch_start ${batch.batchId} fields=${batch.fieldCount}`);
    let batchResult;
    try {
      batchResult = await processBatch(batch, ctx);
    } catch (e) {
      appendLog(`batch_fail ${batch.batchId} ${e.code || e.message}`);
      saveState(state);
      return {
        pass: false,
        phase: "luna",
        batchId: batch.batchId,
        reason: e.code || e.message,
        progress: buildProgressSnapshot(state),
        classification: "G2_A1_TARGETED_FIELD_LEVEL_AUDIT_IN_PROGRESS",
        nextAction: "RESUME_FROM_LAST_VERIFIED_RAW_CHECKPOINT",
        FULL_LINGUISTIC_AUDITS_EXECUTED: state.lunaCalls,
      };
    }

    if (!batchResult.pass) {
      state.technicalFailures += 1;
      saveState(state);
      appendLog(`batch_blocked ${batch.batchId} ${batchResult.code}`);
      return {
        pass: false,
        phase: "batch_validation",
        batchResult,
        progress: buildProgressSnapshot(state),
        classification: "G2_A1_TARGETED_FIELD_LEVEL_AUDIT_BLOCKED",
        nextAction: "RESOLVE_EXACT_BLOCKER_AND_RESUME",
        FULL_LINGUISTIC_AUDITS_EXECUTED: state.lunaCalls,
      };
    }

    for (const rec of batchResult.records) {
      const key = rec.rowId || fieldIdentityKey(rec);
      if (!state.recordByKey[key]) {
        state.recordByKey[key] = true;
        state.records.push(rec);
      }
    }
    if (batchResult.lunaCalled) state.lunaCalls += 1;
    state.batchesCompleted += 1;
    state.processedBatches[batch.batchId] = true;
    state.lastBatchId = batch.batchId;
    state.lastCheckpoint = checkpointPath(batch.language, batch.batchId);
    if (!state.completedLangs.includes(batch.language)) {
      const langBatches = plan.batches.filter((b) => b.language === batch.language);
      const done = langBatches.every((b) => state.processedBatches[b.batchId]);
      if (done) state.completedLangs.push(batch.language);
    }
    saveState(state);
    appendLog(`batch_ok ${batch.batchId} total_records=${state.records.length}`);
  }

  const coverage = validateCoverageEquation(tallyAuditedRecords(state.records), { requireZeroMissingVerdict: true });
  const ownerBundle = buildOwnerArtifactsFromEvidence(state.records, {
    auditBaselineSha: auth.auditBaselineSha,
    datasetProductionSha: auth.auditBaselineSha,
    originMainSha: auth.headSha,
  });
  const postRun = verifyPostRunClosure({
    fullAuditEvidence: ownerBundle.fullAuditEvidence,
    ownerView: ownerBundle.ownerView,
    startFileSetSha: auth.auditBaselineSha,
    endFileSetSha: auth.auditBaselineSha,
  });

  writeJsonAtomic("targeted-field-audit-result.json", {
    pass: postRun.pass && coverage.pass,
    coverage: coverage.counts,
    postRun,
    progress: buildProgressSnapshot(state),
    FULL_LINGUISTIC_AUDITS_EXECUTED: state.lunaCalls,
  });
  writeJsonAtomic("targeted-field-full-audit-evidence.json", ownerBundle.fullAuditEvidence);
  writeJsonAtomic("targeted-field-post-run-verification.json", postRun);

  if (options.pilotOnly) {
    const pilotPass = state.batchesCompleted >= 1 && state.records.length <= 25;
    return {
      pass: pilotPass,
      phase: "targeted-field-pilot-complete",
      coverage: coverage.counts,
      progress: buildProgressSnapshot(state),
      classification: pilotPass
        ? "G2_A1_OFFICIAL_SOURCE_ACCESS_PILOT_BATCH_COMPLETE"
        : "G2_A1_TARGETED_FIELD_LEVEL_AUDIT_BLOCKED",
      nextAction: "RUN verify:g2-a1-targeted-field-source-access-pilot",
      FULL_LINGUISTIC_AUDITS_EXECUTED: state.lunaCalls,
    };
  }

  return {
    pass: postRun.pass && coverage.pass,
    phase: "targeted-field-complete",
    coverage: coverage.counts,
    postRun,
    progress: buildProgressSnapshot(state),
    classification: postRun.pass
      ? "G2_A1_TARGETED_FIELD_LEVEL_AUDIT_COMPLETE_AWAITING_OWNER_REVIEW"
      : "G2_A1_TARGETED_FIELD_LEVEL_AUDIT_BLOCKED",
    nextAction: postRun.pass ? "OWNER_REVIEW_FINDINGS_AND_UNRESOLVED_RECORDS" : "RESOLVE_EXACT_BLOCKER_AND_RESUME",
    FULL_LINGUISTIC_AUDITS_EXECUTED: state.lunaCalls,
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
  processBatch,
  loadPilotVerification,
};
