# G2/A1 LRB LRB-095 — OWNER VIEW

**Batch:** LRB-095
**Rows:** 50/50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T07:16:37.439Z
**Source commit:** `fd2454f9e32ea33cb5dfccc295371613ec24bc78`
**Branch:** `cursor/lrb-095-owner-review-pc2-3db2`
**Input SHA256:** `02a2e7f9b3d1eb37e004af5d9a558b7e217d30f6d36f771112b4616598f26ce8`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-095-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB095-0001`
**Finding Stable ID:** `g2/a1/sq|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-SQ-0120`
**Lang:** sq
**Card:** `a1-uhr`
**Field / path:** `a1.card.a1-uhr.study.examples[5].native`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts a1-uhr (Uhr), ceļš 'a1.card.a1-uhr.study.examples[5].native': norādītais lauks produkcijas shēmā nav atrodams. Konteksts ir ''; vajadzīgs OWNER shēmas lēmums par konkrētā lauka izveidi vai finding slēgšanu.
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

## Finding 2

**Audit ID:** `LRB095-0002`
**Finding Stable ID:** `g2/a1/sq|ab|idx:17|lv, study.translation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `ab|idx:17`
**Field / path:** `lv, study.translation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** no
**DE reference (read-only):** ab
**CURRENT (captured scope):** {"lv":"DHE","study.translation":"DHE","study.examples":"[{\"de\":\"ab heute\",\"lv\":\"Që nga sot.\",\"level\":\"A1\"},{\"de\":\"ab Montag\",\"lv\":\"Nga e hëna\"},{\"de\":\"ab 8 Uhr\",\"lv\":\"Nga 8\"},{\"de\":\"ab Bahnhof\",\"lv\":\"Nga stacioni\"}]","study.comparison":"[{\"word\":\"ab\",\"meaning\":\"Duke filluar nga pika/ora\",\"example\":\"ab Montag – Nga e hëna\"},{\"word\":\"von\",\"meaning\":\"Nga dikush/diçka • Origjina\",\"example\":\"von mir – Ju qeras une.\"},{\"word\":\"aus\",\"meaning\":\"Pjesa e jashtme e brendshme\",\"example\":\"aus dem Haus – Nga shtëpia/nga distanca\"}]","study.important":"[\"Ab tregon pikën e fillimit në kohë ose hapësirë.\",\"Von ose AUS përdoren më shpesh nëse mendimi vjen ose rrjedh nga brenda.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts ab\|idx:17 (ab), ceļš 'lv, study.translation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"lv":"DHE","study.translation":"DHE","study.examples":"[{\"de\":\"ab heute\",\"lv\":\"Që nga sot.\",\"l…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ab",
  "lv": "DHE",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "DHE",
    "explanation": "Përdoret kur diçka fillon në një kohë, vend ose pikë specifike. Zakonisht do të thotë \"Duka më filloi\".",
    "examples": [
      {
        "de": "ab heute",
        "lv": "Që nga sot.",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "Nga e hëna"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "Nga 8"
      },
      {
        "de": "ab Bahnhof",
        "lv": "Nga stacioni"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "Duke filluar nga pika/ora",
        "example": "ab Montag – Nga e hëna"
      },
      {
        "word": "von",
        "meaning": "Nga dikush/diçka • Origjina",
        "example": "von mir – Ju qeras une."
      },
      {
        "word": "aus",
        "meaning": "Pjesa e jashtme e brendshme",
        "example": "aus dem Haus – Nga shtëpia/nga distanca"
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
      "text": "Mos harroni: pika fillestare për sa i përket kohës/hapësirës është → përafërsisht."
    },
    "important": [
      "Ab tregon pikën e fillimit në kohë ose hapësirë.",
      "Von ose AUS përdoren më shpesh nëse mendimi vjen ose rrjedh nga brenda."
    ]
  }
}
```

---

## Finding 3

**Audit ID:** `LRB095-0003`
**Finding Stable ID:** `g2/a1/sq|aber|idx:21|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `aber|idx:21`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** bet
**DE reference (read-only):** aber
**CURRENT (captured scope):** {"lv":"Megjithatë...","study.translation":"Megjithatë...","study.explanation":"Përdoret për të krijuar kontrast ose mosmarrëveshje. Zakonisht do të thotë \"por \", \"por\" ose \"por\".","study.examples":"[{\"de\":\"Ich möchte mitkommen, aber ich habe keine Zeit.\",\"lv\":\"Dua të vij, por nuk kam kohë.\"},{\"de\":\"Das Essen war lecker, aber zu teuer.\",\"lv\":\"Ushqimi ishte i shijshëm, por shumë i shtrenjtë.\"},{\"de\":\"Er hat recht, aber ich sehe das anders.\",\"lv\":\"Ka të drejtë, por nuk mendoj kështu.\"}]","study.comparison":"[{\"word\":\"aber\",\"meaning\":\"Kundërshtuar • Apeluar • Megjithatë\",\"example\":\"Ich komme, aber später. – Por do të vij më vonë.\"},{\"word\":\"sondern\",\"meaning\":\"Huh? Jo, por ...\",\"example\":\"Ich wollte keinen Tee, sondern Kaffee. – Doja çaj, jo kafe.\"},{\"word\":\"jedoch\",\"meaning\":\"Por...\",\"example\":\"Es ist kalt, jedoch sonnig. – Është ftohtë, por me diell.\"}]","study.important":"[\"Aberi tregon të kundërtën ose anasjelltas.\",\"Kur e kundërta është \\\"jo... por...\\\", fjala gjermane zakonisht është sondern.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts aber\|idx:21 (aber), ceļš 'lv, study.translation, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Megjithatë...","study.translation":"Megjithatë...","study.explanation":"Përdoret për të krijuar k…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aber",
  "lv": "Megjithatë...",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "Megjithatë...",
    "explanation": "Përdoret për të krijuar kontrast ose mosmarrëveshje. Zakonisht do të thotë \"por \", \"por\" ose \"por\".",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Dua të vij, por nuk kam kohë."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Ushqimi ishte i shijshëm, por shumë i shtrenjtë."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Ka të drejtë, por nuk mendoj kështu."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "Kundërshtuar • Apeluar • Megjithatë",
        "example": "Ich komme, aber später. – Por do të vij më vonë."
      },
      {
        "word": "sondern",
        "meaning": "Huh? Jo, por ...",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Doja çaj, jo kafe."
      },
      {
        "word": "jedoch",
        "meaning": "Por...",
        "example": "Es ist kalt, jedoch sonnig. – Është ftohtë, por me diell."
      }
    ],
    "tip": {
      "text": "Karakteristikat: statistikat paraprake/iebilde → aber."
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
      "Aberi tregon të kundërtën ose anasjelltas.",
      "Kur e kundërta është \"jo... por...\", fjala gjermane zakonisht është sondern."
    ]
  }
}
```

---

## Finding 4

**Audit ID:** `LRB095-0004`
**Finding Stable ID:** `g2/a1/sq|also|idx:26|lv, study.translation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `also|idx:26`
**Field / path:** `lv, study.translation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** tātad
**DE reference (read-only):** also
**CURRENT (captured scope):** {"lv":"Në lidhje me","study.translation":"Në lidhje me","study.examples":"[{\"de\":\"Es regnet, also bleibe ich zu Hause.\",\"lv\":\"Po bie shi, kështu që po qëndroj në shtëpi.\"},{\"de\":\"Du bist krank, also gehst du nicht zur Arbeit.\",\"lv\":\"Je i sëmurë, prandaj mos shko në punë.\"},{\"de\":\"Ich habe viel gelernt, also verstehe ich es jetzt.\",\"lv\":\"Kam punuar shumë, tani e kuptoj.\"}]","study.comparison":"[{\"word\":\"also\",\"meaning\":\"Dhe si rrjedhojë...\",\"example\":\"Es regnet, also bleibe ich zu Hause. – Po bie shi, kështu që po qëndroj në shtëpi.\"},{\"word\":\"auch\",\"meaning\":\"Por\",\"example\":\"Ich komme auch. – Edhe unë do të vij.\"},{\"word\":\"deshalb\",\"meaning\":\"Në lidhje me\",\"example\":\"Es regnet, deshalb bleibe ich zu Hause. – Po bie shi, kështu që po qëndroj në shtëpi.\"}]","study.important":"[\"Ajo gjithashtu tregon konkluzionin e mëposhtëm: Mendimi tjetër rrjedh nga ajo që është thënë më lart.\",\"\\\"Po\\\" -ja letoneze shpesh mund të jetë gjithashtu një deshalbe.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts also\|idx:26 (also), ceļš 'lv, study.translation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Në lidhje me","study.translation":"Në lidhje me","study.examples":"[{\"de\":\"Es regnet, also ble…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "also",
  "lv": "Në lidhje me",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "Në lidhje me",
    "explanation": "Përdoret për të vizatuar ose shfaqur rezultatin. \"Kjo është arsyeja\" do të thotë \"kjo është arsyeja \".",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Po bie shi, kështu që po qëndroj në shtëpi."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Je i sëmurë, prandaj mos shko në punë."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Kam punuar shumë, tani e kuptoj."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "Dhe si rrjedhojë...",
        "example": "Es regnet, also bleibe ich zu Hause. – Po bie shi, kështu që po qëndroj në shtëpi."
      },
      {
        "word": "auch",
        "meaning": "Por",
        "example": "Ich komme auch. – Edhe unë do të vij."
      },
      {
        "word": "deshalb",
        "meaning": "Në lidhje me",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Po bie shi, kështu që po qëndroj në shtëpi."
      }
    ],
    "tip": {
      "text": "Mos harroni: kështu → është edhe kërkesa."
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
      "Ajo gjithashtu tregon konkluzionin e mëposhtëm: Mendimi tjetër rrjedh nga ajo që është thënë më lart.",
      "\"Po\" -ja letoneze shpesh mund të jetë gjithashtu një deshalbe."
    ]
  }
}
```

---

## Finding 5

**Audit ID:** `LRB095-0005`
**Finding Stable ID:** `g2/a1/sq|an|idx:12|lv, study.translation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `an|idx:12`
**Field / path:** `lv, study.translation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** pie
**DE reference (read-only):** an
**CURRENT (captured scope):** {"lv":"Nga • Deri • Aktualisht","study.translation":"Hap • Në sipërfaqe • Në buzë","study.examples":"[{\"de\":\"an der Wand\",\"lv\":\"Në mur/në mur\"},{\"de\":\"am Fenster\",\"lv\":\"Pranë dritares\"},{\"de\":\"am Meer\",\"lv\":\"Pranë detit\"}]","study.comparison":"[{\"word\":\"an\",\"meaning\":\"Në sipërfaqe ose në buzë\",\"example\":\"an der Wand – Pranë murit\"},{\"word\":\"auf\",\"meaning\":\"Në një sipërfaqe horizontale\",\"example\":\"auf dem Tisch – Shishja është në tryezë.\"},{\"word\":\"bei\",\"meaning\":\"Për një person ose vend\",\"example\":\"beim Arzt – Të lutem.\"}]","study.important":"[\"Momenti nuk është vetëm \\\"kali\\\". Kjo zakonisht do të thotë pranë një sipërfaqeje, muri, dritareje ose buze.\",\"Auf zakonisht përdoret në një sipërfaqe horizontale.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts an\|idx:12 (an), ceļš 'lv, study.translation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.examples, study.comparison, study.important, kuru saturs sākas ar '{"lv":"Nga • Deri • Aktualisht","study.translation":"Hap • Në sipërfaqe • Në buzë","study.examples":"[{\…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "an",
  "lv": "Nga • Deri • Aktualisht",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "Hap • Në sipërfaqe • Në buzë",
    "explanation": "Përdoret kur diçka është pranë murit, dritares, derës, lumit, bregut të detit ose skajit/sipërfaqes tjetër.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "Në mur/në mur"
      },
      {
        "de": "am Fenster",
        "lv": "Pranë dritares"
      },
      {
        "de": "am Meer",
        "lv": "Pranë detit"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "Në sipërfaqe ose në buzë",
        "example": "an der Wand – Pranë murit"
      },
      {
        "word": "auf",
        "meaning": "Në një sipërfaqe horizontale",
        "example": "auf dem Tisch – Shishja është në tryezë."
      },
      {
        "word": "bei",
        "meaning": "Për një person ose vend",
        "example": "beim Arzt – Të lutem."
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
            "Momenti"
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
      "text": "Shërbimet: Pie sienas/loga/malas → an."
    },
    "important": [
      "Momenti nuk është vetëm \"kali\". Kjo zakonisht do të thotë pranë një sipërfaqeje, muri, dritareje ose buze.",
      "Auf zakonisht përdoret në një sipërfaqe horizontale."
    ]
  }
}
```

---

## Finding 6

**Audit ID:** `LRB095-0006`
**Finding Stable ID:** `g2/a1/sq|auch|idx:48|lv, study.translation, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `auch|idx:48`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** arī
**DE reference (read-only):** auch
**CURRENT (captured scope):** {"lv":"Por","study.translation":"Por","study.explanation":"[\"Ideja kryesore: “edhe” më e popullarizuar dhe e paanshme.\",\"Auch në thelb do të thotë: e thjeshtë \\\"shumë\\\".\",\"Zakonisht karakterizohet si: bashkim.\",\"Auch është fjala më e zakonshme për \\\"në të njëjtën kohë\\\".\"]","study.examples":"[{\"de\":\"Ich komme auch.\",\"lv\":\"Edhe unë do të vij.\"},{\"de\":\"Sie arbeitet auch hier.\",\"lv\":\"Edhe unë do të vij.\"},{\"de\":\"Ich wünsche Ihnen auch einen schönen Tag.\",\"lv\":\"Ai punon këtu?\"}]","study.tip":"[\"Auch = gjithashtu\",\"OUCH përdoret kur konteksti i përshtatet këtij kuptimi.\"]","study.important":"[\"Ich auch wünsche Ihnen nuk është renditja e saktë e fjalëve.\",\"Ahh = në të njëjtën kohë.\",\"E pasaktë: Ich auch wünsche Ihnen einen schönen Tag.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts auch\|idx:48 (auch), ceļš 'lv, study.translation, study.explanation, study.examples, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Por","study.translation":"Por","study.explanation":"[\"Ideja kryesore: “edhe” më e popullarizuar …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "auch",
  "lv": "Por",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "Por",
    "explanation": [
      "Ideja kryesore: “edhe” më e popullarizuar dhe e paanshme.",
      "Auch në thelb do të thotë: e thjeshtë \"shumë\".",
      "Zakonisht karakterizohet si: bashkim.",
      "Auch është fjala më e zakonshme për \"në të njëjtën kohë\"."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Edhe unë do të vij."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "Edhe unë do të vij."
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "Ai punon këtu?"
      }
    ],
    "tip": [
      "Auch = gjithashtu",
      "OUCH përdoret kur konteksti i përshtatet këtij kuptimi."
    ],
    "important": [
      "Ich auch wünsche Ihnen nuk është renditja e saktë e fjalëve.",
      "Ahh = në të njëjtën kohë.",
      "E pasaktë: Ich auch wünsche Ihnen einen schönen Tag."
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

## Finding 7

**Audit ID:** `LRB095-0007`
**Finding Stable ID:** `g2/a1/sq|auf|idx:49|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `auf|idx:49`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** uz
**DE reference (read-only):** auf
**CURRENT (captured scope):** {"lv":"-Poshtë.","study.translation":"-Poshtë.","study.explanation":"Përdoret për të treguar një drejtim në një vend ose në majë të një sipërfaqeje.","study.examples":"[{\"de\":\"Ich stelle das Buch auf den Tisch.\",\"lv\":\"E vura librin në tryezë.\"},{\"de\":\"Wir fahren auf den Berg.\",\"lv\":\"Do të shkojmë në male.\"},{\"de\":\"Die Katze springt auf das Sofa.\",\"lv\":\"Macja kërcen në divan.\"}]","study.comparison":"[{\"word\":\"auf\",\"meaning\":\"Objektivi (sipërfaqja ose lart)\",\"example\":\"Ich stelle das Glas auf den Tisch. – E vendosa gotën në tavolinë.\"},{\"word\":\"an\",\"meaning\":\"Na (sipërfaqe vertikale)\",\"example\":\"Ich hänge das Bild an die Wand. – Po e var një fotografi në mur.\"},{\"word\":\"in\",\"meaning\":\"Është për ty.\",\"example\":\"Ich lege das Buch in die Tasche. – Librin e futa në çantë.\"}]","study.important":"[\"Auf nuk do të thotë vetëm \\\"on\\\". Kjo zakonisht do të thotë të lëvizësh ose të jesh në sipërfaqe.\",\"Nëse diçka është afër një sipërfaqeje vertikale, zakonisht të duhet • Nëse je, duhet të hysh brenda.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts auf\|idx:49 (auf), ceļš 'lv, study.translation, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"-Poshtë.","study.translation":"-Poshtë.","study.explanation":"Përdoret për të treguar një drejtim…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "auf",
  "lv": "-Poshtë.",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "-Poshtë.",
    "explanation": "Përdoret për të treguar një drejtim në një vend ose në majë të një sipërfaqeje.",
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "E vura librin në tryezë."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "Do të shkojmë në male."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "Macja kërcen në divan."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "Objektivi (sipërfaqja ose lart)",
        "example": "Ich stelle das Glas auf den Tisch. – E vendosa gotën në tavolinë."
      },
      {
        "word": "an",
        "meaning": "Na (sipërfaqe vertikale)",
        "example": "Ich hänge das Bild an die Wand. – Po e var një fotografi në mur."
      },
      {
        "word": "in",
        "meaning": "Është për ty.",
        "example": "Ich lege das Buch in die Tasche. – Librin e futa në çantë."
      }
    ],
    "tip": {
      "text": "Mos harroni: → auf në sipërfaqe/sipër."
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
      "Auf nuk do të thotë vetëm \"on\". Kjo zakonisht do të thotë të lëvizësh ose të jesh në sipërfaqe.",
      "Nëse diçka është afër një sipërfaqeje vertikale, zakonisht të duhet • Nëse je, duhet të hysh brenda."
    ]
  }
}
```

---

## Finding 8

**Audit ID:** `LRB095-0008`
**Finding Stable ID:** `g2/a1/sq|aufs|idx:60|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `aufs|idx:60`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** uz
**DE reference (read-only):** aufs
**CURRENT (captured scope):** {"lv":"Ku • Ku • Ku?","study.translation":"Ku • Ku • Ku?","study.explanation":"[\"Aufs është shkurtimi i parafjalës auf dhe substancës das.\",\"Formati i plotë: auf das (ku?).\",\"Përdoret kur një veprim tregon një drejtim drejt një gjëje ose sipërfaqeje specifike • I përgjigjet pyetjes \\\"Ku?\\\"\",\"Përdoret shpesh në lëvizje: ngjitja, ulja, rënia në tokë, afrimi i diçkaje.\",\"Në të folur dhe të folur të përditshëm, auf përdoret pothuajse gjithmonë në vend të auf das të plotë.\"]","study.examples":"[{\"de\":\"Ich gehe aufs Dach.\",\"lv\":\"Po shkojë në kulmë.\"},{\"de\":\"Sie setzt sich aufs Sofa.\",\"lv\":\"Ai ulet në divan.\"},{\"de\":\"Wir fahren aufs Land.\",\"lv\":\"Do të shkojmë në fshat.\"},{\"de\":\"Stell die Tasche aufs Bett.\",\"lv\":\"Vendose çantën në krevat.\"},{\"de\":\"Er springt aufs Pferd.\",\"lv\":\"Ai kalëron me kalë.\"},{\"de\":\"Leg das Buch aufs Regal.\",\"lv\":\"Vendoseni librin në raft.\"},{\"de\":\"Komm schnell aufs Boot!\",\"lv\":\"Ejani në barkë shpejt!\"},{\"de\":\"Wir gehen aufs Fest.\",\"lv\":\"Do të shkojmë në një festë.\"}]","study.comparison":"[{\"word\":\"aufs\",\"meaning\":\"Rast i veçantë (ak.)\",\"example\":\"aufs Dach – Atje lart!\"},{\"word\":\"auf\",\"meaning\":\"Sipërfaqja ose lart\",\"example\":\"auf den Tisch – Shishja është në tryezë.\"},{\"word\":\"an\",\"meaning\":\"Në një sipërfaqe vertikale\",\"example\":\"an die Wand – Pranë murit\"},{\"word\":\"ins\",\"meaning\":\"Brenda\",\"example\":\"ins Zimmer – Ajo është në dhomë .\"},{\"word\":\"zum\",\"meaning\":\"Për / nga (kush?)\",\"example\":\"zum Arzt – Të lutem.\"}]","study.important":"[\"Aufs = auf das, only me një emër të çdo gjinie, ku ̈ në xhirim.\",\"Përgjigje ku? — për të lëvizur në një vend ose sipërfaqe specifike.\",\"Në një sipërfaqe horizontale, zakonisht përdoret nga auf në vend të auf.\",\"Nuk duhet të ngatërrohet me (në mur) ose (brenda dhomës).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts aufs\|idx:60 (aufs), ceļš 'lv, study.translation, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Ku • Ku • Ku?","study.translation":"Ku • Ku • Ku?","study.explanation":"[\"Aufs është shkurtimi i…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aufs",
  "lv": "Ku • Ku • Ku?",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "Ku • Ku • Ku?",
    "explanation": [
      "Aufs është shkurtimi i parafjalës auf dhe substancës das.",
      "Formati i plotë: auf das (ku?).",
      "Përdoret kur një veprim tregon një drejtim drejt një gjëje ose sipërfaqeje specifike • I përgjigjet pyetjes \"Ku?\"",
      "Përdoret shpesh në lëvizje: ngjitja, ulja, rënia në tokë, afrimi i diçkaje.",
      "Në të folur dhe të folur të përditshëm, auf përdoret pothuajse gjithmonë në vend të auf das të plotë."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "Po shkojë në kulmë."
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "Ai ulet në divan."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Do të shkojmë në fshat."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "Vendose çantën në krevat."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "Ai kalëron me kalë."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "Vendoseni librin në raft."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "Ejani në barkë shpejt!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "Do të shkojmë në një festë."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "Rast i veçantë (ak.)",
        "example": "aufs Dach – Atje lart!"
      },
      {
        "word": "auf",
        "meaning": "Sipërfaqja ose lart",
        "example": "auf den Tisch – Shishja është në tryezë."
      },
      {
        "word": "an",
        "meaning": "Në një sipërfaqe vertikale",
        "example": "an die Wand – Pranë murit"
      },
      {
        "word": "ins",
        "meaning": "Brenda",
        "example": "ins Zimmer – Ajo është në dhomë ."
      },
      {
        "word": "zum",
        "meaning": "Për / nga (kush?)",
        "example": "zum Arzt – Të lutem."
      }
    ],
    "tip": [
      "Mos harroni: auf + das aufs (→ku?, ku?).",
      "Tam auf das rrallë përdoret në gjuhën e folur - përdoret auf."
    ],
    "important": [
      "Aufs = auf das, only me një emër të çdo gjinie, ku ̈ në xhirim.",
      "Përgjigje ku? — për të lëvizur në një vend ose sipërfaqe specifike.",
      "Në një sipërfaqe horizontale, zakonisht përdoret nga auf në vend të auf.",
      "Nuk duhet të ngatërrohet me (në mur) ose (brenda dhomës)."
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
            "një"
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

## Finding 9

**Audit ID:** `LRB095-0009`
**Finding Stable ID:** `g2/a1/sq|aus|idx:57|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `aus|idx:57`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** no
**DE reference (read-only):** aus
**CURRENT (captured scope):** {"lv":"Z • Në ambiente të jashtme","study.translation":"Z • Në ambiente të jashtme","study.explanation":"Përdoret kur diçka vjen nga brenda, del ose tregon një origjinë.","study.examples":"[{\"de\":\"Ich komme aus Deutschland.\",\"lv\":\"Jam nga Gjermania.\"},{\"de\":\"Er geht aus dem Haus.\",\"lv\":\"Ajo po largohet nga shtëpia.\"},{\"de\":\"Ich nehme das Buch aus der Tasche.\",\"lv\":\"E nxjerr librin nga çanta.\"}]","study.comparison":"[{\"word\":\"aus\",\"meaning\":\"Nga brenda,\",\"example\":\"aus dem Haus – Nga shtëpia\"},{\"word\":\"von\",\"meaning\":\"Nga personi, nga toka, nga sipërfaqja\",\"example\":\"von meinem Freund – Nga miku im\"},{\"word\":\"ab\",\"meaning\":\"Duke filluar nga një pikë ose kohë\",\"example\":\"ab Montag – Nga e hëna\"}]","study.important":"[\"AUS zakonisht tregon lëvizje nga brenda ose nga fillimi.\",\"Fjala ab përdoret shpesh vetëm kur i referohet një pike fillestare në kohë ose hapësirë.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts aus\|idx:57 (aus), ceļš 'lv, study.translation, study.explanation, study.examples, study.comparison, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Z • Në ambiente të jashtme","study.translation":"Z • Në ambiente të jashtme","study.explanation":…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aus",
  "lv": "Z • Në ambiente të jashtme",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "Z • Në ambiente të jashtme",
    "explanation": "Përdoret kur diçka vjen nga brenda, del ose tregon një origjinë.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Jam nga Gjermania."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Ajo po largohet nga shtëpia."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "E nxjerr librin nga çanta."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "Nga brenda,",
        "example": "aus dem Haus – Nga shtëpia"
      },
      {
        "word": "von",
        "meaning": "Nga personi, nga toka, nga sipërfaqja",
        "example": "von meinem Freund – Nga miku im"
      },
      {
        "word": "ab",
        "meaning": "Duke filluar nga një pikë ose kohë",
        "example": "ab Montag – Nga e hëna"
      }
    ],
    "tip": {
      "text": "Mos harroni: → ndryshe nga e saja."
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
      "AUS zakonisht tregon lëvizje nga brenda ose nga fillimi.",
      "Fjala ab përdoret shpesh vetëm kur i referohet një pike fillestare në kohë ose hapësirë."
    ]
  }
}
```

---

## Finding 10

**Audit ID:** `LRB095-0010`
**Finding Stable ID:** `g2/a1/sq|baden|idx:68|study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `baden|idx:68`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** peldēties
**DE reference (read-only):** baden
**CURRENT (captured scope):** {"study.translation":"Not","study.explanation":"[\"Ideja kryesore: Baden do të thotë të lahesh, të qëndrosh ose të shijosh ujin.\",\"Baden përdoret kur bëhet fjalë për t 'u çlodhur në ujë, liqen, det ose pishinë.\",\"Baden mund të nënkuptojë edhe banjën.\",\"Kur theksi është te sporti i lëvizjes ose vetë noti, fjala \\\"schwimmen\\\" përdoret më shpesh në gjermanisht.\"]","study.examples":"[{\"de\":\"Ich gehe baden.\",\"lv\":\"Do shkoj të notoj.\"},{\"de\":\"Wir gehen im See baden.\",\"lv\":\"Do të notojmë në liqen.\"},{\"de\":\"Er schwimmt sehr gut.\",\"lv\":\"Ajo noton shumë mirë.\"},{\"de\":\"Ich schwimme jeden Montag.\",\"lv\":\"Shkoj të notoj çdo të hënë.\"}]","study.comparison":"[{\"word\":\"baden\",\"meaning\":\"Noti/qëndrimi në ujë/larja\",\"example\":\"Unë shkoj në notë.\"},{\"word\":\"schwimmen\",\"meaning\":\"Noti si lëvizje ose sport\",\"example\":\"Ai noti shumë mirë.\"},{\"word\":\"duschen\",\"meaning\":\"Bëj një dush.\",\"example\":\"Unë dush në mëngjes.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"Shko të notosh\",\"example\":\"Unë shkoj të notoj sot.\"}]","study.tip":"{\"text\":\"Mos harroni: të pushoni në ujë të → ndotur • → Notarë të lëvizjes së notit.\"}","study.important":"[\"Baden dhe schwimmen nuk janë sinonime.\",\"Letonishtja zakonisht thotë \\\"noto\\\", por në gjermanisht duhet të zgjedhësh sipas situatës.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts baden\|idx:68 (baden), ceļš 'study': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"study.translation":"Not","study.explanation":"[\"Ideja kryesore: Baden do të thotë të lahesh, të qëndr…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "baden",
  "lv": "Not",
  "level": "A1",
  "study": {
    "id": "a1-baden",
    "layout": "standardStudy",
    "translation": "Not",
    "explanation": [
      "Ideja kryesore: Baden do të thotë të lahesh, të qëndrosh ose të shijosh ujin.",
      "Baden përdoret kur bëhet fjalë për t 'u çlodhur në ujë, liqen, det ose pishinë.",
      "Baden mund të nënkuptojë edhe banjën.",
      "Kur theksi është te sporti i lëvizjes ose vetë noti, fjala \"schwimmen\" përdoret më shpesh në gjermanisht."
    ],
    "examples": [
      {
        "de": "Ich gehe baden.",
        "lv": "Do shkoj të notoj."
      },
      {
        "de": "Wir gehen im See baden.",
        "lv": "Do të notojmë në liqen."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "Ajo noton shumë mirë."
      },
      {
        "de": "Ich schwimme jeden Montag.",
        "lv": "Shkoj të notoj çdo të hënë."
      }
    ],
    "comparison": [
      {
        "word": "baden",
        "meaning": "Noti/qëndrimi në ujë/larja",
        "example": "Unë shkoj në notë."
      },
      {
        "word": "schwimmen",
        "meaning": "Noti si lëvizje ose sport",
        "example": "Ai noti shumë mirë."
      },
      {
        "word": "duschen",
        "meaning": "Bëj një dush.",
        "example": "Unë dush në mëngjes."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "Shko të notosh",
        "example": "Unë shkoj të notoj sot."
      }
    ],
    "tip": {
      "text": "Mos harroni: të pushoni në ujë të → ndotur • → Notarë të lëvizjes së notit."
    },
    "important": [
      "Baden dhe schwimmen nuk janë sinonime.",
      "Letonishtja zakonisht thotë \"noto\", por në gjermanisht duhet të zgjedhësh sipas situatës."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "baden"
        ],
        "red": [
          "schwimmen",
          "Ideja"
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
          "meaning": {
            "purple": [
              "spor"
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
        {
          "blue": [
            "baden"
          ],
          "red": [
            "schwimmen"
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 11

**Audit ID:** `LRB095-0011`
**Finding Stable ID:** `g2/a1/sq|bei|idx:78|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `bei|idx:78`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** pie
**DE reference (read-only):** bei
**CURRENT (captured scope):** {"lv":"Hapur.","study.translation":"Hapur.","study.explanation":"Përdoret kur diçka është e afërt me një person, organizatë, vend ose ndodh në kushte të caktuara.","study.examples":"[{\"de\":\"Ich bin bei meinem Freund.\",\"lv\":\"Jam në shtëpinë e mikut tim.\"},{\"de\":\"Sie arbeitet bei Siemens.\",\"lv\":\"Punon në Siemens.\"},{\"de\":\"Bei Regen bleiben wir zu Hause.\",\"lv\":\"Qëndrojmë në shtëpi kur bie shi.\"}]","study.comparison":"[{\"word\":\"bei\",\"meaning\":\"Një person, kompani ose në rrethana të caktuara\",\"example\":\"Ich bin bei meiner Schwester. – Jam me motrën time.\"},{\"word\":\"an\",\"meaning\":\"Në mur, buzë, buzë, buzë sipërfaqësore\",\"example\":\"Das Bild hängt an der Wand. – Piktura është e varur në mur.\"},{\"word\":\"zu\",\"meaning\":\"Kush do të shkojë (drejtimi)\",\"example\":\"Ich gehe zu meinem Freund. – Po e takoj një mik.\"}]","study.tip":"{\"text\":\"Mos harroni: → bei në një person/vend/kompani.\"}","study.important":"[\"BEI zakonisht i referohet një personi, vendi ose kompanie.\",\"Kur bëhet fjalë për sipërfaqen, zakonisht keni nevojë për auf, jo bei.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts bei\|idx:78 (bei), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Hapur.","study.translation":"Hapur.","study.explanation":"Përdoret kur diçka është e afërt me një…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bei",
  "lv": "Hapur.",
  "level": "A1",
  "study": {
    "id": "a1-bei",
    "layout": "standardStudy",
    "translation": "Hapur.",
    "explanation": "Përdoret kur diçka është e afërt me një person, organizatë, vend ose ndodh në kushte të caktuara.",
    "examples": [
      {
        "de": "Ich bin bei meinem Freund.",
        "lv": "Jam në shtëpinë e mikut tim."
      },
      {
        "de": "Sie arbeitet bei Siemens.",
        "lv": "Punon në Siemens."
      },
      {
        "de": "Bei Regen bleiben wir zu Hause.",
        "lv": "Qëndrojmë në shtëpi kur bie shi."
      }
    ],
    "comparison": [
      {
        "word": "bei",
        "meaning": "Një person, kompani ose në rrethana të caktuara",
        "example": "Ich bin bei meiner Schwester. – Jam me motrën time."
      },
      {
        "word": "an",
        "meaning": "Në mur, buzë, buzë, buzë sipërfaqësore",
        "example": "Das Bild hängt an der Wand. – Piktura është e varur në mur."
      },
      {
        "word": "zu",
        "meaning": "Kush do të shkojë (drejtimi)",
        "example": "Ich gehe zu meinem Freund. – Po e takoj një mik."
      }
    ],
    "tip": {
      "text": "Mos harroni: → bei në një person/vend/kompani."
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
        "left": {}
      },
      "important": [
        {
          "purple": [
            "bei"
          ]
        },
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
      "BEI zakonisht i referohet një personi, vendi ose kompanie.",
      "Kur bëhet fjalë për sipërfaqen, zakonisht keni nevojë për auf, jo bei."
    ]
  }
}
```

---

## Finding 12

**Audit ID:** `LRB095-0012`
**Finding Stable ID:** `g2/a1/sq|Besuch|idx:87|study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `Besuch|idx:87`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** apmeklējums
**DE reference (read-only):** Besuch
**CURRENT (captured scope):** {"study.translation":"vizitë","study.explanation":"[\"Ideja kryesore: der Besuch nënkupton vizitë, kërkesë ose ardhje.\",\"Nëse flitet për një vend ose aktivitet, zakonisht përdoret vizitë.\",\"Nëse flitet për vizitimin e një persone, mund të thuhet ardhje ose kërkesë.\",\"Shumësi është die Besuche.\"]","study.examples":"[{\"de\":\"Der Besuch im Museum war interessant.\",\"lv\":\"Vizita në muzeum ishte interesante.\"},{\"de\":\"Danke für deinen Besuch.\",\"lv\":\"Faleminderit për vizitën tënde.\"},{\"de\":\"Der Arzt macht einen Besuch.\",\"lv\":\"Doktori shkon në vizitë.\"}]","study.comparison":"[{\"word\":\"der Besuch\",\"meaning\":\"vizitë • ardhje • kërkesë\",\"example\":\"Danke für deinen Besuch. – Faleminderit për vizitën tënde.\"},{\"word\":\"der Besucher\",\"meaning\":\"Vizitor\",\"example\":\"Der Besucher wartet draußen. – Vizitori pret jashtë.\"},{\"word\":\"besuchen\",\"meaning\":\"vizitoj • shkoj te\",\"example\":\"Ich besuche meine Großeltern. – Un vizitoj gjysherinjtë e mi.\"}]","study.tip":"{\"text\":\"Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks.\"}","study.important":"[\"der Besuch nuk është vetëm ardhje; mund të jetë edhe vizitë ose kërkesë.\",\"Shumësi: die Besuche.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Besuch\|idx:87 (Besuch), ceļš 'study': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"study.translation":"vizitë","study.explanation":"[\"Ideja kryesore: der Besuch nënkupton vizitë, kërke…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "vizitë",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "vizitë",
    "explanation": [
      "Ideja kryesore: der Besuch nënkupton vizitë, kërkesë ose ardhje.",
      "Nëse flitet për një vend ose aktivitet, zakonisht përdoret vizitë.",
      "Nëse flitet për vizitimin e një persone, mund të thuhet ardhje ose kërkesë.",
      "Shumësi është die Besuche."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "Vizita në muzeum ishte interesante."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Faleminderit për vizitën tënde."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "Doktori shkon në vizitë."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "vizitë • ardhje • kërkesë",
        "example": "Danke für deinen Besuch. – Faleminderit për vizitën tënde."
      },
      {
        "word": "der Besucher",
        "meaning": "Vizitor",
        "example": "Der Besucher wartet draußen. – Vizitori pret jashtë."
      },
      {
        "word": "besuchen",
        "meaning": "vizitoj • shkoj te",
        "example": "Ich besuche meine Großeltern. – Un vizitoj gjysherinjtë e mi."
      }
    ],
    "tip": {
      "text": "Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks."
    },
    "important": [
      "der Besuch nuk është vetëm ardhje; mund të jetë edhe vizitë ose kërkesë.",
      "Shumësi: die Besuche."
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

## Finding 13

**Audit ID:** `LRB095-0013`
**Finding Stable ID:** `g2/a1/sq|besuchen|idx:89|study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `besuchen|idx:89`
**Field / path:** `study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** apmeklēt
**DE reference (read-only):** besuchen
**CURRENT (captured scope):** {"study.translation":"vizitoj","study.explanation":"[\"Ideja kryesore: besuchen përdoret kur vizitoni një vend, aktivitet ose person.\",\"Vend, aktivitet ose kurs zakonisht vizitatet.\",\"Nëse besuchen i referohet një persone, zakonisht më natyrore është të thuash shkoj te.\",\"Në gjermanisht besuchen përdoret pa parafjalë dhe me akuzativin.\"]","study.examples":"[{\"de\":\"Ich besuche das Museum.\",\"lv\":\"Unë vizitoj një muze.\"},{\"de\":\"Wir besuchen einen Deutschkurs.\",\"lv\":\"Ne vizitojmë një kurs gjermanishteje.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"Unë vizitoj gjysherinjtë e mi.\"}]","study.comparison":"[{\"word\":\"besuchen\",\"meaning\":\"vizitoj vend ose aktivitet • shkoj te personë\",\"example\":\"Ich besuche meine Großeltern. – Un vizitoj gjysherinjtë e mi.\"},{\"word\":\"treffen\",\"meaning\":\"takoi\",\"example\":\"Ich treffe meinen Freund. – Unë takohem me shokun tim.\"},{\"word\":\"zu jemandem gehen\",\"meaning\":\"shkoj te dikush\",\"example\":\"Ich gehe zu meinem Freund. – Po e takoj një mik.\"}]","study.tip":"{\"text\":\"Atceries: vietu apmeklē, bet personu latviski bieži apciemo.\"}","study.important":"[\"besuchen përdoret pa parafjalë: Ich besuche meine Freundin.\",\"Përkthimi shqip varet nga objekti: vizitoj vendin, shkoj te personi.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts besuchen\|idx:89 (besuchen), ceļš 'study': viena rinda aptver apakšlaukus study.translation, study.explanation, study.examples, study.comparison, study.tip, kuru saturs sākas ar '{"study.translation":"vizitoj","study.explanation":"[\"Ideja kryesore: besuchen përdoret kur vizitoni nj…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "besuchen",
  "lv": "vizitoj",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "vizitoj",
    "explanation": [
      "Ideja kryesore: besuchen përdoret kur vizitoni një vend, aktivitet ose person.",
      "Vend, aktivitet ose kurs zakonisht vizitatet.",
      "Nëse besuchen i referohet një persone, zakonisht më natyrore është të thuash shkoj te.",
      "Në gjermanisht besuchen përdoret pa parafjalë dhe me akuzativin."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Unë vizitoj një muze."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Ne vizitojmë një kurs gjermanishteje."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Unë vizitoj gjysherinjtë e mi."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "vizitoj vend ose aktivitet • shkoj te personë",
        "example": "Ich besuche meine Großeltern. – Un vizitoj gjysherinjtë e mi."
      },
      {
        "word": "treffen",
        "meaning": "takoi",
        "example": "Ich treffe meinen Freund. – Unë takohem me shokun tim."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "shkoj te dikush",
        "example": "Ich gehe zu meinem Freund. – Po e takoj një mik."
      }
    ],
    "tip": {
      "text": "Atceries: vietu apmeklē, bet personu latviski bieži apciemo."
    },
    "important": [
      "besuchen përdoret pa parafjalë: Ich besuche meine Freundin.",
      "Përkthimi shqip varet nga objekti: vizitoj vendin, shkoj te personi."
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

## Finding 14

**Audit ID:** `LRB095-0014`
**Finding Stable ID:** `g2/a1/sq|bis|idx:91|lv, study|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `bis|idx:91`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** līdz
**DE reference (read-only):** bis
**CURRENT (captured scope):** {"lv":"Değin","study.translation":"Değin","study.explanation":"I referohet një kufiri, pike kohore ose kushti.","study.examples":"[{\"de\":\"Ich warte bis zu deiner Ankunft.\",\"lv\":\"Po pres ardhjen tënde.\"},{\"de\":\"Bleib hier, bis ich zurückkomme.\",\"lv\":\"Qëndro këtu derisa të kthehem.\"},{\"de\":\"Ich lerne Deutsch bis zum Abend.\",\"lv\":\"Po mësoj gjermanisht deri në mbrëmje.\"},{\"de\":\"Bis jetzt habe ich nichts verstanden.\",\"lv\":\"Nuk kuptoj ende asgjë.\"}]","study.comparison":"[{\"word\":\"bis\",\"meaning\":\"Deri në (u arrit pika kohore)\",\"example\":\"Ich bleibe bis morgen. – Do të qëndroj deri në orën18:00.\"},{\"word\":\"bis zu\",\"meaning\":\"Deri në (disa kohë)\",\"example\":\"bis zum Bahnhof – Punoj nga ora 9 deri në 5.\"},{\"word\":\"bis jetzt\",\"meaning\":\"Değin\",\"example\":\"Bis jetzt habe ich nichts verstanden. – Po pres që të vish.\"},{\"word\":\"bis jetzt\",\"meaning\":\"Deri më tani\",\"example\":\"Bis jetzt ist alles gut. – Deri tani, mirë.\"}]","study.tip":"{\"text\":\"Mos harroni: kufiri kohor/i statusit → përsëri.\"}","study.important":"[\"Bis = në kufirin ose pikën në kohë.\",\"Bis jetzt = deri tani • Bis dass = deri.\",\"bis jetzt nënkupton deri më tani.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts bis\|idx:91 (bis), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Değin","study.translation":"Değin","study.explanation":"I referohet një kufiri, pike kohore ose k…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bis",
  "lv": "Değin",
  "level": "A1",
  "study": {
    "id": "a1-bis",
    "layout": "standardStudy",
    "translation": "Değin",
    "explanation": "I referohet një kufiri, pike kohore ose kushti.",
    "examples": [
      {
        "de": "Ich warte bis zu deiner Ankunft.",
        "lv": "Po pres ardhjen tënde."
      },
      {
        "de": "Bleib hier, bis ich zurückkomme.",
        "lv": "Qëndro këtu derisa të kthehem."
      },
      {
        "de": "Ich lerne Deutsch bis zum Abend.",
        "lv": "Po mësoj gjermanisht deri në mbrëmje."
      },
      {
        "de": "Bis jetzt habe ich nichts verstanden.",
        "lv": "Nuk kuptoj ende asgjë."
      }
    ],
    "comparison": [
      {
        "word": "bis",
        "meaning": "Deri në (u arrit pika kohore)",
        "example": "Ich bleibe bis morgen. – Do të qëndroj deri në orën18:00."
      },
      {
        "word": "bis zu",
        "meaning": "Deri në (disa kohë)",
        "example": "bis zum Bahnhof – Punoj nga ora 9 deri në 5."
      },
      {
        "word": "bis jetzt",
        "meaning": "Değin",
        "example": "Bis jetzt habe ich nichts verstanden. – Po pres që të vish."
      },
      {
        "word": "bis jetzt",
        "meaning": "Deri më tani",
        "example": "Bis jetzt ist alles gut. – Deri tani, mirë."
      }
    ],
    "tip": {
      "text": "Mos harroni: kufiri kohor/i statusit → përsëri."
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
            "bis"
          ]
        }
      ]
    },
    "important": [
      "Bis = në kufirin ose pikën në kohë.",
      "Bis jetzt = deri tani • Bis dass = deri.",
      "bis jetzt nënkupton deri më tani."
    ]
  }
}
```

---

## Finding 15

**Audit ID:** `LRB095-0015`
**Finding Stable ID:** `g2/a1/sq|bitte|idx:93|lv; study.explanation; study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `bitte|idx:93`
**Field / path:** `lv; study.explanation; study.examples`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** lūdzu
**DE reference (read-only):** bitte
**CURRENT (captured scope):** {"lv":".:. Ju lutem ...","study.explanation":"[\"Ideja kryesore: Një fjalë e sjellshme e shkruar me shkronja të vogla. Isha mirë, të lutem.\",\"Bititi kryesisht do të thotë: mirësjellje.\",\"Zakonisht përshkruan: një fjalë të sjellshme.\"]","study.examples":"[{\"de\":\"Eine Tasse Kaffee, bitte.\",\"lv\":\".:. Ju lutem ...\"},{\"de\":\"Komm bitte herein.\",\"lv\":\".:. Ju lutem ...\"},{\"de\":\"Bitte schön!\",\"lv\":\"Do të doja një filxhan kafe, të lutem.\"},{\"de\":\"Kann ich bitte fragen?\",\"lv\":\"Ben te ju pyes ...\"},{\"de\":\"Ich habe eine Bitte.\",\"lv\":\"Unë jam babai yt!\"},{\"de\":\"Die Bitte ist wichtig.\",\"lv\":\"Kërkesa është e rëndësishme.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts bitte\|idx:93 (bitte), ceļš 'lv; study.explanation; study.examples': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, kuru saturs sākas ar '{"lv":".:. Ju lutem ...","study.explanation":"[\"Ideja kryesore: Një fjalë e sjellshme e shkruar me shkr…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bitte",
  "lv": ".:. Ju lutem ...",
  "level": "A1",
  "study": {
    "id": "a1-bitte",
    "layout": "standardStudy",
    "translation": ".:. Ju lutem ...",
    "explanation": [
      "Ideja kryesore: Një fjalë e sjellshme e shkruar me shkronja të vogla. Isha mirë, të lutem.",
      "Bititi kryesisht do të thotë: mirësjellje.",
      "Zakonisht përshkruan: një fjalë të sjellshme."
    ],
    "examples": [
      {
        "de": "Eine Tasse Kaffee, bitte.",
        "lv": ".:. Ju lutem ..."
      },
      {
        "de": "Komm bitte herein.",
        "lv": ".:. Ju lutem ..."
      },
      {
        "de": "Bitte schön!",
        "lv": "Do të doja një filxhan kafe, të lutem."
      },
      {
        "de": "Kann ich bitte fragen?",
        "lv": "Ben te ju pyes ..."
      },
      {
        "de": "Ich habe eine Bitte.",
        "lv": "Unë jam babai yt!"
      },
      {
        "de": "Die Bitte ist wichtig.",
        "lv": "Kërkesa është e rëndësishme."
      }
    ],
    "tip": [
      "Little bitte = please (Bitte schön!, Kaffee, bitte). capitalize die Bitte = request (eine Bitte, meine Bitte).",
      "Me mirësjellje, me shkronja të vogla. Dikur isha i sjellshëm, të lutem."
    ],
    "important": [
      "Bitte është e vogël • Nuk është emër, është fjalë e sjellshme.",
      "Die Bitte shkruhet me shkronja të mëdha dhe artikulli die është një emër.",
      "Plural: vdes nga morrat (dëshirat)."
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
        "meaning": ".:. Ju lutem ...",
        "example": "Komm bitte herein. – Të lutem, hyj brenda."
      },
      {
        "word": "die Bitte",
        "meaning": "Kërkesë",
        "example": "Ich habe eine Bitte. – Kam një kërkesë."
      }
    ]
  }
}
```

---

## Finding 16

**Audit ID:** `LRB095-0016`
**Finding Stable ID:** `g2/a1/sq|Bitte|idx:94|lv; study.examples|SEMANTIC_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `Bitte|idx:94`
**Field / path:** `lv; study.examples`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** SEMANTIC_MISMATCH
**LV source (read-only):** lūgums
**DE reference (read-only):** Bitte
**CURRENT (captured scope):** {"lv":"Kërkesë","study.examples":"[{\"de\":\"Ich habe eine Bitte.\",\"lv\":\"Unë jam babai yt!\"},{\"de\":\"Er erfüllt meine Bitte.\",\"lv\":\".:. Ju lutem ...\"},{\"de\":\"Sie hat zwei Bitten.\",\"lv\":\"Do të doja një filxhan kafe, të lutem.\"},{\"de\":\"Kann ich bitte fragen?\",\"lv\":\"Ben te ju pyes ...\"},{\"de\":\"Ich habe eine Bitte.\",\"lv\":\"Unë jam babai yt!\"},{\"de\":\"Die Bitte ist wichtig.\",\"lv\":\"Kërkesa është e rëndësishme.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Bitte\|idx:94 (Bitte), ceļš 'lv; study.examples': viena rinda aptver apakšlaukus lv, study.examples, kuru saturs sākas ar '{"lv":"Kërkesë","study.examples":"[{\"de\":\"Ich habe eine Bitte.\",\"lv\":\"Unë jam babai yt!\"},{\"de\…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "Kërkesë",
  "level": "A1",
  "study": {
    "id": "a1-bitte-study",
    "layout": "standardStudy",
    "translation": "Kërkesë",
    "explanation": [
      "Ideja kryesore: Një emër me nenin vdesin dhe shkronja të mëdha. Një kërkesë ose kërkesë specifike.",
      "Die Bitte në thelb do të thotë mirësi.",
      "Zakonisht përshkruan: një fjalë të sjellshme.",
      "Die Bitte në thelb do të thotë: dua/dua."
    ],
    "examples": [
      {
        "de": "Ich habe eine Bitte.",
        "lv": "Unë jam babai yt!"
      },
      {
        "de": "Er erfüllt meine Bitte.",
        "lv": ".:. Ju lutem ..."
      },
      {
        "de": "Sie hat zwei Bitten.",
        "lv": "Do të doja një filxhan kafe, të lutem."
      },
      {
        "de": "Kann ich bitte fragen?",
        "lv": "Ben te ju pyes ..."
      },
      {
        "de": "Ich habe eine Bitte.",
        "lv": "Unë jam babai yt!"
      },
      {
        "de": "Die Bitte ist wichtig.",
        "lv": "Kërkesa është e rëndësishme."
      }
    ],
    "tip": [
      "Little bitte = please (Bitte schön!, Kaffee, bitte). capitalize die Bitte = request (eine Bitte, meine Bitte).",
      "Një emër që përmban një artikull dhe një shkronjë të madhe. Një kërkesë ose kërkesë specifike."
    ],
    "important": [
      "Bitte është e vogël • Nuk është emër, është fjalë e sjellshme.",
      "Die Bitte shkruhet me shkronja të mëdha dhe artikulli die është një emër.",
      "Plural: vdes nga morrat (dëshirat)."
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
        "meaning": "Kërkesë",
        "example": "Ich habe eine Bitte. – Kam një kërkesë."
      },
      {
        "word": "bitte",
        "meaning": ".:. Ju lutem ...",
        "example": "Komm bitte herein. – Të lutem, hyj brenda."
      }
    ]
  }
}
```

---

## Finding 17

**Audit ID:** `LRB095-0017`
**Finding Stable ID:** `g2/a1/sq|bleiben|idx:101|lv; study.explanation; study.examples; study.comparison|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `bleiben|idx:101`
**Field / path:** `lv; study.explanation; study.examples; study.comparison`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** palikt
**DE reference (read-only):** bleiben
**CURRENT (captured scope):** {"lv":"Qëndro","study.explanation":"[\"Ideja kryesore: bleiben do të thotë të qëndrosh.\",\"Bleibeni përdoret kur një person ose send nuk humbet dhe mbetet në të njëjtin vend ose situatë.\",\"Kur bëhet fjalë për ndarjen, është e kundërta e ferrit dhe fahrenheit.\",\"Një term shumë popullor është Ich bleibe zu Hause.\"]","study.examples":"[{\"de\":\"Ich bleibe zu Hause.\",\"lv\":\"Do të qëndroj në shtëpi\"},{\"de\":\"Bleib hier!\",\"lv\":\"Qendro ketu!\"},{\"de\":\"Wir bleiben noch eine Stunde.\",\"lv\":\"Do të qëndrojmë për një orë tjetër.\"},{\"de\":\"Ich gehe nach Hause.\",\"lv\":\"Do shkoj në shtëpi.\"}]","study.comparison":"[{\"word\":\"bleiben\",\"meaning\":\"Qëndro\",\"example\":\"Unë qëndroj këtu.\"},{\"word\":\"gehen\",\"meaning\":\"Shko/shko në këmbë\",\"example\":\"Unë shkoj në shtëpi.\"},{\"word\":\"fahren\",\"meaning\":\"Shkuarja/vozitja me transport\",\"example\":\"Unë vozis në shtëpi.\"},{\"word\":\"warten\",\"meaning\":\"Prit\",\"example\":\"Unë pres këtu.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts bleiben\|idx:101 (bleiben), ceļš 'lv; study.explanation; study.examples; study.comparison': viena rinda aptver apakšlaukus lv, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Qëndro","study.explanation":"[\"Ideja kryesore: bleiben do të thotë të qëndrosh.\",\"Bleibeni për…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bleiben",
  "lv": "Qëndro",
  "level": "A1",
  "study": {
    "id": "a1-bleiben",
    "layout": "standardStudy",
    "translation": "Qëndro",
    "explanation": [
      "Ideja kryesore: bleiben do të thotë të qëndrosh.",
      "Bleibeni përdoret kur një person ose send nuk humbet dhe mbetet në të njëjtin vend ose situatë.",
      "Kur bëhet fjalë për ndarjen, është e kundërta e ferrit dhe fahrenheit.",
      "Një term shumë popullor është Ich bleibe zu Hause."
    ],
    "examples": [
      {
        "de": "Ich bleibe zu Hause.",
        "lv": "Do të qëndroj në shtëpi"
      },
      {
        "de": "Bleib hier!",
        "lv": "Qendro ketu!"
      },
      {
        "de": "Wir bleiben noch eine Stunde.",
        "lv": "Do të qëndrojmë për një orë tjetër."
      },
      {
        "de": "Ich gehe nach Hause.",
        "lv": "Do shkoj në shtëpi."
      }
    ],
    "comparison": [
      {
        "word": "bleiben",
        "meaning": "Qëndro",
        "example": "Unë qëndroj këtu."
      },
      {
        "word": "gehen",
        "meaning": "Shko/shko në këmbë",
        "example": "Unë shkoj në shtëpi."
      },
      {
        "word": "fahren",
        "meaning": "Shkuarja/vozitja me transport",
        "example": "Unë vozis në shtëpi."
      },
      {
        "word": "warten",
        "meaning": "Prit",
        "example": "Unë pres këtu."
      }
    ],
    "tip": {
      "text": "Mos harroni→: bleiben • → Mos i lini gjethet në këmbë."
    },
    "important": [
      "Bleiben do të thotë të qëndrosh, jo të presësh.",
      "Hier e tyre e zymtë = Unë do të qëndroj këtu • Vlera e tyre hier = Unë jam duke pritur këtu."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "bleiben"
        ],
        "red": [
          "fahrenheit"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "bleibe"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Bleib"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "bleiben"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "red": [
              "gehe"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "bleiben"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
          "example": {
            "green": [
              "warto"
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
            "bleiben"
          ]
        },
        {
          "blue": [
            "Hier"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 18

**Audit ID:** `LRB095-0018`
**Finding Stable ID:** `g2/a1/sq|bringen|idx:111|lv; study.examples; study.comparison|SEMANTIC_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `bringen|idx:111`
**Field / path:** `lv; study.examples; study.comparison`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** SEMANTIC_MISMATCH
**LV source (read-only):** atnest
**DE reference (read-only):** bringen
**CURRENT (captured scope):** {"lv":"Sill • Merr","study.examples":"[{\"de\":\"Ich bringe dir ein Buch.\",\"lv\":\"Ju lutem më sillni ujë\"},{\"de\":\"Ich bringe das Paket zur Post.\",\"lv\":\"Do të dërgoj në shtëpi.\"},{\"de\":\"Ich bringe die Kinder zur Schule.\",\"lv\":\"Ajo e çon librin në shkollë.\"},{\"de\":\"Ich nehme das Buch.\",\"lv\":\"Po e marr librin\"}]","study.comparison":"[{\"word\":\"bringen\",\"meaning\":\"Sill /merr/dorëzo\",\"example\":\"Ich bringe dir ein Buch. – Mir Wasser'ı getir.\"},{\"word\":\"bringen\",\"meaning\":\"Merre atë.\",\"example\":\"Ich bringe das Paket zur Post. – Ich nehme das Buch.\"},{\"word\":\"bringen\",\"meaning\":\"Merre.\",\"example\":\"Ich bringe die Kinder zur Schule. – Ich dziura Wasser.\"},{\"word\":\"bringen\",\"meaning\":\"Merre dhe sille\",\"example\":\"Ich bringe dir ein Buch. – Bringst du Brot mit?\"},{\"word\":\"nehmen\",\"meaning\":\"marr\",\"example\":\"Ich nehme das Buch. – Unë marr librin.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts bringen\|idx:111 (bringen), ceļš 'lv; study.examples; study.comparison': viena rinda aptver apakšlaukus lv, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Sill • Merr","study.examples":"[{\"de\":\"Ich bringe dir ein Buch.\",\"lv\":\"Ju lutem më sillni …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bringen",
  "lv": "Sill • Merr",
  "level": "A1",
  "study": {
    "id": "a1-bringen",
    "layout": "standardStudy",
    "translation": "Sill • Merr",
    "explanation": [
      "Ideja kryesore: Sjellja e mjeteve dikujt për të sjellë, mbajtur ose ofruar diçka.",
      "Ne përdorim Bringen kur diçka zhvendoset në një vend tjetër ose në një person tjetër.",
      "Kjo nuk është e njëjtë me Nehmenin, sepse Nehmen do të thotë ta marrësh vetë.",
      "Holen do të thotë të ndjekësh, të sjellësh ose të marrësh dikë.",
      "Përkthimi përcaktohet nga konteksti."
    ],
    "examples": [
      {
        "de": "Ich bringe dir ein Buch.",
        "lv": "Ju lutem më sillni ujë"
      },
      {
        "de": "Ich bringe das Paket zur Post.",
        "lv": "Do të dërgoj në shtëpi."
      },
      {
        "de": "Ich bringe die Kinder zur Schule.",
        "lv": "Ajo e çon librin në shkollë."
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Po e marr librin"
      }
    ],
    "comparison": [
      {
        "word": "bringen",
        "meaning": "Sill /merr/dorëzo",
        "example": "Ich bringe dir ein Buch. – Mir Wasser'ı getir."
      },
      {
        "word": "bringen",
        "meaning": "Merre atë.",
        "example": "Ich bringe das Paket zur Post. – Ich nehme das Buch."
      },
      {
        "word": "bringen",
        "meaning": "Merre.",
        "example": "Ich bringe die Kinder zur Schule. – Ich dziura Wasser."
      },
      {
        "word": "bringen",
        "meaning": "Merre dhe sille",
        "example": "Ich bringe dir ein Buch. – Bringst du Brot mit?"
      },
      {
        "word": "nehmen",
        "meaning": "marr",
        "example": "Ich nehme das Buch. – Unë marr librin."
      }
    ],
    "tip": {
      "text": "Mos harro: shko → merre një të tillë • Merre për vete → nehmen."
    },
    "important": [
      "Trego rrugën për te dikush ose diku.",
      "Nehmen do të thotë të marrësh, por jo t 'i dorëzosh tjetrit.",
      "Përkthimi shqip varet nga konteksti."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "bringen"
        ],
        "red": [
          "nehmen",
          "holen"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Bring"
            ],
            "yellow": [
              "Wasser"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "bringe"
            ],
            "green": [
              "dich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "bringt"
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
              "nehme"
            ],
            "yellow": [
              "Buch"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "bringen"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "nehmen"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "nehme"
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
              "mitbringen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "mit"
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
          "red": [
            "nehmen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 19

**Audit ID:** `LRB095-0019`
**Finding Stable ID:** `g2/a1/sq|da|idx:126|lv; study.examples|SEMANTIC_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `da|idx:126`
**Field / path:** `lv; study.examples`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** SEMANTIC_MISMATCH
**LV source (read-only):** tur
**DE reference (read-only):** da
**CURRENT (captured scope):** {"lv":"Atje ju ...","study.examples":"[{\"de\":\"Da ist mein Auto.\",\"lv\":\"Makina ime është atje.\"},{\"de\":\"Ich war da.\",\"lv\":\"Isha atje.\"},{\"de\":\"Da kommt er.\",\"lv\":\"Ha ku po vjen.\"},{\"de\":\"Komm mal da her!\",\"lv\":\"Bruce!\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts da\|idx:126 (da), ceļš 'lv; study.examples': viena rinda aptver apakšlaukus lv, study.examples, kuru saturs sākas ar '{"lv":"Atje ju ...","study.examples":"[{\"de\":\"Da ist mein Auto.\",\"lv\":\"Makina ime është atje.\"},…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "da",
  "lv": "Atje ju ...",
  "level": "A1",
  "study": {
    "id": "a1-da",
    "layout": "standardStudy",
    "translation": "Atje ju ...",
    "explanation": [
      "Ideja kryesore: Niveli A1 nënkupton edhe atë më shpesh.",
      "Tregon gjithashtu një vend ose i referohet diçkaje të përmendur më parë.",
      "Në varësi të rastit, kjo mund të përkthehet edhe këtu ose këtu.",
      "Në nivelin A1, ne kryesisht mësojmë da si një fjalë e përgjithshme e vendit."
    ],
    "examples": [
      {
        "de": "Da ist mein Auto.",
        "lv": "Makina ime është atje."
      },
      {
        "de": "Ich war da.",
        "lv": "Isha atje."
      },
      {
        "de": "Da kommt er.",
        "lv": "Ha ku po vjen."
      },
      {
        "de": "Komm mal da her!",
        "lv": "Bruce!"
      }
    ],
    "comparison": [
      {
        "word": "da",
        "meaning": "Atje • Këtu • Këtu (të përgjithshme)",
        "example": "Atje është makina ime."
      },
      {
        "word": "hier",
        "meaning": "Këtu (në një vend specifik)",
        "example": "Këtu është makina ime."
      },
      {
        "word": "dort",
        "meaning": "Atje (përpara)",
        "example": "Atje është makina ime."
      },
      {
        "word": "dann",
        "meaning": "Atëherë...",
        "example": "Pastaj ne shkojmë në shtëpi."
      }
    ],
    "tip": {
      "text": "Mos harroni: Gjenerali do → ta vendosë atje."
    },
    "sectionAccents": {
      "explanation": {
        "blue": [
          "da"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Da"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "da"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Da"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "da"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "da"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "hier"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "dort"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "dann"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "Dann"
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
        "Tutaj"
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
      "Kjo do t 'i japë vendit emrin e tij të përgjithshëm.",
      "Loja është e veçanta “këtu”, torta është edhe më shumë “atje”."
    ]
  }
}
```

---

## Finding 20

**Audit ID:** `LRB095-0020`
**Finding Stable ID:** `g2/a1/sq|ein|idx:154|lv/study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `ein|idx:154`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** nenoteiktais artikuls
**DE reference (read-only):** ein
**CURRENT (captured scope):** {"lv":"Artikull i paqartë • Një • Dikush","study.translation":"Artikull i paqartë • Një • Dikush","study.explanation":"[\"Ideja kryesore: ein është artikulli i papërcaktuar.\",\"ein është artikulli i papërcaktuar për emra mashkullor dhe neutral në nominativ.\",\"ein përdoret me gender mashkullor: ein Mann.\",\"ein përdoret me gender neutral: ein Buch.\",\"Me gender femëror përdoret: eine.\",\"Në akuzativ me gender mashkullor: einen.\"]","study.examples":"[{\"de\":\"Ein Mann wartet draußen.\",\"lv\":\"Një burrë po pret jashtë.\"},{\"de\":\"Ich habe ein Buch.\",\"lv\":\"Kam një libër.\"},{\"de\":\"Er sucht einen Stift.\",\"lv\":\"Ai po kërkon një stilolaps.\"},{\"de\":\"Ein Kind spielt.\",\"lv\":\"Një fëmijë po luan.\"}]","study.comparison":"[{\"word\":\"ein Mann\",\"meaning\":\"gender mashkullor\",\"example\":\"Një burrë pret jashtë.\"},{\"word\":\"eine Frau\",\"meaning\":\"gender femëror\",\"example\":\"një grua\"},{\"word\":\"ein Buch\",\"meaning\":\"gender neutral\",\"example\":\"Unë kam një libër.\"},{\"word\":\"einen Mann\",\"meaning\":\"akuzativ\",\"example\":\"një burrë\"}]","study.tip":"{\"text\":\"Mos harroni: dikush i → pasigurt.\"}","study.important":"[\"Ein nuk është një artikull i caktuar.\",\"Nëse subjekti tashmë është i njohur konkretisht, shpesh nevojitet Die ose das.\",\"eine — gender femëror.\",\"einen — akuzativ.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts ein\|idx:154 (ein), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Artikull i paqartë • Një • Dikush","study.translation":"Artikull i paqartë • Një • Dikush","study…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ein",
  "lv": "Artikull i paqartë • Një • Dikush",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "Artikull i paqartë • Një • Dikush",
    "explanation": [
      "Ideja kryesore: ein është artikulli i papërcaktuar.",
      "ein është artikulli i papërcaktuar për emra mashkullor dhe neutral në nominativ.",
      "ein përdoret me gender mashkullor: ein Mann.",
      "ein përdoret me gender neutral: ein Buch.",
      "Me gender femëror përdoret: eine.",
      "Në akuzativ me gender mashkullor: einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Një burrë po pret jashtë."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Kam një libër."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Ai po kërkon një stilolaps."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Një fëmijë po luan."
      }
    ],
    "tip": {
      "text": "Mos harroni: dikush i → pasigurt."
    },
    "sectionAccents": {
      "examples": [
        {
          "de": {
            "blue": [
              "Ein"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ein"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "einen"
            ]
          },
          "lv": {}
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
        "left": {}
      },
      "important": [
        {
          "blue": [
            "ein"
          ]
        },
        {
          "blue": [
            "Nëse",
            "die",
            "das"
          ],
          "green": [
            "Nëse"
          ]
        }
      ]
    },
    "important": [
      "Ein nuk është një artikull i caktuar.",
      "Nëse subjekti tashmë është i njohur konkretisht, shpesh nevojitet Die ose das.",
      "eine — gender femëror.",
      "einen — akuzativ."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "gender mashkullor",
        "example": "Një burrë pret jashtë."
      },
      {
        "word": "eine Frau",
        "meaning": "gender femëror",
        "example": "një grua"
      },
      {
        "word": "ein Buch",
        "meaning": "gender neutral",
        "example": "Unë kam një libër."
      },
      {
        "word": "einen Mann",
        "meaning": "akuzativ",
        "example": "një burrë"
      }
    ]
  }
}
```

---

## Finding 21

**Audit ID:** `LRB095-0021`
**Finding Stable ID:** `g2/a1/sq|einmal|idx:700|lv; study.translation; study.explanation; study.examples; study.tip; study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `einmal|idx:700`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vienreiz • reiz
**DE reference (read-only):** einmal
**CURRENT (captured scope):** {"lv":"Një herë • Një herë","study.translation":"Një herë • Një herë","study.explanation":"[\"Ideja kryesore: I referohet kohës ose së kaluarës (unë një herë...).\",\"Einmal temel olarak şu anlama gelir: bir kez/geçmişte.\",\"Genellikle şu şekilde karakterize edilir: hava koşulları.\",\"Einmal i referohet një kohe ose të kaluare specifike (një herë...).\"]","study.examples":"[{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Isha një herë në Berlin.\"},{\"de\":\"Ich war einmal in Berlin.\",\"lv\":\"Isha një herë në Berlin.\"}]","study.tip":"[\"Einmal = një herë\",\"Bağlam bu anlama uygun olduğunda einmal kullanın.\"]","study.important":"[\"Einmal = një herë ose një herë në të kaluarën.\",\"I referohet kohës ose të kaluarës (dikur isha...).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts einmal\|idx:700 (einmal), ceļš 'lv; study.translation; study.explanation; study.examples; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Një herë • Një herë","study.translation":"Një herë • Një herë","study.explanation":"[\"Ideja krye…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "einmal",
  "lv": "Një herë • Një herë",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "Një herë • Një herë",
    "explanation": [
      "Ideja kryesore: I referohet kohës ose së kaluarës (unë një herë...).",
      "Einmal temel olarak şu anlama gelir: bir kez/geçmişte.",
      "Genellikle şu şekilde karakterize edilir: hava koşulları.",
      "Einmal i referohet një kohe ose të kaluare specifike (një herë...)."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Isha një herë në Berlin."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Isha një herë në Berlin."
      }
    ],
    "tip": [
      "Einmal = një herë",
      "Bağlam bu anlama uygun olduğunda einmal kullanın."
    ],
    "important": [
      "Einmal = një herë ose një herë në të kaluarën.",
      "I referohet kohës ose të kaluarës (dikur isha...)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "einmal"
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
          "lv": {}
        },
        {
          "de": {
            "green": [
              "einmal",
              "einmal"
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

## Finding 22

**Audit ID:** `LRB095-0022`
**Finding Stable ID:** `g2/a1/sq|Eis|idx:157|lv/study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `Eis|idx:157`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** ledus • saldējums
**DE reference (read-only):** Eis
**CURRENT (captured scope):** {"lv":"Akullore • Akullore","study.translation":"Akullore • Akullore","study.explanation":"[\"Ideja kryesore: das Eis mund të nënkuptojë akullore dhe xhelatinë.\",\"Letonishtja shpesh thotë \\\"akull\\\" kur flet për ujë të ftohtë dhe të ngrirë.\",\"Kur bëhet fjalë për ushqim ose ëmbëlsirë, das Eis kryesisht do të thotë akullore në jetën e përditshme.\",\"Konteksti shpesh ju tregon menjëherë se cili është kuptimi i synuar.\",\"Shprehjet më të rëndësishme në nivelin A1 janë ein Eis essen dhe Eis im Glas.\"]","study.examples":"[{\"de\":\"Ich esse ein Eis.\",\"lv\":\"Ambienti im i akullores\"},{\"de\":\"Möchtest du ein Eis?\",\"lv\":\"Dëshiron akullore\"},{\"de\":\"Im Winter liegt Eis auf dem See.\",\"lv\":\"Në dimër ka akull në liqen.\"},{\"de\":\"Das Eis ist kalt.\",\"lv\":\"Ftohje akulli.\"},{\"de\":\"Ich nehme ein Eis mit Schokolade.\",\"lv\":\"Dua akullore me çokollatë.\"}]","study.comparison":"[{\"word\":\"das Eis\",\"meaning\":\"Akullore / akullore\",\"example\":\"Ich esse ein Eis. = Unë ha akullore.\"},{\"word\":\"der Schnee\",\"meaning\":\"Do të bjerë borë\",\"example\":\"Der Schnee ist weiß. = Bora është e bardhë.\"},{\"word\":\"kalt\",\"meaning\":\"Ftohët.\",\"example\":\"Das Wasser ist kalt. = Uji është i ftohtë.\"},{\"word\":\"das Dessert\",\"meaning\":\"E bukur.\",\"example\":\"Eis ist ein Dessert. = Akullore është një ëmbëlsirë.\"}]","study.tip":"{\"text\":\"Mos harroni: ushqimi është → akull • Dimri/uji është → akull.\"}","study.important":"[\"Akullorja dhe xhelatina janë dy fjalë të ndryshme në letonisht, por në gjermanisht das Eis përdoren shpesh të dyja fjalët.\",\"Konteksti ka rëndësi: Ushqimi do të thotë akullore, një sipërfaqe e ftohtë ose ujë do të thotë akull.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Eis\|idx:157 (Eis), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Akullore • Akullore","study.translation":"Akullore • Akullore","study.explanation":"[\"Ideja krye…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "Akullore • Akullore",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "Akullore • Akullore",
    "explanation": [
      "Ideja kryesore: das Eis mund të nënkuptojë akullore dhe xhelatinë.",
      "Letonishtja shpesh thotë \"akull\" kur flet për ujë të ftohtë dhe të ngrirë.",
      "Kur bëhet fjalë për ushqim ose ëmbëlsirë, das Eis kryesisht do të thotë akullore në jetën e përditshme.",
      "Konteksti shpesh ju tregon menjëherë se cili është kuptimi i synuar.",
      "Shprehjet më të rëndësishme në nivelin A1 janë ein Eis essen dhe Eis im Glas."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Ambienti im i akullores"
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Dëshiron akullore"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Në dimër ka akull në liqen."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Ftohje akulli."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Dua akullore me çokollatë."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "Akullore / akullore",
        "example": "Ich esse ein Eis. = Unë ha akullore."
      },
      {
        "word": "der Schnee",
        "meaning": "Do të bjerë borë",
        "example": "Der Schnee ist weiß. = Bora është e bardhë."
      },
      {
        "word": "kalt",
        "meaning": "Ftohët.",
        "example": "Das Wasser ist kalt. = Uji është i ftohtë."
      },
      {
        "word": "das Dessert",
        "meaning": "E bukur.",
        "example": "Eis ist ein Dessert. = Akullore është një ëmbëlsirë."
      }
    ],
    "tip": {
      "text": "Mos harroni: ushqimi është → akull • Dimri/uji është → akull."
    },
    "important": [
      "Akullorja dhe xhelatina janë dy fjalë të ndryshme në letonisht, por në gjermanisht das Eis përdoren shpesh të dyja fjalët.",
      "Konteksti ka rëndësi: Ushqimi do të thotë akullore, një sipërfaqe e ftohtë ose ujë do të thotë akull."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Eis",
          "Eis"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Eis"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "das Eis"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "Eis"
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
              "bjerë"
            ]
          },
          "example": {
            "green": [
              "Schnee"
            ]
          }
        },
        {
          "word": {
            "green": [
              "kalt"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "kalt"
            ]
          }
        },
        {
          "word": {
            "green": [
              "das Dessert"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "deser"
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
            "das Eis"
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 23

**Audit ID:** `LRB095-0023`
**Finding Stable ID:** `g2/a1/sq|erst|idx:165|lv/study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `erst|idx:165`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** tikai
**DE reference (read-only):** erst
**CURRENT (captured scope):** {"lv":"Së pari • Vetëm","study.translation":"Së pari • Vetëm","study.explanation":"[\"Ideja kryesore: erst shpesh nënkupton vetëm. Megjithatë, në kontekst të caktuar, mund të nënkuptojë fillimisht.\",\"erst shpesh tregon se diçka ndodh më vonë sesa pritet.\",\"Ich bin erst 18. — Jam vetëm 18 vjeç.\",\"Es ist erst Montag. — Është vetëm e hënë.\",\"Erst lernen, dann spielen. — Fillimisht mëso, pastaj loje.\"]","study.examples":"[{\"de\":\"Erst lernen, dann spielen.\",\"lv\":\"Pini së pari, pastaj vozitni.\"},{\"de\":\"Ich komme erst morgen.\",\"lv\":\"Nuk do të jem atje deri nesër.\"},{\"de\":\"Er ist erst 18 Jahre alt.\",\"lv\":\"Ai është vetëm 18 vjeç.\"},{\"de\":\"Wir essen erst um acht Uhr.\",\"lv\":\"Ne nuk hamë deri në orën tetë.\"}]","study.comparison":"[{\"word\":\"erst\",\"meaning\":\"Së pari • Vetëm\",\"example\":\"Erst lernen, dann spielen. – Ndalo së pari. = Së pari jep, makarona ndërpritet.\"},{\"word\":\"zuerst\",\"meaning\":\"Fillestar • Fillimisht\",\"example\":\"Zuerst frühstücken wir. = Fillimisht ne hemi mëngjes.\"},{\"word\":\"nur\",\"meaning\":\"Më vjen keq.\",\"example\":\"Ich habe nur 5 Euro. = Kam vetëm 5 euro.\"},{\"word\":\"dann\",\"meaning\":\"Atëherë...\",\"example\":\"Dann gehen wir nach Hause. = Pastaj ne shkojmë në shtëpi.\"}]","study.tip":"{\"text\":\"Pyetjet: laiks/skaits → erst • Daudzumlar → nur.\"}","study.important":"[\"Erst dhe Nur mund të tingëllojnë \\\"të drejtë\\\", por nuk janë e njëjta gjë.\",\"I pari shpesh flet për kohën, renditjen ose arritjen në një pikë. • Nur kufizon shumën.\",\"zuerst shpesh nënkupton: fillimisht.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts erst\|idx:165 (erst), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Së pari • Vetëm","study.translation":"Së pari • Vetëm","study.explanation":"[\"Ideja kryesore: er…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "erst",
  "lv": "Së pari • Vetëm",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "Së pari • Vetëm",
    "explanation": [
      "Ideja kryesore: erst shpesh nënkupton vetëm. Megjithatë, në kontekst të caktuar, mund të nënkuptojë fillimisht.",
      "erst shpesh tregon se diçka ndodh më vonë sesa pritet.",
      "Ich bin erst 18. — Jam vetëm 18 vjeç.",
      "Es ist erst Montag. — Është vetëm e hënë.",
      "Erst lernen, dann spielen. — Fillimisht mëso, pastaj loje."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Pini së pari, pastaj vozitni."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Nuk do të jem atje deri nesër."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Ai është vetëm 18 vjeç."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Ne nuk hamë deri në orën tetë."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "Së pari • Vetëm",
        "example": "Erst lernen, dann spielen. – Ndalo së pari. = Së pari jep, makarona ndërpritet."
      },
      {
        "word": "zuerst",
        "meaning": "Fillestar • Fillimisht",
        "example": "Zuerst frühstücken wir. = Fillimisht ne hemi mëngjes."
      },
      {
        "word": "nur",
        "meaning": "Më vjen keq.",
        "example": "Ich habe nur 5 Euro. = Kam vetëm 5 euro."
      },
      {
        "word": "dann",
        "meaning": "Atëherë...",
        "example": "Dann gehen wir nach Hause. = Pastaj ne shkojmë në shtëpi."
      }
    ],
    "tip": {
      "text": "Pyetjet: laiks/skaits → erst • Daudzumlar → nur."
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
          "example": {}
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
          "example": {}
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
        "left": {}
      },
      "important": [
        {
          "blue": [
            "erst"
          ],
          "yellow": [
            "nur"
          ]
        },
        {
          "yellow": [
            "nur"
          ]
        }
      ]
    },
    "important": [
      "Erst dhe Nur mund të tingëllojnë \"të drejtë\", por nuk janë e njëjta gjë.",
      "I pari shpesh flet për kohën, renditjen ose arritjen në një pikë. • Nur kufizon shumën.",
      "zuerst shpesh nënkupton: fillimisht."
    ]
  }
}
```

---

## Finding 24

**Audit ID:** `LRB095-0024`
**Finding Stable ID:** `g2/a1/sq|es|idx:167|lv/study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `es|idx:167`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** tas
**DE reference (read-only):** es
**CURRENT (captured scope):** {"lv":"Për • Për • Formularin jo-personal","study.translation":"Për • Për • Formularin jo-personal","study.explanation":"[\"Ideja kryesore: es është një zëvendës.\",\"Përdoret: ajo, në konstruksione të papersonshme.\"]","study.examples":"[{\"de\":\"Es regnet.\",\"lv\":\"Po mësoj gjermanisht.\"},{\"de\":\"Es ist kalt.\",\"lv\":\"E lodhur.\"},{\"de\":\"Das Kind schläft.\",\"lv\":\"Punon këtu.\"},{\"de\":\"Es ist müde.\",\"lv\":\"Ky është libri im.\"},{\"de\":\"Es regnet.\",\"lv\":\"Po bie shi!\"},{\"de\":\"Es schneit.\",\"lv\":\"Po bie borë. - Po.\"}]","study.comparison":"[{\"word\":\"es\",\"meaning\":\"ajo • forma e papersonshme\",\"example\":\"Es regnet. – Po bie shi.\"},{\"word\":\"ich\",\"meaning\":\"unë (persona)\",\"example\":\"Ich lerne Deutsch. – Unë mësoj gjermanisht.\"}]","study.tip":"{\"text\":\"Mos harroni: \\\"es\\\" në → letonisht, jo në gjermanisht.\"}","study.important":"[\"Gjermanisht \\\"Unë\\\" jo letonisht \\\"Unë\\\".\",\"Letonishtja \\\"I\\\" është në gjermanisht. • Es në gjermanisht zakonisht do të thotë kjo/ajo ose jo e përkthyer.\",\"Shqipja \\\"unë\\\" në gjermanisht është ich; gjermanishtja es shpesh nënkupton ajo ose nuk përkthyhet.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts es\|idx:167 (es), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Për • Për • Formularin jo-personal","study.translation":"Për • Për • Formularin jo-personal","stu…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "es",
  "lv": "Për • Për • Formularin jo-personal",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "Për • Për • Formularin jo-personal",
    "explanation": [
      "Ideja kryesore: es është një zëvendës.",
      "Përdoret: ajo, në konstruksione të papersonshme."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Po mësoj gjermanisht."
      },
      {
        "de": "Es ist kalt.",
        "lv": "E lodhur."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Punon këtu."
      },
      {
        "de": "Es ist müde.",
        "lv": "Ky është libri im."
      },
      {
        "de": "Es regnet.",
        "lv": "Po bie shi!"
      },
      {
        "de": "Es schneit.",
        "lv": "Po bie borë. - Po."
      }
    ],
    "info": [
      "Łotewskie „es” = niemieckie „ich”",
      "Almanca \"I\" = bu • Yani • kişisel olmayan biçim"
    ],
    "tip": {
      "text": "Mos harroni: \"es\" në → letonisht, jo në gjermanisht."
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
        {},
        {}
      ],
      "tip": {
        "left": {}
      },
      "important": [
        {},
        {
          "red": [
            "Letonishtja"
          ],
          "blue": [
            "es"
          ]
        }
      ]
    },
    "important": [
      "Gjermanisht \"Unë\" jo letonisht \"Unë\".",
      "Letonishtja \"I\" është në gjermanisht. • Es në gjermanisht zakonisht do të thotë kjo/ajo ose jo e përkthyer.",
      "Shqipja \"unë\" në gjermanisht është ich; gjermanishtja es shpesh nënkupton ajo ose nuk përkthyhet."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "ajo • forma e papersonshme",
        "example": "Es regnet. – Po bie shi."
      },
      {
        "word": "ich",
        "meaning": "unë (persona)",
        "example": "Ich lerne Deutsch. – Unë mësoj gjermanisht."
      }
    ]
  }
}
```

---

## Finding 25

**Audit ID:** `LRB095-0025`
**Finding Stable ID:** `g2/a1/sq|Essen|idx:691|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `Essen|idx:691`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** ēdiens • maltīte
**DE reference (read-only):** Essen
**CURRENT (captured scope):** {"lv":"Yiyecek • Yemek","study.translation":"Yiyecek • Yemek","study.explanation":"[\"Ana fikir: İsim – yiyecek veya bütün bir öğün.\",\"Das Essen do të thotë të hash para së gjithash.\",\"Çoğunlukla şunu tanımlar: eylem.\",\"Das Essen në thelb do të thotë: ushqim ose ushqim.\",\"Shpesh përshkruhet si shi.\",\"Essen yemek demektir.\",\"Das Essen mund të nënkuptojë ushqim ose ushqim në përgjithësi.\"]","study.examples":"[{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Ushqimi ka shije të mirë.\"},{\"de\":\"Was wollt ihr essen?\",\"lv\":\"Ne yemek istersin?\"},{\"de\":\"Wir essen um 12 Uhr.\",\"lv\":\"Saat 12.00'de yemek yiyoruz.\"},{\"de\":\"Das Essen ist fertig.\",\"lv\":\"(kamarier) Darka është gati.\"},{\"de\":\"Das Essen schmeckt sehr gut.\",\"lv\":\"Ushqimi ka shije shumë të mirë.\"},{\"de\":\"Das Essen schmeckt gut.\",\"lv\":\"Ushqimi ka shije të mirë.\"}]","study.tip":"[\"Das Essen = yemek\",\"Përdor Essen kur konteksti përshtatet.\"]","study.important":"[\"Eseni është folje pa artikuj.\",\"Das Eseni nuk është i njëjtë me Eseninin.\",\"Eylem: essen.\",\"Rasti/vakti: das Essen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Essen\|idx:691 (Essen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Yiyecek • Yemek","study.translation":"Yiyecek • Yemek","study.explanation":"[\"Ana fikir: İsim – …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "Yiyecek • Yemek",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "Yiyecek • Yemek",
    "explanation": [
      "Ana fikir: İsim – yiyecek veya bütün bir öğün.",
      "Das Essen do të thotë të hash para së gjithash.",
      "Çoğunlukla şunu tanımlar: eylem.",
      "Das Essen në thelb do të thotë: ushqim ose ushqim.",
      "Shpesh përshkruhet si shi.",
      "Essen yemek demektir.",
      "Das Essen mund të nënkuptojë ushqim ose ushqim në përgjithësi."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Ushqimi ka shije të mirë."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Ne yemek istersin?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Saat 12.00'de yemek yiyoruz."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "(kamarier) Darka është gati."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Ushqimi ka shije shumë të mirë."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Ushqimi ka shije të mirë."
      }
    ],
    "tip": [
      "Das Essen = yemek",
      "Përdor Essen kur konteksti përshtatet."
    ],
    "important": [
      "Eseni është folje pa artikuj.",
      "Das Eseni nuk është i njëjtë me Eseninin.",
      "Eylem: essen.",
      "Rasti/vakti: das Essen."
    ],
    "sectionAccents": {
      "explanation": {
        "yellow": [
          "das Essen",
          "essen"
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
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "das Essen",
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

---

## Finding 26

**Audit ID:** `LRB095-0026`
**Finding Stable ID:** `g2/a1/sq|etwas|idx:169|lv/study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `etwas|idx:169`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** kaut kas
**DE reference (read-only):** etwas
**CURRENT (captured scope):** {"lv":"Diçka • Disa","study.translation":"Diçka • Disa","study.explanation":"[\"Ideja kryesore: etwas do të thotë diçka ose pak, në varësi të kontekstit.\",\"Nëse zëvendëson diçka të panjohur, letonishtja zakonisht thotë diçka.\",\"Kur Etwas i paraprin një mbiemri ose sasie, zakonisht do të thotë pak.\"]","study.examples":"[{\"de\":\"Ich möchte etwas trinken.\",\"lv\":\"Dua diçka për të pirë.\"},{\"de\":\"Hast du etwas Zeit?\",\"lv\":\"Ke një minutë për mua?\"},{\"de\":\"Ich bin etwas müde.\",\"lv\":\"Jam disi e lodhur.\"},{\"de\":\"Ich habe etwas für dich.\",\"lv\":\"Kam diqka per ty.\"},{\"de\":\"Das ist etwas teuer.\",\"lv\":\"Është, um-- Është mjaft shtrenjtë.\"}]","study.comparison":"[{\"word\":\"etwas\",\"meaning\":\"Diçka/pak\",\"example\":\"Ich brauche etwas. = Më duhet diçka.\"},{\"word\":\"was\",\"meaning\":\"Diçka (bisedore)\",\"example\":\"Willst du was trinken? = A dëshiron të pish diçka?\"},{\"word\":\"ein bisschen\",\"meaning\":\"Ke fjetur ndopak?\",\"example\":\"Ich bin ein bisschen müde. = Unë jam pak i lodhur.\"},{\"word\":\"nichts\",\"meaning\":\"Fije\",\"example\":\"Ich brauche nichts. = Nuk më duhet asgjë.\"}]","study.tip":"{\"text\":\"Mos harroni: → diçka • → njëfarë shkalle.\"}","study.important":"[\"Etwas nuk është i njëjtë me nichts: etwas do të thotë diçka, por nichts nuk do të thotë asgjë.\",\"Në letonisht, diçka tingëllon më mirë se diçka, për shembull: etwas trinken = duke pirë një pije.\",\"Në shqip ndonjëherë më mirë duket diçka, sesa diçka, për shembull: etwas trinken = pij diçka.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts etwas\|idx:169 (etwas), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Diçka • Disa","study.translation":"Diçka • Disa","study.explanation":"[\"Ideja kryesore: etwas do…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "etwas",
  "lv": "Diçka • Disa",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "Diçka • Disa",
    "explanation": [
      "Ideja kryesore: etwas do të thotë diçka ose pak, në varësi të kontekstit.",
      "Nëse zëvendëson diçka të panjohur, letonishtja zakonisht thotë diçka.",
      "Kur Etwas i paraprin një mbiemri ose sasie, zakonisht do të thotë pak."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Dua diçka për të pirë."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "Ke një minutë për mua?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Jam disi e lodhur."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "Kam diqka per ty."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "Është, um-- Është mjaft shtrenjtë."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "Diçka/pak",
        "example": "Ich brauche etwas. = Më duhet diçka."
      },
      {
        "word": "was",
        "meaning": "Diçka (bisedore)",
        "example": "Willst du was trinken? = A dëshiron të pish diçka?"
      },
      {
        "word": "ein bisschen",
        "meaning": "Ke fjetur ndopak?",
        "example": "Ich bin ein bisschen müde. = Unë jam pak i lodhur."
      },
      {
        "word": "nichts",
        "meaning": "Fije",
        "example": "Ich brauche nichts. = Nuk më duhet asgjë."
      }
    ],
    "tip": {
      "text": "Mos harroni: → diçka • → njëfarë shkalle."
    },
    "important": [
      "Etwas nuk është i njëjtë me nichts: etwas do të thotë diçka, por nichts nuk do të thotë asgjë.",
      "Në letonisht, diçka tingëllon më mirë se diçka, për shembull: etwas trinken = duke pirë një pije.",
      "Në shqip ndonjëherë më mirë duket diçka, sesa diçka, për shembull: etwas trinken = pij diçka."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "etwas"
        ],
        "purple": [
          "kaufen"
        ],
        "green": [
          "Ideja"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "etwas"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "etwas"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "was"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "ein bisschen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "ein bisschen"
            ]
          }
        },
        {
          "word": {
            "green": [
              "nichts"
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
            "etwas"
          ],
          "red": [
            "nichts"
          ]
        },
        {
          "blue": [
            "etwas"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 27

**Audit ID:** `LRB095-0027`
**Finding Stable ID:** `g2/a1/sq|euch|idx:170|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `euch|idx:170`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** jūs • jums
**DE reference (read-only):** euch
**CURRENT (captured scope):** {"lv":"Ti • Ti","study.translation":"Ti • Ti","study.explanation":"\"euch\" është përemri shumës i personit të dytë. Si plotësim i drejtpërdrejtë (ku?) - \"ti\" dhe plotësim i tërthortë (kujt?) - përdoren si \"madhësi\".","study.examples":"[{\"de\":\"Ich sehe euch.\",\"lv\":\"Dhe une të shikoj.\"},{\"de\":\"Ich helfe euch.\",\"lv\":\"Do ju jap mundësinë për t'iu afruar\"},{\"de\":\"Ich gebe euch das Buch.\",\"lv\":\"Po të jap një libër\"},{\"de\":\"Ich danke euch.\",\"lv\":\"Ju faleminderit.\"},{\"de\":\"Ihr erinnert euch.\",\"lv\":\"Të kujtohet.\"}]","study.comparison":"[{\"word\":\"ihr\",\"meaning\":\"Dukesh ...\",\"example\":\"Ihr seid freundlich. = Jeni miqësorë.\"},{\"word\":\"euch\",\"meaning\":\"Ti / ti\",\"example\":\"Ich helfe euch. = Unë ju ndihmoj.\"},{\"word\":\"euer\",\"meaning\":\"-Fëmijët e tu.\",\"example\":\"Das ist euer Haus. = Kjo është shtëpia juaj.\"}]","study.tip":"{\"text\":\"\\\"Euch\\\" është përgjigjja e pyetjes \\\"kujt?\\\" ose është plotësimi i drejtpërdrejtë i fjalive që përmbajnë \\\"ju\\\".\",\"example\":\"Sana yardım edeceğim. = İyiyim. seni görüyorum = Ich sehe euch. Sana söylüyorum. = Ich erzähle euch.\"}"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts euch\|idx:170 (euch), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Ti • Ti","study.translation":"Ti • Ti","study.explanation":"\"euch\" është përemri shumës i perso…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "euch",
  "lv": "Ti • Ti",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "Ti • Ti",
    "explanation": "\"euch\" është përemri shumës i personit të dytë. Si plotësim i drejtpërdrejtë (ku?) - \"ti\" dhe plotësim i tërthortë (kujt?) - përdoren si \"madhësi\".",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Dhe une të shikoj."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Do ju jap mundësinë për t'iu afruar"
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Po të jap një libër"
      },
      {
        "de": "Ich danke euch.",
        "lv": "Ju faleminderit."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Të kujtohet."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "Dukesh ...",
        "example": "Ihr seid freundlich. = Jeni miqësorë."
      },
      {
        "word": "euch",
        "meaning": "Ti / ti",
        "example": "Ich helfe euch. = Unë ju ndihmoj."
      },
      {
        "word": "euer",
        "meaning": "-Fëmijët e tu.",
        "example": "Das ist euer Haus. = Kjo është shtëpia juaj."
      }
    ],
    "info": [
      "ihr = ty (podmiotowa forma zdania)",
      "euch = ty (gdzie? tworzysz) / ty (kogo? tworzysz)",
      "euer = seninki (iyelik formu)"
    ],
    "tip": {
      "text": "\"Euch\" është përgjigjja e pyetjes \"kujt?\" ose është plotësimi i drejtpërdrejtë i fjalive që përmbajnë \"ju\".",
      "example": "Sana yardım edeceğim. = İyiyim. seni görüyorum = Ich sehe euch. Sana söylüyorum. = Ich erzähle euch."
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

## Finding 28

**Audit ID:** `LRB095-0028`
**Finding Stable ID:** `g2/a1/sq|fahren|idx:172|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `fahren|idx:172`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** braukt
**DE reference (read-only):** fahren
**CURRENT (captured scope):** {"lv":"Drive • Drive • Get","study.translation":"Drive • Drive • Get","study.explanation":"[\"Ideja kryesore: fahrenheit do të thotë të ngasësh makinën, dhe në disa fjali gjithashtu do të thotë të largosh dikë.\",\"Fahrene përdoret kur udhëtoni me makinë, autobus, tren, biçikletë ose ndonjë automjet tjetër.\",\"Nëse subjekti i dënimit është një person, fahren mund të nënkuptojë udhëzimin dhe udhëheqjen.\",\"Nëse lëvizja zhvillohet në këmbë, zakonisht përdoret gehen ose laufen.\"]","study.examples":"[{\"de\":\"Ich fahre nach Berlin.\",\"lv\":\"Po shkoj në Berlin.\"},{\"de\":\"Ich fahre mit dem Auto.\",\"lv\":\"Jam me makinë.\"},{\"de\":\"Ich fahre meine Tochter zur Schule.\",\"lv\":\"Do ta çoj kohën e vajzës në shkollë.\"},{\"de\":\"Ich fahre dich nach Hause.\",\"lv\":\"Do të dërgoj në shtëpi.\"},{\"de\":\"Wir fahren morgen nach München.\",\"lv\":\"Nesër do të shkojmë në Mynih.\"}]","study.comparison":"[{\"word\":\"fahren\",\"meaning\":\"Transporti me makinë\",\"example\":\"Unë vozis me autobus.\"},{\"word\":\"gehen\",\"meaning\":\"Bredhës.\",\"example\":\"Unë shkoj në shtëpi.\"},{\"word\":\"laufen\",\"meaning\":\"Vrapim/ecje\",\"example\":\"Ai vrapë shpejt.\"},{\"word\":\"bringen\",\"meaning\":\"Sill/dorëzo\",\"example\":\"Unë sjell librin.\"},{\"word\":\"mitnehmen\",\"meaning\":\"Merre me vete\",\"example\":\"Unë të marr me vete.\"}]","study.tip":"{\"text\":\"Mos harroni: automjeti → fahren • → gehen në këmbë.\"}","study.important":"{\"text\":\"Fahren ≠ tikai “braukt”\",\"example\":\"Almanca'da aynı fiil genellikle bağlama bağlı olarak şu anlama gelir: git • git • al.\"}"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts fahren\|idx:172 (fahren), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Drive • Drive • Get","study.translation":"Drive • Drive • Get","study.explanation":"[\"Ideja krye…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "fahren",
  "lv": "Drive • Drive • Get",
  "level": "A1",
  "study": {
    "id": "a1-fahren",
    "layout": "standardStudy",
    "translation": "Drive • Drive • Get",
    "explanation": [
      "Ideja kryesore: fahrenheit do të thotë të ngasësh makinën, dhe në disa fjali gjithashtu do të thotë të largosh dikë.",
      "Fahrene përdoret kur udhëtoni me makinë, autobus, tren, biçikletë ose ndonjë automjet tjetër.",
      "Nëse subjekti i dënimit është një person, fahren mund të nënkuptojë udhëzimin dhe udhëheqjen.",
      "Nëse lëvizja zhvillohet në këmbë, zakonisht përdoret gehen ose laufen."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Po shkoj në Berlin."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Jam me makinë."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Do ta çoj kohën e vajzës në shkollë."
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Do të dërgoj në shtëpi."
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Nesër do të shkojmë në Mynih."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "Transporti me makinë",
        "example": "Unë vozis me autobus."
      },
      {
        "word": "gehen",
        "meaning": "Bredhës.",
        "example": "Unë shkoj në shtëpi."
      },
      {
        "word": "laufen",
        "meaning": "Vrapim/ecje",
        "example": "Ai vrapë shpejt."
      },
      {
        "word": "bringen",
        "meaning": "Sill/dorëzo",
        "example": "Unë sjell librin."
      },
      {
        "word": "mitnehmen",
        "meaning": "Merre me vete",
        "example": "Unë të marr me vete."
      }
    ],
    "tip": {
      "text": "Mos harroni: automjeti → fahren • → gehen në këmbë."
    },
    "important": {
      "text": "Fahren ≠ tikai “braukt”",
      "example": "Almanca'da aynı fiil genellikle bağlama bağlı olarak şu anlama gelir: git • git • al."
    },
    "accents": {
      "blue": [
        "fahren",
        "fahre"
      ],
      "purple": [
        "braukt",
        "braucu",
        "vest",
        "vedu",
        "aizvest"
      ],
      "green": [
        "transportu",
        "pojazd",
        "auto",
        "autobusu",
        "vilcienu",
        "rower"
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
          "lv": {}
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
          "lv": {}
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
          "lv": {}
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
          "lv": {}
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
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "fahren"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
              "mitnehmen"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
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
          "text": {},
          "example": {}
        }
      ]
    }
  }
}
```

---

## Finding 29

**Audit ID:** `LRB095-0029`
**Finding Stable ID:** `g2/a1/sq|Ferien|idx:694|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `Ferien|idx:694`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** brīvdienas (skola)
**DE reference (read-only):** Ferien
**CURRENT (captured scope):** {"lv":"Tatiller (okul)","study.translation":"Tatiller (okul)","study.explanation":"[\"Ana fikir: yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır.\",\"Die Ferien në thelb do të thotë: pushimet shkollore.\",\"Genellikle şu şekilde karakterize edilir: yalnızca çoğul.\",\"Die Ferien shfaqet vetëm në shumës - gjithmonë në shumës (den Ferien).\"]","study.examples":"[{\"de\":\"In den Ferien fahren wir ans Meer.\",\"lv\":\"Shkojmë në bregdet në fundjavë.\"},{\"de\":\"In den Ferien habe ich viel Zeit.\",\"lv\":\"Tatillerde çok zamanım oluyor.\"},{\"de\":\"Was macht ihr in den Ferien?\",\"lv\":\"Çfarë bën gjatë pushimeve?\"},{\"de\":\"Die Schule ist in den Ferien zu.\",\"lv\":\"Shkolla është e mbyllur gjatë festave.\"},{\"de\":\"In den Ferien fahren wir ans Meer.\",\"lv\":\"Do të shkojmë në bregdet për pushime.\"},{\"de\":\"In den Ferien\",\"lv\":\"Me pushime (në shkollë).\"}]","study.comparison":"[{\"word\":\"die Ferien\",\"meaning\":\"Pushim nga shkolla/puna (vetëm në tavolinë)\",\"example\":\"In den Ferien fahren wir weg. – Do të shkojmë diku në fundjavë.\"},{\"word\":\"der Urlaub\",\"meaning\":\"İşten ayrılma (yalnızca herkes)\",\"example\":\"Ich habe zwei Wochen Urlaub. – Kam dy javë pushim.\"}]","study.tip":"[\"Yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır.\",\"Bağlam bu anlama uygun olduğunda die Ferien'i kullanın.\"]","study.important":"[\"Ferien është gjithmonë i pandehuri: në den Ferien.\",\"False: in der Ferien → True: in den Ferien\",\"Shkolla: die Ferien (vetëm në shumës).\",\"Yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Ferien\|idx:694 (Ferien), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Tatiller (okul)","study.translation":"Tatiller (okul)","study.explanation":"[\"Ana fikir: yalnızc…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Ferien",
  "de_article": "die",
  "lv": "Tatiller (okul)",
  "level": "A1",
  "study": {
    "id": "a1-ferien",
    "layout": "standardStudy",
    "translation": "Tatiller (okul)",
    "explanation": [
      "Ana fikir: yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır.",
      "Die Ferien në thelb do të thotë: pushimet shkollore.",
      "Genellikle şu şekilde karakterize edilir: yalnızca çoğul.",
      "Die Ferien shfaqet vetëm në shumës - gjithmonë në shumës (den Ferien)."
    ],
    "examples": [
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Shkojmë në bregdet në fundjavë."
      },
      {
        "de": "In den Ferien habe ich viel Zeit.",
        "lv": "Tatillerde çok zamanım oluyor."
      },
      {
        "de": "Was macht ihr in den Ferien?",
        "lv": "Çfarë bën gjatë pushimeve?"
      },
      {
        "de": "Die Schule ist in den Ferien zu.",
        "lv": "Shkolla është e mbyllur gjatë festave."
      },
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "Do të shkojmë në bregdet për pushime."
      },
      {
        "de": "In den Ferien",
        "lv": "Me pushime (në shkollë)."
      }
    ],
    "comparison": [
      {
        "word": "die Ferien",
        "meaning": "Pushim nga shkolla/puna (vetëm në tavolinë)",
        "example": "In den Ferien fahren wir weg. – Do të shkojmë diku në fundjavë."
      },
      {
        "word": "der Urlaub",
        "meaning": "İşten ayrılma (yalnızca herkes)",
        "example": "Ich habe zwei Wochen Urlaub. – Kam dy javë pushim."
      }
    ],
    "tip": [
      "Yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır.",
      "Bağlam bu anlama uygun olduğunda die Ferien'i kullanın."
    ],
    "important": [
      "Ferien është gjithmonë i pandehuri: në den Ferien.",
      "False: in der Ferien → True: in den Ferien",
      "Shkolla: die Ferien (vetëm në shumës).",
      "Yalnızca çoğul. Okul veya eğitim tatilleri - her zaman çoğul olarak kullanılır."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "die Ferien",
          "ferien"
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

## Finding 30

**Audit ID:** `LRB095-0030`
**Finding Stable ID:** `g2/a1/sq|finden|idx:187|lv, study|SEMANTIC_MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `finden|idx:187`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** SEMANTIC_MISTRANSLATION
**LV source (read-only):** atrast
**DE reference (read-only):** finden
**CURRENT (captured scope):** {"lv":"Gjej • Mendo","study.translation":"Gjej • Mendo","study.explanation":"[\"Ideja kryesore: të gjesh shpesh do të thotë të gjesh.\",\"Gjetja e tij gjatë një bisede shumë shpesh do të thotë gjithashtu të mendosh ose të mendosh për diçka.\",\"Kur bëhet fjalë për diçka që mungon, përkthehet si gjetje.\",\"Sa i përket bindjes, ajo përkthehet si mendim ose paraqitje.\"]","study.examples":"[{\"de\":\"Ich finde meinen Schlüssel.\",\"lv\":\"Nuk mund ta gjej çelësin tim\"},{\"de\":\"Ich finde das gut.\",\"lv\":\"E gjete telefonin tënd?\"},{\"de\":\"Wie findest du den Film?\",\"lv\":\"... i përbashkët, nuk është vetëm vendimi i saj. - Mua më duket mirë...\"},{\"de\":\"Wie findest du den Film?\",\"lv\":\"Çfarë mendon për filmin?\"}]","study.comparison":"[{\"word\":\"finden\",\"meaning\":\"Gjej/mendo\",\"example\":\"Ich finde das gut. = Më duket mirë.\"},{\"word\":\"suchen\",\"meaning\":\"Kërko\",\"example\":\"Ich suche den Schlüssel. = Po gjej çëselsin.\"},{\"word\":\"denken\",\"meaning\":\"Të menduarit\",\"example\":\"Seni düşünüyorum. = Po mendoj për ty.\"},{\"word\":\"glauben\",\"meaning\":\"Beso/mendo\",\"example\":\"Ich glaube, er kommt. = Mendoj për të ardhmen tënde.\"}]","study.tip":"{\"text\":\"Mos harroni: artikulli i humbur → u gjet • Vizioni → mendoj…\"}","study.important":"[\"Gjetja nuk do të thotë vetëm \\\"gjej\\\".\",\"I finde das gut do të thotë \\\"Unë mendoj se kjo është e mirë\\\", jo \\\"Unë mendoj se kjo është e mirë.\\\"\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts finden\|idx:187 (finden), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Gjej • Mendo","study.translation":"Gjej • Mendo","study.explanation":"[\"Ideja kryesore: të gjesh…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "finden",
  "lv": "Gjej • Mendo",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "Gjej • Mendo",
    "explanation": [
      "Ideja kryesore: të gjesh shpesh do të thotë të gjesh.",
      "Gjetja e tij gjatë një bisede shumë shpesh do të thotë gjithashtu të mendosh ose të mendosh për diçka.",
      "Kur bëhet fjalë për diçka që mungon, përkthehet si gjetje.",
      "Sa i përket bindjes, ajo përkthehet si mendim ose paraqitje."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Nuk mund ta gjej çelësin tim"
      },
      {
        "de": "Ich finde das gut.",
        "lv": "E gjete telefonin tënd?"
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "... i përbashkët, nuk është vetëm vendimi i saj. - Mua më duket mirë..."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Çfarë mendon për filmin?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "Gjej/mendo",
        "example": "Ich finde das gut. = Më duket mirë."
      },
      {
        "word": "suchen",
        "meaning": "Kërko",
        "example": "Ich suche den Schlüssel. = Po gjej çëselsin."
      },
      {
        "word": "denken",
        "meaning": "Të menduarit",
        "example": "Seni düşünüyorum. = Po mendoj për ty."
      },
      {
        "word": "glauben",
        "meaning": "Beso/mendo",
        "example": "Ich glaube, er kommt. = Mendoj për të ardhmen tënde."
      }
    ],
    "tip": {
      "text": "Mos harroni: artikulli i humbur → u gjet • Vizioni → mendoj…"
    },
    "important": [
      "Gjetja nuk do të thotë vetëm \"gjej\".",
      "I finde das gut do të thotë \"Unë mendoj se kjo është e mirë\", jo \"Unë mendoj se kjo është e mirë.\""
    ],
    "sectionAccents": {
      "explanation": {},
      "examples": [
        {
          "de": {
            "blue": [
              "finde"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gefunden"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "finde"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "findest"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "finden"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "finde"
            ]
          }
        },
        {
          "word": {
            "green": [
              "suchen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "suche"
            ]
          }
        },
        {
          "word": {
            "green": [
              "denken"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "glauben"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
              "glaube"
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
            "Gjetja"
          ]
        },
        {
          "blue": [
            "finde"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 31

**Audit ID:** `LRB095-0031`
**Finding Stable ID:** `g2/a1/sq|Frau|idx:198|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `Frau|idx:198`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** sieviete
**DE reference (read-only):** Frau
**CURRENT (captured scope):** {"lv":"Gruaja • Gruaja","study.translation":"Gruaja • Gruaja","study.explanation":"[\"Ideja kryesore: Die Frau mund të nënkuptojë një grua (gjinore) ose një bashkëshort (partner).\",\"Nëse është vetëm gjinie ose personi, vdisni zonjë = grua.\",\"Në rastin e një bashkëshorti, vdes Gruaja = gruaja ime (meine Frau = gruaja ime).\",\"Përemri pronor (meine/deine/seine Frau) pothuajse gjithmonë do të thotë bashkëshortor.\",\"Plural: Die Frauen.\",\"Forma mashkullore, thotë Mann, ka të njëjtin kuptim të dyfishtë: mashkull dhe burrë.\"]","study.examples":"[{\"de\":\"Sie ist eine nette Frau.\",\"lv\":\"Ajo është një grua e mirë.\"},{\"de\":\"Das ist meine Frau.\",\"lv\":\"Ajo është gruaja ime.\"},{\"de\":\"Wie viele Frauen sind hier?\",\"lv\":\"Sa gra janë atje?\"},{\"de\":\"Meine Frau arbeitet in Berlin.\",\"lv\":\"Gruaja ime punon në Berlin.\"},{\"de\":\"Die Frau trägt ein Kleid.\",\"lv\":\"Gruaja ka veshur një fustan.\"},{\"de\":\"Seine Frau ist Ärztin.\",\"lv\":\"Gruaja e tij është mjeke.\"}]","study.tip":"[\"Përemri pronor (meine/deine/seine Frau) pothuajse gjithmonë do të thotë bashkëshort.\",\"Pa posedues (die Frau, eine Frau), zakonisht do të thotë një grua.\"]","study.important":"[\"Die Frau = femër OSE BASHKË-KONTEKSTUALISHT e varur.\",\"Meine Frau = gruaja ime (jo \\\"gruaja ime\\\").\",\"Plural: Die Frauen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Frau\|idx:198 (Frau), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Gruaja • Gruaja","study.translation":"Gruaja • Gruaja","study.explanation":"[\"Ideja kryesore: Di…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "Gruaja • Gruaja",
  "level": "A1",
  "study": {
    "id": "a1-frau",
    "layout": "standardStudy",
    "translation": "Gruaja • Gruaja",
    "explanation": [
      "Ideja kryesore: Die Frau mund të nënkuptojë një grua (gjinore) ose një bashkëshort (partner).",
      "Nëse është vetëm gjinie ose personi, vdisni zonjë = grua.",
      "Në rastin e një bashkëshorti, vdes Gruaja = gruaja ime (meine Frau = gruaja ime).",
      "Përemri pronor (meine/deine/seine Frau) pothuajse gjithmonë do të thotë bashkëshortor.",
      "Plural: Die Frauen.",
      "Forma mashkullore, thotë Mann, ka të njëjtin kuptim të dyfishtë: mashkull dhe burrë."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "Ajo është një grua e mirë."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Ajo është gruaja ime."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Sa gra janë atje?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Gruaja ime punon në Berlin."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Gruaja ka veshur një fustan."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Gruaja e tij është mjeke."
      }
    ],
    "tip": [
      "Përemri pronor (meine/deine/seine Frau) pothuajse gjithmonë do të thotë bashkëshort.",
      "Pa posedues (die Frau, eine Frau), zakonisht do të thotë një grua."
    ],
    "important": [
      "Die Frau = femër OSE BASHKË-KONTEKSTUALISHT e varur.",
      "Meine Frau = gruaja ime (jo \"gruaja ime\").",
      "Plural: Die Frauen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "die Frau",
          "Frau"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Frau"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "meine Frau"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Frauen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Meine Frau"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Frau"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Seine Frau"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "green": [
            "meine",
            "deine",
            "seine Frau"
          ]
        },
        {
          "blue": [
            "die Frau",
            "eine Frau"
          ]
        }
      ],
      "important": [
        {},
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

## Finding 32

**Audit ID:** `LRB095-0032`
**Finding Stable ID:** `g2/a1/sq|für|idx:216|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `für|idx:216`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** priekš
**DE reference (read-only):** für
**CURRENT (captured scope):** {"lv":"Profesionistë.","study.translation":"Profesionistë.","study.explanation":"[\"Ideja kryesore: für është një parafjalë që qeveris gjithmonë akuzuesin – zakonisht pi ose pi në letonisht.\",\"Kur flasim për blerësin ose qëllimin für = për (für dich = për ju).\",\"Duke folur për shkëmbim, tarifë ose përmbytje, für = për (danke für das Geschenk = faleminderit për dhuratën).\",\"Fur gjithmonë ka për një situatë akuzuese, pavarësisht nga kuptimi i saj.\"]","study.examples":"[{\"de\":\"Das ist für dich.\",\"lv\":\"Për mua?\"},{\"de\":\"Danke für die Hilfe.\",\"lv\":\"Faleminderit për ndihmën.\"},{\"de\":\"Ich kaufe ein Geschenk für meine Mutter.\",\"lv\":\"Po blej një dhuratë për nënën time.\"},{\"de\":\"Was bezahlst du für das Auto?\",\"lv\":\"Sa paguani për një makinë?\"},{\"de\":\"Das Buch ist für Kinder.\",\"lv\":\"Libri është për fëmijë.\"},{\"de\":\"Für heute ist das genug.\",\"lv\":\"Aq për sot.\"}]","study.tip":"[\"Fur gjithmonë + inkriminuese-pavarësisht nga kuptimi.\",\"Blerësi/Qëllimi → • Modifikimi/Arsyeja/→Tarifa.\"]","study.important":"[\"Für + Akkusativ gjithmonë, p.sh. für mich, für dich, für das Kind.\",\"Danke für /bezahlen für = \\\"për\\\", jo \\\"para\\\".\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts für\|idx:216 (für), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Profesionistë.","study.translation":"Profesionistë.","study.explanation":"[\"Ideja kryesore: für …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "für",
  "lv": "Profesionistë.",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "Profesionistë.",
    "explanation": [
      "Ideja kryesore: für është një parafjalë që qeveris gjithmonë akuzuesin – zakonisht pi ose pi në letonisht.",
      "Kur flasim për blerësin ose qëllimin für = për (für dich = për ju).",
      "Duke folur për shkëmbim, tarifë ose përmbytje, für = për (danke für das Geschenk = faleminderit për dhuratën).",
      "Fur gjithmonë ka për një situatë akuzuese, pavarësisht nga kuptimi i saj."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "Për mua?"
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Faleminderit për ndihmën."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Po blej një dhuratë për nënën time."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Sa paguani për një makinë?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Libri është për fëmijë."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Aq për sot."
      }
    ],
    "tip": [
      "Fur gjithmonë + inkriminuese-pavarësisht nga kuptimi.",
      "Blerësi/Qëllimi → • Modifikimi/Arsyeja/→Tarifa."
    ],
    "important": [
      "Für + Akkusativ gjithmonë, p.sh. für mich, für dich, für das Kind.",
      "Danke für /bezahlen für = \"për\", jo \"para\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "für"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "für"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "für"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "für"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "für"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "für"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Für"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "blue": [
            "für"
          ]
        },
        {}
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
          ]
        }
      ]
    }
  }
}
```

---

## Finding 33

**Audit ID:** `LRB095-0033`
**Finding Stable ID:** `g2/a1/sq|Fußball|idx:218|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `Fußball|idx:218`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** futbols
**DE reference (read-only):** Fußball
**CURRENT (captured scope):** {"lv":"futboll","study.translation":"futboll","study.explanation":"[\"Ideja kryesore: Fußball shpesh nënkupton futbollin si sport.\",\"Me artikull dhe numrues der Fußball mund të nënkuptojë edhe topin e futbollit.\",\"Shumësi die Fußbälle nënkupton topa futbolli, jo sporte të ndryshme.\"]","study.examples":"[{\"de\":\"Ich spiele Fußball.\",\"lv\":\"unë luaj futboll.\"},{\"de\":\"Der Fußball liegt im Garten.\",\"lv\":\"topi i futbollit ndodhet në kopësht.\"},{\"de\":\"Wir kaufen zwei Fußbälle.\",\"lv\":\"ne blejmë dy topa futbolli.\"}]","study.comparison":"[{\"word\":\"Fußball\",\"meaning\":\"futboll si sport\",\"example\":\"Ich spiele Fußball. – Unë luaj futboll.\"},{\"word\":\"der Fußball\",\"meaning\":\"topi i futbollit\",\"example\":\"Der Fußball ist neu. – Topi i futbollit është i ri.\"}]","study.tip":"[\"Pa artikull spielen Fußball zakonisht nënkupton luar futboll.\",\"Me numrues ein Fußball dhe die Fußbälle janë topi i futbollit dhe topa futbolli.\"]","study.important":"[\"die Fußbälle nënkupton topa futbolli.\",\"Sportin Fußball zakonisht përdoret në singullar.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Fußball\|idx:218 (Fußball), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"futboll","study.translation":"futboll","study.explanation":"[\"Ideja kryesore: Fußball shpesh nën…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Fußball",
  "de_article": "der",
  "de_plural": "die Fußbälle",
  "lv": "futboll",
  "level": "A1",
  "study": {
    "id": "a1-fussball-study",
    "layout": "standardStudy",
    "translation": "futboll",
    "explanation": [
      "Ideja kryesore: Fußball shpesh nënkupton futbollin si sport.",
      "Me artikull dhe numrues der Fußball mund të nënkuptojë edhe topin e futbollit.",
      "Shumësi die Fußbälle nënkupton topa futbolli, jo sporte të ndryshme."
    ],
    "examples": [
      {
        "de": "Ich spiele Fußball.",
        "lv": "unë luaj futboll."
      },
      {
        "de": "Der Fußball liegt im Garten.",
        "lv": "topi i futbollit ndodhet në kopësht."
      },
      {
        "de": "Wir kaufen zwei Fußbälle.",
        "lv": "ne blejmë dy topa futbolli."
      }
    ],
    "comparison": [
      {
        "word": "Fußball",
        "meaning": "futboll si sport",
        "example": "Ich spiele Fußball. – Unë luaj futboll."
      },
      {
        "word": "der Fußball",
        "meaning": "topi i futbollit",
        "example": "Der Fußball ist neu. – Topi i futbollit është i ri."
      }
    ],
    "tip": [
      "Pa artikull spielen Fußball zakonisht nënkupton luar futboll.",
      "Me numrues ein Fußball dhe die Fußbälle janë topi i futbollit dhe topa futbolli."
    ],
    "important": [
      "die Fußbälle nënkupton topa futbolli.",
      "Sportin Fußball zakonisht përdoret në singullar."
    ]
  }
}
```

---

## Finding 34

**Audit ID:** `LRB095-0034`
**Finding Stable ID:** `g2/a1/sq|ganz|idx:219|lv, study|MEANING_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `ganz|idx:219`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MEANING_ERROR
**LV source (read-only):** vesels
**DE reference (read-only):** ganz
**CURRENT (captured scope):** {"lv":"Ai është i shëndetshëm.","study.translation":"Ai është i shëndetshëm.","study.explanation":"[\"Ideja kryesore: ganz me emër nënkupton të plotë ose të tërë në toto.\",\"Para një mbiemri ose përparjeje ganz mund të nënkuptojë plotësisht, tërësisht ose mjaft.\",\"ganz nuk është i njëjtë me zëvendësin alles.\"]","study.examples":"[{\"de\":\"Ich arbeite den ganzen Tag.\",\"lv\":\"unë punoj e gjithë ditën.\"},{\"de\":\"Das ganze Haus ist sauber.\",\"lv\":\"e gjithë shtëpia është e pastruar.\"},{\"de\":\"Das ist ganz sicher.\",\"lv\":\"kjo është plotësisht e sigurt.\"},{\"de\":\"Das Essen ist ganz gut.\",\"lv\":\"ushqimi është mjaft i mirë.\"}]","study.comparison":"[{\"word\":\"ganz\",\"meaning\":\"i plotë • i tërë • plotësisht\",\"example\":\"der ganze Tag – e gjithë dita\"},{\"word\":\"alles\",\"meaning\":\"Të gjitha\",\"example\":\"Alles ist gut. – Gjithçka është në rregull.\"}]","study.tip":"[\"Para emrit ganz shpesh nënkupton gjithçka ose i plotë.\",\"Para mbiemrit ganz shpesh nënkupton plotësisht ose mjaft.\"]","study.important":"[\"der ganze Tag = e gjithë dita.\",\"alles = gjithçka si zëvendës.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts ganz\|idx:219 (ganz), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Ai është i shëndetshëm.","study.translation":"Ai është i shëndetshëm.","study.explanation":"[\"Id…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ganz",
  "lv": "Ai është i shëndetshëm.",
  "level": "A1",
  "study": {
    "id": "a1-ganz-study",
    "layout": "standardStudy",
    "translation": "Ai është i shëndetshëm.",
    "explanation": [
      "Ideja kryesore: ganz me emër nënkupton të plotë ose të tërë në toto.",
      "Para një mbiemri ose përparjeje ganz mund të nënkuptojë plotësisht, tërësisht ose mjaft.",
      "ganz nuk është i njëjtë me zëvendësin alles."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "unë punoj e gjithë ditën."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "e gjithë shtëpia është e pastruar."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "kjo është plotësisht e sigurt."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "ushqimi është mjaft i mirë."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "i plotë • i tërë • plotësisht",
        "example": "der ganze Tag – e gjithë dita"
      },
      {
        "word": "alles",
        "meaning": "Të gjitha",
        "example": "Alles ist gut. – Gjithçka është në rregull."
      }
    ],
    "tip": [
      "Para emrit ganz shpesh nënkupton gjithçka ose i plotë.",
      "Para mbiemrit ganz shpesh nënkupton plotësisht ose mjaft."
    ],
    "important": [
      "der ganze Tag = e gjithë dita.",
      "alles = gjithçka si zëvendës."
    ]
  }
}
```

---

## Finding 35

**Audit ID:** `LRB095-0035`
**Finding Stable ID:** `g2/a1/sq|geben|idx:223|lv, study|MEANING_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `geben|idx:223`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MEANING_ERROR
**LV source (read-only):** dot
**DE reference (read-only):** geben
**CURRENT (captured scope):** {"lv":"Jep","study.translation":"Jep","study.explanation":"[\"Ideja kryesore: do të thotë të lindësh.\",\"Kur njëri i jep diçka tjetrit, ne përdorim Gebenin.\",\"Ky është drejtimi i kundërt i Nehmenit.\",\"Të bëhesh bektashian do të thotë të jesh marrës i diçkaje.\"]","study.examples":"[{\"de\":\"Gib mir bitte das Buch.\",\"lv\":\"Më jep librin, të lutem\"},{\"de\":\"Ich gebe dir meine Nummer.\",\"lv\":\"Të jap numrin tim\"},{\"de\":\"Ich nehme das Buch.\",\"lv\":\"Po e marr librin\"},{\"de\":\"Ich bekomme ein Geschenk.\",\"lv\":\"Po marr një dhuratë\"}]","study.comparison":"[{\"word\":\"geben\",\"meaning\":\"Jep\",\"example\":\"Më jep librin.\"},{\"word\":\"nehmen\",\"meaning\":\"Merre atë.\",\"example\":\"Unë marr librin.\"},{\"word\":\"bekommen\",\"meaning\":\"Merr/merr\",\"example\":\"Unë marr një dhuratë.\"},{\"word\":\"bringen\",\"meaning\":\"Sill/dorëzo\",\"example\":\"Unë të sjell librin.\"}]","study.tip":"{\"text\":\"Mos harroni: lëreni → shtatzënë • Merreni për vete → nehmen.\"}","study.important":"[\"Gebeni dhe Nehmeni janë drejtime të kundërta.\",\"Bekommen do të thotë të marrësh, jo të japësh.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts geben\|idx:223 (geben), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Jep","study.translation":"Jep","study.explanation":"[\"Ideja kryesore: do të thotë të lindësh.\",…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "geben",
  "lv": "Jep",
  "level": "A1",
  "study": {
    "id": "a1-geben",
    "layout": "standardStudy",
    "translation": "Jep",
    "explanation": [
      "Ideja kryesore: do të thotë të lindësh.",
      "Kur njëri i jep diçka tjetrit, ne përdorim Gebenin.",
      "Ky është drejtimi i kundërt i Nehmenit.",
      "Të bëhesh bektashian do të thotë të jesh marrës i diçkaje."
    ],
    "examples": [
      {
        "de": "Gib mir bitte das Buch.",
        "lv": "Më jep librin, të lutem"
      },
      {
        "de": "Ich gebe dir meine Nummer.",
        "lv": "Të jap numrin tim"
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Po e marr librin"
      },
      {
        "de": "Ich bekomme ein Geschenk.",
        "lv": "Po marr një dhuratë"
      }
    ],
    "comparison": [
      {
        "word": "geben",
        "meaning": "Jep",
        "example": "Më jep librin."
      },
      {
        "word": "nehmen",
        "meaning": "Merre atë.",
        "example": "Unë marr librin."
      },
      {
        "word": "bekommen",
        "meaning": "Merr/merr",
        "example": "Unë marr një dhuratë."
      },
      {
        "word": "bringen",
        "meaning": "Sill/dorëzo",
        "example": "Unë të sjell librin."
      }
    ],
    "tip": {
      "text": "Mos harroni: lëreni → shtatzënë • Merreni për vete → nehmen."
    },
    "important": [
      "Gebeni dhe Nehmeni janë drejtime të kundërta.",
      "Bekommen do të thotë të marrësh, jo të japësh."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "geben"
        ],
        "red": [
          "nehmen",
          "Ideja"
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
          "lv": {}
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
            "yellow": [
              "jap"
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
          "lv": {}
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
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "geben"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "bringen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
              "bringe"
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
            "geben"
          ],
          "red": [
            "nehmen"
          ]
        },
        {
          "yellow": [
            "bekommen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 36

**Audit ID:** `LRB095-0036`
**Finding Stable ID:** `g2/a1/sq|gefallen|idx:225|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `gefallen|idx:225`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** patikt
**DE reference (read-only):** gefallen
**CURRENT (captured scope):** {"lv":"Më pëlqen","study.translation":"Më pëlqen","study.explanation":"[\"Ideja kryesore: gefallen nënkupton pëlqen, por struktura e fjalisë në gjermanisht ndryshon nga shqipja.\",\"Gjëja që pëlqen është kallezues në fjalinë gjermane.\",\"Personi të cilit i pëlqen diçka është në dativ: mir, dir, ihm, ihr, uns, euch, ihnen.\"]","study.examples":"[{\"de\":\"Das gefällt mir.\",\"lv\":\"më pëlqen.\"},{\"de\":\"Gefällt dir das Kleid?\",\"lv\":\"a të pëlqen fusti?\"},{\"de\":\"Der Film gefällt uns.\",\"lv\":\"na pëlqen filmi.\"}]","study.comparison":"[{\"word\":\"gefallen\",\"meaning\":\"pëlqen • personi në dativ\",\"example\":\"Das gefällt mir. – Më pëlqen.\"},{\"word\":\"mögen\",\"meaning\":\"pëlqen • të dëshirosh t'i preferosh\",\"example\":\"Ich mag das. – Më pëlqen.\"}]","study.tip":"[\"Mbaj mend konstruksionin: Das gefällt mir.\",\"Mos krijoni fjalërendin e drejtpërdrejtë të shqipes.\"]","study.important":"[\"gefallen përdoret me dativ: mir, dir, ihm, ihr.\",\"Das gefällt mir = më pëlqen.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts gefallen\|idx:225 (gefallen), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Më pëlqen","study.translation":"Më pëlqen","study.explanation":"[\"Ideja kryesore: gefallen nënku…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gefallen",
  "lv": "Më pëlqen",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "Më pëlqen",
    "explanation": [
      "Ideja kryesore: gefallen nënkupton pëlqen, por struktura e fjalisë në gjermanisht ndryshon nga shqipja.",
      "Gjëja që pëlqen është kallezues në fjalinë gjermane.",
      "Personi të cilit i pëlqen diçka është në dativ: mir, dir, ihm, ihr, uns, euch, ihnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "më pëlqen."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "a të pëlqen fusti?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "na pëlqen filmi."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "pëlqen • personi në dativ",
        "example": "Das gefällt mir. – Më pëlqen."
      },
      {
        "word": "mögen",
        "meaning": "pëlqen • të dëshirosh t'i preferosh",
        "example": "Ich mag das. – Më pëlqen."
      }
    ],
    "tip": [
      "Mbaj mend konstruksionin: Das gefällt mir.",
      "Mos krijoni fjalërendin e drejtpërdrejtë të shqipes."
    ],
    "important": [
      "gefallen përdoret me dativ: mir, dir, ihm, ihr.",
      "Das gefällt mir = më pëlqen."
    ]
  }
}
```

---

## Finding 37

**Audit ID:** `LRB095-0037`
**Finding Stable ID:** `g2/a1/sq|Gemüse|idx:692|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `Gemüse|idx:692`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** dārzeņi
**DE reference (read-only):** Gemüse
**CURRENT (captured scope):** {"lv":"Perime","study.translation":"Perime","study.explanation":"[\"Ideja kryesore: Rreth perimeve në përgjithësi. *die Gemüse nuk ka një shumës në gjermanisht.\",\"Das Gemüse do të thotë perime në përgjithësi.\",\"Çoğunlukla tanımlanır: herhangi bir cinsiyette (yalnızca tekil).\"]","study.examples":"[{\"de\":\"Ich esse gern Gemüse.\",\"lv\":\"Më pëlqen të ha perime.\"},{\"de\":\"Ich esse gern Gemüse.\",\"lv\":\"Më pëlqen të ha perime.\"},{\"de\":\"Das Gemüse ist frisch.\",\"lv\":\"Perime të freskëta.\"},{\"de\":\"Wir kaufen Gemüse auf dem Markt.\",\"lv\":\"Marketten sebze alıyoruz.\"},{\"de\":\"Ich mag Obst und Gemüse.\",\"lv\":\"Meyve ve sebzeleri severim.\"},{\"de\":\"Ich esse Gemüse.\",\"lv\":\"Sebze yerim.\"}]","study.tip":"[\"Das Gemüse = perime\",\"Përdorni das Gemüse kur kontexti përputhet me këtë kuptim.\"]","study.important":"[\"E gabuar: vdes Gemüse, vdes Obsts.\",\"Yanlış: die Gemüse → Doğru: das Gemüse\",\"Das Gemüse = sebzeler (genel olarak).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Gemüse\|idx:692 (Gemüse), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Perime","study.translation":"Perime","study.explanation":"[\"Ideja kryesore: Rreth perimeve në pë…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Gemüse",
  "de_article": "das",
  "lv": "Perime",
  "level": "A1",
  "study": {
    "id": "a1-gemuese",
    "layout": "standardStudy",
    "translation": "Perime",
    "explanation": [
      "Ideja kryesore: Rreth perimeve në përgjithësi. *die Gemüse nuk ka një shumës në gjermanisht.",
      "Das Gemüse do të thotë perime në përgjithësi.",
      "Çoğunlukla tanımlanır: herhangi bir cinsiyette (yalnızca tekil)."
    ],
    "examples": [
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Më pëlqen të ha perime."
      },
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Më pëlqen të ha perime."
      },
      {
        "de": "Das Gemüse ist frisch.",
        "lv": "Perime të freskëta."
      },
      {
        "de": "Wir kaufen Gemüse auf dem Markt.",
        "lv": "Marketten sebze alıyoruz."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Meyve ve sebzeleri severim."
      },
      {
        "de": "Ich esse Gemüse.",
        "lv": "Sebze yerim."
      }
    ],
    "tip": [
      "Das Gemüse = perime",
      "Përdorni das Gemüse kur kontexti përputhet me këtë kuptim."
    ],
    "important": [
      "E gabuar: vdes Gemüse, vdes Obsts.",
      "Yanlış: die Gemüse → Doğru: das Gemüse",
      "Das Gemüse = sebzeler (genel olarak)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Gemüse",
          "gemüse"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "das Gemüse",
              "gemüse"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gemüse"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gemüse"
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

## Finding 38

**Audit ID:** `LRB095-0038`
**Finding Stable ID:** `g2/a1/sq|Geschichte|idx:233|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `Geschichte|idx:233`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** stāsts
**DE reference (read-only):** Geschichte
**CURRENT (captured scope):** {"lv":"rrëfim","study.translation":"rrëfim","study.explanation":"[\"Ideja kryesore: Geschichte mund të nënkuptojë rrëfim ose historinë.\",\"Shumësi die Geschichten zakonisht nënkupton rrëfime.\",\"Kur nënkupton historinë, fjala Geschichte zakonisht përdoret në singullar.\"]","study.examples":"[{\"de\":\"Er erzählt eine Geschichte.\",\"lv\":\"ai rrëfon një rrëfim.\"},{\"de\":\"Ich lerne Geschichte.\",\"lv\":\"unë mësoj historinë.\"},{\"de\":\"Das ist die Geschichte Deutschlands.\",\"lv\":\"kjo është historia e Gjermanisë.\"}]","study.comparison":"[{\"word\":\"eine Geschichte\",\"meaning\":\"rrëfim\",\"example\":\"eine interessante Geschichte – një rrëfim interesant\"},{\"word\":\"Geschichte\",\"meaning\":\"historia\",\"example\":\"Geschichte lernen – të mësosh historinë\"}]","study.tip":"[\"Me eine dhe shumës zakonisht flitet për rrëfim.\",\"Si lëndë mësimore Geschichte nënkupton historinë.\"]","study.important":"[\"die Geschichten = rrëfimet.\",\"Geschichte si historinë zakonisht është në singullar.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Geschichte\|idx:233 (Geschichte), ceļš 'lv, study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"rrëfim","study.translation":"rrëfim","study.explanation":"[\"Ideja kryesore: Geschichte mund të n…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Geschichte",
  "de_article": "die",
  "de_plural": "die Geschichten",
  "lv": "rrëfim",
  "level": "A1",
  "study": {
    "id": "a1-geschichte-study",
    "layout": "standardStudy",
    "translation": "rrëfim",
    "explanation": [
      "Ideja kryesore: Geschichte mund të nënkuptojë rrëfim ose historinë.",
      "Shumësi die Geschichten zakonisht nënkupton rrëfime.",
      "Kur nënkupton historinë, fjala Geschichte zakonisht përdoret në singullar."
    ],
    "examples": [
      {
        "de": "Er erzählt eine Geschichte.",
        "lv": "ai rrëfon një rrëfim."
      },
      {
        "de": "Ich lerne Geschichte.",
        "lv": "unë mësoj historinë."
      },
      {
        "de": "Das ist die Geschichte Deutschlands.",
        "lv": "kjo është historia e Gjermanisë."
      }
    ],
    "comparison": [
      {
        "word": "eine Geschichte",
        "meaning": "rrëfim",
        "example": "eine interessante Geschichte – një rrëfim interesant"
      },
      {
        "word": "Geschichte",
        "meaning": "historia",
        "example": "Geschichte lernen – të mësosh historinë"
      }
    ],
    "tip": [
      "Me eine dhe shumës zakonisht flitet për rrëfim.",
      "Si lëndë mësimore Geschichte nënkupton historinë."
    ],
    "important": [
      "die Geschichten = rrëfimet.",
      "Geschichte si historinë zakonisht është në singullar."
    ]
  }
}
```

---

## Finding 39

**Audit ID:** `LRB095-0039`
**Finding Stable ID:** `g2/a1/sq|Geschwister|idx:234|lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `Geschwister|idx:234`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** brāļi un māsas
**DE reference (read-only):** Geschwister
**CURRENT (captured scope):** {"lv":"vëllezërit dhe motrat","study.translation":"vëllezërit dhe motrat","study.explanation":"[\"Ideja kryesore: Geschwister nënkupton vëllezërit dhe motrat së bashku.\",\"Kjo fjalë zakonisht përdoret vetëm në shumës.\",\"Për një person përdoret Bruder ose Schwester.\"]","study.examples":"[{\"de\":\"Ich habe zwei Geschwister.\",\"lv\":\"kam dy vëllezër ose motra.\"},{\"de\":\"Meine Geschwister wohnen in Berlin.\",\"lv\":\"vëllezërit dhe motrat e mi jetojnë në Berlin.\"}]","study.comparison":"[{\"word\":\"Geschwister\",\"meaning\":\"vëllezërit dhe motrat\",\"example\":\"Meine Geschwister – vëllezërit dhe motrat e mi\"},{\"word\":\"Bruder\",\"meaning\":\"Motër ...\",\"example\":\"mein Bruder – vëllai im\"},{\"word\":\"Schwester\",\"meaning\":\"'Motër'?\",\"example\":\"meine Schwester – motra ime\"}]","study.tip":"[\"Geschwister zakonisht përdoret në shumës.\",\"Për një person zgjidh Bruder ose Schwester.\"]","study.important":"[\"Mos përdor ein Geschwister si formë e zakonshme singulari të nivelit A1.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Geschwister\|idx:234 (Geschwister), ceļš 'lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"vëllezërit dhe motrat","study.translation":"vëllezërit dhe motrat","study.explanation":"[\"Ideja …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Geschwister",
  "de_article": "die",
  "lv": "vëllezërit dhe motrat",
  "level": "A1",
  "study": {
    "id": "a1-geschwister-study",
    "layout": "standardStudy",
    "translation": "vëllezërit dhe motrat",
    "explanation": [
      "Ideja kryesore: Geschwister nënkupton vëllezërit dhe motrat së bashku.",
      "Kjo fjalë zakonisht përdoret vetëm në shumës.",
      "Për një person përdoret Bruder ose Schwester."
    ],
    "examples": [
      {
        "de": "Ich habe zwei Geschwister.",
        "lv": "kam dy vëllezër ose motra."
      },
      {
        "de": "Meine Geschwister wohnen in Berlin.",
        "lv": "vëllezërit dhe motrat e mi jetojnë në Berlin."
      }
    ],
    "comparison": [
      {
        "word": "Geschwister",
        "meaning": "vëllezërit dhe motrat",
        "example": "Meine Geschwister – vëllezërit dhe motrat e mi"
      },
      {
        "word": "Bruder",
        "meaning": "Motër ...",
        "example": "mein Bruder – vëllai im"
      },
      {
        "word": "Schwester",
        "meaning": "'Motër'?",
        "example": "meine Schwester – motra ime"
      }
    ],
    "tip": [
      "Geschwister zakonisht përdoret në shumës.",
      "Për një person zgjidh Bruder ose Schwester."
    ],
    "important": [
      "Mos përdor ein Geschwister si formë e zakonshme singulari të nivelit A1."
    ]
  }
}
```

---

## Finding 40

**Audit ID:** `LRB095-0040`
**Finding Stable ID:** `g2/a1/sq|gleich|idx:243|lv; study.translation; study.explanation; study.examples; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `gleich|idx:243`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** tūlīt
**DE reference (read-only):** gleich
**CURRENT (captured scope):** {"lv":"Menjëherë • E barabartë","study.translation":"Menjëherë • E barabartë","study.explanation":"[\"Ideja kryesore: gleich do të thotë përkohësisht menjëherë, relativisht në mënyrë të barabartë.\",\"Sa për kohën, gleich = menjëherë/menjëherë (ich komme gleich. = Do të vij menjëherë.).\",\"Për krahasim, gleich = e barabartë/e njëjtë (die gleiche Farbe = e njëjta ngjyrë).\",\"Gleich mund të përdoret gjithashtu si një parafjalë dative (gleich mir = si unë).\"]","study.examples":"[{\"de\":\"Ich komme gleich.\",\"lv\":\"15 sekonda. - Menjeher do vije.\"},{\"de\":\"Wir haben die gleiche Farbe.\",\"lv\":\"Kemi të njëjtën ngjyrë.\"},{\"de\":\"Das Essen ist gleich fertig.\",\"lv\":\"Darka do të jetë gati së shpejti.\"},{\"de\":\"Beide Wege sind gleich lang.\",\"lv\":\"Të dyja rrugët janë me gjatësi të njëjtë.\"},{\"de\":\"Bis gleich!\",\"lv\":\"Do shihemi se shpejti!\"},{\"de\":\"Sie sind gleich groß.\",\"lv\":\"Ato janë në të njëjtën lartësi.\"}]","study.tip":"[\"Papritmas (papritmas) → tani.\",\"E njëjta (e → njëjta) për krahasim.\"]","study.important":"[\"Gleich = e menjëhershme (koha) OSE e barabartë (krahasimi).\",\"Përsëri! = Shihemi së shpejti! – një frazë popullore ndarjeje.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts gleich\|idx:243 (gleich), ceļš 'lv; study.translation; study.explanation; study.examples; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Menjëherë • E barabartë","study.translation":"Menjëherë • E barabartë","study.explanation":"[\"Id…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gleich",
  "lv": "Menjëherë • E barabartë",
  "level": "A1",
  "study": {
    "id": "a1-gleich",
    "layout": "standardStudy",
    "translation": "Menjëherë • E barabartë",
    "explanation": [
      "Ideja kryesore: gleich do të thotë përkohësisht menjëherë, relativisht në mënyrë të barabartë.",
      "Sa për kohën, gleich = menjëherë/menjëherë (ich komme gleich. = Do të vij menjëherë.).",
      "Për krahasim, gleich = e barabartë/e njëjtë (die gleiche Farbe = e njëjta ngjyrë).",
      "Gleich mund të përdoret gjithashtu si një parafjalë dative (gleich mir = si unë)."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "15 sekonda. - Menjeher do vije."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "Kemi të njëjtën ngjyrë."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "Darka do të jetë gati së shpejti."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Të dyja rrugët janë me gjatësi të njëjtë."
      },
      {
        "de": "Bis gleich!",
        "lv": "Do shihemi se shpejti!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "Ato janë në të njëjtën lartësi."
      }
    ],
    "tip": [
      "Papritmas (papritmas) → tani.",
      "E njëjta (e → njëjta) për krahasim."
    ],
    "important": [
      "Gleich = e menjëhershme (koha) OSE e barabartë (krahasimi).",
      "Përsëri! = Shihemi së shpejti! – një frazë popullore ndarjeje."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "gleich"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "gleich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "gleiche"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gleich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "gleich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gleich"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "gleich"
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

## Finding 41

**Audit ID:** `LRB095-0041`
**Finding Stable ID:** `g2/a1/sq|groß|idx:250|lv; study.translation; study.explanation; study.examples; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `groß|idx:250`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** liels
**DE reference (read-only):** groß
**CURRENT (captured scope):** {"lv":"Major.","study.translation":"Major.","study.explanation":"[\"Ideja kryesore: Madhësia e madhe ose për person - madhësia e gjatë.\",\"Groß do të thotë para së gjithash madhësi e madhe.\",\"Zakonisht karakterizohet nga: madhësia e përgjithshme.\"]","study.examples":"[{\"de\":\"Das Haus ist groß.\",\"lv\":\"Shtëpia është e madhe.\"},{\"de\":\"Berlin ist eine große Stadt.\",\"lv\":\"Shtëpia është e madhe.\"},{\"de\":\"Er ist groß.\",\"lv\":\"Rezervova dhe pak cinik,\"},{\"de\":\"Das Zimmer ist groß.\",\"lv\":\"Dhoma është e madhe.\"}]","study.tip":"[\"Bruto = e madhe\",\"Përdorni groß kur konteksti përshtatet me të kuptuarit.\"]","study.important":"[\"E shpifur për një person do të thotë e gjatë.\",\"Bruto = e madhe.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts groß\|idx:250 (groß), ceļš 'lv; study.translation; study.explanation; study.examples; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Major.","study.translation":"Major.","study.explanation":"[\"Ideja kryesore: Madhësia e madhe ose…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "groß",
  "lv": "Major.",
  "level": "A1",
  "study": {
    "id": "a1-gross-study",
    "layout": "standardStudy",
    "translation": "Major.",
    "explanation": [
      "Ideja kryesore: Madhësia e madhe ose për person - madhësia e gjatë.",
      "Groß do të thotë para së gjithash madhësi e madhe.",
      "Zakonisht karakterizohet nga: madhësia e përgjithshme."
    ],
    "examples": [
      {
        "de": "Das Haus ist groß.",
        "lv": "Shtëpia është e madhe."
      },
      {
        "de": "Berlin ist eine große Stadt.",
        "lv": "Shtëpia është e madhe."
      },
      {
        "de": "Er ist groß.",
        "lv": "Rezervova dhe pak cinik,"
      },
      {
        "de": "Das Zimmer ist groß.",
        "lv": "Dhoma është e madhe."
      }
    ],
    "tip": [
      "Bruto = e madhe",
      "Përdorni groß kur konteksti përshtatet me të kuptuarit."
    ],
    "important": [
      "E shpifur për një person do të thotë e gjatë.",
      "Bruto = e madhe."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "groß"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "groß"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "große"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "groß"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "groß"
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

## Finding 42

**Audit ID:** `LRB095-0042`
**Finding Stable ID:** `g2/a1/sq|Großeltern|idx:251|lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `Großeltern|idx:251`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** vecvecāki
**DE reference (read-only):** Großeltern
**CURRENT (captured scope):** {"lv":"gjysherinjtë","study.translation":"gjysherinjtë","study.explanation":"[\"Ideja kryesore: Großeltern nënkupton gjyshmëmjen dhe gjyshedhën së bashku.\",\"Kjo fjalë përdoret në shumës.\",\"Në singullar përdoret Großmutter ose Großvater.\"]","study.examples":"[{\"de\":\"Meine Großeltern wohnen auf dem Land.\",\"lv\":\"gjysherinjtë e mi jetojnë në lëndë.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"unë vizitoj gjysherinjtë e mi.\"}]","study.comparison":"[{\"word\":\"Großeltern\",\"meaning\":\"gjysherinjtë\",\"example\":\"meine Großeltern – gjysherinjtë e mi\"},{\"word\":\"Großmutter\",\"meaning\":\"Gjyshe !\",\"example\":\"meine Großmutter – gjyshmëmja ime\"},{\"word\":\"Großvater\",\"meaning\":\"Gjysh!\",\"example\":\"mein Großvater – gjyshedhe im\"}]","study.tip":"[\"Großeltern është shumës.\",\"Për një person përdoret Großmutter ose Großvater.\"]","study.important":"[\"die Großeltern = gjysherinjtë.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Großeltern\|idx:251 (Großeltern), ceļš 'lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"gjysherinjtë","study.translation":"gjysherinjtë","study.explanation":"[\"Ideja kryesore: Großelte…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Großeltern",
  "de_article": "die",
  "lv": "gjysherinjtë",
  "level": "A1",
  "study": {
    "id": "a1-grosseltern-study",
    "layout": "standardStudy",
    "translation": "gjysherinjtë",
    "explanation": [
      "Ideja kryesore: Großeltern nënkupton gjyshmëmjen dhe gjyshedhën së bashku.",
      "Kjo fjalë përdoret në shumës.",
      "Në singullar përdoret Großmutter ose Großvater."
    ],
    "examples": [
      {
        "de": "Meine Großeltern wohnen auf dem Land.",
        "lv": "gjysherinjtë e mi jetojnë në lëndë."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "unë vizitoj gjysherinjtë e mi."
      }
    ],
    "comparison": [
      {
        "word": "Großeltern",
        "meaning": "gjysherinjtë",
        "example": "meine Großeltern – gjysherinjtë e mi"
      },
      {
        "word": "Großmutter",
        "meaning": "Gjyshe !",
        "example": "meine Großmutter – gjyshmëmja ime"
      },
      {
        "word": "Großvater",
        "meaning": "Gjysh!",
        "example": "mein Großvater – gjyshedhe im"
      }
    ],
    "tip": [
      "Großeltern është shumës.",
      "Për një person përdoret Großmutter ose Großvater."
    ],
    "important": [
      "die Großeltern = gjysherinjtë."
    ]
  }
}
```

---

## Finding 43

**Audit ID:** `LRB095-0043`
**Finding Stable ID:** `g2/a1/sq|gut|idx:259|lv; study.translation; study.explanation; study.examples; study.tip; study.important; study.sectionAccents|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `gut|idx:259`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.tip; study.important; study.sectionAccents`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** labs
**DE reference (read-only):** gut
**CURRENT (captured scope):** {"lv":"Mirë","study.translation":"Mirë","study.explanation":"[\"Ideja kryesore: zorra është mbiemër/ndajfolje – e mirë, e suksesshme, në rregull.\",\"Zorra përshkruan cilësinë, shëndetin ose si është diçka (Es geht mir gut. = Jam mirë.).\",\"Në shprehjen e sjellshme, zorra guten Tag/Abend/Morgen ndryshon fundin e saj pas shkrepjes.\",\"Nëse zorrët përcaktojnë një folje, është një ndajfolje (gut schwimmen = not i mirë).\",\"Të mos ngatërrohet me Das Gut • Është një emër i shkruar me shkronja të mëdha dhe artikuj (pronë, rezidencë).\"]","study.examples":"[{\"de\":\"Das Essen ist gut.\",\"lv\":\"Ushqimi është i mirë.\"},{\"de\":\"Wie geht es dir? – Gut, danke!\",\"lv\":\"Si je - mirë, faleminderit!\"},{\"de\":\"Er spricht gut Deutsch.\",\"lv\":\"Ai flet mirë gjermanisht.\"},{\"de\":\"Guten Morgen!\",\"lv\":\"Mirëmëngjes.\"},{\"de\":\"Das ist eine gute Idee.\",\"lv\":\"-Kjo është ide e mirë.\"},{\"de\":\"Alles ist gut.\",\"lv\":\"Gjithcka eshte ne rregull.\"}]","study.tip":"[\"Zorra pa artikullin është mbiemër/ndajfolje - e mirë/e mirë.\",\"Das Gut me shkronja të mëdha dhe artikuj është një fjalë krejtësisht e ndryshme - një emër (pronë, rezidencë).\"]","study.important":"[\"Cerma = e mirë/e mirë (mbiemër/mbiemër).\",\"Das Gut = pronë/rezidencë (emri) – të mos ngatërrohet me zorrën.\",\"Guten Tag/Morgen/Abend – lezione të zorrëve që përfundojnë pas nxjerrjes.\"]","study.sectionAccents":"{\"explanation\":{\"blue\":[\"gut\"],\"green\":[\"das Gut\"]},\"examples\":[{\"de\":{\"blue\":[\"gut\"]},\"lv\":{}},{\"de\":{\"blue\":[\"Gut\"]},\"lv\":{}},{\"de\":{\"blue\":[\"gut\"]},\"lv\":{}},{\"de\":{\"blue\":[\"Guten\"]},\"lv\":{}},{\"de\":{\"blue\":[\"gute\"]},\"lv\":{}},{\"de\":{\"blue\":[\"gut\"]},\"lv\":{}}],\"tip\":[{\"blue\":[\"gut\"]},{\"green\":[\"das Gut\"]}],\"important\":[{\"blue\":[\"Cerma\"]},{\"green\":[\"das Gut\"]},{\"blue\":[\"Guten Tag\",\"Morgen\",\"Abend\"]}]}"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts gut\|idx:259 (gut), ceļš 'lv; study.translation; study.explanation; study.examples; study.tip; study.important; study.sectionAccents': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Mirë","study.translation":"Mirë","study.explanation":"[\"Ideja kryesore: zorra është mbiemër/ndaj…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gut",
  "lv": "Mirë",
  "level": "A1",
  "study": {
    "id": "a1-gut-study",
    "layout": "standardStudy",
    "translation": "Mirë",
    "explanation": [
      "Ideja kryesore: zorra është mbiemër/ndajfolje – e mirë, e suksesshme, në rregull.",
      "Zorra përshkruan cilësinë, shëndetin ose si është diçka (Es geht mir gut. = Jam mirë.).",
      "Në shprehjen e sjellshme, zorra guten Tag/Abend/Morgen ndryshon fundin e saj pas shkrepjes.",
      "Nëse zorrët përcaktojnë një folje, është një ndajfolje (gut schwimmen = not i mirë).",
      "Të mos ngatërrohet me Das Gut • Është një emër i shkruar me shkronja të mëdha dhe artikuj (pronë, rezidencë)."
    ],
    "examples": [
      {
        "de": "Das Essen ist gut.",
        "lv": "Ushqimi është i mirë."
      },
      {
        "de": "Wie geht es dir? – Gut, danke!",
        "lv": "Si je - mirë, faleminderit!"
      },
      {
        "de": "Er spricht gut Deutsch.",
        "lv": "Ai flet mirë gjermanisht."
      },
      {
        "de": "Guten Morgen!",
        "lv": "Mirëmëngjes."
      },
      {
        "de": "Das ist eine gute Idee.",
        "lv": "-Kjo është ide e mirë."
      },
      {
        "de": "Alles ist gut.",
        "lv": "Gjithcka eshte ne rregull."
      }
    ],
    "tip": [
      "Zorra pa artikullin është mbiemër/ndajfolje - e mirë/e mirë.",
      "Das Gut me shkronja të mëdha dhe artikuj është një fjalë krejtësisht e ndryshme - një emër (pronë, rezidencë)."
    ],
    "important": [
      "Cerma = e mirë/e mirë (mbiemër/mbiemër).",
      "Das Gut = pronë/rezidencë (emri) – të mos ngatërrohet me zorrën.",
      "Guten Tag/Morgen/Abend – lezione të zorrëve që përfundojnë pas nxjerrjes."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "gut"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Gut"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gut"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Guten"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gute"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "gut"
            ]
          },
          "lv": {}
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
            "Cerma"
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

## Finding 44

**Audit ID:** `LRB095-0044`
**Finding Stable ID:** `g2/a1/sq|haben|idx:261|lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `haben|idx:261`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** man ir
**DE reference (read-only):** haben
**CURRENT (captured scope):** {"lv":"Po, e kam.","study.translation":"Po, e kam.","study.explanation":"[\"Ideja kryesore: haben do të thotë që dikush ka ose mund të ketë qasje në diçka.\",\"Struktura dative letoneze \\\"I have/you have\\\" është e thjeshtë + haben në gjermanisht: Ich habe…, Du have…, Er hat… - * not mir habe.\",\"Situata akuzuese vijon Haben: Ich habe ein Auto. = Kam makinë.\",\"Haben përdoret gjithashtu si folje ndihmëse në kohën e përsosur: Ich habe gelernt.\"]","study.examples":"[{\"de\":\"Ich habe ein Auto.\",\"lv\":\"Kam edhe një makinë tjetër.\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Ke një sekondë?\"},{\"de\":\"Wir haben Hunger.\",\"lv\":\"Jemi të uritur.\"},{\"de\":\"Ich habe das gemacht.\",\"lv\":\"Bëra...\"}]","study.comparison":"[{\"word\":\"haben\",\"meaning\":\"Po, e kam.\",\"example\":\"Ich habe Zeit. = Kam kohë.\"},{\"word\":\"sein\",\"meaning\":\"Të jesh\",\"example\":\"Ich bin hier. = Unë jam këtu.\"},{\"word\":\"bekommen\",\"meaning\":\"Për të marrë\",\"example\":\"Ich bekomme ein Geschenk. = Unë marr një dhuratë.\"},{\"word\":\"machen\",\"meaning\":\"Do / do\",\"example\":\"Ich mache das. = Unë e bëj këtë.\"}]","study.tip":"{\"text\":\"Atceries: Ich habe → man ir.\"}","study.important":"[\"Letonisht \\\"my\\\" = Gjermanisht Ich habe + akuzues. Mos përdorni gjendjen dative: false *mir habe.\",\"Me sein dhe datif: Mir ist kalt. = Kam ftohtë. (jo ti!)\",\"Shkëlqyeshëm: Ich habe gelernt = Mësova.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts haben\|idx:261 (haben), ceļš 'lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Po, e kam.","study.translation":"Po, e kam.","study.explanation":"[\"Ideja kryesore: haben do të …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "haben",
  "lv": "Po, e kam.",
  "level": "A1",
  "study": {
    "id": "a1-haben",
    "layout": "standardStudy",
    "translation": "Po, e kam.",
    "explanation": [
      "Ideja kryesore: haben do të thotë që dikush ka ose mund të ketë qasje në diçka.",
      "Struktura dative letoneze \"I have/you have\" është e thjeshtë + haben në gjermanisht: Ich habe…, Du have…, Er hat… - * not mir habe.",
      "Situata akuzuese vijon Haben: Ich habe ein Auto. = Kam makinë.",
      "Haben përdoret gjithashtu si folje ndihmëse në kohën e përsosur: Ich habe gelernt."
    ],
    "examples": [
      {
        "de": "Ich habe ein Auto.",
        "lv": "Kam edhe një makinë tjetër."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Ke një sekondë?"
      },
      {
        "de": "Wir haben Hunger.",
        "lv": "Jemi të uritur."
      },
      {
        "de": "Ich habe das gemacht.",
        "lv": "Bëra..."
      }
    ],
    "comparison": [
      {
        "word": "haben",
        "meaning": "Po, e kam.",
        "example": "Ich habe Zeit. = Kam kohë."
      },
      {
        "word": "sein",
        "meaning": "Të jesh",
        "example": "Ich bin hier. = Unë jam këtu."
      },
      {
        "word": "bekommen",
        "meaning": "Për të marrë",
        "example": "Ich bekomme ein Geschenk. = Unë marr një dhuratë."
      },
      {
        "word": "machen",
        "meaning": "Do / do",
        "example": "Ich mache das. = Unë e bëj këtë."
      }
    ],
    "tip": {
      "text": "Atceries: Ich habe → man ir."
    },
    "important": [
      "Letonisht \"my\" = Gjermanisht Ich habe + akuzues. Mos përdorni gjendjen dative: false *mir habe.",
      "Me sein dhe datif: Mir ist kalt. = Kam ftohtë. (jo ti!)",
      "Shkëlqyeshëm: Ich habe gelernt = Mësova."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "haben",
          "Ich habe"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "habe"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Hast"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "haben"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "habe"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
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
              "sein"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "bekommen"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "machen"
            ]
          },
          "meaning": {},
          "example": {
            "red": [
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
            "habe"
          ]
        },
        {
          "blue": [
            "sein"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 45

**Audit ID:** `LRB095-0045`
**Finding Stable ID:** `g2/a1/sq|halten|idx:265|lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `halten|idx:265`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** turēt
**DE reference (read-only):** halten
**CURRENT (captured scope):** {"lv":"Mbaje • Ndalo","study.translation":"Mbaje • Ndalo","study.explanation":"[\"Ideja kryesore: Do të thotë mbajtja e helmetës, por gjithashtu mund të nënkuptojë ndalimin ose pauzën në rastin e transportit ose lëvizjes.\",\"Kur keni një objekt në dorë, zakonisht duhet të mbahet nga aureola.\",\"Ndalimi në autobus, tren ose makinë zakonisht do të thotë ndalim.\",\"Në fjalinë ich halte das für... do të thotë të konsiderosh si.\"]","study.examples":"[{\"de\":\"Ich halte die Tasche.\",\"lv\":\"E mbaj çantën\"},{\"de\":\"Der Bus hält hier.\",\"lv\":\"Autobusi ndalon këtu.\"},{\"de\":\"Bitte halten Sie an.\",\"lv\":\"Ju lutem ndaluni.\"},{\"de\":\"Ich halte das für richtig.\",\"lv\":\"Mendoj se është e drejtë.\"}]","study.comparison":"[{\"word\":\"halten\",\"meaning\":\"Mbaje/ndalo\",\"example\":\"Der Bus hält. = Autobusi ndalet.\"},{\"word\":\"nehmen\",\"meaning\":\"-Blyej.\",\"example\":\"Ich nehme die Tasche. = Unë marr çantën.\"},{\"word\":\"anhalten\",\"meaning\":\"Ndalo!\",\"example\":\"Bitte halten Sie an. = Të lutem, ndaloni.\"},{\"word\":\"denken\",\"meaning\":\"Të menduarit\",\"example\":\"Ich denke, das ist richtig. = Unë mendoj se kjo është e drejtë.\"}]","study.tip":"{\"text\":\"Mos harroni: Jashtë → kontrollit • → Ndalesa (t) e transportit.\"}","study.important":"[\"Halten nuk do të thotë vetëm \\\"prit\\\". Në transport, kjo zakonisht do të thotë ndalim.\",\"Ich halte das für... është një deklaratë e opinionit: \\\"Unë e shoh këtë si...\\\".\",\"Bitte halten Sie an përdoret si folja e ndarë anhalten.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts halten\|idx:265 (halten), ceļš 'lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Mbaje • Ndalo","study.translation":"Mbaje • Ndalo","study.explanation":"[\"Ideja kryesore: Do të …'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "halten",
  "lv": "Mbaje • Ndalo",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "Mbaje • Ndalo",
    "explanation": [
      "Ideja kryesore: Do të thotë mbajtja e helmetës, por gjithashtu mund të nënkuptojë ndalimin ose pauzën në rastin e transportit ose lëvizjes.",
      "Kur keni një objekt në dorë, zakonisht duhet të mbahet nga aureola.",
      "Ndalimi në autobus, tren ose makinë zakonisht do të thotë ndalim.",
      "Në fjalinë ich halte das für... do të thotë të konsiderosh si."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "E mbaj çantën"
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Autobusi ndalon këtu."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Ju lutem ndaluni."
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Mendoj se është e drejtë."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "Mbaje/ndalo",
        "example": "Der Bus hält. = Autobusi ndalet."
      },
      {
        "word": "nehmen",
        "meaning": "-Blyej.",
        "example": "Ich nehme die Tasche. = Unë marr çantën."
      },
      {
        "word": "anhalten",
        "meaning": "Ndalo!",
        "example": "Bitte halten Sie an. = Të lutem, ndaloni."
      },
      {
        "word": "denken",
        "meaning": "Të menduarit",
        "example": "Ich denke, das ist richtig. = Unë mendoj se kjo është e drejtë."
      }
    ],
    "tip": {
      "text": "Mos harroni: Jashtë → kontrollit • → Ndalesa (t) e transportit."
    },
    "important": [
      "Halten nuk do të thotë vetëm \"prit\". Në transport, kjo zakonisht do të thotë ndalim.",
      "Ich halte das für... është një deklaratë e opinionit: \"Unë e shoh këtë si...\".",
      "Bitte halten Sie an përdoret si folja e ndarë anhalten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "halte"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "halte"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "hält"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "halten"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "halte"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "halten"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "nehmen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "nehme"
            ]
          }
        },
        {
          "word": {
            "green": [
              "anhalten"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "denken"
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
            "halten"
          ]
        },
        {
          "blue": [
            "halte"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 46

**Audit ID:** `LRB095-0046`
**Finding Stable ID:** `g2/a1/sq|Hand|idx:267|lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0003`
**Lang:** sq
**Card:** `Hand|idx:267`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** plauksta
**DE reference (read-only):** Hand
**CURRENT (captured scope):** {"lv":"dora","study.translation":"dora","study.explanation":"[\"Ideja kryesore: die Hand nënkupton dorën.\",\"Në gjermanisht Arm dhe Hand janë dy fjalë të ndryshme.\",\"Në shqipja e përditshme fjala dora shpesh mund të nënkuptojë si Arm ashtu edhe Hand.\"]","study.examples":"[{\"de\":\"Ich wasche meine Hände.\",\"lv\":\"unë laj duart.\"},{\"de\":\"Sie hält das Glas in der Hand.\",\"lv\":\"ajo mban gotën në dorën e saj.\"},{\"de\":\"Mein Arm tut weh.\",\"lv\":\"më dhemb dora.\"}]","study.comparison":"[{\"word\":\"die Hand\",\"meaning\":\"dora\",\"example\":\"in der Hand – në dorë\"},{\"word\":\"der Arm\",\"meaning\":\"Dora\",\"example\":\"Mein Arm tut weh. – Më dhemb krahu.\"}]","study.tip":"[\"Hand = dora.\",\"Arm = krahu nga shpatulla deri te dora.\"]","study.important":"[\"Në gjermanisht Hand dhe Arm nuk janë e njëjta fjalë.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts Hand\|idx:267 (Hand), ceļš 'lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"dora","study.translation":"dora","study.explanation":"[\"Ideja kryesore: die Hand nënkupton dorën…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
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
  "lv": "dora",
  "level": "A1",
  "study": {
    "id": "a1-hand-study",
    "layout": "standardStudy",
    "translation": "dora",
    "explanation": [
      "Ideja kryesore: die Hand nënkupton dorën.",
      "Në gjermanisht Arm dhe Hand janë dy fjalë të ndryshme.",
      "Në shqipja e përditshme fjala dora shpesh mund të nënkuptojë si Arm ashtu edhe Hand."
    ],
    "examples": [
      {
        "de": "Ich wasche meine Hände.",
        "lv": "unë laj duart."
      },
      {
        "de": "Sie hält das Glas in der Hand.",
        "lv": "ajo mban gotën në dorën e saj."
      },
      {
        "de": "Mein Arm tut weh.",
        "lv": "më dhemb dora."
      }
    ],
    "comparison": [
      {
        "word": "die Hand",
        "meaning": "dora",
        "example": "in der Hand – në dorë"
      },
      {
        "word": "der Arm",
        "meaning": "Dora",
        "example": "Mein Arm tut weh. – Më dhemb krahu."
      }
    ],
    "tip": [
      "Hand = dora.",
      "Arm = krahu nga shpatulla deri te dora."
    ],
    "important": [
      "Në gjermanisht Hand dhe Arm nuk janë e njëjta fjalë."
    ]
  }
}
```

---

## Finding 47

**Audit ID:** `LRB095-0047`
**Finding Stable ID:** `g2/a1/sq|heißen|idx:276|lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0004`
**Lang:** sq
**Card:** `heißen|idx:276`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** saukties
**DE reference (read-only):** heißen
**CURRENT (captured scope):** {"lv":"Quaje veten • Dua të them","study.translation":"Quaje veten • Dua të them","study.explanation":"[\"Ideja kryesore: heißen përdoret më së shumti për të thënë emrin e dikujt.\",\"Ich heiße... do të thotë \\\"emri im është...\\\".\",\"Me fjalë ose fraza, heißen mund të nënkuptojë edhe mesataren.\",\"Shprehja më e rëndësishme në nivelin A1 ishte Wie heißt?\"]","study.examples":"[{\"de\":\"Ich heiße Anna.\",\"lv\":\"Më quajnë Ana.\"},{\"de\":\"Wie heißt du?\",\"lv\":\"-Emri juaj?\"},{\"de\":\"Wie heißt das auf Deutsch?\",\"lv\":\"Si quhet në gjermanisht?\"},{\"de\":\"Was heißt das?\",\"lv\":\"Çfarë do të thotë kjo?\"}]","study.comparison":"[{\"word\":\"heißen\",\"meaning\":\"Duke u thirrur/etiketuar\",\"example\":\"Ich heiße Anna. = Unë quhem Anna.\"},{\"word\":\"nennen\",\"meaning\":\"Kërko/emri\",\"example\":\"Er nennt mich Tom. = Ai më quan Tom.\"},{\"word\":\"bedeuten\",\"meaning\":\"Mos e harroni.\",\"example\":\"Was bedeutet das? = Çfarë do të thotë kjo?\"},{\"word\":\"rufen\",\"meaning\":\"Kërko\",\"example\":\"Ich rufe dich. = Unë të thirr.\"},{\"word\":\"anrufen\",\"meaning\":\"Kërko\",\"example\":\"Ich rufe dich an. = Unë të telefonoj.\"}]","study.tip":"{\"text\":\"Atceries: Ich heiße... → mani sauc...\"}","study.important":"[\"Pra, çfarë ndodhi? Nuk do të thotë fjalë për fjalë \\\"Si e ke emrin?\\\" por \\\"Si e ke emrin?\\\"\",\"A ishte edhe kjo? Zakonisht do të thotë, \\\"Çfarë do të thotë kjo?\\\"\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts heißen\|idx:276 (heißen), ceļš 'lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"Quaje veten • Dua të them","study.translation":"Quaje veten • Dua të them","study.explanation":"[…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "heißen",
  "lv": "Quaje veten • Dua të them",
  "level": "A1",
  "study": {
    "id": "a1-heißen",
    "layout": "standardStudy",
    "translation": "Quaje veten • Dua të them",
    "explanation": [
      "Ideja kryesore: heißen përdoret më së shumti për të thënë emrin e dikujt.",
      "Ich heiße... do të thotë \"emri im është...\".",
      "Me fjalë ose fraza, heißen mund të nënkuptojë edhe mesataren.",
      "Shprehja më e rëndësishme në nivelin A1 ishte Wie heißt?"
    ],
    "examples": [
      {
        "de": "Ich heiße Anna.",
        "lv": "Më quajnë Ana."
      },
      {
        "de": "Wie heißt du?",
        "lv": "-Emri juaj?"
      },
      {
        "de": "Wie heißt das auf Deutsch?",
        "lv": "Si quhet në gjermanisht?"
      },
      {
        "de": "Was heißt das?",
        "lv": "Çfarë do të thotë kjo?"
      }
    ],
    "comparison": [
      {
        "word": "heißen",
        "meaning": "Duke u thirrur/etiketuar",
        "example": "Ich heiße Anna. = Unë quhem Anna."
      },
      {
        "word": "nennen",
        "meaning": "Kërko/emri",
        "example": "Er nennt mich Tom. = Ai më quan Tom."
      },
      {
        "word": "bedeuten",
        "meaning": "Mos e harroni.",
        "example": "Was bedeutet das? = Çfarë do të thotë kjo?"
      },
      {
        "word": "rufen",
        "meaning": "Kërko",
        "example": "Ich rufe dich. = Unë të thirr."
      },
      {
        "word": "anrufen",
        "meaning": "Kërko",
        "example": "Ich rufe dich an. = Unë të telefonoj."
      }
    ],
    "tip": {
      "text": "Atceries: Ich heiße... → mani sauc..."
    },
    "important": [
      "Pra, çfarë ndodhi? Nuk do të thotë fjalë për fjalë \"Si e ke emrin?\" por \"Si e ke emrin?\"",
      "A ishte edhe kjo? Zakonisht do të thotë, \"Çfarë do të thotë kjo?\""
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "heißen",
          "Ich heiße",
          "Ideja"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "heiße"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "heißt"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "heißt"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "heißt"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "heißen"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "heiße"
            ]
          }
        },
        {
          "word": {
            "green": [
              "nennen"
            ]
          },
          "meaning": {},
          "example": {
            "green": [
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
          "meaning": {},
          "example": {
            "yellow": [
              "Bedutet"
            ]
          }
        },
        {
          "word": {
            "green": [
              "rufen"
            ]
          },
          "meaning": {},
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

## Finding 48

**Audit ID:** `LRB095-0048`
**Finding Stable ID:** `g2/a1/sq|hoch|idx:285|lv, study.translation, study.explanation, study.examples, study.tip, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0005`
**Lang:** sq
**Card:** `hoch|idx:285`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_TARGET_LANGUAGE
**LV source (read-only):** augsts
**DE reference (read-only):** hoch
**CURRENT (captured scope):** {"lv":"Mirë.","study.translation":"Mirë.","study.explanation":"[\"Ideja kryesore: vertikale, horizontale ose e lartë në lartësi.\",\"Hoch do të thotë, mbi të gjitha, rritje e madhe.\",\"Zakonisht karakterizohet nga: lartësia vertikale.\"]","study.examples":"[{\"de\":\"Der Berg ist hoch.\",\"lv\":\"Pjesa e sipërme është e lartë.\"},{\"de\":\"Das Regal ist zwei Meter hoch.\",\"lv\":\"Pjesa e sipërme është e lartë.\"},{\"de\":\"Die Miete ist hoch.\",\"lv\":\"Qiratë janë të larta.\"},{\"de\":\"Die Mauer ist hoch.\",\"lv\":\"Muri është i lartë.\"},{\"de\":\"Die Preise sind hoch.\",\"lv\":\"Çmimet janë të larta.\"}]","study.tip":"[\"Hoh = i lartë\",\"Përdorni hoch kur konteksti i përshtatet këtij kuptimi.\"]","study.important":"[\"Hoch përdoret shpesh për të treguar çmimet dhe nivelet.\",\"Hoh = i lartë.\",\"Vertikal, horizontal ose i gjatë në lartësi.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts hoch\|idx:285 (hoch), ceļš 'lv, study.translation, study.explanation, study.examples, study.tip, study.important': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Mirë.","study.translation":"Mirë.","study.explanation":"[\"Ideja kryesore: vertikale, horizontale…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "hoch",
  "lv": "Mirë.",
  "level": "A1",
  "study": {
    "id": "a1-hoch-study",
    "layout": "standardStudy",
    "translation": "Mirë.",
    "explanation": [
      "Ideja kryesore: vertikale, horizontale ose e lartë në lartësi.",
      "Hoch do të thotë, mbi të gjitha, rritje e madhe.",
      "Zakonisht karakterizohet nga: lartësia vertikale."
    ],
    "examples": [
      {
        "de": "Der Berg ist hoch.",
        "lv": "Pjesa e sipërme është e lartë."
      },
      {
        "de": "Das Regal ist zwei Meter hoch.",
        "lv": "Pjesa e sipërme është e lartë."
      },
      {
        "de": "Die Miete ist hoch.",
        "lv": "Qiratë janë të larta."
      },
      {
        "de": "Die Mauer ist hoch.",
        "lv": "Muri është i lartë."
      },
      {
        "de": "Die Preise sind hoch.",
        "lv": "Çmimet janë të larta."
      }
    ],
    "tip": [
      "Hoh = i lartë",
      "Përdorni hoch kur konteksti i përshtatet këtij kuptimi."
    ],
    "important": [
      "Hoch përdoret shpesh për të treguar çmimet dhe nivelet.",
      "Hoh = i lartë.",
      "Vertikal, horizontal ose i gjatë në lartësi."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "hoch"
        ]
      },
      "examples": [
        {
          "de": {
            "green": [
              "hoch"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "hoch"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "hoch"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "hoch"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "hoch"
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
            "hoch"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 49

**Audit ID:** `LRB095-0049`
**Finding Stable ID:** `g2/a1/sq|ins|idx:296|lv/study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0001`
**Lang:** sq
**Card:** `ins|idx:296`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** iekšā • uz iekšu • kurp?
**DE reference (read-only):** ins
**CURRENT (captured scope):** {"lv":"W • W • Ku?","study.translation":"W • W • Ku?","study.explanation":"[\"INS është shkurtimi i parafjalës dhe artikullit das.\",\"Forma e plotë: në das (ku?).\",\"Ku përdoret në lidhje me emrat e çdo gjinie kur i përgjigjemi pyetjes? - lëvizja e brendshme.\",\"Zakonisht me folje: gehen, fahren, kommen, legen, stecken.\",\"Në praktikë, INS përdoret pothuajse gjithmonë në vend të indas-it të plotë.\"]","study.examples":"[{\"de\":\"Ich gehe ins Kino.\",\"lv\":\"Po shkoj në kinema\"},{\"de\":\"Sie geht ins Bett.\",\"lv\":\"Ajo shkon të flejë.\"},{\"de\":\"Wir fahren ins Ausland.\",\"lv\":\"Do të shkojmë jashtë vendit.\"},{\"de\":\"Komm ins Haus!\",\"lv\":\"Ktheu në shtëpi.\"},{\"de\":\"Er steckt das Geld in den Geldbeutel.\",\"lv\":\"Ai i fut paratë në portofolin e tij.\"},{\"de\":\"Wir gehen ins Museum.\",\"lv\":\"Do të shkojmë në muze.\"},{\"de\":\"Sie legt die Blumen ins Wasser.\",\"lv\":\"Ajo i hedh lulet në ujë.\"},{\"de\":\"Fahr bitte ins Zentrum.\",\"lv\":\"Shko në qendër.\"}]","study.comparison":"[{\"word\":\"ins\",\"meaning\":\"Brenda, për ku? (Ak.)\",\"example\":\"ins Kino – Në kinema\"},{\"word\":\"im\",\"meaning\":\"Brenda ku? (kujt?)\",\"example\":\"im Kino – Kinema\"},{\"word\":\"in\",\"meaning\":\"Brenda/për (me artikull të pavarur)\",\"example\":\"in die Stadt – Në qytet.\"},{\"word\":\"aufs\",\"meaning\":\"Sipërfaqja (sëpata)\",\"example\":\"aufs Dach – Atje lart!\"},{\"word\":\"zum\",\"meaning\":\"Për / nga (kush?)\",\"example\":\"zum Arzt – Të lutem.\"}]","study.tip":"[\"Mos harroni: in + das → ins (where?, where?).\",\"Ku? → në • Ku? → Ata - ky është ndryshimi kryesor!\"]","study.important":"[\"Ins = in das, vetëm me një emër të çdo gjinie, where? në foto.\",\"Përgjigjet e pyetjeve: ku? dhe ku jo? — lëvizje, jo vendndodhje.\",\"Për gjininë mashkullore: in den Wald • Women: in die Schule.\",\"Mos ngatërroni: ins Kino gehen (në kinema) dhe im Kino sein (për të qenë në kinema).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts ins\|idx:296 (ins), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.comparison, kuru saturs sākas ar '{"lv":"W • W • Ku?","study.translation":"W • W • Ku?","study.explanation":"[\"INS është shkurtimi i para…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ins",
  "lv": "W • W • Ku?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "W • W • Ku?",
    "explanation": [
      "INS është shkurtimi i parafjalës dhe artikullit das.",
      "Forma e plotë: në das (ku?).",
      "Ku përdoret në lidhje me emrat e çdo gjinie kur i përgjigjemi pyetjes? - lëvizja e brendshme.",
      "Zakonisht me folje: gehen, fahren, kommen, legen, stecken.",
      "Në praktikë, INS përdoret pothuajse gjithmonë në vend të indas-it të plotë."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Po shkoj në kinema"
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Ajo shkon të flejë."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Do të shkojmë jashtë vendit."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Ktheu në shtëpi."
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Ai i fut paratë në portofolin e tij."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Do të shkojmë në muze."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Ajo i hedh lulet në ujë."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Shko në qendër."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "Brenda, për ku? (Ak.)",
        "example": "ins Kino – Në kinema"
      },
      {
        "word": "im",
        "meaning": "Brenda ku? (kujt?)",
        "example": "im Kino – Kinema"
      },
      {
        "word": "in",
        "meaning": "Brenda/për (me artikull të pavarur)",
        "example": "in die Stadt – Në qytet."
      },
      {
        "word": "aufs",
        "meaning": "Sipërfaqja (sëpata)",
        "example": "aufs Dach – Atje lart!"
      },
      {
        "word": "zum",
        "meaning": "Për / nga (kush?)",
        "example": "zum Arzt – Të lutem."
      }
    ],
    "tip": [
      "Mos harroni: in + das → ins (where?, where?).",
      "Ku? → në • Ku? → Ata - ky është ndryshimi kryesor!"
    ],
    "important": [
      "Ins = in das, vetëm me një emër të çdo gjinie, where? në foto.",
      "Përgjigjet e pyetjeve: ku? dhe ku jo? — lëvizje, jo vendndodhje.",
      "Për gjininë mashkullore: in den Wald • Women: in die Schule.",
      "Mos ngatërroni: ins Kino gehen (në kinema) dhe im Kino sein (për të qenë në kinema)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ins"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "in den"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "ins"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "ins"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
            "ins"
          ]
        },
        {}
      ],
      "important": [
        {
          "blue": [
            "ins"
          ],
          "purple": [
            "in das"
          ]
        },
        {},
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

## Finding 50

**Audit ID:** `LRB095-0050`
**Finding Stable ID:** `g2/a1/sq|jung|idx:304|lv/study|WRONG_LANGUAGE|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-SQ-L0002`
**Lang:** sq
**Card:** `jung|idx:304`
**Field / path:** `lv/study`
**Production file:** `crowdin-staging/g2/sq-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** WRONG_LANGUAGE
**LV source (read-only):** jauns (par cilvēkiem)
**DE reference (read-only):** jung
**CURRENT (captured scope):** {"lv":"Të rinj (rreth njerëzve)","study.translation":"Të rinj (rreth njerëzve)","study.explanation":"[\"Ideja kryesore: jung do të thotë moshë e re – i referohet njerëzve dhe kafshëve, jo objekteve.\",\"Jung përcakton moshën • E kundërta është më e ulët (më e vjetër).\",\"Në letonisht, fjala i ri ka dy kuptime: mosha e re (jung) dhe e reja/e krijuar kohët e fundit (neu).\",\"Përdorni neu, as jung për sendet e krijuara ose të blera kohët e fundit.\",\"Jung përdoret gjithashtu në një kuptim metaforik: brez i ri, i dyfishtë i ri, të rinj.\",\"Ka edhe emrin die Jugend (rini).\"]","study.examples":"[{\"de\":\"Sie ist noch jung.\",\"lv\":\"Ai është ende i ri.\"},{\"de\":\"Der Hund ist jung.\",\"lv\":\"Qeni është i ri.\"},{\"de\":\"Wir sind noch jung.\",\"lv\":\"Jemi më të rinj.\"},{\"de\":\"Er sieht sehr jung aus.\",\"lv\":\"Ai duket kaq i ri.\"},{\"de\":\"Das ist ein junges Paar.\",\"lv\":\"Ky është një dopio i ri.\"},{\"de\":\"Die junge Frau lächelt.\",\"lv\":\"E reja po buzëqesh.\"},{\"de\":\"Mein Bruder ist jünger als ich.\",\"lv\":\"Vëllai im është më i ri se unë.\"}]","study.tip":"[\"Jungu ka të bëjë me moshën (njerëzit, kafshët) - përdorni neu kur flisni për gjërat që kanë dalë kohët e fundit.\",\"Përkundrazi: jung ↔ alt (↔plak i ri).\"]","study.important":"[\"Jung përshkruan epokën e tij, jo risinë e gjërave.\",\"Përdorni neu në vend të jung për gjëra të reja (telefon, makinë, shtëpi).\",\"E gabuar: Mein Handy ist jung. → E saktë: Mein Handy ist neu.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** Individuāli pārskatīts sq ieraksts jung\|idx:304 (jung), ceļš 'lv/study': viena rinda aptver apakšlaukus lv, study.translation, study.explanation, study.examples, study.tip, kuru saturs sākas ar '{"lv":"Të rinj (rreth njerëzve)","study.translation":"Të rinj (rreth njerëzve)","study.explanation":"[\"…'. Atsevišķās nozīmes nevar droši aizstāt ar vienu owner_new; vajadzīgs lauka līmeņa OWNER sadalījums.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "jung",
  "lv": "Të rinj (rreth njerëzve)",
  "level": "A1",
  "study": {
    "id": "a1-jung",
    "layout": "standardStudy",
    "translation": "Të rinj (rreth njerëzve)",
    "explanation": [
      "Ideja kryesore: jung do të thotë moshë e re – i referohet njerëzve dhe kafshëve, jo objekteve.",
      "Jung përcakton moshën • E kundërta është më e ulët (më e vjetër).",
      "Në letonisht, fjala i ri ka dy kuptime: mosha e re (jung) dhe e reja/e krijuar kohët e fundit (neu).",
      "Përdorni neu, as jung për sendet e krijuara ose të blera kohët e fundit.",
      "Jung përdoret gjithashtu në një kuptim metaforik: brez i ri, i dyfishtë i ri, të rinj.",
      "Ka edhe emrin die Jugend (rini)."
    ],
    "examples": [
      {
        "de": "Sie ist noch jung.",
        "lv": "Ai është ende i ri."
      },
      {
        "de": "Der Hund ist jung.",
        "lv": "Qeni është i ri."
      },
      {
        "de": "Wir sind noch jung.",
        "lv": "Jemi më të rinj."
      },
      {
        "de": "Er sieht sehr jung aus.",
        "lv": "Ai duket kaq i ri."
      },
      {
        "de": "Das ist ein junges Paar.",
        "lv": "Ky është një dopio i ri."
      },
      {
        "de": "Die junge Frau lächelt.",
        "lv": "E reja po buzëqesh."
      },
      {
        "de": "Mein Bruder ist jünger als ich.",
        "lv": "Vëllai im është më i ri se unë."
      }
    ],
    "tip": [
      "Jungu ka të bëjë me moshën (njerëzit, kafshët) - përdorni neu kur flisni për gjërat që kanë dalë kohët e fundit.",
      "Përkundrazi: jung ↔ alt (↔plak i ri)."
    ],
    "important": [
      "Jung përshkruan epokën e tij, jo risinë e gjërave.",
      "Përdorni neu në vend të jung për gjëra të reja (telefon, makinë, shtëpi).",
      "E gabuar: Mein Handy ist jung. → E saktë: Mein Handy ist neu."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "jung"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "jung"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "jung"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "jung"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "junge"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "junge"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "jünger"
            ]
          },
          "lv": {}
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

