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

function loadBrowserPilots() {
  const p = path.join(ROOT, "reports/g2-a1-production-current/official-source-browser-adapter-pilots.json");
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function pilotForLang(pilotsPayload, appLang) {
  return pilotsPayload?.pilots?.find((x) => x.language === appLang) || null;
}

async function buildBlockerRow(appLang, matrixRow, structuredRow, pilotsPayload) {
  const allow = buildAllowlistForLanguage(appLang);
  const urls = structuredRow ? allUrlsForLanguage(structuredRow) : [];
  const sourceProbes = [];
  for (const u of urls.slice(0, 8)) {
    // eslint-disable-next-line no-await-in-loop
    sourceProbes.push(await probeUrl(u, allow.target.allowedDomains));
  }

  const browserPilot = pilotForLang(pilotsPayload, appLang);
  let adapterOutcome = matrixRow.blockedOutcome || null;
  let browserPilotDetail = null;

  if (browserPilot?.positive?.outcome) {
    adapterOutcome = browserPilot.positive.outcome;
    browserPilotDetail = browserPilot.positive;
  } else if (matrixRow.liveIntegrationStatus === "LIVE" && matrixRow.adapterType !== "PUBLIC_BROWSER_SESSION") {
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
  } else if (matrixRow.liveIntegrationStatus === "LIVE" && browserPilot?.positive?.skipped) {
    adapterOutcome = null;
  }

  const validated = adapterOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED;
  const captchaLikely =
    browserPilotDetail?.error === "CAPTCHA_OR_BOT_CHALLENGE" ||
    /CAPTCHA|BOT_CHALLENGE|cloudflare/i.test(String(browserPilotDetail?.error || ""));

  const recommended = validated
    ? null
    : matrixRow.liveIntegrationStatus === "BLOCKED"
      ? "D. OWNER_AUTHORIZES_MASTER_SOURCE_REGISTRY_CHANGE"
      : captchaLikely
        ? "A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS"
        : matrixRow.blockedOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED
          ? OWNER_OPTIONS[0]
          : matrixRow.blockedOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED
            ? OWNER_OPTIONS[0]
            : "A. OWNER_PROVIDES_OFFICIAL_SOURCE_ACCESS";

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
    browserPilot: browserPilotDetail,
    accessMethod: browserPilot?.accessMethod || null,
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
  const pilotsPayload = loadBrowserPilots();
  const httpValidated = new Set(["en", "cs", "sl", "tr", "gr", "es", "lv", "et"]);

  const needsBlockerRow = matrix.filter((m) => {
    if (m.liveIntegrationStatus === "BLOCKED") return true;
    const pilot = pilotForLang(pilotsPayload, m.language);
    if (pilot?.positive?.pass === false) return true;
    if (pilot?.positive?.pass === true) return false;
    return !httpValidated.has(m.language);
  });

  const rows = [];
  for (const m of needsBlockerRow) {
    const s = structured.pass ? rowByAppCode(structured.languages, m.language) : null;
    // eslint-disable-next-line no-await-in-loop
    rows.push(await buildBlockerRow(m.language, m, s, pilotsPayload));
  }

  const registryBlocked = matrix.filter((r) => r.liveIntegrationStatus === "BLOCKED").length;
  const resolutionPath = path.join(ROOT, "reports/g2-a1-production-current/official-source-exact-blockers-resolution.json");
  let resolutionPayload = null;
  if (fs.existsSync(resolutionPath)) {
    resolutionPayload = JSON.parse(fs.readFileSync(resolutionPath, "utf8"));
  }
  const entryPathValidatedCount =
    resolutionPayload?.totalEntryPathsVerified ??
    (pilotsPayload ? pilotsPayload.positivePilotPass : 0) + httpValidated.size;
  const liveCount = matrix.filter((r) => r.liveIntegrationStatus === "LIVE").length;

  const payload = {
    generatedAt: new Date().toISOString(),
    ownerDecision: "PUBLIC_BROWSER_SESSION_AUTHORIZED_FOR_LISTED_OFFICIAL_DOMAINS",
    targetLanguages: 32,
    liveAdapters: liveCount,
    registryBlockedAdapters: registryBlocked,
    entryPathsValidatedEstimate: Math.min(32, entryPathValidatedCount),
    remainingBlockerRows: rows.length,
    browserPilotSummary: pilotsPayload
      ? {
          positivePilotPass: pilotsPayload.positivePilotPass,
          browserAdapterCount: pilotsPayload.browserAdapterCount,
        }
      : null,
    blockers: rows,
    classification:
      entryPathValidatedCount >= 32
        ? "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_READY"
        : pilotsPayload
          ? "G2_A1_OFFICIAL_SOURCE_BROWSER_ACCESS_PARTIALLY_BLOCKED"
          : "G2_A1_OFFICIAL_SOURCE_ENTRY_VALIDATION_BLOCKED_AFTER_FULL_REGISTRY_RECONCILIATION",
    nextAction:
      entryPathValidatedCount >= 32
        ? "OWNER_MAY_AUTHORIZE_FULL_TARGETED_FIELD_LEVEL_AUDIT_RESUME"
        : "OWNER_DECISION_REQUIRED_FOR_REMAINING_SPECIFIC_AUTHORITIES",
  };

  writeJsonAtomic("official-source-exact-blockers-owner-decision.json", payload);

  const mdLines = [
    "# G2/A1 — Official source exact blockers (OWNER decision)",
    "",
    `Classification: **${payload.classification}**`,
    "",
    `Live adapters (implemented): **${liveCount}/32** | Registry-blocked: **${registryBlocked}/32** | Entry paths validated (est.): **${payload.entryPathsValidatedEstimate}/32**`,
    "",
    "## Remaining blockers",
    "",
  ];

  for (const b of rows) {
    mdLines.push(`### ${b.language} (\`${b.adapterId}\`)`);
    mdLines.push("");
    mdLines.push(`- **Technical:** ${b.technicalSummary}`);
    mdLines.push(`- **Positive fixture outcome:** ${b.positiveFixtureOutcome || "n/a"}`);
    if (b.browserPilot) {
      mdLines.push(`- **Browser pilot:** ${b.browserPilot.error || b.browserPilot.outcome} ${b.browserPilot.entryUrl ? `\`${b.browserPilot.entryUrl}\`` : ""}`);
    }
    mdLines.push(`- **Recommended OWNER choice:** ${b.recommendedOwnerChoice || "N/A (entry path validated)"}`);
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

  console.log(
    JSON.stringify(
      {
        liveCount,
        registryBlocked,
        entryPathsValidatedEstimate: payload.entryPathsValidatedEstimate,
        blockerRows: rows.length,
        classification: payload.classification,
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
