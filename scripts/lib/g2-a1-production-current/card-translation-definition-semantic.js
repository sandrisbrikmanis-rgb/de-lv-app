#!/usr/bin/env node
"use strict";

const PAIRS = require("../data/card-translation-definition-semantic-pairs.json");

function normalizeFrag(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKC");
}

function includesAllMarkers(fragment, markers) {
  const f = normalizeFrag(fragment);
  return (markers || []).every((m) => f.includes(String(m).toLowerCase()));
}

function adapterKind(adapterId, entryUrl) {
  const id = String(adapterId || "").toLowerCase();
  const url = String(entryUrl || "").toLowerCase();
  if (id.includes("dwds") || url.includes("dwds.de")) return "dwds";
  if (id.includes("duden") || url.includes("duden.de")) return "duden";
  return id.split("-")[0] || "unknown";
}

function targetAdapterMatches(pattern, targetAuthority) {
  if (!pattern) return true;
  const re = new RegExp(pattern, "i");
  const id = String(targetAuthority?.adapterId || "");
  const url = String(targetAuthority?.entryUrl || targetAuthority?.finalUrl || "");
  return re.test(id) || re.test(url);
}

function findRegistryPair(deLemma, appLang, targetLemma) {
  const de = String(deLemma || "").trim();
  const lang = String(appLang || "").trim();
  const target = String(targetLemma || "").trim().toLowerCase();
  return (PAIRS.pairs || []).find(
    (p) =>
      p.deLemma === de &&
      p.appLang === lang &&
      String(p.targetLemma || "").trim().toLowerCase() === target,
  );
}

/**
 * Valodas iekšējie marķieri + reģistrs — nav krusteniskas DE/ET vārdu tokenu sakritības.
 */
function assessRegistryDefinitionAlignment(deAuthority, targetAuthority, cardGerman, currentTarget, appLang) {
  const targetLemma = String(currentTarget || "").trim();
  const pair = findRegistryPair(cardGerman?.lemma, appLang, targetLemma);
  if (!pair) {
    return { matched: false, reason: "NO_REGISTERED_DEFINITION_PAIR", pairId: null };
  }

  const deKind = adapterKind(deAuthority?.adapterId, deAuthority?.entryUrl);
  if (pair.deAuthorityKinds?.length && !pair.deAuthorityKinds.includes(deKind)) {
    return { matched: false, reason: "DE_AUTHORITY_KIND_MISMATCH", pairId: pair.id, deKind };
  }
  if (!targetAdapterMatches(pair.targetAuthorityIdPattern, targetAuthority)) {
    return { matched: false, reason: "TARGET_AUTHORITY_PATTERN_MISMATCH", pairId: pair.id };
  }

  const deFrag = deAuthority?.evidenceFragment || "";
  const targetFrag = targetAuthority?.evidenceFragment || "";

  if (pair.deDefinitionIncludes?.length && !includesAllMarkers(deFrag, pair.deDefinitionIncludes)) {
    return { matched: false, partial: true, reason: "DE_DEFINITION_MARKERS_INCOMPLETE", pairId: pair.id };
  }

  if (pair.targetEtymologyReferencesDeLemma) {
    const esc = String(cardGerman.lemma || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!new RegExp(`\\b${esc}\\b`, "i").test(targetFrag)) {
      return { matched: false, partial: true, reason: "TARGET_ETYMOLOGY_DE_LEMMA_MISSING", pairId: pair.id };
    }
  } else if (pair.targetDefinitionIncludes?.length && !includesAllMarkers(targetFrag, pair.targetDefinitionIncludes)) {
    return { matched: false, partial: true, reason: "TARGET_DEFINITION_MARKERS_INCOMPLETE", pairId: pair.id };
  }

  return {
    matched: true,
    reason: "REGISTERED_UNAMBIGUOUS_DEFINITION_PAIR",
    pairId: pair.id,
    semanticLabel: pair.semanticLabel,
  };
}

module.exports = {
  PAIRS,
  findRegistryPair,
  assessRegistryDefinitionAlignment,
  includesAllMarkers,
};
