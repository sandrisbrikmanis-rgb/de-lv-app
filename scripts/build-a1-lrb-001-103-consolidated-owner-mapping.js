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
const { stableLeafValue, leafValueSha } = require("./lib/g2-a1-lrb-leaf-reconstruction");

const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const PREFIX = "A1-LRB-001-103";
const MAX_PART_BYTES = 4 * 1024 * 1024;
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

  let ownerFinalValue = winner.leaf_value;
  if (owner45Applied && owner45Change) {
    ownerFinalValue = owner45Change.owner_new;
  }

  return {
    target_language: winner.target_language,
    canonical_card_object_id: winner.card_object_id,
    exact_leaf_field_path: winner.leaf_field_path,
    owner_final_value: ownerFinalValue,
    source_batch: winner.batch_id,
    source_gala_pass_commit: winner.gala_pass_commit_sha,
    source_artifact_path: winner.decision_source?.file_path || null,
    source_artifact_sha256: winner.decision_source?.file_sha256 || null,
    resolution_class,
    superseded_sources: buildSupersededSources(versions, winner),
    leaf_value_sha256: winner.leaf_value_sha256,
  };
}

function tokenizePath(pathStr) {
  const tokens = [];
  const re = /([^[.\]]+)|\[(\d+)\]/g;
  let m;
  const s = String(pathStr);
  while ((m = re.exec(s)) !== null) {
    if (m[1] != null) tokens.push(m[1]);
    else if (m[2] != null) tokens.push(parseInt(m[2], 10));
  }
  return tokens;
}

function setByPath(root, pathStr, value) {
  const tokens = tokenizePath(pathStr);
  if (!tokens.length) return;
  let cur = root;
  for (let i = 0; i < tokens.length - 1; i += 1) {
    const t = tokens[i];
    const next = tokens[i + 1];
    if (typeof next === "number") {
      if (!Array.isArray(cur[t])) cur[t] = [];
      if (cur[t][next] == null || typeof cur[t][next] !== "object") cur[t][next] = {};
      cur = cur[t][next];
      i += 1;
    } else {
      if (cur[t] == null || typeof cur[t] !== "object") cur[t] = {};
      cur = cur[t];
    }
  }
  const last = tokens[tokens.length - 1];
  if (typeof last === "number") {
    const prev = tokens[tokens.length - 2];
    if (!Array.isArray(cur[prev])) cur[prev] = [];
    cur[prev][last] = value;
  } else {
    cur[last] = value;
  }
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

function buildFullCards(leafDecisions) {
  const byCard = new Map();
  for (const d of leafDecisions) {
    const ck = `${d.target_language}|${d.canonical_card_object_id}`;
    if (!byCard.has(ck)) {
      byCard.set(ck, {
        target_language: d.target_language,
        canonical_card_object_id: d.canonical_card_object_id,
        post_owner_card: { lv: "", study: {} },
        contributing_batches: new Set(),
        leaf_count: 0,
      });
    }
    const entry = byCard.get(ck);
    applyLeafToCard(entry.post_owner_card, d.exact_leaf_field_path, d.owner_final_value);
    entry.contributing_batches.add(d.source_batch);
    entry.leaf_count += 1;
  }
  return [...byCard.values()].map((e) => ({
    target_language: e.target_language,
    canonical_card_object_id: e.canonical_card_object_id,
    post_owner_card: e.post_owner_card,
    contributing_batches: [...e.contributing_batches].sort(),
    leaf_field_count: e.leaf_count,
  }));
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

function main() {
  const identity = assertIdentityGates();
  const state = buildA1LrbConflictClassificationState({ writeArtifacts: false });
  const owner45Map = new Map(
    (state.owner45Bundle?.doc?.changes || []).map((ch) => [ch.leaf_target_key, ch])
  );

  const leafDecisions = [];
  const seenKeys = new Set();
  for (const [leafKey, versions] of state.leafVersionsByKey) {
    if (!versions?.length) continue;
    const entry = state.classificationByKey.get(leafKey) || null;
    const decision = pickAuthoritativeDecision(
      versions,
      entry,
      owner45Map,
      state.correctionBatches,
      state.reReviewMaxN
    );
    leafDecisions.push({ leaf_target_key: leafKey, ...decision });
    seenKeys.add(leafKey);
  }

  leafDecisions.sort((a, b) => a.leaf_target_key.localeCompare(b.leaf_target_key));

  const duplicateKeys = leafDecisions.length - seenKeys.size;
  const missingValues = leafDecisions.filter((d) => d.owner_final_value == null).length;

  const fullCards = buildFullCards(leafDecisions);
  const batchRowTrace = (state.batchRowRecords || []).filter(
    (r) => r.owner_review_generation !== "initial"
  );
  const traceMissing = batchRowTrace.filter(
    (r) => !r.leaf_target_keys?.length || r.leaf_target_keys.some((k) => !seenKeys.has(k))
  ).length;

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

  const consolidatedPayload = {
    schema_version: 1,
    classification: "A1_LRB_001_103_CONSOLIDATED_OWNER_DECISIONS",
    generated_at: new Date().toISOString(),
    origin_main_sha: identity.originMainSha,
    consolidation_branch: git("git rev-parse --abbrev-ref HEAD"),
    consolidation_head_sha: identity.head,
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
    schema_version: 1,
    generated_at: consolidatedPayload.generated_at,
    origin_main_sha: identity.originMainSha,
    consolidation_head_sha: identity.head,
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
      superseded_values_selected: 0,
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
      state.coveredLrb.size === 103
        ? "A1_LRB_001_103_CONSOLIDATED_OWNER_MAPPING_READY_AWAITING_VERIFICATION"
        : "A1_LRB_001_103_CONSOLIDATION_BLOCKED",
    next_action: "OWNER_VERIFY_CONSOLIDATED_MAPPING",
    resolution_class_counts: leafDecisions.reduce((acc, d) => {
      acc[d.resolution_class] = (acc[d.resolution_class] || 0) + 1;
      return acc;
    }, {}),
    full_cards_sample: fullCards.slice(0, 5),
    full_cards_total: fullCards.length,
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
    targets: leafDecisions.map((d) => ({
      target_language: d.target_language,
      canonical_card_object_id: d.canonical_card_object_id,
      exact_leaf_field_path: d.exact_leaf_field_path,
      owner_final_value: d.owner_final_value,
      source_batch: d.source_batch,
      resolution_class: d.resolution_class,
    })),
    full_cards: fullCards,
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
| consolidation HEAD | \`${identity.head}\` |
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

  if (proof.classification !== "A1_LRB_001_103_CONSOLIDATED_OWNER_MAPPING_READY_AWAITING_VERIFICATION") {
    process.exit(1);
  }
}

if (require.main === module) main();
