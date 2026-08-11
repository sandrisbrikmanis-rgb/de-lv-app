const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });
const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const VALIDATION_PROMPT = [
  "You are GPT-5.6 Luna re-validating CRITICAL findings from a CS-DE A1 post-repair audit.",
  "Compare each audit finding against the CURRENT production card snapshot provided.",
  "Return ONLY valid JSON: { \"validations\": [ ... ] }.",
  "For each item return:",
  "findingId, cardId, field, validationStatus, severity, confidence, reason,",
  "currentCs (exact production text now), proposedCs (only if CONFIRMED_REAL), de.",
  "Allowed validationStatus values ONLY:",
  "CONFIRMED_REAL | FALSE_POSITIVE | STALE_ALREADY_FIXED | DE_SOURCE_ISSUE | STRUCTURAL_ISSUE | NEEDS_OWNER_REVIEW",
  "Rules:",
  "- CONFIRMED_REAL: Czech production text is genuinely wrong vs German DE meaning; propose exact fix.",
  "- FALSE_POSITIVE: audit finding is linguistically wrong or not a real error.",
  "- STALE_ALREADY_FIXED: production already matches proposed fix or issue no longer exists.",
  "- DE_SOURCE_ISSUE: problem is in German/LV source, not Czech production.",
  "- STRUCTURAL_ISSUE: schema/parity/missing field, not linguistic Czech error.",
  "- NEEDS_OWNER_REVIEW: cannot decide safely.",
  "Do NOT change severity unless clearly warranted; keep CRITICAL if CONFIRMED_REAL.",
  "Foreign remnant findings: check if LV/PL/SK contamination is real in Czech field.",
  "Deterministic foreign-remnant flags on valid Czech diacritics = likely FALSE_POSITIVE.",
  "Keep reason under 200 chars.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
}

async function validateCriticalBatch(items, stats) {
  assertApiKey();
  const payload = { auditType: "critical_revalidation", items };
  const input = [
    "Re-validate these CRITICAL audit findings against current production. Return JSON object with validations array.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: VALIDATION_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  if (stats) {
    stats.requestCount += 1;
    stats.totalTokens += response.usage?.total_tokens || 0;
  }

  let parsed;
  try {
    parsed = JSON.parse(response.output_text);
  } catch (e) {
    throw new Error(`Luna validation JSON error: ${e.message}`);
  }
  return parsed.validations || parsed.items || [];
}

module.exports = { DEFAULT_MODEL, validateCriticalBatch };
