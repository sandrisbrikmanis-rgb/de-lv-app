const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";
const DEFAULT_BATCH_SIZE = 30;
const MAX_RETRIES = 3;

const SYSTEM_PROMPT = [
  "You are an independent second-pass linguistic validator for ES-DE B1 vocabulary/study cards.",
  "German (DE) is the authoritative semantic source. Field name 'lv' stores Spanish text (project convention).",
  "Do NOT auto-accept the initial audit verdict. Re-check each item independently.",
  "Return ONLY valid JSON: { \"items\": [ ... ] } — one item per input id, same order.",
  "Each output item MUST include:",
  "id, validationDecision, new, action, status, reason.",
  "validationDecision values:",
  "- LABOT: real issue confirmed; provide corrected full field value in new (must differ from current).",
  "- NELABOT: current Spanish is correct; new must equal current exactly; action=KEEP.",
  "- FALSE_POSITIVE: audit flagged incorrectly; new must equal current exactly; action=KEEP.",
  "- SOURCE_DE_ISSUE: problem is in German source, not Spanish; new must equal current; action=KEEP.",
  "- OWNER_REVIEW_REQUIRED: genuine ambiguity or conflicting fixes; provide best-effort new.",
  "action values: REPLACE | KEEP | REMOVE | ADD_STUDY.",
  "status: always PĀRSKATĪT unless OWNER_REVIEW_REQUIRED ambiguity (still PĀRSKATĪT).",
  "RULES BY CATEGORY:",
  "1) FOREIGN_REMNANT: confirm LV/IT/EN fragments in Spanish fields. Replace only foreign parts with natural B1 Spanish.",
  "   comparison[*].example format 'German = Spanish' or 'German – Spanish': keep German part character-for-character; replace only Spanish side.",
  "2) SECTION_ACCENT: if accentFragmentStale=true, action=REMOVE, new='' for that accent token path.",
  "   If accentFragmentStale=false, action=REPLACE, new must be exact Spanish substring in visibleEsText (case/diacritics match).",
  "3) STUDY_STRUCTURE: distinguish real structure damage vs linguistic-only. For structure repair use ADD_STUDY with full Spanish study object if needed.",
  "   Never copy Latvian text as Spanish NEW.",
  "4) SEMANTICS/TRANSLATION/GRAMMAR/ORTHOGRAPHY/REGISTER/PUNCTUATION: verify DE→ES meaning, grammar, register at B1 level.",
  "5) comparison.word and all German examples/terms stay German unchanged.",
  "6) Spanish: correct accents (áéíóúñü), ¿? ¡!, articles, ser/estar, por/para, natural B1 register.",
  "7) new is always the FULL final field value (never a partial patch).",
  "8) For LABOT: new !== current. For NELABOT/FALSE_POSITIVE/SOURCE_DE_ISSUE: new === current, action=KEEP.",
  "9) reason: short linguistic rationale in Spanish or Latvian, max 220 chars.",
  "10) Return exactly as many items as input — no omissions.",
].join("\n");

let client = null;

function getClient() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta.");
  }
  if (!client) client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return client;
}

function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function toPayloadItem(i) {
  return {
    id: i.id,
    findingIds: i.findingIds,
    category: i.category,
    severity: i.severity,
    level: i.level,
    cardId: i.cardId,
    de: i.de,
    pairedGermanText: i.pairedGermanText,
    field: i.field,
    current: i.current,
    auditReason: i.auditReason,
    auditProposedNew: i.auditProposedNew,
    auditValidationStatus: i.auditValidationStatus,
    mainLv: i.mainLv,
    studyTranslation: i.studyTranslation,
    visibleEsText: i.visibleEsText,
    section: i.section,
    accentFragmentStale: i.accentFragmentStale,
    hasStudy: i.hasStudy,
    studyLayout: i.studyLayout,
  };
}

async function validateOwnerBatch(items, options = {}) {
  const { model = DEFAULT_MODEL, stats = null, batchLabel = "" } = options;
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("items masīvs nedrīkst būt tukšs.");
  }

  const payload = {
    task: "es_de_b1_owner_independent_validation",
    dataset: "es-de-b1",
    count: items.length,
    items: items.map(toPayloadItem),
  };

  const input = [
    `ES-DE B1 independent OWNER validation (second pass). Return JSON items array with exactly ${items.length} entries (one per id, same order).`,
    JSON.stringify(payload),
  ].join("\n");

  const response = await getClient().responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
    max_output_tokens: Math.max(8192, items.length * 220),
  });

  let parsed;
  try {
    parsed = JSON.parse(response.output_text || "{}");
  } catch (error) {
    throw new Error(`Luna validation kļūda: nederīgs JSON (${error.message}).`);
  }

  const outItems = parsed.items || parsed.proposals || parsed.results || [];
  if (!Array.isArray(outItems)) {
    throw new Error("Luna validation kļūda: nav items masīva.");
  }

  if (stats) {
    stats.requestCount = (stats.requestCount || 0) + 1;
    stats.inputTokens = (stats.inputTokens || 0) + (response.usage?.input_tokens || 0);
    stats.outputTokens = (stats.outputTokens || 0) + (response.usage?.output_tokens || 0);
    stats.totalTokens = (stats.totalTokens || 0) + (response.usage?.total_tokens || 0);
    stats.batchSizes = stats.batchSizes || [];
    stats.batchSizes.push(items.length);
  }

  if (batchLabel) {
    process.stdout.write(
      `  luna ${batchLabel}: ${items.length} items, returned=${outItems.length}, tokens=${response.usage?.total_tokens || 0}\n`,
    );
  }

  return { items: outItems, usage: response.usage || null, raw: response.output_text };
}

async function validateOwnerBatchWithRetry(items, options) {
  let lastError = null;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const result = await validateOwnerBatch(items, options);
      if (result.items.length !== items.length) {
        throw new Error(`expected ${items.length} items, got ${result.items.length}`);
      }
      const ids = new Set(result.items.map((i) => i.id));
      for (const item of items) {
        if (!ids.has(item.id)) throw new Error(`missing id in batch response: ${item.id}`);
      }
      return result;
    } catch (error) {
      lastError = error;
      if (attempt < MAX_RETRIES) {
        process.stdout.write(`  retry ${options.batchLabel || "?"} attempt ${attempt}: ${error.message}\n`);
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }
    }
  }
  throw lastError;
}

async function validateOwnerObjects(items, options = {}) {
  const { model = DEFAULT_MODEL, stats = null, batchSize = DEFAULT_BATCH_SIZE, onBatchComplete = null } = options;
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("items masīvs nedrīkst būt tukšs.");
  }

  const batches = chunk(items, batchSize);
  const allItems = [];
  let usage = null;

  for (let i = 0; i < batches.length; i += 1) {
    const batch = batches[i];
    const start = i * batchSize + 1;
    const end = start + batch.length - 1;
    const batchLabel = `owner-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
    const result = await validateOwnerBatchWithRetry(batch, { model, stats, batchLabel });
    allItems.push(...result.items);
    usage = result.usage;
    if (onBatchComplete) {
      await onBatchComplete({
        batchIndex: i,
        batchLabel,
        batch,
        result,
        allItems: [...allItems],
      });
    }
  }

  return { items: allItems, usage, batchCount: batches.length };
}

module.exports = {
  DEFAULT_MODEL,
  DEFAULT_BATCH_SIZE,
  SYSTEM_PROMPT,
  validateOwnerObjects,
  validateOwnerBatch,
  validateOwnerBatchWithRetry,
};
