#!/usr/bin/env node
"use strict";

const { leafValueSha, stableLeafValue, reconstructDecisionLeaves, leafTargetKey } =
  require("./g2-a1-lrb-leaf-reconstruction");

const CANONICAL_LEAF_RE =
  /^(lv|study\.(translation|sectionAccents(\[\d+])?|explanation(\[\d+])?|examples(\[\d+])?\.lv|comparison(\[\d+])?\.(meaning|example|word)|tip(\.text|\[\d+])?|important(\[\d+])?))$/;

function isCanonicalLeafFieldPath(path) {
  const p = String(path || "").trim();
  if (!p) return false;
  if (/[;,]/.test(p)) return false;
  if (/^\s*;\s*/.test(p) || /\blv\s*;\s*study/i.test(p)) return false;
  if (/\.(explanation|important)\[\d+\]\.(explanation|important)/.test(p)) return false;
  return CANONICAL_LEAF_RE.test(p);
}

function splitCompoundLeafFieldPath(path) {
  return String(path || "")
    .split(/[;,]/)
    .map((s) => s.trim())
    .filter((s) => isCanonicalLeafFieldPath(s));
}

function authorizeEmptyFinalValue(version) {
  if (version.leaf_value != null && String(version.leaf_value) !== "") {
    return { allowed: true, explicit_intentional_deletion: false, evidence: null };
  }
  const evidence = {};
  if (version.owner_new_mode === "empty") {
    evidence.owner_new_mode = "empty";
    return { allowed: true, explicit_intentional_deletion: true, evidence };
  }
  const note = String(version.owner_note || "");
  if (/CONFIRMED_FIELD_ABSENT|NON_ACTIONABLE|no writable target/i.test(note)) {
    evidence.owner_note = note.slice(0, 200);
    return { allowed: true, explicit_intentional_deletion: true, evidence };
  }
  const pre = version.pre_leaf_value;
  if (pre == null || pre === "") {
    evidence.unchanged_absent_in_reconstruction = true;
    return { allowed: true, explicit_intentional_deletion: true, evidence };
  }
  if (/DELETE|DZĒST|REMOVE|ABSENT|Tīša|tīša/i.test(note)) {
    evidence.owner_note = note.slice(0, 200);
    return { allowed: true, explicit_intentional_deletion: true, evidence };
  }
  return { allowed: false, explicit_intentional_deletion: false, evidence: { reason: "unauthorized_empty" } };
}

function rowFromVersion(v) {
  return {
    languages: v.target_language,
    card_object_id: v.card_object_id_raw || v.card_object_id,
    field_path: v.field_path_raw,
    owner_new: v.owner_new_payload,
    owner_note: v.owner_note || "",
    owner_status: v.owner_status || "",
  };
}

function expandVersionToCanonicalLeaves(v) {
  const rec = reconstructDecisionLeaves(rowFromVersion(v));
  if (!rec.ok) return [];
  return rec.decidedLeaves.filter((l) => isCanonicalLeafFieldPath(l.leaf_field_path));
}

function buildCanonicalVersionIndex(leafVersionsByKey) {
  const index = new Map();

  function pushVersion(leafKey, version) {
    if (!index.has(leafKey)) index.set(leafKey, []);
    index.get(leafKey).push(version);
  }

  for (const [leafKey, versions] of leafVersionsByKey) {
    const parts = leafKey.split("|");
    const lang = parts[0];
    const card = parts[1];
    const fieldPath = parts.slice(2).join("|");

    if (isCanonicalLeafFieldPath(fieldPath)) {
      for (const v of versions) pushVersion(leafKey, v);
      continue;
    }

    for (const v of versions) {
      for (const leaf of expandVersionToCanonicalLeaves(v)) {
        const ck = leafTargetKey(lang, card, leaf.leaf_field_path);
        pushVersion(ck, {
          ...v,
          leaf_field_path: leaf.leaf_field_path,
          leaf_value: leaf.leaf_value,
          leaf_value_sha256: leaf.leaf_value_sha256,
          expanded_from_compound_path: fieldPath,
        });
      }
    }
  }

  return index;
}

const ALLOWED_STUDY_KEYS = new Set([
  "translation",
  "explanation",
  "examples",
  "comparison",
  "tip",
  "important",
  "sectionAccents",
]);

function normalizePostOwnerCard(card) {
  if (!card || typeof card !== "object") return card;
  if (card.lv != null && typeof card.lv !== "string") card.lv = String(card.lv);
  if (!card.study) return card;
  const study = card.study;
  if (study.examples && typeof study.examples === "object" && !Array.isArray(study.examples)) {
    if (Object.keys(study.examples).every((k) => k === "lv")) {
      study.examples = [{ lv: String(study.examples.lv ?? "") }];
    }
  }
  if (study.comparison && typeof study.comparison === "object" && !Array.isArray(study.comparison)) {
    study.comparison = [study.comparison];
  }
  if (study.tip && typeof study.tip === "object" && !Array.isArray(study.tip) && study.tip.text == null) {
    study.tip = [study.tip];
  }
  for (const key of ["explanation", "important", "examples"]) {
    if (study[key] === "") {
      study[key] = [];
      continue;
    }
    if (typeof study[key] === "string") {
      const raw = study[key].trim();
      if ((raw.startsWith("[") && raw.endsWith("]")) || (raw.startsWith("{") && raw.endsWith("}"))) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) study[key] = parsed;
        } catch {
          /* keep string; validator will flag */
        }
      } else if (raw.length) {
        study[key] = [study[key]];
      }
    }
  }
  return card;
}

function validatePostOwnerCard(card, cardKey, errors) {
  normalizePostOwnerCard(card);
  if (!card || typeof card !== "object" || Array.isArray(card)) {
    errors.push(`${cardKey}:root_not_object`);
    return;
  }
  for (const k of Object.keys(card)) {
    if (k !== "lv" && k !== "study") errors.push(`${cardKey}:unknown_top_level:${k}`);
  }
  if (card.lv != null && typeof card.lv !== "string") {
    errors.push(`${cardKey}:lv_not_string`);
  }
  const study = card.study;
  if (study == null) return;
  if (typeof study !== "object" || Array.isArray(study)) {
    errors.push(`${cardKey}:study_not_object`);
    return;
  }
  for (const k of Object.keys(study)) {
    if (!ALLOWED_STUDY_KEYS.has(k)) errors.push(`${cardKey}:unknown_study_key:${k}`);
  }
  if (study.explanation != null) {
    if (!Array.isArray(study.explanation)) errors.push(`${cardKey}:explanation_not_array`);
    else {
      for (let i = 0; i < study.explanation.length; i += 1) {
        const item = study.explanation[i];
        if (item != null && typeof item === "object") {
          errors.push(`${cardKey}:explanation_nested_object:${i}`);
        }
      }
    }
  }
  if (study.important != null) {
    if (!Array.isArray(study.important)) errors.push(`${cardKey}:important_not_array`);
    else {
      for (let i = 0; i < study.important.length; i += 1) {
        const item = study.important[i];
        if (item != null && typeof item === "object") {
          errors.push(`${cardKey}:important_nested_object:${i}`);
        }
      }
    }
  }
  if (study.examples != null) {
    if (!Array.isArray(study.examples)) errors.push(`${cardKey}:examples_not_array`);
    else {
      for (let i = 0; i < study.examples.length; i += 1) {
        const ex = study.examples[i];
        if (ex == null) continue;
        if (typeof ex !== "object" || Array.isArray(ex)) {
          errors.push(`${cardKey}:examples_item_not_object:${i}`);
          continue;
        }
        for (const ek of Object.keys(ex)) {
          if (ek !== "lv") errors.push(`${cardKey}:examples_unknown_key:${i}:${ek}`);
        }
      }
    }
  }
}

function verifyDecisionMatchesSource(decision, winner) {
  const expectedSha = leafValueSha(decision.owner_final_value);
  if (expectedSha !== decision.leaf_value_sha256) {
    return { ok: false, reason: "leaf_value_sha_mismatch" };
  }
  if (leafValueSha(winner.leaf_value) !== expectedSha) {
    return { ok: false, reason: "winner_leaf_mismatch" };
  }
  return { ok: true };
}

module.exports = {
  isCanonicalLeafFieldPath,
  splitCompoundLeafFieldPath,
  authorizeEmptyFinalValue,
  buildCanonicalVersionIndex,
  normalizePostOwnerCard,
  validatePostOwnerCard,
  verifyDecisionMatchesSource,
  stableLeafValue,
  leafValueSha,
  leafTargetKey,
};
