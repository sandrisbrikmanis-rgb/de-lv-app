# G2/A1 LRB LRB-072 — OWNER VIEW

**Batch:** LRB-072
**Rows:** 15/15
**Direction:** DESCENDING
**Reserved for:** LB_OWNER_PREP
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-16T17:19:52.335Z
**Source commit:** `34ba7bd82d0f6ae3c7326355faa6c0ca9a528001`
**Branch:** `cursor/lrb-072-owner-authorization-aa66`
**Input SHA256:** `138d8f6c230c4c329e3d6d94371a10de4445239fc6b0c283d3c9c4eccc89907e`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-072-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB072-0001`
**Finding Stable ID:** `g2/a1/lb|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0109`
**Lang:** lb
**Card:** `a1-uhr`
**Field / path:** `a1.card.a1-uhr.study.examples[5].native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of a1-uhr / a1.card.a1-uhr.study.examples[5].native: that exact field is absent from the mapped card; the available snapshot begins ''. For German 'Uhr' / Latvian 'pulkstenis', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
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
  "lv": "Pulsufuerderung",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "Pulsufuerderung",
    "explanation": [
      "Haaptsaach: Auer oder Armbanduhr. Och d'Zäit an der Auer: Es ist acht Uhr.",
      "Die Uhr galvenokārt nozīmē: ierīce vai laiks pulkstenī.",
      "Bieži raksturo: konkrēts wunscht.",
      "Die Uhr nozīmē pulksteni — ierīci vai laiku pulkstenī (Es ist acht Uhr, meine Uhr)."
    ],
    "examples": [
      {
        "de": "Es ist acht Uhr.",
        "lv": "Ir astoņi (pulksten astoņi)."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Ir astoņi (pulksten astoņi)."
      },
      {
        "de": "Meine Uhr ist kaputt.",
        "lv": "Mans pulkstenis ir salūzis."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Ir astoṅi (Pulstexten)."
      },
      {
        "de": "die Uhr",
        "lv": "Ierīce/laiks pulkstenī • Die Zeit"
      }
    ],
    "tip": [
      "Auer oder Armbanduhr. Och d'Zäit an der Auer: Es ist acht Uhr.",
      "Benotz die Uhr, wann de Kontext dëser Bedeitong entsprécht."
    ],
    "important": [
      "die Uhr: Apparat (meine Uhr) oder Zäit (acht Uhr).",
      "die Uhr: préift de Kontext virun der Notze."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Uhr"
        ],
        "purple": [
          "pulkstenis"
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
              "pulksten"
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
              "pulksten"
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
              "pulkstenis"
            ]
          }
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
          "lv": {
            "purple": [
              "astoṅi"
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
              "pulkstenī"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "pulkstenis"
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

## Finding 2

**Audit ID:** `LRB072-0002`
**Finding Stable ID:** `g2/a1/lb|a1-um|a1.card.a1-um.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0110`
**Lang:** lb
**Card:** `a1-um`
**Field / path:** `a1.card.a1-um.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** ap • pulksten
**DE reference (read-only):** um
**CURRENT (captured scope):** AP • Pulstexten
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-um / a1.card.a1-um.native: exact Luxembourgish wording for German 'um' (Latvian 'ap • pulksten') is not established by the supplied evidence; production currently has 'AP • Pulstexten' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "um",
  "lv": "AP • Pulstexten",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "AP • Pulstexten",
    "explanation": [
      "Galvenā doma: um Đoti bieži nozīmē pulksten ar laiku vai ap/apkārt ar vietu.",
      "Произношение на no no no no [fr]",
      "Abrëll ass et nees sou wäit.",
      "An der Frase um ... zu hëlft et de Ziel auszedréckegen: fir datt."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "Dat huet den Astrophysiker matgedeelt."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "Kumm loss mer fiere."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "Просмотреть онлайн онлайн."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "Ìch dat verpa, dü datsch verpa, ar dat verpa, mìr datta verpa, mìr datta verpa..."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "Puls-Texter / ap / lai",
        "example": "Ich komme um acht."
      },
      {
        "word": "am",
        "meaning": "CAA -",
        "example": "Am Montag komme ich."
      },
      {
        "word": "gegen",
        "meaning": "Ap laiku / Fun",
        "example": "Ich komme gegen acht."
      },
      {
        "word": "für",
        "meaning": "Priekš / par labu",
        "example": "Das ist für dich."
      }
    ],
    "tip": {
      "text": "Atceries: um acht = pulksten astoņos."
    },
    "important": [
      "um ar laiku parasti ir \"pulksten\".",
      "um ... zu bieži nozīmē \"lai ...\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "um",
          "um ... zu"
        ],
        "purple": [
          "pulksten",
          "ap",
          "apkārt",
          "lai"
        ],
        "green": [
          "laiku",
          "vietu"
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
              "Dat"
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
              "Kumm"
            ],
            "yellow": [
              "Kumm"
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
              "Просмотреть"
            ],
            "yellow": [
              "Просмотреть"
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
              "Ìch"
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
              "Puls",
              "ap",
              "lai"
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
              "CAA",
              "CAA"
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
              "ap laiku",
              "laiku"
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
              "priekš"
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
            "pulksten astoņos"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "um"
          ],
          "purple": [
            "pulksten"
          ]
        },
        {
          "blue": [
            "um ... zu"
          ],
          "purple": [
            "lai"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 3

**Audit ID:** `LRB072-0003`
**Finding Stable ID:** `g2/a1/lb|a1-um|a1.card.a1-um.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0111`
**Lang:** lb
**Card:** `a1-um`
**Field / path:** `a1.card.a1-um.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** ap • pulksten
**DE reference (read-only):** um
**CURRENT (captured scope):** AP • Pulstexten
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-um / a1.card.a1-um.study.translation: exact Luxembourgish wording for German 'um' (Latvian 'ap • pulksten') is not established by the supplied evidence; production currently has 'AP • Pulstexten' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "um",
  "lv": "AP • Pulstexten",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "AP • Pulstexten",
    "explanation": [
      "Galvenā doma: um Đoti bieži nozīmē pulksten ar laiku vai ap/apkārt ar vietu.",
      "Произношение на no no no no [fr]",
      "Abrëll ass et nees sou wäit.",
      "An der Frase um ... zu hëlft et de Ziel auszedréckegen: fir datt."
    ],
    "examples": [
      {
        "de": "Ich komme um acht Uhr.",
        "lv": "Dat huet den Astrophysiker matgedeelt."
      },
      {
        "de": "Wir sitzen um den Tisch.",
        "lv": "Kumm loss mer fiere."
      },
      {
        "de": "Er geht um die Ecke.",
        "lv": "Просмотреть онлайн онлайн."
      },
      {
        "de": "Ich lerne, um Deutsch zu sprechen.",
        "lv": "Ìch dat verpa, dü datsch verpa, ar dat verpa, mìr datta verpa, mìr datta verpa..."
      }
    ],
    "comparison": [
      {
        "word": "um",
        "meaning": "Puls-Texter / ap / lai",
        "example": "Ich komme um acht."
      },
      {
        "word": "am",
        "meaning": "CAA -",
        "example": "Am Montag komme ich."
      },
      {
        "word": "gegen",
        "meaning": "Ap laiku / Fun",
        "example": "Ich komme gegen acht."
      },
      {
        "word": "für",
        "meaning": "Priekš / par labu",
        "example": "Das ist für dich."
      }
    ],
    "tip": {
      "text": "Atceries: um acht = pulksten astoņos."
    },
    "important": [
      "um ar laiku parasti ir \"pulksten\".",
      "um ... zu bieži nozīmē \"lai ...\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "um",
          "um ... zu"
        ],
        "purple": [
          "pulksten",
          "ap",
          "apkārt",
          "lai"
        ],
        "green": [
          "laiku",
          "vietu"
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
              "Dat"
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
              "Kumm"
            ],
            "yellow": [
              "Kumm"
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
              "Просмотреть"
            ],
            "yellow": [
              "Просмотреть"
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
              "Ìch"
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
              "Puls",
              "ap",
              "lai"
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
              "CAA",
              "CAA"
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
              "ap laiku",
              "laiku"
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
              "priekš"
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
            "pulksten astoņos"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "um"
          ],
          "purple": [
            "pulksten"
          ]
        },
        {
          "blue": [
            "um ... zu"
          ],
          "purple": [
            "lai"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 4

**Audit ID:** `LRB072-0004`
**Finding Stable ID:** `g2/a1/lb|a1-verstehen|a1.card.a1-verstehen.study.explanation[2]|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0112`
**Lang:** lb
**Card:** `a1-verstehen`
**Field / path:** `a1.card.a1-verstehen.study.explanation[2]`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** Latviski šeit parasti nevajag “prast” vai “mācēt”; tie biežāk ir können.
**DE reference (read-only):** verstehen
**CURRENT (captured scope):** Latviski šeit parasti nevajag "prast" vai "mācēt" • Tie biežāk ir kann.
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-verstehen / a1.card.a1-verstehen.study.explanation[2]: exact Luxembourgish wording for German 'verstehen' (Latvian 'Latviski šeit parasti nevajag “prast” vai “mācēt”; tie biežāk ir können.') is not established by the supplied evidence; production currently has 'Latviski šeit parasti nevajag "prast" vai "mācēt" • Tie biežāk ir kann.' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "verstehen",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Galvenā doma: verstoen nozīmē saprast.",
      "To let, yes saproti valodu, cilvēku, tekstu vai situāciju.",
      "Latviski šeit parasti nevajag \"prast\" vai \"mācēt\" • Tie biežāk ir kann.",
      "Ech verstinn dat. - I understand. = Es saprotu."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Es tevi saprotu."
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "Vai tu saproti vāciski?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Et ass nesaprotu."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Procès-verbaux du."
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "CAA -",
        "example": "Ich verstehe dich."
      },
      {
        "word": "können",
        "meaning": "Varēt/prast",
        "example": "Ich kann schwimmen."
      },
      {
        "word": "wissen",
        "meaning": "CAA -",
        "example": "Ich weiß das."
      },
      {
        "word": "kennen",
        "meaning": "CAA -",
        "example": "Ich kenne ihn."
      }
    ],
    "tip": {
      "text": "Atceries: saprast tekstu/cilvēku → verstehen; prast kaut ko darīt → können."
    },
    "important": [
      "verstehen nav galvenais vārds nozīmei \"prast\".",
      "Ich verstehe Deutsch nozīmē \"es saprotu vāciski\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "verstoen",
          "Ech verstinn"
        ],
        "purple": [
          "saprast",
          "saproti"
        ],
        "red": [
          "Galvenā",
          "prast",
          "mācēt"
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
              "saprotu"
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
              "saproti"
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
              "nesaprotu"
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
              "Procès"
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
              "CAA"
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
              "varēt",
              "prast"
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
              "CAA"
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
              "CAA"
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
            "saprast"
          ],
          "red": [
            "können",
            "prast"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "verstehen"
          ],
          "red": [
            "prast"
          ]
        },
        {
          "blue": [
            "verstehe"
          ],
          "purple": [
            "saprotu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 5

**Audit ID:** `LRB072-0005`
**Finding Stable ID:** `g2/a1/lb|a1-vor|a1.card.a1-vor.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0113`
**Lang:** lb
**Card:** `a1-vor`
**Field / path:** `a1.card.a1-vor.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pirms • priekšā
**DE reference (read-only):** vor
**CURRENT (captured scope):** Pirms • Priekšā
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-vor / a1.card.a1-vor.native: exact Luxembourgish wording for German 'vor' (Latvian 'pirms • priekšā') is not established by the supplied evidence; production currently has 'Pirms • Priekšā' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "vor",
  "lv": "Pirms • Priekšā",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Pirms • Priekšā",
    "explanation": [
      "Haaptsaach: vor bedeit virun der Zäit oder vir am Plaz.",
      "Yes runa ir par laiku, before nozīmē pirms.",
      "Jo runa ir par vietu, vor nozīmē priekšā vai pie.",
      "Pulksteņa laikā vor nozīmē \"līdz\", piemēram, Spaass fir aacht."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Pirms ēšanas es mazgāju rokas."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Auto stāv mājas priekšā."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Et geet vu 5 bis 8."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Pēc ēšanas mēs ejam pastaigāties."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Pirms / priekšā",
        "example": "Vor dem Essen..."
      },
      {
        "word": "nach",
        "meaning": "Pēc / uz",
        "example": "Nach dem Essen..."
      },
      {
        "word": "neben",
        "meaning": "CAA -",
        "example": "Neben dem Haus."
      },
      {
        "word": "hinter",
        "meaning": "CAA -",
        "example": "Hinter dem Haus."
      }
    ],
    "tip": {
      "text": "Atceries: pirms laikā, priekšā vietā → vor."
    },
    "important": [
      "vor kann souwuel Zäit wéi och Plaz sinn.",
      "vor dem Essen = virun dem Iessen; vor dem Haus = virun dem Haus."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "vor",
          "Galvenā"
        ],
        "purple": [
          "pirms",
          "priekšā",
          "līdz"
        ],
        "green": [
          "laiku",
          "vietu"
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
              "pirms"
            ],
            "yellow": [
              "ēšanas"
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
              "priekšā"
            ],
            "yellow": [
              "mājas"
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
              "Et"
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
              "Pēc"
            ],
            "yellow": [
              "ēšanas"
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
              "pirms",
              "priekšā"
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
              "pēc",
              "uz"
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
              "CAA"
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
              "CAA"
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
            "pirms",
            "priekšā"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "vor"
          ],
          "purple": [
            "laiks",
            "vieta"
          ]
        },
        {
          "blue": [
            "vor dem Essen",
            "vor dem Haus"
          ],
          "purple": [
            "pirms ēšanas",
            "mājas priekšā"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 6

**Audit ID:** `LRB072-0006`
**Finding Stable ID:** `g2/a1/lb|a1-vor|a1.card.a1-vor.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0114`
**Lang:** lb
**Card:** `a1-vor`
**Field / path:** `a1.card.a1-vor.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pirms • priekšā
**DE reference (read-only):** vor
**CURRENT (captured scope):** Pirms • Priekšā
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-vor / a1.card.a1-vor.study.translation: exact Luxembourgish wording for German 'vor' (Latvian 'pirms • priekšā') is not established by the supplied evidence; production currently has 'Pirms • Priekšā' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "vor",
  "lv": "Pirms • Priekšā",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Pirms • Priekšā",
    "explanation": [
      "Haaptsaach: vor bedeit virun der Zäit oder vir am Plaz.",
      "Yes runa ir par laiku, before nozīmē pirms.",
      "Jo runa ir par vietu, vor nozīmē priekšā vai pie.",
      "Pulksteņa laikā vor nozīmē \"līdz\", piemēram, Spaass fir aacht."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Pirms ēšanas es mazgāju rokas."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Auto stāv mājas priekšā."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Et geet vu 5 bis 8."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Pēc ēšanas mēs ejam pastaigāties."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Pirms / priekšā",
        "example": "Vor dem Essen..."
      },
      {
        "word": "nach",
        "meaning": "Pēc / uz",
        "example": "Nach dem Essen..."
      },
      {
        "word": "neben",
        "meaning": "CAA -",
        "example": "Neben dem Haus."
      },
      {
        "word": "hinter",
        "meaning": "CAA -",
        "example": "Hinter dem Haus."
      }
    ],
    "tip": {
      "text": "Atceries: pirms laikā, priekšā vietā → vor."
    },
    "important": [
      "vor kann souwuel Zäit wéi och Plaz sinn.",
      "vor dem Essen = virun dem Iessen; vor dem Haus = virun dem Haus."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "vor",
          "Galvenā"
        ],
        "purple": [
          "pirms",
          "priekšā",
          "līdz"
        ],
        "green": [
          "laiku",
          "vietu"
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
              "pirms"
            ],
            "yellow": [
              "ēšanas"
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
              "priekšā"
            ],
            "yellow": [
              "mājas"
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
              "Et"
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
              "Pēc"
            ],
            "yellow": [
              "ēšanas"
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
              "pirms",
              "priekšā"
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
              "pēc",
              "uz"
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
              "CAA"
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
              "CAA"
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
            "pirms",
            "priekšā"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "vor"
          ],
          "purple": [
            "laiks",
            "vieta"
          ]
        },
        {
          "blue": [
            "vor dem Essen",
            "vor dem Haus"
          ],
          "purple": [
            "pirms ēšanas",
            "mājas priekšā"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 7

**Audit ID:** `LRB072-0007`
**Finding Stable ID:** `g2/a1/lb|a1-wenn|a1.card.a1-wenn.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0115`
**Lang:** lb
**Card:** `a1-wenn`
**Field / path:** `a1.card.a1-wenn.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** ja • kad
**DE reference (read-only):** wenn
**CURRENT (captured scope):** Yes • Kad
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-wenn / a1.card.a1-wenn.native: exact Luxembourgish wording for German 'wenn' (Latvian 'ja • kad') is not established by the supplied evidence; production currently has 'Yes • Kad' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wenn",
  "lv": "Yes • Kad",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "Yes • Kad",
    "explanation": [
      "Galvenā doma: wann nozīmē ja vai kad atkarībā no situācijas.",
      "Wann et ëm eng Bedéngung geet, iwwersat et op Lëtzebuergesh as wann.",
      "Wann et ëm repetéiert oder allgemeng Zäit geet, iwwersat et op Lëtzebuergesh as wann.",
      "Pēc wenn darbības vārds vācu teikumā parasti stāv bijās."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Jo, ir wëll, iegriezies."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Ja līst, es palieku mājās."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Kad esmu noguris, es dzeru kafiju."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Es nezinu, vai viếš nāks."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "CAA -",
        "example": "Wenn du Zeit hast..."
      },
      {
        "word": "ob",
        "meaning": "Vai netiešā jautājumā",
        "example": "Ich weiß nicht, ob..."
      },
      {
        "word": "wann",
        "meaning": "Kad jautājumā",
        "example": "Wann kommst du?"
      },
      {
        "word": "weil",
        "meaning": "Jo",
        "example": "Ich bleibe, weil ich krank bin."
      }
    ],
    "tip": {
      "text": "Atceries: nosacījums → wenn; jautājums “kad?” → wann."
    },
    "important": [
      "wenn an wann sinn net eenee an d'selb.",
      "Wann kommst du? ass eng Fro. Wenn du kommst... ass eng Bedéngung/Zäit."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wenn"
        ],
        "purple": [
          "ja",
          "kad",
          "nosacījumu"
        ],
        "green": [
          "bijās"
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
              "wëll"
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
              "ja"
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
              "kad"
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
              "vai"
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
              "CAA",
              "CAA"
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
              "vai"
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
              "kad"
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
              "jo"
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
            "nosacījums"
          ],
          "yellow": [
            "wann",
            "kad?"
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

## Finding 8

**Audit ID:** `LRB072-0008`
**Finding Stable ID:** `g2/a1/lb|a1-wenn|a1.card.a1-wenn.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0116`
**Lang:** lb
**Card:** `a1-wenn`
**Field / path:** `a1.card.a1-wenn.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** ja • kad
**DE reference (read-only):** wenn
**CURRENT (captured scope):** Yes • Kad
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-wenn / a1.card.a1-wenn.study.translation: exact Luxembourgish wording for German 'wenn' (Latvian 'ja • kad') is not established by the supplied evidence; production currently has 'Yes • Kad' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wenn",
  "lv": "Yes • Kad",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "Yes • Kad",
    "explanation": [
      "Galvenā doma: wann nozīmē ja vai kad atkarībā no situācijas.",
      "Wann et ëm eng Bedéngung geet, iwwersat et op Lëtzebuergesh as wann.",
      "Wann et ëm repetéiert oder allgemeng Zäit geet, iwwersat et op Lëtzebuergesh as wann.",
      "Pēc wenn darbības vārds vācu teikumā parasti stāv bijās."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Jo, ir wëll, iegriezies."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Ja līst, es palieku mājās."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Kad esmu noguris, es dzeru kafiju."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Es nezinu, vai viếš nāks."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "CAA -",
        "example": "Wenn du Zeit hast..."
      },
      {
        "word": "ob",
        "meaning": "Vai netiešā jautājumā",
        "example": "Ich weiß nicht, ob..."
      },
      {
        "word": "wann",
        "meaning": "Kad jautājumā",
        "example": "Wann kommst du?"
      },
      {
        "word": "weil",
        "meaning": "Jo",
        "example": "Ich bleibe, weil ich krank bin."
      }
    ],
    "tip": {
      "text": "Atceries: nosacījums → wenn; jautājums “kad?” → wann."
    },
    "important": [
      "wenn an wann sinn net eenee an d'selb.",
      "Wann kommst du? ass eng Fro. Wenn du kommst... ass eng Bedéngung/Zäit."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wenn"
        ],
        "purple": [
          "ja",
          "kad",
          "nosacījumu"
        ],
        "green": [
          "bijās"
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
              "wëll"
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
              "ja"
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
              "kad"
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
              "vai"
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
              "CAA",
              "CAA"
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
              "vai"
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
              "kad"
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
              "jo"
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
            "nosacījums"
          ],
          "yellow": [
            "wann",
            "kad?"
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

## Finding 9

**Audit ID:** `LRB072-0009`
**Finding Stable ID:** `g2/a1/lb|a1-wer|a1.card.a1-wer.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0117`
**Lang:** lb
**Card:** `a1-wer`
**Field / path:** `a1.card.a1-wer.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** kas • kurš
**DE reference (read-only):** wer
**CURRENT (captured scope):** Kas • Kurš
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-wer / a1.card.a1-wer.native: exact Luxembourgish wording for German 'wer' (Latvian 'kas • kurš') is not established by the supplied evidence; production currently has 'Kas • Kurš' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wer",
  "lv": "Kas • Kurš",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "Kas • Kurš",
    "explanation": [
      "Haaptsaach: wer ass de Frooswuert fir d'Persounidentitéit — auf Lëtzebuergesh ass dat wien oder ween.",
      "Wer jautā par cilvēkiem, ne par lietām vai notikumiem.",
      "Par lietām un notikumiem jautā ar war, no wen.",
      "Wien ass vācu valodā parasti ir teikuma priekšmets (nominatīvā)? = Kassentasche ir?",
      "Wann d'Fro ass wien genau vun méi Mënschene, benotz wer oft mat von (wer von euch = wien vun iech).",
      "Wer maina formu pēc locījuma: wen (akuzatīvs), wem (datīvs), wessen (ģenitīvs) — A1 līmenī visbiežāk sastopama ir tieši forma wer."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Wéi vill kascht et?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Wéi Dir sidd?"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Wat kënnt haut?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "¿Queréis ir tava skolotāja?"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Wien vun iech spréchet Däitsch?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "¿Conocéis a Teica?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Wien wëllt Kaffi?"
      }
    ],
    "tip": [
      "wer freet iwwer Persoune (wien/ween) — iwwer Saachen an Geschechten benotz was.",
      "Fir d'Fro iwwer Aswiel tëschent méi Mënschene, benotz wer von... (wien vun...)."
    ],
    "important": [
      "wer freet nëmmen iwwer Persoune, aldot net iwwer Saachen.",
      "Iwwer Saachen an Geschechten freet mat was, net wer.",
      "wer ännert d'Form no Kasus: wen, wem, wessen — mä d'Haaptform ass wer.",
      "Falsch: Wer ist passiert? → Richteg: Was ist passiert?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wer"
        ],
        "purple": [
          "kas",
          "kurš"
        ],
        "green": [
          "tas"
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
              "Kas"
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
              "Wéi"
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
              "Wat"
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
              "¿Queréis"
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
              "Kurš"
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
              "¿Conocéis"
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
              "Kurš"
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
            "kurš no"
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

## Finding 10

**Audit ID:** `LRB072-0010`
**Finding Stable ID:** `g2/a1/lb|a1-wer|a1.card.a1-wer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0118`
**Lang:** lb
**Card:** `a1-wer`
**Field / path:** `a1.card.a1-wer.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** kas • kurš
**DE reference (read-only):** wer
**CURRENT (captured scope):** Kas • Kurš
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-wer / a1.card.a1-wer.study.translation: exact Luxembourgish wording for German 'wer' (Latvian 'kas • kurš') is not established by the supplied evidence; production currently has 'Kas • Kurš' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wer",
  "lv": "Kas • Kurš",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "Kas • Kurš",
    "explanation": [
      "Haaptsaach: wer ass de Frooswuert fir d'Persounidentitéit — auf Lëtzebuergesh ass dat wien oder ween.",
      "Wer jautā par cilvēkiem, ne par lietām vai notikumiem.",
      "Par lietām un notikumiem jautā ar war, no wen.",
      "Wien ass vācu valodā parasti ir teikuma priekšmets (nominatīvā)? = Kassentasche ir?",
      "Wann d'Fro ass wien genau vun méi Mënschene, benotz wer oft mat von (wer von euch = wien vun iech).",
      "Wer maina formu pēc locījuma: wen (akuzatīvs), wem (datīvs), wessen (ģenitīvs) — A1 līmenī visbiežāk sastopama ir tieši forma wer."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Wéi vill kascht et?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Wéi Dir sidd?"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Wat kënnt haut?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "¿Queréis ir tava skolotāja?"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Wien vun iech spréchet Däitsch?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "¿Conocéis a Teica?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Wien wëllt Kaffi?"
      }
    ],
    "tip": [
      "wer freet iwwer Persoune (wien/ween) — iwwer Saachen an Geschechten benotz was.",
      "Fir d'Fro iwwer Aswiel tëschent méi Mënschene, benotz wer von... (wien vun...)."
    ],
    "important": [
      "wer freet nëmmen iwwer Persoune, aldot net iwwer Saachen.",
      "Iwwer Saachen an Geschechten freet mat was, net wer.",
      "wer ännert d'Form no Kasus: wen, wem, wessen — mä d'Haaptform ass wer.",
      "Falsch: Wer ist passiert? → Richteg: Was ist passiert?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wer"
        ],
        "purple": [
          "kas",
          "kurš"
        ],
        "green": [
          "tas"
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
              "Kas"
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
              "Wéi"
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
              "Wat"
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
              "¿Queréis"
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
              "Kurš"
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
              "¿Conocéis"
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
              "Kurš"
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
            "kurš no"
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

## Finding 11

**Audit ID:** `LRB072-0011`
**Finding Stable ID:** `g2/a1/lb|a1-wie|a1.card.a1-wie.study.explanation[3]|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0119`
**Lang:** lb
**Card:** `a1-wie`
**Field / path:** `a1.card.a1-wie.study.explanation[3]`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** wie viel(e) nozīmē cik daudz; wie alt nozīmē cik vecs; wie lange nozīmē cik ilgi.
**DE reference (read-only):** wie
**CURRENT (captured scope):** Wéi vill(e) nozīmē cik daudz • Wéi al nozīmē cik vecs • Wéi laang nozīmē cik ilgi.
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-wie / a1.card.a1-wie.study.explanation[3]: exact Luxembourgish wording for German 'wie' (Latvian 'wie viel(e) nozīmē cik daudz; wie alt nozīmē cik vecs; wie lange nozīmē cik ilg…') is not established by the supplied evidence; production currently has 'Wéi vill(e) nozīmē cik daudz • Wéi al nozīmē cik vecs • Wéi laang nozīmē cik ilgi.' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "wie",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-wie",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Haaptsaach: wie freet no der Aart oder Eegeschaft (wéi) an no der Quantitéit oder Unzuel (wéi vill), ofhängeg vum Kontext.",
      "Wie viena pati (Wie geht's?) jautā par veidu — latviski kā.",
      "Wéi + īpašības vārds (wéi vill, wéi al, wéi laang) jautā par apjomu, vecumu vai ilgumu — latviski cik.",
      "Wéi vill(e) nozīmē cik daudz • Wéi al nozīmē cik vecs • Wéi laang nozīmē cik ilgi.",
      "Salīdzinājumos wéi nozīmē tāpat kā (sou grouss wéi = tikpat liels kā)."
    ],
    "examples": [
      {
        "de": "Wie geht es dir?",
        "lv": "Wat ass et?"
      },
      {
        "de": "Wie heißt du?",
        "lv": "Kā tevi sauc?"
      },
      {
        "de": "Wie viel kostet das?",
        "lv": "Cik tas maxā?"
      },
      {
        "de": "Wie alt bist du?",
        "lv": "Wài al bass du"
      },
      {
        "de": "Wie lange dauert der Film?",
        "lv": "Cik ilgi ilgst Filma?"
      },
      {
        "de": "Er ist so groß wie sein Vater.",
        "lv": "Выш из tikpat garš, как видео tēvs."
      }
    ],
    "tip": [
      "wie selber = wéi (Aart); wie + Eegeschaftswuert (viel/alt/lange) = wéi vill (Quantitéit).",
      "An engem Verglach so ... wie = sou ... wéi."
    ],
    "important": [
      "wie viel(e) = wéi vill; wie alt = wéi al; wie lange = wéi laang.",
      "wie alleng (Wie...?) normalerweis = wéi, net wéi vill.",
      "Falsch: Wéi vill geet et dir? → Richteg: Wéi geet et dir? (Wie geht's?)"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "wie"
        ],
        "purple": [
          "kā",
          "cik"
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
              "Wat"
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
              "kā"
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
              "cik"
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
              "Wài"
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
              "cik"
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
              "Выш"
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
            "kā",
            "cik"
          ]
        },
        {
          "purple": [
            "tikpat",
            "kā"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "cik daudz",
            "cik vecs",
            "cik ilgi"
          ]
        },
        {
          "purple": [
            "kā"
          ]
        },
        {
          "red": [
            "Cik tev iet?"
          ],
          "blue": [
            "Kā tev iet?"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 12

**Audit ID:** `LRB072-0012`
**Finding Stable ID:** `g2/a1/lb|jetzt|a1.card.jetzt.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0120`
**Lang:** lb
**Card:** `jetzt`
**Field / path:** `a1.card.jetzt.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tagad • pašlaik
**DE reference (read-only):** jetzt
**CURRENT (captured scope):** Tagad • Pašlaik
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of jetzt / a1.card.jetzt.native: exact Luxembourgish wording for German 'jetzt' (Latvian 'tagad • pašlaik') is not established by the supplied evidence; production currently has 'Tagad • Pašlaik' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "jetzt",
  "lv": "Tagad • Pašlaik",
  "level": "A1"
}
```

---

## Finding 13

**Audit ID:** `LRB072-0013`
**Finding Stable ID:** `g2/a1/lb|links|a1.card.links.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0121`
**Lang:** lb
**Card:** `links`
**Field / path:** `a1.card.links.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pa kreisi • kreisais
**DE reference (read-only):** links
**CURRENT (captured scope):** Pa Kreisi • Kreisais
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of links / a1.card.links.native: exact Luxembourgish wording for German 'links' (Latvian 'pa kreisi • kreisais') is not established by the supplied evidence; production currently has 'Pa Kreisi • Kreisais' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "links",
  "lv": "Pa Kreisi • Kreisais",
  "level": "A1"
}
```

---

## Finding 14

**Audit ID:** `LRB072-0014`
**Finding Stable ID:** `g2/a1/lb|malen|a1.card.malen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0122`
**Lang:** lb
**Card:** `malen`
**Field / path:** `a1.card.malen.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** gleznot • krāsot
**DE reference (read-only):** malen
**CURRENT (captured scope):** Gleznot • Krāsot
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of malen / a1.card.malen.native: exact Luxembourgish wording for German 'malen' (Latvian 'gleznot • krāsot') is not established by the supplied evidence; production currently has 'Gleznot • Krāsot' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "malen",
  "lv": "Gleznot • Krāsot",
  "level": "A1"
}
```

---

## Finding 15

**Audit ID:** `LRB072-0015`
**Finding Stable ID:** `g2/a1/lb|rechts|a1.card.rechts.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0123`
**Lang:** lb
**Card:** `rechts`
**Field / path:** `a1.card.rechts.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pa labi • labais
**DE reference (read-only):** rechts
**CURRENT (captured scope):** Pa labi • Labais
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of rechts / a1.card.rechts.native: exact Luxembourgish wording for German 'rechts' (Latvian 'pa labi • labais') is not established by the supplied evidence; production currently has 'Pa labi • Labais' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "rechts",
  "lv": "Pa labi • Labais",
  "level": "A1"
}
```

---

