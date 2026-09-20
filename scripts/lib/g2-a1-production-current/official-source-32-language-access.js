#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { HAUS_DE_SENSE_NOTE } = require("./haus-de-sense");
const { SOURCE_ACCESS_OUTCOME, SOURCE_ACCESS_METHOD } = require("./official-source-access-constants");
const { evidenceQualityOk, isValidatedEntry } = require("./targeted-source-access-validation");
const { isHomepageUrl } = require("./source-adapters/create-config-adapter");
const { lookupDeOfficialEntry } = require("./source-adapters/de");
const {
  listAllTargetAppLanguages,
  listTargetAdapterMatrix,
  lookupTargetOfficialEntry,
  configForLang,
} = require("./source-adapters/target");
const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const {
  loadStructuredLanguageAuthoritySources,
  rowByAppCode,
  allUrlsForLanguage,
} = require("../master-language-authority-sources-33");
const { NEGATIVE_TERM } = require("./official-source-blocker-resolution");
const { extractNormativeLemma } = require("../master-capitalization-rule-verify");
const { closeBrowserPool } = require("./source-adapters/browser/pool");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/official-source-32-language-access");
const MATRIX_JSON = "official-source-32-language-access-matrix.json";
const MATRIX_MD = "official-source-32-language-access-matrix.md";

/** Haus pilot: DE `das Haus` = house/māja (not Gebäude, not Zuhause). */
const HAUS_POSITIVE_TEST_LEMMA = Object.freeze({
  en: "house",
  da: "hus",
  tr: "ev",
  gr: "σπίτι",
  ru: "дом",
  cs: "dům",
  sk: "dom",
  nb: "hus",
  nn: "hus",
  fi: "talo",
  es: "casa",
  et: "maja",
  lv: "māja",
  sl: "hiša",
  fr: "maison",
  hr: "kuća",
  is: "hús",
  it: "casa",
  lb: "Haus",
  lt: "namas",
  nl: "huis",
  pl: "dom",
  pt: "casa",
  ro: "casă",
  sv: "hus",
  bg: "къща",
  uk: "дім",
  bs: "kuća",
  sq: "shtëpi",
  sr: "кућа",
  mk: "куќа",
});

const ACCESS_LEVEL = Object.freeze({
  HTTP: "OFFICIAL_ENTRY_HTTP_ACCESSIBLE",
  BROWSER: "OFFICIAL_ENTRY_BROWSER_ACCESSIBLE",
  DATASET: "OFFICIAL_DATASET_ACCESSIBLE",
  MANUAL: "OFFICIAL_MANUAL_ENTRY_ACCESSIBLE",
  NONE: "NO_ACCESSIBLE_OFFICIAL_ENTRY_SOURCE",
});

function pilotPaths() {
  const dir = path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot");
  return {
    dir,
    verdicts: path.join(dir, "haus-32-language-verdicts.json"),
    deEvidence: path.join(dir, "haus-de-source-evidence.json"),
  };
}

function loadJson(rel) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function sourceRoleForUrl(masterRow, url) {
  if (!masterRow || !url) return "unknown";
  if (masterRow.PRIMARY_DICTIONARY_URLS?.includes(url)) return "PRIMARY_DICTIONARY";
  if (masterRow.LANGUAGE_NORM_URLS?.includes(url)) return "LANGUAGE_NORM";
  if (masterRow.ADDITIONAL_AUTHORITY_URLS?.includes(url)) return "ADDITIONAL_AUTHORITY";
  return "MASTER_REGISTERED";
}

function pickMasterSourceUrl(masterRow) {
  if (!masterRow) return null;
  const urls = allUrlsForLanguage(masterRow);
  return urls[0] || null;
}

function authorityTypeFromName(name) {
  const n = String(name || "").toLowerCase();
  if (/akademi|académie|academia|real academia/i.test(n)) return "national_academy";
  if (/institut|institute|ústav|институт/i.test(n)) return "language_institute";
  if (/ministr|government|valsts/i.test(n)) return "government_language_portal";
  if (/universit|univerzit|univerzitet/i.test(n)) return "university_language_institute";
  if (/rat für|språkrådet|taalunie/i.test(n)) return "official_spelling_authority";
  return "official_language_authority";
}

function positiveLemmaForLang(appLang, verdictRow) {
  if (HAUS_POSITIVE_TEST_LEMMA[appLang]) return HAUS_POSITIVE_TEST_LEMMA[appLang];
  if (verdictRow?.proposedTarget) return verdictRow.proposedTarget;
  if (verdictRow?.targetHeadword) {
    return extractNormativeLemma(verdictRow.targetHeadword, verdictRow.targetMeaningFragment);
  }
  return null;
}

function deriveAccessLevel(positive, matrixRow) {
  const validated = isValidatedEntry(positive) && evidenceQualityOk(positive);
  if (validated) {
    if (positive.accessMethod === SOURCE_ACCESS_METHOD.HTTP_FETCH) return ACCESS_LEVEL.HTTP;
    if (positive.accessMethod === SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION) return ACCESS_LEVEL.BROWSER;
    return ACCESS_LEVEL.HTTP;
  }
  if (matrixRow?.liveIntegrationStatus === "BLOCKED") return ACCESS_LEVEL.NONE;
  const err = String(positive.error || positive.outcome || "");
  if (/MANUAL|parse_failed|SPA|CAPTCHA|AUTHENTICATION|NO_MACHINE_READABLE/i.test(err)) {
    return ACCESS_LEVEL.MANUAL;
  }
  if (positive.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND && positive.entryUrl && !isHomepageUrl(positive.entryUrl)) {
    return ACCESS_LEVEL.MANUAL;
  }
  return ACCESS_LEVEL.NONE;
}

function automatedAuditUsable(accessStatus) {
  return (
    accessStatus === ACCESS_LEVEL.HTTP ||
    accessStatus === ACCESS_LEVEL.BROWSER ||
    accessStatus === ACCESS_LEVEL.DATASET
  );
}

function manualOwnerUsable(accessStatus) {
  return accessStatus === ACCESS_LEVEL.MANUAL;
}

function exactBlockerFromPositive(appLang, positive, matrixRow, resolutionRow) {
  if (resolutionRow?.technicalBlocker) return resolutionRow.technicalBlocker;
  if (matrixRow?.liveIntegrationStatus === "BLOCKED") {
    return matrixRow.knownLimitations?.[0] || matrixRow.blockedOutcome || "adapter_blocked";
  }
  if (isValidatedEntry(positive) && evidenceQualityOk(positive)) return null;
  if (isHomepageUrl(positive.entryUrl || positive.finalUrl)) return "homepage_only_no_entry";
  if (positive.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED) return "authentication_required";
  if (/CAPTCHA|BOT/i.test(String(positive.error || ""))) return "captcha_or_bot_challenge";
  if (positive.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ADAPTER_NOT_IMPLEMENTED) return "adapter_not_implemented";
  if (positive.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY) {
    return "no_machine_readable_entry";
  }
  if (positive.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND) {
    return positive.entryUrl ? "parser_or_entry_not_found" : "no_entry_url";
  }
  return String(positive.error || positive.outcome || "unknown_blocker");
}

function rowFromPilotCache(appLang, masterRow, matrixRow, verdictRow, resolutionRow) {
  const positiveTestLemma = positiveLemmaForLang(appLang, verdictRow);
  const accessStatus =
    verdictRow?.sourceAccessStatus === "SOURCE_ENTRY_VALIDATED" && verdictRow.evidenceSha256
      ? matrixRow?.adapterType?.includes("BROWSER")
        ? ACCESS_LEVEL.BROWSER
        : ACCESS_LEVEL.HTTP
      : resolutionRow
        ? resolutionRow.result === "MASTER_SOURCE_CHANGE_REQUIRED"
          ? ACCESS_LEVEL.NONE
          : ACCESS_LEVEL.MANUAL
        : ACCESS_LEVEL.NONE;

  const posValidated =
    verdictRow?.sourceAccessStatus === "SOURCE_ENTRY_VALIDATED" &&
    Boolean(verdictRow.evidenceSha256) &&
    Boolean(verdictRow.targetEntryUrl);
  const autoOk =
    posValidated &&
    (accessStatus === ACCESS_LEVEL.HTTP || accessStatus === ACCESS_LEVEL.BROWSER) &&
    !isHomepageUrl(verdictRow.targetEntryUrl);
  return {
    language: appLang,
    appCode: appLang,
    standardCode: masterRow?.standardCode || matrixRow?.standardCode,
    authorityName: masterRow?.authorityName || matrixRow?.authorityName,
    authorityType: authorityTypeFromName(masterRow?.authorityName),
    sourceRole: sourceRoleForUrl(masterRow, pickMasterSourceUrl(masterRow)),
    sourceUrl: pickMasterSourceUrl(masterRow),
    entryUrlPattern: matrixRow?.queryEntryUrlConstruction || null,
    accessMethod: verdictRow?.targetEntryUrl ? "PUBLIC_BROWSER_SESSION" : resolutionRow?.accessMethod || null,
    accessStatus,
    adapterId: matrixRow?.adapterId || configForLang(appLang)?.adapterId,
    positiveTestLemma,
    positiveEntryUrl: verdictRow?.targetEntryUrl || resolutionRow?.entryUrl || null,
    positiveHeadword: verdictRow?.targetHeadword || resolutionRow?.headword || null,
    positiveMeaningEvidence: verdictRow?.targetMeaningFragment || resolutionRow?.evidenceFragment || null,
    positiveEvidenceSha256: verdictRow?.evidenceSha256 || resolutionRow?.contentSha256 || null,
    negativeTestTerm: NEGATIVE_TERM,
    negativeOutcome: resolutionRow?.negativeOutcome || SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
    automatedAuditUsable: autoOk,
    manualOwnerUsable:
      (!autoOk && (manualOwnerUsable(accessStatus) || resolutionRow?.result === "MANUAL_OFFICIAL_EVIDENCE_REQUIRED")) ||
      (resolutionRow?.result === "MANUAL_OFFICIAL_EVIDENCE_REQUIRED" && !autoOk),
    masterRegistryChangeRequired: resolutionRow?.result === "MASTER_SOURCE_CHANGE_REQUIRED",
    exactBlocker: posValidated ? null : exactBlockerFromPositive(appLang, { outcome: verdictRow?.sourceAccessStatus }, matrixRow, resolutionRow),
    deSenseNote: HAUS_DE_SENSE_NOTE,
    checkedAt: verdictRow?.checkedAt || resolutionRow?.checkedAt || new Date().toISOString(),
    evidenceSource: "pilot_or_resolution_cache",
  };
}

async function probeLanguageLive(appLang, structured, matrix, resolutionByLang, verdictByLang) {
  const matrixRow = matrix.find((r) => r.language === appLang);
  const masterRow = structured.pass ? rowByAppCode(structured.languages, appLang) : null;
  const verdictRow = verdictByLang.get(appLang);
  const resolutionRow = resolutionByLang.get(appLang);
  const positiveTestLemma = positiveLemmaForLang(appLang, verdictRow);
  const allow = buildAllowlistForLanguage(appLang);
  const blocked = matrixRow?.liveIntegrationStatus === "BLOCKED";

  let positive;
  let negative;
  if (blocked) {
    positive = {
      outcome: matrixRow.blockedOutcome || SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
      error: matrixRow.knownLimitations?.[0],
      entryUrl: null,
      entryHeadwordOrRule: null,
      evidenceFragment: null,
      contentSha256: null,
      accessMethod: null,
    };
    negative = { outcome: matrixRow.blockedOutcome || SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY };
  } else {
    positive = await lookupTargetOfficialEntry({
      appLang,
      lookupTerm: positiveTestLemma,
      allowedDomains: allow.target.allowedDomains,
      authorityName: allow.target.authorityName,
      provenance: { role: "TARGET", language: appLang, originalCurrent: positiveTestLemma },
    });
    negative = await lookupTargetOfficialEntry({
      appLang,
      lookupTerm: NEGATIVE_TERM,
      allowedDomains: allow.target.allowedDomains,
      authorityName: allow.target.authorityName,
      provenance: { role: "TARGET", language: appLang },
    });
  }

  const accessStatus = deriveAccessLevel(positive, matrixRow);
  const negOk = negative.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED;
  const posOk = isValidatedEntry(positive) && evidenceQualityOk(positive) && !isHomepageUrl(positive.entryUrl);

  return {
    language: appLang,
    appCode: appLang,
    standardCode: masterRow?.standardCode || matrixRow?.standardCode,
    authorityName: allow.target.authorityName || masterRow?.authorityName,
    authorityType: authorityTypeFromName(allow.target.authorityName),
    sourceRole: sourceRoleForUrl(masterRow, pickMasterSourceUrl(masterRow)),
    sourceUrl: pickMasterSourceUrl(masterRow),
    entryUrlPattern: matrixRow?.queryEntryUrlConstruction || null,
    accessMethod: positive.accessMethod || null,
    accessStatus: posOk && negOk ? accessStatus : accessStatus === ACCESS_LEVEL.HTTP || accessStatus === ACCESS_LEVEL.BROWSER ? ACCESS_LEVEL.MANUAL : accessStatus,
    adapterId: matrixRow?.adapterId || positive.adapterId,
    positiveTestLemma,
    positiveEntryUrl: positive.entryUrl || positive.finalUrl || null,
    positiveHeadword: positive.entryHeadwordOrRule || null,
    positiveMeaningEvidence: positive.evidenceFragment || null,
    positiveEvidenceSha256: positive.contentSha256 || null,
    negativeTestTerm: NEGATIVE_TERM,
    negativeOutcome: negative.outcome,
    automatedAuditUsable: posOk && negOk && automatedAuditUsable(accessStatus),
    manualOwnerUsable:
      manualOwnerUsable(accessStatus) ||
      (!posOk && accessStatus === ACCESS_LEVEL.MANUAL) ||
      resolutionRow?.result === "MANUAL_OFFICIAL_EVIDENCE_REQUIRED",
    masterRegistryChangeRequired:
      resolutionRow?.result === "MASTER_SOURCE_CHANGE_REQUIRED" ||
      (blocked && ["bs", "sq", "sr", "mk"].includes(appLang)),
    exactBlocker: posOk && negOk ? null : exactBlockerFromPositive(appLang, positive, matrixRow, resolutionRow),
    deSenseNote: HAUS_DE_SENSE_NOTE,
    positiveOutcome: positive.outcome,
    negativeOutcomeRaw: negative.outcome,
    checkedAt: new Date().toISOString(),
    evidenceSource: "live_probe",
  };
}

async function buildDeRecord(structured, options) {
  const allow = buildAllowlistForLanguage("de");
  const paths = pilotPaths();
  let deSide;
  if (options.live) {
    deSide = await lookupDeOfficialEntry({
      lookupTerm: "Haus",
      allowedDomains: allow.de.allowedDomains,
      authorityName: allow.de.authorityName,
      provenance: { role: "DE", language: "de", originalCurrent: "Haus" },
    });
  } else if (fs.existsSync(paths.deEvidence)) {
    const cached = JSON.parse(fs.readFileSync(paths.deEvidence, "utf8"));
    deSide = {
      outcome: cached.deOutcome,
      entryUrl: cached.deEntryUrl,
      entryHeadwordOrRule: cached.deHeadword,
      evidenceFragment: cached.deEvidenceFragment,
      contentSha256: cached.deContentSha256,
      authorityName: cached.deAuthority,
    };
  } else {
    deSide = { outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED };
  }

  return {
    role: "DE_AUDIT_SOURCE",
    language: "de",
    appCode: "de",
    standardCode: "de",
    deLemma: "Haus",
    deArticle: "das",
    deSense: "māja / house (not Gebäude, not abstract Zuhause)",
    deSenseNote: HAUS_DE_SENSE_NOTE,
    authorityName: deSide.authorityName || allow.de.authorityName,
    positiveEntryUrl: deSide.entryUrl || deSide.finalUrl,
    positiveHeadword: deSide.entryHeadwordOrRule,
    positiveMeaningEvidence: deSide.evidenceFragment,
    positiveEvidenceSha256: deSide.contentSha256,
    accessStatus: isValidatedEntry(deSide) && evidenceQualityOk(deSide) ? ACCESS_LEVEL.HTTP : ACCESS_LEVEL.MANUAL,
    outcome: deSide.outcome,
    checkedAt: new Date().toISOString(),
    countsTowardTarget32: false,
  };
}

function masterChangeProposals(resolution, rows) {
  const proposals = [];
  const res = resolution?.resolutions || [];
  for (const r of res) {
    if (r.result !== "MASTER_SOURCE_CHANGE_REQUIRED") continue;
    proposals.push({
      language: r.language,
      currentMasterSourceUrl: r.sourceUrl,
      technicalBlocker: r.technicalBlocker,
      proposedOfficialSource: null,
      proposedInstitution: r.authorityName,
      proposedUrl: null,
      positiveTestResult: r.positiveOutcome,
      negativeTestResult: r.negativeOutcome,
      recommendedMasterRole: "PRIMARY_DICTIONARY",
      status: "OWNER_APPROVAL_REQUIRED",
      note: "Automated MASTER edit forbidden — OWNER must approve registry change",
    });
  }
  for (const row of rows) {
    if (row.masterRegistryChangeRequired && !proposals.some((p) => p.language === row.language)) {
      proposals.push({
        language: row.language,
        currentMasterSourceUrl: row.sourceUrl,
        technicalBlocker: row.exactBlocker,
        status: "OWNER_APPROVAL_REQUIRED",
        recommendedMasterRole: "PRIMARY_DICTIONARY",
      });
    }
  }
  return proposals;
}

function renderMatrixMd(payload) {
  const lines = [
    "# Official source access — 32 TARGET languages (Haus pilot)",
    "",
    `Generated: ${payload.generatedAt}`,
    "",
    `DE sense scope: ${HAUS_DE_SENSE_NOTE}`,
    "",
    `Automated (A/B/C): **${payload.summary.automatedCount}/32** · Manual (D): **${payload.summary.manualCount}** · Blocked (E): **${payload.summary.blockedCount}**`,
    "",
    "## TARGET matrix",
    "",
    "| Lang | std | Access | Auto | Lemma | Entry URL | Blocker |",
    "|------|-----|--------|------|-------|-----------|---------|",
  ];
  for (const r of payload.targetRows) {
    lines.push(
      `| ${r.language} | ${r.standardCode} | ${r.accessStatus} | ${r.automatedAuditUsable ? "yes" : "no"} | ${r.positiveTestLemma} | ${String(r.positiveEntryUrl || "—").slice(0, 48)} | ${String(r.exactBlocker || "—").slice(0, 40)} |`,
    );
  }
  lines.push("", "## DE source (not counted in 32)", "");
  lines.push(`- URL: ${payload.deRecord.positiveEntryUrl}`);
  lines.push(`- SHA256: ${payload.deRecord.positiveEvidenceSha256}`);
  if (payload.masterChangeProposals?.length) {
    lines.push("", "## MASTER change proposals (OWNER_APPROVAL_REQUIRED)", "");
    for (const p of payload.masterChangeProposals) {
      lines.push(`- **${p.language}**: ${p.technicalBlocker}`);
    }
  }
  return lines.join("\n");
}

async function buildOfficialSource32LanguageAccess(options = {}) {
  const live = options.live !== false;
  const reuseValidatedPilot = options.reuseValidatedPilot !== false;
  const structured = loadStructuredLanguageAuthoritySources();
  const matrix = listTargetAdapterMatrix();
  const langs = listAllTargetAppLanguages();
  const resolution = loadJson("reports/g2-a1-production-current/official-source-exact-blockers-resolution.json");
  const resolutionByLang = new Map((resolution?.resolutions || []).map((r) => [r.language, r]));
  const verdicts = loadJson("reports/g2-a1-production-current/haus-32-language-source-pilot/haus-32-language-verdicts.json");
  const verdictByLang = new Map((verdicts?.rows || []).map((r) => [r.language, r]));

  const targetRows = [];
  for (const appLang of langs.sort()) {
    const matrixRow = matrix.find((r) => r.language === appLang);
    const masterRow = structured.pass ? rowByAppCode(structured.languages, appLang) : null;
    const verdictRow = verdictByLang.get(appLang);
    const resolutionRow = resolutionByLang.get(appLang);
    const useCache =
      !live ||
      (reuseValidatedPilot &&
        verdictRow?.sourceAccessStatus === "SOURCE_ENTRY_VALIDATED" &&
        verdictRow.evidenceSha256 &&
        !resolutionRow);

    if (useCache && verdictRow?.sourceAccessStatus === "SOURCE_ENTRY_VALIDATED") {
      targetRows.push(rowFromPilotCache(appLang, masterRow, matrixRow, verdictRow, resolutionRow));
    } else if (useCache && resolutionRow && !live) {
      targetRows.push(rowFromPilotCache(appLang, masterRow, matrixRow, verdictRow, resolutionRow));
    } else {
      // eslint-disable-next-line no-await-in-loop
      targetRows.push(await probeLanguageLive(appLang, structured, matrix, resolutionByLang, verdictByLang));
    }
  }

  if (live) await closeBrowserPool();

  const deRecord = await buildDeRecord(structured, { live: false });

  const automatedCount = targetRows.filter((r) => r.automatedAuditUsable).length;
  const manualCount = targetRows.filter((r) => r.manualOwnerUsable && !r.automatedAuditUsable).length;
  const blockedCount = targetRows.filter(
    (r) => r.accessStatus === ACCESS_LEVEL.NONE && !r.automatedAuditUsable && !r.manualOwnerUsable,
  ).length;

  let classification = "G2_A1_OFFICIAL_SOURCE_ACCESS_BLOCKED";
  let nextAction = "OWNER_REVIEW_EXACT_SOURCE_REPLACEMENT_PROPOSALS";
  if (automatedCount === 32) {
    classification = "G2_A1_OFFICIAL_SOURCE_ACCESS_READY_32_OF_32";
    nextAction = "OWNER_REVIEW_SOURCE_MATRIX_AND_AUTHORIZE_PR_842_MERGE";
  } else if (automatedCount + manualCount === 32 && blockedCount === 0) {
    classification = "G2_A1_OFFICIAL_SOURCE_ACCESS_PARTIAL_MANUAL_REQUIRED";
    nextAction = "OWNER_DECIDE_MANUAL_AUDIT_SCOPE_OR_OFFICIAL_SOURCE_CHANGE";
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    schemaVersion: 1,
    pilot: {
      deLemma: "Haus",
      deArticle: "das",
      senseScope: HAUS_DE_SENSE_NOTE,
      negativeTestTerm: NEGATIVE_TERM,
    },
    targetLanguageCount: targetRows.length,
    targetRows,
    deRecord,
    masterChangeProposals: masterChangeProposals(resolution, targetRows),
    summary: {
      automatedCount,
      manualCount,
      blockedCount,
      automatedOf32: `${automatedCount}/32`,
    },
    classification,
    nextAction,
    full95731AuditRan: false,
    buildMode: live ? "live_with_pilot_reuse_for_validated" : "assemble_cache",
  };

  return payload;
}

function writeOfficialSource32LanguageAccessArtifacts(payload) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, MATRIX_JSON), `${JSON.stringify(payload, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT_DIR, MATRIX_MD), `${renderMatrixMd(payload)}\n`);
}

module.exports = {
  OUT_DIR,
  MATRIX_JSON,
  MATRIX_MD,
  HAUS_POSITIVE_TEST_LEMMA,
  ACCESS_LEVEL,
  NEGATIVE_TERM,
  buildOfficialSource32LanguageAccess,
  writeOfficialSource32LanguageAccessArtifacts,
  automatedAuditUsable,
  manualOwnerUsable,
};
