#!/usr/bin/env node
"use strict";
/**
 * Fill precise Spanish NEW for LABOT decisions missing NEW (LV legacy HTML prose).
 * Uses GPT-5.6 Luna translation batches. READ-ONLY — no production apply.
 *
 * Usage: node scripts/fill-es-kurss-lessons-labot-new-luna.js [--resume]
 */
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const OpenAI = require("openai");
const { ROOT } = require("./lib/audit-common");

const IN_JSON = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-filled.json");
const OUT_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-labot-new-luna.json");
const PROGRESS = path.join(ROOT, "scripts/.es-kurss-lessons-labot-new-luna-progress.json");
const BATCH_SIZE = 12;
const MODEL = "gpt-5.6-luna";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM = [
  "Translate Latvian (or mixed LV/EN) pedagogical text to natural Spanish for German-language course learners.",
  "Keep all German words, examples, phonetic notation in parentheses unchanged (e.g. wir, spielen, (gē-en)).",
  "Replace Latvian explanatory prose with clear Spanish.",
  "Return JSON { items: [{ id, newEs }] } — one item per input id.",
  "newEs must be complete replacement text, ready for production COPY-ONLY apply.",
].join("\n");

function loadProgress() {
  if (!fs.existsSync(PROGRESS)) return { done: {} };
  return JSON.parse(fs.readFileSync(PROGRESS, "utf8"));
}

function saveProgress(p) {
  fs.writeFileSync(PROGRESS, JSON.stringify(p, null, 2));
}

async function translateBatch(items) {
  const payload = {
    task: "lv_prose_to_spanish",
    items: items.map((i) => ({
      id: i.id,
      current: i.current,
      deContext: i.deContext || "",
      path: i.path || "",
      lessonId: i.lessonId || "",
    })),
  };
  const response = await client.responses.create({
    model: MODEL,
    instructions: SYSTEM,
    input: `Translate each item to Spanish. Return exactly ${items.length} items as JSON.\n${JSON.stringify(payload)}`,
    text: { format: { type: "json_object" } },
  });
  const parsed = JSON.parse(response.output_text || "{}");
  const out = new Map();
  for (const item of parsed.items || []) {
    if (item.id && item.newEs) out.set(item.id, item.newEs);
  }
  return out;
}

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
  const data = JSON.parse(fs.readFileSync(IN_JSON, "utf8"));
  const need = data.decisions.filter(
    (d) => d.status === "LABOT" && (d.new === null || d.new === ""),
  );
  if (!need.length) {
    console.log("No LABOT items missing NEW");
    return;
  }

  const progress = loadProgress();
  const results = { ...(progress.done || {}) };
  const chunks = [];
  for (let i = 0; i < need.length; i += BATCH_SIZE) {
    chunks.push(need.slice(i, i + BATCH_SIZE));
  }

  for (let ci = 0; ci < chunks.length; ci++) {
    const chunk = chunks[ci].filter((d) => !results[d.id]);
    if (!chunk.length) continue;
    const label = `batch-${String(ci + 1).padStart(3, "0")}`;
    process.stdout.write(`  ${label}: ${chunk.length} items...\n`);
    try {
      const translated = await translateBatch(chunk);
      for (const [id, newEs] of translated) {
        results[id] = newEs;
      }
      progress.done = results;
      saveProgress(progress);
      fs.writeFileSync(OUT_JSON, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
    } catch (err) {
      console.error(`  ${label} failed: ${err.message}`);
      throw err;
    }
  }

  let filled = 0;
  for (const d of data.decisions) {
    if (d.status === "LABOT" && (d.new === null || d.new === "") && results[d.id]) {
      d.new = results[d.id];
      d.ownerDecision = `LABOT: Spanish rewrite of LV legacy prose (Luna translation).`;
      d.reason = "LV remnant replaced with natural Spanish; German examples preserved.";
      filled++;
    }
  }

  data.summary.labotMissingNew = data.decisions.filter(
    (d) => d.status === "LABOT" && (d.new === null || d.new === ""),
  ).length;
  fs.writeFileSync(IN_JSON, JSON.stringify(data, null, 2));
  console.log(JSON.stringify({ need: need.length, filled, remaining: data.summary.labotMissingNew }, null, 2));

  const { execSync } = require("child_process");
  execSync("node scripts/build-es-kurss-lessons-owner-decisions-filled.js --render-only", {
    cwd: ROOT,
    stdio: "inherit",
  });
}

if (require.main === module) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

module.exports = { translateBatch };
