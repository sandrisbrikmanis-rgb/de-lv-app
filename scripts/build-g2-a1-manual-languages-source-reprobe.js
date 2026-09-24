#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const { lookupTargetOfficialEntry, configForLang } = require("./lib/g2-a1-production-current/source-adapters/target");
const { buildAllowlistForLanguage } = require("./lib/g2-a1-production-current/registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME, SOURCE_ACCESS_METHOD } = require("./lib/g2-a1-production-current/official-source-access-constants");
const { evidenceQualityOk } = require("./lib/g2-a1-production-current/targeted-source-access-validation");
const { closeBrowserPool } = require("./lib/g2-a1-production-current/source-adapters/browser/pool");
const { HAUS_POSITIVE_LOOKUP } = require("./lib/g2-a1-production-current/haus-32-language-source-pilot");
const { NEGATIVE_TERM } = require("./lib/g2-a1-production-current/official-source-blocker-resolution");

const MANUAL_LANGS = ["fr", "hr", "is", "it", "lb", "lt", "nl", "pl", "pt", "ro", "sv", "bg", "uk"];

const PREVERIFIED = 15;

async function reprobeLanguage(appLang) {
  const allow = buildAllowlistForLanguage(appLang);
  const cfg = configForLang(appLang);
  const positiveTestTerm = HAUS_POSITIVE_LOOKUP[appLang] || cfg?.positiveFixture?.lookupTerm;
  const negativeTestTerm = NEGATIVE_TERM;

  const positive = await lookupTargetOfficialEntry({
    appLang,
    lookupTerm: positiveTestTerm,
    allowedDomains: allow.target.allowedDomains,
    authorityName: allow.target.authorityName,
    provenance: { role: "TARGET", language: appLang, originalCurrent: positiveTestTerm },
  });

  const negative = await lookupTargetOfficialEntry({
    appLang,
    lookupTerm: negativeTestTerm,
    allowedDomains: allow.target.allowedDomains,
    authorityName: allow.target.authorityName,
    provenance: { role: "TARGET", language: appLang },
  });

  const verified =
    positive.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED &&
    evidenceQualityOk(positive) &&
    negative.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED;

  return {
    language: appLang,
    adapterId: cfg?.adapterId,
    positiveTestTerm,
    negativeTestTerm,
    positiveOutcome: positive.outcome,
    negativeOutcome: negative.outcome,
    entryUrl: positive.entryUrl,
    error: positive.error,
    contentSha256: positive.contentSha256,
    accessMethod: positive.accessMethod || SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION,
    previousStatus: "MANUAL_OFFICIAL_EVIDENCE_REQUIRED",
    newResult: verified ? "ENTRY_ACCESS_VERIFIED" : "MANUAL_OFFICIAL_EVIDENCE_REQUIRED",
    entryVerified: verified,
    checkedAt: new Date().toISOString(),
  };
}

async function main() {
  const rows = [];
  for (const lang of MANUAL_LANGS) {
    // eslint-disable-next-line no-await-in-loop
    rows.push(await reprobeLanguage(lang));
  }
  await closeBrowserPool();

  const newlyVerified = rows.filter((r) => r.entryVerified).length;
  const payload = {
    generatedAt: new Date().toISOString(),
    scope: MANUAL_LANGS,
    previousEntryPathsVerified: PREVERIFIED,
    newlyVerifiedInReprobe: newlyVerified,
    entryPathsVerifiedAfter: PREVERIFIED + newlyVerified,
    rows,
  };

  writeJsonAtomic("official-source-manual-languages-reprobe.json", payload);
  fs.writeFileSync(
    path.join(ROOT, "reports/g2-a1-production-current/official-source-manual-languages-reprobe.md"),
    [
      "# Manual languages source reprobe (13)",
      "",
      `Entry paths: **${PREVERIFIED}** → **${payload.entryPathsVerifiedAfter}/32** (+${newlyVerified})`,
      "",
      ...rows.map(
        (r) =>
          `- **${r.language}**: ${r.previousStatus} → **${r.newResult}** (${r.positiveTestTerm}: ${r.positiveOutcome}${r.error ? `, ${r.error}` : ""})`,
      ),
    ].join("\n"),
  );

  console.log(JSON.stringify({ gate: "MANUAL_REPROBE", newlyVerified, entryPathsVerifiedAfter: payload.entryPathsVerifiedAfter }, null, 2));
}

main().catch(async (e) => {
  console.error(e);
  await closeBrowserPool().catch(() => {});
  process.exit(1);
});
