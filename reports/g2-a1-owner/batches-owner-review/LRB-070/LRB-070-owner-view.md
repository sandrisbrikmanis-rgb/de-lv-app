# G2/A1 LRB LRB-070 — OWNER VIEW

**Batch:** LRB-070
**Rows:** 50/50
**Direction:** DESCENDING
**Reserved for:** LB_OWNER_PREP
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-16T16:42:54.164Z
**Source commit:** `9d64451b7ab6ccc4eb2e3bbfaa27ba362c2f2764`
**Branch:** `cursor/lrb-070-owner-authorization-aa66`
**Input SHA256:** `50bd863777a163de7d5c66fb367fb53d61b64022bb48482a37f6bd84d6fd7dd5`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-070-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB070-0001`
**Finding Stable ID:** `g2/a1/lb|a1-ab|a1.card.a1-ab.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0001`
**Lang:** lb
**Card:** `a1-ab`
**Field / path:** `a1.card.a1-ab.study.comparison[1].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** no kāda/kaut kā • izcelsme
**DE reference (read-only):** ab
**CURRENT (captured scope):** No kāda/kaut kā • Izcelsme
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ab / a1.card.a1-ab.study.comparison[1].meaning: exact Luxembourgish wording for German 'ab' (Latvian 'no kāda/kaut kā • izcelsme') is not established by the supplied evidence; production currently has 'No kāda/kaut kā • Izcelsme' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ab",
  "lv": "Nee",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "Nee",
    "explanation": "Lieto, kad kaut kas sākas no konkrēta laika, vietas vai punkta. Bieži nozīmē \"sākot no\".",
    "examples": [
      {
        "de": "ab heute",
        "lv": "No šodienas",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "Vum Méindeg un"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "No plkst. 8"
      },
      {
        "de": "ab Bahnhof",
        "lv": "Vun der Gare"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "Sākot no punkta/laika",
        "example": "ab Montag – Vum Méindeg un"
      },
      {
        "word": "von",
        "meaning": "No kāda/kaut kā • Izcelsme",
        "example": "von mir – No manéis"
      },
      {
        "word": "aus",
        "meaning": "Ārā no iekšienes",
        "example": "aus dem Haus – Aus dem Haus / Aus dem Haus"
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
              "Vum"
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
              "Vun"
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
      "ab weist op den Startpunkt an Zäit oder Plaz hin.",
      "Wann d'Iddie Hierkonft oder Richtung vun der Innen ass, benotzt een méi dacks von oder aus."
    ]
  }
}
```

---

## Finding 2

**Audit ID:** `LRB070-0002`
**Finding Stable ID:** `g2/a1/lb|a1-aber|a1.card.a1-aber.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0002`
**Lang:** lb
**Card:** `a1-aber`
**Field / path:** `a1.card.a1-aber.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pretstats • iebilde • tomēr
**DE reference (read-only):** aber
**CURRENT (captured scope):** Pretstats • Iebilde • Tomēr
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-aber / a1.card.a1-aber.study.comparison[0].meaning: exact Luxembourgish wording for German 'aber' (Latvian 'pretstats • iebilde • tomēr') is not established by the supplied evidence; production currently has 'Pretstats • Iebilde • Tomēr' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aber",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": "Lieto, lai iviestu pretstatu vai izteiktu ibildi. Bieži nozīmē \"wetten\", \"tomēr\" vai \"taču\".",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Et gribu nākt līdzi, bet man naw laika."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "De l'autre côté du miroir."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Hien huet Recht, mee ech sinn net averstanen."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "Pretstats • Iebilde • Tomēr",
        "example": "Ich komme, aber später. – Et ass besser, gutt."
      },
      {
        "word": "sondern",
        "meaning": "Not • Mee",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Es gribēju tēju, nevis kafiju."
      },
      {
        "word": "jedoch",
        "meaning": "CAA -",
        "example": "Es ist kalt, jedoch sonnig. – De l'autre côté du miroir."
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
              "l'autre"
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
              "Hien"
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
              "Et"
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
              "ist"
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
      "aber weist op e Géigsaz oder Androck hin.",
      "Wann de Géigsaz \"net..., mä awer...\" ass, benotzt een am Däitsche normalerweis sondern."
    ]
  }
}
```

---

## Finding 3

**Audit ID:** `LRB070-0003`
**Finding Stable ID:** `g2/a1/lb|a1-an|a1.card.a1-an.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0004`
**Lang:** lb
**Card:** `a1-an`
**Field / path:** `a1.card.a1-an.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pie
**DE reference (read-only):** an
**CURRENT (captured scope):** Von • Zu • Present
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-an / a1.card.a1-an.native: exact Luxembourgish wording for German 'an' (Latvian 'pie') is not established by the supplied evidence; production currently has 'Von • Zu • Present' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "an",
  "lv": "Von • Zu • Present",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "Op • Op der Uewerfläch • Am Rand",
    "explanation": "Lieto, kaut kaut kas atrodas pie sienas, loga, durvīm, upes, jūras krasta vai citas malas/virsmas.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "Pie sienas / uz sienas"
      },
      {
        "de": "am Fenster",
        "lv": "CAA -"
      },
      {
        "de": "am Meer",
        "lv": "Bei Den Meeren"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "Op der Uewerfläch oder Rand",
        "example": "an der Wand – bei der Mauer"
      },
      {
        "word": "auf",
        "meaning": "Uz horizontālas virsmas",
        "example": "auf dem Tisch – Op Den Tafel"
      },
      {
        "word": "bei",
        "meaning": "For a Person Or Place",
        "example": "beim Arzt – Pie äersta"
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
              "CAA"
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
              "Bei"
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
      "an ass net just iergendwann \"bei\". Et bedeit dacks bei enger Uewerfläch, Mauer, Fenster oder Rank.",
      "Op enger horizontaler Uewerfläch benotzt een normalerweis auf."
    ]
  }
}
```

---

## Finding 4

**Audit ID:** `LRB070-0004`
**Finding Stable ID:** `g2/a1/lb|a1-an|a1.card.a1-an.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0005`
**Lang:** lb
**Card:** `a1-an`
**Field / path:** `a1.card.a1-an.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** pie
**DE reference (read-only):** an
**CURRENT (captured scope):** Op • Op der Uewerfläch • Am Rand
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-an / a1.card.a1-an.study.translation: exact Luxembourgish wording for German 'an' (Latvian 'pie') is not established by the supplied evidence; production currently has 'Op • Op der Uewerfläch • Am Rand' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "an",
  "lv": "Von • Zu • Present",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "Op • Op der Uewerfläch • Am Rand",
    "explanation": "Lieto, kaut kaut kas atrodas pie sienas, loga, durvīm, upes, jūras krasta vai citas malas/virsmas.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "Pie sienas / uz sienas"
      },
      {
        "de": "am Fenster",
        "lv": "CAA -"
      },
      {
        "de": "am Meer",
        "lv": "Bei Den Meeren"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "Op der Uewerfläch oder Rand",
        "example": "an der Wand – bei der Mauer"
      },
      {
        "word": "auf",
        "meaning": "Uz horizontālas virsmas",
        "example": "auf dem Tisch – Op Den Tafel"
      },
      {
        "word": "bei",
        "meaning": "For a Person Or Place",
        "example": "beim Arzt – Pie äersta"
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
              "CAA"
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
              "Bei"
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
      "an ass net just iergendwann \"bei\". Et bedeit dacks bei enger Uewerfläch, Mauer, Fenster oder Rank.",
      "Op enger horizontaler Uewerfläch benotzt een normalerweis auf."
    ]
  }
}
```

---

## Finding 5

**Audit ID:** `LRB070-0005`
**Finding Stable ID:** `g2/a1/lb|a1-aufs|a1.card.a1-aufs.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0006`
**Lang:** lb
**Card:** `a1-aufs`
**Field / path:** `a1.card.a1-aufs.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** uz
**DE reference (read-only):** aufs
**CURRENT (captured scope):** Uz • Virsū • Kurp?
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-aufs / a1.card.a1-aufs.native: exact Luxembourgish wording for German 'aufs' (Latvian 'uz') is not established by the supplied evidence; production currently has 'Uz • Virsū • Kurp?' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aufs",
  "lv": "Uz • Virsū • Kurp?",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "Uz • Virsū • Kurp?",
    "explanation": [
      "Aufs ass eng Ofkierzung vun der Präpositioun AUF an dem Artikel DAS.",
      "Pilnā forma: op den (kurp?).",
      "Benotzt wann d'Aktioun eng Richtung op eng spezifesch Saach oder Uewerfläch weist - beäntwert d'Fro wou?",
      "Oft fir Bewegung benotzt: eropklammen, sëtzen, erofsetzen, iergendwou fueren.",
      "Sarunvalodā un ikdienā gandrīz vienmēr lieto auf, nevis pilno auf das."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "Ech ginn op d'Dach."
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Mir ginn op d'Landschaft."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "Noliec somu uz gultas."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "Hie montéiert e Päerd."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "Ieliec grāmatu uz plaukta."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "Nāc ātri uz laivas!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "Mēs ejam uz svinībām. - Mēs ejam uz svinībām."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "Zu engem bestëmmte Fall (Acc.)",
        "example": "aufs Dach – op d'Dach"
      },
      {
        "word": "auf",
        "meaning": "Uz virsmu vai augšup",
        "example": "auf den Tisch – Op Den Tafel"
      },
      {
        "word": "an",
        "meaning": "Op enger vertikaler Uewerfläch",
        "example": "an die Wand – bei der Mauer"
      },
      {
        "word": "ins",
        "meaning": "Uz iekšu (iekš zielenpass)",
        "example": "ins Zimmer – am Zëmmer"
      },
      {
        "word": "zum",
        "meaning": "Uz /Péiteng (Kam?)",
        "example": "zum Arzt – Pie äersta"
      }
    ],
    "tip": [
      "Erënnert dech: auf + das → aufs (wohin?, wohin?).",
      "Sarunvalodā gandrīz nekad nesaka pilno auf das — lieto aufs."
    ],
    "important": [
      "aufs = auf das, nëmmen mat engem Neutrum am Akkusativ.",
      "Beäntwert d'Fro wohin? — Bewegung op eng konkret Stell oder Uewerfläch.",
      "Op enger horizontaler Uewerfläch benotzt een dacks auf den, net aufs.",
      "Verwécksel net mat an (bei der Mauer) oder ins (an der Stubiersaz)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "aufs",
          "auf das"
        ],
        "purple": [
          "Aufs",
          "Aufs",
          "kurp?"
        ],
        "green": [
          "kurp?",
          "Aufs"
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
              "Dat"
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
              "Mir"
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
              "Hie"
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
              "engem"
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
              "enger"
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

## Finding 6

**Audit ID:** `LRB070-0006`
**Finding Stable ID:** `g2/a1/lb|a1-aufs|a1.card.a1-aufs.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0007`
**Lang:** lb
**Card:** `a1-aufs`
**Field / path:** `a1.card.a1-aufs.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** uz
**DE reference (read-only):** aufs
**CURRENT (captured scope):** Uz • Virsū • Kurp?
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-aufs / a1.card.a1-aufs.study.translation: exact Luxembourgish wording for German 'aufs' (Latvian 'uz') is not established by the supplied evidence; production currently has 'Uz • Virsū • Kurp?' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aufs",
  "lv": "Uz • Virsū • Kurp?",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "Uz • Virsū • Kurp?",
    "explanation": [
      "Aufs ass eng Ofkierzung vun der Präpositioun AUF an dem Artikel DAS.",
      "Pilnā forma: op den (kurp?).",
      "Benotzt wann d'Aktioun eng Richtung op eng spezifesch Saach oder Uewerfläch weist - beäntwert d'Fro wou?",
      "Oft fir Bewegung benotzt: eropklammen, sëtzen, erofsetzen, iergendwou fueren.",
      "Sarunvalodā un ikdienā gandrīz vienmēr lieto auf, nevis pilno auf das."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "Ech ginn op d'Dach."
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Mir ginn op d'Landschaft."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "Noliec somu uz gultas."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "Hie montéiert e Päerd."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "Ieliec grāmatu uz plaukta."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "Nāc ātri uz laivas!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "Mēs ejam uz svinībām. - Mēs ejam uz svinībām."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "Zu engem bestëmmte Fall (Acc.)",
        "example": "aufs Dach – op d'Dach"
      },
      {
        "word": "auf",
        "meaning": "Uz virsmu vai augšup",
        "example": "auf den Tisch – Op Den Tafel"
      },
      {
        "word": "an",
        "meaning": "Op enger vertikaler Uewerfläch",
        "example": "an die Wand – bei der Mauer"
      },
      {
        "word": "ins",
        "meaning": "Uz iekšu (iekš zielenpass)",
        "example": "ins Zimmer – am Zëmmer"
      },
      {
        "word": "zum",
        "meaning": "Uz /Péiteng (Kam?)",
        "example": "zum Arzt – Pie äersta"
      }
    ],
    "tip": [
      "Erënnert dech: auf + das → aufs (wohin?, wohin?).",
      "Sarunvalodā gandrīz nekad nesaka pilno auf das — lieto aufs."
    ],
    "important": [
      "aufs = auf das, nëmmen mat engem Neutrum am Akkusativ.",
      "Beäntwert d'Fro wohin? — Bewegung op eng konkret Stell oder Uewerfläch.",
      "Op enger horizontaler Uewerfläch benotzt een dacks auf den, net aufs.",
      "Verwécksel net mat an (bei der Mauer) oder ins (an der Stubiersaz)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "aufs",
          "auf das"
        ],
        "purple": [
          "Aufs",
          "Aufs",
          "kurp?"
        ],
        "green": [
          "kurp?",
          "Aufs"
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
              "Dat"
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
              "Mir"
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
              "Hie"
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
              "engem"
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
              "enger"
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

## Finding 7

**Audit ID:** `LRB070-0007`
**Finding Stable ID:** `g2/a1/lb|a1-aus|a1.card.a1-aus.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0008`
**Lang:** lb
**Card:** `a1-aus`
**Field / path:** `a1.card.a1-aus.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** no
**DE reference (read-only):** aus
**CURRENT (captured scope):** No • Ārā
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-aus / a1.card.a1-aus.native: exact Luxembourgish wording for German 'aus' (Latvian 'no') is not established by the supplied evidence; production currently has 'No • Ārā' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aus",
  "lv": "No • Ārā",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "No • Ārā",
    "explanation": "Benotzt wann eppes vu bannen kënnt, kënnt eraus oder weist säin Urspronk.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Ech sinn aus Däitschland."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Hie verléisst d'Haus."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Es izemu grāmatu no somas."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "Nee iekšienes, ārā nee",
        "example": "aus dem Haus – No mājas"
      },
      {
        "word": "von",
        "meaning": "Nee personas, vitas, virsmas",
        "example": "von meinem Freund – Nee mana drauga"
      },
      {
        "word": "ab",
        "meaning": "Sākot no punkta vai laika",
        "example": "ab Montag – Vum Méindeg un"
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
              "Ech"
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
              "Hie"
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
            ],
            "purple": [
              "Montag"
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
      "aus weist normalerweis op Bewegung raus vun der Innen oder op Hierkonft hin.",
      "Wann et blouf ëm den Startpunkt an Zäit oder Plaz geet, benotzt een dacks ab."
    ]
  }
}
```

---

## Finding 8

**Audit ID:** `LRB070-0008`
**Finding Stable ID:** `g2/a1/lb|a1-aus|a1.card.a1-aus.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0009`
**Lang:** lb
**Card:** `a1-aus`
**Field / path:** `a1.card.a1-aus.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** no
**DE reference (read-only):** aus
**CURRENT (captured scope):** No • Ārā
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-aus / a1.card.a1-aus.study.translation: exact Luxembourgish wording for German 'aus' (Latvian 'no') is not established by the supplied evidence; production currently has 'No • Ārā' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "aus",
  "lv": "No • Ārā",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "No • Ārā",
    "explanation": "Benotzt wann eppes vu bannen kënnt, kënnt eraus oder weist säin Urspronk.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Ech sinn aus Däitschland."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Hie verléisst d'Haus."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Es izemu grāmatu no somas."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "Nee iekšienes, ārā nee",
        "example": "aus dem Haus – No mājas"
      },
      {
        "word": "von",
        "meaning": "Nee personas, vitas, virsmas",
        "example": "von meinem Freund – Nee mana drauga"
      },
      {
        "word": "ab",
        "meaning": "Sākot no punkta vai laika",
        "example": "ab Montag – Vum Méindeg un"
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
              "Ech"
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
              "Hie"
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
            ],
            "purple": [
              "Montag"
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
      "aus weist normalerweis op Bewegung raus vun der Innen oder op Hierkonft hin.",
      "Wann et blouf ëm den Startpunkt an Zäit oder Plaz geet, benotzt een dacks ab."
    ]
  }
}
```

---

## Finding 9

**Audit ID:** `LRB070-0009`
**Finding Stable ID:** `g2/a1/lb|a1-besuch|a1.card.a1-besuch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0010`
**Lang:** lb
**Card:** `a1-besuch`
**Field / path:** `a1.card.a1-besuch.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** apmeklējums • apciemojums • vizīte
**DE reference (read-only):** Besuch
**CURRENT (captured scope):** Besuch • Visioun • Vizit
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-besuch / a1.card.a1-besuch.study.comparison[0].meaning: exact Luxembourgish wording for German 'Besuch' (Latvian 'apmeklējums • apciemojums • vizīte') is not established by the supplied evidence; production currently has 'Besuch • Visioun • Vizit' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Besuch",
  "de_article": "der",
  "de_plural": "die Besuche",
  "lv": "Besuch",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "Besuch",
    "explanation": [
      "Haaptidee: der Besuch bedeit Besuch, Visit oder Aféierung.",
      "Wann et ëm eng Stell oder eng Manifestatioun geet, ass de passende letteschen Ausdrock Besuch.",
      "Wann Besuch op de Besoch vun enger Persoun bezitt, kann een och op Lettesh Aféierung oder Visit soen.",
      "D'Mehrzahl ass die Besuche."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "De Museemsbesuch war interessant."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Merci fir deng Besuch."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "De Dokter geet op Visite."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "Besuch • Visioun • Vizit",
        "example": "Danke für deinen Besuch. – Merci fir deng Besuch."
      },
      {
        "word": "der Besucher",
        "meaning": "CAA -",
        "example": "Der Besucher wartet draußen. – De Besucher waart draussedom."
      },
      {
        "word": "besuchen",
        "meaning": "besuchen • op Besuch goen",
        "example": "Ich besuche meine Großeltern. – Ech besiche meng Groussälter."
      }
    ],
    "tip": {
      "text": "Atceries: Besuch ir notikums vai vizīte, bet Besucher ir cilvēks."
    },
    "important": [
      "der Besuch ass net nëmmen Aféierung; et kann och Besuch oder Visit sinn.",
      "Mehrzahl: die Besuche."
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

## Finding 10

**Audit ID:** `LRB070-0010`
**Finding Stable ID:** `g2/a1/lb|a1-besuchen|a1.card.a1-besuchen.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0012`
**Lang:** lb
**Card:** `a1-besuchen`
**Field / path:** `a1.card.a1-besuchen.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** apmeklēt vietu vai pasākumu • apciemot personu
**DE reference (read-only):** besuchen
**CURRENT (captured scope):** eng Plaz oder eng Manifestatioun besuchen • eng Persoun besuchen
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-besuchen / a1.card.a1-besuchen.study.comparison[0].meaning: exact Luxembourgish wording for German 'besuchen' (Latvian 'apmeklēt vietu vai pasākumu • apciemot personu') is not established by the supplied evidence; production currently has 'eng Plaz oder eng Manifestatioun besuchen • eng Persoun besuchen' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "besuchen",
  "lv": "besuchen",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "besuchen",
    "explanation": [
      "Haaptidee: besuchen benotzt een beim Besoch vun enger Plaz, enger Manifestatioun oder enger Persoun.",
      "Eng Plaz, eng Manifestatioun oder e Kurs gëtt normalerweis besucht.",
      "Wann besuchen sech op eng Persoun bezitt, ass et op Lettesh dacks méi natierlech, se besuchen ze goen.",
      "Am Däitsche benotzt een besuchen ouni Prepositioun an nom Akkusativ."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Ech besiche d'Museem."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Mir besichen e Däitsch-Kurs."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Ech besiche meng Groussälter."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "eng Plaz oder eng Manifestatioun besuchen • eng Persoun besuchen",
        "example": "Ich besuche meine Großeltern. – Ech besiche meng Groussälter."
      },
      {
        "word": "treffen",
        "meaning": "treffen",
        "example": "Ich treffe meinen Freund. – Ech trëffe menge Frënd."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "zu mengem Frënd goen",
        "example": "Ich gehe zu meinem Freund. – Ech ginn zu mengem Frënd."
      }
    ],
    "tip": {
      "text": "Atceries: vietu apmeklē, bet personu latviski bieži apciemo."
    },
    "important": [
      "besuchen benotzt een ouni Prepositioun: Ich besuche meine Freundin.",
      "De letteschen Iwwersetzung hänkt vum Objet of: eng Plaz besuchen, eng Persoun besuchen."
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

## Finding 11

**Audit ID:** `LRB070-0011`
**Finding Stable ID:** `g2/a1/lb|a1-bringen|a1.card.a1-bringen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0013`
**Lang:** lb
**Card:** `a1-bringen`
**Field / path:** `a1.card.a1-bringen.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** atnest
**DE reference (read-only):** bringen
**CURRENT (captured scope):** Atnest • Aiznest
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-bringen / a1.card.a1-bringen.native: exact Luxembourgish wording for German 'bringen' (Latvian 'atnest') is not established by the supplied evidence; production currently has 'Atnest • Aiznest' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bringen",
  "lv": "Atnest • Aiznest",
  "level": "A1",
  "study": {
    "id": "a1-bringen",
    "layout": "standardStudy",
    "translation": "Atnest • Aiznest",
    "explanation": [
      "Haaptiddi: Bréngt, dréit oder liwwert eppes un een.",
      "CAA-BHUA CAA-BHUB CAA-BHUC CAA-BHUD CAA-BHUE CAA-BHUF CAA-BHUG CAA-BHUH CAA-BHUI CAA-BHUJ CAA-BHUK CAA-BHUL CAA-BHUM CAA-BHUN CAA-BHUO CAA-BHUP CAA-BHUQ CAA-BHUR CAA-BHUS CAA-BHUT CAA-BHUU CAA-BHUV CAA-BHUW CAA-BHUX CAA-BHUY CAA-BHUZ CAA-BHU0 CAA-BHU1 CAA-BHU2 CAA-BHU3 CAA-BHU4 CAA-BHU5 CAA-BHU6 CAA-BHU7 CAA-BHU8 CAA-BHU9",
      "CAA-BHKA CAA-BHKB CAA-BHKC CAA-BHKD CAA-BHKE CAA-BHKF CAA-BHKG CAA-BHKH CAA-BHKI CAA-BHKJ CAA-BHKK CAA-BHKL CAA-BHKM CAA-BHKN CAA-BHKO CAA-BHKP CAA-BHKQ CAA-BHKR CAA-BHKS CAA-BHKT CAA-BHKU CAA-BHKV CAA-BHKW CAA-BHKX CAA-BHKY CAA-BHKZ CAA-BHK0 CAA-BHK1 CAA-BHK2 CAA-BHK3 CAA-BHK4 CAA-BHK5 CAA-BHK6 CAA-BHK7 CAA-BHK8 CAA-BHK9",
      "Fëscherei heescht nofueren an ofhuelen oder huelen.",
      "D'Iwwersetzung gëtt duerch de Kontext festgesat."
    ],
    "examples": [
      {
        "de": "Ich bringe dir ein Buch.",
        "lv": "Atnes Mann, lūdzu, ūdeni."
      },
      {
        "de": "Ich bringe das Paket zur Post.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich bringe die Kinder zur Schule.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Et ass grāmatu."
      }
    ],
    "comparison": [
      {
        "word": "bringen",
        "meaning": "Atnest / aiznest / nogādāt",
        "example": "Ich bringe dir ein Buch. – Bring mir Wasser."
      },
      {
        "word": "bringen",
        "meaning": "CAA -",
        "example": "Ich bringe das Paket zur Post. – Ich nehme das Buch."
      },
      {
        "word": "bringen",
        "meaning": "Aiziet pakaệ / atnest",
        "example": "Ich bringe die Kinder zur Schule. – Ich hole Wasser."
      },
      {
        "word": "bringen",
        "meaning": "Nimm mit Dir und nimm mit Dir",
        "example": "Ich bringe dir ein Buch. – Bringst du Brot mit?"
      },
      {
        "word": "nehmen",
        "meaning": "huelen",
        "example": "Ich nehme das Buch. – Ech hunn d'Bréck."
      }
    ],
    "tip": {
      "text": "Atceries: pārvieto pie kāda → bringen; paņem sev → nehmen."
    },
    "important": [
      "bringen rāda virzienu pie kāda vai uz kādu vietu.",
      "nehmen nozīmē paņemt, bet ne obligāti nogādāt citam.",
      "De letteschen Iwwersetzung hänkt vum Kontext of."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Haaptiddi"
        ],
        "purple": [
          "Haaptiddi",
          "Haaptiddi",
          "Haaptiddi"
        ],
        "red": [
          "Haaptiddi",
          "huelen"
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
          "lv": {
            "purple": [
              "atnes"
            ],
            "yellow": [
              "ūdeni"
            ]
          }
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
            "blue": [
              "bringt"
            ],
            "yellow": [
              "Buch"
            ]
          },
          "lv": {
            "purple": [
              "Dat"
            ],
            "yellow": [
              "Dat"
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
              "ass"
            ],
            "yellow": [
              "grāmatu"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "bringen"
            ]
          },
          "meaning": {
            "purple": [
              "atnest",
              "aiznest",
              "nogādāt"
            ]
          },
          "example": {
            "blue": [
              "Bring"
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
              "CAA",
              "CAA"
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
              "holen"
            ]
          },
          "meaning": {
            "purple": [
              "Aiziet pakaệ",
              "atnest"
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
              "mitbringen"
            ]
          },
          "meaning": {
            "purple": [
              "Nimm",
              "Nimm"
            ]
          },
          "example": {
            "green": [
              "mit"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "bringen"
          ],
          "purple": [
            "pārvieto pie kāda"
          ],
          "red": [
            "nehmen",
            "paņem sev"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "bringen"
          ],
          "purple": [
            "virzienu pie kāda"
          ]
        },
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

## Finding 12

**Audit ID:** `LRB070-0012`
**Finding Stable ID:** `g2/a1/lb|a1-bringen|a1.card.a1-bringen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0014`
**Lang:** lb
**Card:** `a1-bringen`
**Field / path:** `a1.card.a1-bringen.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** atnest
**DE reference (read-only):** bringen
**CURRENT (captured scope):** Atnest • Aiznest
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-bringen / a1.card.a1-bringen.study.translation: exact Luxembourgish wording for German 'bringen' (Latvian 'atnest') is not established by the supplied evidence; production currently has 'Atnest • Aiznest' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "bringen",
  "lv": "Atnest • Aiznest",
  "level": "A1",
  "study": {
    "id": "a1-bringen",
    "layout": "standardStudy",
    "translation": "Atnest • Aiznest",
    "explanation": [
      "Haaptiddi: Bréngt, dréit oder liwwert eppes un een.",
      "CAA-BHUA CAA-BHUB CAA-BHUC CAA-BHUD CAA-BHUE CAA-BHUF CAA-BHUG CAA-BHUH CAA-BHUI CAA-BHUJ CAA-BHUK CAA-BHUL CAA-BHUM CAA-BHUN CAA-BHUO CAA-BHUP CAA-BHUQ CAA-BHUR CAA-BHUS CAA-BHUT CAA-BHUU CAA-BHUV CAA-BHUW CAA-BHUX CAA-BHUY CAA-BHUZ CAA-BHU0 CAA-BHU1 CAA-BHU2 CAA-BHU3 CAA-BHU4 CAA-BHU5 CAA-BHU6 CAA-BHU7 CAA-BHU8 CAA-BHU9",
      "CAA-BHKA CAA-BHKB CAA-BHKC CAA-BHKD CAA-BHKE CAA-BHKF CAA-BHKG CAA-BHKH CAA-BHKI CAA-BHKJ CAA-BHKK CAA-BHKL CAA-BHKM CAA-BHKN CAA-BHKO CAA-BHKP CAA-BHKQ CAA-BHKR CAA-BHKS CAA-BHKT CAA-BHKU CAA-BHKV CAA-BHKW CAA-BHKX CAA-BHKY CAA-BHKZ CAA-BHK0 CAA-BHK1 CAA-BHK2 CAA-BHK3 CAA-BHK4 CAA-BHK5 CAA-BHK6 CAA-BHK7 CAA-BHK8 CAA-BHK9",
      "Fëscherei heescht nofueren an ofhuelen oder huelen.",
      "D'Iwwersetzung gëtt duerch de Kontext festgesat."
    ],
    "examples": [
      {
        "de": "Ich bringe dir ein Buch.",
        "lv": "Atnes Mann, lūdzu, ūdeni."
      },
      {
        "de": "Ich bringe das Paket zur Post.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich bringe die Kinder zur Schule.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Et ass grāmatu."
      }
    ],
    "comparison": [
      {
        "word": "bringen",
        "meaning": "Atnest / aiznest / nogādāt",
        "example": "Ich bringe dir ein Buch. – Bring mir Wasser."
      },
      {
        "word": "bringen",
        "meaning": "CAA -",
        "example": "Ich bringe das Paket zur Post. – Ich nehme das Buch."
      },
      {
        "word": "bringen",
        "meaning": "Aiziet pakaệ / atnest",
        "example": "Ich bringe die Kinder zur Schule. – Ich hole Wasser."
      },
      {
        "word": "bringen",
        "meaning": "Nimm mit Dir und nimm mit Dir",
        "example": "Ich bringe dir ein Buch. – Bringst du Brot mit?"
      },
      {
        "word": "nehmen",
        "meaning": "huelen",
        "example": "Ich nehme das Buch. – Ech hunn d'Bréck."
      }
    ],
    "tip": {
      "text": "Atceries: pārvieto pie kāda → bringen; paņem sev → nehmen."
    },
    "important": [
      "bringen rāda virzienu pie kāda vai uz kādu vietu.",
      "nehmen nozīmē paņemt, bet ne obligāti nogādāt citam.",
      "De letteschen Iwwersetzung hänkt vum Kontext of."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Haaptiddi"
        ],
        "purple": [
          "Haaptiddi",
          "Haaptiddi",
          "Haaptiddi"
        ],
        "red": [
          "Haaptiddi",
          "huelen"
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
          "lv": {
            "purple": [
              "atnes"
            ],
            "yellow": [
              "ūdeni"
            ]
          }
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
            "blue": [
              "bringt"
            ],
            "yellow": [
              "Buch"
            ]
          },
          "lv": {
            "purple": [
              "Dat"
            ],
            "yellow": [
              "Dat"
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
              "ass"
            ],
            "yellow": [
              "grāmatu"
            ]
          }
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "bringen"
            ]
          },
          "meaning": {
            "purple": [
              "atnest",
              "aiznest",
              "nogādāt"
            ]
          },
          "example": {
            "blue": [
              "Bring"
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
              "CAA",
              "CAA"
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
              "holen"
            ]
          },
          "meaning": {
            "purple": [
              "Aiziet pakaệ",
              "atnest"
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
              "mitbringen"
            ]
          },
          "meaning": {
            "purple": [
              "Nimm",
              "Nimm"
            ]
          },
          "example": {
            "green": [
              "mit"
            ]
          }
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "bringen"
          ],
          "purple": [
            "pārvieto pie kāda"
          ],
          "red": [
            "nehmen",
            "paņem sev"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "bringen"
          ],
          "purple": [
            "virzienu pie kāda"
          ]
        },
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

## Finding 13

**Audit ID:** `LRB070-0013`
**Finding Stable ID:** `g2/a1/lb|a1-da|a1.card.a1-da.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0015`
**Lang:** lb
**Card:** `a1-da`
**Field / path:** `a1.card.a1-da.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tur • te • šeit (vispārīgi)
**DE reference (read-only):** da
**CURRENT (captured scope):** Tur • Te • Šeit (vispārīgi)
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-da / a1.card.a1-da.study.comparison[0].meaning: exact Luxembourgish wording for German 'da' (Latvian 'tur • te • šeit (vispārīgi)') is not established by the supplied evidence; production currently has 'Tur • Te • Šeit (vispārīgi)' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "da",
  "lv": "Do",
  "level": "A1",
  "study": {
    "id": "a1-da",
    "layout": "standardStudy",
    "translation": "Do",
    "explanation": [
      "CAA-BHUA CAA-BHUB CAA-BHUC CAA-BHUD CAA-BHUE CAA-BHUF CAA-BHUG CAA-BHUH CAA-BHUI CAA-BHUJ CAA-BHUK CAA-BHUL CAA-BHUM CAA-BHUN CAA-BHUO CAA-BHUP CAA-BHUQ CAA-BHUR CAA-BHUS CAA-BHUT CAA-BHUU CAA-BHUV CAA-BHUW CAA-BHUX CAA-BHUY CAA-BHUZ CAA-BHU0 CAA-BHU1 CAA-BHU2 CAA-BHU3 CAA-BHU4 CAA-BHU5 CAA-BHU6 CAA-BHU7 CAA-BHU8 CAA-BHU9",
      "Da norāda uz vietu vai atsaucas uz kaut ko jau minētu.",
      "Et gëtt keng situācijas zu var tulkot arī kā te vai šeit.",
      "CAA-BHKA CAA-BHKB CAA-BHKC CAA-BHKD CAA-BHKE CAA-BHKF CAA-BHKG CAA-BHKH CAA-BHKI CAA-BHKJ CAA-BHKK CAA-BHKL CAA-BHKM CAA-BHKN CAA-BHKO CAA-BHKP CAA-BHKQ CAA-BHKR CAA-BHKS CAA-BHKT CAA-BHKU CAA-BHKV CAA-BHKW CAA-BHKX CAA-BHKY CAA-BHKZ CAA-BHK0 CAA-BHK1 CAA-BHK2 CAA-BHK3 CAA-BHK4 CAA-BHK5 CAA-BHK6 CAA-BHK7 CAA-BHK8 CAA-BHK9"
    ],
    "examples": [
      {
        "de": "Da ist mein Auto.",
        "lv": "Den Haaptuert ass Mauretanien."
      },
      {
        "de": "Ich war da.",
        "lv": "Es biju tur."
      },
      {
        "de": "Da kommt er.",
        "lv": "Hei kënnt hien."
      },
      {
        "de": "Komm mal da her!",
        "lv": "Nāc šeit!"
      }
    ],
    "comparison": [
      {
        "word": "da",
        "meaning": "Tur • Te • Šeit (vispārīgi)",
        "example": "Dërt ass mäin Auto."
      },
      {
        "word": "hier",
        "meaning": "Here (in a hidden place)",
        "example": "Hei ass mäin Auto."
      },
      {
        "word": "dort",
        "meaning": "Tur (tālāk)",
        "example": "Dërt ass mäin Auto."
      },
      {
        "word": "dann",
        "meaning": "CAA -",
        "example": "Dënn ginn mir heemgoen."
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
          "CAA"
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
              "Den"
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
              "hien"
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
              "Here"
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
              "CAA"
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
      "da ass en allgemeint Ortswoart.",
      "hier ass konkret \"hei\", dort ass méi wäit ewech \"do\"."
    ]
  }
}
```

---

## Finding 14

**Audit ID:** `LRB070-0014`
**Finding Stable ID:** `g2/a1/lb|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0016`
**Lang:** lb
**Card:** `a1-das`
**Field / path:** `a1.card.a1-das.study.comparison[2].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** kurš • kura • kuru
**DE reference (read-only):** das
**CURRENT (captured scope):** Kurš • Kura • Kuru
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-das / a1.card.a1-das.study.comparison[2].meaning: exact Luxembourgish wording for German 'das' (Latvian 'kurš • kura • kuru') is not established by the supplied evidence; production currently has 'Kurš • Kura • Kuru' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "das",
  "lv": "Vidus dzimtes noteiktais artikuls",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "Vidus dzimtes noteiktais artikuls",
    "explanation": "Lieto pie vidus dzimtes latevārdiem. Dažos teikumos \"das\" var darboties arī kā vietniekvārds vai relatīvais vietniekvārds.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "Ass my car"
      },
      {
        "de": "Das ist gut.",
        "lv": "Dat ass labber."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Grāmata, kuru es lasu, ir interesanta."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "Den (article / pronoun)",
        "example": "Das ist mein Auto. – Ee fir Autoen."
      },
      {
        "word": "dies",
        "meaning": "CAA -",
        "example": "Dies ist mein Auto. – Dëst ass mäin Auto."
      },
      {
        "word": "welches",
        "meaning": "Kurš • Kura • Kuru",
        "example": "Das ist das Buch, welches ich lese. – Произношение на kuerze kuerze kuerze [lb]"
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
      "Op A1 Niveau léiert dir fir d'éischt das als Neutrum Artikel.",
      "das ass net d'selwecht wéi dass — das kann en Artikel oder e Pronomen sinn, dass bedeit \"datt\"."
    ]
  }
}
```

---

## Finding 15

**Audit ID:** `LRB070-0015`
**Finding Stable ID:** `g2/a1/lb|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0017`
**Lang:** lb
**Card:** `a1-dass`
**Field / path:** `a1.card.a1-dass.study.comparison[1].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** jo • tāpēc ka
**DE reference (read-only):** dass
**CURRENT (captured scope):** Jo • Tāpēc ka
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-dass / a1.card.a1-dass.study.comparison[1].meaning: exact Luxembourgish wording for German 'dass' (Latvian 'jo • tāpēc ka') is not established by the supplied evidence; production currently has 'Jo • Tāpēc ka' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "dass",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": "Ievada palīgteikumu, kas izsaka faktu, domu vai teikto.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Ech weess du bass midd."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "Произношение на ka ka ka ka ka ka ka ka ka ka ka ka."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Et ass domāju, ka tas ir pareizi."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "CAA -",
        "example": "Ich weiß, dass er kommt. – Es sinnu, ka việš nāks."
      },
      {
        "word": "weil",
        "meaning": "Jo • Tāpēc ka",
        "example": "Ich bleibe zu Hause, weil es regnet. – Ech bleiwe heem, well et lëscht."
      },
      {
        "word": "damit",
        "meaning": "CAA -",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – BHU9"
      },
      {
        "word": "ob",
        "meaning": "Oder",
        "example": "Ich weiß nicht, ob er kommt. – Es nezinu, vai viếš nāks."
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
              "Ech"
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
              "ka"
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
              "ka"
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
              "ka"
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
              "jo"
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
              "Ich"
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
              "vai"
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
            "ka"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "dass"
          ],
          "purple": [
            "ka"
          ],
          "green": [
            "palīgteikumu"
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
            "tas"
          ]
        }
      ]
    },
    "important": [
      "dass bedeit \"datt\" a féiert en Nebensaz ein.",
      "Verwécksel net mat das, deen en Artikel oder \"datt\" ka sinn."
    ]
  }
}
```

---

## Finding 16

**Audit ID:** `LRB070-0016`
**Finding Stable ID:** `g2/a1/lb|a1-ein|a1.card.a1-ein.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0018`
**Lang:** lb
**Card:** `a1-ein`
**Field / path:** `a1.card.a1-ein.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** nenoteiktais artikuls
**DE reference (read-only):** ein
**CURRENT (captured scope):** Indefinite Article • Eng • Someone
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ein / a1.card.a1-ein.native: exact Luxembourgish wording for German 'ein' (Latvian 'nenoteiktais artikuls') is not established by the supplied evidence; production currently has 'Indefinite Article • Eng • Someone' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ein",
  "lv": "Indefinite Article • Eng • Someone",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "Indefinite Article • Eng • Someone",
    "explanation": [
      "Haaptidee: ein ass den onbestëmmten Artikel.",
      "ein ass den onbestëmmten Artikel fir Maskulinum a Neutrum Substantiver am Nominativ.",
      "ein benotzt een beim Maskulinum: ein Mann.",
      "ein benotzt een beim Neutrum: ein Buch.",
      "Beim Femininum benotzt een: eine.",
      "Am Akkusativ beim Maskulinum: einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Ausserhalb, e Mann waart."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Man ir viena grāmata."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Hie sicht no engem Pen."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "E Kand spillt."
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
              "Ausserhalb"
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
              "Hie"
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
      "eine — Femininum.",
      "einen — Akkusativ."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "Maskulinum",
        "example": "En Mann waart draussis."
      },
      {
        "word": "eine Frau",
        "meaning": "Femininum",
        "example": "eine Frau"
      },
      {
        "word": "ein Buch",
        "meaning": "Neutrum",
        "example": "Ech hunn en Bréck."
      },
      {
        "word": "einen Mann",
        "meaning": "Akkusativ",
        "example": "einen Mann"
      }
    ]
  }
}
```

---

## Finding 17

**Audit ID:** `LRB070-0017`
**Finding Stable ID:** `g2/a1/lb|a1-ein|a1.card.a1-ein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0019`
**Lang:** lb
**Card:** `a1-ein`
**Field / path:** `a1.card.a1-ein.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** nenoteiktais artikuls
**DE reference (read-only):** ein
**CURRENT (captured scope):** Indefinite Article • Eng • Someone
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ein / a1.card.a1-ein.study.translation: exact Luxembourgish wording for German 'ein' (Latvian 'nenoteiktais artikuls') is not established by the supplied evidence; production currently has 'Indefinite Article • Eng • Someone' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ein",
  "lv": "Indefinite Article • Eng • Someone",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "Indefinite Article • Eng • Someone",
    "explanation": [
      "Haaptidee: ein ass den onbestëmmten Artikel.",
      "ein ass den onbestëmmten Artikel fir Maskulinum a Neutrum Substantiver am Nominativ.",
      "ein benotzt een beim Maskulinum: ein Mann.",
      "ein benotzt een beim Neutrum: ein Buch.",
      "Beim Femininum benotzt een: eine.",
      "Am Akkusativ beim Maskulinum: einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Ausserhalb, e Mann waart."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Man ir viena grāmata."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Hie sicht no engem Pen."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "E Kand spillt."
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
              "Ausserhalb"
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
              "Hie"
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
      "eine — Femininum.",
      "einen — Akkusativ."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "Maskulinum",
        "example": "En Mann waart draussis."
      },
      {
        "word": "eine Frau",
        "meaning": "Femininum",
        "example": "eine Frau"
      },
      {
        "word": "ein Buch",
        "meaning": "Neutrum",
        "example": "Ech hunn en Bréck."
      },
      {
        "word": "einen Mann",
        "meaning": "Akkusativ",
        "example": "einen Mann"
      }
    ]
  }
}
```

---

## Finding 18

**Audit ID:** `LRB070-0018`
**Finding Stable ID:** `g2/a1/lb|a1-einmal|a1.card.a1-einmal.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0020`
**Lang:** lb
**Card:** `a1-einmal`
**Field / path:** `a1.card.a1-einmal.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** vienreiz • reiz
**DE reference (read-only):** einmal
**CURRENT (captured scope):** Vienreiz • Reiz
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-einmal / a1.card.a1-einmal.native: exact Luxembourgish wording for German 'einmal' (Latvian 'vienreiz • reiz') is not established by the supplied evidence; production currently has 'Vienreiz • Reiz' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "einmal",
  "lv": "Vienreiz • Reiz",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "Vienreiz • Reiz",
    "explanation": [
      "Haaptidee: Weist op eng Kéier oder d'Vergaangenheet hin (eng Kéier ech war...).",
      "Einmal galvenokārt nozīmē: vienu reizi / pagātnē.",
      "Dacks charakteriséiert: Zäitstënn.",
      "Einmal norāda uz vienu reizi vai pagātni (reiz es...)."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Et reest mat Iech Berlīnē."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Et reest mat Iech Berlīnē."
      }
    ],
    "tip": [
      "einmal = eng Kéier",
      "Benotzt einmal, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "einmal = eng Kéier oder eng Kéier an der Vergaangenheet.",
      "Weist op eng Kéier oder d'Vergaangenheet hin (eng Kéier ech war...)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "einmal"
        ],
        "purple": [
          "reiz"
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
              "reest"
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
              "reest"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "vienreiz"
          ]
        },
        {
          "purple": [
            "reiz"
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

## Finding 19

**Audit ID:** `LRB070-0019`
**Finding Stable ID:** `g2/a1/lb|a1-einmal|a1.card.a1-einmal.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0021`
**Lang:** lb
**Card:** `a1-einmal`
**Field / path:** `a1.card.a1-einmal.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** vienreiz • reiz
**DE reference (read-only):** einmal
**CURRENT (captured scope):** Vienreiz • Reiz
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-einmal / a1.card.a1-einmal.study.translation: exact Luxembourgish wording for German 'einmal' (Latvian 'vienreiz • reiz') is not established by the supplied evidence; production currently has 'Vienreiz • Reiz' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "einmal",
  "lv": "Vienreiz • Reiz",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "Vienreiz • Reiz",
    "explanation": [
      "Haaptidee: Weist op eng Kéier oder d'Vergaangenheet hin (eng Kéier ech war...).",
      "Einmal galvenokārt nozīmē: vienu reizi / pagātnē.",
      "Dacks charakteriséiert: Zäitstënn.",
      "Einmal norāda uz vienu reizi vai pagātni (reiz es...)."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Et reest mat Iech Berlīnē."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Et reest mat Iech Berlīnē."
      }
    ],
    "tip": [
      "einmal = eng Kéier",
      "Benotzt einmal, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "einmal = eng Kéier oder eng Kéier an der Vergaangenheet.",
      "Weist op eng Kéier oder d'Vergaangenheet hin (eng Kéier ech war...)."
    ],
    "sectionAccents": {
      "explanation": {
        "green": [
          "einmal"
        ],
        "purple": [
          "reiz"
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
              "reest"
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
              "reest"
            ]
          }
        }
      ],
      "tip": [
        {
          "purple": [
            "vienreiz"
          ]
        },
        {
          "purple": [
            "reiz"
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

## Finding 20

**Audit ID:** `LRB070-0020`
**Finding Stable ID:** `g2/a1/lb|a1-eis|a1.card.a1-eis.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0022`
**Lang:** lb
**Card:** `a1-eis`
**Field / path:** `a1.card.a1-eis.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** ledus • saldējums
**DE reference (read-only):** Eis
**CURRENT (captured scope):** Ledus • Saldējums
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-eis / a1.card.a1-eis.native: exact Luxembourgish wording for German 'Eis' (Latvian 'ledus • saldējums') is not established by the supplied evidence; production currently has 'Ledus • Saldējums' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "Ledus • Saldējums",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "Ledus • Saldējums",
    "explanation": [
      "Galvenā doma: d'Äis war nozīmēt gan ledu, gan saldējumu.",
      "Jo runa ir par aukstu sasalušu ūdeni, latviski parasti saka ledus.",
      "Jo runa ir par ēdienu vai desertu, das Eis ikdienā Đoti bieži nozīmē saldējums.",
      "De Kontext seet Iech normalerweis direkt wat Bedeitung ass.",
      "A1 līmenī answerīgākās frāzes ir iesse Glace an Glace an engem Glas."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Wat ass den Ënnerscheed?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Ziemā uz ezera ir ledus."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "De l'autre côté du miroir."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "Eis / Eis",
        "example": "Ich esse ein Eis. = Ech iessen e Glaçon."
      },
      {
        "word": "der Schnee",
        "meaning": "CAA -",
        "example": "Der Schnee ist weiß. = De Schnéi ass wäiss."
      },
      {
        "word": "kalt",
        "meaning": "Erkältung",
        "example": "Das Wasser ist kalt. = D'Waasser ass kal."
      },
      {
        "word": "das Dessert",
        "meaning": "CAA -",
        "example": "Eis ist ein Dessert. = Glaçon ass e Dessert."
      }
    ],
    "tip": {
      "text": "Atceries: ēdiens → saldējums; ziema/ūdens → ledus."
    },
    "important": [
      "A Letzebuerg sinn Eis a Glaçon zwee verschidde Wierder, awer am Däitsche benotzt een dacks fir béid das Eis.",
      "De Kontext ass haaptséchlechen: Iessen bedeit Glaçon, kal Uewerfläch oder Waasser bedeit Eis."
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
              "Dat"
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
              "Wat"
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
              "l'autre"
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
              "Dat"
            ],
            "yellow": [
              "Dat"
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
              "Eis",
              "Eis"
            ]
          },
          "example": {
            "blue": [
              "Eis"
            ],
            "purple": [
              "Ich"
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
              "CAA"
            ]
          },
          "example": {
            "green": [
              "Schnee",
              "Der"
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
              "Erkältung"
            ]
          },
          "example": {
            "yellow": [
              "kalt",
              "Das"
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
              "CAA"
            ]
          },
          "example": {
            "blue": [
              "Eis"
            ],
            "red": [
              "Dessert"
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

## Finding 21

**Audit ID:** `LRB070-0021`
**Finding Stable ID:** `g2/a1/lb|a1-eis|a1.card.a1-eis.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0023`
**Lang:** lb
**Card:** `a1-eis`
**Field / path:** `a1.card.a1-eis.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** ledus • saldējums
**DE reference (read-only):** Eis
**CURRENT (captured scope):** Ledus • Saldējums
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-eis / a1.card.a1-eis.study.translation: exact Luxembourgish wording for German 'Eis' (Latvian 'ledus • saldējums') is not established by the supplied evidence; production currently has 'Ledus • Saldējums' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "Ledus • Saldējums",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "Ledus • Saldējums",
    "explanation": [
      "Galvenā doma: d'Äis war nozīmēt gan ledu, gan saldējumu.",
      "Jo runa ir par aukstu sasalušu ūdeni, latviski parasti saka ledus.",
      "Jo runa ir par ēdienu vai desertu, das Eis ikdienā Đoti bieži nozīmē saldējums.",
      "De Kontext seet Iech normalerweis direkt wat Bedeitung ass.",
      "A1 līmenī answerīgākās frāzes ir iesse Glace an Glace an engem Glas."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Wat ass den Ënnerscheed?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Ziemā uz ezera ir ledus."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "De l'autre côté du miroir."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "Eis / Eis",
        "example": "Ich esse ein Eis. = Ech iessen e Glaçon."
      },
      {
        "word": "der Schnee",
        "meaning": "CAA -",
        "example": "Der Schnee ist weiß. = De Schnéi ass wäiss."
      },
      {
        "word": "kalt",
        "meaning": "Erkältung",
        "example": "Das Wasser ist kalt. = D'Waasser ass kal."
      },
      {
        "word": "das Dessert",
        "meaning": "CAA -",
        "example": "Eis ist ein Dessert. = Glaçon ass e Dessert."
      }
    ],
    "tip": {
      "text": "Atceries: ēdiens → saldējums; ziema/ūdens → ledus."
    },
    "important": [
      "A Letzebuerg sinn Eis a Glaçon zwee verschidde Wierder, awer am Däitsche benotzt een dacks fir béid das Eis.",
      "De Kontext ass haaptséchlechen: Iessen bedeit Glaçon, kal Uewerfläch oder Waasser bedeit Eis."
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
              "Dat"
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
              "Wat"
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
              "l'autre"
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
              "Dat"
            ],
            "yellow": [
              "Dat"
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
              "Eis",
              "Eis"
            ]
          },
          "example": {
            "blue": [
              "Eis"
            ],
            "purple": [
              "Ich"
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
              "CAA"
            ]
          },
          "example": {
            "green": [
              "Schnee",
              "Der"
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
              "Erkältung"
            ]
          },
          "example": {
            "yellow": [
              "kalt",
              "Das"
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
              "CAA"
            ]
          },
          "example": {
            "blue": [
              "Eis"
            ],
            "red": [
              "Dessert"
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

## Finding 22

**Audit ID:** `LRB070-0022`
**Finding Stable ID:** `g2/a1/lb|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0024`
**Lang:** lb
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tikai
**DE reference (read-only):** erst
**CURRENT (captured scope):** Fesche Pirme • Tikai
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-erst / a1.card.a1-erst.native: exact Luxembourgish wording for German 'erst' (Latvian 'tikai') is not established by the supplied evidence; production currently has 'Fesche Pirme • Tikai' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "erst",
  "lv": "Fesche Pirme • Tikai",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "Fesche Pirme • Tikai",
    "explanation": [
      "Haaptidee: erst heescht meeschtens nëmmen. Mä a bestëmte Kontext ka et och éischt heeschen.",
      "erst weist dacks drop hin, datt eppes méi spéit passéiert, wéi erwaart.",
      "Ich bin erst 18. — Ech sinn nëmmen 18 Joer al.",
      "Es ist erst Montag. — Et ass nëmmen Méindeg.",
      "Erst lernen, dann spielen. — Éischt léiert, dann spillt."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Feschpirms dzert, tad bursts."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Ech kommen net bis muer. - I'll not come until tomorrow."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Hien ass nëmmen 18 Joer al."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Même si ça peut t'aider."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "Fesche Pirme • Tikai",
        "example": "Erst lernen, dann spielen. – Erst arbeiten, dann Pause. = Fispirms strādāt, tad pause."
      },
      {
        "word": "zuerst",
        "meaning": "Visspirms • Sākumā",
        "example": "Zuerst frühstücken wir. = Éischt frühstücken mir."
      },
      {
        "word": "nur",
        "meaning": "CAA -",
        "example": "Ich habe nur 5 Euro. = Ech hunn nëmmen 5 Euro."
      },
      {
        "word": "dann",
        "meaning": "CAA -",
        "example": "Dann gehen wir nach Hause. = Dann ginn mir heem."
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
      "zuerst heescht dacks: éischt."
    ]
  }
}
```

---

## Finding 23

**Audit ID:** `LRB070-0023`
**Finding Stable ID:** `g2/a1/lb|a1-erst|a1.card.a1-erst.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0025`
**Lang:** lb
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** vispirms • tikai
**DE reference (read-only):** erst
**CURRENT (captured scope):** Fesche Pirme • Tikai
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-erst / a1.card.a1-erst.study.comparison[0].meaning: exact Luxembourgish wording for German 'erst' (Latvian 'vispirms • tikai') is not established by the supplied evidence; production currently has 'Fesche Pirme • Tikai' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "erst",
  "lv": "Fesche Pirme • Tikai",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "Fesche Pirme • Tikai",
    "explanation": [
      "Haaptidee: erst heescht meeschtens nëmmen. Mä a bestëmte Kontext ka et och éischt heeschen.",
      "erst weist dacks drop hin, datt eppes méi spéit passéiert, wéi erwaart.",
      "Ich bin erst 18. — Ech sinn nëmmen 18 Joer al.",
      "Es ist erst Montag. — Et ass nëmmen Méindeg.",
      "Erst lernen, dann spielen. — Éischt léiert, dann spillt."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Feschpirms dzert, tad bursts."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Ech kommen net bis muer. - I'll not come until tomorrow."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Hien ass nëmmen 18 Joer al."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Même si ça peut t'aider."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "Fesche Pirme • Tikai",
        "example": "Erst lernen, dann spielen. – Erst arbeiten, dann Pause. = Fispirms strādāt, tad pause."
      },
      {
        "word": "zuerst",
        "meaning": "Visspirms • Sākumā",
        "example": "Zuerst frühstücken wir. = Éischt frühstücken mir."
      },
      {
        "word": "nur",
        "meaning": "CAA -",
        "example": "Ich habe nur 5 Euro. = Ech hunn nëmmen 5 Euro."
      },
      {
        "word": "dann",
        "meaning": "CAA -",
        "example": "Dann gehen wir nach Hause. = Dann ginn mir heem."
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
      "zuerst heescht dacks: éischt."
    ]
  }
}
```

---

## Finding 24

**Audit ID:** `LRB070-0024`
**Finding Stable ID:** `g2/a1/lb|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0027`
**Lang:** lb
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tikai
**DE reference (read-only):** erst
**CURRENT (captured scope):** Fesche Pirme • Tikai
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-erst / a1.card.a1-erst.study.translation: exact Luxembourgish wording for German 'erst' (Latvian 'tikai') is not established by the supplied evidence; production currently has 'Fesche Pirme • Tikai' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "erst",
  "lv": "Fesche Pirme • Tikai",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "Fesche Pirme • Tikai",
    "explanation": [
      "Haaptidee: erst heescht meeschtens nëmmen. Mä a bestëmte Kontext ka et och éischt heeschen.",
      "erst weist dacks drop hin, datt eppes méi spéit passéiert, wéi erwaart.",
      "Ich bin erst 18. — Ech sinn nëmmen 18 Joer al.",
      "Es ist erst Montag. — Et ass nëmmen Méindeg.",
      "Erst lernen, dann spielen. — Éischt léiert, dann spillt."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Feschpirms dzert, tad bursts."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Ech kommen net bis muer. - I'll not come until tomorrow."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Hien ass nëmmen 18 Joer al."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Même si ça peut t'aider."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "Fesche Pirme • Tikai",
        "example": "Erst lernen, dann spielen. – Erst arbeiten, dann Pause. = Fispirms strādāt, tad pause."
      },
      {
        "word": "zuerst",
        "meaning": "Visspirms • Sākumā",
        "example": "Zuerst frühstücken wir. = Éischt frühstücken mir."
      },
      {
        "word": "nur",
        "meaning": "CAA -",
        "example": "Ich habe nur 5 Euro. = Ech hunn nëmmen 5 Euro."
      },
      {
        "word": "dann",
        "meaning": "CAA -",
        "example": "Dann gehen wir nach Hause. = Dann ginn mir heem."
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
      "zuerst heescht dacks: éischt."
    ]
  }
}
```

---

## Finding 25

**Audit ID:** `LRB070-0025`
**Finding Stable ID:** `g2/a1/lb|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0028`
**Lang:** lb
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tas
**DE reference (read-only):** es
**CURRENT (captured scope):** Bag • Tā • Bezpersoniska Forma
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-es / a1.card.a1-es.native: exact Luxembourgish wording for German 'es' (Latvian 'tas') is not established by the supplied evidence; production currently has 'Bag • Tā • Bezpersoniska Forma' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "es",
  "lv": "Bag • Tā • Bezpersoniska Forma",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "Bag • Tā • Bezpersoniska Forma",
    "explanation": [
      "Haaptidee: es ass e Pronomen.",
      "Et gëtt benotzt: dat, ouni Persoun Konstruktiounen."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Ech léiere Däitsch. - I learn German."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Joerhonnert ervirgaangen."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Si schafft hei."
      },
      {
        "de": "Es ist müde.",
        "lv": "Et gëtt e Grammaire."
      },
      {
        "de": "Es regnet.",
        "lv": "Lëscht."
      },
      {
        "de": "Es schneit.",
        "lv": "Snieg."
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
      "De letteschen \"es\" ass däitsch ich; däitsch es heescht dacks dat oder gëtt net iwwersat."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "dat • ouni Persoun Form",
        "example": "Es regnet. – Lëscht."
      },
      {
        "word": "ich",
        "meaning": "es (Persoun)",
        "example": "Ich lerne Deutsch. – Ech léieren Däitsch."
      }
    ]
  }
}
```

---

## Finding 26

**Audit ID:** `LRB070-0026`
**Finding Stable ID:** `g2/a1/lb|a1-es|a1.card.a1-es.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0029`
**Lang:** lb
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tas • bezpersoniska forma
**DE reference (read-only):** es
**CURRENT (captured scope):** dat • ouni Persoun Form
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-es / a1.card.a1-es.study.comparison[0].meaning: exact Luxembourgish wording for German 'es' (Latvian 'tas • bezpersoniska forma') is not established by the supplied evidence; production currently has 'dat • ouni Persoun Form' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "es",
  "lv": "Bag • Tā • Bezpersoniska Forma",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "Bag • Tā • Bezpersoniska Forma",
    "explanation": [
      "Haaptidee: es ass e Pronomen.",
      "Et gëtt benotzt: dat, ouni Persoun Konstruktiounen."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Ech léiere Däitsch. - I learn German."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Joerhonnert ervirgaangen."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Si schafft hei."
      },
      {
        "de": "Es ist müde.",
        "lv": "Et gëtt e Grammaire."
      },
      {
        "de": "Es regnet.",
        "lv": "Lëscht."
      },
      {
        "de": "Es schneit.",
        "lv": "Snieg."
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
      "De letteschen \"es\" ass däitsch ich; däitsch es heescht dacks dat oder gëtt net iwwersat."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "dat • ouni Persoun Form",
        "example": "Es regnet. – Lëscht."
      },
      {
        "word": "ich",
        "meaning": "es (Persoun)",
        "example": "Ich lerne Deutsch. – Ech léieren Däitsch."
      }
    ]
  }
}
```

---

## Finding 27

**Audit ID:** `LRB070-0027`
**Finding Stable ID:** `g2/a1/lb|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0030`
**Lang:** lb
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tas
**DE reference (read-only):** es
**CURRENT (captured scope):** Bag • Tā • Bezpersoniska Forma
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-es / a1.card.a1-es.study.translation: exact Luxembourgish wording for German 'es' (Latvian 'tas') is not established by the supplied evidence; production currently has 'Bag • Tā • Bezpersoniska Forma' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "es",
  "lv": "Bag • Tā • Bezpersoniska Forma",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "Bag • Tā • Bezpersoniska Forma",
    "explanation": [
      "Haaptidee: es ass e Pronomen.",
      "Et gëtt benotzt: dat, ouni Persoun Konstruktiounen."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Ech léiere Däitsch. - I learn German."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Joerhonnert ervirgaangen."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Si schafft hei."
      },
      {
        "de": "Es ist müde.",
        "lv": "Et gëtt e Grammaire."
      },
      {
        "de": "Es regnet.",
        "lv": "Lëscht."
      },
      {
        "de": "Es schneit.",
        "lv": "Snieg."
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
      "De letteschen \"es\" ass däitsch ich; däitsch es heescht dacks dat oder gëtt net iwwersat."
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "dat • ouni Persoun Form",
        "example": "Es regnet. – Lëscht."
      },
      {
        "word": "ich",
        "meaning": "es (Persoun)",
        "example": "Ich lerne Deutsch. – Ech léieren Däitsch."
      }
    ]
  }
}
```

---

## Finding 28

**Audit ID:** `LRB070-0028`
**Finding Stable ID:** `g2/a1/lb|a1-essen-study|a1.card.a1-essen-study.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0031`
**Lang:** lb
**Card:** `a1-essen-study`
**Field / path:** `a1.card.a1-essen-study.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** ēdiens • maltīte
**DE reference (read-only):** Essen
**CURRENT (captured scope):** Ēdiens • Maltīte
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-essen-study / a1.card.a1-essen-study.native: exact Luxembourgish wording for German 'Essen' (Latvian 'ēdiens • maltīte') is not established by the supplied evidence; production currently has 'Ēdiens • Maltīte' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "Ēdiens • Maltīte",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "Ēdiens • Maltīte",
    "explanation": [
      "Haaptidee: Substantiv — Iessen oder d'ganz Maz.",
      "Das Essen galvenokārt nozīmē: patērēt pārtiku.",
      "Bieži raksturo: DARBİBU.",
      "Das Essen galvenokārt nozīmē: pārtika vai maltīte.",
      "Bieži raksturo: latenu.",
      "Essen nozīmē ēst.",
      "Das Essen var nozīmēt ēdienu vai maltīti kopumā."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Ēdiens garšo labi."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Wat wil je eten"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Mēs ēdam pulksten 12."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Ēdiens ir gatavs."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Ēdiens garšo labi."
      }
    ],
    "tip": [
      "das Essen = iessen",
      "Benotzt das Essen, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "essen ass en Verb ouni Artikel.",
      "das Essen ass net d'selwecht wéi essen.",
      "Aktioun: essen.",
      "Saach/Maz: das Essen."
    ],
    "sectionAccents": {
      "explanation": {
        "yellow": [
          "das Essen",
          "essen"
        ],
        "purple": [
          "ēdiens",
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
              "Dat"
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

## Finding 29

**Audit ID:** `LRB070-0029`
**Finding Stable ID:** `g2/a1/lb|a1-essen-study|a1.card.a1-essen-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0032`
**Lang:** lb
**Card:** `a1-essen-study`
**Field / path:** `a1.card.a1-essen-study.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** ēdiens • maltīte
**DE reference (read-only):** Essen
**CURRENT (captured scope):** Ēdiens • Maltīte
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-essen-study / a1.card.a1-essen-study.study.translation: exact Luxembourgish wording for German 'Essen' (Latvian 'ēdiens • maltīte') is not established by the supplied evidence; production currently has 'Ēdiens • Maltīte' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "Ēdiens • Maltīte",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "Ēdiens • Maltīte",
    "explanation": [
      "Haaptidee: Substantiv — Iessen oder d'ganz Maz.",
      "Das Essen galvenokārt nozīmē: patērēt pārtiku.",
      "Bieži raksturo: DARBİBU.",
      "Das Essen galvenokārt nozīmē: pārtika vai maltīte.",
      "Bieži raksturo: latenu.",
      "Essen nozīmē ēst.",
      "Das Essen var nozīmēt ēdienu vai maltīti kopumā."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Ēdiens garšo labi."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Wat wil je eten"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Mēs ēdam pulksten 12."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Ēdiens ir gatavs."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Ēdiens garšo labi."
      }
    ],
    "tip": [
      "das Essen = iessen",
      "Benotzt das Essen, wann de Kontext dëse Sënn entsprécht."
    ],
    "important": [
      "essen ass en Verb ouni Artikel.",
      "das Essen ass net d'selwecht wéi essen.",
      "Aktioun: essen.",
      "Saach/Maz: das Essen."
    ],
    "sectionAccents": {
      "explanation": {
        "yellow": [
          "das Essen",
          "essen"
        ],
        "purple": [
          "ēdiens",
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
              "Dat"
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

## Finding 30

**Audit ID:** `LRB070-0030`
**Finding Stable ID:** `g2/a1/lb|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0033`
**Lang:** lb
**Card:** `a1-etwas`
**Field / path:** `a1.card.a1-etwas.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** kaut kas
**DE reference (read-only):** etwas
**CURRENT (captured scope):** Kaut kas • Nedaudz
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-etwas / a1.card.a1-etwas.native: exact Luxembourgish wording for German 'etwas' (Latvian 'kaut kas') is not established by the supplied evidence; production currently has 'Kaut kas • Nedaudz' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "etwas",
  "lv": "Kaut kas • Nedaudz",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "Kaut kas • Nedaudz",
    "explanation": [
      "Galvenā doma: eppes nozīmē kaut kas vai nedaudz atkarībā no konteksta.",
      "CAA-BHUA CAA-BHUB CAA-BHUC CAA-BHUD CAA-BHUE CAA-BHUF CAA-BHUG CAA-BHUH CAA-BHUI CAA-BHUJ CAA-BHUK CAA-BHUL CAA-BHUM CAA-BHUN CAA-BHUO CAA-BHUP CAA-BHUQ CAA-BHUR CAA-BHUS CAA-BHUT CAA-BHUU CAA-BHUV CAA-BHUW CAA-BHUX CAA-BHUY CAA-BHUZ CAA-BHU0 CAA-BHU1 CAA-BHU2 CAA-BHU3 CAA-BHU4 CAA-BHU5 CAA-BHU6 CAA-BHU7 CAA-BHU8 CAA-BHU9",
      "Jo, eppes Stāv pie īpašības vārda vai daudzuma, tas bieži nozīmē nedaudz."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Es gribētu kaut ko dzert."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "Hutt Dir e Moment?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Esmu nedaudz noguris."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "Bäinumm Bedeitung vun Treibhauseffekt."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "E bëssi/e bëssi",
        "example": "Ich brauche etwas. = Ech brauch eppes."
      },
      {
        "word": "was",
        "meaning": "Eppes (informell)",
        "example": "Willst du was trinken? = Wëlls du eppes drenken?"
      },
      {
        "word": "ein bisschen",
        "meaning": "CAA -",
        "example": "Ich bin ein bisschen müde. = Ech sinn e bësse midd."
      },
      {
        "word": "nichts",
        "meaning": "Näischt",
        "example": "Ich brauche nichts. = Ech brauch näischt."
      }
    ],
    "tip": {
      "text": "Atceries: lieta → kaut kas; pakāpe → nedaudz."
    },
    "important": [
      "etwas nav tas pats, kas nichts: etwas nozīmē, ka kaut kas ir, bet nichts nozīmē nekas.",
      "Latviski dažreiz labāk skan kaut ko, nevis kaut kas, piemēram: etwas trinken = kaut ko dzert.",
      "A Letzebuerg klingt dacks besser eppes, net eppes, zum Beispill: etwas trinken = eppes drenken."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "etwas"
        ],
        "purple": [
          "kaut kas",
          "nedaudz",
          "Galvenā"
        ],
        "green": [
          "konteksta"
        ],
        "yellow": [
          "Galvenā",
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
              "Hutt"
            ],
            "yellow": [
              "Hutt"
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
              "Bäinumm"
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
              "Dat"
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
              "bëssi/e",
              "bëssi/e"
            ]
          },
          "example": {
            "blue": [
              "etwas"
            ],
            "purple": [
              "Ich"
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
              "Eppes"
            ]
          },
          "example": {
            "green": [
              "was"
            ],
            "purple": [
              "Willst"
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
              "CAA"
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
              "Näischt"
            ]
          },
          "example": {
            "red": [
              "nichts",
              "Ich"
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

## Finding 31

**Audit ID:** `LRB070-0031`
**Finding Stable ID:** `g2/a1/lb|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0034`
**Lang:** lb
**Card:** `a1-etwas`
**Field / path:** `a1.card.a1-etwas.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** kaut kas
**DE reference (read-only):** etwas
**CURRENT (captured scope):** Kaut kas • Nedaudz
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-etwas / a1.card.a1-etwas.study.translation: exact Luxembourgish wording for German 'etwas' (Latvian 'kaut kas') is not established by the supplied evidence; production currently has 'Kaut kas • Nedaudz' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "etwas",
  "lv": "Kaut kas • Nedaudz",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "Kaut kas • Nedaudz",
    "explanation": [
      "Galvenā doma: eppes nozīmē kaut kas vai nedaudz atkarībā no konteksta.",
      "CAA-BHUA CAA-BHUB CAA-BHUC CAA-BHUD CAA-BHUE CAA-BHUF CAA-BHUG CAA-BHUH CAA-BHUI CAA-BHUJ CAA-BHUK CAA-BHUL CAA-BHUM CAA-BHUN CAA-BHUO CAA-BHUP CAA-BHUQ CAA-BHUR CAA-BHUS CAA-BHUT CAA-BHUU CAA-BHUV CAA-BHUW CAA-BHUX CAA-BHUY CAA-BHUZ CAA-BHU0 CAA-BHU1 CAA-BHU2 CAA-BHU3 CAA-BHU4 CAA-BHU5 CAA-BHU6 CAA-BHU7 CAA-BHU8 CAA-BHU9",
      "Jo, eppes Stāv pie īpašības vārda vai daudzuma, tas bieži nozīmē nedaudz."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Es gribētu kaut ko dzert."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "Hutt Dir e Moment?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Esmu nedaudz noguris."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "Bäinumm Bedeitung vun Treibhauseffekt."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "E bëssi/e bëssi",
        "example": "Ich brauche etwas. = Ech brauch eppes."
      },
      {
        "word": "was",
        "meaning": "Eppes (informell)",
        "example": "Willst du was trinken? = Wëlls du eppes drenken?"
      },
      {
        "word": "ein bisschen",
        "meaning": "CAA -",
        "example": "Ich bin ein bisschen müde. = Ech sinn e bësse midd."
      },
      {
        "word": "nichts",
        "meaning": "Näischt",
        "example": "Ich brauche nichts. = Ech brauch näischt."
      }
    ],
    "tip": {
      "text": "Atceries: lieta → kaut kas; pakāpe → nedaudz."
    },
    "important": [
      "etwas nav tas pats, kas nichts: etwas nozīmē, ka kaut kas ir, bet nichts nozīmē nekas.",
      "Latviski dažreiz labāk skan kaut ko, nevis kaut kas, piemēram: etwas trinken = kaut ko dzert.",
      "A Letzebuerg klingt dacks besser eppes, net eppes, zum Beispill: etwas trinken = eppes drenken."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "etwas"
        ],
        "purple": [
          "kaut kas",
          "nedaudz",
          "Galvenā"
        ],
        "green": [
          "konteksta"
        ],
        "yellow": [
          "Galvenā",
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
              "Hutt"
            ],
            "yellow": [
              "Hutt"
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
              "Bäinumm"
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
              "Dat"
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
              "bëssi/e",
              "bëssi/e"
            ]
          },
          "example": {
            "blue": [
              "etwas"
            ],
            "purple": [
              "Ich"
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
              "Eppes"
            ]
          },
          "example": {
            "green": [
              "was"
            ],
            "purple": [
              "Willst"
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
              "CAA"
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
              "Näischt"
            ]
          },
          "example": {
            "red": [
              "nichts",
              "Ich"
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

## Finding 32

**Audit ID:** `LRB070-0032`
**Finding Stable ID:** `g2/a1/lb|a1-euch|a1.card.a1-euch.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0035`
**Lang:** lb
**Card:** `a1-euch`
**Field / path:** `a1.card.a1-euch.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** jūs • jums
**DE reference (read-only):** euch
**CURRENT (captured scope):** Jūs • Jums
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-euch / a1.card.a1-euch.native: exact Luxembourgish wording for German 'euch' (Latvian 'jūs • jums') is not established by the supplied evidence; production currently has 'Jūs • Jums' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "euch",
  "lv": "Jūs • Jums",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "Jūs • Jums",
    "explanation": "\"euch\" ir vietniekvārds 2. personas daudzskaitlī. To Laato gan kā tiešo papildinājumu (kurp?) - \"jūs\", gan kā netiešo papildinājumu (kam?) - \"jums\".",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "REDZU DAHİL DEĞİLDİR."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Ech wäert gehollef hunn"
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Et gëtt e Grammaire."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Es jums pateicos."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "De l'autre côté du miroir."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "CAA -",
        "example": "Ihr seid freundlich. = Dir sidd frëndlech."
      },
      {
        "word": "euch",
        "meaning": "Jūs / jums",
        "example": "Ich helfe euch. = Ech hëllefen Iech."
      },
      {
        "word": "euer",
        "meaning": "CAA -",
        "example": "Das ist euer Haus. = Dat ass Äert Haus."
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

## Finding 33

**Audit ID:** `LRB070-0033`
**Finding Stable ID:** `g2/a1/lb|a1-euch|a1.card.a1-euch.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0036`
**Lang:** lb
**Card:** `a1-euch`
**Field / path:** `a1.card.a1-euch.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** jūs • jums
**DE reference (read-only):** euch
**CURRENT (captured scope):** Jūs • Jums
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-euch / a1.card.a1-euch.study.translation: exact Luxembourgish wording for German 'euch' (Latvian 'jūs • jums') is not established by the supplied evidence; production currently has 'Jūs • Jums' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "euch",
  "lv": "Jūs • Jums",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "Jūs • Jums",
    "explanation": "\"euch\" ir vietniekvārds 2. personas daudzskaitlī. To Laato gan kā tiešo papildinājumu (kurp?) - \"jūs\", gan kā netiešo papildinājumu (kam?) - \"jums\".",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "REDZU DAHİL DEĞİLDİR."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Ech wäert gehollef hunn"
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Et gëtt e Grammaire."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Es jums pateicos."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "De l'autre côté du miroir."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "CAA -",
        "example": "Ihr seid freundlich. = Dir sidd frëndlech."
      },
      {
        "word": "euch",
        "meaning": "Jūs / jums",
        "example": "Ich helfe euch. = Ech hëllefen Iech."
      },
      {
        "word": "euer",
        "meaning": "CAA -",
        "example": "Das ist euer Haus. = Dat ass Äert Haus."
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

## Finding 34

**Audit ID:** `LRB070-0034`
**Finding Stable ID:** `g2/a1/lb|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0037`
**Lang:** lb
**Card:** `a1-fahren`
**Field / path:** `a1.card.a1-fahren.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** braukt
**DE reference (read-only):** fahren
**CURRENT (captured scope):** Braukt • Vest • Aizvest
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-fahren / a1.card.a1-fahren.native: exact Luxembourgish wording for German 'fahren' (Latvian 'braukt') is not established by the supplied evidence; production currently has 'Braukt • Vest • Aizvest' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "fahren",
  "lv": "Braukt • Vest • Aizvest",
  "level": "A1",
  "study": {
    "id": "a1-fahren",
    "layout": "standardStudy",
    "translation": "Braukt • Vest • Aizvest",
    "explanation": [
      "Galvenā doma: fueren nozīmē braukt ar transportu un dažos teikumos arī vest vai aizvest kādu.",
      "Fuert Leto, jo pārvietošanās notiek ar auto, autobusu, vilcienu, velosipēdu vai citu transportlīdzekli.",
      "Wann de Saz eng Persoun als Objet huet, kann Fahren féieren oder ewechhuelen.",
      "Ja kustība notiek kājām, parasti lieto walk vai run."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Es braucu uz Berlīni."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Ee fir Autoen."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Mēs rīt braucam uz Minheni."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "Reit Den Transport",
        "example": "Ech fuer mam Bus."
      },
      {
        "word": "gehen",
        "meaning": "Iet kājām",
        "example": "Ech ginn heemgoen."
      },
      {
        "word": "laufen",
        "meaning": "CAA -",
        "example": "Hien laapt séier."
      },
      {
        "word": "bringen",
        "meaning": "Atnest / nogādāt",
        "example": "Ech bréngen d'Bréck."
      },
      {
        "word": "mitnehmen",
        "meaning": "CAA -",
        "example": "Ech nemmen dech mat."
      }
    ],
    "tip": {
      "text": "Atceries: transportlīdzeklis → fahren; kājām → gehen."
    },
    "important": {
      "text": "Dat ass dat „wir\"., Hier waren wir nie! '",
      "example": "Vācu valodā viens un tas pats darbības vārds bieži nozīmē: braukt • vest • aizvest atkarībā no konteksta."
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
        "transportlīdzekli",
        "auto",
        "autobusu",
        "vilcienu",
        "velosipēdu"
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
          "braukt",
          "vest",
          "aizvest"
        ],
        "green": [
          "auto",
          "autobusu",
          "vilcienu",
          "velosipēdu",
          "transportlīdzekli"
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
              "fahre"
            ]
          },
          "lv": {
            "purple": [
              "braucu"
            ],
            "green": [
              "Berlīni"
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
              "fir"
            ],
            "green": [
              "auto"
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
              "Dat"
            ],
            "green": [
              "Dat",
              "Dat"
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
              "Dat"
            ],
            "green": [
              "Dat",
              "Dat"
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
              "braucam"
            ],
            "green": [
              "Minheni"
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
              "Reit"
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
              "iet kājām"
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
              "CAA",
              "CAA"
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
              "atnest",
              "nogādāt"
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
              "CAA"
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
            "transportlīdzeklis",
            "kājām"
          ]
        }
      },
      "important": [
        {
          "text": {
            "blue": [
              "waren"
            ],
            "purple": [
              "braukt"
            ]
          },
          "example": {
            "blue": [
              "waren"
            ],
            "purple": [
              "braukt",
              "vest",
              "aizvest"
            ]
          }
        }
      ]
    }
  }
}
```

---

## Finding 35

**Audit ID:** `LRB070-0035`
**Finding Stable ID:** `g2/a1/lb|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0038`
**Lang:** lb
**Card:** `a1-fahren`
**Field / path:** `a1.card.a1-fahren.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** braukt
**DE reference (read-only):** fahren
**CURRENT (captured scope):** Braukt • Vest • Aizvest
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-fahren / a1.card.a1-fahren.study.translation: exact Luxembourgish wording for German 'fahren' (Latvian 'braukt') is not established by the supplied evidence; production currently has 'Braukt • Vest • Aizvest' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "fahren",
  "lv": "Braukt • Vest • Aizvest",
  "level": "A1",
  "study": {
    "id": "a1-fahren",
    "layout": "standardStudy",
    "translation": "Braukt • Vest • Aizvest",
    "explanation": [
      "Galvenā doma: fueren nozīmē braukt ar transportu un dažos teikumos arī vest vai aizvest kādu.",
      "Fuert Leto, jo pārvietošanās notiek ar auto, autobusu, vilcienu, velosipēdu vai citu transportlīdzekli.",
      "Wann de Saz eng Persoun als Objet huet, kann Fahren féieren oder ewechhuelen.",
      "Ja kustība notiek kājām, parasti lieto walk vai run."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Es braucu uz Berlīni."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Ee fir Autoen."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Mēs rīt braucam uz Minheni."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "Reit Den Transport",
        "example": "Ech fuer mam Bus."
      },
      {
        "word": "gehen",
        "meaning": "Iet kājām",
        "example": "Ech ginn heemgoen."
      },
      {
        "word": "laufen",
        "meaning": "CAA -",
        "example": "Hien laapt séier."
      },
      {
        "word": "bringen",
        "meaning": "Atnest / nogādāt",
        "example": "Ech bréngen d'Bréck."
      },
      {
        "word": "mitnehmen",
        "meaning": "CAA -",
        "example": "Ech nemmen dech mat."
      }
    ],
    "tip": {
      "text": "Atceries: transportlīdzeklis → fahren; kājām → gehen."
    },
    "important": {
      "text": "Dat ass dat „wir\"., Hier waren wir nie! '",
      "example": "Vācu valodā viens un tas pats darbības vārds bieži nozīmē: braukt • vest • aizvest atkarībā no konteksta."
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
        "transportlīdzekli",
        "auto",
        "autobusu",
        "vilcienu",
        "velosipēdu"
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
          "braukt",
          "vest",
          "aizvest"
        ],
        "green": [
          "auto",
          "autobusu",
          "vilcienu",
          "velosipēdu",
          "transportlīdzekli"
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
              "fahre"
            ]
          },
          "lv": {
            "purple": [
              "braucu"
            ],
            "green": [
              "Berlīni"
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
              "fir"
            ],
            "green": [
              "auto"
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
              "Dat"
            ],
            "green": [
              "Dat",
              "Dat"
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
              "Dat"
            ],
            "green": [
              "Dat",
              "Dat"
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
              "braucam"
            ],
            "green": [
              "Minheni"
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
              "Reit"
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
              "iet kājām"
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
              "CAA",
              "CAA"
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
              "atnest",
              "nogādāt"
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
              "CAA"
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
            "transportlīdzeklis",
            "kājām"
          ]
        }
      },
      "important": [
        {
          "text": {
            "blue": [
              "waren"
            ],
            "purple": [
              "braukt"
            ]
          },
          "example": {
            "blue": [
              "waren"
            ],
            "purple": [
              "braukt",
              "vest",
              "aizvest"
            ]
          }
        }
      ]
    }
  }
}
```

---

## Finding 36

**Audit ID:** `LRB070-0036`
**Finding Stable ID:** `g2/a1/lb|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0039`
**Lang:** lb
**Card:** `a1-finden`
**Field / path:** `a1.card.a1-finden.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** atrast
**DE reference (read-only):** finden
**CURRENT (captured scope):** Fannt • Betruecht
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-finden / a1.card.a1-finden.native: exact Luxembourgish wording for German 'finden' (Latvian 'atrast') is not established by the supplied evidence; production currently has 'Fannt • Betruecht' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "finden",
  "lv": "Fannt • Betruecht",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "Fannt • Betruecht",
    "explanation": [
      "Galvenā doma: fënns visbiežāk nozīmē atrast.",
      "Sarunās fannen Ōoti bieži nozīmē arī uzskatīt vai domāt par kaut ko.",
      "Jo runa ir par pazaudētu lietu, tulko kā atrast.",
      "Et geet ëm e puer, tulko ka uzskatīt wai šķist."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Hutt Dir Ären Telefon fonnt?"
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "MAN TASSSIET LABI."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Wat haalt Dir vum Film?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "Atrast / uzskatīt",
        "example": "Ich finde das gut. = Ech fannen dat gutt."
      },
      {
        "word": "suchen",
        "meaning": "CAA -",
        "example": "Ich suche den Schlüssel. = Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "word": "denken",
        "meaning": "CAA -",
        "example": "Ich denke an dich. = Et ass domāju par tevi."
      },
      {
        "word": "glauben",
        "meaning": "Ticēt / domāt",
        "example": "Ich glaube, er kommt. = Et ass domāju, ka việš nāks."
      }
    ],
    "tip": {
      "text": "Atceries: pazaudēta lieta → finden; viedoklis → ich finde..."
    },
    "important": [
      "finden ass net nëmmen \"fannen\".",
      "Ich finde das gut heescht \"ech fannen dat gutt\", net \"ech fannen et gutt\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "fannen"
        ],
        "purple": [
          "atrast",
          "uzskatīt",
          "domāt",
          "šķist"
        ],
        "green": [
          "pazaudētu lietu",
          "Galvenā"
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
              "Dat"
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
              "Hutt"
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
              "MAN"
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
              "Wat"
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
              "CAA"
            ]
          },
          "example": {
            "yellow": [
              "suche",
              "Ich"
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
              "CAA"
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

## Finding 37

**Audit ID:** `LRB070-0037`
**Finding Stable ID:** `g2/a1/lb|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0040`
**Lang:** lb
**Card:** `a1-finden`
**Field / path:** `a1.card.a1-finden.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** atrast
**DE reference (read-only):** finden
**CURRENT (captured scope):** Fannt • Betruecht
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-finden / a1.card.a1-finden.study.translation: exact Luxembourgish wording for German 'finden' (Latvian 'atrast') is not established by the supplied evidence; production currently has 'Fannt • Betruecht' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "finden",
  "lv": "Fannt • Betruecht",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "Fannt • Betruecht",
    "explanation": [
      "Galvenā doma: fënns visbiežāk nozīmē atrast.",
      "Sarunās fannen Ōoti bieži nozīmē arī uzskatīt vai domāt par kaut ko.",
      "Jo runa ir par pazaudētu lietu, tulko kā atrast.",
      "Et geet ëm e puer, tulko ka uzskatīt wai šķist."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Hutt Dir Ären Telefon fonnt?"
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "MAN TASSSIET LABI."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Wat haalt Dir vum Film?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "Atrast / uzskatīt",
        "example": "Ich finde das gut. = Ech fannen dat gutt."
      },
      {
        "word": "suchen",
        "meaning": "CAA -",
        "example": "Ich suche den Schlüssel. = Dat ass dat „wir\"., Hier waren wir nie! '"
      },
      {
        "word": "denken",
        "meaning": "CAA -",
        "example": "Ich denke an dich. = Et ass domāju par tevi."
      },
      {
        "word": "glauben",
        "meaning": "Ticēt / domāt",
        "example": "Ich glaube, er kommt. = Et ass domāju, ka việš nāks."
      }
    ],
    "tip": {
      "text": "Atceries: pazaudēta lieta → finden; viedoklis → ich finde..."
    },
    "important": [
      "finden ass net nëmmen \"fannen\".",
      "Ich finde das gut heescht \"ech fannen dat gutt\", net \"ech fannen et gutt\"."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "fannen"
        ],
        "purple": [
          "atrast",
          "uzskatīt",
          "domāt",
          "šķist"
        ],
        "green": [
          "pazaudētu lietu",
          "Galvenā"
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
              "Dat"
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
              "Hutt"
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
              "MAN"
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
              "Wat"
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
              "CAA"
            ]
          },
          "example": {
            "yellow": [
              "suche",
              "Ich"
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
              "CAA"
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

## Finding 38

**Audit ID:** `LRB070-0038`
**Finding Stable ID:** `g2/a1/lb|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0041`
**Lang:** lb
**Card:** `a1-frau`
**Field / path:** `a1.card.a1-frau.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** sieviete
**DE reference (read-only):** Frau
**CURRENT (captured scope):** Sieviete • Sieva
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-frau / a1.card.a1-frau.native: exact Luxembourgish wording for German 'Frau' (Latvian 'sieviete') is not established by the supplied evidence; production currently has 'Sieviete • Sieva' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "Sieviete • Sieva",
  "level": "A1",
  "study": {
    "id": "a1-frau",
    "layout": "standardStudy",
    "translation": "Sieviete • Sieva",
    "explanation": [
      "Galvenā doma: la femme var nozīmēt sievieti (dzimums) vai sievu (laulātā).",
      "Wann et nëmmen eng Fro vu Geschlecht oder Persoun ass, datt Frau = Fra.",
      "Yes runa ir par laulāto partneri, de femme = sieva (ma femme = mana sieva).",
      "Piederības vietniekvārds (my/your/his wife) gandrīz vienmēr nozīmē sievu — laulāto.",
      "DAudzskaitlī: les femmes.",
      "Vīriešu formai de Mann ir tāda pati divkārtēja nozīme: vīrietis UN vīrs."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "D'Viraussetzung dofir ass, datt de Jaucaud sech ophält."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Den Haaptuert ass Sieva."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Cik sieviešu iršeit?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Meng Fra schafft zu Berlin."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Sieviete valkā kleitu."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Seng Fra ass Dokter."
      }
    ],
    "tip": [
      "Mat Possessivpronomen (meine/deine/seine Frau) gëtt bal ëmmer d'Husfra (verhéirat) gemengt.",
      "Ouni Possessivpronomen (die Frau, eine Frau) gëtt normalerweis d'Fra gemengt."
    ],
    "important": [
      "die Frau = Fra oder Husfra — jee no Kontext.",
      "meine Frau = meng Husfra (net 'meng Fra').",
      "DAudzskaitlī: les femmes."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "Frau"
        ],
        "purple": [
          "sievieti",
          "sieva"
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
              "D'Viraussetzung"
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
              "sieva"
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
              "sieviešu"
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
              "Meng"
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
              "sieviete"
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
              "Seng"
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
            "sieva"
          ]
        },
        {
          "blue": [
            "die Frau",
            "eine Frau"
          ],
          "purple": [
            "sieviete"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "sieviete",
            "sieva"
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

## Finding 39

**Audit ID:** `LRB070-0039`
**Finding Stable ID:** `g2/a1/lb|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0042`
**Lang:** lb
**Card:** `a1-frau`
**Field / path:** `a1.card.a1-frau.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** sieviete
**DE reference (read-only):** Frau
**CURRENT (captured scope):** Sieviete • Sieva
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-frau / a1.card.a1-frau.study.translation: exact Luxembourgish wording for German 'Frau' (Latvian 'sieviete') is not established by the supplied evidence; production currently has 'Sieviete • Sieva' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "Sieviete • Sieva",
  "level": "A1",
  "study": {
    "id": "a1-frau",
    "layout": "standardStudy",
    "translation": "Sieviete • Sieva",
    "explanation": [
      "Galvenā doma: la femme var nozīmēt sievieti (dzimums) vai sievu (laulātā).",
      "Wann et nëmmen eng Fro vu Geschlecht oder Persoun ass, datt Frau = Fra.",
      "Yes runa ir par laulāto partneri, de femme = sieva (ma femme = mana sieva).",
      "Piederības vietniekvārds (my/your/his wife) gandrīz vienmēr nozīmē sievu — laulāto.",
      "DAudzskaitlī: les femmes.",
      "Vīriešu formai de Mann ir tāda pati divkārtēja nozīme: vīrietis UN vīrs."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "D'Viraussetzung dofir ass, datt de Jaucaud sech ophält."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Den Haaptuert ass Sieva."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Cik sieviešu iršeit?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Meng Fra schafft zu Berlin."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Sieviete valkā kleitu."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Seng Fra ass Dokter."
      }
    ],
    "tip": [
      "Mat Possessivpronomen (meine/deine/seine Frau) gëtt bal ëmmer d'Husfra (verhéirat) gemengt.",
      "Ouni Possessivpronomen (die Frau, eine Frau) gëtt normalerweis d'Fra gemengt."
    ],
    "important": [
      "die Frau = Fra oder Husfra — jee no Kontext.",
      "meine Frau = meng Husfra (net 'meng Fra').",
      "DAudzskaitlī: les femmes."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Galvenā",
          "Frau"
        ],
        "purple": [
          "sievieti",
          "sieva"
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
              "D'Viraussetzung"
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
              "sieva"
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
              "sieviešu"
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
              "Meng"
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
              "sieviete"
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
              "Seng"
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
            "sieva"
          ]
        },
        {
          "blue": [
            "die Frau",
            "eine Frau"
          ],
          "purple": [
            "sieviete"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "sieviete",
            "sieva"
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

## Finding 40

**Audit ID:** `LRB070-0040`
**Finding Stable ID:** `g2/a1/lb|a1-fuer|a1.card.a1-fuer.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0043`
**Lang:** lb
**Card:** `a1-fuer`
**Field / path:** `a1.card.a1-fuer.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** priekš
**DE reference (read-only):** für
**CURRENT (captured scope):** Virun • Virun
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-fuer / a1.card.a1-fuer.native: exact Luxembourgish wording for German 'für' (Latvian 'priekš') is not established by the supplied evidence; production currently has 'Virun • Virun' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "für",
  "lv": "Virun • Virun",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "Virun • Virun",
    "explanation": [
      "Galvenā doma: fir ir prievārds, kas vienmēr pārvalda akuzatīvu — latviski parasti priekš vai par.",
      "Runājot par saēēmēju vai nolūku, fir = priekš (for you = priekš tevis).",
      "Runājot par apmaiếu, maxu vai imeslu, fir = par (merci pour le cadeau = paldies par dāvanu).",
      "Für erfuerdert ëmmer den Akkusativ, onofhängeg vun der Bedeitung."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "Et ass fir Iech."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "PALDIES par palīdzību."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Es pērku dāvanu savai mātei."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Cik du maxā par auto?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Grāmata ir priekš bērniem."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Šodienai Sak ir gana."
      }
    ],
    "tip": [
      "für ëmmer + Akkusativ — onofhängeg vun der Bedeitung.",
      "Empfänger/Ziel → fir; Tausch/Grond/Bezuelung → fir."
    ],
    "important": [
      "für + Akkusativ ëmmer, zum Beispill für mich, für dich, für das Kind.",
      "danke für / bezahlen für = 'fir', net 'fir'."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "für"
        ],
        "purple": [
          "priekš",
          "par"
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
              "Et"
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
              "par"
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
              "savai"
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
              "par"
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
              "priekš"
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
              "šodienai"
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
            "priekš",
            "par"
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
            "par"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 41

**Audit ID:** `LRB070-0041`
**Finding Stable ID:** `g2/a1/lb|a1-fuer|a1.card.a1-fuer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0044`
**Lang:** lb
**Card:** `a1-fuer`
**Field / path:** `a1.card.a1-fuer.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** priekš
**DE reference (read-only):** für
**CURRENT (captured scope):** Virun • Virun
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-fuer / a1.card.a1-fuer.study.translation: exact Luxembourgish wording for German 'für' (Latvian 'priekš') is not established by the supplied evidence; production currently has 'Virun • Virun' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "für",
  "lv": "Virun • Virun",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "Virun • Virun",
    "explanation": [
      "Galvenā doma: fir ir prievārds, kas vienmēr pārvalda akuzatīvu — latviski parasti priekš vai par.",
      "Runājot par saēēmēju vai nolūku, fir = priekš (for you = priekš tevis).",
      "Runājot par apmaiếu, maxu vai imeslu, fir = par (merci pour le cadeau = paldies par dāvanu).",
      "Für erfuerdert ëmmer den Akkusativ, onofhängeg vun der Bedeitung."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "Et ass fir Iech."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "PALDIES par palīdzību."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Es pērku dāvanu savai mātei."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Cik du maxā par auto?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Grāmata ir priekš bērniem."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Šodienai Sak ir gana."
      }
    ],
    "tip": [
      "für ëmmer + Akkusativ — onofhängeg vun der Bedeitung.",
      "Empfänger/Ziel → fir; Tausch/Grond/Bezuelung → fir."
    ],
    "important": [
      "für + Akkusativ ëmmer, zum Beispill für mich, für dich, für das Kind.",
      "danke für / bezahlen für = 'fir', net 'fir'."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "für"
        ],
        "purple": [
          "priekš",
          "par"
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
              "Et"
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
              "par"
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
              "savai"
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
              "par"
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
              "priekš"
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
              "šodienai"
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
            "priekš",
            "par"
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
            "par"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 42

**Audit ID:** `LRB070-0042`
**Finding Stable ID:** `g2/a1/lb|a1-ganz-study|a1.card.a1-ganz-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0045`
**Lang:** lb
**Card:** `a1-ganz-study`
**Field / path:** `a1.card.a1-ganz-study.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** vesels • viss kopumā • pilnīgi
**DE reference (read-only):** ganz
**CURRENT (captured scope):** ganz • alles zesummen • komplett
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-ganz-study / a1.card.a1-ganz-study.study.comparison[0].meaning: exact Luxembourgish wording for German 'ganz' (Latvian 'vesels • viss kopumā • pilnīgi') is not established by the supplied evidence; production currently has 'ganz • alles zesummen • komplett' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "ganz",
  "lv": "Schëffer",
  "level": "A1",
  "study": {
    "id": "a1-ganz-study",
    "layout": "standardStudy",
    "translation": "Schëffer",
    "explanation": [
      "Haaptidee: ganz zesummen mat engem Substantiv bedeit ganz oder alles zesummen.",
      "Vir engem Adjektiv oder Adverb kann ganz komplett, ganz oder zimlech bedeiten.",
      "ganz ass net d'selwecht wéi d'Pronomen alles."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "ech schaffen de ganz Dag."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "d'ganz Haus ass souber."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "dat ass komplett sécher."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "d'Iessen ass zimlech gutt."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "ganz • alles zesummen • komplett",
        "example": "der ganze Tag – de ganz Dag"
      },
      {
        "word": "alles",
        "meaning": "Fësch",
        "example": "Alles ist gut. – Alles ass gutt."
      }
    ],
    "tip": [
      "Virun engem Substantiv bedeit ganz dacks alles oder ganz.",
      "Virun engem Adjektiv bedeit ganz dacks komplett oder zimlech."
    ],
    "important": [
      "der ganze Tag = de ganz Dag.",
      "alles = alles als Pronomen."
    ]
  }
}
```

---

## Finding 43

**Audit ID:** `LRB070-0043`
**Finding Stable ID:** `g2/a1/lb|a1-gefallen-study|a1.card.a1-gefallen-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0046`
**Lang:** lb
**Card:** `a1-gefallen-study`
**Field / path:** `a1.card.a1-gefallen-study.study.comparison[0].meaning`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** patikt • persona datīvā
**DE reference (read-only):** gefallen
**CURRENT (captured scope):** gefall • Persoun am Dativ
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-gefallen-study / a1.card.a1-gefallen-study.study.comparison[0].meaning: exact Luxembourgish wording for German 'gefallen' (Latvian 'patikt • persona datīvā') is not established by the supplied evidence; production currently has 'gefall • Persoun am Dativ' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gefallen",
  "lv": "CAA -",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "CAA -",
    "explanation": [
      "Haaptidee: gefallen bedeit gefall, mä de välllesch Teekschdrok ass anescht wéi Letzebuerg.",
      "D'Saach, déi gefällt, ass däitsch de Saz Sujet.",
      "D'Persoun, fir déi eppes gefällt, ass am Dativ: mir, dir, him, hir, eis, iech, hinnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "dat gefällt mer."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "gefällt dir de Kleed?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "mir gefällt de Film."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "gefall • Persoun am Dativ",
        "example": "Das gefällt mir. – Dat gefall mer."
      },
      {
        "word": "mögen",
        "meaning": "gefall • gär huelen",
        "example": "Ich mag das. – Dat gefällt mer."
      }
    ],
    "tip": [
      "Erënnert dech d'Konstruktioun: Das gefällt mir.",
      "Maw net d'wortwörtlech Letzebuerg Wuertséquence."
    ],
    "important": [
      "gefallen gëtt mat Dativ benotzt: mir, dir, him, hir.",
      "Das gefällt mir = dat gefall mer."
    ]
  }
}
```

---

## Finding 44

**Audit ID:** `LRB070-0044`
**Finding Stable ID:** `g2/a1/lb|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0048`
**Lang:** lb
**Card:** `a1-gleich`
**Field / path:** `a1.card.a1-gleich.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tūlīt
**DE reference (read-only):** gleich
**CURRENT (captured scope):** Tūlīt • Vienāds
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-gleich / a1.card.a1-gleich.native: exact Luxembourgish wording for German 'gleich' (Latvian 'tūlīt') is not established by the supplied evidence; production currently has 'Tūlīt • Vienāds' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gleich",
  "lv": "Tūlīt • Vienāds",
  "level": "A1",
  "study": {
    "id": "a1-gleich",
    "layout": "standardStudy",
    "translation": "Tūlīt • Vienāds",
    "explanation": [
      "Galvenā doma: gläich wéi laika ziệā nozīmē tūlīt, salīdzinājumā nozīmē vienāds.",
      "Wann et op Zäit ukomm ass, gleich = sofort/sobald (Ich komme gleich. DA = I'll be right there).",
      "Jo runa ir par salīdzinājumu, gläich = vienāds/tāds pats (déiselwecht Faarf = vienāda krāsa).",
      "Gläich zu var lietot arī kā prievārdu ar datīvu, nozīmē tāpat kā (gläich zu mir = tāpat kā man)."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "DAHA ÇOK İYİ."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "Mir hunn déi selwecht Faarf."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "D'Iessen ass geschwënn prett."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Abi ceṅi ir vienādi gari."
      },
      {
        "de": "Bis gleich!",
        "lv": "Līdz tūlīt!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "D'Viraussetzung ass, datt et sech hei ëm eng Wunneng handelt."
      }
    ],
    "tip": [
      "Iwwer Zäit (no kurz) → tireweg.",
      "Iwwer Verglach (d'selwett) → d'selwett."
    ],
    "important": [
      "gleich = tireweg (Zäit) ODER d'selwett (Verglach).",
      "Bis gleich! = līdz tūlīt! — ierasta atvadu frāze."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "gleich"
        ],
        "purple": [
          "tūlīt",
          "vienāds"
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
              "DAHA"
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
              "Mir"
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
              "D'Iessen"
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
              "vienādi"
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
              "tūlīt"
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
              "D'Viraussetzung"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "tūlīt"
          ]
        },
        {
          "green": [
            "vienāds"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "tūlīt",
            "vienāds"
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

## Finding 45

**Audit ID:** `LRB070-0045`
**Finding Stable ID:** `g2/a1/lb|a1-gleich|a1.card.a1-gleich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0049`
**Lang:** lb
**Card:** `a1-gleich`
**Field / path:** `a1.card.a1-gleich.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** tūlīt
**DE reference (read-only):** gleich
**CURRENT (captured scope):** Tūlīt • Vienāds
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-gleich / a1.card.a1-gleich.study.translation: exact Luxembourgish wording for German 'gleich' (Latvian 'tūlīt') is not established by the supplied evidence; production currently has 'Tūlīt • Vienāds' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "gleich",
  "lv": "Tūlīt • Vienāds",
  "level": "A1",
  "study": {
    "id": "a1-gleich",
    "layout": "standardStudy",
    "translation": "Tūlīt • Vienāds",
    "explanation": [
      "Galvenā doma: gläich wéi laika ziệā nozīmē tūlīt, salīdzinājumā nozīmē vienāds.",
      "Wann et op Zäit ukomm ass, gleich = sofort/sobald (Ich komme gleich. DA = I'll be right there).",
      "Jo runa ir par salīdzinājumu, gläich = vienāds/tāds pats (déiselwecht Faarf = vienāda krāsa).",
      "Gläich zu var lietot arī kā prievārdu ar datīvu, nozīmē tāpat kā (gläich zu mir = tāpat kā man)."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "DAHA ÇOK İYİ."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "Mir hunn déi selwecht Faarf."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "D'Iessen ass geschwënn prett."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Abi ceṅi ir vienādi gari."
      },
      {
        "de": "Bis gleich!",
        "lv": "Līdz tūlīt!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "D'Viraussetzung ass, datt et sech hei ëm eng Wunneng handelt."
      }
    ],
    "tip": [
      "Iwwer Zäit (no kurz) → tireweg.",
      "Iwwer Verglach (d'selwett) → d'selwett."
    ],
    "important": [
      "gleich = tireweg (Zäit) ODER d'selwett (Verglach).",
      "Bis gleich! = līdz tūlīt! — ierasta atvadu frāze."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "gleich"
        ],
        "purple": [
          "tūlīt",
          "vienāds"
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
              "DAHA"
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
              "Mir"
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
              "D'Iessen"
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
              "vienādi"
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
              "tūlīt"
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
              "D'Viraussetzung"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "tūlīt"
          ]
        },
        {
          "green": [
            "vienāds"
          ]
        }
      ],
      "important": [
        {
          "purple": [
            "tūlīt",
            "vienāds"
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

## Finding 46

**Audit ID:** `LRB070-0046`
**Finding Stable ID:** `g2/a1/lb|a1-halten|a1.card.a1-halten.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0050`
**Lang:** lb
**Card:** `a1-halten`
**Field / path:** `a1.card.a1-halten.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** turēt
**DE reference (read-only):** halten
**CURRENT (captured scope):** Turēt • Apturēt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-halten / a1.card.a1-halten.native: exact Luxembourgish wording for German 'halten' (Latvian 'turēt') is not established by the supplied evidence; production currently has 'Turēt • Apturēt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "halten",
  "lv": "Turēt • Apturēt",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "Turēt • Apturēt",
    "explanation": [
      "Haaptiddi: Holding heescht Holding, awer kann och beim Transport oder Bewegung ophalen oder ophalen.",
      "Den Haaptuert ass Sauvage.",
      "Ar autobusu, vilcienu vai auto hold bieži nozīmē apstāties.",
      "Viedokṅa frāzē Ech betruechten dat... tas nozīmē uzskatīt par."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Es Turu selwechten."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Bus šeit apstājas."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Please mam stop"
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Ech sin also an daat Gebai gaangen."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "Turēt / apstāties",
        "example": "Der Bus hält. = De Bus hält."
      },
      {
        "word": "nehmen",
        "meaning": "Eidel",
        "example": "Ich nehme die Tasche. = Ech hunn de Bréck."
      },
      {
        "word": "anhalten",
        "meaning": "Stop",
        "example": "Bitte halten Sie an. = Wéi gelieft, halt."
      },
      {
        "word": "denken",
        "meaning": "CAA -",
        "example": "Ich denke, das ist richtig. = Ech denken, dat ass richteg."
      }
    ],
    "tip": {
      "text": "Atceries: rokā → halten; transports → hält/apstājas."
    },
    "important": [
      "halten nav tikai “turēt”. Ar transportu tas bieži nozīmē apstāties.",
      "Ich halte das für... ir viedokļa frāze: “es to uzskatu par...”.",
      "Bitte halten Sie an benotzt den Trennbar Verb anhalten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Haaptiddi"
        ],
        "purple": [
          "Haaptiddi",
          "Haaptiddi",
          "apstāties",
          "uzskatīt par"
        ],
        "green": [
          "transport",
          "Haaptiddi"
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
              "turu"
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
              "apstājas"
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
              "Stop"
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
              "Ech"
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
              "turēt",
              "apstāties"
            ]
          },
          "example": {
            "blue": [
              "hält"
            ],
            "purple": [
              "apstājas"
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
              "Eidel"
            ]
          },
          "example": {
            "yellow": [
              "nehme",
              "Ich"
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
              "Stop"
            ]
          },
          "example": {
            "red": [
              "Stoppen",
              "Stoppen"
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
              "CAA"
            ]
          },
          "example": {
            "green": [
              "denke",
              "domāju"
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
            "rokā",
            "apstājas"
          ],
          "green": [
            "transports"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "halten"
          ],
          "purple": [
            "turēt",
            "apstāties"
          ]
        },
        {
          "blue": [
            "halte"
          ],
          "purple": [
            "uzskatu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 47

**Audit ID:** `LRB070-0047`
**Finding Stable ID:** `g2/a1/lb|a1-halten|a1.card.a1-halten.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0051`
**Lang:** lb
**Card:** `a1-halten`
**Field / path:** `a1.card.a1-halten.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** turēt
**DE reference (read-only):** halten
**CURRENT (captured scope):** Turēt • Apturēt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-halten / a1.card.a1-halten.study.translation: exact Luxembourgish wording for German 'halten' (Latvian 'turēt') is not established by the supplied evidence; production currently has 'Turēt • Apturēt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "de": "halten",
  "lv": "Turēt • Apturēt",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "Turēt • Apturēt",
    "explanation": [
      "Haaptiddi: Holding heescht Holding, awer kann och beim Transport oder Bewegung ophalen oder ophalen.",
      "Den Haaptuert ass Sauvage.",
      "Ar autobusu, vilcienu vai auto hold bieži nozīmē apstāties.",
      "Viedokṅa frāzē Ech betruechten dat... tas nozīmē uzskatīt par."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Es Turu selwechten."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Bus šeit apstājas."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Please mam stop"
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Ech sin also an daat Gebai gaangen."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "Turēt / apstāties",
        "example": "Der Bus hält. = De Bus hält."
      },
      {
        "word": "nehmen",
        "meaning": "Eidel",
        "example": "Ich nehme die Tasche. = Ech hunn de Bréck."
      },
      {
        "word": "anhalten",
        "meaning": "Stop",
        "example": "Bitte halten Sie an. = Wéi gelieft, halt."
      },
      {
        "word": "denken",
        "meaning": "CAA -",
        "example": "Ich denke, das ist richtig. = Ech denken, dat ass richteg."
      }
    ],
    "tip": {
      "text": "Atceries: rokā → halten; transports → hält/apstājas."
    },
    "important": [
      "halten nav tikai “turēt”. Ar transportu tas bieži nozīmē apstāties.",
      "Ich halte das für... ir viedokļa frāze: “es to uzskatu par...”.",
      "Bitte halten Sie an benotzt den Trennbar Verb anhalten."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "Haaptiddi"
        ],
        "purple": [
          "Haaptiddi",
          "Haaptiddi",
          "apstāties",
          "uzskatīt par"
        ],
        "green": [
          "transport",
          "Haaptiddi"
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
              "turu"
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
              "apstājas"
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
              "Stop"
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
              "Ech"
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
              "turēt",
              "apstāties"
            ]
          },
          "example": {
            "blue": [
              "hält"
            ],
            "purple": [
              "apstājas"
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
              "Eidel"
            ]
          },
          "example": {
            "yellow": [
              "nehme",
              "Ich"
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
              "Stop"
            ]
          },
          "example": {
            "red": [
              "Stoppen",
              "Stoppen"
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
              "CAA"
            ]
          },
          "example": {
            "green": [
              "denke",
              "domāju"
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
            "rokā",
            "apstājas"
          ],
          "green": [
            "transports"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "halten"
          ],
          "purple": [
            "turēt",
            "apstāties"
          ]
        },
        {
          "blue": [
            "halte"
          ],
          "purple": [
            "uzskatu"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 48

**Audit ID:** `LRB070-0048`
**Finding Stable ID:** `g2/a1/lb|a1-heissen|a1.card.a1-heissen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0052`
**Lang:** lb
**Card:** `a1-heissen`
**Field / path:** `a1.card.a1-heissen.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** saukties
**DE reference (read-only):** heißen
**CURRENT (captured scope):** Saukties • Nozīmēt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-heissen / a1.card.a1-heissen.native: exact Luxembourgish wording for German 'heißen' (Latvian 'saukties') is not established by the supplied evidence; production currently has 'Saukties • Nozīmēt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

Saukties • Nozīmēt

---

## Finding 49

**Audit ID:** `LRB070-0049`
**Finding Stable ID:** `g2/a1/lb|a1-heissen|a1.card.a1-heissen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0053`
**Lang:** lb
**Card:** `a1-heissen`
**Field / path:** `a1.card.a1-heissen.study.translation`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** saukties
**DE reference (read-only):** heißen
**CURRENT (captured scope):** Saukties • Nozīmēt
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-heissen / a1.card.a1-heissen.study.translation: exact Luxembourgish wording for German 'heißen' (Latvian 'saukties') is not established by the supplied evidence; production currently has 'Saukties • Nozīmēt' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
**Unresolved category:** MULTI_TRANSLATION_SCALAR_DECISION_REQUIRED
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

Saukties • Nozīmēt

---

## Finding 50

**Audit ID:** `LRB070-0050`
**Finding Stable ID:** `g2/a1/lb|a1-hoeren-study|a1.card.a1-hoeren-study.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Finding Member ID:** `G2A1P3-LB-0054`
**Lang:** lb
**Card:** `a1-hoeren-study`
**Field / path:** `a1.card.a1-hoeren-study.native`
**Production file:** `crowdin-staging/g2/lb-a1.json`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**Raw category:** MULTI_TRANSLATION
**LV source (read-only):** dzirdēt • klausīties
**DE reference (read-only):** hören
**CURRENT (captured scope):** Dzirdēt • Klausīties
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING after individual lexical review of a1-hoeren-study / a1.card.a1-hoeren-study.native: exact Luxembourgish wording for German 'hören' (Latvian 'dzirdēt • klausīties') is not established by the supplied evidence; production currently has 'Dzirdēt • Klausīties' and no candidate replacement. A Luxembourgish OWNER must supply or confirm the precise lemma.
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

