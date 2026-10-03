#!/usr/bin/env node
"use strict";

/** Three German A1 pilots — lookup lemmas (without articles). */
const GERMAN_PILOTS = Object.freeze([
  {
    id: "haus",
    label: "Māja",
    deLemma: "Haus",
    deSurface: "das Haus",
    deSenseNote: "house/dwelling — not Gebäude, not Zuhause",
  },
  {
    id: "gestern",
    label: "Vakar",
    deLemma: "gestern",
    deSurface: "gestern",
    deSenseNote: "yesterday (adverb)",
  },
  {
    id: "nacht",
    label: "Nakts",
    deLemma: "Nacht",
    deSurface: "die Nacht",
    deSenseNote: "night (noun)",
  },
]);

/** Expected TARGET pilot lemmas/phrases per app language (32 TARGET). */
const TARGET_PILOT_LEMMAS = Object.freeze({
  bg: { haus: "къща", gestern: "вчера", nacht: "нощ" },
  bs: { haus: "kuća", gestern: "jučer", nacht: "noć" },
  cs: { haus: "dům", gestern: "včera", nacht: "noc" },
  da: { haus: "hus", gestern: "i går", nacht: "nat" },
  en: { haus: "house", gestern: "yesterday", nacht: "night" },
  es: { haus: "casa", gestern: "ayer", nacht: "noche" },
  et: { haus: "maja", gestern: "eile", nacht: "öö" },
  fi: { haus: "talo", gestern: "eilen", nacht: "yö" },
  fr: { haus: "maison", gestern: "hier", nacht: "nuit" },
  gr: { haus: "σπίτι", gestern: "χθες", nacht: "νύχτα" },
  hr: { haus: "kuća", gestern: "jučer", nacht: "noć" },
  hu: { haus: "ház", gestern: "tegnap", nacht: "éjszaka" },
  is: { haus: "hús", gestern: "í gær", nacht: "nótt" },
  it: { haus: "casa", gestern: "ieri", nacht: "notte" },
  lb: { haus: "Haus", gestern: "gëschter", nacht: "Nuecht" },
  lt: { haus: "namas", gestern: "vakar", nacht: "naktis" },
  lv: { haus: "māja", gestern: "vakar", nacht: "nakts" },
  mk: { haus: "куќа", gestern: "вчера", nacht: "ноќ" },
  nb: { haus: "hus", gestern: "i går", nacht: "natt" },
  nl: { haus: "huis", gestern: "gisteren", nacht: "nacht" },
  nn: { haus: "hus", gestern: "i går", nacht: "natt" },
  pl: { haus: "dom", gestern: "wczoraj", nacht: "noc" },
  pt: { haus: "casa", gestern: "ontem", nacht: "noite" },
  ro: { haus: "casă", gestern: "ieri", nacht: "noapte" },
  ru: { haus: "дом", gestern: "вчера", nacht: "ночь" },
  sk: { haus: "dom", gestern: "včera", nacht: "noc" },
  sl: { haus: "hiša", gestern: "včeraj", nacht: "noč" },
  sq: { haus: "shtëpi", gestern: "dje", nacht: "natë" },
  sr: { haus: "кућа", gestern: "јуче", nacht: "ноћ" },
  sv: { haus: "hus", gestern: "i går", nacht: "natt" },
  tr: { haus: "ev", gestern: "dün", nacht: "gece" },
  uk: { haus: "дім", gestern: "вчора", nacht: "ніч" },
});

const ACCESS_RESULT = Object.freeze({
  TRANSLATION_PAIR_VERIFIED: "TRANSLATION_PAIR_VERIFIED",
  TARGET_LEMMA_ONLY: "TARGET_LEMMA_ONLY",
  PARTIAL_2_OF_3: "PARTIAL_2_OF_3",
  PARTIAL_1_OF_3: "PARTIAL_1_OF_3",
  SOURCE_ACCESS_BLOCKED: "SOURCE_ACCESS_BLOCKED",
  ENTRY_NOT_FOUND: "ENTRY_NOT_FOUND",
  SOURCE_NOT_SUITABLE_FOR_TRANSLATION_CHECK: "SOURCE_NOT_SUITABLE_FOR_TRANSLATION_CHECK",
});

const TARGET_APP_CODES = Object.freeze(Object.keys(TARGET_PILOT_LEMMAS));

function expectedTarget(appCode, pilotId) {
  return TARGET_PILOT_LEMMAS[appCode]?.[pilotId] || null;
}

module.exports = {
  GERMAN_PILOTS,
  TARGET_PILOT_LEMMAS,
  TARGET_APP_CODES,
  ACCESS_RESULT,
  expectedTarget,
};
