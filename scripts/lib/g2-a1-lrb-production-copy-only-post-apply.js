#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");
const { sha256, cardKey } = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const {
  flattenCardToLeaves,
  stableLeafValue,
} = require("./g2-a1-lrb-leaf-reconstruction");
const {
  extractTargetLanguageCard,
} = require("./g2-a1-lrb-consolidation-normalize");
const {
  productionEntrySha256,
  productionFileRel,
  productionMirrorRel,
  resolveProductionTargetStrict,
  deExampleSequence,
} = require("./g2-a1-lrb-production-atomic-card");
const {
  hashProductionFileSet,
  loadDecisionsFromManifest,
  PREFIX,
  PREP_DIR,
} = require("./g2-a1-lrb-production-copy-only-prep");
const { loadWordsFromSerialized, sha256Buffer } = require("./g2-a1-lrb-production-copy-only-transaction");
const {
  analyzeProductionTargetAliases,
  analyzeLeafAliasCollapse,
  productionSlotKey,
} = require("./g2-a1-lrb-production-target-alias");

const APPLY_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/production-apply");
const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const LEAF_COUNT = 4787;
const CARD_COUNT = 234;
const FILE_COUNT = 46;

const AUTHORIZED_APPLY_BASE_HEAD = "169723c4de7e84c0fbc24787e2287afab5310eea";
const AUTHORIZED_ATOMIC_MAPPING_SHA256 =
  "33519482cfb327ba7eb062b69cd3b61d8718ca936cb4a8553fd36b0feb51c5f0";
const AUTHORIZED_PRODUCTION_BEFORE_FILE_SET_SHA256 =
  "ccd237adb9e2b9812901589c328d7ddd0225aca81fe1b986d13d9f2e4c510c56";

const PRODUCTION_A1_REL = /^((data|www\/data)\/[a-z]{2}\/a1\.js)$/;
const ALLOWED_DIFF_PREFIXES = [
  "reports/g2-a1-owner/consolidation/production-apply/",
  "scripts/verify-a1-lrb-001-103-production-copy-only-post-apply.js",
  "scripts/build-a1-lrb-001-103-production-copy-only-post-apply-artifacts.js",
  "scripts/lib/g2-a1-lrb-production-copy-only-post-apply.js",
  "scripts/lib/g2-a1-lrb-production-target-alias.js",
  "scripts/lib/g2-a1-lrb-production-copy-only-transaction.js",
  "scripts/test-a1-lrb-production-target-alias.js",
  "scripts/build-a1-lrb-001-103-production-closure-audit.js",
  "scripts/verify-a1-lrb-001-103-production-closure-audit.js",
  "scripts/lib/g2-a1-lrb-production-closure-audit.js",
  "reports/g2-a1-owner/consolidation/production-closure/",
];

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
}

function loadWordsFromGitRef(ref, rel) {
  const content = git(`git show ${ref}:${rel}`);
  return loadWordsFromSerialized(content);
}

function loadAtomicMapping() {
  const p = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`);
  const raw = fs.readFileSync(p);
  const doc = JSON.parse(raw.toString("utf8"));
  return { doc, sha256: sha256(raw) };
}

function loadBeforeSnapshots() {
  const p = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-CURRENT-CARD-SNAPSHOTS.json`);
  const doc = JSON.parse(fs.readFileSync(p, "utf8"));
  const byKey = new Map(doc.cards.map((c) => [c.card_key, c]));
  return byKey;
}

function isAllowedDiffPath(rel) {
  if (PRODUCTION_A1_REL.test(rel)) return true;
  for (const prefix of ALLOWED_DIFF_PREFIXES) {
    if (rel === prefix || rel.startsWith(prefix)) return true;
  }
  return false;
}

function runStructuralA1Checks(langs) {
  const failures = [];
  for (const lang of langs) {
    for (const rel of [productionFileRel(lang), productionMirrorRel(lang)]) {
      const abs = path.join(ROOT, rel);
      try {
        execSync(`node --check ${rel}`, { cwd: ROOT, stdio: "pipe" });
        loadWordsFromSerialized(fs.readFileSync(abs, "utf8"));
        const words = loadWordsFromSerialized(fs.readFileSync(abs, "utf8"));
        if (!Array.isArray(words) || words.length === 0) {
          failures.push(`empty_or_invalid_words:${rel}`);
        }
      } catch (e) {
        failures.push(`structural_fail:${rel}:${e.message}`);
      }
    }
  }
  return failures;
}

function writeTargetAliasReconciliation(aliasAnalysis, leafCollapse) {
  const skGroup =
    aliasAnalysis.proven_alias_group_details.find(
      (g) => g.production_language === "sk" && g.production_array_index === 660
    ) || null;
  const doc = {
    schema_version: 1,
    generated_at: new Date().toISOString(),
    owner_target_keys: aliasAnalysis.owner_target_keys,
    unique_production_slots: aliasAnalysis.unique_production_slots,
    alias_collapsed_owner_keys: aliasAnalysis.alias_collapsed_owner_keys,
    proven_alias_groups: aliasAnalysis.proven_alias_groups,
    unresolved_alias_conflicts: aliasAnalysis.unresolved_alias_conflicts,
    proven_alias_group_details: aliasAnalysis.proven_alias_group_details,
    sk_slot_660: skGroup,
    owner_leaf_trace_rows: leafCollapse.owner_leaf_trace_rows,
    unique_production_leaf_targets: leafCollapse.unique_production_leaf_targets,
    collapsed_duplicate_leaf_trace_rows: leafCollapse.collapsed_duplicate_leaf_trace_rows,
    owner_payload_identical_for_sk_wie_aliases:
      skGroup?.owner_card_keys?.length === 2 &&
      skGroup.owner_card_keys.includes("sk|a1-wie") &&
      skGroup.owner_card_keys.includes("sk|wie"),
  };
  const outPath = path.join(APPLY_DIR, `${PREFIX}-PRODUCTION-TARGET-ALIAS-RECONCILIATION.json`);
  fs.writeFileSync(outPath, JSON.stringify(doc, null, 2) + "\n");
  return doc;
}

function runPostApplyVerification(options = {}) {
  const baseHead = options.baseHead || AUTHORIZED_APPLY_BASE_HEAD;
  const reconciliationPrHead = options.reconciliationPrHead || null;
  const blockers = [];
  const { doc: atomic, sha256: atomicMappingSha256 } = loadAtomicMapping();
  const aliasAnalysis = analyzeProductionTargetAliases(atomic.cards);

  if (atomicMappingSha256 !== AUTHORIZED_ATOMIC_MAPPING_SHA256) {
    blockers.push(`atomic_mapping_sha_mismatch:${atomicMappingSha256}`);
  }
  if (atomic.atomic_ready_cards !== CARD_COUNT) blockers.push(`atomic_ready_cards:${atomic.atomic_ready_cards}`);
  if (atomic.blocked_cards !== 0) blockers.push(`blocked_cards:${atomic.blocked_cards}`);

  const langs = [...new Set(atomic.cards.map((c) => c.target_language))].sort();
  const afterFileSet = hashProductionFileSet(langs);

  const manifest = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`), "utf8")
  );
  const leafDecisions = loadDecisionsFromManifest(manifest);
  if (leafDecisions.length !== LEAF_COUNT) {
    blockers.push(`leaf_count:${leafDecisions.length}`);
  }

  const beforeSnapshots = loadBeforeSnapshots();
  const targetIndexByLang = new Map();
  for (const card of atomic.cards) {
    if (!targetIndexByLang.has(card.target_language)) targetIndexByLang.set(card.target_language, new Set());
    targetIndexByLang.get(card.target_language).add(card.production_array_index);
  }

  let appliedCards = 0;
  let cardShaMismatches = 0;
  let deChanges = 0;
  let missingTargets = 0;
  const cardResults = [];

  for (const card of atomic.cards) {
    if (card.atomic_status === "BLOCKED") {
      blockers.push(`blocked_card:${card.card_key}`);
      continue;
    }

    const resolved = resolveProductionTargetStrict(card.target_language, card.canonical_card_object_id);
    if (!resolved.ok) {
      missingTargets += 1;
      blockers.push(`missing_target:${card.card_key}`);
      continue;
    }

    const liveSha = productionEntrySha256(resolved.entry);
    if (liveSha !== card.production_planned_entry_sha256) {
      cardShaMismatches += 1;
      if (cardShaMismatches <= 3) {
        blockers.push(`card_planned_sha_mismatch:${card.card_key}`);
      }
    } else {
      appliedCards += 1;
    }

    const snap = beforeSnapshots.get(card.card_key);
    if (snap?.current_entry_snapshot) {
      const deBefore = deExampleSequence(snap.current_entry_snapshot);
      const deAfter = deExampleSequence(resolved.entry);
      if (JSON.stringify(deBefore) !== JSON.stringify(deAfter)) {
        deChanges += 1;
        if (deChanges <= 3) blockers.push(`de_sequence_changed:${card.card_key}`);
      }
    }

    cardResults.push({
      card_key: card.card_key,
      production_planned_entry_sha256: card.production_planned_entry_sha256,
      production_live_entry_sha256: liveSha,
      match: liveSha === card.production_planned_entry_sha256,
    });
  }

  let ownerLeafMatches = 0;
  let ownerLeafMismatches = 0;
  const cardByKey = new Map(atomic.cards.map((c) => [c.card_key, c]));

  for (const decision of leafDecisions) {
    const ck = cardKey(decision.target_language, decision.canonical_card_object_id);
    const card = cardByKey.get(ck);
    if (!card || card.atomic_status === "BLOCKED") {
      ownerLeafMismatches += 1;
      if (ownerLeafMismatches <= 3) blockers.push(`leaf_card_blocked:${ck}`);
      continue;
    }
    const resolved = resolveProductionTargetStrict(card.target_language, card.canonical_card_object_id);
    if (!resolved.ok) {
      ownerLeafMismatches += 1;
      continue;
    }
    const leaves = flattenCardToLeaves(extractTargetLanguageCard(resolved.entry));
    const prodVal = leaves.has(decision.exact_leaf_field_path)
      ? leaves.get(decision.exact_leaf_field_path)
      : null;
    if (stableLeafValue(prodVal) === stableLeafValue(decision.owner_final_value)) {
      ownerLeafMatches += 1;
    } else {
      ownerLeafMismatches += 1;
      if (ownerLeafMismatches <= 3) {
        blockers.push(`owner_leaf_mismatch:${ck}:${decision.exact_leaf_field_path}`);
      }
    }
  }

  let dataWwwMirrorMismatches = 0;
  let syntaxFailures = 0;
  const productionFileShasAfter = [];
  for (const lang of langs) {
    const dataRel = productionFileRel(lang);
    const wwwRel = productionMirrorRel(lang);
    const dataBytes = fs.readFileSync(path.join(ROOT, dataRel));
    const wwwBytes = fs.readFileSync(path.join(ROOT, wwwRel));
    productionFileShasAfter.push({ path: dataRel, sha256: sha256Buffer(dataBytes) });
    productionFileShasAfter.push({ path: wwwRel, sha256: sha256Buffer(wwwBytes) });
    if (!dataBytes.equals(wwwBytes)) dataWwwMirrorMismatches += 1;
    try {
      loadWordsFromSerialized(dataBytes.toString("utf8"));
      loadWordsFromSerialized(wwwBytes.toString("utf8"));
    } catch {
      syntaxFailures += 1;
    }
  }

  const changedSlots = new Set();
  for (const card of atomic.cards) {
    if (card.atomic_status !== "ATOMIC_READY_APPLY") continue;
    const resolved = resolveProductionTargetStrict(card.target_language, card.canonical_card_object_id);
    if (!resolved.ok) continue;
    const liveSha = productionEntrySha256(resolved.entry);
    if (liveSha !== card.production_current_entry_sha256) {
      changedSlots.add(productionSlotKey(card));
    }
  }
  const changedUniqueProductionCards = changedSlots.size;
  let changedNonTargetCards = 0;
  for (const lang of langs) {
    const dataRel = productionFileRel(lang);
    const beforeWords = loadWordsFromGitRef(baseHead, dataRel);
    const afterWords = loadWordsFromSerialized(fs.readFileSync(path.join(ROOT, dataRel), "utf8"));
    const targetIdx = targetIndexByLang.get(lang) || new Set();
    const maxLen = Math.max(beforeWords.length, afterWords.length);
    for (let i = 0; i < maxLen; i += 1) {
      if (targetIdx.has(i)) continue;
      const beforeSha = beforeWords[i] ? productionEntrySha256(beforeWords[i]) : null;
      const afterSha = afterWords[i] ? productionEntrySha256(afterWords[i]) : null;
      if (beforeSha !== afterSha) changedNonTargetCards += 1;
    }
  }

  const diffBaseForScope = reconciliationPrHead || baseHead;
  const changedFiles = git(`git diff --name-only ${diffBaseForScope}`).split("\n").filter(Boolean);
  let unauthorizedFileChanges = 0;
  let changedProductionFiles = 0;
  let productionFilesChangedVsPrHead = 0;
  for (const rel of changedFiles) {
    if (PRODUCTION_A1_REL.test(rel)) {
      productionFilesChangedVsPrHead += 1;
    }
  }
  const changedFilesApply = git(`git diff --name-only ${baseHead}`).split("\n").filter(Boolean);
  for (const rel of changedFilesApply) {
    if (PRODUCTION_A1_REL.test(rel)) {
      changedProductionFiles += 1;
      continue;
    }
    if (!isAllowedDiffPath(rel)) {
      unauthorizedFileChanges += 1;
      if (unauthorizedFileChanges <= 5) blockers.push(`unauthorized_diff:${rel}`);
    }
  }

  const productionFileShasBefore = [];
  for (const lang of langs) {
    for (const rel of [productionFileRel(lang), productionMirrorRel(lang)]) {
      const content = git(`git show ${baseHead}:${rel}`);
      productionFileShasBefore.push({ path: rel, sha256: sha256Buffer(Buffer.from(content)) });
    }
  }

  const structuralFailures = runStructuralA1Checks(langs);
  for (const f of structuralFailures) blockers.push(f);

  if (aliasAnalysis.unresolved_alias_conflicts !== 0) {
    blockers.push(`unresolved_alias_conflicts:${aliasAnalysis.unresolved_alias_conflicts}`);
  }
  if (aliasAnalysis.unique_production_slots !== 233) {
    blockers.push(`unique_production_slots:${aliasAnalysis.unique_production_slots}`);
  }
  if (changedProductionFiles !== FILE_COUNT) {
    blockers.push(`changed_production_files:${changedProductionFiles}`);
  }
  if (changedUniqueProductionCards !== aliasAnalysis.unique_production_slots) {
    blockers.push(`changed_unique_production_cards:${changedUniqueProductionCards}`);
  }
  if (reconciliationPrHead && productionFilesChangedVsPrHead !== 0) {
    blockers.push(`production_files_changed_vs_pr_head:${productionFilesChangedVsPrHead}`);
  }
  if (changedNonTargetCards !== 0) {
    blockers.push(`changed_non_target_cards:${changedNonTargetCards}`);
  }
  if (dataWwwMirrorMismatches !== 0) blockers.push(`data_www_mirror_mismatches:${dataWwwMirrorMismatches}`);
  if (syntaxFailures !== 0) blockers.push(`syntax_failures:${syntaxFailures}`);
  if (deChanges !== 0) blockers.push(`de_changes:${deChanges}`);
  if (cardShaMismatches !== 0) blockers.push(`card_sha_mismatches:${cardShaMismatches}`);
  if (ownerLeafMismatches !== 0) blockers.push(`owner_leaf_mismatches:${ownerLeafMismatches}`);
  if (missingTargets !== 0) blockers.push(`missing_targets:${missingTargets}`);

  const leafCollapse = analyzeLeafAliasCollapse(atomic.cards, leafDecisions, (decision) =>
    cardKey(decision.target_language, decision.canonical_card_object_id)
  );
  writeTargetAliasReconciliation(aliasAnalysis, leafCollapse);

  const ownerKeysCovered = appliedCards;
  const pass =
    blockers.length === 0 &&
    ownerKeysCovered === CARD_COUNT &&
    ownerLeafMatches === LEAF_COUNT &&
    changedProductionFiles === FILE_COUNT &&
    changedUniqueProductionCards === aliasAnalysis.unique_production_slots &&
    aliasAnalysis.proven_alias_groups === 1 &&
    aliasAnalysis.alias_collapsed_owner_keys === 1 &&
    aliasAnalysis.unresolved_alias_conflicts === 0 &&
    changedNonTargetCards === 0;

  const classification = pass
    ? "A1_LRB_001_103_PRODUCTION_APPLY_TARGET_ALIAS_RECONCILIATION_COMPLETE_AWAITING_OWNER_REVERIFICATION"
    : "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_BLOCKED";

  return {
    pass,
    blockers,
    generated_at: new Date().toISOString(),
    authorized_apply_base_head: baseHead,
    reconciliation_pr_head: reconciliationPrHead,
    authorized_atomic_mapping_sha256: AUTHORIZED_ATOMIC_MAPPING_SHA256,
    atomic_mapping_sha256: atomicMappingSha256,
    authorized_production_before_file_set_sha256: AUTHORIZED_PRODUCTION_BEFORE_FILE_SET_SHA256,
    production_file_set_sha256_after: afterFileSet.composite_sha256,
    owner_keys_covered: ownerKeysCovered,
    owner_keys_total: CARD_COUNT,
    applied_cards: appliedCards,
    total_cards: CARD_COUNT,
    unique_production_slots: aliasAnalysis.unique_production_slots,
    changed_unique_production_cards: changedUniqueProductionCards,
    proven_alias_groups: aliasAnalysis.proven_alias_groups,
    alias_collapsed_owner_keys: aliasAnalysis.alias_collapsed_owner_keys,
    unresolved_alias_conflicts: aliasAnalysis.unresolved_alias_conflicts,
    alias_analysis: aliasAnalysis,
    owner_leaf_matches: ownerLeafMatches,
    owner_leaf_total: LEAF_COUNT,
    owner_leaf_trace_rows: leafCollapse.owner_leaf_trace_rows,
    unique_production_leaf_targets: leafCollapse.unique_production_leaf_targets,
    collapsed_duplicate_leaf_trace_rows: leafCollapse.collapsed_duplicate_leaf_trace_rows,
    changed_production_files: changedProductionFiles,
    production_files_changed_vs_pr_head: productionFilesChangedVsPrHead,
    changed_non_target_cards: changedNonTargetCards,
    data_www_mirror_mismatches: dataWwwMirrorMismatches,
    de_changes: deChanges,
    syntax_failures: syntaxFailures,
    unauthorized_file_changes: unauthorizedFileChanges,
    card_sha_mismatches: cardShaMismatches,
    production_file_shas_before: productionFileShasBefore,
    production_file_shas_after: productionFileShasAfter,
    card_results_sample: cardResults.slice(0, 5),
    per_card_target_classification: aliasAnalysis.per_card_classification,
    classification,
    next_action: pass ? "OWNER_REVERIFY_PRODUCTION_APPLY_AND_AUTHORIZE_MERGE" : "BLOCKED_DO_NOT_REAPPLY",
  };
}

function writePostApplyArtifacts(verification, liveApplySummary = null) {
  fs.mkdirSync(APPLY_DIR, { recursive: true });
  const prefix = `${PREFIX}-PRODUCTION-COPY-ONLY`;

  const verificationPath = path.join(APPLY_DIR, `${prefix}-POST-APPLY-VERIFICATION.json`);
  fs.writeFileSync(verificationPath, JSON.stringify(verification, null, 2) + "\n");

  const result = {
    schema_version: 2,
    generated_at: verification.generated_at,
    mode: "LIVE_APPLY",
    authorized_apply_base_head: verification.authorized_apply_base_head,
    authorized_atomic_mapping_sha256: verification.authorized_atomic_mapping_sha256,
    atomic_mapping_sha256: verification.atomic_mapping_sha256,
    live_apply_command:
      "node scripts/apply-a1-lrb-001-103-production-copy-only.js --authorize-apply-head=169723c4de7e84c0fbc24787e2287afab5310eea --authorize-mapping-sha=33519482cfb327ba7eb062b69cd3b61d8718ca936cb4a8553fd36b0feb51c5f0 --authorize-production-current-sha=ccd237adb9e2b9812901589c328d7ddd0225aca81fe1b986d13d9f2e4c510c56",
    live_apply_exit_code: liveApplySummary?.exit_code ?? 0,
    ...liveApplySummary,
    production_file_set_sha256_before: verification.authorized_production_before_file_set_sha256,
    production_file_set_sha256_after: verification.production_file_set_sha256_after,
    owner_keys_covered: `${verification.owner_keys_covered}/${verification.owner_keys_total}`,
    unique_production_slots: verification.unique_production_slots,
    changed_unique_production_cards: verification.changed_unique_production_cards,
    proven_alias_groups: verification.proven_alias_groups,
    alias_collapsed_owner_keys: verification.alias_collapsed_owner_keys,
    unresolved_alias_conflicts: verification.unresolved_alias_conflicts,
    owner_leaf_matches: `${verification.owner_leaf_matches}/${verification.owner_leaf_total}`,
    changed_production_files: verification.changed_production_files,
    changed_non_target_cards: verification.changed_non_target_cards,
    de_changes: verification.de_changes,
    pass: verification.pass,
    classification: verification.classification,
  };
  const resultPath = path.join(APPLY_DIR, `${prefix}-APPLY-RESULT.json`);
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + "\n");

  const proof = {
    schema_version: 2,
    generated_at: verification.generated_at,
    authorized_apply_base_head: verification.authorized_apply_base_head,
    atomic_mapping_sha256: verification.atomic_mapping_sha256,
    production_before_file_set_sha256: verification.authorized_production_before_file_set_sha256,
    production_after_file_set_sha256: verification.production_file_set_sha256_after,
    owner_keys_covered: `${verification.owner_keys_covered}/${verification.owner_keys_total}`,
    unique_production_slots: verification.unique_production_slots,
    changed_unique_production_cards: verification.changed_unique_production_cards,
    proven_alias_groups: verification.proven_alias_groups,
    alias_collapsed_owner_keys: verification.alias_collapsed_owner_keys,
    unresolved_alias_conflicts: verification.unresolved_alias_conflicts,
    owner_leaf_matches: `${verification.owner_leaf_matches}/${verification.owner_leaf_total}`,
    owner_leaf_trace_rows: verification.owner_leaf_trace_rows,
    unique_production_leaf_targets: verification.unique_production_leaf_targets,
    collapsed_duplicate_leaf_trace_rows: verification.collapsed_duplicate_leaf_trace_rows,
    production_files_changed: verification.changed_production_files,
    changed_non_target_cards: verification.changed_non_target_cards,
    de_unchanged: verification.de_changes === 0,
    data_www_mirrors_identical: verification.data_www_mirror_mismatches === 0,
    pass: verification.pass,
    classification: verification.classification,
  };
  const proofPath = path.join(APPLY_DIR, `${prefix}-APPLY-PROOF.json`);
  fs.writeFileSync(proofPath, JSON.stringify(proof, null, 2) + "\n");

  const snapshotPath = path.join(APPLY_DIR, `${PREFIX}-LIVE-APPLY-RUN-SNAPSHOT.json`);
  const reconciliationPath = path.join(APPLY_DIR, `${PREFIX}-PRODUCTION-TARGET-ALIAS-RECONCILIATION.json`);
  const artifacts = [
    { path: path.relative(ROOT, resultPath), sha256: sha256(fs.readFileSync(resultPath)) },
    { path: path.relative(ROOT, proofPath), sha256: sha256(fs.readFileSync(proofPath)) },
    { path: path.relative(ROOT, verificationPath), sha256: sha256(fs.readFileSync(verificationPath)) },
  ];
  if (fs.existsSync(snapshotPath)) {
    artifacts.push({
      path: path.relative(ROOT, snapshotPath),
      sha256: sha256(fs.readFileSync(snapshotPath)),
    });
  }
  if (fs.existsSync(reconciliationPath)) {
    artifacts.push({
      path: path.relative(ROOT, reconciliationPath),
      sha256: sha256(fs.readFileSync(reconciliationPath)),
    });
  }
  const manifest = {
    schema_version: 1,
    generated_at: verification.generated_at,
    authorized_apply_base_head: verification.authorized_apply_base_head,
    artifacts,
    apply_proof_sha256: artifacts.find((a) => a.path.endsWith("APPLY-PROOF.json"))?.sha256,
    verification_sha256: artifacts.find((a) => a.path.endsWith("POST-APPLY-VERIFICATION.json"))?.sha256,
  };
  const manifestPath = path.join(APPLY_DIR, `${prefix}-APPLY-MANIFEST.json`);
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

  const summary = `# A1 LRB 001–103 — production COPY-ONLY apply

## Classification

\`${verification.classification}\`

**NEXT_ACTION:** \`${verification.next_action}\`

| Metric | Value |
|--------|------:|
| Authorized base HEAD | \`${verification.authorized_apply_base_head}\` |
| Atomic mapping SHA | \`${verification.atomic_mapping_sha256}\` |
| Production file-set SHA (before) | \`${verification.authorized_production_before_file_set_sha256}\` |
| Production file-set SHA (after) | \`${verification.production_file_set_sha256_after}\` |
| OWNER keys covered | ${verification.owner_keys_covered}/${verification.owner_keys_total} |
| Unique production slots changed | ${verification.changed_unique_production_cards}/${verification.unique_production_slots} |
| Proven identical alias groups | ${verification.proven_alias_groups} |
| Alias-collapsed OWNER keys | ${verification.alias_collapsed_owner_keys} |
| Unresolved alias conflicts | ${verification.unresolved_alias_conflicts} |
| OWNER leaf matches | ${verification.owner_leaf_matches}/${verification.owner_leaf_total} |
| OWNER leaf trace rows (historical) | ${verification.owner_leaf_trace_rows} |
| Unique production leaf targets | ${verification.unique_production_leaf_targets} |
| Collapsed duplicate leaf trace rows | ${verification.collapsed_duplicate_leaf_trace_rows} |
| Changed production files | ${verification.changed_production_files} |
| Non-target card changes | ${verification.changed_non_target_cards} |
| DE changes | ${verification.de_changes} |
| data/www mirror mismatches | ${verification.data_www_mirror_mismatches} |

Live apply executed **once** on branch \`cursor/a1-lrb-001-103-production-copy-only-apply\`. PR not merged until OWNER reverification.
`;
  const summaryPath = path.join(APPLY_DIR, `${prefix}-APPLY-SUMMARY.md`);
  fs.writeFileSync(summaryPath, summary);

  return { verificationPath, resultPath, proofPath, manifestPath, summaryPath, manifest };
}

module.exports = {
  AUTHORIZED_APPLY_BASE_HEAD,
  AUTHORIZED_ATOMIC_MAPPING_SHA256,
  AUTHORIZED_PRODUCTION_BEFORE_FILE_SET_SHA256,
  APPLY_DIR,
  runPostApplyVerification,
  writePostApplyArtifacts,
};
