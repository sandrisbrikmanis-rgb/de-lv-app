#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { loadG2Objects } = require("./lib/luna-object-loaders");
const OpenAI = require("openai");

const DEFAULT_MODEL = "gpt-5.6-luna";

function createStats() {
  return { model: DEFAULT_MODEL, requestCount: 0, batchCount: 0, batchSizes: [], totalTokens: 0 };
}

const BATCH = "LRB-088";
const INPUT = path.join(ROOT, `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const OUT = path.join(ROOT, `scripts/data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const CHUNK = 10;

const SYSTEM = [
  "You are GPT-5.6 Luna, Slovak (sk) linguistic reviewer for G2/A1 German vocabulary cards.",
  "LV (lv_source) is meaning reference only — never copy Latvian as Slovak.",
  "DE (de_reference) is STRICT READ-ONLY — never propose DE changes.",
  "Review current Slovak (sk_current) and produce corrected Slovak owner_new values.",
  "Return ONLY valid JSON: { \"decisions\": [ ... ] }.",
  "Each decision: { finding_stable_ids, owner_decision (LABOT|NELABOT), owner_new, owner_note }.",
  "LABOT: provide exact replacement Slovak text in owner_new.",
  "NELABOT: owner_new empty, explain why current is acceptable.",
  "For scalar lv field: owner_new is plain string.",
  "For composite/multi-field paths: owner_new is JSON string matching production structure.",
  "For MULTI_TRANSLATION native fields: owner_new uses 'X • Y' bullet format.",
  "Fix wrong-language remnants (Czech, Bulgarian, English, etc.), mistranslations, POS errors.",
  "Slovak must be natural, grammatical, semantically aligned with DE and LV meaning.",
  "Each owner_note must be unique and cite the specific DE word and fix rationale.",
  "Do NOT use bulk/template notes. DE untouched.",
].join("\n");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function cardKeyFromRow(row) {
  const id = row.card_object_id || "";
  const m = id.match(/^(.+?)\|idx:(\d+)$/);
  if (m) return { de: m[1], index: Number(m[2]) };
  return { de: id, index: null };
}

function findCard(cards, row) {
  const { de, index } = cardKeyFromRow(row);
  if (index != null) {
    const hit = cards.find((c) => c.de === de && c.index === index);
    if (hit) return hit;
  }
  return cards.find((c) => c.de === de);
}

function buildItem(row, card) {
  let skCurrent = row.production_current || "";
  if (card) {
    const fp = row.field_path || "lv";
    if (fp === "lv" || fp === "a1.card.links.native" || fp === "a1.card.malen.native" || fp === "a1.card.rechts.native") {
      skCurrent = card.lv || skCurrent;
    } else if (fp.includes("study") || fp.includes("translation")) {
      const parts = {};
      if (fp.includes("translation") || fp === "lv, study") skCurrent = JSON.stringify({ lv: card.lv, study: card.study });
      else if (card.study) {
        for (const part of fp.split(/;\s*/)) {
          const key = part.trim();
          if (key === "lv") parts.lv = card.lv;
          else if (key.startsWith("study.")) {
            const sub = key.slice(6);
            const val = card.study[sub];
            if (val !== undefined) parts[key] = val;
          } else if (key === "study") parts.study = card.study;
        }
        skCurrent = JSON.stringify(parts);
      }
    }
  }
  return {
    finding_stable_ids: row.finding_stable_ids,
    card_object_id: row.card_object_id,
    de_reference: row.de_reference,
    lv_source: row.lv_source,
    field_path: row.field_path,
    canonical_bucket: row.canonical_bucket,
    sk_current: skCurrent,
  };
}

async function auditChunk(items, stats) {
  const input = [
    "Produce individual OWNER decisions for these Slovak G2/A1 cards. Return json decisions array.",
    JSON.stringify({ batch: BATCH, items }),
  ].join("\n");

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: SYSTEM,
    input,
    text: { format: { type: "json_object" } },
  });

  if (stats) {
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(items.length);
    if (response.usage) stats.totalTokens += response.usage.total_tokens || 0;
  }

  const parsed = JSON.parse(response.output_text || "{}");
  const decisions = parsed.decisions || parsed.items || [];
  if (!Array.isArray(decisions)) throw new Error("No decisions array in Luna response");
  return decisions;
}

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY missing");

  const { rows } = loadCsv(INPUT);
  const cards = loadG2Objects("sk", "a1");
  const items = rows.map((row) => buildItem(row, findCard(cards, row)));
  const stats = createStats();
  const all = [];

  for (let i = 0; i < items.length; i += CHUNK) {
    const chunk = items.slice(i, i + CHUNK);
    const label = `${i + 1}-${i + chunk.length}`;
    process.stdout.write(`Luna chunk ${label}...\n`);
    const decisions = await auditChunk(chunk, stats);
    all.push(...decisions);
    process.stdout.write(`  got ${decisions.length} decisions\n`);
  }

  const byId = {};
  let labot = 0;
  let nelabot = 0;
  for (const d of all) {
    if (!d.finding_stable_ids) continue;
    const decision = String(d.owner_decision || "LABOT").toUpperCase();
    byId[d.finding_stable_ids] = {
      owner_status: "DECIDED",
      owner_decision: decision,
      owner_new: d.owner_new || "",
      owner_note: d.owner_note || "",
    };
    if (decision === "LABOT") labot++;
    else nelabot++;
  }

  const missing = rows.filter((r) => !byId[r.finding_stable_ids]);
  if (missing.length) {
    console.error("Missing decisions for:", missing.map((r) => r.finding_stable_ids));
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(byId, null, 2)}\n`);

  console.log(
    JSON.stringify(
      {
        batch: BATCH,
        model: DEFAULT_MODEL,
        total: rows.length,
        labot,
        nelabot,
        stats,
        out: path.relative(ROOT, OUT),
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
