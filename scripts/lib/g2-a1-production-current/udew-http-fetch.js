#!/usr/bin/env node
"use strict";

const { execFile } = require("child_process");
const { promisify } = require("util");
const { cleanTarget } = require("./three-word-dict-extract");

const execFileAsync = promisify(execFile);

const UDEW_SEARCH_BASE =
  "https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm";

function buildUdewSearchUrl(lemma) {
  return `${UDEW_SEARCH_BASE}?input=${encodeURIComponent(lemma)}`;
}

async function fetchUdewHtml(lemma) {
  const searchUrl = buildUdewSearchUrl(lemma);
  let lastErr;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    if (attempt) await new Promise((r) => setTimeout(r, 1500 * attempt));
    try {
      const { stdout } = await execFileAsync(
        "curl",
        ["--http1.1", "-sL", "-A", "G2A1-UDEW/1.0", "--retry", "2", searchUrl],
        { maxBuffer: 8 * 1024 * 1024, timeout: 90000 },
      );
      const html = String(stdout || "");
      if (html.length >= 400) {
        return { searchUrl, finalUrl: searchUrl, html, text: stripHtmlToText(html) };
      }
      lastErr = new Error(`UDEW_EMPTY_RESPONSE len=${html.length}`);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error("UDEW_FETCH_FAILED");
}

function stripHtmlToText(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeUdewLinkText(raw) {
  return cleanTarget(
    String(raw || "")
      .replace(/\(#[0-9]+\)/g, "")
      .trim(),
  );
}

/** DE→UK: Ukrainian equivalents linked from result page. */
function extractUdewUkrainianFromHtml(html, deLemma) {
  if (!html || html.length < 200) return [];
  if (!new RegExp(`"${deLemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`, "i").test(html)) {
    if (!new RegExp(`\\b${deLemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(html)) {
      return [];
    }
  }
  const out = [];
  const linkRe =
    /<a href="\/udew\/ukrainisch_deutsch_online\.htm\?input=([^"]+)">([^<]+)<\/a>/gi;
  let m;
  while ((m = linkRe.exec(html)) !== null) {
    const input = decodeURIComponent(m[1]);
    if (!/[\u0400-\u04FF]/.test(input) && !/[\u0400-\u04FF]/.test(m[2])) continue;
    const word = decodeUdewLinkText(m[2]);
    if (word && word.length >= 2 && word.length <= 80) out.push(word);
  }
  const seen = new Set();
  return out.filter((w) => {
    const k = w.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

/** UK→DE: German gloss lines (after Ukrainian headword search). */
function extractUdewGermanFromHtml(html, deLemmaHint) {
  if (!html || html.length < 200) return [];
  const out = [];
  const pRe =
    /<P[^>]*style="[^"]*text-indent[^"]*"[^>]*>\s*<img[^>]*FLGerm[^>]*>\s*([^<]+)/gi;
  let m;
  while ((m = pRe.exec(html)) !== null) {
    const chunk = cleanTarget(m[1].split(/[;,]/)[0]);
    if (chunk && chunk.length >= 3 && chunk.length <= 40) out.push(chunk);
  }
  const strongRe = /<strong>([^<]{2,40})<\/strong>/gi;
  while ((m = strongRe.exec(html)) !== null) {
    const w = cleanTarget(m[1].replace(/"/g, ""));
    if (/^[A-Za-zÄÖÜäöüß-]+$/.test(w) && w.length >= 4) out.push(w);
  }
  if (deLemmaHint && new RegExp(`\\b${deLemmaHint}\\b`, "i").test(html)) {
    out.unshift(deLemmaHint);
  }
  const seen = new Set();
  return out.filter((w) => {
    const k = w.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function udewHasBelege(html, lemma) {
  return new RegExp(
    `Zu .*"${lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}" .*liegen [0-9]+ Belege`,
    "i",
  ).test(html);
}

/** @deprecated use buildUdewSearchUrl */
const buildUewSearchUrl = buildUdewSearchUrl;
/** @deprecated use fetchUdewHtml */
const fetchUewHtml = fetchUdewHtml;
/** @deprecated */
const extractUewUkrainianFromHtml = extractUdewUkrainianFromHtml;
/** @deprecated */
const extractUewGermanFromHtml = extractUdewGermanFromHtml;
/** @deprecated */
const uewHasBelege = udewHasBelege;

module.exports = {
  UDEW_SEARCH_BASE,
  buildUdewSearchUrl,
  fetchUdewHtml,
  extractUdewUkrainianFromHtml,
  extractUdewGermanFromHtml,
  udewHasBelege,
  buildUewSearchUrl,
  fetchUewHtml,
  extractUewUkrainianFromHtml,
  extractUewGermanFromHtml,
  uewHasBelege,
};
