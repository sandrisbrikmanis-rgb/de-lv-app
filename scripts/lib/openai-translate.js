require("dotenv").config();

const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.5";
const SOURCE_LANGUAGE = "Latvian";

const PLACEHOLDER_PATTERNS = [
  /\{\{[^{}]+\}\}/g,
  /\{[^{}]+\}/g,
  /%[sd]/g,
  /\$\{[^}]+\}/g,
  /<[^>]+>/g,
  /\[\[[^\]]+\]\]/g,
  /__[A-Z0-9_]+__/g,
  /:[a-zA-Z_][a-zA-Z0-9_]*/g,
];

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createTranslationError(message, cause) {
  if (cause !== undefined) {
    return new Error(message, { cause });
  }
  return new Error(message);
}

function assertApiKey() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || !String(apiKey).trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta. Pārbaudi lokālo .env failu.");
  }
}

function validateModel(model, fieldName = "model") {
  if (typeof model !== "string" || !model.trim()) {
    throw new Error(`${fieldName} jābūt ne-tukšai virknei.`);
  }
}

function validateTargetLanguage(targetLanguage) {
  if (typeof targetLanguage !== "string") {
    throw new Error("targetLanguage jābūt virknei.");
  }
  if (!targetLanguage.trim()) {
    throw new Error("targetLanguage nedrīkst būt tukša.");
  }
}

function validateContext(context) {
  if (context !== undefined && typeof context !== "string") {
    throw new Error("context jābūt virknei, ja tas ir norādīts.");
  }
}

function validateText(text) {
  if (typeof text !== "string") {
    throw new Error("text jābūt virknei.");
  }
  if (!text.trim()) {
    throw new Error("text nedrīkst būt tukšs.");
  }
}

function extractPlaceholders(text) {
  const matches = [];
  for (const pattern of PLACEHOLDER_PATTERNS) {
    const found = text.match(pattern);
    if (found) {
      matches.push(...found);
    }
  }
  return matches;
}

function buildInstructions(targetLanguage, context) {
  const rules = [
    `You translate educational content from ${SOURCE_LANGUAGE} into ${targetLanguage.trim()}.`,
    "Return exactly one complete final translation.",
    "Do not return multiple translation variants, alternatives, synonym lists, comments, explanations, introductions, Markdown, or code blocks.",
    "Do not wrap the result in quotation marks.",
    "Do not prefix the result with labels such as \"Translation:\" or \"Tulkojums:\".",
    "Do not invent missing information, shorten the source, summarize it, omit any word, sentence, example, bullet, or fragment, or merge separate meanings into one shorter translation.",
    "Preserve the full original meaning, logical structure, paragraph count, line order, list order, numbering, headings, examples, punctuation function, and separators such as •.",
    "If the source contains multiple clearly listed meanings, variants, examples, or explanations, translate and preserve all of them in the same order and with the same separators.",
    "Use natural, modern, grammatically correct target-language wording suitable for language-learning material.",
    "Localize fictional character first names in examples to natural target-language forms when Latvian names would sound unnatural, while preserving gender, role, relationships, and identity across the text.",
    "Do not translate or replace real identifiable people.",
    "Keep brand, product, organization, code, file paths, file names, object keys, identifiers, variable names, URLs, email addresses, technical commands, model names, language codes, and card IDs unchanged unless the target language has an established geographic name form.",
    "Preserve placeholders exactly, including braces, brackets, symbols, casing, and count. Examples: {name}, {{count}}, %s, %d, ${value}, <tag>, [[placeholder]], __TOKEN__, :variable.",
    "Do not translate or alter German-language content if it appears in the source.",
    "The result must be ready for direct insertion into a target-language data file.",
  ];

  if (context && context.trim()) {
    rules.push(
      "Use the following context only to choose the correct meaning, grammar, number, terminology, and style. Do not include the context text in the translation and do not use it to invent new information:",
      context.trim(),
    );
  }

  return rules.join("\n");
}

function validateTranslationResult(sourceText, translatedText) {
  if (typeof translatedText !== "string") {
    throw createTranslationError("OpenAI tulkošanas kļūda: API atbilde nav virkne.");
  }

  const trimmed = translatedText.trim();
  if (!trimmed) {
    throw createTranslationError("OpenAI tulkošanas kļūda: tukšs tulkojums.");
  }

  if (/```/.test(trimmed)) {
    throw createTranslationError("OpenAI tulkošanas kļūda: tulkojums satur Markdown koda bloku.");
  }

  if (/^(translation|tulkojums)\s*:/i.test(trimmed)) {
    throw createTranslationError("OpenAI tulkošanas kļūda: tulkojums satur lieku ievada tekstu.");
  }

  if (
    (trimmed.startsWith("\"") && trimmed.endsWith("\"")) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    throw createTranslationError("OpenAI tulkošanas kļūda: tulkojums ir lieki ievietots pēdiņās.");
  }

  const sourcePlaceholders = extractPlaceholders(sourceText);
  const translatedPlaceholders = extractPlaceholders(trimmed);

  for (const placeholder of sourcePlaceholders) {
    if (!trimmed.includes(placeholder)) {
      throw createTranslationError("OpenAI tulkošanas kļūda: tulkojumā nav saglabāti visi avota vietturi.");
    }
  }

  const sourceCounts = new Map();
  const translatedCounts = new Map();

  for (const placeholder of sourcePlaceholders) {
    sourceCounts.set(placeholder, (sourceCounts.get(placeholder) || 0) + 1);
  }
  for (const placeholder of translatedPlaceholders) {
    translatedCounts.set(placeholder, (translatedCounts.get(placeholder) || 0) + 1);
  }

  for (const [placeholder, count] of sourceCounts.entries()) {
    if ((translatedCounts.get(placeholder) || 0) < count) {
      throw createTranslationError("OpenAI tulkošanas kļūda: tulkojumā nav saglabāti visi avota vietturi.");
    }
  }

  return trimmed;
}

async function translateText(options) {
  if (!options || typeof options !== "object" || Array.isArray(options)) {
    throw new Error("options jābūt objektam.");
  }

  const { text, targetLanguage, context, model } = options;

  validateText(text);
  validateTargetLanguage(targetLanguage);
  validateContext(context);

  const selectedModel = model === undefined ? DEFAULT_MODEL : model;
  validateModel(selectedModel);

  assertApiKey();

  try {
    const response = await client.responses.create({
      model: selectedModel,
      instructions: buildInstructions(targetLanguage, context),
      input: text,
    });

    return validateTranslationResult(text, response.output_text);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("OpenAI tulkošanas kļūda:")) {
      throw error;
    }
    if (error instanceof Error && error.message === "OPENAI_API_KEY nav atrasta. Pārbaudi lokālo .env failu.") {
      throw error;
    }
    const message = error instanceof Error ? error.message : String(error);
    throw createTranslationError(`OpenAI tulkošanas kļūda: ${message}`, error);
  }
}

async function translateBatch(options) {
  if (!options || typeof options !== "object" || Array.isArray(options)) {
    throw new Error("options jābūt objektam.");
  }

  const { texts, targetLanguage, context, model, delayMs = 0 } = options;

  if (!Array.isArray(texts)) {
    throw new Error("texts jābūt masīvam.");
  }
  if (texts.length === 0) {
    throw new Error("texts masīvs nedrīkst būt tukšs.");
  }

  validateTargetLanguage(targetLanguage);
  validateContext(context);

  const selectedModel = model === undefined ? DEFAULT_MODEL : model;
  validateModel(selectedModel);

  if (typeof delayMs !== "number" || !Number.isFinite(delayMs) || delayMs < 0) {
    throw new Error("delayMs jābūt galīgam skaitlim, kas nav mazāks par 0.");
  }

  for (let index = 0; index < texts.length; index += 1) {
    const item = texts[index];
    if (typeof item !== "string") {
      throw new Error(`texts elements ar indeksu ${index} jābūt virknei.`);
    }
    if (!item.trim()) {
      throw new Error(`texts elements ar indeksu ${index} nedrīkst būt tukšs.`);
    }
  }

  const results = [];

  for (let index = 0; index < texts.length; index += 1) {
    try {
      const translated = await translateText({
        text: texts[index],
        targetLanguage,
        context,
        model: selectedModel,
      });
      results.push(translated);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw createTranslationError(
        `OpenAI pakeštulkošanas kļūda pie elementa ar indeksu ${index}: ${message}`,
        error,
      );
    }

    if (delayMs > 0 && index < texts.length - 1) {
      await sleep(delayMs);
    }
  }

  return results;
}

module.exports = {
  translateText,
  translateBatch,
};
