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

/** Vai avots drīkst dot TRANSLATION_PAIR pierādījumu (nevis tikai meklēt kandidātus). */
function sourceQualifiesAsBilingualDictionaryEvidence(manifestRow, pageText) {
  const base = manifestSourceAllowed(manifestRow);
  if (!base.ok) return base;
  const url = manifestRow?.url || "";
  if (isForbiddenBilingualDictionaryEvidenceHost(url)) {
    return { ok: false, code: "FORBIDDEN_AUTO_TRANSLATOR_NOT_DICTIONARY_EVIDENCE" };
  }
  if (manifestRow?.platform === "glosbe" || /glosbe\.com/i.test(url)) {
    if (pageTextIsAutomaticTranslationOnly(pageText || "")) {
      return { ok: false, code: "GLOSBE_AUTOMATIC_TRANSLATION_NOT_DICTIONARY_EVIDENCE" };
    }
  }
  return { ok: true };
}

function pageTextIsAutomaticTranslationOnly(text) {
  const t = String(text || "");
  const hasAuto = AUTOMATIC_TRANSLATION_MARKERS.some((re) => re.test(t));
  const hasDictionaryPair = /dict\.cc|translation memory|phrase dictionary|vocabulary|vok/i.test(t);
  if (hasAuto && !hasDictionaryPair) return true;
  return false;
}

module.exports = {
  FORBIDDEN_TRANSLATION_AUTHORITY_HOSTS,
  FORBIDDEN_BILINGUAL_DICTIONARY_EVIDENCE_HOSTS,
  isForbiddenTranslationHost,
  isForbiddenBilingualDictionaryEvidenceHost,
  manifestSourceAllowed,
  sourceQualifiesAsBilingualDictionaryEvidence,
  pageTextIsAutomaticTranslationOnly,
};
