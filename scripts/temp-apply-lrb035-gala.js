#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const decisionsPath = path.join(
  __dirname,
  "data/g2-a1-owner-pending/LRB-035-decisions.json"
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
  "g2/a1/is|leise|idx:368|lv, study|MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f.lv = "þögull • hljóðlátur";
    f["study.translation"] = "þögull • hljóðlátur";
    f["study.explanation"] = [
      "Meginhugsun: leise lýsir lágri hljóðstyrk eða rólegri rödd.",
      "Leise þýðir oft þögult eða með litlum hljóði.",
      "Oft notað um rödd, hljóð eða tónlist.",
      "Leise lýsir lítilli hljóðstyrk eða rólegu tali.",
    ];
    f["study.examples[0].lv"] = "Vinsamlegast vertu hljóðlátur.";
    f["study.examples[1].lv"] = "Ekki tala svona hátt.";
    f["study.examples[2].lv"] = "Tónlistin er hljóðlát.";
    f["study.examples[3].lv"] = "Talaðu hljóðlega, takk.";
    f["study.tip[0]"] = "leise = þögull / hljóðlátur";
    f["study.tip[1]"] = "Notaðu leise þegar samhengið passar við þessa merkingu.";
    f["study.important[0]"] = "leise = þögull rödd/hljóð.";
    f["study.important[1]"] = "leise = hljóðstyrkur.";
    f["study.important[2]"] = "Þögult eða með litlum hljóði.";
  },
  "IS leise gala: lv þögull•hljóðlátur; Bitte sei leise→Vertu hljóðlátur; dedup ex[1]. DE untouched."
);

patch(
  "g2/a1/is|lieb|idx:373|lv|MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f.lv = "elskanlegur • kær";
  },
  "IS lieb gala: kæra→kær for mīļš dear adj. DE untouched."
);

patch(
  "g2/a1/is|liegen|idx:377|lv, study|MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f.lv = "vera staðsettur • liggja";
    f["study.translation"] = "vera staðsettur • liggja";
    f["study.explanation"] = [
      "Meginhugsun: liegen þýðir að vera staðsettur eða liggja lárétt.",
      "Fyrir hlut þýðir liegen að hann liggur einhvers staðar.",
      "Fyrir manneskju getur liegen þýtt að liggja, en ekki endilega sofa.",
      "schlafen = sofa; legen = leggja eitthvað niður.",
    ];
    f["study.examples[0].lv"] = "Bókin liggur á borðinu.";
    f["study.examples[1].lv"] = "Síminn minn liggur í bílnum.";
    f["study.examples[2].lv"] = "Hann liggur í rúminu.";
    f["study.examples[3].lv"] = "Ég legg bókina á borðið.";
    f["study.comparison[0].meaning"] = "vera staðsett / liggja";
    f["study.comparison[0].example"] = "Das Buch liegt auf dem Tisch. – Bókin liggur á borðinu.";
    f["study.comparison[1].meaning"] = "leggja";
    f["study.comparison[1].example"] =
      "Ich lege das Buch auf den Tisch. – Ég legg bókina á borðið.";
    f["study.comparison[2].meaning"] = "sofa";
    f["study.comparison[2].example"] = "Er schläft im Bett. – Hann sefur í rúminu.";
    f["study.comparison[3].meaning"] = "standa";
    f["study.comparison[3].example"] = "Die Flasche steht auf dem Tisch. – Flaskan stendur á borðinu.";
    f["study.tip.text"] =
      "Mundu: hlutur er þegar á stað → liegen; þú setur hann niður → legen; sofa → schlafen.";
    f["study.important[0]"] = "liegen sýnir stöðu eða staðsetningu.";
    f["study.important[1]"] = "legen sýnir athöfn: einhver setur eitthvað niður.";
    f["study.important[2]"] = "liegen er ekki sama og schlafen (sofa).";
  },
  "IS liegen gala: vera staðsettur•liggja; liegen/legen/schlafen distinction in ex+cmp. DE untouched."
);

patch(
  "g2/a1/is|mit|idx:408|lv; study.explanation; study.important|TARGET_LANGUAGE_CORRUPTION|gpt-5.6-luna",
  (f) => {
    f.lv = "með";
    f["study.translation"] = "með";
    f["study.explanation"] = [
      "Meginhugsun: mit þýðir með eða -með.",
      "Notað þegar einhver fer eða gerir eitthvað ásamt einhverju eða einhverjum.",
      "Með samgöngum: mit dem Bus, mit dem Auto.",
      "A1 stig: mjög algengar setningar eru mit dem Bus, mit dem Auto og mit dir.",
    ];
    f["study.important[0]"] =
      "mit stýrir þágufalli: mit dem Bus, mit der Mutter, mit dir.";
    f["study.important[1]"] =
      "Kommst du mit? þýðir Viltu koma með mér?";
    f["study.tip.text"] = "Mundu: mit + þágufall → með + þágufall.";
  },
  "IS mit gala: full card með; þágufall not þolfall; no ET/NO residue. DE untouched."
);

patch(
  "g2/a1/is|Mal|idx:390|lv, study|MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f.lv = "skipti";
    f["study.translation"] = "skipti";
    f["study.explanation"] = [
      "Meginhugsun: das Mal þýðir skipti eða sinni.",
      "Oft notað með tölum: ein Mal, zwei Mal, drei Mal.",
      "Með röðunartölu: das erste Mal, das zweite Mal.",
      "Ekki rugla við smáorðið mal (Komm mal her!) — það er samtalsorð, ekki nafnorð.",
    ];
    f["study.examples[0].lv"] = "Í fyrsta skipti var erfitt.";
    f["study.examples[1].lv"] = "Ég hef verið í Berlín tvisvar.";
    f["study.examples[2].lv"] = "Einu sinni nægir.";
    f["study.examples[3].lv"] = "Enn einu sinni, takk!";
    f["study.tip.text"] =
      "Mundu: das Mal = skipti (nafnorð); mal án greinis = samtalsorð/partikla.";
    f["study.important[0]"] = "das Mal / die Male — nafnorð með greini.";
    f["study.important[1]"] = "ein Mal, zwei Mal — telur endurtekningar.";
    f["study.important[2]"] =
      "mal án greinis (Komm mal her!) er ekki það sama og das Mal.";
  },
  "IS Mal gala: das Mal=skipti; mal án greinis=samtalsorð; natural IS examples. DE untouched."
);

patch(
  "g2/a1/is|mögen|idx:413|lv; study|TARGET_LANGUAGE_CORRUPTION|gpt-5.6-luna",
  (f) => {
    f.lv = "líka við";
    f["study.translation"] = "líka við";
    f["study.explanation"] = [
      "Meginhugsun: mögen þýðir að líka við eitthvað.",
      "Ich mag... = Mér líkar við...",
      "Möchte er annað form: vilja gjarnan eða langa (kurteis ósk).",
      "wollen = vilja; lieben = elska.",
      "A1 stig: mikilvægasta setningin er Ich mag das.",
    ];
    f["study.examples[0].lv"] = "Mér líkar við tónlist.";
    f["study.examples[1].lv"] = "Líkar þér kaffi?";
    f["study.examples[2].lv"] = "Henni líkar við börn.";
    f["study.examples[3].lv"] = "Ég vil gjarnan fá kaffi.";
    f["study.comparison[0].meaning"] = "líka við";
    f["study.comparison[0].example"] = "Ich mag Musik. – Mér líkar við tónlist.";
    f["study.comparison[1].meaning"] = "vilja gjarnan / langa";
    f["study.comparison[1].example"] =
      "Ich möchte einen Kaffee. – Ég vil gjarnan fá kaffi.";
    f["study.comparison[2].meaning"] = "vilja";
    f["study.comparison[2].example"] = "Ich will nach Hause. – Ég vil heim.";
    f["study.comparison[3].meaning"] = "elska";
    f["study.comparison[3].example"] = "Ich liebe dich. – Ég elska þig.";
    f["study.tip.text"] = "Mundu: Ich mag... = Mér líkar við...";
    f["study.important[0]"] =
      "mögen = líka við; möchte = vilja gjarnan/langa; wollen = vilja.";
    f["study.important[1]"] =
      "Ich mag Kaffee þýðir mér finnst kaffi gott.";
  },
  "IS mögen gala: mögen/möchte/wollen/lieben IS semantics; no ET/NO residue. DE untouched."
);

fs.writeFileSync(decisionsPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(JSON.stringify({ applied: 6, path: decisionsPath }, null, 2));
