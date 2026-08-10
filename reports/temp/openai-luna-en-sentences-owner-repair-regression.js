require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a targeted regression auditor for EN-DE Teikumi (Sätze) OWNER-approved repairs.",
  "Context: EN lv field was mechanically updated per OWNER review. Find REAL regressions only.",
  "Primary reference: German (DE). Latvian (lvSource) is secondary for SOURCE_LV_ISSUE detection.",
  "DO NOT suggest stylistic synonyms or revert OWNER-approved repairs without concrete DE-based error.",
  "OWNER NELABOT cards were intentionally unchanged — if text is correct vs DE, return PASS.",
  "SOURCE_LV_ISSUE: when EN correctly follows DE but LV source mismatches, use status SOURCE_LV_ISSUE (not EN error).",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For correct: { cardId, status: \"PASS\" }.",
  "For real issues: cardId, severity, category, de, lvSource, currentEn, proposedEn, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: SEMANTICS | TRANSLATION | GRAMMAR | NATURALNESS | PUNCTUATION | ORTHOGRAPHY | REGISTER | FOREIGN_REMNANT.",
  "Non-errors: SOURCE_LV_ISSUE | DE_SOURCE_ISSUE | STYLE_ONLY | FALSE_POSITIVE | PROJECT_CONVENTION.",
  "British English. Bullet • for multiple meanings. Never semicolon ; in translations.",
  "Flag invisible/zero-width characters, mojibake, foreign remnants as HIGH.",
  "Keep reason under 140 chars.",
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
    return { cardId: item.cardId, status: "PASS", field: "lv" };
  }
  if (status === "SOURCE_LV_ISSUE") {
    return {
      cardId: item.cardId,
      field: "lv",
      severity: item.severity || "LOW",
      category: "SOURCE_LV_ISSUE",
      de: item.de || "",
      lvSource: item.lvSource || item.lv || "",
      currentEn: item.currentEn || item.currentText || item.enText || "",
      proposedEn: item.proposedEn || "",
      reason: item.reason || "",
      confidence: item.confidence || "medium",
      status: "SOURCE_LV_ISSUE",
    };
  }
  return {
    cardId: item.cardId,
    field: "lv",
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
  const findings = results.filter((r) => r.status !== "PASS");
  const passCount = results.filter((r) => r.status === "PASS").length;
  return { results, findings, passCount };
}

async function auditSentencesBatch(options) {
  const { sentences, model = DEFAULT_MODEL, stats = null, batchLabel = "", auditType = "owner_repair_regression" } = options;
  if (!Array.isArray(sentences) || sentences.length === 0) throw new Error("sentences array empty.");
  assertApiKey();

  const cardIds = sentences.map((s) => s.cardId);
  const payload = { auditType, targetLang: "en", section: "Teikumi", sentences };
  const input = [
    "Targeted OWNER repair regression for EN Teikumi. Find REAL errors only. Return valid JSON items array.",
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
        `  luna ${batchLabel}: ${sentences.length} sentences, raw=${findings.length}, pass=${passCount}, tokens=${response.usage?.total_tokens || 0}\n`
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
