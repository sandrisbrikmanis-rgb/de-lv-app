#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-069";
const PASTE_PATH =
  process.argv[2] ||
  path.join(ROOT, "scripts/data/g2-a1-owner-pending/LRB-069-decisions-COPY-PASTE.json");
const EXPECTED_PASTE_SHA =
  "aae008399b19d12d340ea7a74fed025e4cc5ef9b165a7127919b37c5b346275f";

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

function compositeMapToOwnerNew(composite) {
  const flat = {};
  for (const [k, v] of Object.entries(composite)) {
    if (v === null || v === undefined) continue;
    if (typeof v === "object") flat[k] = JSON.stringify(v);
    else flat[k] = String(v);
  }
  return flat;
}

function productionEntryForCard(words, cardKey) {
  return (
    words.find((e) => e.de === cardKey) ||
    words.find((e) => e.study?.id === cardKey) ||
    words.find((e) => e.study?.id === `a1-${cardKey}`)
  );
}

function nestedFromProduction(entry) {
  if (!entry) return { lv: "" };
  return {
    de: entry.de,
    de_article: entry.de_article,
    de_plural: entry.de_plural,
    level: entry.level,
    lv: entry.lv,
    study: entry.study ? JSON.parse(JSON.stringify(entry.study)) : undefined,
  };
}

function resolveCardDecision(mapping, cardObjectId) {
  if (mapping.nelabot && cardObjectId in mapping.nelabot) {
    const nelabotNote =
      mapping.nelabot_owner_notes?.[cardObjectId] ||
      `LRB-069 OWNER mapping NELABOT: preserve production for ${cardObjectId}.`;
    return {
      owner_decision: "NELABOT",
      owner_new: "",
      replacement_scope: "finding_field_only",
      owner_note: nelabotNote,
    };
  }
  if (mapping.labot_full_composite && cardObjectId in mapping.labot_full_composite) {
    const flat = compositeMapToOwnerNew(mapping.labot_full_composite[cardObjectId]);
    return {
      owner_decision: "LABOT",
      owner_new: flat,
      replacement_scope: "full_card_target_fields",
      owner_note: `LRB-069 OWNER mapping full_card_target_fields: ${cardObjectId}.`,
    };
  }
  if (mapping.labot_scalar && cardObjectId in mapping.labot_scalar) {
    return {
      owner_decision: "LABOT",
      owner_new: mapping.labot_scalar[cardObjectId],
      replacement_scope: "finding_field_only",
      owner_note: `LRB-069 OWNER mapping scalar lv: ${cardObjectId}.`,
    };
  }
  return null;
}

function buildPasteDecisions(mapping, rows) {
  const decisions = [];
  for (const row of rows) {
    const cardObjectId = row.card_object_id;
    const resolved = resolveCardDecision(mapping, cardObjectId);
    if (!resolved) {
      throw new Error(`No mapping entry for ${cardObjectId}`);
    }
    decisions.push({
      card_object_id: cardObjectId,
      decision_target_key: row.decision_target_key,
      owner_status: "DECIDED",
      owner_decision: resolved.owner_decision,
      owner_new: resolved.owner_new,
      owner_note: resolved.owner_note,
      replacement_scope: resolved.replacement_scope,
      provenance_type: "INDIVIDUAL_LINGUISTIC",
    });
  }
  return decisions;
}

function main() {
  const pasteRaw = fs.readFileSync(PASTE_PATH, "utf8");
  const pasteSha = crypto.createHash("sha256").update(pasteRaw).digest("hex");
  if (pasteSha !== EXPECTED_PASTE_SHA) {
    throw new Error(`COPY-PASTE SHA mismatch: got ${pasteSha}, expected ${EXPECTED_PASTE_SHA}`);
  }
  const mapping = JSON.parse(pasteRaw);
  const inputPath = path.join(ROOT, "reports/g2-a1-owner/batches-pending", `${BATCH}-input.csv`);
  const { header, rows } = loadCsv(inputPath);
  if (rows.length !== 44) throw new Error(`Expected 44 input rows, got ${rows.length}`);

  const inputSha = crypto
    .createHash("sha256")
    .update(fs.readFileSync(inputPath))
    .digest("hex");
  const expectedInputSha =
    "4fd1545802b525984074cc116d965b51c89512fa915bf38859c1900c6093bc0a";
  if (inputSha !== expectedInputSha) {
    throw new Error(`Input CSV SHA mismatch: got ${inputSha}`);
  }

  const pasteDecisions = buildPasteDecisions(mapping, rows);
  const byKey = new Map(pasteDecisions.map((d) => [d.decision_target_key, d]));

  const decisions = {};
  for (const row of rows) {
    const d = byKey.get(row.decision_target_key);
    if (!d) throw new Error(`Missing paste decision for ${row.decision_target_key}`);
    let ownerNew = d.owner_new;
    if (d.owner_decision === "NELABOT") ownerNew = "";
    else if (ownerNew != null && typeof ownerNew === "object") ownerNew = JSON.stringify(ownerNew);
    decisions[row.finding_stable_ids] = {
      owner_status: d.owner_status,
      owner_decision: d.owner_decision,
      owner_new: ownerNew ?? "",
      owner_note: d.owner_note,
    };
  }

  const dataPath = path.join(ROOT, "scripts/data/g2-a1-owner-pending", `${BATCH}-decisions.json`);
  fs.writeFileSync(dataPath, `${JSON.stringify(decisions, null, 2)}\n`);

  const outHeader = [...header.filter((h) => h !== "provenance_type"), "provenance_type"];
  const reviewed = [];
  let labot = 0;
  let nelabot = 0;
  let pending = 0;
  for (const row of rows) {
    const decision = decisions[row.finding_stable_ids];
    const out = {
      ...row,
      ...decision,
      unresolved_category: "",
      provenance_type: decision.owner_status === "DECIDED" ? "INDIVIDUAL_LINGUISTIC" : "",
    };
    reviewed.push(out);
    if (out.owner_decision === "LABOT") labot += 1;
    else if (out.owner_decision === "NELABOT") nelabot += 1;
    else pending += 1;
  }

  if (labot !== 44 || nelabot !== 0 || pending !== 0) {
    throw new Error(`Count mismatch: LABOT=${labot} NELABOT=${nelabot} PENDING=${pending}`);
  }

  const outPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${BATCH}-decisions.csv`);
  const proofPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${BATCH}-proof.json`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buildCsv(outHeader, reviewed));
  const proof = {
    batch_id: BATCH,
    row_count: reviewed.length,
    labot,
    nelabot,
    pending,
    provenance_individual_count: reviewed.filter((r) => r.provenance_type === "INDIVIDUAL_LINGUISTIC")
      .length,
    classification: "G2_A1_PENDING_BATCH_REVIEW_COMPLETE",
    paste_sha256: pasteSha,
  };
  fs.writeFileSync(proofPath, `${JSON.stringify(proof, null, 2)}\n`);

  const words = loadA1("lb");
  const cardsByKey = new Map();
  for (const row of rows) {
    const cardKey = row.card_object_id.split("|")[0];
    const key = `${row.languages}:${cardKey}`;
    if (cardsByKey.has(key)) continue;
    const d = byKey.get(row.decision_target_key);
    const prodEntry = productionEntryForCard(words, cardKey);
    const base = nestedFromProduction(prodEntry);
    let merged;
    if (d.owner_decision === "NELABOT") {
      merged = base;
    } else {
      merged = applyPatches(base, ownerNewToComposite(d.owner_new));
    }
    const idx = parseInt((row.finding_stable_ids.match(/idx:(\d+)/) || [0, 0])[1], 10);
    cardsByKey.set(key, {
      card_object_id: row.card_object_id,
      de_reference: row.de_reference,
      idx,
      owner_decision: d.owner_decision,
      replacement_scope: d.replacement_scope,
      post_owner: merged,
    });
  }

  const galaCards = [...cardsByKey.values()].sort((a, b) => a.idx - b.idx);
  if (galaCards.length !== 44) throw new Error(`Expected 44 gala cards, got ${galaCards.length}`);

  const fullCardIds = new Set(
    pasteDecisions
      .filter((d) => d.replacement_scope === "full_card_target_fields")
      .map((d) => d.card_object_id)
  );
  if (fullCardIds.size !== 22) {
    throw new Error(`Expected 22 full composites, got ${fullCardIds.size}`);
  }

  const scopeLabel = mapping.scope
    ? `${mapping.scope.from}..${mapping.scope.to} (44 LB rows, 44 unique cards)`
    : "LRB-069";

  const galaOut = {
    batch_id: BATCH,
    language: "lb",
    scope: scopeLabel,
    rows: 44,
    uniqueCards: 44,
    paste_sha256: pasteSha,
    full_card_replacements: fullCardIds.size,
    full_card_object_ids: [...fullCardIds].sort(),
    classification: "LRB_069_COPY_PASTE_COMPLETE_AWAITING_GALA_VERDICT",
    cards: galaCards,
  };
  const galaPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${BATCH}-gala-cards.json`);
  fs.writeFileSync(galaPath, `${JSON.stringify(galaOut, null, 2)}\n`);

  console.log(
    JSON.stringify(
      {
        batch_id: BATCH,
        paste_sha256: pasteSha,
        labot,
        nelabot,
        pending,
        unique_cards: galaCards.length,
        full_card_replacements: fullCardIds.size,
        classification: galaOut.classification,
      },
      null,
      2
    )
  );
}

if (require.main === module) main();
