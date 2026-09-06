#!/usr/bin/env node
"use strict";

const { runStartGates } = require("./identity-gates");
const { buildQueues, classifySourceIdenticalPreliminary } = require("./queue-builder");
const { buildTaskRequest, buildBatchRequest } = require("./request-schema");
const { validateLunaResponseItem, validateLunaBatchResponse } = require("./response-validator");
const { buildBatchPlan } = require("./batch-plan");
const { runDryRun } = require("./dry-run");
const { createMockLunaTransport } = require("./mock-transport");
const { runProposalBatches } = require("./runner");
const {
  buildCheckpoint,
  validateCheckpoint,
  saveCheckpoint,
  loadCheckpoint,
  detectCheckpointIntegrity,
} = require("./checkpoint");
const {
  EXPECTED,
  TASK_KINDS,
  LUNA_ACTIONS,
  pathState,
} = require("./constants");

module.exports = {
  runStartGates,
  buildQueues,
  classifySourceIdenticalPreliminary,
  buildTaskRequest,
  buildBatchRequest,
  validateLunaResponseItem,
  validateLunaBatchResponse,
  buildBatchPlan,
  runDryRun,
  createMockLunaTransport,
  runProposalBatches,
  buildCheckpoint,
  validateCheckpoint,
  saveCheckpoint,
  loadCheckpoint,
  detectCheckpointIntegrity,
  EXPECTED,
  TASK_KINDS,
  LUNA_ACTIONS,
  pathState,
  stableTaskId: require("./hash").stableTaskId,
};
