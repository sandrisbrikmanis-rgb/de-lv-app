#!/usr/bin/env node
"use strict";

/** MASTER G2/A1 access tiers for full automated audit (A/B/C*) vs blockers (D/E). */
const ACCESS_STATUS = Object.freeze({
  A: "OFFICIAL_ENTRY_HTTP_OR_API",
  B: "OFFICIAL_BROWSER_ENTRY",
  C1: "OFFICIAL_DOWNLOADABLE_DICTIONARY_DATASET",
  C2: "OFFICIAL_TERMINOLOGY_DATABASE",
  C3: "OFFICIAL_CORPUS_WITH_REPRODUCIBLE_QUERY",
  C4: "OFFICIAL_PDF_XML_JSON_CSV_TEI_MATERIAL",
  C5: "OFFICIAL_MULTI_SOURCE_BUNDLE",
  D: "OFFICIAL_MANUAL_ONLY",
  E: "NO_USABLE_OFFICIAL_SOURCE",
});

const AUTOMATED_TIERS = new Set([
  ACCESS_STATUS.A,
  ACCESS_STATUS.B,
  ACCESS_STATUS.C1,
  ACCESS_STATUS.C2,
  ACCESS_STATUS.C3,
  ACCESS_STATUS.C4,
  ACCESS_STATUS.C5,
]);

function automatedAuditUsableForTier(tier) {
  return AUTOMATED_TIERS.has(tier);
}

function tierFromProbe(probe) {
  if (!probe) return ACCESS_STATUS.E;
  if (probe.accessStatus) return probe.accessStatus;
  if (probe.bundleComplete && probe.sourceBundleId) return ACCESS_STATUS.C5;
  if (probe.validated && probe.accessMethod === "HTTP_FETCH") return ACCESS_STATUS.A;
  if (probe.validated && probe.accessMethod === "PUBLIC_BROWSER_SESSION") return ACCESS_STATUS.B;
  if (probe.validated && probe.datasetFormat) return ACCESS_STATUS.C1;
  if (probe.manualOfficialOnly) return ACCESS_STATUS.D;
  return ACCESS_STATUS.E;
}

module.exports = {
  ACCESS_STATUS,
  AUTOMATED_TIERS,
  automatedAuditUsableForTier,
  tierFromProbe,
};
