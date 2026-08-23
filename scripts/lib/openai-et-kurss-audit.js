const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You are GPT-5.6 Luna, a full linguistic quality auditor for ET-DE Kurss (Estonian course content for German learners).",
  "Audit Estonian text (etCurrent) against German deCurrent where provided. LV MASTER (lvMasterLv) is structure/meaning reference only — never copy LV as ET.",
  "DE is STRICT READ-ONLY: never propose DE changes; use SOURCE_DE_ISSUE if DE seems wrong.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each field: if correct, return { fieldId, status: \"PASS\" }.",
  "For real issues return finding objects with:",
  "fieldId, lessonId, path, fieldType, deCurrent, etCurrent, proposedEt, severity, category, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW | NEEDS_SOURCE_REVIEW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | ORTHOGRAPHY | NATURALNESS | REGISTER | FOREIGN_REMNANT | NAMES | CONSISTENCY | RENDERER | STRUCTURE | TECHNICAL.",
  "Non-error verdicts (NOT quality findings):",
  "SOURCE_DE_ISSUE | NEEDS_SOURCE_REVIEW | STYLE_ONLY | FALSE_POSITIVE | ACCEPTABLE_VARIANT | PROJECT_CONVENTION.",
  "Flag LV/EN/CS/PL remnants, person names (Pēteris, Ansis→Hans, Martha→Marta when DE has Marta), placeholders, broken HTML.",
  "Do NOT flag DE-only dialogue lines. Do NOT flag macron pronunciation hints in parentheses as LV unless clearly wrong.",
  "Keep reason under 200 chars. proposedEt must be exact replacement Estonian text.",
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
  if (!item || !item.fieldId) return null;
  const status = String(item.status || "").toUpperCase();
  if (status === "PASS" || status === "OK" || status === "NO_FINDING") {
    return { fieldId: item.fieldId, status: "PASS", path: item.path || "" };
  }
  const category = String(item.category || item.verdict || "TRANSLATION").toUpperCase();
  const nonError = new Set([
    "SOURCE_DE_ISSUE",
    "NEEDS_SOURCE_REVIEW",
    "STYLE_ONLY",
    "FALSE_POSITIVE",
    "ACCEPTABLE_VARIANT",
    "PROJECT_CONVENTION",
  ]);
  if (nonError.has(category)) {
    return { fieldId: item.fieldId, status: "PASS", path: item.path || "", category };
  }
  return {
    fieldId: item.fieldId,
    lessonId: item.lessonId || "",
    path: item.path || "",
    fieldType: item.fieldType || "",
    deCurrent: item.deCurrent || "",
    etCurrent: item.etCurrent || item.currentDa || "",
    proposedEt: item.proposedEt || "",
    severity: String(item.severity || "MEDIUM").toUpperCase(),
    category,
    reason: item.reason || item.problem || "",
    confidence: item.confidence || "medium",
    status: "FINDING",
  };
}

function parseLunaResponse(raw, fieldIds) {
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
    responded.add(normalized.fieldId);
    results.push(normalized);
  }
  for (const fieldId of fieldIds) {
    if (!responded.has(fieldId)) results.push({ fieldId, status: "PASS" });
  }
  const findings = results.filter((r) => r.status === "FINDING");
  return { results, findings, passCount: results.filter((r) => r.status === "PASS").length };
}

async function auditKurssBatch(options) {
  const { fields, model = DEFAULT_MODEL, stats = null, batchLabel = "" } = options;
  if (!Array.isArray(fields) || fields.length === 0) {
    throw new Error("fields masīvs nedrīkst būt tukšs.");
  }
  assertApiKey();
  const fieldIds = fields.map((f) => f.fieldId);
  const payload = {
    auditType: "et_kurss_full",
    dataset: "Kurss",
    fields: fields.map((f) => ({
      fieldId: f.fieldId,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      etCurrent: f.etCurrent,
      deCurrent: f.deCurrent || "",
      lvMasterLv: f.lvMasterLv || "",
    })),
  };
  const input = [
    "Full ET-DE Kurss linguistic audit. Return JSON items array. PASS for correct fields; findings only for real issues.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const { results, findings, passCount } = parseLunaResponse(response.output_text, fieldIds);
  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(fields.length);
    stats.findingsCount += findings.length;
    stats.passCount += passCount;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  luna ${batchLabel}: ${fields.length} fields, findings=${findings.length}, pass=${passCount}, tokens=${response.usage?.total_tokens || 0}\n`
      );
    }
  }
  return { results, findings, passCount };
}

function classifyFindings(findings) {
  const nonError = {
    FALSE_POSITIVE: 0,
    STYLE_ONLY: 0,
    ACCEPTABLE_VARIANT: 0,
    SOURCE_DE_ISSUE: 0,
    NEEDS_SOURCE_REVIEW: 0,
    PROJECT_CONVENTION: 0,
  };
  const qualityFindings = [];
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };

  for (const f of findings) {
    const cat = String(f.category || "").toUpperCase();
    if (nonError[cat] !== undefined) {
      nonError[cat]++;
      continue;
    }
    qualityFindings.push(f);
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (severity[sev] !== undefined) severity[sev]++;
    else severity.MEDIUM++;
  }
  return { qualityFindings, nonError, severity };
}

module.exports = {
  DEFAULT_MODEL,
  createStats,
  auditKurssBatch,
  classifyFindings,
  parseLunaResponse,
  normalizeItem,
};
