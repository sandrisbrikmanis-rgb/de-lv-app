#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const decisionsPath = path.join(
  __dirname,
  "data/g2-a1-owner-pending/LRB-037-decisions.json"
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
  "g2/a1/is|passen|idx:471|lv; study.translation; study.explanation; study.examples|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna",
  (f) => {
    f["study.examples[0].lv"] = "Jakkinn passar á mig.";
  },
  "IS passen gala: ex[0] passar á mig (Die Jacke passt mir). DE untouched."
);

patch(
  "g2/a1/is|Reis|idx:496|lv, study.examples, study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna",
  (f) => {
    f.lv = "hrísgrjón";
    f["study.examples[0].lv"] = "Hrísgrjónin eru tilbúin.";
    f["study.examples[1].lv"] = "Ég borða hrísgrjón.";
    f["study.examples[2].lv"] = "Ertu að elda hrísgrjón?";
    f["study.examples[3].lv"] = "Hrísgrjónin bragðast vel.";
    f["study.important[0]"] =
      "der Reis — á þýsku mælieintala (Der Reis ist..., ekki *sind).";
    f["study.important[1]"] =
      "Á íslensku er hrísgrjón venjulega fleirtala; samræmið beygingu (Hrísgrjónin eru..., bragðast).";
  },
  "IS Reis gala: hrísgrjón plural agreement throughout; DE mass-noun vs IS plural note. DE untouched."
);

patch(
  "g2/a1/is|schauen|idx:510|lv, study|TARGET_LANGUAGE_ERROR|gpt-5.6-luna",
  (f) => {
    f.lv = "horfa • líta";
    f["study.translation"] = "horfa • líta";
    f["study.explanation"] = [
      "Meginhugsun: schauen þýðir að horfa eða líta.",
      "Schauen leggur áherslu á virka athygli.",
      "Oft notað með fern (sjónvarp): horfa í sjónvarp.",
      "Aus dem Fenster: horfa út á gluggann. sehen = sjá án sérstakrar athygli.",
    ];
    f["study.examples[0].lv"] = "Ég horfi í sjónvarp.";
    f["study.examples[1].lv"] = "Við horfum út á gluggann.";
    f["study.examples[2].lv"] = "Ég horfi í sjónvarp.";
    f["study.comparison[0].meaning"] = "horfa (virkt)";
    f["study.comparison[0].example"] =
      "Ich schaue aus dem Fenster. – Við horfum út á gluggann.";
    f["study.comparison[1].meaning"] = "sjá";
    f["study.comparison[1].example"] = "Ich sehe dich. – Ég sé þig.";
    f["study.tip[0]"] = "schauen = horfa / líta";
    f["study.tip[1]"] =
      "Notaðu horfa í (sjónvarp) eða horfa út á (glugga) eftir samhengi.";
    f["study.important[0]"] = "schauen = horfa / líta.";
    f["study.important[1]"] = "sehen = sjá (sjálfgefið); schauen = virk athygli.";
  },
  "IS schauen gala: horfa•líta; horfa í/út á; sehen=sjá; DE-index alignment. DE untouched."
);

fs.writeFileSync(decisionsPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log("LRB-037 gala repairs applied.");
