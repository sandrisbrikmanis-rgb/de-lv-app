#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const {
  loadHausProductionInventory,
  HAUS_POSITIVE_LOOKUP,
  runHaus32LanguageSourcePilot,
} = require("./haus-32-language-source-pilot");
const { accessOfficialSourcesForField } = require("./official-source-access");
const { evidenceQualityOk, isValidatedEntry } = require("./targeted-source-access-validation");
const { stripQuotes } = require("./source-adapters/lookup-normalization");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const {
  loadStructuredLanguageAuthoritySources,
  rowByAppCode,
  allUrlsForLanguage,
} = require("../master-language-authority-sources-33");
const {
  evaluateDictionaryCapitalization,
  extractNormativeLemma,
} = require("../master-capitalization-rule-verify");
const { FIXED_FINDING_IDENTITY } = require("./haus-owner-review");

const NSR_LANGUAGES = Object.freeze([
  "bs",
  "fr",
  "hr",
  "is",
  "it",
  "lb",
  "lt",
  "hu",
  "nl",
  "pl",
  "pt",
  "ro",
  "sq",
  "sr",
  "sv",
  "bg",
  "mk",
  "uk",
]);

const MASTER_CHANGE_LANGS = Object.freeze(["bs", "sq", "sr", "mk"]);

function sha256(text) {
  return crypto.createHash("sha256").update(String(text || ""), "utf8").digest("hex");
}

function dwellingSenseInFragment(fragment) {
  const f = String(fragment || "").toLowerCase();
  return /building|beboelse|bygning|dwelling|live in|obývan|bývan|budov|stavba|maison|huis|dom\b|hus\b|talo|къща|дім|будин|casă|casa|namas|ház|kuća|куќа/i.test(
    f,
  );
}

function buildFieldRequest(inv, lookupTerm) {
  return {
    language: inv.appCode,
    dataset: "A1",
    productionFile: inv.productionFile,
    cardId: inv.cardId,
    fieldPath: `cards[${inv.cardIndex}].lv`,
    CURRENT: lookupTerm,
    DE: "Haus",
    cardContext: { de: "Haus", targetHeadword: inv.currentTarget },
    identityKey: `haus-owner-exec|${inv.appCode}|${inv.cardIndex}|${lookupTerm}`,
  };
}

function pickHausLookupTerm(inv, mode) {
  const production = stripQuotes(inv.currentTarget);
  const hint = HAUS_POSITIVE_LOOKUP[inv.appCode];
  if (mode === "finding") {
    const spec = FIXED_FINDING_IDENTITY.find((s) => s.language === inv.appCode);
    return spec?.proposedTarget || hint || production;
  }
  if (/^[\)!]/.test(production) && hint) return hint;
  if (inv.appCode === "hr" && /\p{Script=Cyrillic}/u.test(production) && hint) return hint;
  if (inv.appCode === "sr" && /\p{Script=Cyrillic}/u.test(production) && hint) return hint;
  if (["is", "sv"].includes(inv.appCode) && /^maya$|^maja$/i.test(production) && hint) return hint;
  if (inv.appCode === "sq" && /\s/.test(production) && hint) return hint;
  if (mode === "nsr" && hint) return hint;
  return hint || production;
}

function evidenceRecordFromBundle({ inv, productionCurrent, lookupTerm, bundle, adapterPass }) {
  const de = bundle.de;
  const target = bundle.target;
  const validated = isValidatedEntry(target) && evidenceQualityOk(target);
  return {
    language: inv.appCode,
    productionFile: inv.productionFile,
    cardId: inv.cardId,
    fieldPath: `cards[${inv.cardIndex}].lv`,
    productionCurrent,
    lookupTermUsed: lookupTerm,
    lookupNote: lookupTerm !== productionCurrent ? "Documented candidate lemma for entry lookup only" : "Production surface form",
    deAuthority: de.authorityName,
    deEntryUrl: de.entryUrl || de.finalUrl,
    deHeadword: de.entryHeadwordOrRule,
    deEvidenceFragment: de.evidenceFragment,
    deEvidenceSha256: de.contentSha256,
    deOutcome: de.outcome,
    targetAuthority: target.authorityName,
    targetEntryUrl: target.entryUrl || target.finalUrl,
    targetHeadword: target.entryHeadwordOrRule,
    targetNormativeLemma: validated ? extractNormativeLemma(target.entryHeadwordOrRule, target.evidenceFragment) : null,
    targetMeaningFragment: target.evidenceFragment,
    targetEvidenceSha256: target.contentSha256,
    targetOutcome: target.outcome,
    adapterId: target.adapterId,
    accessedAt: new Date().toISOString(),
    sourceValidated: validated,
    dwellingSenseOk: validated ? dwellingSenseInFragment(target.evidenceFragment) : false,
    adapterPass,
  };
}

async function reverifyFindingRow(inv, deBundle) {
  const productionCurrent = inv.currentTarget;
  const spec = FIXED_FINDING_IDENTITY.find((s) => s.language === inv.language);
  const lookupTerm = spec?.proposedTarget || pickHausLookupTerm(inv, "finding");
  const bundle = await accessOfficialSourcesForField(buildFieldRequest(inv, lookupTerm));
  const ev = evidenceRecordFromBundle({
    inv,
    productionCurrent,
    lookupTerm,
    bundle,
    adapterPass: "haus-owner-finding-reverify",
  });

  const deOk = isValidatedEntry(deBundle.de) && evidenceQualityOk(deBundle.de);
  if (!deOk) {
    return { ...ev, ownerStatus: "SOURCE_DE_ISSUE", ownerNew: "", ownerNote: "DE official entry not validated on reverification.", ownerEvidenceAccepted: false };
  }
  if (!ev.sourceValidated) {
    return {
      ...ev,
      ownerStatus: "NEEDS_SOURCE_REVIEW",
      ownerNew: "",
      ownerNote: "TARGET official entry not validated on reverification.",
      ownerEvidenceAccepted: false,
    };
  }

  if (spec.findingType === "CAPITALIZATION_ERROR") {
    const cap = evaluateDictionaryCapitalization({
      fieldKind: "dictionary",
      current: stripQuotes(productionCurrent),
      authorityLemma: ev.targetNormativeLemma,
    });
    if (cap.ok === false && cap.proposedTarget === spec.proposedTarget) {
      return {
        ...ev,
        ownerStatus: "LABOT",
        ownerNew: spec.proposedTarget,
        ownerNote: `Official TARGET entry (${ev.targetEntryUrl}) normative lemma «${ev.targetNormativeLemma}»; capitalization only (MASTER §7.158).`,
        ownerEvidenceAccepted: true,
      };
    }
    return {
      ...ev,
      ownerStatus: "NEEDS_SOURCE_REVIEW",
      ownerNew: "",
      ownerNote: "Capitalization reverification did not match pilot finding identity.",
      ownerEvidenceAccepted: false,
    };
  }

  if (!ev.dwellingSenseOk) {
    return {
      ...ev,
      ownerStatus: "NEEDS_SOURCE_REVIEW",
      ownerNew: "",
      ownerNote: "Validated entry lacks clear building/dwelling sense fragment for DE «das Haus».",
      ownerEvidenceAccepted: false,
    };
  }

  if (stripQuotes(productionCurrent).localeCompare(spec.currentTarget, undefined, { sensitivity: "accent" }) !== 0) {
    return { ...ev, ownerStatus: "NEEDS_SOURCE_REVIEW", ownerNew: "", ownerNote: "Production CURRENT drift vs fixed finding row.", ownerEvidenceAccepted: false };
  }

  return {
    ...ev,
    ownerStatus: "LABOT",
    ownerNew: spec.proposedTarget,
    ownerNote: `Official TARGET entry (${ev.targetEntryUrl}) supports «${ev.targetNormativeLemma}» for building/dwelling; CURRENT «${productionCurrent}» is wrong lemma.`,
    ownerEvidenceAccepted: true,
  };
}

async function resolveNsrRow(inv, deBundle) {
  const productionCurrent = inv.currentTarget;
  const lookupTerm = pickHausLookupTerm(inv, "nsr");
  const bundle = await accessOfficialSourcesForField(buildFieldRequest(inv, lookupTerm));
  const ev = evidenceRecordFromBundle({
    inv,
    productionCurrent,
    lookupTerm,
    bundle,
    adapterPass: "haus-owner-nsr-resolve",
  });

  const structured = loadStructuredLanguageAuthoritySources();
  const masterRow = structured.pass ? rowByAppCode(structured.languages, inv.appCode) : null;

  if (MASTER_CHANGE_LANGS.includes(inv.appCode)) {
    return {
      ...ev,
      resolution: "UNRESOLVED_MASTER_SOURCE",
      resolved: false,
      technicalBlocker: masterRow
        ? "MASTER-listed source lacks verified automated dictionary entry adapter"
        : "No MASTER row",
      masterProposalRequired: true,
    };
  }

  if (!ev.sourceValidated) {
    return {
      ...ev,
      resolution: "UNRESOLVED_ADAPTER",
      resolved: false,
      technicalBlocker: `TARGET outcome ${ev.targetOutcome}; lookup «${lookupTerm}»`,
      masterProposalRequired: false,
    };
  }

  if (inv.appCode === "uk" && productionCurrent === "будинок" && ev.targetNormativeLemma === "дім") {
    if (ev.dwellingSenseOk) {
      return {
        ...ev,
        resolution: "EVIDENCE_BOTH_LEMMAS_NEED_OWNER",
        resolved: false,
        technicalBlocker: "Both «будинок» (CURRENT) and validated «дім» entry exist; sense disambiguation required — no auto LABOT",
        masterProposalRequired: false,
      };
    }
  }

  const lemma = ev.targetNormativeLemma || stripQuotes(ev.targetHeadword);
  const sameLemma = stripQuotes(productionCurrent).localeCompare(lemma, undefined, { sensitivity: "accent" }) === 0;
  if (sameLemma && ev.dwellingSenseOk) {
    return { ...ev, resolution: "RESOLVED_PASS", resolved: true, postVerdict: "PASS", technicalBlocker: null };
  }

  const cap = evaluateDictionaryCapitalization({
    fieldKind: "dictionary",
    current: stripQuotes(productionCurrent),
    authorityLemma: lemma,
  });
  if (cap.ok === false && cap.findingType === "CAPITALIZATION_ERROR" && ev.dwellingSenseOk) {
    return {
      ...ev,
      resolution: "RESOLVED_CAP_FINDING",
      resolved: true,
      postVerdict: "FINDING",
      proposedTarget: cap.proposedTarget,
      findingType: "CAPITALIZATION_ERROR",
      technicalBlocker: null,
    };
  }

  if (!sameLemma && ev.dwellingSenseOk) {
    return {
      ...ev,
      resolution: "RESOLVED_WRONG_TRANSLATION_CANDIDATE",
      resolved: true,
      postVerdict: "FINDING",
      proposedTarget: lemma,
      findingType: "WRONG_TRANSLATION",
      technicalBlocker: null,
      note: "New FINDING candidate — not part of original 9 OWNER decision rows until OWNER promotes scope",
    };
  }

  return {
    ...ev,
    resolution: "UNRESOLVED_SEMANTIC",
    resolved: false,
    technicalBlocker: "Entry validated but dwelling sense or lemma match inconclusive",
  };
}

function buildMasterProposals(structured) {
  const proposals = [];
  for (const lang of MASTER_CHANGE_LANGS) {
    const row = structured.pass ? rowByAppCode(structured.languages, lang) : null;
    proposals.push({
      language: lang,
      status: "OWNER_APPROVAL_REQUIRED",
      currentMasterAuthority: row?.PRIMARY_DICTIONARY_AUTHORITY || row?.LANGUAGE_NORM_AUTHORITY,
      currentMasterUrls: row ? allUrlsForLanguage(row) : [],
      reason: "No verified automated dictionary entry lookup on MASTER-listed URLs for Haus pilot NSR resolution",
      proposedAction: "OWNER authorizes MASTER registry URL/adapter path with machine-readable dictionary entry",
    });
  }
  return proposals;
}

function buildManualRows(nsrResults, structured) {
  const manual = [];
  for (const r of nsrResults) {
    if (r.resolved) continue;
    const row = structured.pass ? rowByAppCode(structured.languages, r.language) : null;
    manual.push({
      language: r.language,
      productionCurrent: r.productionCurrent,
      candidateLookupLemma: r.lookupTermUsed,
      masterAuthority: row?.PRIMARY_DICTIONARY_AUTHORITY || row?.LANGUAGE_NORM_AUTHORITY,
      officialUrl: r.targetEntryUrl || (row ? allUrlsForLanguage(row)[0] : null),
      searchHeadword: r.lookupTermUsed,
      senseToVerify: require("./haus-de-sense").HAUS_DE_SENSE_NOTE,
      technicalBlocker: r.technicalBlocker,
      OWNER_STATUS: "",
      OWNER_NEW: "",
      OWNER_NOTE: "",
      OWNER_EVIDENCE_ACCEPTED: "",
      OWNER_REVIEWED_AT: "",
    });
  }
  return manual;
}

async function runHausOwnerReviewExecution(options = {}) {
  const inventory = loadHausProductionInventory();
  const invByLang = new Map(inventory.rows.map((r) => [r.language, r]));

  const deSample = inventory.rows[0];
  const deBundle = await accessOfficialSourcesForField(buildFieldRequest(deSample, "Haus"));

  const findingResults = [];
  for (const spec of FIXED_FINDING_IDENTITY) {
    const inv = invByLang.get(spec.language);
    if (!inv) continue;
    // eslint-disable-next-line no-await-in-loop
    findingResults.push(await reverifyFindingRow(inv, deBundle));
  }

  const nsrResults = [];
  for (const lang of NSR_LANGUAGES) {
    const inv = invByLang.get(lang);
    if (!inv) continue;
    // eslint-disable-next-line no-await-in-loop
    nsrResults.push(await resolveNsrRow(inv, deBundle));
  }

  if (!options.keepBrowserOpen) {
    await closeBrowserPool();
  }

  const structured = loadStructuredLanguageAuthoritySources();
  const masterProposals = buildMasterProposals(structured);
  const manualRows = buildManualRows(nsrResults, structured);

  const ownerDecisions = findingResults.map((f) => {
    const spec = FIXED_FINDING_IDENTITY.find((s) => s.language === f.language);
    return {
      language: f.language,
      appCode: f.language,
      productionFile: f.productionFile,
      cardId: f.cardId,
      fieldPath: f.fieldPath,
      currentTarget: f.productionCurrent,
      findingType: spec?.findingType,
      proposedNew: spec?.proposedTarget,
      targetNormativeLemma: f.targetNormativeLemma,
      targetEntryUrl: f.targetEntryUrl,
      OWNER_STATUS: f.ownerStatus,
      OWNER_NEW: f.ownerNew || "",
      OWNER_NOTE: f.ownerNote || "",
      OWNER_EVIDENCE_ACCEPTED: f.ownerEvidenceAccepted ? "YES" : "NO",
      OWNER_REVIEWED_AT: f.ownerEvidenceAccepted ? f.accessedAt : "",
      reverification: f,
    };
  });

  const decisionCounts = { LABOT: 0, NELABOT: 0, NEEDS_SOURCE_REVIEW: 0, SOURCE_DE_ISSUE: 0 };
  for (const d of ownerDecisions) {
    if (d.OWNER_STATUS in decisionCounts) decisionCounts[d.OWNER_STATUS] += 1;
  }

  const nsrResolved = nsrResults.filter((r) => r.resolved).length;
  const nsrUnresolved = nsrResults.length - nsrResolved;

  return {
    executedAt: new Date().toISOString(),
    findingResults,
    nsrResults,
    ownerDecisions,
    decisionCounts,
    manualRows,
    masterProposals,
    baseline: { findingRows: 9, nsrRows: 19 },
    nsrResolved,
    nsrUnresolved,
    full95731FieldAuditRun: false,
  };
}

module.exports = {
  NSR_LANGUAGES,
  runHausOwnerReviewExecution,
  pickHausLookupTerm,
};
