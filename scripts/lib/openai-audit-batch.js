require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-terra";

const SYSTEM_PROMPT = [
  "You are an independent linguistic quality auditor for a German language learning app (BS-DE).",
  "You audit Bosnian translations against Latvian source text and German context.",
  "You receive JSON with cards to audit. Each card has cardId, field/path, lvSource, bsText, and deContext.",
  "Study cards may include additional study fields (explanation, examples, comparison, tip, important, translation).",
  "Return ONLY valid JSON: { \"findings\": [ ... ] }.",
  "Report findings ONLY for real issues. Do not invent problems.",
  "If Luna's translation is correct and natural Bosnian, report nothing for that card/field.",
  "Severity levels: CRITICAL (data integrity, wrong meaning, DE mismatch), HIGH (clear translation/study error), MEDIUM (real language/naturalness/pedagogy issue), WARNING (doubtful case, not proven error).",
  "Each finding must include: cardId, field, severity, existingBsText, problem, recommendedFix, justification.",
  "Do not flag correct Bosnian variants just because another synonym exists.",
  "Do not modify or suggest changes to German (DE) content.",
  "For study cards, apply Learning First: explanations must help understand German word usage.",
  "Check semantic parity LV→BS, natural Bosnian, grammar, and B1-appropriate register.",
  "Flag LV or EN remnants in BS text fields.",
  "For sectionAccents context, note if pedagogically important highlights may be missing.",
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

function parseAuditResponse(raw) {
  if (!raw || typeof raw !== "string") {
    throw new Error("OpenAI audit kļūda: tukša atbilde.");
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`OpenAI audit kļūda: nederīgs JSON (${error.message}).`);
  }
  if (!parsed || !Array.isArray(parsed.findings)) {
    throw new Error("OpenAI audit kļūda: atbilde nesatur findings masīvu.");
  }
  return parsed.findings.map((f) => ({
    cardId: f.cardId || f.id || "",
    field: f.field || f.path || "",
    severity: String(f.severity || "WARNING").toUpperCase(),
    existingBsText: f.existingBsText || f.bsText || "",
    problem: f.problem || f.issue || "",
    recommendedFix: f.recommendedFix || f.fix || "",
    justification: f.justification || f.reason || "",
  }));
}

async function auditCardsBatch(options) {
  const {
    cards,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    auditType = "translation",
  } = options;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error("cards masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();

  const payload = { auditType, cards };

  const input = [
    "Audit the following Bosnian translations.",
    "Return valid JSON with a findings array (empty if all OK).",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const findings = parseAuditResponse(response.output_text);

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(cards.length);
    stats.findingsCount += findings.length;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  audit ${batchLabel}: ${cards.length} cards, findings=${findings.length}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  return { findings, usage: response.usage || null };
}

function estimateCostUsd(stats) {
  const inputRate = 0.25;
  const cachedInputRate = 0.025;
  const outputRate = 2.0;
  const uncachedInput = Math.max(0, stats.inputTokens - stats.cachedInputTokens);
  return (
    (uncachedInput / 1_000_000) * inputRate
    + (stats.cachedInputTokens / 1_000_000) * cachedInputRate
    + (stats.outputTokens / 1_000_000) * outputRate
  );
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  createStats,
  auditCardsBatch,
  estimateCostUsd,
  recordRetryReason,
  parseAuditResponse,
};
