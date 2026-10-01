#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const decisionsPath = path.join(
  __dirname,
  "data/g2-a1-owner-pending/LRB-036-decisions.json"
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
  "g2/a1/is|morgen|idx:417|lv; study|TARGET_LANGUAGE_CORRUPTION|gpt-5.6-luna",
  (f) => {
    f.lv = "á morgun";
    f["study.translation"] = "á morgun";
    f["study.explanation"] = [
      "Meginhugsun: morgen með litlum stafi er tímaorð sem þýðir á morgun.",
      "morgen (lítill stafur) = á morgun, ekki morguninn sem nafnorð.",
      "der Morgen með stórum staf og greini er nafnorð (morgun).",
      "Guten Morgen! þýðir góðan morgun.",
      "Ich komme morgen. = Ég kem á morgun.",
    ];
    f["study.examples[0].lv"] = "Ég kem á morgun.";
    f["study.examples[1].lv"] = "Sjáumst á morgun!";
    f["study.examples[2].lv"] = "Ég kem á morgun.";
    f["study.examples[3].lv"] = "Á morgun er mánudagur.";
    f["study.examples[4].lv"] = "Góðan morgun!";
    f["study.examples[5].lv"] = "Morguninn er fallegur.";
  },
  "IS morgen gala: index DE→IS alignment; Guten Morgen→Góðan morgun; Morguninn. DE untouched."
);

patch(
  "g2/a1/is|Morgen|idx:418|lv; study|TARGET_LANGUAGE_CORRUPTION|gpt-5.6-luna",
  (f) => {
    f.lv = "morgun";
    f["study.translation"] = "morgun";
    f["study.explanation"] = [
      "Meginhugsun: der Morgen er nafnorð sem þýðir morgun (morguninn).",
      "Notað með greini der: der Morgen.",
      "Guten Morgen! = góðan morgun.",
      "morgen með litlum stafi = á morgun (tímaorð).",
      "Am Morgen = á morgnana / að morgni.",
    ];
    f["study.examples[0].lv"] = "Góðan morgun!";
    f["study.examples[1].lv"] = "Sjáumst á morgun!";
    f["study.examples[2].lv"] = "Ég kem á morgun.";
    f["study.examples[3].lv"] = "Á morgun er mánudagur.";
    f["study.examples[4].lv"] = "Góðan morgun!";
    f["study.examples[5].lv"] = "Morguninn er fallegur.";
  },
  "IS Morgen gala: index DE→IS alignment per existing DE examples. DE untouched."
);

patch(
  "g2/a1/is|natürlich|idx:433|study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna",
  (f) => {
    f["study.translation"] = "auðvitað • náttúrulegur";
    f["study.examples[0].lv"] = "Kemur þú með? – Auðvitað!";
    f["study.examples[1].lv"] = "Þetta eru náttúruleg viðbrögð.";
    f["study.examples[2].lv"] = "Auðvitað hjálpa ég þér.";
    f["study.examples[3].lv"] = "Hún er með náttúrulega rautt hár.";
    f["study.examples[4].lv"] = "Auðvitað get ég gert það.";
    f["study.examples[5].lv"] = "Þetta er alveg náttúrulegt.";
  },
  "IS natürlich gala: pl viðbrögð; náttúrulega rautt hár; full agreement. DE untouched."
);

patch(
  "g2/a1/is|nehmen|idx:435|study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna",
  (f) => {
    f["study.translation"] = "taka";
    f["study.explanation"] = [
      "Meginhugsun: nehmen þýðir að taka eitthvað.",
      "Nehmen notað þegar þú tekur eitthvað til þín eða notar.",
      "bringen = koma með / færa til einhvers; ekki sama og nehmen.",
      "holen = sækja; mitnehmen = taka með sér.",
    ];
    f["study.examples[0].lv"] = "Ég fer með strætó.";
    f["study.examples[1].lv"] = "Taktu bókina!";
    f["study.examples[2].lv"] = "Ég kem með bókina til þín.";
    f["study.examples[3].lv"] = "Ég sæki þig.";
    f["study.comparison[0].meaning"] = "taka";
    f["study.comparison[0].example"] = "Nimm das Buch! – Taktu bókina!";
    f["study.comparison[1].meaning"] = "koma með / færa";
    f["study.comparison[1].example"] =
      "Ich bringe dir das Buch. – Ég kem með bókina til þín.";
    f["study.comparison[2].meaning"] = "sækja";
    f["study.comparison[2].example"] = "Ich hole dich ab. – Ég sæki þig.";
    f["study.comparison[3].meaning"] = "taka með sér";
    f["study.comparison[3].example"] = "Ég tek þig með mér.";
    f["study.tip.text"] =
      "Mundu: taka → nehmen; koma með til einhvers → bringen; sækja → holen.";
    f["study.important[0]"] =
      "Ich nehme den Bus á íslensku þýðir ég fer með strætó.";
    f["study.important[1]"] = "bringen = koma með / færa til einhvers, ekki taka.";
  },
  "IS nehmen gala: taka/bringen koma með/holen sækja/mitnehmen; no bringen=gefa. DE untouched."
);

patch(
  "g2/a1/is|noch|idx:451|lv; study.translation; study.explanation; study.examples|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna",
  (f) => {
    f.lv = "enn";
    f["study.translation"] = "enn";
    f["study.examples[0].lv"] = "Ég er enn heima.";
    f["study.examples[1].lv"] = "Ég er enn heima.";
    f["study.examples[2].lv"] = "Ertu ennþá hér?";
  },
  "IS noch gala: index DE→IS; duplicate ex[0]=ex[1] matches identical DE. DE untouched."
);

patch(
  "g2/a1/is|nur|idx:456|lv; study.translation; study.explanation; study.examples|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna",
  (f) => {
    f.lv = "aðeins • einungis";
    f["study.translation"] = "aðeins • einungis";
    f["study.examples[0].lv"] = "Ég á aðeins tíu evrur.";
    f["study.examples[1].lv"] = "Ég á aðeins tíu evrur.";
    f["study.examples[2].lv"] = "Einungis þú getur hjálpað mér.";
    f["study.examples[3].lv"] = "Ég vil aðeins kaffi.";
    f["study.examples[4].lv"] = "Ég á aðeins átta evrur.";
  },
  "IS nur gala: index DE→IS; duplicate ex[0]=ex[1] matches identical DE. DE untouched."
);

patch(
  "g2/a1/is|Obst|idx:693|lv; study.translation; study.explanation; study.examples[].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  (f) => {
    f.lv = "ávextir";
    f["study.translation"] = "ávextir";
    f["study.explanation"] = [
      "Meginhugsun: das Obst þýðir ávexti almennt (söfnunarnafnorð).",
      "Á þýsku er Obst óteljanlegt nafnorð — engin fleirtala *die Obsts.",
      "das Obst = ávextir sem matvælaflokkur.",
      "ein Apfel / eine Frucht = ávöxtur (einstakur ávöxtur).",
    ];
    f["study.tip[0]"] = "das Obst = ávextir almennt (ekki *die Obsts).";
    f["study.tip[1]"] = "ein Apfel = einn ávöxtur; das Obst = ávextir.";
    f["study.important[0]"] = "Obst er söfnunarnafnorð — notað aðeins í eintölu á þýsku.";
    f["study.important[1]"] = "das Obst = ávextir; einzelne Frucht = ávöxtur.";
    delete f["study.examples[0].lv"];
    delete f["study.examples[1].lv"];
    delete f["study.examples[2].lv"];
    delete f["study.examples[3].lv"];
    delete f["study.examples[4].lv"];
    delete f["study.examples[5].lv"];
  },
  "IS Obst gala: das Obst=ávextir mass; einzelne Frucht=ávöxtur; no invented DE examples. DE untouched."
);

fs.writeFileSync(decisionsPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log("LRB-036 gala repairs applied.");
