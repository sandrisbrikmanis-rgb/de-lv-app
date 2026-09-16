#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-071";
const PASTE_PATH =
  process.argv[2] ||
  path.join(ROOT, "scripts/data/g2-a1-owner-pending/LRB-071-decisions-COPY-PASTE.json");
const EXPECTED_PASTE_SHA =
  "b7708c53462c11126bc237e23356b75a92907d029ab919ba950befbe060f72c5";
const EXPECTED_INPUT_SHA =
  "2b6bdede8011f1d79965ceba80aa89e0e1ffb01480e4f015e0a162d1e4c728c2";
const EXPECTED_ROWS = 50;
const EXPECTED_UNIQUE_CARDS = 27;

const LB_CARD_ALIASES = {
  "a1-heissen": "a1-heißen",
  "a1-koennen": "a1-können",
  "a1-ueber": "a1-über",
};

function loadA1(lang) {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, `data/${lang}/a1.js`), "utf8"), ctx);
  return ctx.window.A1_WORDS;
}

function buildNestedMap(words) {
  const map = {};
  for (const entry of words) {
    const nested = {
      lv: entry.lv,
      study: entry.study ? JSON.parse(JSON.stringify(entry.study)) : undefined,
    };
    map[entry.de] = nested;
    if (entry.study?.id) map[entry.study.id] = nested;
  }
  return map;
}

const NESTED_BY_LANG = { lb: buildNestedMap(loadA1("lb")) };

function nestedForCard(lang, cardKey) {
  const map = NESTED_BY_LANG[lang];
  const resolved = LB_CARD_ALIASES[cardKey] || cardKey;
  return (
    map[resolved] ||
    map[cardKey] ||
    map[`a1-${resolved}`] ||
    map[`a1-${cardKey}`] ||
    map[resolved.replace(/^a1-/, "")] ||
    map[cardKey.replace(/^a1-/, "")] ||
    Object.values(map).find(
      (entry) =>
        entry?.study?.id === resolved ||
        entry?.study?.id === cardKey ||
        entry?.study?.id === `a1-${resolved}` ||
        entry?.study?.id === `a1-${cardKey}`
    )
  );
}

function parseMaybeJson(v) {
  if (typeof v !== "string") return v;
  const t = v.trim();
  if (
    (t.startsWith("[") && t.endsWith("]")) ||
    (t.startsWith("{") && t.endsWith("}")) ||
    (t.startsWith('"') && t.endsWith('"'))
  ) {
    try {
      return JSON.parse(t);
    } catch {
      return v;
    }
  }
  return v;
}

function applyPatches(nested, composite) {
  const out = JSON.parse(JSON.stringify(nested));
  for (const [p, value] of Object.entries(composite)) {
    const parsedValue = parseMaybeJson(value);
    if (p === "study" && parsedValue && typeof parsedValue === "object" && !Array.isArray(parsedValue)) {
      out.study = JSON.parse(JSON.stringify(parsedValue));
      if (out.lv == null && out.study?.translation != null) out.lv = out.study.translation;
      continue;
    }
    if (p === "lv") {
      out.lv = parsedValue;
      continue;
    }
    if (!out.study && p.startsWith("study.")) out.study = {};
    if (p.startsWith("study.")) {
      const field = p.slice(6);
      const top = field.split(/[.[]/)[0];
      if (typeof out.study[top] === "string") out.study[top] = parseMaybeJson(out.study[top]);
      if (field.includes("[") && !Array.isArray(out.study[top]) && out.study[top] == null) {
        out.study[top] = [];
      }
      if (!setAt(out.study, field, parsedValue)) out.study[field] = parsedValue;
    }
  }
  return out;
}

function nestedToOwnerNewFlat(merged) {
  const flat = {};
  if (merged.lv != null) flat.lv = merged.lv;
  if (merged.study) {
    for (const [k, v] of Object.entries(merged.study)) {
      if (v === null || v === undefined) continue;
      flat[`study.${k}`] = typeof v === "object" ? JSON.stringify(v) : String(v);
    }
  }
  return JSON.stringify(flat);
}

function main() {
  const pasteRaw = fs.readFileSync(PASTE_PATH, "utf8");
  const pasteSha = crypto.createHash("sha256").update(pasteRaw).digest("hex");
  if (pasteSha !== EXPECTED_PASTE_SHA) {
    throw new Error(`COPY-PASTE SHA mismatch: got ${pasteSha}, expected ${EXPECTED_PASTE_SHA}`);
  }
  const mapping = JSON.parse(pasteRaw);
  if (mapping.input_csv_sha256 !== EXPECTED_INPUT_SHA) {
    throw new Error(`input_csv_sha256 mismatch: got ${mapping.input_csv_sha256}`);
  }
  const composites = mapping.labot_full_composite;
  const cardIds = Object.keys(composites).sort();
  if (cardIds.length !== EXPECTED_UNIQUE_CARDS) {
    throw new Error(`Expected ${EXPECTED_UNIQUE_CARDS} composites, got ${cardIds.length}`);
  }
  for (const id of cardIds) {
    if (!composites[id] || typeof composites[id] !== "object" || !Object.keys(composites[id]).length) {
      throw new Error(`Empty composite for ${id}`);
    }
  }

  const inputPath = path.join(ROOT, "reports/g2-a1-owner/batches-pending", `${BATCH}-input.csv`);
  const { header, rows } = loadCsv(inputPath);
  if (rows.length !== EXPECTED_ROWS) throw new Error(`Expected ${EXPECTED_ROWS} rows, got ${rows.length}`);
  const inputSha = crypto.createHash("sha256").update(fs.readFileSync(inputPath)).digest("hex");
  if (inputSha !== EXPECTED_INPUT_SHA) throw new Error(`Input CSV SHA mismatch: got ${inputSha}`);

  const mergedByCard = new Map();
  for (const cardId of cardIds) {
    const base = nestedForCard("lb", cardId);
    if (!base) throw new Error(`No production nested card for ${cardId}`);
    mergedByCard.set(cardId, applyPatches(JSON.parse(JSON.stringify(base)), composites[cardId]));
  }

  const decisions = {};
  let rowNum = 0;
  for (const row of rows) {
    rowNum += 1;
    const cardId = row.card_object_id.split("|")[0];
    const merged = mergedByCard.get(cardId);
    if (!merged) throw new Error(`No composite for card ${cardId}`);
    const deRef = row.de_reference || cardId.replace(/^a1-/, "");
    decisions[row.finding_stable_ids] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: nestedToOwnerNewFlat(merged),
      owner_note: `LB ${deRef} / ${row.field_path}: individuāli pārbaudīta LRB-071 rinda ${rowNum}/50; pilnā full_card_target_fields aizvietojums pēc OWNER COPY-PASTE.`,
    };
  }

  const dataPath = path.join(ROOT, "scripts/data/g2-a1-owner-pending", `${BATCH}-decisions.json`);
  fs.writeFileSync(dataPath, `${JSON.stringify(decisions, null, 2)}\n`);

  const outHeader = [...header.filter((h) => h !== "provenance_type"), "provenance_type"];
  const reviewed = rows.map((row) => ({
    ...row,
    ...decisions[row.finding_stable_ids],
    unresolved_category: "",
    provenance_type: "INDIVIDUAL_LINGUISTIC",
  }));

  const outPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${BATCH}-decisions.csv`);
  const proofPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${BATCH}-proof.json`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buildCsv(outHeader, reviewed));
  fs.writeFileSync(
    proofPath,
    `${JSON.stringify(
      {
        batch_id: BATCH,
        row_count: reviewed.length,
        labot: 50,
        nelabot: 0,
        pending: 0,
        provenance_individual_count: 50,
        unique_cards: mergedByCard.size,
        classification: "G2_A1_PENDING_BATCH_REVIEW_COMPLETE",
        paste_sha256: pasteSha,
      },
      null,
      2
    )}\n`
  );

  const cardsByKey = new Map();
  for (const row of rows) {
    const cardId = row.card_object_id.split("|")[0];
    const key = `lb:${cardId}`;
    if (cardsByKey.has(key)) continue;
    cardsByKey.set(key, {
      card_object_id: row.card_object_id,
      de_reference: row.de_reference,
      owner_decision: "LABOT",
      replacement_scope: "full_card_target_fields",
      post_owner: mergedByCard.get(cardId),
    });
  }
  const galaCards = [...cardsByKey.values()].sort((a, b) =>
    a.card_object_id.localeCompare(b.card_object_id)
  );
  if (galaCards.length !== EXPECTED_UNIQUE_CARDS) {
    throw new Error(`Expected ${EXPECTED_UNIQUE_CARDS} gala cards, got ${galaCards.length}`);
  }

  const galaOut = {
    batch_id: BATCH,
    language: "lb",
    scope: "a1-hoeren-study..a1-ueber (50 LB rows, 27 unique cards, non-idx mop-up)",
    rows: 50,
    uniqueCards: galaCards.length,
    paste_sha256: pasteSha,
    full_card_replacements: galaCards.length,
    full_card_object_ids: cardIds,
    classification: "LRB_071_COPY_PASTE_COMPLETE_AWAITING_GALA_VERDICT",
    cards: galaCards,
  };
  const galaPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${BATCH}-gala-cards.json`);
  fs.writeFileSync(galaPath, `${JSON.stringify(galaOut, null, 2)}\n`);

  const ownerGalaPath = path.join(
    ROOT,
    "reports/g2-a1-owner/batches-owner-review",
    BATCH,
    `${BATCH}-gala-cards.json`
  );
  if (fs.existsSync(path.dirname(ownerGalaPath))) {
    fs.writeFileSync(ownerGalaPath, `${JSON.stringify(galaOut, null, 2)}\n`);
  }

  const decisionsSha = crypto.createHash("sha256").update(fs.readFileSync(dataPath)).digest("hex");
  console.log(
    JSON.stringify(
      {
        batch_id: BATCH,
        paste_sha256: pasteSha,
        decisions_sha256: decisionsSha,
        labot: 50,
        nelabot: 0,
        pending: 0,
        unique_cards: galaCards.length,
        classification: galaOut.classification,
      },
      null,
      2
    )
  );
}

if (require.main === module) main();
