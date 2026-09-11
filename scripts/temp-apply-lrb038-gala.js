#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const decisionsPath = path.join(
  __dirname,
  "data/g2-a1-owner-pending/LRB-038-decisions.json"
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
  "g2/a1/is|schon|idx:521|lv, study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna",
  (f) => {
    f.lv = "nú þegar";
    f["study.translation"] = "nú þegar";
    f["study.explanation"] = [
      "Meginhugsun: schon merkir oft að eitthvað er nú þegar gerst eða á stað.",
      "schon = nú þegar eða þegar eftir samhengi — ekki alltaf einfalt „already“.",
      "noch = enn (ennþá ekki); schon = nú þegar (þegar til staðar).",
      "Ich bin schon zu Hause. = Ég er nú þegar heima.",
    ];
    f["study.examples[0].lv"] = "Ég er nú þegar heima.";
    f["study.tip[0]"] = "schon = nú þegar / þegar — samhengið ræður.";
    f["study.tip[1]"] = "Rugla ekki við noch (ennþá).";
    f["study.important[0]"] = "schon = nú þegar (ekki bara þegar sem „already“).";
    f["study.important[1]"] = "noch = enn; schon = nú þegar.";
  },
  "IS schon gala: nú þegar; schon vs noch; ex Ég er nú þegar heima. DE untouched."
);

patch(
  "g2/a1/is|sehen|idx:539|lv, study|TRANSLATION_ERROR|gpt-5.6-luna",
  (f) => {
    f["study.comparison[1].meaning"] = "horfa / líta";
    f["study.comparison[1].example"] = "Ich schaue fern. – Ég horfi í sjónvarp.";
    f["study.comparison[2].meaning"] = "horfa á / skoða";
    f["study.comparison[2].example"] =
      "Ich schaue den Film. – Ég horfi á kvikmyndina.";
    f["study.comparison[3].meaning"] = "heyra";
    f["study.comparison[3].example"] = "Ich höre Musik. – Ég heyri tónlist.";
    f["study.important[1]"] =
      "Ich sehe dich = ég sé þig; Ich schaue den Film = ég horfi á kvikmyndina.";
  },
  "IS sehen gala: horfi á; hören=heyra (not hlusta); sehen/schauen/ansehen/hören contrast. DE untouched."
);

patch(
  "g2/a1/is|Sie|idx:550|lv|MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f.lv = "þér (formlegt)";
  },
  "IS Sie gala: þér(formlegt) for DE formal you; þið=informal plural — not identical. Modern IS formal rare. DE untouched."
);

patch(
  "g2/a1/is|sollen|idx:564|lv|MISTRANSLATION|gpt-5.6-luna",
  (f) => {
    f.lv = "eiga að";
  },
  "IS sollen gala: dictionary sollen→eiga að; sollte context→ætti að. DE untouched."
);

fs.writeFileSync(decisionsPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log("LRB-038 gala repairs applied.");
