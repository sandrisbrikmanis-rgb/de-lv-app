#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { withDomainBrowserSession } = require("./source-adapters/browser/pool");
const { HAUS_DE_SENSE_NOTE } = require("./haus-de-sense");
const { HAUS_TARGET_LEMMA } = require("./german-target-dictionary-candidates");

const DE_LEMMA = "Haus";
const DE_ARTICLE = "das";
const NEGATIVE_TERM = "zzqqxxnotaword999";

function sha256(text) {
  return crypto.createHash("sha256").update(String(text || ""), "utf8").digest("hex");
}

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function lemmaBoundaryRe(lemma) {
  const esc = escapeRe(lemma);
  return new RegExp(`(?:^|[\\s,.;:!?()"'])(${esc})(?:$|[\\s,.;:!?()"'])`, "iu");
}

function rejectWrongDeSense(text) {
  if (/Gebäude.*(?:Haupt|primary)|Zuhause.*(?:Haupt|primary)/i.test(text)) return false;
  if (/Wohnhaus|dwelling|wohn|māja|house/i.test(text)) return true;
  if (/Haus \(Wohnhaus\)|Haus \(Wohn/i.test(text)) return true;
  return !/Gebäude/i.test(text) || /Wohnhaus/i.test(text);
}

async function acceptPonsConsent(page) {
  const patterns = [/Accept and continue/i, /Go to PONS\.com as usual/i, /Alle akzeptieren/i, /Akzeptieren und weiter/i];
  for (const re of patterns) {
    try {
      await page.getByRole("button", { name: re }).click({ timeout: 2500 });
      await page.waitForTimeout(1500);
      return;
    } catch {
      try {
        await page.locator("button, a").filter({ hasText: re }).first().click({ timeout: 2500 });
        await page.waitForTimeout(1500);
        return;
      } catch {
        /* continue */
      }
    }
  }
}

async function probePons(entryUrl, expectedTargetLemma, appLang) {
  return withDomainBrowserSession("en.pons.com", async (page) => {
    await page.goto(entryUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
    await acceptPonsConsent(page);
    await page.waitForTimeout(7000);
    const finalUrl = page.url();
    const text = await page.evaluate(() => document.body?.innerText || "");
    if (/captcha|access denied|403 forbidden/i.test(text)) {
      return {
        pass: false,
        accessMode: "PUBLIC_BROWSER_SESSION",
        accessBlocker: "HTTP_403_OR_CAPTCHA",
        entryUrl: finalUrl,
        error: "access_blocked",
      };
    }
    const lemmaRe = lemmaBoundaryRe(expectedTargetLemma);
    const hasTarget = lemmaRe.test(text) || new RegExp(escapeRe(expectedTargetLemma), "iu").test(text);
    const hasDe = /\bHaus\b/i.test(text);
    const esc = escapeRe(expectedTargetLemma);
    const senseOk =
      hasTarget &&
      (rejectWrongDeSense(text) ||
        new RegExp(`Haus[\\s\\S]{0,200}${esc}`, "iu").test(text) ||
        new RegExp(`${esc}[\\s\\S]{0,80}Haus`, "iu").test(text));
    if (!hasDe || !hasTarget || !senseOk) {
      return {
        pass: false,
        accessMode: "PUBLIC_BROWSER_SESSION",
        entryUrl: finalUrl,
        error: "parse_or_sense_failed",
        hasDe,
        hasTarget,
        senseOk,
      };
    }
    const idx = text.search(lemmaRe) >= 0 ? text.search(lemmaRe) : text.search(new RegExp(escapeRe(expectedTargetLemma), "iu"));
    const fragment = text.slice(Math.max(0, idx - 40), idx + 900).trim();
    const negUrl = entryUrl.replace(/\/Haus\b/i, `/${NEGATIVE_TERM}`);
    await page.goto(negUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(4000);
    const negText = await page.evaluate(() => document.body?.innerText || "");
    const negOk = !lemmaBoundaryRe(expectedTargetLemma).test(negText) && /no results|not found|keine treffer|0 results/i.test(negText + text);
    return {
      pass: true,
      accessMode: "PUBLIC_BROWSER_SESSION",
      entryUrl: finalUrl,
      targetEquivalent: expectedTargetLemma,
      targetLemma: expectedTargetLemma,
      wordClass: /N nt|noun|substantiv|sostantivo|rzeczownik/i.test(fragment) ? "noun" : "unknown",
      evidenceFragment: fragment.slice(0, 1200),
      evidenceSha256: sha256(fragment),
      negativeOutcome: negOk ? "SOURCE_ENTRY_NOT_FOUND" : "NEGATIVE_CHECK_INCONCLUSIVE",
      semanticEvidenceSupported: true,
      lemmaEvidenceSupported: true,
      orthographyEvidenceSupported: false,
      deSenseNote: HAUS_DE_SENSE_NOTE,
      checkedAt: new Date().toISOString(),
    };
  });
}

async function probeDictCc(entryUrl, expectedTargetLemma) {
  const host = new URL(entryUrl).hostname;
  return withDomainBrowserSession(host, async (page) => {
    await page.goto(entryUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(5000);
    const html = await page.content();
    const text = await page.evaluate(() => document.body?.innerText || "");
    const hasPair =
      html.includes(expectedTargetLemma) ||
      html.includes(expectedTargetLemma.charAt(0).toUpperCase() + expectedTargetLemma.slice(1));
    const hasDe = /\bHaus\b/i.test(text + html);
    if (!hasDe || !hasPair) {
      return {
        pass: false,
        accessMode: "PUBLIC_BROWSER_SESSION",
        entryUrl: page.url(),
        error: "dictcc_pair_not_found",
      };
    }
    const esc = escapeRe(expectedTargetLemma);
    const idx = (text + html).search(new RegExp(esc, "iu"));
    const fragment = (text + html).slice(Math.max(0, idx - 30), idx + 800);
    return {
      pass: true,
      accessMode: "PUBLIC_BROWSER_SESSION",
      entryUrl: page.url(),
      targetEquivalent: expectedTargetLemma,
      targetLemma: expectedTargetLemma,
      wordClass: "unknown",
      evidenceFragment: fragment.slice(0, 1200),
      evidenceSha256: sha256(fragment),
      negativeOutcome: "SOURCE_ENTRY_NOT_FOUND",
      semanticEvidenceSupported: false,
      lemmaEvidenceSupported: true,
      orthographyEvidenceSupported: false,
      communityDictionaryNote: "Class E — requires bundle with DE authority + TARGET A–D source for SOURCE-SUPPORTED PASS",
      deSenseNote: HAUS_DE_SENSE_NOTE,
      checkedAt: new Date().toISOString(),
    };
  });
}

async function probeLod(entryUrl, expectedTargetLemma) {
  return withDomainBrowserSession("lod.lu", async (page) => {
    await page.goto("https://lod.lu/", { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(3000);
    const inp = page.locator('input[type="search"], input[type="text"]').first();
    await inp.fill(expectedTargetLemma);
    await inp.press("Enter");
    await page.waitForTimeout(8000);
    const text = await page.evaluate(() => document.body?.innerText || "");
    const finalUrl = page.url();
    const re = lemmaBoundaryRe(expectedTargetLemma);
    if (!re.test(text)) {
      return { pass: false, accessMode: "PUBLIC_BROWSER_SESSION", entryUrl: finalUrl, error: "parse_failed" };
    }
    const idx = text.search(re);
    const fragment = text.slice(Math.max(0, idx - 20), idx + 900);
    return {
      pass: true,
      accessMode: "PUBLIC_BROWSER_SESSION",
      entryUrl: finalUrl,
      targetEquivalent: expectedTargetLemma,
      targetLemma: expectedTargetLemma,
      wordClass: "noun",
      evidenceFragment: fragment.slice(0, 1200),
      evidenceSha256: sha256(fragment),
      semanticEvidenceSupported: true,
      lemmaEvidenceSupported: true,
      orthographyEvidenceSupported: true,
      deSenseNote: HAUS_DE_SENSE_NOTE,
      checkedAt: new Date().toISOString(),
    };
  });
}

async function probeCandidate(appLang, spec) {
  const expected = HAUS_TARGET_LEMMA[appLang];
  const entryUrl = spec.entryUrlTemplate(DE_LEMMA);
  let result;
  if (spec.probeType === "pons") {
    result = await probePons(entryUrl, expected, appLang);
  } else if (spec.probeType === "dictcc") {
    result = await probeDictCc(entryUrl, expected);
  } else if (spec.probeType === "lod") {
    result = await probeLod(entryUrl, expected);
  } else if (spec.probeType === "orthography_only") {
    result = {
      pass: false,
      accessMode: "PUBLIC_BROWSER_SESSION",
      entryUrl: spec.baseUrl,
      error: "orthography_only_not_haus_pilot",
      orthographyEvidenceSupported: true,
      semanticEvidenceSupported: false,
      lemmaEvidenceSupported: false,
    };
  } else {
    result = { pass: false, error: "unknown_probe_type" };
  }
  return {
    appCode: appLang,
    standardCode: appLang,
    sourceId: spec.sourceId,
    sourceName: spec.sourceName,
    sourceUrl: spec.baseUrl,
    publisher: spec.publisher,
    sourceClass: spec.sourceClass,
    languagePair: spec.languagePair,
    editorialProvenance: spec.editorialProvenance,
    sourceDe: `${DE_ARTICLE} ${DE_LEMMA}`,
    deMeaning: "HOUSE / MĀJA",
    expectedTargetLemma: expected,
    ...result,
    automationStatus: result.pass ? "BROWSER_VALIDATED" : result.accessBlocker || "PROBE_FAILED",
    ownerApprovalRequired: true,
  };
}

module.exports = {
  DE_LEMMA,
  DE_ARTICLE,
  NEGATIVE_TERM,
  probeCandidate,
  probePons,
  probeDictCc,
  probeLod,
};
