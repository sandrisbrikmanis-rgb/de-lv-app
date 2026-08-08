require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const MEDIUM_SYSTEM_PROMPT = [
  "You are a compact BS-DE B1 medium-quality reviewer (Bosnian translations of German B1 vocabulary).",
  "Evaluate each candidate in context: DE meaning first, then LV source, then current BS text.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For EACH candidate return one item with: cardId, field, verdict, correctedText (only if FIX), shortReason.",
  "Verdict must be exactly one of: FIX, KEEP, STYLE_ONLY, SOURCE_LV_ISSUE, DE_READ_ONLY, NEEDS_REVIEW.",
  "FIX = real BS error (wrong meaning, grammar, unnatural form, wrong DE-context translation).",
  "KEEP = current BS is correct.",
  "STYLE_ONLY = alternative is stylistically better but current BS is not wrong.",
  "SOURCE_LV_ISSUE = BS matches DE but LV source is problematic — do NOT suggest BS change.",
  "DE_READ_ONLY = finding targets German field that must stay German.",
  "NEEDS_REVIEW = cannot decide safely.",
  "Do NOT flag correct Bosnian synonyms. Do NOT change German fields.",
  "Prefer standard Bosnian (ijekavian). Avoid ekavisms/serbisms when clear normative form exists.",
  "shortReason max 100 chars. No long explanations.",
].join("\n");

const VALID_VERDICTS = new Set([
  "FIX", "KEEP", "STYLE_ONLY", "SOURCE_LV_ISSUE", "DE_READ_ONLY", "NEEDS_REVIEW",
]);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function createMediumStats() {
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
    verdictCounts: {},
    candidatesAudited: 0,
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

function parseMediumVerdictResponse(raw, expectedKeys) {
  if (!raw || typeof raw !== "string") {
    throw new Error("Luna medium audit: tukša atbilde.");
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna medium audit: nederīgs JSON (${error.message}).`);
  }
  const items = parsed.items || parsed.verdicts || [];
  if (!Array.isArray(items)) {
    throw new Error("Luna medium audit: atbilde nesatur items masīvu.");
  }

  const byKey = new Map();
  for (const item of items) {
    if (!item?.cardId || !item?.field) continue;
    const verdict = String(item.verdict || "NEEDS_REVIEW").toUpperCase();
    const normalized = VALID_VERDICTS.has(verdict) ? verdict : "NEEDS_REVIEW";
    const key = `${item.cardId}|${item.field}`;
    byKey.set(key, {
      cardId: item.cardId,
      field: item.field,
      verdict: normalized,
      correctedText: normalized === "FIX" ? String(item.correctedText || "").trim() : "",
      shortReason: String(item.shortReason || item.reason || "").slice(0, 120),
      severity: item.severity || null,
    });
  }

  const verdicts = [];
  for (const key of expectedKeys) {
    if (byKey.has(key)) {
      verdicts.push(byKey.get(key));
    } else {
      const [cardId, field] = key.split("|");
      verdicts.push({
        cardId,
        field,
        verdict: "KEEP",
        correctedText: "",
        shortReason: "absent_from_response_assumed_keep",
        severity: null,
      });
    }
  }
  return verdicts;
}

async function auditMediumBatch(options) {
  const {
    candidates,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    issueType = "mixed",
  } = options;

  if (!Array.isArray(candidates) || candidates.length === 0) {
    throw new Error("candidates masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();

  const payload = {
    auditType: "medium_quality",
    issueType,
    candidates: candidates.map((c) => ({
      cardId: c.cardId,
      field: c.field,
      de: c.de,
      deArticle: c.deArticle || null,
      lvSource: c.lvSource || "",
      currentText: c.currentText || "",
      historicalProblem: c.problem || "",
      historicalFix: c.recommendedFix || "",
    })),
  };

  const expectedKeys = candidates.map((c) => `${c.cardId}|${c.field}`);

  const input = [
    "Medium quality review. Return compact JSON items array with verdict per candidate.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: MEDIUM_SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const verdicts = parseMediumVerdictResponse(response.output_text, expectedKeys);

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(candidates.length);
    stats.candidatesAudited += candidates.length;
    addUsage(stats, response.usage);
    for (const v of verdicts) {
      stats.verdictCounts[v.verdict] = (stats.verdictCounts[v.verdict] || 0) + 1;
    }
    if (batchLabel) {
      const fixCount = verdicts.filter((v) => v.verdict === "FIX").length;
      process.stdout.write(
        `  luna-medium ${batchLabel}: ${candidates.length} candidates, FIX=${fixCount}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  return { verdicts, usage: response.usage || null };
}

module.exports = {
  DEFAULT_MODEL,
  MEDIUM_SYSTEM_PROMPT,
  VALID_VERDICTS,
  createMediumStats,
  auditMediumBatch,
  recordRetryReason,
  parseMediumVerdictResponse,
};
