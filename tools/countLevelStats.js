#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const rawLevel = (process.argv[2] || "A2").trim();
const LEVEL_ALIASES = {
  sentences: "SENTENCES",
  sentence: "SENTENCES",
  satze: "SENTENCES",
  sätze: "SENTENCES",
  teikumi: "SENTENCES",
};
const level = LEVEL_ALIASES[rawLevel.toLowerCase()] || rawLevel.toUpperCase();
const AUDIO_DIR = path.join(ROOT, "public", "audio");
const isSentences = level === "SENTENCES";

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

function buildJobs(entry) {
  const jobs = [];
  const de = String(entry.de || "").trim();
  if (!de) return jobs;

  if (isSentences) {
    jobs.push({ text: de, filename: buildAudioFilename(de) });
    return jobs;
  }

  const article = entry.de_article ? String(entry.de_article).trim() : null;
  if (article) {
    jobs.push({
      text: buildSpeechInput(article, de),
      filename: buildAudioFilename(article, de),
    });
  } else {
    jobs.push({
      text: `${capitalizeGermanWord(de)}.`,
      filename: buildAudioFilename(de),
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
    });
  }
  return jobs;
}

const win = {};
const dataFile = isSentences
  ? path.join(ROOT, "data", "sentences.js")
  : path.join(ROOT, "data", `${level.toLowerCase()}.js`);
const wordsKey = isSentences ? "SENTENCE_ENTRIES" : `${level}_WORDS`;
vm.runInContext(fs.readFileSync(dataFile, "utf8"), vm.createContext({ window: win, console }));
const words = win[wordsKey];
const jobs = words.flatMap(buildJobs);
const chars = jobs.reduce((sum, job) => sum + job.text.length, 0);
const existing = jobs.filter((job) => fs.existsSync(path.join(AUDIO_DIR, job.filename))).length;

console.log(
  JSON.stringify({ level, entries: words.length, jobs: jobs.length, chars, existing }, null, 2)
);
