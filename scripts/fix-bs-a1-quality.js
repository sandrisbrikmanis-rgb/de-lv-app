#!/usr/bin/env node
/**
 * BS-DE A1 quality fix: remove Latvian remnants and correct base-form translations.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const OpenAI = require("openai");
require("dotenv").config();

const { ROOT } = require("./lib/audit-common");
const { translateText } = require("./lib/openai-translate");

const LV_SOURCE = path.join(ROOT, "data", "a1.js");
const BS_FILE = path.join(ROOT, "data", "bs", "a1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "a1.js");
const CACHE_PATH = path.join(ROOT, "scripts", ".bs-a1-openai-translation-cache.json");
const REPORT_PATH = path.join(ROOT, "scripts", ".bs-a1-quality-fix-report.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS = /latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|\bjūs\b|\bjums\b|\bjūsu\b|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|\brīsi\b|mācēt|\bprast\b/i;
const BATCH_SIZE = 25;

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function writeA1(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const A1_WORDS = ${json};\n\nwindow.A1_WORDS = A1_WORDS;\n`, "utf8");
}

function isLvFragment(text) {
  return typeof text === "string" && (LV_ONLY.test(text) || LV_WORDS.test(text));
}

function collectLvFragments(value, hits = [], ctx = "") {
  if (typeof value === "string") {
    if (isLvFragment(value)) hits.push({ ctx, text: value });
    return hits;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectLvFragments(item, hits, `${ctx}[${index}]`));
    return hits;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (key === "de" || key === "de_article" || key === "de_plural") continue;
      collectLvFragments(child, hits, ctx ? `${ctx}.${key}` : key);
    }
  }
  return hits;
}

function applyReplacements(value, replacements) {
  if (typeof value === "string") {
    return replacements.get(value) ?? value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => applyReplacements(item, replacements));
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = applyReplacements(child, replacements);
    }
    return out;
  }
  return value;
}

function entryId(entry, index) {
  return entry.study?.id || `a1-${entry.de}-${index}`;
}

async function fixMainTranslations(lvWords, bsWords, cache, report) {
  const fixes = [];
  for (let i = 0; i < bsWords.length; i += BATCH_SIZE) {
    const chunk = bsWords.slice(i, i + BATCH_SIZE);
    const lines = chunk.map((entry, offset) => {
      const index = i + offset;
      const lvEntry = lvWords[index];
      const article = entry.de_article ? `${entry.de_article} ` : "";
      return `${offset + 1}. DE: ${article}${entry.de} | LV gloss: ${lvEntry.lv} | current BS: ${entry.lv}`;
    });

    const prompt = `You are correcting Bosnian flashcard front translations for a German learning app (BS-DE).
For each numbered item return ONLY the correct Bosnian dictionary base form on its own line with the same number.

Rules:
- Nouns: nominative singular, lowercase (e.g. jabuka, hljeb, voda, kuća)
- Verbs: infinitive, lowercase (e.g. učiti, govoriti, ići). Use "učiti se" only if the standard Bosnian equivalent of the German verb is reflexive.
- Adjectives/adverbs: base form, lowercase
- No articles, no sentences, no semicolons, no alternatives with •
- Translate by German meaning, not by copying the Latvian gloss
- Do not capitalize unless it is a proper noun

${lines.join("\n")}`;

    const response = await client.responses.create({
      model: "gpt-5.5",
      instructions: "Return only numbered Bosnian base-form translations, one per line.",
      input: prompt,
    });

    const text = (response.output_text || "").trim();
    const parsed = {};
    for (const line of text.split("\n")) {
      const match = line.match(/^\s*(\d+)\.\s*(.+?)\s*$/);
      if (match) parsed[Number(match[1])] = match[2].trim();
    }

    chunk.forEach((entry, offset) => {
      const index = i + offset;
      const corrected = parsed[offset + 1];
      if (!corrected) return;
      const before = entry.lv;
      if (before !== corrected) {
        const id = entryId(entry, index);
        fixes.push({ id, de: entry.de, before, after: corrected });
        report.mainTranslationFixes.push({ id, de: entry.de, before, after: corrected });
        if (lvWords[index].lv && cache[lvWords[index].lv]) {
          cache[lvWords[index].lv] = corrected;
        }
        entry.lv = corrected;
        if (entry.study?.translation && entry.study.translation === before) {
          entry.study.translation = corrected;
        }
      }
    });

    process.stdout.write(`  main translations batch ${Math.min(i + BATCH_SIZE, bsWords.length)}/${bsWords.length}\n`);
  }

  return fixes;
}

async function fixRemnantStrings(remnants, cache, report) {
  const unique = [...new Set(remnants.map((item) => item.text))];
  const replacements = new Map();

  for (const source of unique) {
    const translated = await translateText({
      text: source,
      targetLanguage: "Bosnian",
      context:
        "Educational German-Bosnian language learning content. " +
        "Translate fully into natural Bosnian. " +
        "Remove ALL Latvian language references: replace 'latviski/latvijsk/latviešu' with 'bosanski/na bosanskom', " +
        "'vāciski/vācu' with 'njemački/na njemačkom'. " +
        "Replace embedded Latvian words with correct Bosnian equivalents. " +
        "Never leave Latvian words like apmeklējums, braukt, tāpēc, jūs, maksāt, peldēt. " +
        "Keep German words, examples, and structure unchanged.",
    });

    if (translated !== source) {
      replacements.set(source, translated);
      report.remnantFixes.push({ before: source, after: translated });
      cache[source] = translated;
    }
  }

  return replacements;
}

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY nav atrasta. Pārbaudi lokālo .env failu.");
  }

  const lvWords = loadWords(LV_SOURCE);
  const bsWords = loadWords(BS_FILE);
  const cache = loadCache();

  const report = {
    remnantsFound: 0,
    remnantsFixed: 0,
    mainTranslationFixes: [],
    remnantFixes: [],
  };

  const remnantsBefore = collectLvFragments(bsWords);
  report.remnantsFound = new Set(remnantsBefore.map((item) => item.text)).size;
  console.log(`Found ${report.remnantsFound} unique Latvian remnant strings`);

  console.log("Fixing 702 main Bosnian translations...");
  await fixMainTranslations(lvWords, bsWords, cache, report);

  const remnantsMid = collectLvFragments(bsWords);
  console.log(`Fixing ${new Set(remnantsMid.map((item) => item.text)).size} remnant strings...`);
  const replacements = await fixRemnantStrings(remnantsMid, cache, report);
  report.remnantsFixed = replacements.size;

  const fixedWords = applyReplacements(bsWords, replacements);

  writeA1(BS_FILE, fixedWords);
  writeA1(WWW_FILE, fixedWords);
  saveCache(cache);
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  const remnantsAfter = collectLvFragments(fixedWords);
  console.log(`Remaining Latvian fragments: ${new Set(remnantsAfter.map((item) => item.text)).size}`);
  console.log(`Main translation fixes: ${report.mainTranslationFixes.length}`);
  console.log(`Remnant fixes: ${report.remnantsFixed}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
