#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { URL } = require("url");
const { fetchAllowlistedPage, htmlToPlainText } = require("./source-adapters/http-page");
const { isHomepageUrl } = require("./source-adapters/create-config-adapter");
const { withDomainBrowserSession } = require("./source-adapters/browser/pool");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { buildSearchUrls } = require("./additional-dictionary-search-urls");
const { evidenceQualityOk, isValidatedEntry } = require("./targeted-source-access-validation");
const {
  probePons,
  probeDictCc,
  probeLod,
  acceptPonsConsent,
} = require("./german-target-dictionary-probes");

function sha256(text) {
  return crypto.createHash("sha256").update(String(text || ""), "utf8").digest("hex");
}

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function lemmaInText(text, lemma) {
  if (!lemma || !text) return false;
  const parts = String(lemma).trim().split(/\s+/);
  if (parts.length > 1) {
    return new RegExp(escapeRe(lemma), "iu").test(text);
  }
  const esc = escapeRe(lemma);
  return new RegExp(`(?:^|[\\s,.;:!?()"'])(${esc})(?:$|[\\s,.;:!?()"'])`, "iu").test(text);
}

function deLemmaInText(text, deLemma) {
  return lemmaInText(text, deLemma);
}

function hausSenseOk(text) {
  if (/Gebäude.*(?:Haupt|primary)|Zuhause.*(?:Haupt|primary)/i.test(text)) return false;
  if (/Wohnhaus|dwelling|wohn|house/i.test(text)) return true;
  return !/Gebäude/i.test(text) || /Wohnhaus/i.test(text);
}

function pilotSenseOk(pilotId, text, deLemma, targetLemma) {
  if (pilotId === "haus") {
    return hausSenseOk(text) && deLemmaInText(text, deLemma) && lemmaInText(text, targetLemma);
  }
  return deLemmaInText(text, deLemma) && lemmaInText(text, targetLemma);
}

function fragmentAround(text, lemma) {
  const idx = text.search(new RegExp(escapeRe(lemma), "iu"));
  if (idx < 0) return text.slice(0, 400);
  return text.slice(Math.max(0, idx - 50), idx + 900).trim();
}

async function fetchOrBrowserPage(url, allowedDomains) {
  const host = new URL(url).hostname;
  const http = await fetchAllowlistedPage(url, { allowedDomains });
  if (http.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED && http.html) {
    const plain = htmlToPlainText(http.html);
    if (plain.length >= 80 && !/enable javascript|captcha|access denied/i.test(plain)) {
      return {
        mode: "HTTP_FETCH",
        finalUrl: http.finalUrl || url,
        text: plain,
        contentSha256: http.contentSha256,
        httpStatus: http.httpStatus,
      };
    }
  }
  return withDomainBrowserSession(host, async (page) => {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    if (/pons\.com/i.test(host)) await acceptPonsConsent(page);
    await page.waitForTimeout(5000);
    const text = await page.evaluate(() => document.body?.innerText || "");
    if (/captcha|access denied|403 forbidden|login required|sign in/i.test(text)) {
      return {
        mode: "PUBLIC_BROWSER_SESSION",
        blocked: true,
        finalUrl: page.url(),
        text,
        blocker: "CAPTCHA_OR_AUTH",
      };
    }
    return {
      mode: "PUBLIC_BROWSER_SESSION",
      finalUrl: page.url(),
      text,
      contentSha256: sha256(text.slice(0, 12000)),
    };
  });
}

function classifyLexicalHit({
  pilotId,
  deLemma,
  targetLemma,
  text,
  bilingualHint,
  monolingualTargetOnly,
}) {
  if (!text || text.length < 40) {
    return { entryFound: false, accessResult: "ENTRY_NOT_FOUND", checksTranslationPair: false };
  }
  const hasTarget = lemmaInText(text, targetLemma);
  if (!hasTarget) {
    return { entryFound: false, accessResult: "ENTRY_NOT_FOUND", checksTranslationPair: false };
  }
  const hasDe = deLemmaInText(text, deLemma);
  const pairOk = bilingualHint || (hasDe && pilotSenseOk(pilotId, text, deLemma, targetLemma));
  if (monolingualTargetOnly || (!bilingualHint && !hasDe)) {
    return {
      entryFound: true,
      accessResult: "TARGET_LEMMA_ONLY",
      checksTranslationPair: false,
      targetLemmaFound: targetLemma,
    };
  }
  if (pairOk) {
    return {
      entryFound: true,
      accessResult: "TRANSLATION_PAIR_VERIFIED",
      checksTranslationPair: true,
      targetLemmaFound: targetLemma,
    };
  }
  return {
    entryFound: true,
    accessResult: "TARGET_LEMMA_ONLY",
    checksTranslationPair: false,
    targetLemmaFound: targetLemma,
  };
}

async function probeUrlList(urls, ctx) {
  const { allowedDomains, pilotId, deLemma, targetLemma, sourceName, bilingualHint, monolingualTargetOnly } =
    ctx;
  for (const url of urls) {
    if (isHomepageUrl(url)) continue;
    try {
      // eslint-disable-next-line no-await-in-loop
      const page = await fetchOrBrowserPage(url, allowedDomains);
      if (page.blocked) {
        return {
          sourceName,
          entryUrl: page.finalUrl || url,
          accessResult: "SOURCE_ACCESS_BLOCKED",
          entryFound: "NO",
          targetLemmaFound: null,
          checksTranslationPair: false,
          technicalBlocker: page.blocker || "access_blocked",
          evidenceFragment: (page.text || "").slice(0, 200),
        };
      }
      const hit = classifyLexicalHit({
        pilotId,
        deLemma,
        targetLemma,
        text: page.text,
        bilingualHint,
        monolingualTargetOnly,
      });
      if (hit.entryFound) {
        return {
          sourceName,
          entryUrl: page.finalUrl || url,
          accessResult: hit.accessResult,
          entryFound: "YES",
          targetLemmaFound: hit.targetLemmaFound,
          checksTranslationPair: hit.checksTranslationPair,
          evidenceFragment: fragmentAround(page.text, targetLemma).slice(0, 1200),
          contentSha256: page.contentSha256 || sha256(page.text.slice(0, 8000)),
          accessMode: page.mode,
        };
      }
    } catch (e) {
      /* try next url */
    }
  }
  return {
    sourceName,
    entryUrl: urls.find((u) => !isHomepageUrl(u)) || urls[0] || null,
    accessResult: "ENTRY_NOT_FOUND",
    entryFound: "NO",
    targetLemmaFound: null,
    checksTranslationPair: false,
    technicalBlocker: "no_matching_entry_in_probe_urls",
  };
}

async function probeAdditionalDictionary({ baseUrl, authorityName, appCode, standardCode, allowedDomains, pilot, targetLemma }) {
  const urls = buildSearchUrls(baseUrl, {
    targetLemma,
    deLemma: pilot.deLemma,
    appCode,
    standardCode,
  });
  const isPons = /pons\.com/i.test(baseUrl);
  if (isPons) {
    const r = await probePons(
      buildSearchUrls(baseUrl, { deLemma: pilot.deLemma, appCode, standardCode })[0],
      targetLemma,
      appCode,
      { deLemma: pilot.deLemma, pilotId: pilot.id },
    );
    if (r.pass) {
      return {
        sourceName: authorityName,
        entryUrl: r.entryUrl,
        accessResult: "TRANSLATION_PAIR_VERIFIED",
        entryFound: "YES",
        targetLemmaFound: targetLemma,
        checksTranslationPair: true,
        evidenceFragment: r.evidenceFragment,
        contentSha256: r.evidenceSha256,
        accessMode: r.accessMode,
      };
    }
    if (r.accessBlocker) {
      return {
        sourceName: authorityName,
        entryUrl: r.entryUrl,
        accessResult: "SOURCE_ACCESS_BLOCKED",
        entryFound: "NO",
        checksTranslationPair: false,
        technicalBlocker: r.accessBlocker,
      };
    }
  }
  return probeUrlList(urls, {
    allowedDomains,
    pilotId: pilot.id,
    deLemma: pilot.deLemma,
    targetLemma,
    sourceName: authorityName,
    bilingualHint: isPons,
    monolingualTargetOnly: true,
  });
}

async function probePrimaryDictionaryUrls({ urls, authorityName, allowedDomains, pilot, targetLemma }) {
  if (!urls?.length) {
    return {
      sourceName: authorityName || "PRIMARY_MISSING",
      entryUrl: null,
      accessResult: "ENTRY_NOT_FOUND",
      entryFound: "NO",
      checksTranslationPair: false,
      technicalBlocker: "no_primary_dictionary_urls",
    };
  }
  return probeUrlList(
    urls.flatMap((u) => buildSearchUrls(u, { targetLemma, deLemma: pilot.deLemma })),
    {
      allowedDomains,
      pilotId: pilot.id,
      deLemma: pilot.deLemma,
      targetLemma,
      sourceName: authorityName,
      monolingualTargetOnly: true,
    },
  );
}

function bilingualSpecFromStructured(source, deLemma) {
  const url = source.sourceUrl || "";
  if (/dict\.cc/i.test(url)) {
    const base = url.replace(/\/$/, "");
    return {
      probeType: "dictcc",
      entryUrl: `${base}/?s=${encodeURIComponent(deLemma)}`,
      sourceName: source.sourceName,
    };
  }
  if (/glosbe\.com\/de\//i.test(url)) {
    const base = url.replace(/\/$/, "");
    return {
      probeType: "generic_bilingual",
      entryUrl: `${base}/${encodeURIComponent(deLemma)}`,
      sourceName: source.sourceName,
    };
  }
  if (/pons\.com\/translate\//i.test(url)) {
    const base = url.replace(/\/$/, "");
    return {
      probeType: "pons",
      entryUrl: `${base}/${encodeURIComponent(deLemma)}`,
      sourceName: source.sourceName,
    };
  }
  if (/lod\.lu/i.test(url)) {
    return { probeType: "lod", entryUrl: url, sourceName: source.sourceName };
  }
  return null;
}

async function probeBilingualStructured(sources, { appCode, pilot, targetLemma }) {
  for (const src of sources || []) {
    if (src.sourceClass === "F") continue;
    const spec = bilingualSpecFromStructured(src, pilot.deLemma);
    if (!spec) continue;
    let r;
    if (spec.probeType === "pons") {
      // eslint-disable-next-line no-await-in-loop
      r = await probePons(spec.entryUrl, targetLemma, appCode, {
        deLemma: pilot.deLemma,
        pilotId: pilot.id,
      });
    } else if (spec.probeType === "dictcc") {
      // eslint-disable-next-line no-await-in-loop
      r = await probeDictCc(spec.entryUrl, targetLemma, pilot.deLemma);
    } else if (spec.probeType === "lod") {
      // eslint-disable-next-line no-await-in-loop
      r = await probeLod(spec.entryUrl, targetLemma);
    } else if (spec.probeType === "generic_bilingual") {
      // eslint-disable-next-line no-await-in-loop
      const pageHit = await probeUrlList([spec.entryUrl], {
        allowedDomains: [new URL(spec.entryUrl).hostname],
        pilotId: pilot.id,
        deLemma: pilot.deLemma,
        targetLemma,
        sourceName: spec.sourceName,
        bilingualHint: true,
        monolingualTargetOnly: false,
      });
      r = {
        pass: pageHit.accessResult === "TRANSLATION_PAIR_VERIFIED",
        entryUrl: pageHit.entryUrl,
        evidenceFragment: pageHit.evidenceFragment,
        evidenceSha256: pageHit.contentSha256,
        accessMode: pageHit.accessMode,
        accessBlocker: pageHit.technicalBlocker,
      };
    }
    if (r?.pass) {
      return {
        sourceName: spec.sourceName,
        entryUrl: r.entryUrl,
        accessResult: "TRANSLATION_PAIR_VERIFIED",
        entryFound: "YES",
        targetLemmaFound: targetLemma,
        checksTranslationPair: true,
        evidenceFragment: r.evidenceFragment,
        contentSha256: r.evidenceSha256,
        accessMode: r.accessMode,
      };
    }
    if (r?.accessBlocker) {
      return {
        sourceName: spec.sourceName,
        entryUrl: r.entryUrl,
        accessResult: "SOURCE_ACCESS_BLOCKED",
        entryFound: "NO",
        checksTranslationPair: false,
        technicalBlocker: r.accessBlocker,
      };
    }
  }
  return null;
}

function adapterSideToProbeRecord(side, sourceName) {
  if (isValidatedEntry(side) && evidenceQualityOk(side)) {
    return {
      sourceName: sourceName || side.authorityName,
      entryUrl: side.entryUrl || side.finalUrl,
      accessResult: "TARGET_LEMMA_ONLY",
      entryFound: "YES",
      targetLemmaFound: side.entryHeadwordOrRule || side.lookupTerm,
      checksTranslationPair: false,
      evidenceFragment: side.evidenceFragment,
      contentSha256: side.contentSha256,
      accessMode: side.accessMethod || "ADAPTER",
    };
  }
  if (
    side?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED ||
    side?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED
  ) {
    return {
      sourceName: sourceName || side.authorityName,
      entryUrl: side.entryUrl || side.finalUrl || side.requestedUrl,
      accessResult: "SOURCE_ACCESS_BLOCKED",
      entryFound: "NO",
      checksTranslationPair: false,
      technicalBlocker: side.error || side.outcome,
    };
  }
  return null;
}

module.exports = {
  probeAdditionalDictionary,
  probePrimaryDictionaryUrls,
  probeBilingualStructured,
  adapterSideToProbeRecord,
  lemmaInText,
  pilotSenseOk,
};
