const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });
const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const HIGH_MICRO_REGRESSION_02_PROMPT = [
  "You are GPT-5.6 Luna performing CS-DE A1 HIGH micro-regression #2 after gala regression repair (read-only).",
  "Audit FULL card context for the 13 cards touched by the 18-field gala repair.",
  "Each card payload includes repairedFields with PIRMS and PEC for changed paths.",
  "Return ONLY valid JSON: { \"results\": [ ... ] }.",
  "For each card: cardId, auditType, validationStatus, severity, confidence, reason, findings (array).",
  "Each finding: field, validationStatus, severity, currentCs, proposedCs, reason, confidence.",
  "Allowed validationStatus:",
  "CONFIRMED_REPAIR_REGRESSION | PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR | FALSE_POSITIVE | DE_SOURCE_ISSUE | NEEDS_OWNER_REVIEW | STALE.",
  "CONFIRMED_REPAIR_REGRESSION only if problem was caused by HIGH repair or should have been fixed by gala repair but persists.",
  "PRE_EXISTING_NOT_CAUSED_BY_HIGH_REPAIR for unrelated old issues.",
  "Special focus:",
  "- a1-kennen-study / a1-können / a1-seite / a1-sich: csMain vs study.translation consistency",
  "- a1-lassen / a1-laufen / a1-sollen / a1-sie-study: sectionAccents must not retain old values (Nechal, Pobyt, Musíte, Vaříš, Spustit, Provozovat)",
  "- a1-essen: study.explanation must be 4-element array, essen vs das Essen distinction, no déšť",
  "- a1-sprechen-study: Ich spreche Deutsch = Mluvím německy",
  "- a1-auch-study: Ich komme auch = Já také přijdu; Sie arbeitet auch hier = Ona zde také pracuje; no example swap",
  "- a1-ins: comparison[4].meaning for zum",
  "Do NOT suggest DE changes. Keep reason under 220 chars.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
}

async function auditHighMicroRegression02Batch(cards, stats, batchLabel) {
  assertApiKey();
  const payload = { auditType: "high_micro_regression_02", cards };
  const input = [
    "HIGH micro-regression #2 after gala regression repair. Return JSON object with results array.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: HIGH_MICRO_REGRESSION_02_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  if (stats) {
    stats.requestCount += 1;
    stats.totalTokens += response.usage?.total_tokens || 0;
    if (batchLabel) {
      process.stdout.write(
        `  luna high-mr02 ${batchLabel}: ${cards.length} cards, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  let parsed;
  try {
    parsed = JSON.parse(response.output_text);
  } catch (e) {
    throw new Error(`Luna HIGH micro-regression #2 JSON error: ${e.message}`);
  }
  return parsed.results || parsed.cards || [];
}

module.exports = { DEFAULT_MODEL, auditHighMicroRegression02Batch };
