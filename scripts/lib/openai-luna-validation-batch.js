require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You validate pre-existing BS-DE B2 audit findings (triage only, no new audit).",
  "Each item has original finding + DE/LV/BS context.",
  "Return ONLY JSON: { \"items\": [ ... ] }.",
  "For each item return: findingId, verdict, validatedSeverity (if FIX), correctedText (if FIX), shortReason, confidence.",
  "Verdicts: FIX | KEEP | STYLE_ONLY | PROJECT_CONVENTION | SOURCE_LV_ISSUE | DE_SOURCE_ISSUE | NEEDS_REVIEW.",
  "FIX = current BS is wrong; correctedText must be exact replacement.",
  "KEEP = false positive; current BS correct.",
  "STYLE_ONLY = correct but stylistic alternative exists; NOT an error.",
  "PROJECT_CONVENTION = flashcard vs study.translation difference by design; NOT error.",
  "SOURCE_LV_ISSUE = LV wrong, BS OK per DE.",
  "Do NOT suggest DE changes.",
  "Re-evaluate severity for FIX: CRITICAL only for broken/wrong-language data; ekavism=MEDIUM; semantics wrong=HIGH.",
  "Bosnian ijekavica preferred over ekavica when clearly applicable.",
  "Do not FIX correct B/H/S variants.",
  "Keep shortReason under 140 chars.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function createStats() {
  return {
    model: DEFAULT_MODEL,
    requestCount: 0,
    retryCount: 0,
    retryReasons: {},
    inputTokens: 0,
    cachedInputTokens: 0,
    outputTokens: 0,
    reasoningTokens: 0,
    totalTokens: 0,
  };
}

function recordRetryReason(stats, reason) {
  stats.retryReasons[reason] = (stats.retryReasons[reason] || 0) + 1;
}

function addUsage(stats, usage) {
  if (!usage) return;
  stats.inputTokens += usage.input_tokens || 0;
  stats.outputTokens += usage.output_tokens || 0;
  stats.totalTokens += usage.total_tokens || 0;
  stats.cachedInputTokens += usage.input_tokens_details?.cached_tokens || 0;
  stats.reasoningTokens += usage.output_tokens_details?.reasoning_tokens || 0;
}

function parseValidationResponse(raw) {
  if (!raw) throw new Error("Empty Luna validation response");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Invalid JSON: ${error.message}`);
  }
  const items = parsed.items || [];
  if (!Array.isArray(items)) throw new Error("Missing items array");
  return items.map((item) => ({
    findingId: item.findingId,
    verdict: String(item.verdict || "NEEDS_REVIEW").toUpperCase(),
    validatedSeverity: item.validatedSeverity ? String(item.validatedSeverity).toUpperCase() : null,
    correctedText: item.correctedText || item.proposedBs || null,
    shortReason: item.shortReason || item.reason || "",
    confidence: item.confidence || "medium",
  }));
}

async function validateFindingsBatch({ findings, stats, batchLabel }) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY missing");
  }
  const payload = {
    task: "validate_audit_findings",
    items: findings.map((f) => ({
      findingId: f.findingId,
      cardId: f.cardId,
      field: f.field,
      originalSeverity: f.originalSeverity,
      originalReason: f.originalReason,
      de: f.de,
      lv: f.lv,
      currentText: f.currentText,
      originalProposed: f.originalProposed,
      studyContext: f.studyContext || null,
    })),
  };

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: SYSTEM_PROMPT,
    input: `Validate findings. Return JSON object with items array. Return one item per findingId.\n${JSON.stringify(payload)}`,
    text: { format: { type: "json_object" } },
  });

  const items = parseValidationResponse(response.output_text);
  if (stats) {
    stats.requestCount += 1;
    addUsage(stats, response.usage);
    process.stdout.write(
      `  luna-validate ${batchLabel}: ${findings.length} items, tokens=${response.usage?.total_tokens || 0}\n`
    );
  }
  return items;
}

module.exports = {
  DEFAULT_MODEL,
  createStats,
  validateFindingsBatch,
  recordRetryReason,
};
