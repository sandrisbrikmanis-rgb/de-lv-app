#!/usr/bin/env node
"use strict";

function createRequestTimeoutError(code = "TIMEOUT") {
  const err = new Error(code);
  err.code = code;
  return err;
}

/**
 * Run transport.call with AbortController-linked attempt guard.
 * Returns { response, dispose } — caller must dispose after handling response.
 */
function createAttemptAbortContext({ attemptLimitMs, isBatchDeadlineLimited }) {
  const controller = new AbortController();
  let timeoutId = null;
  let settled = false;

  const guardPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      if (settled) return;
      settled = true;
      controller.abort();
      const code = isBatchDeadlineLimited ? "BATCH_WALL_CLOCK_EXCEEDED" : "TIMEOUT";
      reject(createRequestTimeoutError(code));
    }, attemptLimitMs);
  });

  const dispose = () => {
    settled = true;
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (!controller.signal.aborted) {
      controller.abort();
    }
  };

  return { controller, guardPromise, dispose };
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

function getBatchRemainingMs(batchDeadlineMs) {
  return batchDeadlineMs - Date.now();
}

module.exports = {
  createRequestTimeoutError,
  createAttemptAbortContext,
  trackDetachedPromise,
  normalizeTransportError,
  getBatchRemainingMs,
};
