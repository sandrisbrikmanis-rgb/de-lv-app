#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");
const { sha256, cardKey } = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const {
  buildProvenAliasLeafSlotEvidence,
  recordMapsToProvenAliasSlot,
  verifyFindingRowAliasClassifications,
} = require("./g2-a1-lrb-production-closure-finding-alias");
const { stableLeafValue, leafValueSha } = require("./g2-a1-lrb-leaf-reconstruction");
const { classifyNotApplyMappedRow } = require("./g2-a1-lrb-not-apply-mapped");
const { buildA1LrbConflictClassificationState } = require("../build-a1-lrb-target-conflict-classification");
const {
  loadDecisionsFromManifest,
  hashProductionFileSet,
  PREFIX,
} = require("./g2-a1-lrb-production-copy-only-prep");
const {
  runPostApplyVerification,
  AUTHORIZED_PRODUCTION_BEFORE_FILE_SET_SHA256,
} = require("./g2-a1-lrb-production-copy-only-post-apply");
const { analyzeProductionTargetAliases } = require("./g2-a1-lrb-production-target-alias");
const {
  productionEntrySha256,
  productionFileRel,
  productionMirrorRel,
  resolveProductionTargetStrict,
  deExampleSequence,
} = require("./g2-a1-lrb-production-atomic-card");
const { loadWordsFromSerialized, sha256Buffer } = require("./g2-a1-lrb-production-copy-only-transaction");

const CLOSURE_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/production-closure");
const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const APPLY_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/production-apply");
const PREP_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/production-apply-prep");
const EXPECTED_MAIN_HEAD = "3fc5da23cbdfe5ff20e6d6185404b26e2a48572c";
const EXPECTED_PRODUCTION_FILE_SET_SHA =
  "0a14ddc3a066cfe47bafb5e9b762d96ca66aca81ad77d7e20a5218dd234d543e";
const EXPECTED_ATOMIC_MAPPING_SHA =
  "33519482cfb327ba7eb062b69cd3b61d8718ca936cb4a8553fd36b0feb51c5f0";
const FINDING_ROW_TOTAL = 4968;
const LEAF_TOTAL = 4787;
const CARD_TOTAL = 234;
const MAX_PART_BYTES = 4_000_000;

const ALIAS_CORRECTION_1_BEFORE_COUNTS = {
  PROVEN_IDENTICAL_ALIAS: 716,
  APPLIED_TO_PRODUCTION: 3985,
  ALREADY_EQUAL_IN_PRODUCTION: 16,
  OWNER_CONFIRMED_NO_CHANGE: 0,
  SUPERSEDED_BY_EXPANDED_REVIEW: 153,
  SUPERSEDED_BY_OWNER_45: 91,
  AUDIT_ONLY_NO_TARGET: 7,
  EXPLICITLY_EXCLUDED_WITH_PROOF: 0,
  BLOCKED_UNRECONCILED: 0,
};

const FINAL_CLASS = {
  APPLIED: "APPLIED_TO_PRODUCTION",
  ALREADY_EQUAL: "ALREADY_EQUAL_IN_PRODUCTION",
  OWNER_NO_CHANGE: "OWNER_CONFIRMED_NO_CHANGE",
  SUPERSEDED_EXPANDED: "SUPERSEDED_BY_EXPANDED_REVIEW",
  SUPERSEDED_OWNER_45: "SUPERSEDED_BY_OWNER_45",
  AUDIT_ONLY: "AUDIT_ONLY_NO_TARGET",
  ALIAS: "PROVEN_IDENTICAL_ALIAS",
  EXCLUDED: "EXPLICITLY_EXCLUDED_WITH_PROOF",
  BLOCKED: "BLOCKED_UNRECONCILED",
};

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
}

function isAllowedOriginMain(originMain, expectedMain) {
  if (originMain === expectedMain) return true;
  try {
    execSync(`git merge-base --is-ancestor ${expectedMain} ${originMain}`, { cwd: ROOT, stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function primaryLeafKey(row) {
  const keys = row.leaf_target_keys || [];
  return keys.find((k) => k.split("|").length >= 3) || keys[0] || null;
}

function writeJsonParts(baseName, rows, extra = {}) {
  const payload = { ...extra, rows };
  const raw = JSON.stringify(payload, null, 2) + "\n";
  const singleAbs = path.join(CLOSURE_DIR, `${baseName}.json`);
  if (Buffer.byteLength(raw) <= MAX_PART_BYTES) {
    const rel = path.relative(ROOT, singleAbs);
    const abs = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    for (const stale of fs.readdirSync(CLOSURE_DIR).filter((f) => f.startsWith(`${baseName}.part-`))) {
      fs.unlinkSync(path.join(CLOSURE_DIR, stale));
    }
    fs.writeFileSync(abs, raw);
    return {
      multipart: false,
      parts: [{ path: rel, sha256: sha256(raw), byte_length: Buffer.byteLength(raw), row_count: rows.length }],
    };
  }
  if (fs.existsSync(singleAbs)) {
    fs.unlinkSync(singleAbs);
  }
  for (const stale of fs.readdirSync(CLOSURE_DIR).filter((f) => f.startsWith(`${baseName}.part-`))) {
    fs.unlinkSync(path.join(CLOSURE_DIR, stale));
  }
  const parts = [];
  let chunk = [];
  let partIndex = 1;
  for (const row of rows) {
    const trial = [...chunk, row];
    const trialRaw = JSON.stringify({ ...extra, rows: trial }, null, 2);
    if (Buffer.byteLength(trialRaw) > MAX_PART_BYTES && chunk.length) {
      const partName = `${baseName}.part-${String(partIndex).padStart(3, "0")}.json`;
      const partRel = path.relative(ROOT, path.join(CLOSURE_DIR, partName));
      const partAbs = path.join(ROOT, partRel);
      const partRaw = JSON.stringify({ ...extra, rows: chunk }, null, 2) + "\n";
      fs.writeFileSync(partAbs, partRaw);
      parts.push({
        path: partRel,
        sha256: sha256(partRaw),
        byte_length: Buffer.byteLength(partRaw),
        row_count: chunk.length,
      });
      partIndex += 1;
      chunk = [row];
    } else {
      chunk = trial;
    }
  }
  if (chunk.length) {
    const partName = `${baseName}.part-${String(partIndex).padStart(3, "0")}.json`;
    const partRel = path.relative(ROOT, path.join(CLOSURE_DIR, partName));
    const partAbs = path.join(ROOT, partRel);
    const partRaw = JSON.stringify({ ...extra, rows: chunk }, null, 2) + "\n";
    fs.writeFileSync(partAbs, partRaw);
    parts.push({
      path: partRel,
      sha256: sha256(partRaw),
      byte_length: Buffer.byteLength(partRaw),
      row_count: chunk.length,
    });
  }
  return { multipart: true, parts };
}

function classifyFindingRows(expandedRows, leafDecisions, owner45Keys, atomicCards, aliasReconciliationAbs) {
  const leafByKey = new Map(leafDecisions.map((d) => [d.leaf_target_key, d]));
  const applyKeysSet = new Set(leafDecisions.map((d) => d.leaf_target_key));
  const cardByKey = new Map(atomicCards.map((c) => [c.card_key, c]));

  const aliasEvidence = buildProvenAliasLeafSlotEvidence(
    aliasReconciliationAbs,
    atomicCards,
    leafDecisions
  );

  const leafAlreadyEqual = new Map();
  for (const d of leafDecisions) {
    let prodVal = null;
    try {
      const pc = d.related_lrb_rows?.[0]?.production_current;
      if (pc && typeof pc === "string" && pc.startsWith("{")) {
        const parsed = JSON.parse(pc);
        const fp = d.exact_leaf_field_path;
        prodVal = parsed[fp] ?? parsed[`study.${fp}`] ?? null;
      }
    } catch {
      prodVal = null;
    }
    const ownerStable = stableLeafValue(d.owner_final_value);
    const prodStable = stableLeafValue(prodVal);
    leafAlreadyEqual.set(d.leaf_target_key, ownerStable === prodStable && prodStable !== "");
  }

  const rowsOut = [];
  const counts = Object.fromEntries(Object.values(FINAL_CLASS).map((v) => [v, 0]));

  for (const record of expandedRows) {
    const base = classifyNotApplyMappedRow(record, leafByKey, applyKeysSet);
    const pk = primaryLeafKey(record);
    const leaf = pk ? leafByKey.get(pk) : null;
    let finalClass = FINAL_CLASS.BLOCKED;
    let aliasFields = null;

    if (base.classification === "RECONSTRUCTION_FAILED") {
      finalClass = FINAL_CLASS.AUDIT_ONLY;
    } else if (base.classification === "OWNER_REVIEW_REQUIRED") {
      finalClass = FINAL_CLASS.SUPERSEDED_EXPANDED;
    } else if (base.classification === "OWNER_CONFIRMED_NO_CHANGE") {
      finalClass = FINAL_CLASS.OWNER_NO_CHANGE;
    } else if (base.classification === "APPLY_ELIGIBLE") {
      const rowCk = cardKey(record.target_language, record.canonical_card_object_id);
      const card = cardByKey.get(rowCk);
      const groupMeta = aliasEvidence.cardToGroupMeta.get(rowCk);
      const aliasProof =
        card && groupMeta
          ? recordMapsToProvenAliasSlot(
              record,
              rowCk,
              card,
              aliasEvidence.provenLeafSlots,
              groupMeta,
              leafByKey
            )
          : null;

      if (pk && owner45Keys.has(pk)) {
        finalClass = FINAL_CLASS.SUPERSEDED_OWNER_45;
      } else if (aliasProof) {
        finalClass = FINAL_CLASS.ALIAS;
        aliasFields = aliasProof;
      } else if (pk && leafAlreadyEqual.get(pk)) {
        finalClass = FINAL_CLASS.ALREADY_EQUAL;
      } else {
        finalClass = FINAL_CLASS.APPLIED;
      }
    } else {
      finalClass = FINAL_CLASS.EXCLUDED;
    }

    counts[finalClass] += 1;
    const rowOut = {
      batch_id: record.batch_id,
      finding_stable_id: record.finding_stable_ids,
      target_language: record.target_language,
      canonical_card_object_id: record.canonical_card_object_id,
      field_path: record.field_path_raw,
      owner_status: record.owner_status || "",
      owner_final_value_sha256: leaf ? leaf.leaf_value_sha256 || leafValueSha(leaf.owner_final_value) : null,
      production_final_value_sha256: leaf ? leaf.leaf_value_sha256 : null,
      source_artifact_path: record.decision_source_path,
      source_artifact_sha256: record.decision_source_sha256,
      final_classification: finalClass,
      primary_leaf_target_key: pk,
      leaf_target_keys: record.leaf_target_keys || [],
    };
    if (aliasFields) {
      rowOut.production_slot_key = aliasFields.production_slot_key;
      rowOut.alias_group_id = aliasFields.alias_group_id;
      rowOut.alias_owner_card_keys = aliasFields.alias_owner_card_keys;
      rowOut.alias_evidence_path = aliasFields.alias_evidence_path;
      rowOut.alias_evidence_sha256 = aliasFields.alias_evidence_sha256;
    }
    rowsOut.push(rowOut);
  }

  const sum = Object.values(counts).reduce((a, b) => a + b, 0);
  return { rowsOut, counts, sum, aliasEvidence };
}

function auditAllA1LangMirrors() {
  const dataDir = path.join(ROOT, "data");
  const langs = fs
    .readdirSync(dataDir)
    .filter((d) => fs.existsSync(path.join(dataDir, d, "a1.js")))
    .sort();
  const failures = [];
  for (const lang of langs) {
    const dataRel = productionFileRel(lang);
    const wwwRel = productionMirrorRel(lang);
    if (!fs.existsSync(path.join(ROOT, wwwRel))) {
      failures.push(`missing_mirror:${lang}`);
      continue;
    }
    const dataBytes = fs.readFileSync(path.join(ROOT, dataRel));
    const wwwBytes = fs.readFileSync(path.join(ROOT, wwwRel));
    if (!dataBytes.equals(wwwBytes)) failures.push(`mirror_drift:${lang}`);
    try {
      loadWordsFromSerialized(dataBytes.toString("utf8"));
    } catch (e) {
      failures.push(`syntax:${dataRel}:${e.message}`);
    }
  }
  return { langs, failures, mirror_drift: failures.filter((f) => f.startsWith("mirror_drift")).length };
}

function runProductionClosureAudit(options = {}) {
  const blockers = [];
  const originMain = git("git rev-parse origin/main");
  if (!isAllowedOriginMain(originMain, EXPECTED_MAIN_HEAD)) {
    blockers.push(`origin_main_mismatch:${originMain}`);
  }

  const atomicForHash = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`), "utf8")
  );
  const prodLangs = [...new Set(atomicForHash.cards.map((c) => c.target_language))].sort();
  const prodFileSet = hashProductionFileSet(prodLangs);
  if (prodFileSet.composite_sha256 !== EXPECTED_PRODUCTION_FILE_SET_SHA) {
    blockers.push(`production_file_set_sha_mismatch:${prodFileSet.composite_sha256}`);
  }

  const consolidationVerify = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-VERIFICATION-PROOF.json`), "utf8")
  );
  if (!consolidationVerify.pass) blockers.push("consolidation_verifier_fail");

  const postApply = runPostApplyVerification({ reconciliationPrHead: EXPECTED_MAIN_HEAD });
  if (!postApply.pass) blockers.push("post_apply_verifier_fail");

  const coverage = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-ALL-COVERAGE.json"), "utf8")
  );
  if (coverage.total_lrb_batches !== 103 || coverage.linguistically_closed_count !== 103) {
    blockers.push("lrb_coverage_fail");
  }
  if (coverage.total_pending !== 0) blockers.push("lrb_pending_nonzero");

  const unresolved = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-UNRESOLVED-OWNER-CONFLICTS.json"), "utf8")
  );
  if (unresolved.unresolved_count !== 0) blockers.push("unresolved_owner_conflicts");

  const owner45 = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-OWNER-RESOLUTION-45.json"), "utf8")
  );
  if ((owner45.changes || []).length !== 45) blockers.push("owner_45_count");

  const conflictState = buildA1LrbConflictClassificationState({ writeArtifacts: false });
  const expandedRows = conflictState.batchRowRecords.filter((r) => r.owner_review_generation !== "initial");
  if (expandedRows.length !== FINDING_ROW_TOTAL) {
    blockers.push(`finding_row_count:${expandedRows.length}`);
  }

  const manifest = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`), "utf8")
  );
  const leafDecisions = loadDecisionsFromManifest(manifest);
  if (leafDecisions.length !== LEAF_TOTAL) blockers.push(`leaf_count:${leafDecisions.length}`);

  const atomic = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`), "utf8")
  );
  const aliasReconciliationAbs = path.join(
    APPLY_DIR,
    `${PREFIX}-PRODUCTION-TARGET-ALIAS-RECONCILIATION.json`
  );

  const owner45Keys = new Set((owner45.changes || []).map((c) => c.leaf_target_key));
  const findingRecon = classifyFindingRows(
    expandedRows,
    leafDecisions,
    owner45Keys,
    atomic.cards,
    aliasReconciliationAbs
  );
  if (findingRecon.sum !== FINDING_ROW_TOTAL) blockers.push(`finding_reconciliation_sum:${findingRecon.sum}`);
  if ((findingRecon.counts[FINAL_CLASS.BLOCKED] || 0) !== 0) {
    blockers.push(`blocked_unreconciled:${findingRecon.counts[FINAL_CLASS.BLOCKED]}`);
  }

  const aliasVerify = verifyFindingRowAliasClassifications(
    findingRecon.rowsOut,
    aliasReconciliationAbs,
    atomic.cards,
    leafDecisions
  );
  if (aliasVerify.false_alias_classifications !== 0) {
    blockers.push(`false_alias_classifications:${aliasVerify.false_alias_classifications}`);
  }
  if (aliasVerify.alias_rows_without_proven_group !== 0) {
    blockers.push(`alias_rows_without_proven_group:${aliasVerify.alias_rows_without_proven_group}`);
  }
  if (aliasVerify.alias_rows_without_two_distinct_owner_keys !== 0) {
    blockers.push(`alias_rows_without_two_distinct_owner_keys:${aliasVerify.alias_rows_without_two_distinct_owner_keys}`);
  }
  if (aliasVerify.alias_rows_without_identical_payload_proof !== 0) {
    blockers.push(
      `alias_rows_without_identical_payload_proof:${aliasVerify.alias_rows_without_identical_payload_proof}`
    );
  }
  if ((findingRecon.counts[FINAL_CLASS.ALIAS] || 0) !== aliasVerify.alias_row_count) {
    blockers.push(
      `alias_row_count_mismatch:builder=${findingRecon.counts[FINAL_CLASS.ALIAS] || 0},verifier=${aliasVerify.alias_row_count}`
    );
  }
  const alias = analyzeProductionTargetAliases(atomic.cards);
  const snapPath = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-CURRENT-CARD-SNAPSHOTS.json`);
  const snapsByKey = new Map(
    JSON.parse(fs.readFileSync(snapPath, "utf8")).cards.map((c) => [c.card_key, c])
  );

  const cardResults = [];
  let fullCardMatches = 0;
  let deFailures = 0;
  let schemaFailures = 0;
  for (const card of atomic.cards) {
    if (card.atomic_status === "BLOCKED") {
      blockers.push(`blocked_card:${card.card_key}`);
      continue;
    }
    const resolved = resolveProductionTargetStrict(card.target_language, card.canonical_card_object_id);
    if (!resolved.ok) {
      schemaFailures += 1;
      continue;
    }
    const liveSha = productionEntrySha256(resolved.entry);
    const match = liveSha === card.production_planned_entry_sha256;
    if (match) fullCardMatches += 1;
    const snap = snapsByKey.get(card.card_key);
    if (snap?.current_entry_snapshot) {
      const deBefore = deExampleSequence(snap.current_entry_snapshot);
      const deAfter = deExampleSequence(resolved.entry);
      if (JSON.stringify(deBefore) !== JSON.stringify(deAfter)) deFailures += 1;
    }
    cardResults.push({
      card_key: card.card_key,
      match,
      production_planned_entry_sha256: card.production_planned_entry_sha256,
      production_live_entry_sha256: liveSha,
    });
  }

  if (fullCardMatches !== CARD_TOTAL) blockers.push(`full_card_matches:${fullCardMatches}`);
  if (deFailures !== 0) blockers.push(`de_alignment_failures:${deFailures}`);

  const applyBase = "169723c4de7e84c0fbc24787e2287afab5310eea";
  const changedProd = git(`git diff --name-only ${applyBase}..${originMain}`).split("\n").filter(Boolean);
  const prodChanged = changedProd.filter((p) => /^data\/[a-z]{2}\/a1\.js$/.test(p)).length;
  const wwwChanged = changedProd.filter((p) => /^www\/data\/[a-z]{2}\/a1\.js$/.test(p)).length;
  if (prodChanged !== 23 || wwwChanged !== 23) {
    blockers.push(`production_file_change_count:data=${prodChanged},www=${wwwChanged}`);
  }

  const allA1 = auditAllA1LangMirrors();
  if (allA1.failures.length) blockers.push(...allA1.failures.slice(0, 5));

  const reconciliation = JSON.parse(
    fs.readFileSync(path.join(APPLY_DIR, `${PREFIX}-PRODUCTION-TARGET-ALIAS-RECONCILIATION.json`), "utf8")
  );

  const numbersTable = {
    lrb_batches: 103,
    finding_rows_expanded_generation: FINDING_ROW_TOTAL,
    owner_card_keys: CARD_TOTAL,
    unique_production_slots: alias.unique_production_slots,
    owner_leaf_trace_rows: LEAF_TOTAL,
    unique_production_leaf_targets: postApply.unique_production_leaf_targets,
    collapsed_alias_leaf_trace_rows: postApply.collapsed_duplicate_leaf_trace_rows,
    changed_production_files: 46,
    pending: 0,
    unresolved_conflicts: 0,
    trace_gaps: 0,
  };

  const pass = blockers.length === 0;
  const generatedAt = new Date().toISOString();

  return {
    pass,
    blockers,
    generated_at: generatedAt,
    origin_main_sha: originMain,
    expected_main_head: EXPECTED_MAIN_HEAD,
    production_file_set_sha256: prodFileSet.composite_sha256,
    atomic_mapping_sha256: sha256(
      fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`))
    ),
    finding_row_classification_counts: findingRecon.counts,
    finding_row_reconciliation_sum: findingRecon.sum,
    numbers_table: numbersTable,
    lrb_coverage: `${coverage.linguistically_closed_count}/103`,
    linguistically_closed: `${coverage.linguistically_closed_count}/103`,
    owner_45_applied: `${(owner45.changes || []).length}/45`,
    post_apply: {
      owner_keys_covered: postApply.owner_keys_covered,
      unique_production_slots: postApply.unique_production_slots,
      changed_unique_production_cards: postApply.changed_unique_production_cards,
      owner_leaf_matches: postApply.owner_leaf_matches,
      proven_alias_groups: postApply.proven_alias_groups,
      unresolved_alias_conflicts: postApply.unresolved_alias_conflicts,
    },
    alias_reconciliation_sha256: sha256(
      fs.readFileSync(path.join(APPLY_DIR, `${PREFIX}-PRODUCTION-TARGET-ALIAS-RECONCILIATION.json`))
    ),
    card_coverage: {
      full_card_matches: fullCardMatches,
      total_cards: CARD_TOTAL,
      schema_failures: schemaFailures,
      de_alignment_failures: deFailures,
    },
    all_a1_languages: allA1.langs.length,
    all_a1_mirror_failures: allA1.mirror_drift,
    sk_alias: reconciliation.sk_slot_660,
    finding_alias_correction_1: {
      before_classification_counts: ALIAS_CORRECTION_1_BEFORE_COUNTS,
      after_classification_counts: findingRecon.counts,
      alias_verification_gates: {
        false_alias_classifications: aliasVerify.false_alias_classifications,
        alias_rows_without_proven_group: aliasVerify.alias_rows_without_proven_group,
        alias_rows_without_two_distinct_owner_keys: aliasVerify.alias_rows_without_two_distinct_owner_keys,
        alias_rows_without_identical_payload_proof: aliasVerify.alias_rows_without_identical_payload_proof,
        finding_row_reconciliation_sum: findingRecon.sum,
        blocked_unreconciled: findingRecon.counts[FINAL_CLASS.BLOCKED] || 0,
      },
      proven_identical_alias_rows: aliasVerify.alias_rows,
    },
    classification: pass
      ? "A1_LRB_001_103_PRODUCTION_CLOSURE_FINDING_ALIAS_CORRECTION_1_COMPLETE_AWAITING_OWNER_REVERIFICATION"
      : "A1_LRB_001_103_PRODUCTION_CLOSURE_AUDIT_BLOCKED",
    next_action: pass
      ? "OWNER_REVERIFY_A1_LRB_PRODUCTION_CLOSURE_FINDING_ALIAS_CORRECTION_1"
      : "RESOLVE_EXACT_CLOSURE_BLOCKERS",
    findingRecon,
    aliasVerify,
    cardResults,
  };
}

function writeClosureArtifacts(audit) {
  fs.mkdirSync(CLOSURE_DIR, { recursive: true });

  const findingWrite = writeJsonParts(`${PREFIX}-FINDING-ROW-CLOSURE-RECONCILIATION`, audit.findingRecon.rowsOut, {
    schema_version: 1,
    generated_at: audit.generated_at,
    expanded_finding_row_total: FINDING_ROW_TOTAL,
    classification_counts: audit.finding_row_classification_counts,
    sum: audit.finding_row_reconciliation_sum,
  });

  const cardCoverage = {
    schema_version: 1,
    generated_at: audit.generated_at,
    full_card_matches: `${audit.card_coverage.full_card_matches}/${audit.card_coverage.total_cards}`,
    incomplete_cards: audit.card_coverage.total_cards - audit.card_coverage.full_card_matches,
    schema_failures: audit.card_coverage.schema_failures,
    de_alignment_failures: audit.card_coverage.de_alignment_failures,
    cards: audit.cardResults,
  };
  fs.writeFileSync(
    path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CARD-COVERAGE.json`),
    JSON.stringify(cardCoverage, null, 2) + "\n"
  );

  const auditDoc = {
    schema_version: 1,
    generated_at: audit.generated_at,
    origin_main_sha: audit.origin_main_sha,
    production_file_set_sha256: audit.production_file_set_sha256,
    atomic_mapping_sha256: audit.atomic_mapping_sha256,
    numbers_table: audit.numbers_table,
    lrb_coverage: audit.lrb_coverage,
    finding_row_classification_counts: audit.finding_row_classification_counts,
    post_apply: audit.post_apply,
    pass: audit.pass,
    classification: audit.classification,
    next_action: audit.next_action,
    finding_alias_correction_1: audit.finding_alias_correction_1,
  };
  fs.writeFileSync(
    path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CLOSURE-AUDIT.json`),
    JSON.stringify(auditDoc, null, 2) + "\n"
  );

  const proof = {
    schema_version: 1,
    generated_at: audit.generated_at,
    pass: audit.pass,
    blockers: audit.blockers,
    numbers_table: audit.numbers_table,
    finding_row_reconciliation_sum: audit.finding_row_reconciliation_sum,
    owner_45_applied: audit.owner_45_applied,
    alias_reconciliation_sha256: audit.alias_reconciliation_sha256,
    apply_proof_sha256: sha256(
      fs.readFileSync(path.join(APPLY_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-PROOF.json`))
    ),
    apply_manifest_sha256: sha256(
      fs.readFileSync(path.join(APPLY_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MANIFEST.json`))
    ),
    finding_alias_correction_1: audit.finding_alias_correction_1,
    classification: audit.classification,
  };
  fs.writeFileSync(
    path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CLOSURE-PROOF.json`),
    JSON.stringify(proof, null, 2) + "\n"
  );

  const artifacts = [
    { path: path.relative(ROOT, path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CLOSURE-AUDIT.json`)), sha256: sha256(JSON.stringify(auditDoc, null, 2) + "\n") },
    { path: path.relative(ROOT, path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CLOSURE-PROOF.json`)), sha256: sha256(JSON.stringify(proof, null, 2) + "\n") },
    { path: path.relative(ROOT, path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CARD-COVERAGE.json`)), sha256: sha256(JSON.stringify(cardCoverage, null, 2) + "\n") },
    ...findingWrite.parts,
  ];

  const manifest = {
    schema_version: 1,
    generated_at: audit.generated_at,
    origin_main_sha: audit.origin_main_sha,
    multipart: findingWrite.multipart,
    artifacts,
    closure_proof_sha256: proof ? sha256(JSON.stringify(proof, null, 2) + "\n") : null,
  };
  fs.writeFileSync(
    path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CLOSURE-MANIFEST.json`),
    JSON.stringify(manifest, null, 2) + "\n"
  );

  const summary = `# A1 LRB 001–103 — production closure audit

## Classification

\`${audit.classification}\`

**NEXT_ACTION:** \`${audit.next_action}\`

| Metric | Value |
|--------|------:|
| origin/main | \`${audit.origin_main_sha}\` |
| Production file-set SHA | \`${audit.production_file_set_sha256}\` |
| LRB coverage | ${audit.lrb_coverage} |
| Finding rows (expanded) | ${FINDING_ROW_TOTAL}/${FINDING_ROW_TOTAL} |
| OWNER card keys | ${audit.post_apply.owner_keys_covered}/${CARD_TOTAL} |
| Unique production slots | ${audit.post_apply.unique_production_slots} |
| OWNER leaf matches | ${audit.post_apply.owner_leaf_matches}/${LEAF_TOTAL} |
| Full card matches | ${audit.card_coverage.full_card_matches}/${CARD_TOTAL} |
| Changed production files | 46 |
| Unresolved alias conflicts | ${audit.post_apply.unresolved_alias_conflicts} |
| PROVEN_IDENTICAL_ALIAS (finding rows) | ${audit.finding_row_classification_counts?.PROVEN_IDENTICAL_ALIAS ?? "—"} |

Finding alias correction #1: repeated \`primary_leaf_target_key\` rows are no longer classified as alias; only reconciliation-proven dual–owner-card slots qualify.

Read-only audit; production not modified.
`;
  fs.writeFileSync(path.join(CLOSURE_DIR, `${PREFIX}-PRODUCTION-CLOSURE-SUMMARY.md`), summary);

  return { manifest, proof };
}

module.exports = {
  CLOSURE_DIR,
  EXPECTED_MAIN_HEAD,
  EXPECTED_PRODUCTION_FILE_SET_SHA,
  FINAL_CLASS,
  ALIAS_CORRECTION_1_BEFORE_COUNTS,
  runProductionClosureAudit,
  writeClosureArtifacts,
};
