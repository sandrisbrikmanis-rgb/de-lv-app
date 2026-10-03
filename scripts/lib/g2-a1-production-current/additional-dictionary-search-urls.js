#!/usr/bin/env node
"use strict";

const { URL } = require("url");

/** Build candidate entry/search URLs for supplementary dictionary hosts (TARGET lemma or DE lemma). */
function buildSearchUrls(baseUrl, { targetLemma, deLemma, appCode, standardCode }) {
  let host;
  try {
    host = new URL(baseUrl).hostname.replace(/^www\./, "");
  } catch {
    return [];
  }
  const t = targetLemma || "";
  const de = deLemma || "";
  const encT = encodeURIComponent(t);
  const encDe = encodeURIComponent(de);
  const el = standardCode === "el" || appCode === "gr" ? "el" : appCode;

  const byHost = {
    "en.pons.com": () => {
      const path = baseUrl.replace(/\/$/, "");
      if (de) return [`${path}/${encDe}`];
      return [];
    },
    "pravopis.ba": () => [`https://www.pravopis.ba/pretraga?query=${encT}`],
    "slovnikcestiny.cz": () => [`https://slovnikcestiny.cz/search/${encT}`],
    "ordnet.dk": () => [`https://ordnet.dk/ods/search?query=${encT}`],
    "dictionary.cambridge.org": () => [
      `https://dictionary.cambridge.org/dictionary/english/${encT.toLowerCase()}`,
    ],
    "rae.es": () => [`https://dle.rae.es/${encT}`],
    "eki.ee": () => [`https://www.eki.ee/dict/ety/search?query=${encT}`],
    "kaino.kotus.fi": () => [`https://kaino.kotus.fi/ses/?h=${encT}`],
    "larousse.fr": () => [`https://www.larousse.fr/dictionaries/french/${encT}`],
    "christikolexiko.academyofathens.gr": () => [
      `https://christikolexiko.academyofathens.gr/search?q=${encT}`,
    ],
    "hjp.znanje.hr": () => [`https://hjp.znanje.hr/index.php?q=${encT}`],
    "arcanum.com": () => [baseUrl],
    "islex.arnastofnun.is": () => [`https://islex.arnastofnun.is/search?q=${encT}`],
    "treccani.it": () => [`https://www.treccani.it/vocabolario/${encT}/`],
    "lb.wiktionary.org": () => [`https://lb.wiktionary.org/wiki/${encT}`],
    "lkz.lt": () => [`https://www.lkz.lt/paieska?q=${encT}`],
    "llvv.tezaurs.lv": () => [`https://llvv.tezaurs.lv/${encT}`],
    "makedonski.gov.mk": () => [`https://makedonski.gov.mk/search?q=${encT}`],
    "naob.no": () => [`https://naob.no/ordbok/?q=${encT}`],
    "vandale.nl": () => [`https://www.vandale.nl/gratis-woordenboek/${encT}`],
    "alfa.norsk-ordbok.no": () => [`https://alfa.norsk-ordbok.no/search?q=${encT}`],
    "sjp.pwn.pl": () => [`https://sjp.pwn.pl/sjp/${encT};${encT}.html`],
    "dicionario.priberam.org": () => [`https://dicionario.priberam.org/${encT}`],
    "ru.wiktionary.org": () => [`https://ru.wiktionary.org/wiki/${encT}`],
    "slovniky.lingea.sk": () => [`https://slovniky.lingea.sk/sk-sk/${encT}`],
    "termania.net": () => [`https://www.termania.net/Iskanje?query=${encT}`],
    "fjalori.online": () => [`https://www.fjalori.online/search?q=${encT}`],
    "raskovnik.org": () => [`https://raskovnik.org/search?q=${encT}`],
    "lexin.nada.kth.se": () => [
      `https://lexin.nada.kth.se/lexin/#searchinfo=${encT},swe_${el === "en" ? "eng" : el}`,
    ],
    "nisanyansozluk.com": () => [`https://www.nisanyansozluk.com/?ara=${encT}`],
    "sum.in.ua": () => [`https://sum.in.ua/s/${encT}`],
  };

  for (const [key, fn] of Object.entries(byHost)) {
    if (host === key || host.endsWith(`.${key}`)) {
      return fn().filter(Boolean);
    }
  }
  if (t) {
    const u = new URL(baseUrl);
    return [
      `${u.origin}/search?q=${encT}`,
      `${u.origin}/?q=${encT}`,
      `${baseUrl.replace(/\/$/, "")}/${encT}`,
    ];
  }
  return [baseUrl];
}

module.exports = { buildSearchUrls };
