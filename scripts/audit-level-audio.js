#!/usr/bin/env node
/**
 * Audit flashcard audio coverage for A1–C2 and Teikumi (sentences).
 * Usage:
 *   node scripts/audit-level-audio.js
 *   node scripts/audit-level-audio.js --json
 *   node scripts/audit-level-audio.js --level A1
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const AUDIO_DIR = path.join(ROOT, "public", "audio");
const jsonOut = process.argv.includes("--json");
const levelFilter = (() => {
  const m = process.argv.find((a) => a.startsWith("--level="));
  return m ? m.slice("--level=".length).trim().toUpperCase() : "";
})();

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2", "SENTENCES"];

function sanitizeFilename(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[/\\:*?"<>|]/g, "");
}

function buildAudioFilename(...parts) {
  const stem = parts.map((part) => sanitizeFilename(part)).filter(Boolean).join("_");
  return `${stem}.mp3`.toLowerCase();
}

function capitalizeGermanWord(word) {
  const trimmed = String(word || "").trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function buildSpeechInput(article, noun) {
  const art = String(article || "").trim().toLowerCase();
  const word = capitalizeGermanWord(noun);
  if (!word) return "";
  if (art) return `${art} ${word}.`;
  return `${word}.`;
}

function buildJobs(entry, isSentences) {
  const jobs = [];
  const de = String(entry.de || "").trim();
  if (!de) return jobs;

  if (isSentences) {
    jobs.push({ text: de, filename: buildAudioFilename(de), kind: "sentence" });
    return jobs;
  }

  const article = entry.de_article ? String(entry.de_article).trim() : null;
  if (article) {
    jobs.push({
      text: buildSpeechInput(article, de),
      filename: buildAudioFilename(article, de),
      kind: "word",
      de,
      article,
    });
  } else {
    jobs.push({
      text: `${capitalizeGermanWord(de)}.`,
      filename: buildAudioFilename(de),
      kind: "word",
      de,
    });
  }

  if (entry.de_plural) {
    const pluralText = String(entry.de_plural).trim();
    const parts = pluralText.split(/\s+/);
    const pluralArticle = parts[0]?.trim();
    const pluralSpeech = pluralText.endsWith(".") ? pluralText : `${pluralText}.`;
    jobs.push({
      text: pluralSpeech,
      filename:
        pluralArticle && /^(der|die|das)$/i.test(pluralArticle)
          ? buildAudioFilename("plural", pluralArticle, de)
          : buildAudioFilename("plural", pluralText),
      kind: "plural",
      de,
      article,
    });
  }
  return jobs;
}

function loadLevel(level) {
  const isSentences = level === "SENTENCES";
  const dataFile = isSentences
    ? path.join(ROOT, "data", "sentences.js")
    : path.join(ROOT, "data", `${level.toLowerCase()}.js`);
  const wordsKey = isSentences ? "SENTENCE_ENTRIES" : `${level}_WORDS`;
  const win = {};
  vm.runInContext(fs.readFileSync(dataFile, "utf8"), vm.createContext({ window: win, console }));
  return { entries: win[wordsKey] || [], isSentences, dataFile };
}

function auditLevel(level) {
  const { entries, isSentences } = loadLevel(level);
  const jobs = entries.flatMap((e) => buildJobs(e, isSentences));
  const missing = [];
  const existing = [];
  for (const job of jobs) {
    const filePath = path.join(AUDIO_DIR, job.filename);
    if (fs.existsSync(filePath)) existing.push(job);
    else missing.push(job);
  }
  return {
    level,
    entries: entries.length,
    expectedAudio: jobs.length,
    existing: existing.length,
    missing: missing.length,
    coveragePct: jobs.length ? Math.round((existing.length / jobs.length) * 1000) / 10 : 100,
    missingFiles: missing,
  };
}

const levels = levelFilter ? [levelFilter] : LEVELS;
const reports = levels.map(auditLevel);
const summary = {
  auditedAt: new Date().toISOString(),
  levels: reports.map((r) => ({
    level: r.level,
    entries: r.entries,
    expectedAudio: r.expectedAudio,
    existing: r.existing,
    missing: r.missing,
    coveragePct: r.coveragePct,
  })),
  totalMissing: reports.reduce((s, r) => s + r.missing, 0),
  reports,
};

if (jsonOut) {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log("=== Level audio audit ===\n");
  for (const r of reports) {
    console.log(
      `${r.level.padEnd(10)} entries=${r.entries} audio=${r.existing}/${r.expectedAudio} missing=${r.missing} (${r.coveragePct}%)`
    );
    for (const m of r.missingFiles.slice(0, 5)) {
      console.log(`  - ${m.filename} <- ${m.text}`);
    }
    if (r.missing > 5) console.log(`  ... +${r.missing - 5} more`);
  }
  console.log(`\nTotal missing: ${summary.totalMissing}`);
}

process.exit(summary.totalMissing > 0 ? 1 : 0);
