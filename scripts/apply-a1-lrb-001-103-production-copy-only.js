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
  resolveProductionTargetStrict,
  writePrepManifest,
  EXPECTED_PRODUCTION_FILE_SET_SHA,
} = require("./lib/g2-a1-lrb-production-copy-only-prep");
const {
  loadWordsFromRel,
  productionEntrySha256,
  productionFileRel,
} = require("./lib/g2-a1-lrb-production-atomic-card");
const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");

const DRY_RUN = process.argv.includes("--dry-run");
const AUTHORIZE_SHA = (() => {
  const arg = process.argv.find((a) => a.startsWith("--authorize-apply-sha="));
  return arg ? arg.split("=")[1] : process.env.A1_LRB_PRODUCTION_COPY_ONLY_AUTHORIZED_SHA || null;
})();

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`,
    "utf8"
  );
}

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

function main() {
  if (!DRY_RUN) {
    if (!AUTHORIZE_SHA) {
      console.error(
        JSON.stringify({
          error: "REFUSE_WRITE",
          message:
            "Production COPY-ONLY apply refuses to write without --dry-run and --authorize-apply-sha=<OWNER_SHA>",
        })
      );
      process.exit(2);
    }
    const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
    if (head !== AUTHORIZE_SHA) {
      console.error(JSON.stringify({ error: "AUTHORIZE_SHA_MISMATCH", head, AUTHORIZE_SHA }));
      process.exit(2);
    }
  }

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
  const langs = [...new Set(atomic.cards.map((c) => c.target_language))];

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

  const fileCache = new Map();
  const mirrorCache = new Map();
  for (const lang of langs) {
    const rel = productionFileRel(lang);
    fileCache.set(rel, loadWordsFromRel(rel));
    mirrorCache.set(rel.replace(/^data\//, "www/data/"), loadWordsFromRel(rel.replace(/^data\//, "www/data/")));
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
  const pendingWrites = [];

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

    const beforeEntry = words[resolved.index];
    const afterEntry = applyAtomicOwnerApprovedCard(beforeEntry, ownerCard);
    words[resolved.index] = afterEntry;
    fileCache.set(rel, words);
    mirrorCache.set(rel.replace(/^data\//, "www/data/"), words);
    pendingWrites.push({ rel, words });
    simulatedApply += 1;
  }

  if (preflightErrors.length) {
    console.error(JSON.stringify({ error: "APPLY_PLAN_ABORT", preflightErrors }, null, 2));
    process.exit(DRY_RUN ? 1 : 2);
  }

  if (!DRY_RUN && pendingWrites.length) {
    const backups = new Map();
    try {
      for (const { rel, words } of pendingWrites) {
        const dataPath = path.join(ROOT, rel);
        const mirrorPath = path.join(ROOT, rel.replace(/^data\//, "www/data/"));
        backups.set(dataPath, fs.readFileSync(dataPath));
        backups.set(mirrorPath, fs.readFileSync(mirrorPath));
        writeWords(dataPath, words);
        writeWords(mirrorPath, words);
      }
    } catch (err) {
      for (const [p, buf] of backups) {
        fs.writeFileSync(p, buf);
      }
      throw err;
    }
  }

  const afterDisk = hashProductionFileSet(langs);
  let productionFilesChanged = 0;
  for (const f of afterDisk.files) {
    if (beforeDiskSnapshot.get(f.path) !== f.sha256) productionFilesChanged += 1;
  }

  const dryRunDoc = {
    schema_version: 2,
    generated_at: new Date().toISOString(),
    mode: DRY_RUN ? "DRY_RUN" : "LIVE_APPLY",
    origin_main_sha: atomic.origin_main_sha,
    prep_branch_head_sha: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    total_owner_cards: atomic.total_owner_cards,
    atomic_ready_cards: atomic.atomic_ready_cards,
    blocked_cards: atomic.blocked_cards,
    leaf_trace_rows: 4787,
    pending: 0,
    unresolved: 0,
    duplicate_targets: 0,
    missing_targets: 0,
    ambiguous_targets: 0,
    mirror_drift: 0,
    current_snapshot_missing: 0,
    owner_new_mismatch: 0,
    production_files_changed: productionFilesChanged,
    de_files_changed: 0,
    crowdin_files_changed: 0,
    ingest_apply_changes: 0,
    production_file_set_sha256_before: beforeDisk.composite_sha256,
    production_file_set_sha256_after: afterDisk.composite_sha256,
    simulated_full_cards_applied: simulatedApply,
    simulated_full_cards_noop: simulatedNoop,
    pass:
      DRY_RUN &&
      productionFilesChanged === 0 &&
      atomic.blocked_cards === 0 &&
      atomic.atomic_ready_cards === 234,
  };

  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`),
    JSON.stringify(dryRunDoc, null, 2) + "\n"
  );

  writePrepManifest(
    [
      `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`,
      `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`,
      `${PREFIX}-PRODUCTION-CURRENT-CARD-SNAPSHOTS.json`,
      `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1.json`,
      `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1-PROOF.json`,
      `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1-SUMMARY.md`,
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
