#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");

const SCHEMA_VERSION = "1.0.0";
const CHECKPOINT_SCHEMA_VERSION = "1.0.0";
const PROGRESS_SCHEMA_VERSION = "1.0.0";
const LOCK_SCHEMA_VERSION = "1.0.0";

const HEARTBEAT_INTERVAL_MS = 15_000;
const LOCK_STALE_MS = 5 * 60 * 1000;

const BATCHING_CONFIG = {
  "g2:ordinary": 25,
  "g2:minimalStudy": 10,
  "g2:standardStudy": 5,
  "g1:sentences": 25,
  "g1:verbs": 10,
  "g1:training": 50,
  "g3:courseLessons": 20,
};

const pathState = {
  runsRoot: path.join(ROOT, "reports", "temp", "phase1-luna-runs"),
  get activeLockPath() {
    return path.join(this.runsRoot, ".active-lock.json");
  },
  legacyRawRoot: path.join(ROOT, "reports", "temp", "phase1-luna"),
};

function escapeScopeId(scopeId) {
  return String(scopeId).replace(/\//g, "_");
}

function runDir(runId) {
  return path.join(pathState.runsRoot, runId);
}

function manifestPath(runId) {
  return path.join(runDir(runId), "run-manifest.json");
}

function progressPath(runId) {
  return path.join(runDir(runId), "progress.json");
}

function checkpointDir(runId, scopeId) {
  return path.join(runDir(runId), "checkpoints", escapeScopeId(scopeId));
}

function checkpointFilePath(runId, scopeId, batchId) {
  return path.join(checkpointDir(runId, scopeId), `${batchId}.json`);
}

module.exports = {
  SCHEMA_VERSION,
  CHECKPOINT_SCHEMA_VERSION,
  PROGRESS_SCHEMA_VERSION,
  LOCK_SCHEMA_VERSION,
  get RUNS_ROOT() {
    return pathState.runsRoot;
  },
  set RUNS_ROOT(value) {
    pathState.runsRoot = value;
  },
  get ACTIVE_LOCK_PATH() {
    return pathState.activeLockPath;
  },
  set ACTIVE_LOCK_PATH(value) {
    pathState.runsRoot = path.dirname(value);
  },
  get LEGACY_RAW_ROOT() {
    return pathState.legacyRawRoot;
  },
  HEARTBEAT_INTERVAL_MS,
  LOCK_STALE_MS,
  BATCHING_CONFIG,
  escapeScopeId,
  runDir,
  manifestPath,
  progressPath,
  checkpointDir,
  checkpointFilePath,
  pathState,
};
