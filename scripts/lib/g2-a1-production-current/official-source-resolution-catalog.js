#!/usr/bin/env node
"use strict";

/**
 * Research catalog for 18 blocked TARGET languages (14 D + 4 E at task start).
 * Proposed sources require OWNER_APPROVAL before MASTER registry merge.
 */
const RESOLUTION_LANGUAGES = Object.freeze([
  "bg",
  "bs",
  "fr",
  "hr",
  "hu",
  "is",
  "it",
  "lb",
  "lt",
  "mk",
  "nl",
  "pl",
  "pt",
  "ro",
  "sq",
  "sr",
  "sv",
  "uk",
]);

const E_PRIORITY = Object.freeze(["bs", "sq", "sr", "mk"]);

const PROPOSED_SOURCES = Object.freeze({
  bs: {
    currentBlocker: "MASTER lacks PRIMARY_DICTIONARY entry URL for automated or manual entry chain",
    proposals: [
      {
        proposalId: "bs-izj-archive-rbj-c4",
        institutionName: "Univerzitet u Sarajevu — Institut za jezik",
        institutionCountry: "Bosnia and Herzegovina",
        institutionRole: "national_university_language_institute",
        resourceName: "Rječnik bosanskoga jezika (Institut za jezik, 2007) — Internet Archive digitization",
        resourceType: "OFFICIAL_PDF_XML_JSON_CSV_TEI_MATERIAL",
        sourceUrl: "https://archive.org/details/RjenikBosanskogJezikaInstitutZaJezikSarajevo2007.",
        officialStatusEvidence:
          "Publisher: Institut za jezik UNSA (named on Archive item); national institute listed in MASTER LANGUAGE_NORM.",
        licenseOrAccess: "Internet Archive public borrow/stream; not a substitute for institute-hosted API.",
        provesClaims: ["TARGET_LEMMA", "TARGET_SPELLING"],
        meaningCoverage: "partial_requires_extraction_pipeline",
        automationMethod: "C4 deterministic OCR/page extraction prototype (not merged to MASTER)",
        recommendedMasterRole: "PRIMARY_DICTIONARY",
      },
    ],
  },
  sq: {
    currentBlocker: "MASTER lacks PRIMARY_DICTIONARY entry URL for automated or manual entry chain",
    proposals: [
      {
        proposalId: "sq-fjalori-online-b",
        institutionName: "Akademia e Shkencave e Shqipërisë",
        institutionCountry: "Albania",
        institutionRole: "national_academy",
        resourceName: "Fjalor i madh i gjuhës shqipe (fjalori.online — linked from akad.gov.al)",
        resourceType: "OFFICIAL_BROWSER_ENTRY",
        sourceUrl: "https://www.fjalori.online/",
        officialStatusEvidence:
          "Site metadata names Academy of Sciences of Albania; linked from official akad.gov.al navigation.",
        licenseOrAccess: "Public HTTPS search; no authentication in probe.",
        provesClaims: ["TARGET_LEMMA", "TARGET_MEANING", "TARGET_WORD_CLASS"],
        automationMethod: "Browser search ?search={lemma}&mode=exact",
        recommendedMasterRole: "PRIMARY_DICTIONARY",
        probeId: "sq-fjalori-online",
      },
    ],
  },
  sr: {
    currentBlocker:
      "MASTER lists maticasrpska.org.rs without verified public lemma→entry URL; ISJ site has no validated entry deep-link",
    proposals: [
      {
        proposalId: "sr-raskovnik-sanu-b",
        institutionName: "Institut za srpski jezik SANU",
        institutionCountry: "Serbia",
        institutionRole: "national_language_institute",
        resourceName: "Raskovnik — srpski leksikografski portal (SANU)",
        resourceType: "OFFICIAL_BROWSER_ENTRY",
        sourceUrl: "https://raskovnik.org/",
        officialStatusEvidence:
          "Platform footer: Institut za srpski jezik SANU; DARIAH-RS digital humanities partnership.",
        licenseOrAccess: "Public search (Algolia-backed); reproducible lemma URL /reci/{lemma}/all",
        provesClaims: ["TARGET_LEMMA", "TARGET_MEANING", "TARGET_WORD_CLASS"],
        automationMethod: "Browser search → entry URL pattern raskovnik.org/reci/{lemma}/all",
        recommendedMasterRole: "PRIMARY_DICTIONARY",
        probeId: "sr-raskovnik",
      },
    ],
  },
  mk: {
    currentBlocker: "drmj.eu unreachable (ERR_CONNECTION_CLOSED) from automation environment",
    proposals: [
      {
        proposalId: "mk-makedonski-gov-a",
        institutionName: "Vlada na Republika Severna Makedonija / IMJ — Makedonski.gov.mk",
        institutionCountry: "North Macedonia",
        institutionRole: "government_official_language_portal",
        resourceName: "Официјален дигитален толковен речник (makedonski.gov.mk)",
        resourceType: "OFFICIAL_BROWSER_ENTRY",
        sourceUrl: "https://makedonski.gov.mk/",
        officialStatusEvidence:
          "Government .gov.mk domain; official digital explanatory dictionary of Macedonian.",
        licenseOrAccess: "Public search UI without login in live probe.",
        provesClaims: ["TARGET_LEMMA", "TARGET_MEANING", "TARGET_WORD_CLASS"],
        automationMethod: "Browser search on official portal",
        recommendedMasterRole: "PRIMARY_DICTIONARY",
        probeId: "mk-makedonski-gov",
      },
    ],
  },
});

module.exports = {
  RESOLUTION_LANGUAGES,
  E_PRIORITY,
  PROPOSED_SOURCES,
};
