#!/usr/bin/env node
"use strict";

function stripQuotes(s) {
  return String(s || "")
    .replace(/^["'«»„“]+|["'«»„“]+$/g, "")
    .trim();
}

function firstToken(s) {
  const t = stripQuotes(s).split(/\s+/).filter(Boolean);
  return t[0] || "";
}

function normalizeDeLemma(fieldRequest) {
  const raw = fieldRequest.cardContext?.de || fieldRequest.DE || fieldRequest.cardId || "";
  const lemma = stripQuotes(raw).toLowerCase();
  return {
    originalCurrent: fieldRequest.CURRENT,
    rawQuery: raw,
    lookupTerm: lemma,
    normalizedHeadword: lemma,
    normalizationReason: "DE card headword / cardId lemma for dictionary entry lookup",
  };
}

function normalizeTargetLookup(fieldRequest) {
  const original = stripQuotes(fieldRequest.CURRENT || "");
  const path = fieldRequest.fieldPath || "";
  let lookupTerm = original;
  let reason = "Use CURRENT as primary lookup surface form";

  if (path.includes(".study") && original.length > 80) {
    lookupTerm = firstToken(original);
    reason = "Study field sentence — first token only for dictionary lookup (full CURRENT retained)";
  } else if (path.includes(".example") && /\s/.test(original)) {
    lookupTerm = firstToken(original);
    reason = "Example sentence field — first lexical token for entry lookup (full CURRENT retained for context)";
  } else if (/\s/.test(original) && original.length > 40) {
    lookupTerm = firstToken(original);
    reason = "Long multi-word CURRENT — first token for entry lookup";
  } else if (path.includes(".native")) {
    lookupTerm = original;
    reason = "Native headword field — lookup CURRENT form";
  }

  return {
    originalCurrent: fieldRequest.CURRENT,
    rawQuery: original,
    lookupTerm: stripQuotes(lookupTerm),
    normalizedHeadword: stripQuotes(lookupTerm),
    normalizationReason: reason,
  };
}

module.exports = {
  normalizeDeLemma,
  normalizeTargetLookup,
  stripQuotes,
  firstToken,
};
