require("dotenv").config({ path: require("path").join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for EN-DE B1 (English translations for English learners of German).",
  "You receive JSON with auditType and cards. Each card has DE context, optional LV source gloss, and current EN text (enText or fields[].enText).",
  "Study cards include fields[] and optional sectionAccents.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "Correct and natural current English = PASS (status OK or omit card).",
  "Do not report stylistic alternatives as errors.",
  "Different wording is not automatically better wording.",
  "Do not prefer a synonym unless current text is inaccurate, unnatural, misleading, or pedagogically unsuitable.",
  "For real issues return: cardId, field, severity, currentText, recommendedFix, shortReason.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW | WARNING | DE SOURCE ISSUE.",
  "DE SOURCE ISSUE = German master/source seems wrong but English is correct per DE. Do NOT count as EN error.",
  "Do NOT flag study.comparison[*].word German labels — DE READ-ONLY.",
  "Do NOT suggest changes to German (DE) fields.",
  "Flag Latvian words/phrases or 'in Latvian...' learner-perspective errors in EN fields as HIGH or MEDIUM.",
  "Keep shortReason under 120 chars.",
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

function parseLunaAuditResponse(raw) {
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
      currentEn: item.currentText || item.currentEn || item.existingEnText || "",
      recommendedEn: item.recommendedFix || item.recommendedEn || "",
      reason: item.shortReason || item.problem || "",
    });
  }
  return { findings, okCount };
}

async function auditCardsBatch(options) {
  const { cards, model = DEFAULT_MODEL, stats = null, batchLabel = "", auditType = "en_b1" } = options;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error("cards masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();

  const payload = { auditType, cards };
  const input = [
    "EN-DE B1 linguistic audit. Return compact JSON items array. PASS/OK for correct cards; findings only for real issues.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const { findings, okCount } = parseLunaAuditResponse(response.output_text);

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
