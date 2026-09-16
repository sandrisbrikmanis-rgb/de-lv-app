#!/usr/bin/env node
"use strict";

const crypto = require("crypto");

const SEGMENT_SPLIT_RE = /[;,/]|(?:\s+and\s+)|(?:\s+lv\s+)/i;

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function parseJsonSafe(raw) {
  if (raw == null) return null;
  if (typeof raw === "object") return raw;
  const s = String(raw).trim();
  if (!s) return null;
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

function stableLeafValue(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return JSON.stringify(value);
}

function leafValueSha(value) {
  return sha256(stableLeafValue(value));
}

function splitFieldPath(fieldPath) {
  return String(fieldPath || "")
    .split(SEGMENT_SPLIT_RE)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Map Crowdin export keys (a1.card.slug.study.examples[5].native) to G2 leaf paths. */
function crowdinFieldPathToLeaf(fieldPath) {
  const fp = String(fieldPath || "").trim();
  if (!fp) return null;
  const m = fp.match(/\.card\.[^.]+\.(.+)$/i);
  let rel = m ? m[1] : fp;
  if (rel === "native") return "lv";
  return rel.replace(/\.native\b/g, ".lv");
}

function isFlatPatchKey(key) {
  return /\[|\./.test(String(key));
}

function isNestedCardShape(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
  if (obj.study && typeof obj.study === "object") return true;
  const keys = Object.keys(obj);
  if (keys.includes("lv") && keys.some((k) => k.startsWith("study."))) return true;
  return false;
}

function isFullCompositeScope(fieldPath, ownerNote) {
  const fp = String(fieldPath || "").toLowerCase();
  const note = String(ownerNote || "").toLowerCase();
  if (fp === "study" || fp.includes("study.*")) return true;
  if (/lv,\s*study/.test(fp) || /lv;\s*study/.test(fp)) return true;
  const segments = splitFieldPath(fieldPath);
  if (segments.includes("study") || segments.length >= 4) return true;
  if (/piln[āa]\s+composite|piln[āa]\s+kartīte|full.card|labot_full_composite|full_card_target/.test(note)) {
    return true;
  }
  if (/composite kartīte aizvietota|individuāli pārbaudīta lrb-\d+/.test(note)) return true;
  return false;
}

function detectOwnerNewMode(ownerNewRaw, fieldPath, ownerNote) {
  const parsed = parseJsonSafe(ownerNewRaw);
  if (parsed == null) {
    const scalar = String(ownerNewRaw || "").trim();
    if (!scalar) return { mode: "empty", patch: null };
    return { mode: "scalar", patch: scalar };
  }
  if (typeof parsed === "string") return { mode: "scalar", patch: parsed };
  if (Array.isArray(parsed)) return { mode: "scalar_json", patch: parsed };

  const keys = Object.keys(parsed);
  if (keys.some((k) => k.startsWith("study."))) {
    const full = isFullCompositeScope(fieldPath, ownerNote);
    return { mode: full ? "full_composite_card" : "flat_composite_object", patch: parsed };
  }
  const flatKeys = keys.filter(isFlatPatchKey);
  if (flatKeys.length > 0 && flatKeys.length === keys.length) {
    return { mode: "flat_patch", patch: parsed };
  }
  if (isNestedCardShape(parsed)) {
    const full = isFullCompositeScope(fieldPath, ownerNote);
    return { mode: full ? "full_composite_card" : "nested_card", patch: parsed };
  }
  return { mode: "flat_patch", patch: parsed };
}

function tokenizePath(path) {
  const tokens = [];
  const re = /([^[.\]]+)|\[(\d+)\]/g;
  let m;
  const s = String(path);
  while ((m = re.exec(s)) !== null) {
    if (m[1] != null) tokens.push(m[1]);
    else if (m[2] != null) tokens.push(parseInt(m[2], 10));
  }
  return tokens;
}

function setByPath(root, path, value) {
  const tokens = tokenizePath(path);
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

function getByPath(root, path) {
  const parts = String(path).replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let cur = root;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj ?? {}));
}

function flatProductionToCard(flat, deReference) {
  const card = { de: deReference || "", lv: "", study: {} };
  if (!flat || typeof flat !== "object") return card;
  if (flat.lv != null) card.lv = flat.lv;
  for (const [k, v] of Object.entries(flat)) {
    if (k === "lv") continue;
    if (k === "study.translation") card.study.translation = tryParseEmbedded(v);
    else if (k === "study.explanation") card.study.explanation = tryParseEmbedded(v);
    else if (k === "study.examples") card.study.examples = tryParseEmbedded(v);
    else if (k === "study.comparison") card.study.comparison = tryParseEmbedded(v);
    else if (k === "study.tip") card.study.tip = tryParseEmbedded(v);
    else if (k === "study.important") {
      const parsed = tryParseEmbedded(v);
      card.study.important = Array.isArray(parsed) ? parsed : parsed ? [String(parsed)] : [];
    }
    else if (k.startsWith("study.")) setByPath(card, k, tryParseEmbedded(v));
  }
  return card;
}

function tryParseEmbedded(v) {
  if (typeof v !== "string") return v;
  const t = v.trim();
  if ((t.startsWith("[") && t.endsWith("]")) || (t.startsWith("{") && t.endsWith("}"))) {
    const p = parseJsonSafe(t);
    if (p != null) return p;
  }
  return v;
}

function nestedPatchToCard(patch, deReference) {
  const card = deepClone(patch);
  if (!card.de && deReference) card.de = deReference;
  if (!card.study) card.study = {};
  return card;
}

function applyFlatPatchToCard(card, flatPatch) {
  const out = deepClone(card);
  if (!out.study) out.study = {};
  for (const [path, value] of Object.entries(flatPatch)) {
    if (path === "lv") out.lv = value;
    else if (path.startsWith("study.")) setByPath(out, path, tryParseEmbedded(value));
    else setByPath(out, path, tryParseEmbedded(value));
  }
  return out;
}

function mergeNestedCard(base, patch) {
  const out = deepClone(base);
  if (patch.lv != null) out.lv = patch.lv;
  if (patch.study) {
    out.study = out.study || {};
    for (const [k, v] of Object.entries(patch.study)) {
      out.study[k] = deepClone(v);
    }
  }
  return out;
}

function flattenCardToLeaves(card) {
  const leaves = new Map();
  if (!card || typeof card !== "object") return leaves;
  if (card.lv != null && String(card.lv).length) leaves.set("lv", stableLeafValue(card.lv));
  const study = card.study || {};
  if (study.translation != null) leaves.set("study.translation", stableLeafValue(study.translation));
  if (Array.isArray(study.explanation)) {
    study.explanation.forEach((v, i) => {
      if (v != null && String(v).length) leaves.set(`study.explanation[${i}]`, stableLeafValue(v));
    });
  }
  if (Array.isArray(study.examples)) {
    study.examples.forEach((ex, i) => {
      if (ex && ex.lv != null) leaves.set(`study.examples[${i}].lv`, stableLeafValue(ex.lv));
    });
  }
  if (Array.isArray(study.comparison)) {
    study.comparison.forEach((row, i) => {
      if (!row) return;
      if (row.meaning != null) leaves.set(`study.comparison[${i}].meaning`, stableLeafValue(row.meaning));
      if (row.example != null) leaves.set(`study.comparison[${i}].example`, stableLeafValue(row.example));
      if (row.word != null) leaves.set(`study.comparison[${i}].word`, stableLeafValue(row.word));
    });
  }
  if (study.tip != null) {
    if (typeof study.tip === "object" && study.tip.text != null) {
      leaves.set("study.tip.text", stableLeafValue(study.tip.text));
    } else if (Array.isArray(study.tip)) {
      study.tip.forEach((v, i) => {
        if (v != null) leaves.set(`study.tip[${i}]`, stableLeafValue(v));
      });
    } else leaves.set("study.tip", stableLeafValue(study.tip));
  }
  if (Array.isArray(study.important)) {
    study.important.forEach((v, i) => {
      if (v != null) leaves.set(`study.important[${i}]`, stableLeafValue(v));
    });
  }
  return leaves;
}

function expandScopeToLeafPrefixes(fieldPath) {
  const crowdinLeaf = crowdinFieldPathToLeaf(fieldPath);
  const segments = splitFieldPath(fieldPath);
  const prefixes = new Set();
  if (crowdinLeaf && !fieldPath.includes(";") && !fieldPath.includes(",")) {
    prefixes.add(crowdinLeaf);
    return prefixes;
  }
  for (const seg of segments) {
    if (seg === "lv" || seg === "native") prefixes.add("lv");
    else if (seg === "study.translation") prefixes.add("study.translation");
    else if (seg === "study.explanation") prefixes.add("study.explanation");
    else if (seg === "study.examples") prefixes.add("study.examples");
    else if (seg === "study.comparison") prefixes.add("study.comparison");
    else if (seg === "study.tip") prefixes.add("study.tip");
    else if (seg === "study.important") prefixes.add("study.important");
    else if (seg === "study" || seg === "study.*") {
      prefixes.add("lv");
      prefixes.add("study.translation");
      prefixes.add("study.explanation");
      prefixes.add("study.examples");
      prefixes.add("study.comparison");
      prefixes.add("study.tip");
      prefixes.add("study.important");
    }
  }
  return prefixes;
}

function leafMatchesScope(leafPath, scopePrefixes, fullComposite) {
  if (fullComposite) return true;
  if (scopePrefixes.has(leafPath)) return true;
  for (const p of scopePrefixes) {
    if (leafPath === p) return true;
    if (leafPath.startsWith(`${p}[`)) return true;
  }
  return false;
}

function reconstructDecisionLeaves(row) {
  const fieldPath = row.field_path || "";
  const ownerNote = row.owner_note || row.ownerNote || "";
  const deRef = row.de_reference || row.deReference || "";
  const preRaw = row.production_current || row.discovery_current || row.production_current_mirror || "";
  const preFlat = parseJsonSafe(preRaw);
  let preCard = flatProductionToCard(preFlat, deRef);
  if (preFlat && preFlat.de) preCard.de = preFlat.de;

  const ownerNewRaw = row.owner_new ?? row.ownerNew ?? "";
  const modeInfo = detectOwnerNewMode(ownerNewRaw, fieldPath, ownerNote);
  const scopePrefixes = expandScopeToLeafPrefixes(fieldPath);
  const fullComposite =
    modeInfo.mode === "full_composite_card" ||
    (modeInfo.mode === "flat_composite_object" && isFullCompositeScope(fieldPath, ownerNote)) ||
    isFullCompositeScope(fieldPath, ownerNote);

  let postCard = deepClone(preCard);
  const decidedPaths = new Set();

  const ownerStatus = String(row.owner_status || row.ownerStatus || "").toUpperCase();
  if (modeInfo.mode === "empty") {
    if (ownerStatus === "NELABOT" || ownerStatus === "DECIDED") {
      postCard = deepClone(preCard);
      const crowdinLeaf = crowdinFieldPathToLeaf(fieldPath);
      if (crowdinLeaf) decidedPaths.add(crowdinLeaf);
      const postLeaves = flattenCardToLeaves(postCard);
      for (const [path, val] of postLeaves) {
        if (leafMatchesScope(path, scopePrefixes, fullComposite)) {
          decidedPaths.add(path);
        }
      }
      if (!decidedPaths.size && crowdinLeaf) decidedPaths.add(crowdinLeaf);
    } else {
      return {
        ok: false,
        reason: "empty_owner_new",
        preCard,
        postCard,
        decidedLeaves: [],
        proof: null,
        mode: modeInfo.mode,
        fullComposite,
      };
    }
  }

  if (modeInfo.mode !== "empty" && (modeInfo.mode === "scalar" || modeInfo.mode === "scalar_json")) {
    const segments = splitFieldPath(fieldPath);
    const leaf = segments.length === 1 && segments[0] === "study.translation" ? "study.translation" : "lv";
    postCard.lv = modeInfo.mode === "scalar" ? modeInfo.patch : stableLeafValue(modeInfo.patch);
    if (leaf === "study.translation") {
      postCard.study = postCard.study || {};
      postCard.study.translation = postCard.lv;
    }
    decidedPaths.add(leaf);
  } else if (modeInfo.mode === "flat_patch") {
    postCard = applyFlatPatchToCard(preCard, modeInfo.patch);
    const patchPostLeaves = flattenCardToLeaves(postCard);
    const patchPreLeaves = flattenCardToLeaves(preCard);
    for (const k of Object.keys(modeInfo.patch)) {
      if (patchPostLeaves.has(k)) decidedPaths.add(k);
    }
    for (const [p, val] of patchPostLeaves) {
      if (patchPreLeaves.get(p) !== val && leafMatchesScope(p, scopePrefixes, fullComposite)) {
        decidedPaths.add(p);
      }
    }
  } else if (modeInfo.mode === "flat_composite_object") {
    postCard = applyFlatPatchToCard(preCard, modeInfo.patch);
    const postLeaves = flattenCardToLeaves(postCard);
    const crowdinLeaf = crowdinFieldPathToLeaf(fieldPath);
    if (crowdinLeaf && !fullComposite) {
      decidedPaths.add(crowdinLeaf);
    } else if (fullComposite) {
      for (const p of postLeaves.keys()) decidedPaths.add(p);
    } else {
      for (const k of Object.keys(modeInfo.patch)) {
        if (postLeaves.has(k)) decidedPaths.add(k);
      }
      for (const p of postLeaves.keys()) {
        if (leafMatchesScope(p, scopePrefixes, false)) decidedPaths.add(p);
      }
    }
  } else if (modeInfo.mode === "nested_card" || modeInfo.mode === "full_composite_card") {
    const patchCard = nestedPatchToCard(modeInfo.patch, deRef);
    postCard = mergeNestedCard(preCard, patchCard);
    const postLeaves = flattenCardToLeaves(postCard);
    if (fullComposite) {
      for (const p of postLeaves.keys()) decidedPaths.add(p);
    } else {
      for (const p of postLeaves.keys()) {
        if (leafMatchesScope(p, scopePrefixes, false)) decidedPaths.add(p);
      }
    }
  }

  if (String(fieldPath).trim() === "study.examples.lv") {
    const postLeavesTmp = flattenCardToLeaves(postCard);
    for (const p of postLeavesTmp.keys()) {
      if (/^study\.examples\[\d+\]\.lv$/.test(p)) decidedPaths.add(p);
    }
  }

  const preLeaves = flattenCardToLeaves(preCard);
  const postLeaves = flattenCardToLeaves(postCard);

  const explicitLeafPaths = String(fieldPath || "")
    .split(";")
    .map((s) => s.trim())
    .filter((s) => /^(lv|study\.[a-z0-9_.\[\]]+)$/i.test(s));
  for (const elp of explicitLeafPaths) {
    decidedPaths.add(elp);
  }
  const decidedLeaves = [];
  for (const path of decidedPaths) {
    const val = postLeaves.has(path) ? postLeaves.get(path) : "";
    decidedLeaves.push({
      leaf_field_path: path,
      leaf_value: val,
      leaf_value_sha256: leafValueSha(val),
      pre_leaf_value: preLeaves.get(path) ?? null,
      pre_leaf_value_sha256: preLeaves.has(path) ? leafValueSha(preLeaves.get(path)) : null,
    });
  }

  if (!decidedLeaves.length && postLeaves.size) {
    for (const [path, val] of postLeaves) {
      const changed = preLeaves.get(path) !== val;
      if (!changed && modeInfo.mode !== "empty") continue;
      if (!leafMatchesScope(path, scopePrefixes, fullComposite)) continue;
      decidedLeaves.push({
        leaf_field_path: path,
        leaf_value: val,
        leaf_value_sha256: leafValueSha(val),
        pre_leaf_value: preLeaves.get(path) ?? null,
        pre_leaf_value_sha256: preLeaves.has(path) ? leafValueSha(preLeaves.get(path)) : null,
      });
    }
  }

  if (!decidedLeaves.length) {
    const leaf = crowdinFieldPathToLeaf(fieldPath);
    const parsed = modeInfo.patch ?? parseJsonSafe(ownerNewRaw);
    if (leaf && parsed && typeof parsed === "object") {
      let val = "";
      if (leaf === "lv" && parsed.lv != null) val = stableLeafValue(parsed.lv);
      else if (parsed[leaf] != null) val = stableLeafValue(tryParseEmbedded(parsed[leaf]));
      else if (leaf === "study.translation" && parsed["study.translation"] != null) {
        val = stableLeafValue(parsed["study.translation"]);
      }
      if (val !== "" || ownerStatus === "NELABOT" || ownerStatus === "DECIDED") {
        decidedLeaves.push({
          leaf_field_path: leaf,
          leaf_value: val,
          leaf_value_sha256: leafValueSha(val),
          pre_leaf_value: preLeaves.get(leaf) ?? null,
          pre_leaf_value_sha256: preLeaves.has(leaf) ? leafValueSha(preLeaves.get(leaf)) : null,
        });
      }
    }
  }

  const proof = {
    original_owner_new_payload: ownerNewRaw,
    field_path_raw: fieldPath,
    owner_new_mode: modeInfo.mode,
    full_composite_scope: fullComposite,
    pre_owner_state_sha256: sha256(JSON.stringify(preCard)),
    applied_patch: modeInfo.patch,
    reconstructed_post_owner_sha256: sha256(JSON.stringify(postCard)),
    expanded_leaf_paths: decidedLeaves.map((d) => d.leaf_field_path),
    leaf_value_shas: decidedLeaves.map((d) => ({
      leaf: d.leaf_field_path,
      sha256: d.leaf_value_sha256,
    })),
  };

  return {
    ok: decidedLeaves.length > 0,
    reason: decidedLeaves.length > 0 ? null : "no_decided_leaves",
    preCard,
    postCard,
    decidedLeaves,
    proof,
    mode: modeInfo.mode,
    fullComposite,
    expanded_standard_full_card: fullComposite,
  };
}

function leafTargetKey(lang, cardId, leafPath) {
  return `${String(lang).trim()}|${String(cardId).split("|")[0].trim()}|${leafPath}`;
}

module.exports = {
  sha256,
  parseJsonSafe,
  reconstructDecisionLeaves,
  flattenCardToLeaves,
  leafTargetKey,
  leafValueSha,
  stableLeafValue,
  isFullCompositeScope,
  splitFieldPath,
  crowdinFieldPathToLeaf,
};
