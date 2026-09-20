#!/usr/bin/env node
"use strict";

const fs = require("fs");
const { getOpenAIClient, redactSecrets, DEFAULT_MODEL } = require("../luna-phase1-openai");
const { TARGETED_PROMPT_VERSION } = require("./targeted-field-payload");
const { AI_AUDIT_ROLE, AI_NOT_LANGUAGE_AUTHORITY } = require("./constants");

const TARGETED_FIELD_SYSTEM_PROMPT = [
  `Role: ${AI_AUDIT_ROLE}. You are NOT ${AI_NOT_LANGUAGE_AUTHORITY}.`,
  "READ-ONLY G2/A1 production-current field-level linguistic audit (APVIENOTS).",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For EVERY input object id you MUST return exactly one item with the same id.",
  "Never return one shared card-level verdict for multiple field paths.",
  "Each item MUST include the same fieldPath as the input request.",
  "Required fields per item:",
  "language, dataset, productionFile, cardId, fieldPath, CURRENT,",
  "DE_AUTHORITY, DE_SOURCE_URL, DE_SOURCE_ENTRY_OR_RULE, DE_SOURCE_EVIDENCE,",
  "TARGET_AUTHORITY, TARGET_SOURCE_URL, TARGET_SOURCE_ENTRY_OR_RULE, TARGET_SOURCE_EVIDENCE,",
  "CONTEXT_REASONING, AUDIT_VERDICT.",
  "FINDING requires CURRENT_PROBLEM, PROPOSED_NEW, NEW_SOURCE_EVIDENCE.",
  "CEFR fields when applicable.",
  "Allowed AUDIT_VERDICT only: PASS, FINDING, NEEDS_SOURCE_REVIEW, SOURCE_DE_ISSUE.",
  "Use only authoritative sources from the request; do not invent translations.",
  "Chain: AUTHORITATIVE SOURCE → SOURCE EVIDENCE → CONTEXTUAL ANALYSIS → AUDIT VERDICT.",
  "No markdown outside JSON.",
].join("\n");

function prepareLunaObjects(fieldRequests) {
  return fieldRequests.map((req) => ({
    ...req,
    id: req.identityKey,
  }));
}

async function auditTargetedFieldBatch({
  scopeId,
  fieldRequests,
  model = DEFAULT_MODEL,
  client = null,
  signal = null,
}) {
  const objects = prepareLunaObjects(fieldRequests);
  const openai = client || getOpenAIClient();
  const payload = {
    adapter: "g2-a1-targeted-field-level-audit",
    promptVersion: TARGETED_PROMPT_VERSION,
    scopeId,
    auditType: "g2_a1_targeted_field_level",
    objects,
  };
  const requestOptions = signal ? { signal } : undefined;
  const response = await openai.responses.create(
    {
      model,
      instructions: TARGETED_FIELD_SYSTEM_PROMPT,
      input: [
        "Targeted field-level audit. Return valid json with items array — one entry per object id.",
        JSON.stringify(payload),
      ].join("\n"),
      text: { format: { type: "json_object" } },
    },
    requestOptions,
  );
  const rawText = response.output_text || "";
  let parsed;
  try {
    parsed = JSON.parse(rawText);
  } catch (e) {
    const err = new Error(redactSecrets(`MALFORMED_JSON:${e.message}`));
    err.code = "MALFORMED_RESPONSE";
    err.rawText = redactSecrets(rawText.slice(0, 2000));
    throw err;
  }
  const items = Array.isArray(parsed.items) ? parsed.items : Array.isArray(parsed) ? parsed : null;
  if (!items) {
    const err = new Error("MALFORMED_RESPONSE:missing_items");
    err.code = "MALFORMED_RESPONSE";
    throw err;
  }
  return {
    items,
    rawResponse: { usage: response.usage || null, model, rawText: redactSecrets(rawText) },
    tokensUsed: response.usage?.total_tokens || 0,
  };
}

module.exports = {
  TARGETED_FIELD_SYSTEM_PROMPT,
  auditTargetedFieldBatch,
  prepareLunaObjects,
};
