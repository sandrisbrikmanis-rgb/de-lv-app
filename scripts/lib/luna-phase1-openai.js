#!/usr/bin/env node
"use strict";

try {
  require("dotenv").config();
} catch {
  // dotenv optional in test/runtime environments
}

const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");
const { recoverLunaResponseItems } = require("./phase1-luna-id-recovery");
const { shouldAttemptCanonicalIdRecovery } = require("./phase1-luna-checkpoint/object-identity");
const {
  formatShortRecoveryError,
  writeRecoveryDiagnosticsBestEffort,
} = require("./phase1-luna-id-recovery-diagnostics");

const DEFAULT_MODEL = "gpt-5.6-luna";

const PHASE1_SYSTEM_PROMPT = [
  "You are a READ-ONLY linguistic quality auditor for de-lv-app Phase 1 discovery.",
  "Audit target-language fields against German (DE) meaning with Latvian (LV) as secondary context.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For EVERY input object id you MUST return exactly one item with the same id.",
  "If no linguistic issue: { \"id\": \"<id>\", \"status\": \"PASS\" }.",
  "For real issues include: id, status \"FINDING\", field, severity, category, reason.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Non-error: SOURCE_LV_ISSUE | DE_SOURCE_ISSUE | STYLE_ONLY | PROJECT_CONVENTION | NEEDS_REVIEW.",
  "Do NOT suggest production changes. Do NOT modify DE fields.",
  "Keep reasons concise. No markdown outside JSON.",
].join("\n");

function redactSecrets(text) {
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key || !text) return text;
  return String(text).split(key).join("[REDACTED]");
}

function assertApiKeyConfigured() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    const err = new Error("OPENAI_API_KEY is not configured");
    err.code = "OPENAI_API_KEY_MISSING";
    throw err;
  }
}

function isApiKeyConfigured() {
  return Boolean(process.env.OPENAI_API_KEY?.trim());
}

function getOpenAIClient() {
  assertApiKeyConfigured();
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

function parsePhase1LunaResponseStrict(raw, expectedIds, options = {}) {
  if (!raw || typeof raw !== "string") {
    throw new Error("Luna response empty");
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna response invalid JSON: ${redactSecrets(error.message)}`);
  }
  const items = parsed.items || parsed.results || [];
  if (!Array.isArray(items)) {
    throw new Error("Luna response missing items array");
  }

  const recoveryContext = {
    scopeId: options.scopeId ?? null,
    batchIndex: options.batchIndex ?? null,
    attempt: options.attempt ?? 1,
  };

  const recovery = shouldAttemptCanonicalIdRecovery(items, expectedIds)
    ? recoverLunaResponseItems(items, expectedIds, { attempt: recoveryContext.attempt })
    : { ok: true, items, recoveries: [], issues: [], diagnostics: [] };
  if (!recovery.ok) {
    const writeResult = writeRecoveryDiagnosticsBestEffort(recovery.diagnostics, recoveryContext);
    const summary = recovery.shortError || formatShortRecoveryError(recovery.issues, recovery.diagnostics);
    const err = new Error(summary);
    err.code = "ID_RECOVERY_FAILED";
    err.idRecoveryDiagnostics = recovery.diagnostics;
    err.idRecoveryDiagnosticsPath = writeResult.path;
    if (writeResult.writeError) {
      err.idRecoveryDiagnosticsWriteError = writeResult.writeError;
    }
    throw err;
  }

  const byId = new Map();
  for (const item of recovery.items) {
    const id = item?.id || item?.cardId || item?.objectId;
    if (!id) continue;
    if (byId.has(id)) {
      throw new Error(`Luna response duplicate id: ${id}`);
    }
    byId.set(id, item);
  }

  const normalized = [];
  for (const expectedId of expectedIds) {
    const item = byId.get(expectedId);
    if (!item) {
      throw new Error(`Luna response missing id: ${expectedId}`);
    }
    normalized.push({
      ...item,
      id: expectedId,
      status: String(item.status || "PASS").toUpperCase(),
      ...(recovery.recoveries.length
        ? {
            idRecoveryProof: recovery.recoveries.find((entry) => entry.canonicalId === expectedId) || null,
          }
        : {}),
    });
  }

  return { items: normalized, idRecoveries: recovery.recoveries };
}

async function auditObjectsBatch({
  adapter,
  scopeId,
  objects,
  model = DEFAULT_MODEL,
  writeRawPath = null,
  client = null,
  signal = null,
  recoveryContext = null,
}) {
  if (!Array.isArray(objects) || objects.length === 0) {
    throw new Error("Luna batch objects must be non-empty");
  }

  const expectedIds = objects.map((obj) => obj.id);
  const payload = {
    adapter,
    scopeId,
    auditType: "phase1_read_only",
    objects,
  };

  const openai = client || getOpenAIClient();
  const requestOptions = signal ? { signal } : undefined;
  const response = await openai.responses.create(
    {
      model,
      instructions: PHASE1_SYSTEM_PROMPT,
      input: [
        "Phase 1 READ-ONLY audit. Return valid json object with an items array — explicit entry for every object id.",
        JSON.stringify(payload),
      ].join("\n"),
      text: { format: { type: "json_object" } },
    },
    requestOptions,
  );

  const rawText = response.output_text || "";
  if (writeRawPath) {
    fs.mkdirSync(path.dirname(writeRawPath), { recursive: true });
    fs.writeFileSync(
      writeRawPath,
      JSON.stringify(
        {
          adapter,
          scopeId,
          model,
          expectedIds,
          usage: response.usage || null,
          raw: rawText,
        },
        null,
        2,
      ),
      "utf8",
    );
  }

  const parsed = parsePhase1LunaResponseStrict(rawText, expectedIds, {
    scopeId: recoveryContext?.scopeId ?? scopeId,
    batchIndex: recoveryContext?.batchIndex ?? null,
    attempt: recoveryContext?.attempt ?? 1,
  });
  return {
    items: parsed.items,
    tokensUsed: response.usage?.total_tokens || 0,
    usage: response.usage || null,
    model,
    idRecoveryParsedInTransport: true,
    idRecoveries: parsed.idRecoveries,
  };
}

module.exports = {
  DEFAULT_MODEL,
  PHASE1_SYSTEM_PROMPT,
  DEFAULT_MODEL_ID: DEFAULT_MODEL,
  assertApiKeyConfigured,
  isApiKeyConfigured,
  parsePhase1LunaResponseStrict,
  auditObjectsBatch,
  redactSecrets,
};
