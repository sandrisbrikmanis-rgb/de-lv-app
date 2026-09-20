#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const { listTargetAdapterMatrix } = require("./lib/g2-a1-production-current/source-adapters/target");
const {
  loadStructuredLanguageAuthoritySources,
  allUrlsForLanguage,
  rowByAppCode,
} = require("./lib/master-language-authority-sources-33");
const { fetchAllowlistedPage, htmlToPlainText } = require("./lib/g2-a1-production-current/source-adapters/http-page");
const { lookupTargetOfficialEntry } = require("./lib/g2-a1-production-current/source-adapters/target");
const { buildAllowlistForLanguage } = require("./lib/g2-a1-production-current/registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");

const OWNER_OPTIONS = [
  "A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS",
  "B. MANUAL_OFFICIAL_SOURCE_EVIDENCE_REQUIRED",
  "C. NEEDS_SOURCE_REVIEW",
  "D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE",
];

async function probeUrl(url, allowedDomains) {
  const page = await fetchAllowlistedPage(url, { allowedDomains, timeoutMs: 15000 });
  return {
    url,
    outcome: page.outcome,
    httpStatus: page.httpStatus,
    finalUrl: page.finalUrl,
    htmlLen: page.html?.length || 0,
    preview: page.html ? htmlToPlainText(page.html).slice(0, 120) : "",
  };
}

async function buildBlockerRow(appLang, matrixRow, structuredRow) {
  const allow = buildAllowlistForLanguage(appLang);
  const urls = structuredRow ? allUrlsForLanguage(structuredRow) : [];
  const sourceProbes = [];
  for (const u of urls.slice(0, 8)) {
    // eslint-disable-next-line no-await-in-loop
    sourceProbes.push(await probeUrl(u, allow.target.allowedDomains));
  }

  let adapterOutcome = null;
  if (matrixRow.liveIntegrationStatus === "LIVE") {
    const fixture = matrixRow.positiveFixture?.lookupTerm;
    if (fixture && fixture !== "fixture-not-applicable") {
      // eslint-disable-next-line no-await-in-loop
      const r = await lookupTargetOfficialEntry({
        appLang,
        lookupTerm: fixture,
        allowedDomains: allow.target.allowedDomains,
        authorityName: allow.target.authorityName,
        provenance: { role: "TARGET", language: appLang },
      });
      adapterOutcome = r.outcome;
    }
  }

  const recommended =
    matrixRow.liveIntegrationStatus === "LIVE" && adapterOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED
      ? null
      : matrixRow.blockedOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED
        ? OWNER_OPTIONS[0]
        : matrixRow.blockedOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED
          ? OWNER_OPTIONS[0]
          : OWNER_OPTIONS[1];

  return {
    language: appLang,
    standardCode: matrixRow.standardCode,
    masterSourcesChecked: {
      norm: structuredRow?.LANGUAGE_NORM_AUTHORITY,
      normUrls: structuredRow?.LANGUAGE_NORM_URLS,
      primaryDictionary: structuredRow?.PRIMARY_DICTIONARY_AUTHORITY,
      primaryDictionaryUrls: structuredRow?.PRIMARY_DICTIONARY_URLS,
      additional: structuredRow?.ADDITIONAL_AUTHORITY,
      additionalUrls: structuredRow?.ADDITIONAL_AUTHORITY_URLS,
    },
    sourceProbeResults: sourceProbes,
    adapterId: matrixRow.adapterId,
    adapterIntegrationStatus: matrixRow.liveIntegrationStatus,
    adapterBlockedOutcome: matrixRow.blockedOutcome,
    positiveFixtureOutcome: adapterOutcome,
    browserManualAccessLikely: sourceProbes.some((p) => p.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED),
    authenticationLikely: matrixRow.blockedOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED,
    paidSource: false,
    officialApiDocumented: appLang === "lv",
    ownerProvidedAccessNeeded:
      matrixRow.blockedOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED ||
      matrixRow.blockedOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
    recommendedOwnerChoice: recommended,
    allowedOwnerChoices: OWNER_OPTIONS,
    technicalSummary: matrixRow.knownLimitations?.[0] || matrixRow.blockedOutcome || matrixRow.entryValidation,
  };
}

async function main() {
  const structured = loadStructuredLanguageAuthoritySources();
  const matrix = listTargetAdapterMatrix();
  const blocked = matrix.filter((r) => r.liveIntegrationStatus === "BLOCKED");

  const rows = [];
  for (const m of blocked) {
    const s = structured.pass ? rowByAppCode(structured.languages, m.language) : null;
    // eslint-disable-next-line no-await-in-loop
    rows.push(await buildBlockerRow(m.language, m, s));
  }

  const stillBlocked = blocked.length;
  const liveCount = matrix.filter((r) => r.liveIntegrationStatus === "LIVE").length;

  const payload = {
    generatedAt: new Date().toISOString(),
    ownerDecision: "USE_ALL_MASTER_AUTHORIZED_PRIMARY_DICTIONARY_AND_ADDITIONAL_AUTHORITY_SOURCES",
    targetLanguages: 32,
    liveAdapters: liveCount,
    blockedAdapters: stillBlocked,
    blockers: rows,
    classification:
      stillBlocked === 0
        ? "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_READY"
        : "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_BLOCKED_AFTER_FULL_REGISTRY_RECONCILIATION",
    nextAction:
      stillBlocked === 0
        ? "OWNER_MAY_AUTHORIZE_FULL_TARGETED_FIELD_LEVEL_AUDIT_RESUME"
        : "OWNER_DECISION_REQUIRED_FOR_REMAINING_EXACT_BLOCKERS",
  };

  writeJsonAtomic("official-source-exact-blockers-owner-decision.json", payload);

  const mdLines = [
    "# G2/A1 — Official source exact blockers (OWNER decision)",
    "",
    `Classification: **${payload.classification}**`,
    "",
    `Live adapters: **${liveCount}/32** | Blocked: **${stillBlocked}/32**`,
    "",
    "## Remaining blockers",
    "",
  ];

  for (const b of rows) {
    mdLines.push(`### ${b.language} (\`${b.adapterId}\`)`);
    mdLines.push("");
    mdLines.push(`- **Technical:** ${b.technicalSummary}`);
    mdLines.push(`- **Recommended OWNER choice:** ${b.recommendedOwnerChoice || "N/A (resolved if live)"}`);
    mdLines.push(`- **Choices:** ${OWNER_OPTIONS.join(" | ")}`);
    mdLines.push("");
    mdLines.push("**MASTER sources probed:**");
    for (const p of b.sourceProbeResults) {
      mdLines.push(`- \`${p.url}\` → ${p.outcome} (HTTP ${p.httpStatus ?? "n/a"}, ${p.htmlLen} B)`);
    }
    mdLines.push("");
  }

  const mdPath = path.join(ROOT, "reports/g2-a1-production-current/official-source-exact-blockers-owner-decision.md");
  fs.writeFileSync(mdPath, mdLines.join("\n"));

  console.log(JSON.stringify({ liveCount, stillBlocked, classification: payload.classification }, null, 2));
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
