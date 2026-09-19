# G2/A1 LRB LRB-089 — OWNER VIEW

**Batch:** LRB-089
**Rows:** 50/50
**Languages:** SK 50
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T12:33:21.554Z
**Source commit:** `841eff8829636c6a866fbf03286e51b38cea8e4a`
**Branch:** `cursor/lrb-089-owner-authorization-ed35`
**Overrides SHA256:** `9b1a79e1d0d37c4ff58c303e8a021a7f8f9f2116e2df45ce0ef6ee429bdd783e`
**Classification:** `G2_A1_LRB_OWNER_APPROVED_OVERRIDES_APPLIED`

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB089-0001`
**Finding Stable ID:** `g2/a1/sk|a1-koennen|a1.card.a1-koennen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-koennen`
**Field / path:** `a1.card.a1-koennen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Byť schopný • Vedieť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Môcť • Vedieť","study":{"id":"a1-können","layout":"standardStudy","translation":"Môcť • Vedieť","explanation":["Hlavná myšlienka: können znamená byť schopný alebo vedieť niečo robiť.","Keď ide o schopnosť alebo zručnosť, v slovenčine sa často používa „vedieť“ alebo „dokázať“.","Keď ide o možnosť, často sa používa „môcť“.","Können je modálne sloveso, takže druhé sloveso je zvyčajne posledné."],"examples":[{"de":"Ich kann Deutsch sprechen.","lv":"Viem hovoriť po nemecky."},{"de":"Kannst du mir helfen?","lv":"Môžeš mi pomôcť?"},{"de":"Wir können heute kommen.","lv":"Dnes môžeme prísť."},{"de":"Er kann gut schwimmen.","lv":"Vie dobre plávať."}],"comparison":[{"word":"können","meaning":"Môcť • Vedieť","example":"Ich kann schwimmen. = Viem plávať."},{"word":"dürfen","meaning":"Mať dovolené","example":"Darf ich gehen? = Smiem ísť?"},{"word":"müssen","meaning":"Musieť • Byť povinný","example":"Ich muss lernen. = Musím sa učiť."},{"word":"wissen","meaning":"Vedieť (fakt)","example":"Ich weiß das. = To viem."}],"tip":{"text":"Pamätaj: schopnosť alebo zručnosť → können."},"important":["können nie je to isté ako dürfen: können = môcť • vedieť; dürfen = smieť.","Vo vete s können sa na konci často objavuje druhé sloveso: Ich kann schwimmen."],"sectionAccents":{"explanation":{"blue":["können"]},"examples":[{"de":{"blue":["kann"]},"lv":{}},{"de":{"blue":["Kannst"]},"lv":{}},{"de":{"blue":["können"]},"lv":{}},{"de":{"blue":["kann"]},"lv":{}}],"comparison":[{"word":{"green":["können"]},"meaning":{},"example":{}},{"word":{"green":["dürfen"]},"meaning":{},"example":{"red":["Darf"]}},{"word":{"green":["müssen"]},"meaning":{},"example":{"yellow":["muss","Musím"]}},{"word":{"green":["wissen"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["können"]}},"important":[{"blue":["können"],"red":["dürfen"]},{"blue":["kann"],"green":["schwimmen"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "können",
  "lv": "Môcť • Vedieť",
  "level": "A1",
  "study": {
    "id": "a1-können",
    "layout": "standardStudy",
    "translation": "Môcť • Vedieť",
    "explanation": [
      "Hlavná myšlienka: können znamená byť schopný alebo vedieť niečo robiť.",
      "Keď ide o schopnosť alebo zručnosť, v slovenčine sa často používa „vedieť“ alebo „dokázať“.",
      "Keď ide o možnosť, často sa používa „môcť“.",
      "Können je modálne sloveso, takže druhé sloveso je zvyčajne posledné."
    ],
    "examples": [
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Viem hovoriť po nemecky."
      },
      {
        "de": "Kannst du mir helfen?",
        "lv": "Môžeš mi pomôcť?"
      },
      {
        "de": "Wir können heute kommen.",
        "lv": "Dnes môžeme prísť."
      },
      {
        "de": "Er kann gut schwimmen.",
        "lv": "Vie dobre plávať."
      }
    ],
    "comparison": [
      {
        "word": "können",
        "meaning": "Môcť • Vedieť",
        "example": "Ich kann schwimmen. = Viem plávať."
      },
      {
        "word": "dürfen",
        "meaning": "Mať dovolené",
        "example": "Darf ich gehen? = Smiem ísť?"
      },
      {
        "word": "müssen",
        "meaning": "Musieť • Byť povinný",
        "example": "Ich muss lernen. = Musím sa učiť."
      },
      {
        "word": "wissen",
        "meaning": "Vedieť (fakt)",
        "example": "Ich weiß das. = To viem."
      }
    ],
    "tip": {
      "text": "Pamätaj: schopnosť alebo zručnosť → können."
    },
    "important": [
      "können nie je to isté ako dürfen: können = môcť • vedieť; dürfen = smieť.",
      "Vo vete s können sa na konci často objavuje druhé sloveso: Ich kann schwimmen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "können"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "kann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Kannst"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "können"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
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
              "können"
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
        },
        {
          "word": {
            "green": [
              "müssen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "muss",
              "Musím"
            ]
          }
        },
        {
          "word": {
            "green": [
              "wissen"
            ]
          },
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "können"
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

## Finding 2

**Audit ID:** `LRB089-0002`
**Finding Stable ID:** `g2/a1/sk|a1-koennen|a1.card.a1-koennen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-koennen`
**Field / path:** `a1.card.a1-koennen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Byť schopný • Vedieť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Môcť • Vedieť","study":{"id":"a1-können","layout":"standardStudy","translation":"Môcť • Vedieť","explanation":["Hlavná myšlienka: können znamená byť schopný alebo vedieť niečo robiť.","Keď ide o schopnosť alebo zručnosť, v slovenčine sa často používa „vedieť“ alebo „dokázať“.","Keď ide o možnosť, často sa používa „môcť“.","Können je modálne sloveso, takže druhé sloveso je zvyčajne posledné."],"examples":[{"de":"Ich kann Deutsch sprechen.","lv":"Viem hovoriť po nemecky."},{"de":"Kannst du mir helfen?","lv":"Môžeš mi pomôcť?"},{"de":"Wir können heute kommen.","lv":"Dnes môžeme prísť."},{"de":"Er kann gut schwimmen.","lv":"Vie dobre plávať."}],"comparison":[{"word":"können","meaning":"Môcť • Vedieť","example":"Ich kann schwimmen. = Viem plávať."},{"word":"dürfen","meaning":"Mať dovolené","example":"Darf ich gehen? = Smiem ísť?"},{"word":"müssen","meaning":"Musieť • Byť povinný","example":"Ich muss lernen. = Musím sa učiť."},{"word":"wissen","meaning":"Vedieť (fakt)","example":"Ich weiß das. = To viem."}],"tip":{"text":"Pamätaj: schopnosť alebo zručnosť → können."},"important":["können nie je to isté ako dürfen: können = môcť • vedieť; dürfen = smieť.","Vo vete s können sa na konci často objavuje druhé sloveso: Ich kann schwimmen."],"sectionAccents":{"explanation":{"blue":["können"]},"examples":[{"de":{"blue":["kann"]},"lv":{}},{"de":{"blue":["Kannst"]},"lv":{}},{"de":{"blue":["können"]},"lv":{}},{"de":{"blue":["kann"]},"lv":{}}],"comparison":[{"word":{"green":["können"]},"meaning":{},"example":{}},{"word":{"green":["dürfen"]},"meaning":{},"example":{"red":["Darf"]}},{"word":{"green":["müssen"]},"meaning":{},"example":{"yellow":["muss","Musím"]}},{"word":{"green":["wissen"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["können"]}},"important":[{"blue":["können"],"red":["dürfen"]},{"blue":["kann"],"green":["schwimmen"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "können",
  "lv": "Môcť • Vedieť",
  "level": "A1",
  "study": {
    "id": "a1-können",
    "layout": "standardStudy",
    "translation": "Môcť • Vedieť",
    "explanation": [
      "Hlavná myšlienka: können znamená byť schopný alebo vedieť niečo robiť.",
      "Keď ide o schopnosť alebo zručnosť, v slovenčine sa často používa „vedieť“ alebo „dokázať“.",
      "Keď ide o možnosť, často sa používa „môcť“.",
      "Können je modálne sloveso, takže druhé sloveso je zvyčajne posledné."
    ],
    "examples": [
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Viem hovoriť po nemecky."
      },
      {
        "de": "Kannst du mir helfen?",
        "lv": "Môžeš mi pomôcť?"
      },
      {
        "de": "Wir können heute kommen.",
        "lv": "Dnes môžeme prísť."
      },
      {
        "de": "Er kann gut schwimmen.",
        "lv": "Vie dobre plávať."
      }
    ],
    "comparison": [
      {
        "word": "können",
        "meaning": "Môcť • Vedieť",
        "example": "Ich kann schwimmen. = Viem plávať."
      },
      {
        "word": "dürfen",
        "meaning": "Mať dovolené",
        "example": "Darf ich gehen? = Smiem ísť?"
      },
      {
        "word": "müssen",
        "meaning": "Musieť • Byť povinný",
        "example": "Ich muss lernen. = Musím sa učiť."
      },
      {
        "word": "wissen",
        "meaning": "Vedieť (fakt)",
        "example": "Ich weiß das. = To viem."
      }
    ],
    "tip": {
      "text": "Pamätaj: schopnosť alebo zručnosť → können."
    },
    "important": [
      "können nie je to isté ako dürfen: können = môcť • vedieť; dürfen = smieť.",
      "Vo vete s können sa na konci často objavuje druhé sloveso: Ich kann schwimmen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "können"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "kann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Kannst"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "können"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
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
              "können"
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
        },
        {
          "word": {
            "green": [
              "müssen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "muss",
              "Musím"
            ]
          }
        },
        {
          "word": {
            "green": [
              "wissen"
            ]
          },
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "können"
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

## Finding 3

**Audit ID:** `LRB089-0003`
**Finding Stable ID:** `g2/a1/sk|a1-kosten|a1.card.a1-kosten.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-kosten`
**Field / path:** `a1.card.a1-kosten.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Platiť (cena) • Koľko
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Stáť (cena)","study":{"id":"a1-kosten","layout":"standardStudy","translation":"Stáť (cena)","explanation":["Hlavná myšlienka: kosten znamená stáť určitú sumu – hovorí o cene veci.","Toto slovo používame, keď sa pýtame alebo hovoríme, koľko niečo stojí, nie vtedy, keď daná osoba platí.","Otázka na cenu sa v nemčine často začína slovami Was kostet...?","V slovenčine sa v tomto kontexte používa „stáť“: Das kostet 5 Euro. = Stojí to 5 eur.","Keď niekto dá peniaze za tovar alebo službu, v nemčine sa používa bezahlen alebo zahlen."],"examples":[{"de":"Das kostet 5 Euro.","lv":"Stojí 5 eur."},{"de":"Was kostet das?","lv":"Koľko to stojí?"},{"de":"Wie viel kostet der Pullover?","lv":"Koľko stojí sveter?"},{"de":"Das Essen kostet nicht viel.","lv":"Jedlo nestojí veľa."},{"de":"Ich bezahle die Rechnung.","lv":"Platím účet."},{"de":"Kann ich bar bezahlen?","lv":"Môžem platiť v hotovosti?"},{"de":"Er zahlt mit Karte.","lv":"Platí kartou."},{"de":"Ich zahle gleich.","lv":"Hneď zaplatím."}],"comparison":[{"word":"kosten","meaning":"Stáť (cena) • Koľko to stojí","example":"Das kostet 5 Euro. = To stojí 5 eur."},{"word":"bezahlen","meaning":"Platiť • Zaplatiť","example":"Ich bezahle die Rechnung. = Platím účet."},{"word":"zahlen","meaning":"Platiť • Zaplatiť","example":"Kann ich bar zahlen? = Môžem platiť v hotovosti?"},{"word":"Was kostet...?","meaning":"Koľko stojí...?","example":"Was kostet das Buch? = Koľko stojí kniha?"}],"tip":["Pamätaj: otázka na cenu → kosten (Was kostet das?).","Pamätaj: platba → bezahlen • zahlen (Ich bezahle die Rechnung.)."],"important":["„kosten“ a „bezahlen“ nie sú synonymá: „kosten“ = koľko to stojí; „bezahlen“ = zaplatiť.","V slovenčine sa tieto významy rozlišujú: vec stojí určitú sumu, človek platí; aj v nemčine treba vybrať sloveso podľa situácie."],"sectionAccents":{"explanation":{"blue":["kosten"],"purple":["cene"],"green":["Was kostet"],"yellow":["bezahlen","zahlen"]},"examples":[{"de":{"blue":["kostet"]},"lv":{}},{"de":{"blue":["kostet"]},"lv":{}},{"de":{"blue":["kostet"]},"lv":{}},{"de":{"blue":["kostet"]},"lv":{}},{"de":{"yellow":["bezahle"]},"lv":{}},{"de":{"yellow":["bezahlen"]},"lv":{}},{"de":{"yellow":["zahlt"]},"lv":{}},{"de":{"yellow":["zahle"]},"lv":{}}],"comparison":[{"word":{"green":["kosten"]},"meaning":{"purple":["cena"]},"example":{"blue":["kostet"]}},{"word":{"green":["bezahlen"]},"meaning":{},"example":{"yellow":["bezahle"]}},{"word":{"green":["zahlen"]},"meaning":{},"example":{"yellow":["zahlen"]}},{"word":{"green":["Was kostet"]},"meaning":{},"example":{"blue":["kostet"]}}],"tip":[{"blue":["kosten"],"purple":["cenu"]},{"yellow":["bezahlen","zahlen"]}],"important":[{"blue":["kosten"],"yellow":["bezahlen"]},{}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kosten",
  "lv": "Stáť (cena)",
  "level": "A1",
  "study": {
    "id": "a1-kosten",
    "layout": "standardStudy",
    "translation": "Stáť (cena)",
    "explanation": [
      "Hlavná myšlienka: kosten znamená stáť určitú sumu – hovorí o cene veci.",
      "Toto slovo používame, keď sa pýtame alebo hovoríme, koľko niečo stojí, nie vtedy, keď daná osoba platí.",
      "Otázka na cenu sa v nemčine často začína slovami Was kostet...?",
      "V slovenčine sa v tomto kontexte používa „stáť“: Das kostet 5 Euro. = Stojí to 5 eur.",
      "Keď niekto dá peniaze za tovar alebo službu, v nemčine sa používa bezahlen alebo zahlen."
    ],
    "examples": [
      {
        "de": "Das kostet 5 Euro.",
        "lv": "Stojí 5 eur."
      },
      {
        "de": "Was kostet das?",
        "lv": "Koľko to stojí?"
      },
      {
        "de": "Wie viel kostet der Pullover?",
        "lv": "Koľko stojí sveter?"
      },
      {
        "de": "Das Essen kostet nicht viel.",
        "lv": "Jedlo nestojí veľa."
      },
      {
        "de": "Ich bezahle die Rechnung.",
        "lv": "Platím účet."
      },
      {
        "de": "Kann ich bar bezahlen?",
        "lv": "Môžem platiť v hotovosti?"
      },
      {
        "de": "Er zahlt mit Karte.",
        "lv": "Platí kartou."
      },
      {
        "de": "Ich zahle gleich.",
        "lv": "Hneď zaplatím."
      }
    ],
    "comparison": [
      {
        "word": "kosten",
        "meaning": "Stáť (cena) • Koľko to stojí",
        "example": "Das kostet 5 Euro. = To stojí 5 eur."
      },
      {
        "word": "bezahlen",
        "meaning": "Platiť • Zaplatiť",
        "example": "Ich bezahle die Rechnung. = Platím účet."
      },
      {
        "word": "zahlen",
        "meaning": "Platiť • Zaplatiť",
        "example": "Kann ich bar zahlen? = Môžem platiť v hotovosti?"
      },
      {
        "word": "Was kostet...?",
        "meaning": "Koľko stojí...?",
        "example": "Was kostet das Buch? = Koľko stojí kniha?"
      }
    ],
    "tip": [
      "Pamätaj: otázka na cenu → kosten (Was kostet das?).",
      "Pamätaj: platba → bezahlen • zahlen (Ich bezahle die Rechnung.)."
    ],
    "important": [
      "„kosten“ a „bezahlen“ nie sú synonymá: „kosten“ = koľko to stojí; „bezahlen“ = zaplatiť.",
      "V slovenčine sa tieto významy rozlišujú: vec stojí určitú sumu, človek platí; aj v nemčine treba vybrať sloveso podľa situácie."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kosten"
        ],
        "purple": [
          "cene"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "bezahle"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "bezahlen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "zahlt"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "zahle"
            ]
          },
          "lv": {}
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
              "cena"
            ]
          },
          "example": {
            "blue": [
              "kostet"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bezahlen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "bezahle"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zahlen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "zahlen"
            ]
          }
        },
        {
          "word": {
            "green": [
              "Was kostet"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "kostet"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "kosten"
          ],
          "purple": [
            "cenu"
          ]
        },
        {
          "yellow": [
            "bezahlen",
            "zahlen"
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
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 4

**Audit ID:** `LRB089-0004`
**Finding Stable ID:** `g2/a1/sk|a1-kosten|a1.card.a1-kosten.study.important[0]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-kosten`
**Field / path:** `a1.card.a1-kosten.study.important[0]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Kosten a bezahlen nie sú synonymá: kosten = koľko to stojí • Bezahlen = platiť peniaze.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Stáť (cena)","study":{"id":"a1-kosten","layout":"standardStudy","translation":"Stáť (cena)","explanation":["Hlavná myšlienka: kosten znamená stáť určitú sumu – hovorí o cene veci.","Toto slovo používame, keď sa pýtame alebo hovoríme, koľko niečo stojí, nie vtedy, keď daná osoba platí.","Otázka na cenu sa v nemčine často začína slovami Was kostet...?","V slovenčine sa v tomto kontexte používa „stáť“: Das kostet 5 Euro. = Stojí to 5 eur.","Keď niekto dá peniaze za tovar alebo službu, v nemčine sa používa bezahlen alebo zahlen."],"examples":[{"de":"Das kostet 5 Euro.","lv":"Stojí 5 eur."},{"de":"Was kostet das?","lv":"Koľko to stojí?"},{"de":"Wie viel kostet der Pullover?","lv":"Koľko stojí sveter?"},{"de":"Das Essen kostet nicht viel.","lv":"Jedlo nestojí veľa."},{"de":"Ich bezahle die Rechnung.","lv":"Platím účet."},{"de":"Kann ich bar bezahlen?","lv":"Môžem platiť v hotovosti?"},{"de":"Er zahlt mit Karte.","lv":"Platí kartou."},{"de":"Ich zahle gleich.","lv":"Hneď zaplatím."}],"comparison":[{"word":"kosten","meaning":"Stáť (cena) • Koľko to stojí","example":"Das kostet 5 Euro. = To stojí 5 eur."},{"word":"bezahlen","meaning":"Platiť • Zaplatiť","example":"Ich bezahle die Rechnung. = Platím účet."},{"word":"zahlen","meaning":"Platiť • Zaplatiť","example":"Kann ich bar zahlen? = Môžem platiť v hotovosti?"},{"word":"Was kostet...?","meaning":"Koľko stojí...?","example":"Was kostet das Buch? = Koľko stojí kniha?"}],"tip":["Pamätaj: otázka na cenu → kosten (Was kostet das?).","Pamätaj: platba → bezahlen • zahlen (Ich bezahle die Rechnung.)."],"important":["„kosten“ a „bezahlen“ nie sú synonymá: „kosten“ = koľko to stojí; „bezahlen“ = zaplatiť.","V slovenčine sa tieto významy rozlišujú: vec stojí určitú sumu, človek platí; aj v nemčine treba vybrať sloveso podľa situácie."],"sectionAccents":{"explanation":{"blue":["kosten"],"purple":["cene"],"green":["Was kostet"],"yellow":["bezahlen","zahlen"]},"examples":[{"de":{"blue":["kostet"]},"lv":{}},{"de":{"blue":["kostet"]},"lv":{}},{"de":{"blue":["kostet"]},"lv":{}},{"de":{"blue":["kostet"]},"lv":{}},{"de":{"yellow":["bezahle"]},"lv":{}},{"de":{"yellow":["bezahlen"]},"lv":{}},{"de":{"yellow":["zahlt"]},"lv":{}},{"de":{"yellow":["zahle"]},"lv":{}}],"comparison":[{"word":{"green":["kosten"]},"meaning":{"purple":["cena"]},"example":{"blue":["kostet"]}},{"word":{"green":["bezahlen"]},"meaning":{},"example":{"yellow":["bezahle"]}},{"word":{"green":["zahlen"]},"meaning":{},"example":{"yellow":["zahlen"]}},{"word":{"green":["Was kostet"]},"meaning":{},"example":{"blue":["kostet"]}}],"tip":[{"blue":["kosten"],"purple":["cenu"]},{"yellow":["bezahlen","zahlen"]}],"important":[{"blue":["kosten"],"yellow":["bezahlen"]},{}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kosten",
  "lv": "Stáť (cena)",
  "level": "A1",
  "study": {
    "id": "a1-kosten",
    "layout": "standardStudy",
    "translation": "Stáť (cena)",
    "explanation": [
      "Hlavná myšlienka: kosten znamená stáť určitú sumu – hovorí o cene veci.",
      "Toto slovo používame, keď sa pýtame alebo hovoríme, koľko niečo stojí, nie vtedy, keď daná osoba platí.",
      "Otázka na cenu sa v nemčine často začína slovami Was kostet...?",
      "V slovenčine sa v tomto kontexte používa „stáť“: Das kostet 5 Euro. = Stojí to 5 eur.",
      "Keď niekto dá peniaze za tovar alebo službu, v nemčine sa používa bezahlen alebo zahlen."
    ],
    "examples": [
      {
        "de": "Das kostet 5 Euro.",
        "lv": "Stojí 5 eur."
      },
      {
        "de": "Was kostet das?",
        "lv": "Koľko to stojí?"
      },
      {
        "de": "Wie viel kostet der Pullover?",
        "lv": "Koľko stojí sveter?"
      },
      {
        "de": "Das Essen kostet nicht viel.",
        "lv": "Jedlo nestojí veľa."
      },
      {
        "de": "Ich bezahle die Rechnung.",
        "lv": "Platím účet."
      },
      {
        "de": "Kann ich bar bezahlen?",
        "lv": "Môžem platiť v hotovosti?"
      },
      {
        "de": "Er zahlt mit Karte.",
        "lv": "Platí kartou."
      },
      {
        "de": "Ich zahle gleich.",
        "lv": "Hneď zaplatím."
      }
    ],
    "comparison": [
      {
        "word": "kosten",
        "meaning": "Stáť (cena) • Koľko to stojí",
        "example": "Das kostet 5 Euro. = To stojí 5 eur."
      },
      {
        "word": "bezahlen",
        "meaning": "Platiť • Zaplatiť",
        "example": "Ich bezahle die Rechnung. = Platím účet."
      },
      {
        "word": "zahlen",
        "meaning": "Platiť • Zaplatiť",
        "example": "Kann ich bar zahlen? = Môžem platiť v hotovosti?"
      },
      {
        "word": "Was kostet...?",
        "meaning": "Koľko stojí...?",
        "example": "Was kostet das Buch? = Koľko stojí kniha?"
      }
    ],
    "tip": [
      "Pamätaj: otázka na cenu → kosten (Was kostet das?).",
      "Pamätaj: platba → bezahlen • zahlen (Ich bezahle die Rechnung.)."
    ],
    "important": [
      "„kosten“ a „bezahlen“ nie sú synonymá: „kosten“ = koľko to stojí; „bezahlen“ = zaplatiť.",
      "V slovenčine sa tieto významy rozlišujú: vec stojí určitú sumu, človek platí; aj v nemčine treba vybrať sloveso podľa situácie."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "kosten"
        ],
        "purple": [
          "cene"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "kostet"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "bezahle"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "bezahlen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "zahlt"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "yellow": [
              "zahle"
            ]
          },
          "lv": {}
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
              "cena"
            ]
          },
          "example": {
            "blue": [
              "kostet"
            ]
          }
        },
        {
          "word": {
            "green": [
              "bezahlen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "bezahle"
            ]
          }
        },
        {
          "word": {
            "green": [
              "zahlen"
            ]
          },
          "meaning": {},
          "example": {
            "yellow": [
              "zahlen"
            ]
          }
        },
        {
          "word": {
            "green": [
              "Was kostet"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "kostet"
            ]
          }
        }
      ],
      "tip": [
        {
          "blue": [
            "kosten"
          ],
          "purple": [
            "cenu"
          ]
        },
        {
          "yellow": [
            "bezahlen",
            "zahlen"
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
          ]
        },
        {}
      ]
    }
  }
}
```

---

## Finding 5

**Audit ID:** `LRB089-0005`
**Finding Stable ID:** `g2/a1/sk|a1-land|a1.card.a1-land.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-land`
**Field / path:** `a1.card.a1-land.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Krajina • Zem
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Krajina • Zem","study":{"id":"a1-land","layout":"standardStudy","translation":"Krajina • Zem","explanation":["Hlavná myšlienka: das Land najčastejšie znamená krajinu alebo vidiek či zem mimo mesta.","Keď ide o Nemecko, Lotyšsko alebo akékoľvek iné územie s hranicami, prekladá sa to ako krajina.","Keď sa hovorí o vidieku alebo krajine v protiklade k mestu, prekladá sa ako „vidiek“ alebo „krajina“.","Kontext určuje, či máme na mysli krajinu, vidiek alebo zem."],"examples":[{"de":"Deutschland ist ein schönes Land.","lv":"Nemecko je krásna krajina."},{"de":"Ich komme aus einem kleinen Land.","lv":"Pochádzam z malej krajiny."},{"de":"Wir fahren aufs Land.","lv":"Ideme na vidiek."},{"de":"Auf dem Land ist es ruhig.","lv":"Na vidieku je ticho."}],"comparison":[{"word":"das Land","meaning":"Krajina • Zem • Vidiek","example":"Deutschland ist ein Land."},{"word":"die Stadt","meaning":"Mesto","example":"Ich wohne in der Stadt."},{"word":"das Dorf","meaning":"Obec","example":"Er lebt in einem Dorf."},{"word":"die Erde","meaning":"Zem • Planéta","example":"Die Erde ist rund."}],"tip":{"text":"Pamätajte: krajina → das Land • Mesto → die Stadt."},"important":["Aufs Land znamená „na vidiek“, nie „do krajiny“.","Das Land nie je to isté ako die Stadt."],"sectionAccents":{"explanation":{"blue":["das Land","Land"]},"examples":[{"de":{"blue":["Land"],"green":["Deutschland"]},"lv":{}},{"de":{"blue":["Land"]},"lv":{}},{"de":{"blue":["Land"]},"lv":{}},{"de":{"blue":["Land"]},"lv":{}}],"comparison":[{"word":{"green":["das Land"]},"meaning":{},"example":{"blue":["land"]}},{"word":{"green":["die Stadt"]},"meaning":{},"example":{"yellow":["Stadt"]}},{"word":{"green":["das Dorf"]},"meaning":{},"example":{"green":["Dorf"]}},{"word":{"green":["die Erde"]},"meaning":{"purple":["Planéta"]},"example":{}}],"tip":{"left":{"blue":["das Land"],"yellow":["die Stadt","Mesto"]}},"important":[{"blue":["aufs Land"]},{"blue":["das Land"],"yellow":["die Stadt"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Land",
  "de_article": "das",
  "de_plural": "die Länder",
  "lv": "Krajina • Zem",
  "level": "A1",
  "study": {
    "id": "a1-land",
    "layout": "standardStudy",
    "translation": "Krajina • Zem",
    "explanation": [
      "Hlavná myšlienka: das Land najčastejšie znamená krajinu alebo vidiek či zem mimo mesta.",
      "Keď ide o Nemecko, Lotyšsko alebo akékoľvek iné územie s hranicami, prekladá sa to ako krajina.",
      "Keď sa hovorí o vidieku alebo krajine v protiklade k mestu, prekladá sa ako „vidiek“ alebo „krajina“.",
      "Kontext určuje, či máme na mysli krajinu, vidiek alebo zem."
    ],
    "examples": [
      {
        "de": "Deutschland ist ein schönes Land.",
        "lv": "Nemecko je krásna krajina."
      },
      {
        "de": "Ich komme aus einem kleinen Land.",
        "lv": "Pochádzam z malej krajiny."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Ideme na vidiek."
      },
      {
        "de": "Auf dem Land ist es ruhig.",
        "lv": "Na vidieku je ticho."
      }
    ],
    "comparison": [
      {
        "word": "das Land",
        "meaning": "Krajina • Zem • Vidiek",
        "example": "Deutschland ist ein Land."
      },
      {
        "word": "die Stadt",
        "meaning": "Mesto",
        "example": "Ich wohne in der Stadt."
      },
      {
        "word": "das Dorf",
        "meaning": "Obec",
        "example": "Er lebt in einem Dorf."
      },
      {
        "word": "die Erde",
        "meaning": "Zem • Planéta",
        "example": "Die Erde ist rund."
      }
    ],
    "tip": {
      "text": "Pamätajte: krajina → das Land • Mesto → die Stadt."
    },
    "important": [
      "Aufs Land znamená „na vidiek“, nie „do krajiny“.",
      "Das Land nie je to isté ako die Stadt."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Land",
          "Land"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Land"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Land"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Land"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "das Land"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "land"
            ]
          }
        },
        {
          "word": {
            "green": [
              "die Stadt"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
              "Planéta"
            ]
          },
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "das Land"
          ],
          "yellow": [
            "die Stadt",
            "Mesto"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "aufs Land"
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

## Finding 6

**Audit ID:** `LRB089-0006`
**Finding Stable ID:** `g2/a1/sk|a1-land|a1.card.a1-land.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-land`
**Field / path:** `a1.card.a1-land.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Krajina • Zem
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Krajina • Zem","study":{"id":"a1-land","layout":"standardStudy","translation":"Krajina • Zem","explanation":["Hlavná myšlienka: das Land najčastejšie znamená krajinu alebo vidiek či zem mimo mesta.","Keď ide o Nemecko, Lotyšsko alebo akékoľvek iné územie s hranicami, prekladá sa to ako krajina.","Keď sa hovorí o vidieku alebo krajine v protiklade k mestu, prekladá sa ako „vidiek“ alebo „krajina“.","Kontext určuje, či máme na mysli krajinu, vidiek alebo zem."],"examples":[{"de":"Deutschland ist ein schönes Land.","lv":"Nemecko je krásna krajina."},{"de":"Ich komme aus einem kleinen Land.","lv":"Pochádzam z malej krajiny."},{"de":"Wir fahren aufs Land.","lv":"Ideme na vidiek."},{"de":"Auf dem Land ist es ruhig.","lv":"Na vidieku je ticho."}],"comparison":[{"word":"das Land","meaning":"Krajina • Zem • Vidiek","example":"Deutschland ist ein Land."},{"word":"die Stadt","meaning":"Mesto","example":"Ich wohne in der Stadt."},{"word":"das Dorf","meaning":"Obec","example":"Er lebt in einem Dorf."},{"word":"die Erde","meaning":"Zem • Planéta","example":"Die Erde ist rund."}],"tip":{"text":"Pamätajte: krajina → das Land • Mesto → die Stadt."},"important":["Aufs Land znamená „na vidiek“, nie „do krajiny“.","Das Land nie je to isté ako die Stadt."],"sectionAccents":{"explanation":{"blue":["das Land","Land"]},"examples":[{"de":{"blue":["Land"],"green":["Deutschland"]},"lv":{}},{"de":{"blue":["Land"]},"lv":{}},{"de":{"blue":["Land"]},"lv":{}},{"de":{"blue":["Land"]},"lv":{}}],"comparison":[{"word":{"green":["das Land"]},"meaning":{},"example":{"blue":["land"]}},{"word":{"green":["die Stadt"]},"meaning":{},"example":{"yellow":["Stadt"]}},{"word":{"green":["das Dorf"]},"meaning":{},"example":{"green":["Dorf"]}},{"word":{"green":["die Erde"]},"meaning":{"purple":["Planéta"]},"example":{}}],"tip":{"left":{"blue":["das Land"],"yellow":["die Stadt","Mesto"]}},"important":[{"blue":["aufs Land"]},{"blue":["das Land"],"yellow":["die Stadt"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Land",
  "de_article": "das",
  "de_plural": "die Länder",
  "lv": "Krajina • Zem",
  "level": "A1",
  "study": {
    "id": "a1-land",
    "layout": "standardStudy",
    "translation": "Krajina • Zem",
    "explanation": [
      "Hlavná myšlienka: das Land najčastejšie znamená krajinu alebo vidiek či zem mimo mesta.",
      "Keď ide o Nemecko, Lotyšsko alebo akékoľvek iné územie s hranicami, prekladá sa to ako krajina.",
      "Keď sa hovorí o vidieku alebo krajine v protiklade k mestu, prekladá sa ako „vidiek“ alebo „krajina“.",
      "Kontext určuje, či máme na mysli krajinu, vidiek alebo zem."
    ],
    "examples": [
      {
        "de": "Deutschland ist ein schönes Land.",
        "lv": "Nemecko je krásna krajina."
      },
      {
        "de": "Ich komme aus einem kleinen Land.",
        "lv": "Pochádzam z malej krajiny."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Ideme na vidiek."
      },
      {
        "de": "Auf dem Land ist es ruhig.",
        "lv": "Na vidieku je ticho."
      }
    ],
    "comparison": [
      {
        "word": "das Land",
        "meaning": "Krajina • Zem • Vidiek",
        "example": "Deutschland ist ein Land."
      },
      {
        "word": "die Stadt",
        "meaning": "Mesto",
        "example": "Ich wohne in der Stadt."
      },
      {
        "word": "das Dorf",
        "meaning": "Obec",
        "example": "Er lebt in einem Dorf."
      },
      {
        "word": "die Erde",
        "meaning": "Zem • Planéta",
        "example": "Die Erde ist rund."
      }
    ],
    "tip": {
      "text": "Pamätajte: krajina → das Land • Mesto → die Stadt."
    },
    "important": [
      "Aufs Land znamená „na vidiek“, nie „do krajiny“.",
      "Das Land nie je to isté ako die Stadt."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "das Land",
          "Land"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Land"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Land"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Land"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "das Land"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "land"
            ]
          }
        },
        {
          "word": {
            "green": [
              "die Stadt"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
              "Planéta"
            ]
          },
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "das Land"
          ],
          "yellow": [
            "die Stadt",
            "Mesto"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "aufs Land"
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

## Finding 7

**Audit ID:** `LRB089-0007`
**Finding Stable ID:** `g2/a1/sk|a1-lang|a1.card.a1-lang.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-lang`
**Field / path:** `a1.card.a1-lang.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Dlhý • Dlhý
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Dlhý (rozmer) • Dlhý (trvanie)","study":{"id":"a1-lang","layout":"standardStudy","translation":"Dlhý (rozmer) • Dlhý (trvanie)","explanation":["Hlavná myšlienka: lang pri rozmere znamená dlhý a pri čase vyjadruje dlhé trvanie.","Pokiaľ ide o veľkosť alebo vzdialenosť, lang = dlhý (ein langer Tisch = dlhý stôl).","Keď ide o časové trvanie, lang znamená dlhý alebo dlho trvajúci (ein langer Tag = dlhý deň).","Vo výraze den ganzen Tag lang to znamená celý deň (dĺžka).","V slovenčine sa pri oboch významoch používa „dlhý“, no kontext ukazuje, či ide o rozmer alebo trvanie."],"examples":[{"de":"Der Tisch ist sehr lang.","lv":"Stôl je veľmi dlhý."},{"de":"Der Film war sehr lang.","lv":"Film bol veľmi dlhý."},{"de":"Wie lange dauert es?","lv":"Ako dlho to trvá?"},{"de":"Sie hat lange Haare.","lv":"Má dlhé vlasy."},{"de":"Ich warte schon lange.","lv":"Čakám už dlho."},{"de":"Den ganzen Tag lang.","lv":"Celý deň."}],"tip":["Pri rozmere alebo vzdialenosti (vlasy, cesta, stôl) → dlhý.","Pri trvaní (deň, čakanie, film) → dlhý alebo dlho."],"important":["lang = dlhý pri rozmere ALEBO dlhý či dlho pri trvaní – rozhoduje kontext.","Wie lange = ako dlho (otázka času, nie veľkosti)."],"sectionAccents":{"explanation":{"blue":["lang"],"purple":["Hlavná"]},"examples":[{"de":{"blue":["lang"]},"lv":{}},{"de":{"green":["lang"]},"lv":{}},{"de":{"green":["lange"]},"lv":{}},{"de":{"blue":["lange"]},"lv":{}},{"de":{"green":["lange"]},"lv":{}},{"de":{"blue":["lang"]},"lv":{}}],"tip":[{},{}],"important":[{},{"green":["wie lange"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lang",
  "lv": "Dlhý (rozmer) • Dlhý (trvanie)",
  "level": "A1",
  "study": {
    "id": "a1-lang",
    "layout": "standardStudy",
    "translation": "Dlhý (rozmer) • Dlhý (trvanie)",
    "explanation": [
      "Hlavná myšlienka: lang pri rozmere znamená dlhý a pri čase vyjadruje dlhé trvanie.",
      "Pokiaľ ide o veľkosť alebo vzdialenosť, lang = dlhý (ein langer Tisch = dlhý stôl).",
      "Keď ide o časové trvanie, lang znamená dlhý alebo dlho trvajúci (ein langer Tag = dlhý deň).",
      "Vo výraze den ganzen Tag lang to znamená celý deň (dĺžka).",
      "V slovenčine sa pri oboch významoch používa „dlhý“, no kontext ukazuje, či ide o rozmer alebo trvanie."
    ],
    "examples": [
      {
        "de": "Der Tisch ist sehr lang.",
        "lv": "Stôl je veľmi dlhý."
      },
      {
        "de": "Der Film war sehr lang.",
        "lv": "Film bol veľmi dlhý."
      },
      {
        "de": "Wie lange dauert es?",
        "lv": "Ako dlho to trvá?"
      },
      {
        "de": "Sie hat lange Haare.",
        "lv": "Má dlhé vlasy."
      },
      {
        "de": "Ich warte schon lange.",
        "lv": "Čakám už dlho."
      },
      {
        "de": "Den ganzen Tag lang.",
        "lv": "Celý deň."
      }
    ],
    "tip": [
      "Pri rozmere alebo vzdialenosti (vlasy, cesta, stôl) → dlhý.",
      "Pri trvaní (deň, čakanie, film) → dlhý alebo dlho."
    ],
    "important": [
      "lang = dlhý pri rozmere ALEBO dlhý či dlho pri trvaní – rozhoduje kontext.",
      "Wie lange = ako dlho (otázka času, nie veľkosti)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lang"
        ],
        "purple": [
          "Hlavná"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "lang"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "lang"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "lange"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "lange"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "lange"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "lang"
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

## Finding 8

**Audit ID:** `LRB089-0008`
**Finding Stable ID:** `g2/a1/sk|a1-lang|a1.card.a1-lang.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-lang`
**Field / path:** `a1.card.a1-lang.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Dlhý • Dlhý
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Dlhý (rozmer) • Dlhý (trvanie)","study":{"id":"a1-lang","layout":"standardStudy","translation":"Dlhý (rozmer) • Dlhý (trvanie)","explanation":["Hlavná myšlienka: lang pri rozmere znamená dlhý a pri čase vyjadruje dlhé trvanie.","Pokiaľ ide o veľkosť alebo vzdialenosť, lang = dlhý (ein langer Tisch = dlhý stôl).","Keď ide o časové trvanie, lang znamená dlhý alebo dlho trvajúci (ein langer Tag = dlhý deň).","Vo výraze den ganzen Tag lang to znamená celý deň (dĺžka).","V slovenčine sa pri oboch významoch používa „dlhý“, no kontext ukazuje, či ide o rozmer alebo trvanie."],"examples":[{"de":"Der Tisch ist sehr lang.","lv":"Stôl je veľmi dlhý."},{"de":"Der Film war sehr lang.","lv":"Film bol veľmi dlhý."},{"de":"Wie lange dauert es?","lv":"Ako dlho to trvá?"},{"de":"Sie hat lange Haare.","lv":"Má dlhé vlasy."},{"de":"Ich warte schon lange.","lv":"Čakám už dlho."},{"de":"Den ganzen Tag lang.","lv":"Celý deň."}],"tip":["Pri rozmere alebo vzdialenosti (vlasy, cesta, stôl) → dlhý.","Pri trvaní (deň, čakanie, film) → dlhý alebo dlho."],"important":["lang = dlhý pri rozmere ALEBO dlhý či dlho pri trvaní – rozhoduje kontext.","Wie lange = ako dlho (otázka času, nie veľkosti)."],"sectionAccents":{"explanation":{"blue":["lang"],"purple":["Hlavná"]},"examples":[{"de":{"blue":["lang"]},"lv":{}},{"de":{"green":["lang"]},"lv":{}},{"de":{"green":["lange"]},"lv":{}},{"de":{"blue":["lange"]},"lv":{}},{"de":{"green":["lange"]},"lv":{}},{"de":{"blue":["lang"]},"lv":{}}],"tip":[{},{}],"important":[{},{"green":["wie lange"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lang",
  "lv": "Dlhý (rozmer) • Dlhý (trvanie)",
  "level": "A1",
  "study": {
    "id": "a1-lang",
    "layout": "standardStudy",
    "translation": "Dlhý (rozmer) • Dlhý (trvanie)",
    "explanation": [
      "Hlavná myšlienka: lang pri rozmere znamená dlhý a pri čase vyjadruje dlhé trvanie.",
      "Pokiaľ ide o veľkosť alebo vzdialenosť, lang = dlhý (ein langer Tisch = dlhý stôl).",
      "Keď ide o časové trvanie, lang znamená dlhý alebo dlho trvajúci (ein langer Tag = dlhý deň).",
      "Vo výraze den ganzen Tag lang to znamená celý deň (dĺžka).",
      "V slovenčine sa pri oboch významoch používa „dlhý“, no kontext ukazuje, či ide o rozmer alebo trvanie."
    ],
    "examples": [
      {
        "de": "Der Tisch ist sehr lang.",
        "lv": "Stôl je veľmi dlhý."
      },
      {
        "de": "Der Film war sehr lang.",
        "lv": "Film bol veľmi dlhý."
      },
      {
        "de": "Wie lange dauert es?",
        "lv": "Ako dlho to trvá?"
      },
      {
        "de": "Sie hat lange Haare.",
        "lv": "Má dlhé vlasy."
      },
      {
        "de": "Ich warte schon lange.",
        "lv": "Čakám už dlho."
      },
      {
        "de": "Den ganzen Tag lang.",
        "lv": "Celý deň."
      }
    ],
    "tip": [
      "Pri rozmere alebo vzdialenosti (vlasy, cesta, stôl) → dlhý.",
      "Pri trvaní (deň, čakanie, film) → dlhý alebo dlho."
    ],
    "important": [
      "lang = dlhý pri rozmere ALEBO dlhý či dlho pri trvaní – rozhoduje kontext.",
      "Wie lange = ako dlho (otázka času, nie veľkosti)."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lang"
        ],
        "purple": [
          "Hlavná"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "lang"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "lang"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "lange"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "lange"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "lange"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "lang"
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

## Finding 9

**Audit ID:** `LRB089-0009`
**Finding Stable ID:** `g2/a1/sk|a1-lassen|a1.card.a1-lassen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-lassen`
**Field / path:** `a1.card.a1-lassen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Odísť • Povoliť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Nechať • Dovoliť","study":{"id":"a1-lassen","layout":"standardStudy","translation":"Nechať • Dovoliť","explanation":["Hlavná myšlienka: lassen znamená nechať niečo alebo dovoliť, aby sa niečo stalo.","Ak niečo zostáva na mieste, lassen sa prekladá ako „nechať“.","Ak niekomu dáte povolenie, lassen sa prekladá ako „dovoliť“.","Veľmi častá hovorová forma je Lass mich! = Nechaj ma! alebo Dovoľ mi!"],"examples":[{"de":"Ich lasse die Tasche hier.","lv":"Nechávam tu tašku."},{"de":"Lass das bitte auf dem Tisch.","lv":"Nechaj to, prosím, na stole."},{"de":"Meine Eltern lassen mich gehen.","lv":"Rodičia mi dovolia odísť."},{"de":"Lass mich in Ruhe!","lv":"Nechaj ma na pokoji!"}],"comparison":[{"word":"lassen","meaning":"Nechať • Dovoliť","example":"Ich lasse das hier."},{"word":"bleiben","meaning":"Zostať","example":"Ich bleibe hier."},{"word":"erlauben","meaning":"Dovoliť","example":"Sie erlaubt mir das."},{"word":"geben","meaning":"Dať","example":"Gib mir das Buch."}],"tip":{"text":"Pamätaj: niečo zostáva → lassen • niekomu sa niečo dovolí → lassen."},"important":["lassen neznamená iba „nechať“. Často znamená aj „dovoliť“.","Lass mich in Ruhe! je veľmi častá fráza: „Nechaj ma na pokoji!“"],"sectionAccents":{"explanation":{"blue":["lassen","Lass mich"]},"examples":[{"de":{"blue":["lasse"]},"lv":{}},{"de":{"blue":["Lass"]},"lv":{}},{"de":{"blue":["lassen"]},"lv":{}},{"de":{"blue":["Lass mich"]},"lv":{}}],"comparison":[{"word":{"green":["lassen"]},"meaning":{},"example":{"blue":["lass"]}},{"word":{"green":["bleiben"]},"meaning":{},"example":{"green":["bleibe"]}},{"word":{"green":["erlauben"]},"meaning":{},"example":{"yellow":["erlaubt"]}},{"word":{"green":["geben"]},"meaning":{},"example":{"red":["Gib"]}}],"tip":{"left":{"blue":["lassen"],"purple":["Pamätaj"]}},"important":[{"blue":["lassen"]},{"blue":["Lass"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lassen",
  "lv": "Nechať • Dovoliť",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "Nechať • Dovoliť",
    "explanation": [
      "Hlavná myšlienka: lassen znamená nechať niečo alebo dovoliť, aby sa niečo stalo.",
      "Ak niečo zostáva na mieste, lassen sa prekladá ako „nechať“.",
      "Ak niekomu dáte povolenie, lassen sa prekladá ako „dovoliť“.",
      "Veľmi častá hovorová forma je Lass mich! = Nechaj ma! alebo Dovoľ mi!"
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "Nechávam tu tašku."
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "Nechaj to, prosím, na stole."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "Rodičia mi dovolia odísť."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "Nechaj ma na pokoji!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "Nechať • Dovoliť",
        "example": "Ich lasse das hier."
      },
      {
        "word": "bleiben",
        "meaning": "Zostať",
        "example": "Ich bleibe hier."
      },
      {
        "word": "erlauben",
        "meaning": "Dovoliť",
        "example": "Sie erlaubt mir das."
      },
      {
        "word": "geben",
        "meaning": "Dať",
        "example": "Gib mir das Buch."
      }
    ],
    "tip": {
      "text": "Pamätaj: niečo zostáva → lassen • niekomu sa niečo dovolí → lassen."
    },
    "important": [
      "lassen neznamená iba „nechať“. Často znamená aj „dovoliť“.",
      "Lass mich in Ruhe! je veľmi častá fráza: „Nechaj ma na pokoji!“"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lassen",
          "Lass mich"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "lasse"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Lass"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "lassen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Lass mich"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "lassen"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "lass"
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
              "erlauben"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
            "Pamätaj"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "lassen"
          ]
        },
        {
          "blue": [
            "Lass"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 10

**Audit ID:** `LRB089-0010`
**Finding Stable ID:** `g2/a1/sk|a1-lassen|a1.card.a1-lassen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-lassen`
**Field / path:** `a1.card.a1-lassen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Odísť • Povoliť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Nechať • Dovoliť","study":{"id":"a1-lassen","layout":"standardStudy","translation":"Nechať • Dovoliť","explanation":["Hlavná myšlienka: lassen znamená nechať niečo alebo dovoliť, aby sa niečo stalo.","Ak niečo zostáva na mieste, lassen sa prekladá ako „nechať“.","Ak niekomu dáte povolenie, lassen sa prekladá ako „dovoliť“.","Veľmi častá hovorová forma je Lass mich! = Nechaj ma! alebo Dovoľ mi!"],"examples":[{"de":"Ich lasse die Tasche hier.","lv":"Nechávam tu tašku."},{"de":"Lass das bitte auf dem Tisch.","lv":"Nechaj to, prosím, na stole."},{"de":"Meine Eltern lassen mich gehen.","lv":"Rodičia mi dovolia odísť."},{"de":"Lass mich in Ruhe!","lv":"Nechaj ma na pokoji!"}],"comparison":[{"word":"lassen","meaning":"Nechať • Dovoliť","example":"Ich lasse das hier."},{"word":"bleiben","meaning":"Zostať","example":"Ich bleibe hier."},{"word":"erlauben","meaning":"Dovoliť","example":"Sie erlaubt mir das."},{"word":"geben","meaning":"Dať","example":"Gib mir das Buch."}],"tip":{"text":"Pamätaj: niečo zostáva → lassen • niekomu sa niečo dovolí → lassen."},"important":["lassen neznamená iba „nechať“. Často znamená aj „dovoliť“.","Lass mich in Ruhe! je veľmi častá fráza: „Nechaj ma na pokoji!“"],"sectionAccents":{"explanation":{"blue":["lassen","Lass mich"]},"examples":[{"de":{"blue":["lasse"]},"lv":{}},{"de":{"blue":["Lass"]},"lv":{}},{"de":{"blue":["lassen"]},"lv":{}},{"de":{"blue":["Lass mich"]},"lv":{}}],"comparison":[{"word":{"green":["lassen"]},"meaning":{},"example":{"blue":["lass"]}},{"word":{"green":["bleiben"]},"meaning":{},"example":{"green":["bleibe"]}},{"word":{"green":["erlauben"]},"meaning":{},"example":{"yellow":["erlaubt"]}},{"word":{"green":["geben"]},"meaning":{},"example":{"red":["Gib"]}}],"tip":{"left":{"blue":["lassen"],"purple":["Pamätaj"]}},"important":[{"blue":["lassen"]},{"blue":["Lass"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lassen",
  "lv": "Nechať • Dovoliť",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "Nechať • Dovoliť",
    "explanation": [
      "Hlavná myšlienka: lassen znamená nechať niečo alebo dovoliť, aby sa niečo stalo.",
      "Ak niečo zostáva na mieste, lassen sa prekladá ako „nechať“.",
      "Ak niekomu dáte povolenie, lassen sa prekladá ako „dovoliť“.",
      "Veľmi častá hovorová forma je Lass mich! = Nechaj ma! alebo Dovoľ mi!"
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "Nechávam tu tašku."
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "Nechaj to, prosím, na stole."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "Rodičia mi dovolia odísť."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "Nechaj ma na pokoji!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "Nechať • Dovoliť",
        "example": "Ich lasse das hier."
      },
      {
        "word": "bleiben",
        "meaning": "Zostať",
        "example": "Ich bleibe hier."
      },
      {
        "word": "erlauben",
        "meaning": "Dovoliť",
        "example": "Sie erlaubt mir das."
      },
      {
        "word": "geben",
        "meaning": "Dať",
        "example": "Gib mir das Buch."
      }
    ],
    "tip": {
      "text": "Pamätaj: niečo zostáva → lassen • niekomu sa niečo dovolí → lassen."
    },
    "important": [
      "lassen neznamená iba „nechať“. Často znamená aj „dovoliť“.",
      "Lass mich in Ruhe! je veľmi častá fráza: „Nechaj ma na pokoji!“"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "lassen",
          "Lass mich"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "lasse"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Lass"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "lassen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Lass mich"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "lassen"
            ]
          },
          "meaning": {},
          "example": {
            "blue": [
              "lass"
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
              "erlauben"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
            "Pamätaj"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "lassen"
          ]
        },
        {
          "blue": [
            "Lass"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 11

**Audit ID:** `LRB089-0011`
**Finding Stable ID:** `g2/a1/sk|a1-laufen|a1.card.a1-laufen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-laufen`
**Field / path:** `a1.card.a1-laufen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Run • Act
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Bežať • Fungovať","study":{"id":"a1-laufen","layout":"standardStudy","translation":"Bežať • Fungovať","explanation":["Hlavná myšlienka: laufen znamená bežať, ale pri zariadeniach môže znamenať fungovať.","Pre človeka alebo zviera laufen často znamená beh alebo chôdzu rýchlym tempom.","Pri filme, stroji alebo programe laufen znamená, že niečo beží, funguje alebo prebieha.","V prípade pohybov nôh na úrovni A1 sa najčastejšie porovnáva gehen a laufen."],"examples":[{"de":"Er läuft sehr schnell.","lv":"Beží veľmi rýchlo."},{"de":"Die Kinder laufen im Park.","lv":"Deti behajú po parku."},{"de":"Der Film läuft schon.","lv":"Film už beží."},{"de":"Die Maschine läuft gut.","lv":"Stroj funguje dobre."}],"comparison":[{"word":"laufen","meaning":"Bežať • Fungovať","example":"Er läuft schnell."},{"word":"gehen","meaning":"Ísť pešo","example":"Ich gehe nach Hause."},{"word":"fahren","meaning":"Ísť dopravným prostriedkom","example":"Ich fahre mit dem Bus."},{"word":"funktionieren","meaning":"Fungovať","example":"Das funktioniert gut."}],"tip":{"text":"Pamätajte: rýchle nohy → laufen • Doprava → fahren."},"important":["laufen nie je iba „bežať“. Pri filme alebo zariadení môže znamenať „bežať“ alebo „fungovať“.","Ich laufe znamená pohybovať sa pešo, nie ísť dopravným prostriedkom."],"sectionAccents":{"explanation":{"blue":["laufen"],"green":["Hlavná","filme","programe"]},"examples":[{"de":{"blue":["läuft"]},"lv":{}},{"de":{"blue":["laufen"]},"lv":{}},{"de":{"blue":["läuft"]},"lv":{}},{"de":{"blue":["läuft"]},"lv":{}}],"comparison":[{"word":{"green":["laufen"]},"meaning":{},"example":{"blue":["läuft"]}},{"word":{"green":["gehen"]},"meaning":{},"example":{"yellow":["gehe"]}},{"word":{"green":["fahren"]},"meaning":{},"example":{"red":["fahre"]}},{"word":{"green":["funktionieren"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["laufen"],"purple":["Pamätajte"],"red":["fahren","Pamätajte"]}},"important":[{"blue":["laufen"]},{"blue":["Ich laufe"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "laufen",
  "lv": "Bežať • Fungovať",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "Bežať • Fungovať",
    "explanation": [
      "Hlavná myšlienka: laufen znamená bežať, ale pri zariadeniach môže znamenať fungovať.",
      "Pre človeka alebo zviera laufen často znamená beh alebo chôdzu rýchlym tempom.",
      "Pri filme, stroji alebo programe laufen znamená, že niečo beží, funguje alebo prebieha.",
      "V prípade pohybov nôh na úrovni A1 sa najčastejšie porovnáva gehen a laufen."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "Beží veľmi rýchlo."
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "Deti behajú po parku."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "Film už beží."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "Stroj funguje dobre."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "Bežať • Fungovať",
        "example": "Er läuft schnell."
      },
      {
        "word": "gehen",
        "meaning": "Ísť pešo",
        "example": "Ich gehe nach Hause."
      },
      {
        "word": "fahren",
        "meaning": "Ísť dopravným prostriedkom",
        "example": "Ich fahre mit dem Bus."
      },
      {
        "word": "funktionieren",
        "meaning": "Fungovať",
        "example": "Das funktioniert gut."
      }
    ],
    "tip": {
      "text": "Pamätajte: rýchle nohy → laufen • Doprava → fahren."
    },
    "important": [
      "laufen nie je iba „bežať“. Pri filme alebo zariadení môže znamenať „bežať“ alebo „fungovať“.",
      "Ich laufe znamená pohybovať sa pešo, nie ísť dopravným prostriedkom."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "laufen"
        ],
        "green": [
          "Hlavná",
          "filme",
          "programe"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "läuft"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "laufen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "läuft"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "läuft"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "laufen"
            ]
          },
          "meaning": {},
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
              "fahren"
            ]
          },
          "meaning": {},
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
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "laufen"
          ],
          "purple": [
            "Pamätajte"
          ],
          "red": [
            "fahren",
            "Pamätajte"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "laufen"
          ]
        },
        {
          "blue": [
            "Ich laufe"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 12

**Audit ID:** `LRB089-0012`
**Finding Stable ID:** `g2/a1/sk|a1-laufen|a1.card.a1-laufen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-laufen`
**Field / path:** `a1.card.a1-laufen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Run • Act
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Bežať • Fungovať","study":{"id":"a1-laufen","layout":"standardStudy","translation":"Bežať • Fungovať","explanation":["Hlavná myšlienka: laufen znamená bežať, ale pri zariadeniach môže znamenať fungovať.","Pre človeka alebo zviera laufen často znamená beh alebo chôdzu rýchlym tempom.","Pri filme, stroji alebo programe laufen znamená, že niečo beží, funguje alebo prebieha.","V prípade pohybov nôh na úrovni A1 sa najčastejšie porovnáva gehen a laufen."],"examples":[{"de":"Er läuft sehr schnell.","lv":"Beží veľmi rýchlo."},{"de":"Die Kinder laufen im Park.","lv":"Deti behajú po parku."},{"de":"Der Film läuft schon.","lv":"Film už beží."},{"de":"Die Maschine läuft gut.","lv":"Stroj funguje dobre."}],"comparison":[{"word":"laufen","meaning":"Bežať • Fungovať","example":"Er läuft schnell."},{"word":"gehen","meaning":"Ísť pešo","example":"Ich gehe nach Hause."},{"word":"fahren","meaning":"Ísť dopravným prostriedkom","example":"Ich fahre mit dem Bus."},{"word":"funktionieren","meaning":"Fungovať","example":"Das funktioniert gut."}],"tip":{"text":"Pamätajte: rýchle nohy → laufen • Doprava → fahren."},"important":["laufen nie je iba „bežať“. Pri filme alebo zariadení môže znamenať „bežať“ alebo „fungovať“.","Ich laufe znamená pohybovať sa pešo, nie ísť dopravným prostriedkom."],"sectionAccents":{"explanation":{"blue":["laufen"],"green":["Hlavná","filme","programe"]},"examples":[{"de":{"blue":["läuft"]},"lv":{}},{"de":{"blue":["laufen"]},"lv":{}},{"de":{"blue":["läuft"]},"lv":{}},{"de":{"blue":["läuft"]},"lv":{}}],"comparison":[{"word":{"green":["laufen"]},"meaning":{},"example":{"blue":["läuft"]}},{"word":{"green":["gehen"]},"meaning":{},"example":{"yellow":["gehe"]}},{"word":{"green":["fahren"]},"meaning":{},"example":{"red":["fahre"]}},{"word":{"green":["funktionieren"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["laufen"],"purple":["Pamätajte"],"red":["fahren","Pamätajte"]}},"important":[{"blue":["laufen"]},{"blue":["Ich laufe"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "laufen",
  "lv": "Bežať • Fungovať",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "Bežať • Fungovať",
    "explanation": [
      "Hlavná myšlienka: laufen znamená bežať, ale pri zariadeniach môže znamenať fungovať.",
      "Pre človeka alebo zviera laufen často znamená beh alebo chôdzu rýchlym tempom.",
      "Pri filme, stroji alebo programe laufen znamená, že niečo beží, funguje alebo prebieha.",
      "V prípade pohybov nôh na úrovni A1 sa najčastejšie porovnáva gehen a laufen."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "Beží veľmi rýchlo."
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "Deti behajú po parku."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "Film už beží."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "Stroj funguje dobre."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "Bežať • Fungovať",
        "example": "Er läuft schnell."
      },
      {
        "word": "gehen",
        "meaning": "Ísť pešo",
        "example": "Ich gehe nach Hause."
      },
      {
        "word": "fahren",
        "meaning": "Ísť dopravným prostriedkom",
        "example": "Ich fahre mit dem Bus."
      },
      {
        "word": "funktionieren",
        "meaning": "Fungovať",
        "example": "Das funktioniert gut."
      }
    ],
    "tip": {
      "text": "Pamätajte: rýchle nohy → laufen • Doprava → fahren."
    },
    "important": [
      "laufen nie je iba „bežať“. Pri filme alebo zariadení môže znamenať „bežať“ alebo „fungovať“.",
      "Ich laufe znamená pohybovať sa pešo, nie ísť dopravným prostriedkom."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "laufen"
        ],
        "green": [
          "Hlavná",
          "filme",
          "programe"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "läuft"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "laufen"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "läuft"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "läuft"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "laufen"
            ]
          },
          "meaning": {},
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
              "fahren"
            ]
          },
          "meaning": {},
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
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "laufen"
          ],
          "purple": [
            "Pamätajte"
          ],
          "red": [
            "fahren",
            "Pamätajte"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "laufen"
          ]
        },
        {
          "blue": [
            "Ich laufe"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 13

**Audit ID:** `LRB089-0013`
**Finding Stable ID:** `g2/a1/sk|a1-liegen|a1.card.a1-liegen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-liegen`
**Field / path:** `a1.card.a1-liegen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Buďte • Spať
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Nachádzať sa • Ležať","study":{"id":"a1-liegen","layout":"standardStudy","translation":"Nachádzať sa • Ležať","explanation":["Hlavná myšlienka: liegen znamená nachádzať sa alebo ležať vo vodorovnej polohe.","Pri ľuďoch liegen často znamená „ležať“.","Pri veciach liegen znamená, že sa niekde nachádzajú alebo ležia.","To sa líši od legen, ktoré znamená niečo položiť."],"examples":[{"de":"Das Buch liegt auf dem Tisch.","lv":"Kniha leží na stole."},{"de":"Mein Handy liegt im Auto.","lv":"Môj telefón sa nachádza v aute."},{"de":"Er liegt im Bett.","lv":"Leží v posteli."},{"de":"Ich lege das Buch auf den Tisch.","lv":"Kladiem knihu na stôl."}],"comparison":[{"word":"liegen","meaning":"Nachádzať sa • Ležať","example":"Das Buch liegt hier."},{"word":"legen","meaning":"Položiť","example":"Ich lege das Buch hierhin."},{"word":"stehen","meaning":"Stáť • Byť vo zvislej polohe","example":"Die Flasche steht auf dem Tisch."},{"word":"sein","meaning":"Byť","example":"Ich bin hier."}],"tip":{"text":"Pamätaj: vec už leží na mieste → liegen • niekto ju položí → legen."},"important":["liegen vyjadruje stav alebo polohu.","Legen ukazuje akciu: niekto niečo položí."],"sectionAccents":{"explanation":{"blue":["liegen","legen"],"yellow":["Liegen"]},"examples":[{"de":{"blue":["liegt"],"yellow":["Buch","Tisch"]},"lv":{}},{"de":{"blue":["liegt"],"yellow":["Handy","Auto"]},"lv":{"yellow":["telefón"]}},{"de":{"blue":["liegt"],"green":["Bett"]},"lv":{}},{"de":{"red":["lege"],"yellow":["Buch","Tisch"]},"lv":{}}],"comparison":[{"word":{"green":["liegen"]},"meaning":{},"example":{}},{"word":{"green":["legen"]},"meaning":{},"example":{"red":["lege"]}},{"word":{"green":["stehen"]},"meaning":{"purple":["Stáť"]},"example":{"yellow":["steht"]}},{"word":{"green":["sein"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["liegen"],"purple":["Pamätaj"],"red":["legen"]}},"important":[{"blue":["liegen"],"purple":["Liegen"]},{"red":["legen"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "liegen",
  "lv": "Nachádzať sa • Ležať",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "Nachádzať sa • Ležať",
    "explanation": [
      "Hlavná myšlienka: liegen znamená nachádzať sa alebo ležať vo vodorovnej polohe.",
      "Pri ľuďoch liegen často znamená „ležať“.",
      "Pri veciach liegen znamená, že sa niekde nachádzajú alebo ležia.",
      "To sa líši od legen, ktoré znamená niečo položiť."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Kniha leží na stole."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Môj telefón sa nachádza v aute."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Leží v posteli."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Kladiem knihu na stôl."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "Nachádzať sa • Ležať",
        "example": "Das Buch liegt hier."
      },
      {
        "word": "legen",
        "meaning": "Položiť",
        "example": "Ich lege das Buch hierhin."
      },
      {
        "word": "stehen",
        "meaning": "Stáť • Byť vo zvislej polohe",
        "example": "Die Flasche steht auf dem Tisch."
      },
      {
        "word": "sein",
        "meaning": "Byť",
        "example": "Ich bin hier."
      }
    ],
    "tip": {
      "text": "Pamätaj: vec už leží na mieste → liegen • niekto ju položí → legen."
    },
    "important": [
      "liegen vyjadruje stav alebo polohu.",
      "Legen ukazuje akciu: niekto niečo položí."
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
              "telefón"
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
          "meaning": {
            "purple": [
              "Stáť"
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
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "liegen"
          ],
          "purple": [
            "Pamätaj"
          ],
          "red": [
            "legen"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "liegen"
          ],
          "purple": [
            "Liegen"
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

## Finding 14

**Audit ID:** `LRB089-0014`
**Finding Stable ID:** `g2/a1/sk|a1-liegen|a1.card.a1-liegen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-liegen`
**Field / path:** `a1.card.a1-liegen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Buďte • Spať
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Nachádzať sa • Ležať","study":{"id":"a1-liegen","layout":"standardStudy","translation":"Nachádzať sa • Ležať","explanation":["Hlavná myšlienka: liegen znamená nachádzať sa alebo ležať vo vodorovnej polohe.","Pri ľuďoch liegen často znamená „ležať“.","Pri veciach liegen znamená, že sa niekde nachádzajú alebo ležia.","To sa líši od legen, ktoré znamená niečo položiť."],"examples":[{"de":"Das Buch liegt auf dem Tisch.","lv":"Kniha leží na stole."},{"de":"Mein Handy liegt im Auto.","lv":"Môj telefón sa nachádza v aute."},{"de":"Er liegt im Bett.","lv":"Leží v posteli."},{"de":"Ich lege das Buch auf den Tisch.","lv":"Kladiem knihu na stôl."}],"comparison":[{"word":"liegen","meaning":"Nachádzať sa • Ležať","example":"Das Buch liegt hier."},{"word":"legen","meaning":"Položiť","example":"Ich lege das Buch hierhin."},{"word":"stehen","meaning":"Stáť • Byť vo zvislej polohe","example":"Die Flasche steht auf dem Tisch."},{"word":"sein","meaning":"Byť","example":"Ich bin hier."}],"tip":{"text":"Pamätaj: vec už leží na mieste → liegen • niekto ju položí → legen."},"important":["liegen vyjadruje stav alebo polohu.","Legen ukazuje akciu: niekto niečo položí."],"sectionAccents":{"explanation":{"blue":["liegen","legen"],"yellow":["Liegen"]},"examples":[{"de":{"blue":["liegt"],"yellow":["Buch","Tisch"]},"lv":{}},{"de":{"blue":["liegt"],"yellow":["Handy","Auto"]},"lv":{"yellow":["telefón"]}},{"de":{"blue":["liegt"],"green":["Bett"]},"lv":{}},{"de":{"red":["lege"],"yellow":["Buch","Tisch"]},"lv":{}}],"comparison":[{"word":{"green":["liegen"]},"meaning":{},"example":{}},{"word":{"green":["legen"]},"meaning":{},"example":{"red":["lege"]}},{"word":{"green":["stehen"]},"meaning":{"purple":["Stáť"]},"example":{"yellow":["steht"]}},{"word":{"green":["sein"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["liegen"],"purple":["Pamätaj"],"red":["legen"]}},"important":[{"blue":["liegen"],"purple":["Liegen"]},{"red":["legen"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "liegen",
  "lv": "Nachádzať sa • Ležať",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "Nachádzať sa • Ležať",
    "explanation": [
      "Hlavná myšlienka: liegen znamená nachádzať sa alebo ležať vo vodorovnej polohe.",
      "Pri ľuďoch liegen často znamená „ležať“.",
      "Pri veciach liegen znamená, že sa niekde nachádzajú alebo ležia.",
      "To sa líši od legen, ktoré znamená niečo položiť."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Kniha leží na stole."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Môj telefón sa nachádza v aute."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Leží v posteli."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Kladiem knihu na stôl."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "Nachádzať sa • Ležať",
        "example": "Das Buch liegt hier."
      },
      {
        "word": "legen",
        "meaning": "Položiť",
        "example": "Ich lege das Buch hierhin."
      },
      {
        "word": "stehen",
        "meaning": "Stáť • Byť vo zvislej polohe",
        "example": "Die Flasche steht auf dem Tisch."
      },
      {
        "word": "sein",
        "meaning": "Byť",
        "example": "Ich bin hier."
      }
    ],
    "tip": {
      "text": "Pamätaj: vec už leží na mieste → liegen • niekto ju položí → legen."
    },
    "important": [
      "liegen vyjadruje stav alebo polohu.",
      "Legen ukazuje akciu: niekto niečo položí."
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
              "telefón"
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
          "meaning": {
            "purple": [
              "Stáť"
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
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "liegen"
          ],
          "purple": [
            "Pamätaj"
          ],
          "red": [
            "legen"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "liegen"
          ],
          "purple": [
            "Liegen"
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

## Finding 15

**Audit ID:** `LRB089-0015`
**Finding Stable ID:** `g2/a1/sk|a1-machen|a1.card.a1-machen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-machen`
**Field / path:** `a1.card.a1-machen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Robiť • Robiť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Robiť • Vytvárať","study":{"id":"a1-machen","layout":"standardStudy","translation":"Robiť • Vytvárať","explanation":["Hlavná myšlienka: machen je veľmi časté sloveso, ktoré znamená robiť, vytvárať alebo pripravovať.","Pri všeobecnej činnosti sa machen prekladá ako „robiť“.","Ak sa niečo vytvára alebo pripravuje, podľa kontextu sa prekladá ako „vytvárať“, „robiť“ alebo „pripravovať“.","V mnohých spojeniach sa machen prekladá prirodzene podľa kontextu, nie doslovne."],"examples":[{"de":"Was machst du?","lv":"Čo robíš?"},{"de":"Ich mache Hausaufgaben.","lv":"Robím si domáce úlohy."},{"de":"Wir machen Pizza.","lv":"Robíme pizzu."},{"de":"Das macht Spaß.","lv":"Je to zábavné."}],"tip":{"text":"Zapamätaj si: Was machst du? = Čo robíš?"},"important":["machen je veľmi široké slovo; v slovenčine ho treba prekladať prirodzene podľa situácie.","Das macht Spaß znamená „je to zábava“, nie doslova „to robí radosť“."],"sectionAccents":{"explanation":{"blue":["machen"]},"examples":[{"de":{"blue":["machst"]},"lv":{}},{"de":{"blue":["mache"],"yellow":["Hausaufgaben"]},"lv":{}},{"de":{"blue":["machen"],"yellow":["Pizza"]},"lv":{}},{"de":{"blue":["macht Spaß"]},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{"blue":["Was machst du"],"purple":["Čo robíš"]}},"important":[{"blue":["machen"]},{"blue":["Das macht Spaß"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "machen",
  "lv": "Robiť • Vytvárať",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "Robiť • Vytvárať",
    "explanation": [
      "Hlavná myšlienka: machen je veľmi časté sloveso, ktoré znamená robiť, vytvárať alebo pripravovať.",
      "Pri všeobecnej činnosti sa machen prekladá ako „robiť“.",
      "Ak sa niečo vytvára alebo pripravuje, podľa kontextu sa prekladá ako „vytvárať“, „robiť“ alebo „pripravovať“.",
      "V mnohých spojeniach sa machen prekladá prirodzene podľa kontextu, nie doslovne."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "Čo robíš?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Robím si domáce úlohy."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Robíme pizzu."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "Je to zábavné."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: Was machst du? = Čo robíš?"
    },
    "important": [
      "machen je veľmi široké slovo; v slovenčine ho treba prekladať prirodzene podľa situácie.",
      "Das macht Spaß znamená „je to zábava“, nie doslova „to robí radosť“."
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
        "left": {
          "blue": [
            "Was machst du"
          ],
          "purple": [
            "Čo robíš"
          ]
        }
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

## Finding 16

**Audit ID:** `LRB089-0016`
**Finding Stable ID:** `g2/a1/sk|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-machen`
**Field / path:** `a1.card.a1-machen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Robiť • Robiť
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Robiť • Vytvárať","study":{"id":"a1-machen","layout":"standardStudy","translation":"Robiť • Vytvárať","explanation":["Hlavná myšlienka: machen je veľmi časté sloveso, ktoré znamená robiť, vytvárať alebo pripravovať.","Pri všeobecnej činnosti sa machen prekladá ako „robiť“.","Ak sa niečo vytvára alebo pripravuje, podľa kontextu sa prekladá ako „vytvárať“, „robiť“ alebo „pripravovať“.","V mnohých spojeniach sa machen prekladá prirodzene podľa kontextu, nie doslovne."],"examples":[{"de":"Was machst du?","lv":"Čo robíš?"},{"de":"Ich mache Hausaufgaben.","lv":"Robím si domáce úlohy."},{"de":"Wir machen Pizza.","lv":"Robíme pizzu."},{"de":"Das macht Spaß.","lv":"Je to zábavné."}],"tip":{"text":"Zapamätaj si: Was machst du? = Čo robíš?"},"important":["machen je veľmi široké slovo; v slovenčine ho treba prekladať prirodzene podľa situácie.","Das macht Spaß znamená „je to zábava“, nie doslova „to robí radosť“."],"sectionAccents":{"explanation":{"blue":["machen"]},"examples":[{"de":{"blue":["machst"]},"lv":{}},{"de":{"blue":["mache"],"yellow":["Hausaufgaben"]},"lv":{}},{"de":{"blue":["machen"],"yellow":["Pizza"]},"lv":{}},{"de":{"blue":["macht Spaß"]},"lv":{}}],"comparison":[{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}},{"word":{},"meaning":{},"example":{}}],"tip":{"left":{"blue":["Was machst du"],"purple":["Čo robíš"]}},"important":[{"blue":["machen"]},{"blue":["Das macht Spaß"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "machen",
  "lv": "Robiť • Vytvárať",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "Robiť • Vytvárať",
    "explanation": [
      "Hlavná myšlienka: machen je veľmi časté sloveso, ktoré znamená robiť, vytvárať alebo pripravovať.",
      "Pri všeobecnej činnosti sa machen prekladá ako „robiť“.",
      "Ak sa niečo vytvára alebo pripravuje, podľa kontextu sa prekladá ako „vytvárať“, „robiť“ alebo „pripravovať“.",
      "V mnohých spojeniach sa machen prekladá prirodzene podľa kontextu, nie doslovne."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "Čo robíš?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Robím si domáce úlohy."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Robíme pizzu."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "Je to zábavné."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: Was machst du? = Čo robíš?"
    },
    "important": [
      "machen je veľmi široké slovo; v slovenčine ho treba prekladať prirodzene podľa situácie.",
      "Das macht Spaß znamená „je to zábava“, nie doslova „to robí radosť“."
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
        "left": {
          "blue": [
            "Was machst du"
          ],
          "purple": [
            "Čo robíš"
          ]
        }
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

## Finding 17

**Audit ID:** `LRB089-0017`
**Finding Stable ID:** `g2/a1/sk|a1-mann|a1.card.a1-mann.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-mann`
**Field / path:** `a1.card.a1-mann.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Muž • Manžel
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Muž • Manžel","study":{"id":"a1-mann","layout":"standardStudy","translation":"Muž • Manžel","explanation":["Hlavná myšlienka: der Mann môže znamenať muža alebo manžela.","Keď ide o osobu mužského pohlavia, Mann znamená „muž“.","Keď ide o životného partnera, der Mann znamená manžel (mein Mann = môj manžel).","Privlastňovacie zámeno (mein, dein alebo ihr Mann) takmer vždy označuje manžela.","Množné číslo: die Männer.","Ženský tvar die Frau má podobný dvojitý význam: žena aj manželka."],"examples":[{"de":"Er ist ein netter Mann.","lv":"On je milý muž."},{"de":"Das ist mein Mann.","lv":"Toto je môj manžel."},{"de":"Wie viele Männer sind hier?","lv":"Koľko mužov je tu?"},{"de":"Mein Mann arbeitet in Berlin.","lv":"Môj manžel pracuje v Berlíne."},{"de":"Der Mann trägt einen Anzug.","lv":"Muž má na sebe oblek."},{"de":"Ihr Mann ist Arzt.","lv":"Jej manžel je lekár."}],"tip":["Privlastňovacie zámeno (mein, dein alebo ihr Mann) takmer vždy označuje manžela.","Bez privlastňovacieho (der Mann, ein Mann) zvyčajne znamená muž."],"important":["Der Mann = muž ALEBO manžel – v závislosti od kontextu.","Mein Mann = môj manžel (nie „môj muž“).","Množné číslo: die Männer."],"sectionAccents":{"explanation":{"blue":["der Mann","Mann"]},"examples":[{"de":{"blue":["Mann"]},"lv":{}},{"de":{"green":["mein Mann"]},"lv":{}},{"de":{"blue":["Männer"]},"lv":{}},{"de":{"green":["Mein Mann"]},"lv":{}},{"de":{"blue":["Mann"]},"lv":{}},{"de":{"green":["Ihr Mann"]},"lv":{}}],"tip":[{"green":["mein","dein","ihr Mann"]},{"blue":["der Mann","ein Mann"]}],"important":[{},{"green":["mein Mann"]},{"blue":["die Männer"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Mann",
  "de_article": "der",
  "de_plural": "die Männer",
  "lv": "Muž • Manžel",
  "level": "A1",
  "study": {
    "id": "a1-mann",
    "layout": "standardStudy",
    "translation": "Muž • Manžel",
    "explanation": [
      "Hlavná myšlienka: der Mann môže znamenať muža alebo manžela.",
      "Keď ide o osobu mužského pohlavia, Mann znamená „muž“.",
      "Keď ide o životného partnera, der Mann znamená manžel (mein Mann = môj manžel).",
      "Privlastňovacie zámeno (mein, dein alebo ihr Mann) takmer vždy označuje manžela.",
      "Množné číslo: die Männer.",
      "Ženský tvar die Frau má podobný dvojitý význam: žena aj manželka."
    ],
    "examples": [
      {
        "de": "Er ist ein netter Mann.",
        "lv": "On je milý muž."
      },
      {
        "de": "Das ist mein Mann.",
        "lv": "Toto je môj manžel."
      },
      {
        "de": "Wie viele Männer sind hier?",
        "lv": "Koľko mužov je tu?"
      },
      {
        "de": "Mein Mann arbeitet in Berlin.",
        "lv": "Môj manžel pracuje v Berlíne."
      },
      {
        "de": "Der Mann trägt einen Anzug.",
        "lv": "Muž má na sebe oblek."
      },
      {
        "de": "Ihr Mann ist Arzt.",
        "lv": "Jej manžel je lekár."
      }
    ],
    "tip": [
      "Privlastňovacie zámeno (mein, dein alebo ihr Mann) takmer vždy označuje manžela.",
      "Bez privlastňovacieho (der Mann, ein Mann) zvyčajne znamená muž."
    ],
    "important": [
      "Der Mann = muž ALEBO manžel – v závislosti od kontextu.",
      "Mein Mann = môj manžel (nie „môj muž“).",
      "Množné číslo: die Männer."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Mann",
          "Mann"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Mann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "mein Mann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Männer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Mein Mann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Mann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Ihr Mann"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "green": [
            "mein",
            "dein",
            "ihr Mann"
          ]
        },
        {
          "blue": [
            "der Mann",
            "ein Mann"
          ]
        }
      ],
      "important": [
        {},
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

## Finding 18

**Audit ID:** `LRB089-0018`
**Finding Stable ID:** `g2/a1/sk|a1-mann|a1.card.a1-mann.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-mann`
**Field / path:** `a1.card.a1-mann.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Muž • Manžel
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Muž • Manžel","study":{"id":"a1-mann","layout":"standardStudy","translation":"Muž • Manžel","explanation":["Hlavná myšlienka: der Mann môže znamenať muža alebo manžela.","Keď ide o osobu mužského pohlavia, Mann znamená „muž“.","Keď ide o životného partnera, der Mann znamená manžel (mein Mann = môj manžel).","Privlastňovacie zámeno (mein, dein alebo ihr Mann) takmer vždy označuje manžela.","Množné číslo: die Männer.","Ženský tvar die Frau má podobný dvojitý význam: žena aj manželka."],"examples":[{"de":"Er ist ein netter Mann.","lv":"On je milý muž."},{"de":"Das ist mein Mann.","lv":"Toto je môj manžel."},{"de":"Wie viele Männer sind hier?","lv":"Koľko mužov je tu?"},{"de":"Mein Mann arbeitet in Berlin.","lv":"Môj manžel pracuje v Berlíne."},{"de":"Der Mann trägt einen Anzug.","lv":"Muž má na sebe oblek."},{"de":"Ihr Mann ist Arzt.","lv":"Jej manžel je lekár."}],"tip":["Privlastňovacie zámeno (mein, dein alebo ihr Mann) takmer vždy označuje manžela.","Bez privlastňovacieho (der Mann, ein Mann) zvyčajne znamená muž."],"important":["Der Mann = muž ALEBO manžel – v závislosti od kontextu.","Mein Mann = môj manžel (nie „môj muž“).","Množné číslo: die Männer."],"sectionAccents":{"explanation":{"blue":["der Mann","Mann"]},"examples":[{"de":{"blue":["Mann"]},"lv":{}},{"de":{"green":["mein Mann"]},"lv":{}},{"de":{"blue":["Männer"]},"lv":{}},{"de":{"green":["Mein Mann"]},"lv":{}},{"de":{"blue":["Mann"]},"lv":{}},{"de":{"green":["Ihr Mann"]},"lv":{}}],"tip":[{"green":["mein","dein","ihr Mann"]},{"blue":["der Mann","ein Mann"]}],"important":[{},{"green":["mein Mann"]},{"blue":["die Männer"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Mann",
  "de_article": "der",
  "de_plural": "die Männer",
  "lv": "Muž • Manžel",
  "level": "A1",
  "study": {
    "id": "a1-mann",
    "layout": "standardStudy",
    "translation": "Muž • Manžel",
    "explanation": [
      "Hlavná myšlienka: der Mann môže znamenať muža alebo manžela.",
      "Keď ide o osobu mužského pohlavia, Mann znamená „muž“.",
      "Keď ide o životného partnera, der Mann znamená manžel (mein Mann = môj manžel).",
      "Privlastňovacie zámeno (mein, dein alebo ihr Mann) takmer vždy označuje manžela.",
      "Množné číslo: die Männer.",
      "Ženský tvar die Frau má podobný dvojitý význam: žena aj manželka."
    ],
    "examples": [
      {
        "de": "Er ist ein netter Mann.",
        "lv": "On je milý muž."
      },
      {
        "de": "Das ist mein Mann.",
        "lv": "Toto je môj manžel."
      },
      {
        "de": "Wie viele Männer sind hier?",
        "lv": "Koľko mužov je tu?"
      },
      {
        "de": "Mein Mann arbeitet in Berlin.",
        "lv": "Môj manžel pracuje v Berlíne."
      },
      {
        "de": "Der Mann trägt einen Anzug.",
        "lv": "Muž má na sebe oblek."
      },
      {
        "de": "Ihr Mann ist Arzt.",
        "lv": "Jej manžel je lekár."
      }
    ],
    "tip": [
      "Privlastňovacie zámeno (mein, dein alebo ihr Mann) takmer vždy označuje manžela.",
      "Bez privlastňovacieho (der Mann, ein Mann) zvyčajne znamená muž."
    ],
    "important": [
      "Der Mann = muž ALEBO manžel – v závislosti od kontextu.",
      "Mein Mann = môj manžel (nie „môj muž“).",
      "Množné číslo: die Männer."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "der Mann",
          "Mann"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "Mann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "mein Mann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Männer"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Mein Mann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Mann"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Ihr Mann"
            ]
          },
          "lv": {}
        }
      ],
      "tip": [
        {
          "green": [
            "mein",
            "dein",
            "ihr Mann"
          ]
        },
        {
          "blue": [
            "der Mann",
            "ein Mann"
          ]
        }
      ],
      "important": [
        {},
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

## Finding 19

**Audit ID:** `LRB089-0019`
**Finding Stable ID:** `g2/a1/sk|a1-nach|a1.card.a1-nach.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-nach`
**Field / path:** `a1.card.a1-nach.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Do • Potom
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Do • Po","study":{"id":"a1-nach","layout":"standardStudy","translation":"Do • Po","explanation":["Hlavná myšlienka: nach znamená „do“ pri miestach a „po“ pri čase alebo poradí.","Pri mestách a krajinách bez člena nach často znamená „do“.","Pri časovom poradí nach znamená „po“.","Vo fráze nach Hause znamená domov."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Idem do Berlína."},{"de":"Wir gehen nach Hause.","lv":"Ideme domov."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Po jedle ideme na prechádzku."},{"de":"Es ist zehn nach acht.","lv":"Je desať minút po ôsmej."}],"comparison":[{"word":"nach","meaning":"Do • Po","example":"Ich fahre nach Berlin."},{"word":"zu","meaning":"K • Do","example":"Ich gehe zum Arzt."},{"word":"in","meaning":"Do • Na miesto s členom","example":"Ich gehe in die Schule."},{"word":"vor","meaning":"Pred • Pred niečím","example":"Vor dem Essen wasche ich die Hände."}],"tip":{"text":"Pamätaj: nach Hause = domov • nach Berlin = do Berlína • nach dem Essen = po jedle."},"important":["Nach sa nepoužíva na všetkých miestach.","Do školy sa zvyčajne povie in die Schule, nie nach Schule."],"sectionAccents":{"explanation":{"blue":["nach","nach Hause"]},"examples":[{"de":{"blue":["nach"],"green":["Berlin"]},"lv":{"green":["Berlína"]}},{"de":{"blue":["nach Hause"]},"lv":{}},{"de":{"blue":["Nach"],"yellow":["Essen"]},"lv":{}},{"de":{"blue":["nach"]},"lv":{}}],"comparison":[{"word":{"green":["nach"]},"meaning":{},"example":{"blue":["nach"]}},{"word":{"green":["zu"]},"meaning":{},"example":{"yellow":["zum Arzt"]}},{"word":{"green":["in"]},"meaning":{},"example":{"green":["in die Schule"]}},{"word":{"green":["vor"]},"meaning":{},"example":{"red":["Vor"]}}],"tip":{"left":{"blue":["nach Hause","nach"],"purple":["Pamätaj"]}},"important":[{"blue":["nach"]},{"red":["nach Schule"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nach",
  "lv": "Do • Po",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "Do • Po",
    "explanation": [
      "Hlavná myšlienka: nach znamená „do“ pri miestach a „po“ pri čase alebo poradí.",
      "Pri mestách a krajinách bez člena nach často znamená „do“.",
      "Pri časovom poradí nach znamená „po“.",
      "Vo fráze nach Hause znamená domov."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Idem do Berlína."
      },
      {
        "de": "Wir gehen nach Hause.",
        "lv": "Ideme domov."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Po jedle ideme na prechádzku."
      },
      {
        "de": "Es ist zehn nach acht.",
        "lv": "Je desať minút po ôsmej."
      }
    ],
    "comparison": [
      {
        "word": "nach",
        "meaning": "Do • Po",
        "example": "Ich fahre nach Berlin."
      },
      {
        "word": "zu",
        "meaning": "K • Do",
        "example": "Ich gehe zum Arzt."
      },
      {
        "word": "in",
        "meaning": "Do • Na miesto s členom",
        "example": "Ich gehe in die Schule."
      },
      {
        "word": "vor",
        "meaning": "Pred • Pred niečím",
        "example": "Vor dem Essen wasche ich die Hände."
      }
    ],
    "tip": {
      "text": "Pamätaj: nach Hause = domov • nach Berlin = do Berlína • nach dem Essen = po jedle."
    },
    "important": [
      "Nach sa nepoužíva na všetkých miestach.",
      "Do školy sa zvyčajne povie in die Schule, nie nach Schule."
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
          "lv": {
            "green": [
              "Berlína"
            ]
          }
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
        "left": {
          "blue": [
            "nach Hause",
            "nach"
          ],
          "purple": [
            "Pamätaj"
          ]
        }
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

## Finding 20

**Audit ID:** `LRB089-0020`
**Finding Stable ID:** `g2/a1/sk|a1-nach|a1.card.a1-nach.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-nach`
**Field / path:** `a1.card.a1-nach.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Do • Potom
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Do • Po","study":{"id":"a1-nach","layout":"standardStudy","translation":"Do • Po","explanation":["Hlavná myšlienka: nach znamená „do“ pri miestach a „po“ pri čase alebo poradí.","Pri mestách a krajinách bez člena nach často znamená „do“.","Pri časovom poradí nach znamená „po“.","Vo fráze nach Hause znamená domov."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Idem do Berlína."},{"de":"Wir gehen nach Hause.","lv":"Ideme domov."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Po jedle ideme na prechádzku."},{"de":"Es ist zehn nach acht.","lv":"Je desať minút po ôsmej."}],"comparison":[{"word":"nach","meaning":"Do • Po","example":"Ich fahre nach Berlin."},{"word":"zu","meaning":"K • Do","example":"Ich gehe zum Arzt."},{"word":"in","meaning":"Do • Na miesto s členom","example":"Ich gehe in die Schule."},{"word":"vor","meaning":"Pred • Pred niečím","example":"Vor dem Essen wasche ich die Hände."}],"tip":{"text":"Pamätaj: nach Hause = domov • nach Berlin = do Berlína • nach dem Essen = po jedle."},"important":["Nach sa nepoužíva na všetkých miestach.","Do školy sa zvyčajne povie in die Schule, nie nach Schule."],"sectionAccents":{"explanation":{"blue":["nach","nach Hause"]},"examples":[{"de":{"blue":["nach"],"green":["Berlin"]},"lv":{"green":["Berlína"]}},{"de":{"blue":["nach Hause"]},"lv":{}},{"de":{"blue":["Nach"],"yellow":["Essen"]},"lv":{}},{"de":{"blue":["nach"]},"lv":{}}],"comparison":[{"word":{"green":["nach"]},"meaning":{},"example":{"blue":["nach"]}},{"word":{"green":["zu"]},"meaning":{},"example":{"yellow":["zum Arzt"]}},{"word":{"green":["in"]},"meaning":{},"example":{"green":["in die Schule"]}},{"word":{"green":["vor"]},"meaning":{},"example":{"red":["Vor"]}}],"tip":{"left":{"blue":["nach Hause","nach"],"purple":["Pamätaj"]}},"important":[{"blue":["nach"]},{"red":["nach Schule"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nach",
  "lv": "Do • Po",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "Do • Po",
    "explanation": [
      "Hlavná myšlienka: nach znamená „do“ pri miestach a „po“ pri čase alebo poradí.",
      "Pri mestách a krajinách bez člena nach často znamená „do“.",
      "Pri časovom poradí nach znamená „po“.",
      "Vo fráze nach Hause znamená domov."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Idem do Berlína."
      },
      {
        "de": "Wir gehen nach Hause.",
        "lv": "Ideme domov."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Po jedle ideme na prechádzku."
      },
      {
        "de": "Es ist zehn nach acht.",
        "lv": "Je desať minút po ôsmej."
      }
    ],
    "comparison": [
      {
        "word": "nach",
        "meaning": "Do • Po",
        "example": "Ich fahre nach Berlin."
      },
      {
        "word": "zu",
        "meaning": "K • Do",
        "example": "Ich gehe zum Arzt."
      },
      {
        "word": "in",
        "meaning": "Do • Na miesto s členom",
        "example": "Ich gehe in die Schule."
      },
      {
        "word": "vor",
        "meaning": "Pred • Pred niečím",
        "example": "Vor dem Essen wasche ich die Hände."
      }
    ],
    "tip": {
      "text": "Pamätaj: nach Hause = domov • nach Berlin = do Berlína • nach dem Essen = po jedle."
    },
    "important": [
      "Nach sa nepoužíva na všetkých miestach.",
      "Do školy sa zvyčajne povie in die Schule, nie nach Schule."
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
          "lv": {
            "green": [
              "Berlína"
            ]
          }
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
        "left": {
          "blue": [
            "nach Hause",
            "nach"
          ],
          "purple": [
            "Pamätaj"
          ]
        }
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

## Finding 21

**Audit ID:** `LRB089-0021`
**Finding Stable ID:** `g2/a1/sk|a1-natuerlich|a1.card.a1-natuerlich.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-natuerlich`
**Field / path:** `a1.card.a1-natuerlich.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Samozrejme • Prirodzené
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Samozrejme • Prirodzený","study":{"id":"a1-natuerlich","layout":"standardStudy","translation":"Samozrejme • Prirodzený","explanation":["Hlavná myšlienka: natürlich ako príslovka znamená samozrejme, ako prídavné meno znamená prirodzený.","V rozhovore pri potvrdení natürlich znamená „samozrejme“ (Kommst du mit? – Natürlich! = Ideš s nami? – Samozrejme!).","Pri opise prírody, pôvodu alebo vlastností natürlich znamená „prirodzený“ (natürliche Schönheit = prirodzená krása).","Kontext (odpoveď alebo potvrdenie; prípadne opis) určuje správny význam."],"examples":[{"de":"Kommst du mit? – Natürlich!","lv":"Ideš s nami? – Samozrejme!"},{"de":"Das ist eine natürliche Reaktion.","lv":"Je to prirodzená reakcia."},{"de":"Natürlich helfe ich dir.","lv":"Samozrejme ti pomôžem."},{"de":"Sie hat natürliche rote Haare.","lv":"Má prirodzené červené vlasy."},{"de":"Natürlich kann ich das machen.","lv":"Samozrejme to môžem urobiť."},{"de":"Das ist ganz natürlich.","lv":"To je úplne prirodzené."}],"tip":["Ako samostatná potvrdzujúca odpoveď → samozrejme.","Pri podstatnom mene, keď opisuje pôvod alebo vlastnosť → prirodzený."],"important":["natürlich = samozrejme ako príslovka ALEBO prirodzený ako prídavné meno.","Natürlich! ako samostatná odpoveď znamená „Samozrejme!“"],"sectionAccents":{"explanation":{"blue":["natürlich"]},"examples":[{"de":{"blue":["Natürlich"]},"lv":{}},{"de":{"green":["natürliche"]},"lv":{}},{"de":{"blue":["Natürlich"]},"lv":{}},{"de":{"green":["natürliche"]},"lv":{}},{"de":{"blue":["Natürlich"]},"lv":{}},{"de":{"green":["natürlich"]},"lv":{}}],"tip":[{},{}],"important":[{},{"blue":["Natürlich"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "natürlich",
  "lv": "Samozrejme • Prirodzený",
  "level": "A1",
  "study": {
    "id": "a1-natuerlich",
    "layout": "standardStudy",
    "translation": "Samozrejme • Prirodzený",
    "explanation": [
      "Hlavná myšlienka: natürlich ako príslovka znamená samozrejme, ako prídavné meno znamená prirodzený.",
      "V rozhovore pri potvrdení natürlich znamená „samozrejme“ (Kommst du mit? – Natürlich! = Ideš s nami? – Samozrejme!).",
      "Pri opise prírody, pôvodu alebo vlastností natürlich znamená „prirodzený“ (natürliche Schönheit = prirodzená krása).",
      "Kontext (odpoveď alebo potvrdenie; prípadne opis) určuje správny význam."
    ],
    "examples": [
      {
        "de": "Kommst du mit? – Natürlich!",
        "lv": "Ideš s nami? – Samozrejme!"
      },
      {
        "de": "Das ist eine natürliche Reaktion.",
        "lv": "Je to prirodzená reakcia."
      },
      {
        "de": "Natürlich helfe ich dir.",
        "lv": "Samozrejme ti pomôžem."
      },
      {
        "de": "Sie hat natürliche rote Haare.",
        "lv": "Má prirodzené červené vlasy."
      },
      {
        "de": "Natürlich kann ich das machen.",
        "lv": "Samozrejme to môžem urobiť."
      },
      {
        "de": "Das ist ganz natürlich.",
        "lv": "To je úplne prirodzené."
      }
    ],
    "tip": [
      "Ako samostatná potvrdzujúca odpoveď → samozrejme.",
      "Pri podstatnom mene, keď opisuje pôvod alebo vlastnosť → prirodzený."
    ],
    "important": [
      "natürlich = samozrejme ako príslovka ALEBO prirodzený ako prídavné meno.",
      "Natürlich! ako samostatná odpoveď znamená „Samozrejme!“"
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
        {
          "blue": [
            "Natürlich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 22

**Audit ID:** `LRB089-0022`
**Finding Stable ID:** `g2/a1/sk|a1-natuerlich|a1.card.a1-natuerlich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-natuerlich`
**Field / path:** `a1.card.a1-natuerlich.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Samozrejme • Prirodzené
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Samozrejme • Prirodzený","study":{"id":"a1-natuerlich","layout":"standardStudy","translation":"Samozrejme • Prirodzený","explanation":["Hlavná myšlienka: natürlich ako príslovka znamená samozrejme, ako prídavné meno znamená prirodzený.","V rozhovore pri potvrdení natürlich znamená „samozrejme“ (Kommst du mit? – Natürlich! = Ideš s nami? – Samozrejme!).","Pri opise prírody, pôvodu alebo vlastností natürlich znamená „prirodzený“ (natürliche Schönheit = prirodzená krása).","Kontext (odpoveď alebo potvrdenie; prípadne opis) určuje správny význam."],"examples":[{"de":"Kommst du mit? – Natürlich!","lv":"Ideš s nami? – Samozrejme!"},{"de":"Das ist eine natürliche Reaktion.","lv":"Je to prirodzená reakcia."},{"de":"Natürlich helfe ich dir.","lv":"Samozrejme ti pomôžem."},{"de":"Sie hat natürliche rote Haare.","lv":"Má prirodzené červené vlasy."},{"de":"Natürlich kann ich das machen.","lv":"Samozrejme to môžem urobiť."},{"de":"Das ist ganz natürlich.","lv":"To je úplne prirodzené."}],"tip":["Ako samostatná potvrdzujúca odpoveď → samozrejme.","Pri podstatnom mene, keď opisuje pôvod alebo vlastnosť → prirodzený."],"important":["natürlich = samozrejme ako príslovka ALEBO prirodzený ako prídavné meno.","Natürlich! ako samostatná odpoveď znamená „Samozrejme!“"],"sectionAccents":{"explanation":{"blue":["natürlich"]},"examples":[{"de":{"blue":["Natürlich"]},"lv":{}},{"de":{"green":["natürliche"]},"lv":{}},{"de":{"blue":["Natürlich"]},"lv":{}},{"de":{"green":["natürliche"]},"lv":{}},{"de":{"blue":["Natürlich"]},"lv":{}},{"de":{"green":["natürlich"]},"lv":{}}],"tip":[{},{}],"important":[{},{"blue":["Natürlich"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "natürlich",
  "lv": "Samozrejme • Prirodzený",
  "level": "A1",
  "study": {
    "id": "a1-natuerlich",
    "layout": "standardStudy",
    "translation": "Samozrejme • Prirodzený",
    "explanation": [
      "Hlavná myšlienka: natürlich ako príslovka znamená samozrejme, ako prídavné meno znamená prirodzený.",
      "V rozhovore pri potvrdení natürlich znamená „samozrejme“ (Kommst du mit? – Natürlich! = Ideš s nami? – Samozrejme!).",
      "Pri opise prírody, pôvodu alebo vlastností natürlich znamená „prirodzený“ (natürliche Schönheit = prirodzená krása).",
      "Kontext (odpoveď alebo potvrdenie; prípadne opis) určuje správny význam."
    ],
    "examples": [
      {
        "de": "Kommst du mit? – Natürlich!",
        "lv": "Ideš s nami? – Samozrejme!"
      },
      {
        "de": "Das ist eine natürliche Reaktion.",
        "lv": "Je to prirodzená reakcia."
      },
      {
        "de": "Natürlich helfe ich dir.",
        "lv": "Samozrejme ti pomôžem."
      },
      {
        "de": "Sie hat natürliche rote Haare.",
        "lv": "Má prirodzené červené vlasy."
      },
      {
        "de": "Natürlich kann ich das machen.",
        "lv": "Samozrejme to môžem urobiť."
      },
      {
        "de": "Das ist ganz natürlich.",
        "lv": "To je úplne prirodzené."
      }
    ],
    "tip": [
      "Ako samostatná potvrdzujúca odpoveď → samozrejme.",
      "Pri podstatnom mene, keď opisuje pôvod alebo vlastnosť → prirodzený."
    ],
    "important": [
      "natürlich = samozrejme ako príslovka ALEBO prirodzený ako prídavné meno.",
      "Natürlich! ako samostatná odpoveď znamená „Samozrejme!“"
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
        {
          "blue": [
            "Natürlich"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 23

**Audit ID:** `LRB089-0023`
**Finding Stable ID:** `g2/a1/sk|a1-nehmen|a1.card.a1-nehmen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-nehmen`
**Field / path:** `a1.card.a1-nehmen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vezmi • Vezmi
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Brať • Vziať","study":{"id":"a1-nehmen","layout":"standardStudy","translation":"Brať • Vziať","explanation":["Hlavná myšlienka: nehmen znamená brať alebo vziať.","Nehmen sa používa, keď si vezmete niečo pre seba alebo si vyberiete.","Nie je to to isté ako bringen, ktoré znamená niekomu niečo priniesť alebo niekam odniesť.","holen znamená ísť po niečo alebo niekoho a priniesť či vyzdvihnúť."],"examples":[{"de":"Ich nehme den Bus.","lv":"Idem autobusom."},{"de":"Nimm das Buch!","lv":"Vezmi knihu!"},{"de":"Ich bringe dir das Buch.","lv":"Prinášam ti knihu."},{"de":"Ich hole dich ab.","lv":"Vyzdvihnem ťa."}],"comparison":[{"word":"nehmen","meaning":"Brať • Vziať","example":"Nimm das Buch!"},{"word":"bringen","meaning":"Priniesť • Odniesť • Doručiť","example":"Ich bringe dir das Buch."},{"word":"holen","meaning":"Ísť po • Priniesť","example":"Ich hole Wasser."},{"word":"mitnehmen","meaning":"Vziať so sebou","example":"Ich nehme dich mit."}],"tip":{"text":"Zapamätaj si: vziať pre seba → nehmen • priniesť niekomu → bringen."},"important":["Ich nehme den Bus znamená „idem autobusom“.","nehmen nie je to isté ako bringen."],"sectionAccents":{"explanation":{"blue":["nehmen"],"red":["holen"]},"examples":[{"de":{"blue":["nehme"],"yellow":["Bus"]},"lv":{"yellow":["autobusom"]}},{"de":{"blue":["Nimm"],"yellow":["Buch"]},"lv":{}},{"de":{"red":["bringe"],"yellow":["Buch"]},"lv":{}},{"de":{"red":["hole"],"green":["dich"]},"lv":{}}],"comparison":[{"word":{"green":["nehmen"]},"meaning":{},"example":{"blue":["Nimm"]}},{"word":{"green":["bringen"]},"meaning":{},"example":{"red":["bringe"]}},{"word":{"green":["holen"]},"meaning":{},"example":{}},{"word":{"green":["mitnehmen"]},"meaning":{},"example":{"green":["nehme","mit"]}}],"tip":{"left":{"blue":["nehmen"],"purple":["Zapamätaj"],"red":["Zapamätaj"]}},"important":[{"blue":["nehme den Bus"]},{"blue":["nehmen"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nehmen",
  "lv": "Brať • Vziať",
  "level": "A1",
  "study": {
    "id": "a1-nehmen",
    "layout": "standardStudy",
    "translation": "Brať • Vziať",
    "explanation": [
      "Hlavná myšlienka: nehmen znamená brať alebo vziať.",
      "Nehmen sa používa, keď si vezmete niečo pre seba alebo si vyberiete.",
      "Nie je to to isté ako bringen, ktoré znamená niekomu niečo priniesť alebo niekam odniesť.",
      "holen znamená ísť po niečo alebo niekoho a priniesť či vyzdvihnúť."
    ],
    "examples": [
      {
        "de": "Ich nehme den Bus.",
        "lv": "Idem autobusom."
      },
      {
        "de": "Nimm das Buch!",
        "lv": "Vezmi knihu!"
      },
      {
        "de": "Ich bringe dir das Buch.",
        "lv": "Prinášam ti knihu."
      },
      {
        "de": "Ich hole dich ab.",
        "lv": "Vyzdvihnem ťa."
      }
    ],
    "comparison": [
      {
        "word": "nehmen",
        "meaning": "Brať • Vziať",
        "example": "Nimm das Buch!"
      },
      {
        "word": "bringen",
        "meaning": "Priniesť • Odniesť • Doručiť",
        "example": "Ich bringe dir das Buch."
      },
      {
        "word": "holen",
        "meaning": "Ísť po • Priniesť",
        "example": "Ich hole Wasser."
      },
      {
        "word": "mitnehmen",
        "meaning": "Vziať so sebou",
        "example": "Ich nehme dich mit."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: vziať pre seba → nehmen • priniesť niekomu → bringen."
    },
    "important": [
      "Ich nehme den Bus znamená „idem autobusom“.",
      "nehmen nie je to isté ako bringen."
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
          "lv": {
            "yellow": [
              "autobusom"
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
        "left": {
          "blue": [
            "nehmen"
          ],
          "purple": [
            "Zapamätaj"
          ],
          "red": [
            "Zapamätaj"
          ]
        }
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

## Finding 24

**Audit ID:** `LRB089-0024`
**Finding Stable ID:** `g2/a1/sk|a1-nehmen|a1.card.a1-nehmen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-nehmen`
**Field / path:** `a1.card.a1-nehmen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vezmi • Vezmi
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Brať • Vziať","study":{"id":"a1-nehmen","layout":"standardStudy","translation":"Brať • Vziať","explanation":["Hlavná myšlienka: nehmen znamená brať alebo vziať.","Nehmen sa používa, keď si vezmete niečo pre seba alebo si vyberiete.","Nie je to to isté ako bringen, ktoré znamená niekomu niečo priniesť alebo niekam odniesť.","holen znamená ísť po niečo alebo niekoho a priniesť či vyzdvihnúť."],"examples":[{"de":"Ich nehme den Bus.","lv":"Idem autobusom."},{"de":"Nimm das Buch!","lv":"Vezmi knihu!"},{"de":"Ich bringe dir das Buch.","lv":"Prinášam ti knihu."},{"de":"Ich hole dich ab.","lv":"Vyzdvihnem ťa."}],"comparison":[{"word":"nehmen","meaning":"Brať • Vziať","example":"Nimm das Buch!"},{"word":"bringen","meaning":"Priniesť • Odniesť • Doručiť","example":"Ich bringe dir das Buch."},{"word":"holen","meaning":"Ísť po • Priniesť","example":"Ich hole Wasser."},{"word":"mitnehmen","meaning":"Vziať so sebou","example":"Ich nehme dich mit."}],"tip":{"text":"Zapamätaj si: vziať pre seba → nehmen • priniesť niekomu → bringen."},"important":["Ich nehme den Bus znamená „idem autobusom“.","nehmen nie je to isté ako bringen."],"sectionAccents":{"explanation":{"blue":["nehmen"],"red":["holen"]},"examples":[{"de":{"blue":["nehme"],"yellow":["Bus"]},"lv":{"yellow":["autobusom"]}},{"de":{"blue":["Nimm"],"yellow":["Buch"]},"lv":{}},{"de":{"red":["bringe"],"yellow":["Buch"]},"lv":{}},{"de":{"red":["hole"],"green":["dich"]},"lv":{}}],"comparison":[{"word":{"green":["nehmen"]},"meaning":{},"example":{"blue":["Nimm"]}},{"word":{"green":["bringen"]},"meaning":{},"example":{"red":["bringe"]}},{"word":{"green":["holen"]},"meaning":{},"example":{}},{"word":{"green":["mitnehmen"]},"meaning":{},"example":{"green":["nehme","mit"]}}],"tip":{"left":{"blue":["nehmen"],"purple":["Zapamätaj"],"red":["Zapamätaj"]}},"important":[{"blue":["nehme den Bus"]},{"blue":["nehmen"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nehmen",
  "lv": "Brať • Vziať",
  "level": "A1",
  "study": {
    "id": "a1-nehmen",
    "layout": "standardStudy",
    "translation": "Brať • Vziať",
    "explanation": [
      "Hlavná myšlienka: nehmen znamená brať alebo vziať.",
      "Nehmen sa používa, keď si vezmete niečo pre seba alebo si vyberiete.",
      "Nie je to to isté ako bringen, ktoré znamená niekomu niečo priniesť alebo niekam odniesť.",
      "holen znamená ísť po niečo alebo niekoho a priniesť či vyzdvihnúť."
    ],
    "examples": [
      {
        "de": "Ich nehme den Bus.",
        "lv": "Idem autobusom."
      },
      {
        "de": "Nimm das Buch!",
        "lv": "Vezmi knihu!"
      },
      {
        "de": "Ich bringe dir das Buch.",
        "lv": "Prinášam ti knihu."
      },
      {
        "de": "Ich hole dich ab.",
        "lv": "Vyzdvihnem ťa."
      }
    ],
    "comparison": [
      {
        "word": "nehmen",
        "meaning": "Brať • Vziať",
        "example": "Nimm das Buch!"
      },
      {
        "word": "bringen",
        "meaning": "Priniesť • Odniesť • Doručiť",
        "example": "Ich bringe dir das Buch."
      },
      {
        "word": "holen",
        "meaning": "Ísť po • Priniesť",
        "example": "Ich hole Wasser."
      },
      {
        "word": "mitnehmen",
        "meaning": "Vziať so sebou",
        "example": "Ich nehme dich mit."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: vziať pre seba → nehmen • priniesť niekomu → bringen."
    },
    "important": [
      "Ich nehme den Bus znamená „idem autobusom“.",
      "nehmen nie je to isté ako bringen."
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
          "lv": {
            "yellow": [
              "autobusom"
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
        "left": {
          "blue": [
            "nehmen"
          ],
          "purple": [
            "Zapamätaj"
          ],
          "red": [
            "Zapamätaj"
          ]
        }
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

## Finding 25

**Audit ID:** `LRB089-0025`
**Finding Stable ID:** `g2/a1/sk|a1-neu|a1.card.a1-neu.study.explanation[5]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-neu`
**Field / path:** `a1.card.a1-neu.study.explanation[5]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Opakom je alt (starý) • Podstatné meno das Neue znamená nový.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Nový (o veciach)","study":{"id":"a1-neu","layout":"standardStudy","translation":"Nový (o veciach)","explanation":["Hlavná myšlienka: neu znamená nový v súvislosti s vecami – nedávno vytvorený, kúpený alebo prvýkrát použitý.","Neu popisuje veci, spotrebiče, oblečenie, domy, nápady atď. – nie vek človeka alebo zvieraťa.","V slovenčine rozlišujeme mladý vekom (jung) a nový alebo nedávno vytvorený (neu).","Pre vek človeka alebo zvieraťa sa používa jung, nie neu.","Neu sa používa aj obrazne: nová práca, nové informácie, nový začiatok.","Opakom je alt (starý) • Podstatné meno das Neue znamená novinku."],"examples":[{"de":"Mein Handy ist neu.","lv":"Môj telefón je nový."},{"de":"Wir haben ein neues Auto.","lv":"Máme nové auto."},{"de":"Das ist meine neue Wohnung.","lv":"Toto je môj nový byt."},{"de":"Ich habe neue Schuhe gekauft.","lv":"Kúpil som si nové topánky."},{"de":"Das ist eine neue Idee.","lv":"Toto je nová myšlienka."},{"de":"Er hat einen neuen Job.","lv":"Má novú prácu."},{"de":"Was gibt es Neues?","lv":"Čo je nové?"}],"tip":["Neu odkazuje na veci, zariadenia a novinky - keď hovoríme o veku človeka, použite jung.","Opak: neu ↔ alt (nový ↔ starý)."],"important":["neu opisuje veci a novinky, nie vek človeka alebo zvieraťa.","Na určenie veku osoby alebo zvieraťa použite jung namiesto neu.","Nesprávne: Meine Schwester ist neu. → Správne: Meine Schwester ist jung."],"sectionAccents":{"explanation":{"blue":["neu"],"green":["jung"]},"examples":[{"de":{"blue":["neu"]},"lv":{}},{"de":{"blue":["neues"]},"lv":{}},{"de":{"blue":["neue"]},"lv":{}},{"de":{"blue":["neue"]},"lv":{}},{"de":{"blue":["neue"]},"lv":{}},{"de":{"blue":["neuen"]},"lv":{}},{"de":{"blue":["Neues"]},"lv":{}}],"tip":[{"blue":["neu"],"green":["jung"]},{"blue":["neu"],"purple":["alt"]}],"important":[{"blue":["neu"]},{"green":["jung"],"blue":["neu"]},{"blue":["neu"],"green":["jung"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "neu",
  "lv": "Nový (o veciach)",
  "level": "A1",
  "study": {
    "id": "a1-neu",
    "layout": "standardStudy",
    "translation": "Nový (o veciach)",
    "explanation": [
      "Hlavná myšlienka: neu znamená nový v súvislosti s vecami – nedávno vytvorený, kúpený alebo prvýkrát použitý.",
      "Neu popisuje veci, spotrebiče, oblečenie, domy, nápady atď. – nie vek človeka alebo zvieraťa.",
      "V slovenčine rozlišujeme mladý vekom (jung) a nový alebo nedávno vytvorený (neu).",
      "Pre vek človeka alebo zvieraťa sa používa jung, nie neu.",
      "Neu sa používa aj obrazne: nová práca, nové informácie, nový začiatok.",
      "Opakom je alt (starý) • Podstatné meno das Neue znamená novinku."
    ],
    "examples": [
      {
        "de": "Mein Handy ist neu.",
        "lv": "Môj telefón je nový."
      },
      {
        "de": "Wir haben ein neues Auto.",
        "lv": "Máme nové auto."
      },
      {
        "de": "Das ist meine neue Wohnung.",
        "lv": "Toto je môj nový byt."
      },
      {
        "de": "Ich habe neue Schuhe gekauft.",
        "lv": "Kúpil som si nové topánky."
      },
      {
        "de": "Das ist eine neue Idee.",
        "lv": "Toto je nová myšlienka."
      },
      {
        "de": "Er hat einen neuen Job.",
        "lv": "Má novú prácu."
      },
      {
        "de": "Was gibt es Neues?",
        "lv": "Čo je nové?"
      }
    ],
    "tip": [
      "Neu odkazuje na veci, zariadenia a novinky - keď hovoríme o veku človeka, použite jung.",
      "Opak: neu ↔ alt (nový ↔ starý)."
    ],
    "important": [
      "neu opisuje veci a novinky, nie vek človeka alebo zvieraťa.",
      "Na určenie veku osoby alebo zvieraťa použite jung namiesto neu.",
      "Nesprávne: Meine Schwester ist neu. → Správne: Meine Schwester ist jung."
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

## Finding 26

**Audit ID:** `LRB089-0026`
**Finding Stable ID:** `g2/a1/sk|a1-nur-study|a1.card.a1-nur-study.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-nur-study`
**Field / path:** `a1.card.a1-nur-study.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Iba • Iba
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Iba • Jedine","study":{"id":"a1-nur-study","layout":"standardStudy","translation":"Iba • Jedine","explanation":["Hlavná myšlienka: nur obmedzuje množstvo, počet ľudí, výber alebo možnosti.","nur vyjadruje najmä obmedzené množstvo alebo výber.","Často vyjadruje, koľko niečoho je, čo presne sa vyberá alebo kto je jediný.","Nur znamená iba, výlučne, nič viac: obmedzuje množstvo alebo výber."],"examples":[{"de":"Ich habe nur zehn Euro.","lv":"Mám len desať eur."},{"de":"Ich habe nur zehn Euro.","lv":"Mám len desať eur."},{"de":"Nur du kannst mir helfen.","lv":"Len ty mi môžeš pomôcť."},{"de":"Ich möchte nur Kaffee.","lv":"Chcem len kávu."},{"de":"Ich habe nur acht Euro.","lv":"Mám len osem eur."}],"tip":["Obmedzuje množstvo, počet ľudí, výber alebo možnosti.","Použi nur, keď kontext zodpovedá tomuto významu."],"important":["Slovenské „iba“ sa do nemčiny nie vždy prekladá ako nur.","nur = iba • výhradne."],"sectionAccents":{"explanation":{"orange":["nur"]},"examples":[{"de":{"orange":["nur","nur"]},"lv":{}},{"de":{"orange":["nur","nur"]},"lv":{}},{"de":{"orange":["nur","nur"]},"lv":{}},{"de":{"orange":["nur","nur"]},"lv":{}},{"de":{"orange":["nur","nur"]},"lv":{}}],"tip":[{},{}],"important":[{"orange":["nur"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nur",
  "lv": "Iba • Jedine",
  "level": "A1",
  "study": {
    "id": "a1-nur-study",
    "layout": "standardStudy",
    "translation": "Iba • Jedine",
    "explanation": [
      "Hlavná myšlienka: nur obmedzuje množstvo, počet ľudí, výber alebo možnosti.",
      "nur vyjadruje najmä obmedzené množstvo alebo výber.",
      "Často vyjadruje, koľko niečoho je, čo presne sa vyberá alebo kto je jediný.",
      "Nur znamená iba, výlučne, nič viac: obmedzuje množstvo alebo výber."
    ],
    "examples": [
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Mám len desať eur."
      },
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Mám len desať eur."
      },
      {
        "de": "Nur du kannst mir helfen.",
        "lv": "Len ty mi môžeš pomôcť."
      },
      {
        "de": "Ich möchte nur Kaffee.",
        "lv": "Chcem len kávu."
      },
      {
        "de": "Ich habe nur acht Euro.",
        "lv": "Mám len osem eur."
      }
    ],
    "tip": [
      "Obmedzuje množstvo, počet ľudí, výber alebo možnosti.",
      "Použi nur, keď kontext zodpovedá tomuto významu."
    ],
    "important": [
      "Slovenské „iba“ sa do nemčiny nie vždy prekladá ako nur.",
      "nur = iba • výhradne."
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

## Finding 27

**Audit ID:** `LRB089-0027`
**Finding Stable ID:** `g2/a1/sk|a1-nur-study|a1.card.a1-nur-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-nur-study`
**Field / path:** `a1.card.a1-nur-study.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Iba • Iba
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Iba • Jedine","study":{"id":"a1-nur-study","layout":"standardStudy","translation":"Iba • Jedine","explanation":["Hlavná myšlienka: nur obmedzuje množstvo, počet ľudí, výber alebo možnosti.","nur vyjadruje najmä obmedzené množstvo alebo výber.","Často vyjadruje, koľko niečoho je, čo presne sa vyberá alebo kto je jediný.","Nur znamená iba, výlučne, nič viac: obmedzuje množstvo alebo výber."],"examples":[{"de":"Ich habe nur zehn Euro.","lv":"Mám len desať eur."},{"de":"Ich habe nur zehn Euro.","lv":"Mám len desať eur."},{"de":"Nur du kannst mir helfen.","lv":"Len ty mi môžeš pomôcť."},{"de":"Ich möchte nur Kaffee.","lv":"Chcem len kávu."},{"de":"Ich habe nur acht Euro.","lv":"Mám len osem eur."}],"tip":["Obmedzuje množstvo, počet ľudí, výber alebo možnosti.","Použi nur, keď kontext zodpovedá tomuto významu."],"important":["Slovenské „iba“ sa do nemčiny nie vždy prekladá ako nur.","nur = iba • výhradne."],"sectionAccents":{"explanation":{"orange":["nur"]},"examples":[{"de":{"orange":["nur","nur"]},"lv":{}},{"de":{"orange":["nur","nur"]},"lv":{}},{"de":{"orange":["nur","nur"]},"lv":{}},{"de":{"orange":["nur","nur"]},"lv":{}},{"de":{"orange":["nur","nur"]},"lv":{}}],"tip":[{},{}],"important":[{"orange":["nur"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nur",
  "lv": "Iba • Jedine",
  "level": "A1",
  "study": {
    "id": "a1-nur-study",
    "layout": "standardStudy",
    "translation": "Iba • Jedine",
    "explanation": [
      "Hlavná myšlienka: nur obmedzuje množstvo, počet ľudí, výber alebo možnosti.",
      "nur vyjadruje najmä obmedzené množstvo alebo výber.",
      "Často vyjadruje, koľko niečoho je, čo presne sa vyberá alebo kto je jediný.",
      "Nur znamená iba, výlučne, nič viac: obmedzuje množstvo alebo výber."
    ],
    "examples": [
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Mám len desať eur."
      },
      {
        "de": "Ich habe nur zehn Euro.",
        "lv": "Mám len desať eur."
      },
      {
        "de": "Nur du kannst mir helfen.",
        "lv": "Len ty mi môžeš pomôcť."
      },
      {
        "de": "Ich möchte nur Kaffee.",
        "lv": "Chcem len kávu."
      },
      {
        "de": "Ich habe nur acht Euro.",
        "lv": "Mám len osem eur."
      }
    ],
    "tip": [
      "Obmedzuje množstvo, počet ľudí, výber alebo možnosti.",
      "Použi nur, keď kontext zodpovedá tomuto významu."
    ],
    "important": [
      "Slovenské „iba“ sa do nemčiny nie vždy prekladá ako nur.",
      "nur = iba • výhradne."
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

## Finding 28

**Audit ID:** `LRB089-0028`
**Finding Stable ID:** `g2/a1/sk|a1-oder|a1.card.a1-oder.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-oder`
**Field / path:** `a1.card.a1-oder.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Alebo • Or
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Alebo • Či","study":{"id":"a1-oder","layout":"standardStudy","translation":"Alebo • Či","explanation":["Hlavná myšlienka: oder sa používa, keď si vyberáme medzi dvoma alebo viacerými možnosťami.","V slovenčine oder najčastejšie znamená „alebo“.","Toto nie je to isté ako ob, ktoré zavádza nepriamu otázku.","V rozhovoroch možno oder umiestniť aj na koniec vety: Du kommst, oder?"],"examples":[{"de":"Kaffee oder Tee?","lv":"Káva alebo čaj?"},{"de":"Heute oder morgen?","lv":"Dnes alebo zajtra?"},{"de":"Willst du Pizza oder Salat?","lv":"Chceš pizzu alebo šalát?"},{"de":"Du kommst, oder?","lv":"Prídeš, však?"}],"comparison":[{"word":"oder","meaning":"Alebo pri výbere","example":"Kaffee oder Tee?"},{"word":"ob","meaning":"Či v nepriamej otázke","example":"Ich weiß nicht, ob er kommt."},{"word":"und","meaning":"A","example":"Kaffee und Kuchen."},{"word":"aber","meaning":"Ale","example":"Ich komme, aber später."}],"tip":{"text":"Zapamätaj si: výber medzi možnosťami → oder."},"important":["Na výber je oder: Kaffee oder Tee.","V nepriamej otázke slovenskému „či“ zvyčajne zodpovedá ob."],"sectionAccents":{"explanation":{"blue":["oder","ob"]},"examples":[{"de":{"blue":["oder"],"yellow":["Kaffee","Tee"]},"lv":{}},{"de":{"blue":["oder"]},"lv":{}},{"de":{"blue":["oder"],"yellow":["Pizza","Salat"]},"lv":{}},{"de":{"blue":["oder"]},"lv":{}}],"comparison":[{"word":{"green":["oder"]},"meaning":{},"example":{}},{"word":{"green":["ob"]},"meaning":{},"example":{"red":["ob"]}},{"word":{"green":["und"]},"meaning":{},"example":{}},{"word":{"green":["aber"]},"meaning":{},"example":{"yellow":["aber"]}}],"tip":{"left":{"blue":["oder"],"purple":["Zapamätaj si"]}},"important":[{"blue":["oder"]},{"red":["ob"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "oder",
  "lv": "Alebo • Či",
  "level": "A1",
  "study": {
    "id": "a1-oder",
    "layout": "standardStudy",
    "translation": "Alebo • Či",
    "explanation": [
      "Hlavná myšlienka: oder sa používa, keď si vyberáme medzi dvoma alebo viacerými možnosťami.",
      "V slovenčine oder najčastejšie znamená „alebo“.",
      "Toto nie je to isté ako ob, ktoré zavádza nepriamu otázku.",
      "V rozhovoroch možno oder umiestniť aj na koniec vety: Du kommst, oder?"
    ],
    "examples": [
      {
        "de": "Kaffee oder Tee?",
        "lv": "Káva alebo čaj?"
      },
      {
        "de": "Heute oder morgen?",
        "lv": "Dnes alebo zajtra?"
      },
      {
        "de": "Willst du Pizza oder Salat?",
        "lv": "Chceš pizzu alebo šalát?"
      },
      {
        "de": "Du kommst, oder?",
        "lv": "Prídeš, však?"
      }
    ],
    "comparison": [
      {
        "word": "oder",
        "meaning": "Alebo pri výbere",
        "example": "Kaffee oder Tee?"
      },
      {
        "word": "ob",
        "meaning": "Či v nepriamej otázke",
        "example": "Ich weiß nicht, ob er kommt."
      },
      {
        "word": "und",
        "meaning": "A",
        "example": "Kaffee und Kuchen."
      },
      {
        "word": "aber",
        "meaning": "Ale",
        "example": "Ich komme, aber später."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: výber medzi možnosťami → oder."
    },
    "important": [
      "Na výber je oder: Kaffee oder Tee.",
      "V nepriamej otázke slovenskému „či“ zvyčajne zodpovedá ob."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "oder",
          "ob"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {}
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "oder"
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
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "aber"
            ]
          },
          "meaning": {},
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
            "Zapamätaj si"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "oder"
          ]
        },
        {
          "red": [
            "ob"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 29

**Audit ID:** `LRB089-0029`
**Finding Stable ID:** `g2/a1/sk|a1-oder|a1.card.a1-oder.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-oder`
**Field / path:** `a1.card.a1-oder.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Alebo • Or
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Alebo • Či","study":{"id":"a1-oder","layout":"standardStudy","translation":"Alebo • Či","explanation":["Hlavná myšlienka: oder sa používa, keď si vyberáme medzi dvoma alebo viacerými možnosťami.","V slovenčine oder najčastejšie znamená „alebo“.","Toto nie je to isté ako ob, ktoré zavádza nepriamu otázku.","V rozhovoroch možno oder umiestniť aj na koniec vety: Du kommst, oder?"],"examples":[{"de":"Kaffee oder Tee?","lv":"Káva alebo čaj?"},{"de":"Heute oder morgen?","lv":"Dnes alebo zajtra?"},{"de":"Willst du Pizza oder Salat?","lv":"Chceš pizzu alebo šalát?"},{"de":"Du kommst, oder?","lv":"Prídeš, však?"}],"comparison":[{"word":"oder","meaning":"Alebo pri výbere","example":"Kaffee oder Tee?"},{"word":"ob","meaning":"Či v nepriamej otázke","example":"Ich weiß nicht, ob er kommt."},{"word":"und","meaning":"A","example":"Kaffee und Kuchen."},{"word":"aber","meaning":"Ale","example":"Ich komme, aber später."}],"tip":{"text":"Zapamätaj si: výber medzi možnosťami → oder."},"important":["Na výber je oder: Kaffee oder Tee.","V nepriamej otázke slovenskému „či“ zvyčajne zodpovedá ob."],"sectionAccents":{"explanation":{"blue":["oder","ob"]},"examples":[{"de":{"blue":["oder"],"yellow":["Kaffee","Tee"]},"lv":{}},{"de":{"blue":["oder"]},"lv":{}},{"de":{"blue":["oder"],"yellow":["Pizza","Salat"]},"lv":{}},{"de":{"blue":["oder"]},"lv":{}}],"comparison":[{"word":{"green":["oder"]},"meaning":{},"example":{}},{"word":{"green":["ob"]},"meaning":{},"example":{"red":["ob"]}},{"word":{"green":["und"]},"meaning":{},"example":{}},{"word":{"green":["aber"]},"meaning":{},"example":{"yellow":["aber"]}}],"tip":{"left":{"blue":["oder"],"purple":["Zapamätaj si"]}},"important":[{"blue":["oder"]},{"red":["ob"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "oder",
  "lv": "Alebo • Či",
  "level": "A1",
  "study": {
    "id": "a1-oder",
    "layout": "standardStudy",
    "translation": "Alebo • Či",
    "explanation": [
      "Hlavná myšlienka: oder sa používa, keď si vyberáme medzi dvoma alebo viacerými možnosťami.",
      "V slovenčine oder najčastejšie znamená „alebo“.",
      "Toto nie je to isté ako ob, ktoré zavádza nepriamu otázku.",
      "V rozhovoroch možno oder umiestniť aj na koniec vety: Du kommst, oder?"
    ],
    "examples": [
      {
        "de": "Kaffee oder Tee?",
        "lv": "Káva alebo čaj?"
      },
      {
        "de": "Heute oder morgen?",
        "lv": "Dnes alebo zajtra?"
      },
      {
        "de": "Willst du Pizza oder Salat?",
        "lv": "Chceš pizzu alebo šalát?"
      },
      {
        "de": "Du kommst, oder?",
        "lv": "Prídeš, však?"
      }
    ],
    "comparison": [
      {
        "word": "oder",
        "meaning": "Alebo pri výbere",
        "example": "Kaffee oder Tee?"
      },
      {
        "word": "ob",
        "meaning": "Či v nepriamej otázke",
        "example": "Ich weiß nicht, ob er kommt."
      },
      {
        "word": "und",
        "meaning": "A",
        "example": "Kaffee und Kuchen."
      },
      {
        "word": "aber",
        "meaning": "Ale",
        "example": "Ich komme, aber später."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: výber medzi možnosťami → oder."
    },
    "important": [
      "Na výber je oder: Kaffee oder Tee.",
      "V nepriamej otázke slovenskému „či“ zvyčajne zodpovedá ob."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "oder",
          "ob"
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {}
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "oder"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "oder"
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
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "aber"
            ]
          },
          "meaning": {},
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
            "Zapamätaj si"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "oder"
          ]
        },
        {
          "red": [
            "ob"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 30

**Audit ID:** `LRB089-0030`
**Finding Stable ID:** `g2/a1/sk|a1-passen|a1.card.a1-passen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-passen`
**Field / path:** `a1.card.a1-passen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Sedí • Sedí
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Hodiť sa • Pristať","study":{"id":"a1-passen","layout":"standardStudy","translation":"Hodiť sa • Pristať","explanation":["Hlavná myšlienka: passen znamená hodiť sa, pristať alebo byť vhodný.","Pri oblečení passen často znamená sedieť veľkosťou.","Pri farbách alebo štýle passen znamená „pristať“.","Veľmi častá fráza je Das passt. = Hodí sa."],"examples":[{"de":"Die Jacke passt mir.","lv":"Bunda mi sedí."},{"de":"Das Kleid passt gut.","lv":"Šaty dobre sedia."},{"de":"Die Farbe passt zu dir.","lv":"Táto farba ti pristane."},{"de":"Das passt.","lv":"To sa hodí."}],"comparison":[{"word":"passen","meaning":"Hodiť sa • Pristať","example":"Die Jacke passt mir."},{"word":"stehen","meaning":"Pristať • Svedčať","example":"Rot steht dir gut."},{"word":"geeignet sein","meaning":"Byť vhodný","example":"Das ist geeignet."},{"word":"funktionieren","meaning":"Fungovať","example":"Das funktioniert."}],"tip":{"text":"Zapamätaj si: Das passt. = To sa hodí."},"important":["Passen nie je len o oblečení.","Môže to tiež znamenať, že načasovanie, plán alebo riešenie sú správne."],"sectionAccents":{"explanation":{"blue":["passen","Das passt"]},"examples":[{"de":{"blue":["passt"],"yellow":["Jacke"]},"lv":{}},{"de":{"blue":["passt"],"yellow":["Kleid"]},"lv":{}},{"de":{"blue":["passt"],"yellow":["Farbe"]},"lv":{}},{"de":{"blue":["Das passt"]},"lv":{}}],"comparison":[{"word":{"green":["passen"]},"meaning":{},"example":{}},{"word":{"green":["stehen"]},"meaning":{"purple":["Pristať"]},"example":{"green":["steht"]}},{"word":{"green":["geeignet sein"]},"meaning":{},"example":{}},{"word":{"green":["funktionieren"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["Das passt"],"purple":["To sa hodí"]}},"important":[{"blue":["passen"]},{"purple":["plán"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "passen",
  "lv": "Hodiť sa • Pristať",
  "level": "A1",
  "study": {
    "id": "a1-passen",
    "layout": "standardStudy",
    "translation": "Hodiť sa • Pristať",
    "explanation": [
      "Hlavná myšlienka: passen znamená hodiť sa, pristať alebo byť vhodný.",
      "Pri oblečení passen často znamená sedieť veľkosťou.",
      "Pri farbách alebo štýle passen znamená „pristať“.",
      "Veľmi častá fráza je Das passt. = Hodí sa."
    ],
    "examples": [
      {
        "de": "Die Jacke passt mir.",
        "lv": "Bunda mi sedí."
      },
      {
        "de": "Das Kleid passt gut.",
        "lv": "Šaty dobre sedia."
      },
      {
        "de": "Die Farbe passt zu dir.",
        "lv": "Táto farba ti pristane."
      },
      {
        "de": "Das passt.",
        "lv": "To sa hodí."
      }
    ],
    "comparison": [
      {
        "word": "passen",
        "meaning": "Hodiť sa • Pristať",
        "example": "Die Jacke passt mir."
      },
      {
        "word": "stehen",
        "meaning": "Pristať • Svedčať",
        "example": "Rot steht dir gut."
      },
      {
        "word": "geeignet sein",
        "meaning": "Byť vhodný",
        "example": "Das ist geeignet."
      },
      {
        "word": "funktionieren",
        "meaning": "Fungovať",
        "example": "Das funktioniert."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: Das passt. = To sa hodí."
    },
    "important": [
      "Passen nie je len o oblečení.",
      "Môže to tiež znamenať, že načasovanie, plán alebo riešenie sú správne."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "passen",
          "Das passt"
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
          "lv": {}
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
          "lv": {}
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Das passt"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "passen"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "stehen"
            ]
          },
          "meaning": {
            "purple": [
              "Pristať"
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
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "funktionieren"
            ]
          },
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Das passt"
          ],
          "purple": [
            "To sa hodí"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "passen"
          ]
        },
        {
          "purple": [
            "plán"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 31

**Audit ID:** `LRB089-0031`
**Finding Stable ID:** `g2/a1/sk|a1-passen|a1.card.a1-passen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-passen`
**Field / path:** `a1.card.a1-passen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Sedí • Sedí
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Hodiť sa • Pristať","study":{"id":"a1-passen","layout":"standardStudy","translation":"Hodiť sa • Pristať","explanation":["Hlavná myšlienka: passen znamená hodiť sa, pristať alebo byť vhodný.","Pri oblečení passen často znamená sedieť veľkosťou.","Pri farbách alebo štýle passen znamená „pristať“.","Veľmi častá fráza je Das passt. = Hodí sa."],"examples":[{"de":"Die Jacke passt mir.","lv":"Bunda mi sedí."},{"de":"Das Kleid passt gut.","lv":"Šaty dobre sedia."},{"de":"Die Farbe passt zu dir.","lv":"Táto farba ti pristane."},{"de":"Das passt.","lv":"To sa hodí."}],"comparison":[{"word":"passen","meaning":"Hodiť sa • Pristať","example":"Die Jacke passt mir."},{"word":"stehen","meaning":"Pristať • Svedčať","example":"Rot steht dir gut."},{"word":"geeignet sein","meaning":"Byť vhodný","example":"Das ist geeignet."},{"word":"funktionieren","meaning":"Fungovať","example":"Das funktioniert."}],"tip":{"text":"Zapamätaj si: Das passt. = To sa hodí."},"important":["Passen nie je len o oblečení.","Môže to tiež znamenať, že načasovanie, plán alebo riešenie sú správne."],"sectionAccents":{"explanation":{"blue":["passen","Das passt"]},"examples":[{"de":{"blue":["passt"],"yellow":["Jacke"]},"lv":{}},{"de":{"blue":["passt"],"yellow":["Kleid"]},"lv":{}},{"de":{"blue":["passt"],"yellow":["Farbe"]},"lv":{}},{"de":{"blue":["Das passt"]},"lv":{}}],"comparison":[{"word":{"green":["passen"]},"meaning":{},"example":{}},{"word":{"green":["stehen"]},"meaning":{"purple":["Pristať"]},"example":{"green":["steht"]}},{"word":{"green":["geeignet sein"]},"meaning":{},"example":{}},{"word":{"green":["funktionieren"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["Das passt"],"purple":["To sa hodí"]}},"important":[{"blue":["passen"]},{"purple":["plán"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "passen",
  "lv": "Hodiť sa • Pristať",
  "level": "A1",
  "study": {
    "id": "a1-passen",
    "layout": "standardStudy",
    "translation": "Hodiť sa • Pristať",
    "explanation": [
      "Hlavná myšlienka: passen znamená hodiť sa, pristať alebo byť vhodný.",
      "Pri oblečení passen často znamená sedieť veľkosťou.",
      "Pri farbách alebo štýle passen znamená „pristať“.",
      "Veľmi častá fráza je Das passt. = Hodí sa."
    ],
    "examples": [
      {
        "de": "Die Jacke passt mir.",
        "lv": "Bunda mi sedí."
      },
      {
        "de": "Das Kleid passt gut.",
        "lv": "Šaty dobre sedia."
      },
      {
        "de": "Die Farbe passt zu dir.",
        "lv": "Táto farba ti pristane."
      },
      {
        "de": "Das passt.",
        "lv": "To sa hodí."
      }
    ],
    "comparison": [
      {
        "word": "passen",
        "meaning": "Hodiť sa • Pristať",
        "example": "Die Jacke passt mir."
      },
      {
        "word": "stehen",
        "meaning": "Pristať • Svedčať",
        "example": "Rot steht dir gut."
      },
      {
        "word": "geeignet sein",
        "meaning": "Byť vhodný",
        "example": "Das ist geeignet."
      },
      {
        "word": "funktionieren",
        "meaning": "Fungovať",
        "example": "Das funktioniert."
      }
    ],
    "tip": {
      "text": "Zapamätaj si: Das passt. = To sa hodí."
    },
    "important": [
      "Passen nie je len o oblečení.",
      "Môže to tiež znamenať, že načasovanie, plán alebo riešenie sú správne."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "passen",
          "Das passt"
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
          "lv": {}
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
          "lv": {}
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
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "Das passt"
            ]
          },
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "passen"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "stehen"
            ]
          },
          "meaning": {
            "purple": [
              "Pristať"
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
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "funktionieren"
            ]
          },
          "meaning": {},
          "example": {}
        }
      ],
      "tip": {
        "left": {
          "blue": [
            "Das passt"
          ],
          "purple": [
            "To sa hodí"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "passen"
          ]
        },
        {
          "purple": [
            "plán"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 32

**Audit ID:** `LRB089-0032`
**Finding Stable ID:** `g2/a1/sk|a1-probieren|a1.card.a1-probieren.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-probieren`
**Field / path:** `a1.card.a1-probieren.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vyskúšajte • Ochutnajte
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Vyskúšať • Ochutnať","study":{"id":"a1-probieren","layout":"standardStudy","translation":"Vyskúšať • Ochutnať","explanation":["Hlavná myšlienka: probieren znamená vyskúšať alebo ochutnať.","Čo sa týka jedla a pitia, probieren často znamená ochutnať.","Pokiaľ ide o akciu, metódu alebo vec, probieren znamená vyskúšať.","To nie je to isté ako prüfen, čo znamená dôkladnejšiu kontrolu."],"examples":[{"de":"Probier mal die Suppe!","lv":"Ochutnaj polievku!"},{"de":"Ich möchte den Kuchen probieren.","lv":"Chcem ochutnať koláč."},{"de":"Wir probieren eine neue Methode.","lv":"Skúšame novú metódu."},{"de":"Kann ich die Jacke anprobieren?","lv":"Môžem si bundu vyskúšať?"}],"comparison":[{"word":"probieren","meaning":"Vyskúšať • Ochutnať","example":"Probier mal die Suppe!"},{"word":"versuchen","meaning":"Skúsiť","example":"Ich versuche es."},{"word":"prüfen","meaning":"Skontrolovať • Preveriť","example":"Ich prüfe die Rechnung."},{"word":"anprobieren","meaning":"Vyskúšať si","example":"Ich probiere die Jacke an."}],"tip":{"text":"Pamätaj: pri jedle probieren znamená „ochutnať“."},"important":["Probieren nie je hlavné slovo pre formálnu skúšku.","Kontrola dokladu alebo faktúry je zvyčajne prüfen."],"sectionAccents":{"explanation":{"blue":["probieren","prüfen"],"yellow":["metódu"]},"examples":[{"de":{"blue":["Probier"],"yellow":["Suppe"]},"lv":{"yellow":["Ochutnaj"]}},{"de":{"blue":["probieren"],"yellow":["Kuchen"]},"lv":{}},{"de":{"blue":["probieren"],"yellow":["Methode"]},"lv":{"yellow":["metódu"]}},{"de":{"green":["anprobieren"],"yellow":["Jacke"]},"lv":{}}],"comparison":[{"word":{"green":["probieren"]},"meaning":{},"example":{}},{"word":{"green":["versuchen"]},"meaning":{},"example":{"green":["versuche"]}},{"word":{"green":["prüfen"]},"meaning":{},"example":{"red":["prüfe"]}},{"word":{"green":["anprobieren"]},"meaning":{},"example":{"yellow":["probiere","an"]}}],"tip":{"left":{"blue":["probieren"],"purple":["Pamätaj"]}},"important":[{"blue":["probieren"]},{"red":["prüfen"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "probieren",
  "lv": "Vyskúšať • Ochutnať",
  "level": "A1",
  "study": {
    "id": "a1-probieren",
    "layout": "standardStudy",
    "translation": "Vyskúšať • Ochutnať",
    "explanation": [
      "Hlavná myšlienka: probieren znamená vyskúšať alebo ochutnať.",
      "Čo sa týka jedla a pitia, probieren často znamená ochutnať.",
      "Pokiaľ ide o akciu, metódu alebo vec, probieren znamená vyskúšať.",
      "To nie je to isté ako prüfen, čo znamená dôkladnejšiu kontrolu."
    ],
    "examples": [
      {
        "de": "Probier mal die Suppe!",
        "lv": "Ochutnaj polievku!"
      },
      {
        "de": "Ich möchte den Kuchen probieren.",
        "lv": "Chcem ochutnať koláč."
      },
      {
        "de": "Wir probieren eine neue Methode.",
        "lv": "Skúšame novú metódu."
      },
      {
        "de": "Kann ich die Jacke anprobieren?",
        "lv": "Môžem si bundu vyskúšať?"
      }
    ],
    "comparison": [
      {
        "word": "probieren",
        "meaning": "Vyskúšať • Ochutnať",
        "example": "Probier mal die Suppe!"
      },
      {
        "word": "versuchen",
        "meaning": "Skúsiť",
        "example": "Ich versuche es."
      },
      {
        "word": "prüfen",
        "meaning": "Skontrolovať • Preveriť",
        "example": "Ich prüfe die Rechnung."
      },
      {
        "word": "anprobieren",
        "meaning": "Vyskúšať si",
        "example": "Ich probiere die Jacke an."
      }
    ],
    "tip": {
      "text": "Pamätaj: pri jedle probieren znamená „ochutnať“."
    },
    "important": [
      "Probieren nie je hlavné slovo pre formálnu skúšku.",
      "Kontrola dokladu alebo faktúry je zvyčajne prüfen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "probieren",
          "prüfen"
        ],
        "yellow": [
          "metódu"
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
            "yellow": [
              "Ochutnaj"
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
          "lv": {}
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
            "yellow": [
              "metódu"
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
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "probieren"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "versuchen"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
            "Pamätaj"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "probieren"
          ]
        },
        {
          "red": [
            "prüfen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 33

**Audit ID:** `LRB089-0033`
**Finding Stable ID:** `g2/a1/sk|a1-probieren|a1.card.a1-probieren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-probieren`
**Field / path:** `a1.card.a1-probieren.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vyskúšajte • Ochutnajte
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Vyskúšať • Ochutnať","study":{"id":"a1-probieren","layout":"standardStudy","translation":"Vyskúšať • Ochutnať","explanation":["Hlavná myšlienka: probieren znamená vyskúšať alebo ochutnať.","Čo sa týka jedla a pitia, probieren často znamená ochutnať.","Pokiaľ ide o akciu, metódu alebo vec, probieren znamená vyskúšať.","To nie je to isté ako prüfen, čo znamená dôkladnejšiu kontrolu."],"examples":[{"de":"Probier mal die Suppe!","lv":"Ochutnaj polievku!"},{"de":"Ich möchte den Kuchen probieren.","lv":"Chcem ochutnať koláč."},{"de":"Wir probieren eine neue Methode.","lv":"Skúšame novú metódu."},{"de":"Kann ich die Jacke anprobieren?","lv":"Môžem si bundu vyskúšať?"}],"comparison":[{"word":"probieren","meaning":"Vyskúšať • Ochutnať","example":"Probier mal die Suppe!"},{"word":"versuchen","meaning":"Skúsiť","example":"Ich versuche es."},{"word":"prüfen","meaning":"Skontrolovať • Preveriť","example":"Ich prüfe die Rechnung."},{"word":"anprobieren","meaning":"Vyskúšať si","example":"Ich probiere die Jacke an."}],"tip":{"text":"Pamätaj: pri jedle probieren znamená „ochutnať“."},"important":["Probieren nie je hlavné slovo pre formálnu skúšku.","Kontrola dokladu alebo faktúry je zvyčajne prüfen."],"sectionAccents":{"explanation":{"blue":["probieren","prüfen"],"yellow":["metódu"]},"examples":[{"de":{"blue":["Probier"],"yellow":["Suppe"]},"lv":{"yellow":["Ochutnaj"]}},{"de":{"blue":["probieren"],"yellow":["Kuchen"]},"lv":{}},{"de":{"blue":["probieren"],"yellow":["Methode"]},"lv":{"yellow":["metódu"]}},{"de":{"green":["anprobieren"],"yellow":["Jacke"]},"lv":{}}],"comparison":[{"word":{"green":["probieren"]},"meaning":{},"example":{}},{"word":{"green":["versuchen"]},"meaning":{},"example":{"green":["versuche"]}},{"word":{"green":["prüfen"]},"meaning":{},"example":{"red":["prüfe"]}},{"word":{"green":["anprobieren"]},"meaning":{},"example":{"yellow":["probiere","an"]}}],"tip":{"left":{"blue":["probieren"],"purple":["Pamätaj"]}},"important":[{"blue":["probieren"]},{"red":["prüfen"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "probieren",
  "lv": "Vyskúšať • Ochutnať",
  "level": "A1",
  "study": {
    "id": "a1-probieren",
    "layout": "standardStudy",
    "translation": "Vyskúšať • Ochutnať",
    "explanation": [
      "Hlavná myšlienka: probieren znamená vyskúšať alebo ochutnať.",
      "Čo sa týka jedla a pitia, probieren často znamená ochutnať.",
      "Pokiaľ ide o akciu, metódu alebo vec, probieren znamená vyskúšať.",
      "To nie je to isté ako prüfen, čo znamená dôkladnejšiu kontrolu."
    ],
    "examples": [
      {
        "de": "Probier mal die Suppe!",
        "lv": "Ochutnaj polievku!"
      },
      {
        "de": "Ich möchte den Kuchen probieren.",
        "lv": "Chcem ochutnať koláč."
      },
      {
        "de": "Wir probieren eine neue Methode.",
        "lv": "Skúšame novú metódu."
      },
      {
        "de": "Kann ich die Jacke anprobieren?",
        "lv": "Môžem si bundu vyskúšať?"
      }
    ],
    "comparison": [
      {
        "word": "probieren",
        "meaning": "Vyskúšať • Ochutnať",
        "example": "Probier mal die Suppe!"
      },
      {
        "word": "versuchen",
        "meaning": "Skúsiť",
        "example": "Ich versuche es."
      },
      {
        "word": "prüfen",
        "meaning": "Skontrolovať • Preveriť",
        "example": "Ich prüfe die Rechnung."
      },
      {
        "word": "anprobieren",
        "meaning": "Vyskúšať si",
        "example": "Ich probiere die Jacke an."
      }
    ],
    "tip": {
      "text": "Pamätaj: pri jedle probieren znamená „ochutnať“."
    },
    "important": [
      "Probieren nie je hlavné slovo pre formálnu skúšku.",
      "Kontrola dokladu alebo faktúry je zvyčajne prüfen."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "probieren",
          "prüfen"
        ],
        "yellow": [
          "metódu"
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
            "yellow": [
              "Ochutnaj"
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
          "lv": {}
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
            "yellow": [
              "metódu"
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
          "lv": {}
        }
      ],
      "comparison": [
        {
          "word": {
            "green": [
              "probieren"
            ]
          },
          "meaning": {},
          "example": {}
        },
        {
          "word": {
            "green": [
              "versuchen"
            ]
          },
          "meaning": {},
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
          "meaning": {},
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
          "meaning": {},
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
            "Pamätaj"
          ]
        }
      },
      "important": [
        {
          "blue": [
            "probieren"
          ]
        },
        {
          "red": [
            "prüfen"
          ]
        }
      ]
    }
  }
}
```

---

## Finding 34

**Audit ID:** `LRB089-0034`
**Finding Stable ID:** `g2/a1/sk|a1-sehen|a1.card.a1-sehen.study.important[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-sehen`
**Field / path:** `a1.card.a1-sehen.study.important[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Ich sehe dich = vidím ťa • Ich schaue den Film = Pozerám film.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Vidieť","study":{"id":"a1-sehen","layout":"standardStudy","translation":"Vidieť","explanation":["Hlavná myšlienka: sehen znamená vidieť očami.","Pokiaľ ide o to, čo vnímajú oči, používa sa slovo sehen.","Zámerné pozeranie je často schauen alebo ansehen.","Veľmi častá fráza je Ich sehe dich. = Vidím ťa."],"examples":[{"de":"Ich sehe dich.","lv":"Vidím ťa."},{"de":"Siehst du das Auto?","lv":"Vidíš to auto?"},{"de":"Ich sehe nichts.","lv":"Nič nevidím."},{"de":"Wir schauen einen Film.","lv":"Pozeráme film."}],"comparison":[{"word":"sehen","meaning":"Vidieť","example":"Ich sehe dich."},{"word":"schauen","meaning":"Pozerať sa","example":"Ich schaue auf das Bild."},{"word":"ansehen","meaning":"Pozrieť si • Pozerať","example":"Ich sehe mir den Film an."},{"word":"hören","meaning":"Počuť","example":"Ich höre Musik."}],"tip":{"text":"Pamätaj: oči niečo vnímajú → sehen • vedomé pozeranie → schauen alebo ansehen."},"important":["Sehen nie je to isté ako anschauen.","Ich sehe dich = vidím ťa • Ich schaue den Film = pozerám film."],"sectionAccents":{"explanation":{"blue":["sehen","Ich sehe"],"red":["schauen","ansehen"]},"examples":[{"de":{"blue":["sehe"]},"lv":{}},{"de":{"blue":["Siehst"]},"lv":{}},{"de":{"blue":["sehe"]},"lv":{}},{"de":{"red":["schauen"]},"lv":{}}],"comparison":[{"word":{"green":["sehen"]},"meaning":{},"example":{}},{"word":{"green":["schauen"]},"meaning":{},"example":{"red":["schaue"]}},{"word":{"green":["ansehen"]},"meaning":{},"example":{"yellow":["sehe","an"]}},{"word":{"green":["hören"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["sehen"],"red":["schauen","ansehen"]}},"important":[{"blue":["sehen"],"red":["anschauen"]},{"blue":["sehe"],"red":["schaue"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sehen",
  "lv": "Vidieť",
  "level": "A1",
  "study": {
    "id": "a1-sehen",
    "layout": "standardStudy",
    "translation": "Vidieť",
    "explanation": [
      "Hlavná myšlienka: sehen znamená vidieť očami.",
      "Pokiaľ ide o to, čo vnímajú oči, používa sa slovo sehen.",
      "Zámerné pozeranie je často schauen alebo ansehen.",
      "Veľmi častá fráza je Ich sehe dich. = Vidím ťa."
    ],
    "examples": [
      {
        "de": "Ich sehe dich.",
        "lv": "Vidím ťa."
      },
      {
        "de": "Siehst du das Auto?",
        "lv": "Vidíš to auto?"
      },
      {
        "de": "Ich sehe nichts.",
        "lv": "Nič nevidím."
      },
      {
        "de": "Wir schauen einen Film.",
        "lv": "Pozeráme film."
      }
    ],
    "comparison": [
      {
        "word": "sehen",
        "meaning": "Vidieť",
        "example": "Ich sehe dich."
      },
      {
        "word": "schauen",
        "meaning": "Pozerať sa",
        "example": "Ich schaue auf das Bild."
      },
      {
        "word": "ansehen",
        "meaning": "Pozrieť si • Pozerať",
        "example": "Ich sehe mir den Film an."
      },
      {
        "word": "hören",
        "meaning": "Počuť",
        "example": "Ich höre Musik."
      }
    ],
    "tip": {
      "text": "Pamätaj: oči niečo vnímajú → sehen • vedomé pozeranie → schauen alebo ansehen."
    },
    "important": [
      "Sehen nie je to isté ako anschauen.",
      "Ich sehe dich = vidím ťa • Ich schaue den Film = pozerám film."
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
        "left": {
          "blue": [
            "sehen"
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

## Finding 35

**Audit ID:** `LRB089-0035`
**Finding Stable ID:** `g2/a1/sk|a1-seite|a1.card.a1-seite.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-seite`
**Field / path:** `a1.card.a1-seite.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Strana • Strana
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Stránka • Strana","study":{"id":"a1-seite","layout":"standardStudy","translation":"Stránka • Strana","explanation":["Hlavná myšlienka: die Seite môže znamenať stránku knihy alebo dokumentu, prípadne stranu či okraj niečoho.","V knihe, časopise alebo na webe die Seite znamená stránku (Seite 5 = strana 5).","V priestorovom význame die Seite znamená stranu (auf der linken Seite = na ľavej strane).","V prenesenom význame môže die Seite znamenať aj stranu v konflikte alebo myšlienke (auf meiner Seite = na mojej strane).","Kontext (kniha alebo čítanie; poloha alebo vzťah) ukazuje správny význam.","Množné číslo pre oba významy: die Seiten."],"examples":[{"de":"Schlagt die Seite zwanzig auf.","lv":"Otvorte si dvadsiatu stranu."},{"de":"Auf der linken Seite ist ein Park.","lv":"Na ľavej strane je park."},{"de":"Die Webseite lädt langsam.","lv":"Webová stránka sa načítava pomaly."},{"de":"Er steht auf meiner Seite.","lv":"Je na mojej strane."},{"de":"Das Buch hat 200 Seiten.","lv":"Kniha má 200 strán."},{"de":"Auf der anderen Seite der Straße.","lv":"Na druhej strane ulice."}],"tip":["Pri knihe alebo čítaní → stránka. Pri polohe, smere alebo vzťahu → strana.","Seite X v knihe vždy znamená stránku, nie jednu polovicu knihy."],"important":["die Seite = stránka ALEBO strana – rozhoduje kontext.","Množné číslo pre oba významy: die Seiten."],"sectionAccents":{"explanation":{"blue":["die Seite","Seite"]},"examples":[{"de":{"blue":["Seite"]},"lv":{}},{"de":{"green":["Seite"]},"lv":{}},{"de":{"blue":["Webseite"]},"lv":{}},{"de":{"green":["Seite"]},"lv":{}},{"de":{"blue":["Seiten"]},"lv":{}},{"de":{"green":["Seite"]},"lv":{}}],"tip":[{},{"blue":["Seite X"]}],"important":[{},{"blue":["die Seiten"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Seite",
  "de_article": "die",
  "de_plural": "die Seiten",
  "lv": "Stránka • Strana",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "Stránka • Strana",
    "explanation": [
      "Hlavná myšlienka: die Seite môže znamenať stránku knihy alebo dokumentu, prípadne stranu či okraj niečoho.",
      "V knihe, časopise alebo na webe die Seite znamená stránku (Seite 5 = strana 5).",
      "V priestorovom význame die Seite znamená stranu (auf der linken Seite = na ľavej strane).",
      "V prenesenom význame môže die Seite znamenať aj stranu v konflikte alebo myšlienke (auf meiner Seite = na mojej strane).",
      "Kontext (kniha alebo čítanie; poloha alebo vzťah) ukazuje správny význam.",
      "Množné číslo pre oba významy: die Seiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Otvorte si dvadsiatu stranu."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Na ľavej strane je park."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Webová stránka sa načítava pomaly."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "Je na mojej strane."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Kniha má 200 strán."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "Na druhej strane ulice."
      }
    ],
    "tip": [
      "Pri knihe alebo čítaní → stránka. Pri polohe, smere alebo vzťahu → strana.",
      "Seite X v knihe vždy znamená stránku, nie jednu polovicu knihy."
    ],
    "important": [
      "die Seite = stránka ALEBO strana – rozhoduje kontext.",
      "Množné číslo pre oba významy: die Seiten."
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
            "Seite X"
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

## Finding 36

**Audit ID:** `LRB089-0036`
**Finding Stable ID:** `g2/a1/sk|a1-seite|a1.card.a1-seite.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-seite`
**Field / path:** `a1.card.a1-seite.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Strana • Strana
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Stránka • Strana","study":{"id":"a1-seite","layout":"standardStudy","translation":"Stránka • Strana","explanation":["Hlavná myšlienka: die Seite môže znamenať stránku knihy alebo dokumentu, prípadne stranu či okraj niečoho.","V knihe, časopise alebo na webe die Seite znamená stránku (Seite 5 = strana 5).","V priestorovom význame die Seite znamená stranu (auf der linken Seite = na ľavej strane).","V prenesenom význame môže die Seite znamenať aj stranu v konflikte alebo myšlienke (auf meiner Seite = na mojej strane).","Kontext (kniha alebo čítanie; poloha alebo vzťah) ukazuje správny význam.","Množné číslo pre oba významy: die Seiten."],"examples":[{"de":"Schlagt die Seite zwanzig auf.","lv":"Otvorte si dvadsiatu stranu."},{"de":"Auf der linken Seite ist ein Park.","lv":"Na ľavej strane je park."},{"de":"Die Webseite lädt langsam.","lv":"Webová stránka sa načítava pomaly."},{"de":"Er steht auf meiner Seite.","lv":"Je na mojej strane."},{"de":"Das Buch hat 200 Seiten.","lv":"Kniha má 200 strán."},{"de":"Auf der anderen Seite der Straße.","lv":"Na druhej strane ulice."}],"tip":["Pri knihe alebo čítaní → stránka. Pri polohe, smere alebo vzťahu → strana.","Seite X v knihe vždy znamená stránku, nie jednu polovicu knihy."],"important":["die Seite = stránka ALEBO strana – rozhoduje kontext.","Množné číslo pre oba významy: die Seiten."],"sectionAccents":{"explanation":{"blue":["die Seite","Seite"]},"examples":[{"de":{"blue":["Seite"]},"lv":{}},{"de":{"green":["Seite"]},"lv":{}},{"de":{"blue":["Webseite"]},"lv":{}},{"de":{"green":["Seite"]},"lv":{}},{"de":{"blue":["Seiten"]},"lv":{}},{"de":{"green":["Seite"]},"lv":{}}],"tip":[{},{"blue":["Seite X"]}],"important":[{},{"blue":["die Seiten"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Seite",
  "de_article": "die",
  "de_plural": "die Seiten",
  "lv": "Stránka • Strana",
  "level": "A1",
  "study": {
    "id": "a1-seite",
    "layout": "standardStudy",
    "translation": "Stránka • Strana",
    "explanation": [
      "Hlavná myšlienka: die Seite môže znamenať stránku knihy alebo dokumentu, prípadne stranu či okraj niečoho.",
      "V knihe, časopise alebo na webe die Seite znamená stránku (Seite 5 = strana 5).",
      "V priestorovom význame die Seite znamená stranu (auf der linken Seite = na ľavej strane).",
      "V prenesenom význame môže die Seite znamenať aj stranu v konflikte alebo myšlienke (auf meiner Seite = na mojej strane).",
      "Kontext (kniha alebo čítanie; poloha alebo vzťah) ukazuje správny význam.",
      "Množné číslo pre oba významy: die Seiten."
    ],
    "examples": [
      {
        "de": "Schlagt die Seite zwanzig auf.",
        "lv": "Otvorte si dvadsiatu stranu."
      },
      {
        "de": "Auf der linken Seite ist ein Park.",
        "lv": "Na ľavej strane je park."
      },
      {
        "de": "Die Webseite lädt langsam.",
        "lv": "Webová stránka sa načítava pomaly."
      },
      {
        "de": "Er steht auf meiner Seite.",
        "lv": "Je na mojej strane."
      },
      {
        "de": "Das Buch hat 200 Seiten.",
        "lv": "Kniha má 200 strán."
      },
      {
        "de": "Auf der anderen Seite der Straße.",
        "lv": "Na druhej strane ulice."
      }
    ],
    "tip": [
      "Pri knihe alebo čítaní → stránka. Pri polohe, smere alebo vzťahu → strana.",
      "Seite X v knihe vždy znamená stránku, nie jednu polovicu knihy."
    ],
    "important": [
      "die Seite = stránka ALEBO strana – rozhoduje kontext.",
      "Množné číslo pre oba významy: die Seiten."
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
            "Seite X"
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

## Finding 37

**Audit ID:** `LRB089-0037`
**Finding Stable ID:** `g2/a1/sk|a1-sich|a1.card.a1-sich.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-sich`
**Field / path:** `a1.card.a1-sich.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Seba • Pre seba
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Sa • Si • Seba • Sebe","study":{"id":"a1-sich","layout":"standardStudy","translation":"Sa • Si • Seba • Sebe","explanation":["Hlavná myšlienka: sich ukazuje, že dej sa vzťahuje na samotného vykonávateľa.","V slovenčine sa podľa kontextu prekladá ako „sa“, „si“, „seba“ alebo „sebe“.","V niektorých nemeckých slovesách je sich povinnou súčasťou, napríklad sich waschen.","Dôležité upozornenie na úrovni A1: ich wasche mich, er wäscht sich."],"examples":[{"de":"Er wäscht sich.","lv":"Umýva sa."},{"de":"Ich setze mich.","lv":"Sadám si."},{"de":"Sie freut sich.","lv":"Teší sa."},{"de":"Ich wasche das Auto.","lv":"Umývam auto."}],"comparison":[{"word":"sich","meaning":"Sa • Si • Seba • Sebe","example":"Er wäscht sich."},{"word":"mich","meaning":"Ma • Mňa • Sa • Seba (pri ich)","example":"Ich wasche mich."},{"word":"dich","meaning":"Ťa • Teba • Sa • Seba (pri du)","example":"Du wäschst dich."},{"word":"ihn","meaning":"Ho • Jeho","example":"Ich sehe ihn."}],"tip":{"text":"Pamätaj: reflexívny tvar sa mení podľa osoby → mich, dich alebo sich."},"important":["Sich nie je samostatné podstatné meno.","Tvar sa mení podľa osoby: ich → mich, du → dich, er, sie alebo es → sich."],"sectionAccents":{"explanation":{"blue":["sich","ich wasche mich","er wäscht sich"]},"examples":[{"de":{"blue":["sich"]},"lv":{}},{"de":{"green":["mich"]},"lv":{}},{"de":{"blue":["sich"]},"lv":{}},{"de":{"red":["wasche"],"yellow":["Auto"]},"lv":{}}],"comparison":[{"word":{"green":["sich"]},"meaning":{},"example":{"blue":["sich"]}},{"word":{"green":["mich"]},"meaning":{},"example":{"green":["mich"]}},{"word":{"green":["dich"]},"meaning":{},"example":{}},{"word":{"green":["ihn"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["sich"],"purple":["Pamätaj"]}},"important":[{"blue":["sich"]},{"green":["mich","dich"],"blue":["sich"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sich",
  "lv": "Sa • Si • Seba • Sebe",
  "level": "A1",
  "study": {
    "id": "a1-sich",
    "layout": "standardStudy",
    "translation": "Sa • Si • Seba • Sebe",
    "explanation": [
      "Hlavná myšlienka: sich ukazuje, že dej sa vzťahuje na samotného vykonávateľa.",
      "V slovenčine sa podľa kontextu prekladá ako „sa“, „si“, „seba“ alebo „sebe“.",
      "V niektorých nemeckých slovesách je sich povinnou súčasťou, napríklad sich waschen.",
      "Dôležité upozornenie na úrovni A1: ich wasche mich, er wäscht sich."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "Umýva sa."
      },
      {
        "de": "Ich setze mich.",
        "lv": "Sadám si."
      },
      {
        "de": "Sie freut sich.",
        "lv": "Teší sa."
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "Umývam auto."
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "Sa • Si • Seba • Sebe",
        "example": "Er wäscht sich."
      },
      {
        "word": "mich",
        "meaning": "Ma • Mňa • Sa • Seba (pri ich)",
        "example": "Ich wasche mich."
      },
      {
        "word": "dich",
        "meaning": "Ťa • Teba • Sa • Seba (pri du)",
        "example": "Du wäschst dich."
      },
      {
        "word": "ihn",
        "meaning": "Ho • Jeho",
        "example": "Ich sehe ihn."
      }
    ],
    "tip": {
      "text": "Pamätaj: reflexívny tvar sa mení podľa osoby → mich, dich alebo sich."
    },
    "important": [
      "Sich nie je samostatné podstatné meno.",
      "Tvar sa mení podľa osoby: ich → mich, du → dich, er, sie alebo es → sich."
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
        "left": {
          "blue": [
            "sich"
          ],
          "purple": [
            "Pamätaj"
          ]
        }
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

## Finding 38

**Audit ID:** `LRB089-0038`
**Finding Stable ID:** `g2/a1/sk|a1-sich|a1.card.a1-sich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-sich`
**Field / path:** `a1.card.a1-sich.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Seba • Pre seba
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Sa • Si • Seba • Sebe","study":{"id":"a1-sich","layout":"standardStudy","translation":"Sa • Si • Seba • Sebe","explanation":["Hlavná myšlienka: sich ukazuje, že dej sa vzťahuje na samotného vykonávateľa.","V slovenčine sa podľa kontextu prekladá ako „sa“, „si“, „seba“ alebo „sebe“.","V niektorých nemeckých slovesách je sich povinnou súčasťou, napríklad sich waschen.","Dôležité upozornenie na úrovni A1: ich wasche mich, er wäscht sich."],"examples":[{"de":"Er wäscht sich.","lv":"Umýva sa."},{"de":"Ich setze mich.","lv":"Sadám si."},{"de":"Sie freut sich.","lv":"Teší sa."},{"de":"Ich wasche das Auto.","lv":"Umývam auto."}],"comparison":[{"word":"sich","meaning":"Sa • Si • Seba • Sebe","example":"Er wäscht sich."},{"word":"mich","meaning":"Ma • Mňa • Sa • Seba (pri ich)","example":"Ich wasche mich."},{"word":"dich","meaning":"Ťa • Teba • Sa • Seba (pri du)","example":"Du wäschst dich."},{"word":"ihn","meaning":"Ho • Jeho","example":"Ich sehe ihn."}],"tip":{"text":"Pamätaj: reflexívny tvar sa mení podľa osoby → mich, dich alebo sich."},"important":["Sich nie je samostatné podstatné meno.","Tvar sa mení podľa osoby: ich → mich, du → dich, er, sie alebo es → sich."],"sectionAccents":{"explanation":{"blue":["sich","ich wasche mich","er wäscht sich"]},"examples":[{"de":{"blue":["sich"]},"lv":{}},{"de":{"green":["mich"]},"lv":{}},{"de":{"blue":["sich"]},"lv":{}},{"de":{"red":["wasche"],"yellow":["Auto"]},"lv":{}}],"comparison":[{"word":{"green":["sich"]},"meaning":{},"example":{"blue":["sich"]}},{"word":{"green":["mich"]},"meaning":{},"example":{"green":["mich"]}},{"word":{"green":["dich"]},"meaning":{},"example":{}},{"word":{"green":["ihn"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["sich"],"purple":["Pamätaj"]}},"important":[{"blue":["sich"]},{"green":["mich","dich"],"blue":["sich"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sich",
  "lv": "Sa • Si • Seba • Sebe",
  "level": "A1",
  "study": {
    "id": "a1-sich",
    "layout": "standardStudy",
    "translation": "Sa • Si • Seba • Sebe",
    "explanation": [
      "Hlavná myšlienka: sich ukazuje, že dej sa vzťahuje na samotného vykonávateľa.",
      "V slovenčine sa podľa kontextu prekladá ako „sa“, „si“, „seba“ alebo „sebe“.",
      "V niektorých nemeckých slovesách je sich povinnou súčasťou, napríklad sich waschen.",
      "Dôležité upozornenie na úrovni A1: ich wasche mich, er wäscht sich."
    ],
    "examples": [
      {
        "de": "Er wäscht sich.",
        "lv": "Umýva sa."
      },
      {
        "de": "Ich setze mich.",
        "lv": "Sadám si."
      },
      {
        "de": "Sie freut sich.",
        "lv": "Teší sa."
      },
      {
        "de": "Ich wasche das Auto.",
        "lv": "Umývam auto."
      }
    ],
    "comparison": [
      {
        "word": "sich",
        "meaning": "Sa • Si • Seba • Sebe",
        "example": "Er wäscht sich."
      },
      {
        "word": "mich",
        "meaning": "Ma • Mňa • Sa • Seba (pri ich)",
        "example": "Ich wasche mich."
      },
      {
        "word": "dich",
        "meaning": "Ťa • Teba • Sa • Seba (pri du)",
        "example": "Du wäschst dich."
      },
      {
        "word": "ihn",
        "meaning": "Ho • Jeho",
        "example": "Ich sehe ihn."
      }
    ],
    "tip": {
      "text": "Pamätaj: reflexívny tvar sa mení podľa osoby → mich, dich alebo sich."
    },
    "important": [
      "Sich nie je samostatné podstatné meno.",
      "Tvar sa mení podľa osoby: ich → mich, du → dich, er, sie alebo es → sich."
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
        "left": {
          "blue": [
            "sich"
          ],
          "purple": [
            "Pamätaj"
          ]
        }
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

## Finding 39

**Audit ID:** `LRB089-0039`
**Finding Stable ID:** `g2/a1/sk|a1-sicher|a1.card.a1-sicher.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-sicher`
**Field / path:** `a1.card.a1-sicher.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Bezpečné • Určite
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Bezpečný • Určite","study":{"id":"a1-sicher","layout":"standardStudy","translation":"Bezpečný • Určite","explanation":["Hlavná myšlienka: sicher ako prídavné meno znamená bezpečný, ako príslovka znamená určite alebo pravdepodobne.","Pri mieste, situácii alebo osobe sicher znamená „bezpečný“ (ein sicherer Ort = bezpečné miesto).","Ako potvrdenie alebo uistenie vo vete sicher znamená „určite“ alebo „samozrejme“ (Das ist sicher wahr. = Určite je to pravda.).","Sicher! ako samostatná odpoveď znamená „Samozrejme!“ alebo „Iste!“"],"examples":[{"de":"Ist das Wasser sicher?","lv":"Je voda bezpečná?"},{"de":"Kommst du morgen? – Sicher!","lv":"Prídeš zajtra? – Určite!"},{"de":"Er ist sicher zu Hause.","lv":"Určite je doma."},{"de":"Das ist eine sichere Lösung.","lv":"Toto je bezpečné riešenie."},{"de":"Ich bin mir sicher.","lv":"Som si istý."},{"de":"Fahr sicher!","lv":"Jazdi bezpečne!"}],"tip":["Pri mieste alebo situácii, keď ide o bezpečnosť → bezpečný.","Ako presvedčenie alebo potvrdenie vo vete → určite alebo pravdepodobne."],"important":["sicher = bezpečný ako prídavné meno ALEBO určite či pravdepodobne ako príslovka.","sich sicher sein = byť si istý."],"sectionAccents":{"explanation":{"blue":["sicher"]},"examples":[{"de":{"blue":["sicher"]},"lv":{}},{"de":{"green":["Sicher"]},"lv":{}},{"de":{"green":["sicher"]},"lv":{}},{"de":{"blue":["sichere"]},"lv":{}},{"de":{"green":["sicher"]},"lv":{}},{"de":{"blue":["sicher"]},"lv":{}}],"tip":[{},{}],"important":[{},{"green":["sich sicher sein"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sicher",
  "lv": "Bezpečný • Určite",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "Bezpečný • Určite",
    "explanation": [
      "Hlavná myšlienka: sicher ako prídavné meno znamená bezpečný, ako príslovka znamená určite alebo pravdepodobne.",
      "Pri mieste, situácii alebo osobe sicher znamená „bezpečný“ (ein sicherer Ort = bezpečné miesto).",
      "Ako potvrdenie alebo uistenie vo vete sicher znamená „určite“ alebo „samozrejme“ (Das ist sicher wahr. = Určite je to pravda.).",
      "Sicher! ako samostatná odpoveď znamená „Samozrejme!“ alebo „Iste!“"
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "Je voda bezpečná?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "Prídeš zajtra? – Určite!"
      },
      {
        "de": "Er ist sicher zu Hause.",
        "lv": "Určite je doma."
      },
      {
        "de": "Das ist eine sichere Lösung.",
        "lv": "Toto je bezpečné riešenie."
      },
      {
        "de": "Ich bin mir sicher.",
        "lv": "Som si istý."
      },
      {
        "de": "Fahr sicher!",
        "lv": "Jazdi bezpečne!"
      }
    ],
    "tip": [
      "Pri mieste alebo situácii, keď ide o bezpečnosť → bezpečný.",
      "Ako presvedčenie alebo potvrdenie vo vete → určite alebo pravdepodobne."
    ],
    "important": [
      "sicher = bezpečný ako prídavné meno ALEBO určite či pravdepodobne ako príslovka.",
      "sich sicher sein = byť si istý."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sicher"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sichere"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sicher"
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

## Finding 40

**Audit ID:** `LRB089-0040`
**Finding Stable ID:** `g2/a1/sk|a1-sicher|a1.card.a1-sicher.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-sicher`
**Field / path:** `a1.card.a1-sicher.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Bezpečné • Určite
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Bezpečný • Určite","study":{"id":"a1-sicher","layout":"standardStudy","translation":"Bezpečný • Určite","explanation":["Hlavná myšlienka: sicher ako prídavné meno znamená bezpečný, ako príslovka znamená určite alebo pravdepodobne.","Pri mieste, situácii alebo osobe sicher znamená „bezpečný“ (ein sicherer Ort = bezpečné miesto).","Ako potvrdenie alebo uistenie vo vete sicher znamená „určite“ alebo „samozrejme“ (Das ist sicher wahr. = Určite je to pravda.).","Sicher! ako samostatná odpoveď znamená „Samozrejme!“ alebo „Iste!“"],"examples":[{"de":"Ist das Wasser sicher?","lv":"Je voda bezpečná?"},{"de":"Kommst du morgen? – Sicher!","lv":"Prídeš zajtra? – Určite!"},{"de":"Er ist sicher zu Hause.","lv":"Určite je doma."},{"de":"Das ist eine sichere Lösung.","lv":"Toto je bezpečné riešenie."},{"de":"Ich bin mir sicher.","lv":"Som si istý."},{"de":"Fahr sicher!","lv":"Jazdi bezpečne!"}],"tip":["Pri mieste alebo situácii, keď ide o bezpečnosť → bezpečný.","Ako presvedčenie alebo potvrdenie vo vete → určite alebo pravdepodobne."],"important":["sicher = bezpečný ako prídavné meno ALEBO určite či pravdepodobne ako príslovka.","sich sicher sein = byť si istý."],"sectionAccents":{"explanation":{"blue":["sicher"]},"examples":[{"de":{"blue":["sicher"]},"lv":{}},{"de":{"green":["Sicher"]},"lv":{}},{"de":{"green":["sicher"]},"lv":{}},{"de":{"blue":["sichere"]},"lv":{}},{"de":{"green":["sicher"]},"lv":{}},{"de":{"blue":["sicher"]},"lv":{}}],"tip":[{},{}],"important":[{},{"green":["sich sicher sein"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "sicher",
  "lv": "Bezpečný • Určite",
  "level": "A1",
  "study": {
    "id": "a1-sicher",
    "layout": "standardStudy",
    "translation": "Bezpečný • Určite",
    "explanation": [
      "Hlavná myšlienka: sicher ako prídavné meno znamená bezpečný, ako príslovka znamená určite alebo pravdepodobne.",
      "Pri mieste, situácii alebo osobe sicher znamená „bezpečný“ (ein sicherer Ort = bezpečné miesto).",
      "Ako potvrdenie alebo uistenie vo vete sicher znamená „určite“ alebo „samozrejme“ (Das ist sicher wahr. = Určite je to pravda.).",
      "Sicher! ako samostatná odpoveď znamená „Samozrejme!“ alebo „Iste!“"
    ],
    "examples": [
      {
        "de": "Ist das Wasser sicher?",
        "lv": "Je voda bezpečná?"
      },
      {
        "de": "Kommst du morgen? – Sicher!",
        "lv": "Prídeš zajtra? – Určite!"
      },
      {
        "de": "Er ist sicher zu Hause.",
        "lv": "Určite je doma."
      },
      {
        "de": "Das ist eine sichere Lösung.",
        "lv": "Toto je bezpečné riešenie."
      },
      {
        "de": "Ich bin mir sicher.",
        "lv": "Som si istý."
      },
      {
        "de": "Fahr sicher!",
        "lv": "Jazdi bezpečne!"
      }
    ],
    "tip": [
      "Pri mieste alebo situácii, keď ide o bezpečnosť → bezpečný.",
      "Ako presvedčenie alebo potvrdenie vo vete → určite alebo pravdepodobne."
    ],
    "important": [
      "sicher = bezpečný ako prídavné meno ALEBO určite či pravdepodobne ako príslovka.",
      "sich sicher sein = byť si istý."
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "sicher"
        ]
      },
      "examples": [
        {
          "de": {
            "blue": [
              "sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "Sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sichere"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "green": [
              "sicher"
            ]
          },
          "lv": {}
        },
        {
          "de": {
            "blue": [
              "sicher"
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

## Finding 41

**Audit ID:** `LRB089-0041`
**Finding Stable ID:** `g2/a1/sk|a1-ueber|a1.card.a1-ueber.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ueber`
**Field / path:** `a1.card.a1-ueber.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Cez • Pre
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Nad • O","study":{"id":"a1-über","layout":"standardStudy","translation":"Nad • O","explanation":["Hlavná myšlienka: über znamená „nad“ alebo „o“ podľa kontextu.","Pri polohe über často znamená „nad“.","Pri rozhovore, texte alebo téme über znamená „o“.","Pri pohybe über môže znamenať „cez“."],"examples":[{"de":"Die Lampe hängt über dem Tisch.","lv":"Lampa visí nad stolom."},{"de":"Wir sprechen über das Wetter.","lv":"Hovoríme o počasí."},{"de":"Das Kind läuft über die Straße.","lv":"Cez ulicu beží dieťa."},{"de":"Ich freue mich über das Geschenk.","lv":"Teším sa z darčeka."}],"comparison":[{"word":"über","meaning":"Nad • O • Cez","example":"Wir sprechen über das Wetter."},{"word":"auf","meaning":"Na povrchu","example":"Das Buch liegt auf dem Tisch."},{"word":"unter","meaning":"Pod","example":"Die Tasche ist unter dem Tisch."},{"word":"von","meaning":"Od • Zo zdroja","example":"Ich höre von dir."}],"tip":{"text":"Pamätajte: téma rozhovoru → über • Nad stolom → über."},"important":["über nevyjadruje iba miesto.","Sprechen über znamená „hovoriť o“."],"sectionAccents":{"explanation":{"blue":["über"],"green":["Hlavná","Hlavná"]},"examples":[{"de":{"blue":["über"],"yellow":["Tisch"]},"lv":{}},{"de":{"blue":["über"],"green":["Wetter"]},"lv":{}},{"de":{"blue":["über"],"yellow":["Straße"]},"lv":{}},{"de":{"blue":["über"],"yellow":["Geschenk"]},"lv":{}}],"comparison":[{"word":{"green":["über"]},"meaning":{},"example":{"blue":["über"]}},{"word":{"green":["auf"]},"meaning":{},"example":{"yellow":["auf"]}},{"word":{"green":["unter"]},"meaning":{},"example":{"red":["unter"]}},{"word":{"green":["von"]},"meaning":{},"example":{"green":["von"]}}],"tip":{"left":{"blue":["über"],"purple":["Pamätajte"]}},"important":[{"blue":["über"]},{"blue":["sprechen über"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "über",
  "lv": "Nad • O",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "Nad • O",
    "explanation": [
      "Hlavná myšlienka: über znamená „nad“ alebo „o“ podľa kontextu.",
      "Pri polohe über často znamená „nad“.",
      "Pri rozhovore, texte alebo téme über znamená „o“.",
      "Pri pohybe über môže znamenať „cez“."
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
        "lv": "Cez ulicu beží dieťa."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "Teším sa z darčeka."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "Nad • O • Cez",
        "example": "Wir sprechen über das Wetter."
      },
      {
        "word": "auf",
        "meaning": "Na povrchu",
        "example": "Das Buch liegt auf dem Tisch."
      },
      {
        "word": "unter",
        "meaning": "Pod",
        "example": "Die Tasche ist unter dem Tisch."
      },
      {
        "word": "von",
        "meaning": "Od • Zo zdroja",
        "example": "Ich höre von dir."
      }
    ],
    "tip": {
      "text": "Pamätajte: téma rozhovoru → über • Nad stolom → über."
    },
    "important": [
      "über nevyjadruje iba miesto.",
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

## Finding 42

**Audit ID:** `LRB089-0042`
**Finding Stable ID:** `g2/a1/sk|a1-ueber|a1.card.a1-ueber.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-ueber`
**Field / path:** `a1.card.a1-ueber.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Cez • Pre
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Nad • O","study":{"id":"a1-über","layout":"standardStudy","translation":"Nad • O","explanation":["Hlavná myšlienka: über znamená „nad“ alebo „o“ podľa kontextu.","Pri polohe über často znamená „nad“.","Pri rozhovore, texte alebo téme über znamená „o“.","Pri pohybe über môže znamenať „cez“."],"examples":[{"de":"Die Lampe hängt über dem Tisch.","lv":"Lampa visí nad stolom."},{"de":"Wir sprechen über das Wetter.","lv":"Hovoríme o počasí."},{"de":"Das Kind läuft über die Straße.","lv":"Cez ulicu beží dieťa."},{"de":"Ich freue mich über das Geschenk.","lv":"Teším sa z darčeka."}],"comparison":[{"word":"über","meaning":"Nad • O • Cez","example":"Wir sprechen über das Wetter."},{"word":"auf","meaning":"Na povrchu","example":"Das Buch liegt auf dem Tisch."},{"word":"unter","meaning":"Pod","example":"Die Tasche ist unter dem Tisch."},{"word":"von","meaning":"Od • Zo zdroja","example":"Ich höre von dir."}],"tip":{"text":"Pamätajte: téma rozhovoru → über • Nad stolom → über."},"important":["über nevyjadruje iba miesto.","Sprechen über znamená „hovoriť o“."],"sectionAccents":{"explanation":{"blue":["über"],"green":["Hlavná","Hlavná"]},"examples":[{"de":{"blue":["über"],"yellow":["Tisch"]},"lv":{}},{"de":{"blue":["über"],"green":["Wetter"]},"lv":{}},{"de":{"blue":["über"],"yellow":["Straße"]},"lv":{}},{"de":{"blue":["über"],"yellow":["Geschenk"]},"lv":{}}],"comparison":[{"word":{"green":["über"]},"meaning":{},"example":{"blue":["über"]}},{"word":{"green":["auf"]},"meaning":{},"example":{"yellow":["auf"]}},{"word":{"green":["unter"]},"meaning":{},"example":{"red":["unter"]}},{"word":{"green":["von"]},"meaning":{},"example":{"green":["von"]}}],"tip":{"left":{"blue":["über"],"purple":["Pamätajte"]}},"important":[{"blue":["über"]},{"blue":["sprechen über"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "über",
  "lv": "Nad • O",
  "level": "A1",
  "study": {
    "id": "a1-über",
    "layout": "standardStudy",
    "translation": "Nad • O",
    "explanation": [
      "Hlavná myšlienka: über znamená „nad“ alebo „o“ podľa kontextu.",
      "Pri polohe über často znamená „nad“.",
      "Pri rozhovore, texte alebo téme über znamená „o“.",
      "Pri pohybe über môže znamenať „cez“."
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
        "lv": "Cez ulicu beží dieťa."
      },
      {
        "de": "Ich freue mich über das Geschenk.",
        "lv": "Teším sa z darčeka."
      }
    ],
    "comparison": [
      {
        "word": "über",
        "meaning": "Nad • O • Cez",
        "example": "Wir sprechen über das Wetter."
      },
      {
        "word": "auf",
        "meaning": "Na povrchu",
        "example": "Das Buch liegt auf dem Tisch."
      },
      {
        "word": "unter",
        "meaning": "Pod",
        "example": "Die Tasche ist unter dem Tisch."
      },
      {
        "word": "von",
        "meaning": "Od • Zo zdroja",
        "example": "Ich höre von dir."
      }
    ],
    "tip": {
      "text": "Pamätajte: téma rozhovoru → über • Nad stolom → über."
    },
    "important": [
      "über nevyjadruje iba miesto.",
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

## Finding 43

**Audit ID:** `LRB089-0043`
**Finding Stable ID:** `g2/a1/sk|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-uhr`
**Field / path:** `a1.card.a1-uhr.study.examples[5].native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Hodiny
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Hodiny • Hodinky","study":{"id":"a1-uhr","layout":"standardStudy","translation":"Hodiny • Hodinky","explanation":["Hlavná myšlienka: Hodiny alebo hodinky. Aj údaj času: Es ist acht Uhr.","die Uhr znamená zariadenie na meranie času alebo údaj presného času.","Pri údaji presného času stojí Uhr za číslom: acht Uhr.","die Uhr znamená hodiny či hodinky alebo údaj času (Es ist acht Uhr, meine Uhr)."],"examples":[{"de":"Es ist acht Uhr.","lv":"Je osem hodín."},{"de":"Es ist acht Uhr.","lv":"Je osem hodín."},{"de":"Meine Uhr ist kaputt.","lv":"Moje hodinky sú pokazené."},{"de":"Es ist acht Uhr.","lv":"Je osem hodín."},{"de":"Es ist acht Uhr.","lv":"Je osem."},{"de":"die Uhr","lv":"Hodiny • Hodinky"}],"tip":["Hodiny alebo hodinky. Aj údaj času: Es ist acht Uhr.","Použite die Uhr, ak kontext zodpovedá tomuto významu."],"important":["Die Uhr: prístroj (meine Uhr) alebo čas (acht Uhr).","Die Uhr: pred použitím skontrolujte kontext."],"sectionAccents":{"explanation":{"blue":["Uhr"]},"examples":[{"de":{"blue":["uhr"]},"lv":{}},{"de":{"blue":["uhr"]},"lv":{}},{"de":{"blue":["uhr"]},"lv":{}},{"de":{"blue":["uhr"]},"lv":{}},{"de":{"blue":["uhr"]},"lv":{}},{"de":{"blue":["die Uhr","uhr"]},"lv":{}}],"tip":[{}],"important":[{"blue":["die Uhr"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Uhr",
  "de_article": "die",
  "de_plural": "die Uhren",
  "lv": "Hodiny • Hodinky",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "Hodiny • Hodinky",
    "explanation": [
      "Hlavná myšlienka: Hodiny alebo hodinky. Aj údaj času: Es ist acht Uhr.",
      "die Uhr znamená zariadenie na meranie času alebo údaj presného času.",
      "Pri údaji presného času stojí Uhr za číslom: acht Uhr.",
      "die Uhr znamená hodiny či hodinky alebo údaj času (Es ist acht Uhr, meine Uhr)."
    ],
    "examples": [
      {
        "de": "Es ist acht Uhr.",
        "lv": "Je osem hodín."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Je osem hodín."
      },
      {
        "de": "Meine Uhr ist kaputt.",
        "lv": "Moje hodinky sú pokazené."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Je osem hodín."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Je osem."
      },
      {
        "de": "die Uhr",
        "lv": "Hodiny • Hodinky"
      }
    ],
    "tip": [
      "Hodiny alebo hodinky. Aj údaj času: Es ist acht Uhr.",
      "Použite die Uhr, ak kontext zodpovedá tomuto významu."
    ],
    "important": [
      "Die Uhr: prístroj (meine Uhr) alebo čas (acht Uhr).",
      "Die Uhr: pred použitím skontrolujte kontext."
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

## Finding 44

**Audit ID:** `LRB089-0044`
**Finding Stable ID:** `g2/a1/sk|a1-um|a1.card.a1-um.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-um`
**Field / path:** `a1.card.a1-um.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Približne • Hodiny
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Okolo • O","study":{"id":"a1-um","layout":"standardStudy","translation":"Okolo • O","explanation":["Hlavná myšlienka: um veľmi často znamená „o“ pri presnom čase alebo „okolo“ pri mieste.","Pri presnom čase um znamená „o“: um acht = o ôsmej.","Pri mieste um znamená „okolo“.","V konštrukcii um ... zu vyjadruje účel: „aby“."],"examples":[{"de":"Ich komme um acht Uhr.","lv":"Prídem o ôsmej."},{"de":"Wir sitzen um den Tisch.","lv":"Sedíme okolo stola."},{"de":"Er geht um die Ecke.","lv":"Ide za roh."},{"de":"Ich lerne, um Deutsch zu sprechen.","lv":"Učím sa, aby som hovoril po nemecky."}],"comparison":[{"word":"um","meaning":"O • Okolo • Aby","example":"Ich komme um acht."},{"word":"am","meaning":"V určitý deň • Pri","example":"Am Montag komme ich."},{"word":"gegen","meaning":"Okolo určitého času • Proti","example":"Ich komme gegen acht."},{"word":"für","meaning":"Pre • V prospech","example":"Das ist für dich."}],"tip":{"text":"Pamätaj: um acht = o ôsmej."},"important":["um pri presnom čase väčšinou znamená „o“.","um ... zu často znamená „aby ...“."],"sectionAccents":{"explanation":{"blue":["um"]},"examples":[{"de":{"blue":["um"],"yellow":["acht Uhr"]},"lv":{}},{"de":{"blue":["um"],"yellow":["Tisch"]},"lv":{}},{"de":{"blue":["um"],"yellow":["Ecke"]},"lv":{}},{"de":{"blue":["um","zu"]},"lv":{}}],"comparison":[{"word":{"green":["um"]},"meaning":{},"example":{"blue":["um"]}},{"word":{"green":["am"]},"meaning":{},"example":{"green":["Am"]}},{"word":{"green":["gegen"]},"meaning":{},"example":{"yellow":["gegen"]}},{"word":{"green":["für"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["um acht"]}},"important":[{},{}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "um",
  "lv": "Okolo • O",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "Okolo • O",
    "explanation": [
      "Hlavná myšlienka: um veľmi často znamená „o“ pri presnom čase alebo „okolo“ pri mieste.",
      "Pri presnom čase um znamená „o“: um acht = o ôsmej.",
      "Pri mieste um znamená „okolo“.",
      "V konštrukcii um ... zu vyjadruje účel: „aby“."
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
        "meaning": "O • Okolo • Aby",
        "example": "Ich komme um acht."
      },
      {
        "word": "am",
        "meaning": "V určitý deň • Pri",
        "example": "Am Montag komme ich."
      },
      {
        "word": "gegen",
        "meaning": "Okolo určitého času • Proti",
        "example": "Ich komme gegen acht."
      },
      {
        "word": "für",
        "meaning": "Pre • V prospech",
        "example": "Das ist für dich."
      }
    ],
    "tip": {
      "text": "Pamätaj: um acht = o ôsmej."
    },
    "important": [
      "um pri presnom čase väčšinou znamená „o“.",
      "um ... zu často znamená „aby ...“."
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

## Finding 45

**Audit ID:** `LRB089-0045`
**Finding Stable ID:** `g2/a1/sk|a1-um|a1.card.a1-um.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-um`
**Field / path:** `a1.card.a1-um.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Približne • Hodiny
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Okolo • O","study":{"id":"a1-um","layout":"standardStudy","translation":"Okolo • O","explanation":["Hlavná myšlienka: um veľmi často znamená „o“ pri presnom čase alebo „okolo“ pri mieste.","Pri presnom čase um znamená „o“: um acht = o ôsmej.","Pri mieste um znamená „okolo“.","V konštrukcii um ... zu vyjadruje účel: „aby“."],"examples":[{"de":"Ich komme um acht Uhr.","lv":"Prídem o ôsmej."},{"de":"Wir sitzen um den Tisch.","lv":"Sedíme okolo stola."},{"de":"Er geht um die Ecke.","lv":"Ide za roh."},{"de":"Ich lerne, um Deutsch zu sprechen.","lv":"Učím sa, aby som hovoril po nemecky."}],"comparison":[{"word":"um","meaning":"O • Okolo • Aby","example":"Ich komme um acht."},{"word":"am","meaning":"V určitý deň • Pri","example":"Am Montag komme ich."},{"word":"gegen","meaning":"Okolo určitého času • Proti","example":"Ich komme gegen acht."},{"word":"für","meaning":"Pre • V prospech","example":"Das ist für dich."}],"tip":{"text":"Pamätaj: um acht = o ôsmej."},"important":["um pri presnom čase väčšinou znamená „o“.","um ... zu často znamená „aby ...“."],"sectionAccents":{"explanation":{"blue":["um"]},"examples":[{"de":{"blue":["um"],"yellow":["acht Uhr"]},"lv":{}},{"de":{"blue":["um"],"yellow":["Tisch"]},"lv":{}},{"de":{"blue":["um"],"yellow":["Ecke"]},"lv":{}},{"de":{"blue":["um","zu"]},"lv":{}}],"comparison":[{"word":{"green":["um"]},"meaning":{},"example":{"blue":["um"]}},{"word":{"green":["am"]},"meaning":{},"example":{"green":["Am"]}},{"word":{"green":["gegen"]},"meaning":{},"example":{"yellow":["gegen"]}},{"word":{"green":["für"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["um acht"]}},"important":[{},{}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "um",
  "lv": "Okolo • O",
  "level": "A1",
  "study": {
    "id": "a1-um",
    "layout": "standardStudy",
    "translation": "Okolo • O",
    "explanation": [
      "Hlavná myšlienka: um veľmi často znamená „o“ pri presnom čase alebo „okolo“ pri mieste.",
      "Pri presnom čase um znamená „o“: um acht = o ôsmej.",
      "Pri mieste um znamená „okolo“.",
      "V konštrukcii um ... zu vyjadruje účel: „aby“."
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
        "meaning": "O • Okolo • Aby",
        "example": "Ich komme um acht."
      },
      {
        "word": "am",
        "meaning": "V určitý deň • Pri",
        "example": "Am Montag komme ich."
      },
      {
        "word": "gegen",
        "meaning": "Okolo určitého času • Proti",
        "example": "Ich komme gegen acht."
      },
      {
        "word": "für",
        "meaning": "Pre • V prospech",
        "example": "Das ist für dich."
      }
    ],
    "tip": {
      "text": "Pamätaj: um acht = o ôsmej."
    },
    "important": [
      "um pri presnom čase väčšinou znamená „o“.",
      "um ... zu často znamená „aby ...“."
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

## Finding 46

**Audit ID:** `LRB089-0046`
**Finding Stable ID:** `g2/a1/sk|a1-verstehen|a1.card.a1-verstehen.study.explanation[2]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-verstehen`
**Field / path:** `a1.card.a1-verstehen.study.explanation[2]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Zvyčajne tu nie je potrebné „vedieť“ alebo „učiť sa“ lotyštinu • Častejšie sú können.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Rozumieť","study":{"id":"a1-verstehen","layout":"standardStudy","translation":"Rozumieť","explanation":["Hlavná myšlienka: verstehen znamená rozumieť.","Používa sa, keď rozumiete jazyku, osobe, textu alebo situácii.","V slovenčine tu zvyčajne netreba použiť „vedieť“ ani „dokázať“; tie častejšie zodpovedajú nemeckému „können“.","Veľmi častá fráza je Ich verstehe. = Rozumiem."],"examples":[{"de":"Ich verstehe dich.","lv":"Rozumiem ti."},{"de":"Verstehst du Deutsch?","lv":"Rozumieš po nemecky?"},{"de":"Ich verstehe das nicht.","lv":"Nerozumiem tomu."},{"de":"Ich kann Deutsch sprechen.","lv":"Viem hovoriť po nemecky."}],"comparison":[{"word":"verstehen","meaning":"Rozumieť","example":"Ich verstehe dich."},{"word":"können","meaning":"Môcť • Vedieť","example":"Ich kann schwimmen."},{"word":"wissen","meaning":"Vedieť fakt","example":"Ich weiß das."},{"word":"kennen","meaning":"Poznať","example":"Ich kenne ihn."}],"tip":{"text":"Pamätaj: rozumieť textu alebo osobe → verstehen • vedieť niečo urobiť → können."},"important":["verstehen nie je hlavné sloveso vo význame „vedieť niečo urobiť“.","Ich verstehe Deutsch znamená „Rozumiem po nemecky“."],"sectionAccents":{"explanation":{"blue":["verstehen","Ich verstehe"],"red":["können"]},"examples":[{"de":{"blue":["verstehe"]},"lv":{}},{"de":{"blue":["Verstehst"]},"lv":{}},{"de":{"blue":["verstehe"]},"lv":{}},{"de":{"red":["kann"]},"lv":{}}],"comparison":[{"word":{"green":["verstehen"]},"meaning":{},"example":{}},{"word":{"green":["können"]},"meaning":{},"example":{}},{"word":{"green":["wissen"]},"meaning":{},"example":{}},{"word":{"green":["kennen"]},"meaning":{},"example":{"yellow":["kenne"]}}],"tip":{"left":{"blue":["verstehen"],"red":["können"]}},"important":[{"blue":["verstehen"]},{"blue":["verstehe"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "verstehen",
  "lv": "Rozumieť",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "Rozumieť",
    "explanation": [
      "Hlavná myšlienka: verstehen znamená rozumieť.",
      "Používa sa, keď rozumiete jazyku, osobe, textu alebo situácii.",
      "V slovenčine tu zvyčajne netreba použiť „vedieť“ ani „dokázať“; tie častejšie zodpovedajú nemeckému „können“.",
      "Veľmi častá fráza je Ich verstehe. = Rozumiem."
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
        "lv": "Nerozumiem tomu."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Viem hovoriť po nemecky."
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "Rozumieť",
        "example": "Ich verstehe dich."
      },
      {
        "word": "können",
        "meaning": "Môcť • Vedieť",
        "example": "Ich kann schwimmen."
      },
      {
        "word": "wissen",
        "meaning": "Vedieť fakt",
        "example": "Ich weiß das."
      },
      {
        "word": "kennen",
        "meaning": "Poznať",
        "example": "Ich kenne ihn."
      }
    ],
    "tip": {
      "text": "Pamätaj: rozumieť textu alebo osobe → verstehen • vedieť niečo urobiť → können."
    },
    "important": [
      "verstehen nie je hlavné sloveso vo význame „vedieť niečo urobiť“.",
      "Ich verstehe Deutsch znamená „Rozumiem po nemecky“."
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

## Finding 47

**Audit ID:** `LRB089-0047`
**Finding Stable ID:** `g2/a1/sk|a1-vor|a1.card.a1-vor.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-vor`
**Field / path:** `a1.card.a1-vor.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Predtým • Predtým
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Pred (čas) • Pred (miesto)","study":{"id":"a1-vor","layout":"standardStudy","translation":"Pred (čas) • Pred (miesto)","explanation":["Hlavná myšlienka: vor znamená „pred“ v časovom aj miestnom význame.","Pri čase vor znamená „pred“.","Pri mieste vor znamená „pred“.","Pri určovaní času vor znamená „pred“, napríklad fünf vor acht."],"examples":[{"de":"Vor dem Essen wasche ich die Hände.","lv":"Pred jedlom si umývam ruky."},{"de":"Das Auto steht vor dem Haus.","lv":"Auto je zaparkované pred domom."},{"de":"Es ist fünf vor acht.","lv":"Je päť minút pred ôsmou."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Po jedle ideme na prechádzku."}],"comparison":[{"word":"vor","meaning":"Pred (čas) • Pred (miesto)","example":"Vor dem Essen..."},{"word":"nach","meaning":"Po • Do","example":"Nach dem Essen..."},{"word":"neben","meaning":"Vedľa","example":"Neben dem Haus."},{"word":"hinter","meaning":"Za","example":"Hinter dem Haus."}],"tip":{"text":"Pamätaj: pred časovým údajom aj pred miestom → vor."},"important":["Vor môže znamenať čas aj miesto.","Vor dem Essen = pred jedlom • Vor dem Haus = pred domom."],"sectionAccents":{"explanation":{"blue":["vor","fünf vor acht"]},"examples":[{"de":{"blue":["Vor"],"yellow":["Essen"]},"lv":{}},{"de":{"blue":["vor"],"yellow":["Haus"]},"lv":{}},{"de":{"blue":["vor"]},"lv":{}},{"de":{"red":["Nach"],"yellow":["Essen"]},"lv":{}}],"comparison":[{"word":{"green":["vor"]},"meaning":{},"example":{}},{"word":{"green":["nach"]},"meaning":{},"example":{"red":["Nach"]}},{"word":{"green":["neben"]},"meaning":{},"example":{"green":["Neben"]}},{"word":{"green":["hinter"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["vor"]}},"important":[{"blue":["vor"]},{"blue":["vor dem Essen","vor dem Haus"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vor",
  "lv": "Pred (čas) • Pred (miesto)",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Pred (čas) • Pred (miesto)",
    "explanation": [
      "Hlavná myšlienka: vor znamená „pred“ v časovom aj miestnom význame.",
      "Pri čase vor znamená „pred“.",
      "Pri mieste vor znamená „pred“.",
      "Pri určovaní času vor znamená „pred“, napríklad fünf vor acht."
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
        "lv": "Je päť minút pred ôsmou."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Po jedle ideme na prechádzku."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Pred (čas) • Pred (miesto)",
        "example": "Vor dem Essen..."
      },
      {
        "word": "nach",
        "meaning": "Po • Do",
        "example": "Nach dem Essen..."
      },
      {
        "word": "neben",
        "meaning": "Vedľa",
        "example": "Neben dem Haus."
      },
      {
        "word": "hinter",
        "meaning": "Za",
        "example": "Hinter dem Haus."
      }
    ],
    "tip": {
      "text": "Pamätaj: pred časovým údajom aj pred miestom → vor."
    },
    "important": [
      "Vor môže znamenať čas aj miesto.",
      "Vor dem Essen = pred jedlom • Vor dem Haus = pred domom."
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

## Finding 48

**Audit ID:** `LRB089-0048`
**Finding Stable ID:** `g2/a1/sk|a1-vor|a1.card.a1-vor.study.important[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-vor`
**Field / path:** `a1.card.a1-vor.study.important[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Vor dem Essen = pred jedlom • Vor dem Haus = pred domovom.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Pred (čas) • Pred (miesto)","study":{"id":"a1-vor","layout":"standardStudy","translation":"Pred (čas) • Pred (miesto)","explanation":["Hlavná myšlienka: vor znamená „pred“ v časovom aj miestnom význame.","Pri čase vor znamená „pred“.","Pri mieste vor znamená „pred“.","Pri určovaní času vor znamená „pred“, napríklad fünf vor acht."],"examples":[{"de":"Vor dem Essen wasche ich die Hände.","lv":"Pred jedlom si umývam ruky."},{"de":"Das Auto steht vor dem Haus.","lv":"Auto je zaparkované pred domom."},{"de":"Es ist fünf vor acht.","lv":"Je päť minút pred ôsmou."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Po jedle ideme na prechádzku."}],"comparison":[{"word":"vor","meaning":"Pred (čas) • Pred (miesto)","example":"Vor dem Essen..."},{"word":"nach","meaning":"Po • Do","example":"Nach dem Essen..."},{"word":"neben","meaning":"Vedľa","example":"Neben dem Haus."},{"word":"hinter","meaning":"Za","example":"Hinter dem Haus."}],"tip":{"text":"Pamätaj: pred časovým údajom aj pred miestom → vor."},"important":["Vor môže znamenať čas aj miesto.","Vor dem Essen = pred jedlom • Vor dem Haus = pred domom."],"sectionAccents":{"explanation":{"blue":["vor","fünf vor acht"]},"examples":[{"de":{"blue":["Vor"],"yellow":["Essen"]},"lv":{}},{"de":{"blue":["vor"],"yellow":["Haus"]},"lv":{}},{"de":{"blue":["vor"]},"lv":{}},{"de":{"red":["Nach"],"yellow":["Essen"]},"lv":{}}],"comparison":[{"word":{"green":["vor"]},"meaning":{},"example":{}},{"word":{"green":["nach"]},"meaning":{},"example":{"red":["Nach"]}},{"word":{"green":["neben"]},"meaning":{},"example":{"green":["Neben"]}},{"word":{"green":["hinter"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["vor"]}},"important":[{"blue":["vor"]},{"blue":["vor dem Essen","vor dem Haus"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vor",
  "lv": "Pred (čas) • Pred (miesto)",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Pred (čas) • Pred (miesto)",
    "explanation": [
      "Hlavná myšlienka: vor znamená „pred“ v časovom aj miestnom význame.",
      "Pri čase vor znamená „pred“.",
      "Pri mieste vor znamená „pred“.",
      "Pri určovaní času vor znamená „pred“, napríklad fünf vor acht."
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
        "lv": "Je päť minút pred ôsmou."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Po jedle ideme na prechádzku."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Pred (čas) • Pred (miesto)",
        "example": "Vor dem Essen..."
      },
      {
        "word": "nach",
        "meaning": "Po • Do",
        "example": "Nach dem Essen..."
      },
      {
        "word": "neben",
        "meaning": "Vedľa",
        "example": "Neben dem Haus."
      },
      {
        "word": "hinter",
        "meaning": "Za",
        "example": "Hinter dem Haus."
      }
    ],
    "tip": {
      "text": "Pamätaj: pred časovým údajom aj pred miestom → vor."
    },
    "important": [
      "Vor môže znamenať čas aj miesto.",
      "Vor dem Essen = pred jedlom • Vor dem Haus = pred domom."
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

## Finding 49

**Audit ID:** `LRB089-0049`
**Finding Stable ID:** `g2/a1/sk|a1-vor|a1.card.a1-vor.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-vor`
**Field / path:** `a1.card.a1-vor.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Predtým • Predtým
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Pred (čas) • Pred (miesto)","study":{"id":"a1-vor","layout":"standardStudy","translation":"Pred (čas) • Pred (miesto)","explanation":["Hlavná myšlienka: vor znamená „pred“ v časovom aj miestnom význame.","Pri čase vor znamená „pred“.","Pri mieste vor znamená „pred“.","Pri určovaní času vor znamená „pred“, napríklad fünf vor acht."],"examples":[{"de":"Vor dem Essen wasche ich die Hände.","lv":"Pred jedlom si umývam ruky."},{"de":"Das Auto steht vor dem Haus.","lv":"Auto je zaparkované pred domom."},{"de":"Es ist fünf vor acht.","lv":"Je päť minút pred ôsmou."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"Po jedle ideme na prechádzku."}],"comparison":[{"word":"vor","meaning":"Pred (čas) • Pred (miesto)","example":"Vor dem Essen..."},{"word":"nach","meaning":"Po • Do","example":"Nach dem Essen..."},{"word":"neben","meaning":"Vedľa","example":"Neben dem Haus."},{"word":"hinter","meaning":"Za","example":"Hinter dem Haus."}],"tip":{"text":"Pamätaj: pred časovým údajom aj pred miestom → vor."},"important":["Vor môže znamenať čas aj miesto.","Vor dem Essen = pred jedlom • Vor dem Haus = pred domom."],"sectionAccents":{"explanation":{"blue":["vor","fünf vor acht"]},"examples":[{"de":{"blue":["Vor"],"yellow":["Essen"]},"lv":{}},{"de":{"blue":["vor"],"yellow":["Haus"]},"lv":{}},{"de":{"blue":["vor"]},"lv":{}},{"de":{"red":["Nach"],"yellow":["Essen"]},"lv":{}}],"comparison":[{"word":{"green":["vor"]},"meaning":{},"example":{}},{"word":{"green":["nach"]},"meaning":{},"example":{"red":["Nach"]}},{"word":{"green":["neben"]},"meaning":{},"example":{"green":["Neben"]}},{"word":{"green":["hinter"]},"meaning":{},"example":{}}],"tip":{"left":{"blue":["vor"]}},"important":[{"blue":["vor"]},{"blue":["vor dem Essen","vor dem Haus"]}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vor",
  "lv": "Pred (čas) • Pred (miesto)",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Pred (čas) • Pred (miesto)",
    "explanation": [
      "Hlavná myšlienka: vor znamená „pred“ v časovom aj miestnom význame.",
      "Pri čase vor znamená „pred“.",
      "Pri mieste vor znamená „pred“.",
      "Pri určovaní času vor znamená „pred“, napríklad fünf vor acht."
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
        "lv": "Je päť minút pred ôsmou."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "Po jedle ideme na prechádzku."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Pred (čas) • Pred (miesto)",
        "example": "Vor dem Essen..."
      },
      {
        "word": "nach",
        "meaning": "Po • Do",
        "example": "Nach dem Essen..."
      },
      {
        "word": "neben",
        "meaning": "Vedľa",
        "example": "Neben dem Haus."
      },
      {
        "word": "hinter",
        "meaning": "Za",
        "example": "Hinter dem Haus."
      }
    ],
    "tip": {
      "text": "Pamätaj: pred časovým údajom aj pred miestom → vor."
    },
    "important": [
      "Vor môže znamenať čas aj miesto.",
      "Vor dem Essen = pred jedlom • Vor dem Haus = pred domom."
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

## Finding 50

**Audit ID:** `LRB089-0050`
**Finding Stable ID:** `g2/a1/sk|a1-was|a1.card.a1-was.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** sk
**Card:** `a1-was`
**Field / path:** `a1.card.a1-was.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Kto • Čo
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Čo","study":{"id":"a1-was","layout":"standardStudy","translation":"Čo","explanation":["Hlavná myšlienka: was je opytovacie zámeno pre veci, deje a udalosti; po slovensky znamená „čo“.","was sa pýta na veci, udalosti a fakty, nie na osoby.","V nemčine sa was podľa pádu nemení; vždy má tvar was.","Keď je was podmetom, po slovensky zostáva „čo“ (Was ist passiert? = Čo sa stalo?).","Keď je was predmetom slovesa, po slovensky tiež zostáva „čo“ (Was machst du? = Čo robíš?).","Na osoby sa pýtame pomocou wer („kto“), nie was."],"examples":[{"de":"Was ist das?","lv":"Čo je to?"},{"de":"Was ist passiert?","lv":"Čo sa stalo?"},{"de":"Was machst du gerade?","lv":"Čo práve robíš?"},{"de":"Was möchtest du trinken?","lv":"Čo chceš piť?"},{"de":"Was bedeutet dieses Wort?","lv":"Čo znamená toto slovo?"},{"de":"Was ist dein Lieblingsessen?","lv":"Aké je tvoje obľúbené jedlo?"},{"de":"Was hast du gesagt?","lv":"Čo si povedal?"}],"tip":["was sa v nemčine nemení; v slovenčine mu zodpovedá „čo“.","Rýchly trik: na osobu použi wer; na vec, dej alebo udalosť použi was."],"important":["was sa pýta na veci, udalosti a fakty – nikdy nie na osoby.","Na osoby sa pýtame pomocou wer („kto“), nie was.","was für (ein alebo eine) znamená „aký, aká alebo aké“ či „čo za“ a pýta sa na druh alebo vlastnosť (Was für ein Film ist das? = Aký je to film?).","Nesprávne: Wer ist passiert? → Správne: Was ist passiert?"],"sectionAccents":{"explanation":{"blue":["was"],"purple":["čo"]},"examples":[{"de":{"blue":["Was"]},"lv":{}},{"de":{"blue":["Was"]},"lv":{}},{"de":{"blue":["Was"]},"lv":{}},{"de":{"blue":["Was"]},"lv":{}},{"de":{"blue":["Was"]},"lv":{}},{"de":{"blue":["Was"]},"lv":{}},{"de":{"blue":["Was"]},"lv":{}}],"tip":[{},{"purple":["was"]}],"important":[{},{"blue":["wer"]},{"blue":["was für"]},{}]}}}
**Note:** Kartītes pilnais gala saturs remontēts saskaņā ar OWNER copy/paste remontiem; aizvietojums saskaņots ar LV→DE avotu.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "was",
  "lv": "Čo",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "Čo",
    "explanation": [
      "Hlavná myšlienka: was je opytovacie zámeno pre veci, deje a udalosti; po slovensky znamená „čo“.",
      "was sa pýta na veci, udalosti a fakty, nie na osoby.",
      "V nemčine sa was podľa pádu nemení; vždy má tvar was.",
      "Keď je was podmetom, po slovensky zostáva „čo“ (Was ist passiert? = Čo sa stalo?).",
      "Keď je was predmetom slovesa, po slovensky tiež zostáva „čo“ (Was machst du? = Čo robíš?).",
      "Na osoby sa pýtame pomocou wer („kto“), nie was."
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
    "tip": [
      "was sa v nemčine nemení; v slovenčine mu zodpovedá „čo“.",
      "Rýchly trik: na osobu použi wer; na vec, dej alebo udalosť použi was."
    ],
    "important": [
      "was sa pýta na veci, udalosti a fakty – nikdy nie na osoby.",
      "Na osoby sa pýtame pomocou wer („kto“), nie was.",
      "was für (ein alebo eine) znamená „aký, aká alebo aké“ či „čo za“ a pýta sa na druh alebo vlastnosť (Was für ein Film ist das? = Aký je to film?).",
      "Nesprávne: Wer ist passiert? → Správne: Was ist passiert?"
    ],
    "sectionAccents": {
      "explanation": {
        "blue": [
          "was"
        ],
        "purple": [
          "čo"
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
            "was"
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

