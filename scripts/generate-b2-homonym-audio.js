#!/usr/bin/env node
/**
 * Regenerate audio for B2 homonym fixes: Gefallen, Verdienst, Tor, Flur.
 * Writes to public/audio and mirrors to www/public/audio.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const TARGET_WORDS = new Set(["gefallen", "verdienst", "tor", "flur"]);
const AUDIO_DIRS = [
  path.join(ROOT, "public", "audio"),
  path.join(ROOT, "www", "public", "audio"),
];

function loadEnvFile() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    process.env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }
}

function sanitizeFilename(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[/\\:*?"<>|]/g, "");
}

function buildSpeechInput(article, noun) {
  const art = String(article || "").trim().toLowerCase();
  const word = String(noun || "").trim();
  if (!word) return "";
  const cap = word.charAt(0).toUpperCase() + word.slice(1);
  return art ? `${art} ${cap}.` : `${cap}.`;
}

function buildJobs(entry) {
  const jobs = [];
  const de = String(entry.de || "").trim();
  const article = entry.de_article ? String(entry.de_article).trim() : null;

  if (article) {
    jobs.push({
      text: buildSpeechInput(article, de),
      filename: `${sanitizeFilename(article)}_${sanitizeFilename(de)}.mp3`,
    });
  }

  if (entry.de_plural) {
    const pluralText = String(entry.de_plural).trim();
    const parts = pluralText.split(/\s+/);
    const pluralArticle = parts[0]?.trim();
    jobs.push({
      text: pluralText.endsWith(".") ? pluralText : `${pluralText}.`,
      filename:
        pluralArticle && /^(der|die|das)$/i.test(pluralArticle)
          ? `plural_${sanitizeFilename(pluralArticle)}_${sanitizeFilename(de)}.mp3`
          : `plural_${sanitizeFilename(pluralText)}.mp3`,
    });
  }

  return jobs;
}

async function tts(apiKey, voiceId, text) {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0,
        speed: 1,
        use_speaker_boost: true,
      },
    }),
  });
  if (!response.ok) {
    const details = await response.text();
    throw new Error(`${response.status}: ${details.slice(0, 200)}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  loadEnvFile();
  const apiKey = String(process.env.ELEVENLABS_API_KEY || "").trim();
  const voiceId = String(process.env.ELEVENLABS_VOICE_ID || "8wPhfH9uUzEMHTmRkoAR").trim();
  if (!apiKey) throw new Error("Missing ELEVENLABS_API_KEY in .env");

  const win = {};
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data", "b2.js"), "utf8"), vm.createContext({ window: win }));
  const entries = (win.B2_WORDS || []).filter((e) =>
    TARGET_WORDS.has(String(e.de || "").trim().toLowerCase())
  );

  const jobs = entries.flatMap(buildJobs);
  for (const dir of AUDIO_DIRS) fs.mkdirSync(dir, { recursive: true });

  let created = 0;
  for (const job of jobs) {
    const filename = String(job.filename || "").toLowerCase();
    const buffer = await tts(apiKey, voiceId, job.text);
    for (const dir of AUDIO_DIRS) {
      fs.writeFileSync(path.join(dir, filename), buffer);
    }
    created += 1;
    console.log(`OK ${filename} <- "${job.text}"`);
  }

  console.log(`Done: regenerated ${created} audio files in ${AUDIO_DIRS.length} dirs`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
