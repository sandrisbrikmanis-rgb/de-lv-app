# G2/A1 LRB LRB-100 — OWNER VIEW

**Batch:** LRB-100
**Rows:** 50/50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-12T19:09:10.331Z
**Source commit:** `1099f56816a9f34bcaf0c78f83e442fdb3e8e888`
**Branch:** `cursor/lrb-100-owner-review-pc2-3db2`
**Input SHA256:** `0494e252bdfa08b971a89975680d09d96cde18fd0bb7f834778aa5f52a2ad9cf`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-100-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB100-0001`
**Finding Stable ID:** `g2/a1/sv|Obst|idx:693|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `Obst|idx:693`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** augļi
**DE reference (read-only):** Obst
**CURRENT (captured scope):** {"lv":"Puuviljad","study.explanation":"[\"Põhiidee: Puuviljad üldiselt. Saksa keeles ei ole mitmuse vormi *die Obsts.\",\"Das Obst tähendab peamiselt: puuviljad üldiselt.\",\"Sageli kirjeldab: kesksoos (ainult ainsuses).\"]","study.tip":"[\"das Obst = frukter\",\"Använd das Obst när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"Felaktigt: die Obsts → Korrekt: das Obst\",\"das Obst = frukter (tillsammans).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Obst\|idx:693 (Obst), ceļš 'lv; study.explanation; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Puuviljad","study.explanation":"[\"Põhiidee: Puuviljad üldiselt. Saksa keeles ei ole mitmuse vorm…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Obst",
  "de_article": "das",
  "lv": "Puuviljad",
  "level": "A1",
  "study": {
    "id": "a1-obst",
    "layout": "standardStudy",
    "translation": "Puuviljad",
    "explanation": [
      "Põhiidee: Puuviljad üldiselt. Saksa keeles ei ole mitmuse vormi *die Obsts.",
      "Das Obst tähendab peamiselt: puuviljad üldiselt.",
      "Sageli kirjeldab: kesksoos (ainult ainsuses)."
    ],
    "examples": [
      {
        "de": "Wir essen viel Obst.",
        "lv": "Me sööme palju puuvilju."
      },
      {
        "de": "Wir essen viel Obst.",
        "lv": "Me sööme palju puuvilju."
      },
      {
        "de": "Obst ist gesund.",
        "lv": "Puuviljad on tervislikud."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Mulle meeldivad puuviljad ja köögiviljad."
      },
      {
        "de": "Wir essen Obst.",
        "lv": "Me sööme puuvilju."
      }
    ],
    "tip": [
      "das Obst = frukter",
      "Använd das Obst när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "Felaktigt: die Obsts → Korrekt: das Obst",
      "das Obst = frukter (tillsammans)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "das Obst",
          "obst"
        ],
        "purple": [
          "puuviljad"
        ],
        "yellow": [
          "Obst"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "puuvilju"
            ]
          }
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "puuvilju"
            ]
          }
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "puuviljad"
            ]
          }
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "puuviljad"
            ]
          }
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {
            "purple": [
              "puuvilju"
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
          "green": [
            "das Obst"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 2

**Audit ID:** `LRB100-0002`
**Finding Stable ID:** `g2/a1/sv|probieren|idx:482|lv; study.explanation; study.examples; study.comparison; study.tip; study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `probieren|idx:482`
**Field / path:** `lv; study.explanation; study.examples; study.comparison; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** izmēģināt • nogaršot
**DE reference (read-only):** probieren
**CURRENT (captured scope):** {"lv":"Proovima • Maitsma","study.explanation":"[\"Põhiidee: probieren tähendab proovima või maitsma.\",\"Kui jutt on toidust või joogist, tähendab probieren sageli maitsma.\",\"Kui jutt on tegevusest, meetodist või asjast, tähendab probieren proovima.\",\"Testen tähendab süstemaatilist testimist või kontrollimist, mitte lihtsalt proovimist.\"]","study.examples":"[{\"de\":\"Probier mal die Suppe!\",\"lv\":\"Maitse suppi!\"},{\"de\":\"Ich möchte den Kuchen probieren.\",\"lv\":\"Ma tahan kooki maitsta.\"},{\"de\":\"Wir probieren eine neue Methode.\",\"lv\":\"Me proovime uut meetodit.\"},{\"de\":\"Kann ich die Jacke anprobieren?\",\"lv\":\"Kas ma saan jakki proovida?\"},{\"de\":\"Wir testen die neue Software.\",\"lv\":\"Me testime uut tarkvara.\"}]","study.comparison":"[{\"word\":\"probieren\",\"meaning\":\"Proovima / maitsma\",\"example\":\"Smaka på soppan!\"},{\"word\":\"versuchen\",\"meaning\":\"Testima / kontrollima\",\"example\":\"Jag försöker.\"},{\"word\":\"prüfen\",\"meaning\":\"Üritama\",\"example\":\"Jag kontrollerar räkningen.\"},{\"word\":\"anprobieren\",\"meaning\":\"Kontrollima\",\"example\":\"Jag provoksar jackan.\"},{\"word\":\"Anprobieren\",\"meaning\":\"Selga proovima\",\"example\":\"Ich probiere die Jacke an.\"}]","study.tip":"{\"text\":\"Atceries: ēdiens → probieren = nogaršot.\"}","study.important":"[\"probieren är inte huvudordet för officiell kontroll.\",\"För att kontrollera dokument eller räkningar använder man vanligtvis prüfen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts probieren\|idx:482 (probieren), ceļš 'lv; study.explanation; study.examples; study.comparison; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"lv":"Proovima • Maitsma","study.explanation":"[\"Põhiidee: probieren tähendab proovima või maitsma.\",…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "probieren",
  "lv": "Proovima • Maitsma",
  "level": "A1",
  "study": {
    "id": "a1-probieren",
    "layout": "standardStudy",
    "translation": "Proovima • Maitsma",
    "explanation": [
      "Põhiidee: probieren tähendab proovima või maitsma.",
      "Kui jutt on toidust või joogist, tähendab probieren sageli maitsma.",
      "Kui jutt on tegevusest, meetodist või asjast, tähendab probieren proovima.",
      "Testen tähendab süstemaatilist testimist või kontrollimist, mitte lihtsalt proovimist."
    ],
    "examples": [
      {
        "de": "Probier mal die Suppe!",
        "lv": "Maitse suppi!"
      },
      {
        "de": "Ich möchte den Kuchen probieren.",
        "lv": "Ma tahan kooki maitsta."
      },
      {
        "de": "Wir probieren eine neue Methode.",
        "lv": "Me proovime uut meetodit."
      },
      {
        "de": "Kann ich die Jacke anprobieren?",
        "lv": "Kas ma saan jakki proovida?"
      },
      {
        "de": "Wir testen die neue Software.",
        "lv": "Me testime uut tarkvara."
      }
    ],
    "comparison": [
      {
        "word": "probieren",
        "meaning": "Proovima / maitsma",
        "example": "Smaka på soppan!"
      },
      {
        "word": "versuchen",
        "meaning": "Testima / kontrollima",
        "example": "Jag försöker."
      },
      {
        "word": "prüfen",
        "meaning": "Üritama",
        "example": "Jag kontrollerar räkningen."
      },
      {
        "word": "anprobieren",
        "meaning": "Kontrollima",
        "example": "Jag provoksar jackan."
      },
      {
        "word": "Anprobieren",
        "meaning": "Selga proovima",
        "example": "Ich probiere die Jacke an."
      }
    ],
    "tip": {
      "text": "Atceries: ēdiens → probieren = nogaršot."
    },
    "important": [
      "probieren är inte huvudordet för officiell kontroll.",
      "För att kontrollera dokument eller räkningar använder man vanligtvis prüfen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "probieren",
          "prüfen",
          "testen"
        ],
        "purple": [
          "proovima",
          "maitsma",
          "kontrollima",
          "Põhiidee"
        ],
        "yellow": [
          "toidust",
          "joogist",
          "meetodist",
          "asjast"
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
              "maitse"
            ],
            "yellow": [
              "suppi"
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
              "maitsta"
            ],
            "yellow": [
              "kooki"
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
              "proovime"
            ],
            "yellow": [
              "meetodit"
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
            "green": [
              "kas"
            ],
            "yellow": [
              "jakki"
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
              "proovima",
              "maitsma"
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
              "testima",
              "kontrollima"
            ]
          },
          "example": {
            "blue": [
              "testen"
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
              "üritama"
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
              "anprobieren"
            ]
          },
          "meaning": {
            "purple": [
              "kontrollima"
            ]
          },
          "example": {
            "red": [
              "prüfe"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "probieren"
          ],
          "yellow": [
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
            "probieren"
          ],
          "red": [
            "probieren"
          ]
        },
        {
          "red": [
            "Dokumentu"
          ],
          "purple": [
            "Dokumentu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 3

**Audit ID:** `LRB100-0003`
**Finding Stable ID:** `g2/a1/sv|Reis|idx:496|lv; study.examples; study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `Reis|idx:496`
**Field / path:** `lv; study.examples; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** rīsi
**DE reference (read-only):** Reis
**CURRENT (captured scope):** {"lv":"Riis","study.examples":"[{\"de\":\"Der Reis ist fertig.\",\"lv\":\"Riis on valmis.\"},{\"de\":\"Ich esse Reis.\",\"lv\":\"Ma söön riisi.\"},{\"de\":\"Kochst du Reis?\",\"lv\":\"Kas sa keedad riisi?\"},{\"de\":\"Der Reis schmeckt gut.\",\"lv\":\"Riis maitseb hästi.\"}]","study.important":"[\"der Reis — på tyska bara singular (Der Reis ist..., nicht *sind).\",\"I svensk översättning använder man ofta plural: risen är färdig.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Reis\|idx:496 (Reis), ceļš 'lv; study.examples; study.important': viena rinda aptver apakšlaukus lv, study.examples, study.important, kuru saturs sākas ar '{"lv":"Riis","study.examples":"[{\"de\":\"Der Reis ist fertig.\",\"lv\":\"Riis on valmis.\"},{\"de\":\"I…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Reis",
  "de_article": "der",
  "lv": "Riis",
  "level": "A1",
  "study": {
    "id": "a1-reis",
    "layout": "standardStudy",
    "translation": "Riis",
    "explanation": "Saksa keeles kasutatakse sõna „der Reis” ainult ainsuses, seepärast peab tegusõna lauses olema ainsuse vormis (näiteks „ist”, mitte „sind”). Eesti keeles öeldakse samamoodi ainsuses „riis”.",
    "examples": [
      {
        "de": "Der Reis ist fertig.",
        "lv": "Riis on valmis."
      },
      {
        "de": "Ich esse Reis.",
        "lv": "Ma söön riisi."
      },
      {
        "de": "Kochst du Reis?",
        "lv": "Kas sa keedad riisi?"
      },
      {
        "de": "Der Reis schmeckt gut.",
        "lv": "Riis maitseb hästi."
      }
    ],
    "tip": {
      "text": "Atceries: der Reis ir vienskaitlis vāciski, bet latviski parasti — rīsi."
    },
    "important": [
      "der Reis — på tyska bara singular (Der Reis ist..., nicht *sind).",
      "I svensk översättning använder man ofta plural: risen är färdig."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Reis",
          "ist"
        ],
        "purple": [
          "ainsus",
          "riis"
        ],
        "red": [
          "sind"
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
              "riis"
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
              "riisi"
            ]
          }
        }
      ],
      "tip": {
        "blue": [
          "der Reis"
        ],
        "purple": [
          "Atceries",
          "Reis"
        ]
      }
    }
  }
}
```

---

## Finding 4

**Audit ID:** `LRB100-0004`
**Finding Stable ID:** `g2/a1/sv|sagen|idx:505|lv; study.explanation; study.examples; study.comparison; study.tip; study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `sagen|idx:505`
**Field / path:** `lv; study.explanation; study.examples; study.comparison; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** teikt
**DE reference (read-only):** sagen
**CURRENT (captured scope):** {"lv":"Ütlema","study.explanation":"[\"Põhiidee: Öelda konkreetne mõte, sõna või lause.\",\"Sagen tähendab peamiselt: konkreetset mõtet ütlema.\",\"Sageli kirjeldab: sõnu/lauseid.\",\"Sagen kasutatakse konkreetse öeldud teksti kohta.\"]","study.examples":"[{\"de\":\"Was hast du gesagt?\",\"lv\":\"Mida sa ütlesid?\"}]","study.comparison":"[{\"word\":\"sagen\",\"meaning\":\"Ütlema (konkreetset teksti)\",\"example\":\"Was hast du gesagt? – Mida sa ütlesid?\"},{\"word\":\"sprechen\",\"meaning\":\"Rääkima (keelt, vestlema)\",\"example\":\"Ich spreche Deutsch. – Ma räägin saksa keelt.\"}]","study.tip":"[\"sagen = säga\",\"Använd sagen när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"sagen = säga.\",\"Säga en konkret tanke, ord eller mening.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts sagen\|idx:505 (sagen), ceļš 'lv; study.explanation; study.examples; study.comparison; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"lv":"Ütlema","study.explanation":"[\"Põhiidee: Öelda konkreetne mõte, sõna või lause.\",\"Sagen tähend…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sagen",
  "lv": "Ütlema",
  "level": "A1",
  "study": {
    "id": "a1-sagen-study",
    "layout": "standardStudy",
    "translation": "Ütlema",
    "explanation": [
      "Põhiidee: Öelda konkreetne mõte, sõna või lause.",
      "Sagen tähendab peamiselt: konkreetset mõtet ütlema.",
      "Sageli kirjeldab: sõnu/lauseid.",
      "Sagen kasutatakse konkreetse öeldud teksti kohta."
    ],
    "examples": [
      {
        "de": "Was hast du gesagt?",
        "lv": "Mida sa ütlesid?"
      }
    ],
    "comparison": [
      {
        "word": "sagen",
        "meaning": "Ütlema (konkreetset teksti)",
        "example": "Was hast du gesagt? – Mida sa ütlesid?"
      },
      {
        "word": "sprechen",
        "meaning": "Rääkima (keelt, vestlema)",
        "example": "Ich spreche Deutsch. – Ma räägin saksa keelt."
      }
    ],
    "tip": [
      "sagen = säga",
      "Använd sagen när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "sagen = säga.",
      "Säga en konkret tanke, ord eller mening."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sagen"
        ],
        "purple": [
          "ütlema"
        ],
        "green": [
          "Ütlema"
        ]
      },
      "examples": [
        {
          "de": {},
          "lv": {
            "purple": [
              "ütlesid"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "sagen"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "sagen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 5

**Audit ID:** `LRB100-0005`
**Finding Stable ID:** `g2/a1/sv|schauen|idx:510|lv; study.explanation; study.examples; study.comparison; study.tip; study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `schauen|idx:510`
**Field / path:** `lv; study.explanation; study.examples; study.comparison; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** skatīties
**DE reference (read-only):** schauen
**CURRENT (captured scope):** {"lv":"Vaatama","study.explanation":"[\"Põhiidee: Aktiivselt vaadata või pilku heita.\",\"Schauen tähendab peamiselt: aktiivselt vaatama.\",\"Sageli kirjeldab: tegevust.\",\"Schauen tähendab aktiivselt vaatamist.\"]","study.examples":"[{\"de\":\"Ich schaue fern.\",\"lv\":\"Ma vaatan telerit.\"},{\"de\":\"Wir schauen aus dem Fenster.\",\"lv\":\"Me vaatame aknast välja.\"},{\"de\":\"Ich schaue fern.\",\"lv\":\"Ma vaatan telerit.\"}]","study.comparison":"[{\"word\":\"schauen\",\"meaning\":\"Vaatama (aktiivselt)\",\"example\":\"Ich schaue aus dem Fenster. – Ma vaatan aknast välja.\"},{\"word\":\"sehen\",\"meaning\":\"Nägema (ilma kavatsuseta)\",\"example\":\"Ich sehe dich. – Ma näen sind.\"}]","study.tip":"[\"schauen = titta\",\"Använd schauen när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"schauen = titta.\",\"Titta aktivt eller kasta en blick.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts schauen\|idx:510 (schauen), ceļš 'lv; study.explanation; study.examples; study.comparison; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"lv":"Vaatama","study.explanation":"[\"Põhiidee: Aktiivselt vaadata või pilku heita.\",\"Schauen tähend…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "schauen",
  "lv": "Vaatama",
  "level": "A1",
  "study": {
    "id": "a1-schauen-study",
    "layout": "standardStudy",
    "translation": "Vaatama",
    "explanation": [
      "Põhiidee: Aktiivselt vaadata või pilku heita.",
      "Schauen tähendab peamiselt: aktiivselt vaatama.",
      "Sageli kirjeldab: tegevust.",
      "Schauen tähendab aktiivselt vaatamist."
    ],
    "examples": [
      {
        "de": "Ich schaue fern.",
        "lv": "Ma vaatan telerit."
      },
      {
        "de": "Wir schauen aus dem Fenster.",
        "lv": "Me vaatame aknast välja."
      },
      {
        "de": "Ich schaue fern.",
        "lv": "Ma vaatan telerit."
      }
    ],
    "comparison": [
      {
        "word": "schauen",
        "meaning": "Vaatama (aktiivselt)",
        "example": "Ich schaue aus dem Fenster. – Ma vaatan aknast välja."
      },
      {
        "word": "sehen",
        "meaning": "Nägema (ilma kavatsuseta)",
        "example": "Ich sehe dich. – Ma näen sind."
      }
    ],
    "tip": [
      "schauen = titta",
      "Använd schauen när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "schauen = titta.",
      "Titta aktivt eller kasta en blick."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "schauen"
        ],
        "purple": [
          "vaatama"
        ],
        "orange": [
          "vaatama"
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
              "vaatan"
            ]
          }
        },
        {
          "de": {
            "green": [
              "schauen",
              "schauen"
            ]
          },
          "lv": {
            "purple": [
              "vaatame"
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
              "vaatan"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "schauen"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "schauen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 6

**Audit ID:** `LRB100-0006`
**Finding Stable ID:** `g2/a1/sv|schon|idx:521|lv; study.explanation; study.examples; study.tip; study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `schon|idx:521`
**Field / path:** `lv; study.explanation; study.examples; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** jau
**DE reference (read-only):** schon
**CURRENT (captured scope):** {"lv":"Juba","study.explanation":"[\"Põhiidee: Miski on juba juhtunud või juba kehtib.\",\"Schon tähendab peamiselt: midagi on juba toimunud või kehtib.\",\"Sageli kirjeldab: toimunud fakti või olemasolevat olekut.\",\"Schon tähendab juba: midagi on juba toimunud või juba kehtib.\"]","study.examples":"[{\"de\":\"Ich bin schon zu Hause.\",\"lv\":\"Ma olen juba kodus.\"}]","study.tip":"[\"Något har redan hänt eller redan gäller.\",\"Använd schon när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"schon = redan.\",\"Något har redan hänt eller redan gäller.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts schon\|idx:521 (schon), ceļš 'lv; study.explanation; study.examples; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.tip, study.important, kuru saturs sākas ar '{"lv":"Juba","study.explanation":"[\"Põhiidee: Miski on juba juhtunud või juba kehtib.\",\"Schon tähenda…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "schon",
  "lv": "Juba",
  "level": "A1",
  "study": {
    "id": "a1-schon-study",
    "layout": "standardStudy",
    "translation": "Juba",
    "explanation": [
      "Põhiidee: Miski on juba juhtunud või juba kehtib.",
      "Schon tähendab peamiselt: midagi on juba toimunud või kehtib.",
      "Sageli kirjeldab: toimunud fakti või olemasolevat olekut.",
      "Schon tähendab juba: midagi on juba toimunud või juba kehtib."
    ],
    "examples": [
      {
        "de": "Ich bin schon zu Hause.",
        "lv": "Ma olen juba kodus."
      }
    ],
    "tip": [
      "Något har redan hänt eller redan gäller.",
      "Använd schon när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "schon = redan.",
      "Något har redan hänt eller redan gäller."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "schon",
          "schon"
        ],
        "purple": [
          "juba"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "schon",
              "schon"
            ]
          },
          "lv": {
            "purple": [
              "juba"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Kaut"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "schon"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 7

**Audit ID:** `LRB100-0007`
**Finding Stable ID:** `g2/a1/sv|schwimmen|idx:531|lv; study.translation; study.explanation; study.comparison; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `schwimmen|idx:531`
**Field / path:** `lv; study.translation; study.explanation; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** peldēt
**DE reference (read-only):** schwimmen
**CURRENT (captured scope):** {"lv":"Ujuma","study.translation":"Ujuma","study.explanation":"[\"Põhiidee: schwimmen tähendab ujuma kui liikumist või sporti.\",\"Schwimmen kasutatakse, kui inimene ujub vees ujumisliigutustega.\",\"Kui jutt on vees puhkamisest või suplemisest, kasutatakse sageli baden.\",\"A1 tasemel on oluline eristada: schwimmen = ujuma, baden = suplema.\"]","study.comparison":"[{\"word\":\"schwimmen\",\"meaning\":\"Ujuma liikumisena või spordina\",\"example\":\"Han simmar mycket bra.\"},{\"word\":\"baden\",\"meaning\":\"Suplema / vees olema\",\"example\":\"Jag går för att bada.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"Ujuma minema\",\"example\":\"Vi går för att simma.\"},{\"word\":\"duschen\",\"meaning\":\"Duši all käima\",\"example\":\"Jag duschar på morgonen.\"}]","study.important":"[\"schwimmen och baden är inte samma sak.\",\"På svenska säger man ofta \\\"simma\\\", men på tyska måste man se om det är rörelse eller simning.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts schwimmen\|idx:531 (schwimmen), ceļš 'lv; study.translation; study.explanation; study.comparison; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Ujuma","study.translation":"Ujuma","study.explanation":"[\"Põhiidee: schwimmen tähendab ujuma kui…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "schwimmen",
  "lv": "Ujuma",
  "level": "A1",
  "study": {
    "id": "a1-schwimmen",
    "layout": "standardStudy",
    "translation": "Ujuma",
    "explanation": [
      "Põhiidee: schwimmen tähendab ujuma kui liikumist või sporti.",
      "Schwimmen kasutatakse, kui inimene ujub vees ujumisliigutustega.",
      "Kui jutt on vees puhkamisest või suplemisest, kasutatakse sageli baden.",
      "A1 tasemel on oluline eristada: schwimmen = ujuma, baden = suplema."
    ],
    "examples": [
      {
        "de": "Ich schwimme gern.",
        "lv": "Mulle meeldib ujuda."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Ta ujub väga hästi."
      },
      {
        "de": "Wir schwimmen im Schwimmbad.",
        "lv": "Me ujume basseinis."
      },
      {
        "de": "Ich gehe baden.",
        "lv": "Ma lähen ujuma."
      }
    ],
    "comparison": [
      {
        "word": "schwimmen",
        "meaning": "Ujuma liikumisena või spordina",
        "example": "Han simmar mycket bra."
      },
      {
        "word": "baden",
        "meaning": "Suplema / vees olema",
        "example": "Jag går för att bada."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "Ujuma minema",
        "example": "Vi går för att simma."
      },
      {
        "word": "duschen",
        "meaning": "Duši all käima",
        "example": "Jag duschar på morgonen."
      }
    ],
    "tip": {
      "text": "Atceries: peldēšanas kustība → schwimmen; atpūta ūdenī → baden."
    },
    "important": [
      "schwimmen och baden är inte samma sak.",
      "På svenska säger man ofta \"simma\", men på tyska måste man se om det är rörelse eller simning."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "schwimmen"
        ],
        "purple": [
          "ujuma",
          "ujumisliigutustega"
        ],
        "red": [
          "baden",
          "suplema"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "schwimme"
            ]
          },
          "lv": {
            "purple": [
              "ujuda"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "schwimmt"
            ]
          },
          "lv": {
            "purple": [
              "ujub"
            ]
          }
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
          "lv": {
            "purple": [
              "ujume"
            ],
            "green": [
              "basseinis"
            ]
          }
        },
        {
          "de": {
            "red": [
              "baden"
            ]
          },
          "lv": {
            "red": [
              "lähen"
            ]
          }
        }
      ],
      "comparison": [
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
          "meaning": {
            "purple": [
              "suplema",
              "vees"
            ]
          },
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
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "schwimmen"
          ],
          "purple": [
            "Atceries"
          ],
          "red": [
            "baden",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "schwimmen"
          ],
          "red": [
            "baden"
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

## Finding 8

**Audit ID:** `LRB100-0008`
**Finding Stable ID:** `g2/a1/sv|sehen|idx:539|lv; study.translation; study.explanation; study.comparison; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `sehen|idx:539`
**Field / path:** `lv; study.translation; study.explanation; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** redzēt
**DE reference (read-only):** sehen
**CURRENT (captured scope):** {"lv":"Nägema","study.translation":"Nägema","study.explanation":"[\"Põhiidee: sehen tähendab silmadega nägema.\",\"Kui jutt on sellest, mida silmad tajuvad, kasutatakse sehen.\",\"Teadlik vaatamine on sageli schauen või ansehen.\",\"Väga sage fraas on Ich sehe dich. = Ma näen sind.\"]","study.comparison":"[{\"word\":\"sehen\",\"meaning\":\"Nägema\",\"example\":\"Jag ser dig.\"},{\"word\":\"schauen\",\"meaning\":\"Vaatama\",\"example\":\"Jag tittar på bilden.\"},{\"word\":\"ansehen\",\"meaning\":\"Vaatama / vaatlema\",\"example\":\"Jag tittar på filmen.\"},{\"word\":\"hören\",\"meaning\":\"Kuulma\",\"example\":\"Jag lyssnar på musik.\"}]","study.important":"[\"sehen är inte detsamma som anschauen.\",\"Ich sehe dich = jag ser dig; Ich schaue den Film = jag tittar på filmen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts sehen\|idx:539 (sehen), ceļš 'lv; study.translation; study.explanation; study.comparison; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Nägema","study.translation":"Nägema","study.explanation":"[\"Põhiidee: sehen tähendab silmadega n…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sehen",
  "lv": "Nägema",
  "level": "A1",
  "study": {
    "id": "a1-sehen",
    "layout": "standardStudy",
    "translation": "Nägema",
    "explanation": [
      "Põhiidee: sehen tähendab silmadega nägema.",
      "Kui jutt on sellest, mida silmad tajuvad, kasutatakse sehen.",
      "Teadlik vaatamine on sageli schauen või ansehen.",
      "Väga sage fraas on Ich sehe dich. = Ma näen sind."
    ],
    "examples": [
      {
        "de": "Ich sehe dich.",
        "lv": "Ma näen sind."
      },
      {
        "de": "Siehst du das Auto?",
        "lv": "Kas sa näed seda autot?"
      },
      {
        "de": "Ich sehe nichts.",
        "lv": "Ma ei näe midagi."
      },
      {
        "de": "Wir schauen einen Film.",
        "lv": "Me vaatame filmi."
      }
    ],
    "comparison": [
      {
        "word": "sehen",
        "meaning": "Nägema",
        "example": "Jag ser dig."
      },
      {
        "word": "schauen",
        "meaning": "Vaatama",
        "example": "Jag tittar på bilden."
      },
      {
        "word": "ansehen",
        "meaning": "Vaatama / vaatlema",
        "example": "Jag tittar på filmen."
      },
      {
        "word": "hören",
        "meaning": "Kuulma",
        "example": "Jag lyssnar på musik."
      }
    ],
    "tip": {
      "text": "Atceries: acis uztver → sehen; apzināti skaties → schauen/ansehen."
    },
    "important": [
      "sehen är inte detsamma som anschauen.",
      "Ich sehe dich = jag ser dig; Ich schaue den Film = jag tittar på filmen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sehen",
          "Ich sehe"
        ],
        "purple": [
          "nägema",
          "silmadega"
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
          "lv": {
            "purple": [
              "näen"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Siehst"
            ]
          },
          "lv": {
            "purple": [
              "näed"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sehe"
            ]
          },
          "lv": {
            "purple": [
              "ei näe"
            ]
          }
        },
        {
          "de": {
            "red": [
              "schauen"
            ]
          },
          "lv": {
            "red": [
              "vaatame"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sehen"
            ]
          },
          "meaning": {
            "purple": [
              "nägema"
            ]
          },
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
          "meaning": {
            "purple": [
              "vaatama"
            ]
          },
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
          "meaning": {
            "purple": [
              "vaatama",
              "vaatama"
            ]
          },
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
          "meaning": {
            "purple": [
              "kuulma"
            ]
          },
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
          "purple": [
            "Atceries"
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
            "sehen"
          ],
          "red": [
            "anschauen"
          ]
        },
        {
          "blue": [
            "sehe"
          ],
          "purple": [
            "Ich"
          ],
          "red": [
            "schaue",
            "Ich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 9

**Audit ID:** `LRB100-0009`
**Finding Stable ID:** `g2/a1/sv|sein|idx:542|lv; study.translation; study.explanation; study.comparison; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `sein|idx:542`
**Field / path:** `lv; study.translation; study.explanation; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** būt
**DE reference (read-only):** sein
**CURRENT (captured scope):** {"lv":"Olema","study.translation":"Olema","study.explanation":"[\"Põhiidee: sein tähendab olemist.\",\"Sein on üks tähtsamaid saksa tegusõnu.\",\"A1 tasemel on eriti tähtsad vormid ich bin, du bist, er ist ja wir sind.\",\"Sein kasutatakse ka paljudes lausetes koos asukoha või omadusega.\"]","study.comparison":"[{\"word\":\"sein\",\"meaning\":\"Olema\",\"example\":\"Jag är här.\"},{\"word\":\"haben\",\"meaning\":\"Mul on\",\"example\":\"Jag har tid.\"},{\"word\":\"werden\",\"meaning\":\"Saama\",\"example\":\"Jag blir trött.\"},{\"word\":\"bleiben\",\"meaning\":\"Jääma\",\"example\":\"Jag stannar här.\"}]","study.important":"[\"sein-formerna måste läras in separat: bin, bist, ist, sind.\",\"Ich bin är \\\"jag är\\\", inte \\\"jag ska vara\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts sein\|idx:542 (sein), ceļš 'lv; study.translation; study.explanation; study.comparison; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Olema","study.translation":"Olema","study.explanation":"[\"Põhiidee: sein tähendab olemist.\",\"S…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sein",
  "lv": "Olema",
  "level": "A1",
  "study": {
    "id": "a1-sein",
    "layout": "standardStudy",
    "translation": "Olema",
    "explanation": [
      "Põhiidee: sein tähendab olemist.",
      "Sein on üks tähtsamaid saksa tegusõnu.",
      "A1 tasemel on eriti tähtsad vormid ich bin, du bist, er ist ja wir sind.",
      "Sein kasutatakse ka paljudes lausetes koos asukoha või omadusega."
    ],
    "examples": [
      {
        "de": "Ich bin hier.",
        "lv": "Ma olen siin."
      },
      {
        "de": "Du bist müde.",
        "lv": "Sa oled väsinud."
      },
      {
        "de": "Er ist Lehrer.",
        "lv": "Ta on õpetaja."
      },
      {
        "de": "Wir sind zu Hause.",
        "lv": "Me oleme kodus."
      }
    ],
    "comparison": [
      {
        "word": "sein",
        "meaning": "Olema",
        "example": "Jag är här."
      },
      {
        "word": "haben",
        "meaning": "Mul on",
        "example": "Jag har tid."
      },
      {
        "word": "werden",
        "meaning": "Saama",
        "example": "Jag blir trött."
      },
      {
        "word": "bleiben",
        "meaning": "Jääma",
        "example": "Jag stannar här."
      }
    ],
    "tip": {
      "text": "Atceries: ich bin = es esmu; du bist = tu esi."
    },
    "important": [
      "sein-formerna måste läras in separat: bin, bist, ist, sind.",
      "Ich bin är \"jag är\", inte \"jag ska vara\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sein",
          "ich bin",
          "du bist",
          "er ist",
          "wir sind"
        ],
        "purple": [
          "olemist",
          "asukoha",
          "omadusega"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "bin"
            ]
          },
          "lv": {
            "purple": [
              "olen"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "bist"
            ]
          },
          "lv": {
            "purple": [
              "oled"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "ist"
            ]
          },
          "lv": {
            "purple": [
              "on"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sind"
            ]
          },
          "lv": {
            "purple": [
              "oleme"
            ]
          }
        }
      ],
      "comparison": [
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
          "meaning": {
            "purple": [
              "mul on"
            ]
          },
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
          "meaning": {
            "purple": [
              "saama"
            ]
          },
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
          "meaning": {
            "purple": [
              "jääma"
            ]
          },
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
            "ich bin",
            "du bist"
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
            "bin",
            "bist",
            "ist",
            "sind"
          ]
        },
        {
          "blue": [
            "Ich bin"
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

## Finding 10

**Audit ID:** `LRB100-0010`
**Finding Stable ID:** `g2/a1/sv|Seite|idx:544|lv; study.translation; study.explanation; study.tip; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `Seite|idx:544`
**Field / path:** `lv; study.translation; study.explanation; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** lappuse • puse
**DE reference (read-only):** Seite
**CURRENT (captured scope):** {"lv":"Lehekülg • Külg","study.translation":"Lehekülg • Külg","study.explanation":"[\"Põhiidee: die Seite võib tähendada raamatu/dokumendi lehekülge või mingi asja külge/serva.\",\"Raamatus, ajakirjas või veebilehel die Seite = lehekülg (Seite 5 = 5. lehekülg).\",\"Ruumilises tähenduses die Seite = külg (auf der linken Seite = vasakul pool).\",\"Ülekantud tähenduses võib die Seite tähendada ka poolt konfliktis või mõtetes (auf meiner Seite = minu poolel).\",\"Kontekst (raamat/lugemine või asend/suhted) näitab õiget tähendust.\",\"Mitmuses mõlema tähenduse puhul: die Seiten.\"]","study.tip":"[\"Talar man om en bok eller läsning → sida. Talar man om läge, riktning eller relationer → kant.\",\"Seite X i en bok är alltid sida, inte kant.\"]","study.important":"[\"die Seite = sida ELLER kant — sammanhanget avgör.\",\"Mitmuses mõlema tähenduse puhul: die Seiten.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Seite\|idx:544 (Seite), ceļš 'lv; study.translation; study.explanation; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Lehekülg • Külg","study.translation":"Lehekülg • Külg","study.explanation":"[\"Põhiidee: die Seit…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Seite",
  "de_article": "die",
  "de_plural": "die Seiten",
  "lv": "Lehekülg • Külg",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "Lehekülg • Külg",
    "explanation": [
      "Põhiidee: die Seite võib tähendada raamatu/dokumendi lehekülge või mingi asja külge/serva.",
      "Raamatus, ajakirjas või veebilehel die Seite = lehekülg (Seite 5 = 5. lehekülg).",
      "Ruumilises tähenduses die Seite = külg (auf der linken Seite = vasakul pool).",
      "Ülekantud tähenduses võib die Seite tähendada ka poolt konfliktis või mõtetes (auf meiner Seite = minu poolel).",
      "Kontekst (raamat/lugemine või asend/suhted) näitab õiget tähendust.",
      "Mitmuses mõlema tähenduse puhul: die Seiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Avage kahekümnes lehekülg."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Vasakul pool on park."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Veebileht laadib aeglaselt."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "Ta on minu poolel."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Raamatul on 200 lehekülge."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "Teisel pool tänavat."
      }
    ],
    "tip": [
      "Talar man om en bok eller läsning → sida. Talar man om läge, riktning eller relationer → kant.",
      "Seite X i en bok är alltid sida, inte kant."
    ],
    "important": [
      "die Seite = sida ELLER kant — sammanhanget avgör.",
      "Mitmuses mõlema tähenduse puhul: die Seiten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "die Seite",
          "Seite"
        ],
        "purple": [
          "lehekülg",
          "pool"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Seite"
            ]
          },
          "lv": {
            "purple": [
              "lehekülg"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Seite"
            ]
          },
          "lv": {
            "purple": [
              "pool"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Webseite"
            ]
          },
          "lv": {
            "purple": [
              "veebileht"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Seite"
            ]
          },
          "lv": {
            "purple": [
              "poolel"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Seiten"
            ]
          },
          "lv": {
            "purple": [
              "lehekülge"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Seite"
            ]
          },
          "lv": {
            "purple": [
              "pool"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "Runā"
          ],
          "green": [
            "Runā"
          ]
        },
        {
          "blue": [
            "Seite"
          ],
          "purple": [
            "Runā"
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

## Finding 11

**Audit ID:** `LRB100-0011`
**Finding Stable ID:** `g2/a1/sv|sich|idx:547|lv; study.translation; study.explanation; study.comparison; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `sich|idx:547`
**Field / path:** `lv; study.translation; study.explanation; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ISSUE
**LV source (read-only):** sevi • sev
**DE reference (read-only):** sich
**CURRENT (captured scope):** {"lv":"End • Endale","study.translation":"End • Endale","study.explanation":"[\"Põhiidee: sich näitab, et tegevus käib tegija enda kohta.\",\"Eesti keeles tõlgitakse seda sageli kui ennast või endale.\",\"Mõne saksa tegusõna puhul on sich kohustuslik osa, näiteks sich waschen.\",\"A1 tasemel on oluline tähele panna: ich wasche mich, er wäscht sich.\"]","study.comparison":"[{\"word\":\"sich\",\"meaning\":\"End / endale\",\"example\":\"Han tvättar sig.\"},{\"word\":\"mich\",\"meaning\":\"Mind / ennast ich puhul\",\"example\":\"Jag tvättar mig.\"},{\"word\":\"dich\",\"meaning\":\"Sind / ennast du puhul\",\"example\":\"Du tvättar dig.\"},{\"word\":\"ihn\",\"meaning\":\"Teda\",\"example\":\"Jag ser honom.\"}]","study.important":"[\"sich är inte ett fristående substantiv.\",\"Det ändras enligt person: ich → mich, du → dich, er/sie/es → sich.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts sich\|idx:547 (sich), ceļš 'lv; study.translation; study.explanation; study.comparison; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.comparison, study.important, kuru saturs sākas ar '{"lv":"End • Endale","study.translation":"End • Endale","study.explanation":"[\"Põhiidee: sich näitab, e…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sich",
  "lv": "End • Endale",
  "level": "A1",
  "study": {
    "id": "a1-sich",
    "layout": "standardStudy",
    "translation": "End • Endale",
    "explanation": [
      "Põhiidee: sich näitab, et tegevus käib tegija enda kohta.",
      "Eesti keeles tõlgitakse seda sageli kui ennast või endale.",
      "Mõne saksa tegusõna puhul on sich kohustuslik osa, näiteks sich waschen.",
      "A1 tasemel on oluline tähele panna: ich wasche mich, er wäscht sich."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "Ta peseb end."
      },
      {
        "de": "Ich setze mich.",
        "lv": "Ma istun maha."
      },
      {
        "de": "Sie freut sich.",
        "lv": "Ta rõõmustab."
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "Ma pesen autot."
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "End / endale",
        "example": "Han tvättar sig."
      },
      {
        "word": "mich",
        "meaning": "Mind / ennast ich puhul",
        "example": "Jag tvättar mig."
      },
      {
        "word": "dich",
        "meaning": "Sind / ennast du puhul",
        "example": "Du tvättar dig."
      },
      {
        "word": "ihn",
        "meaning": "Teda",
        "example": "Jag ser honom."
      }
    ],
    "tip": {
      "text": "Atceries: darbība uz sevi → sich/mich/dich."
    },
    "important": [
      "sich är inte ett fristående substantiv.",
      "Det ändras enligt person: ich → mich, du → dich, er/sie/es → sich."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sich",
          "ich wasche mich",
          "er wäscht sich"
        ],
        "purple": [
          "end",
          "endale",
          "Põhiidee"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sich"
            ]
          },
          "lv": {
            "purple": [
              "peseb"
            ]
          }
        },
        {
          "de": {
            "green": [
              "mich"
            ]
          },
          "lv": {
            "purple": [
              "istun"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sich"
            ]
          },
          "lv": {
            "purple": [
              "rõõmustab"
            ]
          }
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
          "lv": {
            "red": [
              "pesen"
            ],
            "yellow": [
              "autot"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sich"
            ]
          },
          "meaning": {
            "purple": [
              "end",
              "endale"
            ]
          },
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
          "meaning": {
            "purple": [
              "mind",
              "mind"
            ]
          },
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
          "meaning": {
            "purple": [
              "sind",
              "sind"
            ]
          },
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
          "meaning": {
            "purple": [
              "teda"
            ]
          },
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
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "sich"
          ],
          "red": [
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

## Finding 12

**Audit ID:** `LRB100-0012`
**Finding Stable ID:** `g2/a1/sv|sicher|idx:548|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `sicher|idx:548`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** drošs • noteikti
**DE reference (read-only):** sicher
**CURRENT (captured scope):** {"lv":"Kindel • Kindlasti","study.translation":"Kindel • Kindlasti","study.explanation":"[\"Põhiidee: sicher tähendab omadussõnana kindel, määrsõnana tähendab kindlasti/küllap.\",\"Kohast, olukorrast või inimesest rääkides sicher = turvaline (ein sicherer Ort = turvaline koht).\",\"Kinnitusena või veendumusena lauses sicher = kindlasti/muidugi (Das ist sicher wahr. = See on kindlasti tõsi.).\",\"Sicher! eraldi vastusena tähendab muidugi!/küllap!\"]","study.examples":"[{\"de\":\"Ist das Wasser sicher?\",\"lv\":\"Kas vesi on ohutu?\"},{\"de\":\"Kommst du morgen? – Sicher!\",\"lv\":\"Kas sa tuled homme? – kindlasti!\"},{\"de\":\"Er ist sicher zu Hause.\",\"lv\":\"Ta on arvatavasti kodus.\"},{\"de\":\"Das ist eine sichere Lösung.\",\"lv\":\"See on kindel lahendus.\"},{\"de\":\"Ich bin mir sicher.\",\"lv\":\"Ma olen kindel.\"},{\"de\":\"Fahr sicher!\",\"lv\":\"Sõida ohutult!\"}]","study.tip":"[\"Om en plats eller situation (säkerhet) → säker.\",\"Som övertygelse eller bekräftelse i meningen → säkert/nog.\"]","study.important":"[\"sicher = säker (adjektiv) ELLER säkert/nog (adverb).\",\"sich sicher sein = vara säker.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts sicher\|idx:548 (sicher), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Kindel • Kindlasti","study.translation":"Kindel • Kindlasti","study.explanation":"[\"Põhiidee: si…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sicher",
  "lv": "Kindel • Kindlasti",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "Kindel • Kindlasti",
    "explanation": [
      "Põhiidee: sicher tähendab omadussõnana kindel, määrsõnana tähendab kindlasti/küllap.",
      "Kohast, olukorrast või inimesest rääkides sicher = turvaline (ein sicherer Ort = turvaline koht).",
      "Kinnitusena või veendumusena lauses sicher = kindlasti/muidugi (Das ist sicher wahr. = See on kindlasti tõsi.).",
      "Sicher! eraldi vastusena tähendab muidugi!/küllap!"
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "Kas vesi on ohutu?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "Kas sa tuled homme? – kindlasti!"
      },
      {
        "de": "Er ist sicher zu Hause.",
        "lv": "Ta on arvatavasti kodus."
      },
      {
        "de": "Das ist eine sichere Lösung.",
        "lv": "See on kindel lahendus."
      },
      {
        "de": "Ich bin mir sicher.",
        "lv": "Ma olen kindel."
      },
      {
        "de": "Fahr sicher!",
        "lv": "Sõida ohutult!"
      }
    ],
    "tip": [
      "Om en plats eller situation (säkerhet) → säker.",
      "Som övertygelse eller bekräftelse i meningen → säkert/nog."
    ],
    "important": [
      "sicher = säker (adjektiv) ELLER säkert/nog (adverb).",
      "sich sicher sein = vara säker."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sicher"
        ],
        "purple": [
          "kindel",
          "kindlasti"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sicher"
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
            "green": [
              "Sicher"
            ]
          },
          "lv": {
            "purple": [
              "kindlasti"
            ]
          }
        },
        {
          "de": {
            "green": [
              "sicher"
            ]
          },
          "lv": {
            "purple": [
              "arvatavasti"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sichere"
            ]
          },
          "lv": {
            "purple": [
              "kindel"
            ]
          }
        },
        {
          "de": {
            "green": [
              "sicher"
            ]
          },
          "lv": {
            "purple": [
              "olen"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sicher"
            ]
          },
          "lv": {
            "purple": [
              "sõida"
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
            "Par",
            "Par"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "sicher",
            "sicher",
            "sicher"
          ]
        },
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

## Finding 13

**Audit ID:** `LRB100-0013`
**Finding Stable ID:** `g2/a1/sv|sie|idx:549|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `sie|idx:549`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** viņi / viņas
**DE reference (read-only):** sie
**CURRENT (captured scope):** {"lv":"Nemad / nad","study.translation":"Nemad / nad","study.explanation":"[\"Põhiidee: Mitmuse vorm — jutt on mitmest inimesest. Tegusõna lõpeb -en: kochen, essen, gehen.\",\"Sie tähendab peamiselt: üks naine.\",\"Sageli kirjeldab: tegusõna ainsuses (-t).\",\"Sie tähendab peamiselt: mitu inimest.\",\"Sageli kirjeldab: tegusõna mitmuses (-en).\",\"Sie tähendab peamiselt: viisakas pöördumine.\",\"Sageli kirjeldab: kohustuslikult suure S-tähega.\",\"Väike sie tähendab teda, kui tegusõna on ainsuses (Sie kocht = tema teeb süüa).\"]","study.examples":"[{\"de\":\"Sie kochen.\",\"lv\":\"Anna teeb süüa. Ta teeb seda iga päev.\"},{\"de\":\"Sie kocht.\",\"lv\":\"Maria on arst. Ta töötab haiglas.\"},{\"de\":\"Sie isst.\",\"lv\":\"Anna ja Paul teevad süüa. Nad teevad seda koos.\"},{\"de\":\"Sie kochen.\",\"lv\":\"Lapsed mängivad aias. Nad mängivad jalgpalli.\"},{\"de\":\"Sie spielen Fußball.\",\"lv\":\"Proua Keller, kas te teete meelsasti süüa?\"},{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Härra Müller, kas te olete siin uus?\"}]","study.tip":"[\"Pluralform — man talar om flera personer. Verbet slutar på -en: kochen, essen, gehen.\",\"Använd sie när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"Höflig tilltal alltid med stort S: Sie, inte sie.\",\"Hon: Sie kocht. De: sie kochen. Ni: Sie kochen.\",\"Felaktigt: sie kocht → Korrekt: Sie kocht\",\"Felaktigt: Sie kocht (de) → Korrekt: Sie kochen\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts sie\|idx:549 (sie), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Nemad / nad","study.translation":"Nemad / nad","study.explanation":"[\"Põhiidee: Mitmuse vorm — j…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sie",
  "lv": "Nemad / nad",
  "level": "A1",
  "study": {
    "id": "a1-sie-study",
    "layout": "standardStudy",
    "translation": "Nemad / nad",
    "explanation": [
      "Põhiidee: Mitmuse vorm — jutt on mitmest inimesest. Tegusõna lõpeb -en: kochen, essen, gehen.",
      "Sie tähendab peamiselt: üks naine.",
      "Sageli kirjeldab: tegusõna ainsuses (-t).",
      "Sie tähendab peamiselt: mitu inimest.",
      "Sageli kirjeldab: tegusõna mitmuses (-en).",
      "Sie tähendab peamiselt: viisakas pöördumine.",
      "Sageli kirjeldab: kohustuslikult suure S-tähega.",
      "Väike sie tähendab teda, kui tegusõna on ainsuses (Sie kocht = tema teeb süüa)."
    ],
    "examples": [
      {
        "de": "Sie kochen.",
        "lv": "Anna teeb süüa. Ta teeb seda iga päev."
      },
      {
        "de": "Sie kocht.",
        "lv": "Maria on arst. Ta töötab haiglas."
      },
      {
        "de": "Sie isst.",
        "lv": "Anna ja Paul teevad süüa. Nad teevad seda koos."
      },
      {
        "de": "Sie kochen.",
        "lv": "Lapsed mängivad aias. Nad mängivad jalgpalli."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Proua Keller, kas te teete meelsasti süüa?"
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Härra Müller, kas te olete siin uus?"
      }
    ],
    "tip": [
      "Pluralform — man talar om flera personer. Verbet slutar på -en: kochen, essen, gehen.",
      "Använd sie när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "Höflig tilltal alltid med stort S: Sie, inte sie.",
      "Hon: Sie kocht. De: sie kochen. Ni: Sie kochen.",
      "Felaktigt: sie kocht → Korrekt: Sie kocht",
      "Felaktigt: Sie kocht (de) → Korrekt: Sie kochen"
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "sie",
          "kochen"
        ],
        "purple": [
          "Põhiidee",
          "tema"
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
          "lv": {
            "purple": [
              "Ta"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sie",
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "Ta"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sie",
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "Nad"
            ]
          }
        },
        {
          "de": {
            "green": [
              "sie",
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "Nad"
            ]
          }
        },
        {
          "de": {
            "green": [
              "sie",
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "te"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "te"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Daudzskaitļa"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "Sie"
          ],
          "green": [
            "Sie"
          ],
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

## Finding 14

**Audit ID:** `LRB100-0014`
**Finding Stable ID:** `g2/a1/sv|Sie|idx:550|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `Sie|idx:550`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** jūs
**DE reference (read-only):** Sie
**CURRENT (captured scope):** {"lv":"Teie","study.translation":"Teie","study.explanation":"[\"Põhiidee: Viisakas pöördumine — alati suure S-iga. Eesti keeles: teie. Sageli tegusõnaga mitmuses.\",\"Sie tähendab peamiselt: üks naine.\",\"Sageli kirjeldab: tegusõna ainsuses (-t).\",\"Sie tähendab peamiselt: mitu inimest.\",\"Sageli kirjeldab: tegusõna mitmuses (-en).\",\"Sie tähendab peamiselt: viisakas pöördumine.\",\"Sageli kirjeldab: kohustuslikult suure S-tähega.\",\"Väike sie tähendab teda, kui tegusõna on ainsuses (Sie kocht = tema teeb süüa).\"]","study.examples":"[{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Teie teete süüa, palun.\"},{\"de\":\"Sie kocht.\",\"lv\":\"Ta teeb süüa.\"},{\"de\":\"Sie isst.\",\"lv\":\"Ta sööb.\"},{\"de\":\"Sie kochen.\",\"lv\":\"Nad teevad süüa.\"},{\"de\":\"Sie spielen Fußball.\",\"lv\":\"Nad mängivad jalgpalli.\"},{\"de\":\"Sie kochen, bitte.\",\"lv\":\"Teie teete süüa, palun.\"}]","study.tip":"[\"Höflig tilltal — alltid med stort S. På svenska: ni. Ofta med verbet i plural.\",\"Använd Sie när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"Höflig tilltal alltid med stort S: Sie, inte sie.\",\"Hon: Sie kocht. De: sie kochen. Ni: Sie kochen.\",\"Felaktigt: sie kocht → Korrekt: Sie kocht\",\"Felaktigt: Sie kocht (de) → Korrekt: Sie kochen\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Sie\|idx:550 (Sie), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Teie","study.translation":"Teie","study.explanation":"[\"Põhiidee: Viisakas pöördumine — alati su…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Sie",
  "lv": "Teie",
  "level": "A1",
  "study": {
    "id": "a1-sie-study-2",
    "layout": "standardStudy",
    "translation": "Teie",
    "explanation": [
      "Põhiidee: Viisakas pöördumine — alati suure S-iga. Eesti keeles: teie. Sageli tegusõnaga mitmuses.",
      "Sie tähendab peamiselt: üks naine.",
      "Sageli kirjeldab: tegusõna ainsuses (-t).",
      "Sie tähendab peamiselt: mitu inimest.",
      "Sageli kirjeldab: tegusõna mitmuses (-en).",
      "Sie tähendab peamiselt: viisakas pöördumine.",
      "Sageli kirjeldab: kohustuslikult suure S-tähega.",
      "Väike sie tähendab teda, kui tegusõna on ainsuses (Sie kocht = tema teeb süüa)."
    ],
    "examples": [
      {
        "de": "Sie kochen, bitte.",
        "lv": "Teie teete süüa, palun."
      },
      {
        "de": "Sie kocht.",
        "lv": "Ta teeb süüa."
      },
      {
        "de": "Sie isst.",
        "lv": "Ta sööb."
      },
      {
        "de": "Sie kochen.",
        "lv": "Nad teevad süüa."
      },
      {
        "de": "Sie spielen Fußball.",
        "lv": "Nad mängivad jalgpalli."
      },
      {
        "de": "Sie kochen, bitte.",
        "lv": "Teie teete süüa, palun."
      }
    ],
    "tip": [
      "Höflig tilltal — alltid med stort S. På svenska: ni. Ofta med verbet i plural.",
      "Använd Sie när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "Höflig tilltal alltid med stort S: Sie, inte sie.",
      "Hon: Sie kocht. De: sie kochen. Ni: Sie kochen.",
      "Felaktigt: sie kocht → Korrekt: Sie kocht",
      "Felaktigt: Sie kocht (de) → Korrekt: Sie kochen"
    ],
    "sectionAccents": {
      "explanation": {
        "yellow": [
          "Sie",
          "kocht"
        ],
        "purple": [
          "teie"
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
          "lv": {
            "purple": [
              "teie"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "teeb"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "sööb"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "nad"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "nad"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "Sie",
              "sie"
            ]
          },
          "lv": {
            "purple": [
              "teie"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Pieklājības"
          ]
        }
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

## Finding 15

**Audit ID:** `LRB100-0015`
**Finding Stable ID:** `g2/a1/sv|sitzen|idx:558|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `sitzen|idx:558`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** sēdēt
**DE reference (read-only):** sitzen
**CURRENT (captured scope):** {"lv":"Istuma","study.translation":"Istuma","study.explanation":"[\"Põhiidee: sitzen tähendab istumist.\",\"Sitzen kasutatakse inimese või looma kohta, kes istub.\",\"Vahel tähendab sitzen ka kindlas kohas asumist, aga A1 tasemel on peamine tähendus istuma.\",\"Oluline on eristada: sitzen = istuma, stehen = seisma, liegen = lamama/pikali olema.\"]","study.examples":"[{\"de\":\"Ich sitze am Tisch.\",\"lv\":\"Ma istun laua taga.\"},{\"de\":\"Die Kinder sitzen im Bus.\",\"lv\":\"Lapsed istuvad bussis.\"},{\"de\":\"Er steht an der Tür.\",\"lv\":\"Ta seisab ukse juures.\"},{\"de\":\"Die Katze liegt auf dem Sofa.\",\"lv\":\"Kass lamab diivanil.\"}]","study.comparison":"[{\"word\":\"sitzen\",\"meaning\":\"Istuma\",\"example\":\"Jag sitter vid bordet.\"},{\"word\":\"stehen\",\"meaning\":\"Seisma\",\"example\":\"Han står vid dörren.\"},{\"word\":\"liegen\",\"meaning\":\"Lamama / pikali olema\",\"example\":\"Katten ligger där.\"},{\"word\":\"setzen\",\"meaning\":\"Istet võtma / istuma panema\",\"example\":\"Jag sätter mig.\"}]","study.tip":"{\"text\":\"Atceries: sēdus → sitzen; stāvus → stehen; guļus → liegen.\"}","study.important":"[\"sitzen visar läge \\\"sitta\\\".\",\"Att sätta sig är sich setzen, inte sitzen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts sitzen\|idx:558 (sitzen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Istuma","study.translation":"Istuma","study.explanation":"[\"Põhiidee: sitzen tähendab istumist.\…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sitzen",
  "lv": "Istuma",
  "level": "A1",
  "study": {
    "id": "a1-sitzen",
    "layout": "standardStudy",
    "translation": "Istuma",
    "explanation": [
      "Põhiidee: sitzen tähendab istumist.",
      "Sitzen kasutatakse inimese või looma kohta, kes istub.",
      "Vahel tähendab sitzen ka kindlas kohas asumist, aga A1 tasemel on peamine tähendus istuma.",
      "Oluline on eristada: sitzen = istuma, stehen = seisma, liegen = lamama/pikali olema."
    ],
    "examples": [
      {
        "de": "Ich sitze am Tisch.",
        "lv": "Ma istun laua taga."
      },
      {
        "de": "Die Kinder sitzen im Bus.",
        "lv": "Lapsed istuvad bussis."
      },
      {
        "de": "Er steht an der Tür.",
        "lv": "Ta seisab ukse juures."
      },
      {
        "de": "Die Katze liegt auf dem Sofa.",
        "lv": "Kass lamab diivanil."
      }
    ],
    "comparison": [
      {
        "word": "sitzen",
        "meaning": "Istuma",
        "example": "Jag sitter vid bordet."
      },
      {
        "word": "stehen",
        "meaning": "Seisma",
        "example": "Han står vid dörren."
      },
      {
        "word": "liegen",
        "meaning": "Lamama / pikali olema",
        "example": "Katten ligger där."
      },
      {
        "word": "setzen",
        "meaning": "Istet võtma / istuma panema",
        "example": "Jag sätter mig."
      }
    ],
    "tip": {
      "text": "Atceries: sēdus → sitzen; stāvus → stehen; guļus → liegen."
    },
    "important": [
      "sitzen visar läge \"sitta\".",
      "Att sätta sig är sich setzen, inte sitzen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sitzen"
        ],
        "purple": [
          "istuma",
          "istub"
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
          "lv": {
            "purple": [
              "istun"
            ]
          }
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
          "lv": {
            "purple": [
              "istuvad"
            ],
            "green": [
              "Lapsed"
            ]
          }
        },
        {
          "de": {
            "red": [
              "steht"
            ]
          },
          "lv": {
            "red": [
              "seisab"
            ]
          }
        },
        {
          "de": {
            "yellow": [
              "liegt"
            ]
          },
          "lv": {
            "yellow": [
              "lamab"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sitzen"
            ]
          },
          "meaning": {
            "purple": [
              "istuma"
            ]
          },
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
              "seisma"
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
          "meaning": {
            "purple": [
              "lamama",
              "pikali"
            ]
          },
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
          "meaning": {
            "purple": [
              "istet võtma"
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
            "sitzen"
          ],
          "purple": [
            "Atceries"
          ],
          "red": [
            "stehen"
          ],
          "yellow": [
            "liegen"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "sitzen"
          ],
          "purple": [
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

## Finding 16

**Audit ID:** `LRB100-0016`
**Finding Stable ID:** `g2/a1/sv|sollen|idx:564|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `sollen|idx:564`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** vajadzētu
**DE reference (read-only):** sollen
**CURRENT (captured scope):** {"lv":"Peaks","study.translation":"Peaks","study.explanation":"[\"Põhiidee: sollen tähendab, et keegi peaks midagi tegema või peab midagi tegema juhise järgi.\",\"Sollen kasutatakse sageli siis, kui keegi teine ütleb, mida teha.\",\"See ei ole nii tugev kui müssen.\",\"Väga sage fraas on Was soll ich machen? = Mida ma peaksin tegema?\"]","study.examples":"[{\"de\":\"Was soll ich machen?\",\"lv\":\"Mida ma peaksin tegema?\"},{\"de\":\"Du sollst kommen.\",\"lv\":\"Sa pead tulema.\"},{\"de\":\"Ich soll zu Hause bleiben.\",\"lv\":\"Ma pean koju jääma.\"},{\"de\":\"Ich muss jetzt gehen.\",\"lv\":\"Ma pean nüüd minema.\"}]","study.comparison":"[{\"word\":\"sollen\",\"meaning\":\"Peaks / juhise järgi tegema\",\"example\":\"Vad ska jag göra?\"},{\"word\":\"müssen\",\"meaning\":\"Tingimata vaja olema\",\"example\":\"Jag måste gå.\"},{\"word\":\"können\",\"meaning\":\"Saama\",\"example\":\"Jag kan komma.\"},{\"word\":\"wollen\",\"meaning\":\"Tahtma\",\"example\":\"Jag vill stanna.\"}]","study.tip":"{\"text\":\"Atceries: kāds saka, kas jādara → sollen; obligāti jādara → müssen.\"}","study.important":"[\"Was soll ich machen? är en mycket vanlig fras.\",\"sollen och müssen är inte helt identiska.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts sollen\|idx:564 (sollen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Peaks","study.translation":"Peaks","study.explanation":"[\"Põhiidee: sollen tähendab, et keegi pe…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sollen",
  "lv": "Peaks",
  "level": "A1",
  "study": {
    "id": "a1-sollen",
    "layout": "standardStudy",
    "translation": "Peaks",
    "explanation": [
      "Põhiidee: sollen tähendab, et keegi peaks midagi tegema või peab midagi tegema juhise järgi.",
      "Sollen kasutatakse sageli siis, kui keegi teine ütleb, mida teha.",
      "See ei ole nii tugev kui müssen.",
      "Väga sage fraas on Was soll ich machen? = Mida ma peaksin tegema?"
    ],
    "examples": [
      {
        "de": "Was soll ich machen?",
        "lv": "Mida ma peaksin tegema?"
      },
      {
        "de": "Du sollst kommen.",
        "lv": "Sa pead tulema."
      },
      {
        "de": "Ich soll zu Hause bleiben.",
        "lv": "Ma pean koju jääma."
      },
      {
        "de": "Ich muss jetzt gehen.",
        "lv": "Ma pean nüüd minema."
      }
    ],
    "comparison": [
      {
        "word": "sollen",
        "meaning": "Peaks / juhise järgi tegema",
        "example": "Vad ska jag göra?"
      },
      {
        "word": "müssen",
        "meaning": "Tingimata vaja olema",
        "example": "Jag måste gå."
      },
      {
        "word": "können",
        "meaning": "Saama",
        "example": "Jag kan komma."
      },
      {
        "word": "wollen",
        "meaning": "Tahtma",
        "example": "Jag vill stanna."
      }
    ],
    "tip": {
      "text": "Atceries: kāds saka, kas jādara → sollen; obligāti jādara → müssen."
    },
    "important": [
      "Was soll ich machen? är en mycket vanlig fras.",
      "sollen och müssen är inte helt identiska."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sollen",
          "Was soll ich machen"
        ],
        "purple": [
          "peaks",
          "Põhiidee",
          "juhise"
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
          "lv": {
            "purple": [
              "mida ma peaksin tegema"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "sollst",
              "kommen"
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
              "soll",
              "bleiben"
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
            "red": [
              "muss",
              "gehen"
            ]
          },
          "lv": {
            "red": [
              "pean"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "sollen"
            ]
          },
          "meaning": {
            "purple": [
              "peaks",
              "juhise"
            ]
          },
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
          "meaning": {
            "purple": [
              "tingimata"
            ]
          },
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
          "meaning": {
            "purple": [
              "saama"
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
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "sollen"
          ],
          "purple": [
            "Atceries"
          ],
          "red": [
            "müssen",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "Was soll ich machen"
          ],
          "purple": [
            "Was"
          ]
        },
        {
          "blue": [
            "sollen"
          ],
          "red": [
            "müssen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 17

**Audit ID:** `LRB100-0017`
**Finding Stable ID:** `g2/a1/sv|sprechen|idx:5|lv; study.examples[2].lv|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `sprechen|idx:5`
**Field / path:** `lv; study.examples[2].lv`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** runāt
**DE reference (read-only):** sprechen
**CURRENT (captured scope):** {"lv":"Rääkima","study.examples[2].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts sprechen\|idx:5 (sprechen), ceļš 'lv; study.examples[2].lv': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Rääkima","study.examples[2].lv":null}'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sprechen",
  "lv": "Rääkima",
  "level": "A1",
  "study": {
    "id": "a1-sprechen-study",
    "layout": "standardStudy",
    "translation": "Rääkima",
    "explanation": [
      "Põhiidee: Rääkima, vestlema või keelt kasutama.",
      "Sprechen tähendab peamiselt: rääkima või vestlema.",
      "Sageli kirjeldab: keelt/vestlust.",
      "Sprechen kirjeldab rääkimist või keele kasutamist."
    ],
    "examples": [
      {
        "de": "Ich spreche Deutsch.",
        "lv": "Ma räägin saksa keelt."
      },
      {
        "de": "Wir sprechen über die Arbeit.",
        "lv": "Me räägime tööst."
      },
      {
        "de": "Sie spricht mit ihrer Lehrerin.",
        "lv": "Ma räägin saksa keelt."
      }
    ],
    "comparison": [
      {
        "word": "sprechen",
        "meaning": "Rääkima (protsess, keel)",
        "example": "Wir sprechen über die Arbeit. – Me räägime tööst."
      },
      {
        "word": "sagen",
        "meaning": "Ütlema (konkreetset teksti)",
        "example": "Sag mir die Wahrheit. – Ütle mulle tõtt."
      }
    ],
    "tip": [
      "sprechen = tala",
      "Använd sprechen när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "sprechen = tala.",
      "Tala, samtala eller använda ett språk."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "sprechen"
        ],
        "purple": [
          "rääkima"
        ],
        "orange": [
          "rääkima"
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
              "räägin"
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
              "räägime"
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
              "räägin"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "sprechen"
          ]
        }
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

## Finding 18

**Audit ID:** `LRB100-0018`
**Finding Stable ID:** `g2/a1/sv|stehen|idx:576|study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `stehen|idx:576`
**Field / path:** `study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** stāvēt
**DE reference (read-only):** stehen
**CURRENT (captured scope):** {"study.translation":"Seisma","study.explanation":"[\"Põhiidee: stehen tähendab seisma või püstises asendis olema.\",\"Inimese kohta tähendab stehen seismist.\",\"Eseme kohta tähendab stehen, et see asub püsti või kindlas kohas.\",\"Oluline on eristada: stehen = seisma, sitzen = istuma, liegen = lamama/pikali olema.\"]","study.examples":"[{\"de\":\"Ich stehe an der Tür.\",\"lv\":\"Ma seisan ukse juures.\"},{\"de\":\"Der Stuhl steht in der Küche.\",\"lv\":\"Tool seisab köögis.\"},{\"de\":\"Er sitzt am Tisch.\",\"lv\":\"Ta istub laua ääres.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Raamat on laual.\"}]","study.comparison":"[{\"word\":\"stehen\",\"meaning\":\"Seisma / püsti olema\",\"example\":\"Jag står här.\"},{\"word\":\"sitzen\",\"meaning\":\"Istuma\",\"example\":\"Han sitter vid bordet.\"},{\"word\":\"liegen\",\"meaning\":\"Lamama / pikali olema\",\"example\":\"Boken ligger där.\"},{\"word\":\"stellen\",\"meaning\":\"Püsti panema\",\"example\":\"Jag ställer flaskan där.\"}]","study.important":"[\"stehen visar tillståndet, inte handlingen \\\"lägga\\\".\",\"För att lägga en föremål på golvet använder man stellen, inte stehen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts stehen\|idx:576 (stehen), ceļš 'study.translation, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"study.translation":"Seisma","study.explanation":"[\"Põhiidee: stehen tähendab seisma või püstises asen…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "stehen",
  "lv": "Seisma",
  "level": "A1",
  "study": {
    "id": "a1-stehen",
    "layout": "standardStudy",
    "translation": "Seisma",
    "explanation": [
      "Põhiidee: stehen tähendab seisma või püstises asendis olema.",
      "Inimese kohta tähendab stehen seismist.",
      "Eseme kohta tähendab stehen, et see asub püsti või kindlas kohas.",
      "Oluline on eristada: stehen = seisma, sitzen = istuma, liegen = lamama/pikali olema."
    ],
    "examples": [
      {
        "de": "Ich stehe an der Tür.",
        "lv": "Ma seisan ukse juures."
      },
      {
        "de": "Der Stuhl steht in der Küche.",
        "lv": "Tool seisab köögis."
      },
      {
        "de": "Er sitzt am Tisch.",
        "lv": "Ta istub laua ääres."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Raamat on laual."
      }
    ],
    "comparison": [
      {
        "word": "stehen",
        "meaning": "Seisma / püsti olema",
        "example": "Jag står här."
      },
      {
        "word": "sitzen",
        "meaning": "Istuma",
        "example": "Han sitter vid bordet."
      },
      {
        "word": "liegen",
        "meaning": "Lamama / pikali olema",
        "example": "Boken ligger där."
      },
      {
        "word": "stellen",
        "meaning": "Püsti panema",
        "example": "Jag ställer flaskan där."
      }
    ],
    "tip": {
      "text": "Atceries: stāvus → stehen; sēdus → sitzen; guļus → liegen."
    },
    "important": [
      "stehen visar tillståndet, inte handlingen \"lägga\".",
      "För att lägga en föremål på golvet använder man stellen, inte stehen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "stehen"
        ],
        "purple": [
          "seisma",
          "püsti"
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
          "lv": {
            "purple": [
              "seisan"
            ]
          }
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
          "lv": {
            "purple": [
              "seisab"
            ],
            "yellow": [
              "Tool"
            ]
          }
        },
        {
          "de": {
            "red": [
              "sitzt"
            ]
          },
          "lv": {
            "red": [
              "istub"
            ]
          }
        },
        {
          "de": {
            "red": [
              "liegt"
            ]
          },
          "lv": {
            "red": [
              "raamat"
            ]
          }
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
              "seisma",
              "püsti"
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
          "meaning": {
            "purple": [
              "istuma"
            ]
          },
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
          "meaning": {
            "purple": [
              "lamama",
              "pikali"
            ]
          },
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
          "meaning": {
            "purple": [
              "püsti panema"
            ]
          },
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
          "purple": [
            "Atceries"
          ],
          "red": [
            "sitzen"
          ],
          "yellow": [
            "liegen"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "stehen"
          ],
          "purple": [
            "stehen"
          ],
          "green": [
            "stehen"
          ]
        },
        {
          "green": [
            "stellen"
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

## Finding 19

**Audit ID:** `LRB100-0019`
**Finding Stable ID:** `g2/a1/sv|über|idx:608|study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `über|idx:608`
**Field / path:** `study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** virs • par
**DE reference (read-only):** über
**CURRENT (captured scope):** {"study.translation":"Kohal • Kohta","study.explanation":"[\"Põhiidee: über tähendab olenevalt kontekstist millegi kohal või millegi kohta.\",\"Kui jutt on asukohast, tähendab über sageli kohal.\",\"Kui jutt on vestlusest, tekstist või teemast, tähendab über millegi kohta.\",\"Liikumise puhul võib über tähendada üle.\"]","study.examples":"[{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Lamp ripub laua kohal.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Me räägime ilmast.\"},{\"de\":\"Das Kind läuft über die Straße.\",\"lv\":\"Laps jookseb üle tänava.\"},{\"de\":\"Ich freue mich über das Geschenk.\",\"lv\":\"Ma rõõmustan kingi üle.\"}]","study.comparison":"[{\"word\":\"über\",\"meaning\":\"Kohal / kohta / üle\",\"example\":\"Vi talar om vädret.\"},{\"word\":\"auf\",\"meaning\":\"Pinnal\",\"example\":\"Boken ligger på bordet.\"},{\"word\":\"unter\",\"meaning\":\"All\",\"example\":\"Väskan är under bordet.\"},{\"word\":\"von\",\"meaning\":\"-st / kohta mingist allikast\",\"example\":\"Jag hör från dig.\"}]","study.important":"[\"über är inte bara en lokalpreposition.\",\"sprechen über betyder \\\"prata om\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts über\|idx:608 (über), ceļš 'study.translation, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"study.translation":"Kohal • Kohta","study.explanation":"[\"Põhiidee: über tähendab olenevalt konteksti…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "über",
  "lv": "Kohal • Kohta",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "Kohal • Kohta",
    "explanation": [
      "Põhiidee: über tähendab olenevalt kontekstist millegi kohal või millegi kohta.",
      "Kui jutt on asukohast, tähendab über sageli kohal.",
      "Kui jutt on vestlusest, tekstist või teemast, tähendab über millegi kohta.",
      "Liikumise puhul võib über tähendada üle."
    ],
    "examples": [
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lamp ripub laua kohal."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Me räägime ilmast."
      },
      {
        "de": "Das Kind läuft über die Straße.",
        "lv": "Laps jookseb üle tänava."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "Ma rõõmustan kingi üle."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "Kohal / kohta / üle",
        "example": "Vi talar om vädret."
      },
      {
        "word": "auf",
        "meaning": "Pinnal",
        "example": "Boken ligger på bordet."
      },
      {
        "word": "unter",
        "meaning": "All",
        "example": "Väskan är under bordet."
      },
      {
        "word": "von",
        "meaning": "-st / kohta mingist allikast",
        "example": "Jag hör från dig."
      }
    ],
    "tip": {
      "text": "Atceries: tēma sarunā → über; virs galda → über."
    },
    "important": [
      "über är inte bara en lokalpreposition.",
      "sprechen über betyder \"prata om\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "über"
        ],
        "purple": [
          "kohal",
          "Põhiidee",
          "üle"
        ],
        "green": [
          "vestlusest",
          "tekstist",
          "teemast"
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
          "lv": {
            "purple": [
              "kohal"
            ],
            "yellow": [
              "laua"
            ]
          }
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
          "lv": {
            "purple": [
              "räägime"
            ],
            "green": [
              "räägime"
            ]
          }
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
          "lv": {
            "purple": [
              "üle"
            ],
            "yellow": [
              "tänava"
            ]
          }
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
          "lv": {
            "purple": [
              "rõõmustan"
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
              "über"
            ]
          },
          "meaning": {
            "purple": [
              "kohal",
              "kohal",
              "üle"
            ]
          },
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
          "meaning": {
            "purple": [
              "pinnal"
            ]
          },
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
          "meaning": {
            "purple": [
              "all"
            ]
          },
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
          "meaning": {
            "purple": [
              "-st"
            ]
          },
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
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "über"
          ],
          "purple": [
            "über"
          ]
        },
        {
          "blue": [
            "sprechen über"
          ],
          "purple": [
            "sprechen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 20

**Audit ID:** `LRB100-0020`
**Finding Stable ID:** `g2/a1/sv|Uhr|idx:698|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `Uhr|idx:698`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** {"lv":"Kell","study.translation":"Kell","study.explanation":"[\"Põhiidee: Kell või käekell. Ka kellaaeg: Es ist acht Uhr.\",\"Die Uhr tähendab peamiselt: seade või kellaaeg.\",\"Sageli kirjeldab: konkreetne kellaaeg.\",\"Die Uhr tähendab kella — seadet või kellaaega (Es ist acht Uhr, meine Uhr).\"]","study.examples":"[{\"de\":\"Es ist acht Uhr.\",\"lv\":\"On kaheksa (kell kaheksa).\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"On kaheksa (kell kaheksa).\"},{\"de\":\"Meine Uhr ist kaputt.\",\"lv\":\"Minu kell on katki.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"On kaheksa.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"On kaheksa (kell).\"},{\"de\":\"die Uhr\",\"lv\":\"Kell näitab aega.\"}]","study.tip":"[\"Ur eller armbandsur. Också tid på klockan: Es ist acht Uhr.\",\"Använd die Uhr när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"die Uhr: en enhet (meine Uhr) eller tid (acht Uhr).\",\"die Uhr: kontrollera sammanhanget före användning.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Uhr\|idx:698 (Uhr), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Kell","study.translation":"Kell","study.explanation":"[\"Põhiidee: Kell või käekell. Ka kellaaeg:…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "Kell",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "Kell",
    "explanation": [
      "Põhiidee: Kell või käekell. Ka kellaaeg: Es ist acht Uhr.",
      "Die Uhr tähendab peamiselt: seade või kellaaeg.",
      "Sageli kirjeldab: konkreetne kellaaeg.",
      "Die Uhr tähendab kella — seadet või kellaaega (Es ist acht Uhr, meine Uhr)."
    ],
    "examples": [
      {
        "de": "Es ist acht Uhr.",
        "lv": "On kaheksa (kell kaheksa)."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "On kaheksa (kell kaheksa)."
      },
      {
        "de": "Meine Uhr ist kaputt.",
        "lv": "Minu kell on katki."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "On kaheksa."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "On kaheksa (kell)."
      },
      {
        "de": "die Uhr",
        "lv": "Kell näitab aega."
      }
    ],
    "tip": [
      "Ur eller armbandsur. Också tid på klockan: Es ist acht Uhr.",
      "Använd die Uhr när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "die Uhr: en enhet (meine Uhr) eller tid (acht Uhr).",
      "die Uhr: kontrollera sammanhanget före användning."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Uhr"
        ],
        "purple": [
          "kell"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {
            "purple": [
              "kell"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {
            "purple": [
              "kell"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {
            "purple": [
              "kell"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {
            "purple": [
              "kaheksa"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "uhr"
            ]
          },
          "lv": {
            "purple": [
              "kell"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "die Uhr",
              "uhr"
            ]
          },
          "lv": {
            "purple": [
              "kell"
            ],
            "yellow": [
              "aega"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Pulkstenis"
          ]
        }
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

## Finding 21

**Audit ID:** `LRB100-0021`
**Finding Stable ID:** `g2/a1/sv|um|idx:611|study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `um|idx:611`
**Field / path:** `study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** ap • pulksten
**DE reference (read-only):** um
**CURRENT (captured scope):** {"study.translation":"Umbes • Kell","study.explanation":"[\"Põhiidee: um tähendab väga sageli aja puhul kell või koha puhul ümber/ringi.\",\"Täpse kellaaja puhul tähendab um kell.\",\"Koha puhul tähendab um ümber või ringi.\",\"Fraasis um ... zu aitab see väljendada eesmärki: et.\"]","study.examples":"[{\"de\":\"Ich komme um acht Uhr.\",\"lv\":\"Ma tulen kell kaheksa.\"},{\"de\":\"Wir sitzen um den Tisch.\",\"lv\":\"Me istume laua ümber.\"},{\"de\":\"Er geht um die Ecke.\",\"lv\":\"Ta läheb ümber nurga.\"},{\"de\":\"Ich lerne, um Deutsch zu sprechen.\",\"lv\":\"Ma õpin, et saksa keelt rääkida.\"}]","study.comparison":"[{\"word\":\"um\",\"meaning\":\"Kell / umbes / et\",\"example\":\"Jag kommer klockan åtta.\"},{\"word\":\"am\",\"meaning\":\"Päeval / juures\",\"example\":\"På måndag kommer jag.\"},{\"word\":\"gegen\",\"meaning\":\"Kella paiku / vastu\",\"example\":\"Jag kommer omkring åtta.\"},{\"word\":\"für\",\"meaning\":\"Jaoks / kasuks\",\"example\":\"Det är för dig.\"}]","study.important":"[\"um med tid är vanligtvis \\\"klockan\\\".\",\"um ... zu betyder ofta \\\"för att ...\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts um\|idx:611 (um), ceļš 'study.translation, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"study.translation":"Umbes • Kell","study.explanation":"[\"Põhiidee: um tähendab väga sageli aja puhul …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "um",
  "lv": "Umbes • Kell",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "Umbes • Kell",
    "explanation": [
      "Põhiidee: um tähendab väga sageli aja puhul kell või koha puhul ümber/ringi.",
      "Täpse kellaaja puhul tähendab um kell.",
      "Koha puhul tähendab um ümber või ringi.",
      "Fraasis um ... zu aitab see väljendada eesmärki: et."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "Ma tulen kell kaheksa."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "Me istume laua ümber."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "Ta läheb ümber nurga."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "Ma õpin, et saksa keelt rääkida."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "Kell / umbes / et",
        "example": "Jag kommer klockan åtta."
      },
      {
        "word": "am",
        "meaning": "Päeval / juures",
        "example": "På måndag kommer jag."
      },
      {
        "word": "gegen",
        "meaning": "Kella paiku / vastu",
        "example": "Jag kommer omkring åtta."
      },
      {
        "word": "für",
        "meaning": "Jaoks / kasuks",
        "example": "Det är för dig."
      }
    ],
    "tip": {
      "text": "Atceries: um acht = pulksten astoņos."
    },
    "important": [
      "um med tid är vanligtvis \"klockan\".",
      "um ... zu betyder ofta \"för att ...\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "um",
          "um ... zu"
        ],
        "purple": [
          "kell",
          "ümber",
          "ümber",
          "et"
        ],
        "green": [
          "aja",
          "koha"
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
          "lv": {
            "purple": [
              "kell kaheksa"
            ]
          }
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
          "lv": {
            "purple": [
              "ümber"
            ],
            "yellow": [
              "laua"
            ]
          }
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
          "lv": {
            "purple": [
              "ümber"
            ],
            "yellow": [
              "nurga"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "um",
              "zu"
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
              "um"
            ]
          },
          "meaning": {
            "purple": [
              "kell",
              "umbes",
              "et"
            ]
          },
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
          "meaning": {
            "purple": [
              "päeval",
              "juures"
            ]
          },
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
          "meaning": {
            "purple": [
              "kella paiku",
              "vastu"
            ]
          },
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
          "meaning": {
            "purple": [
              "jaoks"
            ]
          },
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
          ],
          "purple": [
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "um"
          ],
          "purple": [
            "laiku"
          ]
        },
        {
          "blue": [
            "um ... zu"
          ],
          "purple": [
            "bieži"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 22

**Audit ID:** `LRB100-0022`
**Finding Stable ID:** `g2/a1/sv|unter|idx:615|study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `unter|idx:615`
**Field / path:** `study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** zem
**DE reference (read-only):** unter
**CURRENT (captured scope):** {"study.translation":"All","study.explanation":"[\"Põhiidee: unter tähendab olenevalt kontekstist all või seas.\",\"Kui miski asub laua, tooli või mõne muu eseme all, kasutatakse unter.\",\"Kui jutt on inimeste rühmast, võib unter tähendada seas.\",\"See on sõna über vastand, kui jutt on suunast üles/alla.\"]","study.examples":"[{\"de\":\"Die Tasche ist unter dem Tisch.\",\"lv\":\"Kott on laua all.\"},{\"de\":\"Die Katze liegt unter dem Stuhl.\",\"lv\":\"Kass lamab tooli all.\"},{\"de\":\"Unter Freunden sagt man das so.\",\"lv\":\"Sõprade seas öeldakse nii.\"},{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Lamp ripub laua kohal.\"}]","study.comparison":"[{\"word\":\"unter\",\"meaning\":\"All / seas\",\"example\":\"Väskan är under bordet.\"},{\"word\":\"über\",\"meaning\":\"Kohal / kohta\",\"example\":\"Lampan hänger över bordet.\"},{\"word\":\"zwischen\",\"meaning\":\"Kahe asja vahel\",\"example\":\"Mellan husen.\"},{\"word\":\"auf\",\"meaning\":\"Pinnal\",\"example\":\"På bordet.\"}]","study.important":"[\"unter kan också betyda \\\"bland\\\", särskilt med människor eller grupper.\",\"unter och über är ofta motsatser i betydelsen plats.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts unter\|idx:615 (unter), ceļš 'study.translation, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"study.translation":"All","study.explanation":"[\"Põhiidee: unter tähendab olenevalt kontekstist all võ…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "unter",
  "lv": "All",
  "level": "A1",
  "study": {
    "id": "a1-unter",
    "layout": "standardStudy",
    "translation": "All",
    "explanation": [
      "Põhiidee: unter tähendab olenevalt kontekstist all või seas.",
      "Kui miski asub laua, tooli või mõne muu eseme all, kasutatakse unter.",
      "Kui jutt on inimeste rühmast, võib unter tähendada seas.",
      "See on sõna über vastand, kui jutt on suunast üles/alla."
    ],
    "examples": [
      {
        "de": "Die Tasche ist unter dem Tisch.",
        "lv": "Kott on laua all."
      },
      {
        "de": "Die Katze liegt unter dem Stuhl.",
        "lv": "Kass lamab tooli all."
      },
      {
        "de": "Unter Freunden sagt man das so.",
        "lv": "Sõprade seas öeldakse nii."
      },
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lamp ripub laua kohal."
      }
    ],
    "comparison": [
      {
        "word": "unter",
        "meaning": "All / seas",
        "example": "Väskan är under bordet."
      },
      {
        "word": "über",
        "meaning": "Kohal / kohta",
        "example": "Lampan hänger över bordet."
      },
      {
        "word": "zwischen",
        "meaning": "Kahe asja vahel",
        "example": "Mellan husen."
      },
      {
        "word": "auf",
        "meaning": "Pinnal",
        "example": "På bordet."
      }
    ],
    "tip": {
      "text": "Atceries: zem galda → unter dem Tisch."
    },
    "important": [
      "unter kan också betyda \"bland\", särskilt med människor eller grupper.",
      "unter och über är ofta motsatser i betydelsen plats."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "unter",
          "über"
        ],
        "purple": [
          "all",
          "Põhiidee"
        ],
        "green": [
          "inimeste rühmast"
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
          "lv": {
            "purple": [
              "all"
            ],
            "yellow": [
              "laua"
            ]
          }
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
          "lv": {
            "purple": [
              "all"
            ],
            "yellow": [
              "tooli"
            ]
          }
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
          "lv": {
            "purple": [
              "seas"
            ],
            "green": [
              "Sõprade"
            ]
          }
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
          "lv": {
            "red": [
              "kohal"
            ],
            "yellow": [
              "laua"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "unter"
            ]
          },
          "meaning": {
            "purple": [
              "all",
              "all"
            ]
          },
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
          "meaning": {
            "purple": [
              "kohal",
              "kohal"
            ]
          },
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
          "meaning": {
            "purple": [
              "vahel"
            ]
          },
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
          "meaning": {
            "purple": [
              "pinnal"
            ]
          },
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
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "unter"
          ],
          "purple": [
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

## Finding 23

**Audit ID:** `LRB100-0023`
**Finding Stable ID:** `g2/a1/sv|Urlaub|idx:695|lv; study.explanation; study.tip; study.important; study.comparison|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `Urlaub|idx:695`
**Field / path:** `lv; study.explanation; study.tip; study.important; study.comparison`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** atvaļinājums
**DE reference (read-only):** Urlaub
**CURRENT (captured scope):** {"lv":"Puhkus","study.explanation":"[\"Põhiidee: ainult ainsus. Puhkus töölt — alati ainsuses.\",\"Der Urlaub tähendab peamiselt: vaba aeg töölt.\",\"Sageli kirjeldab: ainult ainsus.\",\"Der Urlaub on ainult ainsuses — puhkus töölt (im Urlaub).\"]","study.tip":"[\"endast singularis. Semester från arbete — alltid singularis.\",\"Använd der Urlaub när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"Det är inte korrekt: die Ferie, der Urlaube (på A1-nivå).\",\"Urlaub: im Urlaub sein / Urlaub machen.\",\"Felaktigt: die Urlaube → Korrekt: der Urlaub\",\"Arbete: der Urlaub (endast singularis).\"]","study.comparison":"[{\"word\":\"der Urlaub\",\"meaning\":\"Puhkus töölt (ainult ains.)\",\"example\":\"Mein Vater ist im Urlaub. – Minu isa on puhkusel.\"},{\"word\":\"die Ferien\",\"meaning\":\"Kooli/ülikooli vaheaeg (ainult mitmuses)\",\"example\":\"Die Kinder haben Ferien. – Lastel on vaheaeg.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Urlaub\|idx:695 (Urlaub), ceļš 'lv; study.explanation; study.tip; study.important; study.comparison': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, study.comparison, kuru saturs sākas ar '{"lv":"Puhkus","study.explanation":"[\"Põhiidee: ainult ainsus. Puhkus töölt — alati ainsuses.\",\"Der U…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Urlaub",
  "de_article": "der",
  "lv": "Puhkus",
  "level": "A1",
  "study": {
    "id": "a1-urlaub",
    "layout": "standardStudy",
    "translation": "Puhkus",
    "explanation": [
      "Põhiidee: ainult ainsus. Puhkus töölt — alati ainsuses.",
      "Der Urlaub tähendab peamiselt: vaba aeg töölt.",
      "Sageli kirjeldab: ainult ainsus.",
      "Der Urlaub on ainult ainsuses — puhkus töölt (im Urlaub)."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Minu isa on puhkusel."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Minu isa on puhkusel."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Järgmisel nädalal on mul puhkus."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "Me veedame puhkuse Hispaanias."
      },
      {
        "de": "im Urlaub",
        "lv": "Puhkusel (töö)."
      }
    ],
    "comparison": [
      {
        "word": "der Urlaub",
        "meaning": "Puhkus töölt (ainult ains.)",
        "example": "Mein Vater ist im Urlaub. – Minu isa on puhkusel."
      },
      {
        "word": "die Ferien",
        "meaning": "Kooli/ülikooli vaheaeg (ainult mitmuses)",
        "example": "Die Kinder haben Ferien. – Lastel on vaheaeg."
      }
    ],
    "tip": [
      "endast singularis. Semester från arbete — alltid singularis.",
      "Använd der Urlaub när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "Det är inte korrekt: die Ferie, der Urlaube (på A1-nivå).",
      "Urlaub: im Urlaub sein / Urlaub machen.",
      "Felaktigt: die Urlaube → Korrekt: der Urlaub",
      "Arbete: der Urlaub (endast singularis)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "der Urlaub",
          "urlaub"
        ],
        "purple": [
          "puhkus"
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
          "lv": {
            "purple": [
              "puhkusel"
            ]
          }
        },
        {
          "de": {
            "green": [
              "urlaub"
            ]
          },
          "lv": {
            "purple": [
              "puhkusel"
            ]
          }
        },
        {
          "de": {
            "green": [
              "urlaub"
            ]
          },
          "lv": {
            "purple": [
              "puhkus"
            ]
          }
        },
        {
          "de": {
            "green": [
              "urlaub"
            ]
          },
          "lv": {
            "purple": [
              "puhkuse"
            ]
          }
        },
        {
          "de": {
            "green": [
              "urlaub"
            ]
          },
          "lv": {
            "purple": [
              "puhkusel"
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
          "green": [
            "der Urlaube"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 24

**Audit ID:** `LRB100-0024`
**Finding Stable ID:** `g2/a1/sv|verstehen|idx:621|study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `verstehen|idx:621`
**Field / path:** `study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** saprast
**DE reference (read-only):** verstehen
**CURRENT (captured scope):** {"study.translation":"Mõistma","study.explanation":"[\"Põhiidee: verstehen tähendab arusaamist.\",\"Seda kasutatakse, kui mõistad keelt, inimest, teksti või olukorda.\",\"Eesti keeles ei ole siin tavaliselt vaja sõnu “oskama” või “suutma” • Need vastavad sagedamini sõnale können.\",\"Väga sage fraas on Ich verstehe. = Ma saan aru.\"]","study.examples":"[{\"de\":\"Ich verstehe dich.\",\"lv\":\"Ma saan sinust aru.\"},{\"de\":\"Verstehst du Deutsch?\",\"lv\":\"Kas sa saad saksa keelest aru?\"},{\"de\":\"Ich verstehe das nicht.\",\"lv\":\"Ma ei saa sellest aru.\"},{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"Ma oskan saksa keelt rääkida.\"}]","study.comparison":"[{\"word\":\"verstehen\",\"meaning\":\"Mõistma\",\"example\":\"Ich verstehe dich.\"},{\"word\":\"können\",\"meaning\":\"Saama / oskama\",\"example\":\"Ich kann schwimmen.\"},{\"word\":\"wissen\",\"meaning\":\"Fakti teadma\",\"example\":\"Ich weiß das.\"},{\"word\":\"kennen\",\"meaning\":\"Tundma\",\"example\":\"Ich kenne ihn.\"}]","study.important":"[\"verstehen är inte huvudordet för betydelsen \\\"kunna\\\".\",\"Ich verstehe Deutsch betyder \\\"jag förstår tyska\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts verstehen\|idx:621 (verstehen), ceļš 'study.translation, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"study.translation":"Mõistma","study.explanation":"[\"Põhiidee: verstehen tähendab arusaamist.\",\"Seda…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "verstehen",
  "lv": "Mõistma",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "Mõistma",
    "explanation": [
      "Põhiidee: verstehen tähendab arusaamist.",
      "Seda kasutatakse, kui mõistad keelt, inimest, teksti või olukorda.",
      "Eesti keeles ei ole siin tavaliselt vaja sõnu “oskama” või “suutma” • Need vastavad sagedamini sõnale können.",
      "Väga sage fraas on Ich verstehe. = Ma saan aru."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Ma saan sinust aru."
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "Kas sa saad saksa keelest aru?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Ma ei saa sellest aru."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Ma oskan saksa keelt rääkida."
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "Mõistma",
        "example": "Ich verstehe dich."
      },
      {
        "word": "können",
        "meaning": "Saama / oskama",
        "example": "Ich kann schwimmen."
      },
      {
        "word": "wissen",
        "meaning": "Fakti teadma",
        "example": "Ich weiß das."
      },
      {
        "word": "kennen",
        "meaning": "Tundma",
        "example": "Ich kenne ihn."
      }
    ],
    "tip": {
      "text": "Atceries: saprast tekstu/cilvēku → verstehen; prast kaut ko darīt → können."
    },
    "important": [
      "verstehen är inte huvudordet för betydelsen \"kunna\".",
      "Ich verstehe Deutsch betyder \"jag förstår tyska\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "verstehen",
          "Ich verstehe"
        ],
        "purple": [
          "mõistad",
          "mõistad"
        ],
        "red": [
          "können",
          "oskama",
          "oskama"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "verstehe"
            ]
          },
          "lv": {
            "purple": [
              "saan"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Verstehst"
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
              "verstehe"
            ]
          },
          "lv": {
            "purple": [
              "saa"
            ]
          }
        },
        {
          "de": {
            "red": [
              "kann"
            ]
          },
          "lv": {
            "red": [
              "oskan"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "verstehen"
            ]
          },
          "meaning": {
            "purple": [
              "mõistma"
            ]
          },
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
          "meaning": {
            "purple": [
              "saama",
              "oskama"
            ]
          },
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
          "meaning": {
            "purple": [
              "teadma"
            ]
          },
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
          "meaning": {
            "purple": [
              "tundma"
            ]
          },
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
          "purple": [
            "Atceries"
          ],
          "red": [
            "können",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "verstehen"
          ],
          "red": [
            "verstehen"
          ]
        },
        {
          "blue": [
            "verstehe"
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

## Finding 25

**Audit ID:** `LRB100-0025`
**Finding Stable ID:** `g2/a1/sv|vom|idx:634|study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `vom|idx:634`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** no
**DE reference (read-only):** vom
**CURRENT (captured scope):** {"study.translation":"-st","study.explanation":"[\"Vom on eessõna von ja artikli dem lühend.\",\"Täisvorm: von dem (Dativ).\",\"Kasutatakse mees- ja kesksoost nimisõnadega, kui näidatakse päritolu või suunda millestki eemale.\",\"Vastab küsimustele kellelt? või kust?\",\"Praktikas kasutatakse peaaegu alati vom, mitte täisvormi von dem.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"Ma tulen jaamast.\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"Kingitus on isalt.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"Ta tuleb arsti juurest.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"Ta sõidab lennujaamast.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"See on turult.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"Me tuleme peolt.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"Ta võtab piima talunikult.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"Sõnum on ülemuselt.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"-st (konkreetne asi, Dativ)\",\"example\":\"vom Bahnhof – Jaamast\"},{\"word\":\"von\",\"meaning\":\"-st (üldiselt)\",\"example\":\"von mir – Minult\"},{\"word\":\"aus\",\"meaning\":\"Seest / päritolu\",\"example\":\"aus Deutschland – Pärit Saksamaalt\"},{\"word\":\"ab\",\"meaning\":\"Alates (aeg/koht)\",\"example\":\"ab Montag – Alates esmaspäevast\"},{\"word\":\"zu\",\"meaning\":\"-sse / juurde (vastupidine suund)\",\"example\":\"zum Arzt – Arsti juures\"}]","study.tip":"[\"Kom ihåg: von + dem → vom (vem?).\",\"I talspråket säger man nästan aldrig von dem — använd vom.\"]","study.important":"[\"vom = von dem, endast med maskulint eller neutrum substantiv i dativ (vem?).\",\"Anger ursprung, källa eller riktning från något specifikt.\",\"För feminint: von der Mutter, inte vom Mutter.\",\"Förväxla inte med aus (ursprung från land) eller ab (startpunkt).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts vom\|idx:634 (vom), ceļš 'study': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"study.translation":"-st","study.explanation":"[\"Vom on eessõna von ja artikli dem lühend.\",\"Täisvor…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "vom",
  "lv": "-st",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "-st",
    "explanation": [
      "Vom on eessõna von ja artikli dem lühend.",
      "Täisvorm: von dem (Dativ).",
      "Kasutatakse mees- ja kesksoost nimisõnadega, kui näidatakse päritolu või suunda millestki eemale.",
      "Vastab küsimustele kellelt? või kust?",
      "Praktikas kasutatakse peaaegu alati vom, mitte täisvormi von dem."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "Ma tulen jaamast."
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "Kingitus on isalt."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "Ta tuleb arsti juurest."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "Ta sõidab lennujaamast."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "See on turult."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "Me tuleme peolt."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "Ta võtab piima talunikult."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "Sõnum on ülemuselt."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "-st (konkreetne asi, Dativ)",
        "example": "vom Bahnhof – Jaamast"
      },
      {
        "word": "von",
        "meaning": "-st (üldiselt)",
        "example": "von mir – Minult"
      },
      {
        "word": "aus",
        "meaning": "Seest / päritolu",
        "example": "aus Deutschland – Pärit Saksamaalt"
      },
      {
        "word": "ab",
        "meaning": "Alates (aeg/koht)",
        "example": "ab Montag – Alates esmaspäevast"
      },
      {
        "word": "zu",
        "meaning": "-sse / juurde (vastupidine suund)",
        "example": "zum Arzt – Arsti juures"
      }
    ],
    "tip": [
      "Kom ihåg: von + dem → vom (vem?).",
      "I talspråket säger man nästan aldrig von dem — använd vom."
    ],
    "important": [
      "vom = von dem, endast med maskulint eller neutrum substantiv i dativ (vem?).",
      "Anger ursprung, källa eller riktning från något specifikt.",
      "För feminint: von der Mutter, inte vom Mutter.",
      "Förväxla inte med aus (ursprung från land) eller ab (startpunkt)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "vom",
          "von dem"
        ],
        "purple": [
          "vom"
        ],
        "green": [
          "vom",
          "päritolu"
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
              "jaamast"
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
              "isalt"
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
              "arsti juurest"
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
              "lennujaamast"
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
              "turult"
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
              "peolt"
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
              "talunikult"
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
              "ülemuselt"
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
              "-st"
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
              "-st"
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
              "seest"
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
              "alates"
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
            "vom"
          ],
          "purple": [
            "Atceries"
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
          ],
          "green": [
            "vom"
          ]
        },
        {
          "purple": [
            "Norāda",
            "Norāda"
          ]
        },
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

## Finding 26

**Audit ID:** `LRB100-0026`
**Finding Stable ID:** `g2/a1/sv|vor|idx:636|study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `vor|idx:636`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** pirms • priekšā
**DE reference (read-only):** vor
**CURRENT (captured scope):** {"study.translation":"Enne • Ees","study.explanation":"[\"Põhiidee: vor tähendab aja puhul enne või koha puhul ees.\",\"Kui jutt on ajast, tähendab vor enne.\",\"Kui jutt on kohast, tähendab vor ees või juures.\",\"Kellaajas tähendab vor “kuni”, näiteks fünf vor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Enne söömist ma pesen käsi.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Auto seisab maja ees.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"On viie minuti pärast kaheksa.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"Pärast söömist läheme jalutama.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"Enne / ees\",\"example\":\"Vor dem Essen...\"},{\"word\":\"nach\",\"meaning\":\"Pärast / poole\",\"example\":\"Nach dem Essen...\"},{\"word\":\"neben\",\"meaning\":\"Kõrval\",\"example\":\"Neben dem Haus.\"},{\"word\":\"hinter\",\"meaning\":\"Taga\",\"example\":\"Hinter dem Haus.\"}]","study.tip":"{\"text\":\"Atceries: pirms laikā, priekšā vietā → vor.\"}","study.important":"[\"vor kan vara både tid och plats.\",\"vor dem Essen = före maten; vor dem Haus = framför huset.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts vor\|idx:636 (vor), ceļš 'study': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"study.translation":"Enne • Ees","study.explanation":"[\"Põhiidee: vor tähendab aja puhul enne või koha…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "vor",
  "lv": "Enne • Ees",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Enne • Ees",
    "explanation": [
      "Põhiidee: vor tähendab aja puhul enne või koha puhul ees.",
      "Kui jutt on ajast, tähendab vor enne.",
      "Kui jutt on kohast, tähendab vor ees või juures.",
      "Kellaajas tähendab vor “kuni”, näiteks fünf vor acht."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Enne söömist ma pesen käsi."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Auto seisab maja ees."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "On viie minuti pärast kaheksa."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Pärast söömist läheme jalutama."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Enne / ees",
        "example": "Vor dem Essen..."
      },
      {
        "word": "nach",
        "meaning": "Pärast / poole",
        "example": "Nach dem Essen..."
      },
      {
        "word": "neben",
        "meaning": "Kõrval",
        "example": "Neben dem Haus."
      },
      {
        "word": "hinter",
        "meaning": "Taga",
        "example": "Hinter dem Haus."
      }
    ],
    "tip": {
      "text": "Atceries: pirms laikā, priekšā vietā → vor."
    },
    "important": [
      "vor kan vara både tid och plats.",
      "vor dem Essen = före maten; vor dem Haus = framför huset."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "vor",
          "fünf vor acht"
        ],
        "purple": [
          "enne",
          "ees",
          "kuni"
        ],
        "green": [
          "ajast",
          "koha"
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
              "enne"
            ],
            "yellow": [
              "söömist"
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
              "ees"
            ],
            "yellow": [
              "maja"
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
              "viie minuti pärast"
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
            "red": [
              "Pärast"
            ],
            "yellow": [
              "söömist"
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
              "enne",
              "ees"
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
              "pärast",
              "poole"
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
              "kõrval"
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
              "taga"
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
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "vor"
          ],
          "purple": [
            "vor",
            "vor"
          ]
        },
        {
          "blue": [
            "vor dem Essen",
            "vor dem Haus"
          ],
          "purple": [
            "vor",
            "vor"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 27

**Audit ID:** `LRB100-0027`
**Finding Stable ID:** `g2/a1/sv|was|idx:644|study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `was|idx:644`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** kas • ko
**DE reference (read-only):** was
**CURRENT (captured scope):** {"study.translation":"Mis • Mida","study.explanation":"[\"Põhiidee: was on küsisõna asjade ja sündmuste kohta — eesti keeles on see mis või mida, olenevalt lauseosast.\",\"Was küsib asjade, sündmuste ja faktide kohta, mitte isikute kohta.\",\"Saksa keeles was käänetes ei muutu — see näeb alati välja nagu was.\",\"Kui was on lause alus (subjekt), tõlgitakse see eesti keeles sõnaga mis (Was ist das? = Mis see on?).\",\"Kui was on tegusõna sihitis (objekt), tõlgitakse see eesti keeles sõnaga mida (Was machst du? = Mida sa teed?).\",\"Isikute kohta küsitakse sõnaga wer (kes/milline), mitte was.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Mis see on?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Mis juhtus?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Mida sa praegu teed?\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Mida sa soovid juua?\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Mida see sõna tähendab?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Mis on sinu lemmiktoit?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Mida sa ütlesid?\"}]","study.tip":"[\"was förändras inte — på tyska är det alltid was; på svenska väljer du vad eller vilken beroende på frassatsdelen.\",\"Snabb trick: om du kan svara på frågan med \\\"Det är ...\\\", använd vad; om svaret kommer efter verbet som tillägg, använd vilken.\"]","study.important":"[\"was frågar om saker, händelser och fakta — aldrig om personer.\",\"Isikute kohta küsitakse sõnaga wer (kes/milline), mitte was.\",\"was für (ein/eine) betyder vilken/vad för och frågar om egenskap eller typ (Was für ein Film ist das? = Vilken sort film är det?).\",\"Felaktigt: Wer ist passiert? → Korrekt: Was ist passiert?\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts was\|idx:644 (was), ceļš 'study': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.tip, study.important, kuru saturs sākas ar '{"study.translation":"Mis • Mida","study.explanation":"[\"Põhiidee: was on küsisõna asjade ja sündmuste …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "was",
  "lv": "Mis • Mida",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "Mis • Mida",
    "explanation": [
      "Põhiidee: was on küsisõna asjade ja sündmuste kohta — eesti keeles on see mis või mida, olenevalt lauseosast.",
      "Was küsib asjade, sündmuste ja faktide kohta, mitte isikute kohta.",
      "Saksa keeles was käänetes ei muutu — see näeb alati välja nagu was.",
      "Kui was on lause alus (subjekt), tõlgitakse see eesti keeles sõnaga mis (Was ist das? = Mis see on?).",
      "Kui was on tegusõna sihitis (objekt), tõlgitakse see eesti keeles sõnaga mida (Was machst du? = Mida sa teed?).",
      "Isikute kohta küsitakse sõnaga wer (kes/milline), mitte was."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Mis see on?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Mis juhtus?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Mida sa praegu teed?"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Mida sa soovid juua?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Mida see sõna tähendab?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "Mis on sinu lemmiktoit?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Mida sa ütlesid?"
      }
    ],
    "tip": [
      "was förändras inte — på tyska är det alltid was; på svenska väljer du vad eller vilken beroende på frassatsdelen.",
      "Snabb trick: om du kan svara på frågan med \"Det är ...\", använd vad; om svaret kommer efter verbet som tillägg, använd vilken."
    ],
    "important": [
      "was frågar om saker, händelser och fakta — aldrig om personer.",
      "Isikute kohta küsitakse sõnaga wer (kes/milline), mitte was.",
      "was für (ein/eine) betyder vilken/vad för och frågar om egenskap eller typ (Was für ein Film ist das? = Vilken sort film är det?).",
      "Felaktigt: Wer ist passiert? → Korrekt: Was ist passiert?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "was"
        ],
        "purple": [
          "mis",
          "mida"
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
              "Mis"
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
              "Mis"
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
              "Mida"
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
              "Mida"
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
              "Mida"
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
              "Mis"
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
              "Mida"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "was"
          ]
        },
        {
          "purple": [
            "was",
            "was"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "was"
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
          ]
        },
        {
          "blue": [
            "was"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 28

**Audit ID:** `LRB100-0028`
**Finding Stable ID:** `g2/a1/sv|wenn|idx:655|study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `wenn|idx:655`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** ja • kad
**DE reference (read-only):** wenn
**CURRENT (captured scope):** {"study.translation":"Kui (tingimus) • Kui (aeg)","study.explanation":"[\"Põhiidee: wenn väljendab olenevalt olukorrast tingimust või korduvat aega ja vastab eesti keeles sõnale kui.\",\"Kui jutt on tingimusest, tõlgi see sõnaga kui.\",\"Kui jutt on korduvast või üldisest ajast, tõlgitakse see sõnaga kui.\",\"Pärast wenn on tegusõna saksa lauses tavaliselt lõpus.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Kui sul on aega, astu läbi.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Kui sajab, jään ma koju.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Kui olen väsinud, joon kohvi.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Ma ei tea, kas ta tuleb.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"Kui (tingimus) / kui (aeg)\",\"example\":\"Wenn du Zeit hast...\"},{\"word\":\"ob\",\"meaning\":\"Kas kaudses küsimuses\",\"example\":\"Ich weiß nicht, ob...\"},{\"word\":\"wann\",\"meaning\":\"Millal küsimuses\",\"example\":\"Wann kommst du?\"},{\"word\":\"weil\",\"meaning\":\"Sest\",\"example\":\"Ich bleibe, weil ich krank bin.\"}]","study.tip":"{\"text\":\"Atceries: nosacījums → wenn; jautājums “kad?” → wann.\"}","study.important":"[\"wenn och wann är inte samma sak.\",\"Wann kommst du? är en fråga. Wenn du kommst... är ett villkor/tid.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts wenn\|idx:655 (wenn), ceļš 'study': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"study.translation":"Kui (tingimus) • Kui (aeg)","study.explanation":"[\"Põhiidee: wenn väljendab olene…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wenn",
  "lv": "Kui (tingimus) • Kui (aeg)",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "Kui (tingimus) • Kui (aeg)",
    "explanation": [
      "Põhiidee: wenn väljendab olenevalt olukorrast tingimust või korduvat aega ja vastab eesti keeles sõnale kui.",
      "Kui jutt on tingimusest, tõlgi see sõnaga kui.",
      "Kui jutt on korduvast või üldisest ajast, tõlgitakse see sõnaga kui.",
      "Pärast wenn on tegusõna saksa lauses tavaliselt lõpus."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Kui sul on aega, astu läbi."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Kui sajab, jään ma koju."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Kui olen väsinud, joon kohvi."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Ma ei tea, kas ta tuleb."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "Kui (tingimus) / kui (aeg)",
        "example": "Wenn du Zeit hast..."
      },
      {
        "word": "ob",
        "meaning": "Kas kaudses küsimuses",
        "example": "Ich weiß nicht, ob..."
      },
      {
        "word": "wann",
        "meaning": "Millal küsimuses",
        "example": "Wann kommst du?"
      },
      {
        "word": "weil",
        "meaning": "Sest",
        "example": "Ich bleibe, weil ich krank bin."
      }
    ],
    "tip": {
      "text": "Atceries: nosacījums → wenn; jautājums “kad?” → wann."
    },
    "important": [
      "wenn och wann är inte samma sak.",
      "Wann kommst du? är en fråga. Wenn du kommst... är ett villkor/tid."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wenn"
        ],
        "purple": [
          "ja",
          "Põhiidee",
          "tingimust"
        ],
        "green": [
          "lõpus"
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
              "kui"
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
              "kui"
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
              "kui"
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
            "red": [
              "kas"
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
              "kui",
              "kui"
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
              "kas"
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
              "millal"
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
              "sest"
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
          "purple": [
            "Atceries"
          ],
          "yellow": [
            "wann",
            "Atceries"
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
          ]
        }
      ]
    }
  }
}
```

---

## Finding 29

**Audit ID:** `LRB100-0029`
**Finding Stable ID:** `g2/a1/sv|wer|idx:656|study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `wer|idx:656`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** kas • kurš
**DE reference (read-only):** wer
**CURRENT (captured scope):** {"study.translation":"Kes • Kumb","study.explanation":"[\"Põhiidee: wer on küsisõna inimese identiteedi kohta — eesti keeles on see kes.\",\"Wer küsib inimeste kohta, mitte asjade või sündmuste kohta.\",\"Asjade ja sündmuste kohta küsitakse was, mitte wer.\",\"Wer on saksa keeles tavaliselt lause alus (Nominativis) — Wer ist das? = Kes see on?\",\"Kui küsid, kes täpselt mitmest inimesest, kasutatakse wer sageli koos von (wer von euch = kes teist).\",\"Wer muudab vormi käände järgi: wen (Akkusativ), wem (Dativ), wessen (Genitiv) — A1 tasemel esineb kõige sagedamini just vorm wer.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Mis see on?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Kes sa oled?\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Kes täna tuleb?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Kes on sinu õpetaja?\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Kes teist räägib saksa keelt?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Kes seda ütles?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Kes soovib kohvi?\"}]","study.tip":"[\"wer frågar om personer (vem/vilken) — om saker och händelser använd was.\",\"För att fråga om ett val mellan flera personer, använd wer von... (vem av...).\"]","study.important":"[\"wer frågar endast om personer, aldrig om saker.\",\"Om saker och händelser frågas med was, inte wer.\",\"wer ändrar form enligt kasus: wen, wem, wessen — men grundformen är wer.\",\"Felaktigt: Wer ist passiert? → Korrekt: Was ist passiert?\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts wer\|idx:656 (wer), ceļš 'study': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.tip, study.important, kuru saturs sākas ar '{"study.translation":"Kes • Kumb","study.explanation":"[\"Põhiidee: wer on küsisõna inimese identiteedi …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wer",
  "lv": "Kes • Kumb",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "Kes • Kumb",
    "explanation": [
      "Põhiidee: wer on küsisõna inimese identiteedi kohta — eesti keeles on see kes.",
      "Wer küsib inimeste kohta, mitte asjade või sündmuste kohta.",
      "Asjade ja sündmuste kohta küsitakse was, mitte wer.",
      "Wer on saksa keeles tavaliselt lause alus (Nominativis) — Wer ist das? = Kes see on?",
      "Kui küsid, kes täpselt mitmest inimesest, kasutatakse wer sageli koos von (wer von euch = kes teist).",
      "Wer muudab vormi käände järgi: wen (Akkusativ), wem (Dativ), wessen (Genitiv) — A1 tasemel esineb kõige sagedamini just vorm wer."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Mis see on?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Kes sa oled?"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Kes täna tuleb?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Kes on sinu õpetaja?"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Kes teist räägib saksa keelt?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Kes seda ütles?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Kes soovib kohvi?"
      }
    ],
    "tip": [
      "wer frågar om personer (vem/vilken) — om saker och händelser använd was.",
      "För att fråga om ett val mellan flera personer, använd wer von... (vem av...)."
    ],
    "important": [
      "wer frågar endast om personer, aldrig om saker.",
      "Om saker och händelser frågas med was, inte wer.",
      "wer ändrar form enligt kasus: wen, wem, wessen — men grundformen är wer.",
      "Felaktigt: Wer ist passiert? → Korrekt: Was ist passiert?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wer"
        ],
        "purple": [
          "Põhiidee",
          "Põhiidee"
        ],
        "green": [
          "was"
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
              "Mis"
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
              "Kes"
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
              "Kes"
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
              "Kes"
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
              "Kes"
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
              "Kes"
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
              "Kes"
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
          ]
        },
        {
          "blue": [
            "wer von"
          ],
          "purple": [
            "wer"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "wer"
          ]
        },
        {
          "green": [
            "was"
          ],
          "blue": [
            "wer"
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
          ],
          "green": [
            "Was"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 30

**Audit ID:** `LRB100-0030`
**Finding Stable ID:** `g2/a1/sv|werden|idx:657|lv, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `werden|idx:657`
**Field / path:** `lv, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** kļūt
**DE reference (read-only):** werden
**CURRENT (captured scope):** {"lv":"Saama","study.explanation":"[\"Põhiidee: werden tähendab A1 tasemel kõige sagedamini saama.\",\"Seda kasutatakse, kui miski muutub või saab teistsuguseks.\",\"Hiljem kasutatakse saksa keeles werden ka tuleviku ja passiivi jaoks.\",\"A1 tasemel on kõige tähtsam fraas Ich werde müde. = Ma jään väsinuks.\"]","study.examples":"[{\"de\":\"Ich werde müde.\",\"lv\":\"Ma jään väsinuks.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"Läheb külmaks.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"Ta saab arstiks.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"Ma olen väsinud.\"}]","study.comparison":"[{\"word\":\"werden\",\"meaning\":\"Saama\",\"example\":\"Ich werde müde.\"},{\"word\":\"sein\",\"meaning\":\"Olema\",\"example\":\"Ich bin müde.\"},{\"word\":\"bleiben\",\"meaning\":\"Jääma\",\"example\":\"Ich bleibe hier.\"},{\"word\":\"machen\",\"meaning\":\"Tegema / valmistama\",\"example\":\"Ich mache das.\"}]","study.important":"[\"werden är inte samma som sein.\",\"Ich werde müde = jag blir trött; Ich bin müde = jag är trött.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts werden\|idx:657 (werden), ceļš 'lv, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Saama","study.explanation":"[\"Põhiidee: werden tähendab A1 tasemel kõige sagedamini saama.\",\"S…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "werden",
  "lv": "Saama",
  "level": "A1",
  "study": {
    "id": "a1-werden",
    "layout": "standardStudy",
    "translation": "Saama",
    "explanation": [
      "Põhiidee: werden tähendab A1 tasemel kõige sagedamini saama.",
      "Seda kasutatakse, kui miski muutub või saab teistsuguseks.",
      "Hiljem kasutatakse saksa keeles werden ka tuleviku ja passiivi jaoks.",
      "A1 tasemel on kõige tähtsam fraas Ich werde müde. = Ma jään väsinuks."
    ],
    "examples": [
      {
        "de": "Ich werde müde.",
        "lv": "Ma jään väsinuks."
      },
      {
        "de": "Es wird kalt.",
        "lv": "Läheb külmaks."
      },
      {
        "de": "Sie wird Ärztin.",
        "lv": "Ta saab arstiks."
      },
      {
        "de": "Ich bin müde.",
        "lv": "Ma olen väsinud."
      }
    ],
    "comparison": [
      {
        "word": "werden",
        "meaning": "Saama",
        "example": "Ich werde müde."
      },
      {
        "word": "sein",
        "meaning": "Olema",
        "example": "Ich bin müde."
      },
      {
        "word": "bleiben",
        "meaning": "Jääma",
        "example": "Ich bleibe hier."
      },
      {
        "word": "machen",
        "meaning": "Tegema / valmistama",
        "example": "Ich mache das."
      }
    ],
    "tip": {
      "text": "Atceries: izmaiņa/stāvoklis kļūst citāds → werden."
    },
    "important": [
      "werden är inte samma som sein.",
      "Ich werde müde = jag blir trött; Ich bin müde = jag är trött."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "werden",
          "Ich werde"
        ],
        "purple": [
          "saama",
          "muutub",
          "muutub"
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
              "jään"
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
              "läheb"
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
              "saab"
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
            "red": [
              "olen"
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
              "saama"
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
              "olema"
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
              "machen"
            ]
          },
          "meaning": {
            "purple": [
              "tegema",
              "tegema"
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
            "Atceries",
            "Atceries"
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
          "purple": [
            "Ich"
          ],
          "red": [
            "bin",
            "Ich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 31

**Audit ID:** `LRB100-0031`
**Finding Stable ID:** `g2/a1/sv|Wetter|idx:658|lv, study.explanation, study.examples, study.comparison, study.tip, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `Wetter|idx:658`
**Field / path:** `lv, study.explanation, study.examples, study.comparison, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** laiks (laikapstākļi)
**DE reference (read-only):** Wetter
**CURRENT (captured scope):** {"lv":"Ilm (ilmastik)","study.explanation":"[\"Põhiidee: das Wetter tähendab ilma — päikeseline, vihmane, külm või soe.\",\"Eesti sõna „ilm” tähendab ainult ilmastikuolusid, mitte kellaaega — ka saksa keeles on need eri sõnad.\",\"Ilma kohta räägitakse sõnaga das Wetter: Wie ist das Wetter heute?\",\"Lauses kasutatakse das Wetter sageli koos sõnadega nagu warm või kalt.\",\"Ära aja segi sõnaga die Zeit — see on aeg kui hetk või võimalus (Ich habe keine Zeit).\"]","study.examples":"[{\"de\":\"Wie ist das Wetter heute?\",\"lv\":\"Milline ilm on täna?\"},{\"de\":\"Das Wetter ist schön.\",\"lv\":\"Ilm on ilus.\"},{\"de\":\"Das Wetter ist schlecht.\",\"lv\":\"Ilm on halb.\"},{\"de\":\"Im Winter ist das Wetter oft kalt.\",\"lv\":\"Talvel on ilm sageli külm.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Me räägime ilmast.\"},{\"de\":\"Morgen wird das Wetter besser.\",\"lv\":\"Homme läheb ilm paremaks.\"}]","study.comparison":"[{\"word\":\"Wetter\",\"meaning\":\"Ilm\",\"example\":\"Das Wetter ist schön.\"},{\"word\":\"Zeit\",\"meaning\":\"Aeg (hetk)\",\"example\":\"Ich habe keine Zeit.\"},{\"word\":\"Regen\",\"meaning\":\"Vihm\",\"example\":\"Es gibt viel Regen.\"},{\"word\":\"Sonne\",\"meaning\":\"Päike\",\"example\":\"Die Sonne scheint.\"}]","study.tip":"[\"Om du talar om sol, regn eller temperatur utomhus — använd das Wetter.\",\"Kom ihåg: Wie ist das Wetter? = Vad är vädret? (inte klockan).\"]","study.important":"[\"das Wetter = väderförhållanden, inte tid på klockan.\",\"die Zeit = tid som moment eller möjlighet — annan kort A1.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Wetter\|idx:658 (Wetter), ceļš 'lv, study.explanation, study.examples, study.comparison, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"lv":"Ilm (ilmastik)","study.explanation":"[\"Põhiidee: das Wetter tähendab ilma — päikeseline, vihmane…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Wetter",
  "de_article": "das",
  "lv": "Ilm (ilmastik)",
  "level": "A1",
  "study": {
    "id": "a1-wetter",
    "layout": "standardStudy",
    "translation": "Ilm (ilmastik)",
    "explanation": [
      "Põhiidee: das Wetter tähendab ilma — päikeseline, vihmane, külm või soe.",
      "Eesti sõna „ilm” tähendab ainult ilmastikuolusid, mitte kellaaega — ka saksa keeles on need eri sõnad.",
      "Ilma kohta räägitakse sõnaga das Wetter: Wie ist das Wetter heute?",
      "Lauses kasutatakse das Wetter sageli koos sõnadega nagu warm või kalt.",
      "Ära aja segi sõnaga die Zeit — see on aeg kui hetk või võimalus (Ich habe keine Zeit)."
    ],
    "examples": [
      {
        "de": "Wie ist das Wetter heute?",
        "lv": "Milline ilm on täna?"
      },
      {
        "de": "Das Wetter ist schön.",
        "lv": "Ilm on ilus."
      },
      {
        "de": "Das Wetter ist schlecht.",
        "lv": "Ilm on halb."
      },
      {
        "de": "Im Winter ist das Wetter oft kalt.",
        "lv": "Talvel on ilm sageli külm."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Me räägime ilmast."
      },
      {
        "de": "Morgen wird das Wetter besser.",
        "lv": "Homme läheb ilm paremaks."
      }
    ],
    "comparison": [
      {
        "word": "Wetter",
        "meaning": "Ilm",
        "example": "Das Wetter ist schön."
      },
      {
        "word": "Zeit",
        "meaning": "Aeg (hetk)",
        "example": "Ich habe keine Zeit."
      },
      {
        "word": "Regen",
        "meaning": "Vihm",
        "example": "Es gibt viel Regen."
      },
      {
        "word": "Sonne",
        "meaning": "Päike",
        "example": "Die Sonne scheint."
      }
    ],
    "tip": [
      "Om du talar om sol, regn eller temperatur utomhus — använd das Wetter.",
      "Kom ihåg: Wie ist das Wetter? = Vad är vädret? (inte klockan)."
    ],
    "important": [
      "das Wetter = väderförhållanden, inte tid på klockan.",
      "die Zeit = tid som moment eller möjlighet — annan kort A1."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Wetter",
          "Zeit"
        ],
        "purple": [
          "ilma"
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
              "milline"
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
              "ilm"
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
              "ilm"
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
              "talvel"
            ],
            "yellow": [
              "talvel"
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
              "räägime"
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
              "homme"
            ],
            "green": [
              "paremaks"
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
              "ilm"
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
              "aeg"
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
              "vihm"
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
              "päike"
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
          ]
        },
        {
          "blue": [
            "Wetter"
          ]
        }
      ],
      "important": [
        {
          "blue": [
            "Wetter"
          ]
        },
        {
          "green": [
            "Zeit"
          ],
          "purple": [
            "die"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 32

**Audit ID:** `LRB100-0032`
**Finding Stable ID:** `g2/a1/sv|wie|idx:660|lv, study.explanation, study.examples, study.comparison, study.tip, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0003`
**Lang:** sv
**Card:** `wie|idx:660`
**Field / path:** `lv, study.explanation, study.examples, study.comparison, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** kā • cik
**DE reference (read-only):** wie
**CURRENT (captured scope):** {"lv":"Kuidas • Kui","study.explanation":"[\"Põhiidee: wie küsib viisi või omaduse kohta (kuidas) ja hulga või arvu kohta (kui palju), olenevalt kontekstist.\",\"Wie üksi (Wie geht's?) küsib viisi kohta — eesti keeles kuidas.\",\"Wie + omadussõna (wie viel, wie alt, wie lange) küsib hulga, vanuse või kestuse kohta — eesti keeles kui.\",\"Wie viel(e) tähendab kui palju • Wie alt tähendab kui vana • Wie lange tähendab kui kaua.\",\"Võrdlustes tähendab wie samuti nagu (so groß wie = sama suur kui).\"]","study.examples":"[{\"de\":\"Wie geht es dir?\",\"lv\":\"Kuidas sul läheb?\"},{\"de\":\"Wie heißt du?\",\"lv\":\"Kuidas sind kutsutakse?\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"Kui palju see maksab?\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"Kui vana sa oled?\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"Kui kaua film kestab?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"Ta on sama pikk kui tema isa.\"}]","study.comparison":null,"study.tip":"[\"wie själv = hur (sätt); wie + adjektiv (viel/alt/lange) = hur mycket (mängd).\",\"I jämförelse so ... wie = lika ... som.\"]","study.important":"[\"wie viel(e) = hur mycket; wie alt = hur gammal; wie lange = hur länge.\",\"wie själv (Wie...?) brukar = hur, inte hur mycket.\",\"Felaktigt: Hur många år? → Korrekt: Hur mår du? (Wie geht's?)\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts wie\|idx:660 (wie), ceļš 'lv, study.explanation, study.examples, study.comparison, study.tip, study.important': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir '{"lv":"Kuidas • Kui","study.explanation":"[\"Põhiidee: wie küsib viisi või omaduse kohta (kuidas) ja hul…'; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wie",
  "lv": "Kuidas • Kui",
  "level": "A1",
  "study": {
    "id": "a1-wie",
    "layout": "standardStudy",
    "translation": "Kuidas • Kui",
    "explanation": [
      "Põhiidee: wie küsib viisi või omaduse kohta (kuidas) ja hulga või arvu kohta (kui palju), olenevalt kontekstist.",
      "Wie üksi (Wie geht's?) küsib viisi kohta — eesti keeles kuidas.",
      "Wie + omadussõna (wie viel, wie alt, wie lange) küsib hulga, vanuse või kestuse kohta — eesti keeles kui.",
      "Wie viel(e) tähendab kui palju • Wie alt tähendab kui vana • Wie lange tähendab kui kaua.",
      "Võrdlustes tähendab wie samuti nagu (so groß wie = sama suur kui)."
    ],
    "examples": [
      {
        "de": "Wie geht es dir?",
        "lv": "Kuidas sul läheb?"
      },
      {
        "de": "Wie heißt du?",
        "lv": "Kuidas sind kutsutakse?"
      },
      {
        "de": "Wie viel kostet das?",
        "lv": "Kui palju see maksab?"
      },
      {
        "de": "Wie alt bist du?",
        "lv": "Kui vana sa oled?"
      },
      {
        "de": "Wie lange dauert der Film?",
        "lv": "Kui kaua film kestab?"
      },
      {
        "de": "Er ist so groß wie sein Vater.",
        "lv": "Ta on sama pikk kui tema isa."
      }
    ],
    "tip": [
      "wie själv = hur (sätt); wie + adjektiv (viel/alt/lange) = hur mycket (mängd).",
      "I jämförelse so ... wie = lika ... som."
    ],
    "important": [
      "wie viel(e) = hur mycket; wie alt = hur gammal; wie lange = hur länge.",
      "wie själv (Wie...?) brukar = hur, inte hur mycket.",
      "Felaktigt: Hur många år? → Korrekt: Hur mår du? (Wie geht's?)"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wie"
        ],
        "purple": [
          "kuidas",
          "kui palju"
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
              "kuidas"
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
              "kuidas"
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
              "kui palju"
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
              "kui"
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
              "kui"
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
              "sama"
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
            "wie",
            "wie"
          ]
        },
        {
          "purple": [
            "wie",
            "wie"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "wie",
            "wie",
            "wie"
          ]
        },
        {
          "purple": [
            "wie"
          ]
        },
        {
          "red": [
            "Nepareizi"
          ],
          "blue": [
            "Nepareizi"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 33

**Audit ID:** `LRB100-0033`
**Finding Stable ID:** `g2/a1/sv|wissen|idx:311|lv, study.explanation, study.tip, study.important|TARGET_LANGUAGE_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `wissen|idx:311`
**Field / path:** `lv, study.explanation, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_ERROR
**LV source (read-only):** zināt
**DE reference (read-only):** wissen
**CURRENT (captured scope):** {"lv":"Teadma","study.explanation":"[\"Põhiidee: Teada fakti, vastust või teavet.\",\"Wissen tähendab peamiselt: teave/fakt.\",\"Sageli kirjeldab: vastuseid, andmeid.\",\"Wissen kasutatakse, kui tead fakti, vastust või teavet.\"]","study.tip":"[\"wissen = att veta\",\"Använd wissen när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"wissen = att veta ett faktum.\",\"wissen = att veta.\",\"Att veta ett faktum, svar eller information.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts wissen\|idx:311 (wissen), ceļš 'lv, study.explanation, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"Teadma","study.explanation":"[\"Põhiidee: Teada fakti, vastust või teavet.\",\"Wissen tähendab pe…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wissen",
  "lv": "Teadma",
  "level": "A1",
  "id": "a1-wissen",
  "study": {
    "id": "a1-wissen-study",
    "layout": "standardStudy",
    "translation": "Teadma",
    "explanation": [
      "Põhiidee: Teada fakti, vastust või teavet.",
      "Wissen tähendab peamiselt: teave/fakt.",
      "Sageli kirjeldab: vastuseid, andmeid.",
      "Wissen kasutatakse, kui tead fakti, vastust või teavet."
    ],
    "examples": [
      {
        "de": "Ich weiß, wo er wohnt.",
        "lv": "Ma tean, kus ta elab."
      },
      {
        "de": "Woher wissen Sie das?",
        "lv": "Kust te seda teate?"
      },
      {
        "de": "Ich weiß die Antwort.",
        "lv": "Ma tean vastust."
      }
    ],
    "comparison": [
      {
        "word": "wissen",
        "meaning": "Teadma (fakti, teavet)",
        "example": "Ich weiß, wo er wohnt. – Ma tean, kus ta elab."
      },
      {
        "word": "kennen",
        "meaning": "Tundma (inimest, kohta, asja)",
        "example": "Ich kenne die Stadt. – Ma tunnen linna."
      }
    ],
    "tip": [
      "wissen = att veta",
      "Använd wissen när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "wissen = att veta ett faktum.",
      "wissen = att veta.",
      "Att veta ett faktum, svar eller information."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "wissen",
          "wissen"
        ],
        "purple": [
          "Teada"
        ]
      },
      "examples": [
        {
          "de": {},
          "lv": {
            "purple": [
              "tean"
            ]
          }
        },
        {
          "de": {
            "green": [
              "wissen",
              "wissen"
            ]
          },
          "lv": {
            "purple": [
              "kust"
            ]
          }
        },
        {
          "de": {},
          "lv": {
            "purple": [
              "tean"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "wissen"
          ]
        }
      ],
      "important": [
        {
          "green": [
            "wissen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 34

**Audit ID:** `LRB100-0034`
**Finding Stable ID:** `g2/a1/sv|Zeit|idx:699|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0002`
**Lang:** sv
**Card:** `Zeit|idx:699`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** laiks (brīdis / laika posms)
**DE reference (read-only):** Zeit
**CURRENT (captured scope):** {"lv":"Aeg (hetk / ajavahemik)","study.translation":"Aeg (hetk / ajavahemik)","study.explanation":"[\"Põhiidee: Aeg kui mõiste — hetk, võimalus, ajavahemik.\",\"Die Zeit tähendab peamiselt: hetk, võimalus.\",\"Sageli kirjeldab: abstraktne mõiste.\",\"Die Zeit on abstraktne mõiste — aeg, hetk või võimalus (Ich habe keine Zeit).\"]","study.examples":"[{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Mul ei ole aega.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Mul ei ole aega.\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Kas sul on aega?\"},{\"de\":\"Die Zeit vergeht schnell.\",\"lv\":\"Aeg möödub kiiresti.\"}]","study.tip":"[\"Tid som koncept — ögonblick, möjlighet, tidsperiod.\",\"Använd die Zeit när sammanhanget motsvarar denna betydelse.\"]","study.important":"[\"die Zeit: kontrollera sammanhanget före användning.\",\"die Zeit: kontrollera sammanhanget före användning.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Zeit\|idx:699 (Zeit), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Aeg (hetk / ajavahemik)","study.translation":"Aeg (hetk / ajavahemik)","study.explanation":"[\"Põ…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "Aeg (hetk / ajavahemik)",
  "level": "A1",
  "study": {
    "id": "a1-zeit",
    "layout": "standardStudy",
    "translation": "Aeg (hetk / ajavahemik)",
    "explanation": [
      "Põhiidee: Aeg kui mõiste — hetk, võimalus, ajavahemik.",
      "Die Zeit tähendab peamiselt: hetk, võimalus.",
      "Sageli kirjeldab: abstraktne mõiste.",
      "Die Zeit on abstraktne mõiste — aeg, hetk või võimalus (Ich habe keine Zeit)."
    ],
    "examples": [
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Mul ei ole aega."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Mul ei ole aega."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Kas sul on aega?"
      },
      {
        "de": "Die Zeit vergeht schnell.",
        "lv": "Aeg möödub kiiresti."
      }
    ],
    "tip": [
      "Tid som koncept — ögonblick, möjlighet, tidsperiod.",
      "Använd die Zeit när sammanhanget motsvarar denna betydelse."
    ],
    "important": [
      "die Zeit: kontrollera sammanhanget före användning.",
      "die Zeit: kontrollera sammanhanget före användning."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "die Zeit",
          "zeit"
        ],
        "purple": [
          "aeg"
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
          "lv": {
            "purple": [
              "aega"
            ]
          }
        },
        {
          "de": {
            "green": [
              "zeit"
            ]
          },
          "lv": {
            "purple": [
              "aega"
            ]
          }
        },
        {
          "de": {
            "green": [
              "zeit"
            ]
          },
          "lv": {
            "purple": [
              "aega"
            ]
          }
        },
        {
          "de": {
            "green": [
              "die Zeit",
              "zeit"
            ]
          },
          "lv": {
            "purple": [
              "aeg"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "Laiks"
          ]
        }
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

## Finding 35

**Audit ID:** `LRB100-0035`
**Finding Stable ID:** `g2/a1/sv|zu|idx:668|lv, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0004`
**Lang:** sv
**Card:** `zu|idx:668`
**Field / path:** `lv, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** uz • pie
**DE reference (read-only):** zu
**CURRENT (captured scope):** {"lv":"-sse • Juurde","study.explanation":"[\"Põhiidee: zu tähendab väga sageli juurde või poole, aga sellel on oma roll ka infinitiiviga.\",\"Inimeste ja asutuste puhul tähendab zu sageli juurde või poole.\",\"Omadussõnadega võib zu tähendada liiga.\",\"Konstruktsioonis zu + tegevusnimi aitab see moodustada tegevusnime: zu lernen, zu gehen.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Ma lähen arsti juurde.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"Me läheme kooli.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"See on liiga kallis.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"Mul ei ole aega õppida.\"}]","study.comparison":"[{\"word\":\"zu\",\"meaning\":\"-sse / juurde / liiga / infinitiiv\",\"example\":\"Ich gehe zum Arzt.\"},{\"word\":\"nach\",\"meaning\":\"-sse linnade/riikidega\",\"example\":\"Ich fahre nach Berlin.\"},{\"word\":\"in\",\"meaning\":\"Sees / mingisse kohta\",\"example\":\"Ich gehe in die Schule.\"},{\"word\":\"bei\",\"meaning\":\"Kellegi juures / töö juures\",\"example\":\"Ich bin bei Anna.\"}]","study.important":"[\"zu har många användningar, så titta alltid på konstruktionen.\",\"zu teuer betyder \\\"för dyr\\\", inte \\\"till dyr\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts zu\|idx:668 (zu), ceļš 'lv, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"lv":"-sse • Juurde","study.explanation":"[\"Põhiidee: zu tähendab väga sageli juurde või poole, aga se…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zu",
  "lv": "-sse • Juurde",
  "level": "A1",
  "study": {
    "id": "a1-zu",
    "layout": "standardStudy",
    "translation": "-sse • Juurde",
    "explanation": [
      "Põhiidee: zu tähendab väga sageli juurde või poole, aga sellel on oma roll ka infinitiiviga.",
      "Inimeste ja asutuste puhul tähendab zu sageli juurde või poole.",
      "Omadussõnadega võib zu tähendada liiga.",
      "Konstruktsioonis zu + tegevusnimi aitab see moodustada tegevusnime: zu lernen, zu gehen."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Ma lähen arsti juurde."
      },
      {
        "de": "Wir gehen zur Schule.",
        "lv": "Me läheme kooli."
      },
      {
        "de": "Das ist zu teuer.",
        "lv": "See on liiga kallis."
      },
      {
        "de": "Ich habe keine Zeit zu lernen.",
        "lv": "Mul ei ole aega õppida."
      }
    ],
    "comparison": [
      {
        "word": "zu",
        "meaning": "-sse / juurde / liiga / infinitiiv",
        "example": "Ich gehe zum Arzt."
      },
      {
        "word": "nach",
        "meaning": "-sse linnade/riikidega",
        "example": "Ich fahre nach Berlin."
      },
      {
        "word": "in",
        "meaning": "Sees / mingisse kohta",
        "example": "Ich gehe in die Schule."
      },
      {
        "word": "bei",
        "meaning": "Kellegi juures / töö juures",
        "example": "Ich bin bei Anna."
      }
    ],
    "tip": {
      "text": "Atceries: pie ārsta → zum Arzt; pārāk dārgi → zu teuer."
    },
    "important": [
      "zu har många användningar, så titta alltid på konstruktionen.",
      "zu teuer betyder \"för dyr\", inte \"till dyr\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "zu",
          "zu lernen",
          "zu gehen"
        ],
        "purple": [
          "poole",
          "juurde",
          "liiga",
          "tegevusnime"
        ],
        "green": [
          "Inimeste",
          "asutuste"
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
              "arsti juurde"
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
              "kooli"
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
              "liiga kallis"
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
              "õppida"
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
              "sse",
              "juurde",
              "liiga",
              "infinitiiv"
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
              "sse"
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
              "sees",
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
              "bei"
            ]
          },
          "meaning": {
            "purple": [
              "juures"
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
            "Atceries",
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "zu"
          ],
          "purple": [
            "ļoti"
          ]
        },
        {
          "blue": [
            "zu teuer"
          ],
          "purple": [
            "teuer"
          ],
          "red": [
            "teuer"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 36

**Audit ID:** `LRB100-0036`
**Finding Stable ID:** `g2/a1/sv|Zug|idx:671|lv, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0005`
**Lang:** sv
**Card:** `Zug|idx:671`
**Field / path:** `lv, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** vilciens
**DE reference (read-only):** Zug
**CURRENT (captured scope):** {"lv":"Rong","study.explanation":"[\"Põhiidee: der Zug tähendab A1 tasemel kõige sagedamini rong.\",\"Seda kasutatakse igapäevastes olukordades sõitmise, saabumise ja väljumise kohta.\",\"Mõnes muus tähenduses võib Zug olla käik, tuuletõmbus või näojoon, aga need ei ole peamised A1 tähendused.\",\"Väga sagedased fraasid on mit dem Zug fahren ja Der Zug kommt.\"]","study.examples":"[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"Rong saabub kell kaheksa.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"Ma sõidan rongiga.\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"Rong on täis.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"Buss saabub hiljem.\"}]","study.comparison":"[{\"word\":\"der Zug\",\"meaning\":\"Rong\",\"example\":\"Der Zug kommt.\"},{\"word\":\"die Bahn\",\"meaning\":\"Raudtee / rongiga sõitmine\",\"example\":\"Ich fahre mit der Bahn.\"},{\"word\":\"der Bus\",\"meaning\":\"Buss\",\"example\":\"Der Bus kommt.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"Tramm\",\"example\":\"Die Straßenbahn ist hier.\"}]","study.important":"[\"der Zug i huvudtiteln ska förstås som \\\"tåg\\\".\",\"Mer ovanliga betydelser behövs inte på A1-huvudnivån.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts Zug\|idx:671 (Zug), ceļš 'lv, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Rong","study.explanation":"[\"Põhiidee: der Zug tähendab A1 tasemel kõige sagedamini rong.\",\"Se…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Zug",
  "de_article": "der",
  "de_plural": "die Züge",
  "lv": "Rong",
  "level": "A1",
  "study": {
    "id": "a1-zug",
    "layout": "standardStudy",
    "translation": "Rong",
    "explanation": [
      "Põhiidee: der Zug tähendab A1 tasemel kõige sagedamini rong.",
      "Seda kasutatakse igapäevastes olukordades sõitmise, saabumise ja väljumise kohta.",
      "Mõnes muus tähenduses võib Zug olla käik, tuuletõmbus või näojoon, aga need ei ole peamised A1 tähendused.",
      "Väga sagedased fraasid on mit dem Zug fahren ja Der Zug kommt."
    ],
    "examples": [
      {
        "de": "Der Zug kommt um acht Uhr.",
        "lv": "Rong saabub kell kaheksa."
      },
      {
        "de": "Ich fahre mit dem Zug.",
        "lv": "Ma sõidan rongiga."
      },
      {
        "de": "Der Zug ist voll.",
        "lv": "Rong on täis."
      },
      {
        "de": "Der Bus kommt später.",
        "lv": "Buss saabub hiljem."
      }
    ],
    "comparison": [
      {
        "word": "der Zug",
        "meaning": "Rong",
        "example": "Der Zug kommt."
      },
      {
        "word": "die Bahn",
        "meaning": "Raudtee / rongiga sõitmine",
        "example": "Ich fahre mit der Bahn."
      },
      {
        "word": "der Bus",
        "meaning": "Buss",
        "example": "Der Bus kommt."
      },
      {
        "word": "die Straßenbahn",
        "meaning": "Tramm",
        "example": "Die Straßenbahn ist hier."
      }
    ],
    "tip": {
      "text": "Atceries: konkrēts vilciens → der Zug."
    },
    "important": [
      "der Zug i huvudtiteln ska förstås som \"tåg\".",
      "Mer ovanliga betydelser behövs inte på A1-huvudnivån."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Zug",
          "Zug",
          "mit dem Zug fahren"
        ],
        "purple": [
          "rong",
          "Rong"
        ],
        "red": [
          "käik",
          "tuuletõmbus",
          "näojoon"
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
              "rong"
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
              "rongiga"
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
              "rong"
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
            "red": [
              "Buss"
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
              "rong"
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
              "raudtee",
              "rongiga"
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
              "buss"
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
              "tramm"
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
            "Atceries"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "der Zug"
          ],
          "purple": [
            "der"
          ]
        },
        {
          "red": [
            "Retākās"
          ],
          "purple": [
            "Retākās"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 37

**Audit ID:** `LRB100-0037`
**Finding Stable ID:** `g2/a1/sv|zum|idx:672|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SV-L0001`
**Lang:** sv
**Card:** `zum|idx:672`
**Field / path:** `lv; study.explanation; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sv-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** uz • pie
**DE reference (read-only):** zum
**CURRENT (captured scope):** {"lv":"-sse • Juurde","study.explanation":"[\"Zum on eessõna zu ja artikli dem lühend.\",\"Täisvorm: zu dem (Dativ).\",\"Kasutatakse mees- ja kesksoost nimisõnadega, kui näidatakse suunda või eesmärki.\",\"Tähendab sageli millegi juurde või kellegi juurde — arsti juurde, jaama, sõbra juurde.\",\"Praktikas kasutatakse peaaegu alati zum, mitte täisvormi zu dem.\"]","study.tip":"[\"Kom ihåg: zu + dem → zum (vem?).\",\"För feminint substantiv: zu + der → zur.\"]","study.important":"[\"zum = zu dem, endast med maskulint eller neutrum substantiv i dativ (vem?).\",\"Anger riktning eller syfte: till läkaren, till stationen, till en vän.\",\"För femininum använd zur: zur Bank, zur Post.\",\"Förväxla inte med bei (vistelse hos) eller nach (till städer utan artikel).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sv ieraksts zum\|idx:672 (zum), ceļš 'lv; study.explanation; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.explanation, study.tip, study.important, kuru saturs sākas ar '{"lv":"-sse • Juurde","study.explanation":"[\"Zum on eessõna zu ja artikli dem lühend.\",\"Täisvorm: zu …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zum",
  "lv": "-sse • Juurde",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "-sse • Juurde",
    "explanation": [
      "Zum on eessõna zu ja artikli dem lühend.",
      "Täisvorm: zu dem (Dativ).",
      "Kasutatakse mees- ja kesksoost nimisõnadega, kui näidatakse suunda või eesmärki.",
      "Tähendab sageli millegi juurde või kellegi juurde — arsti juurde, jaama, sõbra juurde.",
      "Praktikas kasutatakse peaaegu alati zum, mitte täisvormi zu dem."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Ma lähen arsti juurde."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "Me sõidame jaama."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "Ta läheb poodi."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Tule sööma!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "Ta sõidab lennujaama."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Me läheme kontserdile."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "Kingitus on sünnipäevaks."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Ma lähen juuksuri juurde."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "-sse / juurde (Dativ)",
        "example": "zum Arzt – Arsti juures"
      },
      {
        "word": "zur",
        "meaning": "-sse / juurde (naissugu)",
        "example": "zur Schule – Kooli"
      },
      {
        "word": "zu",
        "meaning": "-sse / juurde / liiga",
        "example": "zu Hause – Kodus"
      },
      {
        "word": "nach",
        "meaning": "-sse (linnad/riigid)",
        "example": "nach Berlin – Berliini"
      },
      {
        "word": "bei",
        "meaning": "Juures (asukoht)",
        "example": "beim Arzt – Arsti juures"
      }
    ],
    "tip": [
      "Kom ihåg: zu + dem → zum (vem?).",
      "För feminint substantiv: zu + der → zur."
    ],
    "important": [
      "zum = zu dem, endast med maskulint eller neutrum substantiv i dativ (vem?).",
      "Anger riktning eller syfte: till läkaren, till stationen, till en vän.",
      "För femininum använd zur: zur Bank, zur Post.",
      "Förväxla inte med bei (vistelse hos) eller nach (till städer utan artikel)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "zum",
          "zu dem"
        ],
        "purple": [
          "peaaegu",
          "juurde"
        ],
        "green": [
          "zum",
          "eesmärki"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {
            "purple": [
              "arsti juurde"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {
            "purple": [
              "jaama"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "zum"
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
              "zum"
            ]
          },
          "lv": {
            "purple": [
              "sööma"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {
            "purple": [
              "lennujaama"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {
            "purple": [
              "kontserdile"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {
            "purple": [
              "sünnipäevaks"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "zum"
            ]
          },
          "lv": {
            "purple": [
              "juuksuri juurde"
            ]
          }
        }
      ],
      "comparison": [
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
          "meaning": {
            "purple": [
              "sse",
              "juurde"
            ]
          },
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
          "meaning": {
            "purple": [
              "sse",
              "juurde",
              "liiga"
            ]
          },
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
          "meaning": {
            "purple": [
              "sse"
            ]
          },
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
          "meaning": {
            "purple": [
              "juures"
            ]
          },
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
          ],
          "purple": [
            "zu + dem"
          ]
        },
        {
          "yellow": [
            "zur",
            "zu + der"
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
          ],
          "green": [
            "zum"
          ]
        },
        {
          "purple": [
            "Norāda",
            "Norāda"
          ],
          "green": [
            "Norāda"
          ]
        },
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

## Finding 38

**Audit ID:** `LRB100-0038`
**Finding Stable ID:** `g2/a1/tr|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-TR-0136`
**Lang:** tr
**Card:** `a1-uhr`
**Field / path:** `a1.card.a1-uhr.study.examples[5].native`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** For a1-uhr, the requested path a1.card.a1-uhr.study.examples[5].native is absent from production. The captured payload “(empty)” does not expose that field; German “Uhr” and LV “pulkstenis” identify the intended meaning, but an exact field-level target must be created or selected before a linguistic replacement can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Uhr",
  "de_article": "die",
  "de_plural": "die Uhren",
  "lv": "Saat",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "Saat",
    "explanation": [
      "Ana fikir: Saat veya kol saati. Ayrıca saatteki saat: Es ist acht Uhr.",
      "Die Uhr temel olarak şu anlama gelir: cihaz veya saatteki zaman.",
      "Genellikle şu şekilde karakterize edilir: belirli bir zaman.",
      "Die Uhr saat anlamına gelir; saatin içindeki bir cihaz veya zaman (Es ist acht Uhr, meine Uhr)."
    ],
    "examples": [
      {
        "de": "Es ist acht Uhr.",
        "lv": "Saat sekiz (sekiz)."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Saat sekiz (sekiz)."
      },
      {
        "de": "Meine Uhr ist kaputt.",
        "lv": "Saatim bozuldu."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Saat sekiz."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Saat sekiz (saat)."
      },
      {
        "de": "die Uhr",
        "lv": "Saatteki cihaz/saat • Die Zeit"
      }
    ],
    "tip": [
      "Saat veya kol saati. Ayrıca saatteki saat: Es ist acht Uhr.",
      "Bağlam bu anlama uygun olduğunda die Uhr'u kullanın."
    ],
    "important": [
      "Die Uhr: cihaz (meine Uhr) veya zaman (acht Uhr).",
      "Die Uhr: Kullanmadan önce bağlamı kontrol edin."
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

## Finding 39

**Audit ID:** `LRB100-0039`
**Finding Stable ID:** `g2/a1/tr|ab|idx:17|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0004`
**Lang:** tr
**Card:** `ab|idx:17`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** no
**DE reference (read-only):** ab
**CURRENT (captured scope):** {"lv":"İLE","study.translation":"İLE","study.explanation":"Bir şey belirli bir zamanda, yerde veya noktada başladığında kullanılır. Genellikle \"ile başlamak\" anlamına gelir.","study.examples":"[{\"de\":\"ab heute\",\"lv\":\"Bugünden itibaren\",\"level\":\"A1\"},{\"de\":\"ab Montag\",\"lv\":\"Pazartesiden itibaren\"},{\"de\":\"ab 8 Uhr\",\"lv\":\"8'den itibaren\"},{\"de\":\"ab Bahnhof\",\"lv\":\"İstasyondan\"}]","study.comparison":"[{\"word\":\"ab\",\"meaning\":\"Noktadan/zamandan başlayarak\",\"example\":\"ab Montag – Pazartesiden itibaren\"},{\"word\":\"von\",\"meaning\":\"Birinden/bir şeyden • Köken\",\"example\":\"von mir – Benden\"},{\"word\":\"aus\",\"meaning\":\"Dış iç\",\"example\":\"aus dem Haus – Evden/uzaktan\"}]","study.tip":"{\"text\":\"Unutmayın: zaman/mekan açısından başlangıç ​​noktası → yakl.\"}","study.important":"[\"Ab, zaman veya mekandaki başlangıç ​​noktasını gösterir.\",\"Düşünce içeriden geliyorsa veya akıyorsa von veya aus daha sık kullanılır.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For ab\|idx:17, path lv, study.* captures several nested target-language values. The reviewed payload begins “{"lv":"İLE","study.translation":"İLE","study.explanation":"Bir şey belirli bir zamanda, yerde veya noktada başladığında kullanılır. Genellikle \"ile …”; against German “ab” and LV “no”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ab",
  "lv": "İLE",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "İLE",
    "explanation": "Bir şey belirli bir zamanda, yerde veya noktada başladığında kullanılır. Genellikle \"ile başlamak\" anlamına gelir.",
    "examples": [
      {
        "de": "ab heute",
        "lv": "Bugünden itibaren",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "Pazartesiden itibaren"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "8'den itibaren"
      },
      {
        "de": "ab Bahnhof",
        "lv": "İstasyondan"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "Noktadan/zamandan başlayarak",
        "example": "ab Montag – Pazartesiden itibaren"
      },
      {
        "word": "von",
        "meaning": "Birinden/bir şeyden • Köken",
        "example": "von mir – Benden"
      },
      {
        "word": "aus",
        "meaning": "Dış iç",
        "example": "aus dem Haus – Evden/uzaktan"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ab"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ab"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ab"
            ]
          },
          "lv": {}
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
            "ab"
          ]
        },
        {
          "yellow": [
            "von"
          ],
          "red": [
            "aus"
          ]
        }
      ]
    },
    "tip": {
      "text": "Unutmayın: zaman/mekan açısından başlangıç ​​noktası → yakl."
    },
    "important": [
      "Ab, zaman veya mekandaki başlangıç ​​noktasını gösterir.",
      "Düşünce içeriden geliyorsa veya akıyorsa von veya aus daha sık kullanılır."
    ]
  }
}
```

---

## Finding 40

**Audit ID:** `LRB100-0040`
**Finding Stable ID:** `g2/a1/tr|aber|idx:21|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0005`
**Lang:** tr
**Card:** `aber|idx:21`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** bet
**DE reference (read-only):** aber
**CURRENT (captured scope):** {"lv":"Ancak","study.translation":"Ancak","study.explanation":"Kontrast oluşturmak veya itiraz etmek için kullanılır. Genellikle \"ama \",\" ancak \"veya\" ama \"anlamına gelir.","study.examples":"[{\"de\":\"Ich möchte mitkommen, aber ich habe keine Zeit.\",\"lv\":\"Gelmek istiyorum ama zamanım yok.\"},{\"de\":\"Das Essen war lecker, aber zu teuer.\",\"lv\":\"Yemekler lezzetliydi ama çok pahalıydı.\"},{\"de\":\"Er hat recht, aber ich sehe das anders.\",\"lv\":\"Haklı ama zannetmiyorum.\"}]","study.comparison":"[{\"word\":\"aber\",\"meaning\":\"Karşı Çıkıldı • İtiraz Edildi • Ancak\",\"example\":\"Ich komme, aber später. – Geleceğim ama sonra.\"},{\"word\":\"sondern\",\"meaning\":\"Hayır • Ama\",\"example\":\"Ich wollte keinen Tee, sondern Kaffee. – Kahve değil çay istedim.\"},{\"word\":\"jedoch\",\"meaning\":\"Fakat\",\"example\":\"Es ist kalt, jedoch sonnig. – Hava soğuk ama güneşli.\"}]","study.tip":"{\"text\":\"Özellikler: ön istatistikler/iebilde → aber.\"}","study.important":"[\"Aber tersini ya da tersini gösterir.\",\"Tersi \\\"değil... ama...\\\" olduğunda, Almanca'da genellikle sondern kelimesi kullanılır.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For aber\|idx:21, path lv, study.* captures several nested target-language values. The reviewed payload begins “{"lv":"Ancak","study.translation":"Ancak","study.explanation":"Kontrast oluşturmak veya itiraz etmek için kullanılır. Genellikle \"ama \",\" ancak \"…”; against German “aber” and LV “bet”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aber",
  "lv": "Ancak",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "Ancak",
    "explanation": "Kontrast oluşturmak veya itiraz etmek için kullanılır. Genellikle \"ama \",\" ancak \"veya\" ama \"anlamına gelir.",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Gelmek istiyorum ama zamanım yok."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Yemekler lezzetliydi ama çok pahalıydı."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Haklı ama zannetmiyorum."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "Karşı Çıkıldı • İtiraz Edildi • Ancak",
        "example": "Ich komme, aber später. – Geleceğim ama sonra."
      },
      {
        "word": "sondern",
        "meaning": "Hayır • Ama",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Kahve değil çay istedim."
      },
      {
        "word": "jedoch",
        "meaning": "Fakat",
        "example": "Es ist kalt, jedoch sonnig. – Hava soğuk ama güneşli."
      }
    ],
    "tip": {
      "text": "Özellikler: ön istatistikler/iebilde → aber."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "aber"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "aber"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "aber"
            ]
          },
          "lv": {}
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
            ]
          }
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {
          "green": [
            "aber"
          ]
        },
        {
          "yellow": [
            "sondern"
          ]
        }
      ]
    },
    "important": [
      "Aber tersini ya da tersini gösterir.",
      "Tersi \"değil... ama...\" olduğunda, Almanca'da genellikle sondern kelimesi kullanılır."
    ]
  }
}
```

---

## Finding 41

**Audit ID:** `LRB100-0041`
**Finding Stable ID:** `g2/a1/tr|also|idx:26|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0001`
**Lang:** tr
**Card:** `also|idx:26`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** tātad
**DE reference (read-only):** also
**CURRENT (captured scope):** {"lv":"Ile bağlantılı olarak","study.translation":"Ile bağlantılı olarak","study.explanation":"Sonuç çıkarmak veya sonucu göstermek için kullanılır. “İşte bu yüzden ”,“ işte bu yüzden ”anlamına gelir.","study.examples":"[{\"de\":\"Es regnet, also bleibe ich zu Hause.\",\"lv\":\"Yağmur yağıyor, bu yüzden evde kalıyorum.\"},{\"de\":\"Du bist krank, also gehst du nicht zur Arbeit.\",\"lv\":\"Hastasın, o yüzden işe gitme.\"},{\"de\":\"Ich habe viel gelernt, also verstehe ich es jetzt.\",\"lv\":\"Çok çalıştım, şimdi anladım.\"}]","study.comparison":"[{\"word\":\"also\",\"meaning\":\"Yani • İşte bu yüzden\",\"example\":\"Es regnet, also bleibe ich zu Hause. – Yağmur yağıyor, bu yüzden evde kalıyorum.\"},{\"word\":\"auch\",\"meaning\":\"De\",\"example\":\"Ich komme auch. – Ben de geleceğim.\"},{\"word\":\"deshalb\",\"meaning\":\"Ile bağlantılı olarak\",\"example\":\"Es regnet, deshalb bleibe ich zu Hause. – Yağmur yağıyor, bu yüzden evde kalıyorum.\"}]","study.important":"[\"Ayrıca şu sonucu da gösterir: Bir sonraki düşünce yukarıda söylenenlerden kaynaklanmaktadır.\",\"Letonca \\\"evet\\\" çoğu zaman bir deshalbe de olabilir.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For also\|idx:26, path lv, study.translation, study.explanation, study.examples, study.comparison, study.important captures several nested target-language values. The reviewed payload begins “{"lv":"Ile bağlantılı olarak","study.translation":"Ile bağlantılı olarak","study.explanation":"Sonuç çıkarmak veya sonucu göstermek için kullanılır. …”; against German “also” and LV “tātad”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "also",
  "lv": "Ile bağlantılı olarak",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "Ile bağlantılı olarak",
    "explanation": "Sonuç çıkarmak veya sonucu göstermek için kullanılır. “İşte bu yüzden ”,“ işte bu yüzden ”anlamına gelir.",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Yağmur yağıyor, bu yüzden evde kalıyorum."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Hastasın, o yüzden işe gitme."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Çok çalıştım, şimdi anladım."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "Yani • İşte bu yüzden",
        "example": "Es regnet, also bleibe ich zu Hause. – Yağmur yağıyor, bu yüzden evde kalıyorum."
      },
      {
        "word": "auch",
        "meaning": "De",
        "example": "Ich komme auch. – Ben de geleceğim."
      },
      {
        "word": "deshalb",
        "meaning": "Ile bağlantılı olarak",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Yağmur yağıyor, bu yüzden evde kalıyorum."
      }
    ],
    "tip": {
      "text": "Unutmayın: Talep → de öyle."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "also"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "also"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "also"
            ]
          },
          "lv": {}
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
            "deshalbe"
          ]
        }
      ]
    },
    "important": [
      "Ayrıca şu sonucu da gösterir: Bir sonraki düşünce yukarıda söylenenlerden kaynaklanmaktadır.",
      "Letonca \"evet\" çoğu zaman bir deshalbe de olabilir."
    ]
  }
}
```

---

## Finding 42

**Audit ID:** `LRB100-0042`
**Finding Stable ID:** `g2/a1/tr|an|idx:12|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0003`
**Lang:** tr
**Card:** `an|idx:12`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** pie
**DE reference (read-only):** an
**CURRENT (captured scope):** {"lv":"From • To • Currently","study.translation":"Açık • Yüzeyde • Kenarda","study.explanation":"Bir şey bir duvarın, pencerenin, kapının, nehrin, deniz kıyısının veya başka bir kenarın/yüzeyin yakınında olduğunda kullanılır.","study.examples":"[{\"de\":\"an der Wand\",\"lv\":\"Duvarda/duvarda\"},{\"de\":\"am Fenster\",\"lv\":\"Pencerenin yanında\"},{\"de\":\"am Meer\",\"lv\":\"Deniz kenarında\"}]","study.comparison":"[{\"word\":\"an\",\"meaning\":\"Yüzeyde veya kenarda\",\"example\":\"an der Wand – Duvarın yanında\"},{\"word\":\"auf\",\"meaning\":\"Yatay bir yüzeyde\",\"example\":\"auf dem Tisch – Masanın üzerinde\"},{\"word\":\"bei\",\"meaning\":\"Bir kişiye veya yere\",\"example\":\"beim Arzt – Doktora\"}]","study.tip":"{\"text\":\"Hizmetler: pie sienas/loga/malas → an.\"}","study.important":"[\"An sadece \\\"at\\\" değildir. Bu genellikle bir yüzeyin, duvarın, pencerenin veya kenarın yanında anlamına gelir.\",\"Auf genellikle yatay bir yüzeyde kullanılır.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For an\|idx:12, path lv, study.* captures several nested target-language values. The reviewed payload begins “{"lv":"From • To • Currently","study.translation":"Açık • Yüzeyde • Kenarda","study.explanation":"Bir şey bir duvarın, pencerenin, kapının, nehrin, d…”; against German “an” and LV “pie”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "an",
  "lv": "From • To • Currently",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "Açık • Yüzeyde • Kenarda",
    "explanation": "Bir şey bir duvarın, pencerenin, kapının, nehrin, deniz kıyısının veya başka bir kenarın/yüzeyin yakınında olduğunda kullanılır.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "Duvarda/duvarda"
      },
      {
        "de": "am Fenster",
        "lv": "Pencerenin yanında"
      },
      {
        "de": "am Meer",
        "lv": "Deniz kenarında"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "Yüzeyde veya kenarda",
        "example": "an der Wand – Duvarın yanında"
      },
      {
        "word": "auf",
        "meaning": "Yatay bir yüzeyde",
        "example": "auf dem Tisch – Masanın üzerinde"
      },
      {
        "word": "bei",
        "meaning": "Bir kişiye veya yere",
        "example": "beim Arzt – Doktora"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "am"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "am"
            ]
          },
          "lv": {}
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
            "an"
          ]
        },
        {
          "yellow": [
            "auf"
          ]
        }
      ]
    },
    "tip": {
      "text": "Hizmetler: pie sienas/loga/malas → an."
    },
    "important": [
      "An sadece \"at\" değildir. Bu genellikle bir yüzeyin, duvarın, pencerenin veya kenarın yanında anlamına gelir.",
      "Auf genellikle yatay bir yüzeyde kullanılır."
    ]
  }
}
```

---

## Finding 43

**Audit ID:** `LRB100-0043`
**Finding Stable ID:** `g2/a1/tr|Appetit|idx:689|lv; study.translation; study.explanation[]; study.examples[].lv; study.tip[]; study.important[]|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0004`
**Lang:** tr
**Card:** `Appetit|idx:689`
**Field / path:** `lv; study.translation; study.explanation[]; study.examples[].lv; study.tip[]; study.important[]`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** apetīte
**DE reference (read-only):** Appetit
**CURRENT (captured scope):** {"lv":"İştah","study.translation":"İştah","study.explanation[]":null,"study.examples[].lv":null,"study.tip[]":null,"study.important[]":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** For Appetit\|idx:689, the requested path lv; study.translation; study.explanation[]; study.examples[].lv; study.tip[]; study.important[] is absent from production. The captured payload “{"lv":"İştah","study.translation":"İştah","study.explanation[]":null,"study.examples[].lv":null,"study.tip[]":null,"study.important[]":null}” does not expose that field; German “Appetit” and LV “apetīte” identify the intended meaning, but an exact field-level target must be created or selected before a linguistic replacement can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Appetit",
  "de_article": "der",
  "lv": "İştah",
  "level": "A1",
  "study": {
    "id": "a1-appetit",
    "layout": "standardStudy",
    "translation": "İştah",
    "explanation": [
      "Ana fikir: yemek yeme isteği hissi. yalnızca tekil – çoğul yok.",
      "Der Appetit kısaca yemek yeme arzusu anlamına gelir.",
      "Çoğunlukla şunu tanımlar: duygu (yalnızca tekil).",
      "Der Appetit sadece tekil bir şeydir • Iştah.",
      "A1 seviyesinde, genellikle birbirleriyle tanışırlar, örneğin: Guten Appetit!"
    ],
    "examples": [
      {
        "de": "Guten Appetit!",
        "lv": "İyi iştah!"
      },
      {
        "de": "Guten Appetit!",
        "lv": "Afiyet olsun!"
      },
      {
        "de": "Ich habe keinen Appetit.",
        "lv": "İştahım yok."
      }
    ],
    "tip": [
      "Der Appetit = iştah",
      "Bağlam bu anlama uygun olduğunda der Appetit'i kullanır."
    ],
    "important": [
      "Der Appetit yalnızca tekildir.",
      "Yanlış: die Appetite → Doğru: der Appetit",
      "Yanlış: Ich bin Appetit. → Doğru: Ich habe Appetit.",
      "Poczucie: der Apetyt."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Appetit",
          "appetit"
        ],
        "purple": [
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "appetit"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "appetit"
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
            "der Appetit"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 44

**Audit ID:** `LRB100-0044`
**Finding Stable ID:** `g2/a1/tr|auch|idx:48|lv, study.translation, study.explanation, study.examples, study.tip, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0002`
**Lang:** tr
**Card:** `auch|idx:48`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** arī
**DE reference (read-only):** auch
**CURRENT (captured scope):** {"lv":"De","study.translation":"De","study.explanation":"[\"Ana fikir: En popüler ve tarafsız \\\"ayrıca\\\".\",\"Auch temelde şu anlama gelir: basit \\\"çok \\\".\",\"Genellikle şu şekilde karakterize edilir: ekleme.\",\"Auch, “aynı zamanda” için en yaygın kelimedir.\"]","study.examples":"[{\"de\":\"Ich komme auch.\",\"lv\":\"Ben de geleceğim.\"},{\"de\":\"Sie arbeitet auch hier.\",\"lv\":\"Ben de geleceğim\"},{\"de\":\"Ich wünsche Ihnen auch einen schönen Tag.\",\"lv\":\"O da burada çalışıyor.\"}]","study.tip":"[\"Auch = also\",\"Bağlam bu anlama uyduğu zaman ouch kullanılır.\"]","study.important":"[\"Ich auch wünsche Ihnen doğru kelime sırası değildir.\",\"Ahh = aynı zamanda.\",\"Yanlış: Ich auch wünsche Ihnen einen schönen Tag.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For auch\|idx:48, path lv, study.translation, study.explanation, study.examples, study.tip, study.important captures several nested target-language values. The reviewed payload begins “{"lv":"De","study.translation":"De","study.explanation":"[\"Ana fikir: En popüler ve tarafsız \\\"ayrıca\\\".\",\"Auch temelde şu anlama gelir: basit…”; against German “auch” and LV “arī”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "auch",
  "lv": "De",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "De",
    "explanation": [
      "Ana fikir: En popüler ve tarafsız \"ayrıca\".",
      "Auch temelde şu anlama gelir: basit \"çok \".",
      "Genellikle şu şekilde karakterize edilir: ekleme.",
      "Auch, “aynı zamanda” için en yaygın kelimedir."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Ben de geleceğim."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "Ben de geleceğim"
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "O da burada çalışıyor."
      }
    ],
    "tip": [
      "Auch = also",
      "Bağlam bu anlama uyduğu zaman ouch kullanılır."
    ],
    "important": [
      "Ich auch wünsche Ihnen doğru kelime sırası değildir.",
      "Ahh = aynı zamanda.",
      "Yanlış: Ich auch wünsche Ihnen einen schönen Tag."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "auch"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "auch"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "auch"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "auch"
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
            "auch"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 45

**Audit ID:** `LRB100-0045`
**Finding Stable ID:** `g2/a1/tr|auf|idx:49|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0003`
**Lang:** tr
**Card:** `auf|idx:49`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** uz
**DE reference (read-only):** auf
**CURRENT (captured scope):** {"lv":"Aşağı","study.translation":"Aşağı","study.explanation":"Bir yere veya bir yüzeyin tepesine yön göstermek için kullanılır.","study.examples":"[{\"de\":\"Ich stelle das Buch auf den Tisch.\",\"lv\":\"Kitabı masaya koydum.\"},{\"de\":\"Wir fahren auf den Berg.\",\"lv\":\"Dağlara gidiyoruz.\"},{\"de\":\"Die Katze springt auf das Sofa.\",\"lv\":\"Kedi kanepeye atlar.\"}]","study.comparison":"[{\"word\":\"auf\",\"meaning\":\"Hedef (yüzey veya yukarı)\",\"example\":\"Ich stelle das Glas auf den Tisch. – Bardağı masanın üzerine koydum.\"},{\"word\":\"an\",\"meaning\":\"Na (dikey yüzey)\",\"example\":\"Ich hänge das Bild an die Wand. – Duvara bir resim asıyorum.\"},{\"word\":\"in\",\"meaning\":\"Içinde\",\"example\":\"Ich lege das Buch in die Tasche. – Kitabı çantama koydum.\"}]","study.important":"[\"Auf sadece \\\"açık\\\" anlamına gelmez. Bu genellikle hareket etmek veya yüzeyde olmak anlamına gelir.\",\"Bir şey dikey bir yüzeye yakınsa, genellikle ihtiyacınız olur • Eğer öyleyseniz, içeri girmeniz gerekir.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For auf\|idx:49, path lv, study.translation, study.explanation, study.examples, study.comparison, study.important captures several nested target-language values. The reviewed payload begins “{"lv":"Aşağı","study.translation":"Aşağı","study.explanation":"Bir yere veya bir yüzeyin tepesine yön göstermek için kullanılır.","study.examples":"[…”; against German “auf” and LV “uz”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "auf",
  "lv": "Aşağı",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "Aşağı",
    "explanation": "Bir yere veya bir yüzeyin tepesine yön göstermek için kullanılır.",
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "Kitabı masaya koydum."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "Dağlara gidiyoruz."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "Kedi kanepeye atlar."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "Hedef (yüzey veya yukarı)",
        "example": "Ich stelle das Glas auf den Tisch. – Bardağı masanın üzerine koydum."
      },
      {
        "word": "an",
        "meaning": "Na (dikey yüzey)",
        "example": "Ich hänge das Bild an die Wand. – Duvara bir resim asıyorum."
      },
      {
        "word": "in",
        "meaning": "Içinde",
        "example": "Ich lege das Buch in die Tasche. – Kitabı çantama koydum."
      }
    ],
    "tip": {
      "text": "Unutmayın: yüzeyde/üstte → auf."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "auf"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "auf"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "auf"
            ]
          },
          "lv": {}
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
        "left": {}
      },
      "important": [
        {
          "blue": [
            "auf"
          ]
        },
        {}
      ]
    },
    "important": [
      "Auf sadece \"açık\" anlamına gelmez. Bu genellikle hareket etmek veya yüzeyde olmak anlamına gelir.",
      "Bir şey dikey bir yüzeye yakınsa, genellikle ihtiyacınız olur • Eğer öyleyseniz, içeri girmeniz gerekir."
    ]
  }
}
```

---

## Finding 46

**Audit ID:** `LRB100-0046`
**Finding Stable ID:** `g2/a1/tr|aufs|idx:60|lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0005`
**Lang:** tr
**Card:** `aufs|idx:60`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** uz
**DE reference (read-only):** aufs
**CURRENT (captured scope):** {"lv":"Nereye • Nereye • Nereye?","study.translation":"Nereye • Nereye • Nereye?","study.explanation":"[\"Aufs, auf edatının ve das maddesinin kısaltmasıdır.\",\"Tam biçim: auf das (nerede?).\",\"Bir eylem belirli bir şeye ya da yüzeye doğru bir yön gösterdiğinde kullanılır • Nereye? sorusunu yanıtlar.\",\"Genellikle hareketle kullanılır: tırmanmak, oturmak, yere bırakmak, bir şeye yaklaşmak.\",\"Konuşma dilinde ve günlük konuşmada, tam auf das yerine neredeyse her zaman auf kullanılır.\"]","study.examples":"[{\"de\":\"Ich gehe aufs Dach.\",\"lv\":\"Çatıya çıkıyorum.\"},{\"de\":\"Sie setzt sich aufs Sofa.\",\"lv\":\"Kanepeye oturuyor.\"},{\"de\":\"Wir fahren aufs Land.\",\"lv\":\"Kırsala gidiyoruz.\"},{\"de\":\"Stell die Tasche aufs Bett.\",\"lv\":\"Çantayı yatağın üzerine koy.\"},{\"de\":\"Er springt aufs Pferd.\",\"lv\":\"Ata biner.\"},{\"de\":\"Leg das Buch aufs Regal.\",\"lv\":\"Kitabı rafa koy.\"},{\"de\":\"Komm schnell aufs Boot!\",\"lv\":\"Çabuk tekneye gelin!\"},{\"de\":\"Wir gehen aufs Fest.\",\"lv\":\"Bir partiye gidiyoruz.\"}]","study.comparison":"[{\"word\":\"aufs\",\"meaning\":\"Özel duruma (akk.)\",\"example\":\"aufs Dach – Çatıda\"},{\"word\":\"auf\",\"meaning\":\"Yüzeye veya yukarıya\",\"example\":\"auf den Tisch – Masanın üzerinde\"},{\"word\":\"an\",\"meaning\":\"Dikey bir yüzeyde\",\"example\":\"an die Wand – Duvarın yanında\"},{\"word\":\"ins\",\"meaning\":\"İçeriye Doğru\",\"example\":\"ins Zimmer – Odada\"},{\"word\":\"zum\",\"meaning\":\"Kime / Kimden (kim?)\",\"example\":\"zum Arzt – Doktora\"}]","study.tip":"[\"Unutmayın: auf + das → aufs (nerede?, nerede?).\",\"Tam auf das halk dilinde neredeyse hiç kullanılmaz - auf kullanılır.\"]","study.important":"[\"Aufs = auf das, sadece herhangi bir cinsiyetten bir isimle, nerede? çekimde.\",\"Cevap ver nereye? — belirli bir yere veya yüzeye hareket etmek.\",\"Yatay bir yüzeyde genellikle auf yerine auf den kullanılır.\",\"(Duvarda) veya (odanın içinde) ile karıştırılmamalıdır.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For aufs\|idx:60, path lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important captures several nested target-language values. The reviewed payload begins “{"lv":"Nereye • Nereye • Nereye?","study.translation":"Nereye • Nereye • Nereye?","study.explanation":"[\"Aufs, auf edatının ve das maddesinin kısalt…”; against German “aufs” and LV “uz”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aufs",
  "lv": "Nereye • Nereye • Nereye?",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "Nereye • Nereye • Nereye?",
    "explanation": [
      "Aufs, auf edatının ve das maddesinin kısaltmasıdır.",
      "Tam biçim: auf das (nerede?).",
      "Bir eylem belirli bir şeye ya da yüzeye doğru bir yön gösterdiğinde kullanılır • Nereye? sorusunu yanıtlar.",
      "Genellikle hareketle kullanılır: tırmanmak, oturmak, yere bırakmak, bir şeye yaklaşmak.",
      "Konuşma dilinde ve günlük konuşmada, tam auf das yerine neredeyse her zaman auf kullanılır."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "Çatıya çıkıyorum."
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "Kanepeye oturuyor."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Kırsala gidiyoruz."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "Çantayı yatağın üzerine koy."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "Ata biner."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "Kitabı rafa koy."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "Çabuk tekneye gelin!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "Bir partiye gidiyoruz."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "Özel duruma (akk.)",
        "example": "aufs Dach – Çatıda"
      },
      {
        "word": "auf",
        "meaning": "Yüzeye veya yukarıya",
        "example": "auf den Tisch – Masanın üzerinde"
      },
      {
        "word": "an",
        "meaning": "Dikey bir yüzeyde",
        "example": "an die Wand – Duvarın yanında"
      },
      {
        "word": "ins",
        "meaning": "İçeriye Doğru",
        "example": "ins Zimmer – Odada"
      },
      {
        "word": "zum",
        "meaning": "Kime / Kimden (kim?)",
        "example": "zum Arzt – Doktora"
      }
    ],
    "tip": [
      "Unutmayın: auf + das → aufs (nerede?, nerede?).",
      "Tam auf das halk dilinde neredeyse hiç kullanılmaz - auf kullanılır."
    ],
    "important": [
      "Aufs = auf das, sadece herhangi bir cinsiyetten bir isimle, nerede? çekimde.",
      "Cevap ver nereye? — belirli bir yere veya yüzeye hareket etmek.",
      "Yatay bir yüzeyde genellikle auf yerine auf den kullanılır.",
      "(Duvarda) veya (odanın içinde) ile karıştırılmamalıdır."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "aufs",
          "auf das"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "aufs"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "aufs"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
            "aufs"
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
          ]
        },
        {},
        {
          "yellow": [
            "auf den"
          ],
          "red": [
            "auf"
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 47

**Audit ID:** `LRB100-0047`
**Finding Stable ID:** `g2/a1/tr|aus|idx:57|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0004`
**Lang:** tr
**Card:** `aus|idx:57`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** no
**DE reference (read-only):** aus
**CURRENT (captured scope):** {"lv":"Z • Açık hava","study.translation":"Z • Açık hava","study.explanation":"Bir şeyin içeriden gelmesi, dışarı çıkması veya bir kökene işaret etmesi durumunda kullanılır.","study.examples":"[{\"de\":\"Ich komme aus Deutschland.\",\"lv\":\"Ben Almanyalıyım.\"},{\"de\":\"Er geht aus dem Haus.\",\"lv\":\"Evden ayrılıyor.\"},{\"de\":\"Ich nehme das Buch aus der Tasche.\",\"lv\":\"Kitabı çantamdan çıkarıyorum.\"}]","study.comparison":"[{\"word\":\"aus\",\"meaning\":\"İçeriden,\",\"example\":\"aus dem Haus – Evden\"},{\"word\":\"von\",\"meaning\":\"Kişiden, yerden, yüzeyden\",\"example\":\"von meinem Freund – Arkadaşımdan\"},{\"word\":\"ab\",\"meaning\":\"Bir noktadan veya zamandan başlayarak\",\"example\":\"ab Montag – Pazartesiden itibaren\"}]","study.important":"[\"Aus genellikle içeriden veya baştan itibaren hareketi gösterir.\",\"Yalnızca zaman veya mekandaki bir başlangıç ​​noktasına atıfta bulunulduğunda ab kelimesi sıklıkla kullanılır.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For aus\|idx:57, path lv, study.translation, study.explanation, study.examples, study.comparison, study.important captures several nested target-language values. The reviewed payload begins “{"lv":"Z • Açık hava","study.translation":"Z • Açık hava","study.explanation":"Bir şeyin içeriden gelmesi, dışarı çıkması veya bir kökene işaret etme…”; against German “aus” and LV “no”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aus",
  "lv": "Z • Açık hava",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "Z • Açık hava",
    "explanation": "Bir şeyin içeriden gelmesi, dışarı çıkması veya bir kökene işaret etmesi durumunda kullanılır.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Ben Almanyalıyım."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Evden ayrılıyor."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Kitabı çantamdan çıkarıyorum."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "İçeriden,",
        "example": "aus dem Haus – Evden"
      },
      {
        "word": "von",
        "meaning": "Kişiden, yerden, yüzeyden",
        "example": "von meinem Freund – Arkadaşımdan"
      },
      {
        "word": "ab",
        "meaning": "Bir noktadan veya zamandan başlayarak",
        "example": "ab Montag – Pazartesiden itibaren"
      }
    ],
    "tip": {
      "text": "Unutmayın: AUS → dışında."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "green": [
              "aus"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "aus"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "aus"
            ]
          },
          "lv": {}
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
            ]
          }
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {
          "green": [
            "aus"
          ]
        },
        {
          "blue": [
            "ab"
          ]
        }
      ]
    },
    "important": [
      "Aus genellikle içeriden veya baştan itibaren hareketi gösterir.",
      "Yalnızca zaman veya mekandaki bir başlangıç ​​noktasına atıfta bulunulduğunda ab kelimesi sıklıkla kullanılır."
    ]
  }
}
```

---

## Finding 48

**Audit ID:** `LRB100-0048`
**Finding Stable ID:** `g2/a1/tr|besuchen|idx:89|study|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0003`
**Lang:** tr
**Card:** `besuchen|idx:89`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** apmeklēt
**DE reference (read-only):** besuchen
**CURRENT (captured scope):** {"study.translation":"ziyaret etmek","study.explanation":"[\"Ana fikir: besuchen bir yeri, bir etkinliği veya bir kişiyi ziyaret ederken kullanılır.\",\"Bir yeri, bir etkinliği veya bir kursu Letonca'da genellikle ziyaret edilir.\",\"Eğer besuchen bir kişiye atıfta bulunuyorsa, Letonca'da sıklıkla misafir etmek daha doğaldır.\",\"Almanca'da besuchen önceden konumlandırılmaksızın ve yükleme hali ile kullanılır.\"]","study.examples":"[{\"de\":\"Ich besuche das Museum.\",\"lv\":\"Müzeyi ziyaret ediyorum.\"},{\"de\":\"Wir besuchen einen Deutschkurs.\",\"lv\":\"Almanca kursuna katılıyoruz.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"Büyüklerimizi ziyaret ediyorum.\"}]","study.comparison":"[{\"word\":\"besuchen\",\"meaning\":\"bir yeri veya etkinliği ziyaret etmek • bir kişiyi misafir etmek\",\"example\":\"Ich besuche meine Großeltern. – Büyüklerimizi ziyaret ediyorum.\"},{\"word\":\"treffen\",\"meaning\":\"karşılaşmak\",\"example\":\"Ich treffe meinen Freund. – Arkadaşımla tanışıyorum.\"},{\"word\":\"zu jemandem gehen\",\"meaning\":\"birinin yerine gitmek\",\"example\":\"Ich gehe zu meinem Freund. – Bir arkadaşımı göreceğim.\"}]","study.tip":"{\"text\":\"Atceries: vietu apmeklē, bet personu latviski bieži apciemo.\"}","study.important":"[\"besuchen ön konumlandırılmaksızın kullanılır: Ich besuche meine Freundin.\",\"Letonca çevirisi nesneye bağlıdır: bir yeri ziyaret etmek, bir kişiyi misafir etmek.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For besuchen\|idx:89, path study captures several nested target-language values. The reviewed payload begins “{"study.translation":"ziyaret etmek","study.explanation":"[\"Ana fikir: besuchen bir yeri, bir etkinliği veya bir kişiyi ziyaret ederken kullanılır.\…”; against German “besuchen” and LV “apmeklēt”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "besuchen",
  "lv": "ziyaret etmek",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "ziyaret etmek",
    "explanation": [
      "Ana fikir: besuchen bir yeri, bir etkinliği veya bir kişiyi ziyaret ederken kullanılır.",
      "Bir yeri, bir etkinliği veya bir kursu Letonca'da genellikle ziyaret edilir.",
      "Eğer besuchen bir kişiye atıfta bulunuyorsa, Letonca'da sıklıkla misafir etmek daha doğaldır.",
      "Almanca'da besuchen önceden konumlandırılmaksızın ve yükleme hali ile kullanılır."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Müzeyi ziyaret ediyorum."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Almanca kursuna katılıyoruz."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Büyüklerimizi ziyaret ediyorum."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "bir yeri veya etkinliği ziyaret etmek • bir kişiyi misafir etmek",
        "example": "Ich besuche meine Großeltern. – Büyüklerimizi ziyaret ediyorum."
      },
      {
        "word": "treffen",
        "meaning": "karşılaşmak",
        "example": "Ich treffe meinen Freund. – Arkadaşımla tanışıyorum."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "birinin yerine gitmek",
        "example": "Ich gehe zu meinem Freund. – Bir arkadaşımı göreceğim."
      }
    ],
    "tip": {
      "text": "Atceries: vietu apmeklē, bet personu latviski bieži apciemo."
    },
    "important": [
      "besuchen ön konumlandırılmaksızın kullanılır: Ich besuche meine Freundin.",
      "Letonca çevirisi nesneye bağlıdır: bir yeri ziyaret etmek, bir kişiyi misafir etmek."
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

## Finding 49

**Audit ID:** `LRB100-0049`
**Finding Stable ID:** `g2/a1/tr|bitte|idx:93|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0001`
**Lang:** tr
**Card:** `bitte|idx:93`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** lūdzu
**DE reference (read-only):** bitte
**CURRENT (captured scope):** {"lv":"Lütfen","study.translation":"Lütfen","study.explanation":"[\"Ana fikir: Küçük harfle yazılmış kibar bir kelime. Eskiden iyiydim, lütfen.\",\"Bitte esas olarak: nezaket anlamına gelir.\",\"Genellikle şunu tanımlar: kibar bir kelime.\"]","study.examples":"[{\"de\":\"Eine Tasse Kaffee, bitte.\",\"lv\":\"Lütfen\"},{\"de\":\"Komm bitte herein.\",\"lv\":\"Lütfen\"},{\"de\":\"Bitte schön!\",\"lv\":\"Bir fincan kahve rica ediyorum lütfen.\"},{\"de\":\"Kann ich bitte fragen?\",\"lv\":\"Sorabilir miyim?\"},{\"de\":\"Ich habe eine Bitte.\",\"lv\":\"Bir isteğim var.\"},{\"de\":\"Die Bitte ist wichtig.\",\"lv\":\"Talep önemlidir.\"}]","study.comparison":"[{\"word\":\"bitte\",\"meaning\":\"Lütfen\",\"example\":\"Komm bitte herein. – Lütfen içeri gel.\"},{\"word\":\"die Bitte\",\"meaning\":\"İstek\",\"example\":\"Ich habe eine Bitte. – Bir ricam var.\"}]","study.tip":"[\"Little bitte = lütfen (Bitte schön!, Kaffee, bitte). büyük harfle die Bitte = istek (eine Bitte, meine Bitte).\",\"Nezaket, küçük harflerle. Eskiden kibardım - lütfen.\"]","study.important":"[\"Bitte küçük harfle yazılır • Bu bir isim değil, kibar bir kelimedir.\",\"Die Bitte büyük harfle yazılmıştır ve die article bir isimdir.\",\"Çoğul: Bitten ölmek (istekler).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For bitte\|idx:93, path lv, study captures several nested target-language values. The reviewed payload begins “{"lv":"Lütfen","study.translation":"Lütfen","study.explanation":"[\"Ana fikir: Küçük harfle yazılmış kibar bir kelime. Eskiden iyiydim, lütfen.\",\"B…”; against German “bitte” and LV “lūdzu”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bitte",
  "lv": "Lütfen",
  "level": "A1",
  "study": {
    "id": "a1-bitte",
    "layout": "standardStudy",
    "translation": "Lütfen",
    "explanation": [
      "Ana fikir: Küçük harfle yazılmış kibar bir kelime. Eskiden iyiydim, lütfen.",
      "Bitte esas olarak: nezaket anlamına gelir.",
      "Genellikle şunu tanımlar: kibar bir kelime."
    ],
    "examples": [
      {
        "de": "Eine Tasse Kaffee, bitte.",
        "lv": "Lütfen"
      },
      {
        "de": "Komm bitte herein.",
        "lv": "Lütfen"
      },
      {
        "de": "Bitte schön!",
        "lv": "Bir fincan kahve rica ediyorum lütfen."
      },
      {
        "de": "Kann ich bitte fragen?",
        "lv": "Sorabilir miyim?"
      },
      {
        "de": "Ich habe eine Bitte.",
        "lv": "Bir isteğim var."
      },
      {
        "de": "Die Bitte ist wichtig.",
        "lv": "Talep önemlidir."
      }
    ],
    "tip": [
      "Little bitte = lütfen (Bitte schön!, Kaffee, bitte). büyük harfle die Bitte = istek (eine Bitte, meine Bitte).",
      "Nezaket, küçük harflerle. Eskiden kibardım - lütfen."
    ],
    "important": [
      "Bitte küçük harfle yazılır • Bu bir isim değil, kibar bir kelimedir.",
      "Die Bitte büyük harfle yazılmıştır ve die article bir isimdir.",
      "Çoğul: Bitten ölmek (istekler)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "bitte"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "bitte"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "bitte"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Bitte"
            ]
          },
          "lv": {}
        }
      ],
      "tip": {},
      "important": [
        {
          "blue": [
            "bitte"
          ]
        }
      ],
      "comparison": [
        {
          "word": {
            "blue": [
              "bitte"
            ]
          }
        },
        {
          "word": {
            "green": [
              "die Bitte"
            ]
          }
        }
      ]
    },
    "comparison": [
      {
        "word": "bitte",
        "meaning": "Lütfen",
        "example": "Komm bitte herein. – Lütfen içeri gel."
      },
      {
        "word": "die Bitte",
        "meaning": "İstek",
        "example": "Ich habe eine Bitte. – Bir ricam var."
      }
    ]
  }
}
```

---

## Finding 50

**Audit ID:** `LRB100-0050`
**Finding Stable ID:** `g2/a1/tr|Bitte|idx:94|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-TR-L0002`
**Lang:** tr
**Card:** `Bitte|idx:94`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/tr-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** lūgums
**DE reference (read-only):** Bitte
**CURRENT (captured scope):** {"lv":"İstek","study.translation":"İstek","study.explanation":"[\"Ana fikir: Artikel die ve büyük harf içeren bir isim. Belirli bir istek veya istek.\",\"Die Bitte esas olarak nezaket anlamına gelir.\",\"Genellikle şunu tanımlar: kibar bir kelime.\",\"Die Bitte temel olarak: istek/istek anlamına gelir.\"]","study.examples":"[{\"de\":\"Ich habe eine Bitte.\",\"lv\":\"Bir isteğim var.\"},{\"de\":\"Er erfüllt meine Bitte.\",\"lv\":\"Lütfen\"},{\"de\":\"Sie hat zwei Bitten.\",\"lv\":\"Bir fincan kahve rica ediyorum lütfen.\"},{\"de\":\"Kann ich bitte fragen?\",\"lv\":\"Sorabilir miyim?\"},{\"de\":\"Ich habe eine Bitte.\",\"lv\":\"Bir isteğim var.\"},{\"de\":\"Die Bitte ist wichtig.\",\"lv\":\"Talep önemlidir.\"}]","study.comparison":"[{\"word\":\"die Bitte\",\"meaning\":\"İstek\",\"example\":\"Ich habe eine Bitte. – Bir ricam var.\"},{\"word\":\"bitte\",\"meaning\":\"Lütfen\",\"example\":\"Komm bitte herein. – Lütfen içeri gel.\"}]","study.tip":"[\"Little bitte = lütfen (Bitte schön!, Kaffee, bitte). büyük harfle die Bitte = istek (eine Bitte, meine Bitte).\",\"Artikel die ve büyük harf içeren bir isim. Belirli bir istek veya istek.\"]","study.important":"[\"Bitte küçük harfle yazılır • Bu bir isim değil, kibar bir kelimedir.\",\"Die Bitte büyük harfle yazılmıştır ve die article bir isimdir.\",\"Çoğul: Bitten ölmek (istekler).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** For Bitte\|idx:94, path lv, study captures several nested target-language values. The reviewed payload begins “{"lv":"İstek","study.translation":"İstek","study.explanation":"[\"Ana fikir: Artikel die ve büyük harf içeren bir isim. Belirli bir istek veya istek.…”; against German “Bitte” and LV “lūgums”, the row does not identify which nested field should receive one exact replacement, so it remains PENDING until field-level values are separated.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Bitte",
  "de_article": "die",
  "de_plural": "die Bitten",
  "lv": "İstek",
  "level": "A1",
  "study": {
    "id": "a1-bitte-study",
    "layout": "standardStudy",
    "translation": "İstek",
    "explanation": [
      "Ana fikir: Artikel die ve büyük harf içeren bir isim. Belirli bir istek veya istek.",
      "Die Bitte esas olarak nezaket anlamına gelir.",
      "Genellikle şunu tanımlar: kibar bir kelime.",
      "Die Bitte temel olarak: istek/istek anlamına gelir."
    ],
    "examples": [
      {
        "de": "Ich habe eine Bitte.",
        "lv": "Bir isteğim var."
      },
      {
        "de": "Er erfüllt meine Bitte.",
        "lv": "Lütfen"
      },
      {
        "de": "Sie hat zwei Bitten.",
        "lv": "Bir fincan kahve rica ediyorum lütfen."
      },
      {
        "de": "Kann ich bitte fragen?",
        "lv": "Sorabilir miyim?"
      },
      {
        "de": "Ich habe eine Bitte.",
        "lv": "Bir isteğim var."
      },
      {
        "de": "Die Bitte ist wichtig.",
        "lv": "Talep önemlidir."
      }
    ],
    "tip": [
      "Little bitte = lütfen (Bitte schön!, Kaffee, bitte). büyük harfle die Bitte = istek (eine Bitte, meine Bitte).",
      "Artikel die ve büyük harf içeren bir isim. Belirli bir istek veya istek."
    ],
    "important": [
      "Bitte küçük harfle yazılır • Bu bir isim değil, kibar bir kelimedir.",
      "Die Bitte büyük harfle yazılmıştır ve die article bir isimdir.",
      "Çoğul: Bitten ölmek (istekler)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "die Bitte",
          "bitte"
        ],
        "yellow": [
          "Bitte"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "Bitte"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Bitte"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Bitten"
            ]
          },
          "lv": {}
        }
      ],
      "tip": {},
      "important": [
        {}
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "die Bitte"
            ]
          }
        },
        {
          "word": {
            "blue": [
              "bitte"
            ]
          }
        }
      ]
    },
    "comparison": [
      {
        "word": "die Bitte",
        "meaning": "İstek",
        "example": "Ich habe eine Bitte. – Bir ricam var."
      },
      {
        "word": "bitte",
        "meaning": "Lütfen",
        "example": "Komm bitte herein. – Lütfen içeri gel."
      }
    ]
  }
}
```

---

