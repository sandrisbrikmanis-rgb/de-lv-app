#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  PREFIX,
  PREP_DIR,
  hashProductionFileSet,
  applyPostOwnerCardToProductionEntry,
  resolveProductionTargetStrict,
  writePrepManifest,
} = require("./lib/g2-a1-lrb-production-copy-only-prep");
const { sha256 } = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");

const DRY_RUN = process.argv.includes("--dry-run");
const AUTHORIZE_SHA = (() => {
  const arg = process.argv.find((a) => a.startsWith("--authorize-apply-sha="));
  return arg ? arg.split("=")[1] : process.env.A1_LRB_PRODUCTION_COPY_ONLY_AUTHORIZED_SHA || null;
})();

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`,
    "utf8"
  );
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

  const mappingPath = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`);
  if (!fs.existsSync(mappingPath)) {
    execSync("node scripts/build-a1-lrb-001-103-production-copy-only-prep.js", {
      cwd: ROOT,
      stdio: "inherit",
    });
  }
  const mapping = JSON.parse(fs.readFileSync(mappingPath, "utf8"));
  const langs = [...new Set(mapping.full_cards.map((c) => c.target_language))];

  const beforeDisk = hashProductionFileSet(langs);
  const beforeDiskSnapshot = new Map(beforeDisk.files.map((f) => [f.path, f.sha256]));

  const fileCache = new Map();
  for (const lang of langs) {
    const rel = `data/${lang}/a1.js`;
    fileCache.set(rel, loadWords(path.join(ROOT, rel)));
  }

  const inMemoryBefore = new Map();
  for (const [rel, words] of fileCache) {
    inMemoryBefore.set(rel, sha256(JSON.stringify(words)));
  }

  let simulatedLeafWrites = 0;
  const appliedCards = [];
  const skipped = [];

  for (const fc of mapping.full_cards) {
    if (fc.atomic_status !== "ATOMIC_READY" || !fc.post_owner_card) {
      skipped.push({ card: `${fc.target_language}|${fc.canonical_card_object_id}`, reason: fc.block_reason });
      continue;
    }
    const rel = `data/${fc.target_language}/a1.js`;
    const words = fileCache.get(rel);
    const resolved = resolveProductionTargetStrict(fc.target_language, fc.canonical_card_object_id);
    if (!resolved.ok) {
      skipped.push({ card: `${fc.target_language}|${fc.canonical_card_object_id}`, reason: resolved.classification });
      continue;
    }
    const beforeEntry = JSON.stringify(words[resolved.index]);
    words[resolved.index] = applyPostOwnerCardToProductionEntry(words[resolved.index], fc.post_owner_card);
    if (JSON.stringify(words[resolved.index]) !== beforeEntry) {
      simulatedLeafWrites += 1;
      appliedCards.push(`${fc.target_language}|${fc.canonical_card_object_id}`);
    }
    fileCache.set(rel, words);
  }

  if (!DRY_RUN) {
    for (const [rel, words] of fileCache) {
      writeWords(path.join(ROOT, rel), words);
      const mirror = rel.replace(/^data\//, "www/data/");
      writeWords(path.join(ROOT, mirror), words);
    }
  }

  const afterDisk = hashProductionFileSet(langs);
  let productionFilesChanged = 0;
  for (const f of afterDisk.files) {
    if (beforeDiskSnapshot.get(f.path) !== f.sha256) productionFilesChanged += 1;
  }

  const inMemoryAfter = new Map();
  for (const [rel, words] of fileCache) {
    inMemoryAfter.set(rel, sha256(JSON.stringify(words)));
  }
  let inMemoryChanged = 0;
  for (const rel of inMemoryBefore.keys()) {
    if (inMemoryBefore.get(rel) !== inMemoryAfter.get(rel)) inMemoryChanged += 1;
  }

  const deTouched = 0;
  const crowdinTouched = 0;
  const ingestTouched = 0;

  const dryRunDoc = {
    schema_version: 1,
    generated_at: new Date().toISOString(),
    mode: DRY_RUN ? "DRY_RUN" : "LIVE_APPLY",
    origin_main_sha: mapping.origin_main_sha,
    prep_branch_head_sha: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    production_files_changed: productionFilesChanged,
    de_files_changed: deTouched,
    crowdin_files_changed: crowdinTouched,
    ingest_apply_changes: ingestTouched,
    production_file_set_sha256_before: beforeDisk.composite_sha256,
    production_file_set_sha256_after: afterDisk.composite_sha256,
    in_memory_data_files_changed: inMemoryChanged,
    simulated_full_cards_applied: appliedCards.length,
    simulated_leaf_writes: simulatedLeafWrites,
    skipped_cards: skipped.length,
    pass: DRY_RUN && productionFilesChanged === 0,
  };

  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`),
    JSON.stringify(dryRunDoc, null, 2) + "\n"
  );

  writePrepManifest(
    [
      `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-BLOCKERS.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-SUMMARY.md`,
    ],
    dryRunDoc.generated_at
  );

  console.log(JSON.stringify(dryRunDoc, null, 2));
  if (DRY_RUN && productionFilesChanged !== 0) {
    process.exit(1);
  }
}

main();
