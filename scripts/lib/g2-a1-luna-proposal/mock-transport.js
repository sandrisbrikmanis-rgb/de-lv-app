#!/usr/bin/env node
"use strict";

const { validateLunaBatchResponse } = require("./response-validator");
const { RUNTIME_MODES } = require("./runtime-mode");
const { assertAuthorizedRuntimeReceipt } = require("./runtime-gates");

function createMockLunaTransport(fixtureMap = {}, authorizedRuntimeReceipt = null) {
  const receipt = assertAuthorizedRuntimeReceipt(authorizedRuntimeReceipt, RUNTIME_MODES.MOCK_DRY_RUN);
  const stats = { realCalls: 0, retries: 0, tokensUsed: 0 };
  return {
    mode: "MOCK",
    authorizedRuntimeReceipt: receipt,
    stats,
    async executeBatch(batch, tasks) {
      const key = `${batch.queueKind}:${batch.batchIndex}`;
      const fixture = fixtureMap[key] || fixtureMap[batch.queueKind] || fixtureMap.default;
      if (fixture === "error") throw new Error("MOCK_TRANSPORT_ERROR");
      if (fixture === "hang") await new Promise(() => {});
      let items;
      if (typeof fixture === "function") items = fixture(batch, tasks);
      else if (Array.isArray(fixture)) items = fixture;
      else {
        items = tasks.map((task) => ({
          taskId: task.taskId,
          action: task.currentValue ? "KEEP_CURRENT" : "TRANSLATION_REQUIRED",
          proposedValue: null,
          rationale: "mock default",
          confidence: 0.5,
          targetLanguageConfirmed: true,
          locale: task.locale,
          crowdinKey: task.crowdinKey,
        }));
      }
      const validation = validateLunaBatchResponse({ items }, tasks, { forbidDeWrite: true });
      if (!validation.ok) {
        const err = new Error(`MOCK_RESPONSE_INVALID:${validation.issues.join(";")}`);
        err.issues = validation.issues;
        throw err;
      }
      return { items: validation.normalized, transport: "MOCK", realCalls: 0, retries: 0, tokensUsed: 0 };
    },
  };
}

module.exports = { createMockLunaTransport };
