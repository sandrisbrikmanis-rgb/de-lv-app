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

const AUTOMATIC_TRANSLATION_MARKERS = Object.freeze([
  /automatic translations/i,
  /algorithmically generated/i,
  /machine translation/i,
  /google translate/i,
  /deepL/i,
]);

function isForbiddenTranslationHost(urlString) {
  try {
    const host = new URL(urlString).hostname.toLowerCase();
    return FORBIDDEN_TRANSLATION_AUTHORITY_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
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

function pageTextIsAutomaticTranslationOnly(text) {
  const t = String(text || "");
  const hasAuto = AUTOMATIC_TRANSLATION_MARKERS.some((re) => re.test(t));
  const hasDictionaryPair = /dict\.cc|translation memory|phrase dictionary|vocabulary|vok/i.test(t);
  if (hasAuto && !hasDictionaryPair) return true;
  return false;
}

module.exports = {
  FORBIDDEN_TRANSLATION_AUTHORITY_HOSTS,
  isForbiddenTranslationHost,
  manifestSourceAllowed,
  pageTextIsAutomaticTranslationOnly,
};
