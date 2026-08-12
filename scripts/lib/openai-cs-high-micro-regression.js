const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });
const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const HIGH_MICRO_REGRESSION_PROMPT = [
  "You are GPT-5.6 Luna performing CS-DE A1 HIGH post-repair micro-regression (read-only).",
  "Audit FULL card context for cards changed in the HIGH repair cycle.",
  "Check if applied OWNER repairs are linguistically correct and did not introduce regressions.",
  "Return ONLY valid JSON: { \"results\": [ ... ] }.",
  "For each card return:",
  "cardId, auditType, validationStatus, severity, confidence, reason, findings (array).",
  "Each finding in findings[] may have:",
  "field, validationStatus, severity, currentCs, proposedCs, reason, confidence, relatedFindingId, relatedRepairBlock.",
  "Allowed validationStatus:",
  "CONFIRMED_REPAIR_REGRESSION | PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR | FALSE_POSITIVE | DE_SOURCE_ISSUE | NEEDS_OWNER_REVIEW | STALE.",
  "CONFIRMED_REPAIR_REGRESSION only if the HIGH repair caused or preserved a wrong CS meaning/grammar.",
  "PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR for unrelated pre-existing issues.",
  "Do NOT suggest DE changes. Do NOT propose new repairs unless CONFIRMED_REPAIR_REGRESSION.",
  "Special checks:",
  "- a1-das study.comparison[2].meaning=Které for welches",
  "- a1-essen-study study.explanation must be array of 4 Czech strings",
  "- a1-fahren: jet/jezdit/vézt/odvézt usage",
  "- a1-über: nad/o/přes context split",
  "- a1-zu/a1-zum preposition meanings",
  "Keep reason under 220 chars.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
}

async function auditHighMicroRegressionBatch(cards, stats, batchLabel) {
  assertApiKey();
  const payload = { auditType: "high_post_repair_micro_regression", cards };
  const input = [
    "HIGH post-repair micro-regression. Return JSON object with results array.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: HIGH_MICRO_REGRESSION_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  if (stats) {
    stats.requestCount += 1;
    stats.totalTokens += response.usage?.total_tokens || 0;
    if (batchLabel) {
      process.stdout.write(
        `  luna high micro-regression ${batchLabel}: ${cards.length} cards, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  let parsed;
  try {
    parsed = JSON.parse(response.output_text);
  } catch (e) {
    throw new Error(`Luna HIGH micro-regression JSON error: ${e.message}`);
  }
  return parsed.results || parsed.cards || [];
}

module.exports = { DEFAULT_MODEL, auditHighMicroRegressionBatch };
