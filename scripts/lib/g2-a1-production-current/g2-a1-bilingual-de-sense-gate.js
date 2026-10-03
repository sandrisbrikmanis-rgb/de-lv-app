#!/usr/bin/env node
"use strict";

const { isDeLemmaConfirmed } = require("./card-translation-audit-search");
const { isGermanDeAuthorityDwdsOrDuden } = require("./card-translation-audit-policy");

/**
 * Vai DE nozīmi var izmantot kā viennozīmīgu pierādījumu (tikai DWDS/Duden fragments).
 * EN palīglauks netiek ņemts vērā.
 */
function assessDeSenseUniqueness(deAuthority, cardGerman) {
  if (!isDeLemmaConfirmed(deAuthority)) {
    return { ok: false, reason: "NOT_CONFIRMED" };
  }
  if (!isGermanDeAuthorityDwdsOrDuden(deAuthority)) {
    return { ok: false, reason: "NOT_DWDS_OR_DUDEN" };
  }

  const frag = String(deAuthority.evidenceFragment || "").trim();
  if (frag.length < 40) {
    return { ok: false, reason: "EVIDENCE_TOO_WEAK" };
  }
  if (/Schreibung,\s*Definition,\s*Bedeutung,\s*Etymologie/i.test(frag)) {
    return { ok: false, reason: "META_DESCRIPTION_NOT_DEFINITION" };
  }

  const numbered = (frag.match(/(?:^|[\s(])[1-9]\.\s+/g) || []).length;
  if (numbered >= 2) {
    return { ok: false, reason: "MULTIPLE_NUMBERED_SENSES" };
  }

  const lemma = String(cardGerman?.lemma || "").trim();
  if (lemma && !new RegExp(`\\b${lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(frag)) {
    const hw = String(deAuthority.entryHeadwordOrRule || "").trim();
    if (!hw || hw.toLowerCase() !== lemma.toLowerCase()) {
      return { ok: false, reason: "LEMMA_NOT_IN_DE_EVIDENCE" };
    }
  }

  return { ok: true, reason: "DE_SENSE_UNIQUELY_ATTESTED" };
}

module.exports = {
  assessDeSenseUniqueness,
};
