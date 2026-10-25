#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");

const AUDIT_CATALOG_REL = "scripts/lib/data/g2-a1-card-translation-bilingual-audit-it-mk-nl.json";
const PILOT_VERIFY_REL =
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-it-mk-nl-pilot-verify/pdf-bilingual-dictionary-it-mk-nl-pilot-verify.json";
const DISCOVERY_REL =
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-it-mk-nl-discovery/pdf-bilingual-dictionary-it-mk-nl-discovery.json";

const LANGS = Object.freeze(["it", "mk", "nl"]);

function readJson(rel) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function itRegressionFromPilot(pilot) {
  const block = pilot?.pilotVerification?.it;
  const deRows = block?.deToTarget || [];
  const regression = deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: 1,
    primaryDirection: "de→it",
    sourceName: "BSB 11793257 vol. 1 (IA OCR)",
    pairFound: row.found === true,
    targetGloss: row.found ? "FOUND_IN_OCR" : null,
    entryUrl: "https://archive.org/download/11793257bsb/11793257bsb_djvu.txt",
    note: block?.mdzIiifSampleOk ? "MDZ IIIF sample OK" : null,
    supplementUsed: false,
  }));
  const rev = block?.targetToDe;
  if (rev) {
    regression.push({
      deLemma: "(reverse) casa",
      auditStepUsed: 1,
      primaryDirection: "it→de",
      sourceName: "BSB 11793257 vol. 1 (IA OCR)",
      pairFound: rev.found === true,
      targetGloss: rev.found ? "casa attested" : null,
      entryUrl: "https://archive.org/download/11793257bsb/11793257bsb_djvu.txt",
      note: null,
      supplementUsed: false,
    });
  }
  return regression;
}

function nlRegressionFromPilot(pilot) {
  const block = pilot?.pilotVerification?.nl;
  const deRows = block?.deToTarget || [];
  const regression = deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: 1,
    primaryDirection: "de→nl",
    sourceName: "Nieuw Woordenboek 1787 (3× IA OCR)",
    pairFound: row.found === true,
    targetGloss: row.found ? "FOUND_IN_OCR" : null,
    entryUrl: "https://archive.org/download/10523039bsb/10523039bsb_djvu.txt",
    note: block?.variantNotes?.kleinGeldSpaced
      ? "Klein geld spaced variant also in corpus"
      : null,
    supplementUsed: false,
  }));
  const rev = block?.targetToDe;
  if (rev) {
    regression.push({
      deLemma: "(reverse) Huis",
      auditStepUsed: 1,
      primaryDirection: "nl→de",
      sourceName: "Nieuw Woordenboek 1787 (3× IA OCR)",
      pairFound: rev.found === true,
      targetGloss: rev.found ? "Huis attested" : null,
      entryUrl: "https://archive.org/download/10523039bsb/10523039bsb_djvu.txt",
      note: null,
      supplementUsed: false,
    });
  }
  return regression;
}

function mkRegressionFromPilot(pilot) {
  const status = pilot?.summary?.mk;
  return (pilot?.pilotLemmasDe || []).map((lemma) => ({
    deLemma: lemma,
    auditStepUsed: 0,
    primaryDirection: "n/a",
    sourceName: "—",
    pairFound: false,
    targetGloss: null,
    entryUrl: null,
    note: status?.reason || "MK_NOT_FOUND_DIGITIZED",
    supplementUsed: false,
  }));
}

function regressionForLang(appLang, pilot) {
  if (appLang === "it") return itRegressionFromPilot(pilot);
  if (appLang === "nl") return nlRegressionFromPilot(pilot);
  if (appLang === "mk") return mkRegressionFromPilot(pilot);
  return [];
}

function classifyLang(appLang, cat, pilotSummary) {
  if (appLang === "mk") {
    return cat?.digitizedAuditStatus === "MK_NOT_FOUND_DIGITIZED"
      ? "MK_NOT_FOUND_DIGITIZED"
      : "MK_UNEXPECTED_STATUS";
  }
  if (appLang === "it") {
    const ready =
      cat?.digitizedAuditStatus === "READY" &&
      cat?.primaryDigitized?.[0]?.id === "ia-bsb-neues-it-de-11793257-vol1";
    if (!ready) return "IT_BILINGUAL_AUDIT_INCOMPLETE";
    if (pilotSummary?.status === "READY" || cat?.pilotNotes?.auditReady === true) {
      return "IT_DIGITIZED_SOURCES_REGISTERED_READY";
    }
    return "IT_DIGITIZED_SOURCES_REGISTERED_READY";
  }
  if (appLang === "nl") {
    const partial =
      cat?.digitizedAuditStatus === "PARTIAL" &&
      cat?.primaryDigitized?.[0]?.id === "ia-bsb-nieuw-woordenboek-nl-hoogduits-1787-3parts";
    if (!partial) return "NL_BILINGUAL_AUDIT_INCOMPLETE";
    return "NL_DIGITIZED_SOURCES_REGISTERED_PARTIAL";
  }
  return `${appLang.toUpperCase()}_UNKNOWN`;
}

function buildItMkNlReadinessReport() {
  const catalog = readJson(AUDIT_CATALOG_REL);
  const pilot = readJson(PILOT_VERIFY_REL);
  const discovery = readJson(DISCOVERY_REL);
  if (!catalog) {
    throw new Error(`Missing audit catalog: ${AUDIT_CATALOG_REL}`);
  }

  const languages = LANGS.map((appLang) => {
    const cat = catalog.languages[appLang];
    const pilotSummary = pilot?.summary?.[appLang] || null;
    const regression = regressionForLang(appLang, pilot);
    const discoveryBest = discovery?.bestFoundSource?.[appLang] || null;

    return {
      appLang,
      digitizedAuditStatus: cat?.digitizedAuditStatus || null,
      primaryDigitized: cat?.primaryDigitized || [],
      reverseChainDigitized: cat?.reverseChainDigitized || [],
      supplementaryReserve: cat?.supplementaryReserve || [],
      rejectedNotUsable: cat?.rejectedNotUsable || [],
      discoveryEvidenceOnly: cat?.discoveryEvidenceOnly || [],
      sourceChainPriority: cat?.sourceChainPriority || [],
      collectorOverrideId: cat?.collectorOverrideId || null,
      pilotNotes: cat?.pilotNotes || null,
      discoveryBestFound: discoveryBest,
      regressionPilotDe: regression,
      pilotSummary,
      readinessClassification: classifyLang(appLang, cat, pilotSummary),
      usesNewAuditSources: appLang === "it" || appLang === "nl",
      auditReady: cat?.pilotNotes?.auditReady === true,
    };
  });

  return {
    schemaVersion: "g2-a1-card-translation-it-mk-nl-readiness-v1",
    generatedAt: new Date().toISOString(),
    auditSequence: catalog.auditSequence,
    automaticTranslationEvidenceForbidden: true,
    productionOrOwnerDecisionsModified: false,
    masterModified: false,
    languages,
    summary: {
      languageCount: LANGS.length,
      itPrimarySourceId: "ia-bsb-neues-it-de-11793257-vol1",
      itStatus: "IT_DIGITIZED_SOURCES_REGISTERED_READY",
      nlPrimarySourceId: "ia-bsb-nieuw-woordenboek-nl-hoogduits-1787-3parts",
      nlStatus: "NL_DIGITIZED_SOURCES_REGISTERED_PARTIAL",
      mkStatus: "MK_NOT_FOUND_DIGITIZED",
      note:
        "it READY (BSB 11793257 + MDZ IIIF); nl PARTIAL (1787 3-part scan); mk no primary audit source.",
    },
    inputs: {
      auditCatalog: AUDIT_CATALOG_REL,
      pilotVerification: PILOT_VERIFY_REL,
      discoveryReport: DISCOVERY_REL,
    },
  };
}

module.exports = {
  LANGS,
  AUDIT_CATALOG_REL,
  PILOT_VERIFY_REL,
  DISCOVERY_REL,
  buildItMkNlReadinessReport,
  regressionForLang,
};
