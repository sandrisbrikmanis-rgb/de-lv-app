#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { flattenCardToLeaves, setByPath } = require("./g2-a1-lrb-leaf-reconstruction");
const {
  mechanicalNormalizeTargetLanguageCard,
  deepCloneJson,
  normalizePostOwnerCard,
} = require("./g2-a1-lrb-consolidation-normalize");

function sha256(obj) {
  return crypto.createHash("sha256").update(typeof obj === "string" ? obj : JSON.stringify(obj)).digest("hex");
}

function studyStructureKeyCount(card) {
  if (!card?.study || typeof card.study !== "object") return 0;
  return Object.keys(card.study).length;
}

function isSyntheticCardSkeleton(card) {
  if (!card || typeof card !== "object") return true;
  const leafCount = flattenCardToLeaves(card).size;
  const studyKeys = studyStructureKeyCount(card);
  const lvEmpty = card.lv == null || String(card.lv) === "";
  return leafCount === 0 && lvEmpty && studyKeys === 0;
}

function isPartialPatchBaseline(record) {
  if (!record?.post_owner_card_target) return true;
  if (record.expanded_standard_full_card || record.full_composite_scope) return false;
  return isSyntheticCardSkeleton(record.post_owner_card_target);
}

function createGalaCardsByBatchLoader({ resolveGalaRef, parseJsonAt, batchNum, batchId }) {
  const fileCache = new Map();
  return function loadGalaBaselineCard(batch_id, lang, cardId) {
  const n = batchNum(batch_id);
  const resolved = resolveGalaRef(n);
  if (!resolved?.branch) return null;
  const batch = batchId(n);
  const rel = `reports/g2-a1-owner/batches-owner-review/${batch}/${batch}-gala-cards.json`;
  const cacheKey = `${resolved.branch}|${rel}`;
  if (!fileCache.has(cacheKey)) {
    fileCache.set(cacheKey, parseJsonAt(resolved.branch, rel));
  }
  const galaCards = fileCache.get(cacheKey);
  const raw = galaCards?.cards?.find(
    (c) => String(c.lang).trim() === lang && String(c.cardId).split("|")[0] === cardId
  );
  if (!raw?.currentGalaCard) return null;
  const card = mechanicalNormalizeTargetLanguageCard(deepCloneJson(raw.currentGalaCard));
  return {
    card,
    baseline_source_path: rel,
    baseline_source_sha256: null,
    baseline_source_batch: batch_id,
    baseline_source_kind: "gala_cards_currentGalaCard",
  };
  };
}

function baselineFromLeafDecisionPool(leafDecisionsForCard) {
  const card = { lv: "", study: {} };
  const sorted = [...leafDecisionsForCard].sort((a, b) => {
    const ba = String(a.source_batch || "");
    const bb = String(b.source_batch || "");
    return ba.localeCompare(bb);
  });
  for (const d of sorted) {
    if (d.owner_final_value == null || String(d.owner_final_value) === "") continue;
    applyLeafToCard(card, d.exact_leaf_field_path, d.owner_final_value);
  }
  return mechanicalNormalizeTargetLanguageCard(card);
}

function pickFullCardBaseline(ck, records, galaLoader, leafDecisionsForCard = []) {
  const [target_language, canonical_card_object_id] = ck.split("|");
  const candidates = [];

  for (const r of records) {
    if (!r.post_owner_card_target) continue;
    const card = mechanicalNormalizeTargetLanguageCard(deepCloneJson(r.post_owner_card_target));
    candidates.push({
      record: r,
      card,
      leaf_count: flattenCardToLeaves(card).size,
      study_keys: studyStructureKeyCount(card),
      partial: isPartialPatchBaseline({ ...r, post_owner_card_target: card }),
    });
  }

  const needGala = !candidates.length || candidates.every((c) => c.partial);
  if (needGala) {
    const batches = [...new Set(records.map((r) => r.batch_id))].sort().reverse();
    for (const batch_id of batches) {
      const gala = galaLoader(batch_id, target_language, canonical_card_object_id);
      if (!gala?.card) continue;
      candidates.push({
        record: records.find((r) => r.batch_id === batch_id) || records[0],
        card: gala.card,
        leaf_count: flattenCardToLeaves(gala.card).size,
        study_keys: studyStructureKeyCount(gala.card),
        partial: false,
        gala,
      });
      if (!isSyntheticCardSkeleton(gala.card)) break;
    }
  }

  if (!candidates.length && leafDecisionsForCard.length) {
    const pooled = baselineFromLeafDecisionPool(leafDecisionsForCard);
    if (!isSyntheticCardSkeleton(pooled)) {
      candidates.push({
        record: records[0] || null,
        card: pooled,
        leaf_count: flattenCardToLeaves(pooled).size,
        study_keys: studyStructureKeyCount(pooled),
        partial: false,
        pooled: true,
      });
    }
  }

  if (!candidates.length) return null;

  candidates.sort((a, b) => {
    if (a.partial !== b.partial) return a.partial ? 1 : -1;
    const lc = b.leaf_count - a.leaf_count;
    if (lc !== 0) return lc;
    return b.study_keys - a.study_keys;
  });

  const best = candidates[0];
  const src = best.gala ||
    (best.pooled
      ? {
          baseline_source_path: "consolidated_leaf_decision_pool",
          baseline_source_sha256: null,
          baseline_source_batch: best.record?.batch_id || null,
          baseline_source_kind: "leaf_decision_pool_reconstruction",
        }
      : {
          baseline_source_path: best.record?.decision_source_path,
          baseline_source_sha256: best.record?.decision_source_sha256,
          baseline_source_batch: best.record?.batch_id,
          baseline_source_kind: best.partial ? "batch_row_post_owner_partial" : "batch_row_post_owner",
        });

  return {
    baselineCard: best.card,
    baseline_source_path: src.baseline_source_path,
    baseline_source_sha256: src.baseline_source_sha256,
    baseline_source_batch: src.baseline_source_batch,
    baseline_source_kind: src.baseline_source_kind,
    baseline_card_sha256: sha256(best.card),
    is_full_baseline:
      !isSyntheticCardSkeleton(best.card) &&
      (flattenCardToLeaves(best.card).size > 0 || studyStructureKeyCount(best.card) > 0),
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

function countDroppedBaselineLeaves(baselineCard, finalCard, applyList) {
  let dropped = 0;
  const baselineHadLv = baselineCard?.lv !== undefined && baselineCard?.lv !== null;
  const finalHasLv = finalCard?.lv !== undefined && finalCard?.lv !== null;
  if (baselineHadLv && !finalHasLv) {
    const touched = applyList.some((d) => d.exact_leaf_field_path === "lv" && d.apply_eligible);
    if (!touched) dropped += 1;
  }
  const bStudy = baselineCard?.study && typeof baselineCard.study === "object" ? baselineCard.study : {};
  const fStudy = finalCard?.study && typeof finalCard.study === "object" ? finalCard.study : {};
  for (const key of Object.keys(bStudy)) {
    if (Object.prototype.hasOwnProperty.call(fStudy, key)) continue;
    const touched = applyList.some(
      (d) =>
        d.apply_eligible &&
        (d.exact_leaf_field_path === `study.${key}` ||
          d.exact_leaf_field_path.startsWith(`study.${key}[`) ||
          d.exact_leaf_field_path.startsWith(`study.${key}.`))
    );
    if (!touched) dropped += 1;
  }
  return dropped;
}

function countChangedOverlayLeaves(baselineCard, finalCard) {
  const baseLeaves = flattenCardToLeaves(baselineCard);
  const finalLeaves = flattenCardToLeaves(finalCard);
  let changed = 0;
  for (const [path, val] of finalLeaves) {
    if (!baseLeaves.has(path) || baseLeaves.get(path) !== val) changed += 1;
  }
  return changed;
}

function buildFullCardsWithBaseline(
  leafDecisionsApply,
  batchRowRecords,
  { batchNum, resolveGalaRef, parseJsonAt, batchId },
  allLeafDecisions = []
) {
  const loadGalaBaselineCard = createGalaCardsByBatchLoader({
    resolveGalaRef,
    parseJsonAt,
    batchNum,
    batchId,
  });
  const galaCache = new Map();
  const galaLoader = (batch_id, lang, cardId) => {
    const cacheKey = `${batch_id}|${lang}|${cardId}`;
    if (galaCache.has(cacheKey)) return galaCache.get(cacheKey);
    const loaded = loadGalaBaselineCard(batch_id, lang, cardId);
    galaCache.set(cacheKey, loaded);
    return loaded;
  };

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

  const cards = [];
  const metrics = {
    full_card_baseline_missing: 0,
    full_card_overlay_failures: 0,
    full_card_source_sha_failures: 0,
    incomplete_full_cards: 0,
    silently_dropped_baseline_fields: 0,
    unknown_baseline_fields_unresolved: 0,
    ready_cards_with_empty_lv: 0,
    ready_cards_with_unjustified_empty_study: 0,
    ready_cards_without_full_baseline: 0,
    dropped_baseline_leaf_fields: 0,
  };

  for (const ck of cardKeys) {
    const [target_language, canonical_card_object_id] = ck.split("|");
    const records = recordsByCard.get(ck) || [];
    const leafPool = allLeafDecisions.filter(
      (d) => `${d.target_language}|${d.canonical_card_object_id}` === ck
    );
    let baselinePick = pickFullCardBaseline(ck, records, galaLoader, leafPool);
    if (baselinePick && !baselinePick.is_full_baseline && leafPool.length) {
      const pooled = baselineFromLeafDecisionPool(leafPool);
      if (!isSyntheticCardSkeleton(pooled)) {
        baselinePick = {
          baselineCard: pooled,
          baseline_source_path: "consolidated_leaf_decision_pool",
          baseline_source_sha256: null,
          baseline_source_batch: records[0]?.batch_id || null,
          baseline_source_kind: "leaf_decision_pool_reconstruction",
          baseline_card_sha256: sha256(pooled),
          is_full_baseline: true,
        };
      }
    }
    const applyList = applyByCard.get(ck) || [];

    if (!baselinePick?.baselineCard) {
      metrics.full_card_baseline_missing += 1;
      metrics.incomplete_full_cards += 1;
      cards.push({
        target_language,
        canonical_card_object_id,
        status: "BLOCKED",
        block_reason: "full_card_baseline_missing",
      });
      continue;
    }

    const baselineCard = normalizePostOwnerCard(deepCloneJson(baselinePick.baselineCard));
    let postCard = deepCloneJson(baselinePick.baselineCard);
    const baselineLv = baselineCard.lv;
    const contributing_batches = new Set([baselinePick.baseline_source_batch]);

    for (const d of applyList) {
      applyLeafToCard(postCard, d.exact_leaf_field_path, d.owner_final_value);
      contributing_batches.add(d.source_batch);
    }
    postCard = normalizePostOwnerCard(postCard);

    const droppedLeaves = countDroppedBaselineLeaves(baselineCard, postCard, applyList);
    const changedLeaves = countChangedOverlayLeaves(baselineCard, postCard);
    const preservedLeaves = flattenCardToLeaves(baselineCard).size;

    metrics.dropped_baseline_leaf_fields += droppedLeaves;

    let blockReason = null;
    if (!baselinePick.is_full_baseline) {
      metrics.ready_cards_without_full_baseline += 1;
      blockReason = "ready_cards_without_full_baseline";
    }
    if (droppedLeaves > 0) blockReason = blockReason || "dropped_baseline_leaf_fields";

    let overlayFailed = false;
    for (const d of applyList) {
      if (String(d.owner_final_value) !== "") continue;
      if (!d.explicit_intentional_deletion || !d.apply_eligible) {
        overlayFailed = true;
        break;
      }
    }
    if (
      baselineLv &&
      String(baselineLv).length &&
      postCard.lv === "" &&
      !applyList.some((d) => d.exact_leaf_field_path === "lv" && d.explicit_intentional_deletion)
    ) {
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
        baseline_card_sha256: baselinePick.baseline_card_sha256,
      });
      continue;
    }

    if (blockReason) {
      metrics.incomplete_full_cards += 1;
      cards.push({
        target_language,
        canonical_card_object_id,
        status: "BLOCKED",
        block_reason: blockReason,
        baseline_card_sha256: baselinePick.baseline_card_sha256,
      });
      continue;
    }

    const emptyLv = postCard.lv == null || String(postCard.lv) === "";
    const baselineHadLv =
      baselineCard.lv != null && String(baselineCard.lv).length > 0;
    const hasLvDelete = applyList.some(
      (d) => d.exact_leaf_field_path === "lv" && d.explicit_intentional_deletion && d.apply_eligible
    );
    const syntheticEmptyLv = emptyLv && baselineHadLv && !hasLvDelete;
    if (syntheticEmptyLv) metrics.ready_cards_with_empty_lv += 1;

    const studyEmpty =
      !postCard.study ||
      (typeof postCard.study === "object" && Object.keys(postCard.study).length === 0);
    const baselineHadStudy =
      baselineCard.study && typeof baselineCard.study === "object" && Object.keys(baselineCard.study).length > 0;
    if (studyEmpty && baselineHadStudy && flattenCardToLeaves(postCard).size === 0) {
      metrics.ready_cards_with_unjustified_empty_study += 1;
    }

    if (syntheticEmptyLv) {
      metrics.incomplete_full_cards += 1;
      cards.push({
        target_language,
        canonical_card_object_id,
        status: "BLOCKED",
        block_reason: "ready_cards_with_empty_lv",
      });
      continue;
    }

    cards.push({
      target_language,
      canonical_card_object_id,
      status: "READY",
      post_owner_card: postCard,
      baseline_source_path: baselinePick.baseline_source_path,
      baseline_source_sha256: baselinePick.baseline_source_sha256,
      baseline_source_batch: baselinePick.baseline_source_batch,
      baseline_source_kind: baselinePick.baseline_source_kind,
      baseline_card_sha256: baselinePick.baseline_card_sha256,
      full_card_source_sha256: baselinePick.baseline_card_sha256,
      overlay_leaf_keys: applyList.map((d) => d.exact_leaf_field_path),
      post_owner_card_sha256: sha256(postCard),
      preserved_baseline_leaf_count: preservedLeaves,
      changed_leaf_count: changedLeaves,
      dropped_baseline_leaf_count: droppedLeaves,
      contributing_batches: [...contributing_batches].sort(),
      leaf_overlay_count: applyList.length,
    });
  }

  return { cards, metrics };
}

module.exports = {
  buildFullCardsWithBaseline,
  isSyntheticCardSkeleton,
  isPartialPatchBaseline,
  pickFullCardBaseline,
  createGalaCardsByBatchLoader,
};
