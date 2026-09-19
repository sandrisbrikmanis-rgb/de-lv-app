#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  TARGET_CLASSIFICATION,
  MULTIPART_MANIFEST_CORRECTION_COMPLETE_CLASSIFICATION,
  EXPECTED_CARD_COUNT,
  buildConsolidatedMappingFrom234GalaApproved,
  auditMultipartManifestParts,
} = require("./lib/g2-a1-lrb-consolidated-mapping-from-234-gala");

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
  const pinHead = process.env.A1_CONSOLIDATION_PIN_HEAD;
  if (pinHead && head !== pinHead) {
    throw new Error(`A1_LRB_CONSOLIDATION_BRANCH_BLOCKED: HEAD ${head} !== pinned ${pinHead}`);
  }
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

function readBeforeCounts(generationHead) {
  const rel = `reports/g2-a1-owner/consolidation/final/${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`;
  try {
    const raw = execSync(`git show ${generationHead}:${rel}`, {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });
    const m = JSON.parse(raw);
    return {
      leaf_decisions: m.leaf_decisions_count ?? null,
      full_cards: m.full_cards_count ?? null,
    };
  } catch {
    return { leaf_decisions: null, full_cards: null };
  }
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
      parts.push({
        path: rel,
        sha256: sha256(partRaw),
        byte_length: Buffer.byteLength(partRaw),
        row_count: chunk.length,
      });
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
    parts.push({
      path: rel,
      sha256: sha256(partRaw),
      byte_length: Buffer.byteLength(partRaw),
      row_count: chunk.length,
    });
  }
  return { parts, multipart: true };
}

function purgeOldDecisionParts() {
  if (!fs.existsSync(FINAL_DIR)) return;
  for (const name of fs.readdirSync(FINAL_DIR)) {
    if (
      name.startsWith(`${PREFIX}-CONSOLIDATED-OWNER-DECISIONS.part-`) ||
      name === `${PREFIX}-CONSOLIDATED-OWNER-DECISIONS.json`
    ) {
      fs.unlinkSync(path.join(FINAL_DIR, name));
    }
  }
}

function main() {
  const identity = assertIdentityGates();
  const beforeCounts = readBeforeCounts(identity.head);
  const built = buildConsolidatedMappingFrom234GalaApproved({
    generationHead: identity.head,
    originMainSha: identity.originMainSha,
  });

  const {
    leafDecisions,
    leafDecisionsApply,
    fullCards,
    readyFullCards,
    gates,
    copyPasteMeta,
    metrics,
  } = built;

  fs.mkdirSync(FINAL_DIR, { recursive: true });
  purgeOldDecisionParts();

  const multipartCorrection = process.env.A1_LRB_MULTIPART_MANIFEST_CORRECTION === "1";
  const generationBaseSha =
    process.env.A1_CONSOLIDATION_GENERATION_BASE || identity.head;

  const generatedAt = new Date().toISOString();
  const consolidatedPayload = {
    schema_version: 3,
    classification: "A1_LRB_001_103_CONSOLIDATED_OWNER_DECISIONS_FROM_234_GALA",
    generated_at: generatedAt,
    origin_main_sha: identity.originMainSha,
    consolidation_branch: git("git rev-parse --abbrev-ref HEAD"),
    generation_base_sha: generationBaseSha,
    multipart_manifest_correction: multipartCorrection,
    lrb_range: "LRB-001…LRB-103",
    copy_paste_source: {
      path: copyPasteMeta.path,
      sha256: copyPasteMeta.file_sha256,
    },
    leaf_decisions: leafDecisions,
    metrics: {
      ...metrics,
      before_rebuild_leaf_decisions: beforeCounts.leaf_decisions,
      before_rebuild_full_cards: beforeCounts.full_cards,
    },
  };

  const decisionsWrite = writeJsonParts(`${PREFIX}-CONSOLIDATED-OWNER-DECISIONS`, consolidatedPayload);

  if (decisionsWrite.multipart) {
    for (const part of decisionsWrite.parts) {
      const abs = path.join(ROOT, part.path);
      const raw = fs.readFileSync(abs);
      part.sha256 = sha256(raw);
      part.byte_length = Buffer.byteLength(raw);
      const doc = JSON.parse(raw.toString("utf8"));
      const rows = doc.leaf_decisions || doc.decisions || [];
      part.row_count = rows.length;
    }
  }

  const manifest = {
    schema_version: 3,
    generated_at: generatedAt,
    origin_main_sha: identity.originMainSha,
    generation_base_sha: generationBaseSha,
    multipart_manifest_correction: multipartCorrection,
    owner_45_resolution_sha256: identity.ownerSha,
    copy_paste_source_sha256: copyPasteMeta.file_sha256,
    consolidated_decisions: decisionsWrite.multipart
      ? { multipart: true, parts: decisionsWrite.parts }
      : { multipart: false, ...decisionsWrite.parts[0] },
    full_cards_count: readyFullCards.length,
    leaf_decisions_count: leafDecisions.length,
    gala_approved_cards_applied: gates.gala_approved_cards_applied,
  };
  const manifestPath = path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`);
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

  let classification = built.pass ? TARGET_CLASSIFICATION : "A1_LRB_001_103_CONSOLIDATION_BLOCKED";
  if (built.pass && multipartCorrection) {
    classification = MULTIPART_MANIFEST_CORRECTION_COMPLETE_CLASSIFICATION;
  }

  const multipartAudit = auditMultipartManifestParts(manifest);
  if (
    multipartAudit.multipart_sha_mismatches ||
    multipartAudit.multipart_size_mismatches ||
    multipartAudit.multipart_row_count_mismatches
  ) {
    throw new Error(
      `A1_LRB_MULTIPART_MANIFEST_OUT_OF_SYNC:${JSON.stringify(multipartAudit)}`
    );
  }

  const proof = {
    schema_version: 2,
    generated_at: generatedAt,
    generation_base_sha: generationBaseSha,
    multipart_manifest_correction: multipartCorrection,
    multipart_audit: multipartAudit,
    copy_paste_source: {
      path: copyPasteMeta.path,
      sha256: copyPasteMeta.file_sha256,
    },
    before_rebuild: beforeCounts,
    after_rebuild: {
      leaf_decisions: leafDecisions.length,
      full_post_owner_cards: readyFullCards.length,
    },
    gates,
    classification,
    next_action: "OWNER_VERIFY_CONSOLIDATED_MAPPING",
    resolution_class_counts: {
      GALA_234_FULL_CARD_COPY_PASTE: leafDecisions.length,
    },
    full_cards_total: readyFullCards.length,
    full_cards_blocked: fullCards.filter((c) => c.status === "BLOCKED").length,
  };
  const proofPath = path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-PROOF.json`);
  fs.writeFileSync(proofPath, JSON.stringify(proof, null, 2) + "\n");

  const notApplyMapped = {
    schema_version: 2,
    generated_at: generatedAt,
    mode: "234_GALA_FULL_CARD_REBUILD_SUPERSEDES_LEAF_NOT_APPLY_MAPPING",
    finding_rows_not_in_apply_mapping: 0,
    owner_review_required_count: 0,
    classification_counts: {
      GALA_234_FULL_CARD_COPY_PASTE: EXPECTED_CARD_COUNT,
    },
    rows: [],
    note:
      "Consolidated mapping rebuilt mechanically from 234 GALA-approved full_card_owner_new entries; legacy finding-row not-apply bucket not used.",
  };
  fs.writeFileSync(
    path.join(FINAL_DIR, `${PREFIX}-NOT-APPLY-MAPPED-OWNER-DECISIONS.json`),
    JSON.stringify(notApplyMapped, null, 2) + "\n"
  );

  fs.writeFileSync(
    path.join(FINAL_DIR, `${PREFIX}-OWNER-REVIEW-REQUIRED.json`),
    JSON.stringify(
      {
        schema_version: 2,
        generated_at: generatedAt,
        mode: "234_GALA_REBUILD_COMPLETE",
        owner_review_required_count: 0,
        rows: [],
      },
      null,
      2
    ) + "\n"
  );

  const applyPlan = {
    schema_version: 2,
    generated_at: generatedAt,
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
    full_cards: readyFullCards,
  };
  fs.writeFileSync(
    path.join(FINAL_DIR, `${PREFIX}-PRODUCTION-APPLY-PLAN.json`),
    JSON.stringify(applyPlan, null, 2) + "\n"
  );

  const summaryMd = `# A1 LRB-001…103 consolidated OWNER mapping (234 GALA-approved cards)

Generated: ${generatedAt}

## Status

**\`${classification}\`**

| Gate | Value |
|------|------:|
| origin/main | \`${identity.originMainSha}\` |
| generation base SHA | \`${identity.head}\` |
| COPY-PASTE-4 SHA-256 | \`${copyPasteMeta.file_sha256}\` |
| GALA-approved cards applied | ${gates.gala_approved_cards_applied} |
| LRB coverage | ${gates.lrb_coverage} |
| PENDING | ${gates.pending} |
| unresolved_owner_conflicts | ${gates.unresolved_owner_conflicts} |
| duplicate_final_keys | ${gates.duplicate_final_keys} |
| missing_source_traces | ${gates.missing_source_traces} |
| unauthorized_empty_values | ${gates.unauthorized_empty_values} |
| incomplete_full_cards | ${gates.incomplete_full_cards} |
| malformed_leaf_paths | ${gates.malformed_leaf_paths} |
| invalid_card_schema_count | ${gates.invalid_card_schema_count} |
| silently_dropped_baseline_fields | ${gates.silently_dropped_baseline_fields} |
| de_example_alignment_violations | ${gates.de_example_alignment_violations} |
| owner_values_modified_during_rebuild | ${gates.owner_values_modified_during_rebuild} |
| leaf decisions (before → after) | ${beforeCounts.leaf_decisions ?? "—"} → ${leafDecisions.length} |
| full cards (before → after) | ${beforeCounts.full_cards ?? "—"} → ${readyFullCards.length} |

Production apply **not executed**. No merge. \`data/**/a1.js\` unchanged by this rebuild.
`;
  fs.writeFileSync(path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-SUMMARY.md`), summaryMd);

  const findingReconciliation = {
    mode: "234_gala_full_card_rebuild",
    before_rebuild_leaf_decisions: beforeCounts.leaf_decisions,
    after_rebuild_leaf_decisions: leafDecisions.length,
    before_rebuild_full_cards: beforeCounts.full_cards,
    after_rebuild_full_cards: readyFullCards.length,
    gala_approved_cards_applied: gates.gala_approved_cards_applied,
  };
  fs.writeFileSync(
    path.join(FINAL_DIR, `${PREFIX}-FINDING-ROW-RECONCILIATION.json`),
    JSON.stringify(findingReconciliation, null, 2) + "\n"
  );

  const verificationProof = {
    schema_version: 2,
    generated_at: generatedAt,
    verified_commit_sha: identity.head,
    generation_base_sha: generationBaseSha,
    multipart_manifest_correction: multipartCorrection,
    origin_main_sha: identity.originMainSha,
    classification,
    pass: built.pass,
    blockers: built.pass ? [] : ["rebuild_gates_failed"],
    leaf_decisions_count: leafDecisions.length,
    apply_eligible_leaf_decisions: gates.apply_eligible_leaf_decisions,
    manifest_sha256: sha256(fs.readFileSync(manifestPath)),
    proof_sha256: sha256(fs.readFileSync(proofPath)),
    gates,
  };
  fs.writeFileSync(
    path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATION-VERIFICATION-PROOF.json`),
    JSON.stringify(verificationProof, null, 2) + "\n"
  );

  console.log(
    JSON.stringify(
      {
        classification,
        start_head: identity.head,
        end_head: identity.head,
        gala_approved_cards_applied: gates.gala_approved_cards_applied,
        before_rebuild: beforeCounts,
        after_rebuild: {
          leaf_decisions: leafDecisions.length,
          full_cards: readyFullCards.length,
        },
        gates,
        manifest_sha256: sha256(fs.readFileSync(manifestPath)),
        proof_sha256: sha256(fs.readFileSync(proofPath)),
      },
      null,
      2
    )
  );

  if (!built.pass) process.exit(1);
}

if (require.main === module) main();
