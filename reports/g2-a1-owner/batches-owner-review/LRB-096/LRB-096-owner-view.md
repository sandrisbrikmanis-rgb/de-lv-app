# G2/A1 LRB LRB-096 — OWNER VIEW

**Batch:** LRB-096
**Rows:** 50/50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T06:51:31.143Z
**Source commit:** `cf62f761a62b8994333ecd4092307a7b42cbb25d`
**Branch:** `cursor/lrb-096-owner-review-pc2-3db2`
**Input SHA256:** `baa7fb1c11573bcc822d60f8b2c49da41b04e4125b47da506089d9aeeffe2b4a`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-096-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB096-0001`
**Finding Stable ID:** `g2/a1/sq|kein|idx:308|lv/study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `kein|idx:308`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** neviens • nekāds
**DE reference (read-only):** kein
**CURRENT (captured scope):** {"lv":"Askush • Asgjë","study.translation":"Askush • Asgjë","study.explanation":"[\"Ideja kryesore: KEIN është një klauzolë mohimi që mohon emrin letonez, në varësi të përmbajtjes, askush ose askush.\",\"Kein është i zhdrejtë si ein (kein/keine/keinen...) dhe vjen para një emri.\",\"Në rastin e emrave të numërueshëm (njerëzve), kein shpesh përkthehet si askush (kein Mensch = askush).\",\"Për emrat jo detyrues ose abstrakt, kein shpesh përkthehet si asgjë/asgjë (kein Geld = pa para/pa para).\",\"Kein mohon të gjithë emrin, jo vetëm foljen (krahaso nicht).\"]","study.examples":"[{\"de\":\"Ich habe kein Geld.\",\"lv\":\"Nuk kam para.\"},{\"de\":\"Es gibt keine Milch mehr.\",\"lv\":\"Nuk ka më qumësht.\"},{\"de\":\"Kein Mensch war da.\",\"lv\":\"Por aty s'ishte askush.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Nuk ka kohë të mjaftueshme.\"},{\"de\":\"Das ist kein Problem.\",\"lv\":\"E di. S'ka gje.\"},{\"de\":\"Wir haben keine Kinder.\",\"lv\":\"S'kemi fëmijë.\"}]","study.tip":"[\"Kein mohon një emër (kein + emër), ndërsa nicht mohon një folje ose fjali.\",\"Kein, ein: ndryshon si kein/keine/keinen/keiner.\"]","study.important":"[\"Kein + name = \\\"X po/jo\\\", jo \\\"nicht ein X\\\".\",\"E gabuar: Ich habe nicht ein Geld. → E saktë: Ich habe kein Geld.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts kein\|idx:308 (kein), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Askush • Asgjë","study.translation":"Askush • Asgjë","study.explanation":"[\"Ideja kryesore: KEIN…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "kein",
  "lv": "Askush • Asgjë",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "Askush • Asgjë",
    "explanation": [
      "Ideja kryesore: KEIN është një klauzolë mohimi që mohon emrin letonez, në varësi të përmbajtjes, askush ose askush.",
      "Kein është i zhdrejtë si ein (kein/keine/keinen...) dhe vjen para një emri.",
      "Në rastin e emrave të numërueshëm (njerëzve), kein shpesh përkthehet si askush (kein Mensch = askush).",
      "Për emrat jo detyrues ose abstrakt, kein shpesh përkthehet si asgjë/asgjë (kein Geld = pa para/pa para).",
      "Kein mohon të gjithë emrin, jo vetëm foljen (krahaso nicht)."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "Nuk kam para."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Nuk ka më qumësht."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Por aty s'ishte askush."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Nuk ka kohë të mjaftueshme."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "E di. S'ka gje."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "S'kemi fëmijë."
      }
    ],
    "tip": [
      "Kein mohon një emër (kein + emër), ndërsa nicht mohon një folje ose fjali.",
      "Kein, ein: ndryshon si kein/keine/keinen/keiner."
    ],
    "important": [
      "Kein + name = \"X po/jo\", jo \"nicht ein X\".",
      "E gabuar: Ich habe nicht ein Geld. → E saktë: Ich habe kein Geld."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kein"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "kein"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "keine"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Kein"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "keine"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kein"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "keine"
            ]
          },
          "lv": {}
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

## Finding 2

**Audit ID:** `LRB096-0002`
**Finding Stable ID:** `g2/a1/sq|kennen|idx:310|lv/study|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `kennen|idx:310`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** pazīt
**DE reference (read-only):** kennen
**CURRENT (captured scope):** {"lv":"Dije","study.translation":"Dije","study.explanation":"[\"Ideja kryesore: të njohësh një person, vend ose gjë nga përvoja.\",\"Kennen do të thotë informacion personal para së gjithash.\",\"Ai shpesh përshkruan: njerëz, të ngrënit.\",\"Kennen përdoret kur njeh një person, vend ose gjë nga përvoja jote.\"]","study.examples":"[{\"de\":\"Ich kenne ihn.\",\"lv\":\"Ai ju ka ngrënë ushqimin.\"},{\"de\":\"Kennen Sie diese Frau?\",\"lv\":\"E njeh ate grua?\"},{\"de\":\"Wo habt ihr euch kennengelernt?\",\"lv\":\"Ku e ke takuar?\"},{\"de\":\"Ich kenne ihn.\",\"lv\":\"Shiko !\"},{\"de\":\"kennen\",\"lv\":\"Njihu me Wissen\"}]","study.comparison":"[{\"word\":\"kennen\",\"meaning\":\"Njihu (person, vend, gjë)\",\"example\":\"Ich kenne ihn. – Ai ju ka ngrënë ushqimin.\"},{\"word\":\"wissen\",\"meaning\":\"Njohja (e vërteta, njohuria)\",\"example\":\"Ich weiß seinen Namen. – E di emrin e tij!\"}]","study.tip":"[\"Kennen = të dish\",\"Përdorni Kenen kur konteksti përshtatet me të kuptuarit.\"]","study.important":"[\"Kennen = njohja e një personi/vendi.\",\"Kennen = për të ditur.\",\"Njohja me një person, vend ose gjë përmes përvojave të tyre.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts kennen\|idx:310 (kennen), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Dije","study.translation":"Dije","study.explanation":"[\"Ideja kryesore: të njohësh një person, v…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "kennen",
  "lv": "Dije",
  "level": "A1",
  "id": "a1-kennen",
  "study": {
    "id": "a1-kennen-study",
    "layout": "standardStudy",
    "translation": "Dije",
    "explanation": [
      "Ideja kryesore: të njohësh një person, vend ose gjë nga përvoja.",
      "Kennen do të thotë informacion personal para së gjithash.",
      "Ai shpesh përshkruan: njerëz, të ngrënit.",
      "Kennen përdoret kur njeh një person, vend ose gjë nga përvoja jote."
    ],
    "examples": [
      {
        "de": "Ich kenne ihn.",
        "lv": "Ai ju ka ngrënë ushqimin."
      },
      {
        "de": "Kennen Sie diese Frau?",
        "lv": "E njeh ate grua?"
      },
      {
        "de": "Wo habt ihr euch kennengelernt?",
        "lv": "Ku e ke takuar?"
      },
      {
        "de": "Ich kenne ihn.",
        "lv": "Shiko !"
      },
      {
        "de": "kennen",
        "lv": "Njihu me Wissen"
      }
    ],
    "comparison": [
      {
        "word": "kennen",
        "meaning": "Njihu (person, vend, gjë)",
        "example": "Ich kenne ihn. – Ai ju ka ngrënë ushqimin."
      },
      {
        "word": "wissen",
        "meaning": "Njohja (e vërteta, njohuria)",
        "example": "Ich weiß seinen Namen. – E di emrin e tij!"
      }
    ],
    "tip": [
      "Kennen = të dish",
      "Përdorni Kenen kur konteksti përshtatet me të kuptuarit."
    ],
    "important": [
      "Kennen = njohja e një personi/vendi.",
      "Kennen = për të ditur.",
      "Njohja me një person, vend ose gjë përmes përvojave të tyre."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kennen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "kenne"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kennen",
              "kennen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kennen",
              "kennen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kenne"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kennen",
              "kennen"
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
            "kennen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 3

**Audit ID:** `LRB096-0003`
**Finding Stable ID:** `g2/a1/sq|klein|idx:6|lv, study.translation, study.examples|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `klein|idx:6`
**Field / path:** `lv, study.translation, study.examples`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** mazs
**DE reference (read-only):** klein
**CURRENT (captured scope):** {"lv":"I vogël","study.translation":"I vogël","study.examples":"[{\"de\":\"Das Zimmer ist klein.\",\"lv\":\"Dhoma është e vogël.\"},{\"de\":\"Das Kind ist noch klein.\",\"lv\":\"Dhoma është e vogël.\"},{\"de\":\"Ich habe eine kleine Tasche.\",\"lv\":\"Foshnja është ende e re.\"},{\"de\":\"Ich habe eine kleine Tasche.\",\"lv\":\"Kam një çantë të vogël.\"},{\"de\":\"Das Kind ist klein.\",\"lv\":\"Foshnja është e vogël.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts klein\|idx:6 (klein), ceļš 'lv, study.translation, study.examples': viena rinda aptver apakšlaukus lv, study.translation, study.examples, kuru saturs sākas ar '{"lv":"I vogël","study.translation":"I vogël","study.examples":"[{\"de\":\"Das Zimmer ist klein.\",\"lv\…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "klein",
  "lv": "I vogël",
  "level": "A1",
  "study": {
    "id": "a1-klein-study",
    "layout": "standardStudy",
    "translation": "I vogël",
    "explanation": [
      "Ideja kryesore: Të vogla në madhësi ose fushëveprim.",
      "Klein kryesisht do të thotë: madhësi e vogël.",
      "Shpesh përcakton: madhësinë e diçkaje/personi."
    ],
    "examples": [
      {
        "de": "Das Zimmer ist klein.",
        "lv": "Dhoma është e vogël."
      },
      {
        "de": "Das Kind ist noch klein.",
        "lv": "Dhoma është e vogël."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "Foshnja është ende e re."
      },
      {
        "de": "Ich habe eine kleine Tasche.",
        "lv": "Kam një çantë të vogël."
      },
      {
        "de": "Das Kind ist klein.",
        "lv": "Foshnja është e vogël."
      }
    ],
    "tip": [
      "Klein = i vogël",
      "Përdor ngjitës kur konteksti mbivendoset me kuptimin."
    ],
    "important": [
      "Klein = madhësi e vogël.",
      "Klein = i vogël."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "klein"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "klein"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "klein"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kleine"
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
            "klein"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 4

**Audit ID:** `LRB096-0004`
**Finding Stable ID:** `g2/a1/sq|leise|idx:368|lv/study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `leise|idx:368`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG_LANGUAGE
**LV source (read-only):** kluss
**DE reference (read-only):** leise
**CURRENT (captured scope):** {"lv":"Ndegjoje.","study.translation":"Ndegjoje.","study.explanation":"[\"Ideja kryesore: I qetë ose me volum të ulët.\",\"Leise në thelb do të thotë: vëllim i ulët.\",\"Shpesh përshkruhet si: tingull/tingull/muzikë.\",\"Leise identifikon vëllim të ulët ose vëllim/tingull të ulët.\"]","study.examples":"[{\"de\":\"Bitte sei leise.\",\"lv\":\"-Ju lutem qetesi.\"},{\"de\":\"Bitte sei leise.\",\"lv\":\"Këkobosh.\"},{\"de\":\"Die Musik ist leise.\",\"lv\":\"Muzika është e qetë.\"},{\"de\":\"Sprich bitte leise.\",\"lv\":\"Ju lutemi të ulni zërin tuaj.\"}]","study.tip":"[\"Leise = heshtje\",\"Përdorni leise kur konteksti i përshtatet këtij kuptimi.\"]","study.important":"[\"Leise = një zë i qetë.\",\"Leise = volumi.\",\"I qetë ose me volum të ulët.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts leise\|idx:368 (leise), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Ndegjoje.","study.translation":"Ndegjoje.","study.explanation":"[\"Ideja kryesore: I qetë ose me …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "leise",
  "lv": "Ndegjoje.",
  "level": "A1",
  "study": {
    "id": "a1-leise-study",
    "layout": "standardStudy",
    "translation": "Ndegjoje.",
    "explanation": [
      "Ideja kryesore: I qetë ose me volum të ulët.",
      "Leise në thelb do të thotë: vëllim i ulët.",
      "Shpesh përshkruhet si: tingull/tingull/muzikë.",
      "Leise identifikon vëllim të ulët ose vëllim/tingull të ulët."
    ],
    "examples": [
      {
        "de": "Bitte sei leise.",
        "lv": "-Ju lutem qetesi."
      },
      {
        "de": "Bitte sei leise.",
        "lv": "Këkobosh."
      },
      {
        "de": "Die Musik ist leise.",
        "lv": "Muzika është e qetë."
      },
      {
        "de": "Sprich bitte leise.",
        "lv": "Ju lutemi të ulni zërin tuaj."
      }
    ],
    "tip": [
      "Leise = heshtje",
      "Përdorni leise kur konteksti i përshtatet këtij kuptimi."
    ],
    "important": [
      "Leise = një zë i qetë.",
      "Leise = volumi.",
      "I qetë ose me volum të ulët."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "leise"
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
          "lv": {}
        },
        {
          "de": {
            "green": [
              "leise",
              "leise"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "leise",
              "leise"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "leise",
              "leise"
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
            "leise"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 5

**Audit ID:** `LRB096-0005`
**Finding Stable ID:** `g2/a1/sq|liegen|idx:377|lv/study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `liegen|idx:377`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG_LANGUAGE
**LV source (read-only):** atrasties • gulēt
**DE reference (read-only):** liegen
**CURRENT (captured scope):** {"lv":"Ji • Gjumë","study.translation":"Ji • Gjumë","study.explanation":"[\"Ideja kryesore: Liegen do të thotë të gënjesh ose të gënjesh horizontalisht.\",\"Për një person, gënjeshtra zakonisht do të thotë gjumë.\",\"Në një farë mënyre, Liegen do të thotë se ai është atje diku.\",\"Është ndryshe nga legeni, që do të thotë të lësh diçka mënjanë.\"]","study.examples":"[{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Libri është në tryezë.\"},{\"de\":\"Mein Handy liegt im Auto.\",\"lv\":\"Telefoni im është në makinë.\"},{\"de\":\"Er liegt im Bett.\",\"lv\":\"Duke fjetur në shtrat.\"},{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"E vura librin në tryezë.\"}]","study.comparison":"[{\"word\":\"liegen\",\"meaning\":\"Të jesh /të flesh\",\"example\":\"Libri qëndron këtu.\"},{\"word\":\"legen\",\"meaning\":\"Vendos\",\"example\":\"Unë vë librin këtu.\"},{\"word\":\"stehen\",\"meaning\":\"Qëndrim/Qëndrim\",\"example\":\"Shisha qëndron në tavolinë.\"},{\"word\":\"sein\",\"meaning\":\"Të jesh\",\"example\":\"Unë jam këtu.\"}]","study.tip":"{\"text\":\"Mos harroni: gjëja është tashmë në → vend Liegen • Ju e latë mënjanë → legjendën.\"}","study.important":"[\"Liegen tregon statusin ose vendndodhjen.\",\"Legen tregon veprimin: dikush vendos diçka në tokë.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts liegen\|idx:377 (liegen), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Ji • Gjumë","study.translation":"Ji • Gjumë","study.explanation":"[\"Ideja kryesore: Liegen do të…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "liegen",
  "lv": "Ji • Gjumë",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "Ji • Gjumë",
    "explanation": [
      "Ideja kryesore: Liegen do të thotë të gënjesh ose të gënjesh horizontalisht.",
      "Për një person, gënjeshtra zakonisht do të thotë gjumë.",
      "Në një farë mënyre, Liegen do të thotë se ai është atje diku.",
      "Është ndryshe nga legeni, që do të thotë të lësh diçka mënjanë."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Libri është në tryezë."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Telefoni im është në makinë."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Duke fjetur në shtrat."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "E vura librin në tryezë."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "Të jesh /të flesh",
        "example": "Libri qëndron këtu."
      },
      {
        "word": "legen",
        "meaning": "Vendos",
        "example": "Unë vë librin këtu."
      },
      {
        "word": "stehen",
        "meaning": "Qëndrim/Qëndrim",
        "example": "Shisha qëndron në tavolinë."
      },
      {
        "word": "sein",
        "meaning": "Të jesh",
        "example": "Unë jam këtu."
      }
    ],
    "tip": {
      "text": "Mos harroni: gjëja është tashmë në → vend Liegen • Ju e latë mënjanë → legjendën."
    },
    "important": [
      "Liegen tregon statusin ose vendndodhjen.",
      "Legen tregon veprimin: dikush vendos diçka në tokë."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "liegen",
          "legen"
        ],
        "yellow": [
          "Liegen"
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
          "lv": {}
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
            "yellow": [
              "Telefoni"
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
          "lv": {}
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
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "liegen"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "legen"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {
          "blue": [
            "liegen"
          ]
        },
        {
          "red": [
            "legen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 6

**Audit ID:** `LRB096-0006`
**Finding Stable ID:** `g2/a1/sq|machen|idx:386|lv/study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `machen|idx:386`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG_LANGUAGE
**LV source (read-only):** darīt • taisīt
**DE reference (read-only):** machen
**CURRENT (captured scope):** {"lv":"Bëj • Bëj","study.translation":"Bëj • Bëj","study.explanation":"[\"Ideja kryesore: është një fjalë shumë e njohur që do të thotë të bësh ose të bësh machen.\",\"Kur bëhet fjalë për veprimin në përgjithësi, domethënë si ta bëjmë atë.\",\"Nëse diçka është bërë ose përgatitur, ajo përkthehet si bërje ose gatim.\",\"Në shumë shprehje, machen përkthehet natyrshëm sipas letonishtes, jo fjalë për fjalë.\"]","study.examples":"[{\"de\":\"Was machst du?\",\"lv\":\"Çfarë do të thuash?\"},{\"de\":\"Ich mache Hausaufgaben.\",\"lv\":\"Po bëj detyrat e shtëpisë.\"},{\"de\":\"Wir machen Pizza.\",\"lv\":\"Po bëjmë pica.\"},{\"de\":\"Das macht Spaß.\",\"lv\":\"Ajo është shumë argëtuese.\"}]","study.tip":"{\"text\":\"Atceries: A ishte Machst? = Kush mund të vijë këtu?\"}","study.important":"[\"Machen është një fjalë shumë e gjerë, por në varësi të situatës, letonishtja shpesh duhet të përkthehet në mënyrë të natyrshme.\",\"Das macht Spaß fjalë për fjalë do të thotë \\\"argëtim\\\", jo \\\"argëtim\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts machen\|idx:386 (machen), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Bëj • Bëj","study.translation":"Bëj • Bëj","study.explanation":"[\"Ideja kryesore: është një fjal…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "machen",
  "lv": "Bëj • Bëj",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "Bëj • Bëj",
    "explanation": [
      "Ideja kryesore: është një fjalë shumë e njohur që do të thotë të bësh ose të bësh machen.",
      "Kur bëhet fjalë për veprimin në përgjithësi, domethënë si ta bëjmë atë.",
      "Nëse diçka është bërë ose përgatitur, ajo përkthehet si bërje ose gatim.",
      "Në shumë shprehje, machen përkthehet natyrshëm sipas letonishtes, jo fjalë për fjalë."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "Çfarë do të thuash?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Po bëj detyrat e shtëpisë."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Po bëjmë pica."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "Ajo është shumë argëtuese."
      }
    ],
    "tip": {
      "text": "Atceries: A ishte Machst? = Kush mund të vijë këtu?"
    },
    "important": [
      "Machen është një fjalë shumë e gjerë, por në varësi të situatës, letonishtja shpesh duhet të përkthehet në mënyrë të natyrshme.",
      "Das macht Spaß fjalë për fjalë do të thotë \"argëtim\", jo \"argëtim\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "machen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "machst"
            ]
          },
          "lv": {}
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
          "lv": {}
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "macht Spaß"
            ]
          },
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
      "tip": {
        "left": {}
      },
      "important": [
        {
          "blue": [
            "machen"
          ]
        },
        {
          "blue": [
            "Das macht Spaß"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 7

**Audit ID:** `LRB096-0007`
**Finding Stable ID:** `g2/a1/sq|Mal|idx:390|lv/study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `Mal|idx:390`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG_LANGUAGE
**LV source (read-only):** reize
**DE reference (read-only):** Mal
**CURRENT (captured scope):** {"lv":"Koha.","study.translation":"Koha.","study.explanation":"[\"Ideja kryesore: das Mal do të thotë një herë si ngjarje ose mundësi.\",\"Përdoret kryesisht në kombinim me numrat: ein Mal, zwei Mal, drei Mal.\",\"Me numrin e sekuencës: das erste mal, das zweite mal.\",\"Mos flisni me mallin (Komm commodity her!) në gjuhë bisedore • Kjo ka një kuptim tjetër.\"]","study.examples":"[{\"de\":\"Das erste Mal war schwer.\",\"lv\":\"Hera e parë ishte e vështirë.\"},{\"de\":\"Ich war schon zwei Mal in Berlin.\",\"lv\":\"Unë kam qenë tashmë në Berlin dy herë.\"},{\"de\":\"Ein Mal reicht.\",\"lv\":\"Një herë është e mjaftueshme.\"},{\"de\":\"Noch ein Mal, bitte!\",\"lv\":\"Edhe njëherë, të lutem.\"}]","study.tip":"{\"text\":\"Mos harroni: das Mal = koha (emri) • Mal pa artikuj = grimca në kolokualizëm.\"}","study.important":"[\"Emri që përmban das Mal / die Male-artikel.\",\"Ein Mal, zwei Mal – numëro kohët.\",\"Mallrat pa artikuj (mallrat e saj Komm!) nuk janë të njëjta me mallrat das.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Mal\|idx:390 (Mal), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Koha.","study.translation":"Koha.","study.explanation":"[\"Ideja kryesore: das Mal do të thotë nj…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "Koha.",
  "level": "A1",
  "study": {
    "id": "a1-mal",
    "layout": "standardStudy",
    "translation": "Koha.",
    "explanation": [
      "Ideja kryesore: das Mal do të thotë një herë si ngjarje ose mundësi.",
      "Përdoret kryesisht në kombinim me numrat: ein Mal, zwei Mal, drei Mal.",
      "Me numrin e sekuencës: das erste mal, das zweite mal.",
      "Mos flisni me mallin (Komm commodity her!) në gjuhë bisedore • Kjo ka një kuptim tjetër."
    ],
    "examples": [
      {
        "de": "Das erste Mal war schwer.",
        "lv": "Hera e parë ishte e vështirë."
      },
      {
        "de": "Ich war schon zwei Mal in Berlin.",
        "lv": "Unë kam qenë tashmë në Berlin dy herë."
      },
      {
        "de": "Ein Mal reicht.",
        "lv": "Një herë është e mjaftueshme."
      },
      {
        "de": "Noch ein Mal, bitte!",
        "lv": "Edhe njëherë, të lutem."
      }
    ],
    "tip": {
      "text": "Mos harroni: das Mal = koha (emri) • Mal pa artikuj = grimca në kolokualizëm."
    },
    "important": [
      "Emri që përmban das Mal / die Male-artikel.",
      "Ein Mal, zwei Mal – numëro kohët.",
      "Mallrat pa artikuj (mallrat e saj Komm!) nuk janë të njëjta me mallrat das."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Mal",
          "ein Mal",
          "zwei Mal",
          "das erste Mal"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "erste Mal"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zwei Mal"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Ein Mal"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ein Mal"
            ]
          },
          "lv": {}
        }
      ],
      "tip": {},
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
          ]
        },
        {
          "blue": [
            "mal"
          ],
          "purple": [
            "Mallrat"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 8

**Audit ID:** `LRB096-0008`
**Finding Stable ID:** `g2/a1/sq|müssen|idx:423|lv/study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `müssen|idx:423`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** vajadzēt
**DE reference (read-only):** müssen
**CURRENT (captured scope):** {"lv":"Kërko","study.translation":"Kërko","study.explanation":"[\"Ideja kryesore: nëse je i shkujdesur, do të thotë të bësh diçka.\",\"Në letonisht, shpesh përkthehet si \\\"Unë bëj...\\\", \\\"ti bën...\\\", \\\"ne bëjmë...\\\".\",\"Në një fjali gjermane, folja e dytë zakonisht vjen në fund.\",\"Forma më e rëndësishme në nivelin A1 është ich muss...\"]","study.examples":"[{\"de\":\"Ich muss gehen.\",\"lv\":\"Dua të shkoj në banjo...\"},{\"de\":\"Du musst warten.\",\"lv\":\"Sot nuk dua. Ky është\"},{\"de\":\"Wir müssen lernen.\",\"lv\":\"Duhet ta zbulojmë.\"},{\"de\":\"Ich muss heute arbeiten.\",\"lv\":\"Më duhet të punoj sot\"}]","study.comparison":"[{\"word\":\"müssen\",\"meaning\":\"I/I need to do\",\"example\":\"Unë duhet të shkoj.\"},{\"word\":\"können\",\"meaning\":\"Dije\",\"example\":\"Unë mund të vij.\"},{\"word\":\"wollen\",\"meaning\":\"Dua\",\"example\":\"Unë dua të shkoj në shtëpi.\"},{\"word\":\"dürfen\",\"meaning\":\"E lejueshme\",\"example\":\"A mund të shkoj?\"}]","study.tip":"{\"text\":\"Mos harroni: Ich muss... = Duhet të...\"}","study.important":"[\"Müssen është folje modale.\",\"Folja e dytë zakonisht është në fund të fjalisë: Ich muss heute arbeiten.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts müssen\|idx:423 (müssen), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Kërko","study.translation":"Kërko","study.explanation":"[\"Ideja kryesore: nëse je i shkujdesur, …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "müssen",
  "lv": "Kërko",
  "level": "A1",
  "study": {
    "id": "a1-müssen",
    "layout": "standardStudy",
    "translation": "Kërko",
    "explanation": [
      "Ideja kryesore: nëse je i shkujdesur, do të thotë të bësh diçka.",
      "Në letonisht, shpesh përkthehet si \"Unë bëj...\", \"ti bën...\", \"ne bëjmë...\".",
      "Në një fjali gjermane, folja e dytë zakonisht vjen në fund.",
      "Forma më e rëndësishme në nivelin A1 është ich muss..."
    ],
    "examples": [
      {
        "de": "Ich muss gehen.",
        "lv": "Dua të shkoj në banjo..."
      },
      {
        "de": "Du musst warten.",
        "lv": "Sot nuk dua. Ky është"
      },
      {
        "de": "Wir müssen lernen.",
        "lv": "Duhet ta zbulojmë."
      },
      {
        "de": "Ich muss heute arbeiten.",
        "lv": "Më duhet të punoj sot"
      }
    ],
    "comparison": [
      {
        "word": "müssen",
        "meaning": "I/I need to do",
        "example": "Unë duhet të shkoj."
      },
      {
        "word": "können",
        "meaning": "Dije",
        "example": "Unë mund të vij."
      },
      {
        "word": "wollen",
        "meaning": "Dua",
        "example": "Unë dua të shkoj në shtëpi."
      },
      {
        "word": "dürfen",
        "meaning": "E lejueshme",
        "example": "A mund të shkoj?"
      }
    ],
    "tip": {
      "text": "Mos harroni: Ich muss... = Duhet të..."
    },
    "important": [
      "Müssen është folje modale.",
      "Folja e dytë zakonisht është në fund të fjalisë: Ich muss heute arbeiten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Ideja",
          "Ich muss"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "musst",
              "warten"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "müssen",
              "lernen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "muss",
              "arbeiten"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "müssen"
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
              "wollen"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "dürfen"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "Darf"
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
            "müssen"
          ],
          "purple": [
            "modal"
          ]
        },
        {
          "blue": [
            "muss",
            "arbeiten"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 9

**Audit ID:** `LRB096-0009`
**Finding Stable ID:** `g2/a1/sq|nach|idx:426|lv/study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `nach|idx:426`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** uz • pēc
**DE reference (read-only):** nach
**CURRENT (captured scope):** {"lv":"Deri: • Pas","study.translation":"Deri: • Pas","study.explanation":"[\"Ideja kryesore: nach do të thotë me vende dhe pas kohës ose sekuencës.\",\"Për qytetet dhe shtetet ku artikulli nuk është i disponueshëm, kjo zakonisht do të thotë:\",\"Me kalimin e kohës do të thotë nach po.\",\"Nach Hause do të thotë shtëpi në idiomën e saj.\"]","study.examples":"[{\"de\":\"Ich fahre nach Berlin.\",\"lv\":\"Po shkoj në Berlin.\"},{\"de\":\"Wir gehen nach Hause.\",\"lv\":\"Do të vish në shtëpi me mua?\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"Pasi hamë, dalim për një shëtitje.\"},{\"de\":\"Es ist zehn nach acht.\",\"lv\":\"Është ora dhjetë e tetë.\"}]","study.comparison":"[{\"word\":\"nach\",\"meaning\":\"Deri/Pas\",\"example\":\"Unë vozis në Berlin.\"},{\"word\":\"zu\",\"meaning\":\"Për / në\",\"example\":\"Unë shkoj tek doktori.\"},{\"word\":\"in\",\"meaning\":\"Vendndodhja/ vendndodhja e artikullit\",\"example\":\"Unë shkoj në shkollë.\"},{\"word\":\"vor\",\"meaning\":\"Para/Para\",\"example\":\"Para ngrënies laj duart.\"}]","study.tip":"{\"text\":\"Mos harroni: nach Hause • Në Berlin • Pas darkës.\"}","study.important":"[\"Nach nuk përdoret kudo.\",\"Njerëzit zakonisht shkojnë në shkollë në Die Schule, jo në Nach Schule.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts nach\|idx:426 (nach), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Deri: • Pas","study.translation":"Deri: • Pas","study.explanation":"[\"Ideja kryesore: nach do të…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nach",
  "lv": "Deri: • Pas",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "Deri: • Pas",
    "explanation": [
      "Ideja kryesore: nach do të thotë me vende dhe pas kohës ose sekuencës.",
      "Për qytetet dhe shtetet ku artikulli nuk është i disponueshëm, kjo zakonisht do të thotë:",
      "Me kalimin e kohës do të thotë nach po.",
      "Nach Hause do të thotë shtëpi në idiomën e saj."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Po shkoj në Berlin."
      },
      {
        "de": "Wir gehen nach Hause.",
        "lv": "Do të vish në shtëpi me mua?"
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Pasi hamë, dalim për një shëtitje."
      },
      {
        "de": "Es ist zehn nach acht.",
        "lv": "Është ora dhjetë e tetë."
      }
    ],
    "comparison": [
      {
        "word": "nach",
        "meaning": "Deri/Pas",
        "example": "Unë vozis në Berlin."
      },
      {
        "word": "zu",
        "meaning": "Për / në",
        "example": "Unë shkoj tek doktori."
      },
      {
        "word": "in",
        "meaning": "Vendndodhja/ vendndodhja e artikullit",
        "example": "Unë shkoj në shkollë."
      },
      {
        "word": "vor",
        "meaning": "Para/Para",
        "example": "Para ngrënies laj duart."
      }
    ],
    "tip": {
      "text": "Mos harroni: nach Hause • Në Berlin • Pas darkës."
    },
    "important": [
      "Nach nuk përdoret kudo.",
      "Njerëzit zakonisht shkojnë në shkollë në Die Schule, jo në Nach Schule."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "nach",
          "nach Hause"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "nach Hause"
            ]
          },
          "lv": {}
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "nach"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "nach"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
          "example": {
            "red": [
              "Vor"
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
            "nach"
          ]
        },
        {
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

## Finding 10

**Audit ID:** `LRB096-0010`
**Finding Stable ID:** `g2/a1/sq|natürlich|idx:433|lv/study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `natürlich|idx:433`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** protams • dabisks
**DE reference (read-only):** natürlich
**CURRENT (captured scope):** {"lv":"Sigurisht • Natyrale","study.translation":"Sigurisht • Natyrale","study.explanation":"[\"Ideja kryesore: naturlich si ndajfolje, natyrisht, do të thotë e natyrshme si mbiemër.\",\"Në bisedë, kur pohon diçka, naturlich = sigurisht (Kommst du mit? – Natürlich! = A do të vish? – Sigurisht!).\",\"Naturlich = natyror (naturliche Schönheit = bukuri natyrore) kur flitet për natyrën, origjinën ose veçoritë.\",\"Konteksti (përgjigjja/konfirmimi ose shpjegimi) tregon kuptimin e saktë.\"]","study.examples":"[{\"de\":\"Kommst du mit? – Natürlich!\",\"lv\":\"Do të vish me mua?\"},{\"de\":\"Das ist eine natürliche Reaktion.\",\"lv\":\"Është një reagim i natyrshëm.\"},{\"de\":\"Natürlich helfe ich dir.\",\"lv\":\"Sigurisht që do të të ndihmoj.\"},{\"de\":\"Sie hat natürliche rote Haare.\",\"lv\":\"Ajo ka flokë të kuq natyralë.\"},{\"de\":\"Natürlich kann ich das machen.\",\"lv\":\"Sigurisht që mundem.\"},{\"de\":\"Das ist ganz natürlich.\",\"lv\":\"Kjo është plotësisht e natyrshme/normale.\"}]","study.tip":"[\"Si një fjalë e veçantë, që miraton ose korrespondon, → natyrisht.\",\"→ Natyrale pranë një emri që identifikon një origjinë ose atribut.\"]","study.important":"[\"Natürlich = sigurisht (zarf, konfirmim) OSE natyral (mbiemër).\",\"Natyrisht! gjithmonë si një pikëçuditje e veçantë = sigurisht!\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts natürlich\|idx:433 (natürlich), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Sigurisht • Natyrale","study.translation":"Sigurisht • Natyrale","study.explanation":"[\"Ideja kr…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "natürlich",
  "lv": "Sigurisht • Natyrale",
  "level": "A1",
  "study": {
    "id": "a1-natuerlich",
    "layout": "standardStudy",
    "translation": "Sigurisht • Natyrale",
    "explanation": [
      "Ideja kryesore: naturlich si ndajfolje, natyrisht, do të thotë e natyrshme si mbiemër.",
      "Në bisedë, kur pohon diçka, naturlich = sigurisht (Kommst du mit? – Natürlich! = A do të vish? – Sigurisht!).",
      "Naturlich = natyror (naturliche Schönheit = bukuri natyrore) kur flitet për natyrën, origjinën ose veçoritë.",
      "Konteksti (përgjigjja/konfirmimi ose shpjegimi) tregon kuptimin e saktë."
    ],
    "examples": [
      {
        "de": "Kommst du mit? – Natürlich!",
        "lv": "Do të vish me mua?"
      },
      {
        "de": "Das ist eine natürliche Reaktion.",
        "lv": "Është një reagim i natyrshëm."
      },
      {
        "de": "Natürlich helfe ich dir.",
        "lv": "Sigurisht që do të të ndihmoj."
      },
      {
        "de": "Sie hat natürliche rote Haare.",
        "lv": "Ajo ka flokë të kuq natyralë."
      },
      {
        "de": "Natürlich kann ich das machen.",
        "lv": "Sigurisht që mundem."
      },
      {
        "de": "Das ist ganz natürlich.",
        "lv": "Kjo është plotësisht e natyrshme/normale."
      }
    ],
    "tip": [
      "Si një fjalë e veçantë, që miraton ose korrespondon, → natyrisht.",
      "→ Natyrale pranë një emri që identifikon një origjinë ose atribut."
    ],
    "important": [
      "Natürlich = sigurisht (zarf, konfirmim) OSE natyral (mbiemër).",
      "Natyrisht! gjithmonë si një pikëçuditje e veçantë = sigurisht!"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "natürlich"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Natürlich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "natürliche"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Natürlich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "natürliche"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Natürlich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "natürlich"
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
        {}
      ]
    }
  }
}
```

---

## Finding 11

**Audit ID:** `LRB096-0011`
**Finding Stable ID:** `g2/a1/sq|nehmen|idx:435|lv/study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `nehmen|idx:435`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** ņemt • paņemt
**DE reference (read-only):** nehmen
**CURRENT (captured scope):** {"lv":"Merre atë.","study.translation":"Merre atë.","study.explanation":"[\"Ideja kryesore: do të thotë të marrësh ose të marrësh nehmen.\",\"Nehmen përdoret kur blini ose zgjidhni diçka për veten tuaj.\",\"Kjo nuk është e njëjtë me sjelljen, sepse sjellja do të thotë të sjellësh ose të marrësh nga dikush.\",\"Holen do të thotë të shkosh dhe të sjellësh/marrësh.\"]","study.examples":"[{\"de\":\"Ich nehme den Bus.\",\"lv\":\"Po marr autobusin\"},{\"de\":\"Nimm das Buch!\",\"lv\":\"Merr një libër.\"},{\"de\":\"Ich bringe dir das Buch.\",\"lv\":\"Të solla një libër\"},{\"de\":\"Ich hole dich ab.\",\"lv\":\"Do ta marr.\"}]","study.comparison":"[{\"word\":\"nehmen\",\"meaning\":\"Merre atë.\",\"example\":\"Merr librin!\"},{\"word\":\"bringen\",\"meaning\":\"Sill /merr/dorëzo\",\"example\":\"Unë të sjell librin.\"},{\"word\":\"holen\",\"meaning\":\"Merre.\",\"example\":\"Unë marr ujë.\"},{\"word\":\"mitnehmen\",\"meaning\":\"Merre me vete\",\"example\":\"Unë të marr me vete.\"}]","study.tip":"{\"text\":\"Mos harro: merre → vetë Nehmen • → Sill dikë.\"}","study.important":"[\"Ich nehme den Bus do të thotë \\\"Unë ngas një autobus\\\" në letonisht.\",\"Nehmeni nuk është i njëjtë me atë që u soll.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts nehmen\|idx:435 (nehmen), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Merre atë.","study.translation":"Merre atë.","study.explanation":"[\"Ideja kryesore: do të thotë …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nehmen",
  "lv": "Merre atë.",
  "level": "A1",
  "study": {
    "id": "a1-nehmen",
    "layout": "standardStudy",
    "translation": "Merre atë.",
    "explanation": [
      "Ideja kryesore: do të thotë të marrësh ose të marrësh nehmen.",
      "Nehmen përdoret kur blini ose zgjidhni diçka për veten tuaj.",
      "Kjo nuk është e njëjtë me sjelljen, sepse sjellja do të thotë të sjellësh ose të marrësh nga dikush.",
      "Holen do të thotë të shkosh dhe të sjellësh/marrësh."
    ],
    "examples": [
      {
        "de": "Ich nehme den Bus.",
        "lv": "Po marr autobusin"
      },
      {
        "de": "Nimm das Buch!",
        "lv": "Merr një libër."
      },
      {
        "de": "Ich bringe dir das Buch.",
        "lv": "Të solla një libër"
      },
      {
        "de": "Ich hole dich ab.",
        "lv": "Do ta marr."
      }
    ],
    "comparison": [
      {
        "word": "nehmen",
        "meaning": "Merre atë.",
        "example": "Merr librin!"
      },
      {
        "word": "bringen",
        "meaning": "Sill /merr/dorëzo",
        "example": "Unë të sjell librin."
      },
      {
        "word": "holen",
        "meaning": "Merre.",
        "example": "Unë marr ujë."
      },
      {
        "word": "mitnehmen",
        "meaning": "Merre me vete",
        "example": "Unë të marr me vete."
      }
    ],
    "tip": {
      "text": "Mos harro: merre → vetë Nehmen • → Sill dikë."
    },
    "important": [
      "Ich nehme den Bus do të thotë \"Unë ngas një autobus\" në letonisht.",
      "Nehmeni nuk është i njëjtë me atë që u soll."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "nehmen"
        ],
        "red": [
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
          "lv": {}
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
          "lv": {}
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
          "lv": {}
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
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "nehmen"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "mitnehmen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "nehme",
              "mit"
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
            "nehme den Bus"
          ]
        },
        {
          "blue": [
            "nehmen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 12

**Audit ID:** `LRB096-0012`
**Finding Stable ID:** `g2/a1/sq|neu|idx:439|lv/study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `neu|idx:439`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** jauns (par lietām)
**DE reference (read-only):** neu
**CURRENT (captured scope):** {"lv":"E re (rreth gjërave)","study.translation":"E re (rreth gjërave)","study.explanation":"[\"Ideja kryesore: neu nënkupton diçka të re • Krijuar, blerë ose përdorur kohët e fundit për të parë.\",\"Neu përcakton gjërat, pajisjet, rrobat, shtëpitë, idetë etj., jo moshën e një personi apo të një kafshe.\",\"Në letonisht, fjala i ri ka dy kuptime: mosha e re (jung) dhe e reja/e krijuar kohët e fundit (neu).\",\"Për moshën e një personi ose kafshe, përdoret xhungë, jo neu.\",\"Neu përdoret gjithashtu në mënyrë metaforike: punë e re, njohuri e re, fillim i ri.\",\"E kundërta do të thotë alt (i vjetër) • Das Neue new.\"]","study.examples":"[{\"de\":\"Mein Handy ist neu.\",\"lv\":\"Telefoni im është i ri.\"},{\"de\":\"Wir haben ein neues Auto.\",\"lv\":\"Kemi një makinë të re.\"},{\"de\":\"Das ist meine neue Wohnung.\",\"lv\":\"Ky është apartamenti im.\"},{\"de\":\"Ich habe neue Schuhe gekauft.\",\"lv\":\"Bleva këpucë të reja.\"},{\"de\":\"Das ist eine neue Idee.\",\"lv\":\"Idenë origjinale.\"},{\"de\":\"Er hat einen neuen Job.\",\"lv\":\"Ai ka një punë të re.\"},{\"de\":\"Was gibt es Neues?\",\"lv\":\"Miki!\"}]","study.tip":"[\"Neu ka të bëjë me gjëra, pajisje dhe inovacione - përdorni jung kur flisni për moshën e një personi.\",\"Kontrasti: neu ↔ alt (i ri ↔ i vjetër).\"]","study.important":"[\"Neu përshkruan ngjarje dhe lajme, ose moshën e një personi ose kafshe.\",\"Përdor xhungën në vend të neut për të përcaktuar moshën e një personi ose kafshe.\",\"E gabuar: Meine Schwester ist neu. → E saktë: Meine Schwester ist jung.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts neu\|idx:439 (neu), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"E re (rreth gjërave)","study.translation":"E re (rreth gjërave)","study.explanation":"[\"Ideja kr…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "neu",
  "lv": "E re (rreth gjërave)",
  "level": "A1",
  "study": {
    "id": "a1-neu",
    "layout": "standardStudy",
    "translation": "E re (rreth gjërave)",
    "explanation": [
      "Ideja kryesore: neu nënkupton diçka të re • Krijuar, blerë ose përdorur kohët e fundit për të parë.",
      "Neu përcakton gjërat, pajisjet, rrobat, shtëpitë, idetë etj., jo moshën e një personi apo të një kafshe.",
      "Në letonisht, fjala i ri ka dy kuptime: mosha e re (jung) dhe e reja/e krijuar kohët e fundit (neu).",
      "Për moshën e një personi ose kafshe, përdoret xhungë, jo neu.",
      "Neu përdoret gjithashtu në mënyrë metaforike: punë e re, njohuri e re, fillim i ri.",
      "E kundërta do të thotë alt (i vjetër) • Das Neue new."
    ],
    "examples": [
      {
        "de": "Mein Handy ist neu.",
        "lv": "Telefoni im është i ri."
      },
      {
        "de": "Wir haben ein neues Auto.",
        "lv": "Kemi një makinë të re."
      },
      {
        "de": "Das ist meine neue Wohnung.",
        "lv": "Ky është apartamenti im."
      },
      {
        "de": "Ich habe neue Schuhe gekauft.",
        "lv": "Bleva këpucë të reja."
      },
      {
        "de": "Das ist eine neue Idee.",
        "lv": "Idenë origjinale."
      },
      {
        "de": "Er hat einen neuen Job.",
        "lv": "Ai ka një punë të re."
      },
      {
        "de": "Was gibt es Neues?",
        "lv": "Miki!"
      }
    ],
    "tip": [
      "Neu ka të bëjë me gjëra, pajisje dhe inovacione - përdorni jung kur flisni për moshën e një personi.",
      "Kontrasti: neu ↔ alt (i ri ↔ i vjetër)."
    ],
    "important": [
      "Neu përshkruan ngjarje dhe lajme, ose moshën e një personi ose kafshe.",
      "Përdor xhungën në vend të neut për të përcaktuar moshën e një personi ose kafshe.",
      "E gabuar: Meine Schwester ist neu. → E saktë: Meine Schwester ist jung."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "neu"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "neues"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "neue"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "neue"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "neue"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "neuen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Neues"
            ]
          },
          "lv": {}
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
            "Përdor"
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

## Finding 13

**Audit ID:** `LRB096-0013`
**Finding Stable ID:** `g2/a1/sq|noch mal|idx:701|lv; study.translation; study.explanation; study.examples; study.tip; study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `noch mal|idx:701`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vēlreiz
**DE reference (read-only):** noch mal
**CURRENT (captured scope):** {"lv":"\"Shtyrje me dy duar.\" Përsëri.","study.translation":"\"Shtyrje me dy duar.\" Përsëri.","study.explanation":"[\"Ana fikir: Tekrar anlamına gelir - bir eylemi tekrarlamak veya tekrarlanmasını istemek.\"]","study.examples":"[{\"de\":\"Noch mal, bitte.\",\"lv\":\"Bir kez daha lütfen.\"},{\"de\":\"Noch mal, bitte.\",\"lv\":\"Bir kez daha lütfen\"},{\"de\":\"Sag das noch mal.\",\"lv\":\"Lusian, përsërite.\"}]","study.tip":"[\"Përdorni noch mal kur konteksti i përshtatet këtij kuptimi.\",\"Përdorni noch mal kur konteksti i përshtatet këtij kuptimi.\"]","study.important":"[\"Yine, bir eylemi tekrarlamak veya tekrarlanmasını istemek anlamına gelir.\",\"Mallrat noch: Kontrolloni kontekstin para përdorimit.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts noch mal\|idx:701 (noch mal), ceļš 'lv; study.translation; study.explanation; study.examples; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"\"Shtyrje me dy duar.\" Përsëri.","study.translation":"\"Shtyrje me dy duar.\" Përsëri.","study.e…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "noch mal",
  "lv": "\"Shtyrje me dy duar.\" Përsëri.",
  "level": "A1",
  "study": {
    "id": "a1-noch-mal",
    "layout": "standardStudy",
    "translation": "\"Shtyrje me dy duar.\" Përsëri.",
    "explanation": [
      "Ana fikir: Tekrar anlamına gelir - bir eylemi tekrarlamak veya tekrarlanmasını istemek."
    ],
    "examples": [
      {
        "de": "Noch mal, bitte.",
        "lv": "Bir kez daha lütfen."
      },
      {
        "de": "Noch mal, bitte.",
        "lv": "Bir kez daha lütfen"
      },
      {
        "de": "Sag das noch mal.",
        "lv": "Lusian, përsërite."
      }
    ],
    "tip": [
      "Përdorni noch mal kur konteksti i përshtatet këtij kuptimi.",
      "Përdorni noch mal kur konteksti i përshtatet këtij kuptimi."
    ],
    "important": [
      "Yine, bir eylemi tekrarlamak veya tekrarlanmasını istemek anlamına gelir.",
      "Mallrat noch: Kontrolloni kontekstin para përdorimit."
    ],
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {
            "yellow": [
              "noch mal",
              "noch mal"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "noch mal",
              "noch mal"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "noch mal",
              "noch mal"
            ]
          },
          "lv": {}
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

## Finding 14

**Audit ID:** `LRB096-0014`
**Finding Stable ID:** `g2/a1/sq|nur|idx:456|study.examples[3].lv|MEANING_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `nur|idx:456`
**Field / path:** `study.examples[3].lv`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MEANING_MISMATCH
**LV source (read-only):** tikai • vienīgi
**DE reference (read-only):** nur
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts nur\|idx:456 (nur), ceļš 'study.examples[3].lv': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir ''; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nur",
  "lv": "Vetëm • Vetëm",
  "level": "A1",
  "study": {
    "id": "a1-nur-study",
    "layout": "standardStudy",
    "translation": "Vetëm • Vetëm",
    "explanation": [
      "Ideja kryesore: kufizon numrin, numrin e njerëzve, përzgjedhjen ose opsionet.",
      "Nur në thelb do të thotë: sasi ose zgjedhje e kufizuar.",
      "Shpjegon shpesh: sa, saktësisht, ose kush është i vetmi.",
      "Nur thjesht, thjesht, nuk do të thotë asgjë tjetër: kufizon sasinë ose zgjedhjen."
    ],
    "examples": [
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Kam vetëm dhjetë euro."
      },
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Kam vetëm dhjetë euro."
      },
      {
        "de": "Nur du kannst mir helfen.",
        "lv": "Vetëm ti mund të më ndihmosh."
      },
      {
        "de": "Ich möchte nur Kaffee.",
        "lv": "Do pi pak kafe."
      },
      {
        "de": "Ich habe nur acht Euro.",
        "lv": "Kam vetëm tetë euro."
      }
    ],
    "tip": [
      "Kufizon sasinë, numrin e njerëzve, përzgjedhjen ose opsionet.",
      "Përdoret vetëm kur konteksti përputhet me këtë kuptim."
    ],
    "important": [
      "Në gjermanisht, \"vetëm\" në letonisht nuk do të thotë gjithmonë nur.",
      "Nur = vetëm/ekskluzivisht."
    ],
    "sectionAccents": {
      "explanation": {
        "orange": [
          "nur"
        ]
      },
      "examples": [
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
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
        {
          "orange": [
            "nur"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 15

**Audit ID:** `LRB096-0015`
**Finding Stable ID:** `g2/a1/sq|Obst|idx:693|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `Obst|idx:693`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** augļi
**DE reference (read-only):** Obst
**CURRENT (captured scope):** {"lv":"-Frutë.","study.translation":"-Frutë.","study.explanation":"[\"Ideja kryesore: Zakonisht për frutat. Nuk ka pengesa shumës *në gjermanisht.\",\"Das Obst esas olarak şu anlama gelir: genel olarak meyve.\",\"Çoğunlukla tanımlanır: herhangi bir cinsiyette (yalnızca tekil).\"]","study.examples":"[{\"de\":\"Wir essen viel Obst.\",\"lv\":\"Ne hamë shumë fruta.\"},{\"de\":\"Wir essen viel Obst.\",\"lv\":\"Ne hamë shumë fruta.\"},{\"de\":\"Obst ist gesund.\",\"lv\":\"Frutat janë të shëndetshme.\"},{\"de\":\"Ich mag Obst und Gemüse.\",\"lv\":\"Meyve ve sebzeleri severim.\"},{\"de\":\"Wir essen Obst.\",\"lv\":\"Meyve yeriz.\"}]","study.tip":"[\"Das Obst = fruta\",\"Përdorni Obst kur konteksti përshtatet me të kuptuarit.\"]","study.important":"[\"Yanlış: die Obsts → Doğru: das Obst\",\"Das Obst = fruta (në përgjithësi).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Obst\|idx:693 (Obst), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"-Frutë.","study.translation":"-Frutë.","study.explanation":"[\"Ideja kryesore: Zakonisht për frut…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Obst",
  "de_article": "das",
  "lv": "-Frutë.",
  "level": "A1",
  "study": {
    "id": "a1-obst",
    "layout": "standardStudy",
    "translation": "-Frutë.",
    "explanation": [
      "Ideja kryesore: Zakonisht për frutat. Nuk ka pengesa shumës *në gjermanisht.",
      "Das Obst esas olarak şu anlama gelir: genel olarak meyve.",
      "Çoğunlukla tanımlanır: herhangi bir cinsiyette (yalnızca tekil)."
    ],
    "examples": [
      {
        "de": "Wir essen viel Obst.",
        "lv": "Ne hamë shumë fruta."
      },
      {
        "de": "Wir essen viel Obst.",
        "lv": "Ne hamë shumë fruta."
      },
      {
        "de": "Obst ist gesund.",
        "lv": "Frutat janë të shëndetshme."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Meyve ve sebzeleri severim."
      },
      {
        "de": "Wir essen Obst.",
        "lv": "Meyve yeriz."
      }
    ],
    "tip": [
      "Das Obst = fruta",
      "Përdorni Obst kur konteksti përshtatet me të kuptuarit."
    ],
    "important": [
      "Yanlış: die Obsts → Doğru: das Obst",
      "Das Obst = fruta (në përgjithësi)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "das Obst",
          "obst"
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
          "lv": {}
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "obst"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "obst"
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
            "das Obst"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 16

**Audit ID:** `LRB096-0016`
**Finding Stable ID:** `g2/a1/sq|schwimmen|idx:531|lv; study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `schwimmen|idx:531`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** peldēt
**DE reference (read-only):** schwimmen
**CURRENT (captured scope):** {"lv":"Not","study.translation":"Not","study.explanation":"[\"Ideja kryesore: \\\"schwimmen\\\" nënkupton notin si lëvizje ose sport.\",\"Schwimmen përdoret kur një person noton në ujë me një lëvizje noti.\",\"Suda rahatlamak veya yüzmek söz konusu olduğunda baden sıklıkla kullanılır.\",\"Në nivelin A1 është e rëndësishme të dallojmë: schwimmen = not, baden = banjë.\"]","study.examples":"[{\"de\":\"Ich schwimme gern.\",\"lv\":\"Më pëlqen noti\"},{\"de\":\"Er schwimmt sehr gut.\",\"lv\":\"Ajo noton shumë mirë.\"},{\"de\":\"Wir schwimmen im Schwimmbad.\",\"lv\":\"Havuzda yüzüyoruz.\"},{\"de\":\"Ich gehe baden.\",\"lv\":\"Do shkoj të notoj.\"}]","study.comparison":"[{\"word\":\"schwimmen\",\"meaning\":\"Noti si lëvizje ose sport\",\"example\":\"Ai noti shumë mirë.\"},{\"word\":\"baden\",\"meaning\":\"Noto/qëndro në ujë\",\"example\":\"Unë shkoj në notë.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"Shko të notosh\",\"example\":\"Ne shkojmë të notojmë.\"},{\"word\":\"duschen\",\"meaning\":\"Bëj një dush.\",\"example\":\"Unë dush në mëngjes.\"}]","study.tip":"{\"text\":\"Mos harroni: → notarët e lëvizjes së notit • Të pushosh në vaskë me → ujë.\"}","study.important":"[\"Schwimmen ve Baden aynı değil.\",\"Shpesh thuhet \\\"not\\\" në letonisht, por në gjermanisht duhet të kontrollosh nëse kjo do të thotë të lëvizësh ose të bësh banjë.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts schwimmen\|idx:531 (schwimmen), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Not","study.translation":"Not","study.explanation":"[\"Ideja kryesore: \\\"schwimmen\\\" nënkupto…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "schwimmen",
  "lv": "Not",
  "level": "A1",
  "study": {
    "id": "a1-schwimmen",
    "layout": "standardStudy",
    "translation": "Not",
    "explanation": [
      "Ideja kryesore: \"schwimmen\" nënkupton notin si lëvizje ose sport.",
      "Schwimmen përdoret kur një person noton në ujë me një lëvizje noti.",
      "Suda rahatlamak veya yüzmek söz konusu olduğunda baden sıklıkla kullanılır.",
      "Në nivelin A1 është e rëndësishme të dallojmë: schwimmen = not, baden = banjë."
    ],
    "examples": [
      {
        "de": "Ich schwimme gern.",
        "lv": "Më pëlqen noti"
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Ajo noton shumë mirë."
      },
      {
        "de": "Wir schwimmen im Schwimmbad.",
        "lv": "Havuzda yüzüyoruz."
      },
      {
        "de": "Ich gehe baden.",
        "lv": "Do shkoj të notoj."
      }
    ],
    "comparison": [
      {
        "word": "schwimmen",
        "meaning": "Noti si lëvizje ose sport",
        "example": "Ai noti shumë mirë."
      },
      {
        "word": "baden",
        "meaning": "Noto/qëndro në ujë",
        "example": "Unë shkoj në notë."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "Shko të notosh",
        "example": "Ne shkojmë të notojmë."
      },
      {
        "word": "duschen",
        "meaning": "Bëj një dush.",
        "example": "Unë dush në mëngjes."
      }
    ],
    "tip": {
      "text": "Mos harroni: → notarët e lëvizjes së notit • Të pushosh në vaskë me → ujë."
    },
    "important": [
      "Schwimmen ve Baden aynı değil.",
      "Shpesh thuhet \"not\" në letonisht, por në gjermanisht duhet të kontrollosh nëse kjo do të thotë të lëvizësh ose të bësh banjë."
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
          "meaning": {
            "purple": [
              "spor"
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
        {
          "blue": [
            "schwimmen"
          ],
          "red": [
            "baden"
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 17

**Audit ID:** `LRB096-0017`
**Finding Stable ID:** `g2/a1/sq|sehen|idx:539|lv; study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `sehen|idx:539`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** redzēt
**DE reference (read-only):** sehen
**CURRENT (captured scope):** {"lv":"Görmek","study.translation":"Görmek","study.explanation":"[\"Ideja kryesore: të shohësh do të thotë të shohësh me sy.\",\"Fjala sehen përdoret kur bëhet fjalë për atë që percepton syri.\",\"Kasıtlı izleme genellikle schauen veya ansehen'dir.\",\"Një frazë shumë e njohur është ich sehe dich. = Të shoh.\"]","study.examples":"[{\"de\":\"Ich sehe dich.\",\"lv\":\"Dhe une të shikoj.\"},{\"de\":\"Siehst du das Auto?\",\"lv\":\"E shihni këtë makinë?\"},{\"de\":\"Ich sehe nichts.\",\"lv\":\"Nuk po shohe asgje. Shiko me shume.\"},{\"de\":\"Wir schauen einen Film.\",\"lv\":\"Po shohim një film.\"}]","study.comparison":"[{\"word\":\"sehen\",\"meaning\":\"Görmek\",\"example\":\"Unë të shoh.\"},{\"word\":\"schauen\",\"meaning\":\"Izlemek için\",\"example\":\"Unë shoh foton.\"},{\"word\":\"ansehen\",\"meaning\":\"Shiko dhe dicka tjeter.\",\"example\":\"Unë shoh filmin.\"},{\"word\":\"hören\",\"meaning\":\"Seanca dëgjimore\",\"example\":\"Unë dëgjoj muzikën.\"}]","study.tip":"{\"text\":\"Unutmayın: gözler algılar → bakın • Bilinçli olarak görün → schauen/ansehen.\"}","study.important":"[\"Seehen nuk është i njëjtë me anschauen.\",\"Ich sehe dich = I see you • Ich schaue den Film = Po shikoj një film.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts sehen\|idx:539 (sehen), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Görmek","study.translation":"Görmek","study.explanation":"[\"Ideja kryesore: të shohësh do të tho…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sehen",
  "lv": "Görmek",
  "level": "A1",
  "study": {
    "id": "a1-sehen",
    "layout": "standardStudy",
    "translation": "Görmek",
    "explanation": [
      "Ideja kryesore: të shohësh do të thotë të shohësh me sy.",
      "Fjala sehen përdoret kur bëhet fjalë për atë që percepton syri.",
      "Kasıtlı izleme genellikle schauen veya ansehen'dir.",
      "Një frazë shumë e njohur është ich sehe dich. = Të shoh."
    ],
    "examples": [
      {
        "de": "Ich sehe dich.",
        "lv": "Dhe une të shikoj."
      },
      {
        "de": "Siehst du das Auto?",
        "lv": "E shihni këtë makinë?"
      },
      {
        "de": "Ich sehe nichts.",
        "lv": "Nuk po shohe asgje. Shiko me shume."
      },
      {
        "de": "Wir schauen einen Film.",
        "lv": "Po shohim një film."
      }
    ],
    "comparison": [
      {
        "word": "sehen",
        "meaning": "Görmek",
        "example": "Unë të shoh."
      },
      {
        "word": "schauen",
        "meaning": "Izlemek için",
        "example": "Unë shoh foton."
      },
      {
        "word": "ansehen",
        "meaning": "Shiko dhe dicka tjeter.",
        "example": "Unë shoh filmin."
      },
      {
        "word": "hören",
        "meaning": "Seanca dëgjimore",
        "example": "Unë dëgjoj muzikën."
      }
    ],
    "tip": {
      "text": "Unutmayın: gözler algılar → bakın • Bilinçli olarak görün → schauen/ansehen."
    },
    "important": [
      "Seehen nuk është i njëjtë me anschauen.",
      "Ich sehe dich = I see you • Ich schaue den Film = Po shikoj një film."
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
          "example": {}
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
          "example": {}
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {
          "blue": [
            "Seehen"
          ],
          "red": [
            "anschauen"
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

## Finding 18

**Audit ID:** `LRB096-0018`
**Finding Stable ID:** `g2/a1/sq|sein|idx:542|lv; study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `sein|idx:542`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** būt
**DE reference (read-only):** sein
**CURRENT (captured scope):** {"lv":"Të jesh","study.translation":"Të jesh","study.explanation":"[\"Ana fikir: sein olmak demektir.\",\"Sein është një nga foljet më të rëndësishme në gjermanisht.\",\"Format veçanërisht të rëndësishme në nivelin A1 janë ich bin, du bist, er ist dhe wir sind.\",\"Sein ayrıca birçok yerel veya karakteristik cümlede de kullanılır.\"]","study.examples":"[{\"de\":\"Ich bin hier.\",\"lv\":\"-Këtej.\"},{\"de\":\"Du bist müde.\",\"lv\":\"Je e lodhur.\"},{\"de\":\"Er ist Lehrer.\",\"lv\":\"Ai është mësues.\"},{\"de\":\"Wir sind zu Hause.\",\"lv\":\"Jemi në shtëpi.\"}]","study.comparison":"[{\"word\":\"sein\",\"meaning\":\"Të jesh\",\"example\":\"Unë jam këtu.\"},{\"word\":\"haben\",\"meaning\":\"Po, e kam.\",\"example\":\"Unë kam kohë.\"},{\"word\":\"werden\",\"meaning\":\"Duke u bërë\",\"example\":\"Unë bëhem i lodhur.\"},{\"word\":\"bleiben\",\"meaning\":\"Qëndro\",\"example\":\"Unë qëndroj këtu.\"}]","study.tip":"{\"text\":\"Atceries: ich bin = esmu • Du bist = tu esi.\"}","study.important":"[\"Duhet të shqyrtohet edhe forma SEIN: BIN, BIST, IST, Sind.\",\"Onların kutusu \\\"ben varım\\\" değil, \\\"ben varım\\\"dır.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts sein\|idx:542 (sein), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Të jesh","study.translation":"Të jesh","study.explanation":"[\"Ana fikir: sein olmak demektir.\",…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sein",
  "lv": "Të jesh",
  "level": "A1",
  "study": {
    "id": "a1-sein",
    "layout": "standardStudy",
    "translation": "Të jesh",
    "explanation": [
      "Ana fikir: sein olmak demektir.",
      "Sein është një nga foljet më të rëndësishme në gjermanisht.",
      "Format veçanërisht të rëndësishme në nivelin A1 janë ich bin, du bist, er ist dhe wir sind.",
      "Sein ayrıca birçok yerel veya karakteristik cümlede de kullanılır."
    ],
    "examples": [
      {
        "de": "Ich bin hier.",
        "lv": "-Këtej."
      },
      {
        "de": "Du bist müde.",
        "lv": "Je e lodhur."
      },
      {
        "de": "Er ist Lehrer.",
        "lv": "Ai është mësues."
      },
      {
        "de": "Wir sind zu Hause.",
        "lv": "Jemi në shtëpi."
      }
    ],
    "comparison": [
      {
        "word": "sein",
        "meaning": "Të jesh",
        "example": "Unë jam këtu."
      },
      {
        "word": "haben",
        "meaning": "Po, e kam.",
        "example": "Unë kam kohë."
      },
      {
        "word": "werden",
        "meaning": "Duke u bërë",
        "example": "Unë bëhem i lodhur."
      },
      {
        "word": "bleiben",
        "meaning": "Qëndro",
        "example": "Unë qëndroj këtu."
      }
    ],
    "tip": {
      "text": "Atceries: ich bin = esmu • Du bist = tu esi."
    },
    "important": [
      "Duhet të shqyrtohet edhe forma SEIN: BIN, BIST, IST, Sind.",
      "Onların kutusu \"ben varım\" değil, \"ben varım\"dır."
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
          "example": {}
        },
        {
          "word": {
            "green": [
              "haben"
            ]
          },
          "meaning": {},
          "example": {}
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
        "left": {}
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
        {}
      ]
    }
  }
}
```

---

## Finding 19

**Audit ID:** `LRB096-0019`
**Finding Stable ID:** `g2/a1/sq|Seite|idx:544|lv; study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `Seite|idx:544`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** lappuse • puse
**DE reference (read-only):** Seite
**CURRENT (captured scope):** {"lv":"Sayfa • Sayfa","study.translation":"Sayfa • Sayfa","study.explanation":"[\"Ana fikir: die Seite bir kitabın/belgenin sayfası veya bir şeyin yan tarafı/kenarı anlamına gelebilir.\",\"Die Seite = faqe (Faqe 5 = faqe 5) në një libër, revistë ose faqe interneti.\",\"Mekansal anlamda, die Seite = yan (auf der linken Seite = solda).\",\"Metaforikisht, die Seite mund të nënkuptojë gjithashtu një palë në konflikt ose mendim (auf meiner Seite = në anën time).\",\"Konteksti (libri/leximi ose artikulli/marrëdhënia) tregon kuptimin e saktë.\",\"Shumës për të dy kuptimet: die Seiten.\"]","study.examples":"[{\"de\":\"Schlagt die Seite zwanzig auf.\",\"lv\":\"Shko te faqja 20.\"},{\"de\":\"Auf der linken Seite ist ein Park.\",\"lv\":\"Ka një park në anën e majtë.\"},{\"de\":\"Die Webseite lädt langsam.\",\"lv\":\"Web sitesi yavaş yükleniyor.\"},{\"de\":\"Er steht auf meiner Seite.\",\"lv\":\"Ai është në anën time.\"},{\"de\":\"Das Buch hat 200 Seiten.\",\"lv\":\"Libri ka 200 faqe.\"},{\"de\":\"Auf der anderen Seite der Straße.\",\"lv\":\"Përtej rrugës.\"}]","study.tip":"[\"Të flasësh për një libër ose të lexosh një → faqe. Ai jep informacion në → lidhje me pozicionin, drejtimin ose marrëdhëniet e palës.\",\"Faqja X është gjithmonë një faqe e një libri, jo gjysma e tij.\"]","study.important":"[\"Die Seite = sayfa VEYA sayfa – bağlam belirler.\",\"Shumës për të dy kuptimet: die Seiten.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Seite\|idx:544 (Seite), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Sayfa • Sayfa","study.translation":"Sayfa • Sayfa","study.explanation":"[\"Ana fikir: die Seite b…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "Sayfa • Sayfa",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "Sayfa • Sayfa",
    "explanation": [
      "Ana fikir: die Seite bir kitabın/belgenin sayfası veya bir şeyin yan tarafı/kenarı anlamına gelebilir.",
      "Die Seite = faqe (Faqe 5 = faqe 5) në një libër, revistë ose faqe interneti.",
      "Mekansal anlamda, die Seite = yan (auf der linken Seite = solda).",
      "Metaforikisht, die Seite mund të nënkuptojë gjithashtu një palë në konflikt ose mendim (auf meiner Seite = në anën time).",
      "Konteksti (libri/leximi ose artikulli/marrëdhënia) tregon kuptimin e saktë.",
      "Shumës për të dy kuptimet: die Seiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Shko te faqja 20."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Ka një park në anën e majtë."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Web sitesi yavaş yükleniyor."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "Ai është në anën time."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Libri ka 200 faqe."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "Përtej rrugës."
      }
    ],
    "tip": [
      "Të flasësh për një libër ose të lexosh një → faqe. Ai jep informacion në → lidhje me pozicionin, drejtimin ose marrëdhëniet e palës.",
      "Faqja X është gjithmonë një faqe e një libri, jo gjysma e tij."
    ],
    "important": [
      "Die Seite = sayfa VEYA sayfa – bağlam belirler.",
      "Shumës për të dy kuptimet: die Seiten."
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
        {
          "blue": [
            "flasësh"
          ]
        }
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

## Finding 20

**Audit ID:** `LRB096-0020`
**Finding Stable ID:** `g2/a1/sq|sich|idx:547|lv; study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `sich|idx:547`
**Field / path:** `lv; study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** sevi • sev
**DE reference (read-only):** sich
**CURRENT (captured scope):** {"lv":"Kendiniz • Kendiniz için","study.translation":"Kendiniz • Kendiniz için","study.explanation":"[\"Ideja kryesore: Tregon se veprimi është i lidhur me vetë autorin.\",\"Letonca'da genellikle benlik veya benlik olarak tercüme edilir.\",\"Në disa folje gjermane, sich është pjesë e detyrueshme, p.sh. sich waschen.\",\"Një pikë e rëndësishme për t 'u theksuar në nivelin A1: ich wasche mich, er wäscht sich.\"]","study.examples":"[{\"de\":\"Er wäscht sich.\",\"lv\":\"Ai po bën banjë.\"},{\"de\":\"Ich setze mich.\",\"lv\":\"Oturuyorum.\"},{\"de\":\"Sie freut sich.\",\"lv\":\"Ajo është e lumtur.\"},{\"de\":\"Ich wasche das Auto.\",\"lv\":\"Po laj makinën\"}]","study.comparison":"[{\"word\":\"sich\",\"meaning\":\"Mendja ime.\",\"example\":\"Ai lhet veten.\"},{\"word\":\"mich\",\"meaning\":\"Unë/Unë jam i tyre\",\"example\":\"Unë lhem veten.\"},{\"word\":\"dich\",\"meaning\":\"Sen/ben du'da\",\"example\":\"Ti lhet veten.\"},{\"word\":\"ihn\",\"meaning\":\"Ai është...\",\"example\":\"Unë e shoh atë.\"}]","study.tip":"{\"text\":\"Mos harroni: veproni → sipas dëshirës suaj.\"}","study.important":"[\"Sich bağımsız bir isim değildir.\",\"Varet nga personi: ich → mich, du → dich, er/sie/es → sich.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts sich\|idx:547 (sich), ceļš 'lv; study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Kendiniz • Kendiniz için","study.translation":"Kendiniz • Kendiniz için","study.explanation":"[\"…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sich",
  "lv": "Kendiniz • Kendiniz için",
  "level": "A1",
  "study": {
    "id": "a1-sich",
    "layout": "standardStudy",
    "translation": "Kendiniz • Kendiniz için",
    "explanation": [
      "Ideja kryesore: Tregon se veprimi është i lidhur me vetë autorin.",
      "Letonca'da genellikle benlik veya benlik olarak tercüme edilir.",
      "Në disa folje gjermane, sich është pjesë e detyrueshme, p.sh. sich waschen.",
      "Një pikë e rëndësishme për t 'u theksuar në nivelin A1: ich wasche mich, er wäscht sich."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "Ai po bën banjë."
      },
      {
        "de": "Ich setze mich.",
        "lv": "Oturuyorum."
      },
      {
        "de": "Sie freut sich.",
        "lv": "Ajo është e lumtur."
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "Po laj makinën"
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "Mendja ime.",
        "example": "Ai lhet veten."
      },
      {
        "word": "mich",
        "meaning": "Unë/Unë jam i tyre",
        "example": "Unë lhem veten."
      },
      {
        "word": "dich",
        "meaning": "Sen/ben du'da",
        "example": "Ti lhet veten."
      },
      {
        "word": "ihn",
        "meaning": "Ai është...",
        "example": "Unë e shoh atë."
      }
    ],
    "tip": {
      "text": "Mos harroni: veproni → sipas dëshirës suaj."
    },
    "important": [
      "Sich bağımsız bir isim değildir.",
      "Varet nga personi: ich → mich, du → dich, er/sie/es → sich."
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
          "example": {}
        },
        {
          "word": {
            "green": [
              "ihn"
            ]
          },
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {}
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

## Finding 21

**Audit ID:** `LRB096-0021`
**Finding Stable ID:** `g2/a1/sq|sprechen|idx:5|lv, study.translation, study.explanation, study.examples, study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `sprechen|idx:5`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** runāt
**DE reference (read-only):** sprechen
**CURRENT (captured scope):** {"lv":"Thuaj diçka.","study.translation":"Thuaj diçka.","study.explanation":"[\"Ideja kryesore: Flisni, flisni ose përdorni gjuhën.\",\"Sprechen në thelb do të thotë: të flasësh ose të flasësh.\",\"Kryesisht karakterizohet nga karakteristikat e mëposhtme: gjuha/të folurit.\",\"Sprechen përshkruan të folurit ose përdorimin e gjuhës.\"]","study.examples":"[{\"de\":\"Ich spreche Deutsch.\",\"lv\":\"Unë flas gjermanisht.\"},{\"de\":\"Wir sprechen über die Arbeit.\",\"lv\":\"Po flasim për punë.\"},{\"de\":\"Sie spricht mit ihrer Lehrerin.\",\"lv\":\"Unë flas gjermanisht\"}]","study.comparison":"[{\"word\":\"sprechen\",\"meaning\":\"Flisni (procesi, gjuha)\",\"example\":\"Wir sprechen über die Arbeit. – Po flasim për punë.\"},{\"word\":\"sagen\",\"meaning\":\"Trego (tekst specifik)\",\"example\":\"Sag mir die Wahrheit. – Duhet të më tregosh të vërtetën.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts sprechen\|idx:5 (sprechen), ceļš 'lv, study.translation, study.explanation, study.examples, study.comparison': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Thuaj diçka.","study.translation":"Thuaj diçka.","study.explanation":"[\"Ideja kryesore: Flisni, …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sprechen",
  "lv": "Thuaj diçka.",
  "level": "A1",
  "study": {
    "id": "a1-sprechen-study",
    "layout": "standardStudy",
    "translation": "Thuaj diçka.",
    "explanation": [
      "Ideja kryesore: Flisni, flisni ose përdorni gjuhën.",
      "Sprechen në thelb do të thotë: të flasësh ose të flasësh.",
      "Kryesisht karakterizohet nga karakteristikat e mëposhtme: gjuha/të folurit.",
      "Sprechen përshkruan të folurit ose përdorimin e gjuhës."
    ],
    "examples": [
      {
        "de": "Ich spreche Deutsch.",
        "lv": "Unë flas gjermanisht."
      },
      {
        "de": "Wir sprechen über die Arbeit.",
        "lv": "Po flasim për punë."
      },
      {
        "de": "Sie spricht mit ihrer Lehrerin.",
        "lv": "Unë flas gjermanisht"
      }
    ],
    "comparison": [
      {
        "word": "sprechen",
        "meaning": "Flisni (procesi, gjuha)",
        "example": "Wir sprechen über die Arbeit. – Po flasim për punë."
      },
      {
        "word": "sagen",
        "meaning": "Trego (tekst specifik)",
        "example": "Sag mir die Wahrheit. – Duhet të më tregosh të vërtetën."
      }
    ],
    "tip": [
      "Sprechen = bisedë",
      "Përdor sprechen kur konteksti i përshtatet kuptimit."
    ],
    "important": [
      "Sprechen = duke folur.",
      "Flisni, flisni ose përdorni gjuhën."
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

## Finding 22

**Audit ID:** `LRB096-0022`
**Finding Stable ID:** `g2/a1/sq|stehen|idx:576|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `stehen|idx:576`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** stāvēt
**DE reference (read-only):** stehen
**CURRENT (captured scope):** {"lv":"Të jesh","study.translation":"Të jesh","study.explanation":"[\"Ideja kryesore: kofshët do të thotë të qëndrosh në këmbë ose në këmbë.\",\"Për njerëzit, stehen do të thotë të qëndrosh në këmbë.\",\"Në rastin e një objekti, stehen do të thotë se ndalon ose është në një vend të caktuar.\",\"Dallimi është i rëndësishëm: stehen = në këmbë, sitzen = ulur, Liegen = shtrirë.\"]","study.examples":"[{\"de\":\"Ich stehe an der Tür.\",\"lv\":\"Po qëndroj te dera.\"},{\"de\":\"Der Stuhl steht in der Küche.\",\"lv\":\"Karrigia është në kuzhinë.\"},{\"de\":\"Er sitzt am Tisch.\",\"lv\":\"Ajo ulet në tavolinë.\"},{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"Libri është në tryezë.\"}]","study.comparison":"[{\"word\":\"stehen\",\"meaning\":\"Qëndrim/Qëndrim\",\"example\":\"Unë qëndrom këtu.\"},{\"word\":\"sitzen\",\"meaning\":\"Ulja\",\"example\":\"Ai ulet në tavolinë.\"},{\"word\":\"liegen\",\"meaning\":\"Uyumak/uzanmak\",\"example\":\"Libri qëndron atje.\"},{\"word\":\"stellen\",\"meaning\":\"Vendos vertikalisht\",\"example\":\"Unë vë shishen këtu.\"}]","study.tip":"{\"text\":\"Mos harroni: → në këmbë me avull • → ulur • → shtrirë shtrirë.\"}","study.important":"[\"Stehen tregon situatën, jo aktin e \\\"lënies mënjanë\\\".\",\"Bir nesneyi dik bir şekilde koymak stehen değil, stelen'dir.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts stehen\|idx:576 (stehen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Të jesh","study.translation":"Të jesh","study.explanation":"[\"Ideja kryesore: kofshët do të thot…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "stehen",
  "lv": "Të jesh",
  "level": "A1",
  "study": {
    "id": "a1-stehen",
    "layout": "standardStudy",
    "translation": "Të jesh",
    "explanation": [
      "Ideja kryesore: kofshët do të thotë të qëndrosh në këmbë ose në këmbë.",
      "Për njerëzit, stehen do të thotë të qëndrosh në këmbë.",
      "Në rastin e një objekti, stehen do të thotë se ndalon ose është në një vend të caktuar.",
      "Dallimi është i rëndësishëm: stehen = në këmbë, sitzen = ulur, Liegen = shtrirë."
    ],
    "examples": [
      {
        "de": "Ich stehe an der Tür.",
        "lv": "Po qëndroj te dera."
      },
      {
        "de": "Der Stuhl steht in der Küche.",
        "lv": "Karrigia është në kuzhinë."
      },
      {
        "de": "Er sitzt am Tisch.",
        "lv": "Ajo ulet në tavolinë."
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Libri është në tryezë."
      }
    ],
    "comparison": [
      {
        "word": "stehen",
        "meaning": "Qëndrim/Qëndrim",
        "example": "Unë qëndrom këtu."
      },
      {
        "word": "sitzen",
        "meaning": "Ulja",
        "example": "Ai ulet në tavolinë."
      },
      {
        "word": "liegen",
        "meaning": "Uyumak/uzanmak",
        "example": "Libri qëndron atje."
      },
      {
        "word": "stellen",
        "meaning": "Vendos vertikalisht",
        "example": "Unë vë shishen këtu."
      }
    ],
    "tip": {
      "text": "Mos harroni: → në këmbë me avull • → ulur • → shtrirë shtrirë."
    },
    "important": [
      "Stehen tregon situatën, jo aktin e \"lënies mënjanë\".",
      "Bir nesneyi dik bir şekilde koymak stehen değil, stelen'dir."
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
        {
          "blue": [
            "stehen"
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

## Finding 23

**Audit ID:** `LRB096-0023`
**Finding Stable ID:** `g2/a1/sq|über|idx:608|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `über|idx:608`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** virs • par
**DE reference (read-only):** über
**CURRENT (captured scope):** {"lv":"Mbi • Për","study.translation":"Mbi • Për","study.explanation":"[\"Ideja kryesore: uber do të thotë sipër ose përreth, në varësi të kontekstit.\",\"Kur bëhet fjalë për vendndodhjen, uber do të thotë shpesh më lart.\",\"Bir konuşma, metin veya konu söz konusu olduğunda über, hakkında anlamına gelir.\",\"Në trafikun e Uber, kjo mund të nënkuptojë fundin.\"]","study.examples":"[{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Lamba masanın üzerinde asılı duruyor.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Zamandan bahsediyoruz.\"},{\"de\":\"Das Kind läuft über die Straße.\",\"lv\":\"Një djalë po vrapon nëpër rrugë.\"},{\"de\":\"Ich freue mich über das Geschenk.\",\"lv\":\"Jam i kënaqur me dhuratën.\"}]","study.comparison":"[{\"word\":\"über\",\"meaning\":\"Mbi/mbi/kryq\",\"example\":\"Ne flasim për motrin.\"},{\"word\":\"auf\",\"meaning\":\"Nga jashtë\",\"example\":\"Libri shtrihet në tryezë.\"},{\"word\":\"unter\",\"meaning\":\"Altında\",\"example\":\"Çanta është nën tryezën.\"},{\"word\":\"von\",\"meaning\":\"Bir kaynaktan/etrafından\",\"example\":\"Dëgjoj prej teje.\"}]","study.tip":"{\"text\":\"Unutmayın: konuşmanın konusu → über • Masanın üstü → über.\"}","study.important":"[\"Uber nuk është vetëm një emër vendi.\",\"Sprechen über do të thotë \\\"të flasësh për\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts über\|idx:608 (über), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Mbi • Për","study.translation":"Mbi • Për","study.explanation":"[\"Ideja kryesore: uber do të tho…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "über",
  "lv": "Mbi • Për",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "Mbi • Për",
    "explanation": [
      "Ideja kryesore: uber do të thotë sipër ose përreth, në varësi të kontekstit.",
      "Kur bëhet fjalë për vendndodhjen, uber do të thotë shpesh më lart.",
      "Bir konuşma, metin veya konu söz konusu olduğunda über, hakkında anlamına gelir.",
      "Në trafikun e Uber, kjo mund të nënkuptojë fundin."
    ],
    "examples": [
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lamba masanın üzerinde asılı duruyor."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Zamandan bahsediyoruz."
      },
      {
        "de": "Das Kind läuft über die Straße.",
        "lv": "Një djalë po vrapon nëpër rrugë."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "Jam i kënaqur me dhuratën."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "Mbi/mbi/kryq",
        "example": "Ne flasim për motrin."
      },
      {
        "word": "auf",
        "meaning": "Nga jashtë",
        "example": "Libri shtrihet në tryezë."
      },
      {
        "word": "unter",
        "meaning": "Altında",
        "example": "Çanta është nën tryezën."
      },
      {
        "word": "von",
        "meaning": "Bir kaynaktan/etrafından",
        "example": "Dëgjoj prej teje."
      }
    ],
    "tip": {
      "text": "Unutmayın: konuşmanın konusu → über • Masanın üstü → über."
    },
    "important": [
      "Uber nuk është vetëm një emër vendi.",
      "Sprechen über do të thotë \"të flasësh për\"."
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
        "left": {}
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

## Finding 24

**Audit ID:** `LRB096-0024`
**Finding Stable ID:** `g2/a1/sq|Uhr|idx:698|lv; study.translation; study.explanation; study.examples; study.tip; study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `Uhr|idx:698`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** {"lv":"Ora!","study.translation":"Ora!","study.explanation":"[\"Ana fikir: Saat veya kol saati. Ayrıca saatteki saat: Es ist acht Uhr.\",\"Die Uhr në thelb do të thotë: koha në pajisje ose orë.\",\"Zakonisht karakterizohet si: një kohë specifike.\",\"Die Uhr saat anlamına gelir • Saatin içindeki bir cihaz veya zaman (Es ist acht Uhr, meine Uhr).\"]","study.examples":"[{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz (sekiz).\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz (sekiz).\"},{\"de\":\"Meine Uhr ist kaputt.\",\"lv\":\"Më është prishur ora.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Saat sekiz.\"},{\"de\":\"Es ist acht Uhr.\",\"lv\":\"Ora tetë (orë).\"},{\"de\":\"die Uhr\",\"lv\":\"Pajisje/orë në orë • Die Zeit\"}]","study.tip":"[\"Saat veya kol saati. Ayrıca saatteki saat: Es ist acht Uhr.\",\"Bağlam bu anlama uygun olduğunda die Uhr'u kullanın.\"]","study.important":"[\"Die Uhr: pajisje (meine Uhr) ose kohë (acht Uhr).\",\"Die Uhr: Kullanmadan önce bağlamı kontrol edin.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Uhr\|idx:698 (Uhr), ceļš 'lv; study.translation; study.explanation; study.examples; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Ora!","study.translation":"Ora!","study.explanation":"[\"Ana fikir: Saat veya kol saati. Ayrıca s…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "Ora!",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "Ora!",
    "explanation": [
      "Ana fikir: Saat veya kol saati. Ayrıca saatteki saat: Es ist acht Uhr.",
      "Die Uhr në thelb do të thotë: koha në pajisje ose orë.",
      "Zakonisht karakterizohet si: një kohë specifike.",
      "Die Uhr saat anlamına gelir • Saatin içindeki bir cihaz veya zaman (Es ist acht Uhr, meine Uhr)."
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
        "lv": "Më është prishur ora."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Saat sekiz."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Ora tetë (orë)."
      },
      {
        "de": "die Uhr",
        "lv": "Pajisje/orë në orë • Die Zeit"
      }
    ],
    "tip": [
      "Saat veya kol saati. Ayrıca saatteki saat: Es ist acht Uhr.",
      "Bağlam bu anlama uygun olduğunda die Uhr'u kullanın."
    ],
    "important": [
      "Die Uhr: pajisje (meine Uhr) ose kohë (acht Uhr).",
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

## Finding 25

**Audit ID:** `LRB096-0025`
**Finding Stable ID:** `g2/a1/sq|um|idx:611|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `um|idx:611`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** ap • pulksten
**DE reference (read-only):** um
**CURRENT (captured scope):** {"lv":"Yaklaşık • Saat","study.translation":"Yaklaşık • Saat","study.explanation":"[\"Ideja kryesore: hmm do të thotë një orë që shpesh shfaq kohën ose është rreth/rreth një vendi.\",\"Koha e saktë, hm, do të thotë orë.\",\"\\\"Vendi\\\" do të thotë \\\"rreth\\\" ose \\\"rreth\\\".\",\"Um… zu ndihmon në artikulimin e qëllimit në fjalinë: të.\"]","study.examples":"[{\"de\":\"Ich komme um acht Uhr.\",\"lv\":\"Do të vij në orën tetë.\"},{\"de\":\"Wir sitzen um den Tisch.\",\"lv\":\"Ulemi rreth tryezës.\"},{\"de\":\"Er geht um die Ecke.\",\"lv\":\"Köşeyi dönüyor.\"},{\"de\":\"Ich lerne, um Deutsch zu sprechen.\",\"lv\":\"Almanca konuşmayı öğreniyorum.\"}]","study.comparison":"[{\"word\":\"um\",\"meaning\":\"Brenda/përreth/brenda/brenda/brenda/brenda/brenda\",\"example\":\"Unë vij në orën tetë.\"},{\"word\":\"am\",\"meaning\":\"Çdo ditë / orë\",\"example\":\"Të hënën vij.\"},{\"word\":\"gegen\",\"meaning\":\"Zaman / vs hakkında\",\"example\":\"Unë vij rreth orës tetë.\"},{\"word\":\"für\",\"meaning\":\"Lehine / lehine\",\"example\":\"Ky është për ty.\"}]","study.tip":"{\"text\":\"Unutmayın: um acht = saat sekiz.\"}","study.important":"[\"Hmm, me kalimin e kohës kjo zakonisht bëhet një \\\"orë\\\".\",\"Hmm… zu zakonisht do të thotë “për…”.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts um\|idx:611 (um), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Yaklaşık • Saat","study.translation":"Yaklaşık • Saat","study.explanation":"[\"Ideja kryesore: hm…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "um",
  "lv": "Yaklaşık • Saat",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "Yaklaşık • Saat",
    "explanation": [
      "Ideja kryesore: hmm do të thotë një orë që shpesh shfaq kohën ose është rreth/rreth një vendi.",
      "Koha e saktë, hm, do të thotë orë.",
      "\"Vendi\" do të thotë \"rreth\" ose \"rreth\".",
      "Um… zu ndihmon në artikulimin e qëllimit në fjalinë: të."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "Do të vij në orën tetë."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "Ulemi rreth tryezës."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "Köşeyi dönüyor."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "Almanca konuşmayı öğreniyorum."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "Brenda/përreth/brenda/brenda/brenda/brenda/brenda",
        "example": "Unë vij në orën tetë."
      },
      {
        "word": "am",
        "meaning": "Çdo ditë / orë",
        "example": "Të hënën vij."
      },
      {
        "word": "gegen",
        "meaning": "Zaman / vs hakkında",
        "example": "Unë vij rreth orës tetë."
      },
      {
        "word": "für",
        "meaning": "Lehine / lehine",
        "example": "Ky është për ty."
      }
    ],
    "tip": {
      "text": "Unutmayın: um acht = saat sekiz."
    },
    "important": [
      "Hmm, me kalimin e kohës kjo zakonisht bëhet një \"orë\".",
      "Hmm… zu zakonisht do të thotë “për…”."
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

## Finding 26

**Audit ID:** `LRB096-0026`
**Finding Stable ID:** `g2/a1/sq|unter|idx:615|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `unter|idx:615`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** zem
**DE reference (read-only):** unter
**CURRENT (captured scope):** {"lv":"Altında","study.translation":"Altında","study.explanation":"[\"Ideja kryesore: do të thotë më poshtë ose midis në varësi të kontekstit.\",\"Përdor arin nëse ka diçka nën tavolinë, karrige ose objekt tjetër.\",\"Bir grup insandan bahsederken unter, arasında anlamına gelebilir.\",\"Është e kundërta e uber për sa i përket drejtimit lart/poshtë.\"]","study.examples":"[{\"de\":\"Die Tasche ist unter dem Tisch.\",\"lv\":\"Çanta masanın altındadır.\"},{\"de\":\"Die Katze liegt unter dem Stuhl.\",\"lv\":\"Kedi sandalyenin altında uyuyor.\"},{\"de\":\"Unter Freunden sagt man das so.\",\"lv\":\"Thonë se është mes miqsh.\"},{\"de\":\"Die Lampe hängt über dem Tisch.\",\"lv\":\"Lamba masanın üzerinde asılı duruyor.\"}]","study.comparison":"[{\"word\":\"unter\",\"meaning\":\"Nën / Midis\",\"example\":\"Çanta është nën tryezën.\"},{\"word\":\"über\",\"meaning\":\"Teprica/për\",\"example\":\"Llampa varet mbi tryezën.\"},{\"word\":\"zwischen\",\"meaning\":\"Midis dy gjërave\",\"example\":\"Midis shtëpive.\"},{\"word\":\"auf\",\"meaning\":\"Nga jashtë\",\"example\":\"Në tryezë.\"}]","study.tip":"{\"text\":\"Hizmetler: zem galda → Tisch'in altında.\"}","study.important":"[\"Unter gjithashtu mund të nënkuptojë \\\"ndërmjet\\\", veçanërisht midis individëve ose grupeve.\",\"Unter dhe über janë shpesh të kundërta në kuptimin e vendit.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts unter\|idx:615 (unter), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Altında","study.translation":"Altında","study.explanation":"[\"Ideja kryesore: do të thotë më pos…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "unter",
  "lv": "Altında",
  "level": "A1",
  "study": {
    "id": "a1-unter",
    "layout": "standardStudy",
    "translation": "Altında",
    "explanation": [
      "Ideja kryesore: do të thotë më poshtë ose midis në varësi të kontekstit.",
      "Përdor arin nëse ka diçka nën tavolinë, karrige ose objekt tjetër.",
      "Bir grup insandan bahsederken unter, arasında anlamına gelebilir.",
      "Është e kundërta e uber për sa i përket drejtimit lart/poshtë."
    ],
    "examples": [
      {
        "de": "Die Tasche ist unter dem Tisch.",
        "lv": "Çanta masanın altındadır."
      },
      {
        "de": "Die Katze liegt unter dem Stuhl.",
        "lv": "Kedi sandalyenin altında uyuyor."
      },
      {
        "de": "Unter Freunden sagt man das so.",
        "lv": "Thonë se është mes miqsh."
      },
      {
        "de": "Die Lampe hängt über dem Tisch.",
        "lv": "Lamba masanın üzerinde asılı duruyor."
      }
    ],
    "comparison": [
      {
        "word": "unter",
        "meaning": "Nën / Midis",
        "example": "Çanta është nën tryezën."
      },
      {
        "word": "über",
        "meaning": "Teprica/për",
        "example": "Llampa varet mbi tryezën."
      },
      {
        "word": "zwischen",
        "meaning": "Midis dy gjërave",
        "example": "Midis shtëpive."
      },
      {
        "word": "auf",
        "meaning": "Nga jashtë",
        "example": "Në tryezë."
      }
    ],
    "tip": {
      "text": "Hizmetler: zem galda → Tisch'in altında."
    },
    "important": [
      "Unter gjithashtu mund të nënkuptojë \"ndërmjet\", veçanërisht midis individëve ose grupeve.",
      "Unter dhe über janë shpesh të kundërta në kuptimin e vendit."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "unter"
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
        "left": {}
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

## Finding 27

**Audit ID:** `LRB096-0027`
**Finding Stable ID:** `g2/a1/sq|Urlaub|idx:695|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `Urlaub|idx:695`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** atvaļinājums
**DE reference (read-only):** Urlaub
**CURRENT (captured scope):** {"lv":"Pushime","study.translation":"Pushime","study.explanation":"[\"Ana fikir: sadece tekil. İşten ayrılın - her zaman tekildir.\",\"Der Urlaub w zasadzie oznacza: czas wolny od pracy.\",\"Zakonisht karakterizohet si: vetëm njëjës.\",\"Der Urlaub, işten ayrılmanın tekil bir şeklidir (im Urlaub).\"]","study.examples":"[{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Babai im është me pushime.\"},{\"de\":\"Mein Vater ist im Urlaub.\",\"lv\":\"Babai im është me pushime.\"},{\"de\":\"Nächste Woche habe ich Urlaub.\",\"lv\":\"Javën tjetër kam pushime.\"},{\"de\":\"Wir machen Urlaub in Spanien.\",\"lv\":\"Jemi me pushime në Spanjë.\"},{\"de\":\"im Urlaub\",\"lv\":\"Na wakacjach (w pracy).\"}]","study.comparison":"[{\"word\":\"der Urlaub\",\"meaning\":\"İşten ayrılma (yalnızca herkes)\",\"example\":\"Mein Vater ist im Urlaub. – Babai im është me pushime.\"},{\"word\":\"die Ferien\",\"meaning\":\"Pushim nga shkolla/puna (vetëm në tavolinë)\",\"example\":\"Die Kinder haben Ferien. – Fëmijët kanë pushime.\"}]","study.tip":"[\"Vetëm një. Lëre punën - është gjithmonë unike.\",\"Përdorni der Urlaub kur konteksti i përshtatet këtij kuptimi.\"]","study.important":"[\"Niepoprawnie: die Ferie, der Urlabe (na poziomie A1).\",\"Pushimet: të jesh në pushim / të qethesh pushim.\",\"Yanlış: die Urlaube → Doğru: der Urlaub\",\"Puna: der Urlaub (vetëm njëjës).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Urlaub\|idx:695 (Urlaub), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Pushime","study.translation":"Pushime","study.explanation":"[\"Ana fikir: sadece tekil. İşten ayr…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Urlaub",
  "de_article": "der",
  "lv": "Pushime",
  "level": "A1",
  "study": {
    "id": "a1-urlaub",
    "layout": "standardStudy",
    "translation": "Pushime",
    "explanation": [
      "Ana fikir: sadece tekil. İşten ayrılın - her zaman tekildir.",
      "Der Urlaub w zasadzie oznacza: czas wolny od pracy.",
      "Zakonisht karakterizohet si: vetëm njëjës.",
      "Der Urlaub, işten ayrılmanın tekil bir şeklidir (im Urlaub)."
    ],
    "examples": [
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Babai im është me pushime."
      },
      {
        "de": "Mein Vater ist im Urlaub.",
        "lv": "Babai im është me pushime."
      },
      {
        "de": "Nächste Woche habe ich Urlaub.",
        "lv": "Javën tjetër kam pushime."
      },
      {
        "de": "Wir machen Urlaub in Spanien.",
        "lv": "Jemi me pushime në Spanjë."
      },
      {
        "de": "im Urlaub",
        "lv": "Na wakacjach (w pracy)."
      }
    ],
    "comparison": [
      {
        "word": "der Urlaub",
        "meaning": "İşten ayrılma (yalnızca herkes)",
        "example": "Mein Vater ist im Urlaub. – Babai im është me pushime."
      },
      {
        "word": "die Ferien",
        "meaning": "Pushim nga shkolla/puna (vetëm në tavolinë)",
        "example": "Die Kinder haben Ferien. – Fëmijët kanë pushime."
      }
    ],
    "tip": [
      "Vetëm një. Lëre punën - është gjithmonë unike.",
      "Përdorni der Urlaub kur konteksti i përshtatet këtij kuptimi."
    ],
    "important": [
      "Niepoprawnie: die Ferie, der Urlabe (na poziomie A1).",
      "Pushimet: të jesh në pushim / të qethesh pushim.",
      "Yanlış: die Urlaube → Doğru: der Urlaub",
      "Puna: der Urlaub (vetëm njëjës)."
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

## Finding 28

**Audit ID:** `LRB096-0028`
**Finding Stable ID:** `g2/a1/sq|verstehen|idx:621|lv, study|LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `verstehen|idx:621`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MIX
**LV source (read-only):** saprast
**DE reference (read-only):** verstehen
**CURRENT (captured scope):** {"lv":"Anlamak","study.translation":"Anlamak","study.explanation":"[\"Ideja kryesore: do të thotë të kuptosh verstehen.\",\"Përdoret kur kupton një gjuhë, një person, një tekst ose një situatë.\",\"Burada Letonca'yı \\\"bilmeye\\\" veya \\\"öğrenmeye\\\" genellikle gerek yoktur. • Çoğunlukla könnendirler.\",\"Një shprehje shumë e njohur është ich verstehe. = E kuptoj.\"]","study.examples":"[{\"de\":\"Ich verstehe dich.\",\"lv\":\"Seni anlıyorum\"},{\"de\":\"Verstehst du Deutsch?\",\"lv\":\"A kupton gjermanisht?\"},{\"de\":\"Ich verstehe das nicht.\",\"lv\":\"Nuk e kuptoj\"},{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"Mund të flas gjermanisht\"}]","study.comparison":"[{\"word\":\"verstehen\",\"meaning\":\"Anlamak\",\"example\":\"Të kuptoj ty.\"},{\"word\":\"können\",\"meaning\":\"Dije\",\"example\":\"Unë mund të notoj.\"},{\"word\":\"wissen\",\"meaning\":\"E di të vërtetën.\",\"example\":\"Unë e di atë.\"},{\"word\":\"kennen\",\"meaning\":\"Dije\",\"example\":\"Unë e njoh atë.\"}]","study.tip":"{\"text\":\"Unutmayın: metni/kişiyi anlayın → verstehen • Bir şeyin nasıl yapılacağını bilin → können.\"}","study.important":"[\"Verstehen \\\"anlamak\\\" kelimesinin kökü değildir.\",\"Ich verstehe Deutsch \\\"Almancayı anlıyorum\\\" anlamına gelir.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts verstehen\|idx:621 (verstehen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Anlamak","study.translation":"Anlamak","study.explanation":"[\"Ideja kryesore: do të thotë të kup…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "verstehen",
  "lv": "Anlamak",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "Anlamak",
    "explanation": [
      "Ideja kryesore: do të thotë të kuptosh verstehen.",
      "Përdoret kur kupton një gjuhë, një person, një tekst ose një situatë.",
      "Burada Letonca'yı \"bilmeye\" veya \"öğrenmeye\" genellikle gerek yoktur. • Çoğunlukla könnendirler.",
      "Një shprehje shumë e njohur është ich verstehe. = E kuptoj."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Seni anlıyorum"
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "A kupton gjermanisht?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Nuk e kuptoj"
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Mund të flas gjermanisht"
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "Anlamak",
        "example": "Të kuptoj ty."
      },
      {
        "word": "können",
        "meaning": "Dije",
        "example": "Unë mund të notoj."
      },
      {
        "word": "wissen",
        "meaning": "E di të vërtetën.",
        "example": "Unë e di atë."
      },
      {
        "word": "kennen",
        "meaning": "Dije",
        "example": "Unë e njoh atë."
      }
    ],
    "tip": {
      "text": "Unutmayın: metni/kişiyi anlayın → verstehen • Bir şeyin nasıl yapılacağını bilin → können."
    },
    "important": [
      "Verstehen \"anlamak\" kelimesinin kökü değildir.",
      "Ich verstehe Deutsch \"Almancayı anlıyorum\" anlamına gelir."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "verstehen",
          "Ich verstehe"
        ],
        "red": [
          "könnendirler"
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
        "left": {}
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

## Finding 29

**Audit ID:** `LRB096-0029`
**Finding Stable ID:** `g2/a1/sq|werden|idx:657|lv and study.*|TARGET_LANGUAGE_WRONG|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `werden|idx:657`
**Field / path:** `lv and study.*`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG
**LV source (read-only):** kļūt
**DE reference (read-only):** werden
**CURRENT (captured scope):** {"lv":"Duke u bërë","study.translation":"Duke u bërë","study.explanation":"[\"Ideja kryesore: Werden në A1 do të thotë kryesisht qëndrim.\",\"Përdoret kur diçka ndryshon ose dallon.\",\"Daha sonraki Almanca'da werden geleceği ve pasif sesi belirtmek için de kullanıldı.\",\"A1 düzeyinde en önemli ifade Ich werde müde'dir. = Yorulmaya başladım.\"]","study.examples":"[{\"de\":\"Ich werde müde.\",\"lv\":\"Po filloj të ndjehem i lodhur.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"Bën të ftohët.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"Ajo bëhet mjeke.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"Yorgunum\"}]","study.comparison":"[{\"word\":\"werden\",\"meaning\":\"Duke u bërë\",\"example\":\"Unë po lodhëm.\"},{\"word\":\"sein\",\"meaning\":\"Të jesh\",\"example\":\"Unë jam i lodhur.\"},{\"word\":\"bleiben\",\"meaning\":\"Qëndro\",\"example\":\"Unë qëndroj këtu.\"},{\"word\":\"machen\",\"meaning\":\"Do / do\",\"example\":\"Unë e bëj atë.\"}]","study.tip":"{\"text\":\"Mos harroni: ndryshimi/situata do të jetë → ndryshe.\"}","study.important":"[\"Nuk është njësoj si seini i Verdenit.\",\"Ich werde dede = Kam filluar të lodhem • Ich bin dede = Jam i lodhur.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts werden\|idx:657 (werden), ceļš 'lv and study.*': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Duke u bërë","study.translation":"Duke u bërë","study.explanation":"[\"Ideja kryesore: Werden në …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "werden",
  "lv": "Duke u bërë",
  "level": "A1",
  "study": {
    "id": "a1-werden",
    "layout": "standardStudy",
    "translation": "Duke u bërë",
    "explanation": [
      "Ideja kryesore: Werden në A1 do të thotë kryesisht qëndrim.",
      "Përdoret kur diçka ndryshon ose dallon.",
      "Daha sonraki Almanca'da werden geleceği ve pasif sesi belirtmek için de kullanıldı.",
      "A1 düzeyinde en önemli ifade Ich werde müde'dir. = Yorulmaya başladım."
    ],
    "examples": [
      {
        "de": "Ich werde müde.",
        "lv": "Po filloj të ndjehem i lodhur."
      },
      {
        "de": "Es wird kalt.",
        "lv": "Bën të ftohët."
      },
      {
        "de": "Sie wird Ärztin.",
        "lv": "Ajo bëhet mjeke."
      },
      {
        "de": "Ich bin müde.",
        "lv": "Yorgunum"
      }
    ],
    "comparison": [
      {
        "word": "werden",
        "meaning": "Duke u bërë",
        "example": "Unë po lodhëm."
      },
      {
        "word": "sein",
        "meaning": "Të jesh",
        "example": "Unë jam i lodhur."
      },
      {
        "word": "bleiben",
        "meaning": "Qëndro",
        "example": "Unë qëndroj këtu."
      },
      {
        "word": "machen",
        "meaning": "Do / do",
        "example": "Unë e bëj atë."
      }
    ],
    "tip": {
      "text": "Mos harroni: ndryshimi/situata do të jetë → ndryshe."
    },
    "important": [
      "Nuk është njësoj si seini i Verdenit.",
      "Ich werde dede = Kam filluar të lodhem • Ich bin dede = Jam i lodhur."
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
        "left": {}
      },
      "important": [
        {
          "blue": [
            "Nuk"
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

## Finding 30

**Audit ID:** `LRB096-0030`
**Finding Stable ID:** `g2/a1/sq|Wetter|idx:658|lv and study.*|TARGET_LANGUAGE_WRONG|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `Wetter|idx:658`
**Field / path:** `lv and study.*`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG
**LV source (read-only):** laiks (laikapstākļi)
**DE reference (read-only):** Wetter
**CURRENT (captured scope):** {"lv":"Koha (moti)","study.translation":"Koha (moti)","study.explanation":"[\"Ideja kryesore: das Wetter do të thotë mot • Me diell, me shi, të ftohtë ose të nxehtë.\",\"Fjala \\\"laike\\\" në letonisht mund të nënkuptojë motin dhe kohën e ditës • Në gjermanisht, situata është e ndryshme.\",\"Das Wetter: Bisedo me Wie ist das Wetter heute? për motin në natyrë.\",\"Das Wetter shpesh përdoret në lidhje me fjalë të tilla si i nxehtë, viç, dhe kështu me radhë në fjali.\",\"Die Zeit ile karıştırılmamalıdır • Bir an veya fırsat olarak zamandır (Ich habe keine Zeit).\"]","study.examples":"[{\"de\":\"Wie ist das Wetter heute?\",\"lv\":\"Sa është ora sot?\"},{\"de\":\"Das Wetter ist schön.\",\"lv\":\"Ditë e bukur, sot.\"},{\"de\":\"Das Wetter ist schlecht.\",\"lv\":\"Hava kötü.\"},{\"de\":\"Im Winter ist das Wetter oft kalt.\",\"lv\":\"Zakonisht është ftohtë në dimër.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Zamandan bahsediyoruz.\"},{\"de\":\"Morgen wird das Wetter besser.\",\"lv\":\"E di, por do t'a shohësh që nesër do shkojë mirë.\"}]","study.comparison":"[{\"word\":\"Wetter\",\"meaning\":\"Hava koşulları\",\"example\":\"Motri është i bukur.\"},{\"word\":\"Zeit\",\"meaning\":\"Zaman (an)\",\"example\":\"Unë nuk kam kohë.\"},{\"word\":\"Regen\",\"meaning\":\"Shiu\",\"example\":\"Ka shumë shi.\"},{\"word\":\"Sonne\",\"meaning\":\"Güneş\",\"example\":\"Dielli ndriçon.\"}]","study.tip":"[\"Güneşten, yağmurdan veya dışarıdaki sıcaklıktan bahsederken das Wetter'ı kullanın.\",\"Të kujtohet: Wie ist das Wetter? = Sa është ora? (jo koha).\"]","study.important":"[\"Das Wetter = moti, jo koha e orës.\",\"Die Zeit = bir an veya şans olarak zaman - başka bir A1 kartı.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Wetter\|idx:658 (Wetter), ceļš 'lv and study.*': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Koha (moti)","study.translation":"Koha (moti)","study.explanation":"[\"Ideja kryesore: das Wetter…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Wetter",
  "de_article": "das",
  "lv": "Koha (moti)",
  "level": "A1",
  "study": {
    "id": "a1-wetter",
    "layout": "standardStudy",
    "translation": "Koha (moti)",
    "explanation": [
      "Ideja kryesore: das Wetter do të thotë mot • Me diell, me shi, të ftohtë ose të nxehtë.",
      "Fjala \"laike\" në letonisht mund të nënkuptojë motin dhe kohën e ditës • Në gjermanisht, situata është e ndryshme.",
      "Das Wetter: Bisedo me Wie ist das Wetter heute? për motin në natyrë.",
      "Das Wetter shpesh përdoret në lidhje me fjalë të tilla si i nxehtë, viç, dhe kështu me radhë në fjali.",
      "Die Zeit ile karıştırılmamalıdır • Bir an veya fırsat olarak zamandır (Ich habe keine Zeit)."
    ],
    "examples": [
      {
        "de": "Wie ist das Wetter heute?",
        "lv": "Sa është ora sot?"
      },
      {
        "de": "Das Wetter ist schön.",
        "lv": "Ditë e bukur, sot."
      },
      {
        "de": "Das Wetter ist schlecht.",
        "lv": "Hava kötü."
      },
      {
        "de": "Im Winter ist das Wetter oft kalt.",
        "lv": "Zakonisht është ftohtë në dimër."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Zamandan bahsediyoruz."
      },
      {
        "de": "Morgen wird das Wetter besser.",
        "lv": "E di, por do t'a shohësh që nesër do shkojë mirë."
      }
    ],
    "comparison": [
      {
        "word": "Wetter",
        "meaning": "Hava koşulları",
        "example": "Motri është i bukur."
      },
      {
        "word": "Zeit",
        "meaning": "Zaman (an)",
        "example": "Unë nuk kam kohë."
      },
      {
        "word": "Regen",
        "meaning": "Shiu",
        "example": "Ka shumë shi."
      },
      {
        "word": "Sonne",
        "meaning": "Güneş",
        "example": "Dielli ndriçon."
      }
    ],
    "tip": [
      "Güneşten, yağmurdan veya dışarıdaki sıcaklıktan bahsederken das Wetter'ı kullanın.",
      "Të kujtohet: Wie ist das Wetter? = Sa është ora? (jo koha)."
    ],
    "important": [
      "Das Wetter = moti, jo koha e orës.",
      "Die Zeit = bir an veya şans olarak zaman - başka bir A1 kartı."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Wetter",
          "Zeit"
        ],
        "purple": [
          "laike"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Wetter"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wetter"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wetter"
            ]
          },
          "lv": {}
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Wetter"
            ]
          },
          "lv": {}
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
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "Wetter"
            ]
          },
          "meaning": {},
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
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "Regen"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          ]
        }
      ]
    }
  }
}
```

---

## Finding 31

**Audit ID:** `LRB096-0031`
**Finding Stable ID:** `g2/a1/sq|wie|idx:660|lv and study.*|TARGET_LANGUAGE_WRONG|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `wie|idx:660`
**Field / path:** `lv and study.*`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG
**LV source (read-only):** kā • cik
**DE reference (read-only):** wie
**CURRENT (captured scope):** {"lv":"Nasıl • Ne kadar","study.translation":"Nasıl • Ne kadar","study.explanation":"[\"Ideja kryesore: bën pyetje në lidhje me llojin ose cilësinë (si) dhe sasinë ose numrin (sa) në varësi të kontekstit.\",\"Wie sam (Wie geht?) pyet për udhëzime - si në letonisht.\",\"Wie + sıfat (wie viel, wie alt, wie lange) Letonca'da miktar, yaş veya süreyi (ne kadar) sorar.\",\"Wie viel(e) do të thotë sa vjet • Wie sub do të thotë sa vjet • Wie lange do të thotë sa kohë.\",\"Karşılaştırmalarda wie benzer anlamına gelir (yani brüt wie = kadar büyük).\"]","study.examples":"[{\"de\":\"Wie geht es dir?\",\"lv\":\"Si jeni\"},{\"de\":\"Wie heißt du?\",\"lv\":\"-Emri juaj?\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"Sa kohë...\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"- Sa vjeç je?\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"Bu film ne kadar sürüyor?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"Ai është po aq i gjatë sa i ati.\"}]","study.tip":"[\"E di vetë = si (stil) • E di + mbiemër (viel/nën/lange) = sa (sasi).\",\"Karşılaştırma için, yani... bilir = nasıl... nasıl.\"]","study.important":"[\"Wie viel(e) = sa • Wie alt = sa vite • Wie lange = sa kohë.\",\"Ai e njeh veten (Ai e di...?) zakonisht = si, jo sa.\",\"E rreme: Sa vjeç jeni? → E vërtetë: Si jeni? (Wie geht's?)\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts wie\|idx:660 (wie), ceļš 'lv and study.*': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Nasıl • Ne kadar","study.translation":"Nasıl • Ne kadar","study.explanation":"[\"Ideja kryesore: …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wie",
  "lv": "Nasıl • Ne kadar",
  "level": "A1",
  "study": {
    "id": "a1-wie",
    "layout": "standardStudy",
    "translation": "Nasıl • Ne kadar",
    "explanation": [
      "Ideja kryesore: bën pyetje në lidhje me llojin ose cilësinë (si) dhe sasinë ose numrin (sa) në varësi të kontekstit.",
      "Wie sam (Wie geht?) pyet për udhëzime - si në letonisht.",
      "Wie + sıfat (wie viel, wie alt, wie lange) Letonca'da miktar, yaş veya süreyi (ne kadar) sorar.",
      "Wie viel(e) do të thotë sa vjet • Wie sub do të thotë sa vjet • Wie lange do të thotë sa kohë.",
      "Karşılaştırmalarda wie benzer anlamına gelir (yani brüt wie = kadar büyük)."
    ],
    "examples": [
      {
        "de": "Wie geht es dir?",
        "lv": "Si jeni"
      },
      {
        "de": "Wie heißt du?",
        "lv": "-Emri juaj?"
      },
      {
        "de": "Wie viel kostet das?",
        "lv": "Sa kohë..."
      },
      {
        "de": "Wie alt bist du?",
        "lv": "- Sa vjeç je?"
      },
      {
        "de": "Wie lange dauert der Film?",
        "lv": "Bu film ne kadar sürüyor?"
      },
      {
        "de": "Er ist so groß wie sein Vater.",
        "lv": "Ai është po aq i gjatë sa i ati."
      }
    ],
    "tip": [
      "E di vetë = si (stil) • E di + mbiemër (viel/nën/lange) = sa (sasi).",
      "Karşılaştırma için, yani... bilir = nasıl... nasıl."
    ],
    "important": [
      "Wie viel(e) = sa • Wie alt = sa vite • Wie lange = sa kohë.",
      "Ai e njeh veten (Ai e di...?) zakonisht = si, jo sa.",
      "E rreme: Sa vjeç jeni? → E vërtetë: Si jeni? (Wie geht's?)"
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

---

## Finding 32

**Audit ID:** `LRB096-0032`
**Finding Stable ID:** `g2/a1/sq|wissen|idx:311|lv/study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `wissen|idx:311`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** zināt
**DE reference (read-only):** wissen
**CURRENT (captured scope):** {"lv":"Dije","study.translation":"Dije","study.explanation":"[\"Ideja kryesore: të dish një fakt, përgjigje ose informacion.\",\"Wissen në thelb do të thotë: njohuri/e vërtetë.\",\"Shpesh karakterizohet nga: përgjigje, të dhëna.\",\"Ne përdorim Wissen kur e di një fakt, një përgjigje ose informacion.\"]","study.examples":"[{\"de\":\"Ich weiß, wo er wohnt.\",\"lv\":\"E di ku jeton.\"},{\"de\":\"Woher wissen Sie das?\",\"lv\":\"Si e kuptove këtë?\"},{\"de\":\"Ich weiß die Antwort.\",\"lv\":\"E di pergjigjen.\"}]","study.comparison":"[{\"word\":\"wissen\",\"meaning\":\"Njohja (e vërteta, njohuria)\",\"example\":\"Ich weiß, wo er wohnt. – E di ku jeton.\"},{\"word\":\"kennen\",\"meaning\":\"Njihu (person, vend, gjë)\",\"example\":\"Ich kenne die Stadt. – E njoh këtë qytet.\"}]","study.tip":"[\"Wissen = të dish\",\"Përdorni WISEN kur konteksti i përshtatet këtij kuptimi.\"]","study.important":"[\"Wissen = njohja e një të vërtete.\",\"Wissen = për të ditur.\",\"Zbulo një fakt, përgjigje ose informacion.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts wissen\|idx:311 (wissen), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Dije","study.translation":"Dije","study.explanation":"[\"Ideja kryesore: të dish një fakt, përgji…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wissen",
  "lv": "Dije",
  "level": "A1",
  "id": "a1-wissen",
  "study": {
    "id": "a1-wissen-study",
    "layout": "standardStudy",
    "translation": "Dije",
    "explanation": [
      "Ideja kryesore: të dish një fakt, përgjigje ose informacion.",
      "Wissen në thelb do të thotë: njohuri/e vërtetë.",
      "Shpesh karakterizohet nga: përgjigje, të dhëna.",
      "Ne përdorim Wissen kur e di një fakt, një përgjigje ose informacion."
    ],
    "examples": [
      {
        "de": "Ich weiß, wo er wohnt.",
        "lv": "E di ku jeton."
      },
      {
        "de": "Woher wissen Sie das?",
        "lv": "Si e kuptove këtë?"
      },
      {
        "de": "Ich weiß die Antwort.",
        "lv": "E di pergjigjen."
      }
    ],
    "comparison": [
      {
        "word": "wissen",
        "meaning": "Njohja (e vërteta, njohuria)",
        "example": "Ich weiß, wo er wohnt. – E di ku jeton."
      },
      {
        "word": "kennen",
        "meaning": "Njihu (person, vend, gjë)",
        "example": "Ich kenne die Stadt. – E njoh këtë qytet."
      }
    ],
    "tip": [
      "Wissen = të dish",
      "Përdorni WISEN kur konteksti i përshtatet këtij kuptimi."
    ],
    "important": [
      "Wissen = njohja e një të vërtete.",
      "Wissen = për të ditur.",
      "Zbulo një fakt, përgjigje ose informacion."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "wissen"
        ]
      },
      "examples": [
        {
          "de": {},
          "lv": {}
        },
        {
          "de": {
            "green": [
              "wissen",
              "wissen"
            ]
          },
          "lv": {}
        },
        {
          "de": {},
          "lv": {}
        }
      ],
      "tip": [
        {}
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

## Finding 33

**Audit ID:** `LRB096-0033`
**Finding Stable ID:** `g2/a1/sq|Zeit|idx:699|lv; study.translation; study.explanation; study.examples; study.tip; study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `Zeit|idx:699`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** laiks (brīdis / laika posms)
**DE reference (read-only):** Zeit
**CURRENT (captured scope):** {"lv":"Zaman (an/zaman dilimi)","study.translation":"Zaman (an/zaman dilimi)","study.explanation":"[\"Ideja kryesore: Koha si koncept • Një moment, një shans, një kornizë kohore.\",\"Mbi të gjitha, Die Zeit është një moment, një shans.\",\"Genellikle şu şekilde karakterize edilir: soyut bir kavram.\",\"Die Zeit është një koncept abstrakt • Koha, momenti ose shansi (ich habe keine Zeit).\"]","study.examples":"[{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Nuk ka kohë të mjaftueshme.\"},{\"de\":\"Ich habe keine Zeit.\",\"lv\":\"Nuk ka kohë të mjaftueshme.\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Ke një sekondë?\"},{\"de\":\"Die Zeit vergeht schnell.\",\"lv\":\"Koha po mbaronte.\"}]","study.tip":"[\"Koha si koncept • Një moment është një shans, një pjesë e kohës.\",\"Bağlam bu anlama uygun olduğunda die Zeit'ı kullanın.\"]","study.important":"[\"Die Zeit: Kontrolloni përmbajtjen para përdorimit.\",\"Die Zeit: Kontrolloni përmbajtjen para përdorimit.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Zeit\|idx:699 (Zeit), ceļš 'lv; study.translation; study.explanation; study.examples; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Zaman (an/zaman dilimi)","study.translation":"Zaman (an/zaman dilimi)","study.explanation":"[\"Id…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "Zaman (an/zaman dilimi)",
  "level": "A1",
  "study": {
    "id": "a1-zeit",
    "layout": "standardStudy",
    "translation": "Zaman (an/zaman dilimi)",
    "explanation": [
      "Ideja kryesore: Koha si koncept • Një moment, një shans, një kornizë kohore.",
      "Mbi të gjitha, Die Zeit është një moment, një shans.",
      "Genellikle şu şekilde karakterize edilir: soyut bir kavram.",
      "Die Zeit është një koncept abstrakt • Koha, momenti ose shansi (ich habe keine Zeit)."
    ],
    "examples": [
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Nuk ka kohë të mjaftueshme."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "Nuk ka kohë të mjaftueshme."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Ke një sekondë?"
      },
      {
        "de": "Die Zeit vergeht schnell.",
        "lv": "Koha po mbaronte."
      }
    ],
    "tip": [
      "Koha si koncept • Një moment është një shans, një pjesë e kohës.",
      "Bağlam bu anlama uygun olduğunda die Zeit'ı kullanın."
    ],
    "important": [
      "Die Zeit: Kontrolloni përmbajtjen para përdorimit.",
      "Die Zeit: Kontrolloni përmbajtjen para përdorimit."
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

## Finding 34

**Audit ID:** `LRB096-0034`
**Finding Stable ID:** `g2/a1/sq|zu|idx:668|lv and study.*|TARGET_LANGUAGE_WRONG|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `zu|idx:668`
**Field / path:** `lv and study.*`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG
**LV source (read-only):** uz • pie
**DE reference (read-only):** zu
**CURRENT (captured scope):** {"lv":" • Deri në orë","study.translation":" • Deri në orë","study.explanation":"[\"Ideja kryesore: zu shpesh do të thotë në ose dhjetë, por ajo gjithashtu luan një rol me matësin.\",\"Kişiler ve kurumlar söz konusu olduğunda zu çoğunlukla içeri veya içeri anlamına gelir.\",\"Kur bëhet fjalë për mbiemrat, zu mund të nënkuptojë gjithashtu.\",\"Zu + ndihmon në krijimin e pasigurisë në formimin e pasigurisë: zu lernen, zu gehen.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Po shkoj te mjeku.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"Jemi duke shkuar në shkollë.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"Çok pahalı.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"Nuk kam kohë të studioj.\"}]","study.comparison":"[{\"word\":\"zu\",\"meaning\":\"To / in / too / mastar\",\"example\":\"Unë shkoj te doktori.\"},{\"word\":\"nach\",\"meaning\":\"Me qytete/shtete\",\"example\":\"Unë shkoj në Berlini.\"},{\"word\":\"in\",\"meaning\":\"Ne toke!\",\"example\":\"Unë shkoj në shkollë.\"},{\"word\":\"bei\",\"meaning\":\"Birinin/iş yerinde\",\"example\":\"Unë jam tek Anna.\"}]","study.tip":"{\"text\":\"Mos harroni: vizitoni një mjek → zum Arzt • Shumë e shtrenjtë → zu teuer.\"}","study.important":"[\"Zu'nun birçok kullanımı vardır, bu nedenle her zaman tasarıma dikkat edin.\",\"Zu teuer nuk do të thotë \\\"shumë e shtrenjtë\\\", por \\\"shumë e shtrenjtë\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts zu\|idx:668 (zu), ceļš 'lv and study.*': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":" • Deri në orë","study.translation":" • Deri në orë","study.explanation":"[\"Ideja kryesore: zu s…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "zu",
  "lv": " • Deri në orë",
  "level": "A1",
  "study": {
    "id": "a1-zu",
    "layout": "standardStudy",
    "translation": " • Deri në orë",
    "explanation": [
      "Ideja kryesore: zu shpesh do të thotë në ose dhjetë, por ajo gjithashtu luan një rol me matësin.",
      "Kişiler ve kurumlar söz konusu olduğunda zu çoğunlukla içeri veya içeri anlamına gelir.",
      "Kur bëhet fjalë për mbiemrat, zu mund të nënkuptojë gjithashtu.",
      "Zu + ndihmon në krijimin e pasigurisë në formimin e pasigurisë: zu lernen, zu gehen."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Po shkoj te mjeku."
      },
      {
        "de": "Wir gehen zur Schule.",
        "lv": "Jemi duke shkuar në shkollë."
      },
      {
        "de": "Das ist zu teuer.",
        "lv": "Çok pahalı."
      },
      {
        "de": "Ich habe keine Zeit zu lernen.",
        "lv": "Nuk kam kohë të studioj."
      }
    ],
    "comparison": [
      {
        "word": "zu",
        "meaning": "To / in / too / mastar",
        "example": "Unë shkoj te doktori."
      },
      {
        "word": "nach",
        "meaning": "Me qytete/shtete",
        "example": "Unë shkoj në Berlini."
      },
      {
        "word": "in",
        "meaning": "Ne toke!",
        "example": "Unë shkoj në shkollë."
      },
      {
        "word": "bei",
        "meaning": "Birinin/iş yerinde",
        "example": "Unë jam tek Anna."
      }
    ],
    "tip": {
      "text": "Mos harroni: vizitoni një mjek → zum Arzt • Shumë e shtrenjtë → zu teuer."
    },
    "important": [
      "Zu'nun birçok kullanımı vardır, bu nedenle her zaman tasarıma dikkat edin.",
      "Zu teuer nuk do të thotë \"shumë e shtrenjtë\", por \"shumë e shtrenjtë\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "zu",
          "zu lernen",
          "zu gehen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "zum Arzt"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zur Schule"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zu teuer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "zu lernen"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "zu"
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
              "nach"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {
          "blue": [
            "zu"
          ]
        },
        {
          "blue": [
            "zu teuer"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 35

**Audit ID:** `LRB096-0035`
**Finding Stable ID:** `g2/a1/sq|Zug|idx:671|lv and study.*|TARGET_LANGUAGE_WRONG|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `Zug|idx:671`
**Field / path:** `lv and study.*`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_WRONG
**LV source (read-only):** vilciens
**DE reference (read-only):** Zug
**CURRENT (captured scope):** {"lv":"Tren","study.translation":"Tren","study.explanation":"[\"Ideja kryesore: der Zug në nivelin A1 kryesisht do të thotë tren.\",\"Përdoret në situatat e përditshme të drejtimit, mbërritjes dhe nisjes.\",\"Në kuptime të tjera, Zug mund të jetë një shëtitje, një skicë ose një funksion, por këto nuk janë kuptimet kryesore të A1.\",\"Fraza shumë të njohura janë mit dem Zug fahren dhe Der Zug kommt.\"]","study.examples":"[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"Tren sekizde varır.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"Trenle seyahat ediyorum\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"Treni është plot.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"Otobüs daha sonra gelecek.\"}]","study.comparison":"[{\"word\":\"der Zug\",\"meaning\":\"Tren\",\"example\":\"Treni vjen.\"},{\"word\":\"die Bahn\",\"meaning\":\"Udhëtim me hekurudhë/tren\",\"example\":\"Unë shkoj me trenin.\"},{\"word\":\"der Bus\",\"meaning\":\"Një autobus.\",\"example\":\"Autobusi vjen.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"Pastaj të shëndoshët mund të vraponin, të humbin peshë dhe të ishin të shëndetshëm.\",\"example\":\"Tramvaji është këtu.\"}]","study.tip":"{\"text\":\"Mos harroni: një tren i caktuar → thërret Zug.\"}","study.important":"[\"Der Zug në titull duhet të lexohet si \\\"tren\\\".\",\"Nuk ka nevojë për kuptime më pak të zakonshme në titullin kryesor A1.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Zug\|idx:671 (Zug), ceļš 'lv and study.*': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Tren","study.translation":"Tren","study.explanation":"[\"Ideja kryesore: der Zug në nivelin A1 kr…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "Tren",
  "level": "A1",
  "study": {
    "id": "a1-zug",
    "layout": "standardStudy",
    "translation": "Tren",
    "explanation": [
      "Ideja kryesore: der Zug në nivelin A1 kryesisht do të thotë tren.",
      "Përdoret në situatat e përditshme të drejtimit, mbërritjes dhe nisjes.",
      "Në kuptime të tjera, Zug mund të jetë një shëtitje, një skicë ose një funksion, por këto nuk janë kuptimet kryesore të A1.",
      "Fraza shumë të njohura janë mit dem Zug fahren dhe Der Zug kommt."
    ],
    "examples": [
      {
        "de": "Der Zug kommt um acht Uhr.",
        "lv": "Tren sekizde varır."
      },
      {
        "de": "Ich fahre mit dem Zug.",
        "lv": "Trenle seyahat ediyorum"
      },
      {
        "de": "Der Zug ist voll.",
        "lv": "Treni është plot."
      },
      {
        "de": "Der Bus kommt später.",
        "lv": "Otobüs daha sonra gelecek."
      }
    ],
    "comparison": [
      {
        "word": "der Zug",
        "meaning": "Tren",
        "example": "Treni vjen."
      },
      {
        "word": "die Bahn",
        "meaning": "Udhëtim me hekurudhë/tren",
        "example": "Unë shkoj me trenin."
      },
      {
        "word": "der Bus",
        "meaning": "Një autobus.",
        "example": "Autobusi vjen."
      },
      {
        "word": "die Straßenbahn",
        "meaning": "Pastaj të shëndoshët mund të vraponin, të humbin peshë dhe të ishin të shëndetshëm.",
        "example": "Tramvaji është këtu."
      }
    ],
    "tip": {
      "text": "Mos harroni: një tren i caktuar → thërret Zug."
    },
    "important": [
      "Der Zug në titull duhet të lexohet si \"tren\".",
      "Nuk ka nevojë për kuptime më pak të zakonshme në titullin kryesor A1."
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
          "lv": {}
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
          "meaning": {},
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
              "Pastaj"
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
        "left": {}
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

## Finding 36

**Audit ID:** `LRB096-0036`
**Finding Stable ID:** `g2/a1/sr|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-SR-0117`
**Lang:** sr
**Card:** `a1-uhr`
**Field / path:** `a1.card.a1-uhr.study.examples[5].native`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “Uhr” at a1.card.a1-uhr.study.examples[5].native against Latvian “pulkstenis”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
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

## Finding 37

**Audit ID:** `LRB096-0037`
**Finding Stable ID:** `g2/a1/sr|also|idx:26|lv; study.translation; study.examples[].lv; study.comparison[].meaning/example|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0001`
**Lang:** sr
**Card:** `also|idx:26`
**Field / path:** `lv; study.translation; study.examples[].lv; study.comparison[].meaning/example`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** tātad
**DE reference (read-only):** also
**CURRENT (captured scope):** {"lv":"Ето защо","study.translation":"Ето защо","study.examples[].lv":null,"study.comparison[].meaning":null,"example":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “also” at lv; study.translation; study.examples[].lv; study.comparison[].meaning/example against Latvian “tātad”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "also",
  "lv": "Ето защо",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "Ето защо",
    "explanation": "Koristi se za izvođenje zaključaka ili prikazivanje rezultata. Toa znači \"zatoa\", \"zatoa\".",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Врне дожд, затоа останувам дома."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Ti si bolestan, pa ne ideš na posao."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Учев многу и сега разбирам."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "Torej • Zato",
        "example": "Es regnet, also bleibe ich zu Hause. – Врне дожд, затоа останувам дома."
      },
      {
        "word": "auch",
        "meaning": "-Tudi tebe, tudi tebe.",
        "example": "Ich komme auch. – Ќе дојдам и јас."
      },
      {
        "word": "deshalb",
        "meaning": "Ето защо",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Врне дожд, затоа останувам дома."
      }
    ],
    "tip": {
      "text": "Запомнете: заклучок → исто така."
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
            "Летонското"
          ]
        }
      ]
    },
    "important": [
      "Iz tega izhaja tudi zaključek: iz navedenega izhaja naslednja misel.",
      "Летонското „така“ често може да биде и дешалб."
    ]
  }
}
```

---

## Finding 38

**Audit ID:** `LRB096-0038`
**Finding Stable ID:** `g2/a1/sr|Appetit|idx:689|lv; study.translation; study.explanation; study.examples; study.tip; study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0004`
**Lang:** sr
**Card:** `Appetit|idx:689`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** apetīte
**DE reference (read-only):** Appetit
**CURRENT (captured scope):** {"lv":"Апетитот","study.translation":"Апетитот","study.explanation":"[\"Основна идея: Усещането за желание за ядене. само единствено число - без множествено число.\",\"Der Appetit u osnovi znači: želja za jelom.\",\"Често описва: чувство (само в единствено число).\",\"Der Appetit има само едно значение: апетит.\",\"На А1 ниво често се појавуваат заедно, на пример: Гутен Апетит!\"]","study.examples":"[{\"de\":\"Guten Appetit!\",\"lv\":\"Dober tek!\"},{\"de\":\"Guten Appetit!\",\"lv\":\"Dober tek!\"},{\"de\":\"Ich habe keinen Appetit.\",\"lv\":\"Нямам апетит.\"}]","study.tip":"[\"Der Appetit = Apetit\",\"Koristite der Appetit kada kontekst odgovara ovom značenju.\"]","study.important":"[\"Der Appetit се јавува само во еднина.\",\"Неправилно: die Appetite → Правилно: der Appetit.\",\"Netačno: Ich bin Appetit. → Tačno: Ich habe Appetit.\",\"Сензација: der Appetit.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “Appetit” (lv; study.translation; study.explanation; study.examples; study.tip; study.important) against Latvian “apetīte”. Production begins “{"lv":"Апетитот","study.translation":"Апетитот","study.explanation":"[\"Основна идея: Усещането за желание за ядене. са…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Appetit",
  "de_article": "der",
  "lv": "Апетитот",
  "level": "A1",
  "study": {
    "id": "a1-appetit",
    "layout": "standardStudy",
    "translation": "Апетитот",
    "explanation": [
      "Основна идея: Усещането за желание за ядене. само единствено число - без множествено число.",
      "Der Appetit u osnovi znači: želja za jelom.",
      "Често описва: чувство (само в единствено число).",
      "Der Appetit има само едно значение: апетит.",
      "На А1 ниво често се појавуваат заедно, на пример: Гутен Апетит!"
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
        "lv": "Нямам апетит."
      }
    ],
    "tip": [
      "Der Appetit = Apetit",
      "Koristite der Appetit kada kontekst odgovara ovom značenju."
    ],
    "important": [
      "Der Appetit се јавува само во еднина.",
      "Неправилно: die Appetite → Правилно: der Appetit.",
      "Netačno: Ich bin Appetit. → Tačno: Ich habe Appetit.",
      "Сензација: der Appetit."
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
        {
          "purple": [
            "Appetit"
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

## Finding 39

**Audit ID:** `LRB096-0039`
**Finding Stable ID:** `g2/a1/sr|auch|idx:48|lv; study.translation; study.explanation; study.examples[].lv; study.tip; study.important|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0002`
**Lang:** sr
**Card:** `auch|idx:48`
**Field / path:** `lv; study.translation; study.explanation; study.examples[].lv; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** arī
**DE reference (read-only):** auch
**CURRENT (captured scope):** {"lv":"-Tudi tebe, tudi tebe.","study.translation":"-Tudi tebe, tudi tebe.","study.explanation":"[\"Glavna ideja: Najčešći i neutralni \\\"također\\\".\",\"Ouch v bistvu pomeni: preprosto \\\"preveč\\\".\",\"Pogosto je značilno: dodajanje.\",\"Auch е најчестиот збор што значи „исто така“.\"]","study.examples[].lv":null,"study.tip":"[\"O = tudi\",\"Uporabite auch, ko se kontekst ujema s to vrednostjo.\"]","study.important":"[\"Ich auch wünsche Ihnen - neispravan red riječi.\",\"Ah = također.\",\"Погрешно: Ich auch wünsche Ihnen einen schönen Tag.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “auch” at lv; study.translation; study.explanation; study.examples[].lv; study.tip; study.important against Latvian “arī”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "auch",
  "lv": "-Tudi tebe, tudi tebe.",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "-Tudi tebe, tudi tebe.",
    "explanation": [
      "Glavna ideja: Najčešći i neutralni \"također\".",
      "Ouch v bistvu pomeni: preprosto \"preveč\".",
      "Pogosto je značilno: dodajanje.",
      "Auch е најчестиот збор што значи „исто така“."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Ќе дојдам и јас."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "Ќе дојдам и јас"
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "Тя също работи тук."
      }
    ],
    "tip": [
      "O = tudi",
      "Uporabite auch, ko se kontekst ujema s to vrednostjo."
    ],
    "important": [
      "Ich auch wünsche Ihnen - neispravan red riječi.",
      "Ah = također.",
      "Погрешно: Ich auch wünsche Ihnen einen schönen Tag."
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

## Finding 40

**Audit ID:** `LRB096-0040`
**Finding Stable ID:** `g2/a1/sr|auf|idx:49|lv; study.translation; study.examples[].lv; study.comparison[].meaning/example; study.important|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0003`
**Lang:** sr
**Card:** `auf|idx:49`
**Field / path:** `lv; study.translation; study.examples[].lv; study.comparison[].meaning/example; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** uz
**DE reference (read-only):** auf
**CURRENT (captured scope):** {"lv":"ДО","study.translation":"ДО","study.examples[].lv":null,"study.comparison[].meaning":null,"example":null,"study.important":"[\"Auf nije samo \\\"uključen\\\". To često znači kretanje ili boravak na/iznad površine.\",\"Ako je nešto blizu vertikalne površine, trebat će vam • Ako je unutra, onda morate ući.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “auf” at lv; study.translation; study.examples[].lv; study.comparison[].meaning/example; study.important against Latvian “uz”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "auf",
  "lv": "ДО",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "ДО",
    "explanation": "Koristi se za označavanje smjera prema lokaciji ili vrhu površine.",
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "Ја ставив книгата на масата."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "Одиме на планина."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "Mačka skoči na kavč."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "До (на повърхността или нагоре)",
        "example": "Ich stelle das Glas auf den Tisch. – Kozarec sem položila na mizo."
      },
      {
        "word": "an",
        "meaning": "Вклучено (вертикална површина)",
        "example": "Ich hänge das Bild an die Wand. – Es carinu bildi pita sienas."
      },
      {
        "word": "in",
        "meaning": "Unutra",
        "example": "Ich lege das Buch in die Tasche. – Stavio sam knjigu u torbu."
      }
    ],
    "tip": {
      "text": "Zapamtite: na površini/iznad → auf."
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
              "an",
              "die"
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
      "Auf nije samo \"uključen\". To često znači kretanje ili boravak na/iznad površine.",
      "Ako je nešto blizu vertikalne površine, trebat će vam • Ako je unutra, onda morate ući."
    ]
  }
}
```

---

## Finding 41

**Audit ID:** `LRB096-0041`
**Finding Stable ID:** `g2/a1/sr|aufs|idx:60|lv; study.translation; study.explanation; study.examples[].lv; study.comparison[].meaning/example; study.important|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0005`
**Lang:** sr
**Card:** `aufs|idx:60`
**Field / path:** `lv; study.translation; study.explanation; study.examples[].lv; study.comparison[].meaning/example; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** uz
**DE reference (read-only):** aufs
**CURRENT (captured scope):** {"lv":"До *къде*?","study.translation":"До *къде*?","study.explanation":"[\"Aufs je okrajšava za predlog auf in člen das.\",\"Polna oblika: auf das (kje?).\",\"Се користи кога дејството укажува на насоката кон одредена работа или површина - одговара на прашањето каде?\",\"Pogosto se uporablja na poti: za vzpenjanje, sedenje, spuščanje, vožnjo do nečesa.\",\"Во разговорниот и секојдневниот говор, aufs речиси секогаш се користи наместо целосниот auf das.\"]","study.examples[].lv":null,"study.comparison[].meaning":null,"example":null,"study.important":"[\"Aufs = auf das, samo so imenka od kog bilo roda, kade? u krivinama.\",\"Odgovori kje? - Premik na določeno mesto ali območje.\",\"На хоризонтална површина auf den често се користи наместо aufs.\",\"Да не се меша со „in“ (на ѕидот) или „in“ (внатре во собата).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “aufs” at lv; study.translation; study.explanation; study.examples[].lv; study.comparison[].meaning/example; study.important against Latvian “uz”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aufs",
  "lv": "До *къде*?",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "До *къде*?",
    "explanation": [
      "Aufs je okrajšava za predlog auf in člen das.",
      "Polna oblika: auf das (kje?).",
      "Се користи кога дејството укажува на насоката кон одредена работа или површина - одговара на прашањето каде?",
      "Pogosto se uporablja na poti: za vzpenjanje, sedenje, spuščanje, vožnjo do nečesa.",
      "Во разговорниот и секојдневниот говор, aufs речиси секогаш се користи наместо целосниот auf das."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "Idemo na krov"
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "Таа седи на каучот."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Одиме во селото."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "Vrečko položite na posteljo."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "Се качува на коњот."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "Ставете ја книгата на полица."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "Požurite na brod!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "Na zabavo greva."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "За конкретен случај (според)",
        "example": "aufs Dach – Уз џумта"
      },
      {
        "word": "auf",
        "meaning": "На површината или нагоре",
        "example": "auf den Tisch – Sa galdom"
      },
      {
        "word": "an",
        "meaning": "Na okomitoj površini",
        "example": "an die Wand – Pitta sienas"
      },
      {
        "word": "ins",
        "meaning": "Unutra",
        "example": "ins Zimmer – V sobi"
      },
      {
        "word": "zum",
        "meaning": "Za/kome (kome?)",
        "example": "zum Arzt – Посетете лекар"
      }
    ],
    "tip": [
      "Запомнете: auf + das → aufs (каде?, каде?).",
      "Polni auf das se v pogovoru skoraj nikoli ne izgovarja - auf se uporablja."
    ],
    "important": [
      "Aufs = auf das, samo so imenka od kog bilo roda, kade? u krivinama.",
      "Odgovori kje? - Premik na določeno mesto ali območje.",
      "На хоризонтална површина auf den често се користи наместо aufs.",
      "Да не се меша со „in“ (на ѕидот) или „in“ (внатре во собата)."
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
        {},
        {
          "red": [
            "in"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 42

**Audit ID:** `LRB096-0042`
**Finding Stable ID:** `g2/a1/sr|aus|idx:57|lv; study.translation; study.examples[].lv; study.comparison[].meaning/example; study.important|TARGET_LANGUAGE_MIX|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0004`
**Lang:** sr
**Card:** `aus|idx:57`
**Field / path:** `lv; study.translation; study.examples[].lv; study.comparison[].meaning/example; study.important`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MIX
**LV source (read-only):** no
**DE reference (read-only):** aus
**CURRENT (captured scope):** {"lv":"Од • Од","study.translation":"Од • Од","study.examples[].lv":null,"study.comparison[].meaning":null,"example":null,"study.important":"[\"Au običajno pomeni premikanje od znotraj ali od začetka.\",\"Kada se govori samo o početnoj tački u vremenu ili mjestu, često se koristi ab.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “aus” at lv; study.translation; study.examples[].lv; study.comparison[].meaning/example; study.important against Latvian “no”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aus",
  "lv": "Од • Од",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "Од • Од",
    "explanation": "Koristi se kada nešto dolazi iznutra, izlazi ili ukazuje na curenje.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Ja sam iz Njemačke."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Той напуска дома си."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Ја вадам книгата од торбата."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "Unutra, iz",
        "example": "aus dem Haus – Од дома"
      },
      {
        "word": "von",
        "meaning": "Од личност, место, површина",
        "example": "von meinem Freund – Ali moj prijatelju"
      },
      {
        "word": "ab",
        "meaning": "Почнувајќи од момент или време",
        "example": "ab Montag – Od ponedeljka"
      }
    ],
    "tip": {
      "text": "Zapomnite: programi → aus."
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
            ],
            "purple": [
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
        "left": {
          "green": [
            "aus"
          ]
        }
      },
      "important": [
        {
          "green": [
            "au"
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
      "Au običajno pomeni premikanje od znotraj ali od začetka.",
      "Kada se govori samo o početnoj tački u vremenu ili mjestu, često se koristi ab."
    ]
  }
}
```

---

## Finding 43

**Audit ID:** `LRB096-0043`
**Finding Stable ID:** `g2/a1/sr|baden|idx:68|lv, study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0001`
**Lang:** sr
**Card:** `baden|idx:68`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** peldēties
**DE reference (read-only):** baden
**CURRENT (captured scope):** {"lv":"Пливање","study.translation":"Пливање","study.explanation":"[\"Osnovna ideja: Baden znači kupati se, biti u vodi ili uživati ​​u vodi.\",\"Baden se uporablja, ko govorimo o počitnicah v vodi, jezeru, morju ali bazenu.\",\"Baden takođe može značiti kupanje.\",\"Кога акцентот е ставен на самото движење или на спортот на пливање, schwimmen почесто се користи на германски.\"]","study.examples":"[{\"de\":\"Ich gehe baden.\",\"lv\":\"Одам на пливање\"},{\"de\":\"Wir gehen im See baden.\",\"lv\":\"Gremo plavat v jezero.\"},{\"de\":\"Er schwimmt sehr gut.\",\"lv\":\"Vrlo dobro pliva.\"},{\"de\":\"Ich schwimme jeden Montag.\",\"lv\":\"Одам на пливање секој понеделник.\"}]","study.comparison":"[{\"word\":\"baden\",\"meaning\":\"Plivati/biti u vodi/periti\",\"example\":\"Идем да пливам.\"},{\"word\":\"schwimmen\",\"meaning\":\"Пливањето како движење или спорт\",\"example\":\"Он врло добро плива.\"},{\"word\":\"duschen\",\"meaning\":\"Istuširaj se i pojedi sendvič.\",\"example\":\"Туширам се ујутру.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"Idi na plivanje\",\"example\":\"Идем да пливам данас.\"}]","study.tip":"{\"text\":\"Zapamtite: odmor u vodi → plivanje • Kretanje u vodi → plivanje.\"}","study.important":"[\"Baden i Schwymen nisu sinonimi.\",\"На латвиски често велат само „пливај“, но на германски треба да се избере според ситуацијата.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “baden” (lv, study) against Latvian “peldēties”. Production begins “{"lv":"Пливање","study.translation":"Пливање","study.explanation":"[\"Osnovna ideja: Baden znači kupati se, biti u vodi…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "baden",
  "lv": "Пливање",
  "level": "A1",
  "study": {
    "id": "a1-baden",
    "layout": "standardStudy",
    "translation": "Пливање",
    "explanation": [
      "Osnovna ideja: Baden znači kupati se, biti u vodi ili uživati ​​u vodi.",
      "Baden se uporablja, ko govorimo o počitnicah v vodi, jezeru, morju ali bazenu.",
      "Baden takođe može značiti kupanje.",
      "Кога акцентот е ставен на самото движење или на спортот на пливање, schwimmen почесто се користи на германски."
    ],
    "examples": [
      {
        "de": "Ich gehe baden.",
        "lv": "Одам на пливање"
      },
      {
        "de": "Wir gehen im See baden.",
        "lv": "Gremo plavat v jezero."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Vrlo dobro pliva."
      },
      {
        "de": "Ich schwimme jeden Montag.",
        "lv": "Одам на пливање секој понеделник."
      }
    ],
    "comparison": [
      {
        "word": "baden",
        "meaning": "Plivati/biti u vodi/periti",
        "example": "Идем да пливам."
      },
      {
        "word": "schwimmen",
        "meaning": "Пливањето како движење или спорт",
        "example": "Он врло добро плива."
      },
      {
        "word": "duschen",
        "meaning": "Istuširaj se i pojedi sendvič.",
        "example": "Туширам се ујутру."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "Idi na plivanje",
        "example": "Идем да пливам данас."
      }
    ],
    "tip": {
      "text": "Zapamtite: odmor u vodi → plivanje • Kretanje u vodi → plivanje."
    },
    "important": [
      "Baden i Schwymen nisu sinonimi.",
      "На латвиски често велат само „пливај“, но на германски треба да се избере според ситуацијата."
    ],
    "sectionAccents": {
      "explanation": {
        "red": [
          "schwimmen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "baden"
            ]
          },
          "lv": {}
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
          "lv": {}
        },
        {
          "de": {
            "red": [
              "schwimmt"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "schwimme"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "baden"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
          "example": {
            "green": [
              "schwimmen"
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

## Finding 44

**Audit ID:** `LRB096-0044`
**Finding Stable ID:** `g2/a1/sr|bei|idx:78|lv, study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0002`
**Lang:** sr
**Card:** `bei|idx:78`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** pie
**DE reference (read-only):** bei
**CURRENT (captured scope):** {"lv":"ВО","study.translation":"ВО","study.explanation":"Се користи кога нешто е блиску до личност, организација, место или се случува под одредени околности.","study.examples":"[{\"de\":\"Ich bin bei meinem Freund.\",\"lv\":\"Аз съм в къщата на моя приятел.\"},{\"de\":\"Sie arbeitet bei Siemens.\",\"lv\":\"Radi u Siemensu.\"},{\"de\":\"Bei Regen bleiben wir zu Hause.\",\"lv\":\"Остануваме дома кога врне.\"}]","study.comparison":"[{\"word\":\"bei\",\"meaning\":\"U osobi, kompaniji ili u određenim okolnostima\",\"example\":\"Ich bin bei meiner Schwester. – Јас сум со сестра ми.\"},{\"word\":\"an\",\"meaning\":\"Na zidu, ivici, obali, ivici površine\",\"example\":\"Das Bild hängt an der Wand. – Сликата виси на ѕидот.\"},{\"word\":\"zu\",\"meaning\":\"Kdo gre (smer)\",\"example\":\"Ich gehe zu meinem Freund. – Es eû pita sava drauga.\"}]","study.tip":"{\"text\":\"Запомнете: од лице/место/фирма → bei.\"}","study.important":"[\"Bay često znači \\\"osoba, mjesto ili posao\\\".\",\"Кога станува збор за површинска површина, обично ви треба auf, а не bei.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “bei” (lv, study) against Latvian “pie”. Production begins “{"lv":"ВО","study.translation":"ВО","study.explanation":"Се користи кога нешто е блиску до личност, организација, место…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bei",
  "lv": "ВО",
  "level": "A1",
  "study": {
    "id": "a1-bei",
    "layout": "standardStudy",
    "translation": "ВО",
    "explanation": "Се користи кога нешто е блиску до личност, организација, место или се случува под одредени околности.",
    "examples": [
      {
        "de": "Ich bin bei meinem Freund.",
        "lv": "Аз съм в къщата на моя приятел."
      },
      {
        "de": "Sie arbeitet bei Siemens.",
        "lv": "Radi u Siemensu."
      },
      {
        "de": "Bei Regen bleiben wir zu Hause.",
        "lv": "Остануваме дома кога врне."
      }
    ],
    "comparison": [
      {
        "word": "bei",
        "meaning": "U osobi, kompaniji ili u određenim okolnostima",
        "example": "Ich bin bei meiner Schwester. – Јас сум со сестра ми."
      },
      {
        "word": "an",
        "meaning": "Na zidu, ivici, obali, ivici površine",
        "example": "Das Bild hängt an der Wand. – Сликата виси на ѕидот."
      },
      {
        "word": "zu",
        "meaning": "Kdo gre (smer)",
        "example": "Ich gehe zu meinem Freund. – Es eû pita sava drauga."
      }
    ],
    "tip": {
      "text": "Запомнете: од лице/место/фирма → bei."
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
          ]
        }
      },
      "important": [
        {},
        {
          "blue": [
            "auf"
          ],
          "red": [
            "bei"
          ]
        }
      ]
    },
    "important": [
      "Bay često znači \"osoba, mjesto ili posao\".",
      "Кога станува збор за површинска површина, обично ви треба auf, а не bei."
    ]
  }
}
```

---

## Finding 45

**Audit ID:** `LRB096-0045`
**Finding Stable ID:** `g2/a1/sr|Besuch|idx:87|lv, study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0003`
**Lang:** sr
**Card:** `Besuch|idx:87`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** apmeklējums
**DE reference (read-only):** Besuch
**CURRENT (captured scope):** {"lv":"посета","study.translation":"посета","study.explanation":"[\"Главна идеја: der Besuch значи посету, посјету или боравак.\",\"Када је ријеч о мјесту или догађају, на српском је прикладна посета.\",\"Када је ријеч о посјећивању особе, на српском можемо рећи боравак или посјета.\",\"Множина је die Besuche.\"]","study.examples":"[{\"de\":\"Der Besuch im Museum war interessant.\",\"lv\":\"Музејска посета је била занимљива.\"},{\"de\":\"Danke für deinen Besuch.\",\"lv\":\"Хвала на твом боравку.\"},{\"de\":\"Der Arzt macht einen Besuch.\",\"lv\":\"Лијечник иде у посјету.\"}]","study.comparison":"[{\"word\":\"der Besuch\",\"meaning\":\"посета • боравак • посјета\",\"example\":\"Danke für deinen Besuch. – Хвала на твој боравак.\"},{\"word\":\"der Besucher\",\"meaning\":\"Посетител\",\"example\":\"Der Besucher wartet draußen. – Посетилац чека напоље.\"},{\"word\":\"besuchen\",\"meaning\":\"посјетити • боравити\",\"example\":\"Ich besuche meine Großeltern. – Посјећујем своје баке и дједове.\"}]","study.tip":"{\"text\":\"Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks.\"}","study.important":"[\"der Besuch није само боравак; то може бити и посета или посјета.\",\"Множина: die Besuche.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “Besuch” (lv, study) against Latvian “apmeklējums”. Production begins “{"lv":"посета","study.translation":"посета","study.explanation":"[\"Главна идеја: der Besuch значи посету, посјету или …”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Besuch",
  "de_article": "der",
  "de_plural": "die Besuche",
  "lv": "посета",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "посета",
    "explanation": [
      "Главна идеја: der Besuch значи посету, посјету или боравак.",
      "Када је ријеч о мјесту или догађају, на српском је прикладна посета.",
      "Када је ријеч о посјећивању особе, на српском можемо рећи боравак или посјета.",
      "Множина је die Besuche."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "Музејска посета је била занимљива."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Хвала на твом боравку."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "Лијечник иде у посјету."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "посета • боравак • посјета",
        "example": "Danke für deinen Besuch. – Хвала на твој боравак."
      },
      {
        "word": "der Besucher",
        "meaning": "Посетител",
        "example": "Der Besucher wartet draußen. – Посетилац чека напоље."
      },
      {
        "word": "besuchen",
        "meaning": "посјетити • боравити",
        "example": "Ich besuche meine Großeltern. – Посјећујем своје баке и дједове."
      }
    ],
    "tip": {
      "text": "Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks."
    },
    "important": [
      "der Besuch није само боравак; то може бити и посета или посјета.",
      "Множина: die Besuche."
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

## Finding 46

**Audit ID:** `LRB096-0046`
**Finding Stable ID:** `g2/a1/sr|besuchen|idx:89|lv, study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0004`
**Lang:** sr
**Card:** `besuchen|idx:89`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** apmeklēt
**DE reference (read-only):** besuchen
**CURRENT (captured scope):** {"lv":"посјетити","study.translation":"посјетити","study.explanation":"[\"Главна идеја: besuchen се користи када посјећујемо мјесто, догађај или особу.\",\"Мјесто, догађај или курс се обично посјећује.\",\"Када se besuchen односи на особу, на српском је често природније боравити.\",\"На немачком је besuchen без предлога и са акузативом.\"]","study.examples":"[{\"de\":\"Ich besuche das Museum.\",\"lv\":\"Посјећујем музеј.\"},{\"de\":\"Wir besuchen einen Deutschkurs.\",\"lv\":\"Похађамо курс немачког језика.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"Посјећујем своје баке и дједове.\"}]","study.comparison":"[{\"word\":\"besuchen\",\"meaning\":\"посјетити мјесто или догађај • боравити особу\",\"example\":\"Ich besuche meine Großeltern. – Посјећујем своје баке и дједове.\"},{\"word\":\"treffen\",\"meaning\":\"срести\",\"example\":\"Ich treffe meinen Freund. – Сусретам свог пријатеља.\"},{\"word\":\"zu jemandem gehen\",\"meaning\":\"ићи код неког\",\"example\":\"Ich gehe zu meinem Freund. – Es eû pita sava drauga.\"}]","study.tip":"{\"text\":\"Atceries: vietu apmeklē, bet personu latviski bieži apciemo.\"}","study.important":"[\"besuchen без предлога: Ich besuche meine Freundin.\",\"Српски превод зависи од објекта: посјетити мјесто, боравити особу.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “besuchen” (lv, study) against Latvian “apmeklēt”. Production begins “{"lv":"посјетити","study.translation":"посјетити","study.explanation":"[\"Главна идеја: besuchen се користи када посјећ…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "besuchen",
  "lv": "посјетити",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "посјетити",
    "explanation": [
      "Главна идеја: besuchen се користи када посјећујемо мјесто, догађај или особу.",
      "Мјесто, догађај или курс се обично посјећује.",
      "Када se besuchen односи на особу, на српском је често природније боравити.",
      "На немачком је besuchen без предлога и са акузативом."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Посјећујем музеј."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Похађамо курс немачког језика."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Посјећујем своје баке и дједове."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "посјетити мјесто или догађај • боравити особу",
        "example": "Ich besuche meine Großeltern. – Посјећујем своје баке и дједове."
      },
      {
        "word": "treffen",
        "meaning": "срести",
        "example": "Ich treffe meinen Freund. – Сусретам свог пријатеља."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "ићи код неког",
        "example": "Ich gehe zu meinem Freund. – Es eû pita sava drauga."
      }
    ],
    "tip": {
      "text": "Atceries: vietu apmeklē, bet personu latviski bieži apciemo."
    },
    "important": [
      "besuchen без предлога: Ich besuche meine Freundin.",
      "Српски превод зависи од објекта: посјетити мјесто, боравити особу."
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

## Finding 47

**Audit ID:** `LRB096-0047`
**Finding Stable ID:** `g2/a1/sr|bis|idx:91|lv, study|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0005`
**Lang:** sr
**Card:** `bis|idx:91`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_CONTAMINATION
**LV source (read-only):** līdz
**DE reference (read-only):** bis
**CURRENT (captured scope):** {"lv":"До","study.translation":"До","study.explanation":"Odnosi se na granicu, tačku u vremenu ili stanje.","study.examples":"[{\"de\":\"Ich warte bis zu deiner Ankunft.\",\"lv\":\"Čekam tvoj dolazak.\"},{\"de\":\"Bleib hier, bis ich zurückkomme.\",\"lv\":\"Ostanite tukaj, dokler se ne vrnem.\"},{\"de\":\"Ich lerne Deutsch bis zum Abend.\",\"lv\":\"Učim njemački do večeri.\"},{\"de\":\"Bis jetzt habe ich nichts verstanden.\",\"lv\":\"Do zdaj nisem ničesar razumel.\"}]","study.comparison":"[{\"word\":\"bis\",\"meaning\":\"Do (postignuto vrijeme)\",\"example\":\"Ich bleibe bis morgen. – Ще остана до 18:00ч.\"},{\"word\":\"bis zu\",\"meaning\":\"Do (do određenog vremena)\",\"example\":\"bis zum Bahnhof – Delam od 9. do 17.\"},{\"word\":\"bis jetzt\",\"meaning\":\"До\",\"example\":\"Bis jetzt habe ich nichts verstanden. – Čekam da dođeš.\"},{\"word\":\"bis jetzt\",\"meaning\":\"Do sada, do sada\",\"example\":\"Bis jetzt ist alles gut. – Досега е добро.\"}]","study.tip":"{\"text\":\"Запомнете: граница във времето/състоянието → бис.\"}","study.important":"[\"Бис = до граница или точка во времето.\",\"Bis jetzt = do sedaj • Bis dass = do.\",\"bis jetzt значи до сада.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “bis” (lv, study) against Latvian “līdz”. Production begins “{"lv":"До","study.translation":"До","study.explanation":"Odnosi se na granicu, tačku u vremenu ili stanje.","study.exam…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bis",
  "lv": "До",
  "level": "A1",
  "study": {
    "id": "a1-bis",
    "layout": "standardStudy",
    "translation": "До",
    "explanation": "Odnosi se na granicu, tačku u vremenu ili stanje.",
    "examples": [
      {
        "de": "Ich warte bis zu deiner Ankunft.",
        "lv": "Čekam tvoj dolazak."
      },
      {
        "de": "Bleib hier, bis ich zurückkomme.",
        "lv": "Ostanite tukaj, dokler se ne vrnem."
      },
      {
        "de": "Ich lerne Deutsch bis zum Abend.",
        "lv": "Učim njemački do večeri."
      },
      {
        "de": "Bis jetzt habe ich nichts verstanden.",
        "lv": "Do zdaj nisem ničesar razumel."
      }
    ],
    "comparison": [
      {
        "word": "bis",
        "meaning": "Do (postignuto vrijeme)",
        "example": "Ich bleibe bis morgen. – Ще остана до 18:00ч."
      },
      {
        "word": "bis zu",
        "meaning": "Do (do određenog vremena)",
        "example": "bis zum Bahnhof – Delam od 9. do 17."
      },
      {
        "word": "bis jetzt",
        "meaning": "До",
        "example": "Bis jetzt habe ich nichts verstanden. – Čekam da dođeš."
      },
      {
        "word": "bis jetzt",
        "meaning": "Do sada, do sada",
        "example": "Bis jetzt ist alles gut. – Досега е добро."
      }
    ],
    "tip": {
      "text": "Запомнете: граница във времето/състоянието → бис."
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
        "left": {}
      },
      "important": [
        {
          "purple": [
            "Бис"
          ]
        }
      ]
    },
    "important": [
      "Бис = до граница или точка во времето.",
      "Bis jetzt = do sedaj • Bis dass = do.",
      "bis jetzt значи до сада."
    ]
  }
}
```

---

## Finding 48

**Audit ID:** `LRB096-0048`
**Finding Stable ID:** `g2/a1/sr|dass|idx:130|study.comparison[3].meaning; study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0002`
**Lang:** sr
**Card:** `dass|idx:130`
**Field / path:** `study.comparison[3].meaning; study.examples[2].lv`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** MEDIUM
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** ka
**DE reference (read-only):** dass
**CURRENT (captured scope):** {"study.comparison[3].meaning":"Или","study.examples[2].lv":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “dass” at study.comparison[3].meaning; study.examples[2].lv against Latvian “ka”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "dass",
  "lv": "Што",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "Што",
    "explanation": "Uvodi prateću rečenicu koja izražava činjenicu, misao ili izjavu.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Знам, че си уморен."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "Тој вели дека ќе дојде."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Mislim, da ni ravno tako."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "Што",
        "example": "Ich weiß, dass er kommt. – Znam da će doći."
      },
      {
        "word": "weil",
        "meaning": "Бидејќи • Затоа што",
        "example": "Ich bleibe zu Hause, weil es regnet. – Останувам дома затоа што врне."
      },
      {
        "word": "damit",
        "meaning": "ДО",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Учам германски за да можам да работам во Германија."
      },
      {
        "word": "ob",
        "meaning": "Или",
        "example": "Ich weiß nicht, ob er kommt. – Не знам дали ќе дојде."
      }
    ],
    "tip": {
      "text": "Запомнете: ова е → да."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "dass"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "dass"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "dass"
            ]
          },
          "lv": {}
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
            "dass"
          ]
        },
        {
          "red": [
            "das"
          ],
          "purple": [
            "das"
          ]
        }
      ]
    },
    "important": [
      "Dass pomeni \"to\" in uvaja pomožno klavzulo.",
      "Да не се меша со das, што може да биде статија или „тоа“."
    ]
  }
}
```

---

## Finding 49

**Audit ID:** `LRB096-0049`
**Finding Stable ID:** `g2/a1/sr|der|idx:134|study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0003`
**Lang:** sr
**Card:** `der|idx:134`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vīriešu dzimtes noteiktais artikuls
**DE reference (read-only):** der
**CURRENT (captured scope):** {"study.translation":"Определен член од машки род","study.explanation":"Се употребува кај именките од машки род. Во некои реченици, „der“ може да дејствува и како заменка или релативна заменка.","study.examples":"[{\"de\":\"Der Mann ist hier.\",\"lv\":\"Човекот е тука.\"},{\"de\":\"Der Bus kommt.\",\"lv\":\"Доаѓа автобусот.\"},{\"de\":\"Der Lehrer spricht.\",\"lv\":\"Наставникот зборува.\"}]","study.tip":"{\"text\":\"Zapamtite: muško → prikladno.\"}","study.important":"[\"На ниво А1 прво мора да го научите машкиот член.\",\"Заменката и релативната употреба ќе дојдат подоцна.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr composite row for “der” (study) against Latvian “vīriešu dzimtes noteiktais artikuls”. Production begins “{"study.translation":"Определен член од машки род","study.explanation":"Се употребува кај именките од машки род. Во нек…”. The row spans several independently editable fields, so one scalar owner_new would be unsafe; keep PENDING until the listed subfields are reviewed and represented separately.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "der",
  "lv": "Определен член од машки род",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "Определен член од машки род",
    "explanation": "Се употребува кај именките од машки род. Во некои реченици, „der“ може да дејствува и како заменка или релативна заменка.",
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "Човекот е тука."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "Доаѓа автобусот."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "Наставникот зборува."
      }
    ],
    "tip": {
      "text": "Zapamtite: muško → prikladno."
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
        "left": {}
      },
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "На ниво А1 прво мора да го научите машкиот член.",
      "Заменката и релативната употреба ќе дојдат подоцна."
    ]
  }
}
```

---

## Finding 50

**Audit ID:** `LRB096-0050`
**Finding Stable ID:** `g2/a1/sr|die|idx:137|study.examples[2].lv; study|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SR-L0004`
**Lang:** sr
**Card:** `die|idx:137`
**Field / path:** `study.examples[2].lv; study`
**Production file:** `crowdin-staging/g2/sr-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** sieviešu dzimtes noteiktais artikuls
**DE reference (read-only):** die
**CURRENT (captured scope):** {"study.examples[2].lv":null,"study.translation":"Definitivni član ženskog roda","study.explanation":"Се користи со именки од женски род. Во некои реченици, зборот „умре“ може да дејствува и како заменка или релативна заменка.","study.examples":"[{\"de\":\"Die Frau ist hier.\",\"lv\":\"Žena je ovdje.\"},{\"de\":\"Die Katze schläft.\",\"lv\":\"Мачето спие.\"},{\"de\":\"Die Lehrerin erklärt.\",\"lv\":\"Наставникот објаснува.\"}]","study.tip":"{\"text\":\"Запомнете: женственост → умре.\"}","study.important":"[\"Na ravni A1 kocko najprej preučujemo kot ženski predmet.\",\"Множината се користи и за сите родови.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individually reviewed sr row for “die” at study.examples[2].lv; study against Latvian “sieviešu dzimtes noteiktais artikuls”. The production field is absent, leaving no value to linguistically accept and no writable target for a correction; keep PENDING for an explicit schema-addition or no-addition OWNER decision.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "die",
  "lv": "Definitivni član ženskog roda",
  "level": "A1",
  "study": {
    "id": "a1-die",
    "layout": "standardStudy",
    "translation": "Definitivni član ženskog roda",
    "explanation": "Се користи со именки од женски род. Во некои реченици, зборот „умре“ може да дејствува и како заменка или релативна заменка.",
    "examples": [
      {
        "de": "Die Frau ist hier.",
        "lv": "Žena je ovdje."
      },
      {
        "de": "Die Katze schläft.",
        "lv": "Мачето спие."
      },
      {
        "de": "Die Lehrerin erklärt.",
        "lv": "Наставникот објаснува."
      }
    ],
    "tip": {
      "text": "Запомнете: женственост → умре."
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
        "left": {}
      },
      "important": [
        {},
        {}
      ]
    },
    "important": [
      "Na ravni A1 kocko najprej preučujemo kot ženski predmet.",
      "Множината се користи и за сите родови."
    ]
  }
}
```

---

