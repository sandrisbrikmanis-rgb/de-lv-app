#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const decisionsPath = path.join(
  __dirname,
  "data/g2-a1-owner-pending/LRB-034-decisions.json"
);
const decisions = JSON.parse(fs.readFileSync(decisionsPath, "utf8"));

function patch(key, mutator, note) {
  const row = decisions[key];
  if (!row) throw new Error(`Missing key: ${key}`);
  const fields = JSON.parse(row.owner_new);
  mutator(fields);
  row.owner_new = JSON.stringify(fields);
  if (note) row.owner_note = note;
}

patch(
  "g2/a1/is|kein|idx:308|lv, study|WRONG_LANGUAGE|gpt-5.6-luna",
  (f) => {
    f.lv = "enginn • engin";
    f["study.translation"] = "enginn • engin";
    f["study.explanation"] = [
      "Meginhugsun: kein er neitunargreinir sem neitar nafnorð.",
      "kein beygist eins og ein: kein/keine/keinen/keiner.",
      "Með teljanlegum nafnorðum þýðir kein enginn (kein Mensch = enginn maður).",
      "Ich habe kein Geld. = Ég á enga peninga.",
      "kein neitar nafnorðið; nicht neitar sögn eða setningu.",
    ];
    f["study.examples[0].lv"] = "Ég á enga peninga.";
    f["study.examples[1].lv"] = "Það er ekki meiri mjólk.";
    f["study.examples[2].lv"] = "Enginn var þarna.";
    f["study.examples[3].lv"] = "Ég á engan tíma.";
    f["study.examples[4].lv"] = "Þetta er ekki vandamál.";
    f["study.examples[5].lv"] = "Við eigum engin börn.";
    f["study.tip[0]"] =
      "kein neitar nafnorðið (kein + nafnorð), nicht neitar sögn eða setninguna.";
    f["study.tip[1]"] = "kein beygist eins og ein: kein/keine/keinen/keiner.";
    f["study.important[0]"] =
      "kein + nafnorð = enginn/engin/ekkert, ekki *ekki einn X.";
    f["study.important[1]"] =
      "Rangt: Ich habe nicht ein Geld. → Rétt: Ich habe kein Geld.";
  },
  "IS kein gala: neitunarartikel→neitunargreinir; ex[3] natural Ich habe kein Geld IS; no kein Geld=engir peningar mapping. DE untouched."
);

patch(
  "g2/a1/is|können|idx:319|lv,study|TARGET_LANGUAGE_MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f["study.comparison[0].example"] = "Ich kann schwimmen. = Ég get synt.";
  },
  "IS können gala: cmp[0]→Ég get synt for Ich kann schwimmen; geta/kunna semantics checked. DE untouched."
);

patch(
  "g2/a1/is|lang|idx:352|lv,study|TARGET_LANGUAGE_MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f.lv = "langur • langvarandi";
    f["study.translation"] = "langur • langvarandi";
    f["study.explanation"] = [
      "Meginhugsun: lang getur þýtt langur í rúmi eða langvarandi í tíma.",
      "Þegar talað er um stærð eða lengd, lang = langur/langt (ein langer Tisch = langt borð).",
      "Þegar talað er um tímalengd, lang = langvarandi (ein langer Tag = langvarandi dagur).",
      "Í orðasambandinu den ganzen Tag lang merkir allan daginn.",
      "Á íslensku: langur/langt um mál; langvarandi um tíma.",
    ];
    f["study.examples[0].lv"] = "Borðið er mjög langt.";
    f["study.examples[1].lv"] = "Myndin var langvarandi.";
    f["study.examples[2].lv"] = "Hversu lengi tekur það?";
    f["study.examples[3].lv"] = "Hún er með langt hár.";
    f["study.examples[4].lv"] = "Ég hef beðið langvarandi.";
    f["study.examples[5].lv"] = "Allan daginn.";
    f["study.tip[0]"] = "Um mál eða fjarlægð (hár, leið, borð) → langur/langt.";
    f["study.tip[1]"] = "Um tíma (dagur, bið, kvikmynd) → langvarandi.";
    f["study.important[0]"] =
      "lang = langur/langt (mál) EÐA langvarandi (tími) — fer eftir samhengi.";
    f["study.important[1]"] =
      "wie lange = hversu lengi (spurning um tíma, ekki mál).";
  },
  "IS lang gala: lv langur•langvarandi; spatial langt borð + duration langvarandi throughout. DE untouched."
);

patch(
  "g2/a1/is|laufen|idx:357|lv|LANGUAGE_MISMATCH|gpt-5.6-luna",
  (f) => {
    f.lv = "hlaupa • virka";
  },
  "IS laufen gala: ganga→virka for machine/system run; person run=hlaupa. DE untouched."
);

patch(
  "g2/a1/is|laut|idx:358|lv|TRANSLATION_ERROR|gpt-5.6-luna",
  (f) => {
    f.lv = "hávær";
  },
  "IS laut gala: hátt→hávær for skaļš loud adj; Laut noun hljóð unchanged. DE untouched."
);

patch(
  "g2/a1/is|kosten|idx:320|lv,study|TARGET_LANGUAGE_MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f.lv = "kosta";
    f["study.translation"] = "kosta";
    f["study.explanation"] = [
      "Meginhugsun: kosten þýðir að kosta — um verð á vöru.",
      "Notað þegar spurt er eða sagt hversu mikið eitthvað kostar, ekki þegar maður greiðir.",
      "Verðspurningar byrja oft á Was kostet...?",
      "Das kostet 5 Euro. = Það kostar 5 evrur.",
      "Þegar einstaklingur greiðir, nota bezahlen eða zahlen (= borga).",
    ];
    f["study.examples[0].lv"] = "Það kostar 5 evrur.";
    f["study.examples[1].lv"] = "Hvað kostar það?";
    f["study.examples[2].lv"] = "Hversu mikið kostar peysan?";
    f["study.examples[3].lv"] = "Maturinn kostar ekki mikið.";
    f["study.examples[4].lv"] = "Ég borga reikninginn.";
    f["study.examples[5].lv"] = "Get ég greitt með reiðufé?";
    f["study.examples[6].lv"] = "Hann borgar með korti.";
    f["study.examples[7].lv"] = "Ég borga strax.";
    f["study.comparison[0].meaning"] = "kosta (verð)";
    f["study.comparison[0].example"] = "Das kostet 5 Euro. = Það kostar 5 evrur.";
    f["study.comparison[1].meaning"] = "borga";
    f["study.comparison[1].example"] =
      "Ich bezahle die Rechnung. = Ég borga reikninginn.";
    f["study.comparison[2].meaning"] = "borga";
    f["study.comparison[2].example"] =
      "Kann ich bar zahlen? = Get ég greitt með reiðufé?";
    f["study.comparison[3].meaning"] = "Hvað kostar...?";
    f["study.comparison[3].example"] = "Was kostet das Buch? = Hvað kostar bókin?";
    f["study.tip[0]"] = "Mundu: spurning um verð → kosten (Was kostet das?).";
    f["study.tip[1]"] =
      "Mundu: greiðsla → bezahlen / zahlen (Ich bezahle die Rechnung.).";
    f["study.important[0]"] =
      "kosten og bezahlen eru ekki samheiti: kosten = hvað kostar; bezahlen = borga peninga.";
    f["study.important[1]"] =
      "Á íslensku er oft notað borga í báðum tilvikum, en á þýsku verður að velja eftir aðstæðum.";
  },
  "IS kosten gala: full composite audit kosta vs borga; no ET/NO residue. DE untouched."
);

patch(
  "g2/a1/is|Laden|idx:349|lv,study|TARGET_LANGUAGE_MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f.lv = "verslun";
    f["study.translation"] = "verslun";
    f["study.explanation"] = [
      "Meginhugsun: der Laden með stórum staf og grein der er nafnorð — verslun.",
      "laden með litlum staf er sögn — hlaða.",
      "Der Laden notað um litla verslun í daglegu lífi (im Laden einkaufen = kaupa í verslun).",
      "Fleirtala: die Läden.",
    ];
    f["study.examples[0].lv"] = "Ég fer í verslunina.";
    f["study.examples[1].lv"] = "Verslunin er lokuð.";
    f["study.examples[2].lv"] = "Hér eru margar verslanir.";
    f["study.examples[3].lv"] = "Ég verð að hlaða símann.";
    f["study.tip[0]"] = "der Laden með stórum staf — nafnorð (verslun).";
    f["study.tip[1]"] = "laden með litlum staf — sögn (hlaða).";
    f["study.important[0]"] = "der Laden = verslun (nafnorð).";
    f["study.important[1]"] = "laden = hlaða (sögn).";
    f["study.important[2]"] = "Fleirtala: die Läden.";
  },
  "IS Laden gala: full composite audit verslun noun vs hlaða verb; no ET/NO residue. DE untouched."
);

fs.writeFileSync(decisionsPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(JSON.stringify({ applied: 7, path: decisionsPath }, null, 2));
