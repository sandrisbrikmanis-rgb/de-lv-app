#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const {
  LOCK_SCHEMA_VERSION,
  LOCK_STALE_MS,
} = require("./constants");
const { writeJsonAtomic, readJsonFileIfExists } = require("./atomic-io");

function activeLockPath() {
  return require("./constants").ACTIVE_LOCK_PATH;
}

function manifestPathForRun(runId) {
  return require("./constants").manifestPath(runId);
}

function isProcessAlive(pid) {
  if (!pid || typeof pid !== "number" || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (_) {
    return false;
  }
}

function readActiveLock() {
  return readJsonFileIfExists(activeLockPath());
}

function validateLockFreshness(lock) {
  if (!lock) return { ok: false, reason: "NO_LOCK" };
  const heartbeatMs = Date.parse(lock.heartbeatAt || lock.startedAt || 0);
  if (!Number.isFinite(heartbeatMs)) return { ok: false, reason: "LOCK_HEARTBEAT_INVALID" };
  const age = Date.now() - heartbeatMs;
  if (age > LOCK_STALE_MS) return { ok: false, reason: "LOCK_STALE", ageMs: age };
  return { ok: true, ageMs: age };
}

function assessActiveLock({ currentPid = process.pid, currentRunId = null } = {}) {
  const lock = readActiveLock();
  if (!lock) return { active: false, lock: null };

  const pidAlive = isProcessAlive(lock.pid);
  const freshness = validateLockFreshness(lock);
  const manifest = readJsonFileIfExists(manifestPathForRun(lock.runId));
  const manifestActive = manifest && ["IN_PROGRESS", "INTERRUPTED"].includes(manifest.status);

  if (currentRunId && lock.runId === currentRunId && lock.pid === currentPid) {
    return { active: false, lock, self: true };
  }

  if (!pidAlive && !freshness.ok) {
    return { active: false, lock, stale: true };
  }

  if (pidAlive && freshness.ok && manifestActive) {
    return { active: true, lock, reason: "PHASE1_RUN_ALREADY_ACTIVE" };
  }

  if (pidAlive && freshness.ok && !manifest) {
    return { active: true, lock, reason: "PHASE1_RUN_ALREADY_ACTIVE", uncertain: true };
  }

  if (!pidAlive && freshness.ok) {
    return { active: true, lock, reason: "PHASE1_RUN_ALREADY_ACTIVE", uncertain: true };
  }

  if (pidAlive && !freshness.ok) {
    return { active: true, lock, reason: "PHASE1_RUN_ALREADY_ACTIVE", uncertain: true };
  }

  return { active: false, lock, uncertain: true };
}

function acquireRunLock({ runId, baselineSha, command }) {
  const assessment = assessActiveLock({ currentRunId: runId });
  if (assessment.active) {
    const err = new Error(assessment.reason || "PHASE1_RUN_ALREADY_ACTIVE");
    err.code = "PHASE1_RUN_ALREADY_ACTIVE";
    err.lock = assessment.lock;
    throw err;
  }

  const lock = {
    schemaVersion: LOCK_SCHEMA_VERSION,
    runId,
    pid: process.pid,
    hostname: os.hostname(),
    runnerId: `${os.hostname()}:${process.pid}`,
    startedAt: new Date().toISOString(),
    heartbeatAt: new Date().toISOString(),
    baselineSha,
    command: command || process.argv.join(" "),
  };
  writeJsonAtomic(activeLockPath(), lock);
  return lock;
}

function touchRunLock(runId) {
  const lock = readActiveLock();
  if (!lock || lock.runId !== runId || lock.pid !== process.pid) return null;
  lock.heartbeatAt = new Date().toISOString();
  writeJsonAtomic(activeLockPath(), lock);
  return lock;
}

function releaseRunLock(runId) {
  const lock = readActiveLock();
  if (!lock) return false;
  if (lock.runId !== runId) return false;
  if (lock.pid !== process.pid) return false;
  try {
    fs.unlinkSync(activeLockPath());
    return true;
  } catch (_) {
    return false;
  }
}

module.exports = {
  isProcessAlive,
  readActiveLock,
  validateLockFreshness,
  assessActiveLock,
  acquireRunLock,
  touchRunLock,
  releaseRunLock,
};
