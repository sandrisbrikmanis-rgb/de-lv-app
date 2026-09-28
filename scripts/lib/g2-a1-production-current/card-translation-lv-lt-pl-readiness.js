#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadVerificationSnapshot } = require("./card-translation-32lang-readiness");

const AUDIT_CATALOG_REL = "scripts/lib/data/g2-a1-card-translation-bilingual-audit-lv-lt-pl.json";
const MODERN_SOURCES_REL =
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-lv-lt-pl-pilot/pdf-bilingual-dictionary-lv-lt-pl-modern-sources.json";
const LT_PILOT_REL =
  "reports/g2-a1-production-current/lt-de-pilot-ekalba-lki-zodynas/lt-de-pilot-ekalba-lki-zodynas-verification.json";

const LANGS = Object.freeze(["lv", "lt", "pl"]);

function readJson(rel) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function lvRegressionFromModern(modern) {
  const deRows = modern?.languages?.lv?.pilotResults?.["de→lv"] || [];
  return deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: row.found ? 1 : 2,
    primaryDirection: "de→lv",
    sourceName: "Letonika vācu–latviešu vārdnīca",
    pairFound: row.found === true,
    targetGloss: row.targetGloss || null,
    entryUrl: row.entryUrl || null,
    note: row.note || null,
    supplementUsed: false,
  }));
}

function plRegressionFromModern(modern) {
  const deRows = modern?.languages?.pl?.pilotResults?.["de→pl"] || [];
  return deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: 1,
    primaryDirection: "de→pl",
    sourceName: "PONS vācu–poļu vārdnīca",
    pairFound: row.found === true || row.found === "PARTIAL",
    targetGloss: row.targetGloss || null,
    entryUrl: row.entryUrl || null,
    note: row.note || (row.found === "PARTIAL" ? "PARTIAL_HEADWORD" : null),
    supplementUsed: false,
  }));
}

function ltRegressionFromPilot(pilot) {
  return (pilot?.results || []).map((row) => {
    const deLt = row.ekalbaDeLt;
    const ltDe = row.ekalbaLtDe;
    const lki = row.lkiIaLtDe;
    let auditStepUsed = 1;
    let pairFound = deLt?.status === "FOUND";
    let entryUrl = deLt?.entryUrl || deLt?.searchUrl || null;
    let targetGloss = deLt?.primaryGlossLt || null;
    let sourceName = "eKalba Vokiečių–lietuvių kalbų žodynas";
    let supplementUsed = false;

    if (!pairFound && ltDe?.status === "FOUND") {
      auditStepUsed = 2;
      pairFound = true;
      entryUrl = ltDe.entryUrl;
      targetGloss = ltDe.glossDe;
      sourceName = "eKalba Lietuvių–vokiečių kalbų žodynas";
    }
    if (!pairFound && lki?.status === "FOUND") {
      auditStepUsed = 3;
      pairFound = true;
      entryUrl = lki.verifiedPageUrl;
      targetGloss = lki.visibleGlossDe || lki.visibleHeadword || null;
      sourceName = `LKI žodynas (${lki.volume || "IA"})`;
      supplementUsed = true;
    }
    if (deLt?.status === "NOT_FOUND" && ltDe?.status === "NOT_FOUND") {
      pairFound = false;
    }

    const noteParts = [];
    if (row.cardDwellingSenseLt) noteParts.push(`card sense LT: ${row.cardDwellingSenseLt}`);
    if (row.excludedFromDwellingSense?.length) {
      noteParts.push(`excluded: ${row.excludedFromDwellingSense.join(", ")}`);
    }

    return {
      deLemma: row.pilotDe,
      auditStepUsed,
      primaryDirection: auditStepUsed === 2 ? "lt→de" : "de→lt",
      sourceName,
      pairFound,
      targetGloss,
      entryUrl,
      note: noteParts.length ? noteParts.join("; ") : null,
      supplementUsed,
    };
  });
}

function regressionForLang(appLang, modern, ltPilot) {
  if (appLang === "lv") return lvRegressionFromModern(modern);
  if (appLang === "pl") return plRegressionFromModern(modern);
  if (appLang === "lt") return ltRegressionFromPilot(ltPilot);
  return [];
}

function regressionPass(regression) {
  const required = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];
  const byLemma = new Map(regression.map((r) => [r.deLemma, r]));
  const missing = required.filter((l) => !byLemma.has(l));
  const core = ["Haus", "arbeiten", "Kleingeld", "bewirten"];
  const coreFail = core.filter((l) => !byLemma.get(l)?.pairFound);
  const compounds = ["Grenzkonflikt", "Machtgier"];
  const compoundRows = compounds.map((l) => byLemma.get(l)).filter(Boolean);
  return {
    pass: missing.length === 0 && coreFail.length === 0,
    missingLemmas: missing,
    corePrimaryFound: coreFail.length === 0,
    coreFailures: coreFail,
    compoundDocumented: compoundRows.length === compounds.length,
    compoundNotFoundOnPrimary: compoundRows
      .filter((r) => r.auditStepUsed <= 2 && !r.pairFound)
      .map((r) => r.deLemma),
  };
}

function buildLvLtPlReadinessReport() {
  const catalog = readJson(AUDIT_CATALOG_REL);
  const modern = readJson(MODERN_SOURCES_REL);
  const ltPilot = readJson(LT_PILOT_REL);
  const snap32 = loadVerificationSnapshot();

  if (!catalog) {
    throw new Error(`Missing audit catalog: ${AUDIT_CATALOG_REL}`);
  }

  const languages = LANGS.map((appLang) => {
    const cat = catalog.languages[appLang];
    const regression = regressionForLang(appLang, modern, ltPilot);
    const regGate = regressionPass(regression);
    const snapRow = snap32?.languages?.find((l) => l.appLang === appLang);

    return {
      appLang,
      bilingualAuditSourcesRegistered: Boolean(cat?.primaryModern?.length >= 2),
      primaryModern: cat?.primaryModern || [],
      supplementaryHistorical: cat?.supplementaryHistorical || [],
      collectorOverrideId: cat?.collectorOverrideId || null,
      regressionPilotDe: regression,
      regressionGate: regGate,
      cardTranslation32LangSnapshot: snapRow
        ? {
            cardTranslationReady: snapRow.cardTranslationReady,
            collectorId: snapRow.collector?.collectorId,
            bilingualSourceUrl: snapRow.collector?.bilingualSourceUrl,
            blockers: snapRow.blockers?.map((b) => b.code) || [],
          }
        : null,
      readinessClassification: regGate.pass
        ? "LV_LT_PL_BILINGUAL_AUDIT_SOURCES_AND_REGRESSION_DOCUMENTED"
        : "LV_LT_PL_BILINGUAL_AUDIT_INCOMPLETE",
    };
  });

  const allRegressionPass = languages.every((l) => l.regressionGate.pass);

  return {
    schemaVersion: "g2-a1-card-translation-lv-lt-pl-readiness-v1",
    generatedAt: new Date().toISOString(),
    auditSequence: catalog.auditSequence,
    automaticTranslationEvidenceForbidden: true,
    productionOrOwnerDecisionsModified: false,
    languages,
    summary: {
      languageCount: LANGS.length,
      sourcesRegisteredCount: languages.filter((l) => l.bilingualAuditSourcesRegistered).length,
      regressionDocumentedPass: allRegressionPass,
      note: "Šī atskaite reģistrē divvalodu avotus un pārbaudes secību; 32 valodu cardTranslationReady joprojām no atsevišķā verify artefakta.",
    },
    inputs: {
      auditCatalog: AUDIT_CATALOG_REL,
      modernSources: MODERN_SOURCES_REL,
      ltPilotVerification: LT_PILOT_REL,
      cardTranslation32LangVerification: snap32 ? "card-translation-32lang-full-verification.json" : null,
    },
  };
}

module.exports = {
  LANGS,
  buildLvLtPlReadinessReport,
  regressionPass,
  AUDIT_CATALOG_REL,
};
