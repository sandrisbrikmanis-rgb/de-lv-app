#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");

const AUDIT_CATALOG_REL = "scripts/lib/data/g2-a1-card-translation-bilingual-audit-fr-bg-bs.json";
const PILOT_VERIFY_REL =
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-bg-bs-fr-pilot-verify/pdf-bilingual-dictionary-bg-bs-fr-pilot-verify.json";

const LANGS = Object.freeze(["fr", "bg", "bs"]);

function readJson(rel) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function frRegressionFromPilot(pilot) {
  const block = pilot?.pilotVerification?.fr?.sachsVillatte1906;
  const deRows = block?.deToTarget || [];
  const rev = block?.targetToDe;
  const regression = deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: 1,
    primaryDirection: "de→fr",
    sourceName: "Sachs–Villatte 1906 (IA OCR)",
    pairFound: row.found === true,
    targetGloss: row.found ? "FOUND_IN_OCR" : null,
    entryUrl: "https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt",
    note: null,
    supplementUsed: false,
  }));
  if (rev) {
    regression.push({
      deLemma: "(reverse) Maison",
      auditStepUsed: 1,
      primaryDirection: "fr→de",
      sourceName: "Sachs–Villatte 1906 (IA OCR)",
      pairFound: rev.found === true,
      targetGloss: rev.found ? "Maison → DE attested" : null,
      entryUrl: "https://archive.org/download/sachsvillatteenz00sachuoft/sachsvillatteenz00sachuoft_djvu.txt",
      note: "Production Haus target: Maison",
      supplementUsed: false,
    });
  }
  return regression;
}

function bgRegressionFromPilot(pilot) {
  const block = pilot?.pilotVerification?.bg?.mdzMiladinovVol1;
  const deRows = block?.deToTarget || [];
  const regression = deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: 1,
    primaryDirection: "de→bg",
    sourceName: "Miladinov vol. I MDZ/BSB (IIIF OCR sample)",
    pairFound: row.found === true,
    targetGloss: row.found ? "FOUND_IN_SCAN_SAMPLE" : null,
    entryUrl: row.pageIndex
      ? `https://www.digitale-sammlungen.de/de/view/bsb11814571?page=${row.pageIndex}`
      : "https://www.digitale-sammlungen.de/de/view/bsb11814571?page=1",
    note: row.caveat || row.method || null,
    supplementUsed: false,
  }));
  const rev = block?.targetToDe;
  if (rev) {
    regression.push({
      deLemma: "(reverse) къща",
      auditStepUsed: 2,
      primaryDirection: "bg→de",
      sourceName: "Vol. II HathiTrust / MultiSlavDict (chain — not pilot-checked)",
      pairFound: rev.found === true,
      targetGloss: null,
      entryUrl: "https://babel.hathitrust.org/cgi/pt?id=harvard.32044086444973",
      note: rev.reason || "BG→DE requires vol. II chain per audit catalog",
      supplementUsed: false,
    });
  }
  return regression;
}

function bsRegressionFromPilot(pilot) {
  const deRows = pilot?.pilotVerification?.bs?.deToTarget || [];
  return deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: 0,
    primaryDirection: "n/a",
    sourceName: "—",
    pairFound: false,
    targetGloss: null,
    entryUrl: null,
    note: row.reason || "NOT_FOUND_DIGITIZED",
    supplementUsed: false,
  }));
}

function regressionForLang(appLang, pilot) {
  if (appLang === "fr") return frRegressionFromPilot(pilot);
  if (appLang === "bg") return bgRegressionFromPilot(pilot);
  if (appLang === "bs") return bsRegressionFromPilot(pilot);
  return [];
}

function classifyLang(appLang, cat, pilotSummary) {
  if (appLang === "bs") {
    const status = cat?.digitizedAuditStatus || pilotSummary?.status;
    return status === "NOT_FOUND_DIGITIZED" || status === "NOT_FOUND"
      ? "BS_NOT_FOUND_DIGITIZED"
      : "BS_UNEXPECTED_STATUS";
  }
  const hasPrimary = (cat?.primaryDigitized?.length || 0) >= 1;
  if (!hasPrimary) return `${appLang.toUpperCase()}_BILINGUAL_AUDIT_INCOMPLETE`;
  const pilotStatus = pilotSummary?.status;
  if (pilotStatus === "PARTIAL" || pilotStatus === "OK") {
    return `${appLang.toUpperCase()}_DIGITIZED_SOURCES_REGISTERED`;
  }
  return `${appLang.toUpperCase()}_DIGITIZED_SOURCES_REGISTERED`;
}

function buildFrBgBsReadinessReport() {
  const catalog = readJson(AUDIT_CATALOG_REL);
  const pilot = readJson(PILOT_VERIFY_REL);
  if (!catalog) {
    throw new Error(`Missing audit catalog: ${AUDIT_CATALOG_REL}`);
  }

  const languages = LANGS.map((appLang) => {
    const cat = catalog.languages[appLang];
    const pilotSummary = pilot?.summary?.[appLang] || null;
    const regression = regressionForLang(appLang, pilot);

    return {
      appLang,
      digitizedAuditStatus: cat?.digitizedAuditStatus || null,
      primaryDigitized: cat?.primaryDigitized || [],
      reverseChainDigitized: cat?.reverseChainDigitized || [],
      supplementaryReserve: cat?.supplementaryReserve || [],
      rejectedNotUsable: cat?.rejectedNotUsable || [],
      sourceChainPriority: cat?.sourceChainPriority || [],
      collectorOverrideId: cat?.collectorOverrideId || null,
      targetOfficial: cat?.targetOfficial || null,
      regressionPilotDe: regression,
      pilotSummary,
      readinessClassification: classifyLang(appLang, cat, pilotSummary),
      usesNewAuditSources: appLang === "fr" || appLang === "bg",
    };
  });

  return {
    schemaVersion: "g2-a1-card-translation-fr-bg-bs-readiness-v1",
    generatedAt: new Date().toISOString(),
    auditSequence: catalog.auditSequence,
    automaticTranslationEvidenceForbidden: true,
    productionOrOwnerDecisionsModified: false,
    masterModified: false,
    languages,
    summary: {
      languageCount: LANGS.length,
      frPrimarySourceId: "sachs-villatte-1906",
      bgPrimarySourceId: "mdz-bsb-miladinov-vol1-1897",
      bgReverseChainIds: ["hathitrust-miladinov-vol2", "multislavdict-miladinov-1927"],
      bsStatus: "NOT_FOUND_DIGITIZED",
      note:
        "fr un bg izmanto jaunos digitizētos avotus no audita kataloga; bs paliek NOT_FOUND_DIGITIZED (nav derīga digitizēta DE↔BS ķēde).",
    },
    inputs: {
      auditCatalog: AUDIT_CATALOG_REL,
      pilotVerification: PILOT_VERIFY_REL,
    },
  };
}

module.exports = {
  LANGS,
  AUDIT_CATALOG_REL,
  PILOT_VERIFY_REL,
  buildFrBgBsReadinessReport,
  regressionForLang,
};
