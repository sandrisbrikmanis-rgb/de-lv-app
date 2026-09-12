"use strict";

const COMPOSITE_BY_ID = {
  "g2/a1/fr|an|idx:12|study.translation; study.examples; study.comparison; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna":
    {
      lv: "À • Au • Près",
      "study.translation": "À • Au • Près",
      "study.examples[0].lv": "Au mur",
      "study.important[0]":
        "An n'est pas n'importe quel « at ». Cela signifie souvent à côté d'une surface, d'un mur, d'une fenêtre ou d'un bord.",
      "study.important[1]":
        "Auf est généralement utilisé sur une surface horizontale.",
    },

  "g2/a1/fr|Appetit|idx:689|lv; study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "study.important[1]":
      "Incorrect : l'appétit → Correct : der Appetit",
    "study.important[2]":
      "Incorrect : Ich bin Appetit. → Correct : J'ai de l'appétit.",
  },
};

const BIS_COMPARISON = [
  {
    word: "bis",
    meaning: "Jusqu'à ce que (le moment soit atteint)",
    example: "Ich bleibe bis morgen. – Je reste jusqu'à demain.",
  },
  {
    word: "bis zu",
    meaning: "Jusqu'à (jusqu'à une limite)",
    example: "bis zum Bahnhof – jusqu'à la gare",
  },
  {
    word: "bis jetzt",
    meaning: "Jusqu'à présent",
    example:
      "Bis jetzt habe ich nichts verstanden. – Jusqu'à présent, je n'ai rien compris.",
  },
  {
    word: "bis jetzt",
    meaning: "Jusqu'à maintenant, jusqu'à ce jour",
    example: "Bis jetzt ist alles gut. – Jusqu'ici, tout va bien.",
  },
];

const BITTE_EXAMPLES = [
  { de: "Eine Tasse Kaffee, bitte.", lv: "Une tasse de café, s'il vous plaît." },
  { de: "Komm bitte herein.", lv: "Entre, s'il vous plaît." },
  { de: "Bitte schön!", lv: "De rien !" },
  { de: "Kann ich bitte fragen?", lv: "Puis-je demander s'il vous plaît" },
  { de: "Ich habe eine Bitte.", lv: "J'ai une demande." },
  { de: "Die Bitte ist wichtig.", lv: "La demande est importante." },
];

module.exports = { COMPOSITE_BY_ID, BIS_COMPARISON, BITTE_EXAMPLES };
