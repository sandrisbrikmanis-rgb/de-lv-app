require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are the final verify regression auditor for BS-DE B2 (Bosnian translations of German vocabulary).",
  "Context: After 1072 validated fixes and 67 regression fixes, audit ONLY whether each scoped card is NOW correct.",
  "Primary chain: DE meaning → LV author intent → current BS.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "",
  "For CORRECT cards: { cardId, status: \"PASS\" } only. No reasoning for PASS.",
  "",
  "For issues: cardId, field, verdict, severity, category, de, lv, currentBs, proposedBs, reason, confidence.",
  "",
  "Verdicts:",
  "- FIX = real BS error (requires exact proposedBs).",
  "- STYLE_ONLY = correct but stylistic preference — NOT quality finding.",
  "- PROJECT_CONVENTION = matches Learning First / project methodology — NOT error.",
  "- SOURCE_LV_ISSUE = LV source problem, not BS.",
  "- DE_SOURCE_ISSUE = possible DE source issue.",
  "- NEEDS_REVIEW = cannot determine safe fix.",
  "",
  "Severity (FIX only): CRITICAL | HIGH | MEDIUM | LOW.",
  "",
  "Rules:",
  "- Goal: is the card semantically, grammatically, linguistically correct NOW? Not 'could Luna write differently'.",
  "- Check appliedFixes[] — verify regression patches are correct and did not introduce contradictions.",
  "- Check full visible BS context: flashcard lv, study fields, examples, comparison, forms, rektion, formsLabel, internal consistency.",
  "- Flashcard single main meaning is valid project convention.",
  "- study.translation may be broader than flashcard lv by design.",
  "- Do NOT flag stylistic synonyms if BS is correct.",
  "- Do NOT suggest DE changes. comparison.word stays German.",
  "- sectionAccents: only LANGUAGE issues if fragment is wrong; fragment removal after text fix is OK.",
  "- FIX without proposedBs → NEEDS_REVIEW.",
  "- Keep reason under 140 chars.",
].join("\n");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function createStats() {
  return {
    model: DEFAULT_MODEL,
    requestCount: 0,
    successfulRequests: 0,
    failedRequests: 0,
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

const NON_ERROR_VERDICTS = new Set([
  "STYLE_ONLY",
  "PROJECT_CONVENTION",
  "SOURCE_LV_ISSUE",
  "DE_SOURCE_ISSUE",
  "NEEDS_REVIEW",
]);

function normalizeItem(item) {
  if (!item || !item.cardId) return null;
  const status = String(item.status || "").toUpperCase();
  if (status === "PASS" || status === "OK") {
    return { cardId: item.cardId, status: "PASS", field: item.field || "lv" };
  }
  const verdict = String(item.verdict || item.category || "FIX").toUpperCase();
  if (verdict === "PASS") {
    return { cardId: item.cardId, status: "PASS", field: item.field || "lv" };
  }
  const severity = String(item.severity || "MEDIUM").toUpperCase();
  const category = String(item.category || "other").toLowerCase();
  return {
    cardId: item.cardId,
    field: item.field || item.path || "lv",
    verdict,
    severity: NON_ERROR_VERDICTS.has(verdict) ? null : severity,
    category,
    de: item.de || "",
    lv: item.lv || item.lvSource || "",
    currentBs: item.currentBs || item.currentText || "",
    proposedBs: item.proposedBs || item.recommendedFix || "",
    reason: item.reason || item.shortReason || "",
    confidence: item.confidence || "medium",
    status: NON_ERROR_VERDICTS.has(verdict) ? verdict : "FINDING",
  };
}

function parseVerifyResponse(raw, cardIds) {
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
    throw new Error("Luna audit kļūda: nav items masīva.");
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
  const otherVerdicts = results.filter((r) => NON_ERROR_VERDICTS.has(r.status));
  return { results, findings, passCount, otherVerdicts };
}

async function auditCardsBatch(options) {
  const {
    cards,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    auditType = "verify_regression",
  } = options;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error("cards masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();

  const cardIds = cards.map((c) => c.cardId);
  const payload = { auditType, cards };

  const input = [
    "Final B2 verify regression. Return JSON items. PASS for correct cards; findings only for real issues.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const { results, findings, passCount, otherVerdicts } = parseVerifyResponse(
    response.output_text,
    cardIds
  );

  if (stats) {
    stats.requestCount += 1;
    stats.successfulRequests += 1;
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

  return { results, findings, passCount, otherVerdicts, usage: response.usage || null };
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  NON_ERROR_VERDICTS,
  createStats,
  auditCardsBatch,
  recordRetryReason,
  parseVerifyResponse,
};
