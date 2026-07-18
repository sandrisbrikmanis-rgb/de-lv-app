#!/usr/bin/env node
/**
 * Generate missing A1–C2 + Teikumi audio via edge-tts.
 * Usage:
 *   node scripts/audit-level-audio.js --json | node scripts/generate-missing-level-audio.js --stdin
 *   node scripts/generate-missing-level-audio.js --level A1
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

const useStdin = process.argv.includes("--stdin");
const levelArg = (() => {
  const m = process.argv.find((a) => a.startsWith("--level="));
  return m ? m.slice("--level=".length).trim().toUpperCase() : "";
})();

function edgeTtsBin() {
  const local = path.join(process.env.HOME || "", ".local", "bin", "edge-tts");
  if (fs.existsSync(local)) return local;
  return "edge-tts";
}

function synthesize(text, outFile) {
  execFileSync(edgeTtsBin(), ["--voice", VOICE, "--text", text, "--write-media", outFile], {
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function collectJobs(auditSummary) {
  const jobs = [];
  const seen = new Set();
  for (const report of auditSummary.reports || []) {
    for (const m of report.missingFiles || []) {
      if (seen.has(m.filename)) continue;
      seen.add(m.filename);
      jobs.push({ text: m.text, filename: m.filename, level: report.level });
    }
  }
  return jobs;
}

async function main() {
  let auditSummary;
  if (useStdin) {
    auditSummary = JSON.parse(fs.readFileSync(0, "utf8"));
  } else if (levelArg) {
    const out = execFileSync(
      "node",
      [path.join(__dirname, "audit-level-audio.js"), `--level=${levelArg}`, "--json"],
      { encoding: "utf8" }
    );
    auditSummary = JSON.parse(out);
  } else {
    const out = execFileSync("node", [path.join(__dirname, "audit-level-audio.js"), "--json"], {
      encoding: "utf8",
    });
    auditSummary = JSON.parse(out);
  }

  const jobs = collectJobs(auditSummary);
  if (!jobs.length) {
    console.log("Nav trūkstošu audio failu.");
    return;
  }

  const primary = AUDIO_DIRS[0];
  fs.mkdirSync(primary, { recursive: true });
  let created = 0;
  let failed = 0;
  const results = [];

  for (const job of jobs) {
    const primaryPath = path.join(primary, job.filename);
    if (fs.existsSync(primaryPath)) {
      results.push({ ...job, status: "exists" });
      continue;
    }
    try {
      console.log(`[${job.level}] ${job.filename} <- ${job.text}`);
      synthesize(job.text, primaryPath);
      for (const dir of AUDIO_DIRS.slice(1)) {
        fs.mkdirSync(dir, { recursive: true });
        fs.copyFileSync(primaryPath, path.join(dir, job.filename));
      }
      created++;
      results.push({ ...job, status: "created" });
    } catch (err) {
      failed++;
      results.push({ ...job, status: "failed", error: String(err.message || err) });
      console.error("FAILED:", job.filename, err.message || err);
    }
  }

  if (created > 0) {
    execFileSync("node", [path.join(__dirname, "generate-audio-index.js")], { stdio: "inherit" });
  }

  const reportPath = path.join(ROOT, "scripts", "level-audio-generation-report.json");
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        created,
        failed,
        skipped: results.filter((r) => r.status === "exists").length,
        results,
      },
      null,
      2
    )
  );
  console.log(`\nDone: created=${created}, failed=${failed}, report=${reportPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
