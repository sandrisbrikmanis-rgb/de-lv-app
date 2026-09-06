#!/usr/bin/env node
"use strict";

const { performance } = require("perf_hooks");

function nowMs() {
  return performance.now();
}

function createRequestTimeoutError(code = "TIMEOUT") {
  const err = new Error(code);
  err.code = code;
  return err;
}

function createAttemptDeadlines({
  attemptStart = nowMs(),
  requestTimeoutMs,
  batchDeadlineAt,
}) {
  const requestDeadlineAt = attemptStart + requestTimeoutMs;
  const batchLimited = batchDeadlineAt <= requestDeadlineAt;
  const effectiveDeadlineAt = Math.min(requestDeadlineAt, batchDeadlineAt);
  const attemptLimitMs = Math.max(0, effectiveDeadlineAt - attemptStart);

  return {
    attemptStart,
    requestDeadlineAt,
    batchDeadlineAt,
    effectiveDeadlineAt,
    attemptLimitMs,
    limitingReason: batchLimited ? "BATCH_WALL_CLOCK_EXCEEDED" : "TIMEOUT",
    isBatchDeadlineLimited: batchLimited,
  };
}

function getMonotonicBatchRemainingMs(batchDeadlineAt, at = nowMs()) {
  return batchDeadlineAt - at;
}

function getMonotonicElapsedSince(attemptStart, at = nowMs()) {
  return at - attemptStart;
}

function assertPostAwaitDeadline(deadlines, at = nowMs()) {
  if (at > deadlines.effectiveDeadlineAt) {
    throw createRequestTimeoutError(deadlines.limitingReason);
  }
  if (at > deadlines.batchDeadlineAt) {
    throw createRequestTimeoutError("BATCH_WALL_CLOCK_EXCEEDED");
  }
  if (at > deadlines.requestDeadlineAt) {
    throw createRequestTimeoutError("TIMEOUT");
  }
}

/**
 * AbortController-linked attempt guard using monotonic attemptLimitMs.
 */
function createAttemptAbortContext({ attemptLimitMs, isBatchDeadlineLimited, controller = null }) {
  const abortController = controller || new AbortController();
  let timeoutId = null;
  let settled = false;
  const limitingReason = isBatchDeadlineLimited ? "BATCH_WALL_CLOCK_EXCEEDED" : "TIMEOUT";

  const guardPromise = new Promise((_, reject) => {
    if (attemptLimitMs <= 0) {
      settled = true;
      abortController.abort();
      reject(createRequestTimeoutError(limitingReason));
      return;
    }
    timeoutId = setTimeout(() => {
      if (settled) return;
      settled = true;
      abortController.abort();
      reject(createRequestTimeoutError(limitingReason));
    }, attemptLimitMs);
  });

  const dispose = () => {
    settled = true;
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (!abortController.signal.aborted) {
      abortController.abort();
    }
  };

  return { controller: abortController, guardPromise, dispose, limitingReason };
}

function trackDetachedPromise(promise) {
  if (promise && typeof promise.catch === "function") {
    promise.catch(() => {});
  }
}

function normalizeTransportError(err) {
  if (!err) return createRequestTimeoutError("TIMEOUT");
  if (err.code === "BATCH_WALL_CLOCK_EXCEEDED" || err.code === "TIMEOUT") return err;
  if (err.name === "AbortError" || err.code === "ABORT_ERR") {
    return createRequestTimeoutError("TIMEOUT");
  }
  if (err.message === "TIMEOUT" || err.message === "BATCH_WALL_CLOCK_EXCEEDED") {
    return createRequestTimeoutError(err.message);
  }
  return err;
}

/** @deprecated use getMonotonicBatchRemainingMs with performance deadline */
function getBatchRemainingMs(batchDeadlineMs) {
  return batchDeadlineMs - Date.now();
}

module.exports = {
  nowMs,
  createRequestTimeoutError,
  createAttemptDeadlines,
  createAttemptAbortContext,
  trackDetachedPromise,
  normalizeTransportError,
  getBatchRemainingMs,
  getMonotonicBatchRemainingMs,
  getMonotonicElapsedSince,
  assertPostAwaitDeadline,
};
