#!/usr/bin/env node
"use strict";

const { resolveCardSlug, slugify } = require("./slug");
const { buildCardIndex } = require("./flatten-g2-flashcards");

const RESOLVER_VERSION = "g2-a1-audit-key-resolver-v2";

/** Documented legacy / canonical fieldPath normalizations (one-to-one segment transforms). */
const LEGACY_SEGMENT_ALIASES = Object.freeze({
  lv: "native",
  "study.examples[].lv": "study.examples[].native",
  "study.tip.text": "study.tip",
  "study.tip.example": "study.tip",
  translation: "study.translation",
});

/** Wildcard array containers → allowed leaf suffixes in export registry. */
const WILDCARD_LEAF_ALLOWLIST = Object.freeze({
  "study.examples": new Set(["native", "lv"]),
  "study.comparison": new Set(["meaning", "example"]),
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

const AUTO_APPLY_ELIGIBLE_STATUSES = new Set(["MAPPED_UNIQUE"]);

function isDeFieldPath(segment) {
  const s = String(segment || "").trim().toLowerCase();
  if (!s) return false;
  if (s === "de") return true;
  if (/\.de$/.test(s)) return true;
  if (/\[\s*\]\.de$/.test(s)) return true;
  if (/\[\d+\]\.de$/.test(s)) return true;
  return false;
}

function isNonExportSegment(segment) {
  const s = String(segment || "").trim().toLowerCase();
  return NON_EXPORT_PREFIXES.some((p) => s === p || s.startsWith(`${p}.`) || s.startsWith(`${p}[`));
}

function normalizeSegment(raw) {
  let s = String(raw || "").trim();
  if (!s) return "";
  if (isDeFieldPath(s)) return s;
  if (LEGACY_SEGMENT_ALIASES[s]) return LEGACY_SEGMENT_ALIASES[s];
  s = s.replace(/\blv\b/gi, "native").replace(/\.lv\b/gi, ".native");
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

function canonicalCardAliases(entry, slug) {
  const aliases = new Set();
  if (entry?.de) {
    aliases.add(String(entry.de).trim().toLowerCase());
    aliases.add(slugify(entry.de));
  }
  if (entry?.study?.id) {
    aliases.add(String(entry.study.id).trim().toLowerCase());
    aliases.add(slugify(entry.study.id));
  }
  aliases.add(String(slug).trim().toLowerCase());
  return aliases;
}

function verifyCardIdentity(cardId, entry, slug) {
  if (!cardId || cardId === "unknown") {
    return { pass: true, proof: "OBJECT_INDEX_ONLY" };
  }
  const norm = String(cardId).trim().toLowerCase();
  const aliases = canonicalCardAliases(entry, slug);
  if (aliases.has(norm) || aliases.has(slugify(norm))) {
    return { pass: true, proof: "CANONICAL_CARD_ID" };
  }
  return { pass: false, proof: "CARD_ID_OBJECT_INDEX_MISMATCH" };
}

function cardIdMatchesEntry(cardId, entry, slug) {
  return verifyCardIdentity(cardId, entry, slug).pass;
}

function cardExportKeys(lvKeySet, level, slug) {
  const prefix = `${level}.card.${slug}.`;
  return [...lvKeySet].filter((k) => k.startsWith(prefix)).sort();
}

function keysUnderRelative(cardKeys, level, slug, relativePath) {
  const prefix = `${level}.card.${slug}.`;
  const full =
    relativePath === "native"
      ? `${prefix}native`
      : relativePath.startsWith("study.")
        ? `${prefix}${relativePath}`
        : `${prefix}${relativePath}`;
  if (cardKeys.includes(full)) return [full];
  return cardKeys.filter((k) => k.startsWith(`${full}.`) || k.startsWith(`${full}[`));
}

function expandContainer(cardKeys, level, slug, containerPath) {
  return keysUnderRelative(cardKeys, level, slug, containerPath);
}

function expandWildcard(cardKeys, level, slug, pattern) {
  const m = pattern.match(/^(study\.(comparison|examples))(\[\])\.(.+)$/);
  if (!m) {
    return { keys: [], reason: "WILDCARD_PATTERN_UNSUPPORTED" };
  }
  const base = m[1];
  const leaf = m[4].toLowerCase();

  if (leaf === "de") {
    return { keys: [], reason: "DE_SOURCE_FIELD_NOT_EXPORTABLE" };
  }

  const normalizedLeaf = leaf === "lv" ? "native" : leaf;
  const allowed = WILDCARD_LEAF_ALLOWLIST[base];
  if (!allowed || !allowed.has(leaf) && !allowed.has(normalizedLeaf)) {
    return { keys: [], reason: "WILDCARD_LEAF_UNSUPPORTED" };
  }

  const relPrefix = `${base}[`;
  const prefix = `${level}.card.${slug}.`;
  const keys = cardKeys.filter((k) => {
    if (!k.startsWith(`${prefix}${relPrefix}`)) return false;
    if (base === "study.examples") return k.endsWith(".native");
    if (base === "study.comparison") return k.endsWith(`.${normalizedLeaf}`);
    return false;
  });
  return { keys, reason: keys.length ? null : "WILDCARD_NO_EXPORT_KEYS" };
}

function expandRange(cardKeys, level, slug, pattern) {
  const m = pattern.match(/^study\.examples\[(\d+)\s*-\s*(\d+)\]\.(?:lv|native)$/);
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
  const raw = String(segment || "").trim();
  const proof = { segment: raw, normalized: normalizeSegment(raw) };

  if (isDeFieldPath(raw)) {
    return {
      kind: "GROUP_REVIEW_REQUIRED",
      keys: [],
      proof: { ...proof, reason: "DE_SOURCE_FIELD_NOT_EXPORTABLE" },
    };
  }

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
    const { keys, reason } = expandWildcard(cardKeys, level, slug, norm);
    if (reason === "DE_SOURCE_FIELD_NOT_EXPORTABLE" || reason === "WILDCARD_LEAF_UNSUPPORTED") {
      return { kind: "GROUP_REVIEW_REQUIRED", keys: [], proof: { ...proof, reason } };
    }
    return {
      kind: keys.length ? "RESOLVED" : "GROUP_REVIEW_REQUIRED",
      keys,
      proof: {
        ...proof,
        expansion: "ARRAY_WILDCARD",
        reason: keys.length ? null : reason || objectFieldShapeProof(entry, norm) || "WILDCARD_NO_EXPORT_KEYS",
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
  if (hasGroup && keys.length) {
    return { status: "PARTIAL_MAPPING_REVIEW_REQUIRED", keys, proofs, reason: "PARTIAL_WITH_GROUP_REVIEW_SEGMENTS" };
  }
  if (hasGroup && !keys.length) {
    return { status: "GROUP_REVIEW_REQUIRED", keys: [], proofs, reason: "NON_EXPORT_OR_UNEXPORTABLE_FIELD" };
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
      mappedKeys: [],
      reason: "SOURCE_LOCALE_NOT_CROWDIN_TARGET",
      autoApplyEligible: false,
      resolverVersion: RESOLVER_VERSION,
    };
  }
  if (finding.group !== "g2" || finding.dataset !== level) {
    return { status: "UNMATCHED", keys: [], mappedKeys: [], reason: "SCOPE_MISMATCH", autoApplyEligible: false, resolverVersion: RESOLVER_VERSION };
  }

  const productionFile = finding.productionFile ? String(finding.productionFile) : "";
  if (productionFile && !/a1\.js$/i.test(productionFile)) {
    return { status: "UNMATCHED", keys: [], mappedKeys: [], reason: "SOURCE_FILE_MISMATCH", autoApplyEligible: false, resolverVersion: RESOLVER_VERSION };
  }

  if (finding.objectIndex == null || Number.isNaN(finding.objectIndex)) {
    return { status: "UNMATCHED", keys: [], mappedKeys: [], reason: "OBJECT_INDEX_MISSING", autoApplyEligible: false, resolverVersion: RESOLVER_VERSION };
  }

  const meta = registry.byIndex.get(finding.objectIndex);
  if (!meta) {
    return { status: "SOURCE_KEY_MISSING", keys: [], mappedKeys: [], reason: "OBJECT_INDEX_NOT_IN_REGISTRY", autoApplyEligible: false, resolverVersion: RESOLVER_VERSION };
  }

  const identity = verifyCardIdentity(finding.cardId, meta.entry, meta.slug);
  if (!identity.pass) {
    return { status: "AMBIGUOUS", keys: [], mappedKeys: [], reason: identity.proof, autoApplyEligible: false, resolverVersion: RESOLVER_VERSION };
  }

  const cardKeys = cardExportKeys(registry.lvKeySet, level, meta.slug);
  const segments = splitFieldPath(finding.fieldPath);
  const tokens = segments.length ? segments : [finding.fieldPath];
  const segmentResults = tokens.map((segment) =>
    resolveSegment({ segment, cardKeys, level, slug: meta.slug, entry: meta.entry }),
  );
  const merged = mergeSegmentResults(segmentResults);
  const autoApplyEligible = AUTO_APPLY_ELIGIBLE_STATUSES.has(merged.status);
  return {
    ...merged,
    slug: meta.slug,
    objectIndex: finding.objectIndex,
    cardId: finding.cardId,
    identityProof: identity.proof,
    mappedKeys: merged.keys,
    autoApplyEligible,
    resolverVersion: RESOLVER_VERSION,
  };
}

function findingContentSignature(finding) {
  return JSON.stringify({
    severity: finding.severity ?? null,
    category: finding.category ?? null,
    classificationStatus: finding.classificationStatus ?? null,
    fieldPath: finding.fieldPath ?? null,
    current: finding.current ?? null,
    proposed: finding.proposed ?? null,
  });
}

function findingsHaveSubstantiveConflict(findings) {
  if (findings.length <= 1) return false;
  const signatures = new Set(findings.map((f) => findingContentSignature(f)));
  return signatures.size > 1;
}

function aggregateFindingsByCrowdinKey(mappedFindings, crowdinLocaleIdForLang) {
  const byKey = new Map();
  for (const row of mappedFindings) {
    if (row.mapping.status !== "MAPPED_UNIQUE") continue;
    const lang = row.finding.lang;
    if (lang === "lv") continue;
    let localeId;
    try {
      localeId = crowdinLocaleIdForLang(lang);
    } catch {
      continue;
    }
    const key = row.mapping.mappedKeys?.[0] || row.mapping.keys?.[0];
    if (!key) continue;
    const unitId = `${localeId}\t${key}`;
    if (!byKey.has(unitId)) {
      byKey.set(unitId, {
        crowdinLocaleId: localeId,
        repoLang: lang,
        crowdinKey: key,
        findingIds: [],
        auditIds: [],
        findings: [],
        parentFindingIds: new Set(),
      });
    }
    const bucket = byKey.get(unitId);
    bucket.findingIds.push(row.finding.findingStableId || row.finding.auditId);
    bucket.auditIds.push(row.finding.auditId);
    bucket.findings.push(row.finding);
    bucket.parentFindingIds.add(row.finding.auditId);
  }

  const units = [];
  for (const bucket of byKey.values()) {
    const ownerStatus = findingsHaveSubstantiveConflict(bucket.findings)
      ? "OWNER_CONFLICT_REVIEW_REQUIRED"
      : "PENDING_OWNER_DECISION";
    units.push({
      ...bucket,
      parentFindingIds: [...bucket.parentFindingIds],
      ownerStatus,
      findingCount: bucket.findings.length,
      autoApplyEligible: true,
    });
  }
  return units;
}

function classifyValidatedFindings(findings, registry) {
  const stats = {};
  const rows = [];
  for (const finding of findings) {
    const mapping = resolveG2A1AuditFinding(finding, registry);
    stats[mapping.status] = (stats[mapping.status] || 0) + 1;
    rows.push({ finding, mapping });
  }
  const autoApplyEligible = rows.filter((r) => r.mapping.autoApplyEligible).length;
  return { stats, rows, autoApplyEligible, total: findings.length };
}

module.exports = {
  RESOLVER_VERSION,
  AUTO_APPLY_ELIGIBLE_STATUSES,
  LEGACY_SEGMENT_ALIASES,
  NON_EXPORT_PREFIXES,
  WILDCARD_LEAF_ALLOWLIST,
  isDeFieldPath,
  normalizeSegment,
  splitFieldPath,
  verifyCardIdentity,
  cardIdMatchesEntry,
  keysUnderRelative,
  buildG2A1AuditKeyRegistry,
  resolveG2A1AuditFinding,
  aggregateFindingsByCrowdinKey,
  classifyValidatedFindings,
  findingsHaveSubstantiveConflict,
  resolveSegment,
  mergeSegmentResults,
  expandWildcard,
};
