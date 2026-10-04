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

const BATCH = "LRB-083";
const INPUT = path.join(ROOT, `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const OUT = path.join(ROOT, `scripts/data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const CHUNK = 10;

const SYSTEM_BY_LANG = {
  ru: [
    "You are GPT-5.6 Luna, Russian (ru) linguistic reviewer for G2/A1 German vocabulary cards.",
    "LV (lv_source) is meaning reference only — never copy Latvian as Russian.",
    "DE (de_reference) is STRICT READ-ONLY — never propose DE changes.",
    "Review current Russian (target_current) and produce corrected Russian owner_new values.",
    "Return ONLY valid JSON: { \"decisions\": [ ... ] }.",
    "Each decision: { finding_stable_ids, owner_decision (LABOT|NELABOT), owner_new, owner_note }.",
    "LABOT: provide exact replacement Russian text in owner_new.",
    "NELABOT: owner_new empty, explain why current is acceptable.",
    "For scalar lv field: owner_new is plain string.",
    "For composite/multi-field paths: owner_new is JSON string matching production structure.",
    "For MULTI_TRANSLATION native fields: owner_new uses 'X • Y' bullet format.",
    "Fix wrong-language remnants (Latvian, English, Bulgarian, etc.), mistranslations, POS errors.",
    "Russian must be natural, grammatical, semantically aligned with DE and LV meaning.",
    "Each owner_note must be unique and cite the specific DE word and fix rationale.",
    "Do NOT use bulk/template notes. DE untouched.",
  ].join("\n"),
  ro: [
    "You are GPT-5.6 Luna, Romanian (ro) linguistic reviewer for G2/A1 German vocabulary cards.",
    "LV (lv_source) is meaning reference only — never copy Latvian as Romanian.",
    "DE (de_reference) is STRICT READ-ONLY — never propose DE changes.",
    "Review current Romanian (target_current) and produce corrected Romanian owner_new values.",
    "Return ONLY valid JSON: { \"decisions\": [ ... ] }.",
    "Each decision: { finding_stable_ids, owner_decision (LABOT|NELABOT), owner_new, owner_note }.",
    "LABOT: provide exact replacement Romanian text in owner_new.",
    "NELABOT: owner_new empty, explain why current is acceptable.",
    "For scalar lv field: owner_new is plain string.",
    "For composite/multi-field paths: owner_new is JSON string matching production structure.",
    "For MULTI_TRANSLATION native fields: owner_new uses 'X • Y' bullet format.",
    "Fix wrong-language remnants (Latvian, English, Russian, Bulgarian, etc.), mistranslations, POS errors.",
    "Romanian must be natural, grammatical, semantically aligned with DE and LV meaning.",
    "Each owner_note must be unique and cite the specific DE word and fix rationale.",
    "Do NOT use bulk/template notes. DE untouched.",
  ].join("\n"),
  sk: [
    "You are GPT-5.6 Luna, Slovak (sk) linguistic reviewer for G2/A1 German vocabulary cards.",
    "LV (lv_source) is meaning reference only — never copy Latvian as Slovak.",
    "DE (de_reference) is STRICT READ-ONLY — never propose DE changes.",
    "Review current Slovak (target_current) and produce corrected Slovak owner_new values.",
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
  ].join("\n"),
};

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function getLang(row) {
  const m = (row.finding_stable_ids || "").match(/^g2\/a1\/([a-z]{2})\|/);
  if (m) return m[1];
  return String(row.languages || "").replace(/"/g, "").trim();
}

function findCard(cards, row) {
  const id = row.card_object_id || "";
  if (id.startsWith("a1-")) {
    return cards.find((c) => c.study?.id === id || c.id === id);
  }
  const m = id.match(/^(.+?)\|idx:(\d+)$/);
  if (m) {
    const de = m[1];
    const index = Number(m[2]);
    const hit = cards.find((c) => c.de === de && c.index === index);
    if (hit) return hit;
    return cards.find((c) => c.de === de);
  }
  return cards.find((c) => c.de === id);
}

function buildItem(row, card) {
  let targetCurrent = row.production_current || "";
  if (card && !targetCurrent) {
    const fp = row.field_path || "lv";
    if (fp === "lv" || fp.includes(".native")) {
      targetCurrent = card.lv || targetCurrent;
    } else if (fp.includes("study") || fp.includes("translation")) {
      const parts = {};
      if (fp.includes("translation") || fp === "lv, study") {
        targetCurrent = JSON.stringify({ lv: card.lv, study: card.study });
      } else if (card.study) {
        for (const part of fp.split(/[;,]\s*/)) {
          const key = part.trim();
          if (key === "lv") parts.lv = card.lv;
          else if (key.startsWith("study.")) {
            const sub = key.slice(6);
            const val = card.study[sub];
            if (val !== undefined) parts[key] = val;
          } else if (key === "study") parts.study = card.study;
        }
        targetCurrent = JSON.stringify(parts);
      }
    }
  }
  return {
    finding_stable_ids: row.finding_stable_ids,
    language: getLang(row),
    card_object_id: row.card_object_id,
    de_reference: row.de_reference,
    lv_source: row.lv_source,
    field_path: row.field_path,
    canonical_bucket: row.canonical_bucket,
    target_current: targetCurrent,
  };
}

async function auditChunk(items, lang, stats) {
  const input = [
    `Produce individual OWNER decisions for these ${lang.toUpperCase()} G2/A1 cards. Return json decisions array.`,
    JSON.stringify({ batch: BATCH, language: lang, items }),
  ].join("\n");

  const response = await client.responses.create({
    model: DEFAULT_MODEL,
    instructions: SYSTEM_BY_LANG[lang],
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
  if (!Array.isArray(decisions)) throw new Error(`No decisions array in Luna response for ${lang}`);
  return decisions;
}

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY missing");

  const { rows } = loadCsv(INPUT);
  const cardsByLang = {
    ro: loadG2Objects("ro", "a1"),
    ru: loadG2Objects("ru", "a1"),
    sk: loadG2Objects("sk", "a1"),
  };

  const items = rows.map((row) => {
    const lang = getLang(row);
    const card = findCard(cardsByLang[lang] || [], row);
    return buildItem(row, card);
  });

  const stats = createStats();
  const all = [];

  const roItems = items.filter((i) => i.language === "ro");
  const ruItems = items.filter((i) => i.language === "ru");
  const skItems = items.filter((i) => i.language === "sk");

  for (const [lang, langItems] of [["ro", roItems], ["ru", ruItems], ["sk", skItems]]) {
    if (!langItems.length) continue;
    for (let i = 0; i < langItems.length; i += CHUNK) {
      const chunk = langItems.slice(i, i + CHUNK);
      const label = `${lang} ${i + 1}-${i + chunk.length}`;
      process.stdout.write(`Luna chunk ${label}...\n`);
      const decisions = await auditChunk(chunk, lang, stats);
      all.push(...decisions);
      process.stdout.write(`  got ${decisions.length} decisions\n`);
    }
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
        ro: roItems.length,
        ru: ruItems.length,
        sk: skItems.length,
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
