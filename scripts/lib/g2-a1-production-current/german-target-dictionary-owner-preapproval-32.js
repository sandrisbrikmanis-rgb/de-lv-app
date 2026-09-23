#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { APP_LANGUAGE_CODES } = require("../official-language-sources-registry");
const { loadStructuredLanguageAuthoritySources, stripTrackingParams } = require("../master-language-authority-sources-33");
const { SEARCH_PILOT_WORDS } = require("./german-target-dictionary-search-catalog");

const ALTERNATIVES_REL =
  "reports/g2-a1-production-current/german-target-dictionary-alternatives-32/german-target-dictionary-alternatives-32.json";
const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/german-target-dictionary-owner-preapproval-32");

/** Canonical 32 TARGET app codes (DE excluded). Sorted for verification gate. */
const CANONICAL_TARGET_APP_CODES_32 = Object.freeze([...APP_LANGUAGE_CODES].sort());

const EDITORIAL_ENTRY_TYPE = Object.freeze({
  HUMAN_EDITED_PROFESSIONAL: "HUMAN_EDITED_PROFESSIONAL",
  INSTITUTIONAL_PROFESSIONAL: "INSTITUTIONAL_PROFESSIONAL",
  COMMUNITY_DICTIONARY_DICT_CC: "COMMUNITY_DICTIONARY_DICT_CC",
  COMMUNITY_LEXICON_GLOSBE: "COMMUNITY_LEXICON_GLOSBE",
  COMMUNITY_LEXICON_OTHER: "COMMUNITY_LEXICON_OTHER",
  AUTOMATIC_TRANSLATION_NOT_DICTIONARY: "AUTOMATIC_TRANSLATION_NOT_DICTIONARY",
});

const SOURCE_CLASS_BY_PLATFORM = Object.freeze({
  pons: "B",
  langenscheidt: "B",
  leo: "B",
  "bab.la": "B",
  dict_cc: "E",
  "dict.cc": "E",
  glosbe: "E",
  letonika: "A",
  lod: "A",
  "vokieciu-lietuviu": "E",
  master_manifest: "A",
  override_fallback: "E",
  keelevara: "B",
});

function editorialForPlatform(platform) {
  switch (platform) {
    case "pons":
    case "langenscheidt":
    case "leo":
    case "bab.la":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.HUMAN_EDITED_PROFESSIONAL,
        entryEditorialLabelLv:
          "Cilvēku rediģēta profesionāla vārdnīca (izdevējs/redaktors; nav MT)",
        sourceClass: SOURCE_CLASS_BY_PLATFORM[platform] || "B",
      };
    case "dict.cc":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.COMMUNITY_DICTIONARY_DICT_CC,
        entryEditorialLabelLv:
          "Kopienas vārdnīca (dict.cc — brīvprātīgi ieraksti; nav oficiāls valodas institūts)",
        sourceClass: "E",
      };
    case "glosbe":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_GLOSBE,
        entryEditorialLabelLv:
          "Kopienas leksikons (Glosbe vārdnīcas sadaļa; automātiskie tulkojumi atdalīti/no pilotiem noraidīti)",
        sourceClass: "E",
      };
    case "verbformen":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_OTHER,
        entryEditorialLabelLv: "Netzverb/verbformen — kopienas/agregēts leksikons (nav MT avots)",
        sourceClass: "E",
      };
    case "udew":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.HUMAN_EDITED_PROFESSIONAL,
        entryEditorialLabelLv: "Leipzig UDEW — pētniecības vārdnīca (cilvēku rediģēts)",
        sourceClass: "B",
      };
    case "luxdico":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_OTHER,
        entryEditorialLabelLv: "Luxdico — praktisks divvalodu leksikons (DE↔LB)",
        sourceClass: "E",
      };
    case "dicts.info":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_OTHER,
        entryEditorialLabelLv: "dicts.info — statisks kopienas vārdnīcas indekss",
        sourceClass: "E",
      };
    case "multitran":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_OTHER,
        entryEditorialLabelLv: "Multitran — lietotāju/specializēts leksikons",
        sourceClass: "E",
      };
    case "vokieciu-lietuviu":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_OTHER,
        entryEditorialLabelLv: "vokieciu-lietuviu.com — kopienas vārdnīca (~16k)",
        sourceClass: "E",
      };
    case "letonika":
    case "lod":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.INSTITUTIONAL_PROFESSIONAL,
        entryEditorialLabelLv: "Institucionāli uzturēta vārdnīca (valsts/akadēmiska)",
        sourceClass: "A",
      };
    case "vokieciu-lietuviu":
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_OTHER,
        entryEditorialLabelLv: "Kopienas/LED vārdnīca (nav MT avots)",
        sourceClass: "E",
      };
    default:
      return {
        entryEditorialType: EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_OTHER,
        entryEditorialLabelLv: "Kopienas vai reģistra avots — pārbaudīt redakcionālo statusu",
        sourceClass: SOURCE_CLASS_BY_PLATFORM[platform] || "E",
      };
  }
}

function findRecommendedRanked(langRow) {
  const url = stripTrackingParams(langRow.recommended?.url);
  return (
    langRow.alternativesRanked?.find((a) => stripTrackingParams(a.url) === url) ||
    langRow.alternativesRanked?.[0]
  );
}

function pilotEvidenceFrom(ranked) {
  const pilots = ranked?.pilots || {};
  const automaticWords = SEARCH_PILOT_WORDS.filter(
    (w) => pilots[w.lemma] === "AUTOMATIC_TRANSLATION_ONLY",
  ).map((w) => w.lemma);
  const foundWords = SEARCH_PILOT_WORDS.filter((w) => pilots[w.lemma] === "FOUND").map((w) => w.lemma);
  return {
    pilots,
    automaticTranslationOnlyWords: automaticWords,
    dictionaryEntryWords: foundWords,
    usesAutomaticTranslationAsEvidence: automaticWords.length > 0,
  };
}

function verifyTargetLanguageSet(alternativesLanguages) {
  const fromArtifact = alternativesLanguages.map((l) => l.appCode).sort();
  const blockers = [];
  if (fromArtifact.length !== 32) blockers.push({ code: "TARGET_COUNT", got: fromArtifact.length });
  for (const code of CANONICAL_TARGET_APP_CODES_32) {
    if (!fromArtifact.includes(code)) blockers.push({ code: "MISSING_TARGET", appCode: code });
  }
  for (const code of fromArtifact) {
    if (!CANONICAL_TARGET_APP_CODES_32.includes(code)) blockers.push({ code: "UNEXPECTED_TARGET", appCode: code });
  }
  if (fromArtifact.includes("de")) blockers.push({ code: "DE_IN_TARGET_LIST" });
  const nb = alternativesLanguages.find((l) => l.appCode === "nb");
  const nn = alternativesLanguages.find((l) => l.appCode === "nn");
  if (nb && nn && stripTrackingParams(nb.recommended?.url) === stripTrackingParams(nn.recommended?.url)) {
    blockers.push({ code: "NB_NN_SAME_RECOMMENDED_URL" });
  }
  const gr = alternativesLanguages.find((l) => l.appCode === "gr");
  if (gr && gr.standardCode !== "el") blockers.push({ code: "GR_STANDARD_EL", got: gr.standardCode });
  const bs = alternativesLanguages.find((l) => l.appCode === "bs");
  const hr = alternativesLanguages.find((l) => l.appCode === "hr");
  const sr = alternativesLanguages.find((l) => l.appCode === "sr");
  if (bs && hr && bs.recommended?.url === hr.recommended?.url && bs.recommended?.name === hr.recommended?.name) {
    /* allowed same platform family if URLs differ by pair — only block exact same URL */
  }
  return {
    pass: blockers.length === 0,
    blockers,
    canonicalTargetAppCodes32: CANONICAL_TARGET_APP_CODES_32,
    artifactTargetAppCodes32: fromArtifact,
    nbNnDistinct:
      nb && nn ? stripTrackingParams(nb.recommended?.url) !== stripTrackingParams(nn.recommended?.url) : null,
    grMapsToStandardEl: gr?.standardCode === "el",
  };
}

function loadDeSourceLanguageBlock(structured) {
  const de = structured.languages.find((r) => r.appCode === "de");
  if (!de) return { pass: false, error: "DE_ROW_MISSING" };
  return {
    pass: true,
    role: "SOURCE_LANGUAGE_AUDIT_DE",
    appCode: "de",
    standardCode: "de",
    notInTarget32: true,
    primaryDictionaryAuthority: de.PRIMARY_DICTIONARY_AUTHORITY,
    primaryDictionaryUrls: de.PRIMARY_DICTIONARY_URLS || [],
    languageNormAuthority: de.LANGUAGE_NORM_AUTHORITY,
    languageNormUrls: de.LANGUAGE_NORM_URLS || [],
    note: "Vācu (de) ir audita avota valoda; nav viens no 32 TARGET locales.",
  };
}

function buildOwnerPreapproval32() {
  const altPath = path.join(ROOT, ALTERNATIVES_REL);
  if (!fs.existsSync(altPath)) throw new Error("MISSING_ALTERNATIVES_ARTIFACT");
  const alternatives = JSON.parse(fs.readFileSync(altPath, "utf8"));
  const structured = loadStructuredLanguageAuthoritySources();
  if (!structured.pass) throw new Error(structured.error);

  const languageSetGate = verifyTargetLanguageSet(alternatives.languages);
  const deBlock = loadDeSourceLanguageBlock(structured);

  const proposedChanges = [];
  for (const lang of alternatives.languages) {
    if (!lang.betterThanMaster || !lang.recommended) continue;
    const ranked = findRecommendedRanked(lang);
    const editorial = editorialForPlatform(lang.recommended.platform);
    const evidence = pilotEvidenceFrom(ranked);
    let editorialType = editorial.entryEditorialType;
    let editorialLabelLv = editorial.entryEditorialLabelLv;
    if (evidence.usesAutomaticTranslationAsEvidence) {
      editorialLabelLv += ` BRĪDINĀJUMS: pilotos ${evidence.automaticTranslationOnlyWords.join(", ")} = tikai automātiskā sadaļa (nav vārdnīcas ieraksts).`;
    }
    if (
      evidence.dictionaryEntryWords.length === 0 &&
      evidence.automaticTranslationOnlyWords.length > 0
    ) {
      editorialType = EDITORIAL_ENTRY_TYPE.AUTOMATIC_TRANSLATION_NOT_DICTIONARY;
    }

    proposedChanges.push({
      appCode: lang.appCode,
      standardCode: lang.standardCode,
      masterRegistryUrl: lang.masterRegistryUrl,
      masterRegistryName: lang.masterRegistryName,
      proposedDictionaryName: lang.recommended.name,
      proposedDictionaryUrl: lang.recommended.url,
      platform: lang.recommended.platform,
      sourceClass: editorial.sourceClass,
      entryEditorialType: editorialType,
      entryEditorialLabelLv: editorialLabelLv,
      finalStatus: lang.recommended.finalStatus,
      pilotHaus: evidence.pilots.Haus,
      pilotAbholen: evidence.pilots.abholen,
      pilotRoute: evidence.pilots.Route,
      pilotGetriebe: evidence.pilots.Getriebe,
      dictionaryEntryEvidenceWords: evidence.dictionaryEntryWords,
      automaticTranslationOnlyWords: evidence.automaticTranslationOnlyWords,
      ownerApprovalRequired: true,
      ownerDecision: "PENDING",
      ownerDecisionNote:
        "Neapstiprināt bez OWNER — pārbaudīt redakcionālo tipu un pilotu URL pierādījumus.",
    });
  }

  proposedChanges.sort((a, b) => a.appCode.localeCompare(b.appCode));

  const allRecommended = alternatives.languages.map((lang) => {
    const ranked = findRecommendedRanked(lang);
    const editorial = editorialForPlatform(lang.recommended?.platform || "unknown");
    const evidence = pilotEvidenceFrom(ranked);
    return {
      appCode: lang.appCode,
      standardCode: lang.standardCode,
      recommended: lang.recommended,
      betterThanMaster: lang.betterThanMaster,
      ...editorial,
      ...evidence,
    };
  });

  return {
    schemaVersion: "g2-a1-german-target-dictionary-owner-preapproval-v1",
    generatedAt: new Date().toISOString(),
    classification: "G2_A1_GERMAN_TARGET_DICTIONARY_OWNER_PREAPPROVAL_PACK_READY",
    nextAction: "OWNER_REVIEW_AND_APPROVE_25_DICTIONARY_REGISTRY_CHANGES",
    languageSetVerification: languageSetGate,
    sourceLanguageDe: deBlock,
    metrics: {
      targetLanguageCount: 32,
      proposedMasterChangesCount: proposedChanges.length,
      expectedProposedChangesCount: 25,
      humanEditedProfessionalCount: proposedChanges.filter(
        (c) => c.entryEditorialType === EDITORIAL_ENTRY_TYPE.HUMAN_EDITED_PROFESSIONAL,
      ).length,
      communityCount: proposedChanges.filter((c) =>
        [
          EDITORIAL_ENTRY_TYPE.COMMUNITY_DICTIONARY_DICT_CC,
          EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_GLOSBE,
          EDITORIAL_ENTRY_TYPE.COMMUNITY_LEXICON_OTHER,
        ].includes(c.entryEditorialType),
      ).length,
      withAutomaticPilotWarning: proposedChanges.filter((c) => c.automaticTranslationOnlyWords?.length).length,
    },
    proposedMasterChanges: proposedChanges,
    allTargetLanguagesRecommendedProfile: allRecommended,
    constraints: {
      masterNotModified: true,
      productionDataChanged: false,
      ownerLabotNelabotAssigned: false,
    },
  };
}

function csvEscape(v) {
  return `"${String(v ?? "").replace(/"/g, '""')}"`;
}

function writeOwnerPreapprovalArtifacts(payload) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "german-target-dictionary-owner-preapproval-32.json");
  const mdPath = path.join(OUT_DIR, "german-target-dictionary-owner-preapproval-32.md");
  const csvPath = path.join(OUT_DIR, "german-target-dictionary-owner-preapproval-25-changes.csv");
  const verifyPath = path.join(OUT_DIR, "german-target-dictionary-owner-preapproval-verification.json");

  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  const md = [
    "# G2/A1 — OWNER priekšapstiprinājums: vācu–TARGET vārdnīcas (32 + DE atsevišķi)",
    "",
    "## 1. TARGET valodu koda komplekts (32)",
    "",
    `Verifikācija: **${payload.languageSetVerification.pass ? "PASS" : "FAIL"}**`,
    "",
    "```",
    payload.languageSetVerification.canonicalTargetAppCodes32.join(", "),
    "```",
    "",
    "- `de` **nav** TARGET sarakstā",
    "- `nb` un `nn` atsevišķi",
    "- `gr` → standarta kods `el`",
    "",
    "## 2. Avota valoda DE (atsevišķi)",
    "",
    `| Lauks | Vērtība |`,
    `|-------|---------|`,
    `| appCode | \`${payload.sourceLanguageDe.appCode}\` |`,
    `| PRIMARY | ${payload.sourceLanguageDe.primaryDictionaryAuthority} |`,
    `| URL | ${(payload.sourceLanguageDe.primaryDictionaryUrls || []).join("; ")} |`,
    `| Piezīme | ${payload.sourceLanguageDe.note} |`,
    "",
    "## 3. Ieteicamās izmaiņas MASTER (25) — OWNER `PENDING`",
    "",
    "Katram ieteiktajam avotam norādīts **ieraksta tips** (cilvēku rediģēts vs kopiena/automātika).",
    "",
    "| Valoda | std | MASTER URL | Ieteicamais URL | Platforma | Klase | Redakcionālais tips | Haus | abholen | Route | Getriebe | Auto brīdinājums |",
    "|--------|-----|------------|-----------------|-----------|-------|---------------------|------|---------|-------|----------|-------------------|",
  ];

  for (const c of payload.proposedMasterChanges) {
    md.push(
      `| ${c.appCode} | ${c.standardCode} | ${c.masterRegistryUrl} | ${c.proposedDictionaryUrl} | ${c.platform} | ${c.sourceClass} | ${c.entryEditorialType} | ${c.pilotHaus} | ${c.pilotAbholen} | ${c.pilotRoute} | ${c.pilotGetriebe} | ${(c.automaticTranslationOnlyWords || []).join(" ") || "—"} |`,
    );
  }

  md.push(
    "",
    "## 4. Redakcionālo tipu skaidrojums",
    "",
    "| `entryEditorialType` | Nozīme |",
    "|------------------------|--------|",
    "| HUMAN_EDITED_PROFESSIONAL | Cilvēku rediģēta komerciāla/institucionāla vārdnīca (PONS, Langenscheidt, LEO, bab.la) |",
    "| INSTITUTIONAL_PROFESSIONAL | Valsts/akadēmiska vārdnīca |",
    "| COMMUNITY_DICTIONARY_DICT_CC | dict.cc — kopienas ieraksti (klase E) |",
    "| COMMUNITY_LEXICON_GLOSBE | Glosbe vārdnīcas sadaļa — kopiena; automātiskie tulkojumi atdalīti |",
    "| AUTOMATIC_TRANSLATION_NOT_DICTIONARY | Nedrīkst lietot — pierādījums tikai no automātiskās sadaļas |",
    "",
    "**OWNER lēmums:** aizpildīt `ownerDecision` CSV/JSON pēc pārbaudes. Šajā piegājienā nav piešķirts LABOT/NELABOT.",
    "",
  );

  fs.writeFileSync(mdPath, `${md.join("\n")}\n`, "utf8");

  const header =
    "appCode,standardCode,masterRegistryUrl,proposedDictionaryUrl,proposedDictionaryName,platform,sourceClass,entryEditorialType,entryEditorialLabelLv,pilotHaus,pilotAbholen,pilotRoute,pilotGetriebe,automaticTranslationOnlyWords,finalStatus,ownerApprovalRequired,ownerDecision";
  const csvLines = payload.proposedMasterChanges.map((c) =>
    [
      c.appCode,
      c.standardCode,
      c.masterRegistryUrl,
      c.proposedDictionaryUrl,
      c.proposedDictionaryName,
      c.platform,
      c.sourceClass,
      c.entryEditorialType,
      c.entryEditorialLabelLv,
      c.pilotHaus,
      c.pilotAbholen,
      c.pilotRoute,
      c.pilotGetriebe,
      (c.automaticTranslationOnlyWords || []).join(";"),
      c.finalStatus,
      "OWNER_APPROVAL_REQUIRED",
      c.ownerDecision,
    ]
      .map(csvEscape)
      .join(","),
  );
  fs.writeFileSync(csvPath, `${header}\n${csvLines.join("\n")}\n`, "utf8");

  const verification = {
    schemaVersion: "g2-a1-german-target-dictionary-owner-preapproval-verification-v1",
    generatedAt: payload.generatedAt,
    languageSetVerification: payload.languageSetVerification,
    sourceLanguageDePresent: payload.sourceLanguageDe.pass,
    proposedChangesCount: payload.metrics.proposedMasterChangesCount,
    constraints: payload.constraints,
  };
  fs.writeFileSync(verifyPath, `${JSON.stringify(verification, null, 2)}\n`, "utf8");

  return { jsonPath, mdPath, csvPath, verifyPath };
}

module.exports = {
  OUT_DIR,
  CANONICAL_TARGET_APP_CODES_32,
  EDITORIAL_ENTRY_TYPE,
  editorialForPlatform,
  buildOwnerPreapproval32,
  writeOwnerPreapprovalArtifacts,
  verifyTargetLanguageSet,
};
