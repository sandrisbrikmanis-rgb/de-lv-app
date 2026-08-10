require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for EN-DE VERBS (British English translations of German verb forms).",
  "Audit each English learner-facing verb form against German meaning (primary). Latvian source (lvSource) is secondary context only.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each form slot: if correct, return { verbId, field, status: \"PASS\" }.",
  "For real issues return finding objects with: verbId, field, severity, category, de, lvSource, currentEn, proposedEn, reason, confidence.",
  "field must be one of: infinitiv | praesens | imperfektIndikativ | imperfektKonjunktiv | partizipVergangenheit.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | FOREIGN_REMNANT | PARADIGM | FORMAT.",
  "PARADIGM = cross-form inconsistency within the same verb (e.g. wrong root across tenses).",
  "Non-error verdicts (NOT quality findings): SOURCE_LV_ISSUE | DE_SOURCE_ISSUE | NEEDS_REVIEW | STYLE_ONLY | PROJECT_CONVENTION.",
  "DE_SOURCE_ISSUE = possible German source problem; do not suggest DE changes.",
  "STYLE_ONLY = stylistic preference alone — NOT a finding.",
  "Flag Latvian/Bosnian/other foreign remnants in EN fields as FOREIGN_REMNANT severity HIGH.",
  "Check paradigm consistency across all 5 forms of each verb.",
  "German Konjunktiv II must map to natural English conditional/would forms, not simple past alone.",
  "Partizip must reflect passive participle sense where German uses Partizip II.",
  "Use bullet • for multiple variants, never semicolon ;.",
  "Do NOT suggest changes to German (DE) fields.",
  "Keep reason under 140 chars. proposedEn must be exact replacement text.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
  if (!item || !item.verbId) return null;
  const status = String(item.status || "").toUpperCase();
  const field = item.field || "infinitiv";
  if (status === "PASS" || status === "OK" || status === "NO_FINDING") {
    return { verbId: item.verbId, field, status: "PASS" };
  }
  const severity = String(item.severity || "MEDIUM").toUpperCase();
  const category = String(item.category || item.verdict || "TRANSLATION").toUpperCase();
  return {
    verbId: item.verbId,
    field,
    severity,
    category,
    de: item.de || "",
    lvSource: item.lvSource || item.lv || "",
    currentEn: item.currentEn || item.currentText || item.enText || "",
    proposedEn: item.proposedEn || item.proposedFix || item.recommendedFix || "",
    reason: item.reason || item.shortReason || item.problem || "",
    confidence: item.confidence || "medium",
    regressionType: item.regressionType || item.regression_type || "",
    status: "FINDING",
  };
}

function parseLunaResponse(raw, expectedKeys) {
  if (!raw || typeof raw !== "string") throw new Error("Luna audit: empty response.");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna audit: invalid JSON (${error.message}).`);
  }
  const items = parsed.items || parsed.findings || [];
  if (!Array.isArray(items)) throw new Error("Luna audit: missing items array.");

  const results = [];
  const responded = new Set();
  for (const item of items) {
    const normalized = normalizeItem(item);
    if (!normalized) continue;
    const key = `${normalized.verbId}|${normalized.field}`;
    responded.add(key);
    results.push(normalized);
  }
  for (const key of expectedKeys) {
    const [verbId, field] = key.split("|");
    if (!responded.has(key)) results.push({ verbId, field, status: "PASS" });
  }
  const findings = results.filter((r) => r.status === "FINDING");
  const passCount = results.filter((r) => r.status === "PASS").length;
  return { results, findings, passCount };
}

async function auditVerbsBatch(options) {
  const {
    verbs,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    auditType = "verb_form_audit",
    instructions = SYSTEM_PROMPT,
    inputPrefix = "Full EN-DE VERBS linguistic audit. Return JSON items array. PASS per form slot; findings only for real issues.",
  } = options;
  if (!Array.isArray(verbs) || verbs.length === 0) throw new Error("verbs array empty.");
  assertApiKey();

  const expectedKeys = [];
  for (const verb of verbs) {
    for (const form of verb.forms) {
      expectedKeys.push(`${verb.verbId}|${form.field}`);
    }
  }

  const payload = { auditType, targetLang: "en", verbs };
  const input = [inputPrefix, JSON.stringify(payload)].join("\n");

  const response = await client.responses.create({
    model,
    instructions,
    input,
    text: { format: { type: "json_object" } },
  });

  const { results, findings, passCount } = parseLunaResponse(response.output_text, expectedKeys);

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(verbs.length);
    stats.findingsCount += findings.length;
    stats.passCount += passCount;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  luna ${batchLabel}: ${verbs.length} verbs, findings=${findings.length}, pass=${passCount}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }

  return { results, findings, passCount };
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  createStats,
  auditVerbsBatch,
  recordRetryReason,
  normalizeItem,
  parseLunaResponse,
};
