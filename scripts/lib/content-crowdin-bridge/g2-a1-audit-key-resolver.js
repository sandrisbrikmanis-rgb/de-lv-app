#!/usr/bin/env node
"use strict";

const { resolveCardSlug, slugify } = require("./slug");
const { buildCardIndex } = require("./flatten-g2-flashcards");

const RESOLVER_VERSION = "g2-a1-audit-key-resolver-v1";

/** Documented legacy / canonical fieldPath normalizations (one-to-one segment transforms). */
const LEGACY_SEGMENT_ALIASES = Object.freeze({
  lv: "native",
  "study.examples[].lv": "study.examples[].native",
  "study.examples[].de": "study.examples[].native",
  "study.tip.text": "study.tip",
  "study.tip.example": "study.tip",
  translation: "study.translation",
});

/** Prefixes that never appear in the G2/A1 Crowdin export registry. */
const NON_EXPORT_PREFIXES = Object.freeze([
  "study.sectionAccents",
  "study.id",
  "study.layout",
  "study.info",
  "study.accents",
]);

const SEGMENT_SPLIT_RE = /[;,/]|(?:\s+and\s+)|(?:\s+lv\s+)/i;

const SCALAR_STUDY_LEAVES = Object.freeze([
  "study.translation",
  "study.title",
  "study.note",
  "study.subtitle",
  "study.lead",
  "study.question",
]);

function isNonExportSegment(segment) {
  const s = String(segment || "").trim().toLowerCase();
  return NON_EXPORT_PREFIXES.some((p) => s === p || s.startsWith(`${p}.`) || s.startsWith(`${p}[`));
}

function normalizeSegment(raw) {
  let s = String(raw || "").trim();
  if (!s) return "";
  if (LEGACY_SEGMENT_ALIASES[s]) return LEGACY_SEGMENT_ALIASES[s];
  s = s.replace(/\blv\b/gi, "native").replace(/\.lv\b/gi, ".native").replace(/\.de\b/gi, ".native");
  s = s.replace(/study\.examples\[\s*\]/gi, "study.examples[]");
  s = s.replace(/study\.comparison\[\s*\]/gi, "study.comparison[]");
  s = s.replace(/\[\s*\*\s*\]/g, "[]");
  s = s.replace(/\.text$/i, "");
  if (LEGACY_SEGMENT_ALIASES[s]) return LEGACY_SEGMENT_ALIASES[s];
  if (s === "study" || s === "study.*") return "study";
  return s;
}

function splitFieldPath(fieldPath) {
  return String(fieldPath || "")
    .split(SEGMENT_SPLIT_RE)
    .map((p) => p.trim())
    .filter(Boolean);
}

function cardIdMatchesEntry(cardId, entry, slug) {
  if (!cardId || cardId === "unknown") return true;
  const norm = String(cardId).trim().toLowerCase();
  const candidates = [entry?.de, entry?.study?.id, slug, slug.replace(/^a1-/, "")]
    .filter(Boolean)
    .map((v) => String(v).toLowerCase());
  return candidates.some(
    (c) => c === norm || slugify(c) === slugify(norm) || slug.endsWith(`-${slugify(norm)}`),
  );
}

function cardExportKeys(lvKeySet, level, slug) {
  const prefix = `${level}.card.${slug}.`;
  return [...lvKeySet].filter((k) => k.startsWith(prefix)).sort();
}

function keysUnderRelative(cardKeys, level, slug, relativePath) {
  const prefix = `${level}.card.${slug}.`;
  const full = relativePath.startsWith("native") || relativePath === "native"
    ? `${prefix}native`
    : relativePath.startsWith("study.")
      ? `${prefix}${relativePath}`
      : `${prefix}${relativePath}`;
  if (cardKeys.includes(full)) return [full];
  return cardKeys.filter((k) => k.startsWith(full));
}

function expandContainer(cardKeys, level, slug, containerPath) {
  return keysUnderRelative(cardKeys, level, slug, containerPath);
}

function expandWildcard(cardKeys, level, slug, pattern) {
  // study.comparison[].example, study.examples[].native
  const m = pattern.match(/^(study\.(comparison|examples))(\[\])\.(.+)$/);
  if (!m) return [];
  const [, base, , , leaf] = m;
  const relPrefix = `${base}[`;
  const prefix = `${level}.card.${slug}.`;
  return cardKeys.filter((k) => {
    if (!k.startsWith(`${prefix}${relPrefix}`)) return false;
    if (base === "study.examples") return k.endsWith(".native");
    if (base === "study.comparison") return k.endsWith(`.${leaf}`);
    return false;
  });
}

function expandRange(cardKeys, level, slug, pattern) {
  // study.examples[1-3].native
  const m = pattern.match(/^study\.examples\[(\d+)\s*-\s*(\d+)\]\.native$/);
  if (!m) return { keys: [], rangeInvalid: true };
  const start = Number(m[1]);
  const end = Number(m[2]);
  if (end < start) return { keys: [], rangeInvalid: true };
  const keys = [];
  for (let i = start; i <= end; i += 1) {
    const key = `${level}.card.${slug}.study.examples[${i}].native`;
    if (cardKeys.includes(key)) keys.push(key);
  }
  return { keys, rangeInvalid: false, partial: keys.length < end - start + 1 };
}

function objectFieldShapeProof(entry, segment) {
  const study = entry?.study;
  if (!study) return null;
  const s = segment.toLowerCase();
  if (s === "study.explanation" || s === "explanation") {
    if (typeof study.explanation === "string") return "EXPLANATION_STRING_NOT_EXPORTED";
    if (Array.isArray(study.explanation) && study.explanation.length === 0) return "EXPLANATION_ARRAY_EMPTY";
  }
  if (s === "study.tip" || s === "tip") {
    if (study.tip && typeof study.tip === "object" && !Array.isArray(study.tip)) return "TIP_OBJECT_NOT_EXPORTED";
  }
  if (s === "study.comparison" || s === "comparison") {
    if (!study.comparison?.length) return "COMPARISON_EMPTY";
  }
  if (s.startsWith("study.sectionaccents")) return "SECTION_ACCENTS_NOT_EXPORTED";
  return null;
}

function resolveSegment({ segment, cardKeys, level, slug, entry }) {
  const proof = { segment, normalized: normalizeSegment(segment) };
  const norm = proof.normalized;
  if (!norm) return { kind: "SKIP", keys: [], proof };

  if (isNonExportSegment(norm)) {
    return {
      kind: "GROUP_REVIEW_REQUIRED",
      keys: [],
      proof: { ...proof, reason: "NON_EXPORT_CONTAINER", shape: objectFieldShapeProof(entry, norm) },
    };
  }

  if (norm === "native") {
    const keys = keysUnderRelative(cardKeys, level, slug, "native");
    return { kind: keys.length ? "RESOLVED" : "UNRESOLVED", keys, proof };
  }

  if (norm === "study") {
    const keys = cardKeys.filter((k) => k.includes(".study."));
    return { kind: keys.length ? "RESOLVED" : "UNRESOLVED", keys, proof: { ...proof, expansion: "STUDY_CONTAINER" } };
  }

  if (SCALAR_STUDY_LEAVES.includes(norm)) {
    const keys = keysUnderRelative(cardKeys, level, slug, norm);
    return { kind: keys.length ? "RESOLVED" : "UNRESOLVED", keys, proof };
  }

  if (/\[\d+\s*-\s*\d+\]/.test(norm)) {
    const { keys, rangeInvalid, partial } = expandRange(cardKeys, level, slug, norm);
    if (rangeInvalid) return { kind: "GROUP_REVIEW_REQUIRED", keys: [], proof: { ...proof, reason: "ARRAY_RANGE_UNPROVABLE" } };
    if (partial) return { kind: "GROUP_REVIEW_REQUIRED", keys, proof: { ...proof, reason: "ARRAY_RANGE_PARTIAL" } };
    return { kind: keys.length ? "RESOLVED" : "UNRESOLVED", keys, proof: { ...proof, expansion: "ARRAY_RANGE" } };
  }

  if (norm.includes("[]")) {
    const keys = expandWildcard(cardKeys, level, slug, norm);
    return {
      kind: keys.length ? "RESOLVED" : "GROUP_REVIEW_REQUIRED",
      keys,
      proof: {
        ...proof,
        expansion: "ARRAY_WILDCARD",
        reason: keys.length ? null : objectFieldShapeProof(entry, norm) || "WILDCARD_NO_EXPORT_KEYS",
      },
    };
  }

  const containerRoots = ["study.comparison", "study.examples", "study.explanation", "study.important", "study.tip"];
  if (containerRoots.includes(norm)) {
    const keys = expandContainer(cardKeys, level, slug, norm);
    if (!keys.length) {
      return {
        kind: "GROUP_REVIEW_REQUIRED",
        keys: [],
        proof: { ...proof, reason: objectFieldShapeProof(entry, norm) || "CONTAINER_NO_EXPORT_KEYS", expansion: "CONTAINER" },
      };
    }
    return { kind: "RESOLVED", keys, proof: { ...proof, expansion: "CONTAINER" } };
  }

  if (norm.startsWith("study.")) {
    const keys = keysUnderRelative(cardKeys, level, slug, norm);
    if (keys.length) return { kind: "RESOLVED", keys, proof };
    return {
      kind: "GROUP_REVIEW_REQUIRED",
      keys: [],
      proof: { ...proof, reason: objectFieldShapeProof(entry, norm) || "UNKNOWN_STUDY_PATH" },
    };
  }

  const keys = keysUnderRelative(cardKeys, level, slug, norm);
  return { kind: keys.length ? "RESOLVED" : "UNRESOLVED", keys, proof };
}

function mergeSegmentResults(segmentResults) {
  const allKeys = new Set();
  let hasGroup = false;
  let hasUnresolved = false;
  const proofs = [];

  for (const seg of segmentResults) {
    proofs.push(seg.proof);
    if (seg.kind === "GROUP_REVIEW_REQUIRED") hasGroup = true;
    if (seg.kind === "UNRESOLVED") hasUnresolved = true;
    for (const k of seg.keys) allKeys.add(k);
  }

  const keys = [...allKeys].sort();
  if (hasGroup && !keys.length) {
    return { status: "GROUP_REVIEW_REQUIRED", keys: [], proofs, reason: "NON_EXPORT_OR_UNEXPORTABLE_FIELD" };
  }
  if (hasGroup && keys.length) {
    return { status: "MAPPED_EXPLICIT_SET", keys, proofs, reason: "PARTIAL_WITH_GROUP_REVIEW_SEGMENTS" };
  }
  if (hasUnresolved && !keys.length) {
    return { status: "UNMATCHED", keys: [], proofs, reason: "NO_EXPORT_KEYS_FOR_FIELD_PATH" };
  }
  if (!keys.length) return { status: "UNMATCHED", keys: [], proofs, reason: "NO_EXPORT_KEYS" };
  if (keys.length === 1) return { status: "MAPPED_UNIQUE", keys, proofs, reason: "SINGLE_LEAF" };
  return { status: "MAPPED_EXPLICIT_SET", keys, proofs, reason: "DETERMINISTIC_CONTAINER_EXPANSION" };
}

function buildG2A1AuditKeyRegistry({ level, cards, lvFlat }) {
  const lvKeySet = new Set(Object.keys(lvFlat || {}));
  const byIndex = new Map();
  const bySlug = new Map();
  (cards || []).forEach((entry, index) => {
    const slug = resolveCardSlug(entry);
    const meta = { slug, entry, index, cardId: entry.de || entry.study?.id || slug };
    byIndex.set(index, meta);
    if (!bySlug.has(slug)) bySlug.set(slug, meta);
  });
  return { level, lvFlat, lvKeySet, cards, byIndex, bySlug };
}

function resolveG2A1AuditFinding(finding, registry) {
  const level = registry.level || "a1";
  if (finding.lang === "lv") {
    return {
      status: "GROUP_REVIEW_REQUIRED",
      keys: [],
      reason: "SOURCE_LOCALE_NOT_CROWDIN_TARGET",
      resolverVersion: RESOLVER_VERSION,
    };
  }
  if (finding.group !== "g2" || finding.dataset !== level) {
    return { status: "UNMATCHED", keys: [], reason: "SCOPE_MISMATCH", resolverVersion: RESOLVER_VERSION };
  }

  const productionFile = finding.productionFile ? String(finding.productionFile) : "";
  if (productionFile && !/a1\.js$/i.test(productionFile)) {
    return { status: "UNMATCHED", keys: [], reason: "SOURCE_FILE_MISMATCH", resolverVersion: RESOLVER_VERSION };
  }

  if (finding.objectIndex == null || Number.isNaN(finding.objectIndex)) {
    return { status: "UNMATCHED", keys: [], reason: "OBJECT_INDEX_MISSING", resolverVersion: RESOLVER_VERSION };
  }

  const meta = registry.byIndex.get(finding.objectIndex);
  if (!meta) {
    return { status: "SOURCE_KEY_MISSING", keys: [], reason: "OBJECT_INDEX_NOT_IN_REGISTRY", resolverVersion: RESOLVER_VERSION };
  }

  if (!cardIdMatchesEntry(finding.cardId, meta.entry, meta.slug)) {
    return { status: "AMBIGUOUS", keys: [], reason: "CARD_ID_OBJECT_INDEX_MISMATCH", resolverVersion: RESOLVER_VERSION };
  }

  const cardKeys = cardExportKeys(registry.lvKeySet, level, meta.slug);
  const segments = splitFieldPath(finding.fieldPath);
  const tokens = segments.length ? segments : [finding.fieldPath];
  const segmentResults = tokens.map((segment) =>
    resolveSegment({ segment, cardKeys, level, slug: meta.slug, entry: meta.entry }),
  );
  const merged = mergeSegmentResults(segmentResults);
  return {
    ...merged,
    slug: meta.slug,
    objectIndex: finding.objectIndex,
    cardId: finding.cardId,
    mappedKeys: merged.keys,
    resolverVersion: RESOLVER_VERSION,
  };
}

function severityConflict(severities) {
  const order = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1, INFO: 0 };
  const ranked = [...new Set(severities.filter(Boolean))];
  if (ranked.length <= 1) return false;
  const weights = ranked.map((s) => order[s] ?? 0);
  return Math.max(...weights) - Math.min(...weights) >= 2;
}

function aggregateFindingsByCrowdinKey(mappedFindings, crowdinLocaleIdForLang) {
  const byKey = new Map();
  for (const row of mappedFindings) {
    if (row.mapping.status !== "MAPPED_UNIQUE" && row.mapping.status !== "MAPPED_EXPLICIT_SET") continue;
    const lang = row.finding.lang;
    if (lang === "lv") continue;
    let localeId;
    try {
      localeId = crowdinLocaleIdForLang(lang);
    } catch {
      continue;
    }
    for (const key of row.mapping.mappedKeys || row.mapping.keys || []) {
      const unitId = `${localeId}\t${key}`;
      if (!byKey.has(unitId)) {
        byKey.set(unitId, {
          crowdinLocaleId: localeId,
          repoLang: lang,
          crowdinKey: key,
          findingIds: [],
          auditIds: [],
          findings: [],
          severities: [],
          categories: [],
        });
      }
      const bucket = byKey.get(unitId);
      bucket.findingIds.push(row.finding.findingStableId || row.finding.auditId);
      bucket.auditIds.push(row.finding.auditId);
      bucket.findings.push(row.finding);
      bucket.severities.push(row.finding.severity);
      bucket.categories.push(row.finding.category);
    }
  }

  const units = [];
  for (const bucket of byKey.values()) {
    const ownerStatus =
      bucket.findings.length > 1 && severityConflict(bucket.severities)
        ? "OWNER_CONFLICT_REVIEW_REQUIRED"
        : "PENDING_OWNER_DECISION";
    units.push({ ...bucket, ownerStatus, findingCount: bucket.findings.length });
  }
  return units;
}

module.exports = {
  RESOLVER_VERSION,
  LEGACY_SEGMENT_ALIASES,
  NON_EXPORT_PREFIXES,
  normalizeSegment,
  splitFieldPath,
  cardIdMatchesEntry,
  buildG2A1AuditKeyRegistry,
  resolveG2A1AuditFinding,
  aggregateFindingsByCrowdinKey,
  resolveSegment,
  mergeSegmentResults,
};
