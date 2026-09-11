#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv, buildCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const DECISIONS = {
  "g2/a1/fr|baden|idx:68|study.translation|TRANSLATION_ERROR|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "FR baden/peldēties: «Nager» is the correct A1 swimming sense for German «baden»; production matches intended learner gloss.",
  },
  "g2/a1/gr|a1-besuch|a1.card.a1-besuch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "GR Besuch comparison[0]: three Greek segments distinguish visit/event/person senses aligned with LV apmeklējums • apciemojums • vizīte.",
  },
  "g2/a1/gr|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "LABOT",
    owner_new: "Γιατί • επειδή",
    owner_note:
      "GR dass comparison[1]: duplicate «Γιατί • Γιατί» collapses LV contrast jo vs tāpēc ka; split to question-why vs causal-because.",
  },
  "g2/a1/gr|a1-was|a1.card.a1-was.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "GR was native: repeated «Τι» acceptably covers nominative/accusative LV kas/ko at A1 without extra morphological marking.",
  },
  "g2/a1/gr|a1-was|a1.card.a1-was.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "GR was study.translation mirrors native field; «Τι • Τι» is consistent with card-level was gloss and needs no rewrite.",
  },
  "g2/a1/hr|a1-es|a1.card.a1-es.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR es comparison[0]: «to • nepersonalni oblik» correctly renders LV tas/bezpersoniska forma for impersonal es usage.",
  },
  "g2/a1/hr|a1-ganz-study|a1.card.a1-ganz-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR ganz comparison[0]: cijeli/sve ukupno/potpuno preserves whole/entire/completely senses from LV vesels • viss kopumā • pilnīgi.",
  },
  "g2/a1/hr|a1-gefallen-study|a1.card.a1-gefallen-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR gefallen comparison[0]: «sviđati se • osoba u dativu» matches dative-liking construction taught for gefallen.",
  },
  "g2/a1/hr|a1-huebsch|a1.card.a1-huebsch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR hübsch comparison[0]: «lijep • privlačan po izgledu» accurately conveys pretty/attractive-by-appearance contrast.",
  },
  "g2/a1/hr|alle|idx:7|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR alle/lv: «Svi» is standard Croatian for LV visi/all; no orthographic or semantic correction required.",
  },
  "g2/a1/hr|Anzug|idx:37|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Anzug/lv: «Odijelo» is the expected Croatian noun for suit/uzvalks at A1 level.",
  },
  "g2/a1/hr|Apfel|idx:0|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Apfel/lv: «jabuka» correctly translates apple/ābols; production is already target-language Croatian.",
  },
  "g2/a1/hr|Arbeit|idx:42|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Arbeit/lv: «Posao» matches work/darbs semantics for everyday A1 vocabulary.",
  },
  "g2/a1/hr|Bein|idx:80|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Bein/lv: «Noga» is the correct Croatian body-part term for leg/kāja.",
  },
  "g2/a1/hr|Berg|idx:84|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Berg/lv: «Planina» appropriately renders mountain/kalns in Croatian.",
  },
  "g2/a1/hr|Bild|idx:97|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Bild/lv: «Slika» is the standard Croatian word for picture/attēls.",
  },
  "g2/a1/hr|Brot|idx:1|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Brot/lv: «kruh» is idiomatic Croatian for bread/maize in learner context.",
  },
  "g2/a1/hr|Büro|idx:118|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Büro/lv: «Ured» correctly maps office/birojs without German residue.",
  },
  "g2/a1/hr|Datum|idx:131|lv|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "LABOT",
    owner_new: "datum",
    owner_note:
      "HR Datum/lv: production «Datum» is German, not Croatian; replace with lowercase Croatian «datum» for date/datums.",
  },
  "g2/a1/hr|drei|idx:143|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR drei/lv: «Tri» is the correct Croatian numeral for three/trīs.",
  },
  "g2/a1/hr|genug|idx:230|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR genug/lv: «Dosta» conveys enough/pietiekami naturally in Croatian A1 usage.",
  },
  "g2/a1/hr|Gramm|idx:246|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Gramm/lv: «Gram» is acceptable Croatian loan for gram/grams in metric vocabulary.",
  },
  "g2/a1/hr|Gurke|idx:258|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Gurke/lv: «Krastavac» is the standard Croatian cucumber/gurķis term.",
  },
  "g2/a1/hr|Käse|idx:335|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Käse/lv: «Sir» correctly translates cheese/siers for A1 food vocabulary.",
  },
  "g2/a1/hr|lernen|idx:4|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR lernen/lv: «učiti» is the expected Croatian verb for to learn/mācīties.",
  },
  "g2/a1/hr|Lineal|idx:379|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Lineal/lv: «Ravnalo» is the correct Croatian school-item term for ruler/lineāls.",
  },
  "g2/a1/hr|neunzig|idx:445|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR neunzig/lv: «Devedeset» accurately renders ninety/deviņdesmit.",
  },
  "g2/a1/hr|Regen|idx:493|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Regen/lv: «Kiša» is idiomatic Croatian rain/lietus vocabulary.",
  },
  "g2/a1/hr|Regenschirm|idx:494|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Regenschirm/lv: «Kišobran» correctly compounds umbrella/lietussargs semantics.",
  },
  "g2/a1/hr|sechshundert|idx:533|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR sechshundert/lv: «Šeststo» is the proper Croatian form for six hundred/sešsimt.",
  },
  "g2/a1/hr|Staat|idx:697|lv|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Staat/lv: «Država» correctly translates state/valsts in political/geographic sense.",
  },
  "g2/a1/hr|Tag|idx:586|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Tag/lv: «Dan» is standard Croatian for day/diena.",
  },
  "g2/a1/hr|Tante|idx:587|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Tante/lv: «Teta» is the expected familial term for aunt/tante.",
  },
  "g2/a1/hr|Text|idx:597|lv|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Text/lv: «Tekst» is correct Croatian for text/teksts with acceptable capitalization.",
  },
  "g2/a1/hr|voll|idx:633|lv|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR voll/lv: «Pun» conveys full/pilns adjective sense in Croatian A1 context.",
  },
  "g2/a1/hr|wieder|idx:661|lv|TARGET_LANGUAGE_WRONG|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR wieder/lv: «Opet» correctly renders again/atkal.",
  },
  "g2/a1/hr|Wochenende|idx:181|lv|WRONG_LANGUAGE|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "HR Wochenende/lv: «Vikend» is common Croatian for weekend/nedēļas nogale.",
  },
  "g2/a1/it|a1-besuchen|a1.card.a1-besuchen.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT besuchen comparison[0]: visitare un luogo/evento vs visitare una persona mirrors LV place/event vs person distinction.",
  },
  "g2/a1/it|a1-ganz-study|a1.card.a1-ganz-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT ganz comparison[0]: intero/tutto nel complesso/completamente preserves whole/entire/completely LV senses.",
  },
  "g2/a1/it|a1-gefallen-study|a1.card.a1-gefallen-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT gefallen comparison[0]: piacere/persona al dativo correctly teaches dative-liking pattern.",
  },
  "g2/a1/it|a1-huebsch|a1.card.a1-huebsch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT hübsch comparison[0]: carino/attraente nell'aspetto matches pretty/attractive-by-appearance contrast.",
  },
  "g2/a1/it|Appetit|idx:689|study.translation|TRANSLATION_ERROR|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT Appetit study.translation: «Appetito» correctly translates appetite/apetīte.",
  },
  "g2/a1/it|April|idx:41|lv|MISTRANSLATION|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT April/lv: «Aprile» is the correct Italian month name for April/aprīlis.",
  },
  "g2/a1/it|aufwärts|idx:53|lv|MISTRANSLATION|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT aufwärts/lv: «In alto» appropriately renders upward/uz augšu direction.",
  },
  "g2/a1/it|August|idx:56|lv|MISTRANSLATION|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT August/lv: «Agosto» is standard Italian for August/augusts.",
  },
  "g2/a1/it|beste|idx:86|lv|MISTRANSLATION|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT beste/lv: «Il migliore.» conveys superlative best/vislabākais with acceptable A1 punctuation.",
  },
  "g2/a1/it|blond|idx:103|lv|MISTRANSLATION|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT blond/lv: «Biondo» is the correct adjective for blond/blonds.",
  },
  "g2/a1/it|breit|idx:108|lv|MISTRANSLATION|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT breit/lv: «Largo» correctly translates wide/plats.",
  },
  "g2/a1/it|Erdbeere|idx:76|lv|MISTRANSLATION|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT Erdbeere/lv: «Fragola» is the standard Italian strawberry/zemene term.",
  },
  "g2/a1/it|fünfzigste|idx:215|lv|TRANSLATION_ERROR|gpt-5.6-luna": {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note:
      "IT fünfzigste/lv: «Il cinquantesimo» correctly renders ordinal fiftieth/piecdesmitais.",
  },
};

function main() {
  const batchId = process.argv[2] || "LRB-R350-001";
  const inputPath = path.join(ROOT, "reports/g2-a1-owner/batches-pending", `${batchId}-input.csv`);
  const outPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${batchId}-decisions.csv`);
  const proofPath = path.join(ROOT, "reports/g2-a1-owner/batches-reviewed", `${batchId}-proof.json`);

  const { header, rows } = loadCsv(inputPath);
  const outHeader = [...header.filter((h) => h !== "provenance_type"), "provenance_type"];
  const reviewed = [];
  let labot = 0;
  let nelabot = 0;
  let pending = 0;

  for (const row of rows) {
    const decision = DECISIONS[row.finding_stable_ids];
    if (!decision) {
      throw new Error(`Missing individual decision for ${row.finding_stable_ids}`);
    }
    const out = { ...row, ...decision, provenance_type: "INDIVIDUAL_LINGUISTIC" };
    reviewed.push(out);
    if (out.owner_decision === "LABOT") labot += 1;
    else if (out.owner_decision === "NELABOT") nelabot += 1;
    else pending += 1;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buildCsv(outHeader, reviewed));

  const proof = {
    batch_id: batchId,
    row_count: reviewed.length,
    labot,
    nelabot,
    pending,
    provenance_individual_count: reviewed.length,
    classification: "G2_A1_RECHECK_350_BATCH_REVIEW_COMPLETE",
  };
  fs.writeFileSync(proofPath, `${JSON.stringify(proof, null, 2)}\n`);
  console.log(JSON.stringify(proof, null, 2));
}

if (require.main === module) main();
