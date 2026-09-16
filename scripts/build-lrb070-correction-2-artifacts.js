#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-070";
const CHECK_ONLY = process.argv.includes("--check-only");
const pasteArg = process.argv.slice(2).find((a) => !a.startsWith("-"));
const PASTE_PATH =
  pasteArg ||
  path.join(ROOT, "scripts/data/g2-a1-owner-pending/LRB-070-decisions-COPY-PASTE-2.json");
const EXPECTED_BASE_PASTE_SHA =
  "918818511434da65ce41f20be103bbeeb29d58d768a55743e08f2ff089d50fc9";
const EXPECTED_INPUT_SHA =
  "50bd863777a163de7d5c66fb367fb53d61b64022bb48482a37f6bd84d6fd7dd5";
const REQUIRED_FINDINGS_PATH = path.join(
  ROOT,
  "scripts/data/g2-a1-owner-pending/LRB-070-full-card-correction-required.json"
);
const EXPECTED_REQUIRED_SHA =
  "d5bdad2bf1d12d4053adbc4861558af76284ec411f7093f9afbefdb244a234eb";
const EXPECTED_CORRECTION_2_SHA =
  "bb674f5351ed611addbde29615286df5878ef75229d208557313c840da2e52c2";

const LB_CARD_ALIASES = {
  "a1-heissen": "a1-heißen",
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

const NESTED_BY_LANG = {
  lb: buildNestedMap(loadA1("lb")),
};

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
      if (out.lv == null && out.study?.translation != null) {
        out.lv = out.study.translation;
      }
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
      const key = `study.${k}`;
      flat[key] = typeof v === "object" ? JSON.stringify(v) : String(v);
    }
  }
  return JSON.stringify(flat);
}

function compositeIsPopulated(composite) {
  if (composite == null || typeof composite !== "object") return false;
  return Object.keys(composite).length > 0;
}

function loadRequiredCardIds() {
  const raw = fs.readFileSync(REQUIRED_FINDINGS_PATH, "utf8");
  const sha = crypto.createHash("sha256").update(raw).digest("hex");
  if (sha !== EXPECTED_REQUIRED_SHA) {
    throw new Error(`full-card-correction-required SHA mismatch: got ${sha}`);
  }
  const doc = JSON.parse(raw);
  const ids = doc.findings.map((f) => f.card_object_id).sort();
  if (ids.length !== 29) throw new Error(`Expected 29 required cards, got ${ids.length}`);
  return ids;
}

function validateOwnerPending(mapping, requiredIds) {
  const missing = [];
  const empty = [];
  for (const id of requiredIds) {
    if (!(id in mapping.labot_full_composite)) missing.push(id);
    else if (!compositeIsPopulated(mapping.labot_full_composite[id])) empty.push(id);
  }
  return { missing, empty, blocked: missing.length > 0 || empty.length > 0 };
}

function main() {
  const pasteRaw = fs.readFileSync(PASTE_PATH, "utf8");
  const pasteSha = crypto.createHash("sha256").update(pasteRaw).digest("hex");
  const mapping = JSON.parse(pasteRaw);
  const correctionRound = mapping.correction_round || mapping.correction || 2;
  const expectedPasteSha = process.env.LRB070_EXPECTED_PASTE_SHA;
  if (expectedPasteSha && pasteSha !== expectedPasteSha) {
    throw new Error(`COPY-PASTE SHA mismatch: got ${pasteSha}, expected ${expectedPasteSha}`);
  }

  if (correctionRound >= 3) {
    if (mapping.base_correction_2_sha256 !== EXPECTED_CORRECTION_2_SHA) {
      throw new Error(
        `base_correction_2_sha256 mismatch: got ${mapping.base_correction_2_sha256}, expected ${EXPECTED_CORRECTION_2_SHA}`
      );
    }
  } else if (mapping.base_mapping_sha256 !== EXPECTED_BASE_PASTE_SHA) {
    throw new Error(
      `base_mapping_sha256 mismatch: got ${mapping.base_mapping_sha256}, expected ${EXPECTED_BASE_PASTE_SHA}`
    );
  }

  const requiredIds = loadRequiredCardIds();
  const pending = validateOwnerPending(mapping, requiredIds);

  if (pending.blocked) {
    const out = {
      batch_id: BATCH,
      classification: "LRB_070_FULL_CARD_CORRECTION_REQUIRED_BEFORE_GALA",
      status: "BLOCKED_AWAITING_OWNER_FULL_CARD_COMPOSITES",
      paste_sha256: pasteSha,
      required_cards: requiredIds.length,
      missing_cards: pending.missing,
      empty_composites: pending.empty,
      cursor_action: "DO_NOT_GENERATE_LINGUISTIC_CONTENT",
    };
    console.log(JSON.stringify(out, null, 2));
    if (CHECK_ONLY) process.exit(pending.blocked ? 1 : 0);
    process.exit(1);
  }

  if (CHECK_ONLY) {
    console.log(JSON.stringify({ batch_id: BATCH, status: "OWNER_COMPOSITES_PRESENT", paste_sha256: pasteSha }, null, 2));
    process.exit(0);
  }

  const inputPath = path.join(ROOT, "reports/g2-a1-owner/batches-pending", `${BATCH}-input.csv`);
  const { header, rows } = loadCsv(inputPath);
  if (rows.length !== 50) throw new Error(`Expected 50 input rows, got ${rows.length}`);

  const inputSha = crypto.createHash("sha256").update(fs.readFileSync(inputPath)).digest("hex");
  if (inputSha !== EXPECTED_INPUT_SHA) {
    throw new Error(`Input CSV SHA mismatch: got ${inputSha}`);
  }

  const mergedByCard = new Map();
  for (const cardId of requiredIds) {
    const base = nestedForCard("lb", cardId);
    if (!base) throw new Error(`No production nested card for ${cardId}`);
    mergedByCard.set(
      cardId,
      applyPatches(JSON.parse(JSON.stringify(base)), mapping.labot_full_composite[cardId])
    );
  }

  const decisions = {};
  let rowNum = 0;
  for (const row of rows) {
    rowNum += 1;
    const cardId = row.card_object_id.split("|")[0];
    const merged = mergedByCard.get(cardId);
    if (!merged) throw new Error(`No correction composite for card ${cardId}`);
    const ownerNew = nestedToOwnerNewFlat(merged);
    const deRef = row.de_reference || cardId.replace(/^a1-/, "");
    decisions[row.finding_stable_ids] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: ownerNew,
      owner_note: `LB ${deRef} / ${row.field_path}: LRB-070 correction ${correctionRound} rinda ${rowNum}/50; pilnā full_card_target_fields aizvietojums pēc OWNER COPY-PASTE-${correctionRound}.`,
    };
  }

  const dataPath = path.join(ROOT, "scripts/data/g2-a1-owner-pending", `${BATCH}-decisions.json`);
  fs.writeFileSync(dataPath, `${JSON.stringify(decisions, null, 2)}\n`);

  const outHeader = [...header.filter((h) => h !== "provenance_type"), "provenance_type"];
  const reviewed = [];
  for (const row of rows) {
    const decision = decisions[row.finding_stable_ids];
    reviewed.push({
      ...row,
      ...decision,
      owner_status: decision.owner_status,
      unresolved_category: "",
      provenance_type: "INDIVIDUAL_LINGUISTIC",
    });
  }

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
        correction_round: correctionRound,
        base_mapping_sha256: EXPECTED_BASE_PASTE_SHA,
        base_correction_2_sha256: correctionRound >= 3 ? EXPECTED_CORRECTION_2_SHA : undefined,
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
  if (galaCards.length !== 29) throw new Error(`Expected 29 gala cards, got ${galaCards.length}`);

  const galaOut = {
    batch_id: BATCH,
    language: "lb",
    scope: `a1-ab..a1-hoeren-study (50 LB rows, 29 unique cards, correction ${correctionRound} full composites)`,
    rows: 50,
    uniqueCards: galaCards.length,
    paste_sha256: pasteSha,
    base_mapping_sha256: EXPECTED_BASE_PASTE_SHA,
    full_card_replacements: galaCards.length,
    full_card_object_ids: requiredIds,
    classification:
      correctionRound >= 3
        ? "LRB_070_COPY_PASTE_CORRECTION_3_COMPLETE_AWAITING_GALA_VERDICT"
        : "LRB_070_COPY_PASTE_CORRECTION_2_COMPLETE_AWAITING_GALA_VERDICT",
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

module.exports = { main, applyPatches, nestedToOwnerNewFlat };
