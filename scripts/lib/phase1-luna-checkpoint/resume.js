#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { authorizeWithLunaDiscovery } = require("../phase1-luna-authorize");
const { resolvePhase1GitIdentity } = require("../phase1-git-identity");
const { runBaselineGate } = require("../content-discovery/baseline-gate");
const { runPhase0ExitEvaluation } = require("../../run-phase0-exit-matrix");
const {
  validateManifestSchema,
  compareManifestIdentity,
  buildBatchingConfigSnapshot,
  buildPromptSchemaHash,
  computeScopeIdentity,
} = require("./manifest");
const { readJsonFile, readJsonFileIfExists, listCheckpointFiles } = require("./atomic-io");
const { validateBatchCheckpoint } = require("./batch-checkpoint");
const { buildExpectedBatchPlanForScopes } = require("./batch-plan");

function manifestPathFor(runId) {
  return require("./constants").manifestPath(runId);
}

function checkpointDirFor(runId, scopeId) {
  return require("./constants").checkpointDir(runId, scopeId);
}

function buildExpectedIdentity({ scopes, cliScope, transport, model, baseline, gitIdentity, resumeMode = false }) {
  const scopeIdentity = computeScopeIdentity(scopes);
  return {
    discoveryBaselineSha: baseline.originMainSha,
    headSha: resumeMode ? baseline.originMainSha : gitIdentity.headSha,
    originMainSha: gitIdentity.originMainSha,
    model,
    transport,
    cliScope,
    scopeHash: scopeIdentity.scopeHash,
    objectIdsHash: scopeIdentity.objectIdsHash,
    batchingConfig: buildBatchingConfigSnapshot(),
    promptSchemaHash: buildPromptSchemaHash(),
  };
}

function validateResumeAuthorization(options = {}) {
  const blockers = [];

  const auth = authorizeWithLunaDiscovery({
    skipApiKeyCheck: options.skipApiKeyCheck,
    skipPhase0Check: options.skipPhase0Check,
    gitIdentity: options.gitIdentity,
    baseline: options.baseline,
    phase0Matrix: options.phase0Matrix,
    productionDiff: options.productionDiff,
  });
  if (!auth.pass) {
    return { ok: false, code: auth.blocker || "RESUME_AUTHORIZATION_FAILED", blockers: auth.blockers };
  }

  return { ok: true, auth };
}

function validateManifestForResume(manifest, expectedIdentity) {
  const schema = validateManifestSchema(manifest);
  if (!schema.ok) {
    return { ok: false, code: "MANIFEST_CORRUPT", details: schema };
  }
  const identity = compareManifestIdentity(manifest, expectedIdentity);
  if (!identity.ok) {
    return { ok: false, code: "RESUME_IDENTITY_MISMATCH", mismatches: identity.mismatches };
  }
  return { ok: true };
}

function validateCheckpointIntegrity(runId, lunaScopes, manifest) {
  const corrupt = [];
  const seenBatchIds = new Map();
  const { planByScope } = buildExpectedBatchPlanForScopes(lunaScopes);

  for (const scope of lunaScopes) {
    const scopeId = scope.scopeId;
    const dir = checkpointDirFor(runId, scopeId);
    const files = listCheckpointFiles(dir);
    const expectedBatches = planByScope.get(scopeId) || [];
    const expectedByBatchId = new Map(expectedBatches.map((batch) => [batch.batchId, batch]));

    for (const file of files) {
      const basename = path.basename(file);
      let cp;
      try {
        cp = readJsonFile(file);
      } catch (error) {
        corrupt.push({ file, scopeId, reason: "CORRUPT", issues: ["JSON_PARSE_FAILED"], message: error.message });
        continue;
      }

      if (!cp || typeof cp !== "object") {
        corrupt.push({ file, scopeId, reason: "CORRUPT", issues: ["CHECKPOINT_MISSING_OR_INVALID"] });
        continue;
      }

      const expectedBatch = expectedByBatchId.get(cp.batchId);
      if (!expectedBatch) {
        corrupt.push({
          file,
          scopeId,
          batchId: cp.batchId || null,
          reason: "UNMAPPABLE_CHECKPOINT",
          issues: ["CHECKPOINT_NOT_IN_EXPECTED_BATCH_PLAN"],
        });
        continue;
      }

      if (basename !== expectedBatch.expectedFilename) {
        corrupt.push({
          file,
          scopeId,
          batchId: cp.batchId,
          reason: "CHECKPOINT_FILENAME_MISMATCH",
          issues: ["CHECKPOINT_FILENAME_MISMATCH"],
          expectedFilename: expectedBatch.expectedFilename,
          actualFilename: basename,
        });
        continue;
      }

      if (cp.batchId !== expectedBatch.batchId) {
        corrupt.push({
          file,
          scopeId,
          batchId: cp.batchId,
          reason: "CHECKPOINT_BATCH_ID_MISMATCH",
          issues: ["BATCH_ID_MISMATCH"],
        });
        continue;
      }

      const fieldMismatches = [];
      if (cp.batchIndex !== expectedBatch.batchIndex) fieldMismatches.push("BATCH_INDEX_MISMATCH");
      if (cp.scopeId !== expectedBatch.scopeId) fieldMismatches.push("SCOPE_ID_FIELD_MISMATCH");
      if (cp.expectedIdsHash !== expectedBatch.expectedIdsHash) fieldMismatches.push("EXPECTED_IDS_HASH_MISMATCH");
      if (cp.requestInputHash !== expectedBatch.requestInputHash) fieldMismatches.push("REQUEST_INPUT_HASH_MISMATCH");
      const cpExpectedIds = (cp.expectedObjectIds || []).join(",");
      const planExpectedIds = expectedBatch.expectedObjectIds.join(",");
      if (cpExpectedIds !== planExpectedIds) fieldMismatches.push("EXPECTED_OBJECT_IDS_MISMATCH");
      if (fieldMismatches.length) {
        corrupt.push({
          file,
          scopeId,
          batchId: cp.batchId,
          reason: "CHECKPOINT_FIELD_MISMATCH",
          issues: fieldMismatches,
        });
        continue;
      }

      const validation = validateBatchCheckpoint(cp, {
        expectedRunId: manifest.runId,
        scopeId: expectedBatch.scopeId,
        batchIndex: expectedBatch.batchIndex,
        expectedIds: expectedBatch.expectedObjectIds,
        requestInputHash: expectedBatch.requestInputHash,
      });

      if (!validation.ok) {
        corrupt.push({
          file,
          scopeId,
          batchId: cp.batchId || null,
          reason: "CHECKPOINT_VALIDATION_FAILED",
          issues: validation.issues,
        });
        continue;
      }

      const batchKey = `${scopeId}|${cp.batchId}`;
      if (seenBatchIds.has(batchKey)) {
        corrupt.push({
          file,
          scopeId,
          batchId: cp.batchId,
          reason: "DUPLICATE_BATCH_CHECKPOINT",
          issues: ["DUPLICATE_BATCH_CHECKPOINT"],
          priorFile: seenBatchIds.get(batchKey),
        });
        continue;
      }
      seenBatchIds.set(batchKey, file);
    }
  }

  if (corrupt.length) {
    return { ok: false, code: "CHECKPOINT_CORRUPT", corrupt };
  }
  return { ok: true };
}

function loadManifest(runId) {
  const file = manifestPathFor(runId);
  if (!fs.existsSync(file)) return { ok: false, code: "MANIFEST_MISSING" };
  try {
    const manifest = readJsonFile(file);
    return { ok: true, manifest };
  } catch (error) {
    return { ok: false, code: "MANIFEST_CORRUPT", message: error.message };
  }
}

function prepareResumeContext({
  runId,
  scopes,
  cliScope,
  transport,
  model,
  options = {},
}) {
  const baseline = options.baseline || runBaselineGate({ writeReports: false });
  const gitIdentity = options.gitIdentity || resolvePhase1GitIdentity(options.gitIdentityDeps || {});
  const expectedIdentity = buildExpectedIdentity({
    scopes,
    cliScope,
    transport,
    model,
    baseline,
    gitIdentity,
    resumeMode: true,
  });

  const auth = validateResumeAuthorization({
    ...options,
    baseline,
    gitIdentity,
    productionDiff: gitIdentity.productionDiff,
    allowInfraHeadForResume: true,
  });
  if (!auth.ok) {
    return { ok: false, code: auth.code, blockers: auth.blockers, realCalls: 0 };
  }

  const loaded = loadManifest(runId);
  if (!loaded.ok) {
    return { ok: false, code: loaded.code, realCalls: 0 };
  }

  const manifestCheck = validateManifestForResume(loaded.manifest, expectedIdentity);
  if (!manifestCheck.ok) {
    return { ok: false, code: manifestCheck.code, details: manifestCheck, realCalls: 0 };
  }

  const lunaScopes = scopes.filter((s) => s.lunaApplicable);
  const checkpointCheck = validateCheckpointIntegrity(runId, lunaScopes, loaded.manifest);
  if (!checkpointCheck.ok) {
    return { ok: false, code: checkpointCheck.code, details: checkpointCheck, realCalls: 0 };
  }

  const lockAssessment = require("./lock").assessActiveLock({ currentRunId: runId });
  if (lockAssessment.active && lockAssessment.lock?.runId !== runId) {
    return { ok: false, code: "PHASE1_RUN_ALREADY_ACTIVE", lock: lockAssessment.lock, realCalls: 0 };
  }

  return {
    ok: true,
    manifest: loaded.manifest,
    expectedIdentity,
    auth: auth.auth,
    realCalls: 0,
  };
}

module.exports = {
  buildExpectedIdentity,
  validateResumeAuthorization,
  validateManifestForResume,
  validateCheckpointIntegrity,
  loadManifest,
  prepareResumeContext,
};
