#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const {
  loadStructuredLanguageAuthoritySources,
  rowByAppCode,
  allUrlsForLanguage,
} = require("../master-language-authority-sources-33");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const {
  RESOLUTION_LANGUAGES,
  E_PRIORITY,
  PROPOSED_SOURCES,
} = require("./official-source-resolution-catalog");
const { ACCESS_STATUS, automatedAuditUsableForTier, tierFromProbe } = require("./official-source-access-status");
const { probeLanguageResolution, NEGATIVE_TERM } = require("./official-source-resolution-probes");
const {
  HAUS_POSITIVE_TEST_LEMMA,
  HAUS_DE_SENSE_NOTE,
  ACCESS_LEVEL,
} = require("./official-source-32-language-access");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/official-source-18-language-resolution");

function authorityTypeFromName(name) {
  const n = String(name || "").toLowerCase();
  if (/akademi|académie|academia|real academia/i.test(n)) return "national_academy";
  if (/institut|institute|ústav|институт/i.test(n)) return "language_institute";
  if (/ministr|government|valsts|\.gov\./i.test(n)) return "government_language_portal";
  if (/universit|univerzit|univerzitet/i.test(n)) return "university_language_institute";
  return "official_language_authority";
}

function legacyAccessStatus(tier, auto) {
  if (auto && tier === ACCESS_STATUS.A) return ACCESS_LEVEL.HTTP;
  if (auto && tier === ACCESS_STATUS.B) return ACCESS_LEVEL.BROWSER;
  if (tier === ACCESS_STATUS.D) return ACCESS_LEVEL.MANUAL;
  if (tier === ACCESS_STATUS.E) return ACCESS_LEVEL.NONE;
  if (auto) return ACCESS_LEVEL.BROWSER;
  return ACCESS_LEVEL.MANUAL;
}

function pickMasterSourceUrl(masterRow) {
  if (!masterRow) return null;
  const urls = allUrlsForLanguage(masterRow);
  return urls[0] || null;
}

function buildOwnerProposal(lang, masterRow, resolutionRow, selected) {
  const catalog = PROPOSED_SOURCES[lang];
  const proposal = catalog?.proposals?.find((p) => p.probeId === selected.probeId) || catalog?.proposals?.[0];
  const currentUrl = pickMasterSourceUrl(masterRow);
  return {
    language: lang,
    currentMasterSourceUrl: currentUrl,
    currentMasterBlocker: catalog?.currentBlocker || resolutionRow.exactBlocker,
    newOfficialSource: proposal?.resourceName || selected.entryUrl,
    institution: proposal?.institutionName || masterRow?.authorityName,
    institutionCountry: proposal?.institutionCountry || null,
    institutionRole: proposal?.institutionRole || null,
    sourceType: selected.accessStatus || proposal?.resourceType || ACCESS_STATUS.E,
    sourceUrl: selected.entryUrl || proposal?.sourceUrl || null,
    officialStatusEvidence: proposal?.officialStatusEvidence || null,
    licenseOrAccess: proposal?.licenseOrAccess || null,
    positiveTestLemma: HAUS_POSITIVE_TEST_LEMMA[lang],
    positiveTestResult: selected.positiveOutcome || null,
    negativeTestTerm: NEGATIVE_TERM,
    negativeTestResult: selected.negativeOutcome || SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
    automationMethod: proposal?.automationMethod || selected.adapterId,
    recommendedMasterRole: proposal?.recommendedMasterRole || "PRIMARY_DICTIONARY",
    OWNER_STATUS: "OWNER_APPROVAL_REQUIRED",
    masterRegistryChangeRequired: resolutionRow.masterRegistryChangeRequired,
  };
}

function buildBundle(lang, selected, proposal) {
  if (selected.accessStatus !== ACCESS_STATUS.C5 && !proposal?.meaningCoverage) return null;
  return {
    language: lang,
    sourceBundleId: `${lang}-official-bundle-v1`,
    sources: [
      {
        role: selected.role,
        institution: proposal?.institutionName,
        urlOrFile: selected.entryUrl,
        sha256: selected.contentSha256,
        proves: proposal?.provesClaims || ["TARGET_LEMMA", "TARGET_MEANING"],
      },
    ],
    mandatoryElementsCovered: Boolean(selected.validated),
    bundlePass: Boolean(selected.validated),
  };
}

function rowToMatrixFields(lang, masterRow, resolution) {
  const selected = resolution.selectedProbe;
  let tier = tierFromProbe(selected);
  if (!selected.validated && selected.error && /CAPTCHA|parse_failed|AUTHENTICATION/i.test(String(selected.error))) {
    tier = ACCESS_STATUS.D;
  } else if (!selected.validated) {
    tier = ACCESS_STATUS.E;
  }
  const auto = automatedAuditUsableForTier(tier) && selected.validated;
  const catalog = PROPOSED_SOURCES[lang];
  const proposal = catalog?.proposals?.[0];
  const authorityName =
    proposal?.institutionName ||
    masterRow?.PRIMARY_DICTIONARY_AUTHORITY ||
    masterRow?.LANGUAGE_NORM_AUTHORITY ||
    masterRow?.authorityName;
  return {
    language: lang,
    appCode: lang,
    standardCode: masterRow?.standardCode || lang,
    authorityName,
    authorityType: authorityTypeFromName(authorityName),
    sourceType: tier,
    sourceRole: selected.role === "MASTER_CURRENT" ? "MASTER_REGISTERED" : "PROPOSED_PRIMARY",
    sourceUrl: pickMasterSourceUrl(masterRow),
    officialStatusEvidence: proposal?.officialStatusEvidence || "MASTER structured registry + live probe",
    accessStatus: legacyAccessStatus(tier, auto),
    accessMethod: selected.accessMethod,
    adapterId: selected.adapterId,
    datasetFormat: selected.datasetFormat || null,
    datasetSha256: selected.datasetSha256 || selected.contentSha256 || null,
    sourceBundleId: null,
    entryUrlPattern: null,
    manualOwnerUsable: !auto && tier === ACCESS_STATUS.D,
    positiveTestLemma: HAUS_POSITIVE_TEST_LEMMA[lang],
    positiveEntryUrl: selected.entryUrl,
    positiveHeadword: selected.headword,
    positiveMeaningEvidence: selected.evidenceFragment,
    positiveEvidenceSha256: selected.contentSha256,
    negativeTestTerm: NEGATIVE_TERM,
    negativeOutcome: selected.negativeOutcome || SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
    automatedAuditUsable: auto,
    exactBlocker: auto ? null : catalog?.currentBlocker || selected.error || "automation_not_validated",
    masterRegistryChangeRequired: resolution.masterRegistryChangeRequired,
    ownerApprovalStatus: resolution.ownerApprovalStatus,
    checkedAt: new Date().toISOString(),
    deSenseNote: HAUS_DE_SENSE_NOTE,
    evidenceSource: "live_resolution_probe",
  };
}

async function buildOfficialSource18LanguageResolution() {
  const structured = loadStructuredLanguageAuthoritySources();
  const checkedAt = new Date().toISOString();
  const languageRows = [];
  const ownerProposals = [];
  const bundles = [];
  const tests = [];
  const downloadable = [];

  for (const lang of RESOLUTION_LANGUAGES) {
    // eslint-disable-next-line no-await-in-loop
    const resolution = await probeLanguageResolution(lang);
    const masterRow = structured.pass ? rowByAppCode(structured.languages, lang) : null;
    const selected = resolution.selectedProbe;
    const matrixFields = rowToMatrixFields(lang, masterRow, resolution);
    languageRows.push({
      ...matrixFields,
      investigationComplete: true,
      probeCount: resolution.probes.length,
      selectedProbeId: selected.probeId,
    });
    if (matrixFields.masterRegistryChangeRequired || selected.probeId !== "master-registered-adapter") {
      ownerProposals.push(buildOwnerProposal(lang, masterRow, matrixFields, selected));
    }
    const catalogProposal = PROPOSED_SOURCES[lang]?.proposals?.[0];
    const bundle = buildBundle(lang, selected, catalogProposal);
    if (bundle) bundles.push(bundle);
    tests.push({
      language: lang,
      adapterOrProbeId: selected.adapterId || selected.probeId,
      positiveLemma: HAUS_POSITIVE_TEST_LEMMA[lang],
      positiveOutcome: selected.positiveOutcome,
      positiveEntryUrl: selected.entryUrl,
      positiveEvidenceSha256: selected.contentSha256,
      negativeTerm: NEGATIVE_TERM,
      negativeOutcome: selected.negativeOutcome,
      pass: Boolean(selected.validated),
    });
    if (catalogProposal?.resourceType === ACCESS_STATUS.C4) {
      downloadable.push({
        language: lang,
        proposalId: catalogProposal.proposalId,
        downloadUrl: catalogProposal.sourceUrl,
        format: "ARCHIVE_ITEM",
        datasetSha256: null,
        licenseOrAccess: catalogProposal.licenseOrAccess,
        note: "SHA requires OWNER-approved download pipeline — not executed in this pass",
      });
    }
  }

  await closeBrowserPool();

  const tierCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  for (const r of languageRows) {
    const t = r.accessStatus;
    if (t === ACCESS_STATUS.A) tierCounts.A += 1;
    else if (t === ACCESS_STATUS.B) tierCounts.B += 1;
    else if (String(t).startsWith("OFFICIAL_") && automatedAuditUsableForTier(t)) tierCounts.C += 1;
    else if (t === ACCESS_STATUS.D) tierCounts.D += 1;
    else tierCounts.E += 1;
  }

  const automatedCount = languageRows.filter((r) => r.automatedAuditUsable).length;
  let classification = "G2_A1_OFFICIAL_SOURCE_18_LANGUAGE_RESOLUTION_PARTIAL";
  let nextAction = "OWNER_REVIEW_REMAINING_EXACT_SOURCE_BLOCKERS";
  if (automatedCount === 18) {
    classification = "G2_A1_OFFICIAL_SOURCE_ACCESS_READY_32_OF_32";
    nextAction = "OWNER_REVIEW_AND_APPROVE_OFFICIAL_SOURCE_REGISTRY_UPDATES";
  }

  return {
    generatedAt: checkedAt,
    freshLiveProbeAt: checkedAt,
    schemaVersion: 1,
    scopeLanguages: RESOLUTION_LANGUAGES,
    ePriorityLanguages: E_PRIORITY,
    languageRows,
    ownerProposals,
    bundles,
    downloadableDatasets: downloadable,
    positiveNegativeTests: tests,
    summary: {
      investigated: languageRows.length,
      automatedReady: automatedCount,
      manualOrBlocked: 18 - automatedCount,
      tierCounts,
      startPartition: { abAutomated: 14, dManual: 14, eBlocked: 4 },
    },
    classification,
    nextAction,
    full95731AuditRan: false,
  };
}

function writeResolutionArtifacts(payload) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const write = (name, data) => {
    fs.writeFileSync(path.join(OUT_DIR, name), `${JSON.stringify(data, null, 2)}\n`);
  };
  write("official-source-18-language-resolution.json", payload);
  write("official-source-18-language-owner-proposals.json", {
    generatedAt: payload.generatedAt,
    proposals: payload.ownerProposals,
  });
  write("official-source-bundles.json", { generatedAt: payload.generatedAt, bundles: payload.bundles });
  write("official-downloadable-datasets.json", {
    generatedAt: payload.generatedAt,
    datasets: payload.downloadableDatasets,
  });
  write("official-source-positive-negative-tests.json", {
    generatedAt: payload.generatedAt,
    tests: payload.positiveNegativeTests,
  });

  const csvHeader =
    "language,currentMasterSourceUrl,currentBlocker,newOfficialSource,institution,sourceType,sourceUrl,positiveTest,negativeTest,automationMethod,recommendedMasterRole,OWNER_STATUS";
  const csvLines = payload.ownerProposals.map((p) =>
    [
      p.language,
      p.currentMasterSourceUrl,
      p.currentMasterBlocker,
      p.newOfficialSource,
      p.institution,
      p.sourceType,
      p.sourceUrl,
      p.positiveTestResult,
      p.negativeTestResult,
      p.automationMethod,
      p.recommendedMasterRole,
      p.OWNER_STATUS,
    ]
      .map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`)
      .join(","),
  );
  fs.writeFileSync(path.join(OUT_DIR, "official-source-18-language-owner-proposals.csv"), `${csvHeader}\n${csvLines.join("\n")}\n`);

  const md = [
    "# G2/A1 — Official source resolution (18 languages)",
    "",
    `Fresh live probe: **${payload.freshLiveProbeAt}**`,
    "",
    `Automated-ready (A/B/C*): **${payload.summary.automatedReady}/18**`,
    "",
    "## Languages",
    "",
    "| Lang | Tier | Auto | Probe | Entry | Blocker |",
    "|------|------|------|-------|-------|---------|",
    ...payload.languageRows.map(
      (r) =>
        `| ${r.language} | ${r.accessStatus} | ${r.automatedAuditUsable ? "yes" : "no"} | ${r.selectedProbeId} | ${String(r.positiveEntryUrl || "—").slice(0, 40)} | ${String(r.exactBlocker || "—").slice(0, 36)} |`,
    ),
    "",
    `Classification: **${payload.classification}**`,
    "",
    `Next: ${payload.nextAction}`,
  ].join("\n");
  fs.writeFileSync(path.join(OUT_DIR, "official-source-18-language-resolution.md"), md);

  fs.writeFileSync(
    path.join(OUT_DIR, "README.md"),
    [
      "# official-source-18-language-resolution",
      "",
      "Live-built artifacts for 18 TARGET languages (14 D + 4 E at task start).",
      "Rebuild: `npm run build:g2-a1:official-source-18-language-resolution`",
      "Verify: `npm run verify:g2-a1:official-source-18-language-resolution`",
      "",
      "MASTER registry is not modified here — see `official-source-18-language-owner-proposals.*`.",
    ].join("\n"),
  );
}

function buildVerificationPayload(payload) {
  const blockers = [];
  if (payload.languageRows.length !== 18) blockers.push({ code: "LANG_COUNT", got: payload.languageRows.length });
  for (const r of payload.languageRows) {
    if (!r.investigationComplete) blockers.push({ code: "NOT_INVESTIGATED", language: r.language });
    if (r.automatedAuditUsable) {
      if (!r.positiveEvidenceSha256) blockers.push({ code: "MISSING_SHA", language: r.language });
      if (!r.positiveMeaningEvidence || String(r.positiveMeaningEvidence).length < 25) {
        blockers.push({ code: "FRAGMENT_TOO_SHORT", language: r.language });
      }
      if (r.negativeOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) {
        blockers.push({ code: "NEGATIVE_FALSE_POSITIVE", language: r.language });
      }
    }
    if (r.masterRegistryChangeRequired && r.ownerApprovalStatus !== "OWNER_APPROVAL_REQUIRED") {
      blockers.push({ code: "MASTER_CHANGE_OWNER_STATUS", language: r.language });
    }
  }
  for (const p of payload.ownerProposals) {
    if (p.OWNER_STATUS !== "OWNER_APPROVAL_REQUIRED" && p.masterRegistryChangeRequired) {
      blockers.push({ code: "PROPOSAL_OWNER_STATUS", language: p.language });
    }
  }
  if (payload.full95731AuditRan) blockers.push({ code: "FULL_AUDIT_RAN" });
  return {
    generatedAt: new Date().toISOString(),
    pass: blockers.length === 0,
    blockers,
    freshLiveProbeAt: payload.freshLiveProbeAt,
    automatedReady: payload.summary.automatedReady,
    classification: payload.classification,
    nextAction: payload.nextAction,
  };
}

function writeVerificationJson(payload) {
  const verification = buildVerificationPayload(payload);
  fs.writeFileSync(
    path.join(OUT_DIR, "official-source-resolution-verification.json"),
    `${JSON.stringify(verification, null, 2)}\n`,
  );
  return verification;
}

module.exports = {
  OUT_DIR,
  buildOfficialSource18LanguageResolution,
  writeResolutionArtifacts,
  writeVerificationJson,
  rowToMatrixFields,
};
