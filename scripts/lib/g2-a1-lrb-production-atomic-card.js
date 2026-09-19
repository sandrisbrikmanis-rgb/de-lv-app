#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");
const { sha256, cardKey, loadProductionA1Words } = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const {
  flattenCardToLeaves,
  stableLeafValue,
  leafValueSha,
} = require("./g2-a1-lrb-leaf-reconstruction");
const {
  mechanicalNormalizeTargetLanguageCard,
  extractTargetLanguageCard,
  normalizePostOwnerCard,
  deepCloneJson,
} = require("./g2-a1-lrb-consolidation-normalize");

const A1_STUDY_ID_ONLY_CARD_KEYS = new Set([
  "fi|a1-ab",
  "fi|a1-aber",
  "fi|a1-also",
  "fi|a1-besuch",
  "fi|a1-besuchen",
  "fi|a1-fahren",
  "fi|a1-nehmen",
  "fi|a1-passen",
  "fi|a1-sich",
  "nn|a1-neu",
  "nn|a1-verstehen",
  "nn|a1-wie",
  "sk|a1-wie",
]);

const mirrorCache = new Map();

function productionFileRel(lang) {
  return `data/${lang}/a1.js`;
}

function productionMirrorRel(lang) {
  return `www/data/${lang}/a1.js`;
}

function loadWordsFromRel(rel) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) return null;
  const code = fs.readFileSync(abs, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS || null;
}

function loadMirrorWords(lang) {
  if (mirrorCache.has(lang)) return mirrorCache.get(lang);
  const words = loadWordsFromRel(productionMirrorRel(lang));
  mirrorCache.set(lang, words);
  return words;
}

function requiresStudyIdOnly(_canonicalCardObjectId, ck) {
  return A1_STUDY_ID_ONLY_CARD_KEYS.has(ck);
}

function resolveProductionTargetStrict(lang, canonicalCardObjectId, options = {}) {
  const ck = cardKey(lang, canonicalCardObjectId);
  const studyIdOnly = options.studyIdOnly || requiresStudyIdOnly(canonicalCardObjectId, ck);
  const words = loadProductionA1Words(lang);
  if (!words) {
    return {
      ok: false,
      classification: "BLOCKED_TARGET_MISSING",
      detail: "production_lang_file_missing",
    };
  }
  const id = String(canonicalCardObjectId).trim();

  if (!studyIdOnly) {
    const byDe = [];
    for (let i = 0; i < words.length; i += 1) {
      const de = String(words[i]?.de ?? "").trim();
      if (de === id) byDe.push({ index: i, entry: words[i], production_de: de, match_kind: "de" });
    }
    if (byDe.length > 1) {
      return { ok: false, classification: "BLOCKED_TARGET_AMBIGUOUS", detail: `duplicate_de_count:${byDe.length}` };
    }
    if (byDe.length === 1) {
      return finalizeResolved(byDe[0], lang, words);
    }
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
    return finalizeResolved(byStudyId[0], lang, words);
  }

  return {
    ok: false,
    classification: "BLOCKED_TARGET_MISSING",
    detail: studyIdOnly ? "card_not_found_by_study_id" : "card_not_found_by_de_or_study_id",
  };
}

function finalizeResolved(match, lang, dataWords) {
  const mirrorWords = loadMirrorWords(lang);
  if (!mirrorWords) {
    return { ok: false, classification: "BLOCKED_MIRROR_DRIFT", detail: "mirror_lang_file_missing" };
  }
  const dataEntry = dataWords[match.index];
  const mirrorEntry = mirrorWords[match.index];
  if (!mirrorEntry) {
    return { ok: false, classification: "BLOCKED_MIRROR_DRIFT", detail: "mirror_index_missing" };
  }
  if (JSON.stringify(dataEntry) !== JSON.stringify(mirrorEntry)) {
    return { ok: false, classification: "BLOCKED_MIRROR_DRIFT", detail: "data_www_entry_mismatch" };
  }
  return {
    ok: true,
    index: match.index,
    entry: dataEntry,
    mirror_entry: mirrorEntry,
    production_de: match.production_de,
    production_match_kind: match.match_kind,
    production_study_id: dataEntry?.study?.id ? String(dataEntry.study.id).trim() : null,
    production_file: productionFileRel(lang),
    production_mirror_file: productionMirrorRel(lang),
  };
}

function productionEntrySha256(entry) {
  return sha256(JSON.stringify(entry));
}

function targetLangCardSha256(entry) {
  return sha256(JSON.stringify(mechanicalNormalizeTargetLanguageCard(extractTargetLanguageCard(entry))));
}

function deExampleSequence(entry) {
  return (entry?.study?.examples || []).map((e) => (e?.de != null ? String(e.de) : null));
}

function ownerDeMatchesProduction(ownerCard, prodEntry) {
  const prodEx =
    prodEntry?.study && typeof prodEntry.study === "object" ? prodEntry.study.examples || [] : [];
  const ownerEx =
    ownerCard?.study && typeof ownerCard.study === "object" ? ownerCard.study.examples || [] : [];
  for (let i = 0; i < ownerEx.length; i += 1) {
    const od = ownerEx[i]?.de != null ? String(ownerEx[i].de).trim() : null;
    const pd = prodEx[i]?.de != null ? String(prodEx[i].de).trim() : null;
    if (od !== pd) return false;
  }
  return true;
}

function applyAtomicOwnerApprovedCard(prodEntry, postOwnerCard) {
  const out = deepCloneJson(prodEntry);
  const post = normalizePostOwnerCard(deepCloneJson(postOwnerCard));
  const deBefore = deExampleSequence(out);
  out.lv = post.lv;
  const prodStudy = out.study && typeof out.study === "object" ? out.study : {};
  const postStudy = post.study && typeof post.study === "object" ? post.study : {};
  const newStudy = deepCloneJson(postStudy);
  const preservedId = prodStudy.id;
  const preservedLayout = prodStudy.layout;
  out.study = newStudy;
  if (preservedId != null) out.study.id = preservedId;
  if (preservedLayout != null) out.study.layout = preservedLayout;
  if (Array.isArray(postStudy.examples)) {
    const prodEx = Array.isArray(prodStudy.examples) ? prodStudy.examples : [];
    const mergedExamples = prodEx.map((ex) => deepCloneJson(ex));
    for (let i = 0; i < postStudy.examples.length; i += 1) {
      if (!mergedExamples[i]) mergedExamples[i] = {};
      const preservedDe = mergedExamples[i].de;
      mergedExamples[i] = { ...mergedExamples[i], ...deepCloneJson(postStudy.examples[i]) };
      if (preservedDe !== undefined) mergedExamples[i].de = preservedDe;
    }
    out.study.examples = mergedExamples;
  }
  const deAfter = deExampleSequence(out);
  if (JSON.stringify(deBefore) !== JSON.stringify(deAfter)) {
    throw new Error("de_example_sequence_would_change");
  }
  return out;
}

function leafSchemaWouldBlock(prodEntry, leafPath) {
  const surface = extractTargetLanguageCard(prodEntry);
  const parts = String(leafPath)
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
  let cur = surface;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const p = parts[i];
    const nxt = parts[i + 1];
    if (cur == null) return false;
    if (/^\d+$/.test(nxt) && cur[p] != null && !Array.isArray(cur[p])) return true;
    cur = cur[p];
  }
  return false;
}

function classifyCardAtomic(planCard) {
  const { target_language, canonical_card_object_id, post_owner_card, post_owner_card_sha256 } = planCard;
  const ck = cardKey(target_language, canonical_card_object_id);
  const base = {
    card_key: ck,
    target_language,
    canonical_card_object_id,
    ordinal: planCard.ordinal,
    plan_status: planCard.status,
    baseline_source_kind: planCard.baseline_source_kind || null,
    owner_full_card_fallback_not_used_as_current_proof:
      planCard.baseline_source_kind === "owner_full_card_fallback",
  };

  if (!post_owner_card || planCard.status !== "READY") {
    return {
      ...base,
      atomic_status: "BLOCKED",
      block_reason: planCard.block_reason || "plan_card_not_ready",
      apply_mode: null,
    };
  }

  const ownerNorm = normalizePostOwnerCard(deepCloneJson(post_owner_card));
  const ownerSha = sha256(JSON.stringify(ownerNorm));
  if (post_owner_card_sha256 && ownerSha !== post_owner_card_sha256) {
    return { ...base, atomic_status: "BLOCKED", block_reason: "OWNER_NEW_SHA_MISMATCH", apply_mode: null };
  }

  const resolved = resolveProductionTargetStrict(target_language, canonical_card_object_id);
  if (!resolved.ok) {
    return {
      ...base,
      atomic_status: "BLOCKED",
      block_reason: resolved.classification,
      block_detail: resolved.detail,
      apply_mode: null,
    };
  }

  const currentEntry = deepCloneJson(resolved.entry);
  const currentEntrySha = productionEntrySha256(currentEntry);
  const currentTargetSha = targetLangCardSha256(currentEntry);
  const ownerTargetSha = sha256(JSON.stringify(ownerNorm));

  if (!ownerDeMatchesProduction(ownerNorm, currentEntry)) {
    return {
      ...base,
      atomic_status: "BLOCKED",
      block_reason: "DE_EXAMPLE_ALIGNMENT",
      apply_mode: null,
    };
  }

  let plannedEntry;
  try {
    plannedEntry = applyAtomicOwnerApprovedCard(currentEntry, post_owner_card);
  } catch (e) {
    return {
      ...base,
      atomic_status: "BLOCKED",
      block_reason: "ATOMIC_APPLY_PLAN_FAILED",
      block_detail: String(e.message),
      apply_mode: null,
    };
  }

  const plannedTargetSha = targetLangCardSha256(plannedEntry);
  const alreadyEqual = currentTargetSha === ownerTargetSha;

  let applyMode = "READY_EXACT_CURRENT_MATCH";
  if (A1_STUDY_ID_ONLY_CARD_KEYS.has(ck)) {
    applyMode = "READY_EXACT_PRODUCTION_CARD_SNAPSHOT";
  } else {
    const leaves = flattenCardToLeaves(ownerNorm);
    let schemaTransition = false;
    for (const leafPath of leaves.keys()) {
      if (leafSchemaWouldBlock(currentEntry, leafPath)) {
        schemaTransition = true;
        break;
      }
    }
    if (schemaTransition) applyMode = "READY_ATOMIC_OWNER_APPROVED_SCHEMA_TRANSITION";
  }

  return {
    ...base,
    atomic_status: alreadyEqual ? "ATOMIC_READY_NOOP" : "ATOMIC_READY_APPLY",
    apply_mode: applyMode,
    block_reason: null,
    production_file: resolved.production_file,
    production_mirror_file: resolved.production_mirror_file,
    production_array_index: resolved.index,
    production_object_de: resolved.production_de,
    production_match_kind: resolved.production_match_kind,
    production_study_id: resolved.production_study_id,
    production_current_entry_sha256: currentEntrySha,
    production_current_target_lang_sha256: currentTargetSha,
    owner_new_target_lang_sha256: ownerTargetSha,
    production_planned_entry_sha256: productionEntrySha256(plannedEntry),
    production_planned_target_lang_sha256: plannedTargetSha,
    de_examples_order_preserved: true,
    post_owner_card_sha256: ownerSha,
    current_entry_snapshot: currentEntry,
    owner_new_card: ownerNorm,
    planned_entry_preview: plannedEntry,
  };
}

function leafTraceClassification(cardAtomic, decision) {
  const ownerStable = stableLeafValue(decision.owner_final_value);
  const currentLeaves = flattenCardToLeaves(extractTargetLanguageCard(cardAtomic.current_entry_snapshot));
  const currentVal = currentLeaves.has(decision.exact_leaf_field_path)
    ? currentLeaves.get(decision.exact_leaf_field_path)
    : null;
  const currentStable = stableLeafValue(currentVal);

  if (cardAtomic.atomic_status === "BLOCKED") {
    return {
      prep_classification: cardAtomic.block_reason?.startsWith("BLOCKED") ? cardAtomic.block_reason : "BLOCKED_CARD",
      action_type: "BLOCKED",
      block_reason: cardAtomic.block_reason,
      trace_only: true,
    };
  }

  if (currentStable === ownerStable) {
    return {
      prep_classification: "ALREADY_EQUALS_OWNER_NEW",
      action_type: "NOOP",
      card_apply_mode: cardAtomic.apply_mode,
      trace_only: true,
    };
  }

  return {
    prep_classification: cardAtomic.apply_mode,
    action_type: "ATOMIC_CARD_TRACE",
    card_apply_mode: cardAtomic.apply_mode,
    trace_only: true,
  };
}

function writeJsonMaybeMultipart(baseName, payload, arrayKey, outDirRel) {
  const outDir = path.join(ROOT, outDirRel);
  fs.mkdirSync(outDir, { recursive: true });
  const MAX_BYTES = 4_000_000;
  const rows = arrayKey ? payload[arrayKey] : null;
  if (!rows || JSON.stringify(payload).length <= MAX_BYTES) {
    const rel = `${outDirRel}/${baseName}.json`;
    const raw = JSON.stringify(payload, null, 2) + "\n";
    fs.writeFileSync(path.join(ROOT, rel), raw);
    return { multipart: false, path: rel, sha256: sha256(raw), byte_length: Buffer.byteLength(raw) };
  }
  const staticPayload = { ...payload };
  delete staticPayload[arrayKey];
  const parts = [];
  const CHUNK = 20;
  for (let i = 0; i < rows.length; ) {
    const chunk = rows.slice(i, i + CHUNK);
    const partNum = parts.length + 1;
    const partName = `${baseName}.part-${String(partNum).padStart(3, "0")}.json`;
    const rel = `${outDirRel}/${partName}`;
    const partPayload = { ...staticPayload, [arrayKey]: chunk, part: partNum, part_row_count: chunk.length };
    let raw = JSON.stringify(partPayload, null, 2) + "\n";
    while (Buffer.byteLength(raw) > MAX_BYTES && chunk.length > 1) {
      chunk.pop();
      partPayload[arrayKey] = chunk;
      partPayload.part_row_count = chunk.length;
      raw = JSON.stringify(partPayload, null, 2) + "\n";
    }
    fs.writeFileSync(path.join(ROOT, rel), raw);
    parts.push({
      path: rel,
      sha256: sha256(raw),
      byte_length: Buffer.byteLength(raw),
      row_count: chunk.length,
    });
    i += chunk.length;
  }
  const manifest = {
    multipart: true,
    base_name: baseName,
    parts,
    row_sum: rows.length,
  };
  const manifestRel = `${outDirRel}/${baseName}-MULTIPART-MANIFEST.json`;
  fs.writeFileSync(path.join(ROOT, manifestRel), JSON.stringify(manifest, null, 2) + "\n");
  return { multipart: true, manifest_path: manifestRel, parts, row_sum: rows.length };
}

module.exports = {
  A1_STUDY_ID_ONLY_CARD_KEYS,
  productionFileRel,
  productionMirrorRel,
  resolveProductionTargetStrict,
  applyAtomicOwnerApprovedCard,
  classifyCardAtomic,
  leafTraceClassification,
  productionEntrySha256,
  targetLangCardSha256,
  deExampleSequence,
  writeJsonMaybeMultipart,
  loadWordsFromRel,
};
