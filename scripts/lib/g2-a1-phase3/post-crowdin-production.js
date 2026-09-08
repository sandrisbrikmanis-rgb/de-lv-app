#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT, loadArrayDataset } = require("../audit-common");
const { resolveCardSlug, slugify } = require("../content-crowdin-bridge/slug");
const { buildG2A1AuditKeyRegistry } = require("../content-crowdin-bridge/g2-a1-audit-key-resolver");

const POST_CROWDIN_STATES = new Set([
  "UNCHANGED_SINCE_DISCOVERY",
  "CHANGED_SINCE_DISCOVERY",
  "ALREADY_MATCHES_PROPOSED",
  "TARGET_NOT_FOUND",
  "FIELD_NOT_FOUND",
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

function getAt(obj, fieldPath) {
  if (!obj || !fieldPath) return undefined;
  const primary = String(fieldPath).split(",")[0].trim();
  if (primary === "lv") return obj.lv;
  const normalized = primary.startsWith("study.") ? primary.slice("study.".length) : primary;
  const parts = normalized.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let current = primary.startsWith("study.") ? obj.study : obj;
  for (const part of parts) {
    if (current == null) return undefined;
    current = current[part];
  }
  return current;
}

function readFieldFromCard(card, fieldPath) {
  if (!card) return null;
  const value = getAt(card, fieldPath);
  if (value === undefined) return null;
  return formatFieldValue(value);
}

function loadProductionCards(lang, mirror = false) {
  const rel = productionRel(lang, mirror);
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) return [];
  return loadArrayDataset(rel) || [];
}

function buildProductionRegistry(cards, level = "a1") {
  return buildG2A1AuditKeyRegistry({ level, cards, lvFlat: {} });
}

function resolveCardByStableIdentity(cards, registry, finding) {
  const lookupKeys = [];
  if (finding.cardId && finding.cardId !== "unknown") {
    lookupKeys.push(String(finding.cardId).trim().toLowerCase());
  }
  if (finding.objectId) {
    lookupKeys.push(String(finding.objectId).trim().toLowerCase());
    lookupKeys.push(slugify(finding.objectId));
  }

  for (const key of lookupKeys) {
    const hits = registry.aliasIndex.get(key) || [];
    const uniqueIndices = [...new Set(hits.map((h) => h.index))];
    if (uniqueIndices.length === 1) {
      const hit = hits.find((h) => h.index === uniqueIndices[0]);
      return {
        card: cards[uniqueIndices[0]],
        slug: hit?.slug || resolveCardSlug(cards[uniqueIndices[0]]),
        method: "stable-id",
      };
    }
    if (uniqueIndices.length > 1) {
      return { ambiguous: true, reason: "AMBIGUOUS_STABLE_ID" };
    }
  }

  const slug = slugify(finding.objectId || finding.cardId || "");
  const meta = registry.bySlug.get(slug);
  if (meta && registry.slugCounts.get(slug) === 1) {
    return { card: meta.entry, slug, method: "unique-slug" };
  }

  return { notFound: true, reason: "TARGET_NOT_FOUND" };
}

function computePostCrowdinState(discoveryCurrent, productionCurrent, proposed) {
  if (productionCurrent === null) return null;
  const disc = discoveryCurrent ?? "";
  const prod = productionCurrent ?? "";
  const prop = proposed ?? "";
  if (prop && prod === prop) return "ALREADY_MATCHES_PROPOSED";
  if (disc === prod) return "UNCHANGED_SINCE_DISCOVERY";
  return "CHANGED_SINCE_DISCOVERY";
}

function resolveProductionContext(finding, caches) {
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
  if (primaryResolved.notFound || primaryResolved.ambiguous) {
    return {
      productionCurrent: null,
      productionCurrentMirror: null,
      primaryWwwParity: "N/A",
      postCrowdinState: "TARGET_NOT_FOUND",
      resolutionMethod: primaryResolved.reason || "TARGET_NOT_FOUND",
      positionalMappingUsed: false,
      fuzzyMappingUsed: false,
    };
  }

  const mirrorResolved = resolveCardByStableIdentity(
    cache.mirrorCards,
    cache.mirrorRegistry,
    finding,
  );
  const productionCurrent = readFieldFromCard(primaryResolved.card, finding.fieldPath);
  const productionCurrentMirror =
    mirrorResolved.card ? readFieldFromCard(mirrorResolved.card, finding.fieldPath) : null;

  if (productionCurrent === null) {
    return {
      productionCurrent: null,
      productionCurrentMirror,
      primaryWwwParity: productionCurrentMirror === null ? "PASS" : "FAIL",
      postCrowdinState: "FIELD_NOT_FOUND",
      resolutionMethod: primaryResolved.method,
      positionalMappingUsed: false,
      fuzzyMappingUsed: false,
    };
  }

  const parity =
    productionCurrentMirror === null || productionCurrent === productionCurrentMirror ? "PASS" : "FAIL";
  const postCrowdinState = computePostCrowdinState(
    finding.current,
    productionCurrent,
    finding.proposed,
  );

  return {
    productionCurrent,
    productionCurrentMirror,
    primaryWwwParity: parity,
    postCrowdinState,
    resolutionMethod: primaryResolved.method,
    positionalMappingUsed: false,
    fuzzyMappingUsed: false,
    stableSlug: primaryResolved.slug,
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
  const lvSource = readFieldFromCard(resolved.card, finding.fieldPath);
  return {
    lvSource: lvSource ?? readFieldFromCard(resolved.card, "lv"),
    deReference: resolved.card.de || finding.objectId || null,
  };
}

module.exports = {
  POST_CROWDIN_STATES,
  productionRel,
  formatFieldValue,
  getAt,
  loadProductionCards,
  buildProductionRegistry,
  resolveCardByStableIdentity,
  computePostCrowdinState,
  resolveProductionContext,
  resolveLvDeContext,
};
