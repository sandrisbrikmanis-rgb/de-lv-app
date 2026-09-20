#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { evidenceQualityOk } = require("./targeted-source-access-validation");
const { isHomepageUrl } = require("./source-adapters/create-config-adapter");
const {
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
const { closeBrowserPool } = require("./source-adapters/browser/pool");

const NEGATIVE_TERM = "zzqqxxnotaword999";

const ENTRY_ACCESS_VERIFIED = "ENTRY_ACCESS_VERIFIED";
const MANUAL_OFFICIAL_EVIDENCE_REQUIRED = "MANUAL_OFFICIAL_EVIDENCE_REQUIRED";
const MASTER_SOURCE_CHANGE_REQUIRED = "MASTER_SOURCE_CHANGE_REQUIRED";

/** HTTP + browser pilots already validated before this 18-lang resolution pass. */
const PREVERIFIED_APP_CODES = new Set([
  "en",
  "cs",
  "sl",
  "tr",
  "gr",
  "es",
  "lv",
  "et",
  "da",
  "sk",
  "nb",
  "nn",
  "fi",
  "ru",
]);

const RESULT_GROUPS = [
  ENTRY_ACCESS_VERIFIED,
  MANUAL_OFFICIAL_EVIDENCE_REQUIRED,
  MASTER_SOURCE_CHANGE_REQUIRED,
];

function loadBlockerInventory() {
  const p = path.join(ROOT, "reports/g2-a1-production-current/official-source-exact-blockers-owner-decision.json");
  if (!fs.existsSync(p)) throw new Error("MISSING_BLOCKER_INVENTORY");
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  const langs = data.blockers.map((b) => b.language);
  return { data, langs };
}

function verifyInventoryConsistency(blockerLangs, matrix) {
  const targetRows = matrix.filter((r) => r.language !== "de");
  if (targetRows.length !== 32) {
    return { pass: false, code: "BLOCKER_INVENTORY_MISMATCH", reason: `targetRows=${targetRows.length}` };
  }
  const unique = new Set(blockerLangs);
  if (unique.size !== blockerLangs.length) {
    return { pass: false, code: "BLOCKER_INVENTORY_MISMATCH", reason: "duplicate blocker languages" };
  }
  if (blockerLangs.length !== 18) {
    return { pass: false, code: "BLOCKER_INVENTORY_MISMATCH", reason: `blockerCount=${blockerLangs.length}` };
  }
  for (const code of blockerLangs) {
    if (PREVERIFIED_APP_CODES.has(code)) {
      return { pass: false, code: "BLOCKER_INVENTORY_MISMATCH", reason: `${code} listed as blocker but pre-verified` };
    }
  }
  const covered = new Set([...PREVERIFIED_APP_CODES, ...blockerLangs]);
  if (covered.size !== 32) {
    return { pass: false, code: "BLOCKER_INVENTORY_MISMATCH", reason: "32 languages not fully partitioned" };
  }
  const gr = matrix.find((r) => r.language === "gr");
  if (!gr || gr.standardCode !== "el") {
    return { pass: false, code: "BLOCKER_INVENTORY_MISMATCH", reason: "gr/el mapping" };
  }
  const entryValidatedStart = PREVERIFIED_APP_CODES.size;
  if (entryValidatedStart !== 14) {
    return { pass: false, code: "BLOCKER_INVENTORY_MISMATCH", reason: `preverified=${entryValidatedStart}` };
  }
  return {
    pass: true,
    entryAccessVerifiedAtStart: 14,
    remainingBlockersAtStart: 18,
    targetLanguageCount: 32,
  };
}

function pickMasterSourceUrl(masterRow) {
  if (!masterRow) return null;
  const urls = allUrlsForLanguage(masterRow);
  return urls[0] || null;
}

function sourceRoleForUrl(masterRow, url) {
  if (!masterRow || !url) return "unknown";
  if (masterRow.PRIMARY_DICTIONARY_URLS?.includes(url)) return "PRIMARY_DICTIONARY";
  if (masterRow.LANGUAGE_NORM_URLS?.includes(url)) return "LANGUAGE_NORM";
  if (masterRow.ADDITIONAL_AUTHORITY_URLS?.includes(url)) return "ADDITIONAL_AUTHORITY";
  return "MASTER_REGISTERED";
}

function classifyLanguage(appLang, masterRow, positive, negative) {
  const negOk = negative.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED;
  const posOk =
    positive.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED &&
    evidenceQualityOk(positive) &&
    positive.entryUrl &&
    !isHomepageUrl(positive.entryUrl);

  if (posOk && negOk) {
    return { result: ENTRY_ACCESS_VERIFIED, technicalBlocker: null, ownerActionRequired: false };
  }

  const err = String(positive.error || positive.outcome || "");
  if (/CAPTCHA|BOT_CHALLENGE|AUTHENTICATION/i.test(err)) {
    return {
      result: MANUAL_OFFICIAL_EVIDENCE_REQUIRED,
      technicalBlocker: err,
      ownerActionRequired: true,
    };
  }

  if (appLang === "bs" || appLang === "sq") {
    return {
      result: MASTER_SOURCE_CHANGE_REQUIRED,
      technicalBlocker: "MASTER lacks PRIMARY_DICTIONARY entry URL for automated or manual entry chain",
      ownerActionRequired: true,
    };
  }

  if (appLang === "sr") {
    return {
      result: MASTER_SOURCE_CHANGE_REQUIRED,
      technicalBlocker:
        "MASTER lists maticasrpska.org.rs without verified public lemma→entry URL; ISJ site has no validated entry deep-link",
      ownerActionRequired: true,
    };
  }

  if (appLang === "mk") {
    return {
      result: MASTER_SOURCE_CHANGE_REQUIRED,
      technicalBlocker: String(positive.error || positive.outcome || "drmj.eu unreachable from public session"),
      ownerActionRequired: true,
    };
  }

  if (appLang === "hu" && /nincs találat|entry_not_found/i.test(err)) {
    return {
      result: MANUAL_OFFICIAL_EVIDENCE_REQUIRED,
      technicalBlocker:
        "Akadémiai Nagyszótár partial coverage — use helyesiras.mta.hu or alternate MASTER additional authority for spelling; dictionary lemma may be absent",
      ownerActionRequired: true,
    };
  }

  return {
    result: MANUAL_OFFICIAL_EVIDENCE_REQUIRED,
    technicalBlocker: err || "SPA_or_parse_automation_blocked",
    ownerActionRequired: true,
  };
}

function manualInstructionFor(row) {
  const lines = [
    `- **Site:** ${row.sourceUrl || "see MASTER"}`,
    `- **Search:** open official search; enter \`${row.positiveTestTerm}\` (positive) — never treat as PASS unless entry page opens.`,
    `- **Entry:** open the lemma/article page (not homepage); save final URL.`,
    `- **Capture:** headword, definition/norm fragment (≥25 chars), \`accessedAt\`, screenshot or PDF.`,
    `- **Negative check:** \`${row.negativeTestTerm}\` must return not-found (no validated entry).`,
  ];
  if (row.technicalBlocker) lines.push(`- **Known blocker:** ${row.technicalBlocker}`);
  return lines.join("\n");
}

async function resolveOneLanguage(appLang, structured) {
  const matrixRow = listTargetAdapterMatrix().find((r) => r.language === appLang);
  const cfg = configForLang(appLang);
  const masterRow = structured.pass ? rowByAppCode(structured.languages, appLang) : null;
  const allow = buildAllowlistForLanguage(appLang);
  const blockedAdapter = matrixRow?.liveIntegrationStatus === "BLOCKED";
  const positiveTestTerm =
    matrixRow?.positiveFixture?.lookupTerm && matrixRow.positiveFixture.lookupTerm !== "fixture-not-applicable"
      ? matrixRow.positiveFixture.lookupTerm
      : blockedAdapter
        ? "n/a-blocked-adapter"
        : "maison";
  const negativeTestTerm = NEGATIVE_TERM;

  const sourceUrl = pickMasterSourceUrl(masterRow);
  const provenance = { role: "TARGET", language: appLang, originalCurrent: positiveTestTerm };

  let positive;
  let negative;
  if (blockedAdapter) {
    positive = {
      outcome: matrixRow.blockedOutcome || SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
      error: matrixRow.knownLimitations?.[0] || matrixRow.blockedOutcome,
      entryUrl: null,
      entryHeadwordOrRule: null,
      evidenceFragment: null,
      contentSha256: null,
      accessMethod: null,
    };
    negative = {
      outcome: matrixRow.blockedOutcome || SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    };
  } else {
    positive = await lookupTargetOfficialEntry({
      appLang,
      lookupTerm: positiveTestTerm,
      allowedDomains: allow.target.allowedDomains,
      authorityName: allow.target.authorityName,
      provenance,
    });

    negative = await lookupTargetOfficialEntry({
      appLang,
      lookupTerm: negativeTestTerm,
      allowedDomains: allow.target.allowedDomains,
      authorityName: allow.target.authorityName,
      provenance: { role: "TARGET", language: appLang },
    });
  }

  const { result, technicalBlocker, ownerActionRequired } = classifyLanguage(
    appLang,
    masterRow,
    positive,
    negative,
  );

  return {
    language: appLang,
    appCode: appLang,
    masterCode: matrixRow?.standardCode || masterRow?.standardCode,
    authorityName: allow.target.authorityName,
    sourceRole: sourceRoleForUrl(masterRow, sourceUrl),
    sourceUrl,
    adapterId: matrixRow?.adapterId || cfg?.adapterId,
    positiveTestTerm,
    negativeTestTerm,
    positiveOutcome: positive.outcome,
    negativeOutcome: negative.outcome,
    entryUrl: positive.entryUrl || positive.finalUrl || null,
    headword: positive.entryHeadwordOrRule || null,
    evidenceFragment: positive.evidenceFragment || null,
    contentSha256: positive.contentSha256 || null,
    accessMethod: positive.accessMethod || null,
    technicalBlocker,
    result,
    ownerActionRequired,
    checkedAt: new Date().toISOString(),
  };
}

async function runOfficialSourceBlockerResolution(options = {}) {
  const matrix = listTargetAdapterMatrix();
  const { langs } = loadBlockerInventory();
  const inventory = verifyInventoryConsistency(langs, matrix);
  if (!inventory.pass) {
    return { pass: false, code: inventory.code, reason: inventory.reason, inventory };
  }

  const structured = loadStructuredLanguageAuthoritySources();
  const resolutions = [];

  for (const appLang of langs) {
    if (!options.dryRun) {
      // eslint-disable-next-line no-await-in-loop
      resolutions.push(await resolveOneLanguage(appLang, structured));
    }
  }

  if (!options.dryRun) {
    await closeBrowserPool();
  }

  const counts = {
    ENTRY_ACCESS_VERIFIED: 0,
    MANUAL_OFFICIAL_EVIDENCE_REQUIRED: 0,
    MASTER_SOURCE_CHANGE_REQUIRED: 0,
  };
  for (const r of resolutions) {
    counts[r.result] += 1;
  }

  const newlyVerified = counts.ENTRY_ACCESS_VERIFIED;
  const totalEntryPaths = PREVERIFIED_APP_CODES.size + newlyVerified;

  return {
    pass: resolutions.length === 18,
    inventory,
    totalBlockedAtStart: 18,
    resolutions,
    counts,
    totalEntryPathsVerified: totalEntryPaths,
    classification:
      resolutions.length === 18 &&
      counts.ENTRY_ACCESS_VERIFIED + counts.MANUAL_OFFICIAL_EVIDENCE_REQUIRED + counts.MASTER_SOURCE_CHANGE_REQUIRED ===
        18
        ? "G2_A1_OFFICIAL_SOURCE_BLOCKERS_INDIVIDUALLY_RESOLVED_AWAITING_OWNER_ACTION"
        : "G2_A1_OFFICIAL_SOURCE_BLOCKER_RESOLUTION_INCOMPLETE",
    nextAction:
      resolutions.length === 18
        ? "OWNER_REVIEW_MANUAL_EVIDENCE_AND_MASTER_SOURCE_CHANGE_PROPOSALS"
        : "RESOLVE_EXACT_REMAINING_SOURCE_ACCESS_BLOCKERS",
    manualInstructionFor,
    RESULT_GROUPS,
  };
}

module.exports = {
  runOfficialSourceBlockerResolution,
  verifyInventoryConsistency,
  loadBlockerInventory,
  PREVERIFIED_APP_CODES,
  NEGATIVE_TERM,
  ENTRY_ACCESS_VERIFIED,
  MANUAL_OFFICIAL_EVIDENCE_REQUIRED,
  MASTER_SOURCE_CHANGE_REQUIRED,
};
