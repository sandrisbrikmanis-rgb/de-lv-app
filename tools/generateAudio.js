#!/usr/bin/env node
// tools/generateAudio.js
// Ģenerē vācu izrunu MP3 failus pamatvārdiem, izmantojot OpenAI TTS.
// Palaist: node tools/generateAudio.js [A1|A2|...|sentences|Sätze] [--only=Vase] [--force]

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const OpenAI = require("openai");

const ROOT = path.join(__dirname, "..");
const ARGS = process.argv.slice(2);
const ONLY_WORD = (() => {
  const match = ARGS.find((arg) => arg.startsWith("--only="));
  return match ? match.slice("--only=".length).trim().toLowerCase() : "";
})();
const FORCE = ARGS.includes("--force");
const RAW_LEVEL = (ARGS.find((arg) => !arg.startsWith("--")) || "A1").trim();
const LEVEL_ALIASES = {
  sentences: "SENTENCES",
  sentence: "SENTENCES",
  satze: "SENTENCES",
  sätze: "SENTENCES",
  teikumi: "SENTENCES",
};
const LEVEL = LEVEL_ALIASES[RAW_LEVEL.toLowerCase()] || RAW_LEVEL.toUpperCase();
const IS_SENTENCES = LEVEL === "SENTENCES";
const DATA_FILE = IS_SENTENCES
  ? path.join(ROOT, "data", "sentences.js")
  : path.join(ROOT, "data", `${LEVEL.toLowerCase()}.js`);
const WORDS_KEY = IS_SENTENCES ? "SENTENCE_ENTRIES" : `${LEVEL}_WORDS`;
const AUDIO_DIR = path.join(ROOT, "public", "audio");

const MODEL = "tts-1-hd";
const VOICE = "alloy";
const REQUEST_DELAY_MS = 250;

function loadEnvFile() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (key && process.env[key] == null) {
      process.env[key] = value;
    }
  }
}

function loadWords() {
  const win = {};
  const ctx = vm.createContext({ window: win, console });
  vm.runInContext(fs.readFileSync(DATA_FILE, "utf8"), ctx, {
    filename: `${LEVEL.toLowerCase()}.js`,
  });
  const words = win[WORDS_KEY];
  if (!Array.isArray(words)) {
    throw new Error(`${WORDS_KEY} nav atrasts ${DATA_FILE}`);
  }
  return words;
}

function sanitizeFilename(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[/\\:*?"<>|]/g, "");
}

function buildJobs(entry) {
  const jobs = [];
  const de = String(entry.de || "").trim();
  if (!de) return jobs;

  if (IS_SENTENCES) {
    jobs.push({
      text: de,
      filename: `${sanitizeFilename(de)}.mp3`,
    });
    return jobs;
  }

  const article = entry.de_article ? String(entry.de_article).trim().toLowerCase() : null;

  if (article) {
    jobs.push({
      text: `${article} ${de}`,
      filename: `${article}_${sanitizeFilename(de)}.mp3`,
    });
  } else {
    jobs.push({
      text: de,
      filename: `${sanitizeFilename(de)}.mp3`,
    });
  }

  if (entry.de_plural) {
    const pluralText = String(entry.de_plural).trim();
    jobs.push({
      text: pluralText,
      filename: `plural_${sanitizeFilename(pluralText)}.mp3`,
    });
  }

  return jobs;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateSpeech(client, text, outputPath) {
  const response = await client.audio.speech.create({
    model: MODEL,
    voice: VOICE,
    input: text,
  });

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
}

async function main() {
  loadEnvFile();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("Kļūda: iestati OPENAI_API_KEY vides mainīgo.");
    process.exit(1);
  }

  fs.mkdirSync(AUDIO_DIR, { recursive: true });

  const words = loadWords().filter((entry) => {
    if (!ONLY_WORD) return true;
    return String(entry.de || "").trim().toLowerCase() === ONLY_WORD;
  });
  if (ONLY_WORD && !words.length) {
    throw new Error(`Nav atrasts vārds "${ONLY_WORD}" ${DATA_FILE}`);
  }
  const jobs = words.flatMap((entry) => buildJobs(entry));

  console.log(`${IS_SENTENCES ? "Teikumi" : LEVEL} ieraksti: ${words.length}`);
  console.log(`Audio faili ģenerēšanai: ${jobs.length}`);
  console.log(`Modelis: ${MODEL}, balss: ${VOICE}`);
  console.log(`Mape: ${AUDIO_DIR}\n`);

  const client = new OpenAI({ apiKey });

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    const outputPath = path.join(AUDIO_DIR, job.filename);

    if (fs.existsSync(outputPath) && !FORCE) {
      skipped++;
      continue;
    }

    process.stdout.write(`[${i + 1}/${jobs.length}] ${job.filename} … `);

    try {
      await generateSpeech(client, job.text, outputPath);
      created++;
      console.log("OK");
    } catch (error) {
      failed++;
      console.log(`KĻŪDA: ${error.message || error}`);
    }

    if (i < jobs.length - 1) {
      await sleep(REQUEST_DELAY_MS);
    }
  }

  console.log("\nPabeigts.");
  console.log(`Jauni: ${created}, izlaisti (jau eksistē): ${skipped}, kļūdas: ${failed}`);
  if (failed > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
