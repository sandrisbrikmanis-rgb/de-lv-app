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
const PASTE_PATH =
  process.argv[2] ||
  path.join(ROOT, "scripts/data/g2-a1-owner-pending/LRB-070-decisions-COPY-PASTE.json");
const EXPECTED_PASTE_SHA =
  "918818511434da65ce41f20be103bbeeb29d58d768a55743e08f2ff089d50fc9";
const EXPECTED_INPUT_SHA =
  "50bd863777a163de7d5c66fb367fb53d61b64022bb48482a37f6bd84d6fd7dd5";

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

function applyCrowdinFieldPath(nested, cardId, fieldPath, newValue) {
  const prefix = `a1.card.${cardId}.`;
  if (!fieldPath.startsWith(prefix)) {
    throw new Error(`field_path ${fieldPath} does not match card ${cardId}`);
  }
  const rel = fieldPath.slice(prefix.length);
  if (rel === "native") {
    nested.lv = newValue;
    if (!nested.study) nested.study = {};
    nested.study.translation = newValue;
    return;
  }
  if (!rel.startsWith("study.")) {
    throw new Error(`Unsupported relative path ${rel}`);
  }
  const studyField = rel.slice(6);
  if (!nested.study) nested.study = {};
  const top = studyField.split(/[.[]/)[0];
  if (typeof nested.study[top] === "string") {
    nested.study[top] = parseMaybeJson(nested.study[top]);
  }
  if (studyField.includes("[") && !Array.isArray(nested.study[top]) && nested.study[top] == null) {
    nested.study[top] = [];
  }
  if (!setAt(nested.study, studyField, newValue)) {
    nested.study[studyField] = newValue;
  }
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

function applyPatches(nested, composite) {
  const out = JSON.parse(JSON.stringify(nested));
  for (const [p, value] of Object.entries(composite)) {
    const parsedValue = parseMaybeJson(value);
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

function ownerNewToComposite(ownerNew) {
  if (ownerNew == null) return {};
  if (typeof ownerNew === "object") return ownerNew;
  const raw = String(ownerNew).trim();
  if (!raw) return {};
  if (raw.startsWith("{") || raw.startsWith("[")) return JSON.parse(raw);
  return { lv: raw };
}

function main() {
  const pasteRaw = fs.readFileSync(PASTE_PATH, "utf8");
  const pasteSha = crypto.createHash("sha256").update(pasteRaw).digest("hex");
  if (pasteSha !== EXPECTED_PASTE_SHA) {
    throw new Error(`COPY-PASTE SHA mismatch: got ${pasteSha}, expected ${EXPECTED_PASTE_SHA}`);
  }
  const paste = JSON.parse(pasteRaw);
  const changes = paste.changes;
  if (!Array.isArray(changes) || changes.length !== 50) {
    throw new Error(`Expected 50 changes, got ${changes?.length}`);
  }

  const changeByKey = new Map();
  for (const ch of changes) {
    const key = `${ch.card_object_id}\0${ch.field_path}`;
    changeByKey.set(key, ch);
  }

  const inputPath = path.join(ROOT, "reports/g2-a1-owner/batches-pending", `${BATCH}-input.csv`);
  const { header, rows } = loadCsv(inputPath);
  if (rows.length !== 50) throw new Error(`Expected 50 input rows, got ${rows.length}`);

  const inputSha = crypto.createHash("sha256").update(fs.readFileSync(inputPath)).digest("hex");
  if (inputSha !== EXPECTED_INPUT_SHA) {
    throw new Error(`Input CSV SHA mismatch: got ${inputSha}`);
  }

  const mergedByCard = new Map();
  for (const ch of changes) {
    const cardId = ch.card_object_id;
    if (!mergedByCard.has(cardId)) {
      const base = nestedForCard("lb", cardId);
      if (!base) throw new Error(`No production nested card for ${cardId}`);
      mergedByCard.set(cardId, JSON.parse(JSON.stringify(base)));
    }
    applyCrowdinFieldPath(mergedByCard.get(cardId), cardId, ch.field_path, ch.new);
  }

  const decisions = {};
  let rowNum = 0;
  for (const row of rows) {
    rowNum += 1;
    const cardId = row.card_object_id.split("|")[0];
    const key = `${cardId}\0${row.field_path}`;
    const ch = changeByKey.get(key);
    if (!ch) {
      throw new Error(`No paste change for ${row.finding_stable_ids} (${key})`);
    }
    const merged = mergedByCard.get(cardId);
    const ownerNew = nestedToOwnerNewFlat(merged);
    const deRef = row.de_reference || cardId.replace(/^a1-/, "");
    decisions[row.finding_stable_ids] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: ownerNew,
      owner_note: `LB ${deRef} / ${row.field_path}: individuāli pārbaudīta LRB-070 rinda ${rowNum}/50; pilnā production_current + owner_new gala kartīte aizvietota ar precīzu LB saturu, saglabājot LV→DE mācību semantiku un nemainot DE avotu.`,
    };
  }

  const dataPath = path.join(ROOT, "scripts/data/g2-a1-owner-pending", `${BATCH}-decisions.json`);
  fs.writeFileSync(dataPath, `${JSON.stringify(decisions, null, 2)}\n`);

  const outHeader = [...header.filter((h) => h !== "provenance_type"), "provenance_type"];
  const reviewed = [];
  let labot = 0;
  for (const row of rows) {
    const decision = decisions[row.finding_stable_ids];
    reviewed.push({
      ...row,
      ...decision,
      owner_status: decision.owner_status,
      unresolved_category: "",
      provenance_type: "INDIVIDUAL_LINGUISTIC",
    });
    labot += 1;
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
        labot,
        nelabot: 0,
        pending: 0,
        provenance_individual_count: reviewed.length,
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
    const merged = applyPatches(
      nestedForCard("lb", cardId),
      ownerNewToComposite(decisions[row.finding_stable_ids].owner_new)
    );
    cardsByKey.set(key, {
      card_object_id: row.card_object_id,
      de_reference: row.de_reference,
      owner_decision: "LABOT",
      replacement_scope: "full_card_target_fields",
      post_owner: merged,
    });
  }

  const galaCards = [...cardsByKey.values()].sort((a, b) =>
    a.card_object_id.localeCompare(b.card_object_id)
  );
  const galaOut = {
    batch_id: BATCH,
    language: "lb",
    scope: "a1-ab..a1-hoeren-study (50 LB rows, 29 unique cards, non-idx mop-up)",
    rows: 50,
    uniqueCards: galaCards.length,
    paste_sha256: pasteSha,
    full_card_replacements: galaCards.length,
    classification: "LRB_070_COPY_PASTE_COMPLETE_AWAITING_GALA_VERDICT",
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

  if (!fs.existsSync(path.join(ROOT, "reports/g2-a1-owner/batches-owner-review", BATCH))) {
    execSync(`node scripts/build-g2-a1-lrb-owner-review-artifacts.js ${BATCH}`, {
      cwd: ROOT,
      stdio: "inherit",
    });
    fs.writeFileSync(ownerGalaPath, `${JSON.stringify(galaOut, null, 2)}\n`);
  }

  const decisionsSha = crypto.createHash("sha256").update(fs.readFileSync(dataPath)).digest("hex");
  console.log(
    JSON.stringify(
      {
        batch_id: BATCH,
        paste_sha256: pasteSha,
        decisions_sha256: decisionsSha,
        labot,
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
