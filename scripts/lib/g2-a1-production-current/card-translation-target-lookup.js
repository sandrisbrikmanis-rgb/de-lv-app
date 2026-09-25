#!/usr/bin/env node
"use strict";

const { stripQuotes } = require("./source-adapters/lookup-normalization");

function targetLookupVariants(provenLemma, currentTarget) {
  const seen = new Set();
  const out = [];
  const add = (v) => {
    const s = stripQuotes(String(v || "").trim());
    if (!s || s.length > 80) return;
    const key = s.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    out.push(s);
  };
  add(provenLemma);
  add(currentTarget);
  if (provenLemma) add(String(provenLemma).toLowerCase());
  if (currentTarget) add(String(currentTarget).toLowerCase());
  const cur = stripQuotes(currentTarget || "");
  if (cur.includes(" ")) add(cur.split(/\s+/)[0]);
  return out;
}

module.exports = {
  targetLookupVariants,
};
