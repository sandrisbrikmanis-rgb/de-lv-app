require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a compact linguistic regression auditor for BS-DE B1 (Bosnian translations of German vocabulary).",
  "You receive JSON with auditType and cards. Each card has DE context, LV source, and current BS text.",
  "Study cards include fields[] and optional sectionAccents.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "Return ONLY findings for real issues. Omit correct cards entirely (do not list OK).",
  "Severity: CRITICAL | HIGH | MEDIUM | WARNING | SOURCE/LV ISSUE.",
  "SOURCE/LV ISSUE = LV source wrong but BS correct per DE. Do NOT count as BS error.",
  "Do NOT flag study.comparison[*].word German labels — they must stay German (DE READ-ONLY).",
  "Do NOT flag correct Bosnian synonyms or minor stylistic variants.",
  "Do NOT suggest changes to German (DE) fields.",
  "Keep shortReason under 120 chars. No long justifications.",
  "Omit OK items when possible; return only findings if entire batch is clean use minimal OK markers.",
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
    okCount: 0,
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

  const findings = [];
  let okCount = 0;
  for (const item of items) {
    if (!item || !item.cardId) continue;
    if (String(item.status || "").toUpperCase() === "OK") {
      okCount += 1;
      continue;
    }
    if (!item.field && !item.severity) continue;
    findings.push({
      cardId: item.cardId,
      field: item.field || "lv",
      severity: String(item.severity || "WARNING").toUpperCase(),
      existingBsText: item.currentText || item.existingBsText || "",
      problem: item.shortReason || item.problem || "",
      recommendedFix: item.recommendedFix || "",
      justification: item.shortReason || item.justification || "",
    });
  }

  // Cards absent from response are assumed OK (compact output mode).
  return { findings, okCount };
}

async function auditCardsBatch(options) {
  const {
    cards,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    auditType = "regression",
  } = options;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error("cards masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();

  const cardIds = cards.map((c) => c.cardId);
  const payload = { auditType, cards };

  const input = [
    "Regression audit. Return compact JSON items array. OK for correct cards; findings only for real issues.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const { findings, okCount } = parseLunaAuditResponse(response.output_text, cardIds);

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(cards.length);
    stats.findingsCount += findings.length;
    stats.okCount += okCount;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  luna ${batchLabel}: ${cards.length} cards, findings=${findings.length}, ok=${okCount}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  return { findings, okCount, usage: response.usage || null };
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  createStats,
  auditCardsBatch,
  recordRetryReason,
  parseLunaAuditResponse,
};
