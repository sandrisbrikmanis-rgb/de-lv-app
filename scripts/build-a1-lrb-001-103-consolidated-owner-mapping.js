#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  buildA1LrbConflictClassificationState,
  batchNum,
  classifyLeafGroup,
} = require("./build-a1-lrb-target-conflict-classification");
const { leafValueSha, setByPath } = require("./lib/g2-a1-lrb-leaf-reconstruction");
const {
  isCanonicalLeafFieldPath,
  authorizeEmptyFinalValue,
  buildCanonicalVersionIndex,
  validatePostOwnerCard,
  verifyDecisionMatchesSource,
  normalizePostOwnerCard,
  extractTargetLanguageCard,
  sanitizeTargetLanguageCard,
  deepCloneJson,
} = require("./lib/g2-a1-lrb-consolidation-normalize");

const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const PREFIX = "A1-LRB-001-103";
const MAX_PART_BYTES = 4_000_000;
const EXPECTED_OWNER_45_SHA =
  "e99022a7ac75a860f1c901cd77311bb2aa728e82bddad25e1efb2e1aaa7d8839";

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
  } catch {
    return null;
  }
}

function assertIdentityGates() {
  const head = git("git rev-parse HEAD");
  const ownerPath = path.join(
    ROOT,
    "reports/g2-a1-owner/consolidation/A1-LRB-OWNER-RESOLUTION-45.json"
  );
  const ownerSha = sha256(fs.readFileSync(ownerPath));
  if (ownerSha !== EXPECTED_OWNER_45_SHA) {
    throw new Error(`A1_LRB_CONSOLIDATION_BRANCH_BLOCKED: OWNER 45 SHA mismatch ${ownerSha}`);
  }
  const unresolved = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-UNRESOLVED-OWNER-CONFLICTS.json"),
      "utf8"
    )
  );
  if (unresolved.unresolved_count !== 0) {
    throw new Error("A1_LRB_CONSOLIDATION_BRANCH_BLOCKED: unresolved_count != 0");
  }
  const coverage = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-ALL-COVERAGE.json"),
      "utf8"
    )
  );
  if (coverage.linguistically_closed_count !== 103 || coverage.total_pending !== 0) {
    throw new Error("A1_LRB_CONSOLIDATION_BRANCH_BLOCKED: LRB coverage / PENDING");
  }
  return { head, ownerSha, originMainSha: git("git rev-parse origin/main") };
}

function pickLatestVersion(pool) {
  const sorted = [...pool].sort((a, b) => {
    const bn = batchNum(b.batch_id) - batchNum(a.batch_id);
    if (bn !== 0) return bn;
    const ta = a.gala_pass_commit_time || "";
    const tb = b.gala_pass_commit_time || "";
    return tb.localeCompare(ta);
  });
  return sorted[0];
}

function buildSupersededSources(pool, winner) {
  return pool
    .filter((v) => v !== winner)
    .map((v) => ({
      batch_id: v.batch_id,
      source_gala_pass_commit: v.gala_pass_commit_sha,
      leaf_value_sha256: v.leaf_value_sha256,
      source_artifact_path: v.decision_source?.file_path || null,
      source_artifact_sha256: v.decision_source?.file_sha256 || null,
    }));
}

function mapResolutionClass(classification, pool, winner, owner45Applied) {
  if (owner45Applied) return "OWNER_45_RESOLUTION";
  if (classification === "PROVEN_SEQUENTIAL_SUPERSESSION") return "PROVEN_SEQUENTIAL_SUPERSESSION";
  if (classification === "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION") {
    return "EXPANDED_STANDARD_FULL_CARD";
  }
  if (classification === "CORRECTION_HISTORY_ONLY") return "LATEST_GALA_CORRECTION";
  if (pool.length > 1 && classification === "IDENTICAL_FINAL_VALUE") {
    return "LATEST_GALA_CORRECTION";
  }
  return "UNCHALLENGED_GALA_FINAL";
}

function pickAuthoritativeDecision(versions, classificationEntry, owner45Map, correctionBatches, reReviewMaxN) {
  let pool = [...versions];
  let classification = classificationEntry?.classification || null;

  if (!classification && pool.length > 1) {
    const cg = classifyLeafGroup(pool, correctionBatches, reReviewMaxN);
    classification = cg.classification;
    if (cg.active_versions?.length) pool = cg.active_versions;
  } else if (classificationEntry?.active_versions_after_supersession?.length) {
    const active = new Set(classificationEntry.active_versions_after_supersession);
    pool = pool.filter((v) => active.has(v.batch_id));
  }

  if (!pool.length) pool = [...versions];

  const owner45Change = owner45Map.get(versions[0].leaf_target_key);
  const owner45Applied = Boolean(pool.some((v) => v.owner_45_copy_paste_applied) || owner45Change);

  const winner = pickLatestVersion(pool);
  const resolution_class = mapResolutionClass(classification, pool, winner, owner45Applied);

  const ownerFinalValue = winner.leaf_value;
  const emptyAuth = authorizeEmptyFinalValue(winner);

  return {
    target_language: winner.target_language,
    canonical_card_object_id: winner.card_object_id,
    exact_leaf_field_path: winner.leaf_field_path,
    owner_final_value: ownerFinalValue,
    apply_eligible: emptyAuth.apply_eligible,
    explicit_intentional_deletion: emptyAuth.explicit_intentional_deletion,
    implicit_deletion_authorization: emptyAuth.implicit_deletion_authorization,
    empty_value_evidence: emptyAuth.evidence,
    source_batch: winner.batch_id,
    source_gala_pass_commit: winner.gala_pass_commit_sha,
    source_artifact_path: winner.decision_source?.file_path || null,
    source_artifact_sha256: winner.decision_source?.file_sha256 || null,
    resolution_class,
    superseded_sources: buildSupersededSources(versions, winner),
    leaf_value_sha256: winner.leaf_value_sha256,
  };
}

function applyLeafToCard(card, leafPath, value) {
  let parsed = value;
  if (typeof value === "string") {
    const t = value.trim();
    if ((t.startsWith("[") && t.endsWith("]")) || (t.startsWith("{") && t.endsWith("}"))) {
      try {
        parsed = JSON.parse(t);
      } catch {
        parsed = value;
      }
    }
  }
  if (leafPath === "lv") {
    card.lv = parsed;
    return;
  }
  setByPath(card, leafPath, parsed);
}

function buildFullCardsWithBaseline(leafDecisionsApply, batchRowRecords) {
  const applyByCard = new Map();
  for (const d of leafDecisionsApply) {
    const ck = `${d.target_language}|${d.canonical_card_object_id}`;
    if (!applyByCard.has(ck)) applyByCard.set(ck, []);
    applyByCard.get(ck).push(d);
  }

  const recordsByCard = new Map();
  for (const r of batchRowRecords) {
    const ck = `${r.target_language}|${r.canonical_card_object_id}`;
    if (!recordsByCard.has(ck)) recordsByCard.set(ck, []);
    recordsByCard.get(ck).push(r);
  }

  const cardKeys = new Set(applyByCard.keys());
  for (const [ck, records] of recordsByCard) {
    if (records.some((r) => r.post_owner_card_target)) cardKeys.add(ck);
  }
  const cards = [];
  const metrics = {
    full_card_baseline_missing: 0,
    full_card_overlay_failures: 0,
    full_card_source_sha_failures: 0,
    incomplete_full_cards: 0,
  };

  for (const ck of cardKeys) {
    const [target_language, canonical_card_object_id] = ck.split("|");
    const records = (recordsByCard.get(ck) || [])
      .filter((r) => r.post_owner_card_target)
      .sort((a, b) => batchNum(b.batch_id) - batchNum(a.batch_id));
    const baselineRecord = records[0];
    if (!baselineRecord?.post_owner_card_target) {
      metrics.full_card_baseline_missing += 1;
      metrics.incomplete_full_cards += 1;
      cards.push({
        target_language,
        canonical_card_object_id,
        status: "BLOCKED",
        block_reason: "full_card_baseline_missing",
        post_owner_card: null,
      });
      continue;
    }

    if (
      baselineRecord.decision_source_sha256 &&
      baselineRecord.post_owner_card_target_sha256 !==
        sha256(JSON.stringify(baselineRecord.post_owner_card_target))
    ) {
      metrics.full_card_source_sha_failures += 1;
    }

    const postCard = sanitizeTargetLanguageCard(deepCloneJson(baselineRecord.post_owner_card_target));
    const baselineLv = postCard.lv;
    const applyList = applyByCard.get(ck) || [];
    const contributing_batches = new Set([baselineRecord.batch_id]);

    for (const d of applyList) {
      applyLeafToCard(postCard, d.exact_leaf_field_path, d.owner_final_value);
      contributing_batches.add(d.source_batch);
    }

    normalizePostOwnerCard(postCard);

    let overlayFailed = false;
    for (const d of applyList) {
      if (String(d.owner_final_value) !== "") continue;
      if (!d.explicit_intentional_deletion || !d.apply_eligible) {
        overlayFailed = true;
        break;
      }
    }
    if (baselineLv && String(baselineLv).length && postCard.lv === "" && !applyList.some(
      (d) => d.exact_leaf_field_path === "lv" && d.explicit_intentional_deletion
    )) {
      overlayFailed = true;
    }
    if (overlayFailed) {
      metrics.full_card_overlay_failures += 1;
      metrics.incomplete_full_cards += 1;
      cards.push({
        target_language,
        canonical_card_object_id,
        status: "BLOCKED",
        block_reason: "full_card_overlay_failure",
        post_owner_card: null,
        full_card_source_sha256: baselineRecord.post_owner_card_target_sha256,
      });
      continue;
    }

    cards.push({
      target_language,
      canonical_card_object_id,
      status: "READY",
      post_owner_card: postCard,
      full_card_source_sha256: baselineRecord.post_owner_card_target_sha256,
      full_card_source_artifact_path: baselineRecord.decision_source_path,
      full_card_source_artifact_sha256: baselineRecord.decision_source_sha256,
      full_card_source_batch: baselineRecord.batch_id,
      post_owner_card_sha256: sha256(JSON.stringify(postCard)),
      contributing_batches: [...contributing_batches].sort(),
      leaf_overlay_count: applyList.length,
    });
  }

  return { cards, metrics };
}

function buildFindingRowReconciliation(batchRowRecords, leafDecisions, inventoryRowCount) {
  const expandedRows = batchRowRecords.filter((r) => r.owner_review_generation !== "initial");
  const auditOnlyAbsent = expandedRows.filter((r) => r.audit_only && r.skip_reason);
  const applyKeys = new Set(
    leafDecisions.filter((d) => d.apply_eligible).map((d) => d.leaf_target_key)
  );

  const notCountedInApply = expandedRows.filter((r) => {
    if (r.audit_only) return true;
    if (!r.leaf_target_keys?.length) return true;
    return !r.leaf_target_keys.some((k) => applyKeys.has(k));
  });

  return {
    before_expanded_generation_finding_rows: inventoryRowCount,
    after_finding_rows_recorded: expandedRows.length,
    after_apply_eligible_leaf_keys: applyKeys.size,
    audit_only_finding_rows: auditOnlyAbsent.length,
    finding_rows_not_in_apply_mapping: notCountedInApply.length,
    missing_vs_inventory: inventoryRowCount - expandedRows.length,
    audit_only_rows: auditOnlyAbsent.map((r) => ({
      batch_id: r.batch_id,
      finding_stable_ids: r.finding_stable_ids,
      field_path: r.field_path_raw,
      reason: r.skip_reason,
    })),
    not_apply_mapped_rows: notCountedInApply
      .filter((r) => !r.audit_only)
      .slice(0, 50)
      .map((r) => ({
        batch_id: r.batch_id,
        finding_stable_ids: r.finding_stable_ids,
        field_path: r.field_path_raw,
        owner_status: r.owner_status,
        reason: "empty_or_audit_only_leaf_no_apply_target",
      })),
  };
}

function writeJsonParts(baseName, payload) {
  const raw = JSON.stringify(payload, null, 2) + "\n";
  if (Buffer.byteLength(raw) <= MAX_PART_BYTES) {
    const rel = `reports/g2-a1-owner/consolidation/final/${baseName}.json`;
    const abs = path.join(ROOT, rel);
    fs.writeFileSync(abs, raw);
    return { parts: [{ path: rel, sha256: sha256(raw), byte_length: Buffer.byteLength(raw) }] };
  }
  const decisions = payload.decisions || payload.leaf_decisions || [];
  const parts = [];
  let chunk = [];
  let partIndex = 1;
  for (const row of decisions) {
    const trial = [...chunk, row];
    const trialPayload = { ...payload, decisions: trial, leaf_decisions: trial };
    const trialRaw = JSON.stringify(trialPayload, null, 2);
    if (Buffer.byteLength(trialRaw) > MAX_PART_BYTES && chunk.length) {
      const partName = `${baseName}.part-${String(partIndex).padStart(3, "0")}.json`;
      const rel = `reports/g2-a1-owner/consolidation/final/${partName}`;
      const partPayload = { ...payload, part: partIndex, decisions: chunk, leaf_decisions: chunk };
      const partRaw = JSON.stringify(partPayload, null, 2) + "\n";
      fs.writeFileSync(path.join(ROOT, rel), partRaw);
      parts.push({ path: rel, sha256: sha256(partRaw), byte_length: Buffer.byteLength(partRaw), row_count: chunk.length });
      chunk = [row];
      partIndex += 1;
    } else {
      chunk = trial;
    }
  }
  if (chunk.length) {
    const partName = `${baseName}.part-${String(partIndex).padStart(3, "0")}.json`;
    const rel = `reports/g2-a1-owner/consolidation/final/${partName}`;
    const partPayload = { ...payload, part: partIndex, decisions: chunk, leaf_decisions: chunk };
    const partRaw = JSON.stringify(partPayload, null, 2) + "\n";
    fs.writeFileSync(path.join(ROOT, rel), partRaw);
    parts.push({ path: rel, sha256: sha256(partRaw), byte_length: Buffer.byteLength(partRaw), row_count: chunk.length });
  }
  return { parts, multipart: true };
}

function countInitialBatchRows(batchSources) {
  let total = 0;
  for (const src of Object.values(batchSources)) {
    if (src?.file_path?.includes("-input.csv") && src.file_sha256) {
      total += 1;
    }
  }
  return total;
}

function purgeOldDecisionParts() {
  if (!fs.existsSync(FINAL_DIR)) return;
  for (const name of fs.readdirSync(FINAL_DIR)) {
    if (name.startsWith(`${PREFIX}-CONSOLIDATED-OWNER-DECISIONS.part-`)) {
      fs.unlinkSync(path.join(FINAL_DIR, name));
    }
  }
}

function main() {
  const identity = assertIdentityGates();
  const state = buildA1LrbConflictClassificationState({ writeArtifacts: false });
  const owner45Map = new Map(
    (state.owner45Bundle?.doc?.changes || []).map((ch) => [ch.leaf_target_key, ch])
  );

  const canonicalIndex = buildCanonicalVersionIndex(state.leafVersionsByKey);
  const leafDecisions = [];
  const seenKeys = new Set();
  let malformedLeafPaths = 0;
  let unauthorizedEmptyValues = 0;
  let syntheticEmptyValues = 0;
  let implicitDeletionAuthorizations = 0;
  let sourceVerifyFailures = 0;
  let supersededValuesSelected = 0;

  for (const [leafKey, versions] of canonicalIndex) {
    if (!versions?.length) continue;
    const fieldPath = leafKey.split("|").slice(2).join("|");
    if (!isCanonicalLeafFieldPath(fieldPath)) {
      malformedLeafPaths += 1;
      continue;
    }
    const entry = state.classificationByKey.get(leafKey) || null;
    const decision = pickAuthoritativeDecision(
      versions,
      entry,
      owner45Map,
      state.correctionBatches,
      state.reReviewMaxN
    );
    if (!isCanonicalLeafFieldPath(decision.exact_leaf_field_path)) {
      malformedLeafPaths += 1;
      continue;
    }
    if (decision.owner_final_value == null) {
      malformedLeafPaths += 1;
      continue;
    }
    if (String(decision.owner_final_value) === "") {
      if (decision.apply_eligible) {
        if (decision.implicit_deletion_authorization) implicitDeletionAuthorizations += 1;
        if (!decision.explicit_intentional_deletion) unauthorizedEmptyValues += 1;
      }
    }
    const winner = pickLatestVersion(
      versions.filter((v) => v.leaf_field_path === decision.exact_leaf_field_path)
    ) || pickLatestVersion(versions);
    const srcCheck = verifyDecisionMatchesSource(decision, winner);
    if (!srcCheck.ok) sourceVerifyFailures += 1;

    for (const s of decision.superseded_sources || []) {
      if (s.leaf_value_sha256 && s.leaf_value_sha256 !== decision.leaf_value_sha256) {
        supersededValuesSelected += 1;
      }
    }

    leafDecisions.push({ leaf_target_key: leafKey, ...decision, source_verify: srcCheck.ok ? "PASS" : srcCheck.reason });
    seenKeys.add(leafKey);
  }

  leafDecisions.sort((a, b) => a.leaf_target_key.localeCompare(b.leaf_target_key));

  const duplicateKeys = leafDecisions.length - seenKeys.size;
  const missingValues =
    leafDecisions.filter((d) => d.owner_final_value == null || d.owner_final_value === undefined).length +
    unauthorizedEmptyValues;

  const leafDecisionsApply = leafDecisions.filter((d) => d.apply_eligible);
  syntheticEmptyValues = leafDecisionsApply.filter(
    (d) => String(d.owner_final_value) === "" && !d.explicit_intentional_deletion
  ).length;
  const inventoryRowCount = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-ALL-INVENTORY.json"),
      "utf8"
    )
  ).reduce((s, b) => s + (b.rows || 0), 0);

  const batchRowTrace = (state.batchRowRecords || []).filter(
    (r) => r.owner_review_generation !== "initial"
  );

  const findingReconciliation = buildFindingRowReconciliation(
    state.batchRowRecords,
    leafDecisions,
    inventoryRowCount
  );

  const { cards: fullCards, metrics: fullCardMetrics } = buildFullCardsWithBaseline(
    leafDecisionsApply,
    batchRowTrace
  );
  const cardSchemaErrors = [];
  for (const c of fullCards) {
    if (c.status !== "READY" || !c.post_owner_card) continue;
    validatePostOwnerCard(
      c.post_owner_card,
      `${c.target_language}|${c.canonical_card_object_id}`,
      cardSchemaErrors
    );
  }
  const invalidCardSchemaCount = cardSchemaErrors.length;

  function traceRowCovered(record) {
    if (record.audit_only) return true;
    if (!record.leaf_target_keys?.length) return false;
    for (const k of record.leaf_target_keys) {
      const fp = k.split("|").slice(2).join("|");
      if (isCanonicalLeafFieldPath(fp)) {
        if (!seenKeys.has(k)) return false;
        continue;
      }
      const subs = fp
        .split(/[;,]/)
        .map((s) => s.trim())
        .filter((p) => isCanonicalLeafFieldPath(p));
      for (const p of subs) {
        const ck = `${k.split("|")[0]}|${k.split("|")[1]}|${p}`;
        if (!seenKeys.has(ck)) return false;
      }
    }
    return true;
  }
  const traceMissing = batchRowTrace.filter((r) => !traceRowCovered(r)).length;

  let owner45Match = 0;
  for (const ch of state.owner45Bundle?.doc?.changes || []) {
    const versions = state.leafVersionsByKey.get(ch.leaf_target_key) || [];
    const applied = versions.find((v) => v.owner_45_copy_paste_applied);
    if (!applied) continue;
    const expectedSha = leafValueSha(ch.owner_new);
    if (applied.leaf_value_sha256 === expectedSha || leafValueSha(applied.leaf_value) === expectedSha) {
      owner45Match += 1;
    }
  }

  fs.mkdirSync(FINAL_DIR, { recursive: true });
  purgeOldDecisionParts();

  const consolidatedPayload = {
    schema_version: 2,
    classification: "A1_LRB_001_103_CONSOLIDATED_OWNER_DECISIONS",
    generated_at: new Date().toISOString(),
    origin_main_sha: identity.originMainSha,
    consolidation_branch: git("git rev-parse --abbrev-ref HEAD"),
    generation_base_sha: identity.head,
    lrb_range: "LRB-001…LRB-103",
    leaf_decisions: leafDecisions,
    metrics: {
      unique_final_leaf_keys: leafDecisions.length,
      full_post_owner_cards: fullCards.length,
      initial_batch_rows_traced: batchRowTrace.length,
      batch_row_trace_gaps: traceMissing,
      owner_45_applied: owner45Match,
      owner_45_expected: 45,
    },
  };

  const decisionsWrite = writeJsonParts(`${PREFIX}-CONSOLIDATED-OWNER-DECISIONS`, consolidatedPayload);

  const manifest = {
    schema_version: 2,
    generated_at: consolidatedPayload.generated_at,
    origin_main_sha: identity.originMainSha,
    generation_base_sha: identity.head,
    owner_45_resolution_sha256: identity.ownerSha,
    consolidated_decisions: decisionsWrite.multipart
      ? { multipart: true, parts: decisionsWrite.parts }
      : { multipart: false, ...decisionsWrite.parts[0] },
    full_cards_count: fullCards.length,
    leaf_decisions_count: leafDecisions.length,
  };
  const manifestPath = path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`);
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

  const proof = {
    schema_version: 1,
    generated_at: consolidatedPayload.generated_at,
    gates: {
      lrb_coverage: `${state.coveredLrb.size}/103`,
      linguistically_closed: "103/103",
      pending: 0,
      unresolved_owner_conflicts: state.unresolvedCount,
      owner_45_applied: `${owner45Match}/45`,
      duplicate_final_keys: duplicateKeys,
      missing_final_values: missingValues,
      unauthorized_empty_values: unauthorizedEmptyValues,
      synthetic_empty_values: syntheticEmptyValues,
      implicit_deletion_authorizations: implicitDeletionAuthorizations,
      malformed_leaf_paths: malformedLeafPaths,
      invalid_card_schema_count: invalidCardSchemaCount,
      source_verify_failures: sourceVerifyFailures,
      superseded_values_selected: supersededValuesSelected,
      incomplete_full_cards: fullCardMetrics.incomplete_full_cards,
      full_card_baseline_missing: fullCardMetrics.full_card_baseline_missing,
      full_card_overlay_failures: fullCardMetrics.full_card_overlay_failures,
      full_card_source_sha_failures: fullCardMetrics.full_card_source_sha_failures,
      apply_eligible_leaf_decisions: leafDecisionsApply.length,
      de_change_targets: 0,
      production_changes: 0,
      crowdin_changes: 0,
      ingest_apply_changes: 0,
      batch_row_trace_gaps: traceMissing,
      initial_batch_finding_rows_traced: batchRowTrace.length,
      independent_owner_conflicts: state.counts.INDEPENDENT_OWNER_CONFLICT || 0,
    },
    classification:
      missingValues === 0 &&
      duplicateKeys === 0 &&
      owner45Match === 45 &&
      state.unresolvedCount === 0 &&
      state.coveredLrb.size === 103 &&
      malformedLeafPaths === 0 &&
      unauthorizedEmptyValues === 0 &&
      syntheticEmptyValues === 0 &&
      implicitDeletionAuthorizations === 0 &&
      invalidCardSchemaCount === 0 &&
      sourceVerifyFailures === 0 &&
      fullCardMetrics.incomplete_full_cards === 0 &&
      fullCardMetrics.full_card_baseline_missing === 0 &&
      fullCardMetrics.full_card_overlay_failures === 0 &&
      fullCardMetrics.full_card_source_sha_failures === 0 &&
      findingReconciliation.after_finding_rows_recorded === inventoryRowCount
        ? "A1_LRB_001_103_CONSOLIDATION_CORRECTION_2_COMPLETE_AWAITING_OWNER_VERIFICATION"
        : "A1_LRB_001_103_CONSOLIDATION_BLOCKED",
    next_action: "OWNER_VERIFY_CONSOLIDATED_MAPPING",
    resolution_class_counts: leafDecisions.reduce((acc, d) => {
      acc[d.resolution_class] = (acc[d.resolution_class] || 0) + 1;
      return acc;
    }, {}),
    full_cards_sample: fullCards.filter((c) => c.status === "READY").slice(0, 5),
    full_cards_total: fullCards.filter((c) => c.status === "READY").length,
    full_cards_blocked: fullCards.filter((c) => c.status === "BLOCKED").length,
    finding_row_reconciliation: findingReconciliation,
    spotlight_cards: ["bg|a1-uhr", "bg|also", "bg|auch", "bg|auf", "bg|aufs"].map((ck) => {
      const card = fullCards.find(
        (c) => `${c.target_language}|${c.canonical_card_object_id}` === ck
      );
      return {
        card_key: ck,
        status: card?.status || "MISSING",
        post_owner_card_sha256: card?.post_owner_card_sha256 || null,
        full_card_source_sha256: card?.full_card_source_sha256 || null,
      };
    }),
  };
  const proofPath = path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-PROOF.json`);
  fs.writeFileSync(proofPath, JSON.stringify(proof, null, 2) + "\n");

  const applyPlan = {
    schema_version: 1,
    generated_at: consolidatedPayload.generated_at,
    mode: "PLAN_ONLY_NO_APPLY",
    constraints: {
      copy_paste_only: true,
      do_not_change_de: true,
      do_not_apply_to_production: true,
      crowdin_changes: 0,
      ingest_apply_changes: 0,
    },
    targets: leafDecisionsApply.map((d) => ({
      target_language: d.target_language,
      canonical_card_object_id: d.canonical_card_object_id,
      exact_leaf_field_path: d.exact_leaf_field_path,
      owner_final_value: d.owner_final_value,
      source_batch: d.source_batch,
      resolution_class: d.resolution_class,
    })),
    full_cards: fullCards.filter((c) => c.status === "READY"),
    audit_leaf_decisions: leafDecisions.filter((d) => !d.apply_eligible),
  };
  const applyPath = path.join(FINAL_DIR, `${PREFIX}-PRODUCTION-APPLY-PLAN.json`);
  fs.writeFileSync(applyPath, JSON.stringify(applyPlan, null, 2) + "\n");

  const summaryMd = `# A1 LRB-001…103 consolidated OWNER mapping

Generated: ${consolidatedPayload.generated_at}

## Status

**\`${proof.classification}\`**

\`\`\`text
NEXT_ACTION: ${proof.next_action}
\`\`\`

| Gate | Value |
|------|------:|
| origin/main | \`${identity.originMainSha}\` |
| generation base SHA | \`${identity.head}\` |
| malformed_leaf_paths | ${proof.gates.malformed_leaf_paths} |
| unauthorized_empty_values | ${proof.gates.unauthorized_empty_values} |
| invalid_card_schema_count | ${proof.gates.invalid_card_schema_count} |
| superseded_values_selected | ${proof.gates.superseded_values_selected} |
| LRB coverage | ${proof.gates.lrb_coverage} |
| linguistically_closed | ${proof.gates.linguistically_closed} |
| PENDING | ${proof.gates.pending} |
| unresolved_owner_conflicts | ${proof.gates.unresolved_owner_conflicts} |
| owner_45_applied | ${proof.gates.owner_45_applied} |
| unique final leaf keys | ${leafDecisions.length} |
| full post-owner cards | ${fullCards.length} |
| initial batch rows traced | ${batchRowTrace.length} |
| duplicate_final_keys | ${proof.gates.duplicate_final_keys} |
| missing_final_values | ${proof.gates.missing_final_values} |
| DE change targets | ${proof.gates.de_change_targets} |

## Artifacts

- \`reports/g2-a1-owner/consolidation/final/${PREFIX}-CONSOLIDATED-OWNER-DECISIONS.json\` (or parts)
- \`reports/g2-a1-owner/consolidation/final/${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json\`
- \`reports/g2-a1-owner/consolidation/final/${PREFIX}-CONSOLIDATION-PROOF.json\`
- \`reports/g2-a1-owner/consolidation/final/${PREFIX}-PRODUCTION-APPLY-PLAN.json\`

Production apply **not executed** in this task.
`;
  fs.writeFileSync(path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-SUMMARY.md`), summaryMd);

  console.log(
    JSON.stringify(
      {
        classification: proof.classification,
        gates: proof.gates,
        manifest_sha256: sha256(fs.readFileSync(manifestPath)),
        proof_sha256: sha256(fs.readFileSync(proofPath)),
        leaf_decisions: leafDecisions.length,
        full_cards: fullCards.length,
      },
      null,
      2
    )
  );

  const reconMd = `# A1 LRB finding row reconciliation

| Metric | Before | After |
|--------|-------:|------:|
| Expanded-generation finding rows (inventory) | ${findingReconciliation.before_expanded_generation_finding_rows} | ${findingReconciliation.after_finding_rows_recorded} |
| Apply-eligible leaf keys | — | ${findingReconciliation.after_apply_eligible_leaf_keys} |
| Audit-only finding rows (field absent) | — | ${findingReconciliation.audit_only_finding_rows} |
| Finding rows not in apply mapping | — | ${findingReconciliation.finding_rows_not_in_apply_mapping} |

## Audit-only / absent field rows (${findingReconciliation.audit_only_finding_rows})

${findingReconciliation.audit_only_rows
  .map(
    (r) =>
      `- **${r.batch_id}** \`${r.finding_stable_ids}\` \`${r.field_path}\` — ${r.reason}`
  )
  .join("\n")}

Finding rows and unique leaf keys are distinct metrics; leaf deduplication does not drop finding rows.
`;
  fs.writeFileSync(
    path.join(FINAL_DIR, `${PREFIX}-FINDING-ROW-RECONCILIATION.md`),
    reconMd
  );
  fs.writeFileSync(
    path.join(FINAL_DIR, `${PREFIX}-FINDING-ROW-RECONCILIATION.json`),
    JSON.stringify(findingReconciliation, null, 2) + "\n"
  );

  if (
    proof.classification !==
    "A1_LRB_001_103_CONSOLIDATION_CORRECTION_2_COMPLETE_AWAITING_OWNER_VERIFICATION"
  ) {
    process.exit(1);
  }
}

if (require.main === module) main();
