#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "data/g2-a1-owner-pending/LRB-002-decisions.json");

function labot(ownerNew, note) {
  return {
    owner_status: "DECIDED",
    owner_decision: "LABOT",
    owner_new: typeof ownerNew === "string" ? ownerNew : JSON.stringify(ownerNew),
    owner_note: note,
  };
}

function nelabot(note) {
  return {
    owner_status: "DECIDED",
    owner_decision: "NELABOT",
    owner_new: "",
    owner_note: note,
  };
}

const decisions = {
  // ── DA (4) ──────────────────────────────────────────────────────────
  "g2/a1/da|kosten|idx:320|study.translation; study.important|MISTRANSLATION|gpt-5.6-luna": labot(
    {
      "study.translation": "At koste",
      "study.important[0]":
        "kosten og bezahlen er ikke synonyme: kosten = hvor meget det koster; bezahlen = at betale penge.",
      "study.important[1]":
        "på dansk bruges i begge tilfælde ofte til at betale, men på tysk skal man vælge efter situationen.",
    },
    "DA kosten: At betale→At koste; bezahlen=tjene penge→betale penge. DE untouched."
  ),

  "g2/a1/da|Laden|idx:349|study.explanation; study.tip|TARGET_LANGUAGE_GRAMMAR|gpt-5.6-luna": labot(
    {
      "study.explanation": [
        "Hovedidé: der Laden med stort L er et navneord – en lille butik.",
        "laden med små bogstaver er et verbum – at indlæse eller oplade.",
        "Der Laden bruges ofte i hverdagen (im Laden einkaufen = at handle i en butik).",
        "Flertal: die Läden.",
      ],
      "study.tip": [
        "der Laden med stort L — navneord (butik).",
        "laden med små bogstaver — verbum (at indlæse/oplade).",
      ],
    },
    "DA Laden gala: clean explanation/tip; der Laden=navneord, laden=verbum. DE untouched."
  ),

  "g2/a1/da|Land|idx:351|study.examples; study.important|MEANING_AND_USAGE|gpt-5.6-luna": labot(
    {
      "study.examples[2].lv": "Vi kører ud på landet.",
      "study.important[0]":
        "aufs Land betyder 'til landet' (på landet uden for byen), ikke 'til et land' (som Tyskland).",
      "study.important[1]": "das Land er ikke det samme som die Stadt.",
    },
    "DA Land gala: aufs Land→Vi kører ud på landet; fix absurd important duplicate. DE untouched."
  ),

  "g2/a1/da|Liter|idx:382|lv; study.translation|MISTRANSLATION|gpt-5.6-luna": nelabot(
    "DA Liter lv/translation: «Liter» is standard Danish for litrs. DE untouched."
  ),

  // ── EN absent-field NELABOT (22) ────────────────────────────────────
  "g2/a1/en|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation": nelabot(
    "EN a1-uhr examples[5].native: field absent; no writable EN target. DE untouched."
  ),
  "g2/a1/en|ab|idx:17|lv; study.translation; study.examples[].lv|UNTRANSLATED_TARGET|gpt-5.6-luna": nelabot(
    "EN ab lv/translation: «From» acceptable for ab/no; examples path absent. DE untouched."
  ),
  "g2/a1/en|aber|idx:21|lv; study.translation; study.examples[].lv|UNTRANSLATED_TARGET|gpt-5.6-luna": nelabot(
    "EN aber lv/translation: «But» correct for aber/bet; examples path absent. DE untouched."
  ),
  "g2/a1/en|bitte|idx:93|study.examples.lv|MISTRANSLATION|gpt-5.6-luna": nelabot(
    "EN bitte study.examples.lv: cited path absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|Bitte|idx:94|study.examples.lv|MISTRANSLATION|gpt-5.6-luna": nelabot(
    "EN Bitte study.examples.lv: path absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|bringen|idx:111|study.examples.lv|MISTRANSLATION|gpt-5.6-luna": nelabot(
    "EN bringen study.examples.lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|die|idx:137|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN die study.examples[1].lv: field absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|dieser|idx:139|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN dieser study.examples[1].lv: null path; non-actionable. DE untouched."
  ),
  "g2/a1/en|euch|idx:170|study.examples[2].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN euch study.examples[2].lv: path absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|fahren|idx:172|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN fahren study.examples[1].lv: null; non-actionable. DE untouched."
  ),
  "g2/a1/en|Fernsehen|idx:688|study.explanation|DE_SOURCE_ISSUE|gpt-5.6-luna": nelabot(
    "EN Fernsehen study.explanation: noun/verb split and singular-only rule correct. DE untouched."
  ),
  "g2/a1/en|Frau|idx:198|study.examples[4].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN Frau study.examples[4].lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|für|idx:216|study.examples[3].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN für study.examples[3].lv: null; non-actionable. DE untouched."
  ),
  "g2/a1/en|groß|idx:250|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN groß study.examples[1].lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|hoch|idx:285|study.examples[1].lv|MISTRANSLATION|gpt-5.6-luna": nelabot(
    "EN hoch study.examples[1].lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|in|idx:295|study.examples[0].lv|ORTHOGRAPHY|gpt-5.6-luna": nelabot(
    "EN in study.examples[0].lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|klein|idx:6|study.examples[1-2].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN klein study.examples[1-2].lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|nach|idx:426|study.sectionAccents.examples[3].lv|MEANING_ERROR|gpt-5.6-luna": nelabot(
    "EN nach sectionAccents.examples[3].lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|natürlich|idx:433|study.examples[4].lv|STYLE_ONLY|gpt-5.6-luna": nelabot(
    "EN natürlich study.examples[4].lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|probieren|idx:482|study.examples[3].lv|CAPITALIZATION|gpt-5.6-luna": nelabot(
    "EN probieren study.examples[3].lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|schauen|idx:510|study.examples[2].lv|CAPITALIZATION|gpt-5.6-luna": nelabot(
    "EN schauen study.examples[2].lv: null; non-actionable. DE untouched."
  ),
  "g2/a1/en|sprechen|idx:5|lv; study.examples[2].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN sprechen lv «To speak» correct; examples[2].lv absent. DE untouched."
  ),
  "g2/a1/en|über|idx:608|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN über study.examples[1].lv: absent; non-actionable. DE untouched."
  ),
  "g2/a1/en|unter|idx:615|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna": nelabot(
    "EN unter study.examples[1].lv: null; non-actionable. DE untouched."
  ),

  // ── EN LABOT (16) ───────────────────────────────────────────────────
  "g2/a1/en|an|idx:12|lv; study.translation; study.examples[].lv|UNTRANSLATED_TARGET|gpt-5.6-luna": labot(
    { lv: "At", "study.translation": "At" },
    "EN an gala: source pie→At only; remove To•Present extras. DE untouched."
  ),

  "g2/a1/en|ein|idx:154|lv; study.examples[3].lv; study.sectionAccents|MISTRANSLATION|gpt-5.6-luna": labot(
    {
      lv: "Indefinite article",
      "study.translation": "Indefinite article",
      "study.sectionAccents.examples[0].lv": { purple: ["A"] },
      "study.sectionAccents.examples[1].lv": { purple: ["one"] },
      "study.sectionAccents.examples[2].lv": { purple: ["a"] },
      "study.sectionAccents.tip.left.purple": ["Remember"],
    },
    "EN ein gala: source nenoteiktais artikuls→Indefinite article only; fix sectionAccents highlights. DE untouched."
  ),

  "g2/a1/en|Eis|idx:157|lv; study.examples[*].lv; study.comparison[1].meaning|UNTRANSLATED_LV|gpt-5.6-luna": labot(
    {
      lv: "Ice • Ice cream",
      "study.translation": "Ice • Ice cream",
      "study.comparison[1].meaning": "Ice cream",
    },
    "EN Eis gala: cmp[1] It will snow→Ice cream; lv matches ledus•saldējums. DE untouched."
  ),

  "g2/a1/en|erst|idx:165|lv; study.examples[0].lv; study.comparison[0].example|MISTRANSLATION|gpt-5.6-luna": labot(
    {
      lv: "Only",
      "study.translation": "Only",
      "study.examples[0].lv": "First learn, then play.",
      "study.comparison[0].example": "Erst lernen, dann spielen. – First learn, then play.",
    },
    "EN erst gala: source tikai→Only; ex[0] and cmp[0] sequence fix. DE untouched."
  ),

  "g2/a1/en|es|idx:167|lv; study.examples[*].lv; study.comparison[1].meaning|MISTRANSLATION|gpt-5.6-luna": labot(
    {
      lv: "It",
      "study.translation": "It",
      "study.examples[0].lv": "It's raining.",
      "study.examples[1].lv": "It is cold.",
      "study.examples[2].lv": "The child is sleeping.",
      "study.examples[3].lv": "It is tired.",
      "study.comparison[0].meaning": "it • impersonal form",
      "study.comparison[1].meaning": "I (pronoun)",
    },
    "EN es gala: full composite; ex[2] Das Kind→The child; ex[3] Es ist müde→It is tired (neuter). DE untouched."
  ),

  "g2/a1/en|essen|idx:690|study.explanation|DE_SOURCE_ISSUE|gpt-5.6-luna": labot(
    { "study.explanation[4]": "Often describes: thing." },
    "EN essen gala: explanation[4] rain→thing (das Essen noun sense). DE untouched."
  ),

  "g2/a1/en|etwas|idx:169|lv; study.examples[*].lv; study.important[1]|UNTRANSLATED_LV|gpt-5.6-luna": labot(
    {
      lv: "Something",
      "study.translation": "Something",
      "study.important[1]": "etwas trinken = to drink something.",
    },
    "EN etwas gala: source kaut kas→Something only; keep fixed important example. DE untouched."
  ),

  "g2/a1/en|ganz|idx:219|lv; study.examples[].lv|TRANSLATION_ERROR|gpt-5.6-luna": labot(
    { lv: "Whole", "study.translation": "Whole" },
    "EN ganz gala: source vesels→Whole only; remove Quite/Everything. DE untouched."
  ),

  "g2/a1/en|Hand|idx:267|lv; study.translation; study.explanation|SEMANTIC_NARROWING|gpt-5.6-luna": labot(
    {
      lv: "Hand",
      "study.translation": "Hand",
      "study.explanation": [
        "Main idea: die Hand means the hand.",
        "In German, Arm and Hand are two separate words.",
        "Hand = hand; Arm = arm; palm = palm (die Handfläche).",
      ],
      "study.comparison[0].meaning": "Hand",
    },
    "EN Hand gala: remove false Arm=Hand claim; Hand=hand, Arm=arm, palm=palm. DE untouched."
  ),

  "g2/a1/en|müssen|idx:423|lv; study.translation; study.explanation; study.comparison|MEANING_ERROR|gpt-5.6-luna": labot(
    {
      lv: "Must • Have to",
      "study.translation": "Must • Have to",
      "study.explanation[0]": "Main idea: müssen expresses necessity or obligation.",
      "study.explanation[1]":
        "In English, müssen is usually translated as must or have to.",
      "study.comparison[0].meaning": "Must / have to",
    },
    "EN müssen gala: To need→Must•Have to; fix corrupt explanation. DE untouched."
  ),

  "g2/a1/en|nehmen|idx:435|study.examples[2].lv; study.examples[3].lv; study.important[0]|MEANING_ERROR|gpt-5.6-luna": labot(
    {
      "study.important[0]":
        'Ich nehme den Bus means "I take the bus" in English.',
    },
    "EN nehmen gala: drive the bus→take the bus. DE untouched."
  ),

  "g2/a1/en|ob|idx:457|lv, study.translation, study.examples[1].lv|MISTRANSLATION|gpt-5.6-luna": labot(
    { lv: "Whether • If", "study.translation": "Whether • If" },
    "EN ob gala: Or→Whether•If for indirect-question sense. DE untouched."
  ),

  "g2/a1/en|stehen|idx:576|study.explanation, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": labot(
    {
      "study.comparison[2].meaning": "Lie (down)",
      "study.comparison[2].example":
        "Das Buch liegt dort. – The book lies there.",
    },
    "EN stehen gala: liegen→Lie (down); DE→EN comparison pair. DE untouched."
  ),

  "g2/a1/en|Wetter|idx:658|lv, study.examples, study.tip|MISTRANSLATION|gpt-5.6-luna": labot(
    {
      lv: "Weather",
      "study.translation": "Weather",
      "study.examples[0].lv": "What's the weather like today?",
      "study.examples[4].lv": "We are talking about the weather.",
      "study.tip[1]": "Remember: Wie ist das Wetter? = What's the weather like?",
    },
    "EN Wetter gala: lv→Weather; fix time/weather confusion in examples/tip. DE untouched."
  ),

  "g2/a1/en|wie|idx:660|lv, study.important|MISTRANSLATION|gpt-5.6-luna": labot(
    {
      "study.important[2]":
        "Incorrect: How are you? → Correct: How old are you? (Wie alt bist du?)",
    },
    "EN wie gala: fix reversed age-question correction. DE untouched."
  ),

  "g2/a1/en|zum|idx:672|study.explanation, study.comparison, study.important|DE_SOURCE_ISSUE|gpt-5.6-luna": labot(
    {
      "study.explanation[2]":
        "Used with masculine and neuter nouns when indicating direction or purpose.",
      "study.comparison[1].meaning": "To (feminine)",
      "study.comparison[1].example": "zur Schule – To school",
      "study.comparison[4].meaning": "At (location)",
      "study.comparison[4].example": "beim Arzt – At the doctor's",
      "study.important[0]":
        "zum = zu dem, with masculine or neuter nouns (Dative).",
      "study.important[3]":
        "beim Arzt = at the doctor's; zum Arzt = to the doctor. Not to be confused with bei (located at) or nach (to cities without article).",
    },
    "EN zum gala: zu+dem Dativ; zur feminine; beim=at doctor's, zum=to doctor. DE untouched."
  ),

  // ── ES (5) ──────────────────────────────────────────────────────────
  "g2/a1/es|Appetit|idx:689|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": nelabot(
    "ES Appetit: apetito correct; der Appetit singular and Guten Appetit examples proper. DE untouched."
  ),

  "g2/a1/es|aufs|idx:60|study.explanation; study.comparison; study.important|MISTRANSLATION|gpt-5.6-luna": labot(
    {
      "study.explanation[1]": "Forma completa: auf das (¿adónde?).",
      "study.explanation[2]":
        "Se utiliza con sustantivos neutros en singular cuando la acción indica dirección hacia algo: responde a ¿adónde? (Akkusativ).",
      "study.comparison[0].meaning": "a (Akkusativo, ¿adónde?)",
      "study.comparison[0].example": "aufs Dach – hacia el tejado",
      "study.comparison[2].meaning": "hacia una superficie vertical",
      "study.comparison[2].example": "an die Wand – hacia la pared",
      "study.comparison[3].example": "ins Zimmer – hacia la habitación",
      "study.comparison[4].example": "zum Arzt – al médico",
      "study.important[0]":
        "aufs = auf das, solo con sustantivo neutro en singular (¿adónde?).",
      "study.important[1]":
        "Responde a ¿adónde? — movimiento hacia un lugar o superficie específica.",
      "study.important[3]":
        "No confundir an (pared vertical) con auf (superficie horizontal) ni ins (dentro).",
    },
    "ES aufs gala: auf+das neuter; Wohin/Akk; an=vertical wall; align auf/ins/zum. DE untouched."
  ),

  "g2/a1/es|baden|idx:68|study.examples, study.comparison|MISTRANSLATION|gpt-5.6-luna": labot(
    {
      "study.examples[0].lv": "Voy a bañarme.",
      "study.examples[1].lv": "Vamos a bañarnos en el lago.",
      "study.examples[2].lv": "Nada muy bien.",
      "study.examples[3].lv": "Nado todos los lunes.",
      "study.comparison[0].meaning": "bañarse",
      "study.comparison[1].meaning": "nadar",
      "study.comparison[2].meaning": "ducharse",
      "study.comparison[3].meaning": "ir a nadar",
    },
    "ES baden gala: index-by-index examples; baden=bañarse, schwimmen=nadar, duschen=ducharse. DE untouched."
  ),

  "g2/a1/es|bitte|idx:93|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MISTRANSLATION|gpt-5.6-luna": labot(
    {
      "study.explanation": [
        "Idea principal: bitte en minúscula es una palabra cortés.",
        "bitte significa por favor.",
        "Se usa para ser educado en peticiones y órdenes.",
      ],
      "study.examples[0].lv": "Una taza de café, por favor.",
      "study.examples[1].lv": "Entra, por favor.",
      "study.examples[2].lv": "¡De nada!",
      "study.examples[3].lv": "¿Puedo preguntar, por favor?",
    },
    "ES bitte gala: fix scrambled examples; clean explanation. DE untouched."
  ),

  "g2/a1/es|Bitte|idx:94|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MISTRANSLATION|gpt-5.6-luna": labot(
    {
      "study.explanation": [
        "Idea principal: die Bitte es un sustantivo con artículo die y mayúscula.",
        "die Bitte significa petición o solicitud.",
        "No confundir con bitte (por favor) en minúscula.",
      ],
      "study.examples[0].lv": "Tengo una petición.",
      "study.examples[1].lv": "Cumple mi petición.",
      "study.examples[2].lv": "Tiene dos peticiones.",
      "study.examples[3].lv": "¿Puedo preguntar, por favor?",
      "study.examples[4].lv": "Tengo una petición.",
      "study.examples[5].lv": "La solicitud es importante.",
    },
    "ES Bitte gala: noun petición/solicitud; fix examples index-by-index. DE untouched."
  ),

  "g2/a1/es|bleiben|idx:101|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MISTRANSLATION|gpt-5.6-luna": labot(
    {
      "study.examples[3].lv": "Me voy a casa.",
      "study.comparison[1].example": "Ich gehe nach Hause. – Me voy a casa.",
    },
    "ES bleiben gala: Ich gehe nach Hause→Me voy a casa; post-merge semantic audit. DE untouched."
  ),
};

const ids = Object.keys(decisions);
if (ids.length !== 50) {
  console.error(`Expected 50 decisions, got ${ids.length}`);
  process.exit(1);
}

let labotCount = 0;
let nelabotCount = 0;
for (const d of Object.values(decisions)) {
  if (d.owner_decision === "LABOT") labotCount++;
  else if (d.owner_decision === "NELABOT") nelabotCount++;
}

fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(
  JSON.stringify({ total: ids.length, labot: labotCount, nelabot: nelabotCount, pending: 0 }, null, 2)
);
