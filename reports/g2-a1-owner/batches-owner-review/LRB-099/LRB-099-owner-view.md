# G2/A1 LRB LRB-099 — OWNER VIEW

**Batch:** LRB-099
**Rows:** 50/50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-12T19:33:23.449Z
**Source commit:** `915a967b70cc061aa05cc9248ea1a6b183b36921`
**Branch:** `cursor/lrb-099-owner-review-pc2-3db2`
**Input SHA256:** `6b9959d52110f8c06b2804ae71f1e3ece5f0a0217e5dac92cc503b33cf4c581e`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-099-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB099-0001`
**Finding Stable ID:** `g2/a1/sv|Ferien|idx:694|lv; study.explanation; study.tip; study.important; study.comparison|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `Ferien|idx:694`
**Field / path:** `lv; study.explanation; study.tip; study.important; study.comparison`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** brīvdienas (skola)
**DE reference (read-only):** Ferien
**CURRENT (captured scope):** {"lv":"Vaheaeg (kool)","study.explanation":"[\"Põhiidee: ainult mitmus. Kooli- või õppevaheaeg — alati mitmuses.\",\"Die Ferien tähendab peamiselt: koolivaheaeg.\",\"Sageli kirjeldab: ainult mitmus.\",\"Die Ferien on ainult mitmuses — alati mitmuses (in den Ferien).\"]","study.tip":"[\"endast plural. Skol- eller studielov — alltid i plural.\",\"Använd die Ferien när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"Ferien använder alltid dativ: in den Ferien.\",\"Fel: in der Ferien → Korrekt: in den Ferien\",\"Skola: die Ferien (endast i plural).\",\"endast plural. Skol- eller studielov — alltid i plural.\"]","study.comparison":"[{\"word\":\"die Ferien\",\"meaning\":\"Kooli/ülikooli vaheaeg (ainult mitmuses)\",\"example\":\"In den Ferien fahren wir weg. – Vaheajal sõidame me kuhugi ära.\"},{\"word\":\"der Urlaub\",\"meaning\":\"Puhkus töölt (ainult ains.)\",\"example\":\"Ich habe zwei Wochen Urlaub. – Mul on kaks nädalat puhkust.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Ferien\|idx:694 (Ferien), ceļš 'lv; study.explanation; study.tip; study.important; study.comparison': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, study.comparison, kuru saturs sākas ar '{"lv":"Vaheaeg (kool)","study.explanation":"[\"Põhiidee: ainult mitmus. Kooli- või õppevaheaeg — alati m…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Ferien",
  "de_article": "die",
  "lv": "Vaheaeg (kool)",
  "level": "A1",
  "study": {
    "id": "a1-ferien",
    "layout": "standardStudy",
    "translation": "Vaheaeg (kool)",
    "explanation": [
      "Põhiidee: ainult mitmus. Kooli- või õppevaheaeg — alati mitmuses.",
      "Die Ferien tähendab peamiselt: koolivaheaeg.",
      "Sageli kirjeldab: ainult mitmus.",
      "Die Ferien on ainult mitmuses — alati mitmuses (in den Ferien)."
    ],
    "examples": [
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Vaheajal sõidame me mere äärde."
      },
      {
        "de": "In den Ferien habe ich viel Zeit.",
        "lv": "Vaheajal on mul palju aega."
      },
      {
        "de": "Was macht ihr in den Ferien?",
        "lv": "Mida te vaheajal teete?"
      },
      {
        "de": "Die Schule ist in den Ferien zu.",
        "lv": "Kool on vaheajal suletud."
      },
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Vaheajal sõidame me mere äärde."
      },
      {
        "de": "In den Ferien",
        "lv": "Vaheajal (kool)."
      }
    ],
    "comparison": [
      {
        "word": "die Ferien",
        "meaning": "Kooli/ülikooli vaheaeg (ainult mitmuses)",
        "example": "In den Ferien fahren wir weg. – Vaheajal sõidame me kuhugi ära."
      },
      {
        "word": "der Urlaub",
        "meaning": "Puhkus töölt (ainult ains.)",
        "example": "Ich habe zwei Wochen Urlaub. – Mul on kaks nädalat puhkust."
      }
    ],
    "tip": [
      "endast plural. Skol- eller studielov — alltid i plural.",
      "Använd die Ferien när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "Ferien använder alltid dativ: in den Ferien.",
      "Fel: in der Ferien → Korrekt: in den Ferien",
      "Skola: die Ferien (endast i plural).",
      "endast plural. Skol- eller studielov — alltid i plural."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "die Ferien",
          "ferien"
        ],
        "purple": [
          "vaheaeg",
          "kool"
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
          "lv": {
            "purple": [
              "Vaheajal"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ferien"
            ]
          },
          "lv": {
            "purple": [
              "vaheajal"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ferien"
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
            "blue": [
              "ferien"
            ]
          },
          "lv": {
            "purple": [
              "kool"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ferien"
            ]
          },
          "lv": {
            "purple": [
              "vaheajal"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ferien"
            ]
          },
          "lv": {
            "purple": [
              "vaheajal (kool)"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "tikai"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "Ferien"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 2

**Audit ID:** `LRB099-0002`
**Finding Stable ID:** `g2/a1/sv|fernsehen|idx:687|lv; study.examples[].lv|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `fernsehen|idx:687`
**Field / path:** `lv; study.examples[].lv`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** skatīties televizoru
**DE reference (read-only):** fernsehen
**CURRENT (captured scope):** {"lv":"Telerit vaatama","study.examples[].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts fernsehen\|idx:687 (fernsehen), ceļš 'lv; study.examples[].lv': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Telerit vaatama","study.examples[].lv":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "fernsehen",
  "lv": "Telerit vaatama",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen",
    "layout": "standardStudy",
    "translation": "Telerit vaatama",
    "explanation": "Põhiidee: fernsehen on lahutatav tegusõna — ich sehe fern, du siehst fern. See tähendab telerit vaatama. Ära aja segi nimisõnaga das Fernsehen (televisioon kui meedium).",
    "examples": [
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Täna õhtul vaatan ma telerit."
      },
      {
        "de": "Siehst du oft fern?",
        "lv": "Kas sa vaatad sageli telerit?"
      },
      {
        "de": "Die Kinder sehen am Nachmittag fern.",
        "lv": "Lapsed vaatavad pärastlõunal televiisorit."
      }
    ],
    "comparison": [
      {
        "word": "fernsehen",
        "meaning": "Telerit vaatama",
        "example": "Ich sehe fern. = Jag tittar på TV."
      },
      {
        "word": "das Fernsehen",
        "meaning": "Televisioon (meedium)",
        "example": "Im Fernsehen läuft ein Film. = En film visas på TV."
      },
      {
        "word": "sehen",
        "meaning": "Nägema",
        "example": "Ich sehe einen Film. = Jag ser en film."
      }
    ],
    "tip": {
      "leftBlocks": [
        {
          "text": "Tegevuse kohta kasutatakse fernsehen (ich sehe fern). TV-saate või meediumi kohta kasutatakse das Fernsehen."
        }
      ]
    },
    "important": {
      "text": "Fernsehen = tegusõna (ich sehe fern). das Fernsehen = nimisõna, ainult ainsuses."
    },
    "sectionAccents": {
      "explanation": {
        "blue": [
          "fernsehen",
          "sehe",
          "fern"
        ],
        "purple": [
          "telerit vaatama"
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
              "täna"
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
              "kas"
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
              "lapsed"
            ]
          }
        }
      ]
    }
  }
}
```

---

## Finding 3

**Audit ID:** `LRB099-0003`
**Finding Stable ID:** `g2/a1/sv|Fernsehen|idx:688|lv; study.explanation; study.examples[].lv; study.tip; study.important|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `Fernsehen|idx:688`
**Field / path:** `lv; study.explanation; study.examples[].lv; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** televīzija
**DE reference (read-only):** Fernsehen
**CURRENT (captured scope):** {"lv":"Televisioon","study.explanation":"[\"Põhiidee: Nimisõna, ainult ainsus. Kirjeldab TV-d kui meediumi või saateid tervikuna.\",\"Das Fernsehen tähendab peamiselt: saadet vaatama.\",\"Sageli kirjeldab: tegevust.\",\"Das Fernsehen tähendab peamiselt: televisioon kui meedium.\",\"Sageli kirjeldab: nimisõna (ainult ainsuses).\",\"Fernsehen on tegusõna, mida saab lahutada: ich sehe fern, du siehst fern.\",\"Das Fernsehen on nimisõna ja ainult ainsuses — sellel ei ole mitmuse vormi.\"]","study.examples[].lv":null,"study.tip":"[\"Om det handlar om verbet använder man fernsehen (ich sehe fern). Om det handlar om TV-program eller media använder man das Fernsehen.\",\"Substantiv, endast singular. Beskriver TV som medium eller sändning i allmänhet.\"]","study.important":"[\"fernsehen är separabel: sehen + fern.\",\"das Fernsehen är inte i plural — det finns ingen *die Fernsehen.\",\"Fel: die Fernsehen → Korrekt: das Fernsehen\",\"Verb: fernsehen → ich sehe fern.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Fernsehen\|idx:688 (Fernsehen), ceļš 'lv; study.explanation; study.examples[].lv; study.tip; study.important': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Televisioon","study.explanation":"[\"Põhiidee: Nimisõna, ainult ainsus. Kirjeldab TV-d kui meediu…'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Fernsehen",
  "de_article": "das",
  "lv": "Televisioon",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen-study",
    "layout": "standardStudy",
    "translation": "Televisioon",
    "explanation": [
      "Põhiidee: Nimisõna, ainult ainsus. Kirjeldab TV-d kui meediumi või saateid tervikuna.",
      "Das Fernsehen tähendab peamiselt: saadet vaatama.",
      "Sageli kirjeldab: tegevust.",
      "Das Fernsehen tähendab peamiselt: televisioon kui meedium.",
      "Sageli kirjeldab: nimisõna (ainult ainsuses).",
      "Fernsehen on tegusõna, mida saab lahutada: ich sehe fern, du siehst fern.",
      "Das Fernsehen on nimisõna ja ainult ainsuses — sellel ei ole mitmuse vormi."
    ],
    "examples": [
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Mida täna televisioonis näidatakse?"
      },
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Mida täna televisioonis näidatakse?"
      },
      {
        "de": "Im Fernsehen läuft ein Film.",
        "lv": "Televisioonis näidatakse filmi."
      },
      {
        "de": "Das Fernsehen ist heute langweilig.",
        "lv": "Televisiooniprogramm on täna igav."
      },
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "Täna õhtul vaatan ma telerit."
      },
      {
        "de": "Was gibt es im Fernsehen?",
        "lv": "Mida televisioonis näidatakse?"
      }
    ],
    "tip": [
      "Om det handlar om verbet använder man fernsehen (ich sehe fern). Om det handlar om TV-program eller media använder man das Fernsehen.",
      "Substantiv, endast singular. Beskriver TV som medium eller sändning i allmänhet."
    ],
    "important": [
      "fernsehen är separabel: sehen + fern.",
      "das Fernsehen är inte i plural — det finns ingen *die Fernsehen.",
      "Fel: die Fernsehen → Korrekt: das Fernsehen",
      "Verb: fernsehen → ich sehe fern."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "Fernsehen"
        ],
        "purple": [
          "televisioon",
          "Põhiidee"
        ],
        "yellow": [
          "Põhiidee"
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
              "televisioonis"
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
              "televisioonis"
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
              "televisioonis"
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
              "televisiooniprogramm"
            ]
          }
        },
        {
          "de": {},
          "lv": {
            "purple": [
              "täna"
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
              "televisioonis"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "runā"
          ]
        }
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

## Finding 4

**Audit ID:** `LRB099-0004`
**Finding Stable ID:** `g2/a1/sv|finden|idx:187|study.examples; study.important; study.comparison|MEANING_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `finden|idx:187`
**Field / path:** `study.examples; study.important; study.comparison`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MEANING_MISMATCH
**LV source (read-only):** atrast
**DE reference (read-only):** finden
**CURRENT (captured scope):** {"study.examples":"[{\"de\":\"Ich finde meinen Schlüssel.\",\"lv\":\"Ma ei leia oma võtit.\"},{\"de\":\"Ich finde das gut.\",\"lv\":\"Kas sa leidsid oma telefoni?\"},{\"de\":\"Wie findest du den Film?\",\"lv\":\"Minu meelest on see hea.\"},{\"de\":\"Wie findest du den Film?\",\"lv\":\"Kuidas sulle film tundub?\"}]","study.important":"[\"finden är inte bara \\\"hitta\\\".\",\"Ich finde das gut betyder \\\"jag tycker det är bra\\\", inte \\\"jag hittar det bra\\\".\"]","study.comparison":"[{\"word\":\"finden\",\"meaning\":\"Leidma / arvama\",\"example\":\"Ich finde das gut. = Jag tycker det är bra.\"},{\"word\":\"suchen\",\"meaning\":\"Otsima\",\"example\":\"Ich suche den Schlüssel. = Ma otsin võtit.\"},{\"word\":\"denken\",\"meaning\":\"Mõtlema\",\"example\":\"Ich denke an dich. = Ma mõtlen sinule.\"},{\"word\":\"glauben\",\"meaning\":\"Uskuma / arvama\",\"example\":\"Ich glaube, er kommt. = Ma arvan, et ta tuleb.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts finden\|idx:187 (finden), ceļš 'study.examples; study.important; study.comparison': viena rinda aptver apakšlaukus study.examples, study.important, study.comparison, kuru saturs sākas ar '{"study.examples":"[{\"de\":\"Ich finde meinen Schlüssel.\",\"lv\":\"Ma ei leia oma võtit.\"},{\"de\":\"…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "finden",
  "lv": "Leidma • Arvama",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "Leidma • Arvama",
    "explanation": [
      "Põhiidee: finden tähendab kõige sagedamini leidma.",
      "Vestlustes tähendab finden väga sageli ka arvamist või millegi kohta mõtlemist.",
      "Kui jutt on kaotatud asjast, tõlgi kui leidma.",
      "Kui jutt on arvamusest, tõlgi kui arvama või tunduma."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Ma ei leia oma võtit."
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Kas sa leidsid oma telefoni?"
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Minu meelest on see hea."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Kuidas sulle film tundub?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "Leidma / arvama",
        "example": "Ich finde das gut. = Jag tycker det är bra."
      },
      {
        "word": "suchen",
        "meaning": "Otsima",
        "example": "Ich suche den Schlüssel. = Ma otsin võtit."
      },
      {
        "word": "denken",
        "meaning": "Mõtlema",
        "example": "Ich denke an dich. = Ma mõtlen sinule."
      },
      {
        "word": "glauben",
        "meaning": "Uskuma / arvama",
        "example": "Ich glaube, er kommt. = Ma arvan, et ta tuleb."
      }
    ],
    "tip": {
      "text": "Atceries: pazaudēta lieta → finden; viedoklis → ich finde..."
    },
    "important": [
      "finden är inte bara \"hitta\".",
      "Ich finde das gut betyder \"jag tycker det är bra\", inte \"jag hittar det bra\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "finden"
        ],
        "purple": [
          "leidma",
          "arvama",
          "mõtlemist",
          "tunduma"
        ],
        "green": [
          "kaotatud asjast",
          "arvamusest"
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
              "leia"
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
              "leidsid"
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
              "minu"
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
              "tundub"
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
              "leidma",
              "arvama"
            ]
          },
          "example": {
            "blue": [
              "finde"
            ],
            "purple": [
              "Ich"
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
              "otsima"
            ]
          },
          "example": {
            "yellow": [
              "suche",
              "otsin"
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
              "mõtlema"
            ]
          },
          "example": {
            "green": [
              "denke",
              "Ich"
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
              "uskuma",
              "uskuma"
            ]
          },
          "example": {
            "red": [
              "glaube",
              "arvan"
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
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "finden"
          ],
          "purple": [
            "finden"
          ]
        },
        {
          "blue": [
            "finde"
          ],
          "purple": [
            "Ich"
          ],
          "red": [
            "Ich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 5

**Audit ID:** `LRB099-0005`
**Finding Stable ID:** `g2/a1/sv|Frau|idx:198|lv; study.explanation; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `Frau|idx:198`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** sieviete
**DE reference (read-only):** Frau
**CURRENT (captured scope):** {"lv":"Naine • Abikaasa","study.explanation":"[\"Põhiidee: die Frau võib tähendada naist (sugu) või abikaasat (abielupool).\",\"Kui jutt on lihtsalt soost või isikust, die Frau = naine.\",\"Kui jutt on abikaasast, die Frau = naine (meine Frau = minu naine).\",\"Omastav asesõna (meine/deine/seine Frau) tähendab peaaegu alati naist — abikaasat.\",\"Mitmuses: die Frauen.\",\"Meessoovormil der Mann on samasugune kahetine tähendus: mees JA abikaasa.\"]","study.tip":"[\"Med possesiv pronomen (meine/deine/seine Frau) menar man nästan alltid fru (makan).\",\"Utan possesiv pronomen (die Frau, eine Frau) menar man vanligtvis kvinna.\"]","study.important":"[\"die Frau = kvinna ELLER fru — beroende på sammanhang.\",\"meine Frau = min fru (inte \\\"min kvinna\\\").\",\"Mitmuses: die Frauen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Frau\|idx:198 (Frau), ceļš 'lv; study.explanation; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Naine • Abikaasa","study.explanation":"[\"Põhiidee: die Frau võib tähendada naist (sugu) või abik…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "Naine • Abikaasa",
  "level": "A1",
  "study": {
    "id": "a1-frau",
    "layout": "standardStudy",
    "translation": "Naine • Abikaasa",
    "explanation": [
      "Põhiidee: die Frau võib tähendada naist (sugu) või abikaasat (abielupool).",
      "Kui jutt on lihtsalt soost või isikust, die Frau = naine.",
      "Kui jutt on abikaasast, die Frau = naine (meine Frau = minu naine).",
      "Omastav asesõna (meine/deine/seine Frau) tähendab peaaegu alati naist — abikaasat.",
      "Mitmuses: die Frauen.",
      "Meessoovormil der Mann on samasugune kahetine tähendus: mees JA abikaasa."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "Ta on tore naine."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "See on minu naine."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Kui palju naisi on siin?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Minu naine töötab Berliinis."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Naine kannab kleiti."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Tema naine on arst."
      }
    ],
    "tip": [
      "Med possesiv pronomen (meine/deine/seine Frau) menar man nästan alltid fru (makan).",
      "Utan possesiv pronomen (die Frau, eine Frau) menar man vanligtvis kvinna."
    ],
    "important": [
      "die Frau = kvinna ELLER fru — beroende på sammanhang.",
      "meine Frau = min fru (inte \"min kvinna\").",
      "Mitmuses: die Frauen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "die Frau",
          "Frau"
        ],
        "purple": [
          "naine",
          "naine"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Frau"
            ]
          },
          "lv": {
            "purple": [
              "naine"
            ]
          }
        },
        {
          "de": {
            "green": [
              "meine Frau"
            ]
          },
          "lv": {
            "purple": [
              "naine"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Frauen"
            ]
          },
          "lv": {
            "purple": [
              "naisi"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Meine Frau"
            ]
          },
          "lv": {
            "purple": [
              "naine"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Frau"
            ]
          },
          "lv": {
            "purple": [
              "naine"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Seine Frau"
            ]
          },
          "lv": {
            "purple": [
              "naine"
            ]
          }
        }
      ],
      "tip": [
        {
          "green": [
            "meine",
            "deine",
            "seine Frau"
          ],
          "purple": [
            "piederības"
          ]
        },
        {
          "blue": [
            "die Frau",
            "eine Frau"
          ],
          "purple": [
            "piederības"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "die",
            "die"
          ]
        },
        {
          "green": [
            "meine Frau"
          ]
        },
        {
          "blue": [
            "die Frauen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 6

**Audit ID:** `LRB099-0006`
**Finding Stable ID:** `g2/a1/sv|für|idx:216|lv; study.translation; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `für|idx:216`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** priekš
**DE reference (read-only):** für
**CURRENT (captured scope):** {"lv":"Jaoks • Eest","study.translation":"Jaoks • Eest","study.explanation":"[\"Põhiidee: für on eessõna, mis nõuab alati Akkusativit — eesti keeles tavaliselt jaoks või eest.\",\"Saajast või eesmärgist rääkides für = jaoks (für dich = sinu jaoks).\",\"Vahetusest, tasust või põhjusest rääkides für = eest (danke für das Geschenk = aitäh kingi eest).\",\"Für nõuab alati Akkusativi, olenemata tähendusest.\"]","study.examples":"[{\"de\":\"Das ist für dich.\",\"lv\":\"See on sinu jaoks.\"},{\"de\":\"Danke für die Hilfe.\",\"lv\":\"Aitäh abi eest.\"},{\"de\":\"Ich kaufe ein Geschenk für meine Mutter.\",\"lv\":\"Ma ostan kingi oma emale.\"},{\"de\":\"Was bezahlst du für das Auto?\",\"lv\":\"Kui palju sa auto eest maksad?\"},{\"de\":\"Das Buch ist für Kinder.\",\"lv\":\"Raamat on lastele.\"},{\"de\":\"Für heute ist das genug.\",\"lv\":\"Tänaseks on sellest küll.\"}]","study.tip":"[\"für använder alltid ackusativ oberoende av betydelse.\",\"Mottagare/syfte → för; utbyte/anledning/betalning → för.\"]","study.important":"[\"för + ackusativ alltid, till exempel för mich, für dich, für das Kind.\",\"danke für / bezahlen für = \\\"för\\\", inte \\\"för\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts für\|idx:216 (für), ceļš 'lv; study.translation; study.explanation; study.examples; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Jaoks • Eest","study.translation":"Jaoks • Eest","study.explanation":"[\"Põhiidee: für on eessõna…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "für",
  "lv": "Jaoks • Eest",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "Jaoks • Eest",
    "explanation": [
      "Põhiidee: für on eessõna, mis nõuab alati Akkusativit — eesti keeles tavaliselt jaoks või eest.",
      "Saajast või eesmärgist rääkides für = jaoks (für dich = sinu jaoks).",
      "Vahetusest, tasust või põhjusest rääkides für = eest (danke für das Geschenk = aitäh kingi eest).",
      "Für nõuab alati Akkusativi, olenemata tähendusest."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "See on sinu jaoks."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Aitäh abi eest."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Ma ostan kingi oma emale."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Kui palju sa auto eest maksad?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Raamat on lastele."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Tänaseks on sellest küll."
      }
    ],
    "tip": [
      "für använder alltid ackusativ oberoende av betydelse.",
      "Mottagare/syfte → för; utbyte/anledning/betalning → för."
    ],
    "important": [
      "för + ackusativ alltid, till exempel för mich, für dich, für das Kind.",
      "danke für / bezahlen für = \"för\", inte \"för\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "für"
        ],
        "purple": [
          "jaoks",
          "eest"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "für"
            ]
          },
          "lv": {
            "purple": [
              "jaoks"
            ]
          }
        },
        {
          "de": {
            "green": [
              "für"
            ]
          },
          "lv": {
            "purple": [
              "eest"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "für"
            ]
          },
          "lv": {
            "purple": [
              "oma"
            ]
          }
        },
        {
          "de": {
            "green": [
              "für"
            ]
          },
          "lv": {
            "purple": [
              "eest"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "für"
            ]
          },
          "lv": {
            "purple": [
              "raamat"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Für"
            ]
          },
          "lv": {
            "purple": [
              "tänaseks"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "für"
          ]
        },
        {
          "purple": [
            "für",
            "für"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "für",
            "Akkusativ"
          ]
        },
        {
          "green": [
            "danke für",
            "bezahlen für"
          ],
          "purple": [
            "danke"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 7

**Audit ID:** `LRB099-0007`
**Finding Stable ID:** `g2/a1/sv|ganz|idx:219|lv; study.comparison[1].meaning|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `ganz|idx:219`
**Field / path:** `lv; study.comparison[1].meaning`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** vesels
**DE reference (read-only):** ganz
**CURRENT (captured scope):** {"lv":"Terve","study.comparison[1].meaning":"Kõik"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts ganz\|idx:219 (ganz), ceļš 'lv; study.comparison[1].meaning': viena rinda aptver apakšlaukus lv, study.comparison[1].meaning, kuru saturs sākas ar '{"lv":"Terve","study.comparison[1].meaning":"Kõik"}'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ganz",
  "lv": "Terve",
  "level": "A1",
  "study": {
    "id": "a1-ganz-study",
    "layout": "standardStudy",
    "translation": "Terve",
    "explanation": [
      "Huvudidén: ganz tillsammans med ett substantiv betyder helt eller allt tillsammans.",
      "Före ett adjektiv eller adverb kan ganz betyda helt, helt och hållet eller ganska.",
      "ganz är inte detsamma som pronomen alles."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "es strādāju visu dienu."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "visa māja ir tīra."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "tas ir pilnīgi droši."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "ēdiens ir diezgan labs."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "helt • allt tillsammans • helt och hållet",
        "example": "der ganze Tag – hela dagen"
      },
      {
        "word": "alles",
        "meaning": "Kõik",
        "example": "Alles ist gut. – Allt är bra."
      }
    ],
    "tip": [
      "Före ett substantiv betyder ganz ofta allt eller helt.",
      "Före ett adjektiv betyder ganz ofta helt eller ganska."
    ],
    "important": [
      "der ganze Tag = hela dagen.",
      "alles = allt som pronomen."
    ]
  }
}
```

---

## Finding 8

**Audit ID:** `LRB099-0008`
**Finding Stable ID:** `g2/a1/sv|geben|idx:223|lv; study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `geben|idx:223`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** dot
**DE reference (read-only):** geben
**CURRENT (captured scope):** {"lv":"Andma","study.translation":"Andma","study.explanation":"[\"Põhiidee: geben tähendab andmist.\",\"Geben kasutatakse, kui keegi annab midagi teisele inimesele.\",\"See on vastupidine suund sõnale nehmen.\",\"Bekommen tähendab saama, seega olla see, kes midagi kätte saab.\"]","study.examples":"[{\"de\":\"Gib mir bitte das Buch.\",\"lv\":\"Anna mulle palun raamat.\"},{\"de\":\"Ich gebe dir meine Nummer.\",\"lv\":\"Ma annan sulle oma numbri.\"},{\"de\":\"Ich nehme das Buch.\",\"lv\":\"Ma võtan raamatu.\"},{\"de\":\"Ich bekomme ein Geschenk.\",\"lv\":\"Ma saan kingi.\"}]","study.comparison":"[{\"word\":\"geben\",\"meaning\":\"Andma\",\"example\":\"Ge mig boken.\"},{\"word\":\"nehmen\",\"meaning\":\"Võtma / kätte võtma\",\"example\":\"Jag tar boken.\"},{\"word\":\"bekommen\",\"meaning\":\"Saama / kätte saama\",\"example\":\"Jag får en gåva.\"},{\"word\":\"bringen\",\"meaning\":\"Tooma / kohale toimetama\",\"example\":\"Jag ger dig boken.\"}]","study.tip":"{\"text\":\"Atceries: dot prom → geben; paņemt sev → nehmen.\"}","study.important":"[\"geben och nehmen är motsatta riktningar.\",\"bekommen betyder att få, inte att ge.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts geben\|idx:223 (geben), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Andma","study.translation":"Andma","study.explanation":"[\"Põhiidee: geben tähendab andmist.\",\"…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "geben",
  "lv": "Andma",
  "level": "A1",
  "study": {
    "id": "a1-geben",
    "layout": "standardStudy",
    "translation": "Andma",
    "explanation": [
      "Põhiidee: geben tähendab andmist.",
      "Geben kasutatakse, kui keegi annab midagi teisele inimesele.",
      "See on vastupidine suund sõnale nehmen.",
      "Bekommen tähendab saama, seega olla see, kes midagi kätte saab."
    ],
    "examples": [
      {
        "de": "Gib mir bitte das Buch.",
        "lv": "Anna mulle palun raamat."
      },
      {
        "de": "Ich gebe dir meine Nummer.",
        "lv": "Ma annan sulle oma numbri."
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Ma võtan raamatu."
      },
      {
        "de": "Ich bekomme ein Geschenk.",
        "lv": "Ma saan kingi."
      }
    ],
    "comparison": [
      {
        "word": "geben",
        "meaning": "Andma",
        "example": "Ge mig boken."
      },
      {
        "word": "nehmen",
        "meaning": "Võtma / kätte võtma",
        "example": "Jag tar boken."
      },
      {
        "word": "bekommen",
        "meaning": "Saama / kätte saama",
        "example": "Jag får en gåva."
      },
      {
        "word": "bringen",
        "meaning": "Tooma / kohale toimetama",
        "example": "Jag ger dig boken."
      }
    ],
    "tip": {
      "text": "Atceries: dot prom → geben; paņemt sev → nehmen."
    },
    "important": [
      "geben och nehmen är motsatta riktningar.",
      "bekommen betyder att få, inte att ge."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "geben"
        ],
        "purple": [
          "andmist"
        ],
        "red": [
          "nehmen",
          "bekommen"
        ],
        "green": [
          "teisele inimesele"
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
              "anna"
            ],
            "yellow": [
              "raamat"
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
              "annan"
            ],
            "yellow": [
              "numbri"
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
              "võtan"
            ],
            "yellow": [
              "raamatu"
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
              "saan"
            ],
            "yellow": [
              "kingi"
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
              "andma"
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
              "võtma",
              "võtma"
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
              "saama",
              "saama"
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
              "tooma",
              "kohale toimetama"
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
            "Atceries"
          ],
          "red": [
            "nehmen",
            "Atceries"
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
            "geben"
          ]
        },
        {
          "yellow": [
            "bekommen"
          ],
          "purple": [
            "bekommen"
          ],
          "blue": [
            "bekommen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 9

**Audit ID:** `LRB099-0009`
**Finding Stable ID:** `g2/a1/sv|gefallen|idx:225|lv; study.explanation|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `gefallen|idx:225`
**Field / path:** `lv; study.explanation`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** patikt
**DE reference (read-only):** gefallen
**CURRENT (captured scope):** {"lv":"Meeldima","study.explanation":"[\"Huvudidén: gefallen betyder gilla, men den tyska meningsstrukturen skiljer sig från svenska.\",\"Det som gillar är på tyska meningens objekt.\",\"Personen som något gillar för är i dativ: mir, dir, ihm, ihr, uns, euch, ihnen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts gefallen\|idx:225 (gefallen), ceļš 'lv; study.explanation': viena rinda aptver apakšlaukus lv, study.explanation, kuru saturs sākas ar '{"lv":"Meeldima","study.explanation":"[\"Huvudidén: gefallen betyder gilla, men den tyska meningsstruktu…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gefallen",
  "lv": "Meeldima",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "Meeldima",
    "explanation": [
      "Huvudidén: gefallen betyder gilla, men den tyska meningsstrukturen skiljer sig från svenska.",
      "Det som gillar är på tyska meningens objekt.",
      "Personen som något gillar för är i dativ: mir, dir, ihm, ihr, uns, euch, ihnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "man tas patīk."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "vai tev patīk kleita?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "mums patīk filma."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "gilla • person i dativ",
        "example": "Das gefällt mir. – Jag gillar det."
      },
      {
        "word": "mögen",
        "meaning": "gilla • helst vilja välja",
        "example": "Ich mag das. – Jag gillar det."
      }
    ],
    "tip": [
      "Kom ihåg konstruktionen: Das gefällt mir.",
      "Använd inte en bokstavlig svensk ordföljd."
    ],
    "important": [
      "gefallen används med dativ: mir, dir, ihm, ihr.",
      "Das gefällt mir = jag gillar det."
    ]
  }
}
```

---

## Finding 10

**Audit ID:** `LRB099-0010`
**Finding Stable ID:** `g2/a1/sv|Gemüse|idx:692|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `Gemüse|idx:692`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** dārzeņi
**DE reference (read-only):** Gemüse
**CURRENT (captured scope):** {"lv":"Köögiviljad","study.explanation":"[\"Põhiidee: Köögiviljad üldiselt. Saksa keeles ei ole mitmuse vormi *die Gemüse.\",\"Das Gemüse tähendab peamiselt: köögiviljad üldiselt.\",\"Sageli kirjeldab: kesksoos (ainult ainsuses).\"]","study.tip":"[\"das Gemüse = grönsaker\",\"Använd das Gemüse när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"Det är inte korrekt: die Gemüse, die Obsts.\",\"Fel: die Gemüse → Korrekt: das Gemüse\",\"das Gemüse = grönsaker (tillsammans).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Gemüse\|idx:692 (Gemüse), ceļš 'lv; study.explanation; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Köögiviljad","study.explanation":"[\"Põhiidee: Köögiviljad üldiselt. Saksa keeles ei ole mitmuse …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Gemüse",
  "de_article": "das",
  "lv": "Köögiviljad",
  "level": "A1",
  "study": {
    "id": "a1-gemuese",
    "layout": "standardStudy",
    "translation": "Köögiviljad",
    "explanation": [
      "Põhiidee: Köögiviljad üldiselt. Saksa keeles ei ole mitmuse vormi *die Gemüse.",
      "Das Gemüse tähendab peamiselt: köögiviljad üldiselt.",
      "Sageli kirjeldab: kesksoos (ainult ainsuses)."
    ],
    "examples": [
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Ma söön meelsasti köögivilju."
      },
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Ma söön meelsasti köögivilju."
      },
      {
        "de": "Das Gemüse ist frisch.",
        "lv": "Köögiviljad on värsked."
      },
      {
        "de": "Wir kaufen Gemüse auf dem Markt.",
        "lv": "Me ostame turult köögivilju."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Mulle meeldivad puuviljad ja köögiviljad."
      },
      {
        "de": "Ich esse Gemüse.",
        "lv": "Ma söön köögivilju."
      }
    ],
    "tip": [
      "das Gemüse = grönsaker",
      "Använd das Gemüse när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "Det är inte korrekt: die Gemüse, die Obsts.",
      "Fel: die Gemüse → Korrekt: das Gemüse",
      "das Gemüse = grönsaker (tillsammans)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Gemüse",
          "gemüse"
        ],
        "purple": [
          "köögiviljad"
        ],
        "green": [
          "Gemüse"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {
            "purple": [
              "köögivilju"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {
            "purple": [
              "köögivilju"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "das Gemüse",
              "gemüse"
            ]
          },
          "lv": {
            "purple": [
              "köögiviljad"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {
            "purple": [
              "köögivilju"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {
            "purple": [
              "köögiviljad"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {
            "purple": [
              "köögivilju"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "das"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "Nav"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 11

**Audit ID:** `LRB099-0011`
**Finding Stable ID:** `g2/a1/sv|Geschwister|idx:234|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `Geschwister|idx:234`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** brāļi un māsas
**DE reference (read-only):** Geschwister
**CURRENT (captured scope):** {"lv":"syskon","study.translation":"syskon","study.explanation":"[\"Huvudidén: Geschwister betyder syskon tillsammans.\",\"Detta ord används vanligtvis endast i plural.\",\"För en person använder man Bruder eller Schwester.\"]","study.examples":"[{\"de\":\"Ich habe zwei Geschwister.\",\"lv\":\"man ir divi brāļi vai māsas.\"},{\"de\":\"Meine Geschwister wohnen in Berlin.\",\"lv\":\"mani brāļi un māsas dzīvo Berlīnē.\"}]","study.comparison":"[{\"word\":\"Geschwister\",\"meaning\":\"syskon\",\"example\":\"Meine Geschwister – mina syskon\"},{\"word\":\"Bruder\",\"meaning\":\"Vend\",\"example\":\"mein Bruder – min bror\"},{\"word\":\"Schwester\",\"meaning\":\"Õde\",\"example\":\"meine Schwester – min syster\"}]","study.tip":"[\"Geschwister används vanligtvis i plural.\",\"För en person väljer du Bruder eller Schwester.\"]","study.important":"[\"Använd inte ein Geschwister som en vanlig A1 singularform.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Geschwister\|idx:234 (Geschwister), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"syskon","study.translation":"syskon","study.explanation":"[\"Huvudidén: Geschwister betyder sysko…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Geschwister",
  "de_article": "die",
  "lv": "syskon",
  "level": "A1",
  "study": {
    "id": "a1-geschwister-study",
    "layout": "standardStudy",
    "translation": "syskon",
    "explanation": [
      "Huvudidén: Geschwister betyder syskon tillsammans.",
      "Detta ord används vanligtvis endast i plural.",
      "För en person använder man Bruder eller Schwester."
    ],
    "examples": [
      {
        "de": "Ich habe zwei Geschwister.",
        "lv": "man ir divi brāļi vai māsas."
      },
      {
        "de": "Meine Geschwister wohnen in Berlin.",
        "lv": "mani brāļi un māsas dzīvo Berlīnē."
      }
    ],
    "comparison": [
      {
        "word": "Geschwister",
        "meaning": "syskon",
        "example": "Meine Geschwister – mina syskon"
      },
      {
        "word": "Bruder",
        "meaning": "Vend",
        "example": "mein Bruder – min bror"
      },
      {
        "word": "Schwester",
        "meaning": "Õde",
        "example": "meine Schwester – min syster"
      }
    ],
    "tip": [
      "Geschwister används vanligtvis i plural.",
      "För en person väljer du Bruder eller Schwester."
    ],
    "important": [
      "Använd inte ein Geschwister som en vanlig A1 singularform."
    ]
  }
}
```

---

## Finding 12

**Audit ID:** `LRB099-0012`
**Finding Stable ID:** `g2/a1/sv|gleich|idx:243|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `gleich|idx:243`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** tūlīt
**DE reference (read-only):** gleich
**CURRENT (captured scope):** {"lv":"Kohe • Ühesugune","study.translation":"Kohe • Ühesugune","study.explanation":"[\"Põhiidee: gleich tähendab aja mõttes kohe, võrdluses tähendab ühesugune.\",\"Kui jutt on ajast, gleich = kohe/varsti (Ich komme gleich. = Ma tulen kohe.).\",\"Kui jutt on võrdlusest, gleich = ühesugune/sama (die gleiche Farbe = ühesugune värv).\",\"Sõna gleich võib kasutada ka eessõnana koos Dativiga, see tähendab nagu (gleich mir = nagu mina).\"]","study.examples":"[{\"de\":\"Ich komme gleich.\",\"lv\":\"Ma tulen kohe.\"},{\"de\":\"Wir haben die gleiche Farbe.\",\"lv\":\"Meil on ühesugune värv.\"},{\"de\":\"Das Essen ist gleich fertig.\",\"lv\":\"Toit saab kohe valmis.\"},{\"de\":\"Beide Wege sind gleich lang.\",\"lv\":\"Mõlemad teed on ühepikkused.\"},{\"de\":\"Bis gleich!\",\"lv\":\"Näeme kohe!\"},{\"de\":\"Sie sind gleich groß.\",\"lv\":\"Nad on ühepikkused.\"}]","study.tip":"[\"För tid (strax) → omedelbar.\",\"För jämförelse (samma) → identisk.\"]","study.important":"[\"gleich = omedelbar (tid) ELLER identisk (jämförelse) — beroende på sammanhang.\",\"Bis gleich! = līdz tūlīt! — ierasta atvadu frāze.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts gleich\|idx:243 (gleich), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Kohe • Ühesugune","study.translation":"Kohe • Ühesugune","study.explanation":"[\"Põhiidee: gleich…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gleich",
  "lv": "Kohe • Ühesugune",
  "level": "A1",
  "study": {
    "id": "a1-gleich",
    "layout": "standardStudy",
    "translation": "Kohe • Ühesugune",
    "explanation": [
      "Põhiidee: gleich tähendab aja mõttes kohe, võrdluses tähendab ühesugune.",
      "Kui jutt on ajast, gleich = kohe/varsti (Ich komme gleich. = Ma tulen kohe.).",
      "Kui jutt on võrdlusest, gleich = ühesugune/sama (die gleiche Farbe = ühesugune värv).",
      "Sõna gleich võib kasutada ka eessõnana koos Dativiga, see tähendab nagu (gleich mir = nagu mina)."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "Ma tulen kohe."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "Meil on ühesugune värv."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "Toit saab kohe valmis."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Mõlemad teed on ühepikkused."
      },
      {
        "de": "Bis gleich!",
        "lv": "Näeme kohe!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "Nad on ühepikkused."
      }
    ],
    "tip": [
      "För tid (strax) → omedelbar.",
      "För jämförelse (samma) → identisk."
    ],
    "important": [
      "gleich = omedelbar (tid) ELLER identisk (jämförelse) — beroende på sammanhang.",
      "Bis gleich! = līdz tūlīt! — ierasta atvadu frāze."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "gleich"
        ],
        "purple": [
          "kohe",
          "ühesugune"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "gleich"
            ]
          },
          "lv": {
            "purple": [
              "kohe"
            ]
          }
        },
        {
          "de": {
            "green": [
              "gleiche"
            ]
          },
          "lv": {
            "purple": [
              "ühesugune"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gleich"
            ]
          },
          "lv": {
            "purple": [
              "kohe"
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
              "mõlemad"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gleich"
            ]
          },
          "lv": {
            "purple": [
              "kohe"
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
              "nad"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "Par"
          ]
        },
        {
          "green": [
            "Par"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "gleich",
            "gleich"
          ]
        },
        {
          "blue": [
            "Bis gleich!"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 13

**Audit ID:** `LRB099-0013`
**Finding Stable ID:** `g2/a1/sv|groß|idx:250|lv, study.examples|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `groß|idx:250`
**Field / path:** `lv, study.examples`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** liels
**DE reference (read-only):** groß
**CURRENT (captured scope):** {"lv":"Suur","study.examples":"[{\"de\":\"Das Haus ist groß.\",\"lv\":\"Maja on suur.\"},{\"de\":\"Berlin ist eine große Stadt.\",\"lv\":\"Maja on suur.\"},{\"de\":\"Er ist groß.\",\"lv\":\"Ta on pikka kasvu.\"},{\"de\":\"Das Zimmer ist groß.\",\"lv\":\"Tuba on suur.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts groß\|idx:250 (groß), ceļš 'lv, study.examples': viena rinda aptver apakšlaukus lv, study.examples, kuru saturs sākas ar '{"lv":"Suur","study.examples":"[{\"de\":\"Das Haus ist groß.\",\"lv\":\"Maja on suur.\"},{\"de\":\"Berli…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "groß",
  "lv": "Suur",
  "level": "A1",
  "study": {
    "id": "a1-gross-study",
    "layout": "standardStudy",
    "translation": "Suur",
    "explanation": [
      "Põhiidee: Suur mõõtmete poolest või inimese puhul - pikk kasvult.",
      "Groß tähendab peamiselt: suur mõõt.",
      "Sageli kirjeldab: üldist suurust."
    ],
    "examples": [
      {
        "de": "Das Haus ist groß.",
        "lv": "Maja on suur."
      },
      {
        "de": "Berlin ist eine große Stadt.",
        "lv": "Maja on suur."
      },
      {
        "de": "Er ist groß.",
        "lv": "Ta on pikka kasvu."
      },
      {
        "de": "Das Zimmer ist groß.",
        "lv": "Tuba on suur."
      }
    ],
    "tip": [
      "groß = liels",
      "Izmanto groß, kad konteksts atbilst šai nozīmei."
    ],
    "important": [
      "Cilvēkam Er ist groß nozīmē garš augumā.",
      "groß = liels."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "groß"
        ],
        "purple": [
          "suur"
        ],
        "green": [
          "Suur"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "groß"
            ]
          },
          "lv": {
            "purple": [
              "suur"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "große"
            ]
          },
          "lv": {
            "purple": [
              "suur"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "groß"
            ]
          },
          "lv": {
            "purple": [
              "pikka"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "groß"
            ]
          },
          "lv": {
            "purple": [
              "suur"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "groß"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "groß"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 14

**Audit ID:** `LRB099-0014`
**Finding Stable ID:** `g2/a1/sv|Großeltern|idx:251|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `Großeltern|idx:251`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** vecvecāki
**DE reference (read-only):** Großeltern
**CURRENT (captured scope):** {"lv":"farföräldrar","study.translation":"farföräldrar","study.explanation":"[\"Huvudidén: Großeltern betyder farföräldrar tillsammans.\",\"Detta ord används i plural.\",\"I singular används Großmutter eller Großvater.\"]","study.examples":"[{\"de\":\"Meine Großeltern wohnen auf dem Land.\",\"lv\":\"mani vecvecāki dzīvo laukos.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"es apciemoju savus vecvecākus.\"}]","study.comparison":"[{\"word\":\"Großeltern\",\"meaning\":\"farföräldrar\",\"example\":\"meine Großeltern – mina farföräldrar\"},{\"word\":\"Großmutter\",\"meaning\":\"Vanaema\",\"example\":\"meine Großmutter – min farmor\"},{\"word\":\"Großvater\",\"meaning\":\"Vanaisa\",\"example\":\"mein Großvater – min farfar\"}]","study.tip":"[\"Großeltern är plural.\",\"För en person använder du Großmutter eller Großvater.\"]","study.important":"[\"die Großeltern = farföräldrar.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Großeltern\|idx:251 (Großeltern), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"farföräldrar","study.translation":"farföräldrar","study.explanation":"[\"Huvudidén: Großeltern be…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Großeltern",
  "de_article": "die",
  "lv": "farföräldrar",
  "level": "A1",
  "study": {
    "id": "a1-grosseltern-study",
    "layout": "standardStudy",
    "translation": "farföräldrar",
    "explanation": [
      "Huvudidén: Großeltern betyder farföräldrar tillsammans.",
      "Detta ord används i plural.",
      "I singular används Großmutter eller Großvater."
    ],
    "examples": [
      {
        "de": "Meine Großeltern wohnen auf dem Land.",
        "lv": "mani vecvecāki dzīvo laukos."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "es apciemoju savus vecvecākus."
      }
    ],
    "comparison": [
      {
        "word": "Großeltern",
        "meaning": "farföräldrar",
        "example": "meine Großeltern – mina farföräldrar"
      },
      {
        "word": "Großmutter",
        "meaning": "Vanaema",
        "example": "meine Großmutter – min farmor"
      },
      {
        "word": "Großvater",
        "meaning": "Vanaisa",
        "example": "mein Großvater – min farfar"
      }
    ],
    "tip": [
      "Großeltern är plural.",
      "För en person använder du Großmutter eller Großvater."
    ],
    "important": [
      "die Großeltern = farföräldrar."
    ]
  }
}
```

---

## Finding 15

**Audit ID:** `LRB099-0015`
**Finding Stable ID:** `g2/a1/sv|gut|idx:259|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `gut|idx:259`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** labs
**DE reference (read-only):** gut
**CURRENT (captured scope):** {"lv":"Hea","study.translation":"Hea","study.explanation":"[\"Põhiidee: gut on omadus-/määrsõna — hea, hästi, korras.\",\"Gut kirjeldab kvaliteeti, tervist või seda, kuidas midagi läheb (Es geht mir gut. = Mul läheb hästi.).\",\"Viisakusfraasis guten Tag/Abend/Morgen muudab gut lõppu käände järgi.\",\"Kui gut kirjeldab tegusõna, on see määrsõna (gut schwimmen = hästi ujuma).\",\"Ära aja segi sõnaga das Gut — see on suure algustähega ja artikliga nimisõna (vara, mõis).\"]","study.examples":"[{\"de\":\"Das Essen ist gut.\",\"lv\":\"Toit on hea.\"},{\"de\":\"Wie geht es dir? – Gut, danke!\",\"lv\":\"Kuidas sul läheb? – hästi, aitäh!\"},{\"de\":\"Er spricht gut Deutsch.\",\"lv\":\"Ta räägib hästi saksa keelt.\"},{\"de\":\"Guten Morgen!\",\"lv\":\"Tere hommikust!\"},{\"de\":\"Das ist eine gute Idee.\",\"lv\":\"See on hea idee.\"},{\"de\":\"Alles ist gut.\",\"lv\":\"Kõik on korras.\"}]","study.tip":"[\"gut utan artikel är adjektiv/adverb — bra/väl.\",\"das Gut med stor bokstav och artikel är ett helt annat ord — substantiv (egendom, gård).\"]","study.important":"[\"gut = bra/väl (adjektiv/adverb).\",\"das Gut = egendom/gård (substantiv) — förväxla inte med gut.\",\"Guten Tag/Morgen/Abend — gut maina galotni pēc locījuma.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts gut\|idx:259 (gut), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Hea","study.translation":"Hea","study.explanation":"[\"Põhiidee: gut on omadus-/määrsõna — hea, h…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gut",
  "lv": "Hea",
  "level": "A1",
  "study": {
    "id": "a1-gut-study",
    "layout": "standardStudy",
    "translation": "Hea",
    "explanation": [
      "Põhiidee: gut on omadus-/määrsõna — hea, hästi, korras.",
      "Gut kirjeldab kvaliteeti, tervist või seda, kuidas midagi läheb (Es geht mir gut. = Mul läheb hästi.).",
      "Viisakusfraasis guten Tag/Abend/Morgen muudab gut lõppu käände järgi.",
      "Kui gut kirjeldab tegusõna, on see määrsõna (gut schwimmen = hästi ujuma).",
      "Ära aja segi sõnaga das Gut — see on suure algustähega ja artikliga nimisõna (vara, mõis)."
    ],
    "examples": [
      {
        "de": "Das Essen ist gut.",
        "lv": "Toit on hea."
      },
      {
        "de": "Wie geht es dir? – Gut, danke!",
        "lv": "Kuidas sul läheb? – hästi, aitäh!"
      },
      {
        "de": "Er spricht gut Deutsch.",
        "lv": "Ta räägib hästi saksa keelt."
      },
      {
        "de": "Guten Morgen!",
        "lv": "Tere hommikust!"
      },
      {
        "de": "Das ist eine gute Idee.",
        "lv": "See on hea idee."
      },
      {
        "de": "Alles ist gut.",
        "lv": "Kõik on korras."
      }
    ],
    "tip": [
      "gut utan artikel är adjektiv/adverb — bra/väl.",
      "das Gut med stor bokstav och artikel är ett helt annat ord — substantiv (egendom, gård)."
    ],
    "important": [
      "gut = bra/väl (adjektiv/adverb).",
      "das Gut = egendom/gård (substantiv) — förväxla inte med gut.",
      "Guten Tag/Morgen/Abend — gut maina galotni pēc locījuma."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "gut"
        ],
        "purple": [
          "hea",
          "hästi"
        ],
        "green": [
          "das Gut"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "gut"
            ]
          },
          "lv": {
            "purple": [
              "hea"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Gut"
            ]
          },
          "lv": {
            "purple": [
              "hästi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gut"
            ]
          },
          "lv": {
            "purple": [
              "hästi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Guten"
            ]
          },
          "lv": {
            "purple": [
              "tere hommikust"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gute"
            ]
          },
          "lv": {
            "purple": [
              "hea"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "gut"
            ]
          },
          "lv": {
            "purple": [
              "korras"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "gut"
          ]
        },
        {
          "green": [
            "das Gut"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "gut"
          ]
        },
        {
          "green": [
            "das Gut"
          ]
        },
        {
          "blue": [
            "Guten Tag",
            "Morgen",
            "Abend"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 16

**Audit ID:** `LRB099-0016`
**Finding Stable ID:** `g2/a1/sv|haben|idx:261|lv; study.explanation; study.comparison; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `haben|idx:261`
**Field / path:** `lv; study.explanation; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** man ir
**DE reference (read-only):** haben
**CURRENT (captured scope):** {"lv":"Mul on","study.explanation":"[\"Põhiidee: haben tähendab, et kellelegi kuulub midagi või et miski on kättesaadav.\",\"Eesti väljendile „mul on / sul on” vastab saksa keeles Nominativ + haben: Ich habe ..., Du hast ..., Er hat ... — mitte *mir habe.\",\"Sõna haben järel tuleb Akkusativ: Ich habe ein Auto. = Mul on auto.\",\"Haben kasutatakse ka abitegusõnana Perfektis: Ich habe gelernt.\"]","study.comparison":"[{\"word\":\"haben\",\"meaning\":\"Mul on\",\"example\":\"Ich habe Zeit. = Jag har tid.\"},{\"word\":\"sein\",\"meaning\":\"Olema\",\"example\":\"Ich bin hier. = Jag är här.\"},{\"word\":\"bekommen\",\"meaning\":\"Saama\",\"example\":\"Ich bekomme ein Geschenk. = Jag får en gåva.\"},{\"word\":\"machen\",\"meaning\":\"Tegema / valmistama\",\"example\":\"Ich mache das. = Jag gör det.\"}]","study.important":"[\"På svenska \\\"jag har\\\" = på tyska Ich habe + ackusativ. Använd inte dativ: fel *mir habe.\",\"Med sein och dativ: Mir ist kalt. = Jag är kall. (det är inte haben!)\",\"I perfekt: Ich habe gelernt = jag har lärt mig.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts haben\|idx:261 (haben), ceļš 'lv; study.explanation; study.comparison; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Mul on","study.explanation":"[\"Põhiidee: haben tähendab, et kellelegi kuulub midagi või et miski…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "haben",
  "lv": "Mul on",
  "level": "A1",
  "study": {
    "id": "a1-haben",
    "layout": "standardStudy",
    "translation": "Mul on",
    "explanation": [
      "Põhiidee: haben tähendab, et kellelegi kuulub midagi või et miski on kättesaadav.",
      "Eesti väljendile „mul on / sul on” vastab saksa keeles Nominativ + haben: Ich habe ..., Du hast ..., Er hat ... — mitte *mir habe.",
      "Sõna haben järel tuleb Akkusativ: Ich habe ein Auto. = Mul on auto.",
      "Haben kasutatakse ka abitegusõnana Perfektis: Ich habe gelernt."
    ],
    "examples": [
      {
        "de": "Ich habe ein Auto.",
        "lv": "Mul on auto."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Kas sul on aega?"
      },
      {
        "de": "Wir haben Hunger.",
        "lv": "Meil on kõht tühi."
      },
      {
        "de": "Ich habe das gemacht.",
        "lv": "Ma tegin seda."
      }
    ],
    "comparison": [
      {
        "word": "haben",
        "meaning": "Mul on",
        "example": "Ich habe Zeit. = Jag har tid."
      },
      {
        "word": "sein",
        "meaning": "Olema",
        "example": "Ich bin hier. = Jag är här."
      },
      {
        "word": "bekommen",
        "meaning": "Saama",
        "example": "Ich bekomme ein Geschenk. = Jag får en gåva."
      },
      {
        "word": "machen",
        "meaning": "Tegema / valmistama",
        "example": "Ich mache das. = Jag gör det."
      }
    ],
    "tip": {
      "text": "Atceries: Ich habe → man ir."
    },
    "important": [
      "På svenska \"jag har\" = på tyska Ich habe + ackusativ. Använd inte dativ: fel *mir habe.",
      "Med sein och dativ: Mir ist kalt. = Jag är kall. (det är inte haben!)",
      "I perfekt: Ich habe gelernt = jag har lärt mig."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "haben",
          "Ich habe"
        ],
        "purple": [
          "mul on",
          "sul on",
          "Põhiidee"
        ],
        "yellow": [
          "abitegusõnana"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "habe"
            ]
          },
          "lv": {
            "purple": [
              "mul on"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Hast"
            ]
          },
          "lv": {
            "purple": [
              "sul on"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "haben"
            ]
          },
          "lv": {
            "purple": [
              "meil"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "habe"
            ]
          },
          "lv": {
            "purple": [
              "tegin"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "haben"
            ]
          },
          "meaning": {
            "purple": [
              "mul on"
            ]
          },
          "example": {
            "blue": [
              "habe"
            ],
            "purple": [
              "mul on"
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
              "olema"
            ]
          },
          "example": {
            "green": [
              "bin",
              "olen"
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
              "saama"
            ]
          },
          "example": {
            "yellow": [
              "bekomme",
              "saan"
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
              "tegema"
            ]
          },
          "example": {
            "red": [
              "mache",
              "teen"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Ich habe"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "habe"
          ],
          "purple": [
            "Latviski"
          ]
        },
        {
          "blue": [
            "haben"
          ],
          "purple": [
            "sein",
            "sein"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 17

**Audit ID:** `LRB099-0017`
**Finding Stable ID:** `g2/a1/sv|halten|idx:265|lv; study.explanation; study.comparison; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `halten|idx:265`
**Field / path:** `lv; study.explanation; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** turēt
**DE reference (read-only):** halten
**CURRENT (captured scope):** {"lv":"Hoidma • Peatama","study.explanation":"[\"Põhiidee: halten tähendab hoidma, aga sõiduki või liikumise puhul võib tähendada peatama või peatuma.\",\"Kui ese on käes, tähendab halten tavaliselt hoidma.\",\"Bussi, rongi või auto puhul tähendab halten sageli peatuma.\",\"Arvamust väljendavas fraasis ich halte das für... tähendab see millekski pidama.\"]","study.comparison":"[{\"word\":\"halten\",\"meaning\":\"Hoidma / peatuma\",\"example\":\"Der Bus hält. = Bussen stannar.\"},{\"word\":\"nehmen\",\"meaning\":\"Võtma\",\"example\":\"Ich nehme die Tasche. = Jag tar väskan.\"},{\"word\":\"anhalten\",\"meaning\":\"Peatama\",\"example\":\"Bitte halten Sie an. = Var vänlig och stanna.\"},{\"word\":\"denken\",\"meaning\":\"Mõtlema\",\"example\":\"Ich denke, das ist richtig. = Jag tror att det är rätt.\"}]","study.important":"[\"halten nav tikai “turēt”. Ar transportu tas bieži nozīmē apstāties.\",\"Ich halte das für... ir viedokļa frāze: “es to uzskatu par...”.\",\"Bitte halten Sie an använder den separabla verben anhalten.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts halten\|idx:265 (halten), ceļš 'lv; study.explanation; study.comparison; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Hoidma • Peatama","study.explanation":"[\"Põhiidee: halten tähendab hoidma, aga sõiduki või liiku…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "halten",
  "lv": "Hoidma • Peatama",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "Hoidma • Peatama",
    "explanation": [
      "Põhiidee: halten tähendab hoidma, aga sõiduki või liikumise puhul võib tähendada peatama või peatuma.",
      "Kui ese on käes, tähendab halten tavaliselt hoidma.",
      "Bussi, rongi või auto puhul tähendab halten sageli peatuma.",
      "Arvamust väljendavas fraasis ich halte das für... tähendab see millekski pidama."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Ma hoian kotti."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Buss peatub siin."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Palun, peatuge."
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Ma pean seda õigeks."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "Hoidma / peatuma",
        "example": "Der Bus hält. = Bussen stannar."
      },
      {
        "word": "nehmen",
        "meaning": "Võtma",
        "example": "Ich nehme die Tasche. = Jag tar väskan."
      },
      {
        "word": "anhalten",
        "meaning": "Peatama",
        "example": "Bitte halten Sie an. = Var vänlig och stanna."
      },
      {
        "word": "denken",
        "meaning": "Mõtlema",
        "example": "Ich denke, das ist richtig. = Jag tror att det är rätt."
      }
    ],
    "tip": {
      "text": "Atceries: rokā → halten; transports → hält/apstājas."
    },
    "important": [
      "halten nav tikai “turēt”. Ar transportu tas bieži nozīmē apstāties.",
      "Ich halte das für... ir viedokļa frāze: “es to uzskatu par...”.",
      "Bitte halten Sie an använder den separabla verben anhalten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "halten"
        ],
        "purple": [
          "hoidma",
          "peatama",
          "peatuma",
          "millekski pidama"
        ],
        "green": [
          "Põhiidee",
          "liikumise"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "halte"
            ]
          },
          "lv": {
            "purple": [
              "hoian"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "hält"
            ]
          },
          "lv": {
            "purple": [
              "peatub"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "halten"
            ]
          },
          "lv": {
            "purple": [
              "peatuge"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "halte"
            ]
          },
          "lv": {
            "purple": [
              "pean"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "halten"
            ]
          },
          "meaning": {
            "purple": [
              "hoidma",
              "peatuma"
            ]
          },
          "example": {
            "blue": [
              "hält"
            ],
            "purple": [
              "peatub"
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
              "võtma"
            ]
          },
          "example": {
            "yellow": [
              "nehme",
              "võtan"
            ]
          }
        },
        {
          "word": {
            "green": [
              "anhalten"
            ]
          },
          "meaning": {
            "purple": [
              "peatama"
            ]
          },
          "example": {
            "red": [
              "Stoppen",
              "Peatage"
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
              "mõtlema"
            ]
          },
          "example": {
            "green": [
              "denke",
              "arvan"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "halten",
            "hält"
          ],
          "purple": [
            "Atceries",
            "Atceries"
          ],
          "green": [
            "transport"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "halten"
          ],
          "purple": [
            "halten",
            "halten"
          ]
        },
        {
          "blue": [
            "halte"
          ],
          "purple": [
            "Ich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 18

**Audit ID:** `LRB099-0018`
**Finding Stable ID:** `g2/a1/sv|Hand|idx:267|lv; study.explanation; study.comparison|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `Hand|idx:267`
**Field / path:** `lv; study.explanation; study.comparison`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** plauksta
**DE reference (read-only):** Hand
**CURRENT (captured scope):** {"lv":"hand","study.explanation":"[\"Huvudidén: die Hand betyder hand.\",\"På tyska är Arm och Hand två separate ord.\",\"I svensk vardagsspråk kan ordet arm ofta hänvisa till både Arm och Hand.\"]","study.comparison":"[{\"word\":\"die Hand\",\"meaning\":\"hand\",\"example\":\"in der Hand – i handen\"},{\"word\":\"der Arm\",\"meaning\":\"Käsi\",\"example\":\"Mein Arm tut weh. – Min arm gör ont.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Hand\|idx:267 (Hand), ceļš 'lv; study.explanation; study.comparison': viena rinda aptver apakšlaukus lv, study.explanation, study.comparison, kuru saturs sākas ar '{"lv":"hand","study.explanation":"[\"Huvudidén: die Hand betyder hand.\",\"På tyska är Arm och Hand två …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Hand",
  "de_article": "die",
  "de_plural": "die Hände",
  "lv": "hand",
  "level": "A1",
  "study": {
    "id": "a1-hand-study",
    "layout": "standardStudy",
    "translation": "hand",
    "explanation": [
      "Huvudidén: die Hand betyder hand.",
      "På tyska är Arm och Hand två separate ord.",
      "I svensk vardagsspråk kan ordet arm ofta hänvisa till både Arm och Hand."
    ],
    "examples": [
      {
        "de": "Ich wasche meine Hände.",
        "lv": "es mazgāju rokas."
      },
      {
        "de": "Sie hält das Glas in der Hand.",
        "lv": "viņa tur glāzi plaukstā."
      },
      {
        "de": "Mein Arm tut weh.",
        "lv": "man sāp roka."
      }
    ],
    "comparison": [
      {
        "word": "die Hand",
        "meaning": "hand",
        "example": "in der Hand – i handen"
      },
      {
        "word": "der Arm",
        "meaning": "Käsi",
        "example": "Mein Arm tut weh. – Min arm gör ont."
      }
    ],
    "tip": [
      "Hand = hand.",
      "Arm = arm från axeln till handen."
    ],
    "important": [
      "På tyska är Hand och Arm inte samma ord."
    ]
  }
}
```

---

## Finding 19

**Audit ID:** `LRB099-0019`
**Finding Stable ID:** `g2/a1/sv|heißen|idx:276|lv; study.explanation; study.comparison; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `heißen|idx:276`
**Field / path:** `lv; study.explanation; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** saukties
**DE reference (read-only):** heißen
**CURRENT (captured scope):** {"lv":"Nimi olema • Tähendama","study.explanation":"[\"Põhiidee: heißen kasutatakse kõige sagedamini selleks, et öelda, mis kellegi nimi on.\",\"Fraas Ich heiße... tähendab “minu nimi on...”.\",\"Sõnade või väljendite puhul võib heißen tähendada ka tähendama.\",\"A1 tasemel on kõige tähtsam fraas Wie heißt du?\"]","study.comparison":"[{\"word\":\"heißen\",\"meaning\":\"Nimi olema / tähendama\",\"example\":\"Ich heiße Anna. = Jag heter Anna.\"},{\"word\":\"nennen\",\"meaning\":\"Kutsuma / nimetama\",\"example\":\"Er nennt mich Tom. = Han kallar mig Tom.\"},{\"word\":\"bedeuten\",\"meaning\":\"Tähendama\",\"example\":\"Was bedeutet das? = Vad betyder det?\"},{\"word\":\"rufen\",\"meaning\":\"Hüüdma / helistama\",\"example\":\"Ich rufe dich. = Jag ringer dig.\"},{\"word\":\"anrufen\",\"meaning\":\"Helistama\",\"example\":\"Ich rufe dich an. = Jag ringer dig upp.\"}]","study.important":"[\"Wie heißt du? betyder \\\"Vad heter du?\\\", inte bokstavligen \\\"hur du kallas?\\\".\",\"Was heißt das? betyder ofta \\\"Vad betyder det?\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts heißen\|idx:276 (heißen), ceļš 'lv; study.explanation; study.comparison; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Nimi olema • Tähendama","study.explanation":"[\"Põhiidee: heißen kasutatakse kõige sagedamini sel…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "heißen",
  "lv": "Nimi olema • Tähendama",
  "level": "A1",
  "study": {
    "id": "a1-heißen",
    "layout": "standardStudy",
    "translation": "Nimi olema • Tähendama",
    "explanation": [
      "Põhiidee: heißen kasutatakse kõige sagedamini selleks, et öelda, mis kellegi nimi on.",
      "Fraas Ich heiße... tähendab “minu nimi on...”.",
      "Sõnade või väljendite puhul võib heißen tähendada ka tähendama.",
      "A1 tasemel on kõige tähtsam fraas Wie heißt du?"
    ],
    "examples": [
      {
        "de": "Ich heiße Anna.",
        "lv": "Minu nimi on Anna."
      },
      {
        "de": "Wie heißt du?",
        "lv": "Kuidas sind kutsutakse?"
      },
      {
        "de": "Wie heißt das auf Deutsch?",
        "lv": "Kuidas seda saksa keeles nimetatakse?"
      },
      {
        "de": "Was heißt das?",
        "lv": "Mida see tähendab?"
      }
    ],
    "comparison": [
      {
        "word": "heißen",
        "meaning": "Nimi olema / tähendama",
        "example": "Ich heiße Anna. = Jag heter Anna."
      },
      {
        "word": "nennen",
        "meaning": "Kutsuma / nimetama",
        "example": "Er nennt mich Tom. = Han kallar mig Tom."
      },
      {
        "word": "bedeuten",
        "meaning": "Tähendama",
        "example": "Was bedeutet das? = Vad betyder det?"
      },
      {
        "word": "rufen",
        "meaning": "Hüüdma / helistama",
        "example": "Ich rufe dich. = Jag ringer dig."
      },
      {
        "word": "anrufen",
        "meaning": "Helistama",
        "example": "Ich rufe dich an. = Jag ringer dig upp."
      }
    ],
    "tip": {
      "text": "Atceries: Ich heiße... → mani sauc..."
    },
    "important": [
      "Wie heißt du? betyder \"Vad heter du?\", inte bokstavligen \"hur du kallas?\".",
      "Was heißt das? betyder ofta \"Vad betyder det?\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "heißen",
          "Ich heiße",
          "Wie heißt du"
        ],
        "purple": [
          "nimi",
          "tähendama"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "heiße"
            ]
          },
          "lv": {
            "purple": [
              "minu nimi on"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "heißt"
            ]
          },
          "lv": {
            "purple": [
              "kuidas"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "heißt"
            ]
          },
          "lv": {
            "purple": [
              "nimetatakse"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "heißt"
            ]
          },
          "lv": {
            "purple": [
              "tähendab"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "heißen"
            ]
          },
          "meaning": {
            "purple": [
              "nimi olema",
              "tähendama"
            ]
          },
          "example": {
            "blue": [
              "heiße"
            ],
            "purple": [
              "nimi"
            ]
          }
        },
        {
          "word": {
            "green": [
              "nennen"
            ]
          },
          "meaning": {
            "purple": [
              "kutsuma"
            ]
          },
          "example": {
            "green": [
              "nennt",
              "nennt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bedeuten"
            ]
          },
          "meaning": {
            "purple": [
              "tähendama"
            ]
          },
          "example": {
            "yellow": [
              "bedeutet",
              "tähendab"
            ]
          }
        },
        {
          "word": {
            "green": [
              "rufen"
            ]
          },
          "meaning": {
            "purple": [
              "hüüdma",
              "helistama"
            ]
          },
          "example": {
            "red": [
              "rufe"
            ]
          }
        },
        {
          "word": {
            "green": [
              "anrufen"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Ich heiße"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "Wie heißt du"
          ],
          "purple": [
            "Wie"
          ]
        },
        {
          "blue": [
            "Was heißt das"
          ],
          "purple": [
            "Was"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 20

**Audit ID:** `LRB099-0020`
**Finding Stable ID:** `g2/a1/sv|hoch|idx:285|lv; study.examples[1].lv; study.important|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `hoch|idx:285`
**Field / path:** `lv; study.examples[1].lv; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** augsts
**DE reference (read-only):** hoch
**CURRENT (captured scope):** {"lv":"Kõrge","study.examples[1].lv":null,"study.important":"[\"Cenām un līmenim bieži lieto hoch.\",\"hoch = augsts.\",\"Augsts vertikāli, līmenī vai augstumā.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts hoch\|idx:285 (hoch), ceļš 'lv; study.examples[1].lv; study.important': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Kõrge","study.examples[1].lv":null,"study.important":"[\"Cenām un līmenim bieži lieto hoch.\",\"h…'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "hoch",
  "lv": "Kõrge",
  "level": "A1",
  "study": {
    "id": "a1-hoch-study",
    "layout": "standardStudy",
    "translation": "Kõrge",
    "explanation": [
      "Põhiidee: Kõrge vertikaalselt, taseme või kõrguse poolest.",
      "Hoch tähendab peamiselt: kõrguselt suur.",
      "Sageli kirjeldab: vertikaalset kõrgust."
    ],
    "examples": [
      {
        "de": "Der Berg ist hoch.",
        "lv": "Mägi on kõrge."
      },
      {
        "de": "Das Regal ist zwei Meter hoch.",
        "lv": "Mägi on kõrge."
      },
      {
        "de": "Die Miete ist hoch.",
        "lv": "Üür on kõrge."
      },
      {
        "de": "Die Mauer ist hoch.",
        "lv": "Müür on kõrge."
      },
      {
        "de": "Die Preise sind hoch.",
        "lv": "Hinnad on kõrged."
      }
    ],
    "tip": [
      "hoch = augsts",
      "Izmanto hoch, kad konteksts atbilst šai nozīmei."
    ],
    "important": [
      "Cenām un līmenim bieži lieto hoch.",
      "hoch = augsts.",
      "Augsts vertikāli, līmenī vai augstumā."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "hoch"
        ],
        "purple": [
          "kõrge"
        ],
        "orange": [
          "kõrge"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "hoch"
            ]
          },
          "lv": {
            "purple": [
              "kõrge"
            ]
          }
        },
        {
          "de": {
            "green": [
              "hoch"
            ]
          },
          "lv": {
            "purple": [
              "kõrge"
            ]
          }
        },
        {
          "de": {
            "green": [
              "hoch"
            ]
          },
          "lv": {
            "purple": [
              "kõrge"
            ]
          }
        },
        {
          "de": {
            "green": [
              "hoch"
            ]
          },
          "lv": {
            "purple": [
              "kõrge"
            ]
          }
        },
        {
          "de": {
            "green": [
              "hoch"
            ]
          },
          "lv": {
            "purple": [
              "kõrged"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "hoch"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "hoch"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 21

**Audit ID:** `LRB099-0021`
**Finding Stable ID:** `g2/a1/sv|hören|idx:287|lv, study.explanation, study.tip, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `hören|idx:287`
**Field / path:** `lv, study.explanation, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** dzirdēt • klausīties
**DE reference (read-only):** hören
**CURRENT (captured scope):** {"lv":"Kuulma • Kuulama","study.explanation":"[\"Põhiidee: Kuulda heli või kuulata muusikat.\",\"Hören tähendab peamiselt: heli tajuma.\",\"Sageli kirjeldab: helisid.\",\"Hören kasutatakse helide, muusika ja selle kohta, mida kuuldakse.\"]","study.tip":"[\"Höra ljud eller lyssna på musik.\",\"Använd hören när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"hören = höra/lyssna på ljud.\",\"Höra ljud eller lyssna på musik.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts hören\|idx:287 (hören), ceļš 'lv, study.explanation, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Kuulma • Kuulama","study.explanation":"[\"Põhiidee: Kuulda heli või kuulata muusikat.\",\"Hören t…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "hören",
  "lv": "Kuulma • Kuulama",
  "level": "A1",
  "study": {
    "id": "a1-hoeren-study",
    "layout": "standardStudy",
    "translation": "Kuulma • Kuulama",
    "explanation": [
      "Põhiidee: Kuulda heli või kuulata muusikat.",
      "Hören tähendab peamiselt: heli tajuma.",
      "Sageli kirjeldab: helisid.",
      "Hören kasutatakse helide, muusika ja selle kohta, mida kuuldakse."
    ],
    "examples": [
      {
        "de": "Ich höre Musik.",
        "lv": "Ma kuulan muusikat."
      },
      {
        "de": "Die Kinder hören eine Geschichte.",
        "lv": "Lapsed kuulavad lugu."
      },
      {
        "de": "Ich höre dich.",
        "lv": "Ma kuulen sind."
      }
    ],
    "tip": [
      "Höra ljud eller lyssna på musik.",
      "Använd hören när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "hören = höra/lyssna på ljud.",
      "Höra ljud eller lyssna på musik."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "hören"
        ],
        "purple": [
          "Põhiidee",
          "kuulata",
          "Kuulda"
        ],
        "green": [
          "kuulata",
          "Kuulda"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "höre"
            ]
          },
          "lv": {
            "purple": [
              "kuulan",
              "kuulan"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "hören",
              "hören"
            ]
          },
          "lv": {
            "purple": [
              "kuulavad",
              "kuulavad"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "höre"
            ]
          },
          "lv": {
            "purple": [
              "kuulen",
              "kuulen"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Dzirdēt"
          ]
        },
        {
          "purple": [
            "Dzirdēt"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "hören"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 22

**Audit ID:** `LRB099-0022`
**Finding Stable ID:** `g2/a1/sv|hübsch|idx:288|lv, study.explanation, study.comparison, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `hübsch|idx:288`
**Field / path:** `lv, study.explanation, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** glīts
**DE reference (read-only):** hübsch
**CURRENT (captured scope):** {"lv":"vacker","study.explanation":"[\"Huvudidén: hübsch betyder vacker, tilltalande eller sympatisk till utseendet.\",\"hübsch beskriver ofta utseendet på en person, kläder, rum eller föremål.\",\"Det svenska ordet trevlig passar i vissa sammanhang, men är för brett som huvudöversättning.\",\"En persons karaktär eller vänlig attityd beskrivs oftare på tyska med nett.\"]","study.comparison":"[{\"word\":\"hübsch\",\"meaning\":\"vacker • tilltalande till utseendet\",\"example\":\"Das ist ein hübsches Kleid. – Det är en vacker klänning.\"},{\"word\":\"schön\",\"meaning\":\"vacker • behaglig\",\"example\":\"Der Garten ist schön. – Trädgården är vacker.\"},{\"word\":\"nett\",\"meaning\":\"trevlig • vänlig\",\"example\":\"Sie ist sehr nett. – Hon är mycket trevlig.\"}]","study.important":"[\"hübsch är inte en universell motsvarighet till ordet trevlig.\",\"För en persons karaktär eller vänlig attityd är nett vanligtvis lämpligare.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts hübsch\|idx:288 (hübsch), ceļš 'lv, study.explanation, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.comparison, study.important, kuru saturs sākas ar '{"lv":"vacker","study.explanation":"[\"Huvudidén: hübsch betyder vacker, tilltalande eller sympatisk til…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "hübsch",
  "lv": "vacker",
  "level": "A1",
  "study": {
    "id": "a1-huebsch",
    "layout": "standardStudy",
    "translation": "vacker",
    "explanation": [
      "Huvudidén: hübsch betyder vacker, tilltalande eller sympatisk till utseendet.",
      "hübsch beskriver ofta utseendet på en person, kläder, rum eller föremål.",
      "Det svenska ordet trevlig passar i vissa sammanhang, men är för brett som huvudöversättning.",
      "En persons karaktär eller vänlig attityd beskrivs oftare på tyska med nett."
    ],
    "examples": [
      {
        "de": "Sie trägt ein hübsches Kleid.",
        "lv": "Viņai ir glīta kleita."
      },
      {
        "de": "Das Zimmer ist hübsch.",
        "lv": "Istaba ir glīta."
      },
      {
        "de": "Das ist ein hübsches Bild.",
        "lv": "Tā ir glīta bilde."
      }
    ],
    "comparison": [
      {
        "word": "hübsch",
        "meaning": "vacker • tilltalande till utseendet",
        "example": "Das ist ein hübsches Kleid. – Det är en vacker klänning."
      },
      {
        "word": "schön",
        "meaning": "vacker • behaglig",
        "example": "Der Garten ist schön. – Trädgården är vacker."
      },
      {
        "word": "nett",
        "meaning": "trevlig • vänlig",
        "example": "Sie ist sehr nett. – Hon är mycket trevlig."
      }
    ],
    "tip": {
      "text": "Atceries: hübsch galvenokārt raksturo glītu izskatu, bet nett biežāk raksturo jauku cilvēku vai izturēšanos."
    },
    "important": [
      "hübsch är inte en universell motsvarighet till ordet trevlig.",
      "För en persons karaktär eller vänlig attityd är nett vanligtvis lämpligare."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "hübsch"
        ],
        "purple": [
          "glīts",
          "pievilcīgs",
          "simpātisks"
        ],
        "green": [
          "izskatu"
        ],
        "yellow": [
          "nett"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "hübsches"
            ],
            "green": [
              "Kleid"
            ]
          },
          "lv": {
            "purple": [
              "glīta"
            ],
            "green": [
              "kleita"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "hübsch"
            ]
          },
          "lv": {
            "purple": [
              "glīta"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "hübsches"
            ]
          },
          "lv": {
            "purple": [
              "glīta"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "hübsch"
            ]
          },
          "meaning": {
            "purple": [
              "glīts",
              "pievilcīgs"
            ]
          },
          "example": {
            "blue": [
              "hübsches"
            ],
            "purple": [
              "glīta"
            ]
          }
        },
        {
          "word": {
            "green": [
              "schön"
            ]
          },
          "meaning": {
            "purple": [
              "skaists",
              "patīkams"
            ]
          }
        },
        {
          "word": {
            "green": [
              "nett"
            ]
          },
          "meaning": {
            "purple": [
              "jauks",
              "laipns"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "hübsch"
          ],
          "purple": [
            "glīts izskats"
          ],
          "yellow": [
            "nett"
          ],
          "green": [
            "jauks cilvēks"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "hübsch"
          ],
          "purple": [
            "glīts"
          ]
        },
        {
          "yellow": [
            "nett"
          ],
          "purple": [
            "jauks",
            "laipns"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 23

**Audit ID:** `LRB099-0023`
**Finding Stable ID:** `g2/a1/sv|ihr|idx:292|lv, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `ihr|idx:292`
**Field / path:** `lv, study.explanation, study.examples, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** jūs • viņai
**DE reference (read-only):** ihr
**CURRENT (captured scope):** {"lv":"Teie • Temale","study.explanation":"[\"Põhiidee: ihr on kaks erinevat ühesuguse kirjapildiga asesõna — mitme inimese poole pöördumine (teie) ja asesõna sie Dativi vorm (talle/tema).\",\"Väikese ihr tõlgitakse mitme inimese poole pöördumisel sõnaga teie (Kommt ihr mit? = Kas te tulete kaasa?).\",\"Ihr omastava asesõnana tähendab tema (ihr Buch = tema raamat).\",\"Ihr Dativi vormina (sõnast sie) tähendab talle (Ich gebe ihr das Buch. = Ma annan talle raamatu.).\",\"Tegusõna vorm (kommt, habt) näitab, et jutt on sõnast teie — mitme inimese poole pöördumisest.\",\"Viisakas pöördumine on alati Sie suure algustähega, mitte ihr.\"]","study.examples":"[{\"de\":\"Kommt ihr heute Abend?\",\"lv\":\"Kas te tulete täna õhtul?\"},{\"de\":\"Ich gebe ihr das Buch.\",\"lv\":\"Ma annan talle raamatu.\"},{\"de\":\"Wo wohnt ihr?\",\"lv\":\"Kus te elate?\"},{\"de\":\"Er schreibt ihr einen Brief.\",\"lv\":\"Ta kirjutab talle kirja.\"},{\"de\":\"Habt ihr Zeit?\",\"lv\":\"Kas teil on aega?\"},{\"de\":\"Das ist ihr Auto.\",\"lv\":\"See on tema auto.\"}]","study.tip":"[\"ihr med verbet pluralform (kommt, habt) = ni; ihr bredvid ett ord som dativ eller ägandeform = henne/hennes.\",\"Prov: Habt ihr...? / Kommt ihr...? = ni; Ich gebe ihr... / ihr Buch = henne/hennes.\"]","study.important":"[\"ihr = ni (tilltal till flera) ELLER henne (dativ) ELLER hennes (ägandeform) — beroende på sammanhang.\",\"Artigt tilltal är alltid Sie med stor bokstav, inte ihr.\",\"Fel: Ihr (artigt) → Korrekt: Sie.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts ihr\|idx:292 (ihr), ceļš 'lv, study.explanation, study.examples, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.tip, study.important, kuru saturs sākas ar '{"lv":"Teie • Temale","study.explanation":"[\"Põhiidee: ihr on kaks erinevat ühesuguse kirjapildiga ases…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ihr",
  "lv": "Teie • Temale",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "Teie • Temale",
    "explanation": [
      "Põhiidee: ihr on kaks erinevat ühesuguse kirjapildiga asesõna — mitme inimese poole pöördumine (teie) ja asesõna sie Dativi vorm (talle/tema).",
      "Väikese ihr tõlgitakse mitme inimese poole pöördumisel sõnaga teie (Kommt ihr mit? = Kas te tulete kaasa?).",
      "Ihr omastava asesõnana tähendab tema (ihr Buch = tema raamat).",
      "Ihr Dativi vormina (sõnast sie) tähendab talle (Ich gebe ihr das Buch. = Ma annan talle raamatu.).",
      "Tegusõna vorm (kommt, habt) näitab, et jutt on sõnast teie — mitme inimese poole pöördumisest.",
      "Viisakas pöördumine on alati Sie suure algustähega, mitte ihr."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Kas te tulete täna õhtul?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Ma annan talle raamatu."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Kus te elate?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Ta kirjutab talle kirja."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "Kas teil on aega?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "See on tema auto."
      }
    ],
    "tip": [
      "ihr med verbet pluralform (kommt, habt) = ni; ihr bredvid ett ord som dativ eller ägandeform = henne/hennes.",
      "Prov: Habt ihr...? / Kommt ihr...? = ni; Ich gebe ihr... / ihr Buch = henne/hennes."
    ],
    "important": [
      "ihr = ni (tilltal till flera) ELLER henne (dativ) ELLER hennes (ägandeform) — beroende på sammanhang.",
      "Artigt tilltal är alltid Sie med stor bokstav, inte ihr.",
      "Fel: Ihr (artigt) → Korrekt: Sie."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ihr"
        ],
        "purple": [
          "teie",
          "talle",
          "tema"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {
            "purple": [
              "kas"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {
            "purple": [
              "talle"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {
            "purple": [
              "kus"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {
            "purple": [
              "talle"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {
            "purple": [
              "teil"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ihr"
            ]
          },
          "lv": {
            "purple": [
              "tema"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "ihr"
          ]
        },
        {
          "blue": [
            "ihr"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "ihr",
            "ihr",
            "ihr"
          ]
        },
        {
          "blue": [
            "Sie"
          ]
        },
        {
          "blue": [
            "Sie"
          ],
          "red": [
            "Ihr"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 24

**Audit ID:** `LRB099-0024`
**Finding Stable ID:** `g2/a1/sv|im|idx:293|lv, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `im|idx:293`
**Field / path:** `lv, study.explanation, study.examples, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** iekšā (-ā) • kur?
**DE reference (read-only):** im
**CURRENT (captured scope):** {"lv":"Sees (-s) • Kus?","study.explanation":"[\"Im on eessõna in ja artikli dem lühend.\",\"Täisvorm: in dem (Dativ).\",\"Kasutatakse mees- ja kesksoost nimisõnadega, kui vastatakse küsimusele kus? — asukoht.\",\"Ajaga ja aastaaegadega: im Januar, im Sommer, im Winter.\",\"Praktikas kasutatakse peaaegu alati im, mitte täisvormi in dem.\"]","study.examples":"[{\"de\":\"Ich bin im Park.\",\"lv\":\"Ma olen pargis.\"},{\"de\":\"Wir wohnen im Zentrum.\",\"lv\":\"Me elame kesklinnas.\"},{\"de\":\"Im Sommer ist es warm.\",\"lv\":\"Suvel on soe.\"},{\"de\":\"Er arbeitet im Büro.\",\"lv\":\"Ta töötab kontoris.\"},{\"de\":\"Das Kind spielt im Garten.\",\"lv\":\"Laps mängib aias.\"},{\"de\":\"Im Januar fahre ich nach Wien.\",\"lv\":\"Jaanuaris sõidan ma Viini.\"},{\"de\":\"Sie ist im Kino.\",\"lv\":\"Ta on kinos.\"},{\"de\":\"Wir treffen uns im Restaurant.\",\"lv\":\"Me kohtume restoranis.\"}]","study.tip":"[\"Kom ihåg: in + dem → im (var?, var?).\",\"Vart? → ins; var? → im — förväxla inte dessa två!\"]","study.important":"[\"im = in dem, endast med ett maskulint eller neutrum substantiv i dativ.\",\"Svarar på var?, inte vart? — var något är, inte rörelse.\",\"Med månader och årstider: im März, im Herbst.\",\"För feminin: in der Schule, inte im Schule.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts im\|idx:293 (im), ceļš 'lv, study.explanation, study.examples, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.tip, study.important, kuru saturs sākas ar '{"lv":"Sees (-s) • Kus?","study.explanation":"[\"Im on eessõna in ja artikli dem lühend.\",\"Täisvorm: i…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "im",
  "lv": "Sees (-s) • Kus?",
  "level": "A1",
  "study": {
    "id": "a1-im",
    "layout": "standardStudy",
    "translation": "Sees (-s) • Kus?",
    "explanation": [
      "Im on eessõna in ja artikli dem lühend.",
      "Täisvorm: in dem (Dativ).",
      "Kasutatakse mees- ja kesksoost nimisõnadega, kui vastatakse küsimusele kus? — asukoht.",
      "Ajaga ja aastaaegadega: im Januar, im Sommer, im Winter.",
      "Praktikas kasutatakse peaaegu alati im, mitte täisvormi in dem."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Ma olen pargis."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Me elame kesklinnas."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "Suvel on soe."
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Ta töötab kontoris."
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "Laps mängib aias."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "Jaanuaris sõidan ma Viini."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "Ta on kinos."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Me kohtume restoranis."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "Sees, kus? (Dativ)",
        "example": "im Park – Pargis"
      },
      {
        "word": "ins",
        "meaning": "Sisse, kuhu? (Akk.)",
        "example": "ins Kino – Kinno"
      },
      {
        "word": "in",
        "meaning": "Sees / sisse (ilma artiklita)",
        "example": "in Berlin – Berliinis"
      },
      {
        "word": "am",
        "meaning": "Juures, kus? (Dativ)",
        "example": "am Fenster – Akna juures"
      },
      {
        "word": "auf",
        "meaning": "Pinnal",
        "example": "auf dem Tisch – Laual"
      }
    ],
    "tip": [
      "Kom ihåg: in + dem → im (var?, var?).",
      "Vart? → ins; var? → im — förväxla inte dessa två!"
    ],
    "important": [
      "im = in dem, endast med ett maskulint eller neutrum substantiv i dativ.",
      "Svarar på var?, inte vart? — var något är, inte rörelse.",
      "Med månader och årstider: im März, im Herbst.",
      "För feminin: in der Schule, inte im Schule."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "im",
          "in dem"
        ],
        "purple": [
          "mees",
          "kus?"
        ],
        "green": [
          "eessõna",
          "asukoht"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {
            "purple": [
              "pargis"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {
            "purple": [
              "elame"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Im"
            ]
          },
          "lv": {
            "purple": [
              "suvel"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {
            "purple": [
              "kontoris"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {
            "purple": [
              "aias"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Im"
            ]
          },
          "lv": {
            "purple": [
              "jaanuaris"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {
            "purple": [
              "kinos"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "im"
            ]
          },
          "lv": {
            "purple": [
              "restoranis"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "im"
            ]
          },
          "meaning": {
            "purple": [
              "sees",
              "kus?"
            ]
          },
          "example": {
            "blue": [
              "im Park"
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
              "sisse",
              "kuhu?"
            ]
          },
          "example": {
            "yellow": [
              "ins Kino"
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
              "sees"
            ]
          },
          "example": {
            "green": [
              "in Berlin"
            ]
          }
        },
        {
          "word": {
            "green": [
              "am"
            ]
          },
          "meaning": {
            "purple": [
              "juures"
            ]
          },
          "example": {
            "green": [
              "am Fenster"
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
              "pinnal"
            ]
          },
          "example": {
            "red": [
              "auf dem Tisch"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "im"
          ],
          "purple": [
            "in + dem",
            "Atceries"
          ]
        },
        {
          "red": [
            "ins",
            "Atceries"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "im"
          ],
          "purple": [
            "in dem"
          ],
          "green": [
            "dem"
          ]
        },
        {
          "purple": [
            "Atbild"
          ],
          "green": [
            "Atbild"
          ]
        },
        {
          "green": [
            "im März",
            "im Herbst"
          ]
        },
        {
          "yellow": [
            "in der Schule"
          ],
          "red": [
            "im Schule"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 25

**Audit ID:** `LRB099-0025`
**Finding Stable ID:** `g2/a1/sv|in|idx:295|lv, study.explanation, study.examples, study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `in|idx:295`
**Field / path:** `lv, study.explanation, study.examples, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** iekšā • uz
**DE reference (read-only):** in
**CURRENT (captured scope):** {"lv":"Sees • Sisse","study.explanation":"[\"Põhiidee: in tähendab tavaliselt sees või mingisse kohta, kui jutt on ruumist, riigist, linnast või hoonest.\",\"Asukoha puhul tõlgitakse in sageli sõnaga sees või lõpuga -s: in Berlin = Berliinis.\",\"Liikumise puhul tähendab in sissepoole: ins Kino = kinno.\",\"Eesti keeles muutub tõlge olenevalt kontekstist.\"]","study.examples":"[{\"de\":\"Ich bin in Berlin.\",\"lv\":\"Ma olen Berliinis.\"},{\"de\":\"Ich gehe in die Schule.\",\"lv\":\"Ma lähen kooli.\"},{\"de\":\"Das Buch ist in der Tasche.\",\"lv\":\"Raamat on kotis.\"},{\"de\":\"Wir gehen ins Kino.\",\"lv\":\"Me läheme kinno.\"}]","study.important":"[\"in är inte alltid bokstavligt \\\"inuti\\\"; på svenska säger man ofta i Berlin, i skolan, på bio.\",\"Om det handlar om en yta använder man ofta auf, inte in.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts in\|idx:295 (in), ceļš 'lv, study.explanation, study.examples, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.important, kuru saturs sākas ar '{"lv":"Sees • Sisse","study.explanation":"[\"Põhiidee: in tähendab tavaliselt sees või mingisse kohta, k…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "in",
  "lv": "Sees • Sisse",
  "level": "A1",
  "study": {
    "id": "a1-in",
    "layout": "standardStudy",
    "translation": "Sees • Sisse",
    "explanation": [
      "Põhiidee: in tähendab tavaliselt sees või mingisse kohta, kui jutt on ruumist, riigist, linnast või hoonest.",
      "Asukoha puhul tõlgitakse in sageli sõnaga sees või lõpuga -s: in Berlin = Berliinis.",
      "Liikumise puhul tähendab in sissepoole: ins Kino = kinno.",
      "Eesti keeles muutub tõlge olenevalt kontekstist."
    ],
    "examples": [
      {
        "de": "Ich bin in Berlin.",
        "lv": "Ma olen Berliinis."
      },
      {
        "de": "Ich gehe in die Schule.",
        "lv": "Ma lähen kooli."
      },
      {
        "de": "Das Buch ist in der Tasche.",
        "lv": "Raamat on kotis."
      },
      {
        "de": "Wir gehen ins Kino.",
        "lv": "Me läheme kinno."
      }
    ],
    "tip": {
      "text": "Atceries: iekšā/telpā → in."
    },
    "important": [
      "in är inte alltid bokstavligt \"inuti\"; på svenska säger man ofta i Berlin, i skolan, på bio.",
      "Om det handlar om en yta använder man ofta auf, inte in."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "in"
        ],
        "purple": [
          "sees",
          "Põhiidee"
        ],
        "green": [
          "ruumist",
          "riigist",
          "linnast",
          "hoonest"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "in"
            ]
          },
          "lv": {
            "purple": [
              "Berliinis"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "in"
            ]
          },
          "lv": {
            "purple": [
              "kooli"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "in"
            ]
          },
          "lv": {
            "purple": [
              "kotis"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {
            "purple": [
              "kinno"
            ]
          }
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
      "tip": {
        "left": {
          "blue": [
            "in"
          ],
          "purple": [
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "in"
          ],
          "purple": [
            "nav",
            "nav",
            "kino"
          ]
        },
        {
          "yellow": [
            "auf"
          ],
          "red": [
            "in"
          ],
          "purple": [
            "runa"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 26

**Audit ID:** `LRB099-0026`
**Finding Stable ID:** `g2/a1/sv|ins|idx:296|lv, study.explanation, study.examples, study.comparison, study.tip, study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `ins|idx:296`
**Field / path:** `lv, study.explanation, study.examples, study.comparison, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** iekšā • uz iekšu • kurp?
**DE reference (read-only):** ins
**CURRENT (captured scope):** {"lv":"Sisse • Sissepoole • Kuhu?","study.explanation":"[\"Ins on eessõna in ja artikli das lühend.\",\"Täisvorm: in das (Akkusativ).\",\"Kasutatakse kesksoost nimisõnadega, kui vastatakse küsimusele kuhu? — liikumine sissepoole.\",\"Sageli koos tegusõnadega: gehen, fahren, kommen, legen, stecken.\",\"Praktikas kasutatakse peaaegu alati ins, mitte täisvormi in das.\"]","study.examples":"[{\"de\":\"Ich gehe ins Kino.\",\"lv\":\"Ma lähen kinno.\"},{\"de\":\"Sie geht ins Bett.\",\"lv\":\"Ta läheb magama.\"},{\"de\":\"Wir fahren ins Ausland.\",\"lv\":\"Me sõidame välismaale.\"},{\"de\":\"Komm ins Haus!\",\"lv\":\"Tule majja!\"},{\"de\":\"Er steckt das Geld in den Geldbeutel.\",\"lv\":\"Ta paneb raha rahakotti.\"},{\"de\":\"Wir gehen ins Museum.\",\"lv\":\"Me läheme muuseumi.\"},{\"de\":\"Sie legt die Blumen ins Wasser.\",\"lv\":\"Ta paneb lilled vette.\"},{\"de\":\"Fahr bitte ins Zentrum.\",\"lv\":\"Palun, sõida kesklinna.\"}]","study.comparison":"[{\"word\":\"ins\",\"meaning\":\"Sisse, kuhu? (Akk.)\",\"example\":\"ins Kino – Kinno\"},{\"word\":\"im\",\"meaning\":\"Sees, kus? (Dativ)\",\"example\":\"im Kino – Kino\"},{\"word\":\"in\",\"meaning\":\"Sees / sisse (eraldi artikliga)\",\"example\":\"in die Stadt – Linna\"},{\"word\":\"aufs\",\"meaning\":\"Pinnale (Akk.)\",\"example\":\"aufs Dach – Katusele\"},{\"word\":\"zum\",\"meaning\":\"-sse / juurde (Dativ)\",\"example\":\"zum Arzt – Arsti juures\"}]","study.tip":"[\"Kom ihåg: in + das → ins (vart?, vart?).\",\"Vart? → ins; var? → im — det här är huvudskillnaden!\"]","study.important":"[\"ins = in das, endast med ett neutrum substantiv i vilken-fallet.\",\"Svarar på vart?, inte var? — rörelse, inte plats.\",\"För maskulin: in den Wald; för feminin: in die Schule.\",\"Förväxla inte: ins Kino gehen (till bio) vs. im Kino sein (att vara på bio).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts ins\|idx:296 (ins), ceļš 'lv, study.explanation, study.examples, study.comparison, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"lv":"Sisse • Sissepoole • Kuhu?","study.explanation":"[\"Ins on eessõna in ja artikli das lühend.\",\"…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ins",
  "lv": "Sisse • Sissepoole • Kuhu?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "Sisse • Sissepoole • Kuhu?",
    "explanation": [
      "Ins on eessõna in ja artikli das lühend.",
      "Täisvorm: in das (Akkusativ).",
      "Kasutatakse kesksoost nimisõnadega, kui vastatakse küsimusele kuhu? — liikumine sissepoole.",
      "Sageli koos tegusõnadega: gehen, fahren, kommen, legen, stecken.",
      "Praktikas kasutatakse peaaegu alati ins, mitte täisvormi in das."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Ma lähen kinno."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Ta läheb magama."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Me sõidame välismaale."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Tule majja!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Ta paneb raha rahakotti."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Me läheme muuseumi."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Ta paneb lilled vette."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Palun, sõida kesklinna."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "Sisse, kuhu? (Akk.)",
        "example": "ins Kino – Kinno"
      },
      {
        "word": "im",
        "meaning": "Sees, kus? (Dativ)",
        "example": "im Kino – Kino"
      },
      {
        "word": "in",
        "meaning": "Sees / sisse (eraldi artikliga)",
        "example": "in die Stadt – Linna"
      },
      {
        "word": "aufs",
        "meaning": "Pinnale (Akk.)",
        "example": "aufs Dach – Katusele"
      },
      {
        "word": "zum",
        "meaning": "-sse / juurde (Dativ)",
        "example": "zum Arzt – Arsti juures"
      }
    ],
    "tip": [
      "Kom ihåg: in + das → ins (vart?, vart?).",
      "Vart? → ins; var? → im — det här är huvudskillnaden!"
    ],
    "important": [
      "ins = in das, endast med ett neutrum substantiv i vilken-fallet.",
      "Svarar på vart?, inte var? — rörelse, inte plats.",
      "För maskulin: in den Wald; för feminin: in die Schule.",
      "Förväxla inte: ins Kino gehen (till bio) vs. im Kino sein (att vara på bio)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ins",
          "in das"
        ],
        "purple": [
          "ins",
          "sissepoole",
          "kuhu?"
        ],
        "green": [
          "kuhu?",
          "liikumine"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {
            "purple": [
              "kinno"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {
            "purple": [
              "magama"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {
            "purple": [
              "välismaale"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {
            "purple": [
              "majja"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "in den"
            ]
          },
          "lv": {
            "purple": [
              "paneb",
              "raha",
              "rahakotti"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {
            "purple": [
              "muuseumi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {
            "purple": [
              "paneb"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {
            "purple": [
              "kesklinna"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "ins"
            ]
          },
          "meaning": {
            "purple": [
              "sisse",
              "kuhu?"
            ]
          },
          "example": {
            "blue": [
              "ins Kino"
            ]
          }
        },
        {
          "word": {
            "green": [
              "im"
            ]
          },
          "meaning": {
            "purple": [
              "sees",
              "kus?"
            ]
          },
          "example": {
            "yellow": [
              "im Kino"
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
              "sees",
              "sees",
              "sees"
            ]
          },
          "example": {
            "green": [
              "in die Stadt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "aufs"
            ]
          },
          "meaning": {
            "purple": [
              "pinnale"
            ]
          },
          "example": {
            "green": [
              "aufs Dach"
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
              "sse",
              "juurde"
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
            "ins"
          ],
          "purple": [
            "in + das",
            "Atceries"
          ]
        },
        {
          "red": [
            "im",
            "Atceries"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "ins"
          ],
          "purple": [
            "in das"
          ],
          "green": [
            "ins"
          ]
        },
        {
          "purple": [
            "Atbild"
          ],
          "green": [
            "Atbild"
          ]
        },
        {
          "yellow": [
            "in den Wald"
          ],
          "green": [
            "in die Schule"
          ]
        },
        {
          "blue": [
            "ins Kino gehen"
          ],
          "red": [
            "im Kino sein"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 27

**Audit ID:** `LRB099-0027`
**Finding Stable ID:** `g2/a1/sv|jung|idx:304|lv, study.explanation, study.tip, study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `jung|idx:304`
**Field / path:** `lv, study.explanation, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** jauns (par cilvēkiem)
**DE reference (read-only):** jung
**CURRENT (captured scope):** {"lv":"Noor (inimeste kohta)","study.explanation":"[\"Põhiidee: jung tähendab noor vanuse mõttes — kasutatakse inimeste ja loomade, mitte asjade kohta.\",\"Jung kirjeldab vanust — vastand on alt (vana).\",\"Eesti keeles on need kaks tähendust eri sõnadega: noor vanuse kohta (jung) ja uus/hiljuti valminud asja kohta (neu).\",\"Asjade kohta, mis on hiljuti loodud või ostetud, kasutatakse neu, mitte jung.\",\"Jung kasutatakse ka ülekantud tähenduses: noor põlvkond, noor paar, noored inimesed.\",\"On olemas ka nimisõna die Jugend (noorsugu, noorus).\"]","study.tip":"[\"jung är för ålder (människor, djur) — om något nyligen skapades använder man neu.\",\"Motsats: jung ↔ alt (ung ↔ gammal).\"]","study.important":"[\"jung beskriver ålder, inte nyhet på föremål.\",\"För nya saker (telefon, bil, hus) använder man neu, inte jung.\",\"Fel: Mein Handy ist jung. → Korrekt: Mein Handy ist neu.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts jung\|idx:304 (jung), ceļš 'lv, study.explanation, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Noor (inimeste kohta)","study.explanation":"[\"Põhiidee: jung tähendab noor vanuse mõttes — kasut…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "jung",
  "lv": "Noor (inimeste kohta)",
  "level": "A1",
  "study": {
    "id": "a1-jung",
    "layout": "standardStudy",
    "translation": "Noor (inimeste kohta)",
    "explanation": [
      "Põhiidee: jung tähendab noor vanuse mõttes — kasutatakse inimeste ja loomade, mitte asjade kohta.",
      "Jung kirjeldab vanust — vastand on alt (vana).",
      "Eesti keeles on need kaks tähendust eri sõnadega: noor vanuse kohta (jung) ja uus/hiljuti valminud asja kohta (neu).",
      "Asjade kohta, mis on hiljuti loodud või ostetud, kasutatakse neu, mitte jung.",
      "Jung kasutatakse ka ülekantud tähenduses: noor põlvkond, noor paar, noored inimesed.",
      "On olemas ka nimisõna die Jugend (noorsugu, noorus)."
    ],
    "examples": [
      {
        "de": "Sie ist noch jung.",
        "lv": "Ta on veel noor."
      },
      {
        "de": "Der Hund ist jung.",
        "lv": "Koer on noor."
      },
      {
        "de": "Wir sind noch jung.",
        "lv": "Me oleme veel noored."
      },
      {
        "de": "Er sieht sehr jung aus.",
        "lv": "Ta näeb väga noor välja."
      },
      {
        "de": "Das ist ein junges Paar.",
        "lv": "See on noor paar."
      },
      {
        "de": "Die junge Frau lächelt.",
        "lv": "Noor naine naeratab."
      },
      {
        "de": "Mein Bruder ist jünger als ich.",
        "lv": "Minu vend on noorem kui mina."
      }
    ],
    "tip": [
      "jung är för ålder (människor, djur) — om något nyligen skapades använder man neu.",
      "Motsats: jung ↔ alt (ung ↔ gammal)."
    ],
    "important": [
      "jung beskriver ålder, inte nyhet på föremål.",
      "För nya saker (telefon, bil, hus) använder man neu, inte jung.",
      "Fel: Mein Handy ist jung. → Korrekt: Mein Handy ist neu."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "jung"
        ],
        "purple": [
          "uus"
        ],
        "green": [
          "neu"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "jung"
            ]
          },
          "lv": {
            "purple": [
              "noor"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "jung"
            ]
          },
          "lv": {
            "purple": [
              "koer"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "jung"
            ]
          },
          "lv": {
            "purple": [
              "noored"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "jung"
            ]
          },
          "lv": {
            "purple": [
              "näeb"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "junge"
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
              "junge"
            ]
          },
          "lv": {
            "purple": [
              "noor"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "jünger"
            ]
          },
          "lv": {
            "purple": [
              "noorem"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "jung"
          ],
          "green": [
            "neu"
          ]
        },
        {
          "blue": [
            "jung"
          ],
          "purple": [
            "alt"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "jung"
          ]
        },
        {
          "green": [
            "neu"
          ],
          "blue": [
            "jung"
          ]
        },
        {
          "blue": [
            "jung"
          ],
          "green": [
            "neu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 28

**Audit ID:** `LRB099-0028`
**Finding Stable ID:** `g2/a1/sv|kein|idx:308|lv, study.explanation, study.tip, study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `kein|idx:308`
**Field / path:** `lv, study.explanation, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** neviens • nekāds
**DE reference (read-only):** kein
**CURRENT (captured scope):** {"lv":"Mitte ükski • Mitte mingi","study.explanation":"[\"Põhiidee: kein on eitav artikkel, mis eitab nimisõna — eesti keeles olenevalt kontekstist mitte ükski või mitte mingi.\",\"Kein käändub samamoodi nagu ein (kein/keine/keinen...) ja seisab nimisõna ees.\",\"Loendatavate nimisõnadega (inimestega) tõlgitakse kein sageli kui mitte ükski (kein Mensch = mitte ükski inimene).\",\"Loendamatute või abstraktsete nimisõnadega tõlgitakse kein sageli kui mitte mingi/ei ole üldse (kein Geld = mitte mingit raha/ei ole raha).\",\"Kein eitab tervet nimisõna, mitte ainult tegusõna (võrdle sõnaga nicht).\"]","study.tip":"[\"kein förnekar ett substantiv (kein + substantiv), nicht förnekar ett verb eller en hel mening.\",\"kein böjs som ein: kein/keine/keinen/keiner.\"]","study.important":"[\"kein + substantiv = \\\"ingen/inte någon X\\\", inte \\\"inte en X\\\".\",\"Fel: Ich habe nicht ein Geld. → Korrekt: Ich habe kein Geld.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts kein\|idx:308 (kein), ceļš 'lv, study.explanation, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Mitte ükski • Mitte mingi","study.explanation":"[\"Põhiidee: kein on eitav artikkel, mis eitab ni…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "kein",
  "lv": "Mitte ükski • Mitte mingi",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "Mitte ükski • Mitte mingi",
    "explanation": [
      "Põhiidee: kein on eitav artikkel, mis eitab nimisõna — eesti keeles olenevalt kontekstist mitte ükski või mitte mingi.",
      "Kein käändub samamoodi nagu ein (kein/keine/keinen...) ja seisab nimisõna ees.",
      "Loendatavate nimisõnadega (inimestega) tõlgitakse kein sageli kui mitte ükski (kein Mensch = mitte ükski inimene).",
      "Loendamatute või abstraktsete nimisõnadega tõlgitakse kein sageli kui mitte mingi/ei ole üldse (kein Geld = mitte mingit raha/ei ole raha).",
      "Kein eitab tervet nimisõna, mitte ainult tegusõna (võrdle sõnaga nicht)."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "Mul ei ole raha."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Piima ei ole enam üldse."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Ükski inimene ei olnud seal."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Mul ei ole aega."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "See ei ole mingi probleem."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "Meil ei ole lapsi."
      }
    ],
    "tip": [
      "kein förnekar ett substantiv (kein + substantiv), nicht förnekar ett verb eller en hel mening.",
      "kein böjs som ein: kein/keine/keinen/keiner."
    ],
    "important": [
      "kein + substantiv = \"ingen/inte någon X\", inte \"inte en X\".",
      "Fel: Ich habe nicht ein Geld. → Korrekt: Ich habe kein Geld."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kein"
        ],
        "purple": [
          "Põhiidee",
          "mitte mingi"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "kein"
            ]
          },
          "lv": {
            "purple": [
              "ei ole"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "keine"
            ]
          },
          "lv": {
            "purple": [
              "piima"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Kein"
            ]
          },
          "lv": {
            "purple": [
              "ükski"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "keine"
            ]
          },
          "lv": {
            "purple": [
              "ei ole"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kein"
            ]
          },
          "lv": {
            "purple": [
              "mingi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "keine"
            ]
          },
          "lv": {
            "purple": [
              "ei ole"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "kein"
          ],
          "green": [
            "nicht"
          ]
        },
        {
          "blue": [
            "kein/keine/keinen/keiner"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "kein"
          ]
        },
        {
          "red": [
            "nicht ein Geld"
          ],
          "blue": [
            "kein Geld"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 29

**Audit ID:** `LRB099-0029`
**Finding Stable ID:** `g2/a1/sv|kennen|idx:310|lv, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `kennen|idx:310`
**Field / path:** `lv, study.explanation, study.examples, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** pazīt
**DE reference (read-only):** kennen
**CURRENT (captured scope):** {"lv":"Tundma","study.explanation":"[\"Põhiidee: Tunda inimest, kohta või asja kogemuse põhjal.\",\"Kennen tähendab peamiselt: isiklik tundmine.\",\"Sageli kirjeldab: inimesi, kohti.\",\"Kennen kasutatakse siis, kui tunned inimest, kohta või asja isiklikust kogemusest.\"]","study.examples":"[{\"de\":\"Ich kenne ihn.\",\"lv\":\"Ma tunnen teda.\"},{\"de\":\"Kennen Sie diese Frau?\",\"lv\":\"Kas te tunnete seda naist?\"},{\"de\":\"Wo habt ihr euch kennengelernt?\",\"lv\":\"Kus te tutvusite?\"},{\"de\":\"Ich kenne ihn.\",\"lv\":\"Ma tunnen teda.\"},{\"de\":\"kennen\",\"lv\":\"Kas sa tunned seda linna?\"}]","study.tip":"[\"kennen = känna\",\"Använd kennen när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"kennen = känna en person/plats.\",\"kennen = känna.\",\"Känna en person, plats eller sak från erfarenhet.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts kennen\|idx:310 (kennen), ceļš 'lv, study.explanation, study.examples, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.tip, study.important, kuru saturs sākas ar '{"lv":"Tundma","study.explanation":"[\"Põhiidee: Tunda inimest, kohta või asja kogemuse põhjal.\",\"Kenn…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "kennen",
  "lv": "Tundma",
  "level": "A1",
  "id": "a1-kennen",
  "study": {
    "id": "a1-kennen-study",
    "layout": "standardStudy",
    "translation": "Tundma",
    "explanation": [
      "Põhiidee: Tunda inimest, kohta või asja kogemuse põhjal.",
      "Kennen tähendab peamiselt: isiklik tundmine.",
      "Sageli kirjeldab: inimesi, kohti.",
      "Kennen kasutatakse siis, kui tunned inimest, kohta või asja isiklikust kogemusest."
    ],
    "examples": [
      {
        "de": "Ich kenne ihn.",
        "lv": "Ma tunnen teda."
      },
      {
        "de": "Kennen Sie diese Frau?",
        "lv": "Kas te tunnete seda naist?"
      },
      {
        "de": "Wo habt ihr euch kennengelernt?",
        "lv": "Kus te tutvusite?"
      },
      {
        "de": "Ich kenne ihn.",
        "lv": "Ma tunnen teda."
      },
      {
        "de": "kennen",
        "lv": "Kas sa tunned seda linna?"
      }
    ],
    "comparison": [
      {
        "word": "kennen",
        "meaning": "Tundma (inimest, kohta, asja)",
        "example": "Ich kenne ihn. – Ma tunnen teda."
      },
      {
        "word": "wissen",
        "meaning": "Teadma (fakti, teavet)",
        "example": "Ich weiß seinen Namen. – Ma tean tema nime."
      }
    ],
    "tip": [
      "kennen = känna",
      "Använd kennen när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "kennen = känna en person/plats.",
      "kennen = känna.",
      "Känna en person, plats eller sak från erfarenhet."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kennen",
          "kennen"
        ],
        "purple": [
          "tundmine"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "kenne"
            ]
          },
          "lv": {
            "purple": [
              "tunnen"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kennen",
              "kennen"
            ]
          },
          "lv": {
            "purple": [
              "kas"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kennen",
              "kennen"
            ]
          },
          "lv": {
            "purple": [
              "kus"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kenne"
            ]
          },
          "lv": {
            "purple": [
              "tunnen"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kennen",
              "kennen"
            ]
          },
          "lv": {
            "purple": [
              "tunned"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "kennen"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "kennen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 30

**Audit ID:** `LRB099-0030`
**Finding Stable ID:** `g2/a1/sv|klein|idx:6|lv; study.examples[1-2].lv|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `klein|idx:6`
**Field / path:** `lv; study.examples[1-2].lv`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** mazs
**DE reference (read-only):** klein
**CURRENT (captured scope):** {"lv":"Väike","study.examples[1-2].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts klein\|idx:6 (klein), ceļš 'lv; study.examples[1-2].lv': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Väike","study.examples[1-2].lv":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "klein",
  "lv": "Väike",
  "level": "A1",
  "study": {
    "id": "a1-klein-study",
    "layout": "standardStudy",
    "translation": "Väike",
    "explanation": [
      "Põhiidee: Väike suuruse või mahu poolest.",
      "Klein tähendab peamiselt: väike suurus.",
      "Sageli kirjeldab: asja/isiku suurust."
    ],
    "examples": [
      {
        "de": "Das Zimmer ist klein.",
        "lv": "Tuba on väike."
      },
      {
        "de": "Das Kind ist noch klein.",
        "lv": "Tuba on väike."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "Laps on veel väike."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "Mul on väike kott."
      },
      {
        "de": "Das Kind ist klein.",
        "lv": "Laps on väike."
      }
    ],
    "tip": [
      "klein = liten",
      "Använd klein när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "klein = mazs izmērā.",
      "klein = mazs."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "klein"
        ],
        "purple": [
          "väike"
        ],
        "green": [
          "Väike"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "klein"
            ]
          },
          "lv": {
            "purple": [
              "väike"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "klein"
            ]
          },
          "lv": {
            "purple": [
              "väike"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kleine"
            ]
          },
          "lv": {
            "purple": [
              "väike"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "klein"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "klein"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 31

**Audit ID:** `LRB099-0031`
**Finding Stable ID:** `g2/a1/sv|können|idx:319|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `können|idx:319`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** varēt • prast
**DE reference (read-only):** können
**CURRENT (captured scope):** {"lv":"Saama • Oskama","study.translation":"Saama • Oskama","study.explanation":"[\"Põhiidee: können tähendab midagi suutma või oskama teha.\",\"Kui jutt on võimest või oskusest, öeldakse eesti keeles sageli oskama.\",\"Kui jutt on võimalusest, öeldakse sageli saama.\",\"Können on modaaltegusõna, seepärast seisab teine tegusõna tavaliselt lause lõpus.\"]","study.examples":"[{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"Ma oskan saksa keelt rääkida.\"},{\"de\":\"Kannst du mir helfen?\",\"lv\":\"Kas sa saad mind aidata?\"},{\"de\":\"Wir können heute kommen.\",\"lv\":\"Me saame täna tulla.\"},{\"de\":\"Er kann gut schwimmen.\",\"lv\":\"Ta oskab hästi ujuda.\"}]","study.comparison":"[{\"word\":\"können\",\"meaning\":\"Saama / oskama\",\"example\":\"Ich kann schwimmen. = Jag kan simma.\"},{\"word\":\"dürfen\",\"meaning\":\"Tohtima\",\"example\":\"Darf ich gehen? = Får jag gå?\"},{\"word\":\"müssen\",\"meaning\":\"Vajama / pidama\",\"example\":\"Ich muss lernen. = Jag måste lära mig.\"},{\"word\":\"wissen\",\"meaning\":\"Teadma\",\"example\":\"Ich weiß das. = Jag vet det.\"}]","study.tip":"{\"text\":\"Atceries: prasme/iespēja → können.\"}","study.important":"[\"können är inte detsamma som dürfen. können = kunna/prova, dürfen = få.\",\"I en mening med können står det andra verbet ofta sist: Ich kann schwimmen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts können\|idx:319 (können), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Saama • Oskama","study.translation":"Saama • Oskama","study.explanation":"[\"Põhiidee: können täh…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "können",
  "lv": "Saama • Oskama",
  "level": "A1",
  "study": {
    "id": "a1-können",
    "layout": "standardStudy",
    "translation": "Saama • Oskama",
    "explanation": [
      "Põhiidee: können tähendab midagi suutma või oskama teha.",
      "Kui jutt on võimest või oskusest, öeldakse eesti keeles sageli oskama.",
      "Kui jutt on võimalusest, öeldakse sageli saama.",
      "Können on modaaltegusõna, seepärast seisab teine tegusõna tavaliselt lause lõpus."
    ],
    "examples": [
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Ma oskan saksa keelt rääkida."
      },
      {
        "de": "Kannst du mir helfen?",
        "lv": "Kas sa saad mind aidata?"
      },
      {
        "de": "Wir können heute kommen.",
        "lv": "Me saame täna tulla."
      },
      {
        "de": "Er kann gut schwimmen.",
        "lv": "Ta oskab hästi ujuda."
      }
    ],
    "comparison": [
      {
        "word": "können",
        "meaning": "Saama / oskama",
        "example": "Ich kann schwimmen. = Jag kan simma."
      },
      {
        "word": "dürfen",
        "meaning": "Tohtima",
        "example": "Darf ich gehen? = Får jag gå?"
      },
      {
        "word": "müssen",
        "meaning": "Vajama / pidama",
        "example": "Ich muss lernen. = Jag måste lära mig."
      },
      {
        "word": "wissen",
        "meaning": "Teadma",
        "example": "Ich weiß das. = Jag vet det."
      }
    ],
    "tip": {
      "text": "Atceries: prasme/iespēja → können."
    },
    "important": [
      "können är inte detsamma som dürfen. können = kunna/prova, dürfen = få.",
      "I en mening med können står det andra verbet ofta sist: Ich kann schwimmen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "können"
        ],
        "purple": [
          "saama",
          "oskama"
        ],
        "green": [
          "Põhiidee",
          "oskusest",
          "võimalusest"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "kann"
            ]
          },
          "lv": {
            "purple": [
              "oskan"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Kannst"
            ]
          },
          "lv": {
            "purple": [
              "saad"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "können"
            ]
          },
          "lv": {
            "purple": [
              "saame"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kann"
            ]
          },
          "lv": {
            "purple": [
              "oskab"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "können"
            ]
          },
          "meaning": {
            "purple": [
              "saama",
              "oskama"
            ]
          },
          "example": {
            "blue": [
              "kann"
            ],
            "purple": [
              "oskan"
            ]
          }
        },
        {
          "word": {
            "green": [
              "dürfen"
            ]
          },
          "meaning": {
            "purple": [
              "tohtima"
            ]
          },
          "example": {
            "red": [
              "Darf",
              "tohin"
            ]
          }
        },
        {
          "word": {
            "green": [
              "müssen"
            ]
          },
          "meaning": {
            "purple": [
              "vajama"
            ]
          },
          "example": {
            "yellow": [
              "muss",
              "Ich"
            ]
          }
        },
        {
          "word": {
            "green": [
              "wissen"
            ]
          },
          "meaning": {
            "purple": [
              "teadma"
            ]
          },
          "example": {
            "green": [
              "weiß",
              "tean"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "können"
          ],
          "purple": [
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "können"
          ],
          "red": [
            "dürfen"
          ],
          "purple": [
            "können",
            "können",
            "können"
          ]
        },
        {
          "blue": [
            "kann"
          ],
          "green": [
            "schwimmen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 32

**Audit ID:** `LRB099-0032`
**Finding Stable ID:** `g2/a1/sv|kosten|idx:320|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `kosten|idx:320`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** maksāt
**DE reference (read-only):** kosten
**CURRENT (captured scope):** {"lv":"Maksma","study.translation":"Maksma","study.explanation":"[\"Põhiidee: kosten tähendab maksma nii ja nii palju — jutt on asja hinnast.\",\"Seda sõna kasutatakse, kui küsitakse või öeldakse, kui palju miski maksab, mitte siis, kui inimene teeb makse.\",\"Hinnaküsimus algab saksa keeles sageli sõnadega Was kostet...?\",\"Eesti sõna maksma on selles kontekstis õige: Das kostet 5 Euro. = See maksab 5 eurot.\",\"Kui inimene annab kauba või teenuse eest raha, kasutatakse saksa keeles bezahlen või zahlen.\"]","study.examples":"[{\"de\":\"Das kostet 5 Euro.\",\"lv\":\"See maksab 5 eurot.\"},{\"de\":\"Was kostet das?\",\"lv\":\"Kui palju see maksab?\"},{\"de\":\"Wie viel kostet der Pullover?\",\"lv\":\"Kui palju kampsun maksab?\"},{\"de\":\"Das Essen kostet nicht viel.\",\"lv\":\"Toit ei maksa palju.\"},{\"de\":\"Ich bezahle die Rechnung.\",\"lv\":\"Ma maksan arve.\"},{\"de\":\"Kann ich bar bezahlen?\",\"lv\":\"Kas ma saan sularahas maksta?\"},{\"de\":\"Er zahlt mit Karte.\",\"lv\":\"Ta maksab kaardiga.\"},{\"de\":\"Ich zahle gleich.\",\"lv\":\"Ma maksan kohe.\"}]","study.comparison":"[{\"word\":\"kosten\",\"meaning\":\"Maksma (hinda) • Kui palju maksab\",\"example\":\"Das kostet 5 Euro. = Det kostar 5 euro.\"},{\"word\":\"bezahlen\",\"meaning\":\"Maksma • Ära maksma (raha)\",\"example\":\"Ich bezahle die Rechnung. = Jag betalar räkningen.\"},{\"word\":\"zahlen\",\"meaning\":\"Maksma • Ära maksma\",\"example\":\"Kann ich bar zahlen? = Kan jag betala kontant?\"},{\"word\":\"Was kostet...?\",\"meaning\":\"Kui palju maksab...?\",\"example\":\"Was kostet das Buch? = Hur mycket kostar boken?\"}]","study.tip":"[\"Kom ihåg: fråga om pris → kosten (Was kostet das?).\",\"Kom ihåg: att göra betalningen → bezahlen / zahlen (Ich bezahle die Rechnung.).\"]","study.important":"[\"kosten och bezahlen är inte synonymer: kosten = hur mycket kostar det; bezahlen = betala pengar.\",\"På svenska använder man ofta betala i båda fallen, men på tyska måste du välja enligt situationen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts kosten\|idx:320 (kosten), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Maksma","study.translation":"Maksma","study.explanation":"[\"Põhiidee: kosten tähendab maksma nii…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "kosten",
  "lv": "Maksma",
  "level": "A1",
  "study": {
    "id": "a1-kosten",
    "layout": "standardStudy",
    "translation": "Maksma",
    "explanation": [
      "Põhiidee: kosten tähendab maksma nii ja nii palju — jutt on asja hinnast.",
      "Seda sõna kasutatakse, kui küsitakse või öeldakse, kui palju miski maksab, mitte siis, kui inimene teeb makse.",
      "Hinnaküsimus algab saksa keeles sageli sõnadega Was kostet...?",
      "Eesti sõna maksma on selles kontekstis õige: Das kostet 5 Euro. = See maksab 5 eurot.",
      "Kui inimene annab kauba või teenuse eest raha, kasutatakse saksa keeles bezahlen või zahlen."
    ],
    "examples": [
      {
        "de": "Das kostet 5 Euro.",
        "lv": "See maksab 5 eurot."
      },
      {
        "de": "Was kostet das?",
        "lv": "Kui palju see maksab?"
      },
      {
        "de": "Wie viel kostet der Pullover?",
        "lv": "Kui palju kampsun maksab?"
      },
      {
        "de": "Das Essen kostet nicht viel.",
        "lv": "Toit ei maksa palju."
      },
      {
        "de": "Ich bezahle die Rechnung.",
        "lv": "Ma maksan arve."
      },
      {
        "de": "Kann ich bar bezahlen?",
        "lv": "Kas ma saan sularahas maksta?"
      },
      {
        "de": "Er zahlt mit Karte.",
        "lv": "Ta maksab kaardiga."
      },
      {
        "de": "Ich zahle gleich.",
        "lv": "Ma maksan kohe."
      }
    ],
    "comparison": [
      {
        "word": "kosten",
        "meaning": "Maksma (hinda) • Kui palju maksab",
        "example": "Das kostet 5 Euro. = Det kostar 5 euro."
      },
      {
        "word": "bezahlen",
        "meaning": "Maksma • Ära maksma (raha)",
        "example": "Ich bezahle die Rechnung. = Jag betalar räkningen."
      },
      {
        "word": "zahlen",
        "meaning": "Maksma • Ära maksma",
        "example": "Kann ich bar zahlen? = Kan jag betala kontant?"
      },
      {
        "word": "Was kostet...?",
        "meaning": "Kui palju maksab...?",
        "example": "Was kostet das Buch? = Hur mycket kostar boken?"
      }
    ],
    "tip": [
      "Kom ihåg: fråga om pris → kosten (Was kostet das?).",
      "Kom ihåg: att göra betalningen → bezahlen / zahlen (Ich bezahle die Rechnung.)."
    ],
    "important": [
      "kosten och bezahlen är inte synonymer: kosten = hur mycket kostar det; bezahlen = betala pengar.",
      "På svenska använder man ofta betala i båda fallen, men på tyska måste du välja enligt situationen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kosten"
        ],
        "purple": [
          "maksma",
          "Põhiidee",
          "Põhiidee"
        ],
        "green": [
          "Was kostet"
        ],
        "yellow": [
          "bezahlen",
          "zahlen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {
            "purple": [
              "maksab"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {
            "purple": [
              "maksab"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {
            "purple": [
              "maksab"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {
            "purple": [
              "ei maksa"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "bezahle"
            ]
          },
          "lv": {
            "purple": [
              "maksan"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "bezahlen"
            ]
          },
          "lv": {
            "purple": [
              "maksta"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "zahlt"
            ]
          },
          "lv": {
            "purple": [
              "maksab"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "zahle"
            ]
          },
          "lv": {
            "purple": [
              "maksan"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "kosten"
            ]
          },
          "meaning": {
            "purple": [
              "maksma",
              "hinda",
              "kui palju maksab"
            ]
          },
          "example": {
            "blue": [
              "kostet"
            ],
            "purple": [
              "maksab"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bezahlen"
            ]
          },
          "meaning": {
            "purple": [
              "maksma",
              "maksma"
            ]
          },
          "example": {
            "yellow": [
              "bezahle"
            ],
            "purple": [
              "maksan"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zahlen"
            ]
          },
          "meaning": {
            "purple": [
              "maksma",
              "maksma"
            ]
          },
          "example": {
            "yellow": [
              "zahlen"
            ],
            "purple": [
              "maksta"
            ]
          }
        },
        {
          "word": {
            "green": [
              "Was kostet"
            ]
          },
          "meaning": {
            "purple": [
              "kui palju maksab"
            ]
          },
          "example": {
            "blue": [
              "kostet"
            ],
            "purple": [
              "maksab"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "kosten",
            "Was kostet"
          ],
          "purple": [
            "Atceries"
          ]
        },
        {
          "yellow": [
            "bezahlen",
            "zahlen"
          ],
          "purple": [
            "Atceries"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "kosten"
          ],
          "yellow": [
            "bezahlen"
          ],
          "purple": [
            "kosten",
            "maksā"
          ]
        },
        {
          "purple": [
            "maksāt",
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

**Audit ID:** `LRB099-0033`
**Finding Stable ID:** `g2/a1/sv|Laden|idx:349|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `Laden|idx:349`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** veikals
**DE reference (read-only):** Laden
**CURRENT (captured scope):** {"lv":"Pood","study.translation":"Pood","study.explanation":"[\"Põhiidee: der Laden suure algustähega ja artikliga der on nimisõna — väike pood.\",\"Laden väikese algustähega on tegusõna — peale laadima või laadima.\",\"Der Laden tähistab igapäevaelus sageli väikest poodi (im Laden einkaufen = poes sisseoste tegema).\",\"Mitmuses: die Läden.\"]","study.examples":"[{\"de\":\"Ich gehe in den Laden.\",\"lv\":\"Ma lähen poodi.\"},{\"de\":\"Der Laden ist geschlossen.\",\"lv\":\"Pood on suletud.\"},{\"de\":\"Es gibt viele Läden hier.\",\"lv\":\"Siin on palju poode.\"},{\"de\":\"Ich muss mein Handy laden.\",\"lv\":\"Ma pean telefoni laadima.\"}]","study.tip":"[\"der Laden med stor bokstav — substantiv (butik).\",\"laden med liten bokstav — verb (ladda/fylla).\"]","study.important":"[\"der Laden = butik (substantiv).\",\"laden = ladda/fylla (verb).\",\"Mitmuses: die Läden.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Laden\|idx:349 (Laden), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Pood","study.translation":"Pood","study.explanation":"[\"Põhiidee: der Laden suure algustähega ja…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Laden",
  "de_article": "der",
  "de_plural": "die Läden",
  "lv": "Pood",
  "level": "A1",
  "study": {
    "id": "a1-laden-study",
    "layout": "standardStudy",
    "translation": "Pood",
    "explanation": [
      "Põhiidee: der Laden suure algustähega ja artikliga der on nimisõna — väike pood.",
      "Laden väikese algustähega on tegusõna — peale laadima või laadima.",
      "Der Laden tähistab igapäevaelus sageli väikest poodi (im Laden einkaufen = poes sisseoste tegema).",
      "Mitmuses: die Läden."
    ],
    "examples": [
      {
        "de": "Ich gehe in den Laden.",
        "lv": "Ma lähen poodi."
      },
      {
        "de": "Der Laden ist geschlossen.",
        "lv": "Pood on suletud."
      },
      {
        "de": "Es gibt viele Läden hier.",
        "lv": "Siin on palju poode."
      },
      {
        "de": "Ich muss mein Handy laden.",
        "lv": "Ma pean telefoni laadima."
      }
    ],
    "tip": [
      "der Laden med stor bokstav — substantiv (butik).",
      "laden med liten bokstav — verb (ladda/fylla)."
    ],
    "important": [
      "der Laden = butik (substantiv).",
      "laden = ladda/fylla (verb).",
      "Mitmuses: die Läden."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Laden"
        ],
        "purple": [
          "pood"
        ],
        "green": [
          "laden"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Laden"
            ]
          },
          "lv": {
            "purple": [
              "poodi"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Laden"
            ]
          },
          "lv": {
            "purple": [
              "pood"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Läden"
            ]
          },
          "lv": {
            "purple": [
              "poode"
            ]
          }
        },
        {
          "de": {
            "green": [
              "laden"
            ]
          },
          "lv": {
            "purple": [
              "laadima"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "der Laden"
          ]
        },
        {
          "green": [
            "laden"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "der Laden"
          ]
        },
        {
          "green": [
            "laden"
          ]
        },
        {
          "blue": [
            "die Läden"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 34

**Audit ID:** `LRB099-0034`
**Finding Stable ID:** `g2/a1/sv|Land|idx:351|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `Land|idx:351`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** valsts • zeme
**DE reference (read-only):** Land
**CURRENT (captured scope):** {"lv":"Riik • Maa","study.translation":"Riik • Maa","study.explanation":"[\"Põhiidee: das Land tähendab kõige sagedamini riiki või maad väljaspool linna.\",\"Kui jutt on Saksamaast, Eestist või mõnest muust piiridega territooriumist, tõlgi kui riik.\",\"Kui jutt on maakohast või maast linna vastandina, tõlgitakse see kui maa või maakoht.\",\"Kontekst määrab, kas mõtleme riiki, maakohta või maad.\"]","study.examples":"[{\"de\":\"Deutschland ist ein schönes Land.\",\"lv\":\"Saksamaa on ilus riik.\"},{\"de\":\"Ich komme aus einem kleinen Land.\",\"lv\":\"Ma olen pärit väikesest riigist.\"},{\"de\":\"Wir fahren aufs Land.\",\"lv\":\"Me sõidame maale.\"},{\"de\":\"Auf dem Land ist es ruhig.\",\"lv\":\"Maal on rahulik.\"}]","study.comparison":"[{\"word\":\"das Land\",\"meaning\":\"Riik / maa / maapiirkond\",\"example\":\"Deutschland ist ein Land.\"},{\"word\":\"die Stadt\",\"meaning\":\"Linn\",\"example\":\"Jag bor i staden.\"},{\"word\":\"das Dorf\",\"meaning\":\"Küla\",\"example\":\"Han bor i en by.\"},{\"word\":\"die Erde\",\"meaning\":\"Maa / planeet\",\"example\":\"Jorden är rund.\"}]","study.tip":"{\"text\":\"Atceries: valsts → das Land; pilsēta → die Stadt.\"}","study.important":"[\"aufs Land betyder \\\"ut på landet\\\", inte \\\"till nationen\\\".\",\"das Land är inte detsamma som die Stadt.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Land\|idx:351 (Land), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Riik • Maa","study.translation":"Riik • Maa","study.explanation":"[\"Põhiidee: das Land tähendab …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Land",
  "de_article": "das",
  "de_plural": "die Länder",
  "lv": "Riik • Maa",
  "level": "A1",
  "study": {
    "id": "a1-land",
    "layout": "standardStudy",
    "translation": "Riik • Maa",
    "explanation": [
      "Põhiidee: das Land tähendab kõige sagedamini riiki või maad väljaspool linna.",
      "Kui jutt on Saksamaast, Eestist või mõnest muust piiridega territooriumist, tõlgi kui riik.",
      "Kui jutt on maakohast või maast linna vastandina, tõlgitakse see kui maa või maakoht.",
      "Kontekst määrab, kas mõtleme riiki, maakohta või maad."
    ],
    "examples": [
      {
        "de": "Deutschland ist ein schönes Land.",
        "lv": "Saksamaa on ilus riik."
      },
      {
        "de": "Ich komme aus einem kleinen Land.",
        "lv": "Ma olen pärit väikesest riigist."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Me sõidame maale."
      },
      {
        "de": "Auf dem Land ist es ruhig.",
        "lv": "Maal on rahulik."
      }
    ],
    "comparison": [
      {
        "word": "das Land",
        "meaning": "Riik / maa / maapiirkond",
        "example": "Deutschland ist ein Land."
      },
      {
        "word": "die Stadt",
        "meaning": "Linn",
        "example": "Jag bor i staden."
      },
      {
        "word": "das Dorf",
        "meaning": "Küla",
        "example": "Han bor i en by."
      },
      {
        "word": "die Erde",
        "meaning": "Maa / planeet",
        "example": "Jorden är rund."
      }
    ],
    "tip": {
      "text": "Atceries: valsts → das Land; pilsēta → die Stadt."
    },
    "important": [
      "aufs Land betyder \"ut på landet\", inte \"till nationen\".",
      "das Land är inte detsamma som die Stadt."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Land",
          "Land"
        ],
        "purple": [
          "Põhiidee",
          "maad",
          "maa",
          "riik"
        ],
        "green": [
          "Saksamaast",
          "Eestist",
          "linna"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Land"
            ],
            "green": [
              "Deutschland"
            ]
          },
          "lv": {
            "purple": [
              "riik"
            ],
            "green": [
              "Saksamaa"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Land"
            ]
          },
          "lv": {
            "purple": [
              "riigist"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Land"
            ]
          },
          "lv": {
            "purple": [
              "maale"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Land"
            ]
          },
          "lv": {
            "purple": [
              "maal"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "das Land"
            ]
          },
          "meaning": {
            "purple": [
              "riik",
              "maa",
              "maa"
            ]
          },
          "example": {
            "blue": [
              "Land"
            ]
          }
        },
        {
          "word": {
            "green": [
              "die Stadt"
            ]
          },
          "meaning": {
            "purple": [
              "linn"
            ]
          },
          "example": {
            "yellow": [
              "Stadt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "das Dorf"
            ]
          },
          "meaning": {
            "purple": [
              "küla"
            ]
          },
          "example": {
            "green": [
              "Dorf"
            ]
          }
        },
        {
          "word": {
            "green": [
              "die Erde"
            ]
          },
          "meaning": {
            "purple": [
              "maa",
              "planeet"
            ]
          },
          "example": {
            "red": [
              "Erde"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "das Land"
          ],
          "purple": [
            "Atceries"
          ],
          "yellow": [
            "die Stadt",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "aufs Land"
          ],
          "purple": [
            "aufs"
          ],
          "red": [
            "aufs"
          ]
        },
        {
          "blue": [
            "das Land"
          ],
          "yellow": [
            "die Stadt"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 35

**Audit ID:** `LRB099-0035`
**Finding Stable ID:** `g2/a1/sv|lang|idx:352|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `lang|idx:352`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** garš • ilgs
**DE reference (read-only):** lang
**CURRENT (captured scope):** {"lv":"Pikk • Kauakestev","study.translation":"Pikk • Kauakestev","study.explanation":"[\"Põhiidee: lang tähendab ruumiliselt pikk, aja mõttes pikk või kestev.\",\"Kui jutt on suurusest või kaugusest, lang = pikk (ein langer Tisch = pikk laud).\",\"Kui jutt on ajalisest kestusest, lang = pikk (ein langer Tag = pikk päev).\",\"Fraasis den ganzen Tag lang tähendab see kogu päeva (jooksul).\",\"Eesti keeles öeldakse nii 'pikk laud' kui ka 'pikk päev' ning saksa lang katab samamoodi mõlemad tähendused.\"]","study.examples":"[{\"de\":\"Der Tisch ist sehr lang.\",\"lv\":\"Laud on väga pikk.\"},{\"de\":\"Der Film war sehr lang.\",\"lv\":\"Film oli väga pikk.\"},{\"de\":\"Wie lange dauert es?\",\"lv\":\"Kui kaua see kestab?\"},{\"de\":\"Sie hat lange Haare.\",\"lv\":\"Tal on pikad juuksed.\"},{\"de\":\"Ich warte schon lange.\",\"lv\":\"Ma ootan juba kaua.\"},{\"de\":\"Den ganzen Tag lang.\",\"lv\":\"Kogu päev (otsa).\"}]","study.tip":"[\"För mätning eller avstånd (hår, väg, bord) → lång.\",\"För tid (dag, väntan, film) → långvarig.\"]","study.important":"[\"lang = lång (mätning) ELLER lång (tid) — beroende på sammanhang.\",\"wie lange = hur länge (fråga om tid, inte mätning).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts lang\|idx:352 (lang), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Pikk • Kauakestev","study.translation":"Pikk • Kauakestev","study.explanation":"[\"Põhiidee: lang…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "lang",
  "lv": "Pikk • Kauakestev",
  "level": "A1",
  "study": {
    "id": "a1-lang",
    "layout": "standardStudy",
    "translation": "Pikk • Kauakestev",
    "explanation": [
      "Põhiidee: lang tähendab ruumiliselt pikk, aja mõttes pikk või kestev.",
      "Kui jutt on suurusest või kaugusest, lang = pikk (ein langer Tisch = pikk laud).",
      "Kui jutt on ajalisest kestusest, lang = pikk (ein langer Tag = pikk päev).",
      "Fraasis den ganzen Tag lang tähendab see kogu päeva (jooksul).",
      "Eesti keeles öeldakse nii 'pikk laud' kui ka 'pikk päev' ning saksa lang katab samamoodi mõlemad tähendused."
    ],
    "examples": [
      {
        "de": "Der Tisch ist sehr lang.",
        "lv": "Laud on väga pikk."
      },
      {
        "de": "Der Film war sehr lang.",
        "lv": "Film oli väga pikk."
      },
      {
        "de": "Wie lange dauert es?",
        "lv": "Kui kaua see kestab?"
      },
      {
        "de": "Sie hat lange Haare.",
        "lv": "Tal on pikad juuksed."
      },
      {
        "de": "Ich warte schon lange.",
        "lv": "Ma ootan juba kaua."
      },
      {
        "de": "Den ganzen Tag lang.",
        "lv": "Kogu päev (otsa)."
      }
    ],
    "tip": [
      "För mätning eller avstånd (hår, väg, bord) → lång.",
      "För tid (dag, väntan, film) → långvarig."
    ],
    "important": [
      "lang = lång (mätning) ELLER lång (tid) — beroende på sammanhang.",
      "wie lange = hur länge (fråga om tid, inte mätning)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lang"
        ],
        "purple": [
          "pikk",
          "pikk"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "lang"
            ]
          },
          "lv": {
            "purple": [
              "pikk"
            ]
          }
        },
        {
          "de": {
            "green": [
              "lang"
            ]
          },
          "lv": {
            "purple": [
              "pikk"
            ]
          }
        },
        {
          "de": {
            "green": [
              "lange"
            ]
          },
          "lv": {
            "purple": [
              "kaua"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "lange"
            ]
          },
          "lv": {
            "purple": [
              "pikad"
            ]
          }
        },
        {
          "de": {
            "green": [
              "lange"
            ]
          },
          "lv": {
            "purple": [
              "kaua"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "lang"
            ]
          },
          "lv": {
            "purple": [
              "kogu"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "Par"
          ]
        },
        {
          "green": [
            "Par"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "lang",
            "lang"
          ]
        },
        {
          "green": [
            "wie lange"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 36

**Audit ID:** `LRB099-0036`
**Finding Stable ID:** `g2/a1/sv|lassen|idx:356|study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `lassen|idx:356`
**Field / path:** `study.*`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** atstāt • ļaut
**DE reference (read-only):** lassen
**CURRENT (captured scope):** {"study.translation":"Jätma • Laskma","study.explanation":"[\"Põhiidee: lassen tähendab midagi jätma või laskma millelgi juhtuda.\",\"Kui miski jääb paigale, tõlgitakse lassen kui jätma.\",\"Kui kellelegi antakse luba, tõlgitakse lassen kui lubama.\",\"Vestlustes on väga sage vorm Lass mich! = Jäta mind rahule! või Lase mind!\"]","study.examples":"[{\"de\":\"Ich lasse die Tasche hier.\",\"lv\":\"Ma jätan koti siia.\"},{\"de\":\"Lass das bitte auf dem Tisch.\",\"lv\":\"Jäta see palun lauale.\"},{\"de\":\"Meine Eltern lassen mich gehen.\",\"lv\":\"Vanemad lasevad mul minna.\"},{\"de\":\"Lass mich in Ruhe!\",\"lv\":\"Jäta mind rahule!\"}]","study.comparison":"[{\"word\":\"lassen\",\"meaning\":\"Jätma / laskma\",\"example\":\"Jag lämnar det här.\"},{\"word\":\"bleiben\",\"meaning\":\"Jääma\",\"example\":\"Jag stannar här.\"},{\"word\":\"erlauben\",\"meaning\":\"Lubama\",\"example\":\"Hon tillåter mig det.\"},{\"word\":\"geben\",\"meaning\":\"Andma\",\"example\":\"Ge mig boken.\"}]","study.tip":"{\"text\":\"Atceries: kaut kas paliek → lassen; kādam atļauj → lassen.\"}","study.important":"[\"lassen är inte bara \\\"lämna\\\". Det betyder ofta även \\\"låta\\\".\",\"Lass mich in Ruhe! är mycket vanlig: \\\"Låt mig vara!\\\"\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts lassen\|idx:356 (lassen), ceļš 'study.*': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"study.translation":"Jätma • Laskma","study.explanation":"[\"Põhiidee: lassen tähendab midagi jätma või…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "lassen",
  "lv": "Jätma • Laskma",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "Jätma • Laskma",
    "explanation": [
      "Põhiidee: lassen tähendab midagi jätma või laskma millelgi juhtuda.",
      "Kui miski jääb paigale, tõlgitakse lassen kui jätma.",
      "Kui kellelegi antakse luba, tõlgitakse lassen kui lubama.",
      "Vestlustes on väga sage vorm Lass mich! = Jäta mind rahule! või Lase mind!"
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "Ma jätan koti siia."
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "Jäta see palun lauale."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "Vanemad lasevad mul minna."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "Jäta mind rahule!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "Jätma / laskma",
        "example": "Jag lämnar det här."
      },
      {
        "word": "bleiben",
        "meaning": "Jääma",
        "example": "Jag stannar här."
      },
      {
        "word": "erlauben",
        "meaning": "Lubama",
        "example": "Hon tillåter mig det."
      },
      {
        "word": "geben",
        "meaning": "Andma",
        "example": "Ge mig boken."
      }
    ],
    "tip": {
      "text": "Atceries: kaut kas paliek → lassen; kādam atļauj → lassen."
    },
    "important": [
      "lassen är inte bara \"lämna\". Det betyder ofta även \"låta\".",
      "Lass mich in Ruhe! är mycket vanlig: \"Låt mig vara!\""
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lassen",
          "Lass mich"
        ],
        "purple": [
          "jätma",
          "laskma",
          "Jäta mind rahule"
        ],
        "green": [
          "Põhiidee",
          "luba"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "lasse"
            ]
          },
          "lv": {
            "purple": [
              "jätan"
            ],
            "yellow": [
              "koti"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Lass"
            ]
          },
          "lv": {
            "purple": [
              "jäta"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "lassen"
            ]
          },
          "lv": {
            "purple": [
              "vanemad"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Lass mich"
            ]
          },
          "lv": {
            "purple": [
              "jäta mind rahule"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "lassen"
            ]
          },
          "meaning": {
            "purple": [
              "jätma",
              "laskma"
            ]
          },
          "example": {
            "blue": [
              "lasse"
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
              "jääma"
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
              "erlauben"
            ]
          },
          "meaning": {
            "purple": [
              "lubama"
            ]
          },
          "example": {
            "yellow": [
              "erlaubt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "geben"
            ]
          },
          "meaning": {
            "purple": [
              "andma"
            ]
          },
          "example": {
            "red": [
              "Gib"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "lassen"
          ],
          "purple": [
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "lassen"
          ],
          "purple": [
            "lassen",
            "lassen"
          ]
        },
        {
          "blue": [
            "Lass mich in Ruhe"
          ],
          "purple": [
            "Lass"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 37

**Audit ID:** `LRB099-0037`
**Finding Stable ID:** `g2/a1/sv|laufen|idx:357|study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `laufen|idx:357`
**Field / path:** `study.*`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** skriet • darboties
**DE reference (read-only):** laufen
**CURRENT (captured scope):** {"study.translation":"Jooksma • Töötama","study.explanation":"[\"Põhiidee: laufen tähendab jooksma, aga seadmete puhul võib see tähendada töötama.\",\"Inimese või looma kohta tähendab laufen sageli jooksma või kiires sammus minema.\",\"Filmi, masina või programmi kohta tähendab laufen, et see töötab või käib.\",\"Jalgsi liikumise puhul võrreldakse A1 tasemel kõige sagedamini sõnu gehen ja laufen.\"]","study.examples":"[{\"de\":\"Er läuft sehr schnell.\",\"lv\":\"Ta jookseb väga kiiresti.\"},{\"de\":\"Die Kinder laufen im Park.\",\"lv\":\"Lapsed jooksevad pargis.\"},{\"de\":\"Der Film läuft schon.\",\"lv\":\"Film juba käib.\"},{\"de\":\"Die Maschine läuft gut.\",\"lv\":\"Masin töötab hästi.\"}]","study.comparison":"[{\"word\":\"laufen\",\"meaning\":\"Jooksma / töötama\",\"example\":\"Han springer snabbt.\"},{\"word\":\"gehen\",\"meaning\":\"Jalgsi minema\",\"example\":\"Jag går hem.\"},{\"word\":\"fahren\",\"meaning\":\"Sõidukiga sõitma\",\"example\":\"Jag åker med buss.\"},{\"word\":\"funktionieren\",\"meaning\":\"Toimima\",\"example\":\"Det fungerar bra.\"}]","study.tip":"{\"text\":\"Atceries: kājas ātri → laufen; transports → fahren.\"}","study.important":"[\"laufen är inte bara \\\"springa\\\". För en film eller enhet kan det betyda \\\"gå\\\" eller \\\"fungera\\\".\",\"Ich laufe betyder rörelse till fots, inte körning.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts laufen\|idx:357 (laufen), ceļš 'study.*': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"study.translation":"Jooksma • Töötama","study.explanation":"[\"Põhiidee: laufen tähendab jooksma, aga …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "laufen",
  "lv": "Jooksma • Töötama",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "Jooksma • Töötama",
    "explanation": [
      "Põhiidee: laufen tähendab jooksma, aga seadmete puhul võib see tähendada töötama.",
      "Inimese või looma kohta tähendab laufen sageli jooksma või kiires sammus minema.",
      "Filmi, masina või programmi kohta tähendab laufen, et see töötab või käib.",
      "Jalgsi liikumise puhul võrreldakse A1 tasemel kõige sagedamini sõnu gehen ja laufen."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "Ta jookseb väga kiiresti."
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "Lapsed jooksevad pargis."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "Film juba käib."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "Masin töötab hästi."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "Jooksma / töötama",
        "example": "Han springer snabbt."
      },
      {
        "word": "gehen",
        "meaning": "Jalgsi minema",
        "example": "Jag går hem."
      },
      {
        "word": "fahren",
        "meaning": "Sõidukiga sõitma",
        "example": "Jag åker med buss."
      },
      {
        "word": "funktionieren",
        "meaning": "Toimima",
        "example": "Det fungerar bra."
      }
    ],
    "tip": {
      "text": "Atceries: kājas ātri → laufen; transports → fahren."
    },
    "important": [
      "laufen är inte bara \"springa\". För en film eller enhet kan det betyda \"gå\" eller \"fungera\".",
      "Ich laufe betyder rörelse till fots, inte körning."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "laufen"
        ],
        "purple": [
          "jooksma",
          "Põhiidee",
          "minema"
        ],
        "green": [
          "Inimese",
          "looma",
          "filmi",
          "masina",
          "programmi"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "läuft"
            ]
          },
          "lv": {
            "purple": [
              "jookseb"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "laufen"
            ]
          },
          "lv": {
            "purple": [
              "jooksevad"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "läuft"
            ]
          },
          "lv": {
            "purple": [
              "film"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "läuft"
            ]
          },
          "lv": {
            "purple": [
              "masin"
            ]
          }
        }
      ],
      "comparison": [
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
            "blue": [
              "läuft"
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
              "minema"
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
              "fahren"
            ]
          },
          "meaning": {
            "purple": [
              "sõitma"
            ]
          },
          "example": {
            "red": [
              "fahre"
            ]
          }
        },
        {
          "word": {
            "green": [
              "funktionieren"
            ]
          },
          "meaning": {
            "purple": [
              "toimima"
            ]
          },
          "example": {
            "green": [
              "funktioniert"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "laufen"
          ],
          "purple": [
            "Atceries"
          ],
          "red": [
            "fahren",
            "transport"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "laufen"
          ],
          "purple": [
            "laufen",
            "laufen",
            "laufen"
          ]
        },
        {
          "blue": [
            "Ich laufe"
          ],
          "purple": [
            "Ich"
          ],
          "red": [
            "Ich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 38

**Audit ID:** `LRB099-0038`
**Finding Stable ID:** `g2/a1/sv|laut|idx:358|study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `laut|idx:358`
**Field / path:** `study.*`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** skaļš
**DE reference (read-only):** laut
**CURRENT (captured scope):** {"study.translation":"Vali","study.explanation":"[\"Põhiidee: Omadussõna väikese algustähega. Kirjeldab intensiivsust — kui vali on heli või kõne.\",\"Laut tähendab peamiselt: vali heli.\",\"Sageli kirjeldab: omadussõna.\",\"Laut tähendab peamiselt: helisignaal.\",\"Sageli kirjeldab: nimisõna (der).\",\"Laut väikese algustähega on omadussõna — see kirjeldab, kui vali on heli (Die Musik ist laut = muusika on vali).\",\"Der Laut suure algustähega ja artikliga der on nimisõna — see tähendab heli kui asja või signaali (Der Laut ist schön = heli on ilus).\",\"Mitmuses: die Laute.\"]","study.examples":"[{\"de\":\"Die Musik ist laut.\",\"lv\":\"Muusika on vali.\"},{\"de\":\"Die Musik ist laut.\",\"lv\":\"Muusika on vali.\"},{\"de\":\"Sprich nicht so laut!\",\"lv\":\"Ära räägi nii valjult!\"},{\"de\":\"Das ist sehr laut.\",\"lv\":\"See on väga vali.\"},{\"de\":\"Der Laut ist schön.\",\"lv\":\"Heli on ilus.\"},{\"de\":\"Ich höre einen Laut.\",\"lv\":\"Ma kuulen mingit heli.\"}]","study.tip":"[\"Litet laut = högt (adjektiv: ist laut). der Laut med stor bokstav = ljud (substantiv: ein Laut, der Laut).\",\"laut = ljud\"]","study.important":"[\"laut med liten bokstav utan artikel — det är ett adjektiv.\",\"der Laut med stor bokstav och artikel der är ett substantiv.\",\"Plural: die Laute (språkljud, signalljud).\",\"Fel: Der Laut ist sehr. → Korrekt: Das ist sehr laut.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts laut\|idx:358 (laut), ceļš 'study.*': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.tip, study.important, kuru saturs sākas ar '{"study.translation":"Vali","study.explanation":"[\"Põhiidee: Omadussõna väikese algustähega. Kirjeldab …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "laut",
  "lv": "Vali",
  "level": "A1",
  "study": {
    "id": "a1-laut",
    "layout": "standardStudy",
    "translation": "Vali",
    "explanation": [
      "Põhiidee: Omadussõna väikese algustähega. Kirjeldab intensiivsust — kui vali on heli või kõne.",
      "Laut tähendab peamiselt: vali heli.",
      "Sageli kirjeldab: omadussõna.",
      "Laut tähendab peamiselt: helisignaal.",
      "Sageli kirjeldab: nimisõna (der).",
      "Laut väikese algustähega on omadussõna — see kirjeldab, kui vali on heli (Die Musik ist laut = muusika on vali).",
      "Der Laut suure algustähega ja artikliga der on nimisõna — see tähendab heli kui asja või signaali (Der Laut ist schön = heli on ilus).",
      "Mitmuses: die Laute."
    ],
    "examples": [
      {
        "de": "Die Musik ist laut.",
        "lv": "Muusika on vali."
      },
      {
        "de": "Die Musik ist laut.",
        "lv": "Muusika on vali."
      },
      {
        "de": "Sprich nicht so laut!",
        "lv": "Ära räägi nii valjult!"
      },
      {
        "de": "Das ist sehr laut.",
        "lv": "See on väga vali."
      },
      {
        "de": "Der Laut ist schön.",
        "lv": "Heli on ilus."
      },
      {
        "de": "Ich höre einen Laut.",
        "lv": "Ma kuulen mingit heli."
      }
    ],
    "tip": [
      "Litet laut = högt (adjektiv: ist laut). der Laut med stor bokstav = ljud (substantiv: ein Laut, der Laut).",
      "laut = ljud"
    ],
    "important": [
      "laut med liten bokstav utan artikel — det är ett adjektiv.",
      "der Laut med stor bokstav och artikel der är ett substantiv.",
      "Plural: die Laute (språkljud, signalljud).",
      "Fel: Der Laut ist sehr. → Korrekt: Das ist sehr laut."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "laut"
        ],
        "purple": [
          "vali",
          "Põhiidee"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "laut",
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "vali"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "laut",
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "vali"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "laut",
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "valjult"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "laut",
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "vali"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "laut",
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "heli"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "laut",
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "kuulen"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Mazais"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "laut"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 39

**Audit ID:** `LRB099-0039`
**Finding Stable ID:** `g2/a1/sv|Laut|idx:359|study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `Laut|idx:359`
**Field / path:** `study.*`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** skaņa
**DE reference (read-only):** Laut
**CURRENT (captured scope):** {"study.translation":"Heli","study.explanation":"[\"Põhiidee: Nimisõna artikliga der ja suure algustähega. Tähendab heli kui asja, signaali või keele häälikut.\",\"Der Laut tähendab peamiselt: vali heli.\",\"Sageli kirjeldab: omadussõna.\",\"Der Laut tähendab peamiselt: helisignaal.\",\"Sageli kirjeldab: nimisõna (der).\",\"Laut väikese algustähega on omadussõna — see kirjeldab, kui vali on heli (Die Musik ist laut = muusika on vali).\",\"Der Laut suure algustähega ja artikliga der on nimisõna — see tähendab heli kui asja või signaali (Der Laut ist schön = heli on ilus).\",\"Mitmuses: die Laute.\"]","study.examples":"[{\"de\":\"Der Laut ist schön.\",\"lv\":\"Heli on ilus.\"},{\"de\":\"Die Musik ist laut.\",\"lv\":\"Muusika on vali.\"},{\"de\":\"Sprich nicht so laut!\",\"lv\":\"Ära räägi nii valjult!\"},{\"de\":\"Das ist sehr laut.\",\"lv\":\"See on väga vali.\"},{\"de\":\"Der Laut ist schön.\",\"lv\":\"Heli on ilus.\"},{\"de\":\"Ich höre einen Laut.\",\"lv\":\"Ma kuulen mingit heli.\"}]","study.tip":"[\"Litet laut = högt (adjektiv: ist laut). der Laut med stor bokstav = ljud (substantiv: ein Laut, der Laut).\",\"der Laut = ljud\"]","study.important":"[\"laut med liten bokstav utan artikel — det är ett adjektiv.\",\"der Laut med stor bokstav och artikel der är ett substantiv.\",\"Plural: die Laute (språkljud, signalljud).\",\"Fel: Der Laut ist sehr. → Korrekt: Das ist sehr laut.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Laut\|idx:359 (Laut), ceļš 'study.*': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.tip, study.important, kuru saturs sākas ar '{"study.translation":"Heli","study.explanation":"[\"Põhiidee: Nimisõna artikliga der ja suure algustäheg…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Laut",
  "de_article": "der",
  "de_plural": "die Laute",
  "lv": "Heli",
  "level": "A1",
  "study": {
    "id": "a1-laut-study",
    "layout": "standardStudy",
    "translation": "Heli",
    "explanation": [
      "Põhiidee: Nimisõna artikliga der ja suure algustähega. Tähendab heli kui asja, signaali või keele häälikut.",
      "Der Laut tähendab peamiselt: vali heli.",
      "Sageli kirjeldab: omadussõna.",
      "Der Laut tähendab peamiselt: helisignaal.",
      "Sageli kirjeldab: nimisõna (der).",
      "Laut väikese algustähega on omadussõna — see kirjeldab, kui vali on heli (Die Musik ist laut = muusika on vali).",
      "Der Laut suure algustähega ja artikliga der on nimisõna — see tähendab heli kui asja või signaali (Der Laut ist schön = heli on ilus).",
      "Mitmuses: die Laute."
    ],
    "examples": [
      {
        "de": "Der Laut ist schön.",
        "lv": "Heli on ilus."
      },
      {
        "de": "Die Musik ist laut.",
        "lv": "Muusika on vali."
      },
      {
        "de": "Sprich nicht so laut!",
        "lv": "Ära räägi nii valjult!"
      },
      {
        "de": "Das ist sehr laut.",
        "lv": "See on väga vali."
      },
      {
        "de": "Der Laut ist schön.",
        "lv": "Heli on ilus."
      },
      {
        "de": "Ich höre einen Laut.",
        "lv": "Ma kuulen mingit heli."
      }
    ],
    "tip": [
      "Litet laut = högt (adjektiv: ist laut). der Laut med stor bokstav = ljud (substantiv: ein Laut, der Laut).",
      "der Laut = ljud"
    ],
    "important": [
      "laut med liten bokstav utan artikel — det är ett adjektiv.",
      "der Laut med stor bokstav och artikel der är ett substantiv.",
      "Plural: die Laute (språkljud, signalljud).",
      "Fel: Der Laut ist sehr. → Korrekt: Das ist sehr laut."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "der Laut",
          "laut"
        ],
        "purple": [
          "heli",
          "heli"
        ],
        "yellow": [
          "Laut",
          "Laute"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "der Laut",
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "heli"
            ]
          }
        },
        {
          "de": {
            "green": [
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "muusika"
            ]
          }
        },
        {
          "de": {
            "green": [
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "ära"
            ]
          }
        },
        {
          "de": {
            "green": [
              "laut"
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
            "green": [
              "der Laut",
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "heli"
            ]
          }
        },
        {
          "de": {
            "green": [
              "laut"
            ]
          },
          "lv": {
            "purple": [
              "heli"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Mazais"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "laut"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 40

**Audit ID:** `LRB099-0040`
**Finding Stable ID:** `g2/a1/sv|legen|idx:363|study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `legen|idx:363`
**Field / path:** `study.*`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** nolikt
**DE reference (read-only):** legen
**CURRENT (captured scope):** {"study.translation":"Panema","study.explanation":"[\"Põhiidee: legen tähendab midagi pikali või horisontaalselt panema.\",\"Legen kasutatakse, kui sa ise liigutad asja ja paned selle lauale, voodile või mõnele muule pinnale.\",\"See erineb sõnast liegen, mis tähendab, et miski juba asub või lamab.\",\"A1 tasemel on kõige tähtsam vahe: legen = asetama, liegen = lamama.\"]","study.examples":"[{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Ma panen raamatu lauale.\"},{\"de\":\"Leg den Schlüssel hierhin.\",\"lv\":\"Pane võti siia.\"},{\"de\":\"Sie legt das Kind ins Bett.\",\"lv\":\"Ta paneb lapse voodisse.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Raamat on laual.\"}]","study.comparison":"[{\"word\":\"legen\",\"meaning\":\"Panema\",\"example\":\"Jag lägger boken på bordet.\"},{\"word\":\"liegen\",\"meaning\":\"Asuma / lamama\",\"example\":\"Boken ligger på bordet.\"},{\"word\":\"stellen\",\"meaning\":\"Püsti panema\",\"example\":\"Jag ställer flaskan på bordet.\"},{\"word\":\"setzen\",\"meaning\":\"Istuma panema / maha istuma\",\"example\":\"Jag sätter mig.\"}]","study.tip":"{\"text\":\"Atceries: tu noliec → legen; lieta jau atrodas → liegen.\"}","study.important":"[\"legen och liegen är inte samma.\",\"Ich lege das Buch = jag lägger boken. Das Buch liegt = boken ligger.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts legen\|idx:363 (legen), ceļš 'study.*': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"study.translation":"Panema","study.explanation":"[\"Põhiidee: legen tähendab midagi pikali või horison…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "legen",
  "lv": "Panema",
  "level": "A1",
  "study": {
    "id": "a1-legen",
    "layout": "standardStudy",
    "translation": "Panema",
    "explanation": [
      "Põhiidee: legen tähendab midagi pikali või horisontaalselt panema.",
      "Legen kasutatakse, kui sa ise liigutad asja ja paned selle lauale, voodile või mõnele muule pinnale.",
      "See erineb sõnast liegen, mis tähendab, et miski juba asub või lamab.",
      "A1 tasemel on kõige tähtsam vahe: legen = asetama, liegen = lamama."
    ],
    "examples": [
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Ma panen raamatu lauale."
      },
      {
        "de": "Leg den Schlüssel hierhin.",
        "lv": "Pane võti siia."
      },
      {
        "de": "Sie legt das Kind ins Bett.",
        "lv": "Ta paneb lapse voodisse."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Raamat on laual."
      }
    ],
    "comparison": [
      {
        "word": "legen",
        "meaning": "Panema",
        "example": "Jag lägger boken på bordet."
      },
      {
        "word": "liegen",
        "meaning": "Asuma / lamama",
        "example": "Boken ligger på bordet."
      },
      {
        "word": "stellen",
        "meaning": "Püsti panema",
        "example": "Jag ställer flaskan på bordet."
      },
      {
        "word": "setzen",
        "meaning": "Istuma panema / maha istuma",
        "example": "Jag sätter mig."
      }
    ],
    "tip": {
      "text": "Atceries: tu noliec → legen; lieta jau atrodas → liegen."
    },
    "important": [
      "legen och liegen är inte samma.",
      "Ich lege das Buch = jag lägger boken. Das Buch liegt = boken ligger."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "legen",
          "liegen"
        ],
        "purple": [
          "panema",
          "asub",
          "lamab"
        ],
        "yellow": [
          "asja",
          "lauale",
          "voodile",
          "pinnale"
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
              "panen"
            ],
            "yellow": [
              "raamatu",
              "lauale"
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
              "pane"
            ],
            "yellow": [
              "võti"
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
              "paneb"
            ],
            "green": [
              "lapse"
            ],
            "yellow": [
              "voodisse"
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
            "red": [
              "raamat"
            ],
            "yellow": [
              "Raamat",
              "laual"
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
              "panema"
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
              "asuma",
              "lamama"
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
              "püsti"
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
              "istuma"
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
          "purple": [
            "Atceries"
          ],
          "red": [
            "liegen",
            "Atceries"
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
          "purple": [
            "Ich"
          ],
          "red": [
            "liegt",
            "Ich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 41

**Audit ID:** `LRB099-0041`
**Finding Stable ID:** `g2/a1/sv|leise|idx:368|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `leise|idx:368`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** kluss
**DE reference (read-only):** leise
**CURRENT (captured scope):** {"lv":"Vaikne","study.translation":"Vaikne","study.explanation":"[\"Põhiidee: Vaikne või väikese helitugevusega.\",\"Leise tähendab peamiselt: väike helitugevus.\",\"Sageli kirjeldab: heli/häält/muusikat.\",\"Leise kirjeldab väikest helitugevust või vaikset häält/heli.\"]","study.examples":"[{\"de\":\"Bitte sei leise.\",\"lv\":\"Palun, ole vaikne.\"},{\"de\":\"Bitte sei leise.\",\"lv\":\"Palun, ole vaikne.\"},{\"de\":\"Die Musik ist leise.\",\"lv\":\"Muusika on vaikne.\"},{\"de\":\"Sprich bitte leise.\",\"lv\":\"Palun, räägi vaikselt.\"}]","study.tip":"[\"leise = tyst\",\"Använd leise när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"leise = lågt till ljudstyrkan.\",\"leise = volym.\",\"Tyst eller med låg volym.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts leise\|idx:368 (leise), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Vaikne","study.translation":"Vaikne","study.explanation":"[\"Põhiidee: Vaikne või väikese helitug…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "leise",
  "lv": "Vaikne",
  "level": "A1",
  "study": {
    "id": "a1-leise-study",
    "layout": "standardStudy",
    "translation": "Vaikne",
    "explanation": [
      "Põhiidee: Vaikne või väikese helitugevusega.",
      "Leise tähendab peamiselt: väike helitugevus.",
      "Sageli kirjeldab: heli/häält/muusikat.",
      "Leise kirjeldab väikest helitugevust või vaikset häält/heli."
    ],
    "examples": [
      {
        "de": "Bitte sei leise.",
        "lv": "Palun, ole vaikne."
      },
      {
        "de": "Bitte sei leise.",
        "lv": "Palun, ole vaikne."
      },
      {
        "de": "Die Musik ist leise.",
        "lv": "Muusika on vaikne."
      },
      {
        "de": "Sprich bitte leise.",
        "lv": "Palun, räägi vaikselt."
      }
    ],
    "tip": [
      "leise = tyst",
      "Använd leise när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "leise = lågt till ljudstyrkan.",
      "leise = volym.",
      "Tyst eller med låg volym."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "leise"
        ],
        "purple": [
          "vaikne"
        ],
        "orange": [
          "vaikne"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "leise",
              "leise"
            ]
          },
          "lv": {
            "purple": [
              "vaikne"
            ]
          }
        },
        {
          "de": {
            "green": [
              "leise",
              "leise"
            ]
          },
          "lv": {
            "purple": [
              "vaikne"
            ]
          }
        },
        {
          "de": {
            "green": [
              "leise",
              "leise"
            ]
          },
          "lv": {
            "purple": [
              "vaikne"
            ]
          }
        },
        {
          "de": {
            "green": [
              "leise",
              "leise"
            ]
          },
          "lv": {
            "purple": [
              "vaikselt"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "leise"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "leise"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 42

**Audit ID:** `LRB099-0042`
**Finding Stable ID:** `g2/a1/sv|liegen|idx:377|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `liegen|idx:377`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** atrasties • gulēt
**DE reference (read-only):** liegen
**CURRENT (captured scope):** {"lv":"Asuma • Lamama","study.translation":"Asuma • Lamama","study.explanation":"[\"Põhiidee: liegen tähendab asuma või horisontaalselt lamama.\",\"Inimese kohta tähendab liegen sageli lamamist.\",\"Asja kohta tähendab liegen, et see asub kuskil.\",\"See erineb sõnast legen, mis tähendab midagi pikali panema.\"]","study.examples":"[{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Raamat on laual.\"},{\"de\":\"Mein Handy liegt im Auto.\",\"lv\":\"Minu telefon on autos.\"},{\"de\":\"Er liegt im Bett.\",\"lv\":\"Ta lamab voodis.\"},{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Ma panen raamatu lauale.\"}]","study.comparison":"[{\"word\":\"liegen\",\"meaning\":\"Asuma / lamama\",\"example\":\"Boken ligger här.\"},{\"word\":\"legen\",\"meaning\":\"Panema\",\"example\":\"Jag lägger boken här.\"},{\"word\":\"stehen\",\"meaning\":\"Seisma / püsti olema\",\"example\":\"Flaskan står på bordet.\"},{\"word\":\"sein\",\"meaning\":\"Olema\",\"example\":\"Jag är här.\"}]","study.tip":"{\"text\":\"Atceries: lieta jau ir vietā → liegen; tu to noliec → legen.\"}","study.important":"[\"liegen visar tillstånd eller plats.\",\"legen visar handling: någon lägger något.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts liegen\|idx:377 (liegen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Asuma • Lamama","study.translation":"Asuma • Lamama","study.explanation":"[\"Põhiidee: liegen täh…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "liegen",
  "lv": "Asuma • Lamama",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "Asuma • Lamama",
    "explanation": [
      "Põhiidee: liegen tähendab asuma või horisontaalselt lamama.",
      "Inimese kohta tähendab liegen sageli lamamist.",
      "Asja kohta tähendab liegen, et see asub kuskil.",
      "See erineb sõnast legen, mis tähendab midagi pikali panema."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Raamat on laual."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Minu telefon on autos."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Ta lamab voodis."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Ma panen raamatu lauale."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "Asuma / lamama",
        "example": "Boken ligger här."
      },
      {
        "word": "legen",
        "meaning": "Panema",
        "example": "Jag lägger boken här."
      },
      {
        "word": "stehen",
        "meaning": "Seisma / püsti olema",
        "example": "Flaskan står på bordet."
      },
      {
        "word": "sein",
        "meaning": "Olema",
        "example": "Jag är här."
      }
    ],
    "tip": {
      "text": "Atceries: lieta jau ir vietā → liegen; tu to noliec → legen."
    },
    "important": [
      "liegen visar tillstånd eller plats.",
      "legen visar handling: någon lägger något."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "liegen",
          "legen"
        ],
        "purple": [
          "asuma",
          "lamama",
          "panema"
        ],
        "yellow": [
          "asja"
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
              "raamat"
            ],
            "yellow": [
              "Raamat",
              "laual"
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
              "minu"
            ],
            "yellow": [
              "telefon",
              "autos"
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
              "lamab"
            ],
            "green": [
              "voodis"
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
            "red": [
              "panen"
            ],
            "yellow": [
              "raamatu",
              "lauale"
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
              "asuma",
              "lamama"
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
              "panema"
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
              "seisma"
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
              "olema"
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
          "purple": [
            "Atceries"
          ],
          "red": [
            "legen",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "liegen"
          ],
          "purple": [
            "liegen",
            "liegen"
          ]
        },
        {
          "red": [
            "legen"
          ],
          "purple": [
            "legen",
            "legen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 43

**Audit ID:** `LRB099-0043`
**Finding Stable ID:** `g2/a1/sv|machen|idx:386|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `machen|idx:386`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** darīt • taisīt
**DE reference (read-only):** machen
**CURRENT (captured scope):** {"lv":"Tegema • Valmistama","study.translation":"Tegema • Valmistama","study.explanation":"[\"Põhiidee: machen on väga sage sõna, mis tähendab tegema või valmistama.\",\"Kui jutt on tegevusest üldiselt, tõlgitakse see kui tegema.\",\"Kui midagi luuakse või valmistatakse, tõlgitakse see kui tegema või valmistama.\",\"Paljudes fraasides tõlgitakse machen loomulikult eesti keele järgi, mitte sõna-sõnalt.\"]","study.examples":"[{\"de\":\"Was machst du?\",\"lv\":\"Mida sa teed?\"},{\"de\":\"Ich mache Hausaufgaben.\",\"lv\":\"Ma teen kodutöid.\"},{\"de\":\"Wir machen Pizza.\",\"lv\":\"Me teeme pitsat.\"},{\"de\":\"Das macht Spaß.\",\"lv\":\"See on lõbus.\"}]","study.tip":"{\"text\":\"Atceries: Was machst du? = Ko tu dari?\"}","study.important":"[\"machen är ett mycket brett ord, men på svenska måste det ofta översättas naturligt enligt situationen.\",\"Das macht Spaß betyder \\\"det är roligt\\\", inte bokstavligt \\\"det gör nöje\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts machen\|idx:386 (machen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Tegema • Valmistama","study.translation":"Tegema • Valmistama","study.explanation":"[\"Põhiidee: …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "machen",
  "lv": "Tegema • Valmistama",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "Tegema • Valmistama",
    "explanation": [
      "Põhiidee: machen on väga sage sõna, mis tähendab tegema või valmistama.",
      "Kui jutt on tegevusest üldiselt, tõlgitakse see kui tegema.",
      "Kui midagi luuakse või valmistatakse, tõlgitakse see kui tegema või valmistama.",
      "Paljudes fraasides tõlgitakse machen loomulikult eesti keele järgi, mitte sõna-sõnalt."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "Mida sa teed?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Ma teen kodutöid."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Me teeme pitsat."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "See on lõbus."
      }
    ],
    "tip": {
      "text": "Atceries: Was machst du? = Ko tu dari?"
    },
    "important": [
      "machen är ett mycket brett ord, men på svenska måste det ofta översättas naturligt enligt situationen.",
      "Das macht Spaß betyder \"det är roligt\", inte bokstavligt \"det gör nöje\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "machen"
        ],
        "purple": [
          "tegema",
          "tegema",
          "valmistama"
        ],
        "green": [
          "tegevusest",
          "fraasides"
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
              "teed"
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
              "teen"
            ],
            "yellow": [
              "kodutöid"
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
              "teeme"
            ],
            "yellow": [
              "pitsat"
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
              "on lõbus"
            ]
          }
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
      "tip": {
        "left": {
          "blue": [
            "Was machst du"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "machen"
          ],
          "purple": [
            "machen"
          ]
        },
        {
          "blue": [
            "Das macht Spaß"
          ],
          "purple": [
            "Das"
          ],
          "red": [
            "Das"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 44

**Audit ID:** `LRB099-0044`
**Finding Stable ID:** `g2/a1/sv|Mal|idx:390|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `Mal|idx:390`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** reize
**DE reference (read-only):** Mal
**CURRENT (captured scope):** {"lv":"Kord","study.translation":"Kord","study.explanation":"[\"Põhiidee: das Mal tähendab korda kui sündmust või juhtumit.\",\"Sageli kasutatakse koos arvudega: ein Mal, zwei Mal, drei Mal.\",\"Järgarvuga: das erste Mal, das zweite Mal.\",\"Ära aja segi kõnekeelse osakesega mal (Komm mal her!) — sellel on teine tähendus.\"]","study.examples":"[{\"de\":\"Das erste Mal war schwer.\",\"lv\":\"Esimest korda oli raske.\"},{\"de\":\"Ich war schon zwei Mal in Berlin.\",\"lv\":\"Ma olen juba kaks korda Berliinis käinud.\"},{\"de\":\"Ein Mal reicht.\",\"lv\":\"Üks kord piisab.\"},{\"de\":\"Noch ein Mal, bitte!\",\"lv\":\"Veel üks kord, palun!\"}]","study.tip":"{\"text\":\"Atceries: das Mal = reize (lietvārds); mal bez artikula = sarunvalodas daļiņa.\"}","study.important":"[\"das Mal / die Male — substantiv med artikel.\",\"ein Mal, zwei Mal — antal gånger.\",\"mal utan artikel (Komm mal her!) är inte detsamma som das Mal.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Mal\|idx:390 (Mal), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Kord","study.translation":"Kord","study.explanation":"[\"Põhiidee: das Mal tähendab korda kui sün…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Mal",
  "de_article": "das",
  "de_plural": "die Male",
  "lv": "Kord",
  "level": "A1",
  "study": {
    "id": "a1-mal",
    "layout": "standardStudy",
    "translation": "Kord",
    "explanation": [
      "Põhiidee: das Mal tähendab korda kui sündmust või juhtumit.",
      "Sageli kasutatakse koos arvudega: ein Mal, zwei Mal, drei Mal.",
      "Järgarvuga: das erste Mal, das zweite Mal.",
      "Ära aja segi kõnekeelse osakesega mal (Komm mal her!) — sellel on teine tähendus."
    ],
    "examples": [
      {
        "de": "Das erste Mal war schwer.",
        "lv": "Esimest korda oli raske."
      },
      {
        "de": "Ich war schon zwei Mal in Berlin.",
        "lv": "Ma olen juba kaks korda Berliinis käinud."
      },
      {
        "de": "Ein Mal reicht.",
        "lv": "Üks kord piisab."
      },
      {
        "de": "Noch ein Mal, bitte!",
        "lv": "Veel üks kord, palun!"
      }
    ],
    "tip": {
      "text": "Atceries: das Mal = reize (lietvārds); mal bez artikula = sarunvalodas daļiņa."
    },
    "important": [
      "das Mal / die Male — substantiv med artikel.",
      "ein Mal, zwei Mal — antal gånger.",
      "mal utan artikel (Komm mal her!) är inte detsamma som das Mal."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Mal",
          "ein Mal",
          "zwei Mal",
          "das erste Mal"
        ],
        "purple": [
          "korda",
          "sündmust",
          "juhtumit"
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
              "esimest korda"
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
              "kaks korda"
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
              "üks kord"
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
              "kord"
            ]
          }
        }
      ],
      "tip": {
        "blue": [
          "das Mal",
          "mal"
        ],
        "purple": [
          "Atceries",
          "Atceries"
        ]
      },
      "important": [
        {
          "blue": [
            "das Mal",
            "die Male"
          ]
        },
        {
          "blue": [
            "ein Mal",
            "zwei Mal"
          ],
          "purple": [
            "ein"
          ]
        },
        {
          "blue": [
            "mal"
          ],
          "purple": [
            "das Mal"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 45

**Audit ID:** `LRB099-0045`
**Finding Stable ID:** `g2/a1/sv|müssen|idx:423|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `müssen|idx:423`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** vajadzēt
**DE reference (read-only):** müssen
**CURRENT (captured scope):** {"lv":"Pidama","study.translation":"Pidama","study.explanation":"[\"Põhiidee: müssen tähendab, et midagi tuleb teha.\",\"Eesti keeles tõlgitakse müssen sageli väljenditega “ma pean...”, “sa pead...”, “me peame...”.\",\"Saksa lauses on teine tegusõna tavaliselt lõpus.\",\"A1 tasemel on kõige tähtsam vorm Ich muss...\"]","study.examples":"[{\"de\":\"Ich muss gehen.\",\"lv\":\"Ma pean minema.\"},{\"de\":\"Du musst warten.\",\"lv\":\"Sa pead ootama.\"},{\"de\":\"Wir müssen lernen.\",\"lv\":\"Me peame õppima.\"},{\"de\":\"Ich muss heute arbeiten.\",\"lv\":\"Ma pean täna töötama.\"}]","study.comparison":"[{\"word\":\"müssen\",\"meaning\":\"Pidama\",\"example\":\"Ich muss gehen.\"},{\"word\":\"können\",\"meaning\":\"Saama / oskama\",\"example\":\"Ich kann kommen.\"},{\"word\":\"wollen\",\"meaning\":\"Tahtma\",\"example\":\"Ich will nach Hause.\"},{\"word\":\"dürfen\",\"meaning\":\"Tohtima\",\"example\":\"Darf ich gehen?\"}]","study.tip":"{\"text\":\"Atceries: Ich muss... = man jā...\"}","study.important":"[\"müssen är ett modalverb.\",\"Det andra verbet står vanligtvis i slutet av meningen: Ich muss heute arbeiten.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts müssen\|idx:423 (müssen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Pidama","study.translation":"Pidama","study.explanation":"[\"Põhiidee: müssen tähendab, et midagi…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "müssen",
  "lv": "Pidama",
  "level": "A1",
  "study": {
    "id": "a1-müssen",
    "layout": "standardStudy",
    "translation": "Pidama",
    "explanation": [
      "Põhiidee: müssen tähendab, et midagi tuleb teha.",
      "Eesti keeles tõlgitakse müssen sageli väljenditega “ma pean...”, “sa pead...”, “me peame...”.",
      "Saksa lauses on teine tegusõna tavaliselt lõpus.",
      "A1 tasemel on kõige tähtsam vorm Ich muss..."
    ],
    "examples": [
      {
        "de": "Ich muss gehen.",
        "lv": "Ma pean minema."
      },
      {
        "de": "Du musst warten.",
        "lv": "Sa pead ootama."
      },
      {
        "de": "Wir müssen lernen.",
        "lv": "Me peame õppima."
      },
      {
        "de": "Ich muss heute arbeiten.",
        "lv": "Ma pean täna töötama."
      }
    ],
    "comparison": [
      {
        "word": "müssen",
        "meaning": "Pidama",
        "example": "Ich muss gehen."
      },
      {
        "word": "können",
        "meaning": "Saama / oskama",
        "example": "Ich kann kommen."
      },
      {
        "word": "wollen",
        "meaning": "Tahtma",
        "example": "Ich will nach Hause."
      },
      {
        "word": "dürfen",
        "meaning": "Tohtima",
        "example": "Darf ich gehen?"
      }
    ],
    "tip": {
      "text": "Atceries: Ich muss... = man jā..."
    },
    "important": [
      "müssen är ett modalverb.",
      "Det andra verbet står vanligtvis i slutet av meningen: Ich muss heute arbeiten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "müssen",
          "Ich muss"
        ],
        "purple": [
          "tuleb teha",
          "ma pean",
          "sa pead",
          "me peame"
        ],
        "green": [
          "lõpus"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "muss",
              "gehen"
            ]
          },
          "lv": {
            "purple": [
              "pean"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "musst",
              "warten"
            ]
          },
          "lv": {
            "purple": [
              "pead"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "müssen",
              "lernen"
            ]
          },
          "lv": {
            "purple": [
              "peame"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "muss",
              "arbeiten"
            ]
          },
          "lv": {
            "purple": [
              "pean"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "müssen"
            ]
          },
          "meaning": {
            "purple": [
              "pidama",
              "pidama"
            ]
          },
          "example": {
            "blue": [
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
          "meaning": {
            "purple": [
              "saama",
              "oskama"
            ]
          },
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
          "meaning": {
            "purple": [
              "tahtma"
            ]
          },
          "example": {
            "yellow": [
              "will"
            ]
          }
        },
        {
          "word": {
            "green": [
              "dürfen"
            ]
          },
          "meaning": {
            "purple": [
              "tohtima"
            ]
          },
          "example": {
            "red": [
              "Darf"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Ich muss"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "müssen"
          ],
          "purple": [
            "müssen"
          ]
        },
        {
          "blue": [
            "muss",
            "arbeiten"
          ],
          "purple": [
            "Otrs"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 46

**Audit ID:** `LRB099-0046`
**Finding Stable ID:** `g2/a1/sv|nach|idx:426|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `nach|idx:426`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** uz • pēc
**DE reference (read-only):** nach
**CURRENT (captured scope):** {"lv":"-sse • Pärast","study.translation":"-sse • Pärast","study.explanation":"[\"Põhiidee: nach tähendab kohtade puhul suunda kuhugi ja aja või järjekorra puhul pärast.\",\"Artiklita linnade ja riikide puhul tähendab nach sageli lõppu -sse.\",\"Aja puhul tähendab nach pärast.\",\"Fraasis nach Hause tähendab see koju.\"]","study.examples":"[{\"de\":\"Ich fahre nach Berlin.\",\"lv\":\"Ma sõidan Berliini.\"},{\"de\":\"Wir gehen nach Hause.\",\"lv\":\"Me läheme koju.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"Pärast söömist läheme jalutama.\"},{\"de\":\"Es ist zehn nach acht.\",\"lv\":\"On kümme minutit kaheksa läbi.\"}]","study.comparison":"[{\"word\":\"nach\",\"meaning\":\"-sse / pärast\",\"example\":\"Ich fahre nach Berlin.\"},{\"word\":\"zu\",\"meaning\":\"-sse / juurde\",\"example\":\"Ich gehe zum Arzt.\"},{\"word\":\"in\",\"meaning\":\"Sees / mingisse kohta artikliga\",\"example\":\"Ich gehe in die Schule.\"},{\"word\":\"vor\",\"meaning\":\"Enne / ees\",\"example\":\"Vor dem Essen wasche ich die Hände.\"}]","study.tip":"{\"text\":\"Atceries: nach Hause; nach Berlin; pēc ēšanas.\"}","study.important":"[\"nach används inte med alla fall.\",\"Till skolan säger man vanligtvis in die Schule, inte nach Schule.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts nach\|idx:426 (nach), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"-sse • Pärast","study.translation":"-sse • Pärast","study.explanation":"[\"Põhiidee: nach tähenda…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nach",
  "lv": "-sse • Pärast",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "-sse • Pärast",
    "explanation": [
      "Põhiidee: nach tähendab kohtade puhul suunda kuhugi ja aja või järjekorra puhul pärast.",
      "Artiklita linnade ja riikide puhul tähendab nach sageli lõppu -sse.",
      "Aja puhul tähendab nach pärast.",
      "Fraasis nach Hause tähendab see koju."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Ma sõidan Berliini."
      },
      {
        "de": "Wir gehen nach Hause.",
        "lv": "Me läheme koju."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Pärast söömist läheme jalutama."
      },
      {
        "de": "Es ist zehn nach acht.",
        "lv": "On kümme minutit kaheksa läbi."
      }
    ],
    "comparison": [
      {
        "word": "nach",
        "meaning": "-sse / pärast",
        "example": "Ich fahre nach Berlin."
      },
      {
        "word": "zu",
        "meaning": "-sse / juurde",
        "example": "Ich gehe zum Arzt."
      },
      {
        "word": "in",
        "meaning": "Sees / mingisse kohta artikliga",
        "example": "Ich gehe in die Schule."
      },
      {
        "word": "vor",
        "meaning": "Enne / ees",
        "example": "Vor dem Essen wasche ich die Hände."
      }
    ],
    "tip": {
      "text": "Atceries: nach Hause; nach Berlin; pēc ēšanas."
    },
    "important": [
      "nach används inte med alla fall.",
      "Till skolan säger man vanligtvis in die Schule, inte nach Schule."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "nach",
          "nach Hause"
        ],
        "purple": [
          "Põhiidee",
          "pärast",
          "koju"
        ],
        "green": [
          "linnade",
          "riikide",
          "aja"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "nach"
            ],
            "green": [
              "Berlin"
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
              "nach Hause"
            ]
          },
          "lv": {
            "purple": [
              "koju"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Nach"
            ],
            "yellow": [
              "Essen"
            ]
          },
          "lv": {
            "purple": [
              "pärast"
            ],
            "yellow": [
              "söömist"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "nach"
            ]
          },
          "lv": {
            "purple": [
              "kümme"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "nach"
            ]
          },
          "meaning": {
            "purple": [
              "sse",
              "pärast"
            ]
          },
          "example": {
            "blue": [
              "nach"
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
              "sse",
              "juurde"
            ]
          },
          "example": {
            "yellow": [
              "zum Arzt"
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
              "sees"
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
              "vor"
            ]
          },
          "meaning": {
            "purple": [
              "enne",
              "ees"
            ]
          },
          "example": {
            "red": [
              "Vor"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "nach Hause",
            "nach Berlin"
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "nach"
          ],
          "red": [
            "nach"
          ]
        },
        {
          "green": [
            "in die Schule"
          ],
          "red": [
            "nach Schule"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 47

**Audit ID:** `LRB099-0047`
**Finding Stable ID:** `g2/a1/sv|natürlich|idx:433|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `natürlich|idx:433`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** protams • dabisks
**DE reference (read-only):** natürlich
**CURRENT (captured scope):** {"lv":"Muidugi • Loomulik","study.translation":"Muidugi • Loomulik","study.explanation":"[\"Põhiidee: natürlich tähendab määrsõnana muidugi, omadussõnana tähendab loomulik.\",\"Vestluses, midagi kinnitades, natürlich = muidugi (Kommst du mit? – Natürlich! = Kas tuled kaasa? – Muidugi!).\",\"Loodusest, päritolust või omadustest rääkides natürlich = loomulik (natürliche Schönheit = loomulik ilu).\",\"Kontekst (vastus/kinnitus või kirjeldus) näitab õiget tähendust.\"]","study.examples":"[{\"de\":\"Kommst du mit? – Natürlich!\",\"lv\":\"Kas tuled kaasa? – muidugi!\"},{\"de\":\"Das ist eine natürliche Reaktion.\",\"lv\":\"See on loomulik reaktsioon.\"},{\"de\":\"Natürlich helfe ich dir.\",\"lv\":\"Muidugi, ma aitan sind.\"},{\"de\":\"Sie hat natürliche rote Haare.\",\"lv\":\"Tal on loomulikult punased juuksed.\"},{\"de\":\"Natürlich kann ich das machen.\",\"lv\":\"Muidugi, ma saan seda teha.\"},{\"de\":\"Das ist ganz natürlich.\",\"lv\":\"See on täiesti loomulik/normaalne.\"}]","study.tip":"[\"Som ett separat ord, för att bekräfta eller svara → självklart.\",\"Bredvid ett substantiv, för att beskriva ursprung eller egenskap → naturlig.\"]","study.important":"[\"natürlich = självklart (adverb, bekräftelse) ELLER naturlig (adjektiv).\",\"Natürlich! som ett separat utrop betyder alltid = självklart!\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts natürlich\|idx:433 (natürlich), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Muidugi • Loomulik","study.translation":"Muidugi • Loomulik","study.explanation":"[\"Põhiidee: na…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "natürlich",
  "lv": "Muidugi • Loomulik",
  "level": "A1",
  "study": {
    "id": "a1-natuerlich",
    "layout": "standardStudy",
    "translation": "Muidugi • Loomulik",
    "explanation": [
      "Põhiidee: natürlich tähendab määrsõnana muidugi, omadussõnana tähendab loomulik.",
      "Vestluses, midagi kinnitades, natürlich = muidugi (Kommst du mit? – Natürlich! = Kas tuled kaasa? – Muidugi!).",
      "Loodusest, päritolust või omadustest rääkides natürlich = loomulik (natürliche Schönheit = loomulik ilu).",
      "Kontekst (vastus/kinnitus või kirjeldus) näitab õiget tähendust."
    ],
    "examples": [
      {
        "de": "Kommst du mit? – Natürlich!",
        "lv": "Kas tuled kaasa? – muidugi!"
      },
      {
        "de": "Das ist eine natürliche Reaktion.",
        "lv": "See on loomulik reaktsioon."
      },
      {
        "de": "Natürlich helfe ich dir.",
        "lv": "Muidugi, ma aitan sind."
      },
      {
        "de": "Sie hat natürliche rote Haare.",
        "lv": "Tal on loomulikult punased juuksed."
      },
      {
        "de": "Natürlich kann ich das machen.",
        "lv": "Muidugi, ma saan seda teha."
      },
      {
        "de": "Das ist ganz natürlich.",
        "lv": "See on täiesti loomulik/normaalne."
      }
    ],
    "tip": [
      "Som ett separat ord, för att bekräfta eller svara → självklart.",
      "Bredvid ett substantiv, för att beskriva ursprung eller egenskap → naturlig."
    ],
    "important": [
      "natürlich = självklart (adverb, bekräftelse) ELLER naturlig (adjektiv).",
      "Natürlich! som ett separat utrop betyder alltid = självklart!"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "natürlich"
        ],
        "purple": [
          "muidugi",
          "loomulik"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Natürlich"
            ]
          },
          "lv": {
            "purple": [
              "muidugi"
            ]
          }
        },
        {
          "de": {
            "green": [
              "natürliche"
            ]
          },
          "lv": {
            "purple": [
              "loomulik"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Natürlich"
            ]
          },
          "lv": {
            "purple": [
              "muidugi"
            ]
          }
        },
        {
          "de": {
            "green": [
              "natürliche"
            ]
          },
          "lv": {
            "purple": [
              "loomulikult"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Natürlich"
            ]
          },
          "lv": {
            "purple": [
              "muidugi"
            ]
          }
        },
        {
          "de": {
            "green": [
              "natürlich"
            ]
          },
          "lv": {
            "purple": [
              "loomulik"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "atsevišķs"
          ]
        },
        {
          "green": [
            "atsevišķs"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "natürlich",
            "natürlich"
          ]
        },
        {
          "blue": [
            "Natürlich!"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 48

**Audit ID:** `LRB099-0048`
**Finding Stable ID:** `g2/a1/sv|nehmen|idx:435|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `nehmen|idx:435`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** ņemt • paņemt
**DE reference (read-only):** nehmen
**CURRENT (captured scope):** {"lv":"Võtma • Kätte võtma","study.translation":"Võtma • Kätte võtma","study.explanation":"[\"Põhiidee: nehmen tähendab võtma või kätte võtma.\",\"Nehmen kasutatakse, kui sa võtad midagi endale või valid.\",\"See ei ole sama mis bringen, sest bringen tähendab kellelegi tooma või viima.\",\"Holen tähendab järele minema ja tooma/võtma.\"]","study.examples":"[{\"de\":\"Ich nehme den Bus.\",\"lv\":\"Ma sõidan bussiga.\"},{\"de\":\"Nimm das Buch!\",\"lv\":\"Võta raamat!\"},{\"de\":\"Ich bringe dir das Buch.\",\"lv\":\"Ma toon sulle raamatu.\"},{\"de\":\"Ich hole dich ab.\",\"lv\":\"Ma tulen sulle järele.\"}]","study.comparison":"[{\"word\":\"nehmen\",\"meaning\":\"Võtma / kätte võtma\",\"example\":\"Nimm das Buch!\"},{\"word\":\"bringen\",\"meaning\":\"Tooma / viima / kohale toimetama\",\"example\":\"Ich bringe dir das Buch.\"},{\"word\":\"holen\",\"meaning\":\"Järele minema / tooma\",\"example\":\"Ich hole Wasser.\"},{\"word\":\"mitnehmen\",\"meaning\":\"Kaasa võtma\",\"example\":\"Ich nehme dich mit.\"}]","study.tip":"{\"text\":\"Atceries: paņem sev → nehmen; atnes kādam → bringen.\"}","study.important":"[\"Ich nehme den Bus betyder på svenska \\\"jag åker med bussen\\\".\",\"nehmen är inte detsamma som bringen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts nehmen\|idx:435 (nehmen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Võtma • Kätte võtma","study.translation":"Võtma • Kätte võtma","study.explanation":"[\"Põhiidee: …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nehmen",
  "lv": "Võtma • Kätte võtma",
  "level": "A1",
  "study": {
    "id": "a1-nehmen",
    "layout": "standardStudy",
    "translation": "Võtma • Kätte võtma",
    "explanation": [
      "Põhiidee: nehmen tähendab võtma või kätte võtma.",
      "Nehmen kasutatakse, kui sa võtad midagi endale või valid.",
      "See ei ole sama mis bringen, sest bringen tähendab kellelegi tooma või viima.",
      "Holen tähendab järele minema ja tooma/võtma."
    ],
    "examples": [
      {
        "de": "Ich nehme den Bus.",
        "lv": "Ma sõidan bussiga."
      },
      {
        "de": "Nimm das Buch!",
        "lv": "Võta raamat!"
      },
      {
        "de": "Ich bringe dir das Buch.",
        "lv": "Ma toon sulle raamatu."
      },
      {
        "de": "Ich hole dich ab.",
        "lv": "Ma tulen sulle järele."
      }
    ],
    "comparison": [
      {
        "word": "nehmen",
        "meaning": "Võtma / kätte võtma",
        "example": "Nimm das Buch!"
      },
      {
        "word": "bringen",
        "meaning": "Tooma / viima / kohale toimetama",
        "example": "Ich bringe dir das Buch."
      },
      {
        "word": "holen",
        "meaning": "Järele minema / tooma",
        "example": "Ich hole Wasser."
      },
      {
        "word": "mitnehmen",
        "meaning": "Kaasa võtma",
        "example": "Ich nehme dich mit."
      }
    ],
    "tip": {
      "text": "Atceries: paņem sev → nehmen; atnes kādam → bringen."
    },
    "important": [
      "Ich nehme den Bus betyder på svenska \"jag åker med bussen\".",
      "nehmen är inte detsamma som bringen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "nehmen"
        ],
        "purple": [
          "võtma",
          "võtma"
        ],
        "red": [
          "bringen",
          "holen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "nehme"
            ],
            "yellow": [
              "Bus"
            ]
          },
          "lv": {
            "purple": [
              "sõidan"
            ],
            "yellow": [
              "bussiga"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Nimm"
            ],
            "yellow": [
              "Buch"
            ]
          },
          "lv": {
            "purple": [
              "võta"
            ],
            "yellow": [
              "raamat"
            ]
          }
        },
        {
          "de": {
            "red": [
              "bringe"
            ],
            "yellow": [
              "Buch"
            ]
          },
          "lv": {
            "red": [
              "toon"
            ],
            "yellow": [
              "raamatu"
            ]
          }
        },
        {
          "de": {
            "red": [
              "hole"
            ],
            "green": [
              "dich"
            ]
          },
          "lv": {
            "red": [
              "tulen"
            ],
            "green": [
              "tulen"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "nehmen"
            ]
          },
          "meaning": {
            "purple": [
              "võtma",
              "võtma"
            ]
          },
          "example": {
            "blue": [
              "Nimm"
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
              "viima",
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
              "holen"
            ]
          },
          "meaning": {
            "purple": [
              "järele minema",
              "tooma"
            ]
          },
          "example": {
            "yellow": [
              "hole"
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
            "green": [
              "nehme",
              "mit"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "nehmen"
          ],
          "purple": [
            "Atceries"
          ],
          "red": [
            "bringen",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "nehme den Bus"
          ],
          "purple": [
            "Ich"
          ]
        },
        {
          "blue": [
            "nehmen"
          ],
          "red": [
            "bringen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 49

**Audit ID:** `LRB099-0049`
**Finding Stable ID:** `g2/a1/sv|neu|idx:439|lv, study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `neu|idx:439`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** jauns (par lietām)
**DE reference (read-only):** neu
**CURRENT (captured scope):** {"lv":"Uus (asjade kohta)","study.translation":"Uus (asjade kohta)","study.explanation":"[\"Põhiidee: neu tähendab uus asja mõttes — hiljuti loodud, soetatud või esimest korda kasutatud.\",\"Neu kirjeldab asju, seadmeid, riideid, maja, ideed jms — mitte inimese või looma vanust.\",\"Eesti keeles on need kaks tähendust eri sõnadega: noor vanuse kohta (jung) ja uus/hiljuti valminud asja kohta (neu).\",\"Inimese või looma vanuse kohta kasutatakse jung, mitte neu.\",\"Neu kasutatakse ka ülekantud tähenduses: uus töö, uus info, uus algus.\",\"Vastand on alt (vana) • Nimisõna das Neue tähendab midagi uut.\"]","study.examples":"[{\"de\":\"Mein Handy ist neu.\",\"lv\":\"Minu telefon on uus.\"},{\"de\":\"Wir haben ein neues Auto.\",\"lv\":\"Meil on uus auto.\"},{\"de\":\"Das ist meine neue Wohnung.\",\"lv\":\"See on minu uus korter.\"},{\"de\":\"Ich habe neue Schuhe gekauft.\",\"lv\":\"Ma ostsin uued kingad.\"},{\"de\":\"Das ist eine neue Idee.\",\"lv\":\"See on uus idee.\"},{\"de\":\"Er hat einen neuen Job.\",\"lv\":\"Tal on uus töö.\"},{\"de\":\"Was gibt es Neues?\",\"lv\":\"Mis uut?\"}]","study.tip":"[\"neu är för saker, enheter och nyheter — när man talar om en människas ålder använder man jung.\",\"Motsats: neu ↔ alt (ny ↔ gammal).\"]","study.important":"[\"neu beskriver saker och nyheter, inte en människas eller djurs ålder.\",\"För en människas eller ett djurs ålder använder man jung, inte neu.\",\"Felaktigt: Meine Schwester ist neu. → Korrekt: Meine Schwester ist jung.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts neu\|idx:439 (neu), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Uus (asjade kohta)","study.translation":"Uus (asjade kohta)","study.explanation":"[\"Põhiidee: ne…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "neu",
  "lv": "Uus (asjade kohta)",
  "level": "A1",
  "study": {
    "id": "a1-neu",
    "layout": "standardStudy",
    "translation": "Uus (asjade kohta)",
    "explanation": [
      "Põhiidee: neu tähendab uus asja mõttes — hiljuti loodud, soetatud või esimest korda kasutatud.",
      "Neu kirjeldab asju, seadmeid, riideid, maja, ideed jms — mitte inimese või looma vanust.",
      "Eesti keeles on need kaks tähendust eri sõnadega: noor vanuse kohta (jung) ja uus/hiljuti valminud asja kohta (neu).",
      "Inimese või looma vanuse kohta kasutatakse jung, mitte neu.",
      "Neu kasutatakse ka ülekantud tähenduses: uus töö, uus info, uus algus.",
      "Vastand on alt (vana) • Nimisõna das Neue tähendab midagi uut."
    ],
    "examples": [
      {
        "de": "Mein Handy ist neu.",
        "lv": "Minu telefon on uus."
      },
      {
        "de": "Wir haben ein neues Auto.",
        "lv": "Meil on uus auto."
      },
      {
        "de": "Das ist meine neue Wohnung.",
        "lv": "See on minu uus korter."
      },
      {
        "de": "Ich habe neue Schuhe gekauft.",
        "lv": "Ma ostsin uued kingad."
      },
      {
        "de": "Das ist eine neue Idee.",
        "lv": "See on uus idee."
      },
      {
        "de": "Er hat einen neuen Job.",
        "lv": "Tal on uus töö."
      },
      {
        "de": "Was gibt es Neues?",
        "lv": "Mis uut?"
      }
    ],
    "tip": [
      "neu är för saker, enheter och nyheter — när man talar om en människas ålder använder man jung.",
      "Motsats: neu ↔ alt (ny ↔ gammal)."
    ],
    "important": [
      "neu beskriver saker och nyheter, inte en människas eller djurs ålder.",
      "För en människas eller ett djurs ålder använder man jung, inte neu.",
      "Felaktigt: Meine Schwester ist neu. → Korrekt: Meine Schwester ist jung."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "neu"
        ],
        "purple": [
          "uus"
        ],
        "green": [
          "jung"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "neu"
            ]
          },
          "lv": {
            "purple": [
              "uus"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "neues"
            ]
          },
          "lv": {
            "purple": [
              "meil"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "neue"
            ]
          },
          "lv": {
            "purple": [
              "uus"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "neue"
            ]
          },
          "lv": {
            "purple": [
              "uued"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "neue"
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
              "neuen"
            ]
          },
          "lv": {
            "purple": [
              "uus"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Neues"
            ]
          },
          "lv": {
            "purple": [
              "uut"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "neu"
          ],
          "green": [
            "jung"
          ]
        },
        {
          "blue": [
            "neu"
          ],
          "purple": [
            "alt"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "neu"
          ]
        },
        {
          "green": [
            "jung"
          ],
          "blue": [
            "neu"
          ]
        },
        {
          "blue": [
            "neu"
          ],
          "green": [
            "jung"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 50

**Audit ID:** `LRB099-0050`
**Finding Stable ID:** `g2/a1/sv|noch mal|idx:701|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `noch mal|idx:701`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vēlreiz
**DE reference (read-only):** noch mal
**CURRENT (captured scope):** {"lv":"Veel kord","study.translation":"Veel kord","study.explanation":"[\"Põhiidee: Tähendab veel kord — tegevust korrata või paluda kordamist.\"]","study.examples":"[{\"de\":\"Noch mal, bitte.\",\"lv\":\"Veel kord, palun.\"},{\"de\":\"Noch mal, bitte.\",\"lv\":\"Veel kord, palun.\"},{\"de\":\"Sag das noch mal.\",\"lv\":\"Ütle seda veel kord.\"}]","study.tip":"[\"Använd noch mal när sammanhanget motsvarar denna betydelse.\",\"Använd noch mal när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"Betyder igen — upprepa en handling eller be om upprepning.\",\"noch mal: kontrollera sammanhanget före användning.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts noch mal\|idx:701 (noch mal), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Veel kord","study.translation":"Veel kord","study.explanation":"[\"Põhiidee: Tähendab veel kord —…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "noch mal",
  "lv": "Veel kord",
  "level": "A1",
  "study": {
    "id": "a1-noch-mal",
    "layout": "standardStudy",
    "translation": "Veel kord",
    "explanation": [
      "Põhiidee: Tähendab veel kord — tegevust korrata või paluda kordamist."
    ],
    "examples": [
      {
        "de": "Noch mal, bitte.",
        "lv": "Veel kord, palun."
      },
      {
        "de": "Noch mal, bitte.",
        "lv": "Veel kord, palun."
      },
      {
        "de": "Sag das noch mal.",
        "lv": "Ütle seda veel kord."
      }
    ],
    "tip": [
      "Använd noch mal när sammanhanget motsvarar denna betydelse.",
      "Använd noch mal när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "Betyder igen — upprepa en handling eller be om upprepning.",
      "noch mal: kontrollera sammanhanget före användning."
    ],
    "sectionAccents": {
      "explanation": {
        "yellow": [
          "Põhiidee"
        ],
        "purple": [
          "veel kord"
        ]
      },
      "examples": [
        {
          "de": {
            "yellow": [
              "noch mal",
              "noch mal"
            ]
          },
          "lv": {
            "purple": [
              "veel kord"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "noch mal",
              "noch mal"
            ]
          },
          "lv": {
            "purple": [
              "veel kord"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "noch mal",
              "noch mal"
            ]
          },
          "lv": {
            "purple": [
              "veel kord"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Izmanto"
          ]
        }
      ],
      "important": [
        {
          "yellow": [
            "Nozīmē"
          ]
        }
      ]
    }
  }
}
```

---

