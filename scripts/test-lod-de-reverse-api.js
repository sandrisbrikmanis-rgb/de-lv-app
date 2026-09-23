#!/usr/bin/env node
"use strict";

const { SEARCH_PILOT_WORDS } = require("./lib/g2-a1-production-current/german-target-dictionary-search-catalog");
const { lookupLodGermanToLuxembourgish } = require("./lib/g2-a1-production-current/lod-de-reverse-api");

async function main() {
  const rows = [];
  for (const w of SEARCH_PILOT_WORDS) {
    // eslint-disable-next-line no-await-in-loop
    const r = await lookupLodGermanToLuxembourgish(w.lemma);
    rows.push({ lemma: w.lemma, found: r.found, lb: r.lbHeadwords?.[0] || null });
  }
  const pass = rows.every((r) => r.found);
  console.log(JSON.stringify({ pass, pilots: rows }, null, 2));
  process.exit(pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
