#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");

const AUDIT_CATALOG_REL = "scripts/lib/data/g2-a1-card-translation-bilingual-audit-nn-pt-ro.json";
const PILOT_VERIFY_REL =
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-nn-pt-ro-pilot-verify/pdf-bilingual-dictionary-nn-pt-ro-pilot-verify.json";
const DISCOVERY_REL =
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-nn-pt-ro-discovery/pdf-bilingual-dictionary-nn-pt-ro-discovery.json";

const LANGS = Object.freeze(["pt", "ro", "nn"]);
const PILOT_LEMMA_COUNT = 6;

function readJson(rel) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function countFoundTrue(rows) {
  if (!Array.isArray(rows)) return 0;
  return rows.filter((row) => row.found === true).length;
}

function formatHitCount(foundCount, total = PILOT_LEMMA_COUNT) {
  return `${foundCount}/${total}`;
}

function parseHitCount(hitStr) {
  if (typeof hitStr !== "string") return null;
  const m = /^(\d+)\/(\d+)$/.exec(hitStr.trim());
  if (!m) return null;
  return { found: Number(m[1]), total: Number(m[2]) };
}

function assertHitCountMatches(label, declared, rows, failures) {
  const parsed = parseHitCount(declared);
  const computed = countFoundTrue(rows);
  if (!parsed) {
    failures.push(`${label}_HIT_COUNT_UNPARSEABLE:${declared}`);
    return;
  }
  if (parsed.found !== computed) {
    failures.push(`${label}_HIT_COUNT_MISMATCH:declared=${declared},computed=${formatHitCount(computed)}`);
  }
}

function collectPilotCountFailures(catalog, pilot) {
  const failures = [];
  const pv = pilot?.pilotVerification;
  if (!pv) {
    failures.push("PILOT_VERIFICATION_MISSING");
    return failures;
  }

  const ptNotes = catalog?.languages?.pt?.pilotNotes;
  assertHitCountMatches("PT_PRIMARY", ptNotes?.deToTargetHitCount, pv.pt?.deToTarget, failures);
  assertHitCountMatches(
    "PT_SUMMARY",
    pilot?.summary?.pt?.primaryDeHitCount,
    pv.pt?.deToTarget,
    failures,
  );

  const roNotes = catalog?.languages?.ro?.pilotNotes;
  assertHitCountMatches("RO_PRIMARY", roNotes?.deToTargetHitCount, pv.ro?.deToTarget, failures);
  assertHitCountMatches(
    "RO_SUMMARY",
    pilot?.summary?.ro?.primaryDeHitCount,
    pv.ro?.deToTarget,
    failures,
  );
  assertHitCountMatches(
    "RO_TDRG3",
    roNotes?.tdrg3DeToTargetHitCount,
    pv.ro?.tdrg3?.deToTargetViaRoHeadword,
    failures,
  );
  assertHitCountMatches(
    "RO_TDRG3_SUMMARY",
    pilot?.summary?.ro?.tdrg3DeHitCount,
    pv.ro?.tdrg3?.deToTargetViaRoHeadword,
    failures,
  );

  const nnNotes = catalog?.languages?.nn?.pilotNotes;
  assertHitCountMatches("NN_HELMS", nnNotes?.deToTargetHitCount, pv.nn?.deToTarget, failures);
  assertHitCountMatches(
    "NN_SNORRE",
    nnNotes?.snorreDeToNnHitCount,
    pv.nn?.snorre?.deToTarget,
    failures,
  );
  assertHitCountMatches(
    "NN_SNORRE_SUMMARY",
    pilot?.summary?.nn?.snorreDeHitCount,
    pv.nn?.snorre?.deToTarget,
    failures,
  );
  assertHitCountMatches(
    "NN_HELMS_SUMMARY",
    pilot?.summary?.nn?.historicalHelmsDeHitCount,
    pv.nn?.deToTarget,
    failures,
  );

  return failures;
}

function regressionFromPilot(appLang, pilot) {
  const block = pilot?.pilotVerification?.[appLang];
  const deRows = block?.deToTarget || [];
  const primaryId = block?.primarySourceId || "primary";
  const entryUrl = block?.ocrUrl || block?.portalUrl || null;

  const regression = deRows.map((row) => ({
    deLemma: row.lemma,
    auditStepUsed: 1,
    primaryDirection: "de→target",
    sourceName: primaryId,
    pairFound: row.found === true,
    targetGloss: row.found ? row.note || "FOUND" : null,
    entryUrl,
    note: row.note || null,
    supplementUsed: false,
  }));

  const rev = block?.targetToDe;
  if (rev) {
    regression.push({
      deLemma: `(reverse) ${rev.lemma}`,
      auditStepUsed: 2,
      primaryDirection: "target→de",
      sourceName: primaryId,
      pairFound: rev.found === true,
      targetGloss: rev.found ? rev.note || "FOUND" : null,
      entryUrl,
      note: null,
      supplementUsed: false,
    });
  }

  if (appLang === "ro" && block?.tdrg3?.deToTargetViaRoHeadword) {
    for (const row of block.tdrg3.deToTargetViaRoHeadword) {
      if (!row.found) continue;
      regression.push({
        deLemma: `${row.lemma} (TDRG³ via ${row.roHeadword})`,
        auditStepUsed: 1,
        primaryDirection: "ro→de",
        sourceName: "tdrg3-solirom-ro-de",
        pairFound: true,
        targetGloss: row.roHeadword,
        entryUrl: row.entryUrl,
        note: "modern institutional RO headword",
        supplementUsed: false,
      });
    }
  }

  if (appLang === "nn" && block?.snorre?.deToTarget) {
    for (const row of block.snorre.deToTarget) {
      regression.push({
        deLemma: `${row.lemma} (SNORRE)`,
        auditStepUsed: 1,
        primaryDirection: "de→nn-terminology",
        sourceName: block.snorre.sourceId || "snorre-sbr-24",
        pairFound: row.found === true,
        targetGloss: row.found ? row.note || "FOUND" : null,
        entryUrl: block.snorre.catalogUrl || null,
        note: row.note || block.snorre.verificationMethod || null,
        supplementUsed: false,
      });
    }
  }

  return regression;
}

function classifyLang(appLang, cat) {
  const notes = cat?.pilotNotes?.readinessClassification;
  if (notes) return notes;
  if (cat?.digitizedAuditStatus === "PARTIAL") {
    return `${appLang.toUpperCase()}_DIGITIZED_SOURCES_REGISTERED_PARTIAL`;
  }
  return `${appLang.toUpperCase()}_UNKNOWN`;
}

function buildNnPtRoReadinessReport() {
  const catalog = readJson(AUDIT_CATALOG_REL);
  const pilot = readJson(PILOT_VERIFY_REL);
  const discovery = readJson(DISCOVERY_REL);
  if (!catalog) {
    throw new Error(`Missing audit catalog: ${AUDIT_CATALOG_REL}`);
  }

  const languages = LANGS.map((appLang) => {
    const cat = catalog.languages[appLang];
    const pilotSummary = pilot?.summary?.[appLang] || null;
    const regression = regressionFromPilot(appLang, pilot);
    const discoveryBest = discovery?.bestFoundSource?.[appLang] || null;

    return {
      appLang,
      digitizedAuditStatus: cat?.digitizedAuditStatus || null,
      readinessClassification: classifyLang(appLang, cat),
      auditReady: cat?.pilotNotes?.auditReady === true,
      usesNewAuditSources: Boolean(cat?.primaryDigitized?.length),
      primaryDigitized: cat?.primaryDigitized || [],
      modernInstitutional: cat?.modernInstitutional || [],
      supplementaryReserve: cat?.supplementaryReserve || [],
      supplementaryControlOnly: cat?.supplementaryControlOnly || [],
      discoveryEvidenceOnly: cat?.discoveryEvidenceOnly || [],
      sourceChainPriority: cat?.sourceChainPriority || [],
      pilotSummary,
      discoveryBest,
      regressionPilotDe: regression,
    };
  });

  const summary = {
    ptStatus: languages.find((l) => l.appLang === "pt")?.readinessClassification,
    roStatus: languages.find((l) => l.appLang === "ro")?.readinessClassification,
    nnStatus: languages.find((l) => l.appLang === "nn")?.readinessClassification,
  };

  return {
    schemaVersion: "g2-a1-card-translation-nn-pt-ro-source-chain-v1",
    generatedAt: new Date().toISOString(),
    inputs: {
      auditCatalog: AUDIT_CATALOG_REL,
      pilotVerification: PILOT_VERIFY_REL,
      discoveryReport: DISCOVERY_REL,
    },
    auditSequence: catalog.auditSequence,
    summary,
    languages,
    productionOrOwnerDecisionsModified: false,
    masterModified: false,
  };
}

module.exports = {
  LANGS,
  AUDIT_CATALOG_REL,
  PILOT_VERIFY_REL,
  DISCOVERY_REL,
  PILOT_LEMMA_COUNT,
  countFoundTrue,
  formatHitCount,
  collectPilotCountFailures,
  buildNnPtRoReadinessReport,
};
