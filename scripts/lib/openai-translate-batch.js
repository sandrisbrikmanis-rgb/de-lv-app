require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";
const SOURCE_LANGUAGE = "Latvian";

const SYSTEM_PROMPT = [
  `You translate educational content from ${SOURCE_LANGUAGE} into Bosnian for a German language learning app (BS-DE).`,
  "You always receive a JSON object with an items array.",
  "Each item has id, field, and text.",
  "Return ONLY valid JSON with the same shape: { \"items\": [ { \"id\": \"...\", \"translation\": \"...\" }, ... ] }.",
  "Return exactly one translation per input id. Keep the same ids and the same order as the input items.",
  "Do not add comments, markdown, code fences, or explanations.",
  "Preserve the full original meaning, logical structure, paragraph count, line order, list order, numbering, headings, examples, punctuation function, and separators such as •.",
  "If the source contains multiple clearly listed meanings, variants, examples, or explanations, translate and preserve all of them in the same order and with the same separators.",
  "Use natural, modern, grammatically correct Bosnian wording suitable for language-learning material.",
  "Localize fictional Latvian character names in examples to natural Bosnian forms while preserving gender, role, relationships, and identity.",
  "Do not translate or replace real identifiable people.",
  "Keep brand, product, organization, code, file paths, file names, object keys, identifiers, variable names, URLs, email addresses, technical commands, model names, language codes, and card IDs unchanged unless Bosnian has an established geographic name form.",
  "Preserve placeholders exactly, including braces, brackets, symbols, casing, and count.",
  "Do not translate or alter German-language content if it appears in the source.",
  "The result must be ready for direct insertion into a Bosnian data file.",
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
    uniqueStringCount: 0,
    translatedStringCount: 0,
    cacheHits: 0,
    crossLevelCacheHits: 0,
    dedupSaved: 0,
    retryCount: 0,
    retryReasons: {},
    inputTokens: 0,
    cachedInputTokens: 0,
    outputTokens: 0,
    reasoningTokens: 0,
    totalTokens: 0,
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

function parseBatchResponse(raw, expectedIds) {
  if (!raw || typeof raw !== "string") {
    throw new Error("OpenAI batch tulkošanas kļūda: tukša atbilde.");
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`OpenAI batch tulkošanas kļūda: nederīgs JSON (${error.message}).`);
  }
  if (!parsed || !Array.isArray(parsed.items)) {
    throw new Error("OpenAI batch tulkošanas kļūda: atbilde nesatur items masīvu.");
  }
  const map = new Map();
  for (const item of parsed.items) {
    if (!item || typeof item.id !== "string") continue;
    const translation = typeof item.translation === "string" ? item.translation.trim() : "";
    if (!translation) {
      throw new Error(`OpenAI batch tulkošanas kļūda: tukšs tulkojums id=${item.id}.`);
    }
    map.set(item.id, translation);
  }
  for (const id of expectedIds) {
    if (!map.has(id)) {
      throw new Error(`OpenAI batch tulkošanas kļūda: trūkst tulkojuma id=${id}.`);
    }
  }
  return map;
}

async function translateItemsBatch(options) {
  const {
    items,
    model = DEFAULT_MODEL,
    stats = null,
    batchLabel = "",
    isRetry = false,
  } = options;

  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("items masīvs nedrīkst būt tukšs.");
  }

  assertApiKey();

  const payload = {
    items: items.map((item) => ({
      id: item.id,
      field: item.field,
      text: item.text,
    })),
  };

  const input = [
    "Translate the following JSON items from Latvian to Bosnian.",
    "Return JSON only in the required output format.",
    JSON.stringify(payload),
  ].join("\n");

  const response = await client.responses.create({
    model,
    instructions: SYSTEM_PROMPT,
    input,
    text: { format: { type: "json_object" } },
  });

  const expectedIds = items.map((item) => item.id);
  const translations = parseBatchResponse(response.output_text, expectedIds);

  if (stats) {
    stats.requestCount += 1;
    if (isRetry) stats.retryRequests += 1;
    else stats.initialBatchRequests += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(items.length);
    stats.translatedStringCount += items.length;
    addUsage(stats, response.usage);
    if (batchLabel) {
      process.stdout.write(`  batch ${batchLabel}: ${items.length} items, tokens=${response.usage?.total_tokens || 0}\n`);
    }
  }

  return {
    translations,
    usage: response.usage || null,
  };
}

function estimateCostUsd(stats) {
  // GPT-5.6 Luna pilot estimate (USD per 1M tokens) — adjust if pricing changes.
  const inputRate = 0.25;
  const cachedInputRate = 0.025;
  const outputRate = 2.0;
  const uncachedInput = Math.max(0, stats.inputTokens - stats.cachedInputTokens);
  return (
    (uncachedInput / 1_000_000) * inputRate
    + (stats.cachedInputTokens / 1_000_000) * cachedInputRate
    + (stats.outputTokens / 1_000_000) * outputRate
  );
}

module.exports = {
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
  createStats,
  translateItemsBatch,
  estimateCostUsd,
};
