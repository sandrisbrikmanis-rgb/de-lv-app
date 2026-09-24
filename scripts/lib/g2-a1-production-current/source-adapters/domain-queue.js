#!/usr/bin/env node
"use strict";

const domainChains = new Map();

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function withDomainLock(hostname, fn) {
  const key = hostname || "unknown";
  const prev = domainChains.get(key) || Promise.resolve();
  let release;
  const next = new Promise((r) => {
    release = r;
  });
  domainChains.set(
    key,
    prev.then(() => next),
  );
  await prev;
  try {
    return await fn();
  } finally {
    release();
  }
}

async function withBackoff(fn, { retries = 3, baseMs = 400 } = {}) {
  let lastErr;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (i < retries) await sleep(baseMs * 2 ** i);
    }
  }
  throw lastErr;
}

module.exports = { withDomainLock, withBackoff };
