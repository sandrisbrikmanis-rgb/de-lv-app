#!/usr/bin/env node
"use strict";

const { getOpenAIClient, redactSecrets, DEFAULT_MODEL } = require("../luna-phase1-openai");
const { TARGETED_PROMPT_VERSION } = require("./targeted-field-payload");
const { AI_AUDIT_ROLE, AI_NOT_LANGUAGE_AUTHORITY } = require("./constants");
const { mapPrefetchToPromptEvidence } = require("./official-source-access");
const { OFFICIAL_SOURCE_ACCESS_VERSION } = require("./official-source-access-constants");

const TARGETED_FIELD_SYSTEM_PROMPT = [
  `Role: ${AI_AUDIT_ROLE}. You are NOT ${AI_NOT_LANGUAGE_AUTHORITY}.`,
  "READ-ONLY G2/A1 production-current field-level linguistic audit (APVIENOTS).",
  `Official source access version: ${OFFICIAL_SOURCE_ACCESS_VERSION}.`,
  "Each object includes DE_OFFICIAL_SOURCE and TARGET_OFFICIAL_SOURCE with prefetched read-only evidence from MASTER allowlisted domains.",
  "You MUST NOT use memory, training data, or unstated URLs as authority.",
  "Use ONLY the prefetched evidence fragments and URLs in DE_OFFICIAL_SOURCE / TARGET_OFFICIAL_SOURCE for SOURCE_EVIDENCE fields.",
  "Linguistic verdicts require accessOutcome SOURCE_ENTRY_VALIDATED on BOTH DE and TARGET with entryUrl and validated evidenceFragment.",
  "If accessOutcome is not SOURCE_ENTRY_VALIDATED, return AUDIT_VERDICT null and technicalSourceAccessStatus (never NEEDS_SOURCE_REVIEW).",
  "NEEDS_SOURCE_REVIEW only when BOTH sides are SOURCE_ENTRY_VALIDATED but evidence is insufficient for PASS/FINDING.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For EVERY input object id you MUST return exactly one item with the same id.",
  "Never return one shared card-level verdict for multiple field paths.",
  "Each item MUST include the same fieldPath as the input request.",
  "Required fields per item when linguistic verdict applies:",
  "language, dataset, productionFile, cardId, fieldPath, CURRENT,",
  "DE_AUTHORITY, DE_SOURCE_URL, DE_SOURCE_ENTRY_OR_RULE, DE_SOURCE_EVIDENCE,",
  "TARGET_AUTHORITY, TARGET_SOURCE_URL, TARGET_SOURCE_ENTRY_OR_RULE, TARGET_SOURCE_EVIDENCE,",
  "CONTEXT_REASONING, AUDIT_VERDICT.",
  "FINDING requires CURRENT_PROBLEM, PROPOSED_NEW, NEW_SOURCE_EVIDENCE.",
  "Allowed AUDIT_VERDICT: PASS, FINDING, NEEDS_SOURCE_REVIEW, SOURCE_DE_ISSUE, or null with technicalSourceAccessStatus.",
  "Chain: AUTHORITATIVE SOURCE → SOURCE EVIDENCE → CONTEXTUAL ANALYSIS → AUDIT VERDICT.",
  "No markdown outside JSON.",
].join("\n");

function prepareLunaObjects(fieldRequests, sourceEvidenceByKey) {
  return fieldRequests.map((req) => {
    const bundle = sourceEvidenceByKey?.get(req.identityKey);
    const official = bundle ? mapPrefetchToPromptEvidence(bundle) : null;
    return {
      ...req,
      id: req.identityKey,
      officialSourceAccessVersion: OFFICIAL_SOURCE_ACCESS_VERSION,
      ...(official || {}),
    };
  });
}

async function auditTargetedFieldBatch({
  scopeId,
  fieldRequests,
  sourceEvidenceByKey,
  model = DEFAULT_MODEL,
  client = null,
  signal = null,
}) {
  const objects = prepareLunaObjects(fieldRequests, sourceEvidenceByKey);
  const openai = client || getOpenAIClient();
  const payload = {
    adapter: "g2-a1-targeted-field-level-audit",
    promptVersion: TARGETED_PROMPT_VERSION,
    officialSourceAccessVersion: OFFICIAL_SOURCE_ACCESS_VERSION,
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
        "Targeted field-level audit with prefetched official source evidence. Return valid json with items array — one entry per object id.",
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
    rawResponse: {
      usage: response.usage || null,
      model,
      rawText: redactSecrets(rawText),
      officialSourceAccessVersion: OFFICIAL_SOURCE_ACCESS_VERSION,
    },
    tokensUsed: response.usage?.total_tokens || 0,
  };
}

module.exports = {
  TARGETED_FIELD_SYSTEM_PROMPT,
  auditTargetedFieldBatch,
  prepareLunaObjects,
};
