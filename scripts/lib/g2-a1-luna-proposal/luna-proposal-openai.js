#!/usr/bin/env node
"use strict";

const { DEFAULT_MODEL, redactSecrets, isApiKeyConfigured } = require("../luna-phase1-openai");
const { buildBatchRequest } = require("./request-schema");

const PROPOSAL_SYSTEM_PROMPT = [
  "You are a READ-ONLY translation proposal assistant for de-lv-app G2/A1 Luna proposal.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For EVERY input taskId you MUST return exactly one item with the same taskId.",
  "Allowed actions: KEEP_CURRENT, PROPOSE_REPLACEMENT, TRANSLATION_REQUIRED, INTENTIONAL_SAME_CANDIDATE, NEEDS_OWNER_REVIEW.",
  "Use proposedValue null unless action is PROPOSE_REPLACEMENT.",
  "Do NOT assign OWNER_APPROVED, LABOT, AUTO_APPLIED, or any status other than PROPOSED_LUNA_PENDING_OWNER.",
  "Do NOT write to Crowdin or production files.",
  "Preserve locale and crowdinKey when provided.",
].join("\n");

function resolveClient(client) {
  if (client) return client;
  if (!isApiKeyConfigured()) {
    const err = new Error("OPENAI_API_KEY is not configured");
    err.code = "OPENAI_API_KEY_MISSING";
    throw err;
  }
  const OpenAI = require("openai");
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

function parseProposalLunaResponseStrict(raw) {
  if (!raw || typeof raw !== "string") {
    throw new Error("Luna proposal response empty");
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    const err = new Error(`Luna proposal response invalid JSON: ${redactSecrets(error.message)}`);
    err.code = "LUNA_RESPONSE_INVALID_JSON";
    throw err;
  }
  const items = parsed.items;
  if (!Array.isArray(items)) {
    const err = new Error("Luna proposal response missing items array");
    err.code = "LUNA_RESPONSE_MALFORMED";
    throw err;
  }
  return { items };
}

async function callProposalLunaBatch({ batch, tasks, model = DEFAULT_MODEL, client = null, signal = null }) {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    throw new Error("Luna proposal batch tasks must be non-empty");
  }
  if (model !== DEFAULT_MODEL) {
    const err = new Error(`LUNA_MODEL_MISMATCH:${model}`);
    err.code = "LUNA_MODEL_MISMATCH";
    throw err;
  }

  const request = buildBatchRequest(tasks, batch.queueKind, batch.batchIndex);
  const payload = {
    batchId: request.batchId,
    queueKind: request.queueKind,
    batchIndex: request.batchIndex,
    taskIds: request.taskIds,
    items: request.items,
  };

  const openai = resolveClient(client);
  const requestOptions = signal ? { signal } : undefined;
  const response = await openai.responses.create(
    {
      model,
      instructions: PROPOSAL_SYSTEM_PROMPT,
      input: [
        "G2/A1 Luna proposal batch. Return valid json object with an items array — explicit entry for every taskId.",
        JSON.stringify(payload),
      ].join("\n"),
      text: { format: { type: "json_object" } },
    },
    requestOptions,
  );

  const parsed = parseProposalLunaResponseStrict(response.output_text || "");
  return {
    items: parsed.items,
    tokensUsed: response.usage?.total_tokens || 0,
    usage: response.usage || null,
    model,
  };
}

module.exports = {
  PROPOSAL_SYSTEM_PROMPT,
  parseProposalLunaResponseStrict,
  callProposalLunaBatch,
  resolveClient,
};
