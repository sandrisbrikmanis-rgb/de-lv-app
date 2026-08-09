require("dotenv").config();
const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are an independent OWNER REVIEW adjudicator for EN-DE B2 (British English).",
  "Each item is a Luna audit CANDIDATE — not an automatic error.",
  "Validate independently against German (DE) authority and production EN.",
  "Do NOT rubber-stamp Luna. Reject Luna when current EN is correct, natural, and pedagogically sound.",
  "Return ONLY valid JSON: { \"reviews\": [ ... ] }.",
  "Each review must include: findingId, status, validatedSeverity, recommendedEn, reason, confidence.",
  "status: exactly one of FIX | KEEP | DE_SOURCE_ISSUE | NEEDS_OWNER_REVIEW.",
  "validatedSeverity: CRITICAL | HIGH | MEDIUM | LOW | NONE (use NONE for KEEP false positives).",
  "recommendedEn: exact minimal replacement when FIX; empty string when KEEP; provisional when NEEDS_OWNER_REVIEW.",
  "ownerQuestion: required only for NEEDS_OWNER_REVIEW — state what OWNER must decide.",
  "KEEP when EN is semantically correct even if Luna proposed a synonym or stylistic variant.",
  "FIX only when EN is wrong, misleading, ungrammatical, or contains foreign remnants.",
  "DE_SOURCE_ISSUE when problem is in DE/source layer; do not suggest DE edits.",
  "Learning-first: clear B2 gloss, not dictionary overload.",
  "Keep reason under 160 chars.",
].join("\n");

let client = null;
function getClient() {
  if (!client) client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return client;
}

function createStats() {
  return {
    model: DEFAULT_MODEL,
    requestCount: 0,
    retryCount: 0,
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0,
  };
}

function addUsage(stats, usage) {
  if (!usage) return;
  stats.inputTokens += usage.input_tokens || 0;
  stats.outputTokens += usage.output_tokens || 0;
  stats.totalTokens += usage.total_tokens || 0;
}

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY missing");
}

async function reviewBatch(options) {
  const { items, stats = null, batchLabel = "" } = options;
  assertApiKey();
  const input = [
    "Owner review batch. Return valid json with reviews array for each findingId.",
    JSON.stringify({ items }),
  ].join("\n");

  const response = await getClient().responses.create({
    model: DEFAULT_MODEL,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  let parsed;
  try {
    parsed = JSON.parse(response.output_text);
  } catch (e) {
    throw new Error(`Invalid JSON: ${e.message}`);
  }
  const reviews = parsed.reviews || parsed.items || [];
  if (!Array.isArray(reviews)) throw new Error("Missing reviews array");

  if (stats) {
    stats.requestCount += 1;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  owner-review ${batchLabel}: ${items.length} items, tokens=${response.usage?.total_tokens || 0}\n`,
      );
    }
  }
  return reviews;
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  createStats,
  reviewBatch,
};
