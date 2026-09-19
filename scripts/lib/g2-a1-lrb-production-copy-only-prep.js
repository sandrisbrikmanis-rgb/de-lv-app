#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");
const {
  sha256,
  cardKey,
  loadProductionA1Words,
  deepEqual,
} = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const {
  flattenCardToLeaves,
  getByPath,
  stableLeafValue,
  leafValueSha,
  setByPath,
} = require("./g2-a1-lrb-leaf-reconstruction");
const {
  mechanicalNormalizeTargetLanguageCard,
  extractTargetLanguageCard,
  normalizePostOwnerCard,
  deepCloneJson,
  isCanonicalLeafFieldPath,
} = require("./g2-a1-lrb-consolidation-normalize");
const {
  classifyCardAtomic,
  leafTraceClassification,
  applyAtomicOwnerApprovedCard,
  resolveProductionTargetStrict,
  writeJsonMaybeMultipart,
  A1_STUDY_ID_ONLY_CARD_KEYS,
  productionFileRel,
  productionMirrorRel,
} = require("./g2-a1-lrb-production-atomic-card");

const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const PREP_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/production-apply-prep");
const PREFIX = "A1-LRB-001-103";
const EXPECTED_MAIN_SHA = "639440d63654bf0f10d7677fd74ce595eb9396cf";
const EXPECTED_MANIFEST_SHA = "340c0a992fe135bed0981f301d1cdbc0088204ae63cd11dc3cf684edf8a1972c";
const EXPECTED_PROOF_SHA = "fd144470e2a8c594c9abaae64f208dcba59a983c6b9a4c19a56b6ce56d894ad2";
const LEAF_COUNT = 4787;
const CARD_COUNT = 234;

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
}

function fileSha256(relPath) {
  const abs = path.join(ROOT, relPath);
  return sha256(fs.readFileSync(abs));
}

function loadDecisionsFromManifest(manifest) {
  const parts = manifest.consolidated_decisions.parts || [];
  const all = [];
  for (const part of parts) {
    const abs = path.join(ROOT, part.path);
    const raw = fs.readFileSync(abs);
    if (sha256(raw) !== part.sha256) {
      throw new Error(`multipart_sha_mismatch:${part.path}`);
    }
    const doc = JSON.parse(raw.toString("utf8"));
    all.push(...(doc.leaf_decisions || []));
  }
  return all;
}

function assertSourceIdentityGates() {
  const originMain = git("git rev-parse origin/main");
  if (originMain !== EXPECTED_MAIN_SHA) {
    throw new Error(`A1_LRB_001_103_PRODUCTION_APPLY_PREP_BASE_MISMATCH:${originMain}`);
  }
  const manifestPath = path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`);
  const proofPath = path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-PROOF.json`);
  const manifestSha = sha256(fs.readFileSync(manifestPath));
  const proofSha = sha256(fs.readFileSync(proofPath));
  if (manifestSha !== EXPECTED_MANIFEST_SHA) {
    throw new Error(`manifest_sha_mismatch:${manifestSha}`);
  }
  if (proofSha !== EXPECTED_PROOF_SHA) {
    throw new Error(`proof_sha_mismatch:${proofSha}`);
  }
  const verificationProof = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-VERIFICATION-PROOF.json`), "utf8")
  );
  if (!verificationProof.pass) {
    throw new Error("consolidated_verifier_pass_false");
  }
  const consolidationProof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
  const gates = consolidationProof.gates || {};
  const required = {
    lrb_coverage: "103/103",
    gala_approved_cards_applied: "234/234",
    pending: 0,
    unresolved_owner_conflicts: 0,
    duplicate_final_keys: 0,
    unauthorized_empty_values: 0,
    owner_values_modified_during_rebuild: 0,
    apply_eligible_leaf_decisions: LEAF_COUNT,
  };
  for (const [k, v] of Object.entries(required)) {
    if (gates[k] !== v) {
      throw new Error(`gate_mismatch:${k}:${gates[k]}`);
    }
  }
  const ownerReview = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-OWNER-REVIEW-REQUIRED.json`), "utf8")
  );
  if ((ownerReview.owner_review_required_count || 0) !== 0) {
    throw new Error("owner_review_required_nonzero");
  }
  return { originMain, manifestSha, proofSha, gates, consolidationProof };
}

function applyPostOwnerCardToProductionEntry(prodEntry, postOwnerCard) {
  return applyAtomicOwnerApprovedCard(prodEntry, postOwnerCard);
}

function stripAtomicForPublish(cardAtomic) {
  const { current_entry_snapshot, owner_new_card, planned_entry_preview, ...rest } = cardAtomic;
  return rest;
}

function hashProductionFileSet(langs) {
  const files = [];
  for (const lang of [...langs].sort()) {
    for (const rel of [productionFileRel(lang), productionMirrorRel(lang)]) {
      const abs = path.join(ROOT, rel);
      if (fs.existsSync(abs)) {
        files.push({ path: rel, sha256: sha256(fs.readFileSync(abs)) });
      }
    }
  }
  const composite = sha256(JSON.stringify(files));
  return { files, composite_sha256: composite };
}

function buildPrepPackage() {
  const generatedAt = new Date().toISOString();
  const identity = assertSourceIdentityGates();
  const headSha = git("git rev-parse HEAD");

  const manifest = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`), "utf8")
  );
  const applyPlan = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-PRODUCTION-APPLY-PLAN.json`), "utf8")
  );
  const leafDecisions = loadDecisionsFromManifest(manifest);
  if (leafDecisions.length !== LEAF_COUNT) {
    throw new Error(`leaf_count_mismatch:${leafDecisions.length}`);
  }

  fs.mkdirSync(PREP_DIR, { recursive: true });
  const prepOutRel = "reports/g2-a1-owner/consolidation/production-apply-prep";

  const atomicCardsRaw = (applyPlan.full_cards || []).map((fc) => classifyCardAtomic(fc));
  const atomicByKey = new Map(atomicCardsRaw.map((c) => [c.card_key, c]));

  const leafRows = [];
  const targetKeyCounts = new Map();
  for (const d of leafDecisions) {
    targetKeyCounts.set(d.leaf_target_key, (targetKeyCounts.get(d.leaf_target_key) || 0) + 1);
  }
  for (const d of leafDecisions) {
    const ck = cardKey(d.target_language, d.canonical_card_object_id);
    const cardAtomic = atomicByKey.get(ck);
    const trace = leafTraceClassification(cardAtomic, d);
    const row = {
      leaf_target_key: d.leaf_target_key,
      target_language: d.target_language,
      canonical_card_object_id: d.canonical_card_object_id,
      exact_leaf_field_path: d.exact_leaf_field_path,
      owner_new_value: d.owner_final_value,
      owner_new_sha256: leafValueSha(d.owner_final_value),
      apply_eligible: d.apply_eligible,
      card_key: ck,
      card_atomic_status: cardAtomic?.atomic_status || "BLOCKED",
      ...trace,
    };
    if ((targetKeyCounts.get(d.leaf_target_key) || 0) > 1) {
      row.prep_classification = "BLOCKED_TARGET_AMBIGUOUS";
      row.action_type = "BLOCKED";
      row.block_reason = "duplicate_leaf_target_key";
    }
    leafRows.push(row);
  }

  const classificationCounts = {};
  for (const r of leafRows) {
    classificationCounts[r.prep_classification] = (classificationCounts[r.prep_classification] || 0) + 1;
  }

  const cardApplyModeCounts = {};
  for (const c of atomicCardsRaw) {
    if (c.apply_mode) cardApplyModeCounts[c.apply_mode] = (cardApplyModeCounts[c.apply_mode] || 0) + 1;
  }

  const blockedCards = atomicCardsRaw.filter((c) => c.atomic_status === "BLOCKED");
  const atomicReadyCards = atomicCardsRaw.filter((c) => c.atomic_status !== "BLOCKED");
  const atomicApplyCards = atomicCardsRaw.filter((c) => c.atomic_status === "ATOMIC_READY_APPLY");
  const atomicNoopCards = atomicCardsRaw.filter((c) => c.atomic_status === "ATOMIC_READY_NOOP");

  const langs = new Set(atomicCardsRaw.map((c) => c.target_language));
  const productionFiles = new Set();
  for (const lang of langs) {
    productionFiles.add(productionFileRel(lang));
    productionFiles.add(productionMirrorRel(lang));
  }

  const snapshotsPayload = {
    schema_version: 1,
    generated_at: generatedAt,
    origin_main_sha: identity.originMain,
    cards: atomicCardsRaw.map((c) => ({
      card_key: c.card_key,
      target_language: c.target_language,
      canonical_card_object_id: c.canonical_card_object_id,
      production_current_entry_sha256: c.production_current_entry_sha256,
      production_current_target_lang_sha256: c.production_current_target_lang_sha256,
      owner_new_target_lang_sha256: c.owner_new_target_lang_sha256,
      current_entry_snapshot: c.current_entry_snapshot,
    })),
  };
  const snapshotsWrite = writeJsonMaybeMultipart(
    `${PREFIX}-PRODUCTION-CURRENT-CARD-SNAPSHOTS`,
    snapshotsPayload,
    "cards",
    prepOutRel
  );

  const atomicMappingPayload = {
    schema_version: 2,
    generated_at: generatedAt,
    mode: "ATOMIC_CARD_COPY_ONLY",
    origin_main_sha: identity.originMain,
    total_owner_cards: CARD_COUNT,
    atomic_ready_cards: atomicReadyCards.length,
    blocked_cards: blockedCards.length,
    cards: atomicCardsRaw.map(stripAtomicForPublish),
  };
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`),
    JSON.stringify(atomicMappingPayload, null, 2) + "\n"
  );

  const studyIdResolution = [...A1_STUDY_ID_ONLY_CARD_KEYS].map((ck) => {
    const c = atomicByKey.get(ck);
    return {
      card_key: ck,
      atomic_status: c?.atomic_status,
      apply_mode: c?.apply_mode,
      production_match_kind: c?.production_match_kind,
      production_current_entry_sha256: c?.production_current_entry_sha256,
      owner_new_target_lang_sha256: c?.owner_new_target_lang_sha256,
      owner_full_card_fallback_not_used_as_current_proof: true,
    };
  });

  const resolutionDoc = {
    schema_version: 1,
    generated_at: generatedAt,
    correction: "TECHNICAL_BLOCKER_RESOLUTION_1",
    prior_blocked_leaf_count: 409,
    prior_blocked_by: {
      BLOCKED_CURRENT_DRIFT: 292,
      BLOCKED_SCHEMA_MISMATCH: 117,
    },
    a1_study_id_only_cards: studyIdResolution,
    card_apply_mode_counts: cardApplyModeCounts,
    resolved_blocked_cards: blockedCards.length === 0,
    blocked_cards_remaining: blockedCards.map((c) => ({
      card_key: c.card_key,
      block_reason: c.block_reason,
      block_detail: c.block_detail,
    })),
  };
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1.json`),
    JSON.stringify(resolutionDoc, null, 2) + "\n"
  );

  const packagePass = blockedCards.length === 0 && atomicReadyCards.length === CARD_COUNT;
  const resolutionProof = {
    schema_version: 1,
    generated_at: generatedAt,
    origin_main_sha: identity.originMain,
    prep_branch_head_sha: headSha,
    total_owner_cards: CARD_COUNT,
    atomic_ready_cards: atomicReadyCards.length,
    atomic_ready_apply_cards: atomicApplyCards.length,
    atomic_ready_noop_cards: atomicNoopCards.length,
    blocked_cards: blockedCards.length,
    leaf_trace_rows: LEAF_COUNT,
    duplicate_targets: [...targetKeyCounts.values()].filter((c) => c > 1).length,
    mirror_drift: blockedCards.filter((c) => c.block_reason === "BLOCKED_MIRROR_DRIFT").length,
    pass: packagePass,
    classification: packagePass
      ? "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_PACKAGE_CORRECTION_1_READY_AWAITING_OWNER_VERIFICATION"
      : "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_PACKAGE_CORRECTION_1_BLOCKED",
    next_action: packagePass
      ? "OWNER_VERIFY_PRODUCTION_COPY_ONLY_APPLY_PACKAGE"
      : "RESOLVE_REMAINING_EXACT_TECHNICAL_BLOCKERS",
  };
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1-PROOF.json`),
    JSON.stringify(resolutionProof, null, 2) + "\n"
  );

  const mapping = {
    schema_version: 2,
    generated_at: generatedAt,
    mode: "PRODUCTION_COPY_ONLY_PREP_ATOMIC",
    origin_main_sha: identity.originMain,
    prep_branch_head_sha: headSha,
    consolidation_manifest_sha256: identity.manifestSha,
    consolidation_proof_sha256: identity.proofSha,
    atomic_card_mapping: `${prepOutRel}/${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`,
    current_card_snapshots: snapshotsWrite.multipart
      ? snapshotsWrite.manifest_path
      : snapshotsWrite.path,
    leaf_decisions_count: leafRows.length,
    full_cards_count: atomicCardsRaw.length,
    classification_counts: classificationCounts,
    card_apply_mode_counts: cardApplyModeCounts,
    production_language_count: langs.size,
    production_file_count: productionFiles.size,
    duplicate_target_keys: [...targetKeyCounts.values()].filter((c) => c > 1).length,
    leaf_trace_rows: leafRows,
    atomic_cards_summary: atomicCardsRaw.map(stripAtomicForPublish),
  };

  const mappingPath = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`);
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2) + "\n");

  const blockersDoc = {
    schema_version: 2,
    generated_at: generatedAt,
    blocked_leaf_trace_rows: leafRows.filter((r) => r.action_type === "BLOCKED").length,
    blocked_cards: blockedCards.length,
    blocked_cards_detail: blockedCards.map((c) => ({
      card_key: c.card_key,
      block_reason: c.block_reason,
      block_detail: c.block_detail,
    })),
    rows: [],
  };
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-BLOCKERS.json`),
    JSON.stringify(blockersDoc, null, 2) + "\n"
  );

  const prepProof = {
    schema_version: 2,
    generated_at: generatedAt,
    origin_main_sha: identity.originMain,
    prep_branch_head_sha: headSha,
    consolidation_manifest_sha256: identity.manifestSha,
    consolidation_proof_sha256: identity.proofSha,
    gates: identity.gates,
    leaf_decisions_count: LEAF_COUNT,
    leaf_trace_rows: LEAF_COUNT,
    total_owner_cards: CARD_COUNT,
    atomic_ready_cards: atomicReadyCards.length,
    blocked_cards: blockedCards.length,
    classification_counts: classificationCounts,
    card_apply_mode_counts: cardApplyModeCounts,
    production_language_count: langs.size,
    production_file_count: productionFiles.size,
    already_equals_count: classificationCounts.ALREADY_EQUALS_OWNER_NEW || 0,
    production_apply_not_executed: true,
    pass: packagePass,
    classification: resolutionProof.classification,
    next_action: resolutionProof.next_action,
    technical_blocker_resolution_1: resolutionProof.classification,
  };
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`),
    JSON.stringify(prepProof, null, 2) + "\n"
  );

  const resolutionSummaryMd = `# A1 LRB 001–103 — technical blocker resolution #1

Generated: ${generatedAt}

## Outcome

\`${resolutionProof.classification}\`

**NEXT_ACTION:** \`${resolutionProof.next_action}\`

| Metric | Value |
|--------|------:|
| Total OWNER cards | ${CARD_COUNT} |
| Atomic ready cards | ${atomicReadyCards.length} |
| Blocked cards | ${blockedCards.length} |
| Leaf trace rows | ${LEAF_COUNT} |

## a1-* study.id cards (13)

${studyIdResolution.map((r) => `- \`${r.card_key}\` → ${r.apply_mode || r.atomic_status}`).join("\n")}

Production apply **not executed**.
`;
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1-SUMMARY.md`),
    resolutionSummaryMd
  );

  const artifactPaths = [
    `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`,
    `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`,
    `${PREFIX}-PRODUCTION-CURRENT-CARD-SNAPSHOTS.json`,
    `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1.json`,
    `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1-PROOF.json`,
    `${PREFIX}-PRODUCTION-TECHNICAL-BLOCKER-RESOLUTION-1-SUMMARY.md`,
    `${PREFIX}-PRODUCTION-COPY-ONLY-BLOCKERS.json`,
    `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`,
    `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`,
    `${PREFIX}-PRODUCTION-COPY-ONLY-MANIFEST.json`,
    `${PREFIX}-PRODUCTION-COPY-ONLY-SUMMARY.md`,
  ];

  return {
    mapping,
    mappingPath,
    prepProof,
    blockers: blockedCards,
    atomicCardsRaw,
    langs,
    artifactPaths,
    generatedAt,
    headSha,
    identity,
    resolutionProof,
  };
}

function writePrepManifest(artifactPaths, generatedAt) {
  const entries = [];
  const manifestName = `${PREFIX}-PRODUCTION-COPY-ONLY-MANIFEST.json`;
  for (const name of artifactPaths) {
    if (name === manifestName) continue;
    const rel = `reports/g2-a1-owner/consolidation/production-apply-prep/${name}`;
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue;
    const raw = fs.readFileSync(abs);
    entries.push({
      path: rel,
      sha256: sha256(raw),
      byte_length: Buffer.byteLength(raw),
    });
  }
  const manifest = {
    schema_version: 1,
    generated_at: generatedAt,
    artifacts: entries,
    mapping_sha256: entries.find((e) => e.path.includes("APPLY-MAPPING"))?.sha256 || null,
    prep_proof_sha256: entries.find((e) => e.path.includes("PREP-PROOF"))?.sha256 || null,
    dry_run_sha256: entries.find((e) => e.path.includes("DRY-RUN"))?.sha256 || null,
  };
  const rel = `reports/g2-a1-owner/consolidation/production-apply-prep/${manifestName}`;
  fs.writeFileSync(path.join(ROOT, rel), JSON.stringify(manifest, null, 2) + "\n");
  return manifest;
}

function writeSummary(prepProof, dryRun, gitDiffFiles) {
  const lines = [
    `# A1 LRB 001–103 — production COPY-ONLY apply prep`,
    "",
    `Generated: ${prepProof.generated_at || new Date().toISOString()}`,
    "",
    "## Classification",
    "",
    `\`${prepProof.classification}\``,
    "",
    `**NEXT_ACTION:** \`${prepProof.next_action}\``,
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| origin/main SHA | \`${prepProof.origin_main_sha}\` |`,
    `| prep branch HEAD | \`${prepProof.prep_branch_head_sha}\` |`,
    `| leaf decisions | ${prepProof.leaf_decisions_count} |`,
    `| READY | ${prepProof.classification_counts?.READY_EXACT_CURRENT_MATCH ?? prepProof.ready_count ?? 0} |`,
    `| ALREADY_EQUALS_OWNER_NEW | ${prepProof.classification_counts?.ALREADY_EQUALS_OWNER_NEW ?? prepProof.already_equals_count ?? 0} |`,
    `| BLOCKED | ${prepProof.blocked_count} |`,
    `| atomic ready cards | ${prepProof.atomic_ready_cards ?? prepProof.full_cards_atomic_ready ?? "—"} |`,
    `| blocked cards | ${prepProof.blocked_cards ?? "—"} |`,
    "",
    "## Dry-run",
    "",
    `- production_files_changed (disk): ${dryRun?.production_files_changed ?? "—"}`,
    `- simulated_leaf_writes: ${dryRun?.simulated_leaf_writes ?? "—"}`,
    "",
    "Production apply **not executed** on disk.",
    "",
  ];
  if (gitDiffFiles?.length) {
    lines.push("## Git diff (prep branch)", "", "```", ...gitDiffFiles.slice(0, 40), "```", "");
  }
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-SUMMARY.md`),
    lines.join("\n")
  );
}

module.exports = {
  PREFIX,
  PREP_DIR,
  EXPECTED_MAIN_SHA,
  EXPECTED_PRODUCTION_FILE_SET_SHA: "ccd237adb9e2b9812901589c328d7ddd0225aca81fe1b986d13d9f2e4c510c56",
  buildPrepPackage,
  writePrepManifest,
  writeSummary,
  hashProductionFileSet,
  applyPostOwnerCardToProductionEntry,
  resolveProductionTargetStrict,
  loadDecisionsFromManifest,
  assertSourceIdentityGates,
  applyAtomicOwnerApprovedCard,
};
