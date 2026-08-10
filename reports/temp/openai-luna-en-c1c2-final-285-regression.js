require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a targeted regression auditor for EN-DE C1/C2 OWNER-approved repairs (British English).",
  "Context: EN fields were mechanically updated per OWNER review. Your job is to find REAL regressions only.",
  "Primary reference: German (DE) meaning. Latvian (lvSource) is secondary.",
  "DO NOT suggest stylistic synonyms or revert OWNER-approved repairs.",
  "DO NOT flag SOURCE_LV_ISSUE as EN errors when EN correctly matches DE but LV source is narrower/wrong.",
  "OWNER NELABOT cards were intentionally left unchanged — if unchanged text is correct vs DE, return PASS.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For correct fields: { cardId, field, status: \"PASS\" }.",
  "For real issues: cardId, field, severity, category, de, lvSource, currentEn, proposedEn, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | STUDY | COMPARISON | FOREIGN_REMNANT.",
  "Non-errors: SOURCE_LV_ISSUE | STYLE_ONLY | PROJECT_CONVENTION.",
  "Flag only if current EN is semantically wrong, ungrammatical, unnatural, or inconsistent within study card.",
  "British English. Bullet • for multiple meanings. No semicolons in translations.",
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
    return { cardId: item.cardId, status: "PASS", field: item.field || "lv" };
  }
  return {
    cardId: item.cardId,
    field: item.field || item.path || "lv",
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
    const key = `${normalized.cardId}:${normalized.field}`;
    responded.add(key);
    results.push(normalized);
  }
  const findings = results.filter((r) => r.status === "FINDING");
  const passCount = results.filter((r) => r.status === "PASS").length;
  return { results, findings, passCount };
}

async function auditCardsBatch(options) {
  const { cards, model = DEFAULT_MODEL, stats = null, batchLabel = "", auditType = "owner_repair_regression" } = options;
  if (!Array.isArray(cards) || cards.length === 0) throw new Error("cards array empty.");
  assertApiKey();

  const payload = { auditType, targetLang: "en", cards };
  const input = [
    "Targeted OWNER repair regression. Find REAL errors only. PASS for correct OWNER-approved EN.",
    "Return valid JSON object with items array only.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const cardIds = cards.map((c) => c.cardId);
  const { results, findings, passCount } = parseLunaResponse(response.output_text, cardIds);

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(cards.length);
    stats.findingsCount += findings.length;
    stats.passCount += passCount;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  luna ${batchLabel}: ${cards.length} cards, findings=${findings.length}, pass=${passCount}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }
  return { results, findings, passCount, usage: response.usage || null };
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  createStats,
  auditCardsBatch,
  recordRetryReason,
  parseLunaResponse,
};
