#!/usr/bin/env node
"use strict";

const { URL } = require("url");
const { classifyBrowserText } = require("./guards");
const { isHostnameAllowed } = require("../../registry-domain-allowlist");

async function acceptCookiesIfPresent(page) {
  const patterns = [/Tillad alle cookies/i, /Accept all/i, /Godta alle/i, /Accepter/i, /OK/i];
  for (const re of patterns) {
    try {
      await page.getByRole("button", { name: re }).click({ timeout: 1500 });
      return;
    } catch {
      /* continue */
    }
  }
}

async function bodyText(page) {
  return page.evaluate(() => document.body?.innerText || "");
}

function isLikelyNoResults(text) {
  return /найдено\s*:?\s*0|ничего не найдено|не найден|no results|0 results|ei osumaa|ei tuloksia|ingen treff|geen resultaten|brak wyników|nincs találat|0 rezultat/i.test(
    text,
  );
}

function extractHeadwordFragment(text, lookupTerm, minFrag = 40) {
  if (isLikelyNoResults(text)) return null;
  const esc = String(lookupTerm).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const boundary =
    /^[\p{L}\p{N}]+$/u.test(String(lookupTerm)) && String(lookupTerm).length <= 64
      ? new RegExp(`(?:^|[\\s,.;:!?()"'])(${esc})(?:$|[\\s,.;:!?()"'])`, "iu")
      : new RegExp(esc, "iu");
  const match = text.match(boundary);
  if (!match) return null;
  const idx = match.index ?? text.search(boundary);
  if (idx < 0) return null;
  const fragment = text.slice(Math.max(0, idx - 20), idx + 900).trim();
  if (fragment.length < minFrag) return null;
  return { headword: lookupTerm, fragment };
}

async function flowDaDdo(page, lookupTerm, allowedDomains) {
  const searchUrl = `https://ordnet.dk/ddo/ordbog?query=${encodeURIComponent(lookupTerm)}`;
  await page.goto(searchUrl, { waitUntil: "domcontentloaded" });
  await acceptCookiesIfPresent(page);
  await page.waitForTimeout(3500);
  const finalUrl = page.url();
  const host = new URL(finalUrl).hostname;
  if (!isHostnameAllowed(host, allowedDomains)) {
    return { validated: false, reason: "DOMAIN_REJECTED", searchUrl, finalUrl };
  }
  const text = await bodyText(page);
  const guard = classifyBrowserText(text, finalUrl);
  if (guard.blocked) return { validated: false, reason: guard.reason, searchUrl, finalUrl };
  const parsed = extractHeadwordFragment(text, lookupTerm);
  if (!parsed || !/ORD I NÆRHEDEN|EKSEMPLER|selvstændig|substantiv/i.test(parsed.fragment)) {
    return { validated: false, reason: "parse_failed", searchUrl, finalUrl };
  }
  return {
    validated: true,
    searchUrl,
    entryUrl: finalUrl,
    headword: parsed.headword,
    fragment: parsed.fragment,
    entryOrRule: `Den Danske Ordbog: ${parsed.headword}`,
  };
}

async function flowSkJuls(page, lookupTerm, allowedDomains) {
  const searchUrl = `https://slovnik.juls.savba.sk/?s=${encodeURIComponent(lookupTerm)}`;
  await page.goto("https://slovnik.juls.savba.sk/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1500);
  const inp = page.locator('input[type="text"]').first();
  await inp.fill(lookupTerm);
  await inp.press("Enter");
  await page.waitForTimeout(4500);
  const finalUrl = page.url();
  const host = new URL(finalUrl).hostname;
  if (!isHostnameAllowed(host, allowedDomains)) {
    return { validated: false, reason: "DOMAIN_REJECTED", searchUrl, finalUrl };
  }
  const text = await bodyText(page);
  const guard = classifyBrowserText(text, finalUrl);
  if (guard.blocked) return { validated: false, reason: guard.reason, searchUrl, finalUrl };
  const parsed = extractHeadwordFragment(text, lookupTerm);
  if (!parsed || !/príd|podstat|slovenského jazyka/i.test(parsed.fragment)) {
    return { validated: false, reason: "parse_failed", searchUrl, finalUrl };
  }
  return {
    validated: true,
    searchUrl,
    entryUrl: finalUrl,
    headword: parsed.headword,
    fragment: parsed.fragment,
    entryOrRule: `JÚĽŠ slovníkový portál: ${parsed.headword}`,
  };
}

async function flowOrdbokeneNo(page, lookupTerm, allowedDomains, bmOrNn) {
  const base = bmOrNn === "nn" ? "https://ordbokene.no/nn/" : "https://ordbokene.no/bm/";
  const searchUrl = `${base}?search=${encodeURIComponent(lookupTerm)}`;
  await page.goto(base, { waitUntil: "domcontentloaded" });
  await acceptCookiesIfPresent(page);
  await page.waitForTimeout(2000);
  const inp = page.locator('input[type="search"], input[type="text"]').first();
  await inp.fill(lookupTerm);
  await inp.press("Enter");
  await page.waitForTimeout(4500);
  const esc = String(lookupTerm).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    await page.locator("a").filter({ hasText: new RegExp(`^${esc}$`, "i") }).first().click({ timeout: 8000 });
    await page.waitForTimeout(3500);
  } catch {
    /* may already be on entry */
  }
  const finalUrl = page.url();
  const host = new URL(finalUrl).hostname;
  if (!isHostnameAllowed(host, allowedDomains)) {
    return { validated: false, reason: "DOMAIN_REJECTED", searchUrl, finalUrl };
  }
  const text = await bodyText(page);
  const guard = classifyBrowserText(text, finalUrl);
  if (guard.blocked) return { validated: false, reason: guard.reason, searchUrl, finalUrl };
  const parsed = extractHeadwordFragment(text, lookupTerm);
  if (!parsed || !/substantiv|verb|betydning|ordklasse/i.test(parsed.fragment)) {
    return { validated: false, reason: "parse_failed", searchUrl, finalUrl };
  }
  return {
    validated: true,
    searchUrl,
    entryUrl: finalUrl,
    headword: parsed.headword,
    fragment: parsed.fragment,
    entryOrRule: `Ordbøkene (${bmOrNn}): ${parsed.headword}`,
  };
}

async function flowPlWsjp(page, lookupTerm, allowedDomains) {
  const searchUrl = "https://wsjp.pl/";
  await page.goto(searchUrl, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);
  await page.locator("input").first().fill(lookupTerm);
  await page.waitForTimeout(1500);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(3500);
  const esc = String(lookupTerm).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const entryHref = await page.evaluate((term) => {
    const re = new RegExp(`^${term}$`, "i");
    const a = [...document.querySelectorAll('a[href*="/haslo/"]')].find((el) => re.test(el.textContent.trim()));
    return a ? a.href : null;
  }, lookupTerm);
  if (entryHref) {
    await page.goto(entryHref, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3500);
  } else {
    try {
      await page
        .locator(`a[href*="/haslo/"]`)
        .filter({ hasText: new RegExp(`^${esc}$`, "i") })
        .first()
        .click({ timeout: 8000 });
      await page.waitForTimeout(4000);
    } catch {
      /* stay on search results */
    }
  }
  await page.waitForTimeout(1500);
  const finalUrl = page.url();
  const host = new URL(finalUrl).hostname;
  if (!isHostnameAllowed(host, allowedDomains)) {
    return { validated: false, reason: "DOMAIN_REJECTED", searchUrl, finalUrl };
  }
  const text = await bodyText(page);
  const guard = classifyBrowserText(text, finalUrl);
  if (guard.blocked) return { validated: false, reason: guard.reason, searchUrl, finalUrl };
  const parsed = extractHeadwordFragment(text, lookupTerm);
  if (!parsed || !/znaczenie|hasło|wyraz/i.test(parsed.fragment)) {
    return { validated: false, reason: "parse_failed", searchUrl, finalUrl };
  }
  return {
    validated: true,
    searchUrl,
    entryUrl: finalUrl,
    headword: parsed.headword,
    fragment: parsed.fragment,
    entryOrRule: `WSJP: ${parsed.headword}`,
  };
}

async function flowRuOrfo(page, lookupTerm, allowedDomains) {
  const searchUrl = "https://orfo.ruslang.ru/search";
  await page.goto(searchUrl, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1500);
  await page.locator('input[type="text"]').first().fill(lookupTerm);
  await page.locator('input[type="submit"]').first().click();
  await page.waitForTimeout(6000);
  const finalUrl = page.url();
  const text = await bodyText(page);
  const guard = classifyBrowserText(text, finalUrl);
  if (guard.blocked) return { validated: false, reason: guard.reason, searchUrl, finalUrl };
  const host = new URL(finalUrl).hostname;
  if (!isHostnameAllowed(host, allowedDomains)) {
    return { validated: false, reason: "DOMAIN_REJECTED", searchUrl, finalUrl };
  }
  if (/По запросу/i.test(text) && /найдено\s*:?\s*0|не найден/i.test(text)) {
    return { validated: false, reason: "entry_not_found", searchUrl, finalUrl };
  }
  const parsed = extractHeadwordFragment(text, lookupTerm);
  if (!parsed || !/АКАДЕМОС|стать/i.test(parsed.fragment)) {
    return { validated: false, reason: "parse_failed", searchUrl, finalUrl };
  }
  const entryUrl =
    /word=|[?&]q=|%D0%B4|%D0%B|E0%B4/i.test(finalUrl) && !/\/search\/word\/?$/i.test(finalUrl)
      ? finalUrl
      : `https://orfo.ruslang.ru/search?word=${encodeURIComponent(lookupTerm)}`;
  return {
    validated: true,
    searchUrl,
    entryUrl,
    headword: parsed.headword,
    fragment: parsed.fragment,
    entryOrRule: `ORFO АКАДЕМОС: ${parsed.headword}`,
  };
}

async function flowGenericSearchUrl(page, lookupTerm, allowedDomains, { searchUrlTemplate, validateRe, waitMs = 5000 }) {
  const searchUrl = searchUrlTemplate(lookupTerm);
  await page.goto(searchUrl, { waitUntil: "domcontentloaded" });
  await acceptCookiesIfPresent(page);
  await page.waitForTimeout(waitMs);
  const finalUrl = page.url();
  let host;
  try {
    host = new URL(finalUrl).hostname;
  } catch {
    return { validated: false, reason: "BAD_URL", searchUrl, finalUrl };
  }
  if (!isHostnameAllowed(host, allowedDomains)) {
    return { validated: false, reason: "DOMAIN_REJECTED", searchUrl, finalUrl };
  }
  const text = await bodyText(page);
  const guard = classifyBrowserText(text, finalUrl);
  if (guard.blocked) return { validated: false, reason: guard.reason, searchUrl, finalUrl };
  const parsed = extractHeadwordFragment(text, lookupTerm);
  if (!parsed || (validateRe && !validateRe.test(parsed.fragment))) {
    return { validated: false, reason: "parse_failed", searchUrl, finalUrl };
  }
  return {
    validated: true,
    searchUrl,
    entryUrl: finalUrl,
    headword: parsed.headword,
    fragment: parsed.fragment,
    entryOrRule: `Entry: ${parsed.headword}`,
  };
}

const FLOW_RUNNERS = {
  "da-ddo": flowDaDdo,
  "sk-juls": flowSkJuls,
  "nb-ordbokene": (page, term, allow) => flowOrdbokeneNo(page, term, allow, "bm"),
  "nn-ordbokene": (page, term, allow) => flowOrdbokeneNo(page, term, allow, "nn"),
  "fr-academie": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://www.dictionnaire-academie.fr/#/recherche/${encodeURIComponent(t)}`,
      validateRe: /.+/,
    }),
  "hr-rjecnik": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://rjecnik.hr/?query=${encodeURIComponent(t)}`,
      validateRe: /.+/,
    }),
  "nl-woordenlijst": async (page, term, allow) => {
    const searchUrl = `https://woordenlijst.org/#/zoeken/${encodeURIComponent(term)}`;
    await page.goto(searchUrl, { waitUntil: "domcontentloaded" });
    await acceptCookiesIfPresent(page);
    await page.waitForTimeout(5000);
    const esc = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    try {
      await page.locator("a").filter({ hasText: new RegExp(`^${esc}$`, "i") }).first().click({ timeout: 10000 });
      await page.waitForTimeout(5000);
    } catch {
      /* suggestions list may differ */
    }
    const finalUrl = page.url();
    const host = new URL(finalUrl).hostname;
    if (!isHostnameAllowed(host, allow)) {
      return { validated: false, reason: "DOMAIN_REJECTED", searchUrl, finalUrl };
    }
    const text = await bodyText(page);
    const guard = classifyBrowserText(text, finalUrl);
    if (guard.blocked) return { validated: false, reason: guard.reason, searchUrl, finalUrl };
    const parsed = extractHeadwordFragment(text, term);
    if (!parsed || !/werkwoord|zelfstandig|betekenis|spelling/i.test(parsed.fragment)) {
      return { validated: false, reason: "parse_failed", searchUrl, finalUrl };
    }
    return {
      validated: true,
      searchUrl,
      entryUrl: finalUrl,
      headword: parsed.headword,
      fragment: parsed.fragment,
      entryOrRule: `Woordenlijst.org: ${parsed.headword}`,
    };
  },
  "sv-svenska": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://svenska.se/saol/#/search/${encodeURIComponent(t)}`,
      validateRe: /substantiv|verb|betydelse/i,
    }),
  "pl-wsjp": flowPlWsjp,
  "ro-doom": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => {
        const q = String(t).normalize("NFD").replace(/\p{M}/gu, "");
        return `https://doom.lingv.ro/cautare?q=${encodeURIComponent(q)}`;
      },
      validateRe: /substantiv|verb|defini|sens/i,
    }),
  "fi-kielitoimisto": async (page, term, allow) => {
    const searchUrl = "https://www.kielitoimistonsanakirja.fi/";
    await page.goto(searchUrl, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2500);
    const inp = page.locator('input[type="text"]').first();
    await inp.fill(term);
    await inp.press("Enter");
    await page.waitForTimeout(6000);
    const esc = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    try {
      await page.locator("a").filter({ hasText: new RegExp(`^${esc}$`, "i") }).first().click({ timeout: 8000 });
      await page.waitForTimeout(4000);
    } catch {
      /* may already show entry */
    }
    const finalUrl = page.url();
    const host = new URL(finalUrl).hostname;
    if (!isHostnameAllowed(host, allow)) {
      return { validated: false, reason: "DOMAIN_REJECTED", searchUrl, finalUrl };
    }
    const text = await bodyText(page);
    const guard = classifyBrowserText(text, finalUrl);
    if (guard.blocked) return { validated: false, reason: guard.reason, searchUrl, finalUrl };
    const parsed = extractHeadwordFragment(text, term);
    if (!parsed || !/substantiivi|verbi|merkitys|s\.|adj\.|rakenne/i.test(parsed.fragment)) {
      return { validated: false, reason: "parse_failed", searchUrl, finalUrl };
    }
    return {
      validated: true,
      searchUrl,
      entryUrl: finalUrl,
      headword: parsed.headword,
      fragment: parsed.fragment,
      entryOrRule: `Kielitoimiston sanakirja: ${parsed.headword}`,
    };
  },
  "pt-acl": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://dicionario.acad-ciencias.pt/#/search/${encodeURIComponent(t)}`,
      validateRe: /substantivo|adjetivo|significado/i,
    }),
  "uk-dictua": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://lcorp.ulif.org.ua/dictua/#search=${encodeURIComponent(t)}`,
      validateRe: /іменник|дієслово|значення/i,
    }),
  "ru-orfo": flowRuOrfo,
  "bg-beron": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://beron.mon.bg/dictionary/search?q=${encodeURIComponent(t)}`,
      validateRe: /.+/,
    }),
  "is-bin": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) =>
        `https://bin.arnastofnun.is/beygingarstodur/nidur.php?adgerdir=leit&nafn=${encodeURIComponent(t)}`,
      validateRe: /.+/,
    }),
  "is-malid": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://malid.is/leit?q=${encodeURIComponent(t)}`,
      validateRe: /.+/,
    }),
  "lt-ekalba": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://ekalba.lt/zodynas?q=${encodeURIComponent(t)}`,
      validateRe: /daiktavardis|veiksmažodis|reikšm/i,
    }),
  "hu-nagyszotar": async (page, term, allow) => {
    const searchUrl = "https://nagyszotar.nytud.hu/index.html";
    await page.goto(searchUrl, { waitUntil: "domcontentloaded" });
    await page.locator("input").first().fill(term);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);
    const finalUrl = page.url();
    const text = await bodyText(page);
    if (/nincs találat/i.test(text)) return { validated: false, reason: "entry_not_found", searchUrl, finalUrl };
    const guard = classifyBrowserText(text, finalUrl);
    if (guard.blocked) return { validated: false, reason: guard.reason, searchUrl, finalUrl };
    const parsed = extractHeadwordFragment(text, term);
    if (!parsed) return { validated: false, reason: "parse_failed", searchUrl, finalUrl };
    return {
      validated: true,
      searchUrl,
      entryUrl: finalUrl,
      headword: parsed.headword,
      fragment: parsed.fragment,
      entryOrRule: `Akadémiai Nagyszótár: ${parsed.headword}`,
    };
  },
  "lb-lod": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://lod.lu/search/${encodeURIComponent(t)}`,
      validateRe: /.+/,
    }),
  "it-lessicografia": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://www.lessicografia.it/search?q=${encodeURIComponent(t)}`,
      validateRe: /significato|sostantivo/i,
    }),
  "mk-drmj": (page, term, allow) =>
    flowGenericSearchUrl(page, term, allow, {
      searchUrlTemplate: (t) => `https://drmj.eu/search?q=${encodeURIComponent(t)}`,
      validateRe: /.+/,
    }),
};

function getBrowserFlow(flowId) {
  return FLOW_RUNNERS[flowId] || null;
}

module.exports = { getBrowserFlow, FLOW_RUNNERS, flowDaDdo, flowSkJuls };
