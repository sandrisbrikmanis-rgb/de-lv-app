# G2/A1 LRB LRB-071 — OWNER VIEW

**Batch:** LRB-071
**Rows:** 50/50
**Direction:** DESCENDING
**Reserved for:** LB_OWNER_PREP
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-16T17:07:25.187Z
**Source commit:** `cbd499e510c78d15ed1049971065bd4da3a2fc91`
**Branch:** `cursor/lrb-071-owner-authorization-aa66`
**Input SHA256:** `2b6bdede8011f1d79965ceba80aa89e0e1ffb01480e4f015e0a162d1e4c728c2`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-071-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB071-0001`
**Finding Stable ID:** `g2/a1/lb|a1-hoeren-study|a1.card.a1-hoeren-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0055`
**Lang:** lb
**Card:** `a1-hoeren-study`
**Field / path:** `a1.card.a1-hoeren-study.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** dzirdēt • klausīties
**DE reference (read-only):** hören
**CURRENT (captured scope):** Dzirdēt • Klausīties
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-hoeren-study / a1.card.a1-hoeren-study.study.translation: exact Luxembourgish wording for German 'hören' (Latvian 'dzirdēt • klausīties') is not established by the supplied evidence; production currently has 'Dzirdēt • Klausīties' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "hören",
  "lv": "Dzirdēt • Klausīties",
  "level": "A1",
  "study": {
    "id": "a1-hoeren-study",
    "layout": "standardStudy",
    "translation": "Dzirdēt • Klausīties",
    "explanation": [
      "Galvenā doma: Dzirdēt skaếu vai klausīties mūziku.",
      "Virun allem heescht dat héieren: Sensibiliséiere vum Klang.",
      "Bäinumm Bedeitung vun Bäinumm Raksturo.",
      "Héieren ass fir Kläng benotzt, Musek a wat héiert."
    ],
    "examples": [
      {
        "de": "Ich höre Musik.",
        "lv": "Ech héieren Musek."
      },
      {
        "de": "Die Kinder hören eine Geschichte.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich höre dich.",
        "lv": "Ech héieren dech"
      }
    ],
    "tip": [
      "Eng Schnonn héieren oder Musek lauschteren.",
      "Benotzt hören, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "hören = héieren/lauschteren eng Schnonn.",
      "Eng Schnonn héieren oder Musek lauschteren."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā"
        ],
        "purple": [
          "klausīties",
          "dzirdēt"
        ],
        "green": [
          "klausīties",
          "Dzirdēt"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "höre"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "hören",
              "hören"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "höre"
            ]
          },
          "lv": {
            "purple": [
              "Ech"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "dzirdēt"
          ]
        },
        {
          "purple": [
            "klausīties"
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

## Finding 2

**Audit ID:** `LRB071-0002`
**Finding Stable ID:** `g2/a1/lb|a1-huebsch|a1.card.a1-huebsch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0056`
**Lang:** lb
**Card:** `a1-huebsch`
**Field / path:** `a1.card.a1-huebsch.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** glīts • pievilcīgs pēc izskata
**DE reference (read-only):** hübsch
**CURRENT (captured scope):** schéin • attraktiv vum Ausgesee
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-huebsch / a1.card.a1-huebsch.study.comparison[0].meaning: exact Luxembourgish wording for German 'hübsch' (Latvian 'glīts • pievilcīgs pēc izskata') is not established by the supplied evidence; production currently has 'schéin • attraktiv vum Ausgesee' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "hübsch",
  "lv": "schéin",
  "level": "A1",
  "study": {
    "id": "a1-huebsch",
    "layout": "standardStudy",
    "translation": "schéin",
    "explanation": [
      "Haaptidee: hübsch bedeit schéin, attraktiv oder sympathisc vum Ausgesee.",
      "hübsch charakteriséiert dacks d'Ausgesee vun enger Persoun, enger Kleider, enger Stëbung oder engem Objet.",
      "De letteschen nett a ville Kontexter ass méiglech, mä et ass ze breet als Haaptiwwersetzung.",
      "Persounlechkarakter oder nett Verhalen gëtt am Däitsche dacks mat nett charakteriséiert."
    ],
    "examples": [
      {
        "de": "Sie trägt ein hübsches Kleid.",
        "lv": "Si hunn eng schéin Kleider."
      },
      {
        "de": "Das Zimmer ist hübsch.",
        "lv": "D'Stëbung ass schéin."
      },
      {
        "de": "Das ist ein hübsches Bild.",
        "lv": "Dat ass eng schéin Bild."
      }
    ],
    "comparison": [
      {
        "word": "hübsch",
        "meaning": "schéin • attraktiv vum Ausgesee",
        "example": "Das ist ein hübsches Kleid. – Dat ass eng schéin Kleider."
      },
      {
        "word": "schön",
        "meaning": "schéin • sympathisc",
        "example": "Der Garten ist schön. – De Gaart ass schéin."
      },
      {
        "word": "nett",
        "meaning": "nett • frëndlech",
        "example": "Sie ist sehr nett. – Si ass guer nett."
      }
    ],
    "tip": {
      "text": "Atceries: hübsch galvenokārt raksturo glītu izskatu, bet nett biežāk raksturo jauku cilvēku vai izturēšanos."
    },
    "important": [
      "hübsch ass net en universal Iwwersetzung fir de Wuert nett.",
      "Fir Persounlechen Charakter oder nett Verhalen ass normalerweis nett passend."
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

## Finding 3

**Audit ID:** `LRB071-0003`
**Finding Stable ID:** `g2/a1/lb|a1-ihr|a1.card.a1-ihr.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0059`
**Lang:** lb
**Card:** `a1-ihr`
**Field / path:** `a1.card.a1-ihr.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** jūs • viņai
**DE reference (read-only):** ihr
**CURRENT (captured scope):** Dir • Haare
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ihr / a1.card.a1-ihr.native: exact Luxembourgish wording for German 'ihr' (Latvian 'jūs • viņai') is not established by the supplied evidence; production currently has 'Dir • Haare' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ihr",
  "lv": "Dir • Haare",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "Dir • Haare",
    "explanation": [
      "Galvenā doma: Ihr ir divi dažādi vietniekvārdi ar vienādu rakstību — uzruna vairākiem cilvēkiem (jūs) un vietniekvārda sie datīva forma (việai/việas).",
      "Mit Kleinbuchstaben Ihr als Adresse übersetzt zu mehr Menschen als Du (Kommt ihr mit? = Kommst du? = Kommst du?",
      "Hir kā piederības vietniekvārds nozīmē việas (hiert Buch = việas grāmata).",
      "17 2015 6:59 17 2015 6:59 17 2015 7:06... ich geb Dir ein Buch • )",
      "De Verb Form (Kom, Hatt) weist datt et ëm Iech geet - verschidde Leit adresséieren.",
      "Pieklājīgā uzruna vienmēr ir Sie ar lielo burtu, nevis her."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Wai ass et net?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Dat ass dat bescht wat mir kënne maachen."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "¿Queréis queréis?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "D'Viraussetzung ass, dass et sech lount."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "Hutt Dir Zäit"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      }
    ],
    "tip": [
      "ihr mat Verbs Form (kommt, habt) = dir; ihr virun engem Wuert als Dativ oder Eegenschaaft = hir/hir.",
      "Controle: Habt ihr...? / Kommt ihr...? = dir; Ich gebe ihr... / ihr Buch = hir/hir."
    ],
    "important": [
      "ihr = dir (Uzreed fir mehrerer) ODER hir (Dativ) ODER hir (Eegenschaaft) — no Kontext.",
      "D'Héiflichkeet Uzreed ass ëmmer Sie mat lielem Buschtaf, net ihr.",
      "Falsch: Ihr (Héiflichkeet) → Richteg: Sie."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ihr"
        ],
        "purple": [
          "jūs",
          "việas",
          "việas"
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
              "Wai"
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
              "Dat"
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
              "¿Queréis"
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
              "D'Viraussetzung"
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
              "Hutt"
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
              "Dat"
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
            "jūs",
            "viņai",
            "viņas"
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

## Finding 4

**Audit ID:** `LRB071-0004`
**Finding Stable ID:** `g2/a1/lb|a1-ihr|a1.card.a1-ihr.study.explanation[3]|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0060`
**Lang:** lb
**Card:** `a1-ihr`
**Field / path:** `a1.card.a1-ihr.study.explanation[3]`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** ihr kā datīva forma (no sie) nozīmē viņai (Ich gebe ihr das Buch. = Es dodu viņai grāmatu.).
**DE reference (read-only):** ihr
**CURRENT (captured scope):** 17 2015 6:59 17 2015 6:59 17 2015 7:06... ich geb Dir ein Buch • )
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ihr / a1.card.a1-ihr.study.explanation[3]: exact Luxembourgish wording for German 'ihr' (Latvian 'ihr kā datīva forma (no sie) nozīmē viņai (Ich gebe ihr das Buch. = Es dodu viņ…') is not established by the supplied evidence; production currently has '17 2015 6:59 17 2015 6:59 17 2015 7:06... ich geb Dir ein Buch • )' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ihr",
  "lv": "Dir • Haare",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "Dir • Haare",
    "explanation": [
      "Galvenā doma: Ihr ir divi dažādi vietniekvārdi ar vienādu rakstību — uzruna vairākiem cilvēkiem (jūs) un vietniekvārda sie datīva forma (việai/việas).",
      "Mit Kleinbuchstaben Ihr als Adresse übersetzt zu mehr Menschen als Du (Kommt ihr mit? = Kommst du? = Kommst du?",
      "Hir kā piederības vietniekvārds nozīmē việas (hiert Buch = việas grāmata).",
      "17 2015 6:59 17 2015 6:59 17 2015 7:06... ich geb Dir ein Buch • )",
      "De Verb Form (Kom, Hatt) weist datt et ëm Iech geet - verschidde Leit adresséieren.",
      "Pieklājīgā uzruna vienmēr ir Sie ar lielo burtu, nevis her."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Wai ass et net?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Dat ass dat bescht wat mir kënne maachen."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "¿Queréis queréis?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "D'Viraussetzung ass, dass et sech lount."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "Hutt Dir Zäit"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      }
    ],
    "tip": [
      "ihr mat Verbs Form (kommt, habt) = dir; ihr virun engem Wuert als Dativ oder Eegenschaaft = hir/hir.",
      "Controle: Habt ihr...? / Kommt ihr...? = dir; Ich gebe ihr... / ihr Buch = hir/hir."
    ],
    "important": [
      "ihr = dir (Uzreed fir mehrerer) ODER hir (Dativ) ODER hir (Eegenschaaft) — no Kontext.",
      "D'Héiflichkeet Uzreed ass ëmmer Sie mat lielem Buschtaf, net ihr.",
      "Falsch: Ihr (Héiflichkeet) → Richteg: Sie."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ihr"
        ],
        "purple": [
          "jūs",
          "việas",
          "việas"
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
              "Wai"
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
              "Dat"
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
              "¿Queréis"
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
              "D'Viraussetzung"
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
              "Hutt"
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
              "Dat"
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
            "jūs",
            "viņai",
            "viņas"
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

## Finding 5

**Audit ID:** `LRB071-0005`
**Finding Stable ID:** `g2/a1/lb|a1-ihr|a1.card.a1-ihr.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0061`
**Lang:** lb
**Card:** `a1-ihr`
**Field / path:** `a1.card.a1-ihr.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** jūs • viņai
**DE reference (read-only):** ihr
**CURRENT (captured scope):** Dir • Haare
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ihr / a1.card.a1-ihr.study.translation: exact Luxembourgish wording for German 'ihr' (Latvian 'jūs • viņai') is not established by the supplied evidence; production currently has 'Dir • Haare' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ihr",
  "lv": "Dir • Haare",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "Dir • Haare",
    "explanation": [
      "Galvenā doma: Ihr ir divi dažādi vietniekvārdi ar vienādu rakstību — uzruna vairākiem cilvēkiem (jūs) un vietniekvārda sie datīva forma (việai/việas).",
      "Mit Kleinbuchstaben Ihr als Adresse übersetzt zu mehr Menschen als Du (Kommt ihr mit? = Kommst du? = Kommst du?",
      "Hir kā piederības vietniekvārds nozīmē việas (hiert Buch = việas grāmata).",
      "17 2015 6:59 17 2015 6:59 17 2015 7:06... ich geb Dir ein Buch • )",
      "De Verb Form (Kom, Hatt) weist datt et ëm Iech geet - verschidde Leit adresséieren.",
      "Pieklājīgā uzruna vienmēr ir Sie ar lielo burtu, nevis her."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Wai ass et net?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Dat ass dat bescht wat mir kënne maachen."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "¿Queréis queréis?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "D'Viraussetzung ass, dass et sech lount."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "Hutt Dir Zäit"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      }
    ],
    "tip": [
      "ihr mat Verbs Form (kommt, habt) = dir; ihr virun engem Wuert als Dativ oder Eegenschaaft = hir/hir.",
      "Controle: Habt ihr...? / Kommt ihr...? = dir; Ich gebe ihr... / ihr Buch = hir/hir."
    ],
    "important": [
      "ihr = dir (Uzreed fir mehrerer) ODER hir (Dativ) ODER hir (Eegenschaaft) — no Kontext.",
      "D'Héiflichkeet Uzreed ass ëmmer Sie mat lielem Buschtaf, net ihr.",
      "Falsch: Ihr (Héiflichkeet) → Richteg: Sie."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ihr"
        ],
        "purple": [
          "jūs",
          "việas",
          "việas"
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
              "Wai"
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
              "Dat"
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
              "¿Queréis"
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
              "D'Viraussetzung"
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
              "Hutt"
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
              "Dat"
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
            "jūs",
            "viņai",
            "viņas"
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

## Finding 6

**Audit ID:** `LRB071-0006`
**Finding Stable ID:** `g2/a1/lb|a1-im|a1.card.a1-im.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0062`
**Lang:** lb
**Card:** `a1-im`
**Field / path:** `a1.card.a1-im.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** iekšā (-ā) • kur?
**DE reference (read-only):** im
**CURRENT (captured scope):** DENTRO • ¿Dónde queda DENTRO?
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-im / a1.card.a1-im.native: exact Luxembourgish wording for German 'im' (Latvian 'iekšā (-ā) • kur?') is not established by the supplied evidence; production currently has 'DENTRO • ¿Dónde queda DENTRO?' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "im",
  "lv": "DENTRO • ¿Dónde queda DENTRO?",
  "level": "A1",
  "study": {
    "id": "a1-im",
    "layout": "standardStudy",
    "translation": "DENTRO • ¿Dónde queda DENTRO?",
    "explanation": [
      "Et ass eng Ofkierzung vun der Viraussetzung an den Artikel DEM.",
      "Pilnā forma: an der (kam?).",
      "Benotzt mat männlech an Neutrum Substantiver, wann et op d'Fro wou? ulänkt — Uewerbleibplatz.",
      "Ar laiku un gadalaikiem: am Januar, am Summer, am Wanter.",
      "Praksē gandrīz vienmēr lieto im, nevis pilno an dem."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Esmu parkā."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Mês dzīvojam centrā."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "D'Kand spillt am Gaart."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "Janvārī es braucu uz Vīni."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "Mir sinn de Kino."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Mēs tiekamies restorānā."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "DENTRO DA WO??",
        "example": "im Park – DENTRO DEL PARK"
      },
      {
        "word": "ins",
        "meaning": "De l'intérieur, où?",
        "example": "ins Kino – USZ Kino"
      },
      {
        "word": "in",
        "meaning": "Iekšā / uz (bez artikula)",
        "example": "in Berlin – a Berlinn"
      },
      {
        "word": "am",
        "meaning": "Péiteng, kur? (Kam?)",
        "example": "am Fenster – bei der Fënster"
      },
      {
        "word": "auf",
        "meaning": "CAA -",
        "example": "auf dem Tisch – Op Den Tafel"
      }
    ],
    "tip": [
      "Erënnert dech: in + dem → im (wem?, wou?).",
      "Wohin? → ins; wou? → im — verwécksel net dës Zwéi!"
    ],
    "important": [
      "im = in dem, nëmmen mat männlech oder Neutrum Substantiv am Dativ.",
      "Beäntwert d'Fro wou?, net wohin? — Uewerbleibplatz, net Bewegung.",
      "Mat Mäint an Jourtseiten: im März, im Herbst.",
      "Fir Femininum: in der Schule, net im Schule."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "im",
          "ass"
        ],
        "purple": [
          "kur?"
        ],
        "green": [
          "kam?",
          "atrašanās vieta"
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
              "parkā"
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
              "centrā"
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
              "Dat"
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
              "Dat"
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
              "D'Kand"
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
              "janvārī"
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
              "kino"
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
              "restorānā"
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
              "DENTRO",
              "DENTRO"
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
              "l'intérieur",
              "l'intérieur"
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
              "iekšā"
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
              "Péiteng"
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
              "CAA"
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
            "kur?"
          ]
        },
        {
          "red": [
            "ins",
            "kurp?"
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
            "kam?"
          ]
        },
        {
          "purple": [
            "kur?"
          ],
          "green": [
            "atrašanās vieta"
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

## Finding 7

**Audit ID:** `LRB071-0007`
**Finding Stable ID:** `g2/a1/lb|a1-im|a1.card.a1-im.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0063`
**Lang:** lb
**Card:** `a1-im`
**Field / path:** `a1.card.a1-im.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** iekšā (-ā) • kur?
**DE reference (read-only):** im
**CURRENT (captured scope):** DENTRO • ¿Dónde queda DENTRO?
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-im / a1.card.a1-im.study.translation: exact Luxembourgish wording for German 'im' (Latvian 'iekšā (-ā) • kur?') is not established by the supplied evidence; production currently has 'DENTRO • ¿Dónde queda DENTRO?' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "im",
  "lv": "DENTRO • ¿Dónde queda DENTRO?",
  "level": "A1",
  "study": {
    "id": "a1-im",
    "layout": "standardStudy",
    "translation": "DENTRO • ¿Dónde queda DENTRO?",
    "explanation": [
      "Et ass eng Ofkierzung vun der Viraussetzung an den Artikel DEM.",
      "Pilnā forma: an der (kam?).",
      "Benotzt mat männlech an Neutrum Substantiver, wann et op d'Fro wou? ulänkt — Uewerbleibplatz.",
      "Ar laiku un gadalaikiem: am Januar, am Summer, am Wanter.",
      "Praksē gandrīz vienmēr lieto im, nevis pilno an dem."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Esmu parkā."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Mês dzīvojam centrā."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "D'Kand spillt am Gaart."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "Janvārī es braucu uz Vīni."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "Mir sinn de Kino."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Mēs tiekamies restorānā."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "DENTRO DA WO??",
        "example": "im Park – DENTRO DEL PARK"
      },
      {
        "word": "ins",
        "meaning": "De l'intérieur, où?",
        "example": "ins Kino – USZ Kino"
      },
      {
        "word": "in",
        "meaning": "Iekšā / uz (bez artikula)",
        "example": "in Berlin – a Berlinn"
      },
      {
        "word": "am",
        "meaning": "Péiteng, kur? (Kam?)",
        "example": "am Fenster – bei der Fënster"
      },
      {
        "word": "auf",
        "meaning": "CAA -",
        "example": "auf dem Tisch – Op Den Tafel"
      }
    ],
    "tip": [
      "Erënnert dech: in + dem → im (wem?, wou?).",
      "Wohin? → ins; wou? → im — verwécksel net dës Zwéi!"
    ],
    "important": [
      "im = in dem, nëmmen mat männlech oder Neutrum Substantiv am Dativ.",
      "Beäntwert d'Fro wou?, net wohin? — Uewerbleibplatz, net Bewegung.",
      "Mat Mäint an Jourtseiten: im März, im Herbst.",
      "Fir Femininum: in der Schule, net im Schule."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "im",
          "ass"
        ],
        "purple": [
          "kur?"
        ],
        "green": [
          "kam?",
          "atrašanās vieta"
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
              "parkā"
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
              "centrā"
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
              "Dat"
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
              "Dat"
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
              "D'Kand"
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
              "janvārī"
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
              "kino"
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
              "restorānā"
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
              "DENTRO",
              "DENTRO"
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
              "l'intérieur",
              "l'intérieur"
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
              "iekšā"
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
              "Péiteng"
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
              "CAA"
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
            "kur?"
          ]
        },
        {
          "red": [
            "ins",
            "kurp?"
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
            "kam?"
          ]
        },
        {
          "purple": [
            "kur?"
          ],
          "green": [
            "atrašanās vieta"
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

## Finding 8

**Audit ID:** `LRB071-0008`
**Finding Stable ID:** `g2/a1/lb|a1-in|a1.card.a1-in.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0064`
**Lang:** lb
**Card:** `a1-in`
**Field / path:** `a1.card.a1-in.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** iekšā • uz
**DE reference (read-only):** in
**CURRENT (captured scope):** Iekšā • Uz
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-in / a1.card.a1-in.native: exact Luxembourgish wording for German 'in' (Latvian 'iekšā • uz') is not established by the supplied evidence; production currently has 'Iekšā • Uz' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "in",
  "lv": "Iekšā • Uz",
  "level": "A1",
  "study": {
    "id": "a1-in",
    "layout": "standardStudy",
    "translation": "Iekšā • Uz",
    "explanation": [
      "Galvenā doma: am parasti nozīmē iekšā vai uz kādu vietu, yes runa ir par telpu, valsti, pilsētu vai ēku.",
      "Mat Standuert, an ass oft iwwersat wéi an oder an: zu Berlin = zu Berlin.",
      "Ar kustību am nozīmē uz iekšieni: zum Kino = uz kino.",
      "A Letzebuerg Iwwersetzung ännert sech no dem Kontext."
    ],
    "examples": [
      {
        "de": "Ich bin in Berlin.",
        "lv": "Esmu Berlīnē."
      },
      {
        "de": "Ich gehe in die Schule.",
        "lv": "Ech ginn an d'Schoul"
      },
      {
        "de": "Das Buch ist in der Tasche.",
        "lv": "Grāmata ir somā."
      },
      {
        "de": "Wir gehen ins Kino.",
        "lv": "Mir ginn an de Kino."
      }
    ],
    "tip": {
      "text": "Atceries: iekšā/telpā → in."
    },
    "important": [
      "in ass net ëmmer burtwörtlech \"uewen\"; a Letzebuerg sot ee dacks a Berlinn, a Schoul, an d'Kino.",
      "Wann et ëm eng Uewerfläch geet, brauchst du normalerweis auf, net in."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā"
        ],
        "purple": [
          "iekšā",
          "uz"
        ],
        "green": [
          "telpu",
          "valsti",
          "pilsētu",
          "ēku"
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
              "Berlīnē"
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
              "Ech"
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
              "somā"
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
              "Mir"
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
            "iekšā",
            "telpā"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "in"
          ],
          "purple": [
            "Berlīnē",
            "skolā",
            "uz kino"
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
            "virsmu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 9

**Audit ID:** `LRB071-0009`
**Finding Stable ID:** `g2/a1/lb|a1-in|a1.card.a1-in.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0065`
**Lang:** lb
**Card:** `a1-in`
**Field / path:** `a1.card.a1-in.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** iekšā • uz
**DE reference (read-only):** in
**CURRENT (captured scope):** Iekšā • Uz
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-in / a1.card.a1-in.study.translation: exact Luxembourgish wording for German 'in' (Latvian 'iekšā • uz') is not established by the supplied evidence; production currently has 'Iekšā • Uz' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "in",
  "lv": "Iekšā • Uz",
  "level": "A1",
  "study": {
    "id": "a1-in",
    "layout": "standardStudy",
    "translation": "Iekšā • Uz",
    "explanation": [
      "Galvenā doma: am parasti nozīmē iekšā vai uz kādu vietu, yes runa ir par telpu, valsti, pilsētu vai ēku.",
      "Mat Standuert, an ass oft iwwersat wéi an oder an: zu Berlin = zu Berlin.",
      "Ar kustību am nozīmē uz iekšieni: zum Kino = uz kino.",
      "A Letzebuerg Iwwersetzung ännert sech no dem Kontext."
    ],
    "examples": [
      {
        "de": "Ich bin in Berlin.",
        "lv": "Esmu Berlīnē."
      },
      {
        "de": "Ich gehe in die Schule.",
        "lv": "Ech ginn an d'Schoul"
      },
      {
        "de": "Das Buch ist in der Tasche.",
        "lv": "Grāmata ir somā."
      },
      {
        "de": "Wir gehen ins Kino.",
        "lv": "Mir ginn an de Kino."
      }
    ],
    "tip": {
      "text": "Atceries: iekšā/telpā → in."
    },
    "important": [
      "in ass net ëmmer burtwörtlech \"uewen\"; a Letzebuerg sot ee dacks a Berlinn, a Schoul, an d'Kino.",
      "Wann et ëm eng Uewerfläch geet, brauchst du normalerweis auf, net in."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā"
        ],
        "purple": [
          "iekšā",
          "uz"
        ],
        "green": [
          "telpu",
          "valsti",
          "pilsētu",
          "ēku"
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
              "Berlīnē"
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
              "Ech"
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
              "somā"
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
              "Mir"
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
            "iekšā",
            "telpā"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "in"
          ],
          "purple": [
            "Berlīnē",
            "skolā",
            "uz kino"
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
            "virsmu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 10

**Audit ID:** `LRB071-0010`
**Finding Stable ID:** `g2/a1/lb|a1-ins|a1.card.a1-ins.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0066`
**Lang:** lb
**Card:** `a1-ins`
**Field / path:** `a1.card.a1-ins.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** iekšā • uz iekšu • kurp?
**DE reference (read-only):** ins
**CURRENT (captured scope):** An • An • An • Wo?
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ins / a1.card.a1-ins.native: exact Luxembourgish wording for German 'ins' (Latvian 'iekšā • uz iekšu • kurp?') is not established by the supplied evidence; production currently has 'An • An • An • Wo?' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ins",
  "lv": "An • An • An • Wo?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "An • An • An • Wo?",
    "explanation": [
      "Ins ass eng Ofkierzung vun der Viraussetzung an an dem Artikel DAS.",
      "Pilnā forma: an den (kurp?).",
      "Lieto ar nekatras dzimtes lietvārdiem, kad atbild uz jautājumu kurp? — Coastība uz iekšu.",
      "Bieži ar darbības vārdiem: walk, drive, come, lay, stick.",
      "Praksē gandrīz vienmēr lieto ins, nevis pilno in DAS."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Es eju uz kino."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Mēs braucam uz ārzemēm."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Nāc mājā!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Hie setzt d'Suen a säi Portmonni."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Mēs ejam uz muzeju."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Ech hunn et gär."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Lūdzu, brauc uz centru."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "De l'intérieur, où?",
        "example": "ins Kino – USZ Kino"
      },
      {
        "word": "im",
        "meaning": "DENTRO DA WO??",
        "example": "im Kino – Kino"
      },
      {
        "word": "in",
        "meaning": "Iekšā / uz (ar patstāvīgu artikulu)",
        "example": "in die Stadt – Uz pilsētu"
      },
      {
        "word": "aufs",
        "meaning": "An d'Uewerfläch (akk.)",
        "example": "aufs Dach – op d'Dach"
      },
      {
        "word": "zum",
        "meaning": "Uz /Péiteng (Kam?)",
        "example": "zum Arzt – Pie äersta"
      }
    ],
    "tip": [
      "Erënnert dech: in + das → ins (wohin?, wohin?).",
      "Wohin? → ins; wou? → im — dëst ass de Haaptunterscheed!"
    ],
    "important": [
      "ins = in das, nëmmen mat Neutrum Substantiv am Akkusativ.",
      "Beäntwert d'Fro wohin?, net wou? — Bewegung, net Uewerbleibplatz.",
      "Fir Maskulinum: in den Wald; Femininum: in die Schule.",
      "Verwécksel net: ins Kino gehen (op Kino) vs. im Kino sein (am Kino)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ins",
          "in das"
        ],
        "purple": [
          "iekšu",
          "uz iekšu",
          "kurp?"
        ],
        "green": [
          "kurp?",
          "Ins"
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
              "uz kino"
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
              "Dat"
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
              "uz ārzemēm"
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
              "mājā"
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
              "Hie",
              "Hie",
              "Hie"
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
              "uz muzeju"
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
              "Ech"
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
              "uz centru"
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
              "l'intérieur",
              "l'intérieur"
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
              "DENTRO",
              "DENTRO"
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
              "iekšā",
              "uz",
              "patstāvīgu artikulu"
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
              "d'Uewerfläch"
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
              "uz",
              "/Péiteng"
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
            "kurp?"
          ]
        },
        {
          "red": [
            "im",
            "kur?"
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

## Finding 11

**Audit ID:** `LRB071-0011`
**Finding Stable ID:** `g2/a1/lb|a1-ins|a1.card.a1-ins.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0067`
**Lang:** lb
**Card:** `a1-ins`
**Field / path:** `a1.card.a1-ins.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** iekšā • uz iekšu • kurp?
**DE reference (read-only):** ins
**CURRENT (captured scope):** An • An • An • Wo?
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ins / a1.card.a1-ins.study.translation: exact Luxembourgish wording for German 'ins' (Latvian 'iekšā • uz iekšu • kurp?') is not established by the supplied evidence; production currently has 'An • An • An • Wo?' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ins",
  "lv": "An • An • An • Wo?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "An • An • An • Wo?",
    "explanation": [
      "Ins ass eng Ofkierzung vun der Viraussetzung an an dem Artikel DAS.",
      "Pilnā forma: an den (kurp?).",
      "Lieto ar nekatras dzimtes lietvārdiem, kad atbild uz jautājumu kurp? — Coastība uz iekšu.",
      "Bieži ar darbības vārdiem: walk, drive, come, lay, stick.",
      "Praksē gandrīz vienmēr lieto ins, nevis pilno in DAS."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Es eju uz kino."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Mēs braucam uz ārzemēm."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Nāc mājā!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Hie setzt d'Suen a säi Portmonni."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Mēs ejam uz muzeju."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Ech hunn et gär."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Lūdzu, brauc uz centru."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "De l'intérieur, où?",
        "example": "ins Kino – USZ Kino"
      },
      {
        "word": "im",
        "meaning": "DENTRO DA WO??",
        "example": "im Kino – Kino"
      },
      {
        "word": "in",
        "meaning": "Iekšā / uz (ar patstāvīgu artikulu)",
        "example": "in die Stadt – Uz pilsētu"
      },
      {
        "word": "aufs",
        "meaning": "An d'Uewerfläch (akk.)",
        "example": "aufs Dach – op d'Dach"
      },
      {
        "word": "zum",
        "meaning": "Uz /Péiteng (Kam?)",
        "example": "zum Arzt – Pie äersta"
      }
    ],
    "tip": [
      "Erënnert dech: in + das → ins (wohin?, wohin?).",
      "Wohin? → ins; wou? → im — dëst ass de Haaptunterscheed!"
    ],
    "important": [
      "ins = in das, nëmmen mat Neutrum Substantiv am Akkusativ.",
      "Beäntwert d'Fro wohin?, net wou? — Bewegung, net Uewerbleibplatz.",
      "Fir Maskulinum: in den Wald; Femininum: in die Schule.",
      "Verwécksel net: ins Kino gehen (op Kino) vs. im Kino sein (am Kino)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "ins",
          "in das"
        ],
        "purple": [
          "iekšu",
          "uz iekšu",
          "kurp?"
        ],
        "green": [
          "kurp?",
          "Ins"
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
              "uz kino"
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
              "Dat"
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
              "uz ārzemēm"
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
              "mājā"
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
              "Hie",
              "Hie",
              "Hie"
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
              "uz muzeju"
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
              "Ech"
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
              "uz centru"
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
              "l'intérieur",
              "l'intérieur"
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
              "DENTRO",
              "DENTRO"
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
              "iekšā",
              "uz",
              "patstāvīgu artikulu"
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
              "d'Uewerfläch"
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
              "uz",
              "/Péiteng"
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
            "kurp?"
          ]
        },
        {
          "red": [
            "im",
            "kur?"
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

## Finding 12

**Audit ID:** `LRB071-0012`
**Finding Stable ID:** `g2/a1/lb|a1-kein|a1.card.a1-kein.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0068`
**Lang:** lb
**Card:** `a1-kein`
**Field / path:** `a1.card.a1-kein.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** neviens • nekāds
**DE reference (read-only):** kein
**CURRENT (captured scope):** Neviens • Nekāds
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-kein / a1.card.a1-kein.native: exact Luxembourgish wording for German 'kein' (Latvian 'neviens • nekāds') is not established by the supplied evidence; production currently has 'Neviens • Nekāds' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "kein",
  "lv": "Neviens • Nekāds",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "Neviens • Nekāds",
    "explanation": [
      "Galvenā doma: keine ir nolieguma artikuls, kas noliedz lietvārdu — latviski atkarībā no konteksta neviens vai nekāds.",
      "Kein locījas tāpat kā ein (kein/keine/keinen...) un stāv latevārda priekšā.",
      "Ar skaitāmiem lietvārdiem (cilvēkiem) no bieži tulko kā neviens (no man = neviens cilvēks).",
      "Ar nesaitāmiem vai abstraiem lietvārdiem no bieži tulko kā nekāds/nav vispār (no money = nekādas naudas/nav naudas).",
      "No noliedz veselu lietvārdu, ne tikai darbības vārdu (salīdzini ar nicht)."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "Man naudas ass naudas."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Piena vairs nav nemaz."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Neviens cilvēks tur nebija."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "MAN NAV VILA."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "Et ass kee Problem."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "Mums nav bērnu. - Mums nav bērnu."
      }
    ],
    "tip": [
      "kein noliedt e Substantiv (kein + Substantiv), nicht noliedt e Verb oder Saz.",
      "kein Dekliniéiert wéi ein: kein/keine/keinen/keiner."
    ],
    "important": [
      "kein + Substantiv = 'kee/keng X', net 'net een X'.",
      "Falsch: Ich habe nicht ein Geld. → Richteg: Ich habe kein Geld."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kein"
        ],
        "purple": [
          "neviens",
          "nekāds"
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
              "Man"
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
              "nav nemaz"
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
              "neviens"
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
              "nav"
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
              "Et"
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
              "nav"
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

## Finding 13

**Audit ID:** `LRB071-0013`
**Finding Stable ID:** `g2/a1/lb|a1-kein|a1.card.a1-kein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0069`
**Lang:** lb
**Card:** `a1-kein`
**Field / path:** `a1.card.a1-kein.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** neviens • nekāds
**DE reference (read-only):** kein
**CURRENT (captured scope):** Neviens • Nekāds
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-kein / a1.card.a1-kein.study.translation: exact Luxembourgish wording for German 'kein' (Latvian 'neviens • nekāds') is not established by the supplied evidence; production currently has 'Neviens • Nekāds' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "kein",
  "lv": "Neviens • Nekāds",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "Neviens • Nekāds",
    "explanation": [
      "Galvenā doma: keine ir nolieguma artikuls, kas noliedz lietvārdu — latviski atkarībā no konteksta neviens vai nekāds.",
      "Kein locījas tāpat kā ein (kein/keine/keinen...) un stāv latevārda priekšā.",
      "Ar skaitāmiem lietvārdiem (cilvēkiem) no bieži tulko kā neviens (no man = neviens cilvēks).",
      "Ar nesaitāmiem vai abstraiem lietvārdiem no bieži tulko kā nekāds/nav vispār (no money = nekādas naudas/nav naudas).",
      "No noliedz veselu lietvārdu, ne tikai darbības vārdu (salīdzini ar nicht)."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "Man naudas ass naudas."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Piena vairs nav nemaz."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Neviens cilvēks tur nebija."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "MAN NAV VILA."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "Et ass kee Problem."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "Mums nav bērnu. - Mums nav bērnu."
      }
    ],
    "tip": [
      "kein noliedt e Substantiv (kein + Substantiv), nicht noliedt e Verb oder Saz.",
      "kein Dekliniéiert wéi ein: kein/keine/keinen/keiner."
    ],
    "important": [
      "kein + Substantiv = 'kee/keng X', net 'net een X'.",
      "Falsch: Ich habe nicht ein Geld. → Richteg: Ich habe kein Geld."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kein"
        ],
        "purple": [
          "neviens",
          "nekāds"
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
              "Man"
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
              "nav nemaz"
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
              "neviens"
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
              "nav"
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
              "Et"
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
              "nav"
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

## Finding 14

**Audit ID:** `LRB071-0014`
**Finding Stable ID:** `g2/a1/lb|a1-kennen-study|a1.card.a1-kennen-study.study.examples[4].native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0070`
**Lang:** lb
**Card:** `a1-kennen-study`
**Field / path:** `a1.card.a1-kennen-study.study.examples[4].native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pazīt
**DE reference (read-only):** kennen
**CURRENT (captured scope):** 
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual inspection of a1-kennen-study / a1.card.a1-kennen-study.study.examples[4].native: that exact field is absent from the mapped card; the available snapshot begins ''. For German 'kennen' / Latvian 'pazīt', OWNER must identify an existing destination or explicitly authorize a new field before wording can be approved.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "kennen",
  "lv": "CAA -",
  "level": "A1",
  "id": "a1-kennen",
  "study": {
    "id": "a1-kennen-study",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Haaptidee: Eng Persoun, Plaz oder Saach vun Erfarung kennen.",
      "Wëssen galvenokārt nozīmē: personīga pazīšana.",
      "Dacks charakteriséiert: Mënschen, Plazen.",
      "Kennen lieto, ja pazīsti cilvēku, vietu vai lietu no personīgās pieredzes."
    ],
    "examples": [
      {
        "de": "Ich kenne ihn.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Kennen Sie diese Frau?",
        "lv": "Vai jūs pazīstat šo sievieti?"
      },
      {
        "de": "Wo habt ihr euch kennengelernt?",
        "lv": "¿Queréis queréis?"
      },
      {
        "de": "Ich kenne ihn.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "kennen",
        "lv": "Pazīt • Läschen"
      }
    ],
    "comparison": [
      {
        "word": "kennen",
        "meaning": "Pazīt (cilvēku, vietu, lietu)",
        "example": "Ich kenne ihn. – Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "word": "wissen",
        "meaning": "Zināt (faktu, informāciju)",
        "example": "Ich weiß seinen Namen. – Et ass ganz flott ze liesen."
      }
    ],
    "tip": [
      "kennen = kennen",
      "Benotzt kennen, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "kennen = eng Persoun/Plaz kennen.",
      "kennen = kennen.",
      "Eng Persoun, Plaz oder Saach vun Erfarung kennen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kennen",
          "kennen"
        ],
        "purple": [
          "pazīt"
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
              "Dat"
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
          "lv": {
            "purple": [
              "Dat"
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
              "pazīt"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "pazīt"
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

## Finding 15

**Audit ID:** `LRB071-0015`
**Finding Stable ID:** `g2/a1/lb|a1-koennen|a1.card.a1-koennen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0071`
**Lang:** lb
**Card:** `a1-koennen`
**Field / path:** `a1.card.a1-koennen.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** varēt • prast
**DE reference (read-only):** können
**CURRENT (captured scope):** Varēt • Prast
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-koennen / a1.card.a1-koennen.native: exact Luxembourgish wording for German 'können' (Latvian 'varēt • prast') is not established by the supplied evidence; production currently has 'Varēt • Prast' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

Varēt • Prast

---

## Finding 16

**Audit ID:** `LRB071-0016`
**Finding Stable ID:** `g2/a1/lb|a1-koennen|a1.card.a1-koennen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0072`
**Lang:** lb
**Card:** `a1-koennen`
**Field / path:** `a1.card.a1-koennen.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** varēt • prast
**DE reference (read-only):** können
**CURRENT (captured scope):** Varēt • Prast
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-koennen / a1.card.a1-koennen.study.translation: exact Luxembourgish wording for German 'können' (Latvian 'varēt • prast') is not established by the supplied evidence; production currently has 'Varēt • Prast' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

Varēt • Prast

---

## Finding 17

**Audit ID:** `LRB071-0017`
**Finding Stable ID:** `g2/a1/lb|a1-kosten|a1.card.a1-kosten.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0073`
**Lang:** lb
**Card:** `a1-kosten`
**Field / path:** `a1.card.a1-kosten.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** maksāt (cenu) • cik maksā
**DE reference (read-only):** kosten
**CURRENT (captured scope):** Maksāt (cenu) • Cik maxā
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-kosten / a1.card.a1-kosten.study.comparison[0].meaning: exact Luxembourgish wording for German 'kosten' (Latvian 'maksāt (cenu) • cik maksā') is not established by the supplied evidence; production currently has 'Maksāt (cenu) • Cik maxā' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "kosten",
  "lv": "Bezuelen",
  "level": "A1",
  "study": {
    "id": "a1-kosten",
    "layout": "standardStudy",
    "translation": "Bezuelen",
    "explanation": [
      "Galvenā doma: kascht nozīmē maxāt tik un tik — runā par lietas cenu.",
      "Šo vārdu lieto, kad jautā vai saka, cik kaut kas maxā, nevis kad cilvēks veic maxājumu.",
      "Et ass Zäit d'Aarbecht fäerdeg ze maachen ier Dir ufänkt ...?",
      "Latviešu vārds maxāt šajā kontekstā ir pareizs: Dëst kascht 5 Euro. = Tas maxā 5 eiro.",
      "Ja cilvēks atdod naudu par preci vai pakalpojumu, vācu valodā lieto pay vai pay."
    ],
    "examples": [
      {
        "de": "Das kostet 5 Euro.",
        "lv": "Tas maxā 5 eiro."
      },
      {
        "de": "Was kostet das?",
        "lv": "Cik tas maxā?"
      },
      {
        "de": "Wie viel kostet der Pullover?",
        "lv": "Cik maxā džemperis?"
      },
      {
        "de": "Das Essen kostet nicht viel.",
        "lv": "D'Iessen kascht net vill."
      },
      {
        "de": "Ich bezahle die Rechnung.",
        "lv": "Es maxāju rēinu."
      },
      {
        "de": "Kann ich bar bezahlen?",
        "lv": "Kann ech a Bargeld bezuelen"
      },
      {
        "de": "Er zahlt mit Karte.",
        "lv": "Den Haaptuert ass Karti."
      },
      {
        "de": "Ich zahle gleich.",
        "lv": "Es samaksāšu tūlīt."
      }
    ],
    "comparison": [
      {
        "word": "kosten",
        "meaning": "Maksāt (cenu) • Cik maxā",
        "example": "Das kostet 5 Euro. = Dat kascht 5 Euro."
      },
      {
        "word": "bezahlen",
        "meaning": "Maksāt • Samaksāt (naudu)",
        "example": "Ich bezahle die Rechnung. = Ech bezuele d'Rechnung."
      },
      {
        "word": "zahlen",
        "meaning": "Maksāt • Samaksāt",
        "example": "Kann ich bar zahlen? = Kann ech bar bezuelen?"
      },
      {
        "word": "Was kostet...?",
        "meaning": "Wéi vill kascht et...?",
        "example": "Was kostet das Buch? = Wat kascht d'Bréck?"
      }
    ],
    "tip": [
      "Erënnert dech: Fro iwwer Präis → kosten (Was kostet das?).",
      "Erënnert dech: Bezuelung maachen → bezahlen / zahlen (Ich bezahle die Rechnung.)."
    ],
    "important": [
      "kosten a bezahlen sinn net Synonymer: kosten = wat kascht; bezahlen = Geld bezuelen.",
      "A Letzebuerg gëtt dacks beid Wierder gemengt, mä vum Däitsche muss ee jee no Situatioun wielen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā"
        ],
        "purple": [
          "maxāt",
          "cenu",
          "Galvenā"
        ],
        "green": [
          "Galvenā"
        ],
        "yellow": [
          "Galvenā",
          "Galvenā"
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
              "Tas"
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
              "Cik"
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
              "Cik"
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
              "net"
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
              "maxāju"
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
              "Kan"
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
              "Den"
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
              "samaksāšu"
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
              "maksāt",
              "cenu",
              "Maksāt"
            ]
          },
          "example": {
            "blue": [
              "kostet"
            ],
            "purple": [
              "Das"
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
              "maksāt",
              "samaksāt"
            ]
          },
          "example": {
            "yellow": [
              "bezahle"
            ],
            "purple": [
              "maxāju"
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
              "maksāt",
              "samaksāt"
            ]
          },
          "example": {
            "yellow": [
              "zahlen"
            ],
            "purple": [
              "Kann"
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
              "Wéi"
            ]
          },
          "example": {
            "blue": [
              "kostet"
            ],
            "purple": [
              "Was"
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
            "cenu"
          ]
        },
        {
          "yellow": [
            "bezahlen",
            "zahlen"
          ],
          "purple": [
            "maksājuma veikšana"
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
            "cik maksā",
            "samaksāt"
          ]
        },
        {
          "purple": [
            "maksāt",
            "situācijas"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 18

**Audit ID:** `LRB071-0018`
**Finding Stable ID:** `g2/a1/lb|a1-land|a1.card.a1-land.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0076`
**Lang:** lb
**Card:** `a1-land`
**Field / path:** `a1.card.a1-land.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** valsts • zeme
**DE reference (read-only):** Land
**CURRENT (captured scope):** Valsts • Zeme
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-land / a1.card.a1-land.native: exact Luxembourgish wording for German 'Land' (Latvian 'valsts • zeme') is not established by the supplied evidence; production currently has 'Valsts • Zeme' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Land",
  "de_article": "das",
  "de_plural": "die Länder",
  "lv": "Valsts • Zeme",
  "level": "A1",
  "study": {
    "id": "a1-land",
    "layout": "standardStudy",
    "translation": "Valsts • Zeme",
    "explanation": [
      "Galvenā doma: d'Land visbiežāk nozīmē valsti vai zemi ārpus pilsētas.",
      "Jo runa ir par Vāciju, Latviju vai citu teritoriju ar kležām, tulko kā valsts.",
      "Jo runa ir par laukiem vai zemi pretstatā pilsētai, tulko kā lauki vai zeme.",
      "Kontext nosaka, vai domājam valsti, laukus vai zemi."
    ],
    "examples": [
      {
        "de": "Deutschland ist ein schönes Land.",
        "lv": "Däitschland ass e schéint Land."
      },
      {
        "de": "Ich komme aus einem kleinen Land.",
        "lv": "Es nāku no mazas valsts."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Mir ginn op d'Landschaft."
      },
      {
        "de": "Auf dem Land ist es ruhig.",
        "lv": "Laukos ir mierīgi."
      }
    ],
    "comparison": [
      {
        "word": "das Land",
        "meaning": "Valsts / zeme / lauki",
        "example": "Däitschland ass en Land."
      },
      {
        "word": "die Stadt",
        "meaning": "CAA -",
        "example": "Ech wunnen an der Stad."
      },
      {
        "word": "das Dorf",
        "meaning": "CAA -",
        "example": "Hien liewt an engem Duerf."
      },
      {
        "word": "die Erde",
        "meaning": "Zeme / Planēta",
        "example": "D'Äerd ass ronn."
      }
    ],
    "tip": {
      "text": "Atceries: valsts → das Land; pilsēta → die Stadt."
    },
    "important": [
      "aufs Land bedeit \"op Bréck\", net \"op Land\".",
      "das Land ass net d'selwett wéi die Stadt."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "Land"
        ],
        "purple": [
          "valsti",
          "zemi",
          "lauki",
          "valsts"
        ],
        "green": [
          "Vāciju",
          "Latviju",
          "pilsētas"
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
              "valsts"
            ],
            "green": [
              "Vācija"
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
              "valsts"
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
              "Mir"
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
              "laukos"
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
              "valsts",
              "zeme",
              "lauki"
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
              "CAA"
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
              "CAA"
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
              "zeme",
              "planēta"
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
            "valsts"
          ],
          "yellow": [
            "die Stadt",
            "pilsēta"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "aufs Land"
          ],
          "purple": [
            "uz laukiem"
          ],
          "red": [
            "uz valsti"
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

## Finding 19

**Audit ID:** `LRB071-0019`
**Finding Stable ID:** `g2/a1/lb|a1-land|a1.card.a1-land.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0077`
**Lang:** lb
**Card:** `a1-land`
**Field / path:** `a1.card.a1-land.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** valsts • zeme
**DE reference (read-only):** Land
**CURRENT (captured scope):** Valsts • Zeme
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-land / a1.card.a1-land.study.translation: exact Luxembourgish wording for German 'Land' (Latvian 'valsts • zeme') is not established by the supplied evidence; production currently has 'Valsts • Zeme' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Land",
  "de_article": "das",
  "de_plural": "die Länder",
  "lv": "Valsts • Zeme",
  "level": "A1",
  "study": {
    "id": "a1-land",
    "layout": "standardStudy",
    "translation": "Valsts • Zeme",
    "explanation": [
      "Galvenā doma: d'Land visbiežāk nozīmē valsti vai zemi ārpus pilsētas.",
      "Jo runa ir par Vāciju, Latviju vai citu teritoriju ar kležām, tulko kā valsts.",
      "Jo runa ir par laukiem vai zemi pretstatā pilsētai, tulko kā lauki vai zeme.",
      "Kontext nosaka, vai domājam valsti, laukus vai zemi."
    ],
    "examples": [
      {
        "de": "Deutschland ist ein schönes Land.",
        "lv": "Däitschland ass e schéint Land."
      },
      {
        "de": "Ich komme aus einem kleinen Land.",
        "lv": "Es nāku no mazas valsts."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Mir ginn op d'Landschaft."
      },
      {
        "de": "Auf dem Land ist es ruhig.",
        "lv": "Laukos ir mierīgi."
      }
    ],
    "comparison": [
      {
        "word": "das Land",
        "meaning": "Valsts / zeme / lauki",
        "example": "Däitschland ass en Land."
      },
      {
        "word": "die Stadt",
        "meaning": "CAA -",
        "example": "Ech wunnen an der Stad."
      },
      {
        "word": "das Dorf",
        "meaning": "CAA -",
        "example": "Hien liewt an engem Duerf."
      },
      {
        "word": "die Erde",
        "meaning": "Zeme / Planēta",
        "example": "D'Äerd ass ronn."
      }
    ],
    "tip": {
      "text": "Atceries: valsts → das Land; pilsēta → die Stadt."
    },
    "important": [
      "aufs Land bedeit \"op Bréck\", net \"op Land\".",
      "das Land ass net d'selwett wéi die Stadt."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "Land"
        ],
        "purple": [
          "valsti",
          "zemi",
          "lauki",
          "valsts"
        ],
        "green": [
          "Vāciju",
          "Latviju",
          "pilsētas"
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
              "valsts"
            ],
            "green": [
              "Vācija"
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
              "valsts"
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
              "Mir"
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
              "laukos"
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
              "valsts",
              "zeme",
              "lauki"
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
              "CAA"
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
              "CAA"
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
              "zeme",
              "planēta"
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
            "valsts"
          ],
          "yellow": [
            "die Stadt",
            "pilsēta"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "aufs Land"
          ],
          "purple": [
            "uz laukiem"
          ],
          "red": [
            "uz valsti"
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

## Finding 20

**Audit ID:** `LRB071-0020`
**Finding Stable ID:** `g2/a1/lb|a1-lang|a1.card.a1-lang.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0078`
**Lang:** lb
**Card:** `a1-lang`
**Field / path:** `a1.card.a1-lang.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** garš • ilgs
**DE reference (read-only):** lang
**CURRENT (captured scope):** Garš • Ilgs
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-lang / a1.card.a1-lang.native: exact Luxembourgish wording for German 'lang' (Latvian 'garš • ilgs') is not established by the supplied evidence; production currently has 'Garš • Ilgs' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "lang",
  "lv": "Garš • Ilgs",
  "level": "A1",
  "study": {
    "id": "a1-lang",
    "layout": "standardStudy",
    "translation": "Garš • Ilgs",
    "explanation": [
      "Galvenā doma: lang telpiski nozīmē garš, laika ziệā nozīmē ilgs.",
      "Jo runa ir par izmēru vai attālumu, lang = garš (en laangen Dësch = garš galds).",
      "Yes runa ir par laika ilgumu, lang = ilgs (a long day = ilga diena).",
      "Frāzē de ganzen Dag laang Tas nozīmē visu dienu (garumā).",
      "Letviski'garš'un'ilgs'ir divi dažādi vārdi, bet vācu lang aptver abas nozīmes."
    ],
    "examples": [
      {
        "de": "Der Tisch ist sehr lang.",
        "lv": "De gueules à l'argent."
      },
      {
        "de": "Der Film war sehr lang.",
        "lv": "Filma bija Đoti ilga."
      },
      {
        "de": "Wie lange dauert es?",
        "lv": "Cik ilgi tas ilgst?"
      },
      {
        "de": "Sie hat lange Haare.",
        "lv": "Den Haaptuert ass Gari Mati."
      },
      {
        "de": "Ich warte schon lange.",
        "lv": "Es gaidu jau ilgi."
      },
      {
        "de": "Den ganzen Tag lang.",
        "lv": "Visu dienu (Garumā)."
      }
    ],
    "tip": [
      "Fir Gréisst oder Entfernung (Hoer, Wee, Dësch) → laang.",
      "Fir Zäit (Dag, Warten, Film) → laang."
    ],
    "important": [
      "lang = laang (Gréisst) ODER laang (Zäit) — no Kontext.",
      "wie lange = wéi laang (Fro iwwer Zäit, net Gréisst)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lang"
        ],
        "purple": [
          "garš",
          "ilgs"
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
              "gueules"
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
              "ilga"
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
              "ilgi"
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
              "gari"
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
              "ilgi"
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
              "garumā"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "garš"
          ]
        },
        {
          "green": [
            "ilgs"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "garš",
            "ilgs"
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

## Finding 21

**Audit ID:** `LRB071-0021`
**Finding Stable ID:** `g2/a1/lb|a1-lang|a1.card.a1-lang.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0079`
**Lang:** lb
**Card:** `a1-lang`
**Field / path:** `a1.card.a1-lang.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** garš • ilgs
**DE reference (read-only):** lang
**CURRENT (captured scope):** Garš • Ilgs
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-lang / a1.card.a1-lang.study.translation: exact Luxembourgish wording for German 'lang' (Latvian 'garš • ilgs') is not established by the supplied evidence; production currently has 'Garš • Ilgs' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "lang",
  "lv": "Garš • Ilgs",
  "level": "A1",
  "study": {
    "id": "a1-lang",
    "layout": "standardStudy",
    "translation": "Garš • Ilgs",
    "explanation": [
      "Galvenā doma: lang telpiski nozīmē garš, laika ziệā nozīmē ilgs.",
      "Jo runa ir par izmēru vai attālumu, lang = garš (en laangen Dësch = garš galds).",
      "Yes runa ir par laika ilgumu, lang = ilgs (a long day = ilga diena).",
      "Frāzē de ganzen Dag laang Tas nozīmē visu dienu (garumā).",
      "Letviski'garš'un'ilgs'ir divi dažādi vārdi, bet vācu lang aptver abas nozīmes."
    ],
    "examples": [
      {
        "de": "Der Tisch ist sehr lang.",
        "lv": "De gueules à l'argent."
      },
      {
        "de": "Der Film war sehr lang.",
        "lv": "Filma bija Đoti ilga."
      },
      {
        "de": "Wie lange dauert es?",
        "lv": "Cik ilgi tas ilgst?"
      },
      {
        "de": "Sie hat lange Haare.",
        "lv": "Den Haaptuert ass Gari Mati."
      },
      {
        "de": "Ich warte schon lange.",
        "lv": "Es gaidu jau ilgi."
      },
      {
        "de": "Den ganzen Tag lang.",
        "lv": "Visu dienu (Garumā)."
      }
    ],
    "tip": [
      "Fir Gréisst oder Entfernung (Hoer, Wee, Dësch) → laang.",
      "Fir Zäit (Dag, Warten, Film) → laang."
    ],
    "important": [
      "lang = laang (Gréisst) ODER laang (Zäit) — no Kontext.",
      "wie lange = wéi laang (Fro iwwer Zäit, net Gréisst)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lang"
        ],
        "purple": [
          "garš",
          "ilgs"
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
              "gueules"
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
              "ilga"
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
              "ilgi"
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
              "gari"
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
              "ilgi"
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
              "garumā"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "garš"
          ]
        },
        {
          "green": [
            "ilgs"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "garš",
            "ilgs"
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

## Finding 22

**Audit ID:** `LRB071-0022`
**Finding Stable ID:** `g2/a1/lb|a1-lassen|a1.card.a1-lassen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0080`
**Lang:** lb
**Card:** `a1-lassen`
**Field / path:** `a1.card.a1-lassen.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** atstāt • ļaut
**DE reference (read-only):** lassen
**CURRENT (captured scope):** Atstāt • Haut
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-lassen / a1.card.a1-lassen.native: exact Luxembourgish wording for German 'lassen' (Latvian 'atstāt • ļaut') is not established by the supplied evidence; production currently has 'Atstāt • Haut' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "lassen",
  "lv": "Atstāt • Haut",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "Atstāt • Haut",
    "explanation": [
      "Galvenā doma: let nozīmē atstāt kaut ko vai Đaut kaut kam netikt.",
      "CAA-BHUA CAA-BHUB CAA-BHUC CAA-BHUD CAA-BHUE CAA-BHUF CAA-BHUG CAA-BHUH CAA-BHUI CAA-BHUJ CAA-BHUK CAA-BHUL CAA-BHUM CAA-BHUN CAA-BHUO CAA-BHUP CAA-BHUQ CAA-BHUR CAA-BHUS CAA-BHUT CAA-BHUU CAA-BHUV CAA-BHUW CAA-BHUX CAA-BHUY CAA-BHUZ CAA-BHU0 CAA-BHU1 CAA-BHU2 CAA-BHU3 CAA-BHU4 CAA-BHU5 CAA-BHU6 CAA-BHU7 CAA-BHU8 CAA-BHU9",
      "Jo, kādam dod bei tusauju, loosst tulpko kā ṭaut.",
      "Sarunās Đoti bieža forma ir Loosst mech! = Liec mani mierā! vai ̆auj man!"
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "Es ass nach eng Kéier."
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "Atstāj zu, lūdzu, uz galda."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "Vecāki Đauj Mann iet."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "Liec mani mierā!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "CAA -",
        "example": "Ech leeën dat hei."
      },
      {
        "word": "bleiben",
        "meaning": "CAA -",
        "example": "Ech bleiwen hei."
      },
      {
        "word": "erlauben",
        "meaning": "CAA -",
        "example": "Si erlaabt mir dat."
      },
      {
        "word": "geben",
        "meaning": "CAA -",
        "example": "Ginn mir d'Bréck."
      }
    ],
    "tip": {
      "text": "Atceries: kaut kas paliek → lassen; kādam atļauj → lassen."
    },
    "important": [
      "lassen ass net nëmmen \"loosen\". Et heescht oft och \"erlaaben\".",
      "Lass mich in Ruhe! ass eng ganz dacks Fro: \"Lea mech a Rou!\""
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "Galvenā"
        ],
        "purple": [
          "atstāt",
          "kaut",
          "Liec mani mierā"
        ],
        "green": [
          "mierā",
          "Galvenā"
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
              "ass"
            ],
            "yellow": [
              "ass"
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
              "atstāj"
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
              "Đauj"
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
              "liec mani mierā"
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
              "CAA",
              "CAA"
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
              "CAA"
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
              "CAA"
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
              "CAA"
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
            "paliek",
            "atļauj"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "lassen"
          ],
          "purple": [
            "atstāt",
            "ļaut"
          ]
        },
        {
          "blue": [
            "Lass mich in Ruhe"
          ],
          "purple": [
            "liec mani mierā"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 23

**Audit ID:** `LRB071-0023`
**Finding Stable ID:** `g2/a1/lb|a1-lassen|a1.card.a1-lassen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0081`
**Lang:** lb
**Card:** `a1-lassen`
**Field / path:** `a1.card.a1-lassen.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** atstāt • ļaut
**DE reference (read-only):** lassen
**CURRENT (captured scope):** Atstāt • Haut
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-lassen / a1.card.a1-lassen.study.translation: exact Luxembourgish wording for German 'lassen' (Latvian 'atstāt • ļaut') is not established by the supplied evidence; production currently has 'Atstāt • Haut' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "lassen",
  "lv": "Atstāt • Haut",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "Atstāt • Haut",
    "explanation": [
      "Galvenā doma: let nozīmē atstāt kaut ko vai Đaut kaut kam netikt.",
      "CAA-BHUA CAA-BHUB CAA-BHUC CAA-BHUD CAA-BHUE CAA-BHUF CAA-BHUG CAA-BHUH CAA-BHUI CAA-BHUJ CAA-BHUK CAA-BHUL CAA-BHUM CAA-BHUN CAA-BHUO CAA-BHUP CAA-BHUQ CAA-BHUR CAA-BHUS CAA-BHUT CAA-BHUU CAA-BHUV CAA-BHUW CAA-BHUX CAA-BHUY CAA-BHUZ CAA-BHU0 CAA-BHU1 CAA-BHU2 CAA-BHU3 CAA-BHU4 CAA-BHU5 CAA-BHU6 CAA-BHU7 CAA-BHU8 CAA-BHU9",
      "Jo, kādam dod bei tusauju, loosst tulpko kā ṭaut.",
      "Sarunās Đoti bieža forma ir Loosst mech! = Liec mani mierā! vai ̆auj man!"
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "Es ass nach eng Kéier."
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "Atstāj zu, lūdzu, uz galda."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "Vecāki Đauj Mann iet."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "Liec mani mierā!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "CAA -",
        "example": "Ech leeën dat hei."
      },
      {
        "word": "bleiben",
        "meaning": "CAA -",
        "example": "Ech bleiwen hei."
      },
      {
        "word": "erlauben",
        "meaning": "CAA -",
        "example": "Si erlaabt mir dat."
      },
      {
        "word": "geben",
        "meaning": "CAA -",
        "example": "Ginn mir d'Bréck."
      }
    ],
    "tip": {
      "text": "Atceries: kaut kas paliek → lassen; kādam atļauj → lassen."
    },
    "important": [
      "lassen ass net nëmmen \"loosen\". Et heescht oft och \"erlaaben\".",
      "Lass mich in Ruhe! ass eng ganz dacks Fro: \"Lea mech a Rou!\""
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "Galvenā"
        ],
        "purple": [
          "atstāt",
          "kaut",
          "Liec mani mierā"
        ],
        "green": [
          "mierā",
          "Galvenā"
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
              "ass"
            ],
            "yellow": [
              "ass"
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
              "atstāj"
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
              "Đauj"
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
              "liec mani mierā"
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
              "CAA",
              "CAA"
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
              "CAA"
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
              "CAA"
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
              "CAA"
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
            "paliek",
            "atļauj"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "lassen"
          ],
          "purple": [
            "atstāt",
            "ļaut"
          ]
        },
        {
          "blue": [
            "Lass mich in Ruhe"
          ],
          "purple": [
            "liec mani mierā"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 24

**Audit ID:** `LRB071-0024`
**Finding Stable ID:** `g2/a1/lb|a1-laufen|a1.card.a1-laufen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0082`
**Lang:** lb
**Card:** `a1-laufen`
**Field / path:** `a1.card.a1-laufen.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** skriet • darboties
**DE reference (read-only):** laufen
**CURRENT (captured scope):** Skriet • DARBOTIES
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-laufen / a1.card.a1-laufen.native: exact Luxembourgish wording for German 'laufen' (Latvian 'skriet • darboties') is not established by the supplied evidence; production currently has 'Skriet • DARBOTIES' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "laufen",
  "lv": "Skriet • DARBOTIES",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "Skriet • DARBOTIES",
    "explanation": [
      "Galvenā doma: run nozīmē skriet, bet ar ierīcēm tas var nozīmēt darboties.",
      "Par cilvēku vai dzīvnieku run bieži nozīmē skriet vai iet ātrā solī.",
      "Par filmu, machen d'Programmatioun nozīmē, wéi Dir e Message hutt.",
      "Kustībai kājām A1 līmenī visbiežāk salīdzina géi lafen."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "Произношение на Ech hunn dech gäer"
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "Bērni skrien parkā."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "Filma jau iet."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "Mašīna darbojas labi."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "CAA -",
        "example": "Hien laapt séier."
      },
      {
        "word": "gehen",
        "meaning": "Iet kājām",
        "example": "Ech ginn heemgoen."
      },
      {
        "word": "fahren",
        "meaning": "Reit Den Transport",
        "example": "Ech fuer mam Bus."
      },
      {
        "word": "funktionieren",
        "meaning": "CAA -",
        "example": "Dat funktionéiert gutt."
      }
    ],
    "tip": {
      "text": "Atceries: kājas ātri → laufen; transports → fahren."
    },
    "important": [
      "laufen ass net nëmmen \"renne\". Iwwer Film oder Apparat et kann \"goen\" oder \"funktionéieren\" bedeit.",
      "Ich laufe bedeit Bewegung ze Fouss, net fueren."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lafen"
        ],
        "purple": [
          "skriet",
          "darboties",
          "iet"
        ],
        "green": [
          "cilvēku",
          "dzīvnieku",
          "filmu",
          "Galvenā",
          "Galvenā"
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
              "Произношение"
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
              "skrien"
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
              "iet"
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
              "darbojas"
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
              "CAA",
              "CAA"
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
              "iet"
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
              "Reit"
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
              "CAA"
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
            "kājas ātri"
          ],
          "red": [
            "fahren",
            "transports"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "laufen"
          ],
          "purple": [
            "skriet",
            "iet",
            "darboties"
          ]
        },
        {
          "blue": [
            "Ich laufe"
          ],
          "purple": [
            "kustību kājām"
          ],
          "red": [
            "braukšanu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 25

**Audit ID:** `LRB071-0025`
**Finding Stable ID:** `g2/a1/lb|a1-laufen|a1.card.a1-laufen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0083`
**Lang:** lb
**Card:** `a1-laufen`
**Field / path:** `a1.card.a1-laufen.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** skriet • darboties
**DE reference (read-only):** laufen
**CURRENT (captured scope):** Skriet • DARBOTIES
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-laufen / a1.card.a1-laufen.study.translation: exact Luxembourgish wording for German 'laufen' (Latvian 'skriet • darboties') is not established by the supplied evidence; production currently has 'Skriet • DARBOTIES' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "laufen",
  "lv": "Skriet • DARBOTIES",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "Skriet • DARBOTIES",
    "explanation": [
      "Galvenā doma: run nozīmē skriet, bet ar ierīcēm tas var nozīmēt darboties.",
      "Par cilvēku vai dzīvnieku run bieži nozīmē skriet vai iet ātrā solī.",
      "Par filmu, machen d'Programmatioun nozīmē, wéi Dir e Message hutt.",
      "Kustībai kājām A1 līmenī visbiežāk salīdzina géi lafen."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "Произношение на Ech hunn dech gäer"
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "Bērni skrien parkā."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "Filma jau iet."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "Mašīna darbojas labi."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "CAA -",
        "example": "Hien laapt séier."
      },
      {
        "word": "gehen",
        "meaning": "Iet kājām",
        "example": "Ech ginn heemgoen."
      },
      {
        "word": "fahren",
        "meaning": "Reit Den Transport",
        "example": "Ech fuer mam Bus."
      },
      {
        "word": "funktionieren",
        "meaning": "CAA -",
        "example": "Dat funktionéiert gutt."
      }
    ],
    "tip": {
      "text": "Atceries: kājas ātri → laufen; transports → fahren."
    },
    "important": [
      "laufen ass net nëmmen \"renne\". Iwwer Film oder Apparat et kann \"goen\" oder \"funktionéieren\" bedeit.",
      "Ich laufe bedeit Bewegung ze Fouss, net fueren."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lafen"
        ],
        "purple": [
          "skriet",
          "darboties",
          "iet"
        ],
        "green": [
          "cilvēku",
          "dzīvnieku",
          "filmu",
          "Galvenā",
          "Galvenā"
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
              "Произношение"
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
              "skrien"
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
              "iet"
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
              "darbojas"
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
              "CAA",
              "CAA"
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
              "iet"
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
              "Reit"
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
              "CAA"
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
            "kājas ātri"
          ],
          "red": [
            "fahren",
            "transports"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "laufen"
          ],
          "purple": [
            "skriet",
            "iet",
            "darboties"
          ]
        },
        {
          "blue": [
            "Ich laufe"
          ],
          "purple": [
            "kustību kājām"
          ],
          "red": [
            "braukšanu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 26

**Audit ID:** `LRB071-0026`
**Finding Stable ID:** `g2/a1/lb|a1-liegen|a1.card.a1-liegen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0084`
**Lang:** lb
**Card:** `a1-liegen`
**Field / path:** `a1.card.a1-liegen.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** atrasties • gulēt
**DE reference (read-only):** liegen
**CURRENT (captured scope):** Atrasties • Gulēt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-liegen / a1.card.a1-liegen.native: exact Luxembourgish wording for German 'liegen' (Latvian 'atrasties • gulēt') is not established by the supplied evidence; production currently has 'Atrasties • Gulēt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "liegen",
  "lv": "Atrasties • Gulēt",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "Atrasties • Gulēt",
    "explanation": [
      "Galvenā doma: lie nozīmē atrasties vai gulēt horizontāli.",
      "Par cilvēku lie bieži nozīmē gulēt.",
      "Par lietu lie nozīmē, ka tā atrodas chew kur.",
      "Tas atšṅiras nolegen, kas nozīmē nolikt kaut ko."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Grāmata atrodas uz galda."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Männlech Handy atrodas automašīnā."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Es nolieku grāmatu uz galda."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "Atrasties / gulēt",
        "example": "D'Bréck läit hei."
      },
      {
        "word": "legen",
        "meaning": "CAA -",
        "example": "Ech leeën d'Bréck dorhin."
      },
      {
        "word": "stehen",
        "meaning": "Stävt / atrasties stāvus",
        "example": "D'Fläsch steet op dem Dësch."
      },
      {
        "word": "sein",
        "meaning": "Sinn",
        "example": "Ech sinn hei."
      }
    ],
    "tip": {
      "text": "Atceries: lieta jau ir vietā → liegen; tu to noliec → legen."
    },
    "important": [
      "liegen weist op Lag oder Auffindungslaz.",
      "legen weist op Aktioun: jemand leezt eppes fort."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "legen"
        ],
        "purple": [
          "atrasties",
          "gulēt",
          "nolikt"
        ],
        "yellow": [
          "lietu"
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
              "atrodas"
            ],
            "yellow": [
              "Grāmata",
              "galda"
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
              "atrodas"
            ],
            "yellow": [
              "Männlech",
              "automašīnā"
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
              "Dat"
            ],
            "green": [
              "Dat"
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
              "nolieku"
            ],
            "yellow": [
              "grāmatu",
              "galda"
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
              "atrasties",
              "gulēt"
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
              "CAA"
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
              "Stävt"
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
              "Sinn"
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
            "ir vietā"
          ],
          "red": [
            "legen",
            "noliec"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "liegen"
          ],
          "purple": [
            "stāvokli",
            "atrašanās vietu"
          ]
        },
        {
          "red": [
            "legen"
          ],
          "purple": [
            "darbību",
            "noliek"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 27

**Audit ID:** `LRB071-0027`
**Finding Stable ID:** `g2/a1/lb|a1-liegen|a1.card.a1-liegen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0085`
**Lang:** lb
**Card:** `a1-liegen`
**Field / path:** `a1.card.a1-liegen.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** atrasties • gulēt
**DE reference (read-only):** liegen
**CURRENT (captured scope):** Atrasties • Gulēt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-liegen / a1.card.a1-liegen.study.translation: exact Luxembourgish wording for German 'liegen' (Latvian 'atrasties • gulēt') is not established by the supplied evidence; production currently has 'Atrasties • Gulēt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "liegen",
  "lv": "Atrasties • Gulēt",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "Atrasties • Gulēt",
    "explanation": [
      "Galvenā doma: lie nozīmē atrasties vai gulēt horizontāli.",
      "Par cilvēku lie bieži nozīmē gulēt.",
      "Par lietu lie nozīmē, ka tā atrodas chew kur.",
      "Tas atšṅiras nolegen, kas nozīmē nolikt kaut ko."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Grāmata atrodas uz galda."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Männlech Handy atrodas automašīnā."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Es nolieku grāmatu uz galda."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "Atrasties / gulēt",
        "example": "D'Bréck läit hei."
      },
      {
        "word": "legen",
        "meaning": "CAA -",
        "example": "Ech leeën d'Bréck dorhin."
      },
      {
        "word": "stehen",
        "meaning": "Stävt / atrasties stāvus",
        "example": "D'Fläsch steet op dem Dësch."
      },
      {
        "word": "sein",
        "meaning": "Sinn",
        "example": "Ech sinn hei."
      }
    ],
    "tip": {
      "text": "Atceries: lieta jau ir vietā → liegen; tu to noliec → legen."
    },
    "important": [
      "liegen weist op Lag oder Auffindungslaz.",
      "legen weist op Aktioun: jemand leezt eppes fort."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "legen"
        ],
        "purple": [
          "atrasties",
          "gulēt",
          "nolikt"
        ],
        "yellow": [
          "lietu"
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
              "atrodas"
            ],
            "yellow": [
              "Grāmata",
              "galda"
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
              "atrodas"
            ],
            "yellow": [
              "Männlech",
              "automašīnā"
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
              "Dat"
            ],
            "green": [
              "Dat"
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
              "nolieku"
            ],
            "yellow": [
              "grāmatu",
              "galda"
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
              "atrasties",
              "gulēt"
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
              "CAA"
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
              "Stävt"
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
              "Sinn"
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
            "ir vietā"
          ],
          "red": [
            "legen",
            "noliec"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "liegen"
          ],
          "purple": [
            "stāvokli",
            "atrašanās vietu"
          ]
        },
        {
          "red": [
            "legen"
          ],
          "purple": [
            "darbību",
            "noliek"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 28

**Audit ID:** `LRB071-0028`
**Finding Stable ID:** `g2/a1/lb|a1-machen|a1.card.a1-machen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0086`
**Lang:** lb
**Card:** `a1-machen`
**Field / path:** `a1.card.a1-machen.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** darīt • taisīt
**DE reference (read-only):** machen
**CURRENT (captured scope):** Darīt • Taisīt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-machen / a1.card.a1-machen.native: exact Luxembourgish wording for German 'machen' (Latvian 'darīt • taisīt') is not established by the supplied evidence; production currently has 'Darīt • Taisīt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "machen",
  "lv": "Darīt • Taisīt",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "Darīt • Taisīt",
    "explanation": [
      "Galvenā doma: maachen ir Đoti biežs vārds nozīmē darīt vai taisīt.",
      "Wann et ëm Aktioun am Allgemengen geet, iwwersat wéi maachen.",
      "Jo, chew ko veido vai gatavo, tulko kā taisīt vai pagatavot.",
      "Daudzās frāzēs maachen tulko dabiski pēc latviešu valodas, nevis burtiski."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "KO DU DARI?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Et ass e Pillu mājasdarbus."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Mēs taisām picu."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "TASS ir jautri."
      }
    ],
    "tip": {
      "text": "Atceries: Was machst du? = Ko tu dari?"
    },
    "important": [
      "machen ass e ganz breide Wuert, awer op Lëtzebuergesch muss een dacks natierlech iwwersetzen no der Situatioun.",
      "Das macht Spaß bedeit \"dat ass amüsant\", net wuertlech \"dat mécht Spaß\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "maachen"
        ],
        "purple": [
          "darīt",
          "taisīt",
          "pagatavot"
        ],
        "green": [
          "darbību",
          "frāzēs"
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
              "dari"
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
              "Pillu"
            ],
            "yellow": [
              "mājasdarbus"
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
              "taisām"
            ],
            "yellow": [
              "picu"
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
              "ir jautri"
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
            "ko tu dari"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "machen"
          ],
          "purple": [
            "dabiski"
          ]
        },
        {
          "blue": [
            "Das macht Spaß"
          ],
          "purple": [
            "tas ir jautri"
          ],
          "red": [
            "taisa prieku"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 29

**Audit ID:** `LRB071-0029`
**Finding Stable ID:** `g2/a1/lb|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0087`
**Lang:** lb
**Card:** `a1-machen`
**Field / path:** `a1.card.a1-machen.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** darīt • taisīt
**DE reference (read-only):** machen
**CURRENT (captured scope):** Darīt • Taisīt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-machen / a1.card.a1-machen.study.translation: exact Luxembourgish wording for German 'machen' (Latvian 'darīt • taisīt') is not established by the supplied evidence; production currently has 'Darīt • Taisīt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "machen",
  "lv": "Darīt • Taisīt",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "Darīt • Taisīt",
    "explanation": [
      "Galvenā doma: maachen ir Đoti biežs vārds nozīmē darīt vai taisīt.",
      "Wann et ëm Aktioun am Allgemengen geet, iwwersat wéi maachen.",
      "Jo, chew ko veido vai gatavo, tulko kā taisīt vai pagatavot.",
      "Daudzās frāzēs maachen tulko dabiski pēc latviešu valodas, nevis burtiski."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "KO DU DARI?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Et ass e Pillu mājasdarbus."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Mēs taisām picu."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "TASS ir jautri."
      }
    ],
    "tip": {
      "text": "Atceries: Was machst du? = Ko tu dari?"
    },
    "important": [
      "machen ass e ganz breide Wuert, awer op Lëtzebuergesch muss een dacks natierlech iwwersetzen no der Situatioun.",
      "Das macht Spaß bedeit \"dat ass amüsant\", net wuertlech \"dat mécht Spaß\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "maachen"
        ],
        "purple": [
          "darīt",
          "taisīt",
          "pagatavot"
        ],
        "green": [
          "darbību",
          "frāzēs"
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
              "dari"
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
              "Pillu"
            ],
            "yellow": [
              "mājasdarbus"
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
              "taisām"
            ],
            "yellow": [
              "picu"
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
              "ir jautri"
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
            "ko tu dari"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "machen"
          ],
          "purple": [
            "dabiski"
          ]
        },
        {
          "blue": [
            "Das macht Spaß"
          ],
          "purple": [
            "tas ir jautri"
          ],
          "red": [
            "taisa prieku"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 30

**Audit ID:** `LRB071-0030`
**Finding Stable ID:** `g2/a1/lb|a1-mann|a1.card.a1-mann.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0088`
**Lang:** lb
**Card:** `a1-mann`
**Field / path:** `a1.card.a1-mann.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** vīrietis • vīrs
**DE reference (read-only):** Mann
**CURRENT (captured scope):** Vīrietis • Vīrs
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-mann / a1.card.a1-mann.native: exact Luxembourgish wording for German 'Mann' (Latvian 'vīrietis • vīrs') is not established by the supplied evidence; production currently has 'Vīrietis • Vīrs' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Mann",
  "de_article": "der",
  "de_plural": "die Männer",
  "lv": "Vīrietis • Vīrs",
  "level": "A1",
  "study": {
    "id": "a1-mann",
    "layout": "standardStudy",
    "translation": "Vīrietis • Vīrs",
    "explanation": [
      "Galvenā doma: de Mann war nozīmēt vīrieti (dzimums) vai vīru (laulātais).",
      "Yes runa ir vienkārši par dzimumu vai personu, the man = vīrietis.",
      "Yes runa ir par laulāto partneri, der Mann = vīrs (mein Mann = mans vīrs).",
      "Piederības vietniekvārds (my/your/her husband) gandrīz vienmēr nozīmē vīru — laulāto.",
      "DAudzskaitlī: men.",
      "Fir d'Fréieform d'Frau huet déi selwecht duebel Bedeitong: Fra UND Éfra."
    ],
    "examples": [
      {
        "de": "Er ist ein netter Mann.",
        "lv": "D'Virfreed op d'Lëtzebuergescht ass grouss."
      },
      {
        "de": "Das ist mein Mann.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Wie viele Männer sind hier?",
        "lv": "Wësst Dir wat Dir wëllt?"
      },
      {
        "de": "Mein Mann arbeitet in Berlin.",
        "lv": "Mënsche sinn an der Belsch."
      },
      {
        "de": "Der Mann trägt einen Anzug.",
        "lv": "Vīrietis valkā uzvalku."
      },
      {
        "de": "Ihr Mann ist Arzt.",
        "lv": "De l'autre côté du miroir."
      }
    ],
    "tip": [
      "Mat Possessivwuert (mein/dein/ihr Mann) ass bal ëmmer de Wuert \"Émann\" (verhäirat) gemeent.",
      "Ouni Possessivwuert (der Mann, ein Mann) ass normalerweis de Wuert \"Mënsch\" gemeent."
    ],
    "important": [
      "der Mann = Mënsch ODER Émann — dorëms vum Kontext.",
      "mein Mann = mäi Émann (net 'mäi Mënsch').",
      "DAudzskaitlī: men."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Mann",
          "Mann"
        ],
        "purple": [
          "vīrietis",
          "vīrs"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Mann"
            ]
          },
          "lv": {
            "purple": [
              "D'Virfreed"
            ]
          }
        },
        {
          "de": {
            "green": [
              "mein Mann"
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
              "Männer"
            ]
          },
          "lv": {
            "purple": [
              "Wësst"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Mein Mann"
            ]
          },
          "lv": {
            "purple": [
              "Mënsche"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Mann"
            ]
          },
          "lv": {
            "purple": [
              "vīrietis"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Ihr Mann"
            ]
          },
          "lv": {
            "purple": [
              "l'autre"
            ]
          }
        }
      ],
      "tip": [
        {
          "green": [
            "mein",
            "dein",
            "ihr Mann"
          ],
          "purple": [
            "vīrs"
          ]
        },
        {
          "blue": [
            "der Mann",
            "ein Mann"
          ],
          "purple": [
            "vīrietis"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "vīrietis",
            "vīrs"
          ]
        },
        {
          "green": [
            "mein Mann"
          ]
        },
        {
          "blue": [
            "die Männer"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 31

**Audit ID:** `LRB071-0031`
**Finding Stable ID:** `g2/a1/lb|a1-mann|a1.card.a1-mann.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0089`
**Lang:** lb
**Card:** `a1-mann`
**Field / path:** `a1.card.a1-mann.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** vīrietis • vīrs
**DE reference (read-only):** Mann
**CURRENT (captured scope):** Vīrietis • Vīrs
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-mann / a1.card.a1-mann.study.translation: exact Luxembourgish wording for German 'Mann' (Latvian 'vīrietis • vīrs') is not established by the supplied evidence; production currently has 'Vīrietis • Vīrs' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Mann",
  "de_article": "der",
  "de_plural": "die Männer",
  "lv": "Vīrietis • Vīrs",
  "level": "A1",
  "study": {
    "id": "a1-mann",
    "layout": "standardStudy",
    "translation": "Vīrietis • Vīrs",
    "explanation": [
      "Galvenā doma: de Mann war nozīmēt vīrieti (dzimums) vai vīru (laulātais).",
      "Yes runa ir vienkārši par dzimumu vai personu, the man = vīrietis.",
      "Yes runa ir par laulāto partneri, der Mann = vīrs (mein Mann = mans vīrs).",
      "Piederības vietniekvārds (my/your/her husband) gandrīz vienmēr nozīmē vīru — laulāto.",
      "DAudzskaitlī: men.",
      "Fir d'Fréieform d'Frau huet déi selwecht duebel Bedeitong: Fra UND Éfra."
    ],
    "examples": [
      {
        "de": "Er ist ein netter Mann.",
        "lv": "D'Virfreed op d'Lëtzebuergescht ass grouss."
      },
      {
        "de": "Das ist mein Mann.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Wie viele Männer sind hier?",
        "lv": "Wësst Dir wat Dir wëllt?"
      },
      {
        "de": "Mein Mann arbeitet in Berlin.",
        "lv": "Mënsche sinn an der Belsch."
      },
      {
        "de": "Der Mann trägt einen Anzug.",
        "lv": "Vīrietis valkā uzvalku."
      },
      {
        "de": "Ihr Mann ist Arzt.",
        "lv": "De l'autre côté du miroir."
      }
    ],
    "tip": [
      "Mat Possessivwuert (mein/dein/ihr Mann) ass bal ëmmer de Wuert \"Émann\" (verhäirat) gemeent.",
      "Ouni Possessivwuert (der Mann, ein Mann) ass normalerweis de Wuert \"Mënsch\" gemeent."
    ],
    "important": [
      "der Mann = Mënsch ODER Émann — dorëms vum Kontext.",
      "mein Mann = mäi Émann (net 'mäi Mënsch').",
      "DAudzskaitlī: men."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Mann",
          "Mann"
        ],
        "purple": [
          "vīrietis",
          "vīrs"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Mann"
            ]
          },
          "lv": {
            "purple": [
              "D'Virfreed"
            ]
          }
        },
        {
          "de": {
            "green": [
              "mein Mann"
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
              "Männer"
            ]
          },
          "lv": {
            "purple": [
              "Wësst"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Mein Mann"
            ]
          },
          "lv": {
            "purple": [
              "Mënsche"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Mann"
            ]
          },
          "lv": {
            "purple": [
              "vīrietis"
            ]
          }
        },
        {
          "de": {
            "green": [
              "Ihr Mann"
            ]
          },
          "lv": {
            "purple": [
              "l'autre"
            ]
          }
        }
      ],
      "tip": [
        {
          "green": [
            "mein",
            "dein",
            "ihr Mann"
          ],
          "purple": [
            "vīrs"
          ]
        },
        {
          "blue": [
            "der Mann",
            "ein Mann"
          ],
          "purple": [
            "vīrietis"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "vīrietis",
            "vīrs"
          ]
        },
        {
          "green": [
            "mein Mann"
          ]
        },
        {
          "blue": [
            "die Männer"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 32

**Audit ID:** `LRB071-0032`
**Finding Stable ID:** `g2/a1/lb|a1-nach|a1.card.a1-nach.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0090`
**Lang:** lb
**Card:** `a1-nach`
**Field / path:** `a1.card.a1-nach.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** uz • pēc
**DE reference (read-only):** nach
**CURRENT (captured scope):** Uz • Pēc
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-nach / a1.card.a1-nach.native: exact Luxembourgish wording for German 'nach' (Latvian 'uz • pēc') is not established by the supplied evidence; production currently has 'Uz • Pēc' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nach",
  "lv": "Uz • Pēc",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "Uz • Pēc",
    "explanation": [
      "Haaptidee: nach bedeit \"op hin\" mat Plazen a \"no\" mat Zäit oder Reiefolleg.",
      "Mat Stied an Länner ouni Artikel ass nach dacks \"op hin\".",
      "Ar wilu nach nozīmē pēc.",
      "Frāzē heem Tas nozīmē uz mājām."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Es braucu uz Berlīni."
      },
      {
        "de": "Wir gehen nach Hause.",
        "lv": "Mir ginn heem."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Pēc ēšanas mēs ejam pastaigāties."
      },
      {
        "de": "Es ist zehn nach acht.",
        "lv": "Ir desmit pari astoņiem."
      }
    ],
    "comparison": [
      {
        "word": "nach",
        "meaning": "Uz/pēc",
        "example": "Ech fuer no Berlin."
      },
      {
        "word": "zu",
        "meaning": "CAA -",
        "example": "Ech ginn zum Dokter."
      },
      {
        "word": "in",
        "meaning": "Iekšā / uz vietu ar artikulu",
        "example": "Ech ginn an d'Schoul."
      },
      {
        "word": "vor",
        "meaning": "Pirms / priekšā",
        "example": "Vir dem Iessen wäsch ech d'Hänner."
      }
    ],
    "tip": {
      "text": "Atceries: nach Hause; nach Berlin; pēc ēšanas."
    },
    "important": [
      "nach gëtt net mat all Plazen benotzt.",
      "Zu der Schoul geet normalerweis \"in die Schule\", net \"nach Schule\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "nach",
          "Galvenā"
        ],
        "purple": [
          "uz",
          "pēc",
          "uz mājām"
        ],
        "green": [
          "pilsētām",
          "valstīm",
          "laiku"
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
              "uz"
            ],
            "green": [
              "Berlīni"
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
              "Mir"
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
              "pēc"
            ],
            "yellow": [
              "ēšanas"
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
              "pāri"
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
              "uz",
              "pēc"
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
              "CAA",
              "CAA"
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
              "iekšā"
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
              "pirms",
              "priekšā"
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
            "pēc ēšanas"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "nach"
          ],
          "red": [
            "visām vietām"
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

## Finding 33

**Audit ID:** `LRB071-0033`
**Finding Stable ID:** `g2/a1/lb|a1-nach|a1.card.a1-nach.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0091`
**Lang:** lb
**Card:** `a1-nach`
**Field / path:** `a1.card.a1-nach.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** uz • pēc
**DE reference (read-only):** nach
**CURRENT (captured scope):** Uz • Pēc
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-nach / a1.card.a1-nach.study.translation: exact Luxembourgish wording for German 'nach' (Latvian 'uz • pēc') is not established by the supplied evidence; production currently has 'Uz • Pēc' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nach",
  "lv": "Uz • Pēc",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "Uz • Pēc",
    "explanation": [
      "Haaptidee: nach bedeit \"op hin\" mat Plazen a \"no\" mat Zäit oder Reiefolleg.",
      "Mat Stied an Länner ouni Artikel ass nach dacks \"op hin\".",
      "Ar wilu nach nozīmē pēc.",
      "Frāzē heem Tas nozīmē uz mājām."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Es braucu uz Berlīni."
      },
      {
        "de": "Wir gehen nach Hause.",
        "lv": "Mir ginn heem."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Pēc ēšanas mēs ejam pastaigāties."
      },
      {
        "de": "Es ist zehn nach acht.",
        "lv": "Ir desmit pari astoņiem."
      }
    ],
    "comparison": [
      {
        "word": "nach",
        "meaning": "Uz/pēc",
        "example": "Ech fuer no Berlin."
      },
      {
        "word": "zu",
        "meaning": "CAA -",
        "example": "Ech ginn zum Dokter."
      },
      {
        "word": "in",
        "meaning": "Iekšā / uz vietu ar artikulu",
        "example": "Ech ginn an d'Schoul."
      },
      {
        "word": "vor",
        "meaning": "Pirms / priekšā",
        "example": "Vir dem Iessen wäsch ech d'Hänner."
      }
    ],
    "tip": {
      "text": "Atceries: nach Hause; nach Berlin; pēc ēšanas."
    },
    "important": [
      "nach gëtt net mat all Plazen benotzt.",
      "Zu der Schoul geet normalerweis \"in die Schule\", net \"nach Schule\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "nach",
          "Galvenā"
        ],
        "purple": [
          "uz",
          "pēc",
          "uz mājām"
        ],
        "green": [
          "pilsētām",
          "valstīm",
          "laiku"
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
              "uz"
            ],
            "green": [
              "Berlīni"
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
              "Mir"
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
              "pēc"
            ],
            "yellow": [
              "ēšanas"
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
              "pāri"
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
              "uz",
              "pēc"
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
              "CAA",
              "CAA"
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
              "iekšā"
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
              "pirms",
              "priekšā"
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
            "pēc ēšanas"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "nach"
          ],
          "red": [
            "visām vietām"
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

## Finding 34

**Audit ID:** `LRB071-0034`
**Finding Stable ID:** `g2/a1/lb|a1-natuerlich|a1.card.a1-natuerlich.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0092`
**Lang:** lb
**Card:** `a1-natuerlich`
**Field / path:** `a1.card.a1-natuerlich.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** protams • dabisks
**DE reference (read-only):** natürlich
**CURRENT (captured scope):** Protams • DABISKS
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-natuerlich / a1.card.a1-natuerlich.native: exact Luxembourgish wording for German 'natürlich' (Latvian 'protams • dabisks') is not established by the supplied evidence; production currently has 'Protams • DABISKS' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "natürlich",
  "lv": "Protams • DABISKS",
  "level": "A1",
  "study": {
    "id": "a1-natuerlich",
    "layout": "standardStudy",
    "translation": "Protams • DABISKS",
    "explanation": [
      "Galvenā doma: selbstverständlich kā apstākē vārds nozīmē protams, kā īpašības vārds nozīmē dabisks.",
      "Sarunā, apstiprinot kau ko, naturel = protams (Arrivée? – Bien sûr! = Vai nāc līdzi? – Protams!).",
      "Runājot par dabu, izcelsmi vai īpašībām, selbstverständlich = dabisks (naturschönheit = dabisks skaistums).",
      "Kontext (atbilde/apstiprinājums vai apraksts) parāda pareizo nozīmi."
    ],
    "examples": [
      {
        "de": "Kommst du mit? – Natürlich!",
        "lv": "Vai nāc līdzi? – Proclamatioun!"
      },
      {
        "de": "Das ist eine natürliche Reaktion.",
        "lv": "Et ass en Dënschdeg de Moien."
      },
      {
        "de": "Natürlich helfe ich dir.",
        "lv": "Protams, es tev palīdzēšu."
      },
      {
        "de": "Sie hat natürliche rote Haare.",
        "lv": "Hie war e lëtzebuergesche Foussballspiller."
      },
      {
        "de": "Natürlich kann ich das machen.",
        "lv": "Protams, ass to varu izdarīt."
      },
      {
        "de": "Das ist ganz natürlich.",
        "lv": "TAS ir pilnīgi dabiski/normāli."
      }
    ],
    "tip": [
      "Wéi eenzel Wuert, Bekräftegung oder Äntwert → natierlech.",
      "Niewent Nomen, d'Herkunft oder Eegeschaften beschreiwen → natierlech."
    ],
    "important": [
      "natürlich = natierlech (Zäitomständ, Bekräftegung) ODER natierlech (Adjektiv).",
      "Natürlich! wéi eenzel Rufwuert ëmmer = natierlech!"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā"
        ],
        "purple": [
          "protams",
          "dabisks"
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
              "Vai"
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
              "ass"
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
              "protams"
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
              "Hie"
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
              "protams"
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
              "dabiski"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "protams"
          ]
        },
        {
          "green": [
            "dabisks"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "protams",
            "dabisks"
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

## Finding 35

**Audit ID:** `LRB071-0035`
**Finding Stable ID:** `g2/a1/lb|a1-natuerlich|a1.card.a1-natuerlich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0093`
**Lang:** lb
**Card:** `a1-natuerlich`
**Field / path:** `a1.card.a1-natuerlich.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** protams • dabisks
**DE reference (read-only):** natürlich
**CURRENT (captured scope):** Protams • DABISKS
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-natuerlich / a1.card.a1-natuerlich.study.translation: exact Luxembourgish wording for German 'natürlich' (Latvian 'protams • dabisks') is not established by the supplied evidence; production currently has 'Protams • DABISKS' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "natürlich",
  "lv": "Protams • DABISKS",
  "level": "A1",
  "study": {
    "id": "a1-natuerlich",
    "layout": "standardStudy",
    "translation": "Protams • DABISKS",
    "explanation": [
      "Galvenā doma: selbstverständlich kā apstākē vārds nozīmē protams, kā īpašības vārds nozīmē dabisks.",
      "Sarunā, apstiprinot kau ko, naturel = protams (Arrivée? – Bien sûr! = Vai nāc līdzi? – Protams!).",
      "Runājot par dabu, izcelsmi vai īpašībām, selbstverständlich = dabisks (naturschönheit = dabisks skaistums).",
      "Kontext (atbilde/apstiprinājums vai apraksts) parāda pareizo nozīmi."
    ],
    "examples": [
      {
        "de": "Kommst du mit? – Natürlich!",
        "lv": "Vai nāc līdzi? – Proclamatioun!"
      },
      {
        "de": "Das ist eine natürliche Reaktion.",
        "lv": "Et ass en Dënschdeg de Moien."
      },
      {
        "de": "Natürlich helfe ich dir.",
        "lv": "Protams, es tev palīdzēšu."
      },
      {
        "de": "Sie hat natürliche rote Haare.",
        "lv": "Hie war e lëtzebuergesche Foussballspiller."
      },
      {
        "de": "Natürlich kann ich das machen.",
        "lv": "Protams, ass to varu izdarīt."
      },
      {
        "de": "Das ist ganz natürlich.",
        "lv": "TAS ir pilnīgi dabiski/normāli."
      }
    ],
    "tip": [
      "Wéi eenzel Wuert, Bekräftegung oder Äntwert → natierlech.",
      "Niewent Nomen, d'Herkunft oder Eegeschaften beschreiwen → natierlech."
    ],
    "important": [
      "natürlich = natierlech (Zäitomständ, Bekräftegung) ODER natierlech (Adjektiv).",
      "Natürlich! wéi eenzel Rufwuert ëmmer = natierlech!"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā"
        ],
        "purple": [
          "protams",
          "dabisks"
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
              "Vai"
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
              "ass"
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
              "protams"
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
              "Hie"
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
              "protams"
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
              "dabiski"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "protams"
          ]
        },
        {
          "green": [
            "dabisks"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "protams",
            "dabisks"
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

## Finding 36

**Audit ID:** `LRB071-0036`
**Finding Stable ID:** `g2/a1/lb|a1-neu|a1.card.a1-neu.study.explanation[5]|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0094`
**Lang:** lb
**Card:** `a1-neu`
**Field / path:** `a1.card.a1-neu.study.explanation[5]`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** Pretstats ir alt (vecs); lietvārds das Neue nozīmē jaunumu.
**DE reference (read-only):** neu
**CURRENT (captured scope):** Pretstats ir al (vecs) • Lietvārds déi nei nozīmē jaunumu.
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-neu / a1.card.a1-neu.study.explanation[5]: exact Luxembourgish wording for German 'neu' (Latvian 'Pretstats ir alt (vecs); lietvārds das Neue nozīmē jaunumu.') is not established by the supplied evidence; production currently has 'Pretstats ir al (vecs) • Lietvārds déi nei nozīmē jaunumu.' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "neu",
  "lv": "Jauns (par lietām)",
  "level": "A1",
  "study": {
    "id": "a1-neu",
    "layout": "standardStudy",
    "translation": "Jauns (par lietām)",
    "explanation": [
      "Galvenā doma: neu nozīmē jauns lietas ziệā — nesen radīts, iegādāts vai pirmoreiz izmantots.",
      "Neu raksturo lassenas, ierīces, ap .ērbu, māju, ideju u.tml. — ne cilvēka vai dzīvnieka vecumu.",
      "Latviešu valodā vārdam jauns ir divas nozīmes: jauns vecumā (jonk) en jauns/nesen radīts (nei).",
      "Par cilvēka vai dzīvnieka vecumu lieto young, ne new.",
      "Neu lieto arī pārnestā nozīmē: jauns darbs, jauna informācija, jauns sākums.",
      "Pretstats ir al (vecs) • Lietvārds déi nei nozīmē jaunumu."
    ],
    "examples": [
      {
        "de": "Mein Handy ist neu.",
        "lv": "Man's phone ir jauns."
      },
      {
        "de": "Wir haben ein neues Auto.",
        "lv": "Mums ir jauna automašīna."
      },
      {
        "de": "Das ist meine neue Wohnung.",
        "lv": "Tas ir mans jaunais dzīvoklis."
      },
      {
        "de": "Ich habe neue Schuhe gekauft.",
        "lv": "Es nopirku jaunas kurpes."
      },
      {
        "de": "Das ist eine neue Idee.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Er hat einen neuen Job.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Was gibt es Neues?",
        "lv": "Kas jauns?"
      }
    ],
    "tip": [
      "neu ass fir Saachen, Geräter an Neiheeten — wann et ëm d'Alter vun enger Persoun geet, benotz jung.",
      "Géigesat: neu ↔ alt (nei ↔ al)."
    ],
    "important": [
      "neu beschreift Saachen an Neiheeten, net d'Alter vun enger Persoun oder engem Dier.",
      "Fir d'Alter vun enger Persoun oder engem Dier benotz jung, net neu.",
      "Falsch: Meine Schwester ist neu. → Richteg: Meine Schwester ist jung."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "neu"
        ],
        "purple": [
          "jauns"
        ],
        "green": [
          "Galvenā"
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
              "jauns"
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
              "jauna"
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
              "jaunais"
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
              "jaunas"
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
              "Dat"
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
              "Dat"
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
              "jauns"
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

## Finding 37

**Audit ID:** `LRB071-0037`
**Finding Stable ID:** `g2/a1/lb|a1-nur-study|a1.card.a1-nur-study.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0095`
**Lang:** lb
**Card:** `a1-nur-study`
**Field / path:** `a1.card.a1-nur-study.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tikai • vienīgi
**DE reference (read-only):** nur
**CURRENT (captured scope):** Tikai • Wienīgi
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-nur-study / a1.card.a1-nur-study.native: exact Luxembourgish wording for German 'nur' (Latvian 'tikai • vienīgi') is not established by the supplied evidence; production currently has 'Tikai • Wienīgi' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nur",
  "lv": "Tikai • Wienīgi",
  "level": "A1",
  "study": {
    "id": "a1-nur-study",
    "layout": "standardStudy",
    "translation": "Tikai • Wienīgi",
    "explanation": [
      "Haaptidee: Beschränkt d'Quantitéit, d'Zuel vun Leit, d'Choise oder d'Méiglechkeeten.",
      "Nëmmen Galvenokārt nozīmē: ierobežots daudzums vai izvēle.",
      "Dacks karakteriséiert: Wéi vill, wat genau oder wien de Eenzegen.",
      "Nëmmen nozīmē tikai, vienīgi, nekas vairāk: tas ierobežo daudzumu vai izvēli."
    ],
    "examples": [
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Man ir tikai desmit eiro."
      },
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Man ir tikai desmit eiro."
      },
      {
        "de": "Nur du kannst mir helfen.",
        "lv": "Tikai du vari man palīdzēt."
      },
      {
        "de": "Ich möchte nur Kaffee.",
        "lv": "Esch gribu tikai kafiju."
      },
      {
        "de": "Ich habe nur acht Euro.",
        "lv": "Deemno ass et wichteg ze wëssen, wéi et weidergeet."
      }
    ],
    "tip": [
      "Beschränkt d'Quantitéit, d'Zuel vun Leit, d'Choise oder d'Méiglechkeeten.",
      "Benotz nur, wann de Kontext dëser Bedeitong entsprécht."
    ],
    "important": [
      "De Lëtzebuergeschen \"just\" am Däitschen ass net ëmmer nur.",
      "nur = just / nëmmen."
    ],
    "sectionAccents": {
      "explanation": {
        "orange": [
          "Galvenā",
          "Galvenā"
        ],
        "green": [
          "vienīgi"
        ],
        "red": [
          "Tikai"
        ],
        "yellow": [
          "vienīgi",
          "tikai"
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
          "lv": {
            "purple": [
              "tikai"
            ]
          }
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ]
          }
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ]
          }
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ]
          }
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {
            "purple": [
              "Deemno"
            ]
          }
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

## Finding 38

**Audit ID:** `LRB071-0038`
**Finding Stable ID:** `g2/a1/lb|a1-nur-study|a1.card.a1-nur-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0096`
**Lang:** lb
**Card:** `a1-nur-study`
**Field / path:** `a1.card.a1-nur-study.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tikai • vienīgi
**DE reference (read-only):** nur
**CURRENT (captured scope):** Tikai • Wienīgi
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-nur-study / a1.card.a1-nur-study.study.translation: exact Luxembourgish wording for German 'nur' (Latvian 'tikai • vienīgi') is not established by the supplied evidence; production currently has 'Tikai • Wienīgi' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "nur",
  "lv": "Tikai • Wienīgi",
  "level": "A1",
  "study": {
    "id": "a1-nur-study",
    "layout": "standardStudy",
    "translation": "Tikai • Wienīgi",
    "explanation": [
      "Haaptidee: Beschränkt d'Quantitéit, d'Zuel vun Leit, d'Choise oder d'Méiglechkeeten.",
      "Nëmmen Galvenokārt nozīmē: ierobežots daudzums vai izvēle.",
      "Dacks karakteriséiert: Wéi vill, wat genau oder wien de Eenzegen.",
      "Nëmmen nozīmē tikai, vienīgi, nekas vairāk: tas ierobežo daudzumu vai izvēli."
    ],
    "examples": [
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Man ir tikai desmit eiro."
      },
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Man ir tikai desmit eiro."
      },
      {
        "de": "Nur du kannst mir helfen.",
        "lv": "Tikai du vari man palīdzēt."
      },
      {
        "de": "Ich möchte nur Kaffee.",
        "lv": "Esch gribu tikai kafiju."
      },
      {
        "de": "Ich habe nur acht Euro.",
        "lv": "Deemno ass et wichteg ze wëssen, wéi et weidergeet."
      }
    ],
    "tip": [
      "Beschränkt d'Quantitéit, d'Zuel vun Leit, d'Choise oder d'Méiglechkeeten.",
      "Benotz nur, wann de Kontext dëser Bedeitong entsprécht."
    ],
    "important": [
      "De Lëtzebuergeschen \"just\" am Däitschen ass net ëmmer nur.",
      "nur = just / nëmmen."
    ],
    "sectionAccents": {
      "explanation": {
        "orange": [
          "Galvenā",
          "Galvenā"
        ],
        "green": [
          "vienīgi"
        ],
        "red": [
          "Tikai"
        ],
        "yellow": [
          "vienīgi",
          "tikai"
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
          "lv": {
            "purple": [
              "tikai"
            ]
          }
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ]
          }
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ]
          }
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {
            "purple": [
              "tikai"
            ]
          }
        },
        {
          "de": {
            "orange": [
              "nur",
              "nur"
            ]
          },
          "lv": {
            "purple": [
              "Deemno"
            ]
          }
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

## Finding 39

**Audit ID:** `LRB071-0039`
**Finding Stable ID:** `g2/a1/lb|a1-oder|a1.card.a1-oder.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0097`
**Lang:** lb
**Card:** `a1-oder`
**Field / path:** `a1.card.a1-oder.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** vai • jeb
**DE reference (read-only):** oder
**CURRENT (captured scope):** Vai • Jeb
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-oder / a1.card.a1-oder.native: exact Luxembourgish wording for German 'oder' (Latvian 'vai • jeb') is not established by the supplied evidence; production currently has 'Vai • Jeb' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "oder",
  "lv": "Vai • Jeb",
  "level": "A1",
  "study": {
    "id": "a1-oder",
    "layout": "standardStudy",
    "translation": "Vai • Jeb",
    "explanation": [
      "Haaptidee: oder ass benotzt, wann mir ënnert zwee oder méi Méiglechkeeten wielen.",
      "Op Lëtzebuergesch bedeit oder dacks \"ob\".",
      "Dat ass net datselwecht wéi ob, dat indirekt Froen féiert.",
      "Sarunās oder war būt arī teikuma bijās: Dir kommt, oder?"
    ],
    "examples": [
      {
        "de": "Kaffee oder Tee?",
        "lv": "Kafiju vai tēju?"
      },
      {
        "de": "Heute oder morgen?",
        "lv": "Šodien vai rīt?"
      },
      {
        "de": "Willst du Pizza oder Salat?",
        "lv": "Vai du gribi picu vai salātus?"
      },
      {
        "de": "Du kommst, oder?",
        "lv": "Ass et, waat?"
      }
    ],
    "comparison": [
      {
        "word": "oder",
        "meaning": "Vai izvēlē",
        "example": "Kaffee oder Téi?"
      },
      {
        "word": "ob",
        "meaning": "Vai netiešā jautājumā",
        "example": "Ech weess net, ob hien kënnt."
      },
      {
        "word": "und",
        "meaning": "Un",
        "example": "Kaffee an Kéchen."
      },
      {
        "word": "aber",
        "meaning": "CAA -",
        "example": "Ech komm, mee méi spéit."
      }
    ],
    "tip": {
      "text": "Atceries: izvēle starp variantiem → oder."
    },
    "important": [
      "oder ass fir d'Auswiess: Kaffee oder Tee.",
      "An enger indirekt Fro ass \"ob\" normalerweis ob."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "oder",
          "ob"
        ],
        "purple": [
          "vai",
          "izvēlamies",
          "netiešu jautājumu"
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
          "lv": {
            "purple": [
              "vai"
            ],
            "yellow": [
              "Kafiju",
              "tēju"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {
            "purple": [
              "vai"
            ]
          }
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
          "lv": {
            "purple": [
              "vai"
            ],
            "yellow": [
              "picu",
              "salātus"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {
            "purple": [
              "Ass"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "oder"
            ]
          },
          "meaning": {
            "purple": [
              "vai",
              "izvēlē"
            ]
          },
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
          "meaning": {
            "purple": [
              "vai",
              "netiešā jautājumā"
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
              "und"
            ]
          },
          "meaning": {
            "purple": [
              "un"
            ]
          },
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
          "meaning": {
            "purple": [
              "CAA"
            ]
          },
          "example": {
            "yellow": [
              "aber"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "oder"
          ],
          "purple": [
            "izvēle",
            "variantiem"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "oder"
          ],
          "purple": [
            "izvēlei"
          ]
        },
        {
          "red": [
            "ob"
          ],
          "purple": [
            "netiešā jautājumā"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 40

**Audit ID:** `LRB071-0040`
**Finding Stable ID:** `g2/a1/lb|a1-oder|a1.card.a1-oder.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0098`
**Lang:** lb
**Card:** `a1-oder`
**Field / path:** `a1.card.a1-oder.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** vai • jeb
**DE reference (read-only):** oder
**CURRENT (captured scope):** Vai • Jeb
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-oder / a1.card.a1-oder.study.translation: exact Luxembourgish wording for German 'oder' (Latvian 'vai • jeb') is not established by the supplied evidence; production currently has 'Vai • Jeb' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "oder",
  "lv": "Vai • Jeb",
  "level": "A1",
  "study": {
    "id": "a1-oder",
    "layout": "standardStudy",
    "translation": "Vai • Jeb",
    "explanation": [
      "Haaptidee: oder ass benotzt, wann mir ënnert zwee oder méi Méiglechkeeten wielen.",
      "Op Lëtzebuergesch bedeit oder dacks \"ob\".",
      "Dat ass net datselwecht wéi ob, dat indirekt Froen féiert.",
      "Sarunās oder war būt arī teikuma bijās: Dir kommt, oder?"
    ],
    "examples": [
      {
        "de": "Kaffee oder Tee?",
        "lv": "Kafiju vai tēju?"
      },
      {
        "de": "Heute oder morgen?",
        "lv": "Šodien vai rīt?"
      },
      {
        "de": "Willst du Pizza oder Salat?",
        "lv": "Vai du gribi picu vai salātus?"
      },
      {
        "de": "Du kommst, oder?",
        "lv": "Ass et, waat?"
      }
    ],
    "comparison": [
      {
        "word": "oder",
        "meaning": "Vai izvēlē",
        "example": "Kaffee oder Téi?"
      },
      {
        "word": "ob",
        "meaning": "Vai netiešā jautājumā",
        "example": "Ech weess net, ob hien kënnt."
      },
      {
        "word": "und",
        "meaning": "Un",
        "example": "Kaffee an Kéchen."
      },
      {
        "word": "aber",
        "meaning": "CAA -",
        "example": "Ech komm, mee méi spéit."
      }
    ],
    "tip": {
      "text": "Atceries: izvēle starp variantiem → oder."
    },
    "important": [
      "oder ass fir d'Auswiess: Kaffee oder Tee.",
      "An enger indirekt Fro ass \"ob\" normalerweis ob."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "oder",
          "ob"
        ],
        "purple": [
          "vai",
          "izvēlamies",
          "netiešu jautājumu"
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
          "lv": {
            "purple": [
              "vai"
            ],
            "yellow": [
              "Kafiju",
              "tēju"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {
            "purple": [
              "vai"
            ]
          }
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
          "lv": {
            "purple": [
              "vai"
            ],
            "yellow": [
              "picu",
              "salātus"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {
            "purple": [
              "Ass"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "oder"
            ]
          },
          "meaning": {
            "purple": [
              "vai",
              "izvēlē"
            ]
          },
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
          "meaning": {
            "purple": [
              "vai",
              "netiešā jautājumā"
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
              "und"
            ]
          },
          "meaning": {
            "purple": [
              "un"
            ]
          },
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
          "meaning": {
            "purple": [
              "CAA"
            ]
          },
          "example": {
            "yellow": [
              "aber"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "oder"
          ],
          "purple": [
            "izvēle",
            "variantiem"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "oder"
          ],
          "purple": [
            "izvēlei"
          ]
        },
        {
          "red": [
            "ob"
          ],
          "purple": [
            "netiešā jautājumā"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 41

**Audit ID:** `LRB071-0041`
**Finding Stable ID:** `g2/a1/lb|a1-passen|a1.card.a1-passen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0099`
**Lang:** lb
**Card:** `a1-passen`
**Field / path:** `a1.card.a1-passen.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** derēt • piestāvēt
**DE reference (read-only):** passen
**CURRENT (captured scope):** Derēt • Piestāvēt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-passen / a1.card.a1-passen.native: exact Luxembourgish wording for German 'passen' (Latvian 'derēt • piestāvēt') is not established by the supplied evidence; production currently has 'Derēt • Piestāvēt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "passen",
  "lv": "Derēt • Piestāvēt",
  "level": "A1",
  "study": {
    "id": "a1-passen",
    "layout": "standardStudy",
    "translation": "Derēt • Piestāvēt",
    "explanation": [
      "Galvenā doma: pass nozīmē derēt, piestāvēt vai būt piemērotam.",
      "Par apenērbu pas bieži nozīmē derēt pēc izmēra.",
      "Par krāsām vai stilu pass nozīmē piestāvēt.",
      "De l'autre côté du miroir et de l'autre côté du miroir. ass = Tas der."
    ],
    "examples": [
      {
        "de": "Die Jacke passt mir.",
        "lv": "Jaka MAN DER."
      },
      {
        "de": "Das Kleid passt gut.",
        "lv": "Kleita labi der."
      },
      {
        "de": "Die Farbe passt zu dir.",
        "lv": "Šī krāsa tev piestāv."
      },
      {
        "de": "Das passt.",
        "lv": "TASK DER DA."
      }
    ],
    "comparison": [
      {
        "word": "passen",
        "meaning": "Derēt / piestāvēt",
        "example": "D'Jakkett passt mir."
      },
      {
        "word": "stehen",
        "meaning": "Piestāvēt / stāvēt",
        "example": "Rout steet dir gutt."
      },
      {
        "word": "geeignet sein",
        "meaning": "Būt piemērotam",
        "example": "Dat ass gëgent."
      },
      {
        "word": "funktionieren",
        "meaning": "CAA -",
        "example": "Dat funktionéiert."
      }
    ],
    "tip": {
      "text": "Atceries: Das passt. = Tas der."
    },
    "important": [
      "passen ass net just iwwert Kleeder.",
      "Et kann och bedeiwen, datt d'Zäit, de Plan oder d'Léisung passt."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "passen",
          "Galvenā"
        ],
        "purple": [
          "derēt",
          "piestāvēt",
          "piemērotam"
        ],
        "yellow": [
          "apenērbu",
          "krāsām",
          "stilu"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "passt"
            ],
            "yellow": [
              "Jacke"
            ]
          },
          "lv": {
            "purple": [
              "der"
            ],
            "yellow": [
              "Jaka"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "passt"
            ],
            "yellow": [
              "Kleid"
            ]
          },
          "lv": {
            "purple": [
              "der"
            ],
            "yellow": [
              "Kleita"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "passt"
            ],
            "yellow": [
              "Farbe"
            ]
          },
          "lv": {
            "purple": [
              "piestāv"
            ],
            "yellow": [
              "krāsa"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Das passt"
            ]
          },
          "lv": {
            "purple": [
              "TASK DER"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "passen"
            ]
          },
          "meaning": {
            "purple": [
              "derēt",
              "piestāvēt"
            ]
          },
          "example": {
            "blue": [
              "passt"
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
              "piestāvēt",
              "stāvēt"
            ]
          },
          "example": {
            "green": [
              "steht"
            ]
          }
        },
        {
          "word": {
            "green": [
              "geeignet sein"
            ]
          },
          "meaning": {
            "purple": [
              "piemērotam"
            ]
          },
          "example": {
            "yellow": [
              "geeignet"
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
              "CAA"
            ]
          },
          "example": {
            "red": [
              "funktioniert"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Das passt"
          ],
          "purple": [
            "tas der"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "passen"
          ],
          "yellow": [
            "apģērbu"
          ]
        },
        {
          "purple": [
            "laiks",
            "plāns",
            "risinājums",
            "der"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 42

**Audit ID:** `LRB071-0042`
**Finding Stable ID:** `g2/a1/lb|a1-passen|a1.card.a1-passen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0100`
**Lang:** lb
**Card:** `a1-passen`
**Field / path:** `a1.card.a1-passen.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** derēt • piestāvēt
**DE reference (read-only):** passen
**CURRENT (captured scope):** Derēt • Piestāvēt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-passen / a1.card.a1-passen.study.translation: exact Luxembourgish wording for German 'passen' (Latvian 'derēt • piestāvēt') is not established by the supplied evidence; production currently has 'Derēt • Piestāvēt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "passen",
  "lv": "Derēt • Piestāvēt",
  "level": "A1",
  "study": {
    "id": "a1-passen",
    "layout": "standardStudy",
    "translation": "Derēt • Piestāvēt",
    "explanation": [
      "Galvenā doma: pass nozīmē derēt, piestāvēt vai būt piemērotam.",
      "Par apenērbu pas bieži nozīmē derēt pēc izmēra.",
      "Par krāsām vai stilu pass nozīmē piestāvēt.",
      "De l'autre côté du miroir et de l'autre côté du miroir. ass = Tas der."
    ],
    "examples": [
      {
        "de": "Die Jacke passt mir.",
        "lv": "Jaka MAN DER."
      },
      {
        "de": "Das Kleid passt gut.",
        "lv": "Kleita labi der."
      },
      {
        "de": "Die Farbe passt zu dir.",
        "lv": "Šī krāsa tev piestāv."
      },
      {
        "de": "Das passt.",
        "lv": "TASK DER DA."
      }
    ],
    "comparison": [
      {
        "word": "passen",
        "meaning": "Derēt / piestāvēt",
        "example": "D'Jakkett passt mir."
      },
      {
        "word": "stehen",
        "meaning": "Piestāvēt / stāvēt",
        "example": "Rout steet dir gutt."
      },
      {
        "word": "geeignet sein",
        "meaning": "Būt piemērotam",
        "example": "Dat ass gëgent."
      },
      {
        "word": "funktionieren",
        "meaning": "CAA -",
        "example": "Dat funktionéiert."
      }
    ],
    "tip": {
      "text": "Atceries: Das passt. = Tas der."
    },
    "important": [
      "passen ass net just iwwert Kleeder.",
      "Et kann och bedeiwen, datt d'Zäit, de Plan oder d'Léisung passt."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "passen",
          "Galvenā"
        ],
        "purple": [
          "derēt",
          "piestāvēt",
          "piemērotam"
        ],
        "yellow": [
          "apenērbu",
          "krāsām",
          "stilu"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "passt"
            ],
            "yellow": [
              "Jacke"
            ]
          },
          "lv": {
            "purple": [
              "der"
            ],
            "yellow": [
              "Jaka"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "passt"
            ],
            "yellow": [
              "Kleid"
            ]
          },
          "lv": {
            "purple": [
              "der"
            ],
            "yellow": [
              "Kleita"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "passt"
            ],
            "yellow": [
              "Farbe"
            ]
          },
          "lv": {
            "purple": [
              "piestāv"
            ],
            "yellow": [
              "krāsa"
            ]
          }
        },
        {
          "de": {
            "blue": [
              "Das passt"
            ]
          },
          "lv": {
            "purple": [
              "TASK DER"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "passen"
            ]
          },
          "meaning": {
            "purple": [
              "derēt",
              "piestāvēt"
            ]
          },
          "example": {
            "blue": [
              "passt"
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
              "piestāvēt",
              "stāvēt"
            ]
          },
          "example": {
            "green": [
              "steht"
            ]
          }
        },
        {
          "word": {
            "green": [
              "geeignet sein"
            ]
          },
          "meaning": {
            "purple": [
              "piemērotam"
            ]
          },
          "example": {
            "yellow": [
              "geeignet"
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
              "CAA"
            ]
          },
          "example": {
            "red": [
              "funktioniert"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Das passt"
          ],
          "purple": [
            "tas der"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "passen"
          ],
          "yellow": [
            "apģērbu"
          ]
        },
        {
          "purple": [
            "laiks",
            "plāns",
            "risinājums",
            "der"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 43

**Audit ID:** `LRB071-0043`
**Finding Stable ID:** `g2/a1/lb|a1-probieren|a1.card.a1-probieren.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0101`
**Lang:** lb
**Card:** `a1-probieren`
**Field / path:** `a1.card.a1-probieren.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** izmēģināt • nogaršot
**DE reference (read-only):** probieren
**CURRENT (captured scope):** Izmēṅināt • Nogaršot
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-probieren / a1.card.a1-probieren.native: exact Luxembourgish wording for German 'probieren' (Latvian 'izmēģināt • nogaršot') is not established by the supplied evidence; production currently has 'Izmēṅināt • Nogaršot' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "probieren",
  "lv": "Izmēṅināt • Nogaršot",
  "level": "A1",
  "study": {
    "id": "a1-probieren",
    "layout": "standardStudy",
    "translation": "Izmēṅināt • Nogaršot",
    "explanation": [
      "Galvenā doma: probéieren nozīmē izmēṭināt vai nogaršot.",
      "Jo, ech sinn hei fir ze bleiwen, probéiert et net ze verpassen.",
      "Ja runa ir par darbību, metodi vai lietu, versuch nozīmē izmē.",
      "Tas nav tas pats, kas check, kas nozīmē pārbaudīt rūpīgāk."
    ],
    "examples": [
      {
        "de": "Probier mal die Suppe!",
        "lv": "Pagaršo zupu!"
      },
      {
        "de": "Ich möchte den Kuchen probieren.",
        "lv": "Es gribu nogaršot kūku."
      },
      {
        "de": "Wir probieren eine neue Methode.",
        "lv": "Mēs izmēɐinām jaunu metodi."
      },
      {
        "de": "Kann ich die Jacke anprobieren?",
        "lv": "Vai es varu pielaikot jaku?"
      }
    ],
    "comparison": [
      {
        "word": "probieren",
        "meaning": "Izmē-Claudeināt / nogaršot",
        "example": "Probéier mol d'Zopp!"
      },
      {
        "word": "versuchen",
        "meaning": "CAA -",
        "example": "Ech probéieren et."
      },
      {
        "word": "prüfen",
        "meaning": "CAA -",
        "example": "Ech préif d'Rechnung."
      },
      {
        "word": "anprobieren",
        "meaning": "CAA -",
        "example": "Ech probéier d'Jakkett un."
      }
    ],
    "tip": {
      "text": "Atceries: ēdiens → probieren = nogaršot."
    },
    "important": [
      "probieren ass net d'Haaptwuert fir eng offiziell Iwwerpréiwung.",
      "Dokumenter oder Rechnung priwfen ass normalerweis prüfen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "probéieren",
          "Galvenā"
        ],
        "purple": [
          "izmēṭināt",
          "nogaršot",
          "pārbaudīt"
        ],
        "yellow": [
          "Galvenā",
          "Galvenā",
          "metodi",
          "lietu"
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
              "pagaršo"
            ],
            "yellow": [
              "zupu"
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
              "nogaršot"
            ],
            "yellow": [
              "kūku"
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
              "izmēɐinām"
            ],
            "yellow": [
              "metodi"
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
              "pielaikot"
            ],
            "yellow": [
              "jaku"
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
              "Izmē",
              "nogaršot"
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
              "CAA"
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
              "CAA"
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
              "CAA"
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
          "yellow": [
            "ēdiens"
          ],
          "purple": [
            "nogaršot"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "probieren"
          ],
          "red": [
            "pārbaudei"
          ]
        },
        {
          "red": [
            "prüfen"
          ],
          "purple": [
            "pārbaudīt"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 44

**Audit ID:** `LRB071-0044`
**Finding Stable ID:** `g2/a1/lb|a1-probieren|a1.card.a1-probieren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0102`
**Lang:** lb
**Card:** `a1-probieren`
**Field / path:** `a1.card.a1-probieren.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** izmēģināt • nogaršot
**DE reference (read-only):** probieren
**CURRENT (captured scope):** Izmēṅināt • Nogaršot
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-probieren / a1.card.a1-probieren.study.translation: exact Luxembourgish wording for German 'probieren' (Latvian 'izmēģināt • nogaršot') is not established by the supplied evidence; production currently has 'Izmēṅināt • Nogaršot' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "probieren",
  "lv": "Izmēṅināt • Nogaršot",
  "level": "A1",
  "study": {
    "id": "a1-probieren",
    "layout": "standardStudy",
    "translation": "Izmēṅināt • Nogaršot",
    "explanation": [
      "Galvenā doma: probéieren nozīmē izmēṭināt vai nogaršot.",
      "Jo, ech sinn hei fir ze bleiwen, probéiert et net ze verpassen.",
      "Ja runa ir par darbību, metodi vai lietu, versuch nozīmē izmē.",
      "Tas nav tas pats, kas check, kas nozīmē pārbaudīt rūpīgāk."
    ],
    "examples": [
      {
        "de": "Probier mal die Suppe!",
        "lv": "Pagaršo zupu!"
      },
      {
        "de": "Ich möchte den Kuchen probieren.",
        "lv": "Es gribu nogaršot kūku."
      },
      {
        "de": "Wir probieren eine neue Methode.",
        "lv": "Mēs izmēɐinām jaunu metodi."
      },
      {
        "de": "Kann ich die Jacke anprobieren?",
        "lv": "Vai es varu pielaikot jaku?"
      }
    ],
    "comparison": [
      {
        "word": "probieren",
        "meaning": "Izmē-Claudeināt / nogaršot",
        "example": "Probéier mol d'Zopp!"
      },
      {
        "word": "versuchen",
        "meaning": "CAA -",
        "example": "Ech probéieren et."
      },
      {
        "word": "prüfen",
        "meaning": "CAA -",
        "example": "Ech préif d'Rechnung."
      },
      {
        "word": "anprobieren",
        "meaning": "CAA -",
        "example": "Ech probéier d'Jakkett un."
      }
    ],
    "tip": {
      "text": "Atceries: ēdiens → probieren = nogaršot."
    },
    "important": [
      "probieren ass net d'Haaptwuert fir eng offiziell Iwwerpréiwung.",
      "Dokumenter oder Rechnung priwfen ass normalerweis prüfen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "probéieren",
          "Galvenā"
        ],
        "purple": [
          "izmēṭināt",
          "nogaršot",
          "pārbaudīt"
        ],
        "yellow": [
          "Galvenā",
          "Galvenā",
          "metodi",
          "lietu"
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
              "pagaršo"
            ],
            "yellow": [
              "zupu"
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
              "nogaršot"
            ],
            "yellow": [
              "kūku"
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
              "izmēɐinām"
            ],
            "yellow": [
              "metodi"
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
              "pielaikot"
            ],
            "yellow": [
              "jaku"
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
              "Izmē",
              "nogaršot"
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
              "CAA"
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
              "CAA"
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
              "CAA"
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
          "yellow": [
            "ēdiens"
          ],
          "purple": [
            "nogaršot"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "probieren"
          ],
          "red": [
            "pārbaudei"
          ]
        },
        {
          "red": [
            "prüfen"
          ],
          "purple": [
            "pārbaudīt"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 45

**Audit ID:** `LRB071-0045`
**Finding Stable ID:** `g2/a1/lb|a1-seite|a1.card.a1-seite.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0103`
**Lang:** lb
**Card:** `a1-seite`
**Field / path:** `a1.card.a1-seite.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** lappuse • puse
**DE reference (read-only):** Seite
**CURRENT (captured scope):** Lappuse • Puse
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-seite / a1.card.a1-seite.native: exact Luxembourgish wording for German 'Seite' (Latvian 'lappuse • puse') is not established by the supplied evidence; production currently has 'Lappuse • Puse' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Seite",
  "de_article": "die",
  "de_plural": "die Seiten",
  "lv": "Lappuse • Puse",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "Lappuse • Puse",
    "explanation": [
      "Galvenā doma: d'Säit war nozīmēt grāmatas/dokumenta lappusi vai kādas lietas pusi/malu.",
      "Grāmatā, žurnālā vai tīmekṇa vietnē der Seite = lappuse (Seite 5 = 5. lappuse).",
      "Telpiskā nozīmē de côté = puse (lénks = kreisajā pusē).",
      "Pārnestā nozīmē d'Säit war nozīmēt arī pusi konfliktā vai domās (op menger Säit = manā pusē).",
      "(grāmata/lasīšana vai novietojums/attiecības) parāda pareizo nozīmi.",
      "Daudzskaitlī abām nozīmēmēm: déi Säiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Divisioun (Divisiounen)."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Kreisajā pusē ir Parken."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Grammatai ir 200 lappuses."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "Otrā ielas pusē."
      }
    ],
    "tip": [
      "Wann et ëm e Bréck oder d'Liescht geet → Säit. Wann et ëm Positioun, Richtung oder Bezéungen geet → Säit.",
      "Seite X an engem Bréck ass ëmmer eng Säit, net eng Säit."
    ],
    "important": [
      "die Seite = Säit ODER Säit — de Kontext ënnerscheet.",
      "Daudzskaitlī abām nozīmēmēm: déi Säiten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "Seite"
        ],
        "purple": [
          "lappuse",
          "puse"
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
              "Divisioun"
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
              "pusē"
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
              "Dat"
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
              "Dat"
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
              "lappuses"
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
              "pusē"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "lappuse"
          ],
          "green": [
            "puse"
          ]
        },
        {
          "blue": [
            "Seite"
          ],
          "purple": [
            "lappuse"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "lappuse",
            "puse"
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

## Finding 46

**Audit ID:** `LRB071-0046`
**Finding Stable ID:** `g2/a1/lb|a1-seite|a1.card.a1-seite.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0104`
**Lang:** lb
**Card:** `a1-seite`
**Field / path:** `a1.card.a1-seite.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** lappuse • puse
**DE reference (read-only):** Seite
**CURRENT (captured scope):** Lappuse • Puse
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-seite / a1.card.a1-seite.study.translation: exact Luxembourgish wording for German 'Seite' (Latvian 'lappuse • puse') is not established by the supplied evidence; production currently has 'Lappuse • Puse' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Seite",
  "de_article": "die",
  "de_plural": "die Seiten",
  "lv": "Lappuse • Puse",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "Lappuse • Puse",
    "explanation": [
      "Galvenā doma: d'Säit war nozīmēt grāmatas/dokumenta lappusi vai kādas lietas pusi/malu.",
      "Grāmatā, žurnālā vai tīmekṇa vietnē der Seite = lappuse (Seite 5 = 5. lappuse).",
      "Telpiskā nozīmē de côté = puse (lénks = kreisajā pusē).",
      "Pārnestā nozīmē d'Säit war nozīmēt arī pusi konfliktā vai domās (op menger Säit = manā pusē).",
      "(grāmata/lasīšana vai novietojums/attiecības) parāda pareizo nozīmi.",
      "Daudzskaitlī abām nozīmēmēm: déi Säiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Divisioun (Divisiounen)."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Kreisajā pusē ir Parken."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Grammatai ir 200 lappuses."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "Otrā ielas pusē."
      }
    ],
    "tip": [
      "Wann et ëm e Bréck oder d'Liescht geet → Säit. Wann et ëm Positioun, Richtung oder Bezéungen geet → Säit.",
      "Seite X an engem Bréck ass ëmmer eng Säit, net eng Säit."
    ],
    "important": [
      "die Seite = Säit ODER Säit — de Kontext ënnerscheet.",
      "Daudzskaitlī abām nozīmēmēm: déi Säiten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "Seite"
        ],
        "purple": [
          "lappuse",
          "puse"
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
              "Divisioun"
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
              "pusē"
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
              "Dat"
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
              "Dat"
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
              "lappuses"
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
              "pusē"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "lappuse"
          ],
          "green": [
            "puse"
          ]
        },
        {
          "blue": [
            "Seite"
          ],
          "purple": [
            "lappuse"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "lappuse",
            "puse"
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

## Finding 47

**Audit ID:** `LRB071-0047`
**Finding Stable ID:** `g2/a1/lb|a1-sicher|a1.card.a1-sicher.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0105`
**Lang:** lb
**Card:** `a1-sicher`
**Field / path:** `a1.card.a1-sicher.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** drošs • noteikti
**DE reference (read-only):** sicher
**CURRENT (captured scope):** Drošs • Noteikti
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-sicher / a1.card.a1-sicher.native: exact Luxembourgish wording for German 'sicher' (Latvian 'drošs • noteikti') is not established by the supplied evidence; production currently has 'Drošs • Noteikti' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sicher",
  "lv": "Drošs • Noteikti",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "Drošs • Noteikti",
    "explanation": [
      "Galvenā doma: safe kā īpašības vārds nozīmē drošs, kā apstākṇa vārds nozīmē noteikti/droši vien.",
      "Runājot par vietu, situāciju vai personu, safe = drošs (eng sécher Plaz = droša vieta).",
      "Als Bestätegung oder Assurance an engem Saz, sicher = sicher/natürlich (Das ist sicher wahr. > Indeed.)",
      "Sécher! kā atsevišˈa atbilde nozīmē protams!/droši vien!"
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "¿QUÉ ES DALLAS?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "¿Queréis queréis?"
      },
      {
        "de": "Er ist sicher zu Hause.",
        "lv": "D'Virfreed op d'Maison Relais ass grouss."
      },
      {
        "de": "Das ist eine sichere Lösung.",
        "lv": "Den Haaptuert ass Rouspert."
      },
      {
        "de": "Ich bin mir sicher.",
        "lv": "Esmu pārliecināts."
      },
      {
        "de": "Fahr sicher!",
        "lv": "Brauc droši!"
      }
    ],
    "tip": [
      "Fir eng Plaz oder Situatioun (Sécherhäit) → sécher.",
      "Wéi Iwwerzeegung oder Bekräftegung am Saz → sécherlech/wuel."
    ],
    "important": [
      "sicher = sécher (Adjektiv) ODER sécherlech/wuel (Zäitomständ).",
      "sich sicher sein = sécher sinn."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sicher"
        ],
        "purple": [
          "drošs",
          "noteikti"
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
              "¿QUÉ"
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
              "¿Queréis"
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
              "D'Virfreed"
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
              "Den"
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
              "pārliecināts"
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
              "droši"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "drošs"
          ]
        },
        {
          "green": [
            "noteikti",
            "droši vien"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "drošs",
            "noteikti",
            "droši vien"
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

## Finding 48

**Audit ID:** `LRB071-0048`
**Finding Stable ID:** `g2/a1/lb|a1-sicher|a1.card.a1-sicher.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0106`
**Lang:** lb
**Card:** `a1-sicher`
**Field / path:** `a1.card.a1-sicher.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** drošs • noteikti
**DE reference (read-only):** sicher
**CURRENT (captured scope):** Drošs • Noteikti
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-sicher / a1.card.a1-sicher.study.translation: exact Luxembourgish wording for German 'sicher' (Latvian 'drošs • noteikti') is not established by the supplied evidence; production currently has 'Drošs • Noteikti' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "sicher",
  "lv": "Drošs • Noteikti",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "Drošs • Noteikti",
    "explanation": [
      "Galvenā doma: safe kā īpašības vārds nozīmē drošs, kā apstākṇa vārds nozīmē noteikti/droši vien.",
      "Runājot par vietu, situāciju vai personu, safe = drošs (eng sécher Plaz = droša vieta).",
      "Als Bestätegung oder Assurance an engem Saz, sicher = sicher/natürlich (Das ist sicher wahr. > Indeed.)",
      "Sécher! kā atsevišˈa atbilde nozīmē protams!/droši vien!"
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "¿QUÉ ES DALLAS?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "¿Queréis queréis?"
      },
      {
        "de": "Er ist sicher zu Hause.",
        "lv": "D'Virfreed op d'Maison Relais ass grouss."
      },
      {
        "de": "Das ist eine sichere Lösung.",
        "lv": "Den Haaptuert ass Rouspert."
      },
      {
        "de": "Ich bin mir sicher.",
        "lv": "Esmu pārliecināts."
      },
      {
        "de": "Fahr sicher!",
        "lv": "Brauc droši!"
      }
    ],
    "tip": [
      "Fir eng Plaz oder Situatioun (Sécherhäit) → sécher.",
      "Wéi Iwwerzeegung oder Bekräftegung am Saz → sécherlech/wuel."
    ],
    "important": [
      "sicher = sécher (Adjektiv) ODER sécherlech/wuel (Zäitomständ).",
      "sich sicher sein = sécher sinn."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sicher"
        ],
        "purple": [
          "drošs",
          "noteikti"
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
              "¿QUÉ"
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
              "¿Queréis"
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
              "D'Virfreed"
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
              "Den"
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
              "pārliecināts"
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
              "droši"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "drošs"
          ]
        },
        {
          "green": [
            "noteikti",
            "droši vien"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "drošs",
            "noteikti",
            "droši vien"
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

## Finding 49

**Audit ID:** `LRB071-0049`
**Finding Stable ID:** `g2/a1/lb|a1-ueber|a1.card.a1-ueber.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0107`
**Lang:** lb
**Card:** `a1-ueber`
**Field / path:** `a1.card.a1-ueber.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** virs • par
**DE reference (read-only):** über
**CURRENT (captured scope):** Virs • PAR
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ueber / a1.card.a1-ueber.native: exact Luxembourgish wording for German 'über' (Latvian 'virs • par') is not established by the supplied evidence; production currently has 'Virs • PAR' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

Virs • PAR

---

## Finding 50

**Audit ID:** `LRB071-0050`
**Finding Stable ID:** `g2/a1/lb|a1-ueber|a1.card.a1-ueber.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0108`
**Lang:** lb
**Card:** `a1-ueber`
**Field / path:** `a1.card.a1-ueber.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** virs • par
**DE reference (read-only):** über
**CURRENT (captured scope):** Virs • PAR
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ueber / a1.card.a1-ueber.study.translation: exact Luxembourgish wording for German 'über' (Latvian 'virs • par') is not established by the supplied evidence; production currently has 'Virs • PAR' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

Virs • PAR

---

