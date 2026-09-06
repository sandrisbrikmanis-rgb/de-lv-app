#!/usr/bin/env node
"use strict";

const { RUNTIME_MODES } = require("./runtime-mode");
const { assertAuthorizedRuntimeReceipt } = require("./runtime-gates");
const { validateLunaBatchResponse } = require("./response-validator");
const { callProposalLunaBatch } = require("./luna-proposal-openai");
const { AUTH_FROZEN } = require("./constants");
const { redactSecrets } = require("../luna-phase1-openai");

function wrapTransportError(error) {
  const message = redactSecrets(error?.message || String(error));
  const wrapped = new Error(message);
  wrapped.code = error?.code || "LUNA_TRANSPORT_ERROR";
  if (error?.issues) wrapped.issues = error.issues;
  if (error?.tokensUsed != null) wrapped.tokensUsed = error.tokensUsed;
  return wrapped;
}

function createRealLunaTransport(authorizedRuntimeReceipt, options = {}) {
  const receipt = assertAuthorizedRuntimeReceipt(authorizedRuntimeReceipt, RUNTIME_MODES.REAL_LUNA);
  if (!receipt.executable) {
    const err = new Error("REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED");
    err.code = "REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED";
    throw err;
  }

  const model = receipt.model || AUTH_FROZEN.model;
  if (model !== AUTH_FROZEN.model) {
    const err = new Error(`LUNA_MODEL_MISMATCH:${model}`);
    err.code = "LUNA_MODEL_MISMATCH";
    throw err;
  }

  const stats = { realCalls: 0, retries: 0, tokensUsed: 0 };
  return {
    mode: "REAL_LUNA",
    authorizedRuntimeReceipt: receipt,
    stats,
    async executeBatch(batch, tasks) {
      stats.realCalls += 1;
      try {
        const result = await callProposalLunaBatch({
          batch,
          tasks,
          model,
          client: options.client,
          signal: options.signal,
        });
        const validation = validateLunaBatchResponse({ items: result.items }, tasks, { forbidDeWrite: true });
        if (!validation.ok) {
          const err = new Error(`LUNA_BATCH_RESPONSE_INVALID:${validation.issues.join(";")}`);
          err.code = "LUNA_BATCH_RESPONSE_INVALID";
          err.issues = validation.issues;
          throw err;
        }
        stats.tokensUsed += result.tokensUsed || 0;
        return {
          items: validation.normalized,
          transport: "REAL_LUNA",
          realCalls: 1,
          retries: 0,
          tokensUsed: result.tokensUsed || 0,
        };
      } catch (error) {
        throw wrapTransportError(error);
      }
    },
  };
}

module.exports = { createRealLunaTransport };
