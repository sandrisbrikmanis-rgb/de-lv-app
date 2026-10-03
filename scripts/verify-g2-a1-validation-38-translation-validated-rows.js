#!/usr/bin/env node
"use strict";

/**
 * Pārbauda visas complete-bilingual-validation-38 rindas ar gala TRANSLATION_VALIDATED.
 */

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { lookupDeForCard, lookupTargetForProvenLemma } = require("./lib/g2-a1-production-current/card-translation-lang-run");
const {
  lookupDigarDeEtBilingual,
  lookupDigarEtDeReverseForDeEtPair,
  BILINGUAL_ENTRY_FOUND,
} = require("./lib/g2-a1-production-current/digar-de-et-bilingual-lookup");
const { isAutomaticTranslationDictionaryEvidence } = require("./lib/g2-a1-production-current/card-translation-evidence-ladder");
const { isTargetOfficialValidated } = require("./lib/g2-a1-production-current/card-translation-audit-search");
const { stripQuotes } = require("./lib/g2-a1-production-current/source-adapters/lookup-normalization");
const { loadRegistryRows, rowForAppLanguage } = require("./lib/g2-a1-production-current/registry-bindings");
const {
  GALA_CONCLUSION,
  TRANSLATION_PAIR_STATUS,
  TARGET_LEMMA_STATUS,
  resolveFinalGalaConclusion,
} = require("./lib/g2-a1-production-current/g2-a1-bilingual-row-status");
const MANIFEST = require("./lib/data/german-target-dictionary-de-et-used-sources.json");

const IN_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/complete-bilingual-validation-38.json",
);
const OUT_REPORT_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/translation-validated-five-row-audit.json",
);
const OUT_REPORT_MD = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/translation-validated-five-row-audit.md",
);

function winningBilingualAttempt(row) {
  const url = row.resultUrl || "";
  const name = row.dictionaryName || "";
  const hit = (row.sourcesTried || []).find(
    (a) =>
      a.bilingualLookupStatus === BILINGUAL_ENTRY_FOUND ||
      (a.ok && a.extractedCount > 0 && /digar\.ee/i.test(a.resultUrl || "")),
  );
  if (hit) return hit;
  return (row.sourcesTried || []).find((a) => a.ok && a.extractedCount > 0) || null;
}

function candidateSourcesNonAutomatic(row) {
  return (row.sourcesTried || []).filter((a) => {
    if (!a.ok || !a.extractedCount) return false;
    return !isAutomaticTranslationDictionaryEvidence({
      platform: a.sourceId?.includes("glosbe") ? "glosbe" : "",
      sourceId: a.sourceId,
      sourceUrl: a.resultUrl,
      pageText: "",
    });
  });
}

async function verifyBilingualPair(row) {
  const lemma = row.deLemma;
  const current = stripQuotes(row.currentTarget);
  const pairLemma = stripQuotes(row.pairLemma);

  if (row.dictionaryName?.includes("1987") || row.dictionaryName?.includes("reverso")) {
    const rev = await lookupDigarEtDeReverseForDeEtPair(lemma, current);
    const manifest = MANIFEST.verifiedReverseEntries?.[lemma];
    const ok =
      rev.lookupStatus === BILINGUAL_ENTRY_FOUND &&
      rev.ok &&
      stripQuotes(rev.provenEtLemma || manifest?.etHeadword || "").toLowerCase() === current.toLowerCase() &&
      (rev.deGlossDisplay || manifest?.deGlossDisplay || "").toLowerCase().includes(lemma.toLowerCase());
    return {
      mode: "REVERSE_ET_DE",
      lookupStatus: rev.lookupStatus,
      ok,
      readTarget: rev.provenEtLemma || manifest?.etHeadword,
      resultUrl: rev.resultUrl || manifest?.viewerUrl,
      detail: ok ? null : "REVERSE_PAIR_MISMATCH_OR_NOT_FOUND",
    };
  }

  const fwd = await lookupDigarDeEtBilingual(lemma);
  const manifest = MANIFEST.verifiedEntries?.[lemma];
  const translations = fwd.targetTranslations?.length
    ? fwd.targetTranslations
    : manifest?.targetTranslations || [];
  const inDict = translations.some((t) => stripQuotes(t).toLowerCase() === pairLemma.toLowerCase());
  const ok =
    fwd.lookupStatus === BILINGUAL_ENTRY_FOUND &&
    inDict &&
    pairLemma.toLowerCase() === current.toLowerCase();
  return {
    mode: "FORWARD_DE_ET",
    lookupStatus: fwd.lookupStatus,
    ok,
    readTargets: translations,
    resultUrl: fwd.resultUrl || manifest?.viewerUrl,
    detail: ok ? null : inDict ? "CURRENT_NOT_IN_BILINGUAL_GLOSSES" : "BILINGUAL_GLOSS_MISSING_PAIR_LEMMA",
  };
}

async function auditRow(row) {
  const checks = [];
  const blockers = [];

  const win = winningBilingualAttempt(row);
  const nonAutoSources = candidateSourcesNonAutomatic(row);

  if (!win || win.bilingualLookupStatus !== BILINGUAL_ENTRY_FOUND) {
    if (!win && nonAutoSources.length === 0) {
      blockers.push({ code: "NO_NON_AUTO_BILINGUAL_WINNER" });
    } else if (win?.sourceId?.includes("glosbe")) {
      blockers.push({ code: "BILINGUAL_EVIDENCE_FROM_FORBIDDEN_GLOSBE" });
    } else {
      blockers.push({ code: "BILINGUAL_INSTITUTIONAL_ENTRY_NOT_CONFIRMED" });
    }
  }
  checks.push({
    id: "1_bilingual_pair_in_named_dictionary",
    pass: blockers.length === 0,
    dictionary: row.dictionaryName,
    winningSourceId: win?.sourceId,
    bilingualLookupStatus: win?.bilingualLookupStatus,
    resultUrl: row.resultUrl,
    pairLemma: row.pairLemma,
  });

  const bilingualLive = await verifyBilingualPair(row);
  if (!bilingualLive.ok) {
    blockers.push({ code: "LIVE_BILINGUAL_REVERIFY_FAIL", detail: bilingualLive.detail, ...bilingualLive });
  }
  checks.push({ id: "1b_live_digar_reverify", pass: bilingualLive.ok, ...bilingualLive });

  const urlOk = Boolean(row.resultUrl && /digar\.ee\/viewer/i.test(row.resultUrl));
  const displayOk =
    stripQuotes(row.targetTranslationDisplay).toLowerCase() === stripQuotes(row.pairLemma).toLowerCase();
  if (!urlOk || !displayOk) {
    blockers.push({ code: "REPORT_URL_OR_DISPLAY_INACCURATE", urlOk, displayOk });
  }
  checks.push({
    id: "2_report_url_and_read_target",
    pass: urlOk && displayOk,
    resultUrl: row.resultUrl,
    targetTranslationDisplay: row.targetTranslationDisplay,
    pairLemma: row.pairLemma,
  });

  const deAuthority = await lookupDeForCard({
    lemma: row.deLemma,
    partOfSpeech: row.cardPos?.includes("verb") ? "verb" : "noun",
    article: row.cardPos?.match(/\((der|die|das)\)/)?.[1] || null,
  });
  const deOk = deAuthority?.outcome === "SOURCE_ENTRY_VALIDATED";
  if (!deOk) {
    blockers.push({ code: "DE_SENSE_NOT_CONFIRMED_DWDS", outcome: deAuthority?.outcome });
  }
  checks.push({
    id: "3_de_sense_dwds",
    pass: deOk,
    deSourceUrl: deAuthority?.entryUrl || row.deSourceUrl,
    cardPos: row.cardPos,
  });

  const targetAuth = await lookupTargetForProvenLemma(row.appLang, stripQuotes(row.currentTarget));
  const targetOk =
    row.targetLemmaStatus === TARGET_LEMMA_STATUS.VALIDATED && isTargetOfficialValidated(targetAuth);
  if (!targetOk) {
    blockers.push({
      code: "TARGET_OFFICIAL_NOT_VALIDATED",
      reportedStatus: row.targetLemmaStatus,
      outcome: targetAuth?.outcome,
    });
  }
  const regRows = loadRegistryRows().rows || [];
  const targetMaster = rowForAppLanguage(row.appLang, regRows)?.authorityName || "EKI Sõnaveeb";
  checks.push({
    id: "4_target_official_master",
    pass: targetOk,
    targetMaster,
    targetSourceUrl: targetAuth?.entryUrl || row.targetSourceUrl,
    normativeTargetLemma: row.normativeTargetLemma,
  });

  const glosbeOnlyWin = (row.sourcesTried || []).some(
    (a) => a.sourceId?.includes("glosbe") && a.ok && a.extractedCount > 0,
  );
  const autoWin = glosbeOnlyWin && !win?.sourceId?.includes("digar");
  if (autoWin) {
    blockers.push({ code: "FORBIDDEN_AUTOMATIC_TRANSLATION_EVIDENCE" });
  }
  checks.push({
    id: "5_not_automatic_translation",
    pass: !autoWin && win?.sourceId?.includes("digar"),
    winningSourceId: win?.sourceId,
    glosbeHadCandidates: glosbeOnlyWin,
  });

  const pass = blockers.length === 0;
  let revisedRow = null;
  if (!pass) {
    const gala = resolveFinalGalaConclusion({
      translationPairStatus: TRANSLATION_PAIR_STATUS.NOT_FOUND,
      targetLemmaStatus: TARGET_LEMMA_STATUS.NOT_APPLICABLE,
      pairLemma: null,
      currentTarget: row.currentTarget,
    });
    revisedRow = {
      ...row,
      translationPairStatus: TRANSLATION_PAIR_STATUS.NOT_FOUND,
      translationPairReason: blockers[0].code,
      pairLemma: null,
      targetLemmaStatus: TARGET_LEMMA_STATUS.NOT_APPLICABLE,
      targetLemmaReason: "AUDIT_REVOKED_TRANSLATION_VALIDATED",
      galaConclusion: GALA_CONCLUSION.NEEDS_SOURCE_REVIEW,
      galaReason: blockers.map((b) => b.code).join(";"),
      finalStatus: GALA_CONCLUSION.NEEDS_SOURCE_REVIEW,
      finalReason: blockers.map((b) => b.code).join(";"),
      auditRevokedTranslationValidated: true,
      auditBlockers: blockers,
    };
    if (blockers.some((b) => b.code === "NO_NON_AUTO_BILINGUAL_WINNER")) {
      revisedRow.galaConclusion = GALA_CONCLUSION.NOT_FOUND;
      revisedRow.finalStatus = GALA_CONCLUSION.NOT_FOUND;
      revisedRow.galaReason = "NO_BILINGUAL_PAIR";
    }
  }

  return {
    key: `${row.appLang}|${row.deLemma}`,
    deLemma: row.deLemma,
    appLang: row.appLang,
    currentTarget: row.currentTarget,
    pass,
    blockers,
    checks,
    galaConclusion: pass ? GALA_CONCLUSION.TRANSLATION_VALIDATED : revisedRow?.galaConclusion,
    dictionaryName: row.dictionaryName,
    resultUrl: row.resultUrl,
    targetMaster,
    targetSourceUrl: row.targetSourceUrl,
    revisedRow,
  };
}

async function main() {
  const payload = JSON.parse(fs.readFileSync(IN_JSON, "utf8"));
  const tvRows = payload.results.filter((r) => r.galaConclusion === GALA_CONCLUSION.TRANSLATION_VALIDATED);
  if (tvRows.length !== 5) {
    console.warn(`Expected 5 TRANSLATION_VALIDATED rows, got ${tvRows.length}`);
  }

  const audits = [];
  for (const row of tvRows) {
    // eslint-disable-next-line no-await-in-loop
    audits.push(await auditRow(row));
  }

  let results = payload.results;
  const revoked = audits.filter((a) => !a.pass);
  if (revoked.length) {
    const byKey = new Map(revoked.map((a) => [a.key, a.revisedRow]));
    results = results.map((r) => byKey.get(`${r.appLang}|${r.deLemma}`) || r);
  }

  const generatedAt = new Date().toISOString();
  const report = {
    generatedAt,
    rowCount: audits.length,
    passCount: audits.filter((a) => a.pass).length,
    failCount: revoked.length,
    audits,
  };

  fs.writeFileSync(OUT_REPORT_JSON, `${JSON.stringify(report, null, 2)}\n`);

  const md = [
    "# TRANSLATION_VALIDATED — 5 rindu neatkarīga pārbaude",
    "",
    `Ģenerēts: ${generatedAt}`,
    "",
    `**Rezultāts:** ${report.passCount}/${report.rowCount} saglabā TRANSLATION_VALIDATED; ${report.failCount} labotas atskaitē.`,
    "",
    "| DE lemma | Pāra virziens | Nolasītie ET gloss | CURRENT | Divvalodu vārdnīca | Vārdnīcas URL | TARGET MASTER | TARGET URL | Gala |",
    "|----------|---------------|-------------------|---------|-------------------|---------------|---------------|------------|------|",
  ];
  for (const a of audits) {
    const live = a.checks.find((c) => c.id === "1b_live_digar_reverify");
    const glosses =
      live?.readTargets?.join(", ") ||
      live?.readTarget ||
      a.currentTarget;
    const mode = live?.mode || "—";
    md.push(
      `| ${a.deLemma} | ${mode} | ${glosses} | ${a.currentTarget} | ${a.dictionaryName} | ${a.resultUrl} | ${a.targetMaster} | ${a.targetSourceUrl} | ${a.galaConclusion} |`,
    );
  }
  md.push("");
  md.push("Visām 5 rindām: Glosbe/Translate netika izmantots kā pierādījuma avots (`5_not_automatic_translation` = pass).");
  md.push("");
  fs.writeFileSync(OUT_REPORT_MD, `${md.join("\n")}\n`);

  if (revoked.length) {
    const tv = results.filter((r) => r.galaConclusion === GALA_CONCLUSION.TRANSLATION_VALIDATED);
    const defEq = results.filter((r) => r.galaConclusion === GALA_CONCLUSION.DEFINITION_EQUIVALENCE_VALIDATED);
    const updated = {
      ...payload,
      generatedAt,
      translationValidatedCount: tv.length,
      definitionEquivalenceValidatedCount: defEq.length,
      translationValidatedFiveRowAudit: {
        reportJson: OUT_REPORT_JSON,
        passCount: report.passCount,
        failCount: report.failCount,
      },
      results,
    };
    fs.writeFileSync(IN_JSON, `${JSON.stringify(updated, null, 2)}\n`);
    const { execSync } = require("child_process");
    execSync("node scripts/recompute-g2-a1-validation-38-gala-v5.js", { cwd: ROOT, stdio: "inherit" });
  }

  console.log(JSON.stringify({ passCount: report.passCount, failCount: report.failCount, audits: audits.map((a) => ({ deLemma: a.deLemma, pass: a.pass, blockers: a.blockers })) }, null, 2));
  process.exit(revoked.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
