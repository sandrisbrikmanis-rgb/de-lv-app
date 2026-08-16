const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are GPT-5.6 Luna, a full linguistic quality auditor for DA-DE (Danish translations of German sentence flashcards).",
  "Audit Danish text in field 'lv' against German 'de' (primary authoritative source).",
  "The schema uses field name 'lv' for Danish — project convention, NOT Latvian.",
  "DE is STRICT READ-ONLY: never propose DE changes; use NEEDS_SOURCE_REVIEW if DE seems wrong.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each sentence: if correct, return { cardId, status: \"PASS\" }.",
  "For real issues return finding objects with:",
  "cardId, field, severity, category, de, daCurrent, proposedDa, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW | NEEDS_SOURCE_REVIEW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | REGISTER | FOREIGN_REMNANT | TECHNICAL.",
  "Non-error verdicts (NOT quality findings):",
  "SOURCE_DE_ISSUE | NEEDS_SOURCE_REVIEW | STYLE_ONLY | FALSE_POSITIVE | ACCEPTABLE_VARIANT.",
  "STYLE_ONLY = Danish correct; stylistic preference only.",
  "ACCEPTABLE_VARIANT = two equally valid Danish options; existing is fine.",
  "Do NOT flag acceptable multi-sense variants separated by • unless semantically wrong.",
  "Check: spelling, grammar, word order, articles, prepositions, pronouns, verb forms, tense,",
  "negation parity, natural Danish, idiomaticity, semantic match to German, register.",
  "Flag LV/EN/CS/PL/BS/ET/LT/RU/UA remnants, machine-translation artifacts, placeholders, zero-width.",
  "Keep reason under 180 chars. proposedDa must be exact replacement Danish text.",
].join("\n");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function createStats() {
  return {
    model: DEFAULT_MODEL,
    requestCount: 0,
    batchCount: 0,
    batchSizes: [],
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
    field: item.field || "lv",
    severity,
    category,
    de: item.de || "",
    daCurrent: item.daCurrent || item.currentDa || item.lv || "",
    proposedDa: item.proposedDa || item.proposedDa || "",
    reason: item.reason || item.shortReason || item.problem || "",
    confidence: item.confidence || "medium",
    status: "FINDING",
  };
}

function parseLunaResponse(raw, cardIds) {
  if (!raw || typeof raw !== "string") throw new Error("Luna audit kļūda: tukša atbilde.");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna audit kļūda: nederīgs JSON (${error.message}).`);
  }
  const items = parsed.items || parsed.findings || [];
  if (!Array.isArray(items)) throw new Error("Luna audit kļūda: nav items masīva.");

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
  return { results, findings, passCount: results.filter((r) => r.status === "PASS").length };
}

async function auditSentencesBatch(options) {
  const { sentences, model = DEFAULT_MODEL, stats = null, batchLabel = "" } = options;
  if (!Array.isArray(sentences) || sentences.length === 0) {
    throw new Error("sentences masīvs nedrīkst būt tukšs.");
  }
  assertApiKey();
  const cardIds = sentences.map((s) => s.cardId);
  const payload = {
    auditType: "da_sentences_full",
    dataset: "Sätze",
    sentences: sentences.map((s) => ({
      cardId: s.cardId,
      index: s.index,
      de: s.de,
      daCurrent: s.daCurrent,
    })),
  };
  const input = [
    "Full DA-DE Sätze linguistic audit. Return JSON items array. PASS for correct sentences; findings only for real issues.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const { results, findings, passCount } = parseLunaResponse(response.output_text, cardIds);
  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(sentences.length);
    stats.findingsCount += findings.length;
    stats.passCount += passCount;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  luna ${batchLabel}: ${sentences.length} sentences, findings=${findings.length}, pass=${passCount}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }
  return { results, findings, passCount, usage: response.usage || null };
}

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_DE_ISSUE",
  "NEEDS_SOURCE_REVIEW",
  "STYLE_ONLY",
  "FALSE_POSITIVE",
  "ACCEPTABLE_VARIANT",
]);

function classifyFindings(findings) {
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0 };
  const nonError = { FALSE_POSITIVE: 0, STYLE_ONLY: 0, ACCEPTABLE_VARIANT: 0, SOURCE_DE_ISSUE: 0 };
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
  auditSentencesBatch,
  parseLunaResponse,
  classifyFindings,
};
