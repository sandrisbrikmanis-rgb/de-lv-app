#!/usr/bin/env node
/**
 * Generate missing study-card audio via edge-tts.
 * Usage:
 *   node scripts/generate-study-card-audio.js --card a1-sein
 *   node scripts/audit-study-card-audio.js --card a1-sein --json | node scripts/generate-study-card-audio.js --stdin
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

const cardArg = (() => {
  const m = process.argv.find((a) => a.startsWith("--card="));
  return m ? m.slice("--card=".length).trim() : "";
})();
const useStdin = process.argv.includes("--stdin");

function edgeTtsBin() {
  const local = path.join(process.env.HOME || "", ".local", "bin", "edge-tts");
  if (fs.existsSync(local)) return local;
  return "edge-tts";
}

function synthesize(text, outFile) {
  execFileSync(edgeTtsBin(), ["--voice", VOICE, "--text", text, "--write-media", outFile], {
    stdio: "inherit",
  });
}

function collectJobsFromAudit(reports) {
  const jobs = [];
  const seen = new Set();
  for (const report of reports) {
    for (const m of report.missing || []) {
      if (seen.has(m.filename)) continue;
      seen.add(m.filename);
      jobs.push({ text: m.text, filename: m.filename });
    }
  }
  return jobs;
}

async function main() {
  let jobs = [];
  if (useStdin) {
    const input = fs.readFileSync(0, "utf8");
    jobs = collectJobsFromAudit(JSON.parse(input));
  } else if (cardArg) {
    const { execFileSync: exec } = require("child_process");
    const out = exec("node", [path.join(__dirname, "audit-study-card-audio.js"), `--card=${cardArg}`, "--json"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    jobs = collectJobsFromAudit(JSON.parse(out.trim()));
  } else {
    console.error("Usage: --card=<study-id> or --stdin");
    process.exit(1);
  }

  if (!jobs.length) {
    console.log("Nav trūkstošu audio failu.");
    return;
  }

  const primary = AUDIO_DIRS[0];
  fs.mkdirSync(primary, { recursive: true });

  for (const job of jobs) {
    const primaryPath = path.join(primary, job.filename);
    if (fs.existsSync(primaryPath)) {
      console.log("exists, skip:", job.filename);
      continue;
    }
    console.log("generating:", job.filename, "<-", job.text);
    synthesize(job.text, primaryPath);
    for (const dir of AUDIO_DIRS.slice(1)) {
      fs.mkdirSync(dir, { recursive: true });
      fs.copyFileSync(primaryPath, path.join(dir, job.filename));
    }
  }

  execFileSync("node", [path.join(__dirname, "generate-audio-index.js")], { stdio: "inherit" });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
