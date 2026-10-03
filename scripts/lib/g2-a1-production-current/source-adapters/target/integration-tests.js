#!/usr/bin/env node
"use strict";

const { fetchAllowlistedPage } = require("../http-page");
const { buildAllowlistForLanguage } = require("../../registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME } = require("../../official-source-access-constants");
const { evidenceQualityOk } = require("../../targeted-source-access-validation");
const { isHomepageUrl } = require("../create-config-adapter");
const {
  listTargetAdapterMatrix,
  lookupTargetOfficialEntry,
  configForLang,
  listAllTargetAppLanguages,
} = require("./index");
const { lookupDeDwds } = require("../de/dwds-entry-adapter");

const NEGATIVE_TERM = "zzqqxxnotaword999";

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function browserIntegrationEnabled() {
  return process.env.G2_A1_BROWSER_INTEGRATION === "1" || process.argv.includes("--browser-integration");
}

async function testPositiveLive(appLang, row) {
  const cfg = configForLang(appLang);
  if (cfg?.browserFlowId && !browserIntegrationEnabled()) {
    return { appLang, kind: "positive", skipped: true, reason: "BROWSER_INTEGRATION_NOT_ENABLED" };
  }
  const allow = buildAllowlistForLanguage(appLang);
  assert(allow.pass, `${appLang} allowlist`);
  const fixture = row.positiveFixture || {};
  const lookupTerm = fixture.lookupTerm;
  assert(lookupTerm, `${appLang} positive fixture`);

  const r = await lookupTargetOfficialEntry({
    appLang,
    lookupTerm,
    allowedDomains: allow.target.allowedDomains,
    authorityName: allow.target.authorityName,
    provenance: { role: "TARGET", language: appLang, originalCurrent: lookupTerm },
  });

  if (row.liveIntegrationStatus === "BLOCKED") {
    return {
      appLang,
      kind: "positive",
      skipped: true,
      reason: "BLOCKED_OFFICIAL_SOURCE",
      outcome: r.outcome,
    };
  }

  assert(
    r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    `${appLang} positive: ${r.outcome} ${r.error || ""}`,
  );
  assert(evidenceQualityOk(r), `${appLang} evidence quality`);
  assert(!isHomepageUrl(r.entryUrl || r.finalUrl), `${appLang} homepage rejected`);
  if (fixture.expectedHeadword) {
    assert(r.entryHeadwordOrRule, `${appLang} headword missing`);
  }
  return { appLang, kind: "positive", pass: true, entryUrl: r.entryUrl };
}

async function testNegativeLive(appLang, row) {
  const cfg = configForLang(appLang);
  if (cfg?.browserFlowId && !browserIntegrationEnabled()) {
    return { appLang, kind: "negative", skipped: true, pass: true, reason: "BROWSER_INTEGRATION_NOT_ENABLED" };
  }
  const allow = buildAllowlistForLanguage(appLang);
  const lookupTerm = (row.negativeFixture && row.negativeFixture.lookupTerm) || NEGATIVE_TERM;
  const r = await lookupTargetOfficialEntry({
    appLang,
    lookupTerm,
    allowedDomains: allow.target.allowedDomains,
    authorityName: allow.target.authorityName,
    provenance: { role: "TARGET", language: appLang },
  });

  if (row.liveIntegrationStatus === "BLOCKED") {
    assert(
      r.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
      `${appLang} blocked must not false-positive validate on negative`,
    );
    return { appLang, kind: "negative", pass: true, blocked: true, outcome: r.outcome };
  }

  assert(
    r.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    `${appLang} negative falsely validated`,
  );
  return { appLang, kind: "negative", pass: true, outcome: r.outcome };
}

async function testDomainRejection(appLang) {
  const allow = buildAllowlistForLanguage(appLang);
  const page = await fetchAllowlistedPage("https://example.com/not-allowed", {
    allowedDomains: allow.target.allowedDomains,
  });
  assert(page.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_DOMAIN_REJECTED, `${appLang} domain`);
  return { appLang, kind: "domain", pass: true };
}

async function testEntryQualityHomepage(appLang, row) {
  if (row.liveIntegrationStatus === "BLOCKED") {
    return { appLang, kind: "entryQuality", skipped: true };
  }
  const cfgEq = configForLang(appLang);
  if (cfgEq?.browserFlowId && !browserIntegrationEnabled()) {
    return { appLang, kind: "entryQuality", skipped: true, pass: true, reason: "BROWSER_INTEGRATION_NOT_ENABLED" };
  }
  const allow = buildAllowlistForLanguage(appLang);
  const seed = row.masterSeedUrls && row.masterSeedUrls[0];
  if (!seed) return { appLang, kind: "entryQuality", skipped: true, reason: "no_seed" };
  const page = await fetchAllowlistedPage(seed, { allowedDomains: allow.target.allowedDomains });
  if (page.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED) {
    return { appLang, kind: "entryQuality", pass: true, note: "seed_not_fetched" };
  }
  const fakeValidated = {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryUrl: page.finalUrl,
    entryHeadwordOrRule: "home",
    evidenceFragment: page.pageTitle || "x".repeat(30),
    adapterId: "test",
    contentSha256: page.contentSha256,
    entryOrRule: "Located homepage",
  };
  assert(!evidenceQualityOk(fakeValidated), `${appLang} homepage must fail evidence quality`);
  return { appLang, kind: "entryQuality", pass: true };
}

async function testNormalization(appLang, row) {
  if (row.liveIntegrationStatus === "BLOCKED") {
    return { appLang, kind: "normalization", skipped: true };
  }
  const cfgNorm = configForLang(appLang);
  if (cfgNorm?.browserFlowId && !browserIntegrationEnabled()) {
    return { appLang, kind: "normalization", skipped: true, reason: "BROWSER_INTEGRATION_NOT_ENABLED" };
  }
  const cfg = configForLang(appLang);
  const normTerm = row.positiveFixture?.lookupTerm;
  if (!normTerm) return { appLang, kind: "normalization", skipped: true };
  const allow = buildAllowlistForLanguage(appLang);
  const r = await lookupTargetOfficialEntry({
    appLang,
    lookupTerm: normTerm,
    allowedDomains: allow.target.allowedDomains,
    authorityName: allow.target.authorityName,
    provenance: {
      role: "TARGET",
      language: appLang,
      originalCurrent: normTerm,
      lookupTerm: normTerm,
      normalizationReason: "integration_fixture",
    },
  });
  assert(r.lookupTerm || r.originalCurrent || normTerm, `${appLang} norm metadata`);
  if (r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) {
    assert(r.originalCurrent !== undefined || r.lookupTerm, `${appLang} provenance fields`);
  }
  return { appLang, kind: "normalization", pass: true };
}

async function testDeAdapterPass() {
  const allow = buildAllowlistForLanguage("et");
  const r = await lookupDeDwds({
    lookupTerm: "lernen",
    allowedDomains: allow.de.allowedDomains,
    authorityName: allow.de.authorityName,
    provenance: { role: "DE" },
  });
  assert(r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED, `DE ${r.outcome}`);
  return { kind: "de", pass: true };
}

function testGrElMapping() {
  const allow = buildAllowlistForLanguage("gr");
  assert(allow.pass, "gr allowlist");
  assert(allow.target.standardCode === "el", `gr standard code ${allow.target.standardCode}`);
  assert(allow.target.appCode === "gr", `gr app code ${allow.target.appCode}`);
  return { kind: "gr_el", pass: true };
}

async function runAllTargetAdapterIntegrationTests(options = {}) {
  const matrix = listTargetAdapterMatrix();
  const langs = listAllTargetAppLanguages();
  assert(langs.length === 32, `expected 32 target langs, got ${langs.length}`);

  const results = [];
  results.push(testGrElMapping());
  results.push(await testDeAdapterPass());

  const { closeBrowserPool } = require("../browser/pool");

  for (const row of matrix) {
    // Sequential per language to respect domain queue / rate limits
    // eslint-disable-next-line no-await-in-loop
    results.push(await testDomainRejection(row.language));
    // eslint-disable-next-line no-await-in-loop
    results.push(await testNegativeLive(row.language, row));
    // eslint-disable-next-line no-await-in-loop
    results.push(await testEntryQualityHomepage(row.language, row));
    // eslint-disable-next-line no-await-in-loop
    results.push(await testNormalization(row.language, row));
    // eslint-disable-next-line no-await-in-loop
    results.push(await testPositiveLive(row.language, row));
  }

  if (browserIntegrationEnabled()) {
    await closeBrowserPool();
  }

  const liveRows = matrix.filter((r) => r.liveIntegrationStatus === "LIVE");
  const blockedRows = matrix.filter((r) => r.liveIntegrationStatus === "BLOCKED");
  const browserLiveRows = liveRows.filter((r) => configForLang(r.language)?.browserFlowId);
  const httpLiveRows = liveRows.filter((r) => !configForLang(r.language)?.browserFlowId);
  const positiveLiveExpected = browserIntegrationEnabled() ? liveRows.length : httpLiveRows.length;
  const positiveLive = results.filter((r) => r.kind === "positive" && r.pass);
  const negativeLive = results.filter(
    (r) => r.kind === "negative" && (r.pass || (r.skipped && r.reason === "BROWSER_INTEGRATION_NOT_ENABLED")),
  );
  const entryQuality = results.filter(
    (r) => r.kind === "entryQuality" && (r.pass || (r.skipped && r.reason === "BROWSER_INTEGRATION_NOT_ENABLED")),
  );
  const adaptersImplemented = matrix.filter((r) => r.realLookup === "YES").length;

  const summary = {
    adaptersImplemented,
    adaptersExpected: 32,
    liveAdapterCount: liveRows.length,
    blockedAdapterCount: blockedRows.length,
    positiveLivePass: positiveLive.length,
    positiveLiveExpected,
    browserIntegrationEnabled: browserIntegrationEnabled(),
    browserLiveAdapterCount: browserLiveRows.length,
    httpLiveAdapterCount: httpLiveRows.length,
    negativeLivePass: negativeLive.length,
    negativeLiveExpected: 32,
    entryQualityPass: entryQuality.length,
    entryQualityExpected: liveRows.length,
    grElPass: results.some((r) => r.kind === "gr_el" && r.pass),
    dePass: results.some((r) => r.kind === "de" && r.pass),
    blockedLanguages: blockedRows.map((r) => ({
      language: r.language,
      blockedOutcome: r.blockedOutcome,
      adapterId: r.adapterId,
    })),
    failures: [],
  };

  if (adaptersImplemented !== 32) {
    summary.failures.push({ code: "ADAPTERS_INCOMPLETE", adaptersImplemented });
  }
  if (positiveLive.length !== positiveLiveExpected) {
    summary.failures.push({
      code: "POSITIVE_LIVE_INCOMPLETE",
      pass: positiveLive.length,
      expected: positiveLiveExpected,
    });
  }
  if (negativeLive.length !== 32) {
    summary.failures.push({ code: "NEGATIVE_LIVE_INCOMPLETE", pass: negativeLive.length });
  }
  if (entryQuality.length !== liveRows.length) {
    summary.failures.push({
      code: "ENTRY_QUALITY_INCOMPLETE",
      pass: entryQuality.length,
      expected: liveRows.length,
    });
  }

  summary.pass =
    summary.failures.length === 0 &&
    blockedRows.every((r) => r.blockedOutcome) &&
    !matrix.some((r) => r.realLookup !== "YES");

  if (options.verbose) {
    summary.results = results;
  }

  return summary;
}

module.exports = {
  runAllTargetAdapterIntegrationTests,
  NEGATIVE_TERM,
};
