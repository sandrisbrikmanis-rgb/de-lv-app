const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });
const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const FINAL_CLOSURE_PROMPT = [
  "You are GPT-5.6 Luna performing CS-DE A1 HIGH final closure check (read-only).",
  "Audit ONLY the two cards provided: a1-können and a1-laufen after Final Micro-Repair #2.",
  "Return ONLY valid JSON: { \"results\": [ ... ] }.",
  "For each card: cardId, auditType, validationStatus, pass (boolean), reason, findings (array).",
  "Each finding: field, validationStatus, reason, confidence.",
  "Allowed validationStatus:",
  "CONFIRMED_REPAIR_REGRESSION | PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR | FALSE_POSITIVE | DE_SOURCE_ISSUE | NEEDS_OWNER_REVIEW.",
  "CONFIRMED_REPAIR_REGRESSION only if problem was caused by HIGH repair or micro-repair #2 and persists.",
  "PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR for unrelated old issues (do not block closure).",
  "a1-können checks:",
  "- study.explanation[0] must be: Hlavní myšlenka: können znamená umět nebo moci něco udělat.",
  "- No vědět in explanation[0]; moci is semantically correct for können",
  "- csMain and study.translation consistent with Umět • Moci",
  "- No new contradiction with study.translation",
  "a1-laufen checks:",
  "- csMain and study.translation both Běžet • Fungovat",
  "- Previous regression (csMain Provozovat vs translation Fungovat) must be resolved",
  "- sectionAccents consistent with repaired meanings",
  "Do NOT suggest DE changes. Keep reason under 220 chars.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
}

async function auditFinalClosureBatch(cards, stats, batchLabel) {
  assertApiKey();
  const payload = { auditType: "high_final_closure", cards };
  const input = [
    "HIGH final closure check after micro-repair #2. Return JSON object with results array.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: FINAL_CLOSURE_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  if (stats) {
    stats.requestCount += 1;
    stats.totalTokens += response.usage?.total_tokens || 0;
    if (batchLabel) {
      process.stdout.write(
        `  luna final-closure ${batchLabel}: ${cards.length} cards, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  let parsed;
  try {
    parsed = JSON.parse(response.output_text);
  } catch (e) {
    throw new Error(`Luna final closure JSON error: ${e.message}`);
  }
  return parsed.results || parsed.cards || [];
}

module.exports = { DEFAULT_MODEL, auditFinalClosureBatch };
