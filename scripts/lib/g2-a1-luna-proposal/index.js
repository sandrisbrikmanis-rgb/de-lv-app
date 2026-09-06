#!/usr/bin/env node
"use strict";

const { runInfrastructureGates } = require("./identity-gates");
const { buildQueues, classifySourceIdenticalPreliminary } = require("./queue-builder");
const { buildTaskRequest, buildBatchRequest } = require("./request-schema");
const { validateLunaResponseItem, validateLunaBatchResponse } = require("./response-validator");
const { buildBatchPlan } = require("./batch-plan");
const { runDryRun } = require("./dry-run");
const { runOwnerReview } = require("./owner-review");
const { analyzeGroupedIndividualOverlaps, countIndividualOverlapStats, OVERLAP_CLASS } = require("./grouped-overlap");
const { createMockLunaTransport } = require("./mock-transport");
const { createRealLunaTransport } = require("./real-transport");
const { createLunaTransport, assertTransportReceipt } = require("./transport-factory");
const { runProposalBatches } = require("./runner");
const {
  authorizeRuntimeExecution,
  buildMockDryRunReceipt,
  assertAuthorizedRuntimeReceipt,
  runStartGates,
} = require("./runtime-gates");
const { RUNTIME_MODES, NON_EXECUTABLE_MOCK_PROOF } = require("./runtime-mode");
const {
  loadOwnerAuthorizationFile,
  validateOwnerAuthorizationDocument,
  validateOwnerAuthorizationAgainstRuntime,
  buildOwnerAuthorizationDocument,
  proveV1Defect,
  validateGitIdentityChain,
  validateAuthorizationFileHash,
  OWNER_AUTH_PURPOSE,
} = require("./owner-authorization");
const {
  buildCheckpoint,
  validateCheckpoint,
  saveCheckpoint,
  loadCheckpoint,
  detectCheckpointIntegrity,
} = require("./checkpoint");
const {
  EXPECTED,
  AUTH_FROZEN,
  TASK_KINDS,
  LUNA_ACTIONS,
  pathState,
} = require("./constants");

module.exports = {
  runInfrastructureGates,
  runStartGates,
  authorizeRuntimeExecution,
  buildMockDryRunReceipt,
  assertAuthorizedRuntimeReceipt,
  buildQueues,
  classifySourceIdenticalPreliminary,
  buildTaskRequest,
  buildBatchRequest,
  validateLunaResponseItem,
  validateLunaBatchResponse,
  buildBatchPlan,
  runDryRun,
  runOwnerReview,
  analyzeGroupedIndividualOverlaps,
  countIndividualOverlapStats,
  OVERLAP_CLASS,
  createMockLunaTransport,
  createRealLunaTransport,
  createLunaTransport,
  assertTransportReceipt,
  runProposalBatches,
  buildCheckpoint,
  validateCheckpoint,
  saveCheckpoint,
  loadCheckpoint,
  detectCheckpointIntegrity,
  loadOwnerAuthorizationFile,
  validateOwnerAuthorizationDocument,
  validateOwnerAuthorizationAgainstRuntime,
  buildOwnerAuthorizationDocument,
  proveV1Defect,
  validateGitIdentityChain,
  validateAuthorizationFileHash,
  OWNER_AUTH_PURPOSE,
  RUNTIME_MODES,
  NON_EXECUTABLE_MOCK_PROOF,
  EXPECTED,
  AUTH_FROZEN,
  TASK_KINDS,
  LUNA_ACTIONS,
  pathState,
  stableTaskId: require("./hash").stableTaskId,
};
