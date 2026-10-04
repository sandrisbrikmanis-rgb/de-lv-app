#!/usr/bin/env node
"use strict";

/**
 * Read-only probes for OWNER-requested ②/③ dictionary paths (no CF bypass).
 * Output: JSON lines to stdout for reconciliation.
 */

const { fetchAllowlistedPage, htmlToPlainText } = require("./lib/g2-a1-production-current/source-adapters/http-page");

const CANDIDATES = [
  { lang: "da", url: "https://ordnet.dk/ddo/ordbog?query=hus", note: "DDO search" },
  { lang: "da", url: "https://ordnet.dk/ddo/ordbog?query=zzqqxxnotaword999", note: "DDO negative" },
  { lang: "hr", url: "https://rjecnik.hr/?query=ku%C4%87a", note: "HJP search" },
  { lang: "is", url: "https://bin.arnastofnun.is/beygingarstodur/nidur.php?adgerdir=leit&nafn=h%C3%BAs", note: "BÍN" },
  { lang: "is", url: "https://malid.is/leit?q=h%C3%BAs", note: "malid.is" },
  { lang: "it", url: "https://www.lessicografia.it/search?q=casa", note: "Crusca lessicografia" },
  { lang: "lv", url: "https://tezaurs.lv/house", note: "tezaurs lv path" },
  { lang: "lv", url: "https://mlvv.tezaurs.lv/vardnica/māja", note: "MLVV path" },
  { lang: "lt", url: "https://ekalba.lt/search?q=namas", note: "ekalba" },
  { lang: "hu", url: "https://nagyszotar.nytud.hu/kereses/?q=h%C3%A1z", note: "nagyszotar" },
  { lang: "hu", url: "https://helyesiras.mta.hu/helyesiras/default/kereses?q=h%C3%A1z", note: "helyesiras" },
  { lang: "nl", url: "https://woordenlijst.org/#/zoeken/huis", note: "woordenlijst hash" },
  { lang: "nl", url: "https://taaladvies.net/zoeken/huis", note: "taaladvies" },
  { lang: "nb", url: "https://ordbokene.no/bm/ordbok/hus", note: "ordbokene direct lemma" },
  { lang: "pl", url: "https://wsjp.pl/dhaslo/dom", note: "wsjp slug" },
  { lang: "pt", url: "https://dicionario.acad-ciencias.pt/pesquisa/casa", note: "ACL dict" },
  { lang: "ro", url: "https://doom.lingv.ro/search?q=cas%C4%83", note: "DOOM" },
  { lang: "sk", url: "https://slovnik.juls.savba.sk/?s=dobr%C3%BD", note: "JÚĽŠ" },
  { lang: "fi", url: "https://www.kielitoimistonsanakirja.fi/#/search/talo", note: "KTS hash" },
  { lang: "fi", url: "https://www.kotus.fi/kielitoimiston-sanakirja/", note: "kotus landing" },
  { lang: "sv", url: "https://svenska.se/saol/?id=hus", note: "SAOL id" },
  { lang: "sv", url: "https://svenska.se/saob/?id=hus", note: "SAOB" },
  { lang: "bg", url: "https://beron.mon.bg/dictionary/search?q=%D0%BA%D1%8A%D1%89%D0%B0", note: "BERON" },
  { lang: "mk", url: "https://drmj.eu/search?q=%D0%BA%D1%83%D1%87%D0%B0", note: "drmJ" },
  { lang: "ru", url: "https://orfo.ruslang.ru/search?search=%D0%B4%D0%BE%D0%BC", note: "ORFO" },
  { lang: "ru", url: "https://gramota.ru/slovari/dic/?word=%D0%B4%D0%BE%D0%BC&all=x", note: "gramota dic" },
  { lang: "uk", url: "https://lcorp.ulif.org.ua/dictua/", note: "dictua" },
  { lang: "uk", url: "https://lcorp.ulif.org.ua/dictua/#search=%D0%B4%D1%96%D0%BC", note: "dictua hash" },
  { lang: "es", url: "https://dle.rae.es/hola", note: "RAE DLE path" },
  { lang: "fr", url: "https://www.dictionnaire-academie.fr/#/recherche/maison", note: "Académie hash" },
  { lang: "bs", url: "https://rjecnik.ba/pretraga/ku%C4%87a", note: "not MASTER - skip in registry" },
];

function allowAll() {
  const set = new Set();
  for (const c of CANDIDATES) {
    try {
      set.add(new URL(c.url).hostname);
    } catch {
      /* ignore */
    }
  }
  return [...set];
}

async function main() {
  const allowed = allowAll();
  const out = [];
  for (const c of CANDIDATES) {
    // eslint-disable-next-line no-await-in-loop
    const page = await fetchAllowlistedPage(c.url, { allowedDomains: allowed, timeoutMs: 18000 });
    const plain = page.html ? htmlToPlainText(page.html).slice(0, 200) : "";
    out.push({
      lang: c.lang,
      note: c.note,
      url: c.url,
      outcome: page.outcome,
      httpStatus: page.httpStatus,
      finalUrl: page.finalUrl,
      htmlLen: page.html?.length || 0,
      plainPreview: plain,
    });
  }
  console.log(JSON.stringify({ probedAt: new Date().toISOString(), results: out }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
