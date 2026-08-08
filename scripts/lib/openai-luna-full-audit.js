require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for BS-DE B2 (Bosnian translations of German vocabulary).",
  "Audit Bosnian text against German meaning (primary) and Latvian source (secondary context).",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each card/field: if correct, return { cardId, status: \"PASS\" }.",
  "For real issues return finding objects with: cardId, field, severity, category, de, lv, currentBs, proposedBs, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category (quality findings): TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | STUDY | COMPARISON | SECTIONACCENTS_LANGUAGE.",
  "Non-error verdicts (do NOT count as quality findings): SOURCE_LV_ISSUE | DE_SOURCE_ISSUE | NEEDS_REVIEW | STYLE_ONLY | PROJECT_CONVENTION.",
  "SOURCE_LV_ISSUE = LV conflicts with DE but BS is correct per DE.",
  "DE_SOURCE_ISSUE = possible DE source problem; do not suggest DE changes.",
  "STYLE_ONLY = BS correct; Luna would prefer different style — NOT a quality finding.",
  "PROJECT_CONVENTION = flashcard lv differs from study.translation by design (Learning First) — NOT error unless semantically wrong.",
  "Do NOT flag bs !== study.translation unless semantically wrong, contradictory, or wrong German word sense.",
  "Do NOT flag correct Bosnian B/H/S variants if grammatically correct and natural.",
  "Check ekavisms vs ijekavica in Bosnian standard (vreme→vrijeme, uspeh→uspjeh, etc.) only when contextually wrong.",
  "Do NOT suggest changes to German (DE) fields. comparison.word stays German.",
  "Keep reason under 140 chars. proposedBs must be exact replacement text for PIRMS→PĒC fixes.",
  "Omit verbose essays. PASS items may be compact.",
].join("\n");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
    throw new Error("OPENAI_API_KEY nav atrasta. Pārbaudi lokālo .env failu.");
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
    lv: item.lv || item.lvSource || "",
    currentBs: item.currentBs || item.currentText || item.existingBsText || item.bsText || "",
    proposedBs: item.proposedBs || item.recommendedFix || item.proposedFix || "",
    reason: item.reason || item.shortReason || item.problem || "",
    confidence: item.confidence || "medium",
    status: "FINDING",
  };
}

function parseLunaFullAuditResponse(raw, cardIds) {
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

  // Cards absent from response assumed PASS (compact mode).
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
    "Full B2 linguistic audit. Return JSON items array. PASS for correct cards; findings only for real issues.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const { results, findings, passCount } = parseLunaFullAuditResponse(response.output_text, cardIds);

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
  parseLunaFullAuditResponse,
};
