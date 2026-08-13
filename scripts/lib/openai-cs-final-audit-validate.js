const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });
const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const FINAL_VALIDATION_PROMPT = [
  "You are GPT-5.6 Luna validating CS-DE A1 audit findings against CURRENT production.",
  "This is a FINAL POST-REPAIR audit. Validate each finding against live production, not old snapshots.",
  "Return ONLY valid JSON: { \"validations\": [ ... ] }.",
  "For EACH input findingId return exactly one validation object:",
  "findingId, cardId, field, validationStatus, severity, confidence, reason,",
  "currentCs, proposedCs (only if CONFIRMED_REAL — exact full replacement, no placeholders).",
  "Allowed validationStatus ONLY:",
  "CONFIRMED_REAL | FALSE_POSITIVE | STALE_ALREADY_FIXED | OWNER_KEEP | OWNER_OVERRIDE_FALSE_POSITIVE |",
  "SOURCE_DE_ISSUE | DE_PARITY_ISSUE | MISSING_STUDY_PARITY | VALID_CONTEXT_DIFFERENCE |",
  "CONFIRMED_REPAIR_REGRESSION | NEEDS_OWNER_REVIEW.",
  "Rules:",
  "- CONFIRMED_REAL: genuine current CS error (wrong meaning, grammar, foreign remnant, stale accent, contradiction).",
  "- FALSE_POSITIVE: current CS correct; stylistic/synonym preference only; Learning First acceptable.",
  "- STALE_ALREADY_FIXED: audit currentCs no longer matches production.",
  "- OWNER_OVERRIDE_FALSE_POSITIVE: documented owner keep (e.g. a1-in sectionAccents Berlīnē).",
  "- OWNER_KEEP: explicit owner-approved current text.",
  "- VALID_CONTEXT_DIFFERENCE: cross-dataset or CEFR-level teaching difference, not an error.",
  "- MISSING_STUDY_PARITY: only structural study gap vs LV.",
  "- DE_PARITY_ISSUE / SOURCE_DE_ISSUE: DE/LV source issue, not CS repair.",
  "- CONFIRMED_REPAIR_REGRESSION: repair introduced new semantic error or stale accent.",
  "- NEEDS_OWNER_REVIEW: cannot decide safely.",
  "Study gap cards: a1-Besuch-87, a1-besuchen-89, a1-Fußball-218, a1-ganz-219, a1-gefallen-225,",
  "a1-Geschichte-233, a1-Geschwister-234, a1-Großeltern-251, a1-Hand-267, a1-hübsch-288.",
  "Czech Balkón is valid Czech, not Polish. Czech diacritics are not foreign remnants.",
  "Berlīnē in a1-in sectionAccents = OWNER_OVERRIDE_FALSE_POSITIVE.",
  "Do NOT suggest DE changes. Keep reason under 200 chars.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
}

async function validateFinalBatch(items, stats, batchLabel) {
  assertApiKey();
  const payload = { auditType: "final_post_repair_validation", items };
  const input = [
    "Validate these audit findings against current production. Return JSON object with validations array.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: FINAL_VALIDATION_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  if (stats) {
    stats.requestCount += 1;
    stats.totalTokens += response.usage?.total_tokens || 0;
    if (batchLabel) {
      process.stdout.write(
        `  luna validate ${batchLabel}: ${items.length} findings, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  let parsed;
  try {
    parsed = JSON.parse(response.output_text);
  } catch (e) {
    throw new Error(`Luna final validation JSON error: ${e.message}`);
  }
  return parsed.validations || parsed.items || [];
}

module.exports = { DEFAULT_MODEL, validateFinalBatch };
