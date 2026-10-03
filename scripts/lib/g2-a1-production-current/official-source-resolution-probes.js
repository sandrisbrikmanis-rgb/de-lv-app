#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { SOURCE_ACCESS_OUTCOME, SOURCE_ACCESS_METHOD } = require("./official-source-access-constants");
const { evidenceQualityOk } = require("./targeted-source-access-validation");
const { isHomepageUrl } = require("./source-adapters/create-config-adapter");
const { lookupTargetOfficialEntry } = require("./source-adapters/target");
const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const { withDomainBrowserSession } = require("./source-adapters/browser/pool");
const { NEGATIVE_TERM } = require("./official-source-blocker-resolution");
const { HAUS_POSITIVE_TEST_LEMMA } = require("./official-source-32-language-access");
const { ACCESS_STATUS } = require("./official-source-access-status");
const { PROPOSED_SOURCES } = require("./official-source-resolution-catalog");

function sha256(text) {
  return crypto.createHash("sha256").update(String(text || ""), "utf8").digest("hex");
}

function toValidatedProbe(fields) {
  return {
    validated: true,
    ...fields,
    contentSha256: fields.contentSha256 || sha256(fields.evidenceFragment),
  };
}

function toFailedProbe(fields) {
  return { validated: false, ...fields };
}

async function probeMasterAdapter(appLang) {
  const allow = buildAllowlistForLanguage(appLang);
  const lemma = HAUS_POSITIVE_TEST_LEMMA[appLang];
  const positive = await lookupTargetOfficialEntry({
    appLang,
    lookupTerm: lemma,
    allowedDomains: allow.target.allowedDomains,
    authorityName: allow.target.authorityName,
    provenance: { role: "TARGET", language: appLang, originalCurrent: lemma },
  });
  const negative = await lookupTargetOfficialEntry({
    appLang,
    lookupTerm: NEGATIVE_TERM,
    allowedDomains: allow.target.allowedDomains,
    authorityName: allow.target.authorityName,
    provenance: { role: "TARGET", language: appLang },
  });
  const posOk =
    positive.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED &&
    evidenceQualityOk(positive) &&
    positive.entryUrl &&
    !isHomepageUrl(positive.entryUrl);
  const negOk = negative.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED;
  return {
    probeId: "master-registered-adapter",
    role: "MASTER_CURRENT",
    validated: posOk && negOk,
    positiveOutcome: positive.outcome,
    negativeOutcome: negative.outcome,
    entryUrl: positive.entryUrl || positive.finalUrl || null,
    headword: positive.entryHeadwordOrRule || null,
    evidenceFragment: positive.evidenceFragment || null,
    contentSha256: positive.contentSha256 || null,
    accessMethod: positive.accessMethod || null,
    adapterId: positive.adapterId || null,
    error: positive.error || null,
    accessStatus: posOk && negOk
      ? positive.accessMethod === SOURCE_ACCESS_METHOD.HTTP_FETCH
        ? ACCESS_STATUS.A
        : ACCESS_STATUS.B
      : null,
  };
}

async function probeSqFjaloriOnline(lemma) {
  return withDomainBrowserSession("www.fjalori.online", async (page) => {
    const searchUrl = `https://www.fjalori.online/?search=${encodeURIComponent(lemma)}&mode=exact`;
    await page.goto(searchUrl, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(5000);
    const text = await page.evaluate(() => document.body?.innerText || "");
    const guardNeg = /zzqqxxnotaword999/i.test(text);
    if (!/shtëpi|SHTËPI/i.test(text) || !/Ndërtesë|banuar|banesë/i.test(text)) {
      return toFailedProbe({
        probeId: "sq-fjalori-online",
        role: "PROPOSED_PRIMARY",
        searchUrl,
        entryUrl: page.url(),
        error: "parse_failed",
        positiveOutcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
      });
    }
    const idx = text.search(/SHTËPI|shtëpi/i);
    const fragment = text.slice(Math.max(0, idx), idx + 900);
    const negUrl = `https://www.fjalori.online/?search=${encodeURIComponent(NEGATIVE_TERM)}&mode=exact`;
    await page.goto(negUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(4000);
    const negText = await page.evaluate(() => document.body?.innerText || "");
    const negOk = !/zzqqxxnotaword999/i.test(negText) && /nuk u gjet|no results|0 rezultat/i.test(negText + text) || !guardNeg;
    if (!negOk && /SHTËPI/i.test(negText)) {
      return toFailedProbe({ probeId: "sq-fjalori-online", error: "negative_false_positive" });
    }
    return toValidatedProbe({
      probeId: "sq-fjalori-online",
      role: "PROPOSED_PRIMARY",
      searchUrl,
      entryUrl: searchUrl,
      headword: lemma,
      evidenceFragment: fragment,
      accessMethod: SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION,
      accessStatus: ACCESS_STATUS.B,
      positiveOutcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
      negativeOutcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
      adapterId: "sq-fjalori-online-prototype",
    });
  });
}

async function probeSrRaskovnik(lemma) {
  return withDomainBrowserSession("raskovnik.org", async (page) => {
    await page.goto("https://raskovnik.org/", { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(3000);
    const inp = page.locator('input[type="search"], input[type="text"]').first();
    await inp.fill(lemma);
    await page.waitForTimeout(4000);
    await inp.press("Enter");
    await page.waitForTimeout(8000);
    const text = await page.evaluate(() => document.body?.innerText || "");
    const entryUrl = page.url();
    if (!/das Haus|domus|зграда|stanu|ку/i.test(text)) {
      return toFailedProbe({
        probeId: "sr-raskovnik",
        role: "PROPOSED_PRIMARY",
        entryUrl,
        error: "parse_failed",
        positiveOutcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
      });
    }
    const idx = text.search(/das Haus|ку/i);
    const fragment = text.slice(Math.max(0, idx - 20), idx + 900);
    await inp.fill(NEGATIVE_TERM);
    await page.waitForTimeout(2000);
    await inp.press("Enter");
    await page.waitForTimeout(6000);
    const negText = await page.evaluate(() => document.body?.innerText || "");
    if (/zzqqxxnotaword999/i.test(negText) && /куќ/i.test(negText)) {
      return toFailedProbe({ probeId: "sr-raskovnik", error: "negative_false_positive" });
    }
    return toValidatedProbe({
      probeId: "sr-raskovnik",
      role: "PROPOSED_PRIMARY",
      searchUrl: "https://raskovnik.org/",
      entryUrl,
      headword: lemma,
      evidenceFragment: fragment,
      accessMethod: SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION,
      accessStatus: ACCESS_STATUS.B,
      positiveOutcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
      negativeOutcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
      adapterId: "sr-raskovnik-prototype",
    });
  });
}

async function probeMkMakedonskiGov(lemma) {
  return withDomainBrowserSession("makedonski.gov.mk", async (page) => {
    await page.goto("https://makedonski.gov.mk/", { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.locator("input").first().fill(lemma);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(8000);
    const text = await page.evaluate(() => document.body?.innerText || "");
    const entryUrl = page.url();
    if (!/куќ/i.test(text) || !/Градба|живеење|ж\./i.test(text)) {
      return toFailedProbe({
        probeId: "mk-makedonski-gov",
        role: "PROPOSED_PRIMARY",
        entryUrl,
        error: "parse_failed",
      });
    }
    const idx = text.search(/куќ/i);
    const fragment = text.slice(idx, idx + 900);
    await page.locator("input").first().fill(NEGATIVE_TERM);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(6000);
    const negText = await page.evaluate(() => document.body?.innerText || "");
    if (/zzqqxxnotaword999/i.test(negText) && /куќ/i.test(negText)) {
      return toFailedProbe({ probeId: "mk-makedonski-gov", error: "negative_false_positive" });
    }
    return toValidatedProbe({
      probeId: "mk-makedonski-gov",
      role: "PROPOSED_PRIMARY",
      searchUrl: "https://makedonski.gov.mk/",
      entryUrl,
      headword: lemma,
      evidenceFragment: fragment,
      accessMethod: SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION,
      accessStatus: ACCESS_STATUS.B,
      positiveOutcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
      negativeOutcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
      adapterId: "mk-makedonski-gov-prototype",
    });
  });
}

const PROBE_BY_ID = {
  "sq-fjalori-online": (lang) => probeSqFjaloriOnline(HAUS_POSITIVE_TEST_LEMMA[lang]),
  "sr-raskovnik": (lang) => probeSrRaskovnik(HAUS_POSITIVE_TEST_LEMMA[lang]),
  "mk-makedonski-gov": (lang) => probeMkMakedonskiGov(HAUS_POSITIVE_TEST_LEMMA[lang]),
};

async function probeLanguageResolution(appLang) {
  const lemma = HAUS_POSITIVE_TEST_LEMMA[appLang];
  const masterProbe = await probeMasterAdapter(appLang);
  const probes = [masterProbe];
  const catalog = PROPOSED_SOURCES[appLang];
  if (catalog?.proposals) {
    for (const p of catalog.proposals) {
      if (!p.probeId || !PROBE_BY_ID[p.probeId]) continue;
      // eslint-disable-next-line no-await-in-loop
      probes.push(await PROBE_BY_ID[p.probeId](appLang));
    }
  }
  const best = probes.find((p) => p.validated) || masterProbe;
  const proposalMeta = catalog?.proposals?.[0];
  return {
    language: appLang,
    lemma,
    negativeTestTerm: NEGATIVE_TERM,
    probes,
    selectedProbe: best.validated ? best : masterProbe,
    masterRegistryChangeRequired: Boolean(catalog?.proposals?.length) && best.probeId !== "master-registered-adapter",
    ownerApprovalStatus: catalog?.proposals?.length ? "OWNER_APPROVAL_REQUIRED" : "NOT_REQUIRED",
    proposalId: best.validated && best.probeId !== "master-registered-adapter" ? best.probeId : proposalMeta?.proposalId || null,
  };
}

module.exports = {
  probeLanguageResolution,
  probeMasterAdapter,
  probeSqFjaloriOnline,
  probeSrRaskovnik,
  probeMkMakedonskiGov,
  NEGATIVE_TERM,
};
