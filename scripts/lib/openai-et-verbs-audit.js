const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are a full linguistic quality auditor for ET-DE VERBS (Estonian translations of German verb forms).",
  "Audit each Estonian learner-facing verb form against German meaning (primary authoritative source).",
  "The data schema uses field name 'lv' for Estonian native text — project convention, NOT Latvian language.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each form slot: if correct, return { verbId, field, status: \"PASS\" }.",
  "For real issues return finding objects with: verbId, field, severity, category, de, currentEt, proposedEt, reason, confidence.",
  "field must be one of: infinitiv | praesens | imperfektIndikativ | imperfektKonjunktiv | partizipVergangenheit.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | FOREIGN_REMNANT | PARADIGM | FORMAT.",
  "PARADIGM = cross-form inconsistency within the same verb (e.g. wrong root across tenses).",
  "Non-error verdicts (NOT quality findings): SOURCE_LV_ISSUE | DE_SOURCE_ISSUE | NEEDS_REVIEW | STYLE_ONLY | PROJECT_CONVENTION | FALSE_POSITIVE.",
  "DE_SOURCE_ISSUE = possible German source problem; do not suggest DE changes.",
  "STYLE_ONLY = stylistic preference alone — NOT a finding.",
  "Flag Latvian/Danish/English/other foreign remnants in ET fields as FOREIGN_REMNANT severity HIGH.",
  "Check paradigm consistency across all 5 forms of each verb.",
  "German Konjunktiv II must map to natural Estonian conditional forms (typically ta …ks), not simple present alone.",
  "Partizip must reflect Estonian past participle sense where German uses Partizip II.",
  "Estonian er-forms typically use ta + verb (e.g. ta küpsetab); reflexive sich → end/ennast.",
  "Use bullet • for multiple variants, never semicolon ;.",
  "Do NOT suggest changes to German (DE) fields.",
  "Keep reason under 140 chars. proposedEt must be exact replacement text.",
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
    currentEt: item.currentEt || item.currentText || item.etText || item.etCurrent || "",
    proposedEt: item.proposedEt || item.proposedFix || item.recommendedFix || "",
    reason: item.reason || item.shortReason || item.problem || "",
    confidence: item.confidence || "medium",
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

function toMergeFinding(f) {
  return {
    cardId: f.verbId,
    field: `${f.field}.lv`,
    severity: f.severity,
    category: f.category,
    de: f.de,
    etCurrent: f.currentEt,
    proposedEt: f.proposedEt,
    reason: f.reason,
    confidence: f.confidence,
    status: "FINDING",
  };
}

async function auditVerbsBatch(options) {
  const {
    verbs,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    auditType = "verb_form_audit",
    instructions = SYSTEM_PROMPT,
    inputPrefix = "Full ET-DE VERBS linguistic audit. Return JSON items array. PASS per form slot; findings only for real issues.",
  } = options;
  if (!Array.isArray(verbs) || verbs.length === 0) throw new Error("verbs array empty.");
  assertApiKey();

  const expectedKeys = [];
  for (const verb of verbs) {
    for (const form of verb.forms) {
      expectedKeys.push(`${verb.verbId}|${form.field}`);
    }
  }

  const payload = { auditType, targetLang: "et", verbs };
  const input = [inputPrefix, JSON.stringify(payload)].join("\n");

  const response = await getClient().responses.create({
    model,
    instructions,
    input,
    text: { format: { type: "json_object" } },
  });

  const { results, findings, passCount } = parseLunaResponse(response.output_text, expectedKeys);
  const mergeFindings = findings.map(toMergeFinding);

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

  return { results, findings: mergeFindings, passCount };
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  createStats,
  auditVerbsBatch,
  normalizeItem,
  parseLunaResponse,
  toMergeFinding,
};
