#!/usr/bin/env node
/**
 * Audit study-card audio file coverage (where UI expects audio buttons).
 * Usage:
 *   node scripts/audit-study-card-audio.js
 *   node scripts/audit-study-card-audio.js --card a1-sein
 *   node scripts/audit-study-card-audio.js --json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const DATA_FILES = ["a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js"];
const cardFilter = (() => {
  const eq = process.argv.find((a) => a.startsWith("--card="));
  if (eq) return eq.slice("--card=".length).trim();
  const idx = process.argv.indexOf("--card");
  if (idx >= 0 && process.argv[idx + 1]) return String(process.argv[idx + 1]).trim();
  return "";
})();
const jsonOut = process.argv.includes("--json");

const audioDir = path.join(root, "public", "audio");
const AUDIO = new Set(
  fs.existsSync(audioDir)
    ? fs.readdirSync(audioDir).map((f) => f.toLowerCase())
    : []
);

function sanitizeAudioFilename(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[/\\:*?"<>|]/g, "");
}

function stripGermanArticle(text) {
  return String(text || "").trim().replace(/^(der|die|das)\s+/i, "");
}

const COMPARISON_ONLY_NOUN_ARTICLES = {
  appetit: "der",
  erbe: "der",
  fernsehen: "das",
  gemüse: "das",
  obst: "das",
  schaden: "der",
  trotz: "der",
  urlaub: "der",
  zeit: "die",
};

const COMPARISON_PHRASE_AUDIO = [
  [/\bim\s+urlaub\b/i, "der Urlaub"],
  [/\bin\s+den\s+ferien\b/i, "die Ferien"],
  [/\bim\s+fernsehen\b/i, "das Fernsehen"],
  [/\bam\s+fernsehen\b/i, "das Fernsehen"],
  [/^ohne\s*\.\.\.\s*zu$/i, "ohne zu"],
];

function titleCaseGermanWord(word) {
  return String(word || "")
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function audioFilenameCandidates(text) {
  const raw = String(text || "").trim();
  if (!raw) return [];

  for (const [pattern, noun] of COMPARISON_PHRASE_AUDIO) {
    if (pattern.test(raw)) return audioFilenameCandidates(noun);
  }

  const candidates = [];
  const articleMatch = raw.match(/^(der|die|das)\s+(.+)$/i);
  if (articleMatch) {
    const article = articleMatch[1].toLowerCase();
    const word = articleMatch[2].trim();
    const sanitized = sanitizeAudioFilename(word);
    const titleCased = sanitizeAudioFilename(titleCaseGermanWord(word));
    candidates.push(`${article}_${sanitized}.mp3`);
    if (titleCased !== sanitized) candidates.push(`${article}_${titleCased}.mp3`);
    return [...new Set(candidates)];
  }

  const bare = stripGermanArticle(raw);
  if (!bare) return [];
  const key = bare.toLowerCase();
  const article = COMPARISON_ONLY_NOUN_ARTICLES[key];
  const sanitized = sanitizeAudioFilename(bare);
  const titleCased = sanitizeAudioFilename(titleCaseGermanWord(bare));
  candidates.push(`${sanitized}.mp3`);
  if (article) {
    candidates.push(`${article}_${sanitized}.mp3`);
    if (titleCased !== sanitized) candidates.push(`${article}_${titleCased}.mp3`);
  }
  return [...new Set(candidates)];
}

function hasAudio(filename) {
  return AUDIO.has(String(filename || "").toLowerCase());
}

function loadWords(fileName) {
  const filePath = path.join(root, "data", fileName);
  const code = fs.readFileSync(filePath, "utf8");
  const match = code.match(/const\s+(\w+)_WORDS\s*=\s*(\[[\s\S]*\]);/);
  if (!match) throw new Error(`Could not load ${fileName}`);
  const sandbox = {};
  vm.runInNewContext(`${match[1]}_WORDS = ${match[2]};`, sandbox);
  return sandbox[`${match[1]}_WORDS`] || [];
}

function collectRequiredAudio(card) {
  const study = card.study;
  if (!study) return [];
  const layout = study.layout || "standardStudy";
  const required = [];
  const add = (slot, text, filename) => {
    if (!text || !filename) return;
    required.push({ slot, text, filename: filename.toLowerCase() });
  };

  if (layout === "standardStudy" || layout === "minimalStudy") {
    add("header", card.de, `${sanitizeAudioFilename(card.de)}.mp3`);
    if (card.de_article) {
      add("header", `${card.de_article} ${card.de}`, `${sanitizeAudioFilename(`${card.de_article}_${card.de}`)}.mp3`);
    }
    for (const ex of study.examples || []) {
      const de = String(ex.de || "").trim();
      if (de) add("example", de, `${sanitizeAudioFilename(de)}.mp3`);
    }
    for (const row of study.comparison || []) {
      const word = String(row.word || "").trim();
      if (word) add("comparison-word", word, `${sanitizeAudioFilename(word)}.mp3`);
      const example = String(row.example || "").trim();
      const german = example.split(/\s*=\s*/)[0].trim();
      if (german) add("comparison-example", german, `${sanitizeAudioFilename(german)}.mp3`);
    }
    for (const item of study.tip?.rightItems || []) {
      const de = String(item.de || "").trim();
      if (de) add("tip", de, `${sanitizeAudioFilename(de)}.mp3`);
    }
  }

  if (layout === "comparisonStudy") {
    const parts = String(study.subtitle || "")
      .split(/\s*•\s*/)
      .map((part) => part.trim())
      .filter(Boolean);
    for (const part of parts) {
      const candidates = audioFilenameCandidates(part);
      if (!candidates.length) continue;
      const filename = candidates[0];
      if (!hasAudio(filename)) {
        add("subtitle", part, filename);
      }
    }
    return required;
  }

  return required;
}

const reports = [];

for (const file of DATA_FILES) {
  for (const card of loadWords(file)) {
    const study = card.study;
    if (!study) continue;
    const id = study.id || card.de;
    if (cardFilter && id !== cardFilter && card.de !== cardFilter) continue;

    const required = collectRequiredAudio(card);
    const missing = required.filter((r) => !hasAudio(r.filename));
    const seen = new Set();
    const uniqueMissing = missing.filter((r) => {
      if (seen.has(r.filename)) return false;
      seen.add(r.filename);
      return true;
    });

    if (!uniqueMissing.length) continue;
    reports.push({
      file,
      id,
      de: card.de,
      level: card.level,
      layout: study.layout || "standardStudy",
      missing: uniqueMissing,
    });
  }
}

if (jsonOut) {
  console.log(JSON.stringify(reports, null, 2));
  process.exit(0);
}

const totalMissing = reports.reduce((n, r) => n + r.missing.length, 0);
console.log(`\n=== Study card audio audit: ${reports.length} cards, ${totalMissing} missing files ===\n`);

for (const r of reports.slice(0, cardFilter ? reports.length : 20)) {
  console.log(`${r.level} ${r.de} (${r.id})`);
  for (const m of r.missing) {
    console.log(`  [${m.slot}] ${m.text} → ${m.filename}`);
  }
  console.log("");
}

if (!cardFilter && reports.length > 20) {
  console.log(`... un vēl ${reports.length - 20} kartītes. Lieto --card=<id> vai --json pilnam sarakstam.\n`);
}

if (cardFilter && !reports.length) {
  console.log(`✅ Kartītei ${cardFilter} viss nepieciešamais audio ir pieejams.\n`);
}

process.exit(totalMissing > 0 ? 1 : 0);
