const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });
const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const HIGH_VALIDATION_PROMPT = [
  "You are GPT-5.6 Luna validating CS-DE A1 HIGH findings from post-repair audit against CURRENT production.",
  "CRITICAL repair cycle is CLOSED. Validate each HIGH finding against live production, not old audit snapshot.",
  "Return ONLY valid JSON: { \"validations\": [ ... ] }.",
  "For EACH input findingId return exactly one validation object:",
  "findingId, cardId, field, validationStatus, severity, confidence, reason,",
  "currentCs, proposedCs (only if CONFIRMED_REAL — must be exact full replacement text, no placeholders),",
  "canonicalFindingId (only if DUPLICATE).",
  "Allowed validationStatus ONLY:",
  "CONFIRMED_REAL | FALSE_POSITIVE | STALE_ALREADY_FIXED | DUPLICATE | DE_SOURCE_ISSUE | PRE_EXISTING_STRUCTURAL_GAP | NEEDS_OWNER_REVIEW.",
  "Rules:",
  "- CONFIRMED_REAL: genuine current CS error (wrong meaning, grammar, register, foreign remnant, misleading study text).",
  "- FALSE_POSITIVE: current CS is correct or acceptable; do NOT flag stylistic preference alone.",
  "- STALE_ALREADY_FIXED: audit currentCs no longer matches production (e.g. after CRITICAL repair).",
  "- DUPLICATE: same production defect as another finding; set canonicalFindingId.",
  "- DE_SOURCE_ISSUE: problem is DE/LV source, not fixable in CS without DE change.",
  "- PRE_EXISTING_STRUCTURAL_GAP: finding only because CS lacks Study card vs LV (10 documented gap cards).",
  "- NEEDS_OWNER_REVIEW: cannot decide safely; no placeholder proposedCs.",
  "Study gap cards: a1-Besuch-87, a1-besuchen-89, a1-Fußball-218, a1-ganz-219, a1-gefallen-225,",
  "a1-Geschichte-233, a1-Geschwister-234, a1-Großeltern-251, a1-Hand-267, a1-hübsch-288.",
  "If audit references old value but production already has OWNER repair from CRITICAL cycle: STALE_ALREADY_FIXED.",
  "Foreign remnant HIGH: validate if real LV/PL/SK contamination in Czech field.",
  "Do NOT suggest DE changes. Keep reason under 200 chars.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
}

async function validateHighBatch(items, stats, batchLabel) {
  assertApiKey();
  const payload = { auditType: "high_validation", items };
  const input = [
    "Validate these HIGH audit findings against current production cards. Return JSON object with validations array.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: HIGH_VALIDATION_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  if (stats) {
    stats.requestCount += 1;
    stats.totalTokens += response.usage?.total_tokens || 0;
    if (batchLabel) {
      process.stdout.write(
        `  luna high ${batchLabel}: ${items.length} findings, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  let parsed;
  try {
    parsed = JSON.parse(response.output_text);
  } catch (e) {
    throw new Error(`Luna HIGH validation JSON error: ${e.message}`);
  }
  return parsed.validations || parsed.items || [];
}

module.exports = { DEFAULT_MODEL, validateHighBatch };
