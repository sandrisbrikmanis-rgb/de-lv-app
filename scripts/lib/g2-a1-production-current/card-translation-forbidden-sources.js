#!/usr/bin/env node
"use strict";

/** Domēni / avoti, ko nedrīkst lietot kā tulkojuma autoritāti kartes auditā. */
const FORBIDDEN_TRANSLATION_AUTHORITY_HOSTS = Object.freeze([
  "translate.google.com",
  "translate.googleapis.com",
  "deepl.com",
  "www.deepl.com",
  "microsofttranslator.com",
  "api.cognitive.microsofttranslator.com",
  "reverso.net",
  "linguee.com",
  "mymemory.translated.net",
]);

/** Nedrīkst izmantot kā divvalodu vārdnīcas pierādījumu (MASTER §7.162.4). */
const FORBIDDEN_BILINGUAL_DICTIONARY_EVIDENCE_HOSTS = Object.freeze([...FORBIDDEN_TRANSLATION_AUTHORITY_HOSTS]);

const AUTOMATIC_TRANSLATION_MARKERS = Object.freeze([
  /automatic translations/i,
  /algorithmically generated/i,
  /machine translation/i,
  /google translate/i,
  /glosbe translate/i,
  /deepL/i,
  /translated by/i,
  /translation memory only/i,
]);

function isForbiddenTranslationHost(urlString) {
  try {
    const host = new URL(urlString).hostname.toLowerCase();
    return FORBIDDEN_TRANSLATION_AUTHORITY_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

function isForbiddenBilingualDictionaryEvidenceHost(urlString) {
  try {
    const host = new URL(urlString).hostname.toLowerCase();
    return FORBIDDEN_BILINGUAL_DICTIONARY_EVIDENCE_HOSTS.some(
      (h) => host === h || host.endsWith(`.${h}`),
    );
  } catch {
    return false;
  }
}

function manifestSourceAllowed(manifestRow) {
  if (!manifestRow?.url) return { ok: false, code: "MISSING_MANIFEST_URL" };
  if (isForbiddenTranslationHost(manifestRow.url)) {
    return { ok: false, code: "FORBIDDEN_AUTO_TRANSLATOR_HOST" };
  }
  if (manifestRow.type === "AUTOMATIC_TRANSLATOR_ONLY") {
    return { ok: false, code: "AUTOMATIC_TRANSLATOR_ONLY_TYPE" };
  }
  return { ok: true };
}

function glosbeTextBeforeAutomaticSection(text) {
  const t = String(text || "");
  const autoIdx = t.search(/AUTOMATIC TRANSLATIONS|SHOW ALGORITHMICALLY GENERATED TRANSLATIONS/i);
  return autoIdx >= 0 ? t.slice(0, autoIdx) : t;
}

/**
 * Glosbe: tikai skaidri identificēts vārdnīcas ieraksts (pirms automātiskās sadaļas).
 */
function glosbePageHasIdentifiedDictionaryEntry(pageText, lemma) {
  const lemmaStr = String(lemma || "").trim();
  if (!lemmaStr) return false;
  const preAuto = glosbeTextBeforeAutomaticSection(pageText);
  if (/translation memory only/i.test(preAuto)) return false;
  if (/glosbe translate/i.test(preAuto)) return false;

  let extractGlosbeDictionarySection;
  try {
    ({ extractGlosbeDictionarySection } = require("./german-target-dictionary-search-probe"));
  } catch {
    return false;
  }
  if (extractGlosbeDictionarySection(preAuto, lemmaStr).length > 0) return true;
  if (/phrase dictionary/i.test(preAuto) && new RegExp(`\\b${lemmaStr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(preAuto)) {
    return true;
  }
  return false;
}

function pageTextIsAutomaticTranslationOnly(text, lemma = "") {
  const t = String(text || "");
  if (/translation memory only/i.test(t)) return true;
  if (/google translate/i.test(t)) return true;
  if (/glosbe translate/i.test(t)) return true;
  if (/algorithmically generated translations/i.test(t)) return true;

  const hasAutoSection = /automatic translations/i.test(t);
  if (!hasAutoSection) {
    return AUTOMATIC_TRANSLATION_MARKERS.some((re) => re.test(t) && !/phrase dictionary/i.test(t));
  }

  if (lemma && /glosbe/i.test(t)) {
    return !glosbePageHasIdentifiedDictionaryEntry(t, lemma);
  }

  return true;
}

/** Vai avots drīkst dot TRANSLATION_PAIR pierādījumu (nevis tikai meklēt kandidātus). */
function sourceQualifiesAsBilingualDictionaryEvidence(manifestRow, pageText, lemma = "") {
  const base = manifestSourceAllowed(manifestRow);
  if (!base.ok) return base;
  const url = manifestRow?.url || "";
  if (isForbiddenBilingualDictionaryEvidenceHost(url)) {
    return { ok: false, code: "FORBIDDEN_AUTO_TRANSLATOR_NOT_DICTIONARY_EVIDENCE" };
  }
  if (pageTextIsAutomaticTranslationOnly(pageText || "", lemma)) {
    return { ok: false, code: "AUTOMATIC_TRANSLATION_NOT_DICTIONARY_EVIDENCE" };
  }
  if (manifestRow?.platform === "glosbe" || /glosbe\.com/i.test(url)) {
    if (!glosbePageHasIdentifiedDictionaryEntry(pageText || "", lemma)) {
      return { ok: false, code: "GLOSBE_NO_IDENTIFIED_DICTIONARY_ENTRY" };
    }
  }
  return { ok: true };
}

module.exports = {
  FORBIDDEN_TRANSLATION_AUTHORITY_HOSTS,
  FORBIDDEN_BILINGUAL_DICTIONARY_EVIDENCE_HOSTS,
  isForbiddenTranslationHost,
  isForbiddenBilingualDictionaryEvidenceHost,
  manifestSourceAllowed,
  sourceQualifiesAsBilingualDictionaryEvidence,
  pageTextIsAutomaticTranslationOnly,
  glosbePageHasIdentifiedDictionaryEntry,
  glosbeTextBeforeAutomaticSection,
};
