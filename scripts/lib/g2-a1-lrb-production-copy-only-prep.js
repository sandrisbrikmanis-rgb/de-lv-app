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
const { applyLeafToCard } = require("./g2-a1-lrb-consolidation-full-cards");

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
  execSync("node scripts/verify-a1-lrb-001-103-consolidated-owner-mapping.js", {
    cwd: ROOT,
    stdio: "pipe",
  });
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

function productionFileRel(lang) {
  return `data/${lang}/a1.js`;
}

function productionMirrorRel(lang) {
  return `www/data/${lang}/a1.js`;
}

function resolveProductionTargetStrict(lang, canonicalCardObjectId) {
  const words = loadProductionA1Words(lang);
  if (!words) {
    return {
      ok: false,
      classification: "BLOCKED_TARGET_MISSING",
      detail: "production_lang_file_missing",
    };
  }
  const id = String(canonicalCardObjectId).trim();
  const byDe = [];
  for (let i = 0; i < words.length; i += 1) {
    const de = String(words[i]?.de ?? "").trim();
    if (de === id) byDe.push({ index: i, entry: words[i], production_de: de, match_kind: "de" });
  }
  if (byDe.length > 1) {
    return { ok: false, classification: "BLOCKED_TARGET_AMBIGUOUS", detail: `duplicate_de_count:${byDe.length}` };
  }
  if (byDe.length === 1) {
    return {
      ok: true,
      index: byDe[0].index,
      entry: byDe[0].entry,
      production_de: byDe[0].production_de,
      production_match_kind: "de",
      production_study_id: byDe[0].entry?.study?.id ? String(byDe[0].entry.study.id).trim() : null,
      production_file: productionFileRel(lang),
      production_mirror_file: productionMirrorRel(lang),
    };
  }

  const byStudyId = [];
  for (let i = 0; i < words.length; i += 1) {
    const studyId = words[i]?.study?.id != null ? String(words[i].study.id).trim() : "";
    if (studyId && studyId === id) {
      byStudyId.push({
        index: i,
        entry: words[i],
        production_de: String(words[i]?.de ?? "").trim(),
        match_kind: "study.id",
      });
    }
  }
  if (byStudyId.length > 1) {
    return {
      ok: false,
      classification: "BLOCKED_TARGET_AMBIGUOUS",
      detail: `duplicate_study_id_count:${byStudyId.length}`,
    };
  }
  if (byStudyId.length === 1) {
    return {
      ok: true,
      index: byStudyId[0].index,
      entry: byStudyId[0].entry,
      production_de: byStudyId[0].production_de,
      production_match_kind: "study.id",
      production_study_id: id,
      production_file: productionFileRel(lang),
      production_mirror_file: productionMirrorRel(lang),
    };
  }

  return { ok: false, classification: "BLOCKED_TARGET_MISSING", detail: "card_not_found_by_de_or_study_id" };
}

function normalizedProductionCard(entry) {
  return mechanicalNormalizeTargetLanguageCard(extractTargetLanguageCard(entry));
}

function productionLeafSurface(entry) {
  return extractTargetLanguageCard(entry);
}

function cardSha256(entry) {
  return sha256(JSON.stringify(normalizedProductionCard(entry)));
}

function pathExistsOnCard(card, leafPath) {
  const parts = String(leafPath)
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
  let cur = card;
  for (let i = 0; i < parts.length; i += 1) {
    const p = parts[i];
    if (cur == null) return false;
    if (i === parts.length - 1) return Object.prototype.hasOwnProperty.call(cur, p) || Array.isArray(cur);
    cur = cur[p];
  }
  return false;
}

function schemaAllowsWrite(card, leafPath) {
  const parts = String(leafPath)
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
  let cur = card;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const p = parts[i];
    const nxt = parts[i + 1];
    if (cur == null) return { ok: true, mode: "add_path" };
    if (/^\d+$/.test(nxt)) {
      if (cur[p] != null && !Array.isArray(cur[p])) return { ok: false, reason: "expected_array" };
    } else if (cur[p] != null && (typeof cur[p] !== "object" || Array.isArray(cur[p]))) {
      return { ok: false, reason: "expected_object" };
    }
    cur = cur[p];
  }
  return { ok: true };
}

function classifyLeafRow(decision, fullCardMeta) {
  const base = {
    leaf_target_key: decision.leaf_target_key,
    target_language: decision.target_language,
    canonical_card_object_id: decision.canonical_card_object_id,
    exact_leaf_field_path: decision.exact_leaf_field_path,
    owner_new_value: decision.owner_final_value,
    owner_new_sha256: leafValueSha(decision.owner_final_value),
    apply_eligible: decision.apply_eligible,
    explicit_intentional_deletion: decision.explicit_intentional_deletion,
    source_batch: decision.source_batch,
    resolution_class: decision.resolution_class,
    source_gala_pass_commit: decision.source_gala_pass_commit || null,
    related_lrb_batches: [...new Set((decision.related_lrb_rows || []).map((r) => r.batch_id))].sort(),
    target_unique: true,
  };

  if (!decision.apply_eligible) {
    return {
      ...base,
      prep_classification: "BLOCKED_SCHEMA_MISMATCH",
      action_type: "BLOCKED",
      block_reason: "not_apply_eligible",
    };
  }

  const resolved = resolveProductionTargetStrict(decision.target_language, decision.canonical_card_object_id);
  if (!resolved.ok) {
    return {
      ...base,
      prep_classification: resolved.classification,
      action_type: "BLOCKED",
      block_reason: resolved.detail,
      production_file: productionFileRel(decision.target_language),
    };
  }

  const norm = normalizedProductionCard(resolved.entry);
  const leafSurface = productionLeafSurface(resolved.entry);
  let currentVal = getByPath(leafSurface, decision.exact_leaf_field_path);
  if (currentVal === undefined) {
    const leaves = flattenCardToLeaves(leafSurface);
    if (leaves.has(decision.exact_leaf_field_path)) {
      currentVal = leaves.get(decision.exact_leaf_field_path);
    }
  }
  const currentStable = stableLeafValue(currentVal);
  const ownerStable = stableLeafValue(decision.owner_final_value);
  const expectedBaselineSha = fullCardMeta?.baseline_card_sha256 || null;
  const liveBaselineSha = cardSha256(resolved.entry);

  base.production_file = resolved.production_file;
  base.production_mirror_file = resolved.production_mirror_file;
  base.production_array_index = resolved.index;
  base.production_object_de = resolved.production_de;
  base.production_match_kind = resolved.production_match_kind;
  base.production_study_id = resolved.production_study_id || null;
  base.consolidation_baseline_card_sha256 = expectedBaselineSha;
  base.live_production_card_sha256 = liveBaselineSha;
  base.current_value = currentVal === undefined ? null : currentVal;
  base.current_sha256 = leafValueSha(currentVal);

  if (expectedBaselineSha && liveBaselineSha !== expectedBaselineSha) {
    return {
      ...base,
      prep_classification: "BLOCKED_CURRENT_DRIFT",
      action_type: "BLOCKED",
      block_reason: "production_card_sha_differs_from_consolidation_baseline",
    };
  }

  if (decision.explicit_intentional_deletion && ownerStable === "") {
    return {
      ...base,
      prep_classification: "EXPLICIT_DELETE_READY",
      action_type: "EXPLICIT_DELETE",
    };
  }

  if (currentStable === ownerStable) {
    return {
      ...base,
      prep_classification: "ALREADY_EQUALS_OWNER_NEW",
      action_type: "NOOP",
    };
  }

  const schema = schemaAllowsWrite(leafSurface, decision.exact_leaf_field_path);
  if (!schema.ok) {
    return {
      ...base,
      prep_classification: "BLOCKED_SCHEMA_MISMATCH",
      action_type: "BLOCKED",
      block_reason: schema.reason,
    };
  }

  const pathMissing = currentVal === undefined || currentVal === null;
  return {
    ...base,
    prep_classification: "READY_EXACT_CURRENT_MATCH",
    action_type: pathMissing ? "ADD" : "REPLACE",
  };
}

function mergeStudyPreserveDe(prodStudy, postStudy) {
  const out = prodStudy && typeof prodStudy === "object" ? deepCloneJson(prodStudy) : {};
  const post = postStudy && typeof postStudy === "object" ? postStudy : {};
  for (const [k, v] of Object.entries(post)) {
    if (k === "examples" && Array.isArray(v)) {
      out.examples = out.examples || [];
      for (let i = 0; i < v.length; i += 1) {
        const postEx = v[i];
        if (!out.examples[i]) out.examples[i] = {};
        const prodDe = out.examples[i].de;
        out.examples[i] = { ...out.examples[i], ...postEx };
        if (prodDe !== undefined) out.examples[i].de = prodDe;
      }
      continue;
    }
    out[k] = deepCloneJson(v);
  }
  return out;
}

function applyPostOwnerCardToProductionEntry(prodEntry, postOwnerCard) {
  const out = deepCloneJson(prodEntry);
  const post = normalizePostOwnerCard(deepCloneJson(postOwnerCard));
  out.lv = post.lv;
  if (post.study) {
    out.study = mergeStudyPreserveDe(out.study, post.study);
  }
  return out;
}

function buildFullCardAtomicRows(fullCardsFromPlan, leafRowsByCard, leafByKey) {
  return fullCardsFromPlan.map((fc) => {
    const ck = cardKey(fc.target_language, fc.canonical_card_object_id);
    const cardLeaves = leafRowsByCard.get(ck) || [];
    const blocked = cardLeaves.filter((r) =>
      [
        "BLOCKED_CURRENT_DRIFT",
        "BLOCKED_TARGET_MISSING",
        "BLOCKED_TARGET_AMBIGUOUS",
        "BLOCKED_SCHEMA_MISMATCH",
      ].includes(r.prep_classification)
    );
    const postOwner = fc.post_owner_card;
    const resolved = resolveProductionTargetStrict(fc.target_language, fc.canonical_card_object_id);
    let beforeSha = null;
    let afterSha = null;
    let atomicStatus = "BLOCKED";
    let blockReason = blocked.length ? blocked[0].prep_classification : null;

    if (resolved.ok && fc.status === "READY" && postOwner) {
      beforeSha = cardSha256(resolved.entry);
      const planned = applyPostOwnerCardToProductionEntry(resolved.entry, postOwner);
      afterSha = cardSha256(planned);
      if (blocked.length === 0 && beforeSha === fc.baseline_card_sha256) {
        atomicStatus = "ATOMIC_READY";
      } else if (blocked.length) {
        atomicStatus = "BLOCKED";
        blockReason = blockReason || "leaf_blockers_present";
      } else if (beforeSha !== fc.baseline_card_sha256) {
        atomicStatus = "BLOCKED";
        blockReason = "BLOCKED_CURRENT_DRIFT";
      } else {
        atomicStatus = "ATOMIC_READY";
      }
    } else {
      blockReason = blockReason || fc.block_reason || "full_card_not_ready";
    }

    const deExamplesBefore =
      resolved.ok && resolved.entry?.study?.examples
        ? resolved.entry.study.examples.map((e) => e?.de)
        : [];
    const deExamplesAfter =
      resolved.ok && postOwner?.study?.examples
        ? postOwner.study.examples.map((e) => e?.de)
        : deExamplesBefore;

    return {
      target_language: fc.target_language,
      canonical_card_object_id: fc.canonical_card_object_id,
      ordinal: fc.ordinal,
      plan_status: fc.status,
      atomic_status: atomicStatus,
      block_reason: blockReason,
      baseline_card_sha256: fc.baseline_card_sha256,
      post_owner_card_sha256: fc.post_owner_card_sha256,
      production_before_card_sha256: beforeSha,
      production_after_planned_card_sha256: afterSha,
      de_examples_order_preserved: JSON.stringify(deExamplesBefore) === JSON.stringify(deExamplesAfter),
      leaf_count: cardLeaves.length,
      leaf_blocked_count: blocked.length,
      post_owner_card: postOwner || null,
    };
  });
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

  const fullCardByKey = new Map();
  for (const fc of applyPlan.full_cards || []) {
    fullCardByKey.set(cardKey(fc.target_language, fc.canonical_card_object_id), fc);
  }

  const leafRows = [];
  const targetKeyCounts = new Map();
  for (const d of leafDecisions) {
    targetKeyCounts.set(d.leaf_target_key, (targetKeyCounts.get(d.leaf_target_key) || 0) + 1);
  }

  for (const d of leafDecisions) {
    const fc = fullCardByKey.get(cardKey(d.target_language, d.canonical_card_object_id));
    const row = classifyLeafRow(d, fc);
    if ((targetKeyCounts.get(d.leaf_target_key) || 0) > 1) {
      row.target_unique = false;
      row.prep_classification = "BLOCKED_TARGET_AMBIGUOUS";
      row.action_type = "BLOCKED";
      row.block_reason = "duplicate_leaf_target_key";
    }
    leafRows.push(row);
  }

  const leafRowsByCard = new Map();
  for (const r of leafRows) {
    const ck = cardKey(r.target_language, r.canonical_card_object_id);
    if (!leafRowsByCard.has(ck)) leafRowsByCard.set(ck, []);
    leafRowsByCard.get(ck).push(r);
  }

  const fullCardRows = buildFullCardAtomicRows(applyPlan.full_cards || [], leafRowsByCard, null);

  const classificationCounts = {};
  for (const r of leafRows) {
    classificationCounts[r.prep_classification] = (classificationCounts[r.prep_classification] || 0) + 1;
  }

  const langs = new Set(leafRows.map((r) => r.target_language));
  const productionFiles = new Set();
  for (const lang of langs) {
    productionFiles.add(productionFileRel(lang));
    productionFiles.add(productionMirrorRel(lang));
  }

  const blockers = leafRows.filter((r) => r.action_type === "BLOCKED");
  const blockerByType = {};
  for (const b of blockers) {
    const k = b.prep_classification;
    blockerByType[k] = (blockerByType[k] || 0) + 1;
  }

  fs.mkdirSync(PREP_DIR, { recursive: true });

  const mapping = {
    schema_version: 1,
    generated_at: generatedAt,
    mode: "PRODUCTION_COPY_ONLY_PREP",
    origin_main_sha: identity.originMain,
    prep_branch_head_sha: headSha,
    consolidation_manifest_sha256: identity.manifestSha,
    consolidation_proof_sha256: identity.proofSha,
    source_apply_plan: `reports/g2-a1-owner/consolidation/final/${PREFIX}-PRODUCTION-APPLY-PLAN.json`,
    leaf_decisions_count: leafRows.length,
    full_cards_count: fullCardRows.length,
    classification_counts: classificationCounts,
    production_language_count: langs.size,
    production_file_count: productionFiles.size,
    duplicate_target_keys: [...targetKeyCounts.values()].filter((c) => c > 1).length,
    explicit_delete_count: leafRows.filter((r) => r.action_type === "EXPLICIT_DELETE").length,
    empty_owner_new_count: leafRows.filter((r) => stableLeafValue(r.owner_new_value) === "").length,
    leaf_rows: leafRows,
    full_cards: fullCardRows,
  };

  const mappingPath = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`);
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2) + "\n");

  const blockersDoc = {
    schema_version: 1,
    generated_at: generatedAt,
    blocked_count: blockers.length,
    blocked_by_classification: blockerByType,
    rows: blockers.map((b) => ({
      leaf_target_key: b.leaf_target_key,
      prep_classification: b.prep_classification,
      block_reason: b.block_reason,
      production_file: b.production_file,
    })),
  };
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-BLOCKERS.json`),
    JSON.stringify(blockersDoc, null, 2) + "\n"
  );

  const prepProof = {
    schema_version: 1,
    generated_at: generatedAt,
    origin_main_sha: identity.originMain,
    prep_branch_head_sha: headSha,
    consolidation_manifest_sha256: identity.manifestSha,
    consolidation_proof_sha256: identity.proofSha,
    gates: identity.gates,
    leaf_decisions_count: LEAF_COUNT,
    apply_eligible: LEAF_COUNT,
    classification_counts: classificationCounts,
    production_language_count: langs.size,
    production_file_count: productionFiles.size,
    blocked_count: blockers.length,
    ready_count: classificationCounts.READY_EXACT_CURRENT_MATCH || 0,
    already_equals_count: classificationCounts.ALREADY_EQUALS_OWNER_NEW || 0,
    full_cards_atomic_ready: fullCardRows.filter((c) => c.atomic_status === "ATOMIC_READY").length,
    full_cards_blocked: fullCardRows.filter((c) => c.atomic_status === "BLOCKED").length,
    production_apply_not_executed: true,
    pass: blockers.length === 0,
    classification:
      blockers.length === 0
        ? "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_PACKAGE_READY_AWAITING_OWNER_AUTHORIZATION"
        : "A1_LRB_001_103_PRODUCTION_COPY_ONLY_APPLY_PACKAGE_BLOCKED",
    next_action:
      blockers.length === 0
        ? "OWNER_VERIFY_AND_AUTHORIZE_PRODUCTION_COPY_ONLY_APPLY"
        : "RESOLVE_EXACT_TECHNICAL_BLOCKERS",
  };
  fs.writeFileSync(
    path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`),
    JSON.stringify(prepProof, null, 2) + "\n"
  );

  const artifactPaths = [
    `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`,
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
    blockers,
    fullCardRows,
    langs,
    artifactPaths,
    generatedAt,
    headSha,
    identity,
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
    `| full cards ATOMIC_READY | ${prepProof.full_cards_atomic_ready} |`,
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
  buildPrepPackage,
  writePrepManifest,
  writeSummary,
  hashProductionFileSet,
  applyPostOwnerCardToProductionEntry,
  resolveProductionTargetStrict,
  loadDecisionsFromManifest,
  assertSourceIdentityGates,
};
