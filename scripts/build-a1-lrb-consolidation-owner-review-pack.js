#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  batchNum,
  batchId,
  resolveGalaRef,
  parseJsonAt,
  extractBatchDecisions,
} = require("./build-a1-lrb-target-conflict-classification");
const {
  createGalaCardsByBatchLoader,
  isSyntheticCardSkeleton,
} = require("./lib/g2-a1-lrb-consolidation-full-cards");
const {
  mechanicalNormalizeTargetLanguageCard,
  extractTargetLanguageCard,
} = require("./lib/g2-a1-lrb-consolidation-normalize");
const { reconstructDecisionLeaves, parseJsonSafe, flattenCardToLeaves } =
  require("./lib/g2-a1-lrb-leaf-reconstruction");

const BASE_HEAD = "7934d943e4240117fabcee58f7e91ff6f72b2375";
const OUT_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/owner-review");
const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const MAX_PART_BYTES = 4_000_000;

const PROBLEM_TYPES = {
  RECONSTRUCTION_FAILED: "RECONSTRUCTION_FAILED",
  OWNER_REVIEW_REQUIRED: "OWNER_REVIEW_REQUIRED",
  OWNER_CONFIRMED_NO_CHANGE_NONEMPTY_OWNER_NEW: "OWNER_CONFIRMED_NO_CHANGE_NONEMPTY_OWNER_NEW",
  READY_EMPTY_LV: "READY_EMPTY_LV",
  READY_EMPTY_EXAMPLE_LV: "READY_EMPTY_EXAMPLE_LV",
  READY_EMPTY_TRANSLATION_LEAF: "READY_EMPTY_TRANSLATION_LEAF",
  BASELINE_LEAF_DECISION_POOL: "BASELINE_LEAF_DECISION_POOL",
  BASELINE_PARTIAL: "BASELINE_PARTIAL",
  GALA_FULL_BASELINE_NOT_PROVABLE: "GALA_FULL_BASELINE_NOT_PROVABLE",
};

function sha256(buf) {
  return crypto.createHash("sha256").update(typeof buf === "string" ? buf : JSON.stringify(buf)).digest("hex");
}

function cardKey(lang, cardId) {
  return `${String(lang).trim()}|${String(cardId).split("|")[0].trim()}`;
}

function parseDeReference(ownerNewRaw, productionRaw) {
  for (const raw of [ownerNewRaw, productionRaw]) {
    const p = parseJsonSafe(raw);
    if (p?.de) return String(p.de);
  }
  return null;
}

function scanReadyEmptyTranslationLeaves(postCard) {
  const issues = [];
  if (!postCard) return issues;
  if (postCard.lv === "" || postCard.lv == null) issues.push("lv");
  const study = postCard.study || {};
  if (study.translation === "") issues.push("study.translation");
  if (Array.isArray(study.explanation)) {
    study.explanation.forEach((v, i) => {
      if (v === "") issues.push(`study.explanation[${i}]`);
    });
  }
  if (Array.isArray(study.important)) {
    study.important.forEach((v, i) => {
      if (v === "") issues.push(`study.important[${i}]`);
    });
  }
  if (Array.isArray(study.examples)) {
    study.examples.forEach((ex, i) => {
      if (ex && ex.lv === "") issues.push(`study.examples[${i}].lv`);
    });
  }
  if (Array.isArray(study.comparison)) {
    study.comparison.forEach((row, i) => {
      if (row?.meaning === "") issues.push(`study.comparison[${i}].meaning`);
      if (row?.example === "") issues.push(`study.comparison[${i}].example`);
    });
  }
  return issues;
}

function createGalaProvableResolver(loadGala) {
  const cache = new Map();
  return function hasProvableGalaFullBaseline(lang, cardId, batchIds) {
    const ck = cardKey(lang, cardId);
    if (cache.has(ck)) return cache.get(ck);
    const batches = [...new Set(batchIds)].sort((a, b) => batchNum(b) - batchNum(a));
    for (const batch_id of batches) {
      const g = loadGala(batch_id, lang, cardId);
      if (g?.card && !isSyntheticCardSkeleton(g.card) && flattenCardToLeaves(g.card).size >= 2) {
        const out = { provable: true, gala: g };
        cache.set(ck, out);
        return out;
      }
    }
    const out = { provable: false, gala: null };
    cache.set(ck, out);
    return out;
  };
}

function writeJsonWithParts(baseName, payload, arrayKey) {
  const rows = payload[arrayKey] || [];
  const staticPayload = { ...payload };
  delete staticPayload[arrayKey];
  const parts = [];
  const CHUNK_ROWS = 40;
  if (rows.length <= CHUNK_ROWS) {
    const raw = JSON.stringify(payload, null, 2) + "\n";
    if (Buffer.byteLength(raw) <= MAX_PART_BYTES) {
      const rel = path.join("reports/g2-a1-owner/consolidation/owner-review", `${baseName}.json`);
      fs.writeFileSync(path.join(ROOT, rel), raw);
      return { multipart: false, parts: [{ path: rel, sha256: sha256(raw), byte_length: Buffer.byteLength(raw) }] };
    }
  }
  for (let i = 0; i < rows.length; ) {
    let chunk = rows.slice(i, i + CHUNK_ROWS);
    const partIndex = parts.length + 1;
    const partName = `${baseName}.part-${String(partIndex).padStart(3, "0")}.json`;
    const rel = path.join("reports/g2-a1-owner/consolidation/owner-review", partName);
    const partPayload = { ...staticPayload, [arrayKey]: chunk, part: partIndex, part_row_count: chunk.length };
    let partRaw = JSON.stringify(partPayload, null, 2) + "\n";
    while (Buffer.byteLength(partRaw) > MAX_PART_BYTES && chunk.length > 1) {
      chunk = chunk.slice(0, -1);
      partPayload[arrayKey] = chunk;
      partPayload.part_row_count = chunk.length;
      partRaw = JSON.stringify(partPayload, null, 2) + "\n";
    }
    fs.writeFileSync(path.join(ROOT, rel), partRaw);
    parts.push({
      path: rel,
      sha256: sha256(partRaw),
      byte_length: Buffer.byteLength(partRaw),
      row_count: chunk.length,
    });
    i += chunk.length;
  }
  return { multipart: true, parts };
}

function main() {
  const head = require("child_process")
    .execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" })
    .trim();
  if (head !== BASE_HEAD) {
    console.warn(`warning: HEAD ${head} !== expected base ${BASE_HEAD}`);
  }

  const notApply = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, "A1-LRB-001-103-NOT-APPLY-MAPPED-OWNER-DECISIONS.json"), "utf8")
  );
  const applyPlan = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, "A1-LRB-001-103-PRODUCTION-APPLY-PLAN.json"), "utf8")
  );
  const loadGala = createGalaCardsByBatchLoader({ resolveGalaRef, parseJsonAt, batchNum, batchId });
  const hasProvableGalaFullBaseline = createGalaProvableResolver(loadGala);
  const extractCache = new Map();

  function rowsForBatch(n) {
    const b = batchId(n);
    if (extractCache.has(b)) return extractCache.get(b);
    const resolved = resolveGalaRef(n);
    if (!resolved?.branch) {
      extractCache.set(b, { rows: [], source: null });
      return extractCache.get(b);
    }
    const ex = extractBatchDecisions(n, resolved);
    const pack = { rows: ex?.rows || [], source: ex?.source || null };
    extractCache.set(b, pack);
    return pack;
  }

  const cardProblems = new Map();

  function ensureCard(ck) {
    if (!cardProblems.has(ck)) {
      const [target_language, canonical_card_object_id] = ck.split("|");
      cardProblems.set(ck, {
        target_language,
        canonical_card_object_id,
        problems: new Set(),
        finding_row_refs: new Set(),
      });
    }
    return cardProblems.get(ck);
  }

  function addFindingRef(ck, ref) {
    ensureCard(ck).finding_row_refs.add(ref);
  }

  for (const row of notApply.rows || []) {
    const ck = cardKey(row.target_language, row.card_object_id);
    const ref = `${row.batch_id}|${row.finding_stable_ids}|${row.field_path}`;
    addFindingRef(ck, ref);
    if (row.classification === "RECONSTRUCTION_FAILED") {
      ensureCard(ck).problems.add(PROBLEM_TYPES.RECONSTRUCTION_FAILED);
    }
    if (row.classification === "OWNER_REVIEW_REQUIRED") {
      ensureCard(ck).problems.add(PROBLEM_TYPES.OWNER_REVIEW_REQUIRED);
    }
    if (
      row.classification === "OWNER_CONFIRMED_NO_CHANGE" &&
      String(row.owner_new || "").trim()
    ) {
      ensureCard(ck).problems.add(PROBLEM_TYPES.OWNER_CONFIRMED_NO_CHANGE_NONEMPTY_OWNER_NEW);
    }
  }

  const readyByKey = new Map();
  for (const c of applyPlan.full_cards || []) {
    if (c.status !== "READY") continue;
    const ck = cardKey(c.target_language, c.canonical_card_object_id);
    readyByKey.set(ck, c);
    if (c.baseline_source_kind === "leaf_decision_pool_reconstruction") {
      ensureCard(ck).problems.add(PROBLEM_TYPES.BASELINE_LEAF_DECISION_POOL);
    }
    if (
      c.baseline_source_kind === "batch_row_post_owner" &&
      (c.preserved_baseline_leaf_count ?? 0) <= 2 &&
      isSyntheticCardSkeleton(c.post_owner_card)
    ) {
      ensureCard(ck).problems.add(PROBLEM_TYPES.BASELINE_PARTIAL);
    }
    const emptyLeaves = scanReadyEmptyTranslationLeaves(c.post_owner_card);
    if (emptyLeaves.includes("lv")) ensureCard(ck).problems.add(PROBLEM_TYPES.READY_EMPTY_LV);
    if (emptyLeaves.some((p) => /^study\.examples\[\d+\]\.lv$/.test(p))) {
      ensureCard(ck).problems.add(PROBLEM_TYPES.READY_EMPTY_EXAMPLE_LV);
    }
    const otherEmpty = emptyLeaves.filter(
      (p) => p !== "lv" && !/^study\.examples\[\d+\]\.lv$/.test(p)
    );
    if (otherEmpty.length) ensureCard(ck).problems.add(PROBLEM_TYPES.READY_EMPTY_TRANSLATION_LEAF);
  }

  for (const [ck, entry] of cardProblems) {
    if (
      entry.problems.has(PROBLEM_TYPES.RECONSTRUCTION_FAILED) ||
      entry.problems.has(PROBLEM_TYPES.BASELINE_LEAF_DECISION_POOL) ||
      entry.problems.has(PROBLEM_TYPES.BASELINE_PARTIAL)
    ) {
      const batchIds = (notApply.rows || [])
        .filter((r) => cardKey(r.target_language, r.card_object_id) === ck)
        .map((r) => r.batch_id);
      const galaCheck = hasProvableGalaFullBaseline(
        entry.target_language,
        entry.canonical_card_object_id,
        batchIds
      );
      if (!galaCheck.provable) {
        entry.problems.add(PROBLEM_TYPES.GALA_FULL_BASELINE_NOT_PROVABLE);
      }
    }
  }

  const neededBatches = new Set();
  for (const [ck, meta] of cardProblems) {
    if (!meta.problems.size) continue;
    for (const r of notApply.rows || []) {
      if (cardKey(r.target_language, r.card_object_id) === ck) {
        neededBatches.add(r.batch_id);
      }
    }
    const ready = readyByKey.get(ck);
    if (ready?.baseline_source_batch) neededBatches.add(ready.baseline_source_batch);
  }

  const rowsByCard = new Map();
  for (const batch_id of neededBatches) {
    const n = batchNum(batch_id);
    const { rows, source } = rowsForBatch(n);
    for (const raw of rows) {
      const ck = cardKey(raw.languages, raw.card_object_id);
      if (!cardProblems.has(ck) || !cardProblems.get(ck).problems.size) continue;
      if (!rowsByCard.has(ck)) rowsByCard.set(ck, []);
      rowsByCard.get(ck).push({
        batch_id,
        finding_stable_ids: raw.finding_stable_ids || raw.finding_stable_id || "",
        field_path: raw.field_path,
        owner_status: raw.owner_status || raw.owner_decision || "",
        owner_new: raw.owner_new ?? raw.ownerNew ?? "",
        owner_note: raw.owner_note || raw.ownerNote || "",
        production_current: raw.production_current ?? raw.productionCurrent ?? "",
        discovery_current: raw.discovery_current ?? raw.discoveryCurrent ?? "",
        source_artifact_path: source?.file_path || null,
        source_artifact_sha256: source?.file_sha256 || null,
      });
    }
  }

  const viewCards = [];
  let problematicFindingRows = 0;
  const problemTypeCounts = Object.fromEntries(Object.values(PROBLEM_TYPES).map((t) => [t, 0]));

  for (const [ck, meta] of [...cardProblems.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    if (!meta.problems.size) continue;

    const notApplyRows = (notApply.rows || []).filter(
      (r) => cardKey(r.target_language, r.card_object_id) === ck
    );
    problematicFindingRows += notApplyRows.length;

    const related_lrb_rows = rowsByCard.get(ck) || [];

    for (const t of meta.problems) {
      problemTypeCounts[t] = (problemTypeCounts[t] || 0) + 1;
    }

    const ownerNewPayloads = [];
    const seenOwnerNew = new Set();
    for (const src of [...related_lrb_rows, ...notApplyRows]) {
      const on = String(src.owner_new ?? "").trim();
      if (!on || seenOwnerNew.has(on)) continue;
      seenOwnerNew.add(on);
      ownerNewPayloads.push({
        batch_id: src.batch_id,
        field_path: src.field_path,
        owner_new: on,
        owner_new_sha256: sha256(on),
      });
    }

    let de_reference = null;
    let initial_full_card = null;
    for (const raw of related_lrb_rows) {
      de_reference =
        de_reference ||
        parseDeReference(raw.owner_new, raw.production_current || raw.discovery_current);
      if (initial_full_card) continue;
      if (!raw.production_current && !raw.discovery_current) continue;
      const rec = reconstructDecisionLeaves({
        languages: meta.target_language,
        card_object_id: meta.canonical_card_object_id,
        field_path: raw.field_path,
        owner_new: raw.owner_new,
        owner_status: raw.owner_status,
        production_current: raw.production_current,
        discovery_current: raw.discovery_current,
      });
      if (rec.preCard) {
        initial_full_card = extractTargetLanguageCard(rec.preCard);
      }
    }

    const batchIds = [...new Set(related_lrb_rows.map((r) => r.batch_id))];
    const galaResult = hasProvableGalaFullBaseline(
      meta.target_language,
      meta.canonical_card_object_id,
      batchIds
    );
    const latest_gala_card = galaResult.gala?.card
      ? {
          card: galaResult.gala.card,
          baseline_source_path: galaResult.gala.baseline_source_path,
          baseline_source_batch: galaResult.gala.baseline_source_batch,
          baseline_source_kind: galaResult.gala.baseline_source_kind,
        }
      : null;

    const ready = readyByKey.get(ck);
    const sourceArtifacts = [];
    for (const r of [...related_lrb_rows, ...notApplyRows]) {
      const p = r.source_artifact_path;
      const s = r.source_artifact_sha256;
      if (p && !sourceArtifacts.some((x) => x.path === p)) {
        sourceArtifacts.push({ path: p, sha256: s });
      }
    }

    viewCards.push({
      target_language: meta.target_language,
      canonical_card_object_id: meta.canonical_card_object_id,
      related_lrb_rows,
      de_reference,
      initial_full_card,
      latest_gala_card,
      owner_new_payloads: ownerNewPayloads,
      source_artifacts: sourceArtifacts,
      problems: [...meta.problems].sort(),
      consolidated_ready_card: ready
        ? {
            post_owner_card: ready.post_owner_card,
            baseline_source_kind: ready.baseline_source_kind,
            baseline_source_path: ready.baseline_source_path,
            baseline_source_sha256: ready.baseline_source_sha256,
            baseline_card_sha256: ready.baseline_card_sha256,
            post_owner_card_sha256: ready.post_owner_card_sha256,
          }
        : null,
      full_card_owner_new: null,
    });
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const viewPayload = {
    schema_version: 1,
    classification: "A1_LRB_CONSOLIDATION_OWNER_REVIEW_PACK_VIEW",
    generated_at: new Date().toISOString(),
    base_head: BASE_HEAD,
    read_only: true,
    linguistic_changes_made: 0,
    cards: viewCards,
  };

  const viewWrite = writeJsonWithParts("A1-LRB-CONSOLIDATION-OWNER-REVIEW-VIEW", viewPayload, "cards");

  const copyPaste = {
    classification: "A1_LRB_CONSOLIDATION_OWNER_FULL_CARD_REVIEW_REQUIRED",
    base_head: BASE_HEAD,
    cards: viewCards.map((c) => ({
      target_language: c.target_language,
      canonical_card_object_id: c.canonical_card_object_id,
      full_card_owner_new: null,
    })),
  };
  fs.writeFileSync(
    path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json"),
    JSON.stringify(copyPaste, null, 2) + "\n"
  );

  const taskLines = [
    "A1 LRB-001…103 konsolidācija — OWNER pilno kartīšu manuālais labojums (4. raunds)",
    "",
    `Bāzes HEAD: ${BASE_HEAD}`,
    `Klasifikācija: A1_LRB_CONSOLIDATION_OWNER_FULL_CARD_REVIEW_REQUIRED`,
    "",
    "Uzdevums:",
    "- Aizpildīt A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json laukā full_card_owner_new",
    "  ar pilnu mērķvalodas kartīti (COPY/PASTE no OWNER avota; bez DE izmaiņām).",
    "- Skatīt kontekstu: A1-LRB-CONSOLIDATION-OWNER-REVIEW-VIEW.json",
    "",
    `Unikālas kartītes: ${viewCards.length}`,
    `Problemātiskas finding rindas (not-apply kartītēs): ${problematicFindingRows}`,
    "",
    "Problēmu tipi (unikālas kartītes pa tipu):",
    ...Object.entries(problemTypeCounts)
      .filter(([, n]) => n > 0)
      .sort((a, b) => b[1] - a[1])
      .map(([t, n]) => `- ${t}: ${n}`),
    "",
    "Aizliegts: automātiska tulkošana, production apply, DE labojumi.",
  ];
  fs.writeFileSync(
    path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-VEICAMO-LABOJUMU-UZDEVUMS-4.txt"),
    taskLines.join("\n") + "\n"
  );

  const relatedRowRefs = new Set();
  let relatedRowTotal = 0;
  for (const c of viewCards) {
    relatedRowTotal += c.related_lrb_rows.length;
    for (const r of c.related_lrb_rows) {
      relatedRowRefs.add(`${r.batch_id}|${r.finding_stable_ids}|${r.field_path}`);
    }
  }

  const proof = {
    schema_version: 1,
    classification: "A1_LRB_CONSOLIDATION_OWNER_REVIEW_PACK_READY",
    generated_at: viewPayload.generated_at,
    base_head: BASE_HEAD,
    git_head: head,
    read_only_selection: true,
    linguistic_changes_made: 0,
    consolidated_mapping_modified: false,
    problematic_finding_rows_not_apply_on_selected_cards: problematicFindingRows,
    related_lrb_rows_total: relatedRowTotal,
    related_lrb_rows_unique_refs: relatedRowRefs.size,
    unique_problem_cards: viewCards.length,
    problem_type_counts_on_unique_cards: problemTypeCounts,
    not_apply_mapped_total: notApply.finding_rows_not_in_apply_mapping,
    view_artifact: viewWrite,
    copy_paste_path: "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json",
    task_path: "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-VEICAMO-LABOJUMU-UZDEVUMS-4.txt",
  };
  fs.writeFileSync(
    path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-OWNER-REVIEW-PACK-PROOF.json"),
    JSON.stringify(proof, null, 2) + "\n"
  );

  console.log(JSON.stringify(proof, null, 2));
}

if (require.main === module) main();

module.exports = { main, PROBLEM_TYPES };
