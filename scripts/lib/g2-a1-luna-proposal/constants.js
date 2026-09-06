#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");

const SCHEMA_VERSION = "g2-a1-luna-proposal-v1";
const CHECKPOINT_SCHEMA_VERSION = "1.0.0";
const PROGRESS_SCHEMA_VERSION = "1.0.0";

const EXPECTED = {
  originMain: "d259701d7ac1d005a762b977795075f983c567a0",
  matrixIdentitySha: "966a31529b82f0005b46bb059acfc655bde1045b34cd04852cba3f0cd892c965",
  sourceFileId: 16,
  sourceSha: "854f174e67cb0965fb24c884c43aa2b557a0d581f88bf0761cd846cac4eaf5e8",
  sourceStrings: 2971,
  crowdinTranslated: 74380,
  approved: 0,
  ownerPackClassification: "G2_A1_OWNER_PACK_V3_READY_FOR_OWNER_REVIEW",
  queueCounts: {
    AUDIT_MAPPED_UNIQUE: 10313,
    EMPTY_OR_MISSING: 4801,
    SOURCE_IDENTICAL: 12920,
    GROUPED_MANUAL_REVIEW: 3222,
  },
};

const TASK_KINDS = Object.freeze({
  AUDIT_MAPPED_UNIQUE: "AUDIT_MAPPED_UNIQUE",
  EMPTY_OR_MISSING: "EMPTY_OR_MISSING",
  SOURCE_IDENTICAL: "SOURCE_IDENTICAL",
  GROUPED_MANUAL_REVIEW: "GROUPED_MANUAL_REVIEW",
});

const LUNA_ACTIONS = Object.freeze([
  "KEEP_CURRENT",
  "PROPOSE_REPLACEMENT",
  "TRANSLATION_REQUIRED",
  "INTENTIONAL_SAME_CANDIDATE",
  "NEEDS_OWNER_REVIEW",
]);

const SOURCE_IDENTICAL_PRELIM = Object.freeze([
  "INTENTIONAL_SAME_CANDIDATE",
  "TRANSLATION_REQUIRED",
  "NEEDS_OWNER_REVIEW",
]);

const DEFAULT_BATCH_SIZES = Object.freeze({
  AUDIT_MAPPED_UNIQUE: 25,
  EMPTY_OR_MISSING: 50,
  SOURCE_IDENTICAL: 50,
});

const DEFAULT_RETRY = { maxRetries: 2, timeoutMs: 120_000 };

const pathState = {
  ownerPackRoot: "/tmp/cursor/artifacts/phase2-g2-a1-owner-pack-v3",
  artifactsRoot: "/tmp/cursor/artifacts/phase2-g2-a1-luna-proposal-infra",
  runsRoot: path.join(ROOT, "reports", "temp", "phase2-g2-a1-luna-proposal-runs"),
  matrixPath: "/tmp/cursor/artifacts/phase1-compact-pub/phase1-full-bundle/phase1-discovery-matrix.json",
};

function runDir(runId) {
  return path.join(pathState.runsRoot, runId);
}

function manifestPath(runId) {
  return path.join(runDir(runId), "run-manifest.json");
}

function progressPath(runId) {
  return path.join(runDir(runId), "progress.json");
}

function checkpointDir(runId, queueKind) {
  return path.join(runDir(runId), "checkpoints", queueKind);
}

function checkpointFilePath(runId, queueKind, batchId) {
  return path.join(checkpointDir(runId, queueKind), `${batchId}.json`);
}

module.exports = {
  SCHEMA_VERSION,
  CHECKPOINT_SCHEMA_VERSION,
  PROGRESS_SCHEMA_VERSION,
  EXPECTED,
  TASK_KINDS,
  LUNA_ACTIONS,
  SOURCE_IDENTICAL_PRELIM,
  DEFAULT_BATCH_SIZES,
  DEFAULT_RETRY,
  pathState,
  runDir,
  manifestPath,
  progressPath,
  checkpointDir,
  checkpointFilePath,
};
