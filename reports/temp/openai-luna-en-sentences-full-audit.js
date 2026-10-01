require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for EN-DE Teikumi (Sätze / sentence flashcards).",
  "Each entry has German (de) and English translation in field lv (project convention: native text lives in lv).",
  "Audit English learner-facing text against German meaning (primary). Latvian source (lvSource) is secondary context only.",
  "Standards: LANGUAGE_AUDIT_STANDARD, APP_QUALITY_STANDARD.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each sentence: if correct, return { cardId, status: \"PASS\" }.",
  "For real issues return finding objects with: cardId, field, severity, category, de, lvSource, currentEn, proposedEn, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | FOREIGN_REMNANT | PUNCTUATION | REGISTER.",
  "Non-error verdicts (NOT quality findings): SOURCE_LV_ISSUE | DE_SOURCE_ISSUE | NEEDS_REVIEW | STYLE_ONLY | PROJECT_CONVENTION.",
  "DE_SOURCE_ISSUE = possible German source problem; do not suggest DE changes.",
  "STYLE_ONLY = British/American spelling preference alone is NOT an error.",
  "Use bullet • for multiple meanings, never semicolon ; in translations.",
  "Flag Latvian/Bosnian/other foreign remnants in EN lv field as FOREIGN_REMNANT severity HIGH.",
  "Do NOT suggest changes to German (de) fields.",
  "Sentences: check natural British English, correct German sense, grammar, punctuation, register (idioms, phrases, full sentences).",
  "Phrase vs full sentence: match DE form — phrases may omit final punctuation; full sentences need proper punctuation and capitalization.",
  "Keep reason under 140 chars. proposedEn must be exact replacement text for the lv field.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function createStats() {
  return {
    model: DEFAULT_MODEL,
    requestCount: 0,
    initialBatchRequests: 0,
    retryRequests: 0,
    batchCount: 0,
    batchSizes: [],
    retryCount: 0,
    retryReasons: {},
    inputTokens: 0,
    cachedInputTokens: 0,
    outputTokens: 0,
    reasoningTokens: 0,
    totalTokens: 0,
    findingsCount: 0,
    passCount: 0,
  };
}

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY nav atrasta.");
}

function addUsage(stats, usage) {
  if (!usage) return;
  stats.inputTokens += usage.input_tokens || 0;
  stats.outputTokens += usage.output_tokens || 0;
  stats.totalTokens += usage.total_tokens || 0;
  stats.cachedInputTokens += usage.input_tokens_details?.cached_tokens || 0;
  stats.reasoningTokens += usage.output_tokens_details?.reasoning_tokens || 0;
}

function recordRetryReason(stats, reason) {
  stats.retryReasons[reason] = (stats.retryReasons[reason] || 0) + 1;
}

function normalizeItem(item) {
  if (!item || !item.cardId) return null;
  const status = String(item.status || "").toUpperCase();
  if (status === "PASS" || status === "OK" || status === "NO_FINDING") {
    return { cardId: item.cardId, status: "PASS", field: item.field || "lv" };
  }
  return {
    cardId: item.cardId,
    field: item.field || "lv",
    severity: String(item.severity || "MEDIUM").toUpperCase(),
    category: String(item.category || item.verdict || "TRANSLATION").toUpperCase(),
    de: item.de || "",
    lvSource: item.lvSource || item.lv || "",
    currentEn: item.currentEn || item.currentText || item.enText || "",
    proposedEn: item.proposedEn || item.proposedFix || "",
    reason: item.reason || item.shortReason || item.problem || "",
    confidence: item.confidence || "medium",
    status: "FINDING",
  };
}

function parseLunaResponse(raw, cardIds) {
  if (!raw || typeof raw !== "string") throw new Error("Luna audit: empty response.");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna audit: invalid JSON (${error.message}).`);
  }
  const items = parsed.items || parsed.findings || [];
  if (!Array.isArray(items)) throw new Error("Luna audit: missing items array.");

  const results = [];
  const responded = new Set();
  for (const item of items) {
    const normalized = normalizeItem(item);
    if (!normalized) continue;
    responded.add(normalized.cardId);
    results.push(normalized);
  }
  for (const cardId of cardIds) {
    if (!responded.has(cardId)) results.push({ cardId, status: "PASS", field: "lv" });
  }
  const findings = results.filter((r) => r.status === "FINDING");
  const passCount = results.filter((r) => r.status === "PASS").length;
  return { results, findings, passCount };
}

async function auditSentencesBatch(options) {
  const { sentences, model = DEFAULT_MODEL, stats = null, batchLabel = "", auditType = "full_linguistic" } = options;
  if (!Array.isArray(sentences) || sentences.length === 0) throw new Error("sentences array empty.");
  assertApiKey();

  const cardIds = sentences.map((s) => s.cardId);
  const payload = { auditType, targetLang: "en", section: "Teikumi", sentences };
  const input = [
    "Full EN-DE Teikumi (Sätze) linguistic audit. Return JSON items array. PASS for correct; findings only for real issues.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const { results, findings, passCount } = parseLunaResponse(response.output_text, cardIds);

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(sentences.length);
    stats.findingsCount += findings.length;
    stats.passCount += passCount;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  luna ${batchLabel}: ${sentences.length} sentences, findings=${findings.length}, pass=${passCount}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }
  return { results, findings, passCount, usage: response.usage || null };
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  createStats,
  auditSentencesBatch,
  recordRetryReason,
  parseLunaResponse,
};
