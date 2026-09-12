#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const {
  COMPOSITE_BY_ID,
  BIS_COMPARISON,
  BITTE_EXAMPLES,
} = require("./lib/lrb018-composite-targets");

const BATCH = "LRB-018";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);

const BIS_ID =
  "g2/a1/fr|bis|idx:91|study.comparison|SEMANTIC_MISMATCH|gpt-5.6-luna";
const BITTE_ID =
  "g2/a1/fr|bitte|idx:93|study.examples|MISTRANSLATION|gpt-5.6-luna";

const FI_SCALAR_TARGETS = {
  "g2/a1/fi|zweite|idx:682|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Toinen",
    note:
      "FI zweite lv: ET Teine → FI Toinen for otrais second ordinal. DE untouched.",
  },
  "g2/a1/fi|Zwiebel|idx:683|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Sipuli",
    note:
      "FI Zwiebel lv: ET Sibul → FI Sipuli for sīpols onion. DE untouched.",
  },
  "g2/a1/fi|zwischen|idx:684|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Välissä",
    note:
      "FI zwischen lv: ET Vahel → FI Välissä for starp between/among. DE untouched.",
  },
  "g2/a1/fi|zwölf|idx:685|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Kaksitoista",
    note:
      "FI zwölf lv: ET Kaksteist → FI Kaksitoista for divpadsmit twelve. DE untouched.",
  },
  "g2/a1/fi|zwölfte|idx:686|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Kahdestoista",
    note:
      "FI zwölfte lv: ET Kaheteistkümnes → FI Kahdestoista for divpadsmitais twelfth. DE untouched.",
  },
};

const FR_MULTI_LABOT = {
  "g2/a1/fr|a1-an|a1.card.a1-an.native|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "À • Au • Près",
      note:
        "FR a1-an native: À • À • Présent → À • Au • Près for pie/at-near-preposition senses. DE untouched.",
    },
  "g2/a1/fr|a1-an|a1.card.a1-an.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "À • Au • Près",
      note:
        "FR a1-an study.translation: mirrors native repair; at/near/beside pie gloss. DE untouched.",
    },
  "g2/a1/fr|a1-besuch|a1.card.a1-besuch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "visite • visite de courtoisie • visite",
      note:
        "FR besuch comparison[0]: visite • visite • visite → visite • visite de courtoisie • visite for apmeklējums • apciemojums • vizīte. DE untouched.",
    },
  "g2/a1/fr|a1-bringen|a1.card.a1-bringen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Apporter • Amener",
      note:
        "FR bringen native: À emporter • À emporter → Apporter • Amener for atnest bring/carry. DE untouched.",
    },
  "g2/a1/fr|a1-bringen|a1.card.a1-bringen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Apporter • Amener",
      note:
        "FR bringen study.translation: mirrors native Apporter/Amener repair. DE untouched.",
    },
  "g2/a1/fr|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Qui • Laquelle • Lequel",
      note:
        "FR das comparison[2]: Qui • Lequel • Qui → Qui • Laquelle • Lequel for kurš • kura • kuru relative. DE untouched.",
    },
  "g2/a1/fr|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Parce que • Car",
      note:
        "FR dass comparison[1]: Parce que • Parce que → Parce que • Car for jo • tāpēc ka causal. DE untouched.",
    },
  "g2/a1/fr|a1-eis|a1.card.a1-eis.native|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Glace • Crème glacée",
      note:
        "FR eis native: Glace • Glace → Glace • Crème glacée for ledus • saldējums ice/cream. DE untouched.",
    },
  "g2/a1/fr|a1-eis|a1.card.a1-eis.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Glace • Crème glacée",
      note:
        "FR eis study.translation: mirrors native Glace/Crème glacée repair. DE untouched.",
    },
  "g2/a1/fr|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Il • Cela • Forme impersonnelle",
      note:
        "FR es native: Il • Il • Forme impersonnelle already segment-correct; LABOT affirms impersonnel/es-it teaching. DE untouched.",
    },
  "g2/a1/fr|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Il • Cela • Forme impersonnelle",
      note:
        "FR es study.translation: mirrors native Il/Cela/impersonnel gloss for tas/es. DE untouched.",
    },
  "g2/a1/fr|a1-lang|a1.card.a1-lang.native|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Long • Long",
      note:
        "FR lang native: Longue • Longue → Long • Long for garš • ilgs long adjective (masc/fem). DE untouched.",
    },
  "g2/a1/fr|a1-lang|a1.card.a1-lang.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Long • Long",
      note:
        "FR lang study.translation: mirrors native Long/Long repair. DE untouched.",
    },
  "g2/a1/fr|a1-passen|a1.card.a1-passen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Aller • Convenir",
      note:
        "FR passen native: Ajustement • Ajustement → Aller • Convenir for derēt • piestāvēt fit/suit verb senses. DE untouched.",
    },
  "g2/a1/fr|a1-passen|a1.card.a1-passen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "Aller • Convenir",
      note:
        "FR passen study.translation: mirrors native Aller/Convenir repair. DE untouched.",
    },
  "g2/a1/fr|a1-zu|a1.card.a1-zu.native|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "À • Chez",
      note:
        "FR zu native: À • À → À • Chez for uz • pie direction/to-person. DE untouched.",
    },
  "g2/a1/fr|a1-zu|a1.card.a1-zu.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "À • Chez",
      note:
        "FR zu study.translation: mirrors native À/Chez repair. DE untouched.",
    },
  "g2/a1/fr|a1-zum|a1.card.a1-zum.native|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "À • Chez",
      note:
        "FR zum native: À • À → À • Chez for uz • pie zu+dem direction. DE untouched.",
    },
  "g2/a1/fr|a1-zum|a1.card.a1-zum.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    {
      target: "À • Chez",
      note:
        "FR zum study.translation: mirrors native À/Chez repair. DE untouched.",
    },
};

const FR_MULTI_NELABOT = {
  "g2/a1/fr|a1-einmal|a1.card.a1-einmal.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR einmal native: Une fois • Une fois mirrors vienreiz • reiz once/adverb. DE untouched.",
  "g2/a1/fr|a1-einmal|a1.card.a1-einmal.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR einmal study.translation: Une fois • Une fois already correct French. DE untouched.",
  "g2/a1/fr|a1-euch|a1.card.a1-euch.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR euch native: Vous • Vous mirrors jūs • jums accusative/dative pair. DE untouched.",
  "g2/a1/fr|a1-euch|a1.card.a1-euch.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR euch study.translation: Vous • Vous already correct French. DE untouched.",
  "g2/a1/fr|a1-fuer|a1.card.a1-fuer.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR fuer native: Pour • Pour mirrors priekš for-purpose. DE untouched.",
  "g2/a1/fr|a1-fuer|a1.card.a1-fuer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR fuer study.translation: Pour • Pour already correct French. DE untouched.",
  "g2/a1/fr|a1-ins|a1.card.a1-ins.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR ins native: Dans • Dans • Où ? covers iekšā • uz iekšu • kurp? movement. DE untouched.",
  "g2/a1/fr|a1-ins|a1.card.a1-ins.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR ins study.translation: Dans • Dans • Où ? already correct French. DE untouched.",
  "g2/a1/fr|a1-machen|a1.card.a1-machen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR machen native: Faire • Faire mirrors darīt • taisīt do/make. DE untouched.",
  "g2/a1/fr|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR machen study.translation: Faire • Faire already correct French. DE untouched.",
  "g2/a1/fr|a1-nehmen|a1.card.a1-nehmen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR nehmen native: Prendre • Prendre mirrors ņemt • paņemt take. DE untouched.",
  "g2/a1/fr|a1-nehmen|a1.card.a1-nehmen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR nehmen study.translation: Prendre • Prendre already correct French. DE untouched.",
  "g2/a1/fr|a1-nur-study|a1.card.a1-nur-study.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR nur-study native: Seulement • Seulement mirrors tikai • vienīgi only. DE untouched.",
  "g2/a1/fr|a1-nur-study|a1.card.a1-nur-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR nur-study study.translation: Seulement • Seulement already correct French. DE untouched.",
  "g2/a1/fr|a1-oder|a1.card.a1-oder.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR oder native: Ou • Ou mirrors vai • jeb disjunction. DE untouched.",
  "g2/a1/fr|a1-oder|a1.card.a1-oder.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR oder study.translation: Ou • Ou already correct French. DE untouched.",
  "g2/a1/fr|a1-wer|a1.card.a1-wer.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR wer native: Qui • Qui mirrors kas • kurš who-interrogative. DE untouched.",
  "g2/a1/fr|a1-wer|a1.card.a1-wer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "FR wer study.translation: Qui • Qui already correct French. DE untouched.",
};

const FR_COMPOSITE_NELABOT = {
  "g2/a1/fr|ab|idx:17|study.translation; study.examples; study.comparison; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna":
    "FR ab composite: Depuis/from-point teaching already correct French across study subfields. DE untouched.",
  "g2/a1/fr|aber|idx:21|lv; study.translation; study.explanation; study.examples; study.comparison; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna":
    "FR aber composite: Mais/contrast teaching already correct French across study subfields. DE untouched.",
  "g2/a1/fr|ein|idx:154|lv, study.translation, study.explanation, study.examples|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna":
    "FR ein composite: Article indéfini • Un • Quelqu'un indefinite-article teaching already correct French. DE untouched.",
  "g2/a1/fr|Besuch|idx:87|study.explanation|STYLE_ONLY|gpt-5.6-luna":
    "FR Besuch study.explanation: visite/register A1 prose already acceptable French. DE untouched.",
};

function normalizeVal(v) {
  const t = String(v || "").trim();
  if (t.startsWith("{") || t.startsWith("[")) {
    try {
      return JSON.stringify(JSON.parse(t));
    } catch {
      return t;
    }
  }
  return t;
}

function makeLabot(ownerNew, note) {
  return {
    owner_status: "DECIDED",
    owner_decision: "LABOT",
    owner_new: ownerNew,
    owner_note: note,
  };
}

function makeNelabot(note) {
  return {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note: note,
  };
}

const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const decisions = {};
let labot = 0;
let nelabot = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const prod = normalizeVal(row.production_current);

  if (FI_SCALAR_TARGETS[id]) {
    const { target, note } = FI_SCALAR_TARGETS[id];
    if (prod !== normalizeVal(target)) {
      labot++;
      decisions[id] = makeLabot(target, note);
    } else {
      nelabot++;
      decisions[id] = makeNelabot(note.replace("→", "already"));
    }
    continue;
  }

  if (FR_MULTI_LABOT[id]) {
    const { target, note } = FR_MULTI_LABOT[id];
    if (prod !== normalizeVal(target)) {
      labot++;
      decisions[id] = makeLabot(target, note);
    } else {
      nelabot++;
      decisions[id] = makeNelabot(note);
    }
    continue;
  }

  if (FR_MULTI_NELABOT[id]) {
    nelabot++;
    decisions[id] = makeNelabot(FR_MULTI_NELABOT[id]);
    continue;
  }

  if (FR_COMPOSITE_NELABOT[id]) {
    nelabot++;
    decisions[id] = makeNelabot(FR_COMPOSITE_NELABOT[id]);
    continue;
  }

  if (COMPOSITE_BY_ID[id]) {
    const target = JSON.stringify(COMPOSITE_BY_ID[id]);
    if (prod !== normalizeVal(target)) {
      labot++;
      const card = id.match(/\|([^|]+)\|/)?.[1] || "";
      decisions[id] = makeLabot(
        target,
        `FR ${card} composite repair: LV/ET leak → French; DE↔FR aligned. DE untouched.`
      );
    } else {
      nelabot++;
      decisions[id] = makeNelabot(
        `FR ${id.match(/\|([^|]+)\|/)?.[1] || ""} composite already correct French. DE untouched.`
      );
    }
    continue;
  }

  if (id === BIS_ID) {
    const target = JSON.stringify(BIS_COMPARISON);
    if (prod !== normalizeVal(target)) {
      labot++;
      decisions[id] = makeLabot(
        target,
        "FR bis study.comparison: scrambled DE–FR pairs → corrected jusqu'à/demain, gare, présent alignments. DE untouched."
      );
    } else {
      nelabot++;
      decisions[id] = makeNelabot(
        "FR bis study.comparison already correct French DE–FR pairs. DE untouched."
      );
    }
    continue;
  }

  if (id === BITTE_ID) {
    const target = JSON.stringify(BITTE_EXAMPLES);
    if (prod !== normalizeVal(target)) {
      labot++;
      decisions[id] = makeLabot(
        target,
        "FR bitte study.examples: mismatched lv strings → proper DE–FR politeness/request pairs. DE untouched."
      );
    } else {
      nelabot++;
      decisions[id] = makeNelabot(
        "FR bitte study.examples already correct French DE–FR pairs. DE untouched."
      );
    }
    continue;
  }

  console.error(`Missing decision mapping for ${id}`);
  process.exit(1);
}

if (Object.keys(decisions).length !== 50) {
  console.error(`Expected 50 decisions, got ${Object.keys(decisions).length}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      total: 50,
      labot,
      nelabot,
      pending: 0,
      composite: Object.keys(COMPOSITE_BY_ID).length,
      field_level: ["bis", "bitte"],
    },
    null,
    2
  )
);
