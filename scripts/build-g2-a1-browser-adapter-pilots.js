#!/usr/bin/env node
"use strict";

const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const { listTargetAdapterMatrix, lookupTargetOfficialEntry, configForLang } = require("./lib/g2-a1-production-current/source-adapters/target");
const { buildAllowlistForLanguage } = require("./lib/g2-a1-production-current/registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME, SOURCE_ACCESS_METHOD } = require("./lib/g2-a1-production-current/official-source-access-constants");
const { closeBrowserPool } = require("./lib/g2-a1-production-current/source-adapters/browser/pool");
const { NEGATIVE_TERM } = require("./lib/g2-a1-production-current/source-adapters/target/integration-tests");

const NEGATIVE = NEGATIVE_TERM;

async function runPilotForLanguage(row) {
  const cfg = configForLang(row.language);
  const allow = buildAllowlistForLanguage(row.language);
  const base = {
    language: row.language,
    adapterId: row.adapterId,
    browserFlowId: cfg?.browserFlowId || null,
    accessMethod: cfg?.browserFlowId ? SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION : SOURCE_ACCESS_METHOD.HTTP_FETCH,
  };

  if (row.liveIntegrationStatus === "BLOCKED") {
    return {
      ...base,
      positive: { skipped: true, reason: "BLOCKED_OFFICIAL_SOURCE", outcome: row.blockedOutcome },
      negative: { pass: true, outcome: "blocked_negative_only" },
    };
  }

  if (cfg?.browserFlowId) {
    const positiveTerm = row.positiveFixture?.lookupTerm;
    const negativeTerm = row.negativeFixture?.lookupTerm || NEGATIVE;
    const pos = await lookupTargetOfficialEntry({
      appLang: row.language,
      lookupTerm: positiveTerm,
      allowedDomains: allow.target.allowedDomains,
      authorityName: allow.target.authorityName,
      provenance: { role: "TARGET", language: row.language, originalCurrent: positiveTerm },
    });
    const neg = await lookupTargetOfficialEntry({
      appLang: row.language,
      lookupTerm: negativeTerm,
      allowedDomains: allow.target.allowedDomains,
      authorityName: allow.target.authorityName,
      provenance: { role: "TARGET", language: row.language },
    });
    return {
      ...base,
      positive: {
        lookupTerm: positiveTerm,
        outcome: pos.outcome,
        entryUrl: pos.entryUrl || pos.finalUrl,
        error: pos.error,
        accessMethod: pos.accessMethod,
        contentSha256: pos.contentSha256,
        pass: pos.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
      },
      negative: {
        lookupTerm: negativeTerm,
        outcome: neg.outcome,
        pass: neg.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
      },
    };
  }

  return {
    ...base,
    positive: { skipped: true, reason: "HTTP_ADAPTER_USE_INTEGRATION_SUITE" },
    negative: { skipped: true, reason: "HTTP_ADAPTER_USE_INTEGRATION_SUITE" },
  };
}

async function main() {
  const matrix = listTargetAdapterMatrix();
  const browserRows = matrix.filter((r) => configForLang(r.language)?.browserFlowId);
  const pilots = [];

  for (const row of browserRows) {
    // eslint-disable-next-line no-await-in-loop
    pilots.push(await runPilotForLanguage(row));
  }

  await closeBrowserPool();

  const positivePass = pilots.filter((p) => p.positive?.pass).length;
  const negativePass = pilots.filter((p) => p.negative?.pass).length;
  const payload = {
    generatedAt: new Date().toISOString(),
    ownerBrowserDecision: "PUBLIC_BROWSER_SESSION_AUTHORIZED_NO_BYPASS",
    browserAdapterCount: browserRows.length,
    positivePilotPass: positivePass,
    negativePilotPass: negativePass,
    mandatoryNotes: [
      "NB and NN pilots are separate flows (bm vs nn).",
      "Negative pilot must not SOURCE_ENTRY_VALIDATED on nonsense term.",
      "Homepage-only or substring-only evidence counts as pilot fail.",
    ],
    pilots,
    classification:
      positivePass === browserRows.length
        ? "G2_A1_BROWSER_ADAPTER_PILOTS_ALL_POSITIVE"
        : "G2_A1_BROWSER_ADAPTER_PILOTS_PARTIALLY_BLOCKED",
  };

  writeJsonAtomic("official-source-browser-adapter-pilots.json", payload);
  console.log(
    JSON.stringify(
      {
        gate: "BROWSER_ADAPTER_PILOTS",
        positivePass,
        browserAdapterCount: browserRows.length,
        negativePass,
        classification: payload.classification,
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

main().catch(async (e) => {
  console.error(e);
  await closeBrowserPool().catch(() => {});
  process.exit(1);
});
