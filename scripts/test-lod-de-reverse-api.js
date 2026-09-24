#!/usr/bin/env node
"use strict";

const { SEARCH_PILOT_WORDS } = require("./lib/g2-a1-production-current/german-target-dictionary-search-catalog");
const {
  lookupLodGermanToLuxembourgish,
  selectLodDeReverseMatches,
  fetchLodDeSearchJson,
} = require("./lib/g2-a1-production-current/lod-de-reverse-api");

async function main() {
  const blockers = [];
  const pilots = [];

  for (const w of SEARCH_PILOT_WORDS) {
    // eslint-disable-next-line no-await-in-loop
    const r = await lookupLodGermanToLuxembourgish(w.lemma);
    pilots.push({
      lemma: w.lemma,
      found: r.found,
      lb: r.bestMatch?.wordLb || null,
      articleId: r.bestMatch?.articleId || null,
      articleUrl: r.bestMatch?.articleUrl || null,
      deTranslation: r.bestMatch?.deTranslation || null,
    });
    if (!r.found) blockers.push({ code: "PILOT_NOT_FOUND", lemma: w.lemma });
  }

  const routePayload = await fetchLodDeSearchJson("Route");
  if (!routePayload.ok) {
    blockers.push({ code: "ROUTE_FETCH_FAIL", error: routePayload.error });
  } else {
    const routeBest = selectLodDeReverseMatches(routePayload.payload, "Route")[0];
    if (!routeBest || routeBest.wordLb !== "Streck") {
      blockers.push({
        code: "ROUTE_MUST_BE_STRECK",
        got: routeBest?.wordLb || null,
        articleId: routeBest?.articleId || null,
      });
    }
    const rejected = selectLodDeReverseMatches(routePayload.payload, "Route").some(
      (m) => m.wordLb === "Munnerëffer Strooss",
    );
    if (rejected) {
      blockers.push({ code: "ROUTE_MUNNEREFFER_STROOSS_NOT_REJECTED" });
    }
    const allRoute = routePayload.payload.results || [];
    const munnerStillInRaw = allRoute.some((r) => /Munner/i.test(r.word_lb || ""));
    const munnerAccepted = pilots.find((p) => p.lemma === "Route")?.lb === "Munnerëffer Strooss";
    if (munnerAccepted) {
      blockers.push({ code: "ROUTE_ACCEPTED_MUNNEREFFER_STROOSS" });
    }
    if (munnerStillInRaw && routeBest?.wordLb === "Streck") {
      /* raw API still lists proper noun; adapter must ignore it */
    }
  }

  for (const p of pilots) {
    if (p.found && (!p.articleId || !p.articleUrl || !/\/artikel\//.test(p.articleUrl))) {
      blockers.push({ code: "MISSING_LOD_ARTICLE_URL", lemma: p.lemma });
    }
  }

  const pass = blockers.length === 0;
  console.log(JSON.stringify({ pass, blockers, pilots }, null, 2));
  process.exit(pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
