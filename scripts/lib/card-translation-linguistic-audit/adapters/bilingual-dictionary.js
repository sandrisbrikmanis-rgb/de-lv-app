#!/usr/bin/env node
"use strict";

const { SOURCE_TYPES, EVIDENCE_STATUS } = require("../constants");

/**
 * Phase 1: bilingual dictionary OCR/MDZ/dLib lookup is not implemented.
 * Returns structured adapter status only (no invented glosses).
 */
async function lookupBilingualDictionaryEntry({ source, deLemma, targetLemma, language }) {
  if (!source) {
    return {
      sourceType: SOURCE_TYPES.BILINGUAL_DICTIONARY,
      sourceName: null,
      sourceUrl: null,
      sourceDirection: null,
      evidenceStatus: EVIDENCE_STATUS.ADAPTER_NOT_IMPLEMENTED,
      evidenceNote: `No bilingual catalog source for language ${language}`,
      adapterId: "bilingual-dictionary-stub-v1",
      fetched: false,
    };
  }

  const sourceUrl =
    source.viewerUrl ||
    source.detailsUrl ||
    source.txtStreamVol1 ||
    source.ocrUrl ||
    source.portalUrl ||
    null;

  return {
    sourceType: SOURCE_TYPES.BILINGUAL_DICTIONARY,
    sourceName: source.name || source.id,
    sourceUrl,
    sourceDirection: source.direction || "de→target",
    evidenceStatus: EVIDENCE_STATUS.ADAPTER_NOT_IMPLEMENTED,
    evidenceNote: `Phase 1 stub: dictionary entry lookup not wired (source id ${source.id}); de=${deLemma || ""}`,
    adapterId: `bilingual-${source.id}`,
    fetched: false,
  };
}

module.exports = {
  lookupBilingualDictionaryEntry,
};
