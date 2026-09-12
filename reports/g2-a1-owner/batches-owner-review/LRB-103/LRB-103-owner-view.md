# G2/A1 LRB LRB-103 — OWNER VIEW

**Batch:** LRB-103
**Rows:** 25/25
**Direction:** DESCENDING
**Reserved for:** PC2
**Reviewer:** GPT OWNER
**Generated:** 2026-09-12T18:03:42.571Z
**Source commit:** `37a31289083447c286e78d19b7cfcb70fde4090e`
**Branch:** `cursor/lrb-103-owner-review-pc2`
**Overrides:** `reports/g2-a1-owner/batches-owner-review/LRB-103/LRB-103-owner-approved-overrides.json`

> OWNER decisions applied via approved overrides copy/paste. DE/production unchanged.

**Summary:** 25 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB103-0001`
**Finding Stable ID:** `g2/a1/uk|legen|idx:363|study.explanation; study.comparison; study.important|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `legen|idx:363`
**Field / path:** `study.explanation; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**LV source (read-only):** nolikt
**DE reference (read-only):** legen
**CURRENT (captured scope):** {"study.explanation":"[\"Головна думка: legen означає покласти щось униз або горизонтально.\",\"legen використовується, якщо ви самостійно пересуваєте річ і кладете її на стіл, ліжко чи іншу поверхню.\",\"Він відрізняється від liegen, що означає, що щось уже є або лежить.\",\"На рівні A1 найважливіша відмінність: legen = опуститися, liegen = лежати.\"]","study.comparison":"[{\"word\":\"legen\",\"meaning\":\"покласти вниз\",\"example\":\"Ich lege das Buch auf den Tisch.\"},{\"word\":\"liegen\",\"meaning\":\"бути / спати\",\"example\":\"Das Buch liegt auf dem Tisch.\"},{\"word\":\"stellen\",\"meaning\":\"поставити вертикально\",\"example\":\"Ich stelle die Flasche auf den Tisch.\"},{\"word\":\"setzen\",\"meaning\":\"сісти / сісти\",\"example\":\"Ich setze mich.\"}]","study.important":"[\"legen і liegen не те саме.\",\"Ich lege das Buch = Я відклав книгу. Das Buch liegt = книга знаходиться.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"класти","study.translation":"класти","study.explanation":"[\"Головна думка: legen означає класти щось горизонтально або на якусь поверхню.\",\"legen вживають, коли людина переміщує предмет і кладе його на стіл, ліжко чи іншу поверхню.\",\"Це дієслово відрізняється від liegen, яке описує стан: щось уже лежить або десь знаходиться.\",\"Найважливіша відмінність на рівні A1: legen = класти, liegen = лежати.\"]","study.examples":"[{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Я кладу книжку на стіл.\"},{\"de\":\"Leg den Schlüssel hierhin.\",\"lv\":\"Поклади ключ сюди.\"},{\"de\":\"Sie legt das Kind ins Bett.\",\"lv\":\"Вона вкладає дитину в ліжко.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Книжка лежить на столі.\"}]","study.comparison":"[{\"word\":\"legen\",\"meaning\":\"класти\",\"example\":\"Ich lege das Buch auf den Tisch.\"},{\"word\":\"liegen\",\"meaning\":\"лежати / знаходитися\",\"example\":\"Das Buch liegt auf dem Tisch.\"},{\"word\":\"stellen\",\"meaning\":\"ставити вертикально\",\"example\":\"Ich stelle die Flasche auf den Tisch.\"},{\"word\":\"setzen\",\"meaning\":\"саджати / сідати\",\"example\":\"Ich setze mich.\"}]","study.tip":"{\"text\":\"Запам'ятай: ти кладеш предмет - legen; предмет уже лежить - liegen.\"}","study.important":"[\"legen і liegen - не те саме.\",\"Ich lege das Buch = я кладу книжку. Das Buch liegt = книжка лежить.\"]","study.sectionAccents":{"explanation":{"blue":["legen","liegen"],"purple":["класти","лежить","лежати","знаходиться"]},"examples":[{"de":{"blue":["lege"],"yellow":["Buch","Tisch"]},"lv":{"purple":["кладу","книжку","стіл"]}},{"de":{"blue":["Leg"],"yellow":["Schlüssel"]},"lv":{"purple":["Поклади","ключ"]}},{"de":{"blue":["legt"],"green":["Kind"],"yellow":["Bett"]},"lv":{"purple":["вкладає","дитину","ліжко"]}},{"de":{"red":["liegt"],"yellow":["Buch","Tisch"]},"lv":{"purple":["Книжка","лежить","столі"]}}],"comparison":[{"word":{"green":["legen"]},"meaning":{"purple":["класти"]},"example":{"blue":["lege"]}},{"word":{"green":["liegen"]},"meaning":{"purple":["лежати","знаходитися"]},"example":{"red":["liegt"]}},{"word":{"green":["stellen"]},"meaning":{"purple":["ставити вертикально"]},"example":{"yellow":["stelle"]}},{"word":{"green":["setzen"]},"meaning":{"purple":["саджати","сідати"]},"example":{"green":["setze"]}}],"tip":{"left":{"blue":["legen"],"red":["liegen"],"purple":["кладеш","лежить"]}},"important":[{"blue":["legen"],"red":["liegen"]},{"blue":["lege"],"red":["liegt"],"purple":["лежить","кладу","книжка"]}]}}
**Note:** GPT OWNER approved override: Wrong headword nuance, legen/liegen contrast, examples and highlights.

### Gala card (approved NEW composite)

```json
{
  "lv": "класти",
  "study.translation": "класти",
  "study.explanation": [
    "Головна думка: legen означає класти щось горизонтально або на якусь поверхню.",
    "legen вживають, коли людина переміщує предмет і кладе його на стіл, ліжко чи іншу поверхню.",
    "Це дієслово відрізняється від liegen, яке описує стан: щось уже лежить або десь знаходиться.",
    "Найважливіша відмінність на рівні A1: legen = класти, liegen = лежати."
  ],
  "study.examples": [
    {
      "de": "Ich lege das Buch auf den Tisch.",
      "lv": "Я кладу книжку на стіл."
    },
    {
      "de": "Leg den Schlüssel hierhin.",
      "lv": "Поклади ключ сюди."
    },
    {
      "de": "Sie legt das Kind ins Bett.",
      "lv": "Вона вкладає дитину в ліжко."
    },
    {
      "de": "Das Buch liegt auf dem Tisch.",
      "lv": "Книжка лежить на столі."
    }
  ],
  "study.comparison": [
    {
      "word": "legen",
      "meaning": "класти",
      "example": "Ich lege das Buch auf den Tisch."
    },
    {
      "word": "liegen",
      "meaning": "лежати / знаходитися",
      "example": "Das Buch liegt auf dem Tisch."
    },
    {
      "word": "stellen",
      "meaning": "ставити вертикально",
      "example": "Ich stelle die Flasche auf den Tisch."
    },
    {
      "word": "setzen",
      "meaning": "саджати / сідати",
      "example": "Ich setze mich."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: ти кладеш предмет - legen; предмет уже лежить - liegen."
  },
  "study.important": [
    "legen і liegen - не те саме.",
    "Ich lege das Buch = я кладу книжку. Das Buch liegt = книжка лежить."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "legen",
        "liegen"
      ],
      "purple": [
        "класти",
        "лежить",
        "лежати",
        "знаходиться"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "lege"
          ],
          "yellow": [
            "Buch",
            "Tisch"
          ]
        },
        "lv": {
          "purple": [
            "кладу",
            "книжку",
            "стіл"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Leg"
          ],
          "yellow": [
            "Schlüssel"
          ]
        },
        "lv": {
          "purple": [
            "Поклади",
            "ключ"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "legt"
          ],
          "green": [
            "Kind"
          ],
          "yellow": [
            "Bett"
          ]
        },
        "lv": {
          "purple": [
            "вкладає",
            "дитину",
            "ліжко"
          ]
        }
      },
      {
        "de": {
          "red": [
            "liegt"
          ],
          "yellow": [
            "Buch",
            "Tisch"
          ]
        },
        "lv": {
          "purple": [
            "Книжка",
            "лежить",
            "столі"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "legen"
          ]
        },
        "meaning": {
          "purple": [
            "класти"
          ]
        },
        "example": {
          "blue": [
            "lege"
          ]
        }
      },
      {
        "word": {
          "green": [
            "liegen"
          ]
        },
        "meaning": {
          "purple": [
            "лежати",
            "знаходитися"
          ]
        },
        "example": {
          "red": [
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
        "meaning": {
          "purple": [
            "ставити вертикально"
          ]
        },
        "example": {
          "yellow": [
            "stelle"
          ]
        }
      },
      {
        "word": {
          "green": [
            "setzen"
          ]
        },
        "meaning": {
          "purple": [
            "саджати",
            "сідати"
          ]
        },
        "example": {
          "green": [
            "setze"
          ]
        }
      }
    ],
    "tip": {
      "left": {
        "blue": [
          "legen"
        ],
        "red": [
          "liegen"
        ],
        "purple": [
          "кладеш",
          "лежить"
        ]
      }
    },
    "important": [
      {
        "blue": [
          "legen"
        ],
        "red": [
          "liegen"
        ]
      },
      {
        "blue": [
          "lege"
        ],
        "red": [
          "liegt"
        ],
        "purple": [
          "лежить",
          "кладу",
          "книжка"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "study.explanation": "[\"Головна думка: legen означає покласти щось униз або горизонтально.\",\"legen використовується, якщо ви самостійно пересуваєте річ і кладете її на стіл, ліжко чи іншу поверхню.\",\"Він відрізняється від liegen, що означає, що щось уже є або лежить.\",\"На рівні A1 найважливіша відмінність: legen = опуститися, liegen = лежати.\"]",
  "study.comparison": "[{\"word\":\"legen\",\"meaning\":\"покласти вниз\",\"example\":\"Ich lege das Buch auf den Tisch.\"},{\"word\":\"liegen\",\"meaning\":\"бути / спати\",\"example\":\"Das Buch liegt auf dem Tisch.\"},{\"word\":\"stellen\",\"meaning\":\"поставити вертикально\",\"example\":\"Ich stelle die Flasche auf den Tisch.\"},{\"word\":\"setzen\",\"meaning\":\"сісти / сісти\",\"example\":\"Ich setze mich.\"}]",
  "study.important": "[\"legen і liegen не те саме.\",\"Ich lege das Buch = Я відклав книгу. Das Buch liegt = книга знаходиться.\"]"
}
```

---

## Finding 2

**Audit ID:** `LRB103-0002`
**Finding Stable ID:** `g2/a1/uk|leise|idx:368|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `leise|idx:368`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** kluss
**DE reference (read-only):** leise
**CURRENT (captured scope):** {"lv":"тихий","study.translation":"тихий","study.explanation":"[\"Головна думка: Тихо або низька гучність.\",\"leise в основному означає: низька гучність.\",\"Часто описує: звук/голос/музика.\",\"leise описує низьку гучність або тихий голос/звук.\"]","study.examples":"[{\"de\":\"Bitte sei leise.\",\"lv\":\"Будь ласка, мовчи\"},{\"de\":\"Bitte sei leise.\",\"lv\":\"будь ласка, мовчи\"},{\"de\":\"Die Musik ist leise.\",\"lv\":\"музика тиха.\"},{\"de\":\"Sprich bitte leise.\",\"lv\":\"будь ласка, говоріть тихо.\"}]","study.tip":"[\"leise = тихо\",\"Використовується в leise, коли контекст відповідає цьому значенню.\"]","study.important":"[\"leise = беззвучний.\",\"leise = обсяг.\",\"Тихий або низький рівень гучності.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"тихий","study.translation":"тихий","study.explanation":"[\"Головна думка: leise означає тихий або тихо - з невеликою гучністю.\",\"leise вживають, коли звук, голос або музика мають невелику гучність.\",\"Як прикметник leise описує тихий звук, а як прислівник - дію, виконану тихо.\",\"Це слово стосується гучності, а не повної відсутності звуку.\"]","study.examples":"[{\"de\":\"Bitte sei leise.\",\"lv\":\"Будь ласка, тихо.\"},{\"de\":\"Bitte sei leise.\",\"lv\":\"Будь ласка, тихо.\"},{\"de\":\"Die Musik ist leise.\",\"lv\":\"Музика тиха.\"},{\"de\":\"Sprich bitte leise.\",\"lv\":\"Говори, будь ласка, тихо.\"}]","study.tip":"[\"leise = тихий / тихо.\",\"Звертай увагу, чи слово описує предмет або спосіб дії.\"]","study.important":"[\"leise описує невелику гучність.\",\"Тихий звук не обов'язково є беззвучним.\",\"Прикметник: leise Musik; прислівник: leise sprechen.\"]","study.sectionAccents":{"explanation":{"green":["leise"],"purple":["тихий","тихо","невелику гучність"]},"examples":[{"de":{"green":["leise"]},"lv":{"purple":["тихо"]}},{"de":{"green":["leise"]},"lv":{"purple":["тихо"]}},{"de":{"green":["leise"]},"lv":{"purple":["Музика","тиха"]}},{"de":{"green":["leise"]},"lv":{"purple":["Говори","тихо"]}}],"tip":[{"purple":["тихий","тихо"]},{}],"important":[{"green":["leise"],"purple":["невелику гучність"]},{"purple":["беззвучним"]},{}]}}
**Note:** GPT OWNER approved override: Adjective/adverb confusion, unnatural wording, duplicated example and missing target highlights.

### Gala card (approved NEW composite)

```json
{
  "lv": "тихий",
  "study.translation": "тихий",
  "study.explanation": [
    "Головна думка: leise означає тихий або тихо - з невеликою гучністю.",
    "leise вживають, коли звук, голос або музика мають невелику гучність.",
    "Як прикметник leise описує тихий звук, а як прислівник - дію, виконану тихо.",
    "Це слово стосується гучності, а не повної відсутності звуку."
  ],
  "study.examples": [
    {
      "de": "Bitte sei leise.",
      "lv": "Будь ласка, тихо."
    },
    {
      "de": "Bitte sei leise.",
      "lv": "Будь ласка, тихо."
    },
    {
      "de": "Die Musik ist leise.",
      "lv": "Музика тиха."
    },
    {
      "de": "Sprich bitte leise.",
      "lv": "Говори, будь ласка, тихо."
    }
  ],
  "study.tip": [
    "leise = тихий / тихо.",
    "Звертай увагу, чи слово описує предмет або спосіб дії."
  ],
  "study.important": [
    "leise описує невелику гучність.",
    "Тихий звук не обов'язково є беззвучним.",
    "Прикметник: leise Musik; прислівник: leise sprechen."
  ],
  "study.sectionAccents": {
    "explanation": {
      "green": [
        "leise"
      ],
      "purple": [
        "тихий",
        "тихо",
        "невелику гучність"
      ]
    },
    "examples": [
      {
        "de": {
          "green": [
            "leise"
          ]
        },
        "lv": {
          "purple": [
            "тихо"
          ]
        }
      },
      {
        "de": {
          "green": [
            "leise"
          ]
        },
        "lv": {
          "purple": [
            "тихо"
          ]
        }
      },
      {
        "de": {
          "green": [
            "leise"
          ]
        },
        "lv": {
          "purple": [
            "Музика",
            "тиха"
          ]
        }
      },
      {
        "de": {
          "green": [
            "leise"
          ]
        },
        "lv": {
          "purple": [
            "Говори",
            "тихо"
          ]
        }
      }
    ],
    "tip": [
      {
        "purple": [
          "тихий",
          "тихо"
        ]
      },
      {}
    ],
    "important": [
      {
        "green": [
          "leise"
        ],
        "purple": [
          "невелику гучність"
        ]
      },
      {
        "purple": [
          "беззвучним"
        ]
      },
      {}
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "тихий",
  "study.translation": "тихий",
  "study.explanation": "[\"Головна думка: Тихо або низька гучність.\",\"leise в основному означає: низька гучність.\",\"Часто описує: звук/голос/музика.\",\"leise описує низьку гучність або тихий голос/звук.\"]",
  "study.examples": "[{\"de\":\"Bitte sei leise.\",\"lv\":\"Будь ласка, мовчи\"},{\"de\":\"Bitte sei leise.\",\"lv\":\"будь ласка, мовчи\"},{\"de\":\"Die Musik ist leise.\",\"lv\":\"музика тиха.\"},{\"de\":\"Sprich bitte leise.\",\"lv\":\"будь ласка, говоріть тихо.\"}]",
  "study.tip": "[\"leise = тихо\",\"Використовується в leise, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"leise = беззвучний.\",\"leise = обсяг.\",\"Тихий або низький рівень гучності.\"]"
}
```

---

## Finding 3

**Audit ID:** `LRB103-0003`
**Finding Stable ID:** `g2/a1/uk|liegen|idx:377|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `liegen|idx:377`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** atrasties • gulēt
**DE reference (read-only):** liegen
**CURRENT (captured scope):** {"lv":"бути • спати","study.translation":"бути • спати","study.explanation":"[\"Головна думка: liegen означає лежати або лежати горизонтально.\",\"Про людину liegen часто означає спати.\",\"Про річ liegen означає, що вона десь є.\",\"Воно відрізняється від legen, що означає записувати щось.\"]","study.examples":"[{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"книга лежить на столі.\"},{\"de\":\"Mein Handy liegt im Auto.\",\"lv\":\"мій телефон в машині.\"},{\"de\":\"Er liegt im Bett.\",\"lv\":\"він спить у ліжку.\"},{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Я кладу книгу на стіл.\"}]","study.comparison":"[{\"word\":\"liegen\",\"meaning\":\"бути / спати\",\"example\":\"Das Buch liegt hier.\"},{\"word\":\"legen\",\"meaning\":\"покласти вниз\",\"example\":\"Ich lege das Buch hierhin.\"},{\"word\":\"stehen\",\"meaning\":\"стояти / стояти\",\"example\":\"Die Flasche steht auf dem Tisch.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Ich bin hier.\"}]","study.tip":"{\"text\":\"Пам'ятай: справа вже на місці → liegen; ви кладете його → legen.\"}","study.important":"[\"liegen вказує на стан або розташування.\",\"legen показує дію: хтось щось кладе.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"лежати • знаходитися","study.translation":"лежати • знаходитися","study.explanation":"[\"Головна думка: liegen означає лежати горизонтально або знаходитися в певному місці.\",\"Коли йдеться про людину, liegen означає лежати, а не обов'язково спати.\",\"Коли йдеться про предмет, liegen описує його розташування.\",\"liegen відрізняється від legen: liegen описує стан, а legen - дію класти.\"]","study.examples":"[{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Книжка лежить на столі.\"},{\"de\":\"Mein Handy liegt im Auto.\",\"lv\":\"Мій телефон лежить в автомобілі.\"},{\"de\":\"Er liegt im Bett.\",\"lv\":\"Він лежить у ліжку.\"},{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Я кладу книжку на стіл.\"}]","study.comparison":"[{\"word\":\"liegen\",\"meaning\":\"лежати / знаходитися\",\"example\":\"Das Buch liegt hier.\"},{\"word\":\"legen\",\"meaning\":\"класти\",\"example\":\"Ich lege das Buch hierhin.\"},{\"word\":\"stehen\",\"meaning\":\"стояти / знаходитися вертикально\",\"example\":\"Die Flasche steht auf dem Tisch.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Ich bin hier.\"}]","study.tip":"{\"text\":\"Запам'ятай: предмет уже лежить - liegen; хтось його кладе - legen.\"}","study.important":"[\"liegen описує стан або розташування.\",\"legen описує дію: хтось щось кладе.\"]","study.sectionAccents":{"explanation":{"blue":["liegen","legen"],"purple":["лежати","знаходитися","розташування","класти"]},"examples":[{"de":{"blue":["liegt"],"yellow":["Buch","Tisch"]},"lv":{"purple":["Книжка","лежить","столі"]}},{"de":{"blue":["liegt"],"yellow":["Handy","Auto"]},"lv":{"purple":["телефон","лежить","автомобілі"]}},{"de":{"blue":["liegt"],"green":["Bett"]},"lv":{"purple":["лежить","ліжку"]}},{"de":{"red":["lege"],"yellow":["Buch","Tisch"]},"lv":{"purple":["кладу","книжку","стіл"]}}],"comparison":[{"word":{"green":["liegen"]},"meaning":{"purple":["лежати","знаходитися"]},"example":{"blue":["liegt"]}},{"word":{"green":["legen"]},"meaning":{"purple":["класти"]},"example":{"red":["lege"]}},{"word":{"green":["stehen"]},"meaning":{"purple":["стояти","вертикально"]},"example":{"yellow":["steht"]}},{"word":{"green":["sein"]},"meaning":{"purple":["бути"]},"example":{"green":["bin"]}}],"tip":{"left":{"blue":["liegen"],"red":["legen"],"purple":["лежить","кладе"]}},"important":[{"blue":["liegen"],"purple":["стан","розташування"]},{"red":["legen"],"purple":["кладе","дію"]}]}}
**Note:** GPT OWNER approved override: Headword wrongly says be/sleep; legen was mistranslated as write down.

### Gala card (approved NEW composite)

```json
{
  "lv": "лежати • знаходитися",
  "study.translation": "лежати • знаходитися",
  "study.explanation": [
    "Головна думка: liegen означає лежати горизонтально або знаходитися в певному місці.",
    "Коли йдеться про людину, liegen означає лежати, а не обов'язково спати.",
    "Коли йдеться про предмет, liegen описує його розташування.",
    "liegen відрізняється від legen: liegen описує стан, а legen - дію класти."
  ],
  "study.examples": [
    {
      "de": "Das Buch liegt auf dem Tisch.",
      "lv": "Книжка лежить на столі."
    },
    {
      "de": "Mein Handy liegt im Auto.",
      "lv": "Мій телефон лежить в автомобілі."
    },
    {
      "de": "Er liegt im Bett.",
      "lv": "Він лежить у ліжку."
    },
    {
      "de": "Ich lege das Buch auf den Tisch.",
      "lv": "Я кладу книжку на стіл."
    }
  ],
  "study.comparison": [
    {
      "word": "liegen",
      "meaning": "лежати / знаходитися",
      "example": "Das Buch liegt hier."
    },
    {
      "word": "legen",
      "meaning": "класти",
      "example": "Ich lege das Buch hierhin."
    },
    {
      "word": "stehen",
      "meaning": "стояти / знаходитися вертикально",
      "example": "Die Flasche steht auf dem Tisch."
    },
    {
      "word": "sein",
      "meaning": "бути",
      "example": "Ich bin hier."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: предмет уже лежить - liegen; хтось його кладе - legen."
  },
  "study.important": [
    "liegen описує стан або розташування.",
    "legen описує дію: хтось щось кладе."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "liegen",
        "legen"
      ],
      "purple": [
        "лежати",
        "знаходитися",
        "розташування",
        "класти"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "liegt"
          ],
          "yellow": [
            "Buch",
            "Tisch"
          ]
        },
        "lv": {
          "purple": [
            "Книжка",
            "лежить",
            "столі"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "liegt"
          ],
          "yellow": [
            "Handy",
            "Auto"
          ]
        },
        "lv": {
          "purple": [
            "телефон",
            "лежить",
            "автомобілі"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "liegt"
          ],
          "green": [
            "Bett"
          ]
        },
        "lv": {
          "purple": [
            "лежить",
            "ліжку"
          ]
        }
      },
      {
        "de": {
          "red": [
            "lege"
          ],
          "yellow": [
            "Buch",
            "Tisch"
          ]
        },
        "lv": {
          "purple": [
            "кладу",
            "книжку",
            "стіл"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "liegen"
          ]
        },
        "meaning": {
          "purple": [
            "лежати",
            "знаходитися"
          ]
        },
        "example": {
          "blue": [
            "liegt"
          ]
        }
      },
      {
        "word": {
          "green": [
            "legen"
          ]
        },
        "meaning": {
          "purple": [
            "класти"
          ]
        },
        "example": {
          "red": [
            "lege"
          ]
        }
      },
      {
        "word": {
          "green": [
            "stehen"
          ]
        },
        "meaning": {
          "purple": [
            "стояти",
            "вертикально"
          ]
        },
        "example": {
          "yellow": [
            "steht"
          ]
        }
      },
      {
        "word": {
          "green": [
            "sein"
          ]
        },
        "meaning": {
          "purple": [
            "бути"
          ]
        },
        "example": {
          "green": [
            "bin"
          ]
        }
      }
    ],
    "tip": {
      "left": {
        "blue": [
          "liegen"
        ],
        "red": [
          "legen"
        ],
        "purple": [
          "лежить",
          "кладе"
        ]
      }
    },
    "important": [
      {
        "blue": [
          "liegen"
        ],
        "purple": [
          "стан",
          "розташування"
        ]
      },
      {
        "red": [
          "legen"
        ],
        "purple": [
          "кладе",
          "дію"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "бути • спати",
  "study.translation": "бути • спати",
  "study.explanation": "[\"Головна думка: liegen означає лежати або лежати горизонтально.\",\"Про людину liegen часто означає спати.\",\"Про річ liegen означає, що вона десь є.\",\"Воно відрізняється від legen, що означає записувати щось.\"]",
  "study.examples": "[{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"книга лежить на столі.\"},{\"de\":\"Mein Handy liegt im Auto.\",\"lv\":\"мій телефон в машині.\"},{\"de\":\"Er liegt im Bett.\",\"lv\":\"він спить у ліжку.\"},{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Я кладу книгу на стіл.\"}]",
  "study.comparison": "[{\"word\":\"liegen\",\"meaning\":\"бути / спати\",\"example\":\"Das Buch liegt hier.\"},{\"word\":\"legen\",\"meaning\":\"покласти вниз\",\"example\":\"Ich lege das Buch hierhin.\"},{\"word\":\"stehen\",\"meaning\":\"стояти / стояти\",\"example\":\"Die Flasche steht auf dem Tisch.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Ich bin hier.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: справа вже на місці → liegen; ви кладете його → legen.\"}",
  "study.important": "[\"liegen вказує на стан або розташування.\",\"legen показує дію: хтось щось кладе.\"]"
}
```

---

## Finding 4

**Audit ID:** `LRB103-0004`
**Finding Stable ID:** `g2/a1/uk|machen|idx:386|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `machen|idx:386`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** darīt • taisīt
**DE reference (read-only):** machen
**CURRENT (captured scope):** {"lv":"зробити • зробити","study.translation":"зробити • зробити","study.explanation":"[\"Головна думка: machen є дуже поширеним словом, що означає робити або робити.\",\"Якщо йдеться про дію загалом, перекладіть як робити.\",\"Якщо щось виготовляється або готується, це перекладається як виготовлення або приготування.\",\"У багатьох фразах machen перекладається природно відповідно до латиської мови, а не буквально.\"]","study.examples":"[{\"de\":\"Was machst du?\",\"lv\":\"що ти робиш\"},{\"de\":\"Ich mache Hausaufgaben.\",\"lv\":\"Я роблю домашнє завдання.\"},{\"de\":\"Wir machen Pizza.\",\"lv\":\"готуємо піцу.\"},{\"de\":\"Das macht Spaß.\",\"lv\":\"це весело.\"}]","study.tip":"{\"text\":\"Пам'ятай: Was machst du? = Що ти робиш?\"}","study.important":"[\"machen є дуже широким словом, але латиська мова часто доводиться перекладати природно відповідно до ситуації.\",\"Das macht Spaß означає «це весело», а не буквально «це смішно».\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"робити","study.translation":"робити","study.explanation":"[\"Головна думка: machen - дуже поширене дієслово зі значенням робити.\",\"Коли йдеться про дію загалом, machen перекладають як робити або виконувати.\",\"Коли щось створюють чи готують, природний переклад залежить від контексту.\",\"У сталих висловах machen потрібно перекладати за змістом, а не дослівно.\"]","study.examples":"[{\"de\":\"Was machst du?\",\"lv\":\"Що ти робиш?\"},{\"de\":\"Ich mache Hausaufgaben.\",\"lv\":\"Я виконую домашнє завдання.\"},{\"de\":\"Wir machen Pizza.\",\"lv\":\"Ми готуємо піцу.\"},{\"de\":\"Das macht Spaß.\",\"lv\":\"Це весело.\"}]","study.tip":"{\"text\":\"Запам'ятай: Was machst du? = Що ти робиш?\"}","study.important":"[\"machen має широке значення, тому український переклад залежить від ситуації.\",\"Das macht Spaß означає «Це весело», а не перекладається дослівно.\"]","study.sectionAccents":{"explanation":{"blue":["machen"],"purple":["робити","виконувати","створюють","готують"]},"examples":[{"de":{"blue":["machst"]},"lv":{"purple":["робиш"]}},{"de":{"blue":["mache"],"yellow":["Hausaufgaben"]},"lv":{"purple":["виконую","домашнє завдання"]}},{"de":{"blue":["machen"],"yellow":["Pizza"]},"lv":{"purple":["готуємо","піцу"]}},{"de":{"blue":["macht Spaß"]},"lv":{"purple":["весело"]}}],"tip":{"left":{"blue":["Was machst du"],"purple":["Що ти робиш"]}},"important":[{"blue":["machen"],"purple":["широке значення"]},{"blue":["Das macht Spaß"],"purple":["Це весело"]}]}}
**Note:** GPT OWNER approved override: Duplicated headword meaning and Latvian-language residue in explanation.

### Gala card (approved NEW composite)

```json
{
  "lv": "робити",
  "study.translation": "робити",
  "study.explanation": [
    "Головна думка: machen - дуже поширене дієслово зі значенням робити.",
    "Коли йдеться про дію загалом, machen перекладають як робити або виконувати.",
    "Коли щось створюють чи готують, природний переклад залежить від контексту.",
    "У сталих висловах machen потрібно перекладати за змістом, а не дослівно."
  ],
  "study.examples": [
    {
      "de": "Was machst du?",
      "lv": "Що ти робиш?"
    },
    {
      "de": "Ich mache Hausaufgaben.",
      "lv": "Я виконую домашнє завдання."
    },
    {
      "de": "Wir machen Pizza.",
      "lv": "Ми готуємо піцу."
    },
    {
      "de": "Das macht Spaß.",
      "lv": "Це весело."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: Was machst du? = Що ти робиш?"
  },
  "study.important": [
    "machen має широке значення, тому український переклад залежить від ситуації.",
    "Das macht Spaß означає «Це весело», а не перекладається дослівно."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "machen"
      ],
      "purple": [
        "робити",
        "виконувати",
        "створюють",
        "готують"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "machst"
          ]
        },
        "lv": {
          "purple": [
            "робиш"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "mache"
          ],
          "yellow": [
            "Hausaufgaben"
          ]
        },
        "lv": {
          "purple": [
            "виконую",
            "домашнє завдання"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "machen"
          ],
          "yellow": [
            "Pizza"
          ]
        },
        "lv": {
          "purple": [
            "готуємо",
            "піцу"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "macht Spaß"
          ]
        },
        "lv": {
          "purple": [
            "весело"
          ]
        }
      }
    ],
    "tip": {
      "left": {
        "blue": [
          "Was machst du"
        ],
        "purple": [
          "Що ти робиш"
        ]
      }
    },
    "important": [
      {
        "blue": [
          "machen"
        ],
        "purple": [
          "широке значення"
        ]
      },
      {
        "blue": [
          "Das macht Spaß"
        ],
        "purple": [
          "Це весело"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "зробити • зробити",
  "study.translation": "зробити • зробити",
  "study.explanation": "[\"Головна думка: machen є дуже поширеним словом, що означає робити або робити.\",\"Якщо йдеться про дію загалом, перекладіть як робити.\",\"Якщо щось виготовляється або готується, це перекладається як виготовлення або приготування.\",\"У багатьох фразах machen перекладається природно відповідно до латиської мови, а не буквально.\"]",
  "study.examples": "[{\"de\":\"Was machst du?\",\"lv\":\"що ти робиш\"},{\"de\":\"Ich mache Hausaufgaben.\",\"lv\":\"Я роблю домашнє завдання.\"},{\"de\":\"Wir machen Pizza.\",\"lv\":\"готуємо піцу.\"},{\"de\":\"Das macht Spaß.\",\"lv\":\"це весело.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: Was machst du? = Що ти робиш?\"}",
  "study.important": "[\"machen є дуже широким словом, але латиська мова часто доводиться перекладати природно відповідно до ситуації.\",\"Das macht Spaß означає «це весело», а не буквально «це смішно».\"]"
}
```

---

## Finding 5

**Audit ID:** `LRB103-0005`
**Finding Stable ID:** `g2/a1/uk|Mal|idx:390|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `Mal|idx:390`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** reize
**DE reference (read-only):** Mal
**CURRENT (captured scope):** {"lv":"час","study.translation":"час","study.explanation":"[\"Головна думка: das Mal означає один раз як подія або випадок.\",\"Часто використовується з числами: ein Mal, zwei Mal, drei Mal.\",\"З порядковим номером: das erste Mal, das zweite Mal.\",\"Не розмовляйте з розмовною часткою mal (Komm mal her!) - це інше значення.\"]","study.examples":"[{\"de\":\"Das erste Mal war schwer.\",\"lv\":\"перший час було важко.\"},{\"de\":\"Ich war schon zwei Mal in Berlin.\",\"lv\":\"Я вже був у Берліні двічі.\"},{\"de\":\"Ein Mal reicht.\",\"lv\":\"одного разу достатньо.\"},{\"de\":\"Noch ein Mal, bitte!\",\"lv\":\"ще раз будь ласка!\"}]","study.tip":"{\"text\":\"Пам'ятай: das Mal = раз (іменник); mal без артикля = розмовна частка.\"}","study.important":"[\"das Mal / die Male — іменник зі ст.\",\"ein Mal, zwei Mal - відлік разів.\",\"mal без артикля (Komm mal her!) не те саме, що das Mal.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"раз","study.translation":"раз","study.explanation":"[\"Головна думка: das Mal означає окремий раз, випадок або подію.\",\"Його часто вживають із числами: ein Mal, zwei Mal, drei Mal.\",\"З порядковими числівниками кажуть: das erste Mal, das zweite Mal.\",\"Не плутай іменник das Mal із розмовною часткою mal у вислові Komm mal her!\"]","study.examples":"[{\"de\":\"Das erste Mal war schwer.\",\"lv\":\"Уперше було важко.\"},{\"de\":\"Ich war schon zwei Mal in Berlin.\",\"lv\":\"Я вже двічі був у Берліні.\"},{\"de\":\"Ein Mal reicht.\",\"lv\":\"Одного разу достатньо.\"},{\"de\":\"Noch ein Mal, bitte!\",\"lv\":\"Ще один раз, будь ласка!\"}]","study.tip":"{\"text\":\"Запам'ятай: das Mal = раз як іменник; mal без артикля може бути розмовною часткою.\"}","study.important":"[\"das Mal / die Male - іменник з артиклем.\",\"ein Mal, zwei Mal - підрахунок кількості разів.\",\"mal без артикля не тотожне іменнику das Mal.\"]","study.sectionAccents":{"explanation":{"blue":["das Mal","ein Mal","zwei Mal","das erste Mal"],"purple":["раз","випадок","подію","порядковими числівниками"]},"examples":[{"de":{"blue":["erste Mal"]},"lv":{"purple":["Уперше"]}},{"de":{"blue":["zwei Mal"]},"lv":{"purple":["двічі"]}},{"de":{"blue":["Ein Mal"]},"lv":{"purple":["Одного разу"]}},{"de":{"blue":["ein Mal"]},"lv":{"purple":["Ще один раз"]}}],"tip":{"blue":["das Mal","Mal"],"purple":["раз","іменник","розмовною часткою"]},"important":[{"blue":["das Mal","die Male"],"purple":["іменник"]},{"blue":["ein Mal","zwei Mal"],"purple":["раз","кількості разів"]},{"blue":["mal"],"purple":["das Mal","іменник"]}]}}
**Note:** GPT OWNER approved override: Headword means time instead of occurrence; unnatural grammar and incomplete noun note.

### Gala card (approved NEW composite)

```json
{
  "lv": "раз",
  "study.translation": "раз",
  "study.explanation": [
    "Головна думка: das Mal означає окремий раз, випадок або подію.",
    "Його часто вживають із числами: ein Mal, zwei Mal, drei Mal.",
    "З порядковими числівниками кажуть: das erste Mal, das zweite Mal.",
    "Не плутай іменник das Mal із розмовною часткою mal у вислові Komm mal her!"
  ],
  "study.examples": [
    {
      "de": "Das erste Mal war schwer.",
      "lv": "Уперше було важко."
    },
    {
      "de": "Ich war schon zwei Mal in Berlin.",
      "lv": "Я вже двічі був у Берліні."
    },
    {
      "de": "Ein Mal reicht.",
      "lv": "Одного разу достатньо."
    },
    {
      "de": "Noch ein Mal, bitte!",
      "lv": "Ще один раз, будь ласка!"
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: das Mal = раз як іменник; mal без артикля може бути розмовною часткою."
  },
  "study.important": [
    "das Mal / die Male - іменник з артиклем.",
    "ein Mal, zwei Mal - підрахунок кількості разів.",
    "mal без артикля не тотожне іменнику das Mal."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "das Mal",
        "ein Mal",
        "zwei Mal",
        "das erste Mal"
      ],
      "purple": [
        "раз",
        "випадок",
        "подію",
        "порядковими числівниками"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "erste Mal"
          ]
        },
        "lv": {
          "purple": [
            "Уперше"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "zwei Mal"
          ]
        },
        "lv": {
          "purple": [
            "двічі"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Ein Mal"
          ]
        },
        "lv": {
          "purple": [
            "Одного разу"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "ein Mal"
          ]
        },
        "lv": {
          "purple": [
            "Ще один раз"
          ]
        }
      }
    ],
    "tip": {
      "blue": [
        "das Mal",
        "Mal"
      ],
      "purple": [
        "раз",
        "іменник",
        "розмовною часткою"
      ]
    },
    "important": [
      {
        "blue": [
          "das Mal",
          "die Male"
        ],
        "purple": [
          "іменник"
        ]
      },
      {
        "blue": [
          "ein Mal",
          "zwei Mal"
        ],
        "purple": [
          "раз",
          "кількості разів"
        ]
      },
      {
        "blue": [
          "mal"
        ],
        "purple": [
          "das Mal",
          "іменник"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "час",
  "study.translation": "час",
  "study.explanation": "[\"Головна думка: das Mal означає один раз як подія або випадок.\",\"Часто використовується з числами: ein Mal, zwei Mal, drei Mal.\",\"З порядковим номером: das erste Mal, das zweite Mal.\",\"Не розмовляйте з розмовною часткою mal (Komm mal her!) - це інше значення.\"]",
  "study.examples": "[{\"de\":\"Das erste Mal war schwer.\",\"lv\":\"перший час було важко.\"},{\"de\":\"Ich war schon zwei Mal in Berlin.\",\"lv\":\"Я вже був у Берліні двічі.\"},{\"de\":\"Ein Mal reicht.\",\"lv\":\"одного разу достатньо.\"},{\"de\":\"Noch ein Mal, bitte!\",\"lv\":\"ще раз будь ласка!\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: das Mal = раз (іменник); mal без артикля = розмовна частка.\"}",
  "study.important": "[\"das Mal / die Male — іменник зі ст.\",\"ein Mal, zwei Mal - відлік разів.\",\"mal без артикля (Komm mal her!) не те саме, що das Mal.\"]"
}
```

---

## Finding 6

**Audit ID:** `LRB103-0006`
**Finding Stable ID:** `g2/a1/uk|noch mal|idx:701|lv and study target-language fields|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `noch mal|idx:701`
**Field / path:** `lv and study target-language fields`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** vēlreiz
**DE reference (read-only):** noch mal
**CURRENT (captured scope):** {"lv":"знову","study target-language fields":null}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"ще раз","study.translation":"ще раз","study.explanation":"[\"Головна думка: noch mal означає ще раз - повторити дію або попросити про повторення.\"]","study.examples":"[{\"de\":\"Noch mal, bitte.\",\"lv\":\"Ще раз, будь ласка.\"},{\"de\":\"Noch mal, bitte.\",\"lv\":\"Ще раз, будь ласка.\"},{\"de\":\"Sag das noch mal.\",\"lv\":\"Скажи це ще раз.\"}]","study.tip":"[\"noch mal уживають, коли потрібно повторити слова або дію.\",\"У проханнях Noch mal, bitte означає «Ще раз, будь ласка».\"]","study.important":"[\"noch mal виражає повторення.\",\"Переклад залежно від речення: ще раз або повторно.\"]","study.sectionAccents":{"explanation":{"purple":["ще раз","повторити"]},"examples":[{"de":{"yellow":["Noch mal"]},"lv":{"purple":["Ще раз"]}},{"de":{"yellow":["Noch mal"]},"lv":{"purple":["Ще раз"]}},{"de":{"yellow":["noch mal"]},"lv":{"purple":["Скажи","ще раз"]}}],"tip":[{"purple":["повторити"]},{"purple":["Ще раз"]}],"important":[{"purple":["повторення"]},{"purple":["повторно"]}]}}
**Note:** GPT OWNER approved override: Headword is semantically less precise than the source; duplicated tip and missing highlights.

### Gala card (approved NEW composite)

```json
{
  "lv": "ще раз",
  "study.translation": "ще раз",
  "study.explanation": [
    "Головна думка: noch mal означає ще раз - повторити дію або попросити про повторення."
  ],
  "study.examples": [
    {
      "de": "Noch mal, bitte.",
      "lv": "Ще раз, будь ласка."
    },
    {
      "de": "Noch mal, bitte.",
      "lv": "Ще раз, будь ласка."
    },
    {
      "de": "Sag das noch mal.",
      "lv": "Скажи це ще раз."
    }
  ],
  "study.tip": [
    "noch mal уживають, коли потрібно повторити слова або дію.",
    "У проханнях Noch mal, bitte означає «Ще раз, будь ласка»."
  ],
  "study.important": [
    "noch mal виражає повторення.",
    "Переклад залежно від речення: ще раз або повторно."
  ],
  "study.sectionAccents": {
    "explanation": {
      "purple": [
        "ще раз",
        "повторити"
      ]
    },
    "examples": [
      {
        "de": {
          "yellow": [
            "Noch mal"
          ]
        },
        "lv": {
          "purple": [
            "Ще раз"
          ]
        }
      },
      {
        "de": {
          "yellow": [
            "Noch mal"
          ]
        },
        "lv": {
          "purple": [
            "Ще раз"
          ]
        }
      },
      {
        "de": {
          "yellow": [
            "noch mal"
          ]
        },
        "lv": {
          "purple": [
            "Скажи",
            "ще раз"
          ]
        }
      }
    ],
    "tip": [
      {
        "purple": [
          "повторити"
        ]
      },
      {
        "purple": [
          "Ще раз"
        ]
      }
    ],
    "important": [
      {
        "purple": [
          "повторення"
        ]
      },
      {
        "purple": [
          "повторно"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "знову",
  "study target-language fields": null
}
```

---

## Finding 7

**Audit ID:** `LRB103-0007`
**Finding Stable ID:** `g2/a1/uk|probieren|idx:482|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `probieren|idx:482`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** izmēģināt • nogaršot
**DE reference (read-only):** probieren
**CURRENT (captured scope):** {"lv":"пробувати • смакувати","study.translation":"пробувати • смакувати","study.explanation":"[\"Головна думка: probieren означає спробувати або скуштувати.\",\"Говорячи про їжу чи напої, probieren часто означає смак.\",\"Коли мова йде про дію, метод або предмет, probieren означає спробувати.\",\"Це не те саме, що prüfen, що означає перевірку більш ретельно.\"]","study.examples":"[{\"de\":\"Probier mal die Suppe!\",\"lv\":\"скуштуйте суп!\"},{\"de\":\"Ich möchte den Kuchen probieren.\",\"lv\":\"Я хочу скуштувати торт.\"},{\"de\":\"Wir probieren eine neue Methode.\",\"lv\":\"ми пробуємо новий метод.\"},{\"de\":\"Kann ich die Jacke anprobieren?\",\"lv\":\"можна приміряти куртку\"}]","study.comparison":"[{\"word\":\"probieren\",\"meaning\":\"спробувати / скуштувати\",\"example\":\"Probier mal die Suppe!\"},{\"word\":\"versuchen\",\"meaning\":\"спробувати\",\"example\":\"Ich versuche es.\"},{\"word\":\"prüfen\",\"meaning\":\"перевірити\",\"example\":\"Ich prüfe die Rechnung.\"},{\"word\":\"anprobieren\",\"meaning\":\"приміряти\",\"example\":\"Ich probiere die Jacke an.\"}]","study.tip":"{\"text\":\"Пам'ятай: їжа → probieren = за смаком.\"}","study.important":"[\"probieren не є ключовим словом для офіційного тестування.\",\"Зазвичай prüfen перевіряє документ або рахунок-фактуру.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"пробувати • куштувати","study.translation":"пробувати • куштувати","study.explanation":"[\"Головна думка: probieren означає пробувати або куштувати.\",\"Коли йдеться про їжу чи напої, probieren часто означає куштувати.\",\"Коли йдеться про дію, спосіб або предмет, probieren означає пробувати чи випробовувати.\",\"Це не те саме, що prüfen, яке означає ретельно перевіряти.\"]","study.examples":"[{\"de\":\"Probier mal die Suppe!\",\"lv\":\"Скуштуй суп!\"},{\"de\":\"Ich möchte den Kuchen probieren.\",\"lv\":\"Я хочу скуштувати пиріг.\"},{\"de\":\"Wir probieren eine neue Methode.\",\"lv\":\"Ми випробовуємо новий метод.\"},{\"de\":\"Kann ich die Jacke anprobieren?\",\"lv\":\"Чи можу я приміряти куртку?\"}]","study.comparison":"[{\"word\":\"probieren\",\"meaning\":\"пробувати / куштувати\",\"example\":\"Probier mal die Suppe!\"},{\"word\":\"versuchen\",\"meaning\":\"намагатися\",\"example\":\"Ich versuche es.\"},{\"word\":\"prüfen\",\"meaning\":\"перевіряти\",\"example\":\"Ich prüfe die Rechnung.\"},{\"word\":\"anprobieren\",\"meaning\":\"приміряти\",\"example\":\"Ich probiere die Jacke an.\"}]","study.tip":"{\"text\":\"Запам'ятай: якщо йдеться про їжу, probieren часто означає куштувати.\"}","study.important":"[\"probieren не є основним словом для офіційної перевірки.\",\"Документ або рахунок зазвичай перевіряють дієсловом prüfen.\"]","study.sectionAccents":{"explanation":{"blue":["probieren","prüfen"],"purple":["пробувати","куштувати","випробовувати","перевіряти"]},"examples":[{"de":{"blue":["Probier"],"yellow":["Suppe"]},"lv":{"purple":["Скуштуй","суп"]}},{"de":{"blue":["probieren"],"yellow":["Kuchen"]},"lv":{"purple":["скуштувати","пиріг"]}},{"de":{"blue":["probieren"],"yellow":["Methode"]},"lv":{"purple":["випробовуємо","метод"]}},{"de":{"green":["anprobieren"],"yellow":["Jacke"]},"lv":{"purple":["приміряти","куртку"]}}],"comparison":[{"word":{"green":["probieren"]},"meaning":{"purple":["пробувати","куштувати"]},"example":{"blue":["Probier"]}},{"word":{"green":["versuchen"]},"meaning":{"purple":["намагатися"]},"example":{"green":["versuche"]}},{"word":{"green":["prüfen"]},"meaning":{"purple":["перевіряти"]},"example":{"red":["prüfe"]}},{"word":{"green":["anprobieren"]},"meaning":{"purple":["приміряти"]},"example":{"yellow":["probiere","an"]}}],"tip":{"left":{"blue":["probieren"],"purple":["їжу","куштувати"]}},"important":[{"blue":["probieren"],"purple":["офіційної перевірки"]},{"red":["prüfen"],"purple":["перевіряють"]}]}}
**Note:** GPT OWNER approved override: Смакувати means savor, not taste/sample; several phrases are unnatural or lose person alignment.

### Gala card (approved NEW composite)

```json
{
  "lv": "пробувати • куштувати",
  "study.translation": "пробувати • куштувати",
  "study.explanation": [
    "Головна думка: probieren означає пробувати або куштувати.",
    "Коли йдеться про їжу чи напої, probieren часто означає куштувати.",
    "Коли йдеться про дію, спосіб або предмет, probieren означає пробувати чи випробовувати.",
    "Це не те саме, що prüfen, яке означає ретельно перевіряти."
  ],
  "study.examples": [
    {
      "de": "Probier mal die Suppe!",
      "lv": "Скуштуй суп!"
    },
    {
      "de": "Ich möchte den Kuchen probieren.",
      "lv": "Я хочу скуштувати пиріг."
    },
    {
      "de": "Wir probieren eine neue Methode.",
      "lv": "Ми випробовуємо новий метод."
    },
    {
      "de": "Kann ich die Jacke anprobieren?",
      "lv": "Чи можу я приміряти куртку?"
    }
  ],
  "study.comparison": [
    {
      "word": "probieren",
      "meaning": "пробувати / куштувати",
      "example": "Probier mal die Suppe!"
    },
    {
      "word": "versuchen",
      "meaning": "намагатися",
      "example": "Ich versuche es."
    },
    {
      "word": "prüfen",
      "meaning": "перевіряти",
      "example": "Ich prüfe die Rechnung."
    },
    {
      "word": "anprobieren",
      "meaning": "приміряти",
      "example": "Ich probiere die Jacke an."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: якщо йдеться про їжу, probieren часто означає куштувати."
  },
  "study.important": [
    "probieren не є основним словом для офіційної перевірки.",
    "Документ або рахунок зазвичай перевіряють дієсловом prüfen."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "probieren",
        "prüfen"
      ],
      "purple": [
        "пробувати",
        "куштувати",
        "випробовувати",
        "перевіряти"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "Probier"
          ],
          "yellow": [
            "Suppe"
          ]
        },
        "lv": {
          "purple": [
            "Скуштуй",
            "суп"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "probieren"
          ],
          "yellow": [
            "Kuchen"
          ]
        },
        "lv": {
          "purple": [
            "скуштувати",
            "пиріг"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "probieren"
          ],
          "yellow": [
            "Methode"
          ]
        },
        "lv": {
          "purple": [
            "випробовуємо",
            "метод"
          ]
        }
      },
      {
        "de": {
          "green": [
            "anprobieren"
          ],
          "yellow": [
            "Jacke"
          ]
        },
        "lv": {
          "purple": [
            "приміряти",
            "куртку"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "probieren"
          ]
        },
        "meaning": {
          "purple": [
            "пробувати",
            "куштувати"
          ]
        },
        "example": {
          "blue": [
            "Probier"
          ]
        }
      },
      {
        "word": {
          "green": [
            "versuchen"
          ]
        },
        "meaning": {
          "purple": [
            "намагатися"
          ]
        },
        "example": {
          "green": [
            "versuche"
          ]
        }
      },
      {
        "word": {
          "green": [
            "prüfen"
          ]
        },
        "meaning": {
          "purple": [
            "перевіряти"
          ]
        },
        "example": {
          "red": [
            "prüfe"
          ]
        }
      },
      {
        "word": {
          "green": [
            "anprobieren"
          ]
        },
        "meaning": {
          "purple": [
            "приміряти"
          ]
        },
        "example": {
          "yellow": [
            "probiere",
            "an"
          ]
        }
      }
    ],
    "tip": {
      "left": {
        "blue": [
          "probieren"
        ],
        "purple": [
          "їжу",
          "куштувати"
        ]
      }
    },
    "important": [
      {
        "blue": [
          "probieren"
        ],
        "purple": [
          "офіційної перевірки"
        ]
      },
      {
        "red": [
          "prüfen"
        ],
        "purple": [
          "перевіряють"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "пробувати • смакувати",
  "study.translation": "пробувати • смакувати",
  "study.explanation": "[\"Головна думка: probieren означає спробувати або скуштувати.\",\"Говорячи про їжу чи напої, probieren часто означає смак.\",\"Коли мова йде про дію, метод або предмет, probieren означає спробувати.\",\"Це не те саме, що prüfen, що означає перевірку більш ретельно.\"]",
  "study.examples": "[{\"de\":\"Probier mal die Suppe!\",\"lv\":\"скуштуйте суп!\"},{\"de\":\"Ich möchte den Kuchen probieren.\",\"lv\":\"Я хочу скуштувати торт.\"},{\"de\":\"Wir probieren eine neue Methode.\",\"lv\":\"ми пробуємо новий метод.\"},{\"de\":\"Kann ich die Jacke anprobieren?\",\"lv\":\"можна приміряти куртку\"}]",
  "study.comparison": "[{\"word\":\"probieren\",\"meaning\":\"спробувати / скуштувати\",\"example\":\"Probier mal die Suppe!\"},{\"word\":\"versuchen\",\"meaning\":\"спробувати\",\"example\":\"Ich versuche es.\"},{\"word\":\"prüfen\",\"meaning\":\"перевірити\",\"example\":\"Ich prüfe die Rechnung.\"},{\"word\":\"anprobieren\",\"meaning\":\"приміряти\",\"example\":\"Ich probiere die Jacke an.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: їжа → probieren = за смаком.\"}",
  "study.important": "[\"probieren не є ключовим словом для офіційного тестування.\",\"Зазвичай prüfen перевіряє документ або рахунок-фактуру.\"]"
}
```

---

## Finding 8

**Audit ID:** `LRB103-0008`
**Finding Stable ID:** `g2/a1/uk|Reis|idx:496|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `Reis|idx:496`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** rīsi
**DE reference (read-only):** Reis
**CURRENT (captured scope):** {"lv":"рис","study.translation":"рис","study.explanation":"У німецькій мові слово \"der Reis\" використовується тільки в в однині, тому дієслово має бути в однині в реченні (наприклад, \"ist\", а не \"sind\"). Проте латиші часто кажуть «рис».","study.examples":"[{\"de\":\"Der Reis ist fertig.\",\"lv\":\"рис готовий.\"},{\"de\":\"Ich esse Reis.\",\"lv\":\"я їм рис\"},{\"de\":\"Kochst du Reis?\",\"lv\":\"ти вариш рис?\"},{\"de\":\"Der Reis schmeckt gut.\",\"lv\":\"рис смачний.\"}]","study.tip":"{\"text\":\"Пам'ятай: der Reis - це однина німецькою мовою, але зазвичай рис латиською.\"}","study.important":"[\"der Reis - лише німецькою мовою однина (Der Reis ist..., nicht *sind).\",\"У латиському перекладі часто вживається множина: рис готовий.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"рис","study.translation":"рис","study.explanation":"У німецькій мові der Reis є незлічуваним іменником в однині, тому присудок також стоїть в однині: Der Reis ist fertig, а не sind. Українське слово «рис» так само зазвичай уживають в однині.","study.examples":"[{\"de\":\"Der Reis ist fertig.\",\"lv\":\"Рис готовий.\"},{\"de\":\"Ich esse Reis.\",\"lv\":\"Я їм рис.\"},{\"de\":\"Kochst du Reis?\",\"lv\":\"Ти вариш рис?\"},{\"de\":\"Der Reis schmeckt gut.\",\"lv\":\"Рис смачний.\"}]","study.tip":"{\"text\":\"Запам'ятай: der Reis у німецькій мові вживають в однині.\"}","study.important":"[\"der Reis - незлічуваний іменник в однині.\",\"Правильно: Der Reis ist fertig.\"]","study.sectionAccents":{"explanation":{"blue":["der Reis","ist"],"red":["sind"],"purple":["незлічуваним іменником","однині","рис"]},"examples":[{"de":{"blue":["Reis","ist"]},"lv":{"purple":["Рис","готовий"]}},{"de":{"blue":["Reis"]},"lv":{"purple":["їм","рис"]}},{"de":{},"lv":{}},{"de":{},"lv":{}}],"tip":{"blue":["der Reis"],"purple":["однині"]},"important":[{"purple":["однині","незлічуваний іменник"]},{}]}}
**Note:** GPT OWNER approved override: Latvian-language residue and duplicated preposition; Ukrainian singular behavior was described incorrectly.

### Gala card (approved NEW composite)

```json
{
  "lv": "рис",
  "study.translation": "рис",
  "study.explanation": "У німецькій мові der Reis є незлічуваним іменником в однині, тому присудок також стоїть в однині: Der Reis ist fertig, а не sind. Українське слово «рис» так само зазвичай уживають в однині.",
  "study.examples": [
    {
      "de": "Der Reis ist fertig.",
      "lv": "Рис готовий."
    },
    {
      "de": "Ich esse Reis.",
      "lv": "Я їм рис."
    },
    {
      "de": "Kochst du Reis?",
      "lv": "Ти вариш рис?"
    },
    {
      "de": "Der Reis schmeckt gut.",
      "lv": "Рис смачний."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: der Reis у німецькій мові вживають в однині."
  },
  "study.important": [
    "der Reis - незлічуваний іменник в однині.",
    "Правильно: Der Reis ist fertig."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "der Reis",
        "ist"
      ],
      "red": [
        "sind"
      ],
      "purple": [
        "незлічуваним іменником",
        "однині",
        "рис"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "Reis",
            "ist"
          ]
        },
        "lv": {
          "purple": [
            "Рис",
            "готовий"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Reis"
          ]
        },
        "lv": {
          "purple": [
            "їм",
            "рис"
          ]
        }
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
    "tip": {
      "blue": [
        "der Reis"
      ],
      "purple": [
        "однині"
      ]
    },
    "important": [
      {
        "purple": [
          "однині",
          "незлічуваний іменник"
        ]
      },
      {}
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "рис",
  "study.translation": "рис",
  "study.explanation": "У німецькій мові слово \"der Reis\" використовується тільки в в однині, тому дієслово має бути в однині в реченні (наприклад, \"ist\", а не \"sind\"). Проте латиші часто кажуть «рис».",
  "study.examples": "[{\"de\":\"Der Reis ist fertig.\",\"lv\":\"рис готовий.\"},{\"de\":\"Ich esse Reis.\",\"lv\":\"я їм рис\"},{\"de\":\"Kochst du Reis?\",\"lv\":\"ти вариш рис?\"},{\"de\":\"Der Reis schmeckt gut.\",\"lv\":\"рис смачний.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: der Reis - це однина німецькою мовою, але зазвичай рис латиською.\"}",
  "study.important": "[\"der Reis - лише німецькою мовою однина (Der Reis ist..., nicht *sind).\",\"У латиському перекладі часто вживається множина: рис готовий.\"]"
}
```

---

## Finding 9

**Audit ID:** `LRB103-0009`
**Finding Stable ID:** `g2/a1/uk|sagen|idx:505|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0003`
**Lang:** uk
**Card:** `sagen|idx:505`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** teikt
**DE reference (read-only):** sagen
**CURRENT (captured scope):** {"lv":"сказати","study.translation":"сказати","study.explanation":"[\"Головна думка: передати конкретну думку, слово чи речення.\",\"sagen в основному означає: висловити певну думку.\",\"Часто описує: слова/речення.\",\"sagen використовується для певного вимовленого тексту.\"]","study.examples":"[{\"de\":\"Was hast du gesagt?\",\"lv\":\"що ти сказав\"}]","study.comparison":"[{\"word\":\"sagen\",\"meaning\":\"розповісти (конкретний текст)\",\"example\":\"Was hast du gesagt? – що ти сказав\"},{\"word\":\"sprechen\",\"meaning\":\"говорити (мова, говорити)\",\"example\":\"Ich spreche Deutsch. – Я розмовляю німецькою.\"}]","study.tip":"[\"sagen = сказати\",\"Використовується в sagen, коли контекст відповідає цьому значенню.\"]","study.important":"[\"sagen = розповідати.\",\"Для передачі певної думки, слова чи речення.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"казати","study.translation":"казати","study.explanation":"[\"Головна думка: sagen означає казати або сказати конкретну думку, слово чи речення.\",\"sagen вживають, коли важливий зміст конкретно сказаних слів.\",\"Це дієслово часто вводить пряму або непряму мову.\",\"На відміну від sprechen, sagen не описує сам процес розмови або володіння мовою.\"]","study.examples":"[{\"de\":\"Was hast du gesagt?\",\"lv\":\"Що ти сказав / сказала?\"}]","study.comparison":"[{\"word\":\"sagen\",\"meaning\":\"казати / сказати конкретні слова\",\"example\":\"Was hast du gesagt? – Що ти сказав / сказала?\"},{\"word\":\"sprechen\",\"meaning\":\"говорити / розмовляти\",\"example\":\"Ich spreche Deutsch. – Я розмовляю німецькою.\"}]","study.tip":"[\"sagen = казати або сказати.\",\"Вживай sagen, коли йдеться про конкретне повідомлення.\"]","study.important":"[\"sagen передає конкретні слова або думку.\",\"sprechen описує розмову, процес мовлення або володіння мовою.\"]","study.sectionAccents":{"explanation":{"blue":["sagen"],"purple":["казати","сказати","конкретно сказаних слів","процес розмови"]},"examples":[{"de":{},"lv":{"purple":["Що","сказав","сказала"]}}],"comparison":[{"word":{},"meaning":{"purple":["казати","сказати"]},"example":{}},{"word":{},"meaning":{"purple":["говорити","розмовляти"]},"example":{}}],"tip":[{},{"purple":["конкретне повідомлення"]}],"important":[{"blue":["sagen"],"purple":["конкретні слова"]},{"purple":["розмову"]}]}}
**Note:** GPT OWNER approved override: Sagen was confused with erzählen; contrast with sprechen was inaccurate.

### Gala card (approved NEW composite)

```json
{
  "lv": "казати",
  "study.translation": "казати",
  "study.explanation": [
    "Головна думка: sagen означає казати або сказати конкретну думку, слово чи речення.",
    "sagen вживають, коли важливий зміст конкретно сказаних слів.",
    "Це дієслово часто вводить пряму або непряму мову.",
    "На відміну від sprechen, sagen не описує сам процес розмови або володіння мовою."
  ],
  "study.examples": [
    {
      "de": "Was hast du gesagt?",
      "lv": "Що ти сказав / сказала?"
    }
  ],
  "study.comparison": [
    {
      "word": "sagen",
      "meaning": "казати / сказати конкретні слова",
      "example": "Was hast du gesagt? – Що ти сказав / сказала?"
    },
    {
      "word": "sprechen",
      "meaning": "говорити / розмовляти",
      "example": "Ich spreche Deutsch. – Я розмовляю німецькою."
    }
  ],
  "study.tip": [
    "sagen = казати або сказати.",
    "Вживай sagen, коли йдеться про конкретне повідомлення."
  ],
  "study.important": [
    "sagen передає конкретні слова або думку.",
    "sprechen описує розмову, процес мовлення або володіння мовою."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "sagen"
      ],
      "purple": [
        "казати",
        "сказати",
        "конкретно сказаних слів",
        "процес розмови"
      ]
    },
    "examples": [
      {
        "de": {},
        "lv": {
          "purple": [
            "Що",
            "сказав",
            "сказала"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {},
        "meaning": {
          "purple": [
            "казати",
            "сказати"
          ]
        },
        "example": {}
      },
      {
        "word": {},
        "meaning": {
          "purple": [
            "говорити",
            "розмовляти"
          ]
        },
        "example": {}
      }
    ],
    "tip": [
      {},
      {
        "purple": [
          "конкретне повідомлення"
        ]
      }
    ],
    "important": [
      {
        "blue": [
          "sagen"
        ],
        "purple": [
          "конкретні слова"
        ]
      },
      {
        "purple": [
          "розмову"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "сказати",
  "study.translation": "сказати",
  "study.explanation": "[\"Головна думка: передати конкретну думку, слово чи речення.\",\"sagen в основному означає: висловити певну думку.\",\"Часто описує: слова/речення.\",\"sagen використовується для певного вимовленого тексту.\"]",
  "study.examples": "[{\"de\":\"Was hast du gesagt?\",\"lv\":\"що ти сказав\"}]",
  "study.comparison": "[{\"word\":\"sagen\",\"meaning\":\"розповісти (конкретний текст)\",\"example\":\"Was hast du gesagt? – що ти сказав\"},{\"word\":\"sprechen\",\"meaning\":\"говорити (мова, говорити)\",\"example\":\"Ich spreche Deutsch. – Я розмовляю німецькою.\"}]",
  "study.tip": "[\"sagen = сказати\",\"Використовується в sagen, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"sagen = розповідати.\",\"Для передачі певної думки, слова чи речення.\"]"
}
```

---

## Finding 10

**Audit ID:** `LRB103-0010`
**Finding Stable ID:** `g2/a1/uk|schauen|idx:510|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `schauen|idx:510`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** skatīties
**DE reference (read-only):** schauen
**CURRENT (captured scope):** {"lv":"дивитися","study.translation":"дивитися","study.explanation":"[\"Головна думка: активно дивитися або підглядати.\",\"schauen в основному означає: активно спостерігати.\",\"Часто описує: дію.\",\"schauen означає активно спостерігати.\"]","study.examples":"[{\"de\":\"Ich schaue fern.\",\"lv\":\"Я дивлюсь телевізор.\"},{\"de\":\"Wir schauen aus dem Fenster.\",\"lv\":\"ми дивимося у вікно.\"},{\"de\":\"Ich schaue fern.\",\"lv\":\"я дивлюся телевізор\"}]","study.comparison":"[{\"word\":\"schauen\",\"meaning\":\"дивитися (активно)\",\"example\":\"Ich schaue aus dem Fenster. – Я дивлюся у вікно.\"},{\"word\":\"sehen\",\"meaning\":\"бачити (без наміру)\",\"example\":\"Ich sehe dich. – я бачу тебе\"}]","study.tip":"[\"schauen = дивитися\",\"Використовується в schauen, коли контекст відповідає цьому значенню.\"]","study.important":"[\"schauen = дивитися.\",\"Активно дивіться або дивіться.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"дивитися","study.translation":"дивитися","study.explanation":"[\"Головна думка: schauen означає дивитися або поглянути на щось.\",\"schauen описує свідому дію: людина спрямовує погляд на предмет або подію.\",\"У розмовній німецькій це дуже поширене слово.\",\"На відміну від sehen, schauen зазвичай підкреслює активне спостереження.\"]","study.examples":"[{\"de\":\"Ich schaue fern.\",\"lv\":\"Я дивлюся телевізор.\"},{\"de\":\"Wir schauen aus dem Fenster.\",\"lv\":\"Ми дивимося у вікно.\"},{\"de\":\"Ich schaue fern.\",\"lv\":\"Я дивлюся телевізор.\"}]","study.comparison":"[{\"word\":\"schauen\",\"meaning\":\"дивитися свідомо\",\"example\":\"Ich schaue aus dem Fenster. – Я дивлюся у вікно.\"},{\"word\":\"sehen\",\"meaning\":\"бачити\",\"example\":\"Ich sehe dich. – Я бачу тебе.\"}]","study.tip":"[\"schauen = дивитися.\",\"Вживай schauen, коли людина свідомо спрямовує погляд.\"]","study.important":"[\"schauen описує активне спостереження.\",\"sehen часто означає просто бачити.\"]","study.sectionAccents":{"explanation":{"green":["schauen"],"purple":["дивитися","поглянути","свідому дію","активне спостереження"]},"examples":[{"de":{"green":["schaue"]},"lv":{"purple":["дивлюся"]}},{"de":{"green":["schauen"]},"lv":{"purple":["дивимося"]}},{"de":{"green":["schaue"]},"lv":{"purple":["дивлюся"]}}],"comparison":[{"word":{},"meaning":{"purple":["дивитися свідомо"]},"example":{}},{"word":{},"meaning":{"purple":["бачити"]},"example":{}}],"tip":[{"purple":["дивитися"]},{"purple":["свідомо спрямовує погляд"]}],"important":[{"green":["schauen"]},{"purple":["бачити"]}]}}
**Note:** GPT OWNER approved override: Підглядати is a wrong extra meaning; text is repetitive and punctuation is incomplete.

### Gala card (approved NEW composite)

```json
{
  "lv": "дивитися",
  "study.translation": "дивитися",
  "study.explanation": [
    "Головна думка: schauen означає дивитися або поглянути на щось.",
    "schauen описує свідому дію: людина спрямовує погляд на предмет або подію.",
    "У розмовній німецькій це дуже поширене слово.",
    "На відміну від sehen, schauen зазвичай підкреслює активне спостереження."
  ],
  "study.examples": [
    {
      "de": "Ich schaue fern.",
      "lv": "Я дивлюся телевізор."
    },
    {
      "de": "Wir schauen aus dem Fenster.",
      "lv": "Ми дивимося у вікно."
    },
    {
      "de": "Ich schaue fern.",
      "lv": "Я дивлюся телевізор."
    }
  ],
  "study.comparison": [
    {
      "word": "schauen",
      "meaning": "дивитися свідомо",
      "example": "Ich schaue aus dem Fenster. – Я дивлюся у вікно."
    },
    {
      "word": "sehen",
      "meaning": "бачити",
      "example": "Ich sehe dich. – Я бачу тебе."
    }
  ],
  "study.tip": [
    "schauen = дивитися.",
    "Вживай schauen, коли людина свідомо спрямовує погляд."
  ],
  "study.important": [
    "schauen описує активне спостереження.",
    "sehen часто означає просто бачити."
  ],
  "study.sectionAccents": {
    "explanation": {
      "green": [
        "schauen"
      ],
      "purple": [
        "дивитися",
        "поглянути",
        "свідому дію",
        "активне спостереження"
      ]
    },
    "examples": [
      {
        "de": {
          "green": [
            "schaue"
          ]
        },
        "lv": {
          "purple": [
            "дивлюся"
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
            "дивимося"
          ]
        }
      },
      {
        "de": {
          "green": [
            "schaue"
          ]
        },
        "lv": {
          "purple": [
            "дивлюся"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {},
        "meaning": {
          "purple": [
            "дивитися свідомо"
          ]
        },
        "example": {}
      },
      {
        "word": {},
        "meaning": {
          "purple": [
            "бачити"
          ]
        },
        "example": {}
      }
    ],
    "tip": [
      {
        "purple": [
          "дивитися"
        ]
      },
      {
        "purple": [
          "свідомо спрямовує погляд"
        ]
      }
    ],
    "important": [
      {
        "green": [
          "schauen"
        ]
      },
      {
        "purple": [
          "бачити"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "дивитися",
  "study.translation": "дивитися",
  "study.explanation": "[\"Головна думка: активно дивитися або підглядати.\",\"schauen в основному означає: активно спостерігати.\",\"Часто описує: дію.\",\"schauen означає активно спостерігати.\"]",
  "study.examples": "[{\"de\":\"Ich schaue fern.\",\"lv\":\"Я дивлюсь телевізор.\"},{\"de\":\"Wir schauen aus dem Fenster.\",\"lv\":\"ми дивимося у вікно.\"},{\"de\":\"Ich schaue fern.\",\"lv\":\"я дивлюся телевізор\"}]",
  "study.comparison": "[{\"word\":\"schauen\",\"meaning\":\"дивитися (активно)\",\"example\":\"Ich schaue aus dem Fenster. – Я дивлюся у вікно.\"},{\"word\":\"sehen\",\"meaning\":\"бачити (без наміру)\",\"example\":\"Ich sehe dich. – я бачу тебе\"}]",
  "study.tip": "[\"schauen = дивитися\",\"Використовується в schauen, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"schauen = дивитися.\",\"Активно дивіться або дивіться.\"]"
}
```

---

## Finding 11

**Audit ID:** `LRB103-0011`
**Finding Stable ID:** `g2/a1/uk|schon|idx:521|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `schon|idx:521`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** jau
**DE reference (read-only):** schon
**CURRENT (captured scope):** {"lv":"вже","study.translation":"вже","study.explanation":"[\"Головна думка: щось уже відбулося або вже діє.\",\"schon в основному означає: щось уже сталося або діє.\",\"Часто описує: факт, що стався, або існуючий стан.\",\"schon означає вже: щось уже сталося або вже діє.\"]","study.examples":"[{\"de\":\"Ich bin schon zu Hause.\",\"lv\":\"я вже вдома\"}]","study.tip":"[\"Щось уже сталося або вже діє.\",\"Використовується в schon, коли контекст відповідає цьому значенню.\"]","study.important":"[\"schon = вже.\",\"Щось уже сталося або вже діє.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"вже","study.translation":"вже","study.explanation":"[\"Головна думка: schon часто означає, що щось уже сталося або вже є дійсним.\",\"Слово показує, що дія чи стан настали раніше, ніж тепер або ніж очікувалося.\",\"У реченні schon зазвичай стосується часу настання дії або стану.\",\"Найчастіший переклад на рівні A1 - вже.\"]","study.examples":"[{\"de\":\"Ich bin schon zu Hause.\",\"lv\":\"Я вже вдома.\"}]","study.tip":"[\"schon = вже.\",\"Вживай schon, коли дія або стан уже настали.\"]","study.important":"[\"schon часто вказує на вже завершену дію або наявний стан.\",\"У цьому значенні schon не означає «ще».\"]","study.sectionAccents":{"explanation":{"blue":["schon"],"purple":["вже","раніше","часу"]},"examples":[{"de":{"blue":["schon"]},"lv":{"purple":["вже","вдома"]}}],"tip":[{"purple":["вже"]},{"purple":["настали"]}],"important":[{"blue":["schon"],"purple":["вже","завершену дію","наявний стан"]},{"purple":["ще"]}]}}
**Note:** GPT OWNER approved override: Meaning is correct but the card is mechanically repetitive and the example lacks normal sentence punctuation.

### Gala card (approved NEW composite)

```json
{
  "lv": "вже",
  "study.translation": "вже",
  "study.explanation": [
    "Головна думка: schon часто означає, що щось уже сталося або вже є дійсним.",
    "Слово показує, що дія чи стан настали раніше, ніж тепер або ніж очікувалося.",
    "У реченні schon зазвичай стосується часу настання дії або стану.",
    "Найчастіший переклад на рівні A1 - вже."
  ],
  "study.examples": [
    {
      "de": "Ich bin schon zu Hause.",
      "lv": "Я вже вдома."
    }
  ],
  "study.tip": [
    "schon = вже.",
    "Вживай schon, коли дія або стан уже настали."
  ],
  "study.important": [
    "schon часто вказує на вже завершену дію або наявний стан.",
    "У цьому значенні schon не означає «ще»."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "schon"
      ],
      "purple": [
        "вже",
        "раніше",
        "часу"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "schon"
          ]
        },
        "lv": {
          "purple": [
            "вже",
            "вдома"
          ]
        }
      }
    ],
    "tip": [
      {
        "purple": [
          "вже"
        ]
      },
      {
        "purple": [
          "настали"
        ]
      }
    ],
    "important": [
      {
        "blue": [
          "schon"
        ],
        "purple": [
          "вже",
          "завершену дію",
          "наявний стан"
        ]
      },
      {
        "purple": [
          "ще"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "вже",
  "study.translation": "вже",
  "study.explanation": "[\"Головна думка: щось уже відбулося або вже діє.\",\"schon в основному означає: щось уже сталося або діє.\",\"Часто описує: факт, що стався, або існуючий стан.\",\"schon означає вже: щось уже сталося або вже діє.\"]",
  "study.examples": "[{\"de\":\"Ich bin schon zu Hause.\",\"lv\":\"я вже вдома\"}]",
  "study.tip": "[\"Щось уже сталося або вже діє.\",\"Використовується в schon, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"schon = вже.\",\"Щось уже сталося або вже діє.\"]"
}
```

---

## Finding 12

**Audit ID:** `LRB103-0012`
**Finding Stable ID:** `g2/a1/uk|sprechen|idx:5|lv, study.translation, study.explanation, study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `sprechen|idx:5`
**Field / path:** `lv, study.translation, study.explanation, study.examples`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** runāt
**DE reference (read-only):** sprechen
**CURRENT (captured scope):** {"lv":"говорити","study.translation":"говорити","study.explanation":"[\"Головна думка: говорити, розмовляти або використовувати мову.\",\"sprechen в основному означає: говорити або розмовляти.\",\"Часто характеризується: мова/розмова.\",\"sprechen описує розмову або використання мови.\"]","study.examples":"[{\"de\":\"Ich spreche Deutsch.\",\"lv\":\"Я розмовляю німецькою.\"},{\"de\":\"Wir sprechen über die Arbeit.\",\"lv\":\"ми говоримо про роботу.\"},{\"de\":\"Sie spricht mit ihrer Lehrerin.\",\"lv\":\"я розмовляю німецькою\"}]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"говорити","study.translation":"говорити","study.explanation":"[\"Головна думка: sprechen означає говорити, розмовляти або володіти мовою.\",\"sprechen описує процес мовлення чи розмову.\",\"Його також уживають, коли називають мову, якою хтось володіє.\",\"На відміну від sagen, sprechen не зосереджується на конкретно сказаних словах.\"]","study.examples":"[{\"de\":\"Ich spreche Deutsch.\",\"lv\":\"Я розмовляю німецькою.\"},{\"de\":\"Wir sprechen über die Arbeit.\",\"lv\":\"Ми говоримо про роботу.\"},{\"de\":\"Sie spricht mit ihrer Lehrerin.\",\"lv\":\"Вона розмовляє зі своєю вчителькою.\"}]","study.comparison":"[{\"word\":\"sprechen\",\"meaning\":\"говорити / розмовляти\",\"example\":\"Wir sprechen über die Arbeit. – Ми говоримо про роботу.\"},{\"word\":\"sagen\",\"meaning\":\"казати / сказати конкретні слова\",\"example\":\"Sag mir die Wahrheit. – Скажи мені правду.\"}]","study.tip":"[\"sprechen = говорити або розмовляти.\",\"Вживай sprechen для процесу розмови або назви мови.\"]","study.important":"[\"sprechen описує мовлення, розмову або володіння мовою.\",\"sagen передає конкретно сказані слова.\"]","study.sectionAccents":{"explanation":{"green":["sprechen"],"purple":["говорити","розмовляти","процес мовлення","мову","конкретно сказаних словах"]},"examples":[{"de":{"green":["spreche"]},"lv":{"purple":["розмовляю","німецькою"]}},{"de":{"green":["sprechen"]},"lv":{"purple":["говоримо","роботу"]}},{"de":{"green":["spricht"]},"lv":{"purple":["Вона","розмовляє","вчителькою"]}}],"comparison":[{"word":{},"meaning":{"purple":["говорити","розмовляти"]},"example":{}},{"word":{},"meaning":{"purple":["казати","сказати"]},"example":{}}],"tip":[{},{"purple":["процесу розмови"]}],"important":[{"green":["sprechen"],"purple":["володіння мовою"]},{"purple":["конкретно сказані слова"]}]}}
**Note:** GPT OWNER approved override: Third example changes subject and sentence; sagen contrast is inaccurate and target highlights are incomplete.

### Gala card (approved NEW composite)

```json
{
  "lv": "говорити",
  "study.translation": "говорити",
  "study.explanation": [
    "Головна думка: sprechen означає говорити, розмовляти або володіти мовою.",
    "sprechen описує процес мовлення чи розмову.",
    "Його також уживають, коли називають мову, якою хтось володіє.",
    "На відміну від sagen, sprechen не зосереджується на конкретно сказаних словах."
  ],
  "study.examples": [
    {
      "de": "Ich spreche Deutsch.",
      "lv": "Я розмовляю німецькою."
    },
    {
      "de": "Wir sprechen über die Arbeit.",
      "lv": "Ми говоримо про роботу."
    },
    {
      "de": "Sie spricht mit ihrer Lehrerin.",
      "lv": "Вона розмовляє зі своєю вчителькою."
    }
  ],
  "study.comparison": [
    {
      "word": "sprechen",
      "meaning": "говорити / розмовляти",
      "example": "Wir sprechen über die Arbeit. – Ми говоримо про роботу."
    },
    {
      "word": "sagen",
      "meaning": "казати / сказати конкретні слова",
      "example": "Sag mir die Wahrheit. – Скажи мені правду."
    }
  ],
  "study.tip": [
    "sprechen = говорити або розмовляти.",
    "Вживай sprechen для процесу розмови або назви мови."
  ],
  "study.important": [
    "sprechen описує мовлення, розмову або володіння мовою.",
    "sagen передає конкретно сказані слова."
  ],
  "study.sectionAccents": {
    "explanation": {
      "green": [
        "sprechen"
      ],
      "purple": [
        "говорити",
        "розмовляти",
        "процес мовлення",
        "мову",
        "конкретно сказаних словах"
      ]
    },
    "examples": [
      {
        "de": {
          "green": [
            "spreche"
          ]
        },
        "lv": {
          "purple": [
            "розмовляю",
            "німецькою"
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
            "говоримо",
            "роботу"
          ]
        }
      },
      {
        "de": {
          "green": [
            "spricht"
          ]
        },
        "lv": {
          "purple": [
            "Вона",
            "розмовляє",
            "вчителькою"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {},
        "meaning": {
          "purple": [
            "говорити",
            "розмовляти"
          ]
        },
        "example": {}
      },
      {
        "word": {},
        "meaning": {
          "purple": [
            "казати",
            "сказати"
          ]
        },
        "example": {}
      }
    ],
    "tip": [
      {},
      {
        "purple": [
          "процесу розмови"
        ]
      }
    ],
    "important": [
      {
        "green": [
          "sprechen"
        ],
        "purple": [
          "володіння мовою"
        ]
      },
      {
        "purple": [
          "конкретно сказані слова"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "говорити",
  "study.translation": "говорити",
  "study.explanation": "[\"Головна думка: говорити, розмовляти або використовувати мову.\",\"sprechen в основному означає: говорити або розмовляти.\",\"Часто характеризується: мова/розмова.\",\"sprechen описує розмову або використання мови.\"]",
  "study.examples": "[{\"de\":\"Ich spreche Deutsch.\",\"lv\":\"Я розмовляю німецькою.\"},{\"de\":\"Wir sprechen über die Arbeit.\",\"lv\":\"ми говоримо про роботу.\"},{\"de\":\"Sie spricht mit ihrer Lehrerin.\",\"lv\":\"я розмовляю німецькою\"}]"
}
```

---

## Finding 13

**Audit ID:** `LRB103-0013`
**Finding Stable ID:** `g2/a1/uk|Uhr|idx:698|lv and study target-language fields|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `Uhr|idx:698`
**Field / path:** `lv and study target-language fields`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** {"lv":"годинник","study target-language fields":null}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"годинник","study.translation":"годинник","study.explanation":"[\"Головна думка: die Uhr означає годинник як пристрій; після числа Uhr також позначає годину.\",\"Коли йдеться про пристрій, кажуть meine Uhr або die Uhr an der Wand.\",\"Коли називають точний час, Uhr ставлять після числа: Es ist acht Uhr.\",\"Не плутай die Uhr із die Zeit: Zeit означає час як поняття або проміжок часу.\"]","study.examples":"[{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Зараз восьма година.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Зараз восьма година.\"},{\"de\":\"Meine Uhr ist kaputt.\",\"lv\":\"Мій годинник зламався.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Зараз восьма.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Зараз восьма година.\"},{\"de\":\"die Uhr\",\"lv\":\"годинник або позначення години; die Zeit = час\"}]","study.tip":"[\"die Uhr = годинник; acht Uhr = восьма година.\",\"Для часу як поняття вживають die Zeit.\"]","study.important":"[\"die Uhr називає пристрій або точну годину.\",\"die Zeit означає час як поняття чи проміжок.\"]","study.sectionAccents":{"explanation":{"blue":["Uhr"],"purple":["годинник","годину","точний час","час як поняття"]},"examples":[{"de":{"blue":["Uhr"]},"lv":{"purple":["восьма година"]}},{"de":{"blue":["Uhr"]},"lv":{"purple":["восьма година"]}},{"de":{"blue":["Uhr"]},"lv":{"purple":["годинник","зламався"]}},{"de":{"blue":["Uhr"]},"lv":{"purple":["восьма"]}},{"de":{"blue":["Uhr"]},"lv":{"purple":["восьма година"]}},{"de":{"blue":["die Uhr","Uhr"]},"lv":{"purple":["годинник","позначення години","час"]}}],"tip":[{"purple":["годинник","восьма година"]},{}],"important":[{"blue":["die Uhr"],"purple":["точну годину"]},{"purple":["час як поняття"]}]}}
**Note:** GPT OWNER approved override: Full card contains corrupt DE strings, excessive duplicate examples and unclear Uhr/Zeit distinction.

### Gala card (approved NEW composite)

```json
{
  "lv": "годинник",
  "study.translation": "годинник",
  "study.explanation": [
    "Головна думка: die Uhr означає годинник як пристрій; після числа Uhr також позначає годину.",
    "Коли йдеться про пристрій, кажуть meine Uhr або die Uhr an der Wand.",
    "Коли називають точний час, Uhr ставлять після числа: Es ist acht Uhr.",
    "Не плутай die Uhr із die Zeit: Zeit означає час як поняття або проміжок часу."
  ],
  "study.examples": [
    {
      "de": "Es ist acht Uhr.",
      "lv": "Зараз восьма година."
    },
    {
      "de": "Es ist acht Uhr.",
      "lv": "Зараз восьма година."
    },
    {
      "de": "Meine Uhr ist kaputt.",
      "lv": "Мій годинник зламався."
    },
    {
      "de": "Es ist acht Uhr.",
      "lv": "Зараз восьма."
    },
    {
      "de": "Es ist acht Uhr.",
      "lv": "Зараз восьма година."
    },
    {
      "de": "die Uhr",
      "lv": "годинник або позначення години; die Zeit = час"
    }
  ],
  "study.tip": [
    "die Uhr = годинник; acht Uhr = восьма година.",
    "Для часу як поняття вживають die Zeit."
  ],
  "study.important": [
    "die Uhr називає пристрій або точну годину.",
    "die Zeit означає час як поняття чи проміжок."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "Uhr"
      ],
      "purple": [
        "годинник",
        "годину",
        "точний час",
        "час як поняття"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "Uhr"
          ]
        },
        "lv": {
          "purple": [
            "восьма година"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Uhr"
          ]
        },
        "lv": {
          "purple": [
            "восьма година"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Uhr"
          ]
        },
        "lv": {
          "purple": [
            "годинник",
            "зламався"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Uhr"
          ]
        },
        "lv": {
          "purple": [
            "восьма"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Uhr"
          ]
        },
        "lv": {
          "purple": [
            "восьма година"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "die Uhr",
            "Uhr"
          ]
        },
        "lv": {
          "purple": [
            "годинник",
            "позначення години",
            "час"
          ]
        }
      }
    ],
    "tip": [
      {
        "purple": [
          "годинник",
          "восьма година"
        ]
      },
      {}
    ],
    "important": [
      {
        "blue": [
          "die Uhr"
        ],
        "purple": [
          "точну годину"
        ]
      },
      {
        "purple": [
          "час як поняття"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "годинник",
  "study target-language fields": null
}
```

---

## Finding 14

**Audit ID:** `LRB103-0014`
**Finding Stable ID:** `g2/a1/uk|vom|idx:634|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `vom|idx:634`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** no
**DE reference (read-only):** vom
**CURRENT (captured scope):** {"lv":"від","study.translation":"від","study.explanation":"[\"vom є абревіатурою прийменника von і артикля dem.\",\"Повна форма: von dem (кому?).\",\"Вживається разом із іменники чоловічого та іншого роду, коли вказується походження чи напрямок від кого.\",\"Відповідає на питання від кого? чи звідки?\",\"На практиці vom майже завжди використовується замість повного von dem.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"приходжу з вокзалу\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"подарунок від батька.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"він приходить від лікаря.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"вона їде з аеропорту.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"це з ринку.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"ми прийшли зі святкування.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"він бере молоко у фермера.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"повідомлення від боса.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"від (конкретна річ, кому?)\",\"example\":\"vom Bahnhof – від ст\"},{\"word\":\"von\",\"meaning\":\"від (загальний)\",\"example\":\"von mir – від мене\"},{\"word\":\"aus\",\"meaning\":\"зсередини / походження\",\"example\":\"aus Deutschland – з Німеччини\"},{\"word\":\"ab\",\"meaning\":\"починаючи з (час/місце)\",\"example\":\"ab Montag – з понеділка\"},{\"word\":\"zu\",\"meaning\":\"до / на (протилежний напрямок)\",\"example\":\"zum Arzt – до лікаря\"}]","study.tip":"[\"Пам'ятай: von + dem → vom (кому?).\",\"У розмовній мові von dem майже не вимовляється - використовується vom.\"]","study.important":"[\"vom = von dem, тільки з іменником чоловічого або середнього роду в кому? відміні.\",\"Вказує на походження, джерело або напрямок чогось конкретного.\",\"Для жіночої статі: von der Mutter замість vom Mutter.\",\"Не плутати з aus (країна походження) або ab (пункт походження).\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"від • з","study.translation":"від • з","study.explanation":"[\"Головна думка: vom - це злиття прийменника von з артиклем dem.\",\"Повна форма: von dem; іменник після неї стоїть у давальному відмінку німецької мови.\",\"vom уживають з іменниками чоловічого та середнього роду.\",\"Залежно від контексту українською це від, з або зі.\",\"На практиці замість von dem майже завжди вживають скорочену форму vom.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"Я приходжу з вокзалу.\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"Подарунок від батька.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"Він повертається від лікаря.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"Вона їде з аеропорту.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"Це з ринку.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"Ми повертаємося зі свята.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"Він забирає молоко у фермера.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"Повідомлення від керівника.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"від / з конкретного джерела\",\"example\":\"vom Bahnhof – з вокзалу\"},{\"word\":\"von\",\"meaning\":\"від\",\"example\":\"von mir – від мене\"},{\"word\":\"aus\",\"meaning\":\"зсередини / походження\",\"example\":\"aus Deutschland – з Німеччини\"},{\"word\":\"ab\",\"meaning\":\"починаючи з часу або місця\",\"example\":\"ab Montag – з понеділка\"},{\"word\":\"zu\",\"meaning\":\"до / у напрямку до\",\"example\":\"zum Arzt – до лікаря\"}]","study.tip":"[\"Запам'ятай: von + dem = vom.\",\"vom уживають з чоловічим або середнім родом у давальному відмінку.\"]","study.important":"[\"vom = von dem; це граматичне злиття, а не окремий прийменник.\",\"Форма може вказувати на джерело, походження або рух від певного місця.\",\"З іменниками жіночого роду: von der Mutter, а не vom Mutter.\",\"Не плутай vom з aus або ab.\"]","study.sectionAccents":{"explanation":{"blue":["vom","von dem"],"purple":["злиття","давальному відмінку","чоловічого","середнього роду","від","з","зі"]},"examples":[{"de":{"blue":["vom"]},"lv":{"purple":["з вокзалу"]}},{"de":{"blue":["vom"]},"lv":{"purple":["від батька"]}},{"de":{"blue":["vom"]},"lv":{"purple":["від лікаря"]}},{"de":{"blue":["vom"]},"lv":{"purple":["з аеропорту"]}},{"de":{"blue":["vom"]},"lv":{"purple":["з ринку"]}},{"de":{"blue":["vom"]},"lv":{"purple":["зі свята"]}},{"de":{"blue":["vom"]},"lv":{"purple":["у фермера"]}},{"de":{"blue":["vom"]},"lv":{"purple":["від керівника"]}}],"comparison":[{"word":{"green":["vom"]},"meaning":{"purple":["від","з"]},"example":{"blue":["vom Bahnhof"]}},{"word":{"green":["von"]},"meaning":{"purple":["від"]},"example":{"yellow":["von mir"]}},{"word":{"green":["aus"]},"meaning":{"purple":["зсередини","походження"]},"example":{"green":["aus Deutschland"]}},{"word":{"green":["ab"]},"meaning":{"purple":["починаючи з"]},"example":{"green":["ab Montag"]}},{"word":{"green":["zu"]},"meaning":{"purple":["до"]},"example":{"red":["zum Arzt"]}}],"tip":[{"blue":["vom"]},{"purple":["давальному відмінку"]}],"important":[{"blue":["vom"],"purple":["von dem"]},{"purple":["джерело","походження"]},{"yellow":["von der Mutter"],"red":["vom Mutter"],"purple":["жіночого роду"]},{"green":["aus"],"red":["ab"]}]}}
**Note:** GPT OWNER approved override: Incorrect case questions, grammar, truncated comparison and several unnatural translations.

### Gala card (approved NEW composite)

```json
{
  "lv": "від • з",
  "study.translation": "від • з",
  "study.explanation": [
    "Головна думка: vom - це злиття прийменника von з артиклем dem.",
    "Повна форма: von dem; іменник після неї стоїть у давальному відмінку німецької мови.",
    "vom уживають з іменниками чоловічого та середнього роду.",
    "Залежно від контексту українською це від, з або зі.",
    "На практиці замість von dem майже завжди вживають скорочену форму vom."
  ],
  "study.examples": [
    {
      "de": "Ich komme vom Bahnhof.",
      "lv": "Я приходжу з вокзалу."
    },
    {
      "de": "Das Geschenk ist vom Vater.",
      "lv": "Подарунок від батька."
    },
    {
      "de": "Er kommt vom Arzt.",
      "lv": "Він повертається від лікаря."
    },
    {
      "de": "Sie fährt vom Flughafen.",
      "lv": "Вона їде з аеропорту."
    },
    {
      "de": "Das ist vom Markt.",
      "lv": "Це з ринку."
    },
    {
      "de": "Wir kommen vom Fest.",
      "lv": "Ми повертаємося зі свята."
    },
    {
      "de": "Er holt Milch vom Bauern.",
      "lv": "Він забирає молоко у фермера."
    },
    {
      "de": "Die Nachricht ist vom Chef.",
      "lv": "Повідомлення від керівника."
    }
  ],
  "study.comparison": [
    {
      "word": "vom",
      "meaning": "від / з конкретного джерела",
      "example": "vom Bahnhof – з вокзалу"
    },
    {
      "word": "von",
      "meaning": "від",
      "example": "von mir – від мене"
    },
    {
      "word": "aus",
      "meaning": "зсередини / походження",
      "example": "aus Deutschland – з Німеччини"
    },
    {
      "word": "ab",
      "meaning": "починаючи з часу або місця",
      "example": "ab Montag – з понеділка"
    },
    {
      "word": "zu",
      "meaning": "до / у напрямку до",
      "example": "zum Arzt – до лікаря"
    }
  ],
  "study.tip": [
    "Запам'ятай: von + dem = vom.",
    "vom уживають з чоловічим або середнім родом у давальному відмінку."
  ],
  "study.important": [
    "vom = von dem; це граматичне злиття, а не окремий прийменник.",
    "Форма може вказувати на джерело, походження або рух від певного місця.",
    "З іменниками жіночого роду: von der Mutter, а не vom Mutter.",
    "Не плутай vom з aus або ab."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "vom",
        "von dem"
      ],
      "purple": [
        "злиття",
        "давальному відмінку",
        "чоловічого",
        "середнього роду",
        "від",
        "з",
        "зі"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "vom"
          ]
        },
        "lv": {
          "purple": [
            "з вокзалу"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "vom"
          ]
        },
        "lv": {
          "purple": [
            "від батька"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "vom"
          ]
        },
        "lv": {
          "purple": [
            "від лікаря"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "vom"
          ]
        },
        "lv": {
          "purple": [
            "з аеропорту"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "vom"
          ]
        },
        "lv": {
          "purple": [
            "з ринку"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "vom"
          ]
        },
        "lv": {
          "purple": [
            "зі свята"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "vom"
          ]
        },
        "lv": {
          "purple": [
            "у фермера"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "vom"
          ]
        },
        "lv": {
          "purple": [
            "від керівника"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "vom"
          ]
        },
        "meaning": {
          "purple": [
            "від",
            "з"
          ]
        },
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
        "meaning": {
          "purple": [
            "від"
          ]
        },
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
        "meaning": {
          "purple": [
            "зсередини",
            "походження"
          ]
        },
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
        "meaning": {
          "purple": [
            "починаючи з"
          ]
        },
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
        "meaning": {
          "purple": [
            "до"
          ]
        },
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
          "давальному відмінку"
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
      {
        "purple": [
          "джерело",
          "походження"
        ]
      },
      {
        "yellow": [
          "von der Mutter"
        ],
        "red": [
          "vom Mutter"
        ],
        "purple": [
          "жіночого роду"
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
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "від",
  "study.translation": "від",
  "study.explanation": "[\"vom є абревіатурою прийменника von і артикля dem.\",\"Повна форма: von dem (кому?).\",\"Вживається разом із іменники чоловічого та іншого роду, коли вказується походження чи напрямок від кого.\",\"Відповідає на питання від кого? чи звідки?\",\"На практиці vom майже завжди використовується замість повного von dem.\"]",
  "study.examples": "[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"приходжу з вокзалу\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"подарунок від батька.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"він приходить від лікаря.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"вона їде з аеропорту.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"це з ринку.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"ми прийшли зі святкування.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"він бере молоко у фермера.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"повідомлення від боса.\"}]",
  "study.comparison": "[{\"word\":\"vom\",\"meaning\":\"від (конкретна річ, кому?)\",\"example\":\"vom Bahnhof – від ст\"},{\"word\":\"von\",\"meaning\":\"від (загальний)\",\"example\":\"von mir – від мене\"},{\"word\":\"aus\",\"meaning\":\"зсередини / походження\",\"example\":\"aus Deutschland – з Німеччини\"},{\"word\":\"ab\",\"meaning\":\"починаючи з (час/місце)\",\"example\":\"ab Montag – з понеділка\"},{\"word\":\"zu\",\"meaning\":\"до / на (протилежний напрямок)\",\"example\":\"zum Arzt – до лікаря\"}]",
  "study.tip": "[\"Пам'ятай: von + dem → vom (кому?).\",\"У розмовній мові von dem майже не вимовляється - використовується vom.\"]",
  "study.important": "[\"vom = von dem, тільки з іменником чоловічого або середнього роду в кому? відміні.\",\"Вказує на походження, джерело або напрямок чогось конкретного.\",\"Для жіночої статі: von der Mutter замість vom Mutter.\",\"Не плутати з aus (країна походження) або ab (пункт походження).\"]"
}
```

---

## Finding 15

**Audit ID:** `LRB103-0015`
**Finding Stable ID:** `g2/a1/uk|vor|idx:636|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `vor|idx:636`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** pirms • priekšā
**DE reference (read-only):** vor
**CURRENT (captured scope):** {"lv":"перед • попереду","study.translation":"перед • попереду","study.explanation":"[\"Головна думка: vor означає перед у часі або перед місцем.\",\"Коли йдеться про час, vor означає раніше.\",\"Говорячи про місце, vor означає перед або біля.\",\"На годиннику vor означає «до», як fünf vor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Я мию руки перед їжею.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"auto стоїть перед будинком.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"це п'ять до восьмої.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"після їжі йдемо гуляти.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"перед / попереду\",\"example\":\"Перед їжею...\"},{\"word\":\"nach\",\"meaning\":\"після / до\",\"example\":\"Після їжі...\"},{\"word\":\"neben\",\"meaning\":\"поруч\",\"example\":\"Поруч з будинком.\"},{\"word\":\"hinter\",\"meaning\":\"ззаду\",\"example\":\"За будинком.\"}]","study.tip":"{\"text\":\"Пам'ятай: раніше за часом, раніше за місцем → vor.\"}","study.important":"[\"vor може бути як часом, так і місцем.\",\"vor dem Essen = до їжі; vor dem Haus = перед будинком.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"перед • до","study.translation":"перед • до","study.explanation":"[\"Головна думка: vor означає перед у просторі або часі, а в позначенні години - до.\",\"Коли йдеться про час, vor часто перекладається як перед або до.\",\"Коли йдеться про місце, vor означає перед чимось.\",\"У позначенні часу fünf vor acht означає за п'ять хвилин восьма.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Перед їжею я мию руки.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Автомобіль стоїть перед будинком.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"За п'ять хвилин восьма.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"Після їжі ми йдемо гуляти.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"перед / до\",\"example\":\"Vor dem Essen...\"},{\"word\":\"nach\",\"meaning\":\"після / до\",\"example\":\"Nach dem Essen...\"},{\"word\":\"neben\",\"meaning\":\"поруч\",\"example\":\"Neben dem Haus.\"},{\"word\":\"hinter\",\"meaning\":\"за\",\"example\":\"Hinter dem Haus.\"}]","study.tip":"{\"text\":\"Запам'ятай: перед у часі або просторі - vor; у годині fünf vor acht - за п'ять хвилин восьма.\"}","study.important":"[\"vor може виражати і час, і місце.\",\"vor dem Essen = перед їжею; vor dem Haus = перед будинком.\"]","study.sectionAccents":{"explanation":{"blue":["vor","fünf vor acht"],"purple":["перед","до","просторі","часі","за п'ять хвилин восьма"]},"examples":[{"de":{"blue":["Vor"],"yellow":["Essen"]},"lv":{"purple":["Перед","їжею"]}},{"de":{"blue":["vor"],"yellow":["Haus"]},"lv":{"purple":["Автомобіль","перед будинком"]}},{"de":{"blue":["vor"]},"lv":{"purple":["За п'ять хвилин"]}},{"de":{"red":["Nach"],"yellow":["Essen"]},"lv":{"purple":["Після","їжі"]}}],"comparison":[{"word":{"green":["vor"]},"meaning":{"purple":["перед","до"]},"example":{"blue":["Vor"]}},{"word":{"green":["nach"]},"meaning":{"purple":["після","до"]},"example":{"red":["Nach"]}},{"word":{"green":["neben"]},"meaning":{"purple":["поруч"]},"example":{"green":["Neben"]}},{"word":{"green":["hinter"]},"meaning":{"purple":["за"]},"example":{"yellow":["Hinter"]}}],"tip":{"left":{"blue":["vor"],"purple":["перед","час"]}},"important":[{"blue":["vor"],"purple":["час","місце"]},{"blue":["vor dem Essen","vor dem Haus"],"purple":["перед","перед їжею","перед будинком"]}]}}
**Note:** GPT OWNER approved override: Temporal/spatial meanings are confused; comparison examples were translated instead of preserving DE.

### Gala card (approved NEW composite)

```json
{
  "lv": "перед • до",
  "study.translation": "перед • до",
  "study.explanation": [
    "Головна думка: vor означає перед у просторі або часі, а в позначенні години - до.",
    "Коли йдеться про час, vor часто перекладається як перед або до.",
    "Коли йдеться про місце, vor означає перед чимось.",
    "У позначенні часу fünf vor acht означає за п'ять хвилин восьма."
  ],
  "study.examples": [
    {
      "de": "Vor dem Essen wasche ich die Hände.",
      "lv": "Перед їжею я мию руки."
    },
    {
      "de": "Das Auto steht vor dem Haus.",
      "lv": "Автомобіль стоїть перед будинком."
    },
    {
      "de": "Es ist fünf vor acht.",
      "lv": "За п'ять хвилин восьма."
    },
    {
      "de": "Nach dem Essen gehen wir spazieren.",
      "lv": "Після їжі ми йдемо гуляти."
    }
  ],
  "study.comparison": [
    {
      "word": "vor",
      "meaning": "перед / до",
      "example": "Vor dem Essen..."
    },
    {
      "word": "nach",
      "meaning": "після / до",
      "example": "Nach dem Essen..."
    },
    {
      "word": "neben",
      "meaning": "поруч",
      "example": "Neben dem Haus."
    },
    {
      "word": "hinter",
      "meaning": "за",
      "example": "Hinter dem Haus."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: перед у часі або просторі - vor; у годині fünf vor acht - за п'ять хвилин восьма."
  },
  "study.important": [
    "vor може виражати і час, і місце.",
    "vor dem Essen = перед їжею; vor dem Haus = перед будинком."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "vor",
        "fünf vor acht"
      ],
      "purple": [
        "перед",
        "до",
        "просторі",
        "часі",
        "за п'ять хвилин восьма"
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
        "lv": {
          "purple": [
            "Перед",
            "їжею"
          ]
        }
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
        "lv": {
          "purple": [
            "Автомобіль",
            "перед будинком"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "vor"
          ]
        },
        "lv": {
          "purple": [
            "За п'ять хвилин"
          ]
        }
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
        "lv": {
          "purple": [
            "Після",
            "їжі"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "vor"
          ]
        },
        "meaning": {
          "purple": [
            "перед",
            "до"
          ]
        },
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
        "meaning": {
          "purple": [
            "після",
            "до"
          ]
        },
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
        "meaning": {
          "purple": [
            "поруч"
          ]
        },
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
        "meaning": {
          "purple": [
            "за"
          ]
        },
        "example": {
          "yellow": [
            "Hinter"
          ]
        }
      }
    ],
    "tip": {
      "left": {
        "blue": [
          "vor"
        ],
        "purple": [
          "перед",
          "час"
        ]
      }
    },
    "important": [
      {
        "blue": [
          "vor"
        ],
        "purple": [
          "час",
          "місце"
        ]
      },
      {
        "blue": [
          "vor dem Essen",
          "vor dem Haus"
        ],
        "purple": [
          "перед",
          "перед їжею",
          "перед будинком"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "перед • попереду",
  "study.translation": "перед • попереду",
  "study.explanation": "[\"Головна думка: vor означає перед у часі або перед місцем.\",\"Коли йдеться про час, vor означає раніше.\",\"Говорячи про місце, vor означає перед або біля.\",\"На годиннику vor означає «до», як fünf vor acht.\"]",
  "study.examples": "[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Я мию руки перед їжею.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"auto стоїть перед будинком.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"це п'ять до восьмої.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"після їжі йдемо гуляти.\"}]",
  "study.comparison": "[{\"word\":\"vor\",\"meaning\":\"перед / попереду\",\"example\":\"Перед їжею...\"},{\"word\":\"nach\",\"meaning\":\"після / до\",\"example\":\"Після їжі...\"},{\"word\":\"neben\",\"meaning\":\"поруч\",\"example\":\"Поруч з будинком.\"},{\"word\":\"hinter\",\"meaning\":\"ззаду\",\"example\":\"За будинком.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: раніше за часом, раніше за місцем → vor.\"}",
  "study.important": "[\"vor може бути як часом, так і місцем.\",\"vor dem Essen = до їжі; vor dem Haus = перед будинком.\"]"
}
```

---

## Finding 16

**Audit ID:** `LRB103-0016`
**Finding Stable ID:** `g2/a1/uk|was|idx:644|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0003`
**Lang:** uk
**Card:** `was|idx:644`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** kas • ko
**DE reference (read-only):** was
**CURRENT (captured scope):** {"lv":"хто • що","study.translation":"хто • що","study.explanation":"[\"Головна думка: was є питальним словом про речі та події - латиською мовою це що або що, залежно від частини речення.\",\"was запитує про речі, події та факти, а не про осіб.\",\"У німецькій мові was не змінюється при флексії - він завжди виглядає як was.\",\"Якщо was є підметом речення, він перекладається як що (Was ist das? = Що це?).\",\"Якщо was є доповненням (об’єктом) дієслова, воно перекладається як що (Was machst du? = Що ти робиш?).\",\"Особи запитуються за допомогою wer (хто/хто), а не was.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Що це?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"що сталося\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"що ти зараз робиш\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"що ти хочеш випити\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Що означає це слово?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Яка твоя улюблена їжа?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"що ти сказав\"}]","study.tip":"[\"Сам was не змінюється - у німецькій мові це завжди was; у латиській мові вибрати кого або що відповідно до частини речення.\",\"Швидка хитрість: якщо на запитання можна відповісти \\\"Це ...\\\", використовуйте who; якщо відповідь стоїть після дієслова як доповнення, використовуйте ko.\"]","study.important":"[\"was запитує про речі, події та факти — ніколи не про людей.\",\"Особи запитуються за допомогою wer (хто/хто), а не was.\",\"was für (ein/eine) означає когось/про що та запитує про якість або тип (Was für ein Film ist das? = Який це фільм?).\",\"Неправильно: Wer ist passiert? → Правильно: Was ist passiert?\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"що","study.translation":"що","study.explanation":"[\"Головна думка: was - питальне слово про речі, події та факти; українською воно означає що.\",\"was не вживають для запитання про людей.\",\"У німецькій мові форма was не змінюється за відмінками.\",\"was може бути підметом: Was ist passiert? = Що сталося?\",\"was може бути додатком: Was machst du? = Що ти робиш?\",\"Про людей запитують за допомогою wer, а не was.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Що це?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Що сталося?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Що ти зараз робиш?\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Що ти хочеш випити?\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Що означає це слово?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Яка твоя улюблена страва?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Що ти сказав?\"}]","study.tip":"[\"was = що; його форма в німецькій мові не змінюється.\",\"Якщо запитання стосується людини, вживай wer.\"]","study.important":"[\"was запитує про речі, події та факти, а не про людей.\",\"Для людей уживають wer.\",\"was für (ein/eine) означає який або що за: Was für ein Film ist das?\",\"Неправильно: Wer ist passiert? Правильно: Was ist passiert?\"]","study.sectionAccents":{"explanation":{"blue":["was"],"purple":["що","речі","події","факти","підметом","додатком","людей"]},"examples":[{"de":{"blue":["Was"]},"lv":{"purple":["Що"]}},{"de":{"blue":["Was"]},"lv":{"purple":["Що"]}},{"de":{"blue":["Was"]},"lv":{"purple":["Що"]}},{"de":{"blue":["Was"]},"lv":{"purple":["Що"]}},{"de":{"blue":["Was"]},"lv":{"purple":["Що"]}},{"de":{"blue":["Was"]},"lv":{"purple":["улюблена страва"]}},{"de":{"blue":["Was"]},"lv":{"purple":["Що"]}}],"tip":[{"blue":["was"],"purple":["що"]},{"purple":["що","людини","що за"]}],"important":[{"blue":["was"],"purple":["речі","події","факти"]},{"blue":["wer"]},{"blue":["was für"],"purple":["що","який","що за"]},{"blue":["Was"]}]}}
**Note:** GPT OWNER approved override: Headword wrongly includes хто; explanation contains Latvian/English residue and false case guidance.

### Gala card (approved NEW composite)

```json
{
  "lv": "що",
  "study.translation": "що",
  "study.explanation": [
    "Головна думка: was - питальне слово про речі, події та факти; українською воно означає що.",
    "was не вживають для запитання про людей.",
    "У німецькій мові форма was не змінюється за відмінками.",
    "was може бути підметом: Was ist passiert? = Що сталося?",
    "was може бути додатком: Was machst du? = Що ти робиш?",
    "Про людей запитують за допомогою wer, а не was."
  ],
  "study.examples": [
    {
      "de": "Was ist das?",
      "lv": "Що це?"
    },
    {
      "de": "Was ist passiert?",
      "lv": "Що сталося?"
    },
    {
      "de": "Was machst du gerade?",
      "lv": "Що ти зараз робиш?"
    },
    {
      "de": "Was möchtest du trinken?",
      "lv": "Що ти хочеш випити?"
    },
    {
      "de": "Was bedeutet dieses Wort?",
      "lv": "Що означає це слово?"
    },
    {
      "de": "Was ist dein Lieblingsessen?",
      "lv": "Яка твоя улюблена страва?"
    },
    {
      "de": "Was hast du gesagt?",
      "lv": "Що ти сказав?"
    }
  ],
  "study.tip": [
    "was = що; його форма в німецькій мові не змінюється.",
    "Якщо запитання стосується людини, вживай wer."
  ],
  "study.important": [
    "was запитує про речі, події та факти, а не про людей.",
    "Для людей уживають wer.",
    "was für (ein/eine) означає який або що за: Was für ein Film ist das?",
    "Неправильно: Wer ist passiert? Правильно: Was ist passiert?"
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "was"
      ],
      "purple": [
        "що",
        "речі",
        "події",
        "факти",
        "підметом",
        "додатком",
        "людей"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "Was"
          ]
        },
        "lv": {
          "purple": [
            "Що"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Was"
          ]
        },
        "lv": {
          "purple": [
            "Що"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Was"
          ]
        },
        "lv": {
          "purple": [
            "Що"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Was"
          ]
        },
        "lv": {
          "purple": [
            "Що"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Was"
          ]
        },
        "lv": {
          "purple": [
            "Що"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Was"
          ]
        },
        "lv": {
          "purple": [
            "улюблена страва"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Was"
          ]
        },
        "lv": {
          "purple": [
            "Що"
          ]
        }
      }
    ],
    "tip": [
      {
        "blue": [
          "was"
        ],
        "purple": [
          "що"
        ]
      },
      {
        "purple": [
          "що",
          "людини",
          "що за"
        ]
      }
    ],
    "important": [
      {
        "blue": [
          "was"
        ],
        "purple": [
          "речі",
          "події",
          "факти"
        ]
      },
      {
        "blue": [
          "wer"
        ]
      },
      {
        "blue": [
          "was für"
        ],
        "purple": [
          "що",
          "який",
          "що за"
        ]
      },
      {
        "blue": [
          "Was"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "хто • що",
  "study.translation": "хто • що",
  "study.explanation": "[\"Головна думка: was є питальним словом про речі та події - латиською мовою це що або що, залежно від частини речення.\",\"was запитує про речі, події та факти, а не про осіб.\",\"У німецькій мові was не змінюється при флексії - він завжди виглядає як was.\",\"Якщо was є підметом речення, він перекладається як що (Was ist das? = Що це?).\",\"Якщо was є доповненням (об’єктом) дієслова, воно перекладається як що (Was machst du? = Що ти робиш?).\",\"Особи запитуються за допомогою wer (хто/хто), а не was.\"]",
  "study.examples": "[{\"de\":\"Was ist das?\",\"lv\":\"Що це?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"що сталося\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"що ти зараз робиш\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"що ти хочеш випити\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Що означає це слово?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Яка твоя улюблена їжа?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"що ти сказав\"}]",
  "study.tip": "[\"Сам was не змінюється - у німецькій мові це завжди was; у латиській мові вибрати кого або що відповідно до частини речення.\",\"Швидка хитрість: якщо на запитання можна відповісти \\\"Це ...\\\", використовуйте who; якщо відповідь стоїть після дієслова як доповнення, використовуйте ko.\"]",
  "study.important": "[\"was запитує про речі, події та факти — ніколи не про людей.\",\"Особи запитуються за допомогою wer (хто/хто), а не was.\",\"was für (ein/eine) означає когось/про що та запитує про якість або тип (Was für ein Film ist das? = Який це фільм?).\",\"Неправильно: Wer ist passiert? → Правильно: Was ist passiert?\"]"
}
```

---

## Finding 17

**Audit ID:** `LRB103-0017`
**Finding Stable ID:** `g2/a1/uk|wenn|idx:655|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `wenn|idx:655`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** ja • kad
**DE reference (read-only):** wenn
**CURRENT (captured scope):** {"lv":"якщо • коли","study.translation":"якщо • коли","study.explanation":"[\"Головна думка: wenn означає якщо або коли залежно від ситуації.\",\"Якщо це умова, перекладіть як якщо.\",\"Якщо це повторний або загальний час, перекладіть як коли.\",\"Після wenn дієслово у німецькому реченні зазвичай стоїть у кінці.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"якщо маєте час, зайдіть.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"якщо йде дощ, я залишаюся вдома.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"коли я втомився, я п'ю каву.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"я не знаю чи він прийде.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"якщо / коли\",\"example\":\"Якщо у тебе є час...\"},{\"word\":\"ob\",\"meaning\":\"або в непрямому питанні\",\"example\":\"Я не знаю, чи...\"},{\"word\":\"wann\",\"meaning\":\"коли під питанням\",\"example\":\"Коли ти приходиш?\"},{\"word\":\"weil\",\"meaning\":\"тому що\",\"example\":\"Я залишаюся, тому що я хворий.\"}]","study.tip":"{\"text\":\"Пам'ятай: умова → wenn; питання \\\"коли?\\\" → wann.\"}","study.important":"[\"wenn і wann не те саме.\",\"Wann kommst du? є питання. Wenn du kommst... є умовою/часом.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"якщо • коли","study.translation":"якщо • коли","study.explanation":"[\"Головна думка: wenn означає якщо або коли залежно від контексту.\",\"У реченні з умовою wenn перекладається як якщо.\",\"Коли йдеться про повторювану або загальну ситуацію в часі, wenn перекладається як коли.\",\"У підрядному реченні після wenn відмінюване дієслово зазвичай стоїть у кінці.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Якщо маєш час, зайди.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Якщо йде дощ, я залишаюся вдома.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Коли я відчуваю втому, я п'ю каву.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Я не знаю, чи він прийде.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"якщо / коли\",\"example\":\"Wenn du Zeit hast...\"},{\"word\":\"ob\",\"meaning\":\"чи в непрямому запитанні\",\"example\":\"Ich weiß nicht, ob...\"},{\"word\":\"wann\",\"meaning\":\"коли в запитанні\",\"example\":\"Wann kommst du?\"},{\"word\":\"weil\",\"meaning\":\"тому що\",\"example\":\"Ich bleibe, weil ich krank bin.\"}]","study.tip":"{\"text\":\"Запам'ятай: умова - wenn; пряме запитання «коли?» - wann.\"}","study.important":"[\"wenn і wann - не те саме.\",\"Wann kommst du? - запитання. Wenn du kommst... - умова або час.\"]","study.sectionAccents":{"explanation":{"blue":["wenn"],"purple":["якщо","коли","умовою","кінці"]},"examples":[{"de":{"blue":["Wenn","hast"]},"lv":{"purple":["Якщо"]}},{"de":{"blue":["Wenn","regnet"]},"lv":{"purple":["Якщо"]}},{"de":{"blue":["Wenn","bin"]},"lv":{"purple":["Коли"]}},{"de":{"red":["ob"]},"lv":{"purple":["чи"]}}],"comparison":[{"word":{"green":["wenn"]},"meaning":{"purple":["якщо","коли"]},"example":{"blue":["Wenn"]}},{"word":{"green":["ob"]},"meaning":{"purple":["чи"]},"example":{"red":["ob"]}},{"word":{"green":["wann"]},"meaning":{"purple":["коли"]},"example":{"yellow":["Wann"]}},{"word":{"green":["weil"]},"meaning":{"purple":["тому що"]},"example":{"green":["weil"]}}],"tip":{"left":{"blue":["wenn"],"yellow":["wann"],"purple":["умова","коли","запитання"]}},"important":[{"blue":["wenn"],"yellow":["wann"]},{"yellow":["Wann kommst du"],"blue":["Wenn du kommst"],"purple":["умова","запитання","час"]}]}}
**Note:** GPT OWNER approved override: Person alignment, punctuation and ob/wann comparison are wrong; comparison DE examples were translated.

### Gala card (approved NEW composite)

```json
{
  "lv": "якщо • коли",
  "study.translation": "якщо • коли",
  "study.explanation": [
    "Головна думка: wenn означає якщо або коли залежно від контексту.",
    "У реченні з умовою wenn перекладається як якщо.",
    "Коли йдеться про повторювану або загальну ситуацію в часі, wenn перекладається як коли.",
    "У підрядному реченні після wenn відмінюване дієслово зазвичай стоїть у кінці."
  ],
  "study.examples": [
    {
      "de": "Wenn du Zeit hast, komm vorbei.",
      "lv": "Якщо маєш час, зайди."
    },
    {
      "de": "Wenn es regnet, bleibe ich zu Hause.",
      "lv": "Якщо йде дощ, я залишаюся вдома."
    },
    {
      "de": "Wenn ich müde bin, trinke ich Kaffee.",
      "lv": "Коли я відчуваю втому, я п'ю каву."
    },
    {
      "de": "Ich weiß nicht, ob er kommt.",
      "lv": "Я не знаю, чи він прийде."
    }
  ],
  "study.comparison": [
    {
      "word": "wenn",
      "meaning": "якщо / коли",
      "example": "Wenn du Zeit hast..."
    },
    {
      "word": "ob",
      "meaning": "чи в непрямому запитанні",
      "example": "Ich weiß nicht, ob..."
    },
    {
      "word": "wann",
      "meaning": "коли в запитанні",
      "example": "Wann kommst du?"
    },
    {
      "word": "weil",
      "meaning": "тому що",
      "example": "Ich bleibe, weil ich krank bin."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: умова - wenn; пряме запитання «коли?» - wann."
  },
  "study.important": [
    "wenn і wann - не те саме.",
    "Wann kommst du? - запитання. Wenn du kommst... - умова або час."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "wenn"
      ],
      "purple": [
        "якщо",
        "коли",
        "умовою",
        "кінці"
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
        "lv": {
          "purple": [
            "Якщо"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wenn",
            "regnet"
          ]
        },
        "lv": {
          "purple": [
            "Якщо"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wenn",
            "bin"
          ]
        },
        "lv": {
          "purple": [
            "Коли"
          ]
        }
      },
      {
        "de": {
          "red": [
            "ob"
          ]
        },
        "lv": {
          "purple": [
            "чи"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "wenn"
          ]
        },
        "meaning": {
          "purple": [
            "якщо",
            "коли"
          ]
        },
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
        "meaning": {
          "purple": [
            "чи"
          ]
        },
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
        "meaning": {
          "purple": [
            "коли"
          ]
        },
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
        "meaning": {
          "purple": [
            "тому що"
          ]
        },
        "example": {
          "green": [
            "weil"
          ]
        }
      }
    ],
    "tip": {
      "left": {
        "blue": [
          "wenn"
        ],
        "yellow": [
          "wann"
        ],
        "purple": [
          "умова",
          "коли",
          "запитання"
        ]
      }
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
        "yellow": [
          "Wann kommst du"
        ],
        "blue": [
          "Wenn du kommst"
        ],
        "purple": [
          "умова",
          "запитання",
          "час"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "якщо • коли",
  "study.translation": "якщо • коли",
  "study.explanation": "[\"Головна думка: wenn означає якщо або коли залежно від ситуації.\",\"Якщо це умова, перекладіть як якщо.\",\"Якщо це повторний або загальний час, перекладіть як коли.\",\"Після wenn дієслово у німецькому реченні зазвичай стоїть у кінці.\"]",
  "study.examples": "[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"якщо маєте час, зайдіть.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"якщо йде дощ, я залишаюся вдома.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"коли я втомився, я п'ю каву.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"я не знаю чи він прийде.\"}]",
  "study.comparison": "[{\"word\":\"wenn\",\"meaning\":\"якщо / коли\",\"example\":\"Якщо у тебе є час...\"},{\"word\":\"ob\",\"meaning\":\"або в непрямому питанні\",\"example\":\"Я не знаю, чи...\"},{\"word\":\"wann\",\"meaning\":\"коли під питанням\",\"example\":\"Коли ти приходиш?\"},{\"word\":\"weil\",\"meaning\":\"тому що\",\"example\":\"Я залишаюся, тому що я хворий.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: умова → wenn; питання \\\"коли?\\\" → wann.\"}",
  "study.important": "[\"wenn і wann не те саме.\",\"Wann kommst du? є питання. Wenn du kommst... є умовою/часом.\"]"
}
```

---

## Finding 18

**Audit ID:** `LRB103-0018`
**Finding Stable ID:** `g2/a1/uk|wer|idx:656|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `wer|idx:656`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** kas • kurš
**DE reference (read-only):** wer
**CURRENT (captured scope):** {"lv":"хто • хто","study.translation":"хто • хто","study.explanation":"[\"Головна думка: wer є питальним словом щодо ідентичності людини - латиською мовою це хто або хто.\",\"wer запитує про людей, а не про речі чи події.\",\"Речі та події запитуються за допомогою was, а не wer.\",\"wer у німецькій мові зазвичай є підметом речення (називному відмінку) — Wer ist das? = Що це?\",\"Коли запитують, хто саме з кількох людей, wer часто використовується разом із von (wer von euch = хто з вас).\",\"wer змінює форму шляхом флексії: wen (знахідний відмінок), wem (давальний відмінок), wessen (родовий відмінок) — wer є найпоширенішою формою на рівні A1.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Що це?\"},{\"de\":\"Wer bist du?\",\"lv\":\"хто ти\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Що буде сьогодні?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"хто твій вчитель\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Хто з вас говорить німецькою?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Хто це сказав?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Хто хоче кави?\"}]","study.tip":"[\"wer запитує про осіб (хто/хто) - was використовується для речей і подій.\",\"Щоб запитати про вибір між кількома людьми, використовуйте wer von... (який з...).\"]","study.important":"[\"wer запитує лише про осіб, ніколи про речі.\",\"Речі та події запитуються за допомогою was замість wer.\",\"wer змінює форму після флексії: wen, wem, wessen — але основною формою є wer.\",\"Неправильно: Wer ist passiert? → Правильно: Was ist passiert?\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"хто","study.translation":"хто","study.explanation":"[\"Головна думка: wer - питальне слово про особу; українською воно означає хто.\",\"wer запитує про людей, а не про речі чи події.\",\"Про речі та події запитують за допомогою was.\",\"Форма wer зазвичай є підметом у називному відмінку: Wer ist das? = Хто це?\",\"Щоб запитати, хто саме з кількох людей, уживають wer von: wer von euch = хто з вас.\",\"В інших відмінках форма змінюється: wen, wem, wessen.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Хто це?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Хто ти?\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Хто сьогодні прийде?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Хто твоя вчителька?\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Хто з вас розмовляє німецькою?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Хто це сказав?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Хто хоче кави?\"}]","study.tip":"[\"wer = хто; was = що.\",\"Для вибору серед кількох людей уживай wer von... = хто з...\"]","study.important":"[\"wer запитує тільки про людей.\",\"Про речі та події запитують за допомогою was.\",\"Відмінкові форми: wer, wen, wem, wessen.\",\"Неправильно: Wer ist passiert? Правильно: Was ist passiert?\"]","study.sectionAccents":{"explanation":{"blue":["wer"],"green":["was"],"purple":["хто","людей","речі","події","підметом","називному відмінку","хто з вас"]},"examples":[{"de":{"blue":["Wer"]},"lv":{"purple":["Хто"]}},{"de":{"blue":["Wer"]},"lv":{"purple":["Хто"]}},{"de":{"blue":["Wer"]},"lv":{"purple":["Хто"]}},{"de":{"blue":["Wer"]},"lv":{"purple":["Хто","вчителька"]}},{"de":{"blue":["Wer"]},"lv":{"purple":["Хто з вас"]}},{"de":{"blue":["Wer"]},"lv":{"purple":["Хто"]}},{"de":{"blue":["Wer"]},"lv":{"purple":["Хто"]}}],"tip":[{"blue":["wer"],"green":["was"],"purple":["хто","що"]},{"blue":["wer von"],"purple":["хто","людей"]}],"important":[{"blue":["wer"],"purple":["людей"]},{"green":["was"],"purple":["речі","події"]},{"blue":["wer"],"purple":["Відмінкові форми"]},{"blue":["Wer"],"green":["Was"]}]}}
**Note:** GPT OWNER approved override: Duplicated headword; multiple wer examples were mistranslated as what; teacher gender was lost.

### Gala card (approved NEW composite)

```json
{
  "lv": "хто",
  "study.translation": "хто",
  "study.explanation": [
    "Головна думка: wer - питальне слово про особу; українською воно означає хто.",
    "wer запитує про людей, а не про речі чи події.",
    "Про речі та події запитують за допомогою was.",
    "Форма wer зазвичай є підметом у називному відмінку: Wer ist das? = Хто це?",
    "Щоб запитати, хто саме з кількох людей, уживають wer von: wer von euch = хто з вас.",
    "В інших відмінках форма змінюється: wen, wem, wessen."
  ],
  "study.examples": [
    {
      "de": "Wer ist das?",
      "lv": "Хто це?"
    },
    {
      "de": "Wer bist du?",
      "lv": "Хто ти?"
    },
    {
      "de": "Wer kommt heute?",
      "lv": "Хто сьогодні прийде?"
    },
    {
      "de": "Wer ist deine Lehrerin?",
      "lv": "Хто твоя вчителька?"
    },
    {
      "de": "Wer von euch spricht Deutsch?",
      "lv": "Хто з вас розмовляє німецькою?"
    },
    {
      "de": "Wer hat das gesagt?",
      "lv": "Хто це сказав?"
    },
    {
      "de": "Wer möchte Kaffee?",
      "lv": "Хто хоче кави?"
    }
  ],
  "study.tip": [
    "wer = хто; was = що.",
    "Для вибору серед кількох людей уживай wer von... = хто з..."
  ],
  "study.important": [
    "wer запитує тільки про людей.",
    "Про речі та події запитують за допомогою was.",
    "Відмінкові форми: wer, wen, wem, wessen.",
    "Неправильно: Wer ist passiert? Правильно: Was ist passiert?"
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "wer"
      ],
      "green": [
        "was"
      ],
      "purple": [
        "хто",
        "людей",
        "речі",
        "події",
        "підметом",
        "називному відмінку",
        "хто з вас"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "Wer"
          ]
        },
        "lv": {
          "purple": [
            "Хто"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wer"
          ]
        },
        "lv": {
          "purple": [
            "Хто"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wer"
          ]
        },
        "lv": {
          "purple": [
            "Хто"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wer"
          ]
        },
        "lv": {
          "purple": [
            "Хто",
            "вчителька"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wer"
          ]
        },
        "lv": {
          "purple": [
            "Хто з вас"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wer"
          ]
        },
        "lv": {
          "purple": [
            "Хто"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wer"
          ]
        },
        "lv": {
          "purple": [
            "Хто"
          ]
        }
      }
    ],
    "tip": [
      {
        "blue": [
          "wer"
        ],
        "green": [
          "was"
        ],
        "purple": [
          "хто",
          "що"
        ]
      },
      {
        "blue": [
          "wer von"
        ],
        "purple": [
          "хто",
          "людей"
        ]
      }
    ],
    "important": [
      {
        "blue": [
          "wer"
        ],
        "purple": [
          "людей"
        ]
      },
      {
        "green": [
          "was"
        ],
        "purple": [
          "речі",
          "події"
        ]
      },
      {
        "blue": [
          "wer"
        ],
        "purple": [
          "Відмінкові форми"
        ]
      },
      {
        "blue": [
          "Wer"
        ],
        "green": [
          "Was"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "хто • хто",
  "study.translation": "хто • хто",
  "study.explanation": "[\"Головна думка: wer є питальним словом щодо ідентичності людини - латиською мовою це хто або хто.\",\"wer запитує про людей, а не про речі чи події.\",\"Речі та події запитуються за допомогою was, а не wer.\",\"wer у німецькій мові зазвичай є підметом речення (називному відмінку) — Wer ist das? = Що це?\",\"Коли запитують, хто саме з кількох людей, wer часто використовується разом із von (wer von euch = хто з вас).\",\"wer змінює форму шляхом флексії: wen (знахідний відмінок), wem (давальний відмінок), wessen (родовий відмінок) — wer є найпоширенішою формою на рівні A1.\"]",
  "study.examples": "[{\"de\":\"Wer ist das?\",\"lv\":\"Що це?\"},{\"de\":\"Wer bist du?\",\"lv\":\"хто ти\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Що буде сьогодні?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"хто твій вчитель\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Хто з вас говорить німецькою?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Хто це сказав?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Хто хоче кави?\"}]",
  "study.tip": "[\"wer запитує про осіб (хто/хто) - was використовується для речей і подій.\",\"Щоб запитати про вибір між кількома людьми, використовуйте wer von... (який з...).\"]",
  "study.important": "[\"wer запитує лише про осіб, ніколи про речі.\",\"Речі та події запитуються за допомогою was замість wer.\",\"wer змінює форму після флексії: wen, wem, wessen — але основною формою є wer.\",\"Неправильно: Wer ist passiert? → Правильно: Was ist passiert?\"]"
}
```

---

## Finding 19

**Audit ID:** `LRB103-0019`
**Finding Stable ID:** `g2/a1/uk|werden|idx:657|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `werden|idx:657`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** kļūt
**DE reference (read-only):** werden
**CURRENT (captured scope):** {"lv":"стати","study.translation":"стати","study.explanation":"[\"Головна думка: werden на рівні A1 найчастіше означає стати.\",\"Він використовується, коли щось змінюється або стає іншим.\",\"Пізніше в німецькій мові werden також використовується для майбутній часi та пасивного стану.\",\"На рівні A1 найважливішою фразою є Ich werde müde. = Я втомлююся.\"]","study.examples":"[{\"de\":\"Ich werde müde.\",\"lv\":\"я втомлююсь.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"стає холодно.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"вона стає лікарем.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"я втомився\"}]","study.comparison":"[{\"word\":\"werden\",\"meaning\":\"стати\",\"example\":\"Я стаю втомленим.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Я втомлений.\"},{\"word\":\"bleiben\",\"meaning\":\"залишитися\",\"example\":\"Я залишаюся тут.\"},{\"word\":\"machen\",\"meaning\":\"робити / робити\",\"example\":\"Я це роблю.\"}]","study.tip":"{\"text\":\"Пам'ятай: зміна/стан стає іншим → werden.\"}","study.important":"[\"werden не те саме, що sein.\",\"Ich werde müde = я втомлююся; Ich bin müde = Я втомився.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"ставати","study.translation":"ставати","study.explanation":"[\"Головна думка: на рівні A1 werden найчастіше означає ставати.\",\"Його вживають, коли щось змінюється або переходить в інший стан.\",\"На вищих рівнях werden також використовують для утворення майбутнього часу та пасивного стану.\",\"Важливий приклад: Ich werde müde. = Я втомлююся.\"]","study.examples":"[{\"de\":\"Ich werde müde.\",\"lv\":\"Я втомлююся.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"Стає холодно.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"Вона стає лікаркою.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"Я втомлений.\"}]","study.comparison":"[{\"word\":\"werden\",\"meaning\":\"ставати\",\"example\":\"Ich werde müde.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Ich bin müde.\"},{\"word\":\"bleiben\",\"meaning\":\"залишатися\",\"example\":\"Ich bleibe hier.\"},{\"word\":\"machen\",\"meaning\":\"робити\",\"example\":\"Ich mache das.\"}]","study.tip":"{\"text\":\"Запам'ятай: якщо стан змінюється, часто вживають werden.\"}","study.important":"[\"werden і sein - не те саме.\",\"Ich werde müde = я втомлююся; Ich bin müde = я втомлений.\"]","study.sectionAccents":{"explanation":{"blue":["werden","Ich werde"],"purple":["ставати","змінюється","інший стан","майбутнього часу","пасивного стану"]},"examples":[{"de":{"blue":["werde"]},"lv":{"purple":["втомлююся"]}},{"de":{"blue":["wird"]},"lv":{"purple":["Стає"]}},{"de":{"blue":["wird"]},"lv":{"purple":["стає","лікаркою"]}},{"de":{"red":["bin"]},"lv":{"purple":["втомлений"]}}],"comparison":[{"word":{"green":["werden"]},"meaning":{"purple":["ставати"]},"example":{"blue":["werde"]}},{"word":{"green":["sein"]},"meaning":{"purple":["бути"]},"example":{"red":["bin"]}},{"word":{"green":["bleiben"]},"meaning":{"purple":["залишатися"]},"example":{"green":["bleibe"]}},{"word":{"green":["machen"]},"meaning":{"purple":["робити"]},"example":{"yellow":["mache"]}}],"tip":{"left":{"blue":["werden"],"purple":["стан змінюється"]}},"important":[{"blue":["werden"],"red":["sein"]},{"blue":["werde"],"red":["bin"],"purple":["втомлююся","втомлений"]}]}}
**Note:** GPT OWNER approved override: Headword/aspect, grammar, gender and werden/sein contrast are inconsistent; comparison DE examples were translated.

### Gala card (approved NEW composite)

```json
{
  "lv": "ставати",
  "study.translation": "ставати",
  "study.explanation": [
    "Головна думка: на рівні A1 werden найчастіше означає ставати.",
    "Його вживають, коли щось змінюється або переходить в інший стан.",
    "На вищих рівнях werden також використовують для утворення майбутнього часу та пасивного стану.",
    "Важливий приклад: Ich werde müde. = Я втомлююся."
  ],
  "study.examples": [
    {
      "de": "Ich werde müde.",
      "lv": "Я втомлююся."
    },
    {
      "de": "Es wird kalt.",
      "lv": "Стає холодно."
    },
    {
      "de": "Sie wird Ärztin.",
      "lv": "Вона стає лікаркою."
    },
    {
      "de": "Ich bin müde.",
      "lv": "Я втомлений."
    }
  ],
  "study.comparison": [
    {
      "word": "werden",
      "meaning": "ставати",
      "example": "Ich werde müde."
    },
    {
      "word": "sein",
      "meaning": "бути",
      "example": "Ich bin müde."
    },
    {
      "word": "bleiben",
      "meaning": "залишатися",
      "example": "Ich bleibe hier."
    },
    {
      "word": "machen",
      "meaning": "робити",
      "example": "Ich mache das."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: якщо стан змінюється, часто вживають werden."
  },
  "study.important": [
    "werden і sein - не те саме.",
    "Ich werde müde = я втомлююся; Ich bin müde = я втомлений."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "werden",
        "Ich werde"
      ],
      "purple": [
        "ставати",
        "змінюється",
        "інший стан",
        "майбутнього часу",
        "пасивного стану"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "werde"
          ]
        },
        "lv": {
          "purple": [
            "втомлююся"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "wird"
          ]
        },
        "lv": {
          "purple": [
            "Стає"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "wird"
          ]
        },
        "lv": {
          "purple": [
            "стає",
            "лікаркою"
          ]
        }
      },
      {
        "de": {
          "red": [
            "bin"
          ]
        },
        "lv": {
          "purple": [
            "втомлений"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "werden"
          ]
        },
        "meaning": {
          "purple": [
            "ставати"
          ]
        },
        "example": {
          "blue": [
            "werde"
          ]
        }
      },
      {
        "word": {
          "green": [
            "sein"
          ]
        },
        "meaning": {
          "purple": [
            "бути"
          ]
        },
        "example": {
          "red": [
            "bin"
          ]
        }
      },
      {
        "word": {
          "green": [
            "bleiben"
          ]
        },
        "meaning": {
          "purple": [
            "залишатися"
          ]
        },
        "example": {
          "green": [
            "bleibe"
          ]
        }
      },
      {
        "word": {
          "green": [
            "machen"
          ]
        },
        "meaning": {
          "purple": [
            "робити"
          ]
        },
        "example": {
          "yellow": [
            "mache"
          ]
        }
      }
    ],
    "tip": {
      "left": {
        "blue": [
          "werden"
        ],
        "purple": [
          "стан змінюється"
        ]
      }
    },
    "important": [
      {
        "blue": [
          "werden"
        ],
        "red": [
          "sein"
        ]
      },
      {
        "blue": [
          "werde"
        ],
        "red": [
          "bin"
        ],
        "purple": [
          "втомлююся",
          "втомлений"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "стати",
  "study.translation": "стати",
  "study.explanation": "[\"Головна думка: werden на рівні A1 найчастіше означає стати.\",\"Він використовується, коли щось змінюється або стає іншим.\",\"Пізніше в німецькій мові werden також використовується для майбутній часi та пасивного стану.\",\"На рівні A1 найважливішою фразою є Ich werde müde. = Я втомлююся.\"]",
  "study.examples": "[{\"de\":\"Ich werde müde.\",\"lv\":\"я втомлююсь.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"стає холодно.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"вона стає лікарем.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"я втомився\"}]",
  "study.comparison": "[{\"word\":\"werden\",\"meaning\":\"стати\",\"example\":\"Я стаю втомленим.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Я втомлений.\"},{\"word\":\"bleiben\",\"meaning\":\"залишитися\",\"example\":\"Я залишаюся тут.\"},{\"word\":\"machen\",\"meaning\":\"робити / робити\",\"example\":\"Я це роблю.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: зміна/стан стає іншим → werden.\"}",
  "study.important": "[\"werden не те саме, що sein.\",\"Ich werde müde = я втомлююся; Ich bin müde = Я втомився.\"]"
}
```

---

## Finding 20

**Audit ID:** `LRB103-0020`
**Finding Stable ID:** `g2/a1/uk|Wetter|idx:658|lv, study.translation, study.examples|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `Wetter|idx:658`
**Field / path:** `lv, study.translation, study.examples`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**LV source (read-only):** laiks (laikapstākļi)
**DE reference (read-only):** Wetter
**CURRENT (captured scope):** {"lv":"час (погода)","study.translation":"час (погода)","study.examples":"[{\"de\":\"Wie ist das Wetter heute?\",\"lv\":\"котра сьогодні година?\"},{\"de\":\"Das Wetter ist schön.\",\"lv\":\"погода гарна.\"},{\"de\":\"Das Wetter ist schlecht.\",\"lv\":\"погода погана.\"},{\"de\":\"Im Winter ist das Wetter oft kalt.\",\"lv\":\"взимку часто холодна погода.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"ми говоримо про час.\"},{\"de\":\"Morgen wird das Wetter besser.\",\"lv\":\"завтра погода буде краща.\"}]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"погода","study.translation":"погода","study.explanation":"[\"Головна думка: das Wetter означає погоду - сонячну, дощову, холодну або теплу.\",\"Українською погода і час - різні слова; у німецькій їм відповідають Wetter і Zeit.\",\"Про стан атмосфери говорять із das Wetter: Wie ist das Wetter heute?\",\"das Wetter часто вживають зі словами warm, kalt, schön або schlecht.\",\"Не плутай das Wetter з die Zeit - часом як моментом або проміжком.\"]","study.examples":"[{\"de\":\"Wie ist das Wetter heute?\",\"lv\":\"Яка сьогодні погода?\"},{\"de\":\"Das Wetter ist schön.\",\"lv\":\"Погода гарна.\"},{\"de\":\"Das Wetter ist schlecht.\",\"lv\":\"Погода погана.\"},{\"de\":\"Im Winter ist das Wetter oft kalt.\",\"lv\":\"Узимку погода часто холодна.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Ми говоримо про погоду.\"},{\"de\":\"Morgen wird das Wetter besser.\",\"lv\":\"Завтра погода покращиться.\"}]","study.comparison":"[{\"word\":\"Wetter\",\"meaning\":\"погода\",\"example\":\"Das Wetter ist schön.\"},{\"word\":\"Zeit\",\"meaning\":\"час\",\"example\":\"Ich habe keine Zeit.\"},{\"word\":\"Regen\",\"meaning\":\"дощ\",\"example\":\"Es gibt viel Regen.\"},{\"word\":\"Sonne\",\"meaning\":\"сонце\",\"example\":\"Die Sonne scheint.\"}]","study.tip":"[\"Коли йдеться про сонце, дощ або температуру надворі, вживай das Wetter.\",\"Wie ist das Wetter? = Яка погода?\"]","study.important":"[\"das Wetter = погода, а не час.\",\"die Zeit = час як момент або проміжок.\"]","study.sectionAccents":{"explanation":{"blue":["Wetter","Zeit"],"purple":["погоду","час","стан атмосфери","моментом","проміжком"]},"examples":[{"de":{"blue":["Wetter"]},"lv":{"purple":["погода"]}},{"de":{"blue":["Wetter"]},"lv":{"purple":["Погода"]}},{"de":{"blue":["Wetter"]},"lv":{"purple":["Погода"]}},{"de":{"blue":["Wetter"],"yellow":["Winter"]},"lv":{"purple":["Узимку","погода"]}},{"de":{"blue":["Wetter"]},"lv":{"purple":["погоду"]}},{"de":{"blue":["Wetter"],"green":["besser"]},"lv":{"purple":["погода","покращиться"]}}],"comparison":[{"word":{"green":["Wetter"]},"meaning":{"purple":["погода"]},"example":{"blue":["Wetter"]}},{"word":{"green":["Zeit"]},"meaning":{"purple":["час"]},"example":{"green":["Zeit"]}},{"word":{"green":["Regen"]},"meaning":{"purple":["дощ"]},"example":{"green":["Regen"]}},{"word":{"green":["Sonne"]},"meaning":{"purple":["сонце"]},"example":{"green":["Sonne"]}}],"tip":[{"blue":["Wetter"],"purple":["сонце","дощ","температуру"]},{"blue":["Wetter"],"purple":["Яка погода","погода"]}],"important":[{"blue":["Wetter"],"purple":["погода","час"]},{"green":["Zeit"],"purple":["час"]}]}}
**Note:** GPT OWNER approved override: Headword means time instead of weather; examples and tip contradict the card; Latvian residue remains.

### Gala card (approved NEW composite)

```json
{
  "lv": "погода",
  "study.translation": "погода",
  "study.explanation": [
    "Головна думка: das Wetter означає погоду - сонячну, дощову, холодну або теплу.",
    "Українською погода і час - різні слова; у німецькій їм відповідають Wetter і Zeit.",
    "Про стан атмосфери говорять із das Wetter: Wie ist das Wetter heute?",
    "das Wetter часто вживають зі словами warm, kalt, schön або schlecht.",
    "Не плутай das Wetter з die Zeit - часом як моментом або проміжком."
  ],
  "study.examples": [
    {
      "de": "Wie ist das Wetter heute?",
      "lv": "Яка сьогодні погода?"
    },
    {
      "de": "Das Wetter ist schön.",
      "lv": "Погода гарна."
    },
    {
      "de": "Das Wetter ist schlecht.",
      "lv": "Погода погана."
    },
    {
      "de": "Im Winter ist das Wetter oft kalt.",
      "lv": "Узимку погода часто холодна."
    },
    {
      "de": "Wir sprechen über das Wetter.",
      "lv": "Ми говоримо про погоду."
    },
    {
      "de": "Morgen wird das Wetter besser.",
      "lv": "Завтра погода покращиться."
    }
  ],
  "study.comparison": [
    {
      "word": "Wetter",
      "meaning": "погода",
      "example": "Das Wetter ist schön."
    },
    {
      "word": "Zeit",
      "meaning": "час",
      "example": "Ich habe keine Zeit."
    },
    {
      "word": "Regen",
      "meaning": "дощ",
      "example": "Es gibt viel Regen."
    },
    {
      "word": "Sonne",
      "meaning": "сонце",
      "example": "Die Sonne scheint."
    }
  ],
  "study.tip": [
    "Коли йдеться про сонце, дощ або температуру надворі, вживай das Wetter.",
    "Wie ist das Wetter? = Яка погода?"
  ],
  "study.important": [
    "das Wetter = погода, а не час.",
    "die Zeit = час як момент або проміжок."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "Wetter",
        "Zeit"
      ],
      "purple": [
        "погоду",
        "час",
        "стан атмосфери",
        "моментом",
        "проміжком"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "Wetter"
          ]
        },
        "lv": {
          "purple": [
            "погода"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wetter"
          ]
        },
        "lv": {
          "purple": [
            "Погода"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wetter"
          ]
        },
        "lv": {
          "purple": [
            "Погода"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wetter"
          ],
          "yellow": [
            "Winter"
          ]
        },
        "lv": {
          "purple": [
            "Узимку",
            "погода"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wetter"
          ]
        },
        "lv": {
          "purple": [
            "погоду"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wetter"
          ],
          "green": [
            "besser"
          ]
        },
        "lv": {
          "purple": [
            "погода",
            "покращиться"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "Wetter"
          ]
        },
        "meaning": {
          "purple": [
            "погода"
          ]
        },
        "example": {
          "blue": [
            "Wetter"
          ]
        }
      },
      {
        "word": {
          "green": [
            "Zeit"
          ]
        },
        "meaning": {
          "purple": [
            "час"
          ]
        },
        "example": {
          "green": [
            "Zeit"
          ]
        }
      },
      {
        "word": {
          "green": [
            "Regen"
          ]
        },
        "meaning": {
          "purple": [
            "дощ"
          ]
        },
        "example": {
          "green": [
            "Regen"
          ]
        }
      },
      {
        "word": {
          "green": [
            "Sonne"
          ]
        },
        "meaning": {
          "purple": [
            "сонце"
          ]
        },
        "example": {
          "green": [
            "Sonne"
          ]
        }
      }
    ],
    "tip": [
      {
        "blue": [
          "Wetter"
        ],
        "purple": [
          "сонце",
          "дощ",
          "температуру"
        ]
      },
      {
        "blue": [
          "Wetter"
        ],
        "purple": [
          "Яка погода",
          "погода"
        ]
      }
    ],
    "important": [
      {
        "blue": [
          "Wetter"
        ],
        "purple": [
          "погода",
          "час"
        ]
      },
      {
        "green": [
          "Zeit"
        ],
        "purple": [
          "час"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "час (погода)",
  "study.translation": "час (погода)",
  "study.examples": "[{\"de\":\"Wie ist das Wetter heute?\",\"lv\":\"котра сьогодні година?\"},{\"de\":\"Das Wetter ist schön.\",\"lv\":\"погода гарна.\"},{\"de\":\"Das Wetter ist schlecht.\",\"lv\":\"погода погана.\"},{\"de\":\"Im Winter ist das Wetter oft kalt.\",\"lv\":\"взимку часто холодна погода.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"ми говоримо про час.\"},{\"de\":\"Morgen wird das Wetter besser.\",\"lv\":\"завтра погода буде краща.\"}]"
}
```

---

## Finding 21

**Audit ID:** `LRB103-0021`
**Finding Stable ID:** `g2/a1/uk|wie|idx:660|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0003`
**Lang:** uk
**Card:** `wie|idx:660`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** kā • cik
**DE reference (read-only):** wie
**CURRENT (captured scope):** {"lv":"як • скільки","study.translation":"як • скільки","study.explanation":"[\"Головна думка: wie запитує про вид або якість (як) і про кількість або кількість (скільки), залежно від контексту.\",\"Тільки wie (Wie geht's?) запитує про шлях - як латиською мовою.\",\"wie + прикметник (wie viel, wie alt, wie lange) запитують про кількість, вік або тривалість - скільки латиською мовою.\",\"wie viel(e) означає скільки; wie alt означає, скільки років; wie lange означає, скільки часу.\",\"У порівняннях wie означає те саме, що (so groß wie = розміром із).\"]","study.examples":"[{\"de\":\"Wie geht es dir?\",\"lv\":\"як справи\"},{\"de\":\"Wie heißt du?\",\"lv\":\"як тебе звуть\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"скільки це коштує\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"скільки тобі років\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"скільки триває фільм?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"він такий же високий, як і його батько.\"}]","study.tip":"[\"wie сам по собі = як (вид); wie + прикметник (viel/alt/lange) = скільки (обсяг).\",\"Для порівняння so ... wie = як ... як.\"]","study.important":"[\"wie viel(e) = скільки; wie alt = скільки років; wie lange = скільки часу.\",\"wie окремо (Wie...?) зазвичай = як, а не скільки.\",\"Неправильно: скільки тобі років? → Правильно: Як справи? (Wie geht's?)\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"як • скільки","study.translation":"як • скільки","study.explanation":"[\"Головна думка: wie запитує про спосіб або ознаку - як, а в певних сполуках про кількість - скільки.\",\"Саме wie у запитанні Wie geht es dir? перекладається словом «як».\",\"Сполуки wie viel, wie alt і wie lange запитують про кількість, вік або тривалість.\",\"wie viel(e) = скільки; wie alt = скільки років; wie lange = як довго.\",\"У порівнянні so ... wie означає такий самий ... як.\"]","study.examples":"[{\"de\":\"Wie geht es dir?\",\"lv\":\"Як у тебе справи?\"},{\"de\":\"Wie heißt du?\",\"lv\":\"Як тебе звати?\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"Скільки це коштує?\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"Скільки тобі років?\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"Як довго триває фільм?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"Він такий самий високий, як і його батько.\"}]","study.tip":"[\"wie саме по собі часто означає як; у сполуках wie viel або wie alt - скільки.\",\"У порівнянні so ... wie = такий самий ... як.\"]","study.important":"[\"wie viel(e) = скільки; wie alt = скільки років; wie lange = як довго.\",\"Саме wie зазвичай означає «як», а не «скільки».\",\"Неправильно: Скільки в тебе справи? Правильно: Як у тебе справи?\"]","study.sectionAccents":{"explanation":{"blue":["wie"],"purple":["як","скільки","кількість","вік","тривалість","як довго"]},"examples":[{"de":{"blue":["Wie"]},"lv":{"purple":["Як"]}},{"de":{"blue":["Wie"]},"lv":{"purple":["Як"]}},{"de":{"blue":["Wie"]},"lv":{"purple":["Скільки"]}},{"de":{"blue":["Wie"]},"lv":{"purple":["Скільки"]}},{"de":{"blue":["Wie"]},"lv":{"purple":["Як довго"]}},{"de":{"blue":["wie"]},"lv":{"purple":["такий самий","як і"]}}],"tip":[{"blue":["wie"],"purple":["як","скільки"]},{"purple":["як","такий самий"]}],"important":[{"purple":["як","скільки","як довго"]},{"purple":["як","скільки"]},{"purple":["Неправильно","Правильно"]}]}}
**Note:** GPT OWNER approved override: Latvian residue, duplicated wording and a false important example; several sentences lack punctuation.

### Gala card (approved NEW composite)

```json
{
  "lv": "як • скільки",
  "study.translation": "як • скільки",
  "study.explanation": [
    "Головна думка: wie запитує про спосіб або ознаку - як, а в певних сполуках про кількість - скільки.",
    "Саме wie у запитанні Wie geht es dir? перекладається словом «як».",
    "Сполуки wie viel, wie alt і wie lange запитують про кількість, вік або тривалість.",
    "wie viel(e) = скільки; wie alt = скільки років; wie lange = як довго.",
    "У порівнянні so ... wie означає такий самий ... як."
  ],
  "study.examples": [
    {
      "de": "Wie geht es dir?",
      "lv": "Як у тебе справи?"
    },
    {
      "de": "Wie heißt du?",
      "lv": "Як тебе звати?"
    },
    {
      "de": "Wie viel kostet das?",
      "lv": "Скільки це коштує?"
    },
    {
      "de": "Wie alt bist du?",
      "lv": "Скільки тобі років?"
    },
    {
      "de": "Wie lange dauert der Film?",
      "lv": "Як довго триває фільм?"
    },
    {
      "de": "Er ist so groß wie sein Vater.",
      "lv": "Він такий самий високий, як і його батько."
    }
  ],
  "study.tip": [
    "wie саме по собі часто означає як; у сполуках wie viel або wie alt - скільки.",
    "У порівнянні so ... wie = такий самий ... як."
  ],
  "study.important": [
    "wie viel(e) = скільки; wie alt = скільки років; wie lange = як довго.",
    "Саме wie зазвичай означає «як», а не «скільки».",
    "Неправильно: Скільки в тебе справи? Правильно: Як у тебе справи?"
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "wie"
      ],
      "purple": [
        "як",
        "скільки",
        "кількість",
        "вік",
        "тривалість",
        "як довго"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "Wie"
          ]
        },
        "lv": {
          "purple": [
            "Як"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wie"
          ]
        },
        "lv": {
          "purple": [
            "Як"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wie"
          ]
        },
        "lv": {
          "purple": [
            "Скільки"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wie"
          ]
        },
        "lv": {
          "purple": [
            "Скільки"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Wie"
          ]
        },
        "lv": {
          "purple": [
            "Як довго"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "wie"
          ]
        },
        "lv": {
          "purple": [
            "такий самий",
            "як і"
          ]
        }
      }
    ],
    "tip": [
      {
        "blue": [
          "wie"
        ],
        "purple": [
          "як",
          "скільки"
        ]
      },
      {
        "purple": [
          "як",
          "такий самий"
        ]
      }
    ],
    "important": [
      {
        "purple": [
          "як",
          "скільки",
          "як довго"
        ]
      },
      {
        "purple": [
          "як",
          "скільки"
        ]
      },
      {
        "purple": [
          "Неправильно",
          "Правильно"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "як • скільки",
  "study.translation": "як • скільки",
  "study.explanation": "[\"Головна думка: wie запитує про вид або якість (як) і про кількість або кількість (скільки), залежно від контексту.\",\"Тільки wie (Wie geht's?) запитує про шлях - як латиською мовою.\",\"wie + прикметник (wie viel, wie alt, wie lange) запитують про кількість, вік або тривалість - скільки латиською мовою.\",\"wie viel(e) означає скільки; wie alt означає, скільки років; wie lange означає, скільки часу.\",\"У порівняннях wie означає те саме, що (so groß wie = розміром із).\"]",
  "study.examples": "[{\"de\":\"Wie geht es dir?\",\"lv\":\"як справи\"},{\"de\":\"Wie heißt du?\",\"lv\":\"як тебе звуть\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"скільки це коштує\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"скільки тобі років\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"скільки триває фільм?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"він такий же високий, як і його батько.\"}]",
  "study.tip": "[\"wie сам по собі = як (вид); wie + прикметник (viel/alt/lange) = скільки (обсяг).\",\"Для порівняння so ... wie = як ... як.\"]",
  "study.important": "[\"wie viel(e) = скільки; wie alt = скільки років; wie lange = скільки часу.\",\"wie окремо (Wie...?) зазвичай = як, а не скільки.\",\"Неправильно: скільки тобі років? → Правильно: Як справи? (Wie geht's?)\"]"
}
```

---

## Finding 22

**Audit ID:** `LRB103-0022`
**Finding Stable ID:** `g2/a1/uk|wissen|idx:311|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `wissen|idx:311`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** zināt
**DE reference (read-only):** wissen
**CURRENT (captured scope):** {"lv":"знати","study.translation":"знати","study.explanation":"[\"Головна думка: знати факт, відповідь або інформацію.\",\"wissen в основному означає: інформація/факт.\",\"Часто характеризується: відповідями, даними.\",\"wissen використовується, коли ви знаєте факт, відповідь або інформацію.\"]","study.examples":"[{\"de\":\"Ich weiß, wo er wohnt.\",\"lv\":\"Я знаю, де він живе.\"},{\"de\":\"Woher wissen Sie das?\",\"lv\":\"звідки ти це знаєш?\"},{\"de\":\"Ich weiß die Antwort.\",\"lv\":\"я знаю відповідь.\"}]","study.comparison":"[{\"word\":\"wissen\",\"meaning\":\"знати (факт, інформація)\",\"example\":\"Ich weiß, wo er wohnt. – Я знаю, де він живе.\"},{\"word\":\"kennen\",\"meaning\":\"знати (особу, місце, річ)\",\"example\":\"Ich kenne die Stadt. – Я знаю місто.\"}]","study.tip":"[\"wissen = знати\",\"Використовується в wissen, коли контекст відповідає цьому значенню.\"]","study.important":"[\"wissen = знати факт.\",\"wissen = знати.\",\"Знати факт, відповідь або інформацію.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"знати","study.translation":"знати","study.explanation":"[\"Головна думка: wissen означає знати факт, відповідь або інформацію.\",\"wissen вживають, коли людина володіє певними відомостями.\",\"Після wissen часто стоїть підрядне речення: Ich weiß, wo er wohnt.\",\"На відміну від kennen, wissen не означає бути знайомим із людиною, місцем або предметом.\"]","study.examples":"[{\"de\":\"Ich weiß, wo er wohnt.\",\"lv\":\"Я знаю, де він живе.\"},{\"de\":\"Woher wissen Sie das?\",\"lv\":\"Звідки Ви це знаєте?\"},{\"de\":\"Ich weiß die Antwort.\",\"lv\":\"Я знаю відповідь.\"}]","study.comparison":"[{\"word\":\"wissen\",\"meaning\":\"знати факт або інформацію\",\"example\":\"Ich weiß, wo er wohnt. – Я знаю, де він живе.\"},{\"word\":\"kennen\",\"meaning\":\"знати когось / бути знайомим із чимось\",\"example\":\"Ich kenne die Stadt. – Я знаю це місто.\"}]","study.tip":"[\"wissen = знати факт або відповідь.\",\"kennen = знати когось або бути знайомим із чимось.\"]","study.important":"[\"wissen стосується фактів та інформації.\",\"kennen стосується знайомства з людиною, місцем або предметом.\"]","study.sectionAccents":{"explanation":{"green":["wissen"],"purple":["знати","факт","відповідь","інформацію","відомостями","бути знайомим"]},"examples":[{"de":{},"lv":{"purple":["знаю"]}},{"de":{"green":["wissen"]},"lv":{"purple":["Ви","знаєте"]}},{"de":{},"lv":{"purple":["знаю","відповідь"]}}],"comparison":[{"word":{},"meaning":{"purple":["знати","факт","інформацію"]},"example":{}},{"word":{},"meaning":{"purple":["знати когось","бути знайомим"]},"example":{}}],"tip":[{"purple":["факт","відповідь"]},{"purple":["знайомим"]}],"important":[{"green":["wissen"],"purple":["факт","інформації"]},{"purple":["знайомства"]}]}}
**Note:** GPT OWNER approved override: Formal Sie was translated as informal ти; kennen/wissen contrast is too weak and the card is repetitive.

### Gala card (approved NEW composite)

```json
{
  "lv": "знати",
  "study.translation": "знати",
  "study.explanation": [
    "Головна думка: wissen означає знати факт, відповідь або інформацію.",
    "wissen вживають, коли людина володіє певними відомостями.",
    "Після wissen часто стоїть підрядне речення: Ich weiß, wo er wohnt.",
    "На відміну від kennen, wissen не означає бути знайомим із людиною, місцем або предметом."
  ],
  "study.examples": [
    {
      "de": "Ich weiß, wo er wohnt.",
      "lv": "Я знаю, де він живе."
    },
    {
      "de": "Woher wissen Sie das?",
      "lv": "Звідки Ви це знаєте?"
    },
    {
      "de": "Ich weiß die Antwort.",
      "lv": "Я знаю відповідь."
    }
  ],
  "study.comparison": [
    {
      "word": "wissen",
      "meaning": "знати факт або інформацію",
      "example": "Ich weiß, wo er wohnt. – Я знаю, де він живе."
    },
    {
      "word": "kennen",
      "meaning": "знати когось / бути знайомим із чимось",
      "example": "Ich kenne die Stadt. – Я знаю це місто."
    }
  ],
  "study.tip": [
    "wissen = знати факт або відповідь.",
    "kennen = знати когось або бути знайомим із чимось."
  ],
  "study.important": [
    "wissen стосується фактів та інформації.",
    "kennen стосується знайомства з людиною, місцем або предметом."
  ],
  "study.sectionAccents": {
    "explanation": {
      "green": [
        "wissen"
      ],
      "purple": [
        "знати",
        "факт",
        "відповідь",
        "інформацію",
        "відомостями",
        "бути знайомим"
      ]
    },
    "examples": [
      {
        "de": {},
        "lv": {
          "purple": [
            "знаю"
          ]
        }
      },
      {
        "de": {
          "green": [
            "wissen"
          ]
        },
        "lv": {
          "purple": [
            "Ви",
            "знаєте"
          ]
        }
      },
      {
        "de": {},
        "lv": {
          "purple": [
            "знаю",
            "відповідь"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {},
        "meaning": {
          "purple": [
            "знати",
            "факт",
            "інформацію"
          ]
        },
        "example": {}
      },
      {
        "word": {},
        "meaning": {
          "purple": [
            "знати когось",
            "бути знайомим"
          ]
        },
        "example": {}
      }
    ],
    "tip": [
      {
        "purple": [
          "факт",
          "відповідь"
        ]
      },
      {
        "purple": [
          "знайомим"
        ]
      }
    ],
    "important": [
      {
        "green": [
          "wissen"
        ],
        "purple": [
          "факт",
          "інформації"
        ]
      },
      {
        "purple": [
          "знайомства"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "знати",
  "study.translation": "знати",
  "study.explanation": "[\"Головна думка: знати факт, відповідь або інформацію.\",\"wissen в основному означає: інформація/факт.\",\"Часто характеризується: відповідями, даними.\",\"wissen використовується, коли ви знаєте факт, відповідь або інформацію.\"]",
  "study.examples": "[{\"de\":\"Ich weiß, wo er wohnt.\",\"lv\":\"Я знаю, де він живе.\"},{\"de\":\"Woher wissen Sie das?\",\"lv\":\"звідки ти це знаєш?\"},{\"de\":\"Ich weiß die Antwort.\",\"lv\":\"я знаю відповідь.\"}]",
  "study.comparison": "[{\"word\":\"wissen\",\"meaning\":\"знати (факт, інформація)\",\"example\":\"Ich weiß, wo er wohnt. – Я знаю, де він живе.\"},{\"word\":\"kennen\",\"meaning\":\"знати (особу, місце, річ)\",\"example\":\"Ich kenne die Stadt. – Я знаю місто.\"}]",
  "study.tip": "[\"wissen = знати\",\"Використовується в wissen, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"wissen = знати факт.\",\"wissen = знати.\",\"Знати факт, відповідь або інформацію.\"]"
}
```

---

## Finding 23

**Audit ID:** `LRB103-0023`
**Finding Stable ID:** `g2/a1/uk|Zeit|idx:699|lv and study target-language fields|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `Zeit|idx:699`
**Field / path:** `lv and study target-language fields`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** laiks (brīdis / laika posms)
**DE reference (read-only):** Zeit
**CURRENT (captured scope):** {"lv":"час (момент/проміжок часу)","study target-language fields":null}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"час","study.translation":"час","study.explanation":"[\"Головна думка: die Zeit означає час як поняття, момент або проміжок.\",\"die Zeit вживають, коли говорять про наявність часу: Ich habe Zeit.\",\"Це абстрактне поняття, а не назва годинника.\",\"У вислові Ich habe keine Zeit слово Zeit означає, що часу немає.\"]","study.examples":"[{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Я не маю часу.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Я не маю часу.\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"У тебе є час?\"},{\"de\":\"Die Zeit vergeht schnell.\",\"lv\":\"Час минає швидко.\"}]","study.tip":"[\"die Zeit = час як поняття або проміжок.\",\"Для годинника чи точної години вживають die Uhr.\"]","study.important":"[\"die Zeit означає час, яким людина може або не може розпоряджатися.\",\"die Uhr означає годинник або точну годину.\"]","study.sectionAccents":{"explanation":{"green":["die Zeit","Zeit"],"yellow":["Zeit"],"purple":["час","момент","проміжок","наявність часу","годинника"]},"examples":[{"de":{"green":["Zeit"]},"lv":{"purple":["часу"]}},{"de":{"green":["Zeit"]},"lv":{"purple":["часу"]}},{"de":{"green":["Zeit"]},"lv":{"purple":["час"]}},{"de":{"green":["Die Zeit","Zeit"]},"lv":{"purple":["Час"]}}],"tip":[{"purple":["час","проміжок"]},{"purple":["годинника","точної години"]}],"important":[{"green":["die Zeit"],"purple":["час","розпоряджатися"]},{}]}}
**Note:** GPT OWNER approved override: Duplicate example and important bullets, informal/formal mismatch and mechanically repetitive wording.

### Gala card (approved NEW composite)

```json
{
  "lv": "час",
  "study.translation": "час",
  "study.explanation": [
    "Головна думка: die Zeit означає час як поняття, момент або проміжок.",
    "die Zeit вживають, коли говорять про наявність часу: Ich habe Zeit.",
    "Це абстрактне поняття, а не назва годинника.",
    "У вислові Ich habe keine Zeit слово Zeit означає, що часу немає."
  ],
  "study.examples": [
    {
      "de": "Ich habe keine Zeit.",
      "lv": "Я не маю часу."
    },
    {
      "de": "Ich habe keine Zeit.",
      "lv": "Я не маю часу."
    },
    {
      "de": "Hast du Zeit?",
      "lv": "У тебе є час?"
    },
    {
      "de": "Die Zeit vergeht schnell.",
      "lv": "Час минає швидко."
    }
  ],
  "study.tip": [
    "die Zeit = час як поняття або проміжок.",
    "Для годинника чи точної години вживають die Uhr."
  ],
  "study.important": [
    "die Zeit означає час, яким людина може або не може розпоряджатися.",
    "die Uhr означає годинник або точну годину."
  ],
  "study.sectionAccents": {
    "explanation": {
      "green": [
        "die Zeit",
        "Zeit"
      ],
      "yellow": [
        "Zeit"
      ],
      "purple": [
        "час",
        "момент",
        "проміжок",
        "наявність часу",
        "годинника"
      ]
    },
    "examples": [
      {
        "de": {
          "green": [
            "Zeit"
          ]
        },
        "lv": {
          "purple": [
            "часу"
          ]
        }
      },
      {
        "de": {
          "green": [
            "Zeit"
          ]
        },
        "lv": {
          "purple": [
            "часу"
          ]
        }
      },
      {
        "de": {
          "green": [
            "Zeit"
          ]
        },
        "lv": {
          "purple": [
            "час"
          ]
        }
      },
      {
        "de": {
          "green": [
            "Die Zeit",
            "Zeit"
          ]
        },
        "lv": {
          "purple": [
            "Час"
          ]
        }
      }
    ],
    "tip": [
      {
        "purple": [
          "час",
          "проміжок"
        ]
      },
      {
        "purple": [
          "годинника",
          "точної години"
        ]
      }
    ],
    "important": [
      {
        "green": [
          "die Zeit"
        ],
        "purple": [
          "час",
          "розпоряджатися"
        ]
      },
      {}
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "час (момент/проміжок часу)",
  "study target-language fields": null
}
```

---

## Finding 24

**Audit ID:** `LRB103-0024`
**Finding Stable ID:** `g2/a1/uk|zu|idx:668|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `zu|idx:668`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** uz • pie
**DE reference (read-only):** zu
**CURRENT (captured scope):** {"lv":"до • при","study.translation":"до • при","study.explanation":"[\"Головна думка: zu дуже часто означає to або at, але також відіграє роль з інфінітивом.\",\"З людьми та установами zu часто означає на або до.\",\"З прикметникиem zu також може означати.\",\"У конструкції zu + nenoteiksme це допомагає утворити неправильність: zu lernen, zu gehen.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Я йду до лікаря.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"ми ходимо до школи.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"це занадто дорого.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"Я не маю часу вчитися.\"}]","study.comparison":"[{\"word\":\"zu\",\"meaning\":\"до / на / теж / інфінітив\",\"example\":\"Я йду до лікаря.\"},{\"word\":\"nach\",\"meaning\":\"з містами/країнами\",\"example\":\"Я їду в Берлін.\"},{\"word\":\"in\",\"meaning\":\"в / до місця\",\"example\":\"Я йду до школи.\"},{\"word\":\"bei\",\"meaning\":\"у когось / на роботі\",\"example\":\"Я у Ганни.\"}]","study.tip":"{\"text\":\"Пам'ятай: у лікаря → zum Arzt; занадто дорого → zu teuer.\"}","study.important":"[\"zu має багато застосувань, тому завжди дивіться на конструкцію.\",\"zu teuer означає «надто дорого», а не «надто дорого».\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"до","study.translation":"до","study.explanation":"[\"Головна думка: zu часто означає до, але також позначає надмірну міру та вживається перед інфінітивом.\",\"З людьми й установами zu часто виражає рух до когось або кудись.\",\"Перед прикметником zu означає надто: zu teuer = надто дорого.\",\"У конструкції zu + інфінітив воно стоїть перед дієсловом: zu lernen, zu gehen.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Я йду до лікаря.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"Ми йдемо до школи.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"Це надто дорого.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"Я не маю часу вчитися.\"}]","study.comparison":"[{\"word\":\"zu\",\"meaning\":\"до / надто / частка перед інфінітивом\",\"example\":\"Ich gehe zum Arzt.\"},{\"word\":\"nach\",\"meaning\":\"до з назвами міст і країн\",\"example\":\"Ich fahre nach Berlin.\"},{\"word\":\"in\",\"meaning\":\"у / всередину\",\"example\":\"Ich gehe in die Schule.\"},{\"word\":\"bei\",\"meaning\":\"у когось / біля\",\"example\":\"Ich bin bei Anna.\"}]","study.tip":"{\"text\":\"Запам'ятай: zum Arzt = до лікаря; zu teuer = надто дорого.\"}","study.important":"[\"zu має кілька різних функцій, тому завжди перевіряй конструкцію.\",\"zu teuer означає «надто дорого», а не напрямок руху.\"]","study.sectionAccents":{"explanation":{"blue":["zu","zu lernen","zu gehen"],"purple":["до","надмірну міру","інфінітивом","рух","надто"]},"examples":[{"de":{"blue":["zum Arzt"]},"lv":{"purple":["до лікаря"]}},{"de":{"blue":["zur Schule"]},"lv":{"purple":["до школи"]}},{"de":{"blue":["zu teuer"]},"lv":{"purple":["надто дорого"]}},{"de":{"blue":["zu lernen"]},"lv":{"purple":["вчитися"]}}],"comparison":[{"word":{"green":["zu"]},"meaning":{"purple":["до","надто","інфінітивом"]},"example":{"blue":["zum Arzt"]}},{"word":{"green":["nach"]},"meaning":{"purple":["до"]},"example":{"yellow":["nach Berlin"]}},{"word":{"green":["in"]},"meaning":{"purple":["у","всередину"]},"example":{"green":["in die Schule"]}},{"word":{"green":["bei"]},"meaning":{"purple":["у когось"]},"example":{"red":["bei Anna"]}}],"tip":{"left":{"blue":["zum Arzt","zu teuer"],"purple":["до лікаря","надто дорого"]}},"important":[{"blue":["zu"],"purple":["різних функцій"]},{"blue":["zu teuer"],"purple":["надто дорого","напрямок руху"]}]}}
**Note:** GPT OWNER approved override: Wrong headword при, English/Latvian residue, broken grammar and mistranslated comparison examples.

### Gala card (approved NEW composite)

```json
{
  "lv": "до",
  "study.translation": "до",
  "study.explanation": [
    "Головна думка: zu часто означає до, але також позначає надмірну міру та вживається перед інфінітивом.",
    "З людьми й установами zu часто виражає рух до когось або кудись.",
    "Перед прикметником zu означає надто: zu teuer = надто дорого.",
    "У конструкції zu + інфінітив воно стоїть перед дієсловом: zu lernen, zu gehen."
  ],
  "study.examples": [
    {
      "de": "Ich gehe zum Arzt.",
      "lv": "Я йду до лікаря."
    },
    {
      "de": "Wir gehen zur Schule.",
      "lv": "Ми йдемо до школи."
    },
    {
      "de": "Das ist zu teuer.",
      "lv": "Це надто дорого."
    },
    {
      "de": "Ich habe keine Zeit zu lernen.",
      "lv": "Я не маю часу вчитися."
    }
  ],
  "study.comparison": [
    {
      "word": "zu",
      "meaning": "до / надто / частка перед інфінітивом",
      "example": "Ich gehe zum Arzt."
    },
    {
      "word": "nach",
      "meaning": "до з назвами міст і країн",
      "example": "Ich fahre nach Berlin."
    },
    {
      "word": "in",
      "meaning": "у / всередину",
      "example": "Ich gehe in die Schule."
    },
    {
      "word": "bei",
      "meaning": "у когось / біля",
      "example": "Ich bin bei Anna."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: zum Arzt = до лікаря; zu teuer = надто дорого."
  },
  "study.important": [
    "zu має кілька різних функцій, тому завжди перевіряй конструкцію.",
    "zu teuer означає «надто дорого», а не напрямок руху."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "zu",
        "zu lernen",
        "zu gehen"
      ],
      "purple": [
        "до",
        "надмірну міру",
        "інфінітивом",
        "рух",
        "надто"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "zum Arzt"
          ]
        },
        "lv": {
          "purple": [
            "до лікаря"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "zur Schule"
          ]
        },
        "lv": {
          "purple": [
            "до школи"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "zu teuer"
          ]
        },
        "lv": {
          "purple": [
            "надто дорого"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "zu lernen"
          ]
        },
        "lv": {
          "purple": [
            "вчитися"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "zu"
          ]
        },
        "meaning": {
          "purple": [
            "до",
            "надто",
            "інфінітивом"
          ]
        },
        "example": {
          "blue": [
            "zum Arzt"
          ]
        }
      },
      {
        "word": {
          "green": [
            "nach"
          ]
        },
        "meaning": {
          "purple": [
            "до"
          ]
        },
        "example": {
          "yellow": [
            "nach Berlin"
          ]
        }
      },
      {
        "word": {
          "green": [
            "in"
          ]
        },
        "meaning": {
          "purple": [
            "у",
            "всередину"
          ]
        },
        "example": {
          "green": [
            "in die Schule"
          ]
        }
      },
      {
        "word": {
          "green": [
            "bei"
          ]
        },
        "meaning": {
          "purple": [
            "у когось"
          ]
        },
        "example": {
          "red": [
            "bei Anna"
          ]
        }
      }
    ],
    "tip": {
      "left": {
        "blue": [
          "zum Arzt",
          "zu teuer"
        ],
        "purple": [
          "до лікаря",
          "надто дорого"
        ]
      }
    },
    "important": [
      {
        "blue": [
          "zu"
        ],
        "purple": [
          "різних функцій"
        ]
      },
      {
        "blue": [
          "zu teuer"
        ],
        "purple": [
          "надто дорого",
          "напрямок руху"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "до • при",
  "study.translation": "до • при",
  "study.explanation": "[\"Головна думка: zu дуже часто означає to або at, але також відіграє роль з інфінітивом.\",\"З людьми та установами zu часто означає на або до.\",\"З прикметникиem zu також може означати.\",\"У конструкції zu + nenoteiksme це допомагає утворити неправильність: zu lernen, zu gehen.\"]",
  "study.examples": "[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Я йду до лікаря.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"ми ходимо до школи.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"це занадто дорого.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"Я не маю часу вчитися.\"}]",
  "study.comparison": "[{\"word\":\"zu\",\"meaning\":\"до / на / теж / інфінітив\",\"example\":\"Я йду до лікаря.\"},{\"word\":\"nach\",\"meaning\":\"з містами/країнами\",\"example\":\"Я їду в Берлін.\"},{\"word\":\"in\",\"meaning\":\"в / до місця\",\"example\":\"Я йду до школи.\"},{\"word\":\"bei\",\"meaning\":\"у когось / на роботі\",\"example\":\"Я у Ганни.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: у лікаря → zum Arzt; занадто дорого → zu teuer.\"}",
  "study.important": "[\"zu має багато застосувань, тому завжди дивіться на конструкцію.\",\"zu teuer означає «надто дорого», а не «надто дорого».\"]"
}
```

---

## Finding 25

**Audit ID:** `LRB103-0025`
**Finding Stable ID:** `g2/a1/uk|Zug|idx:671|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `Zug|idx:671`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**LV source (read-only):** vilciens
**DE reference (read-only):** Zug
**CURRENT (captured scope):** {"lv":"поїзд","study.translation":"поїзд","study.explanation":"[\"Головна думка: der Zug A1 рівень найчастіше означає потяг.\",\"Він використовується в повсякденних ситуаціях під час водіння, прибуття та виїзду.\",\"У деяких інших значеннях Zug може бути маршем, чернеткою або особливістю, але це не основні значення A1.\",\"Дуже поширеними є фрази mit dem Zug fahren і Der Zug kommt.\"]","study.examples":"[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"поїзд прибуває о восьмій.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"я подорожую поїздом\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"потяг повний.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"автобус приходить пізніше.\"}]","study.comparison":"[{\"word\":\"der Zug\",\"meaning\":\"поїзд\",\"example\":\"Поїзд приходить.\"},{\"word\":\"die Bahn\",\"meaning\":\"залізниця / подорож потягом\",\"example\":\"Я їду залізницею.\"},{\"word\":\"der Bus\",\"meaning\":\"автобус\",\"example\":\"Автобус приходить.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"трамвай\",\"example\":\"Трамвай тут.\"}]","study.tip":"{\"text\":\"Пам'ятай: конкретний поїзд → der Zug.\"}","study.important":"[\"der Zug слід читати як «поїзд» у назві.\",\"Більш рідкісні значення не потрібні в основному заголовку A1.\"]"}
**PROPOSED:** —
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW:** {"lv":"поїзд","study.translation":"поїзд","study.explanation":"[\"Головна думка: на рівні A1 der Zug найчастіше означає поїзд.\",\"Це слово вживають у повсякденних ситуаціях, коли говорять про поїздку, прибуття або відправлення.\",\"В інших контекстах Zug може означати хід, протяг або рису, але це не основні значення рівня A1.\",\"Поширені сполуки: mit dem Zug fahren і Der Zug kommt.\"]","study.examples":"[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"Поїзд прибуває о восьмій годині.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"Я їду поїздом.\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"Поїзд переповнений.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"Автобус прибуде пізніше.\"}]","study.comparison":"[{\"word\":\"der Zug\",\"meaning\":\"поїзд\",\"example\":\"Der Zug kommt.\"},{\"word\":\"die Bahn\",\"meaning\":\"залізниця / залізничний транспорт\",\"example\":\"Ich fahre mit der Bahn.\"},{\"word\":\"der Bus\",\"meaning\":\"автобус\",\"example\":\"Der Bus kommt.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"трамвай\",\"example\":\"Die Straßenbahn ist hier.\"}]","study.tip":"{\"text\":\"Запам'ятай: конкретний поїзд - der Zug.\"}","study.important":"[\"У заголовку рівня A1 der Zug означає поїзд.\",\"Рідкісні значення не потрібно додавати до головного перекладу.\"]","study.sectionAccents":{"explanation":{"blue":["der Zug","Zug","mit dem Zug fahren"],"purple":["поїзд","поїздку","прибуття","відправлення","хід","протяг","рису"]},"examples":[{"de":{"blue":["Zug"]},"lv":{"purple":["Поїзд","прибуває"]}},{"de":{"blue":["mit dem Zug"]},"lv":{"purple":["їду поїздом"]}},{"de":{"blue":["Zug"]},"lv":{"purple":["Поїзд","переповнений"]}},{"de":{"red":["Bus"]},"lv":{"purple":["Автобус","прибуде"]}}],"comparison":[{"word":{"green":["der Zug"]},"meaning":{"purple":["поїзд"]},"example":{"blue":["Zug"]}},{"word":{"green":["die Bahn"]},"meaning":{"purple":["залізниця","залізничний транспорт"]},"example":{"green":["Bahn"]}},{"word":{"green":["der Bus"]},"meaning":{"purple":["автобус"]},"example":{"yellow":["Bus"]}},{"word":{"green":["die Straßenbahn"]},"meaning":{"purple":["трамвай"]},"example":{"red":["Straßenbahn"]}}],"tip":{"left":{"blue":["der Zug"],"purple":["конкретний поїзд"]}},"important":[{"blue":["der Zug"]},{"purple":["Рідкісні значення","головного перекладу"]}]}}
**Note:** GPT OWNER approved override: Wrong rare meanings, unnatural travel vocabulary, inconsistent поїзд/потяг and translated comparison DE examples.

### Gala card (approved NEW composite)

```json
{
  "lv": "поїзд",
  "study.translation": "поїзд",
  "study.explanation": [
    "Головна думка: на рівні A1 der Zug найчастіше означає поїзд.",
    "Це слово вживають у повсякденних ситуаціях, коли говорять про поїздку, прибуття або відправлення.",
    "В інших контекстах Zug може означати хід, протяг або рису, але це не основні значення рівня A1.",
    "Поширені сполуки: mit dem Zug fahren і Der Zug kommt."
  ],
  "study.examples": [
    {
      "de": "Der Zug kommt um acht Uhr.",
      "lv": "Поїзд прибуває о восьмій годині."
    },
    {
      "de": "Ich fahre mit dem Zug.",
      "lv": "Я їду поїздом."
    },
    {
      "de": "Der Zug ist voll.",
      "lv": "Поїзд переповнений."
    },
    {
      "de": "Der Bus kommt später.",
      "lv": "Автобус прибуде пізніше."
    }
  ],
  "study.comparison": [
    {
      "word": "der Zug",
      "meaning": "поїзд",
      "example": "Der Zug kommt."
    },
    {
      "word": "die Bahn",
      "meaning": "залізниця / залізничний транспорт",
      "example": "Ich fahre mit der Bahn."
    },
    {
      "word": "der Bus",
      "meaning": "автобус",
      "example": "Der Bus kommt."
    },
    {
      "word": "die Straßenbahn",
      "meaning": "трамвай",
      "example": "Die Straßenbahn ist hier."
    }
  ],
  "study.tip": {
    "text": "Запам'ятай: конкретний поїзд - der Zug."
  },
  "study.important": [
    "У заголовку рівня A1 der Zug означає поїзд.",
    "Рідкісні значення не потрібно додавати до головного перекладу."
  ],
  "study.sectionAccents": {
    "explanation": {
      "blue": [
        "der Zug",
        "Zug",
        "mit dem Zug fahren"
      ],
      "purple": [
        "поїзд",
        "поїздку",
        "прибуття",
        "відправлення",
        "хід",
        "протяг",
        "рису"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "Zug"
          ]
        },
        "lv": {
          "purple": [
            "Поїзд",
            "прибуває"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "mit dem Zug"
          ]
        },
        "lv": {
          "purple": [
            "їду поїздом"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Zug"
          ]
        },
        "lv": {
          "purple": [
            "Поїзд",
            "переповнений"
          ]
        }
      },
      {
        "de": {
          "red": [
            "Bus"
          ]
        },
        "lv": {
          "purple": [
            "Автобус",
            "прибуде"
          ]
        }
      }
    ],
    "comparison": [
      {
        "word": {
          "green": [
            "der Zug"
          ]
        },
        "meaning": {
          "purple": [
            "поїзд"
          ]
        },
        "example": {
          "blue": [
            "Zug"
          ]
        }
      },
      {
        "word": {
          "green": [
            "die Bahn"
          ]
        },
        "meaning": {
          "purple": [
            "залізниця",
            "залізничний транспорт"
          ]
        },
        "example": {
          "green": [
            "Bahn"
          ]
        }
      },
      {
        "word": {
          "green": [
            "der Bus"
          ]
        },
        "meaning": {
          "purple": [
            "автобус"
          ]
        },
        "example": {
          "yellow": [
            "Bus"
          ]
        }
      },
      {
        "word": {
          "green": [
            "die Straßenbahn"
          ]
        },
        "meaning": {
          "purple": [
            "трамвай"
          ]
        },
        "example": {
          "red": [
            "Straßenbahn"
          ]
        }
      }
    ],
    "tip": {
      "left": {
        "blue": [
          "der Zug"
        ],
        "purple": [
          "конкретний поїзд"
        ]
      }
    },
    "important": [
      {
        "blue": [
          "der Zug"
        ]
      },
      {
        "purple": [
          "Рідкісні значення",
          "головного перекладу"
        ]
      }
    ]
  }
}
```

### Gala card (previous CURRENT composite)

```json
{
  "lv": "поїзд",
  "study.translation": "поїзд",
  "study.explanation": "[\"Головна думка: der Zug A1 рівень найчастіше означає потяг.\",\"Він використовується в повсякденних ситуаціях під час водіння, прибуття та виїзду.\",\"У деяких інших значеннях Zug може бути маршем, чернеткою або особливістю, але це не основні значення A1.\",\"Дуже поширеними є фрази mit dem Zug fahren і Der Zug kommt.\"]",
  "study.examples": "[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"поїзд прибуває о восьмій.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"я подорожую поїздом\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"потяг повний.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"автобус приходить пізніше.\"}]",
  "study.comparison": "[{\"word\":\"der Zug\",\"meaning\":\"поїзд\",\"example\":\"Поїзд приходить.\"},{\"word\":\"die Bahn\",\"meaning\":\"залізниця / подорож потягом\",\"example\":\"Я їду залізницею.\"},{\"word\":\"der Bus\",\"meaning\":\"автобус\",\"example\":\"Автобус приходить.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"трамвай\",\"example\":\"Трамвай тут.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: конкретний поїзд → der Zug.\"}",
  "study.important": "[\"der Zug слід читати як «поїзд» у назві.\",\"Більш рідкісні значення не потрібні в основному заголовку A1.\"]"
}
```

---

