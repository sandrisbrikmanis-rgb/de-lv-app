#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { probePilotWord } = require("./lib/g2-a1-production-current/german-target-dictionary-search-probe");

const JSON_PATH = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-cs-sk-uk-pilot/pdf-bilingual-dictionary-cs-sk-uk-modern-sources.json",
);

const DE_LEMMAS = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];
const REVERSE = {
  cs: { Haus: "dům", arbeiten: "pracovat", Kleingeld: "drobné", bewirten: "pohostit", Grenzkonflikt: "pohraniční spor", Machtgier: "touha po moci" },
  sk: { Haus: "dom", arbeiten: "pracovať", Kleingeld: "drobné", bewirten: "pohostiť", Grenzkonflikt: "hraničný konflikt", Machtgier: "túžba po moci" },
  uk: { Haus: "будинок", arbeiten: "працювати", Kleingeld: "дрібні", bewirten: "гостувати", Grenzkonflikt: "прикордонний конфлікт", Machtgier: "прагнення до влади" },
};

const DICT_SOURCES = [
  { id: "dict-cc-de-cs", lang: "cs", url: "https://csde.dict.cc/", reverse: false },
  { id: "dict-cc-cs-de", lang: "cs", url: "https://decs.dict.cc/", reverse: true },
  { id: "dict-cc-de-sk", lang: "sk", url: "https://desk.dict.cc/", reverse: false },
  { id: "dict-cc-sk-de", lang: "sk", url: "https://sk-de.dict.cc/", reverse: true },
  { id: "dict-cc-de-uk", lang: "uk", url: "https://deuk.dict.cc/", reverse: false },
  { id: "dict-cc-uk-de", lang: "uk", url: "https://ukde.dict.cc/", reverse: true },
];

async function main() {
  const report = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  for (const ds of DICT_SOURCES) {
    const src = report.sources.find((s) => s.id === ds.id);
    if (!src) continue;
    const pilots = [];
    for (const deLemma of DE_LEMMAS) {
      const queryLemma = ds.reverse ? REVERSE[ds.lang][deLemma] : deLemma;
      const candidate = {
        id: ds.id,
        appCode: ds.lang,
        url: ds.url,
        name: src.name,
        languagePair: src.direction,
        access: "PUBLIC_BROWSER_SESSION",
        type: "COMMUNITY_BILINGUAL_DICT_CC",
      };
      const probeLemma = ds.reverse ? queryLemma : deLemma;
      const result = await probePilotWord(candidate, probeLemma, ds.lang);
      pilots.push({
        deLemma,
        queryLemma,
        found: result.pilotStatus === "FOUND",
        targetGloss: result.sampleTranslation
          ? ds.reverse
            ? `${result.sampleTranslation} → ${deLemma}`
            : [result.sampleTranslation, ...(result.alternativeSamples || [])].join("; ")
          : null,
        entryUrl: result.resultUrl,
        error: result.pilotStatus === "FOUND" ? null : result.note,
      });
    }
    src.pilots = pilots;
    src.pilotHitCount = pilots.filter((p) => p.found).length;
    src.status =
      src.pilotHitCount >= 4 ? "VERIFIED_USABLE_DIGITAL" : src.pilotHitCount >= 1 ? "PARTIAL" : "NOT_USABLE";
    console.log(ds.id, src.pilotHitCount, src.status);
  }
  fs.writeFileSync(JSON_PATH, `${JSON.stringify(report, null, 2)}\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
