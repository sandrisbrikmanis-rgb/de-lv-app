#!/usr/bin/env node
// tools/generateAudioElevenLabs.js
// Ģenerē vācu izrunu MP3 failus, izmantojot ElevenLabs TTS.
// Palaist:
//   node tools/generateAudioElevenLabs.js A1 --limit=5 --force
//   node tools/generateAudioElevenLabs.js A1 --force --concurrency=8
//   node tools/generateAudioElevenLabs.js sentences --limit=5 --force
//   node tools/generateAudioElevenLabs.js --test --force
//   node tools/generateAudioElevenLabs.js --list-voices

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const ARGS = process.argv.slice(2);
const AUDIO_DIR = path.join(ROOT, "public", "audio");

const ONLY_WORD = (() => {
  const match = ARGS.find((arg) => arg.startsWith("--only="));
  return match ? match.slice("--only=".length).trim().toLowerCase() : "";
})();
const LIMIT = (() => {
  const match = ARGS.find((arg) => arg.startsWith("--limit="));
  return match ? Math.max(0, Number.parseInt(match.slice("--limit=".length), 10) || 0) : 0;
})();
const VOICE_ID = (() => {
  const match = ARGS.find((arg) => arg.startsWith("--voice="));
  return match ? match.slice("--voice=".length).trim() : "";
})();
const FORCE = ARGS.includes("--force");
const LIST_VOICES = ARGS.includes("--list-voices");
const TEST_MODE = ARGS.includes("--test");
const CONCURRENCY = (() => {
  const match = ARGS.find((arg) => arg.startsWith("--concurrency="));
  return match
    ? Math.max(1, Number.parseInt(match.slice("--concurrency=".length), 10) || 5)
    : 5;
})();
const MAX_RETRIES = 4;
const RETRY_BASE_MS = 1500;

const MODEL = "eleven_multilingual_v2";
const DEFAULT_VOICE_SETTINGS = {
  // ElevenLabs web app defaults: Stability 50%, Clarity + Similarity 75%, Style 0%.
  stability: 0.5,
  similarity_boost: 0.75,
  style: 0.0,
  speed: 1.0,
  use_speaker_boost: true,
};
const DEFAULT_GERMAN_VOICE_NAME = "Irene";
const DEFAULT_GERMAN_VOICE_ID = "8wPhfH9uUzEMHTmRkoAR"; // Irene – Warm, Smart (german native)

const LEVEL_ALIASES = {
  sentences: "SENTENCES",
  sentence: "SENTENCES",
  satze: "SENTENCES",
  sätze: "SENTENCES",
  teikumi: "SENTENCES",
};

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
    if (key) {
      process.env[key] = value;
    }
  }
}

function sanitizeFilename(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[/\\:*?"<>|]/g, "");
}

function buildAudioFilename(...parts) {
  const stem = parts
    .map((part) => sanitizeFilename(part))
    .filter(Boolean)
    .join("_");
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
  if (art) {
    // Punkts palīdz TTS nenoslēgt frāzi tikai pie artikula (piem. "das" nevis "das Brot").
    return `${art} ${word}.`;
  }
  return `${word}.`;
}

function buildJobs(entry, isSentences) {
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

function loadWords(level) {
  const isSentences = level === "SENTENCES";
  const dataFile = isSentences
    ? path.join(ROOT, "data", "sentences.js")
    : path.join(ROOT, "data", `${level.toLowerCase()}.js`);
  const wordsKey = isSentences ? "SENTENCE_ENTRIES" : `${level}_WORDS`;

  const win = {};
  const ctx = vm.createContext({ window: win, console });
  vm.runInContext(fs.readFileSync(dataFile, "utf8"), ctx, {
    filename: path.basename(dataFile),
  });

  const words = win[wordsKey];
  if (!Array.isArray(words)) {
    throw new Error(`${wordsKey} nav atrasts ${dataFile}`);
  }
  return { words, dataFile, isSentences };
}

function looksLikeVoiceId(value) {
  return /^[A-Za-z0-9]{16,}$/.test(String(value || "").trim());
}

async function searchVoices(apiKey, searchTerm) {
  const url = new URL("https://api.elevenlabs.io/v2/voices");
  url.searchParams.set("search", searchTerm);
  url.searchParams.set("page_size", "50");

  const response = await fetch(url, {
    headers: { "xi-api-key": apiKey },
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return Array.isArray(data.voices) ? data.voices : [];
}

function pickGermanVoice(voices, preferredName) {
  const wanted = String(preferredName || "").trim().toLowerCase();
  const exact = voices.filter((voice) => String(voice.name || "").toLowerCase() === wanted);
  const partial = voices.filter((voice) => String(voice.name || "").toLowerCase().includes(wanted));
  const candidates = exact.length ? exact : partial;

  const germanish = candidates.filter((voice) => {
    const labels = voice.labels || {};
    const haystack = [labels.language, labels.accent, voice.description, voice.name]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return /german|deutsch|\bde\b/.test(haystack);
  });

  return germanish[0] || candidates[0] || null;
}

async function resolveVoice(apiKey, voiceRef) {
  const ref = String(voiceRef || "").trim();
  if (!ref) {
    return {
      voiceId: DEFAULT_GERMAN_VOICE_ID,
      voiceName: DEFAULT_GERMAN_VOICE_NAME,
    };
  }

  if (looksLikeVoiceId(ref)) {
    return { voiceId: ref, voiceName: ref };
  }

  const voices = await searchVoices(apiKey, ref);
  const match = pickGermanVoice(voices, ref);
  if (match?.voice_id) {
    return { voiceId: match.voice_id, voiceName: match.name || ref };
  }

  return {
    voiceId: DEFAULT_GERMAN_VOICE_ID,
    voiceName: `${DEFAULT_GERMAN_VOICE_NAME} (fallback)`,
  };
}

async function elevenLabsRequest(apiKey, voiceId, text, attempt = 1) {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text,
        model_id: MODEL,
        voice_settings: DEFAULT_VOICE_SETTINGS,
      }),
    }
  );

  if (response.status === 429 && attempt <= MAX_RETRIES) {
    const waitMs = RETRY_BASE_MS * attempt;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
    return elevenLabsRequest(apiKey, voiceId, text, attempt + 1);
  }

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`HTTP ${response.status}: ${details.slice(0, 300)}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function listVoices(apiKey) {
  const voices = await searchVoices(apiKey, "Irene");
  const germanish = voices.filter((voice) => {
    const labels = voice.labels || {};
    const haystack = [
      voice.name,
      labels.language,
      labels.accent,
      labels.description,
      labels.use_case,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return /german|deutsch|\bde\b|irene/.test(haystack);
  });

  console.log("Irene / vācu balsis:\n");
  for (const voice of germanish.slice(0, 20)) {
    const labels = voice.labels || {};
    console.log(
      `- ${voice.name} (${voice.voice_id}) | valoda: ${labels.language || "?"}, akcents: ${labels.accent || "?"}, dzimums: ${labels.gender || "?"}`
    );
  }

  if (!germanish.length) {
    console.log("Nav atrasta Irene kontā. Izmanto noklusējuma ID:");
    console.log(`- ${DEFAULT_GERMAN_VOICE_NAME} (${DEFAULT_GERMAN_VOICE_ID})`);
  }

  console.log(`\nNoklusējuma balss šim skriptam: ${DEFAULT_GERMAN_VOICE_NAME} (${DEFAULT_GERMAN_VOICE_ID})`);
}

function countJobCharacters(jobs) {
  return jobs.reduce((sum, job) => sum + String(job.text || "").length, 0);
}

async function processJobsConcurrently(apiKey, voice, jobs) {
  let nextIndex = 0;
  let created = 0;
  let skipped = 0;
  let failed = 0;
  const failedJobs = [];

  async function runJob(job, labelIndex, allowRetryCollect = true) {
    const filename = String(job.filename || "").toLowerCase();
    const outputPath = path.join(AUDIO_DIR, filename);

    if (fs.existsSync(outputPath) && !FORCE) {
      skipped++;
      return true;
    }

    try {
      const buffer = await elevenLabsRequest(apiKey, voice.voiceId, job.text);
      fs.writeFileSync(outputPath, buffer);
      created++;
      console.log(`[${labelIndex}/${jobs.length}] ${filename} OK`);
      return true;
    } catch (error) {
      if (allowRetryCollect) {
        failed++;
        failedJobs.push(job);
      }
      console.log(
        `[${labelIndex}/${jobs.length}] ${filename} KĻŪDA: ${error.message || error}`
      );
      return false;
    }
  }

  async function worker() {
    while (true) {
      const i = nextIndex++;
      if (i >= jobs.length) break;
      await runJob(jobs[i], i + 1);
    }
  }

  const workerCount = Math.min(CONCURRENCY, Math.max(jobs.length, 1));
  await Promise.all(Array.from({ length: workerCount }, () => worker()));

  if (failedJobs.length) {
    console.log(`\nAtkārtots mēģinājums: ${failedJobs.length} neveiksmīgie faili…`);
    const retryFailed = failedJobs.splice(0);
    failed -= retryFailed.length;

    for (let i = 0; i < retryFailed.length; i++) {
      const ok = await runJob(retryFailed[i], i + 1, false);
      if (!ok) failed++;
    }
  }

  return { created, skipped, failed };
}

async function runLevel(apiKey, level, voice, entryLimit = LIMIT) {
  const { words, dataFile, isSentences } = loadWords(level);

  let filtered = words.filter((entry) => {
    if (!ONLY_WORD) return true;
    return String(entry.de || "").trim().toLowerCase() === ONLY_WORD;
  });

  if (ONLY_WORD && !filtered.length) {
    throw new Error(`Nav atrasts vārds "${ONLY_WORD}" ${dataFile}`);
  }

  if (entryLimit > 0) {
    filtered = filtered.slice(0, entryLimit);
  }

  const jobs = filtered.flatMap((entry) => buildJobs(entry, isSentences));

  const totalChars = countJobCharacters(jobs);
  const existingCount = jobs.filter((job) =>
    fs.existsSync(path.join(AUDIO_DIR, String(job.filename || "").toLowerCase()))
  ).length;

  console.log(`\n=== ${isSentences ? "Teikumi" : level} ===`);
  console.log(`Avots: ${dataFile}`);
  console.log(`Ieraksti: ${filtered.length}`);
  console.log(`Audio faili: ${jobs.length}`);
  console.log(`Kopā simboli (TTS teksts): ${totalChars.toLocaleString("lv-LV")}`);
  console.log(`Esošie MP3 (tādi paši nosaukumi): ${existingCount}`);
  console.log(`Režīms: ${FORCE ? "pārrakstīt esošos" : "izlaist esošos"}`);
  console.log(`Paralēlisms: ${CONCURRENCY} pieprasījumi`);
  console.log(`Modelis: ${MODEL}, balss: ${voice.voiceName} (${voice.voiceId})`);
  console.log(`Mape: ${AUDIO_DIR}\n`);

  const { created, skipped, failed } = await processJobsConcurrently(apiKey, voice, jobs);

  console.log(`Rezultāts: jauni/pārrakstīti ${created}, izlaisti ${skipped}, kļūdas ${failed}`);
  return { created, skipped, failed };
}

async function main() {
  loadEnvFile();

  const apiKey = String(process.env.ELEVENLABS_API_KEY || "").trim();
  if (!apiKey) {
    console.error("Kļūda: iestati ELEVENLABS_API_KEY .env failā.");
    process.exit(1);
  }

  if (LIST_VOICES) {
    await listVoices(apiKey);
    return;
  }

  fs.mkdirSync(AUDIO_DIR, { recursive: true });
  const voiceRef =
    VOICE_ID ||
    String(process.env.ELEVENLABS_VOICE_ID || "").trim() ||
    DEFAULT_GERMAN_VOICE_NAME;
  const voice = await resolveVoice(apiKey, voiceRef);
  console.log(`Izmantotā balss: ${voice.voiceName} (${voice.voiceId})`);

  if (TEST_MODE) {
    console.log("Testa režīms: A1 pirmie 5 vārdi + pirmie 5 teikumi");
    const a1 = await runLevel(apiKey, "A1", voice, 5);
    const sentences = await runLevel(apiKey, "SENTENCES", voice, 5);
    const totalFailed = a1.failed + sentences.failed;
    console.log("\nTesta ģenerēšana pabeigta.");
    if (totalFailed > 0) process.exit(1);
    return;
  }

  const rawLevel = (ARGS.find((arg) => !arg.startsWith("--")) || "A1").trim();
  const level = LEVEL_ALIASES[rawLevel.toLowerCase()] || rawLevel.toUpperCase();
  const result = await runLevel(apiKey, level, voice);
  console.log("\nPabeigts.");
  if (result.failed > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
