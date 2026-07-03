const COMPARISON_STUDY_CARDS = [
  {
    id: "compare-freundlich-nett-hoeflich-angenehm",
    de: "freundlich • nett • höflich • angenehm",
    lv: "laipns • jauks • pieklājīgs • patīkams",
    level: "A1",
    type: "comparison",
    study: {
      layout: "comparisonStudy",
      id: "compare-freundlich-nett-hoeflich-angenehm",
      title: "laipns • jauks • pieklājīgs • patīkams",
      subtitle: "freundlich • nett • höflich • angenehm",
      lead: "Kuru vārdu lietot? Tie NAV sinonīmi.",
      words: [
        {
          icon: "🙂",
          lv: "laipns",
          de: "freundlich",
          description: "Raksturo cilvēka attieksmi un izturēšanos pret citiem.",
          example: "Er ist freundlich. = Viņš ir laipns."
        },
        {
          icon: "✨",
          lv: "jauks",
          de: "nett",
          description: "Vispārīgs, sarunvalodā ļoti biežs pozitīvs vērtējums.",
          example: "Sie ist nett. = Viņa ir jauka."
        },
        {
          icon: "🤝",
          lv: "pieklājīgs",
          de: "höflich",
          description: "Raksturo korektu, pieklājīgu uzvedību un manieres.",
          example: "Der Kunde war höflich. = Klients bija pieklājīgs."
        },
        {
          icon: "🌿",
          lv: "patīkams",
          de: "angenehm",
          description: "Raksturo patīkamu sajūtu, atmosfēru, laiku vai iespaidu.",
          example: "Das Wetter ist angenehm. = Laiks ir patīkams."
        }
      ],
      examples: [
        { de: "Der Verkäufer war freundlich.", lv: "pārdevējs bija laipns." },
        { de: "Meine Nachbarin ist sehr nett.", lv: "mana kaimiņiene ir ļoti jauka." },
        { de: "Bitte seien Sie höflich.", lv: "lūdzu, esiet pieklājīgi." },
        { de: "Die Stimme ist angenehm.", lv: "balss ir patīkama." },
        { de: "Er ist freundlich.", lv: "viņš ir laipns." },
        { de: "Er ist angenehm.", lv: "viņš ir patīkams cilvēks." }
      ],
      comparisonTable: [
        {
          lv: "laipns",
          de: "freundlich",
          meaning: "laipna attieksme",
          describes: "uzvedību pret cilvēkiem",
          example: "Er ist freundlich.",
          translation: "viņš ir laipns."
        },
        {
          lv: "jauks",
          de: "nett",
          meaning: "vispārīgi jauks",
          describes: "cilvēku vai situāciju sarunvalodā",
          example: "Sie ist nett.",
          translation: "viņa ir jauka."
        },
        {
          lv: "pieklājīgs",
          de: "höflich",
          meaning: "korekts manierēs",
          describes: "pieklājīgu uzvedību",
          example: "Der Kunde war höflich.",
          translation: "klients bija pieklājīgs."
        },
        {
          lv: "patīkams",
          de: "angenehm",
          meaning: "rada labu sajūtu",
          describes: "laiku, atmosfēru, balsi, cilvēku kā iespaidu",
          example: "Das Wetter ist angenehm.",
          translation: "laiks ir patīkams."
        }
      ],
      importantComparison: [
        "Er ist freundlich. = Viņš ir laipns.",
        "Er ist angenehm. = Viņš ir patīkams cilvēks.",
        "Abi teikumi ir pareizi, bet nozīme nav viena un tā pati."
      ],
      tip: {
        left: "Ja runa ir par cilvēka izturēšanos, parasti lieto freundlich. Ja runa ir par patīkamu sajūtu vai atmosfēru, biežāk lieto angenehm.",
        rightTitle: "ātra izvēle",
        rightItems: [
          { de: "freundlich", lv: "laipna attieksme", separator: "→" },
          { de: "nett", lv: "jauks kopumā", separator: "→" },
          { de: "höflich", lv: "pieklājīgas manieres", separator: "→" },
          { de: "angenehm", lv: "patīkama sajūta", separator: "→" }
        ]
      },
      important: [
        "freundlich nav tas pats, kas nett.",
        "freundlich nav tas pats, kas höflich.",
        "freundlich nav tas pats, kas angenehm."
      ],
      mistakes: [
        {
          wrong: "Er ist angenehm. ja doma ir “viņš ir laipns”.",
          right: "Er ist freundlich."
        },
        {
          wrong: "Das Wetter ist freundlich. ja doma ir “laiks ir patīkams”.",
          right: "Das Wetter ist angenehm."
        }
      ],
      remember: [
        "freundlich = kā cilvēks izturas.",
        "angenehm = kā kaut kas jūtas vai iespaido."
      ],
      sectionAccents: {
        lead: { purple: ["NAV"], blue: ["sinonīmi"] },
        comparisonCards: [
          { lv: { purple: ["laipns"] }, de: { green: ["freundlich"] }, example: { green: ["freundlich"], purple: ["laipns"] } },
          { lv: { purple: ["jauks"] }, de: { green: ["nett"] }, example: { green: ["nett"], purple: ["jauka"] } },
          { lv: { purple: ["pieklājīgs"] }, de: { green: ["höflich"] }, example: { green: ["höflich"], purple: ["pieklājīgs"] } },
          { lv: { purple: ["patīkams"] }, de: { green: ["angenehm"] }, example: { green: ["angenehm"], purple: ["patīkams"] } }
        ],
        examples: [
          { de: { green: ["freundlich"] }, lv: { purple: ["laipns"] } },
          { de: { green: ["nett"] }, lv: { purple: ["jauka"] } },
          { de: { green: ["höflich"] }, lv: { purple: ["pieklājīgi"] } },
          { de: { green: ["angenehm"] }, lv: { purple: ["patīkama"] } },
          { de: { green: ["freundlich"] }, lv: { purple: ["laipns"] } },
          { de: { green: ["angenehm"] }, lv: { purple: ["patīkams"] } }
        ],
        comparisonTable: [
          { lv: { purple: ["laipns"] }, de: { green: ["freundlich"] }, example: { green: ["freundlich"] }, translation: { purple: ["laipns"] } },
          { lv: { purple: ["jauks"] }, de: { green: ["nett"] }, example: { green: ["nett"] }, translation: { purple: ["jauka"] } },
          { lv: { purple: ["pieklājīgs"] }, de: { green: ["höflich"] }, example: { green: ["höflich"] }, translation: { purple: ["pieklājīgs"] } },
          { lv: { purple: ["patīkams"] }, de: { green: ["angenehm"] }, example: { green: ["angenehm"] }, translation: { purple: ["patīkams"] } }
        ],
        importantComparison: [
          { blue: ["freundlich"], purple: ["laipns"] },
          { red: ["angenehm"], purple: ["patīkams"] },
          { yellow: ["pareizi"], purple: ["nozīme"] }
        ],
        tip: {
          left: { blue: ["freundlich"], red: ["angenehm"] },
          rightItems: [
            { de: { green: ["freundlich"] }, lv: { purple: ["laipna"] } },
            { de: { green: ["nett"] }, lv: { purple: ["jauks"] } },
            { de: { green: ["höflich"] }, lv: { purple: ["pieklājīgas"] } },
            { de: { green: ["angenehm"] }, lv: { purple: ["patīkama"] } }
          ]
        },
        important: [
          { blue: ["freundlich"], green: ["nett"] },
          { blue: ["freundlich"], yellow: ["höflich"] },
          { blue: ["freundlich"], red: ["angenehm"] }
        ],
        mistakes: [
          { wrong: { red: ["angenehm"], purple: ["laipns"] }, right: { blue: ["freundlich"] } },
          { wrong: { blue: ["freundlich"], purple: ["patīkams"] }, right: { red: ["angenehm"] } }
        ],
        remember: [
          { blue: ["freundlich"] },
          { red: ["angenehm"] }
        ]
      }
    }
  },
  {
    id: "compare-kennen-wissen",
    de: "kennen • wissen",
    lv: "pazīt • zināt",
    level: "A1",
    type: "comparison",
    study: {
      layout: "comparisonStudy",
      id: "compare-kennen-wissen",
      title: "pazīt • zināt",
      subtitle: "kennen • wissen",
      lead: "kennen lieto cilvēkiem, vietām un lietām; wissen lieto faktiem un informācijai.",
      words: [
        {
          icon: "👤",
          lv: "pazīt",
          de: "kennen",
          description: "Lieto, ja pazīsti cilvēku, vietu, lietu vai pieredzi.",
          example: "Ich kenne ihn. = Es viņu pazīstu."
        },
        {
          icon: "💡",
          lv: "zināt",
          de: "wissen",
          description: "Lieto faktiem, informācijai, atbildēm un zināšanām.",
          example: "Ich weiß das. = Es to zinu."
        }
      ],
      examples: [
        { de: "Ich kenne ihn.", lv: "es viņu pazīstu." },
        { de: "Ich weiß das.", lv: "es to zinu." },
        { de: "Kennst du Berlin?", lv: "vai tu pazīsti Berlīni?" },
        { de: "Weißt du die Antwort?", lv: "vai tu zini atbildi?" },
        { de: "Ich kenne dieses Lied.", lv: "es pazīstu šo dziesmu." },
        { de: "Ich weiß, wo er wohnt.", lv: "es zinu, kur viņš dzīvo." }
      ],
      comparisonTable: [
        {
          lv: "pazīt",
          de: "kennen",
          meaning: "būt pazīstamam ar kādu/kaut ko",
          describes: "cilvēkus, vietas, lietas, pieredzi",
          example: "Ich kenne ihn.",
          translation: "es viņu pazīstu."
        },
        {
          lv: "zināt",
          de: "wissen",
          meaning: "zināt faktu vai informāciju",
          describes: "atbildes, faktus, informāciju",
          example: "Ich weiß die Antwort.",
          translation: "es zinu atbildi."
        },
        {
          lv: "pazīt pilsētu",
          de: "eine Stadt kennen",
          meaning: "pazīt vietu",
          describes: "vietas un pieredzi",
          example: "Ich kenne Berlin gut.",
          translation: "es labi pazīstu Berlīni."
        },
        {
          lv: "zināt, ka...",
          de: "wissen, dass...",
          meaning: "zināt faktu",
          describes: "teikumus ar faktu",
          example: "Ich weiß, dass er kommt.",
          translation: "es zinu, ka viņš nāks."
        }
      ],
      importantComparison: [
        "Ich kenne ihn. = Es viņu pazīstu.",
        "Ich weiß das. = Es to zinu.",
        "kennen nav domāts faktiem, un wissen nav domāts cilvēka pazīšanai."
      ],
      tip: {
        left: "Ja pēc darbības vārda seko cilvēks, vieta vai lieta, parasti lieto kennen. Ja seko fakts, atbilde vai palīgteikums, parasti lieto wissen.",
        rightTitle: "ātra izvēle",
        rightItems: [
          { de: "Ich kenne Maria.", lv: "es pazīstu Mariju.", separator: "=" },
          { de: "Ich weiß die Antwort.", lv: "es zinu atbildi.", separator: "=" }
        ]
      },
      important: [
        "kennen = pazīt kādu vai kaut ko.",
        "wissen = zināt faktu vai informāciju.",
        "Ich weiß ihn nav pareizi, ja runa ir par cilvēku."
      ],
      mistakes: [
        {
          wrong: "Ich weiß ihn.",
          right: "Ich kenne ihn."
        },
        {
          wrong: "Ich kenne die Antwort.",
          right: "Ich weiß die Antwort."
        }
      ],
      remember: [
        "Personas un vietas: kennen.",
        "Fakti un atbildes: wissen."
      ],
      sectionAccents: {
        lead: { blue: ["kennen"], yellow: ["wissen"] },
        comparisonCards: [
          { lv: { purple: ["pazīt"] }, de: { green: ["kennen"] }, example: { green: ["kenne"], purple: ["pazīstu"] } },
          { lv: { purple: ["zināt"] }, de: { green: ["wissen"] }, example: { green: ["weiß"], purple: ["zinu"] } }
        ],
        examples: [
          { de: { green: ["kenne"] }, lv: { purple: ["pazīstu"] } },
          { de: { green: ["weiß"] }, lv: { purple: ["zinu"] } },
          { de: { green: ["Kennst"] }, lv: { purple: ["pazīsti"] } },
          { de: { green: ["Weißt"] }, lv: { purple: ["zini"] } },
          { de: { green: ["kenne"] }, lv: { purple: ["pazīstu"] } },
          { de: { green: ["weiß"] }, lv: { purple: ["zinu"] } }
        ],
        comparisonTable: [
          { lv: { purple: ["pazīt"] }, de: { green: ["kennen"] }, example: { green: ["kenne"] }, translation: { purple: ["pazīstu"] } },
          { lv: { purple: ["zināt"] }, de: { green: ["wissen"] }, example: { green: ["weiß"] }, translation: { purple: ["zinu"] } },
          { lv: { purple: ["pazīt"] }, de: { green: ["kennen"] }, example: { green: ["kenne"] }, translation: { purple: ["pazīstu"] } },
          { lv: { purple: ["zināt"] }, de: { green: ["wissen"] }, example: { green: ["weiß"] }, translation: { purple: ["zinu"] } }
        ],
        importantComparison: [
          { blue: ["kenne"], purple: ["pazīstu"] },
          { yellow: ["weiß"], purple: ["zinu"] },
          { blue: ["kennen"], yellow: ["wissen"] }
        ],
        tip: {
          left: { blue: ["kennen"], yellow: ["wissen"] },
          rightItems: [
            { de: { green: ["kenne"] }, lv: { purple: ["pazīstu"] } },
            { de: { green: ["weiß"] }, lv: { purple: ["zinu"] } }
          ]
        },
        important: [
          { blue: ["kennen"], purple: ["pazīt"] },
          { yellow: ["wissen"], purple: ["zināt"] },
          { yellow: ["weiß"], blue: ["kenne"] }
        ],
        mistakes: [
          { wrong: { yellow: ["weiß"] }, right: { blue: ["kenne"] } },
          { wrong: { blue: ["kenne"] }, right: { yellow: ["weiß"] } }
        ],
        remember: [
          { blue: ["kennen"] },
          { yellow: ["wissen"] }
        ]
      }
    }
  },
  {
    id: "compare-stehen-stellen",
    de: "stehen • stellen",
    lv: "stāvēt • nolikt stāvus",
    level: "A1",
    type: "comparison",
    study: {
      layout: "comparisonStudy",
      id: "compare-stehen-stellen",
      title: "stāvēt • nolikt stāvus",
      subtitle: "stehen • stellen",
      lead: "stehen apraksta stāvokli; stellen apraksta darbību.",
      words: [
        {
          icon: "📍",
          lv: "stāvēt",
          de: "stehen",
          description: "Apraksta, kur kaut kas jau atrodas stāvus.",
          example: "Die Flasche steht auf dem Tisch. = Pudele stāv uz galda."
        },
        {
          icon: "✋",
          lv: "nolikt stāvus",
          de: "stellen",
          description: "Apraksta darbību: kāds kaut ko noliek stāvus.",
          example: "Ich stelle die Flasche auf den Tisch. = Es nolieku pudeli uz galda."
        }
      ],
      examples: [
        { de: "Die Flasche steht auf dem Tisch.", lv: "pudele stāv uz galda." },
        { de: "Ich stelle die Flasche auf den Tisch.", lv: "es nolieku pudeli uz galda." },
        { de: "Der Stuhl steht am Fenster.", lv: "krēsls stāv pie loga." },
        { de: "Stell den Stuhl bitte ans Fenster.", lv: "lūdzu, noliec krēslu pie loga." },
        { de: "Das Glas steht in der Küche.", lv: "glāze stāv virtuvē." },
        { de: "Ich stelle das Glas in die Küche.", lv: "es nolieku glāzi virtuvē." }
      ],
      comparisonTable: [
        {
          lv: "stāvēt",
          de: "stehen",
          meaning: "atrasties stāvus",
          describes: "stāvokli",
          example: "Die Flasche steht auf dem Tisch.",
          translation: "pudele stāv uz galda."
        },
        {
          lv: "nolikt stāvus",
          de: "stellen",
          meaning: "novietot stāvus",
          describes: "darbību",
          example: "Ich stelle die Flasche auf den Tisch.",
          translation: "es nolieku pudeli uz galda."
        },
        {
          lv: "gulēt / atrasties guļus",
          de: "liegen",
          meaning: "atrasties guļus",
          describes: "stāvokli",
          example: "Das Buch liegt auf dem Tisch.",
          translation: "grāmata guļ uz galda."
        },
        {
          lv: "nolikt guļus",
          de: "legen",
          meaning: "novietot guļus",
          describes: "darbību",
          example: "Ich lege das Buch auf den Tisch.",
          translation: "es nolieku grāmatu uz galda."
        }
      ],
      importantComparison: [
        "Die Flasche steht auf dem Tisch. = Pudele stāv uz galda.",
        "Ich stelle die Flasche auf den Tisch. = Es nolieku pudeli uz galda.",
        "stehen ir stāvoklis, stellen ir darbība."
      ],
      tip: {
        left: "Ja priekšmets jau ir kaut kur stāvus, lieto stehen. Ja tu to novieto stāvus, lieto stellen.",
        rightTitle: "ātra izvēle",
        rightItems: [
          { de: "Die Lampe steht hier.", lv: "lampa stāv šeit.", separator: "=" },
          { de: "Ich stelle die Lampe hierhin.", lv: "es nolieku lampu šeit.", separator: "=" }
        ]
      },
      important: [
        "stehen = stāvoklis.",
        "stellen = darbība.",
        "Ich stehe die Flasche nav pareizi, ja tu kaut ko noliec."
      ],
      mistakes: [
        {
          wrong: "Ich stehe die Flasche auf den Tisch.",
          right: "Ich stelle die Flasche auf den Tisch."
        },
        {
          wrong: "Die Flasche stellt auf dem Tisch.",
          right: "Die Flasche steht auf dem Tisch."
        }
      ],
      remember: [
        "Priekšmets jau atrodas stāvus: stehen.",
        "Kāds priekšmetu noliek stāvus: stellen."
      ],
      sectionAccents: {
        lead: { blue: ["stehen"], green: ["stellen"] },
        comparisonCards: [
          { lv: { purple: ["stāvēt"] }, de: { green: ["stehen"] }, example: { green: ["steht"], purple: ["stāv"] } },
          { lv: { purple: ["nolikt stāvus"] }, de: { green: ["stellen"] }, example: { green: ["stelle"], purple: ["nolieku"] } }
        ],
        examples: [
          { de: { green: ["steht"] }, lv: { purple: ["stāv"] } },
          { de: { green: ["stelle"] }, lv: { purple: ["nolieku"] } },
          { de: { green: ["steht"] }, lv: { purple: ["stāv"] } },
          { de: { green: ["Stell"] }, lv: { purple: ["noliec"] } },
          { de: { green: ["steht"] }, lv: { purple: ["stāv"] } },
          { de: { green: ["stelle"] }, lv: { purple: ["nolieku"] } }
        ],
        comparisonTable: [
          { lv: { purple: ["stāvēt"] }, de: { green: ["stehen"] }, example: { green: ["steht"] }, translation: { purple: ["stāv"] } },
          { lv: { purple: ["nolikt stāvus"] }, de: { green: ["stellen"] }, example: { green: ["stelle"] }, translation: { purple: ["nolieku"] } },
          { lv: { purple: ["gulēt"] }, de: { green: ["liegen"] }, example: { green: ["liegt"] }, translation: { purple: ["guļ"] } },
          { lv: { purple: ["nolikt guļus"] }, de: { green: ["legen"] }, example: { green: ["lege"] }, translation: { purple: ["nolieku"] } }
        ],
        importantComparison: [
          { blue: ["steht"], purple: ["stāv"] },
          { green: ["stelle"], purple: ["nolieku"] },
          { blue: ["stehen"], green: ["stellen"] }
        ],
        tip: {
          left: { blue: ["stehen"], green: ["stellen"] },
          rightItems: [
            { de: { green: ["steht"] }, lv: { purple: ["stāv"] } },
            { de: { green: ["stelle"] }, lv: { purple: ["nolieku"] } }
          ]
        },
        important: [
          { blue: ["stehen"] },
          { green: ["stellen"] },
          { blue: ["stehe"], green: ["noliec"] }
        ],
        mistakes: [
          { wrong: { blue: ["stehe"] }, right: { green: ["stelle"] } },
          { wrong: { green: ["stellt"] }, right: { blue: ["steht"] } }
        ],
        remember: [
          { blue: ["stehen"] },
          { green: ["stellen"] }
        ]
      }
    }
  }
];


function createComparisonStudyCard(config) {
  const colors = ["blue", "green", "yellow", "red", "orange"];
  const accents = { purple: config.lvHighlights || [] };
  config.words.forEach((word, index) => {
    accents[colors[index]] = word.forms || [word.de];
  });

  return {
    id: config.id,
    de: config.subtitle,
    lv: config.title,
    level: "A2",
    type: "comparison",
    study: {
      layout: "comparisonStudy",
      id: config.id,
      title: config.title,
      subtitle: config.subtitle,
      lead: config.lead,
      explanation: config.explanation,
      words: config.words.map((word, index) => ({
        icon: word.icon || "•",
        lv: word.lv,
        de: word.de,
        description: word.description,
        example: word.example
      })),
      examples: config.examples,
      comparisonTable: config.comparisonTable,
      importantComparison: config.importantComparison,
      tip: config.tip,
      important: config.important,
      mistakes: config.mistakes,
      remember: config.remember,
      accents,
      sectionAccents: config.sectionAccents || {}
    }
  };
}

COMPARISON_STUDY_CARDS.push(
  createComparisonStudyCard({
    id: "compare-liegen-legen",
    title: "gulēt • atrasties • nolikt guļus",
    subtitle: "liegen • legen",
    lead: "liegen apraksta stāvokli; legen apraksta darbību.",
    explanation: "liegen lieto, ja kaut kas jau atrodas guļus vai horizontāli. legen lieto, ja kāds kaut ko noliek guļus vai horizontāli.",
    lvHighlights: ["gulēt", "atrodas", "nolikt", "guļus", "stāvoklis", "darbība"],
    words: [
      { icon: "📘", lv: "gulēt / atrasties", de: "liegen", forms: ["liegen", "liegt"], description: "Stāvoklis: kaut kas jau atrodas guļus vai horizontāli.", example: "Das Buch liegt auf dem Tisch. = Grāmata guļ uz galda." },
      { icon: "✋", lv: "nolikt guļus", de: "legen", forms: ["legen", "lege", "legst", "legt"], description: "Darbība: kāds kaut ko noliek guļus vai horizontāli.", example: "Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda." }
    ],
    examples: [
      { de: "Das Buch liegt auf dem Tisch.", lv: "grāmata guļ uz galda." },
      { de: "Ich lege das Buch auf den Tisch.", lv: "es nolieku grāmatu uz galda." },
      { de: "Die Schlüssel liegen im Flur.", lv: "atslēgas atrodas gaitenī." },
      { de: "Leg die Schlüssel bitte hierhin.", lv: "lūdzu, noliec atslēgas šeit." },
      { de: "Das Handy liegt neben mir.", lv: "telefons atrodas man blakus." },
      { de: "Ich lege mich kurz hin.", lv: "es uz brīdi apguļos." }
    ],
    comparisonTable: [
      { lv: "atrasties guļus", de: "liegen", meaning: "stāvoklis", describes: "kur kaut kas atrodas", example: "Das Buch liegt hier.", translation: "grāmata atrodas šeit." },
      { lv: "nolikt guļus", de: "legen", meaning: "darbība", describes: "ko kāds novieto", example: "Ich lege das Buch hierhin.", translation: "es nolieku grāmatu šeit." },
      { lv: "stāvēt", de: "stehen", meaning: "stāvoklis stāvus", describes: "vertikālu atrašanos", example: "Die Flasche steht da.", translation: "pudele tur stāv." },
      { lv: "nolikt stāvus", de: "stellen", meaning: "darbība stāvus", describes: "vertikālu novietošanu", example: "Ich stelle die Flasche hin.", translation: "es nolieku pudeli stāvus." }
    ],
    importantComparison: ["Das Buch liegt auf dem Tisch.", "Ich lege das Buch auf den Tisch.", "Pirmais teikums apraksta stāvokli, otrais - darbību."],
    tip: { left: "Ja priekšmets jau ir kaut kur horizontāli, lieto liegen. Ja tu to novieto horizontāli, lieto legen.", rightTitle: "ātri", rightItems: [{ de: "liegt", lv: "atrodas" }, { de: "lege", lv: "nolieku" }] },
    important: ["liegen = stāvoklis.", "legen = darbība.", "Ich liege das Buch nav pareizi."],
    mistakes: [{ wrong: "Ich liege das Buch auf den Tisch.", right: "Ich lege das Buch auf den Tisch." }],
    remember: ["Stāvoklis: liegen.", "Darbība: legen."]
  }),
  createComparisonStudyCard({
    id: "compare-bringen-holen",
    title: "atnest • aiznest • aiziet pakaļ",
    subtitle: "bringen • holen",
    lead: "bringen nozīmē nogādāt; holen nozīmē aiziet pakaļ un atvest.",
    explanation: "bringen virziens ir uz kādu vietu vai pie kāda cilvēka. holen ietver domu: aiziet vai aizbraukt pakaļ un pēc tam atvest.",
    lvHighlights: ["atnest", "aiznest", "aiziet pakaļ", "atvest", "nogādāt", "paņemt"],
    sectionAccents: {
      examples: [
        { de: { green: ["bringe"] }, lv: { purple: ["atnesu"] } },
        { de: { green: ["hole"] }, lv: { purple: ["aizeju pēc"] } },
        { de: { green: ["abholen"] }, lv: { purple: ["atbraukt man pakaļ"] } },
        { de: { green: ["Bring"] }, lv: { purple: ["aiznes"] } },
        { de: { green: ["hole"] }, lv: { purple: ["paņemu"] } },
        { de: { green: ["bringt"] }, lv: { purple: ["nogādā"] } }
      ],
      comparisonTable: [
        {
          lv: { purple: ["nogādāt"] },
          de: { green: ["bringen"] },
          meaning: { purple: ["nest/vest uz mērķi"] },
          example: { green: ["bringe"] },
          translation: { purple: ["atnesu"] }
        },
        {
          lv: { purple: ["aiziet pakaļ"] },
          de: { green: ["holen"] },
          meaning: { purple: ["paņemt un atvest"] },
          example: { green: ["hole"] },
          translation: { purple: ["aizeju pēc"] }
        },
        {
          lv: { purple: ["atbraukt pakaļ"] },
          de: { green: ["abholen"] },
          meaning: { purple: ["paņemt cilvēku/lietu"] },
          example: { green: ["hole"], red: ["ab"] },
          translation: { purple: ["atbraukšu tev pakaļ"] }
        },
        {
          lv: { purple: ["ņemt līdzi"] },
          de: { green: ["mitnehmen"] },
          meaning: { purple: ["paņemt sev līdzi"] },
          example: { green: ["nehme", "mit"] },
          translation: { purple: ["paņemu līdzi"] }
        }
      ],
      importantComparison: [
        { blue: ["bringe"], purple: ["atnesu"] },
        { green: ["hole"], purple: ["aizeju pēc"] },
        { blue: ["bringen"], green: ["holen"], purple: ["nogādā", "iet pakaļ"] }
      ],
      tip: {
        left: { blue: ["bringen"], green: ["holen"], purple: ["nonāk pie", "aiziet pakaļ"] },
        rightItems: [
          { de: { green: ["Bring"] }, lv: { purple: ["Atnes"] } },
          { de: { green: ["Hol"] }, lv: { purple: ["Aizej", "pakaļ"] } }
        ]
      },
      important: [
        { blue: ["bringen"], purple: ["nogādāt"] },
        { green: ["holen"], purple: ["aiziet pakaļ", "atvest"] },
        { red: ["abholen"], purple: ["paņemšanai"] }
      ],
      mistakes: [
        {
          wrong: { blue: ["bringe"], purple: ["aizeju pēc"] },
          right: { green: ["hole"] }
        }
      ],
      remember: [
        { blue: ["bringen"] },
        { green: ["holen"] }
      ]
    },
    words: [
      { icon: "➡", lv: "nogādāt", de: "bringen", forms: ["bringen", "bringe", "bringst", "bringt"], description: "Kaut ko vai kādu nogādā pie adresāta vai uz vietu.", example: "Ich bringe dir Kaffee. = Es tev atnesu kafiju." },
      { icon: "↩", lv: "aiziet pakaļ", de: "holen", forms: ["holen", "hole", "holst", "holt", "abholen"], description: "Aiziet pakaļ, paņem un atved atpakaļ vai pie sevis.", example: "Ich hole Kaffee. = Es aizeju pēc kafijas." }
    ],
    examples: [
      { de: "Ich bringe dir Kaffee.", lv: "es tev atnesu kafiju." },
      { de: "Ich hole Kaffee.", lv: "es aizeju pēc kafijas." },
      { de: "Kannst du mich abholen?", lv: "vai vari atbraukt man pakaļ?" },
      { de: "Bring bitte den Brief zur Post.", lv: "lūdzu, aiznes vēstuli uz pastu." },
      { de: "Ich hole meine Tochter von der Schule.", lv: "es paņemu meitu no skolas." },
      { de: "Er bringt das Paket nach Hause.", lv: "viņš nogādā paku mājās." }
    ],
    comparisonTable: [
      { lv: "nogādāt", de: "bringen", meaning: "nest/vest uz mērķi", describes: "virzienu pie adresāta", example: "Ich bringe dir Kaffee.", translation: "es tev atnesu kafiju." },
      { lv: "aiziet pakaļ", de: "holen", meaning: "paņemt un atvest", describes: "došanos pakaļ", example: "Ich hole Kaffee.", translation: "es aizeju pēc kafijas." },
      { lv: "atbraukt pakaļ", de: "abholen", meaning: "paņemt cilvēku/lietu", describes: "transportu vai sarunātu paņemšanu", example: "Ich hole dich ab.", translation: "es atbraukšu tev pakaļ." },
      { lv: "ņemt līdzi", de: "mitnehmen", meaning: "paņemt sev līdzi", describes: "kopīgu virzību", example: "Ich nehme dich mit.", translation: "es tevi paņemu līdzi." }
    ],
    importantComparison: ["Ich bringe dir Kaffee. = Es tev atnesu kafiju.", "Ich hole Kaffee. = Es aizeju pēc kafijas.", "bringen nogādā, holen iet pakaļ."],
    tip: { left: "Ja kaut kas nonāk pie cilvēka, bieži der bringen. Ja vispirms jāaiziet pakaļ, der holen.", rightTitle: "ātri", rightItems: [{ de: "Bring es mir.", lv: "atnes man to." }, { de: "Hol es bitte.", lv: "aizej tam pakaļ." }] },
    important: ["bringen = nogādāt.", "holen = aiziet pakaļ un atvest.", "abholen ir bieži lietots cilvēku paņemšanai."],
    mistakes: [{ wrong: "Ich bringe Kaffee, ja doma ir: es aizeju pēc kafijas.", right: "Ich hole Kaffee." }],
    remember: ["Pie manis/tev: bringen.", "Pakaļ un atpakaļ: holen."]
  }),
  createComparisonStudyCard({
    id: "compare-sehen-schauen-ansehen",
    title: "redzēt • skatīties • apskatīt",
    subtitle: "sehen • schauen • ansehen",
    lead: "sehen ir redzēt, schauen ir skatīties, ansehen ir apskatīt vai noskatīties.",
    explanation: "sehen bieži notiek bez īpašas piepūles. schauen nozīmē aktīvi skatīties. ansehen lieto, ja uzmanību vērš uz konkrētu objektu, filmu vai lietu.",
    lvHighlights: ["redzēt", "skatīties", "apskatīt", "noskatīties"],
    words: [
      { icon: "👁", lv: "redzēt", de: "sehen", forms: ["sehen", "sehe", "siehst", "sieht"], description: "Uztvert ar acīm, bieži bez īpaša nodoma.", example: "Ich sehe dich. = Es tevi redzu." },
      { icon: "👀", lv: "skatīties", de: "schauen", forms: ["schauen", "schaue", "Schau", "schaut"], description: "Aktīvi skatīties vai palūkoties.", example: "Ich schaue fern. = Es skatos televizoru." },
      { icon: "🎬", lv: "apskatīt / noskatīties", de: "ansehen", forms: ["ansehen", "sehe", "an", "Schau", "dir", "sieht"], description: "Apskatīt konkrētu lietu vai noskatīties filmu/video.", example: "Ich sehe mir den Film an. = Es noskatos filmu." }
    ],
    examples: [
      { de: "Ich sehe dich.", lv: "es tevi redzu." },
      { de: "Ich schaue fern.", lv: "es skatos televizoru." },
      { de: "Ich sehe mir den Film an.", lv: "es noskatos filmu." },
      { de: "Schau dir das an!", lv: "apskati šo!" },
      { de: "Siehst du das Haus?", lv: "vai tu redzi to māju?" },
      { de: "Wir schauen aus dem Fenster.", lv: "mēs skatāmies pa logu." }
    ],
    comparisonTable: [
      { lv: "redzēt", de: "sehen", meaning: "uztvert ar acīm", describes: "redzi", example: "Ich sehe dich.", translation: "es tevi redzu." },
      { lv: "skatīties", de: "schauen", meaning: "aktīvi skatīties", describes: "darbību", example: "Ich schaue fern.", translation: "es skatos televizoru." },
      { lv: "apskatīt", de: "ansehen", meaning: "skatīties uz konkrētu objektu", describes: "mērķētu skatīšanos", example: "Schau dir das an!", translation: "apskati šo!" },
      { lv: "noskatīties", de: "sich ansehen", meaning: "noskatīties filmu/video", describes: "pilnu skatīšanos", example: "Ich sehe mir den Film an.", translation: "es noskatos filmu." }
    ],
    importantComparison: ["Ich sehe dich. = Es tevi redzu.", "Ich schaue fern. = Es skatos televizoru.", "Ich sehe mir den Film an. = Es noskatos filmu."],
    tip: { left: "Ja acis kaut ko uztver, lieto sehen. Ja aktīvi skaties, lieto schauen. Ja apskati konkrētu lietu, bieži der ansehen.", rightTitle: "ātri", rightItems: [{ de: "sehen", lv: "redzēt" }, { de: "schauen", lv: "skatīties" }, { de: "ansehen", lv: "apskatīt" }] },
    important: ["sehen nav vienmēr skatīties.", "ansehen bieži ir atdalāms: Ich sehe mir ... an."],
    mistakes: [{ wrong: "Ich schaue dich, ja doma ir: es tevi redzu.", right: "Ich sehe dich." }],
    remember: ["sehen = redzēt.", "schauen = skatīties.", "ansehen = apskatīt/noskatīties."]
  }),
  createComparisonStudyCard({
    id: "compare-hoeren-zuhoeren",
    title: "dzirdēt • klausīties uzmanīgi",
    subtitle: "hören • zuhören",
    lead: "hören nozīmē dzirdēt vai klausīties skaņu; zuhören nozīmē uzmanīgi klausīties cilvēku.",
    explanation: "hören lieto skaņām, mūzikai un tam, ko dzird. zuhören lieto, ja uzmanīgi klausās cilvēkā vai runātājā; tam bieži ir Dativ: mir, dir, ihm.",
    lvHighlights: ["dzirdēt", "klausīties", "uzmanīgi", "cilvēku"],
    words: [
      { icon: "🎧", lv: "dzirdēt / klausīties", de: "hören", forms: ["hören", "höre", "hörst", "hört", "hör"], description: "Dzirdēt skaņu vai klausīties mūziku.", example: "Ich höre Musik. = Es klausos mūziku." },
      { icon: "👂", lv: "uzmanīgi klausīties", de: "zuhören", forms: ["zuhören", "höre", "zu", "hör", "zuhört"], description: "Uzmanīgi klausīties cilvēku vai teikto.", example: "Ich höre dir zu. = Es tevī klausos." }
    ],
    examples: [
      { de: "Ich höre Musik.", lv: "es klausos mūziku." },
      { de: "Ich höre dir zu.", lv: "es tevī klausos." },
      { de: "Bitte hör mir zu.", lv: "lūdzu, klausies manī." },
      { de: "Hörst du den Regen?", lv: "vai tu dzirdi lietu?" },
      { de: "Die Kinder hören eine Geschichte.", lv: "bērni klausās stāstu." },
      { de: "Sie hört dem Lehrer gut zu.", lv: "viņa uzmanīgi klausās skolotājā." }
    ],
    comparisonTable: [
      { lv: "dzirdēt", de: "hören", meaning: "uztvert skaņu", describes: "skaņas", example: "Ich höre dich.", translation: "es tevi dzirdu." },
      { lv: "klausīties mūziku", de: "Musik hören", meaning: "klausīties audio", describes: "mūziku, radio", example: "Ich höre Musik.", translation: "es klausos mūziku." },
      { lv: "uzmanīgi klausīties", de: "zuhören", meaning: "sekot teiktajam", describes: "cilvēku/runātāju", example: "Ich höre dir zu.", translation: "es tevī klausos." },
      { lv: "ieklausīties", de: "zuhören", meaning: "pievērst uzmanību", describes: "sarunu", example: "Bitte hör mir zu.", translation: "lūdzu, klausies manī." }
    ],
    importantComparison: ["Ich höre Musik. = Es klausos mūziku.", "Ich höre dir zu. = Es tevī klausos.", "zuhören bieži prasa Dativ: mir, dir, ihm."],
    tip: { left: "Skaņa vai mūzika: hören. Cilvēks, kam uzmanīgi seko: zuhören.", rightTitle: "ātri", rightItems: [{ de: "Ich höre Musik.", lv: "es klausos mūziku." }, { de: "Ich höre dir zu.", lv: "es tevī klausos." }] },
    important: ["Ich höre dir nav pilns teikums šai nozīmei.", "Pareizi: Ich höre dir zu."],
    mistakes: [{ wrong: "Ich höre dir.", right: "Ich höre dir zu." }],
    remember: ["hören = dzirdēt/klausīties skaņu.", "zuhören = uzmanīgi klausīties cilvēku."]
  }),
  createComparisonStudyCard({
    id: "compare-sagen-sprechen-erzaehlen",
    title: "teikt • runāt • stāstīt",
    subtitle: "sagen • sprechen • erzählen",
    lead: "sagen = pateikt, sprechen = runāt, erzählen = stāstīt.",
    explanation: "sagen lieto konkrētam pateiktam tekstam. sprechen raksturo runāšanu vai valodas lietošanu. erzählen nozīmē stāstīt stāstu, notikumu vai pieredzi.",
    lvHighlights: ["teikt", "pateikt", "runāt", "stāstīt"],
    words: [
      { icon: "💬", lv: "teikt", de: "sagen", forms: ["sagen", "sage", "sagst", "sagt", "gesagt"], description: "Pateikt konkrētu domu, vārdu vai teikumu.", example: "Was hast du gesagt? = Ko tu pateici?" },
      { icon: "🗣", lv: "runāt", de: "sprechen", forms: ["sprechen", "spreche", "sprichst", "spricht"], description: "Runāt, sarunāties vai lietot valodu.", example: "Ich spreche Deutsch. = Es runāju vāciski." },
      { icon: "📖", lv: "stāstīt", de: "erzählen", forms: ["erzählen", "erzähle", "erzählst", "erzählt"], description: "Stāstīt notikumu, stāstu vai pieredzi.", example: "Er erzählt eine Geschichte. = Viņš stāsta stāstu." }
    ],
    examples: [
      { de: "Was hast du gesagt?", lv: "ko tu pateici?" },
      { de: "Ich spreche Deutsch.", lv: "es runāju vāciski." },
      { de: "Er erzählt eine Geschichte.", lv: "viņš stāsta stāstu." },
      { de: "Sag mir bitte die Wahrheit.", lv: "lūdzu, pasaki man patiesību." },
      { de: "Wir sprechen über die Arbeit.", lv: "mēs runājam par darbu." },
      { de: "Sie erzählt von ihrer Reise.", lv: "viņa stāsta par savu ceļojumu." }
    ],
    comparisonTable: [
      { lv: "teikt", de: "sagen", meaning: "pateikt konkrētu domu", describes: "vārdus/teikumus", example: "Was hast du gesagt?", translation: "ko tu pateici?" },
      { lv: "runāt", de: "sprechen", meaning: "runāt vai sarunāties", describes: "valodu/sarunu", example: "Ich spreche Deutsch.", translation: "es runāju vāciski." },
      { lv: "stāstīt", de: "erzählen", meaning: "stāstīt notikumu", describes: "stāstu/pieredzi", example: "Er erzählt eine Geschichte.", translation: "viņš stāsta stāstu." },
      { lv: "sarunāties", de: "reden", meaning: "runāt sarunvalodā", describes: "ikdienas sarunu", example: "Wir reden später.", translation: "mēs parunāsim vēlāk." }
    ],
    importantComparison: ["Was hast du gesagt? = Ko tu pateici?", "Ich spreche Deutsch. = Es runāju vāciski.", "Er erzählt eine Geschichte. = Viņš stāsta stāstu."],
    tip: { left: "Konkrēts teksts: sagen. Valoda vai saruna: sprechen. Stāsts vai notikums: erzählen.", rightTitle: "ātri", rightItems: [{ de: "sagen", lv: "teikt" }, { de: "sprechen", lv: "runāt" }, { de: "erzählen", lv: "stāstīt" }] },
    important: ["sagen nav tas pats, kas sprechen.", "erzählen nozīmē vairāk nekā vienkārši pateikt."],
    mistakes: [{ wrong: "Ich sage Deutsch.", right: "Ich spreche Deutsch." }],
    remember: ["sagen = pateikt.", "sprechen = runāt.", "erzählen = stāstīt."]
  }),
  createComparisonStudyCard({
    id: "compare-gross-hoch",
    title: "liels • augsts",
    subtitle: "groß • hoch",
    lead: "groß nozīmē liels; hoch nozīmē augsts.",
    explanation: "groß raksturo izmēru kopumā vai cilvēka augumu. hoch raksturo augstumu, vertikālu virzienu vai līmeni.",
    lvHighlights: ["liels", "augsts", "augumu", "izmēru"],
    words: [
      { icon: "⬛", lv: "liels", de: "groß", forms: ["groß", "grosse", "große", "großer"] , description: "Liels izmērā vai cilvēkam - garš augumā.", example: "Das Haus ist groß. = Māja ir liela." },
      { icon: "⬆", lv: "augsts", de: "hoch", forms: ["hoch", "hohe", "hoher", "hohes"] , description: "Augsts vertikāli, līmenī vai augstumā.", example: "Der Berg ist hoch. = Kalns ir augsts." }
    ],
    examples: [
      { de: "Das Haus ist groß.", lv: "māja ir liela." },
      { de: "Der Berg ist hoch.", lv: "kalns ir augsts." },
      { de: "Er ist groß.", lv: "viņš ir garš augumā." },
      { de: "Die Miete ist hoch.", lv: "īre ir augsta." },
      { de: "Das Zimmer ist groß.", lv: "istaba ir liela." },
      { de: "Die Mauer ist hoch.", lv: "siena ir augsta." }
    ],
    comparisonTable: [
      { lv: "liels", de: "groß", meaning: "liels izmērs", describes: "kopējo izmēru", example: "Das Haus ist groß.", translation: "māja ir liela." },
      { lv: "augsts", de: "hoch", meaning: "liels augstumā", describes: "vertikālu augstumu", example: "Der Berg ist hoch.", translation: "kalns ir augsts." },
      { lv: "garš augumā", de: "groß", meaning: "cilvēka augums", describes: "personu", example: "Er ist groß.", translation: "viņš ir garš augumā." },
      { lv: "augsta cena", de: "hoch", meaning: "augsts līmenis", describes: "cenas/skaitļus", example: "Die Preise sind hoch.", translation: "cenas ir augstas." }
    ],
    importantComparison: ["Das Haus ist groß. = Māja ir liela.", "Der Berg ist hoch. = Kalns ir augsts.", "Er ist groß nozīmē, ka cilvēks ir garš augumā."],
    tip: { left: "Ja runā par izmēru kopumā, lieto groß. Ja runā par augstumu vai līmeni, lieto hoch.", rightTitle: "ātri", rightItems: [{ de: "groß", lv: "liels" }, { de: "hoch", lv: "augsts" }] },
    important: ["Cilvēkam Er ist groß nozīmē garš augumā.", "Cenām un līmenim bieži lieto hoch."],
    mistakes: [{ wrong: "Der Berg ist groß, ja doma ir kalna augstums.", right: "Der Berg ist hoch." }],
    remember: ["groß = liels.", "hoch = augsts."]
  }),
  createComparisonStudyCard({
    id: "compare-klein-niedrig",
    title: "mazs • zems",
    subtitle: "klein • niedrig",
    lead: "klein nozīmē mazs; niedrig nozīmē zems.",
    explanation: "klein raksturo mazu izmēru. niedrig raksturo zemu augstumu, līmeni, cenu vai skaitli.",
    lvHighlights: ["mazs", "zems", "cenas", "līmenis"],
    words: [
      { icon: "▫", lv: "mazs", de: "klein", forms: ["klein", "kleine", "kleiner"] , description: "Mazs izmērā vai apjomā.", example: "Das Zimmer ist klein. = Istaba ir maza." },
      { icon: "⬇", lv: "zems", de: "niedrig", forms: ["niedrig", "niedrige", "niedriger"] , description: "Zems augstumā, līmenī, cenā vai skaitlī.", example: "Die Preise sind niedrig. = Cenas ir zemas." }
    ],
    examples: [
      { de: "Das Zimmer ist klein.", lv: "istaba ir maza." },
      { de: "Die Preise sind niedrig.", lv: "cenas ir zemas." },
      { de: "Der Tisch ist niedrig.", lv: "galds ir zems." },
      { de: "Das Kind ist noch klein.", lv: "bērns vēl ir mazs." },
      { de: "Die Temperatur ist niedrig.", lv: "temperatūra ir zema." },
      { de: "Ich habe eine kleine Tasche.", lv: "man ir maza soma." }
    ],
    comparisonTable: [
      { lv: "mazs", de: "klein", meaning: "mazs izmērs", describes: "lietas/personas izmēru", example: "Das Zimmer ist klein.", translation: "istaba ir maza." },
      { lv: "zems", de: "niedrig", meaning: "zems līmenis/augstums", describes: "cenas, temperatūru, augstumu", example: "Die Preise sind niedrig.", translation: "cenas ir zemas." },
      { lv: "mazs bērns", de: "klein", meaning: "mazs/jauns", describes: "bērnu", example: "Das Kind ist klein.", translation: "bērns ir mazs." },
      { lv: "zems galds", de: "niedrig", meaning: "nav augsts", describes: "augstumu", example: "Der Tisch ist niedrig.", translation: "galds ir zems." }
    ],
    importantComparison: ["Das Zimmer ist klein. = Istaba ir maza.", "Die Preise sind niedrig. = Cenas ir zemas.", "klein nav tas pats, kas niedrig."],
    tip: { left: "Izmēram lieto klein. Līmenim, cenai vai augstumam lieto niedrig.", rightTitle: "ātri", rightItems: [{ de: "klein", lv: "mazs" }, { de: "niedrig", lv: "zems" }] },
    important: ["klein = mazs izmērā.", "niedrig = zems augstumā vai līmenī."],
    mistakes: [{ wrong: "Die Preise sind klein.", right: "Die Preise sind niedrig." }],
    remember: ["klein = mazs.", "niedrig = zems."]
  }),
  createComparisonStudyCard({
    id: "compare-ruhig-leise",
    title: "mierīgs • kluss",
    subtitle: "ruhig • leise",
    lead: "ruhig nozīmē mierīgs; leise nozīmē kluss skaņas ziņā.",
    explanation: "ruhig raksturo mieru, cilvēku, vietu vai situāciju. leise raksturo mazu skaļumu vai klusu balsi/skaņu.",
    lvHighlights: ["mierīgs", "kluss", "skaņas", "skaļumu"],
    words: [
      { icon: "🧘", lv: "mierīgs", de: "ruhig", forms: ["ruhig", "ruhige", "ruhiger"] , description: "Mierīgs pēc rakstura, noskaņas vai situācijas.", example: "Er ist ruhig. = Viņš ir mierīgs." },
      { icon: "🔈", lv: "kluss", de: "leise", forms: ["leise", "leiser"] , description: "Kluss vai ar mazu skaļumu.", example: "Bitte sei leise. = Lūdzu, esi kluss." }
    ],
    examples: [
      { de: "Er ist ruhig.", lv: "viņš ir mierīgs." },
      { de: "Bitte sei leise.", lv: "lūdzu, esi kluss." },
      { de: "Die Musik ist leise.", lv: "mūzika ir klusa." },
      { de: "Heute ist es im Büro ruhig.", lv: "šodien birojā ir mierīgi." },
      { de: "Sprich bitte leise.", lv: "lūdzu, runā klusi." },
      { de: "Sie bleibt ruhig.", lv: "viņa paliek mierīga." }
    ],
    comparisonTable: [
      { lv: "mierīgs", de: "ruhig", meaning: "bez satraukuma", describes: "cilvēku/vietu/situāciju", example: "Er ist ruhig.", translation: "viņš ir mierīgs." },
      { lv: "kluss", de: "leise", meaning: "mazs skaļums", describes: "skaņu/balsi/mūziku", example: "Die Musik ist leise.", translation: "mūzika ir klusa." },
      { lv: "mierīga vieta", de: "ruhiger Ort", meaning: "nav trokšņa vai stresa", describes: "vietu", example: "Das ist ein ruhiger Ort.", translation: "tā ir mierīga vieta." },
      { lv: "runāt klusi", de: "leise sprechen", meaning: "ar mazu skaļumu", describes: "balsi", example: "Sprich leise.", translation: "runā klusi." }
    ],
    importantComparison: ["Er ist ruhig. = Viņš ir mierīgs.", "Bitte sei leise. = Lūdzu, esi kluss.", "ruhig nav vienmēr leise."],
    tip: { left: "Noskaņai un mieram lieto ruhig. Skaļumam un balsij lieto leise.", rightTitle: "ātri", rightItems: [{ de: "ruhig", lv: "mierīgs" }, { de: "leise", lv: "kluss" }] },
    important: ["ruhig = mierīgs.", "leise = kluss skaņas ziņā."],
    mistakes: [{ wrong: "Die Musik ist ruhig, ja doma ir mazs skaļums.", right: "Die Musik ist leise." }],
    remember: ["ruhig = miers.", "leise = skaļums." ]
  }),
  createComparisonStudyCard({
    id: "compare-deshalb-deswegen-darum",
    title: "tāpēc • tādēļ",
    subtitle: "deshalb • deswegen • darum",
    lead: "Visi trīs bieži nozīmē “tāpēc”, bet pēc tiem darbības vārds ir 2. vietā.",
    explanation: "deshalb, deswegen un darum savieno iemeslu ar sekām. Tie bieži nozīmē tāpēc/tādēļ. Vācu teikumā pēc šiem vārdiem darbības vārds parasti nāk 2. vietā.",
    lvHighlights: ["tāpēc", "tādēļ", "iemesls", "sekas", "2. vietā"],
    words: [
      { icon: "➡", lv: "tāpēc", de: "deshalb", forms: ["deshalb", "Deshalb"] , description: "Neitrāls un ļoti biežs veids, kā parādīt sekas.", example: "Ich bin krank, deshalb bleibe ich zu Hause. = Es esmu slims, tāpēc palieku mājās." },
      { icon: "➡", lv: "tādēļ", de: "deswegen", forms: ["deswegen", "Deswegen"] , description: "Ļoti līdzīgs deshalb; bieži ikdienas valodā.", example: "Ich bin krank, deswegen bleibe ich zu Hause. = Es esmu slims, tādēļ palieku mājās." },
      { icon: "➡", lv: "tāpēc", de: "darum", forms: ["darum", "Darum"] , description: "Sarunvalodā biežs; nozīmē tāpēc/tādēļ.", example: "Ich bin krank, darum bleibe ich zu Hause. = Es esmu slims, tāpēc palieku mājās." }
    ],
    examples: [
      { de: "Ich bin krank, deshalb bleibe ich zu Hause.", lv: "es esmu slims, tāpēc palieku mājās." },
      { de: "Ich bin krank, deswegen bleibe ich zu Hause.", lv: "es esmu slims, tādēļ palieku mājās." },
      { de: "Ich bin krank, darum bleibe ich zu Hause.", lv: "es esmu slims, tāpēc palieku mājās." },
      { de: "Es regnet, deshalb nehme ich den Bus.", lv: "līst, tāpēc es braucu ar autobusu." },
      { de: "Der Zug ist voll, deswegen stehe ich.", lv: "vilciens ir pilns, tādēļ es stāvu." },
      { de: "Ich habe keine Zeit, darum komme ich später.", lv: "man nav laika, tāpēc es atnākšu vēlāk." }
    ],
    comparisonTable: [
      { lv: "tāpēc", de: "deshalb", meaning: "sekas no iemesla", describes: "neitrālu stilu", example: "Deshalb bleibe ich hier.", translation: "tāpēc es palieku šeit." },
      { lv: "tādēļ", de: "deswegen", meaning: "sekas no iemesla", describes: "ikdienas valodu", example: "Deswegen komme ich später.", translation: "tādēļ es atnākšu vēlāk." },
      { lv: "tāpēc", de: "darum", meaning: "sekas no iemesla", describes: "sarunvalodu", example: "Darum sage ich nein.", translation: "tāpēc es saku nē." },
      { lv: "jo", de: "weil", meaning: "ievada iemeslu", describes: "palīgteikumu", example: "Ich bleibe, weil es regnet.", translation: "es palieku, jo līst." }
    ],
    importantComparison: ["Ich bin krank, deshalb bleibe ich zu Hause.", "Pēc deshalb/deswegen/darum darbības vārds ir 2. vietā.", "weil darbojas citādi: weil es regnet."],
    tip: { left: "Vispirms iemesls, tad sekas: deshalb/deswegen/darum. Atceries vārdu kārtību - darbības vārds ir 2. vietā.", rightTitle: "vārdu kārtība", rightItems: [{ de: "deshalb bleibe ich", lv: "tāpēc es palieku" }, { de: "weil ich krank bin", lv: "jo es esmu slims" }] },
    important: ["deshalb, deswegen un darum bieži ir savstarpēji aizvietojami.", "Pēc tiem darbības vārds ir 2. vietā.", "weil nav tāda pati vārdu kārtība."],
    mistakes: [{ wrong: "Deshalb ich bleibe zu Hause.", right: "Deshalb bleibe ich zu Hause." }],
    remember: ["deshalb/deswegen/darum = tāpēc/tādēļ.", "Darbības vārds pēc tiem ir 2. vietā." ]
  }),
  createComparisonStudyCard({
      id: "compare-schon-noch-erst-nur",
      title: "jau • vēl • vēl tikai • tikai",
      subtitle: "schon • noch • erst • nur",
      lead: "Šie četri vārdi nav sinonīmi: tie bieži tiek tulkoti līdzīgi, bet katrs izsaka atšķirīgu domu.",
      explanation: "schon nozīmē jau: kaut kas jau ir noticis vai jau ir spēkā. noch nozīmē vēl: kaut kas joprojām turpinās vai vēl nav beidzies. erst nozīmē vēl tikai, tikai līdz šim vai ne agrāk kā: tas norāda uz laiku, secību vai agrīnu stadiju. nur nozīmē tikai, vienīgi, nekas vairāk: tas ierobežo daudzumu vai izvēli. erst dažreiz latviski tulko kā “tikai”, taču tas nav tas pats, kas nur.",
      lvHighlights: [
        "jau",
        "vēl",
        "vēl tikai",
        "tikai līdz šim",
        "ne agrāk kā",
        "tikai",
        "vienīgi",
        "nekas vairāk",
        "laiku",
        "daudzumu",
        "ierobežojumu",
        "izvēli"
      ],
      words: [
        {
          icon: "✅",
          lv: "jau",
          de: "schon",
          forms: [
            "schon",
            "Schon"
          ],
          description: "Kaut kas jau ir noticis vai jau ir spēkā.",
          example: "Ich bin schon zu Hause. = Es jau esmu mājās."
        },
        {
          icon: "⏳",
          lv: "vēl",
          de: "noch",
          forms: [
            "noch",
            "Noch"
          ],
          description: "Kaut kas joprojām turpinās vai vēl nav beidzies.",
          example: "Ich bin noch zu Hause. = Es vēl esmu mājās."
        },
        {
          icon: "🕗",
          lv: "vēl tikai • ne agrāk kā",
          de: "erst",
          forms: [
            "erst",
            "Erst"
          ],
          description: "Norāda uz laiku, secību, agrīnu stadiju vai kaut ko vēlāk, nekā gaidīts.",
          example: "Es ist erst acht Uhr. = Ir vēl tikai astoņi."
        },
        {
          icon: "🔒",
          lv: "tikai / vienīgi",
          de: "nur",
          forms: [
            "nur",
            "Nur"
          ],
          description: "Ierobežo daudzumu, cilvēku skaitu, izvēli vai iespējas.",
          example: "Ich habe nur zehn Euro. = Man ir tikai desmit eiro."
        }
      ],
      examples: [
        {
          de: "Ich bin schon zu Hause.",
          lv: "es jau esmu mājās."
        },
        {
          de: "Ich bin noch zu Hause.",
          lv: "es vēl esmu mājās."
        },
        {
          de: "Bist du noch da?",
          lv: "vai tu vēl esi šeit?"
        },
        {
          de: "Ich bin erst seit einer Stunde hier.",
          lv: "es esmu šeit vēl tikai vienu stundu."
        },
        {
          de: "Es ist erst acht Uhr.",
          lv: "ir vēl tikai astoņi."
        },
        {
          de: "Er kommt erst morgen.",
          lv: "viņš atbrauks tikai rīt."
        },
        {
          de: "Ich habe nur zehn Euro.",
          lv: "man ir tikai desmit eiro."
        },
        {
          de: "Nur du kannst mir helfen.",
          lv: "tikai tu vari man palīdzēt."
        },
        {
          de: "Ich möchte nur Kaffee.",
          lv: "es gribu tikai kafiju."
        }
      ],
      comparisonTable: [
        {
          lv: "jau",
          de: "schon",
          meaning: "kaut kas jau ir noticis vai spēkā",
          describes: "notikušu faktu vai esošu stāvokli",
          example: "Ich bin schon zu Hause.",
          translation: "es jau esmu mājās."
        },
        {
          lv: "vēl",
          de: "noch",
          meaning: "kaut kas joprojām turpinās",
          describes: "turpinājumu vai nepabeigtu stāvokli",
          example: "Bist du noch da?",
          translation: "vai tu vēl esi šeit?"
        },
        {
          lv: "vēl tikai / ne agrāk kā",
          de: "erst",
          meaning: "laiks, secība vai agrīna stadija",
          describes: "kad kaut kas notiek vai cik tālu tas ir",
          example: "Es ist erst acht Uhr.",
          translation: "ir vēl tikai astoņi."
        },
        {
          lv: "tikai / vienīgi",
          de: "nur",
          meaning: "ierobežots daudzums vai izvēle",
          describes: "cik daudz, kas tieši vai kurš vienīgais",
          example: "Ich habe nur acht Euro.",
          translation: "man ir tikai astoņi eiro."
        }
      ],
      importantComparison: [
        "Es ist erst acht Uhr. = Ir vēl tikai astoņi.",
        "Ich habe nur acht Euro. = Man ir tikai astoņi eiro.",
        "erst runā par laiku, secību vai agrīnu stadiju; nur runā par daudzumu, izvēli vai ierobežojumu."
      ],
      tip: {
        left: "Ja runa ir par laiku, secību vai to, kad kaut kas notiek, parasti lieto erst. Ja runa ir par daudzumu, cilvēku skaitu, naudu, izvēli vai ierobežojumu, parasti lieto nur.",
        rightTitle: "ātri",
        rightItems: [
          {
            de: "erst acht Uhr",
            lv: "vēl tikai astoņi"
          },
          {
            de: "erst morgen",
            lv: "ne agrāk kā rīt"
          },
          {
            de: "nur zehn Euro",
            lv: "tikai desmit eiro"
          },
          {
            de: "nur du",
            lv: "tikai tu"
          }
        ]
      },
      important: [
        "Latviešu “tikai” vācu valodā ne vienmēr ir nur.",
        "Ļoti bieži pareizais vārds būs erst, ja runa ir par laiku vai secību.",
        "Vienmēr jāskatās uz kontekstu: laiks vai ierobežojums?"
      ],
      mistakes: [
        {
          wrong: "Es ist nur acht Uhr.",
          right: "Es ist erst acht Uhr."
        },
        {
          wrong: "Ich habe erst zehn Euro.",
          right: "Ich habe nur zehn Euro."
        }
      ],
      remember: [
        "schon = jau.",
        "noch = vēl.",
        "erst = vēl tikai / ne agrāk kā.",
        "nur = tikai / vienīgi."
      ]
    })
);



[
[
  {
    "id": "compare-durch-ueber-entlang",
    "title": "caur • pāri • virs • par • gar",
    "subtitle": "durch • über • entlang",
    "lead": "durch, über un entlang apraksta ļoti dažādus virzienus: caur, pāri/virs/par un gar.",
    "explanation": "durch nozīmē caur vai cauri, kad kustība iet caur telpu, vietu vai masu. über var nozīmēt virs, pāri vai par, atkarībā no konteksta. entlang nozīmē gar vai garām, kad kustība notiek paralēli kaut kam. Šie vārdi nav savstarpēji aizvietojami. Īpaši jānošķir durch den Park un über die Straße.",
    "lvHighlights": [
      "caur",
      "cauri",
      "virs",
      "pāri",
      "par",
      "gar",
      "garām"
    ],
    "words": [
      {
        "icon": "➡️",
        "lv": "caur • cauri",
        "de": "durch",
        "forms": [
          "durch",
          "Durch"
        ],
        "description": "Kustība iet caur vietu, telpu vai šķērsli.",
        "example": "Ich gehe durch den Park. = Es eju caur parku."
      },
      {
        "icon": "↗️",
        "lv": "virs / pāri / par",
        "de": "über",
        "forms": [
          "über",
          "Über"
        ],
        "description": "Var būt virs kaut kā, pāri kaut kam vai par kādu tēmu.",
        "example": "Wir gehen über die Straße. = Mēs ejam pāri ielai."
      },
      {
        "icon": "↔️",
        "lv": "gar / garām",
        "de": "entlang",
        "forms": [
          "entlang",
          "Entlang"
        ],
        "description": "Kustība notiek gar līniju, upi, ielu vai malu.",
        "example": "Wir gehen den Fluss entlang. = Mēs ejam gar upi."
      }
    ],
    "examples": [
      {
        "de": "Ich gehe durch den Park.",
        "lv": "es eju caur parku."
      },
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "lampa karājas virs galda."
      },
      {
        "de": "Wir gehen über die Straße.",
        "lv": "mēs ejam pāri ielai."
      },
      {
        "de": "Wir gehen den Fluss entlang.",
        "lv": "mēs ejam gar upi."
      },
      {
        "de": "Er spricht über seine Arbeit.",
        "lv": "viņš runā par savu darbu."
      },
      {
        "de": "Der Weg führt durch den Wald.",
        "lv": "ceļš ved caur mežu."
      }
    ],
    "comparisonTable": [
      {
        "lv": "caur / cauri",
        "de": "durch",
        "meaning": "kustība caur kaut ko",
        "describes": "ceļu caur vietu",
        "example": "Ich gehe durch den Park.",
        "translation": "es eju caur parku."
      },
      {
        "lv": "virs",
        "de": "über",
        "meaning": "augstāk par kaut ko",
        "describes": "atrašanās vietu",
        "example": "Die Lampe hängt über dem Tisch.",
        "translation": "lampa karājas virs galda."
      },
      {
        "lv": "pāri",
        "de": "über",
        "meaning": "šķērsot kaut ko",
        "describes": "kustību pāri",
        "example": "Wir gehen über die Straße.",
        "translation": "mēs ejam pāri ielai."
      },
      {
        "lv": "par",
        "de": "über",
        "meaning": "tēma",
        "describes": "par ko runā",
        "example": "Wir sprechen über das Problem.",
        "translation": "mēs runājam par problēmu."
      },
      {
        "lv": "gar",
        "de": "entlang",
        "meaning": "gar kaut ko",
        "describes": "paralēlu kustību",
        "example": "Wir gehen den Fluss entlang.",
        "translation": "mēs ejam gar upi."
      }
    ],
    "importantComparison": [
      "Ich gehe durch den Park. = Es eju caur parku.",
      "Wir gehen über die Straße. = Mēs ejam pāri ielai.",
      "durch ir caur vietu; über ir pāri/virs/par; entlang ir gar kaut ko."
    ],
    "tip": {
      "left": "Ja kustība iet caur vietu, lieto durch. Ja šķērso ielu vai runā par tēmu, bieži lieto über. Ja kustība notiek gar upi vai ielu, lieto entlang.",
      "rightTitle": "ātri",
      "rightItems": [
        {
          "de": "durch den Park",
          "lv": "caur parku"
        },
        {
          "de": "über die Straße",
          "lv": "pāri ielai"
        },
        {
          "de": "den Fluss entlang",
          "lv": "gar upi"
        }
      ]
    },
    "important": [
      "Ich gehe über den Park nav pareizi, ja doma ir “caur parku”.",
      "entlang bieži stāv aiz lietvārda: den Fluss entlang.",
      "über var nozīmēt gan virs, gan pāri, gan par."
    ],
    "mistakes": [
      {
        "wrong": "Ich gehe über den Park.",
        "right": "Ich gehe durch den Park."
      }
    ],
    "remember": [
      "durch = caur.",
      "über = virs / pāri / par.",
      "entlang = gar."
    ]
  },
  {
    "id": "compare-innen-drin-draussen",
    "title": "iekšā • iekšpusē • ārā",
    "subtitle": "innen • drin / drinnen • draußen",
    "lead": "innen raksturo iekšpusi, drin/drinnen nozīmē iekšā, draußen nozīmē ārā.",
    "explanation": "innen nozīmē iekšpusē vai iekšējā pusē. drin un drinnen nozīmē, ka kāds vai kaut kas atrodas iekšā kādā vietā. draußen nozīmē ārā, ārpus telpas vai ēkas. innen bieži apraksta īpašību, piemēram auto iekšpuse ir tīra. drin/drinnen bieži atbild uz jautājumu “kur tu esi?”.",
    "lvHighlights": [
      "iekšā",
      "iekšpusē",
      "iekšējā pusē",
      "ārā"
    ],
    "words": [
      {
        "icon": "⬛",
        "lv": "iekšpusē",
        "de": "innen",
        "forms": [
          "innen",
          "Innen"
        ],
        "description": "Iekšējā puse vai iekšpuse kā īpašība.",
        "example": "Das Auto ist innen sauber. = Auto iekšpusē ir tīrs."
      },
      {
        "icon": "📦",
        "lv": "iekšā",
        "de": "drin / drinnen",
        "forms": [
          "drin",
          "drinnen",
          "Drinnen"
        ],
        "description": "Kāds vai kaut kas ir kaut kā iekšienē.",
        "example": "Ich bin drin. = Es esmu iekšā."
      },
      {
        "icon": "🌳",
        "lv": "ārā",
        "de": "draußen",
        "forms": [
          "draußen",
          "Draußen"
        ],
        "description": "Ārpus telpas vai ēkas.",
        "example": "Die Kinder spielen draußen. = Bērni spēlējas ārā."
      }
    ],
    "examples": [
      {
        "de": "Das Auto ist innen sauber.",
        "lv": "auto iekšpusē ir tīrs."
      },
      {
        "de": "Ich bin drin.",
        "lv": "es esmu iekšā."
      },
      {
        "de": "Die Kinder spielen draußen.",
        "lv": "bērni spēlējas ārā."
      },
      {
        "de": "Drinnen ist es warm.",
        "lv": "iekšā ir silti."
      },
      {
        "de": "Die Tasche ist innen nass.",
        "lv": "soma iekšpusē ir slapja."
      },
      {
        "de": "Bleib bitte draußen.",
        "lv": "lūdzu, paliec ārā."
      }
    ],
    "comparisonTable": [
      {
        "lv": "iekšpusē",
        "de": "innen",
        "meaning": "iekšējā pusē",
        "describes": "iekšpuses īpašību",
        "example": "Das Auto ist innen sauber.",
        "translation": "auto iekšpusē ir tīrs."
      },
      {
        "lv": "iekšā",
        "de": "drin",
        "meaning": "kaut kā iekšienē",
        "describes": "atrašanos iekšā",
        "example": "Ich bin drin.",
        "translation": "es esmu iekšā."
      },
      {
        "lv": "iekšā",
        "de": "drinnen",
        "meaning": "iekšā telpā",
        "describes": "atrašanos iekšā",
        "example": "Drinnen ist es warm.",
        "translation": "iekšā ir silti."
      },
      {
        "lv": "ārā",
        "de": "draußen",
        "meaning": "ārpus telpas",
        "describes": "atrašanos ārā",
        "example": "Die Kinder sind draußen.",
        "translation": "bērni ir ārā."
      }
    ],
    "importantComparison": [
      "Ich bin drin. = Es esmu iekšā.",
      "Das Auto ist innen sauber. = Auto iekšpusē ir tīrs.",
      "innen apraksta iekšpusi; drin/drinnen apraksta atrašanos iekšā."
    ],
    "tip": {
      "left": "Ja gribi pateikt “es esmu iekšā”, lieto drin vai drinnen. Ja apraksti, kā kaut kas izskatās no iekšpuses, lieto innen.",
      "rightTitle": "ātri",
      "rightItems": [
        {
          "de": "innen sauber",
          "lv": "iekšpusē tīrs"
        },
        {
          "de": "ich bin drin",
          "lv": "es esmu iekšā"
        },
        {
          "de": "draußen spielen",
          "lv": "spēlēties ārā"
        }
      ]
    },
    "important": [
      "Ich bin innen nav pareizi, ja doma ir “es esmu iekšā”.",
      "Drinnen un draußen bieži veido pretstatu.",
      "innen vairāk apraksta iekšpusi kā daļu vai īpašību."
    ],
    "mistakes": [
      {
        "wrong": "Ich bin innen.",
        "right": "Ich bin drin."
      }
    ],
    "remember": [
      "innen = iekšpusē.",
      "drin/drinnen = iekšā.",
      "draußen = ārā."
    ]
  },
  {
    "id": "compare-hin-her",
    "title": "turp • šurp",
    "subtitle": "hin • her",
    "lead": "hin rāda virzienu prom no runātāja, her rāda virzienu uz runātāju.",
    "explanation": "hin nozīmē turp vai prom no runātāja skatpunkta. her nozīmē šurp vai uz runātāja pusi. Šie vārdi bieži parādās komandās: Geh hin! un Komm her! Virziena skatpunkts vācu valodā ir ļoti svarīgs. Ja cilvēks nāk pie tevis, parasti lieto her, nevis hin.",
    "lvHighlights": [
      "turp",
      "šurp",
      "prom",
      "uz runātāju",
      "pie tevis"
    ],
    "words": [
      {
        "icon": "➡️",
        "lv": "turp",
        "de": "hin",
        "forms": [
          "hin",
          "Hin",
          "hierhin",
          "dorthin"
        ],
        "description": "Virziens prom no runātāja vai uz kādu citu vietu.",
        "example": "Geh hin! = Ej turp!"
      },
      {
        "icon": "⬅️",
        "lv": "šurp",
        "de": "her",
        "forms": [
          "her",
          "Her",
          "hierher"
        ],
        "description": "Virziens uz runātāju vai runātāja pusi.",
        "example": "Komm her! = Nāc šurp!"
      }
    ],
    "examples": [
      {
        "de": "Geh hin!",
        "lv": "ej turp!"
      },
      {
        "de": "Komm her!",
        "lv": "nāc šurp!"
      },
      {
        "de": "Wo gehst du hin?",
        "lv": "kur tu ej?"
      },
      {
        "de": "Komm bitte hierher.",
        "lv": "nāc, lūdzu, šurp."
      },
      {
        "de": "Ich gehe dorthin.",
        "lv": "es eju uz turieni."
      },
      {
        "de": "Bring das bitte her.",
        "lv": "atnes to, lūdzu, šurp."
      }
    ],
    "comparisonTable": [
      {
        "lv": "turp",
        "de": "hin",
        "meaning": "prom no runātāja",
        "describes": "virzienu uz citu vietu",
        "example": "Geh hin!",
        "translation": "ej turp!"
      },
      {
        "lv": "šurp",
        "de": "her",
        "meaning": "uz runātāju",
        "describes": "virzienu pie runātāja",
        "example": "Komm her!",
        "translation": "nāc šurp!"
      },
      {
        "lv": "uz šejieni",
        "de": "hierher",
        "meaning": "šurp uz šo vietu",
        "describes": "konkrētu virzienu pie manis",
        "example": "Komm hierher.",
        "translation": "nāc šurp."
      },
      {
        "lv": "uz turieni",
        "de": "dorthin",
        "meaning": "turp uz to vietu",
        "describes": "virzienu prom",
        "example": "Ich gehe dorthin.",
        "translation": "es eju uz turieni."
      }
    ],
    "importantComparison": [
      "Geh hin! = Ej turp!",
      "Komm her! = Nāc šurp!",
      "hin un her atšķiras pēc virziena pret runātāju."
    ],
    "tip": {
      "left": "Ja cilvēks tuvojas tev, lieto her. Ja cilvēks dodas prom uz citu vietu, lieto hin.",
      "rightTitle": "ātri",
      "rightItems": [
        {
          "de": "komm her",
          "lv": "nāc šurp"
        },
        {
          "de": "geh hin",
          "lv": "ej turp"
        }
      ]
    },
    "important": [
      "Komm hin parasti nav pareizi, ja cilvēks nāk pie tevis.",
      "her vienmēr jūtas kā virziens uz runātāju.",
      "hin jūtas kā virziens prom vai uz citu vietu."
    ],
    "mistakes": [
      {
        "wrong": "Komm hin.",
        "right": "Komm her."
      }
    ],
    "remember": [
      "hin = turp.",
      "her = šurp."
    ]
  },
  {
    "id": "compare-hinaus-heraus",
    "title": "ārā prom • ārā šurp",
    "subtitle": "hinaus • heraus",
    "lead": "hinaus un heraus abi nozīmē ārā, bet virziens ir atšķirīgs.",
    "explanation": "hinaus nozīmē ārā prom no runātāja skatpunkta. heraus nozīmē ārā uz runātāja pusi vai ārā no kaut kā. Komandās tas ir īpaši svarīgi: Geh hinaus! un Komm heraus! heraus bieži lieto, ja kāds nāk ārā pie tevis. hinaus bieži rāda virzienu prom ārā.",
    "lvHighlights": [
      "ārā",
      "prom",
      "šurp",
      "no runātāja",
      "uz runātāju"
    ],
    "words": [
      {
        "icon": "➡️",
        "lv": "ārā prom",
        "de": "hinaus",
        "forms": [
          "hinaus",
          "Hinaus"
        ],
        "description": "Kustība ārā prom no runātāja.",
        "example": "Geh hinaus! = Ej ārā!"
      },
      {
        "icon": "⬅️",
        "lv": "ārā šurp",
        "de": "heraus",
        "forms": [
          "heraus",
          "Heraus"
        ],
        "description": "Kustība ārā uz runātāja pusi vai ārā no kaut kā.",
        "example": "Komm heraus! = Nāc ārā!"
      }
    ],
    "examples": [
      {
        "de": "Geh hinaus!",
        "lv": "ej ārā!"
      },
      {
        "de": "Komm heraus!",
        "lv": "nāc ārā!"
      },
      {
        "de": "Er läuft aus dem Haus hinaus.",
        "lv": "viņš skrien ārā no mājas prom."
      },
      {
        "de": "Sie kommt aus dem Zimmer heraus.",
        "lv": "viņa nāk ārā no istabas."
      },
      {
        "de": "Der Hund will hinaus.",
        "lv": "suns grib ārā."
      },
      {
        "de": "Hol das Kind heraus.",
        "lv": "izved bērnu ārā."
      }
    ],
    "comparisonTable": [
      {
        "lv": "ārā prom",
        "de": "hinaus",
        "meaning": "prom ārā",
        "describes": "virzienu prom no runātāja",
        "example": "Geh hinaus!",
        "translation": "ej ārā!"
      },
      {
        "lv": "ārā šurp",
        "de": "heraus",
        "meaning": "ārā uz runātāja pusi",
        "describes": "virzienu pie runātāja",
        "example": "Komm heraus!",
        "translation": "nāc ārā!"
      },
      {
        "lv": "ārā no mājas prom",
        "de": "hinaus",
        "meaning": "iziet ārā prom",
        "describes": "prom virzienu",
        "example": "Er läuft hinaus.",
        "translation": "viņš skrien ārā."
      },
      {
        "lv": "ārā no kaut kā",
        "de": "heraus",
        "meaning": "izņemt / iznākt ārā",
        "describes": "kustību ārā no iekšienes",
        "example": "Sie kommt heraus.",
        "translation": "viņa nāk ārā."
      }
    ],
    "importantComparison": [
      "Geh hinaus! = Ej ārā!",
      "Komm heraus! = Nāc ārā!",
      "Ja cilvēks nāk ārā pie tevis, parasti lieto heraus."
    ],
    "tip": {
      "left": "Domā par virzienu: prom ārā = hinaus, uz mani ārā = heraus.",
      "rightTitle": "ātri",
      "rightItems": [
        {
          "de": "geh hinaus",
          "lv": "ej ārā prom"
        },
        {
          "de": "komm heraus",
          "lv": "nāc ārā šurp"
        }
      ]
    },
    "important": [
      "Komm hinaus nav pareizi, ja cilvēks nāk ārā pie tevis.",
      "hinaus un heraus abi var tulkoties kā “ārā”, bet virziens nav vienāds."
    ],
    "mistakes": [
      {
        "wrong": "Komm hinaus.",
        "right": "Komm heraus."
      }
    ],
    "remember": [
      "hinaus = ārā prom.",
      "heraus = ārā šurp / ārā no kaut kā."
    ]
  },
  {
    "id": "compare-hinein-herein",
    "title": "iekšā prom • iekšā šurp",
    "subtitle": "hinein • herein",
    "lead": "hinein un herein abi nozīmē iekšā, bet virziens pret runātāju ir atšķirīgs.",
    "explanation": "hinein nozīmē iekšā prom no runātāja vai uz kādu vietu. herein nozīmē iekšā uz runātāja pusi, piemēram telpā, kur atrodas runātājs. Komandās tas ir ļoti svarīgi: Geh hinein! un Komm herein! Vācu valodā virziena skatpunkts bieži jāpasaka skaidrāk nekā latviešu valodā.",
    "lvHighlights": [
      "iekšā",
      "prom",
      "šurp",
      "uz runātāju",
      "telpā"
    ],
    "words": [
      {
        "icon": "➡️",
        "lv": "iekšā prom",
        "de": "hinein",
        "forms": [
          "hinein",
          "Hinein"
        ],
        "description": "Kustība iekšā prom no runātāja vai uz vietu.",
        "example": "Geh hinein! = Ej iekšā!"
      },
      {
        "icon": "⬅️",
        "lv": "iekšā šurp",
        "de": "herein",
        "forms": [
          "herein",
          "Herein"
        ],
        "description": "Kustība iekšā uz runātāja pusi.",
        "example": "Komm herein! = Nāc iekšā!"
      }
    ],
    "examples": [
      {
        "de": "Geh hinein!",
        "lv": "ej iekšā!"
      },
      {
        "de": "Komm herein!",
        "lv": "nāc iekšā!"
      },
      {
        "de": "Er geht ins Haus hinein.",
        "lv": "viņš ieiet mājā."
      },
      {
        "de": "Kommen Sie bitte herein.",
        "lv": "lūdzu, nāciet iekšā."
      },
      {
        "de": "Leg das Buch hinein.",
        "lv": "ieliec grāmatu iekšā."
      },
      {
        "de": "Der Hund darf herein.",
        "lv": "suns drīkst nākt iekšā."
      }
    ],
    "comparisonTable": [
      {
        "lv": "iekšā prom",
        "de": "hinein",
        "meaning": "virziens iekšā prom",
        "describes": "došanos uz iekšieni",
        "example": "Geh hinein!",
        "translation": "ej iekšā!"
      },
      {
        "lv": "iekšā šurp",
        "de": "herein",
        "meaning": "virziens iekšā pie runātāja",
        "describes": "ienākšanu pie manis",
        "example": "Komm herein!",
        "translation": "nāc iekšā!"
      },
      {
        "lv": "ielikt iekšā",
        "de": "hineinlegen",
        "meaning": "ielikt kaut kur iekšā",
        "describes": "kustību uz iekšieni",
        "example": "Leg es hinein.",
        "translation": "ieliec to iekšā."
      },
      {
        "lv": "ienākt iekšā",
        "de": "hereinkommen",
        "meaning": "ienākt pie runātāja",
        "describes": "kustību uz telpu, kur esmu",
        "example": "Kommen Sie herein.",
        "translation": "nāciet iekšā."
      }
    ],
    "importantComparison": [
      "Geh hinein! = Ej iekšā!",
      "Komm herein! = Nāc iekšā!",
      "herein lieto, ja cilvēks nāk iekšā pie runātāja."
    ],
    "tip": {
      "left": "Ja cilvēks nāk telpā, kur esi tu, lieto herein. Ja kāds dodas iekšā prom no tava skatpunkta, lieto hinein.",
      "rightTitle": "ātri",
      "rightItems": [
        {
          "de": "geh hinein",
          "lv": "ej iekšā"
        },
        {
          "de": "komm herein",
          "lv": "nāc iekšā"
        }
      ]
    },
    "important": [
      "Komm hinein nav labākais, ja cilvēks nāk telpā pie tevis.",
      "hinein un herein abi ir “iekšā”, bet virziens ir atšķirīgs."
    ],
    "mistakes": [
      {
        "wrong": "Komm hinein.",
        "right": "Komm herein."
      }
    ],
    "remember": [
      "hinein = iekšā prom.",
      "herein = iekšā šurp."
    ]
  },
  {
    "id": "compare-egal-gleich",
    "title": "vienalga • vienāds • tūlīt",
    "subtitle": "egal • gleich",
    "lead": "egal nozīmē vienalga; gleich var nozīmēt vienāds vai tūlīt.",
    "explanation": "egal lieto, ja kaut kas nav svarīgi vai ir vienalga. gleich nozīmē vienāds, ja salīdzina lietas. gleich var nozīmēt arī tūlīt vai drīz, īpaši sarunvalodā. Šie vārdi nav sinonīmi. Latviskais “man vienalga” vāciski ir Das ist mir egal, nevis Das ist mir gleich.",
    "lvHighlights": [
      "vienalga",
      "nav svarīgi",
      "vienāds",
      "tūlīt",
      "drīz"
    ],
    "words": [
      {
        "icon": "🤷",
        "lv": "vienalga",
        "de": "egal",
        "forms": [
          "egal",
          "Egal"
        ],
        "description": "Nav svarīgi, nav atšķirības.",
        "example": "Das ist mir egal. = Man tas ir vienalga."
      },
      {
        "icon": "🟰",
        "lv": "vienāds • tūlīt",
        "de": "gleich",
        "forms": [
          "gleich",
          "Gleich"
        ],
        "description": "Var nozīmēt vienāds vai tūlīt.",
        "example": "Die Farben sind gleich. = Krāsas ir vienādas."
      }
    ],
    "examples": [
      {
        "de": "Das ist mir egal.",
        "lv": "man tas ir vienalga."
      },
      {
        "de": "Die beiden Farben sind gleich.",
        "lv": "abas krāsas ir vienādas."
      },
      {
        "de": "Ich komme gleich.",
        "lv": "es tūlīt nāku."
      },
      {
        "de": "Mir ist das nicht egal.",
        "lv": "man tas nav vienalga."
      },
      {
        "de": "Wir haben die gleiche Tasche.",
        "lv": "mums ir vienāda soma."
      },
      {
        "de": "Gleich beginnt der Film.",
        "lv": "filma tūlīt sāksies."
      }
    ],
    "comparisonTable": [
      {
        "lv": "vienalga",
        "de": "egal",
        "meaning": "nav svarīgi",
        "describes": "attieksmi pret izvēli",
        "example": "Das ist mir egal.",
        "translation": "man tas ir vienalga."
      },
      {
        "lv": "vienāds",
        "de": "gleich",
        "meaning": "tāds pats",
        "describes": "salīdzinājumu",
        "example": "Die Farben sind gleich.",
        "translation": "krāsas ir vienādas."
      },
      {
        "lv": "tūlīt",
        "de": "gleich",
        "meaning": "drīz / tūlīt",
        "describes": "laiku",
        "example": "Ich komme gleich.",
        "translation": "es tūlīt nāku."
      },
      {
        "lv": "tas pats",
        "de": "derselbe",
        "meaning": "tas pats konkrētais",
        "describes": "identitāti",
        "example": "Das ist derselbe Mann.",
        "translation": "tas ir tas pats vīrietis."
      }
    ],
    "importantComparison": [
      "Das ist mir egal. = Man tas ir vienalga.",
      "Die Farben sind gleich. = Krāsas ir vienādas.",
      "Ich komme gleich. = Es tūlīt nāku."
    ],
    "tip": {
      "left": "Ja doma ir “man vienalga”, lieto egal. Ja doma ir “vienāds” vai “tūlīt”, lieto gleich.",
      "rightTitle": "ātri",
      "rightItems": [
        {
          "de": "egal",
          "lv": "vienalga"
        },
        {
          "de": "gleich",
          "lv": "vienāds / tūlīt"
        }
      ]
    },
    "important": [
      "Das ist mir gleich nav pareizi, ja doma ir “man vienalga”.",
      "gleich ir divas biežas nozīmes: vienāds un tūlīt."
    ],
    "mistakes": [
      {
        "wrong": "Das ist mir gleich.",
        "right": "Das ist mir egal."
      }
    ],
    "remember": [
      "egal = vienalga.",
      "gleich = vienāds / tūlīt."
    ]
  },
  {
    "id": "compare-eben-gerade-genau",
    "title": "tikko • tieši • pašlaik • taisni • precīzi",
    "subtitle": "eben • gerade • genau",
    "lead": "eben, gerade un genau reizēm tulko līdzīgi, bet tie izceļ dažādas nianses.",
    "explanation": "eben var nozīmēt tikko, nupat, tieši vai arī līdzens. gerade ļoti bieži nozīmē pašlaik vai tieši tagad, bet var nozīmēt arī taisni. genau nozīmē precīzi vai tieši. Ja doma ir “pašlaik”, parasti lieto gerade, nevis genau. Ja doma ir precizitāte, lieto genau.",
    "lvHighlights": [
      "tikko",
      "nupat",
      "tieši",
      "līdzens",
      "pašlaik",
      "taisni",
      "precīzi"
    ],
    "words": [
      {
        "icon": "🕘",
        "lv": "tikko • nupat",
        "de": "eben",
        "forms": [
          "eben",
          "Eben"
        ],
        "description": "Tikko, nupat, reizēm arī tieši vai līdzens.",
        "example": "Ich war eben dort. = Es tikko tur biju."
      },
      {
        "icon": "📍",
        "lv": "pašlaik / taisni",
        "de": "gerade",
        "forms": [
          "gerade",
          "Gerade",
          "geradeaus"
        ],
        "description": "Pašlaik, tieši tagad, vai taisni virzienā.",
        "example": "Ich bin gerade beschäftigt. = Es pašlaik esmu aizņemts."
      },
      {
        "icon": "🎯",
        "lv": "precīzi / tieši",
        "de": "genau",
        "forms": [
          "genau",
          "Genau"
        ],
        "description": "Precīzi, tieši, bez novirzes.",
        "example": "Das ist genau richtig. = Tas ir precīzi pareizi."
      }
    ],
    "examples": [
      {
        "de": "Ich war eben dort.",
        "lv": "es tikko tur biju."
      },
      {
        "de": "Ich bin gerade beschäftigt.",
        "lv": "es pašlaik esmu aizņemts."
      },
      {
        "de": "Das ist genau richtig.",
        "lv": "tas ir precīzi pareizi."
      },
      {
        "de": "Geh geradeaus.",
        "lv": "ej taisni uz priekšu."
      },
      {
        "de": "Er hat eben angerufen.",
        "lv": "viņš tikko piezvanīja."
      },
      {
        "de": "Genau das meine ich.",
        "lv": "tieši to es domāju."
      }
    ],
    "comparisonTable": [
      {
        "lv": "tikko / nupat",
        "de": "eben",
        "meaning": "nesen noticis",
        "describes": "laiku īsi pirms brīža",
        "example": "Ich war eben dort.",
        "translation": "es tikko tur biju."
      },
      {
        "lv": "pašlaik",
        "de": "gerade",
        "meaning": "tieši tagad",
        "describes": "notiekošu brīdi",
        "example": "Ich bin gerade beschäftigt.",
        "translation": "es pašlaik esmu aizņemts."
      },
      {
        "lv": "taisni",
        "de": "geradeaus",
        "meaning": "taisnā virzienā",
        "describes": "virzienu",
        "example": "Geh geradeaus.",
        "translation": "ej taisni uz priekšu."
      },
      {
        "lv": "precīzi",
        "de": "genau",
        "meaning": "tieši un precīzi",
        "describes": "precizitāti",
        "example": "Das ist genau richtig.",
        "translation": "tas ir precīzi pareizi."
      }
    ],
    "importantComparison": [
      "Ich bin gerade beschäftigt. = Es pašlaik esmu aizņemts.",
      "Das ist genau richtig. = Tas ir precīzi pareizi.",
      "genau nav pareizais vārds “pašlaik” nozīmei."
    ],
    "tip": {
      "left": "Ja doma ir “pašlaik”, lieto gerade. Ja doma ir “precīzi”, lieto genau. Ja kaut kas notika pirms mirkļa, bieži der eben.",
      "rightTitle": "ātri",
      "rightItems": [
        {
          "de": "eben",
          "lv": "tikko"
        },
        {
          "de": "gerade",
          "lv": "pašlaik"
        },
        {
          "de": "genau",
          "lv": "precīzi"
        }
      ]
    },
    "important": [
      "genau tagad nav dabiski, ja doma ir “pašlaik”.",
      "geradeaus ir virziens: taisni uz priekšu.",
      "eben var nozīmēt arī līdzens citos kontekstos."
    ],
    "mistakes": [
      {
        "wrong": "genau tagad",
        "right": "gerade"
      }
    ],
    "remember": [
      "eben = tikko / nupat.",
      "gerade = pašlaik / taisni.",
      "genau = precīzi."
    ]
  },
  {
    "id": "compare-ebenfalls-auch-ebenso",
    "title": "arī • tāpat • tieši tāpat",
    "subtitle": "ebenfalls • auch • ebenso",
    "lead": "auch, ebenfalls un ebenso visi var saistīties ar “arī”, bet stils un nozīme atšķiras.",
    "explanation": "auch ir visparastākais vārds “arī”. ebenfalls bieži nozīmē arī vai tāpat, bet skan formālāk vai pieklājīgāk. ebenso nozīmē tāpat, tieši tāpat vai tikpat, un bieži salīdzina divas lietas. Vārdu secība teikumā ir svarīga. Formālās frāzēs bieži lieto ebenfalls.",
    "lvHighlights": [
      "arī",
      "tāpat",
      "tieši tāpat",
      "tikpat",
      "formālāk"
    ],
    "words": [
      {
        "icon": "➕",
        "lv": "arī",
        "de": "auch",
        "forms": [
          "auch",
          "Auch"
        ],
        "description": "Visbiežākais un neitrālākais “arī”.",
        "example": "Ich komme auch. = Es arī nāku."
      },
      {
        "icon": "🤝",
        "lv": "arī • tāpat",
        "de": "ebenfalls",
        "forms": [
          "ebenfalls",
          "Ebenfalls"
        ],
        "description": "Formālāks vai pieklājīgāks “arī / tāpat”.",
        "example": "Ich wünsche Ihnen ebenfalls einen schönen Tag. = Es jums arī novēlu jauku dienu."
      },
      {
        "icon": "🟰",
        "lv": "tāpat / tieši tāpat",
        "de": "ebenso",
        "forms": [
          "ebenso",
          "Ebenso"
        ],
        "description": "Uzsver līdzību: tāpat, tieši tāpat, tikpat.",
        "example": "Das sehe ich ebenso. = Es to redzu tāpat."
      }
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "es arī nāku."
      },
      {
        "de": "Ich wünsche Ihnen ebenfalls einen schönen Tag.",
        "lv": "es jums arī novēlu jauku dienu."
      },
      {
        "de": "Das sehe ich ebenso.",
        "lv": "es to redzu tāpat."
      },
      {
        "de": "Er ist ebenso groß wie sein Bruder.",
        "lv": "viņš ir tikpat garš kā viņa brālis."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "viņa arī strādā šeit."
      },
      {
        "de": "Vielen Dank, ebenfalls!",
        "lv": "liels paldies, jums tāpat!"
      }
    ],
    "comparisonTable": [
      {
        "lv": "arī",
        "de": "auch",
        "meaning": "vienkāršs “arī”",
        "describes": "papildinājumu",
        "example": "Ich komme auch.",
        "translation": "es arī nāku."
      },
      {
        "lv": "arī / tāpat",
        "de": "ebenfalls",
        "meaning": "formālāks arī",
        "describes": "pieklājīgu atbildi vai papildinājumu",
        "example": "Ihnen ebenfalls einen schönen Tag.",
        "translation": "jums arī jauku dienu."
      },
      {
        "lv": "tāpat",
        "de": "ebenso",
        "meaning": "tādā pašā veidā",
        "describes": "līdzīgu uzskatu vai darbību",
        "example": "Das sehe ich ebenso.",
        "translation": "es to redzu tāpat."
      },
      {
        "lv": "tikpat",
        "de": "ebenso ... wie",
        "meaning": "tikpat ... kā",
        "describes": "salīdzinājumu",
        "example": "Er ist ebenso groß wie sein Bruder.",
        "translation": "viņš ir tikpat garš kā brālis."
      }
    ],
    "importantComparison": [
      "Ich komme auch. = Es arī nāku.",
      "Ich wünsche Ihnen ebenfalls einen schönen Tag. = Es jums arī novēlu jauku dienu.",
      "Er ist ebenso groß wie sein Bruder. = Viņš ir tikpat garš kā viņa brālis."
    ],
    "tip": {
      "left": "Ikdienā visbiežāk lieto auch. Pieklājīgās atbildēs labi der ebenfalls. Salīdzināšanai ar “tikpat kā” lieto ebenso ... wie.",
      "rightTitle": "ātri",
      "rightItems": [
        {
          "de": "auch",
          "lv": "arī"
        },
        {
          "de": "ebenfalls",
          "lv": "arī / tāpat"
        },
        {
          "de": "ebenso",
          "lv": "tieši tāpat / tikpat"
        }
      ]
    },
    "important": [
      "Ich auch wünsche Ihnen nav pareiza vārdu kārtība.",
      "ebenfalls bieži skan formālāk nekā auch.",
      "ebenso bieži nozīmē tieši tāpat vai tikpat."
    ],
    "mistakes": [
      {
        "wrong": "Ich auch wünsche Ihnen einen schönen Tag.",
        "right": "Ich wünsche Ihnen ebenfalls einen schönen Tag."
      }
    ],
    "remember": [
      "auch = arī.",
      "ebenfalls = arī / tāpat, biežāk formāli.",
      "ebenso = tāpat / tieši tāpat / tikpat."
    ]
  }
]
].flat().filter((config) => !COMPARISON_STUDY_CARDS.some((card) => card.id === config.id)).forEach((config) => {
  COMPARISON_STUDY_CARDS.push(createComparisonStudyCard(config));
});

// BEGIN_COMPARISON_STUDY_HIGHLIGHT_OVERRIDES
const COMPARISON_STUDY_HIGHLIGHT_OVERRIDES = {
  "compare-freundlich-nett-hoeflich-angenehm": {
    "sectionAccents": {
      "lead": {
        "purple": [
          "sinonīmi",
          "lietot",
          "vārdu",
          "Kuru"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "purple": [
              "laipns"
            ],
            "purple": [
              "laipns"
            ]
          },
          "de": {
            "purple": [
              "freundlich"
            ],
            "blue": [
              "freundlich"
            ]
          },
          "description": {
            "blue": [
              "izturēšanos",
              "attieksmi",
              "Raksturo",
              "cilvēka",
              "citiem",
              "pret"
            ]
          },
          "example": {
            "green": [
              "freundlich",
              "Laipns"
            ],
            "green": [
              "Viņš ir laipns"
            ],
            "purple": [
              "freundlich"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Jauks"
            ],
            "orange": [
              "jauks"
            ]
          },
          "de": {
            "green": [
              "nett"
            ],
            "green": [
              "nett"
            ]
          },
          "description": {
            "green": [
              "sarunvalodā",
              "vērtējums",
              "Vispārīgs",
              "pozitīvs",
              "biežs"
            ]
          },
          "example": {
            "green": [
              "Viņa ir jauka",
              "jauka",
              "nett"
            ],
            "orange": [
              "nett"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "pieklājīgs"
            ],
            "green": [
              "pieklājīgs"
            ]
          },
          "de": {
            "green": [
              "höflich"
            ],
            "yellow": [
              "höflich"
            ]
          },
          "description": {
            "yellow": [
              "pieklājīgu",
              "manieres",
              "Raksturo",
              "uzvedību",
              "korektu"
            ]
          },
          "example": {
            "green": [
              "höflich"
            ],
            "green": [
              "Klients bija pieklājīgs"
            ],
            "yellow": [
              "Pieklājīgs",
              "höflich",
              "Klients",
              "Kunde"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "patīkams"
            ],
            "yellow": [
              "patīkams"
            ]
          },
          "de": {
            "green": [
              "angenehm"
            ],
            "red": [
              "angenehm"
            ]
          },
          "description": {
            "red": [
              "atmosfēru",
              "iespaidu",
              "patīkamu",
              "Raksturo",
              "sajūtu",
              "laiku"
            ]
          },
          "example": {
            "green": [
              "Laiks ir patīkams",
              "angenehm"
            ],
            "red": [
              "angenehm",
              "Patīkams",
              "Wetter",
              "Laiks"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "freundlich"
            ],
            "blue": [
              "freundlich",
              "Verkäufer"
            ]
          },
          "lv": {
            "purple": [
              "laipns"
            ],
            "purple": [
              "pārdevējs",
              "laipns"
            ]
          }
        },
        {
          "de": {
            "green": [
              "nett"
            ],
            "blue": [
              "Nachbarin",
              "nett"
            ]
          },
          "lv": {
            "purple": [
              "kaimiņiene",
              "jauka",
              "mana"
            ]
          }
        },
        {
          "de": {
            "green": [
              "höflich",
              "Bitte",
              "seien"
            ]
          },
          "lv": {
            "purple": [
              "pieklājīgi",
              "esiet",
              "lūdzu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "angenehm"
            ],
            "blue": [
              "angenehm",
              "Stimme"
            ]
          },
          "lv": {
            "purple": [
              "patīkama",
              "balss"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "freundlich"
            ],
            "blue": [
              "freundlich"
            ]
          },
          "lv": {
            "purple": [
              "laipns"
            ],
            "green": [
              "Viņš ir laipns"
            ],
            "purple": [
              "laipns"
            ]
          }
        },
        {
          "de": {
            "green": [
              "angenehm"
            ],
            "blue": [
              "angenehm"
            ]
          },
          "lv": {
            "purple": [
              "patīkams"
            ],
            "purple": [
              "patīkams",
              "cilvēks"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "purple": [
              "laipns"
            ],
            "purple": [
              "laipns"
            ]
          },
          "de": {
            "purple": [
              "freundlich"
            ],
            "blue": [
              "freundlich"
            ]
          },
          "meaning": {
            "purple": [
              "laipna attieksme"
            ],
            "purple": [
              "attieksme",
              "laipna"
            ]
          },
          "describes": {
            "purple": [
              "cilvēkiem",
              "uzvedību",
              "pret"
            ]
          },
          "example": {
            "purple": [
              "freundlich"
            ],
            "blue": [
              "freundlich"
            ]
          },
          "translation": {
            "purple": [
              "laipns"
            ],
            "green": [
              "Viņš ir laipns"
            ],
            "purple": [
              "laipns"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Jauks"
            ],
            "orange": [
              "jauks"
            ]
          },
          "de": {
            "green": [
              "nett"
            ],
            "green": [
              "nett"
            ]
          },
          "meaning": {
            "green": [
              "Jauks"
            ],
            "orange": [
              "vispārīgi jauks"
            ],
            "purple": [
              "vispārīgi",
              "jauks"
            ]
          },
          "describes": {
            "purple": [
              "sarunvalodā",
              "situāciju",
              "cilvēku"
            ]
          },
          "example": {
            "green": [
              "nett"
            ],
            "green": [
              "nett"
            ]
          },
          "translation": {
            "green": [
              "Viņa ir jauka"
            ],
            "purple": [
              "jauka"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "pieklājīgs"
            ],
            "green": [
              "pieklājīgs"
            ]
          },
          "de": {
            "green": [
              "höflich"
            ],
            "yellow": [
              "höflich"
            ]
          },
          "meaning": {
            "purple": [
              "korekts manierēs"
            ],
            "purple": [
              "manierēs",
              "korekts"
            ]
          },
          "describes": {
            "purple": [
              "pieklājīgu",
              "uzvedību"
            ]
          },
          "example": {
            "green": [
              "höflich"
            ],
            "yellow": [
              "höflich",
              "Kunde"
            ]
          },
          "translation": {
            "green": [
              "Klients bija pieklājīgs"
            ],
            "yellow": [
              "Pieklājīgs"
            ],
            "purple": [
              "pieklājīgs",
              "klients"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "patīkams"
            ],
            "yellow": [
              "patīkams"
            ]
          },
          "de": {
            "green": [
              "angenehm"
            ],
            "red": [
              "angenehm"
            ]
          },
          "meaning": {
            "purple": [
              "rada labu sajūtu"
            ],
            "purple": [
              "sajūtu",
              "labu",
              "rada"
            ]
          },
          "describes": {
            "purple": [
              "atmosfēru",
              "iespaidu",
              "cilvēku",
              "balsi",
              "laiku"
            ]
          },
          "example": {
            "green": [
              "angenehm"
            ],
            "red": [
              "angenehm",
              "Wetter"
            ]
          },
          "translation": {
            "green": [
              "Laiks ir patīkams"
            ],
            "red": [
              "Patīkams"
            ],
            "purple": [
              "patīkams",
              "laiks"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "green": [
            "angenehm"
          ],
          "purple": [
            "freundlich"
          ],
          "yellow": [
            "izturēšanos",
            "freundlich",
            "patīkamu",
            "cilvēka",
            "sajūtu",
            "lieto",
            "runa"
          ]
        },
        "rightItems": [
          {
            "de": {
              "purple": [
                "freundlich"
              ],
              "blue": [
                "freundlich"
              ]
            },
            "lv": {
              "purple": [
                "laipna attieksme"
              ],
              "purple": [
                "attieksme",
                "laipna"
              ]
            }
          },
          {
            "de": {
              "green": [
                "nett"
              ],
              "blue": [
                "nett"
              ]
            },
            "lv": {
              "green": [
                "Jauks"
              ],
              "purple": [
                "kopumā",
                "jauks"
              ]
            }
          },
          {
            "de": {
              "green": [
                "höflich"
              ]
            },
            "lv": {
              "purple": [
                "pieklājīgas",
                "manieres"
              ]
            }
          },
          {
            "de": {
              "green": [
                "angenehm"
              ],
              "blue": [
                "angenehm"
              ]
            },
            "lv": {
              "purple": [
                "patīkama",
                "sajūta"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "blue": [
            "Laipns"
          ],
          "green": [
            "Viņš ir laipns"
          ],
          "purple": [
            "freundlich"
          ],
          "yellow": [
            "freundlich",
            "laipns"
          ]
        },
        {
          "green": [
            "angenehm"
          ],
          "red": [
            "Patīkams"
          ],
          "yellow": [
            "angenehm",
            "patīkams",
            "cilvēks"
          ]
        },
        {
          "yellow": [
            "pareizi",
            "teikumi",
            "nozīme",
            "viena",
            "pati"
          ]
        }
      ],
      "important": [
        {
          "orange": [
            "nett"
          ],
          "purple": [
            "freundlich"
          ],
          "red": [
            "freundlich",
            "nett",
            "pats"
          ]
        },
        {
          "blue": [
            "höflich"
          ],
          "purple": [
            "freundlich"
          ],
          "red": [
            "freundlich",
            "höflich",
            "pats"
          ]
        },
        {
          "green": [
            "angenehm"
          ],
          "purple": [
            "freundlich"
          ],
          "red": [
            "freundlich",
            "angenehm",
            "pats"
          ]
        }
      ],
      "remember": [
        {
          "purple": [
            "freundlich"
          ],
          "yellow": [
            "freundlich",
            "cilvēks",
            "izturas"
          ]
        },
        {
          "green": [
            "angenehm"
          ],
          "yellow": [
            "angenehm",
            "iespaido",
            "jūtas",
            "kaut"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "blue": [
              "Laipns"
            ],
            "green": [
              "Viņš ir laipns",
              "angenehm"
            ],
            "red": [
              "angenehm",
              "laipns",
              "doma"
            ]
          },
          "right": {
            "purple": [
              "freundlich"
            ],
            "green": [
              "freundlich"
            ]
          },
          "note": {}
        },
        {
          "wrong": {
            "green": [
              "Laiks ir patīkams"
            ],
            "purple": [
              "freundlich"
            ],
            "red": [
              "freundlich",
              "Patīkams",
              "Wetter",
              "laiks",
              "doma"
            ]
          },
          "right": {
            "green": [
              "angenehm",
              "Wetter"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-freundlich-nett-hoeflich-angenehm",
        "comparisonStudy",
        "izturēšanos",
        "freundlich",
        "Pieklājīgs",
        "attieksmi",
        "angenehm",
        "hoeflich",
        "Patīkams",
        "Raksturo",
        "sinonīmi",
        "cilvēka",
        "höflich",
        "Laipns",
        "lietot",
        "Jauks",
        "vārdu",
        "Kuru",
        "nett"
      ],
      "green": [
        "Klients bija pieklājīgs",
        "Laiks ir patīkams",
        "Viņš ir laipns",
        "Viņa ir jauka",
        "angenehm",
        "Jauks"
      ],
      "yellow": [
        "compare-freundlich-nett-hoeflich-angenehm",
        "Pieklājīgs"
      ],
      "orange": [
        "korekts manierēs",
        "laipna attieksme",
        "rada labu sajūtu",
        "vispārīgi jauks",
        "nett"
      ],
      "purple": [
        "freundlich"
      ],
      "red": [
        "Patīkams",
        "compare"
      ]
    }
  },
  "compare-kennen-wissen": {
    "sectionAccents": {
      "lead": {
        "orange": [
          "wissen"
        ],
        "purple": [
          "informācijai",
          "cilvēkiem",
          "faktiem",
          "kennen",
          "lietām",
          "vietām",
          "wissen",
          "lieto"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Pazīt"
            ],
            "purple": [
              "pazīt"
            ]
          },
          "de": {
            "purple": [
              "kennen"
            ],
            "blue": [
              "kennen"
            ]
          },
          "description": {
            "blue": [
              "pieredzi",
              "cilvēku",
              "pazīsti",
              "Lieto",
              "lietu",
              "vietu"
            ]
          },
          "example": {
            "green": [
              "Es viņu pazīstu"
            ],
            "blue": [
              "pazīstu",
              "kenne",
              "viņu"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "zināt"
            ],
            "orange": [
              "zināt"
            ]
          },
          "de": {
            "green": [
              "wissen"
            ],
            "green": [
              "wissen"
            ]
          },
          "description": {
            "green": [
              "informācijai",
              "zināšanām",
              "atbildēm",
              "faktiem",
              "Lieto"
            ]
          },
          "example": {
            "green": [
              "weiß",
              "zinu"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "kenne"
            ]
          },
          "lv": {
            "purple": [
              "es viņu pazīstu"
            ],
            "purple": [
              "pazīstu",
              "viņu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "weiß"
            ]
          },
          "lv": {
            "purple": [
              "zinu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Berlin",
              "Kennst"
            ]
          },
          "lv": {
            "purple": [
              "Berlīni",
              "pazīsti"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Antwort",
              "Weißt"
            ]
          },
          "lv": {
            "purple": [
              "atbildi",
              "zini"
            ]
          }
        },
        {
          "de": {
            "green": [
              "dieses",
              "kenne",
              "Lied"
            ]
          },
          "lv": {
            "purple": [
              "dziesmu",
              "pazīstu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "wohnt",
              "weiß"
            ]
          },
          "lv": {
            "purple": [
              "es zinu"
            ],
            "purple": [
              "dzīvo",
              "zinu"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Pazīt"
            ],
            "purple": [
              "pazīt"
            ]
          },
          "de": {
            "purple": [
              "kennen"
            ],
            "blue": [
              "kennen"
            ]
          },
          "meaning": {
            "green": [
              "būt pazīstamam ar kādu"
            ],
            "yellow": [
              "kaut ko"
            ],
            "orange": [
              "būt pazīstamam ar kādu/kaut ko"
            ],
            "purple": [
              "pazīstamam",
              "kaut",
              "kādu"
            ]
          },
          "describes": {
            "purple": [
              "cilvēkus",
              "pieredzi",
              "lietas",
              "vietas"
            ]
          },
          "example": {
            "green": [
              "kenne"
            ]
          },
          "translation": {
            "purple": [
              "es viņu pazīstu"
            ],
            "purple": [
              "pazīstu",
              "viņu"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "zināt"
            ],
            "orange": [
              "zināt"
            ]
          },
          "de": {
            "green": [
              "wissen"
            ],
            "green": [
              "wissen"
            ]
          },
          "meaning": {
            "purple": [
              "zināt faktu",
              "zināt"
            ],
            "orange": [
              "zināt faktu vai informāciju"
            ],
            "purple": [
              "informāciju",
              "faktu",
              "zināt"
            ]
          },
          "describes": {
            "purple": [
              "informāciju",
              "atbildes",
              "faktus"
            ]
          },
          "example": {
            "green": [
              "Antwort",
              "weiß"
            ]
          },
          "translation": {
            "purple": [
              "es zinu"
            ],
            "green": [
              "Es zinu atbildi"
            ],
            "purple": [
              "atbildi",
              "zinu"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "pilsētu",
              "Pazīt"
            ],
            "purple": [
              "pazīt pilsētu"
            ]
          },
          "de": {
            "green": [
              "eine Stadt kennen",
              "kennen",
              "Stadt"
            ],
            "purple": [
              "kennen"
            ]
          },
          "meaning": {
            "green": [
              "Pazīt"
            ],
            "orange": [
              "pazīt vietu"
            ],
            "purple": [
              "pazīt",
              "vietu"
            ]
          },
          "describes": {
            "purple": [
              "pieredzi",
              "vietas"
            ]
          },
          "example": {
            "green": [
              "Berlin",
              "kenne"
            ]
          },
          "translation": {
            "green": [
              "Es labi pazīstu Berlīni"
            ],
            "purple": [
              "Berlīni",
              "pazīstu",
              "labi"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "ka"
            ],
            "yellow": [
              "Zināt"
            ],
            "purple": [
              "zināt, ka"
            ]
          },
          "de": {
            "green": [
              "wissen"
            ],
            "red": [
              "wissen, dass",
              "wissen",
              "dass"
            ]
          },
          "meaning": {
            "purple": [
              "zināt faktu",
              "zināt"
            ],
            "purple": [
              "faktu",
              "zināt"
            ]
          },
          "describes": {
            "purple": [
              "teikumus",
              "faktu"
            ]
          },
          "example": {
            "green": [
              "kommt",
              "dass",
              "weiß"
            ]
          },
          "translation": {
            "purple": [
              "es zinu"
            ],
            "green": [
              "ka"
            ],
            "purple": [
              "ka viņš nāks",
              "nāks",
              "zinu"
            ],
            "red": [
              "Es zinu, ka viņš nāks"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "orange": [
            "wissen"
          ],
          "purple": [
            "kennen"
          ],
          "yellow": [
            "darbības",
            "cilvēks",
            "lieta",
            "lieto",
            "vārda",
            "vieta",
            "seko"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "kenne",
                "Maria"
              ]
            },
            "lv": {
              "purple": [
                "pazīstu",
                "mariju"
              ]
            }
          },
          {
            "de": {
              "green": [
                "Antwort",
                "weiß"
              ]
            },
            "lv": {
              "purple": [
                "es zinu"
              ],
              "green": [
                "Es zinu atbildi"
              ],
              "purple": [
                "atbildi",
                "zinu"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "red": [
            "Es viņu pazīstu"
          ],
          "yellow": [
            "pazīstu",
            "kenne",
            "viņu"
          ]
        },
        {
          "yellow": [
            "weiß",
            "zinu"
          ]
        },
        {
          "orange": [
            "wissen"
          ],
          "purple": [
            "kennen"
          ],
          "yellow": [
            "pazīšanai",
            "cilvēka",
            "faktiem",
            "domāts",
            "kennen",
            "wissen"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "Pazīt"
          ],
          "yellow": [
            "kaut ko"
          ],
          "purple": [
            "kennen"
          ],
          "red": [
            "kennen",
            "pazīt",
            "kaut",
            "kādu"
          ]
        },
        {
          "yellow": [
            "zināt faktu",
            "Zināt"
          ],
          "orange": [
            "zināt faktu vai informāciju",
            "wissen"
          ],
          "red": [
            "informāciju",
            "wissen",
            "faktu",
            "zināt"
          ]
        },
        {
          "red": [
            "cilvēku",
            "pareizi",
            "runa",
            "weiß"
          ]
        }
      ],
      "remember": [
        {
          "purple": [
            "kennen"
          ],
          "yellow": [
            "Personas",
            "kennen",
            "vietas"
          ]
        },
        {
          "orange": [
            "wissen"
          ],
          "yellow": [
            "atbildes",
            "wissen",
            "Fakti"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "red": [
              "weiß"
            ]
          },
          "right": {
            "green": [
              "kenne"
            ]
          },
          "note": {}
        },
        {
          "wrong": {
            "red": [
              "Antwort",
              "kenne"
            ]
          },
          "right": {
            "green": [
              "Antwort",
              "weiß"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-kennen-wissen",
        "comparisonStudy",
        "Pazīt • Zināt",
        "informācijai",
        "cilvēkiem",
        "pieredzi",
        "cilvēku",
        "Es zinu",
        "faktiem",
        "pazīsti",
        "kennen",
        "lietām",
        "vietām",
        "wissen",
        "kenne",
        "lieto",
        "lietu",
        "Pazīt",
        "vietu",
        "Zināt"
      ],
      "green": [
        "Es labi pazīstu Berlīni",
        "būt pazīstamam ar kādu",
        "Es zinu atbildi",
        "compare",
        "Pazīt",
        "ka"
      ],
      "yellow": [
        "eine Stadt kennen",
        "zināt faktu",
        "kaut ko",
        "Zināt"
      ],
      "orange": [
        "būt pazīstamam ar kādu/kaut ko",
        "zināt faktu vai informāciju",
        "pazīt vietu",
        "wissen"
      ],
      "purple": [
        "pazīt pilsētu",
        "ka viņš nāks",
        "zināt, ka",
        "kennen"
      ],
      "red": [
        "Es zinu, ka viņš nāks",
        "Es viņu pazīstu",
        "kennen • wissen",
        "wissen, dass"
      ]
    }
  },
  "compare-stehen-stellen": {
    "sectionAccents": {
      "lead": {
        "orange": [
          "stellen"
        ],
        "purple": [
          "apraksta",
          "stāvokli",
          "darbību",
          "stellen",
          "stehen"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Stāvēt"
            ],
            "purple": [
              "stāvēt"
            ]
          },
          "de": {
            "purple": [
              "stehen"
            ],
            "blue": [
              "stehen"
            ]
          },
          "description": {
            "blue": [
              "Apraksta",
              "stāvus",
              "kaut"
            ]
          },
          "example": {
            "green": [
              "Pudele stāv uz galda"
            ],
            "blue": [
              "Flasche",
              "Pudele",
              "galda",
              "steht",
              "Tisch",
              "stāv"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "nolikt stāvus"
            ],
            "orange": [
              "nolikt",
              "stāvus"
            ]
          },
          "de": {
            "green": [
              "stellen"
            ],
            "green": [
              "stellen"
            ]
          },
          "description": {
            "green": [
              "Apraksta",
              "darbību",
              "noliek",
              "stāvus",
              "kaut",
              "kāds"
            ]
          },
          "example": {
            "green": [
              "Es nolieku pudeli uz galda",
              "Flasche",
              "nolieku",
              "pudeli",
              "stelle",
              "galda",
              "Tisch"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "Flasche",
              "steht",
              "Tisch"
            ]
          },
          "lv": {
            "green": [
              "Pudele stāv uz galda"
            ],
            "purple": [
              "pudele",
              "galda",
              "stāv"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Flasche",
              "stelle",
              "Tisch"
            ]
          },
          "lv": {
            "green": [
              "Es nolieku pudeli uz galda"
            ],
            "purple": [
              "nolieku",
              "pudeli",
              "galda"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Fenster",
              "steht",
              "Stuhl"
            ]
          },
          "lv": {
            "purple": [
              "krēsls",
              "loga",
              "stāv"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Fenster",
              "bitte",
              "Stell",
              "Stuhl"
            ]
          },
          "lv": {
            "purple": [
              "krēslu",
              "noliec",
              "lūdzu",
              "loga"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Küche",
              "steht",
              "Glas"
            ]
          },
          "lv": {
            "purple": [
              "virtuvē",
              "glāze",
              "stāv"
            ]
          }
        },
        {
          "de": {
            "green": [
              "stelle",
              "Küche",
              "Glas"
            ]
          },
          "lv": {
            "purple": [
              "nolieku",
              "virtuvē",
              "glāzi"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Stāvēt"
            ],
            "purple": [
              "stāvēt"
            ]
          },
          "de": {
            "purple": [
              "stehen"
            ],
            "blue": [
              "stehen"
            ]
          },
          "meaning": {
            "purple": [
              "atrasties stāvus"
            ],
            "purple": [
              "atrasties",
              "stāvus"
            ]
          },
          "describes": {
            "purple": [
              "stāvokli"
            ]
          },
          "example": {
            "green": [
              "Flasche",
              "steht",
              "Tisch"
            ]
          },
          "translation": {
            "green": [
              "Pudele stāv uz galda"
            ],
            "purple": [
              "pudele",
              "galda",
              "stāv"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "nolikt stāvus"
            ],
            "orange": [
              "nolikt",
              "stāvus"
            ]
          },
          "de": {
            "green": [
              "stellen"
            ],
            "green": [
              "stellen"
            ]
          },
          "meaning": {
            "purple": [
              "novietot stāvus"
            ],
            "purple": [
              "novietot",
              "stāvus"
            ]
          },
          "describes": {
            "purple": [
              "darbību"
            ]
          },
          "example": {
            "green": [
              "Flasche",
              "stelle",
              "Tisch"
            ]
          },
          "translation": {
            "green": [
              "Es nolieku pudeli uz galda"
            ],
            "purple": [
              "nolieku",
              "pudeli",
              "galda"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "atrasties guļus",
              "atrasties",
              "gulēt",
              "guļus"
            ],
            "orange": [
              "gulēt"
            ],
            "purple": [
              "gulēt / atrasties guļus"
            ]
          },
          "de": {
            "green": [
              "liegen"
            ]
          },
          "meaning": {
            "green": [
              "atrasties guļus"
            ],
            "purple": [
              "atrasties",
              "guļus"
            ]
          },
          "describes": {
            "purple": [
              "stāvokli"
            ]
          },
          "example": {
            "green": [
              "Tisch",
              "Buch"
            ]
          },
          "translation": {
            "purple": [
              "grāmata guļ uz galda"
            ],
            "purple": [
              "grāmata",
              "galda"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "nolikt guļus"
            ],
            "yellow": [
              "nolikt",
              "guļus"
            ]
          },
          "de": {
            "green": [
              "legen"
            ]
          },
          "meaning": {
            "purple": [
              "novietot guļus"
            ],
            "purple": [
              "novietot",
              "guļus"
            ]
          },
          "describes": {
            "purple": [
              "darbību"
            ]
          },
          "example": {
            "green": [
              "Tisch",
              "Buch",
              "lege"
            ]
          },
          "translation": {
            "green": [
              "Es nolieku grāmatu uz galda"
            ],
            "purple": [
              "grāmatu",
              "nolieku",
              "galda"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "orange": [
            "stellen"
          ],
          "purple": [
            "stehen"
          ],
          "yellow": [
            "priekšmets",
            "novieto",
            "stellen",
            "stāvus",
            "stehen",
            "lieto",
            "kaut"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "Lampe",
                "steht"
              ]
            },
            "lv": {
              "purple": [
                "lampa",
                "stāv",
                "šeit"
              ]
            }
          },
          {
            "de": {
              "green": [
                "hierhin",
                "stelle",
                "Lampe"
              ]
            },
            "lv": {
              "purple": [
                "nolieku",
                "lampu",
                "šeit"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Pudele stāv uz galda"
          ],
          "yellow": [
            "Flasche",
            "Pudele",
            "galda",
            "steht",
            "Tisch",
            "stāv"
          ]
        },
        {
          "green": [
            "Es nolieku pudeli uz galda"
          ],
          "yellow": [
            "Flasche",
            "nolieku",
            "pudeli",
            "stelle",
            "galda",
            "Tisch"
          ]
        },
        {
          "orange": [
            "stellen"
          ],
          "purple": [
            "stehen"
          ],
          "yellow": [
            "stāvoklis",
            "darbība",
            "stellen",
            "stehen"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "stehen"
          ],
          "red": [
            "stāvoklis",
            "stehen"
          ]
        },
        {
          "orange": [
            "stellen"
          ],
          "red": [
            "darbība",
            "stellen"
          ]
        },
        {
          "red": [
            "Flasche",
            "pareizi",
            "noliec",
            "stehe",
            "kaut"
          ]
        }
      ],
      "remember": [
        {
          "purple": [
            "stehen"
          ],
          "yellow": [
            "Priekšmets",
            "stāvus",
            "stehen"
          ]
        },
        {
          "orange": [
            "stellen"
          ],
          "yellow": [
            "priekšmetu",
            "stellen",
            "noliek",
            "stāvus",
            "Kāds"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "red": [
              "Flasche",
              "stehe",
              "Tisch"
            ]
          },
          "right": {
            "green": [
              "Flasche",
              "stelle",
              "Tisch"
            ]
          },
          "note": {}
        },
        {
          "wrong": {
            "red": [
              "Flasche",
              "stellt",
              "Tisch"
            ]
          },
          "right": {
            "green": [
              "Flasche",
              "steht",
              "Tisch"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-stehen-stellen",
        "Stāvēt • Nolikt stāvus",
        "comparisonStudy",
        "apraksta",
        "stāvokli",
        "darbību",
        "Flasche",
        "stellen",
        "Nolikt",
        "Pudele",
        "Stāvēt",
        "stāvus",
        "stehen",
        "galda",
        "steht",
        "Tisch",
        "kaut",
        "stāv"
      ],
      "green": [
        "Es nolieku grāmatu uz galda",
        "Es nolieku pudeli uz galda",
        "Pudele stāv uz galda",
        "atrasties guļus",
        "compare",
        "Stāvēt"
      ],
      "yellow": [
        "Nolikt stāvus",
        "liegen"
      ],
      "orange": [
        "atrasties stāvus",
        "novietot stāvus",
        "novietot guļus",
        "stellen",
        "gulēt"
      ],
      "purple": [
        "gulēt / atrasties guļus",
        "nolikt guļus",
        "stehen"
      ],
      "red": [
        "Grāmata guļ uz galda",
        "stehen • stellen",
        "legen"
      ]
    }
  },
  "compare-liegen-legen": {
    "sectionAccents": {
      "lead": {
        "blue": [
          "legen"
        ],
        "orange": [
          "liegen"
        ],
        "purple": [
          "apraksta",
          "stāvokli",
          "darbību",
          "liegen",
          "legen"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Gulēt"
            ],
            "yellow": [
              "Atrasties"
            ],
            "purple": [
              "gulēt / atrasties",
              "atrasties",
              "gulēt"
            ]
          },
          "de": {
            "green": [
              "liegen"
            ],
            "blue": [
              "liegen"
            ]
          },
          "description": {
            "orange": [
              "stāvoklis"
            ],
            "blue": [
              "horizontāli",
              "Stāvoklis",
              "guļus",
              "kaut"
            ]
          },
          "example": {
            "green": [
              "Grāmata",
              "galda",
              "Tisch",
              "Buch"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "nolikt guļus"
            ],
            "orange": [
              "nolikt",
              "guļus"
            ]
          },
          "de": {
            "green": [
              "legen"
            ],
            "green": [
              "legen"
            ]
          },
          "description": {
            "orange": [
              "darbība"
            ],
            "green": [
              "horizontāli",
              "Darbība",
              "noliek",
              "guļus",
              "kaut",
              "kāds"
            ]
          },
          "example": {
            "green": [
              "grāmatu",
              "nolieku",
              "galda",
              "Tisch",
              "Buch",
              "lege"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "Tisch",
              "Buch"
            ]
          },
          "lv": {
            "purple": [
              "grāmata",
              "galda"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Tisch",
              "Buch",
              "lege"
            ]
          },
          "lv": {
            "purple": [
              "grāmatu",
              "nolieku",
              "galda"
            ]
          }
        },
        {
          "de": {
            "green": [
              "liegen"
            ],
            "blue": [
              "Schlüssel",
              "liegen",
              "Flur"
            ]
          },
          "lv": {
            "purple": [
              "atslēgas",
              "gaitenī"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Schlüssel",
              "hierhin",
              "bitte"
            ]
          },
          "lv": {
            "purple": [
              "atslēgas",
              "noliec",
              "lūdzu",
              "šeit"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Handy",
              "neben"
            ]
          },
          "lv": {
            "purple": [
              "telefons",
              "blakus"
            ]
          }
        },
        {
          "de": {
            "green": [
              "kurz",
              "lege",
              "mich"
            ]
          },
          "lv": {
            "purple": [
              "apguļos",
              "brīdi"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "purple": [
              "atrasties"
            ],
            "purple": [
              "atrasties guļus",
              "atrasties",
              "guļus"
            ]
          },
          "de": {
            "green": [
              "liegen"
            ],
            "blue": [
              "liegen"
            ]
          },
          "meaning": {
            "purple": [
              "stāvoklis"
            ],
            "purple": [
              "stāvoklis"
            ]
          },
          "describes": {
            "purple": [
              "kaut"
            ]
          },
          "example": {
            "green": [
              "Buch"
            ]
          },
          "translation": {
            "green": [
              "Grāmata atrodas šeit"
            ],
            "purple": [
              "grāmata",
              "šeit"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "nolikt guļus"
            ],
            "orange": [
              "nolikt",
              "guļus"
            ]
          },
          "de": {
            "green": [
              "legen"
            ],
            "green": [
              "legen"
            ]
          },
          "meaning": {
            "purple": [
              "darbība"
            ],
            "purple": [
              "darbība"
            ]
          },
          "describes": {
            "purple": [
              "novieto",
              "kāds"
            ]
          },
          "example": {
            "green": [
              "hierhin",
              "Buch",
              "lege"
            ]
          },
          "translation": {
            "green": [
              "Es nolieku grāmatu šeit"
            ],
            "purple": [
              "grāmatu",
              "nolieku",
              "šeit"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "stāvēt"
            ],
            "green": [
              "stāvēt"
            ]
          },
          "de": {
            "green": [
              "stehen"
            ]
          },
          "meaning": {
            "purple": [
              "stāvoklis stāvus",
              "stāvoklis"
            ],
            "purple": [
              "stāvoklis",
              "stāvus"
            ]
          },
          "describes": {
            "purple": [
              "atrašanos",
              "vertikālu"
            ]
          },
          "example": {
            "green": [
              "Flasche",
              "steht"
            ]
          },
          "translation": {
            "green": [
              "Pudele tur stāv"
            ],
            "purple": [
              "pudele",
              "stāv"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "nolikt stāvus"
            ],
            "yellow": [
              "nolikt",
              "stāvus"
            ]
          },
          "de": {
            "green": [
              "stellen"
            ]
          },
          "meaning": {
            "purple": [
              "darbība stāvus",
              "darbība"
            ],
            "purple": [
              "darbība",
              "stāvus"
            ]
          },
          "describes": {
            "purple": [
              "novietošanu",
              "vertikālu"
            ]
          },
          "example": {
            "green": [
              "Flasche",
              "stelle"
            ]
          },
          "translation": {
            "green": [
              "Es nolieku pudeli stāvus"
            ],
            "purple": [
              "nolieku",
              "pudeli",
              "stāvus"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "legen"
          ],
          "orange": [
            "liegen"
          ],
          "yellow": [
            "horizontāli",
            "priekšmets",
            "novieto",
            "liegen",
            "legen",
            "lieto",
            "kaut"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
              ]
            },
            "lv": {
              "purple": [
              ]
            }
          },
          {
            "de": {
              "green": [
                "lege"
              ]
            },
            "lv": {
              "purple": [
                "nolieku"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "yellow": [
            "Tisch",
            "Buch"
          ]
        },
        {
          "yellow": [
            "Tisch",
            "Buch",
            "lege"
          ]
        },
        {
          "yellow": [
            "apraksta",
            "stāvokli",
            "darbību",
            "Pirmais",
            "teikums",
            "otrais"
          ]
        }
      ],
      "important": [
        {
          "orange": [
            "stāvoklis",
            "liegen"
          ],
          "red": [
            "stāvoklis",
            "liegen"
          ]
        },
        {
          "blue": [
            "legen"
          ],
          "orange": [
            "darbība"
          ],
          "red": [
            "darbība",
            "legen"
          ]
        },
        {
          "red": [
            "pareizi",
            "liege",
            "Buch"
          ]
        }
      ],
      "remember": [
        {
          "orange": [
            "stāvoklis",
            "liegen"
          ],
          "yellow": [
            "Stāvoklis",
            "liegen"
          ]
        },
        {
          "blue": [
            "legen"
          ],
          "orange": [
            "darbība"
          ],
          "yellow": [
            "Darbība",
            "legen"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "red": [
              "liege",
              "Tisch",
              "Buch"
            ]
          },
          "right": {
            "green": [
              "Tisch",
              "Buch",
              "lege"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "Gulēt / Atrasties • Nolikt guļus",
        "compare-liegen-legen",
        "comparisonStudy",
        "horizontāli",
        "Atrasties",
        "Stāvoklis",
        "apraksta",
        "stāvokli",
        "darbību",
        "liegen",
        "noliek",
        "Nolikt",
        "Gulēt",
        "guļus",
        "legen",
        "lieto",
        "kaut",
        "kāds"
      ],
      "green": [
        "Es nolieku pudeli stāvus",
        "Es nolieku grāmatu šeit",
        "compare-liegen-legen",
        "Grāmata atrodas šeit",
        "Pudele tur stāv",
        "Gulēt"
      ],
      "yellow": [
        "Atrasties",
        "compare",
        "stehen"
      ],
      "orange": [
        "stāvoklis stāvus",
        "darbība stāvus",
        "stāvoklis",
        "darbība",
        "liegen"
      ],
      "purple": [
        "gulēt / atrasties",
        "atrasties guļus",
        "liegen • legen",
        "nolikt stāvus",
        "stāvēt"
      ],
      "red": [
        "Nolikt guļus",
        "stellen"
      ]
    }
  },
  "compare-bringen-holen": {
    "sectionAccents": {
      "lead": {
        "blue": [
          "holen"
        ],
        "orange": [
          "bringen"
        ],
        "purple": [
          "bringen",
          "nogādāt",
          "aiziet",
          "atvest",
          "holen",
          "pakaļ"
        ],
        "red": [
          "Aiziet pakaļ"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "purple": [
              "nogādāt"
            ]
          },
          "de": {
            "green": [
              "bringen"
            ],
            "blue": [
              "bringen"
            ]
          },
          "description": {
            "blue": [
              "adresāta",
              "nogādā",
              "vietu",
              "Kaut",
              "kādu"
            ]
          },
          "example": {
            "green": [
              "Es tev atnesu kafiju"
            ],
            "blue": [
              "atnesu",
              "bringe",
              "Kaffee",
              "kafiju"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "aiziet pakaļ"
            ],
            "orange": [
              "aiziet",
              "pakaļ"
            ]
          },
          "de": {
            "green": [
              "holen"
            ],
            "green": [
              "holen"
            ]
          },
          "description": {
            "red": [
              "Aiziet pakaļ"
            ],
            "green": [
              "atpakaļ",
              "Aiziet",
              "atved",
              "pakaļ",
              "paņem",
              "sevis"
            ]
          },
          "example": {
            "green": [
              "Es aizeju pēc kafijas",
              "kafijas",
              "aizeju",
              "Kaffee",
              "hole"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "bringe",
              "Kaffee"
            ]
          },
          "lv": {
            "purple": [
              "es tev atnesu kafiju"
            ],
            "purple": [
              "atnesu",
              "kafiju"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Kaffee",
              "hole"
            ]
          },
          "lv": {
            "green": [
              "Es aizeju pēc kafijas"
            ],
            "purple": [
              "kafijas",
              "aizeju"
            ]
          }
        },
        {
          "de": {
            "green": [
              "abholen"
            ],
            "blue": [
              "abholen",
              "Kannst",
              "mich"
            ]
          },
          "lv": {
            "purple": [
              "atbraukt",
              "pakaļ",
              "vari"
            ]
          }
        },
        {
          "de": {
            "green": [
              "bitte",
              "Brief",
              "Bring",
              "Post"
            ]
          },
          "lv": {
            "purple": [
              "vēstuli",
              "aiznes",
              "lūdzu",
              "pastu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Tochter",
              "Schule",
              "hole"
            ]
          },
          "lv": {
            "purple": [
              "paņemu",
              "skolas",
              "meitu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "bringt",
              "Hause",
              "Paket",
              "nach"
            ]
          },
          "lv": {
            "purple": [
              "nogādā",
              "mājās",
              "paku"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "purple": [
              "nogādāt"
            ]
          },
          "de": {
            "green": [
              "bringen"
            ],
            "blue": [
              "bringen"
            ]
          },
          "meaning": {
            "green": [
              "nest"
            ],
            "yellow": [
              "vest uz mērķi"
            ],
            "orange": [
              "nest/vest uz mērķi"
            ],
            "purple": [
              "mērķi",
              "nest",
              "vest"
            ]
          },
          "describes": {
            "purple": [
              "adresāta",
              "virzienu"
            ]
          },
          "example": {
            "green": [
              "bringe",
              "Kaffee"
            ]
          },
          "translation": {
            "purple": [
              "es tev atnesu kafiju"
            ],
            "purple": [
              "atnesu",
              "kafiju"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "aiziet pakaļ"
            ],
            "orange": [
              "aiziet",
              "pakaļ"
            ]
          },
          "de": {
            "green": [
              "holen"
            ],
            "green": [
              "holen"
            ]
          },
          "meaning": {
            "purple": [
              "paņemt un atvest"
            ],
            "purple": [
              "atvest",
              "paņemt"
            ]
          },
          "describes": {
            "purple": [
              "došanos",
              "pakaļ"
            ]
          },
          "example": {
            "green": [
              "Kaffee",
              "hole"
            ]
          },
          "translation": {
            "green": [
              "Es aizeju pēc kafijas"
            ],
            "purple": [
              "kafijas",
              "aizeju"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "atbraukt pakaļ"
            ],
            "green": [
              "atbraukt",
              "pakaļ"
            ]
          },
          "de": {
            "green": [
              "abholen"
            ]
          },
          "meaning": {
            "green": [
              "paņemt cilvēku"
            ],
            "yellow": [
              "lietu"
            ],
            "orange": [
              "paņemt cilvēku/lietu"
            ],
            "purple": [
              "cilvēku",
              "paņemt",
              "lietu"
            ]
          },
          "describes": {
            "purple": [
              "transportu",
              "paņemšanu",
              "sarunātu"
            ]
          },
          "example": {
            "green": [
              "dich",
              "hole"
            ]
          },
          "translation": {
            "purple": [
              "es atbraukšu tev pakaļ"
            ],
            "purple": [
              "atbraukšu",
              "pakaļ"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ņemt līdzi"
            ],
            "yellow": [
              "līdzi",
              "ņemt"
            ]
          },
          "de": {
            "green": [
              "mitnehmen"
            ]
          },
          "meaning": {
            "purple": [
              "paņemt sev līdzi"
            ],
            "purple": [
              "paņemt",
              "līdzi"
            ]
          },
          "describes": {
            "purple": [
              "virzību",
              "kopīgu"
            ]
          },
          "example": {
            "green": [
              "nehme",
              "dich"
            ]
          },
          "translation": {
            "green": [
              "Es tevi paņemu līdzi"
            ],
            "purple": [
              "paņemu",
              "līdzi",
              "tevi"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "holen"
          ],
          "orange": [
            "bringen"
          ],
          "yellow": [
            "jāaiziet",
            "vispirms",
            "bringen",
            "cilvēka",
            "bieži",
            "nonāk",
            "pakaļ",
            "kaut"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "Bring"
              ]
            },
            "lv": {
              "purple": [
                "atnes"
              ]
            }
          },
          {
            "de": {
              "green": [
                "bitte"
              ]
            },
            "lv": {
              "purple": [
                "aizej",
                "pakaļ"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "red": [
            "Es tev atnesu kafiju"
          ],
          "yellow": [
            "atnesu",
            "bringe",
            "Kaffee",
            "kafiju"
          ]
        },
        {
          "green": [
            "Es aizeju pēc kafijas"
          ],
          "yellow": [
            "kafijas",
            "aizeju",
            "Kaffee",
            "hole"
          ]
        },
        {
          "blue": [
            "holen"
          ],
          "orange": [
            "bringen"
          ],
          "yellow": [
            "bringen",
            "nogādā",
            "holen",
            "pakaļ"
          ]
        }
      ],
      "important": [
        {
          "orange": [
            "bringen"
          ],
          "purple": [
            "nogādāt"
          ],
          "red": [
            "bringen",
            "nogādāt"
          ]
        },
        {
          "blue": [
            "holen"
          ],
          "red": [
            "Aiziet pakaļ",
            "aiziet",
            "atvest",
            "holen",
            "pakaļ"
          ]
        },
        {
          "yellow": [
            "abholen"
          ],
          "red": [
            "paņemšanai",
            "abholen",
            "cilvēku",
            "lietots",
            "bieži"
          ]
        }
      ],
      "remember": [
        {
          "orange": [
            "bringen"
          ],
          "yellow": [
            "bringen",
            "manis"
          ]
        },
        {
          "blue": [
            "holen"
          ],
          "yellow": [
            "atpakaļ",
            "holen",
            "Pakaļ"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "green": [
              "Es aizeju pēc kafijas"
            ],
            "red": [
              "kafijas",
              "aizeju",
              "bringe",
              "Kaffee",
              "doma"
            ]
          },
          "right": {
            "green": [
              "Kaffee",
              "hole"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "Atnest • Aiznest • Aiziet pakaļ",
        "compare-bringen-holen",
        "comparisonStudy",
        "virziens",
        "Aiznest",
        "bringen",
        "cilvēka",
        "nogādāt",
        "Aiziet",
        "Atnest",
        "atvest",
        "ietver",
        "holen",
        "pakaļ",
        "vietu",
        "domu",
        "kāda",
        "kādu"
      ],
      "green": [
        "compare-bringen-holen",
        "Es aizeju pēc kafijas",
        "Es tevi paņemu līdzi",
        "paņemt cilvēku",
        "Atnest",
        "nest"
      ],
      "yellow": [
        "vest uz mērķi",
        "abholen",
        "Aiznest",
        "compare",
        "lietu"
      ],
      "orange": [
        "paņemt cilvēku/lietu",
        "nest/vest uz mērķi",
        "paņemt sev līdzi",
        "paņemt un atvest",
        "bringen"
      ],
      "purple": [
        "bringen • holen",
        "atbraukt pakaļ",
        "ņemt līdzi",
        "nogādāt"
      ],
      "red": [
        "Es atbraukšu tev pakaļ",
        "Es tev atnesu kafiju",
        "Aiziet pakaļ",
        "mitnehmen"
      ]
    }
  },
  "compare-sehen-schauen-ansehen": {
    "sectionAccents": {
      "lead": {
        "blue": [
          "schauen"
        ],
        "green": [
          "noskatīties",
          "ansehen",
          "Redzēt"
        ],
        "yellow": [
          "Skatīties"
        ],
        "orange": [
          "sehen"
        ],
        "red": [
          "Apskatīt"
        ],
        "purple": [
          "noskatīties",
          "skatīties",
          "apskatīt",
          "ansehen",
          "schauen",
          "redzēt",
          "sehen"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Redzēt"
            ],
            "purple": [
              "redzēt"
            ]
          },
          "de": {
            "green": [
              "sehen"
            ],
            "blue": [
              "sehen"
            ]
          },
          "description": {
            "orange": [
              "uztvert ar acīm"
            ],
            "blue": [
              "Uztvert",
              "nodoma",
              "bieži",
              "īpaša",
              "acīm"
            ]
          },
          "example": {
            "green": [
              "Es tevi redzu"
            ],
            "blue": [
              "redzu",
              "dich",
              "sehe",
              "tevi"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "skatīties"
            ],
            "orange": [
              "skatīties"
            ]
          },
          "de": {
            "green": [
              "schauen"
            ],
            "green": [
              "schauen"
            ]
          },
          "description": {
            "yellow": [
              "Skatīties"
            ],
            "orange": [
              "aktīvi skatīties"
            ],
            "green": [
              "palūkoties",
              "skatīties",
              "Aktīvi"
            ]
          },
          "example": {
            "green": [
              "Es skatos televizoru",
              "televizoru",
              "schaue",
              "skatos",
              "fern"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "noskatīties",
              "apskatīt"
            ],
            "purple": [
              "apskatīt / noskatīties"
            ],
            "red": [
              "Apskatīt"
            ]
          },
          "de": {
            "green": [
              "ansehen"
            ],
            "yellow": [
              "ansehen"
            ]
          },
          "description": {
            "green": [
              "noskatīties filmu",
              "noskatīties"
            ],
            "yellow": [
              "noskatīties",
              "Apskatīt",
              "konkrētu",
              "filmu",
              "lietu",
              "video"
            ],
            "orange": [
              "noskatīties filmu/video"
            ],
            "red": [
              "Apskatīt"
            ]
          },
          "example": {
            "green": [
              "Es noskatos filmu"
            ],
            "yellow": [
              "noskatos",
              "filmu",
              "Film",
              "sehe"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "dich",
              "sehe"
            ]
          },
          "lv": {
            "green": [
              "Es tevi redzu"
            ],
            "purple": [
              "redzu",
              "tevi"
            ]
          }
        },
        {
          "de": {
            "green": [
              "schaue",
              "fern"
            ]
          },
          "lv": {
            "green": [
              "Es skatos televizoru"
            ],
            "purple": [
              "televizoru",
              "skatos"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Film",
              "sehe"
            ]
          },
          "lv": {
            "purple": [
              "es noskatos filmu"
            ],
            "purple": [
              "noskatos",
              "filmu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Schau"
            ]
          },
          "lv": {
            "green": [
              "Apskati šo"
            ],
            "purple": [
              "apskati"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Siehst",
              "Haus"
            ]
          },
          "lv": {
            "purple": [
              "redzi",
              "māju"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Fenster",
              "schauen"
            ]
          },
          "lv": {
            "purple": [
              "skatāmies",
              "logu"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Redzēt"
            ],
            "purple": [
              "redzēt"
            ]
          },
          "de": {
            "green": [
              "sehen"
            ],
            "blue": [
              "sehen"
            ]
          },
          "meaning": {
            "purple": [
              "uztvert ar acīm"
            ],
            "purple": [
              "uztvert",
              "acīm"
            ]
          },
          "describes": {
            "purple": [
              "redzi"
            ]
          },
          "example": {
            "green": [
              "dich",
              "sehe"
            ]
          },
          "translation": {
            "green": [
              "Es tevi redzu"
            ],
            "purple": [
              "redzu",
              "tevi"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "skatīties"
            ],
            "orange": [
              "skatīties"
            ]
          },
          "de": {
            "green": [
              "schauen"
            ],
            "green": [
              "schauen"
            ]
          },
          "meaning": {
            "purple": [
              "skatīties"
            ],
            "orange": [
              "aktīvi skatīties"
            ],
            "purple": [
              "skatīties",
              "aktīvi"
            ]
          },
          "describes": {
            "purple": [
              "darbību"
            ]
          },
          "example": {
            "green": [
              "schaue",
              "fern"
            ]
          },
          "translation": {
            "green": [
              "Es skatos televizoru"
            ],
            "purple": [
              "televizoru",
              "skatos"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "apskatīt"
            ],
            "green": [
              "apskatīt"
            ]
          },
          "de": {
            "green": [
              "ansehen"
            ],
            "yellow": [
              "ansehen"
            ]
          },
          "meaning": {
            "purple": [
              "skatīties"
            ],
            "orange": [
              "skatīties uz konkrētu objektu"
            ],
            "purple": [
              "skatīties",
              "konkrētu",
              "objektu"
            ]
          },
          "describes": {
            "purple": [
              "skatīšanos",
              "mērķētu"
            ]
          },
          "example": {
            "green": [
              "Schau"
            ]
          },
          "translation": {
            "green": [
              "Apskati šo"
            ],
            "purple": [
              "apskati"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "noskatīties"
            ],
            "yellow": [
              "noskatīties"
            ]
          },
          "de": {
            "green": [
              "ansehen"
            ],
            "red": [
              "sich ansehen",
              "ansehen",
            ]
          },
          "meaning": {
            "green": [
              "noskatīties filmu",
              "noskatīties"
            ],
            "yellow": [
              "video"
            ],
            "orange": [
              "noskatīties filmu/video"
            ],
            "purple": [
              "noskatīties",
              "filmu",
              "video"
            ]
          },
          "describes": {
            "purple": [
              "skatīšanos",
              "pilnu"
            ]
          },
          "example": {
            "green": [
              "Film",
              "sehe"
            ]
          },
          "translation": {
            "purple": [
              "es noskatos filmu"
            ],
            "purple": [
              "noskatos",
              "filmu"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "schauen"
          ],
          "green": [
            "ansehen"
          ],
          "orange": [
            "sehen"
          ],
          "yellow": [
            "schauen",
            "skaties",
            "aktīvi",
            "uztver",
            "lieto",
            "sehen",
            "acis",
            "kaut"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "sehen"
              ],
              "blue": [
                "sehen"
              ]
            },
            "lv": {
              "green": [
                "Redzēt"
              ],
              "purple": [
                "redzēt"
              ]
            }
          },
          {
            "de": {
              "green": [
                "schauen"
              ]
            },
            "lv": {
              "purple": [
                "skatīties"
              ],
              "purple": [
                "skatīties"
              ]
            }
          },
          {
            "de": {
              "green": [
                "ansehen"
              ],
              "blue": [
                "ansehen"
              ]
            },
            "lv": {
              "purple": [
                "apskatīt"
              ],
              "purple": [
                "apskatīt"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Es tevi redzu"
          ],
          "yellow": [
            "redzu",
            "dich",
            "sehe",
            "tevi"
          ]
        },
        {
          "green": [
            "Es skatos televizoru"
          ],
          "yellow": [
            "televizoru",
            "schaue",
            "skatos",
            "fern"
          ]
        },
        {
          "red": [
            "Es noskatos filmu"
          ],
          "yellow": [
            "noskatos",
            "filmu",
            "Film",
            "sehe"
          ]
        }
      ],
      "important": [
        {
          "yellow": [
            "Skatīties"
          ],
          "orange": [
            "sehen"
          ],
          "red": [
            "skatīties",
            "sehen"
          ]
        },
        {
          "green": [
            "ansehen"
          ],
          "red": [
            "atdalāms",
            "ansehen",
            "bieži",
            "sehe"
          ]
        }
      ],
      "remember": [
        {
          "green": [
            "Redzēt"
          ],
          "orange": [
            "sehen"
          ],
          "yellow": [
            "redzēt",
            "sehen"
          ]
        },
        {
          "blue": [
            "schauen"
          ],
          "yellow": [
            "Skatīties",
            "schauen"
          ]
        },
        {
          "green": [
            "noskatīties",
            "ansehen"
          ],
          "red": [
            "Apskatīt"
          ],
          "yellow": [
            "noskatīties",
            "apskatīt",
            "ansehen"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "green": [
              "Es tevi redzu"
            ],
            "red": [
              "schaue",
              "redzu",
              "dich",
              "doma",
              "tevi"
            ]
          },
          "right": {
            "green": [
              "dich",
              "sehe"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-sehen-schauen-ansehen",
        "Redzēt • Skatīties • Apskatīt",
        "comparisonStudy",
        "noskatīties",
        "Skatīties",
        "Apskatīt",
        "piepūles",
        "uzmanību",
        "ansehen",
        "schauen",
        "aktīvi",
        "īpašas",
        "notiek",
        "Redzēt",
        "bieži",
        "lieto",
        "sehen",
        "vērš"
      ],
      "green": [
        "Es skatos televizoru",
        "noskatīties filmu",
        "Es tevi redzu",
        "noskatīties",
        "Apskati šo",
        "ansehen",
        "Redzēt"
      ],
      "yellow": [
        "compare-sehen-schauen-ansehen",
        "Skatīties",
        "video"
      ],
      "orange": [
        "skatīties uz konkrētu objektu",
        "noskatīties filmu/video",
        "aktīvi skatīties",
        "uztvert ar acīm",
        "sehen"
      ],
      "purple": [
        "sehen • schauen • ansehen",
        "apskatīt / noskatīties"
      ],
      "red": [
        "Es noskatos filmu",
        "sich ansehen",
        "Apskatīt",
        "compare"
      ]
    }
  },
  "compare-hoeren-zuhoeren": {
    "sectionAccents": {
      "lead": {
        "green": [
          "klausīties",
          "Dzirdēt"
        ],
        "orange": [
          "zuhören"
        ],
        "purple": [
          "uzmanīgi klausīties",
          "klausīties",
          "uzmanīgi",
          "cilvēku",
          "dzirdēt",
          "zuhören",
          "hören",
          "skaņu"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "klausīties",
              "Dzirdēt"
            ],
            "purple": [
              "dzirdēt / klausīties",
              "klausīties",
              "dzirdēt"
            ]
          },
          "de": {
            "purple": [
              "hören"
            ],
            "blue": [
              "hören"
            ]
          },
          "description": {
            "green": [
              "klausīties",
              "Dzirdēt"
            ],
            "purple": [
              "klausīties mūziku"
            ],
            "blue": [
              "klausīties",
              "Dzirdēt",
              "mūziku",
              "skaņu"
            ]
          },
          "example": {
            "green": [
              "Es klausos mūziku"
            ],
            "blue": [
              "klausos",
              "mūziku",
              "Musik",
              "höre"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "klausīties"
            ],
            "purple": [
              "uzmanīgi klausīties"
            ],
            "orange": [
              "klausīties",
              "uzmanīgi"
            ]
          },
          "de": {
            "green": [
              "zuhören"
            ],
            "green": [
              "zuhören"
            ]
          },
          "description": {
            "green": [
              "klausīties",
              "Uzmanīgi",
              "cilvēku",
              "teikto"
            ],
            "purple": [
              "uzmanīgi klausīties"
            ]
          },
          "example": {
            "green": [
              "Es tevī klausos",
              "klausos",
              "höre",
              "tevī"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "Musik",
              "höre"
            ]
          },
          "lv": {
            "green": [
              "Es klausos mūziku"
            ],
            "purple": [
              "klausos",
              "mūziku"
            ]
          }
        },
        {
          "de": {
            "green": [
              "höre"
            ]
          },
          "lv": {
            "green": [
              "Es tevī klausos"
            ],
            "purple": [
              "klausos",
              "tevī"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Bitte"
            ]
          },
          "lv": {
            "green": [
              "Lūdzu, klausies manī"
            ],
            "yellow": [
              "Lūdzu"
            ],
            "red": [
              "klausies manī"
            ],
            "purple": [
              "klausies",
              "lūdzu",
              "manī"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Hörst",
              "Regen"
            ]
          },
          "lv": {
            "purple": [
              "dzirdi",
              "lietu"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "hören"
            ],
            "blue": [
              "Geschichte",
              "Kinder",
              "hören"
            ]
          },
          "lv": {
            "purple": [
              "klausās",
              "stāstu",
              "bērni"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Lehrer",
              "hört"
            ]
          },
          "lv": {
            "purple": [
              "skolotājā",
              "uzmanīgi",
              "klausās"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Dzirdēt"
            ],
            "purple": [
              "dzirdēt"
            ]
          },
          "de": {
            "purple": [
              "hören"
            ],
            "blue": [
              "hören"
            ]
          },
          "meaning": {
            "purple": [
              "uztvert skaņu"
            ],
            "purple": [
              "uztvert",
              "skaņu"
            ]
          },
          "describes": {
            "purple": [
              "skaņas"
            ]
          },
          "example": {
            "green": [
              "dich",
              "höre"
            ]
          },
          "translation": {
            "green": [
              "Es tevi dzirdu"
            ],
            "purple": [
              "dzirdu",
              "tevi"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "klausīties"
            ],
            "purple": [
              "klausīties mūziku"
            ],
            "orange": [
              "klausīties",
              "mūziku"
            ]
          },
          "de": {
            "green": [
              "Musik hören",
              "hören",
              "Musik"
            ],
            "purple": [
              "hören"
            ]
          },
          "meaning": {
            "green": [
              "klausīties"
            ],
            "orange": [
              "klausīties audio"
            ],
            "purple": [
              "klausīties",
              "audio"
            ]
          },
          "describes": {
            "purple": [
              "mūziku",
              "radio"
            ]
          },
          "example": {
            "green": [
              "Musik",
              "höre"
            ]
          },
          "translation": {
            "green": [
              "Es klausos mūziku"
            ],
            "purple": [
              "klausos",
              "mūziku"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "klausīties",
              "uzmanīgi"
            ],
            "purple": [
              "uzmanīgi klausīties"
            ]
          },
          "de": {
            "green": [
              "zuhören"
            ],
            "yellow": [
              "zuhören"
            ]
          },
          "meaning": {
            "purple": [
              "sekot teiktajam"
            ],
            "purple": [
              "teiktajam",
              "sekot"
            ]
          },
          "describes": {
            "purple": [
              "runātāju",
              "cilvēku"
            ]
          },
          "example": {
            "green": [
              "höre"
            ]
          },
          "translation": {
            "green": [
              "Es tevī klausos"
            ],
            "purple": [
              "klausos",
              "tevī"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ieklausīties"
            ],
            "yellow": [
              "ieklausīties"
            ]
          },
          "de": {
            "green": [
              "zuhören"
            ],
            "red": [
              "zuhören"
            ]
          },
          "meaning": {
            "purple": [
              "pievērst uzmanību"
            ],
            "purple": [
              "pievērst",
              "uzmanību"
            ]
          },
          "describes": {
            "purple": [
              "sarunu"
            ]
          },
          "example": {
            "green": [
              "Bitte"
            ]
          },
          "translation": {
            "green": [
              "Lūdzu, klausies manī"
            ],
            "yellow": [
              "Lūdzu"
            ],
            "red": [
              "klausies manī"
            ],
            "purple": [
              "klausies",
              "lūdzu",
              "manī"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "orange": [
            "zuhören"
          ],
          "purple": [
            "hören"
          ],
          "yellow": [
            "uzmanīgi",
            "Cilvēks",
            "zuhören",
            "mūzika",
            "hören",
            "Skaņa",
            "seko"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "Musik",
                "höre"
              ]
            },
            "lv": {
              "green": [
                "Es klausos mūziku"
              ],
              "purple": [
                "klausos",
                "mūziku"
              ]
            }
          },
          {
            "de": {
              "green": [
                "höre"
              ]
            },
            "lv": {
              "green": [
                "Es tevī klausos"
              ],
              "purple": [
                "klausos",
                "tevī"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Es klausos mūziku"
          ],
          "yellow": [
            "klausos",
            "mūziku",
            "Musik",
            "höre"
          ]
        },
        {
          "green": [
            "Es tevī klausos"
          ],
          "yellow": [
            "klausos",
            "höre",
            "tevī"
          ]
        },
        {
          "orange": [
            "zuhören"
          ],
          "yellow": [
            "zuhören",
            "bieži",
            "Dativ",
            "prasa"
          ]
        }
      ],
      "important": [
        {
          "red": [
            "nozīmei",
            "teikums",
            "pilns",
            "höre"
          ]
        },
        {
          "red": [
            "Pareizi",
            "höre"
          ]
        }
      ],
      "remember": [
        {
          "green": [
            "klausīties",
            "Dzirdēt"
          ],
          "purple": [
            "hören"
          ],
          "yellow": [
            "klausīties",
            "dzirdēt",
            "hören",
            "skaņu"
          ]
        },
        {
          "green": [
            "klausīties"
          ],
          "orange": [
            "zuhören"
          ],
          "purple": [
            "uzmanīgi klausīties"
          ],
          "yellow": [
            "klausīties",
            "uzmanīgi",
            "cilvēku",
            "zuhören"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "red": [
              "höre"
            ]
          },
          "right": {
            "green": [
              "höre"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "Dzirdēt • Klausīties uzmanīgi",
        "compare-hoeren-zuhoeren",
        "comparisonStudy",
        "Klausīties",
        "runātājā",
        "uzmanīgi",
        "cilvēkā",
        "cilvēku",
        "Dzirdēt",
        "klausās",
        "mūzikai",
        "zuhören",
        "skaņām",
        "bieži",
        "dzird",
        "hören",
        "lieto",
        "skaņu"
      ],
      "green": [
        "Lūdzu, klausies manī",
        "Es klausos mūziku",
        "Es tevī klausos",
        "Es tevi dzirdu",
        "Musik hören",
        "klausīties",
        "compare",
        "Dzirdēt"
      ],
      "yellow": [
        "Klausīties uzmanīgi",
        "hoeren",
        "Lūdzu"
      ],
      "orange": [
        "pievērst uzmanību",
        "klausīties audio",
        "sekot teiktajam",
        "uztvert skaņu",
        "zuhören"
      ],
      "purple": [
        "dzirdēt / klausīties",
        "uzmanīgi klausīties",
        "klausīties mūziku",
        "ieklausīties",
        "hören"
      ],
      "red": [
        "hören • zuhören",
        "klausies manī",
        "zuhoeren"
      ]
    }
  },
  "compare-sagen-sprechen-erzaehlen": {
    "sectionAccents": {
      "lead": {
        "blue": [
          "sprechen"
        ],
        "green": [
          "erzählen"
        ],
        "yellow": [
          "Runāt"
        ],
        "orange": [
          "sagen"
        ],
        "red": [
          "Stāstīt"
        ],
        "purple": [
          "erzählen",
          "sprechen",
          "pateikt",
          "stāstīt",
          "runāt",
          "sagen"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Teikt"
            ],
            "purple": [
              "teikt"
            ]
          },
          "de": {
            "green": [
              "sagen"
            ],
            "blue": [
              "sagen"
            ]
          },
          "description": {
            "orange": [
              "pateikt konkrētu domu"
            ],
            "blue": [
              "konkrētu",
              "Pateikt",
              "teikumu",
              "vārdu",
              "domu"
            ]
          },
          "example": {
            "green": [
              "Ko tu pateici"
            ],
            "blue": [
              "pateici",
              "gesagt"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "runāt"
            ],
            "orange": [
              "runāt"
            ]
          },
          "de": {
            "green": [
              "sprechen"
            ],
            "green": [
              "sprechen"
            ]
          },
          "description": {
            "yellow": [
              "Runāt"
            ],
            "purple": [
              "sarunāties"
            ],
            "green": [
              "sarunāties",
              "lietot",
              "valodu",
              "Runāt"
            ]
          },
          "example": {
            "green": [
              "Es runāju vāciski",
              "Deutsch",
              "spreche",
              "vāciski",
              "runāju"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "stāstīt"
            ],
            "green": [
              "stāstīt"
            ]
          },
          "de": {
            "green": [
              "erzählen"
            ],
            "yellow": [
              "erzählen"
            ]
          },
          "description": {
            "orange": [
              "stāstīt notikumu"
            ],
            "red": [
              "Stāstīt"
            ],
            "yellow": [
              "notikumu",
              "pieredzi",
              "Stāstīt",
              "stāstu"
            ]
          },
          "example": {
            "green": [
              "Viņš stāsta stāstu"
            ],
            "yellow": [
              "Geschichte",
              "erzählt",
              "stāsta",
              "stāstu"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "gesagt"
            ]
          },
          "lv": {
            "green": [
              "Ko tu pateici"
            ],
            "purple": [
              "pateici"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Deutsch",
              "spreche"
            ]
          },
          "lv": {
            "green": [
              "Es runāju vāciski"
            ],
            "purple": [
              "vāciski",
              "runāju"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Geschichte",
              "erzählt"
            ]
          },
          "lv": {
            "green": [
              "Viņš stāsta stāstu"
            ],
            "purple": [
              "stāsta",
              "stāstu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Wahrheit",
              "bitte"
            ]
          },
          "lv": {
            "purple": [
              "patiesību",
              "pasaki",
              "lūdzu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "sprechen",
              "Arbeit",
              "über"
            ]
          },
          "lv": {
            "purple": [
              "runājam",
              "darbu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "erzählt",
              "ihrer",
              "Reise"
            ]
          },
          "lv": {
            "purple": [
              "ceļojumu",
              "stāsta",
              "savu"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Teikt"
            ],
            "purple": [
              "teikt"
            ]
          },
          "de": {
            "green": [
              "sagen"
            ],
            "blue": [
              "sagen"
            ]
          },
          "meaning": {
            "purple": [
              "pateikt konkrētu domu"
            ],
            "purple": [
              "konkrētu",
              "pateikt",
              "domu"
            ]
          },
          "describes": {
            "purple": [
              "teikumus",
              "vārdus"
            ]
          },
          "example": {
            "green": [
              "gesagt"
            ]
          },
          "translation": {
            "green": [
              "Ko tu pateici"
            ],
            "purple": [
              "pateici"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "runāt"
            ],
            "orange": [
              "runāt"
            ]
          },
          "de": {
            "green": [
              "sprechen"
            ],
            "green": [
              "sprechen"
            ]
          },
          "meaning": {
            "purple": [
              "runāt"
            ],
            "orange": [
              "runāt vai sarunāties"
            ],
            "purple": [
              "sarunāties",
              "runāt"
            ]
          },
          "describes": {
            "purple": [
              "sarunu",
              "valodu"
            ]
          },
          "example": {
            "green": [
              "Deutsch",
              "spreche"
            ]
          },
          "translation": {
            "green": [
              "Es runāju vāciski"
            ],
            "purple": [
              "vāciski",
              "runāju"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "stāstīt"
            ],
            "green": [
              "stāstīt"
            ]
          },
          "de": {
            "green": [
              "erzählen"
            ],
            "yellow": [
              "erzählen"
            ]
          },
          "meaning": {
            "purple": [
              "stāstīt notikumu"
            ],
            "red": [
              "Stāstīt"
            ],
            "purple": [
              "notikumu",
              "stāstīt"
            ]
          },
          "describes": {
            "purple": [
              "pieredzi",
              "stāstu"
            ]
          },
          "example": {
            "green": [
              "Geschichte",
              "erzählt"
            ]
          },
          "translation": {
            "green": [
              "Viņš stāsta stāstu"
            ],
            "purple": [
              "stāsta",
              "stāstu"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "sarunāties"
            ],
            "yellow": [
              "sarunāties"
            ]
          },
          "de": {
            "green": [
              "reden"
            ]
          },
          "meaning": {
            "purple": [
              "runāt"
            ],
            "orange": [
              "runāt sarunvalodā"
            ],
            "purple": [
              "sarunvalodā",
              "runāt"
            ]
          },
          "describes": {
            "purple": [
              "ikdienas",
              "sarunu"
            ]
          },
          "example": {
            "green": [
              "später",
              "reden"
            ]
          },
          "translation": {
            "green": [
              "Mēs parunāsim vēlāk"
            ],
            "purple": [
              "parunāsim",
              "vēlāk"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "sprechen"
          ],
          "green": [
            "erzählen"
          ],
          "orange": [
            "sagen"
          ],
          "yellow": [
            "Konkrēts",
            "notikums",
            "sprechen",
            "saruna",
            "Stāsts",
            "teksts",
            "Valoda",
            "sagen"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "sagen"
              ],
              "blue": [
                "sagen"
              ]
            },
            "lv": {
              "green": [
                "Teikt"
              ],
              "purple": [
                "teikt"
              ]
            }
          },
          {
            "de": {
              "green": [
                "sprechen"
              ]
            },
            "lv": {
              "purple": [
                "runāt"
              ],
              "purple": [
                "runāt"
              ]
            }
          },
          {
            "de": {
              "green": [
                "erzählen"
              ],
              "blue": [
                "erzählen"
              ]
            },
            "lv": {
              "purple": [
                "stāstīt"
              ],
              "purple": [
                "stāstīt"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Ko tu pateici"
          ],
          "yellow": [
            "pateici",
            "gesagt"
          ]
        },
        {
          "green": [
            "Es runāju vāciski"
          ],
          "yellow": [
            "Deutsch",
            "spreche",
            "vāciski",
            "runāju"
          ]
        },
        {
          "green": [
            "Viņš stāsta stāstu"
          ],
          "yellow": [
            "Geschichte",
            "erzählt",
            "stāsta",
            "stāstu"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "sprechen"
          ],
          "orange": [
            "sagen"
          ],
          "red": [
            "sprechen",
            "sagen",
            "pats"
          ]
        },
        {
          "green": [
            "erzählen"
          ],
          "red": [
            "vienkārši",
            "erzählen",
            "pateikt",
            "vairāk",
            "nekā"
          ]
        }
      ],
      "remember": [
        {
          "orange": [
            "sagen"
          ],
          "yellow": [
            "pateikt",
            "sagen"
          ]
        },
        {
          "blue": [
            "sprechen"
          ],
          "yellow": [
            "sprechen",
            "Runāt"
          ]
        },
        {
          "green": [
            "erzählen"
          ],
          "red": [
            "Stāstīt"
          ],
          "yellow": [
            "erzählen",
            "stāstīt"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "red": [
              "Deutsch",
              "sage"
            ]
          },
          "right": {
            "green": [
              "Deutsch",
              "spreche"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-sagen-sprechen-erzaehlen",
        "Teikt • Runāt • Stāstīt",
        "comparisonStudy",
        "erzaehlen",
        "konkrētam",
        "lietošanu",
        "pateiktam",
        "erzählen",
        "raksturo",
        "runāšanu",
        "sprechen",
        "pateikt",
        "Stāstīt",
        "tekstam",
        "valodas",
        "lieto",
        "Runāt",
        "sagen",
        "Teikt"
      ],
      "green": [
        "Mēs parunāsim vēlāk",
        "Viņš stāsta stāstu",
        "Es runāju vāciski",
        "Ko tu pateici",
        "erzählen",
        "Teikt"
      ],
      "yellow": [
        "compare-sagen-sprechen-erzaehlen",
        "Runāt"
      ],
      "orange": [
        "pateikt konkrētu domu",
        "runāt vai sarunāties",
        "runāt sarunvalodā",
        "stāstīt notikumu",
        "sagen"
      ],
      "purple": [
        "sagen • sprechen • erzählen",
        "sarunāties"
      ],
      "red": [
        "compare",
        "Stāstīt",
        "reden"
      ]
    }
  },
  "compare-gross-hoch": {
    "sectionAccents": {
      "lead": {
        "green": [
          "Liels"
        ],
        "yellow": [
          "Augsts"
        ],
        "orange": [
          "hoch"
        ],
        "purple": [
          "augsts",
          "liels",
          "groß",
          "hoch"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Liels"
            ],
            "purple": [
              "liels"
            ]
          },
          "de": {
            "purple": [
              "groß"
            ],
            "blue": [
              "groß"
            ]
          },
          "description": {
            "green": [
              "Liels"
            ],
            "purple": [
              "garš augumā"
            ],
            "blue": [
              "cilvēkam",
              "augumā",
              "izmērā",
              "Liels",
              "garš"
            ]
          },
          "example": {
            "green": [
              "Māja ir liela"
            ],
            "purple": [
              "groß"
            ],
            "blue": [
              "liela",
              "groß",
              "Haus",
              "Māja"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "augsts"
            ],
            "orange": [
              "augsts"
            ]
          },
          "de": {
            "green": [
              "hoch"
            ],
            "green": [
              "hoch"
            ]
          },
          "description": {
            "yellow": [
              "Augsts"
            ],
            "green": [
              "vertikāli",
              "augstumā",
              "Augsts",
              "līmenī"
            ]
          },
          "example": {
            "green": [
              "Kalns ir augsts",
              "augsts",
              "Kalns",
              "Berg",
              "hoch"
            ],
            "yellow": [
              "Augsts"
            ],
            "orange": [
              "hoch"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "groß"
            ],
            "blue": [
              "groß",
              "Haus"
            ]
          },
          "lv": {
            "green": [
              "Māja ir liela"
            ],
            "purple": [
              "liela",
              "māja"
            ]
          }
        },
        {
          "de": {
            "green": [
              "hoch"
            ],
            "blue": [
              "Berg",
              "hoch"
            ]
          },
          "lv": {
            "green": [
              "Kalns ir augsts"
            ],
            "yellow": [
              "Augsts"
            ],
            "purple": [
              "augsts",
              "kalns"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "groß"
            ],
            "blue": [
              "groß"
            ]
          },
          "lv": {
            "green": [
              "Viņš ir garš augumā"
            ],
            "purple": [
              "garš augumā",
              "augumā",
              "garš"
            ]
          }
        },
        {
          "de": {
            "green": [
              "hoch"
            ],
            "blue": [
              "Miete",
              "hoch"
            ]
          },
          "lv": {
            "purple": [
              "augsta"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "groß"
            ],
            "blue": [
              "Zimmer",
              "groß"
            ]
          },
          "lv": {
            "purple": [
              "istaba",
              "liela"
            ]
          }
        },
        {
          "de": {
            "green": [
              "hoch"
            ],
            "blue": [
              "Mauer",
              "hoch"
            ]
          },
          "lv": {
            "purple": [
              "augsta",
              "siena"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Liels"
            ],
            "purple": [
              "liels"
            ]
          },
          "de": {
            "purple": [
              "groß"
            ],
            "blue": [
              "groß"
            ]
          },
          "meaning": {
            "green": [
              "Liels"
            ],
            "orange": [
              "liels izmērs"
            ],
            "purple": [
              "izmērs",
              "liels"
            ]
          },
          "describes": {
            "purple": [
              "izmēru",
              "kopējo"
            ]
          },
          "example": {
            "purple": [
              "groß"
            ],
            "blue": [
              "groß",
              "Haus"
            ]
          },
          "translation": {
            "green": [
              "Māja ir liela"
            ],
            "purple": [
              "liela",
              "māja"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "augsts"
            ],
            "orange": [
              "augsts"
            ]
          },
          "de": {
            "green": [
              "hoch"
            ],
            "green": [
              "hoch"
            ]
          },
          "meaning": {
            "green": [
              "Liels"
            ],
            "orange": [
              "liels augstumā"
            ],
            "purple": [
              "augstumā",
              "liels"
            ]
          },
          "describes": {
            "purple": [
              "vertikālu",
              "augstumu"
            ]
          },
          "example": {
            "green": [
              "hoch"
            ],
            "green": [
              "Berg",
              "hoch"
            ]
          },
          "translation": {
            "green": [
              "Kalns ir augsts"
            ],
            "yellow": [
              "Augsts"
            ],
            "purple": [
              "augsts",
              "kalns"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "garš augumā"
            ],
            "green": [
              "augumā",
              "garš"
            ]
          },
          "de": {
            "purple": [
              "groß"
            ],
            "yellow": [
              "groß"
            ]
          },
          "meaning": {
            "purple": [
              "cilvēka augums"
            ],
            "purple": [
              "cilvēka",
              "augums"
            ]
          },
          "describes": {
            "purple": [
              "personu"
            ]
          },
          "example": {
            "purple": [
              "groß"
            ],
            "yellow": [
              "groß"
            ]
          },
          "translation": {
            "green": [
              "Viņš ir garš augumā"
            ],
            "purple": [
              "garš augumā",
              "augumā",
              "garš"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "augsta cena"
            ],
            "yellow": [
              "augsta",
              "cena"
            ]
          },
          "de": {
            "green": [
              "hoch"
            ],
            "red": [
              "hoch"
            ]
          },
          "meaning": {
            "purple": [
              "augsts"
            ],
            "orange": [
              "augsts līmenis"
            ],
            "purple": [
              "līmenis",
              "augsts"
            ]
          },
          "describes": {
            "purple": [
              "skaitļus",
              "cenas"
            ]
          },
          "example": {
            "green": [
              "hoch"
            ],
            "red": [
              "Preise",
              "hoch"
            ]
          },
          "translation": {
            "green": [
              "Cenas ir augstas"
            ],
            "purple": [
              "augstas",
              "cenas"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "orange": [
            "hoch"
          ],
          "purple": [
            "groß"
          ],
          "yellow": [
            "augstumu",
            "izmēru",
            "kopumā",
            "līmeni",
            "lieto",
            "groß",
            "hoch",
            "runā"
          ]
        },
        "rightItems": [
          {
            "de": {
              "purple": [
                "groß"
              ],
              "blue": [
                "groß"
              ]
            },
            "lv": {
              "green": [
                "Liels"
              ],
              "purple": [
                "liels"
              ]
            }
          },
          {
            "de": {
              "green": [
                "hoch"
              ],
              "blue": [
                "hoch"
              ]
            },
            "lv": {
              "purple": [
                "augsts"
              ],
              "purple": [
                "augsts"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Māja ir liela"
          ],
          "purple": [
            "groß"
          ],
          "yellow": [
            "liela",
            "groß",
            "Haus",
            "Māja"
          ]
        },
        {
          "green": [
            "Kalns ir augsts"
          ],
          "yellow": [
            "Augsts",
            "Kalns",
            "Berg",
            "hoch"
          ],
          "orange": [
            "hoch"
          ]
        },
        {
          "purple": [
            "garš augumā",
            "groß"
          ],
          "yellow": [
            "cilvēks",
            "augumā",
            "garš",
            "groß"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "garš augumā",
            "groß"
          ],
          "red": [
            "Cilvēkam",
            "augumā",
            "garš",
            "groß"
          ]
        },
        {
          "orange": [
            "hoch"
          ],
          "red": [
            "līmenim",
            "bieži",
            "Cenām",
            "lieto",
            "hoch"
          ]
        }
      ],
      "remember": [
        {
          "green": [
            "Liels"
          ],
          "purple": [
            "groß"
          ],
          "yellow": [
            "liels",
            "groß"
          ]
        },
        {
          "yellow": [
            "Augsts",
            "hoch"
          ],
          "orange": [
            "hoch"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "purple": [
              "groß"
            ],
            "red": [
              "augstums",
              "kalna",
              "Berg",
              "doma",
              "groß"
            ]
          },
          "right": {
            "orange": [
              "hoch"
            ],
            "green": [
              "Berg",
              "hoch"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-gross-hoch",
        "comparisonStudy",
        "Liels • Augsts",
        "vertikālu",
        "augstumu",
        "cilvēkam",
        "raksturo",
        "virzienu",
        "cilvēka",
        "Augsts",
        "augumu",
        "izmērā",
        "izmēru",
        "kopumā",
        "līmeni",
        "Liels",
        "groß",
        "hoch"
      ],
      "green": [
        "Viņš ir garš augumā",
        "Cenas ir augstas",
        "Kalns ir augsts",
        "Māja ir liela",
        "compare",
        "Liels"
      ],
      "yellow": [
        "Augsts",
        "gross"
      ],
      "orange": [
        "augsts līmenis",
        "cilvēka augums",
        "liels augstumā",
        "liels izmērs",
        "hoch"
      ],
      "purple": [
        "augsta cena",
        "garš augumā",
        "groß"
      ],
      "red": [
        "groß • hoch"
      ]
    }
  },
  "compare-klein-niedrig": {
    "sectionAccents": {
      "lead": {
        "green": [
          "Mazs"
        ],
        "yellow": [
          "Zems"
        ],
        "orange": [
          "niedrig"
        ],
        "purple": [
          "niedrig",
          "klein",
          "mazs",
          "zems"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Mazs"
            ],
            "purple": [
              "mazs"
            ]
          },
          "de": {
            "purple": [
              "klein"
            ],
            "blue": [
              "klein"
            ]
          },
          "description": {
            "green": [
              "Mazs"
            ],
            "blue": [
              "apjomā",
              "izmērā",
              "Mazs"
            ]
          },
          "example": {
            "green": [
              "Istaba ir maza"
            ],
            "purple": [
              "klein"
            ],
            "blue": [
              "Istaba",
              "Zimmer",
              "klein",
              "maza"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "zems"
            ],
            "orange": [
              "zems"
            ]
          },
          "de": {
            "green": [
              "niedrig"
            ],
            "green": [
              "niedrig"
            ]
          },
          "description": {
            "yellow": [
              "Zems"
            ],
            "green": [
              "augstumā",
              "skaitlī",
              "līmenī",
              "cenā",
              "Zems"
            ]
          },
          "example": {
            "green": [
              "niedrig"
            ],
            "red": [
              "Cenas ir zemas"
            ],
            "green": [
              "niedrig",
              "Preise",
              "Cenas",
              "zemas"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "klein"
            ],
            "blue": [
              "Zimmer",
              "klein"
            ]
          },
          "lv": {
            "green": [
              "Istaba ir maza"
            ],
            "purple": [
              "istaba",
              "maza"
            ]
          }
        },
        {
          "de": {
            "green": [
              "niedrig"
            ],
            "blue": [
              "niedrig",
              "Preise"
            ]
          },
          "lv": {
            "purple": [
              "cenas ir zemas"
            ],
            "purple": [
              "cenas",
              "zemas"
            ]
          }
        },
        {
          "de": {
            "green": [
              "niedrig"
            ],
            "blue": [
              "niedrig",
              "Tisch"
            ]
          },
          "lv": {
            "green": [
              "Galds ir zems"
            ],
            "yellow": [
              "Zems"
            ],
            "purple": [
              "galds",
              "zems"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "klein"
            ],
            "blue": [
              "klein",
              "Kind"
            ]
          },
          "lv": {
            "green": [
              "Mazs"
            ],
            "purple": [
              "bērns",
              "mazs"
            ]
          }
        },
        {
          "de": {
            "green": [
              "niedrig"
            ],
            "blue": [
              "Temperatur",
              "niedrig"
            ]
          },
          "lv": {
            "purple": [
              "temperatūra",
              "zema"
            ]
          }
        },
        {
          "de": {
            "green": [
              "kleine",
              "Tasche"
            ]
          },
          "lv": {
            "purple": [
              "maza",
              "soma"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Mazs"
            ],
            "purple": [
              "mazs"
            ]
          },
          "de": {
            "purple": [
              "klein"
            ],
            "blue": [
              "klein"
            ]
          },
          "meaning": {
            "green": [
              "Mazs"
            ],
            "orange": [
              "mazs izmērs"
            ],
            "purple": [
              "izmērs",
              "mazs"
            ]
          },
          "describes": {
            "purple": [
              "personas",
              "izmēru",
              "lietas"
            ]
          },
          "example": {
            "purple": [
              "klein"
            ],
            "blue": [
              "Zimmer",
              "klein"
            ]
          },
          "translation": {
            "green": [
              "Istaba ir maza"
            ],
            "purple": [
              "istaba",
              "maza"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "zems"
            ],
            "orange": [
              "zems"
            ]
          },
          "de": {
            "green": [
              "niedrig"
            ],
            "green": [
              "niedrig"
            ]
          },
          "meaning": {
            "green": [
              "zems līmenis"
            ],
            "yellow": [
              "augstums",
              "Zems"
            ],
            "orange": [
              "zems līmenis/augstums"
            ],
            "purple": [
              "augstums",
              "līmenis",
              "zems"
            ]
          },
          "describes": {
            "purple": [
              "temperatūru",
              "augstumu",
              "cenas"
            ]
          },
          "example": {
            "green": [
              "niedrig"
            ],
            "green": [
              "niedrig",
              "Preise"
            ]
          },
          "translation": {
            "purple": [
              "cenas ir zemas"
            ],
            "purple": [
              "cenas",
              "zemas"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "bērns",
              "Mazs"
            ],
            "purple": [
              "mazs bērns"
            ]
          },
          "de": {
            "purple": [
              "klein"
            ],
            "yellow": [
              "klein"
            ]
          },
          "meaning": {
            "green": [
              "Mazs"
            ],
            "yellow": [
              "jauns"
            ],
            "orange": [
              "mazs/jauns"
            ],
            "purple": [
              "jauns",
              "mazs"
            ]
          },
          "describes": {
            "purple": [
              "bērnu"
            ]
          },
          "example": {
            "purple": [
              "klein"
            ],
            "yellow": [
              "klein",
              "Kind"
            ]
          },
          "translation": {
            "green": [
              "Mazs"
            ],
            "red": [
              "Bērns ir mazs"
            ],
            "purple": [
              "bērns",
              "mazs"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "galds",
              "zems"
            ],
            "purple": [
              "zems galds"
            ]
          },
          "de": {
            "green": [
              "niedrig"
            ],
            "red": [
              "niedrig"
            ]
          },
          "meaning": {
            "purple": [
              "nav augsts"
            ],
            "purple": [
              "augsts"
            ]
          },
          "describes": {
            "purple": [
              "augstumu"
            ]
          },
          "example": {
            "green": [
              "niedrig"
            ],
            "red": [
              "niedrig",
              "Tisch"
            ]
          },
          "translation": {
            "green": [
              "Galds ir zems"
            ],
            "yellow": [
              "Zems"
            ],
            "purple": [
              "galds",
              "zems"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "orange": [
            "niedrig"
          ],
          "purple": [
            "klein"
          ],
          "yellow": [
            "augstumam",
            "Izmēram",
            "Līmenim",
            "niedrig",
            "cenai",
            "klein",
            "lieto"
          ]
        },
        "rightItems": [
          {
            "de": {
              "purple": [
                "klein"
              ],
              "blue": [
                "klein"
              ]
            },
            "lv": {
              "green": [
                "Mazs"
              ],
              "purple": [
                "mazs"
              ]
            }
          },
          {
            "de": {
              "green": [
                "niedrig"
              ],
              "blue": [
                "niedrig"
              ]
            },
            "lv": {
              "purple": [
                "zems"
              ],
              "purple": [
                "zems"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Istaba ir maza"
          ],
          "purple": [
            "klein"
          ],
          "yellow": [
            "Istaba",
            "Zimmer",
            "klein",
            "maza"
          ]
        },
        {
          "orange": [
            "niedrig"
          ],
          "red": [
            "Cenas ir zemas"
          ],
          "yellow": [
            "niedrig",
            "Preise",
            "Cenas",
            "zemas"
          ]
        },
        {
          "orange": [
            "niedrig"
          ],
          "purple": [
            "klein"
          ],
          "yellow": [
            "niedrig",
            "klein",
            "pats"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "Mazs"
          ],
          "purple": [
            "klein"
          ],
          "red": [
            "izmērā",
            "klein",
            "mazs"
          ]
        },
        {
          "yellow": [
            "Zems"
          ],
          "orange": [
            "niedrig"
          ],
          "red": [
            "augstumā",
            "niedrig",
            "līmenī",
            "zems"
          ]
        }
      ],
      "remember": [
        {
          "green": [
            "Mazs"
          ],
          "purple": [
            "klein"
          ],
          "yellow": [
            "klein",
            "mazs"
          ]
        },
        {
          "yellow": [
            "niedrig",
            "Zems"
          ],
          "orange": [
            "niedrig"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "purple": [
              "klein"
            ],
            "red": [
              "Preise",
              "klein"
            ]
          },
          "right": {
            "orange": [
              "niedrig"
            ],
            "green": [
              "niedrig",
              "Preise"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-klein-niedrig",
        "comparisonStudy",
        "Mazs • Zems",
        "augstumu",
        "raksturo",
        "niedrig",
        "skaitli",
        "apjomā",
        "izmērā",
        "izmēru",
        "līmeni",
        "Zimmer",
        "klein",
        "cenu",
        "Mazs",
        "mazu",
        "Zems",
        "zemu"
      ],
      "green": [
        "Istaba ir maza",
        "Galds ir zems",
        "zems līmenis",
        "compare",
        "Mazs"
      ],
      "yellow": [
        "augstums",
        "jauns",
        "Zems"
      ],
      "orange": [
        "zems līmenis/augstums",
        "mazs izmērs",
        "mazs/jauns",
        "nav augsts",
        "niedrig"
      ],
      "purple": [
        "mazs bērns",
        "zems galds",
        "klein"
      ],
      "red": [
        "klein • niedrig",
        "Cenas ir zemas",
        "Bērns ir mazs"
      ]
    }
  },
  "compare-ruhig-leise": {
    "sectionAccents": {
      "lead": {
        "green": [
          "Mierīgs"
        ],
        "yellow": [
          "Kluss"
        ],
        "orange": [
          "leise"
        ],
        "purple": [
          "mierīgs",
          "skaņas",
          "kluss",
          "leise",
          "ruhig",
          "ziņā"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Mierīgs"
            ],
            "purple": [
              "mierīgs"
            ]
          },
          "de": {
            "purple": [
              "ruhig"
            ],
            "blue": [
              "ruhig"
            ]
          },
          "description": {
            "green": [
              "Mierīgs"
            ],
            "blue": [
              "situācijas",
              "noskaņas",
              "rakstura",
              "Mierīgs"
            ]
          },
          "example": {
            "green": [
              "Viņš ir mierīgs",
              "Mierīgs"
            ],
            "purple": [
              "ruhig"
            ],
            "blue": [
              "mierīgs",
              "ruhig"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "kluss"
            ],
            "orange": [
              "kluss"
            ]
          },
          "de": {
            "green": [
              "leise"
            ],
            "green": [
              "leise"
            ]
          },
          "description": {
            "yellow": [
              "Kluss"
            ],
            "orange": [
              "ar mazu skaļumu"
            ],
            "green": [
              "skaļumu",
              "Kluss",
              "mazu"
            ]
          },
          "example": {
            "green": [
              "Kluss"
            ],
            "orange": [
              "leise"
            ],
            "green": [
              "Bitte",
              "kluss",
              "leise",
              "Lūdzu"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "ruhig"
            ],
            "blue": [
              "ruhig"
            ]
          },
          "lv": {
            "green": [
              "Viņš ir mierīgs",
              "Mierīgs"
            ],
            "purple": [
              "mierīgs"
            ]
          }
        },
        {
          "de": {
            "green": [
              "leise"
            ],
            "blue": [
              "Bitte",
              "leise"
            ]
          },
          "lv": {
            "purple": [
              "kluss"
            ],
            "purple": [
              "kluss",
              "lūdzu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "leise"
            ],
            "blue": [
              "leise",
              "Musik"
            ]
          },
          "lv": {
            "green": [
              "Mūzika ir klusa"
            ],
            "purple": [
              "mūzika",
              "klusa"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "ruhig"
            ],
            "blue": [
              "ruhig",
              "Büro"
            ]
          },
          "lv": {
            "purple": [
              "mierīgi",
              "birojā",
              "šodien"
            ]
          }
        },
        {
          "de": {
            "green": [
              "leise"
            ],
            "blue": [
              "Sprich",
              "bitte",
              "leise"
            ]
          },
          "lv": {
            "green": [
              "Runā klusi"
            ],
            "purple": [
              "klusi",
              "lūdzu",
              "runā"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "ruhig"
            ],
            "blue": [
              "bleibt",
              "ruhig"
            ]
          },
          "lv": {
            "purple": [
              "mierīga",
              "paliek"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Mierīgs"
            ],
            "purple": [
              "mierīgs"
            ]
          },
          "de": {
            "purple": [
              "ruhig"
            ],
            "blue": [
              "ruhig"
            ]
          },
          "meaning": {
            "purple": [
              "bez satraukuma"
            ],
            "purple": [
              "satraukuma"
            ]
          },
          "describes": {
            "purple": [
              "situāciju",
              "cilvēku",
              "vietu"
            ]
          },
          "example": {
            "purple": [
              "ruhig"
            ],
            "blue": [
              "ruhig"
            ]
          },
          "translation": {
            "green": [
              "Viņš ir mierīgs",
              "Mierīgs"
            ],
            "purple": [
              "mierīgs"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "kluss"
            ],
            "orange": [
              "kluss"
            ]
          },
          "de": {
            "green": [
              "leise"
            ],
            "green": [
              "leise"
            ]
          },
          "meaning": {
            "purple": [
              "mazs skaļums"
            ],
            "purple": [
              "skaļums",
              "mazs"
            ]
          },
          "describes": {
            "purple": [
              "mūziku",
              "balsi",
              "skaņu"
            ]
          },
          "example": {
            "green": [
              "leise"
            ],
            "green": [
              "leise",
              "Musik"
            ]
          },
          "translation": {
            "green": [
              "Mūzika ir klusa"
            ],
            "purple": [
              "mūzika",
              "klusa"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "mierīga vieta"
            ],
            "green": [
              "mierīga",
              "vieta"
            ]
          },
          "de": {
            "green": [
              "ruhiger Ort",
              "ruhiger"
            ]
          },
          "meaning": {
            "purple": [
              "nav trokšņa vai stresa"
            ],
            "purple": [
              "trokšņa",
              "stresa"
            ]
          },
          "describes": {
            "purple": [
              "vietu"
            ]
          },
          "example": {
            "green": [
              "ruhiger Ort",
              "ruhiger"
            ]
          },
          "translation": {
            "green": [
              "Tā ir mierīga vieta"
            ],
            "purple": [
              "mierīga vieta",
              "mierīga",
              "vieta"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "runāt klusi"
            ],
            "yellow": [
              "klusi",
              "runāt"
            ]
          },
          "de": {
            "green": [
              "leise"
            ],
            "red": [
              "leise sprechen",
              "sprechen",
              "leise"
            ]
          },
          "meaning": {
            "purple": [
              "ar mazu skaļumu"
            ],
            "purple": [
              "skaļumu",
              "mazu"
            ]
          },
          "describes": {
            "purple": [
              "balsi"
            ]
          },
          "example": {
            "green": [
              "leise"
            ],
            "red": [
              "Sprich",
              "leise"
            ]
          },
          "translation": {
            "green": [
              "Runā klusi"
            ],
            "purple": [
              "klusi",
              "runā"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "orange": [
            "leise"
          ],
          "purple": [
            "ruhig"
          ],
          "yellow": [
            "Noskaņai",
            "Skaļumam",
            "balsij",
            "mieram",
            "leise",
            "lieto",
            "ruhig"
          ]
        },
        "rightItems": [
          {
            "de": {
              "purple": [
                "ruhig"
              ],
              "blue": [
                "ruhig"
              ]
            },
            "lv": {
              "green": [
                "Mierīgs"
              ],
              "purple": [
                "mierīgs"
              ]
            }
          },
          {
            "de": {
              "green": [
                "leise"
              ],
              "blue": [
                "leise"
              ]
            },
            "lv": {
              "purple": [
                "kluss"
              ],
              "purple": [
                "kluss"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Viņš ir mierīgs",
            "Mierīgs"
          ],
          "purple": [
            "ruhig"
          ],
          "yellow": [
            "mierīgs",
            "ruhig"
          ]
        },
        {
          "yellow": [
            "Bitte",
            "Kluss",
            "leise",
            "Lūdzu"
          ],
          "orange": [
            "leise"
          ]
        },
        {
          "orange": [
            "leise"
          ],
          "purple": [
            "ruhig"
          ],
          "yellow": [
            "leise",
            "ruhig"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "Mierīgs"
          ],
          "purple": [
            "ruhig"
          ],
          "red": [
            "mierīgs",
            "ruhig"
          ]
        },
        {
          "yellow": [
            "Kluss"
          ],
          "orange": [
            "leise"
          ],
          "red": [
            "skaņas",
            "kluss",
            "leise",
            "ziņā"
          ]
        }
      ],
      "remember": [
        {
          "purple": [
            "ruhig"
          ],
          "yellow": [
            "miers",
            "ruhig"
          ]
        },
        {
          "orange": [
            "leise"
          ],
          "yellow": [
            "skaļums",
            "leise"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "orange": [
              "mazs skaļums"
            ],
            "purple": [
              "ruhig"
            ],
            "red": [
              "skaļums",
              "Musik",
              "ruhig",
              "doma",
              "mazs"
            ]
          },
          "right": {
            "orange": [
              "leise"
            ],
            "green": [
              "leise",
              "Musik"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-ruhig-leise",
        "comparisonStudy",
        "Mierīgs • Kluss",
        "situāciju",
        "raksturo",
        "cilvēku",
        "Mierīgs",
        "skaļumu",
        "skaņas",
        "balsi",
        "Kluss",
        "klusu",
        "leise",
        "mieru",
        "ruhig",
        "vietu",
        "mazu",
        "ziņā"
      ],
      "green": [
        "Tā ir mierīga vieta",
        "Mūzika ir klusa",
        "Viņš ir mierīgs",
        "Runā klusi",
        "compare",
        "Mierīgs"
      ],
      "yellow": [
        "ruhiger Ort",
        "Kluss"
      ],
      "orange": [
        "nav trokšņa vai stresa",
        "ar mazu skaļumu",
        "bez satraukuma",
        "mazs skaļums",
        "leise"
      ],
      "purple": [
        "mierīga vieta",
        "runāt klusi",
        "ruhig"
      ],
      "red": [
        "leise sprechen",
        "ruhig • leise"
      ]
    }
  },
  "compare-deshalb-deswegen-darum": {
    "sectionAccents": {
      "lead": {
        "green": [
          "Tāpēc"
        ],
        "purple": [
          "darbības",
          "bieži",
          "tāpēc",
          "vārds",
          "tiem",
          "trīs",
          "Visi"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Tāpēc"
            ],
            "purple": [
              "tāpēc"
            ]
          },
          "de": {
            "purple": [
              "deshalb"
            ],
            "blue": [
              "deshalb"
            ]
          },
          "description": {
            "blue": [
              "Neitrāls",
              "parādīt",
              "biežs",
              "sekas",
              "veids"
            ]
          },
          "example": {
            "green": [
              "Tāpēc"
            ],
            "purple": [
              "deshalb"
            ],
            "blue": [
              "deshalb",
              "bleibe",
              "Hause",
              "krank",
              "slims",
              "esmu"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "tādēļ"
            ],
            "orange": [
              "tādēļ"
            ]
          },
          "de": {
            "green": [
              "deswegen"
            ],
            "green": [
              "deswegen"
            ]
          },
          "description": {
            "purple": [
              "deshalb"
            ],
            "green": [
              "ikdienas",
              "deshalb",
              "līdzīgs",
              "valodā",
              "bieži"
            ]
          },
          "example": {
            "green": [
              "Tādēļ"
            ],
            "orange": [
              "deswegen"
            ],
            "green": [
              "deswegen",
              "bleibe",
              "Hause",
              "krank",
              "slims",
              "esmu"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Tāpēc"
            ]
          },
          "de": {
            "green": [
              "darum"
            ],
            "yellow": [
              "darum"
            ]
          },
          "description": {
            "green": [
              "Tāpēc"
            ],
            "yellow": [
              "Sarunvalodā",
              "biežs",
              "Tādēļ",
              "tāpēc"
            ]
          },
          "example": {
            "green": [
              "darum"
            ],
            "green": [
              "Tāpēc"
            ],
            "yellow": [
              "bleibe",
              "darum",
              "Hause",
              "krank",
              "slims",
              "esmu"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "deshalb"
            ],
            "blue": [
              "deshalb",
              "bleibe",
              "Hause",
              "krank"
            ]
          },
          "lv": {
            "green": [
              "Tāpēc"
            ],
            "purple": [
              "palieku",
              "mājās",
              "slims",
              "tāpēc",
              "esmu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "deswegen"
            ],
            "blue": [
              "deswegen",
              "bleibe",
              "Hause",
              "krank"
            ]
          },
          "lv": {
            "purple": [
              "tādēļ"
            ],
            "purple": [
              "palieku",
              "mājās",
              "slims",
              "tādēļ",
              "esmu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "bleibe",
              "darum",
              "Hause",
              "krank"
            ]
          },
          "lv": {
            "green": [
              "Tāpēc"
            ],
            "purple": [
              "palieku",
              "mājās",
              "slims",
              "tāpēc",
              "esmu"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "deshalb"
            ],
            "blue": [
              "deshalb",
              "regnet",
              "nehme"
            ]
          },
          "lv": {
            "green": [
              "Tāpēc"
            ],
            "purple": [
              "autobusu",
              "braucu",
              "tāpēc",
              "līst"
            ]
          }
        },
        {
          "de": {
            "green": [
              "deswegen"
            ],
            "blue": [
              "deswegen",
              "stehe",
              "voll"
            ]
          },
          "lv": {
            "purple": [
              "tādēļ"
            ],
            "purple": [
              "vilciens",
              "pilns",
              "stāvu",
              "tādēļ"
            ]
          }
        },
        {
          "de": {
            "green": [
              "später",
              "darum",
              "komme",
              "Zeit"
            ]
          },
          "lv": {
            "green": [
              "Tāpēc"
            ],
            "purple": [
              "atnākšu",
              "laika",
              "tāpēc",
              "vēlāk"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Tāpēc"
            ],
            "purple": [
              "tāpēc"
            ]
          },
          "de": {
            "purple": [
              "deshalb"
            ],
            "blue": [
              "deshalb"
            ]
          },
          "meaning": {
            "purple": [
              "sekas no iemesla"
            ],
            "purple": [
              "iemesla",
              "sekas"
            ]
          },
          "describes": {
            "purple": [
              "neitrālu",
              "stilu"
            ]
          },
          "example": {
            "purple": [
              "deshalb"
            ],
            "blue": [
              "Deshalb",
              "bleibe"
            ]
          },
          "translation": {
            "green": [
              "Tāpēc es palieku šeit",
              "Tāpēc"
            ],
            "yellow": [
              "Es palieku"
            ],
            "purple": [
              "palieku",
              "tāpēc",
              "šeit"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "tādēļ"
            ],
            "orange": [
              "tādēļ"
            ]
          },
          "de": {
            "green": [
              "deswegen"
            ],
            "green": [
              "deswegen"
            ]
          },
          "meaning": {
            "purple": [
              "sekas no iemesla"
            ],
            "purple": [
              "iemesla",
              "sekas"
            ]
          },
          "describes": {
            "purple": [
              "ikdienas",
              "valodu"
            ]
          },
          "example": {
            "green": [
              "deswegen"
            ],
            "green": [
              "Deswegen",
              "später",
              "komme"
            ]
          },
          "translation": {
            "green": [
              "Tādēļ es atnākšu vēlāk"
            ],
            "yellow": [
              "Tādēļ"
            ],
            "purple": [
              "atnākšu",
              "tādēļ",
              "vēlāk"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Tāpēc"
            ]
          },
          "de": {
            "green": [
              "darum"
            ],
            "yellow": [
              "darum"
            ]
          },
          "meaning": {
            "purple": [
              "sekas no iemesla"
            ],
            "purple": [
              "iemesla",
              "sekas"
            ]
          },
          "describes": {
            "purple": [
              "sarunvalodu"
            ]
          },
          "example": {
            "green": [
              "darum"
            ],
            "yellow": [
              "Darum",
              "nein",
              "sage"
            ]
          },
          "translation": {
            "green": [
              "Tāpēc es saku nē",
              "Tāpēc"
            ],
            "purple": [
              "tāpēc",
              "saku"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "jo"
            ]
          },
          "de": {
            "green": [
              "weil"
            ]
          },
          "meaning": {
            "purple": [
              "ievada iemeslu"
            ],
            "purple": [
              "iemeslu",
              "ievada"
            ]
          },
          "describes": {
            "purple": [
              "palīgteikumu"
            ]
          },
          "example": {
            "green": [
              "bleibe",
              "regnet",
              "weil"
            ]
          },
          "translation": {
            "green": [
              "Es palieku, jo līst"
            ],
            "yellow": [
              "Es palieku"
            ],
            "purple": [
              "palieku",
              "līst",
              "jo"
            ],
            "red": [
              "jo līst"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "darum"
          ],
          "orange": [
            "deswegen"
          ],
          "purple": [
            "deshalb"
          ],
          "yellow": [
            "Atceries",
            "deswegen",
            "Vispirms",
            "deshalb",
            "iemesls",
            "darum",
            "sekas",
            "vārdu"
          ]
        },
        "rightItems": [
          {
            "de": {
              "purple": [
                "deshalb"
              ],
              "blue": [
                "deshalb",
                "bleibe"
              ]
            },
            "lv": {
              "green": [
                "Tāpēc"
              ],
              "yellow": [
                "Es palieku"
              ],
              "purple": [
                "palieku",
                "tāpēc"
              ]
            }
          },
          {
            "de": {
              "green": [
                "weil"
              ],
              "blue": [
                "krank",
                "weil"
              ]
            },
            "lv": {
              "purple": [
                "slims",
                "esmu",
                "jo"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "purple": [
            "deshalb"
          ],
          "yellow": [
            "deshalb",
            "bleibe",
            "Hause",
            "krank"
          ]
        },
        {
          "blue": [
            "darum"
          ],
          "orange": [
            "deswegen"
          ],
          "purple": [
            "deshalb"
          ],
          "yellow": [
            "darbības",
            "deswegen",
            "deshalb",
            "darum",
            "vārds",
            "vietā"
          ]
        },
        {
          "red": [
            "weil"
          ],
          "yellow": [
            "darbojas",
            "citādi",
            "regnet",
            "weil"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "darum"
          ],
          "orange": [
            "deswegen"
          ],
          "purple": [
            "deshalb"
          ],
          "red": [
            "aizvietojami",
            "savstarpēji",
            "deswegen",
            "deshalb",
            "bieži",
            "darum"
          ]
        },
        {
          "red": [
            "darbības",
            "vārds",
            "vietā",
            "tiem"
          ]
        },
        {
          "red": [
            "kārtība",
            "vārdu",
            "pati",
            "tāda",
            "weil"
          ]
        }
      ],
      "remember": [
        {
          "blue": [
            "darum"
          ],
          "green": [
            "Tāpēc"
          ],
          "yellow": [
            "deswegen",
            "deshalb",
            "darum",
            "Tādēļ",
            "tāpēc"
          ],
          "orange": [
            "deswegen"
          ],
          "purple": [
            "deshalb"
          ]
        },
        {
          "yellow": [
            "Darbības",
            "vārds",
            "vietā",
            "tiem"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "purple": [
              "deshalb"
            ],
            "red": [
              "Deshalb",
              "bleibe",
              "Hause"
            ]
          },
          "right": {
            "purple": [
              "deshalb"
            ],
            "green": [
              "Deshalb",
              "bleibe",
              "Hause"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-deshalb-deswegen-darum",
        "comparisonStudy",
        "Tāpēc • Tādēļ",
        "darbības",
        "deswegen",
        "deshalb",
        "iemeslu",
        "savieno",
        "bieži",
        "darum",
        "sekām",
        "Tādēļ",
        "Tāpēc",
        "vārds",
        "vietā",
        "tiem",
        "trīs",
        "Visi"
      ],
      "green": [
        "compare-deshalb-deswegen-darum",
        "Tādēļ es atnākšu vēlāk",
        "Tāpēc es palieku šeit",
        "Es palieku, jo līst",
        "Tāpēc es saku nē",
        "Tāpēc"
      ],
      "yellow": [
        "Es palieku",
        "compare",
        "Tādēļ"
      ],
      "orange": [
        "sekas no iemesla",
        "ievada iemeslu",
        "deswegen"
      ],
      "purple": [
        "deshalb",
        "jo"
      ],
      "red": [
        "deshalb • deswegen • darum",
        "jo līst",
        "weil"
      ]
    }
  },
  "compare-schon-noch-erst-nur": {
    "sectionAccents": {
      "lead": {
        "purple": [
          "sinonīmi",
          "līdzīgi",
          "tulkoti",
          "bieži",
          "četri",
          "katrs",
          "vārdi",
          "tiek"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "purple": [
              "jau"
            ]
          },
          "de": {
            "purple": [
              "schon"
            ]
          },
          "description": {
            "blue": [
              "noticis",
              "spēkā",
              "Kaut",
              "Jau"
            ]
          },
          "example": {
            "green": [
              "Hause",
              "mājās",
              "esmu",
              "Jau"
            ],
            "orange": [
              "Es jau esmu mājās"
            ],
            "purple": [
              "schon"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Vēl"
            ]
          },
          "de": {
            "green": [
              "noch"
            ]
          },
          "description": {
            "green": [
              "beidzies",
              "joprojām",
              "turpinās",
              "Kaut",
              "Vēl"
            ],
            "orange": [
              "kaut kas joprojām turpinās"
            ]
          },
          "example": {
            "green": [
              "Hause",
              "mājās",
              "esmu",
              "Vēl"
            ],
            "orange": [
              "noch"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "ne agrāk kā",
              "agrāk",
              "tikai",
              "Vēl"
            ],
            "yellow": [
              "Vēl tikai"
            ],
            "purple": [
              "vēl tikai / ne agrāk kā"
            ],
            "red": [
              "Tikai"
            ]
          },
          "de": {
            "green": [
              "erst"
            ],
            "yellow": [
              "erst"
            ]
          },
          "description": {
            "yellow": [
              "stadiju",
              "agrīnu",
              "Norāda",
              "secību",
              "laiku",
              "kaut"
            ]
          },
          "example": {
            "green": [
              "erst"
            ],
            "green": [
              "Vēl"
            ],
            "yellow": [
              "Vēl tikai",
              "astoņi",
              "tikai",
              "acht",
              "erst"
            ],
            "purple": [
              "ir vēl tikai astoņi"
            ],
            "red": [
              "Tikai"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "vienīgi"
            ],
            "purple": [
              "tikai / vienīgi"
            ],
            "red": [
              "Tikai"
            ],
            "yellow": [
              "vienīgi",
              "tikai"
            ]
          },
          "de": {},
          "description": {
            "green": [
              "daudzumu",
              "Ierobežo",
              "iespējas",
              "cilvēku",
              "izvēli",
              "skaitu"
            ]
          },
          "example": {
            "green": [
              "desmit",
              "Tikai",
              "eiro",
              "Euro",
              "zehn"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "schon"
            ],
            "blue": [
              "Hause"
            ]
          },
          "lv": {
            "purple": [
              "jau"
            ],
            "orange": [
              "Es jau esmu mājās"
            ],
            "purple": [
              "mājās",
              "esmu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "noch"
            ],
            "blue": [
              "Hause"
            ]
          },
          "lv": {
            "green": [
              "Vēl"
            ],
            "purple": [
              "mājās",
              "esmu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "noch"
            ]
          },
          "lv": {
            "green": [
              "Vai tu vēl esi šeit",
              "Vēl"
            ],
            "purple": [
              "šeit"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Stunde",
              "erst",
              "seit"
            ]
          },
          "lv": {
            "green": [
              "Vēl"
            ],
            "yellow": [
              "Vēl tikai"
            ],
            "red": [
              "Tikai"
            ],
            "purple": [
              "stundu",
              "tikai",
              "vienu",
              "esmu",
              "šeit"
            ]
          }
        },
        {
          "de": {
            "green": [
              "acht",
              "erst"
            ]
          },
          "lv": {
            "green": [
              "Vēl"
            ],
            "yellow": [
              "Vēl tikai"
            ],
            "purple": [
              "ir vēl tikai astoņi",
              "astoņi",
              "tikai"
            ],
            "red": [
              "Tikai"
            ]
          }
        },
        {
          "de": {
            "green": [
              "kommt",
              "erst"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ],
            "purple": [
              "atbrauks",
              "tikai"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Euro",
              "zehn"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ],
            "purple": [
              "desmit",
              "tikai",
              "eiro"
            ]
          }
        },
        {
          "de": {
            "green": [
              "helfen",
              "kannst"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ],
            "purple": [
              "palīdzēt",
              "tikai",
              "vari"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Kaffee",
              "möchte"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ],
            "purple": [
              "kafiju",
              "gribu",
              "tikai"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "purple": [
              "jau"
            ]
          },
          "de": {
            "purple": [
              "schon"
            ]
          },
          "meaning": {
            "purple": [
              "jau"
            ],
            "purple": [
              "noticis",
              "spēkā",
              "kaut"
            ]
          },
          "describes": {
            "purple": [
              "notikušu",
              "stāvokli",
              "esošu",
              "faktu"
            ]
          },
          "example": {
            "purple": [
              "schon"
            ],
            "blue": [
              "Hause"
            ]
          },
          "translation": {
            "purple": [
              "jau"
            ],
            "orange": [
              "Es jau esmu mājās"
            ],
            "purple": [
              "mājās",
              "esmu"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Vēl"
            ]
          },
          "de": {
            "green": [
              "noch"
            ]
          },
          "meaning": {
            "purple": [
              "kaut kas joprojām turpinās"
            ],
            "purple": [
              "joprojām",
              "turpinās",
              "kaut"
            ]
          },
          "describes": {
            "purple": [
              "turpinājumu",
              "nepabeigtu",
              "stāvokli"
            ]
          },
          "example": {
            "green": [
              "noch"
            ]
          },
          "translation": {
            "green": [
              "Vai tu vēl esi šeit",
              "Vēl"
            ],
            "purple": [
              "šeit"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "ne agrāk kā",
              "agrāk",
              "tikai",
              "Vēl"
            ],
            "yellow": [
              "Vēl tikai"
            ],
            "purple": [
              "vēl tikai / ne agrāk kā"
            ],
            "red": [
              "Tikai"
            ]
          },
          "de": {
            "green": [
              "erst"
            ],
            "yellow": [
              "erst"
            ]
          },
          "meaning": {
            "purple": [
              "secība vai agrīna stadija"
            ],
            "yellow": [
              "laiks, secība vai agrīna stadija"
            ],
            "red": [
              "laiks"
            ],
            "purple": [
              "stadija",
              "agrīna",
              "secība",
              "laiks"
            ]
          },
          "describes": {
            "purple": [
              "notiek",
              "kaut",
              "tālu"
            ]
          },
          "example": {
            "green": [
              "erst"
            ],
            "yellow": [
              "acht",
              "erst"
            ]
          },
          "translation": {
            "green": [
              "Vēl"
            ],
            "yellow": [
              "Vēl tikai"
            ],
            "purple": [
              "ir vēl tikai astoņi",
              "astoņi",
              "tikai"
            ],
            "red": [
              "Tikai"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "vienīgi"
            ],
            "purple": [
              "tikai / vienīgi"
            ],
            "red": [
              "Tikai"
            ],
            "yellow": [
              "vienīgi",
              "tikai"
            ]
          },
          "de": {},
          "meaning": {
            "purple": [
              "ierobežots daudzums vai izvēle"
            ],
            "purple": [
              "ierobežots",
              "daudzums",
              "izvēle"
            ]
          },
          "describes": {
            "purple": [
              "vienīgais",
              "daudz",
              "tieši",
              "kurš"
            ]
          },
          "example": {
            "green": [
              "acht",
              "Euro"
            ]
          },
          "translation": {
            "purple": [
              "man ir tikai astoņi eiro",
              "tikai"
            ],
            "purple": [
              "astoņi",
              "tikai",
              "eiro"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "erst"
          ],
          "yellow": [
            "notiek",
            "secību",
            "laiku",
            "lieto",
            "erst",
            "kaut",
            "runa"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "acht",
                "erst"
              ]
            },
            "lv": {
              "green": [
                "Vēl"
              ],
              "yellow": [
                "Vēl tikai"
              ],
              "red": [
                "Tikai"
              ],
              "purple": [
                "astoņi",
                "tikai"
              ]
            }
          },
          {
            "de": {
              "green": [
                "erst"
              ]
            },
            "lv": {
              "green": [
                "ne agrāk kā"
              ],
              "purple": [
                "agrāk"
              ]
            }
          },
          {
            "de": {
              "green": [
                "Euro",
                "zehn"
              ]
            },
            "lv": {
              "purple": [
                "tikai"
              ],
              "purple": [
                "desmit",
                "tikai",
                "eiro"
              ]
            }
          },
          {
            "de": {},
            "lv": {
              "purple": [
                "tikai"
              ],
              "purple": [
                "tikai"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "blue": [
            "erst"
          ],
          "green": [
            "Vēl"
          ],
          "yellow": [
            "Vēl tikai",
            "astoņi",
            "tikai",
            "acht",
            "erst"
          ],
          "purple": [
            "ir vēl tikai astoņi"
          ],
          "red": [
            "Tikai"
          ]
        },
        {
          "red": [
            "Man ir tikai astoņi eiro",
            "Tikai"
          ],
          "yellow": [
            "astoņi",
            "tikai",
            "acht",
            "eiro",
            "Euro"
          ]
        },
        {
          "blue": [
            "erst"
          ],
          "yellow": [
            "daudzumu",
            "stadiju",
            "agrīnu",
            "izvēli",
            "secību",
            "laiku",
            "erst",
            "runā"
          ]
        }
      ],
      "important": [
        {
          "red": [
            "Latviešu",
            "valodā",
            "Tikai",
            "vācu"
          ]
        },
        {
          "blue": [
            "erst"
          ],
          "red": [
            "pareizais",
            "secību",
            "bieži",
            "laiku",
            "vārds",
            "erst",
            "runa"
          ]
        },
        {
          "red": [
            "ierobežojums",
            "kontekstu",
            "jāskatās",
            "laiks"
          ]
        }
      ],
      "remember": [
        {
          "blue": [
            "Jau"
          ],
          "purple": [
            "schon"
          ]
        },
        {
          "green": [
            "Vēl"
          ],
          "orange": [
            "noch"
          ]
        },
        {
          "blue": [
            "erst"
          ],
          "green": [
            "ne agrāk kā",
            "Vēl"
          ],
          "yellow": [
            "Vēl tikai",
            "agrāk",
            "tikai",
            "erst"
          ],
          "purple": [
            "vēl tikai / ne agrāk kā"
          ],
          "red": [
            "Tikai"
          ]
        },
        {
          "green": [
            "vienīgi"
          ],
          "purple": [
            "tikai / vienīgi"
          ],
          "red": [
            "Tikai"
          ],
          "yellow": [
            "vienīgi",
            "tikai"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "red": [
              "acht"
            ]
          },
          "right": {
            "blue": [
              "erst"
            ],
            "green": [
              "acht",
              "erst"
            ]
          },
          "note": {}
        },
        {
          "wrong": {
            "blue": [
              "erst"
            ],
            "red": [
              "erst",
              "Euro",
              "zehn"
            ]
          },
          "right": {
            "green": [
              "Euro",
              "zehn"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-schon-noch-erst-nur",
        "secība vai agrīna stadija",
        "comparisonStudy",
        "atšķirīgu",
        "sinonīmi",
        "līdzīgi",
        "noticis",
        "tulkoti",
        "izsaka",
        "bieži",
        "četri",
        "katrs",
        "tikai",
        "vārdi",
        "domu",
        "erst",
        "kaut",
        "tiek",
        "Jau"
      ],
      "green": [
        "compare-schon-noch-erst-nur",
        "Vai tu vēl esi šeit",
        "ne agrāk kā",
        "vienīgi",
        "Vēl"
      ],
      "yellow": [
        "laiks, secība vai agrīna stadija",
        "ierobežots daudzums vai izvēle",
        "Vēl tikai",
        "compare"
      ],
      "orange": [
        "kaut kas joprojām turpinās",
        "Es jau esmu mājās",
        "noch"
      ],
      "purple": [
        "vēl tikai / ne agrāk kā",
        "Ir vēl tikai astoņi",
        "tikai / vienīgi",
        "schon"
      ],
      "red": [
        "Man ir tikai astoņi eiro",
        "laiks",
        "Tikai"
      ]
    }
  },
  "compare-durch-ueber-entlang": {
    "sectionAccents": {
      "lead": {
        "blue": [
          "Caur",
          "über"
        ],
        "green": [
          "entlang",
          "Pāri"
        ],
        "yellow": [
          "virs"
        ],
        "orange": [
          "durch"
        ],
        "red": [
          "Gar"
        ],
        "purple": [
          "virzienus",
          "apraksta",
          "dažādus",
          "entlang",
          "durch",
          "caur",
          "pāri",
          "über"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "purple": [
              "caur"
            ],
            "green": [
              "cauri"
            ],
            "purple": [
              "caur / cauri",
              "cauri",
              "caur"
            ]
          },
          "de": {
            "green": [
              "durch"
            ],
            "blue": [
              "durch"
            ]
          },
          "description": {
            "blue": [
              "Kustība",
              "šķērsli",
              "telpu",
              "vietu",
              "Caur"
            ]
          },
          "example": {
            "green": [
              "durch",
              "parku",
              "Caur",
              "gehe",
              "Park"
            ],
            "orange": [
              "durch"
            ],
            "red": [
              "Es eju caur parku"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Pāri"
            ],
            "yellow": [
              "virs"
            ],
            "purple": [
              "virs / pāri / par"
            ],
            "orange": [
              "pāri",
              "virs"
            ]
          },
          "de": {
            "green": [
              "über"
            ],
            "green": [
              "über"
            ]
          },
          "description": {
            "green": [
              "kaut",
              "kādu",
              "Pāri",
              "tēmu",
              "virs"
            ],
            "yellow": [
              "virs"
            ]
          },
          "example": {
            "green": [
              "über"
            ],
            "green": [
              "Mēs ejam pāri ielai",
              "Straße",
              "ielai",
              "Pāri",
              "über"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "garām"
            ],
            "purple": [
              "gar / garām"
            ],
            "red": [
              "Gar"
            ]
          },
          "de": {
            "green": [
              "entlang"
            ],
            "yellow": [
              "entlang"
            ]
          },
          "description": {
            "red": [
              "Gar"
            ],
            "yellow": [
              "Kustība",
              "līniju",
              "notiek",
              "ielu",
              "malu"
            ]
          },
          "example": {
            "green": [
              "Mēs ejam gar upi",
              "entlang"
            ],
            "red": [
              "Gar"
            ],
            "yellow": [
              "entlang",
              "Fluss",
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "durch"
            ],
            "blue": [
              "durch",
              "gehe",
              "Park"
            ]
          },
          "lv": {
            "purple": [
              "caur"
            ],
            "red": [
              "Es eju caur parku"
            ],
            "purple": [
              "parku",
              "caur"
            ]
          }
        },
        {
          "de": {
            "green": [
              "hängt",
              "Lampe",
              "Tisch",
              "über"
            ]
          },
          "lv": {
            "green": [
              "Lampa karājas virs galda"
            ],
            "yellow": [
              "virs"
            ],
            "purple": [
              "karājas",
              "galda",
              "lampa",
              "virs"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Straße",
              "über"
            ]
          },
          "lv": {
            "green": [
              "Mēs ejam pāri ielai",
              "Pāri"
            ],
            "purple": [
              "ielai",
              "pāri"
            ]
          }
        },
        {
          "de": {
            "green": [
              "entlang"
            ],
            "blue": [
              "entlang",
              "Fluss",
            ]
          },
          "lv": {
            "green": [
              "Mēs ejam gar upi"
            ],
            "red": [
              "Gar"
            ],
            "purple": [
            ]
          }
        },
        {
          "de": {
            "green": [
              "spricht",
              "Arbeit",
              "seine",
              "über"
            ]
          },
          "lv": {
            "purple": [
              "darbu",
              "runā",
              "savu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "durch"
            ],
            "blue": [
              "durch",
              "führt",
              "Wald"
            ]
          },
          "lv": {
            "purple": [
              "caur"
            ],
            "purple": [
              "caur",
              "ceļš",
              "mežu"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "purple": [
              "caur"
            ],
            "green": [
              "cauri"
            ],
            "purple": [
              "caur / cauri",
              "cauri",
              "caur"
            ]
          },
          "de": {
            "green": [
              "durch"
            ],
            "blue": [
              "durch"
            ]
          },
          "meaning": {
            "purple": [
              "caur"
            ],
            "yellow": [
              "kustība caur kaut ko"
            ],
            "purple": [
              "kustība",
              "caur",
              "kaut"
            ]
          },
          "describes": {
            "purple": [
              "caur"
            ],
            "orange": [
              "vietu",
              "caur",
              "ceļu"
            ]
          },
          "example": {
            "green": [
              "durch"
            ],
            "blue": [
              "durch",
              "gehe",
              "Park"
            ]
          },
          "translation": {
            "purple": [
              "caur"
            ],
            "red": [
              "Es eju caur parku"
            ],
            "purple": [
              "parku",
              "caur"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "virs"
            ],
            "orange": [
              "virs"
            ]
          },
          "de": {
            "green": [
              "über"
            ],
            "green": [
              "über"
            ]
          },
          "meaning": {
            "purple": [
              "augstāk par kaut ko"
            ],
            "purple": [
              "augstāk",
              "kaut"
            ]
          },
          "describes": {
            "purple": [
              "atrašanās",
              "vietu"
            ]
          },
          "example": {
            "green": [
              "über"
            ],
            "green": [
              "hängt",
              "Lampe",
              "Tisch",
              "über"
            ]
          },
          "translation": {
            "green": [
              "Lampa karājas virs galda"
            ],
            "yellow": [
              "virs"
            ],
            "purple": [
              "karājas",
              "galda",
              "lampa",
              "virs"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Pāri"
            ]
          },
          "de": {
            "green": [
              "über"
            ],
            "yellow": [
              "über"
            ]
          },
          "meaning": {
            "purple": [
              "šķērsot kaut ko"
            ],
            "purple": [
              "šķērsot",
              "kaut"
            ]
          },
          "describes": {
            "green": [
              "Pāri"
            ],
            "orange": [
              "kustību",
              "pāri"
            ]
          },
          "example": {
            "green": [
              "über"
            ],
            "yellow": [
              "Straße",
              "über"
            ]
          },
          "translation": {
            "green": [
              "Mēs ejam pāri ielai",
              "Pāri"
            ],
            "purple": [
              "ielai",
              "pāri"
            ]
          }
        },
        {
          "lv": {},
          "de": {
            "purple": [
              "über"
            ],
            "red": [
              "über"
            ]
          },
          "meaning": {
            "purple": [
              "tēma"
            ]
          },
          "describes": {
            "purple": [
              "runā"
            ]
          },
          "example": {
            "green": [
              "über"
            ],
            "red": [
              "sprechen",
              "Problem",
              "über"
            ]
          },
          "translation": {
            "purple": [
              "mēs runājam par problēmu"
            ],
            "purple": [
              "problēmu",
              "runājam"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "gar"
            ]
          },
          "de": {
            "green": [
              "entlang"
            ],
            "purple": [
              "entlang"
            ]
          },
          "meaning": {
            "purple": [
              "gar kaut ko"
            ],
            "red": [
              "Gar"
            ],
            "purple": [
              "kaut"
            ]
          },
          "describes": {
            "purple": [
              "paralēlu",
              "kustību"
            ]
          },
          "example": {
            "green": [
              "entlang"
            ],
            "purple": [
              "entlang",
              "fluss",
            ]
          },
          "translation": {
            "green": [
              "Mēs ejam gar upi"
            ],
            "red": [
              "Gar"
            ],
            "purple": [
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Caur",
            "über"
          ],
          "green": [
            "entlang"
          ],
          "orange": [
            "durch"
          ],
          "red": [
            "Gar"
          ],
          "yellow": [
            "kustība",
            "šķērso",
            "durch",
            "lieto",
            "vietu",
            "caur",
            "ielu",
            "runā"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "durch"
              ],
              "blue": [
                "durch",
                "Park"
              ]
            },
            "lv": {
              "purple": [
                "caur"
              ],
              "purple": [
                "parku",
                "caur"
              ]
            }
          },
          {
            "de": {
              "green": [
                "Straße",
                "über"
              ]
            },
            "lv": {
              "green": [
                "Pāri"
              ],
              "purple": [
                "ielai",
                "pāri"
              ]
            }
          },
          {
            "de": {
              "green": [
                "entlang"
              ],
              "blue": [
                "entlang",
                "Fluss"
              ]
            },
            "lv": {
              "purple": [
                "gar"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "blue": [
            "Caur"
          ],
          "orange": [
            "durch"
          ],
          "red": [
            "Es eju caur parku"
          ],
          "yellow": [
            "durch",
            "parku",
            "caur",
            "gehe",
            "Park"
          ]
        },
        {
          "blue": [
            "über"
          ],
          "green": [
            "Mēs ejam pāri ielai",
            "Pāri"
          ],
          "yellow": [
            "Straße",
            "ielai",
            "pāri",
            "über"
          ]
        },
        {
          "blue": [
            "Caur",
            "über"
          ],
          "green": [
            "entlang",
            "Pāri"
          ],
          "yellow": [
            "entlang",
            "durch",
            "vietu",
            "caur",
            "kaut",
            "pāri",
            "über",
            "virs"
          ],
          "orange": [
            "gar kaut ko",
            "durch"
          ],
          "red": [
            "Gar"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "Caur",
            "über"
          ],
          "red": [
            "pareizi",
            "parku",
            "caur",
            "doma",
            "gehe",
            "Park",
            "über"
          ]
        },
        {
          "green": [
            "entlang"
          ],
          "red": [
            "lietvārda",
            "entlang",
            "bieži",
            "Fluss",
            "stāv"
          ]
        },
        {
          "blue": [
            "über"
          ],
          "green": [
            "Pāri"
          ],
          "yellow": [
            "virs"
          ],
          "red": [
            "nozīmēt",
            "pāri",
            "über",
            "virs"
          ]
        }
      ],
      "remember": [
        {
          "blue": [
            "Caur"
          ],
          "orange": [
            "durch"
          ],
          "yellow": [
            "durch",
            "caur"
          ]
        },
        {
          "blue": [
            "über"
          ],
          "green": [
            "Pāri"
          ],
          "yellow": [
            "pāri",
            "über",
            "virs"
          ],
          "purple": [
            "virs / pāri / par"
          ]
        },
        {
          "green": [
            "entlang"
          ],
          "red": [
            "Gar"
          ],
          "yellow": [
            "entlang"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "blue": [
              "über"
            ],
            "red": [
              "gehe",
              "Park",
              "über"
            ]
          },
          "right": {
            "orange": [
              "durch"
            ],
            "green": [
              "durch",
              "gehe",
              "Park"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-durch-ueber-entlang",
        "comparisonStudy",
        "virzienus",
        "apraksta",
        "dažādus",
        "entlang",
        "kustība",
        "nozīmēt",
        "cauri",
        "durch",
        "telpu",
        "vietu",
        "Caur",
        "masu",
        "Pāri",
        "über",
        "virs"
      ],
      "green": [
        "Lampa karājas virs galda",
        "Mēs ejam pāri ielai",
        "Mēs ejam gar upi",
        "entlang",
        "cauri",
        "garām",
        "Pāri"
      ],
      "yellow": [
        "compare-durch-ueber-entlang",
        "kustība caur kaut ko",
        "virs"
      ],
      "orange": [
        "Mēs runājam par problēmu",
        "augstāk par kaut ko",
        "šķērsot kaut ko",
        "gar kaut ko",
        "durch",
        "ueber"
      ],
      "purple": [
        "durch • über • entlang",
        "virs / pāri / par",
        "caur / cauri",
        "gar / garām",
        "tēma"
      ],
      "red": [
        "Es eju caur parku",
        "compare",
        "Gar"
      ]
    }
  },
  "compare-innen-drin-draussen": {
    "sectionAccents": {
      "lead": {
        "blue": [
          "drinnen"
        ],
        "green": [
          "draußen",
          "Iekšā"
        ],
        "orange": [
          "drin"
        ],
        "purple": [
          "iekšpusi",
          "raksturo",
          "draußen",
          "drinnen",
          "iekšā",
          "innen",
          "drin"
        ],
        "red": [
          "Ārā"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "purple": [
              "iekšpusē"
            ],
            "purple": [
              "iekšpusē"
            ]
          },
          "de": {
            "purple": [
              "innen"
            ],
            "blue": [
              "innen"
            ]
          },
          "description": {
            "blue": [
              "iekšpuse",
              "Iekšējā",
              "īpašība",
              "puse"
            ]
          },
          "example": {
            "green": [
              "Auto iekšpusē ir tīrs"
            ],
            "yellow": [
              "Iekšpusē"
            ],
            "purple": [
              "innen"
            ],
            "blue": [
              "iekšpusē",
              "sauber",
              "innen",
              "Auto",
              "tīrs"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Iekšā"
            ],
            "orange": [
              "iekšā"
            ]
          },
          "de": {
            "green": [
              "drinnen"
            ],
            "green": [
              "drin / drinnen",
              "drinnen",
              "drin"
            ],
            "orange": [
              "drin"
            ]
          },
          "description": {
            "orange": [
              "kaut kā iekšienē"
            ],
            "green": [
              "iekšienē",
              "kaut",
              "Kāds"
            ]
          },
          "example": {
            "green": [
              "Es esmu iekšā",
              "Iekšā",
              "drin",
              "esmu"
            ],
            "orange": [
              "drin"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ārā"
            ]
          },
          "de": {
            "green": [
              "draußen"
            ],
            "yellow": [
              "draußen"
            ]
          },
          "description": {
            "orange": [
              "ārpus telpas"
            ],
            "yellow": [
              "telpas",
              "Ārpus",
              "ēkas"
            ]
          },
          "example": {
            "green": [
              "draußen"
            ],
            "red": [
              "Ārā"
            ],
            "yellow": [
              "spēlējas",
              "draußen",
              "spielen",
              "Kinder",
              "Bērni"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "innen"
            ],
            "blue": [
              "sauber",
              "innen",
              "Auto"
            ]
          },
          "lv": {
            "green": [
              "Auto iekšpusē ir tīrs"
            ],
            "yellow": [
              "Iekšpusē"
            ],
            "purple": [
              "iekšpusē",
              "auto",
              "tīrs"
            ]
          }
        },
        {
          "de": {
            "green": [
              "drin"
            ],
            "blue": [
              "drin"
            ]
          },
          "lv": {
            "green": [
              "Es esmu iekšā",
              "Iekšā"
            ],
            "purple": [
              "iekšā",
              "esmu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "draußen"
            ],
            "blue": [
              "draußen",
              "spielen",
              "Kinder"
            ]
          },
          "lv": {
            "purple": [
              "ārā"
            ],
            "purple": [
              "spēlējas",
              "bērni"
            ]
          }
        },
        {
          "de": {
            "green": [
              "drinnen",
              "warm"
            ]
          },
          "lv": {
            "green": [
              "Iekšā ir silti",
              "Iekšā"
            ],
            "purple": [
              "iekšā",
              "silti"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "innen"
            ],
            "blue": [
              "Tasche",
              "innen",
              "nass"
            ]
          },
          "lv": {
            "purple": [
              "iekšpusē"
            ],
            "purple": [
              "iekšpusē",
              "slapja",
              "soma"
            ]
          }
        },
        {
          "de": {
            "green": [
              "draußen"
            ],
            "blue": [
              "draußen",
              "bitte",
              "Bleib"
            ]
          },
          "lv": {
            "purple": [
              "ārā"
            ],
            "purple": [
              "paliec",
              "lūdzu"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "purple": [
              "iekšpusē"
            ],
            "purple": [
              "iekšpusē"
            ]
          },
          "de": {
            "purple": [
              "innen"
            ],
            "blue": [
              "innen"
            ]
          },
          "meaning": {
            "purple": [
              "iekšējā pusē"
            ],
            "purple": [
              "iekšējā",
              "pusē"
            ]
          },
          "describes": {
            "purple": [
              "iekšpuses",
              "īpašību"
            ]
          },
          "example": {
            "purple": [
              "innen"
            ],
            "blue": [
              "sauber",
              "innen",
              "Auto"
            ]
          },
          "translation": {
            "green": [
              "Auto iekšpusē ir tīrs"
            ],
            "yellow": [
              "Iekšpusē"
            ],
            "purple": [
              "iekšpusē",
              "auto",
              "tīrs"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Iekšā"
            ],
            "orange": [
              "iekšā"
            ]
          },
          "de": {
            "green": [
              "drin"
            ],
            "green": [
              "drin"
            ]
          },
          "meaning": {
            "purple": [
              "kaut kā iekšienē"
            ],
            "purple": [
              "iekšienē",
              "kaut"
            ]
          },
          "describes": {
            "green": [
              "Iekšā"
            ],
            "orange": [
              "atrašanos",
              "iekšā"
            ]
          },
          "example": {
            "green": [
              "drin"
            ],
            "green": [
              "drin"
            ]
          },
          "translation": {
            "green": [
              "Es esmu iekšā",
              "Iekšā"
            ],
            "purple": [
              "iekšā",
              "esmu"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Iekšā"
            ]
          },
          "de": {
            "green": [
              "drinnen"
            ],
            "yellow": [
              "drinnen"
            ]
          },
          "meaning": {
            "green": [
              "Iekšā"
            ],
            "orange": [
              "iekšā telpā"
            ],
            "purple": [
              "iekšā",
              "telpā"
            ]
          },
          "describes": {
            "green": [
              "Iekšā"
            ],
            "orange": [
              "atrašanos",
              "iekšā"
            ]
          },
          "example": {
            "green": [
              "drinnen"
            ],
            "yellow": [
              "Drinnen",
              "warm"
            ]
          },
          "translation": {
            "green": [
              "Iekšā ir silti",
              "Iekšā"
            ],
            "purple": [
              "iekšā",
              "silti"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ārā"
            ]
          },
          "de": {
            "green": [
              "draußen"
            ],
            "red": [
              "draußen"
            ]
          },
          "meaning": {
            "purple": [
              "ārpus telpas"
            ],
            "purple": [
              "telpas",
              "ārpus"
            ]
          },
          "describes": {
            "purple": [
              "ārā"
            ],
            "orange": [
              "atrašanos"
            ]
          },
          "example": {
            "green": [
              "draußen"
            ],
            "red": [
              "draußen",
              "Kinder"
            ]
          },
          "translation": {
            "green": [
              "Bērni ir ārā"
            ],
            "red": [
              "Ārā"
            ],
            "purple": [
              "bērni"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "drinnen"
          ],
          "green": [
            "Es esmu iekšā",
            "Iekšā"
          ],
          "orange": [
            "drin"
          ],
          "purple": [
            "innen"
          ],
          "yellow": [
            "apraksti",
            "drinnen",
            "pateikt",
            "gribi",
            "iekšā",
            "lieto",
            "drin",
            "esmu"
          ]
        },
        "rightItems": [
          {
            "de": {
              "purple": [
                "innen"
              ],
              "blue": [
                "sauber",
                "innen"
              ]
            },
            "lv": {
              "purple": [
                "iekšpusē"
              ],
              "purple": [
                "iekšpusē",
                "tīrs"
              ]
            }
          },
          {
            "de": {
              "green": [
                "drin"
              ],
              "blue": [
                "drin"
              ]
            },
            "lv": {
              "green": [
                "Es esmu iekšā",
                "Iekšā"
              ],
              "purple": [
                "iekšā",
                "esmu"
              ]
            }
          },
          {
            "de": {
              "green": [
                "draußen"
              ],
              "blue": [
                "draußen",
                "spielen"
              ]
            },
            "lv": {
              "purple": [
                "ārā"
              ],
              "purple": [
                "spēlēties"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Es esmu iekšā",
            "Iekšā"
          ],
          "orange": [
            "drin"
          ],
          "yellow": [
            "iekšā",
            "drin",
            "esmu"
          ]
        },
        {
          "green": [
            "Auto iekšpusē ir tīrs"
          ],
          "yellow": [
            "Iekšpusē",
            "sauber",
            "innen",
            "Auto",
            "tīrs"
          ],
          "purple": [
            "innen"
          ]
        },
        {
          "blue": [
            "drinnen"
          ],
          "green": [
            "Iekšā"
          ],
          "orange": [
            "drin"
          ],
          "purple": [
            "innen"
          ],
          "yellow": [
            "atrašanos",
            "apraksta",
            "iekšpusi",
            "drinnen",
            "iekšā",
            "innen",
            "drin"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "Es esmu iekšā",
            "Iekšā"
          ],
          "purple": [
            "innen"
          ],
          "red": [
            "pareizi",
            "iekšā",
            "innen",
            "doma",
            "esmu"
          ]
        },
        {
          "blue": [
            "drinnen"
          ],
          "green": [
            "draußen"
          ],
          "red": [
            "pretstatu",
            "draußen",
            "Drinnen",
            "bieži",
            "veido"
          ]
        },
        {
          "purple": [
            "innen"
          ],
          "red": [
            "apraksta",
            "iekšpusi",
            "īpašību",
            "vairāk",
            "innen",
            "daļu"
          ]
        }
      ],
      "remember": [
        {
          "yellow": [
            "Iekšpusē",
            "innen"
          ],
          "purple": [
            "innen"
          ]
        },
        {
          "blue": [
            "drinnen"
          ],
          "green": [
            "Iekšā"
          ],
          "orange": [
            "drin"
          ],
          "yellow": [
            "drinnen",
            "iekšā",
            "drin"
          ]
        },
        {
          "green": [
            "draußen"
          ],
          "red": [
            "Ārā"
          ],
          "yellow": [
            "draußen"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "purple": [
              "innen"
            ],
            "red": [
              "innen"
            ]
          },
          "right": {
            "orange": [
              "drin"
            ],
            "green": [
              "drin"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-innen-drin-draussen",
        "Iekšā • Iekšpusē • Ārā",
        "comparisonStudy",
        "draussen",
        "Iekšpusē",
        "iekšpusi",
        "raksturo",
        "draußen",
        "drinnen",
        "iekšējā",
        "Iekšā",
        "innen",
        "vietā",
        "drin",
        "kaut",
        "kādā",
        "kāds",
        "pusē"
      ],
      "green": [
        "Auto iekšpusē ir tīrs",
        "drin / drinnen",
        "Iekšā ir silti",
        "Es esmu iekšā",
        "Bērni ir ārā",
        "draußen",
        "Iekšā"
      ],
      "yellow": [
        "compare-innen-drin-draussen",
        "Iekšpusē"
      ],
      "orange": [
        "kaut kā iekšienē",
        "ārpus telpas",
        "iekšējā pusē",
        "iekšā telpā",
        "drin"
      ],
      "purple": [
        "innen"
      ],
      "red": [
        "compare",
        "Ārā"
      ]
    }
  },
  "compare-hin-her": {
    "sectionAccents": {
      "lead": {
        "orange": [
          "prom no runātāja",
          "uz runātāju",
          "her"
        ],
        "purple": [
          "runātāja",
          "runātāju",
          "virzienu",
          "prom",
          "rāda",
          "hin"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Turp"
            ],
            "purple": [
              "turp"
            ]
          },
          "de": {
            "purple": [
              "hin"
            ]
          },
          "description": {
            "orange": [
              "prom no runātāja"
            ],
            "blue": [
              "runātāja",
              "Virziens",
              "vietu",
              "citu",
              "kādu",
              "prom"
            ]
          },
          "example": {
            "green": [
              "Ej turp",
              "Turp"
            ],
            "purple": [
              "hin"
            ],
            "blue": [
              "turp"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "šurp"
            ],
            "orange": [
              "šurp"
            ]
          },
          "de": {
            "green": [
              "her"
            ]
          },
          "description": {
            "orange": [
              "uz runātāju"
            ],
            "green": [
              "runātāja",
              "runātāju",
              "Virziens",
              "pusi"
            ]
          },
          "example": {
            "green": [
              "Nāc šurp",
              "Komm",
              "šurp"
            ],
            "yellow": [
              "Šurp"
            ],
            "orange": [
              "her"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "hin"
            ]
          },
          "lv": {
            "green": [
              "Ej turp",
              "Turp"
            ],
            "purple": [
              "turp"
            ]
          }
        },
        {
          "de": {
            "green": [
              "her"
            ],
            "blue": [
              "Komm"
            ]
          },
          "lv": {
            "green": [
              "Nāc šurp"
            ],
            "yellow": [
              "Šurp"
            ],
            "purple": [
              "šurp"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "hin"
            ],
            "blue": [
              "gehst"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "hierher"
            ],
            "blue": [
              "hierher",
              "bitte",
              "Komm"
            ]
          },
          "lv": {
            "purple": [
              "šurp"
            ],
            "purple": [
              "lūdzu",
              "šurp"
            ]
          }
        },
        {
          "de": {
            "green": [
              "dorthin"
            ],
            "blue": [
              "dorthin",
              "gehe"
            ]
          },
          "lv": {
            "green": [
              "Es eju uz turieni"
            ],
            "purple": [
              "uz turieni",
              "turieni"
            ]
          }
        },
        {
          "de": {
            "green": [
              "her"
            ],
            "blue": [
              "bitte",
              "Bring"
            ]
          },
          "lv": {
            "purple": [
              "šurp"
            ],
            "purple": [
              "atnes",
              "lūdzu",
              "šurp"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Turp"
            ],
            "purple": [
              "turp"
            ]
          },
          "de": {
            "purple": [
              "hin"
            ]
          },
          "meaning": {
            "purple": [
              "prom no runātāja"
            ],
            "purple": [
              "runātāja",
              "prom"
            ]
          },
          "describes": {
            "purple": [
              "virzienu",
              "vietu",
              "citu"
            ]
          },
          "example": {
            "purple": [
              "hin"
            ]
          },
          "translation": {
            "green": [
              "Ej turp",
              "Turp"
            ],
            "purple": [
              "turp"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "šurp"
            ],
            "orange": [
              "šurp"
            ]
          },
          "de": {
            "green": [
              "her"
            ]
          },
          "meaning": {
            "purple": [
              "uz runātāju"
            ],
            "purple": [
              "runātāju"
            ]
          },
          "describes": {
            "purple": [
              "runātāja",
              "virzienu"
            ]
          },
          "example": {
            "green": [
              "her"
            ],
            "green": [
              "Komm"
            ]
          },
          "translation": {
            "green": [
              "Nāc šurp"
            ],
            "yellow": [
              "Šurp"
            ],
            "purple": [
              "šurp"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "uz šejieni"
            ],
            "green": [
              "šejieni"
            ]
          },
          "de": {
            "green": [
              "hierher"
            ]
          },
          "meaning": {
            "purple": [
              "šurp"
            ],
            "orange": [
              "šurp uz šo vietu"
            ],
            "purple": [
              "vietu",
              "šurp"
            ]
          },
          "describes": {
            "purple": [
              "konkrētu",
              "virzienu",
              "manis"
            ]
          },
          "example": {
            "green": [
              "hierher",
              "Komm"
            ]
          },
          "translation": {
            "green": [
              "Nāc šurp"
            ],
            "yellow": [
              "Šurp"
            ],
            "purple": [
              "šurp"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "uz turieni"
            ],
            "yellow": [
              "turieni"
            ]
          },
          "de": {
            "green": [
              "dorthin"
            ]
          },
          "meaning": {
            "green": [
              "Turp"
            ],
            "orange": [
              "turp uz to vietu"
            ],
            "purple": [
              "vietu",
              "turp"
            ]
          },
          "describes": {
            "purple": [
              "virzienu",
              "prom"
            ]
          },
          "example": {
            "green": [
              "dorthin",
              "gehe"
            ]
          },
          "translation": {
            "green": [
              "Es eju uz turieni"
            ],
            "purple": [
              "uz turieni",
              "turieni"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "orange": [
            "her"
          ],
          "purple": [
            "hin"
          ],
          "yellow": [
            "cilvēks",
            "tuvojas",
            "dodas",
            "lieto",
            "vietu",
            "citu",
            "prom"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "her"
              ],
              "blue": [
                "komm"
              ]
            },
            "lv": {
              "green": [
                "Nāc šurp"
              ],
              "yellow": [
                "Šurp"
              ],
              "purple": [
                "šurp"
              ]
            }
          },
          {
            "de": {
              "purple": [
                "hin"
              ]
            },
            "lv": {
              "green": [
                "Ej turp",
                "Turp"
              ],
              "purple": [
                "turp"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Ej turp",
            "Turp"
          ],
          "purple": [
            "hin"
          ],
          "yellow": [
            "turp"
          ]
        },
        {
          "green": [
            "Nāc šurp"
          ],
          "yellow": [
            "Komm",
            "Šurp"
          ],
          "orange": [
            "her"
          ]
        },
        {
          "orange": [
            "her"
          ],
          "purple": [
            "hin"
          ],
          "yellow": [
            "atšķiras",
            "runātāju",
            "virziena",
            "pret"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "hin"
          ],
          "red": [
            "cilvēks",
            "pareizi",
            "tevis",
            "Komm"
          ]
        },
        {
          "orange": [
            "uz runātāju",
            "her"
          ],
          "red": [
            "runātāju",
            "virziens",
            "jūtas"
          ]
        },
        {
          "purple": [
            "hin"
          ],
          "red": [
            "virziens",
            "jūtas",
            "vietu",
            "citu",
            "prom"
          ]
        }
      ],
      "remember": [
        {
          "green": [
            "Turp"
          ],
          "purple": [
            "hin"
          ],
          "yellow": [
            "turp"
          ]
        },
        {
          "yellow": [
            "Šurp"
          ],
          "orange": [
            "her"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "purple": [
              "hin"
            ],
            "red": [
              "Komm"
            ]
          },
          "right": {
            "orange": [
              "her"
            ],
            "green": [
              "Komm"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-hin-her",
        "comparisonStudy",
        "Turp • Šurp",
        "skatpunkta",
        "komandās",
        "runātāja",
        "runātāju",
        "Virziena",
        "virzienu",
        "parādās",
        "bieži",
        "vārdi",
        "Komm",
        "prom",
        "pusi",
        "rāda",
        "Šurp",
        "Turp"
      ],
      "green": [
        "Es eju uz turieni",
        "Nāc šurp",
        "compare",
        "Ej turp",
        "Turp"
      ],
      "yellow": [
        "hierher",
        "Šurp"
      ],
      "orange": [
        "prom no runātāja",
        "šurp uz šo vietu",
        "turp uz to vietu",
        "uz runātāju",
        "her"
      ],
      "purple": [
        "uz šejieni",
        "uz turieni",
        "hin"
      ],
      "red": [
        "hin • her",
        "dorthin"
      ]
    }
  },
  "compare-hinaus-heraus": {
    "sectionAccents": {
      "lead": {
        "orange": [
          "heraus"
        ],
        "purple": [
          "atšķirīgs",
          "virziens",
          "heraus",
          "hinaus",
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Ārā prom"
            ],
            "purple": [
              "prom"
            ]
          },
          "de": {
            "purple": [
              "hinaus"
            ],
            "blue": [
              "hinaus"
            ]
          },
          "description": {
            "green": [
              "Ārā prom"
            ],
            "blue": [
              "runātāja",
              "Kustība",
              "prom"
            ]
          },
          "example": {
            "green": [
              "Ej ārā"
            ],
            "purple": [
              "hinaus"
            ],
            "blue": [
              "hinaus"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ārā šurp"
            ],
            "orange": [
              "šurp"
            ]
          },
          "de": {
            "green": [
              "heraus"
            ],
            "green": [
              "heraus"
            ]
          },
          "description": {
            "orange": [
              "ārā uz runātāja pusi"
            ],
            "purple": [
              "ārā no kaut kā"
            ],
            "green": [
              "runātāja",
              "Kustība",
              "kaut",
              "pusi"
            ]
          },
          "example": {
            "green": [
              "Nāc ārā",
              "heraus",
              "Komm"
            ],
            "orange": [
              "heraus"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "hinaus"
            ],
            "blue": [
              "hinaus"
            ]
          },
          "lv": {
            "green": [
              "Ej ārā"
            ]
          }
        },
        {
          "de": {
            "green": [
              "heraus"
            ],
            "blue": [
              "heraus",
              "Komm"
            ]
          },
          "lv": {
            "green": [
              "Nāc ārā"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "hinaus"
            ],
            "blue": [
              "hinaus",
              "läuft",
              "Haus"
            ]
          },
          "lv": {
            "green": [
              "Viņš skrien ārā"
            ],
            "purple": [
              "ārā no mājas prom",
              "skrien",
              "mājas",
              "prom"
            ]
          }
        },
        {
          "de": {
            "green": [
              "heraus"
            ],
            "blue": [
              "heraus",
              "Zimmer",
              "kommt"
            ]
          },
          "lv": {
            "purple": [
              "viņa nāk ārā"
            ],
            "purple": [
              "istabas"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "hinaus"
            ],
            "blue": [
              "hinaus",
              "Hund",
              "will"
            ]
          },
          "lv": {
            "purple": [
              "grib",
              "suns"
            ]
          }
        },
        {
          "de": {
            "green": [
              "heraus"
            ],
            "blue": [
              "heraus",
              "Kind"
            ]
          },
          "lv": {
            "purple": [
              "bērnu",
              "izved"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Ārā prom"
            ],
            "purple": [
              "prom"
            ]
          },
          "de": {
            "purple": [
              "hinaus"
            ],
            "blue": [
              "hinaus"
            ]
          },
          "meaning": {
            "purple": [
              "prom ārā"
            ],
            "purple": [
              "prom"
            ]
          },
          "describes": {
            "purple": [
              "runātāja",
              "virzienu",
              "prom"
            ]
          },
          "example": {
            "purple": [
              "hinaus"
            ],
            "blue": [
              "hinaus"
            ]
          },
          "translation": {
            "green": [
              "Ej ārā"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ārā šurp"
            ],
            "orange": [
              "šurp"
            ]
          },
          "de": {
            "green": [
              "heraus"
            ],
            "green": [
              "heraus"
            ]
          },
          "meaning": {
            "purple": [
              "ārā uz runātāja pusi"
            ],
            "purple": [
              "runātāja",
              "pusi"
            ]
          },
          "describes": {
            "purple": [
              "runātāja",
              "virzienu"
            ]
          },
          "example": {
            "green": [
              "heraus"
            ],
            "green": [
              "heraus",
              "Komm"
            ]
          },
          "translation": {
            "green": [
              "Nāc ārā"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ārā no mājas prom"
            ],
            "green": [
              "mājas",
              "prom"
            ]
          },
          "de": {
            "purple": [
              "hinaus"
            ],
            "yellow": [
              "hinaus"
            ]
          },
          "meaning": {
            "green": [
              "Ārā prom"
            ],
            "orange": [
              "iziet ārā prom"
            ],
            "purple": [
              "iziet",
              "prom"
            ]
          },
          "describes": {
            "purple": [
              "virzienu",
              "prom"
            ]
          },
          "example": {
            "purple": [
              "hinaus"
            ],
            "yellow": [
              "hinaus",
              "läuft"
            ]
          },
          "translation": {
            "green": [
              "Viņš skrien ārā"
            ],
            "purple": [
              "skrien"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ārā no kaut kā"
            ],
            "yellow": [
              "kaut"
            ]
          },
          "de": {
            "green": [
              "heraus"
            ],
            "red": [
              "heraus"
            ]
          },
          "meaning": {
            "green": [
              "izņemt"
            ],
            "yellow": [
              "iznākt ārā"
            ],
            "orange": [
              "izņemt / iznākt ārā"
            ],
            "purple": [
              "iznākt",
              "izņemt"
            ]
          },
          "describes": {
            "purple": [
              "iekšienes",
              "kustību"
            ]
          },
          "example": {
            "green": [
              "heraus"
            ],
            "red": [
              "heraus",
              "kommt"
            ]
          },
          "translation": {
            "purple": [
              "viņa nāk ārā"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "orange": [
            "prom ārā",
            "heraus"
          ],
          "purple": [
            "hinaus"
          ],
          "yellow": [
            "virzienu",
            "heraus",
            "hinaus",
            "Domā",
            "mani",
            "prom"
          ]
        },
        "rightItems": [
          {
            "de": {
              "purple": [
                "hinaus"
              ],
              "blue": [
                "hinaus"
              ]
            },
            "lv": {
              "green": [
                "Ārā prom",
                "Ej ārā"
              ],
              "purple": [
                "prom"
              ]
            }
          },
          {
            "de": {
              "green": [
                "heraus"
              ],
              "blue": [
                "heraus",
                "komm"
              ]
            },
            "lv": {
              "green": [
                "Nāc ārā"
              ],
              "yellow": [
                "Ārā šurp"
              ],
              "purple": [
                "šurp"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Ej ārā"
          ],
          "purple": [
            "hinaus"
          ],
          "yellow": [
            "hinaus"
          ]
        },
        {
          "green": [
            "Nāc ārā"
          ],
          "orange": [
            "heraus"
          ],
          "yellow": [
            "heraus",
            "Komm"
          ]
        },
        {
          "orange": [
            "heraus"
          ],
          "yellow": [
            "cilvēks",
            "heraus",
            "lieto",
            "tevis"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "hinaus"
          ],
          "red": [
            "cilvēks",
            "pareizi",
            "hinaus",
            "tevis",
            "Komm"
          ]
        },
        {
          "orange": [
            "heraus"
          ],
          "purple": [
            "hinaus"
          ],
          "red": [
            "tulkoties",
            "virziens",
            "vienāds",
            "heraus",
            "hinaus"
          ]
        }
      ],
      "remember": [
        {
          "green": [
            "Ārā prom"
          ],
          "purple": [
            "hinaus"
          ],
          "yellow": [
            "hinaus",
            "prom"
          ]
        },
        {
          "yellow": [
            "Ārā šurp",
            "heraus",
            "kaut",
            "šurp"
          ],
          "orange": [
            "heraus"
          ],
          "purple": [
            "ārā no kaut kā"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "purple": [
              "hinaus"
            ],
            "red": [
              "hinaus",
              "Komm"
            ]
          },
          "right": {
            "orange": [
              "heraus"
            ],
            "green": [
              "heraus",
              "Komm"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-hinaus-heraus",
        "Ārā prom • Ārā šurp",
        "comparisonStudy",
        "skatpunkta",
        "atšķirīgs",
        "Komandās",
        "runātāja",
        "virziens",
        "svarīgi",
        "heraus",
        "hinaus",
        "bieži",
        "īpaši",
        "kaut",
        "Komm",
        "prom",
        "pusi",
        "šurp"
      ],
      "green": [
        "Viņš skrien ārā",
        "Ārā prom",
        "compare",
        "Nāc ārā",
        "Ej ārā",
        "izņemt"
      ],
      "yellow": [
        "iznākt ārā",
        "Ārā šurp"
      ],
      "orange": [
        "ārā uz runātāja pusi",
        "izņemt / iznākt ārā",
        "iziet ārā prom",
        "prom ārā",
        "heraus"
      ],
      "purple": [
        "ārā no mājas prom",
        "ārā no kaut kā",
        "hinaus"
      ],
      "red": [
        "hinaus • heraus",
        "Viņa nāk ārā"
      ]
    }
  },
  "compare-hinein-herein": {
    "sectionAccents": {
      "lead": {
        "orange": [
          "herein"
        ],
        "purple": [
          "atšķirīgs",
          "runātāju",
          "virziens",
          "herein",
          "hinein",
          "iekšā",
          "pret"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Iekšā prom"
            ],
            "purple": [
              "iekšā",
              "prom"
            ]
          },
          "de": {
            "purple": [
              "hinein"
            ],
            "blue": [
              "hinein"
            ]
          },
          "description": {
            "green": [
              "Iekšā prom"
            ],
            "blue": [
              "runātāja",
              "Kustība",
              "iekšā",
              "vietu",
              "prom"
            ]
          },
          "example": {
            "green": [
              "Ej iekšā"
            ],
            "purple": [
              "hinein"
            ],
            "blue": [
              "hinein",
              "iekšā"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "iekšā šurp"
            ],
            "orange": [
              "iekšā",
              "šurp"
            ]
          },
          "de": {
            "green": [
              "herein"
            ],
            "green": [
              "herein"
            ]
          },
          "description": {
            "green": [
              "runātāja",
              "Kustība",
              "iekšā",
              "pusi"
            ]
          },
          "example": {
            "green": [
              "Nāc iekšā",
              "herein",
              "iekšā",
              "Komm"
            ],
            "orange": [
              "herein"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "purple": [
              "hinein"
            ],
            "blue": [
              "hinein"
            ]
          },
          "lv": {
            "green": [
              "Ej iekšā"
            ],
            "purple": [
              "iekšā"
            ]
          }
        },
        {
          "de": {
            "green": [
              "herein"
            ],
            "blue": [
              "herein",
              "Komm"
            ]
          },
          "lv": {
            "green": [
              "Nāc iekšā"
            ],
            "purple": [
              "iekšā"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "hinein"
            ],
            "blue": [
              "hinein",
              "geht",
              "Haus"
            ]
          },
          "lv": {
            "purple": [
              "ieiet",
              "mājā"
            ]
          }
        },
        {
          "de": {
            "green": [
              "herein"
            ],
            "blue": [
              "herein",
              "Kommen",
              "bitte"
            ]
          },
          "lv": {
            "green": [
              "Nāciet iekšā"
            ],
            "purple": [
              "nāciet",
              "iekšā",
              "lūdzu"
            ]
          }
        },
        {
          "de": {
            "purple": [
              "hinein"
            ],
            "blue": [
              "hinein",
              "Buch"
            ]
          },
          "lv": {
            "purple": [
              "grāmatu",
              "ieliec",
              "iekšā"
            ]
          }
        },
        {
          "de": {
            "green": [
              "herein"
            ],
            "blue": [
              "herein",
              "darf",
              "Hund"
            ]
          },
          "lv": {
            "purple": [
              "drīkst",
              "iekšā",
              "nākt",
              "suns"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Iekšā prom"
            ],
            "purple": [
              "iekšā",
              "prom"
            ]
          },
          "de": {
            "purple": [
              "hinein"
            ],
            "blue": [
              "hinein"
            ]
          },
          "meaning": {
            "green": [
              "Iekšā prom"
            ],
            "orange": [
              "virziens iekšā prom"
            ],
            "purple": [
              "virziens",
              "iekšā",
              "prom"
            ]
          },
          "describes": {
            "purple": [
              "iekšieni",
              "došanos"
            ]
          },
          "example": {
            "purple": [
              "hinein"
            ],
            "blue": [
              "hinein"
            ]
          },
          "translation": {
            "green": [
              "Ej iekšā"
            ],
            "purple": [
              "iekšā"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "iekšā šurp"
            ],
            "orange": [
              "iekšā",
              "šurp"
            ]
          },
          "de": {
            "green": [
              "herein"
            ],
            "green": [
              "herein"
            ]
          },
          "meaning": {
            "purple": [
              "virziens iekšā pie runātāja"
            ],
            "purple": [
              "runātāja",
              "virziens",
              "iekšā"
            ]
          },
          "describes": {
            "purple": [
              "ienākšanu",
              "manis"
            ]
          },
          "example": {
            "green": [
              "herein"
            ],
            "green": [
              "herein",
              "Komm"
            ]
          },
          "translation": {
            "green": [
              "Nāc iekšā"
            ],
            "purple": [
              "iekšā"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ielikt iekšā"
            ],
            "green": [
              "ielikt",
              "iekšā"
            ]
          },
          "de": {
            "green": [
              "hineinlegen"
            ]
          },
          "meaning": {
            "purple": [
              "ielikt kaut kur iekšā"
            ],
            "purple": [
              "ielikt",
              "iekšā",
              "kaut"
            ]
          },
          "describes": {
            "purple": [
              "iekšieni",
              "kustību"
            ]
          },
          "example": {
            "purple": [
              "hinein"
            ],
            "yellow": [
              "hinein"
            ]
          },
          "translation": {
            "green": [
              "Ieliec to iekšā"
            ],
            "purple": [
              "ieliec",
              "iekšā"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "ienākt iekšā"
            ],
            "yellow": [
              "ienākt",
              "iekšā"
            ]
          },
          "de": {
            "green": [
              "hereinkommen"
            ]
          },
          "meaning": {
            "purple": [
              "ienākt pie runātāja"
            ],
            "purple": [
              "runātāja",
              "ienākt"
            ]
          },
          "describes": {
            "purple": [
              "kustību",
              "telpu",
              "esmu"
            ]
          },
          "example": {
            "green": [
              "herein"
            ],
            "red": [
              "herein",
              "Kommen"
            ]
          },
          "translation": {
            "green": [
              "Nāciet iekšā"
            ],
            "purple": [
              "nāciet",
              "iekšā"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "green": [
            "Iekšā prom"
          ],
          "orange": [
            "herein"
          ],
          "purple": [
            "hinein"
          ],
          "yellow": [
            "cilvēks",
            "herein",
            "dodas",
            "iekšā",
            "lieto",
            "telpā",
            "kāds",
            "prom"
          ]
        },
        "rightItems": [
          {
            "de": {
              "purple": [
                "hinein"
              ],
              "blue": [
                "hinein"
              ]
            },
            "lv": {
              "green": [
                "Ej iekšā"
              ],
              "purple": [
                "iekšā"
              ]
            }
          },
          {
            "de": {
              "green": [
                "herein"
              ],
              "blue": [
                "herein",
                "komm"
              ]
            },
            "lv": {
              "green": [
                "Nāc iekšā"
              ],
              "purple": [
                "iekšā"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Ej iekšā"
          ],
          "purple": [
            "hinein"
          ],
          "yellow": [
            "hinein",
            "iekšā"
          ]
        },
        {
          "green": [
            "Nāc iekšā"
          ],
          "orange": [
            "herein"
          ],
          "yellow": [
            "herein",
            "iekšā",
            "Komm"
          ]
        },
        {
          "orange": [
            "herein"
          ],
          "yellow": [
            "runātāja",
            "cilvēks",
            "herein",
            "iekšā",
            "lieto"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "hinein"
          ],
          "red": [
            "labākais",
            "cilvēks",
            "hinein",
            "telpā",
            "tevis",
            "Komm"
          ]
        },
        {
          "orange": [
            "herein"
          ],
          "purple": [
            "hinein"
          ],
          "red": [
            "atšķirīgs",
            "virziens",
            "herein",
            "hinein",
            "iekšā"
          ]
        }
      ],
      "remember": [
        {
          "green": [
            "Iekšā prom"
          ],
          "purple": [
            "hinein"
          ],
          "yellow": [
            "hinein",
            "iekšā",
            "prom"
          ]
        },
        {
          "yellow": [
            "Iekšā šurp",
            "herein",
            "iekšā",
            "šurp"
          ],
          "orange": [
            "herein"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "purple": [
              "hinein"
            ],
            "red": [
              "hinein",
              "Komm"
            ]
          },
          "right": {
            "orange": [
              "herein"
            ],
            "green": [
              "herein",
              "Komm"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "Iekšā prom • Iekšā šurp",
        "compare-hinein-herein",
        "comparisonStudy",
        "atšķirīgs",
        "piemēram",
        "runātāja",
        "runātāju",
        "virziens",
        "herein",
        "hinein",
        "Iekšā",
        "telpā",
        "vietu",
        "kādu",
        "pret",
        "prom",
        "pusi",
        "šurp"
      ],
      "green": [
        "Ieliec to iekšā",
        "Nāciet iekšā",
        "Iekšā prom",
        "Nāc iekšā",
        "Ej iekšā",
        "compare"
      ],
      "yellow": [
        "hineinlegen",
        "Iekšā šurp"
      ],
      "orange": [
        "virziens iekšā pie runātāja",
        "ielikt kaut kur iekšā",
        "ienākt pie runātāja",
        "virziens iekšā prom",
        "herein"
      ],
      "purple": [
        "ielikt iekšā",
        "ienākt iekšā",
        "hinein"
      ],
      "red": [
        "hinein • herein",
        "hereinkommen"
      ]
    }
  },
  "compare-egal-gleich": {
    "sectionAccents": {
      "lead": {
        "blue": [
          "gleich"
        ],
        "green": [
          "Vienalga"
        ],
        "yellow": [
          "Vienāds"
        ],
        "orange": [
          "egal"
        ],
        "red": [
          "Tūlīt"
        ],
        "purple": [
          "vienalga",
          "nozīmēt",
          "vienāds",
          "gleich",
          "tūlīt",
          "egal"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Vienalga"
            ],
            "purple": [
              "vienalga"
            ]
          },
          "de": {
            "green": [
              "egal"
            ],
            "blue": [
              "egal"
            ]
          },
          "description": {
            "orange": [
              "nav svarīgi"
            ],
            "blue": [
              "atšķirības",
              "svarīgi"
            ]
          },
          "example": {
            "green": [
              "Man tas ir vienalga",
              "Vienalga"
            ],
            "orange": [
              "egal"
            ],
            "blue": [
              "vienalga",
              "egal"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "vienāds"
            ],
            "purple": [
              "vienāds / tūlīt"
            ],
            "red": [
              "Tūlīt"
            ],
            "orange": [
              "vienāds",
              "tūlīt"
            ]
          },
          "de": {
            "green": [
              "gleich"
            ],
            "green": [
              "gleich"
            ]
          },
          "description": {
            "yellow": [
              "Vienāds"
            ],
            "red": [
              "Tūlīt"
            ],
            "green": [
              "nozīmēt",
              "vienāds",
              "tūlīt"
            ]
          },
          "example": {
            "green": [
              "gleich"
            ],
            "green": [
              "Krāsas ir vienādas",
              "vienādas",
              "Farben",
              "gleich",
              "Krāsas"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "egal"
            ],
            "blue": [
              "egal"
            ]
          },
          "lv": {
            "green": [
              "Man tas ir vienalga",
              "Vienalga"
            ],
            "purple": [
              "vienalga"
            ]
          }
        },
        {
          "de": {
            "green": [
              "beiden",
              "Farben",
              "gleich"
            ]
          },
          "lv": {
            "green": [
              "Krāsas ir vienādas"
            ],
            "purple": [
              "vienādas",
              "krāsas",
              "abas"
            ]
          }
        },
        {
          "de": {
            "green": [
              "gleich",
              "komme"
            ]
          },
          "lv": {
            "purple": [
              "es tūlīt nāku",
              "tūlīt"
            ],
            "purple": [
              "tūlīt",
              "nāku"
            ]
          }
        },
        {
          "de": {
            "green": [
              "egal"
            ],
            "blue": [
              "egal"
            ]
          },
          "lv": {
            "green": [
              "Vienalga"
            ],
            "purple": [
              "vienalga"
            ]
          }
        },
        {
          "de": {
            "green": [
              "gleiche",
              "Tasche"
            ]
          },
          "lv": {
            "purple": [
              "vienāda",
              "soma"
            ]
          }
        },
        {
          "de": {
            "green": [
              "beginnt",
              "gleich",
              "Film"
            ]
          },
          "lv": {
            "purple": [
              "tūlīt"
            ],
            "purple": [
              "sāksies",
              "filma",
              "tūlīt"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Vienalga"
            ],
            "purple": [
              "vienalga"
            ]
          },
          "de": {
            "green": [
              "egal"
            ],
            "blue": [
              "egal"
            ]
          },
          "meaning": {
            "purple": [
              "nav svarīgi"
            ],
            "purple": [
              "svarīgi"
            ]
          },
          "describes": {
            "purple": [
              "attieksmi",
              "izvēli",
              "pret"
            ]
          },
          "example": {
            "green": [
              "egal"
            ],
            "blue": [
              "egal"
            ]
          },
          "translation": {
            "green": [
              "Man tas ir vienalga",
              "Vienalga"
            ],
            "purple": [
              "vienalga"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "vienāds"
            ],
            "orange": [
              "vienāds"
            ]
          },
          "de": {
            "green": [
              "gleich"
            ],
            "green": [
              "gleich"
            ]
          },
          "meaning": {
            "purple": [
              "tāds pats"
            ],
            "purple": [
              "pats",
              "tāds"
            ]
          },
          "describes": {
            "purple": [
              "salīdzinājumu"
            ]
          },
          "example": {
            "green": [
              "gleich"
            ],
            "green": [
              "Farben",
              "gleich"
            ]
          },
          "translation": {
            "green": [
              "Krāsas ir vienādas"
            ],
            "purple": [
              "vienādas",
              "krāsas"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "tūlīt"
            ],
            "green": [
              "tūlīt"
            ]
          },
          "de": {
            "green": [
              "gleich"
            ],
            "yellow": [
              "gleich"
            ]
          },
          "meaning": {
            "green": [
              "drīz"
            ],
            "orange": [
              "drīz / tūlīt"
            ],
            "red": [
              "Tūlīt"
            ],
            "purple": [
              "tūlīt",
              "drīz"
            ]
          },
          "describes": {
            "purple": [
              "laiku"
            ]
          },
          "example": {
            "green": [
              "gleich"
            ],
            "yellow": [
              "gleich",
              "komme"
            ]
          },
          "translation": {
            "purple": [
              "es tūlīt nāku",
              "tūlīt"
            ],
            "purple": [
              "tūlīt",
              "nāku"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "tas pats"
            ],
            "yellow": [
              "pats"
            ]
          },
          "de": {
            "green": [
              "derselbe"
            ]
          },
          "meaning": {
            "purple": [
              "tas pats konkrētais"
            ],
            "purple": [
              "konkrētais",
              "tas pats",
              "pats"
            ]
          },
          "describes": {
            "purple": [
              "identitāti"
            ]
          },
          "example": {
            "green": [
              "derselbe",
              "Mann"
            ]
          },
          "translation": {
            "green": [
              "Tas ir tas pats vīrietis"
            ],
            "purple": [
              "tas pats",
              "vīrietis",
              "pats"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "gleich"
          ],
          "green": [
            "Vienalga"
          ],
          "yellow": [
            "vienalga",
            "Vienāds",
            "gleich",
            "lieto",
            "tūlīt",
            "doma",
            "egal"
          ],
          "orange": [
            "egal"
          ],
          "red": [
            "Tūlīt"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "egal"
              ],
              "blue": [
                "egal"
              ]
            },
            "lv": {
              "green": [
                "Vienalga"
              ],
              "purple": [
                "vienalga"
              ]
            }
          },
          {
            "de": {
              "green": [
                "gleich"
              ]
            },
            "lv": {
              "purple": [
                "vienāds"
              ],
              "purple": [
                "vienāds / tūlīt",
                "vienāds",
                "tūlīt"
              ],
              "red": [
                "Tūlīt"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Man tas ir vienalga",
            "Vienalga"
          ],
          "orange": [
            "egal"
          ],
          "yellow": [
            "vienalga",
            "egal"
          ]
        },
        {
          "blue": [
            "gleich"
          ],
          "green": [
            "Krāsas ir vienādas"
          ],
          "yellow": [
            "vienādas",
            "Farben",
            "gleich",
            "Krāsas"
          ]
        },
        {
          "blue": [
            "gleich"
          ],
          "red": [
            "Es tūlīt nāku",
            "Tūlīt"
          ],
          "yellow": [
            "gleich",
            "komme",
            "tūlīt",
            "nāku"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "gleich"
          ],
          "green": [
            "Vienalga"
          ],
          "red": [
            "vienalga",
            "pareizi",
            "gleich",
            "doma"
          ]
        },
        {
          "blue": [
            "gleich"
          ],
          "yellow": [
            "Vienāds"
          ],
          "red": [
            "nozīmes",
            "vienāds",
            "biežas",
            "gleich",
            "divas",
            "Tūlīt"
          ]
        }
      ],
      "remember": [
        {
          "green": [
            "Vienalga"
          ],
          "orange": [
            "egal"
          ],
          "yellow": [
            "vienalga",
            "egal"
          ]
        },
        {
          "blue": [
            "gleich"
          ],
          "yellow": [
            "Vienāds",
            "gleich",
            "tūlīt"
          ],
          "purple": [
            "vienāds / tūlīt"
          ],
          "red": [
            "Tūlīt"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "blue": [
              "gleich"
            ],
            "red": [
              "gleich"
            ]
          },
          "right": {
            "orange": [
              "egal"
            ],
            "green": [
              "egal"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "Vienalga • Vienāds / Tūlīt",
        "compare-egal-gleich",
        "comparisonStudy",
        "sarunvalodā",
        "salīdzina",
        "Vienalga",
        "nozīmēt",
        "svarīgi",
        "Vienāds",
        "gleich",
        "lietas",
        "īpaši",
        "lieto",
        "Tūlīt",
        "vārdi",
        "drīz",
        "egal",
        "kaut"
      ],
      "green": [
        "Tas ir tas pats vīrietis",
        "compare-egal-gleich",
        "Man tas ir vienalga",
        "Krāsas ir vienādas",
        "Vienalga",
        "drīz"
      ],
      "yellow": [
        "compare",
        "Vienāds"
      ],
      "orange": [
        "tas pats konkrētais",
        "drīz / tūlīt",
        "nav svarīgi",
        "tāds pats",
        "egal"
      ],
      "purple": [
        "vienāds / tūlīt",
        "egal • gleich",
        "tas pats"
      ],
      "red": [
        "Es tūlīt nāku",
        "derselbe",
        "Tūlīt"
      ]
    }
  },
  "compare-eben-gerade-genau": {
    "sectionAccents": {
      "lead": {
        "blue": [
          "eben"
        ],
        "green": [
          "gerade"
        ],
        "yellow": [
          "genau"
        ],
        "purple": [
          "dažādas",
          "līdzīgi",
          "gerade",
          "reizēm",
          "genau",
          "izceļ",
          "tulko",
          "eben"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "purple": [
              "tikko"
            ],
            "green": [
              "nupat"
            ],
            "purple": [
              "tikko / nupat",
              "nupat",
              "tikko"
            ]
          },
          "de": {
            "green": [
              "eben"
            ]
          },
          "description": {
            "blue": [
              "līdzens",
              "reizēm",
              "nupat",
              "tieši",
              "Tikko"
            ],
            "green": [
              "nupat",
              "tieši"
            ]
          },
          "example": {
            "green": [
              "Tikko",
              "biju",
              "eben"
            ],
            "red": [
              "Es tikko tur biju"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "pašlaik"
            ],
            "purple": [
              "pašlaik / taisni"
            ],
            "red": [
              "taisni"
            ],
            "orange": [
              "pašlaik",
              "taisni"
            ]
          },
          "de": {
            "green": [
              "gerade"
            ]
          },
          "description": {
            "green": [
              "virzienā",
              "Pašlaik",
              "taisni",
              "tagad",
              "tieši"
            ],
            "yellow": [
              "Pašlaik"
            ],
            "orange": [
              "tieši tagad"
            ],
            "red": [
              "taisni"
            ]
          },
          "example": {
            "green": [
              "Es pašlaik esmu aizņemts",
              "beschäftigt",
              "aizņemts",
              "pašlaik",
              "gerade",
              "esmu"
            ],
            "yellow": [
              "Pašlaik"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "precīzi",
              "tieši"
            ],
            "purple": [
              "precīzi / tieši",
              "precīzi"
            ]
          },
          "de": {
            "green": [
              "genau"
            ]
          },
          "description": {
            "green": [
              "tieši"
            ],
            "purple": [
              "precīzi"
            ],
            "yellow": [
              "novirzes",
              "Precīzi",
              "tieši"
            ]
          },
          "example": {
            "green": [
              "Tas ir precīzi pareizi"
            ],
            "yellow": [
              "pareizi",
              "precīzi",
              "richtig",
              "genau"
            ],
            "purple": [
              "precīzi"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "eben"
            ]
          },
          "lv": {
            "purple": [
              "tikko"
            ],
            "red": [
              "Es tikko tur biju"
            ],
            "purple": [
              "tikko",
              "biju"
            ]
          }
        },
        {
          "de": {
            "green": [
              "gerade"
            ],
            "blue": [
              "beschäftigt",
              "gerade"
            ]
          },
          "lv": {
            "green": [
              "Es pašlaik esmu aizņemts"
            ],
            "yellow": [
              "Pašlaik"
            ],
            "purple": [
              "aizņemts",
              "pašlaik",
              "esmu"
            ]
          }
        },
        {
          "de": {
            "green": [
              "genau"
            ],
            "blue": [
              "richtig",
              "genau"
            ]
          },
          "lv": {
            "green": [
              "Tas ir precīzi pareizi"
            ],
            "purple": [
              "pareizi",
              "precīzi"
            ]
          }
        },
        {
          "de": {
            "green": [
              "geradeaus"
            ],
            "blue": [
              "geradeaus"
            ]
          },
          "lv": {
            "green": [
              "Ej taisni uz priekšu"
            ],
            "red": [
              "taisni"
            ],
            "purple": [
              "priekšu",
              "taisni"
            ]
          }
        },
        {
          "de": {
            "green": [
              "angerufen",
              "eben"
            ]
          },
          "lv": {
            "purple": [
              "tikko"
            ],
            "purple": [
              "piezvanīja",
              "tikko"
            ]
          }
        },
        {
          "de": {
            "green": [
              "genau"
            ],
            "blue": [
              "Genau"
            ]
          },
          "lv": {
            "green": [
              "tieši"
            ],
            "purple": [
              "domāju",
              "tieši"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "purple": [
              "tikko"
            ],
            "green": [
              "nupat"
            ],
            "purple": [
              "tikko / nupat",
              "nupat",
              "tikko"
            ]
          },
          "de": {
            "green": [
              "eben"
            ]
          },
          "meaning": {
            "purple": [
              "nesen noticis"
            ],
            "purple": [
              "noticis",
              "nesen"
            ]
          },
          "describes": {
            "purple": [
              "brīža",
              "laiku",
              "pirms"
            ]
          },
          "example": {
            "green": [
              "eben"
            ]
          },
          "translation": {
            "purple": [
              "tikko"
            ],
            "red": [
              "Es tikko tur biju"
            ],
            "purple": [
              "tikko",
              "biju"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "pašlaik"
            ],
            "orange": [
              "pašlaik"
            ]
          },
          "de": {
            "green": [
              "gerade"
            ]
          },
          "meaning": {
            "green": [
              "tieši"
            ],
            "orange": [
              "tieši tagad"
            ],
            "purple": [
              "tagad",
              "tieši"
            ]
          },
          "describes": {
            "purple": [
              "notiekošu",
              "brīdi"
            ]
          },
          "example": {
            "green": [
              "beschäftigt",
              "gerade"
            ]
          },
          "translation": {
            "green": [
              "Es pašlaik esmu aizņemts"
            ],
            "yellow": [
              "Pašlaik"
            ],
            "purple": [
              "aizņemts",
              "pašlaik",
              "esmu"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "taisni"
            ],
            "green": [
              "taisni"
            ]
          },
          "de": {
            "green": [
              "geradeaus"
            ]
          },
          "meaning": {
            "purple": [
              "taisnā virzienā"
            ],
            "purple": [
              "virzienā",
              "taisnā"
            ]
          },
          "describes": {
            "purple": [
              "virzienu"
            ]
          },
          "example": {
            "green": [
              "geradeaus"
            ]
          },
          "translation": {
            "green": [
              "Ej taisni uz priekšu"
            ],
            "red": [
              "taisni"
            ],
            "purple": [
              "priekšu",
              "taisni"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "precīzi"
            ],
            "yellow": [
              "precīzi"
            ]
          },
          "de": {
            "green": [
              "genau"
            ],
            "red": [
              "genau"
            ]
          },
          "meaning": {
            "green": [
              "tieši"
            ],
            "orange": [
              "tieši un precīzi"
            ],
            "purple": [
              "precīzi",
              "tieši"
            ]
          },
          "describes": {
            "purple": [
              "precizitāti"
            ]
          },
          "example": {
            "green": [
              "genau"
            ],
            "red": [
              "richtig",
              "genau"
            ]
          },
          "translation": {
            "green": [
              "Tas ir precīzi pareizi"
            ],
            "purple": [
              "pareizi",
              "precīzi"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "eben"
          ],
          "green": [
            "gerade"
          ],
          "yellow": [
            "Pašlaik",
            "precīzi",
            "gerade",
            "notika",
            "genau",
            "lieto",
            "doma",
            "kaut"
          ],
          "purple": [
            "precīzi"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "eben"
              ]
            },
            "lv": {
              "purple": [
                "tikko"
              ],
              "purple": [
                "tikko"
              ]
            }
          },
          {
            "de": {
              "green": [
                "gerade"
              ],
              "blue": [
                "gerade"
              ]
            },
            "lv": {
              "purple": [
                "pašlaik"
              ],
              "purple": [
                "pašlaik"
              ]
            }
          },
          {
            "de": {
              "green": [
                "genau"
              ],
              "blue": [
                "genau"
              ]
            },
            "lv": {
              "purple": [
                "precīzi"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "green": [
            "Es pašlaik esmu aizņemts",
            "gerade"
          ],
          "yellow": [
            "beschäftigt",
            "aizņemts",
            "Pašlaik",
            "gerade",
            "esmu"
          ]
        },
        {
          "green": [
            "Tas ir precīzi pareizi"
          ],
          "yellow": [
            "pareizi",
            "precīzi",
            "richtig",
            "genau"
          ],
          "purple": [
            "precīzi"
          ]
        },
        {
          "yellow": [
            "pareizais",
            "nozīmei",
            "Pašlaik",
            "genau",
            "vārds"
          ]
        }
      ],
      "important": [
        {
          "yellow": [
            "Pašlaik",
            "genau"
          ],
          "red": [
            "dabiski",
            "pašlaik",
            "genau",
            "tagad",
            "doma"
          ]
        },
        {
          "yellow": [
            "geradeaus"
          ],
          "red": [
            "geradeaus",
            "virziens",
            "priekšu",
            "taisni"
          ]
        },
        {
          "blue": [
            "eben"
          ],
          "red": [
            "kontekstos",
            "līdzens",
            "nozīmēt",
            "citos",
            "eben"
          ]
        }
      ],
      "remember": [
        {
          "blue": [
            "Tikko",
            "eben"
          ],
          "green": [
            "nupat"
          ],
          "purple": [
            "tikko / nupat"
          ],
          "yellow": [
            "nupat",
            "tikko",
            "eben"
          ]
        },
        {
          "green": [
            "gerade"
          ],
          "yellow": [
            "Pašlaik",
            "gerade",
            "taisni"
          ],
          "purple": [
            "pašlaik / taisni"
          ],
          "red": [
            "taisni"
          ]
        },
        {
          "yellow": [
            "precīzi",
            "genau"
          ],
          "purple": [
            "precīzi"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "yellow": [
              "genau"
            ],
            "red": [
              "genau",
              "tagad"
            ]
          },
          "right": {
            "green": [
              "gerade"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-eben-gerade-genau",
        "comparisonStudy",
        "dažādas",
        "līdzīgi",
        "nianses",
        "nozīmēt",
        "Pašlaik",
        "Precīzi",
        "gerade",
        "reizēm",
        "taisni",
        "genau",
        "izceļ",
        "nupat",
        "tieši",
        "Tikko",
        "tulko",
        "eben"
      ],
      "green": [
        "Es pašlaik esmu aizņemts",
        "Tas ir precīzi pareizi",
        "Ej taisni uz priekšu",
        "gerade",
        "nupat",
        "tieši"
      ],
      "yellow": [
        "nesen noticis",
        "geradeaus",
        "Pašlaik",
        "genau"
      ],
      "orange": [
        "eben • gerade • genau",
        "tieši un precīzi",
        "taisnā virzienā",
        "tieši tagad"
      ],
      "purple": [
        "pašlaik / taisni",
        "precīzi / tieši",
        "tikko / nupat",
        "compare",
        "Precīzi"
      ],
      "red": [
        "compare-eben-gerade-genau",
        "Es tikko tur biju",
        "taisni"
      ]
    }
  },
  "compare-ebenfalls-auch-ebenso": {
    "sectionAccents": {
      "lead": {
        "blue": [
          "auch"
        ],
        "green": [
          "ebenso",
          "Arī"
        ],
        "orange": [
          "ebenfalls"
        ],
        "purple": [
          "saistīties",
          "ebenfalls",
          "atšķiras",
          "ebenso",
          "nozīme",
          "stils",
          "visi"
        ]
      },
      "comparisonCards": [
        {
          "lv": {
            "green": [
              "Arī"
            ]
          },
          "de": {
            "green": [
              "auch"
            ]
          },
          "description": {
            "green": [
              "Arī"
            ],
            "blue": [
              "neitrālākais",
              "Visbiežākais"
            ]
          },
          "example": {
            "green": [
              "komme",
              "auch",
              "nāku"
            ],
            "green": [
              "Es arī nāku",
              "Arī"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Arī"
            ],
            "yellow": [
              "Tāpat"
            ],
            "purple": [
              "arī / tāpat"
            ],
            "orange": [
              "tāpat"
            ]
          },
          "de": {
            "green": [
              "ebenfalls"
            ],
            "green": [
              "ebenfalls"
            ]
          },
          "description": {
            "green": [
              "pieklājīgāks",
              "Formālāks",
              "tāpat",
              "Arī"
            ],
            "yellow": [
              "Tāpat"
            ],
            "purple": [
              "arī / tāpat"
            ]
          },
          "example": {
            "green": [
              "ebenfalls",
              "schönen",
              "wünsche",
              "novēlu",
              "Ihnen",
              "jauku",
              "Arī"
            ],
            "orange": [
              "ebenfalls"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "tāpat"
            ],
            "purple": [
              "tāpat / tieši tāpat"
            ],
            "red": [
              "Tieši tāpat"
            ],
            "green": [
              "tāpat",
              "tieši"
            ]
          },
          "de": {
            "green": [
              "ebenso"
            ],
            "yellow": [
              "ebenso"
            ]
          },
          "description": {
            "yellow": [
              "līdzību",
              "tikpat",
              "Uzsver",
              "Tāpat",
              "tieši"
            ],
            "purple": [
              "tikpat"
            ],
            "red": [
              "Tieši tāpat"
            ]
          },
          "example": {
            "green": [
              "Es to redzu tāpat",
              "ebenso"
            ],
            "yellow": [
              "ebenso",
              "redzu",
              "Tāpat",
              "sehe"
            ]
          }
        }
      ],
      "examples": [
        {
          "de": {
            "green": [
              "komme",
              "auch"
            ]
          },
          "lv": {
            "green": [
              "Es arī nāku",
              "Arī"
            ],
            "purple": [
              "nāku"
            ]
          }
        },
        {
          "de": {
            "green": [
              "ebenfalls"
            ],
            "blue": [
              "ebenfalls",
              "schönen",
              "wünsche",
              "Ihnen"
            ]
          },
          "lv": {
            "green": [
              "Arī"
            ],
            "purple": [
              "novēlu",
              "dienu",
              "jauku"
            ]
          }
        },
        {
          "de": {
            "green": [
              "ebenso"
            ],
            "blue": [
              "ebenso",
              "sehe"
            ]
          },
          "lv": {
            "green": [
              "Es to redzu tāpat"
            ],
            "yellow": [
              "Tāpat"
            ],
            "purple": [
              "redzu",
              "tāpat"
            ]
          }
        },
        {
          "de": {
            "green": [
              "ebenso"
            ],
            "blue": [
              "Bruder",
              "ebenso",
              "groß",
              "sein"
            ]
          },
          "lv": {
            "purple": [
              "brālis",
              "tikpat",
              "garš"
            ]
          }
        },
        {
          "de": {
            "green": [
              "arbeitet",
              "auch"
            ]
          },
          "lv": {
            "green": [
              "Arī"
            ],
            "purple": [
              "strādā",
              "šeit"
            ]
          }
        },
        {
          "de": {
            "green": [
              "ebenfalls"
            ],
            "blue": [
              "ebenfalls",
              "Vielen",
              "Dank"
            ]
          },
          "lv": {
            "purple": [
              "tāpat"
            ],
            "purple": [
              "paldies",
              "liels",
              "tāpat"
            ]
          }
        }
      ],
      "comparisonTable": [
        {
          "lv": {
            "green": [
              "Arī"
            ]
          },
          "de": {
            "green": [
              "auch"
            ]
          },
          "meaning": {
            "green": [
              "Arī"
            ],
            "orange": [
              "vienkāršs “arī"
            ],
            "purple": [
              "vienkāršs"
            ]
          },
          "describes": {
            "purple": [
              "papildinājumu"
            ]
          },
          "example": {
            "green": [
              "komme",
              "auch"
            ]
          },
          "translation": {
            "green": [
              "Es arī nāku",
              "Arī"
            ],
            "purple": [
              "nāku"
            ]
          }
        },
        {
          "lv": {
            "green": [
              "Arī"
            ],
            "yellow": [
              "Tāpat"
            ],
            "purple": [
              "arī / tāpat"
            ],
            "orange": [
              "tāpat"
            ]
          },
          "de": {
            "green": [
              "ebenfalls"
            ],
            "green": [
              "ebenfalls"
            ]
          },
          "meaning": {
            "green": [
              "Arī"
            ],
            "yellow": [
              "formālāks arī"
            ],
            "purple": [
              "formālāks"
            ]
          },
          "describes": {
            "purple": [
              "papildinājumu",
              "pieklājīgu",
              "atbildi"
            ]
          },
          "example": {
            "green": [
              "ebenfalls"
            ],
            "green": [
              "ebenfalls",
              "schönen",
              "Ihnen"
            ]
          },
          "translation": {
            "green": [
              "Arī"
            ],
            "red": [
              "Jums arī jauku dienu"
            ],
            "purple": [
              "dienu",
              "jauku"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "tāpat"
            ],
            "green": [
              "tāpat"
            ]
          },
          "de": {
            "green": [
              "ebenso"
            ],
            "yellow": [
              "ebenso"
            ]
          },
          "meaning": {
            "purple": [
              "tādā pašā veidā"
            ],
            "purple": [
              "veidā",
              "pašā",
              "tādā"
            ]
          },
          "describes": {
            "purple": [
              "darbību",
              "līdzīgu",
              "uzskatu"
            ]
          },
          "example": {
            "green": [
              "ebenso"
            ],
            "yellow": [
              "ebenso",
              "sehe"
            ]
          },
          "translation": {
            "green": [
              "Es to redzu tāpat"
            ],
            "yellow": [
              "Tāpat"
            ],
            "purple": [
              "redzu",
              "tāpat"
            ]
          }
        },
        {
          "lv": {
            "purple": [
              "tikpat"
            ],
            "yellow": [
              "tikpat"
            ]
          },
          "de": {
            "green": [
              "ebenso"
            ],
            "red": [
              "ebenso ... wie",
              "ebenso"
            ]
          },
          "meaning": {
            "purple": [
              "tikpat ... kā"
            ],
            "purple": [
              "tikpat"
            ]
          },
          "describes": {
            "purple": [
              "salīdzinājumu"
            ]
          },
          "example": {
            "green": [
              "ebenso"
            ],
            "red": [
              "Bruder",
              "ebenso",
              "groß",
              "sein"
            ]
          },
          "translation": {
            "green": [
              "Viņš ir tikpat garš kā brālis"
            ],
            "purple": [
              "brālis",
              "tikpat",
              "garš"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "auch"
          ],
          "green": [
            "ebenso"
          ],
          "orange": [
            "ebenfalls"
          ],
          "purple": [
            "tikpat"
          ],
          "red": [
            "ebenso ... wie"
          ],
          "yellow": [
            "Salīdzināšanai",
            "Pieklājīgās",
            "ebenfalls",
            "atbildēs",
            "lieto",
            "labi"
          ]
        },
        "rightItems": [
          {
            "de": {
              "green": [
                "auch"
              ]
            },
            "lv": {
              "green": [
                "Arī"
              ]
            }
          },
          {
            "de": {
              "green": [
                "ebenfalls"
              ],
              "blue": [
                "ebenfalls"
              ]
            },
            "lv": {
              "green": [
                "Arī"
              ],
              "yellow": [
                "Tāpat"
              ],
              "purple": [
                "arī / tāpat",
                "tāpat"
              ]
            }
          },
          {
            "de": {
              "green": [
                "ebenso"
              ],
              "blue": [
                "ebenso"
              ]
            },
            "lv": {
              "purple": [
                "tāpat"
              ],
              "purple": [
                "tikpat",
                "tāpat",
                "tieši"
              ],
              "red": [
                "Tieši tāpat"
              ]
            }
          }
        ]
      },
      "importantComparison": [
        {
          "blue": [
            "auch"
          ],
          "green": [
            "Es arī nāku",
            "Arī"
          ],
          "yellow": [
            "komme",
            "nāku"
          ]
        },
        {
          "green": [
            "Arī"
          ],
          "orange": [
            "ebenfalls"
          ],
          "yellow": [
            "ebenfalls",
            "schönen",
            "wünsche",
            "novēlu",
            "dienu",
            "Ihnen",
            "jauku"
          ]
        },
        {
          "green": [
            "ebenso"
          ],
          "purple": [
            "tikpat"
          ],
          "yellow": [
            "brālis",
            "Bruder",
            "ebenso",
            "tikpat",
            "garš",
            "groß",
            "sein"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "auch"
          ],
          "red": [
            "kārtība",
            "pareiza",
            "wünsche",
            "Ihnen",
            "vārdu"
          ]
        },
        {
          "blue": [
            "auch"
          ],
          "orange": [
            "ebenfalls"
          ],
          "red": [
            "ebenfalls",
            "formālāk",
            "bieži",
            "nekā",
            "skan"
          ]
        },
        {
          "green": [
            "ebenso"
          ],
          "yellow": [
            "Tāpat"
          ],
          "purple": [
            "tikpat"
          ],
          "red": [
            "Tieši tāpat",
            "ebenso",
            "tikpat",
            "bieži",
            "tāpat",
            "tieši"
          ]
        }
      ],
      "remember": [
        {
          "blue": [
            "auch"
          ],
          "green": [
            "Arī"
          ]
        },
        {
          "green": [
            "Arī"
          ],
          "yellow": [
            "ebenfalls",
            "formāli",
            "biežāk",
            "Tāpat"
          ],
          "orange": [
            "ebenfalls"
          ],
          "purple": [
            "arī / tāpat"
          ]
        },
        {
          "green": [
            "ebenso"
          ],
          "yellow": [
            "ebenso",
            "tikpat",
            "Tāpat",
            "tieši"
          ],
          "purple": [
            "tāpat / tieši tāpat",
            "tikpat"
          ],
          "red": [
            "Tieši tāpat"
          ]
        }
      ],
      "mistakes": [
        {
          "wrong": {
            "blue": [
              "auch"
            ],
            "red": [
              "schönen",
              "wünsche",
              "Ihnen"
            ]
          },
          "right": {
            "orange": [
              "ebenfalls"
            ],
            "green": [
              "ebenfalls",
              "schönen",
              "wünsche",
              "Ihnen"
            ]
          },
          "note": {}
        }
      ]
    },
    "accents": {
      "blue": [
        "compare-ebenfalls-auch-ebenso",
        "Arī • Tāpat • Tieši tāpat",
        "comparisonStudy",
        "visparastākais",
        "pieklājīgāk",
        "saistīties",
        "ebenfalls",
        "atšķiras",
        "formālāk",
        "ebenso",
        "nozīme",
        "bieži",
        "stils",
        "Tāpat",
        "Tieši",
        "vārds",
        "auch",
        "skan",
        "visi"
      ],
      "green": [
        "Viņš ir tikpat garš kā brālis",
        "Es to redzu tāpat",
        "Es arī nāku",
        "ebenso",
        "Arī"
      ],
      "yellow": [
        "compare-ebenfalls-auch-ebenso",
        "formālāks arī",
        "Tāpat"
      ],
      "orange": [
        "tādā pašā veidā",
        "vienkāršs “arī",
        "tikpat ... kā",
        "ebenfalls"
      ],
      "purple": [
        "ebenfalls • auch • ebenso",
        "tāpat / tieši tāpat",
        "arī / tāpat",
        "tikpat"
      ],
      "red": [
        "Jums arī jauku dienu",
        "ebenso ... wie",
        "Tieši tāpat",
        "compare"
      ]
    }
  }
};

COMPARISON_STUDY_CARDS.forEach((card) => {
  const override = COMPARISON_STUDY_HIGHLIGHT_OVERRIDES[card.id];
  if (!override) return;
  card.study.sectionAccents = override.sectionAccents;
  card.study.accents = override.accents;
});
// END_COMPARISON_STUDY_HIGHLIGHT_OVERRIDES

window.COMPARISON_STUDY_CARDS = COMPARISON_STUDY_CARDS;
