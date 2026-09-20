#!/usr/bin/env node
"use strict";

const { chromium } = require("playwright");

const PROBES = [
  {
    id: "nb-ordbokene",
    url: "https://ordbokene.no/bm/ordbok?search=hus",
    expect: /hus/i,
    captcha: /captcha|robot|not a bot/i,
  },
  {
    id: "da-ddo",
    url: "https://ordnet.dk/ddo/ordbog?query=hus",
    expect: /hus/i,
    captcha: /captcha|cloudflare|verify you are human/i,
  },
  {
    id: "fr-academie",
    url: "https://www.dictionnaire-academie.fr/#/recherche/maison",
    expect: /maison/i,
    captcha: /captcha/i,
  },
  {
    id: "pl-wsjp",
    url: "https://wsjp.pl/dhaslo/dom",
    expect: /dom/i,
    captcha: /captcha|cloudflare|403/i,
  },
  {
    id: "sv-saol",
    url: "https://svenska.se/saol/#/search/hus",
    expect: /hus/i,
    captcha: /captcha/i,
  },
  {
    id: "sk-juls",
    url: "https://slovnik.juls.savba.sk/?s=dobr%C3%BD",
    expect: /dobr/i,
    captcha: /Previerka|reasonability of your browser/i,
  },
  {
    id: "es-dle",
    url: "https://dle.rae.es/casa",
    expect: /casa/i,
    captcha: /captcha|cloudflare/i,
  },
];

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const results = [];
  for (const p of PROBES) {
    const context = await browser.newContext({ locale: "en-US" });
    const page = await context.newPage();
    let text = "";
    let err = null;
    try {
      await page.goto(p.url, { waitUntil: "networkidle", timeout: 45000 });
      await page.waitForTimeout(2000);
      text = await page.evaluate(() => document.body?.innerText?.slice(0, 4000) || "");
    } catch (e) {
      err = String(e.message || e);
    }
    const captcha = p.captcha.test(text) || p.captcha.test(err || "");
    results.push({
      id: p.id,
      url: p.url,
      finalUrl: page.url(),
      err,
      captchaLikely: captcha,
      expectMatch: p.expect.test(text),
      preview: text.slice(0, 200),
    });
    await context.close();
  }
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
