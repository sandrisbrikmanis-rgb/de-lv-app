#!/usr/bin/env node
"use strict";

const { runInfrastructureGates } = require("./identity-gates");
const { RUNTIME_MODES, NON_EXECUTABLE_MOCK_PROOF, assertRuntimeMode } = require("./runtime-mode");
const { loadOwnerAuthorizationFile, validateOwnerAuthorizationAgainstRuntime } = require("./owner-authorization");
const { registerIssuedRealLunaReceipt, isIssuedRealLunaReceipt } = require("./runtime-receipt-registry");

const REAL_LUNA_FORBIDDEN_OPTIONS = Object.freeze([
  "skipInfrastructureGates",
  "infrastructureContext",
  "gitContext",
  "skipWorktreeCheck",
  "allowAuthFileInRepo",
  "_allowMockInfrastructureBypass",
  "ownerPackRoot",
  "matrixPath",
]);

function detectForbiddenRealLunaOverrides(options = {}) {
  const found = REAL_LUNA_FORBIDDEN_OPTIONS.filter((key) => options[key] !== undefined && options[key] !== null);
  if (found.length) {
    return {
      pass: false,
      errors: ["TEST_OVERRIDE_FORBIDDEN_IN_REAL_LUNA"],
      code: "TEST_OVERRIDE_FORBIDDEN_IN_REAL_LUNA",
      forbiddenKeys: found,
    };
  }
  return { pass: true };
}

function buildMockDryRunReceipt({ headSha, originMainSha, infrastructure }) {
  return {
    mode: RUNTIME_MODES.MOCK_DRY_RUN,
    validated: true,
    executable: false,
    resultClassification: NON_EXECUTABLE_MOCK_PROOF,
    runtimeHeadSha: headSha,
    originMainSha,
    productionBaselineSha: infrastructure.productionBaselineSha,
    validatedAt: new Date().toISOString(),
  };
}

function buildRealLunaReceipt({ authorization, authorizationFileSha256, batchPlanSha256, runId }) {
  return registerIssuedRealLunaReceipt({
    mode: RUNTIME_MODES.REAL_LUNA,
    validated: true,
    executable: true,
    runtimeHeadSha: authorization.runtimeHeadSha,
    originMainSha: authorization.originMainSha,
    authorizationFileSha256,
    batchPlanSha256,
    runId,
    model: authorization.model,
    validatedAt: new Date().toISOString(),
  });
}

function authorizeRuntimeExecution(options = {}) {
  const modeCheck = assertRuntimeMode(options.runtimeMode);
  if (!modeCheck.ok) {
    return { pass: false, errors: [modeCheck.error.code], code: modeCheck.error.code };
  }

  if (options.runtimeMode === RUNTIME_MODES.REAL_LUNA) {
    const overrideCheck = detectForbiddenRealLunaOverrides(options);
    if (!overrideCheck.pass) return overrideCheck;

    const preErrors = [];
    if (!options.expectedRuntimeHeadSha) preErrors.push("EXPECTED_RUNTIME_HEAD_SHA_REQUIRED");
    if (!options.cliSha) preErrors.push("CLI_SHA_REQUIRED");
    if (!options.ownerAuthorizationFile) preErrors.push("OWNER_AUTHORIZATION_FILE_REQUIRED");
    if (!options.expectedAuthorizationFileSha256) preErrors.push("EXPECTED_AUTHORIZATION_FILE_SHA256_REQUIRED");
    if (!options.runId) preErrors.push("RUN_ID_REQUIRED");
    if (!options.model) preErrors.push("MODEL_REQUIRED");
    if (!options.batchPlanSha256) preErrors.push("BATCH_PLAN_SHA_REQUIRED");
    if (options.batchCount == null) preErrors.push("BATCH_COUNT_REQUIRED");
    if (options.maxAllowedCycles == null) preErrors.push("MAX_ALLOWED_CYCLES_REQUIRED");
    if (!options.queueCounts) preErrors.push("QUEUE_COUNTS_REQUIRED");
    if (preErrors.length) {
      return { pass: false, errors: preErrors, code: preErrors[0] };
    }
  }

  const infrastructure =
    options.runtimeMode === RUNTIME_MODES.MOCK_DRY_RUN
      ? runInfrastructureGates({
          ownerPackRoot: options.ownerPackRoot,
          matrixPath: options.matrixPath,
          skipInfrastructureGates: options.skipInfrastructureGates,
          infrastructureContext: options.infrastructureContext,
          gitContext: options.gitContext,
          skipWorktreeCheck: options.skipWorktreeCheck,
          _allowMockInfrastructureBypass: true,
        })
      : runInfrastructureGates();

  if (!infrastructure.pass) {
    return { pass: false, errors: infrastructure.errors, code: "INFRASTRUCTURE_GATE_BLOCKED", infrastructure };
  }

  const headSha = infrastructure.headSha;
  const originMainSha = infrastructure.originMainSha;

  if (options.runtimeMode === RUNTIME_MODES.MOCK_DRY_RUN) {
    const receipt = buildMockDryRunReceipt({ headSha, originMainSha, infrastructure });
    return {
      pass: true,
      runtimeMode: RUNTIME_MODES.MOCK_DRY_RUN,
      receipt,
      infrastructure,
      resultClassification: NON_EXECUTABLE_MOCK_PROOF,
      lunaRealCalls: 0,
    };
  }

  const errors = [];
  const cliSha = options.cliSha;
  if (headSha !== originMainSha) errors.push("HEAD_ORIGIN_MAIN_MISMATCH");
  if (headSha !== options.expectedRuntimeHeadSha) errors.push("HEAD_EXPECTED_RUNTIME_HEAD_MISMATCH");
  if (cliSha !== options.expectedRuntimeHeadSha) errors.push("CLI_SHA_MISMATCH");
  if (errors.length) {
    return { pass: false, errors, code: errors[0], infrastructure };
  }

  const loaded = loadOwnerAuthorizationFile(options.ownerAuthorizationFile);
  if (!loaded.ok) {
    return { pass: false, errors: [loaded.code], code: loaded.code, infrastructure };
  }

  const runtimeCheck = validateOwnerAuthorizationAgainstRuntime({
    authorization: loaded.authorization,
    authorizationFileSha256: loaded.authorizationFileSha256,
    expectedAuthorizationFileSha256: options.expectedAuthorizationFileSha256,
    expectedRuntimeHeadSha: options.expectedRuntimeHeadSha,
    cliSha,
    headSha,
    originMainSha,
    runId: options.runId,
    model: options.model,
    matrixIdentitySha: infrastructure.matrixIdentitySha || loaded.authorization.matrixIdentitySha,
    sourceSha: infrastructure.sourceSha,
    batchPlanSha256: options.batchPlanSha256,
    batchCount: options.batchCount,
    maxAllowedCycles: options.maxAllowedCycles,
    queueCounts: options.queueCounts,
  });
  if (!runtimeCheck.ok) {
    return {
      pass: false,
      errors: runtimeCheck.blockers.map((b) => b.code),
      blockers: runtimeCheck.blockers,
      code: runtimeCheck.blockers[0]?.code || "REAL_LUNA_AUTHORIZATION_FAILED",
      infrastructure,
    };
  }

  const receipt = buildRealLunaReceipt({
    authorization: loaded.authorization,
    authorizationFileSha256: loaded.authorizationFileSha256,
    batchPlanSha256: options.batchPlanSha256,
    runId: options.runId,
  });

  return {
    pass: true,
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    receipt,
    authorization: loaded.authorization,
    infrastructure,
    lunaRealCalls: 0,
  };
}

function assertAuthorizedRuntimeReceipt(receipt, expectedMode) {
  if (!receipt || receipt.validated !== true) {
    const err = new Error("REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED");
    err.code = "REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED";
    throw err;
  }
  if (expectedMode && receipt.mode !== expectedMode) {
    const err = new Error(`RUNTIME_RECEIPT_MODE_MISMATCH:${receipt.mode}`);
    err.code = "RUNTIME_RECEIPT_MODE_MISMATCH";
    throw err;
  }
  if (receipt.mode === RUNTIME_MODES.REAL_LUNA && !isIssuedRealLunaReceipt(receipt)) {
    const err = new Error("RUNTIME_RECEIPT_NOT_ISSUED");
    err.code = "RUNTIME_RECEIPT_NOT_ISSUED";
    throw err;
  }
  return receipt;
}

function runStartGates(options = {}) {
  if (!options.runtimeMode) {
    return {
      pass: false,
      errors: ["RUNTIME_MODE_REQUIRED"],
      code: "RUNTIME_MODE_REQUIRED",
    };
  }
  const auth = authorizeRuntimeExecution(options);
  if (!auth.pass) {
    return {
      pass: false,
      errors: auth.errors || [auth.code],
      code: auth.code,
      blockers: auth.blockers,
    };
  }
  return {
    pass: true,
    ...auth.infrastructure,
    runtimeMode: auth.runtimeMode,
    receipt: auth.receipt,
    resultClassification: auth.resultClassification,
  };
}

module.exports = {
  authorizeRuntimeExecution,
  buildMockDryRunReceipt,
  assertAuthorizedRuntimeReceipt,
  runStartGates,
  REAL_LUNA_FORBIDDEN_OPTIONS,
  detectForbiddenRealLunaOverrides,
};
