#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");

const AUDIT_CATALOG_REL = "scripts/lib/data/g2-a1-card-translation-bilingual-audit-hr-hu-is.json";
const PILOT_VERIFY_REL =
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-hr-hu-is-pilot-verify/pdf-bilingual-dictionary-hr-hu-is-pilot-verify.json";

const LANGS = Object.freeze(["hr", "hu", "is"]);

function readJson(rel) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function hrRegressionFromPilot(pilot) {
  const block = pilot?.pilotVerification?.hr;
  const deRows = block?.deToTarget || [];
  const regression = deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: 1,
    primaryDirection: "de→hr",
    sourceName: "Šulek DE→HR vol. I (IA _djvu.txt)",
    pairFound: row.found === true,
    targetGloss: row.found ? "FOUND_IN_OCR" : null,
    entryUrl: "https://archive.org/download/bub_gb_qgstAAAAYAAJ/bub_gb_qgstAAAAYAAJ_djvu.txt",
    note: null,
    supplementUsed: false,
  }));
  const rev = block?.targetToDe;
  if (rev) {
    regression.push({
      deLemma: "(reverse) kuća",
      auditStepUsed: 2,
      primaryDirection: "hr→de",
      sourceName: "Filipović 1875 HR→DE A–O (IA OCR)",
      pairFound: rev.found === true,
      targetGloss: rev.found ? "kuća attested (P–Z gap)" : null,
      entryUrl:
        "https://archive.org/download/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic/novi_rjecnik_hrvatskoga_i_njemackoga_jezika_1_a-o_1875-ivan_filipovic_djvu.txt",
      note: "HR→DE incomplete A–O only — hr must not be READY",
      supplementUsed: false,
    });
  }
  return regression;
}

function huRegressionFromPilot(pilot) {
  const html = pilot?.pilotVerification?.huHtml;
  const deRows = html?.deToTarget || [];
  const regression = deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: 1,
    primaryDirection: "de→hu",
    sourceName: "MEK 00072 HTML (Molnár 1996)",
    pairFound: row.found === true,
    targetGloss: row.found ? "FOUND_IN_MEK_HTML" : null,
    entryUrl: row.page
      ? `https://mek.oszk.hu/00000/00072/html/${row.page}`
      : "https://mek.oszk.hu/00000/00072/html/index.htm",
    note: "MEK 24482 PDF also 4/6 in pilot (parallel primary)",
    supplementUsed: false,
  }));
  const rev = html?.targetToDe;
  if (rev) {
    regression.push({
      deLemma: "(reverse) Haus → ház",
      auditStepUsed: 1,
      primaryDirection: "de↔hu",
      sourceName: "MEK 00072 HTML h.htm",
      pairFound: rev.found === true,
      targetGloss: rev.found ? "Haus (s) → ház verified" : null,
      entryUrl: "https://mek.oszk.hu/00000/00072/html/h.htm",
      note: "REAL-EOD vol. 13 registered as HU→DE supplement only (pilot weak)",
      supplementUsed: false,
    });
  }
  return regression;
}

function isRegressionFromPilot(pilot) {
  const status = pilot?.summary?.is;
  return (pilot?.pilotLemmasDe || []).map((lemma) => ({
    deLemma: lemma,
    auditStepUsed: 0,
    primaryDirection: "n/a",
    sourceName: "—",
    pairFound: false,
    targetGloss: null,
    entryUrl: null,
    note: status?.reason || "IS_NOT_VERIFIED_DIGITIZED",
    supplementUsed: false,
  }));
}

function regressionForLang(appLang, pilot) {
  if (appLang === "hr") return hrRegressionFromPilot(pilot);
  if (appLang === "hu") return huRegressionFromPilot(pilot);
  if (appLang === "is") return isRegressionFromPilot(pilot);
  return [];
}

function classifyLang(appLang, cat, pilotSummary) {
  if (appLang === "is") {
    const status = cat?.digitizedAuditStatus;
    return status === "IS_NOT_VERIFIED_DIGITIZED" ? "IS_NOT_VERIFIED_DIGITIZED" : "IS_UNEXPECTED_STATUS";
  }
  if (appLang === "hr") {
    const partial =
      cat?.digitizedAuditStatus === "PARTIAL" &&
      (cat?.primaryDigitized?.length || 0) >= 2 &&
      (cat?.reverseChainDigitized?.length || 0) >= 1;
    if (!partial) return "HR_BILINGUAL_AUDIT_INCOMPLETE";
    if (pilotSummary?.status === "PARTIAL" || pilotSummary?.status === "OK") {
      return "HR_DIGITIZED_SOURCES_REGISTERED_PARTIAL";
    }
    return "HR_DIGITIZED_SOURCES_REGISTERED_PARTIAL";
  }
  if (appLang === "hu") {
    const partial =
      cat?.digitizedAuditStatus === "PARTIAL" && (cat?.primaryDigitized?.length || 0) >= 2;
    if (!partial) return "HU_BILINGUAL_AUDIT_INCOMPLETE";
    return "HU_DIGITIZED_SOURCES_REGISTERED_PARTIAL";
  }
  return `${appLang.toUpperCase()}_UNKNOWN`;
}

function buildHrHuIsReadinessReport() {
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
      pilotNotes: cat?.pilotNotes || null,
      regressionPilotDe: regression,
      pilotSummary,
      readinessClassification: classifyLang(appLang, cat, pilotSummary),
      usesNewAuditSources: appLang === "hr" || appLang === "hu",
      auditReady: cat?.pilotNotes?.auditReady === true,
    };
  });

  return {
    schemaVersion: "g2-a1-card-translation-hr-hu-is-readiness-v1",
    generatedAt: new Date().toISOString(),
    auditSequence: catalog.auditSequence,
    automaticTranslationEvidenceForbidden: true,
    productionOrOwnerDecisionsModified: false,
    masterModified: false,
    languages,
    summary: {
      languageCount: LANGS.length,
      hrPrimarySourceIds: ["mdz-bsb-sulek-de-hr-vol1-1860", "mdz-bsb-sulek-de-hr-vol2-1860"],
      hrReverseSourceId: "ia-filipovic-hr-de-vol-a-o-1875",
      hrStatus: "HR_DIGITIZED_SOURCES_REGISTERED_PARTIAL",
      huPrimarySourceIds: ["mek-24482-nemet-magyar-pdf-2023", "mek-00072-de-hu-hu-de-html"],
      huSupplementId: "real-eod-nemet-magyar-zsebszotar-vol13-1838",
      huStatus: "HU_DIGITIZED_SOURCES_REGISTERED_PARTIAL",
      isStatus: "IS_NOT_VERIFIED_DIGITIZED",
      note:
        "hr un hu reģistrēti kā PARTIAL ar pilotā verificētām ķēdēm; is nav gatavs audita avots (LEXÍA nav pipeline-verificēta).",
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
  buildHrHuIsReadinessReport,
  regressionForLang,
};
