# G2/A1 LRB LRB-098 — OWNER VIEW

**Batch:** LRB-098
**Rows:** 50/50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-12T19:55:25.269Z
**Source commit:** `7560f13d4c8c45a9d3fa0372073e9e45da253f13`
**Branch:** `cursor/lrb-098-owner-review-pc2-3db2`
**Input SHA256:** `7a50d3d1da4b1e1cc090ec0d3cfe594d012343b490f5f56c2856c496fa72a14e`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-098-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB098-0001`
**Finding Stable ID:** `g2/a1/sr|oder|idx:459|study|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0004`
**Lang:** sr
**Card:** `oder|idx:459`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** vai • jeb
**DE reference (read-only):** oder
**CURRENT (captured scope):** {"study.translation":"Или • Или","study.explanation":"[\"Главна идеја: oder се користи кога избираме помеѓу две или повеќе опции.\",\"V latvijščini oder najpogosteje pomeni oboje.\",\"Ovo nije isto kao kada se postavlja indirektno pitanje.\",\"В разговори oder може да се появи и в края на изречението: Du kommst, oder?\"]","study.examples":"[{\"de\":\"Kaffee oder Tee?\",\"lv\":\"Кафе или чай?\"},{\"de\":\"Heute oder morgen?\",\"lv\":\"Днес или утре?\"},{\"de\":\"Willst du Pizza oder Salat?\",\"lv\":\"Искаш ли пица или салата?\"},{\"de\":\"Du kommst, oder?\",\"lv\":\"Ще дойдеш, нали?\"}]","study.comparison":"[{\"word\":\"oder\",\"meaning\":\"Или изберете\",\"example\":\"Кафа или чај?\"},{\"word\":\"ob\",\"meaning\":\"Или в косвен въпрос\",\"example\":\"Не знам да ли он долази.\"},{\"word\":\"und\",\"meaning\":\"И\",\"example\":\"Кафа и торта.\"},{\"word\":\"aber\",\"meaning\":\"Ampak.\",\"example\":\"Долазим, али касније.\"}]","study.tip":"{\"text\":\"Ne pozabite: izbirajte med → možnostmi naročila.\"}","study.important":"[\"Oder се използва за избор на: Kaffee oder Tee.\",\"Во индиректно прашање, „дали“ обично значи том.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “oder” (study) against Latvian “vai • jeb”. Production begins “{"study.translation":"Или • Или","study.explanation":"[\"Главна идеја: oder се користи кога избираме помеѓу две или пов…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0001`
**Lang:** sr
**Card:** `schwimmen|idx:531`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** peldēt
**DE reference (read-only):** schwimmen
**CURRENT (captured scope):** {"lv":"Пливање","study.translation":"Пливање","study.explanation":"[\"Главна идеја: schwimmen значи пливање како движење или спорт.\",\"Schwimmen се користи кога се плива во вода користејќи пливачки движења.\",\"Кога станува збор за опуштање во вода или пливање, Баден често се користи.\",\"На ниво A1 е важно да се прави разлика: schwimmen = плуване, baden = къпане.\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"schwimmen\",\"meaning\":\"Пливањето како движење или спорт\",\"example\":\"Он врло добро плива.\"},{\"word\":\"baden\",\"meaning\":\"Пливај/биди во вода\",\"example\":\"Идем да пливам.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"Idi na plivanje\",\"example\":\"Идемо да пливамо.\"},{\"word\":\"duschen\",\"meaning\":\"Istuširaj se i pojedi sendvič.\",\"example\":\"Туширам се ујутру.\"}]","study.important":"[\"Швимен и Баден не се иста работа.\",\"На латвийски често казват „плуване“, но на немски трябва да проверите дали е движение или плуване.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “schwimmen” at lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important against Latvian “peldēt”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0002`
**Lang:** sr
**Card:** `sehen|idx:539`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** redzēt
**DE reference (read-only):** sehen
**CURRENT (captured scope):** {"lv":"Poglejmo","study.translation":"Poglejmo","study.explanation":"[\"Osnovna ideja: sehen znači vidjeti očima.\",\"Когато става въпрос за това, което очите възприемат, се използва сен.\",\"Съзнателното наблюдение често означава schauen или ansehen.\",\"Много често срещана фраза е Ich sehe dich. = Виждам те.\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"sehen\",\"meaning\":\"Poglejmo\",\"example\":\"Видим те.\"},{\"word\":\"schauen\",\"meaning\":\"Pogledaj\",\"example\":\"Гледам слику.\"},{\"word\":\"ansehen\",\"meaning\":\"Pregled/Recenzija\",\"example\":\"Гледам филм.\"},{\"word\":\"hören\",\"meaning\":\"Чуйте\",\"example\":\"Слушам музику.\"}]","study.important":"[\"Széchen ni isto kot Anshauen.\",\"Ich sehe dich = Виждам те • Ich schaue den Film = Гледам филм.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “sehen” at lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important against Latvian “redzēt”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0003`
**Lang:** sr
**Card:** `sein|idx:542`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** būt
**DE reference (read-only):** sein
**CURRENT (captured scope):** {"lv":"Бъди","study.translation":"Бъди","study.explanation":"[\"Osnovna ideja: sein znači biti.\",\"Sein je jedan od najvažnijih njemačkih glagola.\",\"Na ravni A1 so še posebej pomembni obrazci ich bin, du bist, er ist in wir sind.\",\"Sein se također koristi u mnogim lokativnim ili karakterističnim rečenicama.\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"sein\",\"meaning\":\"Бъди\",\"example\":\"Ја сам овде.\"},{\"word\":\"haben\",\"meaning\":\"Имам\",\"example\":\"Имам време.\"},{\"word\":\"werden\",\"meaning\":\"Станете\",\"example\":\"Постајем уморан.\"},{\"word\":\"bleiben\",\"meaning\":\"Остани\",\"example\":\"Остајем овде.\"}]","study.important":"[\"Oblike sej je treba preučevati ločeno: bin, bist, ist, sind.\",\"Ich bin е „Аз съм“, а не „Аз съществувам“.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “sein” at lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important against Latvian “būt”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0004`
**Lang:** sr
**Card:** `Seite|idx:544`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** lappuse • puse
**DE reference (read-only):** Seite
**CURRENT (captured scope):** {"lv":"Страница • Странично","study.translation":"Страница • Странично","study.explanation":"[\"Glavna ideja: die Seite može značiti stranicu iz knjige/dokumenta ili stranicu/stranicu nečega.\",\"Во книга, списание или веб-локација die Seite = страница (Seite 5 = страница 5).\",\"В пространствен смисъл die Seite = страна (auf der linken Seite = ляво).\",\"Фигуративно, die Seite може да значи и страна во конфликт или мисла (auf meiner Seite = од моја страна).\",\"Контекстът (книга/четене или позиция/връзка) разкрива правилното значение.\",\"И двете значения са в множествено число: die Seiten.\"]","study.examples.lv":null,"study.tip":"[\"Говорим за книга или четене → страница. Говори за позиция, посока или връзка → страна.\",\"Сайт X винаги е страница от книга, а не половината от нея.\"]","study.important":"[\"Die Seite = страница ИЛИ страна - одлучува контекстот.\",\"И двете значения са в множествено число: die Seiten.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “Seite” at lv; study.translation; study.explanation; study.examples.lv; study.tip; study.important against Latvian “lappuse • puse”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0005`
**Lang:** sr
**Card:** `sich|idx:547`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** sevi • sev
**DE reference (read-only):** sich
**CURRENT (captured scope):** {"lv":"Jaz • Jaz","study.translation":"Jaz • Jaz","study.explanation":"[\"Основна идея: sich показва, че действието се отнася до самия извършител.\",\"На латвийски често се превежда като себе си или себе си.\",\"Некои германски глаголи имаат sich како задолжителен дел, на пример sich waschen.\",\"На ниво A1 е важно да се отбележи: ich wasche mich, er wäscht sich.\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"sich\",\"meaning\":\"Јас/јас\",\"example\":\"Он се пере.\"},{\"word\":\"mich\",\"meaning\":\"Аз/аз в ич\",\"example\":\"Перем се.\"},{\"word\":\"dich\",\"meaning\":\"Ти/аз съм в настроение\",\"example\":\"Перешься.\"},{\"word\":\"ihn\",\"meaning\":\"На него\",\"example\":\"Видим га.\"}]","study.important":"[\"Sich не е самостоятелно съществително.\",\"В зависимост от лицето се променя: ich → mich, du → dich, er/sie/es → sich.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “sich” at lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.important against Latvian “sevi • sev”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0001`
**Lang:** sr
**Card:** `sicher|idx:548`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** drošs • noteikti
**DE reference (read-only):** sicher
**CURRENT (captured scope):** {"lv":"Безопасно • Разбира се","study.explanation":"[\"Основна идея: sicher като прилагателно означава уверен, като наречие – сигурно/вероятно.\",\"Когато говорим за място, ситуация или човек, sicher = безопасно (ein sicherer Ort = безопасно място).\",\"Като потвърждение или уверение в изречение sicher = разбира се/със сигурност (Das ist sicher wahr. = Вярно е, разбира се).\",\"Със сигурност! като отделен отговор означава разбира се!/вероятно!\"]","study.examples[*].lv":null,"study.tip":"[\"За място или ситуация (безопасност) → безопасно.\",\"Kao uvjerenje ili potvrda u rečenici → izvjesno/vjerovatno.\"]","study.important":"[\"Сихер = безбеден (придавка) ИЛИ сигурен/веројатен (прилог).\",\"Sich sicher sein = разбира се.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “sicher” at lv; study.explanation; study.examples[*].lv; study.tip; study.important against Latvian “drošs • noteikti”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0002`
**Lang:** sr
**Card:** `sie|idx:549`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** viņi / viņas
**DE reference (read-only):** sie
**CURRENT (captured scope):** {"lv":"Те/тя","study.explanation":"[\"Ključna ideja: Množina - govori se o više od jedne osobe. Glagolot se završava na -en: kočen, esen, gehen.\",\"Sie основно означава: една жена.\",\"Често се характеризира с: глагол в единствено число (-t).\",\"Sie v bistvu pomeni: več ljudi.\",\"Često je karakterističan: glagol u množini (-en).\",\"Sie основно означава: учтив адрес.\",\"Često se opisuje: uvijek sa glavnim S.\",\"Small sie означава тя, когато глаголът е в единствено число (Sie kocht = тя готви).\"]","study.examples[*].lv":null,"study.important":"[\"Učtivost se uvijek piše velikim slovom: Sie, a ne sie.\",\"She: Sie kocht. They: sie kochen. Ti: Si kochen.\",\"Неправилно: sie kocht → Правилно: Sie kocht\",\"Неточно: Sie kocht (тим) → Точно: Sie kochen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “sie” at lv; study.explanation; study.examples[*].lv; study.important against Latvian “viņi / viņas”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0003`
**Lang:** sr
**Card:** `Sie|idx:550`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** jūs
**DE reference (read-only):** Sie
**CURRENT (captured scope):** {"lv":"Вие","study.explanation":"[\"Основна идея: Добре дошли – винаги с главна буква S. Latviski: вие. Често с глагол в множествено число.\",\"Sie основно означава: една жена.\",\"Често се характеризира с: глагол в единствено число (-t).\",\"Sie v bistvu pomeni: več ljudi.\",\"Često je karakterističan: glagol u množini (-en).\",\"Sie основно означава: учтив адрес.\",\"Često se opisuje: uvijek sa glavnim S.\",\"Small sie означава тя, когато глаголът е в единствено число (Sie kocht = тя готви).\"]","study.examples[*].lv":null,"study.tip":"[\"Обратният адрес винаги е с главна буква S. Latviski: ти. Често с глагол в множествено число.\",\"Използвайте Sie, когато контекстът съответства на това значение.\"]","study.important":"[\"Učtivost se uvijek piše velikim slovom: Sie, a ne sie.\",\"She: Sie kocht. They: sie kochen. Ti: Si kochen.\",\"Неправилно: sie kocht → Правилно: Sie kocht\",\"Неточно: Sie kocht (тим) → Точно: Sie kochen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “Sie” at lv; study.explanation; study.examples[*].lv; study.tip; study.important against Latvian “jūs”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0004`
**Lang:** sr
**Card:** `sitzen|idx:558`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** sēdēt
**DE reference (read-only):** sitzen
**CURRENT (captured scope):** {"lv":"Sedi","study.explanation":"[\"Glavna ideja: sitzen pomeni sedeti.\",\"Sitzen се користи за да се однесува на седечка личност или животно.\",\"Понякога sitzen също означава да бъдеш на определено място, но в A1 основното значение е да седиш.\",\"Важно е да се прави разлика: sitzen = седя, stehen = стоя, liegen = лягам.\"]","study.examples[*].lv":null,"study.comparison":"[{\"word\":\"sitzen\",\"meaning\":\"Sedi\",\"example\":\"Седим за столом.\"},{\"word\":\"stehen\",\"meaning\":\"Стойка\",\"example\":\"Он стоји на врата.\"},{\"word\":\"liegen\",\"meaning\":\"Спи/легни\",\"example\":\"Мачка лежи тамо.\"},{\"word\":\"setzen\",\"meaning\":\"Седна/седна\",\"example\":\"Седам.\"}]","study.important":"[\"Sitzen показва състоянието \\\"седене\\\".\",\"Sedeti je sich setzen, ne sitzen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “sitzen” at lv; study.explanation; study.examples[*].lv; study.comparison; study.important against Latvian “sēdēt”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0005`
**Lang:** sr
**Card:** `sollen|idx:564`
**Field / path:** `lv; study.explanation; study.examples[*].lv; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** vajadzētu
**DE reference (read-only):** sollen
**CURRENT (captured scope):** {"lv":"Mora","study.explanation":"[\"Основна идея: Sollen означава, че някой трябва или е задължен да направи нещо според указанията.\",\"Солен често се користи кога некој друг ви кажува што да правите.\",\"Не е толкова силен, колкото мусена.\",\"Много често срещана фраза: Was soll ich machen? = Какво трябва да направя?\"]","study.examples[*].lv":null,"study.comparison":"[{\"word\":\"sollen\",\"meaning\":\"Трябва/трябва да се направи според указанията\",\"example\":\"Шта да правим?\"},{\"word\":\"müssen\",\"meaning\":\"Апсолутно неопходно\",\"example\":\"Морам да идем.\"},{\"word\":\"können\",\"meaning\":\"Бидете во можност да\",\"example\":\"Могу да дођем.\"},{\"word\":\"wollen\",\"meaning\":\"Искам\",\"example\":\"Желим да останем.\"}]","study.important":"[\"Ali je soll ich machen? to je zelo pogosta fraza.\",\"Солен и Мусен не са едно и също нещо.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “sollen” at lv; study.explanation; study.examples[*].lv; study.comparison; study.important against Latvian “vajadzētu”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0001`
**Lang:** sr
**Card:** `stehen|idx:576`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** stāvēt
**DE reference (read-only):** stehen
**CURRENT (captured scope):** {"lv":"Стойка","study.translation":"Стойка","study.explanation":"[\"Основна идея: stehen означава да стоиш или да стоиш.\",\"Za mučnyj ŝehen znači stajati.\",\"За обект stehen означава, че той стои или е на определено място.\",\"Важно е да се разликуваат: stehen = застане, sitzen = седи, liegen = легни.\"]","study.examples":"[{\"de\":\"Ich stehe an der Tür.\",\"lv\":\"Stojim na vratima.\"},{\"de\":\"Der Stuhl steht in der Küche.\",\"lv\":\"Столот е во кујната.\"},{\"de\":\"Er sitzt am Tisch.\",\"lv\":\"Той седи на масата.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Книгата е на маса.\"}]","study.comparison":"[{\"word\":\"stehen\",\"meaning\":\"Застанете / застанете\",\"example\":\"Стојим овде.\"},{\"word\":\"sitzen\",\"meaning\":\"Sedi\",\"example\":\"Он седи за столом.\"},{\"word\":\"liegen\",\"meaning\":\"Спи/легни\",\"example\":\"Књига лежи тамо.\"},{\"word\":\"stellen\",\"meaning\":\"Поставете вертикално\",\"example\":\"Стављам боцу.\"}]","study.tip":"{\"text\":\"Запомнете: изправен → Стивън • Седнал → седнал • Легнал → легнал.\"}","study.important":"[\"Стивън показва състоянието, а не действието на „потискането“.\",\"Да поставите обект вертикално е stelen, а не stehen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “stehen” (lv, study.*) against Latvian “stāvēt”. Production begins “{"lv":"Стойка","study.translation":"Стойка","study.explanation":"[\"Основна идея: stehen означава да стоиш или да стоиш…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0002`
**Lang:** sr
**Card:** `über|idx:608`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** virs • par
**DE reference (read-only):** über
**CURRENT (captured scope):** {"lv":"Още • За","study.translation":"Още • За","study.explanation":"[\"Клучна идеја: über значи „над“ или „близу“ во зависност од контекстот.\",\"Кога станува збор за локацијата, „uber“ често значи „горе“.\",\"Kada je u pitanju razgovor, tekst ili tema, über znači 'za'.\",\"В движението \\\"uber\\\" може да означава \\\"края\\\".\"]","study.examples":"[{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Iznad stola visi lampa.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Говорим за време.\"},{\"de\":\"Das Kind läuft über die Straße.\",\"lv\":\"Дете тича през улицата.\"},{\"de\":\"Ich freue mich über das Geschenk.\",\"lv\":\"Z darilom sem zadovoljna.\"}]","study.comparison":"[{\"word\":\"über\",\"meaning\":\"Над / над / преку\",\"example\":\"Ми причамо о времену.\"},{\"word\":\"auf\",\"meaning\":\"Na površini\",\"example\":\"Књига лежи на столу.\"},{\"word\":\"unter\",\"meaning\":\"Ispod\",\"example\":\"Торба је под столом.\"},{\"word\":\"von\",\"meaning\":\"Od/do nečesa iz nekega vira\",\"example\":\"Чујем од тебе.\"}]","study.tip":"{\"text\":\"Zapamtite: tema razgovora → über • Iznad stola → über.\"}","study.important":"[\"Über nije samo naziv za mjesto.\",\"Sprechen über означава „да говоря“.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “über” (lv, study.*) against Latvian “virs • par”. Production begins “{"lv":"Още • За","study.translation":"Още • За","study.explanation":"[\"Клучна идеја: über значи „над“ или „близу“ во з…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0001`
**Lang:** sr
**Card:** `Uhr|idx:698`
**Field / path:** `lv; study.*`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** {"lv":"Ura","study.translation":"Ura","study.explanation":"[\"Основна идея: Часовник или ръчен часовник. А също и времето на часовника: Es ist acht Uhr.\",\"Die Uhr основно означава: устройство или време в часовник.\",\"Често се карактеризира со: одредено време.\",\"Die Uhr означава часовник - устройство или време в часовник (Es ist acht Uhr, meine Uhr).\"]","study.examples":"[{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Сега е осем часа.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Сега е осем часа.\"},{\"de\":\"Meine Uhr ist kaputt.\",\"lv\":\"Часовникът ми е счупен.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Това е осем.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Осем е (часа).\"},{\"de\":\"die Uhr\",\"lv\":\"Устройство/час на часовника • Di Zeit\"}]","study.tip":"[\"Ura ali zapestna ura. In tudi ura: Es ist acht Uhr.\",\"Uporabite die Uhr, ko kontekst ustreza temu pomenu.\"]","study.important":"[\"Die Uhr: uređaj (meine Uhr) ili vrijeme (acht Uhr).\",\"Die Uhr: provjerite kontekst prije upotrebe.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “Uhr” (lv; study.*) against Latvian “pulkstenis”. Production begins “{"lv":"Ura","study.translation":"Ura","study.explanation":"[\"Основна идея: Часовник или ръчен часовник. А също и време…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0003`
**Lang:** sr
**Card:** `um|idx:611`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** ap • pulksten
**DE reference (read-only):** um
**CURRENT (captured scope):** {"lv":"Околу • Часови","study.translation":"Околу • Часови","study.explanation":"[\"Ключова идея: \\\"mm\\\" много често означава \\\"часовник с време\\\" или \\\"около/около\\\" с място.\",\"С точно време хм означава час.\",\"Во однос на место, тоа значи „околу“ или „околу“.\",\"Във фразата em... zu помага да се изрази намерението: така че.\"]","study.examples":"[{\"de\":\"Ich komme um acht Uhr.\",\"lv\":\"Ще дойда в осем часа.\"},{\"de\":\"Wir sitzen um den Tisch.\",\"lv\":\"Сядаме около масата.\"},{\"de\":\"Er geht um die Ecke.\",\"lv\":\"Gre za vogal.\"},{\"de\":\"Ich lerne, um Deutsch zu sprechen.\",\"lv\":\"Учам да зборувам германски.\"}]","study.comparison":"[{\"word\":\"um\",\"meaning\":\"Вклучено/околу/до\",\"example\":\"Долазим у осам.\"},{\"word\":\"am\",\"meaning\":\"На ден/на\",\"example\":\"У понедељак долазим.\"},{\"word\":\"gegen\",\"meaning\":\"За времето/срещу\",\"example\":\"Долазим око осам.\"},{\"word\":\"für\",\"meaning\":\"За/в полза\",\"example\":\"То је за тебе.\"}]","study.tip":"{\"text\":\"Ne pozabite: um acht = osem ur.\"}","study.important":"[\"Hm, vrijeme je obično \\\"sati\\\".\",\"Hm... cu često znači \\\"da...\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “um” (lv, study.*) against Latvian “ap • pulksten”. Production begins “{"lv":"Околу • Часови","study.translation":"Околу • Часови","study.explanation":"[\"Ключова идея: \\\"mm\\\" много чест…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0004`
**Lang:** sr
**Card:** `unter|idx:615`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** zem
**DE reference (read-only):** unter
**CURRENT (captured scope):** {"lv":"Ispod","study.translation":"Ispod","study.explanation":"[\"Ključna ideja: unter znači \\\"ispod\\\" ili \\\"između\\\" ovisno o kontekstu.\",\"Ако има нешто под маса, стол или друг предмет, користете unter.\",\"Когато говорим за група хора, unter може да означава „между“.\",\"Тоа е спротивно на über кога станува збор за насоката нагоре/надолу.\"]","study.examples":"[{\"de\":\"Die Tasche ist unter dem Tisch.\",\"lv\":\"Чанта под масата.\"},{\"de\":\"Die Katze liegt unter dem Stuhl.\",\"lv\":\"Котката спи под стола.\"},{\"de\":\"Unter Freunden sagt man das so.\",\"lv\":\"Казват сред приятели.\"},{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Iznad stola visi lampa.\"}]","study.comparison":"[{\"word\":\"unter\",\"meaning\":\"Под/между\",\"example\":\"Торба је под столом.\"},{\"word\":\"über\",\"meaning\":\"Над/за\",\"example\":\"Лампа виси изнад стола.\"},{\"word\":\"zwischen\",\"meaning\":\"Между две неща\",\"example\":\"Између кућа.\"},{\"word\":\"auf\",\"meaning\":\"Na površini\",\"example\":\"На столу.\"}]","study.tip":"{\"text\":\"Запомнете: под масата → unter dem Tisch.\"}","study.important":"[\"Unter lahko pomeni tudi \\\"vmes\\\", zlasti z ljudmi ali skupinami.\",\"Unter и über често са противоположни по отношение на място.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “unter” (lv, study.*) against Latvian “zem”. Production begins “{"lv":"Ispod","study.translation":"Ispod","study.explanation":"[\"Ključna ideja: unter znači \\\"ispod\\\" ili \\\"izme…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0005`
**Lang:** sr
**Card:** `Urlaub|idx:695`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** atvaļinājums
**DE reference (read-only):** Urlaub
**CURRENT (captured scope):** {"lv":"Ваканция","study.translation":"Ваканция","study.explanation":"[\"Основна идея: само единствено число. Напускането на работа винаги е изолирано нещо.\",\"Der Urlaub v bistvu pomeni: odsotnost z dela.\",\"Često se karakteriše kao: samo v neduklû numbo.\",\"Der Urlaub je le v ednini - dopust od dela (im Urlaub).\"]","study.examples":"[{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Баща ми е на почивка.\"},{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Баща ми е на почивка.\"},{\"de\":\"Nächste Woche habe ich Urlaub.\",\"lv\":\"Имам ваканция другата седмица.\"},{\"de\":\"Wir machen Urlaub in Spanien.\",\"lv\":\"На одмор сме во Шпанија.\"},{\"de\":\"im Urlaub\",\"lv\":\"На почивка (работа).\"}]","study.comparison":"[{\"word\":\"der Urlaub\",\"meaning\":\"Напуснете работата си (само всички)\",\"example\":\"Mein Vater ist im Urlaub. – Баща ми е на почивка.\"},{\"word\":\"die Ferien\",\"meaning\":\"Školski/obrazovni praznici (samo DSK)\",\"example\":\"Die Kinder haben Ferien. – Децата са във ваканция.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “Urlaub” (lv; study.translation; study.explanation; study.examples; study.comparison) against Latvian “atvaļinājums”. Production begins “{"lv":"Ваканция","study.translation":"Ваканция","study.explanation":"[\"Основна идея: само единствено число. Напусканет…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0005`
**Lang:** sr
**Card:** `verstehen|idx:621`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** saprast
**DE reference (read-only):** verstehen
**CURRENT (captured scope):** {"lv":"Разберете","study.translation":"Разберете","study.explanation":"[\"Основна идея: verstehen означава да разбираш.\",\"Се користи кога разбирате јазик, личност, текст или ситуација.\",\"Тук обикновено не е необходимо да „знаете“ или „учите“ латвийски език • Те са по-често Können.\",\"Много често срещана фраза е Ich verstehe. = Разбирам.\"]","study.examples":"[{\"de\":\"Ich verstehe dich.\",\"lv\":\"Разбрах те\"},{\"de\":\"Verstehst du Deutsch?\",\"lv\":\"Ali razumete nemško\"},{\"de\":\"Ich verstehe das nicht.\",\"lv\":\"Това не го разбирам\"},{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"Мога да говоря немски\"}]","study.comparison":"[{\"word\":\"verstehen\",\"meaning\":\"Разберете\",\"example\":\"Разумем те.\"},{\"word\":\"können\",\"meaning\":\"Бъдете способни/знайте\",\"example\":\"Могу пливати.\"},{\"word\":\"wissen\",\"meaning\":\"Познайте факта\",\"example\":\"То знам.\"},{\"word\":\"kennen\",\"meaning\":\"Знам\",\"example\":\"Познајем га.\"}]","study.tip":"{\"text\":\"Запомнете: разберете текст/лице → verstehen • Да знаете како да направите нешто → können.\"}","study.important":"[\"Verstehen nije korijen riječi \\\"razumijem\\\".\",\"Ich verstehe Deutsch означава „разбирам немски“.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “verstehen” (lv, study.*) against Latvian “saprast”. Production begins “{"lv":"Разберете","study.translation":"Разберете","study.explanation":"[\"Основна идея: verstehen означава да разбираш.…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0001`
**Lang:** sr
**Card:** `vom|idx:634`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG_LANGUAGE
**LV source (read-only):** no
**DE reference (read-only):** vom
**CURRENT (captured scope):** {"study.translation":"Од","study.explanation":"[\"Vom е контракција на предлогот von и членот дем.\",\"Целосна форма: von dem (на кого?).\",\"Използва се със съществителни от мъжки и среден род, за да посочи произхода или посоката на нещо.\",\"Отговаря на въпроси от кого? или откъде?\",\"V praksi se vom skoraj vedno uporablja namesto polnega von dem.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"Dojdoh ot garata\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"Poklon od mog oca.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"Доаѓа од докторот.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"Prihaja z letališča.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"Ovo je sa tržišta.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"Дојдовме од празникот.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"Od kmeta vzame mleko.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"Съобщение от шефа.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"От (конкретно нещо, за кого?)\",\"example\":\"vom Bahnhof – Од станицата\"},{\"word\":\"von\",\"meaning\":\"Од (вкупно)\",\"example\":\"von mir – Нема мани\"},{\"word\":\"aus\",\"meaning\":\"Отвътре / произход\",\"example\":\"aus Deutschland – От Германия\"},{\"word\":\"ab\",\"meaning\":\"Počevši od (vrijeme/mjesto)\",\"example\":\"ab Montag – Od ponedeljka\"},{\"word\":\"zu\",\"meaning\":\"K/u (обратна посока)\",\"example\":\"zum Arzt – Посетете лекар\"}]","study.tip":"[\"Запомнете: позадина + dem → vom (за кого?).\",\"U kolokvijalnom govoru gotovo nikada ne kažu von dem - koriste vom.\"]","study.important":"[\"Vom = von dem, само със съществително от мъжки или среден род за кого? в завоя.\",\"Ukazuje na porijeklo, izvor ili smjer nečega specifičnog.\",\"За жени: von der Mutter, а не vom Mutter.\",\"Да не се меша со aus (земја на потекло) или ab (точка на потекло).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “vom” (study) against Latvian “no”. Production begins “{"study.translation":"Од","study.explanation":"[\"Vom е контракција на предлогот von и членот дем.\",\"Целосна форма: v…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0002`
**Lang:** sr
**Card:** `vor|idx:636`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG_LANGUAGE
**LV source (read-only):** pirms • priekšā
**DE reference (read-only):** vor
**CURRENT (captured scope):** {"study.translation":"Преди • Преди","study.explanation":"[\"Ключова идея: „крадец“ означава „преди“ във времето или „преди място“.\",\"Когато става въпрос за време, „крадец“ означава „преди“.\",\"Когато става дума за място, vor означава „отпред“ или „на“.\",\"V časova zona vor znači \\\"za sada\\\", na primer fünf vor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Ги мијам рацете пред јадење.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Колата е паркирана пред къщата.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"Сега е пет без осем.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"След като се нахраним, излизаме на разходка.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"Пред/пред\",\"example\":\"Пре јела...\"},{\"word\":\"nach\",\"meaning\":\"S strani/pred\",\"example\":\"После јела...\"},{\"word\":\"neben\",\"meaning\":\"До\",\"example\":\"Поред куће.\"},{\"word\":\"hinter\",\"meaning\":\"Отзад\",\"example\":\"Иза куће.\"}]","study.tip":"{\"text\":\"Zapamtite: prije vremena, prije mjesta → lopov.\"}","study.important":"[\"Tat je lahko čas in kraj.\",\"Vor dem Essen = pred obroki • Vor dem Haus = pred hišo.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “vor” (study) against Latvian “pirms • priekšā”. Production begins “{"study.translation":"Преди • Преди","study.explanation":"[\"Ключова идея: „крадец“ означава „преди“ във времето или „п…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0003`
**Lang:** sr
**Card:** `was|idx:644`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG_LANGUAGE
**LV source (read-only):** kas • ko
**DE reference (read-only):** was
**CURRENT (captured scope):** {"study.translation":"Кой • Какво","study.explanation":"[\"Главна идеја: што е прашален збор за нештата и настаните - на латвиски е што или што, во зависност од делот на реченицата.\",\"Питаха го за неща, събития и факти, а не за хора.\",\"На германски, зборот нема да се промени по промена, секогаш изгледа како да бил.\",\"Ако в изречението е имало подлог, той се превежда на латвийски като kas (Was ist das? = Какво е това?).\",\"Ако was е обект (допълнение) на глагол, той се превежда на латвийски като ko (Was machst du? = Какво правиш?).\",\"Хората питат с wer (кой/кой), но не беше.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Какво е?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Какво е станало\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Šta radiš\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Какво искаш да пиеш\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Што значи овој збор?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Која е вашата омилена храна?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Какво каза\"}]","study.tip":"[\"Samo \\\"Beshe\\\" se ne menja - na nemačkom je uvek bilo.\",\"Брз трик: Ако на прашањето може да се одговори со „Тоа е...“, употребете who • Ако одговорот доаѓа по глаголот како предмет, користете ko.\"]","study.important":"[\"Питаха го за неща, събития и факти, а не за хора.\",\"Хората питат с wer (кой/кой), но не беше.\",\"Was für (ein/eine) означава някой/за и пита за качество или тип (Was für ein Film ist das? = Какъв филм е това?).\",\"Napačno: Wer ist passiert? → Pravilno: Je bil pasiven?\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “was” (study) against Latvian “kas • ko”. Production begins “{"study.translation":"Кой • Какво","study.explanation":"[\"Главна идеја: што е прашален збор за нештата и настаните - н…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0004`
**Lang:** sr
**Card:** `wenn|idx:655`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG_LANGUAGE
**LV source (read-only):** ja • kad
**DE reference (read-only):** wenn
**CURRENT (captured scope):** {"study.translation":"Če • Kdaj","study.explanation":"[\"Ключова идея: wenn означава „ако“ или „когато“, в зависимост от ситуацията.\",\"Ако е условие, преведете го така, сякаш.\",\"Когато се говори за повтарящо се или общо време, преведете като „когато“.\",\"Nakon wenn, glagol se obično završava njemačkom rečenicom.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Če imate čas, se oglasite.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Ако вали, си стоя вкъщи.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Ko sem utrujena, pijem kavo.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Не знам дали ќе дојде.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"Ако/кога\",\"example\":\"Ако имаш време...\"},{\"word\":\"ob\",\"meaning\":\"Или в косвен въпрос\",\"example\":\"Не знам да ли...\"},{\"word\":\"wann\",\"meaning\":\"При съмнение\",\"example\":\"Када долазиш?\"},{\"word\":\"weil\",\"meaning\":\"Защото\",\"example\":\"Остајем јер сам болестан.\"}]","study.tip":"{\"text\":\"Запомнете: състояние → venn • Въпрос „кога?“ → Искам.\"}","study.important":"[\"Wenn и Wann не се иста работа.\",\"Кога ще дойдеш имам един въпрос Wenn du kommst... - състояние/време.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “wenn” (study) against Latvian “ja • kad”. Production begins “{"study.translation":"Če • Kdaj","study.explanation":"[\"Ключова идея: wenn означава „ако“ или „когато“, в зависимост о…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0005`
**Lang:** sr
**Card:** `wer|idx:656`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG_LANGUAGE
**LV source (read-only):** kas • kurš
**DE reference (read-only):** wer
**CURRENT (captured scope):** {"study.translation":"Кой • Кой","study.explanation":"[\"Главна идеја: wer е прашален збор за идентитетот на една личност - на латвиски е кој или кој.\",\"Прашувавме за луѓе, а не за работи или настани.\",\"Stvari i događaji su dati sa e bilo i ne e bilo.\",\"Wer на германски обично е предмет на реченицата (номинативен случај) - Wer ist das? = Што е ова?\",\"Kada pitate koi od nekoliko ljudi, wer se često koristi sa von (wer von euch = koi od vas).\",\"Wer ја менува својата форма во зависност од деклинацијата: wen (падеж акузатив), wem (падеж на датив), wessen (падеж на генитив) - тоа е формата wer која е најчеста на ниво А1.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Какво е?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Кой си ти\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Kaj se bo zgodilo danes?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Кой е вашият учител\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Колкумина од вас зборуваат германски?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Кой каза това?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Кой иска кафе?\"}]","study.tip":"[\"Wer пита за хора (кой/кой) – за неща и събития, използваме was.\",\"Če želite prositi za izbiro med več osebami, uporabite wer von… (katera od…).\"]","study.important":"[\"Sprašujemo samo o ljudeh in ne o stvareh.\",\"Stvari i događaji su dati sa e bilo i ne e bilo.\",\"Wer променя формата, като променя: wen, wem, wessen, но основната форма е wer.\",\"Napačno: Wer ist passiert? → Pravilno: Je bil pasiven?\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “wer” (study) against Latvian “kas • kurš”. Production begins “{"study.translation":"Кой • Кой","study.explanation":"[\"Главна идеја: wer е прашален збор за идентитетот на една лично…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0002`
**Lang:** sr
**Card:** `Zeit|idx:699`
**Field / path:** `lv; study.*`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** laiks (brīdis / laika posms)
**DE reference (read-only):** Zeit
**CURRENT (captured scope):** {"lv":"Vrijeme (trenutak/vremenski period)","study.translation":"Vrijeme (trenutak/vremenski period)","study.explanation":"[\"Glavna ideja: Vrijeme kao pojam - trenutak, mogućnost, vremenski period.\",\"Die Zeit означава преди всичко: момент, възможност.\",\"Често се карактеризира со: апстрактен концепт.\",\"Die Zeit je apstraktan koncept – vrijeme, trenutak ili prilika (Ich habe keine Zeit).\"]","study.examples":"[{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Нямам време\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Нямам време\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Imate li vremena\"},{\"de\":\"Die Zeit vergeht schnell.\",\"lv\":\"Времето лети бързо.\"}]","study.tip":"[\"Времето като понятие е момент, възможност, период от време.\",\"Използвайте die Zeit, когато контекстът съответства на това значение.\"]","study.important":"[\"Die Zeit: Molimo provjerite kontekst prije upotrebe.\",\"Die Zeit: Molimo provjerite kontekst prije upotrebe.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “Zeit” (lv; study.*) against Latvian “laiks (brīdis / laika posms)”. Production begins “{"lv":"Vrijeme (trenutak/vremenski period)","study.translation":"Vrijeme (trenutak/vremenski period)","study.explanatio…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SR-L0001`
**Lang:** sr
**Card:** `zum|idx:672`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** uz • pie
**DE reference (read-only):** zum
**CURRENT (captured scope):** {"lv":"K • V","study.translation":"K • V","study.explanation":"[\"Zoom е свиване на предлога zu и члена dem.\",\"Пълна форма: zu dem (на кого?).\",\"Uporablja se pri samostalnikih moškega in srednjega rodu za označevanje smeri ali namena.\",\"Често означава нещо или някого - лекар, станция, приятел.\",\"На практика zum почти винаги се използва вместо пълното zu dem.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Отивам на лекар.\"},{\"de\":\"Wir fahren zum Bahnhof.\",\"lv\":\"Idemo u garat.\"},{\"de\":\"Sie geht zum Supermarkt.\",\"lv\":\"Тя отива до магазина.\"},{\"de\":\"Komm zum Essen!\",\"lv\":\"Върви да ядеш!\"},{\"de\":\"Er fährt zum Flughafen.\",\"lv\":\"Odide na letališče.\"},{\"de\":\"Wir gehen zum Konzert.\",\"lv\":\"Одиме на концерт.\"},{\"de\":\"Das Geschenk ist zum Geburtstag.\",\"lv\":\"Подарък за рожден ден.\"},{\"de\":\"Ich gehe zum Friseur.\",\"lv\":\"Одам на фризер.\"}]","study.comparison":"[{\"word\":\"zum\",\"meaning\":\"Za/kome (kome?)\",\"example\":\"zum Arzt – Посетете лекар\"},{\"word\":\"zur\",\"meaning\":\"K/u (семейството на съпругата)\",\"example\":\"zur Schule – Uz skolu\"},{\"word\":\"zu\",\"meaning\":\"K/u/също\",\"example\":\"zu Hause – У дома\"},{\"word\":\"nach\",\"meaning\":\"V (grad/država)\",\"example\":\"nach Berlin – V Berlin\"},{\"word\":\"bei\",\"meaning\":\"В (местоположение)\",\"example\":\"beim Arzt – Посетете лекар\"}]","study.tip":"[\"Zapamtite: zu + dem → zum (za koga?).\",\"Za riječi ženskog roda: zu + der → zur.\"]","study.important":"[\"Zum = zu dem, само със съществително от мъжки род или без род за кого? в завоя.\",\"Показва посока или цел: до лекаря, до гарата, до приятел.\",\"За женски род се използва zur: zur Bank, zur Post.\",\"Да не се меша со bei (се наоѓа во) или nach (во градовите без статија).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “zum” (lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important) against Latvian “uz • pie”. Production begins “{"lv":"K • V","study.translation":"K • V","study.explanation":"[\"Zoom е свиване на предлога zu и члена dem.\",\"Пълна …”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `ab|idx:17`
**Field / path:** `lv; study.examples[].lv`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** no
**DE reference (read-only):** ab
**CURRENT (captured scope):** {"lv":"-st","study.examples[].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts ab\|idx:17 (ab), ceļš 'lv; study.examples[].lv': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"-st","study.examples[].lv":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `aber|idx:21`
**Field / path:** `lv; study.examples[].lv`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** bet
**DE reference (read-only):** aber
**CURRENT (captured scope):** {"lv":"Aga","study.examples[].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts aber\|idx:21 (aber), ceļš 'lv; study.examples[].lv': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Aga","study.examples[].lv":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `also|idx:26`
**Field / path:** `study.examples.lv`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_CONTAMINATION
**LV source (read-only):** tātad
**DE reference (read-only):** also
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts also\|idx:26 (also), ceļš 'study.examples.lv': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir ''; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `an|idx:12`
**Field / path:** `lv; study.examples[].lv`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** pie
**DE reference (read-only):** an
**CURRENT (captured scope):** {"lv":"Juures • Peal • Ligi","study.examples[].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts an\|idx:12 (an), ceļš 'lv; study.examples[].lv': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Juures • Peal • Ligi","study.examples[].lv":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `Appetit|idx:689`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** apetīte
**DE reference (read-only):** Appetit
**CURRENT (captured scope):** {"lv":"Isu","study.explanation":"[\"Põhiidee: Tunne, et tahaks süüa. ainult ainsus — mitmust ei ole.\",\"Der Appetit tähendab peamiselt: soov süüa.\",\"Sageli kirjeldab: tunnet (ainult ainsuses).\",\"Der Appetit on ainult ainsuses — isu.\",\"A1 tasemel esinevad need sageli koos, näiteks: Guten Appetit!\"]","study.tip":"[\"der Appetit = aptit\",\"Använd der Appetit när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"der Appetit finns endast i singular.\",\"Fel: die Appetite → Korrekt: der Appetit\",\"Fel: Ich bin Appetit. → Korrekt: Ich habe Appetit.\",\"Känsla: der Appetit.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Appetit\|idx:689 (Appetit), ceļš 'lv; study.explanation; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Isu","study.explanation":"[\"Põhiidee: Tunne, et tahaks süüa. ainult ainsus — mitmust ei ole.\",\…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `auch|idx:48`
**Field / path:** `study.examples.lv`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** arī
**DE reference (read-only):** auch
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts auch\|idx:48 (auch), ceļš 'study.examples.lv': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir ''; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `baden|idx:68`
**Field / path:** `lv; study.translation; study.examples.lv; study.comparison.example`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** peldēties
**DE reference (read-only):** baden
**CURRENT (captured scope):** {"lv":"Suplema","study.translation":"Suplema","study.examples.lv":null,"study.comparison.example":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts baden\|idx:68 (baden), ceļš 'lv; study.translation; study.examples.lv; study.comparison.example': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Suplema","study.translation":"Suplema","study.examples.lv":null,"study.comparison.example":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `bei|idx:78`
**Field / path:** `lv; study.translation; study.examples.lv; study.comparison.meaning`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** pie
**DE reference (read-only):** bei
**CURRENT (captured scope):** {"lv":"Juures","study.translation":"Juures","study.examples.lv":null,"study.comparison.meaning":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts bei\|idx:78 (bei), ceļš 'lv; study.translation; study.examples.lv; study.comparison.meaning': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Juures","study.translation":"Juures","study.examples.lv":null,"study.comparison.meaning":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `Besuch|idx:87`
**Field / path:** `lv; study.translation; study.examples.lv; study.comparison.meaning`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** apmeklējums
**DE reference (read-only):** Besuch
**CURRENT (captured scope):** {"lv":"besök","study.translation":"besök","study.examples.lv":null,"study.comparison.meaning":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Besuch\|idx:87 (Besuch), ceļš 'lv; study.translation; study.examples.lv; study.comparison.meaning': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"besök","study.translation":"besök","study.examples.lv":null,"study.comparison.meaning":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `besuchen|idx:89`
**Field / path:** `lv; study.translation; study.examples.lv; study.comparison.meaning`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** apmeklēt
**DE reference (read-only):** besuchen
**CURRENT (captured scope):** {"lv":"besöka","study.translation":"besöka","study.examples.lv":null,"study.comparison.meaning":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts besuchen\|idx:89 (besuchen), ceļš 'lv; study.translation; study.examples.lv; study.comparison.meaning': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"besöka","study.translation":"besöka","study.examples.lv":null,"study.comparison.meaning":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `bis|idx:91`
**Field / path:** `study.examples.lv; study.comparison.example`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** līdz
**DE reference (read-only):** bis
**CURRENT (captured scope):** {"study.examples.lv":null,"study.comparison.example":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts bis\|idx:91 (bis), ceļš 'study.examples.lv; study.comparison.example': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"study.examples.lv":null,"study.comparison.example":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `das|idx:129`
**Field / path:** `study.lv, study.examples.lv, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** vidus dzimtes noteiktais artikuls
**DE reference (read-only):** das
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.comparison":"[{\"word\":\"das\",\"meaning\":\"See (artikkel / asesõna)\",\"example\":\"Das ist mein Auto. – See on minu auto.\"},{\"word\":\"dies\",\"meaning\":\"See\",\"example\":\"Dies ist mein Auto. – See on minu auto.\"},{\"word\":\"welches\",\"meaning\":\"Mis • Mille • Mida\",\"example\":\"Das ist das Buch, welches ich lese. – See on raamat, mida ma loen.\"}]","study.important":"[\"På A1-nivå lär man sig först das som neutrum artikel.\",\"das är inte detsamma som dass — das kan vara en artikel eller pronomen, dass betyder \\\"att\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts das\|idx:129 (das), ceļš 'study.lv, study.examples.lv, study.comparison, study.important': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"study.lv":null,"study.examples.lv":null,"study.comparison":"[{\"word\":\"das\",\"meaning\":\"See (arti…'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `dass|idx:130`
**Field / path:** `study.lv, study.examples.lv, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** ka
**DE reference (read-only):** dass
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.comparison":"[{\"word\":\"dass\",\"meaning\":\"Et\",\"example\":\"Ich weiß, dass er kommt. – Ma tean, et ta tuleb.\"},{\"word\":\"weil\",\"meaning\":\"Sest • Sellepärast et\",\"example\":\"Ich bleibe zu Hause, weil es regnet. – Ma jään koju, sest sajab vihma.\"},{\"word\":\"damit\",\"meaning\":\"Et\",\"example\":\"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Ma õpin saksa keelt, et saaksin Saksamaal töötada.\"},{\"word\":\"ob\",\"meaning\":\"Kas\",\"example\":\"Ich weiß nicht, ob er kommt. – Ma ei tea, kas ta tuleb.\"}]","study.important":"[\"dass betyder \\\"att\\\" och inleder en bisats.\",\"Förväxla inte med das, som kan vara artikel eller \\\"det\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts dass\|idx:130 (dass), ceļš 'study.lv, study.examples.lv, study.comparison, study.important': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"study.lv":null,"study.examples.lv":null,"study.comparison":"[{\"word\":\"dass\",\"meaning\":\"Et\",\"e…'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `der|idx:134`
**Field / path:** `study.lv, study.examples.lv, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** vīriešu dzimtes noteiktais artikuls
**DE reference (read-only):** der
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.important":"[\"På A1-nivå lär man sig först der som maskulin artikel.\",\"Pronomen och relativ användning kommer senare.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts der\|idx:134 (der), ceļš 'study.lv, study.examples.lv, study.important': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"study.lv":null,"study.examples.lv":null,"study.important":"[\"På A1-nivå lär man sig först der som mas…'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `die|idx:137`
**Field / path:** `study.lv, study.examples.lv, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** sieviešu dzimtes noteiktais artikuls
**DE reference (read-only):** die
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.important":"[\"På A1-nivå lär man sig först die som feminin artikel.\",\"I plural används die för alla genus.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts die\|idx:137 (die), ceļš 'study.lv, study.examples.lv, study.important': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"study.lv":null,"study.examples.lv":null,"study.important":"[\"På A1-nivå lär man sig först die som fem…'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `dieser|idx:139`
**Field / path:** `study.lv, study.examples.lv, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** šis
**DE reference (read-only):** dieser
**CURRENT (captured scope):** {"study.lv":null,"study.examples.lv":null,"study.important":"[\"dieser, diese och dieses ändras efter genus.\",\"I plural är formen återigen diese.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts dieser\|idx:139 (dieser), ceļš 'study.lv, study.examples.lv, study.important': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"study.lv":null,"study.examples.lv":null,"study.important":"[\"dieser, diese och dieses ändras efter ge…'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `ein|idx:154`
**Field / path:** `lv; study.explanation; study.comparison`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** nenoteiktais artikuls
**DE reference (read-only):** ein
**CURRENT (captured scope):** {"lv":"Umbmäärane artikkel • Üks • Mingi","study.explanation":"[\"Huvudidén: ein är en obestämd artikel.\",\"ein är den obestämda artikeln för maskulina och neutra substantiv i nominativ.\",\"ein används för maskulint: ein Mann.\",\"ein används för neutrum: ein Buch.\",\"För feminin används: eine.\",\"I ackusativ maskulin: einen.\"]","study.comparison":"[{\"word\":\"ein Mann\",\"meaning\":\"maskulint genus\",\"example\":\"En man väntar ute.\"},{\"word\":\"eine Frau\",\"meaning\":\"feminint genus\",\"example\":\"en frau\"},{\"word\":\"ein Buch\",\"meaning\":\"neutrum genus\",\"example\":\"Ich habe ein Buch.\"},{\"word\":\"einen Mann\",\"meaning\":\"ackusativ\",\"example\":\"einen Mann\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts ein\|idx:154 (ein), ceļš 'lv; study.explanation; study.comparison': viena rinda aptver apakšlaukus lv, study.explanation, study.comparison, kuru saturs sākas ar '{"lv":"Umbmäärane artikkel • Üks • Mingi","study.explanation":"[\"Huvudidén: ein är en obestämd artikel.…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `einmal|idx:700`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vienreiz • reiz
**DE reference (read-only):** einmal
**CURRENT (captured scope):** {"lv":"Üks kord • Kord","study.translation":"Üks kord • Kord","study.explanation":"[\"Põhiidee: Osutab ühele korrale või minevikule (kord ma olin...).\",\"Einmal tähendab peamiselt: üks kord / minevikus.\",\"Sageli kirjeldab: ajamäärust.\",\"Einmal viitab ühele korrale või minevikule (kord ma...).\"]","study.examples":"[{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Ma olin kord Berliinis.\"},{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Ma olin kord Berliinis.\"}]","study.tip":"[\"einmal = en gång\",\"Använd einmal när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"einmal = en gång eller en gång tidigare.\",\"Pekar på ett tillfälle eller dåtiden (en gång var jag...).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts einmal\|idx:700 (einmal), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Üks kord • Kord","study.translation":"Üks kord • Kord","study.explanation":"[\"Põhiidee: Osutab ü…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `Eis|idx:157`
**Field / path:** `lv; study.explanation; study.examples; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** ledus • saldējums
**DE reference (read-only):** Eis
**CURRENT (captured scope):** {"lv":"Jää • Jäätis","study.explanation":"[\"Põhiidee: das Eis võib tähendada nii jääd kui ka jäätist.\",\"Kui jutt on külmast külmunud veest, öeldakse eesti keeles tavaliselt jää.\",\"Kui jutt on toidust või magustoidust, tähendab das Eis igapäevaelus väga sageli jäätis.\",\"Kontekst ütleb tavaliselt kohe, milline tähendus on mõeldud.\",\"A1 tasemel on kõige tähtsamad fraasid ein Eis essen ja Eis im Glas.\"]","study.examples":"[{\"de\":\"Ich esse ein Eis.\",\"lv\":\"Ma söön jäätist.\"},{\"de\":\"Möchtest du ein Eis?\",\"lv\":\"Kas sa tahad jäätist?\"},{\"de\":\"Im Winter liegt Eis auf dem See.\",\"lv\":\"Talvel on järvel jää.\"},{\"de\":\"Das Eis ist kalt.\",\"lv\":\"Jää on külm.\"},{\"de\":\"Ich nehme ein Eis mit Schokolade.\",\"lv\":\"Ma võtan jäätist šokolaadiga.\"}]","study.important":"[\"På svenska är is och glass två olika ord, men på tyska använder man ofta das Eis för båda.\",\"Sammanhanget är avgörande: mat betyder glass, kall yta eller vatten betyder is.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Eis\|idx:157 (Eis), ceļš 'lv; study.explanation; study.examples; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.important, kuru saturs sākas ar '{"lv":"Jää • Jäätis","study.explanation":"[\"Põhiidee: das Eis võib tähendada nii jääd kui ka jäätist.\"…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `erst|idx:165`
**Field / path:** `study.examples[0].lv; lv; study.explanation`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** tikai
**DE reference (read-only):** erst
**CURRENT (captured scope):** {"study.examples[0].lv":null,"lv":"Kõigepealt • Alles","study.explanation":"[\"Huvudidén: erst betyder oftast bara. Men i vissa sammanhang kan det också betyda först.\",\"erst indikerar ofta att något inträffar senare än förväntat.\",\"Ich bin erst 18. — Jag är bara 18.\",\"Es ist erst Montag. — Det är bara måndag.\",\"Erst lernen, dann spielen. — Först lär man sig, sedan spelar man.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts erst\|idx:165 (erst), ceļš 'study.examples[0].lv; lv; study.explanation': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"study.examples[0].lv":null,"lv":"Kõigepealt • Alles","study.explanation":"[\"Huvudidén: erst betyder o…'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `essen|idx:690`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** ēst
**DE reference (read-only):** essen
**CURRENT (captured scope):** {"lv":"Sööma","study.explanation":"[\"Põhiidee: Tegusõna — toitu sööma.\",\"Essen tähendab peamiselt: toitu tarbima.\",\"Sageli kirjeldab: tegevust.\",\"Essen tähendab peamiselt: toit või söögikord.\",\"Sageli kirjeldab: asja.\",\"Essen tähendab söömist.\",\"Das Essen võib tähendada toitu või söögikorda üldiselt.\"]","study.tip":"[\"essen = äta\",\"Använd essen när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"essen är ett verb utan artikel.\",\"das Essen är inte detsamma som essen.\",\"Verbet: essen.\",\"Maten/måltiden: das Essen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts essen\|idx:690 (essen), ceļš 'lv; study.explanation; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Sööma","study.explanation":"[\"Põhiidee: Tegusõna — toitu sööma.\",\"Essen tähendab peamiselt: to…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `Essen|idx:691`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** ēdiens • maltīte
**DE reference (read-only):** Essen
**CURRENT (captured scope):** {"lv":"Toit","study.explanation":"[\"Põhiidee: Nimisõna — toit või terve söögikord.\",\"Das Essen tähendab peamiselt: toitu tarbima.\",\"Sageli kirjeldab: tegevust.\",\"Das Essen tähendab peamiselt: toit või söögikord.\",\"Sageli kirjeldab: asja.\",\"Essen tähendab söömist.\",\"Das Essen võib tähendada toitu või söögikorda üldiselt.\"]","study.tip":"[\"das Essen = äta\",\"Använd das Essen när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"essen är ett verb utan artikel.\",\"das Essen är inte detsamma som essen.\",\"Verbet: essen.\",\"Maten/måltiden: das Essen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Essen\|idx:691 (Essen), ceļš 'lv; study.explanation; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Toit","study.explanation":"[\"Põhiidee: Nimisõna — toit või terve söögikord.\",\"Das Essen tähend…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `etwas|idx:169`
**Field / path:** `lv; study.explanation; study.examples; study.comparison`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** kaut kas
**DE reference (read-only):** etwas
**CURRENT (captured scope):** {"lv":"Midagi • Veidi","study.explanation":"[\"Põhiidee: etwas tähendab olenevalt kontekstist midagi või natuke.\",\"Kui etwas asendab tundmatut asja, öeldakse eesti keeles tavaliselt midagi.\",\"Kui etwas seisab omadussõna või hulga juures, tähendab see sageli natuke.\"]","study.examples":"[{\"de\":\"Ich möchte etwas trinken.\",\"lv\":\"Ma sooviksin midagi juua.\"},{\"de\":\"Hast du etwas Zeit?\",\"lv\":\"Kas sul on natuke aega?\"},{\"de\":\"Ich bin etwas müde.\",\"lv\":\"Ma olen veidi väsinud.\"},{\"de\":\"Ich habe etwas für dich.\",\"lv\":\"Mul on sulle midagi.\"},{\"de\":\"Das ist etwas teuer.\",\"lv\":\"See on veidi kallis.\"}]","study.comparison":"[{\"word\":\"etwas\",\"meaning\":\"Midagi / veidi\",\"example\":\"Ich brauche etwas. = Jag behöver något.\"},{\"word\":\"was\",\"meaning\":\"Midagi (kõnekeeles)\",\"example\":\"Willst du was trinken? = Vill du ha något att dricka?\"},{\"word\":\"ein bisschen\",\"meaning\":\"Natuke\",\"example\":\"Ich bin ein bisschen müde. = Jag är lite trött.\"},{\"word\":\"nichts\",\"meaning\":\"Mitte midagi\",\"example\":\"Ich brauche nichts. = Jag behöver ingenting.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts etwas\|idx:169 (etwas), ceļš 'lv; study.explanation; study.examples; study.comparison': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Midagi • Veidi","study.explanation":"[\"Põhiidee: etwas tähendab olenevalt kontekstist midagi või…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `euch|idx:170`
**Field / path:** `lv; study.examples; study.comparison`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** jūs • jums
**DE reference (read-only):** euch
**CURRENT (captured scope):** {"lv":"Teid • Teile","study.examples":"[{\"de\":\"Ich sehe euch.\",\"lv\":\"Ma näen teid.\"},{\"de\":\"Ich helfe euch.\",\"lv\":\"Ma aitan teid.\"},{\"de\":\"Ich gebe euch das Buch.\",\"lv\":\"Ma annan teile raamatu.\"},{\"de\":\"Ich danke euch.\",\"lv\":\"Ma tänan teid.\"},{\"de\":\"Ihr erinnert euch.\",\"lv\":\"Teie mäletate.\"}]","study.comparison":"[{\"word\":\"ihr\",\"meaning\":\"Teie\",\"example\":\"Ihr seid freundlich. = Ni är vänliga.\"},{\"word\":\"euch\",\"meaning\":\"Teid / teile\",\"example\":\"Ich helfe euch. = Jag hjälper er.\"},{\"word\":\"euer\",\"meaning\":\"Teie\",\"example\":\"Das ist euer Haus. = Det är ert hus.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts euch\|idx:170 (euch), ceļš 'lv; study.examples; study.comparison': viena rinda aptver apakšlaukus lv, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Teid • Teile","study.examples":"[{\"de\":\"Ich sehe euch.\",\"lv\":\"Ma näen teid.\"},{\"de\":\"I…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `fahren|idx:172`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** braukt
**DE reference (read-only):** fahren
**CURRENT (captured scope):** {"lv":"Sõitma • Vedama • Ära viima","study.translation":"Sõitma • Vedama • Ära viima","study.explanation":"[\"Põhiidee: fahren tähendab sõidukiga sõitma ja mõnes lauses ka kedagi sõidutama või ära viima.\",\"Fahren kasutatakse, kui liikumine toimub autoga, bussiga, rongiga, jalgrattaga või muu sõidukiga.\",\"Kui lauses on isik objektina, võib fahren tähendada sõidutama või ära viima.\",\"Kui liikumine toimub jalgsi, kasutatakse tavaliselt gehen või laufen.\"]","study.examples":"[{\"de\":\"Ich fahre nach Berlin.\",\"lv\":\"Ma sõidan Berliini.\"},{\"de\":\"Ich fahre mit dem Auto.\",\"lv\":\"Ma sõidan autoga.\"},{\"de\":\"Ich fahre meine Tochter zur Schule.\",\"lv\":\"Ma viin oma tütre kooli.\"},{\"de\":\"Ich fahre dich nach Hause.\",\"lv\":\"Ma viin sind koju.\"},{\"de\":\"Wir fahren morgen nach München.\",\"lv\":\"Me sõidame homme Münchenisse.\"}]","study.comparison":"[{\"word\":\"fahren\",\"meaning\":\"Sõidukiga sõitma\",\"example\":\"Jag åker med buss.\"},{\"word\":\"gehen\",\"meaning\":\"Jalgsi minema\",\"example\":\"Jag går hem.\"},{\"word\":\"laufen\",\"meaning\":\"Jooksma / käima\",\"example\":\"Han springer snabbt.\"},{\"word\":\"bringen\",\"meaning\":\"Tooma / kohale toimetama\",\"example\":\"Jag tar boken.\"},{\"word\":\"mitnehmen\",\"meaning\":\"Kaasa võtma\",\"example\":\"Jag tar dig med.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts fahren\|idx:172 (fahren), ceļš 'lv; study.translation; study.explanation; study.examples; study.comparison': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Sõitma • Vedama • Ära viima","study.translation":"Sõitma • Vedama • Ära viima","study.explanation…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

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

