const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";
const DEFAULT_BATCH_SIZE = 40;
const MAX_RETRIES = 3;

const SYSTEM_PROMPT = [
  "You are an independent second-round Spanish (ES) linguistic validator for ES-DE A1+A2 foreign-remnant OWNER decisions.",
  "German (DE) is authoritative. Review each proposed NEW against DE meaning, CURRENT, and field context.",
  "Return ONLY valid JSON: { \"items\": [ ... ] } — one item per input id, same order.",
  "Each output item MUST include:",
  "id, validationResult (CONFIRMED or CORRECTED), action (REPLACE, REMOVE, or KEEP), status (LABOT or NELABOT),",
  "new (final full field value), classification (e.g. LV_REMNANT, IT_REMNANT, FALSE_POSITIVE, STALE_ACCENT, FOREIGN_REMNANT),",
  "reason (short rationale, max 200 chars).",
  "RULES:",
  "1) Do NOT trust first-round proposals blindly — verify semantics, grammar, accents, register (A1/A2).",
  "2) comparison[*].example: German part before ' – ' must stay character-for-character; only fix Spanish side.",
  "3) sectionAccents: new must be exact substring of visible Spanish text after repair; stale fragments → REMOVE with new=''.",
  "4) KEEP + NELABOT only for clear false positives (valid Spanish flagged as IT/LV, e.g. «poco»).",
  "5) LABOT + REPLACE when foreign remnant must be fixed; new must differ from current.",
  "6) Never change German. Never leave LV/IT remnants in LABOT new values.",
  "7) Preserve question/exclamation marks (¿ ¡), person, number, gender, tense, negation.",
  "8) Return exactly as many items as input — no omissions.",
].join("\n");

let client = null;

function getClient() {
  if (!client) {
    if (!process.env.OPENAI_API_KEY?.trim()) {
      throw new Error("OPENAI_API_KEY nav atrasta.");
    }
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return client;
}

function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

function toValidationPayloadItem(src, proposal) {
  return {
    id: src.id,
    category: src.category || proposal.category,
    level: src.level,
    cardId: src.cardId,
    de: src.de,
    field: src.field,
    current: src.current,
    proposedNew: proposal.new,
    proposedAction: proposal.action,
    proposedStatus: proposal.status,
    proposedReason: proposal.reason,
    pairedGermanText: src.pairedGermanText,
    matchedFragments: src.matchedFragments,
    section: src.context?.section,
    mainLv: src.context?.mainLv,
    studyTranslation: src.context?.studyTranslation,
    visibleEsText: src.context?.visibleEsText,
    accentFragmentStale: src.context?.accentFragmentStale,
  };
}

async function validateForeignRemnantBatch(items, options = {}) {
  const { model = DEFAULT_MODEL, stats = null, batchLabel = "" } = options;
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("items masīvs nedrīkst būt tukšs.");
  }

  const payload = {
    task: "foreign_remnant_owner_validation_round2",
    dataset: "es-a1-a2",
    count: items.length,
    items,
  };

  const input = [
    `ES-DE A1+A2 foreign remnant owner validation round 2. Return JSON items array with exactly ${items.length} entries (one per id, same order).`,
    JSON.stringify(payload),
  ].join("\n");

  const response = await getClient().responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
    max_output_tokens: Math.max(4096, items.length * 200),
  });

  let parsed;
  try {
    parsed = JSON.parse(response.output_text || "{}");
  } catch (error) {
    throw new Error(`Luna validation kļūda: nederīgs JSON (${error.message}).`);
  }

  const outItems = parsed.items || parsed.decisions || [];
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

  return { items: outItems, usage: response.usage || null };
}

async function validateForeignRemnantBatchWithRetry(items, options) {
  let lastError = null;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const result = await validateForeignRemnantBatch(items, options);
      if (result.items.length !== items.length) {
        throw new Error(`expected ${items.length} items, got ${result.items.length}`);
      }
      const ids = new Set(result.items.map((i) => i.id));
      for (const item of items) {
        if (!ids.has(item.id)) {
          throw new Error(`missing id in batch response: ${item.id}`);
        }
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

async function validateForeignRemnantDecisions(pairs, options = {}) {
  const { model = DEFAULT_MODEL, stats = null, batchSize = DEFAULT_BATCH_SIZE } = options;
  if (!Array.isArray(pairs) || pairs.length === 0) {
    throw new Error("pairs masīvs nedrīkst būt tukšs.");
  }

  const batches = chunk(pairs, batchSize);
  const allItems = [];
  let usage = null;

  for (let i = 0; i < batches.length; i += 1) {
    const batch = batches[i];
    const payloadItems = batch.map(({ src, proposal }) => toValidationPayloadItem(src, proposal));
    const start = i * batchSize + 1;
    const end = start + batch.length - 1;
    const batchLabel = `validate-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
    const result = await validateForeignRemnantBatchWithRetry(payloadItems, {
      model,
      stats,
      batchLabel,
    });
    allItems.push(...result.items);
    usage = result.usage;
  }

  return { items: allItems, usage, batchCount: batches.length };
}

module.exports = {
  DEFAULT_MODEL,
  DEFAULT_BATCH_SIZE,
  SYSTEM_PROMPT,
  validateForeignRemnantDecisions,
  validateForeignRemnantBatch,
};
