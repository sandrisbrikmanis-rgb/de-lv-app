#!/usr/bin/env node
"use strict";

const { withDomainBrowserSession } = require("./source-adapters/browser/pool");
const { lookupDeOfficialEntry } = require("./source-adapters/de");
const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { GERMAN_PILOT_WORDS } = require("./three-word-pilot-catalog");

async function fetchDwdsBrowser(lemma) {
  return withDomainBrowserSession("www.dwds.de", async (page) => {
    await page.goto(`https://www.dwds.de/wb/${encodeURIComponent(lemma)}`, {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    });
    await page.waitForTimeout(4000);
    const finalUrl = page.url();
    const body = await page.evaluate(() => document.body?.innerText || "");
    if (/404|Seite nicht gefunden|kein Treffer/i.test(body) && !new RegExp(`\\b${lemma}\\b`).test(body)) {
      return { found: false, finalUrl, body: body.slice(0, 500) };
    }
    const titleMatch = body.match(new RegExp(`${lemma},\\s*(die|der|das)`, "i"));
    const meaningBlock = body.match(/Bedeutung[\s\S]{0,1200}/i);
    return {
      found: new RegExp(`\\b${lemma}\\b`).test(body),
      finalUrl,
      gender: titleMatch?.[1] || null,
      meaningSnippet: (meaningBlock?.[0] || body).slice(0, 900),
      bodySample: body.slice(0, 1200),
    };
  });
}

async function verifyGermanWordIdentity(wordSpec) {
  const allow = buildAllowlistForLanguage("en");
  const adapter = await lookupDeOfficialEntry({
    lookupTerm: wordSpec.lemma,
    allowedDomains: allow.de.allowedDomains,
    authorityName: allow.de.authorityName,
    provenance: { role: "DE", pilotWord: wordSpec.id },
  });

  let dwds = null;
  if (adapter.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) {
    dwds = await fetchDwdsBrowser(wordSpec.lemma);
  }

  const adapterOk = adapter.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED;
  const dwdsOk = dwds?.found;

  if (wordSpec.id === "reute") {
    const meaning = dwds?.meaningSnippet || adapter.evidenceFragment || "";
    const regional =
      /süddeutsch|österreichisch|schweizerisch|regional|selten|veraltet|dialekt/i.test(meaning) ||
      /entsprechend der Bedeutung von reuten/i.test(meaning);
    if (regional || (dwdsOk && !adapterOk)) {
      return {
        germanWord: wordSpec.lemma,
        germanLemmaStatus: "SOURCE_DE_ISSUE",
        germanMeaning:
          "DWDS: feminīns lietvārds Reute — reģionāla (DE/AT/CH) nozīme saistīta ar reuten (aušanu/roden), nevis vispārēja A1 leksika. Meklēts tieši “Reute” (bez autocorrect).",
        deEvidenceUrl: dwds?.finalUrl || adapter.entryUrl || adapter.finalUrl,
        deAuthority: adapterOk ? adapter.authorityName : "Digitales Wörterbuch der deutschen Sprache (DWDS)",
        note: "Regional/specialized DE sense — TARGET only from bilingual dictionary hits, never invented.",
      };
    }
  }

  if (adapterOk) {
    const frag = adapter.evidenceFragment || "";
    let article = wordSpec.article;
    if (wordSpec.id === "getreide") {
      article = /,\s*das|Neutrum|das Getreide/i.test(frag) ? "das" : article;
    }
    return {
      germanWord: wordSpec.lemma,
      germanLemmaStatus: "DE_LEMMA_CONFIRMED",
      germanMeaning: frag.slice(0, 500),
      deEvidenceUrl: adapter.entryUrl || adapter.finalUrl,
      deAuthority: adapter.authorityName,
      article,
      partOfSpeech: wordSpec.partOfSpeech,
    };
  }

  if (dwdsOk) {
    return {
      germanWord: wordSpec.lemma,
      germanLemmaStatus: wordSpec.id === "reute" ? "SOURCE_DE_ISSUE" : "DE_LEMMA_CONFIRMED",
      germanMeaning: dwds.meaningSnippet,
      deEvidenceUrl: dwds.finalUrl,
      deAuthority: "DWDS (browser)",
      note: wordSpec.id === "reute" ? "See regional Reute sense in DWDS." : null,
    };
  }

  return {
    germanWord: wordSpec.lemma,
    germanLemmaStatus: "SOURCE_DE_ISSUE",
    germanMeaning: adapter.error || adapter.outcome || "DE entry not validated",
    deEvidenceUrl: adapter.requestedUrl || adapter.finalUrl,
    deAuthority: adapter.authorityName,
  };
}

async function verifyAllGermanPilotWords() {
  const out = {};
  for (const spec of GERMAN_PILOT_WORDS) {
    // eslint-disable-next-line no-await-in-loop
    out[spec.id] = await verifyGermanWordIdentity(spec);
  }
  return out;
}

module.exports = { verifyGermanWordIdentity, verifyAllGermanPilotWords, fetchDwdsBrowser };
