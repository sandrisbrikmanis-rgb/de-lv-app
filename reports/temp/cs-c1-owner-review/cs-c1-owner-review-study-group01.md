# CS–DE C1 OWNER REVIEW — STUDY GROUP 01

- Study cards: 10
- Mode: READ-ONLY export for OWNER linguistic review
- DE: READ-ONLY context only

## 01 — c1-einfamilienhaus

Production index: 57
Card ID: c1-einfamilienhaus
DE: Einfamilienhaus
CURRENT CS (front): Rodinný dům
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-einfamilienhaus",
  "layout": "standardStudy",
  "translation": "Rodinný dům",
  "explanation": "Hlavní myšlenka: das Einfamilienhaus je dům pro jednu rodinu. To obvykle znamená rodinný dům, nikoli bytový dům.",
  "examples": [
    {
      "de": "Sie wohnen in einem Einfamilienhaus.",
      "lv": "Žijí v rodinném domě."
    },
    {
      "de": "Das Einfamilienhaus hat einen Garten.",
      "lv": "K rodinnému domu náleží zahrada."
    },
    {
      "de": "Nebenan steht ein Mehrfamilienhaus.",
      "lv": "Vedle stojí bytový dům."
    }
  ]
}
```

### Audit findings

Audit findings: NONE

### Cross-dataset finding

NONE

---

## 02 — c1-offentlichkeit

Production index: 117
Card ID: c1-offentlichkeit
DE: Öffentlichkeit
CURRENT CS (front): Společnost • Otevřenost
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-offentlichkeit",
  "layout": "standardStudy",
  "translation": "Společnost • Otevřenost",
  "explanation": "Hlavní myšlenka: die Öffentlichkeit znamená společnost jako veřejný prostor nebo lidi jako celek. Ve frázi an die Öffentlichkeit kommen znamená vyjít na veřejnost.",
  "examples": [
    {
      "de": "Die Öffentlichkeit reagierte kritisch.",
      "lv": "Veřejnost reagovala kriticky."
    },
    {
      "de": "Der Fall kam an die Öffentlichkeit.",
      "lv": "Případ vyšel najevo."
    },
    {
      "de": "Die Öffentlichkeit hat ein Recht auf Information.",
      "lv": "Veřejnost má právo na informace."
    }
  ]
}
```

### Audit findings

Finding 1
- Severity: MEDIUM
- Field: study.translation
- CURRENT: Společnost • Otevřenost
- Audit proposed replacement: Veřejnost • Veřejnost
- Reason: Öffentlichkeit znamená především veřejnost nebo veřejný prostor; „společnost“ a „otevřenost“ nejsou vhodné hlavní překlady.
- Rule/category: SEMANTICS

Finding 2
- Severity: MEDIUM
- Field: study.examples[1].lv
- CURRENT: 
- Audit proposed replacement: Případ se dostal na veřejnost.
- Reason: An die Öffentlichkeit kommen znamená stát se veřejně známým, ne pouze vyjít najevo.
- Rule/category: SEMANTICS

### Cross-dataset finding

NONE

---

## 03 — c1-partei

Production index: 119
Card ID: c1-partei
DE: Partei
CURRENT CS (front): Večírek • Večírek
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-partei",
  "layout": "standardStudy",
  "translation": "Večírek • Večírek",
  "explanation": "Hlavní myšlenka: die Partei je obvykle politická strana. V právnickém nebo konfliktním jazyce to může znamenat i večírek.",
  "examples": [
    {
      "de": "Diese Partei gewann die Wahl.",
      "lv": "Tato strana vyhrála volby."
    },
    {
      "de": "Er ist seit Jahren Mitglied einer Partei.",
      "lv": "Je už léta členem strany."
    },
    {
      "de": "Beide Parteien müssen den Vertrag unterschreiben.",
      "lv": "Obě strany musí smlouvu podepsat."
    }
  ]
}
```

### Audit findings

Finding 1
- Severity: HIGH
- Field: study.translation
- CURRENT: Večírek • Večírek
- Audit proposed replacement: Strana • Strana
- Reason: Partei znamená politická strana nebo strana ve sporu; „večírek“ je význam německého Partei nicht správný.
- Rule/category: TRANSLATION

Finding 2
- Severity: HIGH
- Field: study.explanation
- CURRENT: Hlavní myšlenka: die Partei je obvykle politická strana. V právnickém nebo konfliktním jazyce to může znamenat i večírek.
- Audit proposed replacement: Hlavní myšlenka: die Partei je obvykle politická strana. V právnickém nebo konfliktním jazyce to může znamenat i stranu.
- Reason: V právním nebo konfliktním kontextu Partei znamená stranu, nikoli večírek.
- Rule/category: SEMANTICS

### Cross-dataset finding

NONE

---

## 04 — c1-prozess

Production index: 126
Card ID: c1-prozess
DE: Prozess
CURRENT CS (front): Proces • Žaloba
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-prozess",
  "layout": "standardStudy",
  "translation": "Proces • Žaloba",
  "explanation": "Hlavní myšlenka: der Prozess je proces nebo postup. U soudu der Prozess znamená soud.",
  "examples": [
    {
      "de": "Der Prozess dauert mehrere Monate.",
      "lv": "Proces trvá několik měsíců."
    },
    {
      "de": "Der Prozess vor Gericht beginnt morgen.",
      "lv": "Soud začíná zítra."
    },
    {
      "de": "Wir verbessern den ganzen Prozess.",
      "lv": "Zlepšujeme celý proces."
    }
  ]
}
```

### Audit findings

Finding 1
- Severity: HIGH
- Field: study.translation
- CURRENT: Proces • Žaloba
- Audit proposed replacement: Proces • Soudní proces
- Reason: Prozess může znamenat proces nebo soudní řízení; „žaloba“ je německy Klage.
- Rule/category: SEMANTICS

Finding 2
- Severity: HIGH
- Field: study.explanation
- CURRENT: Hlavní myšlenka: der Prozess je proces nebo postup. U soudu der Prozess znamená soud.
- Audit proposed replacement: Hlavní myšlenka: der Prozess je proces nebo postup. U soudu der Prozess znamená soudní proces.
- Reason: Proces u soudu neznamená samotný soud, ale soudní řízení nebo soudní proces.
- Rule/category: SEMANTICS

Finding 3
- Severity: MEDIUM
- Field: study.examples[1].lv
- CURRENT: 
- Audit proposed replacement: Soudní proces začíná zítra.
- Reason: Český text posouvá význam od soudního procesu k instituci nebo jednání soudu.
- Rule/category: TRANSLATION

### Cross-dataset finding

NONE

---

## 05 — c1-zusammenfassen

Production index: 187
Card ID: c1-zusammenfassen
DE: zusammenfassen
CURRENT CS (front): Shrnout • Shrnout
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-zusammenfassen",
  "layout": "standardStudy",
  "translation": "Shrnout • Shrnout",
  "explanation": [
    "Hlavní myšlenka: zusammenfassen je sloveso – shromáždit nebo uspořádat informace do jednoho stručného prohlášení.",
    "Zusammenfassen se používá, když se z několika faktů, textů nebo myšlenek skládá krátký přehled.",
    "Nezaměňovat s die Zusammenfassung - ten s velkým písmenem a členem die je podstatné jméno označující samotné shrnutí (výsledek, hotový text).",
    "Zusammenfassen = proces/akce (shrnout, shrnout) • Die Zusammenfassung = výsledek (souhrn jako podstatné jméno).",
    "Stejně jako mnoho německých sloves se zusammenfassen může stát velkým jménem a členem: zusammenfassen → die Zusammenfassen (substantivizace)."
  ],
  "examples": [
    {
      "de": "Können Sie den Text zusammenfassen?",
      "lv": "Můžete tento text shrnout?"
    },
    {
      "de": "Ich fasse die wichtigsten Punkte zusammen.",
      "lv": "Shrnu nejdůležitější body."
    },
    {
      "de": "Er hat den Bericht kurz zusammengefasst.",
      "lv": "Stručně shrnul recenzi."
    },
    {
      "de": "Zusammenfassend kann man sagen, dass...",
      "lv": "Shrnuto, dá se říci, že..."
    },
    {
      "de": "Ich schreibe eine Zusammenfassung des Buches.",
      "lv": "Píšu shrnutí knihy."
    },
    {
      "de": "Die Zusammenfassung ist zu lang.",
      "lv": "Shrnutí je příliš dlouhé."
    }
  ],
  "tip": [
    "Zusammenfassen (sloveso) = proces - shrnout/shrnout.",
    "Die Zusammenfassung (podstatné jméno, velká písmena a člen die) = výsledek – samotné shrnutí."
  ],
  "important": [
    "Zusammenfassen = shrnout/shrnout (sloveso).",
    "Die Zusammenfassung = souhrn (podstatné jméno, substantivizované ze zusammenfassen).",
    "Nesprávně: die zusammenfassen → Správně: die Zusammenfassen (podstatné jméno vždy s velkým písmenem)."
  ],
  "sectionAccents": {
    "explanation": {
      "blue": [
        "zusammenfassen"
      ],
      "purple": [
        "Hlavní",
        "Hlavní"
      ],
      "green": [
        "die Zusammenfassung"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "zusammenfassen"
          ]
        },
        "lv": {
          "purple": [
            "Můžete"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "fasse",
            "zusammen"
          ]
        },
        "lv": {
          "purple": [
            "Shrnu"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "zusammengefasst"
          ]
        },
        "lv": {
          "purple": [
            "Stručně"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Zusammenfassend"
          ]
        },
        "lv": {
          "purple": [
            "Shrnuto"
          ]
        }
      },
      {
        "de": {
          "green": [
            "Zusammenfassung"
          ]
        },
        "lv": {
          "purple": [
            "Píšu"
          ]
        }
      },
      {
        "de": {
          "green": [
            "Zusammenfassung"
          ]
        },
        "lv": {
          "purple": [
            "Shrnutí"
          ]
        }
      }
    ],
    "tip": [
      {
        "blue": [
          "zusammenfassen"
        ]
      },
      {
        "green": [
          "die Zusammenfassung"
        ]
      }
    ],
    "important": [
      {
        "blue": [
          "zusammenfassen"
        ]
      },
      {
        "green": [
          "die Zusammenfassung"
        ]
      },
      {
        "green": [
          "die zusammenfassen"
        ],
        "red": [
          "die zusammenfassen"
        ]
      }
    ]
  }
}
```

### Audit findings

Finding 1
- Severity: LOW
- Field: study.translation
- CURRENT: Shrnout • Shrnout
- Audit proposed replacement: Shrnout
- Reason: Oba české významy jsou totožné; hlavní překlad má být krátký a nemá opakovat stejný výraz.
- Rule/category: TITLE_FORMAT

Finding 2
- Severity: HIGH
- Field: study.explanation
- CURRENT: ["Hlavní myšlenka: zusammenfassen je sloveso – shromáždit nebo uspořádat informace do jednoho stručného prohlášení.","Zusammenfassen se používá, když se z několika faktů, textů nebo myšlenek skládá krátký přehled.","Nezaměňovat s die Zusammenfassung - ten s velkým písmenem a členem die je podstatné jméno označující samotné shrnutí (výsledek, hotový text).","Zusammenfassen = proces/akce (shrnout, shrnout) • Die Zusammenfassung = výsledek (souhrn jako podstatné jméno).","Stejně jako mnoho německých sloves se zusammenfassen může stát velkým jménem a členem: zusammenfassen → die Zusammenfassen (substantivizace)."]
- AUDIT_CURRENT != PRODUCTION_CURRENT
- Audit CURRENT: Nezaměňovat s die Zusammenfassung - ten s velkým písmenem a členem die je podstatné jméno označující samotné shrnutí (výsledek, hotový text). ... zusammenfassen → die Zusammenfassen (substantivizace).
- Audit proposed replacement: Nezaměňovat s die Zusammenfassung – je to podstatné jméno označující samotné shrnutí (výsledek nebo hotový text). Zusammenfassen je sloveso; jeho podstatné jméno je die Zusammenfassung.
- Reason: „Die Zusammenfassen“ neexistuje; substantivizovaný název výsledku je die Zusammenfassung.
- Rule/category: SEMANTICS

Finding 3
- Severity: MEDIUM
- Field: study.examples[2].lv
- CURRENT: 
- Audit proposed replacement: Stručně shrnul zprávu.
- Reason: Bericht znamená zpráva nebo referát, ne recenze.
- Rule/category: TRANSLATION

Finding 4
- Severity: HIGH
- Field: study.important.text
- CURRENT: 
- Audit proposed replacement: Nesprávně: die zusammenfassen → Správně: die Zusammenfassung.
- Reason: Uváděný správný tvar je chybný; die Zusammenfassen není běžné německé podstatné jméno.
- Rule/category: SEMANTICS

### Cross-dataset finding

NONE

---

## 06 — c1-wahl

Production index: 194
Card ID: c1-wahl
DE: Wahl
CURRENT CS (front): Volba • Volba
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-wahl",
  "layout": "standardStudy",
  "translation": "Volba • Volba",
  "explanation": "Die Wahl může znamenat volbu mezi možnostmi. V kontextu politiky Wahl znamená volby. Může to znamenat i samotné hlasování. Fráze eine Wahl treffen znamená učinit volbu. zur Wahl gehen znamená jít k volbám. Kontext politiky nebo osobního rozhodnutí ukazuje správný význam.",
  "examples": [
    {
      "de": "Du hast die Wahl.",
      "lv": "Máš na výběr."
    },
    {
      "de": "Ich treffe meine Wahl morgen.",
      "lv": "Zítra si vyberu."
    },
    {
      "de": "Die Wahl findet am Sonntag statt.",
      "lv": "Volby se konají v neděli."
    },
    {
      "de": "Viele Menschen gehen zur Wahl.",
      "lv": "Hodně lidí chodí k volbám."
    },
    {
      "de": "Die freie Wahl ist wichtig.",
      "lv": "Důležitá je svobodná volba."
    },
    {
      "de": "Bei der Wahl stimmen wir ab.",
      "lv": "Volíme ve volbách."
    }
  ]
}
```

### Audit findings

Finding 1
- Severity: LOW
- Field: study.translation
- CURRENT: Volba • Volba
- Audit proposed replacement: Volba • Volby
- Reason: Druhý význam v politickém kontextu je množné číslo „volby“, nikoli opakovaná „volba“.
- Rule/category: TITLE_FORMAT

### Cross-dataset finding

NONE

---

## 07 — c1-gelegentlich

Production index: 340
Card ID: c1-gelegentlich
DE: gelegentlich
CURRENT CS (front): Někdy • Příležitost • Kvůli
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-gelegentlich",
  "layout": "standardStudy",
  "translation": "Někdy • Příležitost • Kvůli",
  "explanation": "Hlavní myšlenka: gelegentlich je slovo se třemi funkcemi. Přídavné jméno: příležitostný (ein gelegentlicher Besuch). Příslovce: někdy, čas od času (Er kommt gelegentlich). Předložka + dativ: kvůli (gelegentlich des Festes).",
  "examples": [
    {
      "de": "Er kommt gelegentlich vorbei.",
      "lv": "Občas se zastaví."
    },
    {
      "de": "Ein gelegentlicher Besuch reicht.",
      "lv": "Stačí občasná návštěva."
    },
    {
      "de": "Gelegentlich des Festes gab es eine Rede.",
      "lv": "U příležitosti svátku pronesl projev."
    }
  ],
  "comparison": [
    {
      "word": "gelegentlich (Adv.)",
      "meaning": "Někdy • Tu a tam",
      "example": "Er kommt gelegentlich. = Občas přijde."
    },
    {
      "word": "gelegentlich (Adj.)",
      "meaning": "Náhodný • Náhodný",
      "example": "ein gelegentlicher Besuch = Náhodná návštěva"
    },
    {
      "word": "gelegentlich (+ Gen.)",
      "meaning": "Kvůli",
      "example": "gelegentlich des Festes = Kvůli prázdninám"
    },
    {
      "word": "manchmal",
      "meaning": "Někdy",
      "example": "Manchmal regnet es. = Občas prší."
    }
  ],
  "tip": {
    "leftBlocks": [
      {
        "text": "Pozice ve větě pomáhá: před podstatným jménem = přídavné jméno • Po slovesu = příslovce • + genitiv = předložka."
      }
    ]
  },
  "important": {
    "text": "Příl.: ležérní. Adv.: někdy. Přípravka. + Gen.: kvůli. Kontext určuje význam."
  },
  "sectionAccents": {
    "explanation": {
      "blue": [
        "gelegentlich"
      ],
      "purple": [
        "Hlavní",
        "Hlavní",
        "Hlavní"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "gelegentlich"
          ]
        },
        "lv": {
          "purple": [
            "Občas"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "gelegentlich"
          ]
        },
        "lv": {
          "purple": [
            "Stačí"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Gelegentlich"
          ]
        },
        "lv": {
          "purple": [
            "příležitosti"
          ]
        }
      }
    ]
  }
}
```

### Audit findings

Finding 1
- Severity: HIGH
- Field: study.translation
- CURRENT: Někdy • Příležitost • Kvůli
- Audit proposed replacement: Někdy • Příležitostný • U příležitosti
- Reason: Adjektivum musí být „příležitostný“ a gelegentlich des Festes znamená „u příležitosti“, ne „kvůli“.
- Rule/category: SEMANTICS

Finding 2
- Severity: HIGH
- Field: study.explanation
- CURRENT: Hlavní myšlenka: gelegentlich je slovo se třemi funkcemi. Přídavné jméno: příležitostný (ein gelegentlicher Besuch). Příslovce: někdy, čas od času (Er kommt gelegentlich). Předložka + dativ: kvůli (gelegentlich des Festes).
- AUDIT_CURRENT != PRODUCTION_CURRENT
- Audit CURRENT: Předložka + dativ: kvůli (gelegentlich des Festes).
- Audit proposed replacement: Předložkové užití + genitiv: u příležitosti (gelegentlich des Festes).
- Reason: V daném spojení následuje genitiv des Festes a význam je „u příležitosti“, nikoli „kvůli“.
- Rule/category: GRAMMAR

Finding 3
- Severity: MEDIUM
- Field: study.examples[1].lv
- CURRENT: 
- Audit proposed replacement: Stačí příležitostná návštěva.
- Reason: Pro adjektivní význam gelegentlich je zde přesnější „příležitostná“ než adverbiální „občasná“.
- Rule/category: TRANSLATION

Finding 4
- Severity: MEDIUM
- Field: study.comparison[1].meaning
- CURRENT: 
- Audit proposed replacement: Příležitostný • Občasný
- Reason: Význam je duplicitní a „náhodný“ není v tomto kontextu nejpřesnější český ekvivalent.
- Rule/category: SEMANTICS

Finding 5
- Severity: HIGH
- Field: study.comparison[2].meaning
- CURRENT: 
- Audit proposed replacement: U příležitosti
- Reason: Gelegentlich des Festes znamená „u příležitosti slavnosti“, nikoli „kvůli slavnosti“.
- Rule/category: SEMANTICS

Finding 6
- Severity: HIGH
- Field: study.important.text
- CURRENT: Příl.: ležérní. Adv.: někdy. Přípravka. + Gen.: kvůli. Kontext určuje význam.
- Audit proposed replacement: Adj.: příležitostný. Adv.: někdy. Předložkové užití + genitiv: u příležitosti. Kontext určuje význam.
- Reason: „Ležérní“ a „Přípravka“ jsou chybné významy či formulace; předložkové užití má genitiv.
- Rule/category: SEMANTICS

### Cross-dataset finding

NONE

---

## 08 — c1-wahlberechtigt

Production index: 543
Card ID: c1-wahlberechtigt
DE: wahlberechtigt
CURRENT CS (front): Ten, kdo má volební právo
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-wahlberechtigt",
  "layout": "standardStudy",
  "translation": "Ten, kdo má volební právo",
  "explanation": "Hlavní myšlenka: wahlberechtig je přídavné jméno, které znamená, že osoba má právo účastnit se voleb – volit nebo kandidovat ve volbách. Složení: Wahl (volby) + behrechtig (oprávněný).",
  "examples": [
    {
      "de": "Alle wahlberechtigten Bürger können wählen.",
      "lv": "Mohou hlasovat všichni oprávnění voliči."
    },
    {
      "de": "Ab 18 Jahren ist man wahlberechtigt.",
      "lv": "Od 18 let mají volební právo."
    },
    {
      "de": "Nicht alle Einwohner sind wahlberechtigt.",
      "lv": "Ne všichni občané mají volební právo."
    }
  ],
  "comparison": [
    {
      "word": "wahlberechtigt",
      "meaning": "S volebním právem",
      "example": "Er ist wahlberechtigt. = Má volební právo."
    },
    {
      "word": "wählen",
      "meaning": "Přát si • Volit",
      "example": "Ich wähle heute. = Dnes jsem hlasoval."
    },
    {
      "word": "der Wähler",
      "meaning": "Volič",
      "example": "Der Wähler geht zur Wahl. = Volič jde k volbám."
    }
  ],
  "tip": {
    "leftBlocks": [
      {
        "text": "Wahl = volba, behrechtig = způsobilý. Běžné v tisku a právních textech."
      }
    ]
  },
  "important": {
    "text": "Wahlberechtig = s právem volit. Naproti: nicht wahlberechtigkeit."
  },
  "sectionAccents": {
    "explanation": {
      "blue": [
        "wahlberechtig",
        "Wahl",
        "behrechtig"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "wahlberechtigten"
          ]
        },
        "lv": {
          "purple": [
            "Mohou"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "wahlberechtigt"
          ]
        },
        "lv": {
          "purple": [
            "let"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "wahlberechtigt"
          ]
        },
        "lv": {
          "purple": [
            "všichni"
          ]
        }
      }
    ]
  }
}
```

### Audit findings

Finding 1
- Severity: HIGH
- Field: study.explanation
- CURRENT: Hlavní myšlenka: wahlberechtig je přídavné jméno, které znamená, že osoba má právo účastnit se voleb – volit nebo kandidovat ve volbách. Složení: Wahl (volby) + behrechtig (oprávněný).
- Audit proposed replacement: Hlavní myšlenka: wahlberechtigt je přídavné jméno, které znamená, že osoba má právo volit. Složení: Wahl (volby) + berechtigt (oprávněný).
- Reason: Německé slovo je dvakrát chybně napsané; navíc wahlberechtigt neznamená automaticky právo kandidovat.
- Rule/category: ORTHOGRAPHY

Finding 2
- Severity: MEDIUM
- Field: study.comparison[1].meaning
- CURRENT: 
- Audit proposed replacement: Vybrat • Volit
- Reason: Wählen ve významu volby znamená vybrat nebo volit; „přát si“ je zde nepřesné.
- Rule/category: SEMANTICS

Finding 3
- Severity: HIGH
- Field: study.tip.leftBlocks[0].text
- CURRENT: 
- Audit proposed replacement: Wahl = volba, berechtigt = oprávněný. Běžné v tisku a právních textech.
- Reason: Část slova je chybně napsaná jako „behrechtig“ místo „berechtigt“.
- Rule/category: ORTHOGRAPHY

Finding 4
- Severity: HIGH
- Field: study.important.text
- CURRENT: Wahlberechtig = s právem volit. Naproti: nicht wahlberechtigkeit.
- Audit proposed replacement: Wahlberechtigt = s právem volit. Opak: nicht wahlberechtigt.
- Reason: Oba německé tvary jsou chybně napsané; správně jsou wahlberechtigt a nicht wahlberechtigt.
- Rule/category: ORTHOGRAPHY

### Cross-dataset finding

NONE

---

## 09 — c1-zuschlag

Production index: 558
Card ID: c1-zuschlag
DE: Zuschlag
CURRENT CS (front): Prémie • Přirážka
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-zuschlag",
  "layout": "standardStudy",
  "translation": "Prémie • Přirážka",
  "explanation": [
    "Hlavní myšlenka: der Zuschlag znamená prémii nebo přirážku – částku navíc přidanou k základní ceně.",
    "V rámci cestování/dopravy je der Zuschlag příplatek za rychlejší vlak, lepší místo atd.",
    "Nezaměňovat s der Anhang/die Beilage (příloha dokumentu) – to je jiné slovo.",
    "V aukcích den Zuschlag erhalten znamená vyhrát aukci/obdržet objednávku."
  ],
  "examples": [
    {
      "de": "Für den ICE muss man einen Zuschlag zahlen.",
      "lv": "Za vlak ICE se platí příplatek."
    },
    {
      "de": "Der Zuschlag für die Nachtschicht beträgt 20%.",
      "lv": "Příplatek za noční směnu je 20 %."
    },
    {
      "de": "Sie erhielt den Zuschlag für den Auftrag.",
      "lv": "Zakázku obdržela (na aukci)."
    },
    {
      "de": "Es gibt einen Zuschlag für Übergepäck.",
      "lv": "Za nadměrná zavazadla se účtuje příplatek."
    },
    {
      "de": "Der Preis versteht sich ohne Zuschläge.",
      "lv": "Cena je bez příplatků."
    }
  ],
  "tip": [
    "Der Zuschlag = příplatek/příplatek (příplatek), nikoli příloha dokumentu.",
    "Den Zuschlag erhalten (v aukcích) = vyhrát aukci/přijmout objednávku."
  ],
  "important": [
    "Der Zuschlag = přirážka/přirážka, nikoli „příloha“ k dokumentu.",
    "Příloha k dokumentu v němčině je die Anlage/der Anhang."
  ],
  "sectionAccents": {
    "explanation": {
      "blue": [
        "der Zuschlag"
      ],
      "purple": [
        "Hlavní",
        "Hlavní"
      ],
      "red": [
        "der Anhang",
        "die Beilage"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "Zuschlag"
          ]
        },
        "lv": {
          "purple": [
            "vlak"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Zuschlag"
          ]
        },
        "lv": {
          "purple": [
            "Příplatek"
          ]
        }
      },
      {
        "de": {
          "green": [
            "Zuschlag"
          ]
        },
        "lv": {
          "purple": [
            "Zakázku"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Zuschlag"
          ]
        },
        "lv": {
          "purple": [
            "nadměrná"
          ]
        }
      },
      {
        "de": {
          "blue": [
            "Zuschläge"
          ]
        },
        "lv": {
          "purple": [
            "Cena"
          ]
        }
      }
    ],
    "tip": [
      {
        "blue": [
          "Der",
          "Der"
        ]
      },
      {
        "green": [
          "den Zuschlag erhalten"
        ]
      }
    ],
    "important": [
      {
        "purple": [
          "Der",
          "Der"
        ],
        "red": [
          "Der"
        ]
      },
      {
        "red": [
          "die Anlage",
          "der Anhang"
        ]
      }
    ]
  }
}
```

### Audit findings

Finding 1
- Severity: MEDIUM
- Field: study.translation
- CURRENT: Prémie • Přirážka
- Audit proposed replacement: Příplatek • Přirážka
- Reason: V uvedených dopravních, pracovních a cenových příkladech Zuschlag znamená příplatek, ne prémii.
- Rule/category: SEMANTICS

Finding 2
- Severity: LOW
- Field: study.tip
- CURRENT: ["Der Zuschlag = příplatek/příplatek (příplatek), nikoli příloha dokumentu.","Den Zuschlag erhalten (v aukcích) = vyhrát aukci/přijmout objednávku."]
- AUDIT_CURRENT != PRODUCTION_CURRENT
- Audit CURRENT: Der Zuschlag = příplatek/příplatek (příplatek), nikoli příloha dokumentu.
- Audit proposed replacement: Der Zuschlag = příplatek nebo přirážka, nikoli příloha dokumentu.
- Reason: Text obsahuje opakování a nepřirozenou závorku místo jasného rozlišení významů.
- Rule/category: NATURALNESS

### Cross-dataset finding

NONE

---

## 10 — c1-beziehen-sich-beziehen-auf

Production index: 559
Card ID: c1-beziehen-sich-beziehen-auf
DE: beziehen / sich beziehen auf
CURRENT CS (front): Aplikovat • Aplikovat na
Card type: standardStudy

### CURRENT Study object (production, exact)

```json
{
  "id": "c1-beziehen-sich-beziehen-auf",
  "layout": "standardStudy",
  "translation": "Aplikovat • Aplikovat na",
  "explanation": [
    "Hlavní myšlenka: Formální registr: atribut zdroje, pravidelný příjem o důchodu/platu nebo stěhování do bytu.",
    "Příklady hledají typické každodenní použití.",
    "V případě pochybností zkontrolujte, zda se jedná o stav nebo akci.",
    "Kontext a postup určují správnou volbu."
  ],
  "examples": [
    {
      "de": "beziehen / sich beziehen auf.",
      "lv": "Aplikovat • Aplikovat na"
    }
  ],
  "tip": [
    "Formální registr: atribut ke zdroji, pravidelný příjem o důchodu/platu nebo stěhování do bytu.",
    "Pokud kontext odpovídá tomuto významu, použijte beziehen / sich beziehen auf."
  ],
  "important": [
    "Formální registr: atribut ke zdroji, pravidelný příjem o důchodu/platu nebo stěhování do bytu.",
    "Beziehen / sich beziehen auf: před použitím zkontrolujte kontext a porovnejte s jinými slovy na kartě."
  ],
  "sectionAccents": {
    "explanation": {
      "purple": [
        "Hlavní"
      ]
    },
    "examples": [
      {
        "de": {
          "blue": [
            "beziehen / sich beziehen auf",
            "beziehen / sich beziehen auf"
          ]
        },
        "lv": {
          "purple": [
            "Aplikovat",
            "Aplikovat"
          ]
        }
      }
    ],
    "tip": [
      {
        "purple": [
          "Formální"
        ]
      },
      {}
    ],
    "important": [
      {}
    ]
  }
}
```

### Audit findings

Finding 1
- Severity: HIGH
- Field: study.translation
- CURRENT: Aplikovat • Aplikovat na
- Audit proposed replacement: Pobírat • Vztahovat se na
- Reason: Beziehen znamená mimo jiné pobírat nebo nastěhovat se; sich beziehen auf znamená vztahovat se na, ne aplikovat.
- Rule/category: TRANSLATION

Finding 2
- Severity: HIGH
- Field: study.explanation
- CURRENT: ["Hlavní myšlenka: Formální registr: atribut zdroje, pravidelný příjem o důchodu/platu nebo stěhování do bytu.","Příklady hledají typické každodenní použití.","V případě pochybností zkontrolujte, zda se jedná o stav nebo akci.","Kontext a postup určují správnou volbu."]
- AUDIT_CURRENT != PRODUCTION_CURRENT
- Audit CURRENT: Hlavní myšlenka: Formální registr: atribut zdroje, pravidelný příjem o důchodu/platu nebo stěhování do bytu.
- Audit proposed replacement: Hlavní myšlenka: Formální registr: vztahovat se na zdroj, pobírat důchod nebo plat, případně se nastěhovat do bytu.
- Reason: „Atribut zdroje“ je chybná formulace a „příjem o důchodu/platu“ má být „pobírat důchod nebo plat“.
- Rule/category: SEMANTICS

Finding 3
- Severity: HIGH
- Field: study.examples[0].lv
- CURRENT: 
- Audit proposed replacement: Pobírat • Vztahovat se na
- Reason: Příklad není německá věta a opakuje chybný překlad; karta neposkytuje použitelný studijní příklad.
- Rule/category: STUDY

### Cross-dataset finding

NONE

---
