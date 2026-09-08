require("dotenv").config({ path: require("path").join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for EN-DE B1 (English translations for English learners of German).",
  "You receive JSON with auditType and cards. Each card has DE context, optional LV source gloss, and current EN text (enText or fields[].enText).",
  "Study cards include fields[] and optional sectionAccents.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "Correct and natural current English = PASS (status OK or omit card).",
  "Do not report stylistic alternatives as errors.",
  "Different wording is not automatically better wording.",
  "Do not prefer a synonym unless current text is inaccurate, unnatural, misleading, or pedagogically unsuitable.",
  "For real issues return: cardId, cardType (normal|standardStudy|minimalStudy), field, severity, currentText, recommendedFix, shortReason, issueType, sourceClassification (NEW_LUNA_FINDING).",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW | WARNING | DE SOURCE ISSUE.",
  "DE SOURCE ISSUE = German master/source seems wrong but English is correct per DE. Do NOT count as EN error.",
  "Do NOT flag study.comparison[*].word German labels — DE READ-ONLY.",
  "Do NOT suggest changes to German (DE) fields.",
  "Flag Latvian words/phrases or 'in Latvian...' learner-perspective errors in EN fields as HIGH or MEDIUM.",
  "sectionAccents: audit every study card with sectionAccents. For each broken accent return field under study.sectionAccents..., sectionAccentsImpact (yes), sectionAccentsKind (TECHNICAL | PEDAGOGICAL).",
  "TECHNICAL = target missing, LV/other-language token, Unicode mismatch, highlight non-functional.",
  "PEDAGOGICAL = wrong semantic highlight, misleading emphasis, context mismatch but text exists.",
  "Keep shortReason under 120 chars.",
].join("\n");

const DETERMINISTIC_VERDICT_PROMPT = [
  "You review pre-flagged deterministic audit findings for EN-DE B1.",
  "Each item has cardId, field, currentEn, de, deterministicSeverity, deterministicReason.",
  "Independently verify whether the flagged issue is real for English learners.",
  "Return ONLY valid JSON: { \"items\": [ ... ] } with one row per input findingId.",
  "verdict: CONFIRMED | REJECTED_FALSE_POSITIVE | DE_SOURCE_ISSUE | OWNER_DECISION.",
  "CONFIRMED = real EN issue; include severity, recommendedFix, shortReason.",
  "REJECTED_FALSE_POSITIVE = heuristic wrong; omit recommendedFix.",
  "DE_SOURCE_ISSUE = German source problem; English OK; severity DE SOURCE ISSUE.",
  "OWNER_DECISION = ambiguous pedagogy/register; severity WARNING.",
  "Keep shortReason under 120 chars.",
].join("\n");

let _client = null;

function getClient() {
  assertApiKey();
  if (!_client) {
    _client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return _client;
}

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
    okCount: 0,
  };
}

function assertApiKey() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta. Pārbaudi lokālo .env failu.");
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

function normalizeFindingItem(item) {
  const severity = String(item.severity || "WARNING").toUpperCase();
  return {
    cardId: item.cardId,
    cardType: item.cardType || item.layout || null,
    field: item.field || "lv",
    severity,
    currentEn: item.currentText || item.currentEn || item.existingEnText || "",
    recommendedEn: item.recommendedFix || item.recommendedEn || "",
    reason: item.shortReason || item.problem || item.reason || "",
    issueType: item.issueType || item.type || null,
    sourceClassification: item.sourceClassification || "NEW_LUNA_FINDING",
    sectionAccentsImpact: item.sectionAccentsImpact === "yes" || item.sectionAccentsImpact === true,
    sectionAccentsKind: item.sectionAccentsKind || null,
    lunaVerdict: item.verdict || null,
    findingId: item.findingId || null,
    de: item.de || null,
    deSource: item.deSource || item.relevantDe || null,
  };
}

function parseLunaAuditResponse(raw) {
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

  const findings = [];
  let okCount = 0;
  for (const item of items) {
    if (!item || (!item.cardId && !item.findingId)) continue;
    if (String(item.status || "").toUpperCase() === "OK") {
      okCount += 1;
      continue;
    }
    if (!item.field && !item.severity && !item.verdict) continue;
    findings.push(normalizeFindingItem(item));
  }
  return { findings, okCount };
}

async function callLuna({ instructions, payload, stats, batchLabel }) {
  const input = [instructions, JSON.stringify(payload)].join("\n");
  const response = await getClient().responses.create({
    model: DEFAULT_MODEL,
    instructions,
    input,
    text: { format: { type: "json_object" } },
  });

  const { findings, okCount } = parseLunaAuditResponse(response.output_text);

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(payload.cards?.length || payload.findings?.length || 0);
    stats.findingsCount += findings.length;
    stats.okCount += okCount;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  luna ${batchLabel}: findings=${findings.length}, ok=${okCount}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  return { findings, okCount, usage: response.usage || null };
}

async function auditCardsBatch(options) {
  const { cards, stats = null, batchLabel = "", auditType = "en_b1" } = options;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error("cards masīvs nedrīkst būt tukšs.");
  }

  return callLuna({
    instructions: SYSTEM_PROMPT,
    payload: { auditType, cards },
    stats,
    batchLabel,
  });
}

async function auditDeterministicVerdictsBatch(options) {
  const { findings, stats = null, batchLabel = "" } = options;

  if (!Array.isArray(findings) || findings.length === 0) {
    throw new Error("findings masīvs nedrīkst būt tukšs.");
  }

  return callLuna({
    instructions: DETERMINISTIC_VERDICT_PROMPT,
    payload: { auditType: "deterministic_verdict", findings },
    stats,
    batchLabel,
  });
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  DETERMINISTIC_VERDICT_PROMPT,
  createStats,
  auditCardsBatch,
  auditDeterministicVerdictsBatch,
  recordRetryReason,
  parseLunaAuditResponse,
  normalizeFindingItem,
};
