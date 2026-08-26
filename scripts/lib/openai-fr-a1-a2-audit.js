const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for FR-DE A1+A2 (French translations of German A1 and A2 vocabulary and study cards).",
  "Audit French text against German meaning (primary authoritative source) and Latvian source (secondary context only).",
  "The data schema uses field name 'lv' for French native text — this is a project convention, NOT Latvian language.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each card/field: if correct, return { cardId, status: \"PASS\" }.",
  "For real issues return finding objects with:",
  "cardId, field, severity, category, de, lvSource, currentFr, proposedFr, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | STUDY | COMPARISON | SECTIONACCENTS_LANGUAGE | FOREIGN_REMNANT | STRUCTURE.",
  "Non-error verdicts (do NOT count as quality findings):",
  "SOURCE_LV_ISSUE | SOURCE_DE_ISSUE | DE_SOURCE_ISSUE | NEEDS_OWNER_REVIEW | STYLE_ONLY | PROJECT_CONVENTION | FALSE_POSITIVE.",
  "SOURCE_LV_ISSUE = LV conflicts with DE but French is correct per DE.",
  "DE_SOURCE_ISSUE = possible DE source problem; do not suggest DE changes.",
  "STYLE_ONLY = French correct; stylistic preference only — NOT a quality finding.",
  "PROJECT_CONVENTION = flashcard lv differs from study.translation by design (Learning First) — NOT error unless semantically wrong.",
  "CRITICAL: Latvian/Italian/English text in French fields (e.g. lūdzu, Man ir, Es esmu, mājās, Vilciens atiet, latviešu).",
  "Check French: gender/number agreement, verb conjugation, articles, natural collocations, accents (á é í ó ú ñ ü), CEFR A1/A2 register.",
  "Do NOT flag es !== study.translation unless semantically wrong or contradictory.",
  "Do NOT suggest changes to German (DE) fields. comparison.word stays German.",
  "Keep reason under 160 chars. proposedFr must be exact replacement text.",
].join("\n");

let client = null;

function getClient() {
  if (!client) {
    assertApiKey();
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return client;
}

function createStats() {
  return {
    model: DEFAULT_MODEL,
    requestCount: 0,
    batchCount: 0,
    batchSizes: [],
    retryCount: 0,
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0,
    findingsCount: 0,
    passCount: 0,
  };
}

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
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
  const severity = String(item.severity || "MEDIUM").toUpperCase();
  const category = String(item.category || item.verdict || "TRANSLATION").toUpperCase();
  return {
    cardId: item.cardId,
    field: item.field || item.path || "lv",
    severity,
    category,
    de: item.de || "",
    lvSource: item.lvSource || item.lv || "",
    currentFr:
      item.currentFr ||
      item.currentEt ||
      item.currentText ||
      item.frText ||
      item.existingEsText ||
      "",
    proposedFr: item.proposedFr || item.proposedEt || item.recommendedFix || item.proposedFix || "",
    reason: item.reason || item.shortReason || item.problem || "",
    confidence: item.confidence || "medium",
    status: "FINDING",
  };
}

function parseLunaFullAuditResponse(raw, cardIds) {
  if (!raw || typeof raw !== "string") {
    throw new Error("Luna audit kļūda: tukša atbilde.");
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna audit kļūda: nederīgs JSON (${error.message}).`);
  }
  const items = parsed.items || parsed.findings || [];
  if (!Array.isArray(items)) {
    throw new Error("Luna audit kļūda: atbilde nesatur items masīvu.");
  }

  const results = [];
  const responded = new Set();
  for (const item of items) {
    const normalized = normalizeItem(item);
    if (!normalized) continue;
    responded.add(normalized.cardId);
    results.push(normalized);
  }

  for (const cardId of cardIds) {
    if (!responded.has(cardId)) {
      results.push({ cardId, status: "PASS", field: "lv" });
    }
  }

  const findings = results.filter((r) => r.status === "FINDING");
  const passCount = results.filter((r) => r.status === "PASS").length;
  return { results, findings, passCount };
}

async function auditCardsBatch(options) {
  const {
    cards,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    auditType = "full_linguistic",
  } = options;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error("cards masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();

  const cardIds = cards.map((c) => c.cardId);
  const payload = { auditType, dataset: "fr-a1-a2", cards };

  const input = [
    "Full FR-DE A1+A2 linguistic audit. Return JSON items array. PASS for correct cards; findings only for real issues.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await getClient().responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const { results, findings, passCount } = parseLunaFullAuditResponse(response.output_text, cardIds);

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

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  NON_ERROR_CATEGORIES,
  createStats,
  auditCardsBatch,
  parseLunaFullAuditResponse,
  classifyFindings,
};
