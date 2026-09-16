#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-072";
const PASTE_PATH =
  process.argv[2] ||
  path.join(ROOT, "scripts/data/g2-a1-owner-pending/LRB-072-decisions-COPY-PASTE.json");
const EXPECTED_PASTE_SHA =
  "cdec04333276175cca81605ac9e157660158e929a45e79f742542613c979d243";
const EXPECTED_INPUT_SHA =
  "138d8f6c230c4c329e3d6d94371a10de4445239fc6b0c283d3c9c4eccc89907e";
const EXPECTED_ROWS = 15;
const EXPECTED_UNIQUE_CARDS = 11;
const EXPECTED_FULL_COMPOSITES = 7;
const EXPECTED_SCALAR_CARDS = 4;

function loadA1(lang) {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, `data/${lang}/a1.js`), "utf8"), ctx);
  return ctx.window.A1_WORDS;
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

function productionEntryForCard(words, cardKey) {
  return (
    words.find((e) => e.de === cardKey) ||
    words.find((e) => e.study?.id === cardKey) ||
    words.find((e) => e.study?.id === `a1-${cardKey}`) ||
    words.find((e) => e.de === cardKey.replace(/^a1-/, ""))
  );
}

function nestedFromProduction(entry) {
  if (!entry) return { lv: "" };
  return {
    lv: entry.lv,
    study: entry.study ? JSON.parse(JSON.stringify(entry.study)) : undefined,
  };
}

function ownerNewToComposite(ownerNew) {
  if (ownerNew == null) return {};
  if (typeof ownerNew === "object") return ownerNew;
  const raw = String(ownerNew).trim();
  if (!raw) return {};
  if (raw.startsWith("{") || raw.startsWith("[")) return JSON.parse(raw);
  return { lv: raw };
}

function resolveCardDecision(mapping, cardKey, words) {
  if (mapping.labot_full_composite && cardKey in mapping.labot_full_composite) {
    const prodEntry = productionEntryForCard(words, cardKey);
    const base = nestedFromProduction(prodEntry);
    const merged = applyPatches(base, mapping.labot_full_composite[cardKey]);
    return {
      owner_decision: "LABOT",
      owner_new: nestedToOwnerNewFlat(merged),
      replacement_scope: "full_card_target_fields",
      merged,
    };
  }
  if (mapping.labot_scalar && cardKey in mapping.labot_scalar) {
    const scalar = mapping.labot_scalar[cardKey];
    const prodEntry = productionEntryForCard(words, cardKey);
    const base = nestedFromProduction(prodEntry);
    const merged = applyPatches(base, { lv: scalar });
    return {
      owner_decision: "LABOT",
      owner_new: scalar,
      replacement_scope: "finding_field_only",
      merged,
    };
  }
  return null;
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

  const fullIds = Object.keys(mapping.labot_full_composite || {}).sort();
  const scalarIds = Object.keys(mapping.labot_scalar || {}).sort();
  if (fullIds.length !== EXPECTED_FULL_COMPOSITES) {
    throw new Error(`Expected ${EXPECTED_FULL_COMPOSITES} full composites, got ${fullIds.length}`);
  }
  if (scalarIds.length !== EXPECTED_SCALAR_CARDS) {
    throw new Error(`Expected ${EXPECTED_SCALAR_CARDS} scalar cards, got ${scalarIds.length}`);
  }

  const inputPath = path.join(ROOT, "reports/g2-a1-owner/batches-pending", `${BATCH}-input.csv`);
  const { header, rows } = loadCsv(inputPath);
  if (rows.length !== EXPECTED_ROWS) throw new Error(`Expected ${EXPECTED_ROWS} rows, got ${rows.length}`);
  const inputSha = crypto.createHash("sha256").update(fs.readFileSync(inputPath)).digest("hex");
  if (inputSha !== EXPECTED_INPUT_SHA) throw new Error(`Input CSV SHA mismatch: got ${inputSha}`);

  const words = loadA1("lb");
  const cardDecisionCache = new Map();
  for (const cardKey of [...fullIds, ...scalarIds]) {
    const resolved = resolveCardDecision(mapping, cardKey, words);
    if (!resolved) throw new Error(`Failed to resolve ${cardKey}`);
    cardDecisionCache.set(cardKey, resolved);
  }

  const decisions = {};
  let rowNum = 0;
  for (const row of rows) {
    rowNum += 1;
    const cardKey = row.card_object_id.split("|")[0];
    const resolved = cardDecisionCache.get(cardKey);
    if (!resolved) throw new Error(`No mapping for card ${cardKey}`);
    const deRef = row.de_reference || cardKey.replace(/^a1-/, "");
    decisions[row.finding_stable_ids] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: resolved.owner_new,
      owner_note: `LB ${deRef} / ${row.field_path}: individuāli pārbaudīta LRB-072 rinda ${rowNum}/15; OWNER COPY-PASTE (${resolved.replacement_scope}).`,
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
        labot: 15,
        nelabot: 0,
        pending: 0,
        provenance_individual_count: 15,
        unique_cards: EXPECTED_UNIQUE_CARDS,
        full_composites: EXPECTED_FULL_COMPOSITES,
        scalar_cards: EXPECTED_SCALAR_CARDS,
        classification: "G2_A1_PENDING_BATCH_REVIEW_COMPLETE",
        paste_sha256: pasteSha,
      },
      null,
      2
    )}\n`
  );

  const cardsByKey = new Map();
  for (const row of rows) {
    const cardKey = row.card_object_id.split("|")[0];
    const key = `lb:${cardKey}`;
    if (cardsByKey.has(key)) continue;
    const resolved = cardDecisionCache.get(cardKey);
    cardsByKey.set(key, {
      card_object_id: row.card_object_id,
      de_reference: row.de_reference,
      owner_decision: "LABOT",
      replacement_scope: resolved.replacement_scope,
      post_owner: resolved.merged,
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
    scope: "a1-uhr..rechts (15 LB rows, 11 unique cards, final non-idx mop-up)",
    rows: 15,
    uniqueCards: galaCards.length,
    paste_sha256: pasteSha,
    full_card_replacements: fullIds.length,
    full_card_object_ids: fullIds,
    scalar_card_object_ids: scalarIds,
    classification: "LRB_072_COPY_PASTE_COMPLETE_AWAITING_GALA_VERDICT",
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
        labot: 15,
        nelabot: 0,
        pending: 0,
        unique_cards: galaCards.length,
        full_composites: fullIds.length,
        scalar_cards: scalarIds.length,
        classification: galaOut.classification,
      },
      null,
      2
    )
  );
}

if (require.main === module) main();
