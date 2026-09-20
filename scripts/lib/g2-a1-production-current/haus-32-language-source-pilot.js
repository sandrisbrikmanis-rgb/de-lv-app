#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("../audit-common");
const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { productionA1Rel, wwwA1Rel } = require("./paths");
const { listAllTargetAppLanguages } = require("./source-adapters/target");
const { accessOfficialSourcesForField } = require("./official-source-access");
const { evidenceQualityOk, isValidatedEntry } = require("./targeted-source-access-validation");
const { stripQuotes, firstToken } = require("./source-adapters/lookup-normalization");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const { rowByAppCode, loadStructuredLanguageAuthoritySources } = require("../master-language-authority-sources-33");

const VERDICTS = Object.freeze(["PASS", "FINDING", "NEEDS_SOURCE_REVIEW", "SOURCE_DE_ISSUE"]);

const HAUS_POSITIVE_LOOKUP = Object.freeze({
  cs: "dům",
  fr: "maison",
  hr: "kuća",
  is: "hús",
  it: "casa",
  lb: "Haus",
  lt: "namas",
  nl: "huis",
  pl: "dom",
  sk: "dom",
  pt: "casa",
  ro: "casă",
  sv: "hus",
  fi: "talo",
  nb: "hus",
  nn: "hus",
  is: "hús",
  bg: "къща",
  uk: "дім",
});

function sha256(text) {
  return crypto.createHash("sha256").update(String(text || ""), "utf8").digest("hex");
}

function hasCyrillic(s) {
  return /\p{Script=Cyrillic}/u.test(String(s));
}

function hasLatin(s) {
  return /[A-Za-zÀ-ž]/u.test(String(s));
}

function normCompare(a, b) {
  return stripQuotes(a).normalize("NFC").trim().localeCompare(stripQuotes(b).normalize("NFC").trim(), undefined, {
    sensitivity: "accent",
  });
}

/** Reject place-name / wrong-sense dictionary hits when a house lemma was required. */
function hausTargetEntryIsRelevant(appLang, houseLemma, targetSide) {
  if (!houseLemma || !isValidatedEntry(targetSide) || !evidenceQualityOk(targetSide)) return true;
  const headword = stripQuotes(targetSide.entryHeadwordOrRule || targetSide.lookupTerm || "");
  const fragment = String(targetSide.evidenceFragment || "");
  const lemmaToken = firstToken(houseLemma);
  const headToken = firstToken(headword);
  if (headToken && normCompare(headToken, lemmaToken) === 0) {
    if (appLang === "cs") {
      const placeNameOnly =
        /Nový Dům|zeměpisná jména|Zeměpisná jména/i.test(fragment) &&
        !/budov|obýv|bytov|stavba na/i.test(fragment);
      if (placeNameOnly) return false;
    }
    if (["nb", "nn"].includes(appLang) && /^maya$/i.test(headToken)) {
      if (/mayaspråk|mayaspråk|Guatemala|språk som/i.test(fragment) && !/\bhus\b|bolig|bygning/i.test(fragment)) {
        return false;
      }
    }
    return true;
  }
  if (/\s/.test(headword.trim()) && normCompare(headword, lemmaToken) !== 0) {
    return false;
  }
  return normCompare(headToken, lemmaToken) === 0;
}

function loadHausCardForLang(appLang) {
  const cards = loadG2Level(appLang, "a1");
  const matches = cards
    .map((card, index) => ({ card, index }))
    .filter(({ card }) => card.de === "Haus" && card.de_article === "das" && card.level === "A1");
  return {
    appLang,
    productionFile: productionA1Rel(appLang),
    wwwMirror: wwwA1Rel(appLang),
    matchCount: matches.length,
    row: matches.length === 1 ? matches[0] : null,
  };
}

function loadHausProductionInventory() {
  const langs = listAllTargetAppLanguages();
  const rows = langs.map((lang) => {
    const inv = loadHausCardForLang(lang);
    const structured = loadStructuredLanguageAuthoritySources();
    const masterRow = structured.pass ? rowByAppCode(structured.languages, lang) : null;
    return {
      language: lang,
      appCode: lang,
      masterCode: masterRow?.standardCode || lang,
      productionFile: inv.productionFile,
      wwwMirror: inv.wwwMirror,
      cardIndex: inv.row?.index ?? null,
      cardId: inv.row ? `a1-haus-${lang}-${inv.row.index}` : null,
      deValue: "Haus",
      deArticle: "das",
      currentTarget: inv.row?.card.lv ?? null,
      hausCardCount: inv.matchCount,
      duplicate: inv.matchCount !== 1,
    };
  });
  return {
    targetLanguageCount: langs.length,
    rows,
    allPresent: rows.every((r) => r.hausCardCount === 1),
    duplicateCount: rows.filter((r) => r.duplicate).length,
  };
}

function sourceAccessStatus(side) {
  if (isValidatedEntry(side) && evidenceQualityOk(side)) return "SOURCE_ENTRY_VALIDATED";
  return side?.outcome || "UNKNOWN";
}

function inferFindingType(current, headword, appLang, fragment) {
  const cur = stripQuotes(current);
  const hw = stripQuotes(headword || "");
  if (/^[\)!]/.test(cur) || /^\)[a-z]/i.test(cur)) {
    return { findingType: "CORRUPTED_VALUE", proposedTarget: hw || null };
  }
  if (/\s/.test(cur) && cur.length > 20) {
    return { findingType: "WRONG_LEMMA", proposedTarget: firstToken(hw) || firstToken(cur) };
  }
  if (appLang === "hr" && hasCyrillic(cur) && hasLatin(hw)) {
    return { findingType: "WRONG_LANGUAGE_OR_SCRIPT", proposedTarget: hw };
  }
  if (appLang === "ro" && normCompare(cur, hw) !== 0 && hw && normCompare(cur.toLowerCase(), hw.toLowerCase()) === 0) {
    return { findingType: "DIACRITIC_ERROR", proposedTarget: hw };
  }
  if (hw && cur && cur[0] === cur[0].toUpperCase() && hw[0] === hw[0].toLowerCase() && cur.slice(1) !== cur.slice(1).toUpperCase()) {
    if (normCompare(cur, hw) !== 0 && normCompare(cur.toLowerCase(), hw.toLowerCase()) === 0) {
      return { findingType: "CAPITALIZATION_ERROR", proposedTarget: hw };
    }
  }
  if (hw && normCompare(cur, hw) !== 0) {
    const frag = String(fragment || "").toLowerCase();
    const hwL = hw.toLowerCase();
    if (appLang === "sk" && /^domov$/i.test(cur) && /^dom$/i.test(hw)) {
      return { findingType: "SEMANTIC_MISMATCH", proposedTarget: hw };
    }
    if (appLang === "sk" && /^domov$/i.test(cur) && /domov/i.test(String(fragment)) && !/\bdom\b/i.test(String(fragment))) {
      return { findingType: "SEMANTIC_MISMATCH", proposedTarget: hw || "dom" };
    }
    if (frag.includes(hwL) && cur.toLowerCase() !== hwL) {
      return { findingType: "WRONG_TRANSLATION", proposedTarget: hw };
    }
    if (appLang === "fi" && /^maja$/i.test(cur) && /^talo$/i.test(hw)) {
      return { findingType: "WRONG_TRANSLATION", proposedTarget: hw };
    }
    if (["fi", "sv", "nb", "nn", "is"].includes(appLang) && /^maja$|^maya$/i.test(cur) && /talo|hus|hús/i.test(hw)) {
      return { findingType: "WRONG_TRANSLATION", proposedTarget: hw };
    }
    return { findingType: "WRONG_TRANSLATION", proposedTarget: hw };
  }
  return null;
}

function computeHausVerdict({ appLang, current, deSide, targetSide }) {
  const deOk = isValidatedEntry(deSide) && evidenceQualityOk(deSide);
  const targetOk = isValidatedEntry(targetSide) && evidenceQualityOk(targetSide);

  if (!deOk) {
    return {
      verdict: "SOURCE_DE_ISSUE",
      findingType: null,
      proposedTarget: null,
      ownerReviewRequired: true,
      orthographyStatus: "NOT_EVALUATED",
      capitalizationStatus: "NOT_EVALUATED",
      lemmaStatus: "NOT_EVALUATED",
      semanticMatchStatus: "NOT_EVALUATED",
    };
  }

  if (!targetOk) {
    return {
      verdict: "NEEDS_SOURCE_REVIEW",
      findingType: null,
      proposedTarget: null,
      ownerReviewRequired: true,
      orthographyStatus: "NOT_EVALUATED",
      capitalizationStatus: "NOT_EVALUATED",
      lemmaStatus: "NOT_EVALUATED",
      semanticMatchStatus: "NOT_EVALUATED",
    };
  }

  const headword = targetSide.entryHeadwordOrRule || targetSide.lookupTerm;
  const inferred = inferFindingType(current, headword, appLang, targetSide.evidenceFragment);
  if (inferred) {
    return {
      verdict: "FINDING",
      findingType: inferred.findingType,
      proposedTarget: inferred.proposedTarget,
      ownerReviewRequired: true,
      orthographyStatus: inferred.findingType === "WRONG_LANGUAGE_OR_SCRIPT" ? "FAIL" : "CHECKED",
      capitalizationStatus: inferred.findingType === "CAPITALIZATION_ERROR" ? "FAIL" : "CHECKED",
      lemmaStatus: inferred.findingType === "WRONG_LEMMA" ? "FAIL" : "CHECKED",
      semanticMatchStatus: ["WRONG_TRANSLATION", "SEMANTIC_MISMATCH"].includes(inferred.findingType) ? "FAIL" : "CHECKED",
    };
  }

  if (normCompare(current, headword) === 0) {
    return {
      verdict: "PASS",
      findingType: null,
      proposedTarget: null,
      ownerReviewRequired: false,
      orthographyStatus: "PASS",
      capitalizationStatus: "PASS",
      lemmaStatus: "PASS",
      semanticMatchStatus: "PASS",
    };
  }

  return {
    verdict: "FINDING",
    findingType: "WRONG_TRANSLATION",
    proposedTarget: headword,
    ownerReviewRequired: true,
    orthographyStatus: "CHECKED",
    capitalizationStatus: "CHECKED",
    lemmaStatus: "CHECKED",
    semanticMatchStatus: "FAIL",
  };
}

async function runHaus32LanguageSourcePilot(options = {}) {
  const inventory = loadHausProductionInventory();
  if (!inventory.allPresent || inventory.duplicateCount > 0) {
    return { pass: false, code: "HAUS_INVENTORY_INVALID", inventory };
  }

  const structured = loadStructuredLanguageAuthoritySources();
  const deLang = "de";
  const sample = inventory.rows[0];
  const deRequest = {
    language: sample.appCode,
    dataset: "A1",
    productionFile: sample.productionFile,
    cardId: sample.cardId,
    fieldPath: `cards[${sample.cardIndex}].lv`,
    CURRENT: sample.currentTarget,
    DE: "Haus",
    cardContext: { de: "Haus", targetHeadword: sample.currentTarget },
    identityKey: `haus-pilot|de|${sample.appCode}`,
  };

  const deBundle = await accessOfficialSourcesForField(deRequest);
  const deEvidence = {
    deHeadword: deBundle.de.entryHeadwordOrRule || "Haus",
    deEntryUrl: deBundle.de.entryUrl || deBundle.de.finalUrl,
    deEvidenceFragment: deBundle.de.evidenceFragment,
    deContentSha256: deBundle.de.contentSha256,
    deOutcome: deBundle.de.outcome,
    deAuthority: deBundle.de.authorityName,
    senseNote: "Building/dwelling sense (das Haus); not abstract home/dynasty/chamber unless entry proves otherwise",
  };

  const pilotRows = [];
  for (const inv of inventory.rows) {
    const masterRow = structured.pass ? rowByAppCode(structured.languages, inv.appCode) : null;
    const fieldRequest = {
      language: inv.appCode,
      dataset: "A1",
      productionFile: inv.productionFile,
      cardId: inv.cardId,
      fieldPath: `cards[${inv.cardIndex}].lv`,
      CURRENT: inv.currentTarget,
      DE: "Haus",
      cardContext: { de: "Haus", targetHeadword: inv.currentTarget },
      identityKey: `haus-pilot|${inv.appCode}|${inv.cardIndex}`,
    };

    // eslint-disable-next-line no-await-in-loop
    let bundle = await accessOfficialSourcesForField(fieldRequest);
    const houseLemma = HAUS_POSITIVE_LOOKUP[inv.appCode];
    if (houseLemma && normCompare(inv.currentTarget, houseLemma) !== 0) {
      // eslint-disable-next-line no-await-in-loop
      const houseBundle = await accessOfficialSourcesForField({
        ...fieldRequest,
        CURRENT: houseLemma,
        identityKey: `${fieldRequest.identityKey}|house-lemma`,
      });
      if (
        isValidatedEntry(houseBundle.target) &&
        evidenceQualityOk(houseBundle.target) &&
        hausTargetEntryIsRelevant(inv.appCode, houseLemma, houseBundle.target)
      ) {
        bundle = houseBundle;
      }
    }

    const targetSideForVerdict =
      isValidatedEntry(bundle.target) &&
      evidenceQualityOk(bundle.target) &&
      hausTargetEntryIsRelevant(inv.appCode, HAUS_POSITIVE_LOOKUP[inv.appCode] || null, bundle.target)
        ? bundle.target
        : { ...bundle.target, outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND };

    const verdictMeta = computeHausVerdict({
      appLang: inv.appCode,
      current: inv.currentTarget,
      deSide: deBundle.de,
      targetSide: targetSideForVerdict,
    });

    const targetValidatedForVerdict = targetSideForVerdict.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND;

    pilotRows.push({
      language: inv.appCode,
      appCode: inv.appCode,
      masterCode: inv.masterCode,
      productionFile: inv.productionFile,
      cardId: inv.cardId,
      cardIndex: inv.cardIndex,
      deValue: "Haus",
      deArticle: "das",
      currentTarget: inv.currentTarget,
      targetAuthority: bundle.target.authorityName,
      targetSourceUrl: masterRow?.PRIMARY_DICTIONARY_URLS?.[0] || masterRow?.LANGUAGE_NORM_URLS?.[0],
      targetEntryUrl: bundle.target.entryUrl || bundle.target.finalUrl,
      targetHeadword: targetValidatedForVerdict ? bundle.target.entryHeadwordOrRule : null,
      targetMeaningFragment: targetValidatedForVerdict ? bundle.target.evidenceFragment : null,
      sourceAccessStatus: targetValidatedForVerdict ? sourceAccessStatus(bundle.target) : sourceAccessStatus(targetSideForVerdict),
      deSourceAccessStatus: sourceAccessStatus(deBundle.de),
      orthographyStatus: verdictMeta.orthographyStatus,
      capitalizationStatus: verdictMeta.capitalizationStatus,
      lemmaStatus: verdictMeta.lemmaStatus,
      semanticMatchStatus: verdictMeta.semanticMatchStatus,
      proposedTarget: verdictMeta.proposedTarget,
      verdict: verdictMeta.verdict,
      findingType: verdictMeta.findingType,
      evidenceSha256: targetValidatedForVerdict ? bundle.target.contentSha256 : null,
      deEvidenceSha256: deBundle.de.contentSha256,
      ownerReviewRequired: verdictMeta.ownerReviewRequired,
      hausPositiveLookupHint: HAUS_POSITIVE_LOOKUP[inv.appCode] || null,
      checkedAt: new Date().toISOString(),
    });
  }

  if (!options.keepBrowserOpen) {
    await closeBrowserPool();
  }

  const counts = { PASS: 0, FINDING: 0, NEEDS_SOURCE_REVIEW: 0, SOURCE_DE_ISSUE: 0 };
  for (const r of pilotRows) {
    counts[r.verdict] += 1;
  }

  return {
    pass: pilotRows.length === 32 && Object.values(counts).reduce((a, b) => a + b, 0) === 32,
    inventory,
    deEvidence,
    deLang,
    pilotRows,
    counts,
    classification:
      pilotRows.length === 32
        ? "G2_A1_HAUS_32_LANGUAGE_SOURCE_SUPPORTED_PILOT_COMPLETE_AWAITING_OWNER_REVIEW"
        : "G2_A1_HAUS_32_LANGUAGE_SOURCE_PILOT_BLOCKED",
    nextAction:
      pilotRows.length === 32
        ? "OWNER_REVIEW_HAUS_FINDINGS_AND_SOURCE_DECISIONS"
        : "RESOLVE_EXACT_PILOT_EVIDENCE_BLOCKERS",
  };
}

module.exports = {
  runHaus32LanguageSourcePilot,
  loadHausProductionInventory,
  VERDICTS,
  HAUS_POSITIVE_LOOKUP,
};
