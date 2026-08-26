#!/usr/bin/env node
"use strict";

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");
const { DEFAULT_MODEL, createStats } = require("./openai-es-a1-a2-audit");

function addUsage(stats, usage) {
  if (!usage) return;
  stats.inputTokens += usage.input_tokens || 0;
  stats.outputTokens += usage.output_tokens || 0;
  stats.totalTokens += usage.total_tokens || 0;
}

const NARROW_SYSTEM_PROMPT = [
  "You are a targeted ES-DE A1+A2 post-repair regression auditor (GPT-5.6 Luna).",
  "Audit ONLY the supplied ownerNew field values that were just applied via OWNER COPY-ONLY repair.",
  "This is NOT a full card discovery audit. Do NOT flag unrelated fields on the same card.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each target: if ownerNew is correct Spanish per paired German meaning, return { targetId, status: \"PASS\" }.",
  "For real issues return finding objects with:",
  "targetId, cardId, field, severity, category, de, pairedDe, currentEs, proposedEs, reason, confidence.",
  "currentEs MUST be the applied ownerNew value under review.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | STUDY | COMPARISON | SECTIONACCENTS_LANGUAGE | FOREIGN_REMNANT.",
  "Non-error verdicts (do NOT count as findings):",
  "FALSE_POSITIVE | STYLE_ONLY | PROJECT_CONVENTION | SOURCE_LV_ISSUE | DE_SOURCE_ISSUE | NEEDS_OWNER_REVIEW.",
  "STYLE_ONLY = ownerNew is grammatically and semantically correct; only a stylistic alternative exists.",
  "Do NOT suggest DE changes. Preserve German parts in comparison examples.",
  "Check: person, number, gender, tense, negation, modality, prepositions, accents, ¿? ¡!, capitalization, punctuation.",
  "Do NOT reopen NELABOT greetings: Guten Morgen! → ¡Buen día! is accepted.",
  "Do NOT suggest El auto vale mucho. for Das Auto ist teuer. when ownerNew is El auto es caro.",
  "Keep reason under 160 chars. proposedEs must be exact replacement text if suggesting change.",
].join("\n");

let client = null;

function getClient() {
  if (!client) {
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return client;
}

function normalizeTargetItem(item) {
  if (!item) return null;
  const status = String(item.status || "").toUpperCase();
  if (status === "PASS" || status === "OK" || status === "NO_FINDING") {
    return {
      targetId: item.targetId,
      cardId: item.cardId,
      field: item.field,
      status: "PASS",
    };
  }
  return {
    targetId: item.targetId,
    cardId: item.cardId,
    field: item.field || "lv",
    severity: String(item.severity || "MEDIUM").toUpperCase(),
    category: String(item.category || "TRANSLATION").toUpperCase(),
    de: item.de || "",
    pairedDe: item.pairedDe || "",
    currentEs: item.currentEs || item.ownerNew || "",
    proposedEs: item.proposedEs || item.proposedFix || "",
    reason: item.reason || "",
    confidence: item.confidence || "medium",
    status: "FINDING",
  };
}

function parseNarrowResponse(raw, targetIds) {
  if (!raw || typeof raw !== "string") throw new Error("Luna audit: empty response");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna audit: invalid JSON (${error.message})`);
  }
  const items = parsed.items || parsed.findings || [];
  if (!Array.isArray(items)) throw new Error("Luna audit: missing items array");

  const results = [];
  const responded = new Set();
  for (const item of items) {
    const normalized = normalizeTargetItem(item);
    if (!normalized) continue;
    if (normalized.targetId) responded.add(normalized.targetId);
    results.push(normalized);
  }

  for (const targetId of targetIds) {
    if (!responded.has(targetId)) {
      results.push({ targetId, status: "PASS" });
    }
  }

  const findings = results.filter((r) => r.status === "FINDING");
  const passCount = results.filter((r) => r.status === "PASS").length;
  return { results, findings, passCount };
}

async function auditNarrowTargetsBatch({ targets, stats, batchLabel, model = DEFAULT_MODEL }) {
  if (!targets.length) throw new Error("targets array empty");

  const targetIds = targets.map((t) => t.targetId);
  const payload = {
    auditType: "es_de_a1_a2_narrow_post_micro_owner",
    dataset: "es-a1-a2",
    instruction:
      "Verify each ownerNew only. Use pairedDe/context. PASS if correct. No unrelated field audits.",
    targets,
  };

  const response = await getClient().responses.create({
    model,
    instructions: NARROW_SYSTEM_PROMPT,
    input: `Targeted post-OWNER regression. Return JSON items array.\n${JSON.stringify(payload)}`,
    text: { format: { type: "json_object" } },
  });

  const { results, findings, passCount } = parseNarrowResponse(response.output_text, targetIds);

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(targets.length);
    stats.findingsCount += findings.length;
    stats.passCount += passCount;
    addUsage(stats, response.usage);
    process.stdout.write(
      `  narrow-luna ${batchLabel}: ${targets.length} targets, findings=${findings.length}, pass=${passCount}, tokens=${response.usage?.total_tokens || 0}\n`,
    );
  }

  return { results, findings, passCount, usage: response.usage || null };
}

module.exports = {
  NARROW_SYSTEM_PROMPT,
  auditNarrowTargetsBatch,
  parseNarrowResponse,
};
