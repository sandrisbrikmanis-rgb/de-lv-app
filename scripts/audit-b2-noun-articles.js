#!/usr/bin/env node
/**
 * Read-only audit: B2 nouns — check de_article / de_plural presence and lookup consistency.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function repairJson(json) {
  let prev;
  do {
    prev = json;
    json = json.replace(/,(\s*[\]}])/g, "$1");
  } while (prev !== json);
  return json;
}

function extractArray(code) {
  const start = code.indexOf("[");
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let i = start; i < code.length; i++) {
    const ch = code[i];
    if (inStr) {
      if (esc) {
        esc = false;
        continue;
      }
      if (ch === "\\") {
        esc = true;
        continue;
      }
      if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') {
      inStr = true;
      continue;
    }
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) return code.slice(start, i + 1);
    }
  }
  throw new Error("Unterminated JSON array");
}

function stripArticle(de) {
  return de.replace(/^(der|die|das)\s+/i, "").trim();
}

function getArticleFromDe(de) {
  const m = de.match(/^(der|die|das)\b/i);
  return m ? m[1].toLowerCase() : null;
}

function isLikelyNoun(entry) {
  const de = String(entry.de || "").trim();
  if (!de) return false;
  if (entry.de_article || entry.de_plural) return true;
  if (/^(der|die|das)\s+/i.test(de)) return true;
  // German nouns are capitalized; verbs/adjectives/adverbs are lowercase.
  if (/^[A-ZÄÖÜ]/.test(de) && !/\s/.test(de)) return true;
  return false;
}

const code = fs.readFileSync(path.join(root, "data/b2.js"), "utf8");
const entries = JSON.parse(repairJson(extractArray(code)));

const lookupPath = path.join(__dirname, "german-noun-lookup.json");
const homonymsPath = path.join(__dirname, "german-noun-homonyms.json");
const lookup = {};
const homonyms = [];

if (fs.existsSync(lookupPath)) {
  for (const item of JSON.parse(fs.readFileSync(lookupPath, "utf8"))) {
    if (item.noun) lookup[item.noun.toLowerCase()] = item;
  }
}

if (fs.existsSync(homonymsPath)) {
  homonyms.push(...JSON.parse(fs.readFileSync(homonymsPath, "utf8")));
}

function expectedArticleFromLv(noun, lv) {
  const lvText = String(lv || "").toLowerCase();
  const matches = homonyms.filter((h) => h.noun.toLowerCase() === noun.toLowerCase());
  for (const hit of matches) {
    const hint = String(hit.lv || "").toLowerCase();
    if (lvText.includes(hint)) return hit.article;
  }
  return null;
}

const stats = {
  totalEntries: entries.length,
  nouns: 0,
  withArticle: 0,
  missingArticle: 0,
  missingPlural: 0,
  legacyFormat: 0,
  wrongArticle: 0,
  notInLookup: 0,
  lowercaseNoun: 0,
};

const missingArticle = [];
const missingPlural = [];
const wrongArticle = [];
const legacyFormat = [];
const lowercaseNouns = [];
const capitalizedNoArticle = [];
const lowercaseInLookup = [];
const pluralNoArticle = [];

for (const entry of entries) {
  const de = String(entry.de || "").trim();

  if (
    /^[A-ZÄÖÜ]/.test(de) &&
    !/\s/.test(de) &&
    !entry.de_article &&
    !entry.de_plural &&
    !/^(der|die|das)\s+/i.test(de)
  ) {
    capitalizedNoArticle.push({ de, lv: entry.lv });
  }

  if (entry.de_plural && !entry.de_article) {
    pluralNoArticle.push({ de, de_plural: entry.de_plural, lv: entry.lv });
  }

  const lookupKey = de.toLowerCase();
  if (/^[a-zäöüß]/.test(de) && lookup[lookupKey]) {
    lowercaseInLookup.push({
      de,
      lookupArticle: lookup[lookupKey].article,
      lv: entry.lv,
    });
  }

  if (!isLikelyNoun(entry)) continue;

  stats.nouns++;

  const hasLegacy = /^(der|die|das)\s+/i.test(de);
  if (hasLegacy) {
    stats.legacyFormat++;
    legacyFormat.push({ de, lv: entry.lv });
  }

  const noun = stripArticle(de);
  if (noun && /^[a-zäöüß]/.test(noun)) {
    stats.lowercaseNoun++;
    lowercaseNouns.push({ de, lv: entry.lv });
  }

  const article = entry.de_article || getArticleFromDe(de);
  if (article) stats.withArticle++;
  else {
    stats.missingArticle++;
    missingArticle.push({ de, lv: entry.lv, hasPlural: !!entry.de_plural });
  }

  if (!entry.de_plural) {
    stats.missingPlural++;
    if (article) missingPlural.push({ de, de_article: article, lv: entry.lv });
  }

  const key = noun.toLowerCase();
  const hit = lookup[key];
  const homonymArticle = expectedArticleFromLv(noun, entry.lv);
  const expectedArticle = homonymArticle || (hit ? hit.article : null);
  if (expectedArticle) {
    const current = (entry.de_article || getArticleFromDe(de) || "").toLowerCase();
    if (current && current !== expectedArticle) {
      stats.wrongArticle++;
      wrongArticle.push({
        de: noun,
        current,
        expected: expectedArticle,
        lv: entry.lv,
        expectedPlural: hit ? hit.plural : null,
        source: homonymArticle ? "homonym" : "lookup",
      });
    }
  } else if (article) {
    stats.notInLookup++;
  }
}

stats.capitalizedNoArticle = capitalizedNoArticle.length;
stats.lowercaseInLookup = lowercaseInLookup.length;
stats.pluralNoArticle = pluralNoArticle.length;

const report = {
  generatedAt: new Date().toISOString(),
  stats,
  missingArticle,
  missingPlural,
  wrongArticle,
  legacyFormat,
  lowercaseNouns,
  capitalizedNoArticle,
  lowercaseInLookup,
  pluralNoArticle,
};

const outPath = path.join(__dirname, "b2-noun-article-audit.json");
fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");

console.log("=== B2 Noun Article Audit ===");
console.log(`Total entries: ${stats.totalEntries}`);
console.log(`Nouns detected: ${stats.nouns}`);
console.log(`With article: ${stats.withArticle}`);
console.log(`Missing article: ${stats.missingArticle}`);
console.log(`Missing plural: ${stats.missingPlural}`);
console.log(`Legacy format (article in de): ${stats.legacyFormat}`);
console.log(`Lowercase noun in de: ${stats.lowercaseNoun}`);
console.log(`Wrong article vs lookup: ${stats.wrongArticle}`);
console.log(`Has article but not in lookup: ${stats.notInLookup}`);
console.log(`Capitalized without article: ${stats.capitalizedNoArticle}`);
console.log(`Lowercase but in noun lookup: ${stats.lowercaseInLookup}`);
console.log(`Has plural but no article: ${stats.pluralNoArticle}`);
console.log(`Report: ${outPath}`);

if (missingArticle.length) {
  console.log("\n--- Missing article ---");
  for (const e of missingArticle) {
    console.log(`  ${e.de} | lv: ${e.lv}`);
  }
}

if (capitalizedNoArticle.length) {
  console.log("\n--- Capitalized without article ---");
  for (const e of capitalizedNoArticle) {
    console.log(`  ${e.de} | lv: ${e.lv}`);
  }
}

if (lowercaseInLookup.length) {
  console.log("\n--- Lowercase but in noun lookup (first 20) ---");
  for (const e of lowercaseInLookup.slice(0, 20)) {
    console.log(`  ${e.de} (${e.lookupArticle}) | lv: ${e.lv}`);
  }
  if (lowercaseInLookup.length > 20) {
    console.log(`  ... and ${lowercaseInLookup.length - 20} more`);
  }
}

if (wrongArticle.length) {
  console.log("\n--- Wrong article (first 25) ---");
  for (const e of wrongArticle.slice(0, 25)) {
    console.log(`  ${e.de}: ${e.current} => ${e.expected} | lv: ${e.lv}`);
  }
  if (wrongArticle.length > 25) {
    console.log(`  ... and ${wrongArticle.length - 25} more`);
  }
}
