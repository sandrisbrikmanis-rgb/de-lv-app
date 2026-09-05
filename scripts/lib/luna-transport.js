#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("./audit-common");
const {
  DEFAULT_MODEL,
  auditObjectsBatch,
  redactSecrets,
} = require("./luna-phase1-openai");

function rejectOnAbort(signal, reject) {
  if (!signal) return null;
  const onAbort = () => {
    const err = new Error("TIMEOUT");
    err.code = "TIMEOUT";
    err.name = "AbortError";
    reject(err);
  };
  if (signal.aborted) {
    onAbort();
    return null;
  }
  signal.addEventListener("abort", onAbort, { once: true });
  return onAbort;
}

function createMockLunaTransport(fixtureMap = {}) {
  return {
    mode: "MOCK",
    transport: "MOCK",
    get realCallsDelta() {
      return 0;
    },
    getRealCalls() {
      return 0;
    },
    async call(payload, callOptions = {}) {
      const { signal } = callOptions;
      const key = `${payload.adapter}:${payload.scopeId}`;
      const fixture = fixtureMap[key] || fixtureMap[payload.adapter] || fixtureMap.default;

      if (fixture?.hang) {
        return new Promise((resolve, reject) => {
          const onAbort = rejectOnAbort(signal, reject);
          if (!onAbort && signal?.aborted) return;
          if (fixture.hang === "forever") return;
          setTimeout(() => {
            if (signal?.aborted) return;
            resolve({
              items: payload.objects.map((obj) => ({ ...obj, id: obj.id, status: "PASS" })),
              tokensUsed: fixture.tokensUsed || 0,
            });
          }, fixture.hangDelayMs || 60_000);
        });
      }

      if (!fixture) {
        return {
          items: payload.objects.map((obj, idx) => ({
            ...obj,
            id: obj.id || `mock-${idx}`,
            status: "PASS",
          })),
          tokensUsed: 0,
        };
      }
      if (fixture.error) throw new Error(fixture.error);
      if (fixture.malformed) return fixture.malformed;
      if (fixture.duplicate) {
        const first = payload.objects[0];
        return {
          items: [first, first].map((obj) => ({ ...obj, id: obj.id, status: "PASS" })),
          tokensUsed: 0,
        };
      }
      if (fixture.partial) {
        return {
          items: payload.objects.slice(0, Math.max(0, payload.objects.length - 1)).map((obj) => ({
            ...obj,
            id: obj.id,
            status: "PASS",
          })),
          tokensUsed: 0,
        };
      }
      return {
        items: payload.objects.map((obj) => ({ ...obj, id: obj.id, status: "PASS", lunaProcessed: true })),
        tokensUsed: fixture.tokensUsed || 0,
      };
    },
  };
}

function isRealLunaTransport(transport) {
  return Boolean(transport && (transport.mode === "REAL" || transport.transport === "REAL"));
}

function createRealLunaTransport(options = {}) {
  let totalRealCalls = 0;
  const model = options.model || DEFAULT_MODEL;

  return {
    mode: "REAL",
    transport: "REAL",
    model,
    get realCallsDelta() {
      return 0;
    },
    getRealCalls() {
      return totalRealCalls;
    },
    async call(payload, callOptions = {}) {
      totalRealCalls += 1;
      try {
        const batchId = `batch-${totalRealCalls}`;
        const rawPath = options.writeRaw
          ? path.join(
              ROOT,
              "reports",
              "temp",
              "phase1-luna",
              String(payload.scopeId || "unknown").replace(/\//g, "_"),
              `raw-${batchId}.json`,
            )
          : null;
        const result = await auditObjectsBatch({
          adapter: payload.adapter,
          scopeId: payload.scopeId,
          objects: payload.objects,
          model,
          writeRawPath: rawPath,
          client: options.client,
          signal: callOptions.signal,
        });
        return {
          items: result.items,
          tokensUsed: result.tokensUsed,
          usage: result.usage,
          model: result.model,
        };
      } catch (error) {
        throw new Error(redactSecrets(error.message || String(error)));
      }
    },
  };
}

function createLunaTransport(options = {}) {
  const mode = options.mode || (options.mock ? "mock" : "mock");
  if (mode === "real" || mode === "REAL") {
    return createRealLunaTransport(options);
  }
  return createMockLunaTransport(options.fixtureMap || {});
}

module.exports = {
  createLunaTransport,
  createMockLunaTransport,
  createRealLunaTransport,
  isRealLunaTransport,
};
