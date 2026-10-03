#!/usr/bin/env node
"use strict";

const { stripQuotes } = require("./g2-a1-production-current/source-adapters/lookup-normalization");

/** App target language code → BCP 47 locale for case mapping (preauthorized cap apply). */
const APP_LANGUAGE_TO_LOCALE = Object.freeze({
  en: "en",
  da: "da",
  tr: "tr",
  gr: "el",
  ru: "ru",
  cs: "cs",
});

function localeForAppLanguage(language) {
  const lang = String(language || "").trim();
  if (!lang) return null;
  return APP_LANGUAGE_TO_LOCALE[lang] ?? null;
}

/**
 * True only when `proposed` equals `current` with first Unicode scalar lowercased per locale and
 * all other code points identical (NFC).
 */
function initialCaseOnlyChange(current, proposed, language) {
  const locale = localeForAppLanguage(language);
  if (!locale) {
    return { ok: false, code: "LOCALE_MAPPING_MISSING", language };
  }

  const cur = stripQuotes(current).normalize("NFC");
  const prop = stripQuotes(proposed).normalize("NFC");
  if (!cur || !prop) return { ok: false, code: "EMPTY" };
  if (/\s/u.test(cur) || /\s/u.test(prop)) return { ok: false, code: "MULTI_WORD_OR_WHITESPACE" };
  if (cur.length !== prop.length) return { ok: false, code: "LENGTH_MISMATCH" };
  const curCps = [...cur];
  const propCps = [...prop];
  if (curCps.length !== propCps.length) return { ok: false, code: "LENGTH_MISMATCH" };

  const diffIndices = [];
  for (let i = 0; i < curCps.length; i++) {
    if (curCps[i] !== propCps[i]) diffIndices.push(i);
  }
  if (diffIndices.length !== 1 || diffIndices[0] !== 0) {
    return { ok: false, code: "NOT_ONLY_FIRST_CHAR_DIFF", diffIndices };
  }

  const expectedLowerFirst = curCps[0].toLocaleLowerCase(locale);
  const curLower0 = curCps[0].toLocaleLowerCase(locale);
  const propLower0 = propCps[0].toLocaleLowerCase(locale);
  if (curLower0 !== propLower0) {
    return { ok: false, code: "FIRST_CHAR_NOT_SAME_LETTER_CASEFOLD" };
  }
  if (propCps[0] !== expectedLowerFirst) {
    return { ok: false, code: "PROPOSED_FIRST_CHAR_NOT_LOCALE_LOWERCASE", expected: expectedLowerFirst, got: propCps[0] };
  }
  if (curCps[0] === propCps[0]) {
    return { ok: false, code: "NO_CASE_CHANGE" };
  }
  if (curCps.slice(1).join("") !== propCps.slice(1).join("")) {
    return { ok: false, code: "TAIL_NOT_IDENTICAL" };
  }

  return { ok: true, current: cur, proposed: prop, locale, language };
}

module.exports = {
  APP_LANGUAGE_TO_LOCALE,
  localeForAppLanguage,
  initialCaseOnlyChange,
};
