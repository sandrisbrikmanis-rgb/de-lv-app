const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });
const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const MICRO_REGRESSION_PROMPT = [
  "You are GPT-5.6 Luna performing CS-DE A1 CRITICAL micro-regression after gala repair.",
  "Audit FULL card context — not only the repaired field. Check if repair is linguistically correct",
  "and did not introduce new contradictions, broken Study meaning, or new CRITICAL issues.",
  "Return ONLY valid JSON: { \"results\": [ ... ] }.",
  "For each card return:",
  "cardId, auditType, validationStatus, severity, confidence, reason, findings (array).",
  "Each finding in findings[] may have: field, validationStatus, severity, currentCs, proposedCs, reason, confidence.",
  "Allowed validationStatus: CONFIRMED_REAL | FALSE_POSITIVE | STALE | DE_SOURCE_ISSUE | NEEDS_OWNER_REVIEW.",
  "For FALSE_POSITIVE control cards, confirm documented FALSE_POSITIVE still holds.",
  "a1-in: study.sectionAccents.examples[0].lv.purple[0]=Berlīnē is explicit accent LV field — FALSE_POSITIVE for foreign remnant.",
  "a1-Baum-74: lv=Strom is correct Czech for Baum — FALSE_POSITIVE.",
  "Do NOT suggest DE changes. severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "CONFIRMED_REAL CRITICAL only for genuine new/regression issues in repaired cards.",
  "If card is clean after repair: validationStatus=STALE or no CRITICAL findings.",
  "Keep reason under 200 chars.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
}

async function auditMicroRegressionBatch(cards, stats, batchLabel) {
  assertApiKey();
  const payload = { auditType: "critical_micro_regression", cards };
  const input = [
    "Micro-regression audit after CRITICAL gala repair. Return JSON object with results array.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: MICRO_REGRESSION_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  if (stats) {
    stats.requestCount += 1;
    stats.totalTokens += response.usage?.total_tokens || 0;
    if (batchLabel) {
      process.stdout.write(
        `  luna micro-regression ${batchLabel}: ${cards.length} cards, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  let parsed;
  try {
    parsed = JSON.parse(response.output_text);
  } catch (e) {
    throw new Error(`Luna micro-regression JSON error: ${e.message}`);
  }
  return parsed.results || parsed.cards || [];
}

module.exports = { DEFAULT_MODEL, auditMicroRegressionBatch };
