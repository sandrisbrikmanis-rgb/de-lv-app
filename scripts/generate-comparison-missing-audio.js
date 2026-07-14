#!/usr/bin/env node
/**
 * Generate missing A1 comparison-card audio via edge-tts.
 * Requires: pip install edge-tts  (edge-tts CLI on PATH or ~/.local/bin)
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const AUDIO_DIRS = [
  path.join(ROOT, "public", "audio"),
  path.join(ROOT, "www", "public", "audio"),
];

const VOICE = "de-DE-KatjaNeural";

const JOBS = [
  { text: "die Zeit.", filename: "die_Zeit.mp3" },
  { text: "die Jeans.", filename: "die_Jeans.mp3" },
  { text: "fernsehen.", filename: "fernsehen.mp3" },
  { text: "hoch.", filename: "hoch.mp3" },
];

function edgeTtsBin() {
  const local = path.join(process.env.HOME || "", ".local", "bin", "edge-tts");
  if (fs.existsSync(local)) return local;
  return "edge-tts";
}

function synthesize(text, outFile) {
  const bin = edgeTtsBin();
  execFileSync(bin, ["--voice", VOICE, "--text", text, "--write-media", outFile], {
    stdio: "inherit",
  });
}

function main() {
  const primary = AUDIO_DIRS[0];
  if (!fs.existsSync(primary)) {
    console.error("audio dir missing:", primary);
    process.exit(1);
  }

  for (const job of JOBS) {
    const primaryPath = path.join(primary, job.filename);
    if (fs.existsSync(primaryPath)) {
      console.log("exists, skip:", job.filename);
      continue;
    }
    console.log("generating:", job.filename, "<-", job.text);
    synthesize(job.text, primaryPath);

    for (const dir of AUDIO_DIRS.slice(1)) {
      if (!fs.existsSync(dir)) continue;
      const dest = path.join(dir, job.filename);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(primaryPath, dest);
        console.log("copied to", dest);
      }
    }
  }
}

main();
