const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";
const DEFAULT_BATCH_SIZE = 40;
const MAX_RETRIES = 3;

const SYSTEM_PROMPT = [
  "You are a Spanish (ES) linguistic repair proposer for ES-DE A1+A2 vocabulary/study cards.",
  "German (DE) is the authoritative semantic source. Latvian/Italian fragments in Spanish fields must be replaced with natural Spanish.",
  "Return ONLY valid JSON: { \"items\": [ ... ] } — one item per input id, same order.",
  "Each output item MUST include:",
  "id, new (full replacement field value, never null), action (REPLACE or REMOVE), status (PĀRSKATĪT or OWNER_REVIEW_REQUIRED), reason (short Spanish repair rationale, max 200 chars).",
  "RULES:",
  "1) comparison[*].example format 'German – Spanish': keep German part character-for-character; keep separator ' – '; replace only the foreign (LV/IT) Spanish side with correct Spanish.",
  "2) study.explanation / study.important / study.tip: translate full CURRENT to natural Spanish; preserve all German terminology and examples exactly; do not add/remove pedagogical content.",
  "3) lv / study.translation / study.examples[*].lv / study.comparison[*].meaning: provide full natural Spanish for the field.",
  "4) sectionAccents paths: if accentFragmentStale=true, action=REMOVE and new='' (empty string) for that accent token path.",
  "5) sectionAccents paths: if accentFragmentStale=false, new must be exact Spanish substring that exists in visibleEsText after repair (matching case/diacritics).",
  "6) CEFR A1/A2 register; correct Spanish accents (á é í ó ú ñ ü ¿ ¡).",
  "7) Never change German text. Never leave LV/IT remnants in new.",
  "8) new must differ from current. If unsure, status=OWNER_REVIEW_REQUIRED with best-effort new.",
  "9) Use pairedGermanText and de for semantic grounding.",
  "10) You MUST return exactly as many items as provided in the input batch — no omissions.",
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

function toPayloadItem(i) {
  return {
    id: i.id,
    category: i.category || i.categories,
    level: i.level,
    cardId: i.cardId,
    de: i.de,
    field: i.field,
    current: i.current,
    pairedGermanText: i.pairedGermanText,
    matchedFragments: i.matchedFragments,
    section: i.context?.section,
    mainLv: i.context?.mainLv,
    studyTranslation: i.context?.studyTranslation,
    visibleEsText: i.context?.visibleEsText,
    accentFragmentStale: i.context?.accentFragmentStale,
  };
}

async function proposeForeignRemnantBatch(items, options = {}) {
  const { model = DEFAULT_MODEL, stats = null, batchLabel = "" } = options;
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("items masīvs nedrīkst būt tukšs.");
  }

  const payload = {
    task: "foreign_remnant_owner_proposals",
    dataset: "es-a1-a2",
    count: items.length,
    items: items.map(toPayloadItem),
  };

  const input = [
    `ES-DE A1+A2 foreign remnant owner proposals. Return JSON items array with exactly ${items.length} entries (one per id, same order).`,
    JSON.stringify(payload),
  ].join("\n");

  const response = await getClient().responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
    max_output_tokens: Math.max(4096, items.length * 180),
  });

  let parsed;
  try {
    parsed = JSON.parse(response.output_text || "{}");
  } catch (error) {
    throw new Error(`Luna proposals kļūda: nederīgs JSON (${error.message}).`);
  }

  const outItems = parsed.items || parsed.proposals || [];
  if (!Array.isArray(outItems)) {
    throw new Error("Luna proposals kļūda: nav items masīva.");
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

async function proposeForeignRemnantBatchWithRetry(items, options) {
  let lastError = null;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const result = await proposeForeignRemnantBatch(items, options);
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

async function proposeForeignRemnantRepairs(items, options = {}) {
  const { model = DEFAULT_MODEL, stats = null, batchSize = DEFAULT_BATCH_SIZE } = options;
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
    const batchLabel = `foreign-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
    const result = await proposeForeignRemnantBatchWithRetry(batch, {
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
  proposeForeignRemnantRepairs,
  proposeForeignRemnantBatch,
};
