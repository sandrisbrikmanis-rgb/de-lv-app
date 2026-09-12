# G2/A1 LRB LRB-098 — OWNER VIEW

**Batch:** LRB-098
**Rows:** 50/50
**Languages:** SR 25 + SV 25
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-12T20:07:15.890Z
**Source commit:** `5a4d4241f8122782da2d03508ce1795cdb9255c6`
**Branch:** `cursor/lrb-098-owner-review-pc2-3db2`
**Overrides SHA256:** `95a3b5ef691214c711ac858e9f37a8b9acdbba19cc8cfb7f874b4d9325f40676`

> OWNER approved overrides applied mechanically. All 50 LABOT. No Cursor linguistic analysis.

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB098-0001`
**Finding Stable ID:** `g2/a1/sr|oder|idx:459|study|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sr
**Card:** `oder|idx:459`
**Field / path:** `study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"Или • Или","study.explanation":"[\"Главна идеја: oder се користи кога избираме помеѓу две или повеќе опции.\",\"V latvijščini oder najpogosteje pomeni oboje.\",\"Ovo nije isto kao kada se postavlja indirektno pitanje.\",\"В разговори oder може да се появи и в края на изречението: Du kommst, oder?\"]","study.examples":"[{\"de\":\"Kaffee oder Tee?\",\"lv\":\"Кафе или чай?\"},{\"de\":\"Heute oder morgen?\",\"lv\":\"Днес или утре?\"},{\"de\":\"Willst du Pizza oder Salat?\",\"lv\":\"Искаш ли пица или салата?\"},{\"de\":\"Du kommst, oder?\",\"lv\":\"Ще дойдеш, нали?\"}]","study.comparison":"[{\"word\":\"oder\",\"meaning\":\"Или изберете\",\"example\":\"Кафа или чај?\"},{\"word\":\"ob\",\"meaning\":\"Или в косвен въпрос\",\"example\":\"Не знам да ли он долази.\"},{\"word\":\"und\",\"meaning\":\"И\",\"example\":\"Кафа и торта.\"},{\"word\":\"aber\",\"meaning\":\"Ampak.\",\"example\":\"Долазим, али касније.\"}]","study.tip":"{\"text\":\"Ne pozabite: izbirajte med → možnostmi naročila.\"}","study.important":"[\"Oder се използва за избор на: Kaffee oder Tee.\",\"Во индиректно прашање, „дали“ обично значи том.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"или","study.translation":"или","study.explanation":"[\"Главна идеја: oder се користи за избор између две или више могућности и значи или.\",\"Не треба га мешати са ob, које уводи зависно упитно питање.\",\"На крају реченице oder може значити зар не.\"]","study.examples":"[{\"de\":\"Kaffee oder Tee?\",\"lv\":\"Кафа или чај?\"},{\"de\":\"Heute oder morgen?\",\"lv\":\"Данас или сутра?\"},{\"de\":\"Willst du Pizza oder Salat?\",\"lv\":\"Желиш ли пицу или салату?\"},{\"de\":\"Du kommst, oder?\",\"lv\":\"Доћи ћеш, зар не?\"}]","study.comparison":"[{\"word\":\"oder\",\"meaning\":\"или при избору\",\"example\":\"Kaffee oder Tee? – Кафа или чај?\"},{\"word\":\"ob\",\"meaning\":\"да ли у зависном питању\",\"example\":\"Ich weiß nicht, ob er kommt. – Не знам да ли он долази.\"},{\"word\":\"und\",\"meaning\":\"и\",\"example\":\"Kaffee und Kuchen. – Кафа и колач.\"},{\"word\":\"aber\",\"meaning\":\"али\",\"example\":\"Ich komme, aber später. – Доћи ћу, али касније.\"}]","study.tip":"{\"text\":\"Избор између могућности → oder.\"}","study.important":"[\"oder се користи при избору: Kaffee oder Tee.\",\"У зависном питању српско да ли најчешће одговара немачком ob.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: oder: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "oder",
  "lv": "или",
  "level": "A1",
  "study": {
    "id": "a1-oder",
    "layout": "standardStudy",
    "translation": "или",
    "explanation": [
      "Главна идеја: oder се користи за избор између две или више могућности и значи или.",
      "Не треба га мешати са ob, које уводи зависно упитно питање.",
      "На крају реченице oder може значити зар не."
    ],
    "examples": [
      {
        "de": "Kaffee oder Tee?",
        "lv": "Кафа или чај?"
      },
      {
        "de": "Heute oder morgen?",
        "lv": "Данас или сутра?"
      },
      {
        "de": "Willst du Pizza oder Salat?",
        "lv": "Желиш ли пицу или салату?"
      },
      {
        "de": "Du kommst, oder?",
        "lv": "Доћи ћеш, зар не?"
      }
    ],
    "comparison": [
      {
        "word": "oder",
        "meaning": "или при избору",
        "example": "Kaffee oder Tee? – Кафа или чај?"
      },
      {
        "word": "ob",
        "meaning": "да ли у зависном питању",
        "example": "Ich weiß nicht, ob er kommt. – Не знам да ли он долази."
      },
      {
        "word": "und",
        "meaning": "и",
        "example": "Kaffee und Kuchen. – Кафа и колач."
      },
      {
        "word": "aber",
        "meaning": "али",
        "example": "Ich komme, aber später. – Доћи ћу, али касније."
      }
    ],
    "tip": {
      "text": "Избор између могућности → oder."
    },
    "important": [
      "oder се користи при избору: Kaffee oder Tee.",
      "У зависном питању српско да ли најчешће одговара немачком ob."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "oder",
  "lv": "Или • Или",
  "level": "A1",
  "study": {
    "id": "a1-oder",
    "layout": "standardStudy",
    "translation": "Или • Или",
    "explanation": [
      "Главна идеја: oder се користи кога избираме помеѓу две или повеќе опции.",
      "V latvijščini oder najpogosteje pomeni oboje.",
      "Ovo nije isto kao kada se postavlja indirektno pitanje.",
      "В разговори oder може да се появи и в края на изречението: Du kommst, oder?"
    ],
    "examples": [
      {
        "de": "Kaffee oder Tee?",
        "lv": "Кафе или чай?"
      },
      {
        "de": "Heute oder morgen?",
        "lv": "Днес или утре?"
      },
      {
        "de": "Willst du Pizza oder Salat?",
        "lv": "Искаш ли пица или салата?"
      },
      {
        "de": "Du kommst, oder?",
        "lv": "Ще дойдеш, нали?"
      }
    ],
    "comparison": [
      {
        "word": "oder",
        "meaning": "Или изберете",
        "example": "Кафа или чај?"
      },
      {
        "word": "ob",
        "meaning": "Или в косвен въпрос",
        "example": "Не знам да ли он долази."
      },
      {
        "word": "und",
        "meaning": "И",
        "example": "Кафа и торта."
      },
      {
        "word": "aber",
        "meaning": "Ampak.",
        "example": "Долазим, али касније."
      }
    ],
    "tip": {
      "text": "Ne pozabite: izbirajte med → možnostmi naročila."
    },
    "important": [
      "Oder се използва за избор на: Kaffee oder Tee.",
      "Во индиректно прашање, „дали“ обично значи том."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "oder",
          "Главна"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "oder"
            ],
            "yellow": [
              "Kaffee",
              "Tee"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "oder"
            ],
            "yellow": [
              "Pizza",
              "Salat"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "oder"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "oder"
            ]
          }
        },
        {
          "word": {
            "green": [
              "ob"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "ob"
            ]
          }
        },
        {
          "word": {
            "green": [
              "und"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "und"
            ]
          }
        },
        {
          "word": {
            "green": [
              "aber"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "aber"
            ]
          }
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {
          "blue": [
            "oder"
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 2

**Audit ID:** `LRB098-0002`
**Finding Stable ID:** `g2/a1/sr|schwimmen|idx:531|lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `schwimmen|idx:531`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Пливање","study.translation":"Пливање","study.explanation":"[\"Главна идеја: schwimmen значи пливање како движење или спорт.\",\"Schwimmen се користи кога се плива во вода користејќи пливачки движења.\",\"Кога станува збор за опуштање во вода или пливање, Баден често се користи.\",\"На ниво A1 е важно да се прави разлика: schwimmen = плуване, baden = къпане.\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"schwimmen\",\"meaning\":\"Пливањето како движење или спорт\",\"example\":\"Он врло добро плива.\"},{\"word\":\"baden\",\"meaning\":\"Пливај/биди во вода\",\"example\":\"Идем да пливам.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"Idi na plivanje\",\"example\":\"Идемо да пливамо.\"},{\"word\":\"duschen\",\"meaning\":\"Istuširaj se i pojedi sendvič.\",\"example\":\"Туширам се ујутру.\"}]","study.important":"[\"Швимен и Баден не се иста работа.\",\"На латвийски често казват „плуване“, но на немски трябва да проверите дали е движение или плуване.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"пливати","study.translation":"пливати","study.explanation":"[\"Главна идеја: schwimmen значи пливати као кретање кроз воду или као спорт.\",\"За купање и боравак у води често се користи baden.\",\"На нивоу A1 важно је разликовати schwimmen = пливати и baden = купати се.\"]","study.examples":"[{\"de\":\"Ich schwimme gern.\",\"lv\":\"Волим да пливам.\"},{\"de\":\"Er schwimmt sehr gut.\",\"lv\":\"Он плива веома добро.\"},{\"de\":\"Wir schwimmen im Schwimmbad.\",\"lv\":\"Пливамо у базену.\"},{\"de\":\"Ich gehe baden.\",\"lv\":\"Идем да се купам.\"}]","study.comparison":"[{\"word\":\"schwimmen\",\"meaning\":\"пливати као кретање или спорт\",\"example\":\"Er schwimmt sehr gut. – Он плива веома добро.\"},{\"word\":\"baden\",\"meaning\":\"купати се / боравити у води\",\"example\":\"Ich gehe baden. – Идем да се купам.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"ићи на пливање\",\"example\":\"Wir gehen schwimmen. – Идемо на пливање.\"},{\"word\":\"duschen\",\"meaning\":\"туширати се\",\"example\":\"Ich dusche morgens. – Туширам се ујутру.\"}]","study.tip":"{\"text\":\"Пливачки покрет → schwimmen; купање или одмор у води → baden.\"}","study.important":"[\"schwimmen и baden нису исто.\",\"Избор зависи од тога да ли је нагласак на пливању или на купању.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: schwimmen: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "schwimmen",
  "lv": "пливати",
  "level": "A1",
  "study": {
    "id": "a1-schwimmen",
    "layout": "standardStudy",
    "translation": "пливати",
    "explanation": [
      "Главна идеја: schwimmen значи пливати као кретање кроз воду или као спорт.",
      "За купање и боравак у води често се користи baden.",
      "На нивоу A1 важно је разликовати schwimmen = пливати и baden = купати се."
    ],
    "examples": [
      {
        "de": "Ich schwimme gern.",
        "lv": "Волим да пливам."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Он плива веома добро."
      },
      {
        "de": "Wir schwimmen im Schwimmbad.",
        "lv": "Пливамо у базену."
      },
      {
        "de": "Ich gehe baden.",
        "lv": "Идем да се купам."
      }
    ],
    "comparison": [
      {
        "word": "schwimmen",
        "meaning": "пливати као кретање или спорт",
        "example": "Er schwimmt sehr gut. – Он плива веома добро."
      },
      {
        "word": "baden",
        "meaning": "купати се / боравити у води",
        "example": "Ich gehe baden. – Идем да се купам."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "ићи на пливање",
        "example": "Wir gehen schwimmen. – Идемо на пливање."
      },
      {
        "word": "duschen",
        "meaning": "туширати се",
        "example": "Ich dusche morgens. – Туширам се ујутру."
      }
    ],
    "tip": {
      "text": "Пливачки покрет → schwimmen; купање или одмор у води → baden."
    },
    "important": [
      "schwimmen и baden нису исто.",
      "Избор зависи од тога да ли је нагласак на пливању или на купању."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "schwimmen",
  "lv": "Пливање",
  "level": "A1",
  "study": {
    "id": "a1-schwimmen",
    "layout": "standardStudy",
    "translation": "Пливање",
    "explanation": [
      "Главна идеја: schwimmen значи пливање како движење или спорт.",
      "Schwimmen се користи кога се плива во вода користејќи пливачки движења.",
      "Кога станува збор за опуштање во вода или пливање, Баден често се користи.",
      "На ниво A1 е важно да се прави разлика: schwimmen = плуване, baden = къпане."
    ],
    "examples": [
      {
        "de": "Ich schwimme gern.",
        "lv": "Обичам да плувам"
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Vrlo dobro pliva."
      },
      {
        "de": "Wir schwimmen im Schwimmbad.",
        "lv": "Ние плуваме в басейна."
      },
      {
        "de": "Ich gehe baden.",
        "lv": "Одам на пливање"
      }
    ],
    "comparison": [
      {
        "word": "schwimmen",
        "meaning": "Пливањето како движење или спорт",
        "example": "Он врло добро плива."
      },
      {
        "word": "baden",
        "meaning": "Пливај/биди во вода",
        "example": "Идем да пливам."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "Idi na plivanje",
        "example": "Идемо да пливамо."
      },
      {
        "word": "duschen",
        "meaning": "Istuširaj se i pojedi sendvič.",
        "example": "Туширам се ујутру."
      }
    ],
    "tip": {
      "text": "Запомнете: плуване движение → плуване • Релаксация във водата → плуване."
    },
    "important": [
      "Швимен и Баден не се иста работа.",
      "На латвийски често казват „плуване“, но на немски трябва да проверите дали е движение или плуване."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "schwimmen"
        ],
        "red": [
          "baden"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "schwimme"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "schwimmt"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "schwimmen"
            ],
            "green": [
              "Schwimmbad"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "baden"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "schwimmen"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "schwimmt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "baden"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "baden"
            ]
          }
        },
        {
          "word": {
            "green": [
              "schwimmen gehen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "schwimmen"
            ]
          }
        },
        {
          "word": {
            "green": [
              "duschen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "dusche"
            ]
          }
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 3

**Audit ID:** `LRB098-0003`
**Finding Stable ID:** `g2/a1/sr|sehen|idx:539|lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `sehen|idx:539`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Poglejmo","study.translation":"Poglejmo","study.explanation":"[\"Osnovna ideja: sehen znači vidjeti očima.\",\"Когато става въпрос за това, което очите възприемат, се използва сен.\",\"Съзнателното наблюдение често означава schauen или ansehen.\",\"Много често срещана фраза е Ich sehe dich. = Виждам те.\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"sehen\",\"meaning\":\"Poglejmo\",\"example\":\"Видим те.\"},{\"word\":\"schauen\",\"meaning\":\"Pogledaj\",\"example\":\"Гледам слику.\"},{\"word\":\"ansehen\",\"meaning\":\"Pregled/Recenzija\",\"example\":\"Гледам филм.\"},{\"word\":\"hören\",\"meaning\":\"Чуйте\",\"example\":\"Слушам музику.\"}]","study.important":"[\"Széchen ni isto kot Anshauen.\",\"Ich sehe dich = Виждам те • Ich schaue den Film = Гледам филм.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"видети","study.translation":"видети","study.explanation":"[\"Главна идеја: sehen значи видети, односно опазити нешто очима.\",\"За намерно гледање често се користе schauen или ansehen.\",\"Честа реченица је Ich sehe dich.\"]","study.examples":"[{\"de\":\"Ich sehe dich.\",\"lv\":\"Видим те.\"},{\"de\":\"Siehst du das Auto?\",\"lv\":\"Видиш ли ауто?\"},{\"de\":\"Ich sehe nichts.\",\"lv\":\"Не видим ништа.\"},{\"de\":\"Wir schauen einen Film.\",\"lv\":\"Гледамо филм.\"}]","study.comparison":"[{\"word\":\"sehen\",\"meaning\":\"видети\",\"example\":\"Ich sehe dich. – Видим те.\"},{\"word\":\"schauen\",\"meaning\":\"гледати\",\"example\":\"Ich schaue auf das Bild. – Гледам слику.\"},{\"word\":\"ansehen\",\"meaning\":\"погледати / гледати\",\"example\":\"Ich sehe mir den Film an. – Гледам филм.\"},{\"word\":\"hören\",\"meaning\":\"чути\",\"example\":\"Ich höre Musik. – Чујем музику.\"}]","study.tip":"{\"text\":\"Очи нешто опажају → sehen; намерно гледање → schauen/ansehen.\"}","study.important":"[\"sehen није исто што и anschauen.\",\"Ich sehe dich = Видим те; Ich schaue den Film = Гледам филм.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: sehen: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sehen",
  "lv": "видети",
  "level": "A1",
  "study": {
    "id": "a1-sehen",
    "layout": "standardStudy",
    "translation": "видети",
    "explanation": [
      "Главна идеја: sehen значи видети, односно опазити нешто очима.",
      "За намерно гледање често се користе schauen или ansehen.",
      "Честа реченица је Ich sehe dich."
    ],
    "examples": [
      {
        "de": "Ich sehe dich.",
        "lv": "Видим те."
      },
      {
        "de": "Siehst du das Auto?",
        "lv": "Видиш ли ауто?"
      },
      {
        "de": "Ich sehe nichts.",
        "lv": "Не видим ништа."
      },
      {
        "de": "Wir schauen einen Film.",
        "lv": "Гледамо филм."
      }
    ],
    "comparison": [
      {
        "word": "sehen",
        "meaning": "видети",
        "example": "Ich sehe dich. – Видим те."
      },
      {
        "word": "schauen",
        "meaning": "гледати",
        "example": "Ich schaue auf das Bild. – Гледам слику."
      },
      {
        "word": "ansehen",
        "meaning": "погледати / гледати",
        "example": "Ich sehe mir den Film an. – Гледам филм."
      },
      {
        "word": "hören",
        "meaning": "чути",
        "example": "Ich höre Musik. – Чујем музику."
      }
    ],
    "tip": {
      "text": "Очи нешто опажају → sehen; намерно гледање → schauen/ansehen."
    },
    "important": [
      "sehen није исто што и anschauen.",
      "Ich sehe dich = Видим те; Ich schaue den Film = Гледам филм."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sehen",
  "lv": "Poglejmo",
  "level": "A1",
  "study": {
    "id": "a1-sehen",
    "layout": "standardStudy",
    "translation": "Poglejmo",
    "explanation": [
      "Osnovna ideja: sehen znači vidjeti očima.",
      "Когато става въпрос за това, което очите възприемат, се използва сен.",
      "Съзнателното наблюдение често означава schauen или ansehen.",
      "Много често срещана фраза е Ich sehe dich. = Виждам те."
    ],
    "examples": [
      {
        "de": "Ich sehe dich.",
        "lv": "Те гледам"
      },
      {
        "de": "Siehst du das Auto?",
        "lv": "Виждате ли тази кола?"
      },
      {
        "de": "Ich sehe nichts.",
        "lv": "Ne vidim ništa"
      },
      {
        "de": "Wir schauen einen Film.",
        "lv": "Гледаме филм."
      }
    ],
    "comparison": [
      {
        "word": "sehen",
        "meaning": "Poglejmo",
        "example": "Видим те."
      },
      {
        "word": "schauen",
        "meaning": "Pogledaj",
        "example": "Гледам слику."
      },
      {
        "word": "ansehen",
        "meaning": "Pregled/Recenzija",
        "example": "Гледам филм."
      },
      {
        "word": "hören",
        "meaning": "Чуйте",
        "example": "Слушам музику."
      }
    ],
    "tip": {
      "text": "Zapomnite: očite doživljavat → sehen • Gladeajte sʺznatelʹno → schauen/ansehen."
    },
    "important": [
      "Széchen ni isto kot Anshauen.",
      "Ich sehe dich = Виждам те • Ich schaue den Film = Гледам филм."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sehen",
          "Ich sehe"
        ],
        "red": [
          "schauen",
          "ansehen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sehe"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Siehst"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sehe"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "schauen"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sehen"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "sehe"
            ]
          }
        },
        {
          "word": {
            "green": [
              "schauen"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "schaue"
            ]
          }
        },
        {
          "word": {
            "green": [
              "ansehen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "sehe",
              "an"
            ]
          }
        },
        {
          "word": {
            "green": [
              "hören"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "höre"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "sehen"
          ],
          "red": [
            "schauen",
            "ansehen"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "Széchen"
          ],
          "red": [
            "Széchen"
          ]
        },
        {
          "blue": [
            "sehe"
          ],
          "red": [
            "schaue"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 4

**Audit ID:** `LRB098-0004`
**Finding Stable ID:** `g2/a1/sr|sein|idx:542|lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `sein|idx:542`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Бъди","study.translation":"Бъди","study.explanation":"[\"Osnovna ideja: sein znači biti.\",\"Sein je jedan od najvažnijih njemačkih glagola.\",\"Na ravni A1 so še posebej pomembni obrazci ich bin, du bist, er ist in wir sind.\",\"Sein se također koristi u mnogim lokativnim ili karakterističnim rečenicama.\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"sein\",\"meaning\":\"Бъди\",\"example\":\"Ја сам овде.\"},{\"word\":\"haben\",\"meaning\":\"Имам\",\"example\":\"Имам време.\"},{\"word\":\"werden\",\"meaning\":\"Станете\",\"example\":\"Постајем уморан.\"},{\"word\":\"bleiben\",\"meaning\":\"Остани\",\"example\":\"Остајем овде.\"}]","study.important":"[\"Oblike sej je treba preučevati ločeno: bin, bist, ist, sind.\",\"Ich bin е „Аз съм“, а не „Аз съществувам“.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"бити","study.translation":"бити","study.explanation":"[\"Главна идеја: sein значи бити и један је од најважнијих немачких глагола.\",\"Важни облици на нивоу A1 су ich bin, du bist, er ist и wir sind.\",\"Користи се за идентитет, особине и место.\"]","study.examples":"[{\"de\":\"Ich bin hier.\",\"lv\":\"Ја сам овде.\"},{\"de\":\"Du bist müde.\",\"lv\":\"Уморан си.\"},{\"de\":\"Er ist Lehrer.\",\"lv\":\"Он је наставник.\"},{\"de\":\"Wir sind zu Hause.\",\"lv\":\"Ми смо код куће.\"}]","study.comparison":"[{\"word\":\"sein\",\"meaning\":\"бити\",\"example\":\"Ich bin hier. – Ја сам овде.\"},{\"word\":\"haben\",\"meaning\":\"имати\",\"example\":\"Ich habe Zeit. – Имам времена.\"},{\"word\":\"werden\",\"meaning\":\"постати\",\"example\":\"Ich werde müde. – Постајем уморан.\"},{\"word\":\"bleiben\",\"meaning\":\"остати\",\"example\":\"Ich bleibe hier. – Остајем овде.\"}]","study.tip":"{\"text\":\"Запамти облике bin, bist, ist и sind.\"}","study.important":"[\"Облике bin, bist, ist и sind треба научити посебно.\",\"Ich bin значи ја сам.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: sein: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sein",
  "lv": "бити",
  "level": "A1",
  "study": {
    "id": "a1-sein",
    "layout": "standardStudy",
    "translation": "бити",
    "explanation": [
      "Главна идеја: sein значи бити и један је од најважнијих немачких глагола.",
      "Важни облици на нивоу A1 су ich bin, du bist, er ist и wir sind.",
      "Користи се за идентитет, особине и место."
    ],
    "examples": [
      {
        "de": "Ich bin hier.",
        "lv": "Ја сам овде."
      },
      {
        "de": "Du bist müde.",
        "lv": "Уморан си."
      },
      {
        "de": "Er ist Lehrer.",
        "lv": "Он је наставник."
      },
      {
        "de": "Wir sind zu Hause.",
        "lv": "Ми смо код куће."
      }
    ],
    "comparison": [
      {
        "word": "sein",
        "meaning": "бити",
        "example": "Ich bin hier. – Ја сам овде."
      },
      {
        "word": "haben",
        "meaning": "имати",
        "example": "Ich habe Zeit. – Имам времена."
      },
      {
        "word": "werden",
        "meaning": "постати",
        "example": "Ich werde müde. – Постајем уморан."
      },
      {
        "word": "bleiben",
        "meaning": "остати",
        "example": "Ich bleibe hier. – Остајем овде."
      }
    ],
    "tip": {
      "text": "Запамти облике bin, bist, ist и sind."
    },
    "important": [
      "Облике bin, bist, ist и sind треба научити посебно.",
      "Ich bin значи ја сам."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sein",
  "lv": "Бъди",
  "level": "A1",
  "study": {
    "id": "a1-sein",
    "layout": "standardStudy",
    "translation": "Бъди",
    "explanation": [
      "Osnovna ideja: sein znači biti.",
      "Sein je jedan od najvažnijih njemačkih glagola.",
      "Na ravni A1 so še posebej pomembni obrazci ich bin, du bist, er ist in wir sind.",
      "Sein se također koristi u mnogim lokativnim ili karakterističnim rečenicama."
    ],
    "examples": [
      {
        "de": "Ich bin hier.",
        "lv": "Јас сум тука"
      },
      {
        "de": "Du bist müde.",
        "lv": "Уморен ли си"
      },
      {
        "de": "Er ist Lehrer.",
        "lv": "Тој е учител."
      },
      {
        "de": "Wir sind zu Hause.",
        "lv": "Прибрахме се"
      }
    ],
    "comparison": [
      {
        "word": "sein",
        "meaning": "Бъди",
        "example": "Ја сам овде."
      },
      {
        "word": "haben",
        "meaning": "Имам",
        "example": "Имам време."
      },
      {
        "word": "werden",
        "meaning": "Станете",
        "example": "Постајем уморан."
      },
      {
        "word": "bleiben",
        "meaning": "Остани",
        "example": "Остајем овде."
      }
    ],
    "tip": {
      "text": "Zapamtite: ič bin = âs • Du bist = ti."
    },
    "important": [
      "Oblike sej je treba preučevati ločeno: bin, bist, ist, sind.",
      "Ich bin е „Аз съм“, а не „Аз съществувам“."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sein",
          "ich bin",
          "du bist",
          "er ist",
          "wir sind"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "bin"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "bist"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ist"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sind"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sein"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "bin"
            ]
          }
        },
        {
          "word": {
            "green": [
              "haben"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "habe"
            ]
          }
        },
        {
          "word": {
            "green": [
              "werden"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "werde"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bleiben"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "bleibe"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Zapamtite",
            "Zapamtite"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "bin",
            "bist",
            "ist",
            "sind"
          ]
        },
        {
          "blue": [
            "Ich bin"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 5

**Audit ID:** `LRB098-0005`
**Finding Stable ID:** `g2/a1/sr|Seite|idx:544|lv; study.translation; study.explanation; study.examples.lv; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `Seite|idx:544`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Страница • Странично","study.translation":"Страница • Странично","study.explanation":"[\"Glavna ideja: die Seite može značiti stranicu iz knjige/dokumenta ili stranicu/stranicu nečega.\",\"Во книга, списание или веб-локација die Seite = страница (Seite 5 = страница 5).\",\"В пространствен смисъл die Seite = страна (auf der linken Seite = ляво).\",\"Фигуративно, die Seite може да значи и страна во конфликт или мисла (auf meiner Seite = од моја страна).\",\"Контекстът (книга/четене или позиция/връзка) разкрива правилното значение.\",\"И двете значения са в множествено число: die Seiten.\"]","study.examples.lv":null,"study.tip":"[\"Говорим за книга или четене → страница. Говори за позиция, посока или връзка → страна.\",\"Сайт X винаги е страница от книга, а не половината от нея.\"]","study.important":"[\"Die Seite = страница ИЛИ страна - одлучува контекстот.\",\"И двете значения са в множествено число: die Seiten.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"страница • страна","study.translation":"страница • страна","study.explanation":"[\"Главна идеја: die Seite може значити страницу у књизи или страну нечега.\",\"У пренесеном значењу може означавати и нечију страну у спору.\",\"Множина је die Seiten у свим овим значењима.\"]","study.examples":"[{\"de\":\"Schlagt die Seite zwanzig auf.\",\"lv\":\"Отворите двадесету страницу.\"},{\"de\":\"Auf der linken Seite ist ein Park.\",\"lv\":\"С леве стране је парк.\"},{\"de\":\"Die Webseite lädt langsam.\",\"lv\":\"Веб-страница се споро учитава.\"},{\"de\":\"Er steht auf meiner Seite.\",\"lv\":\"Он је на мојој страни.\"},{\"de\":\"Das Buch hat 200 Seiten.\",\"lv\":\"Књига има 200 страница.\"},{\"de\":\"Auf der anderen Seite der Straße.\",\"lv\":\"С друге стране улице.\"}]","study.tip":"[\"Књига или читање → страница; положај, смер или однос → страна.\",\"Seite X у књизи увек значи страницу X.\"]","study.important":"[\"die Seite = страница или страна; контекст одређује значење.\",\"Множина: die Seiten.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{}]}}
**Note:** OWNER approved override: Seite: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Seite",
  "de_article": "die",
  "de_plural": "die Seiten",
  "lv": "страница • страна",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "страница • страна",
    "explanation": [
      "Главна идеја: die Seite може значити страницу у књизи или страну нечега.",
      "У пренесеном значењу може означавати и нечију страну у спору.",
      "Множина је die Seiten у свим овим значењима."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Отворите двадесету страницу."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "С леве стране је парк."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Веб-страница се споро учитава."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "Он је на мојој страни."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Књига има 200 страница."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "С друге стране улице."
      }
    ],
    "tip": [
      "Књига или читање → страница; положај, смер или однос → страна.",
      "Seite X у књизи увек значи страницу X."
    ],
    "important": [
      "die Seite = страница или страна; контекст одређује значење.",
      "Множина: die Seiten."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Seite",
  "de_article": "die",
  "de_plural": "die Seiten",
  "lv": "Страница • Странично",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "Страница • Странично",
    "explanation": [
      "Glavna ideja: die Seite može značiti stranicu iz knjige/dokumenta ili stranicu/stranicu nečega.",
      "Во книга, списание или веб-локација die Seite = страница (Seite 5 = страница 5).",
      "В пространствен смисъл die Seite = страна (auf der linken Seite = ляво).",
      "Фигуративно, die Seite може да значи и страна во конфликт или мисла (auf meiner Seite = од моја страна).",
      "Контекстът (книга/четене или позиция/връзка) разкрива правилното значение.",
      "И двете значения са в множествено число: die Seiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Сврти на страницата дваесет."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Otlâvo e parkut."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Spletna stran se počasi nalaga."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "Na moji strani je."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Книгата има 200 страници."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "От другата страна на улицата."
      }
    ],
    "tip": [
      "Говорим за книга или четене → страница. Говори за позиция, посока или връзка → страна.",
      "Сайт X винаги е страница от книга, а не половината от нея."
    ],
    "important": [
      "Die Seite = страница ИЛИ страна - одлучува контекстот.",
      "И двете значения са в множествено число: die Seiten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "die Seite",
          "Seite"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Seite"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Seite"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Webseite"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Seite"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Seiten"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Seite"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {
          "blue": [
            "die Seiten"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 6

**Audit ID:** `LRB098-0006`
**Finding Stable ID:** `g2/a1/sr|sich|idx:547|lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `sich|idx:547`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Jaz • Jaz","study.translation":"Jaz • Jaz","study.explanation":"[\"Основна идея: sich показва, че действието се отнася до самия извършител.\",\"На латвийски често се превежда като себе си или себе си.\",\"Некои германски глаголи имаат sich како задолжителен дел, на пример sich waschen.\",\"На ниво A1 е важно да се отбележи: ich wasche mich, er wäscht sich.\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"sich\",\"meaning\":\"Јас/јас\",\"example\":\"Он се пере.\"},{\"word\":\"mich\",\"meaning\":\"Аз/аз в ич\",\"example\":\"Перем се.\"},{\"word\":\"dich\",\"meaning\":\"Ти/аз съм в настроение\",\"example\":\"Перешься.\"},{\"word\":\"ihn\",\"meaning\":\"На него\",\"example\":\"Видим га.\"}]","study.important":"[\"Sich не е самостоятелно съществително.\",\"В зависимост от лицето се променя: ich → mich, du → dich, er/sie/es → sich.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"себе • себи","study.translation":"себе • себи","study.explanation":"[\"Главна идеја: sich показује да се радња враћа на вршиоца радње.\",\"У српском му најчешће одговарају себе, себи или повратна речца се.\",\"Облик зависи од лица: ich → mich, du → dich, er/sie/es → sich.\"]","study.examples":"[{\"de\":\"Er wäscht sich.\",\"lv\":\"Он се пере.\"},{\"de\":\"Ich setze mich.\",\"lv\":\"Седам.\"},{\"de\":\"Sie freut sich.\",\"lv\":\"Она се радује.\"},{\"de\":\"Ich wasche das Auto.\",\"lv\":\"Перем ауто.\"}]","study.comparison":"[{\"word\":\"sich\",\"meaning\":\"себе / себи / се\",\"example\":\"Er wäscht sich. – Он се пере.\"},{\"word\":\"mich\",\"meaning\":\"себе уз ich\",\"example\":\"Ich wasche mich. – Ја се перем.\"},{\"word\":\"dich\",\"meaning\":\"себе уз du\",\"example\":\"Du wäschst dich. – Ти се переш.\"},{\"word\":\"ihn\",\"meaning\":\"њега\",\"example\":\"Ich sehe ihn. – Видим га.\"}]","study.tip":"{\"text\":\"Радња усмерена на вршиоца → sich/mich/dich.\"}","study.important":"[\"sich није самостална именица.\",\"Повратна заменица мења облик према лицу.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: sich: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sich",
  "lv": "себе • себи",
  "level": "A1",
  "study": {
    "id": "a1-sich",
    "layout": "standardStudy",
    "translation": "себе • себи",
    "explanation": [
      "Главна идеја: sich показује да се радња враћа на вршиоца радње.",
      "У српском му најчешће одговарају себе, себи или повратна речца се.",
      "Облик зависи од лица: ich → mich, du → dich, er/sie/es → sich."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "Он се пере."
      },
      {
        "de": "Ich setze mich.",
        "lv": "Седам."
      },
      {
        "de": "Sie freut sich.",
        "lv": "Она се радује."
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "Перем ауто."
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "себе / себи / се",
        "example": "Er wäscht sich. – Он се пере."
      },
      {
        "word": "mich",
        "meaning": "себе уз ich",
        "example": "Ich wasche mich. – Ја се перем."
      },
      {
        "word": "dich",
        "meaning": "себе уз du",
        "example": "Du wäschst dich. – Ти се переш."
      },
      {
        "word": "ihn",
        "meaning": "њега",
        "example": "Ich sehe ihn. – Видим га."
      }
    ],
    "tip": {
      "text": "Радња усмерена на вршиоца → sich/mich/dich."
    },
    "important": [
      "sich није самостална именица.",
      "Повратна заменица мења облик према лицу."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sich",
  "lv": "Jaz • Jaz",
  "level": "A1",
  "study": {
    "id": "a1-sich",
    "layout": "standardStudy",
    "translation": "Jaz • Jaz",
    "explanation": [
      "Основна идея: sich показва, че действието се отнася до самия извършител.",
      "На латвийски често се превежда като себе си или себе си.",
      "Некои германски глаголи имаат sich како задолжителен дел, на пример sich waschen.",
      "На ниво A1 е важно да се отбележи: ich wasche mich, er wäscht sich."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "Kopa se."
      },
      {
        "de": "Ich setze mich.",
        "lv": "Sedim."
      },
      {
        "de": "Sie freut sich.",
        "lv": "Тя е щастлива"
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "Си ја перам колата"
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "Јас/јас",
        "example": "Он се пере."
      },
      {
        "word": "mich",
        "meaning": "Аз/аз в ич",
        "example": "Перем се."
      },
      {
        "word": "dich",
        "meaning": "Ти/аз съм в настроение",
        "example": "Перешься."
      },
      {
        "word": "ihn",
        "meaning": "На него",
        "example": "Видим га."
      }
    ],
    "tip": {
      "text": "Запомнете: действие върху себе си → sich/mich/dich."
    },
    "important": [
      "Sich не е самостоятелно съществително.",
      "В зависимост от лицето се променя: ich → mich, du → dich, er/sie/es → sich."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sich",
          "ich wasche mich",
          "er wäscht sich"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "mich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "wasche"
            ],
            "yellow": [
              "Auto"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sich"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "sich"
            ]
          }
        },
        {
          "word": {
            "green": [
              "mich"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "mich"
            ]
          }
        },
        {
          "word": {
            "green": [
              "dich"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "dich"
            ]
          }
        },
        {
          "word": {
            "green": [
              "ihn"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "ihn"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "sich"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "sich"
          ]
        },
        {
          "green": [
            "mich",
            "dich"
          ],
          "blue": [
            "sich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 7

**Audit ID:** `LRB098-0007`
**Finding Stable ID:** `g2/a1/sr|sicher|idx:548|lv; study.explanation; study.examples[*].lv; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** sr
**Card:** `sicher|idx:548`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Безопасно • Разбира се","study.explanation":"[\"Основна идея: sicher като прилагателно означава уверен, като наречие – сигурно/вероятно.\",\"Когато говорим за място, ситуация или човек, sicher = безопасно (ein sicherer Ort = безопасно място).\",\"Като потвърждение или уверение в изречение sicher = разбира се/със сигурност (Das ist sicher wahr. = Вярно е, разбира се).\",\"Със сигурност! като отделен отговор означава разбира се!/вероятно!\"]","study.examples[*].lv":null,"study.tip":"[\"За място или ситуация (безопасност) → безопасно.\",\"Kao uvjerenje ili potvrda u rečenici → izvjesno/vjerovatno.\"]","study.important":"[\"Сихер = безбеден (придавка) ИЛИ сигурен/веројатен (прилог).\",\"Sich sicher sein = разбира се.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"сигуран • сигурно","study.translation":"сигуран • сигурно","study.explanation":"[\"Главна идеја: sicher као придев значи сигуран, а као прилог сигурно или вероватно.\",\"Може описивати безбедност, извесност или увереност.\",\"sich sicher sein значи бити сигуран или уверен.\"]","study.examples":"[{\"de\":\"Ist das Wasser sicher?\",\"lv\":\"Да ли је вода безбедна?\"},{\"de\":\"Kommst du morgen? – Sicher!\",\"lv\":\"Долазиш ли сутра? – Сигурно!\"},{\"de\":\"Er ist sicher zu Hause.\",\"lv\":\"Он је вероватно код куће.\"},{\"de\":\"Das ist eine sichere Lösung.\",\"lv\":\"То је сигурно решење.\"},{\"de\":\"Ich bin mir sicher.\",\"lv\":\"Сигуран сам.\"},{\"de\":\"Fahr sicher!\",\"lv\":\"Вози безбедно!\"}]","study.tip":"[\"Безбедност места или ситуације → сигуран/безбедан.\",\"Увереност или претпоставка → сигурно/вероватно.\"]","study.important":"[\"sicher може бити придев или прилог.\",\"sich sicher sein = бити сигуран.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{}]}}
**Note:** OWNER approved override: sicher: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sicher",
  "lv": "сигуран • сигурно",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "сигуран • сигурно",
    "explanation": [
      "Главна идеја: sicher као придев значи сигуран, а као прилог сигурно или вероватно.",
      "Може описивати безбедност, извесност или увереност.",
      "sich sicher sein значи бити сигуран или уверен."
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "Да ли је вода безбедна?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "Долазиш ли сутра? – Сигурно!"
      },
      {
        "de": "Er ist sicher zu Hause.",
        "lv": "Он је вероватно код куће."
      },
      {
        "de": "Das ist eine sichere Lösung.",
        "lv": "То је сигурно решење."
      },
      {
        "de": "Ich bin mir sicher.",
        "lv": "Сигуран сам."
      },
      {
        "de": "Fahr sicher!",
        "lv": "Вози безбедно!"
      }
    ],
    "tip": [
      "Безбедност места или ситуације → сигуран/безбедан.",
      "Увереност или претпоставка → сигурно/вероватно."
    ],
    "important": [
      "sicher може бити придев или прилог.",
      "sich sicher sein = бити сигуран."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sicher",
  "lv": "Безопасно • Разбира се",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "Безопасно • Разбира се",
    "explanation": [
      "Основна идея: sicher като прилагателно означава уверен, като наречие – сигурно/вероятно.",
      "Когато говорим за място, ситуация или човек, sicher = безопасно (ein sicherer Ort = безопасно място).",
      "Като потвърждение или уверение в изречение sicher = разбира се/със сигурност (Das ist sicher wahr. = Вярно е, разбира се).",
      "Със сигурност! като отделен отговор означава разбира се!/вероятно!"
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "Безопасна ли е водата?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "Утре ще дойдеш - със сигурност!"
      },
      {
        "de": "Er ist sicher zu Hause.",
        "lv": "Mora da je kod kuće."
      },
      {
        "de": "Das ist eine sichere Lösung.",
        "lv": "Това е безопасно решение."
      },
      {
        "de": "Ich bin mir sicher.",
        "lv": "Siguran sam"
      },
      {
        "de": "Fahr sicher!",
        "lv": "Шофирайте безопасно!"
      }
    ],
    "tip": [
      "За място или ситуация (безопасност) → безопасно.",
      "Kao uvjerenje ili potvrda u rečenici → izvjesno/vjerovatno."
    ],
    "important": [
      "Сихер = безбеден (придавка) ИЛИ сигурен/веројатен (прилог).",
      "Sich sicher sein = разбира се."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sicher"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sichere"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sicher"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {
          "green": [
            "sich sicher sein"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 8

**Audit ID:** `LRB098-0008`
**Finding Stable ID:** `g2/a1/sr|sie|idx:549|lv; study.explanation; study.examples[*].lv; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** sr
**Card:** `sie|idx:549`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Те/тя","study.explanation":"[\"Ključna ideja: Množina - govori se o više od jedne osobe. Glagolot se završava na -en: kočen, esen, gehen.\",\"Sie основно означава: една жена.\",\"Често се характеризира с: глагол в единствено число (-t).\",\"Sie v bistvu pomeni: več ljudi.\",\"Često je karakterističan: glagol u množini (-en).\",\"Sie основно означава: учтив адрес.\",\"Često se opisuje: uvijek sa glavnim S.\",\"Small sie означава тя, когато глаголът е в единствено число (Sie kocht = тя готви).\"]","study.examples[*].lv":null,"study.important":"[\"Učtivost se uvijek piše velikim slovom: Sie, a ne sie.\",\"She: Sie kocht. They: sie kochen. Ti: Si kochen.\",\"Неправилно: sie kocht → Правилно: Sie kocht\",\"Неточно: Sie kocht (тим) → Точно: Sie kochen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"они • оне","study.translation":"они • оне","study.explanation":"[\"Главна идеја: sie са малим почетним словом и глаголом у множини значи они или оне.\",\"Са глаголом у једнини може значити она, док је Sie са великим словом учтиво Ви.\",\"Глаголски облик и контекст показују значење.\"]","study.examples":"[{\"de\":\"Sie kochen.\",\"lv\":\"Они кувају.\"},{\"de\":\"Sie kocht.\",\"lv\":\"Она кува.\"},{\"de\":\"Sie isst.\",\"lv\":\"Она једе.\"},{\"de\":\"Sie kochen.\",\"lv\":\"Они кувају.\"},{\"de\":\"Sie spielen Fußball.\",\"lv\":\"Они играју фудбал.\"},{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Ви кувате, молим вас.\"}]","study.tip":"[\"Множинско sie обично стоји уз глагол који се завршава на -en.\",\"Провери велико слово, глаголски облик и контекст.\"]","study.important":"[\"Sie са великим словом је учтиво Ви.\",\"Она: sie kocht. Они/оне: sie kochen. Ви: Sie kochen.\",\"На почетку реченице велико слово само по себи није довољно; важни су глагол и контекст.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{},{}]}}
**Note:** OWNER approved override: sie: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sie",
  "lv": "они • оне",
  "level": "A1",
  "study": {
    "id": "a1-sie-study",
    "layout": "standardStudy",
    "translation": "они • оне",
    "explanation": [
      "Главна идеја: sie са малим почетним словом и глаголом у множини значи они или оне.",
      "Са глаголом у једнини може значити она, док је Sie са великим словом учтиво Ви.",
      "Глаголски облик и контекст показују значење."
    ],
    "examples": [
      {
        "de": "Sie kochen.",
        "lv": "Они кувају."
      },
      {
        "de": "Sie kocht.",
        "lv": "Она кува."
      },
      {
        "de": "Sie isst.",
        "lv": "Она једе."
      },
      {
        "de": "Sie kochen.",
        "lv": "Они кувају."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Они играју фудбал."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Ви кувате, молим вас."
      }
    ],
    "tip": [
      "Множинско sie обично стоји уз глагол који се завршава на -en.",
      "Провери велико слово, глаголски облик и контекст."
    ],
    "important": [
      "Sie са великим словом је учтиво Ви.",
      "Она: sie kocht. Они/оне: sie kochen. Ви: Sie kochen.",
      "На почетку реченице велико слово само по себи није довољно; важни су глагол и контекст."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sie",
  "lv": "Те/тя",
  "level": "A1",
  "study": {
    "id": "a1-sie-study",
    "layout": "standardStudy",
    "translation": "Те/тя",
    "explanation": [
      "Ključna ideja: Množina - govori se o više od jedne osobe. Glagolot se završava na -en: kočen, esen, gehen.",
      "Sie основно означава: една жена.",
      "Често се характеризира с: глагол в единствено число (-t).",
      "Sie v bistvu pomeni: več ljudi.",
      "Često je karakterističan: glagol u množini (-en).",
      "Sie основно означава: учтив адрес.",
      "Često se opisuje: uvijek sa glavnim S.",
      "Small sie означава тя, когато глаголът е в единствено число (Sie kocht = тя готви)."
    ],
    "examples": [
      {
        "de": "Sie kochen.",
        "lv": "Те се готвят."
      },
      {
        "de": "Sie kocht.",
        "lv": "Тя готви."
      },
      {
        "de": "Sie isst.",
        "lv": "Таа јаде"
      },
      {
        "de": "Sie kochen.",
        "lv": "Те се готвят."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Oni igraju fudbal."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Prosimo, pripravite ga"
      }
    ],
    "tip": [
      "Множина - се однесува на повеќе од една личност. Глаголот завршува на -ен: кочен, есен, гехен.",
      "Използвайте sie, когато контекстът съответства на това значение."
    ],
    "important": [
      "Učtivost se uvijek piše velikim slovom: Sie, a ne sie.",
      "She: Sie kocht. They: sie kochen. Ti: Si kochen.",
      "Неправилно: sie kocht → Правилно: Sie kocht",
      "Неточно: Sie kocht (тим) → Точно: Sie kochen."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "sie",
          "kocht"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "sie"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {}
      ],
      "important": [
        {
          "green": [
            "sie"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 9

**Audit ID:** `LRB098-0009`
**Finding Stable ID:** `g2/a1/sr|Sie|idx:550|lv; study.explanation; study.examples[*].lv; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** sr
**Card:** `Sie|idx:550`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Вие","study.explanation":"[\"Основна идея: Добре дошли – винаги с главна буква S. Latviski: вие. Често с глагол в множествено число.\",\"Sie основно означава: една жена.\",\"Често се характеризира с: глагол в единствено число (-t).\",\"Sie v bistvu pomeni: več ljudi.\",\"Često je karakterističan: glagol u množini (-en).\",\"Sie основно означава: учтив адрес.\",\"Često se opisuje: uvijek sa glavnim S.\",\"Small sie означава тя, когато глаголът е в единствено число (Sie kocht = тя готви).\"]","study.examples[*].lv":null,"study.tip":"[\"Обратният адрес винаги е с главна буква S. Latviski: ти. Често с глагол в множествено число.\",\"Използвайте Sie, когато контекстът съответства на това значение.\"]","study.important":"[\"Učtivost se uvijek piše velikim slovom: Sie, a ne sie.\",\"She: Sie kocht. They: sie kochen. Ti: Si kochen.\",\"Неправилно: sie kocht → Правилно: Sie kocht\",\"Неточно: Sie kocht (тим) → Точно: Sie kochen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ви","study.translation":"Ви","study.explanation":"[\"Главна идеја: Sie са великим почетним словом означава учтиво обраћање и значи Ви.\",\"Уз њега стоји глагол у облику множине.\",\"sie са малим словом може значити она или они/оне.\"]","study.examples":"[{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Ви кувате, молим вас.\"},{\"de\":\"Sie kocht.\",\"lv\":\"Она кува.\"},{\"de\":\"Sie isst.\",\"lv\":\"Она једе.\"},{\"de\":\"Sie kochen.\",\"lv\":\"Они кувају.\"},{\"de\":\"Sie spielen Fußball.\",\"lv\":\"Они играју фудбал.\"},{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Ви кувате, молим вас.\"}]","study.tip":"[\"Учтиво обраћање увек се пише Sie великим словом.\",\"Провери велико слово и глаголски облик.\"]","study.important":"[\"Учтиво обраћање је Sie, не sie.\",\"Она: sie kocht. Они/оне: sie kochen. Ви: Sie kochen.\",\"Учтиво Sie захтева глаголски облик множине.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{},{}]}}
**Note:** OWNER approved override: Sie: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Sie",
  "lv": "Ви",
  "level": "A1",
  "study": {
    "id": "a1-sie-study-2",
    "layout": "standardStudy",
    "translation": "Ви",
    "explanation": [
      "Главна идеја: Sie са великим почетним словом означава учтиво обраћање и значи Ви.",
      "Уз њега стоји глагол у облику множине.",
      "sie са малим словом може значити она или они/оне."
    ],
    "examples": [
      {
        "de": "Sie kochen, bitte.",
        "lv": "Ви кувате, молим вас."
      },
      {
        "de": "Sie kocht.",
        "lv": "Она кува."
      },
      {
        "de": "Sie isst.",
        "lv": "Она једе."
      },
      {
        "de": "Sie kochen.",
        "lv": "Они кувају."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Они играју фудбал."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Ви кувате, молим вас."
      }
    ],
    "tip": [
      "Учтиво обраћање увек се пише Sie великим словом.",
      "Провери велико слово и глаголски облик."
    ],
    "important": [
      "Учтиво обраћање је Sie, не sie.",
      "Она: sie kocht. Они/оне: sie kochen. Ви: Sie kochen.",
      "Учтиво Sie захтева глаголски облик множине."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Sie",
  "lv": "Вие",
  "level": "A1",
  "study": {
    "id": "a1-sie-study-2",
    "layout": "standardStudy",
    "translation": "Вие",
    "explanation": [
      "Основна идея: Добре дошли – винаги с главна буква S. Latviski: вие. Често с глагол в множествено число.",
      "Sie основно означава: една жена.",
      "Често се характеризира с: глагол в единствено число (-t).",
      "Sie v bistvu pomeni: več ljudi.",
      "Često je karakterističan: glagol u množini (-en).",
      "Sie основно означава: учтив адрес.",
      "Često se opisuje: uvijek sa glavnim S.",
      "Small sie означава тя, когато глаголът е в единствено число (Sie kocht = тя готви)."
    ],
    "examples": [
      {
        "de": "Sie kochen, bitte.",
        "lv": "Pripravite ga, prosim."
      },
      {
        "de": "Sie kocht.",
        "lv": "Тя готви."
      },
      {
        "de": "Sie isst.",
        "lv": "Таа јаде"
      },
      {
        "de": "Sie kochen.",
        "lv": "Те се готвят."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Oni igraju fudbal."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Prosimo, pripravite ga"
      }
    ],
    "tip": [
      "Обратният адрес винаги е с главна буква S. Latviski: ти. Често с глагол в множествено число.",
      "Използвайте Sie, когато контекстът съответства на това значение."
    ],
    "important": [
      "Učtivost se uvijek piše velikim slovom: Sie, a ne sie.",
      "She: Sie kocht. They: sie kochen. Ti: Si kochen.",
      "Неправилно: sie kocht → Правилно: Sie kocht",
      "Неточно: Sie kocht (тим) → Точно: Sie kochen."
    ],
    "sectionAccents": {
      "explanation": {
        "yellow": [
          "Sie",
          "kocht"
        ]
      },
      "examples": [
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {}
      ],
      "important": [
        {
          "yellow": [
            "Sie"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 10

**Audit ID:** `LRB098-0010`
**Finding Stable ID:** `g2/a1/sr|sitzen|idx:558|lv; study.explanation; study.examples[*].lv; study.comparison; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** sr
**Card:** `sitzen|idx:558`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Sedi","study.explanation":"[\"Glavna ideja: sitzen pomeni sedeti.\",\"Sitzen се користи за да се однесува на седечка личност или животно.\",\"Понякога sitzen също означава да бъдеш на определено място, но в A1 основното значение е да седиш.\",\"Важно е да се прави разлика: sitzen = седя, stehen = стоя, liegen = лягам.\"]","study.examples[*].lv":null,"study.comparison":"[{\"word\":\"sitzen\",\"meaning\":\"Sedi\",\"example\":\"Седим за столом.\"},{\"word\":\"stehen\",\"meaning\":\"Стойка\",\"example\":\"Он стоји на врата.\"},{\"word\":\"liegen\",\"meaning\":\"Спи/легни\",\"example\":\"Мачка лежи тамо.\"},{\"word\":\"setzen\",\"meaning\":\"Седна/седна\",\"example\":\"Седам.\"}]","study.important":"[\"Sitzen показва състоянието \\\"седене\\\".\",\"Sedeti je sich setzen, ne sitzen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"седети","study.translation":"седети","study.explanation":"[\"Главна идеја: sitzen значи седети.\",\"Описује стање; sich setzen значи сести.\",\"Важно је разликовати sitzen, stehen и liegen.\"]","study.examples":"[{\"de\":\"Ich sitze am Tisch.\",\"lv\":\"Седим за столом.\"},{\"de\":\"Die Kinder sitzen im Bus.\",\"lv\":\"Деца седе у аутобусу.\"},{\"de\":\"Er steht an der Tür.\",\"lv\":\"Он стоји код врата.\"},{\"de\":\"Die Katze liegt auf dem Sofa.\",\"lv\":\"Мачка лежи на софи.\"}]","study.comparison":"[{\"word\":\"sitzen\",\"meaning\":\"седети\",\"example\":\"Ich sitze am Tisch. – Седим за столом.\"},{\"word\":\"stehen\",\"meaning\":\"стајати\",\"example\":\"Er steht an der Tür. – Он стоји код врата.\"},{\"word\":\"liegen\",\"meaning\":\"лежати / налазити се лежећи\",\"example\":\"Die Katze liegt dort. – Мачка лежи тамо.\"},{\"word\":\"setzen\",\"meaning\":\"сести / посадити\",\"example\":\"Ich setze mich. – Седам.\"}]","study.tip":"{\"text\":\"Седећи положај → sitzen; усправан → stehen; лежећи → liegen.\"}","study.important":"[\"sitzen описује стање седења.\",\"Сести је sich setzen, не sitzen.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: sitzen: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sitzen",
  "lv": "седети",
  "level": "A1",
  "study": {
    "id": "a1-sitzen",
    "layout": "standardStudy",
    "translation": "седети",
    "explanation": [
      "Главна идеја: sitzen значи седети.",
      "Описује стање; sich setzen значи сести.",
      "Важно је разликовати sitzen, stehen и liegen."
    ],
    "examples": [
      {
        "de": "Ich sitze am Tisch.",
        "lv": "Седим за столом."
      },
      {
        "de": "Die Kinder sitzen im Bus.",
        "lv": "Деца седе у аутобусу."
      },
      {
        "de": "Er steht an der Tür.",
        "lv": "Он стоји код врата."
      },
      {
        "de": "Die Katze liegt auf dem Sofa.",
        "lv": "Мачка лежи на софи."
      }
    ],
    "comparison": [
      {
        "word": "sitzen",
        "meaning": "седети",
        "example": "Ich sitze am Tisch. – Седим за столом."
      },
      {
        "word": "stehen",
        "meaning": "стајати",
        "example": "Er steht an der Tür. – Он стоји код врата."
      },
      {
        "word": "liegen",
        "meaning": "лежати / налазити се лежећи",
        "example": "Die Katze liegt dort. – Мачка лежи тамо."
      },
      {
        "word": "setzen",
        "meaning": "сести / посадити",
        "example": "Ich setze mich. – Седам."
      }
    ],
    "tip": {
      "text": "Седећи положај → sitzen; усправан → stehen; лежећи → liegen."
    },
    "important": [
      "sitzen описује стање седења.",
      "Сести је sich setzen, не sitzen."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sitzen",
  "lv": "Sedi",
  "level": "A1",
  "study": {
    "id": "a1-sitzen",
    "layout": "standardStudy",
    "translation": "Sedi",
    "explanation": [
      "Glavna ideja: sitzen pomeni sedeti.",
      "Sitzen се користи за да се однесува на седечка личност или животно.",
      "Понякога sitzen също означава да бъдеш на определено място, но в A1 основното значение е да седиш.",
      "Важно е да се прави разлика: sitzen = седя, stehen = стоя, liegen = лягам."
    ],
    "examples": [
      {
        "de": "Ich sitze am Tisch.",
        "lv": "Аз седя на масата."
      },
      {
        "de": "Die Kinder sitzen im Bus.",
        "lv": "Во автобусот седат деца."
      },
      {
        "de": "Er steht an der Tür.",
        "lv": "Той стои на вратата."
      },
      {
        "de": "Die Katze liegt auf dem Sofa.",
        "lv": "Котката спи на дивана."
      }
    ],
    "comparison": [
      {
        "word": "sitzen",
        "meaning": "Sedi",
        "example": "Седим за столом."
      },
      {
        "word": "stehen",
        "meaning": "Стойка",
        "example": "Он стоји на врата."
      },
      {
        "word": "liegen",
        "meaning": "Спи/легни",
        "example": "Мачка лежи тамо."
      },
      {
        "word": "setzen",
        "meaning": "Седна/седна",
        "example": "Седам."
      }
    ],
    "tip": {
      "text": "Запомнете: седнете → седнете • Стойте → Стивън • Легнете → лъжете."
    },
    "important": [
      "Sitzen показва състоянието \"седене\".",
      "Sedeti je sich setzen, ne sitzen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sitzen"
        ],
        "red": [
          "stehen",
          "liegen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sitze"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sitzen"
            ],
            "green": [
              "Kinder"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "steht"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "liegt"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sitzen"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "sitze"
            ]
          }
        },
        {
          "word": {
            "green": [
              "stehen"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "steht"
            ]
          }
        },
        {
          "word": {
            "green": [
              "liegen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "liegt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "setzen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "setze"
            ]
          }
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {
          "blue": [
            "sitzen"
          ]
        },
        {
          "green": [
            "sich setzen"
          ],
          "blue": [
            "sitzen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 11

**Audit ID:** `LRB098-0011`
**Finding Stable ID:** `g2/a1/sr|sollen|idx:564|lv; study.explanation; study.examples[*].lv; study.comparison; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** sr
**Card:** `sollen|idx:564`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Mora","study.explanation":"[\"Основна идея: Sollen означава, че някой трябва или е задължен да направи нещо според указанията.\",\"Солен често се користи кога некој друг ви кажува што да правите.\",\"Не е толкова силен, колкото мусена.\",\"Много често срещана фраза: Was soll ich machen? = Какво трябва да направя?\"]","study.examples[*].lv":null,"study.comparison":"[{\"word\":\"sollen\",\"meaning\":\"Трябва/трябва да се направи според указанията\",\"example\":\"Шта да правим?\"},{\"word\":\"müssen\",\"meaning\":\"Апсолутно неопходно\",\"example\":\"Морам да идем.\"},{\"word\":\"können\",\"meaning\":\"Бидете во можност да\",\"example\":\"Могу да дођем.\"},{\"word\":\"wollen\",\"meaning\":\"Искам\",\"example\":\"Желим да останем.\"}]","study.important":"[\"Ali je soll ich machen? to je zelo pogosta fraza.\",\"Солен и Мусен не са едно и също нещо.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"требати","study.translation":"требати","study.explanation":"[\"Главна идеја: sollen значи да неко треба нешто да уради по упутству, савету или очекивању.\",\"Често преноси шта је неко други рекао да треба урадити.\",\"müssen изражава јачу нужност.\"]","study.examples":"[{\"de\":\"Was soll ich machen?\",\"lv\":\"Шта треба да радим?\"},{\"de\":\"Du sollst kommen.\",\"lv\":\"Треба да дођеш.\"},{\"de\":\"Ich soll zu Hause bleiben.\",\"lv\":\"Треба да останем код куће.\"},{\"de\":\"Ich muss jetzt gehen.\",\"lv\":\"Сада морам да идем.\"}]","study.comparison":"[{\"word\":\"sollen\",\"meaning\":\"требати по упутству или савету\",\"example\":\"Was soll ich machen? – Шта треба да радим?\"},{\"word\":\"müssen\",\"meaning\":\"морати\",\"example\":\"Ich muss gehen. – Морам да идем.\"},{\"word\":\"können\",\"meaning\":\"моћи\",\"example\":\"Ich kann kommen. – Могу да дођем.\"},{\"word\":\"wollen\",\"meaning\":\"хтети\",\"example\":\"Ich will bleiben. – Хоћу да останем.\"}]","study.tip":"{\"text\":\"Неко одређује шта треба урадити → sollen; нужна обавеза → müssen.\"}","study.important":"[\"Was soll ich machen? је веома честа фраза.\",\"sollen и müssen нису потпуни синоними.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: sollen: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sollen",
  "lv": "требати",
  "level": "A1",
  "study": {
    "id": "a1-sollen",
    "layout": "standardStudy",
    "translation": "требати",
    "explanation": [
      "Главна идеја: sollen значи да неко треба нешто да уради по упутству, савету или очекивању.",
      "Често преноси шта је неко други рекао да треба урадити.",
      "müssen изражава јачу нужност."
    ],
    "examples": [
      {
        "de": "Was soll ich machen?",
        "lv": "Шта треба да радим?"
      },
      {
        "de": "Du sollst kommen.",
        "lv": "Треба да дођеш."
      },
      {
        "de": "Ich soll zu Hause bleiben.",
        "lv": "Треба да останем код куће."
      },
      {
        "de": "Ich muss jetzt gehen.",
        "lv": "Сада морам да идем."
      }
    ],
    "comparison": [
      {
        "word": "sollen",
        "meaning": "требати по упутству или савету",
        "example": "Was soll ich machen? – Шта треба да радим?"
      },
      {
        "word": "müssen",
        "meaning": "морати",
        "example": "Ich muss gehen. – Морам да идем."
      },
      {
        "word": "können",
        "meaning": "моћи",
        "example": "Ich kann kommen. – Могу да дођем."
      },
      {
        "word": "wollen",
        "meaning": "хтети",
        "example": "Ich will bleiben. – Хоћу да останем."
      }
    ],
    "tip": {
      "text": "Неко одређује шта треба урадити → sollen; нужна обавеза → müssen."
    },
    "important": [
      "Was soll ich machen? је веома честа фраза.",
      "sollen и müssen нису потпуни синоними."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "sollen",
  "lv": "Mora",
  "level": "A1",
  "study": {
    "id": "a1-sollen",
    "layout": "standardStudy",
    "translation": "Mora",
    "explanation": [
      "Основна идея: Sollen означава, че някой трябва или е задължен да направи нещо според указанията.",
      "Солен често се користи кога некој друг ви кажува што да правите.",
      "Не е толкова силен, колкото мусена.",
      "Много често срещана фраза: Was soll ich machen? = Какво трябва да направя?"
    ],
    "examples": [
      {
        "de": "Was soll ich machen?",
        "lv": "Šta da radim?"
      },
      {
        "de": "Du sollst kommen.",
        "lv": "Трябва да дойдеш"
      },
      {
        "de": "Ich soll zu Hause bleiben.",
        "lv": "Ще трябва да си остана вкъщи"
      },
      {
        "de": "Ich muss jetzt gehen.",
        "lv": "Трябва да тръгвам сега"
      }
    ],
    "comparison": [
      {
        "word": "sollen",
        "meaning": "Трябва/трябва да се направи според указанията",
        "example": "Шта да правим?"
      },
      {
        "word": "müssen",
        "meaning": "Апсолутно неопходно",
        "example": "Морам да идем."
      },
      {
        "word": "können",
        "meaning": "Бидете во можност да",
        "example": "Могу да дођем."
      },
      {
        "word": "wollen",
        "meaning": "Искам",
        "example": "Желим да останем."
      }
    ],
    "tip": {
      "text": "Запомнете: някой ви казва какво да правите → раздразнен • Трябва да направя → мусон."
    },
    "important": [
      "Ali je soll ich machen? to je zelo pogosta fraza.",
      "Солен и Мусен не са едно и също нещо."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sollen",
          "Was soll ich machen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "soll",
              "machen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sollst",
              "kommen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "soll",
              "bleiben"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "muss",
              "gehen"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sollen"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "soll"
            ]
          }
        },
        {
          "word": {
            "green": [
              "müssen"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "muss"
            ]
          }
        },
        {
          "word": {
            "green": [
              "können"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "kann"
            ]
          }
        },
        {
          "word": {
            "green": [
              "wollen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "will"
            ]
          }
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 12

**Audit ID:** `LRB098-0012`
**Finding Stable ID:** `g2/a1/sr|stehen|idx:576|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `stehen|idx:576`
**Field / path:** `lv, study.*`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Стойка","study.translation":"Стойка","study.explanation":"[\"Основна идея: stehen означава да стоиш или да стоиш.\",\"Za mučnyj ŝehen znači stajati.\",\"За обект stehen означава, че той стои или е на определено място.\",\"Важно е да се разликуваат: stehen = застане, sitzen = седи, liegen = легни.\"]","study.examples":"[{\"de\":\"Ich stehe an der Tür.\",\"lv\":\"Stojim na vratima.\"},{\"de\":\"Der Stuhl steht in der Küche.\",\"lv\":\"Столот е во кујната.\"},{\"de\":\"Er sitzt am Tisch.\",\"lv\":\"Той седи на масата.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Книгата е на маса.\"}]","study.comparison":"[{\"word\":\"stehen\",\"meaning\":\"Застанете / застанете\",\"example\":\"Стојим овде.\"},{\"word\":\"sitzen\",\"meaning\":\"Sedi\",\"example\":\"Он седи за столом.\"},{\"word\":\"liegen\",\"meaning\":\"Спи/легни\",\"example\":\"Књига лежи тамо.\"},{\"word\":\"stellen\",\"meaning\":\"Поставете вертикално\",\"example\":\"Стављам боцу.\"}]","study.tip":"{\"text\":\"Запомнете: изправен → Стивън • Седнал → седнал • Легнал → легнал.\"}","study.important":"[\"Стивън показва състоянието, а не действието на „потискането“.\",\"Да поставите обект вертикално е stelen, а не stehen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"стајати","study.translation":"стајати","study.explanation":"[\"Главна идеја: stehen значи стајати или налазити се усправно.\",\"За предмете описује усправан положај; stellen описује радњу постављања.\",\"Разликуј stehen, sitzen и liegen.\"]","study.examples":"[{\"de\":\"Ich stehe an der Tür.\",\"lv\":\"Стојим код врата.\"},{\"de\":\"Der Stuhl steht in der Küche.\",\"lv\":\"Столица стоји у кухињи.\"},{\"de\":\"Er sitzt am Tisch.\",\"lv\":\"Он седи за столом.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Књига лежи на столу.\"}]","study.comparison":"[{\"word\":\"stehen\",\"meaning\":\"стајати / бити усправно\",\"example\":\"Ich stehe hier. – Стојим овде.\"},{\"word\":\"sitzen\",\"meaning\":\"седети\",\"example\":\"Er sitzt am Tisch. – Он седи за столом.\"},{\"word\":\"liegen\",\"meaning\":\"лежати / бити положено\",\"example\":\"Das Buch liegt dort. – Књига лежи тамо.\"},{\"word\":\"stellen\",\"meaning\":\"поставити усправно\",\"example\":\"Ich stelle die Flasche hin. – Постављам флашу.\"}]","study.tip":"{\"text\":\"Усправно → stehen; седећи → sitzen; лежећи → liegen.\"}","study.important":"[\"stehen описује стање, не радњу постављања.\",\"Поставити предмет усправно је stellen.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: stehen: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "stehen",
  "lv": "стајати",
  "level": "A1",
  "study": {
    "id": "a1-stehen",
    "layout": "standardStudy",
    "translation": "стајати",
    "explanation": [
      "Главна идеја: stehen значи стајати или налазити се усправно.",
      "За предмете описује усправан положај; stellen описује радњу постављања.",
      "Разликуј stehen, sitzen и liegen."
    ],
    "examples": [
      {
        "de": "Ich stehe an der Tür.",
        "lv": "Стојим код врата."
      },
      {
        "de": "Der Stuhl steht in der Küche.",
        "lv": "Столица стоји у кухињи."
      },
      {
        "de": "Er sitzt am Tisch.",
        "lv": "Он седи за столом."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Књига лежи на столу."
      }
    ],
    "comparison": [
      {
        "word": "stehen",
        "meaning": "стајати / бити усправно",
        "example": "Ich stehe hier. – Стојим овде."
      },
      {
        "word": "sitzen",
        "meaning": "седети",
        "example": "Er sitzt am Tisch. – Он седи за столом."
      },
      {
        "word": "liegen",
        "meaning": "лежати / бити положено",
        "example": "Das Buch liegt dort. – Књига лежи тамо."
      },
      {
        "word": "stellen",
        "meaning": "поставити усправно",
        "example": "Ich stelle die Flasche hin. – Постављам флашу."
      }
    ],
    "tip": {
      "text": "Усправно → stehen; седећи → sitzen; лежећи → liegen."
    },
    "important": [
      "stehen описује стање, не радњу постављања.",
      "Поставити предмет усправно је stellen."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "stehen",
  "lv": "Стойка",
  "level": "A1",
  "study": {
    "id": "a1-stehen",
    "layout": "standardStudy",
    "translation": "Стойка",
    "explanation": [
      "Основна идея: stehen означава да стоиш или да стоиш.",
      "Za mučnyj ŝehen znači stajati.",
      "За обект stehen означава, че той стои или е на определено място.",
      "Важно е да се разликуваат: stehen = застане, sitzen = седи, liegen = легни."
    ],
    "examples": [
      {
        "de": "Ich stehe an der Tür.",
        "lv": "Stojim na vratima."
      },
      {
        "de": "Der Stuhl steht in der Küche.",
        "lv": "Столот е во кујната."
      },
      {
        "de": "Er sitzt am Tisch.",
        "lv": "Той седи на масата."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Книгата е на маса."
      }
    ],
    "comparison": [
      {
        "word": "stehen",
        "meaning": "Застанете / застанете",
        "example": "Стојим овде."
      },
      {
        "word": "sitzen",
        "meaning": "Sedi",
        "example": "Он седи за столом."
      },
      {
        "word": "liegen",
        "meaning": "Спи/легни",
        "example": "Књига лежи тамо."
      },
      {
        "word": "stellen",
        "meaning": "Поставете вертикално",
        "example": "Стављам боцу."
      }
    ],
    "tip": {
      "text": "Запомнете: изправен → Стивън • Седнал → седнал • Легнал → легнал."
    },
    "important": [
      "Стивън показва състоянието, а не действието на „потискането“.",
      "Да поставите обект вертикално е stelen, а не stehen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "stehen"
        ],
        "red": [
          "sitzen",
          "liegen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "stehe"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "steht"
            ],
            "yellow": [
              "Stuhl"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "sitzt"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "liegt"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "stehen"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "stehe"
            ]
          }
        },
        {
          "word": {
            "green": [
              "sitzen"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "sitzt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "liegen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "liegt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "stellen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "stelle"
            ]
          }
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {},
        {
          "green": [
            "stelen"
          ],
          "blue": [
            "stehen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 13

**Audit ID:** `LRB098-0013`
**Finding Stable ID:** `g2/a1/sr|über|idx:608|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `über|idx:608`
**Field / path:** `lv, study.*`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Още • За","study.translation":"Още • За","study.explanation":"[\"Клучна идеја: über значи „над“ или „близу“ во зависност од контекстот.\",\"Кога станува збор за локацијата, „uber“ често значи „горе“.\",\"Kada je u pitanju razgovor, tekst ili tema, über znači 'za'.\",\"В движението \\\"uber\\\" може да означава \\\"края\\\".\"]","study.examples":"[{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Iznad stola visi lampa.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Говорим за време.\"},{\"de\":\"Das Kind läuft über die Straße.\",\"lv\":\"Дете тича през улицата.\"},{\"de\":\"Ich freue mich über das Geschenk.\",\"lv\":\"Z darilom sem zadovoljna.\"}]","study.comparison":"[{\"word\":\"über\",\"meaning\":\"Над / над / преку\",\"example\":\"Ми причамо о времену.\"},{\"word\":\"auf\",\"meaning\":\"Na površini\",\"example\":\"Књига лежи на столу.\"},{\"word\":\"unter\",\"meaning\":\"Ispod\",\"example\":\"Торба је под столом.\"},{\"word\":\"von\",\"meaning\":\"Od/do nečesa iz nekega vira\",\"example\":\"Чујем од тебе.\"}]","study.tip":"{\"text\":\"Zapamtite: tema razgovora → über • Iznad stola → über.\"}","study.important":"[\"Über nije samo naziv za mjesto.\",\"Sprechen über означава „да говоря“.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"изнад • о","study.translation":"изнад • о","study.explanation":"[\"Главна идеја: über значи изнад, о или преко, зависно од контекста.\",\"За положај значи изнад, за тему разговора о, а при кретању може значити преко.\"]","study.examples":"[{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Лампа виси изнад стола.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Разговарамо о времену.\"},{\"de\":\"Das Kind läuft über die Straße.\",\"lv\":\"Дете трчи преко улице.\"},{\"de\":\"Ich freue mich über das Geschenk.\",\"lv\":\"Радујем се поклону.\"}]","study.comparison":"[{\"word\":\"über\",\"meaning\":\"изнад / о / преко\",\"example\":\"Wir sprechen über das Wetter. – Разговарамо о времену.\"},{\"word\":\"auf\",\"meaning\":\"на површини\",\"example\":\"Das Buch liegt auf dem Tisch. – Књига лежи на столу.\"},{\"word\":\"unter\",\"meaning\":\"испод\",\"example\":\"Die Tasche ist unter dem Tisch. – Торба је испод стола.\"},{\"word\":\"von\",\"meaning\":\"од / из неког извора\",\"example\":\"Ich höre von dir. – Добијам вести од тебе.\"}]","study.tip":"{\"text\":\"Тема разговора → über = о; виши положај → изнад.\"}","study.important":"[\"über није само реч за место.\",\"sprechen über значи разговарати о.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: über: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "über",
  "lv": "изнад • о",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "изнад • о",
    "explanation": [
      "Главна идеја: über значи изнад, о или преко, зависно од контекста.",
      "За положај значи изнад, за тему разговора о, а при кретању може значити преко."
    ],
    "examples": [
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Лампа виси изнад стола."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Разговарамо о времену."
      },
      {
        "de": "Das Kind läuft über die Straße.",
        "lv": "Дете трчи преко улице."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "Радујем се поклону."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "изнад / о / преко",
        "example": "Wir sprechen über das Wetter. – Разговарамо о времену."
      },
      {
        "word": "auf",
        "meaning": "на површини",
        "example": "Das Buch liegt auf dem Tisch. – Књига лежи на столу."
      },
      {
        "word": "unter",
        "meaning": "испод",
        "example": "Die Tasche ist unter dem Tisch. – Торба је испод стола."
      },
      {
        "word": "von",
        "meaning": "од / из неког извора",
        "example": "Ich höre von dir. – Добијам вести од тебе."
      }
    ],
    "tip": {
      "text": "Тема разговора → über = о; виши положај → изнад."
    },
    "important": [
      "über није само реч за место.",
      "sprechen über значи разговарати о."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "über",
  "lv": "Още • За",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "Още • За",
    "explanation": [
      "Клучна идеја: über значи „над“ или „близу“ во зависност од контекстот.",
      "Кога станува збор за локацијата, „uber“ често значи „горе“.",
      "Kada je u pitanju razgovor, tekst ili tema, über znači 'za'.",
      "В движението \"uber\" може да означава \"края\"."
    ],
    "examples": [
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Iznad stola visi lampa."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Говорим за време."
      },
      {
        "de": "Das Kind läuft über die Straße.",
        "lv": "Дете тича през улицата."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "Z darilom sem zadovoljna."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "Над / над / преку",
        "example": "Ми причамо о времену."
      },
      {
        "word": "auf",
        "meaning": "Na površini",
        "example": "Књига лежи на столу."
      },
      {
        "word": "unter",
        "meaning": "Ispod",
        "example": "Торба је под столом."
      },
      {
        "word": "von",
        "meaning": "Od/do nečesa iz nekega vira",
        "example": "Чујем од тебе."
      }
    ],
    "tip": {
      "text": "Zapamtite: tema razgovora → über • Iznad stola → über."
    },
    "important": [
      "Über nije samo naziv za mjesto.",
      "Sprechen über означава „да говоря“."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "über"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "über"
            ],
            "yellow": [
              "Tisch"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "über"
            ],
            "green": [
              "Wetter"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "über"
            ],
            "yellow": [
              "Straße"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "über"
            ],
            "yellow": [
              "Geschenk"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "über"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "über"
            ]
          }
        },
        {
          "word": {
            "green": [
              "auf"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "auf"
            ]
          }
        },
        {
          "word": {
            "green": [
              "unter"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "unter"
            ]
          }
        },
        {
          "word": {
            "green": [
              "von"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "von"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "über"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "über"
          ]
        },
        {
          "blue": [
            "sprechen über"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 14

**Audit ID:** `LRB098-0014`
**Finding Stable ID:** `g2/a1/sr|Uhr|idx:698|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** sr
**Card:** `Uhr|idx:698`
**Field / path:** `lv; study.*`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Ura","study.translation":"Ura","study.explanation":"[\"Основна идея: Часовник или ръчен часовник. А също и времето на часовника: Es ist acht Uhr.\",\"Die Uhr основно означава: устройство или време в часовник.\",\"Често се карактеризира со: одредено време.\",\"Die Uhr означава часовник - устройство или време в часовник (Es ist acht Uhr, meine Uhr).\"]","study.examples":"[{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Сега е осем часа.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Сега е осем часа.\"},{\"de\":\"Meine Uhr ist kaputt.\",\"lv\":\"Часовникът ми е счупен.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Това е осем.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Осем е (часа).\"},{\"de\":\"die Uhr\",\"lv\":\"Устройство/час на часовника • Di Zeit\"}]","study.tip":"[\"Ura ali zapestna ura. In tudi ura: Es ist acht Uhr.\",\"Uporabite die Uhr, ko kontekst ustreza temu pomenu.\"]","study.important":"[\"Die Uhr: uređaj (meine Uhr) ili vrijeme (acht Uhr).\",\"Die Uhr: provjerite kontekst prije upotrebe.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"сат","study.translation":"сат","study.explanation":"[\"Главна идеја: die Uhr значи сат као уређај или тачно време на сату.\",\"У Es ist acht Uhr означава време, а у meine Uhr ручни или други сат.\",\"die Zeit значи време као апстрактан појам.\"]","study.examples":"[{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Осам је сати.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Осам је сати.\"},{\"de\":\"Meine Uhr ist kaputt.\",\"lv\":\"Мој сат је покварен.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Осам је сати.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Осам је сати.\"},{\"de\":\"die Uhr\",\"lv\":\"сат као уређај или тачно време; die Zeit = време\"}]","study.tip":"[\"die Uhr може бити сат као уређај или ознака тачног времена.\",\"Изабери природан српски израз према контексту.\"]","study.important":"[\"У meine Uhr реч је о уређају, а у acht Uhr о тачном времену.\",\"die Zeit означава време као појам.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{}]}}
**Note:** OWNER approved override: Uhr: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Uhr",
  "de_article": "die",
  "de_plural": "die Uhren",
  "lv": "сат",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "сат",
    "explanation": [
      "Главна идеја: die Uhr значи сат као уређај или тачно време на сату.",
      "У Es ist acht Uhr означава време, а у meine Uhr ручни или други сат.",
      "die Zeit значи време као апстрактан појам."
    ],
    "examples": [
      {
        "de": "Es ist acht Uhr.",
        "lv": "Осам је сати."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Осам је сати."
      },
      {
        "de": "Meine Uhr ist kaputt.",
        "lv": "Мој сат је покварен."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Осам је сати."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Осам је сати."
      },
      {
        "de": "die Uhr",
        "lv": "сат као уређај или тачно време; die Zeit = време"
      }
    ],
    "tip": [
      "die Uhr може бити сат као уређај или ознака тачног времена.",
      "Изабери природан српски израз према контексту."
    ],
    "important": [
      "У meine Uhr реч је о уређају, а у acht Uhr о тачном времену.",
      "die Zeit означава време као појам."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Uhr",
  "de_article": "die",
  "de_plural": "die Uhren",
  "lv": "Ura",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "Ura",
    "explanation": [
      "Основна идея: Часовник или ръчен часовник. А също и времето на часовника: Es ist acht Uhr.",
      "Die Uhr основно означава: устройство или време в часовник.",
      "Често се карактеризира со: одредено време.",
      "Die Uhr означава часовник - устройство или време в часовник (Es ist acht Uhr, meine Uhr)."
    ],
    "examples": [
      {
        "de": "Es ist acht Uhr.",
        "lv": "Сега е осем часа."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Сега е осем часа."
      },
      {
        "de": "Meine Uhr ist kaputt.",
        "lv": "Часовникът ми е счупен."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Това е осем."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Осем е (часа)."
      },
      {
        "de": "die Uhr",
        "lv": "Устройство/час на часовника • Di Zeit"
      }
    ],
    "tip": [
      "Ura ali zapestna ura. In tudi ura: Es ist acht Uhr.",
      "Uporabite die Uhr, ko kontekst ustreza temu pomenu."
    ],
    "important": [
      "Die Uhr: uređaj (meine Uhr) ili vrijeme (acht Uhr).",
      "Die Uhr: provjerite kontekst prije upotrebe."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Uhr"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "die Uhr",
              "uhr"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {}
      ],
      "important": [
        {
          "blue": [
            "die Uhr"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 15

**Audit ID:** `LRB098-0015`
**Finding Stable ID:** `g2/a1/sr|um|idx:611|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `um|idx:611`
**Field / path:** `lv, study.*`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Околу • Часови","study.translation":"Околу • Часови","study.explanation":"[\"Ключова идея: \\\"mm\\\" много често означава \\\"часовник с време\\\" или \\\"около/около\\\" с място.\",\"С точно време хм означава час.\",\"Во однос на место, тоа значи „околу“ или „околу“.\",\"Във фразата em... zu помага да се изрази намерението: така че.\"]","study.examples":"[{\"de\":\"Ich komme um acht Uhr.\",\"lv\":\"Ще дойда в осем часа.\"},{\"de\":\"Wir sitzen um den Tisch.\",\"lv\":\"Сядаме около масата.\"},{\"de\":\"Er geht um die Ecke.\",\"lv\":\"Gre za vogal.\"},{\"de\":\"Ich lerne, um Deutsch zu sprechen.\",\"lv\":\"Учам да зборувам германски.\"}]","study.comparison":"[{\"word\":\"um\",\"meaning\":\"Вклучено/околу/до\",\"example\":\"Долазим у осам.\"},{\"word\":\"am\",\"meaning\":\"На ден/на\",\"example\":\"У понедељак долазим.\"},{\"word\":\"gegen\",\"meaning\":\"За времето/срещу\",\"example\":\"Долазим око осам.\"},{\"word\":\"für\",\"meaning\":\"За/в полза\",\"example\":\"То је за тебе.\"}]","study.tip":"{\"text\":\"Ne pozabite: um acht = osem ur.\"}","study.important":"[\"Hm, vrijeme je obično \\\"sati\\\".\",\"Hm... cu često znači \\\"da...\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"у • око","study.translation":"у • око","study.explanation":"[\"Главна идеја: um уз тачно време значи у, а у просторном значењу око.\",\"Конструкција um ... zu изражава сврху и често се преводи са да би.\"]","study.examples":"[{\"de\":\"Ich komme um acht Uhr.\",\"lv\":\"Долазим у осам сати.\"},{\"de\":\"Wir sitzen um den Tisch.\",\"lv\":\"Седимо око стола.\"},{\"de\":\"Er geht um die Ecke.\",\"lv\":\"Он иде око угла.\"},{\"de\":\"Ich lerne, um Deutsch zu sprechen.\",\"lv\":\"Учим да бих говорио немачки.\"}]","study.comparison":"[{\"word\":\"um\",\"meaning\":\"у / око / да би\",\"example\":\"Ich komme um acht. – Долазим у осам.\"},{\"word\":\"am\",\"meaning\":\"у / код\",\"example\":\"Am Montag komme ich. – Долазим у понедељак.\"},{\"word\":\"gegen\",\"meaning\":\"око / приближно\",\"example\":\"Ich komme gegen acht. – Долазим око осам.\"},{\"word\":\"für\",\"meaning\":\"за\",\"example\":\"Das ist für dich. – Ово је за тебе.\"}]","study.tip":"{\"text\":\"um acht = у осам.\"}","study.important":"[\"um уз тачно време најчешће значи у.\",\"um ... zu најчешће изражава сврху: да би.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: um: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "um",
  "lv": "у • око",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "у • око",
    "explanation": [
      "Главна идеја: um уз тачно време значи у, а у просторном значењу око.",
      "Конструкција um ... zu изражава сврху и често се преводи са да би."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "Долазим у осам сати."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "Седимо око стола."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "Он иде око угла."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "Учим да бих говорио немачки."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "у / око / да би",
        "example": "Ich komme um acht. – Долазим у осам."
      },
      {
        "word": "am",
        "meaning": "у / код",
        "example": "Am Montag komme ich. – Долазим у понедељак."
      },
      {
        "word": "gegen",
        "meaning": "око / приближно",
        "example": "Ich komme gegen acht. – Долазим око осам."
      },
      {
        "word": "für",
        "meaning": "за",
        "example": "Das ist für dich. – Ово је за тебе."
      }
    ],
    "tip": {
      "text": "um acht = у осам."
    },
    "important": [
      "um уз тачно време најчешће значи у.",
      "um ... zu најчешће изражава сврху: да би."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "um",
  "lv": "Околу • Часови",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "Околу • Часови",
    "explanation": [
      "Ключова идея: \"mm\" много често означава \"часовник с време\" или \"около/около\" с място.",
      "С точно време хм означава час.",
      "Во однос на место, тоа значи „околу“ или „околу“.",
      "Във фразата em... zu помага да се изрази намерението: така че."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "Ще дойда в осем часа."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "Сядаме около масата."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "Gre za vogal."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "Учам да зборувам германски."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "Вклучено/околу/до",
        "example": "Долазим у осам."
      },
      {
        "word": "am",
        "meaning": "На ден/на",
        "example": "У понедељак долазим."
      },
      {
        "word": "gegen",
        "meaning": "За времето/срещу",
        "example": "Долазим око осам."
      },
      {
        "word": "für",
        "meaning": "За/в полза",
        "example": "То је за тебе."
      }
    ],
    "tip": {
      "text": "Ne pozabite: um acht = osem ur."
    },
    "important": [
      "Hm, vrijeme je obično \"sati\".",
      "Hm... cu često znači \"da...\"."
    ],
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {
            "blue": [
              "um"
            ],
            "yellow": [
              "acht Uhr"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "um"
            ],
            "yellow": [
              "Tisch"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "um"
            ],
            "yellow": [
              "Ecke"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "um",
              "zu"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "um"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "um"
            ]
          }
        },
        {
          "word": {
            "green": [
              "am"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "Am"
            ]
          }
        },
        {
          "word": {
            "green": [
              "gegen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "gegen"
            ]
          }
        },
        {
          "word": {
            "green": [
              "für"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "für"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "um acht"
          ]
        }
      },
      "important": [
        {},
        {}
      ]
    }
  }
}
```

---

## Finding 16

**Audit ID:** `LRB098-0016`
**Finding Stable ID:** `g2/a1/sr|unter|idx:615|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `unter|idx:615`
**Field / path:** `lv, study.*`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Ispod","study.translation":"Ispod","study.explanation":"[\"Ključna ideja: unter znači \\\"ispod\\\" ili \\\"između\\\" ovisno o kontekstu.\",\"Ако има нешто под маса, стол или друг предмет, користете unter.\",\"Когато говорим за група хора, unter може да означава „между“.\",\"Тоа е спротивно на über кога станува збор за насоката нагоре/надолу.\"]","study.examples":"[{\"de\":\"Die Tasche ist unter dem Tisch.\",\"lv\":\"Чанта под масата.\"},{\"de\":\"Die Katze liegt unter dem Stuhl.\",\"lv\":\"Котката спи под стола.\"},{\"de\":\"Unter Freunden sagt man das so.\",\"lv\":\"Казват сред приятели.\"},{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Iznad stola visi lampa.\"}]","study.comparison":"[{\"word\":\"unter\",\"meaning\":\"Под/между\",\"example\":\"Торба је под столом.\"},{\"word\":\"über\",\"meaning\":\"Над/за\",\"example\":\"Лампа виси изнад стола.\"},{\"word\":\"zwischen\",\"meaning\":\"Между две неща\",\"example\":\"Између кућа.\"},{\"word\":\"auf\",\"meaning\":\"Na površini\",\"example\":\"На столу.\"}]","study.tip":"{\"text\":\"Запомнете: под масата → unter dem Tisch.\"}","study.important":"[\"Unter lahko pomeni tudi \\\"vmes\\\", zlasti z ljudmi ali skupinami.\",\"Unter и über често са противоположни по отношение на място.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"испод • међу","study.translation":"испод • међу","study.explanation":"[\"Главна идеја: unter значи испод или међу, зависно од контекста.\",\"У просторном значењу често је супротно од über.\",\"Уз групу људи може значити међу.\"]","study.examples":"[{\"de\":\"Die Tasche ist unter dem Tisch.\",\"lv\":\"Торба је испод стола.\"},{\"de\":\"Die Katze liegt unter dem Stuhl.\",\"lv\":\"Мачка лежи испод столице.\"},{\"de\":\"Unter Freunden sagt man das so.\",\"lv\":\"Међу пријатељима се тако каже.\"},{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Лампа виси изнад стола.\"}]","study.comparison":"[{\"word\":\"unter\",\"meaning\":\"испод / међу\",\"example\":\"Die Tasche ist unter dem Tisch. – Торба је испод стола.\"},{\"word\":\"über\",\"meaning\":\"изнад / о\",\"example\":\"Die Lampe hängt über dem Tisch. – Лампа виси изнад стола.\"},{\"word\":\"zwischen\",\"meaning\":\"између две ствари\",\"example\":\"Zwischen den Häusern. – Између кућа.\"},{\"word\":\"auf\",\"meaning\":\"на површини\",\"example\":\"Auf dem Tisch. – На столу.\"}]","study.tip":"{\"text\":\"Испод стола → unter dem Tisch.\"}","study.important":"[\"unter може значити и међу, нарочито уз људе или групе.\",\"unter и über су често супротности у просторном значењу.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: unter: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "unter",
  "lv": "испод • међу",
  "level": "A1",
  "study": {
    "id": "a1-unter",
    "layout": "standardStudy",
    "translation": "испод • међу",
    "explanation": [
      "Главна идеја: unter значи испод или међу, зависно од контекста.",
      "У просторном значењу често је супротно од über.",
      "Уз групу људи може значити међу."
    ],
    "examples": [
      {
        "de": "Die Tasche ist unter dem Tisch.",
        "lv": "Торба је испод стола."
      },
      {
        "de": "Die Katze liegt unter dem Stuhl.",
        "lv": "Мачка лежи испод столице."
      },
      {
        "de": "Unter Freunden sagt man das so.",
        "lv": "Међу пријатељима се тако каже."
      },
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Лампа виси изнад стола."
      }
    ],
    "comparison": [
      {
        "word": "unter",
        "meaning": "испод / међу",
        "example": "Die Tasche ist unter dem Tisch. – Торба је испод стола."
      },
      {
        "word": "über",
        "meaning": "изнад / о",
        "example": "Die Lampe hängt über dem Tisch. – Лампа виси изнад стола."
      },
      {
        "word": "zwischen",
        "meaning": "између две ствари",
        "example": "Zwischen den Häusern. – Између кућа."
      },
      {
        "word": "auf",
        "meaning": "на површини",
        "example": "Auf dem Tisch. – На столу."
      }
    ],
    "tip": {
      "text": "Испод стола → unter dem Tisch."
    },
    "important": [
      "unter може значити и међу, нарочито уз људе или групе.",
      "unter и über су често супротности у просторном значењу."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "unter",
  "lv": "Ispod",
  "level": "A1",
  "study": {
    "id": "a1-unter",
    "layout": "standardStudy",
    "translation": "Ispod",
    "explanation": [
      "Ključna ideja: unter znači \"ispod\" ili \"između\" ovisno o kontekstu.",
      "Ако има нешто под маса, стол или друг предмет, користете unter.",
      "Когато говорим за група хора, unter може да означава „между“.",
      "Тоа е спротивно на über кога станува збор за насоката нагоре/надолу."
    ],
    "examples": [
      {
        "de": "Die Tasche ist unter dem Tisch.",
        "lv": "Чанта под масата."
      },
      {
        "de": "Die Katze liegt unter dem Stuhl.",
        "lv": "Котката спи под стола."
      },
      {
        "de": "Unter Freunden sagt man das so.",
        "lv": "Казват сред приятели."
      },
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Iznad stola visi lampa."
      }
    ],
    "comparison": [
      {
        "word": "unter",
        "meaning": "Под/между",
        "example": "Торба је под столом."
      },
      {
        "word": "über",
        "meaning": "Над/за",
        "example": "Лампа виси изнад стола."
      },
      {
        "word": "zwischen",
        "meaning": "Между две неща",
        "example": "Између кућа."
      },
      {
        "word": "auf",
        "meaning": "Na površini",
        "example": "На столу."
      }
    ],
    "tip": {
      "text": "Запомнете: под масата → unter dem Tisch."
    },
    "important": [
      "Unter lahko pomeni tudi \"vmes\", zlasti z ljudmi ali skupinami.",
      "Unter и über често са противоположни по отношение на място."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "unter",
          "über"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "unter"
            ],
            "yellow": [
              "Tisch"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "unter"
            ],
            "yellow": [
              "Stuhl"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Unter"
            ],
            "green": [
              "Freunden"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "über"
            ],
            "yellow": [
              "Tisch"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "unter"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "unter"
            ]
          }
        },
        {
          "word": {
            "green": [
              "über"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "über"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zwischen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "Zwischen"
            ]
          }
        },
        {
          "word": {
            "green": [
              "auf"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "Auf"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "unter dem Tisch"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "unter"
          ]
        },
        {
          "blue": [
            "unter"
          ],
          "red": [
            "über"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 17

**Audit ID:** `LRB098-0017`
**Finding Stable ID:** `g2/a1/sr|Urlaub|idx:695|lv; study.translation; study.explanation; study.examples; study.comparison|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** sr
**Card:** `Urlaub|idx:695`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Ваканция","study.translation":"Ваканция","study.explanation":"[\"Основна идея: само единствено число. Напускането на работа винаги е изолирано нещо.\",\"Der Urlaub v bistvu pomeni: odsotnost z dela.\",\"Često se karakteriše kao: samo v neduklû numbo.\",\"Der Urlaub je le v ednini - dopust od dela (im Urlaub).\"]","study.examples":"[{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Баща ми е на почивка.\"},{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Баща ми е на почивка.\"},{\"de\":\"Nächste Woche habe ich Urlaub.\",\"lv\":\"Имам ваканция другата седмица.\"},{\"de\":\"Wir machen Urlaub in Spanien.\",\"lv\":\"На одмор сме во Шпанија.\"},{\"de\":\"im Urlaub\",\"lv\":\"На почивка (работа).\"}]","study.comparison":"[{\"word\":\"der Urlaub\",\"meaning\":\"Напуснете работата си (само всички)\",\"example\":\"Mein Vater ist im Urlaub. – Баща ми е на почивка.\"},{\"word\":\"die Ferien\",\"meaning\":\"Školski/obrazovni praznici (samo DSK)\",\"example\":\"Die Kinder haben Ferien. – Децата са във ваканция.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"одмор","study.translation":"одмор","study.explanation":"[\"Главна идеја: der Urlaub значи одмор или одсуство с посла и на нивоу A1 обично се користи у једнини.\",\"die Ferien означава школски распуст и користи се у множини.\"]","study.examples":"[{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Мој отац је на одмору.\"},{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Мој отац је на одмору.\"},{\"de\":\"Nächste Woche habe ich Urlaub.\",\"lv\":\"Следеће недеље сам на одмору.\"},{\"de\":\"Wir machen Urlaub in Spanien.\",\"lv\":\"Проводимо одмор у Шпанији.\"},{\"de\":\"im Urlaub\",\"lv\":\"на одмору од посла\"}]","study.comparison":"[{\"word\":\"der Urlaub\",\"meaning\":\"одмор или одсуство с посла (једнина)\",\"example\":\"Mein Vater ist im Urlaub. – Мој отац је на одмору.\"},{\"word\":\"die Ferien\",\"meaning\":\"школски распуст (множина)\",\"example\":\"Die Kinder haben Ferien. – Деца су на распусту.\"}]","study.tip":"[\"der Urlaub се у овом значењу користи у једнини.\",\"За школски распуст користи die Ferien.\"]","study.important":"[\"Уобичајени изрази су im Urlaub sein и Urlaub machen.\",\"der Urlaub је одмор од посла, а die Ferien школски распуст.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{},{}],"important":[{},{}]}}
**Note:** OWNER approved override: Urlaub: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Urlaub",
  "de_article": "der",
  "lv": "одмор",
  "level": "A1",
  "study": {
    "id": "a1-urlaub",
    "layout": "standardStudy",
    "translation": "одмор",
    "explanation": [
      "Главна идеја: der Urlaub значи одмор или одсуство с посла и на нивоу A1 обично се користи у једнини.",
      "die Ferien означава школски распуст и користи се у множини."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Мој отац је на одмору."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Мој отац је на одмору."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Следеће недеље сам на одмору."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "Проводимо одмор у Шпанији."
      },
      {
        "de": "im Urlaub",
        "lv": "на одмору од посла"
      }
    ],
    "comparison": [
      {
        "word": "der Urlaub",
        "meaning": "одмор или одсуство с посла (једнина)",
        "example": "Mein Vater ist im Urlaub. – Мој отац је на одмору."
      },
      {
        "word": "die Ferien",
        "meaning": "школски распуст (множина)",
        "example": "Die Kinder haben Ferien. – Деца су на распусту."
      }
    ],
    "tip": [
      "der Urlaub се у овом значењу користи у једнини.",
      "За школски распуст користи die Ferien."
    ],
    "important": [
      "Уобичајени изрази су im Urlaub sein и Urlaub machen.",
      "der Urlaub је одмор од посла, а die Ferien школски распуст."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Urlaub",
  "de_article": "der",
  "lv": "Ваканция",
  "level": "A1",
  "study": {
    "id": "a1-urlaub",
    "layout": "standardStudy",
    "translation": "Ваканция",
    "explanation": [
      "Основна идея: само единствено число. Напускането на работа винаги е изолирано нещо.",
      "Der Urlaub v bistvu pomeni: odsotnost z dela.",
      "Često se karakteriše kao: samo v neduklû numbo.",
      "Der Urlaub je le v ednini - dopust od dela (im Urlaub)."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Баща ми е на почивка."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Баща ми е на почивка."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Имам ваканция другата седмица."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "На одмор сме во Шпанија."
      },
      {
        "de": "im Urlaub",
        "lv": "На почивка (работа)."
      }
    ],
    "comparison": [
      {
        "word": "der Urlaub",
        "meaning": "Напуснете работата си (само всички)",
        "example": "Mein Vater ist im Urlaub. – Баща ми е на почивка."
      },
      {
        "word": "die Ferien",
        "meaning": "Školski/obrazovni praznici (samo DSK)",
        "example": "Die Kinder haben Ferien. – Децата са във ваканция."
      }
    ],
    "tip": [
      "Само еден број. Откажувањето од работа е секогаш изолирана работа.",
      "Използвайте der Urlaub, когато контекстът съответства на това значение."
    ],
    "important": [
      "Неточно: die Ferie, der Urlabe (на ниво А1).",
      "Одмор: бити на одмору / одморити се.",
      "Неточно: die Urlaube → Точно: der Urlaub.",
      "Произведение: der Urlaub (само единствено число)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "der Urlaub",
          "urlaub"
        ],
        "yellow": [
          "Urlaub"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "urlaub"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "urlaub"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "urlaub"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "urlaub"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "urlaub"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {}
      ],
      "important": [
        {
          "green": [
            "der Urlabe"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 18

**Audit ID:** `LRB098-0018`
**Finding Stable ID:** `g2/a1/sr|verstehen|idx:621|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sr
**Card:** `verstehen|idx:621`
**Field / path:** `lv, study.*`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Разберете","study.translation":"Разберете","study.explanation":"[\"Основна идея: verstehen означава да разбираш.\",\"Се користи кога разбирате јазик, личност, текст или ситуација.\",\"Тук обикновено не е необходимо да „знаете“ или „учите“ латвийски език • Те са по-често Können.\",\"Много често срещана фраза е Ich verstehe. = Разбирам.\"]","study.examples":"[{\"de\":\"Ich verstehe dich.\",\"lv\":\"Разбрах те\"},{\"de\":\"Verstehst du Deutsch?\",\"lv\":\"Ali razumete nemško\"},{\"de\":\"Ich verstehe das nicht.\",\"lv\":\"Това не го разбирам\"},{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"Мога да говоря немски\"}]","study.comparison":"[{\"word\":\"verstehen\",\"meaning\":\"Разберете\",\"example\":\"Разумем те.\"},{\"word\":\"können\",\"meaning\":\"Бъдете способни/знайте\",\"example\":\"Могу пливати.\"},{\"word\":\"wissen\",\"meaning\":\"Познайте факта\",\"example\":\"То знам.\"},{\"word\":\"kennen\",\"meaning\":\"Знам\",\"example\":\"Познајем га.\"}]","study.tip":"{\"text\":\"Запомнете: разберете текст/лице → verstehen • Да знаете како да направите нешто → können.\"}","study.important":"[\"Verstehen nije korijen riječi \\\"razumijem\\\".\",\"Ich verstehe Deutsch означава „разбирам немски“.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"разумети","study.translation":"разумети","study.explanation":"[\"Главна идеја: verstehen значи разумети.\",\"Користи се за језик, особу, текст или ситуацију.\",\"Способност да се нешто уради обично се изражава глаголом können.\"]","study.examples":"[{\"de\":\"Ich verstehe dich.\",\"lv\":\"Разумем те.\"},{\"de\":\"Verstehst du Deutsch?\",\"lv\":\"Разумеш ли немачки?\"},{\"de\":\"Ich verstehe das nicht.\",\"lv\":\"Не разумем то.\"},{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"Умем да говорим немачки.\"}]","study.comparison":"[{\"word\":\"verstehen\",\"meaning\":\"разумети\",\"example\":\"Ich verstehe dich. – Разумем те.\"},{\"word\":\"können\",\"meaning\":\"моћи / умети\",\"example\":\"Ich kann schwimmen. – Умем да пливам.\"},{\"word\":\"wissen\",\"meaning\":\"знати чињеницу\",\"example\":\"Ich weiß das. – Знам то.\"},{\"word\":\"kennen\",\"meaning\":\"познавати\",\"example\":\"Ich kenne ihn. – Познајем га.\"}]","study.tip":"{\"text\":\"Разумети текст или особу → verstehen; умети нешто → können.\"}","study.important":"[\"verstehen не значи првенствено умети.\",\"Ich verstehe Deutsch = Разумем немачки.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: verstehen: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "verstehen",
  "lv": "разумети",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "разумети",
    "explanation": [
      "Главна идеја: verstehen значи разумети.",
      "Користи се за језик, особу, текст или ситуацију.",
      "Способност да се нешто уради обично се изражава глаголом können."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Разумем те."
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "Разумеш ли немачки?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Не разумем то."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Умем да говорим немачки."
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "разумети",
        "example": "Ich verstehe dich. – Разумем те."
      },
      {
        "word": "können",
        "meaning": "моћи / умети",
        "example": "Ich kann schwimmen. – Умем да пливам."
      },
      {
        "word": "wissen",
        "meaning": "знати чињеницу",
        "example": "Ich weiß das. – Знам то."
      },
      {
        "word": "kennen",
        "meaning": "познавати",
        "example": "Ich kenne ihn. – Познајем га."
      }
    ],
    "tip": {
      "text": "Разумети текст или особу → verstehen; умети нешто → können."
    },
    "important": [
      "verstehen не значи првенствено умети.",
      "Ich verstehe Deutsch = Разумем немачки."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "verstehen",
  "lv": "Разберете",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "Разберете",
    "explanation": [
      "Основна идея: verstehen означава да разбираш.",
      "Се користи кога разбирате јазик, личност, текст или ситуација.",
      "Тук обикновено не е необходимо да „знаете“ или „учите“ латвийски език • Те са по-често Können.",
      "Много често срещана фраза е Ich verstehe. = Разбирам."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Разбрах те"
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "Ali razumete nemško"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Това не го разбирам"
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Мога да говоря немски"
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "Разберете",
        "example": "Разумем те."
      },
      {
        "word": "können",
        "meaning": "Бъдете способни/знайте",
        "example": "Могу пливати."
      },
      {
        "word": "wissen",
        "meaning": "Познайте факта",
        "example": "То знам."
      },
      {
        "word": "kennen",
        "meaning": "Знам",
        "example": "Познајем га."
      }
    ],
    "tip": {
      "text": "Запомнете: разберете текст/лице → verstehen • Да знаете како да направите нешто → können."
    },
    "important": [
      "Verstehen nije korijen riječi \"razumijem\".",
      "Ich verstehe Deutsch означава „разбирам немски“."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "verstehen",
          "Ich verstehe"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "verstehe"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Verstehst"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "verstehe"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "kann"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "verstehen"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "verstehe"
            ]
          }
        },
        {
          "word": {
            "green": [
              "können"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "kann"
            ]
          }
        },
        {
          "word": {
            "green": [
              "wissen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "weiß"
            ]
          }
        },
        {
          "word": {
            "green": [
              "kennen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "kenne"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "verstehen"
          ],
          "red": [
            "können"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "verstehen"
          ]
        },
        {
          "blue": [
            "verstehe"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 19

**Audit ID:** `LRB098-0019`
**Finding Stable ID:** `g2/a1/sr|vom|idx:634|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sr
**Card:** `vom|idx:634`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"Од","study.explanation":"[\"Vom е контракција на предлогот von и членот дем.\",\"Целосна форма: von dem (на кого?).\",\"Използва се със съществителни от мъжки и среден род, за да посочи произхода или посоката на нещо.\",\"Отговаря на въпроси от кого? или откъде?\",\"V praksi se vom skoraj vedno uporablja namesto polnega von dem.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"Dojdoh ot garata\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"Poklon od mog oca.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"Доаѓа од докторот.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"Prihaja z letališča.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"Ovo je sa tržišta.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"Дојдовме од празникот.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"Od kmeta vzame mleko.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"Съобщение от шефа.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"От (конкретно нещо, за кого?)\",\"example\":\"vom Bahnhof – Од станицата\"},{\"word\":\"von\",\"meaning\":\"Од (вкупно)\",\"example\":\"von mir – Нема мани\"},{\"word\":\"aus\",\"meaning\":\"Отвътре / произход\",\"example\":\"aus Deutschland – От Германия\"},{\"word\":\"ab\",\"meaning\":\"Počevši od (vrijeme/mjesto)\",\"example\":\"ab Montag – Od ponedeljka\"},{\"word\":\"zu\",\"meaning\":\"K/u (обратна посока)\",\"example\":\"zum Arzt – Посетете лекар\"}]","study.tip":"[\"Запомнете: позадина + dem → vom (за кого?).\",\"U kolokvijalnom govoru gotovo nikada ne kažu von dem - koriste vom.\"]","study.important":"[\"Vom = von dem, само със съществително от мъжки или среден род за кого? в завоя.\",\"Ukazuje na porijeklo, izvor ili smjer nečega specifičnog.\",\"За жени: von der Mutter, а не vom Mutter.\",\"Да не се меша со aus (земја на потекло) или ab (точка на потекло).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"од • са","study.translation":"од • са","study.explanation":"[\"Главна идеја: vom је сажети облик von dem.\",\"Користи се уз именице мушког и средњег рода и означава извор или кретање од нечега.\",\"У српском превод зависи од контекста и често је од или са.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"Долазим са станице.\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"Поклон је од оца.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"Он се враћа од лекара.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"Она полази са аеродрома.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"То је са пијаце.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"Долазимо са прославе.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"Он узима млеко од сељака.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"Порука је од шефа.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"од/са нечега одређеног\",\"example\":\"vom Bahnhof – са станице\"},{\"word\":\"von\",\"meaning\":\"од уопштено\",\"example\":\"von mir – од мене\"},{\"word\":\"aus\",\"meaning\":\"из унутрашњости / порекло\",\"example\":\"aus Deutschland – из Немачке\"},{\"word\":\"ab\",\"meaning\":\"од неког времена или места\",\"example\":\"ab Montag – од понедељка\"},{\"word\":\"zu\",\"meaning\":\"до / код\",\"example\":\"zum Arzt – код лекара\"}]","study.tip":"[\"von + dem → vom.\",\"У немачком се обично користи сажети облик vom.\"]","study.important":"[\"vom стоји уз именице мушког или средњег рода после von.\",\"Означава извор или кретање од нечега одређеног.\",\"Уз женски род стоји von der.\",\"Разликуј vom, aus и ab.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{},{}],"important":[{},{},{},{}]}}
**Note:** OWNER approved override: vom: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vom",
  "lv": "од • са",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "од • са",
    "explanation": [
      "Главна идеја: vom је сажети облик von dem.",
      "Користи се уз именице мушког и средњег рода и означава извор или кретање од нечега.",
      "У српском превод зависи од контекста и често је од или са."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "Долазим са станице."
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "Поклон је од оца."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "Он се враћа од лекара."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "Она полази са аеродрома."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "То је са пијаце."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "Долазимо са прославе."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "Он узима млеко од сељака."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "Порука је од шефа."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "од/са нечега одређеног",
        "example": "vom Bahnhof – са станице"
      },
      {
        "word": "von",
        "meaning": "од уопштено",
        "example": "von mir – од мене"
      },
      {
        "word": "aus",
        "meaning": "из унутрашњости / порекло",
        "example": "aus Deutschland – из Немачке"
      },
      {
        "word": "ab",
        "meaning": "од неког времена или места",
        "example": "ab Montag – од понедељка"
      },
      {
        "word": "zu",
        "meaning": "до / код",
        "example": "zum Arzt – код лекара"
      }
    ],
    "tip": [
      "von + dem → vom.",
      "У немачком се обично користи сажети облик vom."
    ],
    "important": [
      "vom стоји уз именице мушког или средњег рода после von.",
      "Означава извор или кретање од нечега одређеног.",
      "Уз женски род стоји von der.",
      "Разликуј vom, aus и ab."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "vom",
  "lv": "Од",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "Од",
    "explanation": [
      "Vom е контракција на предлогот von и членот дем.",
      "Целосна форма: von dem (на кого?).",
      "Използва се със съществителни от мъжки и среден род, за да посочи произхода или посоката на нещо.",
      "Отговаря на въпроси от кого? или откъде?",
      "V praksi se vom skoraj vedno uporablja namesto polnega von dem."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "Dojdoh ot garata"
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "Poklon od mog oca."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "Доаѓа од докторот."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "Prihaja z letališča."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "Ovo je sa tržišta."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "Дојдовме од празникот."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "Od kmeta vzame mleko."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "Съобщение от шефа."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "От (конкретно нещо, за кого?)",
        "example": "vom Bahnhof – Од станицата"
      },
      {
        "word": "von",
        "meaning": "Од (вкупно)",
        "example": "von mir – Нема мани"
      },
      {
        "word": "aus",
        "meaning": "Отвътре / произход",
        "example": "aus Deutschland – От Германия"
      },
      {
        "word": "ab",
        "meaning": "Počevši od (vrijeme/mjesto)",
        "example": "ab Montag – Od ponedeljka"
      },
      {
        "word": "zu",
        "meaning": "K/u (обратна посока)",
        "example": "zum Arzt – Посетете лекар"
      }
    ],
    "tip": [
      "Запомнете: позадина + dem → vom (за кого?).",
      "U kolokvijalnom govoru gotovo nikada ne kažu von dem - koriste vom."
    ],
    "important": [
      "Vom = von dem, само със съществително от мъжки или среден род за кого? в завоя.",
      "Ukazuje na porijeklo, izvor ili smjer nečega specifičnog.",
      "За жени: von der Mutter, а не vom Mutter.",
      "Да не се меша со aus (земја на потекло) или ab (точка на потекло)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "vom",
          "von dem"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vom"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "vom"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "vom Bahnhof"
            ]
          }
        },
        {
          "word": {
            "green": [
              "von"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "von mir"
            ]
          }
        },
        {
          "word": {
            "green": [
              "aus"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "aus Deutschland"
            ]
          }
        },
        {
          "word": {
            "green": [
              "ab"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "ab Montag"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zu"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "zum Arzt"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "vom"
          ]
        },
        {
          "purple": [
            "von dem"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "vom"
          ],
          "purple": [
            "von dem"
          ]
        },
        {},
        {
          "yellow": [
            "von der Mutter"
          ],
          "red": [
            "vom Mutter"
          ]
        },
        {
          "green": [
            "aus"
          ],
          "red": [
            "ab"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 20

**Audit ID:** `LRB098-0020`
**Finding Stable ID:** `g2/a1/sr|vor|idx:636|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sr
**Card:** `vor|idx:636`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"Преди • Преди","study.explanation":"[\"Ключова идея: „крадец“ означава „преди“ във времето или „преди място“.\",\"Когато става въпрос за време, „крадец“ означава „преди“.\",\"Когато става дума за място, vor означава „отпред“ или „на“.\",\"V časova zona vor znači \\\"za sada\\\", na primer fünf vor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Ги мијам рацете пред јадење.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Колата е паркирана пред къщата.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"Сега е пет без осем.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"След като се нахраним, излизаме на разходка.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"Пред/пред\",\"example\":\"Пре јела...\"},{\"word\":\"nach\",\"meaning\":\"S strani/pred\",\"example\":\"После јела...\"},{\"word\":\"neben\",\"meaning\":\"До\",\"example\":\"Поред куће.\"},{\"word\":\"hinter\",\"meaning\":\"Отзад\",\"example\":\"Иза куће.\"}]","study.tip":"{\"text\":\"Zapamtite: prije vremena, prije mjesta → lopov.\"}","study.important":"[\"Tat je lahko čas in kraj.\",\"Vor dem Essen = pred obroki • Vor dem Haus = pred hišo.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"пре • испред","study.translation":"пре • испред","study.explanation":"[\"Главна идеја: vor значи пре у времену и испред у простору.\",\"У исказивању времена значи до: fünf vor acht = пет до осам.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Пре јела перем руке.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Ауто стоји испред куће.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"Пет до осам је.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"После јела идемо у шетњу.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"пре / испред\",\"example\":\"Vor dem Essen... – Пре јела ...\"},{\"word\":\"nach\",\"meaning\":\"после / у\",\"example\":\"Nach dem Essen... – После јела ...\"},{\"word\":\"neben\",\"meaning\":\"поред\",\"example\":\"Neben dem Haus. – Поред куће.\"},{\"word\":\"hinter\",\"meaning\":\"иза\",\"example\":\"Hinter dem Haus. – Иза куће.\"}]","study.tip":"{\"text\":\"Пре у времену и испред у простору → vor.\"}","study.important":"[\"vor може означавати и време и место.\",\"vor dem Essen = пре јела; vor dem Haus = испред куће.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: vor: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vor",
  "lv": "пре • испред",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "пре • испред",
    "explanation": [
      "Главна идеја: vor значи пре у времену и испред у простору.",
      "У исказивању времена значи до: fünf vor acht = пет до осам."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Пре јела перем руке."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Ауто стоји испред куће."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Пет до осам је."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "После јела идемо у шетњу."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "пре / испред",
        "example": "Vor dem Essen... – Пре јела ..."
      },
      {
        "word": "nach",
        "meaning": "после / у",
        "example": "Nach dem Essen... – После јела ..."
      },
      {
        "word": "neben",
        "meaning": "поред",
        "example": "Neben dem Haus. – Поред куће."
      },
      {
        "word": "hinter",
        "meaning": "иза",
        "example": "Hinter dem Haus. – Иза куће."
      }
    ],
    "tip": {
      "text": "Пре у времену и испред у простору → vor."
    },
    "important": [
      "vor може означавати и време и место.",
      "vor dem Essen = пре јела; vor dem Haus = испред куће."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "vor",
  "lv": "Преди • Преди",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Преди • Преди",
    "explanation": [
      "Ключова идея: „крадец“ означава „преди“ във времето или „преди място“.",
      "Когато става въпрос за време, „крадец“ означава „преди“.",
      "Когато става дума за място, vor означава „отпред“ или „на“.",
      "V časova zona vor znači \"za sada\", na primer fünf vor acht."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Ги мијам рацете пред јадење."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Колата е паркирана пред къщата."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Сега е пет без осем."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "След като се нахраним, излизаме на разходка."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Пред/пред",
        "example": "Пре јела..."
      },
      {
        "word": "nach",
        "meaning": "S strani/pred",
        "example": "После јела..."
      },
      {
        "word": "neben",
        "meaning": "До",
        "example": "Поред куће."
      },
      {
        "word": "hinter",
        "meaning": "Отзад",
        "example": "Иза куће."
      }
    ],
    "tip": {
      "text": "Zapamtite: prije vremena, prije mjesta → lopov."
    },
    "important": [
      "Tat je lahko čas in kraj.",
      "Vor dem Essen = pred obroki • Vor dem Haus = pred hišo."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "vor",
          "fünf vor acht"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Vor"
            ],
            "yellow": [
              "Essen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vor"
            ],
            "yellow": [
              "Haus"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "vor"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "Nach"
            ],
            "yellow": [
              "Essen"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "vor"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "Vor"
            ]
          }
        },
        {
          "word": {
            "green": [
              "nach"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "Nach"
            ]
          }
        },
        {
          "word": {
            "green": [
              "neben"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "Neben"
            ]
          }
        },
        {
          "word": {
            "green": [
              "hinter"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "Hinter"
            ]
          }
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {},
        {
          "blue": [
            "vor dem Essen",
            "vor dem Haus"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 21

**Audit ID:** `LRB098-0021`
**Finding Stable ID:** `g2/a1/sr|was|idx:644|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sr
**Card:** `was|idx:644`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"Кой • Какво","study.explanation":"[\"Главна идеја: што е прашален збор за нештата и настаните - на латвиски е што или што, во зависност од делот на реченицата.\",\"Питаха го за неща, събития и факти, а не за хора.\",\"На германски, зборот нема да се промени по промена, секогаш изгледа како да бил.\",\"Ако в изречението е имало подлог, той се превежда на латвийски като kas (Was ist das? = Какво е това?).\",\"Ако was е обект (допълнение) на глагол, той се превежда на латвийски като ko (Was machst du? = Какво правиш?).\",\"Хората питат с wer (кой/кой), но не беше.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Какво е?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Какво е станало\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Šta radiš\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Какво искаш да пиеш\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Што значи овој збор?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Која е вашата омилена храна?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Какво каза\"}]","study.tip":"[\"Samo \\\"Beshe\\\" se ne menja - na nemačkom je uvek bilo.\",\"Брз трик: Ако на прашањето може да се одговори со „Тоа е...“, употребете who • Ако одговорот доаѓа по глаголот како предмет, користете ko.\"]","study.important":"[\"Питаха го за неща, събития и факти, а не за хора.\",\"Хората питат с wer (кой/кой), но не беше.\",\"Was für (ein/eine) означава някой/за и пита за качество или тип (Was für ein Film ist das? = Какъв филм е това?).\",\"Napačno: Wer ist passiert? → Pravilno: Je bil pasiven?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"шта","study.translation":"шта","study.explanation":"[\"Главна идеја: was пита за ствари, догађаје и чињенице и значи шта.\",\"Не користи се за особе; за њих се употребљава wer.\",\"Немачки облик was не мења се по падежима.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Шта је то?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Шта се догодило?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Шта сада радиш?\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Шта желиш да пијеш?\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Шта значи ова реч?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Које је твоје омиљено јело?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Шта си рекао?\"}]","study.tip":"[\"was има исти облик у свим овим питањима.\",\"За особе питај са wer, не са was.\"]","study.important":"[\"was пита за ствари, догађаје и чињенице.\",\"За особе се користи wer.\",\"was für ein/eine значи какав или каква врста.\",\"Погрешно: Wer ist passiert? Тачно: Was ist passiert?\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{},{},{}]}}
**Note:** OWNER approved override: was: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "was",
  "lv": "шта",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "шта",
    "explanation": [
      "Главна идеја: was пита за ствари, догађаје и чињенице и значи шта.",
      "Не користи се за особе; за њих се употребљава wer.",
      "Немачки облик was не мења се по падежима."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Шта је то?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Шта се догодило?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Шта сада радиш?"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Шта желиш да пијеш?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Шта значи ова реч?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "Које је твоје омиљено јело?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Шта си рекао?"
      }
    ],
    "tip": [
      "was има исти облик у свим овим питањима.",
      "За особе питај са wer, не са was."
    ],
    "important": [
      "was пита за ствари, догађаје и чињенице.",
      "За особе се користи wer.",
      "was für ein/eine значи какав или каква врста.",
      "Погрешно: Wer ist passiert? Тачно: Was ist passiert?"
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "was",
  "lv": "Кой • Какво",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "Кой • Какво",
    "explanation": [
      "Главна идеја: што е прашален збор за нештата и настаните - на латвиски е што или што, во зависност од делот на реченицата.",
      "Питаха го за неща, събития и факти, а не за хора.",
      "На германски, зборот нема да се промени по промена, секогаш изгледа како да бил.",
      "Ако в изречението е имало подлог, той се превежда на латвийски като kas (Was ist das? = Какво е това?).",
      "Ако was е обект (допълнение) на глагол, той се превежда на латвийски като ko (Was machst du? = Какво правиш?).",
      "Хората питат с wer (кой/кой), но не беше."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Какво е?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Какво е станало"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Šta radiš"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Какво искаш да пиеш"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Што значи овој збор?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "Која е вашата омилена храна?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Какво каза"
      }
    ],
    "tip": [
      "Samo \"Beshe\" se ne menja - na nemačkom je uvek bilo.",
      "Брз трик: Ако на прашањето може да се одговори со „Тоа е...“, употребете who • Ако одговорот доаѓа по глаголот како предмет, користете ko."
    ],
    "important": [
      "Питаха го за неща, събития и факти, а не за хора.",
      "Хората питат с wer (кой/кой), но не беше.",
      "Was für (ein/eine) означава някой/за и пита за качество или тип (Was für ein Film ist das? = Какъв филм е това?).",
      "Napačno: Wer ist passiert? → Pravilno: Je bil pasiven?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "was"
        ],
        "purple": [
          "kas",
          "ko"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Was"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Was"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Was"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Was"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Was"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Was"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Was"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {},
        {
          "purple": [
            "ko"
          ]
        }
      ],
      "important": [
        {},
        {
          "blue": [
            "wer"
          ]
        },
        {
          "blue": [
            "was für"
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 22

**Audit ID:** `LRB098-0022`
**Finding Stable ID:** `g2/a1/sr|wenn|idx:655|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sr
**Card:** `wenn|idx:655`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"Če • Kdaj","study.explanation":"[\"Ключова идея: wenn означава „ако“ или „когато“, в зависимост от ситуацията.\",\"Ако е условие, преведете го така, сякаш.\",\"Когато се говори за повтарящо се или общо време, преведете като „когато“.\",\"Nakon wenn, glagol se obično završava njemačkom rečenicom.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Če imate čas, se oglasite.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Ако вали, си стоя вкъщи.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Ko sem utrujena, pijem kavo.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Не знам дали ќе дојде.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"Ако/кога\",\"example\":\"Ако имаш време...\"},{\"word\":\"ob\",\"meaning\":\"Или в косвен въпрос\",\"example\":\"Не знам да ли...\"},{\"word\":\"wann\",\"meaning\":\"При съмнение\",\"example\":\"Када долазиш?\"},{\"word\":\"weil\",\"meaning\":\"Защото\",\"example\":\"Остајем јер сам болестан.\"}]","study.tip":"{\"text\":\"Запомнете: състояние → venn • Въпрос „кога?“ → Искам.\"}","study.important":"[\"Wenn и Wann не се иста работа.\",\"Кога ще дойдеш имам един въпрос Wenn du kommst... - състояние/време.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ако • када","study.translation":"ако • када","study.explanation":"[\"Главна идеја: wenn значи ако у услову и када при понављању или општем временском односу.\",\"После wenn лични глагол обично стоји на крају немачке зависне реченице.\",\"У зависном питању да ли користи се ob, а у директном питању када користи се wann.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Ако имаш времена, сврати.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Ако пада киша, остајем код куће.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Када сам уморан, пијем кафу.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Не знам да ли он долази.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"ако / када\",\"example\":\"Wenn du Zeit hast... – Ако имаш времена ...\"},{\"word\":\"ob\",\"meaning\":\"да ли у зависном питању\",\"example\":\"Ich weiß nicht, ob... – Не знам да ли ...\"},{\"word\":\"wann\",\"meaning\":\"када у питању\",\"example\":\"Wann kommst du? – Када долазиш?\"},{\"word\":\"weil\",\"meaning\":\"јер\",\"example\":\"Ich bleibe, weil ich krank bin. – Остајем јер сам болестан.\"}]","study.tip":"{\"text\":\"Услов → wenn; питање када? → wann.\"}","study.important":"[\"wenn и wann нису исто.\",\"Wann kommst du? је питање; Wenn du kommst ... је условна или временска реченица.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: wenn: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wenn",
  "lv": "ако • када",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "ако • када",
    "explanation": [
      "Главна идеја: wenn значи ако у услову и када при понављању или општем временском односу.",
      "После wenn лични глагол обично стоји на крају немачке зависне реченице.",
      "У зависном питању да ли користи се ob, а у директном питању када користи се wann."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Ако имаш времена, сврати."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Ако пада киша, остајем код куће."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Када сам уморан, пијем кафу."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Не знам да ли он долази."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "ако / када",
        "example": "Wenn du Zeit hast... – Ако имаш времена ..."
      },
      {
        "word": "ob",
        "meaning": "да ли у зависном питању",
        "example": "Ich weiß nicht, ob... – Не знам да ли ..."
      },
      {
        "word": "wann",
        "meaning": "када у питању",
        "example": "Wann kommst du? – Када долазиш?"
      },
      {
        "word": "weil",
        "meaning": "јер",
        "example": "Ich bleibe, weil ich krank bin. – Остајем јер сам болестан."
      }
    ],
    "tip": {
      "text": "Услов → wenn; питање када? → wann."
    },
    "important": [
      "wenn и wann нису исто.",
      "Wann kommst du? је питање; Wenn du kommst ... је условна или временска реченица."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "wenn",
  "lv": "Če • Kdaj",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "Če • Kdaj",
    "explanation": [
      "Ключова идея: wenn означава „ако“ или „когато“, в зависимост от ситуацията.",
      "Ако е условие, преведете го така, сякаш.",
      "Когато се говори за повтарящо се или общо време, преведете като „когато“.",
      "Nakon wenn, glagol se obično završava njemačkom rečenicom."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Če imate čas, se oglasite."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Ако вали, си стоя вкъщи."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Ko sem utrujena, pijem kavo."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Не знам дали ќе дојде."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "Ако/кога",
        "example": "Ако имаш време..."
      },
      {
        "word": "ob",
        "meaning": "Или в косвен въпрос",
        "example": "Не знам да ли..."
      },
      {
        "word": "wann",
        "meaning": "При съмнение",
        "example": "Када долазиш?"
      },
      {
        "word": "weil",
        "meaning": "Защото",
        "example": "Остајем јер сам болестан."
      }
    ],
    "tip": {
      "text": "Запомнете: състояние → venn • Въпрос „кога?“ → Искам."
    },
    "important": [
      "Wenn и Wann не се иста работа.",
      "Кога ще дойдеш имам един въпрос Wenn du kommst... - състояние/време."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wenn"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Wenn",
              "hast"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wenn",
              "regnet"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wenn",
              "bin"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "ob"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "wenn"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "Wenn"
            ]
          }
        },
        {
          "word": {
            "green": [
              "ob"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "ob"
            ]
          }
        },
        {
          "word": {
            "green": [
              "wann"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "Wann"
            ]
          }
        },
        {
          "word": {
            "green": [
              "weil"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "weil"
            ]
          }
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {
          "blue": [
            "wenn"
          ],
          "yellow": [
            "wann"
          ]
        },
        {
          "blue": [
            "Wenn du kommst"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 23

**Audit ID:** `LRB098-0023`
**Finding Stable ID:** `g2/a1/sr|wer|idx:656|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sr
**Card:** `wer|idx:656`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"Кой • Кой","study.explanation":"[\"Главна идеја: wer е прашален збор за идентитетот на една личност - на латвиски е кој или кој.\",\"Прашувавме за луѓе, а не за работи или настани.\",\"Stvari i događaji su dati sa e bilo i ne e bilo.\",\"Wer на германски обично е предмет на реченицата (номинативен случај) - Wer ist das? = Што е ова?\",\"Kada pitate koi od nekoliko ljudi, wer se često koristi sa von (wer von euch = koi od vas).\",\"Wer ја менува својата форма во зависност од деклинацијата: wen (падеж акузатив), wem (падеж на датив), wessen (падеж на генитив) - тоа е формата wer која е најчеста на ниво А1.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Какво е?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Кой си ти\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Kaj se bo zgodilo danes?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Кой е вашият учител\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Колкумина од вас зборуваат германски?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Кой каза това?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Кой иска кафе?\"}]","study.tip":"[\"Wer пита за хора (кой/кой) – за неща и събития, използваме was.\",\"Če želite prositi za izbiro med več osebami, uporabite wer von… (katera od…).\"]","study.important":"[\"Sprašujemo samo o ljudeh in ne o stvareh.\",\"Stvari i događaji su dati sa e bilo i ne e bilo.\",\"Wer променя формата, като променя: wen, wem, wessen, но основната форма е wer.\",\"Napačno: Wer ist passiert? → Pravilno: Je bil pasiven?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ко","study.translation":"ко","study.explanation":"[\"Главна идеја: wer пита за идентитет особе и значи ко.\",\"За ствари и догађаје користи се was.\",\"Падежни облици су wen, wem и wessen.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Ко је то?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Ко си ти?\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Ко долази данас?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Ко је твоја наставница?\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Ко од вас говори немачки?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Ко је то рекао?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Ко жели кафу?\"}]","study.tip":"[\"wer пита за особе; was за ствари и догађаје.\",\"wer von ... значи ко од ...\"]","study.important":"[\"wer пита за особе.\",\"За ствари и догађаје користи се was.\",\"Падежни облици су wen, wem и wessen.\",\"Погрешно: Wer ist passiert? Тачно: Was ist passiert?\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{},{},{}]}}
**Note:** OWNER approved override: wer: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wer",
  "lv": "ко",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "ко",
    "explanation": [
      "Главна идеја: wer пита за идентитет особе и значи ко.",
      "За ствари и догађаје користи се was.",
      "Падежни облици су wen, wem и wessen."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Ко је то?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Ко си ти?"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Ко долази данас?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Ко је твоја наставница?"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Ко од вас говори немачки?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Ко је то рекао?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Ко жели кафу?"
      }
    ],
    "tip": [
      "wer пита за особе; was за ствари и догађаје.",
      "wer von ... значи ко од ..."
    ],
    "important": [
      "wer пита за особе.",
      "За ствари и догађаје користи се was.",
      "Падежни облици су wen, wem и wessen.",
      "Погрешно: Wer ist passiert? Тачно: Was ist passiert?"
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "wer",
  "lv": "Кой • Кой",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "Кой • Кой",
    "explanation": [
      "Главна идеја: wer е прашален збор за идентитетот на една личност - на латвиски е кој или кој.",
      "Прашувавме за луѓе, а не за работи или настани.",
      "Stvari i događaji su dati sa e bilo i ne e bilo.",
      "Wer на германски обично е предмет на реченицата (номинативен случај) - Wer ist das? = Што е ова?",
      "Kada pitate koi od nekoliko ljudi, wer se često koristi sa von (wer von euch = koi od vas).",
      "Wer ја менува својата форма во зависност од деклинацијата: wen (падеж акузатив), wem (падеж на датив), wessen (падеж на генитив) - тоа е формата wer која е најчеста на ниво А1."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Какво е?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Кой си ти"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Kaj se bo zgodilo danes?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Кой е вашият учител"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Колкумина од вас зборуваат германски?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Кой каза това?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Кой иска кафе?"
      }
    ],
    "tip": [
      "Wer пита за хора (кой/кой) – за неща и събития, използваме was.",
      "Če želite prositi za izbiro med več osebami, uporabite wer von… (katera od…)."
    ],
    "important": [
      "Sprašujemo samo o ljudeh in ne o stvareh.",
      "Stvari i događaji su dati sa e bilo i ne e bilo.",
      "Wer променя формата, като променя: wen, wem, wessen, но основната форма е wer.",
      "Napačno: Wer ist passiert? → Pravilno: Je bil pasiven?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wer"
        ],
        "purple": [
          "das"
        ],
        "green": [
          "das"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wer"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "blue": [
            "wer"
          ],
          "green": [
            "was"
          ]
        },
        {
          "blue": [
            "wer von"
          ]
        }
      ],
      "important": [
        {},
        {},
        {
          "blue": [
            "wer"
          ]
        },
        {
          "blue": [
            "Wer"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 24

**Audit ID:** `LRB098-0024`
**Finding Stable ID:** `g2/a1/sr|Zeit|idx:699|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Lang:** sr
**Card:** `Zeit|idx:699`
**Field / path:** `lv; study.*`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Vrijeme (trenutak/vremenski period)","study.translation":"Vrijeme (trenutak/vremenski period)","study.explanation":"[\"Glavna ideja: Vrijeme kao pojam - trenutak, mogućnost, vremenski period.\",\"Die Zeit означава преди всичко: момент, възможност.\",\"Често се карактеризира со: апстрактен концепт.\",\"Die Zeit je apstraktan koncept – vrijeme, trenutak ili prilika (Ich habe keine Zeit).\"]","study.examples":"[{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Нямам време\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Нямам време\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Imate li vremena\"},{\"de\":\"Die Zeit vergeht schnell.\",\"lv\":\"Времето лети бързо.\"}]","study.tip":"[\"Времето като понятие е момент, възможност, период от време.\",\"Използвайте die Zeit, когато контекстът съответства на това значение.\"]","study.important":"[\"Die Zeit: Molimo provjerite kontekst prije upotrebe.\",\"Die Zeit: Molimo provjerite kontekst prije upotrebe.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"време","study.translation":"време","study.explanation":"[\"Главна идеја: die Zeit значи време као појам, прилику или временски период.\",\"За сат као уређај или тачно време користи се die Uhr.\"]","study.examples":"[{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Немам времена.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Немам времена.\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Имаш ли времена?\"},{\"de\":\"Die Zeit vergeht schnell.\",\"lv\":\"Време брзо пролази.\"}]","study.tip":"[\"die Zeit је време као појам или расположиво време.\",\"Провери да ли контекст захтева die Uhr.\"]","study.important":"[\"die Zeit = време као апстрактан појам.\",\"die Uhr = сат или тачно време на сату.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{}]}}
**Note:** OWNER approved override: Zeit: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Zeit",
  "de_article": "die",
  "de_plural": "die Zeiten",
  "lv": "време",
  "level": "A1",
  "study": {
    "id": "a1-zeit",
    "layout": "standardStudy",
    "translation": "време",
    "explanation": [
      "Главна идеја: die Zeit значи време као појам, прилику или временски период.",
      "За сат као уређај или тачно време користи се die Uhr."
    ],
    "examples": [
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Немам времена."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Немам времена."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Имаш ли времена?"
      },
      {
        "de": "Die Zeit vergeht schnell.",
        "lv": "Време брзо пролази."
      }
    ],
    "tip": [
      "die Zeit је време као појам или расположиво време.",
      "Провери да ли контекст захтева die Uhr."
    ],
    "important": [
      "die Zeit = време као апстрактан појам.",
      "die Uhr = сат или тачно време на сату."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Zeit",
  "de_article": "die",
  "de_plural": "die Zeiten",
  "lv": "Vrijeme (trenutak/vremenski period)",
  "level": "A1",
  "study": {
    "id": "a1-zeit",
    "layout": "standardStudy",
    "translation": "Vrijeme (trenutak/vremenski period)",
    "explanation": [
      "Glavna ideja: Vrijeme kao pojam - trenutak, mogućnost, vremenski period.",
      "Die Zeit означава преди всичко: момент, възможност.",
      "Често се карактеризира со: апстрактен концепт.",
      "Die Zeit je apstraktan koncept – vrijeme, trenutak ili prilika (Ich habe keine Zeit)."
    ],
    "examples": [
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Нямам време"
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Нямам време"
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Imate li vremena"
      },
      {
        "de": "Die Zeit vergeht schnell.",
        "lv": "Времето лети бързо."
      }
    ],
    "tip": [
      "Времето като понятие е момент, възможност, период от време.",
      "Използвайте die Zeit, когато контекстът съответства на това значение."
    ],
    "important": [
      "Die Zeit: Molimo provjerite kontekst prije upotrebe.",
      "Die Zeit: Molimo provjerite kontekst prije upotrebe."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "die Zeit",
          "zeit"
        ],
        "yellow": [
          "Zeit"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "zeit"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "zeit"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "zeit"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "die Zeit",
              "zeit"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {}
      ],
      "important": [
        {
          "green": [
            "die Zeit"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 25

**Audit ID:** `LRB098-0025`
**Finding Stable ID:** `g2/a1/sr|zum|idx:672|lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** sr
**Card:** `zum|idx:672`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"K • V","study.translation":"K • V","study.explanation":"[\"Zoom е свиване на предлога zu и члена dem.\",\"Пълна форма: zu dem (на кого?).\",\"Uporablja se pri samostalnikih moškega in srednjega rodu za označevanje smeri ali namena.\",\"Често означава нещо или някого - лекар, станция, приятел.\",\"На практика zum почти винаги се използва вместо пълното zu dem.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Отивам на лекар.\"},{\"de\":\"Wir fahren zum Bahnhof.\",\"lv\":\"Idemo u garat.\"},{\"de\":\"Sie geht zum Supermarkt.\",\"lv\":\"Тя отива до магазина.\"},{\"de\":\"Komm zum Essen!\",\"lv\":\"Върви да ядеш!\"},{\"de\":\"Er fährt zum Flughafen.\",\"lv\":\"Odide na letališče.\"},{\"de\":\"Wir gehen zum Konzert.\",\"lv\":\"Одиме на концерт.\"},{\"de\":\"Das Geschenk ist zum Geburtstag.\",\"lv\":\"Подарък за рожден ден.\"},{\"de\":\"Ich gehe zum Friseur.\",\"lv\":\"Одам на фризер.\"}]","study.comparison":"[{\"word\":\"zum\",\"meaning\":\"Za/kome (kome?)\",\"example\":\"zum Arzt – Посетете лекар\"},{\"word\":\"zur\",\"meaning\":\"K/u (семейството на съпругата)\",\"example\":\"zur Schule – Uz skolu\"},{\"word\":\"zu\",\"meaning\":\"K/u/също\",\"example\":\"zu Hause – У дома\"},{\"word\":\"nach\",\"meaning\":\"V (grad/država)\",\"example\":\"nach Berlin – V Berlin\"},{\"word\":\"bei\",\"meaning\":\"В (местоположение)\",\"example\":\"beim Arzt – Посетете лекар\"}]","study.tip":"[\"Zapamtite: zu + dem → zum (za koga?).\",\"Za riječi ženskog roda: zu + der → zur.\"]","study.important":"[\"Zum = zu dem, само със съществително от мъжки род или без род за кого? в завоя.\",\"Показва посока или цел: до лекаря, до гарата, до приятел.\",\"За женски род се използва zur: zur Bank, zur Post.\",\"Да не се меша со bei (се наоѓа во) или nach (во градовите без статија).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"до • код","study.translation":"до • код","study.explanation":"[\"Главна идеја: zum је сажети облик zu dem.\",\"Користи се уз именице мушког и средњег рода и означава циљ или правац.\",\"Српски превод зависи од одредишта и често је до, код, у или на.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Идем код лекара.\"},{\"de\":\"Wir fahren zum Bahnhof.\",\"lv\":\"Идемо до станице.\"},{\"de\":\"Sie geht zum Supermarkt.\",\"lv\":\"Она иде у супермаркет.\"},{\"de\":\"Komm zum Essen!\",\"lv\":\"Дођи на јело!\"},{\"de\":\"Er fährt zum Flughafen.\",\"lv\":\"Он иде на аеродром.\"},{\"de\":\"Wir gehen zum Konzert.\",\"lv\":\"Идемо на концерт.\"},{\"de\":\"Das Geschenk ist zum Geburtstag.\",\"lv\":\"Поклон је за рођендан.\"},{\"de\":\"Ich gehe zum Friseur.\",\"lv\":\"Идем код фризера.\"}]","study.comparison":"[{\"word\":\"zum\",\"meaning\":\"до/код (zu dem)\",\"example\":\"zum Arzt – код лекара\"},{\"word\":\"zur\",\"meaning\":\"до/у уз женски род\",\"example\":\"zur Schule – у школу\"},{\"word\":\"zu\",\"meaning\":\"до/код/превише\",\"example\":\"zu Hause – код куће\"},{\"word\":\"nach\",\"meaning\":\"у уз град или земљу\",\"example\":\"nach Berlin – у Берлин\"},{\"word\":\"bei\",\"meaning\":\"код при боравку\",\"example\":\"beim Arzt – код лекара\"}]","study.tip":"[\"zu + dem → zum.\",\"Уз именице женског рода: zu + der → zur.\"]","study.important":"[\"zum стоји уз именице мушког или средњег рода.\",\"Означава циљ или правац.\",\"Уз женски род користи се zur.\",\"Разликуј zum, bei и nach.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":[{},{}],"important":[{},{},{},{}]}}
**Note:** OWNER approved override: zum: individually reviewed full SR composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "zum",
  "lv": "до • код",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "до • код",
    "explanation": [
      "Главна идеја: zum је сажети облик zu dem.",
      "Користи се уз именице мушког и средњег рода и означава циљ или правац.",
      "Српски превод зависи од одредишта и често је до, код, у или на."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Идем код лекара."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "Идемо до станице."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "Она иде у супермаркет."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Дођи на јело!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "Он иде на аеродром."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Идемо на концерт."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "Поклон је за рођендан."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Идем код фризера."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "до/код (zu dem)",
        "example": "zum Arzt – код лекара"
      },
      {
        "word": "zur",
        "meaning": "до/у уз женски род",
        "example": "zur Schule – у школу"
      },
      {
        "word": "zu",
        "meaning": "до/код/превише",
        "example": "zu Hause – код куће"
      },
      {
        "word": "nach",
        "meaning": "у уз град или земљу",
        "example": "nach Berlin – у Берлин"
      },
      {
        "word": "bei",
        "meaning": "код при боравку",
        "example": "beim Arzt – код лекара"
      }
    ],
    "tip": [
      "zu + dem → zum.",
      "Уз именице женског рода: zu + der → zur."
    ],
    "important": [
      "zum стоји уз именице мушког или средњег рода.",
      "Означава циљ или правац.",
      "Уз женски род користи се zur.",
      "Разликуј zum, bei и nach."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "zum",
  "lv": "K • V",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "K • V",
    "explanation": [
      "Zoom е свиване на предлога zu и члена dem.",
      "Пълна форма: zu dem (на кого?).",
      "Uporablja se pri samostalnikih moškega in srednjega rodu za označevanje smeri ali namena.",
      "Често означава нещо или някого - лекар, станция, приятел.",
      "На практика zum почти винаги се използва вместо пълното zu dem."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Отивам на лекар."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "Idemo u garat."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "Тя отива до магазина."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Върви да ядеш!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "Odide na letališče."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Одиме на концерт."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "Подарък за рожден ден."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Одам на фризер."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "Za/kome (kome?)",
        "example": "zum Arzt – Посетете лекар"
      },
      {
        "word": "zur",
        "meaning": "K/u (семейството на съпругата)",
        "example": "zur Schule – Uz skolu"
      },
      {
        "word": "zu",
        "meaning": "K/u/също",
        "example": "zu Hause – У дома"
      },
      {
        "word": "nach",
        "meaning": "V (grad/država)",
        "example": "nach Berlin – V Berlin"
      },
      {
        "word": "bei",
        "meaning": "В (местоположение)",
        "example": "beim Arzt – Посетете лекар"
      }
    ],
    "tip": [
      "Zapamtite: zu + dem → zum (za koga?).",
      "Za riječi ženskog roda: zu + der → zur."
    ],
    "important": [
      "Zum = zu dem, само със съществително от мъжки род или без род за кого? в завоя.",
      "Показва посока или цел: до лекаря, до гарата, до приятел.",
      "За женски род се използва zur: zur Bank, zur Post.",
      "Да не се меша со bei (се наоѓа во) или nach (во градовите без статија)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "zum",
          "zu dem"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "zum"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "zum Arzt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zur"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "zur Schule"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zu"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "zu Hause"
            ]
          }
        },
        {
          "word": {
            "green": [
              "nach"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "nach Berlin"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bei"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "beim Arzt"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "zu"
          ]
        },
        {
          "yellow": [
            "zur"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "zum"
          ],
          "purple": [
            "zu dem"
          ]
        },
        {},
        {},
        {
          "green": [
            "bei"
          ],
          "red": [
            "nach"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 26

**Audit ID:** `LRB098-0026`
**Finding Stable ID:** `g2/a1/sv|ab|idx:17|lv; study.examples[].lv|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `ab|idx:17`
**Field / path:** `lv; study.examples[].lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"-st","study.examples[].lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"från och med","study.translation":"från och med","study.explanation":"Huvudidé: ab anger en startpunkt i tid eller rum och betyder ofta från och med.","study.examples":"[{\"de\":\"ab heute\",\"lv\":\"från och med i dag\",\"level\":\"A1\"},{\"de\":\"ab Montag\",\"lv\":\"från och med måndag\"},{\"de\":\"ab 8 Uhr\",\"lv\":\"från klockan åtta\"},{\"de\":\"ab Bahnhof\",\"lv\":\"från stationen\"}]","study.comparison":"[{\"word\":\"ab\",\"meaning\":\"från och med en startpunkt eller tid\",\"example\":\"ab Montag – från och med måndag\"},{\"word\":\"von\",\"meaning\":\"från någon/något; källa\",\"example\":\"von mir – från mig\"},{\"word\":\"aus\",\"meaning\":\"ut ur / från ett ursprung\",\"example\":\"aus dem Haus – ut ur huset\"}]","study.tip":"{\"text\":\"Startpunkt i tid eller rum → ab.\"}","study.important":"[\"ab anger var eller när något börjar.\",\"För ursprung eller rörelse ut ur något används oftare von eller aus.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: ab: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ab",
  "lv": "från och med",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "från och med",
    "explanation": "Huvudidé: ab anger en startpunkt i tid eller rum och betyder ofta från och med.",
    "examples": [
      {
        "de": "ab heute",
        "lv": "från och med i dag",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "från och med måndag"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "från klockan åtta"
      },
      {
        "de": "ab Bahnhof",
        "lv": "från stationen"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "från och med en startpunkt eller tid",
        "example": "ab Montag – från och med måndag"
      },
      {
        "word": "von",
        "meaning": "från någon/något; källa",
        "example": "von mir – från mig"
      },
      {
        "word": "aus",
        "meaning": "ut ur / från ett ursprung",
        "example": "aus dem Haus – ut ur huset"
      }
    ],
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "tip": {
      "text": "Startpunkt i tid eller rum → ab."
    },
    "important": [
      "ab anger var eller när något börjar.",
      "För ursprung eller rörelse ut ur något används oftare von eller aus."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "ab",
  "lv": "-st",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "-st",
    "explanation": "Kasutatakse, kui miski algab kindlast ajast, kohast või punktist. Sageli tähendab “alates”.",
    "examples": [
      {
        "de": "ab heute",
        "lv": "Alates tänasest",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "Alates esmaspäevast"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "Alates kella 8-st"
      },
      {
        "de": "ab Bahnhof",
        "lv": "Jaamast"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "Alates punktist/ajast",
        "example": "ab Montag – Alates esmaspäevast"
      },
      {
        "word": "von",
        "meaning": "Kellestki/millestki • Päritolu",
        "example": "von mir – Minult"
      },
      {
        "word": "aus",
        "meaning": "Seest välja",
        "example": "aus dem Haus – Majast / majast välja"
      }
    ],
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "ab"
            ]
          },
          "lv": {
            "purple": [
              "alates"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ab"
            ]
          },
          "lv": {
            "purple": [
              "alates"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ab"
            ]
          },
          "lv": {
            "purple": [
              "-st"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ab"
            ]
          },
          "lv": {
            "purple": [
              "jaamast"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "ab"
            ]
          },
          "example": {
            "green": [
              "ab"
            ],
            "purple": [
              "Montag"
            ]
          }
        },
        {
          "word": {
            "green": [
              "von"
            ]
          },
          "example": {
            "yellow": [
              "von"
            ],
            "purple": [
              "von"
            ]
          }
        },
        {
          "word": {
            "green": [
              "aus"
            ]
          },
          "example": {
            "blue": [
              "aus"
            ],
            "purple": [
              "aus"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "ab"
          ],
          "purple": [
            "Atceries"
          ],
          "green": [
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "ab"
          ],
          "purple": [
            "rāda"
          ],
          "green": [
            "rāda",
            "rāda"
          ]
        },
        {
          "yellow": [
            "von"
          ],
          "red": [
            "aus"
          ],
          "purple": [
            "doma",
            "doma"
          ]
        }
      ]
    },
    "tip": {
      "text": "Atceries: sākuma punkts laikā/vietā → ab."
    },
    "important": [
      "ab visar en startpunkt i tid eller plats.",
      "Om betydelsen är ursprung eller riktning ut från insidan används oftare von eller aus."
    ]
  }
}
```

---

## Finding 27

**Audit ID:** `LRB098-0027`
**Finding Stable ID:** `g2/a1/sv|aber|idx:21|lv; study.examples[].lv|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `aber|idx:21`
**Field / path:** `lv; study.examples[].lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Aga","study.examples[].lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"men","study.translation":"men","study.explanation":"Huvudidé: aber inför en motsättning eller invändning och betyder men, dock eller emellertid.","study.examples":"[{\"de\":\"Ich möchte mitkommen, aber ich habe keine Zeit.\",\"lv\":\"Jag vill följa med, men jag har inte tid.\"},{\"de\":\"Das Essen war lecker, aber zu teuer.\",\"lv\":\"Maten var god men för dyr.\"},{\"de\":\"Er hat recht, aber ich sehe das anders.\",\"lv\":\"Han har rätt, men jag ser det annorlunda.\"}]","study.comparison":"[{\"word\":\"aber\",\"meaning\":\"motsättning / invändning; men\",\"example\":\"Ich komme, aber später. – Jag kommer, men senare.\"},{\"word\":\"sondern\",\"meaning\":\"inte ... utan\",\"example\":\"Ich wollte keinen Tee, sondern Kaffee. – Jag ville inte ha te utan kaffe.\"},{\"word\":\"jedoch\",\"meaning\":\"dock / emellertid\",\"example\":\"Es ist kalt, jedoch sonnig. – Det är kallt men soligt.\"}]","study.tip":"{\"text\":\"Motsättning eller invändning → aber.\"}","study.important":"[\"aber uttrycker en motsättning eller invändning.\",\"I konstruktionen inte ..., utan ... används sondern.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: aber: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aber",
  "lv": "men",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "men",
    "explanation": "Huvudidé: aber inför en motsättning eller invändning och betyder men, dock eller emellertid.",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Jag vill följa med, men jag har inte tid."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Maten var god men för dyr."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Han har rätt, men jag ser det annorlunda."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "motsättning / invändning; men",
        "example": "Ich komme, aber später. – Jag kommer, men senare."
      },
      {
        "word": "sondern",
        "meaning": "inte ... utan",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Jag ville inte ha te utan kaffe."
      },
      {
        "word": "jedoch",
        "meaning": "dock / emellertid",
        "example": "Es ist kalt, jedoch sonnig. – Det är kallt men soligt."
      }
    ],
    "tip": {
      "text": "Motsättning eller invändning → aber."
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "aber uttrycker en motsättning eller invändning.",
      "I konstruktionen inte ..., utan ... används sondern."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "aber",
  "lv": "Aga",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "Aga",
    "explanation": "Kasutatakse vastanduse sissetoomiseks või vastuväite väljendamiseks. Sageli tähendab “aga”, “siiski” või “ometi”.",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Ma tahan kaasa tulla, aga mul ei ole aega."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Toit oli maitsev, aga liiga kallis."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Tal on õigus, aga ma arvan teisiti."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "Vastand • Vastuväide • Siiski",
        "example": "Ich komme, aber später. – Ma tulen, aga hiljem."
      },
      {
        "word": "sondern",
        "meaning": "Mitte • Vaid",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Ma tahtsin teed, mitte kohvi."
      },
      {
        "word": "jedoch",
        "meaning": "Siiski",
        "example": "Es ist kalt, jedoch sonnig. – On külm, siiski päikeseline."
      }
    ],
    "tip": {
      "text": "Atceries: pretstats/iebilde → aber."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "aber"
            ]
          },
          "lv": {
            "purple": [
              "aga"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "aber"
            ]
          },
          "lv": {
            "purple": [
              "aga"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "aber"
            ]
          },
          "lv": {
            "purple": [
              "tal"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "aber"
            ]
          },
          "example": {
            "green": [
              "aber"
            ],
            "purple": [
              "aga"
            ]
          }
        },
        {
          "word": {
            "green": [
              "sondern"
            ]
          },
          "example": {
            "yellow": [
              "sondern"
            ],
            "purple": [
              "mitte"
            ]
          }
        },
        {
          "word": {
            "green": [
              "jedoch"
            ]
          },
          "example": {
            "red": [
              "jedoch"
            ],
            "purple": [
              "siiski"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "green": [
            "aber"
          ],
          "purple": [
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "green": [
            "aber"
          ],
          "purple": [
            "aber",
            "aber"
          ]
        },
        {
          "yellow": [
            "sondern"
          ],
          "purple": [
            "pretstats",
            "pretstats"
          ]
        }
      ]
    },
    "important": [
      "aber visar en motsats eller invändning.",
      "Om motsatsen är \"inte..., utan snarare...\", använder man vanligtvis sondern på tyska."
    ]
  }
}
```

---

## Finding 28

**Audit ID:** `LRB098-0028`
**Finding Stable ID:** `g2/a1/sv|also|idx:26|study.examples.lv|LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** sv
**Card:** `also|idx:26`
**Field / path:** `study.examples.lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"alltså","study.translation":"alltså","study.explanation":"Huvudidé: also uttrycker en slutsats eller följd och betyder alltså eller följaktligen.","study.examples":"[{\"de\":\"Es regnet, also bleibe ich zu Hause.\",\"lv\":\"Det regnar, så jag stannar hemma.\"},{\"de\":\"Du bist krank, also gehst du nicht zur Arbeit.\",\"lv\":\"Du är sjuk, så du går inte till jobbet.\"},{\"de\":\"Ich habe viel gelernt, also verstehe ich es jetzt.\",\"lv\":\"Jag har studerat mycket, så nu förstår jag det.\"}]","study.comparison":"[{\"word\":\"also\",\"meaning\":\"alltså / följaktligen\",\"example\":\"Es regnet, also bleibe ich zu Hause. – Det regnar, alltså stannar jag hemma.\"},{\"word\":\"auch\",\"meaning\":\"också\",\"example\":\"Ich komme auch. – Jag kommer också.\"},{\"word\":\"deshalb\",\"meaning\":\"därför\",\"example\":\"Es regnet, deshalb bleibe ich zu Hause. – Det regnar, därför stannar jag hemma.\"}]","study.tip":"{\"text\":\"Slutsats av det föregående → also.\"}","study.important":"[\"also visar en slutsats eller följd.\",\"deshalb kan också uttrycka följden och motsvarar därför.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: also: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "also",
  "lv": "alltså",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "alltså",
    "explanation": "Huvudidé: also uttrycker en slutsats eller följd och betyder alltså eller följaktligen.",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Det regnar, så jag stannar hemma."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Du är sjuk, så du går inte till jobbet."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Jag har studerat mycket, så nu förstår jag det."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "alltså / följaktligen",
        "example": "Es regnet, also bleibe ich zu Hause. – Det regnar, alltså stannar jag hemma."
      },
      {
        "word": "auch",
        "meaning": "också",
        "example": "Ich komme auch. – Jag kommer också."
      },
      {
        "word": "deshalb",
        "meaning": "därför",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Det regnar, därför stannar jag hemma."
      }
    ],
    "tip": {
      "text": "Slutsats av det föregående → also."
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "also visar en slutsats eller följd.",
      "deshalb kan också uttrycka följden och motsvarar därför."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "also",
  "lv": "Seega",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "Seega",
    "explanation": "Kasutatakse järelduse tegemiseks või tulemuse näitamiseks. Tähendab “seega”, “järelikult”.",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Sajab vihma, seepärast jään ma koju."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Sa oled haige, seepärast sa ei lähe tööle."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Ma olen palju õppinud, seega saan nüüd aru."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "Seega • Järelikult",
        "example": "Es regnet, also bleibe ich zu Hause. – Sajab vihma, järelikult jään koju."
      },
      {
        "word": "auch",
        "meaning": "Ka",
        "example": "Ich komme auch. – Ma tulen ka."
      },
      {
        "word": "deshalb",
        "meaning": "Seepärast",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Sajab vihma, seepärast jään koju."
      }
    ],
    "tip": {
      "text": "Atceries: secinājums → also."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "also"
            ]
          },
          "lv": {
            "purple": [
              "seepärast"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "also"
            ]
          },
          "lv": {
            "purple": [
              "seepärast"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "also"
            ]
          },
          "lv": {
            "purple": [
              "seega"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "also"
            ]
          },
          "example": {
            "green": [
              "also"
            ],
            "purple": [
              "regnet"
            ]
          }
        },
        {
          "word": {
            "green": [
              "auch"
            ]
          },
          "example": {
            "yellow": [
              "auch"
            ],
            "purple": [
              "ka"
            ]
          }
        },
        {
          "word": {
            "green": [
              "deshalb"
            ]
          },
          "example": {
            "green": [
              "deshalb"
            ],
            "purple": [
              "seepärast"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "green": [
            "also"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "green": [
            "also"
          ],
          "purple": [
            "also"
          ]
        },
        {
          "green": [
            "deshalb"
          ],
          "purple": [
            "Latviešu"
          ]
        }
      ]
    },
    "important": [
      "also visar en slutsats: från det som sagts följer nästa tanke.",
      "Det svenska \"därför\" kan ofta också vara deshalb."
    ]
  }
}
```

---

## Finding 29

**Audit ID:** `LRB098-0029`
**Finding Stable ID:** `g2/a1/sv|an|idx:12|lv; study.examples[].lv|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `an|idx:12`
**Field / path:** `lv; study.examples[].lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Juures • Peal • Ligi","study.examples[].lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vid","study.translation":"vid","study.explanation":"Huvudidé: an anger ofta läge eller kontakt vid en vägg, ett fönster, en dörr, en strand eller annan kant eller yta.","study.examples":"[{\"de\":\"an der Wand\",\"lv\":\"på väggen\"},{\"de\":\"am Fenster\",\"lv\":\"vid fönstret\"},{\"de\":\"am Meer\",\"lv\":\"vid havet\"}]","study.comparison":"[{\"word\":\"an\",\"meaning\":\"vid en yta eller kant\",\"example\":\"an der Wand – på väggen\"},{\"word\":\"auf\",\"meaning\":\"på en horisontell yta\",\"example\":\"auf dem Tisch – på bordet\"},{\"word\":\"bei\",\"meaning\":\"hos en person eller plats\",\"example\":\"beim Arzt – hos läkaren\"}]","study.tip":"{\"text\":\"Vägg, fönster eller kant → an.\"}","study.important":"[\"an betyder inte vilket vid som helst; det knyter ofta något till en yta eller kant.\",\"På en horisontell yta används normalt auf.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: an: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "an",
  "lv": "vid",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "vid",
    "explanation": "Huvudidé: an anger ofta läge eller kontakt vid en vägg, ett fönster, en dörr, en strand eller annan kant eller yta.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "på väggen"
      },
      {
        "de": "am Fenster",
        "lv": "vid fönstret"
      },
      {
        "de": "am Meer",
        "lv": "vid havet"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "vid en yta eller kant",
        "example": "an der Wand – på väggen"
      },
      {
        "word": "auf",
        "meaning": "på en horisontell yta",
        "example": "auf dem Tisch – på bordet"
      },
      {
        "word": "bei",
        "meaning": "hos en person eller plats",
        "example": "beim Arzt – hos läkaren"
      }
    ],
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "tip": {
      "text": "Vägg, fönster eller kant → an."
    },
    "important": [
      "an betyder inte vilket vid som helst; det knyter ofta något till en yta eller kant.",
      "På en horisontell yta används normalt auf."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "an",
  "lv": "Juures • Peal • Ligi",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "Juures • Pinna küljes • Serva ääres",
    "explanation": "Kasutatakse, kui miski asub seina, akna, ukse, jõe, mereranna või mõne muu ääre/pinna juures.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "Seina küljes / seinal"
      },
      {
        "de": "am Fenster",
        "lv": "Akna juures"
      },
      {
        "de": "am Meer",
        "lv": "Mere ääres"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "Pinna või serva juures",
        "example": "an der Wand – Seinal"
      },
      {
        "word": "auf",
        "meaning": "Horisontaalsel pinnal",
        "example": "auf dem Tisch – Laual"
      },
      {
        "word": "bei",
        "meaning": "Isiku või koha juures",
        "example": "beim Arzt – Arsti juures"
      }
    ],
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "an"
            ]
          },
          "lv": {
            "purple": [
              "seina",
              "seina"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "am"
            ]
          },
          "lv": {
            "purple": [
              "juures"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "am"
            ]
          },
          "lv": {
            "purple": [
              "mere"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "an"
            ]
          },
          "example": {
            "green": [
              "an"
            ],
            "purple": [
              "der"
            ]
          }
        },
        {
          "word": {
            "green": [
              "auf"
            ]
          },
          "example": {
            "yellow": [
              "auf"
            ],
            "purple": [
              "auf"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bei"
            ]
          },
          "example": {
            "red": [
              "beim"
            ],
            "purple": [
              "juures"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "an"
          ],
          "purple": [
            "Atceries"
          ],
          "green": [
            "Atceries",
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "an"
          ],
          "purple": [
            "nav"
          ],
          "green": [
            "nav",
            "nav",
            "nav",
            "nav"
          ]
        },
        {
          "yellow": [
            "auf"
          ],
          "purple": [
            "horizontālas"
          ]
        }
      ]
    },
    "tip": {
      "text": "Atceries: pie sienas/loga/malas → an."
    },
    "important": [
      "an är inte vilket \"vid\" som helst. Det betyder ofta vid en yta, vägg, fönster eller kant.",
      "För horisontella ytor använder man vanligtvis auf."
    ]
  }
}
```

---

## Finding 30

**Audit ID:** `LRB098-0030`
**Finding Stable ID:** `g2/a1/sv|Appetit|idx:689|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** sv
**Card:** `Appetit|idx:689`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Isu","study.explanation":"[\"Põhiidee: Tunne, et tahaks süüa. ainult ainsus — mitmust ei ole.\",\"Der Appetit tähendab peamiselt: soov süüa.\",\"Sageli kirjeldab: tunnet (ainult ainsuses).\",\"Der Appetit on ainult ainsuses — isu.\",\"A1 tasemel esinevad need sageli koos, näiteks: Guten Appetit!\"]","study.tip":"[\"der Appetit = aptit\",\"Använd der Appetit när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"der Appetit finns endast i singular.\",\"Fel: die Appetite → Korrekt: der Appetit\",\"Fel: Ich bin Appetit. → Korrekt: Ich habe Appetit.\",\"Känsla: der Appetit.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"aptit","study.translation":"aptit","study.explanation":"[\"Huvudidé: der Appetit betyder aptit, alltså lust att äta, och används här i singular.\",\"Guten Appetit! motsvarar Smaklig måltid! eller Smaklig spis!\"]","study.examples":"[{\"de\":\"Guten Appetit!\",\"lv\":\"Smaklig måltid!\"},{\"de\":\"Guten Appetit!\",\"lv\":\"Smaklig måltid!\"},{\"de\":\"Ich habe keinen Appetit.\",\"lv\":\"Jag har ingen aptit.\"}]","study.tip":"[\"der Appetit = aptit.\",\"Använd singular i denna betydelse.\"]","study.important":"[\"der Appetit används i singular.\",\"Skriv der Appetit, inte *die Appetite.\",\"Det heter Ich habe Appetit, inte *Ich bin Appetit.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{},{}]}}
**Note:** OWNER approved override: Appetit: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Appetit",
  "de_article": "der",
  "lv": "aptit",
  "level": "A1",
  "study": {
    "id": "a1-appetit",
    "layout": "standardStudy",
    "translation": "aptit",
    "explanation": [
      "Huvudidé: der Appetit betyder aptit, alltså lust att äta, och används här i singular.",
      "Guten Appetit! motsvarar Smaklig måltid! eller Smaklig spis!"
    ],
    "examples": [
      {
        "de": "Guten Appetit!",
        "lv": "Smaklig måltid!"
      },
      {
        "de": "Guten Appetit!",
        "lv": "Smaklig måltid!"
      },
      {
        "de": "Ich habe keinen Appetit.",
        "lv": "Jag har ingen aptit."
      }
    ],
    "tip": [
      "der Appetit = aptit.",
      "Använd singular i denna betydelse."
    ],
    "important": [
      "der Appetit används i singular.",
      "Skriv der Appetit, inte *die Appetite.",
      "Det heter Ich habe Appetit, inte *Ich bin Appetit."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Appetit",
  "de_article": "der",
  "lv": "Isu",
  "level": "A1",
  "study": {
    "id": "a1-appetit",
    "layout": "standardStudy",
    "translation": "Isu",
    "explanation": [
      "Põhiidee: Tunne, et tahaks süüa. ainult ainsus — mitmust ei ole.",
      "Der Appetit tähendab peamiselt: soov süüa.",
      "Sageli kirjeldab: tunnet (ainult ainsuses).",
      "Der Appetit on ainult ainsuses — isu.",
      "A1 tasemel esinevad need sageli koos, näiteks: Guten Appetit!"
    ],
    "examples": [
      {
        "de": "Guten Appetit!",
        "lv": "Head isu!"
      },
      {
        "de": "Guten Appetit!",
        "lv": "Head isu!"
      },
      {
        "de": "Ich habe keinen Appetit.",
        "lv": "Mul ei ole isu."
      }
    ],
    "tip": [
      "der Appetit = aptit",
      "Använd der Appetit när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "der Appetit finns endast i singular.",
      "Fel: die Appetite → Korrekt: der Appetit",
      "Fel: Ich bin Appetit. → Korrekt: Ich habe Appetit.",
      "Känsla: der Appetit."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Appetit",
          "appetit"
        ],
        "purple": [
          "isu",
          "isu"
        ],
        "yellow": [
          "Appetit"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "appetit"
            ]
          },
          "lv": {
            "purple": [
              "isu"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "appetit"
            ]
          },
          "lv": {
            "purple": [
              "isu"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "appetit"
            ]
          },
          "lv": {
            "purple": [
              "isu"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "der"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "der Appetit"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 31

**Audit ID:** `LRB098-0031`
**Finding Stable ID:** `g2/a1/sv|auch|idx:48|study.examples.lv|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sv
**Card:** `auch|idx:48`
**Field / path:** `study.examples.lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"också","study.translation":"också","study.explanation":"[\"Huvudidé: auch är det vanligaste neutrala ordet för också.\",\"Det lägger till en person, sak eller handling.\"]","study.examples":"[{\"de\":\"Ich komme auch.\",\"lv\":\"Jag kommer också.\"},{\"de\":\"Sie arbeitet auch hier.\",\"lv\":\"Hon arbetar också här.\"},{\"de\":\"Ich wünsche Ihnen auch einen schönen Tag.\",\"lv\":\"Jag önskar er också en trevlig dag.\"}]","study.tip":"[\"auch = också.\",\"Placera auch så att det tillagda ledet blir tydligt.\"]","study.important":"[\"auch är det vanligaste neutrala ordet för också.\",\"Rätt: Ich wünsche Ihnen auch einen schönen Tag.\",\"Fel: *Ich auch wünsche Ihnen einen schönen Tag.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{},{}]}}
**Note:** OWNER approved override: auch: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auch",
  "lv": "också",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "också",
    "explanation": [
      "Huvudidé: auch är det vanligaste neutrala ordet för också.",
      "Det lägger till en person, sak eller handling."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Jag kommer också."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "Hon arbetar också här."
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "Jag önskar er också en trevlig dag."
      }
    ],
    "tip": [
      "auch = också.",
      "Placera auch så att det tillagda ledet blir tydligt."
    ],
    "important": [
      "auch är det vanligaste neutrala ordet för också.",
      "Rätt: Ich wünsche Ihnen auch einen schönen Tag.",
      "Fel: *Ich auch wünsche Ihnen einen schönen Tag."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "auch",
  "lv": "Ka",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "Ka",
    "explanation": [
      "Põhiidee: Kõige sagedasem ja neutraalsem “ka”.",
      "Auch tähendab peamiselt: lihtne “ka”.",
      "Sageli kirjeldab: täiendust.",
      "Auch on kõige tavalisem sõna “ka”."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Ma tulen ka."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "Ma tulen ka."
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "Ta töötab ka siin."
      }
    ],
    "tip": [
      "auch = också",
      "Använd auch när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "Ich auch wünsche Ihnen nav pareiza vārdu kārtība.",
      "auch = arī.",
      "Fel: Ich auch wünsche Ihnen einen schönen Tag."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "auch",
          "auch"
        ],
        "purple": [
          "ka"
        ],
        "green": [
          "Ka"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "auch"
            ]
          },
          "lv": {
            "purple": [
              "ka"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "auch"
            ]
          },
          "lv": {
            "purple": [
              "ka"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "auch"
            ]
          },
          "lv": {
            "purple": [
              "ka"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "auch"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "auch"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 32

**Audit ID:** `LRB098-0032`
**Finding Stable ID:** `g2/a1/sv|baden|idx:68|lv; study.translation; study.examples.lv; study.comparison.example|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `baden|idx:68`
**Field / path:** `lv; study.translation; study.examples.lv; study.comparison.example`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Suplema","study.translation":"Suplema","study.examples.lv":null,"study.comparison.example":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"bada","study.translation":"bada","study.explanation":"[\"Huvudidé: baden betyder bada, vistas i vatten eller ta ett bad.\",\"Om tyngdpunkten ligger på simrörelsen eller sporten används oftare schwimmen.\"]","study.examples":"[{\"de\":\"Ich gehe baden.\",\"lv\":\"Jag går och badar.\"},{\"de\":\"Wir gehen im See baden.\",\"lv\":\"Vi badar i sjön.\"},{\"de\":\"Er schwimmt sehr gut.\",\"lv\":\"Han simmar mycket bra.\"},{\"de\":\"Ich schwimme jeden Montag.\",\"lv\":\"Jag simmar varje måndag.\"}]","study.comparison":"[{\"word\":\"baden\",\"meaning\":\"bada / vistas i vatten / ta ett bad\",\"example\":\"Ich gehe baden. – Jag går och badar.\"},{\"word\":\"schwimmen\",\"meaning\":\"simma som rörelse eller sport\",\"example\":\"Er schwimmt sehr gut. – Han simmar mycket bra.\"},{\"word\":\"duschen\",\"meaning\":\"duscha\",\"example\":\"Ich dusche am Morgen. – Jag duschar på morgonen.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"gå och simma\",\"example\":\"Ich gehe heute schwimmen. – Jag går och simmar i dag.\"}]","study.tip":"{\"text\":\"Bad eller avkoppling i vatten → baden; simrörelse → schwimmen.\"}","study.important":"[\"baden och schwimmen är inte fullständiga synonymer.\",\"baden betonar oftare badet eller vistelsen i vattnet; schwimmen själva simningen.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: baden: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "baden",
  "lv": "bada",
  "level": "A1",
  "study": {
    "id": "a1-baden",
    "layout": "standardStudy",
    "translation": "bada",
    "explanation": [
      "Huvudidé: baden betyder bada, vistas i vatten eller ta ett bad.",
      "Om tyngdpunkten ligger på simrörelsen eller sporten används oftare schwimmen."
    ],
    "examples": [
      {
        "de": "Ich gehe baden.",
        "lv": "Jag går och badar."
      },
      {
        "de": "Wir gehen im See baden.",
        "lv": "Vi badar i sjön."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Han simmar mycket bra."
      },
      {
        "de": "Ich schwimme jeden Montag.",
        "lv": "Jag simmar varje måndag."
      }
    ],
    "comparison": [
      {
        "word": "baden",
        "meaning": "bada / vistas i vatten / ta ett bad",
        "example": "Ich gehe baden. – Jag går och badar."
      },
      {
        "word": "schwimmen",
        "meaning": "simma som rörelse eller sport",
        "example": "Er schwimmt sehr gut. – Han simmar mycket bra."
      },
      {
        "word": "duschen",
        "meaning": "duscha",
        "example": "Ich dusche am Morgen. – Jag duschar på morgonen."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "gå och simma",
        "example": "Ich gehe heute schwimmen. – Jag går och simmar i dag."
      }
    ],
    "tip": {
      "text": "Bad eller avkoppling i vatten → baden; simrörelse → schwimmen."
    },
    "important": [
      "baden och schwimmen är inte fullständiga synonymer.",
      "baden betonar oftare badet eller vistelsen i vattnet; schwimmen själva simningen."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "baden",
  "lv": "Suplema",
  "level": "A1",
  "study": {
    "id": "a1-baden",
    "layout": "standardStudy",
    "translation": "Suplema",
    "explanation": [
      "Põhiidee: baden tähendab suplema, vees olema või vett nautima.",
      "Baden kasutatakse, kui jutt on puhkusest vees, järves, meres või basseinis.",
      "Baden võib tähendada ka vannis käimist.",
      "Kui rõhk on ujumisliigutustel endil või spordil, kasutatakse saksa keeles sagedamini schwimmen."
    ],
    "examples": [
      {
        "de": "Ich gehe baden.",
        "lv": "Ma lähen ujuma."
      },
      {
        "de": "Wir gehen im See baden.",
        "lv": "Me läheme järve ujuma."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Ta ujub väga hästi."
      },
      {
        "de": "Ich schwimme jeden Montag.",
        "lv": "Ma käin igal esmaspäeval ujumas."
      }
    ],
    "comparison": [
      {
        "word": "baden",
        "meaning": "Suplema / vees olema / end pesema",
        "example": "Jag går för att bada."
      },
      {
        "word": "schwimmen",
        "meaning": "Ujuma liikumisena või spordina",
        "example": "Han simmar mycket bra."
      },
      {
        "word": "duschen",
        "meaning": "Duši all käima",
        "example": "Jag duschar på morgonen."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "Ujuma minema",
        "example": "Jag går för att simma idag."
      }
    ],
    "tip": {
      "text": "Atceries: atpūta ūdenī → baden; peldēšanas kustība → schwimmen."
    },
    "important": [
      "baden un schwimmen nav sinonīmi.",
      "Latviski bieži saka vienkārši “peldēt”, bet vācu valodā jāizvēlas pēc situācijas."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "baden"
        ],
        "purple": [
          "suplema",
          "vees olema",
          "vett nautima",
          "vannis käimist"
        ],
        "green": [
          "järves",
          "meres",
          "basseinis"
        ],
        "red": [
          "schwimmen",
          "ujumisliigutustel",
          "spordil"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "baden"
            ]
          },
          "lv": {
            "purple": [
              "lähen"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "baden"
            ],
            "green": [
              "See"
            ]
          },
          "lv": {
            "purple": [
              "läheme"
            ],
            "green": [
              "järve"
            ]
          }
        },
        {
          "de": {
            "red": [
              "schwimmt"
            ]
          },
          "lv": {
            "red": [
              "ujub"
            ]
          }
        },
        {
          "de": {
            "red": [
              "schwimme"
            ]
          },
          "lv": {
            "red": [
              "käin"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "baden"
            ]
          },
          "meaning": {
            "purple": [
              "suplema",
              "vees olema",
              "end pesema"
            ]
          },
          "example": {
            "blue": [
              "baden"
            ]
          }
        },
        {
          "word": {
            "green": [
              "schwimmen"
            ]
          },
          "meaning": {
            "purple": [
              "ujuma",
              "liikumisena",
              "spordina"
            ]
          },
          "example": {
            "red": [
              "schwimmt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "duschen"
            ]
          },
          "meaning": {
            "purple": [
              "duši all käima"
            ]
          },
          "example": {
            "yellow": [
              "dusche"
            ]
          }
        },
        {
          "word": {
            "green": [
              "schwimmen gehen"
            ]
          },
          "meaning": {
            "purple": [
              "ujuma minema"
            ]
          },
          "example": {
            "green": [
              "schwimmen"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "baden"
          ],
          "purple": [
            "Atceries"
          ],
          "red": [
            "schwimmen",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "baden"
          ],
          "red": [
            "schwimmen"
          ]
        },
        {
          "purple": [
            "Latviski"
          ],
          "blue": [
            "Latviski"
          ],
          "red": [
            "Latviski"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 33

**Audit ID:** `LRB098-0033`
**Finding Stable ID:** `g2/a1/sv|bei|idx:78|lv; study.translation; study.examples.lv; study.comparison.meaning|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `bei|idx:78`
**Field / path:** `lv; study.translation; study.examples.lv; study.comparison.meaning`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Juures","study.translation":"Juures","study.examples.lv":null,"study.comparison.meaning":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"hos • vid","study.translation":"hos • vid","study.explanation":"Huvudidé: bei anger att någon befinner sig hos en person, på ett företag eller i vissa omständigheter.","study.examples":"[{\"de\":\"Ich bin bei meinem Freund.\",\"lv\":\"Jag är hos min vän.\"},{\"de\":\"Sie arbeitet bei Siemens.\",\"lv\":\"Hon arbetar på Siemens.\"},{\"de\":\"Bei Regen bleiben wir zu Hause.\",\"lv\":\"När det regnar stannar vi hemma.\"}]","study.comparison":"[{\"word\":\"bei\",\"meaning\":\"hos en person / på ett företag / under vissa omständigheter\",\"example\":\"Ich bin bei meiner Schwester. – Jag är hos min syster.\"},{\"word\":\"an\",\"meaning\":\"vid en vägg, kant eller yta\",\"example\":\"Das Bild hängt an der Wand. – Bilden hänger på väggen.\"},{\"word\":\"zu\",\"meaning\":\"till en person; riktning\",\"example\":\"Ich gehe zu meinem Freund. – Jag går till min vän.\"}]","study.tip":"{\"text\":\"Hos en person eller på ett företag → bei.\"}","study.important":"[\"bei uttrycker ofta befintlig plats hos någon eller på ett företag.\",\"För rörelse till en person används zu.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: bei: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bei",
  "lv": "hos • vid",
  "level": "A1",
  "study": {
    "id": "a1-bei",
    "layout": "standardStudy",
    "translation": "hos • vid",
    "explanation": "Huvudidé: bei anger att någon befinner sig hos en person, på ett företag eller i vissa omständigheter.",
    "examples": [
      {
        "de": "Ich bin bei meinem Freund.",
        "lv": "Jag är hos min vän."
      },
      {
        "de": "Sie arbeitet bei Siemens.",
        "lv": "Hon arbetar på Siemens."
      },
      {
        "de": "Bei Regen bleiben wir zu Hause.",
        "lv": "När det regnar stannar vi hemma."
      }
    ],
    "comparison": [
      {
        "word": "bei",
        "meaning": "hos en person / på ett företag / under vissa omständigheter",
        "example": "Ich bin bei meiner Schwester. – Jag är hos min syster."
      },
      {
        "word": "an",
        "meaning": "vid en vägg, kant eller yta",
        "example": "Das Bild hängt an der Wand. – Bilden hänger på väggen."
      },
      {
        "word": "zu",
        "meaning": "till en person; riktning",
        "example": "Ich gehe zu meinem Freund. – Jag går till min vän."
      }
    ],
    "tip": {
      "text": "Hos en person eller på ett företag → bei."
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "bei uttrycker ofta befintlig plats hos någon eller på ett företag.",
      "För rörelse till en person används zu."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "bei",
  "lv": "Juures",
  "level": "A1",
  "study": {
    "id": "a1-bei",
    "layout": "standardStudy",
    "translation": "Juures",
    "explanation": "Kasutatakse, kui miski asub isiku, organisatsiooni või koha juures või toimub mingites tingimustes.",
    "examples": [
      {
        "de": "Ich bin bei meinem Freund.",
        "lv": "Ma olen oma sõbra juures."
      },
      {
        "de": "Sie arbeitet bei Siemens.",
        "lv": "Ta töötab Siemensis."
      },
      {
        "de": "Bei Regen bleiben wir zu Hause.",
        "lv": "Vihma korral jääme koju."
      }
    ],
    "comparison": [
      {
        "word": "bei",
        "meaning": "Isiku, ettevõtte juures või teatud tingimustel",
        "example": "Ich bin bei meiner Schwester. – Ma olen oma õe juures."
      },
      {
        "word": "an",
        "meaning": "Seina, serva, kalda, pinna ääres",
        "example": "Das Bild hängt an der Wand. – Pilt ripub seinal."
      },
      {
        "word": "zu",
        "meaning": "Kellegi juurde minnakse (suund)",
        "example": "Ich gehe zu meinem Freund. – Ma lähen oma sõbra juurde."
      }
    ],
    "tip": {
      "text": "Atceries: pie cilvēka/vietas/uzņēmuma → bei."
    },
    "sectionAccents": {
      "examples": [
        {
          "blue": [
            "bei"
          ],
          "de": {
            "blue": [
              "bei"
            ]
          }
        },
        {
          "blue": [
            "bei"
          ],
          "de": {
            "blue": [
              "bei"
            ]
          }
        },
        {
          "blue": [
            "Bei"
          ],
          "de": {
            "blue": [
              "Bei"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "purple": [
              "bei"
            ]
          },
          "example": {
            "purple": [
              "bei"
            ]
          }
        },
        {
          "word": {
            "green": [
              "an"
            ]
          },
          "example": {
            "green": [
              "an"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zu"
            ]
          },
          "example": {
            "red": [
              "zu"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "purple": [
            "bei"
          ],
          "green": [
            "Atceries",
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "purple": [
            "bei"
          ],
          "green": [
            "bei",
            "bei",
            "bei"
          ]
        },
        {
          "blue": [
            "auf"
          ],
          "red": [
            "bei"
          ],
          "purple": [
            "runa"
          ]
        }
      ]
    },
    "important": [
      "bei betyder ofta vid en person, vid en plats eller på ett företag.",
      "Om det handlar om rörelse till en yta använder man vanligtvis auf, inte bei."
    ]
  }
}
```

---

## Finding 34

**Audit ID:** `LRB098-0034`
**Finding Stable ID:** `g2/a1/sv|Besuch|idx:87|lv; study.translation; study.examples.lv; study.comparison.meaning|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `Besuch|idx:87`
**Field / path:** `lv; study.translation; study.examples.lv; study.comparison.meaning`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"besök","study.translation":"besök","study.examples.lv":null,"study.comparison.meaning":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"besök","study.translation":"besök","study.explanation":"[\"Huvudidé: der Besuch betyder ett besök eller en visit.\",\"Det kan gälla en plats, en händelse eller en person.\",\"Pluralformen är die Besuche.\"]","study.examples":"[{\"de\":\"Der Besuch im Museum war interessant.\",\"lv\":\"Museibesöket var intressant.\"},{\"de\":\"Danke für deinen Besuch.\",\"lv\":\"Tack för ditt besök.\"},{\"de\":\"Der Arzt macht einen Besuch.\",\"lv\":\"Läkaren gör ett hembesök.\"}]","study.comparison":"[{\"word\":\"der Besuch\",\"meaning\":\"besök / visit\",\"example\":\"Danke für deinen Besuch. – Tack för ditt besök.\"},{\"word\":\"der Besucher\",\"meaning\":\"besökare\",\"example\":\"Der Besucher wartet draußen. – Besökaren väntar utanför.\"},{\"word\":\"besuchen\",\"meaning\":\"besöka\",\"example\":\"Ich besuche meine Großeltern. – Jag besöker mina mor- och farföräldrar.\"}]","study.tip":"{\"text\":\"Besuch är själva besöket; Besucher är personen som besöker.\"}","study.important":"[\"der Besuch kan vara ett besök på en plats eller hos en person.\",\"Plural: die Besuche.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: Besuch: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Besuch",
  "de_article": "der",
  "de_plural": "die Besuche",
  "lv": "besök",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "besök",
    "explanation": [
      "Huvudidé: der Besuch betyder ett besök eller en visit.",
      "Det kan gälla en plats, en händelse eller en person.",
      "Pluralformen är die Besuche."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "Museibesöket var intressant."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Tack för ditt besök."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "Läkaren gör ett hembesök."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "besök / visit",
        "example": "Danke für deinen Besuch. – Tack för ditt besök."
      },
      {
        "word": "der Besucher",
        "meaning": "besökare",
        "example": "Der Besucher wartet draußen. – Besökaren väntar utanför."
      },
      {
        "word": "besuchen",
        "meaning": "besöka",
        "example": "Ich besuche meine Großeltern. – Jag besöker mina mor- och farföräldrar."
      }
    ],
    "tip": {
      "text": "Besuch är själva besöket; Besucher är personen som besöker."
    },
    "important": [
      "der Besuch kan vara ett besök på en plats eller hos en person.",
      "Plural: die Besuche."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Besuch",
  "de_article": "der",
  "de_plural": "die Besuche",
  "lv": "besök",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "besök",
    "explanation": [
      "Huvudidén: der Besuch betyder ett besök, en visitation eller en visitering.",
      "Om det handlar om en plats eller ett event är \"besök\" på svenska lämpligt.",
      "Om Besuch handlar om att besöka en person kan \"besök\" eller \"visitering\" ofta användas på svenska.",
      "Pluralen är die Besuche."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "Museibesöket var intressant."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Tack för ditt besök."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "Doktorn gör hembesök."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "besök • visitering • besöksresa",
        "example": "Danke für deinen Besuch. – Tack för ditt besök."
      },
      {
        "word": "der Besucher",
        "meaning": "Külastaja",
        "example": "Der Besucher wartet draußen. – Besökaren väntar ute."
      },
      {
        "word": "besuchen",
        "meaning": "besöka • visitera",
        "example": "Ich besuche meine Großeltern. – Jag besöker mina farföräldrar."
      }
    ],
    "tip": {
      "text": "Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks."
    },
    "important": [
      "der Besuch är inte bara ett besök; det kan också vara en visitering eller en visitation.",
      "Plural: die Besuche."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Besuch",
          "die Besuche"
        ],
        "purple": [
          "apmeklējums",
          "apciemojums",
          "vizīte"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Besuch"
            ],
            "green": [
              "Museum"
            ]
          },
          "lv": {
            "purple": [
              "apmeklējums"
            ],
            "green": [
              "Muzeja"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Besuch"
            ]
          },
          "lv": {
            "purple": [
              "apciemojumu"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Besuch"
            ],
            "green": [
              "Arzt"
            ]
          },
          "lv": {
            "purple": [
              "vizītē"
            ],
            "green": [
              "Ārsts"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "der Besuch"
            ]
          },
          "meaning": {
            "purple": [
              "apmeklējums",
              "apciemojums",
              "vizīte"
            ]
          }
        },
        {
          "word": {
            "green": [
              "der Besucher"
            ]
          },
          "meaning": {
            "purple": [
              "apmeklētājs"
            ]
          }
        },
        {
          "word": {
            "green": [
              "besuchen"
            ]
          },
          "meaning": {
            "purple": [
              "apmeklēt",
              "apciemot"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Besuch"
          ],
          "purple": [
            "notikums",
            "vizīte"
          ],
          "green": [
            "Besucher"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "der Besuch"
          ],
          "purple": [
            "apmeklējums",
            "apciemojums",
            "vizīte"
          ]
        },
        {
          "blue": [
            "die Besuche"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 35

**Audit ID:** `LRB098-0035`
**Finding Stable ID:** `g2/a1/sv|besuchen|idx:89|lv; study.translation; study.examples.lv; study.comparison.meaning|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `besuchen|idx:89`
**Field / path:** `lv; study.translation; study.examples.lv; study.comparison.meaning`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"besöka","study.translation":"besöka","study.examples.lv":null,"study.comparison.meaning":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"besöka","study.translation":"besöka","study.explanation":"[\"Huvudidé: besuchen betyder besöka en plats, ett evenemang, en kurs eller en person.\",\"På tyska tar verbet ett direkt objekt i ackusativ utan preposition.\"]","study.examples":"[{\"de\":\"Ich besuche das Museum.\",\"lv\":\"Jag besöker museet.\"},{\"de\":\"Wir besuchen einen Deutschkurs.\",\"lv\":\"Vi går en kurs i tyska.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"Jag besöker mina mor- och farföräldrar.\"}]","study.comparison":"[{\"word\":\"besuchen\",\"meaning\":\"besöka en plats, ett evenemang eller en person\",\"example\":\"Ich besuche meine Großeltern. – Jag besöker mina mor- och farföräldrar.\"},{\"word\":\"treffen\",\"meaning\":\"träffa\",\"example\":\"Ich treffe meinen Freund. – Jag träffar min vän.\"},{\"word\":\"zu jemandem gehen\",\"meaning\":\"gå hem till någon\",\"example\":\"Ich gehe zu meinem Freund. – Jag går hem till min vän.\"}]","study.tip":"{\"text\":\"besuchen tar direkt objekt: Ich besuche meine Freundin.\"}","study.important":"[\"besuchen används utan preposition och med ackusativ.\",\"Det kan gälla personer, platser, kurser och evenemang.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: besuchen: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "besuchen",
  "lv": "besöka",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "besöka",
    "explanation": [
      "Huvudidé: besuchen betyder besöka en plats, ett evenemang, en kurs eller en person.",
      "På tyska tar verbet ett direkt objekt i ackusativ utan preposition."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Jag besöker museet."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Vi går en kurs i tyska."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Jag besöker mina mor- och farföräldrar."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "besöka en plats, ett evenemang eller en person",
        "example": "Ich besuche meine Großeltern. – Jag besöker mina mor- och farföräldrar."
      },
      {
        "word": "treffen",
        "meaning": "träffa",
        "example": "Ich treffe meinen Freund. – Jag träffar min vän."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "gå hem till någon",
        "example": "Ich gehe zu meinem Freund. – Jag går hem till min vän."
      }
    ],
    "tip": {
      "text": "besuchen tar direkt objekt: Ich besuche meine Freundin."
    },
    "important": [
      "besuchen används utan preposition och med ackusativ.",
      "Det kan gälla personer, platser, kurser och evenemang."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "besuchen",
  "lv": "besöka",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "besöka",
    "explanation": [
      "Huvudidén: besuchen används när man besöker en plats, ett event eller en person.",
      "En plats, ett event eller en kurs besöks vanligtvis.",
      "Om besuchen hänvisar till en person är det ofta mer naturligt att säga besöka.",
      "På tyska använder man besuchen utan preposition och med ackusativ."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Jag besöker museet."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Vi besöker en tyska språkkurs."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Jag besöker mina morföräldrar."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "besöka en plats eller ett evenemang • visitera en person",
        "example": "Ich besuche meine Großeltern. – Jag besöker mina farföräldrar."
      },
      {
        "word": "treffen",
        "meaning": "träffa",
        "example": "Ich treffe meinen Freund. – Jag träffar min vän."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "gå till någon",
        "example": "Ich gehe zu meinem Freund. – Ma lähen oma sõbra juurde."
      }
    ],
    "tip": {
      "text": "Atceries: vietu apmeklē, bet personu latviski bieži apciemo."
    },
    "important": [
      "besuchen används utan preposition: Ich besuche meine Freundin.",
      "Den svenska översättningen beror på objektet: besöka en plats, visitera en person."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "besuchen"
        ],
        "purple": [
          "apmeklēt",
          "apciemot"
        ],
        "green": [
          "vietu",
          "pasākumu",
          "personu"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "besuche"
            ],
            "green": [
              "Museum"
            ]
          },
          "lv": {
            "purple": [
              "apmeklēju"
            ],
            "green": [
              "muzeju"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "besuchen"
            ],
            "green": [
              "Deutschkurs"
            ]
          },
          "lv": {
            "purple": [
              "apmeklējam"
            ],
            "green": [
              "vācu valodas kursu"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "besuche"
            ],
            "green": [
              "Großeltern"
            ]
          },
          "lv": {
            "purple": [
              "apciemoju"
            ],
            "green": [
              "vecvecākus"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "besuchen"
            ]
          },
          "meaning": {
            "purple": [
              "apmeklēt",
              "apciemot"
            ]
          },
          "example": {
            "blue": [
              "besuche"
            ],
            "purple": [
              "apciemoju"
            ]
          }
        },
        {
          "word": {
            "green": [
              "treffen"
            ]
          },
          "meaning": {
            "purple": [
              "satikt"
            ]
          },
          "example": {
            "yellow": [
              "treffe"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zu jemandem gehen"
            ]
          },
          "meaning": {
            "purple": [
              "iet pie kāda"
            ]
          },
          "example": {
            "yellow": [
              "gehe zu"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "besuchen"
          ],
          "purple": [
            "apmeklēt",
            "apciemot"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "besuchen"
          ],
          "purple": [
            "bez prievārda"
          ]
        },
        {
          "green": [
            "vietu",
            "personu"
          ],
          "purple": [
            "apmeklēt",
            "apciemot"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 36

**Audit ID:** `LRB098-0036`
**Finding Stable ID:** `g2/a1/sv|bis|idx:91|study.examples.lv; study.comparison.example|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `bis|idx:91`
**Field / path:** `study.examples.lv; study.comparison.example`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.examples.lv":null,"study.comparison.example":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"till","study.translation":"till","study.explanation":"Huvudidé: bis anger en gräns, tidpunkt eller ett villkor och betyder till eller tills.","study.examples":"[{\"de\":\"Ich warte bis zu deiner Ankunft.\",\"lv\":\"Jag väntar tills du kommer.\"},{\"de\":\"Bleib hier, bis ich zurückkomme.\",\"lv\":\"Stanna här tills jag kommer tillbaka.\"},{\"de\":\"Ich lerne Deutsch bis zum Abend.\",\"lv\":\"Jag studerar tyska till kvällen.\"},{\"de\":\"Bis jetzt habe ich nichts verstanden.\",\"lv\":\"Hittills har jag inte förstått någonting.\"}]","study.comparison":"[{\"word\":\"bis\",\"meaning\":\"till / tills en gräns eller tidpunkt\",\"example\":\"Ich bleibe bis morgen. – Jag stannar till i morgon.\"},{\"word\":\"bis zu\",\"meaning\":\"fram till en konkret gräns\",\"example\":\"bis zum Bahnhof – fram till stationen\"},{\"word\":\"bis jetzt\",\"meaning\":\"hittills\",\"example\":\"Bis jetzt habe ich nichts verstanden. – Hittills har jag inte förstått någonting.\"}]","study.tip":"{\"text\":\"Gräns i tid, rum eller villkor → bis.\"}","study.important":"[\"bis anger en gräns eller tidpunkt.\",\"bis zu står framför en konkret gräns: bis zum Bahnhof.\",\"bis jetzt = hittills.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{},{}]}}
**Note:** OWNER approved override: bis: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bis",
  "lv": "till",
  "level": "A1",
  "study": {
    "id": "a1-bis",
    "layout": "standardStudy",
    "translation": "till",
    "explanation": "Huvudidé: bis anger en gräns, tidpunkt eller ett villkor och betyder till eller tills.",
    "examples": [
      {
        "de": "Ich warte bis zu deiner Ankunft.",
        "lv": "Jag väntar tills du kommer."
      },
      {
        "de": "Bleib hier, bis ich zurückkomme.",
        "lv": "Stanna här tills jag kommer tillbaka."
      },
      {
        "de": "Ich lerne Deutsch bis zum Abend.",
        "lv": "Jag studerar tyska till kvällen."
      },
      {
        "de": "Bis jetzt habe ich nichts verstanden.",
        "lv": "Hittills har jag inte förstått någonting."
      }
    ],
    "comparison": [
      {
        "word": "bis",
        "meaning": "till / tills en gräns eller tidpunkt",
        "example": "Ich bleibe bis morgen. – Jag stannar till i morgon."
      },
      {
        "word": "bis zu",
        "meaning": "fram till en konkret gräns",
        "example": "bis zum Bahnhof – fram till stationen"
      },
      {
        "word": "bis jetzt",
        "meaning": "hittills",
        "example": "Bis jetzt habe ich nichts verstanden. – Hittills har jag inte förstått någonting."
      }
    ],
    "tip": {
      "text": "Gräns i tid, rum eller villkor → bis."
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {},
        {}
      ]
    },
    "important": [
      "bis anger en gräns eller tidpunkt.",
      "bis zu står framför en konkret gräns: bis zum Bahnhof.",
      "bis jetzt = hittills."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "bis",
  "lv": "Kuni",
  "level": "A1",
  "study": {
    "id": "a1-bis",
    "layout": "standardStudy",
    "translation": "Kuni",
    "explanation": "Osutab mingile piirile, ajahetkele või tingimusele.",
    "examples": [
      {
        "de": "Ich warte bis zu deiner Ankunft.",
        "lv": "Ma ootan sinu saabumiseni."
      },
      {
        "de": "Bleib hier, bis ich zurückkomme.",
        "lv": "Jää siia, kuni ma tagasi tulen."
      },
      {
        "de": "Ich lerne Deutsch bis zum Abend.",
        "lv": "Ma õpin saksa keelt õhtuni."
      },
      {
        "de": "Bis jetzt habe ich nichts verstanden.",
        "lv": "Siiani pole ma midagi aru saanud."
      }
    ],
    "comparison": [
      {
        "word": "bis",
        "meaning": "Kuni (ajahetke saavutamiseni)",
        "example": "Ich bleibe bis morgen. – Ma jään kuni kell 18:00."
      },
      {
        "word": "bis zu",
        "meaning": "Kuni (kuni kindla ajani)",
        "example": "bis zum Bahnhof – Ni."
      },
      {
        "word": "bis jetzt",
        "meaning": "Seni, kuni",
        "example": "Bis jetzt habe ich nichts verstanden. – Ma ootan, kuni sa tuled."
      },
      {
        "word": "bis jetzt",
        "meaning": "Siiani, tänase päevani",
        "example": "Bis jetzt ist alles gut. – Siiani on kõik hästi."
      }
    ],
    "tip": {
      "text": "Atceries: robeža laikā/nosacījumā → bis."
    },
    "sectionAccents": {
      "examples": [
        {
          "purple": [
            "bis"
          ]
        },
        {
          "purple": [
            "bis"
          ]
        },
        {
          "purple": [
            "bis"
          ]
        },
        {
          "blue": [
            "Bis jetzt"
          ]
        }
      ],
      "comparison": [
        {
          "word": {
            "purple": [
              "bis"
            ]
          },
          "example": {
            "purple": [
              "bis"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bis zu"
            ]
          },
          "example": {
            "green": [
              "bis"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bis jetzt"
            ]
          },
          "example": {
            "yellow": [
              "bis dass"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "purple": [
            "bis"
          ],
          "green": [
            "Atceries",
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "purple": [
            "bis"
          ],
          "green": [
            "bis",
            "bis"
          ]
        }
      ]
    },
    "important": [
      "bis = līdz robežai vai laika punktam.",
      "bis jetzt = līdz šim; bis dass = līdz tam, kamēr.",
      "bis jetzt betyder hittills."
    ]
  }
}
```

---

## Finding 37

**Audit ID:** `LRB098-0037`
**Finding Stable ID:** `g2/a1/sv|das|idx:129|study.lv, study.examples.lv, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `das|idx:129`
**Field / path:** `study.lv, study.examples.lv, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.comparison":"[{\"word\":\"das\",\"meaning\":\"See (artikkel / asesõna)\",\"example\":\"Das ist mein Auto. – See on minu auto.\"},{\"word\":\"dies\",\"meaning\":\"See\",\"example\":\"Dies ist mein Auto. – See on minu auto.\"},{\"word\":\"welches\",\"meaning\":\"Mis • Mille • Mida\",\"example\":\"Das ist das Buch, welches ich lese. – See on raamat, mida ma loen.\"}]","study.important":"[\"På A1-nivå lär man sig först das som neutrum artikel.\",\"das är inte detsamma som dass — das kan vara en artikel eller pronomen, dass betyder \\\"att\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"neutrumets bestämda artikel","study.translation":"neutrumets bestämda artikel","study.explanation":"Huvudidé: das är den bestämda artikeln för substantiv i neutrum, men kan också vara pronomen eller relativpronomen.","study.examples":"[{\"de\":\"Das ist mein Auto.\",\"lv\":\"Det här är min bil.\"},{\"de\":\"Das ist gut.\",\"lv\":\"Det är bra.\"},{\"de\":\"Das Buch, das ich lese, ist interessant.\",\"lv\":\"Boken som jag läser är intressant.\"}]","study.comparison":"[{\"word\":\"das\",\"meaning\":\"det/den; artikel eller pronomen\",\"example\":\"Das ist mein Auto. – Det här är min bil.\"},{\"word\":\"dies\",\"meaning\":\"detta\",\"example\":\"Dies ist mein Auto. – Detta är min bil.\"},{\"word\":\"welches\",\"meaning\":\"som / vilket\",\"example\":\"Das ist das Buch, welches ich lese. – Det här är boken som jag läser.\"}]","study.tip":"{\"text\":\"Neutrum → das; att → dass.\"}","study.important":"[\"På A1-nivå lär du dig först das som bestämd artikel i neutrum.\",\"das är inte samma ord som dass.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: das: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "das",
  "lv": "neutrumets bestämda artikel",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "neutrumets bestämda artikel",
    "explanation": "Huvudidé: das är den bestämda artikeln för substantiv i neutrum, men kan också vara pronomen eller relativpronomen.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "Det här är min bil."
      },
      {
        "de": "Das ist gut.",
        "lv": "Det är bra."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Boken som jag läser är intressant."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "det/den; artikel eller pronomen",
        "example": "Das ist mein Auto. – Det här är min bil."
      },
      {
        "word": "dies",
        "meaning": "detta",
        "example": "Dies ist mein Auto. – Detta är min bil."
      },
      {
        "word": "welches",
        "meaning": "som / vilket",
        "example": "Das ist das Buch, welches ich lese. – Det här är boken som jag läser."
      }
    ],
    "tip": {
      "text": "Neutrum → das; att → dass."
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "På A1-nivå lär du dig först das som bestämd artikel i neutrum.",
      "das är inte samma ord som dass."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "das",
  "lv": "Kesksoo määrav artikkel",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "Kesksoo määrav artikkel",
    "explanation": "Kasutatakse kesksoost nimisõnade juures. Mõnes lauses võib “das” toimida ka asesõnana või siduva asesõnana.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "See on minu auto."
      },
      {
        "de": "Das ist gut.",
        "lv": "See on hea."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Raamat, mida ma loen, on huvitav."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "See (artikkel / asesõna)",
        "example": "Das ist mein Auto. – See on minu auto."
      },
      {
        "word": "dies",
        "meaning": "See",
        "example": "Dies ist mein Auto. – See on minu auto."
      },
      {
        "word": "welches",
        "meaning": "Mis • Mille • Mida",
        "example": "Das ist das Buch, welches ich lese. – See on raamat, mida ma loen."
      }
    ],
    "tip": {
      "text": "Atceries: vidus dzimte → das; ka → dass."
    },
    "sectionAccents": {
      "examples": [
        {
          "blue": [
            "Das"
          ]
        },
        {
          "blue": [
            "Das"
          ]
        },
        {
          "de": {
            "blue": [
              "Das"
            ],
            "yellow": [
              "das"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "das"
            ]
          },
          "example": {
            "blue": [
              "Das"
            ]
          }
        },
        {
          "word": {
            "green": [
              "dies"
            ]
          },
          "example": {
            "green": [
              "Dies"
            ]
          }
        },
        {
          "word": {
            "green": [
              "welches"
            ]
          },
          "example": {
            "blue": [
              "Das",
              "das"
            ],
            "yellow": [
              "welches"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "das"
          ],
          "purple": [
            "Atceries"
          ],
          "red": [
            "dass"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "das"
          ],
          "purple": [
            "līmenī"
          ]
        },
        {
          "blue": [
            "das"
          ],
          "purple": [
            "artikuls",
            "das"
          ],
          "red": [
            "dass"
          ]
        }
      ]
    },
    "important": [
      "På A1-nivå lär man sig först das som neutrum artikel.",
      "das är inte detsamma som dass — das kan vara en artikel eller pronomen, dass betyder \"att\"."
    ]
  }
}
```

---

## Finding 38

**Audit ID:** `LRB098-0038`
**Finding Stable ID:** `g2/a1/sv|dass|idx:130|study.lv, study.examples.lv, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `dass|idx:130`
**Field / path:** `study.lv, study.examples.lv, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.comparison":"[{\"word\":\"dass\",\"meaning\":\"Et\",\"example\":\"Ich weiß, dass er kommt. – Ma tean, et ta tuleb.\"},{\"word\":\"weil\",\"meaning\":\"Sest • Sellepärast et\",\"example\":\"Ich bleibe zu Hause, weil es regnet. – Ma jään koju, sest sajab vihma.\"},{\"word\":\"damit\",\"meaning\":\"Et\",\"example\":\"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Ma õpin saksa keelt, et saaksin Saksamaal töötada.\"},{\"word\":\"ob\",\"meaning\":\"Kas\",\"example\":\"Ich weiß nicht, ob er kommt. – Ma ei tea, kas ta tuleb.\"}]","study.important":"[\"dass betyder \\\"att\\\" och inleder en bisats.\",\"Förväxla inte med das, som kan vara artikel eller \\\"det\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"att","study.translation":"att","study.explanation":"Huvudidé: dass inleder en bisats som uttrycker ett faktum, en tanke eller något som någon säger och motsvarar att.","study.examples":"[{\"de\":\"Ich weiß, dass du müde bist.\",\"lv\":\"Jag vet att du är trött.\"},{\"de\":\"Er sagt, dass er kommt.\",\"lv\":\"Han säger att han kommer.\"},{\"de\":\"Ich glaube, dass das stimmt.\",\"lv\":\"Jag tror att det stämmer.\"}]","study.comparison":"[{\"word\":\"dass\",\"meaning\":\"att\",\"example\":\"Ich weiß, dass er kommt. – Jag vet att han kommer.\"},{\"word\":\"weil\",\"meaning\":\"eftersom\",\"example\":\"Ich bleibe zu Hause, weil es regnet. – Jag stannar hemma eftersom det regnar.\"},{\"word\":\"damit\",\"meaning\":\"så att\",\"example\":\"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Jag studerar tyska så att jag kan arbeta i Tyskland.\"},{\"word\":\"ob\",\"meaning\":\"om / huruvida\",\"example\":\"Ich weiß nicht, ob er kommt. – Jag vet inte om han kommer.\"}]","study.tip":"{\"text\":\"att → dass.\"}","study.important":"[\"dass betyder att och inleder en bisats.\",\"Blanda inte ihop dass med das, som kan vara artikel eller pronomen.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: dass: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dass",
  "lv": "att",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "att",
    "explanation": "Huvudidé: dass inleder en bisats som uttrycker ett faktum, en tanke eller något som någon säger och motsvarar att.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Jag vet att du är trött."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "Han säger att han kommer."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Jag tror att det stämmer."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "att",
        "example": "Ich weiß, dass er kommt. – Jag vet att han kommer."
      },
      {
        "word": "weil",
        "meaning": "eftersom",
        "example": "Ich bleibe zu Hause, weil es regnet. – Jag stannar hemma eftersom det regnar."
      },
      {
        "word": "damit",
        "meaning": "så att",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Jag studerar tyska så att jag kan arbeta i Tyskland."
      },
      {
        "word": "ob",
        "meaning": "om / huruvida",
        "example": "Ich weiß nicht, ob er kommt. – Jag vet inte om han kommer."
      }
    ],
    "tip": {
      "text": "att → dass."
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "dass betyder att och inleder en bisats.",
      "Blanda inte ihop dass med das, som kan vara artikel eller pronomen."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "dass",
  "lv": "Et",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "Et",
    "explanation": "Juhatab sisse kõrvallause, mis väljendab fakti, mõtet või öeldut.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Ma tean, et sa oled väsinud."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "Ta ütleb, et ta tuleb."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Ma arvan, et see on õige."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "Et",
        "example": "Ich weiß, dass er kommt. – Ma tean, et ta tuleb."
      },
      {
        "word": "weil",
        "meaning": "Sest • Sellepärast et",
        "example": "Ich bleibe zu Hause, weil es regnet. – Ma jään koju, sest sajab vihma."
      },
      {
        "word": "damit",
        "meaning": "Et",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Ma õpin saksa keelt, et saaksin Saksamaal töötada."
      },
      {
        "word": "ob",
        "meaning": "Kas",
        "example": "Ich weiß nicht, ob er kommt. – Ma ei tea, kas ta tuleb."
      }
    ],
    "tip": {
      "text": "Atceries: ka → dass."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "dass"
            ]
          },
          "lv": {
            "purple": [
              "et"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "dass"
            ]
          },
          "lv": {
            "purple": [
              "et"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "dass"
            ]
          },
          "lv": {
            "purple": [
              "et"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "dass"
            ]
          },
          "example": {
            "blue": [
              "dass"
            ],
            "purple": [
              "et"
            ]
          }
        },
        {
          "word": {
            "green": [
              "weil"
            ]
          },
          "example": {
            "green": [
              "weil"
            ],
            "purple": [
              "sest"
            ]
          }
        },
        {
          "word": {
            "green": [
              "damit"
            ]
          },
          "example": {
            "yellow": [
              "damit"
            ],
            "purple": [
              "et"
            ]
          }
        },
        {
          "word": {
            "green": [
              "ob"
            ]
          },
          "example": {
            "red": [
              "ob"
            ],
            "purple": [
              "kas"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "dass"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "dass"
          ],
          "purple": [
            "dass"
          ],
          "green": [
            "dass"
          ]
        },
        {
          "red": [
            "das"
          ],
          "yellow": [
            "artikuls"
          ],
          "purple": [
            "nejaukt"
          ]
        }
      ]
    },
    "important": [
      "dass betyder \"att\" och inleder en bisats.",
      "Förväxla inte med das, som kan vara artikel eller \"det\"."
    ]
  }
}
```

---

## Finding 39

**Audit ID:** `LRB098-0039`
**Finding Stable ID:** `g2/a1/sv|der|idx:134|study.lv, study.examples.lv, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `der|idx:134`
**Field / path:** `study.lv, study.examples.lv, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.important":"[\"På A1-nivå lär man sig först der som maskulin artikel.\",\"Pronomen och relativ användning kommer senare.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"maskulinums bestämda artikel","study.translation":"maskulinums bestämda artikel","study.explanation":"Huvudidé: der är den bestämda artikeln för maskulina substantiv i nominativ.","study.examples":"[{\"de\":\"Der Mann ist hier.\",\"lv\":\"Mannen är här.\"},{\"de\":\"Der Bus kommt.\",\"lv\":\"Bussen kommer.\"},{\"de\":\"Der Lehrer spricht.\",\"lv\":\"Läraren talar.\"}]","study.tip":"{\"text\":\"Maskulinum → der.\"}","study.important":"[\"På A1-nivå lär du dig först der som maskulin bestämd artikel.\",\"Pronomen- och relativanvändningar kommer senare.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: der: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "der",
  "lv": "maskulinums bestämda artikel",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "maskulinums bestämda artikel",
    "explanation": "Huvudidé: der är den bestämda artikeln för maskulina substantiv i nominativ.",
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "Mannen är här."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "Bussen kommer."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "Läraren talar."
      }
    ],
    "tip": {
      "text": "Maskulinum → der."
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "På A1-nivå lär du dig först der som maskulin bestämd artikel.",
      "Pronomen- och relativanvändningar kommer senare."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "der",
  "lv": "Meessoo määrav artikkel",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "Meessoo määrav artikkel",
    "explanation": "Kasutatakse meessoost nimisõnade juures. Mõnes lauses võib “der” toimida ka asesõnana või siduva asesõnana.",
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "Mees on siin."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "Buss tuleb."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "Õpetaja räägib."
      }
    ],
    "tip": {
      "text": "Atceries: vīriešu dzimte → der."
    },
    "sectionAccents": {
      "examples": [
        {
          "blue": [
            "Der"
          ]
        },
        {
          "blue": [
            "Der"
          ]
        },
        {
          "blue": [
            "Der"
          ]
        }
      ],
      "comparison": [
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "der"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "der"
          ],
          "purple": [
            "līmenī"
          ]
        },
        {
          "red": [
            "Vietniekvārda",
            "Vietniekvārda"
          ]
        }
      ]
    },
    "important": [
      "På A1-nivå lär man sig först der som maskulin artikel.",
      "Pronomen och relativ användning kommer senare."
    ]
  }
}
```

---

## Finding 40

**Audit ID:** `LRB098-0040`
**Finding Stable ID:** `g2/a1/sv|die|idx:137|study.lv, study.examples.lv, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `die|idx:137`
**Field / path:** `study.lv, study.examples.lv, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.important":"[\"På A1-nivå lär man sig först die som feminin artikel.\",\"I plural används die för alla genus.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"femininums bestämda artikel","study.translation":"femininums bestämda artikel","study.explanation":"Huvudidé: die är den bestämda artikeln för feminina substantiv och används också i plural för alla genus.","study.examples":"[{\"de\":\"Die Frau ist hier.\",\"lv\":\"Kvinnan är här.\"},{\"de\":\"Die Katze schläft.\",\"lv\":\"Katten sover.\"},{\"de\":\"Die Lehrerin erklärt.\",\"lv\":\"Lärarinnan förklarar.\"}]","study.tip":"{\"text\":\"Femininum → die.\"}","study.important":"[\"På A1-nivå lär du dig först die som feminin bestämd artikel.\",\"I plural används die för alla genus.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: die: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "die",
  "lv": "femininums bestämda artikel",
  "level": "A1",
  "study": {
    "id": "a1-die",
    "layout": "standardStudy",
    "translation": "femininums bestämda artikel",
    "explanation": "Huvudidé: die är den bestämda artikeln för feminina substantiv och används också i plural för alla genus.",
    "examples": [
      {
        "de": "Die Frau ist hier.",
        "lv": "Kvinnan är här."
      },
      {
        "de": "Die Katze schläft.",
        "lv": "Katten sover."
      },
      {
        "de": "Die Lehrerin erklärt.",
        "lv": "Lärarinnan förklarar."
      }
    ],
    "tip": {
      "text": "Femininum → die."
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "På A1-nivå lär du dig först die som feminin bestämd artikel.",
      "I plural används die för alla genus."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "die",
  "lv": "Naissoo määrav artikkel",
  "level": "A1",
  "study": {
    "id": "a1-die",
    "layout": "standardStudy",
    "translation": "Naissoo määrav artikkel",
    "explanation": "Kasutatakse naissoost nimisõnade juures. Mõnes lauses võib “die” toimida ka asesõnana või siduva asesõnana.",
    "examples": [
      {
        "de": "Die Frau ist hier.",
        "lv": "Naine on siin."
      },
      {
        "de": "Die Katze schläft.",
        "lv": "Kass magab."
      },
      {
        "de": "Die Lehrerin erklärt.",
        "lv": "Naisõpetaja selgitab."
      }
    ],
    "tip": {
      "text": "Atceries: sieviešu dzimte → die."
    },
    "sectionAccents": {
      "examples": [
        {
          "blue": [
            "Die"
          ]
        },
        {
          "blue": [
            "Die"
          ]
        },
        {
          "blue": [
            "Die"
          ]
        }
      ],
      "comparison": [
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "die"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "die"
          ],
          "purple": [
            "līmenī"
          ]
        },
        {
          "blue": [
            "die"
          ],
          "green": [
            "Daudzskaitlī"
          ],
          "purple": [
            "Daudzskaitlī"
          ]
        }
      ]
    },
    "important": [
      "På A1-nivå lär man sig först die som feminin artikel.",
      "I plural används die för alla genus."
    ]
  }
}
```

---

## Finding 41

**Audit ID:** `LRB098-0041`
**Finding Stable ID:** `g2/a1/sv|dieser|idx:139|study.lv, study.examples.lv, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `dieser|idx:139`
**Field / path:** `study.lv, study.examples.lv, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.important":"[\"dieser, diese och dieses ändras efter genus.\",\"I plural är formen återigen diese.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"den här","study.translation":"den här","study.explanation":"Huvudidé: dieser pekar ut en bestämd maskulin person eller sak och betyder den här eller denne.","study.examples":"[{\"de\":\"Dieser Mann ist nett.\",\"lv\":\"Den här mannen är trevlig.\"},{\"de\":\"Ich sehe diesen Hund.\",\"lv\":\"Jag ser den här hunden.\"},{\"de\":\"Dieser Stift ist neu.\",\"lv\":\"Den här pennan är ny.\"}]","study.tip":"{\"text\":\"Den här + maskulinum → dieser.\"}","study.important":"[\"dieser, diese och dieses varierar efter genus.\",\"I ackusativ maskulinum heter formen diesen.\"]","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: dieser: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dieser",
  "lv": "den här",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "den här",
    "explanation": "Huvudidé: dieser pekar ut en bestämd maskulin person eller sak och betyder den här eller denne.",
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "Den här mannen är trevlig."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "Jag ser den här hunden."
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "Den här pennan är ny."
      }
    ],
    "tip": {
      "text": "Den här + maskulinum → dieser."
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "dieser, diese och dieses varierar efter genus.",
      "I ackusativ maskulinum heter formen diesen."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "dieser",
  "lv": "See",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "See",
    "explanation": "Osutab lähedal olevale inimesele, asjale või loomale. Kasutatakse koos meessoost nimisõnaga.",
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "See mees on kena."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "Mulle meeldib see koer."
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "See pastakas on uus."
      }
    ],
    "tip": {
      "text": "Atceries: šis + vīriešu dzimte → dieser."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "Dieser"
            ]
          },
          "lv": {
            "purple": [
              "see"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "diesen"
            ]
          },
          "lv": {
            "purple": [
              "see"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Dieser"
            ]
          },
          "lv": {
            "purple": [
              "see"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "dieser"
          ],
          "purple": [
            "Atceries"
          ],
          "green": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "dieser"
          ],
          "green": [
            "diese"
          ],
          "yellow": [
            "dieses"
          ],
          "purple": [
            "dieser"
          ]
        },
        {
          "red": [
            "diese"
          ],
          "green": [
            "Daudzskaitlī"
          ]
        }
      ]
    },
    "important": [
      "dieser, diese och dieses ändras efter genus.",
      "I plural är formen återigen diese."
    ]
  }
}
```

---

## Finding 42

**Audit ID:** `LRB098-0042`
**Finding Stable ID:** `g2/a1/sv|ein|idx:154|lv; study.explanation; study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `ein|idx:154`
**Field / path:** `lv; study.explanation; study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Umbmäärane artikkel • Üks • Mingi","study.explanation":"[\"Huvudidén: ein är en obestämd artikel.\",\"ein är den obestämda artikeln för maskulina och neutra substantiv i nominativ.\",\"ein används för maskulint: ein Mann.\",\"ein används för neutrum: ein Buch.\",\"För feminin används: eine.\",\"I ackusativ maskulin: einen.\"]","study.comparison":"[{\"word\":\"ein Mann\",\"meaning\":\"maskulint genus\",\"example\":\"En man väntar ute.\"},{\"word\":\"eine Frau\",\"meaning\":\"feminint genus\",\"example\":\"en frau\"},{\"word\":\"ein Buch\",\"meaning\":\"neutrum genus\",\"example\":\"Ich habe ein Buch.\"},{\"word\":\"einen Mann\",\"meaning\":\"ackusativ\",\"example\":\"einen Mann\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"obestämd artikel","study.translation":"obestämd artikel","study.explanation":"[\"Huvudidé: ein är obestämd artikel för maskulina och neutrala substantiv i nominativ.\",\"Femininum har eine och maskulinum i ackusativ einen.\",\"ein kan också motsvara räkneordet en eller ett.\"]","study.examples":"[{\"de\":\"Ein Mann wartet draußen.\",\"lv\":\"En man väntar utanför.\"},{\"de\":\"Ich habe ein Buch.\",\"lv\":\"Jag har en bok.\"},{\"de\":\"Er sucht einen Stift.\",\"lv\":\"Han letar efter en penna.\"},{\"de\":\"Ein Kind spielt.\",\"lv\":\"Ett barn leker.\"}]","study.comparison":"[{\"word\":\"ein Mann\",\"meaning\":\"maskulinum\",\"example\":\"Ein Mann wartet draußen. – En man väntar utanför.\"},{\"word\":\"eine Frau\",\"meaning\":\"femininum\",\"example\":\"eine Frau – en kvinna\"},{\"word\":\"ein Buch\",\"meaning\":\"neutrum\",\"example\":\"Ich habe ein Buch. – Jag har en bok.\"},{\"word\":\"einen Mann\",\"meaning\":\"maskulinum i ackusativ\",\"example\":\"einen Mann – en man i ackusativ\"}]","study.tip":"{\"text\":\"ein är ofta bara en obestämd artikel, inte betonat en/ett.\"}","study.important":"[\"ein används för maskulinum och neutrum i nominativ.\",\"eine används för femininum.\",\"einen används för maskulinum i ackusativ.\"]","study.sectionAccents":{"explanation":[{},{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{},{}]}}
**Note:** OWNER approved override: ein: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ein",
  "lv": "obestämd artikel",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "obestämd artikel",
    "explanation": [
      "Huvudidé: ein är obestämd artikel för maskulina och neutrala substantiv i nominativ.",
      "Femininum har eine och maskulinum i ackusativ einen.",
      "ein kan också motsvara räkneordet en eller ett."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "En man väntar utanför."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Jag har en bok."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Han letar efter en penna."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Ett barn leker."
      }
    ],
    "tip": {
      "text": "ein är ofta bara en obestämd artikel, inte betonat en/ett."
    },
    "sectionAccents": {
      "explanation": [
        {},
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {},
        {}
      ]
    },
    "important": [
      "ein används för maskulinum och neutrum i nominativ.",
      "eine används för femininum.",
      "einen används för maskulinum i ackusativ."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "maskulinum",
        "example": "Ein Mann wartet draußen. – En man väntar utanför."
      },
      {
        "word": "eine Frau",
        "meaning": "femininum",
        "example": "eine Frau – en kvinna"
      },
      {
        "word": "ein Buch",
        "meaning": "neutrum",
        "example": "Ich habe ein Buch. – Jag har en bok."
      },
      {
        "word": "einen Mann",
        "meaning": "maskulinum i ackusativ",
        "example": "einen Mann – en man i ackusativ"
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "ein",
  "lv": "Umbmäärane artikkel • Üks • Mingi",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "Umbmäärane artikkel • Üks • Mingi",
    "explanation": [
      "Huvudidén: ein är en obestämd artikel.",
      "ein är den obestämda artikeln för maskulina och neutra substantiv i nominativ.",
      "ein används för maskulint: ein Mann.",
      "ein används för neutrum: ein Buch.",
      "För feminin används: eine.",
      "I ackusativ maskulin: einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Üks mees ootab väljas."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Mul on üks raamat."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Ta otsib mingit pastakat."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Bērns spēlējas."
      }
    ],
    "tip": {
      "text": "Atceries: nekonkrēts viens/kāds → ein."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "Ein"
            ]
          },
          "lv": {
            "purple": [
              "üks"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ein"
            ]
          },
          "lv": {
            "purple": [
              "üks"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "einen"
            ]
          },
          "lv": {
            "purple": [
              "otsib"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        },
        {
          "word": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "ein"
          ],
          "purple": [
            "Atceries",
            "Atceries"
          ],
          "green": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "ein"
          ],
          "red": [
            "ein"
          ]
        },
        {
          "blue": [
            "der",
            "die",
            "das"
          ],
          "green": [
            "lieta"
          ]
        }
      ]
    },
    "important": [
      "ein nav noteiktais artikuls.",
      "Ja lieta jau ir konkrēti zināma, bieži vajag der, die vai das.",
      "eine — feminin genus.",
      "einen — ackusativ."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "maskulint genus",
        "example": "En man väntar ute."
      },
      {
        "word": "eine Frau",
        "meaning": "feminint genus",
        "example": "en frau"
      },
      {
        "word": "ein Buch",
        "meaning": "neutrum genus",
        "example": "Ich habe ein Buch."
      },
      {
        "word": "einen Mann",
        "meaning": "ackusativ",
        "example": "einen Mann"
      }
    ]
  }
}
```

---

## Finding 43

**Audit ID:** `LRB098-0043`
**Finding Stable ID:** `g2/a1/sv|einmal|idx:700|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `einmal|idx:700`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Üks kord • Kord","study.translation":"Üks kord • Kord","study.explanation":"[\"Põhiidee: Osutab ühele korrale või minevikule (kord ma olin...).\",\"Einmal tähendab peamiselt: üks kord / minevikus.\",\"Sageli kirjeldab: ajamäärust.\",\"Einmal viitab ühele korrale või minevikule (kord ma...).\"]","study.examples":"[{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Ma olin kord Berliinis.\"},{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Ma olin kord Berliinis.\"}]","study.tip":"[\"einmal = en gång\",\"Använd einmal när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"einmal = en gång eller en gång tidigare.\",\"Pekar på ett tillfälle eller dåtiden (en gång var jag...).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"en gång • någon gång","study.translation":"en gång • någon gång","study.explanation":"[\"Huvudidé: einmal betyder en gång och kan också syfta på någon gång i det förflutna.\",\"Sammanhanget avgör om en exakt engångshändelse eller ett obestämt tidigare tillfälle avses.\"]","study.examples":"[{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Jag var en gång i Berlin.\"},{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Jag var en gång i Berlin.\"}]","study.tip":"[\"einmal = en gång eller någon gång.\",\"Använd einmal om ett enda eller obestämt tillfälle.\"]","study.important":"[\"einmal kan ange en gång eller någon gång i det förflutna.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{}]}}
**Note:** OWNER approved override: einmal: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "einmal",
  "lv": "en gång • någon gång",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "en gång • någon gång",
    "explanation": [
      "Huvudidé: einmal betyder en gång och kan också syfta på någon gång i det förflutna.",
      "Sammanhanget avgör om en exakt engångshändelse eller ett obestämt tidigare tillfälle avses."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Jag var en gång i Berlin."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Jag var en gång i Berlin."
      }
    ],
    "tip": [
      "einmal = en gång eller någon gång.",
      "Använd einmal om ett enda eller obestämt tillfälle."
    ],
    "important": [
      "einmal kan ange en gång eller någon gång i det förflutna."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "einmal",
  "lv": "Üks kord • Kord",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "Üks kord • Kord",
    "explanation": [
      "Põhiidee: Osutab ühele korrale või minevikule (kord ma olin...).",
      "Einmal tähendab peamiselt: üks kord / minevikus.",
      "Sageli kirjeldab: ajamäärust.",
      "Einmal viitab ühele korrale või minevikule (kord ma...)."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Ma olin kord Berliinis."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Ma olin kord Berliinis."
      }
    ],
    "tip": [
      "einmal = en gång",
      "Använd einmal när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "einmal = en gång eller en gång tidigare.",
      "Pekar på ett tillfälle eller dåtiden (en gång var jag...)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "einmal"
        ],
        "purple": [
          "üks kord",
          "kord"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "einmal",
              "einmal"
            ]
          },
          "lv": {
            "purple": [
              "olin",
              "kord"
            ]
          }
        },
        {
          "de": {
            "green": [
              "einmal",
              "einmal"
            ]
          },
          "lv": {
            "purple": [
              "olin",
              "kord"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "einmal"
          ]
        },
        {
          "purple": [
            "einmal"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "einmal"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 44

**Audit ID:** `LRB098-0044`
**Finding Stable ID:** `g2/a1/sv|Eis|idx:157|lv; study.explanation; study.examples; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `Eis|idx:157`
**Field / path:** `lv; study.explanation; study.examples; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Jää • Jäätis","study.explanation":"[\"Põhiidee: das Eis võib tähendada nii jääd kui ka jäätist.\",\"Kui jutt on külmast külmunud veest, öeldakse eesti keeles tavaliselt jää.\",\"Kui jutt on toidust või magustoidust, tähendab das Eis igapäevaelus väga sageli jäätis.\",\"Kontekst ütleb tavaliselt kohe, milline tähendus on mõeldud.\",\"A1 tasemel on kõige tähtsamad fraasid ein Eis essen ja Eis im Glas.\"]","study.examples":"[{\"de\":\"Ich esse ein Eis.\",\"lv\":\"Ma söön jäätist.\"},{\"de\":\"Möchtest du ein Eis?\",\"lv\":\"Kas sa tahad jäätist?\"},{\"de\":\"Im Winter liegt Eis auf dem See.\",\"lv\":\"Talvel on järvel jää.\"},{\"de\":\"Das Eis ist kalt.\",\"lv\":\"Jää on külm.\"},{\"de\":\"Ich nehme ein Eis mit Schokolade.\",\"lv\":\"Ma võtan jäätist šokolaadiga.\"}]","study.important":"[\"På svenska är is och glass två olika ord, men på tyska använder man ofta das Eis för båda.\",\"Sammanhanget är avgörande: mat betyder glass, kall yta eller vatten betyder is.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"is • glass","study.translation":"is • glass","study.explanation":"[\"Huvudidé: das Eis betyder is eller glass beroende på sammanhanget.\",\"Fruset vatten är is; som mat eller dessert betyder ordet oftast glass.\"]","study.examples":"[{\"de\":\"Ich esse ein Eis.\",\"lv\":\"Jag äter en glass.\"},{\"de\":\"Möchtest du ein Eis?\",\"lv\":\"Vill du ha en glass?\"},{\"de\":\"Im Winter liegt Eis auf dem See.\",\"lv\":\"På vintern ligger det is på sjön.\"},{\"de\":\"Das Eis ist kalt.\",\"lv\":\"Isen är kall.\"},{\"de\":\"Ich nehme ein Eis mit Schokolade.\",\"lv\":\"Jag tar en chokladglass.\"}]","study.comparison":"[{\"word\":\"das Eis\",\"meaning\":\"is / glass\",\"example\":\"Ich esse ein Eis. – Jag äter en glass.\"},{\"word\":\"der Schnee\",\"meaning\":\"snö\",\"example\":\"Der Schnee ist weiß. – Snön är vit.\"},{\"word\":\"kalt\",\"meaning\":\"kall\",\"example\":\"Das Wasser ist kalt. – Vattnet är kallt.\"},{\"word\":\"das Dessert\",\"meaning\":\"dessert\",\"example\":\"Eis ist ein Dessert. – Glass är en dessert.\"}]","study.tip":"{\"text\":\"Mat eller dessert → glass; fruset vatten → is.\"}","study.important":"[\"Svenskan har två ord, men tyskan använder ofta das Eis för både is och glass.\",\"Sammanhanget avgör betydelsen.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: Eis: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "is • glass",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "is • glass",
    "explanation": [
      "Huvudidé: das Eis betyder is eller glass beroende på sammanhanget.",
      "Fruset vatten är is; som mat eller dessert betyder ordet oftast glass."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Jag äter en glass."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Vill du ha en glass?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "På vintern ligger det is på sjön."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Isen är kall."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Jag tar en chokladglass."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "is / glass",
        "example": "Ich esse ein Eis. – Jag äter en glass."
      },
      {
        "word": "der Schnee",
        "meaning": "snö",
        "example": "Der Schnee ist weiß. – Snön är vit."
      },
      {
        "word": "kalt",
        "meaning": "kall",
        "example": "Das Wasser ist kalt. – Vattnet är kallt."
      },
      {
        "word": "das Dessert",
        "meaning": "dessert",
        "example": "Eis ist ein Dessert. – Glass är en dessert."
      }
    ],
    "tip": {
      "text": "Mat eller dessert → glass; fruset vatten → is."
    },
    "important": [
      "Svenskan har två ord, men tyskan använder ofta das Eis för både is och glass.",
      "Sammanhanget avgör betydelsen."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "Jää • Jäätis",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "Jää • Jäätis",
    "explanation": [
      "Põhiidee: das Eis võib tähendada nii jääd kui ka jäätist.",
      "Kui jutt on külmast külmunud veest, öeldakse eesti keeles tavaliselt jää.",
      "Kui jutt on toidust või magustoidust, tähendab das Eis igapäevaelus väga sageli jäätis.",
      "Kontekst ütleb tavaliselt kohe, milline tähendus on mõeldud.",
      "A1 tasemel on kõige tähtsamad fraasid ein Eis essen ja Eis im Glas."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Ma söön jäätist."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Kas sa tahad jäätist?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Talvel on järvel jää."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Jää on külm."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Ma võtan jäätist šokolaadiga."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "Jää / jäätis",
        "example": "Ich esse ein Eis. = Jag äter en glassöt."
      },
      {
        "word": "der Schnee",
        "meaning": "Lumi",
        "example": "Der Schnee ist weiß. = Snön är vit."
      },
      {
        "word": "kalt",
        "meaning": "Külm",
        "example": "Das Wasser ist kalt. = Vattnet är kallt."
      },
      {
        "word": "das Dessert",
        "meaning": "Magustoit",
        "example": "Eis ist ein Dessert. = Glass är en efterrätt."
      }
    ],
    "tip": {
      "text": "Atceries: ēdiens → saldējums; ziema/ūdens → ledus."
    },
    "important": [
      "På svenska är is och glass två olika ord, men på tyska använder man ofta das Eis för båda.",
      "Sammanhanget är avgörande: mat betyder glass, kall yta eller vatten betyder is."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Eis",
          "Eis"
        ],
        "purple": [
          "jääd",
          "jää",
          "jäätis"
        ],
        "green": [
          "toidust",
          "magustoidust"
        ],
        "yellow": [
          "Põhiidee"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {
            "purple": [
              "jäätist"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {
            "purple": [
              "jäätist"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {
            "purple": [
              "jää"
            ],
            "green": [
              "järvel"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {
            "purple": [
              "jää"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {
            "purple": [
              "jäätist"
            ],
            "yellow": [
              "šokolaadiga"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "das Eis"
            ]
          },
          "meaning": {
            "purple": [
              "jää",
              "jäätis"
            ]
          },
          "example": {
            "blue": [
              "Eis"
            ],
            "purple": [
              "jäätist"
            ]
          }
        },
        {
          "word": {
            "green": [
              "der Schnee"
            ]
          },
          "meaning": {
            "purple": [
              "lumi"
            ]
          },
          "example": {
            "green": [
              "Schnee",
              "Lumi"
            ]
          }
        },
        {
          "word": {
            "green": [
              "kalt"
            ]
          },
          "meaning": {
            "purple": [
              "külm"
            ]
          },
          "example": {
            "yellow": [
              "kalt",
              "külm"
            ]
          }
        },
        {
          "word": {
            "green": [
              "das Dessert"
            ]
          },
          "meaning": {
            "purple": [
              "magustoit"
            ]
          },
          "example": {
            "blue": [
              "Eis"
            ],
            "red": [
              "magustoit"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Atceries"
          ],
          "purple": [
            "Atceries",
            "Atceries"
          ],
          "green": [
            "Atceries",
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "das Eis"
          ],
          "purple": [
            "Latviski",
            "Latviski"
          ]
        },
        {
          "purple": [
            "Konteksts",
            "Konteksts"
          ],
          "green": [
            "Konteksts",
            "Konteksts",
            "Konteksts"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 45

**Audit ID:** `LRB098-0045`
**Finding Stable ID:** `g2/a1/sv|erst|idx:165|study.examples[0].lv; lv; study.explanation|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sv
**Card:** `erst|idx:165`
**Field / path:** `study.examples[0].lv; lv; study.explanation`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.examples[0].lv":null,"lv":"Kõigepealt • Alles","study.explanation":"[\"Huvudidén: erst betyder oftast bara. Men i vissa sammanhang kan det också betyda först.\",\"erst indikerar ofta att något inträffar senare än förväntat.\",\"Ich bin erst 18. — Jag är bara 18.\",\"Es ist erst Montag. — Det är bara måndag.\",\"Erst lernen, dann spielen. — Först lär man sig, sedan spelar man.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"först • bara","study.translation":"först • bara","study.explanation":"[\"Huvudidé: erst betyder ofta bara när något inträffar senare eller är mindre än väntat, men kan också betyda först.\",\"zuerst betyder främst först i en ordningsföljd, medan nur är det allmänna ordet för bara.\"]","study.examples":"[{\"de\":\"Erst lernen, dann spielen.\",\"lv\":\"Först studera, sedan leka.\"},{\"de\":\"Ich komme erst morgen.\",\"lv\":\"Jag kommer först i morgon.\"},{\"de\":\"Er ist erst 18 Jahre alt.\",\"lv\":\"Han är bara 18 år.\"},{\"de\":\"Wir essen erst um acht Uhr.\",\"lv\":\"Vi äter först klockan åtta.\"}]","study.comparison":"[{\"word\":\"erst\",\"meaning\":\"först / bara\",\"example\":\"Erst lernen, dann spielen. – Först studera, sedan leka.\"},{\"word\":\"zuerst\",\"meaning\":\"först i en ordningsföljd\",\"example\":\"Zuerst frühstücken wir. – Först äter vi frukost.\"},{\"word\":\"nur\",\"meaning\":\"bara\",\"example\":\"Ich habe nur 5 Euro. – Jag har bara fem euro.\"},{\"word\":\"dann\",\"meaning\":\"sedan\",\"example\":\"Dann gehen wir nach Hause. – Sedan går vi hem.\"}]","study.tip":"{\"text\":\"Sen tidpunkt eller låg ålder → erst; begränsad mängd → nur.\"}","study.important":"[\"erst och zuerst är inte fullständiga synonymer.\",\"erst betyder ofta först eller bara beroende på sammanhanget.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: erst: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "först • bara",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "först • bara",
    "explanation": [
      "Huvudidé: erst betyder ofta bara när något inträffar senare eller är mindre än väntat, men kan också betyda först.",
      "zuerst betyder främst först i en ordningsföljd, medan nur är det allmänna ordet för bara."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Först studera, sedan leka."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Jag kommer först i morgon."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Han är bara 18 år."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Vi äter först klockan åtta."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "först / bara",
        "example": "Erst lernen, dann spielen. – Först studera, sedan leka."
      },
      {
        "word": "zuerst",
        "meaning": "först i en ordningsföljd",
        "example": "Zuerst frühstücken wir. – Först äter vi frukost."
      },
      {
        "word": "nur",
        "meaning": "bara",
        "example": "Ich habe nur 5 Euro. – Jag har bara fem euro."
      },
      {
        "word": "dann",
        "meaning": "sedan",
        "example": "Dann gehen wir nach Hause. – Sedan går vi hem."
      }
    ],
    "tip": {
      "text": "Sen tidpunkt eller låg ålder → erst; begränsad mängd → nur."
    },
    "accents": {
      "blue": [
        "erst",
        "Erst"
      ],
      "green": [
        "zuerst",
        "Zuerst"
      ],
      "yellow": [
        "nur"
      ],
      "red": [
        "dann",
        "Dann"
      ]
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "erst och zuerst är inte fullständiga synonymer.",
      "erst betyder ofta först eller bara beroende på sammanhanget."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "erst",
  "lv": "Kõigepealt • Alles",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "Kõigepealt • Alles",
    "explanation": [
      "Huvudidén: erst betyder oftast bara. Men i vissa sammanhang kan det också betyda först.",
      "erst indikerar ofta att något inträffar senare än förväntat.",
      "Ich bin erst 18. — Jag är bara 18.",
      "Es ist erst Montag. — Det är bara måndag.",
      "Erst lernen, dann spielen. — Först lär man sig, sedan spelar man."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Kõigepealt juua, siis sõita."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Ma tulen alles homme."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Ta on alles 18 aastat vana."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Me sööme alles kaheksa ajal."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "Kõigepealt • Alles",
        "example": "Erst lernen, dann spielen. – Erst arbeiten, dann Pause. = Kõigepealt töötada, siis paus."
      },
      {
        "word": "zuerst",
        "meaning": "Kõigepealt • Alguses",
        "example": "Zuerst frühstücken wir. = Först äter vi frukost."
      },
      {
        "word": "nur",
        "meaning": "Ainult",
        "example": "Ich habe nur 5 Euro. = Jag har bara 5 euro."
      },
      {
        "word": "dann",
        "meaning": "Siis",
        "example": "Dann gehen wir nach Hause. = Sedan går vi hem."
      }
    ],
    "tip": {
      "text": "Atceries: laiks/skaits → erst; daudzums → nur."
    },
    "accents": {
      "blue": [
        "erst",
        "Erst"
      ],
      "green": [
        "zuerst",
        "Zuerst"
      ],
      "yellow": [
        "nur"
      ],
      "red": [
        "dann",
        "Dann"
      ]
    },
    "sectionAccents": {
      "examples": [
        {
          "blue": [
            "Erst"
          ],
          "red": [
            "dann"
          ]
        },
        {
          "blue": [
            "erst"
          ]
        },
        {
          "blue": [
            "erst"
          ]
        },
        {
          "blue": [
            "erst"
          ]
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "erst"
            ]
          },
          "example": {
            "blue": [
              "Erst"
            ],
            "red": [
              "dann"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zuerst"
            ]
          },
          "example": {
            "green": [
              "Zuerst"
            ]
          }
        },
        {
          "word": {
            "green": [
              "nur"
            ]
          },
          "example": {
            "yellow": [
              "nur"
            ]
          }
        },
        {
          "word": {
            "green": [
              "dann"
            ]
          },
          "example": {
            "red": [
              "Dann"
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
            "nur"
          ],
          "green": [
            "Atceries",
            "Atceries"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "erst"
          ],
          "yellow": [
            "nur"
          ],
          "purple": [
            "erst"
          ]
        },
        {
          "blue": [
            "erst"
          ],
          "green": [
            "erst",
            "erst"
          ],
          "yellow": [
            "nur"
          ],
          "purple": [
            "erst"
          ]
        }
      ]
    },
    "important": [
      "erst un nur abi var skanēt kā “tikai”, bet nav viens un tas pats.",
      "erst bieži runā par laiku, secību vai vēl tikai sasniegtu punktu; nur ierobežo daudzumu.",
      "zuerst betyder ofta: först."
    ]
  }
}
```

---

## Finding 46

**Audit ID:** `LRB098-0046`
**Finding Stable ID:** `g2/a1/sv|essen|idx:690|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** sv
**Card:** `essen|idx:690`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Sööma","study.explanation":"[\"Põhiidee: Tegusõna — toitu sööma.\",\"Essen tähendab peamiselt: toitu tarbima.\",\"Sageli kirjeldab: tegevust.\",\"Essen tähendab peamiselt: toit või söögikord.\",\"Sageli kirjeldab: asja.\",\"Essen tähendab söömist.\",\"Das Essen võib tähendada toitu või söögikorda üldiselt.\"]","study.tip":"[\"essen = äta\",\"Använd essen när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"essen är ett verb utan artikel.\",\"das Essen är inte detsamma som essen.\",\"Verbet: essen.\",\"Maten/måltiden: das Essen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"äta","study.translation":"äta","study.explanation":"[\"Huvudidé: essen med liten bokstav är ett verb och betyder äta.\",\"Substantivet das Essen med stor bokstav betyder mat eller måltid.\"]","study.examples":"[{\"de\":\"Ich esse gern Pizza.\",\"lv\":\"Jag äter gärna pizza.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"Vad vill ni äta?\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"Vi äter klockan tolv.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"Maten är färdig.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"Maten smakar mycket gott.\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Maten smakar gott.\"}]","study.tip":"[\"essen = äta; das Essen = mat eller måltid.\",\"Kontrollera stor bokstav och artikel.\"]","study.important":"[\"essen är ett verb utan artikel.\",\"das Essen är ett substantiv.\",\"Handling: essen. Sak eller måltid: das Essen.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{},{}]}}
**Note:** OWNER approved override: essen: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "essen",
  "lv": "äta",
  "level": "A1",
  "study": {
    "id": "a1-essen",
    "layout": "standardStudy",
    "translation": "äta",
    "explanation": [
      "Huvudidé: essen med liten bokstav är ett verb och betyder äta.",
      "Substantivet das Essen med stor bokstav betyder mat eller måltid."
    ],
    "examples": [
      {
        "de": "Ich esse gern Pizza.",
        "lv": "Jag äter gärna pizza."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Vad vill ni äta?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Vi äter klockan tolv."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Maten är färdig."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Maten smakar mycket gott."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Maten smakar gott."
      }
    ],
    "tip": [
      "essen = äta; das Essen = mat eller måltid.",
      "Kontrollera stor bokstav och artikel."
    ],
    "important": [
      "essen är ett verb utan artikel.",
      "das Essen är ett substantiv.",
      "Handling: essen. Sak eller måltid: das Essen."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "essen",
  "lv": "Sööma",
  "level": "A1",
  "study": {
    "id": "a1-essen",
    "layout": "standardStudy",
    "translation": "Sööma",
    "explanation": [
      "Põhiidee: Tegusõna — toitu sööma.",
      "Essen tähendab peamiselt: toitu tarbima.",
      "Sageli kirjeldab: tegevust.",
      "Essen tähendab peamiselt: toit või söögikord.",
      "Sageli kirjeldab: asja.",
      "Essen tähendab söömist.",
      "Das Essen võib tähendada toitu või söögikorda üldiselt."
    ],
    "examples": [
      {
        "de": "Ich esse gern Pizza.",
        "lv": "Ma söön meelsasti pitsat."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Mida te tahate süüa?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Me sööme kell 12."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Toit on valmis."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Toit maitseb väga hästi."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Toit maitseb hästi."
      }
    ],
    "tip": [
      "essen = äta",
      "Använd essen när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "essen är ett verb utan artikel.",
      "das Essen är inte detsamma som essen.",
      "Verbet: essen.",
      "Maten/måltiden: das Essen."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "essen",
          "essen"
        ],
        "purple": [
          "sööma"
        ],
        "blue": [
          "essen",
          "essen"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "esse"
            ]
          },
          "lv": {
            "purple": [
              "söön"
            ]
          }
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "mida"
            ]
          }
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "sööme"
            ]
          }
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "toit"
            ]
          }
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "toit"
            ]
          }
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "toit"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "essen"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "essen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 47

**Audit ID:** `LRB098-0047`
**Finding Stable ID:** `g2/a1/sv|Essen|idx:691|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** sv
**Card:** `Essen|idx:691`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Toit","study.explanation":"[\"Põhiidee: Nimisõna — toit või terve söögikord.\",\"Das Essen tähendab peamiselt: toitu tarbima.\",\"Sageli kirjeldab: tegevust.\",\"Das Essen tähendab peamiselt: toit või söögikord.\",\"Sageli kirjeldab: asja.\",\"Essen tähendab söömist.\",\"Das Essen võib tähendada toitu või söögikorda üldiselt.\"]","study.tip":"[\"das Essen = äta\",\"Använd das Essen när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"essen är ett verb utan artikel.\",\"das Essen är inte detsamma som essen.\",\"Verbet: essen.\",\"Maten/måltiden: das Essen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"mat • måltid","study.translation":"mat • måltid","study.explanation":"[\"Huvudidé: das Essen är ett substantiv och betyder mat eller måltid.\",\"Verbet essen med liten bokstav betyder äta.\"]","study.examples":"[{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Maten smakar gott.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"Vad vill ni äta?\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"Vi äter klockan tolv.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"Maten är färdig.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"Maten smakar mycket gott.\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Maten smakar gott.\"}]","study.tip":"[\"das Essen = mat/måltid; essen = äta.\",\"Kontrollera stor bokstav och artikel.\"]","study.important":"[\"essen är ett verb utan artikel.\",\"das Essen är ett substantiv.\",\"Handling: essen. Sak eller måltid: das Essen.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":[{},{}],"important":[{},{},{}]}}
**Note:** OWNER approved override: Essen: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "mat • måltid",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "mat • måltid",
    "explanation": [
      "Huvudidé: das Essen är ett substantiv och betyder mat eller måltid.",
      "Verbet essen med liten bokstav betyder äta."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Maten smakar gott."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Vad vill ni äta?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Vi äter klockan tolv."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Maten är färdig."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Maten smakar mycket gott."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Maten smakar gott."
      }
    ],
    "tip": [
      "das Essen = mat/måltid; essen = äta.",
      "Kontrollera stor bokstav och artikel."
    ],
    "important": [
      "essen är ett verb utan artikel.",
      "das Essen är ett substantiv.",
      "Handling: essen. Sak eller måltid: das Essen."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {},
        {}
      ],
      "important": [
        {},
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "Toit",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "Toit",
    "explanation": [
      "Põhiidee: Nimisõna — toit või terve söögikord.",
      "Das Essen tähendab peamiselt: toitu tarbima.",
      "Sageli kirjeldab: tegevust.",
      "Das Essen tähendab peamiselt: toit või söögikord.",
      "Sageli kirjeldab: asja.",
      "Essen tähendab söömist.",
      "Das Essen võib tähendada toitu või söögikorda üldiselt."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Toit maitseb hästi."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Mida te tahate süüa?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Me sööme kell 12."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Toit on valmis."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Toit maitseb väga hästi."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Toit maitseb hästi."
      }
    ],
    "tip": [
      "das Essen = äta",
      "Använd das Essen när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "essen är ett verb utan artikel.",
      "das Essen är inte detsamma som essen.",
      "Verbet: essen.",
      "Maten/måltiden: das Essen."
    ],
    "sectionAccents": {
      "explanation": {
        "yellow": [
          "das Essen",
          "essen"
        ],
        "purple": [
          "toit",
          "söögikord"
        ],
        "green": [
          "Essen"
        ]
      },
      "examples": [
        {
          "de": {
            "yellow": [
              "das Essen",
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "toit",
              "Toit"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "mida",
              "mida"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "sööme",
              "sööme"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "das Essen",
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "toit",
              "toit"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "das Essen",
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "toit",
              "toit"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "das Essen",
              "essen"
            ]
          },
          "lv": {
            "purple": [
              "toit",
              "toit"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "das"
          ]
        },
        {
          "purple": [
            "das"
          ]
        }
      ],
      "important": [
        {
          "yellow": [
            "essen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 48

**Audit ID:** `LRB098-0048`
**Finding Stable ID:** `g2/a1/sv|etwas|idx:169|lv; study.explanation; study.examples; study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sv
**Card:** `etwas|idx:169`
**Field / path:** `lv; study.explanation; study.examples; study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Midagi • Veidi","study.explanation":"[\"Põhiidee: etwas tähendab olenevalt kontekstist midagi või natuke.\",\"Kui etwas asendab tundmatut asja, öeldakse eesti keeles tavaliselt midagi.\",\"Kui etwas seisab omadussõna või hulga juures, tähendab see sageli natuke.\"]","study.examples":"[{\"de\":\"Ich möchte etwas trinken.\",\"lv\":\"Ma sooviksin midagi juua.\"},{\"de\":\"Hast du etwas Zeit?\",\"lv\":\"Kas sul on natuke aega?\"},{\"de\":\"Ich bin etwas müde.\",\"lv\":\"Ma olen veidi väsinud.\"},{\"de\":\"Ich habe etwas für dich.\",\"lv\":\"Mul on sulle midagi.\"},{\"de\":\"Das ist etwas teuer.\",\"lv\":\"See on veidi kallis.\"}]","study.comparison":"[{\"word\":\"etwas\",\"meaning\":\"Midagi / veidi\",\"example\":\"Ich brauche etwas. = Jag behöver något.\"},{\"word\":\"was\",\"meaning\":\"Midagi (kõnekeeles)\",\"example\":\"Willst du was trinken? = Vill du ha något att dricka?\"},{\"word\":\"ein bisschen\",\"meaning\":\"Natuke\",\"example\":\"Ich bin ein bisschen müde. = Jag är lite trött.\"},{\"word\":\"nichts\",\"meaning\":\"Mitte midagi\",\"example\":\"Ich brauche nichts. = Jag behöver ingenting.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"något • lite","study.translation":"något • lite","study.explanation":"[\"Huvudidé: etwas betyder något; framför ett adjektiv kan det betyda lite eller något.\",\"Sammanhanget avgör om det syftar på en sak eller en grad.\"]","study.examples":"[{\"de\":\"Ich möchte etwas trinken.\",\"lv\":\"Jag skulle vilja dricka något.\"},{\"de\":\"Hast du etwas Zeit?\",\"lv\":\"Har du lite tid?\"},{\"de\":\"Ich bin etwas müde.\",\"lv\":\"Jag är lite trött.\"},{\"de\":\"Ich habe etwas für dich.\",\"lv\":\"Jag har något åt dig.\"},{\"de\":\"Das ist etwas teuer.\",\"lv\":\"Det är lite för dyrt.\"}]","study.comparison":"[{\"word\":\"etwas\",\"meaning\":\"något / lite\",\"example\":\"Ich brauche etwas. – Jag behöver något.\"},{\"word\":\"was\",\"meaning\":\"något i talspråk\",\"example\":\"Willst du was trinken? – Vill du dricka något?\"},{\"word\":\"ein bisschen\",\"meaning\":\"lite grann\",\"example\":\"Ich bin ein bisschen müde. – Jag är lite trött.\"},{\"word\":\"nichts\",\"meaning\":\"ingenting\",\"example\":\"Ich brauche nichts. – Jag behöver ingenting.\"}]","study.tip":"{\"text\":\"Sak → något; grad → lite.\"}","study.important":"[\"Framför ett adjektiv betyder etwas ofta lite.\",\"etwas betyder att något finns; nichts betyder ingenting.\"]","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":[{},{}]}}
**Note:** OWNER approved override: etwas: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "etwas",
  "lv": "något • lite",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "något • lite",
    "explanation": [
      "Huvudidé: etwas betyder något; framför ett adjektiv kan det betyda lite eller något.",
      "Sammanhanget avgör om det syftar på en sak eller en grad."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Jag skulle vilja dricka något."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "Har du lite tid?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Jag är lite trött."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "Jag har något åt dig."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "Det är lite för dyrt."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "något / lite",
        "example": "Ich brauche etwas. – Jag behöver något."
      },
      {
        "word": "was",
        "meaning": "något i talspråk",
        "example": "Willst du was trinken? – Vill du dricka något?"
      },
      {
        "word": "ein bisschen",
        "meaning": "lite grann",
        "example": "Ich bin ein bisschen müde. – Jag är lite trött."
      },
      {
        "word": "nichts",
        "meaning": "ingenting",
        "example": "Ich brauche nichts. – Jag behöver ingenting."
      }
    ],
    "tip": {
      "text": "Sak → något; grad → lite."
    },
    "important": [
      "Framför ett adjektiv betyder etwas ofta lite.",
      "etwas betyder att något finns; nichts betyder ingenting."
    ],
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": [
        {},
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "etwas",
  "lv": "Midagi • Veidi",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "Midagi • Veidi",
    "explanation": [
      "Põhiidee: etwas tähendab olenevalt kontekstist midagi või natuke.",
      "Kui etwas asendab tundmatut asja, öeldakse eesti keeles tavaliselt midagi.",
      "Kui etwas seisab omadussõna või hulga juures, tähendab see sageli natuke."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Ma sooviksin midagi juua."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "Kas sul on natuke aega?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Ma olen veidi väsinud."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "Mul on sulle midagi."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "See on veidi kallis."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "Midagi / veidi",
        "example": "Ich brauche etwas. = Jag behöver något."
      },
      {
        "word": "was",
        "meaning": "Midagi (kõnekeeles)",
        "example": "Willst du was trinken? = Vill du ha något att dricka?"
      },
      {
        "word": "ein bisschen",
        "meaning": "Natuke",
        "example": "Ich bin ein bisschen müde. = Jag är lite trött."
      },
      {
        "word": "nichts",
        "meaning": "Mitte midagi",
        "example": "Ich brauche nichts. = Jag behöver ingenting."
      }
    ],
    "tip": {
      "text": "Atceries: lieta → kaut kas; pakāpe → nedaudz."
    },
    "important": [
      "etwas nav tas pats, kas nichts: etwas nozīmē, ka kaut kas ir, bet nichts nozīmē nekas.",
      "Latviski dažreiz labāk skan kaut ko, nevis kaut kas, piemēram: etwas trinken = kaut ko dzert.",
      "På svenska låter det ibland bättre med något, inte något som, till exempel: etwas trinken = något att dricka."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "etwas"
        ],
        "purple": [
          "midagi",
          "veidi",
          "midagi"
        ],
        "green": [
          "kontekstist"
        ],
        "yellow": [
          "asja",
          "hulga"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {
            "purple": [
              "midagi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {
            "purple": [
              "kas"
            ],
            "yellow": [
              "aega"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {
            "purple": [
              "veidi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {
            "purple": [
              "midagi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {
            "purple": [
              "veidi"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "etwas"
            ]
          },
          "meaning": {
            "purple": [
              "midagi",
              "veidi"
            ]
          },
          "example": {
            "blue": [
              "etwas"
            ],
            "purple": [
              "midagi"
            ]
          }
        },
        {
          "word": {
            "green": [
              "was"
            ]
          },
          "meaning": {
            "purple": [
              "midagi"
            ]
          },
          "example": {
            "green": [
              "was"
            ],
            "purple": [
              "midagi"
            ]
          }
        },
        {
          "word": {
            "green": [
              "ein bisschen"
            ]
          },
          "meaning": {
            "purple": [
              "natuke"
            ]
          },
          "example": {
            "yellow": [
              "ein bisschen",
              "Ich"
            ]
          }
        },
        {
          "word": {
            "green": [
              "nichts"
            ]
          },
          "meaning": {
            "purple": [
              "mitte midagi"
            ]
          },
          "example": {
            "red": [
              "nichts",
              "midagi"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Atceries"
          ],
          "purple": [
            "Atceries",
            "Atceries"
          ],
          "yellow": [
            "Atceries"
          ],
          "green": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "etwas"
          ],
          "purple": [
            "etwas"
          ],
          "red": [
            "nichts",
            "etwas"
          ]
        },
        {
          "blue": [
            "etwas"
          ],
          "purple": [
            "Latviski",
            "Latviski"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 49

**Audit ID:** `LRB098-0049`
**Finding Stable ID:** `g2/a1/sv|euch|idx:170|lv; study.examples; study.comparison|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sv
**Card:** `euch|idx:170`
**Field / path:** `lv; study.examples; study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Teid • Teile","study.examples":"[{\"de\":\"Ich sehe euch.\",\"lv\":\"Ma näen teid.\"},{\"de\":\"Ich helfe euch.\",\"lv\":\"Ma aitan teid.\"},{\"de\":\"Ich gebe euch das Buch.\",\"lv\":\"Ma annan teile raamatu.\"},{\"de\":\"Ich danke euch.\",\"lv\":\"Ma tänan teid.\"},{\"de\":\"Ihr erinnert euch.\",\"lv\":\"Teie mäletate.\"}]","study.comparison":"[{\"word\":\"ihr\",\"meaning\":\"Teie\",\"example\":\"Ihr seid freundlich. = Ni är vänliga.\"},{\"word\":\"euch\",\"meaning\":\"Teid / teile\",\"example\":\"Ich helfe euch. = Jag hjälper er.\"},{\"word\":\"euer\",\"meaning\":\"Teie\",\"example\":\"Das ist euer Haus. = Det är ert hus.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"er","study.translation":"er","study.explanation":"Huvudidé: euch är informellt andra person plural i ackusativ eller dativ; på svenska motsvaras båda formerna vanligen av er.","study.examples":"[{\"de\":\"Ich sehe euch.\",\"lv\":\"Jag ser er.\"},{\"de\":\"Ich helfe euch.\",\"lv\":\"Jag hjälper er.\"},{\"de\":\"Ich gebe euch das Buch.\",\"lv\":\"Jag ger er boken.\"},{\"de\":\"Ich danke euch.\",\"lv\":\"Jag tackar er.\"},{\"de\":\"Ihr erinnert euch.\",\"lv\":\"Ni kommer ihåg.\"}]","study.comparison":"[{\"word\":\"ihr\",\"meaning\":\"ni\",\"example\":\"Ihr seid freundlich. – Ni är vänliga.\"},{\"word\":\"euch\",\"meaning\":\"er (ackusativ/dativ)\",\"example\":\"Ich helfe euch. – Jag hjälper er.\"},{\"word\":\"euer\",\"meaning\":\"er / ert / era\",\"example\":\"Das ist euer Haus. – Det är ert hus.\"}]","study.tip":"{\"text\":\"euch används som objekt: Ich sehe euch / Ich helfe euch.\"}","study.sectionAccents":{"explanation":{},"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{}}}
**Note:** OWNER approved override: euch: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "euch",
  "lv": "er",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "er",
    "explanation": "Huvudidé: euch är informellt andra person plural i ackusativ eller dativ; på svenska motsvaras båda formerna vanligen av er.",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Jag ser er."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Jag hjälper er."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Jag ger er boken."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Jag tackar er."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Ni kommer ihåg."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "ni",
        "example": "Ihr seid freundlich. – Ni är vänliga."
      },
      {
        "word": "euch",
        "meaning": "er (ackusativ/dativ)",
        "example": "Ich helfe euch. – Jag hjälper er."
      },
      {
        "word": "euer",
        "meaning": "er / ert / era",
        "example": "Das ist euer Haus. – Det är ert hus."
      }
    ],
    "tip": {
      "text": "euch används som objekt: Ich sehe euch / Ich helfe euch."
    },
    "info": [
      "ihr = teie (lause aluse vorm)",
      "euch = teid (Akkusativ) / teile (Dativ)",
      "euer = teie (omastav vorm)"
    ],
    "accents": {
      "blue": [
        "ihr"
      ],
      "yellow": [
        "euch"
      ],
      "green": [
        "euer"
      ]
    },
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {}
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "euch",
  "lv": "Teid • Teile",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "Teid • Teile",
    "explanation": "“euch” on 2. isiku mitmuse asesõna. Seda kasutatakse nii otsesihitisena (Akkusativ) — “teid”, kui ka kaudsihitisena (Dativ) — “teile”.",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Ma näen teid."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Ma aitan teid."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Ma annan teile raamatu."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Ma tänan teid."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Teie mäletate."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "Teie",
        "example": "Ihr seid freundlich. = Ni är vänliga."
      },
      {
        "word": "euch",
        "meaning": "Teid / teile",
        "example": "Ich helfe euch. = Jag hjälper er."
      },
      {
        "word": "euer",
        "meaning": "Teie",
        "example": "Das ist euer Haus. = Det är ert hus."
      }
    ],
    "tip": {
      "text": "“euch” atbild uz jautājumu “kam?” vai ir tiešais papildinājums teikumos ar “jūs”.",
      "example": "Es jums palīdzu. = Ich helfe euch. Es redzu jūs. = Ich sehe euch. Es stāstu jums. = Ich erzähle euch."
    },
    "info": [
      "ihr = teie (lause aluse vorm)",
      "euch = teid (Akkusativ) / teile (Dativ)",
      "euer = teie (omastav vorm)"
    ],
    "accents": {
      "blue": [
        "ihr"
      ],
      "yellow": [
        "euch"
      ],
      "green": [
        "euer"
      ]
    }
  }
}
```

---

## Finding 50

**Audit ID:** `LRB098-0050`
**Finding Stable ID:** `g2/a1/sv|fahren|idx:172|lv; study.translation; study.explanation; study.examples; study.comparison|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sv
**Card:** `fahren|idx:172`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Sõitma • Vedama • Ära viima","study.translation":"Sõitma • Vedama • Ära viima","study.explanation":"[\"Põhiidee: fahren tähendab sõidukiga sõitma ja mõnes lauses ka kedagi sõidutama või ära viima.\",\"Fahren kasutatakse, kui liikumine toimub autoga, bussiga, rongiga, jalgrattaga või muu sõidukiga.\",\"Kui lauses on isik objektina, võib fahren tähendada sõidutama või ära viima.\",\"Kui liikumine toimub jalgsi, kasutatakse tavaliselt gehen või laufen.\"]","study.examples":"[{\"de\":\"Ich fahre nach Berlin.\",\"lv\":\"Ma sõidan Berliini.\"},{\"de\":\"Ich fahre mit dem Auto.\",\"lv\":\"Ma sõidan autoga.\"},{\"de\":\"Ich fahre meine Tochter zur Schule.\",\"lv\":\"Ma viin oma tütre kooli.\"},{\"de\":\"Ich fahre dich nach Hause.\",\"lv\":\"Ma viin sind koju.\"},{\"de\":\"Wir fahren morgen nach München.\",\"lv\":\"Me sõidame homme Münchenisse.\"}]","study.comparison":"[{\"word\":\"fahren\",\"meaning\":\"Sõidukiga sõitma\",\"example\":\"Jag åker med buss.\"},{\"word\":\"gehen\",\"meaning\":\"Jalgsi minema\",\"example\":\"Jag går hem.\"},{\"word\":\"laufen\",\"meaning\":\"Jooksma / käima\",\"example\":\"Han springer snabbt.\"},{\"word\":\"bringen\",\"meaning\":\"Tooma / kohale toimetama\",\"example\":\"Jag tar boken.\"},{\"word\":\"mitnehmen\",\"meaning\":\"Kaasa võtma\",\"example\":\"Jag tar dig med.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"åka • köra","study.translation":"åka • köra","study.explanation":"[\"Huvudidé: fahren betyder åka eller köra med ett transportmedel och kan med person som objekt betyda köra eller skjutsa någon.\",\"För rörelse till fots används normalt gehen eller laufen.\"]","study.examples":"[{\"de\":\"Ich fahre nach Berlin.\",\"lv\":\"Jag åker till Berlin.\"},{\"de\":\"Ich fahre mit dem Auto.\",\"lv\":\"Jag åker bil.\"},{\"de\":\"Ich fahre meine Tochter zur Schule.\",\"lv\":\"Jag kör min dotter till skolan.\"},{\"de\":\"Ich fahre dich nach Hause.\",\"lv\":\"Jag kör dig hem.\"},{\"de\":\"Wir fahren morgen nach München.\",\"lv\":\"Vi åker till München i morgon.\"}]","study.comparison":"[{\"word\":\"fahren\",\"meaning\":\"åka / köra med transportmedel\",\"example\":\"Ich fahre mit dem Bus. – Jag åker buss.\"},{\"word\":\"gehen\",\"meaning\":\"gå till fots\",\"example\":\"Ich gehe nach Hause. – Jag går hem.\"},{\"word\":\"laufen\",\"meaning\":\"springa / gå\",\"example\":\"Er läuft schnell. – Han springer fort.\"},{\"word\":\"bringen\",\"meaning\":\"ta med / komma med\",\"example\":\"Ich bringe das Buch. – Jag tar med boken.\"},{\"word\":\"mitnehmen\",\"meaning\":\"ta med sig\",\"example\":\"Ich nehme dich mit. – Jag tar med dig.\"}]","study.tip":"{\"text\":\"Transportmedel → fahren; till fots → gehen.\"}","study.important":"{\"text\":\"fahren betyder inte bara åka.\",\"example\":\"Med ett personobjekt kan det betyda köra eller skjutsa någon.\"}","study.sectionAccents":{"explanation":[{},{}],"examples":[{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{},"important":{}}}
**Note:** OWNER approved override: fahren: individually reviewed full SV composite requires exact language/semantic repair; DE/LV source meaning, grammar, examples and contrasts preserved.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fahren",
  "lv": "åka • köra",
  "level": "A1",
  "study": {
    "id": "a1-fahren",
    "layout": "standardStudy",
    "translation": "åka • köra",
    "explanation": [
      "Huvudidé: fahren betyder åka eller köra med ett transportmedel och kan med person som objekt betyda köra eller skjutsa någon.",
      "För rörelse till fots används normalt gehen eller laufen."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Jag åker till Berlin."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Jag åker bil."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Jag kör min dotter till skolan."
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Jag kör dig hem."
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Vi åker till München i morgon."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "åka / köra med transportmedel",
        "example": "Ich fahre mit dem Bus. – Jag åker buss."
      },
      {
        "word": "gehen",
        "meaning": "gå till fots",
        "example": "Ich gehe nach Hause. – Jag går hem."
      },
      {
        "word": "laufen",
        "meaning": "springa / gå",
        "example": "Er läuft schnell. – Han springer fort."
      },
      {
        "word": "bringen",
        "meaning": "ta med / komma med",
        "example": "Ich bringe das Buch. – Jag tar med boken."
      },
      {
        "word": "mitnehmen",
        "meaning": "ta med sig",
        "example": "Ich nehme dich mit. – Jag tar med dig."
      }
    ],
    "tip": {
      "text": "Transportmedel → fahren; till fots → gehen."
    },
    "important": {
      "text": "fahren betyder inte bara åka.",
      "example": "Med ett personobjekt kan det betyda köra eller skjutsa någon."
    },
    "accents": {
      "blue": [
        "fahren",
        "fahre"
      ],
      "purple": [
        "sõitma",
        "sõidan",
        "viima",
        "viin",
        "ära viima"
      ],
      "green": [
        "transporti",
        "transpordivahendit",
        "auto",
        "bussi",
        "rongiga",
        "jalgratast"
      ],
      "yellow": [
        "gehen",
        "laufen"
      ],
      "red": [
        "bringen",
        "mitnehmen"
      ]
    },
    "sectionAccents": {
      "explanation": [
        {},
        {}
      ],
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        },
        {
          "word": {},
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {},
      "important": {}
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "fahren",
  "lv": "Sõitma • Vedama • Ära viima",
  "level": "A1",
  "study": {
    "id": "a1-fahren",
    "layout": "standardStudy",
    "translation": "Sõitma • Vedama • Ära viima",
    "explanation": [
      "Põhiidee: fahren tähendab sõidukiga sõitma ja mõnes lauses ka kedagi sõidutama või ära viima.",
      "Fahren kasutatakse, kui liikumine toimub autoga, bussiga, rongiga, jalgrattaga või muu sõidukiga.",
      "Kui lauses on isik objektina, võib fahren tähendada sõidutama või ära viima.",
      "Kui liikumine toimub jalgsi, kasutatakse tavaliselt gehen või laufen."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Ma sõidan Berliini."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Ma sõidan autoga."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Ma viin oma tütre kooli."
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Ma viin sind koju."
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Me sõidame homme Münchenisse."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "Sõidukiga sõitma",
        "example": "Jag åker med buss."
      },
      {
        "word": "gehen",
        "meaning": "Jalgsi minema",
        "example": "Jag går hem."
      },
      {
        "word": "laufen",
        "meaning": "Jooksma / käima",
        "example": "Han springer snabbt."
      },
      {
        "word": "bringen",
        "meaning": "Tooma / kohale toimetama",
        "example": "Jag tar boken."
      },
      {
        "word": "mitnehmen",
        "meaning": "Kaasa võtma",
        "example": "Jag tar dig med."
      }
    ],
    "tip": {
      "text": "Atceries: transportlīdzeklis → fahren; kājām → gehen."
    },
    "important": {
      "text": "Fahren ≠ ainult “sõitma”",
      "example": "Vācu valodā viens un tas pats darbības vārds bieži nozīmē: braukt • vest • aizvest atkarībā no konteksta."
    },
    "accents": {
      "blue": [
        "fahren",
        "fahre"
      ],
      "purple": [
        "sõitma",
        "sõidan",
        "viima",
        "viin",
        "ära viima"
      ],
      "green": [
        "transporti",
        "transpordivahendit",
        "auto",
        "bussi",
        "rongiga",
        "jalgratast"
      ],
      "yellow": [
        "gehen",
        "laufen"
      ],
      "red": [
        "bringen",
        "mitnehmen"
      ]
    },
    "sectionAccents": {
      "explanation": {
        "blue": [
          "fahren"
        ],
        "purple": [
          "sõitma",
          "viima",
          "ära viima"
        ],
        "green": [
          "autoga",
          "bussiga",
          "rongiga",
          "jalgrattaga",
          "Põhiidee"
        ],
        "yellow": [
          "gehen",
          "laufen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "fahre"
            ]
          },
          "lv": {
            "purple": [
              "sõidan"
            ],
            "green": [
              "Berliini"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "fahre"
            ],
            "green": [
              "Auto"
            ]
          },
          "lv": {
            "purple": [
              "sõidan"
            ],
            "green": [
              "autoga"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "fahre"
            ],
            "green": [
              "Tochter",
              "Schule"
            ]
          },
          "lv": {
            "purple": [
              "viin"
            ],
            "green": [
              "tütre",
              "kooli"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "fahre"
            ],
            "green": [
              "dich",
              "Hause"
            ]
          },
          "lv": {
            "purple": [
              "viin"
            ],
            "green": [
              "sind",
              "viin"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "fahren"
            ],
            "green": [
              "München"
            ]
          },
          "lv": {
            "purple": [
              "sõidame"
            ],
            "green": [
              "Münchenisse"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "fahren"
            ]
          },
          "meaning": {
            "purple": [
              "sõidukiga"
            ]
          },
          "example": {
            "blue": [
              "fahre"
            ]
          }
        },
        {
          "word": {
            "green": [
              "gehen"
            ]
          },
          "meaning": {
            "purple": [
              "jalgsi minema"
            ]
          },
          "example": {
            "yellow": [
              "gehe"
            ]
          }
        },
        {
          "word": {
            "green": [
              "laufen"
            ]
          },
          "meaning": {
            "purple": [
              "jooksma",
              "jooksma"
            ]
          },
          "example": {
            "yellow": [
              "läuft"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bringen"
            ]
          },
          "meaning": {
            "purple": [
              "tooma",
              "kohale toimetama"
            ]
          },
          "example": {
            "red": [
              "bringe"
            ]
          }
        },
        {
          "word": {
            "green": [
              "mitnehmen"
            ]
          },
          "meaning": {
            "purple": [
              "kaasa võtma"
            ]
          },
          "example": {
            "red": [
              "nehme",
              "mit"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "fahren"
          ],
          "yellow": [
            "gehen"
          ],
          "green": [
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "text": {
            "blue": [
              "fahren"
            ],
            "purple": [
              "sõitma"
            ]
          },
          "example": {
            "blue": [
              "fahren"
            ],
            "purple": [
              "sõitma",
              "Fahren",
              "Fahren"
            ]
          }
        }
      ]
    }
  }
}
```

---

