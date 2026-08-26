const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");
const { DEFAULT_MODEL, createStats } = require("./openai-fr-a1-a2-audit");

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for FR-DE B1 (French translations of German B1 vocabulary and study cards).",
  "Audit French text against German meaning (primary authoritative source). Latvian in data/b1.js is reference context only.",
  "The data schema uses field name 'lv' for French native text — project convention, NOT Latvian language.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each card/field: if correct, return { cardId, status: \"PASS\" }.",
  "For real issues return finding objects with:",
  "cardId, field, severity, category, de, pairedGermanText, currentFr, proposedFr, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | PUNCTUATION | REGISTER | NATURALNESS | STUDY | COMPARISON | SECTIONACCENTS_LANGUAGE | FOREIGN_REMNANT | STRUCTURE | SOURCE_DE_ISSUE.",
  "Non-error verdicts (do NOT count as quality findings):",
  "SOURCE_LV_ISSUE | SOURCE_DE_ISSUE | DE_SOURCE_ISSUE | NEEDS_OWNER_REVIEW | STYLE_ONLY | PROJECT_CONVENTION | FALSE_POSITIVE.",
  "Check French: DE–ES semantics, person/number/gender/tense, tu/vous/on, imperatives, être/avoir, prepositions, articles, contractions, elision, liaison hints, accents (éèêëàâùûôîïç), capitalization, punctuation.",
  "French questions/exclamations use standard ? and ! — flag missing or wrong punctuation.",
  "CRITICAL: Latvian/Spanish/English/German fragments in French fields.",
  "Learning First: main lv should be one clear meaning; flag multiple unrelated meanings with / • or commas.",
  "Do NOT suggest DE changes. comparison.word stays German.",
  "Keep reason under 160 chars. proposedFr must be exact replacement text.",
].join("\n");

let client = null;

function getClient() {
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
  if (!client) client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return client;
}

function addUsage(stats, usage) {
  if (!usage) return;
  stats.inputTokens += usage.input_tokens || 0;
  stats.outputTokens += usage.output_tokens || 0;
  stats.totalTokens += usage.total_tokens || 0;
}

function normalizeItem(item) {
  if (!item || !item.cardId) return null;
  const status = String(item.status || "").toUpperCase();
  if (status === "PASS" || status === "OK" || status === "NO_FINDING") {
    return { cardId: item.cardId, status: "PASS", field: item.field || "lv" };
  }
  return {
    cardId: item.cardId,
    field: item.field || item.path || "lv",
    severity: String(item.severity || "MEDIUM").toUpperCase(),
    category: String(item.category || "TRANSLATION").toUpperCase(),
    de: item.de || item.pairedGermanText || "",
    pairedGermanText: item.pairedGermanText || item.de || "",
    lvReference: item.lvReference || item.lvSource || "",
    currentFr: item.currentFr || item.currentEt || item.currentText || "",
    proposedFr: item.proposedFr || item.proposedEt || item.proposedNew || "",
    reason: item.reason || "",
    confidence: item.confidence || "medium",
    status: "FINDING",
  };
}

function parseLunaResponse(raw, cardIds) {
  if (!raw || typeof raw !== "string") throw new Error("Luna audit: empty response");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna audit: invalid JSON (${error.message})`);
  }
  const items = parsed.items || parsed.findings || [];
  if (!Array.isArray(items)) throw new Error("Luna audit: missing items array");

  const results = [];
  const responded = new Set();
  for (const item of items) {
    const normalized = normalizeItem(item);
    if (!normalized) continue;
    responded.add(normalized.cardId);
    results.push(normalized);
  }
  for (const cardId of cardIds) {
    if (!responded.has(cardId)) results.push({ cardId, status: "PASS", field: "lv" });
  }
  const findings = results.filter((r) => r.status === "FINDING");
  const passCount = results.filter((r) => r.status === "PASS").length;
  return { results, findings, passCount };
}

async function auditCardsBatch({ cards, stats, batchLabel, auditType = "full_linguistic", model = DEFAULT_MODEL }) {
  if (!cards.length) throw new Error("cards array empty");
  const cardIds = cards.map((c) => c.cardId);
  const payload = { auditType, dataset: "fr-de-b1", cards };
  const response = await getClient().responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input: [
      "Full FR-DE B1 linguistic audit. Return JSON items array. PASS for correct cards; findings only for real issues.",
      JSON.stringify(payload),
    ].join("\n"),
    text: { format: { type: "json_object" } },
  });
  const { results, findings, passCount } = parseLunaResponse(response.output_text, cardIds);
  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(cards.length);
    stats.findingsCount += findings.length;
    stats.passCount += passCount;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  luna ${batchLabel}: ${cards.length} cards, findings=${findings.length}, pass=${passCount}, tokens=${response.usage?.total_tokens || 0}\n`,
      );
    }
  }
  return { results, findings, passCount, usage: response.usage || null };
}

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE",
  "SOURCE_DE_ISSUE",
  "DE_SOURCE_ISSUE",
  "NEEDS_OWNER_REVIEW",
  "NEEDS_REVIEW",
  "STYLE_ONLY",
  "PROJECT_CONVENTION",
  "FALSE_POSITIVE",
]);

function classifyFindings(findings) {
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const nonError = {};
  const qualityFindings = [];
  for (const f of findings) {
    if (f.status === "PASS") continue;
    const cat = String(f.category || "").toUpperCase();
    if (NON_ERROR_CATEGORIES.has(cat)) {
      nonError[cat] = (nonError[cat] || 0) + 1;
      continue;
    }
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (severity[sev] !== undefined) severity[sev] += 1;
    else severity.MEDIUM += 1;
    qualityFindings.push(f);
  }
  return { severity, nonError, qualityFindings };
}

function mapValidationStatus(finding) {
  const cat = String(finding.category || "").toUpperCase();
  if (NON_ERROR_CATEGORIES.has(cat)) {
    if (cat === "NEEDS_OWNER_REVIEW" || cat === "NEEDS_REVIEW") return "OWNER_REVIEW_REQUIRED";
    return "FALSE_POSITIVE";
  }
  if (cat === "SOURCE_DE_ISSUE" || cat === "DE_SOURCE_ISSUE") return "SOURCE_DE_ISSUE";
  return "REAL";
}

module.exports = {
  SYSTEM_PROMPT,
  NON_ERROR_CATEGORIES,
  auditCardsBatch,
  classifyFindings,
  mapValidationStatus,
  parseLunaResponse,
};
