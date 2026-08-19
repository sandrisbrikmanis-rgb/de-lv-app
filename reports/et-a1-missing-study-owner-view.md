# ET–DE A1 — MISSING STUDY OWNER VIEW (10 kartītes)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `8c82df0454dad44636830145e26e5b8e52aa4184`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-ba9e`
**SCOPE:** Trūkstošie Study objekti (`124/134 → 134`)
**Findings:** **10** (ET-A1-0002, 0003, 0006–0013)

> **DE = STRICT READ-ONLY.** Production apply **vēl neveikt**.
> LV MASTER Study = struktūras un DE etalons; OWNER piegādā **estisku** Study saturu.
> Pēc OWNER lēmumiem — COPY-ONLY apply + sectionAccents sync + targeted regression.

## Īsais saraksts

- **ET-A1-0002** `a1-Besuch-87` · DE: **Besuch** · ET flashcard: külaskäik
- **ET-A1-0003** `a1-besuchen-89` · DE: **besuchen** · ET flashcard: külastama • külla minema
- **ET-A1-0006** `a1-Fußball-218` · DE: **Fußball** · ET flashcard: jalgpall
- **ET-A1-0007** `a1-ganz-219` · DE: **ganz** · ET flashcard: terve
- **ET-A1-0008** `a1-gefallen-225` · DE: **gefallen** · ET flashcard: meeldima
- **ET-A1-0009** `a1-Geschichte-233` · DE: **Geschichte** · ET flashcard: lugu • ajalugu
- **ET-A1-0010** `a1-Geschwister-234` · DE: **Geschwister** · ET flashcard: õed-vennad
- **ET-A1-0011** `a1-Großeltern-251` · DE: **Großeltern** · ET flashcard: vanavanemad
- **ET-A1-0012** `a1-Hand-267` · DE: **Hand** · ET flashcard: käsi (kämmal)
- **ET-A1-0013** `a1-hübsch-288` · DE: **hübsch** · ET flashcard: nägus • kena

## ET-A1-0002 — a1-Besuch-87

**Audit ID:** ET-A1-0002
**Card ID:** `a1-Besuch-87`
**Field/path:** `a1-Besuch-87.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Besuch
**ET flashcard `lv` (esošais):** külaskäik
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam Besuch

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-besuch`
**layout:** `standardStudy`
**translation (LV):** apmeklējums

**explanation (LV):**
- Galvenā doma: der Besuch nozīmē apmeklējumu, vizīti vai apciemojumu.
- Ja runa ir par vietu vai pasākumu, latviski piemērots ir apmeklējums.
- Ja runa ir par cilvēka apmeklēšanu, latviski var teikt apciemojums vai vizīte.
- Daudzskaitlis ir die Besuche.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Der Besuch im Museum war interessant.`
   LV: Muzeja apmeklējums bija interesants.
2. DE: `Danke für deinen Besuch.`
   LV: Paldies par tavu apciemojumu.
3. DE: `Der Arzt macht einen Besuch.`
   LV: Ārsts dodas vizītē.

**comparison (DE nemainīt):**
1. **der Besuch** — apmeklējums • apciemojums • vizīte
   Piem.: `Danke für deinen Besuch. – Paldies par tavu apciemojumu.`
2. **der Besucher** — apmeklētājs
   Piem.: `Der Besucher wartet draußen. – Apmeklētājs gaida ārā.`
3. **besuchen** — apmeklēt • apciemot
   Piem.: `Ich besuche meine Großeltern. – Es apciemoju savus vecvecākus.`

**tip (LV):**
Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks.

**important (LV):**
- der Besuch nav tikai apciemojums; tas var būt arī apmeklējums vai vizīte.
- Daudzskaitlis: die Besuche.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
```json
{
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
```

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-besuch",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Der Besuch im Museum war interessant.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Danke für deinen Besuch.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Der Arzt macht einen Besuch.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "der Besuch",
      "meaning": "[OWNER: ET meaning]",
      "example": "Danke für deinen Besuch. – [OWNER: ET example]"
    },
    {
      "word": "der Besucher",
      "meaning": "[OWNER: ET meaning]",
      "example": "Der Besucher wartet draußen. – [OWNER: ET example]"
    },
    {
      "word": "besuchen",
      "meaning": "[OWNER: ET meaning]",
      "example": "Ich besuche meine Großeltern. – [OWNER: ET example]"
    }
  ],
  "tip": {
    "text": "[OWNER: ET tip]"
  },
  "important": [
    "[OWNER: ET important line]",
    "[OWNER: ET important line]"
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
```

---

## ET-A1-0003 — a1-besuchen-89

**Audit ID:** ET-A1-0003
**Card ID:** `a1-besuchen-89`
**Field/path:** `a1-besuchen-89.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** besuchen
**ET flashcard `lv` (esošais):** külastama • külla minema
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam besuchen

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-besuchen`
**layout:** `standardStudy`
**translation (LV):** apmeklēt

**explanation (LV):**
- Galvenā doma: besuchen lieto, apmeklējot vietu, pasākumu vai personu.
- Vietu, pasākumu vai kursu latviski parasti apmeklē.
- Ja besuchen attiecas uz cilvēku, latviski bieži dabiskāk ir apciemot.
- Vācu valodā besuchen lieto bez prievārda un ar akuzatīvu.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Ich besuche das Museum.`
   LV: Es apmeklēju muzeju.
2. DE: `Wir besuchen einen Deutschkurs.`
   LV: Mēs apmeklējam vācu valodas kursu.
3. DE: `Ich besuche meine Großeltern.`
   LV: Es apciemoju savus vecvecākus.

**comparison (DE nemainīt):**
1. **besuchen** — apmeklēt vietu vai pasākumu • apciemot personu
   Piem.: `Ich besuche meine Großeltern. – Es apciemoju savus vecvecākus.`
2. **treffen** — satikt
   Piem.: `Ich treffe meinen Freund. – Es satieku savu draugu.`
3. **zu jemandem gehen** — iet pie kāda
   Piem.: `Ich gehe zu meinem Freund. – Es eju pie sava drauga.`

**tip (LV):**
Atceries: vietu apmeklē, bet personu latviski bieži apciemo.

**important (LV):**
- besuchen lieto bez prievārda: Ich besuche meine Freundin.
- Latviešu tulkojums ir atkarīgs no objekta: apmeklēt vietu, apciemot personu.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
```json
{
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
```

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-besuchen",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Ich besuche das Museum.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Wir besuchen einen Deutschkurs.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Ich besuche meine Großeltern.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "besuchen",
      "meaning": "[OWNER: ET meaning]",
      "example": "Ich besuche meine Großeltern. – [OWNER: ET example]"
    },
    {
      "word": "treffen",
      "meaning": "[OWNER: ET meaning]",
      "example": "Ich treffe meinen Freund. – [OWNER: ET example]"
    },
    {
      "word": "zu jemandem gehen",
      "meaning": "[OWNER: ET meaning]",
      "example": "Ich gehe zu meinem Freund. – [OWNER: ET example]"
    }
  ],
  "tip": {
    "text": "[OWNER: ET tip]"
  },
  "important": [
    "[OWNER: ET important line]",
    "[OWNER: ET important line]"
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
```

---

## ET-A1-0006 — a1-Fußball-218

**Audit ID:** ET-A1-0006
**Card ID:** `a1-Fußball-218`
**Field/path:** `a1-Fußball-218.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Fußball
**ET flashcard `lv` (esošais):** jalgpall
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam Fußball

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-fussball-study`
**layout:** `standardStudy`
**translation (LV):** futbols

**explanation (LV):**
- Galvenā doma: Fußball visbiežāk nozīmē futbolu kā sporta veidu.
- Ar artikulu un skaitāmā nozīmē der Fußball var nozīmēt arī futbola bumbu.
- Daudzskaitlis die Fußbälle nozīmē futbola bumbas, nevis vairākus sporta veidus.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Ich spiele Fußball.`
   LV: es spēlēju futbolu.
2. DE: `Der Fußball liegt im Garten.`
   LV: futbola bumba atrodas dārzā.
3. DE: `Wir kaufen zwei Fußbälle.`
   LV: mēs pērkam divas futbola bumbas.

**comparison (DE nemainīt):**
1. **Fußball** — futbols kā sporta veids
   Piem.: `Ich spiele Fußball. – Es spēlēju futbolu.`
2. **der Fußball** — futbola bumba
   Piem.: `Der Fußball ist neu. – Futbola bumba ir jauna.`

**tip (LV):**
- Bez artikula spielen Fußball parasti nozīmē spēlēt futbolu.
- Skaitāmā nozīmē ein Fußball un die Fußbälle ir futbola bumba un futbola bumbas.

**important (LV):**
- die Fußbälle nozīmē futbola bumbas.
- Sporta veidu Fußball parasti lieto vienskaitlī.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
_(nav — kopēt no LV pēc ET Study teksta)_

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-fussball-study",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Ich spiele Fußball.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Der Fußball liegt im Garten.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Wir kaufen zwei Fußbälle.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "Fußball",
      "meaning": "[OWNER: ET meaning]",
      "example": "Ich spiele Fußball. – [OWNER: ET example]"
    },
    {
      "word": "der Fußball",
      "meaning": "[OWNER: ET meaning]",
      "example": "Der Fußball ist neu. – [OWNER: ET example]"
    }
  ],
  "tip": [
    "Bez artikula spielen Fußball parasti nozīmē spēlēt futbolu.",
    "Skaitāmā nozīmē ein Fußball un die Fußbälle ir futbola bumba un futbola bumbas."
  ],
  "important": [
    "[OWNER: ET important line]",
    "[OWNER: ET important line]"
  ]
}
```

---

## ET-A1-0007 — a1-ganz-219

**Audit ID:** ET-A1-0007
**Card ID:** `a1-ganz-219`
**Field/path:** `a1-ganz-219.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** ganz
**ET flashcard `lv` (esošais):** terve
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam ganz

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-ganz-study`
**layout:** `standardStudy`
**translation (LV):** vesels

**explanation (LV):**
- Galvenā doma: ganz kopā ar lietvārdu nozīmē vesels vai viss kopumā.
- Pirms īpašības vārda vai apstākļa vārda ganz var nozīmēt pilnīgi, pavisam vai diezgan.
- ganz nav tas pats, kas vietniekvārds alles.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Ich arbeite den ganzen Tag.`
   LV: es strādāju visu dienu.
2. DE: `Das ganze Haus ist sauber.`
   LV: visa māja ir tīra.
3. DE: `Das ist ganz sicher.`
   LV: tas ir pilnīgi droši.
4. DE: `Das Essen ist ganz gut.`
   LV: ēdiens ir diezgan labs.

**comparison (DE nemainīt):**
1. **ganz** — vesels • viss kopumā • pilnīgi
   Piem.: `der ganze Tag – visa diena`
2. **alles** — viss
   Piem.: `Alles ist gut. – Viss ir kārtībā.`

**tip (LV):**
- Lietvārda priekšā ganz bieži nozīmē viss vai vesels.
- Īpašības vārda priekšā ganz bieži nozīmē pilnīgi vai diezgan.

**important (LV):**
- der ganze Tag = visa diena.
- alles = viss kā vietniekvārds.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
_(nav — kopēt no LV pēc ET Study teksta)_

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-ganz-study",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Ich arbeite den ganzen Tag.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Das ganze Haus ist sauber.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Das ist ganz sicher.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Das Essen ist ganz gut.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "ganz",
      "meaning": "[OWNER: ET meaning]",
      "example": "der ganze Tag – [OWNER: ET example]"
    },
    {
      "word": "alles",
      "meaning": "[OWNER: ET meaning]",
      "example": "Alles ist gut. – [OWNER: ET example]"
    }
  ],
  "tip": [
    "Lietvārda priekšā ganz bieži nozīmē viss vai vesels.",
    "Īpašības vārda priekšā ganz bieži nozīmē pilnīgi vai diezgan."
  ],
  "important": [
    "[OWNER: ET important line]",
    "[OWNER: ET important line]"
  ]
}
```

---

## ET-A1-0008 — a1-gefallen-225

**Audit ID:** ET-A1-0008
**Card ID:** `a1-gefallen-225`
**Field/path:** `a1-gefallen-225.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** gefallen
**ET flashcard `lv` (esošais):** meeldima
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam gefallen

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-gefallen-study`
**layout:** `standardStudy`
**translation (LV):** patikt

**explanation (LV):**
- Galvenā doma: gefallen nozīmē patikt, bet vācu teikuma uzbūve atšķiras no latviešu valodas.
- Lieta, kas patīk, vāciski ir teikuma priekšmets.
- Persona, kurai kaut kas patīk, ir datīvā: mir, dir, ihm, ihr, uns, euch, ihnen.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Das gefällt mir.`
   LV: man tas patīk.
2. DE: `Gefällt dir das Kleid?`
   LV: vai tev patīk kleita?
3. DE: `Der Film gefällt uns.`
   LV: mums patīk filma.

**comparison (DE nemainīt):**
1. **gefallen** — patikt • persona datīvā
   Piem.: `Das gefällt mir. – Man tas patīk.`
2. **mögen** — patikt • labprāt izvēlēties
   Piem.: `Ich mag das. – Man tas patīk.`

**tip (LV):**
- Atceries konstrukciju: Das gefällt mir.
- Neveido burtisku latviešu vārdu secību.

**important (LV):**
- gefallen lieto ar datīvu: mir, dir, ihm, ihr.
- Das gefällt mir = man tas patīk.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
_(nav — kopēt no LV pēc ET Study teksta)_

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-gefallen-study",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Das gefällt mir.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Gefällt dir das Kleid?",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Der Film gefällt uns.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "gefallen",
      "meaning": "[OWNER: ET meaning]",
      "example": "Das gefällt mir. – [OWNER: ET example]"
    },
    {
      "word": "mögen",
      "meaning": "[OWNER: ET meaning]",
      "example": "Ich mag das. – [OWNER: ET example]"
    }
  ],
  "tip": [
    "Atceries konstrukciju: Das gefällt mir.",
    "Neveido burtisku latviešu vārdu secību."
  ],
  "important": [
    "[OWNER: ET important line]",
    "[OWNER: ET important line]"
  ]
}
```

---

## ET-A1-0009 — a1-Geschichte-233

**Audit ID:** ET-A1-0009
**Card ID:** `a1-Geschichte-233`
**Field/path:** `a1-Geschichte-233.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Geschichte
**ET flashcard `lv` (esošais):** lugu • ajalugu
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam Geschichte

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-geschichte-study`
**layout:** `standardStudy`
**translation (LV):** stāsts

**explanation (LV):**
- Galvenā doma: Geschichte var nozīmēt stāstu vai vēsturi.
- Daudzskaitlis die Geschichten parasti nozīmē stāstus.
- Nozīmē vēsture vārdu Geschichte parasti lieto vienskaitlī.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Er erzählt eine Geschichte.`
   LV: viņš stāsta stāstu.
2. DE: `Ich lerne Geschichte.`
   LV: es mācos vēsturi.
3. DE: `Das ist die Geschichte Deutschlands.`
   LV: tā ir Vācijas vēsture.

**comparison (DE nemainīt):**
1. **eine Geschichte** — stāsts
   Piem.: `eine interessante Geschichte – interesants stāsts`
2. **Geschichte** — vēsture
   Piem.: `Geschichte lernen – mācīties vēsturi`

**tip (LV):**
- Ar eine un daudzskaitlī parasti runa ir par stāstu.
- Kā mācību priekšmets Geschichte nozīmē vēsturi.

**important (LV):**
- die Geschichten = stāsti.
- Geschichte kā vēsture parasti ir vienskaitlī.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
_(nav — kopēt no LV pēc ET Study teksta)_

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-geschichte-study",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Er erzählt eine Geschichte.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Ich lerne Geschichte.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Das ist die Geschichte Deutschlands.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "eine Geschichte",
      "meaning": "[OWNER: ET meaning]",
      "example": "eine interessante Geschichte – [OWNER: ET example]"
    },
    {
      "word": "Geschichte",
      "meaning": "[OWNER: ET meaning]",
      "example": "Geschichte lernen – [OWNER: ET example]"
    }
  ],
  "tip": [
    "Ar eine un daudzskaitlī parasti runa ir par stāstu.",
    "Kā mācību priekšmets Geschichte nozīmē vēsturi."
  ],
  "important": [
    "[OWNER: ET important line]",
    "[OWNER: ET important line]"
  ]
}
```

---

## ET-A1-0010 — a1-Geschwister-234

**Audit ID:** ET-A1-0010
**Card ID:** `a1-Geschwister-234`
**Field/path:** `a1-Geschwister-234.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Geschwister
**ET flashcard `lv` (esošais):** õed-vennad
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam Geschwister

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-geschwister-study`
**layout:** `standardStudy`
**translation (LV):** brāļi un māsas

**explanation (LV):**
- Galvenā doma: Geschwister nozīmē brāļus un māsas kopā.
- Šo vārdu parasti lieto tikai daudzskaitlī.
- Par vienu personu lieto Bruder vai Schwester.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Ich habe zwei Geschwister.`
   LV: man ir divi brāļi vai māsas.
2. DE: `Meine Geschwister wohnen in Berlin.`
   LV: mani brāļi un māsas dzīvo Berlīnē.

**comparison (DE nemainīt):**
1. **Geschwister** — brāļi un māsas
   Piem.: `Meine Geschwister – mani brāļi un māsas`
2. **Bruder** — brālis
   Piem.: `mein Bruder – mans brālis`
3. **Schwester** — māsa
   Piem.: `meine Schwester – mana māsa`

**tip (LV):**
- Geschwister parasti lieto daudzskaitlī.
- Vienai personai izvēlies Bruder vai Schwester.

**important (LV):**
- Neizmanto ein Geschwister kā parastu A1 vienskaitļa formu.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
_(nav — kopēt no LV pēc ET Study teksta)_

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-geschwister-study",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Ich habe zwei Geschwister.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Meine Geschwister wohnen in Berlin.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "Geschwister",
      "meaning": "[OWNER: ET meaning]",
      "example": "Meine Geschwister – [OWNER: ET example]"
    },
    {
      "word": "Bruder",
      "meaning": "[OWNER: ET meaning]",
      "example": "mein Bruder – [OWNER: ET example]"
    },
    {
      "word": "Schwester",
      "meaning": "[OWNER: ET meaning]",
      "example": "meine Schwester – [OWNER: ET example]"
    }
  ],
  "tip": [
    "Geschwister parasti lieto daudzskaitlī.",
    "Vienai personai izvēlies Bruder vai Schwester."
  ],
  "important": [
    "[OWNER: ET important line]"
  ]
}
```

---

## ET-A1-0011 — a1-Großeltern-251

**Audit ID:** ET-A1-0011
**Card ID:** `a1-Großeltern-251`
**Field/path:** `a1-Großeltern-251.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Großeltern
**ET flashcard `lv` (esošais):** vanavanemad
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam Großeltern

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-grosseltern-study`
**layout:** `standardStudy`
**translation (LV):** vecvecāki

**explanation (LV):**
- Galvenā doma: Großeltern nozīmē vecmāmiņu un vectētiņu kopā.
- Šo vārdu lieto daudzskaitlī.
- Vienskaitlī lieto Großmutter vai Großvater.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Meine Großeltern wohnen auf dem Land.`
   LV: mani vecvecāki dzīvo laukos.
2. DE: `Ich besuche meine Großeltern.`
   LV: es apciemoju savus vecvecākus.

**comparison (DE nemainīt):**
1. **Großeltern** — vecvecāki
   Piem.: `meine Großeltern – mani vecvecāki`
2. **Großmutter** — vecmāmiņa
   Piem.: `meine Großmutter – mana vecmāmiņa`
3. **Großvater** — vectētiņš
   Piem.: `mein Großvater – mans vectētiņš`

**tip (LV):**
- Großeltern ir daudzskaitlis.
- Vienai personai lieto Großmutter vai Großvater.

**important (LV):**
- die Großeltern = vecvecāki.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
_(nav — kopēt no LV pēc ET Study teksta)_

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-grosseltern-study",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Meine Großeltern wohnen auf dem Land.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Ich besuche meine Großeltern.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "Großeltern",
      "meaning": "[OWNER: ET meaning]",
      "example": "meine Großeltern – [OWNER: ET example]"
    },
    {
      "word": "Großmutter",
      "meaning": "[OWNER: ET meaning]",
      "example": "meine Großmutter – [OWNER: ET example]"
    },
    {
      "word": "Großvater",
      "meaning": "[OWNER: ET meaning]",
      "example": "mein Großvater – [OWNER: ET example]"
    }
  ],
  "tip": [
    "Großeltern ir daudzskaitlis.",
    "Vienai personai lieto Großmutter vai Großvater."
  ],
  "important": [
    "[OWNER: ET important line]"
  ]
}
```

---

## ET-A1-0012 — a1-Hand-267

**Audit ID:** ET-A1-0012
**Card ID:** `a1-Hand-267`
**Field/path:** `a1-Hand-267.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Hand
**ET flashcard `lv` (esošais):** käsi (kämmal)
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam Hand

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-hand-study`
**layout:** `standardStudy`
**translation (LV):** plauksta

**explanation (LV):**
- Galvenā doma: die Hand nozīmē plaukstu.
- Vācu valodā Arm un Hand ir divi atsevišķi vārdi.
- Latviešu ikdienas valodā vārds roka bieži var apzīmēt gan Arm, gan Hand.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Ich wasche meine Hände.`
   LV: es mazgāju rokas.
2. DE: `Sie hält das Glas in der Hand.`
   LV: viņa tur glāzi plaukstā.
3. DE: `Mein Arm tut weh.`
   LV: man sāp roka.

**comparison (DE nemainīt):**
1. **die Hand** — plauksta
   Piem.: `in der Hand – plaukstā`
2. **der Arm** — roka
   Piem.: `Mein Arm tut weh. – Man sāp roka.`

**tip (LV):**
- Hand = plauksta.
- Arm = roka no pleca līdz plaukstai.

**important (LV):**
- Vācu valodā Hand un Arm nav viens un tas pats vārds.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
_(nav — kopēt no LV pēc ET Study teksta)_

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-hand-study",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Ich wasche meine Hände.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Sie hält das Glas in der Hand.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Mein Arm tut weh.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "die Hand",
      "meaning": "[OWNER: ET meaning]",
      "example": "in der Hand – [OWNER: ET example]"
    },
    {
      "word": "der Arm",
      "meaning": "[OWNER: ET meaning]",
      "example": "Mein Arm tut weh. – [OWNER: ET example]"
    }
  ],
  "tip": [
    "Hand = plauksta.",
    "Arm = roka no pleca līdz plaukstai."
  ],
  "important": [
    "[OWNER: ET important line]"
  ]
}
```

---

## ET-A1-0013 — a1-hübsch-288

**Audit ID:** ET-A1-0013
**Card ID:** `a1-hübsch-288`
**Field/path:** `a1-hübsch-288.study` (viss objekts)
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** hübsch
**ET flashcard `lv` (esošais):** nägus • kena
**CURRENT_ET:** (nav Study objekta)
**Problēma:** Trūkst Study objekta vārdam hübsch

### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)

**study.id:** `a1-huebsch`
**layout:** `standardStudy`
**translation (LV):** glīts

**explanation (LV):**
- Galvenā doma: hübsch nozīmē glīts, pievilcīgs vai simpātisks pēc izskata.
- hübsch bieži raksturo cilvēka, apģērba, telpas vai priekšmeta izskatu.
- Latviešu jauks dažos kontekstos ir iespējams, bet tas ir pārāk plašs kā galvenais tulkojums.
- Raksturu vai laipnu izturēšanos vācu valodā biežāk raksturo ar nett.

**examples (DE nemainīt; LV = struktūras atsauce):**
1. DE: `Sie trägt ein hübsches Kleid.`
   LV: Viņai ir glīta kleita.
2. DE: `Das Zimmer ist hübsch.`
   LV: Istaba ir glīta.
3. DE: `Das ist ein hübsches Bild.`
   LV: Tā ir glīta bilde.

**comparison (DE nemainīt):**
1. **hübsch** — glīts • pievilcīgs pēc izskata
   Piem.: `Das ist ein hübsches Kleid. – Tā ir glīta kleita.`
2. **schön** — skaists • patīkams
   Piem.: `Der Garten ist schön. – Dārzs ir skaists.`
3. **nett** — jauks • laipns
   Piem.: `Sie ist sehr nett. – Viņa ir ļoti jauka.`

**tip (LV):**
Atceries: hübsch galvenokārt raksturo glītu izskatu, bet nett biežāk raksturo jauku cilvēku vai izturēšanos.

**important (LV):**
- hübsch nav universāls tulkojums vārdam jauks.
- Cilvēka raksturam vai laipnai izturēšanās formai parasti piemērotāks ir nett.

**sectionAccents (kopēt no LV pēc ET Study teksta):**
```json
{
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
```

### OWNER uzdevums

1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).
2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.
3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).
4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.

**OWNER STATUS:** PENDING

**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**

```json
{
  "id": "a1-huebsch",
  "layout": "standardStudy",
  "translation": "[OWNER: ET translation]",
  "explanation": [
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]",
    "[OWNER: ET explanation line]"
  ],
  "examples": [
    {
      "de": "Sie trägt ein hübsches Kleid.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Das Zimmer ist hübsch.",
      "lv": "[OWNER: ET example]"
    },
    {
      "de": "Das ist ein hübsches Bild.",
      "lv": "[OWNER: ET example]"
    }
  ],
  "comparison": [
    {
      "word": "hübsch",
      "meaning": "[OWNER: ET meaning]",
      "example": "Das ist ein hübsches Kleid. – [OWNER: ET example]"
    },
    {
      "word": "schön",
      "meaning": "[OWNER: ET meaning]",
      "example": "Der Garten ist schön. – [OWNER: ET example]"
    },
    {
      "word": "nett",
      "meaning": "[OWNER: ET meaning]",
      "example": "Sie ist sehr nett. – [OWNER: ET example]"
    }
  ],
  "tip": {
    "text": "[OWNER: ET tip]"
  },
  "important": [
    "[OWNER: ET important line]",
    "[OWNER: ET important line]"
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
```

---
