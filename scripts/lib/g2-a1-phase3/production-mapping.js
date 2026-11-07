#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT, loadArrayDataset } = require("../audit-common");
const { resolveCardSlug, slugify } = require("../content-crowdin-bridge/slug");
const {
  buildG2A1AuditKeyRegistry,
  splitFieldPath,
  normalizeSegment,
  LEGACY_SEGMENT_ALIASES,
} = require("../content-crowdin-bridge/g2-a1-audit-key-resolver");
const FIELD_ALIAS_MAP = require("./field-alias-map.json");

const MAPPING_RESOLUTIONS = new Set([
  "EXACT_FIELD",
  "EXPLICIT_FIELD_ALIAS",
  "COMPOSITE_SCOPE_CAPTURED",
  "CONFIRMED_CARD_ABSENT",
  "CONFIRMED_FIELD_ABSENT",
]);

const POST_CROWDIN_STATES = new Set([
  "UNCHANGED_SINCE_DISCOVERY",
  "CHANGED_SINCE_DISCOVERY",
  "ALREADY_MATCHES_PROPOSED",
  "COMPOSITE_SCOPE_CAPTURED",
  "CONFIRMED_CARD_ABSENT",
  "CONFIRMED_FIELD_ABSENT",
]);

function productionRel(lang, mirror = false) {
  if (lang === "lv") return mirror ? "www/data/a1.js" : "data/a1.js";
  return mirror ? `www/data/${lang}/a1.js` : `data/${lang}/a1.js`;
}

function formatFieldValue(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value);
}

function parseNumericObjectIndex(finding) {
  const raw = finding.objectIndex ?? "";
  const fromField = String(raw).match(/idx:(\d+)/);
  if (fromField) return Number.parseInt(fromField[1], 10);
  const fromStable = String(finding.sourceFindingId || "").match(/idx:(\d+)/);
  if (fromStable) return Number.parseInt(fromStable[1], 10);
  if (typeof finding.objectIndex === "number" && !Number.isNaN(finding.objectIndex)) {
    return finding.objectIndex;
  }
  return null;
}

function getAt(obj, fieldPath) {
  if (!obj || fieldPath == null) return undefined;
  const primary = String(fieldPath).split(",")[0].trim();
  if (primary === "lv") return obj.lv;
  if (primary === "native") return obj.lv;
  const normalized = primary.startsWith("study.") ? primary.slice("study.".length) : primary;
  const parts = normalized.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let current = primary.startsWith("study.") ? obj.study : obj;
  for (const part of parts) {
    if (current == null) return undefined;
    if (Array.isArray(current) && /^\d+$/.test(part)) {
      current = current[Number(part)];
    } else {
      current = current[part];
    }
  }
  return current;
}

function readCardField(card, productionPath) {
  if (!card) return { found: false, value: null };
  const value = getAt(card, productionPath);
  if (value === undefined) return { found: false, value: null };
  return { found: true, value: formatFieldValue(value) };
}

function loadProductionCards(lang, mirror = false) {
  const rel = productionRel(lang, mirror);
  if (!fs.existsSync(path.join(ROOT, rel))) return [];
  return loadArrayDataset(rel) || [];
}

function buildProductionRegistry(cards, level = "a1") {
  return buildG2A1AuditKeyRegistry({ level, cards, lvFlat: {} });
}

function parseExportKeyFieldPath(fieldPath) {
  const m = String(fieldPath || "").match(new RegExp(FIELD_ALIAS_MAP.exportKeyPattern));
  if (!m) return null;
  return { slug: m[1], relativePath: m[2] };
}

function resolveSegmentProductionPath(segment) {
  const raw = String(segment || "").trim();
  if (!raw) return null;
  if (FIELD_ALIAS_MAP.segmentAliases[raw]) {
    const rule = FIELD_ALIAS_MAP.segmentAliases[raw];
    return {
      originalFieldPath: raw,
      resolvedProductionPath: rule.resolvedProductionPath,
      aliasRuleId: rule.aliasRuleId,
      aliased: true,
      compositeContainer: Boolean(rule.compositeContainer),
    };
  }
  const norm = normalizeSegment(raw);
  if (FIELD_ALIAS_MAP.segmentAliases[norm]) {
    const rule = FIELD_ALIAS_MAP.segmentAliases[norm];
    return {
      originalFieldPath: raw,
      resolvedProductionPath: rule.resolvedProductionPath,
      aliasRuleId: rule.aliasRuleId,
      aliased: true,
      compositeContainer: Boolean(rule.compositeContainer),
    };
  }
  if (LEGACY_SEGMENT_ALIASES[raw]) {
    return {
      originalFieldPath: raw,
      resolvedProductionPath: LEGACY_SEGMENT_ALIASES[raw],
      aliasRuleId: `LEGACY_${raw}`,
      aliased: true,
    };
  }
  if (norm === "study" || norm === "study.*") {
    return { originalFieldPath: raw, resolvedProductionPath: "study", compositeContainer: true, aliased: false };
  }
  if (norm.startsWith("study.") || norm === "lv") {
    const prodPath = norm === "lv" ? "lv" : norm;
    return { originalFieldPath: raw, resolvedProductionPath: prodPath, aliased: norm !== raw };
  }
  if (raw.startsWith("a1.card.")) {
    const parsed = parseExportKeyFieldPath(raw);
    if (parsed) {
      return {
        originalFieldPath: raw,
        resolvedProductionPath: parsed.relativePath,
        exportSlug: parsed.slug,
        aliased: false,
      };
    }
  }
  return { originalFieldPath: raw, resolvedProductionPath: norm || raw, aliased: norm !== raw };
}

function expandStudyContainerPaths(card) {
  const paths = [];
  for (const rel of FIELD_ALIAS_MAP.studyContainerPaths) {
    if (getAt(card, rel) !== undefined) paths.push(rel);
  }
  return paths;
}

function resolveCardByStableIdentity(cards, registry, finding) {
  const objectIndex = parseNumericObjectIndex(finding);
  const lookupKeys = [];
  if (finding.cardId && finding.cardId !== "unknown") {
    lookupKeys.push(String(finding.cardId).trim().toLowerCase());
  }
  if (finding.objectId) {
    lookupKeys.push(String(finding.objectId).trim().toLowerCase());
  }

  const tryHits = (hits) => {
    const uniqueIndices = [...new Set(hits.map((h) => h.index))];
    if (uniqueIndices.length === 1) {
      const idx = uniqueIndices[0];
      return {
        card: cards[idx],
        slug: hits.find((h) => h.index === idx)?.slug || resolveCardSlug(cards[idx]),
        method: "stable-id",
        objectIndex: idx,
      };
    }
    if (uniqueIndices.length > 1 && objectIndex != null && uniqueIndices.includes(objectIndex)) {
      return {
        card: cards[objectIndex],
        slug: hits.find((h) => h.index === objectIndex)?.slug || resolveCardSlug(cards[objectIndex]),
        method: "stable-id-index-disambiguated",
        objectIndex,
        disambiguationProof: "OBJECT_INDEX_DISAMBIGUATION",
      };
    }
    if (uniqueIndices.length > 1) {
      return { ambiguous: true, reason: "AMBIGUOUS_MAPPING", candidateIndices: uniqueIndices };
    }
    return null;
  };

  for (const key of lookupKeys) {
    const hits = registry.aliasIndex.get(key) || [];
    const resolved = tryHits(hits);
    if (resolved) return resolved;
  }

  const slugCandidates = [];
  if (finding.cardId) slugCandidates.push(slugify(finding.cardId));
  if (finding.objectId) slugCandidates.push(slugify(finding.objectId));
  for (const slug of slugCandidates) {
    const meta = registry.bySlug.get(slug);
    if (meta && registry.slugCounts.get(slug) === 1) {
      return { card: meta.entry, slug, method: "unique-slug", objectIndex: meta.index };
    }
  }

  return {
    notFound: true,
    reason: "CONFIRMED_CARD_ABSENT",
    absenceEvidence: {
      searchedStableIds: [...new Set([finding.cardId, finding.objectId].filter(Boolean))],
      searchedExactAliases: lookupKeys,
      parentObjectIdentity: finding.objectKey || null,
    },
  };
}

function findCardByExportSlug(cards, registry, slug) {
  const meta = registry.bySlug.get(slug);
  if (meta && registry.slugCounts.get(slug) === 1) {
    return { card: meta.entry, slug, objectIndex: meta.index };
  }
  const byStudyId = cards
    .map((entry, index) => ({ entry, index, slug: resolveCardSlug(entry) }))
    .filter((row) => row.entry?.study?.id === slug || row.slug === slug);
  if (byStudyId.length === 1) {
    return { card: byStudyId[0].entry, slug: byStudyId[0].slug, objectIndex: byStudyId[0].index };
  }
  if (byStudyId.length > 1) {
    return { ambiguous: true, reason: "AMBIGUOUS_MAPPING" };
  }
  return null;
}

function serializeComposite(valuesByPath) {
  return JSON.stringify(valuesByPath);
}

function computePostCrowdinState({ discoveryCurrent, productionCurrent, proposed, mappingResolution }) {
  if (mappingResolution === "CONFIRMED_CARD_ABSENT" || mappingResolution === "CONFIRMED_FIELD_ABSENT") {
    return mappingResolution;
  }
  if (mappingResolution === "COMPOSITE_SCOPE_CAPTURED") {
    return "COMPOSITE_SCOPE_CAPTURED";
  }
  const disc = discoveryCurrent ?? "";
  const prod = productionCurrent ?? "";
  const prop = proposed ?? "";
  if (prop && prod === prop) return "ALREADY_MATCHES_PROPOSED";
  if (disc === prod) return "UNCHANGED_SINCE_DISCOVERY";
  return "CHANGED_SINCE_DISCOVERY";
}

function resolveFieldOnCard(card, segmentSpec) {
  if (segmentSpec.compositeContainer) {
    const paths = expandStudyContainerPaths(card);
    const productionCurrentByPath = {};
    for (const rel of paths) {
      const { value } = readCardField(card, rel);
      productionCurrentByPath[rel] = value;
    }
    return {
      mappingResolution: "COMPOSITE_SCOPE_CAPTURED",
      originalFieldPath: segmentSpec.originalFieldPath,
      resolvedProductionPaths: paths,
      productionCurrentByPath,
      productionCurrent: serializeComposite(productionCurrentByPath),
      aliasRuleId: null,
    };
  }

  const relPath = segmentSpec.resolvedProductionPath;
  const { found, value } = readCardField(card, relPath);
  if (!found) {
    return {
      mappingResolution: "CONFIRMED_FIELD_ABSENT",
      originalFieldPath: segmentSpec.originalFieldPath,
      resolvedProductionPath: relPath,
      absenceEvidence: {
        searchedExactAliases: [segmentSpec.originalFieldPath, relPath],
        parentObjectIdentity: card?.de || card?.study?.id || null,
      },
    };
  }
  if (segmentSpec.aliased) {
    return {
      mappingResolution: "EXPLICIT_FIELD_ALIAS",
      originalFieldPath: segmentSpec.originalFieldPath,
      resolvedProductionPath: relPath,
      aliasRuleId: segmentSpec.aliasRuleId,
      productionCurrent: value,
    };
  }
  return {
    mappingResolution: "EXACT_FIELD",
    originalFieldPath: segmentSpec.originalFieldPath,
    resolvedProductionPath: relPath,
    productionCurrent: value,
  };
}

function resolveFieldMapping(finding, primaryCard, mirrorCard) {
  const exportParsed = parseExportKeyFieldPath(finding.fieldPath);
  if (exportParsed) {
    const segmentSpec = {
      originalFieldPath: finding.fieldPath,
      resolvedProductionPath: exportParsed.relativePath,
      aliased: false,
      exportSlug: exportParsed.slug,
    };
    const primary = resolveFieldOnCard(primaryCard, segmentSpec);
    const mirror = mirrorCard
      ? readCardField(mirrorCard, exportParsed.relativePath)
      : { found: false, value: null };
    return finalizeMapping(finding, primary, mirror);
  }

  const segments = splitFieldPath(finding.fieldPath);
  if (segments.length > 1 || String(finding.fieldPath).includes("/")) {
    const splitSegments =
      segments.length > 1 ? segments : String(finding.fieldPath).split("/").map((s) => s.trim()).filter(Boolean);
    const productionCurrentByPath = {};
    const resolvedProductionPaths = [];
    let hasAbsent = false;
    let aliasUsed = false;
    for (const segment of splitSegments) {
      const spec = resolveSegmentProductionPath(segment);
      if (!spec) continue;
      if (spec.compositeContainer) {
        const sub = resolveFieldOnCard(primaryCard, spec);
        Object.assign(productionCurrentByPath, sub.productionCurrentByPath || {});
        resolvedProductionPaths.push(...(sub.resolvedProductionPaths || []));
        continue;
      }
      const { found, value } = readCardField(primaryCard, spec.resolvedProductionPath);
      if (!found) {
        hasAbsent = true;
        productionCurrentByPath[spec.originalFieldPath] = null;
      } else {
        productionCurrentByPath[spec.originalFieldPath] = value;
        resolvedProductionPaths.push(spec.resolvedProductionPath);
        if (spec.aliased) aliasUsed = true;
      }
    }
    const primary = {
      mappingResolution: hasAbsent ? "CONFIRMED_FIELD_ABSENT" : "COMPOSITE_SCOPE_CAPTURED",
      originalFieldPath: finding.fieldPath,
      resolvedProductionPaths,
      productionCurrentByPath,
      productionCurrent: serializeComposite(productionCurrentByPath),
      aliasRuleId: aliasUsed ? "COMPOSITE_MULTI_SEGMENT" : null,
    };
    const mirrorByPath = {};
    if (mirrorCard) {
      for (const [key, primaryVal] of Object.entries(productionCurrentByPath)) {
        const spec = resolveSegmentProductionPath(key);
        if (spec?.compositeContainer) {
          const subPrimary = resolveFieldOnCard(primaryCard, spec);
          for (const rel of subPrimary.resolvedProductionPaths || []) {
            const { value } = readCardField(mirrorCard, rel);
            mirrorByPath[rel] = value ?? null;
          }
        } else {
          const rel = spec?.resolvedProductionPath || key;
          const { value } = readCardField(mirrorCard, rel);
          mirrorByPath[key] = value ?? null;
        }
      }
    }
    const mirror = {
      found: Object.keys(mirrorByPath).length > 0,
      value: serializeComposite(mirrorByPath),
    };
    return finalizeMapping(finding, primary, mirror);
  }

  const segmentSpec = resolveSegmentProductionPath(finding.fieldPath);
  const primary = resolveFieldOnCard(primaryCard, segmentSpec);
  let mirror;
  if (segmentSpec.compositeContainer && mirrorCard) {
    const mirrorByPath = {};
    for (const rel of primary.resolvedProductionPaths || []) {
      const { value } = readCardField(mirrorCard, rel);
      mirrorByPath[rel] = value ?? null;
    }
    mirror = { found: true, value: serializeComposite(mirrorByPath) };
  } else {
    mirror = mirrorCard
      ? readCardField(mirrorCard, primary.resolvedProductionPath || segmentSpec.resolvedProductionPath)
      : { found: false, value: null };
  }
  return finalizeMapping(finding, primary, mirror);
}

function finalizeMapping(finding, primary, mirror) {
  const productionCurrent = primary.productionCurrent ?? "";
  const productionCurrentMirror = mirror.found ? mirror.value : "";
  const parity =
    productionCurrentMirror === productionCurrent ||
    (productionCurrent === "" && productionCurrentMirror === "")
      ? "PASS"
      : "FAIL";
  const postCrowdinState = computePostCrowdinState({
    discoveryCurrent: finding.current,
    productionCurrent,
    proposed: finding.proposed,
    mappingResolution: primary.mappingResolution,
  });
  return {
    ...primary,
    productionCurrent,
    productionCurrentMirror,
    primaryWwwParity: parity,
    postCrowdinState,
    positionalMappingUsed: false,
    fuzzyMappingUsed: false,
  };
}

function resolveProductionMapping(finding, caches) {
  const lang = finding.lang;
  if (!caches.has(lang)) {
    const primaryCards = loadProductionCards(lang, false);
    const mirrorCards = loadProductionCards(lang, true);
    caches.set(lang, {
      primaryCards,
      mirrorCards,
      primaryRegistry: buildProductionRegistry(primaryCards),
      mirrorRegistry: buildProductionRegistry(mirrorCards),
    });
  }
  const cache = caches.get(lang);
  const primaryResolved = resolveCardByStableIdentity(
    cache.primaryCards,
    cache.primaryRegistry,
    finding,
  );
  if (primaryResolved.notFound) {
    return {
      mappingResolution: "CONFIRMED_CARD_ABSENT",
      productionCurrent: "",
      productionCurrentMirror: "",
      primaryWwwParity: "N/A",
      postCrowdinState: "CONFIRMED_CARD_ABSENT",
      absenceEvidence: primaryResolved.absenceEvidence,
      positionalMappingUsed: false,
      fuzzyMappingUsed: false,
      cardResolutionMethod: primaryResolved.reason,
    };
  }
  if (primaryResolved.ambiguous) {
    return {
      mappingResolution: "AMBIGUOUS_MAPPING",
      productionCurrent: "",
      productionCurrentMirror: "",
      primaryWwwParity: "N/A",
      postCrowdinState: "AMBIGUOUS_MAPPING",
      positionalMappingUsed: false,
      fuzzyMappingUsed: false,
      candidateIndices: primaryResolved.candidateIndices,
    };
  }

  const exportParsed = parseExportKeyFieldPath(finding.fieldPath);
  let primaryCard = primaryResolved.card;
  let mirrorCard = null;
  if (exportParsed) {
    const bySlugPrimary = findCardByExportSlug(cache.primaryCards, cache.primaryRegistry, exportParsed.slug);
    const bySlugMirror = findCardByExportSlug(cache.mirrorCards, cache.mirrorRegistry, exportParsed.slug);
    if (bySlugPrimary?.ambiguous || bySlugMirror?.ambiguous) {
      return {
        mappingResolution: "AMBIGUOUS_MAPPING",
        productionCurrent: "",
        productionCurrentMirror: "",
        primaryWwwParity: "N/A",
        postCrowdinState: "AMBIGUOUS_MAPPING",
        positionalMappingUsed: false,
        fuzzyMappingUsed: false,
      };
    }
    if (bySlugPrimary?.card) primaryCard = bySlugPrimary.card;
    if (bySlugMirror?.card) mirrorCard = bySlugMirror.card;
  } else {
    const mirrorResolved = resolveCardByStableIdentity(
      cache.mirrorCards,
      cache.mirrorRegistry,
      finding,
    );
    mirrorCard = mirrorResolved.card || null;
  }

  const fieldMapping = resolveFieldMapping(finding, primaryCard, mirrorCard);
  return {
    ...fieldMapping,
    stableSlug: primaryResolved.slug,
    cardResolutionMethod: primaryResolved.method,
    disambiguationProof: primaryResolved.disambiguationProof || null,
  };
}

function resolveLvDeContext(finding, lvCache) {
  if (!lvCache.registry) {
    const lvCards = loadProductionCards("lv", false);
    lvCache.cards = lvCards;
    lvCache.registry = buildProductionRegistry(lvCards);
  }
  const resolved = resolveCardByStableIdentity(lvCache.cards, lvCache.registry, finding);
  if (!resolved.card) {
    return { lvSource: null, deReference: finding.objectId || finding.cardId || null };
  }
  const segmentSpec = resolveSegmentProductionPath(finding.fieldPath);
  const paths =
    segmentSpec?.compositeContainer
      ? expandStudyContainerPaths(resolved.card)
      : [segmentSpec?.resolvedProductionPath || finding.fieldPath];
  const lvSource = readCardField(resolved.card, paths[0] || "lv");
  return {
    lvSource: lvSource.found ? lvSource.value : readCardField(resolved.card, "lv").value,
    deReference: resolved.card.de || finding.objectId || null,
  };
}

function diagnoseMappingFailure(finding, preRepairState) {
  const mapping = resolveProductionMapping(finding, new Map());
  return {
    findingStableId: finding.sourceFindingId,
    auditId: finding.auditId,
    preRepairPostCrowdinState: preRepairState,
    failureType: preRepairState,
    reviewTrack: finding.canonicalReviewBucket,
    rawCategory: finding.rawCategory,
    canonicalBucket: finding.canonicalReviewBucket,
    language: finding.lang,
    cardObjectId: finding.objectKey,
    fieldPath: finding.fieldPath,
    productionFile: finding.productionFile,
    postRepairMappingResolution: mapping.mappingResolution,
    postRepairPostCrowdinState: mapping.postCrowdinState,
    suggestedDeterministicResolution: mapping.mappingResolution,
    cardResolutionMethod: mapping.cardResolutionMethod || null,
    resolvedProductionPath: mapping.resolvedProductionPath || mapping.resolvedProductionPaths || null,
    aliasRuleId: mapping.aliasRuleId || null,
  };
}

module.exports = {
  FIELD_ALIAS_MAP,
  MAPPING_RESOLUTIONS,
  POST_CROWDIN_STATES,
  productionRel,
  formatFieldValue,
  getAt,
  parseNumericObjectIndex,
  loadProductionCards,
  buildProductionRegistry,
  resolveCardByStableIdentity,
  parseExportKeyFieldPath,
  resolveSegmentProductionPath,
  resolveFieldMapping,
  resolveProductionMapping,
  resolveLvDeContext,
  diagnoseMappingFailure,
  serializeComposite,
};
