const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

const SYSTEM_PROMPT = [
  "You audit ES-DE Kurss Lessons 1–21 (German course for Spanish learners). READ-ONLY audit.",
  "Each item: Spanish user-visible text (currentEs), German context (deContext), LV MASTER reference (lvReference) for structure/meaning only — do NOT copy LV wording.",
  "Audit Spanish: grammar, orthography, terminology, naturalness, foreign leftovers (LV, EN, DA, ET, etc.).",
  "German examples in deContext MUST remain German — flag if replaced by Spanish or mistranslated.",
  "Grammar terms: 'article' in Spanish text should be 'artículo' (not English 'article').",
  "Categories: ES_GRAMMAR, ES_ORTHOGRAPHY, ES_TERMINOLOGY, ES_NATURALNESS, FOREIGN_LEFTOVER, SEMANTIC_MISMATCH, MULTIPLE_TRANSLATIONS, TRANSLATION, STRUCTURE, PEDAGOGICAL_ISSUE.",
  "SOURCE_DE_ISSUE if German example seems wrong — do not propose DE changes.",
  "FALSE_POSITIVE for correct Spanish, pedagogical notation, or DE-only dialogue lines.",
  "STYLE_ONLY if Spanish correct but preference only.",
  "MULTIPLE_TRANSLATIONS if learner-facing field has • / ; combining distinct meanings.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "proposedEs = audit recommendation only, NOT OWNER NEW.",
  "Return JSON { items: [...] } with EXACTLY one item per input cardId.",
  "HARD RULE: every input cardId MUST appear exactly once in items[].",
  "For correct fields: { cardId, status: \"PASS\", field }.",
  "For issues: { cardId, status: \"FINDING\", severity, category, currentEs, proposedEs, reason }.",
  "Do NOT omit cardIds. Do NOT return only findings — PASS entries are mandatory.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
  if (!usage || !stats) return;
  stats.inputTokens += usage.input_tokens || 0;
  stats.outputTokens += usage.output_tokens || 0;
  stats.totalTokens += usage.total_tokens || 0;
}

function normalizeItem(item) {
  if (!item || !item.cardId) return null;
  const status = String(item.status || "").toUpperCase();
  if (status === "PASS" || status === "OK" || status === "NO_FINDING") {
    return { cardId: item.cardId, status: "PASS", field: item.field || "" };
  }
  return {
    cardId: item.cardId,
    field: item.field || item.path || "",
    severity: String(item.severity || "MEDIUM").toUpperCase(),
    category: String(item.category || "TRANSLATION").toUpperCase(),
    de: item.de || item.deContext || "",
    lvReference: item.lvReference || item.lvSource || "",
    currentEs: item.currentEs || item.currentText || item.esText || "",
    proposedEs: item.proposedEs || item.proposedNew || item.proposed || "",
    reason: item.reason || "",
    confidence: item.confidence || "medium",
    status: "FINDING",
  };
}

function parseLunaResponse(raw, cardIds, { allowSyntheticPass = false } = {}) {
  if (!raw || typeof raw !== "string") throw new Error("Luna audit: tukša atbilde.");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Luna audit: nederīgs JSON (${error.message}).`);
  }
  const items = parsed.items || parsed.findings || [];
  if (!Array.isArray(items)) throw new Error("Luna audit: nav items masīva.");

  const results = [];
  const responded = new Set();
  for (const item of items) {
    const normalized = normalizeItem(item);
    if (!normalized) continue;
    if (responded.has(normalized.cardId)) {
      throw new Error(`Luna audit: duplicate cardId ${normalized.cardId}`);
    }
    responded.add(normalized.cardId);
    results.push(normalized);
  }

  const missing = cardIds.filter((id) => !responded.has(id));
  if (missing.length && !allowSyntheticPass) {
    throw new Error(
      `Luna audit: incomplete response (${responded.size}/${cardIds.length}); missing ${missing.length} cardIds e.g. ${missing.slice(0, 3).join(", ")}`,
    );
  }
  if (allowSyntheticPass) {
    for (const cardId of missing) {
      results.push({ cardId, status: "PASS", field: "", syntheticPass: true });
    }
  }

  const findings = results.filter((r) => r.status === "FINDING");
  const passCount = results.filter((r) => r.status === "PASS").length;
  const syntheticPassCount = results.filter((r) => r.syntheticPass).length;
  return { results, findings, passCount, syntheticPassCount, missing };
}

async function auditCardsBatch(options) {
  const {
    cards,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    auditType = "es_kurss_lessons_full",
    dataset = "kurss_lessons_01_21",
    instructions = SYSTEM_PROMPT,
    allowSyntheticPass = false,
    saveRawPath = null,
  } = options;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error("cards masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();
  const cardIds = cards.map((c) => c.cardId);
  const payload = { auditType, dataset, cards };
  const input = [
    `Full ES-DE Kurss Lessons audit. Input has ${cards.length} fields. Return JSON items array with EXACTLY ${cards.length} entries — one per cardId. Every cardId must have status PASS or FINDING.`,
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions,
    input,
    text: { format: { type: "json_object" } },
  });

  if (saveRawPath) {
    const fs = require("fs");
    const path = require("path");
    fs.mkdirSync(path.dirname(saveRawPath), { recursive: true });
    fs.writeFileSync(
      saveRawPath,
      JSON.stringify(
        {
          batchLabel,
          cardIds,
          outputText: response.output_text,
          usage: response.usage || null,
          generatedAt: new Date().toISOString(),
        },
        null,
        2,
      ),
    );
  }

  const { results, findings, passCount, syntheticPassCount } = parseLunaResponse(
    response.output_text,
    cardIds,
    { allowSyntheticPass },
  );

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(cards.length);
    stats.findingsCount += findings.length;
    stats.passCount += passCount;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(
        `  luna ${batchLabel}: ${cards.length} fields, findings=${findings.length}, pass=${passCount}, synthetic=${syntheticPassCount || 0}, tokens=${response.usage?.total_tokens || 0}\n`,
      );
    }
  }

  return { results, findings, passCount, syntheticPassCount, usage: response.usage || null };
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
  "ACCEPTABLE_VARIANT",
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
  classifyFindings,
};
