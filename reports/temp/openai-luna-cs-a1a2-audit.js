require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for CS-DE A1/A2 (Czech translations of German vocabulary).",
  "Audit Czech learner-language text against German meaning (primary). Latvian source is secondary context only.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each card/field: if correct, return { cardId, status: \"PASS\" }.",
  "For real issues return finding objects with: cardId, field, severity, category, de, lvSource, currentCs, proposedCs, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category (quality findings): TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | STUDY | COMPARISON | FOREIGN_REMNANT | SECTIONACCENTS_LANGUAGE.",
  "Non-error verdicts (do NOT count as quality findings): SOURCE_LV_ISSUE | DE_SOURCE_ISSUE | NEEDS_REVIEW | STYLE_ONLY | PROJECT_CONVENTION.",
  "DE_SOURCE_ISSUE = possible German source problem; do not suggest DE changes.",
  "STYLE_ONLY = Czech correct but stylistic preference — NOT a finding.",
  "PROJECT_CONVENTION = flashcard lv differs from study.translation by design — NOT error unless semantically wrong.",
  "Flag foreign-language remnants (Latvian, Polish, Slovak, Bosnian, etc.) in Czech fields as FOREIGN_REMNANT severity HIGH.",
  "Flag references to 'Lotyši/Lotyšsko' when pedagogically about Latvian learners — acceptable if explaining Czech vs German; flag if wrong language named.",
  "Do NOT suggest changes to German (DE) fields.",
  "Check natural modern Czech, correct German sense in context, grammar (cases, gender, verb aspects), collocations, register for A1/A2.",
  "Keep reason under 140 chars. proposedCs must be exact replacement text.",
  "PASS items may be compact.",
].join("\n");

let client;
function getClient() {
  if (!client) {
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return client;
}

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
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
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
  const severity = String(item.severity || "MEDIUM").toUpperCase();
  const category = String(item.category || item.verdict || "TRANSLATION").toUpperCase();
  return {
    cardId: item.cardId,
    field: item.field || item.path || "lv",
    severity,
    category,
    de: item.de || "",
    lvSource: item.lvSource || item.lv || "",
    currentCs: item.currentCs || item.currentText || item.existingCsText || item.csText || "",
    proposedCs: item.proposedCs || item.recommendedFix || item.proposedFix || "",
    reason: item.reason || item.shortReason || item.problem || "",
    confidence: item.confidence || "medium",
    status: "FINDING",
  };
}

function parseLunaAuditResponse(raw, cardIds) {
  if (!raw || typeof raw !== "string") {
    throw new Error("Luna audit kļūda: tukša atbilde.");
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna audit kļūda: nederīgs JSON (${error.message}).`);
  }
  const items = parsed.items || parsed.findings || [];
  if (!Array.isArray(items)) {
    throw new Error("Luna audit kļūda: atbilde nesatur items masīvu.");
  }

  const results = [];
  const responded = new Set();
  for (const item of items) {
    const normalized = normalizeItem(item);
    if (!normalized) continue;
    responded.add(normalized.cardId);
    results.push(normalized);
  }

  for (const cardId of cardIds) {
    if (!responded.has(cardId)) {
      results.push({ cardId, status: "PASS", field: "lv" });
    }
  }

  const findings = results.filter((r) => r.status === "FINDING");
  const passCount = results.filter((r) => r.status === "PASS").length;
  return { results, findings, passCount };
}

async function auditCardsBatch(options) {
  const {
    cards,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    auditType = "full_linguistic",
  } = options;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error("cards masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();

  const cardIds = cards.map((c) => c.cardId);
  const payload = { auditType, cards };

  const input = [
    "Full CS-DE A1/A2 linguistic audit. Return JSON items array. PASS for correct cards; findings only for real issues.",
    JSON.stringify(payload),
  ].join("\n\n");

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(cards.length);
  }

  const response = await getClient().responses.create({
    model,
    input: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: input },
    ],
    text: { format: { type: "json_object" } },
  });

  if (stats) addUsage(stats, response.usage);

  const raw = response.output_text;
  const parsed = parseLunaAuditResponse(raw, cardIds);
  if (stats) {
    stats.findingsCount += parsed.findings.length;
    stats.passCount += parsed.passCount;
  }
  if (batchLabel) {
    console.error(`[${batchLabel}] cards=${cards.length} findings=${parsed.findings.length} pass=${parsed.passCount}`);
  }
  return parsed;
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  createStats,
  assertApiKey,
  recordRetryReason,
  auditCardsBatch,
  parseLunaAuditResponse,
  normalizeItem,
};
