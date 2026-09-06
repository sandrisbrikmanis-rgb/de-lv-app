#!/usr/bin/env node
"use strict";

/**
 * Test-only fake OpenAI client for G2/A1 proposal real transport.
 * Reuses the Phase 1 responses.create contract without external HTTP.
 */

function defaultItemsForTasks(tasks) {
  return tasks.map((task) => ({
    taskId: task.taskId,
    action: task.currentValue ? "KEEP_CURRENT" : "TRANSLATION_REQUIRED",
    proposedValue: null,
    locale: task.locale,
    crowdinKey: task.crowdinKey,
  }));
}

function buildFakeProposalClient(options = {}) {
  const state = { calls: 0, lastRequest: null };
  const handler =
    options.handler ||
    ((params) => ({
      output_text: JSON.stringify({ items: defaultItemsForTasks(options.tasks || []) }),
      usage: { total_tokens: options.tokensUsed ?? 7 },
    }));

  return {
    state,
    responses: {
      create: async (params, callOptions = {}) => {
        state.calls += 1;
        state.lastRequest = { params, callOptions };
        if (options.reject) {
          const err = new Error(options.rejectMessage || "FAKE_API_REJECT");
          err.code = options.rejectCode || "FAKE_API_REJECT";
          throw err;
        }
        if (options.timeoutMs != null) {
          return new Promise((resolve, reject) => {
            const onAbort = () => {
              const err = new Error("TIMEOUT");
              err.code = "TIMEOUT";
              err.name = "AbortError";
              reject(err);
            };
            if (callOptions.signal) {
              if (callOptions.signal.aborted) {
                onAbort();
                return;
              }
              callOptions.signal.addEventListener("abort", onAbort, { once: true });
            }
            setTimeout(() => {
              if (callOptions.signal?.aborted) return;
              resolve(handler(params, callOptions));
            }, options.timeoutMs);
          });
        }
        if (options.malformed) {
          return { output_text: options.malformed, usage: { total_tokens: 0 } };
        }
        return handler(params, callOptions);
      },
    },
  };
}

module.exports = { buildFakeProposalClient, defaultItemsForTasks };
