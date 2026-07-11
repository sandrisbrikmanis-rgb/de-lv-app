#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const AUDIO_DIR = path.join(ROOT, "public", "audio");
const WORDS = [
  "kino", "aschenputtel", "gott", "keller", "kellner", "kerl", "kerze",
  "keyboard", "kinderfunk", "kinderwagen", "kindheit", "kiosk", "kissen",
  "kissenbezug", "kiste", "zwilling", "kinderarzt",
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
  return String(text || "").trim().toLowerCase().replace(/\s+/g, "_").replace(/[/\\:*?"<>|]/g, "");
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
  const fem = entry.study?.variants?.find((v) => v.article === "die" && v.de !== de);
  if (fem) {
    jobs.push({
      text: buildSpeechInput("die", fem.de),
      filename: `die_${sanitizeFilename(fem.de)}.mp3`,
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
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  loadEnvFile();
  const apiKey = String(process.env.ELEVENLABS_API_KEY || "").trim();
  const voiceId = String(process.env.ELEVENLABS_VOICE_ID || "8wPhfH9uUzEMHTmRkoAR").trim();
  if (!apiKey) throw new Error("Missing ELEVENLABS_API_KEY");

  const win = {};
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data", "a2.js"), "utf8"), vm.createContext({ window: win }));
  const entries = (win.A2_WORDS || []).filter((e) => WORDS.includes(String(e.de || "").trim().toLowerCase()));
  const jobs = entries.flatMap(buildJobs);
  fs.mkdirSync(AUDIO_DIR, { recursive: true });

  let created = 0;
  let skipped = 0;
  for (const job of jobs) {
    const filename = String(job.filename || "").toLowerCase();
    const out = path.join(AUDIO_DIR, filename);
    if (fs.existsSync(out)) {
      skipped += 1;
      continue;
    }
    const buffer = await tts(apiKey, voiceId, job.text);
    fs.writeFileSync(out, buffer);
    created += 1;
    console.log(`OK ${filename}`);
  }
  console.log(`Done: created ${created}, skipped ${skipped}, total ${jobs.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
