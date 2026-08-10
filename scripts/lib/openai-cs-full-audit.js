require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for CS-DE (Czech translations of German vocabulary and learning content).",
  "Audit Czech text against German meaning (primary authoritative source) and Latvian source (secondary context only).",
  "The data schema uses field name 'lv' for Czech native text — this is a project convention, NOT Latvian language.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each card/field: if correct, return { cardId, status: \"PASS\" }.",
  "For real issues return finding objects with:",
  "cardId, field, severity, category, de, lvSource, currentCs, proposedCs, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | STUDY | COMPARISON | SECTIONACCENTS_LANGUAGE | TITLE_FORMAT.",
  "Non-error verdicts (do NOT count as quality findings):",
  "SOURCE_LV_ISSUE | SOURCE_DE_ISSUE | DE_SOURCE_ISSUE | NEEDS_OWNER_REVIEW | STYLE_ONLY | PROJECT_CONVENTION | FALSE_POSITIVE.",
  "SOURCE_LV_ISSUE = LV conflicts with DE but Czech is correct per DE.",
  "SOURCE_DE_ISSUE / DE_SOURCE_ISSUE = possible DE source problem; do not suggest DE changes.",
  "STYLE_ONLY = Czech correct; stylistic preference only — NOT a quality finding.",
  "PROJECT_CONVENTION = flashcard lv differs from study.translation by design (Learning First) — NOT error unless semantically wrong.",
  "Do NOT flag cs !== study.translation unless semantically wrong, contradictory, or wrong German word sense.",
  "Learning First: main title/translation must be short, practical; no semicolons; use • for multiple senses.",
  "Check Czech: cases (pády), gender (rod), aspect (vid), verb conjugation, prepositions, collocations, register, CEFR level appropriateness.",
  "Flag Polish/Slovak/Latvian contamination in Czech fields.",
  "Do NOT suggest changes to German (DE) fields.",
  "Keep reason under 160 chars. proposedCs must be exact replacement text.",
].join("\n");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function createStats() {
  return {
    model: DEFAULT_MODEL,
    requestCount: 0,
    initialBatchRequests: 0,
    retryRequests: 0,
    batchCount: 0,
    batchSizes: [],
    retryCount: 0,
    retryReasons: {},
    inputTokens: 0,
    cachedInputTokens: 0,
    outputTokens: 0,
    reasoningTokens: 0,
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
  stats.cachedInputTokens += usage.input_tokens_details?.cached_tokens || 0;
  stats.reasoningTokens += usage.output_tokens_details?.reasoning_tokens || 0;
}

function recordRetryReason(stats, reason) {
  stats.retryReasons[reason] = (stats.retryReasons[reason] || 0) + 1;
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
    currentCs: item.currentCs || item.currentText || item.csText || item.existingCsText || "",
    proposedCs: item.proposedCs || item.recommendedFix || item.proposedFix || "",
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
    dataset = "",
  } = options;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error("cards masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();

  const cardIds = cards.map((c) => c.cardId);
  const payload = { auditType, dataset, cards };

  const input = [
    `Full CS-DE ${dataset} linguistic audit. Return JSON items array. PASS for correct cards; findings only for real issues.`,
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
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
        `  luna ${batchLabel}: ${cards.length} cards, findings=${findings.length}, pass=${passCount}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  return { results, findings, passCount, usage: response.usage || null };
}

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE", "SOURCE_DE_ISSUE", "DE_SOURCE_ISSUE",
  "NEEDS_OWNER_REVIEW", "NEEDS_REVIEW", "STYLE_ONLY", "PROJECT_CONVENTION", "FALSE_POSITIVE",
]);

function classifyFindings(findings) {
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const nonError = {
    SOURCE_DE_ISSUE: 0,
    SOURCE_LV_ISSUE: 0,
    NEEDS_OWNER_REVIEW: 0,
    FALSE_POSITIVE: 0,
    STYLE_ONLY: 0,
    PROJECT_CONVENTION: 0,
  };
  const qualityFindings = [];

  for (const f of findings) {
    if (f.status === "PASS") continue;
    const cat = String(f.category || "").toUpperCase();
    if (NON_ERROR_CATEGORIES.has(cat)) {
      const key = cat === "DE_SOURCE_ISSUE" ? "SOURCE_DE_ISSUE" : cat;
      nonError[key] = (nonError[key] || 0) + 1;
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
  recordRetryReason,
  parseLunaFullAuditResponse,
  classifyFindings,
};
