#!/usr/bin/env node
"use strict";

const DATA = require("../data/card-translation-definition-semantic-pairs.json");

function normalizeFrag(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKC");
}

function includesAllMarkers(fragment, markers) {
  const f = normalizeFrag(fragment);
  return (markers || []).every((m) => f.includes(String(m).toLowerCase()));
}

function includesAnyMarker(fragment, markers) {
  const f = normalizeFrag(fragment);
  return (markers || []).some((m) => f.includes(String(m).toLowerCase()));
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

function conceptProfilesForLemma(appLang, deLemma) {
  const lang = String(appLang || "").trim();
  const lemma = String(deLemma || "").trim();
  return (DATA.conceptProfiles || []).filter(
    (p) => p.appLang === lang && (p.deLemmaExamples || []).includes(lemma),
  );
}

function evaluateConceptProfile(profile, deAuthority, targetAuthority, cardGerman, deFrag, targetFrag) {
  const deKind = adapterKind(deAuthority?.adapterId, deAuthority?.entryUrl);
  if (profile.deAuthorityKinds?.length && !profile.deAuthorityKinds.includes(deKind)) {
    return { ok: false, partial: false, reason: "DE_AUTHORITY_KIND_MISMATCH", conceptId: profile.id };
  }
  if (!targetAdapterMatches(profile.targetAuthorityIdPattern, targetAuthority)) {
    return { ok: false, partial: false, reason: "TARGET_AUTHORITY_PATTERN_MISMATCH", conceptId: profile.id };
  }

  const targetHeadword = String(targetAuthority?.entryHeadwordOrRule || "").trim();
  const targetMarkerHaystack = `${targetFrag} ${targetHeadword}`.trim();

  const deRequiredOk = includesAllMarkers(deFrag, profile.deMarkersRequired);
  const deExcludedHit = includesAnyMarker(deFrag, profile.deMarkersExcluded);
  const targetRequiredOk = profile.targetMarkersRequired?.length
    ? includesAllMarkers(targetMarkerHaystack, profile.targetMarkersRequired)
    : true;
  const targetExcludedHit = includesAnyMarker(targetMarkerHaystack, profile.targetMarkersExcluded);

  if (profile.targetEtymologyReferencesDeLemma) {
    const esc = String(cardGerman?.lemma || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!new RegExp(`\\b${esc}\\b`, "i").test(targetFrag)) {
      return {
        ok: false,
        partial: deRequiredOk,
        reason: "TARGET_ETYMOLOGY_DE_LEMMA_MISSING",
        conceptId: profile.id,
      };
    }
  }

  if (!deRequiredOk || deExcludedHit) {
    return {
      ok: false,
      partial: includesAnyMarker(deFrag, profile.deMarkersRequired),
      reason: deExcludedHit ? "DE_DEFINITION_EXCLUDED_MARKER" : "DE_CONCEPT_MARKERS_INCOMPLETE",
      conceptId: profile.id,
    };
  }

  if (targetExcludedHit) {
    return {
      ok: false,
      partial: true,
      reason: "DEFINITION_SEMANTIC_MISMATCH",
      conceptId: profile.id,
      detail: "TARGET_DEFINITION_EXCLUDED_MARKER",
    };
  }

  if (!targetRequiredOk) {
    const sharedPartial =
      profile.targetMarkersRequired?.length &&
      includesAnyMarker(targetFrag, profile.targetMarkersRequired);
    return {
      ok: false,
      partial: Boolean(sharedPartial),
      reason: "DEFINITION_SEMANTIC_MISMATCH",
      conceptId: profile.id,
      detail: "TARGET_CONCEPT_MARKERS_INCOMPLETE",
    };
  }

  return {
    ok: true,
    reason: "CONCEPT_DEFINITION_UNAMBIGUOUS",
    conceptId: profile.id,
    semanticLabel: profile.id,
  };
}

/**
 * Jēdzienu profila salīdzinājums (nav iepriekš reģistrēta DE→TARGET pāra kā vārtejas).
 */
function assessConceptDefinitionEquivalence(deAuthority, targetAuthority, cardGerman, currentTarget, appLang) {
  const profiles = conceptProfilesForLemma(appLang, cardGerman?.lemma);
  if (!profiles.length) {
    return {
      matched: false,
      partial: false,
      reason: "NO_CONCEPT_PROFILE_FOR_LEMMA",
      conceptId: null,
    };
  }

  const deFrag = deAuthority?.evidenceFragment || "";
  const targetFrag = targetAuthority?.evidenceFragment || "";

  let bestPartial = null;
  for (const profile of profiles) {
    const ev = evaluateConceptProfile(profile, deAuthority, targetAuthority, cardGerman, deFrag, targetFrag);
    if (ev.ok) {
      return {
        matched: true,
        partial: false,
        reason: ev.reason,
        conceptId: ev.conceptId,
        semanticLabel: ev.semanticLabel,
      };
    }
    if (ev.partial) {
      bestPartial = ev;
    } else if (!bestPartial) {
      bestPartial = ev;
    }
  }

  return {
    matched: false,
    partial: Boolean(bestPartial?.partial),
    reason: bestPartial?.reason || "DEFINITION_SEMANTIC_MISMATCH",
    conceptId: bestPartial?.conceptId || profiles[0]?.id,
    detail: bestPartial?.detail || null,
  };
}

module.exports = {
  DATA,
  conceptProfilesForLemma,
  assessConceptDefinitionEquivalence,
  includesAllMarkers,
  includesAnyMarker,
};
