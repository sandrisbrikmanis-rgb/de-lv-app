#!/usr/bin/env node
"use strict";

const { htmlToPlainText } = require("../http-page");

function normalizeCompare(a, b) {
  return String(a || "")
    .trim()
    .toLowerCase()
    .normalize("NFC") ===
    String(b || "")
      .trim()
      .toLowerCase()
      .normalize("NFC");
}

function headwordMatch(pageHead, expected) {
  if (!pageHead || !expected) return false;
  return normalizeCompare(pageHead, expected);
}

function parseOxfordLearners(html, expectedLemma) {
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] || "";
  const head = title.split(" noun")[0].split(" verb")[0].split(" adjective")[0].trim();
  if (!headwordMatch(head, expectedLemma)) return null;
  const def = html.match(/class="def"[^>]*>([\s\S]*?)<\/span>/i);
  const fragment = def ? htmlToPlainText(def[1]) : htmlToPlainText(html.match(/class="webtop-g"[\s\S]{0,4000}/i)?.[0] || "").slice(0, 1200);
  if (fragment.length < 25) return null;
  return { headword: head, fragment, entryOrRule: `OALD entry: ${head}` };
}

function parsePriruckaUjc(html, expected) {
  if (!html.includes("Internetová jazyková příručka")) return null;
  if (/nebyl nalezen|Výraz nebyl nalezen/i.test(html)) return null;
  const link = html.match(new RegExp(`https://prirucka\\.ujc\\.cas\\.cz/\\?id=\\d+[^'"]*`, "i"));
  const hasLemma =
    html.includes(`>${expected}<`) ||
    html.includes(`&bdquo;${expected}&ldquo;`) ||
    html.includes(`lemma=${expected}`);
  if (!link && !hasLemma) return null;
  if (!html.includes("Heslové slovo") && !link) return null;
  const fragment = htmlToPlainText(html.match(/<div id='main'[\s\S]{0,8000}/i)?.[0] || html).slice(0, 1200);
  if (fragment.length < 40) return null;
  return {
    headword: expected,
    fragment,
    entryOrRule: `Příručka ÚJČ: ${expected}`,
    entryUrl: link ? link[0] : null,
  };
}

function parseJulsSkPortal(html, expected) {
  const re = new RegExp(`>${expected}<`, "i");
  if (!re.test(html) && !html.toLowerCase().includes(String(expected).toLowerCase())) return null;
  const fragment = htmlToPlainText(html.match(/<main[\s\S]{0,6000}/i)?.[0] || html).slice(0, 1200);
  if (fragment.length < 30) return null;
  return { headword: expected, fragment, entryOrRule: `JÚĽŠ slovníkový portál: ${expected}` };
}

function parseOrfoRuslang(html, expected) {
  if (!html.includes("orfo.ruslang.ru")) return null;
  const head = html.match(/class="[^"]*result[^"]*"[\s\S]{0,500}/i);
  const fragment = htmlToPlainText(head ? head[0] : html).slice(0, 1200);
  if (!fragment.toLowerCase().includes(String(expected).toLowerCase())) return null;
  if (fragment.length < 25) return null;
  return { headword: expected, fragment, entryOrRule: `ORFO: ${expected}` };
}

function parseFranSi(html, expected) {
  const plain = htmlToPlainText(html);
  if (/Ni zadetkov|ni najden|no results/i.test(plain)) return null;
  if (/Fran\/iskanje\//i.test(html) && !/class="[^"]*entry/i.test(html)) return null;
  const h = html.match(/class="[^"]*entry[^"]*"[\s\S]{0,3000}/i);
  const fragment = htmlToPlainText(h ? h[0] : plain).slice(0, 1200);
  const esc = String(expected).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!new RegExp(`\\b${esc}\\b`, "iu").test(fragment)) return null;
  if (fragment.length < 40) return null;
  return { headword: expected, fragment, entryOrRule: `Fran.si: ${expected}` };
}

function parseGreekTriantafyllides(html, expected) {
  const plain = htmlToPlainText(html);
  const esc = String(expected).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const idx = plain.search(new RegExp(esc, "iu"));
  if (idx < 0) return null;
  const window = plain.slice(Math.max(0, idx - 40), idx + 900);
  if (/0 εγγραφ|δεν βρέθηκ|no entries/i.test(window)) return null;
  const hasEntryShape =
    /\[sp/i.test(window) ||
    /Ο\d+\s*:/.test(window) ||
    /κτίσμα|ουσιαστικό|ρήμα/i.test(window);
  if (!hasEntryShape) return null;
  if (window.length < 40) return null;
  return { headword: expected, fragment: window, entryOrRule: `Τριανταφυλλίδης: ${expected}` };
}

function parseTitleHeadword(html, expected) {
  const plain = htmlToPlainText(html);
  if (/not found|nebyl nalezen|nije pronađen|ingen treff|ei tuloksia|bulunamad/i.test(plain)) return null;
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] || "";
  const head = title.split("|")[0].split("-")[0].split("–")[0].trim();
  if (!headwordMatch(head, expected)) {
    const esc = String(expected).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!new RegExp(`\\b${esc}\\b`, "iu").test(plain.slice(0, 4000))) return null;
  }
  const fragment = plain.slice(0, 1200);
  if (fragment.length < 30) return null;
  return { headword: expected, fragment, entryOrRule: `Entry: ${expected}` };
}

module.exports = {
  normalizeCompare,
  headwordMatch,
  parseOxfordLearners,
  parsePriruckaUjc,
  parseJulsSkPortal,
  parseOrfoRuslang,
  parseFranSi,
  parseGreekTriantafyllides,
  parseTitleHeadword,
  htmlToPlainText,
};
