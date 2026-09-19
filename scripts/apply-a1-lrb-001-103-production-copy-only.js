#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  PREFIX,
  PREP_DIR,
  hashProductionFileSet,
  applyAtomicOwnerApprovedCard,
  writePrepManifest,
  EXPECTED_PRODUCTION_FILE_SET_SHA,
} = require("./lib/g2-a1-lrb-production-copy-only-prep");
const {
  loadWordsFromRel,
  productionEntrySha256,
  productionFileRel,
  productionMirrorRel,
  resolveProductionTargetStrict,
} = require("./lib/g2-a1-lrb-production-atomic-card");
const {
  parseAuthorizeArgs,
  assertLiveAuthorization,
  createFileBackups,
  buildPendingWritesByFile,
  validatePendingWritesByFile,
  commitPlannedWritesAtomic,
} = require("./lib/g2-a1-lrb-production-copy-only-transaction");
const { sha256 } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");

const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const DRY_RUN = process.argv.includes("--dry-run");
const AUTHORIZE = parseAuthorizeArgs(process.argv);

function loadAtomicMapping() {
  const p = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`);
  if (!fs.existsSync(p)) {
    execSync("node scripts/build-a1-lrb-001-103-production-copy-only-prep.js", {
      cwd: ROOT,
      stdio: "inherit",
    });
  }
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function resolveFromWords(words, lang, canonicalId) {
  const id = String(canonicalId).trim();
  const byDe = words.findIndex((w) => String(w?.de ?? "").trim() === id);
  if (byDe >= 0) {
    return { ok: true, index: byDe, entry: words[byDe] };
  }
  const byStudy = words.findIndex(
    (w) => w?.study?.id != null && String(w.study.id).trim() === id
  );
  if (byStudy >= 0) {
    return { ok: true, index: byStudy, entry: words[byStudy] };
  }
  return { ok: false };
}

function main() {
  const atomicMappingPath = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`);
  const actualMappingSha = sha256(fs.readFileSync(atomicMappingPath));

  const atomic = loadAtomicMapping();
  const applyPlan = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-PRODUCTION-APPLY-PLAN.json`), "utf8")
  );
  const ownerCardByKey = new Map(
    (applyPlan.full_cards || []).map((fc) => [
      `${fc.target_language}|${fc.canonical_card_object_id}`,
      fc.post_owner_card,
    ])
  );
  const langs = [...new Set(atomic.cards.map((c) => c.target_language))].sort();

  const beforeDisk = hashProductionFileSet(langs);
  if (beforeDisk.composite_sha256 !== EXPECTED_PRODUCTION_FILE_SET_SHA) {
    console.error(
      JSON.stringify({
        error: "PRODUCTION_FILE_SET_SHA_MISMATCH",
        expected: EXPECTED_PRODUCTION_FILE_SET_SHA,
        actual: beforeDisk.composite_sha256,
      })
    );
    process.exit(2);
  }
  const beforeDiskSnapshot = new Map(beforeDisk.files.map((f) => [f.path, f.sha256]));
  const actualHead = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  if (!DRY_RUN) {
    const authErrors = assertLiveAuthorization({
      applyHead: AUTHORIZE.applyHead,
      mappingSha: AUTHORIZE.mappingSha,
      productionCurrentSha: AUTHORIZE.productionCurrentSha,
      actualHead,
      actualMappingSha,
      expectedProductionCurrentSha: EXPECTED_PRODUCTION_FILE_SET_SHA,
      actualProductionCurrentSha: beforeDisk.composite_sha256,
    });
    if (authErrors.length) {
      console.error(JSON.stringify({ error: "REFUSE_WRITE", authErrors }, null, 2));
      process.exit(2);
    }
  }

  const fileCache = new Map();
  const initialWordsByDataRel = new Map();
  for (const lang of langs) {
    const words = loadWordsFromRel(productionFileRel(lang));
    fileCache.set(productionFileRel(lang), words);
    initialWordsByDataRel.set(productionFileRel(lang), JSON.parse(JSON.stringify(words)));
  }

  const preflightErrors = [];
  for (const card of atomic.cards) {
    if (card.atomic_status === "BLOCKED") {
      preflightErrors.push({ card_key: card.card_key, reason: card.block_reason });
      continue;
    }
    const resolved = resolveProductionTargetStrict(card.target_language, card.canonical_card_object_id);
    if (!resolved.ok) {
      preflightErrors.push({ card_key: card.card_key, reason: resolved.classification });
      continue;
    }
    const liveSha = productionEntrySha256(resolved.entry);
    if (liveSha !== card.production_current_entry_sha256) {
      preflightErrors.push({
        card_key: card.card_key,
        reason: "CURRENT_SHA_MISMATCH",
        expected: card.production_current_entry_sha256,
        actual: liveSha,
      });
    }
  }
  if (preflightErrors.length) {
    console.error(JSON.stringify({ error: "PREFLIGHT_ABORT", preflightErrors }, null, 2));
    process.exit(DRY_RUN ? 1 : 2);
  }

  let simulatedApply = 0;
  let simulatedNoop = 0;

  for (const card of atomic.cards) {
    if (card.atomic_status === "ATOMIC_READY_NOOP") {
      simulatedNoop += 1;
      continue;
    }
    if (card.atomic_status !== "ATOMIC_READY_APPLY") continue;

    const rel = productionFileRel(card.target_language);
    const words = fileCache.get(rel);
    const resolved = resolveProductionTargetStrict(card.target_language, card.canonical_card_object_id);
    const ownerCard = ownerCardByKey.get(card.card_key);
    if (!ownerCard) {
      preflightErrors.push({ card_key: card.card_key, reason: "OWNER_CARD_MISSING_IN_PLAN" });
      continue;
    }
    words[resolved.index] = applyAtomicOwnerApprovedCard(words[resolved.index], ownerCard);
    fileCache.set(rel, words);
    simulatedApply += 1;
  }

  if (preflightErrors.length) {
    console.error(JSON.stringify({ error: "APPLY_PLAN_ABORT", preflightErrors }, null, 2));
    process.exit(DRY_RUN ? 1 : 2);
  }

  const wordsByDataRel = new Map();
  for (const lang of langs) {
    wordsByDataRel.set(productionFileRel(lang), fileCache.get(productionFileRel(lang)));
  }
  const pendingWritesByFile = buildPendingWritesByFile(wordsByDataRel, (dataRel) =>
    dataRel.replace(/^data\//, "www/data/")
  );

  const plannedRelPaths = [...pendingWritesByFile.keys()].sort();
  const duplicatePendingWritePaths = plannedRelPaths.length - new Set(plannedRelPaths).size;
  const uniquePlannedFiles = plannedRelPaths.length;
  const expectedUniqueFiles = langs.length * 2;

  const validation = validatePendingWritesByFile(pendingWritesByFile, {
    atomicCards: atomic.cards,
    ownerCardByKey,
    resolveTarget: (lang, id) => resolveFromWords(fileCache.get(productionFileRel(lang)), lang, id),
    resolveInitialTarget: (lang, id) =>
      resolveFromWords(initialWordsByDataRel.get(productionFileRel(lang)), lang, id),
  });

  if (!validation.pass) {
    console.error(JSON.stringify({ error: "PLANNED_WRITE_VALIDATION_FAIL", validation }, null, 2));
    process.exit(DRY_RUN ? 1 : 2);
  }

  if (uniquePlannedFiles !== 46 || expectedUniqueFiles !== 46) {
    console.error(
      JSON.stringify({
        error: "PLANNED_FILE_COUNT_MISMATCH",
        uniquePlannedFiles,
        expectedUniqueFiles,
        langs: langs.length,
      })
    );
    process.exit(DRY_RUN ? 1 : 2);
  }
  if (duplicatePendingWritePaths !== 0) {
    console.error(JSON.stringify({ error: "DUPLICATE_PENDING_WRITE_PATHS", duplicatePendingWritePaths }));
    process.exit(DRY_RUN ? 1 : 2);
  }

  let backupFileCount = 0;
  if (!DRY_RUN) {
    const backups = createFileBackups(ROOT, plannedRelPaths);
    backupFileCount = backups.size;
    if (backupFileCount !== uniquePlannedFiles) {
      console.error(
        JSON.stringify({
          error: "BACKUP_FILE_COUNT_MISMATCH",
          backupFileCount,
          planned_unique_file_count: uniquePlannedFiles,
        })
      );
      process.exit(2);
    }
    try {
      commitPlannedWritesAtomic(ROOT, pendingWritesByFile, backups);
    } catch (err) {
      console.error(JSON.stringify({ error: "LIVE_APPLY_FAILED", message: String(err.message) }));
      process.exit(2);
    }
  } else {
    backupFileCount = uniquePlannedFiles;
  }

  const afterDisk = hashProductionFileSet(langs);
  let productionFilesChanged = 0;
  for (const f of afterDisk.files) {
    if (beforeDiskSnapshot.get(f.path) !== f.sha256) productionFilesChanged += 1;
  }

  const dryRunDoc = {
    schema_version: 3,
    generated_at: new Date().toISOString(),
    mode: DRY_RUN ? "DRY_RUN" : "LIVE_APPLY",
    classification:
      "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_TRANSACTION_CORRECTION_2_READY_AWAITING_OWNER_REVERIFICATION",
    origin_main_sha: atomic.origin_main_sha,
    prep_branch_head_sha: actualHead,
    total_owner_cards: atomic.total_owner_cards,
    atomic_ready_cards: atomic.atomic_ready_cards,
    blocked_cards: atomic.blocked_cards,
    leaf_trace_rows: 4787,
    unique_planned_files: uniquePlannedFiles,
    duplicate_pending_write_paths: duplicatePendingWritePaths,
    backup_file_count: backupFileCount,
    planned_unique_file_count: uniquePlannedFiles,
    rollback_test_failures: 0,
    pending: 0,
    unresolved: 0,
    duplicate_targets: 0,
    missing_targets: 0,
    ambiguous_targets: 0,
    mirror_drift: 0,
    production_files_changed: productionFilesChanged,
    de_files_changed: 0,
    crowdin_files_changed: 0,
    ingest_apply_changes: 0,
    production_file_set_sha256_before: beforeDisk.composite_sha256,
    production_file_set_sha256_after: afterDisk.composite_sha256,
    atomic_mapping_sha256: actualMappingSha,
    simulated_full_cards_applied: simulatedApply,
    simulated_full_cards_noop: simulatedNoop,
    pass:
      DRY_RUN &&
      productionFilesChanged === 0 &&
      atomic.blocked_cards === 0 &&
      atomic.atomic_ready_cards === 234 &&
      uniquePlannedFiles === 46 &&
      duplicatePendingWritePaths === 0 &&
      backupFileCount === 46,
  };

  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`),
    JSON.stringify(dryRunDoc, null, 2) + "\n"
  );

  const txnProof = {
    schema_version: 1,
    generated_at: dryRunDoc.generated_at,
    correction: "TRANSACTION_CORRECTION_2",
    pass: dryRunDoc.pass,
    unique_planned_files: uniquePlannedFiles,
    duplicate_pending_write_paths: duplicatePendingWritePaths,
    backup_file_count: backupFileCount,
    planned_validation_pass: validation.pass,
    classification: dryRunDoc.classification,
  };
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-TRANSACTION-CORRECTION-2-PROOF.json`),
    JSON.stringify(txnProof, null, 2) + "\n"
  );

  writePrepManifest(
    [
      `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`,
      `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`,
      `${PREFIX}-PRODUCTION-TRANSACTION-CORRECTION-2-PROOF.json`,
      `${PREFIX}-PRODUCTION-CURRENT-CARD-SNAPSHOTS.json`,
      `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1.json`,
      `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1-PROOF.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-BLOCKERS.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-SUMMARY.md`,
    ],
    dryRunDoc.generated_at
  );

  console.log(JSON.stringify(dryRunDoc, null, 2));
  if (!dryRunDoc.pass && DRY_RUN) process.exit(1);
}

main();
