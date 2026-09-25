# G2/A1 LRB LRB-093 — OWNER VIEW

**Batch:** LRB-093
**Rows:** 50/50
**Languages:** SK 18 + SL 32
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T08:41:00.000Z
**Source commit:** `e58df34f9695792e8c3f182555a533ef841b7489`
**Verified commit:** `e58df34f9695792e8c3f182555a533ef841b7489`
**Branch:** `cursor/lrb-093-owner-review-pc2-3db2`
**Overrides SHA256:** `4e2cf2bb724477709496a156efabcb130270ce9cf4f9b05d1380eeca2159fb4c`
**GALA PASS:** `LRB_093_FULL_50_50_LINGUISTIC_REVIEW_PASS`

> Independently verified per FULL_50_50 PDF standard. Linguistic review closed (SK 18 + SL 32).

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB093-0001`
**Finding Stable ID:** `g2/a1/sk|sitzen|idx:558|lv, study|MEANING_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `sitzen|idx:558`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Sadnite si","study.translation":"Sadnite si","study.explanation":"[\"Hlavná myšlienka: sitzen znamená sedieť.\",\"Sitzen sa používa na opis sedacej polohy osoby alebo zvieraťa.\",\"Niekedy sitzen tiež znamená byť na určitom mieste, ale v A1 je hlavný význam sedieť.\",\"Dôležité je rozlíšenie: sitzen = sedieť, stehen = stáť, Liegen = ležať.\"]","study.examples":"[{\"de\":\"Ich sitze am Tisch.\",\"lv\":\"Sedím pri stole.\"},{\"de\":\"Die Kinder sitzen im Bus.\",\"lv\":\"V autobuse sedia deti.\"},{\"de\":\"Er steht an der Tür.\",\"lv\":\"Stojí vo dverách.\"},{\"de\":\"Die Katze liegt auf dem Sofa.\",\"lv\":\"Mačka spí na gauči.\"}]","study.comparison":"[{\"word\":\"sitzen\",\"meaning\":\"Sadnite si\",\"example\":\"Ich sitze am Tisch.\"},{\"word\":\"stehen\",\"meaning\":\"Buď\",\"example\":\"Er steht an der Tür.\"},{\"word\":\"liegen\",\"meaning\":\"Spať/ľahnúť si\",\"example\":\"Die Katze liegt dort.\"},{\"word\":\"setzen\",\"meaning\":\"Sedieť / sedieť\",\"example\":\"Ich setze mich.\"}]","study.tip":"{\"text\":\"Pamätajte: sedieť → sedieť • Stáť → stehen • Ležať → ľahnúť.\"}","study.important":"[\"Sitzen ukazuje „sediaci“ stav.\",\"Sedieť je sich setzen, nie sitzen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"sedieť","study":{"id":"a1-sitzen","layout":"standardStudy","translation":"sedieť","explanation":["Hlavná myšlienka: sitzen znamená sedieť a opisuje polohu človeka alebo zvieraťa.","Treba ho odlíšiť od stehen, teda stáť, a liegen, teda ležať."],"examples":[{"de":"Ich sitze am Tisch.","lv":"Sedím pri stole."},{"de":"Die Kinder sitzen im Bus.","lv":"Deti sedia v autobuse."},{"de":"Er steht an der Tür.","lv":"On stojí pri dverách."},{"de":"Die Katze liegt auf dem Sofa.","lv":"Mačka leží na pohovke."}],"comparison":[{"word":"sitzen","meaning":"sedieť","example":"Ich sitze am Tisch. — Sedím pri stole."},{"word":"stehen","meaning":"stáť","example":"Er steht an der Tür. — On stojí pri dverách."},{"word":"liegen","meaning":"ležať","example":"Die Katze liegt dort. — Mačka tam leží."},{"word":"setzen","meaning":"sadnúť si • posadiť","example":"Ich setze mich. — Sadnem si."}],"tip":{"text":"Poloha v sede → sitzen; zaujatie tejto polohy → sich setzen."},"important":["sitzen vyjadruje stav, nie dej sadnutia si."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: sitzen: názov bol v rozkazovacom spôsobe a karta zamieňala státie, ležanie aj sadnutie si.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sitzen",
  "lv": "sedieť",
  "level": "A1",
  "study": {
    "id": "a1-sitzen",
    "layout": "standardStudy",
    "translation": "sedieť",
    "explanation": [
      "Hlavná myšlienka: sitzen znamená sedieť a opisuje polohu človeka alebo zvieraťa.",
      "Treba ho odlíšiť od stehen, teda stáť, a liegen, teda ležať."
    ],
    "examples": [
      {
        "de": "Ich sitze am Tisch.",
        "lv": "Sedím pri stole."
      },
      {
        "de": "Die Kinder sitzen im Bus.",
        "lv": "Deti sedia v autobuse."
      },
      {
        "de": "Er steht an der Tür.",
        "lv": "On stojí pri dverách."
      },
      {
        "de": "Die Katze liegt auf dem Sofa.",
        "lv": "Mačka leží na pohovke."
      }
    ],
    "comparison": [
      {
        "word": "sitzen",
        "meaning": "sedieť",
        "example": "Ich sitze am Tisch. — Sedím pri stole."
      },
      {
        "word": "stehen",
        "meaning": "stáť",
        "example": "Er steht an der Tür. — On stojí pri dverách."
      },
      {
        "word": "liegen",
        "meaning": "ležať",
        "example": "Die Katze liegt dort. — Mačka tam leží."
      },
      {
        "word": "setzen",
        "meaning": "sadnúť si • posadiť",
        "example": "Ich setze mich. — Sadnem si."
      }
    ],
    "tip": {
      "text": "Poloha v sede → sitzen; zaujatie tejto polohy → sich setzen."
    },
    "important": [
      "sitzen vyjadruje stav, nie dej sadnutia si."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "sitzen",
  "lv": "Sadnite si",
  "level": "A1",
  "study": {
    "id": "a1-sitzen",
    "layout": "standardStudy",
    "translation": "Sadnite si",
    "explanation": [
      "Hlavná myšlienka: sitzen znamená sedieť.",
      "Sitzen sa používa na opis sedacej polohy osoby alebo zvieraťa.",
      "Niekedy sitzen tiež znamená byť na určitom mieste, ale v A1 je hlavný význam sedieť.",
      "Dôležité je rozlíšenie: sitzen = sedieť, stehen = stáť, Liegen = ležať."
    ],
    "examples": [
      {
        "de": "Ich sitze am Tisch.",
        "lv": "Sedím pri stole."
      },
      {
        "de": "Die Kinder sitzen im Bus.",
        "lv": "V autobuse sedia deti."
      },
      {
        "de": "Er steht an der Tür.",
        "lv": "Stojí vo dverách."
      },
      {
        "de": "Die Katze liegt auf dem Sofa.",
        "lv": "Mačka spí na gauči."
      }
    ],
    "comparison": [
      {
        "word": "sitzen",
        "meaning": "Sadnite si",
        "example": "Ich sitze am Tisch."
      },
      {
        "word": "stehen",
        "meaning": "Buď",
        "example": "Er steht an der Tür."
      },
      {
        "word": "liegen",
        "meaning": "Spať/ľahnúť si",
        "example": "Die Katze liegt dort."
      },
      {
        "word": "setzen",
        "meaning": "Sedieť / sedieť",
        "example": "Ich setze mich."
      }
    ],
    "tip": {
      "text": "Pamätajte: sedieť → sedieť • Stáť → stehen • Ležať → ľahnúť."
    },
    "important": [
      "Sitzen ukazuje „sediaci“ stav.",
      "Sedieť je sich setzen, nie sitzen."
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
          "meaning": {
            "purple": [
              "Buď"
            ]
          },
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
        "left": {
          "blue": [
            "Pamätajte"
          ],
          "red": [
            "stehen"
          ]
        }
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

## Finding 2

**Audit ID:** `LRB093-0002`
**Finding Stable ID:** `g2/a1/sk|sollen|idx:564|lv, study|MEANING_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `sollen|idx:564`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Mal by","study.translation":"Mal by","study.explanation":"[\"Hlavná myšlienka: sollen znamená, že niekto by mal alebo musí urobiť niečo podľa pokynov.\",\"Sollen sa často používa, keď vám niekto hovorí, čo máte robiť.\",\"Nie je taký silný ako mussen.\",\"Veľmi populárnou frázou je Was soll ich machen? = Čo mám robiť?\"]","study.examples":"[{\"de\":\"Was soll ich machen?\",\"lv\":\"Čo mám robiť?\"},{\"de\":\"Du sollst kommen.\",\"lv\":\"Musíte prísť\"},{\"de\":\"Ich soll zu Hause bleiben.\",\"lv\":\"Musím zostať doma\"},{\"de\":\"Ich muss jetzt gehen.\",\"lv\":\"Už musím ísť\"}]","study.comparison":"[{\"word\":\"sollen\",\"meaning\":\"Mali/mali by sa riadiť odporúčaniami\",\"example\":\"Was soll ich machen?\"},{\"word\":\"müssen\",\"meaning\":\"Nutne to potrebujem\",\"example\":\"Ich muss gehen.\"},{\"word\":\"können\",\"meaning\":\"Sila\",\"example\":\"Ich kann kommen.\"},{\"word\":\"wollen\",\"meaning\":\"Chcem\",\"example\":\"Ich will bleiben.\"}]","study.tip":"{\"text\":\"Pamätajte: niekto vám hovorí, čo máte robiť → sollen • Treba urobiť → müssen.\"}","study.important":"[\"Je soll ich machen? je veľmi populárny výraz.\",\"Sollen a muessen nie sú to isté.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"mať niečo urobiť","study":{"id":"a1-sollen","layout":"standardStudy","translation":"mať niečo urobiť","explanation":["Hlavná myšlienka: sollen vyjadruje, že má niekto niečo urobiť podľa pokynu alebo očakávania.","Je spravidla menej kategorické než müssen."],"examples":[{"de":"Was soll ich machen?","lv":"Čo mám robiť?"},{"de":"Du sollst kommen.","lv":"Máš prísť."},{"de":"Ich soll zu Hause bleiben.","lv":"Mám zostať doma."},{"de":"Ich muss jetzt gehen.","lv":"Teraz musím ísť."}],"comparison":[{"word":"sollen","meaning":"mať niečo urobiť podľa pokynu","example":"Was soll ich machen? — Čo mám robiť?"},{"word":"müssen","meaning":"musieť","example":"Ich muss gehen. — Musím ísť."},{"word":"können","meaning":"môcť","example":"Ich kann kommen. — Môžem prísť."},{"word":"wollen","meaning":"chcieť","example":"Ich will bleiben. — Chcem zostať."}],"tip":{"text":"Pokyn alebo očakávanie → sollen; nevyhnutnosť → müssen."},"important":["Was soll ich machen? je veľmi častá otázka.","sollen a müssen nie sú úplné synonymá."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: sollen: karta menila osobu pri du a zamieňala pokyn s nutnosťou, schopnosťou a želaním.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sollen",
  "lv": "mať niečo urobiť",
  "level": "A1",
  "study": {
    "id": "a1-sollen",
    "layout": "standardStudy",
    "translation": "mať niečo urobiť",
    "explanation": [
      "Hlavná myšlienka: sollen vyjadruje, že má niekto niečo urobiť podľa pokynu alebo očakávania.",
      "Je spravidla menej kategorické než müssen."
    ],
    "examples": [
      {
        "de": "Was soll ich machen?",
        "lv": "Čo mám robiť?"
      },
      {
        "de": "Du sollst kommen.",
        "lv": "Máš prísť."
      },
      {
        "de": "Ich soll zu Hause bleiben.",
        "lv": "Mám zostať doma."
      },
      {
        "de": "Ich muss jetzt gehen.",
        "lv": "Teraz musím ísť."
      }
    ],
    "comparison": [
      {
        "word": "sollen",
        "meaning": "mať niečo urobiť podľa pokynu",
        "example": "Was soll ich machen? — Čo mám robiť?"
      },
      {
        "word": "müssen",
        "meaning": "musieť",
        "example": "Ich muss gehen. — Musím ísť."
      },
      {
        "word": "können",
        "meaning": "môcť",
        "example": "Ich kann kommen. — Môžem prísť."
      },
      {
        "word": "wollen",
        "meaning": "chcieť",
        "example": "Ich will bleiben. — Chcem zostať."
      }
    ],
    "tip": {
      "text": "Pokyn alebo očakávanie → sollen; nevyhnutnosť → müssen."
    },
    "important": [
      "Was soll ich machen? je veľmi častá otázka.",
      "sollen a müssen nie sú úplné synonymá."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "sollen",
  "lv": "Mal by",
  "level": "A1",
  "study": {
    "id": "a1-sollen",
    "layout": "standardStudy",
    "translation": "Mal by",
    "explanation": [
      "Hlavná myšlienka: sollen znamená, že niekto by mal alebo musí urobiť niečo podľa pokynov.",
      "Sollen sa často používa, keď vám niekto hovorí, čo máte robiť.",
      "Nie je taký silný ako mussen.",
      "Veľmi populárnou frázou je Was soll ich machen? = Čo mám robiť?"
    ],
    "examples": [
      {
        "de": "Was soll ich machen?",
        "lv": "Čo mám robiť?"
      },
      {
        "de": "Du sollst kommen.",
        "lv": "Musíte prísť"
      },
      {
        "de": "Ich soll zu Hause bleiben.",
        "lv": "Musím zostať doma"
      },
      {
        "de": "Ich muss jetzt gehen.",
        "lv": "Už musím ísť"
      }
    ],
    "comparison": [
      {
        "word": "sollen",
        "meaning": "Mali/mali by sa riadiť odporúčaniami",
        "example": "Was soll ich machen?"
      },
      {
        "word": "müssen",
        "meaning": "Nutne to potrebujem",
        "example": "Ich muss gehen."
      },
      {
        "word": "können",
        "meaning": "Sila",
        "example": "Ich kann kommen."
      },
      {
        "word": "wollen",
        "meaning": "Chcem",
        "example": "Ich will bleiben."
      }
    ],
    "tip": {
      "text": "Pamätajte: niekto vám hovorí, čo máte robiť → sollen • Treba urobiť → müssen."
    },
    "important": [
      "Je soll ich machen? je veľmi populárny výraz.",
      "Sollen a muessen nie sú to isté."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sollen",
          "Was soll ich machen"
        ],
        "red": [
          "müssen"
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
              "Muszę"
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
          "example": {}
        },
        {
          "word": {
            "green": [
              "wollen"
            ]
          },
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "sollen"
          ],
          "purple": [
            "Pamätajte"
          ],
          "red": [
            "müssen"
          ]
        }
      },
      "important": [
        {},
        {
          "blue": [
            "sollen"
          ],
          "red": [
            "muessen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 3

**Audit ID:** `LRB093-0003`
**Finding Stable ID:** `g2/a1/sk|sprechen|idx:5|lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sk
**Card:** `sprechen|idx:5`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Porozprávať sa","study.translation":"Porozprávať sa","study.explanation":"[\"Hlavná myšlienka: Hovoriť, konverzovať alebo používať jazyk.\",\"Sprechen znamená hlavne: hovoriť alebo hovoriť.\",\"Často charakterizované: jazykom/konverzáciou.\",\"Sprechen opisuje hovorenie alebo používanie jazyka.\"]","study.examples":"[{\"de\":\"Ich spreche Deutsch.\",\"lv\":\"Hovorím po nemecky.\"},{\"de\":\"Wir sprechen über die Arbeit.\",\"lv\":\"Hovoríme o práci.\"},{\"de\":\"Sie spricht mit ihrer Lehrerin.\",\"lv\":\"Hovorím po nemecky\"}]","study.comparison":"[{\"word\":\"sprechen\",\"meaning\":\"Hovoriť (proces, jazyk)\",\"example\":\"Wir sprechen über die Arbeit. – Hovoríme o práci.\"},{\"word\":\"sagen\",\"meaning\":\"Povedz (konkrétny text)\",\"example\":\"Sag mir die Wahrheit. – Povedz mi pravdu.\"}]","study.tip":"[\"Sprechen = hovoriť\",\"Používa sprechen, keď kontext zodpovedá tomuto významu.\"]","study.important":"[\"Sprechen = hovoriť.\",\"Hovorte, konverzujte alebo používajte jazyk.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"hovoriť • rozprávať sa","study":{"id":"a1-sprechen-study","layout":"standardStudy","translation":"hovoriť • rozprávať sa","explanation":["Hlavná myšlienka: sprechen znamená hovoriť, rozprávať sa alebo používať jazyk.","sagen sa používa skôr pri konkrétnom výroku."],"examples":[{"de":"Ich spreche Deutsch.","lv":"Hovorím po nemecky."},{"de":"Wir sprechen über die Arbeit.","lv":"Hovoríme o práci."},{"de":"Sie spricht mit ihrer Lehrerin.","lv":"Hovorí so svojou učiteľkou."}],"comparison":[{"word":"sprechen","meaning":"hovoriť ako činnosť alebo používať jazyk","example":"Wir sprechen über die Arbeit. — Hovoríme o práci."},{"word":"sagen","meaning":"povedať konkrétny výrok","example":"Sag mir die Wahrheit. — Povedz mi pravdu."}],"tip":{"text":"Jazyk alebo rozhovor → sprechen."},"important":["sprechen a sagen nie sú zameniteľné vo všetkých vetách."],"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{}]}}}
**Note:** OWNER approved override: sprechen: tretí príklad bol kópiou prvého a zmenil osobu aj význam.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sprechen",
  "lv": "hovoriť • rozprávať sa",
  "level": "A1",
  "study": {
    "id": "a1-sprechen-study",
    "layout": "standardStudy",
    "translation": "hovoriť • rozprávať sa",
    "explanation": [
      "Hlavná myšlienka: sprechen znamená hovoriť, rozprávať sa alebo používať jazyk.",
      "sagen sa používa skôr pri konkrétnom výroku."
    ],
    "examples": [
      {
        "de": "Ich spreche Deutsch.",
        "lv": "Hovorím po nemecky."
      },
      {
        "de": "Wir sprechen über die Arbeit.",
        "lv": "Hovoríme o práci."
      },
      {
        "de": "Sie spricht mit ihrer Lehrerin.",
        "lv": "Hovorí so svojou učiteľkou."
      }
    ],
    "comparison": [
      {
        "word": "sprechen",
        "meaning": "hovoriť ako činnosť alebo používať jazyk",
        "example": "Wir sprechen über die Arbeit. — Hovoríme o práci."
      },
      {
        "word": "sagen",
        "meaning": "povedať konkrétny výrok",
        "example": "Sag mir die Wahrheit. — Povedz mi pravdu."
      }
    ],
    "tip": {
      "text": "Jazyk alebo rozhovor → sprechen."
    },
    "important": [
      "sprechen a sagen nie sú zameniteľné vo všetkých vetách."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "sprechen",
  "lv": "Porozprávať sa",
  "level": "A1",
  "study": {
    "id": "a1-sprechen-study",
    "layout": "standardStudy",
    "translation": "Porozprávať sa",
    "explanation": [
      "Hlavná myšlienka: Hovoriť, konverzovať alebo používať jazyk.",
      "Sprechen znamená hlavne: hovoriť alebo hovoriť.",
      "Často charakterizované: jazykom/konverzáciou.",
      "Sprechen opisuje hovorenie alebo používanie jazyka."
    ],
    "examples": [
      {
        "de": "Ich spreche Deutsch.",
        "lv": "Hovorím po nemecky."
      },
      {
        "de": "Wir sprechen über die Arbeit.",
        "lv": "Hovoríme o práci."
      },
      {
        "de": "Sie spricht mit ihrer Lehrerin.",
        "lv": "Hovorím po nemecky"
      }
    ],
    "comparison": [
      {
        "word": "sprechen",
        "meaning": "Hovoriť (proces, jazyk)",
        "example": "Wir sprechen über die Arbeit. – Hovoríme o práci."
      },
      {
        "word": "sagen",
        "meaning": "Povedz (konkrétny text)",
        "example": "Sag mir die Wahrheit. – Povedz mi pravdu."
      }
    ],
    "tip": [
      "Sprechen = hovoriť",
      "Používa sprechen, keď kontext zodpovedá tomuto významu."
    ],
    "important": [
      "Sprechen = hovoriť.",
      "Hovorte, konverzujte alebo používajte jazyk."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "sprechen"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "spreche"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sprechen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "spricht"
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
            "sprechen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 4

**Audit ID:** `LRB093-0004`
**Finding Stable ID:** `g2/a1/sk|stehen|idx:576|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `stehen|idx:576`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Buď","study.translation":"Buď","study.explanation":"[\"Hlavná myšlienka: stehen znamená stáť alebo stáť.\",\"Pre ľudí stehen znamená stáť.\",\"V prípade predmetu stehen znamená, že stojí alebo je na určitom mieste.\",\"Dôležité je rozlíšenie: stehen = stáť, sitzen = sedieť, Liegen = ležať.\"]","study.examples":"[{\"de\":\"Ich stehe an der Tür.\",\"lv\":\"Stojím pri dverách.\"},{\"de\":\"Der Stuhl steht in der Küche.\",\"lv\":\"Stolička je v kuchyni.\"},{\"de\":\"Er sitzt am Tisch.\",\"lv\":\"Sedí pri stole.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Kniha je na stole.\"}]","study.comparison":"[{\"word\":\"stehen\",\"meaning\":\"Stojan / Stojan\",\"example\":\"Ich stehe hier.\"},{\"word\":\"sitzen\",\"meaning\":\"Sadnite si\",\"example\":\"Er sitzt am Tisch.\"},{\"word\":\"liegen\",\"meaning\":\"Spať/ľahnúť si\",\"example\":\"Das Buch liegt dort.\"},{\"word\":\"stellen\",\"meaning\":\"Upend\",\"example\":\"Ich stelle die Flasche hin.\"}]","study.tip":"{\"text\":\"Pamätaj: stáť → stehen • Sedieť → sedieť • Ležať → ľahnúť.\"}","study.important":"[\"Stehen ukazuje stav, nie akt „odloženia“.\",\"Postaviť predmet do zvislej polohy je šmrnc, nie stehen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"stáť","study":{"id":"a1-stehen","layout":"standardStudy","translation":"stáť","explanation":["Hlavná myšlienka: stehen znamená stáť alebo byť vo zvislej polohe.","sitzen znamená sedieť, liegen ležať a stellen postaviť niečo zvislo."],"examples":[{"de":"Ich stehe an der Tür.","lv":"Stojím pri dverách."},{"de":"Der Stuhl steht in der Küche.","lv":"Stolička stojí v kuchyni."},{"de":"Er sitzt am Tisch.","lv":"On sedí pri stole."},{"de":"Das Buch liegt auf dem Tisch.","lv":"Kniha leží na stole."}],"comparison":[{"word":"stehen","meaning":"stáť • byť vo zvislej polohe","example":"Ich stehe hier. — Stojím tu."},{"word":"sitzen","meaning":"sedieť","example":"Er sitzt am Tisch. — On sedí pri stole."},{"word":"liegen","meaning":"ležať","example":"Das Buch liegt dort. — Kniha tam leží."},{"word":"stellen","meaning":"postaviť zvislo","example":"Ich stelle die Flasche hin. — Postavím fľašu sem."}],"tip":{"text":"Zvislá poloha → stehen; uvedenie do tejto polohy → stellen."},"important":["stehen vyjadruje stav, nie dej postavenia predmetu."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: stehen: názov a porovnania boli nesprávne rozkazy alebo podstatné mená a kontrasty stratili význam.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "stehen",
  "lv": "stáť",
  "level": "A1",
  "study": {
    "id": "a1-stehen",
    "layout": "standardStudy",
    "translation": "stáť",
    "explanation": [
      "Hlavná myšlienka: stehen znamená stáť alebo byť vo zvislej polohe.",
      "sitzen znamená sedieť, liegen ležať a stellen postaviť niečo zvislo."
    ],
    "examples": [
      {
        "de": "Ich stehe an der Tür.",
        "lv": "Stojím pri dverách."
      },
      {
        "de": "Der Stuhl steht in der Küche.",
        "lv": "Stolička stojí v kuchyni."
      },
      {
        "de": "Er sitzt am Tisch.",
        "lv": "On sedí pri stole."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Kniha leží na stole."
      }
    ],
    "comparison": [
      {
        "word": "stehen",
        "meaning": "stáť • byť vo zvislej polohe",
        "example": "Ich stehe hier. — Stojím tu."
      },
      {
        "word": "sitzen",
        "meaning": "sedieť",
        "example": "Er sitzt am Tisch. — On sedí pri stole."
      },
      {
        "word": "liegen",
        "meaning": "ležať",
        "example": "Das Buch liegt dort. — Kniha tam leží."
      },
      {
        "word": "stellen",
        "meaning": "postaviť zvislo",
        "example": "Ich stelle die Flasche hin. — Postavím fľašu sem."
      }
    ],
    "tip": {
      "text": "Zvislá poloha → stehen; uvedenie do tejto polohy → stellen."
    },
    "important": [
      "stehen vyjadruje stav, nie dej postavenia predmetu."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "stehen",
  "lv": "Buď",
  "level": "A1",
  "study": {
    "id": "a1-stehen",
    "layout": "standardStudy",
    "translation": "Buď",
    "explanation": [
      "Hlavná myšlienka: stehen znamená stáť alebo stáť.",
      "Pre ľudí stehen znamená stáť.",
      "V prípade predmetu stehen znamená, že stojí alebo je na určitom mieste.",
      "Dôležité je rozlíšenie: stehen = stáť, sitzen = sedieť, Liegen = ležať."
    ],
    "examples": [
      {
        "de": "Ich stehe an der Tür.",
        "lv": "Stojím pri dverách."
      },
      {
        "de": "Der Stuhl steht in der Küche.",
        "lv": "Stolička je v kuchyni."
      },
      {
        "de": "Er sitzt am Tisch.",
        "lv": "Sedí pri stole."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Kniha je na stole."
      }
    ],
    "comparison": [
      {
        "word": "stehen",
        "meaning": "Stojan / Stojan",
        "example": "Ich stehe hier."
      },
      {
        "word": "sitzen",
        "meaning": "Sadnite si",
        "example": "Er sitzt am Tisch."
      },
      {
        "word": "liegen",
        "meaning": "Spať/ľahnúť si",
        "example": "Das Buch liegt dort."
      },
      {
        "word": "stellen",
        "meaning": "Upend",
        "example": "Ich stelle die Flasche hin."
      }
    ],
    "tip": {
      "text": "Pamätaj: stáť → stehen • Sedieť → sedieť • Ležať → ľahnúť."
    },
    "important": [
      "Stehen ukazuje stav, nie akt „odloženia“.",
      "Postaviť predmet do zvislej polohy je šmrnc, nie stehen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "stehen"
        ],
        "purple": [
          "Hlavná"
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
          "meaning": {
            "purple": [
              "Stojan"
            ]
          },
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
        "left": {
          "blue": [
            "stehen"
          ],
          "red": [
            "Pamätaj"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "stehen"
          ],
          "purple": [
            "stav"
          ],
          "green": [
            "stehen"
          ]
        },
        {
          "green": [
            "stehen"
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

## Finding 5

**Audit ID:** `LRB093-0005`
**Finding Stable ID:** `g2/a1/sk|über|idx:608|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `über|idx:608`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Cez • Pre","study.translation":"Cez • Pre","study.explanation":"[\"Hlavná myšlienka: über znamená nad alebo okolo, v závislosti od kontextu.\",\"Pokiaľ ide o umiestnenie, über často znamená vyššie.\",\"Pokiaľ ide o konverzáciu, text alebo tému, über znamená asi.\",\"V über premávke to môže znamenať koniec.\"]","study.examples":"[{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Lampa visí nad stolom.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Hovoríme o čase.\"},{\"de\":\"Das Kind läuft über die Straße.\",\"lv\":\"Cez ulicu beží dieťa.\"},{\"de\":\"Ich freue mich über das Geschenk.\",\"lv\":\"S darčekom som spokojná.\"}]","study.comparison":"[{\"word\":\"über\",\"meaning\":\"Cez/nad/naprieč\",\"example\":\"Hovoríme o počasí.\"},{\"word\":\"auf\",\"meaning\":\"Navonok\",\"example\":\"Kniha leží na stole.\"},{\"word\":\"unter\",\"meaning\":\"Pod\",\"example\":\"Taška je pod stolom.\"},{\"word\":\"von\",\"meaning\":\"Z/okolo nejakého zdroja\",\"example\":\"Počujem od teba.\"}]","study.tip":"{\"text\":\"Pamätajte: téma rozhovoru → über • Nad stolom → über.\"}","study.important":"[\"Über nie je len názov miesta.\",\"Sprechen über znamená „hovoriť o“.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"nad • cez • o","study":{"id":"a1-über","layout":"standardStudy","translation":"nad • cez • o","explanation":["Hlavná myšlienka: über znamená nad pri polohe, cez pri pohybe a o pri téme.","Konkrétny význam určuje väzba a kontext."],"examples":[{"de":"Die Lampe hängt über dem Tisch.","lv":"Lampa visí nad stolom."},{"de":"Wir sprechen über das Wetter.","lv":"Hovoríme o počasí."},{"de":"Das Kind läuft über die Straße.","lv":"Dieťa beží cez ulicu."},{"de":"Ich freue mich über das Geschenk.","lv":"Teším sa z darčeka."}],"comparison":[{"word":"über","meaning":"nad • cez • o","example":"Wir sprechen über das Wetter. — Hovoríme o počasí."},{"word":"auf","meaning":"na povrchu","example":"Das Buch liegt auf dem Tisch. — Kniha leží na stole."},{"word":"unter","meaning":"pod","example":"Die Tasche ist unter dem Tisch. — Taška je pod stolom."},{"word":"von","meaning":"od • o zdroji","example":"Ich höre von dir. — Počujem od teba."}],"tip":{"text":"Téma rozhovoru → über; poloha vyššie → über."},"important":["sprechen über znamená hovoriť o."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: über: karta prekladala Wetter ako čas, Freude ako spokojnosť a v porovnaniach odstránila nemecké príklady.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "über",
  "lv": "nad • cez • o",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "nad • cez • o",
    "explanation": [
      "Hlavná myšlienka: über znamená nad pri polohe, cez pri pohybe a o pri téme.",
      "Konkrétny význam určuje väzba a kontext."
    ],
    "examples": [
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lampa visí nad stolom."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Hovoríme o počasí."
      },
      {
        "de": "Das Kind läuft über die Straße.",
        "lv": "Dieťa beží cez ulicu."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "Teším sa z darčeka."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "nad • cez • o",
        "example": "Wir sprechen über das Wetter. — Hovoríme o počasí."
      },
      {
        "word": "auf",
        "meaning": "na povrchu",
        "example": "Das Buch liegt auf dem Tisch. — Kniha leží na stole."
      },
      {
        "word": "unter",
        "meaning": "pod",
        "example": "Die Tasche ist unter dem Tisch. — Taška je pod stolom."
      },
      {
        "word": "von",
        "meaning": "od • o zdroji",
        "example": "Ich höre von dir. — Počujem od teba."
      }
    ],
    "tip": {
      "text": "Téma rozhovoru → über; poloha vyššie → über."
    },
    "important": [
      "sprechen über znamená hovoriť o."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "über",
  "lv": "Cez • Pre",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "Cez • Pre",
    "explanation": [
      "Hlavná myšlienka: über znamená nad alebo okolo, v závislosti od kontextu.",
      "Pokiaľ ide o umiestnenie, über často znamená vyššie.",
      "Pokiaľ ide o konverzáciu, text alebo tému, über znamená asi.",
      "V über premávke to môže znamenať koniec."
    ],
    "examples": [
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lampa visí nad stolom."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Hovoríme o čase."
      },
      {
        "de": "Das Kind läuft über die Straße.",
        "lv": "Cez ulicu beží dieťa."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "S darčekom som spokojná."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "Cez/nad/naprieč",
        "example": "Hovoríme o počasí."
      },
      {
        "word": "auf",
        "meaning": "Navonok",
        "example": "Kniha leží na stole."
      },
      {
        "word": "unter",
        "meaning": "Pod",
        "example": "Taška je pod stolom."
      },
      {
        "word": "von",
        "meaning": "Z/okolo nejakého zdroja",
        "example": "Počujem od teba."
      }
    ],
    "tip": {
      "text": "Pamätajte: téma rozhovoru → über • Nad stolom → über."
    },
    "important": [
      "Über nie je len názov miesta.",
      "Sprechen über znamená „hovoriť o“."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "über"
        ],
        "green": [
          "Hlavná",
          "Hlavná"
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
          ],
          "purple": [
            "Pamätajte"
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

## Finding 6

**Audit ID:** `LRB093-0006`
**Finding Stable ID:** `g2/a1/sk|um|idx:611|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `um|idx:611`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Približne • Hodiny","study.translation":"Približne • Hodiny","study.explanation":"[\"Hlavná myšlienka: hmm, veľmi často znamená hodiny s časom alebo o/okolo miesta.\",\"Presný čas znamená čas.\",\"„Miesto“ znamená „okolo“ alebo „okolo“.\",\"Vo vete um… zu pomáha vyjadriť zámer: to.\"]","study.examples":"[{\"de\":\"Ich komme um acht Uhr.\",\"lv\":\"Prídem o ôsmej.\"},{\"de\":\"Wir sitzen um den Tisch.\",\"lv\":\"Sedíme okolo stola.\"},{\"de\":\"Er geht um die Ecke.\",\"lv\":\"Ide za roh.\"},{\"de\":\"Ich lerne, um Deutsch zu sprechen.\",\"lv\":\"Učím sa rozprávať po nemecky.\"}]","study.comparison":"[{\"word\":\"um\",\"meaning\":\"V/okolo/do\",\"example\":\"Prídem o ôsmej.\"},{\"word\":\"am\",\"meaning\":\"Denne / o\",\"example\":\"V pondelok prídem.\"},{\"word\":\"gegen\",\"meaning\":\"O čase / vs\",\"example\":\"Prídem okolo ôsmej.\"},{\"word\":\"für\",\"meaning\":\"Pre/v prospech\",\"example\":\"To je pre teba.\"}]","study.tip":"{\"text\":\"Pamätajte: um acht = osem hodín.\"}","study.important":"[\"Hmm, časom sú to väčšinou „hodinky“.\",\"Hmm... zu často znamená „do...“.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"o • okolo • aby","study":{"id":"a1-um","layout":"standardStudy","translation":"o • okolo • aby","explanation":["Hlavná myšlienka: um znamená o pri presnom čase a okolo pri priestore.","Konštrukcia um ... zu vyjadruje účel."],"examples":[{"de":"Ich komme um acht Uhr.","lv":"Prídem o ôsmej."},{"de":"Wir sitzen um den Tisch.","lv":"Sedíme okolo stola."},{"de":"Er geht um die Ecke.","lv":"Ide za roh."},{"de":"Ich lerne, um Deutsch zu sprechen.","lv":"Učím sa, aby som hovoril po nemecky."}],"comparison":[{"word":"um","meaning":"o • okolo • aby","example":"Ich komme um acht. — Prídem o ôsmej."},{"word":"am","meaning":"v určitý deň • pri","example":"Am Montag komme ich. — Prídem v pondelok."},{"word":"gegen","meaning":"okolo približného času • proti","example":"Ich komme gegen acht. — Prídem okolo ôsmej."},{"word":"für","meaning":"pre","example":"Das ist für dich. — To je pre teba."}],"tip":{"text":"Presný čas → um; účel → um ... zu."},"important":["um acht znamená o ôsmej."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: um: názov tvrdil približný čas a posledný príklad nevyjadril účel konštrukcie um ... zu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "um",
  "lv": "o • okolo • aby",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "o • okolo • aby",
    "explanation": [
      "Hlavná myšlienka: um znamená o pri presnom čase a okolo pri priestore.",
      "Konštrukcia um ... zu vyjadruje účel."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "Prídem o ôsmej."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "Sedíme okolo stola."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "Ide za roh."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "Učím sa, aby som hovoril po nemecky."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "o • okolo • aby",
        "example": "Ich komme um acht. — Prídem o ôsmej."
      },
      {
        "word": "am",
        "meaning": "v určitý deň • pri",
        "example": "Am Montag komme ich. — Prídem v pondelok."
      },
      {
        "word": "gegen",
        "meaning": "okolo približného času • proti",
        "example": "Ich komme gegen acht. — Prídem okolo ôsmej."
      },
      {
        "word": "für",
        "meaning": "pre",
        "example": "Das ist für dich. — To je pre teba."
      }
    ],
    "tip": {
      "text": "Presný čas → um; účel → um ... zu."
    },
    "important": [
      "um acht znamená o ôsmej."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "um",
  "lv": "Približne • Hodiny",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "Približne • Hodiny",
    "explanation": [
      "Hlavná myšlienka: hmm, veľmi často znamená hodiny s časom alebo o/okolo miesta.",
      "Presný čas znamená čas.",
      "„Miesto“ znamená „okolo“ alebo „okolo“.",
      "Vo vete um… zu pomáha vyjadriť zámer: to."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "Prídem o ôsmej."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "Sedíme okolo stola."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "Ide za roh."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "Učím sa rozprávať po nemecky."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "V/okolo/do",
        "example": "Prídem o ôsmej."
      },
      {
        "word": "am",
        "meaning": "Denne / o",
        "example": "V pondelok prídem."
      },
      {
        "word": "gegen",
        "meaning": "O čase / vs",
        "example": "Prídem okolo ôsmej."
      },
      {
        "word": "für",
        "meaning": "Pre/v prospech",
        "example": "To je pre teba."
      }
    ],
    "tip": {
      "text": "Pamätajte: um acht = osem hodín."
    },
    "important": [
      "Hmm, časom sú to väčšinou „hodinky“.",
      "Hmm... zu často znamená „do...“."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "um"
        ]
      },
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
          "example": {}
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

## Finding 7

**Audit ID:** `LRB093-0007`
**Finding Stable ID:** `g2/a1/sk|unter|idx:615|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `unter|idx:615`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Pod","study.translation":"Pod","study.explanation":"[\"Hlavná myšlienka: pod znamená pod alebo medzi, v závislosti od kontextu.\",\"Ak je niečo pod stolom, stoličkou alebo iným predmetom, použite unter.\",\"Keď hovoríme o skupine ľudí, unter môže znamenať medzi.\",\"Je to opak über, pokiaľ ide o smer hore/dole.\"]","study.examples":"[{\"de\":\"Die Tasche ist unter dem Tisch.\",\"lv\":\"Taška je pod stolom.\"},{\"de\":\"Die Katze liegt unter dem Stuhl.\",\"lv\":\"Mačka spí pod stoličkou.\"},{\"de\":\"Unter Freunden sagt man das so.\",\"lv\":\"Hovorí sa, že medzi priateľmi.\"},{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Lampa visí nad stolom.\"}]","study.comparison":"[{\"word\":\"unter\",\"meaning\":\"Pod/medzi\",\"example\":\"Taška je pod stolom.\"},{\"word\":\"über\",\"meaning\":\"Pre/pre\",\"example\":\"Lampa visí nad stolom.\"},{\"word\":\"zwischen\",\"meaning\":\"Medzi dvoma vecami\",\"example\":\"Medzi domami.\"},{\"word\":\"auf\",\"meaning\":\"Navonok\",\"example\":\"Na stole.\"}]","study.tip":"{\"text\":\"Atceries: zem galda → unter dem Tisch.\"}","study.important":"[\"Unter môže tiež znamenať „medzi“, najmä s ľuďmi alebo skupinami.\",\"Unter a über sú často protiklady v zmysle miesta.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"pod • medzi","study":{"id":"a1-unter","layout":"standardStudy","translation":"pod • medzi","explanation":["Hlavná myšlienka: unter znamená pod pri polohe a medzi pri skupine ľudí alebo vecí.","V priestorovom význame je často opakom über."],"examples":[{"de":"Die Tasche ist unter dem Tisch.","lv":"Taška je pod stolom."},{"de":"Die Katze liegt unter dem Stuhl.","lv":"Mačka leží pod stoličkou."},{"de":"Unter Freunden sagt man das so.","lv":"Medzi priateľmi sa to hovorí takto."},{"de":"Die Lampe hängt über dem Tisch.","lv":"Lampa visí nad stolom."}],"comparison":[{"word":"unter","meaning":"pod • medzi","example":"Die Tasche ist unter dem Tisch. — Taška je pod stolom."},{"word":"über","meaning":"nad • o","example":"Die Lampe hängt über dem Tisch. — Lampa visí nad stolom."},{"word":"zwischen","meaning":"medzi dvoma vecami","example":"Zwischen den Häusern. — Medzi domami."},{"word":"auf","meaning":"na povrchu","example":"Auf dem Tisch. — Na stole."}],"tip":{"text":"Pod stolom → unter dem Tisch."},"important":["unter Freunden znamená medzi priateľmi."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: unter: karta menila ležanie mačky na spánok a porovnanie über prekladala nezmyselne.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "unter",
  "lv": "pod • medzi",
  "level": "A1",
  "study": {
    "id": "a1-unter",
    "layout": "standardStudy",
    "translation": "pod • medzi",
    "explanation": [
      "Hlavná myšlienka: unter znamená pod pri polohe a medzi pri skupine ľudí alebo vecí.",
      "V priestorovom význame je často opakom über."
    ],
    "examples": [
      {
        "de": "Die Tasche ist unter dem Tisch.",
        "lv": "Taška je pod stolom."
      },
      {
        "de": "Die Katze liegt unter dem Stuhl.",
        "lv": "Mačka leží pod stoličkou."
      },
      {
        "de": "Unter Freunden sagt man das so.",
        "lv": "Medzi priateľmi sa to hovorí takto."
      },
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lampa visí nad stolom."
      }
    ],
    "comparison": [
      {
        "word": "unter",
        "meaning": "pod • medzi",
        "example": "Die Tasche ist unter dem Tisch. — Taška je pod stolom."
      },
      {
        "word": "über",
        "meaning": "nad • o",
        "example": "Die Lampe hängt über dem Tisch. — Lampa visí nad stolom."
      },
      {
        "word": "zwischen",
        "meaning": "medzi dvoma vecami",
        "example": "Zwischen den Häusern. — Medzi domami."
      },
      {
        "word": "auf",
        "meaning": "na povrchu",
        "example": "Auf dem Tisch. — Na stole."
      }
    ],
    "tip": {
      "text": "Pod stolom → unter dem Tisch."
    },
    "important": [
      "unter Freunden znamená medzi priateľmi."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "unter",
  "lv": "Pod",
  "level": "A1",
  "study": {
    "id": "a1-unter",
    "layout": "standardStudy",
    "translation": "Pod",
    "explanation": [
      "Hlavná myšlienka: pod znamená pod alebo medzi, v závislosti od kontextu.",
      "Ak je niečo pod stolom, stoličkou alebo iným predmetom, použite unter.",
      "Keď hovoríme o skupine ľudí, unter môže znamenať medzi.",
      "Je to opak über, pokiaľ ide o smer hore/dole."
    ],
    "examples": [
      {
        "de": "Die Tasche ist unter dem Tisch.",
        "lv": "Taška je pod stolom."
      },
      {
        "de": "Die Katze liegt unter dem Stuhl.",
        "lv": "Mačka spí pod stoličkou."
      },
      {
        "de": "Unter Freunden sagt man das so.",
        "lv": "Hovorí sa, že medzi priateľmi."
      },
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lampa visí nad stolom."
      }
    ],
    "comparison": [
      {
        "word": "unter",
        "meaning": "Pod/medzi",
        "example": "Taška je pod stolom."
      },
      {
        "word": "über",
        "meaning": "Pre/pre",
        "example": "Lampa visí nad stolom."
      },
      {
        "word": "zwischen",
        "meaning": "Medzi dvoma vecami",
        "example": "Medzi domami."
      },
      {
        "word": "auf",
        "meaning": "Navonok",
        "example": "Na stole."
      }
    ],
    "tip": {
      "text": "Atceries: zem galda → unter dem Tisch."
    },
    "important": [
      "Unter môže tiež znamenať „medzi“, najmä s ľuďmi alebo skupinami.",
      "Unter a über sú často protiklady v zmysle miesta."
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
          ],
          "purple": [
            "zem galda"
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

## Finding 8

**Audit ID:** `LRB093-0008`
**Finding Stable ID:** `g2/a1/sk|Urlaub|idx:695|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `Urlaub|idx:695`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Prázdniny","study.translation":"Prázdniny","study.explanation":"[\"Hlavná myšlienka: iba v jednotnom čísle. Nechajte prácu - vždy v jednotnom čísle.\",\"Der Urlaub v podstate znamená: voľno v práci.\",\"Často charakterizované: iba v jednotnom čísle.\",\"Der Urlaub je len ojedinelá forma dovolenky z práce (im Urlaub).\"]","study.examples":"[{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Môj otec je na dovolenke.\"},{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Môj otec je na dovolenke.\"},{\"de\":\"Nächste Woche habe ich Urlaub.\",\"lv\":\"Budúci týždeň som na dovolenke.\"},{\"de\":\"Wir machen Urlaub in Spanien.\",\"lv\":\"Sme na dovolenke v Španielsku.\"},{\"de\":\"im Urlaub\",\"lv\":\"Na dovolenke (v práci).\"}]","study.comparison":"[{\"word\":\"der Urlaub\",\"meaning\":\"Odísť z práce (iba všetci)\",\"example\":\"Mein Vater ist im Urlaub. – Môj otec je na dovolenke.\"},{\"word\":\"die Ferien\",\"meaning\":\"Prestávka zo školy/učenia (iba na stole)\",\"example\":\"Die Kinder haben Ferien. – Deti majú prázdniny.\"}]","study.tip":"[\"Iba jeden. Nechajte prácu - vždy v jednotnom čísle.\",\"Použite der Urlaub, keď kontext zodpovedá tomuto významu.\"]","study.important":"[\"Nesprávne: die Ferie, der Urlabe (na úrovni A1).\",\"Dovolenka: byť na dovolenke / mať dovolenku.\",\"Nesprávne: die Urlaube → Správne: der Urlaub\",\"Dielo: der Urlaub (iba jednotné číslo).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"dovolenka","study":{"id":"a1-urlaub","layout":"standardStudy","translation":"dovolenka","explanation":["Hlavná myšlienka: der Urlaub je pracovná dovolenka a v tomto význame sa používa v jednotnom čísle.","die Ferien označuje školské alebo študijné prázdniny a používa sa v množnom čísle."],"examples":[{"de":"Mein Vater ist im Urlaub.","lv":"Môj otec je na dovolenke."},{"de":"Mein Vater ist im Urlaub.","lv":"Môj otec je na dovolenke."},{"de":"Nächste Woche habe ich Urlaub.","lv":"Budúci týždeň mám dovolenku."},{"de":"Wir machen Urlaub in Spanien.","lv":"Dovolenkujeme v Španielsku."},{"de":"im Urlaub","lv":"na dovolenke"}],"comparison":[{"word":"der Urlaub","meaning":"pracovná dovolenka v jednotnom čísle","example":"Mein Vater ist im Urlaub. — Môj otec je na dovolenke."},{"word":"die Ferien","meaning":"školské prázdniny v množnom čísle","example":"Die Kinder haben Ferien. — Deti majú prázdniny."}],"tip":{"text":"Pracovné voľno → der Urlaub; školské voľno → die Ferien."},"important":["der Urlaub sa na úrovni A1 používa v jednotnom čísle.","im Urlaub sein a Urlaub machen sú bežné spojenia."],"sectionAccents":{"examples":[{},{},{},{},{}],"comparison":[{},{}]}}}
**Note:** OWNER approved override: Urlaub: názov ho zamieňal s prázdninami a porovnania mali nesprávne číslo aj význam.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Urlaub",
  "de_article": "der",
  "lv": "dovolenka",
  "level": "A1",
  "study": {
    "id": "a1-urlaub",
    "layout": "standardStudy",
    "translation": "dovolenka",
    "explanation": [
      "Hlavná myšlienka: der Urlaub je pracovná dovolenka a v tomto význame sa používa v jednotnom čísle.",
      "die Ferien označuje školské alebo študijné prázdniny a používa sa v množnom čísle."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Môj otec je na dovolenke."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Môj otec je na dovolenke."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Budúci týždeň mám dovolenku."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "Dovolenkujeme v Španielsku."
      },
      {
        "de": "im Urlaub",
        "lv": "na dovolenke"
      }
    ],
    "comparison": [
      {
        "word": "der Urlaub",
        "meaning": "pracovná dovolenka v jednotnom čísle",
        "example": "Mein Vater ist im Urlaub. — Môj otec je na dovolenke."
      },
      {
        "word": "die Ferien",
        "meaning": "školské prázdniny v množnom čísle",
        "example": "Die Kinder haben Ferien. — Deti majú prázdniny."
      }
    ],
    "tip": {
      "text": "Pracovné voľno → der Urlaub; školské voľno → die Ferien."
    },
    "important": [
      "der Urlaub sa na úrovni A1 používa v jednotnom čísle.",
      "im Urlaub sein a Urlaub machen sú bežné spojenia."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "lv": "Prázdniny",
  "level": "A1",
  "study": {
    "id": "a1-urlaub",
    "layout": "standardStudy",
    "translation": "Prázdniny",
    "explanation": [
      "Hlavná myšlienka: iba v jednotnom čísle. Nechajte prácu - vždy v jednotnom čísle.",
      "Der Urlaub v podstate znamená: voľno v práci.",
      "Často charakterizované: iba v jednotnom čísle.",
      "Der Urlaub je len ojedinelá forma dovolenky z práce (im Urlaub)."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Môj otec je na dovolenke."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Môj otec je na dovolenke."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Budúci týždeň som na dovolenke."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "Sme na dovolenke v Španielsku."
      },
      {
        "de": "im Urlaub",
        "lv": "Na dovolenke (v práci)."
      }
    ],
    "comparison": [
      {
        "word": "der Urlaub",
        "meaning": "Odísť z práce (iba všetci)",
        "example": "Mein Vater ist im Urlaub. – Môj otec je na dovolenke."
      },
      {
        "word": "die Ferien",
        "meaning": "Prestávka zo školy/učenia (iba na stole)",
        "example": "Die Kinder haben Ferien. – Deti majú prázdniny."
      }
    ],
    "tip": [
      "Iba jeden. Nechajte prácu - vždy v jednotnom čísle.",
      "Použite der Urlaub, keď kontext zodpovedá tomuto významu."
    ],
    "important": [
      "Nesprávne: die Ferie, der Urlabe (na úrovni A1).",
      "Dovolenka: byť na dovolenke / mať dovolenku.",
      "Nesprávne: die Urlaube → Správne: der Urlaub",
      "Dielo: der Urlaub (iba jednotné číslo)."
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
            "der"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 9

**Audit ID:** `LRB093-0009`
**Finding Stable ID:** `g2/a1/sk|verstehen|idx:621|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `verstehen|idx:621`
**Field / path:** `lv, study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Pochopte","study.translation":"Pochopte","study.explanation":"[\"Hlavná myšlienka: verstehen znamená rozumieť.\",\"Používa sa, keď rozumiete jazyku, osobe, textu alebo situácii.\",\"Zvyčajne tu nie je potrebné „vedieť“ alebo „učiť sa“ lotyštinu • Častejšie sú können.\",\"Veľmi populárna fráza je Ich verstehe. = Rozumiem.\"]","study.examples":"[{\"de\":\"Ich verstehe dich.\",\"lv\":\"Ja ti rozumiem\"},{\"de\":\"Verstehst du Deutsch?\",\"lv\":\"Rozumiete po nemecky?\"},{\"de\":\"Ich verstehe das nicht.\",\"lv\":\"Tomuto nerozumiem.\"},{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"Viem po nemecky\"}]","study.comparison":"[{\"word\":\"verstehen\",\"meaning\":\"Pochopte\",\"example\":\"Rozumiem ti.\"},{\"word\":\"können\",\"meaning\":\"Môcť/vedieť\",\"example\":\"Viem plávať.\"},{\"word\":\"wissen\",\"meaning\":\"Viem jeden fakt\",\"example\":\"Viem to.\"},{\"word\":\"kennen\",\"meaning\":\"Vedieť\",\"example\":\"Poznám ho.\"}]","study.tip":"{\"text\":\"Pamätajte: porozumieť textu/osobe → verstehen • Vedieť niečo urobiť → können.\"}","study.important":"[\"Verstehen nie je koreňom slova „rozumieť“.\",\"Ich verstehe Deutsch znamená „Rozumiem nemecky“.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"rozumieť","study":{"id":"a1-verstehen","layout":"standardStudy","translation":"rozumieť","explanation":["Hlavná myšlienka: verstehen znamená rozumieť jazyku, osobe, textu alebo situácii.","können vyjadruje schopnosť niečo urobiť."],"examples":[{"de":"Ich verstehe dich.","lv":"Rozumiem ti."},{"de":"Verstehst du Deutsch?","lv":"Rozumieš po nemecky?"},{"de":"Ich verstehe das nicht.","lv":"Tomuto nerozumiem."},{"de":"Ich kann Deutsch sprechen.","lv":"Viem hovoriť po nemecky."}],"comparison":[{"word":"verstehen","meaning":"rozumieť","example":"Ich verstehe dich. — Rozumiem ti."},{"word":"können","meaning":"môcť • vedieť","example":"Ich kann schwimmen. — Viem plávať."},{"word":"wissen","meaning":"vedieť fakt","example":"Ich weiß das. — Viem to."},{"word":"kennen","meaning":"poznať","example":"Ich kenne ihn. — Poznám ho."}],"tip":{"text":"Textu alebo človeku rozumieme pomocou verstehen; schopnosť vyjadruje können."},"important":["Ich verstehe znamená Rozumiem."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: verstehen: názov bol rozkaz, prvý príklad mal chybný slovosled a karta zamieňala vedieť fakt s poznať osobu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "verstehen",
  "lv": "rozumieť",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "rozumieť",
    "explanation": [
      "Hlavná myšlienka: verstehen znamená rozumieť jazyku, osobe, textu alebo situácii.",
      "können vyjadruje schopnosť niečo urobiť."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Rozumiem ti."
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "Rozumieš po nemecky?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Tomuto nerozumiem."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Viem hovoriť po nemecky."
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "rozumieť",
        "example": "Ich verstehe dich. — Rozumiem ti."
      },
      {
        "word": "können",
        "meaning": "môcť • vedieť",
        "example": "Ich kann schwimmen. — Viem plávať."
      },
      {
        "word": "wissen",
        "meaning": "vedieť fakt",
        "example": "Ich weiß das. — Viem to."
      },
      {
        "word": "kennen",
        "meaning": "poznať",
        "example": "Ich kenne ihn. — Poznám ho."
      }
    ],
    "tip": {
      "text": "Textu alebo človeku rozumieme pomocou verstehen; schopnosť vyjadruje können."
    },
    "important": [
      "Ich verstehe znamená Rozumiem."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "verstehen",
  "lv": "Pochopte",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "Pochopte",
    "explanation": [
      "Hlavná myšlienka: verstehen znamená rozumieť.",
      "Používa sa, keď rozumiete jazyku, osobe, textu alebo situácii.",
      "Zvyčajne tu nie je potrebné „vedieť“ alebo „učiť sa“ lotyštinu • Častejšie sú können.",
      "Veľmi populárna fráza je Ich verstehe. = Rozumiem."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Ja ti rozumiem"
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "Rozumiete po nemecky?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Tomuto nerozumiem."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Viem po nemecky"
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "Pochopte",
        "example": "Rozumiem ti."
      },
      {
        "word": "können",
        "meaning": "Môcť/vedieť",
        "example": "Viem plávať."
      },
      {
        "word": "wissen",
        "meaning": "Viem jeden fakt",
        "example": "Viem to."
      },
      {
        "word": "kennen",
        "meaning": "Vedieť",
        "example": "Poznám ho."
      }
    ],
    "tip": {
      "text": "Pamätajte: porozumieť textu/osobe → verstehen • Vedieť niečo urobiť → können."
    },
    "important": [
      "Verstehen nie je koreňom slova „rozumieť“.",
      "Ich verstehe Deutsch znamená „Rozumiem nemecky“."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "verstehen",
          "Ich verstehe"
        ],
        "red": [
          "können"
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
          "example": {}
        },
        {
          "word": {
            "green": [
              "können"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "wissen"
            ]
          },
          "meaning": {},
          "example": {}
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

## Finding 10

**Audit ID:** `LRB093-0010`
**Finding Stable ID:** `g2/a1/sk|vom|idx:634|lv, study.*|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `vom|idx:634`
**Field / path:** `lv, study.*`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"S","study.translation":"S","study.explanation":"[\"Vom je skratka predložky von a člena dem.\",\"Plná forma: von dem (komu?).\",\"Používa sa s podstatnými menami mužského a stredného rodu na označenie pôvodu alebo smeru od.\",\"Odpovedá na otázky od koho? alebo odkial?\",\"V praxi sa takmer vždy používa vom namiesto plného von dem.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"Prichádzam zo stanice\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"Darček je od môjho otca.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"Pochádza od lekára.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"Prichádza z letiska.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"Je to z trhu.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"Vraciame sa z oslavy.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"Od farmára berie mlieko.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"Správa je od šéfa.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"Od (konkrétnej veci, pre koho?)\",\"example\":\"vom Bahnhof – Zo stanice\"},{\"word\":\"von\",\"meaning\":\"Od (všeobecné)\",\"example\":\"von mir – Odo mňa\"},{\"word\":\"aus\",\"meaning\":\"Z vnútra/pôvodu\",\"example\":\"aus Deutschland – Z Nemecka\"},{\"word\":\"ab\",\"meaning\":\"Začiatok o (čas/miesto)\",\"example\":\"ab Montag – Od pondelka\"},{\"word\":\"zu\",\"meaning\":\"Do/do (opačným smerom)\",\"example\":\"zum Arzt – K lekárovi\"}]","study.tip":"[\"Pamätajte: von + dem → vom (pre koho?).\",\"V bežnej reči takmer nikdy nepoviete von dem – použite vom.\"]","study.important":"[\"Vom = von dem, len s podstatným menom mužského alebo stredného rodu, pre koho? v skloňovaní.\",\"Označuje pôvod, zdroj alebo smer niečoho konkrétneho.\",\"Pre ženské pohlavie: von der Mutter, nie vom Mutter.\",\"Nezamieňať s aus (krajina pôvodu) alebo ab (východiskový bod).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"od • zo","study":{"id":"a1-vom","layout":"standardStudy","translation":"od • zo","explanation":["Hlavná myšlienka: vom je skrátené von dem a vyjadruje pôvod alebo smer od konkrétneho mužského či stredného podstatného mena.","Spája sa s datívom."],"examples":[{"de":"Ich komme vom Bahnhof.","lv":"Prichádzam zo stanice."},{"de":"Das Geschenk ist vom Vater.","lv":"Darček je od otca."},{"de":"Er kommt vom Arzt.","lv":"Prichádza od lekára."},{"de":"Sie fährt vom Flughafen.","lv":"Odchádza z letiska."},{"de":"Das ist vom Markt.","lv":"Je to z trhu."},{"de":"Wir kommen vom Fest.","lv":"Prichádzame z oslavy."},{"de":"Er holt Milch vom Bauern.","lv":"Berie mlieko od farmára."},{"de":"Die Nachricht ist vom Chef.","lv":"Správa je od šéfa."}],"comparison":[{"word":"vom","meaning":"od • zo s von dem","example":"vom Bahnhof — zo stanice"},{"word":"von","meaning":"od","example":"von mir — odo mňa"},{"word":"aus","meaning":"z vnútra • pôvod","example":"aus Deutschland — z Nemecka"},{"word":"ab","meaning":"od určitého času","example":"ab Montag — od pondelka"},{"word":"zu","meaning":"k • ku","example":"zum Arzt — k lekárovi"}],"tip":{"text":"von + dem → vom."},"important":["Pre ženský rod sa používa von der, nie vom."],"sectionAccents":{"examples":[{},{},{},{},{},{},{},{}],"comparison":[{},{},{},{},{}]}}}
**Note:** OWNER approved override: vom: príklady zamieňali príchod s pôvodom a odchodom, názov bol neúplný a skloňovacie vysvetlenia chybné.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vom",
  "lv": "od • zo",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "od • zo",
    "explanation": [
      "Hlavná myšlienka: vom je skrátené von dem a vyjadruje pôvod alebo smer od konkrétneho mužského či stredného podstatného mena.",
      "Spája sa s datívom."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "Prichádzam zo stanice."
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "Darček je od otca."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "Prichádza od lekára."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "Odchádza z letiska."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "Je to z trhu."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "Prichádzame z oslavy."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "Berie mlieko od farmára."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "Správa je od šéfa."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "od • zo s von dem",
        "example": "vom Bahnhof — zo stanice"
      },
      {
        "word": "von",
        "meaning": "od",
        "example": "von mir — odo mňa"
      },
      {
        "word": "aus",
        "meaning": "z vnútra • pôvod",
        "example": "aus Deutschland — z Nemecka"
      },
      {
        "word": "ab",
        "meaning": "od určitého času",
        "example": "ab Montag — od pondelka"
      },
      {
        "word": "zu",
        "meaning": "k • ku",
        "example": "zum Arzt — k lekárovi"
      }
    ],
    "tip": {
      "text": "von + dem → vom."
    },
    "important": [
      "Pre ženský rod sa používa von der, nie vom."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
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
  "lv": "S",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "S",
    "explanation": [
      "Vom je skratka predložky von a člena dem.",
      "Plná forma: von dem (komu?).",
      "Používa sa s podstatnými menami mužského a stredného rodu na označenie pôvodu alebo smeru od.",
      "Odpovedá na otázky od koho? alebo odkial?",
      "V praxi sa takmer vždy používa vom namiesto plného von dem."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "Prichádzam zo stanice"
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "Darček je od môjho otca."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "Pochádza od lekára."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "Prichádza z letiska."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "Je to z trhu."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "Vraciame sa z oslavy."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "Od farmára berie mlieko."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "Správa je od šéfa."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "Od (konkrétnej veci, pre koho?)",
        "example": "vom Bahnhof – Zo stanice"
      },
      {
        "word": "von",
        "meaning": "Od (všeobecné)",
        "example": "von mir – Odo mňa"
      },
      {
        "word": "aus",
        "meaning": "Z vnútra/pôvodu",
        "example": "aus Deutschland – Z Nemecka"
      },
      {
        "word": "ab",
        "meaning": "Začiatok o (čas/miesto)",
        "example": "ab Montag – Od pondelka"
      },
      {
        "word": "zu",
        "meaning": "Do/do (opačným smerom)",
        "example": "zum Arzt – K lekárovi"
      }
    ],
    "tip": [
      "Pamätajte: von + dem → vom (pre koho?).",
      "V bežnej reči takmer nikdy nepoviete von dem – použite vom."
    ],
    "important": [
      "Vom = von dem, len s podstatným menom mužského alebo stredného rodu, pre koho? v skloňovaní.",
      "Označuje pôvod, zdroj alebo smer niečoho konkrétneho.",
      "Pre ženské pohlavie: von der Mutter, nie vom Mutter.",
      "Nezamieňať s aus (krajina pôvodu) alebo ab (východiskový bod)."
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

## Finding 11

**Audit ID:** `LRB093-0011`
**Finding Stable ID:** `g2/a1/sk|vor|idx:636|lv, study.*|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `vor|idx:636`
**Field / path:** `lv, study.*`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Predtým • Predtým","study.translation":"Predtým • Predtým","study.explanation":"[\"Hlavná myšlienka: vor znamená skôr v čase alebo pred miestom.\",\"Z časového hľadiska vor znamená skôr.\",\"Z hľadiska miesta vor znamená pred alebo v.\",\"V hodinovom čase vor znamená „až“, napr. fünf vor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Pred jedlom si umývam ruky.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Auto je zaparkované pred domom.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"Je päť až osem.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"Po jedle ideme na prechádzku.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"Pred/predtým\",\"example\":\"Pred jedlom...\"},{\"word\":\"nach\",\"meaning\":\"Po / Do\",\"example\":\"Po jedle...\"},{\"word\":\"neben\",\"meaning\":\"Blízko\",\"example\":\"Vedľa domu.\"},{\"word\":\"hinter\",\"meaning\":\"Pre\",\"example\":\"Za domom.\"}]","study.tip":"{\"text\":\"Pamätaj: pred časom, pred miestom → vor.\"}","study.important":"[\"Vor môže znamenať čas aj miesto.\",\"Vor dem Essen = pred jedlom • Vor dem Haus = pred domovom.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"pred","study":{"id":"a1-vor","layout":"standardStudy","translation":"pred","explanation":["Hlavná myšlienka: vor znamená pred v časovom aj priestorovom význame.","Pri udávaní času označuje počet minút do nasledujúcej hodiny."],"examples":[{"de":"Vor dem Essen wasche ich die Hände.","lv":"Pred jedlom si umývam ruky."},{"de":"Das Auto steht vor dem Haus.","lv":"Auto stojí pred domom."},{"de":"Es ist fünf vor acht.","lv":"Je päť minút pred ôsmou."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Po jedle sa ideme prejsť."}],"comparison":[{"word":"vor","meaning":"pred","example":"Vor dem Essen... — Pred jedlom ..."},{"word":"nach","meaning":"po • do","example":"Nach dem Essen... — Po jedle ..."},{"word":"neben","meaning":"vedľa","example":"Neben dem Haus. — Vedľa domu."},{"word":"hinter","meaning":"za","example":"Hinter dem Haus. — Za domom."}],"tip":{"text":"Čas alebo poloha pred niečím → vor."},"important":["fünf vor acht znamená päť minút pred ôsmou."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: vor: názov zdvojoval časový význam a preklad hodiny Je päť až osem bol nesprávny.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vor",
  "lv": "pred",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "pred",
    "explanation": [
      "Hlavná myšlienka: vor znamená pred v časovom aj priestorovom význame.",
      "Pri udávaní času označuje počet minút do nasledujúcej hodiny."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Pred jedlom si umývam ruky."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Auto stojí pred domom."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Je päť minút pred ôsmou."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Po jedle sa ideme prejsť."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "pred",
        "example": "Vor dem Essen... — Pred jedlom ..."
      },
      {
        "word": "nach",
        "meaning": "po • do",
        "example": "Nach dem Essen... — Po jedle ..."
      },
      {
        "word": "neben",
        "meaning": "vedľa",
        "example": "Neben dem Haus. — Vedľa domu."
      },
      {
        "word": "hinter",
        "meaning": "za",
        "example": "Hinter dem Haus. — Za domom."
      }
    ],
    "tip": {
      "text": "Čas alebo poloha pred niečím → vor."
    },
    "important": [
      "fünf vor acht znamená päť minút pred ôsmou."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "vor",
  "lv": "Predtým • Predtým",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Predtým • Predtým",
    "explanation": [
      "Hlavná myšlienka: vor znamená skôr v čase alebo pred miestom.",
      "Z časového hľadiska vor znamená skôr.",
      "Z hľadiska miesta vor znamená pred alebo v.",
      "V hodinovom čase vor znamená „až“, napr. fünf vor acht."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Pred jedlom si umývam ruky."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Auto je zaparkované pred domom."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Je päť až osem."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Po jedle ideme na prechádzku."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Pred/predtým",
        "example": "Pred jedlom..."
      },
      {
        "word": "nach",
        "meaning": "Po / Do",
        "example": "Po jedle..."
      },
      {
        "word": "neben",
        "meaning": "Blízko",
        "example": "Vedľa domu."
      },
      {
        "word": "hinter",
        "meaning": "Pre",
        "example": "Za domom."
      }
    ],
    "tip": {
      "text": "Pamätaj: pred časom, pred miestom → vor."
    },
    "important": [
      "Vor môže znamenať čas aj miesto.",
      "Vor dem Essen = pred jedlom • Vor dem Haus = pred domovom."
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
          "example": {}
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
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "vor"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "vor"
          ]
        },
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

## Finding 12

**Audit ID:** `LRB093-0012`
**Finding Stable ID:** `g2/a1/sk|was|idx:644|lv, study.*|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `was|idx:644`
**Field / path:** `lv, study.*`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Kto • Čo","study.translation":"Kto • Čo","study.explanation":"[\"Hlavná myšlienka: čo je opytovacie slovo o veciach a udalostiach - v lotyštine je to čo alebo čo, v závislosti od časti vety.\",\"Ľudia sa pýtali na veci, udalosti a fakty, nie na ľudí.\",\"V nemčine svoje bolo po prechýlení nezmeníte – vždy to vyzerá, akoby tam bolo.\",\"Ak je predmetom vety „by“, v lotyštine sa prekladá ako kas (Was ist das? = Čo je to?).\",\"Ak was je predmetom (predmetom) slovesa, v lotyštine sa to prekladá ako ko (Was machst du? = Čo robíš?).\",\"Ľudia sú požiadaní o wer (kto/kto) a nebolo to tak.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Čo je to?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Čo sa stalo?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Čo to robíš\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Čo chceš piť?\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Čo znamená toto slovo?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Aké je tvoje obľúbené jedlo?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Čo si povedal?\"}]","study.tip":"[\"To bolo samo o sebe sa nemení - v nemčine to bolo vždy • V lotyštine vyberte koho alebo čo podľa časti vety.\",\"Rýchly trik: Ak je možné na otázku odpovedať „To...“, použite „kto“ • Ak je odpoveď za slovesom ako doplnok, použite ko.\"]","study.important":"[\"Ľudia sa pýtali na veci, udalosti a fakty – nikdy nie na ľudí.\",\"Ľudia sú požiadaní o wer (kto/kto) a nebolo to tak.\",\"Was für (ein/eine) znamená niekoho/čo a pýta sa na kvalitu alebo typ (Was für ein Film ist das? = Aký je to film?).\",\"Nesprávne: Wer ist passiert? → Správne: Je to pasivnejšie?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"čo","study":{"id":"a1-was","layout":"standardStudy","translation":"čo","explanation":["Hlavná myšlienka: was je opytovacie zámeno pre veci, udalosti a fakty.","Na osoby sa pýtame pomocou wer."],"examples":[{"de":"Was ist das?","lv":"Čo je to?"},{"de":"Was ist passiert?","lv":"Čo sa stalo?"},{"de":"Was machst du gerade?","lv":"Čo práve robíš?"},{"de":"Was möchtest du trinken?","lv":"Čo chceš piť?"},{"de":"Was bedeutet dieses Wort?","lv":"Čo znamená toto slovo?"},{"de":"Was ist dein Lieblingsessen?","lv":"Aké je tvoje obľúbené jedlo?"},{"de":"Was hast du gesagt?","lv":"Čo si povedal?"}],"tip":{"text":"Vec, udalosť alebo fakt → was."},"important":["was sa v nemčine neskloňuje; was für ein sa pýta na druh."],"sectionAccents":{"examples":[{},{},{},{},{},{},{}],"comparison":[]},"comparison":[]}}
**Note:** OWNER approved override: was: názov zahŕňal kto a niektoré otázky mali chýbajúcu interpunkciu alebo nenaturalizovaný slovosled.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "was",
  "lv": "čo",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "čo",
    "explanation": [
      "Hlavná myšlienka: was je opytovacie zámeno pre veci, udalosti a fakty.",
      "Na osoby sa pýtame pomocou wer."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Čo je to?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Čo sa stalo?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Čo práve robíš?"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Čo chceš piť?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Čo znamená toto slovo?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "Aké je tvoje obľúbené jedlo?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Čo si povedal?"
      }
    ],
    "tip": {
      "text": "Vec, udalosť alebo fakt → was."
    },
    "important": [
      "was sa v nemčine neskloňuje; was für ein sa pýta na druh."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "was",
  "lv": "Kto • Čo",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "Kto • Čo",
    "explanation": [
      "Hlavná myšlienka: čo je opytovacie slovo o veciach a udalostiach - v lotyštine je to čo alebo čo, v závislosti od časti vety.",
      "Ľudia sa pýtali na veci, udalosti a fakty, nie na ľudí.",
      "V nemčine svoje bolo po prechýlení nezmeníte – vždy to vyzerá, akoby tam bolo.",
      "Ak je predmetom vety „by“, v lotyštine sa prekladá ako kas (Was ist das? = Čo je to?).",
      "Ak was je predmetom (predmetom) slovesa, v lotyštine sa to prekladá ako ko (Was machst du? = Čo robíš?).",
      "Ľudia sú požiadaní o wer (kto/kto) a nebolo to tak."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Čo je to?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Čo sa stalo?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Čo to robíš"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Čo chceš piť?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Čo znamená toto slovo?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "Aké je tvoje obľúbené jedlo?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Čo si povedal?"
      }
    ],
    "tip": [
      "To bolo samo o sebe sa nemení - v nemčine to bolo vždy • V lotyštine vyberte koho alebo čo podľa časti vety.",
      "Rýchly trik: Ak je možné na otázku odpovedať „To...“, použite „kto“ • Ak je odpoveď za slovesom ako doplnok, použite ko."
    ],
    "important": [
      "Ľudia sa pýtali na veci, udalosti a fakty – nikdy nie na ľudí.",
      "Ľudia sú požiadaní o wer (kto/kto) a nebolo to tak.",
      "Was für (ein/eine) znamená niekoho/čo a pýta sa na kvalitu alebo typ (Was für ein Film ist das? = Aký je to film?).",
      "Nesprávne: Wer ist passiert? → Správne: Je to pasivnejšie?"
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

## Finding 13

**Audit ID:** `LRB093-0013`
**Finding Stable ID:** `g2/a1/sk|wenn|idx:655|lv, study.*|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `wenn|idx:655`
**Field / path:** `lv, study.*`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Ak • Kedy","study.translation":"Ak • Kedy","study.explanation":"[\"Hlavná myšlienka: wenn znamená či alebo kedy, v závislosti od situácie.\",\"Ak je to podmienka, preložte ako keby.\",\"Pre opakujúci sa alebo všeobecný čas preložte ako kedy.\",\"Po wenn sa sloveso zvyčajne končí nemeckou vetou.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Ak máte čas, zastavte sa.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Ak prší, zostanem doma.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Keď som unavený, pijem kávu.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Neviem, či príde.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"Ak/kedy\",\"example\":\"Ak máš čas...\"},{\"word\":\"ob\",\"meaning\":\"Alebo v nepriamej otázke\",\"example\":\"Neviem, či...\"},{\"word\":\"wann\",\"meaning\":\"Keď na to príde\",\"example\":\"Kedy prídeš?\"},{\"word\":\"weil\",\"meaning\":\"Pretože\",\"example\":\"Ostávam, pretože som chorý.\"}]","study.tip":"{\"text\":\"Pamätajte: podmienka → wenn • Otázka \\\"kedy?\\\" → Chcem.\"}","study.important":"[\"Wenn a wann nie sú to isté.\",\"Kedy prídeš? je tu otázka. Wenn du kommst... je podmienka/čas.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ak • keď","study":{"id":"a1-wenn","layout":"standardStudy","translation":"ak • keď","explanation":["Hlavná myšlienka: wenn znamená ak pri podmienke a keď pri opakovanom alebo všeobecnom čase.","wann je opytovacie kedy; ob uvádza nepriamu otázku s či."],"examples":[{"de":"Wenn du Zeit hast, komm vorbei.","lv":"Ak máš čas, zastav sa."},{"de":"Wenn es regnet, bleibe ich zu Hause.","lv":"Ak prší, zostanem doma."},{"de":"Wenn ich müde bin, trinke ich Kaffee.","lv":"Keď som unavený, pijem kávu."},{"de":"Ich weiß nicht, ob er kommt.","lv":"Neviem, či príde."}],"comparison":[{"word":"wenn","meaning":"ak • keď","example":"Wenn du Zeit hast... — Ak máš čas ..."},{"word":"ob","meaning":"či v nepriamej otázke","example":"Ich weiß nicht, ob... — Neviem, či ..."},{"word":"wann","meaning":"kedy v otázke","example":"Wann kommst du? — Kedy prídeš?"},{"word":"weil","meaning":"pretože","example":"Ich bleibe, weil ich krank bin. — Zostávam, pretože som chorý."}],"tip":{"text":"Podmienka → wenn; otázka kedy → wann."},"important":["V závislej vete s wenn je určité sloveso na konci."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: wenn: názov chybne používal kedy, prvý príklad zmenil tykanie na vykanie a porovnanie ob na alebo.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wenn",
  "lv": "ak • keď",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "ak • keď",
    "explanation": [
      "Hlavná myšlienka: wenn znamená ak pri podmienke a keď pri opakovanom alebo všeobecnom čase.",
      "wann je opytovacie kedy; ob uvádza nepriamu otázku s či."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Ak máš čas, zastav sa."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Ak prší, zostanem doma."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Keď som unavený, pijem kávu."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Neviem, či príde."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "ak • keď",
        "example": "Wenn du Zeit hast... — Ak máš čas ..."
      },
      {
        "word": "ob",
        "meaning": "či v nepriamej otázke",
        "example": "Ich weiß nicht, ob... — Neviem, či ..."
      },
      {
        "word": "wann",
        "meaning": "kedy v otázke",
        "example": "Wann kommst du? — Kedy prídeš?"
      },
      {
        "word": "weil",
        "meaning": "pretože",
        "example": "Ich bleibe, weil ich krank bin. — Zostávam, pretože som chorý."
      }
    ],
    "tip": {
      "text": "Podmienka → wenn; otázka kedy → wann."
    },
    "important": [
      "V závislej vete s wenn je určité sloveso na konci."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "wenn",
  "lv": "Ak • Kedy",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "Ak • Kedy",
    "explanation": [
      "Hlavná myšlienka: wenn znamená či alebo kedy, v závislosti od situácie.",
      "Ak je to podmienka, preložte ako keby.",
      "Pre opakujúci sa alebo všeobecný čas preložte ako kedy.",
      "Po wenn sa sloveso zvyčajne končí nemeckou vetou."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Ak máte čas, zastavte sa."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Ak prší, zostanem doma."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Keď som unavený, pijem kávu."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Neviem, či príde."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "Ak/kedy",
        "example": "Ak máš čas..."
      },
      {
        "word": "ob",
        "meaning": "Alebo v nepriamej otázke",
        "example": "Neviem, či..."
      },
      {
        "word": "wann",
        "meaning": "Keď na to príde",
        "example": "Kedy prídeš?"
      },
      {
        "word": "weil",
        "meaning": "Pretože",
        "example": "Ostávam, pretože som chorý."
      }
    ],
    "tip": {
      "text": "Pamätajte: podmienka → wenn • Otázka \"kedy?\" → Chcem."
    },
    "important": [
      "Wenn a wann nie sú to isté.",
      "Kedy prídeš? je tu otázka. Wenn du kommst... je podmienka/čas."
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
          "example": {}
        },
        {
          "word": {
            "green": [
              "ob"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "wann"
            ]
          },
          "meaning": {},
          "example": {}
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
        "left": {
          "blue": [
            "wenn"
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

## Finding 14

**Audit ID:** `LRB093-0014`
**Finding Stable ID:** `g2/a1/sk|wer|idx:656|lv, study.*|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** sk
**Card:** `wer|idx:656`
**Field / path:** `lv, study.*`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Kto • Kto","study.translation":"Kto • Kto","study.explanation":"[\"Hlavná myšlienka: wer je otáznik o identite osoby – v lotyštine znamená „kto“ alebo „koho“.\",\"Pýtali sme sa na ľudí, nie na veci alebo udalosti.\",\"Veci a udalosti sa pýtajú cez vás, nie ver.\",\"Wer je v nemčine zvyčajne predmetom vety (nominatívu) – Wer is das? = Čo je to?\",\"Keď sa pýtame, ktorý z viacerých ľudí, často používame slovo wer z von (wer von euch = ktorý z vás).\",\"Wer mení svoju formu v závislosti od odrody: wen (akuzatív), wem (datív), wessen (genitív) - je to forma wer, ktorá sa najčastejšie vyskytuje na úrovni A1.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Čo je to?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Kto si ty?\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Čo príde dnes?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Kto je tvoj učiteľ\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Kto z vás vie po nemecky?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Kto to povedal?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Kto chce kávu?\"}]","study.tip":"[\"Wer sa pýta na ľudí (koho/koho) - na veci a udalosti, používame vás.\",\"Ak sa chcete opýtať na výber medzi niekoľkými ľuďmi, použite wer von... (ktorý z...).\"]","study.important":"[\"Pýtali sme sa len na ľudí, nikdy nie na veci.\",\"Veci a udalosti sa pýtajú cez vás, nie ver.\",\"Wer mení svoj tvar skloňovaním: wen, wem, wessen - ale základný tvar je wer.\",\"Nesprávne: Wer ist passiert? → Správne: Je to pasivnejšie?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"kto","study":{"id":"a1-wer","layout":"standardStudy","translation":"kto","explanation":["Hlavná myšlienka: wer je opytovacie zámeno pre osobu a znamená kto.","Na veci a udalosti sa pýtame pomocou was."],"examples":[{"de":"Wer ist das?","lv":"Kto je to?"},{"de":"Wer bist du?","lv":"Kto si?"},{"de":"Wer kommt heute?","lv":"Kto dnes príde?"},{"de":"Wer ist deine Lehrerin?","lv":"Kto je tvoja učiteľka?"},{"de":"Wer von euch spricht Deutsch?","lv":"Kto z vás hovorí po nemecky?"},{"de":"Wer hat das gesagt?","lv":"Kto to povedal?"},{"de":"Wer möchte Kaffee?","lv":"Kto chce kávu?"}],"tip":{"text":"Osoba → wer; vec alebo udalosť → was."},"important":["Pádové tvary sú wen, wem a wessen."],"sectionAccents":{"examples":[{},{},{},{},{},{},{}],"comparison":[]},"comparison":[]}}
**Note:** OWNER approved override: wer: dva príklady prekladali osobu ako čo a ďalší zmenil učiteľku na učiteľa.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wer",
  "lv": "kto",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "kto",
    "explanation": [
      "Hlavná myšlienka: wer je opytovacie zámeno pre osobu a znamená kto.",
      "Na veci a udalosti sa pýtame pomocou was."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Kto je to?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Kto si?"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Kto dnes príde?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Kto je tvoja učiteľka?"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Kto z vás hovorí po nemecky?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Kto to povedal?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Kto chce kávu?"
      }
    ],
    "tip": {
      "text": "Osoba → wer; vec alebo udalosť → was."
    },
    "important": [
      "Pádové tvary sú wen, wem a wessen."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "wer",
  "lv": "Kto • Kto",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "Kto • Kto",
    "explanation": [
      "Hlavná myšlienka: wer je otáznik o identite osoby – v lotyštine znamená „kto“ alebo „koho“.",
      "Pýtali sme sa na ľudí, nie na veci alebo udalosti.",
      "Veci a udalosti sa pýtajú cez vás, nie ver.",
      "Wer je v nemčine zvyčajne predmetom vety (nominatívu) – Wer is das? = Čo je to?",
      "Keď sa pýtame, ktorý z viacerých ľudí, často používame slovo wer z von (wer von euch = ktorý z vás).",
      "Wer mení svoju formu v závislosti od odrody: wen (akuzatív), wem (datív), wessen (genitív) - je to forma wer, ktorá sa najčastejšie vyskytuje na úrovni A1."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Čo je to?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Kto si ty?"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Čo príde dnes?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Kto je tvoj učiteľ"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Kto z vás vie po nemecky?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Kto to povedal?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Kto chce kávu?"
      }
    ],
    "tip": [
      "Wer sa pýta na ľudí (koho/koho) - na veci a udalosti, používame vás.",
      "Ak sa chcete opýtať na výber medzi niekoľkými ľuďmi, použite wer von... (ktorý z...)."
    ],
    "important": [
      "Pýtali sme sa len na ľudí, nikdy nie na veci.",
      "Veci a udalosti sa pýtajú cez vás, nie ver.",
      "Wer mení svoj tvar skloňovaním: wen, wem, wessen - ale základný tvar je wer.",
      "Nesprávne: Wer ist passiert? → Správne: Je to pasivnejšie?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wer"
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
            "Wer"
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
        {
          "green": [
            "Veci"
          ],
          "blue": [
            "ver"
          ]
        },
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

## Finding 15

**Audit ID:** `LRB093-0015`
**Finding Stable ID:** `g2/a1/sk|werden|idx:657|study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `werden|idx:657`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"Staňte sa","study.explanation":"[\"Hlavná myšlienka: werden na A1 najčastejšie znamená zostať.\",\"Používa sa, keď sa niečo zmení alebo zmení.\",\"V neskoršej nemčine sa werden používa aj na označenie budúcnosti a trpného rodu.\",\"Na úrovni A1 je najdôležitejšou frázou Ich werde müde. = Začínam byť unavený.\"]","study.examples":"[{\"de\":\"Ich werde müde.\",\"lv\":\"Začínam byť unavená.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"Začína byť zima.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"Stáva sa lekárom.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"Som unavený\"}]","study.comparison":"[{\"word\":\"werden\",\"meaning\":\"Staňte sa\",\"example\":\"Počujem sa unavený.\"},{\"word\":\"sein\",\"meaning\":\"Byť\",\"example\":\"Som unavený.\"},{\"word\":\"bleiben\",\"meaning\":\"Zostaň\",\"example\":\"Ostávam tu.\"},{\"word\":\"machen\",\"meaning\":\"Urobiť/urobiť\",\"example\":\"Robím to.\"}]","study.tip":"{\"text\":\"Pamätajte: zmena/stav sa zmení → werden.\"}","study.important":"[\"Werden nie je to isté ako sein.\",\"Ich werde müde = začínam byť unavený • Ich bin müde = som unavený.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"stať sa","study":{"id":"a1-werden","layout":"standardStudy","translation":"stať sa","explanation":["Hlavná myšlienka: werden na úrovni A1 znamená najmä stať sa a vyjadruje zmenu stavu.","sein opisuje stav, werden jeho zmenu."],"examples":[{"de":"Ich werde müde.","lv":"Začínam byť unavený."},{"de":"Es wird kalt.","lv":"Začína byť chladno."},{"de":"Sie wird Ärztin.","lv":"Stáva sa lekárkou."},{"de":"Ich bin müde.","lv":"Som unavený."}],"comparison":[{"word":"werden","meaning":"stať sa","example":"Ich werde müde. — Začínam byť unavený."},{"word":"sein","meaning":"byť","example":"Ich bin müde. — Som unavený."},{"word":"bleiben","meaning":"zostať","example":"Ich bleibe hier. — Zostávam tu."},{"word":"machen","meaning":"robiť","example":"Ich mache das. — Robím to."}],"tip":{"text":"Zmena stavu → werden."},"important":["Ich werde müde nie je to isté ako Ich bin müde."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: werden: názov bol rozkaz, prvé porovnanie bolo nezmyselné a pri Ärztin sa stratila ženská rodová forma.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "werden",
  "lv": "stať sa",
  "level": "A1",
  "study": {
    "id": "a1-werden",
    "layout": "standardStudy",
    "translation": "stať sa",
    "explanation": [
      "Hlavná myšlienka: werden na úrovni A1 znamená najmä stať sa a vyjadruje zmenu stavu.",
      "sein opisuje stav, werden jeho zmenu."
    ],
    "examples": [
      {
        "de": "Ich werde müde.",
        "lv": "Začínam byť unavený."
      },
      {
        "de": "Es wird kalt.",
        "lv": "Začína byť chladno."
      },
      {
        "de": "Sie wird Ärztin.",
        "lv": "Stáva sa lekárkou."
      },
      {
        "de": "Ich bin müde.",
        "lv": "Som unavený."
      }
    ],
    "comparison": [
      {
        "word": "werden",
        "meaning": "stať sa",
        "example": "Ich werde müde. — Začínam byť unavený."
      },
      {
        "word": "sein",
        "meaning": "byť",
        "example": "Ich bin müde. — Som unavený."
      },
      {
        "word": "bleiben",
        "meaning": "zostať",
        "example": "Ich bleibe hier. — Zostávam tu."
      },
      {
        "word": "machen",
        "meaning": "robiť",
        "example": "Ich mache das. — Robím to."
      }
    ],
    "tip": {
      "text": "Zmena stavu → werden."
    },
    "important": [
      "Ich werde müde nie je to isté ako Ich bin müde."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "werden",
  "lv": "Staňte sa",
  "level": "A1",
  "study": {
    "id": "a1-werden",
    "layout": "standardStudy",
    "translation": "Staňte sa",
    "explanation": [
      "Hlavná myšlienka: werden na A1 najčastejšie znamená zostať.",
      "Používa sa, keď sa niečo zmení alebo zmení.",
      "V neskoršej nemčine sa werden používa aj na označenie budúcnosti a trpného rodu.",
      "Na úrovni A1 je najdôležitejšou frázou Ich werde müde. = Začínam byť unavený."
    ],
    "examples": [
      {
        "de": "Ich werde müde.",
        "lv": "Začínam byť unavená."
      },
      {
        "de": "Es wird kalt.",
        "lv": "Začína byť zima."
      },
      {
        "de": "Sie wird Ärztin.",
        "lv": "Stáva sa lekárom."
      },
      {
        "de": "Ich bin müde.",
        "lv": "Som unavený"
      }
    ],
    "comparison": [
      {
        "word": "werden",
        "meaning": "Staňte sa",
        "example": "Počujem sa unavený."
      },
      {
        "word": "sein",
        "meaning": "Byť",
        "example": "Som unavený."
      },
      {
        "word": "bleiben",
        "meaning": "Zostaň",
        "example": "Ostávam tu."
      },
      {
        "word": "machen",
        "meaning": "Urobiť/urobiť",
        "example": "Robím to."
      }
    ],
    "tip": {
      "text": "Pamätajte: zmena/stav sa zmení → werden."
    },
    "important": [
      "Werden nie je to isté ako sein.",
      "Ich werde müde = začínam byť unavený • Ich bin müde = som unavený."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "werden",
          "Ich werde"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "werde"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "wird"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "wird"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "bin"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "werden"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
            "Pamätajte",
            "Pamätajte"
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
          ]
        }
      ]
    }
  }
}
```

---

## Finding 16

**Audit ID:** `LRB093-0016`
**Finding Stable ID:** `g2/a1/sk|wie|idx:660|study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `wie|idx:660`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"Ako • Koľko","study.explanation":"[\"Hlavná myšlienka: vie sa pýta na druh alebo kvalitu (ako) a kvantitu alebo počet (koľko), v závislosti od kontextu.\",\"Wie sam (Wie geht's?) sa pýta na cestu – v lotyštine ako.\",\"Wie + prídavné meno (wie viel, wie alt, wie lange) sa pýta na množstvo, vek alebo trvanie – koľko v lotyštine.\",\"Wie viel(e) znamená koľko • Wie alt znamená koľko rokov • Wie lange znamená ako dlho.\",\"V prirovnaniach wie znamená podobný (so groß wie = taký veľký ako).\"]","study.examples":"[{\"de\":\"Wie geht es dir?\",\"lv\":\"Ako sa máš\"},{\"de\":\"Wie heißt du?\",\"lv\":\"Ako sa voláš?\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"Koľko to je\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"Kolko mas rokov\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"Ako dlho je tento film?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"Je vysoký ako jeho otec.\"}]","study.tip":"[\"Vie sám o sebe = ako (spôsob) • Vie + prídavné meno (viel/alt/lange) = koľko (množstvo).\",\"Pre porovnanie, tak... vie = ako... ako.\"]","study.important":"[\"Wie viel(e) = koľko • Wie alt = koľko rokov • Wie lange = ako dlho.\",\"Pozná sám seba (Vieš...?) obyčajne = ako, nie koľko.\",\"Nesprávne: Koľko máš rokov? → Správne: Ako sa máš? (Samozrejme?)\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ako • koľko","study":{"id":"a1-wie","layout":"standardStudy","translation":"ako • koľko","explanation":["Hlavná myšlienka: wie sa pýta na spôsob alebo vlastnosť; v spojeniach wie viel, wie alt a wie lange sa pýta na množstvo, vek alebo trvanie.","V prirovnaní so ... wie znamená taký ... ako."],"examples":[{"de":"Wie geht es dir?","lv":"Ako sa máš?"},{"de":"Wie heißt du?","lv":"Ako sa voláš?"},{"de":"Wie viel kostet das?","lv":"Koľko to stojí?"},{"de":"Wie alt bist du?","lv":"Koľko máš rokov?"},{"de":"Wie lange dauert der Film?","lv":"Ako dlho trvá film?"},{"de":"Er ist so groß wie sein Vater.","lv":"Je taký vysoký ako jeho otec."}],"tip":{"text":"Samostatné wie → ako; wie s množstvom, vekom alebo trvaním → koľko alebo ako dlho."},"important":["V prirovnaní wie znamená ako."],"sectionAccents":{"examples":[{},{},{},{},{},{}],"comparison":[]},"comparison":[]}}
**Note:** OWNER approved override: wie: karta obsahovala preklepy bez diakritiky, cenu prekladala ako neurčité Koľko to je a trvanie filmu ako jeho dĺžku.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wie",
  "lv": "ako • koľko",
  "level": "A1",
  "study": {
    "id": "a1-wie",
    "layout": "standardStudy",
    "translation": "ako • koľko",
    "explanation": [
      "Hlavná myšlienka: wie sa pýta na spôsob alebo vlastnosť; v spojeniach wie viel, wie alt a wie lange sa pýta na množstvo, vek alebo trvanie.",
      "V prirovnaní so ... wie znamená taký ... ako."
    ],
    "examples": [
      {
        "de": "Wie geht es dir?",
        "lv": "Ako sa máš?"
      },
      {
        "de": "Wie heißt du?",
        "lv": "Ako sa voláš?"
      },
      {
        "de": "Wie viel kostet das?",
        "lv": "Koľko to stojí?"
      },
      {
        "de": "Wie alt bist du?",
        "lv": "Koľko máš rokov?"
      },
      {
        "de": "Wie lange dauert der Film?",
        "lv": "Ako dlho trvá film?"
      },
      {
        "de": "Er ist so groß wie sein Vater.",
        "lv": "Je taký vysoký ako jeho otec."
      }
    ],
    "tip": {
      "text": "Samostatné wie → ako; wie s množstvom, vekom alebo trvaním → koľko alebo ako dlho."
    },
    "important": [
      "V prirovnaní wie znamená ako."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "wie",
  "lv": "Ako • Koľko",
  "level": "A1",
  "study": {
    "id": "a1-wie",
    "layout": "standardStudy",
    "translation": "Ako • Koľko",
    "explanation": [
      "Hlavná myšlienka: vie sa pýta na druh alebo kvalitu (ako) a kvantitu alebo počet (koľko), v závislosti od kontextu.",
      "Wie sam (Wie geht's?) sa pýta na cestu – v lotyštine ako.",
      "Wie + prídavné meno (wie viel, wie alt, wie lange) sa pýta na množstvo, vek alebo trvanie – koľko v lotyštine.",
      "Wie viel(e) znamená koľko • Wie alt znamená koľko rokov • Wie lange znamená ako dlho.",
      "V prirovnaniach wie znamená podobný (so groß wie = taký veľký ako)."
    ],
    "examples": [
      {
        "de": "Wie geht es dir?",
        "lv": "Ako sa máš"
      },
      {
        "de": "Wie heißt du?",
        "lv": "Ako sa voláš?"
      },
      {
        "de": "Wie viel kostet das?",
        "lv": "Koľko to je"
      },
      {
        "de": "Wie alt bist du?",
        "lv": "Kolko mas rokov"
      },
      {
        "de": "Wie lange dauert der Film?",
        "lv": "Ako dlho je tento film?"
      },
      {
        "de": "Er ist so groß wie sein Vater.",
        "lv": "Je vysoký ako jeho otec."
      }
    ],
    "tip": [
      "Vie sám o sebe = ako (spôsob) • Vie + prídavné meno (viel/alt/lange) = koľko (množstvo).",
      "Pre porovnanie, tak... vie = ako... ako."
    ],
    "important": [
      "Wie viel(e) = koľko • Wie alt = koľko rokov • Wie lange = ako dlho.",
      "Pozná sám seba (Vieš...?) obyčajne = ako, nie koľko.",
      "Nesprávne: Koľko máš rokov? → Správne: Ako sa máš? (Samozrejme?)"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wie"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Wie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wie"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "wie"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "blue": [
            "Vie"
          ]
        },
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

---

## Finding 17

**Audit ID:** `LRB093-0017`
**Finding Stable ID:** `g2/a1/sk|Zug|idx:671|study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `Zug|idx:671`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"Vlak","study.explanation":"[\"Hlavná myšlienka: der Zug na úrovni A1 najčastejšie znamená vlak.\",\"Používa sa pri každodennej jazde, pri príchode a odchode.\",\"V iných významoch môže byť Zug pochod, prievan alebo funkcia, ale to nie sú hlavné významy A1.\",\"Veľmi obľúbené frázy sú mit dem Zug fahren a Der Zug kommt.\"]","study.examples":"[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"Vlak prichádza o ôsmej.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"Cestujem vlakom\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"Vlak je plný.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"Autobus príde neskôr.\"}]","study.comparison":"[{\"word\":\"der Zug\",\"meaning\":\"Vlak\",\"example\":\"Vlak prichádza.\"},{\"word\":\"die Bahn\",\"meaning\":\"Cestovanie vlakom/vlakom\",\"example\":\"Jazdím vlakom.\"},{\"word\":\"der Bus\",\"meaning\":\"Autobus\",\"example\":\"Autobus prichádza.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"Električka\",\"example\":\"Električka je tu.\"}]","study.tip":"{\"text\":\"Pamätajte: konkrétny vlak → der Zug.\"}","study.important":"[\"Der Zug v názve treba čítať ako „vlak“.\",\"Menej bežné významy nie sú potrebné v hlavnom nadpise A1.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vlak","study":{"id":"a1-zug","layout":"standardStudy","translation":"vlak","explanation":["Hlavná myšlienka: der Zug na úrovni A1 znamená najmä vlak.","Používa sa pri cestovaní, príchode a odchode."],"examples":[{"de":"Der Zug kommt um acht Uhr.","lv":"Vlak prichádza o ôsmej."},{"de":"Ich fahre mit dem Zug.","lv":"Cestujem vlakom."},{"de":"Der Zug ist voll.","lv":"Vlak je plný."},{"de":"Der Bus kommt später.","lv":"Autobus príde neskôr."}],"comparison":[{"word":"der Zug","meaning":"vlak","example":"Der Zug kommt. — Vlak prichádza."},{"word":"die Bahn","meaning":"železnica • cestovanie vlakom","example":"Ich fahre mit der Bahn. — Cestujem vlakom."},{"word":"der Bus","meaning":"autobus","example":"Der Bus kommt. — Autobus prichádza."},{"word":"die Straßenbahn","meaning":"električka","example":"Die Straßenbahn ist hier. — Električka je tu."}],"tip":{"text":"Konkrétny vlak → der Zug."},"important":["Menej časté významy slova Zug nie sú potrebné v hlavnom nadpise A1."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: Zug: porovnanie die Bahn opakovalo vlakom bez významu železnice a veta bola štylisticky nejednotná.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Zug",
  "de_article": "der",
  "de_plural": "die Züge",
  "lv": "vlak",
  "level": "A1",
  "study": {
    "id": "a1-zug",
    "layout": "standardStudy",
    "translation": "vlak",
    "explanation": [
      "Hlavná myšlienka: der Zug na úrovni A1 znamená najmä vlak.",
      "Používa sa pri cestovaní, príchode a odchode."
    ],
    "examples": [
      {
        "de": "Der Zug kommt um acht Uhr.",
        "lv": "Vlak prichádza o ôsmej."
      },
      {
        "de": "Ich fahre mit dem Zug.",
        "lv": "Cestujem vlakom."
      },
      {
        "de": "Der Zug ist voll.",
        "lv": "Vlak je plný."
      },
      {
        "de": "Der Bus kommt später.",
        "lv": "Autobus príde neskôr."
      }
    ],
    "comparison": [
      {
        "word": "der Zug",
        "meaning": "vlak",
        "example": "Der Zug kommt. — Vlak prichádza."
      },
      {
        "word": "die Bahn",
        "meaning": "železnica • cestovanie vlakom",
        "example": "Ich fahre mit der Bahn. — Cestujem vlakom."
      },
      {
        "word": "der Bus",
        "meaning": "autobus",
        "example": "Der Bus kommt. — Autobus prichádza."
      },
      {
        "word": "die Straßenbahn",
        "meaning": "električka",
        "example": "Die Straßenbahn ist hier. — Električka je tu."
      }
    ],
    "tip": {
      "text": "Konkrétny vlak → der Zug."
    },
    "important": [
      "Menej časté významy slova Zug nie sú potrebné v hlavnom nadpise A1."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "Zug",
  "de_article": "der",
  "de_plural": "die Züge",
  "lv": "Vlak",
  "level": "A1",
  "study": {
    "id": "a1-zug",
    "layout": "standardStudy",
    "translation": "Vlak",
    "explanation": [
      "Hlavná myšlienka: der Zug na úrovni A1 najčastejšie znamená vlak.",
      "Používa sa pri každodennej jazde, pri príchode a odchode.",
      "V iných významoch môže byť Zug pochod, prievan alebo funkcia, ale to nie sú hlavné významy A1.",
      "Veľmi obľúbené frázy sú mit dem Zug fahren a Der Zug kommt."
    ],
    "examples": [
      {
        "de": "Der Zug kommt um acht Uhr.",
        "lv": "Vlak prichádza o ôsmej."
      },
      {
        "de": "Ich fahre mit dem Zug.",
        "lv": "Cestujem vlakom"
      },
      {
        "de": "Der Zug ist voll.",
        "lv": "Vlak je plný."
      },
      {
        "de": "Der Bus kommt später.",
        "lv": "Autobus príde neskôr."
      }
    ],
    "comparison": [
      {
        "word": "der Zug",
        "meaning": "Vlak",
        "example": "Vlak prichádza."
      },
      {
        "word": "die Bahn",
        "meaning": "Cestovanie vlakom/vlakom",
        "example": "Jazdím vlakom."
      },
      {
        "word": "der Bus",
        "meaning": "Autobus",
        "example": "Autobus prichádza."
      },
      {
        "word": "die Straßenbahn",
        "meaning": "Električka",
        "example": "Električka je tu."
      }
    ],
    "tip": {
      "text": "Pamätajte: konkrétny vlak → der Zug."
    },
    "important": [
      "Der Zug v názve treba čítať ako „vlak“.",
      "Menej bežné významy nie sú potrebné v hlavnom nadpise A1."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Zug",
          "Zug",
          "mit dem Zug fahren"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Zug"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "mit dem Zug"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Zug"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "Bus"
            ]
          },
          "lv": {
            "red": [
              "Autobus"
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
          "meaning": {},
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
          "meaning": {},
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
              "Autobus"
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
              "Električka"
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
            "Pamätajte"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "der Zug"
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 18

**Audit ID:** `LRB093-0018`
**Finding Stable ID:** `g2/a1/sk|zum|idx:672|lv / study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sk
**Card:** `zum|idx:672`
**Field / path:** `lv / study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Do • Hodiny","study.translation":"Do • Hodiny","study.explanation":"[\"Zum je skratka predložky zu a člena dem.\",\"Plná forma: zu dem (komu?).\",\"Používa sa s podstatnými menami mužského a stredného rodu na označenie smeru alebo účelu.\",\"Často to znamená niečo alebo niekoho - lekára, stanicu, priateľa.\",\"V praxi sa takmer vždy používa zum namiesto úplného zu dem.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Idem k lekárovi.\"},{\"de\":\"Wir fahren zum Bahnhof.\",\"lv\":\"Ideme na stanicu.\"},{\"de\":\"Sie geht zum Supermarkt.\",\"lv\":\"Ide do obchodu.\"},{\"de\":\"Komm zum Essen!\",\"lv\":\"Poď jesť!\"},{\"de\":\"Er fährt zum Flughafen.\",\"lv\":\"Ide na letisko.\"},{\"de\":\"Wir gehen zum Konzert.\",\"lv\":\"Ideme na koncert.\"},{\"de\":\"Das Geschenk ist zum Geburtstag.\",\"lv\":\"Darček je k narodeninám.\"},{\"de\":\"Ich gehe zum Friseur.\",\"lv\":\"Idem ku kaderníčke.\"}]","study.comparison":"[{\"word\":\"zum\",\"meaning\":\"Komu / u (koho?)\",\"example\":\"zum Arzt – K lekárovi\"},{\"word\":\"zur\",\"meaning\":\"Do/do (rodiny manželky)\",\"example\":\"zur Schule – Do školy\"},{\"word\":\"zu\",\"meaning\":\"Aj do /w/\",\"example\":\"zu Hause – Doma\"},{\"word\":\"nach\",\"meaning\":\"Komu (mestá/krajiny)\",\"example\":\"nach Berlin – Do Berlína\"},{\"word\":\"bei\",\"meaning\":\"V (umiestnenie)\",\"example\":\"beim Arzt – K lekárovi\"}]","study.tip":"[\"Pamätajte: zu + dem → zum (pre koho?).\",\"Pre ženské slová: zu + der → zur.\"]","study.important":"[\"Zum = zu dem, len s mužským alebo bezrodovým podstatným menom, pre koho? v skloňovaní.\",\"Označuje smer alebo cieľ: k lekárovi, na stanicu, ku kamarátovi.\",\"V prípade ženského rodu sa používa zur: zur Bank, zur Post.\",\"Nezamieňať s bei (nájdené v) alebo nach (do miest bez článku).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"k • na","study":{"id":"a1-zum","layout":"standardStudy","translation":"k • na","explanation":["Hlavná myšlienka: zum je skrátené zu dem a vyjadruje smer alebo účel s mužským či stredným podstatným menom.","Pre ženský rod sa používa zur."],"examples":[{"de":"Ich gehe zum Arzt.","lv":"Idem k lekárovi."},{"de":"Wir fahren zum Bahnhof.","lv":"Ideme na stanicu."},{"de":"Sie geht zum Supermarkt.","lv":"Ide do supermarketu."},{"de":"Komm zum Essen!","lv":"Poď jesť!"},{"de":"Er fährt zum Flughafen.","lv":"Ide na letisko."},{"de":"Wir gehen zum Konzert.","lv":"Ideme na koncert."},{"de":"Das Geschenk ist zum Geburtstag.","lv":"Darček je k narodeninám."},{"de":"Ich gehe zum Friseur.","lv":"Idem ku kaderníkovi."}],"comparison":[{"word":"zum","meaning":"k s zu dem","example":"zum Arzt — k lekárovi"},{"word":"zur","meaning":"k • do s zu der","example":"zur Schule — do školy"},{"word":"zu","meaning":"k • pri • doma","example":"zu Hause — doma"},{"word":"nach","meaning":"do mesta alebo krajiny","example":"nach Berlin — do Berlína"},{"word":"bei","meaning":"pri bez pohybu","example":"beim Arzt — u lekára"}],"tip":{"text":"zu + dem → zum; zu + der → zur."},"important":["bei zvyčajne opisuje polohu, zum smer."],"sectionAccents":{"examples":[{},{},{},{},{},{},{},{}],"comparison":[{},{},{},{},{}]}}}
**Note:** OWNER approved override: zum: názov obsahoval hodiny, porovnania mali nezmyselné rodové a smerové popisy a Friseur zmenil pohlavie.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "zum",
  "lv": "k • na",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "k • na",
    "explanation": [
      "Hlavná myšlienka: zum je skrátené zu dem a vyjadruje smer alebo účel s mužským či stredným podstatným menom.",
      "Pre ženský rod sa používa zur."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Idem k lekárovi."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "Ideme na stanicu."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "Ide do supermarketu."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Poď jesť!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "Ide na letisko."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Ideme na koncert."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "Darček je k narodeninám."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Idem ku kaderníkovi."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "k s zu dem",
        "example": "zum Arzt — k lekárovi"
      },
      {
        "word": "zur",
        "meaning": "k • do s zu der",
        "example": "zur Schule — do školy"
      },
      {
        "word": "zu",
        "meaning": "k • pri • doma",
        "example": "zu Hause — doma"
      },
      {
        "word": "nach",
        "meaning": "do mesta alebo krajiny",
        "example": "nach Berlin — do Berlína"
      },
      {
        "word": "bei",
        "meaning": "pri bez pohybu",
        "example": "beim Arzt — u lekára"
      }
    ],
    "tip": {
      "text": "zu + dem → zum; zu + der → zur."
    },
    "important": [
      "bei zvyčajne opisuje polohu, zum smer."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
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
  "lv": "Do • Hodiny",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "Do • Hodiny",
    "explanation": [
      "Zum je skratka predložky zu a člena dem.",
      "Plná forma: zu dem (komu?).",
      "Používa sa s podstatnými menami mužského a stredného rodu na označenie smeru alebo účelu.",
      "Často to znamená niečo alebo niekoho - lekára, stanicu, priateľa.",
      "V praxi sa takmer vždy používa zum namiesto úplného zu dem."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Idem k lekárovi."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "Ideme na stanicu."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "Ide do obchodu."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Poď jesť!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "Ide na letisko."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Ideme na koncert."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "Darček je k narodeninám."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Idem ku kaderníčke."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "Komu / u (koho?)",
        "example": "zum Arzt – K lekárovi"
      },
      {
        "word": "zur",
        "meaning": "Do/do (rodiny manželky)",
        "example": "zur Schule – Do školy"
      },
      {
        "word": "zu",
        "meaning": "Aj do /w/",
        "example": "zu Hause – Doma"
      },
      {
        "word": "nach",
        "meaning": "Komu (mestá/krajiny)",
        "example": "nach Berlin – Do Berlína"
      },
      {
        "word": "bei",
        "meaning": "V (umiestnenie)",
        "example": "beim Arzt – K lekárovi"
      }
    ],
    "tip": [
      "Pamätajte: zu + dem → zum (pre koho?).",
      "Pre ženské slová: zu + der → zur."
    ],
    "important": [
      "Zum = zu dem, len s mužským alebo bezrodovým podstatným menom, pre koho? v skloňovaní.",
      "Označuje smer alebo cieľ: k lekárovi, na stanicu, ku kamarátovi.",
      "V prípade ženského rodu sa používa zur: zur Bank, zur Post.",
      "Nezamieňať s bei (nájdené v) alebo nach (do miest bez článku)."
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
            "zum"
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
        {
          "yellow": [
            "zur Bank",
            "zur Post"
          ]
        },
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

## Finding 19

**Audit ID:** `LRB093-0019`
**Finding Stable ID:** `g2/a1/sl|ab|idx:17|study.examples.lv, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `ab|idx:17`
**Field / path:** `study.examples.lv, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.examples.lv":null,"study.comparison":"[{\"word\":\"ab\",\"meaning\":\"začenši od točke/časa\",\"example\":\"od ponedeljka – od ponedeljka\"},{\"word\":\"von\",\"meaning\":\"od nekoga/nečesa • izvor\",\"example\":\"od mene – od mene\"},{\"word\":\"aus\",\"meaning\":\"ven iz notranjosti\",\"example\":\"iz hiše – iz hiše / ven iz hiše\"}]","study.important":"[\"ab kaže začetno točko v času ali kraju.\",\"Če je misljeno izvor ali smer ven iz notranjosti, pogosteje uporabite von ali aus.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"od","study":{"id":"a1-ab","layout":"standardStudy","translation":"od","explanation":["Glavna ideja: ab označuje začetek pri določenem času, kraju ali izhodišču.","Pogosto pomeni začenši od."],"examples":[{"de":"ab heute","lv":"od danes","level":"A1"},{"de":"ab Montag","lv":"od ponedeljka"},{"de":"ab 8 Uhr","lv":"od 8. ure"},{"de":"ab Bahnhof","lv":"od postaje"}],"comparison":[{"word":"ab","meaning":"začenši od točke ali časa","example":"ab Montag — od ponedeljka"},{"word":"von","meaning":"od osebe ali stvari • izvor","example":"von mir — od mene"},{"word":"aus","meaning":"iz notranjosti","example":"aus dem Haus — iz hiše • ven iz hiše"}],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{}]},"tip":{"text":"Začetna točka v času ali prostoru → ab."},"important":["Za izvor ali gibanje iz notranjosti navadno uporabimo von oziroma aus."]}}
**Note:** OWNER approved override: ab: naslov, razlaga, nasvet, poudarki in primerjalni nemški deli so ostali v latvijščini.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ab",
  "lv": "od",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "od",
    "explanation": [
      "Glavna ideja: ab označuje začetek pri določenem času, kraju ali izhodišču.",
      "Pogosto pomeni začenši od."
    ],
    "examples": [
      {
        "de": "ab heute",
        "lv": "od danes",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "od ponedeljka"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "od 8. ure"
      },
      {
        "de": "ab Bahnhof",
        "lv": "od postaje"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "začenši od točke ali časa",
        "example": "ab Montag — od ponedeljka"
      },
      {
        "word": "von",
        "meaning": "od osebe ali stvari • izvor",
        "example": "von mir — od mene"
      },
      {
        "word": "aus",
        "meaning": "iz notranjosti",
        "example": "aus dem Haus — iz hiše • ven iz hiše"
      }
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {}
      ]
    },
    "tip": {
      "text": "Začetna točka v času ali prostoru → ab."
    },
    "important": [
      "Za izvor ali gibanje iz notranjosti navadno uporabimo von oziroma aus."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "ab",
  "lv": "no • ārā",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "no • ārā",
    "explanation": "Lieto, kad kaut kas sākas no konkrēta laika, vietas vai punkta. Bieži nozīmē “sākot no”.",
    "examples": [
      {
        "de": "ab heute",
        "lv": "od danes",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "od ponedeljka"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "od 8. ure"
      },
      {
        "de": "ab Bahnhof",
        "lv": "od postaje"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "začenši od točke/časa",
        "example": "od ponedeljka – od ponedeljka"
      },
      {
        "word": "von",
        "meaning": "od nekoga/nečesa • izvor",
        "example": "od mene – od mene"
      },
      {
        "word": "aus",
        "meaning": "ven iz notranjosti",
        "example": "iz hiše – iz hiše / ven iz hiše"
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
              "no"
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
              "no"
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
              "no"
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
              "no"
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
              "no"
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
              "no"
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
              "no"
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
            "sākuma punkts"
          ],
          "green": [
            "laikā",
            "vietā"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "ab"
          ],
          "purple": [
            "sākuma punktu"
          ],
          "green": [
            "laikā",
            "vietā"
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
            "izcelsme",
            "ārā no iekšienes"
          ]
        }
      ]
    },
    "tip": {
      "text": "Atceries: sākuma punkts laikā/vietā → ab."
    },
    "important": [
      "ab kaže začetno točko v času ali kraju.",
      "Če je misljeno izvor ali smer ven iz notranjosti, pogosteje uporabite von ali aus."
    ]
  }
}
```

---

## Finding 20

**Audit ID:** `LRB093-0020`
**Finding Stable ID:** `g2/a1/sl|aber|idx:21|study.explanation, study.examples.lv, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `aber|idx:21`
**Field / path:** `study.explanation, study.examples.lv, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"Lieto, lai ieviestu pretstatu vai izteiktu iebildi. Bieži nozīmē “bet”, “tomēr” vai “taču”.","study.examples.lv":null,"study.comparison":"[{\"word\":\"aber\",\"meaning\":\"nasprotje • ugovor • vseeno\",\"example\":\"Ich komme, aber später. – Pridem, toda kasneje.\"},{\"word\":\"sondern\",\"meaning\":\"ne • toda\",\"example\":\"Ich wollte keinen Tee, sondern Kaffee. – Es gribēju tēju, nevis kafiju.\"},{\"word\":\"jedoch\",\"meaning\":\"vseeno\",\"example\":\"Es ist kalt, jedoch sonnig. – Mrzlo je, vendar sončno.\"}]","study.important":"[\"aber kaže nasprotje ali ugovor.\",\"Če je nasprotje \\\"ne..., toda...\\\", nemščina ponavadi uporablja sondern.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ampak","study":{"id":"a1-aber","layout":"standardStudy","translation":"ampak","explanation":["Glavna ideja: aber uvaja nasprotje ali ugovor in pomeni ampak oziroma vendar.","Za vzorec ne ... temveč ... se uporablja sondern."],"examples":[{"de":"Ich möchte mitkommen, aber ich habe keine Zeit.","lv":"Rad bi šel zraven, ampak nimam časa."},{"de":"Das Essen war lecker, aber zu teuer.","lv":"Hrana je bila okusna, ampak predraga."},{"de":"Er hat recht, aber ich sehe das anders.","lv":"Prav ima, vendar jaz to vidim drugače."}],"comparison":[{"word":"aber","meaning":"nasprotje • ugovor","example":"Ich komme, aber später. — Pridem, ampak pozneje."},{"word":"sondern","meaning":"ne ... temveč ...","example":"Ich wollte keinen Tee, sondern Kaffee. — Nisem hotel čaja, temveč kavo."},{"word":"jedoch","meaning":"vendar","example":"Es ist kalt, jedoch sonnig. — Mrzlo je, vendar sončno."}],"tip":{"text":"Nasprotje ali ugovor → aber."},"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]},"important":["Za ne ... temveč ... nemščina navadno uporablja sondern."]}}
**Note:** OWNER approved override: aber: razlaga in nasvet sta ostala latvijska, drugi primer je imel pretipkano predorga, primerjava sondern pa latvijski ostanek.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aber",
  "lv": "ampak",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "ampak",
    "explanation": [
      "Glavna ideja: aber uvaja nasprotje ali ugovor in pomeni ampak oziroma vendar.",
      "Za vzorec ne ... temveč ... se uporablja sondern."
    ],
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Rad bi šel zraven, ampak nimam časa."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Hrana je bila okusna, ampak predraga."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Prav ima, vendar jaz to vidim drugače."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "nasprotje • ugovor",
        "example": "Ich komme, aber später. — Pridem, ampak pozneje."
      },
      {
        "word": "sondern",
        "meaning": "ne ... temveč ...",
        "example": "Ich wollte keinen Tee, sondern Kaffee. — Nisem hotel čaja, temveč kavo."
      },
      {
        "word": "jedoch",
        "meaning": "vendar",
        "example": "Es ist kalt, jedoch sonnig. — Mrzlo je, vendar sončno."
      }
    ],
    "tip": {
      "text": "Nasprotje ali ugovor → aber."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {}
      ]
    },
    "important": [
      "Za ne ... temveč ... nemščina navadno uporablja sondern."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "aber",
  "lv": "toda",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "toda",
    "explanation": "Lieto, lai ieviestu pretstatu vai izteiktu iebildi. Bieži nozīmē “bet”, “tomēr” vai “taču”.",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "rad bi šel s seboj, toda nimam časa."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "hrana je bila okusna, toda predorga."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "on ima prav, toda mislim drugače."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "nasprotje • ugovor • vseeno",
        "example": "Ich komme, aber später. – Pridem, toda kasneje."
      },
      {
        "word": "sondern",
        "meaning": "ne • toda",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Es gribēju tēju, nevis kafiju."
      },
      {
        "word": "jedoch",
        "meaning": "vseeno",
        "example": "Es ist kalt, jedoch sonnig. – Mrzlo je, vendar sončno."
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
              "bet"
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
              "bet"
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
              "taču"
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
              "bet"
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
              "nevis"
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
              "tomēr"
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
            "pretstats",
            "iebilde"
          ]
        }
      },
      "important": [
        {
          "green": [
            "aber"
          ],
          "purple": [
            "pretstatu",
            "iebildi"
          ]
        },
        {
          "yellow": [
            "sondern"
          ],
          "purple": [
            "nevis",
            "bet gan"
          ]
        }
      ]
    },
    "important": [
      "aber kaže nasprotje ali ugovor.",
      "Če je nasprotje \"ne..., toda...\", nemščina ponavadi uporablja sondern."
    ]
  }
}
```

---

## Finding 21

**Audit ID:** `LRB093-0021`
**Finding Stable ID:** `g2/a1/sl|also|idx:26|study.examples, study.comparison, study.important|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** sl
**Card:** `also|idx:26`
**Field / path:** `study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Es regnet, also bleibe ich zu Hause.\",\"lv\":\"dežuje, zato ostamem doma.\"},{\"de\":\"Du bist krank, also gehst du nicht zur Arbeit.\",\"lv\":\"bolan si, zato ne pojdi v službo.\"},{\"de\":\"Ich habe viel gelernt, also verstehe ich es jetzt.\",\"lv\":\"veliko sem se učil, torej zdaj razumem.\"}]","study.comparison":"[{\"word\":\"also\",\"meaning\":\"torej • zato\",\"example\":\"Es regnet, also bleibe ich zu Hause. – Dežuje, torej ostamem doma.\"},{\"word\":\"auch\",\"meaning\":\"tudi\",\"example\":\"Ich komme auch. – Tudi jaz pridem.\"},{\"word\":\"deshalb\",\"meaning\":\"zato\",\"example\":\"Es regnet, deshalb bleibe ich zu Hause. – Dežuje, zato ostamem doma.\"}]","study.important":"[\"also kaže zaključek: iz prej povedanega izhaja naslednja misel.\",\"Latvijski \\\"tāpēc\\\" je pogosto tudi deshalb.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"torej","study":{"id":"a1-also","layout":"standardStudy","translation":"torej","explanation":["Glavna ideja: also uvaja sklep, ki izhaja iz prejšnje trditve.","V slovenščini ga glede na sobesedilo prevedemo kot torej ali zato."],"examples":[{"de":"Es regnet, also bleibe ich zu Hause.","lv":"Dežuje, zato ostanem doma."},{"de":"Du bist krank, also gehst du nicht zur Arbeit.","lv":"Bolan si, torej ne greš v službo."},{"de":"Ich habe viel gelernt, also verstehe ich es jetzt.","lv":"Veliko sem se učil, zato zdaj razumem."}],"comparison":[{"word":"also","meaning":"torej • zato","example":"Es regnet, also bleibe ich zu Hause. — Dežuje, zato ostanem doma."},{"word":"auch","meaning":"tudi","example":"Ich komme auch. — Tudi jaz pridem."},{"word":"deshalb","meaning":"zato","example":"Es regnet, deshalb bleibe ich zu Hause. — Dežuje, zato ostanem doma."}],"tip":{"text":"Sklep iz prejšnje trditve → also."},"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]},"important":["also izraža sklep; deshalb pogosto pomeni zato."]}}
**Note:** OWNER approved override: also: drugi primer je spreminjal povedni prihodnjik v velelnik, v besedilu pa so ostali latvijski deli.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "also",
  "lv": "torej",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "torej",
    "explanation": [
      "Glavna ideja: also uvaja sklep, ki izhaja iz prejšnje trditve.",
      "V slovenščini ga glede na sobesedilo prevedemo kot torej ali zato."
    ],
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Dežuje, zato ostanem doma."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Bolan si, torej ne greš v službo."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Veliko sem se učil, zato zdaj razumem."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "torej • zato",
        "example": "Es regnet, also bleibe ich zu Hause. — Dežuje, zato ostanem doma."
      },
      {
        "word": "auch",
        "meaning": "tudi",
        "example": "Ich komme auch. — Tudi jaz pridem."
      },
      {
        "word": "deshalb",
        "meaning": "zato",
        "example": "Es regnet, deshalb bleibe ich zu Hause. — Dežuje, zato ostanem doma."
      }
    ],
    "tip": {
      "text": "Sklep iz prejšnje trditve → also."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {}
      ]
    },
    "important": [
      "also izraža sklep; deshalb pogosto pomeni zato."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "also",
  "lv": "torej",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "torej",
    "explanation": "Lieto, lai izdarītu secinājumu vai parādītu rezultātu. Nozīmē “tātad”, “līdz ar to”.",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "dežuje, zato ostamem doma."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "bolan si, zato ne pojdi v službo."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "veliko sem se učil, torej zdaj razumem."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "torej • zato",
        "example": "Es regnet, also bleibe ich zu Hause. – Dežuje, torej ostamem doma."
      },
      {
        "word": "auch",
        "meaning": "tudi",
        "example": "Ich komme auch. – Tudi jaz pridem."
      },
      {
        "word": "deshalb",
        "meaning": "zato",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Dežuje, zato ostamem doma."
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
              "tāpēc"
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
              "tāpēc"
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
              "tātad"
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
              "tātad"
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
              "arī"
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
              "tāpēc"
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
            "secinājums"
          ]
        }
      },
      "important": [
        {
          "green": [
            "also"
          ],
          "purple": [
            "secinājumu"
          ]
        },
        {
          "green": [
            "deshalb"
          ],
          "purple": [
            "tāpēc"
          ]
        }
      ]
    },
    "important": [
      "also kaže zaključek: iz prej povedanega izhaja naslednja misel.",
      "Latvijski \"tāpēc\" je pogosto tudi deshalb."
    ]
  }
}
```

---

## Finding 22

**Audit ID:** `LRB093-0022`
**Finding Stable ID:** `g2/a1/sl|an|idx:12|study.explanation, study.examples.lv, study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `an|idx:12`
**Field / path:** `study.explanation, study.examples.lv, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"Lieto, kad kaut kas atrodas pie sienas, loga, durvīm, upes, jūras krasta vai citas malas/virsmas.","study.examples.lv":null,"study.comparison":"[{\"word\":\"an\",\"meaning\":\"ob površini ali robu\",\"example\":\"an der Wand – ob steni\"},{\"word\":\"auf\",\"meaning\":\"na vodoravni površini\",\"example\":\"auf dem Tisch – na mizi\"},{\"word\":\"bei\",\"meaning\":\"pri osebi ali mestu\",\"example\":\"beim Arzt – pri zdravniku\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ob • na","study":{"id":"a1-an","layout":"standardStudy","translation":"ob • na","explanation":["Glavna ideja: an označuje položaj ob robu ali stik z navpično površino.","Pri steni je slovenski prevod pogosto na, pri oknu ali morju pa ob."],"examples":[{"de":"an der Wand","lv":"na steni"},{"de":"am Fenster","lv":"ob oknu"},{"de":"am Meer","lv":"ob morju"}],"comparison":[{"word":"an","meaning":"ob robu ali na navpični površini","example":"an der Wand — na steni"},{"word":"auf","meaning":"na vodoravni površini","example":"auf dem Tisch — na mizi"},{"word":"bei","meaning":"pri osebi ali ustanovi","example":"beim Arzt — pri zdravniku"}],"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]},"tip":{"text":"Stena, okno ali rob → an."},"important":["Za vodoravno površino se navadno uporablja auf."]}}
**Note:** OWNER approved override: an: celotna razlaga in nasvet sta bila latvijska, naslov pa ni podal naravnega slovenskega pomena za an der Wand.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "an",
  "lv": "ob • na",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "ob • na",
    "explanation": [
      "Glavna ideja: an označuje položaj ob robu ali stik z navpično površino.",
      "Pri steni je slovenski prevod pogosto na, pri oknu ali morju pa ob."
    ],
    "examples": [
      {
        "de": "an der Wand",
        "lv": "na steni"
      },
      {
        "de": "am Fenster",
        "lv": "ob oknu"
      },
      {
        "de": "am Meer",
        "lv": "ob morju"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "ob robu ali na navpični površini",
        "example": "an der Wand — na steni"
      },
      {
        "word": "auf",
        "meaning": "na vodoravni površini",
        "example": "auf dem Tisch — na mizi"
      },
      {
        "word": "bei",
        "meaning": "pri osebi ali ustanovi",
        "example": "beim Arzt — pri zdravniku"
      }
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {}
      ]
    },
    "tip": {
      "text": "Stena, okno ali rob → an."
    },
    "important": [
      "Za vodoravno površino se navadno uporablja auf."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "an",
  "lv": "pie • uz • klāt",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "pie • pie virsmas • pie malas",
    "explanation": "Lieto, kad kaut kas atrodas pie sienas, loga, durvīm, upes, jūras krasta vai citas malas/virsmas.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "ob steni / na steni"
      },
      {
        "de": "am Fenster",
        "lv": "ob oknu"
      },
      {
        "de": "am Meer",
        "lv": "ob morju"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "ob površini ali robu",
        "example": "an der Wand – ob steni"
      },
      {
        "word": "auf",
        "meaning": "na vodoravni površini",
        "example": "auf dem Tisch – na mizi"
      },
      {
        "word": "bei",
        "meaning": "pri osebi ali mestu",
        "example": "beim Arzt – pri zdravniku"
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
              "pie",
              "uz"
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
              "pie"
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
              "pie"
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
              "pie"
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
              "uz"
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
              "pie"
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
            "pie"
          ],
          "green": [
            "sienas",
            "loga",
            "malas"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "an"
          ],
          "purple": [
            "pie"
          ],
          "green": [
            "virsmas",
            "sienas",
            "loga",
            "malas"
          ]
        },
        {
          "yellow": [
            "auf"
          ],
          "purple": [
            "uz horizontālas virsmas"
          ]
        }
      ]
    },
    "tip": {
      "text": "Atceries: pie sienas/loga/malas → an."
    },
    "important": [
      "an ni vsakršen \"pri\". Pogosto pomeni ob površini, steni, oknu ali robu.",
      "Na vodoravni površini ponavadi uporabite auf."
    ]
  }
}
```

---

## Finding 23

**Audit ID:** `LRB093-0023`
**Finding Stable ID:** `g2/a1/sl|Appetit|idx:689|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** sl
**Card:** `Appetit|idx:689`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"apetit","study.translation":"apetit","study.explanation":"[\"Glavna ideja: Občutek želje po jesti. samo ednina - brez množine.\",\"der Appetit predvsem pomeni: volja za hrano.\",\"Pogosto značilno: (samo ednina).\",\"der Appetit je samo ednina — apetit.\",\"Na ravni A1 so pogosto skupaj, na primer: Guten Appetit!\"]","study.examples":"[{\"de\":\"Guten Appetit!\",\"lv\":\"Labu apetit!\"},{\"de\":\"Guten Appetit!\",\"lv\":\"dober apetit!\"},{\"de\":\"Ich habe keinen Appetit.\",\"lv\":\"nimam apetita.\"}]","study.tip":"[\"der Appetit = apetit\",\"Uporablja der Appetit, kadar kontekst ustreza temu pomenu.\"]","study.important":"[\"der Appetit je samo ednina.\",\"Nepravilno: die Appetite → Pravilno: der Appetit\",\"Nepravilno: Ich bin Appetit. → Pravilno: Ich habe Appetit.\",\"Občutek: der Appetit.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"apetit","study":{"id":"a1-appetit","layout":"standardStudy","translation":"apetit","explanation":["Glavna ideja: der Appetit pomeni apetit in se v nemščini uporablja v ednini.","Guten Appetit! je ustaljena želja Dober tek!."],"examples":[{"de":"Guten Appetit!","lv":"Dober tek!"},{"de":"Guten Appetit!","lv":"Dober tek!"},{"de":"Ich habe keinen Appetit.","lv":"Nimam apetita."}],"tip":{"text":"der Appetit = apetit."},"important":["Pravilno je Ich habe Appetit, ne Ich bin Appetit."],"sectionAccents":{"examples":[{},{},{}],"comparison":[]},"comparison":[]}}
**Note:** OWNER approved override: Appetit: Guten Appetit je bil dobesedno in napačno preveden kot Labu apetit ali dober apetit, pojasnila pa so ostala latvijska.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Appetit",
  "de_article": "der",
  "lv": "apetit",
  "level": "A1",
  "study": {
    "id": "a1-appetit",
    "layout": "standardStudy",
    "translation": "apetit",
    "explanation": [
      "Glavna ideja: der Appetit pomeni apetit in se v nemščini uporablja v ednini.",
      "Guten Appetit! je ustaljena želja Dober tek!."
    ],
    "examples": [
      {
        "de": "Guten Appetit!",
        "lv": "Dober tek!"
      },
      {
        "de": "Guten Appetit!",
        "lv": "Dober tek!"
      },
      {
        "de": "Ich habe keinen Appetit.",
        "lv": "Nimam apetita."
      }
    ],
    "tip": {
      "text": "der Appetit = apetit."
    },
    "important": [
      "Pravilno je Ich habe Appetit, ne Ich bin Appetit."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Appetit",
  "de_article": "der",
  "lv": "apetit",
  "level": "A1",
  "study": {
    "id": "a1-appetit",
    "layout": "standardStudy",
    "translation": "apetit",
    "explanation": [
      "Glavna ideja: Občutek želje po jesti. samo ednina - brez množine.",
      "der Appetit predvsem pomeni: volja za hrano.",
      "Pogosto značilno: (samo ednina).",
      "der Appetit je samo ednina — apetit.",
      "Na ravni A1 so pogosto skupaj, na primer: Guten Appetit!"
    ],
    "examples": [
      {
        "de": "Guten Appetit!",
        "lv": "Labu apetit!"
      },
      {
        "de": "Guten Appetit!",
        "lv": "dober apetit!"
      },
      {
        "de": "Ich habe keinen Appetit.",
        "lv": "nimam apetita."
      }
    ],
    "tip": [
      "der Appetit = apetit",
      "Uporablja der Appetit, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "der Appetit je samo ednina.",
      "Nepravilno: die Appetite → Pravilno: der Appetit",
      "Nepravilno: Ich bin Appetit. → Pravilno: Ich habe Appetit.",
      "Občutek: der Appetit."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Appetit",
          "appetit"
        ],
        "purple": [
          "apetīte",
          "Appetit"
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
              "apetīti"
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
              "apetīti"
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
              "apetītes"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "apetīte"
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

## Finding 24

**Audit ID:** `LRB093-0024`
**Finding Stable ID:** `g2/a1/sl|auch|idx:48|study|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sl
**Card:** `auch|idx:48`
**Field / path:** `study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"tudi","study.explanation":"[\"Glavna ideja: Najpogostejši in nevtralni \\\"tudi\\\".\",\"auch predvsem pomeni: preprosto \\\"tudi\\\".\",\"Pogosto opisuje: dodatek.\",\"auch je najbolj pogost beseda \\\"tudi\\\".\"]","study.examples":"[{\"de\":\"Ich komme auch.\",\"lv\":\"Tudi jaz pridem.\"},{\"de\":\"Sie arbeitet auch hier.\",\"lv\":\"es arī nāku.\"},{\"de\":\"Ich wünsche Ihnen auch einen schönen Tag.\",\"lv\":\"viņa arī strādā šeit.\"}]","study.tip":"[\"auch = tudi\",\"Uporabite auch, kadar kontekst ustreza temu pomenu.\"]","study.important":"[\"Ich auch wünsche Ihnen nav pareiza vārdu kārtība.\",\"auch = arī.\",\"Napačno: Ich auch wünsche Ihnen einen schönen Tag.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"tudi","study":{"id":"a1-auch-study","layout":"standardStudy","translation":"tudi","explanation":["Glavna ideja: auch je nevtralna beseda za dodajanje osebe, dejanja ali lastnosti in pomeni tudi."],"examples":[{"de":"Ich komme auch.","lv":"Tudi jaz pridem."},{"de":"Sie arbeitet auch hier.","lv":"Tudi ona dela tukaj."},{"de":"Ich wünsche Ihnen auch einen schönen Tag.","lv":"Tudi vam želim lep dan."}],"tip":{"text":"auch = tudi."},"important":["Besedni red v Ich wünsche Ihnen auch einen schönen Tag ohrani auch ob dodani informaciji."],"sectionAccents":{"examples":[{},{},{}],"comparison":[]},"comparison":[]}}
**Note:** OWNER approved override: auch: drugi in tretji ciljni primer sta bila zamaknjena in sta ostala v latvijščini.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auch",
  "lv": "tudi",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "tudi",
    "explanation": [
      "Glavna ideja: auch je nevtralna beseda za dodajanje osebe, dejanja ali lastnosti in pomeni tudi."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Tudi jaz pridem."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "Tudi ona dela tukaj."
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "Tudi vam želim lep dan."
      }
    ],
    "tip": {
      "text": "auch = tudi."
    },
    "important": [
      "Besedni red v Ich wünsche Ihnen auch einen schönen Tag ohrani auch ob dodani informaciji."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "auch",
  "lv": "tudi",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "tudi",
    "explanation": [
      "Glavna ideja: Najpogostejši in nevtralni \"tudi\".",
      "auch predvsem pomeni: preprosto \"tudi\".",
      "Pogosto opisuje: dodatek.",
      "auch je najbolj pogost beseda \"tudi\"."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Tudi jaz pridem."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "es arī nāku."
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "viņa arī strādā šeit."
      }
    ],
    "tip": [
      "auch = tudi",
      "Uporabite auch, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "Ich auch wünsche Ihnen nav pareiza vārdu kārtība.",
      "auch = arī.",
      "Napačno: Ich auch wünsche Ihnen einen schönen Tag."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "auch",
          "auch"
        ],
        "purple": [
          "arī"
        ],
        "green": [
          "Arī"
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
              "arī"
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
              "arī"
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
              "arī"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "arī"
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

## Finding 25

**Audit ID:** `LRB093-0025`
**Finding Stable ID:** `g2/a1/sl|auf|idx:49|study.examples, study.comparison, study.important|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** sl
**Card:** `auf|idx:49`
**Field / path:** `study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Ich stelle das Buch auf den Tisch.\",\"lv\":\"knjigo postavim na mizo.\"},{\"de\":\"Wir fahren auf den Berg.\",\"lv\":\"vozimo se na hrib.\"},{\"de\":\"Die Katze springt auf das Sofa.\",\"lv\":\"mačka skače na kavč.\"}]","study.comparison":"[{\"word\":\"auf\",\"meaning\":\"na (površina ali navzgor)\",\"example\":\"Ich stelle das Glas auf den Tisch. – Na mizo postavim kozarec.\"},{\"word\":\"an\",\"meaning\":\"ob (navpična površina)\",\"example\":\"Ich hänge das Bild an die Wand. – Sliko obesim na steno.\"},{\"word\":\"in\",\"meaning\":\"znotraj\",\"example\":\"Ich lege das Buch in die Tasche. – Knjigo dam v torbo.\"}]","study.important":"[\"auf ni preprosto vsakršen \\\"na\\\". Pogosto pomeni gibanje ali ležanje na površini/zgoraj.\",\"Če je kaj ob navpični površini, pogosto potrebujete an; če je znotraj, potrebujete in.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"na","study":{"id":"a1-auf","layout":"standardStudy","translation":"na","explanation":["Glavna ideja: auf pri gibanju pogosto pomeni na površino ali navzgor.","Z akuzativom odgovarja na vprašanje kam."],"examples":[{"de":"Ich stelle das Buch auf den Tisch.","lv":"Knjigo postavim na mizo."},{"de":"Wir fahren auf den Berg.","lv":"Peljemo se na goro."},{"de":"Die Katze springt auf das Sofa.","lv":"Mačka skoči na kavč."}],"comparison":[{"word":"auf","meaning":"na površino ali navzgor","example":"Ich stelle das Glas auf den Tisch. — Kozarec postavim na mizo."},{"word":"an","meaning":"na navpično površino","example":"Ich hänge das Bild an die Wand. — Sliko obesim na steno."},{"word":"in","meaning":"v notranjost","example":"Ich lege das Buch in die Tasche. — Knjigo dam v torbo."}],"tip":{"text":"Na površino ali navzgor → auf."},"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]},"important":["Za navpično površino pogosto uporabimo an, za notranjost pa in."]}}
**Note:** OWNER approved override: auf: naslov, razlaga in opombe so ostali latvijski, čeprav so bili posamezni primeri slovenski.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auf",
  "lv": "na",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "na",
    "explanation": [
      "Glavna ideja: auf pri gibanju pogosto pomeni na površino ali navzgor.",
      "Z akuzativom odgovarja na vprašanje kam."
    ],
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "Knjigo postavim na mizo."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "Peljemo se na goro."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "Mačka skoči na kavč."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "na površino ali navzgor",
        "example": "Ich stelle das Glas auf den Tisch. — Kozarec postavim na mizo."
      },
      {
        "word": "an",
        "meaning": "na navpično površino",
        "example": "Ich hänge das Bild an die Wand. — Sliko obesim na steno."
      },
      {
        "word": "in",
        "meaning": "v notranjost",
        "example": "Ich lege das Buch in die Tasche. — Knjigo dam v torbo."
      }
    ],
    "tip": {
      "text": "Na površino ali navzgor → auf."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {}
      ]
    },
    "important": [
      "Za navpično površino pogosto uporabimo an, za notranjost pa in."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "auf",
  "lv": "uz • virsū • kurp?",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "uz • virsū • kurp?",
    "explanation": "Lieto, lai norādītu virzienu uz kādu vietu vai virsmas augšpusi.",
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "knjigo postavim na mizo."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "vozimo se na hrib."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "mačka skače na kavč."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "na (površina ali navzgor)",
        "example": "Ich stelle das Glas auf den Tisch. – Na mizo postavim kozarec."
      },
      {
        "word": "an",
        "meaning": "ob (navpična površina)",
        "example": "Ich hänge das Bild an die Wand. – Sliko obesim na steno."
      },
      {
        "word": "in",
        "meaning": "znotraj",
        "example": "Ich lege das Buch in die Tasche. – Knjigo dam v torbo."
      }
    ],
    "tip": {
      "text": "Atceries: uz virsmas/augšā → auf."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "auf"
            ]
          },
          "lv": {
            "purple": [
              "uz"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "auf"
            ]
          },
          "lv": {
            "purple": [
              "uz"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "auf"
            ]
          },
          "lv": {
            "purple": [
              "uz"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "auf"
            ]
          },
          "example": {
            "blue": [
              "auf"
            ],
            "purple": [
              "uz"
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
              "an",
              "pie"
            ]
          }
        },
        {
          "word": {
            "green": [
              "in"
            ]
          },
          "example": {
            "yellow": [
              "in"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "auf"
          ],
          "purple": [
            "uz"
          ],
          "green": [
            "virsmas",
            "augšā"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "auf"
          ],
          "purple": [
            "uz"
          ],
          "green": [
            "virsmas",
            "augšpusē"
          ]
        },
        {
          "green": [
            "an"
          ],
          "yellow": [
            "in"
          ],
          "purple": [
            "pie",
            "iekšā"
          ]
        }
      ]
    },
    "important": [
      "auf ni preprosto vsakršen \"na\". Pogosto pomeni gibanje ali ležanje na površini/zgoraj.",
      "Če je kaj ob navpični površini, pogosto potrebujete an; če je znotraj, potrebujete in."
    ]
  }
}
```

---

## Finding 26

**Audit ID:** `LRB093-0026`
**Finding Stable ID:** `g2/a1/sl|aufs|idx:60|study|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** sl
**Card:** `aufs|idx:60`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"uz • virsū • kurp?","study.explanation":"[\"aufs je kombinacija predloga auf in člena das.\",\"Polna oblika: auf das (kam?).\",\"Uporabite, kadar dejanje kaže smer na določeno stvar ali površino — odgovori na vprašanje kam?\",\"Pogosto se uporablja z gibanjem: plezati, usesti, položiti, voziti se na kaj.\",\"Sarunvalodā un ikdienā gandrīz vienmēr lieto aufs, nevis pilno auf das.\"]","study.examples":"[{\"de\":\"Ich gehe aufs Dach.\",\"lv\":\"es eju uz jumta.\"},{\"de\":\"Sie setzt sich aufs Sofa.\",\"lv\":\"sedi si na kavču.\"},{\"de\":\"Wir fahren aufs Land.\",\"lv\":\"vozimo se na podeželje.\"},{\"de\":\"Stell die Tasche aufs Bett.\",\"lv\":\"torbo postavi na posteljo.\"},{\"de\":\"Er springt aufs Pferd.\",\"lv\":\"viņš uzkāpj uz zirga.\"},{\"de\":\"Leg das Buch aufs Regal.\",\"lv\":\"ieliec grāmatu uz plaukta.\"},{\"de\":\"Komm schnell aufs Boot!\",\"lv\":\"nāc ātri uz laivas!\"},{\"de\":\"Wir gehen aufs Fest.\",\"lv\":\"gremo na proslavo.\"}]","study.comparison":"[{\"word\":\"aufs\",\"meaning\":\"na določeno stvar (Akk.)\",\"example\":\"aufs Dach – na streho\"},{\"word\":\"auf\",\"meaning\":\"na površino ali navzgor\",\"example\":\"auf den Tisch – na mizo\"},{\"word\":\"an\",\"meaning\":\"ob navpično površino\",\"example\":\"an die Wand – ob steno\"},{\"word\":\"ins\",\"meaning\":\"v notranjost (znotraj prostora)\",\"example\":\"ins Zimmer – v sobo\"},{\"word\":\"zum\",\"meaning\":\"na / pri (komu?)\",\"example\":\"zum Arzt – pri zdravniku\"}]","study.tip":"[\"Ne pozabite: auf + das → aufs (kam?, kam?).\",\"Sarunvalodā gandrīz nekad nesaka pilno auf das — lieto aufs.\"]","study.important":"[\"aufs = auf das, samo pri srednjem spolu (das) kam? sklonu.\",\"Odgovori na kam? — gibanje na določeno mesto ali površino.\",\"Na vodoravni površini pogosto uporabite auf den, ne aufs.\",\"Ne zmešajte z an (ob steni) ali ins (v sobo).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"na","study":{"id":"a1-aufs","layout":"standardStudy","translation":"na","explanation":["Glavna ideja: aufs je skrajšana oblika auf das in z akuzativom označuje gibanje na določeno mesto ali površino.","V vsakdanji nemščini se auf das pogosto skrajša v aufs."],"examples":[{"de":"Ich gehe aufs Dach.","lv":"Grem na streho."},{"de":"Sie setzt sich aufs Sofa.","lv":"Usede se na kavč."},{"de":"Wir fahren aufs Land.","lv":"Peljemo se na podeželje."},{"de":"Stell die Tasche aufs Bett.","lv":"Postavi torbo na posteljo."},{"de":"Er springt aufs Pferd.","lv":"Skoči na konja."},{"de":"Leg das Buch aufs Regal.","lv":"Položi knjigo na polico."},{"de":"Komm schnell aufs Boot!","lv":"Hitro pridi na čoln!"},{"de":"Wir gehen aufs Fest.","lv":"Gremo na praznovanje."}],"comparison":[{"word":"aufs","meaning":"na določeno stvar z akuzativom","example":"aufs Dach — na streho"},{"word":"auf","meaning":"na površino ali navzgor","example":"auf den Tisch — na mizo"},{"word":"an","meaning":"na navpično površino","example":"an die Wand — na steno"},{"word":"ins","meaning":"v notranjost","example":"ins Zimmer — v sobo"},{"word":"zum","meaning":"k osebi ali ustanovi","example":"zum Arzt — k zdravniku"}],"tip":{"text":"auf + das → aufs."},"important":["aufs izraža gibanje na določeno mesto ali površino.","Ne zamenjuj ga z an ali ins."],"sectionAccents":{"examples":[{},{},{},{},{},{},{},{}],"comparison":[{},{},{},{},{}]}}}
**Note:** OWNER approved override: aufs: polovica primerov je ostala latvijska, prvi je imel napačen sklon, naslov in pojasnila pa niso bila slovenska.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aufs",
  "lv": "na",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "na",
    "explanation": [
      "Glavna ideja: aufs je skrajšana oblika auf das in z akuzativom označuje gibanje na določeno mesto ali površino.",
      "V vsakdanji nemščini se auf das pogosto skrajša v aufs."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "Grem na streho."
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "Usede se na kavč."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Peljemo se na podeželje."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "Postavi torbo na posteljo."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "Skoči na konja."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "Položi knjigo na polico."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "Hitro pridi na čoln!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "Gremo na praznovanje."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "na določeno stvar z akuzativom",
        "example": "aufs Dach — na streho"
      },
      {
        "word": "auf",
        "meaning": "na površino ali navzgor",
        "example": "auf den Tisch — na mizo"
      },
      {
        "word": "an",
        "meaning": "na navpično površino",
        "example": "an die Wand — na steno"
      },
      {
        "word": "ins",
        "meaning": "v notranjost",
        "example": "ins Zimmer — v sobo"
      },
      {
        "word": "zum",
        "meaning": "k osebi ali ustanovi",
        "example": "zum Arzt — k zdravniku"
      }
    ],
    "tip": {
      "text": "auf + das → aufs."
    },
    "important": [
      "aufs izraža gibanje na določeno mesto ali površino.",
      "Ne zamenjuj ga z an ali ins."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
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
  "de": "aufs",
  "lv": "uz • virsū • kurp?",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "uz • virsū • kurp?",
    "explanation": [
      "aufs je kombinacija predloga auf in člena das.",
      "Polna oblika: auf das (kam?).",
      "Uporabite, kadar dejanje kaže smer na določeno stvar ali površino — odgovori na vprašanje kam?",
      "Pogosto se uporablja z gibanjem: plezati, usesti, položiti, voziti se na kaj.",
      "Sarunvalodā un ikdienā gandrīz vienmēr lieto aufs, nevis pilno auf das."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "es eju uz jumta."
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "sedi si na kavču."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "vozimo se na podeželje."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "torbo postavi na posteljo."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "viņš uzkāpj uz zirga."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "ieliec grāmatu uz plaukta."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "nāc ātri uz laivas!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "gremo na proslavo."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "na določeno stvar (Akk.)",
        "example": "aufs Dach – na streho"
      },
      {
        "word": "auf",
        "meaning": "na površino ali navzgor",
        "example": "auf den Tisch – na mizo"
      },
      {
        "word": "an",
        "meaning": "ob navpično površino",
        "example": "an die Wand – ob steno"
      },
      {
        "word": "ins",
        "meaning": "v notranjost (znotraj prostora)",
        "example": "ins Zimmer – v sobo"
      },
      {
        "word": "zum",
        "meaning": "na / pri (komu?)",
        "example": "zum Arzt – pri zdravniku"
      }
    ],
    "tip": [
      "Ne pozabite: auf + das → aufs (kam?, kam?).",
      "Sarunvalodā gandrīz nekad nesaka pilno auf das — lieto aufs."
    ],
    "important": [
      "aufs = auf das, samo pri srednjem spolu (das) kam? sklonu.",
      "Odgovori na kam? — gibanje na določeno mesto ali površino.",
      "Na vodoravni površini pogosto uporabite auf den, ne aufs.",
      "Ne zmešajte z an (ob steni) ali ins (v sobo)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "aufs",
          "auf das"
        ],
        "purple": [
          "uz",
          "virsmu",
          "kurp?"
        ],
        "green": [
          "kurp?",
          "kustību"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {
            "purple": [
              "uz jumta"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {
            "purple": [
              "uz dīvāna"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {
            "purple": [
              "uz laukiem"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {
            "purple": [
              "uz gultas"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {
            "purple": [
              "uz zirga"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {
            "purple": [
              "uz plaukta"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {
            "purple": [
              "uz laivas"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {
            "purple": [
              "uz svinībām"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "aufs"
            ]
          },
          "meaning": {
            "purple": [
              "uz konkrētu lietu"
            ]
          },
          "example": {
            "blue": [
              "aufs Dach"
            ]
          }
        },
        {
          "word": {
            "green": [
              "auf"
            ]
          },
          "meaning": {
            "purple": [
              "uz virsmu"
            ]
          },
          "example": {
            "yellow": [
              "auf den Tisch"
            ]
          }
        },
        {
          "word": {
            "green": [
              "an"
            ]
          },
          "meaning": {
            "purple": [
              "pie"
            ]
          },
          "example": {
            "green": [
              "an die Wand"
            ]
          }
        },
        {
          "word": {
            "green": [
              "ins"
            ]
          },
          "meaning": {
            "purple": [
              "uz iekšu"
            ]
          },
          "example": {
            "green": [
              "ins Zimmer"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zum"
            ]
          },
          "meaning": {
            "purple": [
              "uz",
              "pie"
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
            "aufs"
          ],
          "purple": [
            "kurp?"
          ]
        },
        {
          "purple": [
            "auf das"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "aufs"
          ],
          "purple": [
            "auf das"
          ],
          "green": [
            "kurp?"
          ]
        },
        {
          "purple": [
            "kurp?"
          ],
          "green": [
            "kustība"
          ]
        },
        {
          "yellow": [
            "auf den"
          ],
          "red": [
            "aufs"
          ]
        },
        {
          "green": [
            "an"
          ],
          "red": [
            "ins"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 27

**Audit ID:** `LRB093-0027`
**Finding Stable ID:** `g2/a1/sl|aus|idx:57|study.examples, study.comparison, study.important|MIXED_LANGUAGE|gpt-5.6-luna`
**Lang:** sl
**Card:** `aus|idx:57`
**Field / path:** `study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Ich komme aus Deutschland.\",\"lv\":\"iz Nemčije sem.\"},{\"de\":\"Er geht aus dem Haus.\",\"lv\":\"gre ven iz hiše.\"},{\"de\":\"Ich nehme das Buch aus der Tasche.\",\"lv\":\"iz torbe vzamem knjigo.\"}]","study.comparison":"[{\"word\":\"aus\",\"meaning\":\"iz notranjosti, ven iz\",\"example\":\"aus dem Haus – iz hiše\"},{\"word\":\"von\",\"meaning\":\"od osebe, kraja, površine\",\"example\":\"von meinem Freund – od mojega prijatelja\"},{\"word\":\"ab\",\"meaning\":\"začenši od točke ali časa\",\"example\":\"ab Montag – od ponedeljka\"}]","study.important":"[\"aus običajno kaže gibanje ven iz notranjosti ali izvor.\",\"Če je samo začetna točka v času ali kraju, pogosto uporabite ab.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"iz","study":{"id":"a1-aus","layout":"standardStudy","translation":"iz","explanation":["Glavna ideja: aus pomeni iz notranjosti ali označuje izvor.","von se uporablja za osebo, kraj ali površino, ab pa za začetno točko."],"examples":[{"de":"Ich komme aus Deutschland.","lv":"Prihajam iz Nemčije."},{"de":"Er geht aus dem Haus.","lv":"Gre iz hiše."},{"de":"Ich nehme das Buch aus der Tasche.","lv":"Knjigo vzamem iz torbe."}],"comparison":[{"word":"aus","meaning":"iz notranjosti • izvor","example":"aus dem Haus — iz hiše"},{"word":"von","meaning":"od osebe, kraja ali površine","example":"von meinem Freund — od mojega prijatelja"},{"word":"ab","meaning":"začenši od točke ali časa","example":"ab Montag — od ponedeljka"}],"tip":{"text":"Gibanje iz notranjosti → aus."},"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]},"important":["aus pogosto označuje gibanje iz notranjosti ali poreklo."]}}
**Note:** OWNER approved override: aus: naslov, razlaga in opombe so ostali latvijski in celotna sestavljena kartica ni bila v slovenščini.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aus",
  "lv": "iz",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "iz",
    "explanation": [
      "Glavna ideja: aus pomeni iz notranjosti ali označuje izvor.",
      "von se uporablja za osebo, kraj ali površino, ab pa za začetno točko."
    ],
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Prihajam iz Nemčije."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Gre iz hiše."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Knjigo vzamem iz torbe."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "iz notranjosti • izvor",
        "example": "aus dem Haus — iz hiše"
      },
      {
        "word": "von",
        "meaning": "od osebe, kraja ali površine",
        "example": "von meinem Freund — od mojega prijatelja"
      },
      {
        "word": "ab",
        "meaning": "začenši od točke ali časa",
        "example": "ab Montag — od ponedeljka"
      }
    ],
    "tip": {
      "text": "Gibanje iz notranjosti → aus."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {}
      ]
    },
    "important": [
      "aus pogosto označuje gibanje iz notranjosti ali poreklo."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "aus",
  "lv": "no • ārā",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "no • ārā",
    "explanation": "Lieto, kad kaut kas nāk no iekšienes, iznāk ārā vai norāda izcelsmi.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "iz Nemčije sem."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "gre ven iz hiše."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "iz torbe vzamem knjigo."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "iz notranjosti, ven iz",
        "example": "aus dem Haus – iz hiše"
      },
      {
        "word": "von",
        "meaning": "od osebe, kraja, površine",
        "example": "von meinem Freund – od mojega prijatelja"
      },
      {
        "word": "ab",
        "meaning": "začenši od točke ali časa",
        "example": "ab Montag – od ponedeljka"
      }
    ],
    "tip": {
      "text": "Atceries: ārā no iekšienes → aus."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "green": [
              "aus"
            ]
          },
          "lv": {
            "purple": [
              "no"
            ]
          }
        },
        {
          "de": {
            "green": [
              "aus"
            ]
          },
          "lv": {
            "purple": [
              "no"
            ]
          }
        },
        {
          "de": {
            "green": [
              "aus"
            ]
          },
          "lv": {
            "purple": [
              "no"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "aus"
            ]
          },
          "example": {
            "green": [
              "aus"
            ],
            "purple": [
              "no"
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
            "green": [
              "von"
            ],
            "purple": [
              "no"
            ]
          }
        },
        {
          "word": {
            "green": [
              "ab"
            ]
          },
          "example": {
            "yellow": [
              "ab"
            ],
            "purple": [
              "no"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "green": [
            "aus"
          ],
          "purple": [
            "ārā no iekšienes"
          ]
        }
      },
      "important": [
        {
          "green": [
            "aus"
          ],
          "purple": [
            "ārā no iekšienes",
            "izcelsmi"
          ]
        },
        {
          "blue": [
            "ab"
          ],
          "purple": [
            "sākuma punktu"
          ]
        }
      ]
    },
    "important": [
      "aus običajno kaže gibanje ven iz notranjosti ali izvor.",
      "Če je samo začetna točka v času ali kraju, pogosto uporabite ab."
    ]
  }
}
```

---

## Finding 28

**Audit ID:** `LRB093-0028`
**Finding Stable ID:** `g2/a1/sl|baden|idx:68|lv; study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `baden|idx:68`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"plavati","study.translation":"plavati","study.explanation":"[\"Glavna ideja: baden pomeni plavati, biti v vodi ali uživati v vodi.\",\"baden se uporablja, kadar gre za počitek v vodi, jezeru, morju ali bazenu.\",\"baden je lahko tudi umivanje v kadi.\",\"Če je poudarek na samem plavanju kot gibanju ali športu, nemščina običajno uporablja schwimmen.\"]","study.examples":"[{\"de\":\"Ich gehe baden.\",\"lv\":\"grem se plavat.\"},{\"de\":\"Wir gehen im See baden.\",\"lv\":\"gremo se plavat na jezero.\"},{\"de\":\"Er schwimmt sehr gut.\",\"lv\":\"zelo dobro plava.\"},{\"de\":\"Ich schwimme jeden Montag.\",\"lv\":\"es katru pirmdienu eju peldēt.\"}]","study.comparison":"[{\"word\":\"baden\",\"meaning\":\"plavati / biti v vodi / se umivati\",\"example\":\"Grem se kopati.\"},{\"word\":\"schwimmen\",\"meaning\":\"plavati kot gibanje ali šport\",\"example\":\"Plava zelo dobro.\"},{\"word\":\"duschen\",\"meaning\":\"se umivati v prhes\",\"example\":\"Tuširam se zjutraj.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"iti plavat\",\"example\":\"Danes grem plavati.\"}]","study.tip":"{\"text\":\"Atceries: atpūta ūdenī → baden; peldēšanas kustība → schwimmen.\"}","study.important":"[\"baden un schwimmen nav sinonīmi.\",\"Latviski bieži saka vienkārši “peldēt”, bet vācu valodā jāizvēlas pēc situācijas.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"kopati se","study":{"id":"a1-baden","layout":"standardStudy","translation":"kopati se","explanation":["Glavna ideja: baden pomeni kopati se ali biti v vodi zaradi sprostitve.","schwimmen poudarja plavalno gibanje ali šport."],"examples":[{"de":"Ich gehe baden.","lv":"Grem se kopat."},{"de":"Wir gehen im See baden.","lv":"Gremo se kopat v jezero."},{"de":"Er schwimmt sehr gut.","lv":"Zelo dobro plava."},{"de":"Ich schwimme jeden Montag.","lv":"Vsak ponedeljek plavam."}],"comparison":[{"word":"baden","meaning":"kopati se • biti v vodi","example":"Ich gehe baden. — Grem se kopat."},{"word":"schwimmen","meaning":"plavati kot gibanje ali šport","example":"Er schwimmt sehr gut. — Zelo dobro plava."},{"word":"duschen","meaning":"prhati se","example":"Ich dusche am Morgen. — Zjutraj se prham."},{"word":"schwimmen gehen","meaning":"iti plavat","example":"Ich gehe heute schwimmen. — Danes grem plavat."}],"tip":{"text":"Sprostitev v vodi → baden; plavalno gibanje → schwimmen."},"important":["baden in schwimmen nista popolni sopomenki."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: baden: naslov ga je enačil s plavanjem, drugi primer je imel napačen predlog, zadnji primer pa je ostal latvijski.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "baden",
  "lv": "kopati se",
  "level": "A1",
  "study": {
    "id": "a1-baden",
    "layout": "standardStudy",
    "translation": "kopati se",
    "explanation": [
      "Glavna ideja: baden pomeni kopati se ali biti v vodi zaradi sprostitve.",
      "schwimmen poudarja plavalno gibanje ali šport."
    ],
    "examples": [
      {
        "de": "Ich gehe baden.",
        "lv": "Grem se kopat."
      },
      {
        "de": "Wir gehen im See baden.",
        "lv": "Gremo se kopat v jezero."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Zelo dobro plava."
      },
      {
        "de": "Ich schwimme jeden Montag.",
        "lv": "Vsak ponedeljek plavam."
      }
    ],
    "comparison": [
      {
        "word": "baden",
        "meaning": "kopati se • biti v vodi",
        "example": "Ich gehe baden. — Grem se kopat."
      },
      {
        "word": "schwimmen",
        "meaning": "plavati kot gibanje ali šport",
        "example": "Er schwimmt sehr gut. — Zelo dobro plava."
      },
      {
        "word": "duschen",
        "meaning": "prhati se",
        "example": "Ich dusche am Morgen. — Zjutraj se prham."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "iti plavat",
        "example": "Ich gehe heute schwimmen. — Danes grem plavat."
      }
    ],
    "tip": {
      "text": "Sprostitev v vodi → baden; plavalno gibanje → schwimmen."
    },
    "important": [
      "baden in schwimmen nista popolni sopomenki."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "baden",
  "lv": "plavati",
  "level": "A1",
  "study": {
    "id": "a1-baden",
    "layout": "standardStudy",
    "translation": "plavati",
    "explanation": [
      "Glavna ideja: baden pomeni plavati, biti v vodi ali uživati v vodi.",
      "baden se uporablja, kadar gre za počitek v vodi, jezeru, morju ali bazenu.",
      "baden je lahko tudi umivanje v kadi.",
      "Če je poudarek na samem plavanju kot gibanju ali športu, nemščina običajno uporablja schwimmen."
    ],
    "examples": [
      {
        "de": "Ich gehe baden.",
        "lv": "grem se plavat."
      },
      {
        "de": "Wir gehen im See baden.",
        "lv": "gremo se plavat na jezero."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "zelo dobro plava."
      },
      {
        "de": "Ich schwimme jeden Montag.",
        "lv": "es katru pirmdienu eju peldēt."
      }
    ],
    "comparison": [
      {
        "word": "baden",
        "meaning": "plavati / biti v vodi / se umivati",
        "example": "Grem se kopati."
      },
      {
        "word": "schwimmen",
        "meaning": "plavati kot gibanje ali šport",
        "example": "Plava zelo dobro."
      },
      {
        "word": "duschen",
        "meaning": "se umivati v prhes",
        "example": "Tuširam se zjutraj."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "iti plavat",
        "example": "Danes grem plavati."
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
          "peldēties",
          "atrasties ūdenī",
          "baudīt ūdeni",
          "mazgāties vannā"
        ],
        "green": [
          "ezerā",
          "jūrā",
          "baseinā"
        ],
        "red": [
          "schwimmen",
          "peldēšanas kustību",
          "sportu"
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
              "peldēties"
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
              "peldēties"
            ],
            "green": [
              "ezerā"
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
              "peld"
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
              "eju peldēt"
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
              "peldēties",
              "atrasties ūdenī",
              "mazgāties"
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
              "peldēt",
              "kustība",
              "sports"
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
              "mazgāties dušā"
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
              "iet peldēt"
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
            "atpūta ūdenī"
          ],
          "red": [
            "schwimmen",
            "peldēšanas kustība"
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
            "peldēt"
          ],
          "blue": [
            "vācu valodā"
          ],
          "red": [
            "situācijas"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 29

**Audit ID:** `LRB093-0029`
**Finding Stable ID:** `g2/a1/sl|bei|idx:78|study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `bei|idx:78`
**Field / path:** `study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"pie • uz • klāt","study.explanation":"Lieto, ja kaut kas atrodas pie personas, organizācijas, vietas vai notiek kādos apstākļos.","study.examples":"[{\"de\":\"Ich bin bei meinem Freund.\",\"lv\":\"sem pri svojem prijatelju.\"},{\"de\":\"Sie arbeitet bei Siemens.\",\"lv\":\"viņa strādā Siemens.\"},{\"de\":\"Bei Regen bleiben wir zu Hause.\",\"lv\":\"v dežju ostanemo doma.\"}]","study.comparison":"[{\"word\":\"bei\",\"meaning\":\"pri osebi, podjetju ali v določenih okoliščinah\",\"example\":\"Ich bin bei meiner Schwester. – Sem pri svoji sestri.\"},{\"word\":\"an\",\"meaning\":\"ob steni, robu, obali, robu površine\",\"example\":\"Das Bild hängt an der Wand. – Slika visi ob steni.\"},{\"word\":\"zu\",\"meaning\":\"pri kom gre (smer)\",\"example\":\"Ich gehe zu meinem Freund. – Grem pri svojega prijatelja.\"}]","study.tip":"{\"text\":\"Atceries: pie cilvēka/vietas/uzņēmuma → bei.\"}","study.important":"[\"bei pogosto pomeni pri osebi, pri mestu ali pri podjetju.\",\"Če gre za gibanje na površino, ponavadi potrebujete auf, ne bei.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"pri","study":{"id":"a1-bei","layout":"standardStudy","translation":"pri","explanation":["Glavna ideja: bei pomeni pri osebi ali ustanovi in se uporablja tudi za okoliščine.","Za smer k osebi se uporablja zu."],"examples":[{"de":"Ich bin bei meinem Freund.","lv":"Sem pri svojem prijatelju."},{"de":"Sie arbeitet bei Siemens.","lv":"Dela pri Siemensu."},{"de":"Bei Regen bleiben wir zu Hause.","lv":"Ob dežju ostanemo doma."}],"comparison":[{"word":"bei","meaning":"pri osebi, podjetju ali v določenih okoliščinah","example":"Ich bin bei meiner Schwester. — Sem pri svoji sestri."},{"word":"an","meaning":"na steni, robu ali obali","example":"Das Bild hängt an der Wand. — Slika visi na steni."},{"word":"zu","meaning":"k osebi • smer","example":"Ich gehe zu meinem Freund. — Grem k svojemu prijatelju."}],"tip":{"text":"Oseba, ustanova ali okoliščina → bei."},"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]},"important":["Za gibanje k osebi navadno uporabimo zu."]}}
**Note:** OWNER approved override: bei: drugi primer je ostal latvijski, smer zu je bila prevedena z napačnim pri, pojasnila pa niso bila slovenska.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bei",
  "lv": "pri",
  "level": "A1",
  "study": {
    "id": "a1-bei",
    "layout": "standardStudy",
    "translation": "pri",
    "explanation": [
      "Glavna ideja: bei pomeni pri osebi ali ustanovi in se uporablja tudi za okoliščine.",
      "Za smer k osebi se uporablja zu."
    ],
    "examples": [
      {
        "de": "Ich bin bei meinem Freund.",
        "lv": "Sem pri svojem prijatelju."
      },
      {
        "de": "Sie arbeitet bei Siemens.",
        "lv": "Dela pri Siemensu."
      },
      {
        "de": "Bei Regen bleiben wir zu Hause.",
        "lv": "Ob dežju ostanemo doma."
      }
    ],
    "comparison": [
      {
        "word": "bei",
        "meaning": "pri osebi, podjetju ali v določenih okoliščinah",
        "example": "Ich bin bei meiner Schwester. — Sem pri svoji sestri."
      },
      {
        "word": "an",
        "meaning": "na steni, robu ali obali",
        "example": "Das Bild hängt an der Wand. — Slika visi na steni."
      },
      {
        "word": "zu",
        "meaning": "k osebi • smer",
        "example": "Ich gehe zu meinem Freund. — Grem k svojemu prijatelju."
      }
    ],
    "tip": {
      "text": "Oseba, ustanova ali okoliščina → bei."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {}
      ]
    },
    "important": [
      "Za gibanje k osebi navadno uporabimo zu."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "bei",
  "lv": "pie • uz • klāt",
  "level": "A1",
  "study": {
    "id": "a1-bei",
    "layout": "standardStudy",
    "translation": "pie • uz • klāt",
    "explanation": "Lieto, ja kaut kas atrodas pie personas, organizācijas, vietas vai notiek kādos apstākļos.",
    "examples": [
      {
        "de": "Ich bin bei meinem Freund.",
        "lv": "sem pri svojem prijatelju."
      },
      {
        "de": "Sie arbeitet bei Siemens.",
        "lv": "viņa strādā Siemens."
      },
      {
        "de": "Bei Regen bleiben wir zu Hause.",
        "lv": "v dežju ostanemo doma."
      }
    ],
    "comparison": [
      {
        "word": "bei",
        "meaning": "pri osebi, podjetju ali v določenih okoliščinah",
        "example": "Ich bin bei meiner Schwester. – Sem pri svoji sestri."
      },
      {
        "word": "an",
        "meaning": "ob steni, robu, obali, robu površine",
        "example": "Das Bild hängt an der Wand. – Slika visi ob steni."
      },
      {
        "word": "zu",
        "meaning": "pri kom gre (smer)",
        "example": "Ich gehe zu meinem Freund. – Grem pri svojega prijatelja."
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
            "cilvēka",
            "vietas",
            "uzņēmuma"
          ]
        }
      },
      "important": [
        {
          "purple": [
            "bei"
          ],
          "green": [
            "cilvēka",
            "vietas",
            "uzņēmumā"
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
            "uz virsmu"
          ]
        }
      ]
    },
    "important": [
      "bei pogosto pomeni pri osebi, pri mestu ali pri podjetju.",
      "Če gre za gibanje na površino, ponavadi potrebujete auf, ne bei."
    ]
  }
}
```

---

## Finding 30

**Audit ID:** `LRB093-0030`
**Finding Stable ID:** `g2/a1/sl|Besuch|idx:87|lv; study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `Besuch|idx:87`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"obisk","study.translation":"obisk","study.explanation":"[\"Glavna ideja: der Besuch pomeni obisk, obisk ali klic.\",\"Če gre za mesto ali dogodek, slovensko je primeren obisk.\",\"Če se besuch nanaša na človeka, je slovensko pogosto bolje reči obisk ali obisk.\",\"Množina je die Besuche.\"]","study.examples":"[{\"de\":\"Der Besuch im Museum war interessant.\",\"lv\":\"Obisk muzeja je bil zanimiv.\"},{\"de\":\"Danke für deinen Besuch.\",\"lv\":\"Hvala za tvoj obisk.\"},{\"de\":\"Der Arzt macht einen Besuch.\",\"lv\":\"Zdravnik naredi obisk.\"}]","study.comparison":"[{\"word\":\"der Besuch\",\"meaning\":\"obisk • obisk • obisk\",\"example\":\"Danke für deinen Besuch. – Hvala za tvoj obisk.\"},{\"word\":\"der Besucher\",\"meaning\":\"obiskovalec\",\"example\":\"Der Besucher wartet draußen. – Obiskovalec čaka zunaj.\"},{\"word\":\"besuchen\",\"meaning\":\"obiskati • obiskati\",\"example\":\"Ich besuche meine Großeltern. – Obiskujem svoje babico in dedka.\"}]","study.tip":"{\"text\":\"Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks.\"}","study.important":"[\"der Besuch ni samo obisk; je lahko tudi obisk ali obisk.\",\"Množina: die Besuche.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"obisk","study":{"id":"a1-besuch","layout":"standardStudy","translation":"obisk","explanation":["Glavna ideja: der Besuch pomeni obisk kot dogodek ali vizito.","der Besucher je obiskovalec, besuchen pa glagol obiskati."],"examples":[{"de":"Der Besuch im Museum war interessant.","lv":"Obisk muzeja je bil zanimiv."},{"de":"Danke für deinen Besuch.","lv":"Hvala za tvoj obisk."},{"de":"Der Arzt macht einen Besuch.","lv":"Zdravnik opravi obisk."}],"comparison":[{"word":"der Besuch","meaning":"obisk • vizita","example":"Danke für deinen Besuch. — Hvala za tvoj obisk."},{"word":"der Besucher","meaning":"obiskovalec","example":"Der Besucher wartet draußen. — Obiskovalec čaka zunaj."},{"word":"besuchen","meaning":"obiskati","example":"Ich besuche meine Großeltern. — Obiščem stare starše."}],"tip":{"text":"Besuch je dogodek; Besucher je oseba."},"important":["Množina je die Besuche."],"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]}}}
**Note:** OWNER approved override: Besuch: tretji primer je bil nenaraven dobesedni prevod, pomen pa se je v primerjavah mehansko potrojil.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Besuch",
  "de_article": "der",
  "de_plural": "die Besuche",
  "lv": "obisk",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "obisk",
    "explanation": [
      "Glavna ideja: der Besuch pomeni obisk kot dogodek ali vizito.",
      "der Besucher je obiskovalec, besuchen pa glagol obiskati."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "Obisk muzeja je bil zanimiv."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Hvala za tvoj obisk."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "Zdravnik opravi obisk."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "obisk • vizita",
        "example": "Danke für deinen Besuch. — Hvala za tvoj obisk."
      },
      {
        "word": "der Besucher",
        "meaning": "obiskovalec",
        "example": "Der Besucher wartet draußen. — Obiskovalec čaka zunaj."
      },
      {
        "word": "besuchen",
        "meaning": "obiskati",
        "example": "Ich besuche meine Großeltern. — Obiščem stare starše."
      }
    ],
    "tip": {
      "text": "Besuch je dogodek; Besucher je oseba."
    },
    "important": [
      "Množina je die Besuche."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "Besuch",
  "de_article": "der",
  "de_plural": "die Besuche",
  "lv": "obisk",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "obisk",
    "explanation": [
      "Glavna ideja: der Besuch pomeni obisk, obisk ali klic.",
      "Če gre za mesto ali dogodek, slovensko je primeren obisk.",
      "Če se besuch nanaša na človeka, je slovensko pogosto bolje reči obisk ali obisk.",
      "Množina je die Besuche."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "Obisk muzeja je bil zanimiv."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Hvala za tvoj obisk."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "Zdravnik naredi obisk."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "obisk • obisk • obisk",
        "example": "Danke für deinen Besuch. – Hvala za tvoj obisk."
      },
      {
        "word": "der Besucher",
        "meaning": "obiskovalec",
        "example": "Der Besucher wartet draußen. – Obiskovalec čaka zunaj."
      },
      {
        "word": "besuchen",
        "meaning": "obiskati • obiskati",
        "example": "Ich besuche meine Großeltern. – Obiskujem svoje babico in dedka."
      }
    ],
    "tip": {
      "text": "Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks."
    },
    "important": [
      "der Besuch ni samo obisk; je lahko tudi obisk ali obisk.",
      "Množina: die Besuche."
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

## Finding 31

**Audit ID:** `LRB093-0031`
**Finding Stable ID:** `g2/a1/sl|besuchen|idx:89|lv; study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `besuchen|idx:89`
**Field / path:** `lv; study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"obiskati","study.translation":"obiskati","study.explanation":"[\"Glavna ideja: besuchen se uporablja pri obisku kraja, dogodka ali osebe.\",\"Mesto, dogodek ali tečaj običajno obiskate.\",\"Če se besuchen nanaša na človeka, je slovensko pogosto bolj naravno reči obiskati.\",\"V nemščini besuchen uporabljate brez predloga in z akuzativom.\"]","study.examples":"[{\"de\":\"Ich besuche das Museum.\",\"lv\":\"Obiskujem muzej.\"},{\"de\":\"Wir besuchen einen Deutschkurs.\",\"lv\":\"Obiskujemo tečaj nemščine.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"Obiskujem svoje babico in dedka.\"}]","study.comparison":"[{\"word\":\"besuchen\",\"meaning\":\"obiskati mesto ali dogodek • obiskati osebo\",\"example\":\"Ich besuche meine Großeltern. – Obiskujem svoje babico in dedka.\"},{\"word\":\"treffen\",\"meaning\":\"srečati\",\"example\":\"Ich treffe meinen Freund. – Srečam svojega prijatelja.\"},{\"word\":\"zu jemandem gehen\",\"meaning\":\"iti pri kom\",\"example\":\"Ich gehe zu meinem Freund. – Grem pri svojega prijatelja.\"}]","study.tip":"{\"text\":\"Atceries: vietu apmeklē, bet personu latviski bieži apciemo.\"}","study.important":"[\"besuchen se uporablja brez predloga: Ich besuche meine Freundin.\",\"Slovenski prevod je odvisen od predmeta: obiskati mesto, obiskati osebo.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"obiskati","study":{"id":"a1-besuchen","layout":"standardStudy","translation":"obiskati","explanation":["Glavna ideja: besuchen pomeni obiskati kraj, dogodek ali osebo.","V nemščini se uporablja brez predloga."],"examples":[{"de":"Ich besuche das Museum.","lv":"Obiščem muzej."},{"de":"Wir besuchen einen Deutschkurs.","lv":"Obiskujemo tečaj nemščine."},{"de":"Ich besuche meine Großeltern.","lv":"Obiščem stare starše."}],"comparison":[{"word":"besuchen","meaning":"obiskati kraj, dogodek ali osebo","example":"Ich besuche meine Großeltern. — Obiščem stare starše."},{"word":"treffen","meaning":"srečati","example":"Ich treffe meinen Freund. — Srečam svojega prijatelja."},{"word":"zu jemandem gehen","meaning":"iti k nekomu","example":"Ich gehe zu meinem Freund. — Grem k svojemu prijatelju."}],"tip":{"text":"besuchen se uporablja neposredno s predmetom."},"important":["Pravilno je Ich besuche meine Freundin, brez predloga."],"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]}}}
**Note:** OWNER approved override: besuchen: prevod starih staršev je imel napačno sklonsko ujemanje, smer v primerjavi pa je bila pri namesto k.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "besuchen",
  "lv": "obiskati",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "obiskati",
    "explanation": [
      "Glavna ideja: besuchen pomeni obiskati kraj, dogodek ali osebo.",
      "V nemščini se uporablja brez predloga."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Obiščem muzej."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Obiskujemo tečaj nemščine."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Obiščem stare starše."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "obiskati kraj, dogodek ali osebo",
        "example": "Ich besuche meine Großeltern. — Obiščem stare starše."
      },
      {
        "word": "treffen",
        "meaning": "srečati",
        "example": "Ich treffe meinen Freund. — Srečam svojega prijatelja."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "iti k nekomu",
        "example": "Ich gehe zu meinem Freund. — Grem k svojemu prijatelju."
      }
    ],
    "tip": {
      "text": "besuchen se uporablja neposredno s predmetom."
    },
    "important": [
      "Pravilno je Ich besuche meine Freundin, brez predloga."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "besuchen",
  "lv": "obiskati",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "obiskati",
    "explanation": [
      "Glavna ideja: besuchen se uporablja pri obisku kraja, dogodka ali osebe.",
      "Mesto, dogodek ali tečaj običajno obiskate.",
      "Če se besuchen nanaša na človeka, je slovensko pogosto bolj naravno reči obiskati.",
      "V nemščini besuchen uporabljate brez predloga in z akuzativom."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Obiskujem muzej."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Obiskujemo tečaj nemščine."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Obiskujem svoje babico in dedka."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "obiskati mesto ali dogodek • obiskati osebo",
        "example": "Ich besuche meine Großeltern. – Obiskujem svoje babico in dedka."
      },
      {
        "word": "treffen",
        "meaning": "srečati",
        "example": "Ich treffe meinen Freund. – Srečam svojega prijatelja."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "iti pri kom",
        "example": "Ich gehe zu meinem Freund. – Grem pri svojega prijatelja."
      }
    ],
    "tip": {
      "text": "Atceries: vietu apmeklē, bet personu latviski bieži apciemo."
    },
    "important": [
      "besuchen se uporablja brez predloga: Ich besuche meine Freundin.",
      "Slovenski prevod je odvisen od predmeta: obiskati mesto, obiskati osebo."
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

## Finding 32

**Audit ID:** `LRB093-0032`
**Finding Stable ID:** `g2/a1/sl|bis|idx:91|lv; study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `bis|idx:91`
**Field / path:** `lv; study.examples`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"do","study.examples":"[{\"de\":\"Ich warte bis zu deiner Ankunft.\",\"lv\":\"es gaidu līdz tavai ierašanās.\"},{\"de\":\"Bleib hier, bis ich zurückkomme.\",\"lv\":\"ostani tukaj, dokler se ne vrnem.\"},{\"de\":\"Ich lerne Deutsch bis zum Abend.\",\"lv\":\"učim se nemščino do večera.\"},{\"de\":\"Bis jetzt habe ich nichts verstanden.\",\"lv\":\"do zdaj nisem ničesar razumel.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"do • dokler","study":{"id":"a1-bis","layout":"standardStudy","translation":"do • dokler","explanation":["Glavna ideja: bis označuje mejo v času ali prostoru; pred odvisnikom lahko pomeni dokler.","bis zu stoji pred določeno mejo, bis jetzt pa pomeni do zdaj."],"examples":[{"de":"Ich warte bis zu deiner Ankunft.","lv":"Čakam do tvojega prihoda."},{"de":"Bleib hier, bis ich zurückkomme.","lv":"Ostani tukaj, dokler se ne vrnem."},{"de":"Ich lerne Deutsch bis zum Abend.","lv":"Nemščino se učim do večera."},{"de":"Bis jetzt habe ich nichts verstanden.","lv":"Do zdaj nisem ničesar razumel."}],"comparison":[{"word":"bis","meaning":"do časovne ali prostorske meje","example":"Ich bleibe bis morgen. — Ostanem do jutri."},{"word":"bis zu","meaning":"do določene meje","example":"bis zum Bahnhof — do postaje"},{"word":"bis jetzt","meaning":"do zdaj","example":"Bis jetzt habe ich nichts verstanden. — Do zdaj nisem ničesar razumel."}],"tip":{"text":"Meja v času, prostoru ali pogoju → bis."},"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{}]},"important":["bis zu stoji pred določeno mejo; bis jetzt pomeni do zdaj."]}}
**Note:** OWNER approved override: bis: prvi primer je imel napačen sklon, vse tri primerjave pa so bile vsebinsko zamenjane in vsebovale latvijščino.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bis",
  "lv": "do • dokler",
  "level": "A1",
  "study": {
    "id": "a1-bis",
    "layout": "standardStudy",
    "translation": "do • dokler",
    "explanation": [
      "Glavna ideja: bis označuje mejo v času ali prostoru; pred odvisnikom lahko pomeni dokler.",
      "bis zu stoji pred določeno mejo, bis jetzt pa pomeni do zdaj."
    ],
    "examples": [
      {
        "de": "Ich warte bis zu deiner Ankunft.",
        "lv": "Čakam do tvojega prihoda."
      },
      {
        "de": "Bleib hier, bis ich zurückkomme.",
        "lv": "Ostani tukaj, dokler se ne vrnem."
      },
      {
        "de": "Ich lerne Deutsch bis zum Abend.",
        "lv": "Nemščino se učim do večera."
      },
      {
        "de": "Bis jetzt habe ich nichts verstanden.",
        "lv": "Do zdaj nisem ničesar razumel."
      }
    ],
    "comparison": [
      {
        "word": "bis",
        "meaning": "do časovne ali prostorske meje",
        "example": "Ich bleibe bis morgen. — Ostanem do jutri."
      },
      {
        "word": "bis zu",
        "meaning": "do določene meje",
        "example": "bis zum Bahnhof — do postaje"
      },
      {
        "word": "bis jetzt",
        "meaning": "do zdaj",
        "example": "Bis jetzt habe ich nichts verstanden. — Do zdaj nisem ničesar razumel."
      }
    ],
    "tip": {
      "text": "Meja v času, prostoru ali pogoju → bis."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {}
      ]
    },
    "important": [
      "bis zu stoji pred določeno mejo; bis jetzt pomeni do zdaj."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "bis",
  "lv": "do",
  "level": "A1",
  "study": {
    "id": "a1-bis",
    "layout": "standardStudy",
    "translation": "do",
    "explanation": "Norāda uz kādu robežu, laika punktu vai nosacījumu.",
    "examples": [
      {
        "de": "Ich warte bis zu deiner Ankunft.",
        "lv": "es gaidu līdz tavai ierašanās."
      },
      {
        "de": "Bleib hier, bis ich zurückkomme.",
        "lv": "ostani tukaj, dokler se ne vrnem."
      },
      {
        "de": "Ich lerne Deutsch bis zum Abend.",
        "lv": "učim se nemščino do večera."
      },
      {
        "de": "Bis jetzt habe ich nichts verstanden.",
        "lv": "do zdaj nisem ničesar razumel."
      }
    ],
    "comparison": [
      {
        "word": "bis",
        "meaning": "līdz (laika punkta sasniegšanai)",
        "example": "Ich bleibe bis morgen. – Es palikšu līdz 18:00."
      },
      {
        "word": "bis zu",
        "meaning": "līdz (līdz noteiktam laikam)",
        "example": "bis zum Bahnhof – Es strādāju no 9 līdz 17."
      },
      {
        "word": "bis jetzt",
        "meaning": "līdz tam, kamēr",
        "example": "Bis jetzt habe ich nichts verstanden. – Es gaidu, līdz tu atnāksi."
      },
      {
        "word": "bis jetzt",
        "meaning": "līdz šim, līdz šai dienai",
        "example": "Bis jetzt ist alles gut. – Līdz šim viss ir labi."
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
            "robeža",
            "laikā",
            "nosacījumā"
          ]
        }
      },
      "important": [
        {
          "purple": [
            "bis"
          ],
          "green": [
            "robežai",
            "laika punktam"
          ]
        }
      ]
    },
    "important": [
      "bis = līdz robežai vai laika punktam.",
      "bis jetzt = līdz šim; bis dass = līdz tam, kamēr.",
      "bis jetzt pomeni do zdaj."
    ]
  }
}
```

---

## Finding 33

**Audit ID:** `LRB093-0033`
**Finding Stable ID:** `g2/a1/sl|bleiben|idx:101|study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sl
**Card:** `bleiben|idx:101`
**Field / path:** `study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"ostati","study.explanation":"[\"Glavna ideja: bleiben pomeni ostati.\",\"bleiben se uporablja, kadar oseba ali reč ne gre in ostane na istem mestu ali stanju.\",\"To je nasprotje besed gehen in fahren, kadar gre za odhod.\",\"Zelo pogost stavek je Ich bleibe zu Hause.\"]","study.examples":"[{\"de\":\"Ich bleibe zu Hause.\",\"lv\":\"ostamem doma.\"},{\"de\":\"Bleib hier!\",\"lv\":\"ostani tukaj!\"},{\"de\":\"Wir bleiben noch eine Stunde.\",\"lv\":\"ostanemo še eno uro.\"},{\"de\":\"Ich gehe nach Hause.\",\"lv\":\"grem domov.\"}]","study.comparison":"[{\"word\":\"bleiben\",\"meaning\":\"ostati\",\"example\":\"Ostanem tukaj.\"},{\"word\":\"gehen\",\"meaning\":\"iti / oditi domov\",\"example\":\"Grem domov.\"},{\"word\":\"fahren\",\"meaning\":\"voziti se / oditi s transportom\",\"example\":\"Vozim se domov.\"},{\"word\":\"warten\",\"meaning\":\"čakati\",\"example\":\"Čakam tukaj.\"}]","study.tip":"{\"text\":\"Atceries: neiet prom → bleiben; dodas prom kājām → gehen.\"}","study.important":"[\"bleiben pomeni ostati, ne čakati.\",\"Ich bleibe hier = ostamem tukaj; Ich warte hier = čakam tukaj.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ostati","study":{"id":"a1-bleiben","layout":"standardStudy","translation":"ostati","explanation":["Glavna ideja: bleiben pomeni ostati in ne oditi.","warten pomeni čakati in ni sopomenka."],"examples":[{"de":"Ich bleibe zu Hause.","lv":"Ostanem doma."},{"de":"Bleib hier!","lv":"Ostani tukaj!"},{"de":"Wir bleiben noch eine Stunde.","lv":"Ostanemo še eno uro."},{"de":"Ich gehe nach Hause.","lv":"Grem domov."}],"comparison":[{"word":"bleiben","meaning":"ostati","example":"Ich bleibe hier. — Ostanem tukaj."},{"word":"gehen","meaning":"iti peš • oditi","example":"Ich gehe nach Hause. — Grem domov."},{"word":"fahren","meaning":"peljati se • oditi s prevozom","example":"Ich fahre nach Hause. — Peljem se domov."},{"word":"warten","meaning":"čakati","example":"Ich warte hier. — Čakam tukaj."}],"tip":{"text":"Ne oditi → bleiben; oditi peš → gehen."},"important":["bleiben pomeni ostati, ne čakati."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: bleiben: osnovni primeri so bili sprejemljivi, vendar so razlaga, nasvet in poudarki ostali latvijski, zato celotna kartica ni bila zaključena.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bleiben",
  "lv": "ostati",
  "level": "A1",
  "study": {
    "id": "a1-bleiben",
    "layout": "standardStudy",
    "translation": "ostati",
    "explanation": [
      "Glavna ideja: bleiben pomeni ostati in ne oditi.",
      "warten pomeni čakati in ni sopomenka."
    ],
    "examples": [
      {
        "de": "Ich bleibe zu Hause.",
        "lv": "Ostanem doma."
      },
      {
        "de": "Bleib hier!",
        "lv": "Ostani tukaj!"
      },
      {
        "de": "Wir bleiben noch eine Stunde.",
        "lv": "Ostanemo še eno uro."
      },
      {
        "de": "Ich gehe nach Hause.",
        "lv": "Grem domov."
      }
    ],
    "comparison": [
      {
        "word": "bleiben",
        "meaning": "ostati",
        "example": "Ich bleibe hier. — Ostanem tukaj."
      },
      {
        "word": "gehen",
        "meaning": "iti peš • oditi",
        "example": "Ich gehe nach Hause. — Grem domov."
      },
      {
        "word": "fahren",
        "meaning": "peljati se • oditi s prevozom",
        "example": "Ich fahre nach Hause. — Peljem se domov."
      },
      {
        "word": "warten",
        "meaning": "čakati",
        "example": "Ich warte hier. — Čakam tukaj."
      }
    ],
    "tip": {
      "text": "Ne oditi → bleiben; oditi peš → gehen."
    },
    "important": [
      "bleiben pomeni ostati, ne čakati."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "bleiben",
  "lv": "ostati",
  "level": "A1",
  "study": {
    "id": "a1-bleiben",
    "layout": "standardStudy",
    "translation": "ostati",
    "explanation": [
      "Glavna ideja: bleiben pomeni ostati.",
      "bleiben se uporablja, kadar oseba ali reč ne gre in ostane na istem mestu ali stanju.",
      "To je nasprotje besed gehen in fahren, kadar gre za odhod.",
      "Zelo pogost stavek je Ich bleibe zu Hause."
    ],
    "examples": [
      {
        "de": "Ich bleibe zu Hause.",
        "lv": "ostamem doma."
      },
      {
        "de": "Bleib hier!",
        "lv": "ostani tukaj!"
      },
      {
        "de": "Wir bleiben noch eine Stunde.",
        "lv": "ostanemo še eno uro."
      },
      {
        "de": "Ich gehe nach Hause.",
        "lv": "grem domov."
      }
    ],
    "comparison": [
      {
        "word": "bleiben",
        "meaning": "ostati",
        "example": "Ostanem tukaj."
      },
      {
        "word": "gehen",
        "meaning": "iti / oditi domov",
        "example": "Grem domov."
      },
      {
        "word": "fahren",
        "meaning": "voziti se / oditi s transportom",
        "example": "Vozim se domov."
      },
      {
        "word": "warten",
        "meaning": "čakati",
        "example": "Čakam tukaj."
      }
    ],
    "tip": {
      "text": "Atceries: neiet prom → bleiben; dodas prom kājām → gehen."
    },
    "important": [
      "bleiben pomeni ostati, ne čakati.",
      "Ich bleibe hier = ostamem tukaj; Ich warte hier = čakam tukaj."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "bleiben"
        ],
        "purple": [
          "palikt",
          "neiet prom"
        ],
        "red": [
          "gehen",
          "fahren"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "bleibe"
            ]
          },
          "lv": {
            "purple": [
              "palieku"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Bleib"
            ]
          },
          "lv": {
            "purple": [
              "paliec"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "bleiben"
            ]
          },
          "lv": {
            "purple": [
              "paliekam"
            ]
          }
        },
        {
          "de": {
            "red": [
              "gehe"
            ]
          },
          "lv": {
            "red": [
              "eju"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "bleiben"
            ]
          },
          "meaning": {
            "purple": [
              "palikt"
            ]
          },
          "example": {
            "blue": [
              "bleibe"
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
              "iet",
              "doties prom"
            ]
          },
          "example": {
            "red": [
              "gehe"
            ]
          }
        },
        {
          "word": {
            "green": [
              "fahren"
            ]
          },
          "meaning": {
            "purple": [
              "braukt",
              "transportu"
            ]
          },
          "example": {
            "yellow": [
              "fahre"
            ]
          }
        },
        {
          "word": {
            "green": [
              "warten"
            ]
          },
          "meaning": {
            "purple": [
              "gaidīt"
            ]
          },
          "example": {
            "green": [
              "warte"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "bleiben"
          ],
          "purple": [
            "neiet prom"
          ],
          "red": [
            "gehen"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "bleiben"
          ],
          "purple": [
            "palikt"
          ],
          "green": [
            "gaidīt"
          ]
        },
        {
          "blue": [
            "bleibe"
          ],
          "green": [
            "warte"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 34

**Audit ID:** `LRB093-0034`
**Finding Stable ID:** `g2/a1/sl|da|idx:126|study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Lang:** sl
**Card:** `da|idx:126`
**Field / path:** `study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.translation":"tam","study.explanation":"[\"Glavna ideja: da na ravni A1 najpogosteje pomeni tam.\",\"da kaže na mesto ali se nanašo na kaj že omenjeno.\",\"Glede na situacijo je lahko preveden tudi kot tukaj ali tu.\",\"Na ravni A1 se da učimo kot splošno besedo za mesto.\"]","study.examples":"[{\"de\":\"Da ist mein Auto.\",\"lv\":\"tam je moj avto.\"},{\"de\":\"Ich war da.\",\"lv\":\"tam sem bil.\"},{\"de\":\"Da kommt er.\",\"lv\":\"tu pride.\"},{\"de\":\"Komm mal da her!\",\"lv\":\"pojdi sem!\"}]","study.comparison":"[{\"word\":\"da\",\"meaning\":\"tam • tukaj • tu (na splošno)\",\"example\":\"Tam je moj avto.\"},{\"word\":\"hier\",\"meaning\":\"tukaj (na določenem mestu)\",\"example\":\"Tukaj je moj avto.\"},{\"word\":\"dort\",\"meaning\":\"tam (dlje)\",\"example\":\"Tam je moj avto.\"},{\"word\":\"dann\",\"meaning\":\"potem\",\"example\":\"Potem gremo domov.\"}]","study.tip":"{\"text\":\"Atceries: vispārīgs tur/te → da.\"}","study.important":"[\"da je splošna beseda za kraj.\",\"hier je konkretno \\\"tukaj\\\", dort je bolj oddaljen \\\"tam\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"tam • tu","study":{"id":"a1-da","layout":"standardStudy","translation":"tam • tu","explanation":["Glavna ideja: da je splošen krajevni prislov za tam ali tu.","hier je izrecno tukaj, dort pa bolj oddaljeno tam."],"examples":[{"de":"Da ist mein Auto.","lv":"Tam je moj avto."},{"de":"Ich war da.","lv":"Bil sem tam."},{"de":"Da kommt er.","lv":"Tam prihaja."},{"de":"Komm mal da her!","lv":"Pridi sem!"}],"comparison":[{"word":"da","meaning":"tam • tu","example":"Da ist mein Auto. — Tam je moj avto."},{"word":"hier","meaning":"tukaj na določenem mestu","example":"Hier ist mein Auto. — Tukaj je moj avto."},{"word":"dort","meaning":"tam bolj daleč","example":"Dort ist mein Auto. — Tam je moj avto."},{"word":"dann","meaning":"potem","example":"Dann gehen wir nach Hause. — Potem gremo domov."}],"tip":{"text":"Splošni krajevni pomen tam ali tu → da."},"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]},"important":["hier pomeni konkretno tukaj, dort bolj oddaljeno tam."]}}
**Note:** OWNER approved override: da: četrti primer je obrnil smer iz pridi v pojdi, razlaga in opombe pa so ostale latvijske.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "da",
  "lv": "tam • tu",
  "level": "A1",
  "study": {
    "id": "a1-da",
    "layout": "standardStudy",
    "translation": "tam • tu",
    "explanation": [
      "Glavna ideja: da je splošen krajevni prislov za tam ali tu.",
      "hier je izrecno tukaj, dort pa bolj oddaljeno tam."
    ],
    "examples": [
      {
        "de": "Da ist mein Auto.",
        "lv": "Tam je moj avto."
      },
      {
        "de": "Ich war da.",
        "lv": "Bil sem tam."
      },
      {
        "de": "Da kommt er.",
        "lv": "Tam prihaja."
      },
      {
        "de": "Komm mal da her!",
        "lv": "Pridi sem!"
      }
    ],
    "comparison": [
      {
        "word": "da",
        "meaning": "tam • tu",
        "example": "Da ist mein Auto. — Tam je moj avto."
      },
      {
        "word": "hier",
        "meaning": "tukaj na določenem mestu",
        "example": "Hier ist mein Auto. — Tukaj je moj avto."
      },
      {
        "word": "dort",
        "meaning": "tam bolj daleč",
        "example": "Dort ist mein Auto. — Tam je moj avto."
      },
      {
        "word": "dann",
        "meaning": "potem",
        "example": "Dann gehen wir nach Hause. — Potem gremo domov."
      }
    ],
    "tip": {
      "text": "Splošni krajevni pomen tam ali tu → da."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    },
    "important": [
      "hier pomeni konkretno tukaj, dort bolj oddaljeno tam."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "da",
  "lv": "tam",
  "level": "A1",
  "study": {
    "id": "a1-da",
    "layout": "standardStudy",
    "translation": "tam",
    "explanation": [
      "Glavna ideja: da na ravni A1 najpogosteje pomeni tam.",
      "da kaže na mesto ali se nanašo na kaj že omenjeno.",
      "Glede na situacijo je lahko preveden tudi kot tukaj ali tu.",
      "Na ravni A1 se da učimo kot splošno besedo za mesto."
    ],
    "examples": [
      {
        "de": "Da ist mein Auto.",
        "lv": "tam je moj avto."
      },
      {
        "de": "Ich war da.",
        "lv": "tam sem bil."
      },
      {
        "de": "Da kommt er.",
        "lv": "tu pride."
      },
      {
        "de": "Komm mal da her!",
        "lv": "pojdi sem!"
      }
    ],
    "comparison": [
      {
        "word": "da",
        "meaning": "tam • tukaj • tu (na splošno)",
        "example": "Tam je moj avto."
      },
      {
        "word": "hier",
        "meaning": "tukaj (na določenem mestu)",
        "example": "Tukaj je moj avto."
      },
      {
        "word": "dort",
        "meaning": "tam (dlje)",
        "example": "Tam je moj avto."
      },
      {
        "word": "dann",
        "meaning": "potem",
        "example": "Potem gremo domov."
      }
    ],
    "tip": {
      "text": "Atceries: vispārīgs tur/te → da."
    },
    "sectionAccents": {
      "explanation": {
        "blue": [
          "da"
        ],
        "purple": [
          "tur"
        ],
        "green": [
          "te",
          "šeit"
        ],
        "yellow": [
          "vietu"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Da"
            ]
          },
          "lv": {
            "purple": [
              "tur"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "da"
            ]
          },
          "lv": {
            "purple": [
              "tur"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Da"
            ]
          },
          "lv": {
            "green": [
              "Te"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "da"
            ]
          },
          "lv": {
            "green": [
              "šeit"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "da"
            ]
          },
          "meaning": {
            "purple": [
              "te",
              "šeit"
            ]
          },
          "example": {
            "blue": [
              "Da"
            ]
          }
        },
        {
          "word": {
            "green": [
              "hier"
            ]
          },
          "meaning": {
            "purple": [
              "šeit"
            ]
          },
          "example": {
            "yellow": [
              "Hier"
            ]
          }
        },
        {
          "word": {
            "green": [
              "dort"
            ]
          },
          "meaning": {
            "purple": [
              "tur"
            ]
          },
          "example": {
            "red": [
              "Dort"
            ]
          }
        },
        {
          "word": {
            "green": [
              "dann"
            ]
          },
          "meaning": {
            "purple": [
              "tad"
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
            "da"
          ],
          "purple": [
            "tur"
          ],
          "green": [
            "te"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "da"
          ],
          "purple": [
            "vietas"
          ]
        },
        {
          "yellow": [
            "hier"
          ],
          "red": [
            "dort"
          ],
          "green": [
            "šeit"
          ],
          "purple": [
            "tur"
          ]
        }
      ]
    },
    "accents": {
      "blue": [
        "da",
        "Da"
      ],
      "purple": [
        "tur",
        "Tur"
      ],
      "green": [
        "te",
        "Te",
        "šeit"
      ],
      "yellow": [
        "hier"
      ],
      "red": [
        "dort",
        "dann"
      ]
    },
    "important": [
      "da je splošna beseda za kraj.",
      "hier je konkretno \"tukaj\", dort je bolj oddaljen \"tam\"."
    ]
  }
}
```

---

## Finding 35

**Audit ID:** `LRB093-0035`
**Finding Stable ID:** `g2/a1/sl|das|idx:129|study.examples[2].lv; study.comparison[2].example|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sl
**Card:** `das|idx:129`
**Field / path:** `study.examples[2].lv; study.comparison[2].example`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.examples[2].lv":null,"study.comparison[2].example":"Das ist das Buch, welches ich lese. – To je knjiga, ki jo beremo."}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"določni člen srednjega spola • to","study":{"id":"a1-das","layout":"standardStudy","translation":"določni člen srednjega spola • to","explanation":["Glavna ideja: das je določni člen srednjega spola, uporablja pa se tudi kot zaimek to in kot oziralni zaimek.","das ni isto kot veznik dass."],"examples":[{"de":"Das ist mein Auto.","lv":"To je moj avto."},{"de":"Das ist gut.","lv":"To je dobro."},{"de":"Das Buch, das ich lese, ist interessant.","lv":"Knjiga, ki jo berem, je zanimiva."}],"comparison":[{"word":"das","meaning":"člen ali zaimek to","example":"Das ist mein Auto. — To je moj avto."},{"word":"dies","meaning":"tole","example":"Dies ist mein Auto. — Tole je moj avto."},{"word":"welches","meaning":"ki • kateri","example":"Das ist das Buch, welches ich lese. — To je knjiga, ki jo berem."}],"tip":{"text":"Srednji spol → das; veznik da → dass."},"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]},"important":["Na ravni A1 se das najprej uči kot določni člen srednjega spola."]}}
**Note:** OWNER approved override: das: oziralni primer je zamenjal prvo osebo z množino, primerjave pa niso jasno ločile členka in zaimkov.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "das",
  "lv": "določni člen srednjega spola • to",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "določni člen srednjega spola • to",
    "explanation": [
      "Glavna ideja: das je določni člen srednjega spola, uporablja pa se tudi kot zaimek to in kot oziralni zaimek.",
      "das ni isto kot veznik dass."
    ],
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "To je moj avto."
      },
      {
        "de": "Das ist gut.",
        "lv": "To je dobro."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Knjiga, ki jo berem, je zanimiva."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "člen ali zaimek to",
        "example": "Das ist mein Auto. — To je moj avto."
      },
      {
        "word": "dies",
        "meaning": "tole",
        "example": "Dies ist mein Auto. — Tole je moj avto."
      },
      {
        "word": "welches",
        "meaning": "ki • kateri",
        "example": "Das ist das Buch, welches ich lese. — To je knjiga, ki jo berem."
      }
    ],
    "tip": {
      "text": "Srednji spol → das; veznik da → dass."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {}
      ]
    },
    "important": [
      "Na ravni A1 se das najprej uči kot določni člen srednjega spola."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "das",
  "lv": "srednji spol določni člen",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "srednji spol določni člen",
    "explanation": "Lieto pie vidus dzimtes lietvārdiem. Dažos teikumos “das” var darboties arī kā vietniekvārds vai relatīvais vietniekvārds.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "to je moj avto."
      },
      {
        "de": "Das ist gut.",
        "lv": "to je dobro."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "knjiga, ki jo beremo, je zanimiva."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "to (člen / zaimek)",
        "example": "Das ist mein Auto. – To je moj avto."
      },
      {
        "word": "dies",
        "meaning": "to",
        "example": "Dies ist mein Auto. – To je moj avto."
      },
      {
        "word": "welches",
        "meaning": "ki • katero • katero",
        "example": "Das ist das Buch, welches ich lese. – To je knjiga, ki jo beremo."
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
            "vidus dzimte"
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
            "vidus dzimtes artikulu"
          ]
        },
        {
          "blue": [
            "das"
          ],
          "purple": [
            "artikuls",
            "vietniekvārds"
          ],
          "red": [
            "dass"
          ]
        }
      ]
    },
    "important": [
      "Na ravni A1 se das učimo kot srednji spol člen.",
      "das ni isto kot dass — das je lahko člen ali \"to\", dass pomeni \"da\"."
    ]
  }
}
```

---

## Finding 36

**Audit ID:** `LRB093-0036`
**Finding Stable ID:** `g2/a1/sl|der|idx:134|study.examples[1].lv; study.important[1]|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sl
**Card:** `der|idx:134`
**Field / path:** `study.examples[1].lv; study.important[1]`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.examples[1].lv":null,"study.important[1]":"Uporaba zaimka in relativnega pride kasneje."}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"določni člen moškega spola","study":{"id":"a1-der","layout":"standardStudy","translation":"določni člen moškega spola","explanation":["Glavna ideja: der je določni člen moškega spola v imenovalniku ednine.","Stoji pred samostalniki moškega spola, na primer der Mann."],"examples":[{"de":"Der Mann ist hier.","lv":"Moški je tukaj."},{"de":"Der Bus kommt.","lv":"Avtobus prihaja."},{"de":"Der Lehrer spricht.","lv":"Učitelj govori."}],"tip":{"text":"Moški spol v imenovalniku ednine → der."},"sectionAccents":{"examples":[{},{},{}],"comparison":[]},"important":["Na ravni A1 se der najprej uči kot določni člen moškega spola."],"comparison":[]}}
**Note:** OWNER approved override: der: drugi primer je prihod avtobusa zamenjal z vožnjo, razlaga in nasvet pa sta ostala latvijska.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "der",
  "lv": "določni člen moškega spola",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "določni člen moškega spola",
    "explanation": [
      "Glavna ideja: der je določni člen moškega spola v imenovalniku ednine.",
      "Stoji pred samostalniki moškega spola, na primer der Mann."
    ],
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "Moški je tukaj."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "Avtobus prihaja."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "Učitelj govori."
      }
    ],
    "tip": {
      "text": "Moški spol v imenovalniku ednine → der."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "important": [
      "Na ravni A1 se der najprej uči kot določni člen moškega spola."
    ],
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "der",
  "lv": "moški spol določni člen",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "moški spol določni člen",
    "explanation": "Lieto pie vīriešu dzimtes lietvārdiem. Dažos teikumos “der” var darboties arī kā vietniekvārds vai relatīvais vietniekvārds.",
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "moški je tukaj."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "avtobus vozi."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "učitelj govori."
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
            "vīriešu dzimte"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "der"
          ],
          "purple": [
            "vīriešu dzimtes artikulu"
          ]
        },
        {
          "red": [
            "Vietniekvārda",
            "relatīvā"
          ]
        }
      ]
    },
    "important": [
      "Na ravni A1 se der najprej učimo kot moški spol člen.",
      "Uporaba zaimka in relativnega pride kasneje."
    ]
  }
}
```

---

## Finding 37

**Audit ID:** `LRB093-0037`
**Finding Stable ID:** `g2/a1/sl|dieser|idx:139|study.examples[1].lv; study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sl
**Card:** `dieser|idx:139`
**Field / path:** `study.examples[1].lv; study.examples[2].lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.examples[1].lv":null,"study.examples[2].lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"ta • tale","study":{"id":"a1-dieser","layout":"standardStudy","translation":"ta • tale","explanation":["Glavna ideja: dieser je kazalni zaimek ta oziroma tale za moški spol.","Oblike diese in dieses se spreminjajo po spolu in sklonu."],"examples":[{"de":"Dieser Mann ist nett.","lv":"Ta moški je prijazen."},{"de":"Ich sehe diesen Hund.","lv":"Vidim tega psa."},{"de":"Dieser Stift ist neu.","lv":"To pisalo je novo."}],"tip":{"text":"Moški spol v imenovalniku → dieser."},"sectionAccents":{"examples":[{},{},{}],"comparison":[]},"important":["dieser, diese in dieses se spreminjajo po spolu; množinska oblika je diese."],"comparison":[]}}
**Note:** OWNER approved override: dieser: drugi primer je videti psa zamenjal z všečnostjo, kartica pa ni bila v celoti prevedena v slovenščino.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dieser",
  "lv": "ta • tale",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "ta • tale",
    "explanation": [
      "Glavna ideja: dieser je kazalni zaimek ta oziroma tale za moški spol.",
      "Oblike diese in dieses se spreminjajo po spolu in sklonu."
    ],
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "Ta moški je prijazen."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "Vidim tega psa."
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "To pisalo je novo."
      }
    ],
    "tip": {
      "text": "Moški spol v imenovalniku → dieser."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "important": [
      "dieser, diese in dieses se spreminjajo po spolu; množinska oblika je diese."
    ],
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "dieser",
  "lv": "ta",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "ta",
    "explanation": "Rāda uz tuvumā esošu cilvēku, lietu vai dzīvnieku. Lieto kopā ar lietvārdu vīriešu dzimtē.",
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "ta moški je prijazen."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "man patīk šis suns."
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "ta pisalo je novo."
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
              "šis"
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
              "šis"
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
              "šī"
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
            "šis"
          ],
          "green": [
            "vīriešu dzimte"
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
            "dzimtes"
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
      "dieser, diese in dieses se spreminjajo glede na spol.",
      "V množini je oblika spet diese."
    ]
  }
}
```

---

## Finding 38

**Audit ID:** `LRB093-0038`
**Finding Stable ID:** `g2/a1/sl|ein|idx:154|study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** sl
**Card:** `ein|idx:154`
**Field / path:** `study.explanation, study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Glavna ideja: ein je nedoločni člen.\",\"ein je nedoločni člen za moške in srednje spola samostalnike v imenovalniku.\",\"ein se uporablja pri moških: ein Mann.\",\"ein se uporablja pri srednjem spolu: ein Buch.\",\"Pri ženskem spolu se uporablja: eine.\",\"V tožilniku pri moških: einen.\"]","study.examples":"[{\"de\":\"Ein Mann wartet draußen.\",\"lv\":\"moški čaka zunaj.\"},{\"de\":\"Ich habe ein Buch.\",\"lv\":\"imam eno knjigo.\"},{\"de\":\"Er sucht einen Stift.\",\"lv\":\"išče neko pisalo.\"},{\"de\":\"Ein Kind spielt.\",\"lv\":\"Otrok se igra.\"}]","study.comparison":"[{\"word\":\"ein Mann\",\"meaning\":\"moški spol\",\"example\":\"Zunaj čaka moški.\"},{\"word\":\"eine Frau\",\"meaning\":\"ženski spol\",\"example\":\"ena ženska\"},{\"word\":\"ein Buch\",\"meaning\":\"srednji spol\",\"example\":\"Imam knjigo.\"},{\"word\":\"einen Mann\",\"meaning\":\"tožilnik\",\"example\":\"enega moža\"}]","study.important":"[\"ein nav noteiktais artikuls.\",\"Ja lieta jau ir konkrēti zināma, bieži vajag der, die vai das.\",\"eine — ženski spol.\",\"einen — tožilnik.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"nedoločni člen • en","study":{"id":"a1-ein","layout":"standardStudy","translation":"nedoločni člen • en","explanation":["Glavna ideja: ein je nedoločni člen in lahko pomeni tudi en.","Oblika je odvisna od spola in sklona samostalnika."],"examples":[{"de":"Ein Mann wartet draußen.","lv":"Moški čaka zunaj."},{"de":"Ich habe ein Buch.","lv":"Imam knjigo."},{"de":"Er sucht einen Stift.","lv":"Išče pisalo."},{"de":"Ein Kind spielt.","lv":"Otrok se igra."}],"comparison":[{"word":"ein Mann","meaning":"moški spol","example":"Ein Mann wartet draußen. — Moški čaka zunaj."},{"word":"eine Frau","meaning":"ženski spol","example":"eine Frau — neka ženska"},{"word":"ein Buch","meaning":"srednji spol","example":"Ich habe ein Buch. — Imam knjigo."},{"word":"einen Mann","meaning":"tožilnik moškega spola","example":"einen Mann — nekega moškega"}],"tip":{"text":"ein pogosto deluje samo kot nedoločni člen, ne kot poudarjeno število."},"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]},"important":["ein je za moški in srednji spol; eine za ženski; einen za tožilnik moškega spola."]}}
**Note:** OWNER approved override: ein: naslov in pojasnila so ostali latvijski, primerjave pa so člen mestoma prevajale kot števnik.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ein",
  "lv": "nedoločni člen • en",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "nedoločni člen • en",
    "explanation": [
      "Glavna ideja: ein je nedoločni člen in lahko pomeni tudi en.",
      "Oblika je odvisna od spola in sklona samostalnika."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Moški čaka zunaj."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Imam knjigo."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Išče pisalo."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Otrok se igra."
      }
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "moški spol",
        "example": "Ein Mann wartet draußen. — Moški čaka zunaj."
      },
      {
        "word": "eine Frau",
        "meaning": "ženski spol",
        "example": "eine Frau — neka ženska"
      },
      {
        "word": "ein Buch",
        "meaning": "srednji spol",
        "example": "Ich habe ein Buch. — Imam knjigo."
      },
      {
        "word": "einen Mann",
        "meaning": "tožilnik moškega spola",
        "example": "einen Mann — nekega moškega"
      }
    ],
    "tip": {
      "text": "ein pogosto deluje samo kot nedoločni člen, ne kot poudarjeno število."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    },
    "important": [
      "ein je za moški in srednji spol; eine za ženski; einen za tožilnik moškega spola."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "ein",
  "lv": "nenoteiktais artikuls • viens • kāds",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "nenoteiktais artikuls • viens • kāds",
    "explanation": [
      "Glavna ideja: ein je nedoločni člen.",
      "ein je nedoločni člen za moške in srednje spola samostalnike v imenovalniku.",
      "ein se uporablja pri moških: ein Mann.",
      "ein se uporablja pri srednjem spolu: ein Buch.",
      "Pri ženskem spolu se uporablja: eine.",
      "V tožilniku pri moških: einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "moški čaka zunaj."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "imam eno knjigo."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "išče neko pisalo."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Otrok se igra."
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
              "kāds"
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
              "viena"
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
              "kādu"
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
            "viens",
            "kāds"
          ],
          "green": [
            "nekonkrēts"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "ein"
          ],
          "red": [
            "noteiktais artikuls"
          ]
        },
        {
          "blue": [
            "der",
            "die",
            "das"
          ],
          "green": [
            "konkrēti zināma"
          ]
        }
      ]
    },
    "important": [
      "ein nav noteiktais artikuls.",
      "Ja lieta jau ir konkrēti zināma, bieži vajag der, die vai das.",
      "eine — ženski spol.",
      "einen — tožilnik."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "moški spol",
        "example": "Zunaj čaka moški."
      },
      {
        "word": "eine Frau",
        "meaning": "ženski spol",
        "example": "ena ženska"
      },
      {
        "word": "ein Buch",
        "meaning": "srednji spol",
        "example": "Imam knjigo."
      },
      {
        "word": "einen Mann",
        "meaning": "tožilnik",
        "example": "enega moža"
      }
    ]
  }
}
```

---

## Finding 39

**Audit ID:** `LRB093-0039`
**Finding Stable ID:** `g2/a1/sl|Eis|idx:157|study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** sl
**Card:** `Eis|idx:157`
**Field / path:** `study.explanation, study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Glavna ideja: das Eis je lahko led ali sladoled.\",\"Če gre za hladen zmrznjeni vodo, slovensko običajno rečete led.\",\"Če gre za hrano ali puding, das Eis pogosto pomeni sladoled.\",\"Kontekst običajno takoj pove, kateri pomen je mišljen.\",\"Na ravni A1 so najpomembnejši stavki ein Eis essen in Eis im Glas.\"]","study.examples":"[{\"de\":\"Ich esse ein Eis.\",\"lv\":\"jem sladoled.\"},{\"de\":\"Möchtest du ein Eis?\",\"lv\":\"hoču sladoled?\"},{\"de\":\"Im Winter liegt Eis auf dem See.\",\"lv\":\"pozimi je na jezeru led.\"},{\"de\":\"Das Eis ist kalt.\",\"lv\":\"led je mrz.\"},{\"de\":\"Ich nehme ein Eis mit Schokolade.\",\"lv\":\"vzamem si sladoled s čokolado.\"}]","study.comparison":"[{\"word\":\"das Eis\",\"meaning\":\"led / sladoled\",\"example\":\"Ich esse ein Eis. = Jem sladoled.\"},{\"word\":\"der Schnee\",\"meaning\":\"sneg\",\"example\":\"Der Schnee ist weiß. = Sneg je bel.\"},{\"word\":\"kalt\",\"meaning\":\"mrzla\",\"example\":\"Das Wasser ist kalt. = Voda je mrzla.\"},{\"word\":\"das Dessert\",\"meaning\":\"puding\",\"example\":\"Eis ist ein Dessert. = Sladoled je puding.\"}]","study.important":"[\"Slovensko led in sladoled sta dve različni besedi, vendar nemščina pogosto uporablja das Eis za oba.\",\"Kontekst je ključen: hrana pomeni sladoled, mrzla površina ali voda pomeni led.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"led • sladoled","study":{"id":"a1-eis","layout":"standardStudy","translation":"led • sladoled","explanation":["Glavna ideja: das Eis pomeni led ali sladoled; pomen določa sobesedilo.","Pri hrani pomeni sladoled, pri zamrznjeni vodi led."],"examples":[{"de":"Ich esse ein Eis.","lv":"Jem sladoled."},{"de":"Möchtest du ein Eis?","lv":"Bi sladoled?"},{"de":"Im Winter liegt Eis auf dem See.","lv":"Pozimi je na jezeru led."},{"de":"Das Eis ist kalt.","lv":"Led je mrzel."},{"de":"Ich nehme ein Eis mit Schokolade.","lv":"Vzamem čokoladni sladoled."}],"comparison":[{"word":"das Eis","meaning":"led • sladoled","example":"Ich esse ein Eis. — Jem sladoled."},{"word":"der Schnee","meaning":"sneg","example":"Der Schnee ist weiß. — Sneg je bel."},{"word":"kalt","meaning":"mrzel","example":"Das Wasser ist kalt. — Voda je mrzla."},{"word":"das Dessert","meaning":"sladica","example":"Eis ist ein Dessert. — Sladoled je sladica."}],"tip":{"text":"Hrana → sladoled; zima ali voda → led."},"important":["Kontekst loči led od sladoleda."],"sectionAccents":{"examples":[{},{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: Eis: vprašanje je bilo slovnično napačno, Dessert je bil napačno puding, razlaga in nasvet pa latvijska.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "led • sladoled",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "led • sladoled",
    "explanation": [
      "Glavna ideja: das Eis pomeni led ali sladoled; pomen določa sobesedilo.",
      "Pri hrani pomeni sladoled, pri zamrznjeni vodi led."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Jem sladoled."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Bi sladoled?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Pozimi je na jezeru led."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Led je mrzel."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Vzamem čokoladni sladoled."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "led • sladoled",
        "example": "Ich esse ein Eis. — Jem sladoled."
      },
      {
        "word": "der Schnee",
        "meaning": "sneg",
        "example": "Der Schnee ist weiß. — Sneg je bel."
      },
      {
        "word": "kalt",
        "meaning": "mrzel",
        "example": "Das Wasser ist kalt. — Voda je mrzla."
      },
      {
        "word": "das Dessert",
        "meaning": "sladica",
        "example": "Eis ist ein Dessert. — Sladoled je sladica."
      }
    ],
    "tip": {
      "text": "Hrana → sladoled; zima ali voda → led."
    },
    "important": [
      "Kontekst loči led od sladoleda."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "Eis",
  "de_article": "das",
  "lv": "led • sladoled",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "led • sladoled",
    "explanation": [
      "Glavna ideja: das Eis je lahko led ali sladoled.",
      "Če gre za hladen zmrznjeni vodo, slovensko običajno rečete led.",
      "Če gre za hrano ali puding, das Eis pogosto pomeni sladoled.",
      "Kontekst običajno takoj pove, kateri pomen je mišljen.",
      "Na ravni A1 so najpomembnejši stavki ein Eis essen in Eis im Glas."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "jem sladoled."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "hoču sladoled?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "pozimi je na jezeru led."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "led je mrz."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "vzamem si sladoled s čokolado."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "led / sladoled",
        "example": "Ich esse ein Eis. = Jem sladoled."
      },
      {
        "word": "der Schnee",
        "meaning": "sneg",
        "example": "Der Schnee ist weiß. = Sneg je bel."
      },
      {
        "word": "kalt",
        "meaning": "mrzla",
        "example": "Das Wasser ist kalt. = Voda je mrzla."
      },
      {
        "word": "das Dessert",
        "meaning": "puding",
        "example": "Eis ist ein Dessert. = Sladoled je puding."
      }
    ],
    "tip": {
      "text": "Atceries: ēdiens → saldējums; ziema/ūdens → ledus."
    },
    "important": [
      "Slovensko led in sladoled sta dve različni besedi, vendar nemščina pogosto uporablja das Eis za oba.",
      "Kontekst je ključen: hrana pomeni sladoled, mrzla površina ali voda pomeni led."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Eis",
          "Eis"
        ],
        "purple": [
          "ledu",
          "ledus",
          "saldējums"
        ],
        "green": [
          "ēdienu",
          "desertu"
        ],
        "yellow": [
          "ūdeni"
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
              "saldējumu"
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
              "saldējumu"
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
              "ledus"
            ],
            "green": [
              "ezera"
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
              "ledus"
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
              "saldējumu"
            ],
            "yellow": [
              "šokolādi"
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
              "ledus",
              "saldējums"
            ]
          },
          "example": {
            "blue": [
              "Eis"
            ],
            "purple": [
              "saldējumu"
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
              "sniegs"
            ]
          },
          "example": {
            "green": [
              "Schnee",
              "Sniegs"
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
              "auksts"
            ]
          },
          "example": {
            "yellow": [
              "kalt",
              "auksts"
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
              "deserts"
            ]
          },
          "example": {
            "blue": [
              "Eis"
            ],
            "red": [
              "deserts"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "purple": [
            "saldējums",
            "ledus"
          ],
          "green": [
            "ēdiens",
            "ziema",
            "ūdens"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "das Eis"
          ],
          "purple": [
            "ledus",
            "saldējums"
          ]
        },
        {
          "purple": [
            "saldējumu",
            "ledu"
          ],
          "green": [
            "ēdiens",
            "auksta virsma",
            "ūdens"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 40

**Audit ID:** `LRB093-0040`
**Finding Stable ID:** `g2/a1/sl|erst|idx:165|study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** sl
**Card:** `erst|idx:165`
**Field / path:** `study.explanation, study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.explanation":"[\"Glavna ideja: erst najpogosteje pomeni samo. Vendar v določenem kontekstu lahko pomeni tudi najprej.\",\"erst pogosto kaže, da se kaj zgodi kasneje, kot je pričakovano.\",\"Ich bin erst 18. — Star sem samo 18 let.\",\"Es ist erst Montag. — Je samo ponedeljek.\",\"Erst lernen, dann spielen. — Najprej se učimo, potem se igramo.\"]","study.examples":"[{\"de\":\"Erst lernen, dann spielen.\",\"lv\":\"vispirms dzert, tad braukt.\"},{\"de\":\"Ich komme erst morgen.\",\"lv\":\"pridem šele jutri.\"},{\"de\":\"Er ist erst 18 Jahre alt.\",\"lv\":\"star je šele 18 let.\"},{\"de\":\"Wir essen erst um acht Uhr.\",\"lv\":\"jedemo šele ob osmih.\"}]","study.comparison":"[{\"word\":\"erst\",\"meaning\":\"najprej • samo\",\"example\":\"Erst lernen, dann spielen. – Erst arbeiten, dann Pause. = Vispirms strādāt, tad pauze.\"},{\"word\":\"zuerst\",\"meaning\":\"najprej • na začetku\",\"example\":\"Zuerst frühstücken wir. = Najprej se zajtrknemo.\"},{\"word\":\"nur\",\"meaning\":\"vispirms • tikai\",\"example\":\"Ich habe nur 5 Euro. = Imam samo 5 evrov.\"},{\"word\":\"dann\",\"meaning\":\"potem\",\"example\":\"Dann gehen wir nach Hause. = Potem gremo domov.\"}]","study.important":"[\"erst un nur abi var skanēt kā “tikai”, bet nav viens un tas pats.\",\"erst bieži runā par laiku, secību vai vēl tikai sasniegtu punktu; nur ierobežo daudzumu.\",\"zuerst pogosteje pomeni: najprej.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"šele • najprej","study":{"id":"a1-erst","layout":"standardStudy","translation":"šele • najprej","explanation":["Glavna ideja: erst pomeni šele pri časovni ali količinski omejitvi, lahko pa pomeni tudi najprej v zaporedju.","zuerst poudarja prvi korak, nur pa omejuje količino."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Najprej se uči, nato se igraj."},{"de":"Ich komme erst morgen.","lv":"Pridem šele jutri."},{"de":"Er ist erst 18 Jahre alt.","lv":"Star je šele 18 let."},{"de":"Wir essen erst um acht Uhr.","lv":"Jemo šele ob osmih."}],"comparison":[{"word":"erst","meaning":"šele • najprej","example":"Erst lernen, dann spielen. — Najprej se uči, nato se igraj."},{"word":"zuerst","meaning":"najprej • na začetku","example":"Zuerst frühstücken wir. — Najprej zajtrkujemo."},{"word":"nur","meaning":"samo","example":"Ich habe nur 5 Euro. — Imam samo 5 evrov."},{"word":"dann","meaning":"potem","example":"Dann gehen wir nach Hause. — Potem gremo domov."}],"tip":{"text":"Čas ali zaporedje → erst; gola količinska omejitev → nur."},"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]},"important":["erst in zuerst nista popolni sopomenki."]}}
**Note:** OWNER approved override: erst: prvi primer je zamenjal učenje z delom in pijačo, primerjava pa je vsebovala več latvijskih ter nemških ostankov.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "šele • najprej",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "šele • najprej",
    "explanation": [
      "Glavna ideja: erst pomeni šele pri časovni ali količinski omejitvi, lahko pa pomeni tudi najprej v zaporedju.",
      "zuerst poudarja prvi korak, nur pa omejuje količino."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Najprej se uči, nato se igraj."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Pridem šele jutri."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Star je šele 18 let."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Jemo šele ob osmih."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "šele • najprej",
        "example": "Erst lernen, dann spielen. — Najprej se uči, nato se igraj."
      },
      {
        "word": "zuerst",
        "meaning": "najprej • na začetku",
        "example": "Zuerst frühstücken wir. — Najprej zajtrkujemo."
      },
      {
        "word": "nur",
        "meaning": "samo",
        "example": "Ich habe nur 5 Euro. — Imam samo 5 evrov."
      },
      {
        "word": "dann",
        "meaning": "potem",
        "example": "Dann gehen wir nach Hause. — Potem gremo domov."
      }
    ],
    "tip": {
      "text": "Čas ali zaporedje → erst; gola količinska omejitev → nur."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {},
        {},
        {}
      ]
    },
    "important": [
      "erst in zuerst nista popolni sopomenki."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "erst",
  "lv": "vispirms • tikai",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "vispirms • tikai",
    "explanation": [
      "Glavna ideja: erst najpogosteje pomeni samo. Vendar v določenem kontekstu lahko pomeni tudi najprej.",
      "erst pogosto kaže, da se kaj zgodi kasneje, kot je pričakovano.",
      "Ich bin erst 18. — Star sem samo 18 let.",
      "Es ist erst Montag. — Je samo ponedeljek.",
      "Erst lernen, dann spielen. — Najprej se učimo, potem se igramo."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "vispirms dzert, tad braukt."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "pridem šele jutri."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "star je šele 18 let."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "jedemo šele ob osmih."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "najprej • samo",
        "example": "Erst lernen, dann spielen. – Erst arbeiten, dann Pause. = Vispirms strādāt, tad pauze."
      },
      {
        "word": "zuerst",
        "meaning": "najprej • na začetku",
        "example": "Zuerst frühstücken wir. = Najprej se zajtrknemo."
      },
      {
        "word": "nur",
        "meaning": "vispirms • tikai",
        "example": "Ich habe nur 5 Euro. = Imam samo 5 evrov."
      },
      {
        "word": "dann",
        "meaning": "potem",
        "example": "Dann gehen wir nach Hause. = Potem gremo domov."
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
            "laiks",
            "skaits"
          ],
          "purple": [
            "daudzums"
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
            "tikai"
          ]
        },
        {
          "blue": [
            "erst"
          ],
          "green": [
            "laiku",
            "secību"
          ],
          "yellow": [
            "nur"
          ],
          "purple": [
            "daudzumu"
          ]
        }
      ]
    },
    "important": [
      "erst un nur abi var skanēt kā “tikai”, bet nav viens un tas pats.",
      "erst bieži runā par laiku, secību vai vēl tikai sasniegtu punktu; nur ierobežo daudzumu.",
      "zuerst pogosteje pomeni: najprej."
    ]
  }
}
```

---

## Finding 41

**Audit ID:** `LRB093-0041`
**Finding Stable ID:** `g2/a1/sl|es|idx:167|study.examples, study.comparison, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** sl
**Card:** `es|idx:167`
**Field / path:** `study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Es regnet.\",\"lv\":\"es mācos vācu valodu.\"},{\"de\":\"Es ist kalt.\",\"lv\":\"viņš ir noguris.\"},{\"de\":\"Das Kind schläft.\",\"lv\":\"viņa strādā šeit.\"},{\"de\":\"Es ist müde.\",\"lv\":\"tā ir mana grāmata.\"},{\"de\":\"Es regnet.\",\"lv\":\"līst.\"},{\"de\":\"Es schneit.\",\"lv\":\"snieg.\"}]","study.comparison":"[{\"word\":\"es\",\"meaning\":\"to • brezosebna oblika\",\"example\":\"Es regnet. – Dežuje.\"},{\"word\":\"ich\",\"meaning\":\"jaz (oseba)\",\"example\":\"Ich lerne Deutsch. – Učim se nemščino.\"}]","study.important":"[\"Vācu es nav latviešu “es”.\",\"Latviešu “es” vāciski ir ich; vācu es bieži nozīmē tas/tā vai netiek tulkots.\",\"Slovenski \\\"jaz\\\" je nemščno ich; nemško es pogosto pomeni to ali se ne prevede.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"to • brezosebni zaimek","study":{"id":"a1-es","layout":"standardStudy","translation":"to • brezosebni zaimek","explanation":["Glavna ideja: es je zaimek srednjega spola in stoji tudi v brezosebnih povedih.","Slovenski prevod je lahko to, on ali pa se es sploh ne izrazi."],"examples":[{"de":"Es regnet.","lv":"Dežuje."},{"de":"Es ist kalt.","lv":"Mrzlo je."},{"de":"Das Kind schläft.","lv":"Otrok spi."},{"de":"Es ist müde.","lv":"Utrujeno je."}],"comparison":[{"word":"es","meaning":"to • brezosebna oblika","example":"Es regnet. — Dežuje."},{"word":"ich","meaning":"jaz kot oseba","example":"Ich lerne Deutsch. — Učim se nemščino."}],"tip":{"text":"Nemški es ni slovenski jaz."},"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{}]},"important":["es se v vremenskih povedih pogosto ne prevaja z ločeno besedo."]}}
**Note:** OWNER approved override: es: vsi štirje ciljni primeri so bili zamaknjeni latvijski prevodi drugih povedi in niso ustrezali nemškim virom.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "to • brezosebni zaimek",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "to • brezosebni zaimek",
    "explanation": [
      "Glavna ideja: es je zaimek srednjega spola in stoji tudi v brezosebnih povedih.",
      "Slovenski prevod je lahko to, on ali pa se es sploh ne izrazi."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Dežuje."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Mrzlo je."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Otrok spi."
      },
      {
        "de": "Es ist müde.",
        "lv": "Utrujeno je."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "to • brezosebna oblika",
        "example": "Es regnet. — Dežuje."
      },
      {
        "word": "ich",
        "meaning": "jaz kot oseba",
        "example": "Ich lerne Deutsch. — Učim se nemščino."
      }
    ],
    "tip": {
      "text": "Nemški es ni slovenski jaz."
    },
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
        {},
        {}
      ]
    },
    "important": [
      "es se v vremenskih povedih pogosto ne prevaja z ločeno besedo."
    ]
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "es",
  "lv": "tas • tā • bezpersoniska forma",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "tas • tā • bezpersoniska forma",
    "explanation": [
      "Glavna ideja: es je zaimek.",
      "Uporablja se: to, brezosebne konstrukcije."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "es mācos vācu valodu."
      },
      {
        "de": "Es ist kalt.",
        "lv": "viņš ir noguris."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "viņa strādā šeit."
      },
      {
        "de": "Es ist müde.",
        "lv": "tā ir mana grāmata."
      },
      {
        "de": "Es regnet.",
        "lv": "līst."
      },
      {
        "de": "Es schneit.",
        "lv": "snieg."
      }
    ],
    "info": [
      "Latviešu “es” = vācu “ich”",
      "Vācu “es” = tas; tā; bezpersoniska forma"
    ],
    "tip": {
      "text": "Atceries: latviešu “es” → ich, nevis vācu es."
    },
    "sectionAccents": {
      "examples": [
        {
          "blue": [
            "Ich"
          ]
        },
        {
          "blue": [
            "Er"
          ]
        },
        {
          "red": [
            "Sie"
          ]
        },
        {
          "yellow": [
            "Das"
          ]
        },
        {
          "blue": [
            "Es"
          ]
        },
        {
          "blue": [
            "Es"
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
        }
      ],
      "info": [
        {
          "blue": [
            "ich"
          ]
        },
        {
          "green": [
            "es"
          ]
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "es"
          ],
          "red": [
            "ich"
          ],
          "purple": [
            "es"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "es"
          ],
          "purple": [
            "es"
          ]
        },
        {
          "red": [
            "ich"
          ],
          "blue": [
            "es"
          ],
          "purple": [
            "tas",
            "tā"
          ]
        }
      ]
    },
    "important": [
      "Vācu es nav latviešu “es”.",
      "Latviešu “es” vāciski ir ich; vācu es bieži nozīmē tas/tā vai netiek tulkots.",
      "Slovenski \"jaz\" je nemščno ich; nemško es pogosto pomeni to ali se ne prevede."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "to • brezosebna oblika",
        "example": "Es regnet. – Dežuje."
      },
      {
        "word": "ich",
        "meaning": "jaz (oseba)",
        "example": "Ich lerne Deutsch. – Učim se nemščino."
      }
    ]
  }
}
```

---

## Finding 42

**Audit ID:** `LRB093-0042`
**Finding Stable ID:** `g2/a1/sl|essen|idx:690|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** sl
**Card:** `essen|idx:690`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"jesti","study.translation":"jesti","study.explanation":"[\"Glavna ideja: Glagol — jesti hrano.\",\"essen predvsem pomeni: uživati prehrano.\",\"Pogosto opisuje: dejanje.\",\"essen predvsem pomeni: hrana ali obrok.\",\"Pogosto opisuje: dež.\",\"essen pomeni jesti.\",\"das Essen je lahko hrana ali obrok na splošno.\"]","study.examples":"[{\"de\":\"Ich esse gern Pizza.\",\"lv\":\"Rad imam pico.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"kaj želite jesti?\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"jedimo ob 12. uri.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"hrana je pripravljena.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"hrana je zelo okusna.\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"hrana je okusna.\"}]","study.tip":"[\"essen = jesti\",\"Uporabite essen, kadar kontekst ustreza temu pomenu.\"]","study.important":"[\"essen je glagol brez člena.\",\"das Essen ni isto kot essen.\",\"Akcija: essen.\",\"Primer/obrok: das Essen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"jesti","study":{"id":"a1-essen","layout":"standardStudy","translation":"jesti","explanation":["Glavna ideja: essen je glagol jesti.","das Essen je samostalnik za hrano ali jed in ni isto kot glagol."],"examples":[{"de":"Ich esse gern Pizza.","lv":"Rad jem pico."},{"de":"Was wollt ihr essen?","lv":"Kaj želite jesti?"},{"de":"Wir essen um 12 Uhr.","lv":"Jemo ob 12. uri."},{"de":"Das Essen ist fertig.","lv":"Hrana je pripravljena."},{"de":"Das Essen schmeckt sehr gut.","lv":"Hrana je zelo okusna."},{"de":"Das Essen schmeckt gut.","lv":"Hrana je okusna."}],"tip":{"text":"essen = jesti."},"important":["Glagol essen je brez člena; das Essen je samostalnik."],"sectionAccents":{"examples":[{},{},{},{},{},{}],"comparison":[]},"comparison":[]}}
**Note:** OWNER approved override: essen: prvi primer je izražal imeti rad pico namesto rad jo jesti, razlaga in opombe pa so ostale latvijske.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "essen",
  "lv": "jesti",
  "level": "A1",
  "study": {
    "id": "a1-essen",
    "layout": "standardStudy",
    "translation": "jesti",
    "explanation": [
      "Glavna ideja: essen je glagol jesti.",
      "das Essen je samostalnik za hrano ali jed in ni isto kot glagol."
    ],
    "examples": [
      {
        "de": "Ich esse gern Pizza.",
        "lv": "Rad jem pico."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Kaj želite jesti?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Jemo ob 12. uri."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Hrana je pripravljena."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Hrana je zelo okusna."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Hrana je okusna."
      }
    ],
    "tip": {
      "text": "essen = jesti."
    },
    "important": [
      "Glagol essen je brez člena; das Essen je samostalnik."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "essen",
  "lv": "jesti",
  "level": "A1",
  "study": {
    "id": "a1-essen",
    "layout": "standardStudy",
    "translation": "jesti",
    "explanation": [
      "Glavna ideja: Glagol — jesti hrano.",
      "essen predvsem pomeni: uživati prehrano.",
      "Pogosto opisuje: dejanje.",
      "essen predvsem pomeni: hrana ali obrok.",
      "Pogosto opisuje: dež.",
      "essen pomeni jesti.",
      "das Essen je lahko hrana ali obrok na splošno."
    ],
    "examples": [
      {
        "de": "Ich esse gern Pizza.",
        "lv": "Rad imam pico."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "kaj želite jesti?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "jedimo ob 12. uri."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "hrana je pripravljena."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "hrana je zelo okusna."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "hrana je okusna."
      }
    ],
    "tip": [
      "essen = jesti",
      "Uporabite essen, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "essen je glagol brez člena.",
      "das Essen ni isto kot essen.",
      "Akcija: essen.",
      "Primer/obrok: das Essen."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "essen",
          "essen"
        ],
        "purple": [
          "ēst"
        ],
        "blue": [
          "essen",
          "esse"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "esse"
            ]
          },
          "lv": {}
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
              "ēst"
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
          "lv": {}
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "essen",
              "essen"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "purple": [
            "ēst"
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

## Finding 43

**Audit ID:** `LRB093-0043`
**Finding Stable ID:** `g2/a1/sl|Essen|idx:691|study.explanation; study.tip; study.examples|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sl
**Card:** `Essen|idx:691`
**Field / path:** `study.explanation; study.tip; study.examples`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Glavna ideja: Samostalnik - hrana ali celoten obrok.\",\"das Essen predvsem pomeni: uživati prehrano.\",\"Pogosto opisuje: dejanje.\",\"das Essen predvsem pomeni: hrana ali obrok.\",\"Pogosto opisuje: dež.\",\"essen pomeni jesti.\",\"das Essen je lahko hrana ali obrok na splošno.\"]","study.tip":"[\"das Essen = jesti\",\"Uporabite das Essen, kadar kontekst ustreza temu pomenu.\"]","study.examples":"[{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Hrana je okusna.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"kaj želite jesti?\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"jedimo ob 12. uri.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"hrana je pripravljena.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"hrana je zelo okusna.\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"hrana je okusna.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"hrana • jed","study":{"id":"a1-essen-study","layout":"standardStudy","translation":"hrana • jed","explanation":["Glavna ideja: das Essen je samostalnik za hrano, jed ali obrok.","Glagol essen pomeni jesti."],"examples":[{"de":"Das Essen schmeckt gut.","lv":"Hrana je okusna."},{"de":"Was wollt ihr essen?","lv":"Kaj želite jesti?"},{"de":"Wir essen um 12 Uhr.","lv":"Jemo ob 12. uri."},{"de":"Das Essen ist fertig.","lv":"Hrana je pripravljena."},{"de":"Das Essen schmeckt sehr gut.","lv":"Hrana je zelo okusna."},{"de":"Das Essen schmeckt gut.","lv":"Hrana je okusna."}],"tip":{"text":"das Essen = hrana ali jed."},"important":["das Essen je samostalnik; essen je glagol."],"sectionAccents":{"examples":[{},{},{},{},{},{}],"comparison":[]},"comparison":[]}}
**Note:** OWNER approved override: Essen: nasvet je napačno enačil samostalnik z glagolom ēst, razlaga in opombe pa so ostale latvijske.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "hrana • jed",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "hrana • jed",
    "explanation": [
      "Glavna ideja: das Essen je samostalnik za hrano, jed ali obrok.",
      "Glagol essen pomeni jesti."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Hrana je okusna."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Kaj želite jesti?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Jemo ob 12. uri."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Hrana je pripravljena."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Hrana je zelo okusna."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Hrana je okusna."
      }
    ],
    "tip": {
      "text": "das Essen = hrana ali jed."
    },
    "important": [
      "das Essen je samostalnik; essen je glagol."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "hrana • obrok",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "hrana • obrok",
    "explanation": [
      "Glavna ideja: Samostalnik - hrana ali celoten obrok.",
      "das Essen predvsem pomeni: uživati prehrano.",
      "Pogosto opisuje: dejanje.",
      "das Essen predvsem pomeni: hrana ali obrok.",
      "Pogosto opisuje: dež.",
      "essen pomeni jesti.",
      "das Essen je lahko hrana ali obrok na splošno."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Hrana je okusna."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "kaj želite jesti?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "jedimo ob 12. uri."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "hrana je pripravljena."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "hrana je zelo okusna."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "hrana je okusna."
      }
    ],
    "tip": [
      "das Essen = jesti",
      "Uporabite das Essen, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "essen je glagol brez člena.",
      "das Essen ni isto kot essen.",
      "Akcija: essen.",
      "Primer/obrok: das Essen."
    ],
    "sectionAccents": {
      "explanation": {
        "yellow": [
          "das Essen",
          "essen"
        ],
        "purple": [
          "ēdienu",
          "maltīte"
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
              "ēdiens"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "essen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "essen"
            ]
          },
          "lv": {}
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
              "ēdiens"
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
              "ēdiens"
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
              "ēdiens"
            ]
          }
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

---

## Finding 44

**Audit ID:** `LRB093-0044`
**Finding Stable ID:** `g2/a1/sl|etwas|idx:169|study.examples, study.comparison, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Lang:** sl
**Card:** `etwas|idx:169`
**Field / path:** `study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Ich möchte etwas trinken.\",\"lv\":\"rad bi pil kaj.\"},{\"de\":\"Hast du etwas Zeit?\",\"lv\":\"ima malo časa?\"},{\"de\":\"Ich bin etwas müde.\",\"lv\":\"malo sem utrujen.\"},{\"de\":\"Ich habe etwas für dich.\",\"lv\":\"imam kaj za tebe.\"},{\"de\":\"Das ist etwas teuer.\",\"lv\":\"tas ir nedaudz dārgi.\"}]","study.comparison":"[{\"word\":\"etwas\",\"meaning\":\"kaj / malo\",\"example\":\"Ich brauche etwas. = Potrebujem nekaj.\"},{\"word\":\"was\",\"meaning\":\"kaj (pogovorni)\",\"example\":\"Willst du was trinken? = Hoče piti kaj?\"},{\"word\":\"ein bisschen\",\"meaning\":\"malo\",\"example\":\"Ich bin ein bisschen müde. = Malo sem utrujen.\"},{\"word\":\"nichts\",\"meaning\":\"nič\",\"example\":\"Ich brauche nichts. = Nisam potrebujem nič.\"}]","study.important":"[\"etwas nav tas pats, kas nichts: etwas nozīmē, ka kaut kas ir, bet nichts nozīmē nekas.\",\"Latviski dažreiz labāk skan kaut ko, nevis kaut kas, piemēram: etwas trinken = kaut ko dzert.\",\"Slovensko včasih bolje zveni kaj, ne kaj, na primer: etwas trinken = kaj piti.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"nekaj • malo","study":{"id":"a1-etwas","layout":"standardStudy","translation":"nekaj • malo","explanation":["Glavna ideja: etwas pomeni nekaj pri stvari in malo pri stopnji.","Pred pridevnikom pogosto pomeni nekoliko ali malo."],"examples":[{"de":"Ich möchte etwas trinken.","lv":"Rad bi nekaj spil."},{"de":"Hast du etwas Zeit?","lv":"Imaš nekaj časa?"},{"de":"Ich bin etwas müde.","lv":"Malo sem utrujen."},{"de":"Ich habe etwas für dich.","lv":"Nekaj imam zate."},{"de":"Das ist etwas teuer.","lv":"To je nekoliko drago."}],"comparison":[{"word":"etwas","meaning":"nekaj • malo","example":"Ich brauche etwas. — Nekaj potrebujem."},{"word":"was","meaning":"nekaj v pogovornem jeziku","example":"Willst du was trinken? — Ali želiš kaj piti?"},{"word":"ein bisschen","meaning":"malo","example":"Ich bin ein bisschen müde. — Malo sem utrujen."},{"word":"nichts","meaning":"nič","example":"Ich brauche nichts. — Ničesar ne potrebujem."}],"tip":{"text":"Stvar → nekaj; stopnja → malo."},"important":["etwas pomeni, da nekaj obstaja; nichts pomeni nič."],"sectionAccents":{"examples":[{},{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: etwas: peti primer je ostal latvijski, primerjava was je izgubila osebo, nichts pa je imel hudo slovnično napako.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "etwas",
  "lv": "nekaj • malo",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "nekaj • malo",
    "explanation": [
      "Glavna ideja: etwas pomeni nekaj pri stvari in malo pri stopnji.",
      "Pred pridevnikom pogosto pomeni nekoliko ali malo."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Rad bi nekaj spil."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "Imaš nekaj časa?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Malo sem utrujen."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "Nekaj imam zate."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "To je nekoliko drago."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "nekaj • malo",
        "example": "Ich brauche etwas. — Nekaj potrebujem."
      },
      {
        "word": "was",
        "meaning": "nekaj v pogovornem jeziku",
        "example": "Willst du was trinken? — Ali želiš kaj piti?"
      },
      {
        "word": "ein bisschen",
        "meaning": "malo",
        "example": "Ich bin ein bisschen müde. — Malo sem utrujen."
      },
      {
        "word": "nichts",
        "meaning": "nič",
        "example": "Ich brauche nichts. — Ničesar ne potrebujem."
      }
    ],
    "tip": {
      "text": "Stvar → nekaj; stopnja → malo."
    },
    "important": [
      "etwas pomeni, da nekaj obstaja; nichts pomeni nič."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "etwas",
  "lv": "kaut kas • nedaudz",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "kaut kas • nedaudz",
    "explanation": [
      "Galvenā doma: etwas nozīmē kaut kas vai nedaudz atkarībā no konteksta.",
      "Ja etwas aizstāj nezināmu lietu, latviski parasti saka kaut kas.",
      "Ja etwas stāv pie īpašības vārda vai daudzuma, tas bieži nozīmē nedaudz."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "rad bi pil kaj."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "ima malo časa?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "malo sem utrujen."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "imam kaj za tebe."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "tas ir nedaudz dārgi."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "kaj / malo",
        "example": "Ich brauche etwas. = Potrebujem nekaj."
      },
      {
        "word": "was",
        "meaning": "kaj (pogovorni)",
        "example": "Willst du was trinken? = Hoče piti kaj?"
      },
      {
        "word": "ein bisschen",
        "meaning": "malo",
        "example": "Ich bin ein bisschen müde. = Malo sem utrujen."
      },
      {
        "word": "nichts",
        "meaning": "nič",
        "example": "Ich brauche nichts. = Nisam potrebujem nič."
      }
    ],
    "tip": {
      "text": "Atceries: lieta → kaut kas; pakāpe → nedaudz."
    },
    "important": [
      "etwas nav tas pats, kas nichts: etwas nozīmē, ka kaut kas ir, bet nichts nozīmē nekas.",
      "Latviski dažreiz labāk skan kaut ko, nevis kaut kas, piemēram: etwas trinken = kaut ko dzert.",
      "Slovensko včasih bolje zveni kaj, ne kaj, na primer: etwas trinken = kaj piti."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "etwas"
        ],
        "purple": [
          "kaut kas",
          "nedaudz",
          "kaut ko"
        ],
        "green": [
          "konteksta"
        ],
        "yellow": [
          "lietu",
          "daudzuma"
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
              "kaut ko"
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
              "nedaudz"
            ],
            "yellow": [
              "laika"
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
              "nedaudz"
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
              "kaut kas"
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
              "nedaudz"
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
              "kaut kas",
              "nedaudz"
            ]
          },
          "example": {
            "blue": [
              "etwas"
            ],
            "purple": [
              "kaut kas"
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
              "kaut kas"
            ]
          },
          "example": {
            "green": [
              "was"
            ],
            "purple": [
              "kaut ko"
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
              "mazliet"
            ]
          },
          "example": {
            "yellow": [
              "ein bisschen",
              "mazliet"
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
              "nekas"
            ]
          },
          "example": {
            "red": [
              "nichts",
              "neko"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "purple": [
            "kaut kas",
            "nedaudz"
          ],
          "yellow": [
            "lieta"
          ],
          "green": [
            "pakāpe"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "etwas"
          ],
          "purple": [
            "kaut kas"
          ],
          "red": [
            "nichts",
            "nekas"
          ]
        },
        {
          "blue": [
            "etwas"
          ],
          "purple": [
            "kaut ko",
            "kaut kas"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 45

**Audit ID:** `LRB093-0045`
**Finding Stable ID:** `g2/a1/sl|euch|idx:170|study.examples.lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `euch|idx:170`
**Field / path:** `study.examples.lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"vas • vam","study":{"id":"a1-euch","layout":"standardStudy","translation":"vas • vam","explanation":["Glavna ideja: euch je tožilniška ali dajalniška oblika osebnega zaimka ihr.","V slovenščini se po vlogi v stavku prevede kot vas ali vam."],"examples":[{"de":"Ich sehe euch.","lv":"Vidim vas."},{"de":"Ich helfe euch.","lv":"Pomagam vam."},{"de":"Ich gebe euch das Buch.","lv":"Dam vam knjigo."},{"de":"Ich danke euch.","lv":"Zahvaljujem se vam."},{"de":"Ihr erinnert euch.","lv":"Spomnite se."}],"comparison":[{"word":"ihr","meaning":"vi","example":"Ihr seid freundlich. — Prijazni ste."},{"word":"euch","meaning":"vas • vam","example":"Ich helfe euch. — Pomagam vam."},{"word":"euer","meaning":"vaš","example":"Das ist euer Haus. — To je vaša hiša."}],"tip":{"text":"Predmet dejanja → euch; osebek → ihr."},"important":["euch lahko pomeni vas ali vam, odvisno od glagolske vezave."],"sectionAccents":{"examples":[{},{},{},{},{}],"comparison":[{},{},{}]}}}
**Note:** OWNER approved override: euch: prvi primer je množino vas zamenjal z ednino te, razlaga in nasvet pa sta ostala latvijska.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "euch",
  "lv": "vas • vam",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "vas • vam",
    "explanation": [
      "Glavna ideja: euch je tožilniška ali dajalniška oblika osebnega zaimka ihr.",
      "V slovenščini se po vlogi v stavku prevede kot vas ali vam."
    ],
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Vidim vas."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Pomagam vam."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Dam vam knjigo."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Zahvaljujem se vam."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Spomnite se."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "vi",
        "example": "Ihr seid freundlich. — Prijazni ste."
      },
      {
        "word": "euch",
        "meaning": "vas • vam",
        "example": "Ich helfe euch. — Pomagam vam."
      },
      {
        "word": "euer",
        "meaning": "vaš",
        "example": "Das ist euer Haus. — To je vaša hiša."
      }
    ],
    "tip": {
      "text": "Predmet dejanja → euch; osebek → ihr."
    },
    "important": [
      "euch lahko pomeni vas ali vam, odvisno od glagolske vezave."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "euch",
  "lv": "vi • vam",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "vi • vam",
    "explanation": "“euch” ir vietniekvārds 2. personas daudzskaitlī. To lieto gan kā tiešo papildinājumu (kurp?) — “jūs”, gan kā netiešo papildinājumu (kam?) — “jums”.",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "te vidim."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "vam pomagam."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "vam dam knjigo."
      },
      {
        "de": "Ich danke euch.",
        "lv": "vam se zahvaljujem."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "se spomnite."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "vi",
        "example": "Ihr seid freundlich. = Prijazni ste."
      },
      {
        "word": "euch",
        "meaning": "vi / vam",
        "example": "Ich helfe euch. = Vam pomagam."
      },
      {
        "word": "euer",
        "meaning": "vaš",
        "example": "Das ist euer Haus. = To je vaša hiša."
      }
    ],
    "info": [
      "ihr = jūs (teikuma priekšmeta forma)",
      "euch = jūs (kurp? forma) / jums (kam? forma)",
      "euer = jūsu (piederības forma)"
    ],
    "tip": {
      "text": "“euch” atbild uz jautājumu “kam?” vai ir tiešais papildinājums teikumos ar “jūs”.",
      "example": "Es jums palīdzu. = Ich helfe euch. Es redzu jūs. = Ich sehe euch. Es stāstu jums. = Ich erzähle euch."
    },
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

## Finding 46

**Audit ID:** `LRB093-0046`
**Finding Stable ID:** `g2/a1/sl|Ferien|idx:694|study.examples; study.comparison; study|MISTRANSLATION|gpt-5.6-luna`
**Lang:** sl
**Card:** `Ferien|idx:694`
**Field / path:** `study.examples; study.comparison; study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"In den Ferien fahren wir ans Meer.\",\"lv\":\"Ob vikendih gremo na morje.\"},{\"de\":\"In den Ferien habe ich viel Zeit.\",\"lv\":\"med počitnicami imam veliko časa.\"},{\"de\":\"Was macht ihr in den Ferien?\",\"lv\":\"kaj delaš med počitnicami?\"},{\"de\":\"Die Schule ist in den Ferien zu.\",\"lv\":\"šola je med počitnicami zaprta.\"},{\"de\":\"In den Ferien fahren wir ans Meer.\",\"lv\":\"ob vikendih gremo na morje.\"},{\"de\":\"In den Ferien\",\"lv\":\"počitnice (šola).\"}]","study.comparison":"[{\"word\":\"die Ferien\",\"meaning\":\"šolske/študijske dopuste (samo mno.)\",\"example\":\"In den Ferien fahren wir weg. – Počitnic se odpravimo.\"},{\"word\":\"der Urlaub\",\"meaning\":\"delovni dopust (samo ednina.)\",\"example\":\"Ich habe zwei Wochen Urlaub. – Imam dva tedna dopusta.\"}]","study.translation":"počitnice (šola)","study.explanation":"[\"Glavna ideja: samo množina. Šolske ali študijske počitnice – vedno v množini.\",\"die Ferien predvsem pomeni: šolske počitnice.\",\"Pogosto označeno z: samo množina.\",\"die Ferien so samo množina — vedno množina (in den Ferien).\"]","study.tip":"[\"samo množina. Šolske ali študijske počitnice — vedno množina.\",\"Uporabite die Ferien, kadar kontekst ustreza temu pomenu.\"]","study.important":"[\"Ferien vedno z dativom: in den Ferien.\",\"Napačno: in der Ferien → Pravilno: in den Ferien\",\"Šola: die Ferien (samo množina).\",\"samo množina. Šolske ali študijske počitnice — vedno množina.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"počitnice","study":{"id":"a1-ferien","layout":"standardStudy","translation":"počitnice","explanation":["Glavna ideja: die Ferien so šolske ali študijske počitnice in se uporabljajo samo v množini.","der Urlaub je dopust od dela in je v tem pomenu edninski."],"examples":[{"de":"In den Ferien fahren wir ans Meer.","lv":"Med počitnicami se odpeljemo na morje."},{"de":"In den Ferien habe ich viel Zeit.","lv":"Med počitnicami imam veliko časa."},{"de":"Was macht ihr in den Ferien?","lv":"Kaj delate med počitnicami?"},{"de":"Die Schule ist in den Ferien zu.","lv":"Šola je med počitnicami zaprta."},{"de":"In den Ferien fahren wir ans Meer.","lv":"Med počitnicami se odpeljemo na morje."},{"de":"In den Ferien","lv":"med počitnicami"}],"comparison":[{"word":"die Ferien","meaning":"šolske ali študijske počitnice v množini","example":"In den Ferien fahren wir weg. — Med počitnicami odpotujemo."},{"word":"der Urlaub","meaning":"dopust od dela v ednini","example":"Ich habe zwei Wochen Urlaub. — Imam dva tedna dopusta."}],"tip":{"text":"Šolski premor → die Ferien; dopust od dela → der Urlaub."},"important":["Pravilno je in den Ferien.","die Ferien se uporablja samo v množini."],"sectionAccents":{"examples":[{},{},{},{},{},{}],"comparison":[{},{}]}}}
**Note:** OWNER approved override: Ferien: dva primera sta počitnice zamenjala z vikendi, vprašanje je zamenjalo množino z ednino, razlaga pa je ostala latvijska.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Ferien",
  "de_article": "die",
  "lv": "počitnice",
  "level": "A1",
  "study": {
    "id": "a1-ferien",
    "layout": "standardStudy",
    "translation": "počitnice",
    "explanation": [
      "Glavna ideja: die Ferien so šolske ali študijske počitnice in se uporabljajo samo v množini.",
      "der Urlaub je dopust od dela in je v tem pomenu edninski."
    ],
    "examples": [
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Med počitnicami se odpeljemo na morje."
      },
      {
        "de": "In den Ferien habe ich viel Zeit.",
        "lv": "Med počitnicami imam veliko časa."
      },
      {
        "de": "Was macht ihr in den Ferien?",
        "lv": "Kaj delate med počitnicami?"
      },
      {
        "de": "Die Schule ist in den Ferien zu.",
        "lv": "Šola je med počitnicami zaprta."
      },
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Med počitnicami se odpeljemo na morje."
      },
      {
        "de": "In den Ferien",
        "lv": "med počitnicami"
      }
    ],
    "comparison": [
      {
        "word": "die Ferien",
        "meaning": "šolske ali študijske počitnice v množini",
        "example": "In den Ferien fahren wir weg. — Med počitnicami odpotujemo."
      },
      {
        "word": "der Urlaub",
        "meaning": "dopust od dela v ednini",
        "example": "Ich habe zwei Wochen Urlaub. — Imam dva tedna dopusta."
      }
    ],
    "tip": {
      "text": "Šolski premor → die Ferien; dopust od dela → der Urlaub."
    },
    "important": [
      "Pravilno je in den Ferien.",
      "die Ferien se uporablja samo v množini."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "Ferien",
  "de_article": "die",
  "lv": "počitnice (šola)",
  "level": "A1",
  "study": {
    "id": "a1-ferien",
    "layout": "standardStudy",
    "translation": "počitnice (šola)",
    "explanation": [
      "Glavna ideja: samo množina. Šolske ali študijske počitnice – vedno v množini.",
      "die Ferien predvsem pomeni: šolske počitnice.",
      "Pogosto označeno z: samo množina.",
      "die Ferien so samo množina — vedno množina (in den Ferien)."
    ],
    "examples": [
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Ob vikendih gremo na morje."
      },
      {
        "de": "In den Ferien habe ich viel Zeit.",
        "lv": "med počitnicami imam veliko časa."
      },
      {
        "de": "Was macht ihr in den Ferien?",
        "lv": "kaj delaš med počitnicami?"
      },
      {
        "de": "Die Schule ist in den Ferien zu.",
        "lv": "šola je med počitnicami zaprta."
      },
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "ob vikendih gremo na morje."
      },
      {
        "de": "In den Ferien",
        "lv": "počitnice (šola)."
      }
    ],
    "comparison": [
      {
        "word": "die Ferien",
        "meaning": "šolske/študijske dopuste (samo mno.)",
        "example": "In den Ferien fahren wir weg. – Počitnic se odpravimo."
      },
      {
        "word": "der Urlaub",
        "meaning": "delovni dopust (samo ednina.)",
        "example": "Ich habe zwei Wochen Urlaub. – Imam dva tedna dopusta."
      }
    ],
    "tip": [
      "samo množina. Šolske ali študijske počitnice — vedno množina.",
      "Uporabite die Ferien, kadar kontekst ustreza temu pomenu."
    ],
    "important": [
      "Ferien vedno z dativom: in den Ferien.",
      "Napačno: in der Ferien → Pravilno: in den Ferien",
      "Šola: die Ferien (samo množina).",
      "samo množina. Šolske ali študijske počitnice — vedno množina."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "die Ferien",
          "ferien"
        ],
        "purple": [
          "skola"
        ],
        "green": [
          "Ferien"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "ferien"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ferien"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ferien"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ferien"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ferien"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ferien"
            ]
          },
          "lv": {
            "purple": [
              "brīvdienas (skola)"
            ]
          }
        }
      ],
      "tip": [
        {}
      ],
      "important": [
        {}
      ]
    }
  }
}
```

---

## Finding 47

**Audit ID:** `LRB093-0047`
**Finding Stable ID:** `g2/a1/sl|fernsehen|idx:687|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** sl
**Card:** `fernsehen|idx:687`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"gledati televizijo","study.translation":"gledati televizijo","study.explanation":"Galvenā doma: fernsehen ir sadalāms darbības vārds — ich sehe fern, du siehst fern. Tas nozīmē skatīties televīziju. Ne jaukt ar lietvārdu das Fernsehen (televīzija kā medijs).","study.examples":"[{\"de\":\"Ich sehe heute Abend fern.\",\"lv\":\"nocoj gledam televizijo.\"},{\"de\":\"Siehst du oft fern?\",\"lv\":\"pogosto gledaš televizijo?\"},{\"de\":\"Die Kinder sehen am Nachmittag fern.\",\"lv\":\"otroci po poldnevu gledajo televizijo.\"}]","study.comparison":"[{\"word\":\"fernsehen\",\"meaning\":\"gledati televizijo\",\"example\":\"Ich sehe fern. = Gledam televizijo.\"},{\"word\":\"das Fernsehen\",\"meaning\":\"televizija (medij)\",\"example\":\"Im Fernsehen läuft ein Film. = Na televiziji je film.\"},{\"word\":\"sehen\",\"meaning\":\"videti\",\"example\":\"Ich sehe einen Film. = Vidim film.\"}]","study.tip":"{\"leftBlocks\":[{\"text\":\"Par darbību lieto fernsehen (ich sehe fern). Par TV programmu vai mediju lieto das Fernsehen.\"}]}","study.important":"{\"text\":\"fernsehen = darbības vārds (ich sehe fern). das Fernsehen = lietvārds, tikai vienskaitlis.\"}"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"gledati televizijo","study":{"id":"a1-fernsehen","layout":"standardStudy","translation":"gledati televizijo","explanation":["Glavna ideja: fernsehen je ločljivi glagol za gledanje televizije.","das Fernsehen je samostalnik za televizijo kot medij ali program."],"examples":[{"de":"Ich sehe heute Abend fern.","lv":"Nocoj gledam televizijo."},{"de":"Siehst du oft fern?","lv":"Ali pogosto gledaš televizijo?"},{"de":"Die Kinder sehen am Nachmittag fern.","lv":"Otroci popoldne gledajo televizijo."}],"comparison":[{"word":"fernsehen","meaning":"gledati televizijo","example":"Ich sehe fern. — Gledam televizijo."},{"word":"das Fernsehen","meaning":"televizija kot medij","example":"Im Fernsehen läuft ein Film. — Na televiziji predvajajo film."},{"word":"sehen","meaning":"videti","example":"Ich sehe einen Film. — Vidim film."}],"tip":{"text":"Dejanje → fernsehen; medij ali program → das Fernsehen."},"important":["fernsehen je ločljiv glagol: ich sehe fern."],"sectionAccents":{"examples":[{},{},{}],"comparison":[{},{},{}]}}}
**Note:** OWNER approved override: fernsehen: razlaga, nasvet in opozorilo so ostali latvijski, ena slovenska poved pa je imela napačen predlog za televizijo.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fernsehen",
  "lv": "gledati televizijo",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen",
    "layout": "standardStudy",
    "translation": "gledati televizijo",
    "explanation": [
      "Glavna ideja: fernsehen je ločljivi glagol za gledanje televizije.",
      "das Fernsehen je samostalnik za televizijo kot medij ali program."
    ],
    "examples": [
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Nocoj gledam televizijo."
      },
      {
        "de": "Siehst du oft fern?",
        "lv": "Ali pogosto gledaš televizijo?"
      },
      {
        "de": "Die Kinder sehen am Nachmittag fern.",
        "lv": "Otroci popoldne gledajo televizijo."
      }
    ],
    "comparison": [
      {
        "word": "fernsehen",
        "meaning": "gledati televizijo",
        "example": "Ich sehe fern. — Gledam televizijo."
      },
      {
        "word": "das Fernsehen",
        "meaning": "televizija kot medij",
        "example": "Im Fernsehen läuft ein Film. — Na televiziji predvajajo film."
      },
      {
        "word": "sehen",
        "meaning": "videti",
        "example": "Ich sehe einen Film. — Vidim film."
      }
    ],
    "tip": {
      "text": "Dejanje → fernsehen; medij ali program → das Fernsehen."
    },
    "important": [
      "fernsehen je ločljiv glagol: ich sehe fern."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "fernsehen",
  "lv": "gledati televizijo",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen",
    "layout": "standardStudy",
    "translation": "gledati televizijo",
    "explanation": "Galvenā doma: fernsehen ir sadalāms darbības vārds — ich sehe fern, du siehst fern. Tas nozīmē skatīties televīziju. Ne jaukt ar lietvārdu das Fernsehen (televīzija kā medijs).",
    "examples": [
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "nocoj gledam televizijo."
      },
      {
        "de": "Siehst du oft fern?",
        "lv": "pogosto gledaš televizijo?"
      },
      {
        "de": "Die Kinder sehen am Nachmittag fern.",
        "lv": "otroci po poldnevu gledajo televizijo."
      }
    ],
    "comparison": [
      {
        "word": "fernsehen",
        "meaning": "gledati televizijo",
        "example": "Ich sehe fern. = Gledam televizijo."
      },
      {
        "word": "das Fernsehen",
        "meaning": "televizija (medij)",
        "example": "Im Fernsehen läuft ein Film. = Na televiziji je film."
      },
      {
        "word": "sehen",
        "meaning": "videti",
        "example": "Ich sehe einen Film. = Vidim film."
      }
    ],
    "tip": {
      "leftBlocks": [
        {
          "text": "Par darbību lieto fernsehen (ich sehe fern). Par TV programmu vai mediju lieto das Fernsehen."
        }
      ]
    },
    "important": {
      "text": "fernsehen = darbības vārds (ich sehe fern). das Fernsehen = lietvārds, tikai vienskaitlis."
    },
    "sectionAccents": {
      "explanation": {
        "blue": [
          "fernsehen",
          "sehe",
          "fern"
        ],
        "purple": [
          "skatīties televīziju"
        ],
        "green": [
          "das Fernsehen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sehe",
              "fern"
            ]
          },
          "lv": {
            "purple": [
              "skatos televīziju"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Siehst",
              "fern"
            ]
          },
          "lv": {
            "purple": [
              "skaties televīzoru"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sehen",
              "fern"
            ]
          },
          "lv": {
            "purple": [
              "skatās televīzoru"
            ]
          }
        }
      ]
    }
  }
}
```

---

## Finding 48

**Audit ID:** `LRB093-0048`
**Finding Stable ID:** `g2/a1/sl|Fernsehen|idx:688|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Lang:** sl
**Card:** `Fernsehen|idx:688`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"televizija","study.translation":"televizija","study.explanation":"[\"Glavna ideja: Samostalnik, samo ednina. Opisuje TV kot medij ali oddajo na splošno.\",\"das Fernsehen predvsem pomeni: gledam oddajo.\",\"Pogosto opisuje: dejanje.\",\"das Fernsehen predvsem pomeni: TV kot medij.\",\"Pogosto opisuje: samostalnik (samo ednina).\",\"fernsehen je delljiv glagol: ich sehe fern, du siehst fern.\",\"das Fernsehen je samostalnik in samo ednina — nima množine.\"]","study.examples":"[{\"de\":\"Was gibt es heute im Fernsehen?\",\"lv\":\"Kaj je danes na televiziji?\"},{\"de\":\"Was gibt es heute im Fernsehen?\",\"lv\":\"kaj je danes na televiziji?\"},{\"de\":\"Im Fernsehen läuft ein Film.\",\"lv\":\"na televiziji je film.\"},{\"de\":\"Das Fernsehen ist heute langweilig.\",\"lv\":\"televizijski program je danes dolgočasen.\"},{\"de\":\"Ich sehe heute Abend fern.\",\"lv\":\"nocoj gledam televizijo.\"},{\"de\":\"Was gibt es im Fernsehen?\",\"lv\":\"Kaj je na televiziji?\"}]","study.tip":"[\"Ko govorite o dejanju, uporabite fernsehen (ich sehe fern). Ko govorimo o televizijskem programu ali medijih, uporabite das Fernsehen.\",\"Samostalnik, samo ednina. Opisuje televizijo kot medij ali oddajo na splošno.\"]","study.important":"[\"fernsehen je delljiv: sehen + fern.\",\"das Fernsehen ni v množini — ni *die Fernsehen.\",\"Nepravilno: die Fernsehen → Pravilno: das Fernsehen\",\"Dejanje: fernsehen → ich sehe fern.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"televizija","study":{"id":"a1-fernsehen-study","layout":"standardStudy","translation":"televizija","explanation":["Glavna ideja: das Fernsehen je samostalnik za televizijo kot medij ali televizijski program.","Glagol fernsehen pomeni gledati televizijo."],"examples":[{"de":"Was gibt es heute im Fernsehen?","lv":"Kaj je danes na televiziji?"},{"de":"Was gibt es heute im Fernsehen?","lv":"Kaj je danes na televiziji?"},{"de":"Im Fernsehen läuft ein Film.","lv":"Na televiziji predvajajo film."},{"de":"Das Fernsehen ist heute langweilig.","lv":"Televizijski program je danes dolgočasen."},{"de":"Ich sehe heute Abend fern.","lv":"Nocoj gledam televizijo."},{"de":"Was gibt es im Fernsehen?","lv":"Kaj je na televiziji?"}],"tip":{"text":"Medij ali program → das Fernsehen; dejanje → fernsehen."},"important":["das Fernsehen nima množinske oblike."],"sectionAccents":{"examples":[{},{},{},{},{},{}],"comparison":[]},"comparison":[]}}
**Note:** OWNER approved override: Fernsehen: celotna razlaga in opozorila so ostala latvijska, teči pri programu pa je bilo prevedeno z nenatančnim je.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Fernsehen",
  "de_article": "das",
  "lv": "televizija",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen-study",
    "layout": "standardStudy",
    "translation": "televizija",
    "explanation": [
      "Glavna ideja: das Fernsehen je samostalnik za televizijo kot medij ali televizijski program.",
      "Glagol fernsehen pomeni gledati televizijo."
    ],
    "examples": [
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Kaj je danes na televiziji?"
      },
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Kaj je danes na televiziji?"
      },
      {
        "de": "Im Fernsehen läuft ein Film.",
        "lv": "Na televiziji predvajajo film."
      },
      {
        "de": "Das Fernsehen ist heute langweilig.",
        "lv": "Televizijski program je danes dolgočasen."
      },
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Nocoj gledam televizijo."
      },
      {
        "de": "Was gibt es im Fernsehen?",
        "lv": "Kaj je na televiziji?"
      }
    ],
    "tip": {
      "text": "Medij ali program → das Fernsehen; dejanje → fernsehen."
    },
    "important": [
      "das Fernsehen nima množinske oblike."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "comparison": []
    },
    "comparison": []
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "Fernsehen",
  "de_article": "das",
  "lv": "televizija",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen-study",
    "layout": "standardStudy",
    "translation": "televizija",
    "explanation": [
      "Glavna ideja: Samostalnik, samo ednina. Opisuje TV kot medij ali oddajo na splošno.",
      "das Fernsehen predvsem pomeni: gledam oddajo.",
      "Pogosto opisuje: dejanje.",
      "das Fernsehen predvsem pomeni: TV kot medij.",
      "Pogosto opisuje: samostalnik (samo ednina).",
      "fernsehen je delljiv glagol: ich sehe fern, du siehst fern.",
      "das Fernsehen je samostalnik in samo ednina — nima množine."
    ],
    "examples": [
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Kaj je danes na televiziji?"
      },
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "kaj je danes na televiziji?"
      },
      {
        "de": "Im Fernsehen läuft ein Film.",
        "lv": "na televiziji je film."
      },
      {
        "de": "Das Fernsehen ist heute langweilig.",
        "lv": "televizijski program je danes dolgočasen."
      },
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "nocoj gledam televizijo."
      },
      {
        "de": "Was gibt es im Fernsehen?",
        "lv": "Kaj je na televiziji?"
      }
    ],
    "tip": [
      "Ko govorite o dejanju, uporabite fernsehen (ich sehe fern). Ko govorimo o televizijskem programu ali medijih, uporabite das Fernsehen.",
      "Samostalnik, samo ednina. Opisuje televizijo kot medij ali oddajo na splošno."
    ],
    "important": [
      "fernsehen je delljiv: sehen + fern.",
      "das Fernsehen ni v množini — ni *die Fernsehen.",
      "Nepravilno: die Fernsehen → Pravilno: das Fernsehen",
      "Dejanje: fernsehen → ich sehe fern."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "Fernsehen"
        ],
        "yellow": [
          "Fernsehen"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "televiziji"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "televīzija"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "televīzija"
            ]
          }
        },
        {
          "de": {
            "green": [
              "das Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "televīzija"
            ]
          }
        },
        {
          "de": {},
          "lv": {
            "purple": [
              "televīziju"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Fernsehen",
              "fernsehen"
            ]
          },
          "lv": {
            "purple": [
              "televīzija"
            ]
          }
        }
      ],
      "tip": [
        {}
      ],
      "important": [
        {
          "green": [
            "fernsehen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 49

**Audit ID:** `LRB093-0049`
**Finding Stable ID:** `g2/a1/sl|finden|idx:187|study.examples.lv|MEANING_MISMATCH|gpt-5.6-luna`
**Lang:** sl
**Card:** `finden|idx:187`
**Field / path:** `study.examples.lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"najti • zdeti se","study":{"id":"a1-finden","layout":"standardStudy","translation":"najti • zdeti se","explanation":["Glavna ideja: finden pomeni najti stvar; v zvezi Ich finde das gut izraža mnenje.","Pomen določa predmet in sobesedilo."],"examples":[{"de":"Ich finde meinen Schlüssel.","lv":"Najdem svoj ključ."},{"de":"Ich finde das gut.","lv":"To se mi zdi dobro."},{"de":"Wie findest du den Film?","lv":"Kaj meniš o filmu?"}],"comparison":[{"word":"finden","meaning":"najti • meniti","example":"Ich finde das gut. — To se mi zdi dobro."}],"tip":{"text":"Izgubljena stvar → finden; mnenje → ich finde ..."},"important":["finden ne pomeni samo najti."],"sectionAccents":{"examples":[{},{},{}],"comparison":[{}]}}}
**Note:** OWNER approved override: finden: vsi trije ciljni primeri so bili zamaknjeni latvijski stavki in niso ustrezali svojim nemškim virom.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "finden",
  "lv": "najti • zdeti se",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "najti • zdeti se",
    "explanation": [
      "Glavna ideja: finden pomeni najti stvar; v zvezi Ich finde das gut izraža mnenje.",
      "Pomen določa predmet in sobesedilo."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Najdem svoj ključ."
      },
      {
        "de": "Ich finde das gut.",
        "lv": "To se mi zdi dobro."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Kaj meniš o filmu?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "najti • meniti",
        "example": "Ich finde das gut. — To se mi zdi dobro."
      }
    ],
    "tip": {
      "text": "Izgubljena stvar → finden; mnenje → ich finde ..."
    },
    "important": [
      "finden ne pomeni samo najti."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {}
      ],
      "comparison": [
        {}
      ]
    }
  }
}
```

### Gala card (previous CURRENT composite — full production card)

```json
{
  "de": "finden",
  "lv": "atrast • uzskatīt",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "atrast • uzskatīt",
    "explanation": [
      "Glavna ideja: finden je predvsem najti.",
      "V pogovorih finden pogosto pomeni tudi misliti ali si misliti o nečem.",
      "Če gre za izgubljeno stvar, prevedite kot najti.",
      "Če gre za mnenje, prevedite kot misliti ali se zdi."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "es nevaru atrast savu atslēgu."
      },
      {
        "de": "Ich finde das gut.",
        "lv": "vai tu atradi savu telefonu?"
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "man tas šķiet labi."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "kā tev šķiet filma?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "najti / misliti",
        "example": "Ich finde das gut. = Meni je to dobro."
      },
      {
        "word": "suchen",
        "meaning": "meklēt",
        "example": "Ich suche den Schlüssel. = Es meklēju atslēgu."
      },
      {
        "word": "denken",
        "meaning": "domāt",
        "example": "Ich denke an dich. = Es domāju par tevi."
      },
      {
        "word": "glauben",
        "meaning": "ticēt / domāt",
        "example": "Ich glaube, er kommt. = Es domāju, ka viņš nāks."
      }
    ],
    "tip": {
      "text": "Atceries: pazaudēta lieta → finden; viedoklis → ich finde..."
    },
    "important": [
      "finden ni samo \"najti\".",
      "Ich finde das gut pomeni \"zdi se mi to dobro\", ne \"to najdem dobro\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "finden"
        ],
        "purple": [
          "atrast",
          "uzskatīt",
          "domāt",
          "šķist"
        ],
        "green": [
          "pazaudētu lietu",
          "viedokli"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "finde"
            ]
          },
          "lv": {
            "purple": [
              "atrast"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gefunden"
            ]
          },
          "lv": {
            "purple": [
              "atradi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "finde"
            ]
          },
          "lv": {
            "purple": [
              "šķiet"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "findest"
            ]
          },
          "lv": {
            "purple": [
              "šķiet"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "finden"
            ]
          },
          "meaning": {
            "purple": [
              "atrast",
              "uzskatīt"
            ]
          },
          "example": {
            "blue": [
              "finde"
            ],
            "purple": [
              "šķiet"
            ]
          }
        },
        {
          "word": {
            "green": [
              "suchen"
            ]
          },
          "meaning": {
            "purple": [
              "meklēt"
            ]
          },
          "example": {
            "yellow": [
              "suche",
              "meklēju"
            ]
          }
        },
        {
          "word": {
            "green": [
              "denken"
            ]
          },
          "meaning": {
            "purple": [
              "domāt"
            ]
          },
          "example": {
            "green": [
              "denke",
              "domāju"
            ]
          }
        },
        {
          "word": {
            "green": [
              "glauben"
            ]
          },
          "meaning": {
            "purple": [
              "ticēt",
              "domāt"
            ]
          },
          "example": {
            "red": [
              "glaube",
              "domāju"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "finden"
          ],
          "purple": [
            "pazaudēta lieta",
            "viedoklis"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "finden"
          ],
          "purple": [
            "atrast"
          ]
        },
        {
          "blue": [
            "finde"
          ],
          "purple": [
            "šķiet"
          ],
          "red": [
            "atrod"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 50

**Audit ID:** `LRB093-0050`
**Finding Stable ID:** `g2/a1/sl|geben|idx:223|study.examples, study.tip, study.sectionAccents|TARGET_LV_ERROR|gpt-5.6-luna`
**Lang:** sl
**Card:** `geben|idx:223`
**Field / path:** `study.examples, study.tip, study.sectionAccents`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Gib mir bitte das Buch.\",\"lv\":\"dajte mi, prosim, knjigo.\"},{\"de\":\"Ich gebe dir meine Nummer.\",\"lv\":\"ti imam svojo številko.\"},{\"de\":\"Ich nehme das Buch.\",\"lv\":\"vzamem knjigo.\"},{\"de\":\"Ich bekomme ein Geschenk.\",\"lv\":\"prejamem dar.\"}]","study.tip":"{\"text\":\"Atceries: dot prom → geben; paņemt sev → nehmen.\"}","study.sectionAccents":"{\"explanation\":{\"blue\":[\"geben\"],\"purple\":[\"dot\"],\"red\":[\"nehmen\",\"bekommen\"],\"green\":[\"citam cilvēkam\"]},\"examples\":[{\"de\":{\"blue\":[\"Gib\"],\"yellow\":[\"Buch\"]},\"lv\":{\"purple\":[\"iedod\"],\"yellow\":[\"grāmatu\"]}},{\"de\":{\"blue\":[\"gebe\"],\"yellow\":[\"Nummer\"]},\"lv\":{\"purple\":[\"dodu\"],\"yellow\":[\"numuru\"]}},{\"de\":{\"red\":[\"nehme\"],\"yellow\":[\"Buch\"]},\"lv\":{\"red\":[\"paņemu\"],\"yellow\":[\"grāmatu\"]}},{\"de\":{\"red\":[\"bekomme\"],\"yellow\":[\"Geschenk\"]},\"lv\":{\"red\":[\"saņemu\"],\"yellow\":[\"dāvanu\"]}}],\"comparison\":[{\"word\":{\"green\":[\"geben\"]},\"meaning\":{\"purple\":[\"dot\"]},\"example\":{\"blue\":[\"Gib\"]}},{\"word\":{\"green\":[\"nehmen\"]},\"meaning\":{\"purple\":[\"ņemt\",\"paņemt\"]},\"example\":{\"red\":[\"nehme\"]}},{\"word\":{\"green\":[\"bekommen\"]},\"meaning\":{\"purple\":[\"saņemt\",\"dabūt\"]},\"example\":{\"yellow\":[\"bekomme\"]}},{\"word\":{\"green\":[\"bringen\"]},\"meaning\":{\"purple\":[\"atnest\",\"nogādāt\"]},\"example\":{\"green\":[\"bringe\"]}}],\"tip\":{\"left\":{\"blue\":[\"geben\"],\"purple\":[\"dot prom\"],\"red\":[\"nehmen\",\"paņemt sev\"]}},\"important\":[{\"blue\":[\"geben\"],\"red\":[\"nehmen\"],\"purple\":[\"pretēji virzieni\"]},{\"yellow\":[\"bekommen\"],\"purple\":[\"saņemt\"]}]}"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"dati","study":{"id":"a1-geben","layout":"standardStudy","translation":"dati","explanation":["Glavna ideja: geben pomeni dati nekaj drugi osebi.","nehmen pomeni vzeti, bekommen pa dobiti ali prejeti."],"examples":[{"de":"Gib mir bitte das Buch.","lv":"Daj mi, prosim, knjigo."},{"de":"Ich gebe dir meine Nummer.","lv":"Dam ti svojo številko."},{"de":"Ich nehme das Buch.","lv":"Vzamem knjigo."},{"de":"Ich bekomme ein Geschenk.","lv":"Dobim darilo."}],"comparison":[{"word":"geben","meaning":"dati","example":"Gib mir das Buch. — Daj mi knjigo."},{"word":"nehmen","meaning":"vzeti","example":"Ich nehme das Buch. — Vzamem knjigo."},{"word":"bekommen","meaning":"dobiti • prejeti","example":"Ich bekomme ein Geschenk. — Dobim darilo."},{"word":"bringen","meaning":"prinesti","example":"Ich bringe dir das Buch. — Prinesem ti knjigo."}],"tip":{"text":"Nekaj dati proč → geben; nekaj vzeti zase → nehmen."},"important":["geben in nehmen izražata nasprotni smer.","bekommen pomeni dobiti, ne dati."],"sectionAccents":{"examples":[{},{},{},{}],"comparison":[{},{},{},{}]}}}
**Note:** OWNER approved override: geben: drugi primer je bil slovnično nesmiseln, razlaga in opombe pa so ostale latvijske.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "geben",
  "lv": "dati",
  "level": "A1",
  "study": {
    "id": "a1-geben",
    "layout": "standardStudy",
    "translation": "dati",
    "explanation": [
      "Glavna ideja: geben pomeni dati nekaj drugi osebi.",
      "nehmen pomeni vzeti, bekommen pa dobiti ali prejeti."
    ],
    "examples": [
      {
        "de": "Gib mir bitte das Buch.",
        "lv": "Daj mi, prosim, knjigo."
      },
      {
        "de": "Ich gebe dir meine Nummer.",
        "lv": "Dam ti svojo številko."
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Vzamem knjigo."
      },
      {
        "de": "Ich bekomme ein Geschenk.",
        "lv": "Dobim darilo."
      }
    ],
    "comparison": [
      {
        "word": "geben",
        "meaning": "dati",
        "example": "Gib mir das Buch. — Daj mi knjigo."
      },
      {
        "word": "nehmen",
        "meaning": "vzeti",
        "example": "Ich nehme das Buch. — Vzamem knjigo."
      },
      {
        "word": "bekommen",
        "meaning": "dobiti • prejeti",
        "example": "Ich bekomme ein Geschenk. — Dobim darilo."
      },
      {
        "word": "bringen",
        "meaning": "prinesti",
        "example": "Ich bringe dir das Buch. — Prinesem ti knjigo."
      }
    ],
    "tip": {
      "text": "Nekaj dati proč → geben; nekaj vzeti zase → nehmen."
    },
    "important": [
      "geben in nehmen izražata nasprotni smer.",
      "bekommen pomeni dobiti, ne dati."
    ],
    "sectionAccents": {
      "examples": [
        {},
        {},
        {},
        {}
      ],
      "comparison": [
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
  "de": "geben",
  "lv": "dati",
  "level": "A1",
  "study": {
    "id": "a1-geben",
    "layout": "standardStudy",
    "translation": "dati",
    "explanation": [
      "Glavna ideja: geben pomeni dati.",
      "geben uporabimo, ko nekdo kaj da drugemu človeku.",
      "To je nasprotna smer nehmena.",
      "bekommen pomeni prejeti, torej biti tisti, ki kaj dobi."
    ],
    "examples": [
      {
        "de": "Gib mir bitte das Buch.",
        "lv": "dajte mi, prosim, knjigo."
      },
      {
        "de": "Ich gebe dir meine Nummer.",
        "lv": "ti imam svojo številko."
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "vzamem knjigo."
      },
      {
        "de": "Ich bekomme ein Geschenk.",
        "lv": "prejamem dar."
      }
    ],
    "comparison": [
      {
        "word": "geben",
        "meaning": "dati",
        "example": "Daj mi knjigo."
      },
      {
        "word": "nehmen",
        "meaning": "vzeti / primiti",
        "example": "Vzamem knjigo."
      },
      {
        "word": "bekommen",
        "meaning": "prejeti / dobiti",
        "example": "Dobim dar."
      },
      {
        "word": "bringen",
        "meaning": "prinesti / dostaviti",
        "example": "Prinesem ti knjigo."
      }
    ],
    "tip": {
      "text": "Atceries: dot prom → geben; paņemt sev → nehmen."
    },
    "important": [
      "geben in nehmen sta nasprotna smeri.",
      "bekommen pomeni prejeti, ne dati."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "geben"
        ],
        "purple": [
          "dot"
        ],
        "red": [
          "nehmen",
          "bekommen"
        ],
        "green": [
          "citam cilvēkam"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Gib"
            ],
            "yellow": [
              "Buch"
            ]
          },
          "lv": {
            "purple": [
              "iedod"
            ],
            "yellow": [
              "grāmatu"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gebe"
            ],
            "yellow": [
              "Nummer"
            ]
          },
          "lv": {
            "purple": [
              "dodu"
            ],
            "yellow": [
              "numuru"
            ]
          }
        },
        {
          "de": {
            "red": [
              "nehme"
            ],
            "yellow": [
              "Buch"
            ]
          },
          "lv": {
            "red": [
              "paņemu"
            ],
            "yellow": [
              "grāmatu"
            ]
          }
        },
        {
          "de": {
            "red": [
              "bekomme"
            ],
            "yellow": [
              "Geschenk"
            ]
          },
          "lv": {
            "red": [
              "saņemu"
            ],
            "yellow": [
              "dāvanu"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "geben"
            ]
          },
          "meaning": {
            "purple": [
              "dot"
            ]
          },
          "example": {
            "blue": [
              "Gib"
            ]
          }
        },
        {
          "word": {
            "green": [
              "nehmen"
            ]
          },
          "meaning": {
            "purple": [
              "ņemt",
              "paņemt"
            ]
          },
          "example": {
            "red": [
              "nehme"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bekommen"
            ]
          },
          "meaning": {
            "purple": [
              "saņemt",
              "dabūt"
            ]
          },
          "example": {
            "yellow": [
              "bekomme"
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
              "atnest",
              "nogādāt"
            ]
          },
          "example": {
            "green": [
              "bringe"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "geben"
          ],
          "purple": [
            "dot prom"
          ],
          "red": [
            "nehmen",
            "paņemt sev"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "geben"
          ],
          "red": [
            "nehmen"
          ],
          "purple": [
            "pretēji virzieni"
          ]
        },
        {
          "yellow": [
            "bekommen"
          ],
          "purple": [
            "saņemt"
          ]
        }
      ]
    }
  }
}
```

---

